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
    "3ARGG1cQLZgTPKiBKSp1cBKdyvmveFTyRQNeZ3WH33WNgqY3QT6dMgGnF5CpUkopSqz2hiRHeLRqdo1fqN8NgEus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQr21mDPFWp23N3iL32V5N91jfPBinctWT8JzXwP3yVfg3Jq13QazsbsSQxk61MiMQvnKFjXcCvBt6hKxxPCukt",
  "key1": "4sEuakriurphd5TDdfbg45YFBLF5jYNEBPzAUa7rRqo1tRPoxckA2DvXxTScLofDbLH2T3i9fJthFnomWtV6iM9x",
  "key2": "3Jfee5yDMGgbR3mTEBkGjfpJvbnXk36HQWa8ShBhNt9W3zjnNaWtMHhezfFujXuNgSuQiiREv34tPtq1n6SfCgz",
  "key3": "2TJwsuUfFKhqUo9fuyzw42hY5nMTyPKNBGn7mMHVGxV4rt3wQnsN92Qr2NWdvuUayT2T4EHQDz8ksimk4AEq6bBd",
  "key4": "2x3JgeFL1XoNkpVTtQ7TvyL2Du7d1Hst6F329s9aaTZsGxYou1vtRCBTfFgh7BYXPwJDaN6JoGHYuyVkK2o3ChXa",
  "key5": "52HdWKJneT3CWdsU65FzEEpFaQpSyw69GX2QdaBCoQYHDkiRyUiiXMA3Y2W7DhRKq9mDthnkLKLpKXVom2KtLeBW",
  "key6": "2z9XzuWxg8GTL3ofVtpKJuHHPVsppqEH5kfyMm6FBEAuqXPNWfgBFFuS3dgAx8AH4Zd7FbtUkc2m12DL3HpfmNzu",
  "key7": "3Z8AWBbxgniGMjmoKHtvCSN8yEgy9hb65aJkBRebRW24TdYs6qLK2taJn1SyHemDVgJ4ARQUJcYvJ3zpHbdwVbsR",
  "key8": "4BiDH71xnCtrDQd8ZFTTWcij4uVwCU5JkpD9aKxtCBgmy1yTAW7GCRini5TDbA9dGTqzAUXNt8VjHwUCcjfhLHop",
  "key9": "5Tn57ZgH3EizdvBAsujrpULCA6abXpPzgV7ZeDBCb8Ri55mC7ANWiq3bwH1pNL42pcSa5snCCtVsisJhe9FK1F5M",
  "key10": "4DvXTY5UEyfjYJtMmR7XEQoMVqheuCd5aFdQd1YdNj7VK8TMsLb99z3VHSaXYiZKs14vMQUwszM1bVfY3Hwboi7e",
  "key11": "LZzgLi26UP36S5Fc1cJFUBvrwnbNPKP4GzrbausErBhur2f7JkjymXMx5vCUzgsU9QJxSveYbszMjACvPffBtJA",
  "key12": "FSzdLdmZFnMhXxiHbMYWmivfCmzmkZT1PNmcbQVq95EgvTsvQEXtUMGJjUefUXdK3CGurFn7DKc1UJzQQ73TmYD",
  "key13": "3dYp6wsqKTXKW3LCZbbbMcPNSEkqpkMrzVKuzBQNXQVu7x87eJcdMnVL8MkMDTWsa6oKW2HamTFk72vNamxR7nXq",
  "key14": "5ZETY6EDaMMK1dKhoMoDBHm5pdcj5z85f3nvCddk5ZdZfHFXtiaHiqeQPb5HyVbrMHZ2Bg7G5xiedPV4trbDA8X2",
  "key15": "G9Ed66yjHRoUhPTpZ7v1i2iZvAtch9c3Ht6SiGhdbcRQxkhnWaEZu4HYx88b2G6Sb1AptFnEm9rwjjC5touqpfD",
  "key16": "2QKyyZUfeX4vUgN6sQcgtoQRja8qhLsL93FA9MhyQhsnegv4XA8Hfs2yS7Asp6FftzUYw9oWTXJvddWycBhwqhYS",
  "key17": "5zdA3BajByfPwkLmi9NnvQ8qnre9t9twqJLU6cwZMFn4LG6UsqHTpTiFJL2Bnkj7b1i5rZGCwcrbXHaxnAwMnczX",
  "key18": "5T16sG6S7QsY81ds9pqR7UsQhnMRwJUdnnCSWgGxgcxJcQHJL6BqZftCQbhZdkGBJnpLu9RtKP9Rr3ED43GeFyU4",
  "key19": "3TPofLixZzhAhPTpMGuq1QaiCRiGVdgcHmKKJeu1k3aHjw1nNmH4whT3xHMKbiBr8zdo6r4opDnxPgULosGEnm4X",
  "key20": "2eHt87TEkKMuBNWkZQWhaxTSiAfLybEkPeQaesmeHkUUQ621YTskZPKcmqPoT2ND5q6pyNTz3mbe77gj1uVG3844",
  "key21": "3d4JfoDj6n5p7RUUpfGnJjGQLejgKUxP7sY6Rd6ezAisncHe3q8aeMP2Kux9oHJyzyJ7MtMGNGmQzQwt4KYsmWCW",
  "key22": "47wem3mvXAeitAqRnkq1N48UpSWuyQfGWvjRLxCA66nm6zBPReLfaLg3UFdmN7cGXwbMggJdgLXjYmZeGpC42c72",
  "key23": "4NPbbajh49rbVkni6n1k8aazVatzJrRfatWXZTQtFhKFit5zaSryUji11VRWxV4uKjYZgVYwL8mCBzrCRTeSpMFF",
  "key24": "3WGq2WKM4ow19jfTZsHhSLtNRft3TMVK5VrjMpAJAdPHGo3SdVurw8ThcqHZWM1En7CX7kEQV1kfDU7X84rqSPGG"
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
