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
    "4ZESnGgpe9DpH4aeGVqufqDqGzzouZNFkLeJeTS4ExtGPnaQaqPZo2rwopkUNR3UerY8Yv7eGgsCaqPgK8JKbqJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ef2HQD2wm5AKnStjD8eUZDkFYjvcnxQXz7fRUZcS9okis184cbFKa1BHFYq4D4RGk9HdoEnfLMU93a9BETEwtZv",
  "key1": "4wddoYGBjfjZ4omeQm1TQcXhxXRBvH7Jb3vjzJXULwss2zHA7MyWWZLFzDWzRDNm5z5Po4vbJ3vgQ3JCPDtunz3D",
  "key2": "55etFYDGTonVegzLGD296gZemKxKsxiGDiki5PYWR7iJXhSCAWXs8fGKMGscMM3UA54bSHK82s4UyMGkEAuHpsUg",
  "key3": "3cW2omdfDmeM5ni228gcnv7XdZY6zwRQpV293sbQER1Dq3TsLTMBPg1advp47pKhF7qj87GdakNmRF2uP7WXMri4",
  "key4": "QT6gDvuKquRjPa6oC8oEzsA19X1QVMi7Nqqy6CGr41RRmxY8NkoYdNgtga9xsSacKFyFBZ66yjQc1Sx2e7RoeT2",
  "key5": "itvCsY37gJZM65ifcyrKrj4w73k8czDCTpm3zwx16Uvp3Z6w3ftco56tyJhomemPuBCAz5jfbbFef3erKTmvcLA",
  "key6": "3J8bgjm7Xq8k3nKPT9bfyfJmaGG8GZpQL5ZGhCs7xEJpzN9QCdth4Ad7F49Aau3xL5ccLwbupDn6q39eMh87Zzdp",
  "key7": "24vuNnyJTxoNrjd5xLkVHbmKNHVTrBDwGMjDfMZJYjJU7DtAtF8FokhDKhWe4ytBcY2ZLCosHeUPdxQiKvrhjtTd",
  "key8": "5nMjGUP1XSxfWUxcyVMWJtH1Ek1b35G85b9T3f7NtgN3qTp8qyRZpkZs44eLHA9bxeCRonfPsp7jV51GCKz3mbEd",
  "key9": "2tTmTJPxW3QPqeMZCA2AXAXS9fGCWo2JYNWMoSBU9esLycR3hUe4gXmWZpLxH11EmJhR1ZDvn8nPByZvW7FiuXFi",
  "key10": "a995SrbY6zhXrAuYHfWidEmKon3MYzKyi8nNexStBLSnhUsu2h5MiYeenZ7KEkFFtnJkzhrcfPTB5HbJ487nVKd",
  "key11": "2dCBQrej277ZEd3SfYM4Y37i4M7zaBXVw4diGD9x8tnpQVwDTFwZCBUJuzSEKeB3Ubtt3pivinAfw1913r3npNKP",
  "key12": "CnicoQm5bByW9bhhQ1mdAc3rHz9b4JvUMJkAHrqE5BChKoGx219oxb9EqJmfVtwHWi5h3uBazkMkdemh4p8YrM5",
  "key13": "551yybueXMFf1i5igAiJ7iSdUJfpPPTZDKPWMHSWdU3ZvCvsEt8cD4X62xjGarQUvi7xdwHD2ezTzeK2nBid2rPE",
  "key14": "66GTfD8SoeMHXhZ4QpB4Kc7bZZhAFRepcxXVe8qqFY2HejnU2QCLuJc5kdU7rEhEwgb73BxV8PBmWiEmXBA93H36",
  "key15": "5xHZf55HKxc31fJ146it46WjGxrpbzTK32m5thqouowLYXCrqQ2XU1SZFQQNX2i4W4tCvW9nBce9216QtYe5RiC8",
  "key16": "592K5Pq8AJHTvFmn8kBTsZhCtkUbrcxqgAiHK779vPwjUMzteeyKWQV5EXVNDbHLGVFaLeCPh1dCZm2ZeMWHibJ3",
  "key17": "bQfYXwVhDTXdhhqCt83425GoBnR6CXXWxEaUBv4nJm9Mbz1B68C9zkWWRtDb4DQh8DVpMimqeGy89WMBzmRisjg",
  "key18": "5vNqEXq9tcdDmB6ttHNQ9GTJkqYQ195KvQwGPkoefpt1yoFx9VvNBSschzrHVQ2oo6N57fiZLfdNFCMRBbepcEtb",
  "key19": "5cY3ZLNfxxu35K369XfH5iKT1TcdwhwvbCrnbfWzmbzbCFpHpoPBVyjL7H36LY3EbH9qhDhpU2E4v2tjQSzErLfc",
  "key20": "3Y4Vp7LsrFpp3TJYq5vwZKE8qAyu9BNQKetc9EqokdTYfNhCHNXVw3qiwRc6NBwQUqzcxbik3PmjVZRE2cFt852S",
  "key21": "5N9stmRWfnqE3ECRfoP378iFSV5opRi83ywmq7kDY4JGrC63gvsdAyqSfVfSjndGAhBfkzigLZy2JEr49myAmVzB",
  "key22": "5gzjSRNf6QT3eLHqtcHbMnb17QEgwnghqNzeuru3hy7vvD32GNyF1MEyS8igrC7UbwUPTD6NcwQbUTmL8AK2Yp5t",
  "key23": "5dabKyAjbTzGCXJeBvTdqkMswZMJqzUKCi1u2DFRJDxdS6k9zPkWm87sbDiJvUoM7zS5eGgvSB9PTRYKxWRwoLwd",
  "key24": "32hVeN3DGGfbP2Cz3ZAZYs5T8Ke4kehgqShcN1ZNyAnusixjaFq2v3pJEiQLTuGKCpN4Rwgs7USX1GFTGzhPhraT",
  "key25": "3yWbrzHepfN8bJqpAub5iU5ZeHccvugY3tx3YoVsFUcLFZfeotPVNNZKouW8hR4Cyi5FERc1LnDt9PwAgZfewHwn",
  "key26": "5hxnZD5zFkgprpFC6tBUKwxvoUxcRdpvducqS1fFB6gmf14gd7r5mmjLakhKbpR8GH6Fq1njqeJiF2Poswubsrqb",
  "key27": "4UFqCifLcoAYYcBCcJVj2YBmr4cf61i3ZsVnbGiD61Q254TBBMbXwj118HSchSJL1WDmToj6SNEFuHoVodF3yEkz",
  "key28": "3tkWpbQRFviRjCXjsQ6dY1bJ6kWWW15bKPoZSRu2f2QeSLkAwwGzziDLqzGHRhJsoQvad3U8RRkPfXyi99KA22V2",
  "key29": "41DBwzM1PRr8EPppVUCkkiyNSPPGmBcRCf5VCpeEoGtYEsSMEXhenizx54EFEyRepTXb6k8UvwbWUh7YiN5WV5KL",
  "key30": "41smA3wKqN8piXxj8sBrkjMYc8AsZjPV9tAF96FDfUvn8TfGNwc5cXh9BLg6JKrsrkSmyfQA48ULh9H7zCxSk6Cv",
  "key31": "51M8nJHfFKPe7HJkbp8ttZvPud7o3fwN6RA7s35k6MiPBTetww3kcY7p9F1phsb6o8BMXAqHqLKKYFETsULqnmyJ",
  "key32": "3h36iPvPwzd1PTWAcq65ytvHr5NJnKdj53rgjGvx9Evkjc68fU6Gizpjo8Mjv9aZ6e6xzMJLK334LegSU6Kg3Vgu",
  "key33": "mKgPxpuznjuPnVt6Je5ixe6Twvn4pisW1oJXNDer8ph72gswiypiTJX85eFvnnDHCLabaDgbp6dw1MKbDTHgoiD"
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
