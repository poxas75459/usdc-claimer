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
    "2HTvFzd242tKTRCRE2hEkjwy8R4vd3Wb9fBeWdBEVSBVrcLf685QU6CLXETCFumKkZndNHc6xDqPnW7oD6XbFMZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hNWfQCDtPRsmk2vqeJg2ksacLJorFEn1fEKSuoMAiSteE9wfAuE4mCopmfCuWHw1J6gYsaQ1HW3KvN8ZQ8SQef",
  "key1": "3wv4hHNULoZoZ2c4CQMFJ4sWY619gKhXFGPyt5mZb5nqENd7zYdyvyPecz2breJ3pifVEs3pyuK1AwwgGLNvkye6",
  "key2": "PtzunRexbCG3PN7PjoEeuWwENPk9mFEhXqkMdsPznbJfSFFKkR5kewsvTx6KQnwuvu3tQ4jRibPRazX26YcHBLR",
  "key3": "4jEbYcXswdjTEDpybM7YvWXZxCMuRTEwKFkuARCJHa5ncboe2nNkG4EhhWuHD8CYRbt7WdnAH5TMWdpV3NN5dxPE",
  "key4": "5Zb7iKjQ3rVxuTshrPz7pCLhptPDXATr9xhqGFGHCvTd3v1XcHAatX8mLe88dzoZvjU2onWAVrUthuAPfKf7KLgL",
  "key5": "3XbMgfuek6d19WXkdKarjCrggPdQv2HZ9hoqi46orEvZJBzRR29iCpJkNg9CG8dX9k5ueRRxehFsqzah8PDjqL2i",
  "key6": "4ZACYa2uAp5MNfipZUowtVogEte5eFGjRSSYdgb4SaGHmg5x7GfNEvjyyEz7D8UHEBPrhZF9k564dFV6AcwsQAav",
  "key7": "5RugjHSgEipLFom2uvxj4iExF38hNLpmLkVPkTmFMGXwUAdH233wGWgHDFchHKjXZqJEB3Ne7efkSvUGc2XDjthk",
  "key8": "2SCS2WkELzqGifd9MopiLajkhb88NruZzeLfcn8PEcXK9rVCAnjSZ5oE6gbFKMBErSK7cj9aK3D449AMeaJksXFC",
  "key9": "2NzeZLDhRUBP2FBFMydz9C8dSxuTf8TW7Edh39km6vxuEtj6EuNfpLxQ9nTCCR3K8jWpAVTe4LSz2vRyeqKTVDoq",
  "key10": "3c5b2pQUvdiQT3Z7omMa1WHsqXuRcgqFWE5Xex2gRhggayzxgNRKUyzGFjpucLMvkEXgrJjUNU3sGrVsfH2KFQEt",
  "key11": "2Xekohuu5GPCpbgGdjTtCnTSaCj7xst9CS6sKWjHhXqnPZugrmRwPHWetgX3jkm7Gx2YE6rBkyBGsqMj6em6hLVK",
  "key12": "xk449ghztxoPePEnvBVsFt63xQ2X72BBqrg5TtfVmUh4Buk6a5NFbkPZUF2iLnVxrHrzEdhjPaipAAHxJKSUGhL",
  "key13": "cEtg4MmsGw3onVHUvqhwii39D4W7j8BXnMoMf4V4bjtrEzNPGEgpHuevUH2pMBPWKEZPLvzpQH6UtX2TrHGkB2r",
  "key14": "2JhoPAAAtWTC7d8RqcpQyBhLnaneND6byzAWy9KL4HS37iMpfCNicepcTNwVoDzTw7c4QsHB6gxqycp9T2pPZQ6V",
  "key15": "23qji1dDDpJYFXDjuLVncdpoxZfQd2kLzjB4TbDSaEbGzF5w8XFnBBS15TvDcZqquD2mNMSfvCXfNFUCDcHt4BwQ",
  "key16": "fTKz6X3wxVzt1AdRJYa693ALkP2uExWB3jYwPR5mWs5KWzJiBLrr7v9wjRbBQ7HCtz3s29ZaoYoBXhri29PDuZ8",
  "key17": "5XZ8jqycahJYbbGyvPY5BsDw1ojH5DuoQ8Sr1DH5GVa12RzBnkNb9NFzb22pD7NecbZAMqp9uVNQBp4uD1fe57ee",
  "key18": "2Nu8LXa4NramrmCGS3cn9GQhNHNwzCXxr8bJZRJLEHKVcvym72cnmH13uikagBQd1fHuMeCqhEL8DJGnH1PdS1jv",
  "key19": "5AHV8VDMZeB5AuwyYcGsCyagUuQzsPt8AB7f555ev2yGCseowRSba6HGeDHoJBRNi6g9a2axNop9DyFXxey9dmM1",
  "key20": "3yEi6WdWPj4nYtQJE49vTEeHmnQuqMnS45nwuKVZ79Z5SkWx5wLGCJYzYGzxauS6nHp292gRf5MHbnpMkUBJTM2V",
  "key21": "3rgqcpt6m6SGtpcw52aaDSMpyvrTN56PhFNa8oVFwWuH4a8b2cRW2P38zWiBshnFH8HieGNTy9MpDRPtSbBysN1m",
  "key22": "2688oeW4cesmKAkLrGD4Gg8LWGyMWA1abjGsCQygxnGtBHaSNjWqkdnrJBy3vwjcxVopy2LHuFDP4QqWQ5TKy3nb",
  "key23": "5MeDL4nzBaqdfzEAcaMbzEbm87dPC3b4irbPDH88S48eofUVszZ568243T3hscSzHWNKzU9NXYWfedYK82yY6RJA",
  "key24": "cMy49DxHhdLxhSsk9mKWiB573BLmiMfy5VPXNrhrE3891S2Lonti7hLbLCTGi5PsQzvPgTW8fByiKep9XdMHyuW",
  "key25": "3b83ytH5Yptf4u2bgzgunqHgMxVQJWWxBqLkgJ6yGGEZfhGWNN4LrwBLHX1DSXk29JDF1HcaMWxwMhjDRBHvAwi7"
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
