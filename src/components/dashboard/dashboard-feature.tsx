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
    "3EKK1AyspfaGi21WcnX4YB6sL4pyohCjPFkAiTtysfH2ZTky3a8AbjjxquyLnRxnw3sZPyF9ZmV8dvPushnVkqTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNY956MZErL5fTSKsyqJxiYLkf9YDcTMuMBYMSH4yrPeum6SRs9WcPWobBV7G4MpxyGdrNhY57uFujgoujA1aN8",
  "key1": "2BMmbFwGjPtyDXmjRTvFVNia7HnvkZksRc9mt27kLJbnZ754JQp5qmcMVP3GrmgFUmEBNjFThookoQibBJWDsnmQ",
  "key2": "4BvW8A2CzFwrHHbLSRRfNytbbsfwUWWJLYT89wXU96KdLAotEkwxu4H1JhcrRxCAMzUrodFgX6J7EFQCitEJdAJT",
  "key3": "2nzk4Tx6cGvfXor9anxw9yG15oMWM3KLHarepeGv3iFwfL4tSdWkLTM1aRjuqEHn7yAQ2m97tvRVD8EhDfcap1Fx",
  "key4": "4jR11jeHD2cgFGUPDzTKWKepUiPnHdSa31vkQbm6bVcfr6ZoUKrsPQe9FjdVzYs2f2nyp9LAkTyeraZ17AnKTp1o",
  "key5": "YRPrZpcWnYHpqJGqB1bh5hfgr2BXeQLHWqLhuB295Ph2RU39x85paJEWgc18br3zr1o12R8e6ykCCFddirNQKik",
  "key6": "2SUTNuQaumWYscQXHkExruhAFzBQAKqahmkm4SeDr9csPsEKq8kec4Stxsm894eJmmE7WXEWSWq8bT48ioqNEHqh",
  "key7": "2huR5o6Btz3aZNEbU45Mvg6UPd6aZoYLLfvTZjSwXn92rJqF1L9kZQBdYed3hVxsB2M5PehadEsV4RoDJ98XZWG2",
  "key8": "3kqDimu7GPUW7wLWoBwiarSfPA8BWwXqT4W5EGWwXhZPuyRDzVHAtSEvgGNSedxhvnAJoNiK67dLoVMYbdWdn8DW",
  "key9": "Zfi9ZtbeXEdJjGSSoLfS3PZ6Prmjz2fXYDeuYdmECJTVJ1Hj1R9YbeCUmxTWZQWgyMPVA5ksBy4jzBYWFXDRXah",
  "key10": "2g8Bn8FctW3VT6NERcuwNQBy3ZTYYtwjMmsNhSCwQbjeTrWeWCBwBVkSZB1rKefretS5HRWq8UxJkmLGUydaX8Lh",
  "key11": "4DehsxiBLgkWyRxtcoHpFX3EwGPfAvoLyhyafJX37G5YuFegWVdm76RwzQjVaRRvKBjc9AdvDgSAkw7toAGHY8eW",
  "key12": "4kATrsSutQcAksJfvXvE1DVFvGm8DbK7SLhcwTAsDbUrhLdBDyPP9tXRFtfwMmgHAE9KwJyj9rRW8h4NywoA9Hso",
  "key13": "B2ydUhsUG5VaMh73BCCHwg7h943Z1o2e4mK1iPWsq3GV9Gzz3iwom5QHQofasNwb5oGLL1rt6CT7xaXjDnaH25U",
  "key14": "3RhyFqJKEwhD7QoNq3EVDCXc5zkVWaqnmgsJYuQBtzvYhwHQsuSwvNBUcqYExZmCNjW4Sy26XJ28azrY3KVTZ5FE",
  "key15": "3ng5rxr67qsZw3rz26dqdxPXVrcXa25M9XBFLBednWSH6ZYrRywGaULmuyrR9VYkdSXoADqNiYsxb9CjFXn9Gytu",
  "key16": "5RrYtwQw2eQ45WChSoJFLbqxGpN567xW3qfWH6VpVaC27hkrXJv2V6KD5hwp3DghWFcNhAFTK21DJNC8WTTUNxtA",
  "key17": "4Px2K9DMbB2ciX7MMLpfztkX63uLPYW8JUsT1SPDy6DN5Pa5xcFJbeZ7JCjU7iFc1nLhGFAEAb9DuoW3kQDiakZr",
  "key18": "3faEVNN7GGSUJ64wTnhafqWSDCrkwp9M2VZDeJXxDhsGjJBMabXj7QnMWfswwkj36koZF4gc13oinZhjiErqKMBJ",
  "key19": "2H2C2pcvYymJ6YHXrQ2WkvMJZufsQRuvcKDZQFG9RzdFBe6KyE5Q7pQgwT47oQYREHt3BToyTiDxPhgzivbrfcbJ",
  "key20": "5Q2VMFq1k2L2kZkBm4jhskSfWN9c9bi4R8hRnSoCK7fp4oC7KJW33LV25CbosLejdjEQvCrK53rwaAKexwLVpDPW",
  "key21": "3XHzi3XCtmZGE84rpr1AteFSD2EdQeAeSHcDkcFP6Pw4iv5cWt4iAkw5eXVHU3dvbHRAKFLVPJePMpVAMfiescpp",
  "key22": "2r6YGUTU2Ac9fQx9d9Tcjsjn3ZnLB3y1RdVGd6TyLs7ZG8owRCcwhKEnFfbWzF8Wf1fQkf58X74CzZwExwqNGkef",
  "key23": "5jnTaD2MLmMrS9MkxRjkPR3tHSDpsZ93yHdmEmmdPvSLf2UcATuCMb6gkcrKmUsZ3BTATxzeW15CxM7cC5K4nKMF",
  "key24": "62XhqoxmM2ijp5juiAgZPhverXJKktzQ1npFqzV3K2bBqzcrsuXM5e4SfB2GveEKjHjf1kJ7nmhu4eGC5tFGt4ws",
  "key25": "21vd2jevSc4itdKQwMQKx9XH19ntHqX1tXrwGAzPZtFvdVwi27td5m7Re9z9mx3HRRfNXChQLoD2jwqxyxK7xCUz",
  "key26": "2N5kDxDBxy8woMtSk1YqQq3EUBzQSaJEK6V3N2yBTCzbefgEhCFQsSw8caamkF1rgeQBgXX9fDELPhEq85C8q7a7",
  "key27": "64bLEMJyBeKjTEyXY5LssvLmaY9uTVtVXeaAyQA7woMiJu1e1C8zaxQJAGUBpg5zUJNHh3rtyJsnrXbTq4YWSqUx"
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
