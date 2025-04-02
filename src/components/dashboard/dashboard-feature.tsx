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
    "fiFjaWgUK7QLMxPAzaxTXf2gGLuamxL4jjZnZWeqHxWsdkJqMh94fFoyK6o9BzKcURKzXq1rvxFWTW9k6VBkYuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23etamJtx57WubG3cHhoXxNAAYkEXCc5X2RfRTDUyXXNGzqtcpYD5HEkftRvTvyo99mJsgab5CPZzq9oor92juew",
  "key1": "51WTojFSitpA1uR2jHXR9edM5Fxicx47LPK7yrLzdnQjR5GsEUmPaFkpBXSCtDjV9eGrkcFMUZmLmwZV2TfYpchK",
  "key2": "2z4qbDKGUkuR8vp4ZGVVDf6Y26zx98YdhGXUk9rcbz6nDEjRpk9oCPhg5RuVYt8XSR3SuUWPRcoLP8PRMG4gDQ7p",
  "key3": "4X9eESUKqUWpe4ocAheTjax8yijHryCHv7FUGWdLYWkeT3dG54raThnyeHpYMgox1J6iAaWgsCSe5ywVUpdZS8NN",
  "key4": "5optATo5JAtqMxsvYFozJ6gtSaCjgm5t137JuHDmE4Kk49LLqS7mH832Kg84PbVgpXJhtgW8vabHdhefrxUuq4v7",
  "key5": "hAKWcf6zQmPpWssGbwGWKyJc7EHnpWBCAq7UngzcRbz3SXQrFFWV6hE6XHutCNMhjd3N48njZt2vkbefbWaaNAe",
  "key6": "3r5EkbCNWaAPBoD3BZukxHPoaBZeMzxTuWLNHEr3jzsKnP7DRNHL1EhUNpASdCAjncqorokYSikYHj7Gt4muFvPX",
  "key7": "3dUNShxsde7nZ226xkQRnH1HA18wqZeggP3FfarpbEcL5dUeXG4p22FJEnnVCbUBvcBW4PfK3ecHGXcqxUbfWhHX",
  "key8": "49435pgVPyMGRgHbCF64WXNzWMxYMss1RQvLfFuGVKjUDpW3fhab9obunoumrReQWbexLBaVYP1UN3E5goLU2DVu",
  "key9": "31oYMXbzFfbVrpKvUELQtNKQrQBHHsXT4xHfrfDGyZf9PZSEifHZRnxS3bUBcoYxJH7rCvUaBrsPNYUqf2mFRhWB",
  "key10": "3ZPixv8LvWfzhcozwkVtPaYL4TVM2XkBm9jsDhybSDYVkAvjAja4MtKpiWkfgcSnqqUY6tX7Ye16x6eg3bSbNPbF",
  "key11": "65N4oQYdjJxqtW17DEhnDe56UML6A5LuNQhgxv4vGhiyEHziQT1T8RTJ4Lgd1vmgqaG8qeshB3mRER6Zg6ynTXyf",
  "key12": "2VkbTPGRr4LTcF2zSuYTaYHrxCHX2Gg1u2L7kT9NSrMvkujhX5h8Fj5pxZ9xNZ5HcGymPwYpxgcdd9Cpef4kDDA8",
  "key13": "5kJAWZb2XbNiJewmnafb5K35VZp47nBkaSqq8oUfFsETvHyKXr5Y5d6dFGy4FSxisag6BiNS2FMDjemVGT6dtRFz",
  "key14": "t12sjuPZcL5YwSQwbKwbyzRDhd4vaLDXThAv6fcGNQsy2oDHKf1QzHLJurCHmwQGWeXLJeVs8Wo9Tj9P8XEdEj1",
  "key15": "Axc46bs3rMgj3jYyWu4nraxwbaYeqpV9cBu62N7CnPHGPVmCDiqzt6vU83Wt7mMburbVcb748kSacbCQGE3SyTQ",
  "key16": "3KUnedAxfYdM4QeCshJnWVDnixJM98ra9jnxDCbh7Yft5rERsejnF9Y5Cryyvzx27NdEoePVpQJqfUcKY9PskRF8",
  "key17": "2Dh34MVW49xCPrupGbVqcSLw5hDsCvMnEh6tBuo2HR1nnwAfVWW4G2Nb1SpSBuouveBDppuSgPHU3MydWVoWEDki",
  "key18": "4zawD1XkT1cw46jx5G2DkAdQ872n9E2gwx5qJgRC3PanQ9kCzyMpj2N6RAmUvGtnXJDKDVajyK8EUtcEYeye6FbZ",
  "key19": "4uoTeW1JmNAvjP66PrLfnYrB6cUuSKCVvedSPvmxvUvJnpUUKQzySXxhk1Wy3ep9k3C2P831LPojWgC8L6jYpe4",
  "key20": "4VQFZZL7rhDSQDB91y11cVjBS2fcfMFW3LSvsHaRqujzCmTq7muDJLC2jGkQo5YzKbygByJT6A9CJBNAVTHdQp6A",
  "key21": "4vRfMLeQFHdcUeGAQukMUK4eBSDL45hBxsiXEW9swvh2MiBbAqRcJ41fCL8ix6Hq1RbUAg7goyy98jU1GSY1YWYT",
  "key22": "95x2w51GVKuHrx7S7phESYz53RCGaPapiFqBCxMjsg8XDBE9Q2uaLLDKmaZU55bdTd7oXNDyx5KS7Qwr8YxqQrF",
  "key23": "4WtUAodDWfKgv68hbFTvRsvEZSyKuPiWzrBLJzzzxoELBrF9jUm9PrpjPyFKgBrM9LxjkThFibCyRgHjEDWaQvcL",
  "key24": "4mwf7LceswqtjuuPtveYFRHDDsLyRSsoBuhAeXLcLbWaToiG2UdLU5RsDe4caA32JY3wumqsQmCQdubbhfgoUDUk",
  "key25": "49bEYzAhNKem8cHTnwjEjoxUkzTFWjb1wQKhaH6NLmcV7KGnrxtFq4t5J2VHgf6uMB9GVGWgpJX1X7kKCdQx7Vtw",
  "key26": "3SQqHLD9S6YRpYasaiio8h1dmcXb9Hb4XYxj43ZVUuusPMrxtADei6jC7pHb4mfaoDjviypsFKL5yMoEcMrHLSFo",
  "key27": "4qJhBELVSYJoha6NbVd8so5NZKZEMjhq5Ni8riszw74xRRjdRR24SocZ1snatGLz56Jbjscsd7EsvLKFLYtxwf5n",
  "key28": "2WTHFnhDSphMwxRSCBBcjHaJjY7Dn39F12wrW2Hp9bfzt3hMbqQSfmnxSrpTEm8fBA5KQVfNfqJK14ygn9mJDXPd",
  "key29": "2nyHvykfs62dptoVegGLHe6DL8CKErXZ9nRsHnsNFcCuWCTtnzTzv6C2uFWwZnNUFfbBfJggWm8kYrqXvHKD8w5G",
  "key30": "3QrTBXpD9owqw622L7rnAz9uvT3ykZ4RjvaxFzGkmT31ZZYYwHmPCx8BEBEaf3Mzt6j3wG4W1w8wpDMeA8JbU5Dj",
  "key31": "5F4irX5yDKSMnvYdP83EvPxPfmhprmWZrT4Qxw2bkC2Ywp71xdXaucrnvMkfD9SyjiNoC6gHczm3mcjJjckvNRA8",
  "key32": "8dp2YQxu4zbHmyo8t8xj3kZb7bGApYHAPrCtmcgXFTEh21oos3XZgJ6jd5uRhazjGYN8jw8tBcRjKgTpaSQFK1X",
  "key33": "2vwGuMNHwFhCuAMN5Fqp5Y8iVDH6QVKRuTBnWwD6dcCbMN9F428zfq7vShfNWyDSocAqwxAiK8mxfhaXRR3WC77v",
  "key34": "4NDpjw7NBrhA1Kxre9xRfwcMNq6wCoRpAi9GAZ3YmwJpB8kUWN2fLb4iMBNQfykYxyND5mD95mem3LP2SddNDYgA",
  "key35": "4eK9zbgovKypk6YfpQqrwkYEwKmdXf1KHrGPaMfxysFRRKus7cUAazDcCF2iL37a9vhabSwWUM2KcYKiPHCqEu5R",
  "key36": "41ZQFMtaZspE585GgtaaYFDrgRJ8BCiAQAHFi41guSuAdoMLLd4egYE2rM7AirMRqzpSVVSZ5K4XLDm48ZVaatEB",
  "key37": "5Dypy3yaY2SZjavLCqTmdcW1T3JfyhKUQwKBWnGwhtbhXenezo9yKU7k6NgR8XAJZ7fxA1MjYb1coL9n5rMeUMvS",
  "key38": "3L3YiJkpJgNV57gQDpBHU6jrg3EJLXaLzCG1MHZVzYiypzK2X6HNfcQAa8SU5T1Du6ZV6RoBNK6eKPwKG1YtYgyb",
  "key39": "2A2diwZ3pr5miBFAD3KxnQsprUdCfadmxjrKiaetEXNQh3QoRH3gws7Cdkp5xnRmtFBevd4RuhpfsY7A8NxwNDGp",
  "key40": "Hn5qZCkRWc6SBZQqbvY1UfJwGUoFs2zjq3Q2WMA1jMpqWnvNbeZTFL3CpdgHaBLqqV4YbgFf2Gtbpqd8YCU5DRH"
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
