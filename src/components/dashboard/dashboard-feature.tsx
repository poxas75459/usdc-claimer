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
    "3wrR2Q2qKaJw16GuEhejUbZKNkptBqsf8Up1DCvkTZ1eMsxCfFggmybVgt7bxiefJtn6Km9z85zqrMDhQCyuE67q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMJDd17GSyK7Wqe8MfbCAoGDarpYvfceNANq9X71nYrik33CKgFN5X9LWUARzRb5XtTdJoWAvP6tVc5xhdPbFFy",
  "key1": "4D2Su3SQw4kRs5fSpTMpsRodDbhyVEfv8YfFVeaifYnzo54D9R9bfLr411JUNbvKqqLAjsmBU2truKTWn374Yquv",
  "key2": "2ah9TwwSB59fFtv8oNApehfVZMZyFMpTT1UUuuM7pDe7inMLjKnPwpTQoVG79yDP6WsMx1LKWC5DJ4EwyeVD9EWh",
  "key3": "4cLkfshy4ArHnMd9PpQ9WZakyinFARfv9mYp7Fy2r5s8XJgpVMY5eScLXpA6qgYLNTFrBjXesAEhnQRTD41b7F2s",
  "key4": "5sxXhtD6zqraiX631Fe7BUy9pbmRaSMJVGLWFFjy8KHChoBhW5dTw9ySToYqxb5FD4mzk95B8q65YxP8b18wfvmb",
  "key5": "359iZM4vZcrukQPZMbkkQdGstREsRjvXCigQLgwUmMcFaRbgkZqooXQqwZQvyi5LGBpRHMPkcAgrJRKrRqEfkdks",
  "key6": "Zzzfe9j5p4NTUuqrHRyi67QdHkLjo8aryhhwXqvxxqEtDRnujYbx5XcYYdgBaroBW13wcJq2Yeu7izFa9xHBFWA",
  "key7": "27Nv1gDwQP1MVf4ZB2WfGHMSPwMLFt9AMoJE1ThtfXrT9hvmkbk1QUKoVFRtW3sbXDeum2DC5Tea2wzQ5872wnJE",
  "key8": "bP3CDqsE7PvS3qZQfZEy1wUyZGEyAJNynjAtbDpzXNGAoDm9V1m46Hp5SNaBDWApsoYvuRnj7XQK8RDJa8vLAt3",
  "key9": "ZmLdETLoBjPju4Xihz7uL4Zm3nBahr7vtwcHdPWyVWoQfWrbuinC8fkKYcpS2PunCc9SJnQXc5t4bdzmeURMP5o",
  "key10": "4q5fTa6XBY4PNdto3DYkuEEQkLTTJSKtdudeamvnQajjdTAHEUsoe9sqrcgFbz2QSnJqS8q24bGQCuVPPaqWgVob",
  "key11": "62LkXHqphJiwUi62S75eyh3yYXkz45Gg4cvMxGpRiZZehbcSEL6K4BnxcUJcARWvetJpcF2JqPqvWynjRHu5Smac",
  "key12": "5GtCVRLfQencPavRaV6C4t47TBdYSiZN66a1MAhoiiFAYunuQqdYgFty5QX59yNRmLDSKK1eeZ5znVpobHmmVYCY",
  "key13": "5wtc5Jn3kSWmsRD7sBbJHVp1rxjkzDuZMej8bctPqAdQGJpQzbCym7YjLSazm2LP1W4SdBKrBPQJtNdBpNR3YNdX",
  "key14": "5WFJXuMAqMLWaMBh8FgkLgLNfNJ151zCRHrFjw7kUb7rCEP9jTmW4yRsrXGnjUVx81dvPWYpfcFFhGSJ7LwcJnWQ",
  "key15": "3awD1V1rmgu1CDGNMFLgPP1PkSt3L3LUfRpGncYYVUyUj8rXP6S1G9dvMi5Hb2nCT8oS1bnFNCYRL1rJiG53YFSQ",
  "key16": "2ukukqYVE9d48rbtV5kC6AbZwwmi1uDe65a2LTC5T8p9VFZbZz9VfaGPmoJHv8zXE2HvotKhRHQEe1iCmEMPtGFQ",
  "key17": "4vufjz9HQRWmAUKMi7f4311WNK2XTLsFb4a1c2hksGfAqGKnxwgpKWh5TyuhegmuzFYTiSWYaTD7JeLcFpZPQ4Fa",
  "key18": "Sa5kvjhfFZa4XP1Yyq1o1mSvhheiP4w1z4SsErGse1KLqFpbodCUUegtnyyqfx2nG5PpHYfSuEGXMNYCA2xbV2d",
  "key19": "4gt6HiqvvKSwft47gUWnJtRjBoy3expLJQkKQVQTVaxmVQsYQJ8M9qu6USZMQ8xF22Vt7yy8DchZ5Uf7CPwqMqGe",
  "key20": "4rytzADqQUiECHNvVzKN9q8egF8v9nRyixE6t7jCmh4rZwraVSU3wujEApmBUGZiz9jhu1wvFUECFA8NfkRd32Vp",
  "key21": "Cn2etRYDoLgecDuAsMUSXXbVVYpAWSyBxtWtrDbFHrZKBuvDSf8MXCxobJ29jc1CCVKw97EtMwPSSd3FTzsNg6R",
  "key22": "3g7s4LzToKuLJEnWY64mxwQxPynzjTETvqWAhQDwZwZdsqxZksSwG5hcnJbUyX7GGKnmcLVUXUq2xTQFFy1qVKYH",
  "key23": "443XYmqGGXe4Lh3ZxrirWF69jDarjPbRRpiPeXcu8AyhpWSN7aqMHkoX4zEjBSzEpR5EMBffRbEfoJVmonQgD92Y",
  "key24": "4Kaqs9yFaqjmsem6Rt7az372Uuw3Ryu3ATq8k625AkjGjag7xwFVADewmwLns4gVWwTXyDtXNYfCG4KPU2ndYj5e"
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
