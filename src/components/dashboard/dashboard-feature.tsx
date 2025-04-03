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
    "2D5cAgpKix7AaDmbLh1c1ScbMwq55gnXGKA73fYdiHgezVQ9bg4YuPYp7Zwdnm9j7pErPY2TVExNtXGCgmQFFWMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGFBuz8xjUUukmnsUJvYujLzxZmZnTni4eChzN6Bijr6EGov6LYENgfRhvxhwK1ArMr8LoccjnUtpd71Eg5d9aq",
  "key1": "5RSFriqET2noeZhGBfiL4vVWDinfkXmxtQAJkR4TrHghJftwvMBK6dJLax3s3yVgaX7CMVs3fdFy3xg6R2G82v7Q",
  "key2": "2BHgYAKFYayNgpcSeZXZSqNDrNYdhpyALx7rzFEeVqSX7YhYsREuENbFT35f43MPAges6v5a58WwSg3mwyVhUfkv",
  "key3": "2tH8tX9APXz58m5sWVKPsEJBLfSfVaG7rTRV5MYoW28xoJKidFswMBePHAH6sme8u1HYMQfiFBEi8Sx5Vyw9irzD",
  "key4": "4ZaT1Qp1HMvZgnxJsDYj1qeW3CrkjRDYUWJuTso3pCtJ1e1kza4QQdjEe9Krs85tpDzLQp8PYQz35UNKnsfXA9ns",
  "key5": "qS17EhFN87fKEzYq6f2vMR3txv5PkP6XfZ7C1iSYpxAj8cxhvh9wAq8qpcg7UftcLr8UExL5HEDVa5indq5QcJC",
  "key6": "5Aiic5djLPYWugQ3s5Nkh86rgQNx5oVDNRL1gAwTnBzA6fhLtkFqmTPxuB4nMawtozap5fPDQUm9SqakTU8WPP7k",
  "key7": "2JxPkAUeLTA12cWETM4pdGHQPhu81qHsu6jWFbuP9Mtajq8gBW97bakQB9KDvGcwgGqCgaGkEkRTVHtrQfg1Lyp2",
  "key8": "HXGLLsmd8zpVMMQfGqMxE3RY91yPK1kgTWyGX4JbpbUsDEB1eouZtPwPVvbpHkynbizTBYb4Cx4UTQujeMi38xX",
  "key9": "5NdvibpQMUXyMKzRYK1qdtb8dH3mgiZKm5domHMFbbNbZR3yxEiFZ9dSbqgCNQXKvwX4X51HPYKocxx8HgSBpcjt",
  "key10": "2xMQhLN3QUewAyxeTNKSfMdYSTWjPhMtWNSQTofZqjbephejc7XQCFQgJrH8eBgSBXZ9FprFot2DywLdAT28aW6c",
  "key11": "Pbzk66UHc9YPDUs1PWGwYfbDtjAwCgi7ohnPYuzkBfj7Y7gUXGwhd8p2S1QyN8ppHpW25cbwYNjYY94TDxjDtTN",
  "key12": "2LUwP7B9Kh3pSo735SszqDQboHbzLtmqEW7E4WWnq9EuqzN4S9Sw4CQDM2egFrLDVcN6ZKYkdzE2jSvgxDebwrg2",
  "key13": "65SMM1F5VXeq3xKPLGM3rxjfYN2z2jKm7LXxGipSQbE4WeRQBL1sCSiWQ4W3cf4EuXph7SHndAiPE2fDCZojyUiq",
  "key14": "3usFyTzvbYAMg2951n4P3xBVnA6TLi9JBPuV9qTm3QPJZz5pfLKmkqEjUj5C38EFdUzCTyU6EVSPBCp1NPEoqKUB",
  "key15": "2Ma5Qr1JLSoKzLsFomD1KbySTqTwYnQPe6E53LP3e4oPDJUYw7zGsD4jLNhynaqWhRrNgNaZedCtACng6EWgWsf1",
  "key16": "3LznWSxMFCFxELESKEUEZShDJCuSxZAAdXtAGfynpy89enHUaiiNGEBMokP7zskkR7QiG2oLJ9PR2s3NsSFYmwES",
  "key17": "3vjP2tCt85MWEDbcQ7xFrEypKniGVMn2NtvgPQLwvLxxAYbdiHP6y9PRpg3foSs2pFQZssQkmL8PNaVkPt47zAo1",
  "key18": "3vpNiCJ9VQGFaKNjyEijNAQTaruAcrfGAFcBcAVRSVHxJKKAcrQQ8ZmoTQadgacHsjpZq4k1GfYjxT1eg3EEFXdp",
  "key19": "3LyrmHdCyQBdCeJjGjKj5A1cKfNJ9y5p2rvy595CNeAzxkyfmiKAngXFyARscKgttuyDftHMPRJc5YLgxjtiUswb",
  "key20": "3xJuAgbMgjjk2E8oL7MkSjVDxVVisTNPdsrB3Ycq2gC3PrmWFdKZmJDoBgy2oBb8N9JeVuucg1osezP4W8rGYEu3",
  "key21": "5fPmht3k6t9pB8Sf8N2Lw9deM89ZMMcS1NLLDB3eBqNkRNkPsNJosm4tv9txtZ6FQdYs7DqZMB7J4yg3RiRxsVi7",
  "key22": "gGSNbSbJy9UepQ8nFXWQH53WZG9sDNWdLsFj8ux6UE6J7rJppMWyYZCzPyFiWvcPXJ2E6DDX8cn8wKT9GDYapga",
  "key23": "4vtZwh3jNGDGtqnYftu5gL3s7CirhNzvqWWjxSEVZPeUqUUEJqDBe7nEQqLbwURwLJJ7Yoski28JueJHAQX15m4W",
  "key24": "5Uph1zfdKGEAfmdTxTcZs4v5XLEe2FT8b5U13gq5ioGP1ELK43JjNi1QwST2dqDxRpyQXrUH1m37qPCF8wX5uQR4",
  "key25": "kQE3fHt3MvND5nKZnVNKsYfSqR5fxDb1VskwyQrpkEKqEbeN7ZtXZpw1bbCZiEsdM9kcmqyM9Udi8JnRUHz2yp8",
  "key26": "5YFprd8AyxCmVyUFAtqDae81SfrsF86bbB5L2kojnH3gTpxfc9UvhT9fc5iFMwcBbs9VdcpVdkyksvYvtvfrRW8S",
  "key27": "4JrRq7ZRrhD4biR58Jvqp2cgd1DJohA2E97GVXrMWmrxUPqcworJvXxEzVq6gNj2NANyfVvKDreX1RLLaSfJKMpG",
  "key28": "4PW1KnurwcrvScdJeiUksXcuWWE9FUHaxnyERVPM2vSPse3ZYs6e5TJ8Te84nRHgNPsiANmeXvcAqcPryecz8jS2",
  "key29": "3GXDN7TG8WUT5pNVdFkmhqE28ePcHi7HtCXdfeaX1r7tG3dVagghMgLA4STKwjsENuqpi9d2K8S88nrJirx82P1L",
  "key30": "3F93wYNHEhgpH9BPw5YXNztyc2WsDjxyEmzw3gbqZUpYV74uzTj5jsQ9CmTRo8ghvZu4kpt1PzUQ2E1ovghUEgZn",
  "key31": "3mSNsq2oV3dyJQk31E9XK3G59WsfPFXZsxp5KdqiNqF1rsQvVNRK2FCJBExVw6PjPJN2Dcj7KthL1rnN8doZaRNr",
  "key32": "C1QCGr6JRxrBFa9e84ZYDjrWvgkfKngCjd1y3pfZKPaasDp3RhQsmiUeef7fs4uVNa8X6TCBPmsSAxQme9veSWP",
  "key33": "5k6uxqE7crcR1g9QKg8DJ2DT87JT1pVkVDkfinRCEtYEaYSAkpkebG6NqgpoX1rV5Z8iUnmU3UFF7PXKFTeZcoWY",
  "key34": "4j9VeMdEnr3kHPgbQefVgjZTsccWK1XfZWc6vJhrjZQ2aXDRE3vprT9FgU1py8AVS3KLkwhS8gEHxUV5dy8zLGRW",
  "key35": "3TrKts2QDcGsCpjhzRW7nMmYSqAn4jn62Kyyk7iBgLDuA4GrLtkmwYEdYe7up18QdMkgUy4V7CNY6yzw5Shgfoyt",
  "key36": "5jZLVoGr4envvLb7KHH93jfasFq13DjYz1J9basFEqKi65XdgqFf9Vthyq5HEpBbgTi2oV4gpwQUcuJbWaqioQHR",
  "key37": "2g6tX9vhJCseRiNr5a24CkgLFu1vq8XTSxoB7a7mZ8oHkaePpQQDa9icfMKN6K4BDQAUHNTcevr121rH6UdbYWgc",
  "key38": "4oytCW4yrGuPUduVHqvTKnjLGV5rbVmP7it3DFRZLRabDY28tvi75diofjY4CoCjwUiCJXzqFnqE1RaNectddGR8",
  "key39": "3BjHUsb5GWyKXhGrNJbLBQ3YZEJNUPojL2ShgpKkmovPjyaSuxoCtypcS4B6p5vMA6Y4Z3yeHhPJaVdn22BMoRig",
  "key40": "5oWkpr91YXfkkxC1cZ6XCJrWkgL43P61yfcWLS2wAhfvdDFapU4iHQMDpQqxQTAxs5TfBJWY66qHvuGt8iHz4GQt",
  "key41": "u6XN4nSHFv5NqWiY3aqubBLshuG7rdagVLERoGaJ5xV6FHL5jHwmKPpLjxqRyhf49eTUK8UXqUDMx1kFSmBNXVd",
  "key42": "3VZ7psN3qWdW3p5yC1kdHX6L5W3mwr6RDPyDPcUPtyKqWYi2j1Zg3R1WsbDi68mFsUTfACPrwprYFEJT2tdBKupZ",
  "key43": "2S2fngNJVmjQVPfbxPGQwW5tzqYijnQZUYUNN52yWRVkUhNhnTnK1iXQ625neTSHAtHwJ44iiW3pA6pZ1xEZAevB",
  "key44": "51UaxSTwQUyziF26veRCzK1chLJcSfE6pJbh4HHGujiJH98cfRW2WnXTUizJzq3tcati26gtiveBondibpShH2s1",
  "key45": "27MAboWVGFCUf3fuEbWRtrx4oY6aGfxvCHR5nvoxkjY5gQy3it5ocxXtQkhGqnXoLVWWQtgLB7kQr8DDahu2p1Fe",
  "key46": "5Z9JUoYwV61QdrGDPdTbTvRAxsfRakqHVhLLP8kccxEgFdJkWJp3ssKYiNyFajvqT1iyWg2ubpoJTMFTqMrxbB1A"
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
