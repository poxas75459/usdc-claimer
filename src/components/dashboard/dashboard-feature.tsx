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
    "51oTbhSXTiKnNUhUp8bbVy4YK2jLZHzVAkUPmg3dKvhaNagDq38M3GdjXZBm7iirxFSaXf8vpbSSqUSxBQ3d1k9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36vLpyMN3rbAGGEwcUzwvbr8MX723bNQhPbSSYAzAbRgbcm7Rc9LPtARjyfrLXm5GN524Km3Y5puD7nAZ6L4aY8U",
  "key1": "CZUUJGYf4sV2ecCfoxSfKo3QXQCN4dWkqtPDcbVEciwXPQ8ms6TNfoLSnmhGKGK2T4X6kegkveXVw1vUtWYShza",
  "key2": "3mGmAC99D6wHtRxcQHn15Ai4HAX1p872uqQpvzMZQu9hXDmL2tU3GtuAcniDkARQrNQWbMa3E9eybpVPaYgtypHd",
  "key3": "59hn3W8ZGMUDj2MsCKA3yEUoMm7iEv2dFDg7KCs5hdTvqo25NeMD8WM7ufZHj89YTz8xggz2LjpyB5TwDKubMtcm",
  "key4": "TH4Ryknde45KBy7TZjtZwpu5nSP5Bobonmn386LZbUQvwkm4xUvDCXYDPP3qp5QpbZ63Vto9HiEjULdM9P4HbLJ",
  "key5": "55u9JnYGN4scJZW4aNhPrSBLRqVFb4aG9WtpQLYA6dbopmKFVPCzy1aJ8dqBowPdHHoL4cbxeG7P53nn3isSHZCQ",
  "key6": "3s1Q3PkovqqyxHbYZVZP4UYws69dTBCGisE6nvMjqbC3QDQq7vh7WrJgDNBn7hJqyBcCXJZg1NYZRHSLJmri7xkX",
  "key7": "53vqHMzfFoxn2efXuMkJPq54m6mtDFLPRN9vgRy13gPwxTTpXw23dr4XUVWLdcduA44Z7MyryTFPoE8ZXmJLQXyG",
  "key8": "44CRGiGnipnhNJA6b9ER71PUaHKXiGjT6CA8JwbP7fXiJnRv48ohLTpiaz961Zb9UFMoSvkQpSfxCpsTcv7c8PhM",
  "key9": "PfS4cL14B2mNREV1GbfRaLnH7KoTxUFU2mgkSSagRwCj7iSXVoL9vFJJGiKJoF6xncFv7pxcKPRsLD2ScjSaTVj",
  "key10": "4htPbkFFC7Eo1GZaqbqHEhWpn6e3KaAPsEfcpjhaaTPYo5EfwmrJLMKfBEcB7SNMrZypyeMfu55DWHCXGM7AdF4N",
  "key11": "3cXXnDNb5ydvQhGBTvzaM4DUDAKNs6dprov4UsU2zWerf5rL8CJ71rh8PUKf4xCwn12ze9F7dAFKXXebBLSB22nb",
  "key12": "gdWphB7SsHPPWnWuEKPbdAsvJj2nZ8E9hAgFWT7StPmZUYemer6TGnz6FDVSbBrMRsY6CfZFMF23RtpMMjAdamb",
  "key13": "oyMJknr8Uq14ED47HWqbVxGnZSaKBjwo9gZTmZKLFnhkHhpeYeyLgjDt8UvH3gurqZgVceT5SxrgY7FwEE1wH1z",
  "key14": "2r2svni69299g6LKHxuc7s15dt3e8VL9CbJmBJvjutpmSNtCYSnSPhe2iWf9ByaXaTVepsyCShNrojHdThU64ysr",
  "key15": "3o8jnjrPbjeBvYFJ6ugaXzHBwbJ9bAVHCWbVY6oJUutPmcQsk3zm8ZD6rsFm78b5rG3692xVm9Ur9wKqLfgt5sNm",
  "key16": "4W7jMvSqzdqPKsTZgtHjYYeFqMVzXCSH99rASXteRm8vSn8gEKEXk9hUbNhYi1mhebKP7NwyWuxWFizFZQzpGom1",
  "key17": "5uWWykpgfVUXCFY7yPgdHtnjXmxSMFV1yZqCHgu6tDXuZaHfdrJAxVrqaPgAyvX6RyhDvtjWQLnq8ot3YF174MQ1",
  "key18": "3qpidRKFhBnBhDWRTRPMrqwt2yMqAQcgM9adoQ8jw3fZX9RkCgmwFhs35CnM78kU2UBbEesJTVmB7uH7WryhRJBB",
  "key19": "41oxP2Sd44GpTUidnxLGjT9yXZXxv9Yw5y9L7JBSxX8rpvvnTcYUdESCxSBEissM5mAEe1s5xeHmRDoYuuzCuNy5",
  "key20": "5qZcTSkSYcdrqDXRFnzgj7yVjZc6qLubghbREZJKDu16kGsnoqqikLEoQ8kyWbzFD8dQUYcm5EejYZcxEberufac",
  "key21": "2ZuRAYrWad79PkivaMgEgvuaaqtoKSTSVpaanQDcBX1cg9ajtSnzvuEstEoCBq5hc8kdiaui6S8J5ERRWpAh4MPF",
  "key22": "FzQVrWJkLQpzbjyG2uuLSNm7HSMXC1soa7fJj2x5XRgNsUmRmTSZFmGR8JH8BR5z3fGEoP1msV3pNq4ra8NzPkv",
  "key23": "4DHKixLZwBkCasLP9ML4twi29RKm26rKa2P16EBx4hKNpTs7C6J9DUAdn5H1RBbac1piFr67bwuSmha3aVoxx3po",
  "key24": "5TwurhuoCo11acJTQDozHMRVJLnnH9wGLjn7jv23fBbBf44XfrqmqP3152WYeGSpJEdU9WHTZkNWs8KdF42z3xeY",
  "key25": "3wx5T375yUvaAHZSvq3JRttNt2HBEA3DtGsnDLYqAjQzUyKQA1uqia59uACe8Mc4MpGyt8FocGc2H4roJbzX9tXr",
  "key26": "4Z6vTVyuydRWTkpU4YDuZQkWNSTTCYAdu7MJrncvazrgV9XjH9piZrq9FtJCBo5GvbGWq82sSnKJzz4jAjSkAyaP",
  "key27": "3xPTX9T4B33XLd5eUUSZmLCad4hqpTz5uaH6JV9iDs359XV3d6NZiMxzqurRWHE8rB85oPisb7DBqHC9FHuKefXr",
  "key28": "4EnqVn8PMKyaNuMS8AepAXy2qL1UikFs6WXhfvJUjJLmQnC6C148eLmwuiAXhGbUC5XHVWpAPZsZrYydFCaGviAf"
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
