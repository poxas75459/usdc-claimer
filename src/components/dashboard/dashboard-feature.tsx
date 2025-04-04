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
    "2vAXwC5m3AYLmhL8yCqvRgsz2nt53C3tvFW8Gh2M7AUEXQAeDUBRV2NhcWi2oYP2HQYCbb6paSeR9WSmKxmvgQpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MG69YqhuCvabpGgYCyCQAmnhi4FecWR55ivkPqhSgoa9imdExh2fwmzjnzk6itEe5M38MpoFYD9hrZhL1GXpAZY",
  "key1": "4c5VeyHz2YbrzFL7AhRLtPqiHx39CzaBAYMCFnGw6p7qptKVF3XRRwbLFS5so2NSX1Hov36fjaHEuKf4PcV1Ytkz",
  "key2": "PergapJuYgta7TbmGSTUjuaqCtD4K41oQMtK6qKph1qSR1bKHujJn47591GNeAKNcSDvsJs7VGgardCugcfaaoZ",
  "key3": "3vJnCNrXxWo8XjxWRY12MD1vR2oyrvMjB68i43wzUEiEbax8pH5Xq4ohtfmTJex1r2QTK9tP3J5fd58PRaXRPWFJ",
  "key4": "5hmHDodZb7616rh1zecFVBxtUtgchZJLE1mp2Bc6z9ZUmhH7NSAgEXyRWUvfHD9HkFkX2YKVWy8mWvRocvY7zsRF",
  "key5": "3va1tmCb8Kbfc6GnqCf7VfLFTPADv2kgUJYx68YSJN9niPwLxmaU8EdZyVCX6523CjL6Z16zFwnikCSiLwqZRSuv",
  "key6": "4LEuHRAigkNp15a85qpXQ9EVx9SYa4XFNL1ekzDqY37UCnVcAZK5asrvRfUXv2duJTiWUQjgRSWJ8bDztHrNarL8",
  "key7": "2sHq2SzrRoZajByGPGo6kFhG63h1gvLQrGtPBdQrEEbJhmHPxUy8uf29X38ZMqcbwgkRK1mkbjSnC47QcnFXtjP1",
  "key8": "4PGCbDDAfvqvZsQreBGCLsiWmdohC2ykXvLbV4ESaxiYpHrmRqLnpoJhyF58kbVxxNuaEYH7WohwyCwaiBTF5cDE",
  "key9": "5RKqd64fUKD4Jz6Cz47PC9yMQiYvDFSHPiRVWpLsmKworkmkKihtuviYWCkABj2mmopw6kvJEjnbCDPv2WnUe6JE",
  "key10": "5oRSJR81o1vth2jfwbiiCuARj1NpRQVpkxs8vp4DHqrhfGBZgxXb6Z1VPxiDTegek5yH94UdJ84VeqxGUanB8yt4",
  "key11": "2e9v5F5zjrinU57BTy87sdrUeS1QPEvEKaNj6uKwMtp7AG8BNc6NfP62w1FLLg1M1dgA12rK8MgAtkiTt3jvtz6f",
  "key12": "4bgSshmiQB2hyfwZALHsDxgR5mMCRoMahgzEPZvVCeEg8nBwM1MLU45C9ZF8uXoJgexW1UqXf6FwPPzDZsrvNVyv",
  "key13": "czykfe6xNzYRBfoPrwUu8CkrskATtPC92RCvqYXLczbwKLdbmHKaYWvjWZN9r7E2efaptz4UYRYYv8aPuYiBc1E",
  "key14": "3BFyPerayhDYMAh87DakWqbToi2MR3qfoioPTrDTd26bRfzD3hHDTWhc6Kcaqpf9rg3vuQ1sFyDP7xkZx7qHH5pE",
  "key15": "H78AZN2UgHrUmWPrE6gaFgz6BDHabxfAL7GPoTQAY5BY922Q2SVvyEZhwZHzLw4WSzHRrx9eYEUHNtaHHSHJzZa",
  "key16": "kjMcCcaEqqhqaj13FkYdW8iS8Cg2WFdWvdtDwkQqZD6GYeM82jg52NthXPrc8RUWaCdswo7HAzi91Nqbr2LUE8K",
  "key17": "S6rgG7kqVqtaouEACgMSJpFh6wXMf8VGi8ipS3NCfQE7ouCVnxSrKjN8rMHLBxPYG4H55kRxp2PGnS5h9nKymVa",
  "key18": "rL7GeVovAGrKPJgiRPaZ6dwMrKkfkK4jZQ6m132LvffmVUWB7p11vuiAhcQbDYqe9acdDThiY723FSTobcrSfHz",
  "key19": "2XwMd6zwVsfcaoWoWDNWiH1CHbjS9keQJk61XwcgUwSDYqc25T9SRurHfoxV9a3R9r7YspWUiaRABJkiBwYNWStM",
  "key20": "eaem1RPSJp1P5P9944fKqETZd7tCQUYuL1kmLpa9tpAHiR4iSAZk1mDQVGcnyyQH7JSps3ZzfxQ3Fnt5ZtzvzaU",
  "key21": "6dMMFxCzFZARA1AaL3wmtQh7Y25ebLpAWUEmoxwdpetJDGTjoSpGm927ftRuC8g7zfWJTD8QxmtzKeBYW9FPnxd",
  "key22": "3vHHcXLXpcempF98zc8o4sSf2JcPspdVxBdnmGyq3SAazqChbpUU9DonugMimCbY76kQGUKqD6MCRpSPDNr2YScr",
  "key23": "2e6vpjZVpiX4RZiEdz3TtDec6sAjcSAYr3ozSB2uZSYq7QrzwpmWfHm12FVMCKFt4XYq66VgX3K1PDRv32cSVVew",
  "key24": "cgChxK6Q446YQ76swuoGHNKNyfpTAV48jVGN1gPSrTN96sVMfw1XwYFUYvxnXxyUnGWqati81vnvNLmWgJCi6tX",
  "key25": "24vsPcYihvpeQGavZo4vJDhYyYruP1C4nfh86hD3Fmsbc3bnUrRXV2EKbETYasVtC8YYqqVmCzYZRtk12PAgYgcM",
  "key26": "3rhwtZyz4VWXpzMGLARvwvf4R7otJbdg8Ffdb99wH5pnTRQ5wU7t6g4QJoaGU7zo3JostUVs1p7LY8R1NhTF57U4",
  "key27": "5Xgxr1uPufMVXsZYehtt2S2NU521XcxVxEuWxHL8ZeuY7ARMvx7pQof3TgZnCJSpvTphev3RsbGhipHrrwiB1fC6",
  "key28": "Yd8ZrUSGWwTDnwA6L5Kpa4oD2xPb26jEut9fc7brudC8QbE2j9qJE1brFR38wPHdJ3JqQ9WKKai19SPRREaGvDR",
  "key29": "23BZKijyKCBSNfiBoUbxivy985KZgMddx99AKxzEYVKNjs8i9tpM6ckKfAeEGm9mkq8DTebEFTvJoHGwhWLXepxu",
  "key30": "yjoBP7sLJvxFEGQ2znPpKUWsnBKqGKjthtaEsRtLD9i29rxE4bAsBwJG2SiibxeiQVEt2okHs1D7E1UZeryLGpg"
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
