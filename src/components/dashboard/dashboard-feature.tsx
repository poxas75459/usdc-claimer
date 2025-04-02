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
    "wYHAerBQcWrhxUenMZSFTfFPpeczxtgrraZXhLcutREDMwqgBzgRK8PY1568oZcQNPsBzBPExTtR7eFfwpX7PuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jzadNWf1d1X7srqoeTdvZncNeDNkgWdgEFofJQmC3mPiUC1NJCNAsppyQBZwSya6BQgVe9LvkKp92jNCYVLjCF",
  "key1": "4hfuK6PremfEb8iKewf1XZ8REjFHHoYepRyeF2ZTB2XEAjKpVLHiCiDcnqLg5YfwoiUgkjc2hZ5VgFN88UXcHCuY",
  "key2": "5JApAZSGegoW256UypM5MPG3HEfvEwXbSSeg4LjYzcQMpLNvDLWVmgyL7CWtfdA3piXeA1C4tpgqCs5NYGZWRanb",
  "key3": "412pUvDaYVBbw55ts72fTQ2i3TfWNLyDcSdbq7u3GCbXP2ZoP4Xb7Q5jF9iA3BEP2mDMfmpXiA4G11tSZFUuQBmr",
  "key4": "3bJoa6XTSqKeXw7VLbRqMDjThpvZFwS1TfPEi4J9t1cpR3MWwoqzKbHaBZAfgWZDREDxs6HBrvBL3N2Ktw4CHH2D",
  "key5": "3we9xfM7xsajhsfKmXFQBU5SooEgFssB4oVstB7jgyQMS9jz92zB55xrEGKHzqqwFScD3BjMaayiAS3FqTfFD9xo",
  "key6": "23RrAwEb2XJgsnreLQ1EgYQKMB5Xk5nDyqGPAM6q6b8rG4DD4oqVSBBPmbHTA7QmNipn2XEggbwhaDwginkGtjbQ",
  "key7": "3LnjkveVyn9i2JNFfDZUYHuLZHUwsqAi2KKpTpK3esjxPy1THhw2KPQdDYPMxeEnvV9DCJf72B2UKXSVUxdwWPme",
  "key8": "24afSB3ENSyHesmFwbqeWk3GPjZVqrqJHekZjXkCv4iYLQCt72UyQgyU3KgF8257prcqjAjbVSP2swssEHLDdHVB",
  "key9": "49K8GbpMgLuMYskGBUVxApofqnxvQvh1bzmhY7g4duhqaKehoRRqxoNqjbgCCutVYxzzgp1gZPaEhNgtRoQrQDF6",
  "key10": "3L79WhHXyK2BTt28jPWEPMqWv8YFyYmNPMtG8kqkkWAG2AnbP3g8Mgxzsp45BURkeh8qEWzXLRFjQ6bF8Zajvgc6",
  "key11": "4Z6fxq3amBRmZQhKjoPivdaAB1Wiermi3QisXiLCkTUpZ54hc3RgmHc6HDtjxvRxKTmx1h6rLsSh9otP5q9SLZL4",
  "key12": "2NGKfGj8ZRacUpxu3fBRCLH2uNaQhEyRqJ6VJ81pgFNgLikQ6dHGRdbLwzz2PUFfmaAXKFDKnoPyQUbUZgnGCGCF",
  "key13": "Uckx5RFikECB2NFf9Nm5dEvjSK2F5Xo92iBojfQ5eDZ767cEuU1Bf9XSdPMuTPdnwfmWTn843k7JRLGpCeaBknb",
  "key14": "33FYDQzLYdtg1w5jP3C63J4NfaqTYYmXfpfqBpy1owneq9yb8krcZ6EcS3D9SShv2HmUw9uyYLQKKLHabNW7vPAw",
  "key15": "31VjedJCuAfu7RczxH5nYfeftDGPCuDjYwiRcfQkoSEghVtP5GktpUd4PBmXBphgUL4j6ncvB6bLj5ZsKSUE7Sqn",
  "key16": "3VsAj66NcDx3JkJvhRbsqMascx42L1g8bxaza9G8vYRg5ZJua7PQDAJaDrLNkEJ5mLWz2rnSJ92GzXfEk3ecTsfv",
  "key17": "23y6kojbPD2yFmJNuVt9STseRy8dp15oMehcGhK1AEkGHMCsYEaRfKzrrAvZpLzvcM2wzn9JeGX25JFWJ6ynan2P",
  "key18": "4jCXoRzWQNJDDy1zC4oXxxvhcVZJztT1gRMzZJWyMx3RJNdv8XHfz9pgZAdDSf4ceAJAVKki6VpLx1LSM99o6szk",
  "key19": "2FNAmpKs7UMLJJmhSeXYTb54V4KVUFP3hFXSh8fZgWxocpXBKAbrWzvvSmqMuREb65yqiGJ3Ddv1iiku8jSg1Fsr",
  "key20": "423GYVckr2wwHeASTcwEsvtb3R2uuzhDtHZTZZDDd44M1k1H3VQKfGpugkoGTiAyQ3RoUC2FxcsPc6Co3GXp2Lfb",
  "key21": "2RdRTZP4KfzpVSGixQL8kByZLcNTUeTgSFypEQ2JHJf9EiuogHsxnzyxs5ojah4HydoJKYkV6SjJUiK32KjHywK2",
  "key22": "TBoDRmTcmSy1EMoFgJwupcbxeFQQAoGAfhj8aQCk2yudNV3WWo5dNGX91px655AQG6EZpp8HYHANpAEzQ7TFkeE",
  "key23": "48yrbH8buup15UorgXQojbWNZXip1N8LaiBb5xDF8NNmt4chsL7LkTRT8wSu5DfXwL2XRgHvVEzAVDSYZqb3tV1x",
  "key24": "3z6UCmdPAgf6dr66Qp1wxJumViqe5sppjg6yWXfTs4Ac42N2ED4deQ74fDsa9hn76CYoxeXZABXwJGDHqfXdrEYg"
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
