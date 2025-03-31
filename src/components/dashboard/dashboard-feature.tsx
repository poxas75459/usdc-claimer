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
    "475zLkyfUAMyPfuw9cuX7B2cLjayUyX1v4wd68G27HT1y49RpszvLUx2YgexgQoiPfJgT6VNJ6DEdwx1WcQCTS4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U66UwRJXcLzmVNU9vhFPHFvVBF9Yz1jhAnDMoyUdMfXAJze16PxBMda42UpZEc5Bqa8jHqHMJphfqHTyrhQzVCS",
  "key1": "3iL6z9SfduKJg6Em6BaJi58WZV2heVjJG4awwR7tVkYf4KCD6zRDywgFsFm9PcRQnC1skgC36Ptzhf2vFYmc868P",
  "key2": "5Bw5W2yRX85SVpePfwfvSzg43Wb8ZYXzdBZsrB1PCJQ5nT5d6Ti8BnEDfVCsHQ8VncqtXimAXuRByCdAK2173zSH",
  "key3": "29CmNxhYszrUTMKKuHkZEb5THVikqRXBQ3WB7uCDsebKxwPvYvTq1hX24h4dPkj9VFjyr1sxU1cXtbdr4j9kPnVs",
  "key4": "5QPaimauZLjzB35PJxRamJszhv43FNbchmwmNBA5ZvtUjC6pjV3TcpJYNduUdrADAfVFLWraY6vFk2QBZTE35RS8",
  "key5": "5NkSzswdc9tNGg5dQJJK23JX7B2wLGtTYD3mec3XBaBpvYR2FCxAcNopagpe4EVTC6fQQxvvqXMAxbhP5LCLJJa7",
  "key6": "2AJdKuf2bXbEyHf67DyvsPc6sYevE9CkQU3vpnZuVBMasi1BLHaDUh4gZWQCz2pb4xAhYpK5dGsoicTaGMmzG7Cy",
  "key7": "5vstesYpxLQp69RGCbTeEHWGFsqDpGjGowUCuYkzuaR3kwHJL7F2f6QF7L4fpse4kJurMeEySoAtJikoz8nrhcbM",
  "key8": "4QXrjyKHQRyg843SpdEhFGsLPxbJM81i52QDRoTQWKJeZSt1Dvm9GnonZB8TjSaGweP8Jfz4S2YgHfaZRfuJJ9QF",
  "key9": "q6J98NWMTMejSg5JnWcHPVirRw5ThDz2eHbcktwztAUycAvHqtTyPqHydA2HqPsC37AJAk9s54mRhokYdWQwevd",
  "key10": "3vE4Ra1a2QMANETvZ2svHtQcqMUgAyWnRZ3mYG9rKXEC1mqRunS5cceVbW9AQQAsMkAU4GsqssGvVeMaEVnLjkhD",
  "key11": "28bKK5GsUQ7CtBjp1gUm5HdURzrriyaiqF53ARt3zWLZUZnmaHTje2DTbtkqyehnZutM8XfDTXDnkH48sof4PPXL",
  "key12": "2QF9rDRHvdeXLSUzapMYSvXt5CBXgiFxFrJvH8LxBFeyEHB3GsPNbjWvpBznpwJwk4em1yd7Pceoz3A9pj9jW8Rd",
  "key13": "272bN8WtKnLdFt6P7WAj63gmpNARYvoCqaaXjEoQmnoHuQjaQQMX8nNiKqQHVQ8sdTVNncmcQWyYe7RujsHjfNwF",
  "key14": "3EsT5kVSazSAAEe9mU6jgPRu6q5xEaohYanzPEHdrL1p8YCRqKy17xbcQJtNxbDpaTWxwnLUoif6tgGhEgTmCVLt",
  "key15": "4XGcWWK3yQN4E8JyDN1Y9TfVLXtfPuZDpmHxFqRPbqBAyfjxe7JsPtJgZuYc8aLt31MqGnb9rbnoMvhZSdG5hijL",
  "key16": "3NGAr9bU7gfL8zhPDfUCeQ21vu6SAtmJwjW38w2NzB43EqVPzF41LheGuv3WNZYg2jcx8s4t79XDx9uFG2WY988f",
  "key17": "PPxmFzFJgWATPeMkGfyxqNTQnghfmMKuo6m4xrcjdNgbjPUmmXhLcs14T5n3gU9KXmsCqgEMcRG8ZEUDEFEMAkH",
  "key18": "AHNAa7Q7iNgpg6TbHbBJFNZkDaHvwqjRkngbEYWaKd9gHhLKrBVAxyFtTWZ1NQFNkcLVZPWbUdaVDvFFWL8nUPz",
  "key19": "5TyT3uW9xnu4XaSiaSSsow2qd1uUx2NKJbgWdpm1bnRnfvGv8U7H4nAi2VYkEb6dgPxjmF8bGsA8V74euqGKRyEx",
  "key20": "5qPyJ21r4YJnLEZdC498c57omPNNTehFk9cYsZ5wSZZ39CG2hzwDk8Bmp4cWF7xN2ZkE9YM2ZNXLqjnMu66z92Bw",
  "key21": "4756TRP4ynJQhLffxPRjQzFuT7F8GaxLaTfQPBMypLNMxQM8YxXXS8Y4puNGJpvaGg52Udjh23r14tVwFN3nnVqp",
  "key22": "5ytfgfD9SuQJpWH5Z7eKt9NuZAc9MgFGYRGy5EvQ6Ad1WkAwXDUkMDJbEKaSt4hbkW8goiJQYMGFvTzU2awpHDMS",
  "key23": "32AZpFFWkoGSZdY5WrMV6sHPgHj1bG1brd5WpWXCZgRWk6Rvi7SMgkm3BoiWRzCRUy21txoSk2jN7X5dwc5moQF",
  "key24": "2HPG5ihL5uGktg2KQHKqje9635Ai3uLuoLxEp2jHDvYdTEvn3cgF7q5oczZDB8bFCnnJdrKh3StkKETNv4zDnsU5",
  "key25": "3T1dJfuEZVrB3Qy7VnyTDbKRcj7yEXJbmFhboSx4ZVKcupANSwo9ntxkXKK5ajCnXdMY19MSLSM3cTbHqQQ4zpMh",
  "key26": "64VXtADcejjD8aDCZtxA4WxYgSiTshUfqVxNnpkYnR6VA1SSuAXjEFhKcgAa62FWoTzXxNRGZreyxSVPn3d8bCJp",
  "key27": "2mqgDw2isiUdbjpie19E4ieTky5TnNGbprNXBeiphpf8CaYs2Mv4TLbW8pcRHjvUSNYLq8tcPEtN2XrhGYFjD5fK",
  "key28": "4pRU5K6GuqoeMyG2Z6hZxZRVZ6hBvvyufZ7hgvJvEHwJSVSX3AtpWEiZfWEYrW8xi1H3ENEqaa8mP19PzQegY1tj",
  "key29": "5anpjyi382Sa515UXoyS8jFetDH5ocqc8W4eRFK3QAkYtb5UYzkwTWLGVu2b7iLBEyLbX9YCccPCyRyw6jsUFoeL",
  "key30": "53TiVrU18BwJm7aoQA21pyAQD7KmqvFF6mcUZjvAThiPzagTqND9E7hw2cgz4rdTYcRpN7PnHwkaC3pudZF3Subi",
  "key31": "642eqVomJZL4sPjo2svkcJfcHTE56UV6kbjfztD25PhfkLGiLVYhhB2JC8PEUMYcnuhdZF6kDaeqeidVj1GsMhcr",
  "key32": "2zQY2wuAfresCTwxdBatxJZUpPo5KZijpB74Eg1KvDb2UxUYBAh2iRPDxeXD3bMVb6wSdkjixqPbeDes5Mj94hU2"
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
