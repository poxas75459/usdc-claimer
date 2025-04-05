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
    "3mPucKukYdXeXt46aVE1jKzgEocCMtNTHLkr4vuxre36eNR4F3rvoKYgfsjjr9bPWpYdPiFwowksVAuuoWwjy2Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnQfvYZ1P34yDLuq5ustRbP8697jDMa3Lh6uyJTd8VHqbwn5dk6pb11n7UXxLVTFK6hsjhaYvEDL5wymJ2oTKrp",
  "key1": "49gcgsUAr7PFPd7xJLWjzUi1rZiFvRU1TX3UJH1ehukXmBiZLDdJ2udQHFM36sSdJhTj3YLB43pUZagSF1GVby5A",
  "key2": "3JAZ5VCpQSowzn8zCBHqxexUb1p2W2cty9f5tajw9cQPokPWDS5NYWrgsehjU6Z6QUXbhwL1hYNcVMFM6hkHf3Mn",
  "key3": "5oqj1QB4vb2taJmMkSZ4SG63Pop2kAxPpjZGf3snGCUjy2njgH8ZFopzDJv9MUfJrzJBjPFpmBoBhE17cbjhTvvG",
  "key4": "xC25mD4zEeRVviX2JfN2Q3JsdKLDNwg45fWoDXPet7npfDw8uxNeE9PVJpxqhTgpXZpeKp3FjJLY3MULdrp2bkn",
  "key5": "4XbKGkUL9kDn1k6g2CwtFw8UPzgFM9xPJB4qrfamKgTnFV5ehEr48SCkuFzwDtftPcaGcgj3tNg9oc2s6QFLhRve",
  "key6": "31pyYP9Rp8boSpC6of17B7iBCKcPTZu7hDQRt3Gub9kTKU2GDts9VHL6Cd3jjS6uHn5X4ckgWEeKAriBEdpMoGRR",
  "key7": "3WVXuMyrqLchMj5Asb2LWchU3vXWbA79Ai1wmZp5itHYAvsuWLYfXSJDYwEFQ7nwke1zcrFPDf3r6AqTLC5vNotP",
  "key8": "571nXUGwQkMVXhrSpA1gjeonGsszg4UEcoXfVuK1nWtti2C2L95Ly1xJWSkRX1FBeVzbWwEPC2Drz4CSzocLyELk",
  "key9": "5bDet1kWLKPzzwfj4gjskwZWyWitwoLWNe1UFEZ35Be9utoxDjAPegrru98RG1ZzH11qwEDqPz1tfaYr5yFcj4v3",
  "key10": "4SzmG1487ptaLPTSFqq6hbqv9Cwrqg9CWJuMGLeifWXPoTfFBhhHERP3RuTskQKiCyoghoLNM6h3zeK3wur8rvkv",
  "key11": "4yUTxsVLhU6N2V7tucMFT6STLHTcaNu3BmExMFywG2yJDfQaE8BLQxEKW8hALdLu4V4DZX1DGy2ezfYvyYc5ATu1",
  "key12": "2onLbr1iA8s2sAcQR7H8MRDJW5ZE7WD7pm3vQEemPwXX9Xo1ojTRu5ELfv3kYfuF2DGKtGjkuUmDCufDWmJtqJgA",
  "key13": "4YjsXBBZVRTAL8LAFhx4wBmcUB8mib5u4ibzG4TpE7yiAZNsDaDtj7m8XXPWbUu2jVsGZk4vEMntoUfrh8vuYDav",
  "key14": "jrEcrJf5B267WtMoAFsbFF53gF7efGJuCnbfNPfF7KunwsdLDraNNkZFLn9mEYmJMhrmACHDTgTuXuyktnUYgvX",
  "key15": "4fb8vDUFRvRp7a8teyJn7feW29suX4uM28dLaVFF2pgTJJToJg33aYLZHjGxMv65CbQ1mAVmx86eakpBWhWiArdX",
  "key16": "4LsnKCp6rPj9gzuNNLsa7r9sqKbAP7BWqxyymKK6ahXz5t7WEMT7z9GqeSkPP71BVPRdEK24ipTNsrCBt8DkBRvE",
  "key17": "2h1W5BLVwsVGUojQ61DvBcNJwFUn6MSLBF47mu53G7aDgHZqRxHWSzexCDusTJnVAicbXvqVUwkKukADUQLqBWf8",
  "key18": "5FVmozU37ivyDLZDQPEdZuovZHwzv1cbuo64UB3nfrcACuaQLsudSF72xVQz6p5B8DG84KCru7mJevVDVLMgw2PH",
  "key19": "2Srkv5LyeUX8yqVkGMDzs3NdubSawirPeWZ8UQ6nYYt97WnatyeP1CPmvBY2scCvtKdy8Puh3HxFmo3P4BGmZipy",
  "key20": "63V51cG978o3V9GmNSGAHWTpPUwzsBfcgoaTJdmECthvrjrFDogX7j4GAhPhRjYHydDDNbUt6Xxs8eCscGu7LhhG",
  "key21": "49bntzrAUgbTb3LnQubrogxwPxdqUmhEZfSdDGiPzwp7nzDZGmisrbMgd1ZpxRmzDWqxVVKKrpoKBJnVRfftBa7P",
  "key22": "3Ly17mmHTHkyDCVMA7cN5qdfEBhM5vWaCL61AfKcJYcmhrzX49tUDGfa157sQ2Ud5QjjccPFB86YaednX1oUqLQy",
  "key23": "24mKi9F6Lcru6pueF4BHF5Rn6S6ZXehTppSYpaQLSNYqC8849qhci8qNNqgcx6UyrWrcyziubmWKwbznnGeF6LVZ",
  "key24": "3qPKpadY89KB4RTtWx78nK4baedW6wWq5UumS9pHNz1DdjyVFtw5j8dmvjnNuySNMBwVppyzGwP3AMn38XFc7Cdo"
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
