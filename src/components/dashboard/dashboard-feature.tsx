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
    "4uH1YvTJ4G56cnM3azDwtSceGatcaCNHsDu4BV61XbGb7h5rd3wBwCpy12DsZhdnmB6H9a2XXkVyT4UxxRyYTxgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LK24p26K929kEc5piaUY8jNE6bPvBXS4NmjNrfRZUnxUgHHzyZEtUSPHRTevw9Z3v4ayr96JxD6cCwyqpkpwxE",
  "key1": "5Sj4B98C2rGuFKdoxwvwBBRLj3VDmCWq4PooRosLKANmrjaVZHUN9izJiifc8mx6NKUDuGuDdEqx1NNFyF82suhP",
  "key2": "5csmw1rx3oLxRk6grkBkkxrFZdn6vvos89P2nUiJ7Duwv9eB49QVvbdVVB3zd8BrNV1gqsoz82G8WyAo9k5g1yf",
  "key3": "4FLZfrFn1mDRxKU4s4Pa25HBeMdmvKRhGbCkjcAmpJFosPCXqgxQQuizCWznZWMuMG6TSkw4BP2VbYPWgR2CfU7d",
  "key4": "3ZYDzgXXjKyeqr2KbbtimzY7nQUXr117rXs1avcKcFF8Hw2VFBo5FiDZttQn7dpAqEbvn7kq555M17ZcpLq4V75o",
  "key5": "5BbujhsCXCStPDyLF2o9hbmfD7EjYFianBZEBHC9oNXjoBvh5jKR5fQZ4o4nS7DtX9ZpkN5nCqbDeJZJeWpamway",
  "key6": "5VgK9Qvk81rvJ2PDY5MSDcQD2PHgPnNRQwvvaXX4H348jdMgwwDanANu6CYUpRHcXSCKwdTkfgAxGzdfR1GV9joC",
  "key7": "3av8kajs2Fwsxn8aHM2Kj3W2NkuwrfSFKNSVgfxdCgHYBcMf4eQ7uopp4bssM6h6bgmzhwVzLAd8kBHTDgykCWD4",
  "key8": "2sbAJZKCB22sxBf9bLFLVQnuHXwkRmdQM4D6gfcJgWcnAAC4FkY6pBXRC1ZKuGwNhEfqWSbEqn6i55Gksv5p6yKQ",
  "key9": "5k4kA99yyJQRndGtfCnTr5yKHHUUFdQCQBmiTMCC3E3AnLCWECa79UU4EmFX1PWCTgBZv4PDoeQkwowTrZkBGfwM",
  "key10": "2XTM21xbWewkt7wR6yLafsKb2FT95wvsTbPWowrecFSZgxu8FJTh3AyMFGo99bvZBjkv6WK3ju3XAckg2KkACASp",
  "key11": "5Cc5ud1VxvksZKsUBU2yYeVjLzwTHzpfwqCsymW9imn7oBLANB9JHkGrEUivt8rUwwHu4o4pQERPaEYrCXjVqZxq",
  "key12": "3R4RiSaSGamGUkwGWbkfsggSuYW5RyeWEUs6LvLdryHCpp8YWKAia7Y4zg9KwnmfFgMKgAsxKwNUCM3Tc3P8FRdS",
  "key13": "4aegrkKDdeKmLB2J29FCVEbqRqhaGibek38Vu9LcuRxRDZxDEMYAqC6PZ5tR7fRzWccreCJV8EocEZve6Uur1duh",
  "key14": "3N1nGmnJJhipezFGAFW6GdPK6DXTxrf2woZfyTu943n881qcQJcMjP3zmbTW5tQGtMtrMVgNJNkgG79wrzysjH97",
  "key15": "ueQKAVSZg85o6L9YmkF4MWCC5e4b3hYfjGY4Bz2jg6rkByTR45s1bKZZGUmuETX6Y5xnDHSaxrrY5pD8jiCeAMU",
  "key16": "41APggUAPLxKDqaxr4aUWJvJ7Rm3QMcUu21fqaQBNw4pDewA1TJiPAaBhtP1HbQTvy9BW7vcwQUfnbMJD9Hc3fLx",
  "key17": "3czrzv6hUSCpb5T9MQAe2vJLQLkENfVjRZbFbarXmv3Jts1rExbTsBor59rcSu9JpzauSX3rvJYamMhiC3gatLYH",
  "key18": "2FPHnqd2KFWvw1Gesed4BR48SMJ9cgXGtwqyPgCPiqfmag3hkjJMtTsSSkSNSj35WUxmfGfpAD4ZpacVBgmH8kDy",
  "key19": "5QgwWtxpei1pyBbmwjfJewPYnmvobbNcCZpSzizrWP1hPXjoKVUnbGiWpyB4Wh6Ctt9hTVVuXG6nzZdo7mEDrGoe",
  "key20": "SgwjRyxn8T6JbU2x32MHu8BAVuiPhyqWsWrh5hFHYUnLW5iEoymR9VAKhXk1rJzH1b7w6ZFELJWzHj1RGjvzT72",
  "key21": "2EAFZrXUDuHijquedfUSPxtFFUeAcBED2MWNA3GCmj1MkuF5ffsPov1tPLpCRzmfVXt9dMhjDdqmicqNrnoaHAfq",
  "key22": "4aNbCneGUk7pwjwQkvXePjeSsN9a84zXD48fWa1iWGGjoPFtqxZLcEoEYzha1eR9ei3t4YpJu9FXX6LdUd7PrZZ5",
  "key23": "2rcbayaU6S7T9JKPx4Er2QXg4doswNcZd4VEu12rW9p6HWUweiCizJo6HkVUHagLNNJdJJ73vB1XC2gKvFScjMtY",
  "key24": "ESzkcseh7EePQRE9WmGMRbFsBojSHUqKDX7Tz9T4x8WzrjKrb9Z3yVRiqVBBEs9GjTKjfXb6y1atVm5YpCT1aAD",
  "key25": "3NnaYesekqtkTyvLQeFYaLvVfx1bA8tpRaJQMchbjPgAUAPCmqucahk45Z7MQnuHftj9dYGiLLNeNZLcLj8NKk1L",
  "key26": "3BkN5KbZDdP981Hf2A35nHF8T8yXcWRZkd2mvu7SEUassiEd14qFFiQwcURPAwN4q859pLCTbjE26n2bWZqGauWh",
  "key27": "2r8R3t9s8ocjanJ2E4LHj4CXTvZC2rgsHYk19Ls4bom4pEVcLrofttBhGadRdNMC5iqjpZEp6PVTAprKubUE42fo"
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
