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
    "4wJBXMsA67AmtsU5ug6fPfV1iaLGrXR1nnrgUmTon9dTrgvZFGUEwRK3kpcMu9MrNjmFiPtVMEA4w71uxEFTECTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uLwmemt4sfh9oPKWRfEV34QKwKgf2qxfYUEAHFZisrAr4mrdJoCZ83cjVF18KQXeoYzBEdNVLTCxpSyhMkVJPb8",
  "key1": "zkfiAcW3eHpnnNLLDwhiEkG7a4SbjZPg7ZfG9dhqtmGsqoS4KNEu8tfuhswJGd5AoLJ5zXMkBpA6GrS5GBBkCNJ",
  "key2": "3ULKMsHP14wyvNzgvDqgxVkGSKDceZfZQcVDWtDMmbHHCVrP6fwYyXKNUMQGNwwzgEMNK8ZW4hnKYtvhNVfwtiPZ",
  "key3": "2cvabVwMENUDKE6nb6RQ6YkK1kw5kbzpQepbHg1EUDjNjcHRP5oSDQyGPTAXqZLy5eju9mkizbxibZwQt8kuT7hg",
  "key4": "55dorVgdEBgvPKQwCo4T1K8S3VfeZoHjoVdxvYjMzg7JdiUB6RQmtu3kbYTquazBddNqExeWuurVi96jhJzW5QDL",
  "key5": "5TeQXedioNTpjrK6oyK2dWE5QATjtyk67ybhizzn4ZRNz2FEHTFEZ8y875b5Xt3n4RXh6eXcS2d1GemD2Nt2gbmo",
  "key6": "3NShVGngD5PW8kAv19fUEMybDYamcEiu4ipanioygnAkuBdcs3iPF3g1LC1mjYiqBseN8FHgH4aBKeBR41B4Lc4F",
  "key7": "3j2UtpvB7UNKgCBkkmmzpGckp3gRaoBGwk5ZyY462URGT5X9GRXUrFiF7FgmtRuqbwLVzHyPdVdbsiz6mrdmRgpT",
  "key8": "2EqRvhSEksGVn77G87ikapMYpS5z8SKzQ7BnzxJz7MURj4jCPs9uJjgkFLdc9qh5MBygPBRUHyMS2crjjsr6o6RY",
  "key9": "5ULQa9E4y4TRox9dxt2zn1DkF4sSDw3ASnBiN4Wc6LKBEEB1vDiaPx8RhK6Ygh1rz8eq5VS3rJdieyRi9HiJy4pY",
  "key10": "q9ogAmJvJWad6b46ucai6mCLjYgbNizUmK3BHfesLLKpxqqTZiLm4uMqbCSv2gY5HYF2ftTZxom3nLtAdNzjfXs",
  "key11": "3WVjNYBYBppKT9uaV2Lk9stY1Smb44GjNTL2HrVc9THnBERXQWorAccKYVGCT2tBRuWL3UBHKBEXCp6oKL6L73GY",
  "key12": "2Aw3LkXkFVbkK2p75hV8XqQuVDfxEDZeWRGXcSo6b7jaatk3SgxJgGFncigF82KSxRRKw9pyWCXTBYUnr5ntP5VM",
  "key13": "2bw98PWBBVoWkweUTeSsDkuy4CDxkPseRo84gW52H6wwNujnCxyAYmJbu4XMCgrQikSSgdB8mdqkq7g5ZkD3eWTY",
  "key14": "BH3p9mDc7UKFsaPVRvNtP3hpzqi3XAEcp9DDSkXjAMxR8Gei5RryDwFrCaVkwqVTPh67WFezawrbPGXNDfEnrPE",
  "key15": "3DCkFTTdF9CcRZAoPiuAQ6wTHBXGWE5HPCWa2FVFqSrst4Jf1trNJ9aiQiFojB7KkqrFnSRjLfmZJoVghZt5tWR2",
  "key16": "27q7g7ULCdokCvfvsDi5qdMbqKPsWYKh7H6jHw5rEeq6fh7xugH4kqnbDDetcaCvgWAuFRMim7Tt6mR9CjLonuuH",
  "key17": "3XPshA4b2WeCFGdUT6bHkiJrtj1BjEfPdcm1AbQUiVGPm5tDZz5cCKnaLMGmZCiXshinoUJRRcCpLF7RREJMq1Cp",
  "key18": "4Mh1WEoCbuzVTHdfKrJjwPB3pdwwNFMfcuF9q572Wet6uuNmCo6oGo6EVbycRXAre5h3WFFRUx8Poj6jRKrsXkk1",
  "key19": "a1YgZcXfXKUdmYb71nmXCuu7RkvDw3RBQSZv4EZrLSEjkHs8fFoY51e54ef9GF1F8N3A8PMKGjQutP6vtsAhHtz",
  "key20": "4qu6Bro4amELviBGT1A3uRhBtgtL3wDM7eYfnLVyaWsXueFuxhYxZfi6Bze16zWeeoqkypTQR4vekjfHdmcVpDUV",
  "key21": "3DQAg3wJAikCUk3JKEiMGeJWPzhg5J6u8ZHkXNiow22mkNvMDz8uedC6FJo9aeKfMwJqnFDFsDCHbE7HHdNA9Kkj",
  "key22": "3QuMyPNZk8GWdAvkra6GkaV3qsgJNUsajNVAHiquw38VtKVgNoNtbugCXXy8rJXA3qJSVgxSdmFrLkKww3FUECKL",
  "key23": "5sP6az8JM5YENv3yUPbkaPp7Vb4fWXDxJ926cSNiQkkVr8k1xEpWTKFmSRE1oMgyigJxBYJ1jVaXzhxxpWnDTizB",
  "key24": "338WJ6EquMpB3AYBbqowvn4xkZAv3pAKJL654dxGJk1df7vpZsp2nvNa11jVRqTNRuUv2abSHrDnD1rhuN7dFiiq"
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
