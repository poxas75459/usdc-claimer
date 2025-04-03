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
    "4wGc7yMnWT5uMLF2W2JCTqUUQg1WXXoxUs627Kej6dv9ZdH5HkfBxzPSoBSRgDoR6o8RJhpQDxPvaQDKH9rdQrCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dP8PqKHTDmAKSZui9Y6jXLzqEKYivFPi1Ww3hSPAcfBE51skRUxbvpC5J9K4EFiMcCKV1qaKuev6797eUbRTkaD",
  "key1": "2VEF4Lcszd8wuEFqVM6KArHPLM4oX8PZWXSkCFsaFeAUudNL1ym37Erua1p6CoSvHRtcfoa14r4b9Ps5NgoyzPSD",
  "key2": "4L5U5wQAm6WvDRLZunt99sA9GbTzwxDXaLC5kbfDQoLVYb5PwAoawNicjD2nStihVv1TizmBGUxn7RpqxQjpqWnM",
  "key3": "ng5kcwZkGdicJbPpY2fH9XxsC6rcm6AiYx71ZPBLNyPLd1tC2SFj69CgkDv8PiqsqXASGJ5P2eEACXdU7En4n3z",
  "key4": "3XFyCvKEbAcKDdP6K33UZWtFB74b6jttSiUwpSJuUq7XV2DSS6YwBX3zp6uPK6AEa8XBcvm9Bp5uPVZc4JDnjzT3",
  "key5": "2e3uvyV6yan2KsMLNG2zpJxk2vop9Mz2is6BHPrM6ddmXuaE49YMCXr9V2taet7M8TmdU1qCiPmCpqEh6LEYKfG7",
  "key6": "J6UkjN56bydYN5Z6BDfdsHoN1kNe6d85eeVzQraCKA361QN4ZcoAjLqHTpVngjzkArPPkUFgt9juEYsPaPwAJWK",
  "key7": "5pcEtEp9AW6ZRcmKvHc1cMnxQBs8CU7Vd1VXQhiHkaBnxpAfDudX7PNRcj5GYJyysJF7gK254CvVksmaTjKwtxyC",
  "key8": "CRyatWiaDpNDxmJc1jj18wvNVPmgWDGYPfH2oysBAbXEidw25N9F8RUQFaG7xg5yqwpPQ1FFr3as6FndzttyDZ5",
  "key9": "3BdQ8AHVeHMUEvrvEgYRATHrYiNNRK7JjhZdsZKJjtZiYWHDuzPF2h2WNFLguDNpzJhduGoKNab5qkLzmEX7TLVM",
  "key10": "2iXfFozosU5e1bRAN58wiePuqVyf2qhe9a4zWb6Pgb659TAVqt7aC79C1ofLatRdNHvyYWVRFx3wvG6xPZAzRFRu",
  "key11": "271TavAMXwJxWX4atY3jPjHrruFXNBAoC9hcdMGqjt6hUPmsxeCMHxGuhEa8XyeB5C1P9fo2XpFSAKMWRSKHYJ8q",
  "key12": "4uMc4nZkSmNCoTSWerDhy7HLfvoirSaidA3V6LawXPKV7g4cSq7Brrfbme3xWJLTd1qFMMrwVbi2zDXY12K5rs2V",
  "key13": "FPM6tNMRZVKtQsRZMKDMJm5cgCYvtc4vb8bzjT3ffihHGXUUhAZP9xVx4NiCHAgE8BmCRqKrwgHVVHY1psy3UhJ",
  "key14": "4T7oimJZVKnA5rYeDzgWq6ZcGrKLXxRTWCuF5fd979hivsd4wLNXT8PVo1FYSJewDdSye94WXydN1wWRLU7bpqeJ",
  "key15": "36nspXT2uGsEeUQ7xniDUtorAGHwfryYGGPnQt3Fu5E1YtaGNMbXCrzkP6hNMc7JuSoNZcB9GpctHJTvRBn5f64G",
  "key16": "5qp4EKGkszaM53MxQFSsHus4iwbjurDAQYnp9xuz3EDZbwuUJrZ7nizCX1GhRXSegVbxfibHyRPgyi9kisXJMwbF",
  "key17": "5anpTBXuUAoK9Eime2Pb1QdpFvqp2UwGi6H6x1p84bduKLwVwUNZ9Au5oxwjAVS9qU5nxq34LxjRwr64qJoGEpax",
  "key18": "5u43YrQ5haJBgYK2Nz9TfHBQa3Dn6eYPYMTuznofoBKotudH7EzH5sc4Daat9gCaXA28CgdCoKhrAU2krGs7g4tf",
  "key19": "1UDFnFsFvwQYBxX4aL9Xtnu4Cubm1PSyhcBa3AhUJvz7E2XsRCKmAG6rSPaCQoiiY55FadAF5XFmVbTGWf4dNyS",
  "key20": "634ufHvfrYtkvq741RihiGrVCaBbNQfcD4Uuy3azk6yExiVvNeH5QLHxD7iUrPbqoR4U1cgQoJuh4BSRtnFDN2aC",
  "key21": "4DU2gDqxWNweZV2xhD2Ag1UK9SKezbXjZVrZVWkEd2XivJEhwhra2ryeDAw2o3FyVrq5wHQdgjxddzCwovimh7pN",
  "key22": "2bhkFg5dNRXXrKZ7cCMqTjoRi6WANqbrqJn3C4y6MVmT4uM1LCQbjYRQrkTX1HYcvHfBMBKeaVD5iypXv4MzTv9b",
  "key23": "5ANHsKAYa9eGVPKr5uvCX1G1jn6u5B1QyoWhfu2aaBXrUE7hzeuvuUZxAQu5KrWJaNJtRmNg1cb3WFy2s2ivRzp",
  "key24": "3mDK6jU3uy499LnWWGQ25CW9eMMNGvcmDgZrmKSrUL1naGoSnuEbLGpp6r6xcifBFv5xysALnKNDv1xXY72Lj6KN",
  "key25": "iq6fvd4pHz3bmiLvSipAxU636e7HgrYPM7XFSSDPz3pb3kRDup6w1HQmFkevV6u2qxBQmRJPKyQQ3i3ZNhPnVDJ",
  "key26": "sosBWYjTuFENjG7m8PKxRfSNhqFhDa4HJD3j1HspJwQN5KyGASo8CDfpNKS5bvbR8H4deosy1yRseLW2MdfBybp",
  "key27": "yWXBCvr6McTVzqbKywi1PhWvqxYBuWZgmh9PSSey6QGpcZMY3Xh33LQcD1m22fqBWVGzUvBkaV5pEA31PvZs3ZW",
  "key28": "4DVT8M8EJgNHYDBQnTKomGUx8kSu3rTAjeLemB4BvyehKYzC6jByb7uZh66rGcAtotuZq3ZXrxBwpGUjA3XP4WuT",
  "key29": "2PejdJBQgnRVzQDQU9XFn4P6vEm3EUKVoABBq1HjSFwzQEoiqEKbdndeY47ApBuScs6qEX951nKdXMUSSeTnyvfC",
  "key30": "ZzftnSkw9SiRwwXcM7SFVWNdXarBdggFq4ZP9PMof34r7HQMJQ6VjSLqY72YGu9YjnhFvjXhZfvnxJpFDwK5t3P",
  "key31": "2gXvxQ9ofanpzn3veSgJYsB9cAXBEauw16Aqq34u6ENR3GZeyqkfLc5q3wU1k6PSt76zkDyVp9uqU1gJZioFQRBZ",
  "key32": "2HAvnk4KJc7s48puY2LaDBCiJcZzYKsRPjYE8wRHBsWH4kTU5negUaNZ1e6Py5LNJTHBzzigucTjkmZkoHctRRng",
  "key33": "363mhWk2KU6NmKfquMnM97vi6uMZBkccayEaK6rdLvpXMGx4E4gG5hwVLev5hV3dbmrCeK3uE6cTB7StNv9YZLUi",
  "key34": "5TXs9r4xVWC9QXRWhYK12yb88goamGo1QWFnw3KsrdATnNaF6LdzhapegQsy297SczMxwuBY5kPA2QewtvGfquq7",
  "key35": "5V4RYG54n8JxmeiWGY9RViPkiGTgmKwXeavRSc26FTeskrT3XcUgVuLdxQGDv8zdkYL4YuvgLVdKHtKeVQRAbc9G",
  "key36": "41WY2eLPNnzDHGmqWDd4NrAvBUUfgw8UVtkW1rUg34xhhZLMr81DssQUFX4ukvPThYLdaEykv5FRefT437GyQabg"
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
