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
    "2dcyQgBgMx4LQx18UwBYBk1rkuMSBDxPpyymBDVhF9wCGPfxRUahzVagm7zK6kbhYr9rG3EwqTenib1Cu57iRzyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61M6HQ7AS9gdox4PkvhX6MTfQMuH2p31XqsR3PPJtJvDFX8JCiJgmsLnL8Yy93yYidJTSJLgRz3TQxtG7myEv1CX",
  "key1": "5uCntT4JmA4CsBZxe6mNWk15bDUKhuFtoN8Bf1Yyjx7xwQw8TYr7dPYwkeHL6S27c5xGJNkPXZ6mc87eKJfCoq2X",
  "key2": "54qeXcURdac2bfm7KLJKTBgtJLc3ZTB2eH2KfjULLhyDmDhWb2fZeV2tvJFjvUHqMgRttHi9dX7zkecYpvZFyMPQ",
  "key3": "3eLeCCcWxZ7UzQeiN6biP3dzVxxGCF2vkpL67Rf7yrLK1NsLruWfRwzyXcp5T3RjTXabUWio5W89D8hQMmzjsFN3",
  "key4": "3Yp9DMhyHWxauGqTm6JNWGSBfNL3pVSXjjYRS7zNKgEcLxV3Xf5u3TZFy3dPhxyyTc6zTB7FHSyuBTQdHF59GWr9",
  "key5": "jbhMDHducyAg5AEbpTT7DYAAZsCStPMkcvttqamfP5C5jooUosrBymu9Zq2jBaVtEU4kjjfdhG5eskzfu4gAbtM",
  "key6": "4bUwEqeK8JdpCxSHB7z9YjuVbsd2hChgujDQRP38wVQd9Zzvfx1K6YRT5Ge8eUg9Fjw5eEBwjaBThp52fEe36MH7",
  "key7": "4X2zSaGEGbF2GE8YMHUMZ4K4CRYnKNqeQuGkd9dkZ8oxZh6BjjpyzeEwKwr9j9DoLxky22GW4KwzrbwrPEvtn3bs",
  "key8": "QivHKwujHsQN6tvReu4Tm6M1RMHiWgSxG59y4WDTgamv1389zX8LHjRmB58VAduUmJGbf9erq45F6V2m2NbQhXW",
  "key9": "4BuDGQoxPhB1DaYg1icwBci7MSBSEVQh1hwTnEJNs6yxe9jyDmTXAETLARx9KVWyPSuvXgag5KgnTGWqAB5poMTq",
  "key10": "2FDX4UZRh85yD9yWy6CpX6zoJshgEc4TWpRCfyD8px5KbQf2FD2U9e3kr4zA8w1bUxQPgqM6hehoSEVioprwKZzq",
  "key11": "RTZh1Rs9noZLDg9KuFa4rc2xCSYfPWLgBDe9ibywWLnndLuvcekgQw6wwocQqhx2G5LotGcasivE5MCoSG3RupC",
  "key12": "rfnQANj9AcA2pyUeNfeZcfjerPEW9LroHFfTzxsgyVkhaEFwcgHTQyG788bkMRDsrjzMAoJefT4tBzqQfjKsZWz",
  "key13": "2Av5PnQv1J8J4SMg9kNJijoKTheAxtKDRkK56j8JZ6RfeCGwSrD5enGwrEHx4Ng1uh5Ma1d47vrZq3YKk4KjNmpH",
  "key14": "67Pjcq66mYL2yHU86gY9sLbEkpRnLnQtZwAxbTcstVahMvfAr5DsUwPSMWnHxAxkWBHpuWeYidQqcGLuxCrehyzu",
  "key15": "LCg5vJvSxcMPBUEe1t51GP4GUS2zaDNtiQNK23ncVwhVpfHhjPvQ7ugz6hcnVMPGMbi791G6MAy7Koo3hUqrTPh",
  "key16": "3ywMtNzpN9UE21mGSafBnpUg1EYvKWQcxW2gm3soMQHWDFXmeQV2p5jQnfQuFBiUVW7p6gwfjQiQw2aAad73nXQn",
  "key17": "w1L3FjfQTut4m8Rg72UBkhtHn9hzzgek6CRceSRn3x5uue4VUaaCBmGctoSPyXgMaSPFAqoHmccmBga2SgnNbNN",
  "key18": "2SZnVy3jEfFHhF5gPfzCqszQ7vSCmsjQ5hCiwjmDoD9b6Hes2nD9JC8TSCgSPHY4dnEHxUHDHYNxRUSZYaiyduQ4",
  "key19": "45rXdrfAuKz9NjuVSavMx2RdEUBBTP3mYkGMSWPY7gmL3UJ3QpM4755VYhAn9Yvk632Rz6vk7QChhUDuaPpHoHME",
  "key20": "5ai1nz4GwB6tWqoCLKmBKPGuBup6MeJQHc1GbGHtWL5c8bqLnXPMF291xdhnHcDEorFiA4JfVya3qeZsXE2PFKTi",
  "key21": "4CwJvQ532838DSFoAeUdjetxhm3gT5FSS6PafkdiMiKTVdiqGWCv2cEBbkZnckbFT8WUXFv3TSani3PGPzc6GU2w",
  "key22": "6Eexd6VBMejnxNTB1LLmHicPpny1EMWvVa2c6FP4q8MorJFVNRQy2LuZ6pamQ8dAb4Mz6KdDkh4tiM7usD6QScV",
  "key23": "4G2ZiaawtWWcfNGbFvCjNjXfyP7uuvYEUYhUSg4h1Z4Dwa2FJMT7Qxj8oEBtteY95KN9j8uN7SwVhxkCx38ibWka",
  "key24": "2UkiQiTapt2wkwggCqnHLpoRddTbVA7mLcMs2jDKo372Jpeizs79AUyC77ds4V3CwXkr5D73Lz9uNuY8hjD43nHn",
  "key25": "FPchrbFJmNNWyQ234416qnx6fvDaZPq7NjZT2fiC1BFpVeM5Vm2hzdPVxCbgAKVhAQutw7KYpG3n2AB6AP5B4vr",
  "key26": "2ngfMs5egu28FRv1PAaHeYQddrUiuvcNPjW6TM9Fk9fF3efYQA4F1zyshfCdUg23HTfX3LgvBSSmC7B4aFsQoYMS",
  "key27": "5andmL2prA7pDzc24pBYmvmJJbRH5x3dT6kLDqo6949L9SEBVdZVXNesSYptPqQL7eBtHEgQbWoqdJ8Xtc8rbnUx",
  "key28": "3b7KwQHcRmoZ3QY2fXmr6tCeN3J37AXwiSJ4gNJ3gRCnQ519h4VqqVspLYKseoDHvX872rEPCH3zKn2aNPt8jzFz"
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
