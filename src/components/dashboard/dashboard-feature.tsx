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
    "3HuJc3CGatjagU8i2GXpccDHsphCxdE3Dn9o7ppMMmxYcMjb3py7AGx8LHRuAo5K57mkvfeLoi5HDyKUvrcEVWZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DoLBfXBEwgw9ynF1yX9gR4x8FhHKuhjDuTZ1KcxDy7w6mPpRdhR2iKyrEpwF56o7iqvLwEjr4Tj9k2KutdnBZou",
  "key1": "5vCvRbraDygoLiCMPdxkNQovKe1srxFae1NxdkSERx36sgzn12ecdyJ4PX3jbPDbKsjwTEw3Xb9yCKMqbqu1ngAf",
  "key2": "KGGwgaTyNHbHEjsdUoW3aCAwioFHJEDKWGvNGexTBFsCioVGP2mg8SUVBmbyWghghsNCoPz6hA23e3ptdXFSDNp",
  "key3": "2YoJ57qFKd2eWCrp5xt5a6A1tH6vntLeFMKEfbe2ojVEKHmkJzaVzzqZbsNiC8jgWrNXatgUu8nsp4bk7NvqQM56",
  "key4": "3x18UVCWiYHtKRNWhbg8PKf4LCecQ3NoQeMo2Wgfb8fwgFQz34PVJMoYyQZxWuyxF7h3hzZsm76wGnSQgyTaguhb",
  "key5": "41Hzag28qaePS2M744dakn5NKLJYtFiREJLUx1tK8y21JKDXyLY37t7erGrZmTZPneYNPUQu6R7mQaHCT8V16pD3",
  "key6": "QziALrFPx8A7yLGm8MYigBqzeMUVZRqis3PHdF8vwttTevMkscF9XWgxHuLVJcX3sCB3AX1dzUN5EoxFSvDpiGZ",
  "key7": "2DGCXFZCHbue2S6M3gD6QFbkv9UaYD1Qut5FfBv6Jdm8JwBcz7hydGDVFb8AAhxMHUi1zJEeqwD5ENdr9T2aQUz7",
  "key8": "81p8e3vv2ufP3D54Xxra3rX8ExP9QrSoGu5dxKdQk6tHr9ZsnNBQxZZGcbL1TjfJNZKBK5bs5fjz7DL7r7Vz1Ey",
  "key9": "3jJLNF5xHLtMmHF3HEjX7bJkk4RMiUXbQbdL3XLT1UkRNZNa9sZEjAyTWH4yKpxoBdktypmHmR5zQcozqbjhbiiu",
  "key10": "33TxAcRUqJNe2q2TRec46MyvwimpMVTTLkNFBKDsnpWog6GEV2Zqx9rQ6zxkCbZCdTau33J4DzznE3UT6AkCAmJj",
  "key11": "micyp96gEpi6NC4F1dYbA3hK3QTu68GEx2TV5k6wuXVfYuVVNPutgpdpFqr1P1n4ovosAf5rcVDbVmkxej66skK",
  "key12": "Sdg56hHzCEzLwHdYAESbuh2V6wkn1c3zgbTqZPYNxrhNydbR46xGmMUEuTDF1WDoA6S1oHVRT25CE5Vp9t8e2Kt",
  "key13": "5SC7uZFL6iYDLq7SxdRDiH3DGMeSNQd781PqAD96sr3sq2h6tmDSLMGC7aDJDUD7Etc4k34oFMxMPT3nPQHC22Ng",
  "key14": "ka6PJJSftPFoRjbhCP9NEi6c3zcdswJijtBTqVk8ELb6WTdt95WBsoMYYjAt3nuX3HdhQLtP9z3FdLxNvtTuUvA",
  "key15": "2mpxJ5An2tZBzjpptVsZ6Lsih79cJ82N8ih8SrYMBfyCf7nBfSHqcUknZpo43pbWmeinemT5jSb3JH1STMZfppAU",
  "key16": "4CPxM7ELRzH4NFTXGQssVjWQY3YHHEaKuEqFgp7uaCZ7ct5mqjohxT9AQ21z42vyH5kRUZdwbydH6u6ziUNXNh34",
  "key17": "5anzciR3tXCAyQwRdGdDje4AmzLxiWtAFSMVmLZiqLFZFsRosDfyQQooUmnh3EsJPJKnPDYiTuaMnwdfumu8PVLW",
  "key18": "5eGnhzj8biaNsDEWb7oWk664JMZkJFtjQn3Ex4RdxufKx7X6pEnS9sDiP6TQosQQd6JgvpJ3TfnVb6YmsoZYBBPE",
  "key19": "cjoozSX5nUpsmPTVrXfYBCCa2Mi2aN7vFXpcJwJLdkEoqDVgrJ1TLRskEHuAizjKbbZhmaYz4UYBMYBit4VpGtf",
  "key20": "4ERstvBB1viPjzihJp1dHDQCqJeu3qpjs8fGmgFXLTFAc6rEoepPqN8wF1UcfmxzxZ8riE7t91XBH3iCWULmwaYJ",
  "key21": "4cr1XaXxbALydJgyFVGMHPjbCx9rae4kEr5ki6D3CBzZyXx2XdyLK51mksQbLTK2fCAocC8FxMburSvpR1iHqwNa",
  "key22": "35ttcDZKUmYcXmYV95dCRNq3BviC2wFezLm9wsi8w3916onmA5qqXwWBSf89b67QivMniBXugbCicWCsxFZHzNEB",
  "key23": "4MqzQVWsZnHpSxK1fw8pNGpvcFFQkWSnqKEWgEdpHBwn2KPSBobpEJnWcNmffSGiTMFXuiLYhUPNGMJVUNHzPrmw",
  "key24": "3xAtEuFvcV1YYz9AMERWqvNXxGvRpCHgsUR9BZaLqNVfwevVBq92SpnQzfzUYhSWLcuJMH8J27g6b4s1zRSnenzB",
  "key25": "JTkfF6nUSCD9LwnGNcvF4tzxMZvp4fKux89ePpn3aqcng3UdH6rerEYL6mzMdDmdYL63QCmT8EL51isErKFdpWS",
  "key26": "5QMU2CpsTeGbQW2CdssLSt9NbnTAi5vmfSoMk7ptMYvcsbUXma47g5riyyqAUQfVsKwjXSM6SWt6EwZy3TKcQeza",
  "key27": "5Fmd49w5rKTjUVBZKXLR4Cden7ER4CAXCin369SqX529HKhxJasfGNgfmwMB2zfygtjtDdyrK2SYD8RhDBF4k5Gg",
  "key28": "587KodMCV2Z7pGW7YERZZBdEmAAyUNEbjYxkKtMMQAZqZYPbvNPbNfBc72pizXqHVZ1QixpSSvHJzwvqjvJLFCWu",
  "key29": "4z4RcrrqMQkhNqSJ22919wKzg4Gw4R2jugWFzpvPyTgf14HfXMDww37ZKvVH43SV5knKSiLUA1f8Vfp8SDSi2jSu",
  "key30": "5kGAGQWLbN8nSKwrbAN9vDjgLpXhWtojefchhH5VLHBSuSL4BpfzvwCyAdTySgGBVoRVZqZrGcDc65PiMQBKYh6X",
  "key31": "4Gbw5caarwNGExs2fFUWKBu4yhj6zK64BPEoVuK3zn9aaA5YHYDWw3MyoavyYcSuPPooKXYzv5mKyNNLpJuvdr68",
  "key32": "2uJtso66mroKoiHWCrxCpxJs9XxuTi5oToNCbvqa2Mkyicj9M77zWX7LwmfPALwSuCBES4s8F1rU9btiHz8Bxpr1",
  "key33": "3UL8bByW9DnxGwuFFSdoKT4ibuUraRuYLgRG7t3BNRVvJttTxZiAVhy3pUeyZAWWyHCaw7B25KquMqJj8ejkGMET",
  "key34": "5r37xnqJVe8fyD8zroHciUYTqTAF6YmNoZEoPVhCRVvh3m2FoP1ZGVb4rStdr7nTyZVgbBjbQTXouL4iAnPqVsnv",
  "key35": "3iCScbNUDwxde9BnazXMzUSBYmSGDkuNunwwd9egX1PqMG2FLFNAQvxjmG1bkA6VigCk8T4e93q7ZxczBZNhTgoU"
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
