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
    "EGbowkbqVFArbFtrrWj8EaqRdz6RSDq9d9foCTjvayb99Eqt4vdEd18gm88dwba1KGJxpJag3DtJBZbRezWVJVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ciWn28nFXoUk9U9b2GzahSsCZ1M4vme9nQ5TBXKx25NULScr62rLXn8uwSmkfnLMYCcSeuPTGrkKYpegSGWVfa",
  "key1": "2ic9ixejo4u76FutcboVYuXHjHBJddxpvmRYVArZcWgK3ge9YfDoHoLA16ps5xhdd4eyhVcwF81hfXbRpZd2cXfT",
  "key2": "5EUzAMrzYxtZeDzfdgiziicvXBDmnPUPcd9rpnXgH9s85m4Tmta4L4betJcPn3oSW924QWmFTGHNDvD3uJtD63mB",
  "key3": "3xhrWjpTswwp1QJwDrFUxHwzSezPKthzvbQUWDKu9JRCaWxhi1jFp5vJNu3hCDXSWHhim9bDiKadjKd9i6mM54Xy",
  "key4": "7TXZVSkxX6KE9kkMbVXmzw1JisZwyuGS9yPbxgPXAqqSGZZLtWY2nNEtmd8wwuqeZyQBPxTVjhVBCcHQjmymcEQ",
  "key5": "2VRQtioqW88qqt4pKNSweXbXjK9ECM9NUCzJDCUu6EZEbvxpkPrASDwA1QjQhc44SCWFJ3uN4J1wDtNJyLsr4fUk",
  "key6": "4tf7UvsM7fA8Ng3MTDr1JCUgXPQGPFy7dHKmdExFg3eDysaH5qYvPCX23h97uBjGh9tkWaL8yML29SXwUFvxvjoT",
  "key7": "4ef8F8jkh4XPVpAw1MzVJZvcVkaUjDdg9vpQEYQAhz6sbtjoLdbo2UGSnb5vZxG7SiZugDS47ZU3ZbRfRSFnghPM",
  "key8": "5sfymrXf7Y2rovi3hg7XEMPtqG23ShvmEStR1L9maFg8A22LTaZoMEFFxVEPvNXLGi9QVxB7knyLEFyWbJcZnaGC",
  "key9": "4VpZE4auDtC9DnTQpr6ffmAafKDVYvR6qaYaB2ouMYjPL8Nu8rCyLhC6qhvmqbmfjt1vPBjAkjR53my3TdyYPtXP",
  "key10": "2YJhXb2AJELfujJWHZibuh8KcV8GsUQoRKhyeLb6vhzZ9NNXr12gwkKzmiNJnnj1DuhowrQ5Wz7V9pQnbo2ywxMs",
  "key11": "4toeFNML8QNxry4LA8hW4yuSdJBH6TeAFanWe8GvfhJezr7zbmi9fpjw42ug3v54Jq4exxN4pu7EHnvLBSLWd7xj",
  "key12": "4mKqu9qNwQUoWs2Bd5TxS4EaZSjyMnuxqQxRjsUNUYKFkUw1jPhtkWPT6AunVQA6ET2NtN4ZyPeB5w8Xtmn2uHvU",
  "key13": "4ydCvNmta1Rrc39QFNxKausTaTxzaVBGvj5YQY1x95Bw2RspZTgNHHpPfeeoTigfkuVX9qTpgGEKgnuGrfXL9YZT",
  "key14": "4uyim6QwEAQdSX31XYJgqfB1xDWQCBKvKBa2Yz2bsQSAJVfxUe5eeRcjXWTiVUA8DXYaapHdbE1xmL8L38oSQwD2",
  "key15": "5GXK1DhB3ZZ4nAmE1J6Yd2trTNrpke42Dn5PJ2zotQgJQ8pH3MMSU69taX2Vvh9zsz8gNvcB9tCT9YXCzUK7D1LL",
  "key16": "4cAVqedv7SpRj2Sr8YiZ8bhmZziWzQKHoZVihmDkmCPcuPPiq7iSgxDsFCzi9a8m4GHT92JWDbV322qPuVBSLPdW",
  "key17": "48M5JU64pJDWhnMshE8U9rzuk9rjJMkxnea56phu8yENz6JzGUaKfNYAjL3NAwqVXoE71fp56E5SbWPGbGJoDmne",
  "key18": "5yK4izCoZihAkMS8josXsXWiriCmRNKa13rEta2j1WLRQFTpAfLjPQ15A5wgMh8iJpmoayZhu6x7HqTMUEJ6atH2",
  "key19": "4ZsWBYgGJTpMSKFDYUXe1f27BnYCMnA7HDxYVJGKt4LnYbChjXRLvtRpAoRpoWsbW3auFUMWA5pGTCxabCj7PrVf",
  "key20": "3TPSQU2JtLi7xLtNNJEBmYYWFjto5K8yHv4FBWQ9acCoAsnaVATU5Urw6FmF64fqR4XCWDWAqPDxPg3eDZgtH1Xx",
  "key21": "5gHYKnGb8qXJxYmR6Cn35FmavTo3BDhBi3LDZzxSf92cdRsKJQqHRPbJBKtqcqnBUEnFeRVEYj8PKHY2uz1k6yWx",
  "key22": "3HAvzD755SAX9HgMAZoLCty6SqLe4dae55dLg4gYcWMejFu66xS8RCSZiQgusQNekfoMfE68wbN74FE1bYm3vSt7",
  "key23": "2CsX5eZnx28nfQRq4b8dnorDe9msnSQZsoNyaL86QxgsCv5AVJk8zNmpDRYBzdVK99XLxYdjhnKbfB55YbVuagH4",
  "key24": "5mMob4qhiNxuxSYsZgVfKdLQBitSx6ExdSb4zoXiXvLkLqDLzPTwvf9seZnKd7kTu5xcpcLag3QvHCUyBj4EF3vJ",
  "key25": "5Z917zisYpT3KKXink5vWUov7nPs9cJXaxjuFAZJhUWrgqfSAvh1kFojFQsgfw3i5KS77NrBv4iCh8e5jNJRJXsf",
  "key26": "5U5kMaTusihawpBautgRgks1i9d7BW9y1ohLXsdoUEvhLzsiu61YcTzTxxYBeAc6wGfAAFWtsV79uwUqWPcRYjSX",
  "key27": "2MFGcgTaTgBT1e5vuGzbUieerEnFLtfh21YbF3KaxYGdaHK7D1SGBkcVo7pSNVFG7hfV1yNPUGB2HHWcGiKnk9VE",
  "key28": "5Db2wTePjw19VHxjs6WHFtgMLs7wvu6AdGymxjYzEDi2WGGsvzwvs8S4GxmqE7AWmaq7dULu1QjDqU1TBxymgP1s",
  "key29": "38pskRFC847fjUbBV3Jzq1bmMEA9uwBNZDaz9VdZjogt3GHv6MnjdyQcrKTnMS6KxcRo9a19uWJsQZXVsmPJkDH8",
  "key30": "2ZGHb71sbcgUY4CHH4E3CyWqWBXmWEjNbFekJdTpH1AuqzGcxhhgKQNMBNa93ppyAFyTfrNC729XrgEZXZCQrq5s",
  "key31": "2RdtEoabKiEFWfHZcSYAt4wHBypwLHqtf2tZyCiTW6GF5wEoHDV3YbwjGYXGKRfwj1ysfgMGZreNVE4FHja1LtXs",
  "key32": "4mwLBHrEsa52Vv55QYBda9Tsr4szCSnhkt3KAEtzPibaqaZ4G5ttuasBeeFMBqZSoku14boEmfv4BjobUVme3FUS",
  "key33": "61V7atoZ3KYVvvRHhZFBprZ1eM4ewibUCzQJSGSxQPnnuSNMPvbjiFdsbUUT1d8nnRF4YtmBLKZTCSpN3NjZBdEa",
  "key34": "bvD8SEAcfoShekhgGjr2HtCPf798h8fTvf6u38Us5naR5Kc7P8aJNqid2re1K7f7QigEHWm9eckXZXaqNBNVHbB",
  "key35": "2MRuimgKPuD8KevAgo1eGi8yYywmV6t7heZhET6t6gW825hKSkbGCGYN74prnfGzweGpGw5eyxqbMGC9A7H1TuHc",
  "key36": "jrWmgBjxHApBjQgGLk9mUAut3ncNEvbyPHL1qQZDvuretBzyRWtbuq64xaGn73AcmV2znBkw6vu4HDEnRHVGYyK",
  "key37": "35NeAfjtZchVFdLVy61q11drWSy45Da3RR1A78q4n8oVFBoVKnFLussVfgKcxvGQBQLTQ5D6NPFgDkjqN8fu2ke6",
  "key38": "5VNwsqXPUykYDi8E4qs1Qj9fGcVLHC8A4GgiKmxh43fe8nipfYK9qYZ2428fwr1J4qtqy3hqczYSWNDj5LuU5ud1"
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
