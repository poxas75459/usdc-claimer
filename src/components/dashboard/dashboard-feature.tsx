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
    "3XN3v24G77BKoamMfULaibofUhajwEpzkyGQgJQxM9zDzgM5NAAAd63w6euJi8AYgdbUVQaStmWUA9EBkk81eKkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npqTrgc1R287PJYS672VNjzRiFoo7vfsUcC73LK8RdacViWY37ye1yYxLPbHF7hSGg7zGTxadSmXyQPCPzTpXZL",
  "key1": "5VXo8LVEbHnTKfX6M2XdGQPJKPaxTW8rrrCo1Ds1jPadq6RrSnLTS2RGjKpu7Ezuh3wTNgVoYyQi1Z1x8kfEksui",
  "key2": "CSxXTVjvXTDFae8uPFFTjt1yTy7C6TWQPw1ybA8SrLdmdA14gUrr4BwvaGFsBThuMSrTT9dboSo9MytLd9aUzEj",
  "key3": "2Y2RwquSjoqPx7UbUrktqjwoQPb4YCUNB1KoeiSpRvjtVGtBLzpevbMgWF89JpLjad8gG5iKuuL5B2hHPwDzVu66",
  "key4": "SNbiJDegGaGQ3S1goYNQiioz9oKwJvyi1qoLjHEzNx2gVT7BJbG1J84hbyQJhbwiY26Ri9pwNqX1JMj5J7obBD8",
  "key5": "3DumN8T9fo13Y7UYNT4QFyxjJTQSbWvHTrY82Bmz5RRKaSDncGGDQdkVvqieSCTHXUozdPZYXqhzyjyb24jxjuvY",
  "key6": "NzNvyZbRegFvij7fTbGyCYXCiKvdu1ehnoYDhiVoos2C4sJ8hdud8wATqm37j9M9LPTcbXt3JB2SNm7kgUW93Qo",
  "key7": "5Q9GmsXG7fGzZ2uNBPuSYCE51umJBqw4noxMaMSsgC3WCB6jFmBhGW5aXCNRxWAvDdkSXLfSLKvCZjW6XzKJLXAH",
  "key8": "5gSeP2d93FpKTbQHgnsUw93L4Vttj1dcWhK5gh5237hXVwX9ygAfsASfTLMcVxufA8M3JfKvuQWA6tijY5TSpXsF",
  "key9": "3pdEjUCxzWFMRcgZKXjYuPhZ3VSAEGG6vuZTqqb3KswKnP2sJTghQdabAv2U3XKMnhht9Ag5wA7JaFn69heo5n3c",
  "key10": "5sHb8zVPAtrRKMvybCmBPqz1jF85WfV4WRfMBYa3FEX3QHfq5peZwJZnAWpYVnudEx2hg997tTtz8ZTYptGrbbXh",
  "key11": "2EMTCXvrqB7kLL8Sb19fr9sQKNjTRC4eB5UgfdkKuHEoTwD3LeGBTrCLr6Dj4Xgk42yQM2iazh8qFPvY32Q2xX2c",
  "key12": "67hJWaCj1PWq1wjDvhKr37MwuuRgCBv9Eqrv5Fhad2XjAsuxPeBJ8ayZzi4hv25PswT9fQBsuFBx6DXiVDbc22TV",
  "key13": "4iJBQSi5TR2CtJ4xc9Jgj9sYyss8x3E6wGAXmfeuQY5LFXvHjYu5BWBiKSr3z7VenVgGPerUAbr3c6LjHGMJu5jy",
  "key14": "2BHDH3vuSFTXSReUTuqRmPUvwGz3VJ5WtuGRoKV14xRdFmAuHy2JakNa6FgMXEjHSQy1NBJhUYgn9792w8Vy1LUS",
  "key15": "5rLCnCWWguV63KfGR77KEH44MY6hrGYrx1Zdj1ajsQWZUNpMwTGJZxRz3U4W39zhuZPZEUCtQWg7YV4k3jF9P3w1",
  "key16": "2xpeKghnmi9SLZgmW6KUBWUV2UdKQHHJrpmHWfwaFHJBc2AkNu53txVKNtCjAQEW2s6xHp8sE3j3omdi2vsshruy",
  "key17": "5r7xBD9ibvYV4trXDFpEdUcfj8XUAg3pzhDkoM64run23ithuuXsq6HpJy3UoGQMB3GFSeNcfG1CYPRxJuYszAd",
  "key18": "278dqz8r4UD37u8i72G2sX9JfinCkpXS68QS3tR9i9bLeAKBx5QTBjqJuZx6BV5j2TBUY7oPK5UUifggQ93EeZsj",
  "key19": "5go2tfQ8cdUv5KpBgbTKLdWpftUdgNZpGgHwE6tPJ8x4xevnUf4Fae26KP6V7FnxhGbUytgFyjCNDXJ4didf8ziM",
  "key20": "3gL7GTx1Xd1vXbQwhSKYiJoNeDxeL3SSn2LueVMkiidqcHKJAw7u6Ju576rN1yd1eVr1X7ERTuHQ58bqroZi24Co",
  "key21": "5wb873xMHWm3k9eQkqYnBRUhgXrQxcvG3Yacrd5nHPvpH7gPV3WGqzjE5ufW6Es1hKTJLr5vBEsy93M3x5vJVbrL",
  "key22": "4Dj4BWbLapvFKVBE2tg3PLLrGYksA5KrQ2yzpNYNP5kYYXaVJMLqXQ1uNijnn9difP7Huu6fJyJ3DCzSskPk88zB",
  "key23": "2RKiHbAgc5emhDbxuZKm9hTQx3mCB1MLMogvy6QHpqaitT5fwt6rqbJ17btvgcmMBrjWRE2jgtsq9WsJWhe3mMuk",
  "key24": "3p1xTQrsF21UToCDcTVPyd7tvq4FxWXhUg6ugVrKLTQUkwVDNnUjRedCzbSGe9iGGukumMHEtEm3hzBdD4kdLy1Z",
  "key25": "26baBMntZ1ukXmXPF8P4DdFsgaHThknQJYAG6AMtqVvh7CJro2dTg3vqd8cXpnvW45Av7XMm6RVpN4S7suKCh7y7",
  "key26": "gvZzZJpazBXsYZP2Yfhpv2i3TjWEB1bnhTePo5QDEr4pK73TemwvcSzgQCw3C7tTopDdjftBvkDmxEsZMLm1pDk"
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
