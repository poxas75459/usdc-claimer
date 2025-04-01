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
    "534nW3QHV728oC5NTLpSDWKv8LR1PaNt1nwFr3Ubdmr7dyvbemGizsGRxD1SiRvtBvCvGqjonMq576pdHymCkGW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BBDhV2ojQLx7qdwSPZzF1zhHLpnzosHGw8nVU5ZiPcTv4nYckomwkhrqbD84RrdBTGRndzT5zHcg8ue3e2gBhZF",
  "key1": "5UJDUSeHCo6i3ptTACUVVQg8tVzfonXKVzpHEFYfHWvAGTT3yWpQ5p1qV7RibkFkJEe8QF3aDcn5qtVhpKBtnZq7",
  "key2": "4MrbhgXwVyqh3jQn6kQshDW7R7EZMpCGJEr9jtchmsMX9NUdBnYpzsD32uerKAwv841mYChUQze3UC1hBjag77gm",
  "key3": "JDqiwrMfTuKv1dzedR21faAkhioEQPSWHHW7GsCHESX5LE9j8CAmUqWwraicBkuMBvApHnDKU8RTQAb3cVV2Qew",
  "key4": "2JdPCDevChHjQY2aihYKJHEpdUwBX6UoVpSiSZd9peEnVDaPsEfjMdo7Ejp4nk27AN5daorwVUr7capLAyYnqumi",
  "key5": "4sPAvnVkJFPz6Y3BdDZWdeuwnQE7N1cGDrWEMR4nDXLMhTV1FoMt9dBXjmeZW9PHZmbniqihB8voj7jgfM7asJPa",
  "key6": "4RXVAmmoNSKUj1YKzy2uJz5YrJ3sHLDsopUzaK6ZztDm22V2U1iYuSXM8r1hrNXy2SMHXzQSMyi9mEcnzGMYTs4k",
  "key7": "3tomv81SJen63KbaZvy9wTZGTbZwYASJxZTLG9KetjSgXVrpZRrHnKkZskipEpq7VLQFPVgZMDKLKcHDvQ1vVpee",
  "key8": "5YXofP566eAsXwjnhtowYbCVqkGcjyuv584pU2dqaR1hJ2qRBaNgTJQhAUNJk1XhpbVbB34ovBxphByp4oRb9rZx",
  "key9": "3SgbsxHiAQgmjb6cvgejkR2bTSmKjncawqTuAJj8f88tpgvaBQ7wGhofaMgYajk5HmS5M1ffTp1RNz9psn5cXt5j",
  "key10": "5JwqfWp5GP7UJu4vC4ixAjKRV14h4ZJrCxqB85yZuq1WUdGf5GYScpqmMgsnLBZDUPCEUXWqGsnq1GaWikNTACQY",
  "key11": "WoqTgtHFVK4Ez2hzBnTCwwSpp2mGWbtabSMscjYFcmsurywUDePJWJuLXxFxDkPtT3J7a82NLF9fjGHu3Bn1AxQ",
  "key12": "4kXEpqUXKQXaDWsYiJKZ5Uh2vaxkCPCoxiTgGMakXTgTdRy76F5Po2R3eAbGFkuku2imPrzNs6JGfeiudyhvixma",
  "key13": "3Roeap8LFLY1zSriSQWAffxvojFF1Z2xFj5cTzF6JCQ6Va1T5ohehnuDhRKHgVSk7zC5wyQgHiZTu8EppafgS2xN",
  "key14": "441hRN4RGyMjN22U4MTs6128g7mv7YTdWdijdEUpJR6tdfMQaTkAtqonuoiKmQT8Zn1i3CajaHaJyBKYe5yUfWMW",
  "key15": "4jKmbSFBnF2xsShAnyrVpHTQqtsXVX9oSpAmAxYU3JwPw9gziwWvQZaUEESeRYbUM5u1LRvGhv8BMGUzwTsfSikA",
  "key16": "5E4qnkQxuFxqZ2dSxMkUc2CMLh4tJcHB8wANmAfzTgkhEv8imZLHQhk3WGLdcc3Fd2Cuu3DGsXoJEG6aJmyRpTip",
  "key17": "4xjZQqVcioq5Fu8ZVH2ypTLitUfxfUjpUqM1D8ByNBgUNSM7ztYx7dyPSGEYe6kKdj4STqnsReBVeC4WpFdAuoWX",
  "key18": "2rppmgcPTZYn1b6SmZookxCdTQw43wXNPnUXGuxJ83vfNoocHM9VqfAJZnFcHybpXqU32EgcSoQdS5sUG2PjypvW",
  "key19": "5ZBHuBp3uYSh5sJtgmAMjWWaKeTnmt7sNqTGztEGnyiVr1ZDgRgUWFxJAsQh2gNGVuzSi5XayCHbYUqinApJodpp",
  "key20": "44HoYArZvjzcdawKkPtp8Pf2ci357DcQytbRYmsLezyUQXwqoXHhhixrnjrPKXyFWqcXHgjbKfr5qHY3KuDYJse1",
  "key21": "2CGjwu7iqChTd4co2mQiCUWPgGSD7pvFoSE2Z7zFLyB3zgc7NWEUsJKYAF3rcHvV2ifQ7UTwcpiABit6dhYn98Kz",
  "key22": "TdsPDpsJPtXtsQ9To7buiv8v4ByZ5ourdWb5JgyMEcAomuQhcoFJb7kX8g94ThWwR63yDeYyszfHYm5Tbi7MpG8",
  "key23": "4j4XchaSe4NXqeuhHjoToyo7FeeP8eXrWChgbQGYCuPYsQ4tez4WBqD7Zdf7qCe2hdX7Zj9b39gccPcMMpfTHM6H",
  "key24": "2d5SnD52K1tFPF2MWbGbBEueQMaxoPGHU7TXhYN4cXks8GfxARpsxMCdeim9EtcbhZbpAJNwWMcuM1XwiAyejb9N",
  "key25": "4n6FUvTVdLqzynrVKpUwxXp3HZzPx5poRdvE7Vb3gGZwcLtEjhDgwzTDZWi9VEdULp78f48yZwt7T172FZAm9B3M",
  "key26": "57LwKqmBaAKUwwkXjDVCTuYMDDBgB1cPiRJCFSUM3twjMTK6D3L21E7sMckdVjEgj6f1SrrLYepqzefWNDuCiFmD",
  "key27": "4wGPRK594dfMiZuArHQJhTHyf5W8hkcY7rKq7hbtc7sJ8CbrkbBG3xKxjY8ESLK5CP3rWgjaSZDy9dfQEHe4XFk4",
  "key28": "4R9qEEX7iaWZxxkqEay3UdjysGNH9sDfUDZ2RHRyhMu7Ba8WPhYRgVLHKgeJd1jPrrXQBgYtLx3gLbdmdDLNX6nH",
  "key29": "66D2R8aFPVAeuUxCaMvPFe7AA2dGMHZsgzxGqBf3tw2DK1AnwoQ12wEnpioZYnqQ6RTsHSmmH6bHmJ9k8RzpsJLS",
  "key30": "4gCWtaFWS9KYwuBsUuegL95fz5bi7HcKajfy2c8imuRVD5REd9Uc8GS8qui6Rm7aEnacTzzor1ZMaJk1b1Czym8a",
  "key31": "4nhxwRkgr2J9TAWRR4bnQLU43tLgmVPqJozwVNZj3u68eAf2QvqE3aLDFnbmD7TwTCHr35EPzv95G3VGzH3josqx",
  "key32": "5e1J9T1sEuCRntwiyMotWAm61gkL7b71A49Gxfgi6WgriQLf9GUa7P72mFY443qJcNrn3hQnLSAmvT5s7pw4NMGB",
  "key33": "5QiBeM6vRNAuiuCspg9BZLskYAcRKuXgk2oLf6zhCGTaaXvqo6aiJ9QP2ewEhqSmcjr5jkzBk2iiRshGWGmm8jsy",
  "key34": "27wNr9Ff3tdAw9fUEyr8khgZH65wW3pzJvzEdx1PqRwqJ16F3ZUoND39NTdicx1ggL1yRqm5uhwhDze3ovYysb3v",
  "key35": "2X7xW8SZPJd98XgRaeV833qa2EhNoL5GSp6AjVPzy8GX8k4xjMPs5fDEhKs7s2Rqf4EVtm5WuKfN37tBHXXf3GZD",
  "key36": "2zkC83LxHUEVgwx1Y58PnTLacBHEfexnFoBvQCyXAwBjJQWVSyTTZLtG53f9qLgNNC31SKtwnY4wED2ScUmakhvZ",
  "key37": "5cs8weFydke9AwafV2GHfPMEwzJwyHrC932Qv8pfmm9ts5wgK4A2S6EnzKqQsrDLCrDUWTMBjQ3AD4kJ5mgpZBrU"
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
