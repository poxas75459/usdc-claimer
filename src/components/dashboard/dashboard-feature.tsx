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
    "a3UQDQZ6rwnDvKXLEKXn1UAoe3UikJN4EQ9b4zLohH5vCAh1HecqSDX7wDZsuQQ9gHLX2A31391BeNeKBUxzXv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDfiXTNyHwLys4HjnU5sDbFKHNFeqQtx4bzR36qxExyytJ6DgydTPCiFjqZyxGVAqC47odqHdMev2YGFvF8e7As",
  "key1": "5d4cQ7EafdfQtjFQRZz6sVYn3Du2nQHd41sQHTQZM1hDhbfGdzakckD7qPyssRn85Ajm5yqmnrHx3cpzBJxtdyf3",
  "key2": "or9FhQthteot6pMutuwc9xe8qLqN8JVnMQ85Ac6QdgMrtJz4rZr5G1QQW15Bx5TikuPpZ46C69iGVXqZX6BX4eL",
  "key3": "3UVoPkSaopuJj9B5XPhLp9bH4gLHa3NCdDTLeVsMcywzfat9YXWSJsif1RtZBBsyzoHckBLLYHrvQ41x9yQsungb",
  "key4": "Kzpo2fh1wAzeoxsafDxg1r4QMsR2i7ejHof7YGy1Yup2vEJnjwSNzwadYM4iuUGbme2ZCFRgTSJt3x68AgfDKyA",
  "key5": "5GX1wRB48diSF8X3hcwoq5CeATnpcrhjhMopMGUZVZQV1MU99htAeqgNbbeHRRvrw1TAw6braCkSZ8bPJXMgNqdP",
  "key6": "2FRwMYWaB1bzMezwYFo1BH4FbgbmuUYFWPfu977yhJoRFkPCdj9dHjKs6SUG2THHkYD4BpyPmdw73zz9jWraUBDU",
  "key7": "4wq5x49mGjUbk7DoV4AoNmrtvHQg7wocPERbVV9DgEqgqHQQqjafcBBogdTeZ8SaMUBmicQGRhc4q91m3qC4AuTN",
  "key8": "hZbjjxbfdQkoGZ22PQHQ4HsZX6ST3AkqiBesAbAG4XAi1F86dkKhfwgjTtVd6NgbszSp4xY4G4JzqJRWVquWMY5",
  "key9": "5a4vSdzwc2tWjY2DfE22KpNqH3W4ZvapEXpmn2SHueuofZHtBYrB3jeD4mBwmTn9rWXTYUqktkyG2Xknd2v6VTJz",
  "key10": "4NvwjY4bKo43y8hQ5NDuAYKjudYdCsrG7aM6wCzMDwku18yCh2jySTw8EdZkK2CXB9ubUxFCtaqQ6ZXRrhH9YNia",
  "key11": "4iCThJeF8PdjyGLK1AZB1EFybPgjc5eRESsLXx7yERJQAYZoTEgWtd9Ve1UT6T3Lz76j7MRFWJ5fxWVmQDuXPPq",
  "key12": "K4wC4smtyD1CuML2WeC4ghuv2uASp9u5EddcNkXcjNUMWZFFyP1Wjd7DwEUvA4zyxvUgdYEqacjqUMcrL3ZxWQ6",
  "key13": "c1FCjhbfeftHH9G6JAorqzKYxGk3sdBi5wPw5gyXtzp8HTmwHhYxZasnqnZACgy1s7d5bZjLatLGd5g3dwnaud7",
  "key14": "3a4ebKdgWHnNSXnWPq4xqGZ8Wn9Q6fFmd4VEmtziSJTjVbDbR6NMc6j7bofKj59jYxxqTL6Q1f6bcPyDAAgGcZoh",
  "key15": "4X6EVMYL2EAdso64yQkMzHvaoxzru5ycx5r3QdWFTFMqjkpt95d38vkTdLLjvoTB1ykCpWhXGsuTDrvGfF5DV5bK",
  "key16": "2RUy5Fh92bBYzFMRSL5kdZpxXhHKeV59JRAVawHJAENihcPaCFWw3ZZca47eDq2VL9zcaxKYnvM2hv5FgaRh99kg",
  "key17": "47tQVoxkK6xFiWFWyN67r4S3KcuXCpzP4PMvLz1As5bRdx6snT8jhnHkN7ZEQqCBNh2w7bSM9dkK2rPhLAecRvM9",
  "key18": "joQ3nQKUK4ba6DufMaXUy9x3ondX1AmSrkBGBfdZRKcjjYFRLAobcXJBhk9zku5zuLRa9MkVotXaeW4JaMeW5bv",
  "key19": "4VYpfwQ1EpYiypt77TuBK3SAFPzp43Y7WZfcLAwcdW3bsNmcPWNGouHJvdbj5n6cBTfmmpsSExoEjmVCoq4TtQMR",
  "key20": "3pvwL2HYi57LFgdfZyqyiYAU2wawsT62GFuxrdXAF9G4YvGYJy7UfbtTmh2DN7qJAvnLA6joU9SKRmsoFQVSXCMB",
  "key21": "2pbugF6o6HHLUjCotViaSpgxhBrVz5AxrpoudZqf2BBSYkq6w3Czbbj9ymjYUgGYFEVdH6YusMe5Kphd5k9TWNju",
  "key22": "2EQC4PeAqrwdrYxwC5qMADCBn1RAEJUxvpKJ2MdLBfTHt12mEu61f6gAGenDLmLp7hXWE4ddYMo2CYM4DZFFrNjW",
  "key23": "Qih6tLTRgDB2rN3jxGn7Zg3b5zAnyVhKgy5qYCi2EyT2NUwY55zk6GywWWWYFQY2jSvVMWVQS1Xbnxe93PUjJ3U",
  "key24": "3T2YXitd4pV679x3s7HL5Vx5JuPzESspth1M4ERdzcMiETiBvivscz8Y5MCPF3eAS6J5uNRexezpWnznURXtaiBG",
  "key25": "2sRKB9pYHH1ZXvja62MM3QrY9jsDPxpkviYVcQxqUq9RCVcehzpqi3JCQt1ax33t3bgvUbRRD1PRm3b7cGvV8GtZ",
  "key26": "5LbC7FQRQAMYyf87n6fSUxT3aFpCuD2DFaMh2QSwisfE4jhJX61n9xonBf6iCWYThWmGXhtrwToTuK73ZduXED1R",
  "key27": "65QKBBB3tLBdEGo1UUMvvpx1gVktzmL3RcE44CRs417QXDmKc7nDVapJw4gtE297rVkvWFTboMJeENpATgpCw4sA",
  "key28": "5LYgQZhpZfA9wooVRXxPA7apWvPEvZHi59E6aptkw3hauaX7gnXY3XLz7mzmCo6KartVryMjMKkbz7WzJpeeNKLN",
  "key29": "275dEujnhVzrX9G5d5kmV4FSJNkb5Zesa4baDSA67H3gLnAV1yC7XoQv9JXk14jwf5HUSjvGM5HrG7gLo7K2tbTM",
  "key30": "2cDEBPYPua17hGdwuHpGbxY9HgLPBGCxdGXJCcDPQ3XyB2iAH7ECDsAH34UuhzCdazcNTCpsC2DG8B1MQFAdPifw"
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
