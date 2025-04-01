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
    "2GdoJim1fErQV6TNANgZ4SAAoHZToF3QhxKftgAMtUJ4HR3HEgfUxgKnQCrQKARY9LiUdaBgK2EtXWGfX4Nv1H8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EoBbNQQGxPuxyzASJGBftk4wFZyuhRbZwni17cr5T74QySMjeM19qyeZtAEmgNY17mtgzZhYZjT7fJeYb6YKeC8",
  "key1": "294bsbi6LywJwv8rtPiSMc2RtgPBBYNs9WJS6WnT5gGpXAkZGKNFwW6MDNJvyCAaFqoqpXDA2Q3NoXAs7oz1uuVr",
  "key2": "3G4ccdSPBFywVsWk6aiPRpqcQ8fyMwKLcmy8D2PbB4ADVxsrwLYLcKC6MU2UK78xQTZHLQYFEzwL5dgj2EbTEr3d",
  "key3": "28e5zjdnj1CAXDsFjZHzxZbShq7j78drhz23bZaAoQ8QVsaMiA234kGzsqNM8zzVC3Pv9S8QLhS2zbf12xAT7nXc",
  "key4": "2VP8hoQ1UFSeA9NmXCte6zuUUK3k4HLaAkvxABNUH29SDaHMW8RuwFSX9kSwJJQN8k8VvgRs79Hr7LGFsmAMWb5b",
  "key5": "ryBJ773HgY4brghAwWbh68wRZEs47Rm6LXKjMex11fRDFTbc37BFMWaVeWjyGNGPUMEzE9fCMsdH63ZFHarDym9",
  "key6": "7c4VmmeQxWDhkshyQGTr4o3fKefjEwLzefnnhbeXZVE9WhArBGmpuxwsYP7weA3MpAfnVwF8hNcd33Ne5AX8u3m",
  "key7": "3KUrqu3VDpET9NAukBqsRCNZa6FkoGGgT58Pzpog4XCkEeuQVAc8n7DjMkuMSayfk949P9XpBQxA7wG95vdB9pmD",
  "key8": "4Dae6kbHWH9bnq9U6VCDGRYogt8VK1TGFgPcXR52Nytixst2nkv8dk9YJrWSQGAoinCHrt4isQVkQSgX7ZYVQvEg",
  "key9": "dYT1iGGBcxNBq4Gm4Aidayz8eWhiooDQLw47Z7dUWx5wrS3bYrzrNS7TnWLjVMmwivSZTDF9evVLTQEP7X5BFeJ",
  "key10": "36dpBKdY9dLY2XEsvjpQKNRWJJU5gVJFBDiZj8dnTjwQFtpR9kfH4j9MkcswmDGBmej21yhJER5WWJhfL7w8S1yR",
  "key11": "58eSU8HKGBmFY6kPZZn7xxV8EicDmqpeqqCajjvU9QkDmyGptRPs9wzvbo6mz3ZTmfMTb8tELkwEX1Rhq6pTTdB5",
  "key12": "5ExdPdpXDR49oCoikJMv4L6REq5qGxzJinAdBj3hGnrUA5gZKnUnTDXB4HnRRQE8gy2J7vbfD1TVQUekuDJrprXW",
  "key13": "46NvVTtu4qGidHy6LkXf23qC3rgxkMo5jyBZicg5sU1LvkUCpZ4kpBLvt4yJphfTsynA55cP1Ri1f4VkWrFdev3Q",
  "key14": "3UFMH3BH3JUiATtkYP1iVWB2evbY2jPDQvwxGKN182p4gntvCgXzD5ynkDDjHzD9VRS2WcRQfVVV9Fv3166U113W",
  "key15": "mxWzfytizzt44XJyEjZz2iEdFq7TA9YukgxScpsbSqUPxw2t1Sue9WMvWygsgjSvomoGGEH5KXDHCTAzpi3QD9Q",
  "key16": "2o2vRvV45V2HFVmNw6DFcoJ4BRimchFxfNnjnJZsQvw8fJmDgNEv6AoD7md7Zi6QU1vij9qfA6dkHrwBCwAhgMG5",
  "key17": "585gwVhgJBKDVc4zK6NCA4ddDXSZSpQTX9TkGnSAjZM8nLN4M3MjLS52aNcsrRxYEf713rSWgpMMCKoxc7BVi5u2",
  "key18": "3UcqWBfjXemFpsutWqHk7ApFRAmVkkChuZuVPMXp7jXA7K8XjHc4E26ecegUvtw6XJbrsVBU2Kpw2nJ7jCPLiLuZ",
  "key19": "ZuVxhKBxoNM5ZrrLFiSeCZmicPyBwk4DFYmVJ88rvwRzNoMMqcUMLvuofH6ZtUyqqeRUT3KaF3KveswqyshDpsB",
  "key20": "3SDA1Eb8ARUxa7wEXvGvLuZqH71WZjskrJsPcyqUK9tk5NR4fCGUEqgX7WrwAg1WnoBjYXEFocsncBm4frucq6nF",
  "key21": "5nUipfYgmQPU79HksU3owvtyqp4KKMURYCapaQJfyM9ProEYXjwFNiPfvRfkhMeUbJXKGPofBy5RyhwP9anwPjpf",
  "key22": "HARWZuC3TMw9dgj9zJ2pKVBrfU2DjP7wfyxYyx8VqxGPh9ZpfLfEBxEGz8c9XVdNNCMEaDufv49gczGe5ZhryBc",
  "key23": "2p9zFUkibtnbo42Hci1yq1jw9kMGwVFcAEovFRASkH5C92UXGrSZwTbBxMY7mG2wuPPcm7zogo5zai7YDV1AsB3o",
  "key24": "xHTCenDy5aZ1Jm5xCTmryWsXB1uPtkHF21djzp5WtUfhzC45jc6D5ng7F3xYoJrAW3ornQPjTTBXewQiX6Fo28U",
  "key25": "5ENKz9FM26HMXzZMwt3YB5nTbf6ruNzmVWeMaGNWuZuGKh6fY7a671vhbZf6VH8EEqwYE597ivNzVsfmhHCnYZ4W",
  "key26": "4rytFa7anHJMYQKNmQXLsWxxcSFLEbxa3JjjWLtvYQSiiaSkYAnbaLqHfwGja3KfQmLJBKMK63Ytpes6GdfdqazZ",
  "key27": "4Gfuqv2LuBiNvNJCeYLc1xVjwwgN4R2R8WtdETx5YYvtjAtXaoS6cqowE8EcnRRs2qwWFNZqKVUAeG8ujFk16Dio",
  "key28": "f73V9UMdRT77GdhWyXjquvwaUNySegtxRYLqhf8RVEVFqcEExX21WRyvoM23NsYGhca4Yt1wbPfMWhjXwWJ6arD",
  "key29": "vf6UooSBYPy16K7En2vyMFhyEAET1wGS9dNk84cmrZJGTyR1CmqvWsAWbTBVjpE9Sodmr2BBuC7dWfEjP9qvCLS",
  "key30": "4VLb2tfEtCUmAbjVVcC4SwkYZTmjcpm16qmtQW7vtnA3KPfSvVu3Hr3U1vvtKEp5bm8dVwN7cMTibi5wZvunhWSc",
  "key31": "2vu4frpMRxaJ7BtRGt6S4xSNGKNLCRaTb1axSSCfpzVCtCmGGUgtJRo1363zYRZnH8PDZAPWAHTHKZRUU5AcRos2",
  "key32": "HzSrnte7JdcKwSa1q6rZDhzTFUA26YP5Q92b3n2kCqPPkKJXrS84fT58b4xZHmdQ8UHLnf7oi5dDT2rr8iuR9e3",
  "key33": "2wg79fH8urk9dkpN1Wz9UUy9vfgGqx2oS6Em3nN5gbSiFifTj3ac8eQT6QiXqZnLjvZzGjCUtkcFmfKWK2vaqsCC",
  "key34": "1G7gCbpPrDfXSoC4V1wvupPgvu767dHTKGThPwZCjUKKZjPchWzt8KTcdSwmMWZMrRrQD2qJMjuQH7L75ZRneyb",
  "key35": "5TXXrLqr1X81g1hkgVCTcubG5yhTyHmdvkUG44Dubskm1ezJ6yk3DJdtYVvqRowDn8qo7LeuUXZcyB4An4maFiqK",
  "key36": "3ETw3TGbzZ3cLeuisKAazPPixpLnD1k7w6yYZZrtQoqP5Re6ikQDbjSdkcqqwfdo3kGt9AvUkZ73VD6qBh2gy5s9",
  "key37": "3ZNb6gL1Rq1Q3SYzqus2yEk2uS9iYsSmJ7jBauNY2M1miYM5VraDTWGhu6rZQM2ssJSSpHJ1YH3dWw3NdXrSM7Cd",
  "key38": "32hTus1DJx5PRwpanwKoknkNBfWeFdYmUPAT38GPPvrXUAbCALYb2nzxMtuH5TBmZDJS2QfqqXo12sHxeG1z5Qkw",
  "key39": "5mrRfxrEUpsfWqUtcZwiXb2sGNepHbndzNaXzgR8EcMB2P9G3WRSoeW123tsD2naY4ToF4V3HzprET1gEP1YYhai",
  "key40": "LZKtzEqARhp8EAdF9eEJdhCwxiG1YWfJuoupJH1FBWoHUfKm6HpWp6NdPGK3WZj8JGxDwpERPTBc9wjsoXQq6rx",
  "key41": "3SVh6EMch3AtR3CcVZdr9FArnum12jdtjzncTprMYiNXvH6Cjdqr4QZkvejgmMxF25LjrVdtxuR5WfQFTey7ptqr",
  "key42": "3BDQ2BqAKyXVcV8SgfKjwg6qQ6jcQ5WFQBcmkAqV2cHZcn8pKTobyc5AmBo3HZ35fb3pQdGnKqVgN74S2kC4pFQ8",
  "key43": "2BeYLtSGBQEKaeGF9QfkT9o5wnZTzTsDtVTpc35eQGX2tFEghX8ReFi2sTCxXXT68wNjU7E4TY7c7YbuC7vGPQnq",
  "key44": "3vR7kFzifjhxkzXgaB3j4XTuoQBZxVHU35VqyrUNPWEaWyagFJjQCTXfiMcdRRspcscWyyHcLGUdzq1doLz54Csc",
  "key45": "2f81eH2y2uynepqyLBdH9SHAqgtP9CnC3iYpnW3bxiFoXyNmX1r1SfNHRvPG6LCwmYRCeKrsue3wBehTALg7QBvD",
  "key46": "2xgNQLTEgwT3KYGJ3NvRDhtbsF7J1wvvqX3bUsz9bAMLakgJtteqMoA4SUtu48ARAicmy5wGi4wREBapuhXZFrkB",
  "key47": "2AZdLWSPHvpfNezFr4SVRbQ8cj92U7yRdH8gsphMPa4PLhvZcfwbkh6NQFDUa8i6CTQma3DpJzey9XQdB3N5HrYw",
  "key48": "47GXj7t73GPSYEtpUAyno3C7Lz3HgZ7pUYpB9rxTG2E3AzE7ysY6B3sWYrE1wwK3Bgja35bMVcAeXo9bUjss4ZZq",
  "key49": "14bwGNNV732cW4s2B6izCKPLSrL3sN98dYhbxXArcAJJtT2reyhLNpxLQwP2efkjBpVj5PBNf3tQe7FEsVvqerx"
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
