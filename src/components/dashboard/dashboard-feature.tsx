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
    "TmjRCs2zpvHD15bSQHj5h3EhmFHecQE4PTbrP4gVjWC8xD9ni5bnBeYej8SvYdGJh2RgCNKthAgWyyaDwLkEum7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gbvqJPXqCqEDp1rGq83NNoRdtvpF8gvSZSharjxVd8ockdfpZ6f2pWrmsa9BpE89gHsHXdiPuXZWsCEUB2n46W",
  "key1": "27GrbqoR31Fj9v5jrfpPcrBgJAMyhvN2VEs2VJCuaBrfdQd9SgxyKJY6WcnYz5ZDYLG1BrrpVGzXHe5qiCenTEUy",
  "key2": "4yFAuaw5NPHGngKFknix4AFBBEcxQu85LTyWLycqqF8SbtP92pmEyUFUJvivJHTp9zM1243ao13A9QkTPLGEsQ4n",
  "key3": "4qsANSZTtpngXzK6Rep8HnUWEcGDn8SQpo8vzTnqm4TUAJAKK1mp4ctoqyMtaggEcxuji9MDZNtrDkWWdca4B2gX",
  "key4": "4AsKwVtWtfQs8Se5ocBsRKTQcHaqJNRz2cCfA5Tvzg8gVAG8iuiC9BvMywB1ABgtSYfiRPBuyPb7dN4rRAGEMBJe",
  "key5": "3WhS9BQdTuT4pPJ4sAeLxViL7BnQVcULPee3CDjusmNruuAo23jSr3vjv3p3By1a6DyMNvB3BPfgav9YtWPK4ESM",
  "key6": "5sTmjqFLaEwJ3bDCJNYcw54MBTx8vhXX1ktscFKA7GyXTYRMhQsk3cVkF3p1dXYi7ZiQfUHfc4GARgTkPR3aBog2",
  "key7": "4cbWbTkhYqkzuSFhUabHaqjtbRR5J2VkKRPsBhXXXYnDvTBzooCcPjjanUVPwLkwfoao4CDCzZjPAgp6wow4PYeJ",
  "key8": "2HwJK5MNKD3MQCkwLe393hNX6sgMbH5drPUd4se8MhnRaQBxMciwoeTkMmq65jbV47zsbxRw4LumPj9Em3gzAJmr",
  "key9": "2G6et4j3T7X4FBdKF9rjE3YrV8LCG7VaoPovkge5dbgeXtvCDqNhCarX3MEM7QUQdFhgreA5ZMdQ1jAMctwF6US4",
  "key10": "2pdk14K61ExoNPQtVELxy9QpY2YuyoqcT5bXNMxGButkGFwHsSnAsV1M3CoTVqS679MdteRxrpRSMqMZNgaKjrQr",
  "key11": "5KkDaNhoDF6WfTrKmnPP6EvGhSwwETrfrHzf4s6AiMZas54CKxv7EVxkMaZgchVoM1VrYWwQ1hYCZizq762mtmrh",
  "key12": "3a3YTTq39KKsf59jAX1EBx8CaBuCNpwwgwH6zUnQMdwxXgi93SeWGsALSNxBwaTmzbc21zt8PpmG2k8REcZeTSrC",
  "key13": "61pbMJXX4jT7BaqursfRCdKG8GqXzWc9uLa6D9bYWuc66GsMZRZccV21gM5SMH6rV9VeywW3U2rKzRPEo2DycNAA",
  "key14": "2X483ChC6pWazDduETaV7NjQgTBRALHJqpSEHBczbvzJ6ZyUMFPLHpKekS5cArvzXFq5rq28Ans2VJZyuF4d5TDi",
  "key15": "2vEaaQKV7URBUdrvPHQMpW4hXk4Qj2N9x6niNY8tJETWEPcLu9oEQrUy8RkdpnqPUJYUguEwfbYzYnRFow19vRtR",
  "key16": "56btSpVkea4k3v58Bz1ETuC4UZTz4t6VcR5aNYC6faC4c67zVzUbLCzUnE4CA3Ry7assFbYmfPgx6gV2vhHaDBiH",
  "key17": "2dR5LusQW7cxqQuRgepNadERGaSEimrcYBHyfmDrFzVw75etnCo9qXVVXeZYGSNVEhukqjdRaDSAsszvsZNXo6j6",
  "key18": "38FhHyjyTQD9iPm5LLaxkyRHaMnLLRxZHPy2XcgG4jukEeH7mr38ugZJyzDd4xDZVFZoB8QU592w1YKALMtu5PbJ",
  "key19": "4j1UR87yMWxn68BZmf853Uqxqe9JjVXvcJGk72iuP9dDkWGPYvxb2txBCS8J58t9SCDSVH3VskCFCdwQPfsJYryW",
  "key20": "27EVRoeu38kGUHLRfVrju8f34DH8WxQD7WavUHmExvRSxvrVbhnRVXm2QfsyMh2wLnM4fRqPttTFaLBvvb9q6MBM",
  "key21": "3G3A3CEBQrGrHoSEppmZCH4o6fNQ2LE6ymZJbaCvfQTNS4J5FFuqoCfi4Bygz7XzBfHKEFunMhLvRfx8PMv7n3zh",
  "key22": "66rqNk7qgdnfX9TvRgvBepCX4jdWSJRuAwmqGEtJW3wiCoEr1UBD3Wy88bKKNS6xpoER8bQaw7vT9M787S84iXYm",
  "key23": "5NWLrkQoL2mL1v5MpQN7vtGsR68jv6JQNkah256PpQw7hEc45cPd6tNokrLCUhDjjjYNa7eFhFahFvrvf1V1Q6PD",
  "key24": "3MHEdT99q45yJFZtc8k8Hg4EF9b2ixjqb2qV8BiiS4g8NNDBYYivLCwmy6WijPGFcu7bmhA8y9AWfsSdgDmRRq8c",
  "key25": "4NDu1ZofeSKPGNnGiRww1TqH9Y3zSyuh6f4FLe62qCRf18qhfSCVbRyL7D2KRnTzpiTGmrKy5fvr4Bt6eMxeTrXo",
  "key26": "5PwWdqBsmnndVrKCMvesCEDHj8pEeLuz37exPBngfRaaJ2qv9bVjRv6GkuYwVMPp2MqPRxfXVigkW5wfFcRe2e4u",
  "key27": "4YK6btkTdwohhMVpkg1VkACHKwNLCisqKLaaLu2FHBrRBKEUb1LCx92h5zNHs7iW9kWzPWWcbqRFCW56arr3j8oN",
  "key28": "2o5PGZwAEgHez31LwX45z7PALqaiUKsVRyLFUTujeLBFoSBk5UahnhCHBNGz57Vp97Y5xNr9YP6PQd7iRgbY26CN",
  "key29": "2ZYoKtCYe65vr6sJ5uCxRcewhmRdKedTLrsP2LdGU5pLKnYBBQbrDDW5cUt1UF2HXf2njJesc6b7rnijyoDCpz4E",
  "key30": "3nejPyuyTs6pEC6GwMXmsxw7hbxaiRgFo21W1ZcMPCaPMW2jMVpyLEMuEsNvqAoTz2unDmQkTXgexyjPazAs2bRM",
  "key31": "4xpbs8Dj6NjNwgP2hEoGW6TbpxKwk4n1fBd6QfKa5wvYyzEFQjhLd86utwm9WwLq5bBS4NwhtekoLzXVhzRkoAVr"
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
