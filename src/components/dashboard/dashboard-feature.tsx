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
    "51k5ERMn8z4RZwh3LDeavAuFTGQiggGtiShFXhhTjjB9ACAfqcsgJhgu2qVi4MDqJL32LB4J8W2zkNs7dbJNucMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XF1nvCNxDjfx7fcahNCF7hydyxBWTTJCcdsXSyXFXawGrXqi8nqEj5zw4tW87zBbT6DvqSy9D96K3rAxq2zZjD",
  "key1": "NKB5HJkcWGX98AafARyMHLhhc5XAT5q2tphCFfc8jDPjAVuJfe7acGHaitdPBeVgBKM27Kp2z8qbFRHMeH6SgL7",
  "key2": "2P8tuYVAfRxnwnMGCYs1ubUjRXjvC8K1K8jdPJW7eUaZ3ow5NTVi8FimXj3TCgjFLKW2KDJcP2uZYitW2Uz8eTkK",
  "key3": "3zGsB4ojNcNn8D6nxnxYsAouso8aumqBG5uHxAu1BpaE4PeHwhmBTD1T2GqvDE6jWR1wUG7ySZKrVuhSiZHqg6qj",
  "key4": "2apRNNJu9XH3hczD6EktiUKe224P7Wg2r6Ut4juvTFcWMBhXW44E8ZjLrneNx1SGXxsJ58AeDBWHh9QjB7teGxTt",
  "key5": "67BtEvQNS4HK5CpnivcSTaEj6s8WBsKKoqyDTUovjS483T94MW2Rf2hjoCndhm8inxME4ys2pAHdFvZQfNZKrVcX",
  "key6": "57gkEyjR5iWoJ8egEmNd9v4esQNWfTStvVamSjTZ6zBVzA6tVbXfxGLghExFUp8oQPjfAm4L815JEnzTavhchTKA",
  "key7": "2aoUtpMFTx1HivHYiWJQ5vNPwsDr1f1KdqTj9ZB1n5CBdnxMnupHUQprYXbLq8CAESwH7Y7aG6XryLciqXZHe6WC",
  "key8": "juwC7gyvvfYZDqvdAQpNAeQMn1LHZ5JGAimvH5LVpXDvkKh5DM4gtxe9pDRzzKMM6Tb1QSv6dfQQQbhNznNjf9U",
  "key9": "oPsXFMyy98cYLVzHPfLG4tCVm5kssGAWAytbMKccePMgtB2Cji5SDMoFJ6TB2vvJEL6k6G3FHGVVPRMUBY1tzFL",
  "key10": "5WHcNoXpFgy8P5k3Ww4qoPikb5BnSxLf4S4Gs4gqstC8L1m8PkMVfSW4TCW8QSNZYb5Mb5TAeyxMN6QMgDUvMiXc",
  "key11": "36tRupDWCMdq6d1X8gwxX8NMWigsMse8dbmqfyZovPGRCkLs1ZgLKXV3y1BStWJngcPGTsaB6qfvcgtnvaef1y6t",
  "key12": "KviqVHgjitdKPDdtEnBeMKJReaZtN8n1bodPVLkBrMEYzSWgZCaZm2EVDLcbg9WFKriaMUoX8ciG2S33xxB6aJK",
  "key13": "5xRRZbp3ShG6ico4KNMD8WniEikRkJ5gLvJkratSAnwMc2pStMAYV1evKUVzQtJi14ySbdii7cs4SnjMQTW42fDF",
  "key14": "5ygBKXYu11DKVvAj3cZYcdvtYKVpE83LZHqsfPLJjy37jJ9WwXCfknUMpMUZXQeAn4TGhPc6M8tkH1aiXBVnpbNF",
  "key15": "5xJeapXtZW6ickhtWNaHLh7dni9R6zwU6Y31T6Ko6VvNcodj9cU9aPJzjAZJNEsmPnADT4hCaM685Crue6N6Dwgy",
  "key16": "2x6uCCi79ARfzmFmHTSn2Gvnat99V5Rnt84nC6FKomCo3uJxAiYaqUNV9yGwipe7jyP4VVuA3MCxEEHMXYxVjfmd",
  "key17": "9M2r57WdPfa98aoxJk3Tz7m9iWtnncjKvZPeT3bT3wxt32X4XfsSctmrKp19bG1kFg6UXpUc7WpzfwC2KaCGKmr",
  "key18": "2t2NmC2qhV4d7SrnHCyxGvS41c8hc2u4ccwAmpRgtwJq6jCkqxkpnEBvxCZKbgnpss2eLtGLNRviB9wPMHyHV873",
  "key19": "2a7BRER4igp8DdgV4oNaBFwfp2fUDNPE4Emzu5rGAUfvnU5kHfww6GJ2owXob3okBxes9hYenFSQsfNe1eeq6fJ8",
  "key20": "gsjo2QBHB1u48RBtRJXEfJHfLPUTXLqdNE6zridKwdPYeVVUkhnvmxt8Yok26zfWZSaDFmtLqhWp4dWgTvueLzE",
  "key21": "2ehyrqt81tc8Aw3S6RpAMTGZv5zBmH27aPtut7mR7tJZJR4WZT3DSYVagXpQgXyKC2KiPUoXg9XtbDFPux2Esmbx",
  "key22": "66hbzYVjZid2buiF4HvJvf2rjgFfgfbsD5GeXtfUsuCdXDPBPs5NAifLtkmifhQiJqc1fMpHVKBUiFKsJTpcpbec",
  "key23": "377PoDqU1DDhRNBXbLQSdM2n7FTiSKdnkuEbJaAb34L1j5NXpDFhAKsPFfL6iCCFYfdeRzz9pgJgcUenxnV8X2RJ",
  "key24": "qbWv7AiHimEuuhGJ5owNQ3J7opwHHjMzqBhrgcuTcTAGQJoT6HKLHM35R7uYxmsvDomz4D8NmqtgwMcSTRjqoA9",
  "key25": "2U2X9pq3cai6fPiaKir2gy81sSgEdcevLH3W6qxGNxbDCHEYLrdUsfuLdnzgQswzroCQmrJX8aMvDwductCvPmp3",
  "key26": "2XdofDQuXwTEHfHmREx6L1sd2LaxMSzwq71E3BPzqiqmTb26vWBNdCuhRuhFTUbThgbaM2i6qW57i26ZNeUXWvSP",
  "key27": "2VDquLNbK5gx6MEeKooYaoAYLdC5RpzLsVubms57JYNyKKxfhK1M1bmnT1z8pNtdvv8Lj6FDXWcCHuaC3iKe9ZRK",
  "key28": "3tY2TbnghP7MrB6EBWRGmQ5B5qKF1vCXyYyirurU1SPoPqzDEoBJtbuApf5DUvNfgaQwpmBRbaFtT6SPyRiaa6st",
  "key29": "4jasUPTU6G6EodaMsXgkyWFz8FAcnH3dLaGaxiRtmmgXGYcSaCn2zvHi3CDKPjE9CDp86wrxaebZ46LLQiavnnk8",
  "key30": "3vLdczPh6G5cJk6XvwwqHD7vH6JWJ7tafsW6x6yrpX4WX9ccKUzHvtfZDLcAjkQBdHuZNu3mtVEgdAYrmsmHYx4X",
  "key31": "2HsQYMRnqS6XtDP4sg1DBoWTtEHWnxbL9gq4iDNGL6xY6k47udTzYh4Qo7shgfxtY9KHZH7Vi7tVJNcuHPhLwygF",
  "key32": "iZ9hAdM3CMGEoAKc7vdEFJEqnTagZHQKt12Lu6cXC4EFyz1LXoKAVoqtkHzZYSz69tc3dUfUF4szYghrqPXEhhN",
  "key33": "4WrdhMYqDpHNi8axohk2VsnnrRSgJixDddcmgH76MisY1QUak71KPMkr3uQU1AF2jyDgBdvXyL8QzW43UfHcuLE1",
  "key34": "3ca8SLxQxZniCHEq2YDdyDTXJQL6tzzmQces7kmwDAFaaQLAzZqZyYwYyg7AdsBeJkM7bwZzhwYjvzn1PhbSgntz",
  "key35": "2TJPyeTEv1zNG3y2jVHNzp99jYs5XeoPFF2D3WZiqiErbFTfgq2cHnTpNvAB7AbmufPqgxfV9HfHrdqcVU1DQeBa",
  "key36": "4QjXYAsrarT7M6XzRdc3Az57DMHRLwsScVNuNcZyqnELTJNc3HC4pZSQaQvadLKfHYGMywq2hq4sQ2Vv78PvWf76",
  "key37": "28fSYgPLMTZWEpA489M9nmuTUnujhshVcg3o6ayCqJGL6sLk2dGxrx9vrVBhZ3FrTbsPtVBvUzktyoz8QLWsh6eV",
  "key38": "42TjZLzQbRr5q6Qff29wB2yTQMCp1Ciyvbpat7EDTxJQviWN6u5RgTzYjEtyczFmZ8FSS88AbFBpYatZbyUr942A",
  "key39": "3RpkbSAB95goYBT9UsVDvewiisuaNwMBvJDWvtoCtpsznS9NDpxdyAgTHUd9XAybDxsrcd2jnkG4V31hr6YS4EQh",
  "key40": "4bn98Ueb4ecb5j5tpJvj3bUBMGytpU8U9ooZJrsoLsmvk9mZLk17Jrip9HvHvZ3knXwHoAZxPggCoUp484UAA19u",
  "key41": "3r9QgTzfZsY1di7fiKRE3jm525XCYH2iFrGeE8hicRGbM5eWubKhKudvBb6FbXpDC2RdvdDos6SiHPttDJwef6zX",
  "key42": "3vm2NTY9Stkbr5Anjj7gvDdvpxZ78HRA1HRB7ZG4mhqnYbbaWFRp1nLsumQY95S3jkx7Tnx2mtUHDSyJg6yy7PHk",
  "key43": "67NjeBuydjG9T3NuBQqtKmTA81p4wHigLwXXVxbcNSAizX7GhRekBQbrefiH5dvzyYQydmjbEmoqY31RwFCApyuE",
  "key44": "5akEt6xV6DLx7sZ1RHeWpaPoPFte6X7FS8kVShSDs2PZZ3A7A2Wd1BkjkJSpHzRSbgPCDEHoAvg4nkANP5iePTU1",
  "key45": "5BxD9ysGpWk2cGF8X1GTkLG547KA6Cq5ucdgSNBJjugBjubWkJ5QP9jrE8XU7dbXRcWtJYJXnRzBRmKHqfffbatb",
  "key46": "p83pTuo7f4nw7XaHudcqVmEWG5NGUM9czWudXBzmcz98cz18N1T7vUfVLCphFmRX6HyrkNGANGiUEEJGuL2uQGg",
  "key47": "29h4BCCjFGQys2MKYMYpYPY8GzKovstjtLPyg5xtcrzmJR6EKHrtvFBX1XRQivupQba2RG8sDTwCxzDGajhD9N5N",
  "key48": "49r5bnETLrDP9tWhq5jqWyAi8msYUd6a8rnHvbdMjjtgFS3WCj4dYDVUZ6cFNsCaJ7jjmQKK8wNyYfpn2Hkok18w",
  "key49": "ZYHaCnBRZaEAZ27VYmvPrYkVsrRXkUhwtWD22hJFd2z2aVot8PSFuYHymyLkTNWQTdGz44f2b2T1wCaYvuQvECY"
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
