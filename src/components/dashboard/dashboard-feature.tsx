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
    "2WpScXHtQps5eQiFdZ7EYHwxCddXgrRpPEJocQksRsssXYLPBwagtx2YyyiezGNEZDMw3kD1jJDPzgndy2HapoxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWurzVVhvj3fo7fxcvVEz6DkCBwfpPFhWuvSjPvFyuXznwLdDR122cjqRR8YRidoGocs93gokZULyL5u6iFH7Na",
  "key1": "3REjR2DT4S1Yx2msLXhwbXmz2JKFDWQVgBmB4dwdrYNBtXMVoJzMUzD9mqxpWYPJkrUbyGRxHuRrbuWUrqGQkNLa",
  "key2": "47jvkgMSkEmFwjcErYevroubXhZa3ErTX3UUSkZVJH2L2CZU9jGrzUrMLDzBzQ9Wjb7yVQ5QjyNYStRVgxytxLNR",
  "key3": "4s2VnQQua3jjgVUxGQRA4dGH2bWSPEgVNszToK17SkeRePG4Jkphdjf7spe7JvsYzy3rt5NK2ECpdbaiuRvGv8h7",
  "key4": "5tNyPZRENYoNgfzqZdHCGf3zbh9jqfVaXhmye3z1YrFs15vVv9EV5E9MqJBF99w5zxz9iBTpjbS9FmNeCBPofoLs",
  "key5": "4Y7xmwdJ5K67nQK3Y8Jhx2mAMJRN39Ax3SbGDcAqiSzpCKszUXew6AAST8qtq4uNFeu51LsVooUbnfbC4KuHbbPH",
  "key6": "46m1S1gofKHuKzdNKMhoS5gmGQ6aG3CYvbZDotyHL6oE4bY25DMRueAV1Y2X9SNJrepNaZyKJrn2VXNXyXccJhhb",
  "key7": "UFv5WiuhhtBbiiYUPjnqgMfioHvfBFZcXQUJkt98SEVDe1b9XDFHadYFEuFFhsFSSeg746LrcU5rMBkVZK1pL5u",
  "key8": "5DhQdumam4dbwtsi6w2jj4wEf8fNeDTLobnpHGnES5X2ntS1kwkHF1rp2Dh2K5scwqnLBYDpteBqDHZAfcwCEhDF",
  "key9": "2VPJQYUuyNozimgxrN7wSAJRaxogPhykjSQMq2HQ1x7U32cG8CfAAA2CZhPhKGcMLty5AckefmGwWAxn2u3Tv9sL",
  "key10": "4FKGritBJrKNcHYHFGbHw7VjxrUqLGQjbMDiptQcWJ6BHopRbzcgkCyt5SasYhzK2otcG3AwsysNgt5xqS9qMoER",
  "key11": "5jSyLhcJadyKmAmcZZNtS9QX7TkFKD992z21W2sdNwJwq43Qn9KuybJktFjCbrPDuoCXZPjgQfFrqyv2aRK48iXg",
  "key12": "4TGVRhoXbQ1ZHzq8dpjQgHioRBCvzNByGnXrBpC9SPKei1cYYRsq2RjyNFRz7fPUWN3rQyqjbw9pEjakDkEKaBz6",
  "key13": "3vavDqY3D26YQn4x5BJvo5K6koA88YMqBuvzoCjCgZkVuAaHxeDsw7W29fVX8JcQyzYRhFsPZ769LZKx9JL3FqtE",
  "key14": "3LPLYAGVb5S8amhi9NPgfkVSXcwrKMv6oV9HRsyD2gowAfSHcUaa2UhKcGqgDCNhDm1u11siYKm85NvDB9mVifJZ",
  "key15": "4mUtTpY5KML6WrhpK5qnYaB5cgtAb2TWHXcWWwNYWpCteHk3eK7ECFUPGnCtcBegQzJZUhHXQyJwU3idwzTKqhHC",
  "key16": "4m15pw5WyW33YJ6NoofdTauCMzcMauNMKzinwq9Cqz6LtCszjjDBPzPno1ddAQvCn7MyPnryNNEAXSHvvnnS6Mze",
  "key17": "o6oAvJx8TGZVjDBuv9XArsQhrJwoYpeHozy1Z7hEJqprAhzEEtJxuFKgLq4DgHaqLBigW37AoF43Axv5rzN9hkx",
  "key18": "4DP9wea6uaXarGSuD1nryV9ZoBuvpj1T3sTCssL14qTNqdv3zP9BZYTv7kjLGetbLe6ajWKTJJFNryKH3Jn8vPwD",
  "key19": "5baaUgDjEY9UM9N9o81tmSoNQ9AEKJCy5YzD9cxQvVzwkc588g4CMmEM8oPKAk7BCTWwhyF6YTP1jLoGQ8ZCjf6U",
  "key20": "62iZk4r2RkbL55eEuSpPiG7oiFPhmFnGfbRiqp1J9tyw7BHHKT2xNDkf6ipCRdDq4gS5QqbTyzFK9CixwpgLJtDe",
  "key21": "5kXqqUfEPyrK2ATtcWEkqHbB573fQ5b4xN1XD3qGsy5biboqxrkKNvYLB1Fyg6Hrho2JG6ZCTdBLpUgFwLEAg48G",
  "key22": "45LSJRwXFwLx3P598Ya3hVQ6g7QZoZJaBtk52XyxWc1cjvT77ZePYkhkoyHPRCQsyviGRB3CYVCai9hAMARN7pd5",
  "key23": "Gq9EnDuBkLHPDp1KBKsUBv75EryUSuMMsJ37KKepnbUBjRgPpaRknFPmkeKCSgNHovvWgXGrc5kJRic7mntVhbs",
  "key24": "3rwpwFEmaVje7DzfqYJBrjsjXc7Z5cdWbmCG5tydJiutzv9QFmkigLUvuq1rhdwEukNpLJtpYw9H1jtwzuTsgKyx",
  "key25": "2SFtrDHxgY7wtzr3YFgeoXrnbMYqCb3Rhj9HuBG9xDkrSB9T532X3Eysjt639PNSM3XnzEbHaEFjtD2mEqgabbA5",
  "key26": "2WK2VacE7m1Pj5Vud2BEf6LFBne7iV7CGwTwaHNtpsKA7zniUMPRhWfvjHSLEmmTpgSr1k5oCh4SVySgjZZPbXHJ",
  "key27": "59EUwooBo65oeg5K4VesRZAZpHMfRb9QovCtByXv3atgJpp92PVYPSULUXHvGzUUQAK4rGnppccAd79PNu5AXJTC"
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
