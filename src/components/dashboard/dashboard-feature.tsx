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
    "5gMJoc2B21uf4TpBaWB3aZcZ9Tabt4zTpVrFsfH3fc3XqhRhcuyZrktENAr9q4ryWYRbndbftMWLKA4MhUrtz23H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPrmThvJAM9RUN55nbGRw7pU3gMwjVbNNh2M4bcDFrNLCkyuytHJN6Tkdtvu4CzXydEqqgwx8zX1iB5gycxzUTx",
  "key1": "5pzWAvhzcHqQamJ7dymm7paL1X2nGRUknJs1vT51UHQb9whBHP2P4HXufamEQNVkYTAF5GAtiwdbVB4wkSXaD3Hg",
  "key2": "3j3bUMnwyanF9V5BU7nXr4XZhiuqbCcLA7X9GdAJoBCJvai8iyqHArFKUJdY6ohoqRLMu8bbPE9w1g5fjswYwZ7m",
  "key3": "5haEJG63hGUxDLCs5q7YZomdLrUi87HcjgduTQap5pi1fw1Rs8vcNEwLM8g5tppBZ8guEdr9S5srwCAPSjh5ttmu",
  "key4": "54f4iFEd4J4UhUXSCnTVisYZpoQFWZwNRSLLv5wufK1xBZ49mD37pzbTQEqMQWkTbrDnikm2k5EDVgcZAmZzuZ5v",
  "key5": "4FVqcA7Nx8EtfKzaa13nAvFAyUpv5SHARsPyYG9DPmtja32GrWzNAL9AESyVz7KGMBT6YgtMwHDLcZmcVaUYRo24",
  "key6": "5JtyPkYud1JW5eWPa3VY6nePebj4LLs6zEdJDLuDYxrFWcoZoPyyeYjnRQmMgUYFdy7VyU6C4gxnNupPmojjVbb4",
  "key7": "4qbQH3fEbgo3uTtTcmFEmh5GgMLa3du7GwYRUoqdP4MHU5jZ53hkLNUrNrW7ZCvnhm9BLVasvB1i3vex7fN5TSBd",
  "key8": "2wDRkqSYA1sCQAuYavhDxWLvBJemPJqt4Ym9bKDLQQjFZsZv5iHCXn8RXC91iJC4zv9M2ZWFHDkoNG6Aj4PqDE2g",
  "key9": "MNbHRwktWuBe1RDrK5cDpmdbwCbH8UU4MgXiWQTVUZUsWppb7jQapQGMDMTbATNWZjLnXdaS67vfhVhD9o28Scv",
  "key10": "YsnAEiGRwLUHMnSWsiGTsJTL3kW7GsvEV9aji2hDy6R4xm1Pa8HoD8BaYA3A1hpeS1jC1Goi3mpCHYE39pj96mu",
  "key11": "3XxKLNhrQe8r6aidm419UYt8z4CLzCCbWknU79JuhyrUrL6ARHy29Hz4KNnQ9184yA3N9NXCy35yew4AQ6468sr7",
  "key12": "PPka8bCGDjYeVxx4isbiNJaFSsE2ytjotZGukNn1ybtHkbWADDDcNJDfykt8DUMWVWTBJc9NLqDTVtvYSHaK3PY",
  "key13": "4knCYP8jVe1k8FTmU7DcbSVWtaYstpk7dEsD2a9vwfVR5YLPneGwKWLeVCH4Wtf2u8MdaWHaEdi1h3JR8zf6KVAz",
  "key14": "355WnAMRUhQ2q7xah3pVEoopksEH51HwzNEp5mjTbBf7x1DpiBKCvDmTaZuiBnPGFSot1LoaVHG2WpqRTsGTiHMB",
  "key15": "67A32an3gvwyggrD2bXDb4bXF5S5G8UYvwd6sKdNRe1AZWLPAmJzaui2Gx9FiDqb7Z9MBTTrrCkh7pACX4d8zJtR",
  "key16": "3tmj3gTHDUEdyt8SEZamjFGWq5s2CeoZFnUWwybUXFQon2Yi894b8MM3ADajhhFrG1GP5XEjR9VJr36NX21KcZYz",
  "key17": "4eZhvJeZur5vAJfLNJw7heSZC7be1BGPAp35rtfAyEfcDJ1pZhkSYLpxx4eFu5JwoayDKJBVJPDtRottFEkU4gKW",
  "key18": "4PB5K4Q3gaFg6Tz2HRF7AKcSVnn5FADS8xdgXNRX3wXCqL3kyf66RMRg1Pas3DPe9yPT1PTCjsJYzLdm7VxqL97g",
  "key19": "5JyLjGeBJZeHnZH2qxASvr3gL84SuKfSM44KDrd1dpHcAvTSbRWUqHAJrsL7gYbftuPE3CWAfQNZ55wtUKf7f9RT",
  "key20": "5VagbHwQAJREEHmsp3Sxyt4hxW4tHemcdP57KiWGUmLZr4PJmiPMHf3QTB3UCKavFiKrposXkXJgbP6hacbrqac1",
  "key21": "4UZEnf7Au5fTdSYWDf6PZJjYC5F6KXL6SVpFkHPAsJwqG5DvCNyLcvaDbn2uv6vDJrs1H6Cgb68RcyEHLKq93E3H",
  "key22": "7J4NZEGQNN938mvA7jnpTKMPLDwgD53T5jSQ79JbkfPSDgPbbFTsg2vFouYRUS1mbjjjH6yic5f3GgNLMEVxMbY",
  "key23": "2cSy8wrJgF2Ek57fRo5PV93UQadqVhZCyK15oMB26a84KdhQ7vFXnixRUdmzgWiXNqtEfXyTycjoj7mU1ZeQuj8K",
  "key24": "4kf5gdHPzGeWh2MS35F8dQZBatP85XaNPX6ioTLMbsSPXSDMqu5P9pWraa7amB9XgRD7oRnVTHspzQg41arpryUq",
  "key25": "3AoHviYQ8SUQYAsyNTPubXi6Gsc1bFbGNRBsL178Xmv1wzEBVgmUpayivFJpcnhEXngB21UgfUxQxJXGaE4csgTy",
  "key26": "53Tdu1kkd8viZ4tcxoKAXsAMyWVkupdxQcbGFivgNRgpwRXqnMZdYxeGQeLL7fU66jpwuVTh4rAVQmY6NNE1tuaQ",
  "key27": "3SD5tywi2935ZYLJYbeCQ63s1EKuKtgnexoQdG3xdYjUupqQufaoWhGf2K59XPSCtijLBfN7tCUB3NtMhg6xEMCF",
  "key28": "4P8GbNVGLmukwWzW3zvzWmAx46ArcC4kryj21k8nCtnagQRcKGRzhUvGaYnE9bxAdjG8kNWZ7wFoi3YFxx6dN3ga",
  "key29": "2HuCmo7U1PDcRoD8oNPf4r3RaTDnGCuJF5fSaXsJzouUbV1eAFGAMUrzJRkKeQvQKiGCDvgZbRGF25jXYHrkPZKJ",
  "key30": "4QPFjFdcRGu4nd4gU8RY47yiVa3eX9MVa3qdottGh8hyPbvyHn7HFQdUz2o4JjHimXcLdgizAbtfw46avpKM9vnY",
  "key31": "22N6toDP8CywXmiv4UHmkHF55TKQdFvyYWbNnAi96sHyd5qC6FkFazUKFdfarzaseD84byJ9ZXtV5LPSJeupmyhM",
  "key32": "2gEmbuTA8NSimsUW8WdCLASdWVyXWihxS1h81NBMucbN4wAbb5onwhFwgeyZv41qqHVyV85HbFsTxWJ8AQYQjPCn",
  "key33": "5RhyzeWPq7gp5QYmqqoPCof9CNHFR1hcf6g98SXwrYcQWJWMD3h7Jw3on35sg1una5Y6nCuBMk1jtG4RJAA9qLKu",
  "key34": "3AjDJ3281UWfeHHEhpWFSDyXW58sdTNFPP9v7CAUc1Cm4e892XwpvSr3ZnCL3cH7TyCnDkuULJXkf4K5s6cK9v5n",
  "key35": "3KqzvXwvfmhtP5oKy1CJb1TDBXcZS4TeZKefgvULB8F5CDVbVsVtZmpvMiwPBQwgW7WSJWckjmF4RMBtAKgrCJy8",
  "key36": "4C8wME2msgh5tYTToRwhPwFFfTmezavZhFAZdkUFfGBbXQF1SAfS5HQgxPk72snDtcsbk6XH8RpPU5GStZsd23dU",
  "key37": "3AwYVT8Mpr2isZxS1B2Vm7uqkJJSUrbsnMvSnUiHt4joLVhMejfyfrBvquURAbEsZBmfbTC4bRH6237e5e989EEs"
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
