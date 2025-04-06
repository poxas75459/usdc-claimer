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
    "27qZX39JUFEj9oNsbZW6dGFBPf16iQaTGyBiApdmkdJF8AsZWXQqS3xy4aM6ij44FJZS95eFBgQv7GURLhwTAf43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59wbac8gU4N9PTocLCTaP5VySiF3y6CZNDM6vAmN3cWuLzEQ9FQBFZ7A4r4397S2f2q2Ni8proK8edzHUw8keLB6",
  "key1": "3f4PnkDQH8X8QivABBnWhiqu63QRUNeRxTfJKuV6Pqq6bcCJqqni2Um9PnV8W1PKpHehLLeALYWM7QaJJfLzAWHu",
  "key2": "4WPQmdkUrSeoaCcxkPvnvJdi41tDfLWRB6pLmYuouVQ3CKC65eg7vs1FeV5HUpwrEPnKPYGST8XCWHu9U1oyAfQQ",
  "key3": "4L5dgofTwQY25sEMebuRxbpnbF6iWpx5MgBWNZQCKZYSnHpRHRmrxsrYQdJ1GrMPJrWF4JZQJBBh2orrV78Gxov8",
  "key4": "5gcNHnRbatg5KakGPGffyjxxk3NNCLESBaeVcD8aiBbif28F5QdnkE1n3GjSHifUgD7JAjKubtpwmaFp1UTSFrzX",
  "key5": "u2x9jVKrvmt3KEUxKF8rWvqbhRmfmfMJBh5Z28uQZ7CGTeGmcTyWfsuSV5DFc2C5VPxwjhcvGGoNKcmg1BLoG19",
  "key6": "2fYYvWNaNSwM6Ya8YpFR7MCURGBoTbEkKnBZ9A2oPDt2f8ERtww5ZyqZ1Km58Qe8ZYqzXGRKbk9x4zNPaePxbAix",
  "key7": "4gdsbYNyvXmSrtwgCTmJTYmgw4ybks2fForS3zZ5UAM7ekJZ6TwVKwfBQGjMvFPak1543Z3w59UdegpxHKANoo73",
  "key8": "3AD5pUReatBAxC7d5VZ1mdXHM82Yxzx4Bnd7moQgeTDLPaNA1NLgmw99sFFzUsP8NwXHztv1ta8SZ5Duwqb1uYyJ",
  "key9": "2WVDgHBrwEQAnuYoahEh4jb1DGYGfpcSRdLZBVvGDb3ivd2LtURUHAHopFjrSL7zBMHqLiVQ3iMViD52WoTMBbF6",
  "key10": "4iynkwf9cGmhU6DVZDHhhTXkBmwcT9JedAhmnLeRzLdrmNHSPqV7M1VYsdweQijtmUZV4GFRmCr9FHg46aQAYSvk",
  "key11": "5jG5Vv41GAaU1KAxY2JBxeNSm6fVKa8AqPF1DvKpe3NueTaSwiLsukgqb7P9MQ89s9iRmg6PdC5nk5mkSN1VJSfr",
  "key12": "2u1RjMSB63KuBWqcyzCLAJXGJC61anycQRMKhFvuCZ1bAy2fVmrJoQ4s4WiKE9rBBfG25ZTgK7zRJCuPs8P68GBU",
  "key13": "3qTPRGx9reQEZYqRyM6o7TLDnGSe3wTnqKrKR9VPMAFXNx8a4o6piqP7N6JzFNemQU3DsEFPtUwyhJTNmhJ9s61V",
  "key14": "4S3vGBmH6FUit9PqYzWNqYusRW5oiTbPPY5dPKREBeQcXL3T9vFQDDLEiwuJxt3tyad8BM7KuidkYAj8pbENua4z",
  "key15": "PeP8s1cRt756y4FNfckXZksFWdVwoCgWMa6b97QBQDCVdutnhYJGeNHmUqbqbkcyTPaCs6Fkq8nV6KhXEsBbQ7T",
  "key16": "2SmWFD7SputNnQjPxaU3npJeD6Fhvg8d5TnKAk56UkkSVZcupsE3kiQT5VK6N1hSfxPC74ZbaDZnqN5dVk4Xi4kV",
  "key17": "5VWnSQMa4XxAWB7H9nHgdjFoTBvaRBpoLuY4NxYRj7JYCjWfL8ESoBZxmjsDst6sy42WM7Y7NB6u7UdWuszFsWJ9",
  "key18": "29Fd3RdGBNxYssLEJCknDNd8kmsFbV864CWJ2bEtWj8QyLptSbce241JAUm6dBYVkS8acw9yhsXESGsipBAWDF8G",
  "key19": "3NYGKYsSujYSfwhEheFJ7jUfUUqHeCALYcLbGErpaQoaUgP8rSqNjoNHA7GreXvrMRMGEiT8WFekZ4ZGxhxvsE3P",
  "key20": "jpbeHdbJdS8R51oiHuSdqM16WGrRatZ1KFdi7dTvemd1SARENvAuVTvRwzj6fziSsKoxp7G56omb7pH2W49fBoZ",
  "key21": "qHDpRd28aiZFtSLuoD1kjBhid8Na6xmVDTSAUZMJkvxPCy6KR7TwBWPd8jmqrb4WsCigkrNHxnXwtY5ybX4pLuZ",
  "key22": "2MFJ2DoPD7K6qhF8qe51CnJYNTVydytqtxhe4SQGmapH8CVgH8jWVJtj9fe3GvJjNESrfEwB8iNyrBMBzrpytUE",
  "key23": "4Py6BDdm9DJj1hcGwQFAi85TQ6VsnN39FEieVPCVz4h3CJf1kY1297N15HH7SHh7LuxYzBVsPYjgznrKuA5EEHpa",
  "key24": "hk79FuUyKxS5J8vKwNgVfrBZPWFfGBeVPEuoZ1KJaZLM3rYSUr3cej7tXpLSvii2WVPn4sYX4DjpAmmsaFL3cNF",
  "key25": "51TS34RcTEX2TZsknvj8fq99LCrBEgijUTFv9TfMgs6TkJ4db4C6c4btscf9kva5ecKBFe1JmApVptfHCqQjhKRs",
  "key26": "2hgh44iijXbr7n92sNP5SATHhTX9nQVc1AUKwrizsWjaEwXQYkE6VwzuLyCvQCep4PfsEeYFhmip5iCCuNnXC6hk",
  "key27": "2KrWXtZt2UKGpTnWUG35rpTGdLqKisMJoHbxMp9FoSeQYfhPrgxMs1pwMqoKCzVqswY6bJJo5p5wMYgDZZq5bEij"
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
