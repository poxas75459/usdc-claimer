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
    "45B28xowzxR88o31GAXuft9E7oMRUxpX2CQgeAeTPBKMbTnqw8TmEL11NuLkYZQFairpZ9reNJsEvswBJizEp9uQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4woLDuVaunRG9hVEzF6VfqcWSnBmpoRsZdxnCbUTryB6ohMJyr1XZ3wHMdVZUhLFvNZgLVGYYXNA2Ur4wXUUer8",
  "key1": "51km5sNtRnZEjp1U3M5mz6G4qzUPS5MwJEKucGYcyvY8cSdn8PUYS8hbrKLdqy91Hq5CDmY9FrCqs8c6VrxK4ob1",
  "key2": "471MhiyLDDW5pRJYJxTUVpaMKfKgWV2BtUzSiFMvjqDYTa4U42Ls7TUkpsvsiDZ9s8zpfvzL4aqwYYygPcwykTSr",
  "key3": "43vowoVUB2h2CXUN6isijsmSv5Y4ZnJpT1EqHp3Uu3bYW9VujCDuQ882UzZuAfyc9PCGs57RZ1kYsgRXKFkVvSjJ",
  "key4": "RhBSeV3jzyqzteMhoGqFVMuKiyJYfoEkQZHmufjwaBy8yAN4cXUsNGdjCWZFAUssL39ZqcsxnapukpmrxUACL11",
  "key5": "3Ai6NCUbsdJZ55tA4EqfBLKzfnqUnRVi3mLUzgKRvAxs3kv5R3wEcKsFqjcz2LAoYdiUmuWcp1cHTES31o6kghZ4",
  "key6": "36237D5SC8ff6n5KBiBvnNxg4EU4MUE1DdMdnWF8x2sVn2F6rJ75gj2fxoGGFqszpHgrEGVDks24p9mJd4ymuGLc",
  "key7": "kvGnEAdCneNsz2xnfenUw8Aqao9vPQcFwnPbzPJEXoE7EfCS9237fKTJMakPowfKXgGZeG57J2m6hoiggVRn9U4",
  "key8": "5827MqFaJCixMyw1Fe25FECKQZWPkUYbjBTQADNeQg6gzPHpvzXp9sW6LqQJ6mQsf8gyijJHN5WZ9e7Kb7U8iwgd",
  "key9": "3PfxCTS8JFKGyMFx9w2arLL8gR69syFj9J6aLRCYmXLpWkvqLabB53eqo6gPDEEP4fC8uADueUZfSz3aZtfZijgZ",
  "key10": "5NcUV8uyyUHEx89firnY773ZqxFe6nDaZ4pT2KRMDEGWwWHea4VJeuLLmsGZ72bU7SKGtfYNrwZgNaKSwsY4q5V",
  "key11": "27RY78HjTbEXQeew5thjzXyk4KGA4bT97F4vibR5ppSMVzpm6t2zbgDk8ezhAr9izPSi9CND72VYViUsk6JdMKwn",
  "key12": "2UfVny6LjwjHCMby6gQrZFYx2FH8kbgxxigNWS2hXctzpymkwxmkYSxk82kn6VbdGv6R4JgYapPrZPZTWoGdv6Ct",
  "key13": "4PnVeJ11UaHiPwWSKkU5sBxWhKmwzXPWNLfcuvsLcEHBACnZ3m2sZVhmoH9nkj4g5kobTTtPp1Ut9WkYaw8g5eZj",
  "key14": "21k16K9v28F58G9JTmyMjwfCEWJbXXJDTGkqDFep14tujYhhANcg2CAjBiYRUEfVAWyxJvM9hZnYhUm3Lx3KkULB",
  "key15": "4feVdY2tSES4uqTAkHNN5wAVKCNSLaqfiXkCosrfgUko1MEXeoppJDBVRds9T4yPjcPiuMDXygpv77iVgJmrFNDY",
  "key16": "RaVZniikD8hnKFNLto5kmNMPjJRyy4ar8Vp3e3SiG5V6vbALaCAKkoh6XM3roQEgV2Sczxtqu6fjz6a75pP8gvw",
  "key17": "2697QQkep1dczVH6kkgvs6utPrtFxtoEWeMv3CKpM2W6kaU4BgRcSyzkyGrTF7x5A8eEYoiTaAUSo5rryniTmK9z",
  "key18": "5MoLj5s2UWbdmkP2N8qJpNwtkPKpLcPjwBDsv8E1n7fUneGT6tFW2GGjQTAUb2hTmEVSrecQiZ2oDKmrHy7vTCe9",
  "key19": "sDwRAF2z8NwushZZYzg7ZKZfTuNQeYC7qpFrLZqzT2u54N9RW1cmqbWAvHc9frs6asuVovW1qmRzjeKy9NEBACd",
  "key20": "UByy8mCcjHWNozQ4BfKECEH9R7P7ksG81YJrr5WYBCpArVsg19VmWNDbezVuyczN6ruXo7i6eGHZFyMjS9tr32p",
  "key21": "2XW4XnCRJXv2TyRod69vvirDRWEp4Bm8dGUfiZ7xmkjvixZrF4WQppxLYVj4txiiWnBGQ5tmpd1W6RR1cMLmd3SF",
  "key22": "4yFWxhYz6CwErVy6BMKvCMtWS4KNSCcZQGP8PU65a2UQo23JALSRe6NXDYz9W2c9bhBSH6AbszK6iHnMjGo7K19Z",
  "key23": "3NmsaNv3PJY8DFMXGxyL33uVU4y6sXDiwnMog6i4UNHY6QeHBgghFNiV4rX9AW7uqbcZ1BQfAWMbkyyiVmCJXT32",
  "key24": "3nTChshUp4NACi8VmzgGRTQiHkyGkNKn99hXt3smkuUtLXK77GKfb4q7FrhNdHQzSdzKKXdXaduJ4BwkctqM6H6v",
  "key25": "32umiMsVbkHggBSPmQhjVvipH28ZLckWJiZYpSbLufM16VkWMsC4G2PrSNG2WP8gh76UfcBUkTQc37mjm1zr7HSV",
  "key26": "21iaTbbNUF7uuVNGJvAxwr184C8JAi816kNa9djqMRTGQSVWWSvL3HDL2qU5jkCanpgVCi4LWxNZYpSszR5LMxdV",
  "key27": "NRZVRLkwnw1kSokuj7mGxJSJ3b9vUtG7NAV3w4Xrb6V41jGJ2Qw7mXZsLvqWUS7DBy2gZ7KLbAzpKxKMBNhhNHQ",
  "key28": "2d4mks8PjWKbGzRMSFJTG1SCYaZA8waY7HgcqouiJ2dBArkciZWuk4uVKhXGwdWkkLhn4BbxmcTCAQKrM8nPugxJ",
  "key29": "42mw81gfc8oGTa2GQPB7vBZm65Gfy6ZLYvdXHknaQ3QjGY19oyRtcYoxrSjYmpoZbpXoouNFk6iwBRazmrmMmuq2",
  "key30": "3yVCNJev7cer5zcDqAEk2BkJGpUCdWg3CRTKPZmGqp94dSS8yvEtKKFsQ9VVjUiJutZFT79fd4Borsvn43AMaGkC",
  "key31": "57LAUWgzsmy2RdwcjKJyeSqwgHNKadXPVxJP5gn6uPiV1wuXCxLMQTXSq7QZ1ofviEqnqHwnK8X2V5nZKEEnS6DT"
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
