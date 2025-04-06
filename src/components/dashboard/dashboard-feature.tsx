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
    "4QcsJ29KxPdnz9XXqMt3bbjP3mAcv3QLDqaFBQUDKk4HZzCgqToSnveWsZ9zmWxrexbDGzvT6CCZrBLBuwDpGTMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNpcMpwQUbAGx54Xj8njvCj6QuRGmwhgLUuBihHGKkpYW8qrus7v6RuFu6JwnHJUMy2vxS33RmvNLgJZgWSmcv5",
  "key1": "2pV1PDtcVqpkbb6srBpjvJ2KeJfGmjdP2G2KkD1FgR96YD2dPRaUDMvXfWa9m9MdiFNphHBm5w4PQ7bx8wZdCVHz",
  "key2": "W4th2sG3ssBRWFTyLsSLXE11FuzfKMVngtXGehE9ZZTWC2sbx9MJHd9vCY6FYo2EjgmNGFVBn15g6dZuxiKDWH1",
  "key3": "2K29vu5Z3Z51Asox9D1pTB56kxaaN1vgtsX4ig8YsWWo2A4Bst81nRyUD7LEe8UXhPoxgiTRQd7hJtC5pX3rGVtf",
  "key4": "3cxnXUvg6m34wvju3ouFTckeXuJuW8fNBeiAWuuebYVGSHQVTPCp3smNZdNLizewoni5r64AKmbfH8whjzUD8DBc",
  "key5": "5zPip7QL4gHEXjQDyCnZEYUrBtot1X16DsAAEvtxpBuPXnhXZdPLg7xrAe5Rk9EWd2CoJ3ePDSzjWmBDgvxgYwBf",
  "key6": "5LsQn2MVXQWLWKf3DyBdfzpptX3Q29WPWNHomtkfUFza8hMVpesckQE4apt8yc6L1VfDAr9FKkb67GApSnc6fhrP",
  "key7": "sdugnvkLngLUdZm4AX7SvLn5BYEXhKZGmGJtM65i6NhLTNLReZWNye543gJzzTTmdPvRLECPRP9eRgcTnVcssVn",
  "key8": "Wvz6RjV8495CgTCLGuWfq7tKea76yYHmCSvFsUKsyYoYJ7vEi1VG6MtbkbUUWWDmTHA7HSUVkTuck3htDrTeDsk",
  "key9": "hV3qJ2uURmjp9b91gVwTwaACA3aRi4zGL3S6vWtCoz8AYeqVueFJFHth4YehTPh2pRzWGxDULfuJGnYVJwMTxQo",
  "key10": "248bdqjc41iZsoPy6EwsMAhdCBEKV1DNSNjj4roqop6B7CC2wXwkzci9CKnaBssaw5QAPxHutnASzJeqtPvAWeuT",
  "key11": "5mn6M14iP5EMEB42Cw4Ni6a3rXxrSPKjeVmG8y5VsG9bDY9nT8kyLLrDi9bsqrEjatDDFsKyRSGuL6rpUXBqTJi5",
  "key12": "sPYaRw7kgq1LawFcV83HNDkFHgDrQKX6sxRGtauRdR7UZbNTn43vKcr1qYGGepLT4ddF7UbgoewUmgj6mHXDPhD",
  "key13": "39zXCz7iGP54PRHatUog2HTPMHVsRfeN14pDDoNwP5dMA8TZwxY5qbh9ojY6wePrqhixbrjJcLEqukfggbXFj8zH",
  "key14": "5SHgqcxVxPnjyHZZXaEK3WHWCyM7dA3Z8x29n2T3krNkN1sW1PzKKca3wEm8PcQvdWi4uMqCXv8zjHyNiRyiVU2s",
  "key15": "3qhrykZoUVezcSYBichHSyt6k6DfvAa8AAgMZGv1yKnueZdJNedTuDLa82ZmcVYG2Re8NC8mAbeEG8Bw8dgkPf33",
  "key16": "315VwNpWgezfHUZ2t2HnvuT8P9oQcghWWLdbiupBQBuzSvmAj2eZMs33A5PYwtqfXKSa8ZixPqvqunccj4CGCu2M",
  "key17": "vLeTjXkSUx4WQ87dtvhyLtg755iphfgPyvEsT1wbd2D3vY5Eb1cBiaazsBZxNEXbVBqv4PKWhE9h3nzHjk4pHZf",
  "key18": "2bR3mbWbQx8msbpEL5Dgmgyqqm26RK4L5DieJZZjGeuqe3JA7xmVVixPjSHD2BkTyUb7HQkK82vB33kEG6FGetxt",
  "key19": "3x9jR2R8meW5jv5enDgmu51fhnhrU3yUrvKkauSbNPhJupcLP9aaVaYuGhU223zBMkb8ih5ad4PgBxAmefcVSTAv",
  "key20": "52GM1ceKVgebFFesK5iR9cJcr9cbYvxpXvTdp6FhtTfGa8EASKiy5RSyMnqWtbL4KrN8eQhffChJFPJRTFxsjsMG",
  "key21": "3vrjJ6AnMavwKExz6t7pFtva9U7gMyVzY8sQu3T64sg2P788SNFcJ3NV1j36PcvV1Na93bbig8pdFzafc3rGMR1S",
  "key22": "Hg3mtd66ASCjSx7ej5QtaeGCjfCycrkvLMDU2XbM3wFgxw6jm2yXsSpfSFsPcF6kNNP5ULSST8odFfBK1Q575zj",
  "key23": "4EoGd7qnJGYZsNEVJoi4d4BwFKeB9E3FUhK8SLR2fRnBSGkdXxQwbhB1jA71xgbwBVPshDwFVsKs9JSWFHrzEkBd",
  "key24": "4qFXCcgShLfs6PrTJBxEXGNrmHE25VagrkSrRxsp3wxfBvXnzXUZyyJLVaMMUq6fekA1FvZxkgyhsELbm7FMM8oD",
  "key25": "5WnqvQdFwPPHdQ6C8NxS3jQMdnJWnPUxzT6SuKgH6wk3Q1TJj79UB55adesxWN8n41SYUgFYCcDPPexxasqkdtSK",
  "key26": "2NVFFzSQLcBQYPgexT5SVVumSQGw4DDEJjwy7oQ2Pk1bnzNaVcT1vR7kpHTDjhXUyywGCHCZSZYD8gTGwuowseVc",
  "key27": "3yeEogwVrmoBVgsMJan1Rg9NEmBWzUZcP7bscA5vSzWnA2FBqL4WGNocmbb2vQ9Xr8swgfbSUa5f4kY5Hh8o8WRP",
  "key28": "iiZmt6esVhf9cREMoQLTJLSU2yEQbSSZPJM3c9Dinr8bPg2ACz1gbRCVmBbFtiaHztp6Rp5yjvxDpDdZwg1GWTc",
  "key29": "bcHERmdYvSiqWggKU5jp64RGYLX5yA3FvAyQ4ym4xv6Gcar5jZXVzzeum7AqzuDUc4kxoWJYDB8jYHR5qcdWCtf",
  "key30": "5rZuzjr7m9vQNHGjEcZtBHdSZPPxHqECNbm2uoyKt1CWoEzPQKjhhEbGxiZL9GwZheHsKVMQRrTDsoLNuE5esWZz",
  "key31": "cUkoMQtgS8scd2Y5rK7P33XTBuahPX8yrxreyfbEnMJ9gTC97sNZQTsFSfvzU1MDVMqsfWceZAF4LH5ThrK85FW",
  "key32": "2cvHH4E2rbYtriWsjfX4uuhAgNjQGDLpx4jfJ2GA7HDyEuvZ2m1YiFxzQQV8h4QSc6oj8qPJRcBdqtd1bxBCamcE",
  "key33": "5rqAnWVMSW2mAs4Xa1vRowk9PEUYdB48MRzngQTzGnZTuAEYcmZJrgbvrz52JaWrSGRAKmhBzuHcvx9tbj6frLgD",
  "key34": "kWFmnqFFoULLyeqBbauaUYvUfZgNSGszz6yDh6E3qfWgCm2hJgePp56Ztdv8gp916hVqEF4k6n89cZueQzkgree",
  "key35": "48caZM7v475m1CqTtZe2VUAk3JUBYbHVdRtw1V6kicervAP95zSXNssNP5gXQXp3e2UVKZvazZvAKXayrYPWqzxn",
  "key36": "5SHdhQmpn1YhfgVdrgzZwFfHxJ8HGriyEZB479Tfkr83ZCB8bQDFJqu7AXQiw5Uf3hkx9Rr7GJDth8EBmLF6nMFU",
  "key37": "4b2X8hfVeEVzgFTQkksywzQB1GUNac5ynsoPAkEWk4tpVQbiS1KqDUV1XAxjPzY8ZbyzrF2WBmRJnWAZUY34CFQj",
  "key38": "2iQwjHDknCv4sjErijP2T1hd46SAPjUtsGuu5QHzo6F9afGRbZG17W91RxbRXuGpGSvc1kwCUpD5nBzJN131ZD8Q",
  "key39": "3Nq71D4ATyL3XDzMhMTBSfMX3c9X1FGkUTayuo18CruXcrvyJdmLK36UP9AqFyumML9iW4Jn1kvBcMmSv2iiAuM8"
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
