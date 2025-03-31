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
    "4fonvmgbov7dwPvAP5ZZKGna5dJWC5pcLBTn8wN6otV1pW6B1Ldf2sehKMn94zanvDinnQZYyCWBx8Npp7v4RJzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DreJxvZW5gKosjyfR9ofbANn2GNqcqL1pybsTu23PqnAFYiWnZpFiMyj3DMUgwXxTBaMtZMngPeUWYa6rnoWdyH",
  "key1": "3HXzTceGABiZw9xzcbRg3wuJj4ZXFkDy2Qzn2FGXUBUomiaX5c2d92EH5w3X56vqfSqN2fU2m2quPPofp8fpJ39H",
  "key2": "aJpbcnt6vm5Siv6J18a8XZ8KXEfFVffaoA5cC4RSZbYD8xfo8R8gvfb7JzsrgNKEdgDWLByetMJjord56h9Y24T",
  "key3": "3Tk12UbQV4u8Wr7CzXbVFfXTqZibEAP84QTvUA7T2GhFzJQwZSEKpTtW5en4es6bAdUSxBxj3epQdkiguJVn2xCW",
  "key4": "4HARpkUV8ZaGEVH2sWPedCTHhyT63WsXEWL3N2KSNdRNtu1QAKz5vG5vCdJqkez5hjp4YqzqsTHhhApzmFfCooZo",
  "key5": "4tWS4HL6tbwUWyZEddrpzotmMMzoa3fMuaTfksLqV6X8o5U8BT719vm66UpwA3MG5G6ubgrqFKfqXSaMKjGu32DZ",
  "key6": "3z4vNPJxqpp7rR2Z75Gt7jGCtbFrvbtPpadHrgnMKXWbcUoypxWHXrJhT2JsJuC74UQYykLBSmWBbjXEF1wLTzSu",
  "key7": "2ossnLLsnqhDypnShjXqf6NLGz3TfNgzyBxum2cc3Vy2t7C9sfv9y5jV8DDFt3k3xrQi4D7XEvpsywLJPRJvJgfo",
  "key8": "Fiu2JqJa4qUyu2F4jr24NZ3hcjbUrRyFwUhieJcfeEgbGYhVN5Kh5ywZj3p11Uwvvr4p6oquZ97B9czggxYT9Lk",
  "key9": "3ngw3uV7Dsfq97HEqpbYyq1KfgEX2YPeSpCCwnRLShc6n4BfyCqpDzz2gwioHaCnGNxQ1dTcnjRJTaRKw72ybDGr",
  "key10": "4CinzXfEZe1VA54KHAiSX5N88XcrR45KakpJy862YoWY69NXTkZPha6nHAiR5mZ5sPKJR7B9oDAArbVpS4EmvxiN",
  "key11": "2uZwFwABGKk6cyZfTKVP98uR3RkgNCzXDRUnN2drLJgvNYroaAsmV1KBaLeo9CBXVhgn1T6otktDqSWhCApRoyUE",
  "key12": "5LwszQDmfwqhbwiSiHGgNAP86SBMP9nnoPHQUshmquEwHFd76aHknrAS4TQCQ4x5N2mJzgnD18E6GGBB4eXyYAyM",
  "key13": "2U187EGvT829ow3JkikJy8JUDZXjyaPXnRWoYnmVp3kEdpiwJEgC59oNejSKzS6eP9swYrbh9dD5o5pdVGU26PfU",
  "key14": "3bvNnDUeuLKJMLkpGC9BFcVfN4oTBfLzDWNFiA4wZ4acmSuiMYGdUcMykiRao2FEiZzEzox5v44H5DeewpnyGTrv",
  "key15": "ZqYrTzfJN6RR4UB3n7dQ8gZG7FdRpErfxW1ek1AsTJSx1q4YSbCGaBdgxUkNzZk5NoNuRzACKfQkP9TPHBpQjFu",
  "key16": "3Q2J1nBUDzzgDAD27pKyjosQbMR8X2ZDqm9LhSvWuYY97p5zN88j8Mxx28xfB3m4EnPFi4aLSkUzDfijfcJkNuCo",
  "key17": "2aGrsGirEuTQAiLuhNC51FKNUaWpXpKW2U3rPssbujYZzKJZQ6tQfWZZL66VRiHPgAGwjNZfy9463f7ZugAvEXw4",
  "key18": "2M48hmM48k2Hqd3KHGsD5kYZtzzjDLR7EjuNrBnPVNu33iJjMp33YfF1nB3JHQQLsTFZQZjx3sFvmoR6RtBabZsG",
  "key19": "2C8D9S4q7HvtSQFwmQtZqsVquQJLekcNvrE1rnyBcLDqvvnhGjNs2iDyujoYJcpUV7E8pCpdWeab8DfnhBmH1tjo",
  "key20": "5n4B5KunyeJmYUixXCHMRsZMxy15jyVWavhMKcFEqgemvgcAUKLk6ECReA7zFrK6MXrkK7DesWJ6PVcicvoN6dKy",
  "key21": "3nhovwzY8bY7ahY6CskyD1e9skYRXX5noYE9bKQb8gcChwVjJrj2h8nMpxk6XFWtPaq52jBDg7vDyEydug51ErXv",
  "key22": "3DVr2DqpNJNyUJePfpGVQLX1RAJq548LY6V16U5dwr8VNhFexHNdRhbBUySbLDiZpdcjWQi3pFG8jc7EKdMJe8QJ",
  "key23": "2rLXJ45TDcut6BJDtfFrFwPpSBrc3dPCVHCKJony9DMwiY1cJGTRn6HeKKtiEBfo1nrGU4nNMNdYQKEVNDTvf3ZL",
  "key24": "AP3Pw5nUuTC9wdnRdDuCuCpSKothUyMQcueSjyTdrKxTaN16A4ti4YD2zqZhinuUnGZeGByDGMRLN5rxQKdg8m1",
  "key25": "7FdNoY27mcgWYyjZwSVgSQPaURsERhBGtheYGv7ANXPDeAmKCFzFwBBYTqXcij75zvESQqR8JE8m3jReUPdzr7t",
  "key26": "5m2yxQNsDzLz9DmeEhMrJ5yGEivuv5GvHt9KdbktjrxZ3Ga5qWQcJAGezYW5ASRNePAQZ7Mb2tigPJGfimSbDoC7",
  "key27": "2pLXwW2WjEFZLonGjRovPTrPeSrVqtxuY5puHMY4e4emTgNsjFqLaP9UFXWYGEyAmDFQ5yyws3jYGqZ7Q7Ssvs1d",
  "key28": "3ApZ9Uj4S1AESA6YuMVbrnxZh5BegpM2BzSi7wea8Gjjphk66s7zSsDJV7UyXbYuCMs9CwpmzJfYgq7CNDCrimzU",
  "key29": "2JGato6mrUmD4RDLkwrANusdRrJVPNp3G1UFmXz12hFuiKou1MaumeUVhEq5MKhFCWpADar4kJPgRBD7psurkAzw",
  "key30": "4cxDyMyPxKpj7Tb5SqD3WFDba8FH5wgQQk66wNj4yYr7CNkF4JXJZBWisvrJNX7tTEorJpbs7jFzNWLUbsP3bhNH",
  "key31": "5EAorCuzwPNxFDntuWR3ikVLfUHZvQS6gtboG2ArQzCBs5sEH9Uhi1goZeKsetXZdmvidM9w8t7iw3Zb1nqAs6vx",
  "key32": "5eGX4CBEwDd78YhUWrj1EGif7GWps3eDNfuV2koKRazUsoTzRYAhqaVMhBcNYwbVUi2PVg9CSyyDqeM4aZfEGcS",
  "key33": "3Ds1oWez6HiQ9oYHc5AKWYmSVqKukzX6bqHHcLS46uMpYbkKebTzYAuwipaZG8n4RtPaiEXDhcE1jqStN8gRDDQV",
  "key34": "TfGY4bw3u2uipf8rkcsvDSHUddoetAF6HMJtYMEBJpKBeKREq8rTecDdsjbsSrp4xyDaWEr7zdRiG6iPdCVWizN",
  "key35": "4XmXiGfc4cJyTRKvYxRPc3RFpeZhEe9R2euWhSYB2T7mWtzmoCDjerJebBbR23bHmDHh2V6JLYwmGioJ5EtTxV6Z"
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
