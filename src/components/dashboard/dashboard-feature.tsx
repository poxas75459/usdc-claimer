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
    "4NUeRJHvgwPjwd6JEjG7ZomhsvaRBYasyoV6gH6EU2iYkrMYDXFmKPVTTT2BQ8LeYZyx7gV4r848EFtXeqDHLAEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkbW9wtJpLgvRje5PfgiSJ2Kujay9pwx6mA7J2oVXs1UVBMsCbzYr92xrrQxLGiEwJFTSpXTSLYVAxhMfFLH5qY",
  "key1": "ufq49rGFmYrwcrNK9Ph65j5ZEDjoBqkokv566VBeRovv9Yz7yaZJ427tdVY5QGNAv2GtwyHELVVD1Zoqpp5pXN9",
  "key2": "U4y3gmeXbBLiT9LEpFavgmnvHy1FqeWi6qEHBXVJt3JoKuFzQzBZgvrRtGPcewbtKY9qEHsqeWJT2UuMjDtirA9",
  "key3": "QaVLhGNLEx1pBGD3HNCQdu6V398d3Vau2fg27G6bVUXLZYQwDMiFUe57Q7TnmmJKJrBtPa5CesvVXa215wrUgzJ",
  "key4": "61rwhiaNqn31sruCdzocquiM4598rg674rEt4i5bRTYdqG4FnTNHX27qtWJWydK5hs8veveCFwqNXZsqcmmGfo7e",
  "key5": "31grmijUc69G9bSgVUxYYwapEFyu5KAj1MZRBNoweRpR8aje9pdtn7ZgVbw2awo9FK7t6ZaE2UfYh2m9r7k1dKJv",
  "key6": "26P4z8sv7cnNtR2zX3LkquTN5f5bZKh1YpoEGrtmv5vaft6iaHAowMu9iHuXAvG31suBzkEYnxWJsuQdPvkS5En4",
  "key7": "VrYdgqyvXUsLx3pQFMc25JYJh38WUChj6vdqmRGvQ2zjB2L8aiymuDk95M3bTb5r8eWgKCSjFBLc5393G1Pnvyw",
  "key8": "4kw3U8eytN1DZMgRQH6RmVRKvWCei3MDUMGjhEBK62jt1nKknhMC9sE8unTuck3vrJx3Tj1x2pp1Uagfx966Mr5S",
  "key9": "495uSjepazgp2VBr1cwD4ayvZa2TUbcFWk3XtXgJC1u1shgoVUKng3gR53CAqKjfqPjKkb7yTzJuYSW5NK9tmXuv",
  "key10": "2HEV1JXdtgkDVLwuSP3fk8CFnqj3rTAwCzCPSB87nQ541V6jXMtqUDvchB8qHEqt2qtWEDRMCE71HhfipJwWb3wR",
  "key11": "5CxkuCTYLCja6WnYDNrMSiV72eiTwVjmPy11GZ6mZPKNA7FqvNwHEn2hPVJ3eVRZWuUDpihPeHEBoiLpfQCBvTnZ",
  "key12": "NfPq649jWejL79HU69A85dzVh1yWtxrwquLzqrKZqMkfYQz8QXVARh4W3AAC2dTRPoBsnJoENG5dHJGuwYDpgnK",
  "key13": "35UKMocfdFTWkv5k2Fv2asTXUB9EA7eDXdPSoJmwecEzWu9Tptb5uXzZg3sXd8JCvZ2L5MzP6Du4cECKfhfAV15r",
  "key14": "5NF4q3NqLSNxCDiLNmKutW4orSS3E8pFWhmNkL2txsszux2TEYLg9X79dsM5oGY9BCMqjHcaUHZXR47pUCuZnGTt",
  "key15": "5Qxa5SjhV7k4yjS4ikWE22RraMrJLB98gpJoUmUttXRfKEaNR2bM3WumvkE2oYk6X88FJPxrXGs39aMfVhJ9ER3e",
  "key16": "5cWmhKavHThYmvqngB29fJwbaWVHYLe6viScbbxoJdSs22dShnAFmPzn1o86EvHXF8VuUunELmiVGGCwSF9npuJd",
  "key17": "3zXvwyKr5ia9f2vd5FqWbjqjqngg7mkTcriq6a4vLt93Fk33bPMPwzLFjwcQuft5xitoLvCrS2wJaGCGjCJyfg53",
  "key18": "5cJAxHUSpJzQmqTvfSTYuVFDN8CE3DsKPGAeVbYcZnxDDQa6yguREMX5s48o8Qz2dN5fgkGm2XhZEB4HHGFupGgt",
  "key19": "ZRQhGbb4bUEF4BBj1jLRBGuoMWqi31jHhP7vD4ZSyFGQErEsH4PtgCyDy9FvZufKB3opnNcSNdsvFfH1jLBufkw",
  "key20": "LfprBJWKqgjGKvXWPztbbdRub2p2rPmPimpzuB42WytYzo9T2ghoNCGPbhGQSaJA8ZwaAPP8eAbuqzT66G9vxcz",
  "key21": "2C2WEm4nvVzrGqKYJvf9zNuXjfqPckJRgmforFwv5vvesqfgPmo1xBLPNuMQsMnANG5WAdmvCtLzfBtgRNAs4dTT",
  "key22": "22WRB5VmhvsSog83wmb7RWZGzozKaMiBhJzek3QJFrSJg4EBpZEULHbdXQxUsqrJd9H3YSM9h33QsnVCEeGhY9bK",
  "key23": "2PimBPhPnoHEFpRh1Rs4K7UhPYAMVCjG6RR3tbCrGQy7xgdgehsvdiRLG7CisT2u2N6XU54zkydLuniSMbb26fGS",
  "key24": "43nWaErgy6fXFUMWy6TD235Cu3tj3ptnNpkdB46ZubZSofzM9Vbu4gDxEvE2jU3cvgoWoFCYUC9hNtKcjSQHUKzN",
  "key25": "3XYHN7ZpcBruYhc9Yfq8rahzuU18ZvypNHXK3mncXD5MNF3tTC6YYzNzwj2zziMxDKbo8NzpcALdaDWum42Jc4K7",
  "key26": "2Hw2NR2hU31j7d248AaMxJd4WySZfL1ZyqvjhCWndUZDWb14gGZ8YLg5o8CmTMFZ1D183F6ZebpqYgW3aAkXTvjw",
  "key27": "5siM7Tk1XbDQhCfmystRkHC14y66HBvS16xdRMbZKm68ca4GPAP9g6UjjeVFAFnnQhdNcoJWUwAUWCWCSrAwU5Tf",
  "key28": "2mEiKwVvpUPAvfLVaCuGgAQMjxnwTvUWFJwXH5GgmqYB76JwfYkcQLAEUymh8PdGmRCafY2YvWiJDxbh4rf86nW7",
  "key29": "NQb2LpDHZfc8gJ7v6ujU9ARnpug9yubjz7vkAPuJQMMEUbwsH5GvcXH9tTPSALBwQy6ENHRPZcKp2CoAy83VHkf",
  "key30": "4aThBCoC4g2N5Qisk8gdPj55KUoGtDXFgWwV3tj5Euei65ZPqMWHCTD831J4FkpbvKV5BS85h394BbTw6fkE2onS",
  "key31": "Wzomcp7nvEgR1RLPp2aYBTZHj2cBS9GpjCQ5PX5PfWyR3tSJY3AEjKCMNPznqyWUpsSdqA4W38jE7gXSKxPMNaE"
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
