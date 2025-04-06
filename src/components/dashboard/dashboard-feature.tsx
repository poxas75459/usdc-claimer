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
    "3spmyRUYWZrzCTPyt6aoVjm2jPL9BECpVy1hp89n9ZYxvVqSMwhCbgcACU3RVx8yFn8YrU1cfCmdxnX1zXfvkrRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hePPHHi3gymVfHmUZN7QC67yhYd8FTCwePeVABgHPxyJgCwwAQ7v7akRQArf1fyj8Fu4yLDQkZ2FVe5XYzZYZj4",
  "key1": "LAnuw7eSXNCvqWDajg4TdGiJZHLgpH2jo6ziMhayAe58Rv9shHEGHxWHDpdwfnKoKwyuvecPYJA2b11CsbnSBK3",
  "key2": "336a9LCk1yeyqifHHG3XqqwNKir6LzCJCSDGCa4i82d51c9mvUyrfdD2ZTkZopzCK8zEpzemBCqGneoHEVggizM2",
  "key3": "3CascfXJJEK1t36H2yxcdgCtYPEEje1oAXXTSSRddwPFr4RoyRXNPY8rPuoszg6PPaCJc4FvzL1oFpuxqo61w3Sy",
  "key4": "3NM48LJwZzhiVA8V5K6MEqSuga5zTdsxd1mEr29JuVe2NZr6iBvsRr26Gs9qvBS9wvEneD7Y46hgqdLpF8Vj48HY",
  "key5": "5fF162kPUs5NaNco3V8XXPsyF4caPDC76emFSLeYMzZPqNK7Se7uHqLaXwUqcCA6sadCEg7C92LCAgooZ8fVtH7e",
  "key6": "2My9pxdjFMJRyCmHG2GYyEXeMYK8o4cBZGZTVkgaCgqskB3F3f4xoha3PpKEMHpAXRibJKZp9F9kTMp8Q4fG7o5u",
  "key7": "38nCaYj9EtinHexZqAkDgfGWhTDPAz5wTPxfiJh6gmAhvJmoh5MDzwdBu1qzScRcidiUNB8DMKkfXPkJUfSwD9Ng",
  "key8": "7zccsbcSux5gVSazArGQ3KtGK8LhATsHStqeyKDwySB4nC1ghd5Geh4H8mxEv7y5w4qwELHZwPJDn5XwxsnG7gZ",
  "key9": "4LeqppRjnRWZ1FXH84RrHngBe8z1MbS1cMk6L9ez6vH2xTesdf7BBuUpX1tDcib4E4T6qUoq3Y646Y9wkGpJzxq8",
  "key10": "2ur33S7EN2qTAoGhpanrPow3AbD3kVJVCMi9p8emGbDH3EuNJSH8auPR27LX6PE8j3ah2zioKg3X9XUPiWAMCMyz",
  "key11": "3hLHZqQMbRf8wpiNWM96bADFtMPJDYNkYerpMscurRjyaKpG5a5wB581MdHqNBUhh8jV3rgkgA3tKfE5tSF2Doec",
  "key12": "PXxek6Sw9HArXBfpn2FEqnJiJFBh8hEjodHSaUBwL3KrMYawEZ5nikGH3GcBwbbQ8cugrrFsTeQcn6n8urW4LBU",
  "key13": "U9Q7CdKcWxKDNnSD3RdT3gzMMTiwxtKcyFsy2aaYoCZNXQEGwdVhZkSiiifmQReB3nzY7pzRzSH8cxtrvXd1Qjq",
  "key14": "4Hu7n5XqtnqER7jd9e3EKZn2xjr26H3TrhtpFyYPBcuJYb1dtwEHJzmZCmfVJbadtPQjxWQopwsVoDLGbdWczxfZ",
  "key15": "38yjTWz9wZjGPkgZw1kiqZjRED739pggvRdZCA8VP2Ku6APa1yFeLxo2XAvXXrjnPy13JhfPzAy7i4F4yR3SNZah",
  "key16": "BW4pgv4rj9hTxhFEJjV4duPtC91wTGnbJ8YSNkzAVYnHBqWqUKZ7quEVV3GMWSrtwcKS63PDE2RNKEW5MjZCPZo",
  "key17": "ahWpW5Lj4xmiWPm2nFPo2H2NFaDCVdxSWNCcnGTd3vof12jcFiCtD6eDz4cR9dwqBmGSEXotjHEmPysybp8m4vn",
  "key18": "5g5hZkoBiuDMqzCzSfDRkYu4puuRE72NPsHoJoiXKBgzCkX4bwLbQeCc1UnYZsJ3S77dEQ8776wdJZ2aFqzgs9en",
  "key19": "5hp4hi4h1fzykircUn9118MEfXfcsTqU45MEqZKwTCm1hg2K8ZiWtWn8WrYM4svWdodvNw7kjsBx6dsdf7dT1bMy",
  "key20": "5s13JMqo8HdX6jAiDQTMu6n8vEdYgCzzehzayHnkRuZ1bQpWp4KNNSMkWTZkLHrdum1JSBsLevbVa6h2czaht6nU",
  "key21": "Nfn15mPmtyTWjDchZwXTeX1Kn7ttHicHc1poe6CUrueNQGAoXSjAAJNo9Rrnei4JRSFUsVmxsznC9SsHZQqdzhg",
  "key22": "3vcbuHb9wSEk7dqRHB2qck8fWKk9EknU71BNJpDs1Qugnzefc1Fkbmg2EFeFPupndvMSdC2YGYtGLoPE4vFaDpcJ",
  "key23": "3akiZD9rLjsL5VsEySeZdWiF3okBnrHWiPCRgGFDQAao3cEzbxaoQy8ShQTz6ZLMVkC8ZGe8heUEFfzUyt7Xgah1",
  "key24": "5fB4nasxW62NrCxzmAAHB784V4KoErXKFzW2tfg9nxBRiJXqMwk49Y82PbLvtMuxKUKJx7cxo3BkeEdpEYfDKEtH",
  "key25": "zJNBoCoJZ8vCvPYGBH1Pn8NpDn7tS4MihBykDYihzDSduwdjTmCrerg2xrBibrg8f97KjUWTUGT8QJmvvwes2Ws",
  "key26": "nLYRZZhFK7D5axgQ4CyDWsXemvaQnB5i5WB32UPgR8jrT7d4N3daUEQFemYKjzES1aGmh2EHvDHS3VHUFdrsQJ9",
  "key27": "25vb1tvMHVL6rAdkdMGZHWRCbuiuiA3cw8Z8nnWQznAbEP8vmzAfgAYWrFNhw62hjNpsnuC3JbATZu1ZPUojtQbp",
  "key28": "5FJu7DcKmghir3dCXGCA2mX4zF6rhdDkwgNFctMwT69DwykCujQxJrsQG3TSRcjCjDtL9KpuDHbq6FwdjDkM1FrD",
  "key29": "2QSDmKoD9a71QdeGtb9p5YWFwrFNHwtncXNEqNiVZn3C66UkDAnrnYCdFnNL43nhU6Zk3JwdModfUctHVcy1GYNN"
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
