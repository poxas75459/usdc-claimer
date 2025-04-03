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
    "5s6f1PJLf9CideaSSKpBEYGJyYTzdvEYqaxGsZx42bdpQ3vfmpLtmY7sk2wcf7SVbRz3AGeANey4A2K14U1R2CSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpQFvfimTMKEJz2dZeBccGYnj16gTPr1WkfH6iciiSVju6LcS8bTagTQiBVAdAdriK65ifmQs1RDkTufvf2qWfG",
  "key1": "66MQF29iwNbEf365gEvBsvpNhZjDCciY6Pv2RbL9sFbtBjucCpjrJT2XDDyXG561XNDKFhJaE7VzgCSkzaNSw1rC",
  "key2": "2Y8QQf9QvLTnaaJQAHgPq8goM842Xu2d1pShNiBzQCG3PfeBLzw3mfvNHSRmgcoPmi1jYzkyFZQoGeUnUpTvD1w9",
  "key3": "VsWmKMpQr8odsuvvyZ3JK9vkp9qPyKP2PnwCiUnuLBepaS8WiLenE7YG3GtwbGdga9oR3ncmTnzyp7CbpmiNL9w",
  "key4": "4jLTsSRtQkHiwW8tLegcs8hEXsscfr4M135WzUrxpUcAPtxyr1UsrnyEuuyhLPF322HTN7TqcgSCAAKdxh9AZRkc",
  "key5": "5mrqcbU3ytoUqr3zBSYjXW44xg5HXyhZN9grvvqusNnB7R64rYmDTMtCd5yuRrVvb1giF8LeqhXNNQh8MUGpqyE8",
  "key6": "2hVg7NcY3tqciJQqR94Aa4oUbfVbr2e3NJw1E3Vbam3UNFucL7BEUouqLY7Q6dQTW8M6fn82P6hbUSTKGMfjRYR9",
  "key7": "63Yt9KpBFoofxXks3gDoFdU5nuvN83Ue6xQJshRCTaD3KnvkASGYmPys4CzmJfki66xviXjpxQSETcqMrKuJJ9SB",
  "key8": "27TnZVKDYSnxA6MqpkXyxrB8D63HuTV493WB7kbAMcEcyDmXWYdGkFDuqitnaxLUpdX63bwEeqHg6Ayb3i456j8s",
  "key9": "3trTMuRNMGbFDDhtGZpniAJa6HUTfMCA6ggYSfxCLrJpKUg4aNJMc3STThAtQs484YjiYiknhLFbgYBZr7smBhN1",
  "key10": "2kQxEazwALo4pG2VVg7tLNafXGzPCFoJSijViHDxkQ7cRPtB3bGu5AXtGANzqE4vEgHk66fpVvwytSESFGW22sye",
  "key11": "5oy2i5jfZhxz8gmEj5g9HtM7mjK8wVGnRMmZNbgrP8ojqxmsoLCkTakjCCguGy2VaoZ44iZ4rPDjt2xqkYYhGGBY",
  "key12": "w2JxpA9vDL7YHJturjHv674TGfMmy6xUKhdZw2UU15P9WD4x3nJj2pWRK2jKzKoLEuaVo3KieoHcNEexAMjdFqD",
  "key13": "g6MNBQfdCHRiSc4g6qpjZctFSWTcs8AWJ5x2WxAhNYw3WKER24fmLVK2VXgLwuSVmULCXFvPKtqyLkhnoRdGLum",
  "key14": "3phtBMQRrRuqYCSYvhYTtVmfuqf8N9WvXyW54xUJ5rZ11JzbNadQaSsEFv2WxEqdBbq5mnVqPLDTbdQ5Pfc65SWe",
  "key15": "3ZSqzoizw3fQZgBpQWuzRZywkciQDWegMEQ1AqwypgMpKebC2DVCon1FAjDFTk8aQCiZzUWpFZXPWsLp4t5fGQeH",
  "key16": "2FmvMG6NEoGSAQLJd9PGFAXo9z8R4NKHkDGR3tpn5dwwiqzkXk8YZG3DyiCMXv3XBuaLnc5Vj23gPBW58qm6C6nU",
  "key17": "5kNbGxxYfPQSuESzrMj2zqCvfJFbu6kgxbWEgDt4RFDqkpenEuzK1umyVGc1F6gC5mGur1jDoeStFYwmeKN3BBt3",
  "key18": "2GjGjfxK15WbzLJ3Denqyo7mFMiMvTvXmarPy9PwdbzXFChZ2UmY5dMLujCAUm9SZeYbVnf7ajvCksMxxHJk1W78",
  "key19": "3EFHa3gtszQXCEjbE5ktrrjPf66y3SZTWmcCvMRFmM99Gs3nxU4tmZSYpTKRurtkFkHYzf8tap8XYi2ELV8qiuko",
  "key20": "4f3Ah88sV8YSj7i5DjDsnaxvDH116ht6zb5xZR2eferjaCJhHUaQXcXmQF5R7wn9LM2qJp1oYTjMihgsxqeeWzjD",
  "key21": "3snT77Z6T6iD5GxxCgEUohEWYkz32zZAKVkqx6Rv2tw1Gk25TjDmxYwEMa5LGk2vea2foq8yTRRZ8XgZdN2VTk1R",
  "key22": "3DHtYP5tePoRXe1RzsToe7gfVUni5Gn3jqjzKXabFDpEpcA42ngkHMmAn3cC87HiMBaUnk1Ao7NhBcGxZcsyijsE",
  "key23": "4PY1roQ27iDQXmNmJ4oe3TWH32dcaHu4NKG1Fw6pK4PHumWkxG291ZzKVxapGR5CDirxndVwrHr3Y6TxQPvWt2gA",
  "key24": "3z9VJE5zFAbQur7VbvAhY9brvosweJgTgMSZrWWyHqtN2wVawKXTi9xv6WeHJNKwxEXs9QhvwJgJNR7SggWkbH7g"
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
