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
    "5X8gLAs2976qs7FMr1udtu8HVPNhF2282U1ue8JvVBZW6idC7316yAaCrnotnU8LsE15RoDFNox55wmpsLkUq6Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MyRiLeZJzjwkLcfwy7VosfrpmL3cUYU6tp52wcVGi6E9V5ZArBJmyzuvJLYFNPbuN2EXcPxEL6NDxq8wB7DqoaT",
  "key1": "4Y7i1SM2fLADNujCKRzPe69WHcAhKdE6KXLgfztB8EeudHE2PU93UMzqcaXLV9Ezasum7GxcMpQkGMZgAdaxAGG5",
  "key2": "4KNCLSkuMNFmnuvnN99o7He9L1QWGegtdJa6VScuc8HU1vMyMj4G1B39vxGJqApnsd54TsnkYnqHvQsM7QKhpG5F",
  "key3": "4S7ayVH9SQUWeqFHbCsZkt1L4EMmyjQk2HcDLpWHZykYCYrbce9QP6fGL3iyH3ve7jSP6GPhuJFnLbcsY645y5D6",
  "key4": "2Gzc7n7gUMkczLx5TdXJrsNjYo5AfKo4dqJx45eogR11bFsVCxXpB4bxMHN3SW5LjMxP7uEH458WrSRBCwvBe6ws",
  "key5": "2NSkp3BvyaSBQbk7rfTC1zreBxGJqP3LZ1LewNXfZMPkeyA3dKFxVdsJs5GexB6fSMT1EnwnsuLc4oB9mnbGzkqP",
  "key6": "3w5uCKBgiKykWf6uAFyT6p29DdNkcycix1nVX8EHo4ghJPK6c2zfXPx2uEtoJFfUGJ9bjtR4NEwxuzuDBUpjNCJ8",
  "key7": "5bb8E7aecxqvkhUtRFAF5hFLCL4vdvFXcJLpzugPzTmbKK717UQ9m6KkfJhYRtgKoL4irjYJTPTH3bsUJRNb1ztP",
  "key8": "4rFjSset4MN1Nhc1yg5dLEYHZayZ55pxDz5GJRpePBCs6p1qRcKPKZPCqyBMeHVq62wY244Pxh8CEbUy4PX4Jd57",
  "key9": "5gTFfS88Kq8ix63DvS7DdMfWuNJjMAwFkRQKGACXgNxX1aWtQfjmwd3SxMuDCHHYAHhpHDKTXnE9mZMzP8YwTpcD",
  "key10": "5FB7tFbqDfkyQZy8Ey6K3gncQ1UzXz2cyborjDAaz6ZKZsiaSdCdYXXxgtuQR4rwfoVENv4wChz6YRrDbhiLjsFL",
  "key11": "mYYr7oWhhhbdRoNSuMJb2FPrp19PHuwh7KibP4a8PP3rr5ENJZ9vtnT7AFGjEdPbYUKr3z4a6vVvkzxL5LiDHg1",
  "key12": "3tMuvVK1XEJd5Kh5a3Et51v8Hfg1tTktGpHNWN1PGKFjR32LmNpipWtzy7x1PbdaYPaGguCfShySnLSfcXpmG3C5",
  "key13": "2tikpQnJjzor3XHtHWoZZxJ1dmJHxTwfNQBUybaJ15qSmwwMDSHeZuh8VKFYsXqHyBsHNj7C9ZFnDEj8RpTAuzpw",
  "key14": "54TLcgaAyAQGBiExCVmkp4LADueDySb7zB5Tme3yCBmVkG6wv5G4fMoRWq6ra9Btg5aAc7YUnvc2hf1szftK4JYa",
  "key15": "3ZPUfQXjQwzTskuts1U6eCXwrH3paxkp4TDX7L62TUfvpicDAdVFDbq9Eo6xp8i5r4hawfARoxYQWyuUGTycAvwh",
  "key16": "Ccx5W9YDX2Re396iV2WmbNi6q6KfpmTP349ZEncE3qwkMmkvSzs9TDsdiepCrsZMC26WE8psuznPCog8AX1NE5g",
  "key17": "3JRE2djHjaqzAHpPsbtEHjSxsnTYk1y9GEezrnPuzfw5jqFWKu37bEwB8hTSZcC3aAuuwHABw4xw6ZG6xBCGqr6y",
  "key18": "2jBjTkNk6vCgAs8W46SvxbUr8Z2ZPfQPpPdJ8BkfDyH2uRdWRctiLinRLj3waeoKRQW3xKBDvRdExxTkpeTmM27g",
  "key19": "YNMTyEuccD9YFpgvqu677ax5Q32acde5tuDvE8SimjJ9hZ7PACMo9hDprRLySX7CmwqnXNsMC6tZGihhjLyph88",
  "key20": "5w77xwmMoRj8r6MPhecdVjTrhLPYnKhc2iY3w1iaqHEv5o8AyXp8SbmtjWRoyqzt5HMMGrNi7YJ77d7SwgMzG9Ea",
  "key21": "4j8jRLVRDmLLbP7oUjQGjzHZiRhCvFfHaAM9LaZZd6C6Do26FgRAFDRuYqLiwXoXPTe5L7auir36y7FjHJcVEGxS",
  "key22": "2UPA7XoTqaU1BEZQWmEpXuY2Vo15NfLWnaZRD9qFsVvtidQyWTGnoq5b4hBESNfb8McUo11JRmJosNAmoNRSJqQE",
  "key23": "59gsfkQruGheqLsV2HBRfHhLiqwhPJmXra2QA39gj1Erf8taDZwoQAuvzQENLgMvsoSEKQyvbfdC5NV1b8uBTEop",
  "key24": "3cAhpZTigKSJSfxm2g3WAcwjJdQ8MXC83F4jzVKdPAnVpnWj4V8ZPCuHtSmwDe3swkSD2igHDQuPnwpLviz4eJeM",
  "key25": "54721krM6hEXGTuVE57F5NtakCUxB3NPLikELAbQgvV2FpjNHMN4FwmrxmTiZWN1FkSNyxfDWEG6ijFPY7FafQ3T",
  "key26": "3stJymNdci9Ao2e5c23yKytpTrYJ6QbWAmtXr8DG1qW2bFcmzMXtdD8NiWtzx5SLBQaLoYqdfmo9z9qS2zX57wFk",
  "key27": "Bhqd8q4NG7ZpdXxFp9W4EgbAAxswV7H48mFqLnQD2RHoSop5VK7KzeNRDJpg4okCF5Xeduc15ot469J2kXcSA7k",
  "key28": "4XNddHo8Kepi4qcd4vKogHADTwDb4Zx6MDuX5mzhbtwNnuoz1BCav2iDkskPE1vmdLEMKtNsdttWkUgZJZGKpaT2",
  "key29": "5GdEhDJ5gCEhW1dz7Rd7qcF8zSJJyvYD4qtFUiRdeprgWBNyPVSJTRbxC1hF9cRbV4G2ynuqBz7rTqM4VZwLeGiq"
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
