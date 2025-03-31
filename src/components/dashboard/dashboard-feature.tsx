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
    "2Si9wsHfwFHH8t6Kgxvhn8vETZTYJdAhposmHcYBWdqYARmaEccgkQArM5KnB9N1cQTq6HVV4KeWdjq7kc753hWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43YhXs1VqgK8xtW3TPsNJeDvTehGztpeiJ82wot8FgVPmXr7TMHDAGKt4i7CtB7ZVupvxzQuKZRr6HeKQvt3DTJ7",
  "key1": "5vwL7C6moYfHK3fsBXXUAMEDBJGGFLtNug4SRnNhLqNvabhW2qGxs3LkK6khE9YLVQ6xh9w8GnHv6SeL1nz6zM8z",
  "key2": "3wBUmyhfswUiwaarrhiiST6e9fg82sccBrbRKVd3WjMQwarttay4pnNz245adEqGa5RzihWGDFrmVog9KcdfVziV",
  "key3": "4q5Cd5N2qwyt7QmW6876YTCLrsCz2GU1GjX2pyFeUKHrrvDX6h75dmS3giypoccmdEmysRVHTVs2wcfZsLsjtdKG",
  "key4": "5mhqFjmivoCeG16LPCRmygMhAihidmyNBWZ8X4n7cLSGgG4CEAzaoCQpk6FM2PQKuajZ81m7GsBULvFDpwVL7b5q",
  "key5": "59Mpnwj5QE75Zks5z2aHZatdVHoU53Js7V4FudhMRgigGm5euYdT2ZsKx47c6AJBWtq5HqfmdBoxYwkhwYT4UvwH",
  "key6": "34KmMNDXPAYajFWaEufjQ1VRummrgJd8mpA6WRquGqjsQ3N46vSNemDucL7cTwi8aYzePPeMMjmYJRHojMw4XYkN",
  "key7": "5DXyJfvqwGeFbqUWpkFxeeePYVi74oiwnfceadRTHCYpZjmVwsVn2CpcpCngLwpQvD9PasDNoXic46wtgauoedC4",
  "key8": "3ceN1cW63q3uzZ1V31TUxZx4LJiSZvC9LQ8yzqcpSSyVKDuo4yE3QgtUwWrcummytu3mPmrGtcYGjCafSicP7WsA",
  "key9": "3TTC7G9URXZh3RdtEg9C6uh7SzrCJPXGe59y55aZqA2Go537zuFvpE4989aoVA1zGTRKReX8vKe1ajFTytyBDJv7",
  "key10": "4a4S268HJAzx4CiMjSjAUETbzbZT8xuFghXxWTx4YtA3sbQkYbaW9WAcqstLo3moiLvxDM5w7v3JnQwjTq2bAdfT",
  "key11": "5o5AyAXup5yYHkqjhD8AkJdJUg9qMV9Y34ZHrsgYLEEW7Ms9mTYmYNEnwjb94u9LFw1NMqM3G5KBi6budQqZqvv3",
  "key12": "3WWxeyFx48gSh4Dub9o7iE6pmAYs3GEJx82mum7R9YccxdXP7WgSG1TK7yws8Vg9ZT9F6tWp9eNAQEdJm7paWgLQ",
  "key13": "4exHo3GtqeRrXyvyaWLWDoESWFWSPuTtjjS4zFWMYcDHbXJUybjwEJhDihiPFG8ejbHpzPZst79FRpXHky4sF9Aq",
  "key14": "3d3egNXBj8aJuAyfYrRxPKFDCQb3t1dgENK2bHiDMcmtVCTQzk5QXcNGJsbTRDY6dNLmTzjhRAnohMtPKeQgp9hg",
  "key15": "2HRKtQU9NvwR8oA61cDtpMMCEXRiaWAjYisvTRhWjGgQtYKzXkkVaCvtrgaVfcfDBLAX1tFAwui2rp8tDBiDwGYt",
  "key16": "cjanwNbwT3qZ4asMGYP3x8gZn3ZXEb2wS2kwEFrMtnNMeEA81djVtyK2ModQpHAotYLWzJ9KXpwnkVMbKHWGmiD",
  "key17": "rkaMRCEgK9SZ4ikZBAGJp6LgS95CqyxN2kANeSPCsCxo7SRppKkcNrzYoj7YsXq6YK736bFFn5xqLhFYdwbkcAy",
  "key18": "3FxCsxBxEyiyr8WELjDXQg5BdH1M3tzvn88dime6rbEGU6t9xNDEc8PaErZPvNN2e9pfzpjWGePSpjyLtchT9cNr",
  "key19": "2y3wwfDSWVt5yPg8YvJg1moGBFWEBNavbGq55bWQLcetXMsnbZi3ukarCrQKkHZR971pdhuDRAqtj3qZT3K7mTZb",
  "key20": "4zGNYboukCSRPh5nadjPF6ZPW8Qkb21qFXDMeUDYKueMj23Dhjz2xBb2SSncL5ztThM2dWmZmv8BgPakpLtuxKDg",
  "key21": "fiZ8NgxnbdGCiigVkMjZwnXoP76Fz9m1RYHzT6NQfLrcdgxGPHmVyADaUYyhuUDBB8zGbeURd5suwupNop5VVPX",
  "key22": "5xZkm7XpHUE8LE9v9p7UjzJnkjXeddN4zrvvuHFcz4jB1koEsYTcD4c7meYRLEk38UDuxtNB22XKrkWzd4JBGhJS",
  "key23": "5dMNsvTa26gHvEZS9TipfSSLiHfTFdbRpYJM3kFd7R2HmXxMbJzuzjEJH7kKXTZgvenBt3eZDWvtwUZ2RqkukGny",
  "key24": "6DZwNpgTgqEkvotiUM1B6jGR4TcjTrRV5MDX6AuWxKKuNKERJfv6vXVnMixJmTV4TYidwAA7y3tEa57TZgBz46B"
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
