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
    "4Qy62ZjEwnV6AAeuA6Yix3oFpPgDRfiv5XVsMQyxJUNz79xsZ4XZqXpQLfCAiWBKKRiMApB7NPLqstKzxT1tZ22v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7L7SbKZgrXTjpWRx6ckC1aM8z2HdkJnTRVs6qRDCCmhJG9kuBF3Rc21N5bKoucx6bAmrVzxT6JTQR2v2MWKzPP",
  "key1": "4jZcf8GAGkWXQ2hUP3gfNVuxERfJoXKuzipDgBEZXjTDvxvVLpw4CbAmy5SF9ZfAgCSamEdR6yCF153qooYmaD52",
  "key2": "pC7VyHhhccGurZA6UeJwPLHTXzec8FGtfrfogy5DGr1vadiQMmFvrXDLMQ5csogRDNAcC1iDNvorurejaqBYyGP",
  "key3": "3KM7faf2VVvroZ3Gv4ZFg9ViSBMvj6xbWJ7zR3kDu9s3q2gUp62AtVM78n7Pe8oDBBTKvaQRq6aiKbb4e1nsTcdu",
  "key4": "3z19Q7Softs92ApMMjnyhZcWdpnm6NVPSTs56mQCvJ7JZDPT5XUPP29azVyeXDGTJoUhyDHR9xAHNAFAe4dryRpg",
  "key5": "2fqsaJLAdt1dD3qRNwHRMLprd9tPHk7edCcGkTSyFWZSoLXPCdpLgSzViwyvH3ysAgapbZPMH3oLLJqea2DtEMBC",
  "key6": "2WWqFJsQ6MqxwV83ze8SaxEE8o8hdjYvgRHJC9pfaTHaxkfT9Nao5AQuGL5iiMKFibaNtnf41ECPmhiSYNDRFPmx",
  "key7": "HJis6nxeQMkHZ7SoLGuRSCA1BT4t9yEpc3bzUasGS6gDyGos2go53nsvNZRbbpcBKGHR6GFk71aGEpKokGZcitQ",
  "key8": "4Hf7ZouyNMabRozXDYfvBeme1PwrtPoRoNJh9k4yB2nHrknfak2gcrQiZihGdfJLJesfPTDNesywhzm4efYCAKDH",
  "key9": "5pU6G8PJP6T7WtwmtKZsxnni5UB7tHXGYuYmh39jk8bUZ51fD3b6K4QYCJVSJHPJCqU9nWNmF2MJnttaeKdGFFWn",
  "key10": "3vwvcSqahQNeqUFdjEevbcb7zoLNSCKX8JxnhJSZxEakC9wGHJgjeyNV5LiTUBihoe8DQwngmk1ZkTNuG72uqJEG",
  "key11": "PaWkYY7kEsJDA7UV9rSvkuSg584Fi9awojg5w49dBxNBfthzyz3TGraofzWuWEpiC1eGXn2QSAqB5gDcr6z6dxV",
  "key12": "4EKtaYjiBakAPr1H1eQsgLrqsYujiEseaTpXwVEdGQ6Bz4jjuzDY4hXsUeCgch7vk9PyStuRHjTz73H2ZmFaAfyw",
  "key13": "5e3GC883Z8UHN3U2EK5tmt8gVRB5M46ig1Ge21b5eys3z9DDXzc2wKMfT4bkA6C95h8osaQMeg7zZ8YCFQrkhd5E",
  "key14": "4kaSmAeekGPsKefcuMZp7BY1883bwcQVTnnVcEmvuQ6LrjQN5dhYaWGpdQUddtDSNJ7HGGyksmwv57pppCPYcJsr",
  "key15": "3D3yWwuUwJWD76Qh8uXHBFbRdqZdXktv9jRqmYtQU3bfAjQb2f3So1s2UKSVf31o9kAGKCFHYBcUFWrxrBK4GStz",
  "key16": "5P5U8jAqqbPC73Gsuvj1sMkaavkQ7MDKoL1a9mFqHw2TtqAC1MUHR44JLKhpky4LpDjoAQahaEetCJTDdgPiu9q2",
  "key17": "3U8J9paAa3mg61bgfqoSJVz1fTZrjYh4mhWAmpcHVoSYdLSPbwfPqZvfgHmGNv9NjnsXybiwyfzrWx7czUPGCeHU",
  "key18": "5ZxfNGAsuuAPDyhxNxAeKfwiUbgtXVtwxVu59y3bKtNMsA7CtiFc5mb4MDjCGPuvRsg1a2bGZMr1wNaorGJt5xhU",
  "key19": "2UuidhP7HQbBhHfF23MZ6vXNkGZQvpkKPTKG863AP7f4dzFxfb2KTaVigpGyKHkbXWM6Lu6nQJw9She9tNcweecH",
  "key20": "kQMHFKWatzu8gbZGdCyr9wD5bg8ghPHn2mfXCRcFEsXz5Pcpc547e1w294fD52RCSTRAdzCZLFCafipAk1yiijt",
  "key21": "5D5KMPYogNUzmAAsTx7hNA87ph9wRcVx4etw9cW6FieRHa8FCsKpxa72gWAfydAdS4TBQnMe5m6JDdER1A76dDYT",
  "key22": "4qJ5wfSToj6c62kDudjD2UxCmT9gfg4soRUyXV5hLxf5F1GEYfdeTeWvx36vArwbkMZjHStArRMhZZYzwgCh7BRn",
  "key23": "4BFAXs4cTjjjRaDGdAzyPvXocVVjkWD8Pf2m7VmaoQPABVGBxxFrGpFWKdVD1HyZpSgNv1E4MLFpK3AHiekpknVq",
  "key24": "4f1JKKXhkX8hJdpb9xgxMLCGbe1WrSrH5o6hbNM59FgwzGn19L3Wi9tb3otZv265esWeoVT9tVhw4GmqNuCt1Cy2",
  "key25": "47i1EDGetoGH6bu4KgWUipMUBZh4niHPCceVGMaEywNzTGATggCRcsnTw5LtqTSJKi2snG9K475U5n7bf4po5BM1",
  "key26": "2UpYSVmvi51r8pqsjezBCu7tKz1yiFDRQW7sQDWtidFiaxHfB3wM4w81enusMGd4vMnXbcgzAvjVACvCTbx3xCR",
  "key27": "4xLH8GaWBHRXo2zeAjcPVpvgguR1fHQaf1Swph9cM6UBNpRNEQGmT48fSefhZuhWsC364Ebp2WCKDSbQAS7UQGUT",
  "key28": "2gQ9FTpi8HPJH8SjdEp2TsHqccFa28URhpXizahPWVHBYqsn5wpPeJ81kcXfZUneHbyWEkPdRYmr6QV4A6af6CzJ",
  "key29": "5ucKEovoHdKLZyRVtwSJUpk1ksCa7xoe3ahPVMMF8peU9PwaXL2yt1icQ1zwXYQT51r4nDUPYn1t97NZ4NMskTGc",
  "key30": "516s9t8WzHQ7DfgSRUerBA64hCXubxFChkMufeuyhu32kQWJPjtPYBeXcD8wrSM5hppA12fneTUR9Y634pJPwCiY",
  "key31": "jCwuqVWmLeXpn6EBCjpUn8y6krbzmmoBzc6QMEgaHrV9KwFyw8uEabBVMWzSrXPMpax4s9Xuxkhn6N8tPYTPQd1",
  "key32": "43eS7U77jRk8AEyfkMDyeCxQHzMurW9CebUUtaerHmxoPU9uQ7rQ211dt8PwkqWGjyUtv4kmvsJHmqAZjUaAmyNM",
  "key33": "mpsQQMedB8hTwj3cwmBZjp62XUxL9gLR7UUd7ruZQWFmphMBXe75DoPu8EYr53pMYs835vVjozgSDCgrT7FsLJN",
  "key34": "3dQhqGW5Z8XFxAhzGDtvPAXcgYBUNAYzqdhm3pVdjjthxY4qMJyTNWwb2dpQegJzg7LzKK1CkNWSqnrmxxyGX4kR",
  "key35": "5z5QY5TFUvaf5WGTYJJS6acBaTVpVgGXYy4YyiTDRKERmKS3Py3CRCpkGAB9xxEnT833MwaTYAR5iDDggJsBKDPm",
  "key36": "4uzJVs1rvrCDCZytUXCwTyDuAtcZGLMPdshvTkVT89kNfVe5D4VaYijJUAseTWLq1oGLbQSXcikGEJcBnH4wMDVe",
  "key37": "3Gh3w6XDskGCkWeckHKQY92DbFRisMCBwjyEYazc3bVdVXbURorhALCrwDLPMVRSxnshj5gF1jvFF9LoTnpmjA2N",
  "key38": "2Yh6Av3ohhMLicwQrDPbRpLfv7qpDyMtYwWTHf3mZz3DL6xmUec3iQMcu2EF2ywYfzktQnf1SMvg5v7dPbx5fRgW",
  "key39": "5vThppxtQtvGU26pkqLRAP8pphd8JpeGe67BSoxzgckLPQohyak9PVNgGdJGuGsps8AV8aFmYpW5G6SsDBCQnUkC",
  "key40": "4RWBeU9g2R78JaW9ST6SokPTNnVm2XSsKptDuxBwuBygDG3pdKAqMKQqGkptq5YEt3nLa6BLqRR5F6eFYmfonRzG",
  "key41": "4uWhobF9u4aWg4MNbYJxi2RPz4tsrcjsnCH5DF7gDkujanQPAjCBEnuV4CSg4uouNVG6vPZJDPi1LbmBUSe5ey21",
  "key42": "peekpswfa4EHnohW7GCtWKxrPVBUvG9BuRic1bX7VNQwTvWCh5a9CVrhfTHxp839Gk1ovsggpfaXefq8GTYLRWH",
  "key43": "4S3s2B1W3NbgTUpgXpBYPwNKrThSJXEkbcMaDgXbjtpLqnv1jwxhS9thepeJovqgBh32ZyZ8vMRg9AppRFDnHsYc",
  "key44": "4mPDquZ3qmR3cRJEnBtEmP3pHH28LHUyC9vZWJGb4mBb1HCTs7QyE6y6cwX34QtehzbPwCppNgNofGnvbJuzLQ5H",
  "key45": "5CA5jqyjSK4KhomgYZVxGeJSMckvFoLh5V16ZHPnE7ZLt7ffWMPbDNYCQNKvRBkhrQ6AoCFFnrvMnbd1RScA66cY",
  "key46": "kgFw4aRR8CCDEZSMAAqJDT64xtsKAFiKhDm2RivKPEhemSGuPNZHTw2yU1yHKCw4B5TNeK8HSkxnfjHUuis5XYW",
  "key47": "5qepmDK4WWkAs5RjS37JBm1FFSNrMAThz5ujvDEpg6iegiCS4paVWgYFEEVKh4yMeRQ1wmwE8DSVgvKYgZenjFkZ",
  "key48": "4aEjqk7LV7WbQqtJCev2mDnqwUsXzJjTNHYrN5L8Gxw5PKJGqtDm7fXXK1SZPJSfCQXhvxP2YdTLKJFKvNT9zRNz",
  "key49": "2R6MfJKuEf9TQH6kePFyDEUX8H9pGrjXiUPSMuCi8pLy43CbPWAmSuEPVTBiNzCbj2TrKpCmkWghb8tExuL3xKjn"
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
