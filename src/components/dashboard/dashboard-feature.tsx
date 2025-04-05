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
    "2BUa9DnWJFWgF76Er4ZhdfX8u2rqWZUVwaBJS557YPaphPq1FYVCHpKw4bJXbskXmZakfN12wttDabJFJFqBhY6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbea8zxoZ9mtKNcKaS7vRQg5cTkJqPm2K7uvZYQugs8Y9Vxa1YG26bhnCYiG1JrQi9Qdn2XiuQU6U4FNQEoXeNC",
  "key1": "572uGxiWoGsUnL41GrpiRJx3aNKmFFrf2vdYMDVxbr28X8hfH41jykdAUQvFNo2ZpmXi2geGE45gstk7sn5byfQp",
  "key2": "4VfVBwemVdfZdgX2Xk78kT56M2b58c9xTEjaUf5EmxTUm41YCC1i2X63qVG9S4TrQDSUzoe1LVKhHFHDXv42uLyR",
  "key3": "4EfrCfMZpFhVMEGCRPxnzkuyUxW1ZgptYiAkXi1x5B34YydPPRDTTE8WbUdnPghVdJuXJtoV2kkLhTqVSYbSSu7w",
  "key4": "rf1NqyZYnkccVhfJbZKyiNCs2TuNLihK2429JwCjtDhjFG7G6cdzHWTawGJZf2BjUESnyoQjuSyjNT4oDxHZwcd",
  "key5": "2moayirDKMdTCyZyswKuhLjxZtEUjTJmGZngLNyAVgeCYqMW6WQR9XBdDSXBdqge4PDNkm4qPpqxupePehbB6BCL",
  "key6": "21BxwmzV4ZnpP3tv4R7VWhTWqj4dj1azLry6wGmWEi55cxorcYacn5CsMEuovEMRvq9Z5VBxsXqE5zVxjpfYhK1G",
  "key7": "rRZvH7AJYMBQFk91PKjMjzCtkbaqy4X7mNk8oAFi78nonf7UvsPsSfzgR9NagaisPpxt8SQBm797PGpz3i7x1tK",
  "key8": "5eUrgvq3icevRuYYwZdzs4rGZffXcDa3tweKoJ7Mt7XEFfWc9SmBawMGzmDzSaKmGUUvNusww7D7Jjgbc1LYL5qX",
  "key9": "4gmiRF8zhRXQ3kWtcYXX24iiKdrC19x24EdZe8C5ArgEgdbJsLniNJmEvnvhLWD1CzwxuAaLhGVjkAKDD1xW3Tve",
  "key10": "n7yXCNHKr12JpQuR1UPrNRAcZmnffMWcfWjy14uJydqRyh7PyPxzCFMHsbTVTExEAQ83G97mdtWKXegiTNaWoPu",
  "key11": "3V5hHVsh5SSSpp6MMqT8GEBDkyS2oLGLmvSTFxwuQFCEHra1Q4eh9sAFXQE6dPb9bhEg7MzzFHLcm3qQgtjpD6do",
  "key12": "2w9T51T57zQ1NzQrQQkv5A9MFWFXvy4sk1NkMNDFPEAqU4Qs88PSxDKzNdEwLWGtrGNNi14NZvnumYCtcmnd1Qx4",
  "key13": "3quM6BvvAuE6Vg6tnThrGf6jphk9KQH5drbo9nbhkfDy6pmsZLXuV4z6BMBfGQa94BKmrL1AhZYH2NGW5FoqHWN2",
  "key14": "jsv5sou6cDTsGimb6oEohqJCjtFBdgqNFSsGcRNtgDzU5NAN8AAxkGSxbgf9d91n21m7AWyYySBmn6CJeVihSms",
  "key15": "3EMDDc3VJQbqPPHMYe33KnSQNF9eue9RLXyaZ1HG29546RiMgEEMHtnX3w5k64pE5TjbsibdSfMnmLYghjdZRD69",
  "key16": "5WHnVRDW9ecwz9Xx5Xb6B27FYeJo5QF5gyd6BpuUmbkgin4CPKMbi1SgiCFWy4s47sAKXS5SHSAvVqbcKMrcreT3",
  "key17": "3ifgMqc6HXXTcFbTwp8Dda5A8pekmyRkU4hu2im2vRFwHLbfnTeVVBchZgHALyrUAqzNNea8H5pHmJjsAXXpmpaj",
  "key18": "3bJGhTbedFp8DwiJGqYapQTmheFKijLhT591J92VC7grCX197KyyhQNzuyJLMmgR79AwDPXY1jtAW36J9hV6MrWx",
  "key19": "4sYeAT3QCpjPijNCpzXtyPXWCwZ6tQymUtfT7EP5NXoqQKiySdSZ6Hgmogf8Y5cGbXyUK2DRYHNpKQSCt3KmsoRf",
  "key20": "4haaXx59vtETXJuASCV7Y7UzzqB574qdqvt4CP5ijwc79LTxP3LDTzDk8QEnJBtsgebP9zmgzGcMTrJ5WMmgcZB8",
  "key21": "5eWdoiJda3dfKqhFF2bYTmzm61qtjDbWX18M265fgmzjoSfgQmUFZNARCsoozhaFiNy49gk7TPcJjddG9vCDsbJr",
  "key22": "HbWUhMJBR9Cpfa316iWJpHUNGeZTBpunrVoifGcmTyVtXUBw5mgX6hcy6kKkJ2cigyJ1KoQoeJ8ccqv7sMcMHzj",
  "key23": "5ZQzUWtFW52Prm29EsX7AkmHv3o6VNyqMFa1dFEP5a62gA3geZKBp4DcqMcmbzkioL9dze5tZzZ6GHdNgx5PkfEd",
  "key24": "3LTXRZnNF6LBsQUFRdQ5x9TVwu6G6w8sfaFbvQgj1P4LgirEgviJVFGeaHwLJFu55uEpi9KAfFHsfmkSufJDHLtq",
  "key25": "2ERZ6XSnNs7zuXnuh6xq9x91ZMJwnrdemfWgQKR1ThYiE5fVeuHtpgos67XF5KfFrG3cocPuG8nuTi73qKwSdYc2",
  "key26": "j948QWjePdHy7bMSXvYupTwyc62rymws5j28fYqh8KrNS7WvTKFCQgc2yHVsgjy6h44rbWvPkrfwcr7uYf6Cvh4",
  "key27": "4e1qi4UeXQamcbY3dqhyD2TKP5z7GVqmyYkVXVYiB4Nedw6SxTf17T86xJVJk4f5NDJdGKQsFf5UNCgpdmcr6bDH",
  "key28": "2S2quUBvDBiSEkNRArHUUmwoKdBXxGdEjoDvmygW1y4qHAhjYqeYco9pacwqh2eyzXpVZzTvNxgPmN6bSZFnzgdx",
  "key29": "5UTquyFC6EZr3SJk3gSftsNbuhg16XrbpkfPNr8RqmQcWGqSA7F8PBGWVuGArSHbm5Y4drzZNm8jueXgLpya1txN",
  "key30": "48RH2M8SCD9hYQUbu34eE83pJ4615NKac9UAaAvAksKekvEb8V8TWWqFu6QR9QiPpVT3rWLkHvUPrWA9AoqRmwyV",
  "key31": "CuhKXUkET6E1CiLjvXNvCfHB8t1VqEpaJ8hXqVR55Y7FTVzEbfwarwoLVLJYeGAKT2fhoE6wvyVoyMPPE9445s9",
  "key32": "5dVPRz4derQeTzPZhBM5dscQPAJfszRizNXiBgmdAYzyN7VprzXiQt7zxsqCchLsFCUpRJFWjV26eCb6WDX1HoQk",
  "key33": "3CEsQJ5XSifKS8woyHxhEStxWUMUJTz1T2KpjfQsSLDt1NN2sffHb1APA3MoLf7jB9czvZdcJ9mTF4PqJq762yzN",
  "key34": "8YomJcwXWhasjJEEpyQbYKSZzczPPVH5RWWar8XKpBnEHx6MqvD6NxoTbBN64pW5fzjCxyZRnYJWa5fpynbYYeQ",
  "key35": "EtpZCjuVbg4gYBmvCpErfFPbpPxK8BM6EBKttH6p1ceVoFSLVtT1Mqa29X1JXiH5yarvt2GdEz2MgUEDN2oQAMX",
  "key36": "3yB5iQwwzqfuMPUzUusAAQ9zbbq3ZSULixVDxgZFdf6JGGyhC7A1nVmmexerGHb3b4ZJ1LRgK7yvGr8NDZVfy3vj",
  "key37": "5QNUezpZEbQ1iwgxs52PkQwEvyeH9vWAatyE3mx9uY8MjvZZqJbXjb1RqqBhxZXGtxdT5kUWffQGHyLnhHAkCEHJ",
  "key38": "4zon1QwuLNLxSrfEwKLhpJHexVwKLdeJvcXSsosSzB8LNkdAdw6rWV9myExSuHUHy5sYMc3aEM3ZErfLSM4rv2Qw",
  "key39": "3fX1LNZL8zU8Mf1Z33ur85XHdswcf88KVPQddPreDQ4Eq6JD2dSMwDLTgY1RP7j1FXfXq34GCprKqziNsTsEwE76",
  "key40": "2AHyPP7GKAWrkneuBjyPDkibRN9y6Toim4UkG5bdWLRviCRaVrehQmVQiz8YyRkNBjTHhPMe4J6AcjdEKT6akHLK",
  "key41": "22cEeo4HUQf9K8GHouajGW7gZ3QjxWiDEyGdG37eFXEDM9YLQgj3JMPTLukao6oFBepbeEDZcCDfutiq3SqRyJnU",
  "key42": "3DtX7EFhFSPvubEViLtvCD6SEuhp7Ux1h4a19ZTwkTeFtLzquBcdP8LzJvBnrixttiWXThvqM2iHZD65kCwraegz",
  "key43": "3CQuE2Gn6kN6PM6q6QiNWuUNzrE1M2abWZMsTAkuRcSQdPr2UnUWYcxNkF9NP1hkgRhn4d7vNFxy3sog347drfcA"
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
