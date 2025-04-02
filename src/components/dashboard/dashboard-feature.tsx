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
    "2FKTgawqPUeNYz44TAAnUWoQH6ZzKFx3ZR94HYZwj5YEcEhAjyy6SFxSLBs2tGXSufYXcRdYg5utmE7UW1DwkerK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPd9n6rThmpb1eX7QFwgkfQGWerhDwFhdBnnmtztLGKNLHTSF5dxcan1WxTRZD9CN8oTLT3uLZyJW3K5N5aAQWk",
  "key1": "4jV1pFPUuRts2scCdNE9nxQsY1vcgb4jEtV4CAEGXiv4rvt69igoMCFPsqvXeT1HyCLahuwL7sMjgaEqsubGWszu",
  "key2": "4LYaziZeYUYASozPE5G5km2gHTUk9GU6BH9zNT61xGSVUprVnGyBMmwZzfJJ8RN31xK19wDkpVabBKCFrY1bk7QD",
  "key3": "6ncv2zqF5bGZt97w2kZRUVmZAjmENTbLfuF3DaGuE4UNfjAc81hjEpY6y3DVRZGNnxJSYFcypzDai3tmgUh8AS7",
  "key4": "q9B7oPHniHUJY21mbxzECDFbeT4ycde1Fsa5XqrWDLP3aqnwnjBMFgngUdRSuJ83ZGP3HHEQTepSXs9aYvvmZhc",
  "key5": "26vQ3DCaRrZGzTgVi2A2xdfa9WEDnnC9RNKX4WvpkRncNbf8oVDwKdD9MB4TWEyELng8YNdcaW6EvpHpMeGtom6n",
  "key6": "9hYWjCwjhUZErxxjoSLTjCgELf2CH1JCX949WHNkjDTCeCdRKApt3jCvYfH3bB1tq2TYLuYcRJWf4Xfricf26xn",
  "key7": "5AhmAZ4GYuStcPthFEsiesuKCHq7m9gwH8WwxihRhPKCwrzX2c9dvF8ijGnoyR7VnLNHdvuD9rhqPvLPdiWQdxz7",
  "key8": "28iz2crWNnQfaTthjMMSnGoxkERmJUi4GcuFZ8BYehedc24u2WqPqkRxisQAEvmMWuw6Fry3UhEVRPfyfpbQ3fkN",
  "key9": "5PBmTqoJ3ochHN7NbR852gWjERRd3Gbm1h8G6TF9KgRSdTB9r5GdkfqR3wL7gSpZrvAoQYe6WmXs8GoLpuTFPFTD",
  "key10": "jQdSpy6wFFAFQ6GRacBf5u7pctq92aTHsVKkjHedGudYknJSK3rMbMb8s62myjnnYLh4azmGn96LKRoeK1qj3KT",
  "key11": "49usBdtWqi2kvxioaQqi42i3wgQpDvpBcGPNWDWZHnF4qdBNbXQCKnVYLdYY6ZYbcHGHGzhGT9T5LtqNN1D5C9Mu",
  "key12": "4UbsBLKAjas4t63o4azmpMAmrHnt61Cyugm72pFGMiPDuZd2TPDQfkXpxbbqDRcaimjh4bPcScLoJuitc5CENXmD",
  "key13": "JphAr1Krr46ArY9RNCX4Hh6BkW9AdJxKMBzSeWMwPTX9a6vf7p8EQdSosEV946JS4kBPS6rPXFDW7m7zaeoEAzh",
  "key14": "2r5osGnZoa1Wwwx1sfw4WAigMWYURqNeukLwgeFNEWXzCgG6ucxsSBRGUwtzwMGcbxnV993LpKfW3ut4beGoHXXT",
  "key15": "5aUCoEXLK4E8x4mZyptXPWbFgFSLQ7u9oPdtriAaaKvej4jMYXKvcPCXpP5hco3vucr9GrHLZ5HkfmT3NbbHHUKX",
  "key16": "31HhT8cWxoUdszt6a5aTU4GqqTpPba5tcwz4A3XmppZ8P3AaUFNsernSvNKnLdaBziaRNR9iA1jpGZrv5Xg2ZvK8",
  "key17": "5wcwC3t2CBHAVmw5pyDQZSamgKUteyfZvKrA3oVLaSMTnNKXXnT8Kmarzij2ym3uwvjrzFAKVvwy5LFDAkfkzi1Q",
  "key18": "3LZmHDiD5wkN1g6TzmbJzBGCtQcfSR2iCL3DHAwEHxJ9NnvcVsEsiJYfTMaF3QFCB2E6W343eS7D71zSeTwbF5R3",
  "key19": "4VTciPcbUZ4VQNjSxRbg9pbhrF2UjHQpS3q8P7PHhyCBhjsdDZ2pbq3Kn6cr6TbkheK7rV95AJBfratQ4jJKruMF",
  "key20": "p6yUj5uTbHJFkwUjRs6VBSUWEHy6jsCxZ3uMUFrF7DZUhfbNtD1bLNo3fSD9k64hqmG87yDdnKvjAbnYvz1y2Rb",
  "key21": "3J1zMqSfj8MVnbH11y1MALXhkU6dQMDBJ5uFq5dFW9yzuzhg3ExKrEaVnu5LfG69RF5FeWzG8Dw9eLfGecuXQx6G",
  "key22": "2QrCS6m8RCWCBrhPT5spAHdDYPx81Xqgh8jJ8BuRsPUBMMGd9Bfz3YskFnvbaNLsWdE6wXhBTHKeniWuifSpogLa",
  "key23": "29t8vZUWbZnQQF1kenAb9eFFekMtYWWTDfvyo57hGAWyA4vpMBXnTaEjttqeSBYvcZW2UtxCrksfEFPdK5s77MFf",
  "key24": "za5oZAf1Eb7q1BEJRoQmxeSwjpC7HEtbfcqWfVG4dCJN9GW7otysnzLGrsYTdg1uAjGyZrTngk2PPaRcCnRXwk7",
  "key25": "5Dcz9hb4HDnd1MuMez2RNv7ST3vJqFwPq2UGvFWhqSfgTDKM8zY3WUo69DsRBAHwRQCv2tnyJAnU1d4GQPAe75dy",
  "key26": "3pVKtky7oQZSjnEhUhYjeC1PELBd6SwUDLcSodAgnKGZqHJiznhs7oP8AYYkymzNU6x75P2DK5Vqk3qVV6HMf45h",
  "key27": "2m7M3xAJGParPFP8ZBUN5aVSypnvZW1Td4SLo3wEcP9bqugiqDNh5F1e9FDBNccJEkYgd8FhXiQRHB3dQ32F7kvj",
  "key28": "2nt2GHC1kizXY7EQn8aPF3yFQUAZi7xYhy9EAB79ELgMm8zKhdBMHN9tfLXswXYmDXmFgvuWLWueHEWBqB7YmTPf",
  "key29": "2G5x4dNGyZCbauZ7q8uQ6MhV82v3Xdu4ntxJzSa5soe3YS4ytKJp7bGASLaRCLYQPNd5MXtJKz3U18s4iur4tfK2",
  "key30": "jziT2mzb9MzYrEwiNW68gGViBABwDKTkLsLXTo8i19f4PLDN9tafkofeCY2f6aNzV2oou438cGAHegNCQrJxDq9",
  "key31": "5dQYENPfDZgx5LJbpM6ESusPVnABJt874EKPecsmAquanLEcBWMJTp6RKBA56FVPqiKdweH9WMYMiMPXHyok2Y6h",
  "key32": "3tvWhb2ktUhJ5wq2UCnJXgSQYCQyLJMJJ9HBaUnvaHTjqWKPHstxumdjmYZftJ62Pi8XiEXymdGxRtLuanGCopwZ"
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
