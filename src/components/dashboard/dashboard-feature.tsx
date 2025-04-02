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
    "2gv9Vjpwqs1eLNWuWSUZQrhsTL1QP9uxKYa8aPCmMUc5raTpziwRffVhJa6drWbDoH9DCAjKcR5HFfkMzfYH8325"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtL6XCMkStbwkhcn4SCrhshst6JF3NXDUfxhs8ocdbR5fMEYFJgdUnpMAKh4MDmbaR1ZTinAYHvjsrpFS5JCEUq",
  "key1": "aDNZNiiiL1pgF8AgrMtR1VMQFWNqbcRYbBMWRC9mSz2KGWZsFWATWE7ZdA8DcAocVWnNeoBJ9JZQwTBu98ikRDm",
  "key2": "5Bcuw64CE8D7fb9P8chTNrdFzvJzzUCnAhZU47jqsHbRYstbk7uzUDd3AgBE1oAMaFcLpZtXRpruJWhSqeFHvKjE",
  "key3": "3pjETHCLxMC1BxKcpuRBYhEzEVRWRVEhv7Ec8kAJPtZohC9vqYNCHrmgGwpTm4tQsM3wYgitPEBdhkpVrJJZDBfS",
  "key4": "5AGfJoT5WggQSmWpzEQWrjgHbd3F6asekFCutb6rCYLgnErQysmzq1a6U36apabbcjpjofw8asoH9F8wKKMQUFhP",
  "key5": "2phLiUhE2uWTnoHUMUh28AuRGy3DJy18KZ3DaEULYvRXW1NyeCuCay48ZiCQrFnFmmwxGTkHLDZ5SsfFKQ6UrXnp",
  "key6": "4HuK4wgfjvpjHYR2obFEDP6RpjtAfadxYt5rU6nw1LRtkszAj4hnnrdLAZ4nZpQmyFRyUuUpzvTUEMRxHgksQDBt",
  "key7": "2uH2nQFFFtzmBBgksyV5ZSXyyRN5VCsyxZFT1UXv8aDobKtbcP97Qjsm9HsefnNyy2t53pb4CfUDRj2apHkq3Xfq",
  "key8": "ACY7jSLGHqe7rKUCWr6kfiJdVEtJNToCc4Msd37WdfAqg4pPK5pPfX4KTCCg3vaas8kVyGGADw4aM6BfJ4hj4cm",
  "key9": "252vSYRKj8Ga1G3AKKxy8pW3E9DfeHMGaVfySYb6jVGH87xJqcT38yUGj3veKw9zFXEKWAqPrTfErD7GZcE8VmDA",
  "key10": "2dt2C8DsX8HfZVmnvP491aVwKYcttHxxXyLLrx8YQurEauJ3wuN4DfxMZev1jzt8E7uhKoRuEU2ASuevmJVN3KWC",
  "key11": "47tkPtBPeXJHQ2PWuYJwYfvLYikfgpmBDdgL4igcq9A7BJ1cU9c9Nr8QVsCdZykwGAfrvSFofLfz3NR2PiFhhE1c",
  "key12": "Kxt5z3S4pXnPDdjC59V9FU9BxCQzdQVLTKsfb123BGundvA1qkc7knDq4aYuZhWYMGDSgamzpAxWS5vhd46HfQm",
  "key13": "46Nn6wBa2Jp8ZQ2cVPG5vpF5gLSUE6axnxiVrKH7zbm4apu6GQYRzzD6gHdD8gSqwwXh5wEjg3PTFmiEGXEBJ6D9",
  "key14": "4345xM5mPvw8KQ7p1wSCidS3PXJuqMSkVFFpq5VtSVeQLcRJFPjmrjqGCVNF5pzPgf1LpyEzSYPUmagCUF3Wyf5W",
  "key15": "5wRECZMnfXbeDPCsbQWHyEUipFfKoh85AAcdG4ePTJ8ERqcBjcvkec1QoWiRExR2Wa6GRs9rSbpmV8hoSHP34bti",
  "key16": "3RJxjjZv9jsBEEFbMeKmHqwAEufRj11NVNaWNtkrFzTa3uexbeJyZiJBbbbwRezEffHdwwAwVyWFS1D2FUrRzsn4",
  "key17": "49C4HiGY9n3dhurKDzwQdRKqffuTUyXdcBJVea8BhnBnpouEE58UqGHros3gSawR9Zr38qGwQyHCBsiTgXaDSsaj",
  "key18": "4WeZ4tsSPMubDDGeSQ5pfXwcwY78DrZZWWz81JvQpdWbZaeueztSXD2uucar8G44QQvf8qrosADxpwnBtWdPRaBD",
  "key19": "26JDsDXLMEbUtzsMRy32bkah1h7cyWMNcNxSJGHbs7UU3wqYakDaRzaPci9z4G3Q9AdFhqxd95JU74WGwWHDw7v3",
  "key20": "4VkHmHAma2UJ4UoXydkvaTZka2rTXeXj2cZ1Pqrf1WEMPeQDgBgEwGB8VPhphN5hRftwj7cZ3gJhsGpsdudDosWK",
  "key21": "djWZvKWKTPpAEwFkxd56CqooZTFXX7C9hWmdmpcLTuZB5vC2dRLdWR9xQPRq1HzAtYB9TbQ18Nku4ChdQdkVbdE",
  "key22": "3GQTACCfKQMbtpgLAv7jNY7sLb9fZYctUeyE3vW43B4XkqeWmUoPP1vgupAxLfQMi4dExZgDtLiKyKx1TKJkypxC",
  "key23": "4iNTAmPopisZ4FKh9C6JWwE8c3zJsgDYpvCtJ9iRMCy1sVgQhpazwy7oDyH8A9HGUXHP7w2wcb8BYZqpZVtwA1wq",
  "key24": "3kcdhGhTjEED9zVne7XQH7qn3PM1eBVpuRfNN4nmYPBYi2E9Z159WWt6VaPvJf7TDXRQRLqrLExK8Ch4ZmxNzaBu",
  "key25": "53oHpRvjXngMgrKqQ2NBcKGjjFgWjDgzWUtryQoZpgZw7F2QTPSHphKN8FXzE5kxUknBw9jANCGePHJH8baz5by4",
  "key26": "2xhMcUNZ8oHY2SkYmcRh8BzSLKiRaYZM49h83qiNtzftyjccyWrguQibuxJrbN2C2XTYqsbtqc8WFYoKtuKjFFJK",
  "key27": "5SBUMxR3oCfLq5gGbVBu4TdinBiowxWjJ2d4fjBGsuRSExWYKQYyEJFhtDt7QHAppK3PFh596xUtgZG6J6VURNsp",
  "key28": "5aaQsBnhvNUNnMsEhCMSwJefYaGbCHK2EMYz6FL6zwDLMf7ujLfDU6wtrAb1eAaGgfN8JxFEGb3DQxtaCKvFVeTg",
  "key29": "5gQkMeqRhshmaJKSVCFEpEHqAmU1wX3bczbPexcUoHsj2xh5hACyMptzyVEykpAqQV8kNT1ZoC5j7EcKsyFjtXSy",
  "key30": "4L8hashk6kDVKsYuh3GJcEZ4SCUYDWruBgqEeromAfKbtg3YECEbEbrn8RFX9SskySZC6YF5fi8QBDfpG9zLWvSR",
  "key31": "L7cqjPVDSNryiy4xGVKeHcYYFKxp65jyaVdQhDHjwTYhkxPDtpNt33i2bXdGWfBoWXrQsPMTAfTMVvieW9dhB3Z",
  "key32": "4XJV5wMUmsJkuCRJrKbMSB4swafDePTbXcbeUtsCy4cryr5y3nWqjFJoNuR1vyVCjUdHmsJCEJxxt5fnYzMLP7fJ",
  "key33": "5XnNnmLUkBxDnaRdrWESwfVBQ5A6C89kwjkWXaNzjXrzETnseskaNs2VPLG9NPgzLV8k4qbHnz5axsc72ioBkYVu",
  "key34": "5zb3vnLwbLhmTmfHuiM7pj76XWNkZvrm7bV9sRfb2dATcKLtmwtxts4SFc6uwxWUpHHaw6Wa9Nt3XnF3KNyojA9G",
  "key35": "4Bsh8abAURt1pvmr7tDaCaNZmWPQ4As88KR8m1KuMETCkrdLScDuRFnqe7ZaiLVmdeEtZmVkrMS1W1638TwfeJLZ",
  "key36": "Rat8j753gp7zk9GBWfXuE3Ntx5a3XkaDYs6uL4q1RpWY5PpxmzkwJ5gUJJuAobJNbPQZNiNqyhxjWxNY4CAAF9p",
  "key37": "3grhZoxFypRoc5hUDpt1aSA7GGnHPHFSXr7uDSteHu3PJhm6nH2kQnoaqb2KxnBfXxJRgDafBc3CsJmL95oW5eYB",
  "key38": "3HUPgqyQrzttAcqtKthCSmxEFYZPW6bMLy8qUxHMYwPGmFAKRM7EDVWFE8eK423uZvC55yvutwR29LHR3w9tjxF3",
  "key39": "2rzf1GS1NDSGKZNA9ZG61nvnaNKVK6Mfvm1BQmqLgfVf2v7D8sJGLmDVJh5zrMuUNsLeKsKrSYgoEmqWmbwHuSGU",
  "key40": "2p8e3L2i2SgaMCif5igaYt3fPxAMefjyURRR2kGcSiPdG1rxJkfDhGxmdKKjSbsagMgpzGzoRR1jWBmZfVLFmecT",
  "key41": "46NJn3X1V8CZofWS24yo4geha4JGJq8uVRT2BZi1fRNocy3iZjQTGptaZsGpvBpQPpXrStrkYKJK3pHx429EDPC",
  "key42": "4zvUkrosCVrDucymtnESCnw6hHNJp6upaP7d2ETFujjCfPu3X8wXH9wjzXnLD1beWUFWTcHhn3PcW5y1eNmL7MtC",
  "key43": "4JR7SnTfUQmkJZDhGbUgYZ4Dm5TsAtfsKrNzavcnJmRfXBbFDCM5hUzzw8eNvpe817tZf3UAhMYJq62o99MTaQv",
  "key44": "4MLCgrRm9TcQkUkpEuAWcqvGkVY7DchRGQ5UQ4Wdmi35g7JinpypykmdT5L3aJ6Z1wddC7qzp7BLwQG8S1zu1jVz"
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
