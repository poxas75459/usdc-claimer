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
    "4Ga2cGUmAYGaYuLBAzuPyCkRoX6iETMTHKiabfi8e71RhN6C4NjEWznnuQkjVTgEvsdP9JFiwiZAFEJHw6yCn4vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPq68nJ8LMKqyUuWi5ayD53K4ZF5DXfxvcQhQqiyAKPAws5Z2SwaCHVLne8ZPypEYwouqyVfUssKxWtZAnNuUNP",
  "key1": "5RiDtcDpANkWQeHkg76hvWUTuRyJRyawAZhCqX2Y73yxTPDR17bzwT6cgua81WanFyU1Seuu3EYD91jDwmZYq8SD",
  "key2": "2XHNEPHZHnQNb4kWo1SLB2UA7r9CxEdfuMprfSud61CgMgGJTbzG7MzxHBZnaHcBScPkwnWqF6658BL8ZUSUoBsV",
  "key3": "3UKCtkWsuzjqHC45D18QW7m7tnEBsvJRN4Pq4ZEBzTtGWt7FX8Afa4YfnHKvbF3jbR6fnUipRw5GQVMnPqLQ75C7",
  "key4": "51XTtG1DYbkrtFJW7gEJmqMq5JjH26qnASqQCm3yLd1VdGz3WMZ1U2sJsQMz15YityLMvGbDuj4DftckYrHJnBPw",
  "key5": "5R1oBzoD5fnrovC9q6sNnMXuXeq8CnPGYBJFm4kMkZwkLGPfDokZDJhGi2YLRjrbzbKhZzEtzNTszxNtSSbnpuQr",
  "key6": "55fRfnUJV2vPoBg2TK5F3ptaJ8WRqxfGtiFDr5crnzFLRPfcQnBjGyH9vzfXRnYRCmyyQx6KzkvYLVZw4vDDEehQ",
  "key7": "569butxJeGx3adVk2qJPxGE9WbgQkiqWnMuEJ8X2AtSnad5L9mWdAGPytbAPhJdywxb8PnXmw3Mm7o4kS6tDXQYp",
  "key8": "5jQRJvLJ6CYc6H7JpJJRrE2dfYrqBt9FwL5Kd3Vg9NFU9pd2Ud8QbZTDvkpLa18Xyb2j8ujNRNdSsMiJQiZN6bAv",
  "key9": "wDmuUNMBNyM1YCFEXdHzkcphuQuqVaA7LqbqmMBBiBWNbj2yvVkdbYtV54JcE7NH238efLCMFHYnRtXBBH9Lnaf",
  "key10": "2hVpJdkbbviF2Xjemhsw2KTPz72QthDEzC4sccVqKt691DHPFHVRicZEwUektqpNPiekh9Qdv1iJ7qPWrA2aZHoK",
  "key11": "4bk6wMsoXTEqbtNC1jZxjf5ZA7DAAq9WkhgcFXwVBukC3W93B6XxygbbWT5C2gkLAuM9FmM4UTFfwoKfrESvddEU",
  "key12": "2dArsdJVhXNy2cPBsqFCe5L9NNLfMrJrLmm8JhgQSesEKoFUusNTHPPmxY2cU4BeJ9kcvAw2TkDg9BqBzZSUZjT1",
  "key13": "2vc6MwA8kCwtZvkzb9Gn3r8M8gR8iAoNUMV9XNmEickqHwYPZiCdnATkm3vJ5dgrG88TJgE747ZDwcaT85wAZpRH",
  "key14": "2FeGsN7f17zLEHk6N95ot86GKtUH26BKtgW2gEMZ1uUsYtXUD5ZjwE14uZhqRUzwbQbbnZBWwHbiUyPfMgR6Are3",
  "key15": "XMwK4WhQvvSrAQrBiSv9JaJRhqn369zsUKutLnuZw5DYFqKxG43xgtkLERii9FWMkvgsxDdsFCxhAZLxqKTmiYY",
  "key16": "4sC9RcDBsS7EPurY94gWKGjMtoPBXLUB5DN3dtgpdo6BFTvEeDRCySjXiGrkJzEQDVjcgiUnJt4yavDCuDDrKmk8",
  "key17": "4atkbjdUnMBKsQAgmWjnbTeZA6RsvuRecmEfUG5Rvuze2YQGJwC1xh6Syx2LLEoYdTUJsgnxX7SnLVcN6NwEABAg",
  "key18": "4sxBkfBH4fJ57TWVcRXdHkeQUErsdBFvStKHdDwD8gQv2XM9zWSvRnb6tsczokriMkhL5TFnDM5mVKbjEhgEKB6W",
  "key19": "2TMKynERm8GhzPY5y8btgNLNHQ1gnYwskb5bP6wXZ18ApM432rQsKTKuZEytjJubbZEK8sQ7JDU96sPjSKqkxFxo",
  "key20": "4PJm7Ra4EMqZ9rBPJfcLYfWjKLmTL9Ev9HswPvhpZaFDHM2bNPW4nZFKuCDfs32Ub2cy6rWCjRWbmD1jFjCdtEzM",
  "key21": "TgXAfqvQGfByTpwgpNjtjqyq2gNiab4MrNipJdXnsgz8vpeHYye9i34ucXPcdAd7k6oKZrg4CwH4buCiYg88W3A",
  "key22": "7ivmmMpfT9M7SivQ9N2aF2yptptURcQr5KMKyDGxcT6Yaw8NgQBdQHDoC36i3KiVoDGFJkw8wWJmygei5tADJ7k",
  "key23": "5tJZWNhgfWmhaJqqmH46crG3vW9ZmDS8MbRBuzQvwHsFecPMPMiRckjXCaEcLCrta8MU7iaKXGdRHNHxaXSTw5HB",
  "key24": "2QdwWEptSYcgJjVtZP2QZbbkUnv2LE3tXD9tdFsKCgKfp7CKtAJZTFeFhnY6RcGkh6mZ2AYqtaw9M2BxX7B2k2aQ",
  "key25": "GpQwr2ukVxvwH58GVmKEspS6osEudKVT8JYspuyJSQ1ak3pWtLZ9mbKB2jAehYzhxPu9LN9VF5FoefgUyR2DTWh",
  "key26": "42JFyx8tm2hWUK8rPX3RuiB5vH77tLXQjAZQFqqCEhBYWEszwUHJRbN42SUNWYkvChaw14VCDDYrwpowUkdgu872",
  "key27": "5LpGjTDcnKYTPMPiL3sumq7NeQWc7ANdS81rBvvpLmTT5mY5Mh3PTyjSFS4ztq85jyf3u7SjB2MvSwg43928vcNf",
  "key28": "cqfeYPAj8FVxGnMExHsBu8L31VkttXgSrECiEykVahLtdez5QhFmZtjWXXMZPESSwXb2xCt6fUnfQqcmxvyPcBG",
  "key29": "3Ewoyc68rzKUxwLsHnotSQ7ej34M7eGq9KvcCG9xbAdTneVTWs5hnm1dDmRvhUwJLY9NwECD63ZT5C3hQdEV74y2",
  "key30": "3WVAUnxqKS6UeszuuV7h6nKCKut8MvTrpbbydeMfSBqyU6HnjP4XEXTFeXwWBsbVy6AMxPx57D8oAAK1vWzCnhy8",
  "key31": "3h3dDCThHCdRyJ9wYuscSfMJCqbsCLqqCBqk315ThRjHZou7DjADM7CJaftG8bU8XWT1tqsssJxxBskhEhzTaP9i"
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
