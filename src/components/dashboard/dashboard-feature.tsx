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
    "5zf8DfdFMb6M5eQVJj39M2YmNDrb1TgawKrRuKWPjM56t4i4WBMdUQCijMo6uYVi3XGGYbEEEBynLvaMqZGdDsVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcpTPLLiyBvWtrURK3f8BzELQYrXacz4iSAxTBdNYDEJEt5QDAreZK4ChLXqBfNMKFxgyQo3k8JRaJK3PEkjQGU",
  "key1": "4XpkNLbQ3XHkRiDD2kc3E5SnYdBWsXTbtv9rNgUh46x6PZ1zFaiUem2VVV1ghkcyYTGYr28PfVGRKzn94p6H2TVc",
  "key2": "2Vy5cCDekkVzvaDbg1FjCCTcr3iTX1EtTWgCjquMTNaWCXjfZdEBAFmPa9cAy4PE9v7fW68E7G28Wd9GbbBwcxNG",
  "key3": "3UxPiPjCTrgEpGQ1ajzzkXUwyivxAanU1nkdAFpHeS58h3G1qRokE5twT5JvcV9fBtxYqd1sjftCwEtR3paoDaSr",
  "key4": "kyYNqk8yvDGiGw8U98c91umnQCPNNnN2Gg2vRE7vhZdWQJKXtQ8YGa44q2GRbJQReqqsXRZom6Nte2RrHPePVbG",
  "key5": "3zB9Mg9UWRQ1ZCFmt1mbLeZrPUtTtrq37CEXZy2C1toLr1rSpxUKu2H5mDVk2P3f66FFrMvQwm5Hxn569DX2guKe",
  "key6": "4DmbV2bSNGZWtwi1MBnXWDRzomvn324pEP5zYoNM4SM2fjFxssL5z3QgYHrVoH65YeQeMdDgn7gGk3EjF5x3BrMu",
  "key7": "4nENreM4xCSj5JLr4AZ6he9gAKYY5fxhfnMiiFCLzpCK25PRRdvviJkUxHggvNEqvDsaTbtbtN2sdxoYgewZCqLd",
  "key8": "4h89Hg1TUt4z1sgsiLRr7VNRCPKBiDnFm718mHxozezWT6rhe7EmSXpcZJg5Syae8wzaogwTqZxbU55FVPn5GNkN",
  "key9": "2mho86njAkJF7QpY6bm8h8cjhpJruKhqj5tb36VMYaiwoq4PTugsAGDbuzREKqy8mC4K72mE5c9ddAZuTKVzua6B",
  "key10": "4JVGheEdjo2ac1YKdkJbVLMCmexPwbpAc9CNnf1mvjKUDpbJCFjeSR9EUSnvSSB4n19cJuw1B5GhXv27kqBSMCy5",
  "key11": "4hsk9LeLxxJgSztch89o58uCifyJxJoKT7M2Q4xXiJYoLC6G9Zs9HvyPMLB33gTg5ndBJKTxHNfCLfB535rSzc2n",
  "key12": "UohXcEUH81YMiFAabMcNKghPSEYM94e2oJCunV97wzfPu4uszJgpaJJQ5rLfNRtJfdK5Vcj4jzZvjawUboUbQux",
  "key13": "jpQXLFS2t6x9GEMKb8H9iuTdaCBH6USmxqgNfjWKn8f2FBUGSh3qLUeFDBWCcBxdg7WX7b5gSukMqPmb7qv5ogR",
  "key14": "2SA5kYWEwyWskrm4c6JZB26djp8mNbLTThHTc1YJ1p4XjtvzBQWEFb2ZD5tzEduci4LDEJqAAjcBf5bWBK1CDbwF",
  "key15": "q8h91yLPP531exqKASym2qSJp2KfszD4vRNuMjGsdiWKS9fJbYy7kM9BTM2prFHWfsNQ7fgzpfZKRCSwcP2dBCC",
  "key16": "2yMyG7e9A7Fgd82NCSfrhJ7qDSaT9A2TGMnpqGPT1t8yBUrskAYJFduxAXpiLZffGGxkLK32vJCH6X4G5SqNtQNe",
  "key17": "cnr3JgyQ1Qx5969NN2pwdjiDdRv7wsEVTtp7yLhF445hsivhmup6CAYaipPpftUyXqLCzBFQr1KTK7BQ3WsvHEu",
  "key18": "HqUW2n4Ku5cawxaauSDXG8bzxCv6c8nNYPFgG33TMygWcvCXUBWWev9198VrTcSzcFmnBXL4dsjr3GDD7mFxr1Z",
  "key19": "3D9w3DneBZKhS35TfCGC6NzVogygbyinX1rCtfHigrcrmtfjpqwVQaBqYPqaCAQbh4mjvD2FQYuNMXEYzxQfAbPQ",
  "key20": "5pADqwrbJft2hWoGKaNsmNgbrGPAVBdLmvixvdrvurvSb4TysZZyGEH6hx9wndmQqaMrc4yzs1UqmfWcvKA2XKVx",
  "key21": "58Qnz45VB2ZnWc8tpbcX75YojWg9Tj1zYechL1mbgxsrEKbjR2RqepYqpREpUVvGxcFvx432kBSZg4wrHMUNSJhD",
  "key22": "ck76VQwfzy7L3BEXCzPaKApbYqqwUqVZBspgfR1RN87wuw757WiwhcYJf3KTDbAVJe4MnjDQUtbP4AMgHh88qRm",
  "key23": "49D4ycEfcA2kVSSEZ6dDWKsuH9SpY8GWuKizXcnQdkzuse9AXvXFiCRCZFmsZZPA3Y52cmmMXyp2YtNomwZEE3mv",
  "key24": "3sR1LJxFfDYqCjAeAPRnqrMZmrgyrWw5R2gZx7vQXxBaadFAzKPYrEHCfkWh88aAZNdPQ9yZWqtFThiDQ1ZPBsq1",
  "key25": "5hFa42cqr5bLGo2JtPS8zAB9yZV21JyDt2BJ96V1W5YTJXUMbAWo1A3nF2dZWLkWaBLhe6JyqwzSmbTAJTBirDjv",
  "key26": "4o1Y64HTfQrSMkxJqPkpnwVPepLidT4ryPyzs4yDn5LWRiam7gszSDc2X2vDWPWZeF5KLZnV6cCHPWQoAVY6jH1V",
  "key27": "3k6iem6rrwSrEnGZwZjutfe1gNrvKyWTJLNiud3jBjAoYPnN6WbRCQopaG2mknZR4DH6tDAu2zGrsiSWY2SExTo",
  "key28": "4Z2MBE5asHCFXHLUMcxPrijLsCUegxwYWS1VcRZdGUiZZZBSLiJBZSdxfr74YbRMAawNiDJexanhxPgqh84kfY7M",
  "key29": "8USA2o9vStoqh4dfzN14V83Yi4A51qcBsasJjn41brxiwGXZ57wRXkZN9d6vD6riEigbHkFU7Y4DuYyBSJ5JyB9",
  "key30": "31E7ynkBNCWJcpeEhJFfrtaD2wDHMAU4baqP9789vktPtWsw7wmX7SLnnUv9FpJ7Uo1hQRJM6ZUr8hQ6vjKowWJm",
  "key31": "3QsPGaB7MceybLjvX3xFaJRRot4AdNL4tjMsH58hj5QXPf9AFLBQ8uNu6bmEVb1hx1sBmoya2yHGgtNzZKL7uG84",
  "key32": "4ZBMhsrH43Ne4uNRDXuSKahjNQHcKi9vCznJYRSG2NUoEuayGxx41VarX9aoniinBb3Bwyb4JDa42yo8k7ZSCXMx",
  "key33": "2EAfYY5PfK6DmhtGwzmuZDy8hZ9Vx2Fi8jhtZP6XNMDzyGL9FH2HAXWS1e39RwzWCtEXQV5QxFMSNKdr7977Gwix",
  "key34": "TPPaG2vTXBYaLvy2ubYm6o7geUtnkRrdMNcSjyFARHa9qiBa5WETwGVzEZ7m6gKarFt8SosJ6jDormnNzvthpgo",
  "key35": "2U12ekjy5tgYDUwLCzoyhy9D5E8Rs6LueimTBJW3AWBamdiA3mwxfnrwCTj7ra7XtFLUPVD4qq4ZoHLvVo9JMWQg",
  "key36": "bznN8tX9voyNJBcAHiKP9G9os9hwtx8y68yVVrWVpMy6BdoTS1LiVJ2BuAFrPJiTas4NwBYyi466uzQ6ohjcB9i",
  "key37": "5hRvBTco6zZfGJWX2LqwoPPnqkvAcemxRvc6fKTH2WnxSrFq3oEmLL5Mt7NxDoMPpSWj6Y6UDAPsmzDpNVKqu1GB",
  "key38": "2RkR4g2UPU26MS8hYkAWwVTQAjrf7vvNvFuVZivi8rSAnvSRFA7gaU5b1RkoXgXPsF4gyJQ5QTVfVZnhmkTMqkmZ",
  "key39": "4xZzALwv8wXjgiVEoMTRduj6FWTZr6eEvA7F4ugoNj54ejz3vvXUGFiMNmR57Hh5efgxbcTxkRJiHP8htcuy7bmx",
  "key40": "3TSvvXs63eAxrceCCsmD1gbmX3dnQJnaBZf7g8FmwtkdV3JdhXmJjyrcoaWnvsZgx9fbh7FygG8cddHegzQnSiiB"
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
