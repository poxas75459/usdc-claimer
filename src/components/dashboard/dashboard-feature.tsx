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
    "3pQj79jm1pjGChCRC56kGVxDFZcYQbAvutyZA3UQTjyrfidsBab7ttzzrCiBB4rbt1FYnAMjbPfZSrx9ehntV5Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7JfP31iKKh7yeyKjjMRZJ7QpUeVY3oTUmDkuesp111nmwcAfxe5oDBVpREYQ8XYWmdqgAKnSNz7mdGtMVzxijd",
  "key1": "ViTafTAEpHt3yTyB8cpe2bEzVroGZZ4MqQcV8rpMeoNz72vHfvRFdka5YWpAvxXxstRnxXijzN22envhJkdR8yA",
  "key2": "cT4gC6FxFhaoaofaf9Ez8dUucXiMGGTUMZJVSBL3v4b1geSoetxA1k1pcm4LPUnqMpBAQzZZ18cYyqd3rzqr3n4",
  "key3": "5u7svepGi2akpAViZ9zGn92Eq8kYruktEK7kVwfVoLv5yMa54inbLc3tWapNYp9UWZYaENJXoWuLNf9sjCUVBEz3",
  "key4": "DqP3h97DWJ4zD65EXWyqTAsenQRPRdomi8rycwzKXgWMLnuA9t98Ka787Zi88fRM1vpxPDsyXCPXYrZj4Bgb16h",
  "key5": "7rN5JDXdWf4vQqnZrBEGBDjUT5AZ9NtRZ2JhL58AcZuLbi6rE4daXifpivztz6Pa9B1fiSyCmMvXNSUqvrK2W1h",
  "key6": "4S3xwtrvEP5sB63QgMXA4yyP3SwAkjPme4YPBpuZFWodTEefcLLTwfSAQasw9epwJ8Rs3d5iTbSrCMxe66zD4ifP",
  "key7": "4ytqxwr6eQLg2qT8nQFHqTGuVHV6v7fHjM35AuUh7cvxYixWoHsSWu1s4DgpDkMDvWqa5m4qynzga9f5BA7u5Pro",
  "key8": "5sPQ7Sk2LjroBBBb9WBmkiBWJQNhKJEZqth7HhNVnfkNb95RLxZzW1Gbx2Rwc24bpfYoEJtgwVGiU7nmczRfot9E",
  "key9": "2bH8HKCProGzH56QSAE733py2reYg7yndkFY36b5BcCTDZ7L5kgaCFSv98vKxXZoaYq6ZzJFQYP8ULwCuTmrCppP",
  "key10": "2uvvfY3yhHmxZJXBWhV2aTErNhGYYjHRpSQwicmqp9U9mSzHb69C9NSBcmZdDRSv7o3LZbwcMqsbSiVxCpTx9c94",
  "key11": "4nBwSNAkoNcVJSc9AqqWEuLnwVaWD1BCaqAXVGHpj2uSohYboypMqBE6xMs4jqpmM1u7kwrCz5pcPbLjVcaXcQwh",
  "key12": "3MxsXJvPVcBxYs77PhX2CMz8AXgMq9dS9CrhU8FNZ763k5RZnpnRf3yezS7AZTQFjcXcBdK9ZNGzSTtW7Ld4ZhUn",
  "key13": "39DdhzjrKh2wfT8KxeaMGHBr4LdrrPhMfMFTndkPzV4dAwNLxABWYC4W2RXV7fhi2yEKJf7prwTTTa4LdEnfRizd",
  "key14": "22LYNzyKRfz14L6NLEzmCkUGEfsY3T5h4PSNZioDLxUcysrCTo4j2xt12ve7oLGhANp5BqhERzMKr19ceMq65iKz",
  "key15": "3smn4L6hgePsZksMb6rgdUZy3ZVVHCGPpxkrDMpiJD6NMY2Spp7hWmPwvtadgitXEY14vBY7zNY7afVt4c8QuqEn",
  "key16": "3Y4NpQCfcUZaH8WknxP8c3phn9r5dceQGeLyvGwehc9xyyAyBhx5bAagaDL8JgzfzFcfgamkyDViX83dKJZgyCUj",
  "key17": "2Gm1B4U6ztgr2DNXjq1sTYHcjBiPAkiYwAwjDcWBNAukzrNtYQoRoETkUSN1CyCoj3yutTy7Q3BU3RCEj2oCPXhR",
  "key18": "25vFVZP7ZGCmsShfEQQBgPYTy2t5pqmgqzDJNFZpM6CYn4bGQaWmBFYbPBMpMVCFxNLQxjcXMBAvMPz1Qa2zTK2W",
  "key19": "3chS79YeJfp9hncFZpYxkUeupgiUb4eV48gFX2kSY6ZM4fekWCgrEEL6X4sYmpxbA5kYgMKSg8Et8yUvW6kxcvA5",
  "key20": "3utz1z26HaiaCqRzF7RfiTP2HixB46KHykFeEHubMTyKykGKD5WsiFejaXh3k3BoWm74FXyYEBGPuQuFMCRGY5ct",
  "key21": "4ae7vHvitotqUWJd5WdE6Y4yd34tZE9kTwAo1HnRR21k8hu6nheHqPaRKRwD6oLGzbcwfpb1GGuzfQKPgYEsiPC1",
  "key22": "DBW1HzQavbyPdXnXmwZoapFfWRX1ja4UsrnQ69JTYJWNnQuYntFuFnUsfQMceMiTf8ch5DtNgCpB8R9GcTuidJA",
  "key23": "5xWdpf4cTmwVmHVrUu6U7oSGK9Tqkih6puvN1QQiPmsKetqLE4UbMjZsX7AtzXhTJxXD7mjAi65q5BmamzYfN31L",
  "key24": "47jWEBJfCjAozMXYDnPrSB8nuFabvFFsqUckJCJthKD5299jMECm9zWykWopfshRzRKdsTaGeWcwhSVjb5LETaHz",
  "key25": "3Nv1kDNzcTREMmFyFPWhKGMMyYyUTQDprGMVstY5dZKfYXqZh1vdM3SZT2wDUKeDhrCbK4yUMiTHsKba6FWPdUqs",
  "key26": "3LAm5kfZhg6MooyHxWbD42VEJJbTuTu43yZr4UhP1YkA7Rx5vyCCZyMGoEKbwNpBTAHqvFsQGunbbz8SEertFoGp",
  "key27": "5skxg8YTAxw2gM92vMa2oyJ3E7DWJCamKS9wjEjzC9Vaax7gfFhXsT1aweCAvAFA2PfPUvCRqWDzcRsiRtFeLvTX",
  "key28": "4nVt8cZVBKFr8kpMB2Na9vJhk6iyZVeyYys7w3XougaFRzmNogzpzN1yrhDvUNsp8WuxcdkXZDeGWGnhwdZ4iFR5",
  "key29": "5cr7AsHbnY4PaF8GTNhDd6P5oywHbBU1wKPHsD7GsbZSQSLEAkGd8akqpi4QwqALTd6d7ayzi6pimGgy8nGCSwuW",
  "key30": "4vugXU8NdHKR54T1r89yvdF6WTCDnvFFUxphfkF2Ppou7qkd25Eh2EqXc9ntqSfzEiisM3AQcNrvEmdCtg4vpL9m",
  "key31": "5SozXEkaN3D9uj6PqfVu7NsXECuZrgygmd1fiFtyQLpsP5sbKW1SV9oDQU2sfvJKgwPTDaS1tUFRtjxWEEGMb66r",
  "key32": "ATe4yGdf7g2dW4C28jUnMBGGUHvycXs5NzVNPXJ4MxsYEnJ87159zxUtYh3NoSWAyacQNL8M5jerQLMbh2R9HiC"
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
