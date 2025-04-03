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
    "3EQNt9TjRnRXTadyzWF4f3wgHQavRxMhMbzvVDNXqRZCoVrXYTimV3t9RaHxRCQ9jtJuNXtCN2ccK8uc2Fi3AoVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v94NwQmUqLUzFs8hCPQtanbMCCWciqwBqhRcqFTpK7YC1yF2Mmi2wpZAdm9RrPn23XHLn9ECboo3NnmCsPez36m",
  "key1": "2Te4PfVUSU326c2cdkP2sdgGnt8G3TYa96y9hJx8BeY5AuaL9FxVKvySiedyxzYXgACyqjVNodFUxSqYrUMQFrta",
  "key2": "52phwb8iyfRPXwufDdKhxgJsfbGpnTrzB6AaWNAHkk4V95oL19FiNagEupFyK7fSPTt43ykhCBp2mHvgHELxfivP",
  "key3": "389tZw76KCNgFeEz6kGpGLGvqBbEZVY9aRjbVvhvC8Y6ZUxxMyTLSXEqR9353tw9xKPyUgM7RFDf6r1GbmhXb79J",
  "key4": "UzBnQBfX2T87zsLdm8W8eXUTpZbSbZBihMs3CdqmpxxHwVBC4YxtFRSuyBXwWwormSgvkWcVcFmQhMGdor2wdT4",
  "key5": "3vWrcYCXozwizajyAWZgr3UsV5vQoDsRurH3zoe155fNAbFZxWFfKrBJnYvHmdnJN22KZiCVJzoNUrPmCje2qo4T",
  "key6": "1g18jwGjupPojktbCVQJR1Ccf3TiGrV7VLJ5afWpAtvAym3HX9MZwFgK6z7PQrqkDDNWcBrkNMaemoEs5oyyrfY",
  "key7": "55JNoufdYE9YewMSdZshURwZUcg8pQDukeB9SgJkD1DPJGT5pKpfRQ94gF3Q91uS9bozMZykHenGPxD79pFEkX4K",
  "key8": "23NojTxuTcEcTfMM9bTUtZ2MfcdVXWZ2U7HG5gD42NmnVNwH1iYr9FU4Z3d6cux7pW16d3M2dPz45n8s7entxFnV",
  "key9": "znqeLLQVpbY9SeoCL8YNDPTuQNZBdhKD89SbfCNzCZ83WrMTqfiyoXtVUDregS2QeE8TQBbxDM5ntC3DxJr3Lgm",
  "key10": "4FjyCV7roPiCTtzEgVgWfZJLCJ2cJtJYUh1Hnhhy5rvj613KGB5twPdQDhCBWCg8FCo14BFLrGWhnPEG6CgeWEvQ",
  "key11": "5G8fjSStPj7rY47yZVi3hT4kx2Kk5FguYHCC4F68E1cgGi2Vz9FFtQPv811JieKmtTV7EFDrE1yLFNxoBuXZzugE",
  "key12": "3wNxqL8dgvU8Yk6n1dXvEynALpbV5qM3HiwEr7dD6piBhfZmJ3xQEs9H625oUaGXzv1HLPRzxGjagDEwoonm2qTW",
  "key13": "58nw1FrMz85YSrVs5Zc3WonW2SCXn4JAWoaMNBhkZXZ5vP9HeTVo4CHnSUJz4DvzLLP4wKCmPqkr1WopWMSndVfh",
  "key14": "23AEy8PKndNQwJgvsBa6HZHooHvtHRMpJVb6yQPeogtVgvHbpbRPMreygCiaSNYiGdh5txaFPksmcsi7L4FxDrq9",
  "key15": "qe5ugDgDWx4f3f3ccLqcV6mDwynSXksFo4KEGfxKEzUBeMb7A1maeBCSciaoFuiqp4TNSghr7Y5Zp5aDeBYK5ho",
  "key16": "2fUJjC7vr9vXcfdbsWW8WaZnoSp9HqL8UFtkfsVfe7Vfj5ez5iHiazUBv5o45DY6QVpaonALX9GHDoCtAG5XvYMR",
  "key17": "4Com7kGeMD6Yhhbi8Bqtfmqy8Lu4L1KoJGZDzLdtiYapxwCLboZ5cgFHZNXR3tLzg4ogD4GFbe48L1DEuZ2JVuMz",
  "key18": "5esiJvLekbV2JAekCBNcpWK3tj28iujiKezCAhCkBPPwcZT9b6x7QTTMNLqCwQah1ptA3VNFk8qr5e9Bgzc78LFa",
  "key19": "5P2jPtj2YYqJFgYhbV4vMvzDSM5XYzeqP1YFzwaJKpJNJwVnCo1R988RgAt2NTuurkB3g7YTDJJbLupbNqCnbRAS",
  "key20": "39d6JNW5kEqdgmw8ah269UwoR2wP2p6JT3mXBDaJnL979M46tjFfVwPcd5G12ZxizvudJqLtU3PwJuqzXNPGPjwF",
  "key21": "4J7KyK4jmoLhz5svvXxj18PARZGncvUaEGXqk9633xpPzZMgyxn4UkPM6DFUxhLcn5P7xLXK1s1VoNzxkgJSAqFN",
  "key22": "2jcYTHE8VTNHRwu23yDJUwC2bpjekTUXqEcLfEYntHUkVQxpmngRbEyYAYMiDFTB8TpGXrEerbLXEsGAvo4k9rzY",
  "key23": "4aNDL528t7iF6Ap7zmPHWNoa5iQzDrNzjAGdtWZ24SK4pHVsbvEZVu9bQQh5GH2i2aMPnGMeGxEuQpUxESyoWTtw",
  "key24": "2kWwaP1nUcWdBtpUtXSA8AmT592bkfiHtKM4h7ArUzt88B5j3XeawK8d7YNt7YsTZrchcAhtKid9UhQoGZx3vHsz",
  "key25": "4pWQWEF9yN5npuYPUDyyoTHasi3PaskDeaxr3t1Kmr6EwdmDZwgWD1k738bxPd6G3avWZrXmbwkMtFTTmBForH4i",
  "key26": "5LiSqgMVyg4YGGMzLQBQNKQrgiApmh85nTby5iFf7mfWqcQHJpytUtjfjBdhGocXGhHAy1s2Byhi1BxKb8z5geLV",
  "key27": "5GTpbGHy7HRgHezBoadCeRjAsxkABBz4j8v9v1yA7MW9DoPiAChRSGBxgJi1gKJFdw1Rrj5KzukifdYGu6BdEwct",
  "key28": "3Yk13GFQ2RvPcpksAjaZrcpmsCmG8vJhjLr7uADx2huwmPjc1xwrtw2JvYr8SLJLBoi8KXeq5NCi4iHb6LuSst2V",
  "key29": "5D51Taippn2m5V5PzSekcuJ5AgMrjHcT76xkkiGNCj2ieoRAXdrNdentkM8vqoJmdHBBtz3taDGPbHBfrFBVKTns",
  "key30": "3cG8CQHgBYyNtzreZgCR62UoE8gY7yEEnTVaoh8qBamaLAwrkHt1gSkzQ96yrHXhHmeqRhaB37UAaP8PSGjykq6h",
  "key31": "62n4ngGBnf7fASsYCp669eh8yt1cnbtZer7N1cxavEpZLbhwJEW53mKVjMSbstfDvMfRTRrEbQZvXvpgHy4Unu9j",
  "key32": "2kurtcJ9y1ikhmgwDi9fZ9dLWn1Gm5Yd6QVfVGt84Kch4m1hNRvnL79hNokAG1kXsWzMurcWQ55rFA3jAMsVdAnZ",
  "key33": "yTQ5LYuRK7Qt9Ms8CK8HL7Zw38871mCnNSU2Xh24D9PB6v2es8KTp9PPzuoQMZviU31KqmExQXrv8XBcZDt2YR3",
  "key34": "5nJc7HHfXnQ3AVNLomNnmHqaSxS5C7en8KbNVgGd2ufwhmsiHcKvp6yYxLUdV8Rk3BKxwPdu8QY8dh7sTa2b636R",
  "key35": "4ycvXSEY6GPafwujN5M5oRwfv3D4cePyosbi2gk4xY1wrwb2vHDxWqkovFWrLHMbNHSrkc5hZAH6AN4UXiombAft",
  "key36": "3gaTkTKw7t7bhjigPPdz8iUbiVBs8xVZmYq8BFsfWPmFJBUW2pBrWF3QvLtgijLysE7SqFRfNUWZtwt29Vf75Xzx",
  "key37": "25DUK9eTSFXYbTPBETAP8EX9XUHcTwDcRLkZcBc1rGspTwi7Gviye5EE3vxdzawjHno4iT2LEm3BEfHRPaG2r8Zy",
  "key38": "J51CgmRnDSqTKD41suQCQFXY12mEzAUfTXA4KaktutXF6KFNV4noNYZTb8eL7pFuj2yby1w6sL6q8wEn8GgmwwX",
  "key39": "5otFCoc7DykVKzWpr6aC2k71VQ7g4ccVYavXPCEqenhACsrWDVjSQSh2mSY5uNHFtdFpmBD2vrzG9pw7gTCHRJQ7",
  "key40": "4Bqa5uJ1gBkvZqhc15igbdmCSbCcCAeg9xSVRotTgmzd8bEYSGBQXKQ6jJQjUcWJLfz5JgPW87UYGSWVtCHfDRR6",
  "key41": "48aHNfbpCuiZmPSkg8mZTkb2qj86xC6viHBdZgQRzBMfuHMEe5y8ZakvBQgjBfqpZd6K2GjvHQ35ccYRxXeTAWHQ",
  "key42": "283ieaq8fyA1z5PqfvwjxUpWFLRNhSd5HpmsWsM9WKNfxTYRCeFbTEyhXZGm3aCPdgJW2HJTPg89EnrcEmbRVGa7",
  "key43": "DT7aercSxzEHoLR7ZFWMqSfajZADZMCDJw2qAWYK8H57RWLTvnjrJPCPaadi2e2EEXu1S7L61tbwKmQYyoPUhS4",
  "key44": "3H7tfydk4ZGih9YN6xJUyoBo7z1pSkKpRvuW7ZLWMgfDxrSu5txyvFDnMRN78xu15x78zUWyQ7v1VPfZeXdq2Knd",
  "key45": "3xq5gwnyu18dzEPf5QbNY6FCB5RkdMKkJsb6fyCyM8tYfXnkmJS1m2JcKLj6Q2YTJDn4CAFSTGhqEAr3dhjxGZRz",
  "key46": "3GCExU4uB4k4d1LqeZBFCdYYVnyUg9hEgubqtCw6sENnH3Zkz4BPAegQAP7wfehpCLJohYGycsqJaftEEepHVMWP",
  "key47": "2Do9BXaNJkPYoWCf2Y5Wmmve5v3UZ5ASYBwoNFWF9QrrBuHxtGHJSiFhCEGQAytsnU23fBBwXrBTj1f71LeAK3aP",
  "key48": "2d9HG3vKH1S2obr6gJmkzdanXxcfhrkHrpx2cV6fCE4Us7QNejMxm3k8tYvz2bkXVgjpVf17vbXUDFbeFLv1bwy1"
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
