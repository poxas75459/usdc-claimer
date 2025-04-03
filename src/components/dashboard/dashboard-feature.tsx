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
    "3ZPKXd9U5dHyFgjWuQDGhBqeyKByamVpjY9S22KLyGbmenCf1mjwQqsEpPBJDcKS3s9sxD5wymKkdXg9YUPQAmmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bD2BAL9iMypxSXW2PcJvsno6asj6jqCb3xy7eQbfxw6MVenVKFtWjVcRCLSaE92yb5HmHSTDwUY6D2GjMCyDwbF",
  "key1": "5UNsnnNVos5dtjkyCwkf9Kv5k6mQjzq5jafxhhqHwDiGT8tLv5Gzc8nRaRwhRGemy2jejzpQj6KUGargskQL9id8",
  "key2": "YzUzavnQUrBMVwbmWSRGJhf58XzqKQQzs9ZAtpKAWwRAidzedspzAWwLySFVHo5aEcdDnFpPCQJZDqwNgRphcR4",
  "key3": "2J96heSAYuh3RM9Eu6h2WzM9VyWZRtem4pge9yMrBpXoezAPYfcGpyA9a143z23rSkH9vqmcDmje2P2KUTuRx7Rb",
  "key4": "2Ur2qxsBVwcXhCWtN8weLByYUNSUYu7mAdt2byHShTM9t6rZ2KM2dYxGmScCZj6rFkACG7Us8rW3yHhPzwi8SX6h",
  "key5": "5Ue38vweVf2LWCUqJa9LxKSphx3n38RbXGuNVxkBe7X9rq7BGnBHX5cM7Fz1B2M4NMgr2Er5NvMZmzZWjiohYMAM",
  "key6": "vtN6BUfe8BBBVq7qRZPo3FHgYtet3q9vRKY6Y5wtzgJwvLXm3YEuhuLJxmgi63VvWR6Takfj91qskWG65J9bjnc",
  "key7": "2dyf16aw4gmHTTpVcLR2R8MsYiB9XpUEKpAj9vr2Ne1ubPNHqunwW37Bt8g68AUbDeH9g9K7dutxd6rNFBGHZ2JZ",
  "key8": "3kTo32FseX9JWLBbXt7ZHo13tMdeDzMZGs2n474BTMUg7nzxPpyE2pEswd2f2ePokwAKGeAEKKg6C3sPFhNzjLG9",
  "key9": "Kxm3UH7fqsBAmFTu3cpEFML45P9mnm5fQGun9nuLS9fc7dVvULCg3Xe8hQUHztCSLB52RnHEJG91fG6gmw1UuGg",
  "key10": "GKwp8bdqRA7ZytzPP55vz1x7ksAimg54mBnmJs1yKa36NKnPs24C1Dik1qJjqJyhE5mmLZbEyDEP6ULLc9yL72L",
  "key11": "2JEDwMeWJwFahiBYYat7Fxy7VbkSn4hZKr536kFLDg9Uq3sp7dpsMAYrkGaZj2aZesRyVxLGCPowTWqGzBdGnEbc",
  "key12": "2gUpSkn1DuVTSNPafAcB2N8REF79tp65vMTb8yMDPvbqEEWrC633iHvW8YNB196EQMr9SF67ReVFpRsiPF64jGqG",
  "key13": "52immK7WDkBA6vYCQREQ6F6HpXizRoxu2GPgaowQ3aZN3gUdijyyACwapzj4E2aBGVSCfHMALtQ6UJbhhD4rDgE3",
  "key14": "4vuUW2WnNBunfdseoveNQR5cJko6NQGCdYfps65UCTKBb3CLsB4PAXf9fhZzNWazE6Nd4Jn5eF8QCK9HDhoQYhs8",
  "key15": "2pWoyxTcmGJQQMjg3NrYfQGW4m7u5ZMZMGmXNsXFkWxfzqUAFim2biGfZqVg1Rv4JNnhwV6x5iBe7KPdL2tZJiBJ",
  "key16": "9rMrMRZKFxpAMgDiXUCDyvMnzgpLZJLVzBMfZ6Gb1e71K3XHLJtaCz1t3kH1j3oXdiyn7RjFoAkoJstg9GgMqjV",
  "key17": "2cp2hUJKrVGmgXACcuafugAtKyiomgw1HG6eeuu6Ybvx73om6if7Epm9bJMe34aRYZWw16pm9WukGez5ktRToLMJ",
  "key18": "5RfhZQxv8AN1f1yLPcdUHDnhXNVvwAJUWie87KCM3Yi61b56Qz7CtE9MkQ4FApKhEzzPgd82sXdtm2Crwgcyz7ST",
  "key19": "AMbqktnDUDUqLUm3MYLRcxEetKy4kKvCZ1uwynQQAHn5GTPLvRo713JVeVHHeeaXK8hvvwMebC4zQieDBTeaxib",
  "key20": "29pwuooxyN3WPQtqP7BhG4egUFEASVJhdJ9DaDFyW3UWAnpy13wqACq21KpTFpBArZf9nmWF5YqtogpyYfaNUPiy",
  "key21": "5DRwn2H3c6iwTaw3rRNZ9JGmBqgMmmkb6aWxsmUjAts5qKNtNZsGgrgroewEdZEo2GJWAucfipfKPLnDULsPKF1R",
  "key22": "3Mtosr96wT8MGr1cK8xAampvWvnFing616H4XXeQgCxoNvUkG6kcmeruxzhfYGYQPZGdeDohsATRs5HLu8YHWuLA",
  "key23": "3nLTJrkotEzjYBWdCXV2mDyJjzCdvdMWDKPQkGs9YfxRnnBoQdxEfn4iJQpGY3v4qGb1VMv1VG8Y7uzXxVwd9SRh",
  "key24": "4HCL8d1BDL6V5NFVPsqZWkBE7HCdYL7mu72hHdGrXJTqCSWXTBqRDvke6L7xn2TcwkiUYKispkvJKZofpYd1Wgz3",
  "key25": "dxpq5BbfBa7SURm9anncWKPiBUGn1u2VYxpttxC9Mii9zH7j8cosacMjz8Zx5wdhMfZ9kWQYB3f54hCNjvX3Egm",
  "key26": "Myub1H3UVuJnbuWkPXKagj14KThqnSUzBdVseCgSDgadtUo7oLynCUdeF3Jyx9mw9rRPyaozYutHHT2BWiJXunH",
  "key27": "4qg49biKsdT7wDbNDvyXXGASBHyCHW7UcDUte2hfLtWs5tZmXc1QqBacwALurqnML7SHw7Bp6xY9fvawQPJwWNhv",
  "key28": "LwaTEnVeGD5E4kzyBasXDgRDJsqjxiXiF7aLEF4F3vGwu17GtEedZp1pFqVB6BnQDGQavvZ7ZGUe9dJ7E2gJYmJ",
  "key29": "52umGxoJWxPxxPADkLzYv8hFXDjSBWQGDPjkufromuqrFdDjSuCCVPnFh9x53SQCmCWVkEA6o2gGrzYsx1mvUaxG",
  "key30": "4Vo8JHc16nd5fZ8NEqQ8kezu7NoKW2jpGsqgTLmB2TA1Xa5cbkyCQ8q8GKQPngSbuSDtcTyzXjN6zQ7KVZQTM5sq",
  "key31": "4kFJPW8VfmpYAUK4ET1Abj2z9tkawQFrfgrUTnPXibmHLGyQQCYLZb2aq47RGYDuQVNozWMmjSpiGfEaETHoCmbo",
  "key32": "4eBBaPdR3ziHxt9MH32NfmbDpoNzj58xffdA37FpPUcGfqhwpBroRywddgTXSKfM8V7kmeJK6s4PwifsWhUxq1a5",
  "key33": "5aGodzuLZG3zyPfr91Eg4PMFqyFpyLLcauj5yDM8CNQyEzKmPLa9TMk7hAsNU7iPLuVx94TeXKeZ9SP2mZXy7oUS",
  "key34": "4pFs2YofEa3NmB9BV6w4TM4fajBfmL84oHkxUvn5xF5Lutjudynd7SLz61uSdWpQ1yRPEGxmhYop1rzdFTRbYHt5",
  "key35": "2Z3ywEZHjbrRfyHqB7qMb4xQjYcH4sFoBEvsEtyBiAS3yugPaTDzyP9ig2sgFmMAHznYnXELTQnrm6WYQNfXrAvT",
  "key36": "25LaMpvVFgjV2f8QXf16evWcpaTdiSGiXLKQQ69hW9opMaCUpsiV8mAevw9q3yfgNG9ULJTRurDHpv1otTiMnjTE",
  "key37": "3cM52AKQ1Ek4vRu4VoDKr9xGNXWtb6C3ipmdgVhJzyxfsop1a2Raxj8YELbggC1BnXHhNT1S8e8Vt4BLFAkZgrCW",
  "key38": "5re6RmobMtoBEHnBtuSCttejUedHYy8CrFMrmKT9qzkS9Dwgx5uVj64t8RsZEnKe4qAgq6NXck1bL9um19GBjDi7"
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
