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
    "79srkDdskHEEFVqXumEG2KA4xB9MKX9AiDFTnUU1yND4ARhrBF1hFoNKa6Lh2U9jcoimuJuyZJb8Z6jQHwfbjGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55gHQJVwMpndqNRLAHtcf7RQ63g7qwbtFnURpNMQyk4VuFsWBUm1SVNUqjDjDoE7KKru5xGVXEVpf8h9hDg8TQs8",
  "key1": "dUbPVC9Ta34Ny35KvmoMhFuhZVqJS5iqNTTrreMrrbHVxHctX8kpRgM1uzsx1wKQVs3BNukigBYkNzokbTvmncY",
  "key2": "47tHjUUmPfwudRVAvwCxJiFnyGY5yQ72hVXTNC8Q4jHJ9wQscwJKzf4svaAdqTHhZFhxgpr2fRnUoEcY8Gfvm4ve",
  "key3": "3QievTmWFkKG1U8bbYwvCXhRaEqSpYyheymhujtYUJr6SpQeGMABVN9egBJ5KevJFnuf9tqfg4Sv1jUoK9YALtYe",
  "key4": "4hm6e1WALy4cbat2JnxW1gSW5f8Enzh4xMGuEUcYACkTvpYe2C1QsJ5rxmtxynetnK7pJZWJxQha29f2oiN9Ui3M",
  "key5": "5WQx818KdiEX3k9c9HSwjHQRxMYza1pYETBRfoMSG5cwc5nScaBqVuw2d6ERCPz32jYxKo1rJQ2uzvqFh19EPSy2",
  "key6": "2dZUTYhY8mKnT4nYodmp2YQWME3qL8bAyw9WE41r9gLwTKNYAxC2svq1Mun9iNDXtWVtBo8DrXaS5eHG3H6qaMEY",
  "key7": "23QdofRrjdZ1EYVVwrQ1SQ47Li3S837TuZkdZw7dehKuSbsT3P6jpMLyAds2UowJstvXpNGS8vKDdLudxbkVu3aN",
  "key8": "5nzCDT5WqNrY7ctDSN89vdDGTdfNMk46b5ZPu2PWs946uQ5MTg33frGjHGmhRgqHJR3Ni1JbCTq6LK8K8mRjpKo1",
  "key9": "37feP1m8NfHZEJq5LTW4vSJMoBmV7nzpc57rMkArUaiZT6PKRWhDU8LaH7vMPNjG3mRbSZpg84QDN1og1qhCdHZw",
  "key10": "4NDDREgrXFWSoFSfaTovanmUrve6wuwmGBCwY9JiSdaCWEZ9FphHNhjH1CQzsqX6eRWBqvqgaTuvpTamNXmuJ4N5",
  "key11": "5unoNcPwA2e1mUZK5Zhn3ADxtXHVkVVD8dYt9xBsprttDPPzhXQoyUiqk5yZGVgguDLnDJLQq6y9sDDurPdZyCAY",
  "key12": "cA32WBHnFUs3BBoekxG7SdoQwFAfyDyvdzKXKvmK1vA1c2yfFGkQ5cKy2Gj9WngXCiAef3KmK17kT5hbpWDp9WZ",
  "key13": "5cZXPm9R6fcFDksr1E92HPuxv44g6P3Xj1HMuJQtNWL2atU7U4porbeBQeCQFFD61Z8PpVpSye42EmowwWoxdjSL",
  "key14": "3YVGw42mrsp6sziWgt3NtBBfLnN8tsd12PE74DcZGg7sB4TBX2Knn7JKwTBQDpKsHKVPcnZFaAYLaDaLWJ3bpRGn",
  "key15": "uMSPVAVDtgL2T1AYkZcSE3UQfbSruUsaN7zPmhtMkY7qt76AcFPrWj1ZG588iRZL5Hs3R58u8K9r1e1sfKgiYoZ",
  "key16": "5ysSeeF96zqHm68H8V8owL97wN2u4WML7rmP1yRxGtqaEsCnHtG8JwPPGMAxHJVyuaXmcsQFZBH7UvbE4WpkAdeJ",
  "key17": "3yfdEifTJgYbUGufFiH9WMpZ7bqq3EGN38hp2A6Zq4UHopSezwemVN6Rb6v72QJthgex6HEHGAu6jV9jMq78LvEi",
  "key18": "46QjsZ34xFH8QG1FGP1ifuwdkmGQCM8o8XvNAtcr557ytjcR9oKivB6p2XVWjP4Rab47kRgjyHuDLsn1Vb3Bbq9B",
  "key19": "4twiu2iuBqYai4j37DRdnKWUc8TgqNe7dvmaQktjaDrXw6TGQrd2ELvphBaSk8sDX3Le2VtW3g7x6C9DRAZ6hsMW",
  "key20": "4R2G1fNXGVJ6UTtzDhsaokgYFE3PBEwrEhn2ZBWCqE3eoEDQrwvqRyRqTsJY7APUm4wV1UV44LYm9pasFsGDXg33",
  "key21": "25fQiNrCKPpWw7iNSCKcHDfmHv7wCJCokTr7epMfFJhszjhBHXZa6B79zaG99jPopJvN3FYhbsxmBdDp4Ub6jRcY",
  "key22": "4RF4RQhyzmyHGBc9jAqeudfQVmxVuJ9rLbzTmXJ61ApGhuhDP2XSCzy8hm45F59mJLiAgPqrSf6CLYV29ijom1Cn",
  "key23": "AqrVq2BhnrtKyGPEjuVSFfwbyrcnnB7eeNoAm6S1Chfw1kUZdFqbEDzp4v5jdZMzndLPKptTDjTn3cV8wWwHxhQ",
  "key24": "54hHVLVzgVRGyuHGr1zwr7PPVw7Ans3uFN4uZ7PwLHiYJhrDSvSDLUZeGjcKGYtnyKCYmw49hryoVpj3VfPvA2Bp",
  "key25": "32Z2kNwPtgdY5HiYqiKyTN36MxXKeGvLyZ2dtx7M4qDmQCgQcMQGP7CE37mGchkhN5FcKokwKzgPoCDo4TxGpPtj",
  "key26": "2f9MyeqLZxRQzzd5faZEAWf6FXka4v1wo8vEUtEcbrUczqD6ucdmbVzByUdWpciAaExsdW37cZNqv3b5uboT3XSi",
  "key27": "5wBYAXMhq7viakpRcANoNCTvfYD1UwsXQ8UzNBbQHrwikqgEZpUeGn3RBUwAnvXuUTRoPcHPezvxp3XwJfrFsQXc",
  "key28": "645vjSJcTqqMD3AuBofxjRdL6RjYdhoDYRvjDwThESKPY9mTBWNoM9odrXLEhtLpuU5gVZN37XEobiscjrLXam3j",
  "key29": "2xE147Y8VMfx6vxYmK4LV8nAvagrhf9Ro6oWX38vjN8m3FNa5nwcRHXhh81PrLsU1MSWWnX9wVAyiaP4byMZU229",
  "key30": "4G6zesGEtxEs51ptWE5Ph2NFAsZVZ5u4b9U6SZT68TMzbJbYAueJEEcXknJBkuK2MSLamp11Vxaret3WbYgLAqeq",
  "key31": "3ZgAK9dH2RHPBbyBg55d7QZfdd39p3PQPMoTcX3Lqg7HB8ZnpkRxd3vfQ2fcwhi78prWhiK53pGpnFU13WfWPhug",
  "key32": "5rBXzsnvRCUhzQrZCHmTVNqhAN4vrY6GEV85rx82Xfn1ZaMAwPCZ1j7iA8fBH9YkM6ryaZT8usuiTzR9suDgQgkL"
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
