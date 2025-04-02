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
    "5vP5Q2vRyLLtzBnLB3rsppiM5ocd9PX3KLxfsYEZnRqWTW1WJdE7roFM2JcGmaQCfhF64aGpHUd2eBpSnjpyS2Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxxDwWHJRZSSBbFtHj9Q9xgdeGskYktbfv6zdaEBFy3GuWq88HNgLFuvUupgqDqgjCnRHbeAh6csGNJW1ssYv8B",
  "key1": "4dsiVhwQ2xkzaVHuVdj4ijqy2PJGnU77b5gQTxyyDiGRTfEuuvFHR9fRSBQfKKEBZpd9TkrYr3q5isvVgmjrGAUU",
  "key2": "532EYH5AhGGEFJE6DnFHSnjvJjgkHTURc2ddmE8FhCEV9vp8STQToMoboTyS82L4Az6FmRNG7XoFLmuVpQYeKci5",
  "key3": "3yDjedNXeLEb1rfBrL34tmHebQHhMeRnmgvXevZeG53nG353crbMGbWPpu714padLYFWfTv8bivRY8aVUehBQtCB",
  "key4": "63N7ZYkWudLx85H6qnBRWEn4miYoPbfnVUAMLSgWHCnzEX3HWaWxJpoh232ZKDJvRkeums75XQeyeLdLpxR9JwHx",
  "key5": "5NBc5uFA99NeYyarFVAJ5PPdMPjmzPKoKLLuBJJ16Fgu3ZCg65TYjQ4VwuUBzeKNSZP5GPvZe8C7ZGYwrsHt5s3",
  "key6": "5Vr6yc9fBwZNQErMMimfm4NqGL7UzPyPuMPX3birHGgm4jXqVpFgRxWbnWBUibrwinxaEUPKxSGqYSHVsrKUrwWQ",
  "key7": "62YSiAssfyMfWcr3hXKU3vKoTGaSVYFMWxj6AZbFPMT9CQBHscLWQHaVewAJXd7oiTdXdgcDQcqjVj7bbF1JAA6H",
  "key8": "4xsjACr65TnGQ7tL6ZFarEz2ySEdV5czfx4BAQavERrbnprBhWhUrJ7NGwjWadevcME8HStJiuLx2egng8PD7f8Z",
  "key9": "5PjdyxCVa7NzYLxopDj8ZiY5diLsd99iQVp1DqkcDJcHEhCkHsVkcsZuXrip416xs4AmVchWUWegifyWt7WkHVXV",
  "key10": "67d7QL7az1KYbxW3PFYAcKgnuZ94yNvEvLGeui26jBLchVvDKYV2PKciVmpgFDmvTgoUn3CU3Ls8ZTHjrFAbbFmK",
  "key11": "355k7SWorVDpozMhAVYXUrieXTqJhzMmSgUJveRhm6zSSydJajjrKXL4MBEd44LsuYXWDhL8CNGtbNyw3dyZKace",
  "key12": "5X7vRfqtN4UqanKF9yCEotvsu2CKwXUkbZqi4ugGmyN6o4q7e5kyYLV1zGLK3i4U96wuvGV8JNedvnCPLKq9bRxv",
  "key13": "4iNCg7VrZpToTxGeCjr6XGxxgCzURpfiP7mpQa6aK8x13iDE9ShxF2DqothMCYnw6CsfVP1TZNxfsvXXmCvxahaU",
  "key14": "354xnmPWXf6ck4vooQka4HSyUzFbMi3kT2unLi7h9PP3AcKuVVNzfQ1THBf3Zg94H6mVyhjcRXS2Bf4RBMT331cY",
  "key15": "UrP9F4SPecMmyvyyoig2SkHbrXCgkhB2cKRViJJgRBC5hJnWtK52n1BUMMT9qr8n1VgXywhdaK1RjFf5UC4busy",
  "key16": "TuVYNXoZWw2euYkFFGpu4LK8b9Ds8MwNQC5hPWdzN8edwbpmezgtQxpCw9rEQtkcwPw4X6kvdTWaTHX9W71zJbM",
  "key17": "3fiGnWYCoJs4Bnuns3YZ2895ckAtqX5QyJHdyWFLrG8tcjETkEhCyTskzwxzRoq4rXKACERRzRTrpofM3dqhsWkL",
  "key18": "5yZLaQq4YwnseEpUEvPnFrQngx9VgwuSxH2Z7zho6R5tPSXNqh37h7cy4f74pc6Z13gVzfAiPweYv2xR57CRQMuK",
  "key19": "4U8SAjUYCvfSHrYk7pFxHa4ZKPu1qfz22yhycbg68bcorXSosZ64TJEsaZFkG2EwHcgVtiJqnGexzU2qiizq73pJ",
  "key20": "3Y6rzFZSzWsrz8xqsjxBMQjybpn4vhkAjYXTVdJDftwBkSpVJNah7DNZs3eTBetjbuQMCevphKceQ95SD3SNdPGh",
  "key21": "4UWnJergSfKsQwTqFCu4VEXMNkqSnKjTA6c3qba9vVAwuXrHtbwHWvqgvHr1BMPGgU3Ygwebs2TqY8SF8QLs5c4B",
  "key22": "mMhMYgyQhCbqYsS1d4ZK4pcDRac2YLgw79xsRwDQKGE2JSx8hVrpkRR3BFmbwpkPj3HG93XehmN2U56z5NZwVKn",
  "key23": "4JTF8jDCgzXFbJC1D4rq68uXxmfojUUvXMbJCnsWBVjZnq78RVwyncWmfrNnMpc8omHjHUzm6sMHHfWeaRftuvvQ",
  "key24": "3yLtYrQoa3T9Ars5edVXzS6Egy7yui452qckR7FNnohonVvnZcUHQhpGoEdw2fX8frSbsAeLwrxkksJnUCp9Sn5k",
  "key25": "5HfBv8acv8pBVM9CqDgukuDP4ury7kF17FHq6HJy6aCBJvEXKcjcSskVAEYwGcF8vttvG75B7cqN7R3mmUzyFWS9",
  "key26": "4aqJSmHuvo5Q67zX7so7zB5pjBPgkDFQ5PhhRvbYRPDocvvqxD7stWJXqfZ3U4uaxjyawsnSDNUzvuvWDTcG3v6W",
  "key27": "2ayN13msD6mWxBmV9gDroEvpHtiA7tGWcJZC2gw3Nv5CS1SkQCupyBU7cg15uqjTcGayxHqoDoFjFD4j1ShFZy8R",
  "key28": "3rd8hQEs4hVEqS8MebmHnQwt23ENDrWfZPRCrTGjSFkaveVh8TkpwvrakwkhpgZxZeir83KYBfykK8oCFnPpfWiT",
  "key29": "3RESSZUZmuzn32fQg2Jc7yqXX6iT17ZV6ih1ErcGi5Z4HEMuvEiMGAfndyasZWdeFEpnemDrnfALG7SyWTsNt2Pb",
  "key30": "3xGA4qa195tG48UuWZquzbL6hdiDQwNenPWVXmUvctCFwBvcE9fSMtDQZm7WRJZYcyck4tzz8zTeXFCnXuhnFpgt",
  "key31": "2b2fEgiPauC24SBsBQd1BpnE9gds8EaWznKwjRqqVEWrFijNDWrGEtaYbyn9pggcQfANBPguvKUCBgbSgECoLfLT",
  "key32": "3HFRtrZwVPzmVdSq2BaCXJa1RS1JzMMDK2wSCExcPV1EtqAgPfr4YxyqKrvK6S5F1XeZGsCzSUEdUibkSRwhKdC1",
  "key33": "3NkAY8ppP39CyA8BeiquuvB47q87rZHw37SBY8t2R72pcfEGovwTpqT2QY2JYzkv59QoxfMjkQyfy8TD3bLVQ7fj",
  "key34": "32C9JsZrBKpcbVUFBQuWd5MemUu6P76NriiXcFTmALdQNipL8rNv7Rq1HYfEpvufRGx4o4J5cPrrmsJkFCktNYKF",
  "key35": "3fk91wrL1EYpkzWGoBdqzGQFv9fDvpg1uPRa9cFRdJEQsTSFJ76N92c1kqQHa2UrSW3i3md12Wv7vNBWv7CjgSyL",
  "key36": "63fg7p1seyLfUc3ko93foqi1aPLUnsKq35Zu47x6X4Zbe1JdowKKJCtgQqirYMbYACk9nfb3V6STshFieCTeMFrK"
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
