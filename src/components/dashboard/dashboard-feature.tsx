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
    "2AnMsbm2reuyu984XREa24MWdW4SokX6JFP26hxRbK9LLuhG8g1LCCgyTTS6yccp1MShDWgFA78Jg2BnigCpprbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1uX9Qqe9mEqiE92EFv5BHURwdq2A4PsSpKuRg8ezykjjHgQrQtqBj78gTVw99tJZC4Y82iYxCKYm3f3otWnXuq",
  "key1": "3A3B5qVbYUanS7SWgJg25qWucy6dq5DCm4BdUrbbfrXGWsvjBgqFPZ7D8DyJYVgTv2YdgUbVk9kQyDuZfaQJLNjQ",
  "key2": "23opujdvLkDrCEPa674XCKJgRYALUECGhAbhAxoGMJdemgsLkbd7LE2VSywNtnSZVnUrDv9wb7DXa4EHCRDmoDU7",
  "key3": "4rnncCVEjr21STrJmdggqSmmRAJNzJCh7GZVLjLDVEA1ZPoxLtA2BUsdG1M3XH3WzDTzuK3QHgREWxt2rFA4S1pJ",
  "key4": "3Rwcr82sh21Pe9Dap2ueVEfHqLkvGX6HJU4jC16duNin864zH23qEWqfuu1UJajU2Qk5mM4aNqF9LHQ5HsMDx42F",
  "key5": "GiWh9jg55AY6fZhAV2b8Ea2FUNjawQMMhqt53HpLVc5f8jMpMJSNAx6XRApqFb1w29Gspu475wGVLbBn6JNRZrg",
  "key6": "4oYf5cz8mNXUFCjPcQSUPp2y4NzJRkpLQhZz2T1nwJ39QPtPx7YrCgPxHikrSv7222Q9UebkFWsyTiQ2APBdJUuP",
  "key7": "5JmZiAbDAyfxfXW5Wsc8GWqitaFWbZ1cXeGcnu562LHxi5x6bZDqEkdiQPpZjbvVL9YjHmq42JaqTXoDUZRXmWPS",
  "key8": "32cSYyS6ywaNKjTN8NEgwXQ8HVx8ee6yXwwYCDrBsh5seWN9bx8o3aee3TxyN3jkNRDMFoTev7G9YCnNPkbxHoSs",
  "key9": "46vfCXLrQ246fhKLQ6i9Ns34vCzFwCR4Wn572ZpyxiijAEu5seva4hDwzJqpzHKhYMKpU6rU7kebDo8YYoL18iCo",
  "key10": "66kM3ds9VxMXfoubHvJnreqDdiquUfZQJgjGXQ6LdDvL5kqWmmBpfBnhDLJWvrkWWtQtqoxMmnKiwzGwKSHcVd2f",
  "key11": "2NCDbp2oScb1fn2VUmsThDomR7v6tYRYXURToRJdga7s3X9GRWAH9hPB3XhM8nuV5vVx3dLzxcrfuE2RoMNWj57s",
  "key12": "4iyExw1yMbLGv9x1FtWPeQU229vXE5PoVJcwiXABY1DVmCNSEs5xjT65SyFrSyoD2eeppJxvKK1thLgGgoeKPMUP",
  "key13": "4ZL1HmTco6SMvt1xPn9DZMibQeguNFdugUU4SJGeqUBTkaM2j73VfYVw5Ayh1W5ZP1fTqWHWST5wmgWbbhCNzKMX",
  "key14": "4neiPdx1K1Cc6WJosLMw8byD6fKmGmucW5PHdfdeexrRis84urg6g8y54HPXEB9iTxd3b8DzuAZSGAvnrLSqKuy2",
  "key15": "2swpY43FE8AL8UqMND23vAFGC3Yf5cFz53hxuBx8zpM58j4aj9JSL3YuC1MzgPhVU7kdvCdsoTFy44jDJfPPnZHx",
  "key16": "3Bi9KG5J7Lx6gFAQfNbhzhA179eLZJ8bL4qKWGdv16Mnhoi5GTWFYzteLwN6PEPwLaAbmHTHF2mA3CUF37yx4bWt",
  "key17": "3Rk2XqpkrZKCodC4LdJUaf4K9ysR7AVFjRornasA9NBBP7oSf2VTbM1yGme5yyyQ3Ff3wjA3HkACS6MZkBWTicB9",
  "key18": "4T6otpVsycL8hPaKPGmgjxbpTwLcRKABb7yerxb8aCQZVzhSVpxX2yrsSGfNpmzVH8j7TdpNGofenUo9XAk1aCjV",
  "key19": "2bEX1ekZ3VM7b1AhXF1Qw9y5AAhHZcrrcMoW5q4tc4jkmYpp6pyizjGZPfi4WQKAx22i2j5WW2c864vK7Xczdj1K",
  "key20": "48yVtdjXAp2dsSCX6Py2CzbjXAB7qm2zEt1dbFowaciC3dwckRoFe1txQu1Zk5uPehAh8Ut2Y7r6MuEsuUew1ZSC",
  "key21": "2hXvdWpqcHDTMDQJhiCAA63irriKXizpNjnESNvmMD7X8n8aMj3nnxTiptUJVbC3LksDUuNCPKv6rFt7LZGRyXQo",
  "key22": "2RKVrHQRayJVmZhJtMLVBby7G25WDTR9RajL4WE8iGDsNJLzr1bvpwiL7tojq3tJfVriXor791rpEzshcic8YmPr",
  "key23": "5KuHPMWHunre5jwpXgXJ35kGK3gNoZehhAW4dJzKru6aXJyLNY8UBGZeN91GNEeMPmBvEvRqrSKXzDr5X8owq193",
  "key24": "2FGZpKBJH6MDSPnd6MxNuFFhmdwQhuDicLK5RF4dryZQnzZzbsVYgm6De7NKF59mXifsVbPBz6keNtviNt5vBiJG",
  "key25": "64ENfVT9FWaB3NkAySYpLFwpbDfwQoe5iozbLsnAAcneMoux6YHoZC4ehjX1nJzZMPrywWbT611fdjkovxYM6GMv",
  "key26": "3UvPiziJf6jPvL7W8EpXr96zfH75qFRJqjvPEhDg9dtBGKvyVLPVzxYcrvpCqN9b12nvYsG7JZscfPmP51jEoC42",
  "key27": "5gdSkAoS2Aw2AD1sZJePyL9bASgBnNSwaAHioXrtoamyrnukccA8BpcYpXti2CHMFSGNptZu4ShezhTkbah8FUhZ",
  "key28": "9EY5tWqtoeVAJk245gzG1eS6sriLvd9SZccseDWhPP4QuxBz61HdQ7XBPNAGf49kia6ZypXYv2YURUoBJ6Pmqse",
  "key29": "AmyRtS9mUkXc57TuBTkS7wxSF8ceZkWxofoNdjBqQAY21T4sBMLDzYxVwNqgCnkDUx9Lbak2n1HcYpk2DRDtxZo",
  "key30": "5ZZs5XoTEL9n3gfyYVxHufHNZG9HJqPs61v1oxBQUgdqHyfT9Q6JZYYAKyZg7Z1iJAht1h8YjkDJ1GfsLuKHw9yp",
  "key31": "d4jDaeSUXgEVWFmNo8gcdiuMwiKy7vUmZojort8Z7CoVV1whCJjsashWRUgwRxXveQ5Y1BY31AMPBywCRA7fXEG",
  "key32": "2g97Fjzw5mAFKV81YDJGS8etNmyiNSUDkzdCzeHKbFZj6vLuMwgjVko4BgBs8jf2vYXGu2TZ7LqDDRoeGhgkjraZ",
  "key33": "49kkYcPLmErB3LVDn8WQzPczZNL69tQC66Nx16MkvhfQfo5MwWRTLpfbP8Kk9p9sYLDHXAoSeqn5iDhSuF2HZpJd",
  "key34": "RxBQ57sNdzJTBwvJ9JC8JoKW5ppaDkhunwNjtetm4W5ZSrT2b7djDh3obmiqUescQS6shsNvNdxgjDeHEvHnhuw",
  "key35": "4CsAZvD58TWEjChZ5HStLLboJSgUrPhgu5NydNknGrtqqc1jbW41wwL4LydXWJmCw2trFf7PeDmdK3ZeausCNnAX",
  "key36": "45We6CaB2DV2AABMsGHKJ1WgzAoYtjCtjA3QZhTjo6cNAABoDLcvWmcLiB1FGeKBYGgrZn7wLd9rnFLU3MapXDTQ",
  "key37": "2s4Z3ZubPzbZkFtuTC2sE3HdJXVArXxyNDxaEUCP5TQq89ovRmfASdpR51n7LCADMZ93zQr4gAzX5B5y3CiWyu7Q",
  "key38": "ra5dUMeyrwo6EgRcjea2n6eXN8mmwGVEvRXjHJws4yydj2vkq3RvyHWZMom2Tv6iypWQCdufnc4iJNMLwCnfpYF",
  "key39": "5vuyxPpj4xaTuMC8QogfRGL4kaZNrST3mTMNBTsj41NCorF8GTvQUEzbAVhC3ePVgmHAPR4CpD6svMQKHPh8zJ4Z"
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
