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
    "2JZXSV4wMdjpCrHTpUfgygvb4brNthBBCTNNZFzQBDuujzSxrbAKyS8d1jydgEHckXceKYCF9yQyBGBDwsq3cnYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5urL1ZYH9gZWKBxvwctbsya53EGauqttxmAS263JcmBMfF8g3r5nq1FcruNntSkAA3R7kFAt51XLXZV9WRJ3akKt",
  "key1": "4tq8VuDhCQjS6jmoRLLaDFqq36z9rUpP7QcKYWb7Caav65YYBEt4AEsFfGePpaEXYQX4Eq9KPkYX8znzc2ZNjFoz",
  "key2": "5vTYqAFkv44re5NaLhAUVHY2KbAjpNfYZUjfT5yoUA5WLHJ55HsSpcjxZv6MbuyQYQMSkKGMM21nK5mdYVAe9XHS",
  "key3": "4huhVhZeWf9KZJfoby3wwrGFs7KDkJgMGbYpnhNRvEc4vMwPGn16PgqjmzkTYW4Hnf35rMA3P129Fk8pdBB65RYS",
  "key4": "3adWLwzJeLBDu4RdkxShtrS8kmYfsWSWudjEhuRwiXzbbXNXmAj1HV9gBkdZDo63DMHgoyMhVEnYAoFiy4vNW7dH",
  "key5": "3Y3VZ5GJ6NTxLKMr8DCGWbHSs4M5nNAsjTaJFDp7sA7C1cdMuriv24xDwXZqeFTVDgon2BqEdoLhhif6TLh54PvS",
  "key6": "29d39pobnXxWkgeawHJrfL2T5v9q6T3HQYmK9XuJBKRXNHxArWiKQLuctX3uYmCo4VXogTsKJNMPYUsYywbfuQaf",
  "key7": "xAFKvx7tteFPiWenPpBbZyoC2CntyjDRf6b355QVP5yBmWY1nCApp8Ue8eVK4WWbZwkDe8vXwiDuLng4gKVkWdr",
  "key8": "5iv8hjs4vTZXgve5USQomwi9L4dLiSE4B56mxdZcYwaciALV4o6c2eufZjKYBa3VHZ1rHtWKEDrVjpw2fLK93xa",
  "key9": "hNVwuvKRRMAsNQZkuD9h8ZX29UWTtddr1svmp2fkXh3RmtNoqPLZi2JRKTPrjGFtp2C8RKabRDaexfMru9yBuLV",
  "key10": "41gptseWzeLBRmSZg3fctxVqGHuFcf2yeEGzzqz89oGWHu5cesRoiQv5kAPqf4nqN6AmsinNi6RdA5fCX6skHzAJ",
  "key11": "QwGgJ2V2FuWW4aE1agR7pfZrovLKsQBWgyPHzNCQ4wiNr7zmS97uSWMWN98wDeUHZpVJMA42iNy8SBKoYnbqTHo",
  "key12": "x9m5xztwEP1Wpurx4SLGGDL8fJxVt1EodjawXkkTKAtdLJiiEoP7WvDpmB1V8CMCW9LqUH72UcsiKzqX3iqw3zB",
  "key13": "5HvZuDCATfnoDMr4wYrLkH1M219NsKDYhsc9eyto4mc72EAYt3FKi2aUwR3Ey2UWeUy7ioZt7PNK9vC8rr5swXkn",
  "key14": "5RoskQecD8Wptv3f1KLiz85srv3UXtJT19aznqbjpwADdsxK3jp9KxP8Jaq1MTt5bRxCwRisqpwDgWHcpZFBixen",
  "key15": "4dP1tXi1rYt5Loc73MP2ENUF8hhiHXZ94tEV4DhTjVDguhAAHntmaB1jFwSRtLHk66HeKx3qDLxyBVdeTG6UdQFw",
  "key16": "4gis36eJTHQSfJCCDtgYXNy8ydMWVucaCMyPkkkB9CNYMHH9YVjujjyoqHBob3qFPy2kcWPoifyDmxCjBnvnUyQr",
  "key17": "3VXn1Lx4f2wBGS6xF8pHoYg7MyXgVxaPQBaViuk2rhN9gJFHEWTkG8tpUKCLMorJY9VC3XGUsvo4QDoKKUL3Dg5X",
  "key18": "5ieAC7mZf4xdXt86F78vsNT9JFQ6ex11Zy2nCHX3VPkqW3NbCtS5HKuFx6Q6EkKHkn3BqLJaUrX2nYryTsVH3iFw",
  "key19": "5oq28HomhvZ9ogk4ZJrNtvvDAzEQRrZsVAabEs7gYSiA5N8JdLZM4vCKYpkvgdWCvEVTVDesPV8WvBV8c9mU5BNu",
  "key20": "4rVeXCD7otnMbCjsMh3KnzgVWCW5s98RmTUMW6GUAcjPW6nTEWYEcDht2ZFT979d565tv3UCR3kCxDLqaw4x55AK",
  "key21": "3Q699QhVWbijFTbDrYneGkRdRJet3CMLvg8Aki5MLeACZ3fsbWFwK2xwEU1oyLcJppCL7HXcNE6BUmo4iC7yLnaj",
  "key22": "5qwTvcVEXZ6kRuRLWwsb7pavTCMTLsHvWzrtbr6ws3TSLw3TY5LmXRs6yc43XoiikCFizLoKimo8sCqF2Vq6bLSF",
  "key23": "3KGEZKfJCWiarAX8U9dqGJ9F47ctZ3dYvsz6jGWoVjDzevvS1o8S2AU1SAKWyKvpnwwnQrzdxt2oHymycCKBw7wZ",
  "key24": "5kMKA9ZTPW4BskpqpoyPFG5xkNPiH1JBjQChSR3LWxM1FQqUeMfCBBEQM2eyKTb1XxdAVXeDPg93oNceio68zgqJ",
  "key25": "Tvw3itEeuCghHBKXVFsatAT8dyBPAkuzBfVD7LHcu8uk8y9Yz7mx6Y8ntL4pMhgdh67NizLGkeNjEWZRAF2WRWz",
  "key26": "4TtYafe6WFS31vvk7P3urevYgp8BkSQpdKDkfNZ3vDo5sfs3ugpWKd3jroGHNmsuJXuMuPzapG3QT8wz1dBbmwUW",
  "key27": "5nZEMDrt11yuThPCYYYZmLwjsvYA1DC8f8yN2Yud65YQrdc5p5wzfDkE6SjJv2Ho1cRxnXNQGjdZLQez4zF9wR3D",
  "key28": "ZBAJJPVqMa3dJUWKKPLFQHdwjACwt8d1UomHbpNBnMMjEEK3JwZL39GnJCMvzhd351p2MJcpiZoKZn8pbzAd9ox",
  "key29": "4FwN4W7Erx4TfNMbLweXcoJhK9gnvsM3U4cdnd8kfzbqoEUhWCKUHwtHFutJz1TFmwhm4fYJYaVkU3MDTqJm1P1u",
  "key30": "62VYeLWG6MLyN9qzxSCvjjs7VjDzkSku38qS7tZZvgh1wspHDT6S5NAaQMSvDvxjfCHUZFiKTQoUu2BBwZrUeCoq",
  "key31": "KsReiEyftyxobS1weasCoYkLHwYG39urGV67suPFrCMU1GmRt4RvCH4fhPhnWyNAxL8e1xs1JkVEgpdSaWvqGru",
  "key32": "4x8FCWVrhUSMNQKpdq7KuK8149gSv1QjnVzYb7Ynd71d23dpVSHas2ijtbJNodCgHcZKM1zh2gzbhANkQGWhw7ee",
  "key33": "cPhP2p1Z19VpfkEJnUFmZ6AoB8WdZw1jYhnwy4baKoTwy4HpAhYLZZpRWGfUP9gp3YAQTSNmJhn6vD6NZvr8MxT"
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
