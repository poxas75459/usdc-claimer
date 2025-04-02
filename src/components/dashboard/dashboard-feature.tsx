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
    "3vxWBKcKg8wxxXxFSv9LFcBjGekgfUhuaXP91wbHyeBsGSErq2RusonFDjM5mfzQEJtWeNM7s35cGPvbGC35MVYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29M3iZ8czjdH5rECarAzt9ZapCLCxPyhnvUDU4fsYmL5KA5nLaG5PmXHah9viixuNgXSCYLTeURZah6heT4VP9u6",
  "key1": "4tmhB5V5iN3VjKtGCqeT6KFDVCZDtWLsRcgXQg1xKryY4bPfvwdmdiYaD77WSBUbrK8XWpLg41iNqXWcfX92f2Ac",
  "key2": "45UbtLSUaeQT44oRugUzHaCZeoBHo5Bk231mFbPte45ouVb2MbdE17HpzxsQs4hEXuqC1fqJnciqYdq7ZqmDD6gY",
  "key3": "5vVfJrE9kkKtrPMLC5z21yr3ggHHNbLRx6gkPxQBhDeGJj4gP5Ut8eeSrsMcUXh1ihEZ99y14tUJWLG7R6pNKJG1",
  "key4": "4ZgNTpf8JgVb1DUzssT2KyPKEeAttCTVqiee1uPeffVaa1Q7jBzFE6sqTxPfWrQUFECRYDDpf2ccHWHVZCEVEnmk",
  "key5": "2F2vmAHrpT4L4y4y2ShTCoA4DLWdnWDSuhBz2Bmyesbs8vNzitA8oAMyUzAgBvsDHLfFJUkz5Uar4soFWRymGo1",
  "key6": "2fhuJiR7m83fT19NxawD7PVVNP9jCE7HX2LP6KiZiV9m5cLLcbJeAXbvcNq6B5WQsdq2MQuFEbDpqoQEaSzeEkMu",
  "key7": "2oiAT7TyNyXJjwvHPTvAw3Zcw7BpMTs8cCc8Fath8V21BQm9jWsHzabZdnVDu9dvExdryu1oHTtk995HgV5P8kqu",
  "key8": "3zPJeqiTB4NyRnQw7Sk2h1oZ4MPWn3r1Khj4jeNCSN3JjJvFYJVeUAxTor4hGNCcG7ZQobczrsKe7WVUpVXPqoKe",
  "key9": "5HWyYxY5QdLXXrG78duhrcCpwwsda864dhZLntDvgSn8BXRacUFGxwPjxVcryZ3fV3HtJVPiRhMbhJrndjg5fdQD",
  "key10": "xdYCTwjki8TSXpLQA4FsSxxVSmgUAkCcTG81qSEEZ6XTC5aU45eoUK3NM6TM3mfAxNH1zitNx9i4w3J6wqB42SE",
  "key11": "2Yy5D22PMT3ch3moDGv53EmM4Dh3cXQ3th5D11UNVCu98PRMijKq37yoC76D3Qb6wTnBdngjB3JP4Qxa3Ds1znQK",
  "key12": "3JgTLAYaxD7ktaYEZPfxkjRCKrWfHzmW4S7QF4eas4yBNji3vjQRfVKeK7kX6ecoPdBdUwWLm7JDACVpH8Q3QJMa",
  "key13": "2gzaQkKqW3Bkrj39MJavc1gn95aQixniPbYSbgoshSar84tdAX4NG2QHfyvGNoEF1jXJwBZr5Uoxc6tWg9xgYapt",
  "key14": "62NxEjt8Nrto8VFYEqehJRp1AQeQiExfDcdqJugU4EDTMGuQdKNAJvgYas8emp7ZhQYU9QXMnybvj9xZUqNmq4Zv",
  "key15": "4DVBG4hnmsXzEjyAJPCYTsAyDT4xiqwKcj4L8rMDYfN5WekkjDKji46NuXzdY183qyEUiW3C5zernJajvb8yisHd",
  "key16": "3xux2wY649B5EaEaj6sXUkLpPfUwqhNVHBDMktFsdRJHWizsutvK3AT1kA8DQ7XuhpfcPdstPD1V2fXAB1uEMPgC",
  "key17": "7GAhDrFxJ1Xyhws4Af7kmfy4rrWsaKWeNPMq7QEqaQzoVQvmKNuQBJoHpb2aEd6ffjXE9BMmhrhhrXSZRxTtEPh",
  "key18": "2AB6cqz35UzCE4aATq21NBMTrZ2wUCb9TUSWfJCtS1SbJJZCr1dfvWLJU51xpWbUiTMjRzo5z8MoodrWeaRXdHZM",
  "key19": "2Rx44cwWqf6T7UvGivJHNw4w9MasyD8EYoZZ4mVdFayTnnZ48Wr6yk2KVkVPDjT36dMzDAT5cooDL86D8yRhxJ4k",
  "key20": "4NLvRp16T522A2fqTiJwcLYsrSukvxCCpEUyZFRrgT7nqo5T5pXh6a1QJQdXZGPvrBH139vLNHoYZqYf8pDN1Ckq",
  "key21": "gmYAcSXL8yDPToS4KRjNvU3T8Z1TGdDBahu77Cexe5NbNTC9r4DfzWCunJMvzQQZuQkJVqrtEbYWBBXCDQJ8vMz",
  "key22": "3J3HszdopPVFmRxjQUrNXCit1ziuojQ85wwm4P5CyFfNwoXbp4KAeUvo3yGs7LXcZ67PQimrsPhMVu7krEncrvfi",
  "key23": "3ukoXknWRhzNhcr1Ccfr7WidETSRS2zmRFEceD6H3BY9wRvMJSrfJLLw2Q4BwWgqaEpzsZpoanqtVQzUWWzN8Hew",
  "key24": "5NcWaCgJ72LFKG781YC5MKmaAy4uH6pbkwarnvwvbRoVKNg4nR1AtcqHgc8E9szQDxMTkVvJjFVPLuNmdzGSepqL",
  "key25": "5yumeycTSPPTjo7cTo66cQzmEu3vqLC2peP1g6Jv5evdMccu1obQG4hrS2eg4duSJBArC3uTvHoT8rfa3tWoYsid",
  "key26": "4Xm4kaYQ49Zc29UdxjYi4gC6LRV7ELCq9BT8WceQnUd7exL1Rxs5XVE66amTSYEbjXmdehKeYvqQ8BiadsSXrn7X",
  "key27": "c65LnUq3UVdy1CDjYn385LB5igkCUheAiA8gkEBEExKMo9BQCfvCJYCjVDHgrzkNSGLe7kFpETbwjHScKNAeXcD",
  "key28": "i6VBig4o4aYyFBBpcG8iLLDWTpivYCMPRnkUutG1tnNyiBzoDLYMeBrzmp7UhnY4kqPAfrqh3gWU9YRyhY723Qs",
  "key29": "22N5Ys2jRjgXxpbqZFyxrymAoiPccg3t5YLt4DUmB8N9fTWhSrgueteGVJMvTUPrzn6XwJRmoS9DE2rZ5CviPd9Y",
  "key30": "2noaDHx2rS8LyaYBi7RrRSH66u6BW3SErnwa9nRLB4kwNbPPJA2XjCEDW6R6Ys3uVY7NWM4S9McoAKnB3wLKdBHz",
  "key31": "3gFNGsj4X3dbe1wnUGJtmeasACeK7iH6NSibXkXQPrseo9NQ7jMaVXi7YkFHd1ruBZjSoWozCCG1DMtNf56fKeFv",
  "key32": "9K3hyWkPMb4CQsVaULgyNEXsoV9W4VmeW4deRkHYcV9v7mdrkyPVAXEHc3GpehhCRnCqRfnDKGmnCAS1uUCmoHB",
  "key33": "29YgcVhhUUy8F4tfEKZscshVNKgWx8M6czFfjcqsJoZZrmcJ1F3gdy7VWfXd8fjewZmbU9yB21qtV7AZt158xKfK",
  "key34": "4xnHhwWcHTKt72jtetB4gRDrpKocFPWJfszTjEhbBrRH7SoRVAuAuZj4F1bNrskX2paJeimBmZweW75trHhqt16B",
  "key35": "LHkqPjes4svHLaB13gn5UmroyFznscfX6vrfszKJHs4K9P9xKXxvtxqvf9vT9hsC2JePZe1uc7Wi4uRP6g1gws5",
  "key36": "5qEDcNcyZZ8CXV9jPrXEBh7mQ7JDLDDKseAqs9MGYC8fVHZxWoxD7KngbFfJWpg5vJZaLar3fEzaziWd9e4ygqxb",
  "key37": "3HVG9PX1mxHAgxkPbacgFhbbWvCECK1KTyNrSjxCp2grdK9d3zTHNs8oPv1wekVUxcQiG3PLQhUQHZVugVapaCJX",
  "key38": "5c2kHidkCJAvf845T7Vu4uQEAcWMgdvjMMKRKeLJG2Qr3tRyL1dss6AggeGvnKSVtJRxXeyaav5Bn1Yoe7v3xRVK",
  "key39": "4VmdwK8Fzd3mY75nvMLuNKNHNcRR9n3k9gwN1uPfGf5bbwx1TVa1SAWfFH3RPv7Kuif73KibW1CPnWMTJome4kS8",
  "key40": "3GPStxEjdKkmqwpSSNi8bE3rzrwxGBbwW77R3UuDbeqQmiWf5NPaKTp5uk6csRwsFhZZuyiZ9CXf7TpsQn91XHWV"
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
