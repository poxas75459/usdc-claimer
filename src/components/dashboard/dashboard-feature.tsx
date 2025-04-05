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
    "3rEyfodaDdjyosuaR3yGYhaDnpaW8eXkc1stXsDgc3tyGi3b6xx9kHU3gYWMAKtd9UwwmozwVwHVmZxa8vuXtGWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4iwf9kPdAQLvG52DyyoWexDNrE2DULj2w1foFXYeJSY3SrYjBWCycWYt5srvYwbuoM4J8Jnae7i91KvruaT8yf",
  "key1": "3VFRVDiJXWx8spt6z9KEg1NwqKyVzpRoazohUV3KXd6FRBrYt6TgF52cy1pk2GJmDch9UyK6ZwaSyBm8z7CJwG8",
  "key2": "62jtLQuMdDh7G2zPqqWXNFdqdZS73hrh1nP5wvMaykDAvyXqA9S5jbh4aFMYDDxo68oUddesTisjTKnbz44g2ixJ",
  "key3": "42uecM64aFvdxjqDxF6wJ3WFrbwPL6xf3YP7KoC9mMk34yLv8uBFn9XBSnzEDsXm6GWGiV3eNKu1JsZTxfeSV59y",
  "key4": "5N5DgrsBfEiQAMUXRurGwzMcmnBaCKvruHGP1D6k1LbEPMVMnNzM1GmfTrNi9gEvjF7Xpn2brR21DdqWwLVnq6JP",
  "key5": "9HW4zSEcMzTrQETFE7Do4ENWYFr3yaLezBb57atxX5Kus91X6x7khDVgJkfTnCPx24brbSuaaRkhe1SekrrthaS",
  "key6": "294dRbeDeSQ2EpYehRrYaDEJJqUSawhJf7vzmc7WjxDo15jiXj8DaJgyuCiVLMDmJ46gjrmWGPj4sKBuQjStgVWD",
  "key7": "2gmn82ptS86MJqeLuzkZuRneCQTKD4sZwMggo5QJ6mtt9SGtLxAV7in9KnW5AC9DfDfe3khMoRRtwF1swpaKFm3U",
  "key8": "2YVkfE5BgdRUD8Noe61deie5P175p4gjhfdWr4re16FopjDXHYA7tPTjP8uC5h3iGTUFE47qXERAevGqaLaYcGKJ",
  "key9": "3JCD2Sqj9JWBsaY9Mw6q7U6JzYFTsfcKYUfx7qWhGY7zsrJzQTpCcRwTjx45gmXiCV2tTefCB61SEKShJiT6Fjx4",
  "key10": "2NTn89VqR4t4GFyb5TJJkb7m2vFPeXfwiWGcQQoZMeKcnFq3GCLqjuogRRq6t4SHJshGCxKp6gR53FTHGfryaUvt",
  "key11": "4Sp1S8jndADTVCDZ87eqC8RZ2qNvh6TXXgR177b3mAAbrNkoMfbyCPERB9kX7gVEGYFNipVPz47GqkSo7ifDPVzj",
  "key12": "4RukR4h8fbo4WJxrxYx1YnR448iUvohEEubX5STqbdi8z4UXsptRW224zCRCW9USN7xbEYacbVX3x77bhFYKy328",
  "key13": "53qYT5K1MfwttGj5K8K2XV2hkyK6PsqTmHGRdHPPZL5CqKkD8P58JSDtcXVTDMLJYL58PfibYUKNrxUgH3XWSMXo",
  "key14": "3aYaYtPziMjaHoM8vJZC3qop4oDJ9gMVpypg3XewNS3SePzNEWR7ZgKYVxZuJkuPWQcxUk6jR6eLhegvh7e19C8U",
  "key15": "2gg83UyZovhogguh7no1VivVYbEeA2CzSrpBvypZj2RYWaXpHGQq4eiDEr4D3PTd2yHhmYnXYBUEaQMMCkBJMHd4",
  "key16": "5HWTMomsGNY396boFkENVQWRjfY9cJhzgp26DTbNdSnSNEVGeR44oByqCLB1Vk46rmDnitBrADx3njPGyVnDAe2H",
  "key17": "4r2f2L6iQLrZ2g2k3y7Q1uWZTzzowcPaWs9SuTvMqbGZQwH1KLJsWWZ3NxyT6S86g5kz5pyi9sfke1GrpwYjABd",
  "key18": "EMVpmJ8PY6ox2woZQFNCezCJavZPJGX7zGb5YD9t8wb3t3jddwQt8S5dVVFBgyB6Du8QdPSJNYbeWB43gvrApic",
  "key19": "PnBAiqhzi7gfNSgN51DsTkfL2pU5qzT8RtzicWPsKyh2oVzGeJdiXgZ8s7MjZLfAhQoDMKLgftyz8z7DEDGWW2i",
  "key20": "4wHsMnkcHf6dRDqHt6TLFANfdLpVVPfCd3oo1oSxXiobA84aobyHevns2udNjtBysMpDWY86jFdXwWeHKenKgzHe",
  "key21": "66AfmoREqxhHLT6WG39pJU9QohHJehhmut3LMEYiKnw8jYjYX5P6tvMtxN694mJPTTkee22UodGFgzAug1uKK4ev",
  "key22": "pwBfeJGmbWQkeaCgcEtfNFUzHegbpRKnwDJCn2dfAgJoFbeiUiqpgC192rvf1cLjrRh9qkemPG118NH4sYjw4wh",
  "key23": "491YQbyKHNiS5A9YDGFCswkBo458grE9aiPbNE72kGksbFsMjMccKKPX7aL1gSp7u2oZrUmciSpRhRr1ssoV2bY8",
  "key24": "4vAejRCqDow8wWTVyZGMvLpdcVkuP8LRD42Yav6QJbKzgsz9bggD6ZnLcs1wrdta64oBBR8cEFmZnyWonT27RnsF",
  "key25": "128Bp1zd2HGc92AnhCTwyfgPQ3vU226yfS3NCd1W8285AUx9T4mkynjBBsmj8zagH94j2pvnQTJuTiLRUcJRfhre",
  "key26": "3tMrYAm7qkmafeyhKUJWJYBUvSQXypLS5aCZc3kgqa4PbZygUC8DY6e1fwGetBxZHzDzoX4ajrb4D9NKLMesbYCM",
  "key27": "3d1JMMefj15Fm6xCxTqCSgZFRRazo5Reapw2ufXUMibbWmqhQ55SAYrAYgMG3TW4kq6MDnmJQNjc52za4QFcXyt9"
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
