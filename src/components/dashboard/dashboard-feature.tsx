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
    "eAF6kCumhqm5TMZyaqPcEmhtkdLHXCj9XLuDoYfYhAE6yNPWnk5RQswbvjJPQXtEypJTupqPdFL5grYLC6gVAKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAUuq5ACzNUD4Bvea5F9G8apvFVdwUk3rQkHCm7CeBheVQTSFkWyZ4tox4DNE4T9mZ3L6LJhakEmpjnmaucXm9x",
  "key1": "4rXBfjjGNecgLc9vebZwTV8TrJnKRKga7jq5rPuPC4yxxSoYTKy3fPSedwH88z1ejW5PYRGbp283YoUdYR5roTco",
  "key2": "4jfuKHyPgikyRUPbrmhvne4QR3TviuD1o7JD3FtGw71r8LqHKL7ZWt2virp4xkFHP9JREqSkVmY3oi1s3Gpbr9B5",
  "key3": "4De5tYhjb8X1s7N5nofWJhZ9rC25Gty5FTMmaNTK7iVW4QvxGV7ChmJr1CdPpvWHSZpHuhznjJb42yFEe9dexRvJ",
  "key4": "3Xav8LSeHym3jHaqTs9GE56LnqgQqBWAVW7ug8pGChp59N8nMczNkR5HFSEUC4nkiEt1hB2xbK8reFxnaQ6UH6MH",
  "key5": "F138TwdtfZ9ayWurCtePqK5U3uKE4B59Ei6yWN2hcj3gYUf73ipNtHTguRkc1EGviGpjHdEcCJuzPABtFjtuHdn",
  "key6": "3VXtcFMQQZCHiqvcZ82eoBMma55euc8wtRrvVbRiJLhXkQqog3X2DwyETqhgHSupS76bdmcgLPtLiibpQ5uB3Njx",
  "key7": "5mDWmdZMi1USKPHUvMgZxoEMpuF7Rv6sxz3B1GNxh2R3dR5AECTVowzfRxHdJjniUEhxidtFC8kM1f1QWkvWxSUX",
  "key8": "2jQx11Xw3wp2yURKWnXoXQLzPnj3ZtqGE1gkAECfth51cS1wUV3UnkPwBeF498UYWN891mTtDW1KvPViqowjikoY",
  "key9": "3Dj6rpWE5rrp9JNUkfHjf8PB5BSVkhgJ33tvis7nPJR14qZLfyinRhbS7RMHzwDo1WApHaZRcrkvrk35VWvr3M1P",
  "key10": "2kDERe8BvYCAqKnBdyn5LBTmpAQJf8eB9VJdwv2GynhdF19AZBknKikBnmesP9zhBWeV9Nr5wuE2d6uTNmgk498o",
  "key11": "5Ff8E478Q9p5QPE2whsmepNtNQrzogXV9k3BjUxJ3jcQHbHAqhuXg8fj3VnRPM38vBiYmZKcgwX2FksxbdJ3jUB1",
  "key12": "3PMZr3tHk9VW1CUi1hRcsquUpH9zhsg1sSwbfFS2Zx2PNRW6fLSL3yaS2c7PZKbDeschwERSWQhpSCHgNK48Zt7z",
  "key13": "5HXwtbJugTPxzx2wo3CpTBNKM2rqJV8ZFSJDwMEsNXHk4XgnXZdBfQqWgnkwGPEUDwrRwMLTUZNCA1oGuatCnR7E",
  "key14": "5EnwQAVzkAyiBNPLX22vqFgP166W52fCEUUWR6THYwgVH6kXTD14QWZ2HcoGvgDs48b2S3bqhwYg7EbXkDEJH6D2",
  "key15": "9bkU1XZtY1sYPSkY68m8iKpEgdFY4iQwtgQBwzLbggM2PK8iq8brZx73hFp2QVgzyvdnRR85ftTZpPuDBSwxHe6",
  "key16": "3FewC7sNA8EF46MKSQzZ6YSTN6r8smSx3RpeD2pCXLUuKNv3bULyXKuf5Es2tcErNHyrnoc6mXVQ4UhYBzzwKGKa",
  "key17": "4Kr4tg4yG39ahhneyPGbHDZrPSAjbQczQHAbtnnRdxg3z8Y7wjAjiRPbMDG1n1eSKfv2eKwu8HqCDvxbrLpXBmMj",
  "key18": "cxrbUGJRSixdeQxqyxY5aVeP4WQ2bvGF4gpYnEKzu12Uv7BBCBWiy6B6tYvTLHrpHm7BGBTS9tzqJDiiDCgRbRC",
  "key19": "5547Wn2fkHkbeiCGaDeoMQHhdjuq6pMNufLwMEs7erE9NYBPaUDrfrcdC5kS6sAedeGFiApZ76XMLFKqUe5p68NJ",
  "key20": "3QsK8HiohPMmdqzMcmA2EU533GeXDEpEyDJq6UJgaCEWyhwrx5pkhNRzrER1biH1P9MqQw7a6Png5rnRueZggmut",
  "key21": "38ugVLmFWHM1ErNd2m3KQsqV8XATra8zLG3mdRhbVsdLghjUvFpV4NyKTKYnRQ3Dg646bFyXDcfTA3UhAW7f8xeG",
  "key22": "7AJ9MnuyVQV2CSrDpcd4TFcN7Jihozb4pmnzNNFXmPKAk2dxChL6o4bsqThtpc4h2TijifyLAFc6SqphbaoqnvH",
  "key23": "3mHAQ9Zcq2ijaq5RvcFm6EoA68yAcZ5NqBfEqR7Z8AoooufXdVHqyEKnhkxoKho4vgiGdGeYNMzpcgJVa4VyZLCi",
  "key24": "J18zcBpqNAx3Vp9zv1CjDrzHZSyamSygcfJqBa58XWpTg3QWankupLgymQvHQQ6sMeKsZXnBXbvjMp9QnoPkvDZ",
  "key25": "58xZhP7vTP8ygVjZtsWvQaue7BbDazEVhjS7JLZLsKz16U31pMUXn2n5eKDydmdzMcuLBTSLufpZL7g2B1qfayDA",
  "key26": "Zb59BfhAWp3YZKTpyZxNXMTNBHPabx7QYKW7ggasgSkEWdvw15iFzYDnvmbkiLf95XLt1YUtvLh6t5LZaS1zXAd",
  "key27": "2J4aQrT7fw5wYuKxMP37bJSiD1jXnjs23GKGGpNLL5g3NPAyzcuuSTJ8i7jTa3MVgfisGc5iuJPPzghuP6QoTYx4",
  "key28": "3dxxnkJ3LqPTHhuaYooeRqNgMX1L6Pq7bpe9k8T7qRuidheK9tFgkG5GjamZrL2Pgwb3As9MMrP6CCRicvqkmbjV",
  "key29": "4yPtLewVdf4GfgmjR32RooJ6rNRCBCdAKB3G8TBVfwEtmKgW7PTJTXvJCLWtHftf7HXddd1DJY4ijheDy3jkMtp5",
  "key30": "3gsoya3x4R1RKjHF5KUgfH8AFi74qiGRoroUEeccaLpVnHE9QbZGyRvyzF1Fxq4tNobsFeRoWjwzWfSu92YgwJ9B",
  "key31": "2ccVD9THc2x539JHCsJ5tfA3nHAcAQYvuc8VtzYhYop6Nut79rTMKEVD7KitwvkaRA5M1h7nN4oufK8AvrqgZSMk",
  "key32": "2eoMJQFKZn2z9C2ZHion4DDN3iyDwot21ERfo3i16FZ8iYGpRLynkdP2H63vgHvcQizuMtV7T2ufbZj1fERfj8QM",
  "key33": "2U7cCqeywDquZPi3r4fx4t7tyUaByn5FoTtpeQ5YuZCemDuBnjifeUoTU5Nt1H2fv58Hgs4qAfbzgoWQizPFCuMG",
  "key34": "3Ysgij2r4yPio2fgXEzh3ZDF5JkjJ8GEDKM4rB6hnPE3VWPgaVPkvDSoY3w6dPLDKkgExGFbFDRQgRFr9xyN5t1F",
  "key35": "2LHNkNCcwvBdyVmCZNW6S7UwGoi763tukZWAbE82U5R7QR8eHRfemTDDWn3doASUzuqxLBt1k2pURrHYgbRQ49nn",
  "key36": "5CQ57z3ZqPF45AnJfnTQuQYTneVbfPfCkyWgsYDgZqcrTme13Yp9no3CHfYFFbHV17ixCH8qoq1e6QUJ9uyDrkbg",
  "key37": "4v1S6H1BvqXNr5Gz98VTSPL7SRP5PaL3sNq9T7dHGHadPDNzd7YyYE5ooW9DoDJWp7jkEMQEfiBRh5wQ24S5yNA3",
  "key38": "2SjK8vbMau6wFxaMAVu5bDJ8KcJtn2TCGwXpQUG4wF9r15PGSTuN34Tdkb6dpSj8pPjf7T7H7Zcd7fJepxHp7mk7",
  "key39": "4mbRkqNpwZG4w4xzRSGd9aygTXgZtPPKUNZSQSxSrZkmvehEGp2MrJcrZ4auq6XFp8Ub6sNYRkW8sfwia8AYerX6",
  "key40": "pGjxizcSNBEzNXAsY3SZWSEEMWeZw9xGyRAR5xvBbT92sZfaeHE1G5z4UT78aJYafo5EzPYW64S1AHh4cV4e3Lv",
  "key41": "2HHWmCoKJHmr88Vf9hkzyuU3U7t9j3b7o1pVqtVjUBPwEM5DbyRF3mjdLUdoWs57qYa7pv5PqimCBpTvHj6fL9wT",
  "key42": "2vnFTKQ5HKVJNwtYSE9ZYuBQDQ9rGLfvqRhVwXtyvAvK1v2RyYuW2HUozjNVvVobqryMB1ffSPfGJP7fTViteXt9",
  "key43": "5P5hUHhkXWiiGaWFDfu4WEEQChzUMz672xj6U7HcZAFSUqVHkygASePBoig7gmKcKeMVqjYiVkDNK2qx5Vvd6Mx6",
  "key44": "2ppohGSx4ZDrUwM1uqGEucGr3qmA1SVm4H9ryvdEunYjGiNEXDsjDrFZMPmCCMEc41ZkAzoHKBUGvG66DkLN8Enq",
  "key45": "5XeuVnyCFFkRDmooDHUEP3H9RHMLbPvnAfzpXQSqNURB9RW9DpbnxwaqBbTANexh2mGBH9yHKKLx2UrDiBqGhc9x",
  "key46": "3oK1FRvumX4poDeqoQdpQkBK8anzbS5PVALvZG6VW9qBScDj7absBcW8XL6U1AgVxQyYk3z5z4LCyrcTMHwjFYj2",
  "key47": "2U2qdcriWvuckZBZNeoggUoYD79AVrmsibbZ5FDPggpcvBB4HU2PceiNKScsJuoatPDBqrNZ8KyJLwnW39mzpyih"
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
