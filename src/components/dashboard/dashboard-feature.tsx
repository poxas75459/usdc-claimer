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
    "3PznUwEYmJPYfYfDCFTSYhRGNjTY5HuMvkaQ3aqoeMYcgP6nZCPJy5sa16tJ4u788ggxoQqpCXsFNiM83tt9R3YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Gwepq52BPVPy9ooL9tw1WA8hMwuaPWgYcXNoxueAEFxJ1oE1x6BtvNoK6yDhYh2exSCatkvS2BkdvEFrPodPKj",
  "key1": "51DM4DnDXBjVHGVFLYSeUnmj9kKqav7YqBBvpcNxxQevZc2HiwSUdc3BQNiwp3vBps5FPvWCLUAQMbCfZ9ftJ22J",
  "key2": "347QNpYCd3w7uiqZcPBeNmhHi8vtAvn9a38PoDwQyWprh9wknSnbW52HjYkpQGd53kstU2BkLxVJ8LTeCXkcLuPj",
  "key3": "5NN2ZBdDaM2WSTXRq6Bd18EWUnYxBicqdJszUvzFNgyRMWrTkxUGVkRNL4ubgW78xVyiQpYcUFAu6FNyJ28C46FF",
  "key4": "66Gv4yoPJZhxJsinAF6bjVZDy5v23WcTc8hShvfhxhbUKBgyv6uCWheznptTXbmY2ZxTounzz3EboHgJcAQJqJoR",
  "key5": "J9RXg8UWasL1E8oeCVxWceXZ9p6oBBYSJNqcRyiyijuQ1fJAGNqyc9DEXi12PvHo14rd6gRwhMNXwyf1nh22r7k",
  "key6": "2EkhJ1D4abBvndWAk6kUEYmJJCrrWguwMF1NN41czsGXKuSNge8ZZ6zrNJtRCDXnorbBMcPDJM4vf7nGwTy26ner",
  "key7": "5nDRpcW2rjXkrBQuERni2JLLnVfh4Za3kYKLFfvhg4L3cFfAESqCdeBwa9zKP1ZrUrqcK5iyJZquA8tvxrE9rbUQ",
  "key8": "2c8VySpdhyKPJpdf9divyr42TUwMKTHBE56vTMvWXRbtSUrAGFi2A6oT8ci7LVqV9MskpYejTqnFZtkFbtRe1KT1",
  "key9": "Y5B8yfmrxq6HC26xgpsGZNtJoxQxFgySJeAMYt89vuFUF9JSdctH1KzNizQmtkw2ReNten8Vv13AUT2HTx2Hr97",
  "key10": "44ZVUjih4AnyfyvUrDcVVK8R3k3w8UDqKaK5nf8EvM4irZYu374LMHzPmSXSrrwM7Z5G3tiCJo7xPH4iyYW7Q7Aw",
  "key11": "4iVV25ZnjEmDYrZ987t8ogkz7vZ2SNQEuAECZeEWHzpwmrY3KoRVNVpeDUh5vy9HLevLMD5H2q4U8owiafxpD5A3",
  "key12": "4VcaasFBx9FRTuQPa9aNiww7iimW9S8CDGyA7VGmPtTiN1WKQUeJLsT1n3TqG4mjfUDtVibV5KDZfGfS6M4EnAfi",
  "key13": "3R8GZ1EVPbfukchmttHW8SkWZfQjbL3Utqec4yG4WfZCGUt34o1DPeyJAs5bsZ3bLTshNFQ3mZJRx2HU8NqarLkE",
  "key14": "PfqGWyH58ikCWHnJiejcEH9uUE32ycdmT1nRDmXKpXMLbGBSVW4aAjq9KgpnxBAeqVt8Y44QAchyHbnQTmD8iEd",
  "key15": "4q2RSK8QM5uUGUK4pVG2CuRL5rA4Q8ikW7aiDNUN9VTjjWrS1PGootKfmBZyF7FJkpw6udXem7vLo9Xs2HMeEs1D",
  "key16": "65QzwESPJbfr7g8UJMHmbLLnQnBHLqfYeUHtqEpjybV4BG9LaEWq3pwXhWM1CiNtWax6Bpu8EX18a2vBQn61gpcx",
  "key17": "po5dhwhCXMU2vRsWvBXneLf94dtY5dBAkL588HEQmtNynaSDucpyietsg7oqkGMJRQocsCjvEd1uiRFuwY9758h",
  "key18": "43b9X6JHhSWqTtjgJ8jAUAuNTBwCBbCRX25KoYeiJk1LWJjVjf9Ek9suNKhAa6GrnvfwyNQdR8rB7mwQDr5JkokJ",
  "key19": "2PHerpdsTBFd562anFwFCaXmwy4bpd1krpGSuFqcDwsYGD1ckbRLsFDuPzUAm8VSVBUhbqYL5ikfmEsUofhAuxyU",
  "key20": "DhuDKjDGDrUZvPu739gdnQBHs9VAUNJqboJLGtUomqRVP4wRhUHyfDzVk72vt6C5abFowwtAW6JtDSaybcTLHa6",
  "key21": "3GVrnAyBCgskYibgcdk5C1P2UVoo8cE6rtt4TvwL97Dk1UbHnBerUUU42nCo39PS5kmbiqQ4gazkKqbAiKhokzJN",
  "key22": "4pUKSw6g7a3YTWWdd6nddAY2BhE6npVSMSuCohUqhoAyqEWwtZZaCkb1yLMuQY7M85V6dx8cCUF7LkYJTZE2fbvb",
  "key23": "3f8ZV7BuBZw7KDYYX9x5VPTXDdt3mwK72deKDHFK1st5pry3LcE3tJ3xjGrfyYsEYHm9AQtK6wFkZoGk3sqZmdwd",
  "key24": "58QtiQeCaxVPpGQC1XT6SaZSrynmCWJNiuabmbvunKKoHCDDqU8CxUSA3XDijUvyDoLaPazHC5NNYXdeNZAGSCE4"
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
