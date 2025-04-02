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
    "3QBr2myuDRwLRmYw14kVWpB8JSPXXT14wWUunw26x8jXQm5htBgwJvz9WHW1LewJLoNPZb43PWJknNxXcDD7fqFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYnuug8FkBEx5oGD8xyVaFrK8T8gZ31AuKq1NZ8B3382sUgUgcKiXUj3FnL43dXTWe5X61B4r64kqWndCpeXc1Q",
  "key1": "4kEddvf3dfoRFzsEx6L2zc2dbF5Bi6JaKbbY81pMPqmF6x9ZZaFeS9XX87GyKPkcbGn29KeYmNhw7BU3xpUfFH8Q",
  "key2": "478zVQvuhZSpyRW7GuZne1s4J1TTQJz77WDQ5sosKDPAup9uavDJ3skNsdyQ9dZ4ccwQdooKYTSce6CkuDWNJ71v",
  "key3": "4QU6E6UobyHJFkPt5rMgjmXJeqyieEkc598vHg1LdT51qHQUFKqXjRhbJSfvV7HGB8rf3a9cW6ksLYeXTNJAFhky",
  "key4": "BPFvSkojDYC48BrhxWdm2epitPih3h6Bzt7fG55YSNop3d67bMiQMNF8mXzPSTN9f4UuoJFGnfDhcU9iK2ZcwM7",
  "key5": "5CFkEgHeLCV4YHKmX68EPGKmrGJmdcNdgzDanvhDX8kHDwM7j5kpVPPGgcha8Gsm8tNcyXPh8bjEAnYwtPfEPxJ5",
  "key6": "433UzB5Prxac268DBwGtmeoAbPbxGGA26brAAhmkWiiVj6hkLK3vyQWcSw1AE7dH83Bdpw6P4t5DsS6M9DNWaUdU",
  "key7": "2nfQD2mBp1vs7JvRWdvewf6ryQob8bA1iXQSjN1vvpQZhPFQpGNzADLTeeCfAK6hrw8Ske8x9WzCeFW2Br5BYNqF",
  "key8": "2NYBpnUMNteHYPCPx2c57q9eXoq7YHGQBheLuZh7b7T1AwbimpaZoqSfog7V3xNT2fjf8ydk5TWj5atRHSmqRsCW",
  "key9": "23xLKo9va4avqMWHBULqif97HqHEkAxe75qq4AtzzJGXrsGeB7izNGxfUbYChU5WmTDA1tJy8RZBVSyAcAC5CdVi",
  "key10": "3t78Gji1QwaNtMosgcRdKRyemWMRZDthgVkgs6rCDYokVXsWjfGQCLybcEVwsdh3M9NH8yLUJQmai62mDGQtN9wG",
  "key11": "4kcQaEKvjtqVyX5JQNatzgPHNbXMPHV7R49AyakNKCeAC8V3DKzqExgTgetYfnEG5dNra442rXdhYYbVMa1XX9XD",
  "key12": "3rWz11z3X5tickFbhwmLdpKWbkY8E9jrg25VkEdFM57iRXhrC4LhMvB3BqmnRwJu3WCL1dYCJVBqJ83CesJz4t4v",
  "key13": "kQ42P5HTMxh8yETRGKoJuN4yXFVMGJt8ujeSJEs6aEPa6PiiWv8ZRdKHaTV8p18Ywu5ivWPSaPqNC2PkeMXvLNw",
  "key14": "3ZoDQVcXrWJYLFu2WVPtZXyTU1VLgKNCkYQuwHZrApNMkmQYfMvB9DGcuH48Xr23UyCthBwhKyzmyhdjacEw1VzN",
  "key15": "5FzQ2iQE15K6fWXx42zpkaasJPMHQNmffFhCrbXSLM7EJmM4vfT41skmxTs8QwQ7B5fG2VTXK2orhZHx3xRnSB63",
  "key16": "2W7Dp8ZnQi5PCAShBK3V9yUFNjGoxK7kfcVBkiWK7s4Xu2xtgUhoxffHBvNqoycphNRD3CimwCnQH8FTA977RmEt",
  "key17": "2tLug1CuH7hpDYFz2xb5WQe2ttKGCZZVvxprmbAyTvBVhKv78BjMge9a7M5wiiHj1nJtN2NvdBze97ypf3zaXtQP",
  "key18": "2DdAFN3ZQGpMJcHLu2eXbSdogcmfmYhBXyazv5cuZVQKDqmPSWFXgerkTBDTcJMfwLAudycy34MyyZutFgACQ2Ju",
  "key19": "RFN2YTTJAUMoWAU3JmNvdUe5MntehJVnLrCEXx7Rucw2Gxz6HRT1WVqVgFwiKXG7TV1evpry53nUvSUa69o2cKQ",
  "key20": "3XZW2KPDb1KTj1RjPbtKyxdx85whyLTvcvZo8GoC5ZSMhzG5ZWSzoXCAmq4pJoLW7oocFkNzcxpTv8WQ3FXRSB6z",
  "key21": "2Vjj7VmHdvgBQrRBfCwgXKvnoQrJDgHaDoNS17idPizWmRNrXZGCvEzmxLRDKdZ886sAzZQWKKjT5n1bsL1jpaQ3",
  "key22": "41AoaNwercf1Jk73cdPLsnAcKZryBewqc1c9oTAh5C7nVPQxyFUerY81KSMRUuz77Q79ZNx55whUHfmShPPLwsfH",
  "key23": "6S4q3N9NhM7vdPBzUN1CsX233Nxma4SBKxXP1mvX8Z2r5m3cNzAv4C9ERSorWxJXoFvSqavPPowPgrJU6iZPa4S",
  "key24": "5KNSos156EZtWvwHTuHnXckbdNVAKzRiRMWTeUooorCMvDBuDejMDC1BJ2VbJKAmnRG2bczMww3qsNbJg6UctXQX",
  "key25": "5hGeUnnjQAdK5T4THWDwJNUMyy4gVgyCqziBZRQJzoLiw41nqZQqhUdBdeCdzhCoPqDxvTX4GyL5dLeMdXU8jGzL",
  "key26": "4Hk5gUZeoU8rUcDzjAiHrreLMh8m53KkxEGEvfBsQKfPcU1R1jZyb49V5D4ZYrSjQQYkoSNTEiCyZujNi6wUbeth",
  "key27": "2eMAG8NdhLGRscRz2itPEouYUJNzzBeMgzwm4CWs27A82UmikqVcWfLHaeN4bXxmRXGfcL15sD85tCLsfxTPP3zX",
  "key28": "3R6Tsw1A8J7wefVPjEvTEBHExZqHZmAJD2zm41xjYpcmTbPeUrNcgTwCbaW5PuMAMfjbnDLkU8GzStGm9rVQLRtP",
  "key29": "5a7cvMoDiw3ygajzeq8rsum8yCqEzH3F8a41i6m2eCdJrKDgkV72QKvwmAnH8t79MvDLwuYnsCwhxgogCwtjetwN",
  "key30": "2DwRvRog1WRzx1qkQgf9kiwaDoEaLPGSYTJEzna87UZ24zHqLAxKJZbSvjYDDWiYUpoHtbz6KekSWLpULx1Kfce8",
  "key31": "5nH69uLnRRNJ3DXdJWLVmSnHHoofcRhZuEghR3eqqLGnmbHF8dJ7DicPGnLFfJWEwWVgXzxUoryjF6BbwS8GPyce",
  "key32": "SwRQmuWEP9FnYXgUxJm4X4A5vjmTH9L3ow3UbeMCK7rGEM1SG55WJRhyDXi1t6HrmMRw44SB91iL4WhHhG9dDUW",
  "key33": "349tMJHvUEBeqksPe9DTvfD7mqoEvshDphK7enyc37g1HZQY55RxhpnLTVMzaj59p9vh3VPvsji6jXaSDN92wX8S",
  "key34": "YZdPAGQGZtPyu2Nbtp4oveA5yhCML3EBcfohsBXG62dXUHyPoKWujgAMy9QuYo6nJfGRbTJmjwhuFCF8pYTDneP",
  "key35": "jYKCk7MzU4ZSgSAXPsssF1s3FLaYsMpEKmtqA8TC59U2aPmqiCLBTHWxMnEUdrDpuSrkV55tKED8G14VSHmNsAZ",
  "key36": "5SkFgtwZ5FSi5FdCM9tmp3iSAhh9nWqKBY7Qv3mfbTpjutf8jMH5NgYZoK12qHWemNKgXJz6U5GTiLSbQxzyPAEF",
  "key37": "qTAc9H4vNrf37NpNFhKpU2EtMRaLe8cmSbW1225VdSVYJaTjPBG2iwCAPqJf4a8ucuPatCm27Gp3g6S9owPQeED",
  "key38": "Kfnqsv8fpbhHYFUUGmCVxD4EE5egZ6XQQJCm9vCsweau5X2ej5iF2HF85speLvFZDsSkbQVcnkpPe3s5FMiVoqY",
  "key39": "1STbtuxCymYBo8658ueBzguawMyoXvbJiLeuwuxe1juscP79Ucayd9qiAcGMCBUoo1w7W51gactRFxMsvR2NmjT",
  "key40": "7zwyyHdKKL2izMostjGyxvefPjw1k2snD7XoKmP9dFPrQAcNWSEYeLKSAJSKZ4WWm7rmZt9SNGHCF7ZkS6qnwTd",
  "key41": "wJSP2aWnSW5t9Tjxm8zpBqnaA6pBDH4kqm44Tfri9QXYPZnFHhHvk6pYBJR2wJrHSyaftVqHWoBUwaLfeLLUosp",
  "key42": "33NTpqSAXRRsqUVNH6kEUUjFHLmy8cuqi5HWg4S89UHoTn2M4sXqXpmkamfRg4AFt7Dr4Eu58BncxSpPQkqpYQqJ",
  "key43": "3LSwvAU4nwiGJS9U2EEprppf98hihM5qJb6KvvjFVZuU1AcvHDjXJ1Kx2HG2AZ2AwX7WLzpKywZz77BoDypAah5h",
  "key44": "3LBKL51LFz3Fnkorna8W6QsjCjjAMrqyf6VStoauvUMAenKcTysnSpmymdeYqLvKyMKPXmM1CJgCoV8ht9iDhdEJ"
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
