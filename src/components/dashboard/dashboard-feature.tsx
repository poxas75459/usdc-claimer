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
    "5SnXmjSzfmL9WSe5TsTHBiYJrinNoUypnWidmzgVyx4owSBdog93qnsrcqiY7B9bD7Uf5SZ8AbtrnRcDGqSnzaz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2My3nGGYgDMu56nn7Moh1KnTnUvMHoDVQykUy4B9T2UjHnBpAig2yrWP6dRo2re15qpQpj3Naf3e4dmPifpeNc2G",
  "key1": "3xmuovzbkLsAX4WnUxNYbb7yAXopFURqopK174W3JoL8FqU1HcfD19cfEL2Jx2NphSrLfHKjmJffRbi62ykUbB8S",
  "key2": "3WLHsMMN8e7dKuoyKSp9oYX7bciWAmhva9GvcJaQ1LVtNRJf544Ld7Jvi6gUkKf6PnRF4uQ6C5T7XmZ6izRDgEwm",
  "key3": "3VdqN19NVTs8NbX8hiXPLKSEiyucid2jGiQrPn6y8NVEaecDNmNsmCkcRae7jGkwrfh2M7641Xhsp4WLeAYy2as8",
  "key4": "cP6kapUmiZ12J5m1KhFU4KLoaE1sdfqfMHF4RbST2SfWiC27ABDHotswnzvkWdxbuT59DJ7rAJv2KwKg1chzZ4A",
  "key5": "5fqfpVq3ZnaQatnQT7tRMuQJ1BgSNdBiX59GhWt7fNdQSFwmh33hSS45cVSeHbLYVQY8mLvXGQZh1wHhtDXeKpsr",
  "key6": "5FYfgtkVwVYJtj5BFJx1Dsn1G9J5RG7fsfjHyDzZU3aZDPd8b1n4WMXduT7UDBU4DE3V45Jvh5TmJbPzQQanKtCh",
  "key7": "4sD7JBuEWgdputuGGSEGwpoN4gg5EZfN516isSnTMYNtMF2UCrnVbetN1VBGXN42fEnmxDkdZSYzqEfK9cYYpzNo",
  "key8": "WydfxXZ59YEQAKZjvcBZQnQPJtUoUJM8qnaxmzNXNgpkfnCKkagFk5icwCVnM4FtFdACUYDkWjKx4tTPpnDn1tP",
  "key9": "5akfT3xEHp5FEP1MzsMQCBdW2ciKcL5Nciv6ZjsUe91BtBauzBQC1hi4SnpMfg4GnZSrQEn5wuFS5GChYNzG3n27",
  "key10": "4SC61qN21ctUy6fuFG4JaepCQsrwPWrEd1XE26eGa8XJwtndJm7LoEC1GPsS4QWCHyDah86VWWAiSHmRgzAyyS9g",
  "key11": "3cV54EUCfSGqwHv5Ad89x7oSQkWTv3nL8jJJccRzfCsCJQjGw5exsTzyjiRu9FAKCHYnpztgxvRhdYgqYHMExhqD",
  "key12": "KXF2fFq5x6ZxAsqek8CyafA8DJvhi1WP8ByHs7fy9NivFWiXyrert6kDn3a7mt4vQgq7qeZMtYrkgM81uYUy4dX",
  "key13": "43n3GN9rpSdJT1DuPWHPpEhDeQ8bd8FPe3csWVihR38Y6Bra1snhbtHoxjD4wmHPoLo2ohZ4kpSz4cjuBVvXsTvf",
  "key14": "679xAeRXGNyz8w3n2YUtbt1YkPFZNEaGNrjtHNsiSNvEDjfT6KexWhyA4SJmdhDft6dMnhTe12xvGHJWx9MEc6mT",
  "key15": "2yQWP2mPvyurrvW7wMDAD8rMsCsudWsmKf2Eckgrgck4EfLcCiYwu4HK2jGqFeXK9CMEoVcB6EzATwqoQNgzbtPy",
  "key16": "58V2ci9HYnRUAN9pdkoi2uM9akzZYdwyH1erc2RA8WFEG5Tq1WpAqfrQjMtr37aCdWkXHvqC2tPPsVDGBHiTqJKS",
  "key17": "4o4ynocLWrEFsfU4j2b5podjvyNQRFcDHi2CPqHUgVXEUbKzVoFhvsE2RRkEPEeeL5XWpA6d9a7wB11VJgh8tRxt",
  "key18": "4z9rQcv1tVto3Qdiw3dcXup2ZnatG5UhELN5xJT3zxvtHip98AsJHynB6ADM5JJnBF9aRnsd8zLH1E5h5ni23jrX",
  "key19": "5dqbLwNdCnJ5fKKswPgAKWsmvJcd3fr1uozWNNEkoELLxAJdjjzJ2mCuqJKa1EDcxDknhSNbdZgHpuAjmaq1WCZr",
  "key20": "3Miys7zN2ULWfV79XGvUu8cjABvqeBUjBnLoX3EqFQYd9otg8mHVPDwxGFRrMoUZ79jPK9Rnppn2TN2wVcTjKpsq",
  "key21": "5M8GyEpanSztJPatMnwVMZ9N4p58LLbuFTeHWohzP2hpbRcV2JbbEeQZsNNYrBh95Dg8gxDZQMARq2AZofMVz1Qw",
  "key22": "5y89DzAPjjnPWVRs9q4cbWcsDkpmVnwbbJJzm2b4JNQrCaZe5hTFkAX12RUVYFuPo6ja5vpMGcSAvvHNmT5YrL3T",
  "key23": "5TzSyCvTYz7PAm9LzgUka2pfytDxZTbsAo4RkwxddpkBbr3PvkeX7ma2Fhi1bunrpbBvURDoUxQathYvbpsUzQ3u",
  "key24": "5goGFxR5xXynQMHkTd1VB9ffbkCFButcfuBRo5ww5oTHWZJyxLbRfNrZnHpD2Zxs85fndvmWxst83d7yBQhB8MaB",
  "key25": "2LfYisVwXaD993VR5NGC4KvKxyg3Gh3Wf2QdptfvgYhQqG7rLZrwXsZUVdpBi9cqtBH19gXRH6kfoEsuTfKthddW",
  "key26": "2gfKsg2Gzs4xUYiDsVknEQxePEbzymuB2W9uP8gSG3GcGc8zWiYvmc8E3ZySA8rSDYQy6NuU3HpWAS4PQvfdrC2W",
  "key27": "2W4Bt3yMcVM51z3cczD5B4HAyEobBtoufKeqSReSwMQ1WQWo8gt5SeCbkNGL3VPW3oDr4Ew8cCPTdPoQmjRBKF4S",
  "key28": "SAzgP9FvoMaEznAstbX6QBT5Dz1Zr1jabMjDCG2h9DqnaBrDnrddW4wEtgHcowCFjCTCaVFRuVSZx5kaGyHxAnj",
  "key29": "ULwsiU17h9W85FpPqkzs1qGZX9Smo45bFAqxRFeZwND383axZgszWVaeLiCGA1fYy4vxhuR98EJUisuHUYSSkK9",
  "key30": "39zMG3RjnuFLa88w9Nn1x1CJeDgpnK4EiuMNjToHrydtV4KycY4jkk9NjkJ6iSiukTPd3Q4JRVPfVk9F2H1nwfsu",
  "key31": "3GANspVstDgG5DG88CK8YEDptdKrepPigbmQQRCnpbRJ9knUSxe4vo5LL82J8S19VGg7MSdUw8PKXj85UJnCUvst"
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
