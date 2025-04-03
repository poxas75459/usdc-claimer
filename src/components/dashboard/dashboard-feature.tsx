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
    "5KPPReBsJqGsyo6Wb7py3sbrWXmCcrpssekrfGGLobxpdTUYL3M4bt5owQVmYgWG9PP7DapCoQFJkpDpkF5uovLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jDuvc3QJdXgKeSWjUg8KGQb4ZJWyf9RPBpHovrYqsLxoHVXvPFu24uVpgzsL4oXz4zzMNxgFaUJCjbvYZz3YYH",
  "key1": "GQTao1xYu3PwvcqCg5qXnJ3HxyfiSqgpsQvbz8D6K8qH7jwWiGKbuNQhJ9ZV6opUq1R2XvXsGsZmpTQdEeKJYZb",
  "key2": "5MQYnLRMryrL4fpTRez3Ec2umENsx51d7kkxq2T6QDyJdwyReCJ2oSrXgmQ9gdMa1AGpimkjKxkMkoL2d4VvetLJ",
  "key3": "3eQLWuhjVYibUP4LzPGCC4Xcqnw6LV9tCrmQrTna9aVBBFpfgz1UgJigguFPTMHCVaXfoijoKPVPxrVaWm6DJcJx",
  "key4": "5Dcnuid2vaFvabuDTR5AYLZKLQfP3N66kq6jodUrkgsQKagexoaPHFNmW2uwPnei7M4vBeajKrzxnUdH4BbQ3E6W",
  "key5": "31pJENqiPrnEv2wLJx3GZ1UsrLfsfYuc2CP9Xce8eBnsGW8XUgCMv45pFBugK1p1D8i4S3b94s2FqzVZWEeC1zDC",
  "key6": "3c75nFLoXHCXJn8dfhA6Yic2fiuhCmUX7QHt4AVs9BeGG8vbUAFa6ERJhBzkND4kh7C5e7NVRsm6w2Q2sT5Af26s",
  "key7": "3x3SjufLTddrdUtFPc3bdXvBmX3pwdfrdCmGzwM4V1eaQPchetEZizVq8rxMkppNE7ZN3qD6Pj7HAgLYZHxJu3CZ",
  "key8": "4ETgPtWCSQStyvRz4dEjR2MYMo3XJzHFt7xonJRB33ZxpFTnptrAAqsJ58oxjmHu1ENadDD2Tw4hiPzMyDAwKqW9",
  "key9": "yK9gmDqeQwe3x1S7Kfq23g78dAjruZxnsCPAoe7cD5oyCxeqjCpJMc7GX19S6tRz4MwEZEzcaTRb7MuDymfpx9A",
  "key10": "mHJTTGqYUMThHHYDLT666A5HpRP5ybYAW2LsMhF7ir3RNYP7qVQxByRwMSXPrifm4613Xz1sHYPvjbdqdCmS6bC",
  "key11": "6f6k53WJDEYJbHE3Je7ffyUDftAMhwYmbtwgWa7JXpTDbdYCEVJwF65y4Kh1VqiqCkjL7NgqNzAKY7PPth8aJ21",
  "key12": "5VSuBcF1Dw55nzZaDu7yXECwWn33UAYHPvyy4wQhUyuMa5sSNiFX78R1qv2k5CuihScRWPpPLEmDyUPckcC9H5Xc",
  "key13": "4k9yKzpGu9K4MT7toU3jAhe7K7gJLpcZjWPUDPoMBGCRPaRUhw6FujUVgE5hXE4ob4HHrDvEcMRqSCQ6rKFCJ5wt",
  "key14": "5LuKm5R4xUiCCpnfRue6HRDoBMzvCd84hEiw2TadTA4TYSVgCiT3UfzBWaTfGtXL3JcTNhSZuToBttNpDfzsLWYs",
  "key15": "4cW5heYzKSTTMbbVBj9D4LcgQRPYcQSLXPjaHz4gzZWXjdHUEqPVHHfuCwNs1nrUUnrU3DQTC9GGXyUUxuujQiVW",
  "key16": "4U22RbN3AvgJHLS9d5ZrNcpvY6weUk76cXoyuSvd2KGmMhi9orep4dAuLe177xixBPG4VH6PdJV5Bgwb94GkndvG",
  "key17": "4qixytypaT4w1rDTCayXMF7386RUoeHSaGnp1g3Lr1yqD1ZQhKf87hFD1UAaByRi5WedKwjy1gJ6hLk5gGZL5e1T",
  "key18": "63beWVDz3KEG1pxeXitWJEq7CJyFJZDK6ypSGfkfT5kRVf8hS3iFHJV8mJKtNDByGCkZAS3fxiQJvLDSqDnmRWXB",
  "key19": "5mpSkUK2HzwmnT58zYPhzpmgjKPLEbgpkwjeE9qsofort87u2Yk68sWz6Un3Chjpo5HGZtZiPjwGB6R1s88baews",
  "key20": "3Vmk92CGZZ98h1ErvWUNLfoddLD8EDPQCH8uDRocc7mhvJHyDfbXVq2iEwrQfM9RcJy2ZVJNHAeHJAEkPiwAGEm3",
  "key21": "2CBdPFmis6ebLCurXe82uTJpNzp3XMmEg3wgyNTBMX6XLUxkuK89gx5bGnfXUAxpWYnd5LytrS3jz9fyUuiZdfY9",
  "key22": "2JkdNbHivM8W9ZaxH6bX5Aqag27cJwx834uYRc2WAiQTa1iJyGb3T1SteATGZ2cztii1bQTt5mbE8Gsz4tZhCNi1",
  "key23": "226Q3XNHnSb4kZ3vMCbiCNCiZCbUxVx9Ei15Rq6ESyhGuQ3KkN3BXAEHk1Djev9EfwjRb3gQh1YtvjV5NXx8zGoi",
  "key24": "4i9bTc3QYHHhG7Muxnwr1gzN1JojRbyRFnwGkLQVUxkJfqsVfaiPChgPHnbxWhN4YVvqMmkyUrqV4F4TPG78s1tk",
  "key25": "3hP3m57xfugFAx8DMEfScUrr3vjjaqNmtnKhz8owbPAVKNEc3Qm7dtWxJBTQhCC2GNRN9FwNcvsp4H9QMxyTgJa7",
  "key26": "56FMSytYkF8AXQ19DhUTMsrFkPxxZ9M7FbremYKJzrbi1q6KMRXQVnbwkuFnv6XDfwjyVaCYqBFe27Q9y5qZT3Bj",
  "key27": "35kj2NxA63ci68jf8xrijvQNRuHZkAtdvAwsCQ87zuzA37qCLpyvWmSmA5Ux3nrNvuxERGfoG3RDAJLE3dthqiEg",
  "key28": "54YTFq9Nz9FpvZFHUnU5qpq4WV1ReWybz4i1Ux1E6nmHkq8hGHi3Mtvq2v5W3C9r5LDK1p9wnXxMgNmKufR3GZFN",
  "key29": "3rN9FjdGkJLkEM14NPUiYzi8UnMvhDs4AUmzuFkTo6XedZ5CscGL6oDziThAdnp5gJYUwdxfbpRgNwjn7kkyECgL",
  "key30": "ksBJzjXoN59BTCRSrWAbWjJV18srSWxnhxqgRK42CoSB4MDiGGDBrrsxthZ1cQqGzmZWaJyVcYEF8GWpaScnGps",
  "key31": "5gmxStifW6AAingKn4uwG7St1enMXA2VrydCxmqTjq6CYkAGUfBm7GQkLuBQ7218zUduWfnchQAEX4uTkdq5h3ki",
  "key32": "3Qvf81NXXE3D5Tv6ASUotp8Bn1789miECnzDL4mjMfNTURdhoyPnGR7SEfVShErx2CtGcv2reEuUCDrRxp8sHUe8",
  "key33": "4PsrSrrMETcGDD3aAfWqLWnPVJM8BNXL5B1oCWUgcSDn2nzVpPnTGK3ZwW7eTRpx4Qaph4F1Cs7ZJNadomamDu4v",
  "key34": "42drQDckD6aWr461ZEv6fiW7FnaDGoMtMtEkxamxAwxEGXMnCf9XgAwPCTTCbMPHZBhgRjkoXprBE6f3gDe725oG",
  "key35": "Qm78jZb7pshCNkRszqi6vav1wG578mUwNTCMnypHtBjRwrCCe2KCDNAhc5F8FsK5DG4H1ZMbcdAooEU5mVdmx88",
  "key36": "23YSj2USBp2Uzf93aMNL3U8mrM16JHyUXSmMDshXbsC7YDhBPsfCoQWA3cJc988LAgfN8U4SbsVjMAbBWg7X6xpk",
  "key37": "5gahkCnwEp8iU5pQJ3GmYW8bm98MPSWvFeZfgTp298x5aPXakTUMmbG3fhDhSCjWfr7hgya49AwGwSvgE6XBJx4m",
  "key38": "4MA2ucrjnd6qP5mFMDgj94vtjtbRrK6H6VrpdYoroQK77eLunjFASGwGA7cTYun6pKxLs9fK64XdEDV1rKVEPKYP",
  "key39": "3FbyB1ALZ91iaXCYWX5fC4332PtaC3DL5GQKDskwxJMCNUDPJEMT7C888tF8FyKA9CyH5h2caPMsH2bCFbhhcFtF",
  "key40": "29nJx2yqv282acXpEVwZKU34AFRLocfdQRPeoAPFLzcCyduUg8fqKdB8KuYqXNG9rJfYXHKj7WK6MxiKPAj6MbNF",
  "key41": "4crNgzFdRQi8FDxSHU4d7nSXyGVoBMic6E5SXUCx8vb992hyKTkBwkB4QDE2PuuMcv1djJeqVcrRQL1BrUGyW3G3"
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
