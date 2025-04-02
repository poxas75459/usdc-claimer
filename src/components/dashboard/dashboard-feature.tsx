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
    "4dH7FbYok9Ar1U4Dw6x22pb4rwFEeZkbgCwwzjSEziDiuXnJwjaBpBdWQfvqCcuGscjQAwpnit8WxLVfPAzjKDB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4393vY4Bqww8WyjcWF25d8vgddzS8hNfFQq5XzZekTZymdQZ9vLZtVBAKkbQxP2Dn9v98tchBxThZTRoQu41doew",
  "key1": "3wKQhPKUv5QHkr4JirVsGGwNSMNJ4BSpGPvsddqvPFbucmJtsySRZs6uR4uEa5Tv34RkpY163iWMfhMkFXm6Mgjc",
  "key2": "3oSVaPS5HHYrdm1zfn9zMLJddXn5J37n117oTEdfennvDSfMYz5eCxMXrFMDgvsTmJvpgbiZhJWtHeTjLyVULtB5",
  "key3": "3Es4Vp8Knmm3jD9zYHrmLEXWrEeimGHnVL5ruv59NysgMSxYVuDEEac4xtwLEPkv2J1Le4cxcxtnzPvGKPaNDHXK",
  "key4": "3UX9Yjs9kH15PvBtsmUmdNvZTnFMEgxYgTovusSeRJsdpGALePUz1UVoNLGZ123CTV75cUSd3KcrFRQCJdPRyaJH",
  "key5": "2fNT8ysE5AL3tM2wjBhW7Go1gQcwVq33QF4xAqgBDg5P5eYePexksAxVagEs9BeCMefDZ3afp4U8ZQNez5uLbBvA",
  "key6": "4BowVTkGGSTeftrcTvk6VHudygr3hZmwCZkYsWNU9VigTJhvuxNPN4c2gtUQy7WuY1zJfUbcLTeq3xmSojdeYTL9",
  "key7": "5hBZtVSsozMfwMhM54vcQp11npLrUzBqVk5YauYY3Mi6aVmiJtPBLG8i5TsjCTJrjFauhCEwgoixsj9VSaovA3QX",
  "key8": "64g4agz6tvSgLzxFzxWekUshrftX2LXxwYKz54uG93APPRokksbL4mCRjKVQSrSZeZNKeK2sAbVYmjcbkpgih3xr",
  "key9": "355TC3ijug5x11xfguHYDcTkeejL8VTDB1nn3VoBobfhKtxwP5v93v5n8KjDqvYf55XNqTiDr6dvsyTCUu3ij19h",
  "key10": "3mQGL8noBTge3zwoCWGxFFLqhUS9GBtWRn3H6rDgRzj3H75MFJUsBbSi741Bwj52YuPjTWo87voAaSTo7xzok8FX",
  "key11": "4SVCRG28F7RhLb9UxEiek5nwmwGqkJXiaj4GdA8QoymhqSux1g8AqYGrByQC8sRKuU64Z3NjEQoKhzDeL5XNkbVL",
  "key12": "2VpLz3UzNccMcq4qaCe9dgwtgmWPcdWAJPksbp4a8CFSRLdvYShoudyvYpCnDVzdbaw4JPBigwiTPqAkdiEYGLs1",
  "key13": "4TciEMFK82HrG8RyKqeFs4EqFw939GzA7Z5Jbsx3dD35YjfrMkeAYnurUmoY5RqboKaYsH5LNxT6NjJ1o8q8Lya",
  "key14": "4LXMG6mN7LHLdZn8ksTiGnKmpmE3efit7ZSBGiSuYjhK7RjKU3BKN3uVunjUAUoDGm6rx8byjWkP4mBtnfQj78we",
  "key15": "4quq4LmntvYQ6KFkc1z3wwKN5Qh6UG6roPBhbmhUMfrvGpjb3Y5ouWgsaMpFPwE5MnTZcrQCR5aei54krcvytYwn",
  "key16": "4NRSNYkrNzRHhnPuGsRKaYUmEAwAqUQBjbsi4taXn9jYe8Mn8UHXMM9uteqdzi3SWmNwpVkY875HHiCNrPab5gJL",
  "key17": "5XhE91mwfVhQp9CCn52sVbKVXhdG3KKuGbQS5mLYLq7pS2K3tGpdFNDMQyW5xSNS3foK9hyebBbvRkR45qkKoPuv",
  "key18": "ZjFLnJv158d92a661KG3hwehBnCH3fVCrqqSFzFuUweZfc6vPtFXkzFEHG1cKoA4pj4UrxXeJEF1D1MNoapiV4j",
  "key19": "gSrRaABUXsiYRvdrjfLZzjQdt4rLT7NpjzPB7aCjZHEkCPt4z9ffA3ACig4tHFrGnS8KwV1LqkySZHVSkETEi3P",
  "key20": "5AkSppqmE7TwNSWfGo97DbyDPos2ea3YWy1kcRNNhfa6knoB63YrLSqvsh8gWjfy9XLKm2MVFZk4qzxPc9vjjSWB",
  "key21": "sCvENyd7fY8EwxjmKEqW4WdzSYsuJAdnTd2mssZj3wLR8ncFXjXveUH5Yp1gXNVG16kJM1pi9wvtiLnP9gzErFX",
  "key22": "44vroKuYwqex4nYRrhyQKDuyqRNDjEZu2MCX2dtPHRNDBs6C3tUfLJCWFzSPpfhu4UEX3Wk2ZhoEWn5CcbeS8MHm",
  "key23": "3DYGh5G6nvPudakKdWjjKeWZctvvjFRSLcSVCWVacHxxdVAeGh3dGgn7JwUpHBox5hubPY88W6UxFv4kG43USkPL",
  "key24": "4RuS9HuY6zzNrtGfN7CKtUCjnnVYz2zew3RmkLFPP4GysmRMmUVkHCq2mL6rSWi3vpekhvfu2tZW5ahjfy8baQEM",
  "key25": "3pCV8HrcZANJE985mEM2VmEgF4SwyfEC9CoTr923euvC6uWEfiBaia7e8jbt1b6aZyNr4gxbJ9WuNQosLdkuE9P9",
  "key26": "5TcB9qs7dJvbzkX7KdP59YVJHP3VNSdiHUfSPfJXdJdPYLvj7WGjEKdBRztojuc1MQLhsymgejDoYYZaYWRJ6yrk",
  "key27": "5w2NBMibF2KwTpzSdXMN9LqijWNGBw9EKk6K4b3ZaMVDC9WTJSHh87n4YPt7Nf5srBA1Cp8R1fbfEza4s6hiANnc",
  "key28": "44vWUVgSpiYgCBH2eJk34st1BpJhexHYPrqrazB3xTefvXGdB76hXWUE9vJG4C6jSFbi3YYLxpCPpCBPnapS36J1",
  "key29": "5HnjX1dKvSD89x8jbvwYjjBNCnUpFbq2ZixDbxaVDi2Xmfk7DBop54jS6821PTf7BV6qXtXhyGkoEDCpYwRJh9E3",
  "key30": "2ErdTZPWRBUFppJEhSDkuedpKpstvdnTWBgNSMcD1MkJAQ4FbXeNeKMyoayVKCaZqfDUm8SYbWY3pNmSrFK8UbX",
  "key31": "3ZSysdHK6bSN7pVXqfQUyDobs7MRqz8bwbfiG8PeDqTSMbf46MJX2E2mDQUttFahy4dWQvHitXH1nNwmAhNHAREJ",
  "key32": "4RmTSGoJpBmjqtXFWPBpxmXzFNMZsoARaURJzpyfhZ9mV1fFVNbinXFeSo2eTXtyr7Mqhsnh23o5zz9PR8t2ZwGE",
  "key33": "5ZFXQVBA9f89kaWSDnHeVvbTaB4LsK7vgzPWEo6LW46zJrWM1obs2L5SPwMCJVzw3uqb9B5EptLFL4dB9UdRKP3m",
  "key34": "4NTM4Dm1vt1yGVrwWQk4kDdQZJcrEezShpUhwqQXayC5UaPC6QUgCTXE7LfWPunNWbmouL6PZ436XP7boN6tMssH",
  "key35": "4FkzihoQywdzYypfgAUabSNZB3pwxRCYYHsc2bzTCTWUreHQLJwKhea8pcyfS3uWXQ2qWHwjjqE8uV9TNdyx4CGx"
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
