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
    "427x22kdbbcoqN76DUDJq9FQtoc57jdoyuvaMxqRiDQUefM9gGLuUsXrcAU1yveH4YayrxLpBzesyawckGeyFbvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sS6Fxmmb6jGyZRyu9GMBenpRQ2bvmWJB3QW1h1ChSquUW3YQV7cUxXMhscBJgBKRBM4h4JoucbCjCdGs13Ws3FM",
  "key1": "NDmQMwkzXMyAhouacmkVE3p84Kr9UmbycUdtce9ooCKokPzf5Ta9NeZfR9YQBnqw1LWF896LYrxXypwrPQhxPH9",
  "key2": "4fSQ8VQv8Kqd2QcbaPG5MSRQChofbdpDhzMq2M1cv6JAqEfaTjfzGG4Aet8ds7x7vnEHkG1FLvCooXSpeWqpU1Rj",
  "key3": "4NNz78DPPFREEFEgAY3x86jzCeftFRoazxEtUsQmAuC5PM5bueS7K1wLXjz8zkGgwQW47nZh4irv98qJcGyoaLFQ",
  "key4": "sAzS4Tm7GnDzZA3vgPXyTSHb41gJ5weNQ3zq4zY8mheitmKQnA1m6wy5mZbq11pC2swnbFRZLX4Bgbw63jqbWN2",
  "key5": "4VoY4pZYdnKDk6VR5SZyzxgJmvjW3Nwhki5fFjuQprYJJBwadz689aVLTMaB3vxUgrz4V7zww2pU47QG8JwxXUJm",
  "key6": "WV44GNxKp7ZW3vWqwrfXiiKDSrJRAmMbNeG55esPJUe6Q4eFaSM6mQGV1LAjZNLoUP9wyYwnmMF1kBgG3U8njj8",
  "key7": "2SWDVCE7Ru4GLTi1LQweaoSDEAj9XpBe57oGMpfLnCAva2xBm6hCZtbxTv8SSg6Xt8dSY2sKDNG92nhbP4WoFD7W",
  "key8": "9GrbhpdZLWA56V59KfPNBb4Nh7QXCJT3CiYUuHGx2U1Uu6YzaoW6S74DfzeKcL5P2SaMALeKxv276Tm1VwcpKDD",
  "key9": "5UHvTGGpAzNKB6jmBcXBs1eXtBWEoQnPPwfHoZS7Tpf87hEpSrU9JvpBB9hTHdE6WZZCt5Jj6n2xS8UbiSmSSuXh",
  "key10": "5Ge318jKS4a4xYRLV44MFdwmaPrB67CDWsQcuUH43Lir6BrRnwkRV9hy6kFS2hF3oN4kBYuzXxnFdpXysdFLLT9s",
  "key11": "5htX91REhR2v1ERWEATKJN7t4TWG4Cj3pJYnzMAA6a3J11jQkQsaffV2Xct4YzRUBmJz9L8bam9VrfffnLBgZ828",
  "key12": "4JSNfHbdbrAWFPtGSFRC3oyGMGJg9zEi4vj6ERVZ5CGBpV7xXsfirNbb73aeuZhvu1Sd2JPGmDbCPbYwfNorQwpT",
  "key13": "2KHcfdEgZGWkPBHHSfYdB6eys7qX3YkXB636SrXj3anXkJsvfxq7k16CrzyfDeukB9Mmez4hD3V6LyivBAkBozGe",
  "key14": "QpoRaEz2M5gTeTzJgBf2pu89NxUydE1FE9X8WLyeQ2g7qXuU9aT89zH4WiJZfTyazZShQ1vCNY17BJBtqM2fvBe",
  "key15": "51dGpqubupeYndY4Yr4TPupj35YqyL8RmoLEXaiCyWEQRf3gzG5X9jRLTCy9MJydCAoBftyLTXXkW7cZzpWcfB7x",
  "key16": "4hZ1Zb3yRZ58ho3F7W8UYv51hhiPZoGwq26J778VbErKgmgtu1nDVDUSvqzTVPqSUqe4A9FnE4r741gPgHZjXhEi",
  "key17": "2z7KPUsMEsAKN1q8tEwqnwa7mRfvDrqYb4MR9qaLr9kMXMkehDGj8da1zkXWmmaHQUf26aKvwMokMiLHTeDpSGEz",
  "key18": "3v5oLx97b8gRfpnyF9yDqBf5RqcrroAFYhztQ471G9i7Yg4UiTZ8VvfQiWLEs3Xjm88CptuaSGmfHvkgQgT1VBmj",
  "key19": "2usxjReDSqY2TSxySQc7dCYMcEbQWdukWjoybNe5tpGaCzamDAeSQthpNqCwzMazpooWM8ZfXb8rvAGc7vEzrHPK",
  "key20": "5xaMq9UcYU9F2msMesnTngQAbksPDyAc3ZT8u4hgULRV4eJHV8nuuE1dEJRqDQTgTqcg9Gno6EC42h88iEe4WNwr",
  "key21": "4AKQAhabPx9iPWUFy7PbNix5WzYUBSfgUQVeWurDubxMSYxrWvkK9Qf1cfTsEzobTUTtk9TFcBzZsjkVjByHFQFE",
  "key22": "67a8mVUHNK8aSc8Q1CL3r7fa2tG5N7kbEeMAwfyohTqb3i43Sik28iMXiTtRjtQobyK3RntLaWj61jnntL4MPjhW",
  "key23": "3UY5MLStmo7DR9bUCE6rRuqVAxEQ2zVZT7tUAcDUKtzTUaXUUZdG4FJSqDBgB6c4VTfgWCajWW2C7MMrs164D6rA",
  "key24": "5K85G215dA16jjiUd51be6HzXJyj5XaZc5n3mL1pXzTmHX2pMvNuVRCdt9p8bEUTMoUZnuAqQoqdzuEsE6WCkTVG",
  "key25": "235yipPcGjPzDoP662iG6bTpgyrN4TX2vRAa99WBuRpcAcfU8uYPTMHne9LGSkMwiaGRkyUfbZAUv8PUe3ftdcn3",
  "key26": "66ncT4D332yJeNA69gPRQSVMyE5CtdFBeSajeeetkT9pGqzxm8aCvu1Vd45JRncdzp6NatvAUrUE9X49Zkqk5tv9",
  "key27": "2M4mbqhMNx6zv6DKwkYuS7Th7We2JHUmAgp57nYSxGjyYdySBUQ12Dfz5pYFesa8Aq8YqiWhDfGA7DhbRVLq5RBs",
  "key28": "4Wsa6Xpr1TKGdoPXBF1caZVCnth45NAkbd8FUW69t3AWhL4bQujJ3t9upU4nNLuDDUof1mF8tbkBHPo1RZvTDG96",
  "key29": "3KpJrN78xuw8vUJSB7Njvk4AqE9yX9BUCmdw7FwFXoimYQG9fUCNJviwBDtdsCMwomVwcEZhPCoY46EufQRL8Kes",
  "key30": "2FPU8wWU7SubGhJazkG4R7htcpMUw4a71Ebst73hbp8SkKk9pDUxibdPZrJgQf2xJRVweQFRF2P8ewtA6RdEAs2X",
  "key31": "2DcUkqV7j5cdXPAPJfYqd9Zyo52aaqwgqwV2iUHNdUfSgZRx5fcENe729awnbfzaZx6GqJfUninbSdSJPogLZTEs",
  "key32": "3kfNtM5mVUA5oU9sGvxzU79FXpKbr7qNoWnxr2x8Ym23nRWZkigAvJCNq6Wyij1GqewCScWaTpRU6nHeUEbQY4Jh",
  "key33": "5jBoUDZ7dBFX8unKqZ4zJHGy3jtAMx3jCey4JJxBajWx9iiUFjwHJBkfFsZRSvQSqtwankLNbqV4tNT3mgsLyGxB",
  "key34": "4B7ruQnUGA5L9qUNx4DztJ9KbXZsN1fzAen7xK5uXMnFUdpLfYYbHQA6oBUCwp47xhSUSE8YcjFK5QrESM69cLSs",
  "key35": "5gxXNWfKHPSX286dfsdm7qCkDA28FGUmSeooTE6mDj6hkGtQvun6DTwRSChspH6ErgE87i6FgXgqUawgzserUaEb",
  "key36": "52gX3YLgcXxh8RgzTLQR776hPtU6K55t3Fxbq3t7ZTAwJEFBFxM687QVuNwBsnnuzpX2nUH1rwUyzXJWedKvpg6G",
  "key37": "5psFuHdLvgX5pK4NCACb3oQcKUMhLQMs1sAYpSv7vnw5xAJZV7pHm7uGC6N8t3XuMETgWbzB884zokCDTPya74Yt",
  "key38": "5uZHYJoqQfLDr8k55hVMHKJyKSyj6oGTx9Qd7vrjbP3wUDd82wfhinRmb3xp9TuTA5CVNPvrHwFoadGhnArKqP7a"
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
