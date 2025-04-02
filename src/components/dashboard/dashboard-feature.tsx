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
    "5D4KqAzPHmwsgg5P1pE4WyXdyDqTSYH8onddYpp7PUJDd57bmBsQ9ztNUzyMGLneKg7rWidqLkXJQkuqLdh6xWNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NbyAH3F8PiEWSDNeVu5xXb4De2Ex3WUsFwsuVmofKAku5FdtAz3ZfaRTP1nASFHZ1JU7fqh2BupZZh8VUrikT1",
  "key1": "iKVB9kYDkf9MBK9h2ehY8MHzuVbqZdu5obFEjq3YkENxHUghCAUBHJcx8tnLnpG3FUvW7TFpdt6iXUSQrpuixk3",
  "key2": "2tYxP9saGQHc7NcK6CdpHNcfatfMHVVEtsYwsE5HQYTuUp3Mb7t7FUQWtJACiB9wQRYjLsrwaacbWwmcqtRynjBg",
  "key3": "5ir2wwazQSFNS7RBTNWHEWo8KtZoZaL2fsojD4yHKm6uVuuuox5UM7BbwfMWxug3GmB3L8j57xxNbfHXL915XHwW",
  "key4": "xZuXRcckK4yLkdPwkLKCyt7Hp99zUtHMVLYw2P38WmS5ySTqEucsxprzryfReZXs3epbDkUWRzTh1mzENM3cy1v",
  "key5": "2PijgJxwsmpZyDAL3h9e2vAtyZWYRn2JDhAT3Hr2NcLxrYiMut6zT6KoDruEc3mrN7MsiSvV6ez6WViu9ei5EULu",
  "key6": "LWqQaqxNXx8w8SVLNPfu4dkv7X6MeVMuvyVWhZ3Tq87y37bD4Ndx2B2sWPMH7VqWvBbxKAoro54pPnGcVJsxDVC",
  "key7": "2Vr3C8j2jv6bWUagAuEafe5bEcb2Vne4XWtdJiYqWQs2eKE766q4ACkLnAz1sVMUtMKDL2FXTAqZJvHczToz21Z2",
  "key8": "AYe7PdeHayK6HyLEoy5bq95VQCz8noN6R3iBdzKzzAWgwjo4VRCjbx1ydEAPimBXKqdgUKAuEkG6DcRN53HZqss",
  "key9": "36UsJ2w5y89bYVv6RKLuFZtAgRPC5sNQrecKZyaM2gyB3J9ycGd9qHS5Zc6jUUWU5FPJuVWq38TV84w7esAQvy4U",
  "key10": "3tVA3Eve5BFxd1mWW37K6ckQTWMQpqbHqXmzR8Zog8FVRFSCHogUdtv1xHVb8vniZKpGrJN1WKdsJS3w7wwhJupK",
  "key11": "5js8o7VLFDvx9zHY4rTn1NgQxRZACKZCzLN2Jo1EXQPbVSeteWqKVM6xgtyzWZtgB7D253m7fVoSw1Ha4DTRc6sT",
  "key12": "atb4y4A3XMR2FLwwWB7FCmjWpCHNU6Gg2GnxpsmYhQMmrXft34Gf2HVHo4CRDoRd5EYw4w6fXEei7EF4XTBvxJu",
  "key13": "275X6tesuj4FKKGMk5LQS3TgTGg9VHcKAFUQNyprfYSfR2yr4qVHZokjGH7H4EDt8j31fhTvhPhs1KCurh13ehvy",
  "key14": "5vGbik9VoE2YurUpHQnTvBAMzpVd4w8JwjrbMaWV8h4qCigrRH1KgdLF2mhhfYJgwndwL6n6zqruty53NwbMbnZn",
  "key15": "5a8Pg9XKw7NSktdeMn7dwULy3Bti85jcZ9XUaGrWykYXcXj1zYGUqbMTgFXxT9LZhNT3KQXqkLGemQqbt87f7ZYj",
  "key16": "2isnNLYuaf75nWVBv3sj7PNQPpRuFxvtUSnkR1YWB1hHJ6p5jkAJSNafZZ2YcqDMcXMs8Agw66c2aGzDKAMzo6qH",
  "key17": "4oiVmxSEdxy1ekCYZ7p5L3rHzpAZsoNXGmRNe4Gg6ToD5W5bMGKXKHdJxr2CRGMkAT1WQd6FWDBuWVXJNPqWgvVT",
  "key18": "3i75b371apNnnZyFasvjAcp4XegehKmyzEFsg9gTCozC8uRpZ4Mcw1CnNcotsvZKx9JMfQTb3DrwpGfmiCfCZqLq",
  "key19": "4bgBzsXUbphXYereRwYLmyBE3c2GPd8GP4ZTSfNJ4T9mCngJATK6hbTvHEjZYTWExquEX66F3STw6PaYacQAqakd",
  "key20": "5FP9GD4xn8zZyZUGUibXtoKWK4ns8rEhtMHpUZNhLkvQWqbzYH7s7JjEArXFSar8wK2op4hKo8Bfy1JM8Uj5SjVn",
  "key21": "2s8DKpsJXvfsHp2oknjPXcrNvubV686sSwF4FUqi6uZQ5Rmdyy5aY4jG9f8TB41s7kpkTRzAWeGKdCBmRMRkasYX",
  "key22": "nryUtPCCGjXhmQ7NG15SniKED2QwwgGu4Aa7oibrvRhJh7jNHtQboxBZQScbmjybY6jk5gJcbpco3reKHvhGR2Q",
  "key23": "HddPpKGjbT85shhEbWQD4aXnVt7TonSVLZW94X3M59Ntc3QjnKkiw7tHTifd1Er6nTCepVaopEMWf6gZGoTqdDq",
  "key24": "4yamHmoHeUcUaY9vRrwaKXJf7kH7Vsy7QTs6ovRqpoiJymEgUXQJG3sUZGs6t219ZTYSbZ37jEXffo1FJcLskGX3",
  "key25": "vW44X5R5zWafHr8SDb1F4w1sxDwSqKa1aGT4YXvVaFcHQi29Gd4r9y19KCjrPaumA8571yNhj2nAHHLh5trRVZC",
  "key26": "5MJNo7b9gq6BaiqtcncTw3vWHgS6WJ5sYyXAdaCBTpFSF5DrrL5eGVApb5tVnr89NzjUQ4Lz2AowDaBYbEa331a2",
  "key27": "5ynRMS83Sxo49fZzXhMZi2CDA3VsYJ8dcNuGbMEFP4oQ18cV37SqE4KVd2W4q5nxJ7T1bRiYneMucRYwtA1kcsoe",
  "key28": "4RoVvu8FoTAmeS1dc2BpJx6JFNWCo1EqiW71iX2yKtPnjHtznkmVrxwz4VAUAY3vNNJt86iTJ5SUxNHD4WsssAYE",
  "key29": "2qB7PHU8jzQQEpuGLLbg5cxxV648unCmjivT4HkDdXx9QGZFBbqhWi45TERAZFfEzaxHE7V2iop9tx4C8VSQGZEx",
  "key30": "5LVXS4TBTtm5YCUBsGRwNUYbiWoGEDLV33eEE6ajGmxrT75oywiVuysNjLqxhHg3r3Gpp6B3ZntPcC2UhZQyFxPw"
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
