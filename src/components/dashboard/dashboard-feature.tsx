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
    "64JArZgSakU4VvPii8dL5tyo3P4NcmSW5aDGCNtkoaW7zfoVgpBzHyTMc1PTmWUg2NmmphkEdpbsBQofhmKue49G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zzxk1bte7vkvM6PHfwNzJc3aB4BX2m1Xr1SCgJsc2YQknKwdbGhgsFzh8XyuP1zTniEQFJZ5XFnzJ2rPX9BdNU5",
  "key1": "5ELuHVpw9ZSVg33wRaq9jtdpAw3dSf1vJEJ58dFwt6rmrAERUR4DBhcUXNe2VbXdpxLCGKNmom7M2dNdbupx5YVo",
  "key2": "DEs896NPrdQXSZ6NQebonSeNyeU77FSrP5HJyaCPVnfHkhGZGNb8KZrEZ2XYqMR57bd3nMxvcMqDEZi2tJ5jkVo",
  "key3": "31aDovLtBmEdzEvWJDT2HfTYVviephn5a3RjzNPscfmTvugLyNSX5EqNVqJZY6nHf4Az8eetqv3afbjGr3Z7NgTN",
  "key4": "5DPa2yPg3a1UBrCpHzCs54nDAyx18DR5fVMC5KHKkKgjL4rwQTg4wAN42p6rTwgYDZtEZXBwahceewBDo8a8e4h9",
  "key5": "53tpJPyViiTGZCwBfYYU6KvqJnB9Q84NRth2PkqTipuSDAdXdm2Z3nfqU4eaUUFa3cPBaQAKizVpRica25gBKLBX",
  "key6": "5FxP1x1vCbkVZQq8ufMsk5DF3zAooQMyf2tcnhSREfiCoy6dJfbzcebgKcFBuV9PsdtJXPA3HMVXFkqzE8dk4RoD",
  "key7": "coJP7Qj9nfP2Bo4kK2unpPFp92y9mFaZTSDoRGSZKHABSBSkmpGAk8XBaAeP9oNtpkfeYEFY9T1ee4zjjxu4UHp",
  "key8": "4pH63V9yt532esDSY2duiaCGdgPr3D2aNVKhK9XTphwbxhqvwhTCW6FS88ikQCgtPtLdxu9rjUt1snriv5aSj2uD",
  "key9": "3pGD5Sq5daAYiPnTScoqx4GrKxoU4nwjNzFPm4XMiGU1HshhDqJrctSEwW3EHBEMLNweEwLBKpumCvWrxYQTQc6T",
  "key10": "4rpwxMq1kECWNGuCm8yxLyzGUJG6bUzVSWE3EYDanBLmiWFWRPNbQ75u7vaMVNQagnS8GgQfeAMzkVtEBB4hCiWY",
  "key11": "YXY4M95fVYbGvrnhnWbTJKZuRkWyCZ3FGXEGwtmuW1oxkBbkZ62q4gj2tEH6h5oBCWgdgYRoMXWRcwRHnHVErpS",
  "key12": "2brgnjk4gb14vjKfYgp6RYKorq5Wt6VKUA4eiU2wQDwbRh7d7ecL34RGtynjwDhKXu4QyM3hsHjDGN3e7wMPccXk",
  "key13": "2bgtDY3NWd8wHgB9gJXc3F5RJUw9tuio1hTeUcZ2nvPg3zNG3ZyWu8qhXpQsmubrC13rVjd5wBP4DPLchNESKJAz",
  "key14": "3Xqu6nKgvhAtsHLJEPNGX75WDqp5mvyJbF4GCubTkKacfXRb8fizaNUnSh5QrPmU2VfsidhxvjisehAXAuACuVrE",
  "key15": "67PkwkpcTRLfenkC4Cvi42emLPnemNn3ck3hyzi86hJqsXdtCuCZkLD5tjFZ4r4Vj6t5eWrwCm8g1muGSZ9wQdZ5",
  "key16": "3Bv8CwauGNFXoUgeqjmzoEPmm73y1yWFivWRiwYLYr78G5cTPwrF1Di5EJaVYXWCNWpvbb1VUkCTRwq2CJRuTbBD",
  "key17": "65H4CuX19AW5JkYjzsJzopNhetSZY9T24XrNv2SU9ydwKmsjPUyvCMmaAg6QRgoacnNoypvacRkuxcmwJJksdmyx",
  "key18": "2vEXVh4oyAbFieaenPZ5rNxvMVMgs2RthfCbcDsQAhbJGSw18CPyMXwrzHTtZFqWP7Miu7iYjWLJDFQEp2FjhCdP",
  "key19": "48Y6G28tqSAt5eWQXXT9Qmh1h4mRbx7GqYSx1RQqLoyqvxmGNJV8yvg1Csuuqaou6J2dtSUuarxEgEp7qyg4YgsU",
  "key20": "2Bbpeb35cxXW2TCurvcFBSKqb4Re3Fh33Eya3WJTAYZNn6tUFTpzhb7vAwe9f5aZdwmHMCbCPUwocU8KfdvnpQn4",
  "key21": "2xaa6sYeEhce4p6w4P7bXNfNA9oBiwUK8T44X6W5Q7wvPmkVVem9HXdno2LJqMzm8iuiSempCngLFmg7NMSMJoeX",
  "key22": "2ffdenS1AsrXNeFBVHtRWM3eSKF4P3nmBtnXyHGM2UJsKkeRw7caK49ADpEEsEXWmx6ZAiwXhuHL5HSdw6z26Wdy",
  "key23": "2vYpWeNhX5T5AWw2kvc5GPSGkTQutstbzKogsq4D5ShYZoKoyWFrvAaqFyWQfGcaoGX3KMgEiD1beGeD8Jo6KZbU",
  "key24": "2JEUXQRjSwJrzJzPckysygZrpSpnoPdYm2K3UieW7XKoif7q8Ph1yWcKXzswQjfHLVzbVEZUjcvghs7XyPK1MNqw"
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
