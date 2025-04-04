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
    "66PgtJ95P1wMVjbC79ZKo2QrPcuHCsWJXrP2TfCg5LqUzYvbRs9WqjZ8VbZBkF5nfsu643fcY4WmYfEWiQkqcFHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFWbkkmXmXga51rHhh8yisyxwFhmzL8DDtJcDfKWvCr4uCCswb34PfGdWYLAY9wtNEwjunvzydoyzQVipvCYBgf",
  "key1": "2z9MK8Rjp4Wwqrtty4W6SBGC3MbcyqTpV5EvK1AKAaVVa6HzD557x5GpTNr1y5Q6CstALEzsiB34Eao1u6MZodio",
  "key2": "3uUPRCcMFp4dzXo1KxrnpNx7jS823LcDQFC18qGiAGsuxxQSiVisMvVLZPGwaTxrr72mHdCxHXXoeHii5N74YdM3",
  "key3": "3gat4FSqE1zzcjpn5SJE15fmU7wUZ6CRpSPVncL3Nn9xeBCSyQqgqB72YkFRn4xGMK7JTdUeUpdjWCcFoVnTYEBn",
  "key4": "2UgETfpTtiLNyhAvN45aAskjs8YMSJWNd4FzcUxofjsAQKMddsdSbHEszrvFKChZkNWEFJD1hVE5E2foKoLNd3T6",
  "key5": "2VvhHP6hrot9CkY3tb9uuj1tCFQH7SNrEssEnXmHsJY8hFaCTPyho2DA4MvxD4q3MeYZbReYs2173B5pLDTbM4p4",
  "key6": "5KmHvN7pup12UxKZZ8DfCDbRqa9rgWXW8BzpSCEHKtazm2h9pvHbH9CpXA5cAb8o5BA2qn4uXipHamNnZHGEFYd2",
  "key7": "4YWrUomEPXP7ehWthWdPVKRWy4pWpRbFMZxvBFJkfYCo33fAcmeyfqbJhtaMZQFDamUQG74EV9fdKiB49NLW1vxA",
  "key8": "5uoNtRX6sDUrYVLyE4rHW91oS8Z2B9sjAv63ZJp1LLVxTyVkKFEAaRU3WB87TDSyrmBrS5ay3gJgLVKxeTNuN6Yo",
  "key9": "4wapo6God8C5JQdMPEE8XLb31fuLrYRD5kfYLX2kV2S2VLNyhswhjkmn3LiBhuQN1g7vCbr3gZ6bqmkrkbveYRwR",
  "key10": "3EGDuAdaGTngTo24R32S56hs4DfjmGYDpWfafKGPa5HMNrjfgZXoLzn7DxFuJscbCXojRsSiWbdAUtpCwe9KPyzB",
  "key11": "3Cz7WXHM4euRj2EUCaFS564i7V8SGKMun2Sa8nm356arWSPEVbmPtL9Ju9WyNbbnEVxxjHHpgZe2FqNpQduoHNsD",
  "key12": "3kpH1cGUC46Ef15Unuu4gyuRoidoRhhgPYWNHJDXX3y4c1gaAbVQwdCtoVEcZuf56Tbz9qdvMaUQcDEEerwB24N6",
  "key13": "31YrVUybbM2s34MVL5Ramufc6tY6Vja1vM3aCFKkSDouiEZANtoF6N7DTQzdD3BsoNvkXeaLtBewtj69x3re6e3d",
  "key14": "3m49WUAojTjwTqynEuJ8jmoLcXCTfTafRWWs3URVjfgSe6z9SJgYp7T8B8zxokhxTdHVEf816SHEDVX7QQRkmzqM",
  "key15": "46G56Lqu2BdAw7Mxj94vxM8ohZuAjopYy8f8uYKChRve32zhBv8FKRfvhXyUQcHWueiBGWs24JzbTdPL8r7SKwWV",
  "key16": "aoinK71s7hYsfiqTUyCAiwA5iykbi7EPpAB3sXtNjTasA7QAU8c8CvueELKQC6HULkBKLazssViVYS61qEmXRmw",
  "key17": "4MyqqTNdeieiPTpyt1uVSB7BxbLT7r1ynr4MhskzDHcGh8XE7SeKwrQ6R53c24qX1BscHNqVBZhPtoBpj4DG6M5",
  "key18": "5gR3gDxdSG4wL9dJc5C2Uy5ahpeeRnfJ9W744D8YHTFdnWV7Ki5Wuki1Dc4NfR2JRrCjcgA3S75UyKGFjdxu5m9Q",
  "key19": "3NcyQcGpqRMKEizbSHSCPP5jVimZkyMq8nVUm37QCGcZ9h1oADvkoTRA6izVrRQtPCuYSvQznC3e2kJ5N6LRFcHM",
  "key20": "96BeYiXLDLfBKe8tGhsphm3z6dNsz37qVPDumAo9XYw4pxvmF6p7AZneDd5npcBmzvJynukrAhYSuvuo8aB8YSy",
  "key21": "3URnpwroCt4jx6pP8tKVognAoZXxxaAYSbPhTWGoFusZ5CMe4J1dZcaJe5MwFac8wDJqBcL4VHDB1uhSd7aYjdja",
  "key22": "FXeeUkTfLhkBz2c3cgZMUPCtSrQsmm1FnL445EqWarPpUvYzygH9YPsuc2FkJ9WM8BKp2Z5iZHmkdAH4cXzmcgQ",
  "key23": "2PoNHN2wQ66G6GoU8N2PDZbGGdedskR95nouG17pVmu57y6WVnnMpt6SJFESbB1CRvRMRTy7kGCRsrWJeojawSXM",
  "key24": "53cJEaWPP5srC8wgpxLa6A15rkMUyNvFWdpWe1yF1JEydBERewcZxu8TESM3WZeSLX6KyvmizYkLaLgZHkrQoj3F",
  "key25": "2NMgfG4AHZzTxEtQAvNsSCQoHFye81Akf7n1H5sL6ik7acT3bFfXcC6gBob1bJdtvXE1T4xf2RamwJ9BDsrGX5tE",
  "key26": "449LF8Vb8puYbQeVDuVaFzdHuQ5yzUneFPmgrEXWug6bUicHVRN4Cmpy4g2CkczujAXqTHSKjEmWVsJgdNGEmKT4",
  "key27": "222tsaZ9JLHYKbKnERR5zk3gS4H5BoG6P6p3dixqHxVfbghCvCquqkS7Y976DCbbUMhEeYPNRsgKKMUGGug3myyo",
  "key28": "31cSH91ZfZdvVbwKtVaJ9nu6qbHWwkYs1w767fZubFcc7kZ37CEHo5JruVAix36rJSejBWNGHRBMWKoahDiyrXKj",
  "key29": "4VC9tKwW3SVeg8UAKHjjGGgDb5DMAiAuGjpnaBffT8cgJDiTJwxvRcgw5gGbxPuEr3msciEeS1Ff6P3DrQdBfpFC",
  "key30": "3zQVui7fg6tRaQoNbKbweXv49CkTeVumbj4yZ3jGvrEXcKUygxZgkUMjqsRjroVax9R1C3miyYSE1sq6dTzXV72D",
  "key31": "5gRwZBmnfUfojWqxnKuTxTnGWfZSLpZzamra6k1ZiH9APUnUveA6UbKk6pnmWQe14B2Qu9SVmgbzQxVBijkWAuH2",
  "key32": "53Kv7o5SP7RvfuYC8HrdtxEz4KgGYv7R1gEXpmrjYoL7LYdkNTMBEVL2oq5E4WJaoyYHRna5ezfdMMoe6mipxk1n",
  "key33": "2KQ1JvdpKjTwAmX8KKuUPZ9ngf6KMTHRKRJtqJsLB3KTuniedaeF3q9tM2T6ghCPiiZYrRr2JS6X5zT2bLfJQgYp",
  "key34": "5dsUjkyzn6r5DG4yCu8KU6AcSpoSej4d1ENGZqfEseZ7TuYUrMqcVZr5C44GYLeZQT87NqA5vbxuiofehCNGJAuw",
  "key35": "3Tai8yyQnBdbnQanJgenAepETHyS7JT14NL1F4X4hoTdUx8vHzRfw5GxwbRwCWfBwr3asS5psXdA1roGZo8ykaGf",
  "key36": "4mQmF9fx4GTz9qMvEEHGqxbG2pT4CNtwtqgVAsPx2M5PtxaAqphqcXLFZsuRkQ8f5d8HvSPqvq4BQkQZi7KpAf7",
  "key37": "2CcPAmKBoT2hPMT5EYkxkD1eZUgg3YcyEZuLCKnCKkNtadeSR9my5v5d2TxEuoPupPR7WPPMSs8dKMzQKBv7oxbQ",
  "key38": "4zKjdzkxkvgLukvR95VGiSkuNtMhMfAVL1FyMEn3wNLxsRWAqc3mBoz9Xbg1NDkR7TEMRB9tqfbA2zk8eDrx9Juh",
  "key39": "4TWSHxvWHhibgWY1C1KDHdKqz4z9acUVPMW473ndFQq7GrwEy9BMFELYg4KD1GEVuogSgsVAX9qZ4kqyjNZKnDRt",
  "key40": "9bQy9P4CFJBkmxEdEEcgaEMkjHaF1ckDZPDGWVcc32nS1p4uKEdHPXyTudKDzxGRm8zpydvveSPLEDz5ptnnWhT",
  "key41": "rBJAaiMZDdxCbW1AL1YM5b4b5dkMs4ZV7oKZHH8xcy5Ndp234myP89N9W2R8EbdrV5MgwzpwWtS8aXqozdGH55x",
  "key42": "RTR1q2eiPPHRjba5FGnJhrCReSu3J8WU7bCeAYZ9cfoBXyiQpDA22mUWHg2K7Z1c5oYp1LojUg1iNyrGT6T2xr9",
  "key43": "5nSNsUvpGzRktWQjtNpnBr5PdBiD5vv3M9ZGJGLuqJ7E7J3Yy9GBMS98cF1WQwwaLiSrkPvEwuLFv52BrkK21nZ4",
  "key44": "4nRHzjcKfNZjkPmywAYZAoeyh777ZHB5hPtyfS51wMEJTvvutRHf6SG3L4vAHxBaRrQUEraTSZVuxCYPNBZPKPic"
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
