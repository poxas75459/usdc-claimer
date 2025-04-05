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
    "ANcHPxxi71HCrbWGG5VR14yVaaGpiZWQPzsEL4aYbYo1XL1DcVtFjo8yMC49gBnJBbW86ejaFZZSfs8TdPnnfBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdSuTW23NhHnAKJDfFARv8Hm34Px78FEu95NAdoLLCxXaThXqYfJw2z7gjHcA9nhARhri8fG2A9E91pS7RMjMc7",
  "key1": "iTDqaLf3dimAUmmYcXNJGGEa1tudKgm9sWmgxw47sLdazoGvwXkxm1CxtBCYF2aFSmoFyP6HfbzYEFgBsmTMsGJ",
  "key2": "2qF5szm5X7BBTAEYMX8t89xF1e7ZhyJ8zt55NwLD7vsu8Rhzd5nEoiVNcTnvk4CrgGEEaY7CefStdGtVD3negm1Q",
  "key3": "361w8GfYi2poyA8r6yAAL2VWBRUPkDsUPJzdBwafK3pjCz2VDEPCw8aTwMXbzby5obZqdUY27CtFKD3C6Fz4moXo",
  "key4": "2Tebm6spt3XmJ7zdERz4pycho4CdFxatzgatNPkqJ2TQnMrfCbL327os18XTbXxdnFwtG8U9S6Hkh8sNqef24BSB",
  "key5": "3aUKbDzMuBTpre3fCQmjadKo48mFvqQp12CZM7igV3gajm6d4Bg4k3SQtBvPaSa766vKKduyE3JJQnTV2txx1dBz",
  "key6": "3UbBSCTrjTPSvCJnw31BHnB4eNVgYx1zW35osAVpu3xfD4JdYvhGEf9dbaeeFxCFrgW5a6YqCF63nshypTNY72kf",
  "key7": "3R8vNd9y8rTZzZygxj4Ciz6BPLXBADVqkKSdjM8rqcTpkoPgoLtMGN3unPxbqZrit8Kx6wLoEK56zBusypjbwSzS",
  "key8": "3Lak16pPQ1idATFdE13gsGMDhYJb6HXpygcHbuzVpfAfVj7LmBi9GiX6is2c29WEvf5m1gFdpNtS6Dio5t4s67hb",
  "key9": "MhjANn2XXJ1A4hpucUkGuAaum2VdSEri3NScKayfzHMSJtW6mojQ4Q6WnrMY85A4caumMmfPv6hGyBL2v7gstTC",
  "key10": "3oh3g62qWbCGAc1GGRFTZsbcGPXxqrE8Voxh1qJstryj5qnWA3BGbTghSS4PeN5EK4rHaKGqK2Y1nJ2LxFHLGH1g",
  "key11": "24NvuXu7jXhgSs9aWqb9fQx8fcoQiFWh6arjbe6aQbNuzyX2WMUDBNyqWqiEXohdkt2vEqkYYjNeQC93xrShCrAD",
  "key12": "5ZqnbaxJDx6QvCMeBKWhQnbRE7MqyjKvvvdY8JVKCGiMxCLwFx6d4adKng2uxbLhhhGepFWsKdQA3gGPBB2bSFDU",
  "key13": "58fPKFnHFo6ZMpSCtNB5JsE12dwPfoTirJfzmFJQxertUhm8WqTuF1xt1MmMmzu8QoMmAd9uoy7zaBnTyJGsARSu",
  "key14": "24daseHrEGKZStX6TQVDsTn44SRHgproZS2jRS5T5DZ4PvYsBsSWSLPEcm1ZaxvRCE76oCkt8YQuKxy1jL2iXjTG",
  "key15": "4tAGUUeei7R3YJgn6BRo8o4HU3sqxoHgzuJrcgkrwoKwkV7ipq2zQCmL2jCdzThFvYarUcVRehoZdvdhS8443KSh",
  "key16": "495SSQwjeuKJuEjY7mA6mVFmTY172Vmt4uXVFU6qTVo9etY6RkFnvyMv6RhH3ecv7pZSY1Cm3YvZymxjtf3ZGGH",
  "key17": "3HNToQFK1uc68aeRgjXeLQWwdtt2ZKk1onaKkdZqRANPwmSNaNy9CHvC4mE4FspL7KPTaTb9TPWCnHx6byDSNASk",
  "key18": "5szV1cVpDTUrQEjW91TJoDm1UJp5kMzaDzsDFowtGQoCCtKXTHWvZgUV8TGS7UNB8pWwhYikGTifCpWjFrEP7SNR",
  "key19": "Z3oxwFgNaToE1jRGW82zGk1jaUvSWq4L85DqQrGsHMUKwy9AvvoDKSgJU33ZA6HbqxMwUzGZNy4GpjbMoDz8u4q",
  "key20": "4yGvhctQLbkJhvuur7RyhwfCboQyeqCCQYY4NSprNLvwSEuDukFRvwaij2bnVdwLmgzuTS2YQcrpeL2zYbUcvcZ8",
  "key21": "2cZg2zycvXLHj9Lm95ybGQHxCN3RTVgCh6D224w4woGW386xhgAh8wjiquSomv9vaosNfzXDhK1Xpba6Q8ejNUgx",
  "key22": "3mSZVts53grM3FJLs8hrCCLgmqiMCH3QQuutTKEg7sSon53RxgiRorq3mXSPoFWbzPecToAw1qf6nk9WLYnzo85H",
  "key23": "5kMNNKUA3ejk6hyNFxNaRNh9bcxyMb4UBzsjgZgM6s91KfURqxnntLSjaLzY8EyCUPp7BTWzLsUdLhUrF1wsdmk6",
  "key24": "3F4ryZJHxh3uMdGnFYdvkyimBFZfTQ85zi7MAb326EW4n4aR9VNqsKkmAN6D1TerjaM3kEamqpfCt9REZ4yyXevE",
  "key25": "2u6Ds1XMeSFayLeXgxufDVBK4rGrP3ytqrxgHkUyrzqQSE2nopfheT7RHezTHHJvfqJrHbapby6vRUWqQ4ZouSeK",
  "key26": "3VuhhHpXwRFgqHe9ZUcioYZZNearKRLs3Urw5swfq91tnW3bqCYteE8SdsZCAWAuw8wPJFwAERiwiHsQwpq8fvCJ",
  "key27": "hSYzeyRTfVP9Wmk3q76Vpfit6zWiMaqvKPSWNJ3DQZg4FVRVjUSTdg5Jqft2HGwSFpq4obZHGw8q25Bp9oCC7ym",
  "key28": "34XffTbUPc1gFEffLyBLFtcvobnAgPQoe3DzJGspHHkDngB4RpRqrQNcwkauMUTwMtjeCtPcL5sUBpQiV4BHntcw",
  "key29": "2pe7dHNXac7VBB1YnC9kYsZikM1wJ21oHncZA7dpsMFZFaMh9B2YJMttL7stbEu9WshNZBCTYh28xtJiJ4bL23BA",
  "key30": "sdizsQ5mvVJKsk9yrHjvVcaUfLkzopHvfrGbQ6adsT6MRcoKYRq5xxqGJMJB56VGopHE8MV8sxi8p8E6NyU7H7k",
  "key31": "3g8jZ6GLU92mnfzJTE8Bx5thDtShZ25qHPPj5u3mizfcGecdXSyykxBYedn81ZEDcc3uSijTwi4aJH2E4ekoEyaC",
  "key32": "mcciR1tPNtq4QX83nD4yRgrjS2bEuDnpqvqdsCbZkwePjffpjCvRhc3QLpg73qNbuazKNRNRzj4fhK4zty4w18Z",
  "key33": "PJ7Z5AJuAfg6xh6gwTMUQTiuReJdgCuHHffYENDRrqSoQBtXnZV99tiPJF98HQgXdsKXqCbyMgpNCTYhPUY61pu",
  "key34": "5rcKvrprTe8hREZNWrBaZ1R7JHqtiwxgc6kRz1gnpsF2WWY91gzQBjLcJYrZrf16FgFuhuuD6TRp8i6JbUVzhjSe",
  "key35": "3FabY3W4FWyuUr4hkf9MkjBfX51aiabKW5Kdp6BUBnNxV7hCPrFwUikS4w8mfd5fMoo1Uu2v3bUJmzJRGzx9CVfG",
  "key36": "4MgGz3LVegxxXdkrR3tGGLywLFfrzT5YFqQ2pvqHqD6dvvyF5BCW6sf5KQGYALyDpkVtq78kszagMMj9EvEszEd1",
  "key37": "3gK3NGZ3ghuZUkePW8STH2NFJouhwfMeu4N7tQYCyiTq3H2Uf9JSCkPVRWnPrpzvBP9SzA23pbfqtbmtzurGgXe2",
  "key38": "kQqLv29BgnRqf35TDwySvXuXQAbgrd3KBJU1XJu4fQnZmDbTudx9wbDXoFsW3tZiKQh78Vw9k4v3Zbtmv3RLyhH",
  "key39": "G4iuCfyeWp3MmxBh1w5Gc65PCAwqkzVVBuNamThgT4ESYw5wYyfiCCyJtBDB8s3vvVP31dpxkJrESLANC4fZoV4",
  "key40": "4AY7bXa78STycJFy7NNCTDoF7K5DAyuRPV6SQriYYTgQc5KS9p4ucvyUV9tCAmMg87gD6uv1fzyJMzbS4XvZpdik",
  "key41": "Ak3Lg8nxvv2KDA5ApPETWsm4VbAu9etgFGfWtAQ8uDpta2VJb8GAdzzpdWvFumSzGLMDRV4TYUrXGPiFuXgRzFX",
  "key42": "3cgAW6X3hGjkcgyx4L7j3g7L7xxUno1WJcugC9yDe7eVh8Hf5WY9CjqAv6RZMNVuKLLLWXd9CvJ7nXnUonYdDncJ",
  "key43": "2Hm5DMDjBf9Lk3zQtttLD7UGEFGfYvqhD7JNRh2QQdfMMT8mTFSVMk7TZjsW5eS51BT7QV3M25nDCrUKFfT3R4WP"
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
