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
    "23aemkZJjrLet2ouy7CTaFus1tse2AfoUtMsJBZCoDQpxD7H1zux1RSj6uMHb4Vrxg3jTqD2sxL4cM2vetT8jjW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PARjc6YHUgrbxG5sNPHJ81mRE7sB5dKEaCz51WekEb6RfPhP8QBMcNfjNJyJKWSjQ9oJ47EHNtDT5gjQKCseP1Y",
  "key1": "2aoJWWtCp2ptLZocPPzS4NjL5ZnWxi6MxL8r6QEFMUGqhGh2QXsMys3zSjsLJ5ziyVfk331V62KxFYu9SmAuXRVV",
  "key2": "4myy9CP64NUBPbH9K8KxLgAhqHjE37fLjKHNta65iujGUrCWFegTWyb63LmW2RFAQYtbkg56jQ5qhjKXxxT9dP1J",
  "key3": "CtFd39tsNnk6jyzAio3ooQWB99Us6rqHvy5iniiVBzgabv9B7qjha7mv4A28cHQeNPR4ezDvH7tYM5yTsQbVhwJ",
  "key4": "5fFKUvau4uaUfua7jiFi3LzS5EWk39nsA7DdEdqpPrqv9tVY5kmFWngZ1vLy1hvMbPr8mqoBa8y4oBsBhZJBeSsp",
  "key5": "5PPwHLnTtNVPg2rcD53yBm2r46GWEUGiSWKoVQB9E5Bz1GqqcXqzL6zXrvZQM5ZFtiCkerBPGVWiLvuiPBKxkq73",
  "key6": "62FvbKxWxraJEAK2S2Wa2v16oT6qRkPjibba8MtXrVQSKxSK7L2M9ZBweRjEtW3jWAKqBPWhAps2YvEjFvV1TwnR",
  "key7": "5Gv52dK8TKo9Gqfnv8MTbgxee9WPSVvJ2tnqN2GD2Aqf8HXkv6Nu1fDYfYdfepTjRNPo7wCh2BNhAEDepY6Ji7EP",
  "key8": "44AAS8uJzH54p1AxgnfoRYa7WbNePs7ccpPTfTsYqpnwWN4d9AHoU92cxxP8nSRKsFFUfjhvtnc6LhC5fDt6sfeG",
  "key9": "4iEN97iLPZ49aYNFSChp28nRNYuXyXA9XJzd1YR4DbGE6sfhsJU8pVvxdqpY2qRztXDf9LbAwdDv71EUF58zKaUk",
  "key10": "34ePTvUxXhUwBcHxqspMUVNtG48iihW3UR8cSyezELjcCb97GqWznQqQ5UUGauyrEPWUvFQE4BADqvkmeCzkkekZ",
  "key11": "4rRny6sJg47iTtx1RfojNfKWuKVGLAD1EtbLYVD8M59MD1RENUvFxWrXFRdy3vN8xn3ScEqHgFv8a9db7mfoLoYp",
  "key12": "2jFzZX4rqfVkYZbJQtL5QbB7TaNLnrKSw59g5WktwgzFtCqSYyeowqkfxqYcQ2YBMuKeST3qNznFnooNVQHQTKP7",
  "key13": "3bPsqWCBJSnw3DKMQAJLQViRnngLHodduXEvbFwkFCEKbCkhL1YL9HNvE9mo7NGWw98Mtis2AMiaAbutVMt4NetH",
  "key14": "5sh6HZaaLLfLJGS9FKqLaDXcUB2wYwsv7z3vJN3hDjRjxqx6oNbA7HHoxA8UMDHyfnrtF7rpioE9gjpiCP4Mb5Jt",
  "key15": "63cWHFJRCerRYE5M7tGN9EhqXaUo4YH7KgHDQyL6fH7nWeCbyvTDsqc2hpACR6UiPJjzvapVH5H5VNLpT9BK7Hin",
  "key16": "5CUfX3HoM2Zd5DkdRrb2xRLiRyiikU6mwg9UJgcN2HBnBRC37XeUL5kfvpr7oAFXHqwEHrDNpCkqMzKcJJmyy5WK",
  "key17": "5jrtWffAtWVpYaBp1JdiLZdr7SL7D81279Dw9zgzqDWLk3J85MEgrL38Esm1DZzsmh9hqWzBKGcefUotwYCjdJDn",
  "key18": "5K9AFy67zZCARGgfeXr6RRB5Qb7R2jkFjqsQBX6NinMKm1CzSWD4dM8Uv8pwtbMiPWgruTpAsQMkkRgiQvxFTMMu",
  "key19": "41YjC8PVd7KA14Zb1sBVAKGU6QRBGN4nb7wjj2XFD7d1SUy3MJKhp2UGqhzWEuy3ukwTPraHMpMw8msozaXj1QV4",
  "key20": "5ar8DeV4p9CEDGetdiBWc6zKH4JN8FUSu48MR1s2nHwFQLWcMwsJURHhGeWbNW72iX86FYYtEWQq4M29YL5GcK8H",
  "key21": "5LfjrLPzhQgVzjnyyGCnigwc63pWsR6c2WThskyqiPq5pmZPVCqeoctikCt32KRmYjmEKi6wEPbfHogz3vJHSQrE",
  "key22": "h6iMTJH7uRtemTdm4SmE4umXQBXDBxLLs5yRbFw5EcGKrhW9g6UKWczoe5FM8cqqZedEBqio3YB5k1cDi7Qor7f",
  "key23": "2bPuEB8gVvmfPPNdVhUy1krb3kr4cvnW7g9k9psHE9Yf3s4ss4EMWbb9CTRNuWTzB3EsLXCy932umc64sjwcDzAN",
  "key24": "32r7BbTvfWWHRXi8TUVKdHjWLDYmKCnKSvtbFq87AZkqvrW5vFodppSmoQwxLz94HCUxFu1zkjQthUWUqFEnX5cF",
  "key25": "4JxMxNFBmFvGELKeVq78tznHjfjc8EoUQq2UkSx2gYUYp5etQPAfwdx5KXHuQT9A4HEpF7zLRgftCgDYUxFtCVWS",
  "key26": "4ABdTPizDjDjoRjcebqSRnj5TSkkz4Ane8uFVpedGxaz1c7EYuwRSoL4nnjXKn5HDarJUyJCK2eUVVrm91oBxZsB"
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
