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
    "2nwjjMFeTvBY8XzJk5582819HWndeNHFgNn7uZSnZFCdQQxLSvDmMfQ8kJMiCDgW275jtcf9QuJuxgj7TB7YJQfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pG895EEB1PfKJGbQNpnz6CSa2At4S4RNqpwuru7DHXMXzBHPBnmgHMH9Deg3hzQ4mPDjF8iWEP7rQpqM5gPAFKf",
  "key1": "wKtGi8jZGyeULmLeBhYLNd23PZE2k3eNSKzFwmzxcfCCNp5EqLLVwpTSzuxpnK5C7QgQ7qFioiF65JxUzqMDC4e",
  "key2": "5LSrYQPChtdnyA9Lq3Jnwkgyacbfym14xiDXyLVi3JoyqvGmTbURr5VvMFfDYsGrsp3qRArvWe9RQTWpUeTkEvXr",
  "key3": "2eZP4hpNYnwwkhntaXaT51ZMUELPTxUSAhZWmFFBStJHutT1PFD36bXwAao4ye4wypJsAomfHCCmPWhFNNktkAgj",
  "key4": "2c3pKvKF2GbH9qwac37LJ3JmYJaEm79gzcMdbrDXN69Fr3Yv26TcQSH54ECtD4z25Rke6BjrNQncYSS7wXEFwhiR",
  "key5": "2BMEe6ZU3epHLT2dVVf5x2r7JaGTQhqp6pYM7jgLaAxDbbir1TotaeZ8Rz4P75rdWRf2wNDMHMTkeMSgoEos1DYN",
  "key6": "4SDFHwcM5zWU5NLfZ539QWnf1v9ewoYJa1LgUA62m7Vy8uiurAPadqEfLKv1THhmXoHsEJhhWzrzTS4u7M5aCj29",
  "key7": "3f6RMC9scjSRh4Hm1h6XDohfUMW35baVv7c17HaxVkomVMseQo6Bt2no2cZ5DD3MxXp4v4g24CJiCf8xMkMjQH2M",
  "key8": "FGS6414kT4pfT3E81P8S3xEaTnzXy3eLfKRi9q2LfWi3pjVDinPNekoeuq5kHEjomq9Wa5fixHd53RYk6wRr2Dv",
  "key9": "49PYW3Bq8iPdCb7CDZ31TEaLVe4EKoNrvATriyhBJgAjJ7MyDVo5mWKkGbavAfFqAiHNzcAgEwaAEsArwdsngrHk",
  "key10": "4uMH46uGfgWTPWFz2YPjA9x6VA4NWib4HwFbQTUpJ3UfySYzfThs8gsu2MdefUqed1N8tkkAceJwiDrHg3CqGsyq",
  "key11": "bXgrXepvQ2eXj3jLu1AdbfLfweiBjqV5pxyJYnDGQL2tVgK2Tn3keU65ZXxCiLa3biGxAJwxa3cVAMXSPHbJUdQ",
  "key12": "2LrcETfaYMhRwRBumMRYGr4G7CnUeYMswp7QpQJF3buawM5E5YcPxtneTGrqCcqTRgMb9H238iBM92eZPCEfwgcJ",
  "key13": "4tjb8hSSBQDJrLMtbpNDq88xVQq6ivrY6ZTDPxisobATLRiikgXFMqAo5ZpwpBoMgaoFKb1RcUN45vErrmsfs7Zu",
  "key14": "3WuKiAoJKUh9H6hHShj1UFEigLtVYmfzh9axHHLXRh4frPWWzKZoCzrtXZ1bGMtezLdjWgsPEKfXnfsra6XPdjQN",
  "key15": "5G8PWfMo9jh2n3EjHx95reY99cKHgNeSALRg1S1FrcjgkWsL4SwwvyXpEkujkcb3v8vLXkpsiHs4zE4oruPxkVLh",
  "key16": "F7DV8s4932qJUac2tpD12RU57YYMSLEyc9yCnynhw4fop4RCb3hw1qSqZhoqPt5P7weUv4u3Mo1GZrEbeJrSjz7",
  "key17": "4tWRZNkmJoRBAH9s9YaK2TbCFsyetyun1k7tSHzaEnzZtAMYhTjcUFgYj5jmZnaprG4nXQKbzZQBAqb4JpSbKNyn",
  "key18": "4J2PiZcun1M7HUW4m1MenhZ3Xsv1kUfYPtrrfs3RXjTi1w7DPPWunF975VRKEhgZnT1L37YXLbsiRCAaVpL7JSiw",
  "key19": "5zh79yB7dX5E2jK3yxvTX5QeBsmGLinT3ymBdKKCNo2RxunwYiG8bksoxipZjxjJCgyNtV77v4EZyuy9XiPAwA2j",
  "key20": "HXoq7LEnyQPS1uZpucpzzJKuHgbmn5NaB9NmBwNXHnRGjdnWmVDEFZHLyVSFzNEyryx3TiUvAHgWKcxbeznVLxY",
  "key21": "4jp7NXbHHX8k3j5b7jqEQoRHSDHW469H1erVRV6jJQASntFzTGfgb6CxFXpjCYENxksHk8Qy2wvCEDNLVQgQhDsC",
  "key22": "3Sad244qAJS8ccxKnvdKivuLmgHVgSxpeq8qL4hMeVL7jAnwy9N9iNUafZk179cCPqHDxAzH6BWx5C1eTBbXhPHk",
  "key23": "5M1EVgUBixFe3zhwiKQ3ELF3XRzYL4VL1eQ1gQbUgnHEfjtVcugiPuuUMa27n7pFo7SkyhmE3xokk1EwbceJqees",
  "key24": "53YS4gLKxnDipEwavfcrBwi4fDeoivtVJtuzwf2Dop3jsN3vr4KrQ94cF66n5zzUVW4QtNYwnodGprq2uBHTmRWv",
  "key25": "5XASR72rLP7vEw1itmrYzSBkVCoUZvriAY3zQcS2sQSqEKMZqWQozdcEiVXvzDg9fWBpdf8yHgJ6GnJQy7xEgZmH",
  "key26": "oXVuAjfzsNZqgViyAYrCmFhd37gB5VMN3ESR8xm8GT5FaekPjieQqNFhncget2W5wa3tMqkoQKjBRgmbU41XEfp",
  "key27": "5j45tKSvDPpf1Y6Skw3ayf1X5vkCwvVwthbjzffUgd6TtcnpbjvDQPUqpnUL1gBhwrMfmMwWmyxyfWGkCkYP4pLL",
  "key28": "2VgADQW61FSCj5HHFXU1Z2gG8dDQKjsoppEJKkra76qfnibLxMK68QstNUrfvmn6HJ86mu5u5U1P7Ne88e2dX7nd",
  "key29": "mvWpRz6WMao8zkP87ZTkPZjak5K7tqJyAbuhrRuYN33nQphSx4ap4R7hMDQhGYKA9dr9jFqUbCJJVYVPeW3NiVu",
  "key30": "4GAhVMm3KzaYmg73obesNjjj7HetD8T978gX1BG989sXNJnTs4vBB57jRbU8sj24GYV2kuVYQ7LTNbhsqFco4g1a",
  "key31": "5hXfgMz8Xe3JXaAGYtZrdCRNccDwc3WctXYeRkHwY45ZJkkkKXH9AkfWAyAkUFCvJk2gUWfr2rhBNxLyWH1BvxeF",
  "key32": "ovh57TH78GGHVJA2dCuGfkJdnMswtNv4Nw4yXhgUCFgtztvSybvMxXFV2vdNWurdkjJypSSNRaodBpFGEeY9BJd",
  "key33": "eQbnYukhQc9PvbaLB6c9oEheDGgfbuamtuXdL1ooqqp4dymFk69bu7Rz9wTRx6J67fjJ2U9LZunZkmWd69XDC7t",
  "key34": "5EbfxinPzFZdjmDCEXCY5TT5egR4jxxy3FT7kufMt14VtNtuFfadsPF2A7wSBr2SXivqxaX7ZEiDW2KN22qqy79",
  "key35": "4EWX4qvFKn6i1p7fSUoZD3kRgDu5mTHUVBs6srzJEUMZ16Zy6yxztTjLrTB4KjPrHDF3aSpzYs3TS3ty2XxTUU2i",
  "key36": "o8qGLvPTkqLA8MaUbSJZzsVmYR2rGS5iffHhkTvuNDjXv3dMFYwry9eeBbXbxPSKRvYYDjVFUd1siQX6c9dfoEj",
  "key37": "5ie4MsfTxGVFzmM5FJJsTPNXtpvW2gmJYcbwurewm5UoKvwEZJxv8M1wSpf5W1RpAjTrV1x2ZGjUdG6jh7zXQsFB",
  "key38": "9NJYhFrv8wqAenD98vEi6un7UWrvczYKAnxnGB5FfiubWf9fY6ytKu4UZ6VgstEpTjWwcWZ4pkaKL7rfVwn2qeE",
  "key39": "5hP8TuPTBuFp6mtbtb12stxWU4eqBzSXW7UcAk9ecUjpG165dmRWYrWJR8vskoZm11CdciWaJirTBPQt2StyidKy",
  "key40": "5wJduc5j2L7jjRhANHixe2B76f4eeKh7GWfoEZUy9YNdR7isSGS7YvuT68LE9qXUcuCfTQm96v6iJARebFPtuZ1z",
  "key41": "Bn53rJxhY7FaHzH3PrcB4gedctGiC2qwR6qZQF6chMvxV8HqKdFrD6pT34UtYdUVR5c75LgEqH7BYPJD8h99U6v",
  "key42": "5wgmfddGZZvfrM9S2HTBbJVr29ypeaBPx8za8Lq3z2qMucReDoxpmQQtKmF86EsyNW3xiThcNb5KMQfQG7yWGPVu",
  "key43": "65ywkiNpEPSa9ATQ6wawjZmc27CLdgfVtRfsMycBrsQJyxofopwtcqgmHBf7EyJ954KxiVqoAYAa4f4RiKss5XZ1"
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
