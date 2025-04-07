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
    "2LHFJHNS3vFQpboniVDcmjeghsjzFT1LF52z8xy4JsLz6sqGgUq97G18pdVmEttaR4HVcaVN2xL6VM17wqQZwmAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWwcJMgBPs9EWPHggDeduwETx8P1aZfE1SiwnT9N7TXidiDXgCQXp1TxksgmFrEds6Xb5hDe4DNPJBLNhZFDKbU",
  "key1": "2JVb558TD3TZ58eVuRWRaVFhgNkg3T9yGBj6s5UR14RqW6su7aaiFNS5WUfpLHqN3pri4hpR5XHmG9581w6tDKYU",
  "key2": "3DhxQdjg9WMgndvtZBaeM7isid2fB4WUP9j1Eh9baEf81FdxhZhLQds8Z5crT89NqR4x3YDcVF5mTE1tp9nQB5kn",
  "key3": "66AEzLQYNvnr6vcraD6zuyWGkkZRSUSDxfqDoKHn3Myza9g2z2PVg4YsFq2NmotuReSVXEETjuNVfmn55bMqrtdT",
  "key4": "5CWqYsTCjcDByG77mR5mbF5wgayMNHu9gq3UU93p8jKFuJEaNRj8xtEoEDQEb9BXzhZuUR31dEBddduPz5HoL1qy",
  "key5": "3xxPoudYLn3S1TUeFpF1KV49KQ4WKiihpCHGgftWNPKe2Za5UQwh81S9YL6GcDRqw3yzekE6HCGH7Rx3i7hYYQ4u",
  "key6": "5BZhjDRf6Jzc8EvaoaQUNbUmcEdoXHNa5QV2eoP7sxkTDWS9Y8zXrrUDczvBf5iMobPKg7VynNqyJhfD8HwDN8bM",
  "key7": "5j3GiQmduFyKp9aSzscD25TSGd7Hx4dzCsy4juURVH1baotWYpDXAtWYRNKuxpF4FWs49bpd5WrvMFMPsHKdRpP7",
  "key8": "3ySzscg7uFVeuz3hPp7BcZDDLKeC5yug48XXFFmjAZQvDbBsRQSLY4ByjvLaWoWiRkZrQYuaHyd6e3CKmTLuDrKc",
  "key9": "2KZtTQr6GBj7TEdZMVP983ka478eL56HKxo9r6J8doKqDiUTFF3SErXummVnhfjah2QSb8UthkYgfqVJX3g9Vutv",
  "key10": "339brUouD4G8VZ1GKBrfvAdjb7Qmie9yrVRYx4VLUXX3C42hEcPdDgd5LgwrMjU3fLHdsyJ2uag5txuGb8VJTkEj",
  "key11": "3mn9byyhboUAModuRDBCdJqFCPvQanfpHx8YSZnYxsvzkZ6BYxLt6DkmMDCiwqSMU1seBjSE29qPAudPCdYaZf7A",
  "key12": "3FrxYqTZH55W74dbPqUYBzGyvnpfMJee7WShbYepm6e4kRE4hJPc5maEyWvMKWQSsCUFNz9DQZxzzZYEtkw6Mwxa",
  "key13": "3DMTPzdTriCcgCiMiD1F9yu5Po9NSs8pRm62dpDgNn6g7YGEbMEvhToXucdn8it1wvuNFKUWuNCR1EB7BMssbErN",
  "key14": "Siz9ZcXkHFU1Xa8M3iCNci6QLzJZRmzLxjBsnRtUaiDLAoD3NkPnQ7SJYALwVfDEF5V1DetFemYv4tsA29SsfqD",
  "key15": "3AUMKdTG2eeGXb9Jny3CQ2ZzdWECpLmZH8kXkrLVNrQRq1HA47kb3eLu9s8DrWBoAS15smwbMVkgmxUYkPgMbw89",
  "key16": "mpF1s8MSGAcd9uNREhVJ1SwWg1MdNxwD7i5qbcmtqUnTE5XcLXSAXQsG8hGBx6G3jHV5EeBMBjFRSgZ47y8kUCi",
  "key17": "XYzgZ52ajgPGzP9t9kt7m1hkmW71vL4Lo5VLvheA3nGtYMrmbM6gybpbwcLTFjQLqpRTy7aBY2ptRh8Q6csTpEb",
  "key18": "2iL3c6ACNbLFT3mpHxez81zbhgFTLact2UEvrRQSRZ7FF8BcjArZ4HsZz7dgmEtmBa3RKnG4ZGdG19qsmKTNgZLM",
  "key19": "3gu3Nsse4G8wsQAFhjFhVD1VPsBRRZ8gD1ePTWoD7bXWpS4zNPuD3e5gR1carEWxHmB5uDfdYHMhH9x6DqFQ9pzf",
  "key20": "2DP8YEVt8y23iNrEubkQeMgmmJ3Q93p8j1QJ1PfvwoPjabcTfLQjKLqtXWuCbk2FjUjviLcakGCkHxi21Yrrwahc",
  "key21": "2JQvajS5gZDwfdLEpZrbssjyx3HLKb61DczDmyJQFbX2zcaDsdi42mSii76tXdhDgVDTUUSUu7suyKsA4TVkwgnX",
  "key22": "2m6rzcc5o51kYzfqARS8WG2x6kggqW4g6xBhy22grEeZfRXVtfvG58tCEYQDvPJ6oB3nL2DYcvGj3PFnoLCTuMWF",
  "key23": "33B2KTjjuke65W345uyJHMZp6VSwovQ9vgo8qHZWQvCZXiNQZHxthQWpADPKvur9uFrefdUU13Ty9LqW4gVgQw7N",
  "key24": "4ND91JfcAUER9nZZ8bTXT6shjrrweCMxa7E5QiVNiuqU3c3ZSYj7qQqAGsjAi4FTevqR3yMpgkuhGXUqHZLR3aXy",
  "key25": "5We5SWnF5Z9euarAfwaLtn5uuUXtBw6HkJLJvSR5tFA5PWUUjo9kFVKPfqmDvaBgeeoW4tud8i4gTv5jHwirwv4X",
  "key26": "53t7uPtwVM3SydYr5UPfFo7CZCtG4sLiYLjMMZ9NsxJj2QvGAosmECapmqwEdLkZjV2gvyCztsswakj4AuWLTiuR",
  "key27": "vBBBRm36Var4RgTaYk7xgJiyXtBhmLLLnFkWbUt3prk2Ykt7ayMrZ541ViZ7NafaeKUkHYMZoW4Fuk8SFuXxGN7",
  "key28": "3udcUvvWJWRf2wBLX5NdUKkuDPtTAMu7LmFumcMwui6gNymHYD3NQtAkc3hn1sShRtjHKisSsTeWtikSbqSXkuqE",
  "key29": "3L2tUyiLutnwQX5E9qKCPi7T6NSf8UHjXo5yvSA5XQX3pxVK6CrBjFxdqvAtXHt7d6K3LZqFA8BfEy3wgUMYmkgT",
  "key30": "3ANSyrSmGZ6dwLwwFr2iLdVwWkAJk9N9K9xEmShXcNdKjAUU6Nsd5TkgLFa5Lr8t8LktcmVKuBXpBBEwQctbURzC",
  "key31": "XnjEZEmXg7TmCqKDTdMqYudGSETu8Y5W4k6TiTns8NKv1EicwNXzjofCaFtyLSDLees4c2xY5Gt8AE9HG3W3n1d",
  "key32": "2SGBQGZ3fnqrKhyNAsTQpBzYiarHg9WHHCG5f5KewodQ9eb3DGgADmXzfBG4dWG9qHUoD3cJEHFdffXEAFp6MAE8",
  "key33": "zrn2r65LEA95VcX2g6FDAX3yGU6J4dVV8XKPv3MNLHmM9au9CT1mott5MCoxkesgVKCWj2aqFFvbdhEimxdWY5T",
  "key34": "AmoFaTg2MRqZZhdWoagcrL6MhCmhm2UGwVEFnHcJQpZDkvF2dUDZrcvpty4z9rjuHXAMz16VwS3bmdF75ehg9ba",
  "key35": "2xgSmfTCPWVKUm92oHcuioSVZrKZH11DERLojgqTpswty689Wp6guvXyDfptngDn39h8D1ZTZFRkt28qNGPv38RY",
  "key36": "3dT3tHUc1MG6DZiUCGMn73NCyXrBKb4vAHc1AWCAcUSJUQHEJewEbdjAQCLDgkeA5NSqTqpSy45AoumtyPwqr31S",
  "key37": "2EcZxW91pKK2zGKQ9wxwy8QkcxCe6f97CbGmKSCadazqojRQfW5PnqQFiuemYtZ5YovyhMpLQ8XBE7eWUeXqVsvg"
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
