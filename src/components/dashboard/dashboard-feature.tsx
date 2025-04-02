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
    "FoaMMiu3q7suwtDUMBUyNwVV5op22STxw5GzZvEKH9hbRKdijPzhuULkjDPQ7qUuYvMLhPbHGrxY8kDr4Y3Znjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8wJiHAFJCkJakD2ATNk3VzLM8QoV9d3gf2j8yC8D8zMG42zF22FAcpUHa6RuNeZXjgqZaq9CwG25XFYrtfkSAV",
  "key1": "3S6ZwrWudYTZXUJyed67ZSuqzggk1q5PmbV8b54JSdzCYyYiRUMwnV5raRDsLobtz2d63fZRrVMqnQ6QJGQAYcP3",
  "key2": "2gCjxudbYXw6juoR1QnpXQr1XyvAnmACjxRn49TV57MaqaMchim3hd7HTrNsvTRpiYsUXc11hRFv6V2MC8DVGYFw",
  "key3": "c4CZokb47jKHMQfiq4zVTERsvTZMAeK8RuC7L5F2cZBY1kEs6KsFfG7xSMuys1qvH5Wi8Gm5VG5JMvZ4nTtZMfc",
  "key4": "4XVupeRSnFtQZCfcTexsig4de3jDUU7JQ64KomzjShp1zpLA3AvHcSHcPWxXefFQzFesqpKRKKQgnvSrapybuU7Z",
  "key5": "3nAw79qcCUyRDaRHYJYuMoJ98H9e18xZoP1QoZq1mcVFdsoMy6rVvZJYsoCMnmqX3FXdfbxM4vPzTdhif8Re599j",
  "key6": "2fdsvVsAQg9z8fiqXprEbvfky1V9DwLaQH6B4supguBf3fej2Ccb5SoPUJzFqinvst8TUa2waXXq4DttoUkfRcah",
  "key7": "3muxJuBaCuXV7RdckzCpx888hURuj3ACJaM1aCm1t1SvbVYbL39XFGaXFNbaEa1ySkDpfhir5xPgqgAJeBJFM2vv",
  "key8": "4mK82iMfnQnNWbhad5hegb3neGFsPndpM9D5g4PKXzvyhhJbvhgwc4zNDnvu1Xov7fNqEQ2JmFJuHpSXMK9Ve7WP",
  "key9": "5QXo9hn9WYU4rygTD4HRvDDC5ykRU3TZ3zVj7n7KkiJaSJoHiNtFr4jZNLsS4i7HvSVThWaDmgx8HPaabZHWAYqt",
  "key10": "3B8vvhoKhY7rp8EZ9eukkYBiY6h2i2f2TfCq1jdU8ATVBoJMXSSJDSxALiycTiWnFBZBytC5mUgweYwR9uMLKHET",
  "key11": "4nfYqjSNpcYjfJvJDyVzyLPS6BXRh2Vvz27KKqyx5W3Q9mpL4g8zJm3w1LCNihQ4FiPT25joAu4tzqFMYhELAXEp",
  "key12": "Qb8u514NRnj7UKEhuy1NbGmtPcNmPXZMT8TUk4FAnqXN1yuYqpfwnPH8ehbwrtjv8EYjzLT8iUmNYEYimiz2RNY",
  "key13": "72aZxwTehsyELGjJu2upXUNWNsJ7rVuEjJHYk4y5Km4VBq9dzzAmTjDSVsDomFPsm8yCwTejyxEcGPK4aWrdEp2",
  "key14": "5QSxbsNSgMe3bzp4ue7b6yTYxvQhvwm4NBjXybnkuiXgwdXi4QagsX5yyztnjhRBrqh7kx873eJRqC6gsKzetKuN",
  "key15": "5cx5z4ggPmccfztmEMJLFxg97xdiFjoshnJQJP3CCQG5pBNhEJzNGwLKFVVjFBJcpNoAeKXyTSM7hHx3119aoqkS",
  "key16": "5ah45wVgnag4uaDmJwpV8RUEKbLasSdEU7hLvofEg6xby74pbxe2fNijT7W7hvU3AENzkrqoM45PqP4U3biyin56",
  "key17": "4CmR4rcAcafTZ56SUhSnUMtx62TBfheow7GjcMMhBCy8NP1SxDUBth2maacS7CaUDPcSJmGFUEusxxtdWidQaG18",
  "key18": "5YmSuw9EVy3L5i3nZY2hhUfcQPop1tij9wpngCRVsfqCpyf62vrUC5gNY1VK6qZPTuqAP4WaitAV3jqKnNmB4RSN",
  "key19": "rDEhoksbA9i1NXTnaQ6kDYMrncjAA8eSf2qRNn66wiN9VHSobDogC6bZmXjCGaQfqbrX1HiKdk4pbNbukuw4usx",
  "key20": "4cdPR1vkPcwyFEeny2cy6VYRtW8GQ2QbXFomrgdC4ZztfCFYFdQSYMvMBfz3EvQZP6RN6kPRWAQmrKsrcbJrRvuT",
  "key21": "4ujpTpr39pWZReuGoVVV6T5Yhvm78CJrDU2chAgKbopFPAtMSJxuoEA6KsNoWrmeXcB9mwZThrP1uUrq4MtvEooQ",
  "key22": "53JEtzi11LLcEbs9ZZ75Vs9Qi6iss5UfhNUEMVRZq7e9xqU7UT52idhkGAoSrTQgZgNKRRSz1h4WGtvF4A9dkiUP",
  "key23": "2ca9zWFEV2jeq8uARTdMTnDg4inyPiwwPxSCir8syKxUXDGoYmfCfpNMEpQYGFVNRhQKbbs3iuiFXJMUgyamLGcy",
  "key24": "5uQ9Lx2QMtFNgmTqwzU8MRqTNkvjFQRRENaNU95QzjcZ6uRD65LLcgiwg9vi8agXorPGAKgAeEoN8rVdN4jjNB8S",
  "key25": "4roARFM7YfTPaoPNZ9SsCisaR1DVtMBbUXtdn8drKoGQQ9yiozsDvfZQy8RiVSEPEgSDyJWeDcsTQL77cJbMQmzb",
  "key26": "22XRNKNjSm75dTCmFxxK2SaxdyXUWFbygPCCnTdL4Y4n8KaG7SvHMdBP5PSrDeZwb3SyK9oTtK5LT1scozRf7nCm",
  "key27": "3DVp4x8R3Qs5oVfdBNji3bswjbBQa444TrsmBhtisPtfd5GzKHbXfLqomzo5atkRu5pBxAUmNDo3vPyMxsg6NN6H",
  "key28": "5gRiGapDh9NCbg19haXLH1FMcQhHGngvgrsraiko74T1hD45VW2GHbtpxxoiExfbpUTVQ9sLAf8n5uB8HTQ7sPey",
  "key29": "P997FgvGfh4VJujbMHR1rwxDW1fRWB538AsFcctARJPjnX7PEFQECqthjZw2g6D9ndVgHVUb8eicW4XnCoju2GS",
  "key30": "2DBgYNFr4ypt4vhw5xGDqmvLENaoJ7cQ7WLF71cKVLSHfHhHKD4NF72HUuV31GE7b2W5Xi6JC2R6Tcw4AV4ynLrg",
  "key31": "3WbKBD4WeWnwWwSHiVTQUNnwWteWfzJHUY5miF24fjDKFfMxMbVPDPoiVNQP9AuKmmaLogZncGXWkAXHy73zeVuR",
  "key32": "AQbaxC8NDHYKsWnsnr9F6RbnC1ameWLX4RGTNDHxX6vEe9Yh1yM7aCZabBkdNh5Yu6Z18qUXYLtRyuu6kpotfSL",
  "key33": "4xBPBGQ2LsyZL4BTSwjgP2wxP1Q1ZzMCPinVA7pRFcPgJdgQhJjpr9zhMTkbmon4x3xdt2GK4k3oZvhLFHNpmiB8",
  "key34": "4oWB5RiY7JjYa1AknHc8BfhGYJyhz4hjrCLUbewvjrtE2FskwW5a9UoU31mZjYNLBy2bMfJkC1o4XLEMK38WHD6E",
  "key35": "5ataZuHqEuW7wWWQcMMwc7UZv1a2Vqve7R26mE3nqnR9PmVq2ESFTf9mTCorSTzDKPVXW6DaGnUtpqFoRXRERUYZ",
  "key36": "3oqR8D6Hka7ug9PLPDYir99umdU91ySGdQHYmHbTko7v1n6pfy21x69QxPsXvxTG8wLHUE8LCoiAp9dDuej8VS1E",
  "key37": "YKrgkw9bpPNPdbwuhwPqv5gyDCGUsz4uCSdJyDTRb836t53Vitpe28JJuNTTnAKrSwDdUycrU3Dw8bKUPqZ3bHP",
  "key38": "3hVDypFuaFJFoHTQ4hrTUVL7JJPrh4r3wkBD73UD9nd1VqJVVcpgfSfVWbok7LE7rJ2QLH7ik3wVvcYHAcY3kfgk",
  "key39": "3uNJuzxL5Ku8TJhg14Swiydz4MXdJrSe5g2rriC9C6kxU7Tau4V773wJJ7qq4GPH3kuK4aFC4yNmkTLeVYXuxFFn",
  "key40": "5QUQ2npUtZwgR2d25nH1GS15TfEMpZTe3KiC4dnVepbJ1kiJYCUgE6Ls9FfdcA9AHnBkerWf9WQESkchGP9mxuT2"
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
