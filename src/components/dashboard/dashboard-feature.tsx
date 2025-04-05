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
    "5x51EPUqQ9Zapde3DM2XVXHGWEedEQXSS9orp2MBbj3YJt8eeAyZxsCbqBqpXdAdjM8MKg8VJgxWQS4RW3hVQgjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Njv2syUsn9bcWVHsaheiGKH1irRw92T63LnaxpQSzB8gJxxCHPoA7Meic5zv3rCiRtcvpij5xcN5Su4Gpe5jYir",
  "key1": "3y6BK2tpDvFDRN4wMNZQe92JTawtphaZ3yq3Qpqrp4wVnHJKdsyEikC2uZMBxoZL29arrMMRGtaEBYRgcmne49MA",
  "key2": "ZdoT3dEYXzJn3mfjd6bjfg3VH9VrY5qyt2z3vU9fewRP37c3WAVd6tWZM3kki3UB3KAeyoRNikTtJUATS6qktcW",
  "key3": "h8VdUDNchHYubf1HfxJEcFsgSG57etNsbb4WkcUPbH7wWH1yxsLkfW3EV1sCgfMyEYy9bAnJ8VYRYkQGVZ1YRMU",
  "key4": "33SMXPm9LyxBxENV5TcqzfYiniPTpzWWn9BrtYLKK1HrmmA9fhiXaUbCEQdDmTxf2yHZiZHzEF7gFp9VnFKW3nD5",
  "key5": "2ZxsqPymJtXyjVUkSX9N4mvAxyQQfgG3KSGYENrG51qQUpwbyaLurZF9MssUQknn3cEQyXE4a93FJ2NuqcnYHCeW",
  "key6": "5j5Kk7tj47L3mgifwU2GtXkdj2g6VdhkJvQpPijD8KB2abmdEkYo7L12Pd5D7AB7Cu5pg8DN1e3Z6eJZuGUvRUu3",
  "key7": "3Ar1QoYumNtLHRy2Wzhp1uBLSWcZX7Kt5un1MfHiBGBAvM9TkTrxmfGoAx52AewzKAeNw87ZhzqYdwSpHsyT1PFw",
  "key8": "34t4qFche2Xgi1D65S7npaUvwbHUm1GZAvNpnQs5jt6KphmkENKg4escVx4isYH26T2it2ZQpdY5B6sY1ia4svVx",
  "key9": "26zHvdoL7Dq37FevYA7zdC224eQjRZ9aj2TdsmVqUi4B7X7NxJBrtxdo5Mgy1GLdh2SGnCubiLbUxcfmp44H23W1",
  "key10": "XfVtKPvEx9ymJVdGSCzJPJnLTSDZTb3aGfXhM96p8c55q3qQkv6LJ4VcTQ7zwW9becA5bMmp31uZTUuyVboUEAC",
  "key11": "y2cfHvWZPHsiwYcZuw5H4Xdi9cppauboQUbqTKWLyYj9J2gE1XvTDPeWZpod2hDCHMYu6rZUDySSrQRX8ooMRFH",
  "key12": "5X2xDfiL3pyhmP5cs5oXrsaoBSVfAcZ7oZZERkZa8X76Nn2JDkmCkW1foiFDX4AKcouUp3axHZJfGusSaFLttTia",
  "key13": "5R3r1UpAfv6eQ5DTiXXGMNc5ub2eiB2HYHftjge9BseYDpehGkNon4PXMP1b8mq3DyhvTrNhC9JnK3LVeYne713c",
  "key14": "3wDGpxpCbn8je2b6Z54qgqrmWAbneTLAFYKazNECuTa31A3tNJVBdKB6QQdryqPk9G7gzQJHSRsfae2LdDQCuJcz",
  "key15": "3h6kTF13Je6Awi4XxKedA85tATpiVwftwU1M8oV3bsbZp2yMcQx69RXLYGJAmFUZ84q2wjTmWRL65eCFutHpiAVX",
  "key16": "2h2c73HJCRQCxh1VRURFpiPW2GH3kyN32RHCCvu51K138rZPvgHP7kr7nCvgRBrkbWTtLPk2yQMhs1BN6ZwZKDtM",
  "key17": "2nD2zyfVgpypyeLhcd8fZMYrrS4ivZxGmEa5azLrD1XVdLRcZvzxr8oCdZLDD74AqFufMPLtmSfJqBnq5VmWxUmW",
  "key18": "2VLcrzhitKo28g4TBeNPMPumxz1SmAKvKWBhnq2mFr7qJfW6j51dx96LXGjpJGqy7yYYgLHGbTRqwkTDfrWPzDzU",
  "key19": "2UiZY2tEDoox43srseZMjmuFEp4Gy8wE2JkcGE4vaSpMsR8Qz3JHFq69b6iwNHuQE4fwA6Qx7rL3UwvaZ28K3pYJ",
  "key20": "5niAxXy5pWrBvFeN6rYcES1C6YfrzgWdTMFkkjFuZarZGmaDA4YPsTWeX6p9U7ZNsYCWpxqgngxNFBH6Ph5UGuzQ",
  "key21": "6PATp1sZ3DKbvgz3FoaG5Mn9UgD42aAZdoThwUz3hhakPGqjHZLPrZ3s9Y85biTEihCQuUwKzMwQ7qwLCrmWEEw",
  "key22": "57k6Vabcr2Ku4QTiQUBBfeQMKLiE4vdA9rNfc6MqteBJoyHBAvnANmujSKPiixEw9JCe9f8KG7frc2eCn5VtXqvH",
  "key23": "3iZW21BjTtW5poMzXv1hJNvpiJViR3cMHa28PWiSUfZM5Tu8zERjdPUjxq3BSzhdB7i5evd1eC7TLJ9tt1XQvt3F",
  "key24": "4FsaUJ98xSui1czy4AW7hSe1FPt3Qc7iCXMuecRELMJ6aTfZ2yJUstyeJPESii8Ua6Ci4AMZkDc8DKQqRi9gPn3x",
  "key25": "2eyP75N2z6G3m8oNoCGW9Jb5BHck6rmE7UetzfGfNPAzSar9VJ5JpcFHu81bHp7M9Kjt7eaiBCjpUaTE7YobuL42",
  "key26": "4GahEPTtuQ4Z9ikcomTKytGJoPWtrnv7VwhvuxkbLfNkT8zjP4kKxXoxia9QehcXYUT2CDXShzjYdkQyzeQonos6"
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
