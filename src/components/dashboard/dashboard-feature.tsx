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
    "4wGCTLJprth9hFCKMVoY2P2Fe4MYMagpcV6qD9ueoqAwcc62TnNHqFCzAvDBDQs6giLNpkGsS3dp9tKQuaKMdsE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msYAQSSdfxhhhKU5EQhcXHr5oKNBYHsVCBASSEA4hPyEa2trMk3WfYz3C5Vsni29K4LHZgqejfWfcuGeRiBLw8L",
  "key1": "WB28K6eMhHvbXDjp4RtYL8Jtm18LJqCPsvG734A568rAs9gkqLPZbTEFoNrP8RcvZxCDEUnKMCh8i9DjcfyZvun",
  "key2": "5ubPktuPZxTKpcS8WgjxGAM1RhXcZEz7jCv5qzEyJggqbEkNnyBTF4zmnHoSAi8okCohgfkpi3zWp5N8C8AXYuh3",
  "key3": "3xZVKxRBHcyidFA18GKbtJ6ZEqSx4gSL8sNoE3aQWJZ5xTL9PoPUZ98m9e4aTZXV8YQ1e5DEAQcTF5JugUuHSm82",
  "key4": "3zsELtzoyA1hNFYWKGwrHvKnkzFvAPVsMpw7LLo9ca7cU2xdtEgfQnaiusXYsFqzCezv8Y44HpozbNPYgjG8iJuE",
  "key5": "2qYNcjTnYFWmcdjuZXm7PUVkWz3jCLD6yDTRUVUxgMpt9duo2AGzQZJEyjBUpypA74bJ9vpvMZvDsT72CxPj3uBh",
  "key6": "ubuLtP3TQWUSTgVSSgG5sedNSZBuBVu67gjn2bb5Z8EWCDUcvCpw1TbU8YyLdBQXtctSzQJevVt9aS7VKVGqP3U",
  "key7": "B4oPjqgrYoWup57ANxK7w6Q66e9BDjtW4577FTE4hN6cYMkLJSMi9ehZuFWxknsH9qjT1bAXc9JbsPpD1HN3MCA",
  "key8": "4qGLbfYi2cFe8c7hR5A2JtnbYmD9YrrNEgPHsfUKcThjQMW6Zd7kivp29n2RqRKgaeWNWtNKBTv5JRAkeTCsvrYa",
  "key9": "2cHXM7QaeYxX8jAFUhLbeqhPHPFgbSLKaVD931W5BXe2JE6xvUEYHFH7XEbG8mGKkGph1k69FZPBdXE2ZoH6Jxt1",
  "key10": "Hde4GgUD2jgtRbc4SWMExVgHo2Y7wzXsG4iPQTQb3k9u5myj92AM4YM1bQLEmg12AVMRSUAe1DqzUkFE7eCtx6T",
  "key11": "3CQC1fzMwVh2cNN4rSdTGCy59n6hAGubLjEJGNMXURPsQn5ZFHnzz817NoMxNUbdBHLfD8wgvworaQmmk33Wun6C",
  "key12": "eHNzbMsnzRJq69pYEoX74c8nFUhVeBvrVYShHLo7tsjJWzhUwgpFdtBScXNs98JqhNvC5oRUYd7h1rWBXSamoVZ",
  "key13": "5WfRWSWCfon4hRKu2HTv2Pzqpq66rH8s4zu9aAeMrgDxCK33NXUHACeRdDsvkG2z6gXF8SARJe3XgSuQzFKWypP7",
  "key14": "2MS3oESt91nLVduy81Bs9FWMrnp8xqeNgFWuUrqbSG2DGU8vpCLpqzEypJWASmhhAcMFmNiECzqHsYZWpinWjkZU",
  "key15": "2ZejktgnxPsGqAAi6HbJ9etmcziLrLBacedaqJwxFan3GYEMCwYAsX2vBsFJgY5WRcurWT8wVcUZpydF4KiMQ4cA",
  "key16": "4vydUE9B3xq3qkHSazJ3DHwrPEjhwiVNgeq9hZFBn34ZMVoqsu6EZprAzn3JCRy9Ac8NRJuZcErJdMb8nyfWT8Hy",
  "key17": "3spnx8EpgCr3gk1MUyWvCVkRg4q8NSPNLv82RixqVVivij1gs6UDwv6gYk8gJ7UAQJ6Wg4KnYVXdaU1SDwrpgHZC",
  "key18": "4BoFEcbknJEr78iagHGMVWtiYfnxU2aJHsk6jLXnjLSRrprddwPfy3znBPjtvDSEgNQ98bCXFL3qvSA2TD3xt8y3",
  "key19": "3CXtmcfozSyW9Cc6ttv2ypnmEP1SJwrqKiRyL7QzpEtUP86WpMinEanDqsjiouAqVMNn9hsQyCegrJDk2EmL4H9g",
  "key20": "2ZAF8c4QtdNsnpne5WZk6afQwNXpinavcMwkVKhqpZUrVbTibbeRmB1brJmwixEzZpTXN2WLjBQNdCwuexTcZVGh",
  "key21": "5NW3d9Fofnsjk4LZ39YoSzixQd4iyim6MqJK1U2vzwL9rq76Zi1asupsxNCoEMsHtnv4Ph8PwMjQqX83CCzgEBEC",
  "key22": "2hXx6oNr4MhtUmJY8ckGWsMA2DC9F9na27R1VDa6SVbwqi8Ah65fUKghfSbHHM3arzxWbWCxijcxshQ9RXhFgRgN",
  "key23": "3TJBqJZFCTqrJi36h5TW7vqHZ9irxJAKmh8fnX4k2XHNCaQo71oVpztPjd4n5w9vE2aLURFke6zSz4Fira71ugtD",
  "key24": "49GAYgxdg9Nq7DnemkSokFeRvyCw1Zs9wvxt3ufB962ZhKhHogP2BScJVMhCyFp3uUrnCRuzRmJPuDuTdMmweRqz",
  "key25": "qd5wB6Kyguz9MiaHnkfJhPU8ptQMgRfGkyniGXpVNpA8bimmjfQgce8soynY2VW89KYfE2X6SdS9ojjkJmjue95",
  "key26": "TXUe6N5vfBj7XVtzjPAkuKHWT8jnTuUwhGRuqRAcURGMGD5w892G5PXRgFRr5R9H7zDkUgvcvnH8FRDCqfmGPWt",
  "key27": "5eaAsb2L5qUZzTqopwHy7yv4pBiH9Lw8j37kt4CM54TyLWuUP7keMiuJtwULaXwiRvJ9HxiodjkWhFTNFoumGJt",
  "key28": "2CWZ34Ng2SaJkgNDv9nHQGTDuujC5yBKWyD6RTX3DscoDtxr6Zw8Hpo44EeqhXUMKxuKVRoQrkfMh4RpcYp3G8YM",
  "key29": "nvbrsnR6Ym2qVpxofhczKGLmMoLgPa9Wy36B1y5DemeFpR5NEG1Cko7SLHpgaHagbqDHmKZ9DCwiwUPVmxgWXxf",
  "key30": "4Kk9Z69dR43Ur1nA4w1BJcyDKpfMj1KSu7AsG1ZmXtBXe8j9rgMNFV9xbG838FbxUX6ZLkpuqSWWTSL3iVn1BmyB",
  "key31": "5H3BZjemrfddniNDjXjTvEUwaLo2EMY7Q8oAc4nojHRUMAoutBNniMZR68hxjPcahXDFqqXeLfyFduNLvedagEt7",
  "key32": "Gt2ivatW85y5L6FJtYbbtbpbsRNRqoYXmUigpe8USJ1w2uPnC6MbsAGjyPT2jP4wcQw8NJZe7o8ym3ZuBMZ98u4",
  "key33": "22EhXXXKxD5daJtTjThGuyAGkzZKMZBqci6g52ph4fWMbEMsyAKA2A8xPt9wtMw8hzzLckicHH3NN9S8dSY8KSir",
  "key34": "3w3SQpUPaHgVvWmUDqeM979BRuGnvmzb87Bif7MxTCPdwrHgc8YXjKCNeHKFdRfrJVmTmBeBPY13QVdVw1WQy8Mv",
  "key35": "2znc46iA4xswps1uDmCMHZe5Hs5Au8vC7MFdXmT6PZFRVMNZwEk144kmSufiKHuguieUX3X8YhHt16ftJxsh1ukH",
  "key36": "EvmTdi2NfRcttqrE8aiN7iqtJrTg9q1cA67VkzyqDX9krppRoP4Kaq9njVf6hddPj1KAug3qSqfV5sLuCxo4gs5",
  "key37": "38ph2EjcXFyTSvLBvjye8JMxf1BjSRDrUfCCgqAyjsp3euLjda1MTYBVdfognT2kBysyDZUypC8yBRUMc4x9635a"
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
