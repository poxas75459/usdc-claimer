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
    "cjEHRLrPMCFaxCK12qE6k6oRxEeN4CwCYNinLBcxBnDAeg1QLz1UZF3n4JrpZq8apSTYyGp8PcYTYSLR9oU3LHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYDXMZNjoQXdx4Yzq9acFaCnjbUfk95GFkfX1PQD2svMfaNx2iyueRTmEpf7bvnPZv6yFpspeWPX3dDMuMgy4Ze",
  "key1": "3AGfzetHkp39mQ7ruS4VRtmTtiW2ycbXkJtTYFa4WrsfFT66jCZ5zBGpxrm4XBMUWKSypHM5fBvfPgHEFY4ijzoS",
  "key2": "2wwMVDpoZJk9RenjDhhGcJW52xZqsmMMY9e8BiZYbhg6xAqesJ7xWt1xJMw5uygjXHQUL8h7P1vtLUeNLuD5Jysm",
  "key3": "3JRQQ5nfTQ85eudj2HeS5jAKaSkdZiNye6nKAwNx4RQdVDBbEbxoT2VP4iR2MrirRqZohpsSSEbbsHSNrqzPsCSE",
  "key4": "LES3eMNtb4ER51DUd1XTnDh8tpUHdn7SHq14yaFWuDrPRkMM4TXgJJyabDttYTe1KTLtVtwtYDMUpRwSGoChCeN",
  "key5": "Xjd1BaAeWsZrY8k4BN3QBx3U4YxUtG7busuEj8eS5j6mVuSdnhni4WW7Q1Q7EDtZLdD6pkDSNDKZCATKkyzs89n",
  "key6": "3JvSFJ882CG6xqDu9SJk6T8Gw3eVft2cMHtueuK1fUCLkfunEnsRs2t4vXXNbDN37VawvCoijB1Gue8i5rgxvCa9",
  "key7": "268ZatymKmqfYZq1aLKbcrh5752B6xaFtXE29YsGRtXex5QvEDh25kBfaYLYTZWLAbHmCgJaUqj4vUfbaweYRpZd",
  "key8": "4ag99FtrdeievPxZXrb7dvw6Lz5St9jNjGfXZJc8yVgK6Tsa7agvJZhSz8PXfFbU6CEWggmwXX8NF4tJoT2MGWrM",
  "key9": "5tqCRdgkh4VhMqusUE84n2YwYsf4F3VSTFfDFhNhU7WqddLtkzS1dqwPt7p5AiETX6L1JEPMotuuoYcUqp9PCVaD",
  "key10": "2rfZHhfLmqf7cmbe7Tcj5Cwdw1tYcsQEwd9e2rHF4uopnefMLBM8H8ymu6GRgSkDepyTB91NSzV1ZRdJFZ9awCgN",
  "key11": "4Q6JTMnMZpTx7NWbahU9xKSiUfAiCtscePU4ecx3CRXp4vDVLu2kZ2SL6fsh6Z2WYweiazXcK1z4jNPxeVr67krn",
  "key12": "3rAWa1uaH22TPg2fpN4zhsYzcA14Pwo2yBdXt111HA8vor2UaqpKDmGDaroRcgbQXC1zKjLJm2SsCWA2Ssrt4YWb",
  "key13": "5PsyaJPpTzHs8WK7Ti4HLNmMk8BhVTVaEZWTGWYYTchb8jcZqbN7fsiAxXkT6d7rLPNcHwAKquRb3vbA9DNRF5o5",
  "key14": "5Hukv7uykYoAradEAeFVy6tRLupaqHkqMzj3zah8RMeGmEoXANafYF2U8HbVVWtTb79z7gnxS7sARFPQV9kXBZMo",
  "key15": "EPGcCoNSN72kht8L2vXpDar1w3ttn2FNFKkEK5EB7WNAvVwqAn5HR2gdnMaeh24mNBVsyC9syY2m7T3U8wQqfV4",
  "key16": "5wmiDpazXzuuppiJdn14X47iAzK8567LoyBuJZv1z243C44HvCwsT3gPrtYuRGmVr3m2DnTFZCiStdYhMgd6KmFt",
  "key17": "2h9tPBhp4irMQ1XN1PJWARZjjgSExGTADFFEo1zgAjoW4JmnG4zbVRASnmR5LGEtyrQXJ6wd19GS5jXRKKHRDwyg",
  "key18": "5KcGr84AZdcDQ6m13is6Dz2cWCu46cTphP6MYagfFLoxPQJHN97eGx9XPoQbM4p1UenLWckb3GTC9EaDSMMb2N8j",
  "key19": "5Dknxyi9CuBZie9t76Us61xZynB2x2ddUHiWPHEAxTaXvZurnkdFeHxRaenqZkzQAwtPtTU94p4bRGvXFc7ondcy",
  "key20": "5MAiLUHfSLsRGf7bDhRu3MvVFPHCQkX1DBtEE1Y7u22m71EQ6yk8CDEgrz2X1EXWFK8g3cPRzHeQGVwKb4Y6mJ5E",
  "key21": "5M1XKbRq3Cpo5tzAyz8bmNZeswT6xR5xUQ6A3wtjUAyqt2sL8jYz6772TSJYPCEgUsgegzuyC3tc1Hict3eeck98",
  "key22": "2jNNZL67krgGt8S14x9RrGk4Jh12c7QRo5oskNBLmX98VCj3jzTTVRjH3qWNLifo9bpvMgKx8q2tyJczsRgqswvE",
  "key23": "3b7pNqH8Us1GVGvaiMcDnaTLWxeyTBfXLYEhLXBU3XtzndQkbh9BMZvfGCDW35KJ5ewi3Rysswp5Vnk7DnW5irhy",
  "key24": "5VzgVCXJF2ujkDa8vHrxyYWttCF4cZkSKkK78CJzLE5wEkEUbWA9m17H65CsSci8ac6J6bmkDKsEQVq9F3aAKF6G",
  "key25": "4FwxexEAyWS1eLa4ADBzuPjiynBvmPHm4bVXML5mGAufR1L9emjgaruVsXbKVZFpuy8V49sEWxE78UVHdAZ5Rbzh",
  "key26": "4MVW6ANKuTe4Z333sduWVi5U7BofncvskZyuqTPyuqEyiLaeATw2aBgRJDT6mprq5Y4m3RLXsREymcBT12JrGTDM"
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
