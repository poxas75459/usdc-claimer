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
    "4X3vKfNvPkEW8zYRJFeTbyd1gKFLbxEW1owMQ9NtaM5LJBgfPzcoRzb61iHRErUyLULdyL37zteH3CBBGoT7VgSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATCuZSmikQgeKVfM1ASUp95aPRqesfP9Eazc63naXmp3R3kGdKYS2sky5LkzMJiYFuG3Vx9JB9nAEoSuAsWJfxe",
  "key1": "34itenLieJUdZHXoyrDwRkGZ3fJEsGm1bdDURrR3Y5j5zK8pLzm9cj8jhQ3n5c6kVZ4wy9hJ6GrvRe3YKS6pgLJi",
  "key2": "2YnoSZjA8BfMwmU1YEVdJ9yFbNmT9uLkx7efyAMXeiQYJkkaXRYdWiPSPn4XCkpde7m5NyYUNDTFGJN6bRkqDPzm",
  "key3": "rmCb343RPR9PuD7xRFERpApicNeX6t7XWX3uE2xqQfv1g3oR1CvXXjHL5dWvpfjH9nocFuqf44ehZawkZgmjEec",
  "key4": "NPCPCyRUZSwCZdWXh8QLyzCqc3v25isLACce3gYS3qiPgfA8EmRLL9WGaYcWdV5WPtJ24wUv2RkWSZxBWY1d8AR",
  "key5": "55jMQKfBkybQVSoUXawAgV7oWFXbCu26LtYS4YjiK1nY6uA9uZqPmLAbdgmxrrN9kvizEkKXe2bUVgUCcDMekaZY",
  "key6": "34KdSw29W8RkMS5iZaT2JSxgbfTx3Fs6kUCasoR8ffcKigC4hzWNo8Rqx9JPcgkRj6RwdyQVLZPz6BPzrp64xXpN",
  "key7": "2NWH1ce8Ng9kPbNTjTLiVug4t5vaxdAnb5Ao8hqKB4GvPRvkq7SCdpLuh5sEdbdwbArt4tFQk3sfiiofrAUGuu8i",
  "key8": "3EacZczpaGgfMggLuqELN3ne4ehkpQBjgWjUkzyd7SHdtTPs9dgiTYV2Q2zjZG9zjur8QwbncZkfSoWjaWPaPrw1",
  "key9": "warGct2j84fdWzvry4gAUBXMtkgiry42SLBrkJEAgpbFKpntQeM5sfwsetEF2UNxD1or9pN9dBkbjXjoUEWTJCk",
  "key10": "45413m2xLwbjm4xnmpZPgxNZRH8NZBgKHrzWhdVM9Z89fB6oQsPxUU7N5cLAPotZ8L29bLC6ua8yWEYBRA8u2oLS",
  "key11": "4Gf1dF6zoaqLwRUsYdm33FobrcNAzU5KQ34byyvEthNmf1oUX5qLJ3Pyq4T81LX2F8yJcfmt6kncXRy4Y7zDC9Bh",
  "key12": "2pbT4zfrTaA4Hb5Q2yzWTU3QkdUHypyRxcCfUk5fpzXTed58QBhXB4UdHUU4qXdwNDA9HJhc9QrmwaRLB2AUBzhN",
  "key13": "4KNVJQkVW9eLLdDh9gbFsV2eU57fgYrqVj4pmgRA7xru5VL8ukzHCVDAWo4YqsWRxT9cFBVABhHWWbhEsZkGyyBR",
  "key14": "3m974pnbeoCgBYrFFKdd376Nax11ekPsFGriJePEbsRJmi7QvJ5HkBibTTDtrmjkKVP44v1P7SK4c1WSy2TjFo5L",
  "key15": "3ALCK4BTGLjvh45xyCnp5vWvnJxC1Ez3M6wy54yBefXLkkGxfsVLW2Vuh4vjdWZA6t7Zzvk1tBdQHowkM85ZHLtL",
  "key16": "4ALbk7c5SbNbr3t2a39MJ79M2txzJy4rWcs1pmXJ8DmdtZVvZy9FJgBnWKqW5e6YfMjrsaDXBEV5kJNPMbZ2CJ8p",
  "key17": "5nupjaLyazQ3bbnuHgH8r2XtskYDNiKAxpGVxyCxbM6yCrTMpCTpbPYQRq1sxRDdVQ6NsmjuYeKEMnzb5AjCPor8",
  "key18": "216yozyJeEzkM6nUt1N7vfowvfo1XcuQbnEcRXJcHezSm53odYp7PyjhWF8fytSwtYqLS4aHfBnsGJE2VbiVS6AH",
  "key19": "3N11xSm1QwmwMAozqVzFjDh4z1G5FyhkCYTgxqG4Vye9PFVJRSPZpjbNwY3eB6r7HCCVPGNGmKA5wEevhmqBag2v",
  "key20": "4awciJVx3gh1DAnrUVLG44852oHk8V7dgfC6Ptn77SaMR4b3XppNgEtFgLYBuFLn3vMDn7mqeZDPkXNcaCzNLts7",
  "key21": "47mTMtzeJNhVPTmoprtk4Gh3WDRMZzwvTyZoMTvBm4x1wzdRcmTHmXFzJm8pmEG9Ux6wmojZWNb28YYssvECLhxH",
  "key22": "2EtczjbpGgY4zSEdFiprCbu9oko34AN96Jb2XupLwwn8Aww7qo9qGMkLcRoe5MuEUTrsiZWABHu63KwQ2Dimairh",
  "key23": "2cLBnVEe6MZbJ4F8feHH1YKRsjPJhmrqynLvodCVXuUFdwaC4kzXTwQqoXyRU6v3PxgscEcSZskeCZLoA8C9GR3Y",
  "key24": "27AXePMLn6jz82fbDh8PCFjJfXUN7NVYggyeCRz1g9w3krYhfZMzKY19git79Jh2FYp3tKLmNrnmwudqCssJTxuB",
  "key25": "5VzJ2NBDafStAVJatZ3HxuPRsdHa1Ep8PRJwz9yeqwLkK7XokZHmUgnwtxe6SddP3kp49iJgdv5vX2TrzdMuZjJP",
  "key26": "3G8jA789gc625vKSwwRgLbwr1bDTkpFSfpkpnew33Y7Lxosa32AGXStXjENXmAFQcfknUgQpKrhGbbNo465cYrAW",
  "key27": "2nsthdNHdQXoYADBKzJ8SpSdpQRvx8JPjxyh3BR67tZcea6iDFPdtGH1NBZRm8NebUC3F6AmmXSnPDCAzwwtsQ8c",
  "key28": "4XWequpXUyi93Jtv9DLuV3cnaw6zevtmiE6N8sQEubozpxQj8hFu9o4dhLRLWiNaL3wjB7n8zeG9Zv7HWWFZDtzM",
  "key29": "4GmaqqRnBWMp8WfaM3cWH7zsoRk4i6x852qrcofvGMs6tewn1m84ewVBtm3ZopthTt2b7yhNBYvckaJTJQfJAzPL",
  "key30": "W9DF1mWX7dkeNVBpV5uWK53GiTiBATMaFF22je3mrSKx7kyMphgkg4CoV1niXZtQ7EVqJmBnnokpV9c8QE8AF7T",
  "key31": "5WUsJ4wC3LodUr3tiqBjd5E237AqUjy4g57h2iM8jHUArTUhh9tbxDMJFnj6PiSQ4Pspn8fh9TCrZumBkhtZ9xxK"
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
