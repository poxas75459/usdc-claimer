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
    "4rCBkeEdE2Mm3Xz4kiyvoHyUDY7v1WdyccsBEcTiniWA3JUCJUUYj6CP9JnqiWevnWAKE814AUdy9ThgzMTn73XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pk8iLonvDEoQUf75VhDprME89gdFPTQJwGASq7tJhhWhGc93VL5i9ezbb9LqWV79CRcA33a2KuT5wqMqoHWZGhF",
  "key1": "3Xs6AnDYYEQq1axBxVYT484AENtpWfiQnHTXYWpjewSgwhwJABbCEsJbett2fTqFWv3o2pzahvwUDajhAGm8piCG",
  "key2": "4ccsqTLBWMrv4Nhvs2RbVpgKKtwEZpY7juf2r5t2sBQUvFefnRZKiXMtFXoi999f4DuGpJzZtUWLCHgxQcQkymgS",
  "key3": "BYyLRY3hfh6qxTW9KB4ShUFo9KUkX5KWjufXR3u7XShwpdcSFELVr7TonKYDAD1hpqVBTmknLAoqRRDk71dmpr2",
  "key4": "3xR3o5rRnAAczLLzeqpnZtXhStNLsFgkvD1oCjwSrNfj5Qg2kvERwgiLc71WWByH2qQKmwcccxGovCbBrXtoRed4",
  "key5": "3YCbBctsnfYUERCbU17ddUbYXTWXtX9XGWrxonjbhffhUM5rFGhe5VAboDnzpJaQr99bGTZq4YnL47jc1hEx7pSK",
  "key6": "35EwGgM3YGzVGSJAFc8hWCmVZQ6sGRMjxERHjoo9qGN6nWzYCVBfH9theAA8SS9jzAYdzwzmk7tJcD2bk9XQJVzL",
  "key7": "2tNTMfKw1wiAcMHMuvZKguXdP7awdSBoV136zeEL2ew1XQKKdWGX6Q47xYM9ETpztzkmpKfZ44erQTSkTS71PPUz",
  "key8": "xMkokVM1PMFmUKzJMBM6XWWqwNPM5aMr353qAFiEqQfL8G6ffKtdGvmbLJQh2p18XuKh5wEHZ9fhhSQBjKRshhd",
  "key9": "4P2WqoPxSGTFunTvB8Ks5o1JR26NLKfjntTqNSG9MCihJfPQttaaBjBL53fipVwsQS3i8gdvBqQjmEFrZ3gzCXb7",
  "key10": "GwZRTob6x4haf9R1jbPs8Axn9p1Ttjchce6gdenMewB6VnBWgBB37XGzWUXqDo7DAaR2G11EcXixsgy96V16pyr",
  "key11": "2VCQHoNN9aoeVYMCCR67LTPnUEQKRf2QE4mLbDatx7NheYeLFy7agNN5TJV3hxrGx47cv4XdFmBNW1F1PSa9Xwrx",
  "key12": "2S1UaTtuDX7P1GnJcHDXCmjNt2gxyWPoeu76QA9NRDjrLwXQKtfrPC2CHQ5sVduiG6sE7ACfTSJgZLWkgkikHSxk",
  "key13": "A8HfPwjKnjVQQHxwfZ387CGWJQ1sSYmSJhdWZg8n3ny1ciPCmsEYcEUyTfUe5R9i3FKoMhCUtbPgiVAoNUqJHRM",
  "key14": "spZoyF16oMw9rx5XjoefqoiTxfxp7tMXyhpjYmZaATxoDWiENRyYFS1EuFRWneRE11ZHnBftz6Vcgw621fz4tVs",
  "key15": "3CSGbTVzEXV8kA2g5pF6ut7STfosMBuR5e9vXoYwX7L5B9DczT6fGeoKJb3rEKkF4mFkYCCKePaFUHuck7H9PXMD",
  "key16": "3m1WABUA3CosMXASbn5DYhkZwGxwpjaKjgtJ2S55dVDr3YTmx6fB8rTgxKHM9CuipcBZgSu6qVQ2zx1rxGSimPyJ",
  "key17": "2N9B24D6DvFmPeJ9pxHG57FzjCCiEpooBaX65Tg7hQSV556YWA2x5TtvmdB4J1CxPwS52Y1Nr2p9rqsRjEGXR3Eg",
  "key18": "3Q2bmLuCMBGkbzwNf1bAxe6zaoiLJU3JdL6TEAhH9MmJCPvER5Ze3of27GbHqGchVSCKGyJuzMm7mCLU1k5Hh8ow",
  "key19": "4aRqin236Lz2JhmUTTHQuy6wpXUDArpAP4hC9Xnbe3Q1X3hU8LMdGqCF6nC575vwRhejJQGDveASCSgYKaU9UANt",
  "key20": "n9a1n2VvY1AdLjMd6sy8943daJnCyF948p3KoSrptrKAaXqQQpNaE3p1NwiDHhjezoBdN3iZnNg7UPBAUo4FnaL",
  "key21": "5oBDJhjTmBDqVdiGbTXXm3reyvcbbQNbqchYQEeKbr92Ue8G5YKYHchMQpkMjuQyTSBqJeS6TAzQErygU87xiCiq",
  "key22": "5mJf3y1BzEp6VD9nzdQ4v87vakV4AvXp2hBFbHnX8YD4GCeA4b5q2J7GDrf5UbZdNiqePLTEQknsT1rsdFbnig4i",
  "key23": "4eGUh2k6ReTy2EsQMCQSqVVEKgpAZjRydPLEuwG9kkkiQYJjTRGbRApR48qTcCfVvht8zaECYasMw2igTKoUDDkk",
  "key24": "4n9LugUfe4xHaDF8HTm1BocctTujMepo2RphbYXZdpYqRvfTt674d94pMEnwPqjxFFq5SnSR9AVb5eGfS1jVLxW5",
  "key25": "3TzRiYEgmkXTBiofK47mf86GEec69zZS2qmBASzMgpytXmccSEF2WPw1rHNSmnSpamxskFzdKXnJA5oUcnBvhxmN",
  "key26": "3cHGVDXbxu7MQYbUz8i3EEWea4v6gqvwePXVr3K6TT9YJF51UvfX39o4mDgSJ4f1nXJp64YeJHXvaXVbKUc9oz13",
  "key27": "2iyWqPZkdgos1UZTWzckR1DkqH2wVENLYJdHaAFmdN2DUywQPQiRAAe7pKkE4Zf1J4JPKCLUJdW5HZgkVX1ADwFq",
  "key28": "2N1qBPMZhhXH5moJwwcTpVC45yWexzPW5DK796M2NSsRCPE5trqkGvsL2n4MHAM1kV3F36JL14D58muuSV1fhQ4H",
  "key29": "3cKvDtftfw4B2rdW8hBdkfrbqP3yAFdKGyQtpWucsd3EF1VJEqyXRH8FVHLVpkEJaFXWq6k6ETFeRuVBrpLPWqju"
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
