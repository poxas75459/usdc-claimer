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
    "2kqgptf49pXwtcEXD5HhuaHkhTGDgW7nHqkDH1BvCmXYQkRpwyBpMbBC4bxmy4UAKYJW4hG8xcFXW9VmRzpcw4X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WphzA2tL1XnC8kLcNwnKxmhMFttkVSuZrG3utZgqvgKcMVQZVMKbJPP91tWo666odmV9VgStM3JTPLgr8EuUYif",
  "key1": "2ZatdMtjP4rpBx7hDhGTHBSTU5BGLAzU3C3vVzaPHehs4KT3FCoLAm5f3EinG7PFYn7fLaG9zK4EmRkR1eJeJPtF",
  "key2": "3FeeKThhWjykhtkAh1C1AVKUSY9jUzC3jWp7CAYigMvwpfeMiDCxRYRM43fJKP9V2WzU4qEz4NogkJC9GDcKXD9G",
  "key3": "2Yfov1C2q24uyPLuAdxgozmBsr74J8zHkWKcNZjjf1NkzKZ4zRkEQ2vygcPyQXfjREu26harnDBFKvCxcJ6RyLri",
  "key4": "3dTzAyNnMNQ2TW1WygYZKkDJH4ACekWtUPZvCSPdpuqzY24A8yjP6494PJ3uuQQ3WgvqNSfb4aSxwVNTkwZBsMPz",
  "key5": "5jjyBVpYMzaS3JrVcdEAN5DMpLjn6KP9pWdTtmTbSGWVwvCqr2cCMaMCz7J51abAq2Nomc99xPaHXMAMxa2c8Ggc",
  "key6": "5Xc9gZfr1Ge8vdWp1jJMY8jpmHxqvnMfmrUitjpXUW31FoiG3gsVk3iEj3rrUeRFeezUH2sviuJex4G2mBtKk348",
  "key7": "2yeK6GspwfreeuXYu2BAhspb7ZevuVMcdaCaceS7gJnpr8LjPgJeRu3kRNVJcv85kFmGxwxMUXFiKfKYcmkU9ZwR",
  "key8": "2swtfYtSw2mjeVb7TWPcXviobC1HscMkdseuBXstXMw5Z1TPo2n3hk7S2a7rD7Y536BHiu98f8QmM3Po14krzfHD",
  "key9": "o4zHp7XXWZXsxG4Sa4sXfNHVQ68Vy2Nk32Dpp4882TrRPLSLZLGt7ykgrLhDjsvZLHdhSayY6WRmy1xzvrnKtHA",
  "key10": "5ooHVhMgsJUk9iDfjsfH3ZR9PsyVLyL9QD86KVDqvbRK9vCHzC5pyESPeo614hSzpkgCgntLjfsHygnNjTAfoQ4g",
  "key11": "5ohehYMWHzmXbHMRGsaNmmXvkSWy7GewX1CZ5RJ5E4E7ziLphQA7L5n5mrCjmZ2vBARWaG76zozNLMi4naQCGzve",
  "key12": "29EdZSifbGCzne1Q4geeHmuYnN7DWrY7tNBSzH5LfBAm6v1NFyhCxzMQC8oy7dPrMCQcs3LMxt2UZ2ZxiPjPK2aP",
  "key13": "3RPXye8qNPqfz1LP34xeh6s2ZXMdUJjEtdqHoBbxuNf7wUWoVBfduBWVho8fTuJFLPZ5peXQpbAUjoh7KcB7g2H4",
  "key14": "3BNWver2QucYfpn2xAbypuMGgbshJFsm5cQipVGXEMhM3EqvbsCawGJ8Brqn1dBQvb55PWEhCX58rCSMqctP92bX",
  "key15": "3dboXwag5HXKzx6vAJiKTerv7oJqmsn41dMYYZkcQZjAgfrRnREFNyqxCoFHr4xNiTWDG7HYDe2JkptPi4pFr7zB",
  "key16": "4GqNRdUwEvNX3hVnB5RmeErYGTcmG4r5TzeGwSAHycYV6geFNbUM3mCz8Nssm69NjxqNDQeF9uzWKVCUM1p1RyVs",
  "key17": "4qaCSMYGEAGjS639JgnbJhRCu1qjmh9y6wJ1jqfT8FXwdftEGTHxqPMRWY3uqBg7VfkWMYboGYkTUcCmKFC7cVRM",
  "key18": "xruJccwFhShB6EaDYaEkbUUrFwX5E9uZbEodbCbVS7cwrxz7KhZAJXYUz1UKtUi9s2fAeMmLsqD1RNppRvM16FY",
  "key19": "5CaNWR4AWug6Jw4nJi79PTDyqBnrPtL8bVvQgMYBDeyigQVRFizKn72q1yf9NUv7w1YN1QT8pQUAyNTQxPEbf7t7",
  "key20": "4XByH6ccERhdyBvsmL4sfCNo3qv2MzgLKH5np6hvxX7GuqyfjnQY8bFiYerBXYRypqJ2UK9x4dLbxMye3p2eKhuq",
  "key21": "2yyFvB9kPSQxSvQwvMipYv9mrAGbCJwQa2e8Na2TFP7GNxtTwHiz1JhnBsJFLVXug1MaY118MwfyfQMZ5pw8JJVF",
  "key22": "4NMKPdcKQotZ7SXCL4R7nN1nVBDBztURLSX6uf4C6L1Qt3pX1wZot6DDhDFy2yzvgFcBXVhTTjP1cHhH5afb41aC",
  "key23": "3ukQayAqcCcGxSxR7WgeJ8MLenPKBLCsxjZJXyCNtWJgVnpaRH3U8gqfVvdfnU3a7P9unyr8iHyNrePmwzN6fc9n",
  "key24": "MQXDbF65yFf53t2tEsx8VMUyiCrnEAnKZyqZaVsPacoddf78Q61e2mGeYoc7nhK5idTFmUVhqNQRP7og1e9YKnK",
  "key25": "uvm5V2dZLcinWPJ5tCcFu8DC7VSQtWYWYE8NM9fFayfMjzdphQBrcKDGYDcvvGqG7iBoEiFyMHimiQHfDe3M8dW"
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
