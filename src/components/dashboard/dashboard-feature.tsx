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
    "kFpyyRRxBrcRYDgNfUTMkUivB6tP8Z7tYwqr7iEQTRto7DE2hYK3bPsUkj8XEBF5ebxMrtEQ8H2eZoJ7eY8nZGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntij2Y3LZHDpr6FYbKhg8Wq61evzQy49oxjr1NnDZFeqWiaDhTNDBhSefS7DbivN9AMhEzh2yqLAyDGAh8hFwGh",
  "key1": "3rPXH7rRqoRfT29u8yWnHG5LiSAbNdXXYm8cuzMSRaxBRJi8hGhkZv75mEpahjAM2QphWdcxtSUuFnYtAfBYUAsN",
  "key2": "5YQZBWKNi1vZX3ZhAV9RLuiYKiLK8XpKKqRMNevyr4BdgEUwN3r78yaXK87P2ozzkG3nWnwcdTc4PVxaEkYFr3En",
  "key3": "5mYbATdGV7XcRbgY4wQ9Q8yskXyyiDyJrGTaDsgnEpDaKKnFiySLC4E4RpsDBUuov3BKrz4TxJoNRfvQJE75c2q",
  "key4": "5bAMtpJMY4NniVgWwF1ptb8bucyJEThyDhJtT6PiT8HFoJvNyZUheezDozjz7Szi7uTbSXh3dYXNMw9B1PEp2Zxb",
  "key5": "4vUZ78cexF4MmueyXPtGzSzD3mVC3QxFvARgMd1Eg7Pr4ady7eFdHR4kD1e892kPJb6ihzPNAq8Pmeb7czwg84vX",
  "key6": "pntezPuNTRmwd1PfHbryGm4AT1am1rVPjsuQTbfDY2cEFmWPXmK9SuQWUELHxht3DKAhjfpRKSkiA57EZtLaGEU",
  "key7": "CxEDB5pB5ZBE4vJMJkaxCNEzcuFcVC4xQf6eS2CjnFwns3mkv6WSarxkWuf1nRrJ8P1BVRKsgBpdqrSWN2PgQPH",
  "key8": "EsokuubswQmXJWSocchApNkWbByp6w8qFesmjjRCHuMbL6GuAUaGGjDBVWQKnUdfKS6M4158tV9sjaZZ57X4Tzw",
  "key9": "2nJEtLdF8kMsDKf352MF3iGDK6HUYgM5VosmygHMvra7nqKFZfsAcxKpoW9dT7bPYmiLg6Qm1DEPouVXgy5zSdw1",
  "key10": "4gtD8z2NpnjM3kB37yk7GFubHCVkpfBkKpfzkwYDYPQ3px5bG6c9FveSc22Tj7bniFKZnxYtNzb2BipALT5jmr3D",
  "key11": "5WBKChHsp469ZpHUH6dgembu1Q12DVw8o7NTKsA5fFSzXBcSs4FB4DeojM386KFomxJZmUw54Gkhbsq84yfLQAZj",
  "key12": "42EqcGNFAingAdnUcWb7xZEcG7cmquDLAun8uKKacyaDqYrQ37rweWJUDHPGx5GabR7NXvehBvtmSuisUMWX8FxR",
  "key13": "4voXXi1fGTCfYt7NTZcy45JwhUVqzqYgbvRa87AruSmJ68AitvGtj4x2nprztQgyrQEXytuiYByhRP2Pt2iMmATd",
  "key14": "jBWoSceq3YCayjwFsdKds3hbfmjsWoFtJ3qNe9cMTKZ6yvE4erqJ7uHtFs8itQ9XMSFLLagKYxRNETpsQjaoWWF",
  "key15": "SCarfCP6DhT7rMepp1XRmHgxRwzgVqt5PSwjikhSmjiRNNujNKU5ptMS1d6mvc3bgtohgduwMwBUo2vqUrzq8sM",
  "key16": "457pSeqLyCqYmLfQqXHpEmtUin9T2sNeqXxfMHjLb7WmqBGq7tYHC989BgKiu2pjeAzQDCpz8Zdx8NsLD96GcME4",
  "key17": "2reGXKoyfcwv3pppUhVxpNVbm1QqHJDnQ1SQ4iKxWMC75DUptZHtgx4wqwgKX3Ht7ySe2YpcXYGPyvEUWA9kdJTH",
  "key18": "2PMHeiHNhBRT7EnF4yAwid8489hCeWe8FrWwg339ormhxHiXiDZwUT4kCFJ2Zgek1Jb2jfDRhN4XC2YoibqyKWKF",
  "key19": "2BRggPa7Locjixe6aJaN3ci1AeWkne37yostj1P7vvMKHZMeQ7ag4P6swWMGF5FjuyWvAJtLZvMYeYv9TZLYyMve",
  "key20": "wc4WYhndnPwzhFB7fcMvKV7P4bwDHzACmgSZta4Ju2u12SPpgFk5wRT9b9Y4QFhk4RyfTvMF2hdVdGqUtZtaNdX",
  "key21": "4gyiQf6jY1ckrtXUdPSu1Vuas9CU2QBPzbL2m7jNpDESpY2mfxSn8F4oKKScvVbCPeW7HbGsLNk4V5TReDP4t81n",
  "key22": "5JnB8wDWkc14R1iHAoCbAWhvFYA5fzgbfX8Fr1mmkhEvQTaT9ncPuwNXB9FpenUaeW5647yupVQ1X9CzHed6qLUj",
  "key23": "38kCFWbhFGJyftCowY4MZsx51fbwgyarPweVThCfUAkQSi3yB7dP8igDfDaNpEofBJ3BgESG3cEMZSUhYkSZPjMS",
  "key24": "2oJBaxBeyGZT9FfPpZinC6dBYHmwv3aT1U7jfnJYJhbgKpgzGE4p2s8ZX9owR6GAjRPsKrqWqJBsAHE6CEpNg13h",
  "key25": "5SuTt5XGSyzcBMkBRa9w3zrV63bMXeX54zLkQKuYrP1R5hzjs9WQRRKMgX1TGqCMCQssKom5gDhSiobRst15FGu5",
  "key26": "5QRXqFSoJoWBd6gVJyTeUb9azEragjY5ED91q1bBQGR1iXzpPSaJL4GfpXvcBJWh7oekSAL3pk5k9NWFBmd16NPk",
  "key27": "3X6XKegYQiLjjF54g33dJiZuRs2KJv1yYwHXStBzgwd6rDc5PbdFGd9bDSLvFGwxGx21ZZ4o9SQxwD8pfHo7zoY6",
  "key28": "LKUJMG65C3GXk4KfTk5iUJfhk9FbEWX137NwZXGFKkcLyCEqxH5cNMnCSeavBXzBi3vDmmNrixkppWkLwXbkLrH",
  "key29": "88CbZzoowoJiTg4ijHPRueGscm24yzHsztS2Q2AXZaSPZoUQMA5dZo1vs7n97FrXFe1k9UeZWNUaMxPLeghuKJb",
  "key30": "3TYMd2VHqC6zj471ptDXxcjtHPmVT4QuoXfeZLoCbnn46ZEWojbtvRL5a9uLKSjg2YUQUFyuDPNNJKuk5Xv7FPWm",
  "key31": "4tVtpjvPQt6ywD1xuUbBHZEpo199sjAMnTqDPFSvLVePuhNykjQaHtnHckBGGPhZFvueW5zn3PdKovBUAnKwiq8n",
  "key32": "4gVhqZABV3RJeS3NQ2Aoo6nFy8yuE1t94c8G3sTTDVnG2W4ATdUGF2DYzDoKmWP1xu4Gg4idX3pxjesbVeX5xMvD"
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
