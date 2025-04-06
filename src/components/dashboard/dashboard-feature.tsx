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
    "yqfVjEWjTZ53gsozwEM6gtughU384t2GKoqaamYLDZZM5MF7Fk6P9undRbS13fkwsBZWiAckTHbZnbNEUJomi9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpk7C8vtReLR1AeitYcdBWHKJXfkDPV6fPjMKwPX8zzm7FRuvBcgnPZPNCJ1XvPXMmSSAbZUVYnh7GSw2UnNzcS",
  "key1": "UTC59xGL1UaSLc58KgLZzGhDJXH2JotXUsdaNX3vaV75ACrNgQasDoeBiSmRCkmAUVQP6fDW4PR1eYderzxoRDy",
  "key2": "2zidg2cbT5PWQxFc9SJSNiFaVi4wMQq6WtAev6tivmsRNUGeXTvhbfJY6efHhVEJgzBJmkzC4LQpTXqXd9hNiVnK",
  "key3": "4269yknEkFQwh2WPGhycmgoF8yK9PvkiPpHTnWVkoH9e2jJM5111LECf3T9ao6nHjoeBgXsejwAEroP6YQJdLy3j",
  "key4": "2J5q2Yt4zAVqafpgUtYWtWabG3eNmF6VsRVoodKscYrzw9z7cfZ6kMdFp4DaemqkZLyWdgLkxMK1g4eVnyGDcFcX",
  "key5": "41bPt6aP96ef1QpAq55MyY8fVbSNZTunH695KiFax5CexCr7RyitHbNuM4m88Hz7grttxW64q4oicymVz1Y3KBKR",
  "key6": "5s1BzqM53FjcoUmGYKFrUMzdTY7w2xngT6eXynRwEXDtiytDp6QESGfaEZuUhBBAaxnnfSoeTe9LgwrmkhD4QbjP",
  "key7": "5P9KLT5eeVWp3Dz7JcNyTtNKSZJzsYprNDmRu9p2zAQXHPsYNmkRBK3S2BNGRnrGgSwyyKphtVg91wBTGrmNg744",
  "key8": "3BRhLJXNM1X2vPjfR9b2c5JnGU4BtAhSHNNpmH2MGSvHXQNRUWcRMP94Ndw3Uq8Bpjcb3GQ81KwW6bYaFGr9MqY8",
  "key9": "2DEXswyvE4emNvUQFf7M8xYavoeA9vrmTXpbkKhm3EeXZqXjkVKkWE3UvXWjYzSjksFmFEHwvFxSw32U3YmtjwDk",
  "key10": "443KEw63ZcqeJvtc2KKY9FwcJrLBfBCQc1iFAEemic6HgLGVtpiMQtGQrbmC5h8pMDJXCDYX2vvcBh9nnyG2AhFD",
  "key11": "L1myxVJTT9UhkLaB6zF6MKRwD6W4FTGV8g53pNx7kDpasq2G3MfKhgT8czDTMvBDxNn2JPFYK2msWe9GuCE7P8X",
  "key12": "2zrtARdFt5RnT6gzaa3rdssGa4xb7jyDGMz6GUJKvz35QcoWQuWGfB14BvQZ31K7aPPXdeKS3Xga52ZLTWqvzZJ7",
  "key13": "LinomAVHapk5XWGFJmLqyQUWTkRTWM6mGt1FAsS2q47FP9mkiWQAEh9kyyNMTnLAR77Y5GsjqzXo7hbZsFG6Loy",
  "key14": "2TMHkeRF1qBuhXK89QsxBHgAEd7sAbe9WeQsnHa6HvfDWEwsJcngFXTixtTRU9r66R7bi1NQRNAEuWhXCKBtxdSt",
  "key15": "2T7p9oobLdmeNrg4wZzctoLqJF4SN2VwtcAEKFpEw3aMRkkmDkMGkuLm16pqk9F9tiRKtNwSPRLpo5afRrVSdSWf",
  "key16": "2GZLhgKPk2VAPBTZ6iXuNFE4WFYXSVx1LodgEXknvkwaVog42LCHQj4uYPMH6g3D4Syv4kGBSFqeBtA2L27VrMwd",
  "key17": "7xAcsZ8VpFPwbBuvHP6B2h9Wrsg2kzQPALdRydDoQb1pgXKpFpiFougncUnSPmv8V7Z6oXqsVvPZqvWJZYS5Anf",
  "key18": "3gZF1KuJ4418FbX3of7HtiqqTZtLvifi9mtzZ8v8kxpmkWqY92GdyL3Ehr7KE1JeG81RmedZmuPzBGHfs3hDvhTj",
  "key19": "3SjPibg4tyGqKNMdu35BUVgYZsaAsTmopwTenZ5uwFBiq3B6hu6JiXVX8SHMVHDs6r3wkc57XWdEPaUXCLwAtBcp",
  "key20": "8BX6QTWjyc53j7Z5pMhxBhPcQxL2FfFpcMSFR4R667BMjydyU2sDMFaWA3gKx96sCzAD98GzLmcgr5BZ9QkKKSV",
  "key21": "345bWzwSF2Vz2mSRmt2zy3ZRnkrQHxEEUrBZKsfTfPXMqNgjzNBpAhg8gu2zbSPzd8tge5S6NrXwtZjbY36dBbNi",
  "key22": "5EbUcfHFdf4T3aEDpDbzraknF4bYZn8ANncLZ82fhrZuhJ3xLfgQX6Cx4veWRP7gtUYCwrGcMGLCdiFiKMEs5ToN",
  "key23": "4wgJHV4jXwhVyrokiUSWNfDNcwU8CwMhps3yoaqeLDZm2mwqoQiL5cKHyq9TshVdEob8xjdmWxjAvLUZrnUUafet",
  "key24": "4aDJTUCoSQnbFKPByh5p48Gx4NHouYuix4CHWXDqsdY9teNsSegRP275dAjsJCDTo1ZGD3TJ6EpSidkF6vPhBAeA",
  "key25": "3bLuGJgogKqDJuEkRbUobWAKkbiQW9fGA2fLtNppvxDpFT5kFCk3oxAdahyx3wmu6KV3ytBuETnngKeTtnBaGYit",
  "key26": "39JMvJR5k8mzn4vargbZZ39wky4HDyU2rjQ2X794MDh4d5yAh3Vf6jzjb6ZSYLowE3Sj8GFVu2dvRA8CmusyJJT5",
  "key27": "23g3Ey7osPGxY4XHPXEFEmkWH74s8JWzxAUYxdZp2PJRC59ALXZscrPfdemoeTq9CgBKNxn8qnjWdYkvDbCb7xNg",
  "key28": "5L1KejvukMPGe8N9T8NVsYEdXahwLTwZ26kFZZTbwn8Lc83JdW68fPfHW7bFb6xRdTJTzjxngWTtSTsgPJxEhahg",
  "key29": "CZo6QiERwGh4AyRgUGk1pexwQw8a2U7t9MgugJJo6AYfeC9UcUB9eU7oFJAKAMgj5kvhY6s6EXrtcvW8gDPnxQ8",
  "key30": "3XRehQYmGwHJw3V8nrySjmgVibymNjQgE4VuVroLGxitLZcyJtun2SbWuRXB6iZY9gmT5zJzeF69nYbjekPztK4P",
  "key31": "hsPuy294mkfrmMQ5Q2yw4Epcs6ADU8uDHUqTupxGqASUWrxx1NY3m15P79usKuMw2bvCahsLVmeckcMNDJtgQ1L",
  "key32": "2hgAbXpAenZ1j4hwwXsTaNdBnmtkRLNTgL99GP9FxzxbyVh9XvYmWnppLYRz5ACgSJJkEawL4YdBfXisTecaZXS7",
  "key33": "5PRUe2SDr2JNb762BSBNdd7zdAp3QCetBf728RDihAsAbbm7P7mnxxFZUn9YUAk1nMxywx8JLnCEeY1Cqhm8vM2X",
  "key34": "2M5GJsoiYf7KAVsTxM9fSLh1Wm6Af5qPnbt8u9aBHkAWU3YoBgNrrVuz61wLwn6B6UDkHKQWucQWH2SjW19MDSh9",
  "key35": "5xNnVyKzkrKkpFTxdqLfKQQF4vxuZzmZmfvb5CAV5QDdrYTtqWN3hd17bL5iLc4moSCtKAE2RCd1Txi3YfbMPkEp",
  "key36": "5aXCXUygBupWK2bHaoDExQAma4BcMvf7Hbh14f5ksMkA5c6i34Kneve8ut8sxnp5TYWcXPrymrEJapxBBkhAw2rB",
  "key37": "5HEPr7vP1YC9ukiLLERbDPz2n3WgFU61vWrKXfX8bnCbbwmF1K8mH4EJq7ANPVwLF5S9CSvAN4XkQAqW99zXSHAz",
  "key38": "4GFbmfyH7QnNMNsDBV7qH8z2MWRFbrLqtBbfaJx883EPYGnf9eYRWBvvoLS2xgQAshWso5R91WHJE1NQ8qE2ucAV"
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
