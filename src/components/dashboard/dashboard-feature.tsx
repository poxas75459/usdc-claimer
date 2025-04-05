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
    "5dNYz8xNE3cNnEyiszUxQZM3saQmkfaKAtLU59yR2V7NwLHJiMWxRZRJ6D9b7yTgF3msm78mAueGsQbsBKdGWXCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NbCLhVgc7vxxii4P6vvQrS52wGexLXQipAQrDowZCuxYoXV1mr6aGZ5rSLhauQZ7hjVcgdEgQBJrLqb65FsqFjt",
  "key1": "U6L3TmxcBH6qLHWpoKfBY8yv56AuhmXAGxUP4Fzp1bdkDuX2zA2J3h9MMZ5G2U3EGJ769GvmbJYmxktomCow9MD",
  "key2": "49fVdwa3dgkqsivi8G492Z2fYebD8UX3NYft3okDfnfQ8Yi2stBFfYH373zQedwb4qT17gAYNdR5yXnJmpRsy5cf",
  "key3": "5AEQTzqMaXTKDCzbyeJLqfunsGniWeRsBhA7fKxHSR4VSovMtBv2Zv6n6aYpHRUbRio6pGmvfCiTVynxiw3hDqLf",
  "key4": "3UhMUgPkKsx8RYRy5NnH5PsMAjLET6Yzi5tC1ucVLws6VZiiCoA1D265eeygpXEbj6nQoJnUUMEV6qXhxu5xUBVi",
  "key5": "2k8xKbHeR6iDWDm1XTgc2E7u6YBQ1hV4xbxHihNNK1qkz4JDjwcSv6kaH2LghXUNPVdLqjGKFaQFzGaT5g7gZUmS",
  "key6": "2p9jd1BHcuXqCynuN5fHeVmSpQb5hhUnQCF1Hqakv9ceW5vcJTSyb5PX9ta3eYor9kvwZCDJ2rJNpFVvuqTcccod",
  "key7": "2C6kBJFUL6dxi4e131vH4QhipN2SsvueRsRXF8aaeteMxSJrzEXKFT2Qz8xAFpezir6k7SsR8nXrbJN5LMWpjfUh",
  "key8": "4TjnDVR7uXSGrriEEA232oY7yDobd7sCHfinGXphuNzfJWkukP894PQWjFUVXopna9ehasN5pHGcGHEp9t1x6911",
  "key9": "4AvEuyhvSkyUacs5mEjg9buSJ5u4QS8e71XGwPPrteJGcfH8kSVpc5HTbdSRuucnRMFzzWnSqyrpk56Dz1k8qncd",
  "key10": "4cV8Sv4C2mSW1vHSEeNP6MqnJ3dSwvR7xjAZFGL4hDsN11wvLN37qi1gEDvj92HkC1mweq1FSvaPUa2GHqMq4VN1",
  "key11": "3vRt8mM5BA8py83jRaZtjhjRURMWPpxgFJdGMRFGzRyFweJ61nU8nGLSqfeFb5yBsDsGRrTiyVB8YsEWjpGEnpGE",
  "key12": "2PMxzfcsNCoBofLnYdh5TFVgCMH9KTfXVpTUxnumwtHyc9sb5hvio8eK1RFDHb4sD8ATGJP6FKzQCXB6dQnUfJ1J",
  "key13": "56itjbcpN8SsqaVnoAV6zUaD9bJ7VnvLke4JpY9neDm1nVRpECxg2gZM9Zc3zE8EbA9cKTYJww4kSUENJiZ9RgqA",
  "key14": "4bVXyrfQ1btaNsYM6Qtd5CuZUCZFumqP5asEPYGgP5f5zSR4GfA9n8tf55QjsCpFTjm5h3JNtdGkoffJwBsifPgf",
  "key15": "5bruWCqji2VjomUHjkcvdsSNxpyxuD8mhXV4p9SZaiEFmEiE3wEM8sC6pYjJMmdBh92fwK6DLkTFELeKDUqanbQS",
  "key16": "5zRpcFU1pefTejZYNmcPLkuuW2jdtRD37nmSbpDKj5trVShJDhugRG6N87cAkvDtDWAnuBaB3VYbsRu1sygTgbkn",
  "key17": "gmPfHyGgE5sVLUDcBPhakZHw27Suc2GEoVAtt1gTnuqboMDgFam9qKNxXDWWexcnKXAXXoQXcLzdQE8Xm19QTET",
  "key18": "2DV9pefcWmt2gUNeP8gCmy8WsVegrvMPZ7bJncLXpodDhfXPNeXhfgzvimwc7rGacBtcefXnLNFarKieFj7yhm9d",
  "key19": "2zJycrZrqGJrufzwHuTQsovXJLVuTfhPrSdy9Yzj2kd4XXyP2FgEb6m2XFvRCwb5V4RW4fbNr3WbHqUSLxLuthLn",
  "key20": "5n1yQWYJdhGAUUiGERYMMWtH3fQ3wPXhVG2onVZHnsAd9ZqQK2pVkogZ7XkvHMZWaKjcqc7uaW1LCY2wRnpD5nwK",
  "key21": "n8Kb8wAe1G1dGRdVm21jEFtL2NKF1EJH8kUs8bEhKe8HmiSaN6KsJNkdHWE6AX3x46h6eMGP87RmhMqmQ4BeW8Q",
  "key22": "R8XCCkvp8zZLyUYqdCBKYT6MbWPjS3FUFmALc3MLRQv1SaZ4aJau7Gukswc771k8uoxUbKhXzB5Wr3A1ZPR39ty",
  "key23": "48tJXWvNZncceJGdVBn6HudcpVZLmpz22gdeexqb3NQrAgPK1jeJjqwrjAkkjSCGNgBDBoSUzUvWqE722HvW2kRH",
  "key24": "2DKMghubauh3nWW8oZQA8JiwZ2YrEaDnP5jJFxmLzNTbkhGReRt18VSXjS8k7UoGZyeoaXqWK7h17xUVjrK85BH7",
  "key25": "5Yr2bs6emxiQxL3HiJnmYVZxtPDVKC8AXr3iyC3nSE5PVNijytzDqPB6hAen4dH6q36eEAstk9oE8QEhSE49JmCn",
  "key26": "4358zC8y4RxDjydmHbFd7y825UHcLkTCk68erDXgZLBtBXRcRZFZYpfUg7kuEbtHiAGmhdws1s189aACucYBEK9g",
  "key27": "7vmBZBEUXJHE6grhaH8xpbtbtWsKRt8T9P2VLuhbXtzHUEYZaXZecB25ndxKREJD8LoQQKUsN7SgCxStWHCXpfv",
  "key28": "5rFCsqnFnVqjqkqKPPHJRkcXSy7vRu8kuN9YJW3fzsvHBtP47aJj9WZ2edH1JnoVCeu9NGmdznudn51Y2Dson3av",
  "key29": "3pNbFbwcq3htAWHJaVkwcE4uowSV9pw7L74xiciiVGPzUtHoo71VBj9GWmocxwnpLp5oxHcPTzWMsxGntwBQFfo9",
  "key30": "23oc2NGX7TPtUJ93KDDJScH1odEXnTkWqQ3DupGbLXGdDoSreAaon3XsHgaS21RkTNzNGguswtr4NyDFE5iENw76"
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
