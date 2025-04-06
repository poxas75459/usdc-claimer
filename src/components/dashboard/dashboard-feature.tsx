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
    "3WqZNuiFE8xawRo1xZoM8pEzYHagPQcfwXqsWSFzdkiqDuhyKFCegzrfvSNEsyB3aafEfRb2w9PgMJMkAxZjSGKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H11dwwcgNfAsGwAca3paqK27o1iPtSeZapPSCeLcEedynWHDtXSy6Eh4tCBZBd1TpgWr44yg7zqTKPbGNDhpPmN",
  "key1": "32hZ8b67VibFfAW9J8UkAsAh1e6DDh2nUybZtZ6E8fL6mP4CRJULzaHGSFwDuLKwyXDFWrcZMgj2e5GuaaAQ5XKP",
  "key2": "cahYCZTywvSCyBSH2UE17dhVV9brjB14Se1ZtqoNuSFLMHPthZGMEqcWVQX9KEXG5JKyxFvMc3xJb5PJAxAyhGw",
  "key3": "2fuQ4pkQWTHjjanWcF1Qinzk8gwRwQyxDdjyNMv1WPA67QtVvw8mJJXS9UFHMPsJmUcDaE2gmGzxM9p2cKqRL9tf",
  "key4": "37zAWo2dVkFaX87KLrzEYJjTRhmrQd6m8hkiB162TUeFf9dqhz4waADNoznZbH83jPXmJ4RNCAZikccL2MgjNGHC",
  "key5": "2LWCd2hjoNnDMo8CUcqkFX6Bzi1PLp3WmQUzFAFW6BzXFbTQQKE5TkB7vBkJq9dBdLJz4qXVxed1k6Kwg2GrPNdQ",
  "key6": "2AoSXJTd3qAX8WePk33YsfBF9WpivYJCVfPcLbfg7kfaokTkUNvF11HJD6AGEBzar3ndvPSECirybZNhEgbveMcu",
  "key7": "5VnRSdWzZYLvpXW6QrpzVH1HKj2dP1pDdjHsKXigFx5v7A8TpPTo2r3ndXgoV1H1ThqRTrEndbo5sphE57kbZrp9",
  "key8": "2xQEw1pHUm7fT9D5a2Wo9x3m2JzKWMKkozANMaNpzPQ4uWVZnFabiNxHHBidTpq6gqGZ5i2DxRqVToyfQ2qkkSag",
  "key9": "5JkZP3p61XprbURqQBcxBNw8wds7RWctsKKjCyBvDEYVbmfK8NPD79Anq56Jr4Zhxrxt9Z72vAnyFbvVqF3f5L39",
  "key10": "2tEXkc4spnqyfhDQFjWmk3UiEg5xazDBr7HyDgdKJeRxiZDf4pcKsdQkE7ZuX7gu7xAPJsYGch3eMaLNxuVnwRCi",
  "key11": "4cJKPTjbVG4sfL2sdEGANq2DmBt5d72VkzXPrmnVPK5wQNVeMbNnoMr75iTrBgyp5j56Z4gaakxc51FuXa9jim7q",
  "key12": "5X5nsjPuJ2yUYbhSuq77DPiQiwcFrAuzJthQ7EVgXoYomcsjuTeBuwa8F2NaJ1MR5X1WratWs1TQMAtpNkQG7apb",
  "key13": "2UPMFmaBGEhEkPugm7UoyN9QGVxowy7k2xbRd7cE3srwkndD28MEUFoLg4SB7CFjgNbMcMEnV6GkdaCE2xaUuvmX",
  "key14": "4F85K38kW1zhmbwWwkj4F5ufuCCxzkonYz6uWHHvp4L2GtLjqqUMAhMqqNGb7CoL6qHCnucGUcY4UbTyXQQV5ju4",
  "key15": "4sJKmdP1fKYDTE8gxYUs8zKTWw6m1rGLs3Ccjg4AN1oj2S7CWh9AyF1hhnZ4Bh4nzv7gMNsGUN5EX131Zy9iXEZj",
  "key16": "2jZzas66JKXqGjrdWhXsqTE2tAFRnPcBmRRW7uh6ys6cMxypqFNE7zEsWXtkK3XL1sQkfuTF5KVhyPseqGyoACy",
  "key17": "5WoRfAaCkV1swEZ2G8CM21CZrRgmAHTJb4K6cnpZqEJYmTdCnbbBQgQiU4gZbkYU9CrVmkhBSwX88HyVZzXQkucP",
  "key18": "3bvs6i4MBwRZsk7rjVCYktTcE8vY3yceer7yhKkuSkSTzPtv9mz42UY7fb364QVqrruYpfgoJYGzRcfR63BmH9R4",
  "key19": "4k69DqFptnf8nHKEVb2dEpt3TZgqzTBUDzVZ9cbdRwXKsGpXAuu5oyiUJZF7E1CpuaWAjdpN34nk1WTQ9KwdSgMF",
  "key20": "33eUNDAuQcxX6Msvn4FYwfcm6KxNpdjjX2qbEa6iko6j83Ksd2eJJEpxwPUZJy9cAJdsxU5b8DP9p9W6LauXNUTy",
  "key21": "syPy1mi9Q6VWYNwgsn3pxm8tKaCZMt5k5NCHVFKxGQBioTAuzxzpbXEXSq3dkMaLuWSGii62j5YqtKuCAL61SaL",
  "key22": "5DA9ZCTJGNcDFdFKBzkrusW33n466TTRtZemPm245pUm9hLHtLheqK4TACPtETbJ7qphnW9Snq84dQpRVGE62wy6",
  "key23": "2BZ6RRQ8AAnMeWx6tGTBkoZ782zSoeq38qaLesnN2S4YnaQJek8xn93pHgEP2n9f85KNEEWyD8267KNPy3Zwktjg",
  "key24": "2qvDy9vVW3sYczhE9N9RHLxcHSKc8hgCb8Gvfo9JBC29NfAG9vtsU747PVwxLYyGvVnQyD4N5BLpk68Dsjg52o4d",
  "key25": "7T6TE3jUxo691vo11vZ9kfM5rv4rdj4JyCNKB2avLPLH6bFSQzVrHVi6maQ96aDtusBN9Y423Gt26eUdM8UGi99",
  "key26": "5gbRZgZVgzNRF64ojmMP4aKU4spVBALCvjCbEj6m3vieGWDFqTC4ZxD2jhW7M8rP2YoubvK87WQswepbzehLMPW8",
  "key27": "jwqt7QW54kNDHrPEUmZ3YLmihZzNsKnFwPbjQcMv994D5kDwYZWrx8phHRPFwotAn58cSPkZb9H8XCYHVczy37u",
  "key28": "2hhBdfof26Ke1vjBrx1enivoy9MJy9yeG8wkb3VZJBzQZH3KJZMHAgUarcLi9MumLcp4LdtHeGBsRVa5fnzW3xwy"
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
