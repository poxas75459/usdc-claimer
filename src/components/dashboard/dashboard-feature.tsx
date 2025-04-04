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
    "3zTDqagGBio8ua7pCtCT4pTkaoUybinGTjvgbJprNb4BwuMEnJ9R1NB9mZBPq9JhLJHUHtwL4ab91e8LHdV6KMAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbjHw6hhN57WxKifeppTLHCjX1B1s24rdmq6r8b547tFdiBCunh4pWgmrDpoV5FfQucBB3bnAC8MRJPNRrvAGGm",
  "key1": "4ALHNhe8xmLrLi8HoWcVgXeZJXDa7kVvrzQ1Me8sRj1Bho2JeoKFWQkJVMhhdadkCW1CEUdSC6XbdpmLSGoCcibQ",
  "key2": "5bHJRW9LN7Nv2UYvpyY9ibiFTKe4qW2fnJMTaWoc2iduNRgWHqvJ9aCM88vt7SYMykcH5tAuoCcZ6ZE2zamygu16",
  "key3": "ynJuwRaicNQ6iZvZcTRsN4qoh8FQf9t8RZyDvRYnSQcBjGgfYoF2CoEBEyhEpVYFpXjjVBpyo4e47d3MdP4dnLB",
  "key4": "4C8gpBispUUT15CzKRkMoNeLXy7JYD4c8gcK2ByC8TWJdkki676iu9sagtxJXgAGQxTLJthZoqvfhX682HsC2qnc",
  "key5": "4snocsTBUhBxe1hwAgey9mfe2JAXMBgNULAVvj4f1vjVeRfgxHrDXnTxCThApSxLxYarWNczsd1YNQmGiCP8FTKb",
  "key6": "6Ktyk6duZYtyTj1vz7YyGfC7eAdjVm33amAapSKkptfuR3PYq8CMjesNLyxfnRdRCSWAonXy6hJBDhHD8ZMbMdK",
  "key7": "CZoWyXjyDPgqSzmgatXBSwYY3P9FDgv5syBPzD8Rxwqr42Bw4Qka3k7pWdbKZEtwjo699BUZcAfAwRjwEkXs9ye",
  "key8": "4tKNzv6AapWfLhrGeLXiPinYBeXxLmfpV8Drsbf97wxVNgEi6guFWsN3LsHJKCnzbctoyno7mpGQwxYR62tKFJfq",
  "key9": "7Jd6BXdyGJRNi2K8JoP9kogCBHxmbcL2a9aAzCtnMfDefuws5C8FzN13QsP4VrbSNDxpgD9g2SgdGYJN8Mn5TDa",
  "key10": "5bG9hcgnNoxdk8L7RNqVEFo1Rki8F2QTMBFmWgesS5rukDSSGPUXCzANa8wqH6XsJnFjGoJ6Q7ctCigZtrKad6ZE",
  "key11": "3MbXsdw7GSidPGfNixXd3V8vVJCTso6cDAwsujNNYPufnxCjwuTL7jmDVFnbh4wxLHUn1fCA5mTM3gYd7Cjd24ra",
  "key12": "4w4DqeEbiaoX6CWXTkLoWXLSvdxXjpAQ2zKpMKnox97swKHR7etH9q9LtHQK1jri6Ypz7xx2CUBtJRQ2EbR8n8YE",
  "key13": "3e6dGzJygchXknmtXxtaZSuVqrsQsiKj8385dwHuhNpFsbQqa7HQDittR9PVeFmejGJWRQmsGzaCDWVJ3ceoSskU",
  "key14": "2ASy5ekMPJU1rsC1tBLy9ennaEUHaptwH8H2AGp8xdBmL1M8SdgrYijKCCrZLK8RGbU1Krh5KfvvQFP3PRLyahbv",
  "key15": "2VygaNij7Phw4r4SqedutogAgCLe8MaxFCVoqhxa5fQnjBXJtCo1eGEPiGkT7mxoLXQo9ii44sy8WeiPHFumPzxD",
  "key16": "3UpL9wcJwSKgLswnGRUM8v2uTszH3dTGtAR1BZwNbPMLTnjRfQkaZcvfzLGZbMd8psBR9tFx7qcRgaXiEVegkBrS",
  "key17": "R5i2ZbLBN9RT6cDdVuemgs8gHQDSJCSSLhoJz9ZMbo6ptJ9kqy7mN8ssKKSGA98yjUhWiidXvb5YZmesGdiHtV6",
  "key18": "2UoUBmXghE2vdifFAcMfp2jr2wKqvr2Pp7Ejt4ybvZ2pozmC7JywwfL16UYY8z7qjp9NU2YdyoWXoTLrydojK24u",
  "key19": "2To5Fq3bDuDPb1HJktJzxf72iaRoUamDCe9fk6Zxea8ZGdz6q6Gv6q2ArojSzPfvCuFM5RsKsckdPBwPdBvJYVio",
  "key20": "iE5FkBx9D5kJuTGkgcHeK142QaEEcoWDP9PZsoAxLZChAA1xeJ6czKZCFU1ptLhd8Rrc1zn3Q4ouy1Ud5cj4wJp",
  "key21": "4aY7HyNJH54HfYhYhjvwVJxA4qhBrwpMEPM6ymcPRyd4kaqYz2PgNxjA97iGNke6z1vpNPV6RrEbgnKuaEQxP8qA",
  "key22": "3zX2SA3eVRn4TEQsbn6A4twcnsHLNqnvtrzGzXKDBDLsmujHxcR7JA2GNMWJBgFCp18nN8mHB5TruD8rnmz317U1",
  "key23": "2avuauWoneMfQ1H4tpxRijDXggNbYaqJ55tYZhZa179zEg6bBfGis5EB7bqE85L9aE35WKyBgW5UoRZBkg8D2kzz",
  "key24": "d3nAQkNbAeY1KPh67fT5RjbLM8hXLPffhFTCewrjFCjnJ237QNDziHARF5auycHU5B4TmNPoNQLndivPjM1G2Ty",
  "key25": "4bX4fHfAm5pSDsfqjp1KNY1Wm5dfcm72Az47THaWR91qD2UjDAnujLu2KVofSU7Rq3ueMKZZTHbY9RWYYDWxGhDp"
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
