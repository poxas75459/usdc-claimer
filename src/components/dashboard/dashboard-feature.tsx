/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "29JfXYTeCHKisF8K7r7Pi5PgdQXzBY4UK85WHeN4rT2RHM1MW37i6EMwZX12kz3H5YotFFzMkMLfvF2VPT9V9A1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqcWi47wAUfprEdTHsh8RGfCpHpjF6DvrXrFrxPZ5KyYCrRdHEs1yzyJx8piYWJQhxSJ6RC3FtN19efyvKcvB7n",
  "key1": "5GeiFh626LVr1u55JxUYx8qeqcvmi3BmMcd42L6HmE7kgayt8cdMLegxUgn7yQekJeyPg9RRWWMjrzfbVjbGpWN3",
  "key2": "qdE4F5AnWF5DBrKjwhcrfC8mt1UY8ozo4NgqHqTtFbEwsyttSLKCxGm4ExtdFQSrT1iDccAhjaamCm3rPbv9rkT",
  "key3": "3KdvBXjqzqYic6FYKnmriSnHGAeqF2W4gd7iG3zZaguUqQyTi5Be6pDonXGsDdE5AjbFTGxtsWZwwMVNYewuTnvZ",
  "key4": "3QBgeW6kDcRDaHfv7JTTDrz4MVfTWu7HYnZX8256fbm6xEvb6js4nVJWbcAGfVoWEVjVv3ca4r6z11EXUzU4GnZC",
  "key5": "56udRP11zpH7NrKSUgajCP22BhFmxW5cwt4Piqb96sJomvbkAddjNTmfdsm8keEFC9R4qSMuR6W3uDh4uMpzho8K",
  "key6": "5kJJKiJxVKj3cMH73NM2876MEy48Rn4kRYn3VwTT6kov65odCfxEYDE6LGtvrpNDBYH8seyQjcJ4Mu2Audzots8S",
  "key7": "3z4eGP6tp1Cp6Gsxn73dKutc7zVYuSaD4EBbKJWAMCs6jgsDx1Tipa3dipoBuAvsjQXnsFhF5BzbWkNQu2tPuFTs",
  "key8": "5A9giw4iFoNifhUmKTPLw2tjiMwBwMSyCJyemjEPEZj2svpdpwgWa7yKNBNy56v8gu5sgCXKPZEdjSpkw1miW41z",
  "key9": "3xAEucQz4GfwwGUDmwby5jbJ7t1DgS9DLYqE8oeXByT3wsuaavzopqWKS1DymLmAWLdnHDzL2nh6UimC2LJ2bnrX",
  "key10": "8VK7ViJy4s3TWNjgMj88bMSYumEeWnDcQ44wTRTT8J6Y4iffv4hXfgZjeURdUNYBpHbQCKferexU8AEA5UqssWY",
  "key11": "29TTtCf9DxixUPHjGTgS4woQFMyH9Q8PbFSEivnxvF6mXnfx6GPDBzNrNJKzmFMCASgpTT31Y9kfTxeyebs574yc",
  "key12": "5UnZjkSZXDHZNUKJ7984XovqJ15GAg3FTNoc96uF6BKtxT2tPWyJLj79NERG5VkKD3gqQHAP5BFiabFfTrKr5ARw",
  "key13": "2ceRsU5U9HbT5DofgNikw2ieCUgB3P92hQUVNFMvfcJBBQzKpQYhbhfDXx8oAnzygiWF8XR9mDrbygbpLeYbg8Qr",
  "key14": "4BwZ9KeuGRw4D2VoknoHhHdgc2NZfiT1zZkHW17BGNr4F9pGHUH6wY2LXmTchonfnTxhyBjXSg1T5MBbS1gYds3G",
  "key15": "2DV1fbNHtWzGQR9ksM56yYUopbo6ygjhkN6X979xPwNMWAyBcdNvniFnejiqFkCbWmz8R4pKr67itebtNBBb1Sps",
  "key16": "2hNA7vh414EoZwqmpG5Kx8jejAn42CiAFJpfS2YaUgXyNGNPaDCTxcA51ToAfzcqprVqMgBzMDG4XRWU8hqSJfYA",
  "key17": "R3GD32RaeCbYg31KudreJWsKk3FqV2EDJtk6FzxvDzB5dM4NATGLonxXkduQ7JRpkG5B2y2G1kPeafbCSAktBef",
  "key18": "oQoAvZArW4UBqAWZgB4cxoT3KwZRvfWmsRvHmHyjjnyc2M8t7ySerSYhfVGcEv6eu9jqg8dNrU7omtkpmQU9SwR",
  "key19": "2bXKQrCXspFse8iLNgrJGda7Ty2CE3ZqF6vgi3gFjxVwqx1v7Xh7ogPFK9BT9gfdzMDRMtmb6KzgPjUp1iHi4sX7",
  "key20": "4FKZoyJtMdzFZak6HBehVPf1gYbVy1o2VpLqa937RB1gZdJww3eSFozcn8omc7cuk99aTbYji1mDfvTMTrUWH1DJ",
  "key21": "4NERLYVqPsH2GHSgk6bHnYsfaYYSq58JyAHNcVYCw7gSrD1Y7zf75QAmWc3waJGbXzA3XBtBEZEnvq8yJNT2QDc4",
  "key22": "4yoTpCkj4zhQKr5RZbSAgW1JWEJRzGUhyYUfY8rxQ7Z1ZPDqMjwLqKRyiP3KfZzxr9hskXdxbxdAE4SekfV9zyfS",
  "key23": "2PAK8tPw9omxgTNC8CV4YnNWrHqsApGqX11sosX8UenVDo3XwCUCjux7XgPw51BoYbzFefr1vi6x756aQ92y6Zg4",
  "key24": "3g7SMZTgVeVz5zRY7Ts4ghHjhgGxpdWkuZsrqTfY6XqN4YoQ7j8EfP5Cqcz38tnn1LK5iokXK1iPhECs4WbY4dnY",
  "key25": "2cHpueWQ8trG7BA6QUzJAkQeKLtj1APNkWeGjUHEgLx6N6m5G5FV655J2dg8RFShQRYH6J7WdB5jSjRk5u3MMFrL",
  "key26": "4N3x9YBSqhrJdiRP2i5A91UcVWsYPCDWVA8yW3yPfCWgF9sWfiEvTAn1P9NQSLVdLSg45DcKL8KCAxsCQDN1jVn9"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
