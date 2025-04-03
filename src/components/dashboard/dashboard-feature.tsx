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
    "5gVfarkcmbJHJrdnRRG62G1a7zkxE9DqvUCLQX8R1XBjScJxXNYqR1J7EVE7LYA8d8Z5ydASQ3fkYc9ded7heQpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECa8f42xJxUNKJWmF9Z41uiJTroJwLbHzazTNnSCUF1fCRgTgjpsbW5qfyXbEUR1rTKYGd8wNei2ucZ4CVnBQJ6",
  "key1": "3yP1uR9roMHmxBsuTm9vxHNp8TKJwjo8KqLHgmU3zY4KY9kVdVs3A74RjPV9x2VGbrWzDiB1N1CBfZuSb7b6wvXb",
  "key2": "4QYSAoiAL5ZFBs4A7USx4ZXCy7uLCHPNnQDGVBksJuiX4iWsVksE2Qg6Q6RZ97BDTpQEqKizPrphuDzS1g5LQVYg",
  "key3": "57qFZZw92MsKNjtUEM2PMsSmEaEMBG1Pz4CbEkrY1VLPzvLL27wCJRVuD1Lj9jjm1Y2yh7CJxXyuGYY3W5Caotoy",
  "key4": "39HJrLVhpn1q9BbB88sjaTQqYwinbATXNgudwoemhEXAVfEVV9PmsMDdDjjbMeFfYmneKGY3kzU5cfmkyJqTgRJ",
  "key5": "4jbA2eLLj517tkrHMHhdeF8psFzvKfhiLfJVbJ7DJ98D7e1ukz7W9HLhCKR9wkggXPhT5KnihtN8Vm9mfu8mNQnN",
  "key6": "5PZe3JfJN7cRQqPM5R4MQEdZqsWdsdJVdh9vMZ5wqJLYwuUN36djTCTtRt1PiHhLuxu7UkEfmFrdcLKakgv74GzE",
  "key7": "4m8h9oPjKuNe4mMXSsujJtR48FUVdt745KeH8XL3SkQ7UVZoD3VCJus1NP2WjvfvHTjS11NaQXNn4fuh83brqSgM",
  "key8": "5D2xFa2kK455k2zfppTpTDqWRfbPeEX1srUhBZdJrmStSFSU4Ujsk7eXJTKrwQbr6hZpd33FCWGG65rhADvdXoo5",
  "key9": "xjFoGyB577ZMdbMSu3yom3SHB8t33NfWQT5RJCHTX4wVA6LWZ2bQNjsvP4mPQDcmgS1hcUsTxJBHjLa9zYD3wzo",
  "key10": "35ERWvDvic2VTnHwE4kUvH3A5m5cigw4iBxhuH9d7rwKQs8RY76pujARmmmoXNLRkrY2Q3xqf8aoyhD8VqDX6Srj",
  "key11": "4P67xNzAy2enxAb2aMTr736jQ3JjCQuXnzqdteGBHXAMxieu1HmHmJ4UbKLbzLP6nesxsCybmNj8Jmyu3Cd1SkCs",
  "key12": "4oxMdS466YAmECe3KGxWNjsAN4F4bopCfhHMyQVEktNhzryZUW7Csx4JgmBWyAsETUPxHzMb8txNDaCRLuiZFKmL",
  "key13": "ST8V4Sk6127bcPVgLC1Um1FGp1zgaVFdrpoMvbf5ag4Rn2RLNwQHwFm8q16NzEGWhV5YYUEm5Ykwo3x8dBZ5qgQ",
  "key14": "4nH53cwXFZVrheDXpFoVLYpwP3QjG8vUfDhgsLtuNJoCTYDjjDyWa9oGxqF2hh7iVMxkxhs6FYMEhQ8EFXrq6cDp",
  "key15": "5GjKhmfvgfBeghtKv4fEasYbJUYwLpEqoqvMjrmhUXAvqzDAzfYJj5nVEC8XfHCLFg3PbngukkRmTzLsRc2r6VMf",
  "key16": "5USxVbYy9ZioXBCvzZdMYpwwxAoEV1gcFCVo65tLQ8h4uKDDpkt3j6zVDifctWaJAsBvQG3ufsKzWgyCCwF4TKeK",
  "key17": "e41ZbAkgGuZumRsPeCzmg24tbqT9as1kh7YveYf1DmyZGDMphZAXChWL5LaBtPkcH4ggTJsAKni9sHkQrWL7B8E",
  "key18": "5tDPSXa9MduPKxtrpoDzaqBJRif8Gaxqt5UaSpHoHfGb3D8EFspgXWNRYFGnNtqcDG2TcuBmCpKy3WEPbjzLQDj8",
  "key19": "4YZ15ET2YwjHDQiPXPsM3DrUoAYUgen8SGNVgd27osYR9UZKhyKfhAABXa9wjgRPx935Bo4EA2p1pHqBtxUQShJG",
  "key20": "3sxiZ4h7u3AYrB6JQ7Pa8hkn2TeEFpQaKRsfwATrkT34MSzBqM4of4sHxnMjBTSk7WS36o2FZcgWQuFMPfzdm2TN",
  "key21": "2AWbbkiueXe4zExHxfphRvAv4EPbDgrXNadWa52Qt3o2SZTCHUfdtnwMXWUjCwQJa9bLEvMkFcsYsE8vMjnXRSVF",
  "key22": "3VSP64vqqgtgQmkX9BZNjvZJBy6LrajKpPt8UvpFXwt54GSTkJtQKnVJ3KPoiLmFSU2HMTCN3AvTxQvsm1VkhFWD",
  "key23": "2SFatFnkngo2WDqnGDnWmjYNzJjkTmZZbyxmNfbFVo2v2bErZyWie7Wtp87Gxpzo6xEbFvcN9dRzw9NJSVe9hnEc",
  "key24": "4LmtivRagW7ZxoDysmrViFSCpzq1WYVpoW1ECHYhCmVeY36s6Gc4GvJ7XU4sZGGsz6EXHzLrkMewLvwUKjv2WykG"
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
