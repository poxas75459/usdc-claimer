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
    "VYo2aT7KQhbHuCe1uhkUvWTXGfj8jCLMheExzX8zRrA2Vm65bVrVVAkaDCLt9XG6NWUzQBzcYEP8tcxDY3KZ6tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgakkKQeZvGRnmkGQb2pnyFr4N3DjCXFqCsunQqfTwqB3yoMvCoJ2ePMAveryjh7jLF11TAwKA7BKn1MJEeGFFB",
  "key1": "3wPrMH29SbGStra2BMZhTfLAKGcjLEZYw5N582Ga8iFLegAQxu4f46zW2Xjyj8t2SWfUiPHsEwJR3Yge6mrpDrnN",
  "key2": "bPWtUVYAmHiuC1NcDM6QuPjEKsjJZy9oQVxt7y9nZHH2uUhgFKhmByva5ZgrtVi3NLxRRz157smMX1DsTpHo5Pu",
  "key3": "3q8L7HawjULuDK4cv9E7cLtvv9WwDZ2of7UJJ9htWR2ZsF6iLEheYs2B4ZLf3wkh3oHUZ1H2jEC4B8tHkDmVN1oY",
  "key4": "51QXkvZKCbyAzBxTqMK5Jbn6zUJ46ENqVs2ZMLfXRHx47FRgqWyd4pMzJgk8wmgd8xQW8Bi1mAmoix91VhiVCoxp",
  "key5": "2dbRXwitPQhDrUPqRZ5YHiGrYSiqnswW8fRypUioDzJcx8jkTwLDNydXHi4RMBjjiDbvcnuimbNADaSiQFtVN5Vr",
  "key6": "o2mTUbvJUpApZapeun3UohLgxc7DsYAoWwAiguH4C3DrBmDBxEMFWygD5CrhMtJy2y1oAvLEuUF8YbjuL1HCyTj",
  "key7": "kdQQKkytHePixQq8qQNN7VXCAq61VXpXFNhrywppjHF75R6r7zj1WFUVyCr47mYAb5S3XPC3YXUgoJnSo7pTGsh",
  "key8": "5MdV8HwWMoBKMkmzTd8BML3kBQVBE4u7cNXvYXvJDZxKgjYBunaCxTZr6PdR8ReEPvtNms6wtYoQ376Y7jX8Utzz",
  "key9": "4pjSyQRR9UD1tbEbpe9mUNFqAtWyPXFSVRrheXToFCSMauehGFgjiJCMckeYKRcooXiUkW7aQeojFSvhpYtVHdhL",
  "key10": "KBwDq7LZaiQrSz3NHCMnEf84Wye5jwkL6C3Fr2hESQFVGGAn3qTnmfXdMXRhHsfKc33b2KrrZBsu74qm3phtdM4",
  "key11": "247nt7dUjZxBCVaa84LwDio9BenTRg8Ara9Cav9mpCNNtXvEunbmeZtnzY1DVFqQpEWdkkBq9YMfMe19sKwSUBfd",
  "key12": "pei2Px8HjMrXqjEchbMR4fTvWCBFUhJ6RK6Wd7QnETNefWkQkY1QjgFFKAAoLDePAgoknBd3wtwvHg5NXmHcL9b",
  "key13": "5g3E2qFBWhvanhApu5qWHmbacGEySq7dxqfXmK63pHbEgzwcGURqYJcNgt14KAdgcTxckhgsEBLRGd1wFbWUmKCn",
  "key14": "25VjedyMkCUMbKUafCqYFXw1MfdVkNzPupqUcH4zmb2WmzCfJfx1gwqcoCbu51aTRpiqkP88zmCQuLSh1heZRxAF",
  "key15": "55pT9y6FR7w4NxCF64KPq8XZiEqoNXJjNotjsg9TGGe3dmhtBLGLWYURe43nJ3D1LtU9FRAe8iU3XSAkhpSntrE3",
  "key16": "129ryhU9Uhrf4uc8tKgBBdzLHh8LkFXEkhpG2E9sjo7GrxaKyg99kMhNfCyoYRnRFbyscYaXEPj8GhfmGQo6eg9y",
  "key17": "2XfdiieTP65HpYhJGeY6mfzayeeEv47ap9qFK2Yycc8ky7B4uiDa1eZ6MYnfChiBgGZxdLrMqcwcg3uMpXvj15H4",
  "key18": "5wQJGc2wKLzyBGXfmEdxQmukK4z7s7c5FbMQkNv6YfQpK13Gh8VJjmo97xbVB1vJFNpggxYUeEE7Yw5MKq4TF5tX",
  "key19": "5advZypkkPHBMucHGgWT1NE6ij7HfnxxQb861ZUDHih6XgCYauUue1bYf1LayJgiBgKFr5deYFzJy2no9ankwkBv",
  "key20": "3vgY35tMkcPbWKgFzeMxDcyh2dphkXcvBTsEcFr8DxJRJWSCuzi9smrR45ZmWy1REnMA5EFCxAVb41Yhvk6zqkT5",
  "key21": "2y6AVYmY5kJZJK4wjLcMhntwC9VNJNHQ99ZNUreR4WJHNZ2L2N1ZGuTgV619gVs43NPQ9nHeZYPuLDdo7AyVGjsb",
  "key22": "594Txg5Ku4hGU52i15hxmM8r3i2Su83Ry6bMwTRUJWRHZhuLLMgvSG1zByGqooJ8utWp14YX8trKieVTvYHBTTZf",
  "key23": "GCDaUvZRKZzdoBuvKfjXM7fLYJqaFcfRvFyDYToLEFMgnXrmjXxwepDqkiwNsc66NwmUuaLoYGa7j95wHucdybb",
  "key24": "iELztjAjk9Bz8M1DfSAMW161mB1AwTjsEmV7k4iRVdX9haNDzfMWvaFQ9ScVpNacFWWNmNyD3RDwuqaekuFfahA",
  "key25": "4yqpMp9zA65BtmRZFxE9G1kVLsY3YLSp6QLKg9uGXwXLT6rbCZ8dSwC9zv4Qq3YCqrUywfSstNAocM3p1JxEqcte"
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
