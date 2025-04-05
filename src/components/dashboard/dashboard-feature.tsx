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
    "vQq2iFrRo5CrGcajRqLtTLWTB5rAPbxaycdCgrn3xcBRAkPzmAyoHPHjrvJGDmYJKCBWZQKYUwK4aHX2v5wr7G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9fSRzrnbHRMwmmuxdeEybxa6SEo6DRNevhdAu1JGKcLBYZp6dYygrtG5oARJ42gLB8AoD4yRs94QEWjAFU7eGq",
  "key1": "4vdPbkJU81HupaSpb88G6GQtFjSg7eBqrZ9oUYjWCDbpK6hCC6pHp9kmjxggx3DjjXehWnMdy1ZTm3PfCYwbVthh",
  "key2": "3vAgiabSb7brnTrDQNyL75Cr836KNaWX5JgECH5ZzYuM9RRuMZi8NSgNoxcLR7WC6gd8missv6HFccTzmiuCA5SR",
  "key3": "3Bw6JyADrCamMZk2nNwQyHnfCbx17nHi1mixc8bZJvPSet6QqHqo6xqKB4JXti1zRgcRRrs7bKBrheodTiPa3hLi",
  "key4": "3kGMF9SsGNwJXFKJ4GVpmMi6WthJF3s1ZFwnNhr8b2WDU3YFJ1VazYBinQKqKgAPFk1Xw5hv7kJXQEbzcfkQ4zsJ",
  "key5": "22rCRAJXA8FEWqBnqxVvtzfgPpkZuSZfcnRx8Mqg3TsCMGv9E7WiChoEkoAZKqSzRifaXG5Ze4ovYKeGmxoj5ZX1",
  "key6": "4hHh3e4g7GF3i4jHgTDUAPf3SmSf5PqX8kXGehuPeB6EQe6iMNm6hixfzzrqSVx7D8h54Po61wm6bCcegvPLdrx5",
  "key7": "cSNzGSHnTFgGrUiuqsAUonEA6vyekWHJ4ZCK7fBU4hxpk8mPQFnX3fMCXWtSJnj8ohRE46nH9b6SEnrUfbRZfg7",
  "key8": "4jixmfLKWnaKBhgGtPsqWRWp1Bd5U5FUihK9JTmUAwVAfbeWDUWmNEiBxb6kH3Vz1KZJrjEBafYntg61R47KHiWo",
  "key9": "4qDYiSTuUEdNytQXL1UomE6fSK9BgEwseFhkuit7ZEvz5xNb54PjbKDNFA9wDs3dqSYPNw5TD5cg4iNEHpR27o3x",
  "key10": "5cYJ9oViMu5U8RxvKFN66DP4BE4wypTN9xHTzEH6gProa7eLBg7Z4xqr41pmsZxJZW4cxoSNF63mppV1FDSQp4Uw",
  "key11": "2Lp7Dr1AvoCqHRVH3dUJFxfHbYXQaeRBq4NNEHDX3WCWoBMjnqxN6TogTSzV3u2pUYiQgQZRvsbYeuqBmKCGAbiU",
  "key12": "fd5tcsym4i2GUXGDM1RrNhhPt6mRgSA8BtogrA6vhXZsPsdntfgXr2co5XHb3rJgvDhDRdPjqCaADtZwbVmbAFJ",
  "key13": "hynRmE5qH5YUuvmnCiBr33VkfTQvaQMgaWTv3oQTXVZyFDwuW1298SHFmkoYt51JsM4nP8bveFpAnnmoCQSK7yd",
  "key14": "3qUHsL95DqP4U8AvKkfoB3q3tfD6s3HFGAWQSYvehhdWp1NPDovshLevqhaT97BMBPBrKXWgpLmHpgqhjYKxDPqG",
  "key15": "FN2koFzocNv1m2u1ZhEaq3wTC4MZedAgUUy878WNRUyYEujs64B6kMZHSxp2bqH6kG84i5Hr9hLPxctDpkiDPAp",
  "key16": "5DoxL2vrdnVdqkruMJcMu3LhMUdgPELfJzi6wnqd98GsRqemSGLgxVk6aP7WmcfYZzihKoh4TUHhkKSRrjVF4JtT",
  "key17": "v4k9CKBzBnCSaMWWAGA2avSQc7nWMDZ1pKKrndUYf1GE6TGrvRWxz5mHdN8XdbT8UVj6RAEhfHhrGmf74hSaVfZ",
  "key18": "5P9G7ZnSvMJ15kGKSsjogoeSELu3w1A4x6YFWP6FGpPSa5jL5sm3dNbrKrgqKR4oSkXEHMqmB4Z4aYa3teiJBAYH",
  "key19": "2YfpQcj7PztBEQGMZvLZ5cTHEspZChTmsmetrHkxp5BUqNhYAoDiEMUQNV9UEV4MLtQpmX77hVjJ3G9DxehxRBMZ",
  "key20": "2TwbT9QQoY7AwdjhFebRXVBTZ2H9LfKbpK7oDdSLmDzwFnpPvM1fyd3TCUYR7zdf2MjDHACnw7aeN8AksR7sGJgx",
  "key21": "66AWHCb49PwV77g4gpyaKGeHiLcqXVc9RHZrGGd1EWAN6n1xfkf7xtZLW3pLiBho8rGZL33GHv8MSMm1yPxKH3Ba",
  "key22": "2LWpXEMRLCmepcH5SuF3wqVWG58DjwHCp71JZ1AwEqoH669mkoYTTDiLzpkZrtzFb2nfW7QGdo8FLDnHGmpPQnm4",
  "key23": "5fA9WR3mzFnjDqFeFzqh6AX6XgqG8JqeazwTKFH74piEPXjr3M8yGuhHzAPKdH9LPNytXVh1Y8DjeGTtHuB16mKk",
  "key24": "5PdrxhENZFAHyaXaPuFU18sBBzGwuqMwN1oLoncwDfGxzgc12gAMz8taVjLYT9ny4BDZ63MWHhB9MFbuNqyXFDUU",
  "key25": "5xHv2WwDZQjmEec4ASyz4S9s49d6qHT61PerRX9CQZwm49163Qai6SgCJdTRoUSUFhJCDuR4Qe4YemHJrjKSuQwh",
  "key26": "2FzDfhQruF47QcMKMDz11vuAyfkBM9gVbTW7smBqahjadviTEedMc9CTgy6roTUfzV28MogdpC8LwuzEts67PM4e",
  "key27": "vLZbXwhqTPwwrnXedk6QTYT9mgr1aXMhfVdh937ogzGc4135QJyoXKCiS7fL2wXRKcTDukR2Ckhdd3vbGt41N8c",
  "key28": "5wR9pdvzQRVYm6fGtmFv6QCYRUdFZ3rMJYXMwH1znJr9UaibkNb6aYFzTo5NvnPYp1UpZ5amahddZJwGmc6pDFyG",
  "key29": "4c1EDSjeHiLRb2Nv8buwVetUWjcTtu3PEmNST5pw5ASuHbcgX5PNiRjmvpt8PTPWvES2gvnbiLqgpGecsLScazki",
  "key30": "HgsmKK7bsYG1zHdnXeYx5YJe8S39Zfw7NEt36jrDEwT44mZ5JUQKi3sbXkbPZjhdyqQpfGpf2yUnYzTBKSEFqJb",
  "key31": "3QxLDQuxNn4igBBfi9SsubY9iahHaCWauDQGGMXe9EqrpP67eQa8cXpJqTc38pcDezxd7J2hiEEpWQEZM5Ynyyqi",
  "key32": "J9qaGakEZw4iNvs69ZwiQoHf98wMkY5CdENoMPC6j5bY12WwZUqfLzGcbGmafX7jnKikBSoRARAZfNi6zP2q8vg",
  "key33": "5GVyCzAfwmsrepUspuphXhZ2tjJ1XaHKQZYArjqUHk4z8incCrw6wXpfUkuBiQNNgNzBMXD5F9PDihpuY5yZFQG6",
  "key34": "4k56aXBf57WSDQvS4KMXaVFjjVdeZAmbighShQsEUQGjCoUzD43zpqYtqqbRwJox645UadKC2eQU3FaPGHW4Q95v",
  "key35": "3LfX352wwxnKtqBHo8UPyWSdG8aghSxZCZyjadZ3pzXncVMUDQtaynpsAV5JPK5dK2oVLezukF8K6h98UZLawYme",
  "key36": "3PDaRrFXFi1yp7wT2fv5fUksBs4S2i2WKkicTDEgLVp5f2D1fsHpeQxYw4ezD2BkdF2PpVwbyrV1dKbFwF8tp2uQ",
  "key37": "5g6w16YTnC7RoCDnAFkE1wMHoBnm5PJbe8TeoCSpRFM9BzQFzaQXYx29ttkgwV4ne4vvnJzzi7iVjhVCVGJdVPqd",
  "key38": "5aUNmwSBuGCxjNToYkwhYxVzo2Ww4Ekc5nPwBC7oWWavUBEq6h2X4R7itsvPEe4kJhXU83KPiy2A5ecGbZZZdtC3",
  "key39": "SurbEv1nBUvmFVNDReGRR4rxQxypJ4F4bCLKk97oq9dtNWbvNhnJJAF5ggnpHpuAp8BU4ddyjZi3pAUsCejqcHG",
  "key40": "46eqk3vtkTQ6uQtR5mRx2J6Ecs9JfmBBrpWMj8mBbbgfoU1xoT8iYSZstn6fNtpxzHJ1eYCYwEFYC9PGMv59YrJK",
  "key41": "32BJUSQ7ofTBWhnLbfG2uaGXdm1YAehyLVW9LD7cVs9Afmz7TJH4QUviqSP1c4aHF5pAkbB3dUmeJGy1WG3adCDN",
  "key42": "qEZ4bLV7SoxfQwozkUjcqmMpCZVsP4Qkv6oJSjCxWQ1VLkLyREbNoeBm9mE5Pb8MDBZvaGqfe2HukVeAZbS1U9L",
  "key43": "5tXCg2LdpKVaseKPEtVKaFNpC8Z58VFPCSa9YdUoRe79wUKK37Urxf4K3eVyVNTgkrhGoTMExPReU1h4ScJXkXyN",
  "key44": "hG6qm7wpuAzLrcLCrdBqtkZeBqHj4ynJmjBbMBrrA9fUCd78CZfvvsLx9tkwdefWqz1EXAHe4YzashjXQ94rhQF",
  "key45": "5PHpH2XSaV9dP5nBAbzRQAuUJ9pSMwAMW9u5WgczQBjL1U1atzwoJyEPa6VHmBbNHxqWVGQefNPUUHg5vDicHDYN",
  "key46": "5jnYdStinkxLe3e1bfhk8Amw8sgQcr57pVcVwh1XTDB4EGkQNDqFAWx8sucmUphrHbSDsDpsoDP749n65NswXnBk",
  "key47": "3gNMgsoBAfoErnRYKYwh16B9adWpme7RA3vfS1WMthjHGoT11sKqF3xmiVPH8gu3AcUqfSLtrL689WxP9qNT9MYJ"
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
