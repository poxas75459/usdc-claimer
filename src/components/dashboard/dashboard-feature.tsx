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
    "44yeaUhut4V2pecVhRihG58V7Nvsd39jorBVkeWvQyfTmYUaNzupTG3DCgd3pX6mYnYTHHT3XhPq6RkqbhPZRT1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7yTjo7KtBZ9ziib1LX8KKufa3P4BYE3ZvftjRajJanu7yyJwtwoRhq5GjdnmXhbc1jt4tyDUdrGqKSoeiDQjCDZ",
  "key1": "5YZD2qF8DcnYb9Yx2Jc8XhyNFLZFCPXZDaABqz9y4LfVRSgE7xXweXXnRSVSYDLuWRVSMeN8EkzpwD3g3EKZDvn2",
  "key2": "43v4wZRUbehWhg73CA547Ln99m5bD13bnxP939dqyuZQQkRS7BNADZKC3V9cdiB2LKLJ1P4ErqJY3K5sL7VsfPjd",
  "key3": "3nc3jSwSNcqMPkc7J655WWwtDjMtYgBhX8DYp3TvBPBfxJ1t1Lyxvu5H3uTAcmWYo4dqB9ttDgigVdLMBtxfzXZb",
  "key4": "4m1Mna8NTGp2xZVMqAAWyfTqTBYNuFSa1KpbkvHCNYAdpF7JXqoMkfPXkmeF7bVa7w3VpTNuUxnduYGVfsm74JDD",
  "key5": "3yCad2yg6KbuV7Vst5N92HnRFUgCmeYZT25KWkp8U7iKRjyKQKPVxnvyo28mzPqu74qa5u5HjQdLJBV6A1mqbbgk",
  "key6": "25GMb5GX6NdJprXkvHRjZ1s6UVj9F2e6ZVZLeha1LXBvqqytRAPWaPSbgHw8KymbSezWQpE6ciLgY8Y6humr8nVk",
  "key7": "SzmdjhofAbiLEJNFxgC9CkDRQVzsJPWvWfqfewKA792tWj1hFx1PXgKjX3y7h4UeM7UZ5TpUQjBgF1zYMDr9xd9",
  "key8": "BT8bqdGi4VuxQrMXrAHsBXLWxMeZgZzDKo837zfXxgzuHewnYZfYKMag6Sro62bucLK345bodtXps1Rz6vMmNqR",
  "key9": "4Q5LbsDEH6Xy9aTfNr4Tqf7CQ3we1QGuHFDMnjG3V9Q3unWsjqL8U7GtYqtXXCrcva4rfw7zpTEbhSLZbUNhGCcN",
  "key10": "Dowjhf7FpMAK7qwjsFt3s2FCfY1aMLzSA8RZW6UuQqpd3rAp3VPyJXqGBPiLvw3j5hpcgDjU5F9EAVAU4r8ciCg",
  "key11": "3YkDp8CdeaTwgsnMgLcWc4i8nN5SK6qnw33goCC9egp61SJFG33DxgvLJoJBKUEYtqqjyKThg5NTechZLrXTWZqB",
  "key12": "3BdZ23HuQbJ48Au2WqNE4BHegHc4AfHFB7HzgiJs8BMXv5eBRWoAnasBV4uPjsqPYaufzbc843gLGZSJYxz3jsbM",
  "key13": "mfjiHiRCGUdSBVL5n4BvPVXDqr4vERvBrTEWe3V9u93JiS6EJhMTJJFeRTbgPbpayScat3mXyhcXAMNEpcQphPz",
  "key14": "5xZTkqGw2RTBzWUuQfpRxMBgaXF2p6BaruFPwBUSa6iAWZEYdP5fsnR6X16vEc5VeVSe2UJh1jToAszbc28BfwWw",
  "key15": "2CzZy3k8doyPfXQTv8GVjR6U6vABJhfWAiFfbUhqCCmVXE3HyxociQreBYgR2h7CwdK1fAYMpEBLQg7UH64C4jwe",
  "key16": "5C5QuYXZiieqGpFSADbkHZG4zneUCuF8oWBKRimXSDbTcTP2zACwcLWWixKFvw9R4mowwsS1Bdu5h9Hj6H1Ua28F",
  "key17": "zr2kbei7uKKrKTS2vHMzkgEK5m6mvG29VeN7Qbkk68uUsGqPcgUGuQKoSAEkodSVtgruk9rWm9tKg39rzm3rSAd",
  "key18": "2DYEHFsDzL5rF6rjr6SgWV7ynVhYcnU2Mvm4YEX7tdFF3zEJUxqZhF59faPFgHgXF4QaSNQxFXeW6tMH2E1eNz1i",
  "key19": "5LUYduX1jLGHz53BjViMzpLqXrnoohBFAUujKESUHAczEdsx4HivzQYxa4CDRbzri1SpsSYa5s6e2mrVVLmCGj5",
  "key20": "44SMQ5o4Zg8vjz2aE5SoS4DmTWYTTfyNKNijjRyo3KUk7okyQxajLNaKaRtvXKrWnANyUernCXa8ESNJXA1QKQ4v",
  "key21": "4YrQNaeji34r32uuGq5EKctKCNWKHcuxxMUG5nQTvifK6WHCGr4KDN346GGZXRZbJ583po6dSMJvdBPCYDgNuiAF",
  "key22": "3B4ttaCDxwK5gYo8s2s6tK9r8Mud5czHdwv5rCSD28VURu89Vbvfy3J6NgZsx9QB3ekrHRDeXwFA3UXgosFfWrLR",
  "key23": "2TR7NuhrpGQMozHxSPLe5d1KsAQGuLa2xj84eEqSiCbTcyKPiMYFg8HjkcCjCZgwqzU94WVXjd3WfQZyRMcmHu6T",
  "key24": "q9ihS5M9ewqR3HcobmEPHEXaSRX6DzbaEo7SZZPpdf81Y5TZx8QeePHfoHyPsDmKEggw8UAxpNKpT63Ap7tdXfk",
  "key25": "3bnLZkBCVBciqYgBfCXZmF3uTNRRqE2LoEMjNAGxm8R8QSjXp44Uoafry5c7o17F5kew3MJpCmVGjKBg23sFEJCo",
  "key26": "2LBKJAUPU85vMMcyaUsvGYx4ENrKnzPuzBBdtGfmFGrSd5qtvqjAW4jz57hkHHhnd5dyFYRNKTsGvFt3QU3Mh92Q",
  "key27": "4UBAM26AU1HEFbCJZhLcV4NTkM3fKPKfug8cjeXKT53CKwDKxL15GRBr8x9YP4yqKE3bkmpgSD23cMzjuBhVNhRz"
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
