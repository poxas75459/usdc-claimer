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
    "4XqDCYhD4JibQmSS4v434KVGu5gt3pRtV5tjXrDGw6KQFhvUT7irDGVeZBPhkCPy7hf7bDs6MDjbxsoWh4nj6gms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57CvFAenpzNgSJ4dZUtdE4WN55m9YWv64QE9G2svvLcFewfG8dp8LoWFAT1bGdWNNUwRsZikZgZ4hKWSsCAATeBA",
  "key1": "TD6vjY4WXDSzyquXpT73f6DET8FXyqr6keU9wETvqumXswWxgauNnQZv6x3Ftk3Xrayfg1YKXNhaNvHPiwF2gFK",
  "key2": "5Gw1TVX3mtWw2xY2HPgcA7kZxm7vb1WGN8abMcKuNsibRvzVKC5P5Cyg8jmFZVBkbhwoLHiQ3BjLMbUw6SqwKxVX",
  "key3": "4sN7kyZN4Cum3RboGS3tAndFssswxyJ64qtTyYBc3kH9kRTe8z3mm7KuZ6fTXgpmbJLTejyoAi46beytgZrRxZGm",
  "key4": "4SjF6rGbLFrTEuzmVy8wVryRS1exUYF4eKWNTPL5eVdjkajDma27mMMNgk8awbHcrokSnPfiHhBSQiGN6oCfyQNY",
  "key5": "3AfR1pMdbf4p6gkNmk9vAVa1RRtPcXj3ysBviABK3gDuPrms2JL3CiL5hFQbh9SozvrUG3oTAYHmMAguLb1pHqPa",
  "key6": "4Lz5P1uUEWRquAJvQQ1LZHhcSNetd861YBuceZkUCLMfFLYTyACVgH6BRQss11hHqcM7WZPY2L8SDD4Qk5th5eoR",
  "key7": "3b323Bax3DKmePEdLr6XseSAU8CR2EWc9DGFFxaipKanUcS7qzfZyCQMiaLQWNyp3ie2n6o5xAfn9mvj5GwRv4RH",
  "key8": "3Xn87eQRYRSXWVvwPRRugPPjbjCDPstgajYZa7ce1VeWfUErE2x5tjbtxHHZDpi1r7oZEf2mocY9KCAY5P3QAHqf",
  "key9": "3SGnCLHbmXE28nAiVqimpvkpeeMKXcCCPDMNxqFVwyv7bCxY1kLW6iTbqsf5Zcz2bXjqyWbpxP3XhhRPA5tohcT8",
  "key10": "3E66oiKRqsv2bwt5QKUEg3y4ovmBKtbEsX5BTTCSjgGbyRZXnCWjkAksaAtRhJyBdUSiN6uZpcrJJ3fHaPp1nJ5L",
  "key11": "3eXE6FVKwduLGGJxWiDW3rm8KCtzWYaiURcr4ej6GJD4SazCaTZ2LMLaz7gRrDoKggNnAemqj5bdcmk4uj8tgLUC",
  "key12": "fcgtdoVpZoecuSfopNmrvWA2uPDEjZLFGuFuc2B2wDPhmgX24ZnCdKLNDGSwso751sSRFZSVKG6cC77bRpfxDLm",
  "key13": "4b8frts6884EuCYM6umda2AhR1ShGTmmCHsK2cS4f8534WqYRRzCPiaWQz8FcZm8Mm3BAEh1PcV6JZgKMLeDakxY",
  "key14": "5Dw6THboXsTH81pnvcgtvgQm1FHf9zwLPpSWoi5x3TpPiA3WGynk7ViSxXKyaVhGK2sUEmQiYeuLCPiuUncrofGA",
  "key15": "5fmLt9823unzUZ6FSgGdyNRuJNqRq3vezwkzvzmCXHi82KcUMr59pnzTpRHaU3SnwdBR3Mfoc6862wq6CqmRfCxQ",
  "key16": "5dTHdfgwHf27ncNjL3vhydKE5Z1Ey9pZTuSN7BKBBVZNfkGZjim8WrTnSJ6wp69zbvCw5iXxhTuFQfqxfk25iDVY",
  "key17": "5j6g2cHwg9YFBuYMJxQ9ohHZ54a27Ky2f5LmLU9sgRQAUmkYkiVvd6QcTGXkHNrGCDHbiEPYWg1StQDs3McSTJA",
  "key18": "41mLijGEXUd9adi1xgnjmsd3edgm1AVbhZ3Xo8QNpv4T17JmWKS3W4BPXJsczMsMifwrCZZSzy8RNnSkLxrPZHu4",
  "key19": "3mBXhys3YvAgCGZL4EYhCDgptavRok5Gw2mVAa6FzU6uuTfQGzuDZmgvxz2Ewk3mGkHuiNgkcukE2keBsAftjh5y",
  "key20": "3u5TN4smKrMeZR83Hm42XDPfhtChsY2xR7t7PoNpwcEYTG6cb1Ehcv5K6iKmDWaCdjSDPCv1jUqLqY5LgdjFQogg",
  "key21": "48mcbjB2LNtEs6rzL7BGdYkFsFHinYB2xocRfYcpH85YWWRsNzZsxHThFFrxtiDizwcHcyYsBAQ9tnT2Sgj6jq4R",
  "key22": "3HLAbAAK7948CETZQmHDo4y58VdYQczvFJsaFg7e5JwbKCnzDymDS95KxJdP23W4CeQmK2vZFsrbwz1ACFgTtsSK",
  "key23": "82LsdjfvU8WF1ApFoEW2V4K8rjxrbMmcS8henE8cAkvJMgpDHT1tLmUeRG5TU1eULdMA4bagqAEmGBG11uYEvuz",
  "key24": "4ph2BJcwVyZYABfLxdzqyQSKR6GSLxrr7pc5ip5Evf99v69shDZxP4EASohP1VfWeDSKUpWAZ6sVmMxdzYpST1PC",
  "key25": "5CHJX9tGMU3PPfMC5zKVfmEyboQqKnL8qCaye6JK6V6AXmTmeNigHEdJS4f6zCEqUmKJMxa5ZDUNk4qydrox8DhT",
  "key26": "2fEMEgs9GnYtvm3m2xkCBDHaYDhNAPZ8qPhruZHoukdRTamzmxXUKtZ57NHtUFYAprFD4FSfXdXWG2VkuGFP1Fwj",
  "key27": "3863Ae9TTbksMzw7ayKsYDdTg8jqqcnYKXreKzGgzDfXeRTMDZdSboJ7wNYBnj2khjnzuNEYKZDQGVv3ugrfwXaS",
  "key28": "3L56W11pWwL9rDtyt32aVEHJqrygwPwKARZUA7oKZjq7JTrDpmE1epT1GQzbADxTAtHRQ7HU3JwZqp51DgQaqEQa",
  "key29": "2fcykFBWLg5xMoFevhKhgiArcMd7icotPjq5QtzuwZcATvMhbJto9wJ5oFs9a22r4qukTe7fh926xFuUMPZPVn7A",
  "key30": "2HP4Cu9cXzyo44G8ZMwThnt4UrznJyFvXrjxpRFafnTzmJGYYe1PN6tn9uMQkPFLXTgS7X4MNq9v1Ed6KFw1P2G",
  "key31": "37QqTDVw5v5QJx5g4WAR7mTWiTniHXxKCcMH3tGf92f9J4E7HSADtxdQ32726N5xLpKy2UbaFq714PpXf3QWeuKU",
  "key32": "3RYngpzNP4TkzVPoE1S53JmYKV7SNDvuX9Bd9u5s6xHjtxj4rqRPzrRPbuyZVyJG3n7bTeR466SrBPJ2JmzWXXyQ",
  "key33": "2LJa5sMQVMCTUDJsUQrf71bUY3bGrvvhFGWT7wupagP9mqF4nhnm9HwB9evT29GNizNBjnqJoSAYveYqHgUFr15Y",
  "key34": "2K2DDQ2xnQLCU5cVNJSdTbZfHRsY8suHw44ML5Z1FAa2tKa9QPbJKK1qmRryjMbx9RXva9WxzY9k8aWsiDZt1UZ4",
  "key35": "64iV9oekF35MXo3CmfADuXfVadLb2GuNnV38JtG73N1hcai3XZ1vN24zTSseHtcWbf9se66kLAL1RuzVQsiENnic",
  "key36": "2oUGTwaqdwE15VY3nbpFaLjeCy71D42M37Em9swuSSU2Dsj93EayWVodXzXgcEB5E1fBZHBc8BwxoseuySjiD8dA",
  "key37": "2nQ2JciNtHg9iDgbv4yAhDSJuVGTGAJLw3xtMg2kG3wVh5ZYK9Nz75tbbnrtkmjSKHxHPSDq56ULMbgytBnmPAsH",
  "key38": "qdqxaFZgnUAeLRzWfgiqRPWJEx5BbwEXYWTvXtZ6ZWTAkTQyAHfHXZH6brdiP8WXmKFa4oQTeSTk5gKsapeDqPi",
  "key39": "3QtWFrNvqUN6An66fvjRFUYbaN8oA8YLdNqXueEHW2ao4Y21HPTaGyjKgu2o36kf2VNXPHmJqkcFe94tsvwkGP5F",
  "key40": "2fj5JrNQvuShFuk4zuqxomhSqzGkznRjTjhVmpnhVXUHPq5bCVyiH4UW16eSuSW7AR8QpfmLhdjnTKemge6Fza5p"
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
