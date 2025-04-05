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
    "2J76DnppRjgJQAwHqm9BZXWnaFWS5YqB3wsXPXmKKLP8ruUEjotAGQ5NUBwEN2rxYrDFN7UQGAqeiFUg2yh7nWEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTY1wT9uGMygwJFnzs8yBRMmuTGBQ9BUwJjMCWSma7z5XtUbVbHi2Ejd2FmoPMTjVN2nJrG1mitx87exqFXZBUv",
  "key1": "2cxbf5UaCc94k5zssDtg6R3ayZV3jY6YwUtmtGCDoQL8BrN9CFEcx6R4bsGJykVGaVbRBRNe3gx2kpZuS3Xrwsdo",
  "key2": "3LUMJivhDYsCypR5FGemDLxRGi5zGGub5XMuGiVLRivufbkPjkH9zERryDx6R1zWz8ug3NX8gV1eLqKrUffwHiia",
  "key3": "51AgXhEhqmqML3fg8SCWDiXoFRgaHncDed4vrsVWWfwwnKhEMoJHrtda1Rv8ZnokD94477Mt9itt2dFSrBhnwWKo",
  "key4": "49JC7AEKhmwGSVnmLeQN65G5fc96dDKnpDqJTmwCSrpowxiaWy2DySTtu9TA2QqqW9CsSewqwGcSi16MWzyFcK6W",
  "key5": "BqE9CfToJhvdFDZsteTMxtZZMWFaVSPgKhMCdZLsS4EVb6bapJ4Ga1CAipbrdXf9u8yRaNTAAGo6kvZhUwuwBUN",
  "key6": "32rKA34rHK8CySkuZGYRLLf3cCBBVuGSJyoShXwcdSmHduk9vbnnBV9rWCAXiQ9GMsQDgQzCXPZs5FH1Xj5hKHPz",
  "key7": "Px5fTPe3AH5S3eeQ2M89ZjVcXdQ87m4BUc99UERt9dy6xZV4PrUnK6oF2fwt91wkxkrvkeUV8PgepmrmTweMNX6",
  "key8": "4g3TfXGtXpbpAM8jt6EaxkHZbUKEH8KuwckRNTPbzC7n2efgkTELAmhMKrcXupqVFfd2DjF4v1cJg1faz8WhKoKm",
  "key9": "QD5HdcMj2CNUW2ht3U4p3LB8gpRbjXNSW7uqxrPgAG9HwUUwHc6LM1gUx3g66iA6o8hCicbMFhvf24E2utMc4sK",
  "key10": "38cGxvcebGqSvzzfnKstxciafjD7e1MLhWNhc9XpXJ7o3X6oFdpS8gMj1J1wQttXFfeXw9yN8qU3UHt8CyHqihAS",
  "key11": "95g7G2VvN7NSbsLDQDx1t3r8Kct3XuKSNheoada5tYJwNhptNhWoJUqGGoYNAotz7XHRTSMcBF3WU2ZjFEJxuLf",
  "key12": "5c5dn4hwBEcqRtQMKpdtQsDVZnH2ujdFPsSLYVdnP4x2EPyBqfuQJTctG67ug8uh85N36SUKDf1wo1vnBNgrtp1j",
  "key13": "5CeHkNVX7VJ86JaeLE6jWnPc1nUbEycKPb5GWyWSZqJnCxuuiS9CypVo7gEi2zVwHTKSvbjhUet5wSRFmXKRKt1K",
  "key14": "3oNxBncVw1ixmRV336efRrWSkKdqkkqm4StzXaZc7ZxGEQY5FfgAjrbNDTxPmTP7PqnaniouqV6b627RJWrfA7KR",
  "key15": "3pmmHXwsVTmvK9gQdAk8eR5CgmMoAsxS5W9k4P4HJwihyoeAs8aWYzpPpC2A8EtJ6yWLVjjnj68TTqaEeHngvkrX",
  "key16": "253cW93Hhb4mYatjcm2zg2YRf5npptqEuJwHxRj6DztA6QkGDxteZUGdf36WwG1HJBVTQGU43BQ8a2gVGVQnJKb7",
  "key17": "ej3VfFMQ4Qc7XSS1J8SddYFaPtMi9JVn97hNE8tEyzi6SUmSRF1ASxcQX9EwDq9mnEGdr4WaSErBSG7YqisUgwW",
  "key18": "nDVGYv82c8RSfgPRRwYWz3tef7eXEatwMV1tk4GmF5iymGxZuxd5rSbAejQgxryTx1CHFruvRWGzvrMefB25kye",
  "key19": "2MCms14oWFiwNstjVgpYaC5d7HCVZeTk4cAf8U28XYUS9LNGXmh7DzCT2AC5nS7n5hRpY24mmZKB97zKDn1gGMNz",
  "key20": "3BtzE8Q7XbB38sQtmE23kc6quoEPFStCEjE2p3AfA39g2gh5ZJqwKoXZPNm1YZzi3Kfk8qfeH8W49qnzKVLqt4qR",
  "key21": "2Dm6XA7Uf7MGXyJAgpXaYjRbnHhXQLFURqZuDQtcQjXqECrqGm6UwK9ihKT8UkHbAy3DVxmBNr18fwK5s25iMnX3",
  "key22": "4mKjrrWe5noC3XY96dGcRGdPXft8ruscNN5nMrHd2kNZHoSKVQTSx3qua9u6qFJrevvkSXzdrBHwdVerzTf1KQv5",
  "key23": "qJ5YWaC8CRABmPfxuDav7DVTpQfSHyigRxNFxatNF7gRk7GaBqjMEN2pTws8Zut2WwN61z74RDP2KAuFBmasbSB",
  "key24": "3RafFWtVmfPaY6ZDuXfDAvYRFx2ewJkbKKarVBMnUBnnrDhqfey2H4vdqHQ6PyhGaRCaRbfsjhuTWdSnQcpCRoCQ",
  "key25": "9mgro5oQrb3VRKhA6MJ8m6KpPjE9T3quF6bVFiAdinLzcJqfnopM5XpVfG5EB3d27t1SbqJETCavycMP8Dvrwak",
  "key26": "wCyECACkU3Zy1iBeh44h9Br5WVSCM4ZEVXCcnhLdphmtZ7AV7ZEVEkhTdn1JsiUjLNXdB2YJqqt45vaZjPkgraz",
  "key27": "2NVwK5XophkbCemzqRyF4XHBDDCCbngNtTYLW5p5qv15e7AbD61DT1Ukeu8F1ze9LxRiBW4ywoMGXUSp59Tvj97D",
  "key28": "4GEgdQ5kDSi2a3jmTunSrnrkhckhje1TcG2H53nWguEh42xYCmAuRQrajJLKcHqzMrAXhDy1agnNvwdyyanc8fse",
  "key29": "3uydue3XwVcSkw8W9bMRnnuhpEU9kTDENyXNfPmfgSLpFEbhszqQxFjUQHL7zM9PaLKFuGpG99UjnmtBk6PQAkfr",
  "key30": "4xvRk84WVKCDpVgLXRai9zA7dx2re9vqsp3tXbXZCyxXKwD3XJyi3Fzco2b8CE45mZD52RNszUZL4EuYBY6FNyMw",
  "key31": "4yRm2ghGtvAGpqmz4pyEyWS7FoeRr1pkqsSwEd5tNxzwQFGQ6BjanFkEyeCM6dvjZhTB5K3J2uPAwVPfnNS3VXuA",
  "key32": "5uM174kU5JdkZpMf68qj1Cp9HALT7RZY7ArMW2qGAHmDFYoPQA6YAZHWZXQdt78k6URfHWefsfNYv5cDcUsaF8pT",
  "key33": "43VQka4KBeW7DFsJxopRnHWG8NWNwfLGaA68UCBqf8xFFG4uLFrUoQr6uZbbe2Bg5WyzzAP7fdU7k4k8dkTiU5Y6",
  "key34": "3aUyzecrXagkkZbkhy6woXvf7U7cxe8cKu7yBAAc7Uz8tEUpcCiRa8ZHjHPqvGUujYBkzGJHPw5CcoNtQzeTKio8",
  "key35": "67bVwUXJzuEXpbJXt8LbEtF8wBA5zSmeyTNQMhraHgXhwTnkbj3CLykQ7bCrdcLFJTfPGhnyEjU2MULxU6uVob3m",
  "key36": "3UkZaXBZaNGHyLcFx7zwvbutkT9RWRtRNXQqKsUUAo1RueMfKBCyuVb1aHDMM4AwuD5JFHx4QVjwkj8pRAdGRVxW",
  "key37": "4LqH4bpQ6jnM5qn7RNzzpP2ja3uavgKx6oWuzUAgk7a2TSTfwRU2RNFBe278dz8ofvEhLYkWcuUKU4oi8vUG4fG4",
  "key38": "6ivinsqppeNF86SyxGFWgHrhFT4BnPRMkJ83HvEnW7eBpe8sK35RMS6DtFwvwmR6LzWt1XovR6ozSgsoQAphugY",
  "key39": "4GcAg9FyoV8CtD5fhPkhZWES8WGQC1xN8wM4AEpBgv2MUP99ppKqtZCmpysdDbYP6dSBYK8x6NBkomDY5AA9sbVQ",
  "key40": "ubyYhmhh2XmtKZMHUWyt7FumPC6dUE5XXhBcQ1ckeKwvDH1vwWWEAMRB36668y9Jgrf3SCqUhzDM39NmAAQTQFr",
  "key41": "515woXXfV7duZ1tALJLeNAUsiAKR4Jt5teMMnXTA7rQFkDszz14AyzXVgutFbS7eqSYcB6KSvRVYuz2H8Q5JAnDK",
  "key42": "5YVGHwdaw7fEHqJi5uRP2PGpmE2rvdG5Yw6SDAV8VZwUCDJDx9VuRZA93bjjnLhhVkeL5FvDkDi5MVfTbvfyyG1n",
  "key43": "4AbBsXrNYCmLt1d5SjD1BFL1PgaxHZV7Wh7if8y5d6uWyn17hsEXWKjBjyabUSFafGB4EJV9u7r1DXUtVh4Gsy6o",
  "key44": "3A8uiu4E4C6kcGvjP7QUAd8kn3x4WUAcRt4DRAAYJNadG7ra1m6B4Gyb9qwJvXWNQXbjbTCZqspBqYo6keLSVPup",
  "key45": "5XxwH43wMxXXmWFkHJiXEeiQzHkydyoeyMJTyvvAjJWE33kRTUtXHMheEdJEpH4qs9hgwYoHZ1F8gKB9feakonce"
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
