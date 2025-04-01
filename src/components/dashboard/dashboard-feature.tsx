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
    "2to9rHv3izefM2CFYAR53rpgG6rY2WVhnsWaifuaBjDqM16C7q61aEGKNKwLrmAvb4AJ8Fj2A7TmPBWzujmo5BLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Umt56VuH1tEmszS4uQF6nfw2wRVKyndv4MraJdx2hb2X5k5RXcp5u4jZ7XFLruLeKL7LaZBwMrGioBPyY4cDG8B",
  "key1": "2dbNMSUsn7AQtXjcduZebMb2FfJaLP6amx3Wkxnp2SXVu3WBTHHg5U9UHJ4Xz9Mxnwwng4Tv4qVyAcgevEPGNKJd",
  "key2": "4HJpJtX2frU3WwdxVECSXw5LpuCiRM1jHBq4WhyGnESLkGdLCEkxK1M79fTouNbDmDPLUxtm96whNQnTSpuMa2yw",
  "key3": "3F7QmuLr8BC3CDgLg4cY4FQGywWTemH6Ybuqao6YkbLepFxmjA2Sus5H65Q91cZmP8t99qh23oAeS4rS2kdrts6e",
  "key4": "4f5xmfrXkWLPX7mgccw1iQu5oS7cuyKXWybhTgqRQAL38xJ1487HRfetqZPHJ2YWnMpYMCroqwv2PEgggXJgi6jX",
  "key5": "4ePLxtZjEhdmUMDat9ujGDSDkzzR7XqzeEAXWyTzng85BNoDKSFoTLWpQYxEVQus3kJvqD1LBYHvsvAtdEhJpN4x",
  "key6": "2EsBLJDywHG7gjiZAoeVRSckY2LWLiVgbF7jwde3Rd2fzLEuFWEm72pKZaqdJGpW1nxWwjmdJLCN4TySCeP1hiD5",
  "key7": "tUe2P1AP7ob2PZEtz3UvnRKFvQgeoDMdwxoTayhH4f1zKVoRCuiQ352qt1zqNKrLti2gcAoBmSgySKYA2RsBtdp",
  "key8": "3MvqL4HjNAruo1seg6NqRB9T5rGXUvaB8mpLn6hrYKr56X4yHmTz1MB3gWA6NUPwJRmGhM8k2JC3MB84rcmbCgAz",
  "key9": "3xedwLaM5G8Z9TvpRS4mvUr3tM6RxiXV4FuBvwqaYtvwgEdhRn6THxm1C8hrC5awnbiEsT8qvRwToAR8iFrLC9wC",
  "key10": "4ybX93FouAhUUShjBMUMV7hNrFYwdWNS9HPuArEK8A9ifXypYcooXpbryaTq5hbkqRbMGyzsw5xxvWnP1aFd4PA6",
  "key11": "2phqYwkMNP7USAvmNEejuLLwgwjRTKFpmULoJHqUGHayjWCmTg21YWUZX7P1cv7N12bQdHkGe1sZrqJJtLwtWjuB",
  "key12": "5maw21ikPhXVfKgAyLPzv8Gy5egD9dFkpEjBQXBXJQjFojbYvXUGi9tnTorHu1oaY3RHFx1K88JdQ3C3EkwwhKsC",
  "key13": "z17zmZtg6sJDPKQgxj8KpbgxxpW1gScJKhQAgnKY7TmAB1mK7dhuAhntQQmnxtprQiMbW4sntvFQGruefwEGXKA",
  "key14": "51qdNwba72nBciwqGTePzsQXGwE9RxyGYje8J5TgBJDTRd5dPrFqi4wFUMd97egTAcf3hFRjfxTfKx1GXHX2CHZF",
  "key15": "2nm2bLj4EDkq5TX8sdUsYHQNcTTBFYGTWaomi8sYwetE9r5sY2qBqs6SpasNULMMfbthbrPaKMwxBbZ1y5mDw3LK",
  "key16": "5cbGhJBum1UfZEex3zAV72F2c3B2HwGy2Z6WNroMhcBTAswHqYyze8iv6TMxzED5G7yJCQADu5syP2HWwA4ZjWm6",
  "key17": "YbNscZ5DNgm3nmuVhYnzhpdGZ4XL8CfhdgKtacYDTnz8Bn3NADiKTGqvNnHPmZE7bERJmUzwcEmxmYaHEQn7puk",
  "key18": "3kHnCx7ydscVHwThbLtGuEKkKDP8y6R1BGcP6PLeCb2NJKkrtmNRq3DUxtXbqYqR3cxbjYD3ZUAfyWBTEARLSstj",
  "key19": "4knBsqSF6pTnrLJNBkKV7kdfxUtVjKUJsJYxe7BMvbT57bZxmxoyQajtkVKYGg5FrwiowSoPh3MDp2JwYXgJxsc1",
  "key20": "4Rf7QPLGeiefFhHsAFx2KgdRv4AJ2TNBn5gzVi7jNVTaqPMrqkNb42PrdBKBVx67NZRawzAZXbSBEDdTLb9cdoYv",
  "key21": "TRfcoSrQhewBccrnaTken5yHyezWFFqN3QgLNADeicG8nMubwc6T2Uh5jUWUpYdQpGG6Fb1ikJzAFwJSebKpWWN",
  "key22": "bCevkbNsDL7eRJNSRYztNP4idEJtUxQ9j1W7tJJvVYqZM9DQV7NacfhQQfBCZPrKTx3wsV1uSAM4K2qbGRGj8DB",
  "key23": "3oPqNFMBkitucSHi8XXN9PwgXhSW213F8bc4KjSiy1bKzNTTxNvXnKN3RGDcXGX6DjCuZ2qoNuprdtEs3rZ58xyR",
  "key24": "3dxzPoGBBSzEzroaiANSZxG6DgAyr5R2wGwNbGoADk3eLDQmCiBZuMtUwCFAtz81KBqQYwmT3AB5SoLRxVLn1rHa",
  "key25": "4qE3X8tMSVjbubTL1BNdgyPypxJjPQxCCV5uMubqREdXErnHeq7gtsy8wp34Wtaqcqjmh77EjseYYB6cCWaLMxEM",
  "key26": "44ux54K2eg3sAvdzjTEVicBhsaHEL6QDSGvzarEr1ynD2DrD4pmuLeP93SLHxn8WN4WeMAq88n7y2AWbhdriC3Uw",
  "key27": "3p4VGAWmPWYwVobNwD8PLTBx9o82B9eybjcstzacAt7vg1nvjUcXhKEAwBhL6oz6JnTGWSMHk2qE5o9PAX17159A",
  "key28": "1cskiYdUPwjoKYxQG3nLUzsDFVRhwTaWxMssQqSpRXgzKSR85pAHZfg6CGKhMCxyY3CBqyED1sgX427SmvRkktH",
  "key29": "3jS4XAYrgtYGK9V5Bg1wL6rK8DKBfSENnyARi2fmp3MLJKr4KtsGQ9b2g3Hk2FuF7QrjteodiZgkT1VgVR6cq5dV",
  "key30": "4HXaNXLXythGrK3ai3fhXjzsubT2TepgHjRnmDN5BSdKNuSJ84gsPRqEpFZTB1J42bAugM5yK3fxNwuimsnZgGVi",
  "key31": "2QSYtbfqL1vn1PVYozA6sHUcVHFXXTnT6DKRqc3RQwyd2dYWVJxJUF5nH9yaL9zctwXXxTFjt8VPmFjk6dnhsqHR"
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
