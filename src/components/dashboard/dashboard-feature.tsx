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
    "4jXZ4SDtEXY5NiUmbfwS5XiVMHG1WjR1LaVWHSxCkc2SV3s51asQrDnuqpWvSDoQ4eCtoCN9ywxVWtF53yx6spCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63S7uksCp6swRuJWFv7i9BmNCtTFz3fxg4bdwKcwLhun93KsdL1xdNQiPH3N9jW4VHd5g2QuH6JZdCyakrzrxPxd",
  "key1": "3ccsLoKYiwp6uR3g16mtGL2toqf4ojCZPovrbRkTUzBVzQFpRqVu8ea1D8w6j7cBEEeJS7PfSVKecw32ozmv7at6",
  "key2": "3buZxhgFRFqth4cDuYmYYTuz7swDum4eQKzABihfN3DostfBaHMpzy5CchCb9kBWeufYZMRifz37CpYScoKE81tf",
  "key3": "27deYz2mxEo1G165HTUffzfbv3XBCire2TojKRWr4fWDJN6dHpjxriGU1SSh5xnMU3BtEhd5yAZvv7D4jWdCx2YW",
  "key4": "4hwp5DS2CJQpgBhMfyajH9jwFK6ty7rpFWjNpLSHoiP3x1D6fagBMe3LC1eEguNShAb287FfXDYT5gkLAR94S3rf",
  "key5": "4WfzGzUusKrnYiFPoxAxDyS2FErnUXKADwr5jqtdgpzxQ1p8dX8LgSu99XSE73j8gXGyXLRLrNpzitBZ81rmqLuv",
  "key6": "457wFfXboFHDFzVe3qQnhmh1py6AtQdnhQRBd6SnfKXBXuaKRcDikQBgMEQmpNtMQqRm9SaT3D6CPYdE7BbJobV6",
  "key7": "hFVPC7Anihy2xzawfGCyGKgMD5BGaG7v9nzRtB757cZmMx4yfNW4YjHa5HfCkQkfK8kzoYY9Y5Up8yF2XnTuP4x",
  "key8": "3pdgPZBFDkkVYtQAf58Sz1ThMPmmp16ZjivcCHy3MRSVj2zaSBBoGuMUnpUsoXw1iEXUroYDLksPeBRko1NihePk",
  "key9": "5mM77qEbz2fBHY9EBHfr6KMxiRRrVTHpvH2cKfEmVQjmCaEs5PbXi6W2k4PRDNsYcbeaWrWiFfnUz3jZdXzAmpYM",
  "key10": "3iEyRsdmVyicCjHDLQA4vMHNmh2Q3mYdrB92q3aTCXshfBeGkyXeDNedwJDy4vQCuy5BZuXcSiMiDRAa3DYb3PA6",
  "key11": "5YfwqwZ1VUELL1ZNuFQcPE8iw9ju374Rmk5caZDXSLendSb6p7USFcT43mmqKfWNcPoaxqwP1vXfVrMPo5DfVqKk",
  "key12": "2MmzLDGhzksGhJPSE5rGdNPBEYaWYAzmDg1GdZJzAKHuZETx1Q5tjHPN9kWM6sLKXE7Pwt1tsSfj2BG2Ct9oJnY5",
  "key13": "62xxkNt8mMpFXvvcmNfpgn1wrLcUZFhmBjoiU4TcAKwiBCVMJusUzdqbAo8TXm9zZMGv6oywZC63gRwU2kHe8v3S",
  "key14": "7DUF73L15HyVHwUawmPgRRojSECvRonuAPLYhvVZ2AbxctxmLC8Sfxqh3kg1TbijH4c4v1HQoMvtmA9DjDqbAML",
  "key15": "25vkFdPKwjzYrKdPRtDPf7jV3WFWS5cJmQMHD8F72qcU13ZSa3EW9HYN1ntErHWdpoazjnPV3Tz6zpa8Fqr3X9cA",
  "key16": "453sEEJLvWRdNZHu7GuTvJtPhP8vTy85NTHUnox2NbTxm4zG7nszPhKRykdaCFAb5HPmkrMK3e5JjkZL35Yjo87x",
  "key17": "2bwBMnFX3HgCYjRbXbSSniLkCevGpmXpB5XER54Y2YdBnDBGPSKFY8Vr8n3G2oXvAj4M13Xvz2W3yyf641wRcJFi",
  "key18": "3BFT3bMCkTo8pevcU3yc1KmUzbZXr246kyQyZQBKinkhVpHRzPupTqUtzJPtjBmrXrPEbQYEH9hKZmixiozs8XFD",
  "key19": "5vK64CkVtXkfrrWRmCzgrLqVCbQMn13vQDgho2uaXwP9fKHSj2NnJcKdDnnXXXMq3KJjnYDKWouxzdVw1ucKNb95",
  "key20": "5hBhryEo4qoESGFRhiSv2fZZK6fePNj1kzNUkERTzfKdLFdSUsMYr8EGhvsY8r1mvYKcWMg3PMUV2wX1cSy876LM",
  "key21": "5dD76uPYaf2C5VSZzNLiBjfMbxCy13uCLsJMAisCB97ko3wYU7dmqckUoJjHsEeV7Dp1h6ZiDWy2iXcFkW25QPGg",
  "key22": "4AqUFNw9oGnS7VymcsSPLYXtFgoAEMTRLErkW16Bf3R8vbSLt4w4yG14BN4NnhgGtD1QyMEpwsEehB92mWAyBu2B",
  "key23": "3EDbu2yizWxvmTLXonEVxKj7hrTBsWjU6cvSEpxuk7xV6MxPjASzsafjannFo8Aaf5gGbpZYJ3GpnhAcjbgvq22A",
  "key24": "2mmrTiWyREv1gzKqXuCKiTA1MRwxvm67fqFTpgVsKb96dW1PAQAkBsiQ1JZ1BqoLq4xQNcAiEtjchi7MvJEzGRFp"
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
