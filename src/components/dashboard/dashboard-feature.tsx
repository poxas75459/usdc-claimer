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
    "3gwK3ssJs1Yw9wzLGUdeTXzZkrkf9pkRoUhWccmm4V9tNJdNvxmFajSGiVvC3D1cnMiQ8zkZSxyZx78TDRcxePgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XY6UFU7S7rtdhGdZVxM3yhJ2N2pVm2ZYXym7xAsG9wXyXqBx7QDtZFqHvPHhbPePZWECvmgFbrVFDu5NwVQDaPk",
  "key1": "3YybchkrLtR75ZqxHdivKZbNCxbsQpqvFazibET2vFs8hUvLj9hHUonxLgFf254B5RwCKC3twjMHHDnWVWdTiPpL",
  "key2": "52vfysh8MEQVgdrHmJDvtbHFZyS6gqhnD63dExkoqHb6ebpHRzq9MwpEpvsGBk7rZQ2b6tHDFnV2hUnQgaQoCe2b",
  "key3": "3txZJAwrvfTATC3n3ofQQTBdqFpST47ZTvUWrV3eS4xrjbZX9KJFfWmvUb3Zk5mjdCoJDe1oLnuQjKjnboJnjUXM",
  "key4": "4ETo3PLvwQBwCPsy3r2GJLZAa6eLeSF7jK3t6vBA6KrbgRP4saJGeh3VgGm9hvFaeCmaDyPWBHd15Nvu1nJzxHyZ",
  "key5": "5MWhZ11rigHGbxGcpoG3TXYNvktNWTUioyUam4XXM1syyEJPQvh2hmPv9h1yZtWevThrEBvrwycMcJhU5zmzdPw8",
  "key6": "49boKMi7PT7WcpK4TR1T6e62wxtGnc5KWvtggdtixNNY1fygWZGimvHsZEnRcWUfrgCGie5vhdW9aQntdTwNZPP9",
  "key7": "5oPY1NpJS3wZpsjFx9YVDBdeukCWK4sVyYg3Wor4bervr7wE9xnrVjJDRs4d3a1tVgbUD9eB8xzb5TofofeR4dB6",
  "key8": "4uvCkk5gGQYaLbHqgneBnptPURBNrsoHHPnY2xYV4GyD744wMHMwEpFe7y5MZGfnaHvaLWQ2qDYxiVPuzbjLhfYi",
  "key9": "2HAmh7kNB86RSNnsNWaU921xDJ57PJMKRidaqJq61qW7VrJTX2tAqkK6yaqBeaWUu8hD4LFaNMw2SL2LQ4TMP3Yw",
  "key10": "5YzjDTyc8yb6wyotd3pHhAE2KJx8UCteVXMoWfSBoGFTMEjmQWSJ2R5VmKav9iRcfeh3Lvi3BCp1cdmdRzETWHjs",
  "key11": "5LvLj6PqNWhB7Pketn4jaWYqpQoia1Dzv7BARxpK9YPgi2uer5bEbYjd363XAvp4bD4gr7vMJXVfwenYtsQuafu2",
  "key12": "5oYvEdaqnyAzNApv8pi8RrHx42XkYRHsz8tLaw1mqVRGcVXWzGSxFEH3EL5uNmRfMRAtysonEnBTWFZcpGWgVtp4",
  "key13": "21o61XA8hePuLNcwzevHHW5ck8sxk1FbAt4yMsJswQS4cysUmPNCtA2m74nK7k22DiXygi9da3CVjHtSjNe9m23m",
  "key14": "2sj9ckZ8c6ZeuqvMYc4BE7GPnekXbtz7JV6dCCe4BN4rndns7qQjGqZhAuF4QmpHnd8ii992EkqqsgWjczEdsCZ1",
  "key15": "3hGX5cU6SRseXYrDYVvJaXMJiGjrzpSj47GLjDK1wBUziwC5MnffjnHcz6zq7EMiuPN7ATWhfWvur1A59znMeJqx",
  "key16": "3Py7k3k7Xm8y8CgKUdHby8Fhbrm6xAkyHB1ACPjzSbDFHvEBLu8RrREyUBitk4cUJDFcVxCGC7x1eXZ6UNDsi47q",
  "key17": "4KtGXdG73LLDMy4PosNu37x7pRi7Tgxg4ZFF4ptXigYLUwws3n1YwxbZmcMKmW2nrFR3r6FkWPBuN2GheVrPPyJp",
  "key18": "46tdKMckm6rUZyvKTzE8QuAQ3QzQVMS7HSSzk2NS6vsXBA8fEq2kT1eyq63DS5bv5dAnyreEWzozCgkGr15pVyNR",
  "key19": "5ASFddTMQiR3VJsfq1dypehCzLLXTUQHYA4SsRVQGHx2xLt1ZMbF5uqVzyLLVCaHqS2NMKpxtbiJ3Qp3zHcedJvx",
  "key20": "58EjUeCTv3a5UimbYw3STBamCFLo4TLT9ptpoZBnobdsuueFYRp95xY3SAJbBxTaSfnYs2EmayH9mPj6m4PLJjWs",
  "key21": "E5Q6sdSbrTfPfSW1etSphnUTw1oUbXk6Fyorg8JsXroh4koEYLN9JMH1XTrq8Vyru1UiKS2PybX638BmWMqvCbh",
  "key22": "agEGH3oqfprTsfNGcYvGdz39SfQ6PkS1vphognKAQstXn2Jcf4rGdLXLLesw7L9f1Ls8vydDkfXbmdGZc9yhXnx",
  "key23": "5533mxHDgMYAThBTxXjmm8WZCspv3vxCp4BWuVctDpypreXbAzb2quUZdqefrg9rb3hpRcGFe8oqoYZrmgTT8eeJ",
  "key24": "5BdxaVd8xtVQFpTysWePkYFaHf4A3gBasLYEXB4bha7LETWTpDdVP1fwpnjBv9BCoBNxchpViChDMGavsHurhQoR"
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
