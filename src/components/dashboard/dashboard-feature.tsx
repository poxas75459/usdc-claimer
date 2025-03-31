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
    "5gi5WzDTzyyMkXiWCHYzrkACEcecFaxJVrV3sf7LjtPQtt8tTEfMJFQW8RRn7CyxpSS6sEtGmdn3VFxF977WbqL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCJaTuCdDDNoXZCircYEygxdFTdmSjKMNnFKmfYsA8eZDjzzDQQjRZYPhHRQxmrikFPeRsJTdKwWYHSogM8UqwT",
  "key1": "4QvQwZkD1yGeqqRQoR5RiZ9bJLuBeUAPxuy73tLbWdruBR7waxHz5T7NJbKsiBMQZrt76foj9JPYCxEMeRBXPqJk",
  "key2": "4yjEQRDC8MyFVWQDTD6qcB9eQL8oQGAuvFeRR47dPba6MoSkquwfcTQmnYJwBdi8ikyWZKS9kWTgNoEywir9fKrR",
  "key3": "2jTyQesJLRYs2SktDzGuQuUdMGjoCzJ69P2DVWuHXWoAXPwB6Q51ExRPPa9x5UybsmU4prHaGKPUAV5XPfVLBmN4",
  "key4": "3FM12neGRwEVpkLTr4vCouVkt5w6EWaNWG7R7f1KzzFgZeRN96S16cMAfedDE2biqnH8hF1ThnAvQ6dgj1Foiz7T",
  "key5": "3Hvksadb9eCi2whBhUTAFxhRKwEDiMEx2AJ552F9jfTmducv8areAD1RRSWjHnU8xwtzhAvp7RiMvwEc6N57V5SZ",
  "key6": "5cZiE59PatgghUqiaJNDmMXSJzexTeg54cGtugjxKCYBJ55XjWbyHbnNSztxjJRSff4WBjTBUCcKq5rK7z4JFoD",
  "key7": "3egX1ht4C18XiHdTiecHrSnXzVu65J4aV67hTRtViALEaAu9JyPyAtUST8SKU4tS8gYyM19HvJvxr7ZnrVvDkJrC",
  "key8": "25bCAmNETrPLFpew77hzZzqg8eT2RoNxtG9BpMZAdGME1VHRyeycFLcmjggPWwyMyrnnZVnXKfRrsF6Uz1QGu4qu",
  "key9": "2YQHB5u7yUfVyNz61VZc8DMWVXDU2SpNkBsRCrXVsqARrvyokbQ1Lxxs6oeB4QPxC6i1fArEZF3yNwPKyzYahmnt",
  "key10": "RwvyLnaciac5TWC23DMy6AoDYyiPeyMCuwnMbANWrH4JtxDzBGzyqjuo57S4XkqHdCRhJCTeM4QDSdyCsDVxCas",
  "key11": "36W7iy5ot5Jz4Ae3niMHTP6SuF2Fd6nhz1WN1LKxAjuGX9MnTJWsDHrDSojdY4qJSk8PAtF7tgEX5MWdjofLECme",
  "key12": "2owXbMWpDMqgwMhVmu5Rxx1XPFWNDTuKj7EmU2WxSi9nEQALT1BpFgwbCpfvrsG7yj853Te2pus4d17njg6fcBTc",
  "key13": "t5JtMu5Jb446WUW9NwAKPzMTXXYWPPma6kfDXTXY9tm4pZpGHhyzLWKFpbW3km9RaPz9Rd5d5nK3fsMhWZj5C1S",
  "key14": "35VfBFj8Tc2hGPd6obBr1jj2apC4hErnBLzBbQqrmnphU1mWkhfS3UX8hqpV9W9osd5wXXBPT123iSowRc7AH86u",
  "key15": "4HLfRVX9dKEfxnzYnboaxYeg1NrFgVnEgULfzjDdvDVdBUdHB8Sns9gu4oPbXMTG3D77eCUcStFgPU6ksEKb9JQf",
  "key16": "3EEe3dn2gQzqGsV5YorNWabkhsoYwvp8JSnAGscodc13UmtNaVhj7Ugyn2zs9ZYGXGN2xid7hgrcPpX99PsTH5Kv",
  "key17": "Kpe22RcGVJSd2sXDRsX94eEMbPzcGyBBt8hrXVciTdfD8xuAyJKnnzfH4WtdNxivcP7ft8YWbybnqxgKnDFRBWC",
  "key18": "5iaFm7hNMNj73va28n9Y6HScEgEnXKxed4w65UAff8t3JHpcMVuopma9uxLXYvzEAFg31h3CdkmtFsAiPEgPJkZY",
  "key19": "2sFmx7JqQM4x5CRRtezsqjWuZsaxhQxQr2GWeh61SDKK9xQjnEJvTPtZDRQFV6j4JGgyFQNjoAd8ZuarbaxhApho",
  "key20": "5h3pb8am68DmJhWbMGsYQyEaEeWjBJo7gXY9DdvwRHqw8ruviyQNHxQeb7dXC18oCNpDS3fpTquBFNKTTbxpPmcF",
  "key21": "4zeNdkZ4TnGRRmQde5uFdKr5WCy58ac2cMAFWCFGbtGXpY16zr2puyj6hCSTQtmz3XZvXJjXFBQ37C3t9KancjC5",
  "key22": "2hSCJriVCCfNuPaE1cxYctXRoNZFTNebDTUTr74mhC5Etqm51e8doKp4tSMKpMTQDuTg89CWEePh1c6ahRbnokDN",
  "key23": "4Vf48gmLBmUyq4PRMzhNEWfKRh34gXw5WnFCPc77y8Jg3ieTCStrhqQee55RanZgQYe7PEZJ28J4HHQQNNj1JXYq",
  "key24": "5CzargEn7L1DJHycz39Ei4z81MZpnoNQ3Tb44vKREchGL5tLqfpsvkpgCYgDigPEpUvDyeEgiBYoBvDjRSXjwXzj",
  "key25": "2Lau3iKwVHCeAY8X89naH8sejyoj1u2g1DrBTApmWYEbU7EAGKWvTnHiPXK9ag76TDtmy9M7GrYdryjrhY7eZyk2",
  "key26": "3jhUZMVUcEhbMEqSug8X8FYNt1nUByf2WBzMicUhAYomoMw8PDGU5HWHAQkYDkPykGoCYp3nVCtZcufUoxnJjdUx",
  "key27": "5LjNAkoXuZYDyY4o1RDyoD7sCB25wSye3zC67Mh2tiJFuocvYdFLp8GDPxQULWjr5Tf7mYDKkugEUaANBwAhQ3rs",
  "key28": "VrWa1mQ1MBpvvpZE2ZjfHsNpBKTrN8ZSxoDYZ8ZjRVP5pzNb4UP5qXysM7rc9wcThdj48dJazCginYNeMDk46cM",
  "key29": "2du3E7tgdvAe42uiijWGf8ZiLyQwfr9c1i8zkT2oYqDuiXZuo78CwqgcMmUUc3ZmiQWJvB5BT2M4db5wkkcsvdLp",
  "key30": "3DLSg6iptwT4cFQWskZ4sxqpDJ4GNg14CJfoyzC81za7qyp57adFRcEP1BThvYHZf4oepWQo8ofTPD4gYwHxzfFT"
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
