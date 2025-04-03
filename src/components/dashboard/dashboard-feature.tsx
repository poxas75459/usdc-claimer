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
    "4HFcdiFLPQmV4LMW9u5TwmXKu5Ku8tDC1mj4iXxb6aYRkgZVRMYhxnQ7S2eBHioCuLySv1J7pSSHiM7A9XaarKd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECLncLz1vG2Wre2UcqAtZy2RMiYcWQENb4KqyxjvSZX6dRyk8DmNA6NSnTS4wbUAeDdN2PB5E7fpfNB9H5fLSh",
  "key1": "3gDwgqnonDCv9x5Emy64zp3VA8U6godNSiXNsDMogbWo4NLXt87NXwKrCDyKGNtP15GLZzA4pvs2oN3wKxNW1iJ7",
  "key2": "4rBGjxdeGGhx1Gwr58GM84Vr2gW6gTYRUPkeobf1ziPCytWe9vHcJVgsoAXFgaA9LQXPkoXuYNUfitxsJfnCsa9E",
  "key3": "4yfGi1RKfjicx5GFwfZBD9jtU8AzWmVs4zGcBH3sCyp9AxWnQwUDhTdqdzvd9TXkhJZKM742a77fwRSaEpHwMXCq",
  "key4": "64Gb35pcQCU4wUojY2S9zXnACexANZiLhYSb89WxmGxDrgdtHGigkim4R7y9gmnySsE2LpifT22sKRZy845FdAbn",
  "key5": "JJgmpaP6YRoMgAYrLdeXMCakwy2CiQCDcsy4cHz3PCxBupDFC1nkTAw8PcYahx4nuAKQUSsZWvumbNEzhYVaSJ6",
  "key6": "4X9pxGYc5X3Y3XS4GCcdNZtFB5YU6XY5BxJWT1T9GKAquYWFjF3rUaA1VgA6hKA4zuQgwxo8yxKn1D44rw1uiUMy",
  "key7": "3pLiZbwrVHrC3dS3RpMb5NBc1aogsUKVyRywY4CNeULBZTAWndkbbtn636S7h9BNtzSorbkmPZekhLaickeUUvmV",
  "key8": "5tFp5B51St3NHzMnbjoChv2829E4dCLPTxFqZKqB5yEcVPVSvb395DGYiAkP8pzDdhvEajqhZqDDxN8Pk39Do3rm",
  "key9": "4j7JUKLhiBC5pKRpMFB2Dxrzj3aRaeEftwxbZotm1Xyih7fHHWQuSMhaUfYTBhUNFBtsQagn4bUGqBtnmFe371F2",
  "key10": "5U8s2JPaiw9MkEYHmA4UwN1QFRcpdvytSEU8cjT1VFqSg1VB9QV7qU6qDne15nkppuHyj39PhUVTMB7rQPdFuq8i",
  "key11": "24MsoZh2vq4T6KESSGaZH9dRSUvp4Tjbk5L5ytjFnjE5W4bVRnrhp6t82GHwFgfheAGWm5fBtEVpQzbajjKmwA75",
  "key12": "5B6LXT81QrcsdHTMhPy8Fx1ovPBvAu67ri6zzTGBeifnpaFph13WvcpCxTFcLyk7xW1xWMt8f9xKH91vmCUtPWVN",
  "key13": "4yuCew15UhocJs8Fo31k2NwgQyWu92XgPJY6fANnBDTYj82RYjsPk6Y97nFu6YGCq8PqU7AtKX4LKqiQvmd6VuyY",
  "key14": "2Ue589DVFGo62dESAuBMNofTWmMGaR8rV6TCKThMS8nQ6gTtBoKh3oGqZH6FUa6S31xWEngQ7QJbddppF9jmUg6V",
  "key15": "555PaV3jJnfPz8gtkanhkzAW2kCucFVnkLcmPwsdEtpBpdSPdaub6u6REfrf78Dokwa1s31R1i325gGLqMrcqUaL",
  "key16": "2Y4s2QEBRq39uLfnCtX1yocdC7gHALzetgF5BzD3hnEKeqZ1NJA38HKWfr7qSX3Kr6SLGZhFvZAyTE3pFRxAzzXd",
  "key17": "3kk7XfjpRa4bhrXJVsLqBdfbVfiT4VrcchaPR72qcKPsEj6PdKPTfLy9V5aataHGimAF32Vr8P2BsNEvBthLZnAb",
  "key18": "ML6uWzy7BgvZhNyPwqbqN9So56h9TkWA6GB7aJYmt85MJHY5tqv4ws3LGKoAM4aEmzHqWfJR14FrBeSaoWT3Yuf",
  "key19": "4Wh7wFcroofV4uoJZ4ewaCrLQyuSVTVELmSvXgpdb4JU6ngedZbnGG2bS1yzjhePx5AmBxCpFjMfcNxGptzGtjYx",
  "key20": "46aGNDYQ4Xfu2BxVB9n9h3fyiSzXNCSvZdiaM2jbmd4Wpd9LEDZoHpjkHNkRfqTEZpwVTWjn9R59mcw7tdn8XLbG",
  "key21": "UKdfYV48KWky14LJQnQDRUeftDhx7kQFCENBaNXS4yQ46zZwfgPHXDrMetWSCs993E7YXjpWm3bMdq9u4gWv6WC",
  "key22": "4z7qn3bV4qbyUyMXVHZWY9EkCMHRJvyMcWXpFuxGPRQBjBBsvRzXoxumFTR7WhoaVrcU8xWoFGBAeeyHGhjn6gVr",
  "key23": "5caef7AMz891xK3Eoo1ajNZp7GP6sLNDZyu4RU7Kfn9bSGYCbBXv1mMKPrjn6dkibBy7f3VBsBZDebywuHzd9d6b",
  "key24": "5hS6MaTEWBnUE2k3NEGcajsaR2LV37EMWddDvpSJ3YwcFZmRWVcGE13PpgJrSwpTBQqmKrDeckcS28FdsePHAKDk",
  "key25": "3CeMgmtgozkP2Ph3LRt9u8j1DSwTYuW1Fr4LBHGy7DXH1bZTe5fgQKbzxCKrL9FjzwP3DeZuqbGxcYgheiC9tg9q",
  "key26": "3WBtEd2xiZLzijU2fy9R1WHHBPtGSpKPUc1aUwENnXPvgMGkgNa4S8su8tynnqCQDMTK3A7oCy7sAsvsgb7LdWR1",
  "key27": "F7not7ELyVLMCt8ezAvizqvjJoaTWYKBDDP7Q1MQWamUnrrMA4jpff1vePem9VjPsahBKhtHPPD21pGn1diBF6t",
  "key28": "5TV1eFRnqdwK5NNmC2ejc2SkuTFuqDRRZ81TpC6uZrws21jFWcsNviLiWgEHzDVmaWSkUoj2RCFvaZeoVo8pkAPH",
  "key29": "49mW1fkuEygrQGdyp7WspmDfCFiRYCvGGf6aP4Ghwh9tzDzxTTvTz9i3E2ETyNkdqw3Fxk9xv9QXBVikCq7DEYis",
  "key30": "62GWmEEHvyPFcMk2LsiJaZudSPCaLUZcDGVmV6LgodvokeFqDNEgG6HGWYPhjrokJZGhtrYvC9dH2RG5KXyBVRmz",
  "key31": "JsiSA6DZQdPwLDVQ7a2FUaQ1wRbrq6n6PNJsxbRiDrmvXgL1yJh9uFFVvwr4H2T9o3WaAeMTXxahBhNbHip8QdH"
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
