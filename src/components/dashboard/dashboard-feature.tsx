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
    "47MrMcgk3AQZ93srfYAiGqATr1rDypAwPZ3yHxg4xx16Nnd6RyS89VY4G67rBhg5ucnUb25cHC4Gt82Zsh5JRiMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2waepC156629nY12N9eqpT3ReJiAMddL2gJTJDkvDHZ9DwpZ5erAvZkDJ8xcAo55khs83Ywn1bZLv4pew6V5GEYN",
  "key1": "Wx25E4fFVEZibc5bxer2GRmWgiDVToiqQu4LyWptwnuFqmAFKD4fJ9hGMmfdKzV6UmNkKuRvsTP3iZ8TmxvqhS1",
  "key2": "26DAm5SXa5gJQpwjs8WRzsuyz2Ffo8Sy4djuhvk3tmyzJvfct2oPDomnpGNZxud6Ni6JVK68JNcqisQAvi4PMVTf",
  "key3": "2c1ouRtmQwhekmtMHbUptmPntJAphfW3FfsV68Y7PLbYu79jLDrDWBKUbRPYCTHWGP1uJGxT17HXg1t1W9PzBYo2",
  "key4": "GToxPuuSYULHQYqsfg8jTVXmamt48xuuy6gYFYFsmbaxkKxKnNvKVT6krm6PQwo3tPQEbCsH52GMAe2EP8Wtykm",
  "key5": "3qLqSxKtZrYzYEtzFH3yc6jbbJnYbU8LToaS7w9nHrBK2CwXEiWdV7GSCztnx2kd2Tea7n9G83euUgJvDQwRvrUc",
  "key6": "3DGj284rVRZmMxpex2pUj5eQd1aeq4fdGSFACotxy1Sitop8Gkrd7aBidUTSVnsiVybmP4poQWEtAg7QLCpootwB",
  "key7": "4VEHnKqvbDAxsdL4Hb2t1GXB7BazgbsfJKeyzaMZPLCoGaxEU2agqcxR2omPjfucVvavwRhc5BjLb35F2vDCNN5P",
  "key8": "31iz3nZ5uoxVzcqZu7HcZzudZSPJrd4wM7qKnzTRtngsrKw5PwvksrAPycJjf9pTjHyNvuMYo4GTgD2M6Fvvv2yx",
  "key9": "2eHuVXYYTKCJSL4JaoTPvk28RzKZR7kUwqDNtryqRQ8kSuyK8fXFShFnB3cisjALqGbrdh8D8nVu1dKc9ZfycwiT",
  "key10": "oGdUqSom7Vzm3w4BLDWyY3bJjNpWQbc1ZYF9Bg8qvpnLmxDwYM7NXVtCL5QAcdGTgNgEWggxMNzR6UfJFWZ38dh",
  "key11": "3aJi3nd2ePGRkixDuqFwFSy8JMbmXpMDBLtNMhGVYcMmpnQFbGjUfzs6X9LubSLtmoGjYK2hfzTiDHeMnft47DLH",
  "key12": "4NJvhMpLqoe4LnWkRAye3dHHdXouyebd2uQfTpXCm1fsniT52ZQ5CjvbczsGmJgR9bboBRAzXRy9f8fMuvpRPs7h",
  "key13": "2jFrfCp7c1xMipzoStTffyPSRCjMS2LvTi4YXFWo6AJ3NdBxawrajssYFVXeBLmhbNuJfbNRTR9X16qyEu9juJVm",
  "key14": "tagf1XY7XmTUs5kPmA682fAwFfR8v1de6XgmyumypatCvZTrT9NQwG5meBvPstgu1zeXArRExpxE2kbyqp6puG8",
  "key15": "3pszd4MEHrd9Lvn1rtUpwxTEpsqkhtVBbzLQtai5kHuosPd1h1xsJZNWtYj2KrT7Am2hzmeontgWWzxGFXS62qAe",
  "key16": "r2wE7Qh3hY5gP9mPgH6NzTsTLVaytMCzECLfaHkdYGQfoo4o6Cf8M8U5o183P6Vt3VpyAAPY22PPJDgonFWmySA",
  "key17": "44j6XgvzXWac39xdAJERdiLiXUdNm5td32dcx2TYLHt45SiKDWA6dTVTz2PGi8uugGj6LSWazzCvKvHQ27dUy1AF",
  "key18": "5QpDwpBqFnLTpfLmnF6t6knWdPX7FhGEtWwFKe8Z7i7rQTXNCXuXdSdzzgX8ZJqyxCi8UfkQTLzWTp6aEjPSpHae",
  "key19": "4CSuWkkfVabdSQbS7vattv5PdtA5whaDtr3Wx1XAKgF2KTu2DbnAJKJn5R5iPzVMxioWG5afHFBgxJwXzkd2nga3",
  "key20": "iURVnPSAWHFFvJQaghsGqQAhKRXUr4KT1HL8B2ahNENvoPhWqNRFsC128XjpySYQ9S8t6VUmGrRxusFNiFzndP9",
  "key21": "2m2hvkG2ARA4kSPZYxQKu9kEgoZB39ara8ktHeWiKDZmAn6iNXLkrXQ5phmP3td6tV6eCxNixiascxP7gKLmbxGP",
  "key22": "5h126g3jqaiq5otayqKbexU971eh4TMctGP7RjsYeULTuvPY61WVoj5jL6vmz2oNCppKcnL65DRNx8ihEJRZjXEC",
  "key23": "2gCVVAK9wyHKcePbKZypvoGPinNU3Be6SN4GGzAEMZ6wedrmMdpRLeDaGiFyBFa5w3DTbjzD3P5KPV8ztdr2qwzb",
  "key24": "2z1zU7jrGBfYaTTYTMAA5RTuvRPCPkFW9Qa2R24AnK2HPm8zamY1gXamzBGthmXtN9QXK49bRD2V4YMsRw4JU9uU",
  "key25": "45uUiAd66zfwPH1gf5GXjvcDVphDgryoLZSxD8MSAYZu5S57dCPtMGevWsA8yb2DENAL5bVdJxHH44WZi4QXhocJ",
  "key26": "5qbJbdq5UdyBARdY489Chof2Bky8nUotkoyAaoAUXC63TR4ZAZsCygCRMEuyiFtiSZSYAzGkC2CeAC4gW5c3uSz8",
  "key27": "4nLU5Ur88ZF4vv7jvZqWbnStpBB19xnkuem7ZRtX7dvm5mcioAt2acpFLRavS6pBogHcZerzegCoWVPPcyVwDQ3r",
  "key28": "2sNBmpaZqZYu3Kri6DUKTE1LAx2UY1zNXLrL4Nr7PewKmFSnupQi5qDd7YcnUr4YE1DRNLVz7AQdNSuaBHVrrbJS",
  "key29": "3BNXGE9z83uq6cw2nfiazpxxpPE5jAKo2iHWhLQRRhCgPDKZFwzFWe3LNfnonLE66nPqSU1pY6hqJVd8q4jshsUR",
  "key30": "2Wm7JXrfSzpCpeuqTEyPidniA4sryoo1mDumyivvu79tGbqheHLBNQLDrnFptCYQLvbj2p2VK734zEernYmXFYTr",
  "key31": "3fzg1SDEYeQ6ToKE2i3jaNCQpgTVqK2MhnVR2kZtJuMGUkCTjKqhwbma9qnypLqn6a5YTrtHimNoccK1KGsmHSey"
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
