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
    "58jBc3wtRddLDS5bxyVeVQnaj3ZksDZvHV4viuTYZ1gkTCyATxPThzpBf6gy6kAjarMJPaPe6NBfeLa5oqv9hsB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZNhi7QfRbabvro3nrTB6TS3r2DsDuyUywGqCwFdgEeZyHCdXPWbixsoVSYwiqQBb1zSAmYnU65qWMyjtmtLvTN",
  "key1": "4tE5aNg2fjJxbhLozhLwmjNDCAEAr9PYCMb3entkXYMtL1JiMztoQbtNXS2tbJHjyNG29tvQ29QLA4pZX6YqFnT4",
  "key2": "5WwfQBcZ7jWWVtuosRADJxJKZTgHJy52mKs22dFQhQo43Wu8jvJB24cpJi9ts5mAtxuiMQkbexbUUwc6bZaB5Vy2",
  "key3": "3KbAxNsREXN8TjfzCtm564Gs7Ecmzan2rgk85DX3nQ3jh5DsUL26YzuMGdBW1VjM1zDdFCx8WTG7mBBWT2sk7Jco",
  "key4": "2gS695P8gngPvMeEyBvErpgAwbe1s7MvGq7mVhHYvMZvsYepiM9vGajm2GzzpyGH2mSmrvkadMyDokbzspzGNtQa",
  "key5": "BujDzBoL5gx8iKYdaJMm8e9vbaRiJofWGawvkAyAADJ9iTMMmReARwxJNE2XMo3nyxt626rFvQGGxzbzNF7VYst",
  "key6": "4UwXpgEoG6x8itSwpQvSytWS1if67cjWePDvGbhk9vHx1SkWTPwzbVX3SpDpULhHPxxgoKJnDWRGeF5be3f5PaMD",
  "key7": "5bnfLiAj6vEs76tgknsnwJR2pCuco5ctP4YFBYWv9fBAWmLvWEgKtvnN5WEtZRFJU1UGuRTBQD6y6DoU18ATFftN",
  "key8": "5ZWA5p7PGPre6VbF6zaNZbg8NU1jjfNRC5RmUHDf7Nb5cvBsBDocTXX4GKR9NFf8PeLZCEhyorRJGnep7anTGLiV",
  "key9": "wWDmX1g7zGQpqLB2ojrLk6ter9FkyWEN6jPpfsn8PJBhhVUg2MWrDvwunJbD4xH1ThE3JECq5QXNt1e7MSAM2Hr",
  "key10": "4Ps1Z4HSLL65kN86JM76qGew6CjEJufufwQxfvuccgs23adSsL2pp16qTGNBmYE241Mg5j5bR6M9D8ZqLrHbzKwB",
  "key11": "5jZDdwqbWFsQEzN66s3HEvcD48H46jk7akHG7HraJmkoSLWDnMbS78xiZ4pGUud8hFxtpGsS7LjxocWQan9rGpez",
  "key12": "5Fc1AJQNZXNT6JpJ2T4CJWcfq5BZKm6yjQysBMSSEfRaNc8f6tptLoja5ffHScL112mZknbQDJrfc9jvNqkk7KCF",
  "key13": "5gPWFP49bymoz94GXWBngdoaJy4U8fFYWrWy86ZERYZX5DpnsjgVaEXvRy8n3B6MaTsoeNr17gM2fnfMqi3BFo6Y",
  "key14": "4P81fDrGbsSGpQz5xuKgdr7CpBCSotwhP3zWvzRneWNfBm5JR7Z2JD1LjVvdzwg6bnxSAsvisFZe51vUq3uMtoBe",
  "key15": "2BsjueoAbVnAz8y9WdA912z4UXFoksRntFx6cvHN2JMK58eCWE8QxHsEW1RA6m1EckjjXZ5LtVdRCvzXNtoh2odc",
  "key16": "vzb2xG2r21iWUNuXpGC8d8PCMPzbTi1tSnjzoemGeZLrBsHtxfXWinbbVXKDui8m7JUf6GUq39Ji23NRvufB7zG",
  "key17": "5awZYkAg1yPGS8dvprWaiyXsH375MkHyeEAJKvrdQAVtiFjtk429G1MMWqmXChYuhxbYisMK6yKBxQzpBUyc4GAq",
  "key18": "j1erY8bPczArGqyde9rK9Vpbcp2GeSgaB5Jqdgg3LVLE9EfqUwj55MYvg2no1NxSgV2QN2vy6ZPx7Vpk72FghTa",
  "key19": "2iVB1Eth4GLRh9x8PsQsDRze7wLGPqPVu7ZPGaoN6H6r7Vzxj2XaU57Cr3uwThKP24XzYYcpWpc56kjp7SkrKTWC",
  "key20": "2qDJKvD6Q6wwWt9phMoSd6J6sMA2DyPhBCvuigEtqNXMxyW6nj1B5KBVZPfzJjMdNrP9yj6uWYMKeVNoAGbgdFiv",
  "key21": "2UVKTtBgmXHjnmqUExNUmdBSv6nRKeeT3eNCX5vG2f1kuLus8LCCtiz1QdueMcHCuU3ZStsvJA2ZrBggH41wh4GU",
  "key22": "35rNUtsDoRkMvLfYQQfFt81UPp9U6gVT2SdV9gvJLXj7WRqH2xGw3UeS8zg5jWbmCHh2hukJ6E71BywXPDsfpH37",
  "key23": "2nRRsngyYZGcKkkr94UaU41mUaSHhedA5UUcWEchXH6WHQGw73aucjNLiGbS8jSyZRqpYySrXJbK7G3HPfHV5MaG",
  "key24": "4LtnHPx3nuDXzjUdU8mvdGPqg3evfDURKxPrbdTe1ajzMfazpbWXQuT7iyFKuBG97ajXs5EyuJ4LLX4szbQojh3B"
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
