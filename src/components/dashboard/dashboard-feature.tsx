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
    "2ZVaw3bDxNng5hc2vXFCBzYArmzBQSg9vfxxh9FsDVVKo54BWgs6RPqX3nvsoXLcYJvDxsqjDim6hwe3y3AAZm5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZVXKF81kJAijvgwHchVtPVuZCjw5kR6MGx7GUtmT6NoxivCWAsayNDd9kdRP9yvsQNNxYFaorkBofMsTJ66XRk",
  "key1": "34VHisisE2MtVnyUexsuQthnWXJjJhCmM5wtaVYFvT7W6RPmYDz4Eq1HY22CXf266h43JHaP2WU2tobeZXZyAmye",
  "key2": "5oW2jsu42ub1fv9sDbRXfgpkoz92X9eYG8VSJjgQiJu45mkJasjn4H4eFsHTC1dy1TjF8WXBbMzp54fAoBneZQ3u",
  "key3": "66wJaKWtqKf53QGisoRhRt2n4xtxTHyEB1RDdKTzZPpbBsmzNxt117L1vd8768SVR5cX3FzitEy5ZrtSy2GTArLk",
  "key4": "4FVT3FjEXWbHKodccpS6Fz85eSTPMzYS7sz7GsxDyZxD98hRmDzE5tZmH5itsek52XYUBR3uG4XLn2nUDgN5vz6j",
  "key5": "4WUp4qGNF34VpRVQQaViupTnqXgyMiftkrrrpYCR4e7xYNsSrm7Nhf5bQkSkzCwGrmwtLdgRjEkFc3WGhzEbAmMX",
  "key6": "51xpKFrzhjrm2hNWqP1VoqrCCtADQPg977ZoYPJMuofLeCWjLhBMPwUWawzcjUftdrYa8QNceSH4xHU4EXS6827a",
  "key7": "3uxfV7FKzyMrF1BAVUD7NbAngTCXfFkGeVNfB8eAL6pDmRSBtfNddUDn7s5XQb2R9zdydwDsvGbixFURkReR2kex",
  "key8": "3G26zfTouESBPjeJLACKtJjtpiP7k4wwmDNvXFyVorwGxqXqLh52hAL627JPctFpB7eiefGe8gAvHQV2cwBRk4cF",
  "key9": "zJPTwhzwevHEb8wGDu4GL1EjHRK3QiLPee8ctCASbWx2Uz4HJrZgvxf2dNtLowvbM2aCTgqUJn2g87i9ZgSNevW",
  "key10": "5SMyiomAWoXwYYYcTbzXGqARPcp2kgkeSc5StpQBjQYzBvYJz2AV52KSttA7YYWNbRnxX9XR5zABA5iMiJZz2boP",
  "key11": "5Dhjah6X4bCs9poJ9JaErB3yBje6PoQ6fLxvK6AkLaRdMKqdPukrxburNfr8MAfqvuebAyBPRSo68gJHpdkjq5h6",
  "key12": "rvE3QzEvtPJQkDX2WTH7k4GJKMVFqFjv3LBiASPPpfQLNbq7voHwyuU12wpe7DKCAbnqfE2JPJAeBeke8t1Kqxh",
  "key13": "2uCHdKHoBRKBpjq45QaEMz9NdCmvDxhKANDhbcaRcJmPEMqj259T7nWEJf9VW6XB26E9AR8woFPMz9f62JFxU3qV",
  "key14": "5nyeAC36EJ4Uihak9K9dnb215TDrmtxUkEmZpFM6tTryxrxVSNJexZviA3vNGataEVGeSq1SuaCSBoecQh4XMwP6",
  "key15": "3MntDTAnV8fxQMJrv1gr4i3gwawiyZnjfYdpURkfyLEpS732rF5kajfBm8ZNa5d5ZpcdCJpreujbuaewuxfmmWLj",
  "key16": "HG7y8ccQJHdAPghNbRDDsbjpne4m5kMa2t5fiXV2QuTs1T6PXsnDN7pd9SaB7RXdt2YxgDxxvtiSRbpNRR6wcHJ",
  "key17": "7wXEr8X6B4BPZVvYTQC8mzD2Go9htL2bY3Ax7tq3anbg1QNxYTkfvkkgGTQthWabP6NQ3ChKjfMyTkheTJcnMnX",
  "key18": "64swKvTF8qYHWAgVfyJRL4Bu8yRs6NfDR5ne38wjPg2QVh4zaTSQXufBhHR4DiCQn71NdHvxQWqGRpjsAZbDG7K7",
  "key19": "2JnNuZMZWyRM5vznX684H1rLVQ9YiFdXjBBpabBDCRuoqAjzJa45AnX8FgsRgzngtspCGVSEavTq2zRgohWyGYSu",
  "key20": "3bvfLoVovKEdGRJFW4qazkJULwb9sBpB41pud9XBeNRSKLu7L4PTYGvK6HJ9zybyX4jbUnbgvxyhyhsfYgKHioLK",
  "key21": "54DcAf4d7vfoyDePzshEtyezXyYit8a1C1QP85PFFi26EgJihtdX3mK6NcSBUYs32FSjToLhjD55LirWrH1tvJMM",
  "key22": "4SgNs3SLwxx9TKUKYBeUpz7ecB9MnSpnNMpptgasJPmGJMgNgphzbpmD567wMQ9nZA9DbdEVYWPCCbpXdgbfdTu6",
  "key23": "ZSoqujFAyiL9H1QetWyMWmbysJwPhnVDD5emoxULswd3PrQVKFeq52rtedCKrtazLuWkHvRYjcwJ4anXc5idce7",
  "key24": "3b5rQpsbbgWMzbHuMQpfYhTgBCak93L1eSAbG4ukmkvakcW1jLNaWWgNXHWu41F5YCAoDw3Gu5DUooLiLgE2bG8R",
  "key25": "FSL1WXdmowfDwpQitt3AXgGeQRsGRetkgm4anfgF16icd5un5YZvPogVRD97wPjzunKuaCK9XV3C7NwFXC5U5We",
  "key26": "3zEss7A1b4s2miQYECRsPgfgiQKGqdWACJx6m2k5x4MqgohQwQha975wxL82ewQy3EDqyZgqCziNwgQt8Z4qvpgT"
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
