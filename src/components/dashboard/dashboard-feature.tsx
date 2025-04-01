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
    "49rV8Rnck42ZAijXj6ePjvnmEkMR6BqZzSNJU9hDKTVvxNKLy5QQE1jadT2QUvC4uhQaB5yjxtK1LTY5nLk5DAKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SDs2Cgbhg23A18FSoP4A9iayb2dF4LTBAAZsp8e5nj7dE73ov9BqB1SgLoAWuuCPwQJf7pKw1kqevvYpkscVCcL",
  "key1": "Twuqmu5Gswc3dut1425wrXYLoFBJyHQVqeG1PxPgey2RjcvNAKF2YShRr4Ku11Hgwx4wpmvw8kVkSLxP4LbYkBa",
  "key2": "2YGRpW4MT6BsMCBgGDGYgigXQDukghhgbUgPiCkWudkNLV2GNe2ysc7WmznvWEHYVySq3BaYuC5mPmfqXtey7kNX",
  "key3": "56w5LkrTz8cWY69sPpydobugMzHEiB2M5gz1gxN21nX8upFk3qr5W8698TH3NMGijmcpMQSxuGHBgJdci91B3NaK",
  "key4": "4AsjWhoEec5BbznowP4o1t7nWEz9qFq5KUL4Vpb7w9h6sSr2LmpJTQtqYPN2quVf8sHPJm1aeu84hnJ9qppnEZQq",
  "key5": "31wmGopkUmw16v33gSWSvJhkQD3QvZFnkSbdrKM3PpgDGj8RyAj9rAvuNzLDGX1Kt6nmaMJDJpn4VXacFWYW7Aag",
  "key6": "5ghTYLxPU233zBYBqB4wjRtaXStbajekzEy27i2wxFXsmo3HJnNf3XcW1ga1TM3TL5VWPWEApQBs8nvEMWBHb6t9",
  "key7": "5rLD8esvjKJjhM92j1XTMaQZZ8akHp48rXtd86SFKghtCrCfcVZv3ar6LWKn5uimoHbx98dL8E2oiGdoa1YSVBkX",
  "key8": "38n5TBeX3omgar8GVtjebt25GKUxvEYgAtfXsmr3NasD7WU8zMDtfZSMnYLitJ5mW3QMvXmw41pzmTVX3QeidrMP",
  "key9": "aLAAzLKABtm67eR8YswmBfZAyN5xrpzweBbqEov6ypd3UtukbGaGcnbJwJ4Dtr9xe7fS3Nxj4vaBiwRBKpmcAg4",
  "key10": "3XrXbcssphwDGt6BXLQMosHiUkARWy9ppnjuXvEoGFDubdiEiZF18spm4FPYW143Y3t5w4WKTLxTfNRdj2mzLCHf",
  "key11": "4qAJtzzRQzYfrJKJhgPdChP3wMG2gfDZmKa5M28kMkqfWqDrkwVJUYq3y9ygwXKJZRd3qbihTPXaKHkQtdDA4CDW",
  "key12": "3A6XY5T7NX8QKweNVPYJ6t8ZxBCaT8DNZL7rpW6QRAX6yKGyaip9CWbGRqZ4LBttx3YmuQQryNEhgiJvPwkzFHAE",
  "key13": "5x6SBaSQLjf7d3SYBmgD11jjQ7cfeN4uu5q3YB5fNp8UoAgg6grGGtd7yh11w9m2f7wTFEkZhj2W7D4Yo4A4sTE6",
  "key14": "2Gazt9ne2T9yGCgEwMJy4v2t3jeQYLLYMdLHzkub1qjoSjf8omHfEuX6cUKiCx39w8QaX3nBgjjzBro4awHrgkTL",
  "key15": "VAx8Bm2rZU6r7frcjcA3cbo1Vxei6KEuemenKJmwEiPzejggVjmyCLXDjoSFQvjzXTpwrtgedFfvGLuLqaq1ryU",
  "key16": "3NEz8pZ4Hai9n3qGJEEUqcH5Nrsg9u11613U3yus9gUcGgPqPLxT14yviFCdhp2cu8qUkDGJQtExkfmL9AdkqSjo",
  "key17": "EBZ47eBgABrTPGBoR2Dd2X1A6EYtneVvvGjtLMwK8y4iwh4KM2zfRiUQDwP2ziNRgaJDofABFfsNZxj5CNFppSf",
  "key18": "2z6LF3A8zjDUn7ygivfycskYhi54SWiYrkvfHDDX2gcYurXCyPLerNEFMSGQ5qi7EqWBqqArTixzTrUMfs6BUyFz",
  "key19": "39kStTiLfPqRHqhU76BvGnLwchxmKzmQW8poLeFQ56gLN4oCXq9V76S5J8uFYchtCRcZBLi3CpXMemZyfEPZ7ZQQ",
  "key20": "2nxDzPBSwkDmJBzMRuaWAnW82y5Vf6rknREW5HbgjDmcsXSuPGDUMX7CxfzCiMwwWUvYX4EL2GvXnWFcxe8KsqJL",
  "key21": "5AN5AYuMuQ6AjekNeMUabESAqxJ6b8EVcK9n9NUkauH3A5CjSbdxKECEHUaF6ZmKA1QbH452dDRg66bKjJySz9jE",
  "key22": "26krNoCBchPPs4MNGUmsbFAHBq61kUP4A34NJ7QWjvBPrPS2DUWUNcoVCcwCCvZXt13eGFAmpRdfnsJpZa4cX5eR",
  "key23": "5mW5P84fMh6XqtrWCFAU9FvewzWg5WZB1RbNmPNbPAbTTqtMhW9SiCgz4o8N7Qehz4Pz5YYqiRY2rBtZc1WJS8Ec",
  "key24": "25sjDLgWgDLCHRW6CJeD4R5zDFMEaRV9gC7RR2JRMhyxdvULzkBwB6GqGk5MzRfGYAfQTbdgHxF1ekFh3vVschCg",
  "key25": "WZRMkWUe34gHXqi5uyFyM3ee7wWYJ6SiN45eRwvsfQEJeTMJQWmnH4CichJ2kTP1kk6RXxptvs4NtqpQBapfznq",
  "key26": "6CnaPuhxYEG7dHjxuqWxJjf3EEWmfEvemUp4s4datRruQbAmNjoMmogf7SukGqitsCoNH3cf9YAhZBTWaYnWDVx"
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
