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
    "3DagrYXf1KjZY9cdN1F9P4roTsdJyZEkki93y5j7EB1VwsqLbxcfPuTMg4r9aR7xm1KoZ7myW4Mb16rZqCh9AoJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PoUgPENWkm3pJWHc9ZWXh3xd7HrjnrhMPUDiwV2qP9EZGkAqFrfqtCCuD7Tncxp5vEmczo7Lyr2hrb3PZz3JTbH",
  "key1": "3RcpARzx5fHAxEajDJJfMopGF7NrtXmbnZv3dHhGgRpsGNjJuxNjQp9zFBZAKpFD3ESYP47qAZuQEQ2933WsJJYY",
  "key2": "4RD2d3nG9cCSx228oQXT4jwhPr8PN2oJX7SeJ6EmTvtexZo13ggaVbr7VwANcXEpJPJNUoDQNK5eG74BUjJHE8HQ",
  "key3": "67mmRQpS1ZmHbE67eNMDCsYU2yuS2te42DCUGJFb2TDij4VUhzz6LGZPkdfhjsUJKcVt97djz7YyWgubQFDG1m46",
  "key4": "2iiqbduCf6TSDe264AL4hi93pL9qgAFbKjkcfivFUbPjbWGumAbtJjopTPHaQcQ35shnMZR1SJt7nrcfX7b8Xvik",
  "key5": "28ij6nS5kzVPJyTmT3Qz31PxDroqPQrBtdkJBqCQpjcmhceTzDgd7Td3vYM4USiA44EeMBaatBrzXJ248PFDW4c2",
  "key6": "5NkNtWrR9ptVeAuvnQCWsUCUc7aWPX9YuskPw83XcZZNWXNMSy9jaMPiHksB5vHSf9u4fpu288tRaPRTSkFCruN9",
  "key7": "Sz5d4HYFHg4zxv5a8Vvoj27p2ehVvbWBfgZej8WuoS3ejg3jDy42j3scuU8rCUZDjqhsf1tb7nxEkyjNzcbwVK6",
  "key8": "2GZAk115bc84TLboyfWNvGiEX8c3RzF3fm3LHKEU2TmdGhNjqnLrr3WxBaiBF8kwEz13YErMcJD7dWGLFWHdVWiu",
  "key9": "2Rpmfw5yHwrv5mNgoPpBpYnLerRgqwH4BRtPbLL6jo4ub9NydRYwfcUQXGhfuYrjctNMy89dycMLKRpboWqQNg86",
  "key10": "4atdECazALujrz7Bo3HVKXgUopcSWr6hb19HynVQhpgBfCWcHVn2sBTnPdJYVuKBHUi3hv9QUqgAr34bxkgukA6x",
  "key11": "4hSf9EV3w7urasVzhjXtjQCsDHYWhHVf2GEP6SZpi3Bx6q34YiTFjYhNfYe9zj299d4eb95W8xbGf7foTGQ2u6DD",
  "key12": "45MqTmu2XGuQ2LBjwbFmYVzeto1epYuxQ3zqrZgP11bmaLJtcuU7kqxXxzXEUBV2Kje3F8M2z96m46f2mGau8UKA",
  "key13": "3XwjH1Y3TX5z3w2onq23WjnUuyvXrTd7yofEGRVSV1gSDJmc6yrc3cTijsiis9mGBUHgShRDmVPdhwxHpU1WQvkV",
  "key14": "56Bn37LeVPszB4QPq1upeGjbcWqQyp38wDxQCUqd54XXrbbthAxA9xnVi4q6kJ77ZKyLZj7JDT6Qq66ajWd5TZq3",
  "key15": "mn5485ga3g9nuzMhxpuTiwHRWMwcrkk5LctpQ3tGzogQStULaxhQuGmoRCyw8HUxUH1mTL2fkvfw1aFovHv1TMR",
  "key16": "5iP3iVCB8Hs1nK1LuGHF9BwDvQoxitnyYJhkczgN8ZvZvpssuFaxn2d5GmJdCaDCUC4G5oAntXXy6eQ6jzhNYdqN",
  "key17": "2837Pbw8cPdEjKXxHEbzsvkSBSf95utvoeM55tHmJfsJwMY6z4ygdksWEVfPJptqH7FahCSAssLY4vw8aHMWBDiw",
  "key18": "3ucRLTYBmNikLxYLQCJHc3QkQKFpzULsXSaHzV7D4rzrnse8L9hvJSm5phZf487rmpB9cZhmpSVgvii2WXuV82yA",
  "key19": "5f2nyq5gfUXwc63j5L1UiP9z9ttykXcmeVk31M2sAZSEiyZ1WHGNi8QkwVYPxWnm2RmC4U5NQtd9sHA8BFEmEPoQ",
  "key20": "2GgsBzSEUv11SQvhcDySaCYCLSfEfrDZEYeSjJ4pA5qivBXPb6PhFEQrkoMnsWekcr2HRbT3RzMVACv1Gwyr1Uro",
  "key21": "AjU2PbbS1fUgyH5PNpAijYgsMy9bExZBZkynAr9f2vQfMxvZnubwJuGv2RMYWrTwMT4xQU2LhqgHTMnewrTPrG3",
  "key22": "2qdNBi7d5iDWkM4VtuyxzwbUqnbCzEKyEqyBoTecNn6KgVtkMeDUAURRVon2etiBS7qYUELB471FwyHua937TM8W",
  "key23": "5XX5hjqxWxtNuf98UbVsjraLWin7aDELgNaFb969eydSc7dp4cMwhzWnEgJuui5RoyGYzsjPgaDumg79R1oHQnCW",
  "key24": "2PRgMbVa5eV7tYqdWA6LHP7DSQAoDmxwcmDdnUNyHBu3bVvc4vTwLUj8BZDTAj4SNpXfjCbU8xinH9HX3pLbCcGa",
  "key25": "AFHBeyZgwtwP1LS36ExGxRTgngzWkXHgR92nQjGZUxtmHstP8uafh4AjoBkeEPUXKqViVb7XLLVBj52xhufy3P4",
  "key26": "aYcNSNeFNd4EZy2Z67F8TognPJrkJ9Ukd55HUQrWGUh8pfd6SuWamrs3spG1un1pUw9BKFz58tH78cT2hjk4c2e",
  "key27": "3UzCscundBYv3C2a4XqnuCDQV8GGzne4tPPpWVrvsPT5Wpe2QnSovGKrnvD8gzSpBBoXxYbpWqWGKCUYEp9y9FXw",
  "key28": "56aQYMKjaidVQYqpQw19CE8ggJvHrWzSA8WcPkSvxC8a8AKQMjTTaUAH4SQM3C4R4PgvvfakUTU4XyYPVjRbJheX",
  "key29": "sNYBZEdg2ECUHtUhCH2PMGSEvNWwQMb2KF2TzJ7jWf5DB7ELdiZQKZDx2qN6w1joNGQLT7TAagrGMTp3h5jACnP",
  "key30": "5W6VYJtgRpFurmEA7Q6zDwqwLjDNc66zHpZHz9bL9orS9jHXRu7GHhS6UZs4HDysjJgDywAJfyxTUaju1FjQKQ4q",
  "key31": "5Mo64xMZ1P1qk9RzbZn2yGafMiMXJZKz1YBwHb5d8dcZZz2TL1zkzhv6PyLEKwVNPdR8FfeCjVhewtP2G7fpkACx",
  "key32": "25t6PoehDcv5AnfkF5tY1Rgzzywq7jzmKWHdp4SCaVxXGBd8juMtJ4nfYDCEEao6YF2V76YVgpDTn9T78icXYbni"
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
