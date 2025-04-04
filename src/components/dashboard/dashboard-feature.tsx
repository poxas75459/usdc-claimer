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
    "XzePWwsmYR2evi7Ca7ZWg3ZLCwdmiFpxvNMGNKUMVexgbAQoheurURe2SUC7mka4DHiaaqyiLuSNJbhrBGQh3kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dh3i5tTXG7xf8BAwA9Eikk6dFiarEeguX8ajfm45aQFpY6Eub7cokrs1ziVPkEgAhtasJW93rjfntnqhL9ADqy",
  "key1": "d737mBcLKZxQvvts6PGVpTDtEUNJsk8wQxPFRM4dK3kBbfYPow6r4NjW3ycxCNWfJSLAGiTaTnyzyhzq5L1SZ66",
  "key2": "1Jd8aYnPuCYwMpWwUYUk8fiZd6QgkRcNHud6HCC7BRH2Ku5wdGuk7PskbivqgVc35sBpzFV8iMAt4LsFBHiW5CF",
  "key3": "66utrjpeiY1GwZCq8SqRYNJKZw6gZgRe8LCKtPeJWUtenBqVpFceegLb1DVRT9mNpsE3ANEKtbAvk5Xeg1GJHLJ2",
  "key4": "4SoZmVVEM1aYXmzNHnLttE1fvcyt5gGYTDYSapJq1KDnKdXPBZEBFivM4thjazE2Ge2Vmc3bP9YutZqbnFf4CjkQ",
  "key5": "2xyJXpttqDbJfaLSUu4emTrRDpm4LkANzLbadnwMryTJZT7ueBoXV2fyfVpfVCizDoZCZXoFyHnkjFRNwp3RHwpQ",
  "key6": "He1EsGTdFzoL4igXpqprM9qEF5vgZRdqbLiLejWy6weQAbuGz3zejoDdh3XRwAjkeambX3EoMSxR2iHjqbieHrb",
  "key7": "3aKwG2ZcGMH2LBRUzvTXUkQfjpkETmMjD1BdgtmgyiSUjW4C4ZxhHGBoS5Aa1SU459usQhoDz6DyA2mxLCefxtYK",
  "key8": "3wwQH9FiW5Br6oRCAKLTWBbHqW3gE1CFzJEdnkXhrYZwjRyqNzTX6jVJTejDiRj1ts9Vp24LwwdEeCu8UjjCg71C",
  "key9": "WBBfYSrWKUwGeC9K3nZjvLZheugoERJGjwi85kJ35nJCELYuxyaBWSKiTu12QbnbKNEtcffycQ4BC71SddCwdee",
  "key10": "4imcMihZtsnc3APgVe4GWoCAcMbHNiTgMJkb5VzFjuQrg2BNGt47XuURmNfwdfNxRons9iTrv8wmva3TpKSu31qz",
  "key11": "2hD49hx2asumvtCC28FDDG8Lt63Vui1D5DttiLWAKwA4fr45AnznXnGZTnJfvTQbtyoGqvEaoFB7x57w5bu4NUBB",
  "key12": "RmqoXSHaCKXphSdig1yxSQ9xCoh4G9W1pZWeSKK3MUNhC6aBnpYm6pjM4rxUwEY6Jq7vVv4HcuK1S6PL2MzQZaE",
  "key13": "31P45mvMSR9hNgvSDGhTDkspHthUzowQHTvrJdxsHKYfbaHfN465vaYve3VsaHDGB2X1L1pAbuj6oPsBCcTECWcF",
  "key14": "ZLPhzimNYXHtXsKEYK9hgfzCrnKVXQCk4SCWaEs6XeRgzKwM1uR9e8NDsAuqhXG7HfEh9t9JGUuPDMKmiqv2QDm",
  "key15": "35EvzdEcKMFFzNjq7bES69rGxTVQZaNJBNVFGNKVy9QFbd5AcpkqJZZPZv58BQ2nKN7kUAxCcZHZw3uy6a4Xm97D",
  "key16": "3QZpthUs1F3qdBXPZzEH15MUXVKKtUTLrmi7auM3BZSyvAvT2Gnm4n2ecamTYBUGg9pHsrjN6js2nZPL6BciTiJS",
  "key17": "5pwMXz2f4UqVqo9KFVfjy2nNoF1VB5To6oSRQMqD3rGrHFosVXrGFcBZWJgRB6Q4jZRuRzH7zkYafV52pfZvfDb7",
  "key18": "5AarVpGjhFq2EGX25ZpJLpb1PAbqdFf3RvuUPUffdgR67PLR45cHi1ce4A1gPWBLBG1MiQWohD3swwSoFamXxqw2",
  "key19": "3dw9SPd8ru8EqPub5CTj2MyTRiwvw2GDCPJF4wtNMyz9aRdEWb7yjAsimFhzQJuGP5oAKfkgiLseYk6QQuecPwxT",
  "key20": "Hb6vbNJB7uPZYLcScZQAYc6q2V7JKXTPZywo5YF3TzakddXejGgAizpiKRM8LfuwaQS5EnBN2aQPJJQyYCG9DnV",
  "key21": "5tsjRcP674L5ar1N9qahG2X473EW5ZnjUy82KPJRCyuHqTV4cMEyAmLdsTfx5P64cvmsK332DBLFbihoEVVHH9jP",
  "key22": "47L8hE36F2qXnPPo5jjnimjPvQeydqfEFNbdHm4XZAavgs4Gay3SJpMiNqcTiFJLbTrFhG8nvpbtmaaG5DUahFBA",
  "key23": "2nQkaKkLVmUNURFfx9cUW4x8vUYJQDoHvKbevaMz3GEuBtp66FwvvyBiCmPe9MTVzsFoH4o2Wvwq6zYMQurdNPFH",
  "key24": "Q7BjGDF8hPPLZHi8b6udnXKasNUsffnWob4UTC6FXPudLy3X2gHXse8hWvVBoQ6qcm6tqurKvKSKecm8k383B7L",
  "key25": "ZU47PZ2XTNFwWxNgRdGsddUq19VpdjPqpo3BZYmzznB9y4LfqkejPeA59r9HWGHV26Yn4sD8myES31XeyVcSn8j",
  "key26": "4ijiUkYQyLi5b7EekUD9Xgz519RbVnKnbDT12dx4Yf7xUKBd7JuRYoFcNkyLx5fv1ABDs2E1NtZXedQDPq6fTsio",
  "key27": "2z1curKNSf9tVXZDMz3S1qTzZTiBMqFnF8mPnvBfzLn84DfyJ1WefAj8aeS5jevom3cTiRMRXU1B4m4gWEfpEEH1",
  "key28": "64ok2Z9yfqE3mi7qn6PtQPMpUxY6RZZwpTdyvKYhAG8FQXCqBDUHbkcpzVpp3xzPor88x9HXZDnrFaMZX3UWkJTg"
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
