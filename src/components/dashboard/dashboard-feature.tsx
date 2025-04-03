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
    "4AxfcQUHdPmkwWvmn2PmDTh92RepedKTdhBJLPVRYAR8gEJiY1DtSPmeg4rHeUgCNqNdxsvPXeUDAXa1UZMM7Lme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Zd5hz5gkCJMXgLC2PyT3NuvmDsVNFkvdfhoRavTMXohkU3s9vbAs3JuwPnEmxb9Gd3jANtkESmXPrJvV5pxCnQ",
  "key1": "5Qh9WREzbXVToqCALEsR8nJzJEiKJ13fKetZyBrtBhY6jC5tZyc5M9kSVkvMmZghk13pEyVJa9Tz5J5vaxUgjxcu",
  "key2": "sFZYXJiUFwcW2JuDEJd7Zh7KctpYWyH4G9V8nJEQ2FmVKxYAm9R3w1JURvUGJkn2kPzqsHiL7mtvmevU6Gf9tkB",
  "key3": "yNGphSCDAdQdWFTokhsGVZna5u2dk4DHq1r9ur6EJcfHz1VeAFkEA8UJLqLrkxPqcDc8wB7mVQ6mNXVAJcoVeAW",
  "key4": "2py3brJgBi8WMTFweQsVwYcQYMZ3PJoe97vFaFyrszY23DHmTUrGUNbWSV1bVsZCnxyQJjupttprzYsYQyFoqPwj",
  "key5": "32sNH9BGcka4M8auXjFmTkzXKRQdigivq8aPcnm39GNA2mEi8EmnVwALp7gftLPk16xZMFeimcxaX8it6X4vMagd",
  "key6": "dduTnpEjeHd4znvZ787mAtTWsr4CmvA91P11x3E36bd4zsgi6CvE92oNaQ5mrathEezidvfiEwaBkxHEq6RZNmL",
  "key7": "4SYSSK4JvGS8u6gui2i5NnZUdg5cHTXbrd3X1x5Wr5NFUBKWQmYDAzQaH6kgbLA8qWdEWdiZuL4Hpvqkf2yigyQb",
  "key8": "PNh2Cp173wvdPBT6F1XVKadNQP6LhM2rYUNacRaFeRnePsXBWQuLpz4jx3d59WZTNEpJsJWpxM4S45PWbA9MsFw",
  "key9": "pvAxWx9hnAt3EEgvhcwhmfRZyPCd8Q9QBGgkNJHTFkp2cTBm8q4oYQSes2ZnXK8WYf3smwQBpEmcwPdTojJVFNy",
  "key10": "2XXXkAEg8n3XwAQYLpDnp9oVnLeRsRQsBxwzXJpqkXbFcbTT4Em6Rb5vyQUJYxHnbnyb95eHPpMgU42WoZpbuQxu",
  "key11": "4Mhc12rWTXa9wgw6FEPMPCLBALxZDy6bXjoRFz8C1Uac5uyunS1zWQFJLvPYCVb5EMH4LWM97d2P1v8D8JqaMC16",
  "key12": "228n3wRuTMi6jURoL6xGbwR6jWDdRjgC6fkKZVRtPBzMRd2UTN6zco8TWFou2kNFmSEhC8VuNtuA4P9JmAAm2tcJ",
  "key13": "3jhpM6tUCZFVaaQki86GcdZSQW5QPYcU1rwVNP73HwftPE8wD1YrnmhEyKFXSCGTsBJPviWm1TqKttruEV9hkLJd",
  "key14": "3LtbShsjs7ewfFEMJ3FAEcfrBEEN7FUWhgitWBptM7gRWFRopNWhyydxqgGvAaAGLFey1md8dDGgfCKcGN51nWXb",
  "key15": "3W3aLdbk69QALqCZjZGQKVTG1cz8fiL2yHzzqRUPkpcPakL1iUQcockn6jPBWnEit5UeWiTcP9BebTENGKjPi859",
  "key16": "5zHpDSgMaKSwBdXZfDh5cAhYnkNVPoBDwkMVij6eVxjtWyUx4RRKBNoED8WA5mupyw4pDtv3vHpPyxDFx1roizHq",
  "key17": "23raj3jVUEhRB5QtkMyE9BzsZjaAva1SWNP2rMepzGD2zV59W4VA4vpK7MbPxiQMKzrPnC9niWFFiQJ4NPvcTC2x",
  "key18": "SNLxeSZjugg8TAuhNfof1gsLuSs8tKLdgjcYWcyBYRgD9WMK3xxwTf6R3HR7cj1HHeutFA8FL4MJiFhgs4sexja",
  "key19": "3YF1uzketrxjaQcMgrDbnuXYRaNryUgrLha43Gm3qjfshUMegZrqqcjhn365cJfhAf6WtBUAp2xVjvXut5kRNyYs",
  "key20": "4BWWhYx8SBgYV72Vbtw5te61vTf1GcdoriF3YLRS73LvEjfVhPbjAW9ek2TP7kz8VkwosWDgbkcc2xHvHPCVJpsd",
  "key21": "5SH3RiWXHWrqBaVntxrFft1qPhenHjejyPKyZV9HfYrGwVfGU5PZ69RRMcDnXwCBYoZvnhZReg2DfeaJWNY1Ep9L",
  "key22": "67W1PLjaLtuY861zsw3NZF1dEe1yxKcjyGz2oSVz3cyEVBJKNh32hdtEv42mcVXeLjsuxbv6bDun37XrdeTz2ABo",
  "key23": "2ocJEqvao12zupq2EvXcyMBKNprvkddDUPjJyHfRBULbGb4SYFDVjH36vtgjx2ZKdYPjmgoc2VGLqBiJWowTxqLD",
  "key24": "2eQkzWTpQsChPfBN55eW65kfHQHeFurbL9ND2N6W5We7yRoAnpSRqCBuqqDeDQBTX1frBhQifQqpCReDf3DaB1zd",
  "key25": "58z6dp2GG8pLb734touNiTikABb7vNQyf3kpjhwi4cTWFzi78UXZnd3xuGcSYBr4kNupRXHu6WjM8Gaz6NgcZHej",
  "key26": "58B7g4voJoD52oC5d8kfKEuaiGkJwef8kd8DXq1iwCz4MK3HfCSUg4MQRd7J2YQcQugTxypozTQjRjh3gfVg8Nm4",
  "key27": "FigrdWjWUmvBduYMjGvxpzda7yhfFuvjLpPdrHuV7FrQG2oWLxtRTyyCQQ8YUCe6RWDsXv3qS5KuDQFUckv6CEo",
  "key28": "5j2pfBJK7dBFKSrRmCU2afikMD58Sv6ubc1HjhwM57UowiyMAMFpCq3J3QUVRAensqe2oZ7DpZjVzuyKAV8yRurD",
  "key29": "36aeDG714XHz54qM9m6GSe3NXUmAbwUjnodFWtks4wfPZMfvDq9tsfrvMTwxuvhbmc1tj9VBPFvugBfvhEVZwUMP",
  "key30": "58Sx78QHG42zvkpSzYg51jjLSemRGF8LqkFDt58Q9whJcNSwUow15iWfowaAvb1nGHvLUmtphq3XYDW14HELVnZA",
  "key31": "vy2zKBpbf1TcpSeGuv7chhLSi4A1RYMHHLU46Vib7NMDnKK4g2FtVvGMSwozxZ9Sa5yzskVdWBgaKiBDN86XJHu",
  "key32": "61oPTTfLqdKJHBqkKwbpvMFyC1hA3AnsWrPQfvuXEwEGxrbiakEinQhxhySCuEEN24FCTB9rb2ECYoNTKiyDTwz6",
  "key33": "2JByFnZ1q1b9NgvsrRRvSgZat2ktM1CqZjkTwVduzSNpzTSqmrv5R3nKbC6u35gsNQPz5ATgYhzgZKp7qyLxhEh4",
  "key34": "3aR92mGPxws2UbA1kWXjmAXhQRr4QYmsRttCe3gxGw12WccVwfrGLDbS38iDdxAZBy9R8R8iJyBNmc8jExZ9ur3u",
  "key35": "3mPkKes78Z4ndcsBVgp5yiUsvw3xDCZSDTax6rZmmLEXEc9onoV1mwFQoMPGioYBHnNcmLw9qg6EPgFfpqkUgeXw",
  "key36": "21eGJ7xWAYY42BA6JJTYs6KVpnhLLYWGrbbVo2JMap33xJmVMkjCwQdgegRGzTXeAG4n3fnQN5w85mdj6KSFvuCR",
  "key37": "37W6WWhZhoencRgq4tpLQhnjXJH1Y6btqQrD6MrtmzBeFpKCNC3LvxqJV21MytQXFAgYML9Px3sf4jSZ85FQ5eHz",
  "key38": "cKgnWqvjjB1okmTbUbFZGBfYvdXK5Tk16UgBv4DXfqvLUJo1ZQPpyj7WFPK6QYJjxqnTCQhpZ9J4TApGHqMQqgc",
  "key39": "52Ki2nPgzd7YgWG7yf2zQ4pV9t3pPKWiNv4n7YCfYtNA8yZ5hyFX8JbGgfxgZ9Ka92DwqMrim3Nfy5KSTkgHrMi3"
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
