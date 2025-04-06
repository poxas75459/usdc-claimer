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
    "3tFdtS7hD6pSCVt7HCED527xfMnK3wzvc1sC2fPoMJ17QL2aXLMGQ3fqjZJtiqzM8dC5qpCkdtPcoJyzZ1SjZ9c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uqDkPaVL7xV4AhRSmYqBD5LuWxEHRxhNegZJ2F4ZvPNHYr3NHJpER8PmdfVtbh4KhdXRJqCfYkP9j4zMMzzSVAt",
  "key1": "4uURqUfdDJUveWfif4MrfkLiV9MgsurTmXFByCCLVtUxWA9uHKgv9ewD95zvLQvGqXcSZBFPNb1RoHzdXxM4Pj7S",
  "key2": "2zHNFeakUf7vYA9ztQe52wcFYZthNtjWM3ZbzzvzFnGPRizz8yjP1iKieHmDxrLG8hPKuCiaBut6PaWxgL3Err5N",
  "key3": "3783f4ZBDe1TRsuaNHrs2nzptZWokWyPyTMAXEK9KfUBkxduhJEBL8T1kZ17tgjgdfqugFoFDfww1nbbZZ4wSZ2p",
  "key4": "4yCmoHNSz7NXnZEs84W3NBQpDQDY1NSATdRSkUoUBD1pZGjbXADhHUGx33MCfVC594LYgaHvDUmT839eoGkfVvb1",
  "key5": "2uRvjQJaqF9pdWYLcNAGrP4iTCHgB6g517g5itp5UCXd2ew7ZgHmE3mP2F6nr6U1j8Gg6nRzSYw5YFE8Z1VwnZoR",
  "key6": "43kxsPvaNmgkWzsBqQaFtitNaPX3anpqpRqFyf1LMW3kRthHT4CCcGShVwPJr5DknL5WUYTutVanKSK4RbnHTtfx",
  "key7": "RSawpLErPwVJWTDEkaVQjriYjp86g4uZ3dTLUhv5gQsMXkeb3QQxiTRTw7agDa9J4C4j72nKT93pWATrjDU9kSW",
  "key8": "4h6vK48diN3abo6geb5uwsgEZ7xbHW7qnnnmy66wVo6AR8HMUGNWJki4dQwFco2XpEa1qGjzN3dtC4VKqAV4WbCD",
  "key9": "5Pbnv9mJzfJXvjSLdG9Cjs9pFCDu99PB2iXUQq2vAYxh89mBK1QTtQaZ27FG5kTNzs9UHVBxFs2vbVY2AAsbDEGA",
  "key10": "2dvKPCmXj7NnBWXDpkmabHxkDnxf85tsQGn1nHiMPUPZQoErY7ajimDfizVPTfTv6vJJmtmuLozi9AqdAgw5oLZK",
  "key11": "1rjYbj4NVK9ptrJ9mUbuFnrcaGJegqzX5UV4o2rWdyS8RczEJeHY627j5h4fGgc7SUNkvN5WkUztEH4iUSN8auY",
  "key12": "2Wq9Sm5WPMgKcXDPeraYismSWXYFWBJ9AeUa4KQ3XMWXh2CWVg1PGvajGeHjR8QJuyoAK98m7Qhd8uid9yX7CenK",
  "key13": "5w3iepTtSzRk8vKRfKm42VuqGx3z37oqK2LWnbmsmLUVkiQDWkmc2cJvhw4LJRF1zjmuXzxEP11FQvsbjXyX8v55",
  "key14": "3mT8tCsVZU1p4kRWNZmNTwRAikQz3M4k2G7hZp1ZJbzXYNH5a9a2BMQYQfdE7goePnozrMZ7oov1KQrQQAAHLmJ4",
  "key15": "2F6w2xwYH95XkPQCdRk1Mx4aCHypK2fQ4ragLAZnU3SEcP7TzbhCsis7AApWQohX4wDNBWDxKTFbU42M3KdtBTw3",
  "key16": "4VnRT3rvPUg1yjfqq1Phm3diBZPFXJaa5jV5dD6nq8iWWkEwJ3gGPCcZXAL8SGEeWwcqKrMzrwSzoqEkdGU2CqVm",
  "key17": "4tUtuEEaZAACjMX7sBhfyDQoBMeyfofQx373yA1CfmbpzJBXZ72PJeLPvabHXXMSyVVijWSQUD2SS1tXeYVXRvGx",
  "key18": "3G9XN3updmxp569RdrRvZhM3TzUuLByxwxgdRMHuw6fLpnatBEqoJts2jDBVKuMxFoCGvEpKDzeDjP5d746ivt4B",
  "key19": "pqf4ycHZDHoauDziqRRxRNzvoP7Wk5rpo9zYbPzWbRRiVXFtuM9AjJJ8cw51QQBv9X2Bu9JuMDeaAv2yj6hw584",
  "key20": "YGovvas5xKWjAw9Ytyp8fKu9NusgDd3bFKS5jBs5HDBR8ydASNr8Fo4pymWNFwWSQbRaUP9Pp5Ywv749auMVRzY",
  "key21": "4XwNFfe7iAJfTmXzAtKbZXN34sdX7RphbEWSBsEgosBheqW3qH8BtWcrj4qg1UrNBu4HADxMYpM15rbMsCqQZFB6",
  "key22": "5Q2finZZQU2WCCujBfeTY7B6QU8pZ6ruFzB1zTFmsR8uHuUSEmTQcAYuyabaLcyKP7uRSUpDuhRLh2v5eLtxNXYA",
  "key23": "574i19wwEgrqyqRMp7DheKjP9M7MkLm6yzx7FA3KxgsTCSZkcTgxBcM2hJGwsTxjuRGtGTbujHSnmCLTAKT17ov",
  "key24": "4aR13kALS5DSmUabxRVS4nz5WkYzDJFWtAfTovTMHamboSbdzqRZ2sc1QPZFGpoTB9suE2PnvJESMwkvxDF4k5xR",
  "key25": "4xLTARqdyGLGWFsFNMwd7LTmViX8dbdDWWJfGkvawaHDjcTUi6Mz8dKFMX63QtpshkjcdjTsBYssNVGV9BcEQh2N",
  "key26": "2VUWcD5iYrze9AQBHZMPmocwsBqFgGUtfymgeujvHGjhYhuNXCZ3f9Rj3B2JiY4gZi8QtYD6k3Jnm4EdiAQf1X5L",
  "key27": "5yHgsbga8LhsMcL8M2JEoowCivLkovK3P8w6K82nxzH9JCMDjMMV3yCgp3cj93HUQzuzw96egtjunbegmbVBhptK",
  "key28": "6XcuWmHjt3MhCdkg3TtGLZwr7X69bHjhtkEjzqareGXTxaJk2ahXcj7SyrnvVocGx8EFDrnYQpNmrP1jcz55C8x",
  "key29": "2BKJM2MntDzwDamTAWLu8AdgirhQ5beLmTmfhfvRr2gBSLZGC4PXE8imVbAWMuC5rLojCJ8fStbJhqZML7sbutEh",
  "key30": "4vZX2grYkpYBLcSyi658HABcjkFaHKXUYBvsnrvaYe9iAXJ95WNHQT9cbsB5vNaT1r2hWL1wyRnbvqKfhHkURNR8",
  "key31": "NwRSnL6JzeWZ8L8ajBxRtyPe3jghNXjWMeyEK7994YaH77owTfCoJ9tZbqU7niyqGRxeM6v3L38HcRTgrRyS4tS",
  "key32": "3ufXkTrMsJgUjcch6ihv1i2gkEUmGW3E5XY5Ta2pLZcY4BYr5W7DhJrMPz8dedVT2V8pvC3StYDDqZ314XNeAwY2",
  "key33": "3nBBRqhfoCsXthdEABq6wMnu75J3BHxTWeTnvFfPXHYe1AyW85MtTLLQ9D54BNvFaKs67tQJpCjo8mdSGsfxSh8E",
  "key34": "39818FcG2qgsutJ4xrVwZfTjzpqzShpM1tYj2iFA7kwiUNLeHnXXv9hQN9r8CWCYJ7nE8h3CXDP9ETPEiXho2gkb",
  "key35": "TGVPoLZM8YJ71S5XsPngZWv54igrsCCaTmZ7kVoKJhgv4VYSg3Na3vNgMazsv3yJEiWgsdCQdq9ewEAo9HYJ8k4",
  "key36": "2kFghj95qsdPezUxoqHy2m34p3fVS8kpDusA1NWXuiRfGi13Wr6Z1jhg2EYfJtzurwVrZkwwamGkExpxYxC4YFhV",
  "key37": "2HxWVrucud9n6YFy4EYVgftDuGDFo9U46HuTAjz7YCfSREUuaGRaqYui9PaLBELdyfdPsZ4zJu9A772NJGLYw7Ny",
  "key38": "FgcahqNToa9qTnJWUUkzxWpw5q8qrY3ZdMVEgweFE9ozLjUzxHxF8YygmH7KxehwbPMWBsQP1VBSaosrQvP7bJc"
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
