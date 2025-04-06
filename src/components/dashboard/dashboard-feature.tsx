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
    "qSTq8HNCSog4UwzqYmVYGPF6wc6VpNPN9hRBbdUuHkZFupyrmhZs2ocbicqgQPmtmnNjP7tiTWF37ktuGcmwNDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LMTae5ovPLYDeY2qXcmVmxEj1XeZ3YmjfvWzHuNadZNJf6hvQMcwB6cStm2azNECxyx6zNBUk65M9b89KGWTLe",
  "key1": "44wRefJ5X1Hpt3136UwayvhcUvSwKLQvMXmG6tTPaLEctZqXL2RfSfo8TS6mxcZradbZNMjsaTg1yTMMJXwXVhC1",
  "key2": "5pQrA5bGVUEtE2YsMDodWRtowrSy7jvFPECDR1g3gmxyE37AtjzojT2tXVg3Dw1ZBfabjmPGfbn4RBamvP8sbPUN",
  "key3": "5pft7PuLVSqEUF8AHzok4Srr71pPAUep2XzQmoQf5EFJiRrxts37cXXzy11D5LYtWLtxsUZ3ezwdseKRNpJKR5UC",
  "key4": "PiXRHUx8rDPU9155J6rtbnWgZ1k54TNaZ87vVy9oaJovhXqJGZZ9UVKksG3Com4ciAaK4qwuX5xZUX3U5DdR5Wv",
  "key5": "4pNZAnsTYAspKBYgAmXELxCKHVUo1mRF1rN31qvTyeRPxX3yz6uKdXtQuCuVB5fRaHXKDVs3NcRtGiVgBE8pCrDw",
  "key6": "4Ek72CAK64T2QeyPoAmhR3dcF2DLMDRiP7w5t3i7Z8Gum2WZM8Yq48aZbtKZHyyYxh6DzUZgSufUe7HbZU71VAqp",
  "key7": "4xPpdWPKgnjhQ1D2wotqSPAkMk117721atcbXfbt458dodRYwstRrwZ4Y9Lb57SVxK7U2rx9XSEoJ4PKuHpjWS7L",
  "key8": "4h8C9yMBusbWkQ4wofYBQpW62A7uik1a2ksnin7FVTbzxWpJ6nrGa2aMaA4HWeZ3SyqB96zSXBcU1bxqc6aHw96Q",
  "key9": "35VXDuoDbqqhrKMTz6RQsirS2LV8wsv42agd5YX9hvyhsckFox6ktMm92g2ndV9idNTEaPT9M98TMmMXttuZozh4",
  "key10": "5FSqeVQPxA2eBawLmsN5R1hha21jP7JK1emnx9K6Any8SiS5FKZ9ytWhfAQoZqLF2Q8Zk9N8hjDEyAcWL4tEbmA7",
  "key11": "39pxdZqhDnYuutVPYnVHKkzgYGa58PuMnMkLVJ3yjJXWgcWhs75epquuUvVmFxUsrn63e4TRgnBeoR7qeUmCGEhK",
  "key12": "3T9UUujtrtn5CThsKpizSccjFnKsE4ee3FoksPHcxRdXwEHERbvodcdUsNbULPARULzvvgNhDDQxjbiJ7ZxPwUjk",
  "key13": "2f8j6AixR4SwoDr8S2nZ9cnErqUm5weuhvANRWcrXmMbroNu941id3Ye7RqewcuKhTRFafdF4TbWvH8nwUQQPPER",
  "key14": "5Xffy5nKcPWthgFc2dW5UY5gEwuwKQb9n3UApcyGJJcCBRNb8W9hiZnrkQpAaiuHUTKMbjAd4p1QESW9sk1yjuyh",
  "key15": "2h6pay6tKPEU7nTHPnFPCfkR3ME4Dg7oMvRfUJCDmNyyaKtNJqH1RPiqw9H1pAKhU3pKGA39rWR1nUzhD63iSNmq",
  "key16": "4rZ4AeGUSdr5XAvacngLBawxaKgtfTfDDvE5F4MCFZVTCDKqkaEEqeeMsmNn8gtVk27pvHEWkqrUFsf2Lg9Vkss2",
  "key17": "3UZZ8tJMXkMCfotLkh2gEcAufV7yxYTE5xmjkTjt56VysjsRTz8tYWbRufvGjDhCUZ8Bs8wDA6AZ53EVtLC5PSRs",
  "key18": "5yXGcPooLxUZLMznMoK9kUkoyZcyuam1H3WVXKRcxjcFgsmXZwfQgj4tYC5qBfTmLQi88MQJgmYfGtANFmeXQQSW",
  "key19": "3xZ8t39cRrg8NrxVvU6eUfaauQffRCi853b6R2qjyzkDKazPeoebctAJE8TyZcbpjnztY9sYbH3oRvLUofvK1WHF",
  "key20": "22Z1hA6DcV3GBUm1tGHhBHgr71PZ5koc6D4CdiXSajBiv3pcXrvczGhJMJeHHrsMrnb2neA5fJ2KTTqSkMYKxfvv",
  "key21": "3uxJnEGcptsozvfhVxj4D2RQhAQdyqeh2uL6cdRa5GaiCcbFHsWTmx3brfezvbSzezoVcmLQfJUp3Y7HQu35e8is",
  "key22": "5xRu3fHbYW1CQhM6Vuzud7ieu8isihLPitwetwmrUe2dHK6H8HbbYr66BK1HXmDv7sUe7BNC1faH4vReUXGbhQ3h",
  "key23": "wsbDm6kfcVZwppDEF3rvnT35142m44iQDabS7Hh7BYWwbma2XA4VhX2eqaPGxELxfs2nDwCvW8MYrvSp8s4mtU3",
  "key24": "3KD7cvqcDz2ByEY8GfGh4mNdSTnfJecnRNQBjSYPWqshjdvk2fj8Wfx6HZUdJ8FjytECiEZK1Yqj2d8ocsuSUVGJ",
  "key25": "5hQ7y9NMjmFTi2wjz8jzNnUCavPiHT3iNqrj9Ja5dZuKkqXfjJkFcSFrWm4dg4b8wwwgxj6AUBwbNPKU4X7pNyAj",
  "key26": "bsTeYwDLpX7kvYjzQMRAxyzf5DeAxGujrnPFPgwfSFJTubcrGosNChdGvMSGoLUK57WNt3P7SYiFo7zgeXKDUKK",
  "key27": "42cadWzRSrSUJh5fRaiFyfA4PHWWTy6S64y4Xkppnd4cqUj56Kj5D645b3fco1tKAP9W3QtkRzipcsCMhhWvymAV"
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
