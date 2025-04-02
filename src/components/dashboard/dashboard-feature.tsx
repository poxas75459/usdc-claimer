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
    "2gomcDyjzK9hzkE3YDTpeCez9cTjm7ZzYFKvbh2GtCy8vVxkqgw27MoQZCN5G4e7PLJwUjiXtZKrRyy6bmSK4KNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37gEdBLbN97xEgPEq2WQt7Jcu4EpPL584sLt74929HBKrWQwGgHRoLhjRhXRMdG1aARFPMCR14LA7fohNe7URahD",
  "key1": "5oFPKp8gtUBYRyWNGVkWp85JPzZXtWjgzwhjGCjw54LAaFgvPnmUtq4tqCohGgdBvAHB8NozQZEUCqWysPBxvQeS",
  "key2": "4WsTGf5KsrSbTXuDMaanApDybpWLvcARVPgWjY3GepmhHq9zzVzwK3pkU2tVvt8WFNSfTXViR7cvGJaicHsBDxGi",
  "key3": "D8qMAJV8u2Nf4dSQDN5SpTk96orBkXqZUkjBt7QjG9EoCpHDNRi1WjeG9X5LAcLhEcspbzLAQhe5Z9eAmECk6uT",
  "key4": "5SGFWseWQkugQuUqvhAEpR5GVh6QkajQsRqbKE3gcUJnWZ5VRtewQnsy4Z7o4ezDEmDGCSuNwgwUVs8gXf4UrPL",
  "key5": "BJ3oVpqVFcdWrki6MDxsboLPLt3yfBwtuVUGGLUEhqVqDS3vG5N5bBoae4nxn7TmnHBZiHUUmXvycmLgybSX6q1",
  "key6": "3Ej712usU5y8BFHn68YgSNiLppAw9LjFQ9zwSdCEonh2vRENVALBctSXyYBVGY4vdB7SYL8uFgtMz2iu1vWVYgg7",
  "key7": "658RYqkPr6rvxFQzVNeKuyZCeUdwBrqm8Gq1WoX8wxdBtU8RPBQZzVsy3wbLsMkmcUo5csVYZkv7vZYrSRJQfx8g",
  "key8": "5jRgQTs7cm4wKtDddFFELKJYBrzp3WNVDHzqdGbkTBRh5CFqvbXb6VHxn1pJDjkfurWs6sAvw13u5XvMPggZWYSZ",
  "key9": "5fjUqzgFz74JCR3XYt7wAYpz7h2HSLHcE32ydQnNdj3314x6TtHoduFFA5en2NRy4CJ2xPS8nDQRk5KwMYLRbvJR",
  "key10": "4LKLyt1KMqcz1g16vY4HmiQkmiCNkkr76Pem41EnqDpWSVnZEK9QYqNmpMPJSWSiUAkaPM1aViaDX8TfTdQeYFJS",
  "key11": "441CP9MmVm29329F1YUXw5Bp1JXYDBU6WCiJYBuMiJ2MK8oLSPQ1K2mMbGbJGiZPQLDywcCUMUUBxprPYWc912pg",
  "key12": "3FV3QF3DASEBr9MCK31incSwntFQFVKHEteYyyb9RtrnZWrH6BzET8v2mej5rkCCKkYdiRFa1sZuUuF15c9xdk2M",
  "key13": "ZVnHAvYpngF2qXwDbhMmZ9mK5fHbkxQxqQ5i5k3D3SovGpXY3gEphCWAq6EvJJcjGpS5zBrBJMxLK8vRtiAKQnY",
  "key14": "2sjryPBHDouD7LbpfcftPHMvKA5K3zGDsjVNwiSUodWdp3PEc1QDstb9mpxPs25L2agMFRMMpM7zRmasDQvJzzSx",
  "key15": "3R5EDYWkpkmDMfhCCQuLajNFARokcstqp9BEpzwgf4oTEV2r8hhuuQyamKZ2BLbqsFyGS9TJPpAEBpktGMKtVy87",
  "key16": "4Y4zMKWaBNHcXX7iYRD4CYxi6Ya1wLVvXJSjwasqtJqvVu9CHePW2GnNdM5otgRp72GuZXGLn8ZAc9B6gzGWyEv2",
  "key17": "FrzLTMfLtHDxa9qjvHtfWTFTeTThrRXP2svASSZKAtx24eyJUt8X5icoY3FzQDgg25exLd1DuiFppvsWTUzCUDc",
  "key18": "czdZHWuFxAJfACM6NJ3awnG729qJz7ugvcJRAbzMr3rzn5KPKMbyRB9bsApHB7gHZxuQAMTMA5ejRXFe4r5xYV2",
  "key19": "5te3vnkNvW5FQenWHm9shdiwH7djaZMt2LXgR1SxTVTzHvfQ7idTf8s8bRq11QkURzgbQTMwhWtmxGkUaoqyPast",
  "key20": "3sguqWs4fto4L2gaZprgv7F8seMs3AeA1o6PaFgZrYmc8DNFC4gTysw2EKcDdb8hHB3XxVZFLzJgxhn8jdGGua3s",
  "key21": "29k1BTTbRdGYK4Z1G6cF5LiDa4FpVD7k7RBDuL3RRxnrGun3sNoRXvHM9JcvKyE2ZKjShqmUV753QvoWjDZfKzku",
  "key22": "2sBDxuSQo2YQpmKZSjNjiMZqiWVpwZydqAcagudaVM57ctihixDx6Z341qqGjgWkRuJsfZtT1qkcQQYAtRbSYRVw",
  "key23": "5dxSVA5LusNhDCTfLJXfWDwibDfLg6ZkgU6JZ15xgQtyZ3HpAkdmtZiiv5YTTgqhgx7YBhnDRr2ouU7YjLMZ5mXb",
  "key24": "2Vmbi8sUxtgcuXfqcXTWUi51uLta3uNENSuyGzTooW2NTCSj3LrgSwFGaPkZv3ozGa9o7NreErbMuQPHC1rpPyMQ",
  "key25": "3Q1GAjsew5sjwVMDjGoaqXDfC955WbcTvRxM8qfPTJWnRVCqztbnQAaHfghZWyVz8Ry3tsGeDwn6Lo56JUVB888",
  "key26": "5N7WFR3VQaYy6RxGbMGP19Eg2k7PZGBzPLQQXro5p4CnccARPiUffUTMaiHFhRXTVRymjd3iTmv3b8Mqy2kkFmV1",
  "key27": "Wp7R6eTYNevrSEpwfTByjQFZZ5rFQVW7NV4SyNLiZAod6j91q7QZ3ojmZTAvrZzfQwNadikK6AHKmcLEsSB4MvD",
  "key28": "3HaZLL9WWVC1brzAeYKbvjRA782kDZqiofKGQWW8obvatnrGXFq2wApSSmmHvddzvBLEz8dfp932wfmZiG5o1zBU",
  "key29": "58CvhYzvd9py9UjFYLcA7hZtD7n1RSYzSVUn4zxXA6KGg7eYGPKggvRGshHeoTkVKZc9ySSZNkE17c9qTUHCcMok",
  "key30": "9d1uG6vdA8nXBnCQedqqwmqJQJkmKyEAf522Vdsd3MC5VRSTQDezu4TTDFWELps487ZdaSjaiTraLZQTPtebAJa",
  "key31": "66vXjWqhq7ZDVfKguwT3amtm5G1NV1KtGbV56VjwTVi1QWxK4pvpFsVVzAGkRdfsJ76sCRmyxmDP7WedJ2psoUHA",
  "key32": "4RATCVn67DuxW1a3mDTiLwcZFj8PFGs5X4yLeX3gjTbJVaZHqZs1bV58VH1PGU9inBXHpZhiSBPEmhyDsUbFkiT8",
  "key33": "5rV8KvGXtxAQnRzhGrF3PRjpdr2hzWyV9UbAwzkZNnge9PKth7HfRLxcuz3RowDUAsaE4QwWTLNnN5SVphiomxR9",
  "key34": "33UdL1Frkb6vkNkmv6WiHHnxaho2QTqSfce6ehurjSiu6yi6X7otjn14izQbCj7kesJwAMWe2JhxfGubPFZtVQAj",
  "key35": "5r1GKp66cEa4g8Wm1sLPoHko2qYcXS1tnhWQVUh15AMbEL1X2NxaKkdGeqGRebNT6txaXDXDqoqy76iFDfzPqhTw"
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
