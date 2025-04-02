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
    "peHyfFvdwr1MeBnMXAXaZ15FcjsUS6gibomQLq1PAiVUoHfDWSkYm9cBCbh5eeV9MkDFoiGdVz2M8ie8LtSaBW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R7nHEtPax7K6o28J17ziES8w4k6dt7TBi9tVwbrATvBhHNqXrmUCqjD7yqmY8M6MxXe7jbCCh9uMPhJGkBYtGkK",
  "key1": "sKU7956ZtfVVqBwBhRDUrv5bFhTF6JpWkKnimffjpDmCoNsMr2ZRtcxQdjFeUrBTZDxGBajJPfGFqnQSnrYRcf5",
  "key2": "2Fw8cYeEc3hWzZgjCsSosHfieX1u6r2qyocWsfHQYLnpm5QLa6CsXRioju68dSaTXq5ENcjv6nxpb4hixcpR8qHZ",
  "key3": "zTigkyB6CWqahAYRBUFMBapmR3k1KEUTpWjVMv79trxrjK9pRDGcQNUgbjD1szzjQriX2ErVqm9zXdkg9NDvXCM",
  "key4": "2NdJN8b3CAew5QQKyf2gnC6hqANVNvwjsjzNqJ7XkPwpQpyihxyZEkEyaE6gc342NnC1xnPWQkmHnekuASL4wqyF",
  "key5": "38uHA4kXRT96kqS5t5yercBobGvEYTgWTNznbpU4us2brBXwevu75GXuSWdnDBRtHdVhcMBxuX3AoiXDkQghrFDF",
  "key6": "4hKuswEYysfX7bBZBsJMHK6geYjda9ijrpBRTFPEAoGWDAkoJjg547cSPsYAqHEyQ8EBP1s5S9v147kXUTtLKEJY",
  "key7": "NaeWkeFVv7bjy5kb9f23xr6bbLMq7rsYpG3qBvivy8sAEwirtYMgHDmtdrYAFzFWDoqD7AEMJmPASJ8Z9rWyy1p",
  "key8": "5kduP6UJWxpivCte84fyHCKPSHnwEeKJmSF57tRJQE7piuxXMq7Pfwgech2EbZjqvCgJromqW3Q2waUHM5PV4SiF",
  "key9": "35oWCn1W6bhSHeLTXuZEweUCU1yNpNEVGKGQSPQMszee69Fvrmrjo3V2LscPUQu2ZreTYNX6fGiSHLw9qu6E8SRu",
  "key10": "2crUibejx83LMsDL4wseae1zCFB43icjYHa8xmsjSYz7hJqCkLsHwAEC4ubtij7et6sHChBycR6MAdELt4VPG73r",
  "key11": "473uvpdp8RExv8zCavi1WWv7eLRqWYKsPXibfHRNpzu1xxgFcycwwnnqCivCv2gaHFUTpc7CKaNktmxmdKyQf89c",
  "key12": "3e3UhiYokqt6h1JzAhhuRP9nJ5fwnuQYURnsN2KCjYBjN8yVDMHc2UhgsFM6LLMeiVAkZx9BWYNrox17JRW18CiT",
  "key13": "4dT9Ckn92L7kHLnpFmPMgRWLs5M8zCchM1tDesDAdXcCA3W5xamSB92qqRKW7pXRCEY7D3Q3DCURhcK1BraK35k6",
  "key14": "23Wzrsno2ABWGq4wm73fBitte7U9ZrgJVA6CS8sK4EWwVoRknmWrJ94PKjG9ZzbmVibKmM2YHAha8h1mv53DMkxf",
  "key15": "ABW9PPF36JvW2LYDjCyeKKpWjqksZWk4c9vCr4RVwn9jGSCxFeY9seaCrgwwy2kw95GYYgYB21qbkmS4XbHcaGc",
  "key16": "5gVaGykLskVthBnhnYiy96KZxKgouXogDFpFjs1yQpezXbRKuaW12VBLDEs5e5aZyytPuB7agpBHM6CBk2Ke3iij",
  "key17": "41eZHx46pBg9ezu74G5Zws8nfks9hvKb1qfF77uHG7PcMCBT4noe3Tty9BYby9UD74kkr8cEcnFnjtbpmKW7UgxM",
  "key18": "2vox2N1SyA8EtvUwUSLnDqu5H2X9VgXfrpi9nFbdB3pMk9cd4NJpiVm3Rf3quU3bSuGhebWkr8tJ3VrxDJUhoZu9",
  "key19": "3VSzLg5ifj3op94zXaKxveDUEBMrf3o4SmkC1g4srN536BRdGMwmnNBuyaaLQnHDzQGT9mdvhYTpEF4H6XY8C5ZE",
  "key20": "22g67qDBEVZW2QfjVV9vFkF1Ur35rwZQWJ8A6L9S7D1ANGkNPawxCgYmPp7dN34D3gqTCU1wjMubQAX6WMoX3q1B",
  "key21": "2xvzdn9xfQ6xFYykmGRcz3wj6e1ryMqufRtMJog1p9SrvxbqLt4wbP827tcLB8xJfF6GqSDG9hviGunjBk31eaph",
  "key22": "2DekhHyFgAK5MqvT92tm5Y6UJUjk6Sbk3QKLZteBj9Y9WneLtektmSydPwfSs6zRHD4JEdJBx7YgF9JLULUhE1pt",
  "key23": "63eEkN32h6ccCQJrhpRzYSnTuYqK4Bqf7pXYqBud1pZ76GhcwkhQEJqw4v1pWXdEP5ZcTyYzydPgPmsnWd7N7CJS",
  "key24": "2iwqrMaCT6A6nfZtoXq3EnY1zAAaLM8K47kEa96mgKLx3fQUWCupL282HQNpyc9ZBVu4beTnxsBhZwvZbRC6EZt",
  "key25": "ZrwPYEwtTumBV6ZHAMtz2yeGMN13ER9oXWvWizpiSu2YKp3xuKL6TdE44cPyLXEFexRjJ3AVMizoXswNJYbESFY",
  "key26": "3AKbpXGUCoizmgdvpabrm9T5yYyxDEYT6QxrbDEvZc5kE8rLSZQqcnSNngTd7Tsc3pyyZTmYgACNrAdQKYayVhLy",
  "key27": "2cNWhvfStu48QwEm7PBxheW6UWjcpmKmCUFsjYqNgu7vhryomoWgBkvWS3C4PExUQwSgjbVHLchgPxShLbG4zAJn",
  "key28": "KnU6nmkwfcpU8ahfTZKX61hGEro63A72D8bjsie7gdzsdJWcui9zKsh969FMkU8WttffsDNFwFXknHkqs4gWiUC",
  "key29": "3LBq3ERkdyY1LmAD1RLnhFL9TpZf73vr925QiWpoyVu1DixKxyBjyyBqjCLybui7rkKmXHo1Q9eDm5adAHeuTpvB",
  "key30": "Z5czG3yuZkQRPKCjB9axy6rPG2kexmK2fWbrvKz9DYexWrc1AQLiaLKo2SrhCSf2fU3p7wM1siuqrdHphxoGoMu",
  "key31": "2fGUMVNbtSC1hrhj6BREdUCEX6esfNxtUNfWXm7B7LbMpCTjpU7KKz3zfbofoJWd1jauYm9NnTqCFrV9hNsWRCMC"
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
