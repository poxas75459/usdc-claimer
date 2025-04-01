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
    "5GiyunKo5gRR767kjJxBpWj7U9U4yDn5L9YA7BUPG9Dc4b63dsruA1Ka89o3XrdUyjUSzvvWCukDDkPUgn5xqrdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o836eJfE63vLr4ePvWTcuZdS1Lg8RwzYPuUgcPipKc7tXRBoqKkgsJ8gFoTojPHqnbuPMEoD3hjMfQ7YR77f1Jw",
  "key1": "ngcjbXxusRT96WmatRioXyiEjF7eRaAxFFZHQ3rHMzvE2wdTp7cRjipMnKSX4iEt96MR3LUB6DR7padzvEkrxLK",
  "key2": "2VyffpQfEFjV3GGqAD51rrogg7HAyw3wZj3xUWpSGYtPE9xVbEqqtHsVHkVn3fJ9TQGTWRq9BLC98ijrcBMwpbYa",
  "key3": "3pwGaNh2eR3fqY3iYmfTJW8eCp3Taydvm6VKinfEWe15tUQHc2Bk3JPNx1DsuLhndeYA6VRgdk4o7R4CLRKcqXYQ",
  "key4": "2bxPsn4NHhBHnppPUqjdtDuDBNTYtPVVX7ATujdUkwChfRVo5WnSqc2XyvRJmRqvnPHVHLUXDFqZDoAbYXr8j3oi",
  "key5": "5nZm9FNhTJHShkuStKoHXgaH4hpRstw29h8849HNRMNq4rJF2h1gHqUt6BZ42yL4SEbe8mfUmWxUrPEivB45EYxu",
  "key6": "pYxgBojbbrwsyeEVHGHuK6t65Tga9CYD1iN6zg33Wy9kVwpcT7XKs5cudoeXUMHJX4x6SdVZyerkj3deZ8X2MeX",
  "key7": "42Y2M9PGyDXh4A2ZAHaam1hFtEuQCSPagiTsU3SeLRo5UZZJPwtJP6vqnMp9ZE4Ptv11u1f7KrQygmZGmKRxqZhq",
  "key8": "2QAfchV4kRBb4vueb3XZbLiqJxE8Dx666pwp5Pf6PwLyDKtXYpf4GhMALLRNWVen3gyjecNbpYqX3nKCGkeBa2gR",
  "key9": "4HHzAxWbEPWdXrBwyoZLSaBgDWQvXq8xN5Yc3bnNqMgF9T2NeWCFxaQVJg23wQuvEbjrFXAwZGQ4At1NrSP7aRfM",
  "key10": "2KBRgvXrMgVrPHteoogVLgRFdUheNC5BRnc9rxwmn7MbPLxzVwu4xHFqyBjsPrcer81TUG2WqrNWX84sBwdqUrpv",
  "key11": "4BDKjFcqy5QX2ecUGstuaofK9scEZuNdVPmp6N2FEG7YD6wBEFUt8Ahc5X98RiEPpPhPxZ936fWpJe8U2pbZ1YxS",
  "key12": "48myxUT46Bw7PT4ahNbZcD83n2XgmEtaBEM7JdfaKPmcAUVyoqWXvhANAUEYvPnW2Gpzacg4aSXdNnMLHAUY3p2",
  "key13": "t2BXdtE2wPvWtV2bYSk6tnU878xfoVFtmX813DgvMM9URy7N372kE3WRuatyU7dhgPekdoNzKHD4tmkTuxcocEn",
  "key14": "2k5Xffk8dwhxMbBnJMfcfk4jNTYF7fqbvhZYripHyGXp2GcZjyqjiZwETCB3Ktopu8z49Q5fGXox2TjchGLC2vcv",
  "key15": "5HhaQfNRAY9vP8VZB76SJ4LQa1CyuZnti7DHEzse7mYN8HKxMBsBELUKRwRFvXSmJi9DLE3NjMvE7tQdbBA8h8hf",
  "key16": "PjMdP9XkwA2GVRBkgfRvMet8ymYGiSWe6BJMAcd6Vw39cSafkEuXQDkD4nHQN5YToZbFQjaFSYCwTVie6L3BuHJ",
  "key17": "4371bKmdGeRSHNK5sdUsDx2CFYdTbu3aLAXhMBXB1c6jpaTb1dA38jacrTg1nidqL3rmFgR5MWFS1HRU2GyE9g4k",
  "key18": "4LvSsFGqYRQft7D2BNuD5fmExrxHVyVzNsF8eW538Zex8SEYD4CLkBrfsGccWEsPNe5FRKUMEPXQcAaFr7dssAdh",
  "key19": "4EACuH1JyrWyw2Ugr9XZnSyqCL3GQUoKGS2jZRKYwjuxYKfzzMgVgr63k4659iPsZThC8L8PfNRb6wCTyf4HTQP9",
  "key20": "2LLdT88ehkwDFy6QERucRLwhwLYMYcY75BBPk94icR1xc6iX43ihfQMP5jv6BK5YQdm7WQ57z51B5KV2LfTMNzBZ",
  "key21": "5QqCd4Fi2kj3iM3t1Qc5uii1B1AXog4uWzkJU7aTz8CJ74TrMv54NG7EdsEQ3pdFwawfrX5CN3x6n2NVTozD1qaU",
  "key22": "37JJmB4iKJc1gzNzpRwC8dKPivMUNn43SZ9JcedGKpMUHDyAmv8ArLM3UFDyLwqEKm7vaZFnBx1Urg23L2M8F2cF",
  "key23": "27QA1Q1PYmqpQa14xy2ryGTKj3t4brLX35jXiuJHJSr7rg6smoNGNT2EWfyXSeRmge4fsyVx13bwtLzNGB13So1m",
  "key24": "Jqov7WxmTHwtty1GxSP2x7xcHpcht6WXCXnEesvU6koEaiSKVCSoaneyhamGYXPm1B3xRzKfN4QfKddfWKQqjwN",
  "key25": "2TubB9gBMdEzBSr4Kx7xkBbPWnZuNBxbvCkDNsYT5rEGzDgSq5zmoL8fibwX7nMGS39j9u4DhDw7a3KXyZ1452uw",
  "key26": "4Y4VjbLPSgVMvhPLBg1jDeHJUMrExs9SSWeRp2fij15yXVETwXmfWWcv9vqcNCszvhwd7nFqNxQxh1J1Tbuhu7C6",
  "key27": "59Dgkncu1wpB3Mnsy9v4kHpEFmK373NSCrV1Uuaw4mfr5HG5juvN9zfuxapkVU4ZtAV4oLkufrQ22LuAYmFMWvpQ",
  "key28": "5n9QWSzzueXR1JTEhf65Bcr6Mtx2ftgTSTnemRRbQbpyqUb8YftA99jyWT2GW7g8SdTU8moV6ysDYHGvJQT4E28T",
  "key29": "5ij8Kfezomv3iNtihue2c5SF3wds6dX8xomiT9anpAXh6qJEDSkQw11Mqsq75nPtGn9yk4KTimHcZSx9EcFRmp66",
  "key30": "4BBWxZmRvK6FATeZW9Gop3WWvAoPs43UtvAYhHFNJVyZHpVNJkxxyWvrJdUm6BfPXg96DLHgDAa3GyNGH6yW7YxP",
  "key31": "kBVwdjvdKLxFTfuBZuvdZj5bXviZxpdPpedhVJpmC5sWyv1chHsn92guvggLmH1rtZYi9JR48s2jREgSKxCuJjV",
  "key32": "3ghE16YqU6SLAdusSRSZtj6ETGdHon3sawLPz2mvPyQDQHhqtAPM63YNZUUKXTgAMe8GdxLGXW1EeDNoMiDdshL1",
  "key33": "2kjtuMDzMNazM7HVcxBm3wBiwCmDb82da3k89imAEifACiM1nKEmT6XuqYpdtKFmzTJouiBDD4EttUUZEqAfConQ",
  "key34": "3vGe9HxiqDGACutFTS3tcF2uYhML85v4sAZXFRps3U3271cbjN4vtnYwJeZpoJWjSxLyras2ACjG3Lfa1BCXLhfy",
  "key35": "4BBU4TF2hf5sodgiyAgPFq2pGDkiermo5ZWtNUbxUXypxSkc6CctXcGY3W4TXB1C2jKiToABWFtWgvYWsERHSk5v",
  "key36": "2qdxEEXCLrmrmnQjgrwuyT7HpCQQqWiqmJJfsXHQSRyQJmd5fjCKXkH3Zz5vBcBZA7HGPoeKZes6SnFwyA3ndZxg",
  "key37": "2nNJgTZh7PkqGCNV2hvttjupsHgiLRH8aEYdJonxdCtbaZKSR2fvC2q7N6FrcxFYrkSd52gERKwPAsmnrkvDo8jj",
  "key38": "WAtEPtZw5yPwJS7F7UXB8Z3zTfsXW8uS59qyVSUmk7sUk5Ds5xzfdnUNYFdBcW3ad1X4yZrTb58GdN91UzCa7PP",
  "key39": "3o4tQBLphRJszTXZKJhj2do318yux7JyP8UHfuW4Vkcr69MEe9o1yNEKJEbMrdFMj2vjnffkqfAUA8aF6JTu9aAs",
  "key40": "53WqF5iRA4Cw1d7ZM7uLdyrFBfCYk7T98fni5rMbUMV78rGvR4e34biHSfDufDWVHoAUidGXpdis7gjT5wi7mpxS",
  "key41": "cGkU4CzQNJUiLtApwKXFXMPoa7NUFhmZoseVX6vc2pBU7wp3pmJLHF8byBuHzMTUGkm6AhpH5rrVPp7LgYR4by8",
  "key42": "4Y1dN9TWZq8rBg5avsS3pC26wKLL9ZRqGyy9Ehkn5yL7itSwqwHCABdsrVuiJSKrUxnZ29RM1NsAKnhE2xPtyNDg",
  "key43": "5LgYj5jpm9WmpZjkrdPBPzasd5PrEFEKoPnc1De94fRtSXZv4nFAvHHJCQCz8xnB4A1ASVx7CYPh8DCWcnMGLq4j",
  "key44": "5MpPH8CSqj6t6bSbLea39QU9BgXscJVsxQC7t55RFpqPdqjFrQkgMHzQC4Jp6kKQdb2c6qb4PntLzx1h17PnFyXj"
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
