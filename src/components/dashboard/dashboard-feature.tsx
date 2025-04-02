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
    "CtwfEa6u8j6M8UrRn6DekT8UMJKc6rsupCXuwPJzDVSKMytAioWD1V4CaHK6YBD5uGaQFK2GCk4FvZxpeEobyCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hX5WhrKvpmLbFUdeS41KXtSpVqbcdfR1pW3nLfKZx3ua8WCFHm74BhzCJcgodvJQfRXpv7vo5M7ajpdo6hbT8zs",
  "key1": "5kpt78mabNFNwryn9AHqU7ooMx7cfJ9GFGsYBAfbVmNTBP5VVrti9FPaTAd1c8W7erp6meqUQiVvXDW46ExgK7ji",
  "key2": "2vrpeYSntrDT3EEZbwdgzrnhJib2woNZbiCXgoNxQTurp4WJ6LtiTV8HU5eoEFTYjMpw9emzUfNtEN7E1HbpFJ4e",
  "key3": "6779LK53RacbiDj2dsnwwhPykF7SCveWBLzzwhvH5JTMmyTh2kAFwR9YnKCn5hqfYQ2dmWMJFteu961XSm7TFLJS",
  "key4": "2g7PpHqrm2jnUiErk57jt7gR5hXkaS6GNnZxTBq4HZQYcLWUYSYjftmV1YaaVKmGMXTzJxHtHs9XAgawbLkG4ULc",
  "key5": "4Y2EPYDA8q27Yfj75LE7hYE1MsLhwUZjvxot6EhpjVYr5MbxhNEiAQtfuh1ouG6EsJsDLiUows1tXcUYahhKw9j7",
  "key6": "3RfYJy7c9zV9qaPgFqsmykZM5KwB6uf5gypgazYJsLeGKtvAUJwAjMRcgteqjhu1A4nZMkhiodywySoiQh3AYMnN",
  "key7": "5guHTUy84MHzvMZAqQyccFH5ity4gd4Vck6ey4VduJcaK5qCX9JDUVP7ucLupAc6wBRZqaYVJJLtyfGzmBfuZ3mr",
  "key8": "3LmporP5Ki2DiV3Q2ZooxtrvD1q4o8YongGwnUKdUDATQgeypQfPqjkZwLFjmvUiFL46mEJ5J2Hewm9L5g53LZoX",
  "key9": "FUoPEdwhniefmNVp7VjWNJYCo7hyhcpFHSNzpuEHRxx7mWq51mhrDcaYQothjhSiKwgaMsW2H16opookBUWFxmq",
  "key10": "2tQiYTMVK3DkrDLe9KfdZCfLE6bhbgNJ5j1BJvpptNgBLnj7jaGyNTcRMcPU7SeTrKXWod7accQ5SEa3jHLpbbWJ",
  "key11": "5eoghLSeVY8kdJq6rvZLQo3BnC8VTFeRzDbEEr6DjyhMHCUm3qXFxdtF86n4XqxNcYjNjwU6EJN4ym6a1F4XU1Y5",
  "key12": "4TvkgYV3nFkfJmPJvsw5ZamPSXeAZQ6AYHptyXVf3sT3fzZvAwgm3SA3U3qLCCgrg9q4DYFD7vNHrysxJ2AWmPaS",
  "key13": "28KJRVf7Msa8BoB8dYs4Ff818KdY66yBs3VhsPdu6rhrpNW2aDwYEdtEoDyFSHWR5A3ZpzqztWEy41o5qXnCdtyE",
  "key14": "3pTdQYsU1X7SxPc9stDFEY2cSmT9DgGJeC2sXHGNtoRNKTvCyT8zXi8y8ext3dKt9WvhC3Krc6hNf827DiKirjNT",
  "key15": "64ePbfUNpuxQoA3MEdm49LwHqe8twgdytYDSeWbTBoFhMwTfNJA3fyQWuVF51mZzLagsziG6eNHSZnrrmUhjjbsK",
  "key16": "52wGB5cXLKHD3FmYCLy5zYfRLENBXT82zF5VRwhutmmge1oJsPPBF1HuGiZuXp1ZZtm5nBVfQmNoHxpqvnJyGHr6",
  "key17": "KN3iWvPnEBx3pUtTFdxXkcTc3rSNk9ptDt2tC6EVwQU4VKNYZ24kgf8xvDqTVyDY5Kay7CXoCKHp6yv3p422SHy",
  "key18": "2ZY8pBgSvkPNZtshHDGBPdUUe7pWb2XeEjz4cxPrasbJJSJ4eJrWS9mBVbJ9kt3ZdBrM6s5vyqYPCEVprhhsY2Z5",
  "key19": "4YqpDFvpL3kKgmnp1u9jcHDoDomiSGjH96dYm21VKK912cmLnZ8aEVnMeqscLcjFcQ5afwXuuXCASgGU1YdBYTM5",
  "key20": "2MTr8hK9qiiJGhgNjR1J7igoqk3ExtcywMrh4tEndpwSRqyRtyagvh1KZhCK9RfptruiTiN66cZAxS5FjZD3uQaN",
  "key21": "26fTy3qcHc76yUNa8H2XtLC2RD5biWLih82gP4Tecgm2gASBa7E5xy82thZqhV2sP1TrivMWsDd6nvVT1Y2xPwm2",
  "key22": "35BAA8VmNDFwS2XM6E7GFcFN4ciasU9bBpCANzCZycVitAZA6V1c11oGqgBjmpLtCMD97dH3VCTyS8ctdYKusVXp",
  "key23": "5WPYUQ2VbGgtoVyQzHijqpD3NvAat7ni4oFbysTFN2rL6guRtUtiMJyebw3nR1sdytLVZDXfgQqN7jCE9PQaz4ZC",
  "key24": "27f4pHDvdyGkPqhYfYfGMRnUgGb9W62QTzXZkcEEVYhB2c4kGwNbwnS4fodpy1XJhSwM9csoRghHZdc1peBR8rFj",
  "key25": "21ZhVvoHs4qAThMLpzoQDgbDrgaJtRekibaxfFku65yoqGiiTHgKWVueEViYa2DG9EmzC1a5r4omhN7Cz65PRubr",
  "key26": "2yn1SPV4aAX8aoAxfi6EC5W8AEBVhm8apUi2u8oNBZzmHnTR4JDEaBPCa3HipTUk9XsuUaDH9QbURSzDico8tY4k",
  "key27": "xit5mURnq4CsRUHofTTw2She9Pwqn63jxxqJMYXdHxHYoBSxfKZ5Bqa8oj5r4PRnTQSmFPyAn4e1JoYCJsN7j5Z",
  "key28": "nRDwmososK6cNukBfdEBgrAhK3c2sXYDTB3fmMqnKABP33QHrGq1c2MdfPDkPqcf8NoeVxnUvqSbAVthZEd6Uqr",
  "key29": "7LCeVKcPhtYXZ8Vfi5XXHh3r6x9LEDwynHgFp2nkfYW6ESyJmZdKFyZssrgJBPUJwXCZJ2oWG8wb1QCYEbJGNSK",
  "key30": "5mesfgEAG5fD4bczzjJ6zyekHSV8LMnpQYcede3tcbcgGgvnEkedUjwpKt8dGeWY6Kf6YhzJCpMmZciSUEu38brt",
  "key31": "5Gw47694oGdCbm7FgSCLEquuvsWokufMA7z3c8Jg91RKqW926RRqGeAw4p17TAjAyTX3ANXLZ9qEAtCQuey9Kj89",
  "key32": "4hZ6Bmkf6n9Nzdw73w7UJ3VWWrnLHxJCf5cc1c8ptn3hDnMgkH74uuswGbGVVB5dsBi9Q72oHHjWc1sjJh9gfpog",
  "key33": "4vZHzzRfdgowhvrz3zTRyPBX4J9mLtwkHsbrkpiTKSKbr7f2BBmi2qPDxJnkf9kP6fGSzFxZiRi8pkWan45L5SkZ",
  "key34": "3BHiknD1yfWAogDehcA1zxqY2T9sN5QfgRmvoqs3TdJhAjCaf88Zq6vmzx4gMvNSPducEPx7xr9tGWhtTqsGkpiU",
  "key35": "2oFjt1sDWsjKz844eVSrDsaji3AGabwVA3jahKQ9wr694tkTkS4mDB2wdGcWGumoxBTQNfqiyGuCKcR1GZWwuWqd",
  "key36": "9mjjJxYvZ2Nd7iBxd7fqxTnPDHt7EadnQ6ypAGd5Bcvgc3vt14vvpyd1ovBoLVNpnXrcWg1KWMt4QsvFDwLG12t",
  "key37": "3EqLmfDJDXHmXxrK9qmrqG45Lt4Ny6CKLyWYAHan2NnzJseY25DnrnsLYbgZKPrqCY4GHod4berQv41dhwsC1HCa",
  "key38": "35ooi4cixmCvqkhUJ4ms5ESwBaeu5SkcYCpcaYBrCcz9bdfwAfShdjouhieB2hQKvL2xUuD1MJHVzGxY273kuJxi",
  "key39": "5xYS7zFThQHTtw8HBcXpoKU5rDJRnsEBHPworc5ciEhcEzNw8Zc4z6CX5hA8DgJ7FfABU4Eq5ZjdFipJ3r995w4t",
  "key40": "xstydhvQoKLYP87AJMe84CLgb59Y62ZeJBdtPFMP1QVQZ23tPxqXFCCJUGJ9V71nHJsfchXrEwcU5aAo3yQiAj6",
  "key41": "a8qBx3iG43kEXDaJzbefddRBXN78fyJKWJ9ak49qXtK7bW6AEyHB9CkDs2tcEAkCZRKP76fwtC2NqAvq44gaW1S",
  "key42": "2GGffDWBj3Er37YY7hmPcqazoWs33jQDXRUDL78fBne191ECWdHhuZoDRJXkbuJLtCdvz9sTTWgFpVR1caHU15TP",
  "key43": "4fDhNXuoCiPBSbE4WzvYgzCdagwckYBYrZCNHkJ485gNP5vdLGKfDoJum9zbWVssvyffwcMYHovMhKzykw9pqdmv",
  "key44": "4h3q2NzBWJ8er9p7qJzU7cQSmb8taBCAfaG2j84fP7VNtYrh8R2hF81zUaCe3LGw3MxKCKwfn2gyxfT2A8o1ZXAZ",
  "key45": "t2dFRoqHiqxyGEJQwzxu5Xj3XyYrBGxKpr2Y4YatkCCenCaGwiS3GEATWzMTWQ9RT2YSU1ZaK8ta4C3PwTHzeKn",
  "key46": "3KcmV1DxR8HmGexArsLf7t38iXYYQySZNsnog1YBRyzWrRNNJXbnZ1VNpM6F3EcBpbVoyf1iSHQvf48p9JzyK4x5",
  "key47": "2b9PL5527maFQUBx5E5DcNiT6eGbUaZdkEZSW3qs28LRrg5c6oezHZBaBTJcQkSfg6SH5haYiRZ98fYwafheHEYo",
  "key48": "Y1TZkpLtZ3rpPFoVzufStBqLXy77JCSBYv8PqYuaZNM6mdFZzUBs8CGSNTXsx4tLybvJPGLPJDK9YAYZ8qTC2zs",
  "key49": "4v59DRdRypaf9VswkJWhZM4sDprCjY4L4oDrFY5YqoGwUjwUbfVxSBx57N6vys2AY8pK6Hu2WkwvA92tzfMJn2oN"
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
