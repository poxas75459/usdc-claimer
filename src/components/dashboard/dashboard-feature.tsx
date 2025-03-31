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
    "5waqzGALwqCRpR7EyZ3J2zwxzxTEPqxGCFL8YKM4ThgSDD8z434B9DWevZynwk7JuxwBySVH3aSW79CXvFFKihZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eCUyRTboV5tWqGYE4cF4F3edk6qqKMdPHc7joJakbNEtDAuTRHSLTeGrzbBD5ezVBom15YEq92ZATik34juo3bu",
  "key1": "33Q7qbFM3DW4jnAgLoL8NkEVDCyUTpu5n4Mq4HtUScvqJzGM7M6Lun5ZChfRzZrCLz4kjTcLDpphbVusdhiBD6c7",
  "key2": "SvcuLSmn1RSSqN4gJ6mJheDn6FZJoguucgA5YRGm3pkKxn9ecRfEn8JLkNehS4qZRYRaBzohm4wMTpX2bHyT311",
  "key3": "2V7gXGusHD2Lk4mvTGg6hqw9pwYrvQY9qDbMbMfAsLhMJYudMGYGtFeTeSYb6AUFsRFCBaBbRjd1vqV9PyCrFudP",
  "key4": "3TZyYLVy9Ln43tTtMMhXmbM1F9mmFyrfRaUbCZqwjkmwFM5qdaqoey3b97fuD4dYwWiD24VCyh9sdtfQx4krJEvP",
  "key5": "5hhgXnG7BNP5bfeXdWGW9yF71i8TwBZdehktfX1idmzxKcYp9AE8eSkKiPAuXrURzqqiDLpyrN2Tkuxn9Wgj6NBY",
  "key6": "3tuA1AJ4QRyWc43Gaw4jFo45wJA1shFTbvG9fuoSxpSrALQDki5AQnvEF3nezMoKeYeAj1XrgYPHchwanKU94EwQ",
  "key7": "5FcrcbWpmt4g46SR91VC8LZFYTFoDYSmM1KU8EPwCGnD8whq2J4S4owV7aaJGgTGH1rR7YRvewcenXagR1Buv88M",
  "key8": "5tsbhmFx6NEhE4dp68UAL19djwWWxXR4mJ7BRHHyyaNp5q9vPPbd5ewrwwQBnegMqoUSXz8T8RXgRBxaEWNhN52W",
  "key9": "4SLVvqYxxSwg1DgNEYH3izwLXJdPqrtRjw2VLFa3w8daQ5Egq3eydQkCuiwwsSEDWaE7FCByMVJ24rVpBuQjiCn",
  "key10": "5AAWqvETMDzUnQTfKfSCFMMVoVd1UyNRZH24kecDvFGenGdFpyLzJkT8GXVj2Zx6fwhEdrGYt7uKasTa8udU7NA3",
  "key11": "2Qm2qfs9Rw59QDYyqPpsnuxzeD7ewLqUQeoykc947puwrDRn865HQkDmgCrKwGWcCJ6nfpsah7NQXpRVTdN8mJRc",
  "key12": "2kiEHPUqRX1YUDJ3e3vVwW4wmpJdU9xPiK58yH5CUYK3wQpR5gk74KW27iiSNbcBRGxn1tzStvRRhChL2idxSGDt",
  "key13": "5D5mux7KoYvPEcGHVQefr2dM1AeYVBHM6Rg3MAhJh4unnPuadE5vVtUWVthTsBRpKbuV1xELVUvwTRcvYDxcu8ch",
  "key14": "3aEbPLJcrFWBWQddoQCPRG5mwjLb3Z6tswVe2JFEB75RDLonCFJ9Qdne3iiKjETujZyuPfE7GPtE6rN6dzX9z5cL",
  "key15": "45UhQBvWeKLBhwcMPwR9zWEkPTyXno7bNcHydGMmsgCAprm78TVHNVnWqmFVQVexYEGe9kmFuYnpqQKFiHaD2TDY",
  "key16": "627gYyb1mJBYxGUsDcWBdWwmhachh6MWCCwzLPGyPY8QdPjN8AAJChCBeyKG7rpZvTQM6tLsYcPMBLUxrMe8Vu2",
  "key17": "3XXGnYiEh8qGN37dtqxbzS4GnfKuV9PRhURrSbK2U6oiwu16d2yYBSZ7xb4ZKC3qdFVWGr7Bp714vZgRJRPjyygb",
  "key18": "4LpkXRJupEs6EvCUPFXdDveLED5kzRkiZKQWjjzHuxZVageRaQoX6rBGYysWQjcTMA8sPh1CfRvgkYeZ1rmmrhrm",
  "key19": "JQ5RZ1p5nBdqooYDUJES8FykhGquWN8nBuSUoJhvxLRiHrFoPGSeuk8Pvc1kvA3oUS1hGeh32qsPt2YHcRrjr6a",
  "key20": "3ECd58pR3NcCwoi1W5yX9Ks9uTu1cu2TPwj8zvXL9sfbaEngKhKgk9znsdMrYFPHw38q3ojHUB5pwZ7w3LiHF8jh",
  "key21": "s3XnNCbp2N1aReYQEhUApAqsEC58LkMq5RdG7sPnCGHnuubd9gfkrgAcueasXsyiumShoBociyv251qYWurcfMB",
  "key22": "5xnhZLqM1URhm5bzySg7ewc9ragqQcAK15m6Vy3muep6fHnnv8rGmKnPEDhyQru2HDivUDUCrzVgTmt8TKHEwNay",
  "key23": "Qxxaj42yEoQ4QSUNwQvSC1K49aqmviBcUTWrStB4udPJ8fTmUHR7cQFayFpBT9YZ2SJ56mE7FkcDA4R9y2en8yy",
  "key24": "3fwTpSMzQBVzz4wRwNXKQYrMriNRJaAoezBtdQXi8SweRcAAjUg6DrroBuUm7gBP9V1w1fo67JsGzPbu1j9xvUu7",
  "key25": "4ZzNXo65F77ZqFzjoVqDWYmJrBKFFNXSHgxQhuyKNEcFjwgWZTay5WjQA27BnPMR7uohepKfBq1xJC9aajjmsvF6",
  "key26": "5oJWBWz5ZWpTQMvAsYdKntD5DDfXh1iqXn6ydR5RtwtTqqYX46W9SGk3SaQ5WiwLuB6C9khWVjmfJWmeQgDht6pm"
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
