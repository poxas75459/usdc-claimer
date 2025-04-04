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
    "5PKbb9gvS58zKMyFk6fH36vYsrSsACos8EdnwpGhP7ys7fAECKT4E9HriJtyr3s1D8cPhadznp2dgivrNiZd7hL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WkV1QqrcrsmAuXAKUXSqTARHWxSSeqiXqnHrPahdEuzTyVhCr1NomrwPvh1G4phtiJu32fxG1ZVZ9kWoiy8wJcg",
  "key1": "nZ3YDZujRG59nNZHffczeEUeHpHQz5qf8RmudRK9dR13y5QhfN7T6pDNmbJjNYY887c8v4dXfo9nUHif9fbWq1K",
  "key2": "2a6WPojZSV5PdQV9jnw4myUQwV83QwgcYvDcjBJRundvBzfFgvrBMp1U8iunMqyLskMW1kSQCViG8d1ZYYH5r1qw",
  "key3": "Lki1n1Mc5Z4q7ZXnVVdtqmmzT1UoHrgKNBV9vXjS9gHu88qndFprvHBgF4uJ5vRzMiwM42uPh1B6hGpLPoKBTMZ",
  "key4": "4u5YJHPaPZpzcXMhoQ9dEF5kTgPHroqDvFEFt32CNz4Qim11BQZ7NsdKjMjsuLHG3XvQfxxDEnwRhDMFuvt3PMaN",
  "key5": "66c86pqeKMVe9KQvHbH4VCnPAWr29iAVaaWT27Y5bvEjRbZQT8thbWDgmn3VW94PjHwn75by1etLbZJUfZ7a5pCP",
  "key6": "V3VzZidz7ocPGNpV79iJe3ScShrJkjnx1A3tzLBSWpNedBwUQupZGdQu9xPJXGKi48o9GFK9gd2Uw1m4Yh8JLuC",
  "key7": "5cLpCqG45xuuJXGHkKxEUSzKL23DCms2C7vsz4bgJDgzW3nisVvusCYHbXNDr3M78fECoHAUujazF4EfZQZZdc9B",
  "key8": "5Gwoi1WfGQpAukWFJ7h4ZuSEJcdA43DGrLWXTpLRd3DbU2f6Vr333dcjnpCet7aPWufjAt52iHDzg2zRHnEUssKu",
  "key9": "44Y8CfH98P2z9JYHhx7795Tzt5yP6uojK9ihoS93unMDKJJNCY19goLbt13gbo5hdeTSJAzivhDX2gqc7jb51uT6",
  "key10": "668b9HQ5upSdpN63N3jCwRmdkBVjenSdhbjmnyhx62BhPTS8Sn258wy9gDNyZ1zLpNxBmXTKcAuQX74F5kkPpBTL",
  "key11": "22Vx6YseYDSCq2pNNDHGULqjDY8petG6w7kJoirCTBKMtC6jhM3aU4QcGgCZ9wdcMQz5aaVhAnTizxW2RGcxPTmz",
  "key12": "GH16ty2h3RRyzqimBywjYt8mZpQLu7rVnTQJ3K1heHDYfGHtJWXjD2ADzjyyitsVWEonqzPJr8SpaFAuST2vEMu",
  "key13": "gsmZYkuqYizuERER6UrD9vGpc5Gv8HaKuSZ1596AhmbzGbfMGYjLqgzEPa6E6AAoRF8kSJAnN9BbFDrc98VW9HE",
  "key14": "3iVDVrf2EdCYEnQPdqNRVY6ntWt6iQ5GxYbpi9eXJfjfHW1nGAD9fstUCYmvzZd5JecyQgqYqPrt4YhYPR3yQGs3",
  "key15": "4Shfo3sru95mFD91iukYV4WjrBZn19ZKR3CYWA3pmdWqmy7XppQQaTAb8MrbGC2DLmZQWv4p8HLYCiPrkipC8n2K",
  "key16": "2CroyAde8QH16s5bE9znLaYyz1Gqkn4bGMEn6ApBupDCnbgEyRW98SLFGisCAXSmNT2dvaEKkSAMMJ9jEv6PyjPq",
  "key17": "66E2DwUBFtbvA2ESXfBbnuYkzhFuAffZrFh1SMCV7MieKUyicCNxATqvrXTfzgWQc5X2yyFvVy4UPdrckGpEYqZa",
  "key18": "1Jp5PFSFfvRBpTdAKzixUFiRLLqk8ddWjbYHTPzVwbQY9HtiNdecoC3ejtn5396DZw6eR3H3dip8xkXb8nCmJVs",
  "key19": "24w3TV6QDdcJAFy75zCdS7osc1iAqSHXjm2rnZCsviGECfxZAvTZBYcJHwtdwXP712Ux6cV7bWeHgoDEamhRpjsS",
  "key20": "5bmSrYo3B3PF4f6MhwX9Xeah1wBnVQAfHy5eQ7AVHUUgKJui3Damip3ztgGKA6UKqs4xVBAHEc1MK2juWaMaUjbD",
  "key21": "45Dw1HbrhDQSqCozitSxDw6Krk54diE6GnMwkUaFVZLPbsNAn8sDujQos8pdsXS6Lk3riD3fmeWda5YyqGrX7S3C",
  "key22": "6fkMNFBsxKyciubk38EeD1KEbed15fF87g8MD2GosSCUjf96a6Utwiu2FYFQ6g2GEin6qGnp4H2Gei2WrmApagy",
  "key23": "23Vx5NGcaxAsj1iB3Gwg172tebQvymVFAzW1ijPZK8ry3RvXhFuLkoMRrhrSqrDKy9VwZkHm7e32pFjYZyhmxpip",
  "key24": "2iYwkMfvhqGjqg2AU5jTQV3fU63uHZ2MnB9bcp8BfFUbz7FCWS94xCWr3u9Z786J7Q8GBin9bWG8D7RDeFqVmmxQ",
  "key25": "5CWRupTWyDFGrBTyv91DJ7oYi65DpnKqsbz3kb3kK6dhvpTozTuGfJs1CXDB7q7GjVCd4TYX5SdwVMn1A8gksH6Y",
  "key26": "5mUGq3VMeCMLUU2KcXkqAAP9azsRHiFBNnDqgNCfDGM4Ercn6G6UWW9HuGQkJVtMTCD4GeeX1QToRpgQVCWce9Wv",
  "key27": "4TDnfRhxjBVp5sUsPareNrv5EEgvC8a5oAgGCPdUTLR8ZDUY4amHjGWmrU44Q6UMDV4qGfwgVJpguiW1hEu1b2rz",
  "key28": "2eYb8f41rJGPbieGi73vMvQMSht2XDkKLTxr4iRwW2ULngXU7Rke4wS1FiC3d7cULDzAjhUURLJqVXmURGDdonnC",
  "key29": "4HE17DvHhnmv1BheZyze2FQQMeybEeeTiLzBFqo3LE3gpPxo4vyxX88S1mRNTJKQR3sabFUTAKVEzBSvfo2rmQzb",
  "key30": "2cPxWg8cqhPSxnYTicFWF7EJRXEwsoWbWQprTZjTPR8NPWiXcD6ANDLhVL5FdUh4btMmK4hYFzB5tqkYxVh5KJmZ",
  "key31": "47MeJKxKhJdMbpn4pSVnEuq1paQGwZqwBU7EyEH4nmrvvCXcvNDq9dKteqH4uk9saeNn4NNmoYFeXYzMmoS1VWEK",
  "key32": "32yJCaNLGYP99o3gUMR6VstovYxwr5BVKMwHEbdgyf8LBETPJQDkdE27yuQ5TQJT4JPRoqut8cj78MfH8DqxtMzb",
  "key33": "51xeufR7QzgFpr5ENd6pb7jzkgUVdo6LovaEdvNRH553a2EezQSuPbAFACsZWS2HpBfAk2HWfzdQAcGRKKAx4zds",
  "key34": "4Q45bsMHaqKUBz9ftj46ZTjMQUZ4idx2JDnSFuvgWthWmMKNDoy2DBuRjfujsKfPtCqp85JJjw8XJZ1r7tsiagLM",
  "key35": "FrjHdx4WiGvrbg85kbo4QMNByejDKHaphicR317wGbJLH1qfD9rasZfMgg88wug4dcSg6FkLPVdpb8jZyWsdvyY",
  "key36": "3NE39kfrYdWJ7d6qQCX84nF9ECBTADUk5Qo6zDuWLuSLrV2rjXVCSEtZ1bPC2e9bwZYrQhTyxAeCYx8ko33tuHyB",
  "key37": "4xcr49svpucuSP71k5rA62gxgDMgEZWwMhVfFbdDtYUf8uhwKVAaLiByp9fjR6KcadnufyUU8MNbFCQyM39RDcx"
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
