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
    "5hT2AawEpTvxTm61ohWMKFaz4Aj44v69iHYj5pMhsWxNCrvFdkrFmNLR3swikgZFggsm8ThGec6pRa5ZDocs1fPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h92CKrQMXupyYeBvTAdTSrUYvAWaj3oVcHkvDVL3d7e1eZciNf6t5FyVwJ54tAcoRRRg2Ff5617Ec8ZLH4ZZ91Q",
  "key1": "5ygnqKT6K435RepsmDFbLHYcsRozYx5ihPW8AwbbHjNotYVmn8v3jCXvsSox1RQmmtUuGqQdPdv6cXuPoiFRRZBN",
  "key2": "6PbHe6qjJoFRR9qsa2PSCUB8LeBrMViudpL3pt97gedMrYh43n14KTzVrMfFHJ44WVrZTWCNbJGguHNbLSv1DJm",
  "key3": "2Nwp5nV4uGLZdS5W6mzLB2YmuZ9KkJTGtMRdnVWkjhwdXkf1C9Ewuv9Y7fPC29HFffoxLb7nhudYL4gceCrR7bV8",
  "key4": "tw4mo74wpxoTimkJxbrycvQhksjDqoPiwYoFtrZMMVSqsgmFyKae2xYtQYNxTR9jqV9WXQkX5eh8aimgDmams5U",
  "key5": "4RZww5GdE6axC7Yd6LCkfv9YZCNWuDGi9aKtGy9VSVeFYCsF1m9cFnsD4aWnaqcjpaArnU51zsVnEzMjbbzMWSRm",
  "key6": "Svndo3ERMeFyhutakeWyMShZiocdh1Fg2u8EV1PwHePezyVBCKETmXuPXcHdHH6UvarhZ4iULnJj3Y1Nijc22LU",
  "key7": "2pWRKzQqs4niF49KsoaWgB9RpKtvUc3BMrDWEsvJoc3WR8uxQdaMpSv56tdZLaUzwA2ofQ7ER2cGg4pdhpTZDv28",
  "key8": "4sRvRg7n7VmVoxmMxceTAjcAhqENcmZ3gKZytaSS7EYUPxjg9BE3qXWdsXdSUXE8phQ8JiF8vh5reqfjKqhaNJdP",
  "key9": "gUHeCsvFW6BnyK63AFj1VqVeKBk1vfZp96sRNw6WXEFWbRgtvvS9sUMVgmSDEyV9MV45y9TkGhicz2zXhmMrsND",
  "key10": "5XtYvHqpQs9EHYDuFiP2Q6ukMDeFfwzpvYFVknR5t9oX7KEMRZAJ24gCBYwH1VjqvFn9g6qTxtc1gc7DNPYhVuAW",
  "key11": "5WkLWoQj222Q74d7ymrRsGKgBpkm2xpQRcs8uuJV4AYrCuUh8y7qcyz1dQj3iftkcZhhr8gb9UBp3VF7sim6A5je",
  "key12": "5TbkKz7FC5ZAW1z5zkNnT1zLAtYJe94GVXxjdk2pX9gvdYWCHENqYYqKBFQ5YhupaMqCDkmdDyyHXSuq7HZjvAt1",
  "key13": "3Ytw19ZRT6mD4nUV1K7nDjaHs1PC6wYdsbgSehQ2ceG6hGBuPQiLiRPqiY136b3QWqgQ5rLUnALggzEAamzLRyR8",
  "key14": "5jJXQKqabpPXHeFWDiG2CXWfNc9RBKDZL5B2xN2AWpWLWAChQ7YGq8DLGNWTT5SVVLSk3cQo3SGzne5D4eaR2Prg",
  "key15": "3pdZVtwiPayLM6kdiJ7V2cDWMy69htNm4LUPMPVzdiPKKMAJyq7E7WL8PNLFAZinN6F5vRoTtYQs9vFohcsTCDRc",
  "key16": "7TLbDjbCj7AHB5VPXp4YPMZZqTSfsk4NF2jLw5uZZmNJiXSB8Tii5NNiinnsGJxvp5KwNXmy2rLPKxSq27v3wbh",
  "key17": "9gFb7Ehn3CKTSkPpyScdgBeUot6gxv3Y1rdd3Rpn89RamAefyP8SmdaB4j1AJjQnYfdft5aBqp57TTVPkwPUCit",
  "key18": "653SCLT9FLXB2vDz3LCvL7aktFL1uUSs3ZLc9oTfmJDPhUHtS2kzzmzxJpFz6EyPX1ys57xPeDqrkmZG1c9xvmtt",
  "key19": "gfEikM1gaZdHJEj9PbVpcJnTrbLyu1euYCuUJpkCcKJWjZvXgmuiustqTRrVW4zwvnDS9uB5uw31GN5kbUu7Yki",
  "key20": "62mFNj3HiYPaH3yaRPwnRVX4XmTTMu7dmu5NegS88tHdWuBVuWuFEAxmYD9P9NcA57jiWdxpLkdf8CprzcFKaFCu",
  "key21": "zH4CjrbDttw3ZuKbiJHzGc1ycvsVURC1ihKWHe47z6Gnwfz1iCrQD6eUZJVdbBgq9dRvEEv5iG1VUHieHpiGeV4",
  "key22": "M8fEVkKUfZRQK1iGUKF8Sgs3FiPFS6nmbBhdoJwsAqEQLLANpcznqxdsSECnHVrjVeY67Y1KUuk8spQ3ppXQbgf",
  "key23": "3ixvv8q3hxw38VN2SvfkQSrfxniwbSHJpdfcY4rWat8xkBtGd64zJdW9T9pfPxX9ur5Ec9z6qcoyCXmvNAFnUb9a",
  "key24": "LaSJ4SHrb6s7HMCPnEZB3Uyd7PJw7b6pyBT3WFCMWDPnQJeuYhMn46fsWsCwW5gnFzdbURVyqNFazE3wQgD1zYB",
  "key25": "4bQokeCEhCWGfyGQSA6FdW4MhizdUGb7eGw62bhr8wGMS5f6gT3hBjkMpc7omtsSNy2KxwzEguhBxWp5QjDGLNru",
  "key26": "4m5rMnC3RKjeDHyMr3pc4rLGe5niXxzajVRXmECpSS1SLQ9nvsEBwNQzb7QkYPdZL6CJSf4Sbo3C9JD4jDW5zhzv",
  "key27": "5ymYu7RXfN9aew9E33m67tSMZqovfaTfDPfQ4tq1sZ7XqrjvTwBFtG6zkfqSUFYHEBLbYTj5dLM7LaPMbvVigesR",
  "key28": "58n6qiyX4mXySMaZxwUm2aLTS3RAYuSHa8FVU48bkkBBAGwekbbmwryjQZbwtrTbXbXdWAHEABLAzzfrbA1mCnMM",
  "key29": "433QPNHEzn2ZkU2WQ4wcSurHHfqo236WY818gLcddhAujrsVqrkKFRN4EuC97LtsJyV6DBXjKgBAwxGZ7cyuqovE",
  "key30": "3HtG4vSSaefQfA7nGAomdFwhsxwjFitNmKArgGf8pkd1eckKRNzAk4ozoRAaAkbtqKWeKAUjHq9V7epW71ZWhTa1",
  "key31": "5VZTPwJKjpEJNKVHNmHVbfsPqe8XPuicsAYRTuZWmjfXYaeewNXt1LPxfrTWXxRgYTi3Yek7i7c1oG9RsfRY5P4A",
  "key32": "5VsXXrfhuYVzGQ2A6cvCsw3u2LruS38gMhe8vABRN7eaosZfjRrQ97nV9geb8PuWhZzQFbVPPh1eXvZE3vwgSjcE",
  "key33": "3SZ312mbwEXpGeRjddp8hGNs6kGKyAaojpsUPasrowz8etrL96FpGbAaTHRaBXfc4XjHPyMBgpCxmTaqUAkaM1yp",
  "key34": "2LAgE2hwYtBx65Y1Lv33HVF3AwuGzjzGMuK2ntv6FhWawq3PfS1vKsiVq96Y42X4EYHXEBjBeFNhV4ZEkAEi8jbb",
  "key35": "LtXJ9pHNu5n4doC9kEm8hnnFFBrjVsr7PrqdLrttayi3U4wKHL8pxHJTTYvxNM4wm4BGkxrmLdSpdbUmbVRFQL7",
  "key36": "ijXA4DbJfuj5CmKtaKGjim5hr1k7BTrMuMJ5y2bEJNZFGxAdvWZPCTdWDGfCYqeNAYL1YNC8AaJjteYUNi18hEU",
  "key37": "2YRvEsy1Gp9i5ANGneSJsRBA3g8Dxdg1rjtzvNYqEWg5GqZB2iaQvZPTP1tTc18WpUrnGk5wY6Do48tp4gfKAXuD",
  "key38": "4qdZuKt6ndW6CV3BaddkxJPXdjNKNjCvJ1neVpAFfmZpvXHaRowF7BA1pEB8mFkyU8ngGd1CvB3VPJBoGkJYzRgJ",
  "key39": "2mrdBnZyo9JaWoAstoz96CX2p7YuVDYTWw4v1TqVn73CiLoHtxFJWrgLXCX1FcLHRwQVGYy7VjkGJurdRj9Lrex8",
  "key40": "2QciMky268KW9KfD4f9F7XpEAFydEFsY5wMcmJu2g3NQbELrMgodf1cHocCugcDaq297JQEZVBho39dZTskxL7Go",
  "key41": "41N6notzUxRCdstqv8jtYEnm6f7qtYRoVQysJSKyyUTvjA38CZGGj5oqcSeEi4woQTg6u6actT2orTXEzDnxppxR",
  "key42": "3uhFsd5QbT9CZWNeSxt5VwSaTEAjac1Mfg6azEaqhuP1M48YXLozySzC4ZMYHxVTMZZ3ZpFb6umVM3S1uHgtRvur",
  "key43": "3WusBMXNeFRzTsnhNWwmDct1AgASaFx9C53kis2ydkfnvdiCLw18VTG2tc3jMZdivAvukJu5mSHyZBWY4XddHBH6",
  "key44": "2RgApr2NF2a3zhmKTKxgtp5LJ4C7RwbYjnuhpwNAuVMW6hxGtFbP5yvKjJxjUSfv6k2TcVmCGfTcDKx1iv4feFy9",
  "key45": "7ZRc4vtXYJcQtCwjYqhdybGYjndAcL5rBDiFjmVb6BtL7Y3PaZycDnYj1F6zbWRVwn9BHPfgYJR3iEdD7oTK14g",
  "key46": "4VXWw1uvqyZhSn3tFcpY18kFsAwchcYX2BQ5Xpt8KwQ1JizgELXY1rWUACsqa46GiAmFEyBEW1jQvS7sAapbrMf4",
  "key47": "4Yksiaots9NQdgjbuCxgJTg6ErVzDgVjfonDb3rwKKWsZB3AfT489cY77Ef34BYxWqjTtNoTEjvSfijGfqWJeumJ"
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
