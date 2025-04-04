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
    "5nd2jn46vq4DTNbaXGHhsfcLY56SmVKHxRfv2N6jKigG9c6iHRmjd5L59YauDxfRENUREjhGdLwPByNxtvDEk2pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGEC1kdUy3MzSJqiWfQgKNb7KdTTYkBxwyvFjgpEJH7oCwg9qTEh6wMMPiPaHVR1e1xwHQXygwngHMCGmG4LNkj",
  "key1": "4KurJJgD3EaNUSd4psCigNazpGdir9TfGvwn3tH4GDXii5V4y9jGgEvRhBJVhmXkPsD9B2fVoREjkhLXMdvBqDgU",
  "key2": "4AVNonuiqzH7TE1ecKnDwMV5KWFLRC7dpYwyNcQdaUunYxgkkLepLE31R79CQpwNwc8zByE6zgfgz5e33XbFGVPS",
  "key3": "funpN3UVnXNZUtebLcAhW3524akx7pgxaq6XJeGYqqSJtjzXiHSvGMzahpqLMbTRPjriGzuieErRMo6Xwf1rEP3",
  "key4": "2FCQc3xCiyWT6zCbCqHMaqVEF3dem9bZ8bdwTGWSRjUWeyyPYL5eL7cM2Ymxy6hTEXSziarBGup7p7TxQw3x88sa",
  "key5": "3pQn7BcHiaaA8iJT2ZXPhXi38yKU6JK61PeBoibh8bhAdLKapWj9zUmRQeBsf4U79KrpHXBDhP5h9rk4h4QqxVT6",
  "key6": "3YCzZQoEjy7w88y5hK3T4kr33aMcCWPpiEVbL5xvVYKmYy31c66MntCSwwnbJvHZhdGReRktcAWot45XoHUCHCPt",
  "key7": "KPQCe6eEAfWLfGBixDtan6e2pnfHomTWWyGRBwuksq7rXZV23admBx8hhn36Xwx1LRMwyfhpYAuzS33UZCQy3Mt",
  "key8": "2S6Z8C5i6hxbfCzXLoAMMFYBdsFEv7w9AwTJGsE7Y2QYLfSSSRy7EwkkVFZz2iHjTxjVhohRTyFeGfjC49hm6fWJ",
  "key9": "2nJeHPZzkh2bhhQo3tgYbHniHWUyymHJC1DNqSkTciQ2nWJYvjXTE1pckZfKCYJZvZxuhF7Nauf14S7rYqXNtxhr",
  "key10": "TUx7ibwBzKyFR7PGyJjshMv7JfSvvqcGpFL5w7PJZtweUb9Ly2dpcjKbP7myPEm9knrxw8GUmuZb9DTwPojqzYA",
  "key11": "5ufeaQtAycZryTHiZ5uzuzxJTXUg72kvMDhRJs69Y9avfmE5AMgmFBrrPq6Vtievc76kBtExppmCpNCSFoBfcEoa",
  "key12": "27fUx8fWAUokEX1BmZLiktKmovHEgQUZME2Fvr55Jt7fE4Ad9woXwzqqmBqgNxNZhvHP5Ly5DUVP5sy28xTmQuCi",
  "key13": "59N9Me1d2X9maFtExBavDKE714ccovkh35srPaJBGr471PNMUMCVc5dkZVQ2LoB9RfawRr9na1bMx4jrhuWVYTp5",
  "key14": "yjuPrtUVu3TqdYFjRCfoBryUZTKNsQNdhaSLPAhifu8i5mkLGkXY6C7B2vkW9UeCvCSbQPu2wqb9P7DHAyEJ13x",
  "key15": "4cdeMLjBUQT95HEqVZQ2hSMsJQdDW92UjtkjSCuSx7U2EZeKuwVp8bwBu1FfMWXTaA2ma3h83jct62sPEp8mVZsB",
  "key16": "653G3KuPieFC6KRJ3ECiGSVGy9zQY4SbUG2NksRekpuVSr2DpxNqnhst1cRthjTLCL4hiknWPxFFgzjbR3xgdCnN",
  "key17": "2X7YzjmmbdK29ReqoLNt5HzNQcz5DZGyAnKARTwaPZJHb2d6Hq2VqKztAeU8tVJSncBuRD3cFevvg9FmhxrmCMMB",
  "key18": "BZ8M19ZAHEEHcwWmJbZMFSXfaVpF6NBnVW1Tghg2ALWEGfd7cdfBrTLcU5TEWZS3WPkdCaLaR7PoewtRzkpLAVP",
  "key19": "4UYKSegSTKimNeXV99qe2UMjYXw2Sbg8XdcPPUtmucPwnLDGSeQKBXU2AGFBBKhkrQpNkxNSahoJu6r8pU8ob4TE",
  "key20": "3CeeNupF7rg1hMhy9F49D5UgCUPRcia4V12kDousqncDyHyBbyuLGSJ5PHkZo278npYhMASZAeRJ2VYQePRSRiou",
  "key21": "5rGmDMBPqRpCiTPCd54oMQiwafL7WN3ybCowMqjSN9PnVeDpf2GXVD92gejkZZigqQEJ91DeEDat8oVb6KmpNJoZ",
  "key22": "LRpLjCbLRQtxbxK7UhKVFpTQWEqHDGP4pnmJiEt4ApBg7RYVWZ7asEsfcPBtg14sXmqXVeAbNu1CRVytpLWcegf",
  "key23": "53Z1Z6QbH5GQJgP4b27YgzU2atv9JdMCnSHMi4UW8nEqYmLrf6pHoTgTP1tDwtV7CZfdDNymtagBoEur2acEkYbn",
  "key24": "5WwotfSrzuWYygggiVfAaHPt3uE7u8EdtNTQ4CFaDsySLAVjrwjUgwc1LusXigPkqzadsiUpTbcVXBbuwbS1pT7d",
  "key25": "2oHTTdA1qV1Wai2cu34fHQs6RmUc1cVwzwPD6kPzQ547s7L7YQSLiQJCrCBHeWsX4oyN6RsAWh9LjoQSiA4s1fjS",
  "key26": "24HbDvmRV4gtrA4erNWjrctANjDZoLe7EbqaXA8ebhySsg5uipxL18ZMCPZyxQVooDLs9bGcAv7ffzDQfrVQugyx",
  "key27": "4xRTG4jMhbGVxFRStdkFjuCq61ELb3t9vnzXGHgynbWdo7458m77NyFeAoSRqLEZu39LiHZST8v3sJ19dErrr9f3"
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
