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
    "383SmHQvyewov7Zrpt7XGhPR5t49N196j4DKS5TcU364F89A1PSVTu8CVS9tezDC4wk8N1MUMzWHV5fAB1btKqdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQLwsqKLiCKeURjffDi8BnbkTWnPVYTrwVex8ToBu229RCeWvGQ7cBQbGoCRZ6mvJd2qLjaUAjDekSp5vyyBfYX",
  "key1": "u46U7rURcgYmLxiSKmL1NCJyYMeDTB9JTPbMeP8yGgSYbV4nw9d5N7chsB3tw9fcBFMzKAanVkx5PyQGcpNmc6t",
  "key2": "3VUKm5xAUQm1FHeYRN7VpCYYbvDsPfC5i2f5McoW4H7TuZaBid5MH1YaK2mj6i72fB6Xu3qivZL5gDLxp1FJkVEn",
  "key3": "jv9ykbuHeLYXDvMv8AQcP5z2j7Vyj1Yio9xYq3tJCSfnDuYZcXzQy6erS2UfXMBX9ZCULM6FpqRMFfaUF9bdtLn",
  "key4": "58TGsnHtHuGL6pH7kHhGMRA22VYCdzrPhVA1dX67UsLufen37KGWGCztcvDZ5kwBj93D52ppK9jVSCFJoex6gogd",
  "key5": "2AFd462WADFUer1M9sUjuSETipi7NWSw9ZKsf8yq7b5wxGHjmbqT8tEM136WVcAX9YhaQnSumFSYLba9RVCPJsjQ",
  "key6": "2QPKS5cama4Rtt7qxHKip18wqw4gKsqwUnAZz4PfrQY6fQmWiAxBp1bkNvXcEWDVHXko8sQ1PHuw9sFx9x7ujGkN",
  "key7": "3xS3dqNp8EcSRdW11pzoCRCJVDdZ3Za8jtmw8dxntvQ38FRXoXKfmv7wngc44E7TfaMrHwoJCAGENrvxzyaZ8Jqa",
  "key8": "4rTvW9Ez8AHtu6G14kZbXtcWwXxPUZNyVn7wnJiPXQWwejoZLxZb9McMHXYcGj4hz2sAmteWa8grpKRMcKnGerwR",
  "key9": "4LiXsXh9GSARAemBjsZxyHE85NZ9tmfjcFBMhotrgkGotVaAd6DvKCmw7LFRaj73WX93FUBXYQoQSjGpzFkzizkL",
  "key10": "3SM1XRcdzETpyDtH1RChJEJ2du73FnJ5pFM3FAyrNgtaQQX9tv7UVg4ReC4zvufr3m5skrgKqcVzp7jCFnSQx72Q",
  "key11": "iY5KzWjHc8z4oQccBrTTXMvznyVqbFVUuj8xcKeNoqgNhiV1gHC2FHLCTNrLusUugfPU2rzDwo5rVb2K1pt6vZT",
  "key12": "2AHxSB6izcS666i7PjVikp6V7g5KSct9aMS8MhKspBsEbEbDDRV87XrHZfj3acUDcjpEfX4NZDLZTQU2kuUbni83",
  "key13": "54QfkuyGJSoot5dnZTiNKnNmXfgejF8Q3JcsGV7hGFdLtktiRPxAJ8r5MPUZNgERAP8318UvnAW3UM1z1aoD6Bx2",
  "key14": "3E6rGMM4Vz9LppTCrJ6kz9t14WsvcU2jpx8TMp6JvhrFv5bKw4gxYZwzXewdejb9EAGekhdFCvqPcW1DQuW5WFGK",
  "key15": "31t3GY2tGXKkbgqWFGGLtcQ8RwhYvk14fm6C1d6SwyHXQmvV1R7kPMAv5BnzmRMRLVcsFFb1b2yzK8hSYWgASQUx",
  "key16": "47jK6dApdwrwxCfkhSSmVhMKm7JLQ1M66ALrQGoxtpsVMwKkEFWYDeQ9UGQjxj8RPJekReSYEeXnHVeH5UWzQyQV",
  "key17": "4CB33UYFa6Cq8tq36imsdsACsYEGjzBReWmPnas1jio7qC49ifyfwj2jFggCxotA4WGyh9bA597gP1KNM5WYvZNv",
  "key18": "3mFzF1gPsWb3X4M6R2xGkSJb2bEQRk4LCrUBm6pJw3GDaf2TV65mgBPu8CQ6hRYkAmoxiEz9N8xgTYKXnAj3WVKp",
  "key19": "3Go3Cv8A7HmNXWjRaixaDLS5EEv7UAJVXbgNxBF3ce1wwxSYrYJtjwZWqMFojfWc5Ts8aJrzTf645GN3daQj47MF",
  "key20": "35s5hLNWZwiopxvEJYBPNMFv9Vnhjrg1g5M1ZtPSvNEaMXY6RGrftD1xN2Ti4Zr66rN6ykeKvphcQyVKPGCKQUTi",
  "key21": "5DZxANwRazMqBkmAx7vYBWsHh9BDDZHHCNZXAodzcehcVQgmtxv1NzE6Kwt9noi7XWwGW8VPg2rHN5VZ6xfQkknj",
  "key22": "TGouF98PzZ9GGLokfjCL1c18mSjTLN7jod6byFFndkki2PsPuiTC5UMFeytsRado6HBazq97pPwBkaPcAsRDnhm",
  "key23": "5K5JcUWQzNrspoUxnj2X3c8ha9ozVh7ssVJUfx5KhRPV5G2gqCQ2HaUNkaqusakQBskz9JJ8juSj2NKNpbrVN9nP",
  "key24": "35QumZfv8DCfzhB6gP6K36EVSWBUczYav1zTWmv8mQNENrsFiTpMfsqYaGY96AaQ75ZngethkESEVHcaMsUmSMi9",
  "key25": "3Lq4U9MUgyXV3rWE5LyUpCgM5y8gejfuMDXbBsZK7J46K8xLioMXBscwKwb6uG1fpeTFoUWEv51zfTs68MyES6fJ",
  "key26": "44D4sEUDicEaU7mPw8NHNqD86K9kE4fq13TFndTr3Kn4cdtHZZQAaZjRmdHrVDQpSQ2X8dbtPUemzDRmn62iGZXa",
  "key27": "4YzL3pkcsD4wbqxjWjT19PFPh6XDPBYDGDyWuWfJ3qMfi9qCizKjk5GNDqJgaSV9476f3vRgguTh1CQ1ENxK9Fdu"
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
