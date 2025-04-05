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
    "VHCMYdf6WDV3boRH83jW2a9yyvacRY7bsowthuuPniPacbV5rnzf2KNuYMTHsgkRBi7bNsgGyUsfq6F4pdVHfzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xtH5yi2m8rUd67Xbm6BRjQcMQN7Wbb3e1XhHcgGqDjsiySDe6JnFf9suJf1FBmX5RK9TtzdQ1dBRGwxnAcewM1",
  "key1": "5oSitQPejK5UEBUNZv67eT9ukjwDT8XsRUDag7HTUstdFTu6WBNH9gN9t1ubjbmSyb4Vdvb5gm9CrBKU8fhPPr4P",
  "key2": "56xBGo5QjkJNyx9TnonhyeGsNSdWFbnancXxrdz7SaUs8qAC6GEspoXqGJ96TCTR4D1BkZRVi89KVPFQdmQ2G35K",
  "key3": "4Xn3CVvd1HifKd7rCSUHbi3sY2HmFQ1EnR1KFSkz5UH9xfnFx8hArJwukNLpjnNCm7G9MKpdSBMV9NEtc79Rriwp",
  "key4": "3fWqG293BFpDtikBf1wzF825CxE7SHhwtxCKx6YaF8DyBYgWdYbFXs5bpkC9mhk78ucosM779E3QkXUPTwuKe7wG",
  "key5": "4HMSHm7iMgYuFRRyrz4tegTdQAeBRN9vXZRNAitbSW6uwYrhE7qMGg1tML2nArgwsRZSBrPDQVAiu4uUWrSbftFp",
  "key6": "8nQ8fgvMBZjtjUzMNcQxCA9yW2186UGdpDCrdb9mf7Du8eekVemRbqupV2QE5eh9UvSiPG3sTjmtruzSkB4T8ir",
  "key7": "4dYYnUEymGLUMpdLEZ56jfp1uqSKZjGcgr97wHwKKXxAewps1MzwmeYVT5M4fc6S1TUg1tow8NFKVdYYjP7knr5L",
  "key8": "33hTHXqsMiv49UeQGBUrY77UMVgcoEE1YhCtaUsxcUY6YiiVDyghg6unQHhm8i53LczfVELLSc4wtCCYvuwrK4yR",
  "key9": "3dVNrFrAKLdhaDbVZbdc4BsbqPuiwJCqQpvoPHCKgJsicd8Ndp12PpiUFCCfSM3CsFJWPhPtHX6eA4y4hfLdjL7A",
  "key10": "3iXBHXXNiHuj6tVrfuRhiBM5VKvgMB3XBuNHudNNfyd946x6pCtmjQxQHXNkxvAHQBBbeKN7gsoxnx2tWxHndDYd",
  "key11": "BQuxFgKAjow67ytjncXZcxZwCoqpkDoQ4vahVLVwLdk2hqN9rzfuzV4Ui52LwKWMyTnQtnm5wsPmEnDzw93KD5Q",
  "key12": "53dnhaWHT17BBz6keKaqug38yE3tLRQEJkUmagPRvewpRYoayJemufeoTF4LYneTCjxYWPz9wmBuPnoBGbZAdmYu",
  "key13": "4Lh3NCyCvnc1awwbDdThgTfiziBzNAZ3fMxrGjWbxCG5zFXNacSUXz6WAE1GSfoqchQvTJd1sga8MuRxPuEHb1mG",
  "key14": "2uwUej77vWf7QBKx8rq6c9uQebF67fhH3WsjQiSBVuvTtSHoLt36kn7UE5BZFcUShqH3K1KWKJi3ZkbZj8iAZSVH",
  "key15": "3YUeDovnksdUbHkpGqHDrFWTx6GoEWkwfqwJEzAPd4SJnb4kriwPGRvgX5kbZdD3dAY9CkZfxg4ZLA9PynXDFAMx",
  "key16": "2u9QkyPvNoaADAfm3wcaLTtoJXZNr8nBPFtf9sSn8YK45t1mY7THx3FXHPVQTuht4nogscxvnpJGm441UaBWiUVD",
  "key17": "2tg3X18dCrEQ2M5ots1fEUYf1j6s5o6jN6wXJgXMrRU4Z8WpK51bHoNvyKrPdXaUXb19AWkqLbNx5HRgZDTQjsoF",
  "key18": "4t9A8v9WyVRfEd8C8pBEms7Cnqy8QSUTUo1MM4jRdE15iW2zYamjcrc1B4DC1LXuAC36AtGw2nW5zjtRyokUUUFY",
  "key19": "3SS7rx9QgP2Jop1rvBb7AcfZewWBVYn5QACHZxQmBCHMFGwzc4msVMp7UiF2NzMqnBkQpQuupwBjqKnajUjcFFWB",
  "key20": "3HUwJc8xzsNKAXhN6nNj3ypCpme9Lm68LzfJzDY5MGe9Gp3A8a1WzTM5iyACUq5GR9iXTKuyERmQWAUYWfuW7rAP",
  "key21": "5WoYaovK16KqxPeRiPEGoHZVYBmaywwfS9gYNHB2xZzDS6KMNBctKhUASgwoP8uRcTeSxF532zvtrhR9Wvzu1L6Q",
  "key22": "2q7b8W8abqDmuXBVgJ18sPva4BGojeckxmBaTD56bx8Y3NFRzRHEENKnEfDuAANf6hdHckuiY5DMJyco7VcNhXZM",
  "key23": "4z5tDQc7MPbJumLosqr2RDL1fQRAkQPewigEFPCHjb9iutLJ82KqMNr7NSwU3afLrgDt5cvuNoBnvWHXfKvV26au",
  "key24": "5VaidxYSdcLj2dEgzyYxAkny2GsUYZWV6xLL3k2DpHPkcjvxR6otftxsy28DFn6dvQSDCTdy9VTGC4gQ7PwKYy7f",
  "key25": "22aCZXs5pG5NCEWf7tPkGPNPopGgVV5Vuz42oDphY8A5QyjTuNHq4UAk9D8A1LBUzkgTResAFEGmEpMjLsPHg7S9",
  "key26": "3XM47F4DchJke37Z1LYj9simqSNRT2nj31qkXmAnHVZVwzQXiESQcDd4jJhiGarB8RvFyYb56PEaNwRruwLBsGMj",
  "key27": "4CLw2ZAQPy5UV617bL4FnW1qHyzRkFTfrVZrYmt42qvFNcdzwtvQrkvF8YKijnCXMXjyquzSzpt5NJ7Y4kpzyCZ3",
  "key28": "3X27Hp9KQ1bTvAM7EBkeCK4ktCErnoVYEgTqLU6845XF8sB7GnMZwCanNg2BSSwuKc2ph7LjWSnrK3SwaAA1jWbE",
  "key29": "2w9pNgSXDghdoTAuTmQENEVSsRGWCjTkxnu1Nz1SVRLRTK45vnkEExxJajht1L7zD58JLTa1PwekbnwZ5pbnKNQc",
  "key30": "4gcnK1D6K19BjXiBX4xrBp6KQK18o45QipWnFJTmTRmL8QhgcDNQNCKbJoD1MxtN5RPec5wqXL16o3Nqa2qwcTKj",
  "key31": "tFY8HJepXHCPBCAKQVuKdpYGU6DTyB1hAfpTPhPyNiWVuehLukXBoAFjyTnf4Cu514ARsPaXEGt4SSKbnnBJt7k"
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
