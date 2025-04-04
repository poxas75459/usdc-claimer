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
    "5RGXbtMpmMBKTyWs2GoKM1FhBS5tFy5hTtwUBJTdXryQ96ojHzg2jzSkR3nPLzWURvvdBZsaU4oSDarAZacDcah3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yp2KHQPJw724LB3os6ubhmi1RdePsXFQMbrvxFtcf3aN1u1sE5tTuh1KQ8rYcaLnAQQWEdZJj2MVjkLJnYKWiQj",
  "key1": "5sR279ktWvhYVrdUrdFxce7oKsD9ddztEBKu2RSUbE6yRAZkjipsyzMFvQNFZf1CWqoTrtdX5KDsym3H7hrqjzyr",
  "key2": "5FGsrC2fdG7BHzfs99DQGrtcuxsoVeSC4PtV7r2awTNqygBcrnX6mdogkgDLzGW76jrFnJPjTYU3dTzQTZ9VVmVP",
  "key3": "5zBwiCupDEQK7cCt4LfAE2dJXAk8F5E9s74BTwf7JN5hceNMfiyha1EM3pwjE6qq1DaXPBWnq96pbQpQsw9sFJog",
  "key4": "2aXNYfsqXbL5rimyDyDKGY42GCTfyzXzTyRjxL89qsFqRvCg6qHWD8sRbF8vos65wXNA1c9W11gxsjCz9FVMS6L7",
  "key5": "2fbjiauabgDTZuREacJcfsHCR2vNXoozTtitZp1tCvM2ovSPRFhHbSywBUCsgdhGYfC4UfCPHMXsHaJtJkEA3DfG",
  "key6": "5DFhhDRQquDAybVfZ9chGdYhuUKxhGsYJb9vRA2pT7SJsz6sLdjgkzZzjmsENrpdjb3FTxxzBD5jYZZqxFyzeNMe",
  "key7": "5xdgZAv1epoh3SBB31579MqHgr4s21SaeWKYWZYGbVTBFC4PvVSLrkfZn78C4uVbCC6TrurNgaTGme17TG4X67zb",
  "key8": "pSJZiS4JpCu8URjKWWxiLWgAnkU54NYCc5geAiYCMSxUDKkm2TkQX6J6FDDN3wpf4xKetnEFoFZ3FHgp1VwvW8J",
  "key9": "R1W7VT5Gqz1P2aAb8aX7WTaZAb74GU9xTVh2XenvVtSm6rx8dfF2aaCu8dBssD2WRaR6bs3AuryKDxKyZ33JBpg",
  "key10": "ieZ31iLi6AdA3tH45XQubLBqmspK4tFXaLhHaAK2bJd42ocH4VNJc9W2SCH2NBwgUtnjwwu5Nz6CEzNmDCLmNcp",
  "key11": "5WBuW6LBFq3pjjgvMKu2DtixHEd1RN22EL6PHSzdXCEBvmiWHzV7xaKbm24hW6iSzwYzGdouxWgfgpMVjsPRT1JD",
  "key12": "2AgHCNHMrUzMwmoUzvRxxm4dV3S9ZCixGsoMCSGYfJoKdwUjJGWMKqSBDSdDv9gdmDA73DpcYdSgjj8UcbMPa5T8",
  "key13": "3ARH8MvAJ75krWPmUYnoGuww4CJdnbpgFHUz17bu4PA9cWY1g4HMaXEehwiWrN9FGrcDnkqsVuSSB4RJr9Cvyyca",
  "key14": "yRFUdgLGvjAFEn3F4ZaKusKfMw7YXFKJpmk6nwzmfNyRdepYyMt7fX4dvVLM12w8VxS6qcBPT8RzNXM68ZQCXDY",
  "key15": "54RuTBuEF41BsZuWEJZGKegoxrYuERoNmF5QqfREckncWqeYn4p7LfHGvNLQ9ZDWQLBCTZNRtxbQdMR7t3MwBMok",
  "key16": "4vpobY6fjRYhRmt2jUQzCkaiPicFjmTe8toyWmv1HVcgMPVNvXYAwHfbvL8RFbJ8yF79vsu7DNp85WZAKUUj6Wtm",
  "key17": "2Et6XqCH6jPoZBTFcTtWQbLeiZgufHJHx7kwC4rcHCQcjBNHBYqrvwuJQuQd63oFJjnaagQkUcx8im1b2Vg6buym",
  "key18": "3YtSWV78KMt4v535fsB6CG7PmDbeFhwZwkw1DrWo6aVjt4Y5yyFDiD3NfjMVb3vyJkfzB8RkDLYM4R6khfYuk5VV",
  "key19": "2tTjb3pGGnkbnqVV6xT9EmmMzZoHbafyoSkn5wUvkFNNgZB2fmQZm612u2PBWSTDZHm6wWNQRJZcg8iSD7WoVSLM",
  "key20": "5bLixCpUu1hZeyGGMtKkpMHMn6A11mxUVufzLE9E8tKUe4HBvDR3WBChaBa2nacLCu8FpztLGjRfaZrbPTDxpBYF",
  "key21": "2X2V51zvzqJqLps4hNqtGoHNnaiZQQVo762WE9FfjJzwXdDij1bqfmDnZ7pbZMuwgDcCYWs61GYrYU6UQ7DNzjEM",
  "key22": "3dWbowEXr1L9QmTWfNmF1KXwczBrhSLaeDkLkPz7YSAd54xY3G8e82eJFAgVi8gqCwTXbjaMqZUmRbZedJpZ3tLe",
  "key23": "4kEkXwtHLtdT3ktqsA77XpUmc6gpWNuRQhoiqskJ76Mo5Re9VvA3joVLTZy96A8YZyy5228rpEwj3LADERtK62eh",
  "key24": "5MTryvfBAQxb7Q4bu9J33mDe6pUu6WkWLCbuneW8tit9tisVikjmWVUDr36kaVdNriqqUf9ywN8ZFJnWP6Rof83M",
  "key25": "5iwN87rMkU8xpGHstRf9cSgPCoxJEiHzvHErP1Lb5y8gDvWRZ7csBhECkLKpJqiJVHER2sRttFZ2t9aE6smyU99t",
  "key26": "xEMBjhRT5jVNpjoA2soF9rdnhPcBUXZTgoRBAPzkyVnYow2c2C3VSnoz84ZumrGVmZeRsFanhZpd2CgHfkfssey",
  "key27": "2Q9rLowbbARzAmaxwsG9wfaozgDRbwBXELa8c2sbJttqepNw6aZSEdq2KVgRusdsjQexCGZ6924sLZkmzdzHsX3y",
  "key28": "2pQhoMgVNfFPpowEk1CsfyvHw7vcahR1gJEEeF3K9e6t7HzzE8s8q4cNhqa98LB2ZfCrm7Xhv8ej5HBaQbewda9f",
  "key29": "2jse5umiD8omecc5mLSDSDhHvE7ji5AtPABxdYARr6ULGF77mRr8vVYew9UQKbJdKJEZFxn2yMuZwHJXNfCi8zHR",
  "key30": "5KhbHXYpsAvt4zFCQCDT7hY24xU1ExYjo4j1rCBudUf3R8HAovAM6WgVJCSX1KoEN5NVtbdahUgisCm1K1T1UGsp",
  "key31": "29KdQMbg4wznTSgsYTEspMwhXVdokkJuQP3Fn2rwhUyJj17mF6PmVgvfnYzrPUSxgbbRJxr4vi3jZA2YQAbSaGog",
  "key32": "4MW23dovT2yK5qwMcndRiDNAQVpqAoz4mwTgu3hVBuLzNDWiCVFawBZ8gqZLSjeekJqDJh9pgz5bTM4PHTt9ZZc1",
  "key33": "63x46D5bhhPrdgCG3zr7spgQoGVacXv3pJqxSAbcbfgv3p9wPXTzqJMgdjeULWHdFxhhi1cZcp7zQJK7QQboMHBm",
  "key34": "544nHW74svL84YPGhCSHRNDy4vZu5nUTMoDPexZXfZQy5JTu6Bdi3kqAPvu9gwizRs7aPHAKeEg2efGfirudQLrr",
  "key35": "4U8WsSNnSHxkWdcx7zDUsjdTgFDVbQoeB838AAGHBq1KxULAGFuDqRvzwqDqVRGUhmp6BPu9CCgUK6nkqCwoGRiG",
  "key36": "4XodeDWqin2MmaopazUQpn78qHJGnXpP2insH8Vf9NmBidddtMrgh2JB6mBRnETiw8ktpnaD5qkecuMkcBv9aoZK",
  "key37": "3WdpBySHoX6ei3AFLYrSpaZLsUAjEbGvfuQ9KYkz9wQkCeMxtHFyYZ7v3arzPZaLLcXYN9acWgZutHhZcg7qenH9"
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
