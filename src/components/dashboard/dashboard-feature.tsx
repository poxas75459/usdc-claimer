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
    "52Kfnn9ek8Y4jRo2NNbe1kBTK6ZZzGBwQFumV1HjrzKtXmAzXTwiHDPWKMBdaYnwmFi5Ln1d68NyKkxrToX1NLpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372RUGSP7CYbfMo4hJr1SarZdhfm9oZiLd9yU92i6k13z3db5Cbm34W1YghcN8NgBzhUH9DzfNPepv2Bk4zK1tiZ",
  "key1": "5rJikzFKNDbkSTDTeGDrGPH2LzzG45s7jxSa8qDpi7ZTufh5Me4zmbHEDoi2HQ5t1mF9s1Ep7bFNci3dhPQMpwCj",
  "key2": "5AWTziZJsye7a54XiSr5uCcbh6ap5nr7ZKUeJqaxKFxmDPmKJxZCKVAndBsqj1Hb6KvGn6rymKBms3aLMoakcN6B",
  "key3": "5WPCQMYWQ338RrsVYJEYk9DSkRtXHxvk17wS5ng6thKKuT7H3xfxE1d38CaGu2ooUW1A1bSVjr7bQhD1mBGEzsgD",
  "key4": "3wwSESZhnrCaVTwGeCYqww7YK6RkcHRYo6faaS5Axbkh2E1mAZxSkTEi1CAwWo4pr32GBb5cPW9YcfH7NuhRDWTq",
  "key5": "5LrdU8k5qFV8XXi4vdUbFYYJV7AiND7tULhJT7PGVqV8NFghQAXaJ8ooceprjKMZpRUGpo6qn3robC8mTX22sMdV",
  "key6": "2JGQJcJm9BHnCCzqzgUqYSio1C2jJeMvaoikbzFk9m5BA66Ztv6jaX9VNnac9EZX864xbvDc3n12Df6NHnggyXAe",
  "key7": "4kSn6TS4APvvAEFe1oJttfeadVGDXWkyS62yHRs2g7Y2UGh2bW6ar3MEJVdqYWJvjsQCrVE2kSrdmnMVz31wHCR5",
  "key8": "2Vp7XZij7FRZEbSSintBVXajQoxrQTUiDKwcJ8e9HE6keA1ZGWEPBAa1WSXAHB7pKCDby61DWPA7mriTNUukP8B1",
  "key9": "K2hLf6bKiXYGdezTEAfuzHcSsNKo2DEUnX3QEairwwNyyg1aqfQam875oVt6MXA58fLtGRBZLZq3KVLw77UaDbG",
  "key10": "5U2dzLBGVUhwUkEY3d6EhRLpCUrGDr6PVsrZStK2AdXiCb2GJ8KEAcnN77yYgn1C5KHNGL3kPe9rizS15AqCTjtW",
  "key11": "4h5ZVDSzjxco4iDTYyFuvdyubThazubudurJzmjK9Ec1szGLBMHsG61dReJPgXMoFX8vhNgGyeHYzthJqM6HHW9F",
  "key12": "5DBf27fsnHTqqxgYxRNPXZVhcw61bcmtNu8ywHR1RYwYkCaSU8nN6f1AVhFv4fs6vDnDyjKH31rhkrogEX3MYjYy",
  "key13": "3bErC7uu1Z4oKSWZ4WKqKsZxfkkNWtfr7iApUrZtQLfezWkifaYc6tm2FQ9LT97eQsdxggxXEZ2s9ThbhQYXvG7j",
  "key14": "ASbJC7kSYvkgbM1PdHbabhKAQ72svycXiBKXZndcPZhAANng8jas8tkna9uDcByae1qmxqCuWPjgcs1L5uH55Lr",
  "key15": "5RAWQGyqeh1qmL62X43AEsv2UsLTSwhF9QVQdBe5C1W145uCn49BqS1U3RcuCCYnDUSaaVu4pJjj3xdduaikCbdV",
  "key16": "5PxYs8cFw5VpRtWERumsRBYJDDtopEAKZcpdzLRFtKgPM7T2csph3CXKpbiv8ica9nEfJWFGf4nboP7JJXBDRhhR",
  "key17": "5YJHKuaq2yQ2wT5ZXWsHX8z1FCtpp9eV7r4hkT4mD7mZp5ChnHXzvsCoM1cNQG1bCp4vUMNab124jS5dzFvEjUzd",
  "key18": "5Nanu3sqo4mba7XQDmMpsYhAGQpMjtBHfVMLjmdtvBCoe4sdpVVonh7SM4cg426Kv7oQvD8TY1zW8GKGk6o7bpiE",
  "key19": "5AMGbKvqr6FTfadCuP3VufRK4vL49qodKZaWYbDTunfADC43KBf7MDYSwU64XWB7AQyKQ7hRig8sPCgr8Bb3nfMx",
  "key20": "4keEujsBugLz3F15vvKN28ikExfo9iRgncDUs4NUQupgPjXgz21BvHGuXVYfSx5xZ5w14EPhU9YgAwZJoQ3m6oSs",
  "key21": "3JNgE1nypsTxcjbZEooYxo88ydd2PzewMbVgVUnoV8w55YTjoRgLjSCHu4N88nbNhjvFcbki3faReZzmi6hapRMr",
  "key22": "AkeC4hfGWkZjR1jRBF7T32Deko8RPkGjK9gzXBy8eNFauu3NdfTdUsyYyhqQjArP4oE9y4Tx6QvfyN3jvi1mjDq",
  "key23": "23vGESigoy2VggnHswVJSMB4nzpzpNbTi3wiapdpPE1QKGEJHrRg6ApzWVngCQxbLQ8oZ97zEjuF4Adk9R16upcQ",
  "key24": "5kezT2mtAcxkdq3Zogsj7tSU2G6rq26QiEBWu96oq4U1VHpgQ92iBGtsEcjqiEyFC5GYbJP1vBCttKC7j3b91MMx",
  "key25": "64aBpq6nn8hG7gqESRDJufGY9ihPagrsZrZXrsap1hw6eEyodtLXREQcpD2zoivycMRSxPioc3WBvxsm3bkUsoy2",
  "key26": "5anVNFLpX4bZQ16cvDKcuZwTF6iNJNtZssw7eJTNhDEM14KZUZpGpzLL8kKzmbWP49fWArFYfD8SYHWy2CeZm6aA",
  "key27": "4JwQewiobVXx855NGuFbWnpXHg5pg5mrbH5uuQMgeZBMEFfRtqPptFMPhVud7CiXAoMyzESQzkFRt99ZQTPkMCN5",
  "key28": "3FBZycrU6FMF474fQrixjrFBCJ9uqMeJcXf26BEJRfqtyLXhVumnqT1SaiKVhAdK6MGhmL2hJn5hosPnTZUDbQUz",
  "key29": "CwETwGmPKY71DbHhEvhmnSfvyTsnpVFRJBwTYJNCKbBpoKP7okCGR3Gu9qSAVonmD5muqjpV4aohg3sreCUbXmN",
  "key30": "H1cUYu6QmMbaB6UWAdnwJRuq7h2qp3bJJS2wTbzd9QSu86CoqPEzgJKY12YkiUTMPEY3B7SUc97AL2odUsTAYAS",
  "key31": "Zz2zkQy22AbGaQLBac16XTsSTBVe4naftuCfxYBH1WX5SFhUey25MkSpjXWpJL8dTQ3ogXVDtnMdA48u25SwY3f",
  "key32": "2PVKTLAB4hthVfvZwMkTnunkkwsawgBhzFGxDZgbxqj4x3EfwGziQffziBUrw97eSgkJaLynMaRUNkWpQ2zYW8Bo"
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
