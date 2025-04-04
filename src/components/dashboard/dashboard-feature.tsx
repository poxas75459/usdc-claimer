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
    "57P2kQKzdvc7cNLichH3f4awj75vYwijo8tRsAQTRkR5j4DibEwgQFTaaGNUN4RJfJuSYRkzynuST1HA8DtaVhvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ur13KbneZSwtsLMB216NrFhqSfhahH3CKGvmtVgbfSXHFVnJNv7SSixbchq5Cc5GN3A9PMBitEnhDDtSdwRSCLc",
  "key1": "zyLSQxHUxdKedpXNuRKJUDMUitpNnmUxwpayKUoJCqpFyWv2HS1xnDLcx6C1opmuS59tcszNfECtxtGkESqNcDB",
  "key2": "26YwPhUdbF9zeqZsja6K8BvfagSoUFvAAPNsY8BNHYv5s267UnGfPzdygjzfUwo2UvRngcmA6cAJB2QNbggikbMu",
  "key3": "4odqTmdN9xesDnUAgJzYYynvjGHmTeEBe71jDQSEDu412KvRUVpxC4wQGMJuN65JPwQUa1jTPd5LPfSkZn16U2pz",
  "key4": "3Y51N2cL5M8qkjbGethovEQbP4V48ZrsDALBgjsB6449hSdTmLQCSSiKeDjKwrBVF3r97m6Q8NYSDg45Te9rBSPy",
  "key5": "5EbN4jeQFMKm3nASYAsz7riN2t6DEJDksZwihzfzQmR98AQkPX4LZbpXX6SBbdyk5Fx9p2TSBgJVZ2sXTbGKkczH",
  "key6": "E2G7hqy5nkpGpScqQg358g7rQMz5dniZHicxnLcuSZYB7vBVhkVxPsxYCR7JWrirLJ2HYCKiKE5PTDvotVUQGfg",
  "key7": "35uNDx5WfUCoPNdhFm71rvqdT5TPKLb3UVHTdtX4EsbKh8x5Qn64ViicHi8DCsKvu5KGtjtHT8tZWqsyvEWc5pvx",
  "key8": "45WafdMtSLmKuoZt9xJugLbWXvEMTYWdM2b1wMyFkzs6ZdnSpXNbJ7kWyzajmRKJhH6Xi2ptr2xRgpp8tq5amVdU",
  "key9": "3jBSBWYUpMcG4A7rsVVCcWZBqAE4Eo4fFVg5Mp9yydjeUoQaczEk5RKyG84NMev1yvu3eF7UkKjoWvcFfNHDp5Bd",
  "key10": "2doXbMBxcyD2hWYpa7xmrB6y7gaL2raTkixUyHiSSgJ5Qm8p8SgMsJaRVnYBCfKwPAAFDMYejzkJ89h7wrjT1D4X",
  "key11": "3hacgKT6na5tPw21m7Bzp5hLniW2dzSdzjt6Z4mcqqwESmbF5VB5NAwDHYQ6VnfFvmNyL96ygXshVDxgQWuN7BxE",
  "key12": "XzNy9dkSeUThC2jQaFETTLLLwf4fd4fH1wsBzrbpLjsbjViSTKVxSHWGnmC9ASaq5BHj7swwwESyWYy3VU4yqUQ",
  "key13": "59SSTGj3DJGqnzqJTMFNSN2qx34DUNjSKN6VFECa6jxthVXnRH3nLqAgSBAgjTSG6SxoxeW1MPjCP4Ewx8VjXjnC",
  "key14": "iP9dGKhv2q5kHNAAJycEE2deAgbNY5gpTfLsygzRfwPX3atX6CHdqcB92F4Jz7zy863CM4z3wff3pGd1CqAYBMe",
  "key15": "2evHTgqQCgHk1DVqiVm7xkTQff2iMRVNK57Sb21je7UQaa4RA1UWfTtjiZGvb4S6DwbjPPcNDs9qhiWnhmKV6kEL",
  "key16": "UUMRoqd3L4sZbB3dkuyA6e1VMpiNkgKwK1K57FyegYWe7kroRARPyBoJbnpDC4S2wvrJrMnZMAWgBhivPHgKUwG",
  "key17": "4EnoT6SK6H6uQHYJDZKvkhReVWGdJSHnjsCjgZHZpueLtjeZei324qwcCr28oLmB61qfiMkq9v7jip4rSSQBUemL",
  "key18": "2nqhH2ozd2roToX9r5vhaCk6qY2vtEF3EUjnfZ5C9sCLzbdgaqeUo2MiTcZK4WCvAZw4NpFTmbyE1RZAzCyU2pvh",
  "key19": "nhyeemsFxBVWGD2oeHsF5pwZVtKofaRacLuu7ZH3eCh2VS3YGqFrrQvjjz4RZEHxKvskcCtgya7fyL5HTnfhWs5",
  "key20": "TmaRoLnaAipKD7kd43YRxpLPYA2u5GiPWVoGaqDMZKMwJ8qKpfZFTf8VdWo4Sp4ryj27RFwbeHFqyNU13m22KZM",
  "key21": "4putuYoGdQ1zGaFcCgZ8a5rWypJ4MTGQ2z3mG5jmQdm1KMF6jsxvKmBr91UJQSxqzM4U19vWSwzLCGhpFhjJBN64",
  "key22": "2ucgf4RhuCVYtcqzPMQKZCWcfq5h9fGP5DaJ3nA1sRDK8osdmmtBUgmdvVJN4nh5Eygh4RW8KNJTfhUPveypviQ5",
  "key23": "5Gsb5Kxj1VpLcfn14ZtAZUD6sFAihCsXUiakVjM4GK3FkKttdyWAKkD7ZJ8zk7GMX3TH16HmFT8nJsaJAt1Bh8d5",
  "key24": "46XHtLQavZwDF1oAzRFXSwgPzCq2eFpi13K1GuwLUsvDnYSqNNac7JACxXr9Bc8syec4E5M4bozRuwTNmwhngGVP",
  "key25": "5Y8vsAAbyoLxHwxpK2of6JFpLqz41NVVdnucvrUciAEvL8dbxxdsyxnAiLiztSRferiLpmnrkWyc5ubZseRcwYd3",
  "key26": "32HPRSkkgtqmGspYYv1pdcSKt1nLEJ3ymB6F6EHYf2SFLQ2eXK2X4sfg11YDx9mxwuAptwtX1JCkPoxjedvbZB2",
  "key27": "2s8jFcDLRfom6bY7nkZzXF9bBk1JWmyXGjGnCr8ugTmERrkLNexKr9KFuZ5i3HTY79ftrRDSbmU9d1AATrGY8mC3",
  "key28": "2R3Hq2mpcEG9EXr2fPo15zrHiASY6RLAsCYP7oxqksTtzTzPJYgDXWwpj9eby83Hr6VFzWXwhszLsLUk4e1fFuRh",
  "key29": "2fTdyJQW6udGBgq7QDZyjywX2EQUKPGu7SsA7kvbS6vjwd7eSnotV5n1Cf7oQNDHLNGZJUNCQLGdBqcgsBADmKqz",
  "key30": "3T2sp6kqVWGZheXNyrzvgHy4EChYceGpnwhuqM2E1kKVtXK7x8PCjvw6Mt1qQVoqfcdHb3J7aC3LBr1whnNNssdz",
  "key31": "MSXtJ5JA6ASUXCguVKzfdWAE63CamwLTxTK3FPzUfnRjUJNykqTw2yZjJjMSYRr9BtBPgtbropN1xaeQTuVboh1"
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
