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
    "5DMXSSx72ZCbVa536WQUwSoTFkzU7btWZiVfg7WjX9gajaryf7dhKnjVxpoRrxZX8ZwCkYP1GeF1SyyarZHayDgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zFdVLh9crKPLkjz75RQ5Lyh7kuZKqTn3A4s66ijnmWxGQw6gkSu9uvaHxAKAjB8HW33PMSEcXzHsszJ8qNqMnV",
  "key1": "4TZZ5Ke2cLyvmVhGJNG3TWnfuWJtDzWmWXmP4Ysfa4oCTNRA9AWE24wvHEp2NMVajobbtvWcipsixBwzXC7im4MG",
  "key2": "3X4YuXqU3x218gRKGQHTQYNpc9gXrPxvCmwnY782kak6GSpb8A6WBKu2ZYpXRdWXCd9SJu85dL6tAr9XRE2j7AG1",
  "key3": "2S9NEmKnRGgComq6NcioGkbKEyYWwwUxccGrkbbfJ5skHq1Gaa5MwzJTpeJDBAFqTcDcwYWTdSMPLHr4imqmWZpj",
  "key4": "5hGVmNUzK1mdkg3Mn348WtBtZ4eDghcXLgdUXnQcN2ZP3fok8hML661XiDXvJ9fKE6ptwHkQCYyvtSMp2eMBGagV",
  "key5": "5NX442aFK3TU74kND2PuXRoqJJyfv2nc31WFJnYd7jx4isBGHyrgVtPUvbVUhzcwRNZH4SEQnVd28VCpi9JRgg6b",
  "key6": "5n4tmaS16TW6upVgYhiA2sELQBuhcnqMaD36ta8yVQZrcgQ4KjPYLgYySKVRkAyPTrFQZBcjZGJWBNZkAT19iXu1",
  "key7": "5xW5Bs2RePcynzDF6JKP35f16TSa3QQ6aG4rCr5vxABezukJft4pJ3sDz6cbs6LCRzKp7f2nSWmSUEswJvGhJANv",
  "key8": "2spysMjXQ27AGbyMkv9v7mnun68YF6Qb5kwzEEr1L2D2pkMozp3oCZob7KtkjCzuU8q6x1PrJjZeWcMHrz3hBqsA",
  "key9": "4T8NuQkg9tMRZTXqQTJ2no2RxrBLLU5CU9RhRWS3hbwuozBDXVCRZp9jahSLWYZPRMwM98D71zL9Vmtwym1mf3j2",
  "key10": "3WnubvVFGUXNcQ6Wb8DDNMQn47ctFm1cfQ964n8SwSkqfhJmoXaveoYJrg5Sc1sg8sNqHqbgQkw5Ro1JprFWuDKN",
  "key11": "5tejPbgYV5TMBe8Hi2tqm3pesWbJw47yjQAFfToSnCRY5AMXWJ1reTro456evqf75bQdTgahuRX6us2GVmdumFFB",
  "key12": "2mFMD377f5JbYDBrM5eHf9sUer1CaZ1XJf1XBKCKuKBDWqGCij8fVpA2Kzu3oRJt2VAcdCn45wxzBDtMAfiraLLo",
  "key13": "5svQQg8QFFmBowuGgQ9fZ47VqSYy3DDmzzBjqu4X3ddPogCaR2M6uFdv4E32W8jxpdWqGYZpwg7K5HF5tnzBsbAT",
  "key14": "2bkottpHmQtvQcwrwmrmhkVsMsjN1GW5vDtKMEtvfdptDjMLuD6DzrHx7cyEAtNzfzZo4Y8rhFFSKJ5CTYE6VhcQ",
  "key15": "37xSr8y9v27QbRzmz2q8yLV1tMdHBU5NWfELvvoDpvYiyia34UdcS4y1bpuAFjxKZUHLRhKU8Hg3LftoHkYxkc4F",
  "key16": "3tkz6bZrnaeuAnnXLacxVGcQHWQt7WKH5NfB4hb3Czkxuy7rhzHn9PxPrFHTuBeHwXgLD6Y29bZwPdAsKqFnUf2p",
  "key17": "5WLsDnBPFeWZdcWMr2UuovCDusds3KdY4DNJWzApDK4CesuHeCDpFENLGgZxjEsfdgeZTyF7sp82WMGxhyWw2HpT",
  "key18": "3CEiCodcgN7QN2E3rvZhxLkkHyS28GCh1QHm7SjMSSUvHJHYMipaAjq1M2osikZsRnGmperF9AuzPcPrMAgdZaEM",
  "key19": "3bAZYYuBY1HFcNhBJRbhX2HdJm1J4CndGE77idPQvp5cQ7UaSXeHjNSgkVfn1TrbNXoJhfAhiN3bLEaNCDy3yKFq",
  "key20": "5eMqtefq3bSFP2raNRQwKE9KxAhps9p6HEeEanVbdiSAAFWv85CT3kXCmu73fiR6H7yekEgM5XpE8fJehmYD3piV",
  "key21": "3PB3XELHhqsXirsUNEs1T7hvH6xLs8uNZtdBxsnUq9DQKXdC7LqvYT1knG5Nrv7SQEodznTswv8gnLUpsC4YjmwT",
  "key22": "5cX7qL2eLVkDPeDpuKkWHXG6KGoLDHcVe2aAaiPG8STp83tVfFNocXv2r8Bx7VuKfRhePfkSSji1bkaXAxAGnp46",
  "key23": "3UJfatvvHkVgWZqHewBm5MxhRocCVhyFoMCHdZuNWeyjw44LT1oezd3Es6RrTC6TPsXF2Nci2cLsr9iWkWzBdGNL",
  "key24": "4VbJbzBogoby5Hca13gdxxm5Z2eXVutdZHKq7SsTKu1NdxAykHpMSNchTSMLV7qkjWs4djw42efcQjrxNCwkpxaK",
  "key25": "4AEMmNSdyGh2KUPMHAXZRQr9n6HYcEVk4HeMXFzqEU76MNpevnMZP7QATGGB4SDQ261yrfhUjXNEoUSMkcNXFqYb",
  "key26": "46gumi83bXi3CiGXDtuFK7eF7tFAYNVvbsyFFFcra8cU3hohBoJ5XSFxkqEQcg61A59AKmuELRop9dXKt6gQSyM6",
  "key27": "p9G3CE66r3VvFZ42CrpEa33fnnygF5GoNSdh9Xq1B8TvvYv1hg4daf5Le8cfBCdgkbjSFbWeZN5D89Nnh1hPpVb",
  "key28": "Kgi4ytc4FDyGxPy74Z1qjrLdH692hBuLdhebNc1AVyzhnfZWMoDf8JieQPhbmmijj7Hp4daUCG1MEQaBdss8Spx",
  "key29": "5AHLrjv5EpychpBN6GMq6VHhQtLhdXgTUHWVog7YPoWhQoRt2gx9Kh8QMuFMpjViDEHevoUaG6GTTP6Kmjxn6sqv",
  "key30": "3ubrkzBNT9uxmQNXcz5U7wUcKNdGwLNHtF7Lkz9kk9aBBZsJqPyFzoaKYn2XXyULDZkhpr6c5n5a7K6eMHriJs6Y",
  "key31": "5yMCjFNLWJEUSFkyuHR9g7kH2aMMvTKyurVTzsdjSjynRdANWktU8f8pTPDZzugEPysNfqRMv2Ghorvubs2hwscx",
  "key32": "2HrbibiqX3c61hxqiwrE6ZTgWYmQBrfC5pZXnGiVEnYCza1vyvxZm8JCQ73yng2qtp1L4Uie7rvUbAmAxLgBLJLZ",
  "key33": "67gzeXjf2fPu2TwSgqq6Ki9cD2ReNPDeUj76ZDDBVwia1QyAKJaYEBzcKpzVqNRtuwiWVS3q5y9wBB6Q3CjMyEHw",
  "key34": "3DrU34FS1r9VA3ta2JpwmLneZihmDSCPJ3fC37JFtrK2DvZzgLLaH8SQJMTKDKFi1GTtY7GMwiMcpgLZjNauEHUD",
  "key35": "EkqhRii24NzCk84A4EzYrqn2EPRTAhEHLsexS2diwnMDY9c9w3TgCNJq6gzKpBaS4ffHgKoof7TE5w962XqJ6Ey"
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
