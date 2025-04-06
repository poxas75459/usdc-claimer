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
    "JaXG2NJdaB2t2TXpgp1E3WrnZcBJNpVWNjVm9qayiZiKXPeWWPEfbNKeQ92bXJE23LgcZf8M8qj88VXZWvoKCc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6LAGxWMQTuZt2fKvEEgdy1E5jxoLdptyDh8MLgqx5DA6b7bWVHwZ1epMWYEyqijAARqwXHbqaSaN86DYkFZBC3",
  "key1": "2wbKunjWdFLaNGRALST9TpzAVyFpmRGtAARCVanJBb7bBAM4gPK72BhZRsu4TSF8x96zR2VxdSvAwG9BDcUxnGCj",
  "key2": "62NzrvFCKkAbxv8frrU7LGCLkLeo8NhY1KVpmWvht6eksMSUDxMWjK8xLsdZNWHw64bgouXuLhq26eM6vVYBbqtk",
  "key3": "23dtTuz5j9VcsLxx6BwDDFRhPUUynZrfmq4iwkGYEx7cfXcLQsZsGCBdPsCmMCa4uenxHaiJFm8KFAR1FR7n2tzz",
  "key4": "3qfcwcWBBREN3g6THx39yBbKbJZzEyN5Wo7k37CP1nCWCKamxyBwyXmEuUvVKq8aR11Tzzpf2NZxMUQV6xMb89mx",
  "key5": "21tP2mn8RpBRHq5LEry1WNUTr5mQQE3vVyYuEsnYZmNW3QNjQpwAEWZEto4DUhTDEWb8hjUw6JrquupRDQ34bJz1",
  "key6": "58XdA2fEBH9H6ERe5k8AQVYhJpsSJUSkRYU8FP8Cv1CKFRbDwd1mho8pAZZUJvUx2yPKeyEdgqZjRJ2ze5L75hNT",
  "key7": "46LeYioTzsiDPevButYavaNH5AT5AQMWixDsnkLuaTSv1NhNmPiow7K6SZnDdg931arCFdsQNHFE5mFF8xNdusvn",
  "key8": "4iYb4hbWxEobv8AnrHvh1oKmidfvpQ2LL93mU93nefLPFQ1mctGgc2F5aNHv4Qa8vTuYKUHFEBfv2rcUtPrD6R5W",
  "key9": "9G4Par5S5QvHY6fUgJC74WodbJe3gThaAmCikS1dLEDC3ADk1PMfjVuXqapeG5chQFio1fdRU6UXzee24n7uZy5",
  "key10": "2p6UTASZq1gBEzpWThEF4H2tDV7kuVjFRmyevzWRutnVpzBAQYYqEchU9vx4AwLsusFcnXDSu5eVDBPWqoLng3Dv",
  "key11": "21ZruCZkn8jR3eCYvv4YWPzw2Xjdaqb6VjAHryenqBdmt5C6cuDExWAGe1XGHbUm9tachKD7sE17Tq1BmqxxQWZH",
  "key12": "snhYesoQB6RfkXgwtqcF6GDLrzryZZodyZds2rmaoBHhzxuqAp2vwctrR5xuDSYHGfvZHADm3J7UVZxQvJLp36F",
  "key13": "4cMjWF6Xc3hysK4rQvefyGcJDHSVrtRc2PZ4fsg3XHewReBWFGUBxFVtCy6Sjrmx6pNTadU8h3Unp2Xa9b7P6qZ",
  "key14": "2F5pzR6SGZ2SsdNeXWdHyvpSX47gKQAtWqyXnZJsE2t1KiGSkNQkb9yxURqQmZEr95CqVkTFZRZAatPCxNKmz3Md",
  "key15": "3vdwUi6hn2NXhnyScoGZNxrjJ31gMQbjB69J93GLRq5K6EfvdGUE9VeuTpEjfXBnRLsWYnJt6DMRLW2WKUT1WEb7",
  "key16": "3CoB18Ue8qssvWSm9HUMsAKW2PLEhi4JeN9HHrxfmSu1kZPD4A96fiyreQhkGKAU1aLhsvbPEm3fbj36hVQvueHr",
  "key17": "2R6jGFBZVpCiTEq4hcKNrU6ye2sh6AYKWpqiFFZmGRJFsJFW3hzhCthV1AK7GgR7kuCiQa9sXawyCQmLe3JEeWsf",
  "key18": "4iAsBSMJvjkZQ4uutLXKT67WUfArbKLMjD4vrfD4fkKNKJidQSD6HDY8yyZ6Vzdf8JW5C3HoZx4HeqyZBpgV6Vhy",
  "key19": "5QXdjibAEV34DFB3MMb4WZtK1YgoDgobSnScLXD3gFJ6uuYN48MkgPg28mYxqG7uoGgSFB1JyxpuLH8ZEWpGjey1",
  "key20": "2JLcbvLZmLQHgG8c17cqmJNWBLRaXJ6xfgvs92QPuPcqdMzj1mMiCiVHxJ7zYJyWPJmhF6E4XDM2Tdi7mswqXQut",
  "key21": "4N3vNGf1JvZ1s6C7dhteTDWwNcmeTsSm9uZMbcQGFqPEk3kqdqcdKYwMvzpRwinfNbqLzeAd3He4bQ1Q98TSkThw",
  "key22": "599JNEwtzgNMPok1vSuxyQBqT4cB6EsPKNGzQw6pEj6ZrptN1vFGzdWdr1d8yph4gXMAUN4B7V7msrU1tWr1n8xB",
  "key23": "HmTHjEc7Y4z8Cru8KZS92NPWXRTUBk338aCrJNYnKYnzkcqMRjTqb1pirfHch89Pqyx1BRQqodD6h5ejTnBf32a",
  "key24": "5Ehuj7sK3zrB93suaGVd2GEnZwnDw77BDzrvEM379QAC24KyS31UX3FFYWoy3v4npcsdfrVcwgXVM6FRBAXL9BoR",
  "key25": "3qFX177CFKMYwANLYqyXgzN8TxC2B1NuuR4Rr21zruGdqKFtBGhSfG2WADGmm4tHYk3hDgGxwQKDAinH39kNFSr7",
  "key26": "KCs9barMUnKQrQ1eKwhJLZRViSiWhjdSV4p46cgvcyCasxg3xK8TT3msCaUXfTBLTxmgV1K3bNJAE3fTzxQggyC",
  "key27": "3e5UbK5RYzz3X6v11rjYMCPKeNKWp3hBbYuHUYJ2qJbZyYTUDermcTvVofc8aEYsKzyR8ftYnUFVThjCSrz3E2cc",
  "key28": "4SJu9orDuEbZubKoVjAbTeQXobDP9u8avcYVVfRc6VfKYiYrda3v3rwZ3msYDyXbDquqBtELRBXm9bCWX3Cdim1L",
  "key29": "4w7s9iDzXucBzPWrJtdHSfz7yh1VE9161ZfvFR3rRhAW19G3gPydKbbGzDWLVWNweJjhNrHhYJURExsfncv3hTKA",
  "key30": "3Y9fuC2NZS5Ty1e5u7m7FNLXnUHf5YuJFaCqVH7gYXtLcd5miFcrJC9ioLdH2kAtkeknXBhFUwYGpjhVjTMfYJM8",
  "key31": "63t7317knqhpvGY3re2zR19uAB6SVhgiUQr9kdFmtuogaoxFrB4pAPFqLe3kJqHgU5xgkc932hktSwCnTJvrqbmQ"
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
