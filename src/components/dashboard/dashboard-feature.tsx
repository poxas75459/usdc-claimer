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
    "5tWo7SEQ5QzTTdBdVoWK5Aai9Tm22HqXQWcGHzrPzs5Ds7ZUPGMXfyiq5hSb1WCDH9YgV3Y4StzD53Pkvjg1zBaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661g9vCbUrqZqK9tUngZ8W4GhNufB7d4z6JRz3TvVYwpXyYD8117jiHunnpUTiGCrDU5ABxawodMfFLjM2Qkqcti",
  "key1": "3vrFpvhkZFJyvtGT3UWNLcCxNevh7JbpxgsZ8FjWScyRteHcXXZNfpojLWFmZjphLTXZCQpFQDbwYa8AE4NAjehz",
  "key2": "4MLr6HZuu1zzofwUL9KBgeQTFEiGwZbm1mYcAUM4zDat4p52n9pu8m7LuW1megPLmva7dZRxTXgXeuPo1oCAHBr",
  "key3": "3rz1ehaESDakKrypXns83TpZBPFDLD3J97nqXouhtSX5NmHe1K7Cr28azZtrdKKuqkCGjQZWSe4qQRoo6nHvy2S3",
  "key4": "qMwXWnbzpPmwsguBarwMztgVppbGnc3PoYWnxjCXbKap4Vk5uohK5261HUjD41vGwyL1DNABxLZtDHGQfMwctLS",
  "key5": "4UMgfdh3soEYa3hPL3sSshMWNFsrnEMFFK1UudAqZaV351kdbf9gmF6jj9sj8ibt9jKuYFsJ8Hr53xuNkcUda9Gz",
  "key6": "vgiKWQbP4R8pRwzzCiE5WSWbywoj1dVnD8YkUq8Hsr8yVYjs5VzYAt9n7oZsVxE39hoPhPpt2K2EozULw5nswtH",
  "key7": "KFvf2U7kmr6ud6Dd2GzFx368YNQVuXcj5bkXdbf1y2zgsmbTEjMUV4RVEZHuN2fmZbiJhz1vagMkRGDh8UaeG9j",
  "key8": "4XsykSKqiA2QPULfpL39VJcFGoFSRwGTDetWpvDcewEntGx1THYhz7Aq1GoarMZjmdDJAtKogKeWwVeDWUo2QvSh",
  "key9": "3TjaYnKnDZ7v5tYivQNr9ERx3tWRpogPu8RhfX9ea7spAnqCwqRA6VezeKHe94z1uZmiLRx3HKRo7VETZpDZyK3s",
  "key10": "y43VpyLdgPF13E2pojmQnZDfgsopPYhCmy2cFD4Ss99btZucQVDcT1mPSgRCfRgmyNmSBJFQZfookz4SznNn6H6",
  "key11": "56Uee1zdCdKwTxGTGQgQv6Lr1Dyi2FT9EYVYLR5NjTeWZwJJP4yTizLDCzvrDLMt1PjYeA99aHoa5vUFcHZ6n8bA",
  "key12": "2WrVSdo4YtRn5XuFHiLEhsWvDTYKXzXB8bnryUHuhGGxuZRuEDwgZ5PVjG8ZEjBVewQ88tMspuh8PSVrYHnwdtXu",
  "key13": "5zLJhkMoankGyewM9A56vjm68vPmHneEiqrttTFzMMRP4ebFmiyZCi54dXBFgZvVkmcXvHShcbxd6vNG9nekLU3w",
  "key14": "46FsME4XFD81kARru9apfdM8KpyafRFt4gt777sg46LnAxfZB7d9PzG8DmPndry9PefaT8fdBj3Ffjzfp1GMXHxu",
  "key15": "JyEKnF2sY19BcWQSKdgMcYJYF3PkfQscW5igUwpaVAA3vRaJVxxZcSQrJChrQEgCsdTfacpTL2rQzVSdEQiQqzA",
  "key16": "4aQR9b6EPmjen82fELhd5K6hzEVV81GvB7b4fzenvEB9svPraNsn9yJ7V7LykzmSSDVn5D4ULpz3xKtJnvxju2d1",
  "key17": "2XzmvXLkG5XzD56VCzRdnC2Po5F1kmK1VGC5hDRqccrfppuXrTDZxYdvQxay5aAiVQjYsFASEwzcrmKi5numnKq4",
  "key18": "3xBtdqjQeptj8Q7uXJgFoi5UFtBmw1A1jmdSz9dzkiUAYbkHFC5kKBuHtZb1i3ARYhyUMfDF14z9XBpYjyax5ztA",
  "key19": "3sGT6CQjMjVdPzBBavsn1dajjWoiyFLFzpoEG2JfnfZL1DFzC7b9sjQqxmUim4hUWcAvreL2ah7HvNdwZcchsnyX",
  "key20": "3uuDMhJis7TfBwaKEXuZqMkXU6SjGG5emBaHBf3ukahwituSz8uVNuQLXqCXBkSJXmQ5J2A8RUw59GFFzVPXKsHQ",
  "key21": "5Q7mcxtYdK91hHPjm4WrBhqTqsAgBu3vf5woMnTH4Ywc5Q6zo53vWnPEF1oaPQhPovku3DcC1Yar1rHuw6dYq36g",
  "key22": "34quwxb9iEbfg3x7LA8y9r4r1JmZ37GPP1AnprSRMF3wCogh8RMLp9vHM63pbpBAsGqRM8zdUcseR19m5Fj44qdA",
  "key23": "3KxUHR79HUdXYHotgAyEQFA95Lq1Wi4HZjcbviESL3pBrsTvWqmF48J1wUoXR1y69sA5kStVaUGyTRFohr5Znt95",
  "key24": "4RuwjzcvRETrvUeUN3vAwd5hrT6Gr4sdbo4zUuAzAMqAsXakf8wZqGfPSz2Tyjt1btovXPki1uzhBemanUM1cvms",
  "key25": "3JQZ8sX71MdEnvAKtABJSXadQAvzsfKZQAZyeTdhgPNnonPK2wYGFC1FhqXQrv4znwFZtEvhGBaFkwvLYNFjuLxr",
  "key26": "2CnPCgLUHqu4RqoBGj1caxCaNUisrB6gM8t24pdR6GVq1Z4TGhmBCskU7F7jPZiphRL85pborNwKg4cstHpTLGbw",
  "key27": "2GXGwVfRCD9AR4L5Nhta4PmHRx9GXJKThcXDX9i2EXbvDMtqih15pe6K5EGYiuqcNrJhTUtffjFqDG9rXx4SNRn",
  "key28": "xmvpSPo3S3iacPrpHPpY1x2Xei9iWB2iqqoyKvi5TU1pryCbseB2EiHtTAfpGQhFXL5RwoghUvX8Kxj2pqkbPZt",
  "key29": "5KizXT6ty7LA4CnqDWgkceHmWr8g7qtMHDW65oQeorUVyXQgQJ79n1Hi2FR8Y8xjddN6xgSyqPAsgazXKHnzr8u4",
  "key30": "3ev4juEpMqU2VwWDKpBPBVXSaFq7dpTdST3tHr1H4Tw4UxdHhr3Zs7jPjZP2KLbuDuTu9ZAuMX1UMApzz75D34YV",
  "key31": "bNTqQBefyDcNMNM7NZW7Fn5wFDwW9cYuASwRV1f2TCW2GoAEt4cftXi1EZ6jbkzougTRLgJ1Qnnuy9bxJxd2hf2",
  "key32": "27T2zic5sqzW5v5Yyq4mgQ4Qt4z42ASt2LNe7BijCbtfV57LLsvHPY9LHZc2RWHkPAdqhws9rsLAEU9w5fLmBfkN",
  "key33": "1YjLux4KJWUMVodX7mFXCAZa4aDH9VXWP2yX69M3NkqQkYWvmtHGpc4yxMRU3EKGuZCVSAwMkgRjbz79aqxcLgM",
  "key34": "3ef4anYAzp4BYWpdzeNhovVuyHxiaCkDDg2egUisNZwrYMao9dzb2HySdAzvv9aaYKKWqkvh4ErwinQ6Et1299AN",
  "key35": "5eDNgene3LnucGZCBQFJHWCpD5NuBYKmw5nsroHGg2M6Vkh6kbonrBKM9MDC5yw4J546BDTHNaxytwTKdAYroAwW",
  "key36": "2urxBMBUzy4Qxiopid3PwASMMbdG3jCwYw1wctCEV8RgTohWg7ouB5w6bgzghh6ahv9UjKkkdtn7TrHo2TuxGZDy"
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
