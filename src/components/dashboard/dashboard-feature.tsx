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
    "4RcXWe3AtBo43rhGT9L1NMxYULPEyDsJsqoWMZWW2BdyeCVg9c6qnRxrnpMCi6fYRtafwNxrEhzfvhZpUD1xywBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ot9jFqhoG5MoS9pBcTCHNhtF5jnLcQegAED1mdteLrKtgkNJm6rQSodAL6cu3keCg3F2yYBo5DE6nsmxSVezg1",
  "key1": "2kQ5gqf3UNDtedsBQE5bxd2eBsUuBYxZDKkTjpZsZYS8vYrtEimTMv6aB2MHQb26X68JJBMk5FnfswzU4W8auMcr",
  "key2": "59qMFsh58kWJDJK5peYvXCFdsYBdn5W3VvaJtp8CzKU5DNGkwCYNXVFrxhHG7UU6GqmXybSZyLg1yETZXaiFAdrM",
  "key3": "4M9Q8Vkakermmp8K2XhoGXmhHAreVeu43gppzbbyp3jWmvWRwpQMVtm8jxB4Z1NVx6eoAf3QCH37ErqzKtj4TPDV",
  "key4": "4iHGMLHG6WmG7yuXvGwNeCYgrFtaW3RM6mgx9ApRP5VcvQ2CsaHvEfHbaSvV4y98tr5H8JwLxmJ3tESWCmFLruh2",
  "key5": "327ZmSr79Hy7R8YuznWs3Ft8xqUDbFm51DF6zQhm8bYKP9RbpY7YvEv6nVSTMb4WhiwSrf78Z1RXtUjqyTYRuwy5",
  "key6": "5w9CHYtuJZZ5xsuYYjG8Vd7Pzv49XvNr5C66Rd8fMSGFqy1MVh9vT6XAgFNianWtESFk7wECNWLBYUZXSV2U6Wf8",
  "key7": "3e2o8qFEn6kwKwbnDZVNwTCTgmdunUUTFsUfk4EeBT8whsKGoFFxoovGmTEMscM7kHWASqdtTXXoYwdfpNUMtyvo",
  "key8": "3KxHPL8L9wMZXNWfym88t6nJjm7yFbQSve24vezCDhofLEc4KGNkqptdac8TpFLHByRxdCoReDgx7Mgk7KWiSmpt",
  "key9": "ivMdHrr34A26cbaL5mvyUbX3BYahMtNiKGbFfDfXwQFbLwF718BLy8M97MNtpVwDz1b6XMcKaBZos3bobZjfGrs",
  "key10": "qjdxbBii6aptcEqbW6AfYbeucT3gTtn8PU8WqmaAQEj2Bv393hWHLrkhToKk8ZCvxaTFiSoNKNPv4XsTUHbmzdp",
  "key11": "3cnGcFWuJ7Eud9k9pg3GpKU7NqB5GDUeA4iUqwW88YggBXq3foHU4fpyr5YJPzq6eDXsEqzwsak9Mx7wzzzv9EAA",
  "key12": "3ypovSnHEaxaJj6xdfhVHLSiLqrwmmVzWRUJtdYN53XmBvZNWQdjm8EjW1fgy7QughmiR4kLthbH3e2YLRAMUFbd",
  "key13": "5AzghCK95JwTjdGmioyQonLPokdohYMFEfFyvt5tky3nL3HhxTccyJSf9uhwHYNR6CfAd2QUPTzrEWrQdzGtq5gK",
  "key14": "5HqF95YxCbAqZSWSjSMRqc2cufmaAw69Z8EbGe3oBT1p59YRNGE7QTZWdELz8QJCbt7gPvi4tA8WSrda1SMVhQyb",
  "key15": "5XYnKahfn6syw8jDaZcPX2zZHvkmD1addwwuRnzHZcjqZJRjRPSURNEamF5dngfFjmhXWZQ3Xv9d2jDYnJD367SX",
  "key16": "b89EyDgo3BT7o8iFPvVK6GjGMucehH3aqQMJeUcS8S31mFPXLzcXjzFH24sGGRT1VGCmfxk3umZnXZC2NHQmKNC",
  "key17": "3Zx9EKjAi6SdSFHqLhnU8Xuia8WobnFBttRSQ7NgxAtafoNVhdoQHph8WFcvhoLU3zwvp1qpjxwX8WDfP1gFM844",
  "key18": "925W582Hf3kkzroW6eLD9Lse65WzHh9N23rYcBbPyr6tzyWg1say95MhnenwAuE6yA5iiyGpQL8dqqej1W7gUp6",
  "key19": "4QmdFAiGr3jNunTDjFg7tyTYF5n1YxxXSn6kA2ULwxQPJVVuAoV224DEYAyacoUKfiB25rot9nLjtXeam2banoSf",
  "key20": "63wJmgQ1CK8m2vVm17R7qHPNLH6p2Z91aUwgNZWDQGHgfANn2uVRKuz45U6deq4DNrH6NneBnrCNeCwNxjhQqeCz",
  "key21": "d69W2gmPrYSFTueW98HPjGPFYycLH6JaGVr1yQYXtc2t71sHsRY4ZhAmvf6Jn2MjBEPe3Z5Cyxs2Q2vJqTBU6ok",
  "key22": "a9kHLT6r5cd43HzFwZA4rKWhU6BNKVVwKcTDC8i4Xm7wqBRqQEMtQKE3eceVDucKMD83MXkmRuN6B8nNd4NH6TP",
  "key23": "5sgznvmM5Ct6QtVJzZa53gbcdRUkX2fHTAXRoPRmmDUKwMqfjsYprvcKarEWM9swtiYzBnmXnADeZ8HSLdwt5QZf",
  "key24": "2VZHxeyXyViL46D9firaawzooKh19sH6JBE9R38gkNJmHJoZfYcLwMfZBAkgoCSRwT43RWNuP4GrMrATvZAgFKwf",
  "key25": "2w2rVBkMKHXngayxMotvZRdVzZkDZ5iu2eqNhwsUYDpJzwcRa4Y3DAwgJgpHVHHZCwikWgxmKEm8CsCxszjozWan",
  "key26": "3sM86CKX3Us65WZRsidCHJng53PTMNFFmMD61Ap9yFT6b5HprjFEZhtRMZaYjMdi8SufjpkEx5xSB1wz6mwyWLtC",
  "key27": "fTwhbT4Sf1TBuuo14DkseNkPKCYEhWRJNfm6LzBNYam1CFGwC8kLnMa2FHdJf4eg4op5iXTXGLx1EEmCfStZiD4",
  "key28": "5cSYA9XG8rk293ZTRfJnawk74upKhQ4F8yo795wmCAfNDjxna3St3HnCWw6tP23mNkdoT9qo2MSUeKr35L8Embns",
  "key29": "49q8a1ibQFpfuWdccAdqFLNAtHbiakFdTyY5MKzcwoz5FpUsyUyv3n43HHzFKqJUURkzznARTNi4qU7oUq2bcx2T",
  "key30": "5MSu7DEGPuo1vmZCPHiEQtqcDmVGWaETSyrwkw2Pp5n3pBgwEFPDsBezLyV1v5K1ce8PhXkr1VoiHvv4Pg3uhdzA",
  "key31": "32bGXUV1umLdEWBGD3JicSEiEHsBSFdnwkJ9hGjh19Vpm7Hmix7PqyW7k4KSgZZ4NVpqax56PJy8ii3JcDRggAvr"
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
