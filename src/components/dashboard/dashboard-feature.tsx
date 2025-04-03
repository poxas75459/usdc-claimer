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
    "z8nJyzMNFjjA9Qmaa2R56r6iUPErXLVUqrHvuUndHUJsEt8dfRieBD1JrGftTy8JdEmkbWxWwQDwoUtwzsGESyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sAxAu8ksn7bkwMkgrNk596nVm5E432EYn27HdGJsHRmbTYY8iyaAwX2snLZjgpJ5LFLnatVz9w74AEazLhTpZZM",
  "key1": "4pAtSPn5ZrpYh1cTfJRFPU7tTVPELHdsvxZBryJR7NU2CrXWtNx9emdNCN18SnqMSAey41AuqA5ifVbCMRW4Un8g",
  "key2": "4or8UVpb4GaWUZR9MaCkhCfRD9h4QaCVswLZWRfjCEGCrYqdd4Aqo5474kTYsUspjH2Csbc4CtAisT7Y2VYAApWN",
  "key3": "3gWb9NKrrtrSyrXvFjzVpp2tcXVzdtkJwY8bTcdoJTRS1Ngujzh6gebnv5hrsw8qL4y8xW8v8MmWh2ccfpbUoXP",
  "key4": "4ApQqECwtFXE97ftLFTfCzkBi1kTfoxF8rpqzrquiThnmd8uqxhf8qxeg3uZ42XCK5MNaANvZqpEcSFYKdQqxPhA",
  "key5": "5kdyaZHTTEqxBgvtkTim8USAmCPjiEhSssqa16jJUHpehTvMghWdDKYxjBX4RUyEoXxksyw8ZJ2hmQU7XoZm2SbN",
  "key6": "P6k4B6sknboN94HZHgz1BHE8yyJHbRwiKThWq4CuvfBAiNcgGCW74GNPKuu2a3ZkSDVSPzAVpeDRKqd4coqaqDT",
  "key7": "1AeV9UZDBsWsE9tTQeUN3ZxF4iNzRyhPHLo3xgNLKAxb8vYDd842kVkBhsAZJqHFsqJDsoF4uybKxtdVC1W9h5G",
  "key8": "2xaqoomkQyNW4FVsoKkoHqT6jfudYR2A1PhLTqgiRPoanTgEvk7AXSYqtTVs2zUECi1Gk83FencdQ4XZHiSMWD2Z",
  "key9": "4kBJ4H8nEpXroYj7mfQYKZwowWBkHSbYWZKi243HP9LLqm9Qapr7X7zsVbb6RKNv8mquRbXQw6sEV1CN5WsoFi9n",
  "key10": "5BGCYPhLUmqVWC3Bq28Cbp51adfLbrtz9tpEtmJrdUdyMNaiX5cr7qoK1QqjicTDhj8GSAGBX2smC3eKVHBBqFoV",
  "key11": "7vBBGgajcWa7yyr3MtHccNkrkRS2SABCgL84sr865UipEC8VFNqYerEFvAtGFGtvgtJYSCmbuijzdHrjg6pTqB5",
  "key12": "2kpSJpiw1hRDGRy7ctg65PVAcefSZFpVzkVKyZnfhVbGCxxAGz7a9h1Gjn5GtQdn2Fq9hC363PPYMRXHkuJmKPRH",
  "key13": "2m2412SNnAMBtfPb5X8vjQZ8mUno6BUwezkcGmpaa6XzKVB6SjmZMjJzEZ4C1Rgy58whRs3jNxAWQfrMTJ83hRG7",
  "key14": "3yNZ1xMCvckgoJmYtrRLymBVgHrNtKANeVQ5PyHqJwY1a6Fqx8m5psewdPUnDUMmMrC7xAA86zV3QFbsVT7utRRS",
  "key15": "3ntro2XQYjFLYQyyKUhCwwRC3Xgj73LLxqibsdVbXP3DTCQtntXdG7XgcNRuzQFpw6qEyMAKG6DVkMPJCc2XaAvP",
  "key16": "2e856TUYptnYgE24HZDaETg1cG5hfYH2g9XPs1GLa4aViw4bzoCDyCcy6pRbfjskzKuAg19n5rFL36EwfFvfLvQ7",
  "key17": "2Fjd47mRUpg69ipxJhB8sV99HendaKkobGkrvvFRN7WadybHgvCMD1t5pC5ydzAW5YhtunKnBkJxjqKkCAKcAqtz",
  "key18": "4XwBw4biyCGPkFLMc92e64PmMALkVQBMsZZovkgAeYGZjLBMeS8HCkkDkMjX7F67uUcJjhEu55RXmMG7AvuHjXRe",
  "key19": "3A8tjdogx2oJDaoCPCRuLz69qXH93F9HnuqyDMx63emJeRGb198CnAE21W4e5aouCevcG4sD5R25oTWhcJSMWr9S",
  "key20": "3tqhze8CxUb1en6gVoxR6tyhnyFKsr4gp7X6zzPYxLcuJvUyhkmQYjqjrNeVvgG79R9pChneBQQLeyMfg5RrLxF9",
  "key21": "3FDzxZdEykTu3uyVrXpKtgfYcMt49nSrXRz8vEchLzB74dL7YhWDVeHKJgYSLCNneyMcjnrDVwLHputgiVuzKQqV",
  "key22": "2BsCnq6zA3rRPkJb1pDzQDPNzaV7YtSMfVAstYUWYqPqHfmNsSPCT6AuzSmnYucB6UhanfgrADEYrZo7FvXipDTp",
  "key23": "4dhJ1jEiL2LxVmo3D4VF7bfjcMoHU3TeoEQ1wA4wxaAnTBwrS1xWQvcYDcbQMo6LY4xkM6swxtHMacBvKMaoZGcC",
  "key24": "4idSvcSNG8YPUYoepkiNeaaWW87xtEJbbBm8uoeUArGKi1mH8a9RhoAh1SVowrNzQB3Kt8W8Ggp7pdRvCuSynGdG",
  "key25": "2nf6Rw17J9mySnCMRH43UyKBqK3d1AbGuPKSJrTmx9jNJGchkCYL7Tc9GVPU62nbJL69B6k99wQMB73LrMBSZ5Cu",
  "key26": "27qpNL71uTGym6SpuwWyoANtsqGzGKVJyCXavoXtRYhnRjhSrdknyhPCAAu3TE5FWUqB3uTpcegoJgk4p4wH9WTa",
  "key27": "3Zr1HiYVRDGF8VM5NkxbAeBciNNo98wV7HueTfSERiMpFzeMZsaX1boa88mhqUTuUQtvSdoQxgNdt4aDwcUuJ9KV",
  "key28": "2Ex6BBX5VvJpN8BuXdT915a4xXph9q7QSHCwmrgSsc28ikTUZ8aoxKBji1h1MA2FZdRa8Q26XMozRpC5qdyzr5Js",
  "key29": "4qh7X8Gvk4TVQutPXawRNPQgJFHPW2gXBXkoSgrvFZFeMEAAmVtsm5ZEJaie5f7mduxvpbjxGMZXKBE6BW75TxYR",
  "key30": "5KbKQm7jG1YkntRxXRqSBi2QUUwuhiw8iWp55zdeWmKJHXN7Eh9kvovoyrYBYQ1jUg82NPj3JKDcc1dhhDH6ywaz",
  "key31": "5vw5C1paaq1vwNWK1buqbna2Pvk6tA9SmX1vWM9SPKaWW7S5TPhTJT533oHDUUZL43TRpqSXUSh2qUCjqy2BzAdK",
  "key32": "5Y8aGbGcFFNS81yySs6KSrbgvJi96GFXYyHVgeXx24q6mvDs239nNkTkxDC55Y4i6e83ZBKZ4GxFji4shZY8p221",
  "key33": "3c2pPrXXhJ6tUJC634dkVYfX2TF3aPuZ7BbnWE9qtNxfga7ggNWtGHGHacy4NQGP3mR3R5QPeXdpL5XxWUGTkwwc",
  "key34": "3b1j7Jt8W9rT7ZkEa17xDteD9C1f6UuvQXkqvH8VAHVuLnBuPqgF9aFDt16mo44rwos4V4Xnq84FqRhGRZtVmVQW",
  "key35": "2FKzWgbVe7jWAhTY3fW1d5XyEsj5pBaJsyE5Ldu23u7hiAZMPsuVupCMHg6zFzczW8S8Pm4ArgYkK6k6fwSYgjXw"
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
