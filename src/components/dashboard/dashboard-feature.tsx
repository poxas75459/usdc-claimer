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
    "3c8gAS8d2LWoaU27PLa6fcBykvCb3zwodHJnBqMBqSnpnPJiagMxmKhYsWh4vX98ss6LzSMUzueuPNQupBLCUDTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tp6u8WrrRGZMAqhEdrYrKvqswDy1RztW2Y6QmAzi3qPX2N1QUWx6gkgGcTS2cBBLno4upi4Q8ZpicGBsi2XAgjs",
  "key1": "9d6emTPJCNqBWeSnUrmKRXpfuukff18wSjaoUpefQYJQokaV9dNmJroRmzdaJ4oY22eNBsZbggnmePzb9YVZyLW",
  "key2": "8G3ALiPHv9bu8oSkru5C2qVFkh2HWuKYYt5kQ3zouChoVxXfMkchk8PRvDGff8PudSWbMaiaCZ4c6NqDxmn1dnw",
  "key3": "56gLrj73TvyQjgASotpPUNYVYZRaeUDiEST6FruXnjzFosG4KkPwNxF6kPgoLNL8L26ygYjBkvawuSAoeAWNfUPV",
  "key4": "4qE4VLvr7n1ehuuxBCmD2RSRhRhVfx1FB7UdvmL3T6YbQzfhU5ZfWucJHbqQnnR4K3AaM4u5eNxB4LMF91EzwQT6",
  "key5": "3iWkiykqwgY8JFSqgdZ9obCbKPVTBt7b5yG9G6FhaLF9JNniCuve9p9FMShwUAquDNEfJudxFbS8EztbzhRkSiMG",
  "key6": "seKGjwsCBpUcNpWNgvs7jLbas1SQrBy52rAunFW7yisFyusdKQvHedXxDKK4j8X3S1CxZ1cRdUf86aTxEifn9GD",
  "key7": "2A5ZuUBdv3QxGZn9mMMwPp9daYJjHGokV6a1ieE8PLxoxpCqT1jWsMrfz5THhFHLMmyyhRae1b4odTT68DBeshaH",
  "key8": "5UsQDtXfwvnY5DxG2XkxUmVWV6pMrNqzZJH4DFncvZvrgwg1JN7kMqofT7Kvt4YmM79oQmqMwmyKLdUAqjDiWG8t",
  "key9": "4yv9mk6Ykxp35eMH1KZrTvpSLCuzWMXag4Fn17HEknJcWPpzXrPdpik3Jy95izkK2QhKEqezpyTgxMmunMfzjucT",
  "key10": "5gq88t7whiTRqoDcpQVyGuCqEG8GesPq3rHWPtoU5iddaN8fTKgEsijVYVZjR316pGjrzm2wQg1A2Spsoiv92Sn7",
  "key11": "4xrCs9qoxATSXREKm96GhVLqr9RzD15L3duLuKHDa4YgmRhddWdEcjceAWW2RgDtfmC5etqVspEzwMD7w1cWrzkM",
  "key12": "47mpd2NYp22bYwES6dmNxEFaY7v4n7Bt7mAhA86gT9UaJgEUa3vY8See6xAa4RST12azi1KdrKz8kosSDyG2LfeD",
  "key13": "5TTL8CknFwKXLuDXGsJFEY16hVAx5mvEKePnvxV1djhq8jtcJtRFGjRyubj7ZxhVreTr6hhV54WcVNQdHKcuUB2u",
  "key14": "5z5aR1puA1HmjbZ1KWD6hoHHoZPVqX8kwEey6MnrVJovDishTeATVvaGDvBjhocRS7VdPjdS8zhqcnmKCysiWJJK",
  "key15": "5KzjC8eiqnCuo8jG6VtFWbZNYdNgXF6WJpiL7BN1vqLdkm2j2U4fKbDhvCTVPuhAWz4UDtd5iArCSqDK7Zom58k9",
  "key16": "59LEZhYJx66gjkoGotxmG7VkqvGwcsqJxFhWLWMayFRD7Cn7ejssfxeaGjpVvrbD652jKwNQ5UMenr51zXDYx2EK",
  "key17": "5oUKDPB1jg3WRMniKHscunns6E7Zb3UY7YQAAyE48RyKvXYx5imGTBA6wpCenAeYXnjMhH2QUafqTxaHii4qoMyz",
  "key18": "5CM83vwgCpHAhuTadc64ctuvrrzfAr9E2VfS98nukCGZxjYy7aPFPjLXaBFS29MC5Mx1udsqoMPomRpR9CtniP5H",
  "key19": "5mKbRuxLvgGVd1VEH3D6SKe7NfvwSEUo85fGzgFyh5fbDfQu4M6XZcWR2NNtBV45DRuZkM3D6dtqJ2YZJGR2wNKf",
  "key20": "3ym3RKqTqcfeCE8MxQgaph1Maek2CbSZEYZBxxiZtVT2zbH8c8Po25RuYPtciLCe1FTqUyD1MvtX8v8QHK6QrrqJ",
  "key21": "3ZTyKtVh9Jw4UnXkNt9Yvis34fBT5PcjzxoFHZ22vjzMM3eK7zYFJNcaauizHdCiMtnE8VaMnt8uePfEjq1n8RDB",
  "key22": "3Sg5efdWnCUP9tfaBXmQPUJpS7qXuy84LxFG88K1nWYcckB1c7VEAvBLqv592wxagSy8tDghyB7HrfAyfJDt2kjP",
  "key23": "2myLUXswG4CcmbArVGhDYpkbN9ku39VT3yCEryysJWrnU74tVxGda38yMZJsH7M9uMoy4rhooM9prpKEykVJepUE",
  "key24": "3gNiGL7oi5g14V8AGm14ZxT3YVWqnhG8hpJXGHPpL5NNu7DuxkPzq64v5bCfsVXDQnrXcC2r8tQGz8EH5UgydWGh"
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
