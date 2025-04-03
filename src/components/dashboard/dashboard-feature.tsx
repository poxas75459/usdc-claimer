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
    "3XWsa1C23roD6Mea9vv3cwitW9FLnN1anqZFfa88gabSK9UeGuK2FwLAYZGcs5Zghy6bCXshdkyMW6KyEtuoW9Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxRUfhFJm8mgzzPYSPukVUytZRidaTsBtCM5LHR5QBK3GkQ7toMDt1qjinqMtko5spfBjygRMJiLZxbDtneWNdQ",
  "key1": "2Jm4i5hGmSMptHxtSMiSxJJ8EE6aD9d1YqDfmJD913iHYQCstY954YmW1KiCDL1m2uXim29ZzMTHusjMRpkFKJZz",
  "key2": "2URrexJ9AvKt4ao7Erm62oDvxjx7JbNA4vwAV9pYByRsKPXB9TEkkhCJf2DRBEAZY865pGcX9MdrZ7Fhec7UwkDN",
  "key3": "3q6gAcsG432jNPhrckdEiziyETcUX3aDSFukYQg3c1RqAvm7TwGe5oiSvUApiG2WRKaS4YQFeoHJPpH42gxv3XZ",
  "key4": "2Pvu9EN3ZL4sDaxLeXFX9TAvEw764ZritW6seY73bUqpWWMML98Qh73YXf6T3bvq4JVjzwoS8CvrkB9TUfpJRfPK",
  "key5": "2pL5q9os5RbrKRLDfJ3aiHNgEbhPPdfncuG2F91FsYTQ34feWvEBEvvnyrXa1tuG3ST6ZMjnRjyeeiCVBtvMV1aZ",
  "key6": "62YB12C4NTLCnFT6ihuKywgmQfAQei63FhzcEkKobxVbbxaPqAgttZ8aD1XCzqJYcQXRFdxGuTCQxrqqHivfdW7Y",
  "key7": "663W9HEwRiMfg8PTp3sbC87EdTrGw9DE2unx2TB9qUVjwnCVyj1TgrBGWDKNZ6BAo3quYeeFtMuxkkNimYUn9JQw",
  "key8": "5MkubaEpn7iEeJAmsFfRZBfa7LtWoeNNhU1BbRxpSkG2jUuVzNs9SQg7AQPrB957sUZuWoyaURAnz8PGi25E5axT",
  "key9": "4ZLHmEzkrnGnVEJ9Dez2D2ZpyZKX87aXUZWEcCdJ9yTwnK5eHNbcjC47TXMjVCpfEmQ17vBxRgks2zcM6cvBjtib",
  "key10": "WiRkEy8xAp6LNL1fDaWCFfeBfWTSfErFVSxfp9j5DXa3dwVgPFWBnvnmdSyZ6wRdDrBNahArPpvcRuhdD8K2FY4",
  "key11": "4PRCVbhP3CGPnMVj49fF13UmvCkbMeUX4TcXzNnnsxp1LPjDfK95yK1hYFuFuQnNSowdMQ1nZVzN92d2xLSq6HcQ",
  "key12": "4hQFvqPED2wRaCja5cYqkqrPaD2xTeR5isXe7iR6rn7NvHpqsbiS3Spv19xAHC7v9SrqNMnaQJbvg9WSpCyKd7Sw",
  "key13": "65S1RTZPaExcGZ6vkYQSheQpDG5ucF8JYkZhkDKXGAVV3NKCQpRmkQWNnqSA7SCN5j9VFVXZHDoUuSU21NH65crd",
  "key14": "3vb5tLUKsa3sYvGuk4a3PR8ed1K2oEQ7MizPXhtfdbSD61R8P1c8hvrj6H7YPZCesWCVki9K4VCix5wQxBCAM7Jy",
  "key15": "2CPWb6XqW7nVBYMRCqfW7er9XXePz2tggPf4VM7J4JFVByGdbcyrNuhGKAKo9Nih5Ces1XYfpN38hLcahKqaCEKi",
  "key16": "5uMhktuyvbYu25sBEBP4J5hDksESXdeQyqGXvyU2DKzcqCXb7yLJJBajux7dsZUZHFNuiAubYNA6UcGhRADfSjmB",
  "key17": "3HhyTAfXkfVMMLwtprRJAjtMMT8LmZXvrZfcFZEYNvHqMdaB2ZHgi2sRsCBYH7LfUGsDvi5NhVdqnFDFA9qGkGNN",
  "key18": "5H1Q8UBSqPzxYaFDQxwQXxyynSpzMNMF4J8EWaBYc3Z5HXswQDX6Y2TkpHeTEfztn9wH9YM9GuecLhV56tQtfXwm",
  "key19": "7cdzrHMNrL9MGVBGTwVCWifQxFffinH8XSXhZvbANfrwYUvFVGjn1h9BPCQz6nqiJr4e2tXSZgzQwVbk38TRKf8",
  "key20": "WMegvXjoeVNwugjDgbyS1QzWnrs5BPzSerBiMt6qmLhKWn552djpHh1ad9DNxCAn5zbcueBojqSthtksf4GTYmf",
  "key21": "4U46YN8D5ieif64srnj53G1eFCVQqrzzwapeA1yYN5Shp8Fnum3eS1kmKZUFk6HGM6XAgSrH9RAnnq6q2tjvU5T7",
  "key22": "2m8GgFDgCPkaT6DnBFKFxBJwU7PrS7ZN7JdRiP1oyAsVi9tFCEA19ZkgH9d9zbKBdFFwKQWso4GcDGMdfR3SUnbX",
  "key23": "iGvZsjw3S4rmA6UrFBPvGmC19Shk5YpQ9PmKucsJLNR4RCupgxNdvNHu2sG8BAuvYtysTgRvbRmhd8agpJg6Xst",
  "key24": "4ZCQf7aPKqVcNzkk9pw7mAhaodSmU7jTN38Fz3x7VVP1Hw9Nih9SA35vV4gh7C4rNkZW2Xebw6fYNs9dNwXHd8rj",
  "key25": "dFfuCe1hJ3evMA4RhmM8zLQk51NL5chNH9EehaKRALQNgfZ16GZUL5FWNRmSeM6K9Y9MGcZ7rGCfdFWQieme5BB",
  "key26": "3PqJjw4XhZFyPaNuMTkxPpZFDTrm1k5GPFgSoxiVo5nRgLZBmaQon9E7FHQhkFENHLhk2yoGexENv1rJj13nZmfv",
  "key27": "ASJJAeMkm75mEgHJ5ewNY9W82AYsSQnW4gaoYEgYKtWDjYu5b6MBSqSSUdRh5bczNsFvqzFGavSvWrFD3pRo9V9",
  "key28": "2FMnnB6haFZnJM1hrBUoe9pkVEmteYaMHZpwdhquzaSTyJFp955UiaJADg23zaRnw4dB4VonD3h7UAkQ6m8S337D",
  "key29": "kRG7KisHAJCTVSq9q75pAyA5iWWr3eRtRCAb6uCoPMqMWzN5tVTykvgitLBMkPkA4VcBKXrPeQ5Ea6N3cuZiEKV",
  "key30": "BKnSzvgodJ5zfY5YDWGWg9n32jJDtzXhpWx9XXjaEoweM8fE5MfcrTA4fcLuzFm3GLnyFYXVRmWvHNjaw7Dwc9j",
  "key31": "3VfrE92RJC8THmfrK2tWRsZUThEhcwppeACEq7pLmEiMNHgLQKerVqfGpnTj1D97gsY4kpbHZ9mPQyyfEh5yEhNK",
  "key32": "LGS7gkKsmApejWLqJ2Et8QGaEjLWPJnXWCvyuZh8DhVz9vvQ3piSQt4qYqcQiEK5Bz5bYmoCt8grniv8Zxyxm5w",
  "key33": "544Wmt5gYXonV7e6DcWXLE3UKKb9EFJHuZ16W55nRt5c87etrr8x1TFmT3QqweiwNEsPr8AAzhTh1bkSJ9VMrrS9",
  "key34": "571QVB2Mtbh5gj8rBk9hyqAzgeYyZccFj8NRiUAyUm9N71kHUbMjm8DSEow5zRKPznCqvjK27bvdMLQWFAW7hkNX",
  "key35": "4YBTvqCwCu94BTaBWd3eCBhkJyUqpARPtTT4RGfsE2pA8MLEnnptT6BcnJhT5nAnAUBEcnqvFEyA4DsEReXwYbs8",
  "key36": "3Y2DpZQZmAxVEDrnLbwZcge1iXFKTRRups11FPiSpvnbRvqWYDp4xjjFcBtdce5FRgvajHGKcR6jUfDRLKCCY9Jt",
  "key37": "3NN1GDCB5nXiAavA9bu7nZprtBo26NdKzGGS6C3p31XY2BB26VEQM8LxSpmnzBndSYn5YuZhB8R3Xmw7D5BjMe6e",
  "key38": "3JGZV4CaEyoy3eRiaPYUjTKSAabEtzTARCsvKRZffqumspe1Su7kFAkKKn4tQxKh9emxcdqx34YFhrpyewkJjv1R",
  "key39": "4XXMZH3eCdc9MNML3YZCM32gRAhZaptUi7vKUdCfcDeLfENSQFHshYXLh5c745Jxu8weZRpq3aXZY9qPbYfdiyby",
  "key40": "47Ckn8TWEiC6QN44VpV2uSacB58Ec2fBjGrG5dBc4xbNTi9nTS6uDsXufNdqgB6sxqLzHKSAnCgF9KP1K5nybjqn",
  "key41": "3U1hDMjsT2oMQfzvbfJgSuoSd8MrD7pVvSaSjJgkcE1rCnyqNwRCkeMGN5mWtACxEnBFX5fhtz141hmC698oemzD",
  "key42": "3HvkoxZQs61j8BSifGrhD4HrtvhRN8cCQsAXBbSc8hpM5RtSLFttojnNoGF3ZWZ7qyJNPMrxq9GnKmxTFg3vrkja",
  "key43": "RXWhpUmw6CT3vJcAz5XvJMPYT3mjBJeGwBi5GBD43SpfWtj2kkzN33KFM4ZxmMfYwW5QU4eVpQjHdQ2gns1ax4d"
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
