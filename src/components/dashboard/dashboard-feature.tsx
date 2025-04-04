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
    "4niE1qpUwe9tUEeEypeemBfhEVS58Pwdt4qBTD3jXgKDGU4nhZ64HZKvHL5M2yM4Dc7MohuzEgSt3nSoe2HeQY7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vjea2ugexLPdtD53sM24YVWCLM1nfnGUoJTAbMPcBXuJjr6fvVgPxWkQjRrpCa92kTGHXhJ1x2DB3epyssLrVUX",
  "key1": "2pynihgcWTnuQ3LyhViPwPSNcRDq91MgV7DSEaUrkRqidRep6FpZa1Fo2dgZxWxBfW9vuzBnotuv4j1YsHAeubqZ",
  "key2": "3KjNhvToZxxL85xrNpJau52snM9FrY1g2s2ydjnJo6YXSjjVWmQMVu7TRyQNrAfPKSnoU3jstpynfo8S2ArSYzcx",
  "key3": "jo2SrXAz7Ugppd9kf23tCV4dRjCPyKnk6WeS6q36JdKaD1YLQyhuAud3pSnvE6vdUnCvdhjhN6YENVBFZgncJFD",
  "key4": "2cy65Wo7x8dgDoErWBnZ7AKDvZFiHuhnx3DKo8PzbPHu12o9pZiszZDbWvbPSkaZmLSWdrkNauo2Zaf8FazRNHZX",
  "key5": "4LTXbC3rW2weZEspo8U4Z5se48y8eQ6rWs5AMapFagcgeSipzj5cw7GKJGa481CabmdSxSVfCsMUiXS6TDF4Sc32",
  "key6": "3th3rrKfT5yYRf83hbZ3QhsJjqfCG2DGsVsTTTJBAsgyPC5u7daGL5YU7qVd6VeLksrXaBL4xeqxNkDVpjuX63dW",
  "key7": "2JpPrV53axwpYjF1U4cLQaZshn5SJQgjtyxjkrWqydeivbHtCjynSCcufansdpqG1VK5XnyMZvjXtsNiwVrrSwZS",
  "key8": "GkireXioMKYurwjsb9XVm48ZL4rfnvp81M673bjPXbn9tHfDR6Kvt3LiRZiXUuPKjCTX8LtPgUUMiGxZypWqykY",
  "key9": "64XonZ7fynr3zhqcsU3ZWAaXKPZLxWD25MQqK2uRkXPNSWiYKfpHNyW2BBzjWpSSKzVsPAHsNTuL6v4yeNmJWh7V",
  "key10": "3NS8PyiAgC997H8d4jwJDxcWgNsWLJ1G9fU9UDpDq9LcjXdgkyk1RDtnMqRh19ZmWLdkeCjhZu3g5kdTyqf5e14n",
  "key11": "3aQX122G5b5RcZPGn4jVP7hsMaXf7Lq5WQgodm1E1oNUemsEsdKsi4rjzPgB1gSsRL62CmpYcyuJYMZ2bhVXYqxc",
  "key12": "4vPbhiarNc3QUJ8jBvtLXPhcRDzoKVyFiwF7RpV8YQ6HGXSwqgCbvmx9GGdyKgRZUEAKnyKz372vVRDsZe7FQHu9",
  "key13": "5Fg7BCZUCrWKzFm6oM8iYptj3jqqLV5mVbRBvd4DjaL9em7fWTob3ppgcWHffBoUhTSDj2KV3xaUZWkonvkSPd3W",
  "key14": "5AcZzQmkP2jDGQ7BjyeaUHvGBwPXKcrqgVt8wTJpCUSjYbL1yigtfMRDiSkL4DJ7iQ7qLS4fEqxG52X24M41UitJ",
  "key15": "4ajvs4zpoXfsvhcULgChwGgV2dF2VUoW727TGifTyztNpabqXpfZQ2S12M7rQMkmwvDFx7wHuGP1xoc4CJ4SCbkq",
  "key16": "56v6ocZEDgEhpCGAFsHNgBKThHdykwi61Xq3okC7zeGLiXt3CSwzB28PbFoUTDToY5wmAyRLX73VwUNZoixDSef2",
  "key17": "5kKVihdDfqxKqRSYPUZ6Gd4KjmsxZ95KEdgHzdyEHXjV9jwtpzexPRbYSm7RBCzJ2KQY1CAUBD6aK5RXFqA1iMuf",
  "key18": "3wqqon2egjwLCKk8bsPTS3CtfMe8rntPLEaH3gvcvRRGiX4fdpsuz3v9hUUjSMRspgkWB5JcRKD2D83o2g9YUqzw",
  "key19": "4dsarKXKP9H9ufyEHFLGTCL9rNBonEByfUqKxRmzVcBVrvvbqGXwWih2J7XpvWeu9pEG1HpTgCcTaS2zxDqcMeWn",
  "key20": "vDvM4DMJ3XfbUmwBy5MsH4cH7C3CUvSGSBjXRNg1KXe38zJcosBByoSeXJmTc3AJCGg7p7vfwHNm8Qbc67ipceV",
  "key21": "5JcMKXZL7UvCSJQfusPmrwMvNqc2rrUxxPuU1Wc3hJq7XVsA24amdzuYTy2bLBUGUHC5QhD9ueHfVGwGr1d7XfGz",
  "key22": "z8J5B9vWHREwjLndE742Ly9vAMXUaWFuoy6QN4fHaxgQ1e15zXKdiUrUmb5KMGo9YR7fqZB1QL2GkR6va195kcT",
  "key23": "3ErnKEGmYeh44BRTCSLk5bxtVDKBsSrHJDM9iWvDrr7kuvF95aWcen1rv3EEyHUC5UmRsvYxHvkddjhaFAwRQiFz",
  "key24": "4tjA6y2n1T4MUGmtb94fqUN1riFcTS2gtMDHw7a6phhcwDriH1wi7AFM5qUoDZ1Q5DpFw9npvjft2j1FEg2Mq543",
  "key25": "5BzxJSLtpgcxkrj3bwrFnZfgrPv5ys33TmYBR4YWSEF3cxeDBJpfXX3qbH1u1fHwU3JQCpivX7tUcXFUXa2Uws1m",
  "key26": "fRCKVyauNUZZw2DNtxtkwX8TgLAtopaLeDVtx5Eih2idF767vx8Jy7yXndZNxcEf2cijbkXXej2oRAUquTcrxmQ",
  "key27": "4JnPDDHc8weBpSMxqF6atRTYzLL5jwxWEQsNndUWkCbskwd3DWYEShCj4uPF4Lfv5spNTrKnBhmcF1jMuQ6cAU4Q",
  "key28": "5xbbt1nYupTL7z9qZHoEH45x142xfKgsHYHEsrum38vjhmWHM8fYBJQbKo3ABT249dkhrUqoJW12xfbMP4yRhjBZ",
  "key29": "41Udmgv7geYWrvbfG81Eb7QZveSb2GhsU9YzJxjR5Cz3vXA7L8T7PRqXgpcEM7ytBGrh82Xs5tEZQ9g4NSf4jxyq",
  "key30": "2rXYqVU1DzL1aWjZoT4oR711bVFPoNfdymFTBPBnBmteFMydz4672eXZmeADydUpbnVQutsKEyP8TiBkEHo4Qvnw",
  "key31": "TWeJaVPPtjq7aoGUqZ1Vz4AWxyndRQNVbkBoMS6ri6VKwD6RV2TC3D5pzJVJYYtzmWMKmn9umAhqDoj2PYpBxCA",
  "key32": "NvFP9MbnxYAeQnGnPkphvwwbM6SwJgtCieX7C1zgseYmDTVVQ2CJCZL8UCn8pgP9CpBEfXXD8VrE5kUTJYsvK3f",
  "key33": "3HDN5XdehfjR56LfRrrVQG4cYqPpqAWk8WKeVppbTUTngTrthrDUoeMZ6NNzyCcTuuNzohebU4gxWdaYDNjpkCnA",
  "key34": "GagndwgiU32vLJoktVdGPsZ6cEkUiaADjFrXxYx9CfrQKXgTJrvUoaiF2QGd5YrGAM9eTPamYGB6ivxUH2wjeCN",
  "key35": "5b8awH1JdJ8p6mmivKGJzh8KkQjXbkzXyh7k4QkJ6qxrA5Bfo7amNb5Y2U2mqmcKNjcDo7LKdQbY8WQcnRsuHaYg",
  "key36": "ypwanjVRrjS5UAwGPL9MN74kUgveDEgK92RechEegmyoBqeU5wtrFDiMiV1wkhsj9nqJEYmGVBut1p9o5ZiWHsm",
  "key37": "Kwqf4LSxsaja2TFADfMao3yDTWXmxdgCA1dZydJqx4KSZMCnwss8bhtfdz68HQxr4jxEHNGVFimQcuAPAxRBRdV",
  "key38": "5y97NsiscE39zYuZe7fgqoqHpewy6i4QaER3GZ8o9wG4WppaAJmyVC4tr8MmuEWdRmp8rVNRxUkHusFEt3QrhLq8",
  "key39": "TEMMGpaQBEiCwUE66ZezLmqLtZQgLuq2CpMkspUQ1rRynF3ZqdeWixW36WjmQWtrMUkntSBjqqz6ub9Syf6ShW5"
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
