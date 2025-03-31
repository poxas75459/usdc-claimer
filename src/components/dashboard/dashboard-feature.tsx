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
    "3Uhi6TKvMSyLXwdx7TCGxAieAJknyG4zjCGDHXwhohsJrpMFfcJfXbFPYrnh47By4VnmUwt7oDvAPaBTfrtyRCW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pi8Aw7qKnoJ9HEPAoxMUC68MVTDZAYtdt7q9CDuBtNmrL7s8w2Y3SDiFrgSBHqY9VXsmQbTFAt7MaM18FhPEhrH",
  "key1": "DtU6LfbqRrHKVUP2Bkf9z9iS15pxAt6iHiCvXqveJsSp55CnFacZmzL1NjGJdYDJrWgBdL2s6jyCE6X6mKopjvg",
  "key2": "dffMbK1nDYQxWsn9KTrAFSXuuXDcASs8VEgav3UaaqnryT9sijyA17QAV3J9cjRGnCsUXCuA4u457hz3ut6iPhE",
  "key3": "5MBMRLvyDibDtGAau7jjfvhTnZ5k3Wa761DeeZkuZDSr2iv3LuQDVU6S3Dmj6yddEBDuvs7tPiyL3JCJ6SE4iJFV",
  "key4": "4uRL28z2xDXQinLmbtyymrQDEiwNJNcQUK4fwSzWnaSW3DPbiF2SQU7Jj2mXHsgYEqSMB8VRCvmkRQXhBxp6AkFE",
  "key5": "NEBcUZ4wwFurGTV63x75Be5t8Lpgb4VE4Hevchqscn8n5uRSaGvZPTj74fCR1RGn6pzmFMrC135tGNg5JPHpHaz",
  "key6": "5syKaFTECVkmyvoNmRmZMVVdzxq4na8XKEv8XyPyjb46KX6e1Z8eCNyHZEHA68nuoNSyyNRx7Dk8UtYSPUGTFYYx",
  "key7": "3ojeVjEyofm7GEKymA77JocR6SS1GztA3Yy9KkLbdvMCgKyQdZRvq7xYuSV4hds7cS272ow7HcSCayc3ibq13L7V",
  "key8": "2JLswRwVgpqAyP5E9GqSBNrJSRfC4PcsmTwkncSfpPqyQxxjJyJYyKjtTGmNArCJ4tKSqqvTRqdPdJYpX5CYoYkB",
  "key9": "5FZ1fd8DSzhxP9T54wnkCbrW47hFDHMD1UF5dHwmnNMm7HB7jDF4FHqgFZF8eMJzLJy9fxEXmPL8rJvMUo9djnRe",
  "key10": "4SZhyeXmqj26jxFPm4AhLeEZZxypVSrvD1gtviVP94g6fuvjFjFxFzQsSivHzTKE2effgaeAA7in4gogrKWssZzm",
  "key11": "tVdvENP1XcKTFmox6A44Wh9qkfLEgChrXXBDqdBfX3QzBdbm1ndPsPXxJ2u53sSovfBBH9ofoMLeGPeY25EzpCT",
  "key12": "4NF1ajhPjDVidQ91ZP3tGUJLcEoid3q6hWK5cAj7snvtWwcF4mEck2QsRqbKQZcx3Zhcfa65HaXo49SGv9GqVSE3",
  "key13": "4X6vtshQDvSGfEk7XeDsfDQ9gYKxgthWedSoz5iTBdkDy68ZPKxWsgrNYJQC3B64YAPSLpzCpH1RfMfmDBVVNCsX",
  "key14": "4fJ5wYBJvFxe9jZ5xFuSMcQ6rWHTeD4Uyrnnkps1YEfTJFT9PEVQxuXsaXXPtxwv9SyFSnekmMwETDqbFdcVYNqZ",
  "key15": "4o7oWeXkim4stXJWKCjpjvUBGuajUHCf1A94qDa1inggy6x8TY5Mwx1BYFaYLGDjGT4ziNh7CPkS2FUV2P51zF2N",
  "key16": "2hc55VUQcB9a3BbiSLKwVmVStBttshZDcoyGKoDsKiv8eGdQtCcV2SWdT8pB4U1bxVRM1w9mZCssHQncu7ZF65ZB",
  "key17": "4DB7gxPZfViP24EJ5o31PVAe8nQSPb4qfRo682Xzhktnic71ZuFSorwDJQ1JsekNnpMGhvgFPqeRULxPhpTSGqYs",
  "key18": "4YzjdwGE1oCQ5rwXYTNnrg76VbNfd83JFKRwGVyFxxHG8xHsrgHYSQuqTrUCoD633uTMbEcSmK7W35ZyCCsHLxT2",
  "key19": "66Pkr37WAcyXrUQFU4k2kpC73ciTGRHy43JE8JLW3GrU8Z5nUuUnJp4HEgVb8b9q6BrKwHpLpXx2jXN9MzsgsnPw",
  "key20": "3XK3gHwpUJpZr6nLMYnFoTw4tTYaB9ySHS8KoLsoaYe3uLWvkvPCXutDk1HbUweTaEJcy6j4j3udRaYpPB5RR6QH",
  "key21": "4YeXDWkBUkZU51vQ3prRTQnLv8TajzW5s726ae2fBGDJhBjjW5QVBvRdPDr433hTZDyJbMKMaaFgYLsPh1Vhhnj7",
  "key22": "jEHSgL6yQgyyDjEyYfZmWRaWM9RQTUCpXbZ8MAQTFNWS7N65UwgBFbDPrdVNhegRPBGBopevzabxQxoUKcbHkfr",
  "key23": "4vmHvgfD5r6SeN77apRBU776GJ5vncJx1wiEuEQV6ZBcucTeM5MPb3Vs9mLQnjrauMMmKAK1Zta2qMbapJk1Jdua",
  "key24": "2qmxZzwxmiz2HfynVnWWazFk2hXTPEDRcR5a718zHuhjWYMmVRn4E3K1VxRBfasUirrLJeKChy9zj6jXSQtQLmEe",
  "key25": "2RWSG62P96QVNaPHbzSiEUpSUgJqBV3PV14Y6Nzzo1iqwpq8XZqLtz59nkiSpmGgK757vdufSWSsRNzCYUT3zX2U",
  "key26": "2pbzZCxnxw8qXrqYP52uRVRLhdJv1yKoZo3FAY5Rppv2E1MguTqVVS2tHNMkzMtVvEwkzEKxPELeiErYqpBUx89b",
  "key27": "4MWshv5adhcji8EXavd2vA7TuzVNobXb97TPFKhDVVMu44kf1PHXnubSoSrriHGHfGGgmh2fEkk4dXJng5mhJLUc",
  "key28": "4WVyk262vVQeQPR3pDXTVmRZZa3peSt93mUUYdiufiMJiuV492UpiZaYn9PrVYJsV3w3J7aQLvia7TJV6oqSx8H6"
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
