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
    "3zxSpNMMGWknzLpWg3Q52AT6eJWCaktE1SQUeD6ihBUPTv6bmxho6FMHFA9xLkDBhWv6hv8z5aya6jbsf94t4hMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPGUnZh5iu3xsDd46krUtqcMmQ4nhJxzpgWM8nv2z7AqN1wk41suRaEao2DG1SipArDojEAujrbZe7sxngzozMK",
  "key1": "2R1axngBYZkiSZwJTPzek875LYfXgL9GTYny443i2tiLfo4oMP3aQ4DF8MgF8YJvY9SLUmFyYDTb6VcR6rmKHJBB",
  "key2": "5uccgeumZJRKexJQMRam5odptaR3CjfqiFQqopNq4J4J3DSvG1ugHkeTskQynHfWevM3iyqqa6kg1wK7Fj3NXXot",
  "key3": "7LDNH3R9F9pEoTvps9xVtjtiG9uh5Pg87GGZxrJ9XsDVdRP1Q6TZvM2Vp7EYc8JG3S5RdphQqs5DwuUw2WwwnnF",
  "key4": "2Vp6GLyk4UfcWK6GC53JZJqQSFtAsTZJ9VYpedaHWxVNCc9YPCHp2kTeL6eemPnC6jjTcxHK1gtVaU3HNMnjFw4D",
  "key5": "2TE6u85QHYkb91BG1wQczU7R17k8apEpd9jUsmvpVBLkAYK56utCze3YDDSV45N5VN1dTsxx1gpd3BwimQbAdrsM",
  "key6": "4d9BmBZXQrMUnydmeFuG9C5YSbtb2j6L1aKaF42veNN7DfTijhaDX22gXpHbCfe3aXBPXWHTnBa89pKbxrat5AZ5",
  "key7": "3UFRqh4gDtSHmX2kpr9JbQ1B16dZzQF71NfWUDiKQfCSWRgGTiV17ue6X1Z5HNwL1VpVVWF1s52e4ZM8Taq71L4c",
  "key8": "64AmWWup5Z3rw5ywWnjsCKJJypC4zcHLGst8wNg9EvHedqUMgNvUg8GJfP7sNkmfsMujEYUcAF1Tz2NcCbrWB2LJ",
  "key9": "qrMTiMz3bdY83wtiJP3HuHzEsvSfzJ2Vf9hAFbRftxq6ZdEJ7MgngmnQiJQtJ4UF4zHXonoeqcfRAUbETgzzKsy",
  "key10": "9EQociVLFPZm69chh63dXJEQtT5VHdj2Z6TFA6uoc8PjeqbHkNybVL6WU9YuLh1dpYdv2c24cVB6xV9DbQbqFZr",
  "key11": "2VxCipZsQTWmseF3CSe67ByGV35XPUSem3GPsDhCTAcoZbVhuA9nzoKA8bLyTtzdB4KTzy2bhpPLcRhNKmiGebcE",
  "key12": "4Di7RPs6PY8C72NgZeJnfHWGHsbkdGEcNfKCCnn79XhnHeYfVL2JPFn17CWM2YbqESVAptWSXAJ1E6y7ktuYTsXL",
  "key13": "48sqeMYuCtdnHB8kc3qDMdKXmjMyt95kL7T1W5skb26vD7sV66dqjjLbQa2e1vVNAQT2eDkXYZzwEQ5vQbHMRbVw",
  "key14": "3e5rty64K2VSWN5P7vDS53ariCQU1bDv62AhGccoVufGnwytB66Uerjs8itU2ADKU6WHMc5Su7XeHfueLwsZKGQX",
  "key15": "2DdkHpqBP1ykMg12GPcwXCzga5LZERjE76jEk2oargArpn9SZ5zyzF6uRuyZqryeQNxUSiwZFhBTdPWozxUxpAvX",
  "key16": "MeF9pn2nGFCpP9YH4VHsAJWeKhBSA2japx9S9vvFCKNhWVhHGTeKLUQtnC1XMgHidnUqUHKwJedtk8iaVTkRq78",
  "key17": "3XoQdZkjMDsbVw9BnLBvG91Ahnd69YLvUQp3pjxpYxZVUooqRDHMHWzFgiTpyPK86AsRakC4EqBpfZFVfK4jhzpA",
  "key18": "2HPgm6zksGvtRiRPjGqKeSqPV5Cn11oukEmLVCSRTydag3oUUexkrA7nCKjePPuknMAKNfDCZZFgdgKQWTwRxN6N",
  "key19": "3oyWG9UwyZPBMj2FJxJHNDjqZmPdyep8vXEXeu8UftBy86WpJkdRdg44B1bqWMHTRTyZN2tqbJ21F1x6zC7k24Dy",
  "key20": "4Ci2Mwk5t1pvXb5W8G52uZrsK5cKtQFpqGopzbU3dVnQFAwKKAkxKqfY7zQjLaptsLd767U7tbZ2HZWUaEDzreTj",
  "key21": "2cQdvSQYejFSEv36Aqn61eEqtgaRGBKS3LE2ogRX48HcZCxBakyDh7G689tVGSy7L6JffK3kVyGbE6LP65xb5sbH",
  "key22": "5ERPLUrXyURp45n3KgQzJe4gUzP55qdwUiharzHQZs14EdauX3hWMT1PGw44bhP9CLRXT64NX36hyph5FmwjAP5V",
  "key23": "Zp4sg8SgUMxBD2WDe8RgbmQk3tEUtW5eXZYLNCjaWHHzvLJXNAK1iXDVPPY8oPV9cULoBEdjuGoBNYkaw4YDmM4",
  "key24": "4RE9k6TzQtxpAdBD7oQJsdrFmTELNM52gkCtS2cErV1ngtQZaG6rtza8ehF65n5epnS92R87uXS6JSXa6na69SLx",
  "key25": "C2ZZVheR4ot4duXAiTi6fHaYtJi6aBcXKujmkw6MZwjY91oRz5ZMRPrFpEFh97GhgPTsjWDZYSAKQoVQowftNgs",
  "key26": "2ifhY2JDwnjaKmnmhMS1nt8p5cqYcrHnVzm9nV6fcJJQgXrrw3reQfDHrm4YQJUNznboiMQ8JfjBQZx7x2A1WFgE",
  "key27": "4zexyyKiy5MQ1DMWeZW89zaz6rDNxW93Xrgy8dmc3PUKe4k7qZuwZdKD4pPggJYNmrCRGv5dSgQJLmPpEjKGJNce",
  "key28": "5sa1ZzcSUT39yGC1F2JTknFY1s8gqVHRXH8KUfeNoN56QgPTJfPowbjHpysaYKJc5ftJ2sFWPeFf1r6oUNMVTgG7",
  "key29": "4C8DaEp6FjkTyYwTtvV4pK6ddzPbqx8hLM8kpr1msYpVzTw9pnXTArbEXBvTapnEVTrTUnUNWP91jVHiqWRy7UEy",
  "key30": "45Rqqrp5JKuiYMsvBnspw913mz5qGpsYgvCUW6hvexpSFrNKvdxUHdZxj1TkVnTh5TMWr9ZbvQpmF2qasrhsNUG7"
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
