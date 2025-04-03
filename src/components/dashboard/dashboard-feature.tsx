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
    "5t2h98jLJQ4qrhXVADtqGZ1DDxdgS14cXHak7sjDa7HgYiQYTQSzmvN3QwyYf7PusfLy7nM5gWBt1N56g1PC2AjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLWuGt6rR2RG1MzhAJC3c2RjbeiMqfQktPr24hfhw4qMrTMCeSFA3xDyJaKA8mU8HFnhMf6hvCFKKAU5fLTVjab",
  "key1": "48ELHvb5ZaKhAdepipeQUHnX3VkQdSoeDSdrEhuLNeTqCtRGHTFeKNcjMqD5nj6FzR1vuJJBpPBZbByDpt9Yy46G",
  "key2": "3r3b4QDSPuqryipBy4QykYTBLzA9hW22nvDao467AFG6FF8Ud2xcmMCS6tpxtz3XESxpmm3phVoY5f5qBj6jKkxR",
  "key3": "51c9XEnmPERrsGG6tcJFygUQ1sMrcfmMeLeht3MrJS4Qumt4ABcTk8M2ggBTGmjZAwa1q3tqHxSEMdU6qWFxF6Lh",
  "key4": "33rMARWVpKmMUw2M78gCmQWotHtVJwsHMp6x5nWaWr9Fj4s4zmWHSbNJ3nfgyZqMYUbbesr3FEyQnDr9uccJzH1b",
  "key5": "J9gCSqNNyPqbSihN37uWbdsgvjt4hzfp7TRpHiobShwM2ar3jgHC68Pyfaco7A54mSmmnwCfh8bTq2ERwLc7RWo",
  "key6": "3CwzV8XBDSb9XStx7qoJdBMnpNVnTfUZooLGkqMVtNqiPDgf64AfTN77zxp4D2gg22YmMNtg1mK9yEGJB6wUni9W",
  "key7": "3w89FpF4LMpdUR9AqqcYBx4iTFDadosW7czaW6HLb1Svzf9eptAFTxxyYytmcTNwATYFmyrNCDmX2GPrfGvRj7Kg",
  "key8": "5CC1y4TbQcqfYQeWn1eWHzJh5wn5t6EfCmPStX6TyVJuk2PTYcsEvoXwLaki1GCDaup5KQCqvQtGCZkki51WgHqE",
  "key9": "5TrbcqdWHFMEkhBKSr3rJuGwyz33Ro7fEVnwEC9gvEAbaDUz8dMnLvjSsUN1vwiueBqzVHQH4z4KBwn2kUadTjcQ",
  "key10": "5t5u4iMySqWVQpzAB9SLCJR6yDm9Sz6SaXP7ocFguTHAa31LrwK6Ff4Aah7caykhhaft46VzXGrvThLQPbX9Eqhe",
  "key11": "51QWcwjfPXBvE3qU5sEeHbcDU2FuSiEx6vmexL7McZzsFevmvAbCQbffHnLN5a8o42j5vG9J2TwFyGpAAoQhUKZr",
  "key12": "2Ph5P2brhYvGZZBWJLgGNKmxwz45gqHhCPJVGkeCAKH6kg1hSfKyt9vAs9A4GJ9KVw11Q2FyK96svyeVcjg4inNo",
  "key13": "LAddpa2LBLk6mFAG4zzcyveBXLUyD4QmdRY2gCbq7d3dCGKgwQk5iyP4aPHAWdxxrxMeRqH4boMjFWFSfnzNMrT",
  "key14": "3DqdtdySQC5eNAeQEXst58V5rJUkRQXwLiw2ZFRTYTctHkNWwr3bb6jm8rD9zYduyWLhHvJr7eicPofJ5CutFnvY",
  "key15": "5uCRCxuwXm85EazWEpH9S9mhpBo22nJTgMCsQ3pSbkYqEQ7oqNHTQKKy9D5ojbXFzPo25et9his2kL4APJ2BBvua",
  "key16": "KfQV4yodK1JNGDSSApsRMh94LFPPkUrxWee7TPccmzCSAGyYsRPVhL2tUvMVo71T1UTTpVGhKViVBQ2PBqyQnGa",
  "key17": "36AuNuVkBibfutBgVq5UPYLz3BnLFsieasztsSANGzwJQQvVrHDWbdfgpzrkcx7n5XNni9gmPCpVpidms8H3xwYX",
  "key18": "3T7e4PahChbMPn4rZ5NvrN3pKhDh1o7bFZrAPZKpXnekzZrHJboR5NTxpHcmKzgvSGmvTvopGKnGKoNumLyS74Ng",
  "key19": "di8nEsturc8stgcACp6wZsmxhEvg7hYar4NPUD74zqt2Uzn8yDscMtJKpLHTcwEQVb5D7VEfPz9E9uDvskntB81",
  "key20": "2XwxGUL2kooaR7ycmSVtXw7u8XgUCPZiU6W9hWhyUwvpi9qXhSxReYEc58VQSJfJH9CADcFmK6ntksyW3mZ9dNQp",
  "key21": "2GCwEpawwyS6W2MLev9c3jtNzXZr6fnH8XoAHdT4RdEkzFSi7o4rsVAFFWscv56J4gGjAwGiRc6Rz3g14APoTZo1",
  "key22": "BJDAHrQiN5NVapaqbWsSZJYhE9G261dxS7c34KfC9v9wh8SoNUrdfWQua8cCfkuoUrCYoqa52pyzvDyZB728D13",
  "key23": "39FYc39pvbvk9UK46kFoRXFNGMmj6DMf3rzUAsDYnPYP7JdoRExYjUt3aBywhVRLfi4h4znMBc9M4LT9Shmhcvoq",
  "key24": "5HFgaXckkUj3HmjWmBH5rVhGZ7FV9FCHLa4vYzQy2TmqqSULCzktk4AKnsnoqxqvFakqj9NB5WY6BrDqNGFepwL8",
  "key25": "5ka63W27JFSSYkd24UQ4882kyitb9F9vmusMChpewFt8JTXQh4JdPDrnvrQfGaRRQS6xxDLEzwsfAiAR36Y3X4s4",
  "key26": "3Br323QVXX1SxMqDipEzuYVWaCbeQWPGkDYsqMTCDi7mApfNQWWYMgy9RCmrhbkFshkXXMtFo6M5fMtvLoxXTfjD",
  "key27": "3uaoSftZgGTUvpC4uSrbUY5ztynbZ2Ah68TM6nvMHLifkomDY6tpbzvqPJUQL8fjvzXasUz6rzuq2EH9V6kAKz56",
  "key28": "27tnaWJwKVhpaBqYu8MegF67NCyYeNAdBUJwANQXnu8MFJU8kdiRsqiqPVvtu12qysSHHz9k7EQSZZ4FqxfUaBRQ",
  "key29": "4KEwyjAfdQdNfu1X5WZ6TuGvFRCL1bWBMjQL3AKNy7PXPoerx6mmdWnXYQ6Xoapub8XmiUUx3MebEZEuVbti2CJf",
  "key30": "5ieqhBpkS9JrWSLxEx4t43C9GbLHGZ1oeLhHDqkoti9jH6ef7eKtTGUoDSeDmWLkkEmJbTkzarKehiwkrobd9uRx",
  "key31": "4W8sBvYGRjoPytuG4Ggi2KJLLggCJBFCS2iKkzZJZkhk6Nq3FKNmP9ZoukxTCEh6xBDQsULh2aeH1qK7gjkXPVVA",
  "key32": "3a1aYKamF14ZJaqLwBqnjcJPU9KXJ4PSjnKDsmFH4DqpgJNsCmakc2BCRC4aWrnxZSYsnXte478fL5BmwAe2EPbu",
  "key33": "3Kzu7bzBKTZ2nbhgp3ZM9NyeTAn6sPMdnmdVbebJd6TfDwjBUs4sNcaBzzRhcrEhk4xbvEA1HWUEsbL5RCVtFZym",
  "key34": "4tZUHF7t3753rUpQ8E1a5XKwUFCUN7TgSXRTHuQyE5jLhpzwsgBdLRRJagwdKdofCfY54SqqHXwCay7J5cZ8kDe2",
  "key35": "4RUZzd3cGpWjAfqwCK9WnHfd7QWsPypqg6JjWLxZuo7L1vHBJQzM6gb4znPZWz2JdHAUhN5qRKCEPF7zMFLbZkP",
  "key36": "k73BKapBbBppy6PPA2LNFBvv8nmda4W8gMYDjrmiBwN7boh97oNxy8rAF2FvxrLL9SFxuHMtCVE8yNsqQUq7SDt",
  "key37": "3EX6TeARjkbggjYsaSvXmq2LLBydvis6cQz5vvEcQvCN2xbSTuKSQ7LqhMKEG6gNMmGG9SC6ZkbGv3o8FDcmBcMk",
  "key38": "4izPbLiuWodMCkrZ7VHLFniAQ1Qii5vgyC8Yzt1u1vK4QZ6ceapR5RKJdsiB4gsgR9AsERrDPhv2NG5m39EJ9yyV"
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
