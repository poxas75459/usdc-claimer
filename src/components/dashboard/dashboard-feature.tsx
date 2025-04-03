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
    "2xddQqQs6yPitExNx3yrGztvNL29mAkD5J9WCGFs4vgu9etzGVRgNzwfaUQR8ws1cdCP9ErRwUrSemve4DqRrjZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6o4cZAe1iYSabFk7JJxU4tByeMeSW19fDhjAKN259Zk8HUQoB2SvhUkBSwx5yfGhBDDas2eUME3TJYCNwyc1Uq",
  "key1": "29q5CcjF1CurWR2EjbVwjw2QfCtYzutiJApnzMbR7gYbzHqkv2efpBu68EjLVvHLbAvKjArgLVEiayHPJebvH55E",
  "key2": "4cvibtEEyr9NyBZNPARtdcvLBda45BjTGFa5TgG5GdYQQJ6pY373kzdB8abT8fu51mwdpFYAFVQz1KEyheuZQpir",
  "key3": "4jtMVWiPCY8CVN5tdUzXRKgZKej8on6zBDhG8zmmXE3hfjAE7pACthdTJReWVvq6mERjUHK1pF848oVU51i7bs8Y",
  "key4": "3U1BDUhxdv8eCZekoJA8kz2XvHdt8rqHarwinjw6ZjJqySpXSUfPX6a1QxxZqkWQvV6RXJV9bjFDKEwXm8xV5bua",
  "key5": "2ZDFTE3fbCDfLQTtXmB1sznhBSM6NUB1diqEJWZXMfqmTaTqDVpVYiYzW2o3qAc7FZiigT12PVRCaUYysTWSS1oS",
  "key6": "5h6ts3mnjyCdbsWHBL9YFyfoyc7TjR8bZXiq3eBLH279tNV5jWB2uq5ePUfcYQ8PT6aKroEvUef813FCtsMdupzX",
  "key7": "4y4L4cnAxoA5dPq4H4L9FYggdv6xHpg4Bj5xGu9rXJkJcgS9LQEHuywLHyLhAAeqnvM4NdfJ6vy5PrVBa3NCDY5u",
  "key8": "3B5BH1bEvREnAGnTphogP12RbauftPidbnayZz4F9PjHG44fzWqpeTQe2UZGTdbU3QvJVo1dEFjfghRxBNcR7HVw",
  "key9": "5oVjR1LBPYHrZvwW4gXkpd3NhdDTifN2ebtMCiXYkaju3T6WRUGFALN1RdPtoMyvTvfyuhpYdWEzywAp8Z7xCZdq",
  "key10": "4295HTRoMhnZnturRNT29h9psyXtsnJbZ11u2quLdQV3uGL7KM8ZgH2sQYsAaB1jDXtxg2ZDMtsehPkXJYh6nTcs",
  "key11": "ahoGkbkqy7CCMhvsHELhDxkM6vS5rgGVQzuyKkNbebaPw2bgjexmwCtSguk2zE6JtESiKxR1y7QAWpDErdieKaQ",
  "key12": "5jNWfWRza1DJUhjeyw4z5eSfafCEBzbsVcUX2nqXMbS85jVwh2xxHQCtDpZ7zWA6HmcrTwQkNi1JLPT5ALhe69Gm",
  "key13": "564w9nAVYEgd6He5sGp78bcxQk4vf6iDz5XCrtCeTn8w1zqi6t6YjzM2Kpv61ctZaqyb6nQqEG978cjwCWdu1FDG",
  "key14": "238NBBtFiRKs6oJfxWd9KgfizGMXZyKizFFymFkMVS6q5CBKPCgBu71ptquBWmoMwJuHX5YMngxpaZaXrMtVTCjd",
  "key15": "3CfaRR2VftXiwQwLsHimEW9a1LHiQJydjcyHrNM6na6ipSzopL3jksst9wmXfiYCMTpyC22hiQvNmxBBqkghm52g",
  "key16": "sLtRSUVMHcTTMVoKg6Lh5k6eHtKtiuQkdywDAjewJbqJMfJdFcLwei4z9BGxEXkKzjq5YwPf3haVQpGGSgAVy2u",
  "key17": "3whcDXnpRVVBGtNJc2qMFouD1Aksq73AJTYhFcusar7SRSssywE2JSjm9aEgMXBVeAEH899uK9ZzM6EAxmoxxnYt",
  "key18": "21UbxyMR4SCkN3ddd4LasTciSTR7RZ9CBUeyT4X1kJHbWdfFN3D4r3jq6DCE4HhqV9MpC94DCxx2dBZxz3zGKEpL",
  "key19": "enimDq2snjgFwMiALZFww25aPDwq6vFZxuA3aHCjyxvfe32NHZ6KhdE4grfvaVUJakzVzgLDYsqttVEPk8Goi2L",
  "key20": "5Q9or1YVxaVYQpCuAht3pyUfkwJUGjM3g4GxKW32DRHUdVCJNzWBwUdz7soucLxFo2aAxyXWZA7kt5sTA5EJHXAt",
  "key21": "3thXfCzqLgmfjYZt5mvvQPR5DjpZPsuDcPmnu8gVRnHPKMyAauiXgid52d5eov8ChwuacbnNkRChRSqaZjj4VPvH",
  "key22": "mvMsQa8GeeZ5RhJhZGC4n3SLx7wnWKPWWSE7fcHGCH1Y6Dss7XwiVVd1eznEy1WPsRMom9QMr7XfWSFtx3tt5qr",
  "key23": "4my5igQ4tgoB25RzykdPDycLsY1tD94xVdUUgRRyXxf3LLv48iaQQ7EhqEaTvyteBPki3ZUysK9fJSSkzNAjGos6",
  "key24": "3mDN4mcAa4vdjpVmEeaVbFrT7ufnF5Du9MSkd4YZYsTV6Ao7tMaFHuStz1o4J45rYGq8iAikL1gHyg1mXvqYRYvw",
  "key25": "vPf3LXUTGiWgy5cfFmnAhQuQyyyvzdySSAc5D6nqUmCCgvFoZjUrgGTmYcf2aNGGUa3wBRW7eZ4TPKKhmTx57Zv",
  "key26": "3ugrF8C1z42GwKY8PQNX43Nvx6n6NnVwbq312GDNRAe99hmQfm37D8cR8b7Gpmoqvwwg4KNyFU5YCScuWB5hLi18",
  "key27": "3ZDTPREQjAuHTDrt2TeannfUt1F5otWio7QRXZ58XEX5cDmr2qfUZ1gjxoFqP2fcbyL9dAsMomXnPRXfiQsLREHv",
  "key28": "3caCExnpqWN8WGyJobUkmbePcpFGFznDukW9AyyBnC4ovq4abj5QFH2PQcW6KHnfx6w57YiTazmW8DmnA2hf4d2A",
  "key29": "4RY6fxcPB4715qFNGQeenP2zo8gyMjp7sh4ZCuJiqfy58bU57mBrC5zBJgKMfmkq7U2KUDWm1zHGzXiT52ARVnAU",
  "key30": "mzQTvQ48qwoN9RNs9zhvHWKWjLcBmrrdbVYbdgBZhHYYEqfdMxw78yAaDegytX2NqSWYKD4p5AZue1dGo7AVFtK",
  "key31": "2gDULaScjYrzY1GccdtgyVtK2yig5WESzhKvV6d9E9HTBxaRNv9L7kQRPAUdCZjZo1ACFgK9NAU7pExghuggCEdv",
  "key32": "2dcM8q5uN2YAnPJUJLP1cURw1AarAbEDprYNXonUTXJM6L8Cw3z8tnAwSbVVH81eEha5RtmfVY2DTFjBUwPWE3uC",
  "key33": "3Dm3LUmDBsRWhw4FAD2gVBApMS8ntyTqibMTRNxCfGZUTLw6KvF9E35MgsDKBHYU4veGT79VWjULUv9w5AJdjwvs",
  "key34": "58kgSPxPqXF9pckJA4UpbJT9PjiZ7pZNrtkYhq2SUM4x6bRBtrsau1NzhsJZ3uoPB732kjuqNp3y9g3t63RKTwwj",
  "key35": "3rBs1n31GXpCrRyY9u5nc7Jm6pYEUiMuKKuwJ22tDK3QhxunTHKEtd4PAbd5TdWQ2Jy9G2SpiG3AxXUQt815JpWi",
  "key36": "2cRZqJbftsgUnZ1nwJqvgiFwVhSB5PJxT1fSk8DrpQicsUNcC39psQqudo7JwGXRFjLGPiHazxGmEioqS9spMxvN",
  "key37": "dAdbVJnZBTqyqYQc7zM3j2BTHERFbx1Y1wfuHHxxxzb6eFqSF52xhQcmU765DzHTCPy5wH67qrDzECtqVCZDgHL",
  "key38": "2bxN5HUZPz9A5oPPm38zsXVi35zL2N2wFkcazBCn9aMnieFiT6tpBZmN9nAquDZMACyL9GDK3znsy1miCgA91xXS",
  "key39": "3wvvQbuVLsjwFXu1u6QRSdEkPamcQeSFRBnpdFxjRoMS5iwPYCPL3WaTc619xTi3kp1CXvCQzV4ybfVWBLHE6Yye",
  "key40": "44R6E6bmh9GVjCauRNSgtPZtsfK7dAgxuaEfauCYZQkXgR55tyLb3T2fVe6jdkfntpMPeMmxAstiCoSZKNzUZ72b",
  "key41": "7YSedK6zYTZyQSeqXrcPfugCsT3uVCkQXdyEmSPNW5WGAjXetNC5u5dwm5zNpxL4e9rdViE6sE5WmocbJh9cmka",
  "key42": "5h8RVaG5Fam7DqhyJucR4KprmHreS6XozC31Wff69pnnt7oVwGwXmrn7zcnJR4UPrvF5LAk77su5ZirT1Px2ryT2",
  "key43": "4ad1Q4BsXNQB3Sx98zbT9L7HPZkA8KKYmy2ozCybVscyMykBbm4rPLyzUTF45PwShbtzJgVg29h8NQJfCDNmRDXv",
  "key44": "3FbzUxQ116wBaPZd7V73Xh3DvNNgcth4RouwkLErdJRCfnWSBoXMmGSAtGYAabQcrJBmYH4C8ZZdiuN9r8XiSocU",
  "key45": "2cLMV84KCwr9g3VjJQyUPVbzzfu16m2Lfox24n89K3QpJySNrBnxXQwd6BdYBDjtjHQtfkATEmdKdWs5umivzUhS",
  "key46": "4Ee6kxxC1WFj2L7FkYnmjfhjggAEB8412ZeVf7guT3su1dubftZNd8FVnfzp8PZswvn85vedooArZW23SbFrAn9E"
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
