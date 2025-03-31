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
    "Cs4ppQDnnws36mxgPbePUMdEnamKk7MuTHPAF1fcLi6pqnTyqw1K79b9fQLRBzq9Atcj59no96ivDiRFQ8N1kxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHveVUKoXftVcbotRzqScKg3J2ubsBNYxo3fhGujTFEFijNWMu8afJf67nfPL5KTTjnNA9r7BescadsDC1L7hkW",
  "key1": "fxwEBEPasDcPv17iT9qEhBFQL2TdSiSvfb697vv9FJaKDtq5UQgxdvLJy7UNVDZMMG99rpf5FCt6A4j2H8qCveB",
  "key2": "3EKct3kAuQYnVbiBHXY3T8CkfxfnCH3t2a77gSmVnu4qopbfnmg7SZr1DWhNM3FZVZJnJvKNXvbhCp3dqqcY2BsG",
  "key3": "FuqxZKPysb6kEZr1jM9FyX1kP1txTChHAofDmc8H8mcBncWY2U5grFq6sZrDj7P4xVWtYqzx5G78A2yvrfxhee3",
  "key4": "hv7zcGzoCMLGXGJn1AcxKZcBg9rJsE7tZHpCZv3qzhHiSSXzWinSrqdtvAiHUdQhZnuvw1jnMJAVUppiVGMmFJi",
  "key5": "uMyRdmzDXaUPu2TBGXU7n1iASx6GD3Mv3LPUDHDq1WeRX7aTtvvXrnLrdbuZdBv7bdeDiauB5Sb68DRU7GyEmxF",
  "key6": "C2Z45fM4p5btZdNYuHXqxFCDZMoW3KUAzkQLK7789mxHSeGy7tr9XQZH49A2uaQ1zwaJ1ngFV7i5MnookxgQV6m",
  "key7": "4yPCg9qH7RzHp3Qw9nmwa2Nt9opYF3WrKeCoHRJ6wKKPZSDcwDcjPPeuBiJBm48hCGfdUMewcoPrUgyJ59tUhqxE",
  "key8": "J88kPei4cdgbjrxYk8guDVykUj3znuNDyEQxUxS21ccJ6BJ4F1K8BXLCTtQomtEYxWEhHaPfjjH3LbVFoh3Lzdg",
  "key9": "2f7bubkE31d7EoTcVDJzXMnwoYvKKaChRmuTk6dNhpQPoQfWb1h579oBkqoMYsdegLkq4wWZABi66hCZLqfa7DGS",
  "key10": "3J5QumHuXGYaH6YML8XHHFfyD6gjDLPyCCEXioUs2rc5qW6agp1wP9hYb6iQ8UBX38VdAvnde3Hxr5GLYCfFa4Js",
  "key11": "4HcZ57wP5DEXHMFCePA6WdkcVXFVgUfdjargZotp8wmLhzeAaSCEiTfnAmyqXc2UT1jLTcnbn8EAKYJJ1ueNmx7A",
  "key12": "5yYFwGkDCy9unVNrh4pbMmdNWVxRNJFVKMrjcWUUykSEK4YGTZJL6t5yRshafWWL9dx6ZEB1Dkp1QkzxhuP6KZkT",
  "key13": "5PV2TU9QAST246o1fhCn6XRk2F7GE4tYsYQwzCuxokDRpRDchrrciWAmKv5Z3bh8gnR7ayci3R6Ypj25VRQ4HiUe",
  "key14": "2sKB26hXNmtHBTMTF9Dv7RA52s4yyU8KuC8g81u64QFAPo4xxcHq5pHAKggfQYsWojZEfFGasgio9yvGSmvtDmLV",
  "key15": "2vkKAcHG4JzZrt3ZLVyUzEUSxtKMeWmooaMS64sdFz4r7uTr4jYVeBqHC497zRdRwTqy2V7sYEbzRiWbBJMwyNVS",
  "key16": "3VcsrF4fCYwoRHespAnGtGJVo1ywXDk8gFLKr6eqcysFDu19Pr4SuZgCwnhPH3sjWny7rnqQNwwS2K7Bwin2a1jX",
  "key17": "4Zpd4Nu3A2mPKWAkDVSS8h1iJwSNgtLymAtkuUXwdxaKaTggTdaD1fN7Dm91UV9T8PupWhf3UBAoV3HdUZvtr4CT",
  "key18": "K4EUjQpxNNHkYJ2rLwhj3sJyb5em5oF8dwK29oAFZobcQjMPWBm5TxiV3j9DAHL9B1su42ghyGmak6jLKrHmNmu",
  "key19": "5RVo2yS2LKAFa6yVdEmyyfcbcLAK9kwH7wnuZQ552z2u1bcgSAN4Hdro57NUbLWXwSxECQjttEJYuNk5KAokfauQ",
  "key20": "3TrAWpZXEuenT1vYg1j52U2L7z1CaxG895GbE8pDR35Ab54AJzWgsptpgzmn9vB6w17ixCSUdA4L7VjuceyDge9f",
  "key21": "28NSjZGqyRvTtndQbUH2c8FWUdoUvThN7Tuoo3PRudPWwc1S8pfFoBVCqFAFMKRM2VDNXD3Qz3aFzYMyCULSQFL2",
  "key22": "28KaHHXDACpswyv9NGCDs8NQRMLHAMG2yJE1orSWTd7BrU2NP8XDeQp3YYbq3bS5USb2xy1z3r7uE1cNegE8hhKZ",
  "key23": "5ui9hfXZqHwUyFo9wMDzgNhF8hkPQT5iW533F2xApbHm2yzkPtCmZdDDdLj9RiJAdebaiGaed2n2uAkij6LLxrGz",
  "key24": "KNBA97ZgsZVE6isfNknbHcbJqUqPiQa47PhnFdBAjhoyCzRq6bAdAwzyExr75HszeBHedavgHmuMNCi5NgA6LVs",
  "key25": "2QVeLSR5R1ooPef8U63T3LVK8JhD2RRHoE8cYqTErANseXhZh6zUgaKWSTFpJhAMJtU88ZTA5ck81abhXPefdHME",
  "key26": "4ydHoy8yB9HnYQnkmPqFiRJDZzLKWnW7xeyG2TbQMZpBBE7Du2PW29eJrUqRmqCW4A3tni3zAe3EMBjo2r2mgbdF",
  "key27": "5d4LNRCAT3gUkiTgAap3o7ppnLHApiUwkSU4Hkex3HQWURqDKfbxvznxsw6WaCoGkV6wDXdjdrfuyrjA8VhGRAwU",
  "key28": "4MXtqFDfPaE82gz8VUtkhxjEcVEKVU9M1ikYiQX9hdn3WSvLv7piLKXm2jsGpPqHBwFLKNf7Js4Q6Vszd3xR5cST",
  "key29": "2AuENjCYBnPuPsC4nHKjTB9dxZVv1XfnouJpc7Xcjvmx7HsL72fVJRoiap1ZKB3nxB61Zy3mzhwLuTk8gRnDRhAC",
  "key30": "3Zsb2bM2CwLUoydRdDHcUwspiZ1yW59rpiCCwvUC4fehdRBoWfDo3BJd4B8uHYFkZtGZnzH3cwujWfTMaBWeQGpH",
  "key31": "5GkTP2cxM5n48KUV6sxtVdxTjG2fxBZjXdAmzQuw7H7Prqp3ksUwhsvEQwMbwYAmo8jSMENmZt4jwKH6LRyeepE3",
  "key32": "u1CfPmVUrjyYoxXJsQRevMSuxF3r7niLhYmYd3qwzqsVXwnVKYrsVdKzVQoUMfBq7Vazrp3ecPzYmiN4msUdqp1",
  "key33": "9RwBV4uB6yBbqXX3YJfury91boeAfxJoRwBcdvL3RCANqJ1xrcNU2NwombDR6jG3QvvK5dkfcu21Z8kUgSVk1ht",
  "key34": "4GKVsBHryvsyVBd37WeiFN23tHukNU6ZF731K4577obkq1oETkWYXRXn9niceLzkWyHcbYfC234NhEtBP1PRVEXi"
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
