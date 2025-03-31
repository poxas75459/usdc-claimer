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
    "3Vz5Eem2UQ77YatsTpvekJHwNpuqwzwMKRditbTsPBjZAYPfrEDmpT1u7UZQakNtEVBhNup6UpUzb7mSERn3nufB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvQY9aks5KgrgWyHJetM6yVUhMC5oJbAv48QWkiWQfwPWSuPXXmDJ5utE13RdtVirMNcX6CRyUdTDCjwxdKHVUz",
  "key1": "4B7CJxmTwZtHJCkL4L7HwY8yHemNz6smJj253ri4uVmdZctoaqw69TAhVDXmxguPHekUZzX5dYFou8MPFXcuAz1d",
  "key2": "4Sw2U8VQKkhMTPwCt4K5XmDgNqEDDFPXii99hxFjJoRAnAfG53AbzTDwBcRxFppx55VbHhnSRYRfpQTphgufR1xH",
  "key3": "5R9av2b3ubevj2kGNVGsuoDKdRDFAyqakk7qaQnmN2bj7SvN82s24oSpFMJ8Vcu31ebqHinHM5BwgibpWLznadPF",
  "key4": "yL8vLsgQ8CHDqd1ergnMsvRQNX9MPGoqDZd8PBCydPgxsT6yvTdgfoVnJEv77LSSNfaFHWSQcBmKCCMc4X9iv9C",
  "key5": "5Bpbi9tZFYn3oE23DCgioxd1feVSStFcm1wEpqgUahGh3Cuf2hLdSf7cb8QgfdLCGU3F61iwSLHu6Csgz98co1Ho",
  "key6": "3VoJsarR9ePUhZkBwrsWzVgJQCtJH9j2ZXzDT5EG4jrsiJdNM5Ukdzp1jnerzwhHhkubArnnFTF1rPAnWoNh7qN4",
  "key7": "2FAQYkw5z56h3ZV9ff5VkUBapawMWK1jDwKXj76M7AENdzDBe9vrb6SLtG7St2XRvpsTMuMRAT1QkWHivu2szUi",
  "key8": "5zMHL3LFQXtbzt4fUzcBbtLLYuHWNXvYf1ZWcjaf5hKfR2M1DVkkeHWNM96pEynx3t9UUpyf24jUmDwQcnMimMCJ",
  "key9": "2FkHrkgGMRxjLJC8eNFkn5f9S6hmGNH1AtFVuugo7BeeKZh4zWnHrm7kGjWRGZmgPZ7BgDJtWMRpR3zv3WsP5tox",
  "key10": "qCF7mH1brPk46MuEm5qt3Agq4h1mKcxK4ZCHH8hrnzdsLXtViRdrLPs5xoA7iw3r9UDBSwFxTHiz7xsx24V4CAg",
  "key11": "2Pje6EHnKwvMPosJ1WT9JK3S7o9eVJCNWc17Nf5TcqhiNkNeK9co7SA6pHgNpWSL3oarxzaytyDbYYEoPysox3oL",
  "key12": "5myQUJUKgB7t4tnBRjHPF3hWMMvXncLHuMoEpk153GjVmuF6GNS2iwebt2XHt7224aA8XfUVrDs2eeZVaJVr3q5J",
  "key13": "2Gizr8RsdxNMRGgrJNwxk8dEqYNrGx59sSzf5Lei6YAGwmxSGRHUGBNdaee6h2GXrLBRCzC9PVf9F2sLvKFN13FD",
  "key14": "5mnp5dWaKhND44rKZ4wdU6H6bcDNvcNwyxAyrCCHaCEfcT5Etwp5cg1jrQhPThr1JxKo7GFyNWZyuv9Q7J4B4AHX",
  "key15": "WEGY2AobQY51vzQ7TG81pXGkLNkgWoZbJ5jN7LKCNMV1CUmqtiNeEPSRkYcik3NXcZiH6nmfGqXf9apuxcsptVo",
  "key16": "56P8HjDGTjtERemBDh3vvW3aTc7mj9goVfgTc58Qq5VHndpekkSC4gW4Acv4jHs75K8gxaajiR4GkjWc1iQcSSfS",
  "key17": "2Dxk5hjvrcQFqXe48YKz2RaiwYAXZ5WtRGKFEUFdt3YidpucQExYcX5tAD35nFUYZ47vsa4JNPyqUNcDLycdickg",
  "key18": "qATFzV95181ec6WdsyM33MQPh3F3SpqFTMY9jyzcDmQ86SzQ33wc8oNEwo3MaRuhC3ru8PaexjX7JYfeEuTVKMj",
  "key19": "fJuXLViyxfBmwhJXZCoLitSvxZjAqbPgxHQoMqhLhCPkEDriq2H1uFWih7eHUWeYaotdKeFMwx8u2xxGtxHWCZJ",
  "key20": "4ezhGiDX2HURwR5u8A39G5MBoR5nAhs3ZAYGWKuZ7WV1VGcnTtGtbfRtVCokSq7TKGxxgbRxhyHuWCu8FGDzZKwB",
  "key21": "5Se7fbdTJJjL8nh3GW74HJvV9X68WbeCuYZgjaR52dwog33PXxuNwHnF3oPE6w8j4YCg54qXwS197PZeKiz28WNP",
  "key22": "2UsMPJ5WuPK1F9P5QKRE49rYd5SycqkUhnJm4krnAwAwA2FoTye6cVLDMmFdcZmaMaeodk47coFV9Hnk8vPCiXUp",
  "key23": "3GkP44xCfmYNitH2GJg6haJxWrtBpQ8LQxbEwc5hZyhxnEBdSwayx2B3FEvMgrXFcDH7B2RVYDxGmMRknYsd4QwY",
  "key24": "2AVdqvJjfF68LKQ3NNyMWRHfhHe5yNw6c1gy4umiGzv6GMonupGvg92puQGD6RcRB2jxX3vfEcBYYCU617p4wjC",
  "key25": "3Ve3cG5Geo3VdHWTqi7V3HLRE9zB8HJtansfffkJrWSr4DNiJHGw2wUrZ2kPGJE4yEGq4Lh9zKatmBifUi6hqnP5",
  "key26": "4kLv7VepAZBtsjVi9gosEUCZjx6twKwaWjYKkxGbdxig9DAyRBFUQBNd5RZf3GC7vmE7qVYeUF65fS57XsjmFPTK"
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
