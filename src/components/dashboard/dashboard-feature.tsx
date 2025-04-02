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
    "1nVZC7FeUBX9SDRAtNv5jSCf61PcGxDJVxg2ppU9Z2Vx2wd98YtcC5DVmckMKRaezoGErVWcW9xnAephXqx49Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovJkckPY5iUfnUWYYcJT67eQjXnQD4D6fv6TupJVRoDGj7Q5CxJGAJmUw3hSExDrvaPtswqXAewRtLkf94e1rHt",
  "key1": "4LPgMHv43wmGs6cj5ZfzqDB2r63ATeVYkNWyVvNmBEaZ5X77CeaTPzgswUpvojrCkQA1N3tQCguymaJvGUd5zGcA",
  "key2": "ib7bgPf5ozQ8DZupeBWqcDiZo8cLP376i6fRbWMBhAB16JYK17JkhMqTZ13ip6QkFGVwKdKf92zJLFtYDdyUYQD",
  "key3": "5eQSa1UuP8NFvCjiDDssweW4zzmwPfiHVQLcED7aafjv1jkA4dt74vDHx3E1rcFrAWPxBXkJHXA4tmzpFA4zAztc",
  "key4": "5YXVkEUWGeDrZ1VWQp22vZzVxh8hvkPKJpb3eX2TNMquNabyZ9Amc5NWvA4hm5zM1NQxvQiUbMpMM5bn7NvTLY7x",
  "key5": "oxLyVdMiXcjDNoPPPjjnBHCGGeyZ9mhWDNQyMhYHhrcreR1gDkN9s5XTvuHM3utnqc5NJNJ11L2XMScrGJoMpwq",
  "key6": "5YNrUtkiHhER1h5A2d4Jb8E38pTKFW9dFjpNuG4PJFV3zsCYF758aoZPChJ7J81jbaUUfGVVn542fyBGFU1ahzfE",
  "key7": "4ksk5JJu54zMCddsPdq8qvnbecgPNQxbujuRqNX3SVWrU7id7FU9FNVbFB9fuPnxQGQJhVGeuypYXeVUWiA3SnWR",
  "key8": "eHCFQzi2NFar8vr6UxF9hibwp8cp6J6L8vcgERRAhu36FmycSEfWzZc5y8UyqfUfXjEFV76xac6rEz8trhGtPH6",
  "key9": "32qu5Csm5hPzVw3YDWrpPsD8L2j4UbD7GaSFnfR6NrFmdLrnrsGi51i98XtHirAAQ5dJx3RBuFLNPQ2oEdj5LhJS",
  "key10": "3LxgNR7wnBst8wBYG5QrPXA9HGWSnZDAcvrPjKZJWn5fjvg9jWUauGijwbfW4Fn4qSNJoTxvBu5B4kTuE1KWLHqF",
  "key11": "3puKv1u73md81AhT8s1tZJrd2vjMfZNTVDkvw5kiDqM7wgcyCAZThd4KMiCuoTkpbnQLU2jhqW3RBv1ctc8PZz8X",
  "key12": "26QXhXJSuHFtv1QEh6fBL3Lyr3EyCQ66CuQHPWrbczRqmmDRqSA61KSbzG2yz1EeJBaBVzRbyeg5R3eXHWpwV4rQ",
  "key13": "5GmMCkWSgUYY6nL8Sh5f2wP5SaruKCcQmU1wJRTQ1NYJ42j9chsvCGNdpHaU5Rt2fzjMHiKr3q5BqDCGDc612WaZ",
  "key14": "Cx5jwNgMSbk5UAeJ6uh7WqessPX9nRcWDjPLEqufLPBCHSoHgR2mNu9ryaakbLwV4yC1TqCeeZNAcgtkCePQ5GT",
  "key15": "3KA9DDvP6oZgTdu7xPftUHeBrZNjUWFTBfkAkRtUGEyBYJwrEonY351ntUcMkewCytFqd1ayau4V6QZ63WR6FTc7",
  "key16": "5wkvLpkcSQA2Wtk9F3zqQzWFyDJMN1YtvSeJNBoQ4SGESMgnNvdpCvTp9u8sdBcCcU5M6bKF7XVw8KisUYLRjuU",
  "key17": "cQakKS8rbTffQUHegyUmjLUzVucN666oURg5LA4r9qUJK9FXeUaQg157htL3YKjn1Vd2hjeLDr3ACNgVXMxqbky",
  "key18": "3oWQZKm2a3dUkD835ozSods9gMo3dNTCGK9vw1ZRnF1YLeH4nre29pkAN44qYKRTk8MBpJkVZY1h4ssSGLbzc38V",
  "key19": "4hfbRxiN1pHFUaQDjCbEMrzSUKYRgmoHBrkaQexENdM3hHK8NHUHiaGLHCy7HLaHTGodMrkyc2DV8YXi3ZzqiJ6C",
  "key20": "4ecACjAGSAixmMctccbeuArAhhnqZve8VAdC63U1JRTRjKN2KkBekqpGe1M8CXW7UoPxAHoHqHqRBnwpCkVWJxrb",
  "key21": "mRQTuHogpa2iVLWoBxn6KwnE8suSi29FaBbSRavXUNQGz9WDNKBPqy7jQb951BY2K2AbBWZ1JBsuaWDsvejTLoM",
  "key22": "1XH11EkWz8LQ9c6MBbD5MGxVe4Vk5UuZnbFuiyX1xpbXGHZuHscoRXBxcyM8u46VS36jqrtTzt8xp9VtiMRu49K",
  "key23": "4SeVMNumBPdeyya2qgNJE8K3SExLCYzYaJPAnJVA3TsTsZ2KpBR5H3pKDEXBqCGPupDPg6W8fiQg2cFCiPrzq26z",
  "key24": "cTgcHTxBYbMZyXBVsm4GEzhrG8b6XSSXeMkpUVFB5k9wyZzrJ39oc39WbNMyJJpmNEj2EC5XDrcwfAD8Sb9gJ28",
  "key25": "5HL52Eb1MwkEJFiJq1EJzp8kxTmrZ5Z3fPsEFYbr7N2gQXQjZdLW19vnnNjArPa6ETm1FckCmVv2sDSzwAdTiSAT",
  "key26": "Qv4U6aK5fb9E71SzoJXHCXfn8RkbMorgdYawE8XZkZhb697c3fmKLXGxEXACRftL2qWEEkqwtVXZotCWrVz5Wjb",
  "key27": "3L8CHEZjxNQbnjs3qzzuKzDRUyXJXTMKMwJrPeWcZMZUMxj8brqTnGoL2obgHZkxQBvZ2KpNBE9bYViVxbsgJgUN",
  "key28": "2Wads4tLq56Luw2LX3LU3KLYSzYtdkJxggPt2VcFP7F1JPtCVtRvcs8QrGWSx7JqFi1JJhwhd8DuvmrMHNLzieN",
  "key29": "42nUqKahWZoRwCkYHqouhnCnBAybzDNfyNnJRg8GKQzZNb8hDY639SMGncYyfSRpbxLZgvjtxqMn56AenUmnW3No",
  "key30": "5V91GQVcqbVJ5HFr6o2Cq8oRHWQLVmVUHsuCH8mLHrSa6hjDHzWVfKUYfEk4eNst6nGsC6HEGmazkSkTxsc8VAYM",
  "key31": "393owCLp9TPNcVRhHSpiJv6nQeLUYecEqQVNPKebw76D5qtaUzC9NbbVaBGqrxgQxTJXUhcBoE3nsV9SmkLZrZGb",
  "key32": "2yAa2Phv5Q2Tv4mL3FtvVmGGSMzpGvVF7dvURgoKKL44PHHvczoqNCmMVMcxXufGFLge8E1ZtKLhg4Uiv6d8vvdR",
  "key33": "5VX36stdiBnagGVDWxroyeoixUAJssHuKV1k5H4uDmXKGzveHkxzgy7PbQfAn8LnLoXRNGvMGYhoJQdjjAaHVv4z",
  "key34": "5MKzie7PvJXkPnK7j1N7ZGJEq4eAmiC3m816qmVTDnY5zhJs7Qkf6sWhhL7a4r7Na5kFNwFCF8zywWyeq8cnTFTp",
  "key35": "aM9jBTGtjrNK1ykJEb45unqA6sqLoizcLe9KUDCv815CAikv38yN3GaLnRAwN3pFseb34DhPsVzAkFGcZcnNWWW",
  "key36": "cmaSkAhQcddcocZTWHjbtGPaWJr5Gjb5tWHoBdJT2ZZmYokkgB18moYrNhUpgy8CJMswSJcxczz5qQSTRunjJyi",
  "key37": "2sCcypBg8A46jx82y52xiLytNC2ZkgLCXELhUHaJmXYT4zGy8e27Yt6pziH4ThSXH9iVXSmCbM1hiX6gHCCdL2H",
  "key38": "4CRvmKtA4aAarFvAbWeufBPXuf95LZ56BvRxi5xr5kap5YfG43Yk93RG9Tr69CU9gZNSJKZW4eN3GqdrUJbPKETt",
  "key39": "2SCvbRHK7vj8UHnUFi4LJkhLVEtSCb6xTcG5Ht2ywdnjEzwgrrhCAD4GwChMtyKU5PErYh1b2XZTSzGp8dA4ND46",
  "key40": "2AbmJxgtxaWM2iEnKfeGBVLfVJj71DkjaWHbjk9JJ1Ux2XMCj78mnjA4YjQW2VFKqPBguhwzZ2T696gBsMGSKPyr",
  "key41": "54bNm5h4P1LW1p74Ef3hoVWtYaN4vCEhuiHkULM2mpjVfGnt7NfSnLCp9VNVzsK16AUij1MsRgYtGRMdzpYoMNi2",
  "key42": "zo79zP7rutwddLYcdMoDZMHEkR4qwxMXUK672jsRuZSeyKd2fzZUswjMbM8jQTPLLmE7o2Tzo8SqeppDLjGw2Jo",
  "key43": "3Mn5sHdhPGnACamcPp5LcKmzDGNf4kuqHJ1AJasnjET9vPftLhMkJYdV7yDm8GCugmoUe8u1PQ9kHCbKdBEHUvMu",
  "key44": "4saeFuVmMyFsqziudCwgD4PnFWYLQNbaW6Y1k8jzcMg3Zcvfqj3vHsrh2MXixoaT3Gaecr77WNsh1db5z4ArrxVU",
  "key45": "5PZSM2EFpV1uyzLtKvPN3k4sHRUm6j4BrHmc6kS15pK66C7xHmTGZKsASysDX7NZcHfq5sZ3fYUxjynz34eexHU5",
  "key46": "t1cu1sSAmtqMHpCXK9GDgamm3M7bg9FviJHxP2iWkPSLjFs9kSFqVF5doNsBUY5XCeoK5XMPxpWX5D46gsE9hRD"
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
