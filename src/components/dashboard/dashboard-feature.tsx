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
    "kUwpmMLqRGd2DwtPbhGQwNSCz8AGtMCez5KByJNA85oX3R5k5x6DYMzuk8bC9BdFakcHC25Xr3QAxV7eYGLSXjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kXSzuoEommZTf3ncSeYwL6utWcB9Fwvm1BwKAaLgivCffweDD467iPSVcH4nNX42yFT7GobxarvRf8zqxA4gRx",
  "key1": "Q2egqYgsuLZh73iceWkxKLQZznXGz5c2HXAEkmc2kzqkqQSuc6Lpa7VJjPLY6dURAfRPzm2sj9UgkeiRZzVX52P",
  "key2": "bJ1w9BKPmk8AcPHx5kJ2AGZY1acquyy7FVevqrzosTAfJWM8bJ3xFJGUAm93EsfeMPLDp5rEth4MznR1A8TptRj",
  "key3": "518LF1SPx75b3JdznhAykKd9akCZuvyGgTL223cyPeMmpdwzJg7iCzsTvhixvtuxSdzEsjEQHreMm4uU57sjo2CS",
  "key4": "35Mm66cG55nVr33NN5tmnvJnSka56wRFX9BkWMvWt3svcaxSPTMKNuGAoF6inJSmSCfWCdZbkZ65Qjw96uymtBJ",
  "key5": "3YKNpw3Rn3eyQMywJ1mraXnzyTkhx2PQqeyqMwTEmkBMr7Ljv1UWXatznVioR9XMQa3kWLfXPMkSqA4WpCsviDoM",
  "key6": "5GQJKKuZVa8T6xVP9qr7SvCaBUDKJuC7UeUSgPxEHZhxuSRpFhckv42P325wBQvcW9NU16iPXdJY9zNPdvijNvs2",
  "key7": "2yZoxgNzgWjzWPdW5973KqMa9EbFPEEkqFTvpPvcRvqZWSveH1F3V8wS1ZHj7xezySTQsDaZ7NmdkUXjHVAqcZvs",
  "key8": "26t6Dc28rUjgsE3twGgjkDjrDbqLB7TA7YDnj9DqN5GUjC5GWMhWua1ALAgMC6UeBte5axjWqUTFBBNTNWiUv1EW",
  "key9": "2ydMXdkMycbDDhzq19ZFf22U5DJ1bktt3TTMenWe6nvVkdzU7zCbmpxgRpnswpENZvtppRVUP8gHjq3EPPaHXb48",
  "key10": "5XeVCBN4Mn9Jb5M9z5CXr5eVq1vTHyHAPVRfsoWqEjEawHh1CB8vRnoFFK5oJXwTUbQ53brJgMpCR4rZUq4PTuPA",
  "key11": "3u8cPEbb4D16csMXDqb7zbJ45DimQTspgMiT4PWiCJdkKedJgy12Pdg46rTgn6vAFYB63NbQJ7bFh7PuTQ2AVsmx",
  "key12": "3uTwUuNi29LxBuc4krCeBrW9fPXCQUR7HJwL9dnGPtnHa4srzXf4rJgyFsG2FjeBAuTHNGSGvsCdxX1exnx5Sq51",
  "key13": "2vg122FtEzkv1br98JYw35DD4k39zFdGjfU6C4Z8ycj6wBhcGSC4hii4buomekdfE8czPpb7MpY8cGNcEu3mGXQH",
  "key14": "5ro4kkmwFziH6Zp9CmbhCwm3iTvXh1Nt5csX1M9hcNg1JLPFSJ1PpYyvVrwvGAViu4YXrGNxsLCUpZo1MKzZZE6z",
  "key15": "2Zy4Kvm2p7zmhkApDiFN45wSVah6xMg7TsNKkWsaRoVbTXT9nGC7Sg3bqafHaSwYRjqdadrMCyFEevXWdLcZXsdx",
  "key16": "4ntLTnaiHPiGxqUqFtBWe9CQ9NSUcxRpENi9Z1VPyeKAn2mtWuUQngXPjNk7Tmpbdhd78JMoSt3ZeEseuNcB8czR",
  "key17": "2zgLRzS2gUmNB5QBQPP78Qd1gNihrC8K6C24MKpASnuEo2qPCxedVJeyECcL54nwetT7G6guSjXsAHGw7GfK5V73",
  "key18": "3egP58NAUavyMZ3rTfBjt1jQiJPqYDbEELuzw7yLhEnigRWLMDY8YQaMAw6a3pJC7V25zEBPN5HGteANZPT6YP69",
  "key19": "2Jx7BGcHZqTpqMH9CW9M3kC2SzSFPDSSwdNVCnBvURGaUoveUUuCPi8P2bcDLtaC4TzscMtnB9fXgLY4TyT73iXH",
  "key20": "DNyZMAgqo8VLDGUSVf5Y6cRhPb7pQvjbWq4qtNwuxJqTwuqLdD3BHvWKxGpQAwfd7QuPCyo2KeJHWndN6enLjH7",
  "key21": "3E8o9unkBPT2dLdC9Z1KVuapij5FEi1UWGgDUKXyP2tpT8JHTVJTsxiZrEemtEbYTD4GyM38Ugg9KL3aMRoTQgNP",
  "key22": "4y4zBBhNafLgPmHRTatArB6PnCc6eR36JJLtc4N6tUTjLAXQzBFGm2YJoUcaiBsAKE8tnBKfmFikcHceCyWsFRTw",
  "key23": "3Aj9rMLz2dkfy4h3u7pTvDhEeXECXidh8ruJ8xUDzw5h1zrHNMihtTNdLmmbMJW9GDKRvWjcbyJBtWs2WSBwN6TM",
  "key24": "4zMogswfc5M2n1DsrPE1bEdZ1pfWAfrHUHjTBpLegNchhjygvYUTTZ5iBEZUWkCYF7UkLET35Fy4ZrrwsT2BBmjX",
  "key25": "66jipjAXVNQ24kfjUybaUUKBvws6gpTK2FfvtuspNECoE8k3aapdo2nX5Py6Gckd9QuqhXf686cUxeNAJUhqg7W4",
  "key26": "SDEPAu8yJA96YUC1d6ggzAPh4DC1BNiFVE2mqAiLxy6fVhhLi3JzAWYCfw1BSXBQe236kay485rPU5Ji8pEEJJo",
  "key27": "3a9f5nDeBL66z32AhFwF6KCJfw4J2M6YMxShhh28BK9a5EBztvui7nk2Fo7PpkKb8i7NaGQH33V7355Vs5EfZ8TX",
  "key28": "dbAjp4hVRZt62UfCrsGyWh7fgWpWfwXoW7xBqQTYHNFNuroYwEFzKSBjYbuYp5XkDnxGeBSfr3WdNjFrRZ8E4te",
  "key29": "4ET4moQvxa5WKKVmJNy1VKEGDbs6z58BHpk4XDNrN44DKKiLiesQQXTaZnEgSr1yArnEHvk18x54oA57saBzqCe1",
  "key30": "3UBvDkoMBBWSY6HWhuidVJZdADyfx46tE691enDK3oCqWWLAsR1ctkBqcAeg7n2Wdjx88wMtoV5fa9F3GQe3YwsS",
  "key31": "2jhYXmiJmbLf7qpCduGNA3EfwSVknsVvagv6BpVhHKQe4xFdaqr8AvL4Lwma3ZvCZN2XUqDb3XXtmkb4yJkaosHk",
  "key32": "43EgUQBjx3PXVYWvP6UgFj5tPdnYZsJ1WhsEoztmnQX2eBaMWvoj7BTPZgFxAoY8ARAiYXyS4VvWM2WSYsH97C24",
  "key33": "5GVJ6ttCGsGDk82Hd1ux8zLhkFFxvrAaBTnce4uuAYyh34r4Dqi3Gb3Q75g8Rv7Cj1M6P2pM3LRz7wpiisyynXiQ",
  "key34": "3k7Ru7KHosUs6mkWE9Wp1tThj5TxzJaumMFno9FtqfPZuBQBf9CWAikqHLYydJwzKAQAS5fAvKor9CYCsH76DdRJ",
  "key35": "NvnEt3RTAwUMHXnax2RsMAJxyRwfBKMcASxBgWugop1jzGHamZFrgc2sQjWbTfpANt1VFVroxW9VEeibdUJgM2M",
  "key36": "222oxXY7ph4oR9AzFyPX1houB6Gz1zbovxgLkruKXErXfPVwKT4i7gK9n4qZuTHodat4r7Qd5ubUX6YmrmeoaEes",
  "key37": "b8u9hCbrbyG7NS5gbe5xZkgxd7GQV65DKbD8S1nSBUAopk4NbbKBfizwDuv55Ut9MnQGsDw2gMMRAbSSNcsmDBX",
  "key38": "5HR3opCvnoS8cmAzpvWbQvQ6HLXz2quNspJKPsFwaSa99gyzZCH4rypqyykH5UMmKXePZAXWLLxLrYKzfxaiXa33",
  "key39": "4evAEryznHbFV47778MDg8D2f2iwL2Bnqi3c1D7r5eUofiQw7nZ7VaPC4ztJJMYkHWUDYzUvB5ftKx8uCwDMD9V4",
  "key40": "4XkmzbrLF17jQMmXTDWBrM3ftiwFqnrRgw2YAjEyeqcGV5CFEiA6u7xnbWWX7QV8FBLNSJ1SfTzw82L6SPsiwXj1",
  "key41": "65FEcvR3zq4UnxWajhNNZ4gKBzgJycYVbawt3svPWUq737R35iUAuoJof43iW7yiqDKGNDTqM4gcXNfwG8zr8Y5",
  "key42": "2FsPsdEZUn4hcwwRrcMrBFc87ofJbsTQf8KbMnKuL3GTxVDztAFvqvkVRz7rZLw1kcrETwufD6CGFnLTQTm9vPjZ",
  "key43": "3xmsgfqYbdLWut3CGRRvEHYj1sheVo39vvbMudNwtvchnmu5YzRTCWn6rKTLLG7V7QmyxbDo4wTxnfSz9ECkFSGE",
  "key44": "5qck3XrEuLMttpvPoBjGUiapfsHoPfrsJ4xKgrAH1F2vH8sVyVLK3mgCu7Snxy2fKuLLBhdDQczCtGvKoi9qths8",
  "key45": "2yTEMsvEzRimPygk4HxAnn6diTQCQ8CckHzLiyWse2QLBJjh5LUAcSC8RCCiLknjdHYYoqgzhfXbY6rXRGuAimrf",
  "key46": "isR1YRk9LSRyjVdsGtM9BLFazX4mGvvVAJuGdYBPScWN2rmDjaDU4px6Srxxc7SBtiLgozrJAoKk3aEaGoBGypx",
  "key47": "2TR9rBCNoN2MnyWHcb63pAKLuEzwPX5G71fGYM6qffpYVKFGxNGNFeY5QXKyRt1okcdJV3JQTDEH8pcrn2VQ5Xjh",
  "key48": "371MeyaoXJkRo7HjebZkS6apWc8BgzRER8U4bhARq6vfjvF4bMFhXSsHytbqriJJjUVndSZmjhjUXtxYYKKubdPq"
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
