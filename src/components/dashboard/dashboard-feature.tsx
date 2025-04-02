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
    "5sq1d6n9DFwQRFD9Ur6TGGBiLb2wCq1QEiseFZHQ86ioTH6nFQhuNKJcnuBSGXcwdx8SG1mqxQzK1EsZcxCcexx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDP2kNZHUygJDgVePj6N9kwK6rHKyvSHLQX5c7khZQcsd6dLSG5ML1TobyrVZf2BZfvEAsHMoh2Wguc5KFMNpHN",
  "key1": "4yQuFmoX3SFCA4qnUZSJmBEFrz6T3hvr9xT45bVYxUW9gyjThWWtxxmNXVYM56F39f5BoUWWvVceEREqHtk221Qa",
  "key2": "26atDW2S7iQ2MHBPk5fE7oe6vWoHQSna8fjFy65K4YKeKDBoZmLaTtsffXK7t2mQDHJiXDrtXSu9QQas7wVxfGQf",
  "key3": "237ubmTeZmcYBNfvVBL6Pggg39mnkMcdr4f3Tyymb47wc9TbRpCTpH7C3nSo4J2hiREyZNwWWTXv1S1GUA4cqS6U",
  "key4": "3AVpFvkkkgadfVh264vRZ4JRfcU5PU2JnR16nrZAbJkDNgokVSgcv8hvUfs8Zs3kLQJD197hdSctP9TCzwKrbLW6",
  "key5": "535TFfvtzL1vA9wfymut3bsPNBvARWyGYPkMzb5AAoxLw3fmcVMQya973C5utRAA2shiaR3tagwN3mqH5op64rDQ",
  "key6": "unby1cPPj9mQg68rzaKU5etoNtgWXgAEwQJWsTJJYVGbTnSCMrnMTj6pWFKgWDoQcSDP3nXSo99qVCox74kSbom",
  "key7": "3kHUvmpGZeLniLuemuwoqfKAhJrLXg8XmBEbRM1EaerunF5DM7e9nAyRNyKfroaFLMMgqu3S9HMGV844qnoxt79R",
  "key8": "ZgSnGX1TgEPqq2dhumtZAMLYcEqVs3i5VcPF67GHX7uyG3p1mXwjVD2TuB4CqJhFZBex1j1zCEHTBBJjMbhjkBJ",
  "key9": "5qbhh6FDCCqXqXpUYMk5XTLqVXCpsTq3KEyeJEjzqgvnRMaHat9yd6vsbHNLAffn74FMQn9U5HtryWSX3M41YdjP",
  "key10": "59EvRkvELaLfavoifXMrvVbGfHNpM6uYcyExCkYRaHGo2D6AiBdpzqcttMKnyzApFHspf51ayyWRJhH33QhqtEJN",
  "key11": "4nzgfEUYKdaZK3Dxj1Wi6SytnhDD64YoVxTuCZd7XWbgVYTYzj15eZTAJM8vbZBRdzeuECkLkjFdTs32Cy5Trj8M",
  "key12": "2bRP5HPh1cu3PzsSjgzUz685nzVcYWKSHSuPGFRRLwJhw3vY5ZQvAgz24r9887A3heZQxCJvmLNCA6bFJaFRqWXe",
  "key13": "67JF8XFXx3m1LYKyrvRLuDy5f4a7ws9L1B8uipJ6Zvz8HJM4FrijM2WQDDURjdPG6UNt4PQpEBYzMspZacEq11WL",
  "key14": "496icNmS8xotqgTBBqLsCUi2gTkertELYQSH44UfwNfid757V846zGQHueXSWn9GvhpnFSZ4MNurwSDCH4uNd1gw",
  "key15": "4Qie5AKsoCUid7NwQExDps9WMDRm5amnVKRCWovrwH9ERWdgv8787yBv6bGdYFmhGVADVU76ZowjMb1ZB3GcPohU",
  "key16": "5imcXuSVdtNAcuGqWsnBJ7vzELgiX1ceaRsCjNjMC8J7TzNro57DnFC14L5ZuEL72BMDoFGqXn8hum8UBGsFTxrV",
  "key17": "uyDAQ4HkXnxrH18rovQdAucygSS6Ped8yS57UacSQJW1gBxUJSnuPovJvxLtE6uLbSPQHDWsKHpKQJncnzEmWD3",
  "key18": "5TLX51o9ybEAsmT1FbnnWb4S1bHyoHNpAqdQjRNbb598nCZAbhweMzv2mmiFPyVcifQMemwMBjFLGKTcjYgn9vXt",
  "key19": "9fWmJpso8UfxbNdRTKbdHNJQCfmrkZ8jEMLxibdjHjum8hZGfntyfJwEMxzeTCP74yQNA9cyUGDTFWpM2TYvWby",
  "key20": "43wUfi1rhf76AoyMRZMHHV5tLCfQLazc2QjZBVw9Qznreu4GRuc3RuYUPN9BVWYVVWajaum9C4a4qYGH5FsmCRoK",
  "key21": "4oJPeBaj6KgRFrRyBfC2rMjEMLypDvsGzGJ8hGEuWRTdFr2GCYS8ZTEtsnRpPG65iCqXRSNGkjUnhegx2tMTJ2eq",
  "key22": "DPCn6jDiuCtod6nsaQmPr91UEyHPGtfvBDEuW2gg2x8PQ6GN4zGNoKBKM447wGXjUgdxcVjgQWj88SJkyY8nezb",
  "key23": "5gSVjxZTeedCNYQjJ6yKMDaGis4cJotUnS1CY2R6Pz9KpwpNC1RKDyvyJNRfco3LnenKkgxZhKmsvAbW1Tr7hdLR",
  "key24": "5KckBU9QBbFpxWdditQSc8H5WK82pdoraM86fZ31cSjXw5eATRy6hPjXgTYiAiBG3HixWoxwjpDKL1fdTrkjyw1v",
  "key25": "qfgpbLPUEN2Z6pZxba1YLRo2juWjHfs7b123g2BR9vmB91n6GKz3ZjoA8wxqHgrhNfMDFzdyn73d1spext9Mdsv",
  "key26": "4DHa8J5JjYbRu5pNarG8c17cPp8eEk9YhFcV7Mg8LhDMEGdmA7GnY4UUNxQ3GAH58vWPBsAE8jG3Zy4gb8KWbsy9",
  "key27": "3VpV5Wbtwg1fCLDpWLn31vztWSYm69TyBKdm9Ve1WPzgMzveRBtMKGJwKFa6sUkfriUPpEyWbkxrn9AaXLG9eaAC",
  "key28": "2jLBW829gkbo58yYN9gKXRXoXdAd2XHrNBE2QtyNjdhufGp6i3eKdYTwp97dWZM2S5fwDsbT9WC8NEzBSRAyvHbV",
  "key29": "3FBtrFB8h5RWgebVHcFHMhp5LHXxyf3Hie5HqUSdwaLkwRWCZVqm2WNvUu8gySRxLtuuX2TMzsqatTnPhzuvST1E",
  "key30": "5KkejntbXf9SUc8Def5Du1tbGGxDRZDcjdz5VucxbMP1zz3YK8hNLm6LDF5HpYNBdADmH5cA1ERZpG4hKjsbDYuX",
  "key31": "2M3D8auEAUGAdD1YEChUHLT7tqn9ShfRcj9aaaoLvCoJk9Va7X2eDvdiE95mAYohZ4ukiPaany6EbkJUUcZqD3ZG",
  "key32": "5NySCN992PRu3tGKVRS6ZNWNTmvz1xFFbYyHf5Yt1dE432VDNMscNWSedeQ6VT2i7PWN7FbRKS8cBkSRzyAZXd2j"
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
