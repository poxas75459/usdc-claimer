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
    "51js24CQ7ADs3QJKUxaQfHDU6z5TcRTUrGobJ17HMbRuSPwwWEDXEHzW1K8UoW3wZqxqKUzsEZ5w839fGwpaj7Ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VVfs6p1d7UpmfV3j7ncKMSM4BnirwyepQVjUbWcQwkTqwVNMaeoxfeJH1trzEJcXGU1on2sjjfBpJM2MDcatfgb",
  "key1": "TqSL8cekKeAWXTfG2MULpQYV6ktxZ5hBSwTZL6t4KnAXJ4u6HxqEHSAi3rQw6oSLH4CCK8G1kA9vuTxVvLYKENN",
  "key2": "214473ZVYSXRH5hbws83XS3R43ZMaT92YPLnKoPzUmXhmTkEvT4MsnJ373jysZcwpe1N9a8pKgKbpcYv4xfyhkra",
  "key3": "5CagvqhWhGEgayHGgpisWjNXTqMEWQ8CeA6MsafGKfnmooaUJdbqB98gx2q9G3syBke2ACnHum6aD484yvCqEds8",
  "key4": "3NNagUspuaVH5xKFxDebnxh2nuHzfN9kNmc6gvXucuqjtsqwFKENRacXjMrj1YewQNdP3mptVTFoWFrU3umiauSQ",
  "key5": "35R6UfSPWrPJkMhrhg3hxPgJNZepF8cjhxQZt2oq4TbWYkkbw2g8CC2R6psZ7rjNLEQzToFSkVdsujsNMrMXoCMr",
  "key6": "2sjyrVpFZ41DytN5LuVMxLXN6TFRJjLLWNyfTMNU8tDsvr8ReYQvo5X6Z7YBk9BfBJz8ErJHE4hc4riFqj5W9RBg",
  "key7": "6RpfjQFxaQLkwMsbtrK7ZJpUHpnQCT85TvB7Sshwk3SHyyvDyv68hcQoa5RFxipbY6FA84kosGfewhiTfda7hKW",
  "key8": "2SU7bVoxF6xDitpUGcvw2J1HB7aLz15hRZrYbHfooy6UnaH5bnsJaXXs4gySapqcjFK7U3ACLx13t1Heug9HavyM",
  "key9": "2noseJkprJcqbC6AAyjwvFEoeL87vkxrHGvd1J4CtKkEBVqaaoWnPDxV9QNXeh6LokqvuXEWGX1q2mdtbfhet1Ue",
  "key10": "4bqyCjhcxbFzxNH7tj3FbuodrYU1L8pcmzesVcGX5iVNvWGE2R8kRKYFXm6HFysTxFk3Rap3DEapng2XgsYqhgfH",
  "key11": "3gD2AW4P4dfVFvJa5ZiA3UgFNqkaP2S6qUSB4a4aPzcwyLMU37qhmKMM1DyDx87AHRyJgUcgvjhvdbf38qPvagew",
  "key12": "26HQY1BioKHLTEjaQaZpeXsvspzj9QNjGyGpvurMDKTLqrr2UNdHNLX9RkRaThMftadv7ihENyaqsYz6PJYQhEN7",
  "key13": "2eUrDx8aVb1uu4JdbXF22sdLDazf81FtoATzxpePQ9tMbLjSAnrjMiafxgPAYXMA6sV6U9UATrpEvys4zQWZDi5G",
  "key14": "3KJGfjv2wrxnzHYYpTU5x92287SJs7C5nAXkRefWkWr8z8sdXym3tikr3ZhXJmeuEnj6BspiMP5Q6VbiSK2nAkfp",
  "key15": "5G9GSzKkxrrUc35JW2fQo7X6EfVA5rRQoefmr7KTNeXif8k2oKBwzUbatgRi2JxWrVkmcxZ7xBXt8idLbXJXJqP4",
  "key16": "2KVjnnd7WUGruMUfHqLFrJ3wLGbBT8ynyTfbjb4EpAxjcCYGavWrEoqY1uX1LpdwDdnGoFPRTJCKgtyN1FxrXQye",
  "key17": "2dkFtFHAYAL4wNPC45ed4Boak5AYMBM7D3q7MJMXy4pLE2Fkba5VRecB7KqbmyB6o8kWM9sRMfcqAq51WD4kgi8p",
  "key18": "jrq5vrftSwa3xMHGX2LytwVbZwDzVzTxH8SbPdppzGK8Ejns35Em434ae8brkjYEyN549jVy7yVDnnxRTVAEaFs",
  "key19": "uLKdtriHJQumqJ5ei5qAJLuEcpsrxZwg4SSkrBNpRUu8Nw1gRShCT6zFsRpGYnXxBxR5U78vmQ4M75s5bsfRSn6",
  "key20": "2o89sXtEFCExnWHcko2LALRLBzqMf4m81BNAb6GE8nmLNa5nSHbW4vsUDLN9Cs5tmHSRiTtENGMShJLBsvqYuxH",
  "key21": "4CVdfHPE1TjyXxxedQ1nzWRYzakGn4xJSRwXnaFc85L8D9xi9T49rYERUPDzLF5p4torboYqsN1cbreUzXz8rAvf",
  "key22": "5EBAFWK89KBfE3ZJvujuzspia8v33AGcuT56Q4ktkCbxXeMD5NFdvhCy5rQd4ppAAeCvPYxyLFKrHnjLznd7nJpC",
  "key23": "5g5c5cSVpMhsbPMEX3caAMx6v8V37xGrvpiqnQm76y61r6QUaBpGn9CGZySAGSTFZ6omuHan9gYasgFWXEJ9FcSc",
  "key24": "5UdCXEXXyf431K2GZEwHRqdFNuEKpXMHE1tvZi4QBMkkmW3TbcKNzSFZrRQTw1Xg7NLKuXyrQWFZi8wZdKN7vYPw",
  "key25": "5NfZgPxqKsfAFsKK8pQgJTt9yFzc4GMGbxJGXPS7D3yrQoGkmZRf6FvZFcXFHKjqxhSbfytX6DyTVE4Uxw6KnWW5",
  "key26": "4DFeuyTttNszgabmBycvspSYEUEqJagTT3ZorGjwkVtEC3yyniSYwAytViw7U3p92t2Lqoj3cwCFeJHFytR2oTqg",
  "key27": "eZVf6dngnEo7kfx768jVuvw1rhjnVWkryifmAVHvk7pvZDvJLfd3zibk6XxKsf6VHV6B7irqUCdaKeY1VNxauuh",
  "key28": "3y3kCRVd2GxnU289G9CzwHywQhjuZrhPAtu41GhDUTadQsqLkqe8UmaLx8EPEGEhnRh2crHFRPNVfCTeqTxA1MNP",
  "key29": "n26s8k6CvB14NnKXXaP28415RmVWuzyNUKRzygFR8iWBMzPBcKBUiXnritdY9K6jmZwUhdbRau61oEEwDa8Dgyy",
  "key30": "3PZFWpfDWLaiC2bucP6wCZax5ea224U4bPeJRcVB2V9rAwkGA34vbdxBMvui1qxhponzdHaKEW93MS8hBvRF9nA8",
  "key31": "f8BrUBBvReQazby1yowQggToSF4VVpHfHWCjVSejL5fUcxJ6sfFANvGbfg7g87hConhBQ9CAsgYRErXD3xtJQ98",
  "key32": "2a3ajG99B7yodnq3nanTbjXyGUmokEsynBXsff4ZQvAvurxn93Kt5i4s3nG1T4fHz8FhmoTAtJ4P2CRfw6KEmqGk",
  "key33": "oG5PgdGGHebbUMCBcJuBcYnm23WppBeN9VDHjrQEXJEQ2uVEMUWjp2R36wffDn3ZVh4S88UKd6ZZkYswNJGkSJq",
  "key34": "452ri1VaRjB89Vb8kCDyPqjo9Scg4Pw34VBNhZ1dYaaGz9CLKtrx9LWbVhKkD6Vy4wEv5T5wpLzsrkUTs4mvz2S6",
  "key35": "28mEJGxsqfjKKNWyCP3YVQ8MMCsi11Dqy4zPh5r4V39fJX25a8NBGXWbAjyYC6Kq4yBxozxaRcxqCk6uLhrXW7nS"
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
