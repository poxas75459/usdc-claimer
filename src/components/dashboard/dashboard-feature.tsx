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
    "ff5UbsJuv9yFjAm7vocxQtj6TrY55xZZPFry21sGjgu2AtGSmAAP4ZmNX76r6cZ1x9XcUTcMPgTTCgoCYKoXLj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swyXGZXfdogVYhpP9ja3TH8EThQLx1xW9USLer9wzpHZxeHhkZ2u5td88YxomUaRUwMojG5o2oKBun2YV9Grbn",
  "key1": "3hXiQHXHcoajdV1BXdAtGgqrE67EPEE3PRiGPk5vg6CNpd73ATGTcPqt5y9BJfmkHyXfzeQR5uHTk5JxofWk2Km3",
  "key2": "2ZTuHq4836KyeubY1f5nrkZTKpHTSoPhiJxpbipMq4Sb7txSJcB9tV4UaojCsJgYNsfk8eXtWNcrHA5ez57ryMEs",
  "key3": "3kZcenKmSAXHzWySDt1hPfXj7FDt6LCXFKWiDWgJJDKsiPR6UE5Suf5bYeYciYY7e9uRKhL3BV5qTUUPuYySrbeZ",
  "key4": "d6v4wZqhko39CgAfmteb5RLZ5kbdsWbn5k6zyq9RDF8VGuDQwa8KhUmehSWEQLS3p36WDFbJaxFregpV6ne6sX4",
  "key5": "3n7QZZ8htwJhoFVr9Z7QoUWHHcQ59tGjphNMGkgwd5YDSRbg4YTgbAwZkEgziHg9pNDh5t8rVZpzgs5qcy4r9S1E",
  "key6": "5kq614MMPuAw8oqkcgcwQCaiiaCxa3E2jKppDeq6ksqGF2ZpdbpQ9RwCSqeRsz1GJok7k1MMFHnj3H9Z7CrTViSH",
  "key7": "uNgDwkmNQsW8WZmnZH2xR22ezJHsTgzT9Ftb63tuiDhecjrZSZMMapgM19sjw8NNqQ1yaViq51bcyLJozUfxEP5",
  "key8": "5DPbB9rgXEuvVzK5aKcJwSnkNnTxZwrZSCLTtS7GJ7QiCJyKvdWyXxu45JzFYQZb7A9bbRmoUtLWPkXHSjdcbSpz",
  "key9": "39e4PNnmaEE6SXegitK8q9NzE6abxmgxs2yG4BRKAMBUbrKVtxAbxbfNWcok45ZxgdL7ZteypH2qXZZWPJCH4Uf9",
  "key10": "2pGrPuCVzVPX7dp4T2XUAJ2XMqCdPryNg7ZfBxXibCsUrC8oSu4YUmiGPbaVb18cd4sQmpyomzEY6Tp3wG4VSbEq",
  "key11": "4NGTm3M7BHR9S9qrg1kFfAPbh7hj7xgfqPKjrEB7VcN4fPQusLyhrUQxmUCPVDqc4AmJ8i1zxYKWUswByqzozfJi",
  "key12": "4mPVr3Z37anEk5xvbBGzJDNub99SrCKKRGQenT6zrm8BrK4ZxPP6LHaFXKbWdRh7azTj7r4Vw5EXNbSVMqMzNomd",
  "key13": "5GZuyn2RBQWZw5iRRA3GWWqDtHydy3E4FRtCbXg7pwkRjRwQpquBELLWzX8PddP4ShdxFSQESzfnRLCuUWNqJsZ6",
  "key14": "3aBbLgv8QaBrWvxR4p3RHr2RQjGUWjKmS5a8RVj6xmSv42C3hcQM7hE5qfzLErFmJysW1Z9Ttua1M1Heo8nkoMZ9",
  "key15": "7XMmMBfDmYfSEWgC8Nh3noKfSuZP5aDFq8B6UzdarKyzgN5fmR1UTyn8FRD2qs2tnEHnrnZW4ohcRcWwrqvjxb1",
  "key16": "4ZHzoiShUfb1HUWDopqAHkSzSqZAo74izY2zbQqgLcxjESUrpd6KaQbBJMqJpZsSu6LtHrKKoqrB5vdEPTsJBgqv",
  "key17": "2FXgpcGnvVZbTqoWZ7iUaFy2fYS3RAdiRtzoRVtwsewXbTy9YYjgtoRuwUzg3oTbzRgBmgmvTS2bxQMEbJR4CWnt",
  "key18": "5ZtZeWPAcnV4m75sopRwk3Wm65XfSQj7JqKQ2Ccd6iSDLcApE1PkoVSPeBzw5xaWcDg6A9MHPwrzs5YF8SHmeMso",
  "key19": "2vwgKzeCU9dPGK8ufqKEmyA8utGSwgYYUdbMxL1qnFHXMFeoKpVtMD4jF5A7GJoxDZqHT4ifMGBhMRNedfzo5es1",
  "key20": "2dVV9aTKRVLc1mqhupafBvLS3uMuMYfmgh5tmxLknTqL2DEw1LwgxUwVCnWn3tEhHzJoFGpt7P8vgfgikiTPfUjT",
  "key21": "5VjPLp2tDMoV4QyRuVvoF8HNc87otkq3ycbd7MSscL1t6Z7EUEJAySSCJQkFcgq7kdAUieRt1bQEz7BaUksrnA52",
  "key22": "31Y3133NLf6oQBJgQEa3boMRKKLsyx71NhPfn5dpx65WMwJruYvTJv8Cfv6UQr1MdKZtUUzEjxpBRwvpwRUa2ZJi",
  "key23": "5JFF93yoqK2mo5FoLqDChqf67yKKwW4KYC7fsk696Vy7hz53PcgKVeUWUEmcpVAzYPHj2bR52PrKwozG6VxkiA65",
  "key24": "LMKyKsYQBE3YtjuqyDGgLyfzqWrssgjWR8tTQ8gJn83Q22joCMH17Fidd9KPpzoviK93RqD7Es3ydQTaj5EDk7V",
  "key25": "2v99xmYnMNyutxjkHY2VaPNHYETEhYbPZ3ix7m7cpVrfn3nRN2jKtPDbRWPHqM567QVNdxDbwmx1YuUnvxBp7c4",
  "key26": "2QSd2Dtkugifg4Tx6qEKG6ddW3mRYY5QFXbr8Np3ANsv9cBoru3pjzgPaxXfagG25acNVMFpdL14863BT9cCxCJD",
  "key27": "4AVE2vsE2yTDQH5XkpW2uPLb4q4Yx1igB1tdsMk2FTyYbAxWGUV5GN61dJxs1RKGxh1BEz1xwhbf1zukCMxPh6Wj"
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
