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
    "44bsJaWebpfRWdwKLF8kC8M5n1fuVVE4EjShDErwgRj9rhJZqs4fdrL2ii4hFJXVhS1VVnkgggx2pyZKSxiYkwca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W7nDVKymg1vSR4nTGBUpBDkMVk2mcPNJbMnTL3EMhtDdohsxpke8jbxbqQEydQBRcwwKDutCvywGKf6HH4DPZs1",
  "key1": "3XokELn6r4Yxg58h3VNYQ3SPU3PJq9bNjjqyQbTq6VTzLzgMXtpny5aBG9dPJ3mv1QrMN2z8CciMtP77CAgBDZ85",
  "key2": "4Kyo7p93v8MeUWJTapewjCiFMp2jdKT9TpFvwp1gSgQwCfVavzzmXmHgLWJz346BeqH6VNBWeyxyXBiQPtYQwt1T",
  "key3": "3V64oMsUCk3MuZLtjLixEGgGEuaya5tMWAy2c66sM8BkqY5fdP9jobCMDCo65D3bditZ7ZSG9S56tk3H8Z7KX3vh",
  "key4": "3zixBUikHVgeGcjMbTCEepXiKHmhMeK4RBAzNkuQ4WrRZQ4F2jxWWo8y5PnkGcytrypX1p3omDg6Duigp85J2fbU",
  "key5": "2cYeTeR72f41tyZYZLRWrmiwfSc15PSkhd5Lz5eh3oTZPPmTAztP7F6t3VdaSg1uUx8BvgK18WfiQrF5RKmTbscg",
  "key6": "4GJFwFHdmbCJL9yutxtzpUAeoiCqKWQoYVYgbrprhdHgmPPK5pMQmXERWzy93KtXf3MjUyTkwhdnKZZ3LSMtqHHq",
  "key7": "47Jw86gnc6u7SSWfywX9WUznoZLvB8DvqskHvncbearyvBZ6kss4ZHw95iTPTEho8VhBWcR1SdW4dBkZmDyGkpBq",
  "key8": "5eFGoNGPNxpd2iLyMH76rHw3oe6JGkozfV8nF94C3qRHTwMcQLcCnsintYyejyog5LX1V2BtMfuiMWVYk2AhcxrG",
  "key9": "5LHw7bYCaYAue5pHkGWhBbrmbdXSy1CFGcgfANPihxduvK9Zv74XwLbAkbB4tn12BeSjniNpLBDUvx6dsDGXETfn",
  "key10": "Q3odtTn8RuWi17MtfHwbM5pHDZQ1BYgciXgfFMTQPUKyU55ZmQULjQj74FqP1V8sBgFVAuSHnTi1b3dVew9BpKG",
  "key11": "FuDQoxetJLt1bAx4ZeyYt6M39sx5tDxYNKvQ58L3ig4CguhJsD4GEA7hNZVmVZXP7aYJRbEXSFmSddU7L4xsCic",
  "key12": "4Get4epDcrvqiMmPvGNJVmZsmae4grW1Cz151wBBp1wusErnjRG1v5hMwsa4d6ZDsJfq1SqUGRvmdd5o8WK3byV8",
  "key13": "38tyeDUaCrQ7Acs8oswgdLK1yD9hBRPyVrfgvXEWYTJsMHQgEYvSQt5NhvSX1D7PxaJNNNxbZrQ6AQQmkkq8BPTu",
  "key14": "3xnZHk8KFwszQfzKtoKJeGRB4DxfFUQWrt91vsbPL5fd5hr6TEqwsQio7R5G6gxum1Wqs4m1CNJCxZtX6tY3h51p",
  "key15": "2BXXPNUr3oHAZfuWYqBRaPRmsiCr3yonVF963AZTiM8zkaKFiFKNbGECq3RHTJ6J3f33B3YCCZ5omzuHYnnkuCLL",
  "key16": "4tpFAmezvUpFvgSJ2sncNcCXuArtyGe1KpNuJexf4nsi6ViEZ7anZ3jhBC4w84DSVXbyRitVqWzphHHA5YdMVjKH",
  "key17": "5T1w7Uf2sqWDzwimRk5zytqfhzpB1YHvuSs63AVoHWQPZx99FgfUdtbuZkBb1LUVo3hfVn4266kbYmNEb8wn28ae",
  "key18": "5zCbYHGqKknLUvtRW3ASRXQGRnxbNmmefUMavH1TS1CVQ6gfYQfTZpKo8FukTN57c5jqMEGzstSSmFJUZXKGZJzK",
  "key19": "DDMi2bpjiECc5rDpkkhUhfp8iQzMnRsoBhUaMh5Z4XcpkPW9mnBQauA7LcoTP1A6RA8ihXjx8PX7jk11P52iCrQ",
  "key20": "6usmWQsENmwNgHwhsLNYYncLgRAm39zkNYGY1qRpwcbRPscn57W5Zsx1C9xNYSHhs1h2BuM7J68kS8wDeLk6rQf",
  "key21": "5qJJYgsacpbDagWndNJERzehD2sNwWRrRAE9ivpXaPLX7C27Uf3fUddpBUYxHqYxnY5AXEZaVQcitaEeVWrru52e",
  "key22": "5GdguPsq8W3Sgsm6Ytsrj71ffZyDng6m5oYJqb7A19cyJcGQ4yWXTS8izv1QhGwQZ365wRAM722ehfDeXZABrJUd",
  "key23": "2D6dj1PPdvo5tPnJYyFBChrFSZRedpwi1K371YYC3BBVFeU6mcbXPgGtTTfzZ55Ey9NuU3pAraTEycJhwwM6zP1",
  "key24": "2N4QKNK1fivE2HLsoWJVoxiS7Wh26ibXDQJHidhxyxbq5bxsyGo8hdRugF97aUq5J4QPFpmJxUoK3nssbNp3jxDX",
  "key25": "4gM2j9nRVCma14CwfzVT5XzA8Fnmnk1iWAEvAdStprjkSRYXWCNahGt62LqyjRmg1RydWaK9qNyppQERjBMvyYTj",
  "key26": "24361HAsLtXvHQnRVgP5abNmfgRjya8LYy9MruG6sATW4FXot6jMFkWpA3GjzZm9SpmCxex32MoaZDephtcyz5H9",
  "key27": "4k6RcF2JiHSnKZXv3BBDaKC72VdHBYwBF1XehwTJE1mcvqvfN1bxX8gL8N2p5Hs5KgXaNd4GYbYSFVrHj8oE7Upt",
  "key28": "GQkaQcH5mF7x1QkNTs5SnSPvYsvwnQSh5NrnY23frM4dEPJsFbvVZLWm1xJ4ZTRuYTzhXfSncNC6riRHGWB4Tsm",
  "key29": "o9gGzAghFYfNFWxvMKmxABkXiWkKqevCtq8ZotDVQLVjyGcd4hBq8fns9uRPk39SqFXS8qQkn5KfcTaG9x8KDc1",
  "key30": "c3pKNLgLpfGgq6FVmwtoEbLXpFzKeHo1P2iBixHdbwm3KufDaL4F9rkJ75vDP6qZQao2y1Mu9bMsTWif3gs38f3",
  "key31": "5jS3o4xK3vd1EUUiHSuTzaswqDupWgZn4or4qhmF46DDpLJKgR2JjwBUGT4x56s8q6KBnbPGRymt9BMRAPMgPUNo",
  "key32": "3aX6LSzXvRXXFS8ZX3PhjZTBfbNzpD4J5qiPKTcqzkWdY5THsCpuQ4FNus3Hfx3QjQSDw4DXE1udw292F5nzQknL",
  "key33": "4Hzf6HVhxLYWVw7r6yc9C11f3Q4fmm4xpFDUHJtRh8xnS6acp8LndE8soHuhn9f1SKx7q359aPnBTBivDpR4deXD",
  "key34": "4bCj7F4LV16AtwgyWweTBxeBxwhMbc5TRc8PVSEoyhw4ifVCRGxjvzpuZnvQuoJqszfgSxUWjBkwEeTT1bt4rusf"
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
