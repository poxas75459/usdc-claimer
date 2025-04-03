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
    "26gXXthcSaKWShPBajjBzbmZHt3npTyDjYtFenQgm4rfPvkbsNB5mDJqzyDKNywzcLGK8WSgqQxRA1oSK9F7PbLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tax5u82BqaPwyAqwSsJ11biapvf7H7mWJA5rnWxxM8YREYgfgBbBNJmj2UMA37y8vGsBXips3muw8RcqQRgEcPj",
  "key1": "3h5hHprWVuGF9DYZUBhGKCUftzvDd8p42Fq3k1cqFMJFLCFoDqd6om9FCTBymKbvNbQzzi46jnXszdGjsr2gMXrc",
  "key2": "Aqe4ou8VcnrvsUDfU9aJgcgEdEr5P8rfRVTLRSkcQyt3WT99tdHFZbjKx5hW6qNyRzvsM1btT3rsHBW3JbwToeu",
  "key3": "5VF82Pe6Btvh1qqCqFpimrV5rTRX3rLjs1gD4xJ4CtGHK7erKiRuA7Ktz9TyFtZsvtMXGGj6NV2JSJ4oToqFfxWK",
  "key4": "56KE9NaF3S5LrJoJX6foiQxK22u1widhKbMhmwkrh2GiWZY1DpFtk9MmkaJXRGYpeYd4zrwnqDNvobj1BSJVtHfy",
  "key5": "124qF3HcyM1Q4TKvuWSPswpWA5woHNkrgCm96DeS6eYVvVgCJp2EM5yM4mRvKBTE1urnGo6ccvHEd5dc4spPWWwE",
  "key6": "dJXdTgpgbfFESmbYfisthHqwYqh15bMs2Ge6B5JSrsUwoHD68j88gvSrFmSoaDYawEVmC6jSo6ZxmoCitEvKvdW",
  "key7": "4nDfogHMouABH8omu918FQSxQfzGmvHjvJFP7ic2Hmd5nVe89CD271in8fkiZUYfAJaXipSCpa4qjXMnFN4CyhdY",
  "key8": "4sYtbDD73hHxmU8J1yjqCtATw9H1LAoHHCjibtdDBmUgGVtkEV22J221v7pb2H7g5mBJ99EpGJu5Ey34T9idWKi8",
  "key9": "2naHN4HZzi4wayicoXAb8UQqm73wBXQWHsMc77pLYxtcsEwyCQEQmXCxt8reAQyg3pWN3JMKkqQCxkguCEuLAjeu",
  "key10": "44AePQc3KdKnof2wVGkgfjvWHkaX2eYz6yUDJcZ9aN2r9D1VSCapWVeUZGzPY7iVQ6mdWwzrPoA11jq6RswMsKEy",
  "key11": "4nSPjwkMLEyA8DB1CaHMKEzy22zdy1Z1rwEVEoyEFWTBx9CJfr6kepJrmM3sfVmJHVYSSkRu2NeFjsyYjJSHbxkD",
  "key12": "5ptuSMBNP8oYUKdDfPq8VVgNzzyW57XepazPi63S1EuSUskC9mXWRGRaWGtT11KsQDx3hbY78vULo24cKqASJrBU",
  "key13": "3xBXaMsnU6hwJrvRDuzcZdcWEYVYzv6a9qv3ywLPMp3Y6jvaT4qF5PBzXNw33SveDoK9wm99bnQzVACN4KRqAjxb",
  "key14": "4nwNkyXc8iJwfgbM4PpVnpCX2dhtc7T1UffGmsPPLqzPh17nLf8cDWfHfnKitmNYHT67CUqjs2hBCZZy55NLbj1V",
  "key15": "5FawTirf5woth98ieVk2NxbDNph97eEQFnsLwkuLhmS3UMQ6w46qt6eTNN9Lqx53cecQHWjFzbgDvgvx9d1b5fWe",
  "key16": "dYowGqASzrXJyPVdwpkPnL1iTcV6a3rPYFGdZ5AirwKKT4NJsyEAc9VWEnDGj4BdrWeZKwrpZ45EqQqGqLG9qXs",
  "key17": "XxpDoiuP5ounRTEZAcequAoTWUiViZNrAXX3rC7h5fjkTEytgxxMQM2JWNwR93gaNmwYtHAAdD8zKVFRansB8hu",
  "key18": "2FVTo7Gbfea9sK2xS8aoLBhwLoUwMb25uNko6r836WeWtx5hsKwcxbQWZ3wsM7N77Qy65XxHrbGJV1xASG1aCSwP",
  "key19": "MJEx5Rio8etbGPgbzpSzbuX9rSzDZ5NvuPGa4LswLyDzwSWV98nbVwt96BMGF7V5PAGQu8ExKSpecMePM3m5JZw",
  "key20": "2g7eQke4d6cZHPCnNA7Pfd8DSJDFeCcaSdXVZrQ1TLUQhpejC1EMEtmHjzJvZCCwx9AkRNTkfEpPu6omfTt18kSg",
  "key21": "2PHCopyb5FBVgfQ3qdeNWAVKSCswAeJoRw5cVhNA6MyXbHkfhKiiFRsCZps2NcMQZdSLoCuKDC2GH6hL82Rzsfxu",
  "key22": "vZhejoXmDTwyWJoGm1zsxTCBJtjzN6hTYKjyNHpP28MKxndRfjoVa1Shti4h6e6fW9MCh2uf2e9XTExYtHA1VSK",
  "key23": "5KBC6TZN1PRbstBWfAiCs6b1NAq5PWnkvQJTVJbuAif56MQn5Kez1t3oTmGK9bdHTBHLCSqHnRdmFUTnEhgsp7D9",
  "key24": "63oFdkVoEHoCgpeWQWvmvadi9nzgBLgpdJEkdiRTxW6XozAkGMSzpGLhSQF2axWkLHGuuP92eXrWKNLURc2WZBeP",
  "key25": "2mbYm7HKqdpdpvRjmb4zTVweLJZxn37UTZs6yuHNYJMJqmXXoxaQV2CTPMsV9jZ1sKCJozYwKuaxC5A4n19cModb",
  "key26": "26C33qWQ8PriEEoNv8qjPr9XiDyhsVkYFRMpu1XGBH3q29zW7UbFs72htaNFPTdw1JpHfiAj5r78o3jn6L8kNE2J",
  "key27": "qGzLKQXnuUus49Vp1cWZZ3AGafdyCRzNu9tw1sWhbUWkgpqSPEGDNKqjq4Bb2iLMW6n4mGxq89U9LgVhgWupUcV",
  "key28": "3M169LXvjZC7ffqYKEPyxyqhMYLdSjZjHyFstSuyiSGAWrUi6mZpim1DXMNQVLNCDoPS2wg6hYh3YEGDsHbH4Kay",
  "key29": "Pt3TLsJBE8NkESPRqCyaKU1SC71pgwvvqVwEcShBesorQaSPpbS4xD8fUCrpUWGRVjthUZfgbWUqW9BuonXQcWu",
  "key30": "2rULoxoSbY7BM8LRMLzdCHnrPqXarBcVzN662MKTRMej2f8vvpByXiFtHqG4utyZKJVQsgwZxeKKHxg5ayZMyUZX",
  "key31": "39Nt2HGy4iJByPTZ3s57PfbsBg1hH973kVRwW924pfYVrFuxShJMuTRQMmwywYcXst8wDJyD2SfCEjv3Yi5ZqzcB",
  "key32": "3iKycNp7Nro8CsZBty9NXkaxnUtXCTpvxD4RPt4C9ZvneoNUskmdvU4UDuUCS28BoKVwyXyQGAaNszqoaatRVQWo",
  "key33": "2xwbofgMjkLeqHfiNRZGnq8RRq5BymJwXcajSYgvHNo6FqRYdBKefUBtLC3S5vfsDnxk5TtYt8uFoCCsM7LKiLKP",
  "key34": "2i9Sdg1aDPYnmLGRF51CGZ6jKG7z7nr3KzSX6UyTJvy861KjNu9ueHhMLnhuiN9adetfJJhcHuRPXmdy39j4PMP7",
  "key35": "47EaqDPaTmSgFmyg3Xu9KRdQbQLjMiAbsHe4w92PUtLpqMWBXVajkyNvrX5J6GBPyqwDPAchd3YAggD8EMcnXNjT",
  "key36": "27sxdqGvzGDVbcEJTfx7c8gKY7dbo1PRrAufDNNhhE7gz3Le3cge9FjpaVWRrMfSp25Wtv3HLXW579Ckkn6petpu",
  "key37": "2cSz1n542xNYD3uBEfNhSoApM75eX3jrpxjRfpKhtE2wH2zEPQERxqNFG5hZMunq6PBF7QWce6TygikjPx1Q72jz",
  "key38": "65W3hRAbPoQknspe1FS3oPiPG2TEfDduE6HGevb5KnGKum82fCQ2J8qE9NxLw77tzejgaov9f8X2pdRSw2XxpvHu",
  "key39": "5Hbuu6t9Pd88HT7fWGBamWLYwS75W1UgUAGmZy7UkuTaTbfei1XCABVMsppomSmywDRYZwA4CSXiMHfC6WE6PrJ5",
  "key40": "5CeULwC3k4y3RWDE9XxzkJr4PmJrD5owVWQCrZM89c4wFX1Pcna182F3Mjsh5mL1mUxgtt1kJv3MtFjrZ9FECbKP",
  "key41": "2DRroi8PZrdAk1s18powyFuLZFFA3KNLwSy4k1cQy4HSrdXj1iAzUtz7VMsEozGVpnmZ1LtRC98nWebA4a5RQFzD",
  "key42": "62bpLDbvGG9smoMxDptnByR64Z1wWpA8F255Xxmsc2nazJVgsPRkcpodV5e1U2WWcwYNVTd654Ry1o3UtNyXRB5X",
  "key43": "4RQ4dsbfu7Aqprd84RjFfq9kDZxGZiJcA3RKwWLoDMBsCVCdiPDWfRoXpybYKemPJp8MyMVbavoDFi2S9pKmrBb",
  "key44": "zito3oDBQSmvoxyh44sKaXtYb7fBCYTsvKzmeGp5MiGhoEUMU4FCbFbjDeLEkwRkMtFkivsc9n6zMorkPLMxopQ",
  "key45": "3gwwv6ELLKywwtujZ24fHDanenVfNgxTRJzH7Kx12XHh8bqJaJCestDrrCYCWkNc2wVCLcvx7rGopk3U2HnQarZZ"
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
