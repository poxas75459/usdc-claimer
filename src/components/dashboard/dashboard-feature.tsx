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
    "3BTpfY5nx5eTDNrhnNECZAFFcLaPkjJMZqVPhVr4cz4oYoBX1wfHeaYvwqpsS4PfNwoGVnbz9MU8J9SPpnW3JW6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38b7ABQjkWeW21HLmpNC2QFFMYbPHVmWogzjjRATforYTP7m3DyWaBXAige6tuCPeCCWq745Xx1XnAwFbG6FDG88",
  "key1": "3soU2tJNmJrtXptdbrWL31mtv8fMDoPHe6VedJum8WwjBjtTxoB6gwAw5CqdW2Gz5VFmfVRMqfLhNoex5dh1CUe5",
  "key2": "5jRR8MkdRj24fduJT3GJhy1gWbvJCNvMSaRNqs8L7PpHZD9rSriZfBdYMK2ymwyXsfXqNNLdLWRaB8fCBWcuDNob",
  "key3": "4yRavmbnaJ3wksYQJZfgLnchuQvhR3VPXA7cxUur8qUSd5qZ1BQopvVoYcasrXokwZZb2AKSF8Godudaxxga8ju2",
  "key4": "2SPpmhFCvWFXgF6hcJkmRNwZRV3Xz3jSKYzHaXbeG9WimSuDy2Z1nNJZUBpVDbhx4289LxjEyCT8iEehmxEEHGhg",
  "key5": "3oZzFisCqUfBQtnJQwEQfQM7vTaqMtmJXz2NEyyr9gXVDHzQNvCtDs4fBccR6DXY6wYBMo33uACzXujWS3nacrCA",
  "key6": "4KSxNSSYVqXJyM4H2oG7JjN1TSYTrxgEGbKxeRmx3AVx4ugBzttXhSedEQckaYPCgGcwN855R8cJLagQhZDW5P9t",
  "key7": "3i8oLEs8KDM6DR3UwqXNbZk5vubsGLc4PQ8JXRqzSDfwbuS2wmgAE2meCpRkWrkPfGS5dqPheCaiyqm2mcWnKbni",
  "key8": "w8oNECU1QVfwAG55o36LcVWrtjKVLpvSwosqR6eZ3xuvfYwQohErMSe8Czvd3viYLkQNZhFhzSwTH1tw9mSfJ5e",
  "key9": "21bdj3sF947Uv4MdAVDokPyLhGKe3Gu7axXRMRi8gz3j4yNUxp19zyAmpJyJTkXrMxV7ZD7nGnQRxCmKmnHmk8wU",
  "key10": "2dFqnSycnKEcyMESw8r1EBAzZwPRoCAvkca7o2isZBP1ok1a8BPJ5CnX2bgyQXZD91yaA9vggZoHUgR7kfyWyZqV",
  "key11": "24Hs2rdaE8M3onVyzzgNPcNovGNoBwgxt5MzSeqtRjf4TvG37ek9o9UhcXZukZPfvG3ApEh1hmFrxWGHuNF2hKvn",
  "key12": "3YHWe2D2w69LdneD6YuD4zc7cKEZgRg4eLN5C7fRMRjyeRJLiWEQv92f4SqsABV38413eiCfaXwHcJ4P15zUbdDT",
  "key13": "4UBNd9maXkf4rHTqshLNERUoSSzjMzcmntxP2oDhGWHux8kwSp9PhEMjSonb6xQ6TJGKRb8J4dYwTuXXS8t3Pr5M",
  "key14": "5gimBjjFuHGjAqqJubFVjgax8r9whEKPZZcr9XYAwU3PcxSff33QnQaFTFkU7ypswDaW2UPco9kXeKdNJYtzi6gf",
  "key15": "5vkBANNYnVnuqNtynK3WoaDZHSY5GMzjkGZPk5DmNvrgw6pbRWdF317Z9yXJMbcSSNNdbxKuLZH9XnKuAqbeDx9V",
  "key16": "46fMJGswfgbLX8CFBCvW2ZxyqFW5uDWrzUwcwEnYGBJ4k135eFtsaBqV7FoJTU1r36WALJafmhiLXHLH6mzX5DRV",
  "key17": "2U9hGnkbX26LLtiMdWnh7UJPCRJhJmMgE18di68spmyEBpmdmWKfyQLaaVGarUtmRVdCpQB1jkMvNhts7whv4hBw",
  "key18": "xMoGhG2em37mupXPfvBCqH37BB3LLz9m4A71YE6TRX3pii7aZLShED18ejpE4aqpspUwu4sGMjfEoCkXtktJB2N",
  "key19": "3EhyN3pfQcsxucZdccHq1jKWX5BwuJ1cGQx2kjzkobbiPUmTUyANBryafEvtZKHS9Spc1JtCi2smWBNKz7LM1HAi",
  "key20": "4iger9EdHMsvkHDGk4iq1CH5NkEWXfKHW5seei9syzjjKwZy1HwfWTEhAMa6jRgCeMYkRg3cXgEj6AM68gXbNhKd",
  "key21": "2qk8P3Ge1S43Yu6eQ8yg34Yc3Nv4A431voG8B4ZC9dUtWr2S1Cz4bLUikYQLumV6PZ2Cdew3Xv9so7mHXjnYHr6w",
  "key22": "4NyiwUq42gaaHJF8TiNHfGhe2AmS9JZeorLxxpnmKAEke1VMc2f83D4HFbq947GPkfFEMFaEAGkshnxTv681UmWM",
  "key23": "4f4KS2yBFkpvZBaNXKKHVjfXd5oZkJ6YjbtVB68fDVesKUzDHyHA74EVdFoVGHLhpmKzT3kfJqL4cSqhKrbafQN9",
  "key24": "4mRCy5g1A4N5i4EYsApyHwZa1cmqu1ht3ooRQKdgqRczrg6dxqsV3JpVokqcxx8czBCyJfwQCqKY89TF88azUunx"
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
