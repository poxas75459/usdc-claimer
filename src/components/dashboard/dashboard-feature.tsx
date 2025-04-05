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
    "5TtbnjgoB5ZTyD8sPF9ojJ9YTsSKH3JH3WSpTit7FLRZQx2cSzuwiXRJKNMMaB9yfxxbG8NNMAeMoKLxXkbqrEai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jx8kCGhGrw9yHdmoc4r9weeCeR1LwG51PQ2W9aPhwA4LswTD13jFPaYuh8BJNXJHuo4veVDaWZsfevnkbiRUEC4",
  "key1": "2HVWs6eHLaF3MkXNa5719pZroAbJYiHujpWFvBHHEgLFGwDiSRUQF4rnB3XMYqkFink7bTUHdjXbPRmft7d5ypWq",
  "key2": "32Ap98eaKvW7dytsEAoBknJMSkboscfEpJfVGQVJrqD9vZnevio2m78gKPCpACbx6BAvmKPCXCVD1MHhBt7VjBUy",
  "key3": "5JpL4XevZKg3VN7iKUQXyn6KPammR3abhNF9wixmQvF7NJnC2pXYafmS1josuUDsv8zWLBoyic75j9C3rmze9vMk",
  "key4": "5HjdzMbVwbS3mcz9u2H5YBFgoT2WJMxut95vXdHKMjH9V849cDqYms5geK2SsXWUHHiVt12gxW3UntNWhzgiC9rc",
  "key5": "LWfkastqaV1XYBr8t4doEzsrnncv8BFz2hqdfCUcdBaYMV9wZtarYBR3GGnufHxngcUDGsx3BAV39GuKDiiSn3P",
  "key6": "3izycTxunM32cqYuQqb5gtALw1V5dVRziXxfFJFWuh19y2AfvJyFfztna9uftyX2EGRqPNvLfbKpqDNBJYSEAT3S",
  "key7": "2DohDCZeCweFc3mudUNef1NYFvfW49QDzxiRJqKVtU29cK52SHkUNLM8xQfmhRjgSqke9p6zradeyRUads8oDG6k",
  "key8": "2gRWC8Bcj5G98ED2SBtwHgNoCwreqqnZaGbmqeiVZ7xxYoFrY37x5SKKcKZsPqMuwmVpqurZEFi2R6oZDDcQvbLN",
  "key9": "UjLdaYmFAyQbENHr9w15h3hDicxKZxVdwQytRnHL2o1Ukm6FiyMkh39FJWMb769fBUAAUNuXpuEqzJKDECxpUyR",
  "key10": "3zJRpgGwGGdJX6jWVji1e2eKGRfk5iaA4B3qHHbK5rHYr5h8UcEhVWYqmUjMke1fyoxhzd1gbLGgXCYu9xNgvDNB",
  "key11": "358hH7VsphCghqbqzee2sunbxeSkj1rLz7FUufAwgD4LqY6fQ2h4FHG25g8Ukkoh3f4k83C2EkJQnn7dbCinfSop",
  "key12": "43Z6HVgTA1VucAmqaF25RWAUqFkgMQMFWRaHmWyvmE1MUqiD5VKhb16znTnSXa5WrtUxs88BTDZXJGm58w5BWCWK",
  "key13": "5FLjeGhvm2A1C6v9sNNTudUQs6rzQgNCTP1eJYGpuNvosutim2iJt2kyGTf8bN9HNmXQSRvgu95NYxcBhQnEN65q",
  "key14": "4zVZY8MN1ZbinTt1vbWFNQUqAAjgxwDBUWJBpP3M1US4AUyKj8j6Nt2HxFaKkCyk4Ze52Lej5XkRSogL9328r95Y",
  "key15": "4nmTEppmyEjiw4H4sFquJ8ayF1Gyd6f63kT7bkZb3NeV3BLr8csx76YxhANo7gM85XodxCuUwsJUg4bs3DJP7HbG",
  "key16": "43eEgFSRDYExL9SEQRPH5uKbmBrFgJyWtB7i6BUkgVZdFe718xV7F8fPK3zgdvdadTQvWPsdpVdye2eGrhNgibQM",
  "key17": "56XGasqXKeUCaXDTtVNcHqc4y7KLF7tCLG8DmWtjmZRtDURCyV9LpEjjEZifSudTwpECxYzcwFkUs112FEhH6axq",
  "key18": "5WqmEXYvnHHjq7a2hhGpHaqPX6tAAfYyaRNLMkPrzcrzquvzR7E6tPyFpgNK9YkfPP3gGfEcP4MQkSRDYRgyfgED",
  "key19": "4weiyq8MnBRwYPf33RwXhoHpuWgn2nShj2VPWBJqABrQ2YCJZ7PoqMHWpgnwUntVqGeSgqUCwx7j4LkmbW3dfxqo",
  "key20": "5FkdZbLkjf8ShZpkjgdhdwH3yxZcb6jB9MbtSTJmxSkyWZ4TCKanRxDbtpFKCnk8ghLVUcY8NWBJqs12fu1XtpK2",
  "key21": "5Uk2SaK52wh2cqfh2HJYFSF5jtwPyCJeVADKywnkFpTbb5XsHVKehH343F5UDMYN1U7qLzcan47mmMoDNVUsEvXc",
  "key22": "PFNwxNU7h2VWEntUaEChvsWAmGLyyhUMPWBAbbk7BxnKxg4hQBS9VK9ycooLcJnf5BpAiDhFcqfWLxL1UW5z2r1",
  "key23": "rw8UmGJPWkGAL6GU5tGmSANRbnrDMYxzDEs2paZLhu5FKkjrKEGvhQWV5yPPCdiyKpPB4bVayYb6U8pmpUzEu7o",
  "key24": "oYEkKqAtGr2n57jqKoDBNRmjGqg57EiqAi28HoyfarN57Y6TZ3o5me4CPLdyM2BBkERQbtpk8H9k8iQXn2Lqqm5",
  "key25": "3Hb6mttWRguik8LWMs5rQeZ8hkRvHCaPbVnBfoCAQVhWz6t3684WZTtktKsNNwvqDeVPupBQXQkJTZCReh41tHco",
  "key26": "3odowJj8csAjhxigzmBnt4dpoPa5RbhheqCbHZeAtkvhiDW7U4eh63EAHMNd7peGbEDDS1gwn7m2UPTFDvXD13Z2",
  "key27": "3kMXwaUZ5AY2MjCEwubZw8FsbJZeu3BRZbBcRQzXQqLiYfw1riCHxma4diHjC8oCnVttNyt5A62zQMpNP4GmXJQT",
  "key28": "38N6aBJGfHkaRC2PN5TZ5KpBVthTR8UmMFFfmfguBAyE6LHDKSw2Y1XHvWxJ4KaxxUdKp41dHiwptBXu6g2XHR4B",
  "key29": "3iK5FwtWRdn38QNdGzrWKyib5YnmNJxaaXMosyBFMmn51K25F7E7nd7zTpjMySmbZn3W2qQrcmthRfXCqeGSBhJs",
  "key30": "41XP5pPUudcgphMye9pjnPDCgrU7Au2pwnRjsypvuvEhXtQ1PdmiE6Nfhz8LVUuN8NqNji6uEfDUwkY1RHVzXUTU",
  "key31": "5ZpGuAC2987rAa3RhP6tAWbQZnUHTAhfLE5t8FceZFMndmVMS1gqW6RntuCGLiKskKFeMMq3Z14AhUm8MedyDwqL",
  "key32": "yZfmRSCbCBL6hG2mxQSh38d3QLw8zccce5kGVvWJjaydQbCy6y5xwT7wNTcrHhtnrVfnkaA9uAJYgCCTZbFEaQ3"
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
