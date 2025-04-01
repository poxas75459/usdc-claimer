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
    "29mSVqnPbLuTDM56AdWaDAWpH79cye2jyjsHtguCPSgasVKtfs6jDZUZpyZ8T9mVKmoFUvkG2k37qNiXLocpVfez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQnGQ5g6dm3WtHKmmEnKr23dqzGzZZbUqysoQmDFRuMFZBFNz8hx5mge1QXBoSvCJE5ujRSY6q2HUqyQtZGuNDw",
  "key1": "3j8CAaFuYPTZeAcKZPeP458NLQAzst5AHWivQyFnqNFhoaCqVqRJZfMFwrY59CBx7Sumk1GSKc8G2nAETuvpKuH9",
  "key2": "3z6LqKoLUa5g3VntzrQrvr6bfzsWi7AZUnZiiqPsPXgsfBPKEoJMqKy3HNbn11Z9AWZf2BTdz8vq9NAPW73eG1wU",
  "key3": "3dK5X5CKqLCbr8kM9GuU6pJvX5SvrVFu1SZs2AQBJ2vbKJuMXe4hFJKRRvYtfyCNWQMSQUeqU3yH3o8F2Ppvg2J2",
  "key4": "31jFTjUFzVqFvJsV2M6yS8Kg2wKH9WrU6jdtHeeoqp8ioNdA8saq3MmKJ9kis9Hy7VymuyESX7ait2vYjSqRHJAp",
  "key5": "3BKqAnzMmfsE1nmcBKM4MdDhbaYcWb87RZVcoHzK3cquj61prFPNKugVDgvL397M8XPX8JRf2MT2qZrBJtufxFNN",
  "key6": "3psDzKbCdYbQF2UgxzeVxUaFn8uwGQjUfDtZrJawZ4YvtgmYZwX89T7Uog6WNo2pWohurPtq2NJxodyBnMWmzVBo",
  "key7": "5zne4hEfA7L4qwiUMKFMV8yXtaYvd7gPZ4uGcn4AgAvuK4RnsfN3YjNU7DHdFsvHwoyeiMBD7PQTrjGVeZVLodcu",
  "key8": "2fY2aPdVXs2DhYE5UD52YPX9xuyMaR3x6pvuK6CDLHzwPowXMSsM9ngK99oh3NwJxF8kNeJhh6cr1bBMobhGFH6F",
  "key9": "2s4BEua13uiK6i2jQQZpoe9wxALPoN1jgGR4cdfDzP28G6zQNyVM8c6e6GdjbHs48msW373NUMMGsQrAU8WJnHJC",
  "key10": "5E4bypeA6ARoHvwk18QTUAcLgZj93CkdVNd4n5k31VjtvdqDMQeG6Vvnas2pqdVTC875QYGdrs57AVvsHMHiAsSm",
  "key11": "43kvvLx2eU3cc1HTty8V8hyF8BkdU84en2iry8XpXFAie4JLsGm3SQnX6ba3juUDwj1JpzRqhcW4TCzHK9vaPC1F",
  "key12": "5LVSF1zbifiHVRW1UsaAwsTkCH8aL2hAtevUb7V9pvLRzhCoqKawp1xQYjr8GVA26d6d7zQVZbzrQ9PAtzoV1tzj",
  "key13": "3nKAjgUynVFWtDL7Ewno9Xua4WVJpxb6a1hR5YwMB2PK1Gc7b9ytXErARc3X9gh7CqJMjaZUR2vj9zMRda4L1WGb",
  "key14": "3f2o68zaA4f26yTh9PVgRPg1EqxxtnZpNFE8zf26Ds7aCdz9MmmnCS3ukk5HjHm7vMGWwk8QfdRCwQFKnBvMC6gk",
  "key15": "5Sqk594JFLqAdSSJrBb3B9ekPqR8H2G6zEww5QYhL3KQ5rLUYW9ZGzsebAtLv6DjmB8uqprA7wE5Bx3d7yrRhNeV",
  "key16": "nqDUgbyPHJm3ZpvpDhqT3PB9r9EFjR4wX33FmrSsQdw2QRPkupc6hFaq7296frPNvXDRDqTGRPe36RCQtdKba8E",
  "key17": "3dErMkBFr8Xijg2bMp2C3raT3QUAfwXbF7ZeX5TWFcMdueQxqQrsdQFZonTy3YVGv89ooMcCnTgu9VSzAHupsrv9",
  "key18": "2DFthaUvZrDysiiF85QWhrC5ABb3ePpAEqz3TR2v5KdtxX37VJroY8zSEjDoy4LYNuMawgShUf6t2o6sBKwHAkGJ",
  "key19": "1H7Yvb3q1KNvXmTRUPT5gT5aprGLj3X2soF5yqEgAcyzmkwhWmmmNj36grcK6z3r4uwNcUXY7zFdkFWTJCmd4dH",
  "key20": "2e6798MtkgdA8a7NKJLAZp16ZSUkxzRhduZGX8fR1jZymjmmRDSWZATTBM24GUrGkTu8NgChxgc4JeDd3yumtnyX",
  "key21": "v94J3Vwd41AWhBsHjPWtB8cuhYDSPbHM1hYtJC85v4LajYEsCFSdRLvCA8GD1nEaYs7ppjiiWx8KTiy8WVFqypr",
  "key22": "23mWDJ7Uknc6BH48MQrGKAGzwjh3SYs5GRzDZZxr2fpdo5cGr32cB2YHo5CrVsiXUEfDA1nPq8jwMLfXHFSntDbx",
  "key23": "EVv6HQRJ9miVEYXEK1bJ6fKX6JqPrKsqub6u9pWHiDwDV9rrVPLugYFXpB54ZQGcfFUE2QUuoLx72RHdKkAsrBg",
  "key24": "3VBHdoidnJbqPjS8w8ZUzn4fFRvRwoH9S4h57a8EP6wRBxzzKhEMxmXtmBUL9Gv9Kt8tPcYgh4hZFxjBL6T3YBhf",
  "key25": "5g5ME7q2nqutmXuL76iN2Fw5WegL3ncYUfGJ34hpjUByMPX4X33sCi1y4M5W3zRWP6SPvKL2EqKXozNbP6R2owCE",
  "key26": "YiNewt2nhFH7sE29T1zhd6aKmsxLgDFL8fraCKXgZPtvUSFxxsW1Vbf8QQTSBpmpwLBnDi83MQsfZLRh4EfQF9C",
  "key27": "5fuHw2QmtLarWsLrBgELqyLwbePX3HH5dpiQTmGrWr5VFQXMb7HuwF2mRaAif5EBBe3P99v6BTbpxirxBtSVHJy8",
  "key28": "3shLfnaK4MHE7WUM7Yxqf37VQwpDGPF5zdzWivFr82K73DNahurE1Ur5cihmSdxuAmea59EggKgp36fByUxXp9ZC",
  "key29": "5UrcpZPsgF4b2YrDN6X6TktnG54XVKZxpeeyULZSksyePZMrtXZcywVNm1M158moXBA2Jgv29XdAQMWqwfWadjcE",
  "key30": "4wwsgvZgN2YZ4uJ77WR2kxLE19J69otxnggUhX3P49N37fneuCqax1VdWMp2SnaYD7T1jneVmQectQVoxU4qPJUw",
  "key31": "4z9iJhou1ZPGP7qJ4mmLhVE5bLPRJ34GaqPGLNsDgEz9NBbJSqhizZYbmRDP3WFsnevq6cvXd83WBkR68VcrSo3t",
  "key32": "5mmyrKaPRw71Ftupn1ixVmUxD6hNLuumai5qox7vzWsa57Yw6jFPZ8Lo6GUoNeUCqcNmqGJzwD52pJCLC4T8n7r2",
  "key33": "5VH5shcQmC5o8gfiCgzL5vNXPTr3LYKBtLwyQ4yL2KjEb1iGrPmnFdgKejqfR9a8pmJmf3qoqgRvdhG5zJLo7iSZ",
  "key34": "5TrGuhBSWdh7Rr8kDtdCspGCqiNsBQyQBjZj689YVJbbUi1RT3s7pjPQYg4UCj6YeQaFuqYwVV5pUUHPS3TePjeQ",
  "key35": "37gVKfiMjW79HFH1Qq9H4uSHrEqL48b5AuSiMtLWTos152dVLeZ4KRSaoZvsThCbpywad9CwNNWkUFHcyv7MCAbt",
  "key36": "5K3sADxW2h1NLGHWtWqf39pWppNv3qWZqLY4Haingj9pGngnXjLfX3mEwfLBpqSJji6EGh37hCxFG9bTUvaNaSfx",
  "key37": "48o1ErQc54uhEqCd3H1qDEqH76yp4NCaHbtVdGKoQUc4W6ubkwegnqQyPxW5819UVzJ4YPw5cqC8eTeLahG7QEmh",
  "key38": "2rhBeCjp5TRbGZJnF4wtKodJ5oKnMFhJS4zkWJ9BZpTVvCEeyyDthsSuAHoa1qgXfbPkZhRkCZwufEXmr9JTFt5U",
  "key39": "bYCsz4r3P5L4e1BV1G4BNyQSbF9uCx5UFEsPZSK3UtZHoZENKcHXAPqgeRTQCGyJkjNP92DEaE5ViKkUjQRESmt",
  "key40": "4oaj32hgmbh3UmChdexQTWqWjzzZncPQpcD61d7DTPfKjcm2GJSVxqkWQFx1AHhiCaANAJxxuEzhdwUD6U9hc7BH",
  "key41": "57M46oaUvPqHGnsv5R5hcGkKSddWdXnCp59j29mh3z9U8duA8zGG8yqsG27kxnNiXyJhyBspVTBQLu2Ves9FHASd",
  "key42": "2SsBxaJUxXNGziZbineZZsPcG8QUEWmSfDGgvNHsYjSYFbSACFSqncG7ie67JFsmwj5LVRFfCJZVfa6roP2J1cPB",
  "key43": "Dam32b3cegqo3CKvf9wgj7QqMwbMBe7sjk95cuu4VLenuZF38Zg9nbKBXqgx3genvwWibn6hvMPShr7MnovVXCe",
  "key44": "4o65gmNACxP3tCmjF76My4ia3r6SvGDEJvf6Q8JrcCBthgnCwGkKVmu6Q4AXZuZKN1nVV41zHqdhJjtSY1zrumww",
  "key45": "4xcS6SYqhkefrtAyXCaur4TMSU2xhsGcsDcD6Ax2hgbRZpyXyt6GCLrFYjeWFPyjCze2Y48AzEmsNaF4EEL9ZBxW",
  "key46": "2uXnSnv6sWpKake2CwNhqR36Z3odL4WjhFDM3yNwHChQggXVuSRDyxEknL4YLgjQkW6rfPjuPsUYpBvyhd9dSQb1",
  "key47": "49qCt2LuqjXvxU2KFuLzP5ZMPN8TBzQgy5FJwXJ593wuKDTjHdvHDXjC7k26qN3s31HCNHX9P1C4c6H9EWhA52AY",
  "key48": "24bhTVzbmkMoQifxn3xiiUz5vfGARcfdJbHabBYLAzNJ6P2RtdSAMzFUp5Uv9M7bVf3v2N7jK2UmZTJsg7Mh9XXx"
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
