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
    "bxopQR3npUJXAGwRwJenGCAj8HGGYQsKdYPnbmRdzCpfaGrH5LC8UEZEDq8ws6LsUTGwEpBZ7JjFfsvEEr35CMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r9f7HWqAruL7FfxGkwhcHwD94JxXzLBdsJc15QYT1rKkzXULSvA6q7BSKkiWNyBpL6Bwn6b1X9eaNSBqoHWRKbM",
  "key1": "eogiJwzTiNa2EoAchMUU1rTem1fGpFtNA1vr1t6XrKPB7838rWunCq3mxgZ93EnNNnHeecimrdQdMbdvQrzbSAF",
  "key2": "4VgEthKKYHMgeNmmWjRzSQ76Wv926mzVBXo5wn6LGAEiPn8Hz6CyCGWdSRjJwYxTqR4HdnVy5gb3zKBCsaMczaEQ",
  "key3": "2davC2LC17ZWphjzKyZvKiGyg2wMeDMrhdbNqp6i3TEc6iEZLN9dwjxNCaSA6sjdjnU3YDemWNALCFB5kvh6unAg",
  "key4": "n4snVwWgfN1Uf1EaSN1SSYXiAyzNCHrCmSPmHA9QJFEnexm54ybaPn94wcFBUzkoniSRbby1UmRGZ4XrRANENFA",
  "key5": "5wkVzdyti3XYH2dv4SFU3KV314mun3bsVHYZc5LyukhKEkpZ5n96gFx1qUeCWEpcvPfCaR5PEWLqKbiLGSmUvtxD",
  "key6": "M6khFtWX2d8FNZkGTayMCmyVMJ9z4TvE7T8ctMVtXD8fXB4vxze3vx64B4q4je7AGShG5mAbpwbQeAvy6ycgB2W",
  "key7": "TnGYKVWWMbScPhXwwGvn2dV97516qTyD3XJkoZABQogma68SAApLcUqntz7tko3L99Sdg3M13YPimcsknanmw2b",
  "key8": "5UD3XhtG4pVWepx2GjVXhssjq6NgTNbQDbeesQJzQVp9pgzMN5z9TDtTmAeg5JnDRwpVTWcXckGZy4Xmv5VNkrVV",
  "key9": "5KwVAeFWjWBi35waSuxNZugLBk3vg734EbBMTpzBfUivS7B1AxQ5Sg8eNWtAaFn8uAsmocZuQnRf9vBHiJrxksa4",
  "key10": "4WgwtAsLsBvtabswL5oinW9nv5b89NTgPBuLDdcCQXUw7sXdDcmxXJNrVpJJC8XmhQiGFwG1K2DdNkG2HhbGNSr8",
  "key11": "HYgwsSfX65gwHqL18LP7KmH6n58Gtc8KQCLG3oJYVNxtgyvTYSj56D9XEgCHmu28gcL4i7haeQHBSCXJQ3LjyE6",
  "key12": "1oyeUDnJgGiEBQtxuzDbxwy2Nwigvn7cgHBhqLvcFZqt89rx31wVvbREa3p2Z8rm8fwjA4rhpqHm3iTiiFCgh7G",
  "key13": "4bcSW3KMogZFYgmMCQK9xJ6doCsk5UACV4n2h8y4uKumPYSbvGmdgu8UaeDSGRffs3AfqRbt74e2KQ84CcGXLXSq",
  "key14": "4jMoazkvtx4z54zq4Bizpm9v45Hg2tvRQ8xTM3dPTphyE37YwbRb1uuf8XM7LcKJ7yos4AAwLXfW36gMLEXpSziD",
  "key15": "2xCTLvJFF9zPQTMTPAY6dKw2w3yjm3BLWY6fDawvnxamyoLiLVbP7vkrmq93Pa94zFmR2926ArE7PQuoEpRftbtW",
  "key16": "2qtTsTppsLLQ1HQ4fY5WSfC9mQ6nd9yL2ksPhmmbkTY5wPYa56Gs8CSgfZ8z8Nq8BzMMvv6fpWYvGRjw54rZb7Wk",
  "key17": "4EYnDRnGJYx3gs8xPJidw75K97FCq3AVBn7xYedWyB3wKTcM92YQo43ybNLQsuvmeXMgDXcHMWvKqc2YZF8x9gYX",
  "key18": "2aMpeg33Keb5QpTku7uVGyQ2WKRRAvzv9yD3JUHyfuyFQiHtvm6SJYgzKyCNfUr998hyeLGU6ud5x2PZRA3N33WA",
  "key19": "J6QGikSJwsBoDCYquQaH5UuuwfHemmZmUBcfpV2BDTqtz5Kc9HomqgcEj8ieRVjiqjhwdXY1rQLtJsmbktMLKwG",
  "key20": "3bgwUPbUzM3wByNqo6VHfhPo4enaf2c9AzEHBKDBBMQQRHjDHHog9Tii3XjoXkFmYBMaWhydAMNZ2ygLDEBraibJ",
  "key21": "3s3LZbWrmEfmhK2m34eVtSub8ECVS8FrXcbnNAFVZpDU9Ej88TE6jwPNJgD2PzwspS1JMkqQLffqWXkKZvJws8QM",
  "key22": "5wyGh5G7QLDwBqm6FLJBargVjMRKExYp5wSpPkbhNHqMsqQQXn8DTYZt8sF45QZdruSdXYJKBxj5jvqc1ezdgdVQ",
  "key23": "29a1SYvVYC85cPog1ZkAWCAW8PirkQWewYyiH7g9Aorz5vJHFBmcHj3x2WyHz6hp5Ne2y8cBabBKvfTe6zqkkukY",
  "key24": "4wfN438phcaaE74arCAxMaKW1vJ6UJ7w99L1qJFokyYBp1Yd7fGoHbZAW8MxvM3VemBrur7ofj7G7SGcDLe1FbCK",
  "key25": "5RLc5MB31SAihj9rGvk4qMz87EEFyofkepTyekX9C5DtWppudNA1kyZhC7cjsexky98nrRQLxbSJN8M1pZS7xNS4",
  "key26": "VHt7uBEyCTr5DxunECUUU44KkZanayXqMn41cTdCjekMFjLewzXuw6rR65aKuFtdqE52omB2uUCeRyo4Vmkh3di",
  "key27": "65QKXyCjeCQtLXHwo8NMoPpXLCFfZ1a3HC8MEC8cQsPCwKsRHHQMKZxFVqUFaZTrEXEtU22SsATZ8syZToq348uN",
  "key28": "3hhU5QASoLsShpWi4Z2eG71rr44SjfjTPy4KjYi4aU5SK4LUw2TbXqv58Bf6jcABg51z9qGczaUtWangsB9Yf5nu",
  "key29": "3LECP6GbuDYbjSq9VWriDTeLFbWUHLdbyHc2eCq22CobSRhBp9XvpTzTGE6esDGA5D6zy9xHQspN2Eaj74pJqu8X"
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
