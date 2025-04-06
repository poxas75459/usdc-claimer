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
    "3A3GV3hjiBixjdzVTGiFoWEWVW3mJ3xmH6ScJCL8ch6niAiUzTYdgiH6xhCeampwrwx3oTY3yG2jPKA7o8vE6cCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6yJ2uD3V7iC74ySj5cGdiYsmyLUcn5YWrqJfw6EbPa83ukxYxvLDVzQ9TpiEE5jgefjtit5pCR6145njG74dyd",
  "key1": "EH1teC47qmvE2R75nPE6vrE3KwpTgfVPsJocTq8yhVdEH6dHnwUs4wmFTVHogdhgrRDURFikTswACgbwDo6QNra",
  "key2": "4x2ipZuivhZmH6F1c9Qr5jEjiRp87ctQLbNvzBzpNmDbMHNb4KA8x4SK5X5MWmYsEiUVNtE8hRZDdbViqnox6Jb6",
  "key3": "5STYCBcUpAeM8itUt2jMqC3nYttQNbmrL8KdE7TBStBxqjTf9wTujBFReeKW89kBUoRm2gzksMLpBGY5HiaAUbme",
  "key4": "hEdkL9KrS2M51DNQ6B2T2ocjgNvCerjwPuzMnRFCodesFzEBhXs3b6XroCsrFt7dqKiZ21mLSmfPuXAjUnYcNzs",
  "key5": "4Vh3D8qvnroZNsUpgxU5ddZ2hw7AgNv3E1fA9hg6sTwgGFqVQhZBKzSYt8qUG1gjbqfKFayoLLb2kJjFW2RNukQR",
  "key6": "4pKXSqitxfQ8dJAsPGFngwakgXWAZjtmFe4mz3UjodK5pn9vJ1tXtZE63NtHpUJd4ReRmiDYnppdWGjSAiRsxr81",
  "key7": "4DqGiBBN9APt2npVSJ9BNnKbS9wkH3KBMpwc1PYy1uDAGt84ryTxawzs71D3StzwHDdGUzKhM9y9BmFayfHGdbpe",
  "key8": "5d6YRmSjjQh7qYnY51dohNXQU9ZgyfS3euYW9oT7SqixzkNLcD8ztvoRkzVkgSf1N1hEGwzLyvimSdk4Gva75cnK",
  "key9": "iMgZvmJk8ixbYVohztQGhUGVzwp7A3PfQXoQZw76wfEzpS1LPF57FtoLcf9Kzew9fMamqY4QYZvz9uhDmopTZAi",
  "key10": "3ZT9C263X1AZWxraeyqh3YW57xJp7o44M3C1Fq7a6DRhBWtZbNBXpu44hLsNWaDMM4o4c9sqCENyn2m8AkUMVKDR",
  "key11": "33jJdb2kkw8SKGPuQKemASdSW2UpHRayrKtS9DXEmiVASNMmDRPGXuqNQPuGBA186wRdLmvaeSr2oZrAqQEJaq5E",
  "key12": "2U6DAmmgrSsFpHGdRL3kuvsLw8rLiZEVE7CpCqaKADL2cvLZZAgYpVzk6giqKXT8su5x62uSEQPVHhc7G94LUddj",
  "key13": "kcMZQ1eXRChqsoogSu1nEPaTbJuKdzf19ZHVKYQ9F3cNJPoS23PofTzV5aDdrLDwBXZynHGGJsSUxcUx28K8588",
  "key14": "5fd48rQTq3vEatYFxRHhg34FTWPSJMfH25YofbAUMawXaogTiG77v4Woo7dYGmmXPUfcwdSRihyKJi1Vw9tu9o8h",
  "key15": "4NmBm3zEfbff81aZSeoipb3Soc9CYhRm8FHmXA6XdTeipaVtph8FJkJe3RhW4DXSxDUL5HPdG8zrcQCrtxrFm7tV",
  "key16": "3kgZw76EfKXgzRnryPwN7k8Q3TdLor5HeG8ZAH6JuEMydWxRKJekGoM3rMt3PykuBKe462snf36q5EzuZi48U2cr",
  "key17": "2r7tDDohwhQyVKkQbsRZ9e3XKDDHNs1P5xAx7nZ8P2SBubdbLehMESXH22LbyWqs8i7pKFiuKdbzDbpuBhqtaUb9",
  "key18": "4YzyJgeKY2T9oyXu2xMSYUbsLeXf6YPkYnsuwNKPCeuycyDTGcZnUD6rnutV7XypB5RW4217DjCDrRZ8NGPy2GFR",
  "key19": "2Ffw882G1geL94dRWvbYRiT7rGPMFbdu2gM6uh2EK4JHaAr3gh5hRh52L1bvUk5mko6VvnmYL3qVYaHD2TrUSeh3",
  "key20": "4YXhVjfjgyiJnJ6w2WtiCPwNTPsTtMgDWbD5bt3q8gaDmVibFSbdCnAUbBXV7EvDkmoW69abVTmsaLg457e7yhLi",
  "key21": "45P9KWMdD3kGeGgLLaq3x7D7A1MmxrevMM4N4ri7BuxheTE2Hqm9tvmatX5qA3E4k3iFrMbao15FL5xBNejdfnQq",
  "key22": "PhBgpN32fqTt4tz68aWtFu5D8HCtLeBBpfmwNKY1i8GAc18CdveLCSMrhXhYNfcWU89vgQhxamsiBNcfZP9m771",
  "key23": "26intsHyaD4PLqhiUbTmCumXMsLRJTEDJmRKfnze4DJzv2nKKkp1N67vsGHqNZUrDVBNc5skjk33NiWDybgdJ1sp",
  "key24": "5zSsM52v6wDtbsBfDbeRpau1byUfZnk3XbE1qppGjTNiz6CW4RCHzf4ert5gb6hXUDDrsrqfkXjSKS7fyvTQYu3K",
  "key25": "34XDwUY88uU2Xeaw2cvHwJ8eHPy48GHZvXYFPrMPq9Qk3tqq2fuUYkajRAWFtX4RB7YCtXtCwLJNAxC3KgcCugu1"
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
