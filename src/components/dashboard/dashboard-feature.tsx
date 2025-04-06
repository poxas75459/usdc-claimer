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
    "3MV9iuc3YHh9dsVXag6peBCNnpM6Se3Sm48PHyb5LNFcEFsjnnzpXyzKq8eesa4kbKS4TBxp3BAKk8MQMEm4xBrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZnZCipBzG94USAvPGVdi4FukdfhurTsq26AjoLJpgzDbauzTzieW3Cnxo9S2BcXs7BYzDvhsMSjCGhkZPvfQAA",
  "key1": "3ch65PBbTUVZE7Rtdnz7n2dsov5CK9sELZom8qJZmFg3bFkuBMNgJELGquiBA1gqgci1AKSnBUh8L79aMV2WXzwr",
  "key2": "3NMKPekAXBQi5i7T4W5xS3Fjr4XkKT8pngC9Qaar1kqyUsjHQBE6RwjUL36pUVwj82rPnTst1k2NtUv6wnHJjdyY",
  "key3": "4RGqj2n1PxkJuoy7yrs7Cvsz2uQVtmC8GjRcM1J93SXGzWYrpxUvdskc9ikG5i29W4bAfbFZ6T4nLBoypYep6H4C",
  "key4": "2dj2LakTaZ48NH4ibKPYU7zThEfsjnDzG8vR7thCcxLaEVyNqzU4CcLtjf9RHyva2zuZUY1yWcXLKRiWthMJ2mgn",
  "key5": "65dZUCXSYxQa25TpDLXg5oDNUYNVQhtdqxuJY58EoTZrhosiDC9NM1hYiV1py6Pfc2nBARf5kMrLD5t18beDNPre",
  "key6": "4NaadqYdm4NF6kMZEZonJ4Nkoc6qUSMAa42QhzwcWvtLRkZN6L2dq3pgS5vFvNRckiypnQf9DDwyina1gh4XUbZY",
  "key7": "4f83W83pzJdbxQzqiLQRjBzBduGzn5hgkCCKMVLVrc1WNcvvnmtUssvEnvyzQ2iJTDfJ6vTeSMhtt964kc1BPwrL",
  "key8": "4pNKecBB1E1dfcCZbWN8nTFM5sJb4uga5dSwCT8Cft5Z6jn9fH1pAagQbbHPNXoC56h1ADz7zGzEwW4bJPquVGi2",
  "key9": "5xt2kzKw5Mt5AJJx1robm9ccYv7JdRRQuvAo5rUvz4vKXUm69RG3StVRszP94xwxfQ5ym3i8TGcNfzMWiyT2QT1F",
  "key10": "4vpLLFnMuas23K6hq1NkEy6ynqgccvYWBEF2uNoAqWfg2zj56Jc5mRkgt9zcQxxjWDdr6tajsE6sQoYCJ8zJ78Pc",
  "key11": "2DQ8wpbiyicFDDr7yLQpQErNHgJLi71BtdGwy5wv3mKsmQqrpvaKKZD1yMDdoUkHCmetdCYPmANavXnAsYBgByty",
  "key12": "5Bm4xKTBRnWrr7PyTML1CXqrTvseWYhir8H2PWWxqMdAShWN2eN9bpcCipL281HZJEXVyDhZyVuWpcRfEDsWd2rD",
  "key13": "2ZzVZBBfSANFipVxvz4zNKyNCxKtRvWFbkLdv3v3FXa2if2Xwerup292Sy5BEtqjHT9PwmmCadews6Cs1XBaRYnt",
  "key14": "5HmBFvPHaHaf2Kfg7ex9vbAM1P5YXQVEJeNHKLTQE16h9opvSeGPCUVtGJMqRetwvS82N8Vcka8gfrCDQcRZ4Ybr",
  "key15": "3gWURPWtfQ3e7BNLk7WoifYfxMNkFBDNpnMG8uji3aCYkHiioQEdy5o3bUF76uTr1sEeV5UZ8tQRfQvkQurJMb4o",
  "key16": "4HSmgjZGiNyq7U9scjtXURHRedXcRqNAnGoV5KPYNwbexudpCUn4vY1xxA86sBxAogq2sWo7pMzUYPVyZaiVbhBE",
  "key17": "3KoqoD7e1EioUCrYgMyB3qhGvAP8Jt29ttqvVNb9wcLo78zCsJ9nUhYHQg1PASzzhex5g7fyLKnGSbrEiLt4r75G",
  "key18": "sHQS7u5E9uXLQfxZRnm3vLWoSWViJ6xApsYeWPYb3x4xdXnN4DyPRhmJLs3VUpt9fEUysABVXXvBK7r62AmMWS1",
  "key19": "39uZQk7JkAtPUAWxs8Xk4o2rUxnzmcc3KNhCfPfFcP276VJfQG67s5xWr1iHJEZFokVkhBgc7AJ3zciM6eZ5kvsC",
  "key20": "kjikXUTnzX4K7jwyPSxauNXziZrrfvJBsL3BYhEPiNhu3HqvUE1Wo9E5wcg6jVN4wnvBM8XmET2E2y9A92LnR2g",
  "key21": "2bZgdEUCo8WeA9ArKKGsBi7gQuKnbNN2WjTuhSRocd145qjEJMkXzsmBTB8UnET45kwTYvQyX8EsVr1UjvE7UG6s",
  "key22": "4BuUoXdSr53pKp2o2DiPhcrbctSsTrj3uFqjJmVzd9Jzv4c5SyPfHCwR2mM51tawKsosDuoXNkkZicYTLP3CXaEM",
  "key23": "2Aq1CXC6t57iCdQZWQDjL2YQJjhCVx8db4U5ABLJht8aQAtQguAC1L24Qr3Wa7cjUizGiW1QQhcWjzH7Vfj6tNW6",
  "key24": "41LhAyTsbzFneTqhNEqDuPD46D1NfWarqoKPWKDtY5RTKzQfNJzLroc98txJGdRrANzmJwZPGCGGQZf3KTFa6cG2",
  "key25": "hsEWMBPqtoet8Le1hmppKitNaZFRwhyB4G4ZPvDhRfjjt59FqRdnkAbNPwDyuJDHmxkuzs18YbuaANb8HEUaYi5",
  "key26": "37ap2mbZWg9YaSAoAVAVgB1xeo5VbxH4Hf7pcx1yxDhnmEPeed5oyYR5oe77EGVe2BH4gqpsocTCPy6VCj6Z6rn6",
  "key27": "2ANb4oKdGMbgJ4h92vC4vHD8hDmb1PV8UvcBSG9ZBSvrqfJmUjwuBpo4xnEZyYiSsM1rVNcU3QrM5dPT5Wb1c2cd",
  "key28": "uGfvmkEVnPMioErtYVHDGaHUNiRULXRk8EYLiAHJL3wKe3NNrNoNpfsKJMXEoVUoxSyK329wxaggSynFhJQsfB4",
  "key29": "iqcyqx74Qv18QhNJVxzzc4MWiFxuXtbjm6DAN4dnfAmYiEG9utXBTX1jtQgaMfryjkNFJ652tSW3q89bzDwuPfb",
  "key30": "2mmURiicEVb36Ynh2EXWgD2c3WWDZwPJ9VtN1QG4h9m2bntiTKadZ9z4B1nELCKKU5PigvgWbBU4QSryzXTUNvrd",
  "key31": "43nguVoFj6LL53LejsG83ZaCWk8CShXonpdp6T8HjA8yqfoRXeWSUmUxLpj9d9mdX7M4QjwdPmpBYNF73s7ffjYy",
  "key32": "3griwntDKcVxc8e1MhUvh755HYpfFDNW5Y7rDrDog3SVwT5gPPYScyJ89vzUvgFjfQqsxRakBqDVEiYMyAbzzQXW",
  "key33": "3icEYCPKH3KoPCKG6HDXPd2Ct4kNSEMwbbEcDuXUd9Dow6MDxLV6g8NVdYUoqZ9MYVuy7rewueQ7nTMjqV3Kdoow",
  "key34": "2ewB6tDGEMjEJMqpdJ53shdkWcvNszi2URiAWzzrigsMWbwRYL5ysFXhbiEBoxufZeLVrMNdbKQdVL2hh45aHpW8",
  "key35": "46twsi7L1Kp91g2hazhAJTknowQvceUuWf2JGee9WQtMsCCMErEH4ZdJ3AbCazcoa1qdAaBZ4b3KoiqSjmrMWt77",
  "key36": "541UNs7dS3JTVcVP3roeJaCKpqdeLYgM8JAv2fssk1CSmjQvKAZaFLYMb5LvrKK35Z9zhC3eAjzA5cXoHDiyxHrL",
  "key37": "3iZYJa6YMMLsodyAVi9p2WP5t2hDiVa4rKgtdpHUGA4LeZU6Uxxq4EGrK4QrbzD6NAKDAVmrAkKQ57DyXhMnY4rr",
  "key38": "4UwsiFvUwMheVXZ1ECr6m9EX3Rkgv9XP9KYpKMJWjLu7UbXmeBvU77tKxWR34drFxBNAmX6fp5PRTTSLD15QPmbh",
  "key39": "5ZEebBKpYnYhdQHdpBMuVyD4ERubu7kwuUGavsm9oaaYcsjrM5qi9fEiFffXv8SnAkEJQpgey2vFeYMsjyHsEUkP",
  "key40": "2ZHdjD396h2xYwX2NjC6baUx2QpDguZTweUqAsvKSUfSdDrmC9DwqEDYHxEyhx6C2dcFRh9R884Njtfqg2Dk7RRR",
  "key41": "2eNvSsAuq3dxpeBgiRQZxaZT5k6SiBuQGRkqqqA52XFT1ZmePPvPA5PzoBnH3LksFeNzuaNAGt6cSxw4oY2s6GcF",
  "key42": "3ia8LcLiYDUGCfY7xcwpLiKgyBmvTP89VXtcvUiBNPuEJnubNpbf2LWgRtFG4hxMAWDRAMRtZkzHVKyZ3dTcJxwL",
  "key43": "2Fh7qo9znc8PRQ2x6jjDjrmb8Si5yS5HFChSxqxFtkn2ZqX9CG2yadcv8znJoY7smiW679UzUtBQ2YUpkCCZubsJ"
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
