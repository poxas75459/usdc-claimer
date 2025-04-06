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
    "2HUwWwvVjBZKYqNgthzVcL8RmekRgu6MvToLqKGcssgCDtSKMrzbD5TQrShW1tsr7P27ojJc3mgKLT3VTEG2dxDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbrjf3PNBRk2ZUxVNq36TymgwFoCJzYaDB3tekkbXNeTjLNFivrLhXbmLQZva3yaLZEZiGdZDt3hkth5ZKugPG4",
  "key1": "3yWVwmgQ2gMs2EoSV2qNpMDsr1i5uVrEQQur3foGZ9HRsjVQB66EtZcJNZ1KJNxaMdXAMB7qEcBdXPXoeE7VR8ui",
  "key2": "DVTyCgNDE6Z8Yk5PvGu5xUgg89psZkbXzAo6P7uQ1E1xkd7En7BHKJCXbwYz6x9hRRyaURTtpcYHm7mEd4Tm4uT",
  "key3": "2jMjVdWbPiXBTCYe31EoigMDrB5Sj4YfT22ba4QnssWsCnqWg3RERYE1ai7trMBDnGKUULHfBRXsSkJXMQSn7nku",
  "key4": "4XYMjCUSGSuWf8QGjP5bZNT4SEN5tfpEtoAErEXSmFCKcSENZUeYBjHCE9JcKXLbcPfEB1PFDpABGN3rzLqMEjt",
  "key5": "26pCG3vhn7FnCSqGXgjuhzPZNjX666CyueEdEc7kGw5m1VEfUq9biTNknnmgtuFLYR7oem9nEGuuVPVBEVU9RGYy",
  "key6": "3YKQof5WxCLNBsEwFcmRgzMcA8nB1Eq7rA92YPbB8rkUUa4WQhnGcVYvyUucRkMoFwavfWctinQH7Kd3rXqsVbDo",
  "key7": "5jBaPEh3ochYb7JPmyXWCm8RbZcmecT48BGYkYPKgwCjbuJRxweb6cTTuwwvRFQezL1rUTvoZFv8RRuaqBDmCHAS",
  "key8": "9ksyvvQuqjdQWZJVkPVyFkcvPJvJPb922HspZ4LggQqCLtKXaYmr1g9evXMdT3FaQoUegMd8Fogyo18mJNvrgii",
  "key9": "4v8M9CjSK7K9v5Sn76KtYL7juKmLEWgdnKybBAoFLYni659pawTpjXEhfw1oywNJZNjg8KuxVodXqhAnfF39P924",
  "key10": "3KjtEx7iGH35QkgSs5kZ7XvidhLk7WpriJB9etzjGbXhTQyPRWQfpwJGQa6QJnGUamVzMdsoEcaR3UamHKwzitrY",
  "key11": "2aR8LERpgNyjNAPCEvMLu7Cibi4WKGmdFkNU9b7h7fzLWxs4oPEuAvG2LZCuQ6hFMRFzZbHtVtxrBNc52d9gSAiJ",
  "key12": "5GHrc5SDuAa5KFwUogXGpAbj3FiGXBYsBcV4nEzzsHm2zaMh9JqaYthE6hqwjLp8kfwny7HSsnwtHDftN4CsHNHe",
  "key13": "4vSwkLmXMenzpHvPtyh5oFkvEo9zCJ4NCGePWzserLBcwrC11fTqwvjeLtC55FdsbAjA5NEhFtzLBXJ6RwHkzFJX",
  "key14": "5Untz2HmMb3MfM73JdUEkfQheLdqZt6M2N79XHDaP5Aq3th19yB4Djb4kdvcxKzPXKcuqQi6uomv8VqLFTCrWyzh",
  "key15": "3qUXjeJYJvvkPjRFdqgmJxZe1U5P7Eu5w6mYW83Bp83wCf9Z61tbQNPZ86UoHFVCsZu5bocgkkwXpfcBHfk1vXcz",
  "key16": "3XGGXDzRtGpcwDzQrTamMP4Ju3ktvk7jGT9VhMDnvuVibgHtNGaQQgKbQF1oR3m2kSNZLDZvst7y8bwBESJ12D2u",
  "key17": "3sEmaYtu5rD49Q3iuyvBm9tpBczw64XQQaZRkVDgSVoZeGZfokp234VFJn6AfxMXCDt9M6ZvFgktSNMLneGTnDrp",
  "key18": "2H1zyEzLv1raTGhZnCet2qR17EtLqm8srdryyWWcGshbZw47SBnwTfRjpqqwnwd8yahrGdoU7S8UKravnYncXngE",
  "key19": "2VtmityAbqWLCWpH6HPc5VsteujgSVnxBRF8tEt6iG68tx3PCrmJ9Zw8f9w6Vi4hNN4AVkwdJsuaa54TQjk6zwyq",
  "key20": "5Z2a3StCXjfoUay1e9ozsY2CmA7SKGmDyDzqF3JFoxvDNnm3CMcD9GPA7pA8MgT2jXxvGM5WgPBeVHvphtDT8x7Y",
  "key21": "5z5Jx2YzMgAdDYhXftdRTLhF8zgZJWp4mScrW1ToZ2QU1HC7Sq9KcqF5zfqHrg1k3K3XUq9c6mmMdLLTVkKKPNa1",
  "key22": "2Ftv25STjT5FVLjbx42dDuMXkAhJRv4ygmUjNbrnFpqnivqAPKzDbBFdDw9mEmXGSm6q48bdPsVxN7GUVQP1JU5J",
  "key23": "67K8BahfQ3VCVYwaoAe5sngt3rp9XHwvdw3fBfLSN8o2v5Vfzqtx8FEV2tccWX2QvmXm31JAeuqxeGGhypDWnnxJ",
  "key24": "2VgcgfZh2NW8shagkLzLfq8d33ZHC29WMkYAhiH1AQ9iWxNjwUCxN9fnFW92SWmsfzSRqo7qSLsCvfmEgJUTEYkz",
  "key25": "2s78jfELRAevLHU6rPHTwLRXoytAyDc96KKw14R6hWNKxAEBMybF7Y1rAPRz5Y4uYddS7VPJ6AnoeRTJZL84niZs",
  "key26": "2UfMcUmLyHsJoigV94q21HwmU9diUFpsyrgZQPoCbTMywkcrN3baWSQYLc7KLvYfNe84TdQaa8DxKDDwHaV6rzgp",
  "key27": "5HikMZcTiS36n9sbyi6YGmyL2nPneqWWETwZwgyTtLBR4biygpcUyh5AYmc4L8pMi73uHJno5KCRDoRe6rEWEwLa",
  "key28": "27inccfWAf2WQoV4vvdm3Rz6mPvLG2JNLU55YJsf2PsgatbJ9iJeC3oTLvhxxCw3VcDvJhyz5wqh1HBM8XGQYtQA",
  "key29": "4MWEJ9RdAohnGaEbMrWAUHTYJpYFqMGdu3NvUjL1yhJ5v3r29WQBgXVgGeZ5rqukxpAikJU6GYHkHGHPv5kPPmto",
  "key30": "2Kes2BWnGDxq2P7YTzSurDyTtiZTeYFru82Yyd22VuCYF9gL5WqJ7MBiqCQTLJ1XrDQ2Kk8EFudNMprB9Ro3iPqj",
  "key31": "2M5v3oSM4MrF1sddZyTHvVDEX15CMjVXrnyg6rH9uWV7mqSE6mWFKm5iCu45hV7xXur5V65bdArPM8pUZghXxNG9",
  "key32": "4iFbpnPVBrNgqSMviB9Pqg2RFU57MQwmfUJuTNvhouJy4GZjacD9QG55ayuuZbPhvsQeYKSzFBEH2621Lq2n5vnw",
  "key33": "2mdmzXNRnHxLCWVLmsbekmbSMdjxJpgXuRuHQowv3DA3JYJegYqFBftTGkokCYkYn2edEk9HNnHaLCTMCf7KveR5"
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
