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
    "56rsND9ZzdNxfiPmd87BEp9Zs4UbbVE6euGAa3RunGBqonRk4MpeKEKUyMcpKbr3oWUCkQPViSKvGSzQbV9fhkbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BhtoqsY2VWryqZnRniyceD9LronQvSefVz81h9s3AfgX4W2sGpxcum4HwVaKVYPngAkxyhyCVsPGV2jaby1WqC",
  "key1": "4c7RwWMpy5G5zq9Vc92Ew4xET3gNb9z8J35GxBEcukS2b6JZTbas68iVYJv4koAJq4aVqmVNt3GtjTgfn2B6NYfH",
  "key2": "JmEihpCEYqofnj8zwT7Qbg4haV4oynggttTYyEzQ5VMDbrDdufC6sPa7s4qYd9nEkfet7MQ8ASjS7Ssj9HHB6HB",
  "key3": "E5DK1eATL94J5rjb2dAvPULUUZtyZgxtunMoQE87Wa4UZb7N5ThLvatQX7kLBHCamc7zuCHEJEYirk6jqxBrbd7",
  "key4": "2VHLnu4TRjaPj1e4XB1d85d4ojjQoneNxBsb61k2sfWXQmJsQ5Y7D7edSXqvK1qksB8jNyqJQRu4xKWkBLieR2QG",
  "key5": "4K5fZwffCLnxzYR3mxgLdcGEnzoQ3y5L3oEQ3H6b5vQHc3rtpqMGzT67gLt6gG7hakBgvtu2WSuZdHsA73DoZUUF",
  "key6": "2rtnwxTYt718vkMJ3DAcmZrEyEvHkGcgCkMatVjwjv1jZKA27iCLnRtSry7rL1H1G52BugVftVcFPQWr2cvykuPK",
  "key7": "5Jx2Gj6ovBj2GiisoCTYAsTnNsLgEt5vEAKVLRSBhyLKhRDEGZSSWFCroWUPqNS5j3ziSpFYQHnYKzCLDdod4P4R",
  "key8": "Kg89VFSkwuNTX37eMuY5A5Y7sTWr13pzvm3EQM71643LyR5eXFyNns4H1WwTAfjueAC86viXxfHij5jq6teAEsT",
  "key9": "46yVz3onnKCBaKdJvCviNPXKeQzZiYGRo4QBWnUZRMfKLmbyZJJ6zXN5dMhsMdtpCQboPa3Ko9pft5y3KWk54wgw",
  "key10": "58nPe2fiZPcrkk4NusPt3haP9f92dALLf5E9k3JEmuy5VATpkwxZP7kmBSCzy983dbGFAPuSVuUvcJmUsG5vhJWi",
  "key11": "4XUzWdMQ75TGTrpbcTi5buryf4LFZi1yZVpdj3qFJDs3eagu6i3BvBNLQ9so1sj222HHFc7jWduMSpsE37J1s9Dq",
  "key12": "4DoguYUgR3j7KWEZVvqWofcjpJd2kXZprkJBNEgCj5P7VzrEtKgAgvtNvYvrZsnvcddr1ZzwfSZJmtBxhxfhQc5s",
  "key13": "3oSJJGNCxpq1nYyidzn1hGboXoRSJTgqTRuvQqhmkozsC9jmg912tRRpGkcTdhPco8kr9BKe9Da4ecTpqoPe2FKr",
  "key14": "5vvMLu9xWzoLNnd6txtzDUNmmjA7VCPbepcsNDrWdw1yX9BaopkpqzFoCEYogS7ddqsnavsX3aiixeC3xmFjr9Di",
  "key15": "4fmFqS9UaEGqDNPNvHqLWuLc3MmJSAcvjDJD7GhKVqgJLXSfvq9AN6w1phBtDAUJj6nZnvqvbwiUotc69RUfwpVX",
  "key16": "5Rv3SHte2se3KoErwpKjrRPrJCwNvPHsrnd7A3s77v92Cw2q66JC2bEWw2tgzbEADU4KuoGoddAX6uB9jECKM2ZU",
  "key17": "DVbj4J9z1BMyCavRL6TkM8bzjtgbkhXo7vGu4KFAwZpdD6Kek8nk14j8GNAgSBmuGXnnHmEkGftJVmLNMUiG6mG",
  "key18": "5aJQVEuX2ZyszpG9gFx7ZQY2Be1eM98X5Qc9HRQjvo7wdUyqTRRZEZt22KeNuNAnrTSLdF25re3wUMWhPp6QXTbL",
  "key19": "Kv3Db2BhnjQPZN6LtA4g6MUvtw1khgBsRqwRg1jzx3DGu5271fLXcfRyhFtLFbhvjz9aFFAGHs5hqJA2iW5WQV3",
  "key20": "4CH2p39vXrThZzfyk5UsYSnigQQTFn83nytthBeDVTsVtaih1MHP5pqSkmjv7BSZjTiCvLKL5XuBJmAjf9ZGabtP",
  "key21": "5jXm42BRHWR2A3Mxvn5JAGNDhA45B6uiToHgositRi7DPgQDnw9hdQSU9BvPyRVyo2PUwu9QuYy8sKjJ1UTe917L",
  "key22": "2u1a9E3fMhRJZNpRhoiaCKvxSRRQA31NU1KdJiS7KK9BhHVpyG6JL6GDEY7Rt3iV8DkKNGC711K7zhLiEbzpMUCU",
  "key23": "4x7AsZ9LQ3sizfYgov51kHpkbtVLWQufjxG6zeUgJF1dJka7vSETaVyrjubN3LKRtm4qQ3tpd6zmZf5mwwLv3KCz",
  "key24": "4YassPgcP7arRkBEy9nFKvKa84HRKgHqaTDY8xMAxkAoWkbDkpW5fdbPEmxu7HAneM5VnsRnmnBgmNCujrgxL752",
  "key25": "46iryoZA1R4KnEKNvbiWMD96WHE1ShRdY2qcFySZTBeVwEHhmhGJBWwSZTpDSLYuFUrrVt8QNSvZ36nWCGCjC4mF",
  "key26": "3r7B5Ei48UHJpXr2HgHMwsMEbURyW6Xbh5t2LPt2V4BPisctXhPdZndLMfCw3GMXZLU9qDaW7gxNd2QNDzeayeo5",
  "key27": "5Jw6w3PyYTcsVuHrriSFDFdvimhUmteUnJ3nFXqzzu1fa9FDKbiGiBzE1qs2qj79v5pW7WDLdyUNGNTSVFTvxC9o",
  "key28": "2cpJ4hrABGN9ctmcEwiEYnkCFoYR3kSP5PxVjsuejHEuNFCuzd1jZDuhCnW2hGm7D88pDuFSA6164zfFASxQQYJr",
  "key29": "5yauiYVcWXUdiKyUEsg7ppA6hmdEepJv5Kpmy36oDWFCqs389nUp325XJyNk6RacCvJTR4cnDtt5QjD9LgV5UYNy",
  "key30": "41QRvL92HgknrRQBjSmMbuxu8TTMGN4koeAG7DKGmtjJ29WXQTkZ9dwUa2imSHGR324U6Z7eqWiVzKHJuHNw2mc6",
  "key31": "5B1MKzLrXYvgHLbFEH3L8rfFEhrRp4bcDNLgiUhwfR35jxgSAR3vjCuVorvVsieiojRBxn9Vtem99iZhfcjnAvCy",
  "key32": "TrPerYuHeNtkcAuo1FxZSATxGBzyv3JmbvD9UAguUttEYXaUvdr4qDQKG1FmkJtV7HEJSgpaLJ437Gtna7po85A",
  "key33": "3MvEsXWFm9G2xb28Jni2AJ9KiKSJvQKGsnDM5micuVF8GMEcZHqgCyuhuxCsSgaw6gSLN45EDMn1YMEvxLnDqTgn"
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
