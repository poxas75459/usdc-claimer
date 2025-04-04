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
    "3XydUit8tGLyJGQu5DjQ6KJ8BhT6ratGTY4s7mfW7PKinTRWd7SPySyxdp5nJWSjC42wTzJ8iX9gpMVBjVfjtY9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGVWcDu7CYojR36Zqa1A7Z5nMZH8CNR8iqn47pxgmgcc28AKs3JTRjftqrPHD4FFhp5FQMEeB7zv97EQPGqBtyz",
  "key1": "4u3HF4t7UkxQtofuxbBqoG3toBVFDWDrJzzAnPwBb4iDu9U7VPMtcin29AKE7LPJDXwkrsztwAWHLxvB2EvpqYNq",
  "key2": "546VbMLxjwYAq34wKjXFcUs5SC94oc3BzSj7M3GdiMkv6KunuCYhmVQijtznpJq5vQgmbUM89ajvgN2djqUaDzwD",
  "key3": "5897nfJGLQx5evjX65ZUXmWTKmiax4HhvgB3eaL7MUj2C2D2VpPMGG4erBWfQb36ALJ7JoLFSaXx3NbdUFWxvAey",
  "key4": "Lp4yZexW4hWwnCCV6yZffg2eKSixEUuCXhScbfUiXnNaYu6kkBweZbL7eZEuH3apRyBNsmTrxKGr17s5TUCJu9p",
  "key5": "3VBZQhgF9T453y3WdeJwKJ5hhggGMPCYTkJ9a8F5z7ABWSwNdtjwXtzzxbufvEnjnJo7KdotQL4ZVnwJ6z51cR9W",
  "key6": "3Fj5U6veniegmrTrJ24dfcve77jw2k9s3vAHbj1ToWWYoPNU5yiXKfNcgYjxcjG8cFAUbKnUZ7snaujJmy8Ps9EZ",
  "key7": "46erZJqijmxy17BQvE43uLKKCR3XewDg6KAXmTypb6Kn24SJCerGonzKhZwjdx15pVcRxC8GbhhBR6YAJKrUpjee",
  "key8": "5FayHXnpjAEqgku2N5vQtkobhnFhYikvkkFwoLYyMS2gS9mi1vDT13jAC5KxeXhpna95iyeGZeEbnYNozMbZw3Ua",
  "key9": "g8qGJnvHoh1BgvBpS2ZpoMBru4tmvJpg1vHrm9gRVKezHhXF3Pjz7DEceCEDEWHq4rKbFgYro1jyZmtM6JbEgTN",
  "key10": "UtQRpKF7icZCMjmxZSL5sL8b3fCDcuhkdbnGCVpGBdUYApoyWd2tuTbLTDq64RVUueP9aRvUNA6caJ2ZgwSfhDz",
  "key11": "46GQ3Px14kbizymLb4akr1WzboAzQ3oc5MokMgPzy5kbdm5or6cG9fPF5irDFzrYKD6BsAZ9dXj88FqAnrQECzfV",
  "key12": "5NEjCPKLJbLMzLX5qtR5pRjVWHviZvePhrYYQBnpVZ597mrV5zB5aLHHSb9u2145Fqa5yTe1DVtKYJsY2LnnEeux",
  "key13": "3tzGB1PNm14WvHJHggfMnD5rjaRXV9TvPg7Lm3ZjdLKL5WsuR4bPZCHKXhk9wzsTGNxUQnhjYZ7nehhmEf99CRPf",
  "key14": "3XRVwx3MA4jrduxMLVSsns4uZ7xAWsyr3wm9VbsbDYFXJsbnJJ25gMoV8rpPnrfJyK17JTtZK3cJtvjmax7ubMHV",
  "key15": "5hsKkxcnzCVgLMkwmJAejkmwFrVp7Mc5w1QdxeAbhuz1Pa9zhWq4fSdxA1nHpbQDndEZiB6oD7Z5RMmUqe3qR1Pt",
  "key16": "67ZJQBa63kXpf83AUdpwvXXj6RSvMTteKmw96pY3sb7EZFvAmpUDhC3yp4ZqvosE14yFsPuUHgNFJVt3dQM8Yb3F",
  "key17": "545Fx1bcNagsHgeUHcM3FahoyKt7noj4DHCUCPNtspeJ7izNeaFgr4Y3W1BSn53TDMv4w4GSWiLnRV4bBq3e2ExE",
  "key18": "3zcqiENpiKLMrmiG8JN5dRSNi3QeuXA87Secgd38RKuYmXTNjeuw5TD9ZfDyPSdztoxf5vHocahG5jcXqy8DU9y8",
  "key19": "5mt51TFDTviDEsdmy7DSiK6mAjavanMVasKVASxYDWBpUcyDpqR8meD7roAdJdof3qqXj79BuTzURGc1iBGp64DY",
  "key20": "3HYP7VF4XF54mb8Sq33jMUPy4Pw1QS5YfCvAATp9TmkspvqPjCja9hCZSTVoUSjJAMNE9JFzY5tGF5YEiJtwGuPz",
  "key21": "zNF5on7sgDxG89kHP9kja6g7HC184oq3M7vFfbjejgQhcFSBQqVkx8DPW3zaZznn4iRT5c4sYCqXMWHdsgTwEEo",
  "key22": "4NpSNmyQsKwfVxXDEfnaZAJHGhVKJZf3hSydcYVG4KakYPJsiPpNqaQ1sDCY6iq3WZKK3qKyDiPrC3G91mJ13f2Z",
  "key23": "4utQKJQgxA31c3pRjg7sqTAL1J7QNiS1VDjZtT8tGB1HD77NuH2fhMyNi6LNuk8FbftygCnGtsoe7yLazFYezzVw",
  "key24": "3Vh84n8K7GuCuZiqhmQN2KvBWDzDgtw9djpp4RV781iyxZABeXwZ8yE989on4W9oKUkvWtjArSK3bLT9e52hvH6V",
  "key25": "5irMLGU3TAY2GNMH3LdAmmr7pPuivwvKw36Dx911tG61UDmSiRkwY7JawT5a4kH2gLL9KgC2ZffkDHk6gs3nfDS7",
  "key26": "3YUb5oK3GxA5enfMaG66zEhss7HuEVp6fnzx5DVDdSyq3WUD3tzHArEmGA7BdxTvKudKmEL6NvhQrKLDmbid181W",
  "key27": "53aBpruJVaEML8yG5xBE2owevop8g8VzRNEjrsSVsWFKtZWW7fZtDRhzMetFvV9aB8XyL9DEE3KtA3jJAjjavuZg",
  "key28": "B3uDUSnFdqNpsHGumfczUvCUejzK6xscQGsSofwWQvJDzG3JK253FcQMq1nqDf2YhGQTuLmsetANrviMAGX3EpE",
  "key29": "3x4XDJfhu6ryo7SxMKUDHpQcojwrs4wDmDk3SgtXqb7vz2yA8wxco2yZ49SuQHoNg4NtyVjFDiqexBjtfDTmvKYr",
  "key30": "5vKn7kD9x6QDurCRNDmZFjcvZKoqfpQsChXq2hgh4daLUY16yczMRs38yFKEcdq6YFrYp6kNLgDvsktBr2FF75xk",
  "key31": "2qKJdMH9mdr7mHo9SeApfb3ZJg1oBYAGQv43REScr1duyaoc8TkVFR2NYdA916LZePgzKWn3zw7WpcLvfoUNSx8J",
  "key32": "388yDdEwXyzq7ZUnDMB8FFG63rF42ZB2vnGNY4vEvJBhAxm2t1Zcq1b6aCe1WASvp1CKmpJxrtVHTued5SLpNARC",
  "key33": "41XQBefPWSSYuqVfxG5BNNFHMFm2v9GmwFH9ey2o9KntvwykvisHNaDj5RRY7Lotgm2MoTzU3257vqH7e2LmYokG",
  "key34": "3PeTGMLbeLnmNYRwVP9XApjhx18tSXe6N31PzCnqegiaSigE4bbmk7cgEFqNhzEFzgAtgvHnbQQFjcHKDLWWX2EL",
  "key35": "33XKEa28osgXQudGnN2ka98UHjASP7FHU3aSwYFbf4SvPcr43oK3Q6MPGYhzQqor1U6oCtheGwH9N3ch9WYuTNRs",
  "key36": "51svkT2fPJYxc8QyzKPvL6BoSzSYihzBum9EGy9FE39o8R6kfXvNkLxr8e9BaMwNg8HxVeTvSms4q9mUbdu3EXNe",
  "key37": "3m78hZXjCzVegCC8qKyrWBr8f5bF7qeN6yZcaCMtNYJmUfwrQAA8Jn2fFcMNCP8YcGptyTH8bSFYLgzViZBLYLAn",
  "key38": "2KvVr4uahhRBkgzSiMNpqJ3c332tcacPZ4UWH5MAZFcKeYAT3oEy5k1j6wVktzrJAQaf1yghbTXGrnPn64Vr3x5M",
  "key39": "37geQrZebmY7VmwgMQgFE1PNYSgvFum1hdjLQn1iGmRBgDRYiXzW5epxT6P2HLLQzuVve8hAH6pCpoQXg9cDYh4c",
  "key40": "3ETFZoMNXN4rCM28vAYgnRjeBgYCjDmV9kJBKxZgb2X8oZvYffB4Du94U2VTbEpsbtMgA3EZ5XjvFgJqst7FniSg",
  "key41": "4aUv3E1yYpYRaa4GDgornEeSpiJg423eXHrM4T2oUVt7fMTRFs7GioHy94KAbwtW1aZV99Pq8o6p9QTsE5PQrYMN",
  "key42": "ysaUFFFUUjSMipaZWwKVLwrKdZmvYCauf2ZgQ9k1zFTytjzDCwQb8Ljt7MaazaE5Z5uiJQoWVuKxBojzoz2vEZ5",
  "key43": "5Gu31KHitkQpLzsda1tiFpSAHEeN5TpicyRQg9xArgkp7CmtHH9MY4tMGcj5RKXairxYD9CfVy6SzdQawnbaTsaJ"
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
