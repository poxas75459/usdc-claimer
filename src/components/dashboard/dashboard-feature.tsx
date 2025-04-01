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
    "4NYn2Ei13EDxha4CWGtWegStUBoAfaLiB99cH5FUGuSLvhupZDZ85Ha91q8nCHLeyTQKUaWWAGwPLbjBkZJFA3cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3Y6pZveWKc6RC7sdgUGxGrjHyMbmdULPMXYmvbPABiw7nhCaHgWJ1D7hpVfR7dwZ7ScQLRotsGztKg1aKes8Vh",
  "key1": "5fbQzzmJFu5zgjX6QcM9xmQ38BtT8jCPHHT7pXiMXqzxFnbz7DvXuMfV8Zvbu1xSBQ3agN3bsuEjVnCD26FfMkU",
  "key2": "3oJ8D66DHhY9vxKJ4AGcS98U1ezf49EL6bizzYLBKMfZ5sa9CQtB9s4C1uNdWksSM1VEYbKADMpQFYzPEkXA8FMZ",
  "key3": "5bTvcZ97D7xecXKNcqWR4S8u1LW8LHEkhgbrYYQRdJyWdQffzQZbXGunbzGnPQiK6DEBfENMy4aLjfuFkEt4UQBc",
  "key4": "4WZxtW6pwi4dpf3s1mYsuNV3yXvpW9Gz8GRJ2u4fx9BXr3LHzLbGyBZuao1xPJtKsdFGuKkbge81qMu2cTSL9UBr",
  "key5": "3t3faCH9FgZodwTYiVcSbmjzcXjUA285wrpQ21QRvcY56GLMDmkq46X3fdbNn642LqZbuUw4sZG4XN2P29U9LuQY",
  "key6": "4t6vUiBxFTFJrpVoyKxNMEqRdw6oLsYeTQASSAH78cq4TEGiAv9D2hJrM2VpZVpc24ALDuwJy1usHib2dLn2tAFq",
  "key7": "31FuCLr3obzPuZQ4aY4YyjNk6GRemswvojTTUHct39NNss1awnHV82PTnmy49KsiqHvi9fML1Y9CUQkUHNdmoq5m",
  "key8": "4Uc9UdzerW5iicxyhhhkS3xNC9NwCaRPmURTT2nqudgCQoys9M7oFCoyTqoqz54jseQJaRhuf46M5DPnjmroCkLy",
  "key9": "2ZDkgrzpeXKgxkThDk7Rzv83b79vG1p6KK23Cf49D9ok7YupDTcye6fs4dj2pYo2y9937sWxgidLVMifFsxBkFGa",
  "key10": "67DuAJJTQoounez8snpkNqyhrAZgZaza7HknUWkUkqLEBbw6pjjK9PmmUCAgRgHAR82TPqYMmwT1LSXU7TUR2L14",
  "key11": "5bsKjgMY42UzgauuL1A5iTSzgSegDRGVoWA5iZY8oiqErKiJhURMbeiTZTyBQ7CqEaPmbu6jN2aZmqkr6SUqbaPj",
  "key12": "4LGHuvSAmLwvs6ch9XykHaiPMC3b2BoSwDrnzGd9ynmWfHSEXvUuCbAhAeZ3ExEM6j7o8R99M7zKfhvFWq21AGhA",
  "key13": "4StgTGwWnHQiPCdiHCAksGUWfgrDXRT578iDS3kAjP6LkaHniTZmsy1u8XZ2NCPMtpmjzGUL4uXDENbWxq2sP2dt",
  "key14": "dQJkv6z7btNxZfs4GFPfatbWfDW1vQPPtstbeSU76n2UPkRvHkqDzSjMWttCVmmUzWczKMPPPMXKbcFAbdtMUYd",
  "key15": "2ExczE2UkSjn3nK7mPfgh8Koy1DuPirnomYpfmBxK4atD5HTVAaVdnGsGnAegbWp1wHyNUNpPSqeG6S71yAFoSfx",
  "key16": "3DQPF34eV1zkFoJnkqCs9VnsZuQpesRqx9j1iQC86sQoiThZctUEDaE6MdKPvs1Q495y92PqLMZjuLrmjYENFxKt",
  "key17": "2YYuDvUFLsMX1x5GRXXvraMaNLufmMrvqhDVGUMdk5ph3rLfCdHGsc1omLaPzLowdZb8BTUUDzCk2s5xLpffeYNu",
  "key18": "5FtEh7TMwGdymyTH3qHZXqejkJvZcwrGfUoSVfPToKgJDECZ8qjdRZnfgjCvtg7shLhJ7LtBDpBNdan3ugi6gZdJ",
  "key19": "2PUWaUiMcV26RyVsCq6Y9VUyaHoR7cgcBbeoZ4GDnDg34yHe7Eniqn7ZTEiitAiAbb4dKFEjvV71P4DEZJUDhrAa",
  "key20": "4uAoabTMAxZcryYCefFdMY2Xvhv6ksZ7yost36A3C4cVHUDw23tFZW3xqsL7a4xxdvEnCsoRWUxSxooMWjMC3vtc",
  "key21": "2k7dMyiiEbDSt2xC65z4qDF3VuY4BgTJQgs3xixtsZQAJFnYqb6yjc4Xho6cLH5pYvsL8zJqRxrZ3bGUwX5UZAUf",
  "key22": "37SwMnxuER9kECREyrrp1cgZiGSnpnwANf3CxqASN1vWwx5scKjPaqoKGJGhimuvJvZACrCD4Wry7uwDGxqwzPqD",
  "key23": "UhWhUSaBNWzW3ELtfJqeQZj75fVFgii1KQdNVdsLc5XstrudNdaHSzSYridphqR27WmEVLR8F352XhngPNPgvfz",
  "key24": "37doZD31v2reR9U2qAWQVeFg1mLQGNhB62CrWP6VuNbJ3n6RSEBHmviHehCt7JAbMQcqiUW5mCvRA6BtVSgPeAoN",
  "key25": "38Z75WpDjUhpce3qYNhGKKtsyFtC6FsfydiXjZ6eKr5S2LXujtzCb4BaETuDai7n8SgqMSiGTEe8jDBX7aZ656mK",
  "key26": "4bfU7XSj1DksMfG1mbQ1RcUfUhH2LYC5LGTcK5uVm7qxW1pjtKx8sqiV2HcMPKJ4vup3Z2fCpoofNseTGhPdeHV9",
  "key27": "4Ezzt9q9eXAM1wVUSECcnxTYFdQTD64bbhHNz9WmxWaAEdTVwerwHAzQESGFg7bydEBZunMfjG3i8dB3ynGLSeb2",
  "key28": "WNyLLSDhpgFdDpuP3GrTgnUtGZMvTX7gKnvByCM6EDnAZ5SWsvzcDk2hhSjbXNStyqTQfrgEEbC5kcYm8ZLKFmU",
  "key29": "2tdJ7uN5m7v6bAbNPBvagzbzG3BNUtSCMBRipRuM31QmssHD2pqqaHZ2mej9Z1fejHxeBWQ3kKFWeCa1JXnhaqE2",
  "key30": "2EDkw1gegFyWkq7yiP2y7myG3Wv5sYbYBS5gVe7dTQsjtiuPXTQNXu1GEWvp284EnY25LZN3bMSdsfGtjvcqNqza",
  "key31": "55MRHiPunto4t4zoQDSS1A9MLSu8Xz6Ls8hemfi9tcJuvA3eFTKspZWy4kT3prxMiX7DML738PGZuocS93HnD6oH",
  "key32": "5P76x2vKZGr3pgsanrZG1qyzWkbKpdougMRgVawCZEFrYYgfvxzuHi8tSUwsCHXrVKWCDqWKgwnaoexGdtbVy9qp",
  "key33": "4DWHhsnXwiiuaKTdfZzYVgdiXcThsLyPnZVZcu1p8yw4HLsgHnnQR1UwFNRVoSs3phgPG36TDTvTVWAovi7iafLM",
  "key34": "4iMWhed1Ky5QawbazThhg4yM9bqnEdx4jHtv4mEiCDuCUAfw1YgkJZyzskVxzHo4Mah9BHkcUoAJfbiEnmnerrRU",
  "key35": "4dyABfb7rhtCwkUms5zf48xU5rgHak598X845u3UhZgCmDmUQhahkVHn77hW48nbdW35eQNzvv4FzJvFLoYwDoyy",
  "key36": "5BjGhdXoyxQzx296JmyeaLQpwk6mZNtMu29nfgaeUVasS7RMDyonaNTanajcrnkM14NdnFc7JFKR7hjmd64U19m9",
  "key37": "tebfM5xgMPQpUS5YFcCsgsRUGAJx12uQhiAwrTgUQ3VqT9hWA5JLZ3LzawCzC8cxsLRoXZ6vrDw2P5PeTDyTmTF",
  "key38": "2UXq6Wr3DHXtTxWs4meAAKysEn8hFAzTiCxMmHc6Jz6Pf4MEWQ8okyRbZDX5gJryVKMPc3ooKfnAcfuQiUaVr4Sg"
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
