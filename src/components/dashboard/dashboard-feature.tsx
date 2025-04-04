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
    "4JBj9mqN5vot7N9V3LoVCZssuguj8mmxz3HWMDF3SRuJewXmWJAqpB1MGDn44ujjbnMEP4BCTKE75FzJv2ziP4Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31iRqgmvNLtUVRxzDA8hi7LhUjr2KBnDTgSk6qB9TuMFFQ83yaiKYC4vb3NuCFuMp3DWYgpqEpZwJLkEvwVXnASm",
  "key1": "5riz1KtXpcKYh3W5JRBsfwn7ZrtgezVr2r71ar8rFdMx6dqRBZXv9auCo8cSWiTxkJwEMsTw4rymoxQXi7TBY1fQ",
  "key2": "4YuHAB9RSV3qZ6UvwkysnAvBNicsTjtsPrySQEr3x7X5MBTP9XZ5CFK6xhZq6g4PW4vqFV2qxSVru4Pm3tZbtgJo",
  "key3": "4WPgt52gD8aZvMn4HREWbAZWzbeL4MCD6anRWB3Esp6oXKbvaBw8KHuouJaA6C7kQkbL2gHNFTjTKt4uK7pBHmh2",
  "key4": "5nG6DtGPiD4J3V84uc2v2pC3U1FGob7bnCNo4gCX51aiptQJBAq7XpTYAnfetdjAyWUm29VU3t7rSQt57dTfuifU",
  "key5": "45PsPxtiqs2NBu6YQc5o9amGinB3JDUMqKUK79XkZD994EYxJGXAzf9YwecUZHn9RGqU8Wz5fAdM3aggESiFpmMk",
  "key6": "3wCPvN7ZLU1DWAykArHntPqDvdibh9PHFchsvnqLSQs6jk7zyR9Tace2Ms8ZRBc4ZDZA9cYC991eY7vdHRc6yNoH",
  "key7": "8LbTq8hxgvTAnpcWeMb61YZbWwDPK1hpQZL5cPNBTpr6dxEQP2CEXhQBnvFp3AuhY8PRusWFgY5htr4z1W2S9Vr",
  "key8": "KHXosZ1LgQePCYy3PGu1ESV43ixSRzfezMdeuD19g5wDdF19r8tze42AcEANctkpH8gYQ59wpfEYAyNLZVrmQjG",
  "key9": "3fPckFGNx7H9jEyb1hxikzdje7fFAko64kZvXq3GHxiTd4fHQcoSGaykt5ojVtMa44sBJjTth1s3WjsDoBBY3pgH",
  "key10": "3RDTg7em75yModsz6F2jXYTeSC48vrvXNKgdQNAoEwc8Mcnhaa4f6DN9PJb5c8Y7Ja2paTKn3n1EGv7574KdCB9w",
  "key11": "SPBZdvk2GWBp4e5SCoE6P6wBtDwD8vie9jWrFcnX3rYS6zsR5NHvf2dKCao3d4HU5vH6wXuGnUVgEixyPLqBe4g",
  "key12": "5Wep3k43RUiNh15RXioewrnm6g7RrsATBMyXJDivoLssrqqhc9uhhT7d3E9uhgWhR3CbXz34YAgK8n7LQB3AA7CU",
  "key13": "2YvgX2Bfi3LWJ5JjYbjn8xq4DA9FKqKfZyNXtU5zZgiUnQwdNrZcT75BPsoGCtanmWVJ5dVwBx2bGCZ14RKdVava",
  "key14": "2MzygPHPnb5Z1iQ3aUS97duTTyY8NLWgQ7XCpLYbdD55cZTDLiPNGPJfurhySDpZnacufn2dCfzrdGGRuUwc9vF4",
  "key15": "4nKuw1PoNMAcZh2QDFA84L4dPXWxZcrUxtTPn6Mp8YdbrTfwfietLgewadM2EMFxC86MGRYXncJTa7VcZkbPFnUn",
  "key16": "5GounoRmaQj2fxgXHbh73GkctjcVFiFzYQUpTiCcH8CsujsUrS6yYN29LhXAovM3rMNJycH69q1d6rhq9m5Tvceb",
  "key17": "4CUTYHE5DgbRS3xfXUqV9JKp1wpLmArpFGN1xuGEeQ9DwsnzGvKye7i8gS7CD8tU2iNbgSio1uywBgzdo5curFG1",
  "key18": "3fAjMj1XG8UkgzDgcKJY8wUXJkeq6ierEDWVYHCMqNKteTPERwQ7XPJ8dJrRxUzyVRqQXfeMfRS2tNx4Hvz6WbRJ",
  "key19": "2tEC4u66ek8iL4pWyMyExXzsUNSqNSvmdx9Rfovp7a6xoVvr1mu3vx2R3yxH6DTbzkz8hHxMBkj2L7PAHNPGptNK",
  "key20": "4KrYWP4qqM8wutC11UatTNuMHUrW3gyqDybVi54THg35gW7XspA6XemY8YSwd2xWhX6vJLARtpoJ4DtUfJDjqayK",
  "key21": "5KfH37WY6raeyRrdsaKARYjn2NURox7ATkp4XwCaKuWeAW2dJpGgr7MpuQB4dN6c3cZwF3oCyq1T9JHPLAnRwwYh",
  "key22": "5g2ma5wveBA3BWiCo8dYa1dYZjFD9aV5TEZB8GcjziTksZTpEsYN3DM59Gu9axsg2NdDqXC37hkB2u5AsBtv5SKW",
  "key23": "3jJw82Ms8hAp1amu2RjxX4Zg12L1StNENjY2yHhVBv2uScFEaZmTywiT39JY1tC8g2Y9xwEHBkhHXfrKhBSb7A6L",
  "key24": "WweVJbhkKomfPARouDhX4VbCFd3sJ1w5FArWsm1gbWJn5m31h8VF5fq9NEdSMBi6eh2QTf79gCtn4GegSfv45FV",
  "key25": "4qwD5uHypieooPVtbugDjedctQBQXovmtFZeHWJbk2JwWSLXT5yfkTd6ZUimJxcBFxzLQTL4KtyqqTtbFKUTexAx",
  "key26": "2RLHFVRFAAR2YmRkGrXZ1kXr6hpWLmTjyJsnV3KuVrrdBFEdKztmbNQKUsifoNnZfSfZtrpEDoo172ho3xkH21bu",
  "key27": "4NjdGKbfTWW6KEjdn6NFpapxuUEiUztRM7TPTDZyGRACvtAXGcUa5tam9gbTrVvmpuX4dJVPJF2czBYVMFcDzGUt",
  "key28": "2DgXWzHBobZ59z2j676tHqBb2MMvCoWdJNt2wLEFwNZtUVkMFw97BC95GiJusJQ8LmZR7jFZ53TorHL2jkCaSPhG",
  "key29": "2iN7Xbmnh8cmb9JBYYhKhoNdsx3NoeGsqzdqB8tT2qhxcw165hRnRTfhAUznRH2CuxTWV7HkQ5F9vGWNtzUYgj7d",
  "key30": "zmzYLoCMuSfBFd7F2wGRYqbb9FLDsk6z8szPJNHNcrHfzut8XJEoRDAK1Mh6Hh12TvvjWATKFMgxFP6fa5uTfe5",
  "key31": "3XKiZbTrzdXeNtNrwo2f3AQceNXccWFovhGDgkayeAvK4CWQ5funu52RAHC2bjM611sttLni2vx7aJoj6YXARBi",
  "key32": "3tTMdZBTQB4os4BvoK3ChPHmGDLREEkmuQLpJWbRfARgVNKDVAheQVr1asAgn53Hvwbx66ZRngaAg7UkUyC8wdR9",
  "key33": "VTe3hHeE4SdnCcNqRFtdyPZ2Jii1Hryc9ENK5fwH47TfxwZNv2ZANTcKnHF6pmBUwmPPDoZfGQJzEfE147KMNd6",
  "key34": "mrT6zihiZCT5RCYF8M2ZgzSMgFaKNhqbjgm2Td79D6XAHyFN9DPcDngbGpocuMZd6AUMFZCxFf8dZ6m5ZzvfP2e",
  "key35": "sWKZBazi9ubZGaA5Nd9YVfjDGkYz7p6KCBC5b2YkHt8NSdY1mmNDVWspWbM6Z5kEvEJzJTKjtxr7RyzT6z62y6r",
  "key36": "124KCC1wJ6ZyfSoCunLgLHyLCYnMCe4sfW3YFVkAMZnYmj3EbMSkwwEywsCapbYKHnGQTM45PrthFGGLYHvdQ1zU",
  "key37": "2VH4g54R2LAY3zjTRb65Cd92BHoPKFGHu2qhwtcmmXka2RK1WSFsy6eP6P42eo5gYfu56wq3go2dTmLsCgNpQjw2",
  "key38": "5eJdjKESPvvGR4XtsbNLQo6iu2f6wnE3tToMj544Dhf66kBaAtw5JUJ2WKQra5cT7pCpMjnWek6tNG5SDjeFDhfu",
  "key39": "2bPZNdqN1P1qyPakBfy7EsK5YBdKY2xRY9zuJufKtqobMXvNCJZTYp8yEDhsneqpufpGbw5sYMTpR5NsB176grL5",
  "key40": "5iTqUVMdZGcXsqKbPeewgXLcsScKq9yTzVr38J2ZHhN3FukDv3yaFX7cJef4kS8Mi5xDyki8TYHENWu3nYffoFQk",
  "key41": "55X2Xare2LGTaBmEWYNekxs3u5XUwDLBpBeX3aL9guWqoP2p2awrL59JPcBcsUvKX9FsTugosi3u4g9Twp8VV3Ca",
  "key42": "4YZ7AhybSnmiKvTZj3oWfwpsFXtqtrdDwiiV5raLYyTibP93ynpwbZvVyqVDnaQEw6uxfGnwbR9pd4FMuwMaS9fe"
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
