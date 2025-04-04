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
    "VNoonnJB8YaBKzq6ZxxoytTV4VtMWBddiDNfyW2coHH1FehYLgMUBDErFgzN9pDvAT561F7bssGuWoQjG1BVWhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjzJBJjKhTW8QroA1kwzSZy16bPzDJDsGWW5uXkktD97fJDaugj8XG8kgV8TwCE467bpQVQzdxCqEdV2EK1cmRA",
  "key1": "2oFCgso6ykJbG8beEXr1kZ5rkMZyZpiYy2mekgCPLAXqsKw988mPUofjmJhwcHPfugiRJKq1qve3FQPkjQMzfqn4",
  "key2": "3QJEUtN95PVcxhuhFDADYSmj6AbjhgGQb3JndPDc83Yh2h9vSP9XCF2R2r9pjWNbzJDkqxVXPV9SPnc9QtnA7EAm",
  "key3": "3LvZwQdcFNLu7AiCrBxPpuwrqYnsVo1UAJg2U5AAr1mHTvhX9Duycg6m5Zywi3sxEYmVRFXU4k1BGZUn21f1wbAN",
  "key4": "3SZgxrnBATbt5fW99LW5222ZN11woebwWJBBCxYqq32zvL586zyRYEUkjiiYGDctJanySszrSNVnC3PoaHGpggon",
  "key5": "2T5mT6PcmjvtAVVtkUtkUpVWwMCS7TWeKi6YgNtdSShJM2iXqqQJaGT2yzWDaiwxjdE3wJQCCjUv4Xf2c2SiBUdk",
  "key6": "4SvcZZtfJZ3tCxopwCkbDKrPuouwGp3RUSAEqWGpNPwJQF7fz1pKi9LdgiD5Rx3UzZAxXJH15XRcyzHxPevng2GF",
  "key7": "2kZ1dSm1Pmvex1JzPBJpDBTjk8vc7n9a7RqsoTNMX6WKUNm5RiZrfc86NnCahjkEE31aEfq5JDYWoH94hL9LskT7",
  "key8": "5tJzzM28uvuKZCECvmmHhQTQGP8jZsvZCzsVU6zs9b2yWVKa7j6XhvgnwxT4m7hcYBTBbe7a3JDqbafSVKhf5Ha8",
  "key9": "3EGw1KE3y8bBF5jCQxsNq15P9zLtdWTMsza3jULci8mV96BqHwNUB3votukEqk7aapgFVFZQCK9XfZMKJWgUoS8W",
  "key10": "2t2m9Fiunfph9Vet8tecxuwRryMDMhVtU6AuaSBL4ZfvBwbBV7NpegMXVxUxXg5h7e5AnYhdXRM2Sp8uFT2bv6dM",
  "key11": "KwkgZxm3akEdw51Kg4CqWu95E953E8JgwsMFcX8yfb6AKop5E2uSnbMqYLZZgnk73gw5YpAnLVUgFMTzmUvUGdT",
  "key12": "27YZZ4uPvXUGZNqhycAE77bHj94w8wvMqn1Qg4FNRUuXi3qTzpyyHQ97kR7gbvF9Eo4fJ2dZXDqoaH8Xzwssw61w",
  "key13": "3135vDFjwMLJhVHkySHQvVfJ1nKZJGwVHWSaeueFJFo4p2rtennLVMD7MHx4dwq7mYtqWG2gYLP45jcH8Mobn6m7",
  "key14": "4opy6AkZNfAKcTC8M8AF77DVbsnHuTKVpsm4QXfVkpiV8MAecLRoSDCGMnBtrQWd3uYegkEKj3keGzmUqNU88Dqc",
  "key15": "ALs2pDZEwx867cogsZQdxzgkqdjhj618CQtxNgzSoKxEQx99w3uXBF8fkKUSTNbmBtscLtbKa2yA8pnzVAj7HW1",
  "key16": "4Y6D9TiCk8AM2qkxH3UgMsbyL4iffYSnzzT8QdufwWpChyqgJKvaPMSRMJTAf6XT1qnT2co4HbsJRnAUfueLFjy5",
  "key17": "EnTHUJZekGrH96wcbL7dFMQ1sqpZibBFkUw6Jg23TxQLT6yyAWnvYQgdgQDHZQMvDHDjYdrkKU7eJfn4sCUdeWx",
  "key18": "5sWevaA1LDfnji245MKPVZxMTaCMxNQLR2bQRXhktLPTiZQEhpWdTvaLj21errLqvHUnYCNQhY4RpAy3ZoGfPYac",
  "key19": "5rur9wkqP34RS5Z1ArDMhdgveATVTz9H7mAWjJ121gTLpndXRbq2RyEAcf6g6XxnEvyFe9iSuUqU4JQzWZcu5T5A",
  "key20": "61AbJQu8wzrtPVfroDyQt2KnHEFKhAoyLKGVy8VvUrCbTArH6SiLjX6dhfpVYVfdLMJut2TFGJt8q5uvVPZLx4kv",
  "key21": "3JU8MpdEDu9FW4oxUzb95sh43WXXbA65Hyqz5PVixN8riWtnAZrMn8a7hB3EkmAnP54p78guRGQ7QE9crWFcki3W",
  "key22": "52tgWPMnFo95WJQkHfcRpLa6FpntFu9cx8oLdFiYSUACJ6C1gk9zLXUvbAqR35wCVUxqSypQ2bSrqDDpTTVGh8xL",
  "key23": "4umbFHXwb7ct72Mzv5AvHx2hAgzzywVLxkZ6Ug1BPBD9CN84XaXba6fmjSytysNgkR59DtxZmAUtmiqFJb4xJhZF",
  "key24": "57Q5e51AFoPdSdkcsabLA9zudwSJYmVuv8rCPPz6tGtrUeiJXHe34SMh3z7MQgTAaXLkkXEBAXE7J4Up5TGujcJE",
  "key25": "5Eafsb8SRxzRyXmNrixva2XNxnbokTeJbECFeNysJ8zwAQpZBDvbVqWUBabDcUoA76Kr7Cuo5mo62RuDX254QzJs",
  "key26": "5UQxz43JnJJDyoGsmrTX4vHfeguXiuyhZpUaKViF4Yi5Ci7FqPFapeVbEyVdBaASL5GyEfeeWFZaAQYUKeLC9hM",
  "key27": "4hTzihvq9shi2eYjp2rgxTrF8drFhMNiCjUF4tBtz81PYrKmkUiFCkMYeaMRrxV9TaGeZMzVxv7rVKWxoG1nErQh",
  "key28": "4pik5CBRsCUpt2EYD4gUvcJqkPsdn6RBRt8z4ecdHYzsWdYV8JsS5AfZobAb23UD9gE4SPLZZQNdbUZycCsQDNRg",
  "key29": "4dCuy2azT7xYrwcQkL1ZvigBDAwv9ZeA3Q1ejRW3NcTykQjyB1pRCZymSe3z8xRUBtUYM9KLVJ7GFiRWHYm6xGrm",
  "key30": "4WMH677MhmHwpfotDemReqwWjvUCq11E9CRbS6zWxemVFtvaQmGupJVgBR1KhNu6XqLtQtFp13peb73cTYVAVxk6"
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
