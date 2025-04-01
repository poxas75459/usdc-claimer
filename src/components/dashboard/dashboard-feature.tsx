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
    "5qwEwQFbTHZWGAezuAxC8XroSRcu9q1xjnaScahMU984AdGoKargLsGrbiRtwRirVQnwFXBgkzSFtNYUCfoDjVTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTn3krCbRpx3yXdzEYnnsdkYpmyJGTfDd81QS6igEoWpSVZWBH1y6drw23yMRS2QdozPLU8f6eLgaH3e6fDuWC",
  "key1": "3UuQ38WguT85BKvok486fUYHJLMSNQoAMrVAf5iEpymFDGpEjbWmomizMEiUkmczB6diFzq8fbLqrcEgcNS9wYVU",
  "key2": "3kEu8fm8VCYMTcKHmLdRsvz52xNiaBmthLS4AsZbhaqtLWWFTEKjk9QQYvnZXMviA1SYJdur5RVSVmoB5FUGnxoa",
  "key3": "2D8Tuemwe86nSS8p7pGM6xU7yMXHZj4coaJ5JALicBBQiyHxVCLBvReNnSiDSb7dxruqViztnz8XvGX2tgYaA8rJ",
  "key4": "3rMsSnzmnbMsFiDR6TibW1p48H4iwoC6AetWiSFYKCYDHhbZyZpaEyMwfUqyzJVKiKwGx9ToK2bEFYXwof7ginfL",
  "key5": "2qTSXc5np66QUcg4NXq1ikXsLpZMcqi5bdnD6JqMaBHDs5HfHwRGWcx4D4DNqsJFT54SGfyfaLtJXxShw9xQ788G",
  "key6": "4vnisJ3DYqmPJxFyR4rBnEkfUPpmh9cQiYbAM4h2YfeAoGkCBYU2GmGS5san9nddzAjPMjNbQLkNes4B9rigsogQ",
  "key7": "4ak18j8kRhmmLyjqLQuD3sfdFkiUUXYLkHEA7ythjgsDWqYfmgXzZ5SfQhquBYTnP4atqcbYtR8WrXxzz6gY2cEL",
  "key8": "128HCXcJ9Arq7gVDCfCT2UhgcJTKwhKN1M1u4egADapfRpHEdrSBkP8Xmv2RBnrtR77vWq9jDrhb18BF82SW3QD5",
  "key9": "3QfiDKCVLCAPv8GUkFqf83Uw5rew5R7w7XoigE4a3HEAcenBfpTzXUztNss8ZFnLeZsuQHUeb1Ax558KrpXQdQBf",
  "key10": "4tvxfHXWuS3ZbjvPFwGSaZbPEMQanSAm1mm8DUbUzbnKmH9pSYJXCBzjsGsup9pXmRY86kLn8oVdV4G6Yjq1TU5X",
  "key11": "5gXDf5pHbHSWzY7rUA1MhmNe1GQ3SPovEntgZPGRhrZGNeCrGg1HqGhpHE6VFFAyMt37xgL674Cgi8Z2MhrWTNRW",
  "key12": "617xQ7UA3zcF3ZXUeiDjssdJcgKqYf5VHKMcuvmNckTjY8EiXSm1LuZSqzxFjvKdfL8edAb35s6NwZEhm7KkPW8B",
  "key13": "3AtvgJjvauy3uaKyxj6hvHSeHsom7eKrgXerfkihNcEx1qcUx7bCHXBg5GCqYq42gsJtMKXXE4mq1m3TMzypTC6x",
  "key14": "4Eb2sGHx36qydNrJo32V7vXGA1oB5hYNpz98a8Nc5EULQ7ktTQKQ715pYciUxR3tV2H2fmPz2mirKWoTsAABwzX",
  "key15": "2WMy16919dcvaHZ1fcVtMQ93vvK9HUJrDctG8spcwiMpguyP4ABij9obN6HNxSa1ZP9jcbDCFFw7ffS6gt8gRQ5f",
  "key16": "5BdAuhmboRbnu7Tjj4HpSionH3mKSqFj6by84Khttd3pZ2yyM7XyLeBXQFkJ7dg1ypBxUhSHbJAUaYhmEPZaVEik",
  "key17": "5CKR7evK9ZgHnPgK1PowbmgADPXsnjZj7U4rFhuxyXHcAD5MToAzjkxQrjCv9G3NXEMph8D2GJuxK2XYLJ48Yd9W",
  "key18": "3YLMS2vuqJJkuL5MCAPBUC15FvsHgvtinxvHwtQbk3mMjTP6YdGjjAhnk6pkeJEPdnfjStyH9xM42JLjnwB5MQnK",
  "key19": "3Gig1t4yUDpzqdVdtmdbTzbaUQCd1qDt2D7BSFCuvGVenUQoG1JXKkj7JviMnpcuCogiWpv9VL7RgQ99YHCWN5Hm",
  "key20": "4Xn8fepm2SgomYoS3hP55HUHbYT3R65yV1K5CLonsD38kaqEeKBmrymuaSX88srscjkswh79HD49Hpwgap8GhhXB",
  "key21": "63evss4g9y5KiFBGgkobRFwigfTHP1b5yr9VzAZjNV4tEzwamsZtkSiNmocs6DaHvsbT79jfSJ1V8RMhZkdHx7mX",
  "key22": "5fnbqyxy1TLsB6DYUs52pi5tKKmnZD3LkYoVqP4jLkUdXex8oe6R4ZcwaRADetFvdmhDVJDTtf72gXb736AP2VDc",
  "key23": "5b7iDHVAksDwkmANVoWrRUoAaJLUEpfkphSdrurbH6nTxnonhUyiwCTYQNZjV2hs6WHf1bnrMYkw3ZYdDUwCN7QU",
  "key24": "2EEQggqjA9WQADVrmY6AEWQWTF1wqieCFSzcxENAdXdfhL8dpPsjNCzUtwHdr62Nm2S2mMUSJX1t8HVRtHjtzenL",
  "key25": "2dm2LyyU1wWRqinchn5tJ7HoPPLvkKeuwiN4VqTkfvhiS4tGgd8bN2sL6T4rLgNJ4GxJ4dmSwwLiRefn677DxVQp",
  "key26": "27fsPuajAf9y1jJa6p6cY2vys67E4XUrnmkQogcVpzDTzcsEpH3zzL6LRPez6ZLWMny4jWJA3ieFHgFdsFX3AHrk",
  "key27": "5QM5rhphcrN722ZahvU37vbkpH69B2rSgn4EYqcnFx7Zwuig4SiPzg9u7AJ5KqC7DNnTrztk1r7Xav9CWoCRmXpa",
  "key28": "5CgtLEioYdzzcsNEcfQaUtLmMruAyg6Cbk9ziT3vSg8s7VeC8rrDDrJzL3m2LQjpgzewM5dDjnUstaCiC3Pq23Db",
  "key29": "5gkCMDEkjQWHwUJK5AkruyDvu2V4ydup8ripg6RQz9KEWCnzfDZYqcbPb3VgAxwxcEP6qvN35cDooPeA72ZXs76J",
  "key30": "5gBouYxmyESWP8ShuiAbrxpXTxRw4ZV81w1hKpa7eVUZ5e9nxHHLYrQDStRXgk87AA6pvrzaKaHgB7oeSmZ1ypMS",
  "key31": "4gBZZKU7eyHDTUBR5HLXr3VsyaDFMoJx3afVC7M1ZHbJQWosZBWao5LQ9B7hVE75462m9rFRcEWSxW7qHNMSDXEH",
  "key32": "5P3TWN7Fbs9KePpKWrPU9a1fYWHo6EcG4h7cbyimf2fbVkrA5mFw5Sa6VU9ScTkZbi97GsVD6PMbiqeDzYKNMoLf"
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
