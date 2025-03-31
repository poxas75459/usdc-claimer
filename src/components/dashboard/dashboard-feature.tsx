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
    "2Monn3dBpmHFJqDiVrF1JAiiLhdYExWeefpJnF6rfpzVm2odjZZ27h1fetbdGRLRKykyGCM2yS5naUg6QnMusLkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vAP3dxRTQBrcXLXXvafxHbcVFzuzQhF3EuDiWHH34GeaSAzBRJmat9GXwxsui4n2cGgx2X7nQ7jC2inwQC6DSc",
  "key1": "9TRVUQ1xdTQVh7hRgfREEcEAg5vkWhRv985utzd2zRDgqhp4mtYhPizJ6Fa63quFVoErNFQarGqf94TCvTqY4MM",
  "key2": "5JnKeYCndwzB16rHp1hjSxRJJQ9aounmUwXmLDCXRFEhWhHKVTpwe9RVmyafG4Tzd78G4ccBKVdkVpBJ5WyPQ3DR",
  "key3": "4WnjPrZdY3fty9HiHv76ocGnnRZC9gRX3U52J6xFmGjktykNhvQ1S5PA241FwtK8RhxoBmK5TKRVT4fmzAw4uqMk",
  "key4": "2E1vuUnDqvmA6gXPjhWQ3FQppuWweB4j1uAN2PDd4DAUf4kUK2dbj3vMpedETUhqRmx9twmZbpVZ4fAZp9AjKTJZ",
  "key5": "3vUn7j4yoL9eKuCFC9AB59LATGDPtgkT1DgZ1S6mx79xnK4v5B4Towo8gwEd61nmm5Emidn4S2QvShAkgtEFmYBb",
  "key6": "M4NY7jqin7v5maRPXsH8ujxPshzCBmKAVyVeXu5xRwRgyCmnA2GKD1u4DSXtqG8U7LZRA6zFBZGCeuNLC1wZH3q",
  "key7": "4eFYG68N3EnHCHz31rGBk7Gs3A1nQtgbyZL5VkS577oCUvBH8LzSyxKY7HhNud46TtX556xK3e2kD6BFBQN8Y289",
  "key8": "B8t5eCGYfkZJdqY4RU9NSuoRPFDTWaNJ5UmhuEKzZbjHE1ds23tzdKZSPCDBQwtFdGRL2N49uUb7kxCnqKEaHRJ",
  "key9": "SXmMRf4PEQDYUfUyrPbDi1KzNni34eN6ptaq3WqVLnzv8GApJzDSKN6BgwbfGc4U8hzDrKPzpttVSjceQth1RCD",
  "key10": "2QPZTowArrfzmiMjYy9T951YHzFuszgRsr9RbVAyDtYoZ5ydfyjf2FEzVLbDdcJ9Ra4Nw7KckKgBJQneRvmpXgj7",
  "key11": "3hexqetXuKeyD8x6p5wF43upkYLB75LTxJxVMzqBvD5xEahf64mn2bG4byhU3tEi6RZ9KBsXTMymvmQ6v3WiDzyP",
  "key12": "Yh5odTPqJedmupyWpHjR6xt21r5a5kE5ddThfmoiLyQrNNNiJAvxraJKnnHpj4eYuun3NhHgYKFhgSVf7Arunfe",
  "key13": "gsEuB8Bphct59tGBu1wDwZ5XjjDzBEhxYunV5pRRx3sWCBJbuSPVNFDpQkKs4vZ9TRjLszFQiKUSLHwTfsD9pyQ",
  "key14": "3AKLuW7Nc8mdFg85uCZJZps4FtTEqbuokwHRQSRq9k7acFZ1f2LDGVPZLCY3C1vGzDppCyAkqn5eWyQiAdvRTrjy",
  "key15": "anpXGzeXfR95D7AqdSdZ9DCJrt5Fqg2unWEbMiZGWftyHYzw12F42X27sfFM1zZuNnXWuqe6imGVwpbJx1BYkLP",
  "key16": "63Cg9a64KrwCMmfr5i7TDehnGHrYT1iBY3AXufzQDmxPGrEBYGMCx67F66EpFmBWeaoG6mRitK7Gd8WzX22sAmwH",
  "key17": "5ZRaYkGQrwgvGruDPMHWoXb5ZyTTqwzsWa94bpXTnGwfSRRdfYhqquiXcAuuC5fvSHZqiRwwsdgLK3H3vBsX2R6n",
  "key18": "59TNkZU3qLSin4Ey1SEcJyTP55CWazMyvkRFEocAAuA22SWW9D9cSYfbtaKo6JJTd5ZnhXga5VH6M1S7CW2geFgb",
  "key19": "2cyKT4Gb5FKtiahhcGFAbXDBemjaqMFApf8dadGJECaRnd18vMByw8S6EYMkdP84LHAg1Bufsd7G1gaqyzLYRER",
  "key20": "1yr1GbhusxhUY742UsFteCM2SmnbJ1vZdXMUikf2har4PCuGeDxFTb8W5c1ypXFRCdxxyW64ZNEmVC22d3daxwS",
  "key21": "3GqznD84kquUTZtR2AvFRX2AJam9N89RpvAu5SyDN7KVo9FcyWMn1i8LqQWnSQNYATpZwzqm28nfUWALGt35F1Ac",
  "key22": "2Rt6QsquyeVdmuefAv27ZLS3KU8gKzorodTfMBEk5BPydatAHbUQKSi3BMjWvh9ujREEqQCRhXbSEedjzqmjf3Dz",
  "key23": "4HvEbuAdwDPTCN79mtHaEksV9s7GXHrkhZP9ageLSu5MkmNoALL6AE5zUQKMK4tovbFtfWGCnQY2WjTzaiFpbqQ2",
  "key24": "5uDs4MnTsYTejA6aDmBdU3LRFvmsZvK6LPj8W8ETvevags9LDJEMZj8jfjBVdjveGrpy1RScGrxA2eKCfNasbx98",
  "key25": "4CLVpE54hsXR5hZdf4pTvRTJVCyK6nQdJ5kQqRsxoDa6v4svhfxGFztjfx89xskV9fWwNPAdYxkmMURDbMd2w6kb",
  "key26": "HJ1HhqcfFivZbZVfVyNfGpVTKchniJ3at5rebJQi5JJhpx7UyZ9cKw1QBWP4amCAyMU95aWB8WFnNQPxHY5776w",
  "key27": "41QSPrzw2Rs6pRF4nTog331GvZJHFZdv3CJRgiygsZnaYRUU4BuXrw2PbwmyeJmv8BABEJkjJm2SKcUX6gmbviAt",
  "key28": "nKiSr2JBUfZqXGJjWfGSaGF9SPqcDTo1a5BCCzfzYpKu9C1woo3UHYG8QVitcejksAULxxPVCRwNU3zC1tN36RF",
  "key29": "3DpTS3shp4zPodnmEugLNTWmRPEtYn2n1H6hMJMZsKgz3fqcZEwUptg5DGdpGAgi5ca8ikEP2ANfJh8fbCWShVCE",
  "key30": "oPR4AQ7JA1FQcVHusgX1poz2BP6TcHxkcNcHEwRg3xz3DSLubHEr3rC5PUziRdVtxZ7dXrGmJz45LatZXD4JTon",
  "key31": "jskDYh6WUP2xVkRd7FU2eMLFcP5GdPoy7GoBuQ8sra4h35CcFX3odcsSaQj21wBxHAq85quKn8DTGFeoSDXVP9m",
  "key32": "5fSn3SBqpdBqUCkimMcyxtXTTwtsyPjDNzApuuEpeNuemMEHREmanV9VB5rmxY7gjaNiLAkeGDnrFykKUmYRJLj2",
  "key33": "LzmqHfHiEs21f6GtSyiZUBw3Eh32jJjUoQHtGb4eimAQhNvFAp6pgCshCFbDMDWRE1eNHHrvzFdv1HWGWZDXNzC",
  "key34": "2MVPJSq9LcBD4fd9EXK8PcYEfBmUN9SW32fU7fAAkjzfaJALkjEXZJmzjwozP7dDkCbY4f9cwiM3rWq73pii3mjS",
  "key35": "4KpK7XBPAzrZdmCJxFkgskgLmerhXjUTbivp3hFF6ttyiEDmUEEK3FKZuaMe4UcujdTxMZBmkKGEcFNorAME4KbF",
  "key36": "4tKW36DKH8NARe1G25Tqw9Na76AHkV6sGsMe1UfDP6HiVGqw1iBrPWtWTqHLm51LNtvN5btDwsHebfwi6cXM2swG",
  "key37": "2L9PJr8pSePibqZZuMeWAuhqppQ3LxTpULtrUqQpMxhJ7T3AEWNpJMoUvmWEUySU3Sabd9nernq3kG85NE8pHAW5",
  "key38": "FPwNEnHcbNHhD2EJSke4BVFd7cgLhZEAarcJcRn6xzjkNiWy4He7gcVfXeQMVhaLMfx642YdzGgViAc3AhArgiE"
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
