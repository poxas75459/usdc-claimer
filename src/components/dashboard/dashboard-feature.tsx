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
    "b2G98mLTmRk6J6CL9cmzToHfCpeju9d1Bu45kGWApxbtfUj2mau5YCdkFEQLZKNugYFx4C6Dszt2mR4LcFix7dT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mC9QVv3qKd7jRsfk5StR5hfpTyZoQoX1tAmUeFa8BCKpdr9syjv4QXmrivtwvsDKC9UazE5zNjA2PmVfKMzneMi",
  "key1": "5L99PZSBEktMu29jaDrGci4bFKUSP2MeuJeKzsWWmzsQiT8ATsqYmq42xV33CAd2zxRN7qHTjJaSAdvjgZq9c9yN",
  "key2": "3Rc6DYKHnjNjDUubiNty1Lre7UhagFxRe59HCejReDxcj3qyoqJNU5uRRRKTUsXGhyGeieMD2wu2sKJkcCnDRKFU",
  "key3": "2rxecA27jVRpB4jTEomJLjeDiuP3YjrdEqJ5QC4S5Cdb5kXJMNCkMgfDLic2atS2FhzDmqSKj89XcreNLCLU1MEy",
  "key4": "2TBVhZanVHDoDkJ6Gq8PyiZvjY9qzJXVanVxRQvxBCrg1SDZnAHjxYqb4ZTxzQmEXLrroTTkrKLPvjbwTEw9uQwB",
  "key5": "5fGkv4HcCsyL7fGGXMrQdmL2CcnQaRob2CQGsBGTASadPJuPj3PyfF45zag4CdZB6LuB4CfWPcVRDPFQSoCnHLiB",
  "key6": "2UUmtazP5sgeGpHfmXscS3Txjr2VMgjS9MFQvino3nuXwi2pvygrdsbfBgqnbMTR8j2GswPmP2B2GQPEQHwRSUCz",
  "key7": "5F8qbVWGBxykVb9ZLAcHzgzjLpLxQ3rCHz1sTVQ7RDMUp1F2R3mrgUxR7hYYB2APmu6UueTUTrjyYtASdsHb6HyU",
  "key8": "54EtxYsu4qmM3JgyEKhJLT5xLVvBLUrcbk7nJQrjBMGN9uu4E7he8RNApFYLJnjB1A5kGVFrGxavkvZx2DBSRVBW",
  "key9": "1tA3BaAkUN1hyN8jweuPUUvFQ15iPYdyiE5Y4tX4Bb5aQtdYz4SLxzj4N8AiYvWvPVLDv4iS1DTwtrajBxCPsvt",
  "key10": "ZFyAG3PeAeERBdsUjUUekQy8Lruptdw1B7M2fWtTZ42F5aeVPdW6N67QJ3et6y7XCeGBbBEynrRh4grYhR5hN95",
  "key11": "5zonvYq44rA5SUrs87Jid8VGUFKRhQfgrThcXoPUPLcupJD8gb8zZmJpmJp57o419aA5GzjZdA48R1L8m3VdRawi",
  "key12": "3oirjwVMDMvBNjZr4LERHH3qY18f8WgE9VqpBGx6Vb7Ev5debDaJFuyDHH8ryMbsPXrM8w2PSTUkngbmzfKKsy42",
  "key13": "32MWvEJQ8pSawC2jN95yE7UntKLtua1oBsxxD3aZAnH89JZx4GUySfz9rzcDDAs5Fd8N5ybh2eRxUqiQPCntKwgY",
  "key14": "2mQWWLeMFzSAgxMhFmdWzEUjAcfDvU3whHJuSRJLfyGvLdcVivHrMEY8HC89csa3dE6Hi5YmJHqP22i7xKwHAtoX",
  "key15": "2BswDhnF716bp1p3NtNzoEGuUbuooczsh7g3KXH3ygc6ZK9HLX3aCEi7hvYEf64rmtLo8MAqBaM9U9a8QbT34VxX",
  "key16": "3TAK6Zb1fVAno4SCoaF29XJNFTkLRDKsGo7oorw5BFWWF86Xgda3guKgoz2w9v1zu3ZF3eB5Td9gn1nsgNUhDRHD",
  "key17": "4J2kZ1bbr5u3wys29RmyDBa9vpWRZZE4RNxeFvJwFcx4riKw47yuuP1y6w2aYEwpE3v3VcGYnjdTuPevTDYLvYRw",
  "key18": "2G14kALHQUDoHFhGD1TBomgWwhwFh4M7wCNcPXVqFAUwUdgrHNgjFsfKBbiC1qxDBWmMR9tmQHLgRinaKdcLv5x8",
  "key19": "5TDVxUEzj3bfDLRr3jYt2PN3GiipULTBmEfzNEf233q1GVHPQGSg3386qucnywjZpho7MSTD5aVETupuZxcJgTcp",
  "key20": "5m9XScTGouMcTQNitpaT4zjgmYyA55CVn3srYXKgob5CCyKjXWPCBJ63gEDEtvYN8R7q7cfU6yxKmsDiJWKNcy7o",
  "key21": "3eVXQG3XJM1yNNDLd2p6A1PyjnAjNiJHWYy6ddWswZMajtuvdaQsSBLWqQp5R3Ts2wwJE5uf7BmkWYVfCi7VY5DE",
  "key22": "2jZZoHsBPzZBFmKLBynosYvHPVqLjyN5q7YmUFitSfxTzvvyzLR5NaYsf6uWt9eJsBPPSCfBDEfUYYb7apjJP8wx",
  "key23": "PtXA5T9Gw4pKenvtw91VfWZoCX6shkhwEaawXJ3hPHYbbhTCvYsETmGwKmMq8PqzK9b3uVPvcKDo1aT5B3dnngA",
  "key24": "588jtS9vb1pjra5pohbcHnNoTJUYbf35pm8BiaT3iwnwoMWDknUwvcg21wpgdCAvcYdJKutTHn2xGsjuxHFwx5RQ",
  "key25": "54dge4436rxb4Q1z1q1oBNy6bo16c1HpFr9nuFLBWHGLLeCUzJc8CW3uF2vdPTCqXcjowZFkukp5bLywLoeLY7Cq",
  "key26": "4DBWNWPjGBYeSe9h5iLwFxhmMXNZ1JvUgbmTmT8rhdkDP4kmUHJHCGkhX5JaPYeU65P7eLApGt9psAkC9hJZMH2X",
  "key27": "3w3HAnLatAKFoxw14MzeJYBs3pvGbngTaA8seA8np6bcG7vQ6c4HoWhKk8uAHbRjvKmPiwRdpCijTXkuPqJJV1yx",
  "key28": "3TqZ4TdbhEMAXM8emDhkiuZDGASqUxTmyXfLApz23i6fhooj2cQVmRcJQ9Y5RBmMnrjwhPY9CkubMX8Q2P3fTXRN",
  "key29": "CpqJUVeRxkk8yr2jpaWXfKbNiaA962nDsgbQN3wFjJtziicDqDRSNthi26zC74dvGUwJiSFe6SACE5bVhmSHHLJ",
  "key30": "5AMrzkzXgM2JKnpSMTKj36jnSsiPaBkXgPCrP1r7jYsSutsUtVKL5WaSjqk2SdDYf5eeu7zLqEmZUgVCDVkAXHoB",
  "key31": "2e2nAnJdK9b73sW3N2atoWZpnt4fo9qj7rt68QGwzXZ5vMB7XiSFhW24uSjYKgfEvy4NMQneHy94nfXwtyE4h46F",
  "key32": "4ej6enVKnfFNpfuRh5D1DPVqwzPGeraEaWmdiBGzqS99BejEZg18nTqtE2nYDYo9x8mrpzZFCmi1BHqMheFrYuV2"
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
