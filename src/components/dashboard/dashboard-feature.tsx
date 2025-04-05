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
    "2rY3xGyt7TpywTnWKKzGuuXCwyZRWauSGW1w2DzNhDCfx284Tmf6Y4iDcm1hBeu1ADyx3bd7pa6xEz9srn2skXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3542LBvtceon77FY9iexCZnQQCUwDULdhvdqJxFdJWqnNkupAPJS2WqeE4DowuGpVQfcCTiwHL2s1NaB2kgnEoHP",
  "key1": "4DsmizWbjYYTZLmLzgAPCCpGfWab3S7AMhQMWTcVRgrTpBiHoEz27HQPt82F5y7STTTGpyaVqWLD9EUQHD8dUVX8",
  "key2": "5D5Lg3SmEtCoGW2Af2T9CfjAtfhvJY3RY7YrcqwSCRh6PLLuM3776BfsCQf41kTdLQsyUHV5FbpRBPYx6K2odbod",
  "key3": "3s4Qv828cmaf75vLbP5vt45C6VTQRjJ5r2sXEWgQxR3EHa15hsfzCg4Jr9ezkovv8ecGunw7oqUjosvW6K1SCUtU",
  "key4": "5wntLAoQMJiioyTDZBG4SuPQDbG8d1t9fEwzQCZ75ZDgubDcufPxeEiJiqgVPsp4nVabMoTKm25szrJs5rapRjvt",
  "key5": "3gsUTcx64gHAcewtz2XHnq1TbYkuk1MvQ2nnDGhdR8JhSRwD2j1TDq63XzqMq8xP4JwzUV2Myypj6dZPKZzAwMoq",
  "key6": "2B8SZ4GBK4DcD7fRbpwPVKaihUe2C4qYHsjC6b8FenLAUzsEnmVdtmwieMJrv3kDFkNzTabnyeY4bcTr3ZE7NGF1",
  "key7": "21CFoEgbdjuP5FH8k1JXqV29LfVHjt4kVsuAae3t96h5UBJjNpgaX1gqzRWFYciYi4m7spVobEjLGbBaWfofddAU",
  "key8": "2Z9AWSEZefbhLsWEhyzFCE79pCQd8HbUkUTaJvFcrDN26JqQZMzLV87GaHg7ghjj328Kqj9hiXQURoBD9vrn2XvN",
  "key9": "hUbJ4faPegDt7pat5YhAGhV2EENSUu6AMHYZ4npmvmp4hhr6v76BX5ke1UzJN5FFH4RRKaY7umTFQNBtu1pbrhV",
  "key10": "2y99APpJLUspkAqohKFVmgGfrrHaLbApt5gfRovv1Kwm1KnoeaySinEeN2jb3CET6MLG9DLT5XAmE8mLAjd6BL5G",
  "key11": "4Mufvp5cHeha5v3DgCNaooms1f4h1pLNg41GFxxpHPPHkCsc2iY843roNVm53KvkRaMd1wKN1SsXZNmhpm9QsM6F",
  "key12": "47ak1DnqALQcagLR1deWQdKaAaCEZ2FvP9Pobta9zdqeMj2mju5nwtgJrsF1fyRWpybb6K125DBCVsrWMoiGTBgp",
  "key13": "56UjcRGNTUM8egiRwcknM765Zw4t5PjEyEpYjsGpnbhn6QCrAnovHu4ZWxGay8ZEpAtq4pGEZVN4hKRxbM4Zasmw",
  "key14": "5WAcCEiubr2mnygfn19rfpA61us8V2f13Z2qKFJm9fUAGUgAsCGRTw1xRFe9BxNkHe1E211ajNvsi8Aus8UvSBXw",
  "key15": "3vbBbrcJToPWQh2FG5hEWq4ghYEYLiyk1V3u5uGEBUUVebXBCrFmV4rj9YJoMn3mhMsaNRNSkJ9j42o9cehooXoK",
  "key16": "2CgT8QF8CT4LFieNwAh7aJ1g1HnSv44AnP5c7JKYqesZxzhVtVbSBqfSVVtKz2JJxGk6TR8b2F474GQysoJsrxDd",
  "key17": "2LRnKb9mgTiB1dS8nPxSNJ6HtULGAjc3AkSC5wBj8B5C1xqq8pRPyA5EiYoy4XZKCNmaVoxGUUhMttVhMFSFPXkB",
  "key18": "67ZFMsvcum5mNnNfmHJTPgKEFzt9afaUg9EHmGQsj7UT3qnXXMPCRuxoTqxXBx1Wbpf2hL9pUCfX9Vht34MPNJ8J",
  "key19": "33bfdhyrzv4ukitoNkaTqVn8XXKsDBZpQgiJiZdFt1jZZ6zHmqRoFFRUqhuW2dgLfkh9KkBu9mwnREkSew8KDagk",
  "key20": "2pocQq7GySRG1iY7LbXc1Qqtg3gtruZZNRujTAsnydThdHyfmkwPu2xbTBR3fPyF9ToWVgjWmAx7LbhhJSEjRHJ4",
  "key21": "5p3gJByXoFdju6N1g66mXXkmnfEdFSXaWuTcd471WS8uF9cCaszV5sdhB2xnyhdyHm2pjAHZ6nCsAQ4EL2HDmXkC",
  "key22": "XhNVczC4BdTTAMWH663wR8Svff1BKtaaBVZjqnakRKLejJTxfR8qhs1oeZ8p7Q8YKXmwLngE4AEn4zwT5GMXZme",
  "key23": "3CkgVAVNVyUyN5LzkPDaArKsr6jhxGY8JjGBPYy5MhdwAXoRMNHMJa3iozCpWybD7VSyZR7PPQhGu18DVnm18jKx",
  "key24": "4BsNhvqrKNfkZSyt98EGo8rzuACZEBXHPHVkE99XLetQtFdPbN5J4XQixQWKAnGx7jWvcWSECtUGhEqwpnCh6ppY",
  "key25": "Q6DpnhqjLGa8k8KvQCQjL23QDJcaEXEsrmDoG3nMQZRYotfodpjDK4iz6pe145ezDbGbMp99wvQT3gjrWhAtMMs",
  "key26": "5cgq6WnESCYCon376T9EAjzVwAhHmSzZgAni9gTb8SSmBYdt6VRUr7AUkkU2SLY85rQ8DsWVcLFyAFZjwCgNS3UU",
  "key27": "4vv5QiKc6o8xsZCHKyuGhwntHsGRo6Wi77XP9XhGDiu3E3YYEbPs9uLmJxaGHQ3wiPEZkgnUZRv1kfc2vomNukk1",
  "key28": "31mTGU2WZshgCa7seQRrDhNcQX7o42WWcPCMAdGsFewEWrWxbpAWG4DTDmqpCxyunHi4XvGweQoZCMfwvmKZdYeG",
  "key29": "28CkHqjd6jyuRinTDNQ4h3jNGFjYm2asBGCQ5KPFFb8eWGNQxUSrTjqKJE8LL2AYZPq3SPbfoKLuYTgwX7cBzpjJ",
  "key30": "5HY13KrrTHeEvkqJxAhfw9j4btDNY7vT1p7iVyARgeZSeaji9xHoi5sLT7pr9eUs3XmZYA2Hg7iZHzoaBWsGr3BC",
  "key31": "3Fa3NzhX632ckXBzJDAAdaHwkYm3yUBoic5XFPv7e9quWzuJN8tqVFg8uqDQGYrWN7KCR4FyBiMtY5ZwVHieB7uG",
  "key32": "5MLCbwGeEFcLGkTTVbCPA4nin9FVT6mQTxYCzQJbBYbVc477iU1GzeF4GQMVjS4MuhQLuZyCMMB7YF89tArbiU1S",
  "key33": "6HVnr55YQcRviSh37NgJmYa3tjaep5sgs1eP6Njw2HsgSiJdVsf1ZBQwmYJSWQpZSsAjQFYmjUnqGTrFsvF5eF9",
  "key34": "vzWBvyft1notv35SriuG38K9MxYsua75ysA5RscLWb3R55Uk3BPjqMvxfJm4hcZoLVQLCV8bmyP4qMZywfi9nrL"
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
