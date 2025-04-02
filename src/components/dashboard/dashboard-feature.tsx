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
    "3npeUVv7BKnzKqH5E3Yxe4XmMVa2jLfGTrTMMeqxHfgzMngTw9yYKdFc6ZqmiTH9bux3u9Xc2Poq7Lbxk2wtMFdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57D1tf3RPi9EKqn2mzVG8UuSi46C8JufFYv3Ykd3TzAFDsU5LahmfB2GtNL7NjRtuSnLphzZQ6MUwhp92zFQDNq4",
  "key1": "2uTBTAm1iu6yWKMitPwUi4MFoNYTunVkNKEHEwt42rSQC4xvUeepSZKPmLiyYnvurGyvK2Sp9RD2ndKZB2SZjPVB",
  "key2": "62U16gtUjEsrWUXk4VQ3rsmwtMiqCezBhWC5AvcKYpwFFfT7iXRs9TNcEwVuQtHuq4rFWyghCVDPu1z258mYkCia",
  "key3": "2ZUy9Z3uyjBGHBeMbhVjVMW1Aw4B8egfVxGspYjfwd2qtiECKw6Jt2VPaygwTWfBh196jM128X8W7PSkbV6C5hxN",
  "key4": "2nbApEC2Nsaz2KbEW5yrMbosQNXfBmfHb1Fa9XyCBmedQ4M7VYgq6D781Vi3DbMYqmSzNeTg7boaV8HnGmxx7Paf",
  "key5": "DhoesaRXMVCpPF5tieCdLoJZqJtUaYGx6y2k6NnZ2pYTpMUqkQ9gRqnRK3uqAcYz574yMWJrK3L6qPyS9B7x28p",
  "key6": "5Na8jxP2DEAvyhfEDDSMRygzA5n5i7CBCot51qM8KtM9Ki7sw3sPxEcuCWBWLPtkppfX757i9H1Ht53EWtd9Cng",
  "key7": "2Y2yHTCX2gkNMHZUhJgwhja1GaHbhjr1EQDDYfQdZhBMhwGGPbDUPGVJZvXBM7VRDfAkrnnrLQUtZduLDkqFgT6N",
  "key8": "2Ya2PbSb5fcsJL3kyvsBxic6JtELTfedMLswf58mVXZ1DYNXsBSSWZy7o4Cv76SX13r3ZjzUskWweUhPV43Wu3T7",
  "key9": "igxCdJgLzFBoVvgpopgDcHf2Li3WoxzNgyMBXJ8HjzN2hvrYXznm5E2QjGqAaUN1ro62rMLSnyT3sXymamXwSLq",
  "key10": "qNxFStXiMfffhCMkXGSR4fqHpVPqPJ9M6VxkTWz5WNcNMxFeMmsfkagk37QtEcHvXjGNybnkCey8HmBr6WgGuMy",
  "key11": "2Gom6UpVU3vKPxRKmGh1wKjBEuA8iMMam3EQ3kViXkj85iKpfR4NKFLEwr4Bjt71HKPazmXNDLXPwZwYkcEEDxd6",
  "key12": "3DAjxAB2BBASHVnPXZCCDjy3nMrmASVdvCwF5EGYgpxZRn2UU3mjgmuWaTzsZNuvACrcMnqjjD5YAm8g7wwbD5ha",
  "key13": "2Jmq8gbNxJwoUcznDAE5Ctn6ipWLNK3xEZ6VzVAzSeJJVZo8PGNSnJUKqFoV9QbnG9vgGqSHzUtsMi1CRvQtYUke",
  "key14": "3BtqSxLbuLWmEYmNrAeKDbbXo4849LzY6dFGdahykcc3ighx1PpgSwTTLrMPvcTBqzDMRkH8QuKn8ebRBUuMhNMQ",
  "key15": "4wVcomJKL5DUJwwTFUGjt7trAaE22gXzsZcf5roFGeoybU9MZ2Gxmu5Zayubk4ee5Lo8xxeH8eKPPRJZy5Ki8Zni",
  "key16": "4RCa8BXt2aeRGPco1szTyo7jcfZMKDfXQ6zeXVv5y11saGK2tgnC1mCvNQDghahBL7JNFGQCiUCQEGHDLa6DhEWk",
  "key17": "2iQkU82vWQ2drJGxRJEWPzH95Kgf1hJjHPPPSiGdRPVW1FsqKT6W9E3CTd8DbygTFMuyYweePprPyWpSw8aQYypm",
  "key18": "4qxTZkSjmYoGUxhC8vnDj6Ar6YyS9GXELMmb79iZKiKjDCXWUVG658HsY28aPFYcsexuymVqgGUTYLFvGj2F5ZHD",
  "key19": "2WJrs6vKMKMjPYeX9koPQMSssPpjYdL9NDdCKyjiJ3jMKcBBJvkwGyYBwhKLTnj6WVNuybn5UAsi1RPFmDmmq985",
  "key20": "47dzhjiXreiJJsi2SyE3XuXWUxmTSVLVAswxaSxnbVFAq19UHm2qeKcv8eiP7vT4pEev4z8EYMb96mj26j5zQA3s",
  "key21": "5w6X5hA3tsfF1F4mj5bUgNLdR4jpKiyLjqgzVPPgwhBjAyfQdFRF47THEbpcv973bd7pm1J59eQ4AEHfpkocHsyr",
  "key22": "5yFzC3vhrRPDAuv3sNR4iRwCEGERMpBdBeEFntbMEfNoRxaKqY6CbjE1wgvYvxTrNa5M1FD7UMAt9bH5s3zGXmph",
  "key23": "32JPrJ9Q8rTYBg9pxHXfMg1mqQtPnjSEWBGV6SnqNrn8BxtJeVLjp5KBZdNfzShhUbyahkTjz9wystzs2FsvSpfu",
  "key24": "3rLUojgBqLiksBrFiVExZLsEJBRWyVbit6nXWncjABw8jGXZQZcPC8ttSfjwGfNHQiGwYyXC6R6UmHTXk7HkMUNA"
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
