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
    "2WLyU7371BTpe66uCNj2hSJDPg5tvEkUtCgh1HrPEjofwGmttBP7BiEWJPQd2Y1TuSLiCMGtFTRSAhZFaynfJgSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Siszr6tj5tqMvVmyY2MN2mwCGextDTPxcNpWuQpozp6aJ7uj7XzwAP5o5HCusGyMrihT4VdAcKtXcaMS8YfFfFo",
  "key1": "3ZrUHDe1DgH52B62aD1jbyE86QUmUz3Wq16ATsrECcbVHikyehZwhnq2P8eMa9Dtm6iZmw7L4RPiQaWCmEcJxKvf",
  "key2": "54t7vzgruL7gfWJLeaV4UFxvRqbQ8gErje5dhyLuRP5pcYhrjLZtVa8V8z7orWBwwqfqSGSGwx4PXUAQGKVUBisD",
  "key3": "2WN35E9aToK8R6GavmAaUHAqv8qwcLVLFzmmxJeKRGGpVTL5cwQWYsTrSxxsyiqnt5i54wKdSnLVAkh3J3MUmgyM",
  "key4": "4dBiqcr7SXa4KaL4mhZuvrrvejT5u7kXjdv3GsFc9LDoNeVymdzg8WvWRHyBZ9gaRomrxSp1arpvLH2ci9iHQ9x1",
  "key5": "3Upm8JSGchVCv6QWa2tHtLnwLmGLBrah4MPy6JvLFiYhgX2PTtPGUghBP3agxQsPo7PtLpTQMpFBAWFoCuQSDkHw",
  "key6": "5Ztk9TnpFT2RUou322stfGN8jfgF7rJevV4fR9dWoS1jMMHNVaagixUzJ3bYdxaBCCYj5p3vK2TVPRRETsQdRVki",
  "key7": "2QhLdSbL4KchzD4BWsG6ZTRweQ4ihafYxEj3ShoziYNN1uzueYXKhv5mhP3ajZXv3tDp5DtzaACKwkySriA7oXK",
  "key8": "4iZBbsbZG5D95qXt6DomQf2xYYZAfLLWztcF2dDLDzZ5HLim1toBT5hgbKuPAA8QwqbbNmNyyya987WBXcann2PH",
  "key9": "36UAtrHXFvsYjbsfjXhRfX28CG3k9ugce5529YTxQX3qYpTLBHTrqseCbrJqjKaJbr8s9cExGMasGLzMsSTBjaAV",
  "key10": "31TAdBbqREkQRZYDtMC2zHQ2r7auzwWKYeY7JgePzvKeYWodVJTmp2rDyh1VGho5qQfi8UDpywhWU1HX74PixU8B",
  "key11": "2iM3Uo2bYjneebeZknatEexQfgVas1b9dNmDE7S9rA92JmXLjJ3ZeTrWhY5BaQG6rPmLFHjhZVH3v7hPJ6eQnHam",
  "key12": "5tNghj9aCeSTuv4s9THy9q2NjT8kADfP3EqYubkEC5KpCPh2aVeoqbATXZu2tF18Jvfg29wFpNtmjpGdgfpGtBKT",
  "key13": "WL3QJQc3QychEeT1ekq3XoFv1CNaQS6UAbrPdvSWQSbUmWYQmPfpxgcxw9mbb1CPwLLakrdw9CMwJPqsV3giSTa",
  "key14": "9C5JP9SR3n2W8oEcEFwJSy3x1z8qzc1hdv2TmLtAPWEs4AZn9xMPDVjkDsqyXKhqcHzM7KVLDjtpwbvAGpgzFrH",
  "key15": "3LsZXmghrp47iMSvwWxsLLpN1SLtRZDPNyvrRrKNYwhMnNpzHN2BAkGwNLEReuGBRnFybSqfjX9StA3RS2tubFec",
  "key16": "azKjoW29c9VVD72KfntRiuw69sK1JFNWd8FfCyH2Gk6P2qD4oEcrFwz7WM5Km7pMvhmrArS9PPJD1r7T7o6dYJK",
  "key17": "466dA73CK8nGfNWFW55tGpd9VmP63f88CrRq9yQx5JZ5Cv5TT2t9KLGyUn7aX8xw1tyd4ZCovY1oUZpqEnvA1dM",
  "key18": "2aSctbax6cPtAhz3YXJ59EwSYuHpd4WLfRX9fKg8ibpJAEwnuR1ViQiGbX2sctLfdCKDpvZihc45roSD1q5hUCFy",
  "key19": "2YGnfNikkZanG4qX3F5zwmy2QMLpX16XDj7n79vD2iuudPryezFzUtBvewSgW2oURq8Ss6tnz8J7Q34Dng4yHGfi",
  "key20": "3AZsVWJZ2y7ZAQgYqi471zsyLuHokKTSGcHzjC3TLpTDkgHMeLSSSnaK4v1r6scKYCBKoALEVU8gxv9dtyYn2Zyr",
  "key21": "2NtQXDRAFzkcSQ1iDrYdUMNRnS2oUtVNci4rXVoEeqWninjKvWVE7i97PYhrjE6o2VHfxzsgvmjpnDWJWnNwid8T",
  "key22": "3nGwtwTBdCusDA4GWjwfd9QMYHR85ep4HyTiSMXgoffAyz7Ahxud7dsKMp2tpSnshhrQwmBChtMRc5vwTTBngee",
  "key23": "4rs89rJaW5xu1kdJ1e1ZS6svtrKf5XFTwR8Uqx2fezf57gSmKgNS1AL9BNhLBEBj6ZddRmrTxRTzykcFRoLxc5rR",
  "key24": "B89vrhTcNhn64AtEd2BnTg72WKjjLQULmE1iExMPqq3Sv1NefUPPy2ADqbVU9DjNRrZvsDEH7BbWcRkXkH2Q2hE",
  "key25": "2U9hRN6aA6xcKc2D54T8HVYjSziJHrs1ovvzHyop7CcobiZ4F1QrTpowEWAYV9bngDTx9dbDUZxR9pmKJQVMvqEd",
  "key26": "3f8gMRSb5qASVDnJpavBLDivxQaRoosW7bK998Fn8i2xFy2jhpXeNognmEUNQ7i8YzVGJcZk5eJvyorwpzkAJPgQ",
  "key27": "5UhqqKbFQwNgkmtwVwG1X2LwhwaNQMetG66mSjWHMJCW2JWpB4WzL5dvxoisQ5rw4ZakFQskaEVzKsb528nsWZy9"
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
