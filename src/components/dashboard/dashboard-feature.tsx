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
    "3Wx6YRhTRHYEiRaaqV6jSK93F5WtsHYuNSNMEhoygtqsBV29sxMrHZKVhUzgJYzb6rDh4VY3dqR1fYKuZ6UFsQtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVkVsz4hirPqNB43PH4wjXREC8LCySMtT7YKq5XPVY99JZKTuCN5bejFBmHDXk4B9o2f8BjoNgmMUfwswFF6p9k",
  "key1": "5r9pi2GtQzMC9fn25XAvNveBxr8A2NZyzUkNeivjfnewLwcsCA8Hdf3JusXiNvUJiFZdjrZrWVb4H3e4KE5md9Cx",
  "key2": "tV7XsVGitiHmRP76W4e5JkwS5KboHT6PDB1RwQ6KZM2V2tirxzcqtX3g2x9ftU4K5jMs1sQAugrKdvvCyAvBqBD",
  "key3": "4pukji7bz9tmfqMrxyUvuybVUiz6pu8ys648bmp9r91dG29vWqE7ZE5m7ZNqiKAK2dGeX1XnXK4yQXgZuH4JC3sh",
  "key4": "36P4T1T41kj8pGhMS8Dp6VRjjxaBFWeEK4XtnyJjgzzpWD3opu3myprHyw6FVMjosqq1yUcHzP2L9t3sV4yix1VP",
  "key5": "4STLibmutAMixwTqEBXbKFDKoQVVAvG15huowJYkcz9VUCcDCjKQoY2dFBnRG2Jm5eFqm1EMPa5udS8vNEmyrZXA",
  "key6": "4J5AUEKedMX9QiQs5V33bGKYd9E8sK1pU4rbEzgkwrjA582PszgTeV8mhcaQLxoZEcn94D7mcoDTCHyFRi3m9Rwm",
  "key7": "636AciurWSXvHt72cffgpvvURC4QyL1w2K39EL6ppXReBLuXPkjXKkHzhBFzC4j2N8mcMNoZYJunH1KRUm8Mi9Gu",
  "key8": "SSix9sEeJSKwtp3RJFCf4n5y7uh6S6xktSFGrcK1QDFWrjySPn92YBLB7tQLWGyva4DCuYPT7JiAx65bqcBTQah",
  "key9": "4wA7Tx5BJPr4EXNvXznGFM94CrKKBkG1yo3ETrkiTn6z828nV7wGJQpEco622h3JuQveJZYP9LgWFcyW2Zj4Gzjb",
  "key10": "3micivGPK3v8NzrcYHUNkb3YMrBr4MZjVjTRCwYs9kKvSxy44FW8JDrzqDJCi8iMDeKhdj7YddTT8zJeTicWYjSS",
  "key11": "4sFHEbK8MDn2iB7z5hQALSZVC1JSrgpSUiBSgrQk5V8KCmQ9WGeeokDB4qGrrvb8cKPvYzScMS3WsCvny7GC89m6",
  "key12": "2SRLvuWoptvPYZNSFrDv2dtXSa2yBqWj7DuFkX3sZcZRUYp3iHUoy8WzFz18gwK6Rkon6EjftMd1d69QivgGQpq8",
  "key13": "4oaRFtGhkTE1VCxeVReKYqA3uFMrsQ8diA5BittshYWdgLMFm2pBPSQu1Tk748RDX6vtgJZ6y6dWr7BEHkYWSJEP",
  "key14": "47jPrr58ndaQh4ckymsp3fqAGBF2otQJ7kgN5n8ZUjmsWmLT4PCUVBhwX8KtBZrhPuQrLbXTXR5j2ZEuzdU6Nmtq",
  "key15": "3N56ByrifhLwjQZYjR8q2sR1Xkg85rE3eFY4i4cVDszYxBs1y35nRykee1PwR76ZMuqwKtJDNkPAGe2Yh29jHdMf",
  "key16": "3RLqkTy6LhFNk2X9px9BCKGywDDPcLCPxL4nKnjvRxK264pqLqJSXuMadSZTaZfh2bo1voTvNCfm1AkqsDV18wHM",
  "key17": "2Gop6235RLcL6NpHr3SXEFRUoTUJL7F9woBpE41p34PBCFPmqVUWY55Wb6F74uaQHvicrSQFJSkPi6Kc1VA4unkX",
  "key18": "5sweqaY1SZGGBY2mUiqjb6yxTwAUZYnCVHXfrEt5AUh78XCde8ksfx24Ef2Ku9YjDBseGyr3J4eePznB8WGvxSJ8",
  "key19": "4xddLcJNepnztrB265yPD3w9tB1dLzzcjY1pfmAUZb8G8AamZymaZVPx7zuHE2Lhiumj7aAoA699fzryv1SWKSzh",
  "key20": "bJ4FYvfzV32LGS2nXnMivuVsgkoqBFbdGE6TzDU81BFDSTy4SkgtUZNPquRqvMva6kr2iPBvs3DQCayNMpuJfzu",
  "key21": "46XLeeXsvrHEsKwNPces3HrnDvjcSoE9pAPbuTh9Q2RUnDksu2Ahws67Ld7HyDCYAhKFAMx9v9sRW5tjdiMRuRMQ",
  "key22": "3FwtTFxNnUz15uajiQtEWGSBVVaFp2e9ve8VnbRKBm8HSZsjMUCsKtQU7dDftjQpXiUFueqexd3s2kcBMK3pEiXA",
  "key23": "JcTXfZiuDPkwi7iuhTL8FctKm4c7qM2X1kwhBcsr5Zh4t3EjbN9ZbUA4tv298eJtmM2XLNDSrzo93FoHf4AeSYC",
  "key24": "MkChF7r2TZasaTo7mG3WCmEr8mRhCXmvY76CZ2janeuRHGnjezKJ4uzec4ED2Yi7S5MbUkk4NnGn2Q9ZmJxo7XA"
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
