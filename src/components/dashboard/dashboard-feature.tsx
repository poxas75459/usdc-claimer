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
    "2ks5o9JsGqcPuMYZkjbdNExn7Z7RAWtJoyyRoEeE2CBQverPfmp7s4p593SgJdfQSvh2dX5LxpkNNGgVAusqoRdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3MSuGRZzQC3A9PC9fkbuTPuFDxeQ43nJMx9FpEi195kUxWaJtcyAUspmCfZ4S9wjmouxnuTF5TbsQKeZoXKsnU",
  "key1": "2rtqTsx9eo9c1X6cB4gqZWwHKBQUs7b8TLZ3k1orTqU9Uo671FQ79uFm64DBULDfuXiG9ybr2CQtVHNKbMMByE4K",
  "key2": "496V7sGUmSJ1DHieCA5x3YAfpC38YADb3VyeZD3H9J66ZyTMYuPzPLKvicevq3qVNBmGTy34SdsFLWKvb2X7uJDJ",
  "key3": "3wUAk2yr7o1uWNuuAmWo1GCAy83ycjYdidsH54ULwj28cMrnp4ooHV79Rbq2Yts2CkbKDbMbSWk7KGcRmqio2XUN",
  "key4": "2aXbW5xYCDp1SXkt9jyVmLbajQJ7V1nA47pJYNCgGCUhi9Lu3TYpTbHZYm8aNmWYaQViS6EXEb4uQSoLKhSE4how",
  "key5": "5HB3KrGZKLuZCGiaVpqBoyxmtfYWSbfFWH8TFjtzwD69BpyXdKPq3eVqc4nbsCkDTyK9SXkbevw7SvA3HFVxgJM7",
  "key6": "WNQjRdrPDrrt5GJSS7QyvCfxWKiTzbQ7WtLKEagePkYtizC75rZ89DGQrR6PUfQNTY8nt1pwpR2BngywcCFUywN",
  "key7": "3ubotkztZHAjc2uUnASSY4AKfhnAhH3onvqXZj9SXqoZqNEPFdxJLMmec3j5PKvbdJ4vdrVCUHm9uvkxiR7hA4we",
  "key8": "4dgkTENovBtnAcVXrKeRD6KWn3YUmT8g778pQTHKpNnEV3jVVCzPs3kHy7hZDNjM6kSYuUpkuNFxknmMejJr5wF6",
  "key9": "ywgjaBXN2SWBV2Krr3wS7kTC9ENgZoBFtCVNX7oy6GhLtAmZ4EXHCVG4KNFzkUmJjpaVLU7TQhKZkRJpnMhyjLW",
  "key10": "3hVK2wNis21ipnr5CYjksxCXxfBgXXJtYbU2BquwGJP5Kuo7Gk1GXHSbRyGQZjyB9pCaeRDqpLDyjTWKmxeitUMc",
  "key11": "3RTPnPrDkYbNv6tGaQFr52UCNYzDxGfU7amNntCfMLibHwdh9iYqNTTjMkNKRPiNEoUN3X2sksCHeNYA97ssyfqc",
  "key12": "pBHPUjiwt9fFQ5f2wfhaC14rKURUHGJ4ijDxjjRUJeME5MDmEhwhndpMVRnjCPpQuvb1v5i7ZiqvBEZpYDWRXiw",
  "key13": "5RenHR9zinJ4LPxEqq5rAzdKJm598bWQS16umLPqrHfsfoCuL5nVcbsdZGyEw3uQrRYr98FBnck6da79Gi8AfiFJ",
  "key14": "PAWQQVw6Vms9GmZrBpNk6dr2whxkzJxYHiNoK9fUG8ZRLVc61tpx4CNNXqLc5VM6xXWQQasKBTAFTGPmLW34NYM",
  "key15": "4GjpJUetiwTYSWGjQnsD9Ay3Zj6s7Xq33DVec44QYTEv8aH5ppHUHtPLvdSnKyAj3Qkrffqw1FC5rmEX2H6PkoNM",
  "key16": "5iGAgNZPyVHgB1EmQx4QLACzyH14FmF6STgD34q8f6R2YTAbBDY6F5DbwxucyXGbQT6YkbeNhM1BEZAt4HRvJaqw",
  "key17": "5DbKhtg1gUc5dfbiA986g6MD7wZH5WVj4DyJXqhcQrMyPS71GpPcGf2NW7XZ5WTCCWi1A9CpKN5r3HoqkhVCHcfK",
  "key18": "5fyksCUFgHE3aMneppeRYmE1xDWTEZVNLMmpMMCHnHSLxW1bRy8JoRqsH6VdiZFt6Ud3LYtSVt1josU6x3SRqzAj",
  "key19": "1AKUgWTPbrLGE2zs9MPfcHb99Rtexd6mR5SnsJkctZkSMZKJVetyAqNTgBu5Wymdh9WqWqmJ49xC8f3jEgMxzRn",
  "key20": "3QZh3AfNZcdaJHEiV3LNjDw4XmqdXbiNmr8iJAujYVf6DYgXV4Pq324ZN77eDEd5k8aAGFYiMGDRNzvr7b29L3Pc",
  "key21": "sX9CUU2n2cBJ8AhdyGaaYhVPFuknzCLf1GwoAXCueXFdtH36W8StQoQFEjbs5AzqNJ6oYtkaTam1LBRHLxDaGhL",
  "key22": "5SDw2FUCYVMGwsoM381sqadFVeJnJHJzyoULonxHtWDzXBFWoWViyvLRhFJ7masHf9DnADYrQxBfnSa3Zn9Aehop",
  "key23": "3R4mVQiYqn97pSYubJxFbppc2QbQqCxfx1RECnCgALBMSc23P3iscJeoUTZQBezfS41T2V4C5miUmLDLfV9GyeGJ",
  "key24": "3Hb9FeRQqB7GDAYyyCRQwpY32mycvKfursLAo4XHsdi2vwtSEwNK9HGTQ4wBWuquVsbSc9NjK3EXaefXVAUjLTUD",
  "key25": "4uegDaaMjEoqsYX5E1eYNQdfh4hbMTgpxauNDqJ7MMweAYvi1PXo56oeGMgXbnEyosLX7vqQ4kh5t6ZM3NoVuLcS",
  "key26": "2ZmfYB9RChXtFApEadZPz5TWm5YGBpDDfV3uG18PHQKzdvYCicYDu3t5qJ6DKnUwJT4zBkAHPp1gFdbyruR8fZ9J",
  "key27": "5bU6GagDwnMt5YatxjKedHjacB5YjnjPwpRuP9V1Fy7UdbRsaC2aYjF8cai1SXK3BubL5iMPW5np2KQwvpuiNc4F",
  "key28": "32BTYWwTppejn5KShFrQxemLkTcF8ESp9cn3jS6i8CirVFudtanwCh7y9PgsQMiUYaTyE7B4VAuTMHnwJtn7Tqme",
  "key29": "2aN2fgaVCjcKb2CGdPYCkZSh7VknRxkVhaLh92oCn6pcMUuwpKEyNKd4T8ReJs9YGpJaLjXrMm8iXusqwcAov6AF",
  "key30": "3ceC7PgpamrbbpCuonJN6udw7SaFKc1JH34poUEnxx3UFcPSG3q431CeN1mnHWGF8b9AwAv6NBBhZx34coxDXkMJ",
  "key31": "3MEA7gpW455hH791JNJuMSQaxnxGAa78CikGnv2VRzkykjk1cntmkBvnKy7nNReR2q3cd85B8YfyeWDfzE8cWerk",
  "key32": "3WZdxMC1umhRgDSJSrfYzQSwUeDTQnBuKk3nBaBcwMh4nQwdbemnbzmvcHojYeDdWUbn4w6f8j7TqvgWzBh4Jxg2",
  "key33": "4FqZo4Fmb1YfP4CG5iQJ7z1WwP47QPUdFeGFtUfxxW3pk2vP6W2nimqrtQB2wwKHRGsYdyRUApVSNktzxwgXWZV1",
  "key34": "fXpXJpsaA6BUHB2FDwMtDGJjYzpujkvaLfxvqmmtpWRCs8YshLP1YoB63karYJAgkXUvChPcfFnq5sBieuUxNDZ",
  "key35": "3sAmUCmBoLu1DfjDn1TY7ZVpVq9gJnXiCy2PNgx6ZmNvqYFNP634ANEudpuQTf1xAdHj6zyj1FVh9RuXGRjo9UwL",
  "key36": "4KtaQ9v4FDhoAvyfZeZik78gNmE9yf3B46sCbqoC4yXkvRSCTzYfSJrB9qgNZkUnZfSD9gc62jV2EK8HZVM6dWYy",
  "key37": "2CgF9xwLq42JE2EyN4G286ogw2U52W6QyoADvHm7jdRjJ8W7XaTnwJPcnZX2PziibDgeRHFys8szjGyrqjHwhnbN",
  "key38": "4NMYSEpusoWCoTDYWjWcaUdWqv32yjkbdHmbsvEJ67exWQnaMgP5aH6rz72wLvjUV6bv6LAN4fo8oAjnWEA2vXhu",
  "key39": "5ebkt3jsn76QKaDTaRb8KrRrh3Qr7tMWd1QCay4BFX85cgKhJAQVf1PHFa1QptsjuH7c3DHj8GWDr8x34pWkGnWu",
  "key40": "4ytK6WoWnqx4W4tvQLWs8EAotfrEnTqgniCsb7tWFPgMRufAndEsjGSdS6AjBFfxMt7BJDkeGZrXR53sznDf4drw",
  "key41": "3Ve8tQvtvXKtxCLEEiJAkGohWToxx5zDnV1JQJZTnfJ9u9fpdNmLj2ogSuZxD9GrjDfQcrjvZeQoUoamGuWgHtCn",
  "key42": "61QuitWGehwAP2Ao5ty7xRDcHGhtHKv1opePBSzbS1oDreZ5ZjV5otrW3oddPFws6zuenh6k56JhhQx8RqQmPLPi",
  "key43": "3jeT84jTSsjYp27YrY25NR59WaQ5b4p43hP1VtnVffh8o45eDTah12ZG7wAWJXXkL3EcW7kKbtKMkRC2iGsvMM6K",
  "key44": "HZSEhqVxCFcb9oYmGpgJcdwPB3yDweqUo3pGZvPJyZCo1x8QYWaaFccJo6BgqBxBPHtiVtXVh4ht8BRh11v9Qjc",
  "key45": "3AHu7Pnmz2tRJNzs2UrtvN87knSXGdRqzVnevfm6ncqT4LqQbRdoaUEbE68C4tgfXxsf3EJt9HS3joHwHZrmWbXw",
  "key46": "4yQ74h5DRUs6jzJMjgoFobayJk8MBHsxkJqbtxFTGVvjLWWx4rVjpwX4sSUKHEAzjqj9tQakrqzHH7Ck9qFHhbQo"
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
