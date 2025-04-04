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
    "4KgeLJVTb7m8NzoEJKnXG5FWUBkvGsnrg7TR9TJ9yAZAfK8hJkyL9gyZx1MpoHG18nnWKxgPbv4GLgAoBypT3hTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVhPyXDYP68ijsnNGjJBECASaTwAR7opeMdREuigUpSDaZY5NurVWLTvcrKcfJAkoy7LQW7urs1sjjwGfrEPj1G",
  "key1": "67UWaGMsSmdusdRXfJBWuQHW1ySNkMLvRU5CgvaXSwgbdwPrzm3whdyJoeMJnRtnaFEgMLUoUzTqjqi5QuDPv6kc",
  "key2": "2nB8vdZo7fEBf5R34XmcTNrR1MZXVD5FJXFdbVDQHRFYWsc2BQzQCmkGqJWFdpQAVcKEQuTTYc9NYc1mKSaCx9nB",
  "key3": "5RWbJgBphjkTEHSuEr8DK8RHpUx5sGVJpQnVrUe3yg8U4o3E2QjV7DwkdzyuYYTWNAgU7VZ3yuT8gZp8oPWwahdw",
  "key4": "47HJdf9BUFwNAJx1c2EeynGcMr6A4hdNfaNehaEt3mhbejoSNWSwMpGJuQk6gJUYvcstefH5xRrTamrYzP4L7cFS",
  "key5": "5qWPh3QEUTjRxyhTs4sXEMNDbiEVJtxHPVfcuW29CzDxodETckyN6wLWnZryMTz1yXHBFby9aAVrKU4meQJ3dg5q",
  "key6": "2etE6ZDD7L23T42NRqJakFSP8tYLe2L9jSVjZ6vmVPXoP9YP4Xks3KhrGcheCJPafbuCcWCd2RpCs5J8y6jF5tFn",
  "key7": "5cQhjbizaC1hKz4DjsZ26wibWNRRM5h7qD9RkWuhDSSci6uEVTvXGdYWysGA8nEzzLSASd7pAzjpSQJZFdW8Yzh1",
  "key8": "2fRFkpxZegqoCArbdC9iQxQAXynQxiFaT1Rc3dPY23XeP9MmXnHsw9eVcrTQCAbtupiogMNNtfeDc6BnEAcFRTRw",
  "key9": "4XhtUqdCs1Es5miJXre7x3X2MuZ2aoJmbrgwqkEd2pzwV5askhDF9mKmBcojyUDEC18Rm9aALAdA8oXDciypp4XJ",
  "key10": "YHegKRiiXZG67XgNQtx4A19ZesGEk6aQnnHKQ61br347J7thNri8rQuRh5in2QWCutfogxSczAAj44GBDbGjS68",
  "key11": "5sGJuzrcdwZh3QPW5KiLpwQHjWe3T5bw7mUp7orowCcSvQgcPdThv6zpM3YocFeSRnTHgCdDh8JLcxdQ1pDfF6vs",
  "key12": "cDXLHqwFZtF6BZ3oaKGKjQAV4J7mzLMWxhUtb6GKtK7g5ixbhZXABq4DkV7okMHdTAKoa3yUwRb5s67UQPV6VaT",
  "key13": "Ax7gJni12TpZRzisPDadRZd1b4s86Dktmxs2jXGPhG2BMDBVQ9TrQMgnZDz9LpfgdsYvHMGr1PcRULVsRxrrDuc",
  "key14": "4RozEsWRUsEz1MeXrJ9LiWdYb3WHYFc9QWKsXsky92EhkbbbcHfNSWERk7Prt66nZL5tHmtgpwa9Bspha39giU8D",
  "key15": "5DXBtaKJTT1jXCDzP1Uzd6BAXBv4BviGHG4ycnzDaqMPmYAosVAn4uPo2R5cZR8R4xrEE8ae6fqTHetKJX6JE8eY",
  "key16": "rTRskwLFghhjoMYvPzKBX7PBFY346Ckugqqac1k9q7L4B8uW2cuv7x75UJSiNy5HzYfCPJ13bEwwYMifdr1cbGA",
  "key17": "4dAtjtTxYkfwz2SP5ZSSVVoTZ8JpScAZkNSJejptj4bZqUj9r9VhFkgSBhJMdqNWevPYTkRE7FF51v1DNjQWCxyn",
  "key18": "CHUZs9jXqhp8kZbkDeNRhjGghJzPUyie8YRxLNGWrkKVbEntL9UbxMcVsf49R8F32ioGw3MJgNfcB9uHFh2PQLX",
  "key19": "56ZHnQiBXBe6a7kx2Nbqz1gehEbquM2QbN3nYEzAaAbKkEKYwxu3vXVqkPNpq4H1NZv1nQywNyNjySwxsg6iiWmP",
  "key20": "eSoLdedW6oTysPRP4sZ2A8NnrqhrySz3Su83BoUNKL2wAD33gwqAuZA3TsiXuAWh4GXtcq3vaF58kH5HmFCF7S2",
  "key21": "2hGnoSFUpJoMSK6YeCZ29sCtzaqzxj9aNJGTbKShnUTffLfv4o76ff8aXSCSe3H2fWJrG2oqVbauouCHKFYhET3F",
  "key22": "YqhAXrUTHWY3fTZhTvmK5m3FuyqqCengVLtfsybaVt4YrBPSKmkowvkzGmmeRoaUBDGUAgfybrh2La1eVYK2HxC",
  "key23": "573jqtNhL7RS7cRYCqoEeTnWh1tHJQTGamtcBpLgWSxWAkrrXegQgMkEY2x3FcVSWtHKz71V4BRLeQ6vFyQWGDay",
  "key24": "5NKG4yhiuhkPA1bsu9UR1RqAo1XFwitpYvLSD6Do3G2cMFAB2QJAvEprsqx4xvy2VtrHPre33JthKNpNreM1Njip",
  "key25": "3dQVg4pBwFLrgz2gxfwD5VUWkrP8mm3jhH6MdpV2yPcgL2TWy5JwPG5vZ7KcNteQnGt2QJJyprUk5TSw857GZnoY",
  "key26": "43gGNuRMJsgP8vAo6t9U7cLawAcNJkcJJsF4PswcGrNDoTev9pJSnoYSZiHHznFNu6YmVaf4MLJPTJcVTdmJCYrh",
  "key27": "4jKhCF1xWFwyH2mEZ6VgvNiMzZ2WEsoUHrd4BShPwNeunZwvzQp4pFBM7ibuikqY4CDbBXyKn1o9PbKyQrcUf1r1",
  "key28": "5g4VB1jEEehxSbB8EgdGujK1nwYhGa979x2aPyGS251xqTfNrC3dhqWERVKeKThw2bB11SJmqp3ha5ParcZhC2cp",
  "key29": "5Wr3wk4oS21vFB3vWCQ3kEHxn4t87ebps81iGM7WuN8CEUeRyTJvysUfSLX7znuAXmBEF729DX8J9GiNmTQ2zUqn",
  "key30": "2CWEXhikBnDCWjTyTPuEXVLa8fXeQyPuVHSuebKBk3A62wudkS4kPHvx3VPs1vKQRJkhcBUrG2bg1CSyqwmu8aFP",
  "key31": "4m6jcoMsXLwGQWAYJqGv5Fm7aG9WcBmwwdxpzwMYLaNZVnZBPeCaiTssqhCJ3uJ5DPC7QJr3jzJVuzSrJmt2BM4D",
  "key32": "3boatrATp3MnywBn98K2y4ft8BbRszohjcU8gT7ZxPDz87o7SowVongrZAJHakuoe6hC76jWgredLC3MoGV4eEKD",
  "key33": "qEBSVTTSTPR9ehoW759JE7q4ufLezqFAW2EMLXsxaUbgbGYWQAzNiHzdMg99bJ7wYmdGx3e6dN27fxvyVxNpysY",
  "key34": "qHKhjixWxXGQkxA3JGJ9pvTZ5tUd4qwh3YcYbjPoyjByeqJAjMk8EApYRLMdmj8hhrWsLTQJu7f3kyVLQZb6ttQ",
  "key35": "4Q58SZ7TWbkwRYcUTtUi8EBsDoCR8e77575S9vurpYsQi72PNMS4aoByp4wUjoY2WjdCNdP1dsAyDuWuZ78rDurz",
  "key36": "5WfzwghB4CyDmchX7NR523BBK7C3uNqwktE8D3b8EFk4wmjyhYEh2WCCSd9i1RjFKZY7YsiuMK4qFrLfKjR2rFcs",
  "key37": "b7yMn4PGt6Gs1jutpfvZuqSPHSaRMHj2ndHWYWzASmh1xS2C543dBQmAKJKUMEF19mkFbSmU1cuLwHZYbmFBg8B",
  "key38": "3ZnqUar5HV6t2vkQGdkbWaEBVPjNfoFcekpp9jKDXcBhFRGPMiijxAxnwhSsXZS6NoCFp99ge4acoKg8LcfdkY86"
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
