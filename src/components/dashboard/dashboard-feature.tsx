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
    "HSHgm6qFqFP6WhmPUQ6VQi1ZrKX45YUHpabgs4wK9wX57LHtZHVxSJfyosMb9vLZGphAV5vzvCSWDqGKCjzfZoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmyqXX18KrsT2MJ6QJj8fqP8pxV9fpPcit2hwc3RsS4tAm85JYqKn2ddnug5jheNEsj3ETdvRyxtQ3sx6UdwWei",
  "key1": "5cVxBfYSJU8pEeJNsQr6mjqtnfGmi1wD26jPAmXpZoE5bhyezVbYFzP3y3bWxegz492EGqzhmEjcnztL3kxeqaWn",
  "key2": "23DiMGMpd43du6PhGw7GhDFPWuzHaTaTczG7mh89vb9F9rML2SAK1gYCQbwrMTsTYjsdVQNQZYWwsB98GN6j6JrB",
  "key3": "31ZKGhUungZncipP79Gw8qJQd9qdFZPAcVpvrqpFtBkgPHCJoxSBoUgJmjUFTvWi6wHy764NvZYq49JamwayHCZk",
  "key4": "4MJ41bcMNchvrixg3gcPbp69K43EA2jAgJq3GsaMAJ4UNHxxFNgniWtC9veWzT3oZH22akK6kXXtLzjUeMm5royv",
  "key5": "5nXSEgeb6Ta2Qdx8ZabRGjVq3GwUSo1aHZmEP25L15DTrFMV6Fn7Lz6NS5VmvWogoqXfFHxpf8GE9kDh9Nomvb2W",
  "key6": "3JCD6NVMsbAnBayxtp3rbbMwseK7gNFwMPwE77w5DyLLzX3C74XN8Wuu3rXRtXSi1rws17hf6Go9MppULuRXnraD",
  "key7": "42vV8AcrzNoCmdwFqma6ACMPhAfiMKGFTjDggi2ABvwxtk9NL5H3Y212dZN25ZftLvXnipMgHstqY4y1AQYTmLd4",
  "key8": "4yGvexn7fgovPC6CRMLu3Cyvq6W2m1Pq4wJ4Syu61uaT3pjKDUu5ZQbv6cbDtEhiUSqStf7fBchsio6KPQohapc7",
  "key9": "3VZ4hyL4d8CLNhypfApYkVQzV7H5g7ihBdA5EwytJejDZEsh9WpRA7KDE2LHtJdedH5j8BRUZZu29CB28jjCCXMk",
  "key10": "2sfzArtXGnhpkfZERoUya7HKQDzXAr3DpbAGGQJofJZF7Le5b7KTABRUxfzZLDT1rbTnE3JKbo2YSNeu7xyQHUQp",
  "key11": "2W51dfAqDASA4jWs6YMEMCNdWRATvgUiqLicgNECEmPqKptc6byop2CPfyF97RfQxHj36zAumrAvdwC1JRM2J74p",
  "key12": "5TRYxya3uak6mubFN25p2z1qeenH8V2hPmDXGeU4Tp9fzioc1sj8vMErDmfJjwFCCDDbt1JqLBbHVRcJcgdX7Mfu",
  "key13": "4uorHo5QAtCUh7VALXmH3D7nnQey3jSeYDFKtybqC3b4jnDBuBumThmatXYPXi8owBhS4RWUm2FrRh8Fd8RkKhaK",
  "key14": "2ejUnDcGe111ESiXDfdadPTBGvgiC6cb9PRgqW3bYzGDdzR1MXSw48KgmDmPqYaV3EsAf3Vjb2iWQhk2V9eAmmeY",
  "key15": "59Qn49qcJDE2cPM16RgFHMEwt8JACegqKadLB2q4LfspE5vWU1Q8ZkUAHuCX4HVo9BaXNpWPnWcvb3jbTVKiUbgh",
  "key16": "4vhmenCpPE8rw7ykE2gfKgXobYdavvhS6rcsPGgKeeXCnSBR96p3zpEksLN4tYwt1DFZww3v1XbdoAtmyosKxeA3",
  "key17": "4UZsuiwEAC1xrHU3HwJdHs9Hn4SZAwhdqPSWyTzHSCmVprRQpdGKATSsDZPkPDvPPNgTbHwBBRTD3MbhHVwdYDYy",
  "key18": "27SRYBnZfNEM5A8mkDkRkPM7PuJSrzVPXA2GEJo4dhMtkACad3DoECc9szYcNdQSPoykiVCjUUxkV7KwnyxPsgX3",
  "key19": "46PPqMvFNoqiHY2NEDBHhrVzJPJgsDgbA92ZdzaumoxgBWQwk6i8t1w7SKxyRmzAdfKkCtPzB6EswL8Bv8wXftts",
  "key20": "2CGLzg2SVoCMemFKhH9NgWh3F5WA6dPtQEyVSPo34zufATKcQ3eb2Gow5t28t6nUzxWDUVkVGSLECWEQqPCsHfcZ",
  "key21": "2Le2BNqR6K9iKpJaFk1u6v72nXjzKBfkMaKPWWoxn4Quby63PUFiFGQEW5iZa3C5Ucrqrmsj4nf61kKBRcZ1Efsb",
  "key22": "582ciLXC8JP4rsUNd4hZ3N54i9ofXjTDrJYYr88w2LdyUVBWsFNrpKRkAYg83473L8Q4YNQ8EkNjL9qasbcNRLzi",
  "key23": "4czDSyRZ19mTEkiEMRewCqisZ6tb3VvakKhD4uHvgdkKJoBw4J97YSw3Po9qX8e8nWFMiYyx1jLyfWJyc14SVbni",
  "key24": "4mRBPzDqiGPvP1cz6td5W6f4KDSVeTHeFgDVcXX61Ckyv4Qnm7MkiUN5vP4RECMi7GhQ9mnSUWqLC3VLkvurH3L5"
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
