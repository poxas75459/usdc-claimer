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
    "2u4F7A1oR2BYz3ADT8Uk9VfT3skjAqN46ncQ5Nt7dTTa45A8zNgNnfgZfhdKbEngxTUdNbqWcgN6B8GXUdYkanP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dd1849pD7wN5SC7u2GkvRnEyfC2cHMBp8fs99ZphZxREJg6W7TumFNyjjiRH6FiaXSPSV25Cp1B3Lqjcv3pNyrw",
  "key1": "3ifJzKjKah5n1Sw4rSBbRttG9faNPG6FPMLTiJuSQqHbG9BwaUTghKsogb9c9zzh4A3vnvEdj5BFZ8o6Q3yMqXnb",
  "key2": "qJeLTxRyxZ8oYTg1KxyrZWp36Hc6SziLko1284mEyvWCuW8NzfLiZB9aLNQk3Fc6GRjWZ9Fq3pdYyvipAy2ADzX",
  "key3": "2FHrUGFuaDKr7i1JDH1QiRsvWkYgVZY4bU8eAdmFZm82AWxZrHiStQxwexXffes6ueLhiTCSz3U6xVaSnPLM4dVo",
  "key4": "fAcirT2mrW98rESGaqsGD45fopaojXGAbQouRqeXR8ty6b7aQhpXvKP8MUBB7UYSsMXkNNuJRbSZcTPPese6oQL",
  "key5": "3m1wY9JwTg75UNRitBxfUi1Kb2vJa3jn8WBnFLJqUFZiXhzC92vbDj9PqMFzPseLmygr8Ui2saGsrnL5kwsFVQpt",
  "key6": "5fZkzgTziradT6a6UyBVzBT7BHaye1VFyFbZkFCh3hfvts8xSHur6pKb5CsNA1K3X9tPwAXeu8AEv6nBjzqbR55A",
  "key7": "3EFaegw7p11MvXTKGRJuQ7dstYGLr8YoQWjoBbPcHiZP3bbie2PUGYQucfba7azCcbTiMVgAJuRKJDHYCvwXYpyf",
  "key8": "3PcKJwYYrQ3Sxn2muumeQUbLEzCQ75h6besFrXdzrWfKzfgPEss4ZWyGEfiyVwpRQiz7meAyLrudnnXiwyfNgiqE",
  "key9": "Dhv8CUmuvWnbHWtFijmYGAYp3rxTC2EGrYjrqVZPrmEuoJV3aEsh93aAfoeBTvovvWjYhfeKBXxdu35QMEmy3af",
  "key10": "5gX8TLW17Y9WzABuuWmogequbPPJRUNsgPZUN4pAfgLigCqDKku2CXiUyxKWuu8z4aEoHq4wbX6jKuwrhdaRXwoK",
  "key11": "jThnq727drSdTt8Rjkhyrzn9U8Yg99YBRnjgaca4LKj3zNEWaSrgrkXMwZsdRD4T75uhoNLtQh9ZcUF4f94EKM3",
  "key12": "4hCrHSZQS82nTgDidbC9zJucQqXTqoCs39Kp6D8XMPTv87xpyFzRnE396gkuR9jvtuvKxgqkVgSnsTPSbLDec3Dp",
  "key13": "4MhL8kDEMA2V6R8PXyqWofwgZSZyF6iPSzGfbJiz9kuMZEcaGsvRt3MJjmTi3k6hXn6JL7JxzMLsMS5UC9CaVwE5",
  "key14": "48143DNMUUkSYvhxJ5epzYHCEPf4w7xwX7nWSEQFEWwFEx7L7pDbt6yKjqPbRR2DUrNZzz3zUDYkMS2K7DRMXCcy",
  "key15": "df4W6hBNQKw4aDiZk4ZRSGhi676DHo97Ja6AMHPuRqUk7HV6jM6rHJLw8aa23ezvbzT4jAYbdCXcbPMcJvMrM3o",
  "key16": "5hhdobSX7xuxSCFddFc6ZLoQ7E3C7fKUz5QbAjbUb9TV1MY4FPNGKX2tG137jGoQjGr7QaHkSNANYuRwzzBzNpNi",
  "key17": "4d3BMD7UN9TRGYMYw3cPrgvxZCHgjRtFh1nAhe6ZcRJxpyjitJAMtR7qiUNtWiuRmgpcHa8dZj9dRtNAHXEGuNEm",
  "key18": "3uhxMENLEUzCt9qKuqLXbbuckUMvuZquUn9diz6uwn27bqeG1ZLo4tPawTtag1DKFy5Tz1QtUax74S4Sj3JUzaFr",
  "key19": "4yGbq76JZZe76R1m9AyQgHrKQ8pcDp4nn1gBWpyBuiwfAcj67Pk3mZCWfhxVzreJF51iBvNhr5GuH6Tsz8UcY4j9",
  "key20": "5FteCZTVYFT9BRCiWTHSdn451Hh6Vov6Mz1V4V4QPudVRVVVky7Xqp2rMTJV8K72N5VmZiTJ94SKCm6V3cZuNFDY",
  "key21": "5DW9ubfLzzA2aYbhYEPJd1cP8v1Y96ffdPwGtPjFLzxb3fB1oHZyZVKbtELJbPrQdCpP6p4nFanfp1qDi5d6vM3M",
  "key22": "3s5q4KR13QkyGzBWswAsULA5F9U217kPdjGAX1kbUiXuJai6ikFxdnzTMYCDtkAmyyuQdKdz2ES4XYoBQcUVrZRB",
  "key23": "4P2cxYZ4vQAnJ6L5af4NeV5UEWPPAJ6eCWfmk9cPmxDQen3ToHWEGgSKkWPNJfEUcb869mHw2iLKkZ977hf16kh5",
  "key24": "5r8EXGChubqRCg6eKiwP5bX18TAsoA3okKE8ZHa81Q8Ej1VHgKbhbSB2cNWPoabePL6NsQWLG3JrWVMwMhafd9ET",
  "key25": "4NYMe6ZsEQV9bVS8h631N1zYa3aboUW9GRuLspYqRHrA2nfRrRRszVPhu7SJp9JugGjJ5Xewn3BCAB9eDEcbFRFj",
  "key26": "51ovzMHzKQURLkWCXbiRpB9MGaYj7paAMdPDuFQZ3ANhK92f8TBZcYffgMx23c1qSZkoM2iYvq6Q3P4fJfAZja7X",
  "key27": "22HkzwysHhYxLBkv8NNGDaErubSPmQoyxv52VTvCqt5C2Zj5z8kR4qAwjb1d7TDEhreMvmMT2bSJA6i8VfejngxT",
  "key28": "26eMqSwBBW6CnxmUDC3qfagZXKrLz5Rmw8TkrGXzSHSN256AoVSRs6qMttKa8TxgGZynaEhvQ8tdcvR2g1pgtBPP",
  "key29": "4gLiCDBZeHHgHNWGWBitqHho9JmYZJDeBExPz5pRFA3hDCQG3WaGyW2jBaaofYSf4mirJM22362SrnGANJjvBzE8",
  "key30": "2T8oc9tXwCdfqFntVZXRVrynu2P2Pto7TysaKtvMJqz1TwUuiAw3yL8Z4odY6t2jBdeR2wQ7CHXJdo49J5We7xnx",
  "key31": "4ZG4LcuNbDBDJ8hVTeJCJcHCRbnviSDJA62JQvd4mTAssPyoTPRtWACBQSiFEgtPtyZgHYWrmYFkVweGAhfhmSX1",
  "key32": "4Dqe4njPTVzJhmSbYXbPWPbLoTqF7tVcfmqnCT7BJPyqrBHjAHRch55Xsdu8X9pcF4ngdbXnG4aBNVFYJ2tpBpZC",
  "key33": "2NS6ti6hniwRXC6UnDxSVEbUZKvpUtNDFx6tfTY86TFoZmQUfxjcqFUKyujiPKnkVa7XzkYHxnFCuirn3P4EzAiC",
  "key34": "4UHCJJAnPSviG7tbkzcS97zD1wjxW1BVAZZSvU4QUJ12oPb9yfbAMAmzE7dv1nTPNRpnc3epDefdgiDX8WukU4Ce",
  "key35": "3HaTJxYVoCDhyG9fnALtJoeZhoeAEfrNQFbotboqCcVhCM8EnjxxgB24czcJ6AnP99fN92rms5tzwpMhZEgXrZAW",
  "key36": "44m56xSZTK18z6fkeJi1b2A4ydgoyLxdqLGK4ECx7gBh5PK3ETUZBvqT6k25ZYhVBvSC854iyB5HACo67MUTPx6N",
  "key37": "2vbxdctChWUiU42VXrSHu15Nv7wJ33Vu3eMSmmwouWmrDwXtincPYjhUcfNGEFUi9coKfJgoCsvLqE6gh652nWgn",
  "key38": "3RN4jfBuc9rNRPS9NTVrquvfxGyHa4vvdGKMURSSj4GXY5d6NKLiiKBgkgnx99muZMrhut2XZajhBLXkCiLVrnxm",
  "key39": "41kkeNA4qjzPRNpMXbEuJZithpwV6AjUVY1NQqSjY1K126iC19xnq9QrkdjgfAVy1z1eLa9Urxd6CLVLmjJgycuV",
  "key40": "2jqZxV66xgWv8UftaAB6EFBXvTo6KWsu2pQzSfzNMuvPZ2CKymJtuJ7Taszq3prDBE583ouvqbFRbvhKSSFRpvhW",
  "key41": "3mDfktWYdj2qVXoaxhJEEtVWMZHuNzdeg2uTSUWDbJ9M8s8wzfVxPAbu5AwU2a1bWSRLKFhS2fMKVsG7ThGg7Vk8",
  "key42": "4WvCQKGuJQ8PTWm6drzxhn8XeLN6f4YRYco6eEkMXi8DpeYJYJk8vkT1wXuMCrUQeutn2TMbXhfKi1jpqTFyiGxx",
  "key43": "63C8HJJfLK2vBTYcWCxaqCsBaBYUXhX72eqnmm9YP8hAvyTLQfYdBu32nU9kvQWHk4r8rVfyKncTnaknpTqBuZ6v",
  "key44": "4dQGht167AM6FgCxbfQWjdgMZtB1bczHVNdKHzFczHYnH5XdS4iMrim3AeHo4rt2Aj8qi7sRGhiWo2F5vKegF64S",
  "key45": "3by8sFS2vktAX9rVCSX2DjDBznSMiiJV9vcpHKLPbWcYXXFTEFQcst982yowLRqim3ixL3izGCDhLVexcHyNLpM3",
  "key46": "3ryRGDEfEmZukeTPHYn2aL1egi1HuQkN1Kbm1CCfp2YQr2u2GfB8pSb9MU3DtE6dzkdvfijcFf3mbEqq3YiTw92q",
  "key47": "2dwrgvGhzdiNh6Dr2nCiapXte3K3kppZekT4uQpxLryhEWLj1dYErBdrhMetRuv7g8eMqknRHqQ7RyVy9kamZZQU"
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
