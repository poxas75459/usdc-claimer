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
    "WexxNBRtAR88yBS4zeynXBVkwPDioGqGXCxqXFLiqAUvegQZfQHE2haqvATHx9ByJJ4CXtaNVBpxHyDLKD1GFWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiRfQgX5i6rUJGDNp7wgPdhRiJSmVKiuXrj1PMTQXkxYkm566hwD22wtF32CjPM22UMY19tmpzykrhknvmovtd8",
  "key1": "3rjT5g5u6oaW1evuqQ8zt9LQADG2vo91NTCF4GQCVJFThqPkUUhQFBAPp2CBF5QC6Ed9X1STvKsGEDMFdMsK34sD",
  "key2": "4sesX6wEu8pTCugVg8wD4rE59AErUdkkVtmAV32K2zSLmecjgGj2gVveoP3VXia74iLUMDGiQ3qhm6kKYyhjzVPy",
  "key3": "5sn2HXZqheShGeuimhsHU6p2oLnCD2ng2UUWswopPM8iqDoFmvM7g31Bwrwkhkv6fpd1umJ4EGGBTUyA6JcBRaRe",
  "key4": "2u8ydakZhbcLwDBj5Em7WVnsanXtAgREyJMtf4ia4CVhvgNyTbKL9dxLLbVuJCs8cqXsoCUEoSp3FmJL4woJakyN",
  "key5": "5hGaypzeQqmdyP7B4RU9SHNQAnbUL4GPA2rto13VVfSX5M3CxoZ72DuVv1HaZHSdj1sMK9g1q3H5DTBnA2iVMXp3",
  "key6": "53KkPWfodUUQ9m4dLMVHfQAhz95s5tb5z1VcX4BbRdpMmL2t5i37yct1572dtRGVSAxUpjiovxZ2UsrpMa6CDwqy",
  "key7": "4pxDPZU6YJN7EvomTDBWwtBkHZ2VsvF6KFDvU8u7EfTe4n2HenhtzyuxtZnWAjV5ytaxtrKM96EBsExTL1hwcA3P",
  "key8": "4YR38tMzrUjeMetTFvULggacwnhrAiAaXTnWfCKzZsM9jWKuDZKvT1MmCFtSWt5XsQXhzcWjxMGyqfdvaZiJeHWw",
  "key9": "9mg58a2f6WC8cgDmwjAbCd9KX13PwbEdevKfDiR68G5eZbGbW2maMu62CG1bVWHud7QcDgtK872Yo83mLbZDGRV",
  "key10": "2dahKoHxwwGHitEicZWX9TSV3dmy1McdEuL8WUfWz6buHKumh8tKraTGPRwtZtJ98AQ8o75ySMT1t6s5ouhhmno6",
  "key11": "2R4dUEECwpRda3iqoCDj3qbWXx1X9Fht7rM7N2mcisoJySSTEM2cAX8pkseny8ushX6HcH7erwR88xtQY7JHfWmz",
  "key12": "2HBQaeYL1PeqZhM3qh9DXTDZXpSBtZNF5twcgDsonG2uuyXyezqgDVLNEmkZLXQ1Y2SEHfDf2cthHm6Mp5xzkRCf",
  "key13": "4re44bTWXvuuwNAnXJtBShUkax84CwFaaGB2hC3wDX3xQdWtXE7mCH82fhDTSLUmmFWDwN3zLKq6tA3oaRu67xdn",
  "key14": "48xK3rrWJVpM6mjpurw9WG6Zs9EHKQNpA6QyzeoUCB7Gojf211MuLq69C7WYxAQ4H1MXDsm6m8L2bNTS5tnpTaGB",
  "key15": "4mmgxgdJPoFQxBjV3yZc4Zd7fAtWZXh4rTuH6ada659pCfTHFV5HvqbxPsLxksr48CVwktRAeprNRg4oTo1u1snC",
  "key16": "5dbbtJqSEpef7ApKF2f9t3RaKyqdhMpNu1JyipPTNCfiTWFrfRRSVwv5igkAPcfFFq6ED8DJZLa8D7UnnH9opZdN",
  "key17": "5RF8N4JUPAZrhcwkqtSHvA2GSMKPb8B3anVW2pvWhqLa23Ar3PcFvGFCP4aDt559Es1QMBEqmoFdQDeZqbeNFWmm",
  "key18": "5VEhpp8CZ6FcUdDPsrf7sXZKqv5AjoeRDsgUL4jLqL3SJFSYPGnZY5KXGFK5aBLCaKjwKQvNybN4LkkMm1HPh8Ee",
  "key19": "4u7PyPhvKismgFFrNiJddGRayhbF2hBZDdHwxJ3tBPxSYY1RMUN36ncH5NAtgnaaKVaZSaRp8mfoech5hEiApNV1",
  "key20": "3RoMxKWhpakFtBLVPLwg1doRkY42Jm4ybo3WS8qUw2eP1B4HTuLLJ6WtFo5TAKdduVAsFPhvi2QgAXiT8gNN1quC",
  "key21": "nvg1C1Au9dtPBLddK2VuyhdTReBH6xJMtqfcinTshhKnG7o2MMg3gUoM3L7CcFhoGWhNk83PcyEXQiS2rFNbBuG",
  "key22": "32Aqb7eezLQq5wgu9GFymN8LQEALpkQM999GEe9UP4mZQ3xQtcK4BAZwPyh3Evke4RdePCF5YRQ16GjKHKQVNksB",
  "key23": "5UeyLX69vTEwiZHWEkHysJzwWK8EbQTEbXa8PxrWadPBHsqReJoqgwM98VUGtV6iD8VHQrPqVu5HMRkgDBNUiuF7",
  "key24": "41JAZ6Md5CpAiqHnYy5Zc59TEjPsUmVc4Hfk9ohjSYHcuakUgx8zNGeVJDsiv3SzKsYSPUjAtm6cDYT6WyKAtcLh",
  "key25": "YxBUHR888Ar5VsvzPAzAENjAUsiuoRqYP1WPuuw2sFzGLiJjspifxRZWjjqDEywZGyfTUzdVhVSApBbrCUDwVVq",
  "key26": "2m6HGrHmybw7ejVUFiizPx7HeWNybEkk2ZmnrxdQvfoFY5zNRf4bVkviCGQfwwX3tCHfYuE5pRsYLM1DRmPQusvb",
  "key27": "3LwGQESMsMYA8KiXhm8LX1YAVCP4XqMQF1esxAchrnpTTZDSaVrTZzzQgU1FKN1utJvgydMFWQpy43cESi7MQTe1",
  "key28": "515gcuGZoU8P8eTC8HrkQntwEDHDGSK9mzpeamassV9z8U8NjJfVxWjqGPhy4DgCYtu4a52JACyzA8WxN4oaKaEM",
  "key29": "2LTKoefVKK6HKbD6iPFBGNU6qrmsW8TYWjrZytHjfR8JzKazT6ZG6JPRtaMRWer7gumi8TkcQ38RDHYjmbyqyE6N",
  "key30": "5WxvjufNWoS1eQuABvnA9YmJ29Cxtq1GND3DFh9EmCbELkGBCLFSeQquxxsJmpkkBAKgz6W1sHJ4ouSxoX91DdmA",
  "key31": "4saFeCxh6BqQbuUoHjNo3p16aYqxvW1TrDkdLjmEL38KEfrdX6sWw9Gbt6XEeR4ezGLF333VZKT7x2nxU8VxGuHQ",
  "key32": "4J67E4XGmQYf2v2f2arCV7DmbReKH1EsCP9RQB8AMtRFqTU5aWwERUHEJAY4gz7W94kbWcF84WyHbBBUVSg4gcfD",
  "key33": "2W7u8sxH7TDibYQjixGk7RefjCCLHKZrM1W6PJABm839ShZaL7vpxBL9M2acQL9kzDxV2QkdjqBRnNwM7P4kF7VM",
  "key34": "3q8JH5ffmWe6fvh29eo2qG2gerHp74ppNiYdDKbzzKjmz8PkVAsJhMQbGCjXKZNQ8eu7Zj7gdCCw2hiW7BARKhtT",
  "key35": "2PF7PV7CCL1dSZGXtex5vNtoeGM2pn5LyEDKL6sMak84ih9oqbaBiBbXGm7bThix6dJwtbwLggJaZjB1XDDX1Lsx",
  "key36": "48LgwjrwR1PxzcNoZH4rxqtF5YXk9GaFt7XYUUy5qe59qTuYcHqhX4pyNyKRnw8rjAhAz2cu9E2TQKqruaZoHnfv",
  "key37": "2DNiscqBhH45g6186ch4kkVR7rUNK3an6qSsx6aYWVJno7a2xf8gU24rpoAYCtob2zDjhgoUBWL8oNraSFDhvPBa",
  "key38": "5NMCJFR6rXaP6nE55TfDEBmsXAW1Ny9bZEVv4GSdyvWoShhG8mhxBJDwd6ZfDTxL3RNuPawHR2j8MUNE3LNDtaDr",
  "key39": "42hVsdzTi8o2rH8BHvo1VjDNEr3hVd6S4cLHQF8EYqosocwUEZdinPMuq1fUZ5EHuA346VcfRxCVZbDtFjbTuXRj",
  "key40": "2PDb6YiNDN2JAJHB8yvLXtWkckiGGvTMLdQAA5ujeuxNubZrrdc1KtbQ868aY2dHoFv1pA3v9oVkt9cXPcBL2Fyi"
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
