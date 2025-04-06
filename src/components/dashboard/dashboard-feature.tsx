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
    "51YrT6vRwXQdrkrKDCb5B3mGqZm57H4xu28rkasX4WDevjFA79dGNby1rLJ8TRPRTE1sHNWS43KooChYQhMm1Qtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsaTsV3PnUwiT7diAMDfvE58jdkrRLMYoZUbojWG7nZjpJtRamT9wz5erGsXm7C6hw9cCHxQQ3sDmyeoHkR6pam",
  "key1": "5oWGwzVeNJt5cL4qn3UVjeiA8mJuAzLRiW51N7QDq4g3RtJ2xXpDsrYwtwUjnLYeWs2fwo2TdPLRf9aksDB3p2g2",
  "key2": "LejFFNhnW8uSuY7xBbFN95b4Stm7h3vWRZB7ZtrfdAV9hpL89qRqMHKbQANE56zCTj4GDeB2hAquSjJWjWVE2Zn",
  "key3": "3sMUugvsBipfXpXRjp65EUQCTe9iCyXXsid6U5n7bCQShvvexfzoThjvAmBy2Uu7kqa7QJWcpDZRjLsruxSDbQE6",
  "key4": "4TAHymnGfmw9eCeA5pLe4twBcsYx8DMd36HKUTaxHHy3AAyRTu5n5RnocNYpbsSyTM9igRQZsEpbhmp8rz2JTd83",
  "key5": "5JrwzQMdvnszo27W7Ky8B7mJ3rrM9hzvZTV5pqouvTsmxYwVGic5Y2ByYMbVjE3r2XaPFBevzDy81WEJH1p6REro",
  "key6": "3CTmD6Rnwk6vyx9kKBkxCVTpxhjh6DWP82oondcxpQcDE8HC7wVt4HC9gKoyy8TXMfLGsV7FMSjJF9u6UdCvLNz",
  "key7": "BsbJjDJheXxjcoLmTqPBmkCi4wrT9QLXdXsrkSjd4gNN8hULYBRmi8NxhSchMcPHu7nSwUTkXBtACBUG8GQQ8qi",
  "key8": "4V14snaQCnpMVVKawMNT2oVNQv49otNBCHRYoxnRGzHnfp2biaAmJHGmtyzEjCRbiVVNFtam7zfJrLDe2M5823W7",
  "key9": "4K8ENzGwMLosi86fhG9yMpnG54JzfkM6VfeLKNytnva7g6BKEroBFC1WSf4MnJ7XN8QZqqMjZskNTpSBwPiZTNDH",
  "key10": "5Ypp89aUNCks32LmjyvZw9SVVxGoPWWxSRhivYu8RzephoQTy1Re1UY3CbQ8kkfqGSURihjVp1b9P4cbXMkwwHFm",
  "key11": "3JduWPZP4cJbPEagGtpNZph4bz9kuaWCazRU5Cv8gp9M34LYnkSNf6U5zmedVWnPtzqzaBY2fDFeRSzzJqbCCKkG",
  "key12": "G9PznpoRb8Mw7JvUCTWjvxat3PFpvgPKbesXeZL3uiUQa3Ue7UbBxivtz1AL7FvcBC1oDdjKowoyZzak15fSAFa",
  "key13": "5MzcdVcXftVFJSQtsbQjan9iV2wrvJGdEsWqwCjgrx34goXiWcB5bbcR9eqW8Q2u53ACRJ931YTHzj79NKwzRsVJ",
  "key14": "2yeVrw3yTnx5arCcbCr1Uu3hbpijX1347vFkWRw4EfZMyc4Kdn4PrKPygw7noXuUa5h1cuewkyWUCuHF5fYANRCc",
  "key15": "46cMCGJfxxQYC1aVL293aRGK21WKoree8oyAkxNjdSEA3K2GWnRrwhTC57jU7WbMruroNSNpy5WuamrzpYEcnFDA",
  "key16": "4L8bD3W6uKAhhaF5ZZbAmjcn8dAErpQCGQuNFfqMj38LaMK7KCNvCghS62sQNH3yMV8aNwLhJNPaL1zXVTT3AiDN",
  "key17": "2zgvZDNm7JK5ui7V9mDAVXohrqSCPi5Sm5wxefYVUyVdsTFbxoWEPDCVqUaJyGtw86joMnzArPPCdXgJL8EbGXAK",
  "key18": "4E6QdxK1nFqyT6HcdGq1YVD2SqST3qdxQJaE5hZX1Vt6Pbt1UUoWZ8QCLQZ4YtN29tTtQChr3EymizTap4KiU3NW",
  "key19": "3c6Qe4iykg5swNSj51phUtY8LBZst9o7bTnXB9BN8rYUFFwh9fm13kWnGGPfRXEhcije1KGP9iR1KwANyMvWSbL",
  "key20": "5LJyGNo37JfU9uqR1rajcrA8EiqAXMqkGmbpzV8dzztypsXV91DmB3nhSmrKPUHog15y1kJAiq6t5Re1MST3g6f4",
  "key21": "HdBUmdioW4CYBLFWpR6mcCfM9PtMTKDsSiH8z2hSc9K3XW8z1MJtGdr5NyqxrboeaaKB8fsk8ErXzpZZZvHKsrN",
  "key22": "LyEpuQE1XebwtNvLmUBPvt7emcGi1Prc9mH8SjXzqdY1FjPTCEHHUXPU5Gj3ZxGJjJn4qKrDPziqmuN6odeCjgX",
  "key23": "4ngeevpsTpW2AskUL44MbuY35ngYH2TSP5rPa7UN4X3WYh75pzBYTdhL9268yR7hJobN8AFy8YbigqdDiMnLSBoX",
  "key24": "3TGeSgPFsFBUAoGXvUX9gXph1oGyLrwTjY9h6ckG8t4igMmkrTzbZuy381vnZ2d76mTykbRuPfy2Jp7aZhKLgstX",
  "key25": "3xmpSigEo2cyEgvaqMQsNyf9DywRSBjqXbNLfdiEhK4Pq3nATo5DkKfJzGfL4w4Bo9E6MGm4hor2J12h19XHRCQq",
  "key26": "2WPh9MTfvF9vd5nD9NPhfJShWffyxoStTLWT3Nv2VrTNiFKSFj9f6bV7HEUxvwv7Xj9CcELHDDtiLApw7oN8fyTu",
  "key27": "2KvkQtsMP2VFRSP1XWk8Ftoxfh4qjcDvuEQckUfYrsncudTSkAArNy5TvCyYRRAw6W4uQmDrHLZdiWWoKMBME3FS",
  "key28": "5L9MyL3Fg6WoGFPYVNt515UuLpjzy7nMPqHJf2c4TvkwUJakXhhL4orm2gSDuUvvNgSJUae5w5mXTyL9aRcajfgf",
  "key29": "2qpwaU8rJeev9GRn9P57cVNvHXjusobtJYJWKFF7equTVt7vCsoRtRX4oJYv8Qhpnh2hxSKMS36ufCmnpEtzRCoi",
  "key30": "F7RavdoJ6pCfdZTdLFa3FK2acggU4Tq11Le8gSiVXEB8wg1XfZGnvKurPqVnhA3vDo3gyurBEEBJUBYiobKMTEM",
  "key31": "3n7FLey1EUyHGziBucg3GG5gKtQ9Vggww7kNRFNiKgrcV1UYrVNf1sXCCezXwYTNTgiWJbknSH4SacgqyHbg1QgL",
  "key32": "T6KYKMYaE6KNfb5ZfsUCDU2z8fxhBSj8fgJqZyhMFkmCsRxhc3pAim5ixUsBPeYyESd9wvvaqwpCPEdV2bv7U7b",
  "key33": "4gytbt7RKiv3wMJKEwBR6cLhaHwYAPiMdi8x4KmUmfCLyiFqS8ydQkZaxphgCMtQwsDAAAoSen9jqNn9KhrkskvG",
  "key34": "8CRyr3PbFNdTb5bKYdzA2STSZyNrEheZTQEt3NcHVDCi1iYb9SL32c4wyAsqfHFPoNpx9TLhj3FgGFaUvc8konr",
  "key35": "5hqnyJMpitVPwnX8DYc1aS9Z5yC8akkgE7Hmo6hCYMnJwsBVnLTnywXswrhTzDZEd4wpp1EWYC5CSqZfXP4zEFLv",
  "key36": "3oDHD7D9JoNDkPzXoV3kkMias7VC1Yp4E7QWEa8fZtjMVaH7TfBv9tbmZbEZqJ7pCkNFBH3mZTZy31mvcDbdzmkE",
  "key37": "5Tx4DnUyVdWAQBD6g9dTpGwyw22dJ6z9snYPjmvqGhKAUq6Nrx4c518S2iUcga7mwJ6Hdo8dFitq3pfEkLBEJG4U"
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
