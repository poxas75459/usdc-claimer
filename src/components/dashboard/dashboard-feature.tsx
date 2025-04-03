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
    "mnLBMWKFdat4nE9NPpXVFGVhHoYpsskNTknL6diZvLxtb7NjhdRSpZUy5w75fT8iPzP8Kr23xYiUf2gBUMr8sKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cMR7QmU2mkufAg33qAbUpYHxHd9ejh1b24UTsupZ9LtpKTZoZCP8EagLLGdyqfcoPwiNdU3pty71ZfPaXNvkVTZ",
  "key1": "52sMo6YVtvCt74ji24xYHme3wosdG7PPN23fimqUtdFZCeywJwCuDNu9YZrV8nnggGqEWzAyUNhxx8us63uoEcdV",
  "key2": "2YZA4N1AJsHJGT38LBNvcdp5LyukZ5QiqPAAs2cig3HtMdxcB3pedcP1PFJqpcPEf8H4s4ugK9n7R8dWVRqBAG3v",
  "key3": "3j73XTmkEQnQvwA1k6TD2HjLsPHqY8nG7sqb75YueENVKkBtGLbXa14eyGsfTuJwmdLmKGb76KMrEPsBrUac2ZPQ",
  "key4": "4jhtECGadsP4vcPPS31nLZ7C8CHrf7XTnSigCYFiy9sX5QCzBM6szPu9AHbxHzfzhtNyMsFe6Rdf9ok9cWeTp1dp",
  "key5": "iqN3s9qqn7HrT8fRTLoUA5KThRcWXhBXEkRi2zAkBygLKXUm29EvtRisZKy4UZA7xzay4NfboVZx9BM3HZzE82A",
  "key6": "42wxxEnHa4hZVqHVbwZTuVf5fSvk4qAdzTGTPfC3iti46TTaLVp1FkGnWf1VdSsuX46TbJbmHGi5P17c7NQUkdV3",
  "key7": "5yzT3uGomqdQwDrnHncvGZPYdxfTd9pJvMAN8mWxiAkg5SgT261iNcVPyXbZY4QhppMvsmuaAv6Y5k1SF3n1XrCv",
  "key8": "5KaxwesVtTkBtCssJpgjLLQEKbeh2wXFovdu8B2xdaJyaWtbKWZ5fNR9CNFsvPHWwKe7FFFZp7S3jWTevmVFwxen",
  "key9": "4jJW7XMnqhGh548geMNzJ4qPtm6296x2zxKX1uM9BcuhF7XEykafDWwx5mTdCFXkpt3yJkfFXknrGTM5dKcWB6zg",
  "key10": "31MKQx92AaEsNzyCPRkfSpzbTtuVZFCxA42fz2XY1av1Hjk9VdtgyLpqMA3LCYmRfTXddhie2pNaXUT8NNocjnTQ",
  "key11": "2L8MFs7AidjEuK8YmpuC9ufJ2kPfr9QnhogXq9jCgiDTVx2xpUoCjDazoBEPtbVuxkXBHpaFdbxN4cNSDRXanHx3",
  "key12": "2PkRDgW6FpMxWFLAL7ELaWUFo95bcQjaazHZqByGhz3EjUV8dRM2Kdrd14gghaUBWzy4ZSiiroKb3oYCDbbLHyXR",
  "key13": "33qXVNVP68cjcJEDYQxmVBEEqopX2CYeUzt9Ki6ydaeuTt1VjFj58jwjZZWb1HEEQ5xo1r3EBND9DuTkmbVHtN7P",
  "key14": "4tv9gPYkJdpDAe3HHmBqS8bgziDmz8YcBwE7MpJ7hAThLe55cLcYwHD6KXQaN61QAcFxATwB3wRaxpAZ6FJksvKt",
  "key15": "Hn83MQFtSnJrzmjxy88fmDsRfttxTpxjpELBffK8uu8SNmkykrvLmiKsUzG9hTAqeZurT34TfwNXW2xVFULjguk",
  "key16": "3kUBQZz4cETxgsnNBMAmsSVnfY8gzrsfH7v66WbZKH6avfgPFEmyjvCRk5aBhg4fnEW82xAPrWpG2gyeStPm48XW",
  "key17": "3EKEcHCJVziQduriHXxjducEvK9ehjpXiQatH1LpLF2qzYge5AMv4XyT1HY6YSwAaKpXogdPHNggm6qamf8CDXQj",
  "key18": "4Sy7ZeGuZfUKmkXWBxXPXi5X8Gh811P7DhLaohWWgUJXdHYXjP5QH7PG5ajCCXDYcCbAp2a9rDzV9DgZ3dEgBqzc",
  "key19": "2YJAF3SRzK9Hh86vw5VwZVSf5HtPhCY42KMHPJAR1Rp63qRx2EfCZGWhapTZhWuB4vDusiNoiLbGPAk68M5g4PEe",
  "key20": "2EgUdusUBkPdhvFKnNW4QwULAtQUKHxZcrNh1BDG69xEs5Q931fizQq8iq7Qpe37tF9beMQY1ZMJN5cirRAEfNWN",
  "key21": "379RJvWTzC9JgoL12eqNaGBL5C5qfjeLi9UGfZUJ5xi5tALugFsmDrYJpT1zrhgYTPqobSuZuEYAUX9wwjqoUyGj",
  "key22": "43Dizhwgd1X8Gn1tTmFVeAEEtQDcWjsHphckr7YN2Li1eX6Qm9DpETATX1MS5FFxT443zqcZw2Z7PzVxsCAhVDCx",
  "key23": "22y7WzYz6XeNXd8hPAa6mVjRmcVvwfHzHdWWhDho7Qgr3oD43RFbvpTYYaHoe7XN2pkPQW8vsLJmcgGgV4WvBcAt",
  "key24": "2G6VGCTGme946GrnVRYxNGmckNF6dM4vAKLn8ApMQtKZajtb4VnXsbK5XLY4Vj9pydu2R7wei629GiDsK7Bt5RXL",
  "key25": "4i7Hhg818BYVG4dvm69dvfp7X8hBKAuqrRmevxmCYnFMj1E36QTLcxjquQis6S3hgEQTZKa1zQ3ujjWEXVaRaJkB",
  "key26": "3LapZM1kvg6fZn7a41aXskYBk9Udb3CJfWNwdmBy3iQRZgCAfdBUfKHMqeJvd5k83ShkNi5zUrGqAtcqXEPec5zE",
  "key27": "5EC7XSe6D6EzSHZaF7G5aBk3YxruUKBT7P3ouvtD2UoB8f3pZZ3sFw67HqBxBtD6EVbkaooUNCcULf8z9Uo5YJa",
  "key28": "3oGPPm7jWv6Jrzd6f2wvW2qfgt4hgWE2AxcT8NnETGDfHvP16vnWvnyzQksS6chTqzcZJCmG2keDKAxpubz7zZQJ"
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
