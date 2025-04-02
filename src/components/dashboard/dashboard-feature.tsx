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
    "4xiu1pMZFev7xxsGByjaqBL5WeMqsu5DXKjANbM77U7MD5KRycGVwubm6UEPnjh9PMzMwyDHVK54dCzN6XHKujLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bKqAUoBYhgvvjG195HdjSCKZmLP7ZJbd2wG4TUaJN7MJwsJj8TqCoeSbbQD97f2UZyJEbP5a4DUHhErrVaGERfE",
  "key1": "2wKSbTEozptNBDMMAPss1j4AoX8P3nNWFkEay64vguhStgsYdEwNkirXHyuaz9MND4g6Sub2z6dbZF6q2xzMTDkX",
  "key2": "3RWc5sWXmW3MHNJASgs7QVHvGdyRRviCYJEecep2ojjRRGDQ6Vv5vJ4YKNewwgGQDVw55LNnu4BdduQ6G88emfdU",
  "key3": "33Pp9uNbKiTD3asgq4fUS5JQiY5mZY4LX7qiXyxZig96Tzhoj2psjgR2rxcXpotS1VhPjHsVExskzsHNx2VkmkwR",
  "key4": "36wr3Af6qFoE53K4bWpfa7wRDoqGrpXa3uQScgT4ozi6N4q4nUzkb615cgJrU3g4ndtGRy3Lm3aNCDYpma4BD3q8",
  "key5": "4R1qXkfmbYhkzaFvkVMwqxMUHkqSPecWRwxpmZrTqY8HQoTm4b41sonr5xH6izCJ1KvjLRkQyfrGi2L7Eo7yjVvE",
  "key6": "3JkqkHM4voJ64qPCGhG76yrzB34cJJ9x1Tn7Q2eKk4UXyovDMYmNERC6RTXp65kNc18t7V7B1xUq4YbwSYHAxW1a",
  "key7": "3DpzpmvMSZyHbteA4WyHwqUhBkaa3JrhfiHYZvNwk171382yZnWgEVvtyh1drvNjRWekcxe9YiJwmJuMUUMBoELD",
  "key8": "56EH9L2eerx8utwXh3Mq1RADQT1u39wkmeLb6nxCM3e8YJuMyBXGYPiVoh65U6rpPfP1FVdJHoBmpdvX5Xbt42iW",
  "key9": "4ZhbmUSEWgQaf4VbKdQVyP3EnD4CJTwR7q8hn6SzYMk1YPHsRa9gue8hCJ6kC95Gqj3YgMjFRovfCMVtVJASiZXH",
  "key10": "ukKN6UGjZjh8M4Zaj9LmsFESVAjRwaJHzV8wWEQU3cgYf9d7n6UC3RuZxZGkJBU4szAAmDmRJSGRW4TnUmiBNoo",
  "key11": "48aN5oQhanXEvAJPX6mdR2PZGvAdDpL2PUns794zHW97PCjG9WWtAeSpaNcPx4jSr81gFxVBcj43dvpkFsyifZeR",
  "key12": "5CR5gWXyVVG86Tvee4q3u7mzijunkbvUzuEMt9VibpGwycAKwkG88vAqGrudsENGJa2ogzBCx5jqNnxhPEZSs7sy",
  "key13": "2fdT4UWyap7KF1SwDEkgwy5HsYvM3jrZ7a4hY6aAvEGR4RWZ7xNAxdAaZk1BXNqTaemUtPFju9aoLWEQXtqdzzvu",
  "key14": "2AiGHQaukgHuCXVYpbcujyizfVjQ3Uqf2WcjZYQosQvq5BPUkMA2XCTbL1xECfdqozBxSkiAgnzfhio1NU9jdAZ6",
  "key15": "2ffgMgvpyD74rXmuLjGGDe2MCtBFjVsfjxHVvpob7pDXttUqESVtSfrWCwSgyZFyqX9HRpvgWpnGaEPF1oghqkkA",
  "key16": "4Kk6RTR2J2zXh9tfYRTyVsakY6aWmGePugZC82NkeJJn8YVjHdFnH8H3iyL7QrNdJgr63DshUhXGQzzbxxM8cjCt",
  "key17": "2we7UHURS2QFBVw6rABcbAxkmuHQRozgvXRNZkNnuQpAWHmvfyprB8Pw2BSAWT86h8JwzaaNguw87Rnr5Y6Liqkt",
  "key18": "VkjY4JTMV3ohsDLsQk1oVqibq5CEEYybnJ3o6m92f8v4gR5ySfg57GWLzmcnTC6Ke1iShGFoJuLTvnJHmPL6sqb",
  "key19": "3KVFjPfj5hxhpjnjkGVyW94cWYgGjSu6tw5yKkNVNFk2uey67hs4myvcAAAuDj7gFZK6ZrxqSJNyCZKxTEw8NN3p",
  "key20": "2g2czKjp9yKevuLL4a7BjaBkZynqGRgvf5ui8VywSyANAeT9W6Pxo7tD5oBxNKKgWJb2iDuPHpNpYh6Fj6HtAu76",
  "key21": "fiWW6zktm32yMhE3se8WeKjofHMKBpQj5yrfBEg34JZUBUFYcX63fGXjbEg5QVbbzurWPVxXw8de7oY8PEiuvmP",
  "key22": "2uXR3xe7phRGUq7jmBsYyrGqRULfpSFYwo4k6rrG1jkHQBTBhbYvfRwKdGd8FE8fwGCYGBPdq16BncW6unNYYWXo",
  "key23": "ProYARuuKN1iQMMX7pA3WmKrfEE1akJfDEcjsPCvnsP1ZsiGuH2r87hx2XepBxtaGvhHfEzV7benJ1mXaTpPQjv",
  "key24": "2gjnNwVuSKgKrExzjW29RUjKQuS7M91dEn7z2HxzdC17CEZHbfZW4LJDx6fhrma1bUn7i1Kgf3ZCq5pXnQY64Ti4",
  "key25": "YHGvoEAzjtsjC73a6KyxCuh86yXm9V9N2QquRcRmfXGezh2pUSAWZQpUjad918oHD5cSrtT4Zjqg2C1hS9Yk9eE",
  "key26": "3zzWwUwJLqf51HtKj5EeQbMtM5g1oxfvvh4YK9gd6BWU2t8cctGKXhyukCXYSdxPJs7dM4yjEqjC4Hcsn18MyYX1",
  "key27": "ZWpzxR2Ls3F8BC5dNCNsiNXgN85rPTwZ2GwoDgHZYHRLSADQsBQkUY7awUUwj9DD7618BbGR7UbxyHVRgvPS68v",
  "key28": "2iKbnEMpccCGiUkWujP9wweSChTZ2qUMSmEPYYaMmnTgScx4kSbsvN495QUGMVcEF7BDfuu8K3ifLXVbLpw6Lk4w"
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
