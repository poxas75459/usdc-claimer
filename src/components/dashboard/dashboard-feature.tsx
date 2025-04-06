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
    "2rodCs3DBsGKps6dgTUmpUvCB1ooSPSbtC4jAMZMdDnBoRs2taemaz8js2pSdTccRtjdhBHF8vwuAQaubMtUmGWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rwp7emF4aGv6VDPdrkzm5kMpMbQKBH5cS3rtMUYhkzNPwEtmwtN21dJAdrp8iXQnr9dHVMCSEU7XGCkh4Ac7mwg",
  "key1": "5S8tC41SPT5C5SyZLPXXBUiDZM9HHTdn4UeGewSRPFFDfSj4jshuxTFELPcPU9kpNn239JKSkZ8BzF3JRsDzMVRS",
  "key2": "2JZovbUmEbfPJaxADoTgmECi3hQfhSn68zUmCQ5mNPgJjPrRaHxCJucKf6xBj9wJBDwmFBvQEPxrSgVHJUPQ9tx7",
  "key3": "22hB1WwgqjuRMn8QMJHdu35WJeuMym3opQWGYpXRftKjBkSkq6BLbSniAjLjoyrjDxzb6ogPxZLYtGPpdNyVVhfN",
  "key4": "3wU3BjTBWC8JJjg4SU2nc5scadzDmt7UJwQw8Y1sgTsJjmrSFKDgrKRg6Scexy3i3x8NnzkN43w6kSha7RVqSrmE",
  "key5": "2KrNVr4MR7d5iSSnT5YQwz5GMxzm9VV2pNib3rkXiP2TPCCsHb3RasyNtshSQKijFcdruCdZUSLYF5AwjWsvx2WL",
  "key6": "3QRQV9AmtK5Fr6Xu6Xh7Teid8KoWSdkQNkk9RtSjq2iwkedkHNpbDrE5jR2MewoY1tRpL8trzQqfX43xwZSEwioV",
  "key7": "4Vqmdh6uScdPTnUUeBwrXntASEJ4eMcrK8dXtaUjqM4V89r5HYxDRRYYaSfhNXpVqMPwQifHmjRhizrPLUC3Sqzn",
  "key8": "2SWpk9cXrvU4ErMwgD9ZwmN3LPZvyw2itx5BeMaXoLWaX7NuS5Q6MPGwxS3JyHAcmVwCsmev9s44bMgNAtFtbCCs",
  "key9": "5yGzPWBPqP88BKm4hpUT3AQTSt6QAwWagdgF3jnytArdPUbDB6XtjrTsgJsX3FshTJ7bQawnEaTrfTdDw2WeJ7Na",
  "key10": "5coKc1emQ5GRVSNjZjpd8wisS8ZcX9duH728ExDeFuSpaXc61j8yyCDNkndgvzbCHB7dLUacysWrupcRRBu9GtUL",
  "key11": "S3sxWzbBJF3KLMehRHtH6N3UX9MiRgStEZBbBKftptgGVGHXSWkxFZSdA1zssCsp3UehAoKMmty1wdTetjU5er7",
  "key12": "2TbQBcqPeERjxbJQ65yiyQiDVJELRVAEAxsTk317fTrE98Z4ubdZZWSXEzpPgWyxV39Zc1WiReTk3X9YqCNMHogX",
  "key13": "r44Mh4EcnTT1dYjJ9GRsPWn27LVH4W5cjWhzJ4rzZe4AAL3Fir8UPNdu6bsfjL6xJeKGQtsR6FUMPu6hCCEiyd4",
  "key14": "3C9sUQv7xaNHBjZqhwjyCaHpZjPBZGpZFhWd5hjMAJezFDCR4z3Kacz1p7yjMcQhF4BnDVzBz5k5uFyVCkNj4845",
  "key15": "3KSacmw7g814sng6dHvb4pE2KxYqNPQqZGdEHwhozEPXDqntkZtPfr21QpXR8zRN6V7XXDr7ZUSKLwgHT9Yh3U5j",
  "key16": "pGMNZpwUTg5n2np39Fwr3vkrnmxRnbgRotL6mVVZkMabjBQsjzfhFcFJR1eQiS4YRrs6C6LGxvhC5fhvGQrdbBe",
  "key17": "3SEkX8iCfwecBxV7MAWHhcNboobFPEC6SaF94CCehJzxkKjava52D8qNd4THQzSPrBwXgUd7gCDNVEvQy5AN11kX",
  "key18": "5nSeWRFpXZkJZzafKGsvghaitUgY75eaDsz2HGHyASdaFeYs1uyLunkAgUgAWmJ41un7xaTDLwQK4bR2nwaBFPtF",
  "key19": "3AwWe2jRYuPW8oXTi8qHZLA3CEaC7T2zBp7ygxJAin61rVKCVyPiK7gfsuoCi7hcnCrHYnRWw1fkP9cj6no6jnfn",
  "key20": "4qN8E1XKYKatEmngffUT3bFvF86m277WmJHhSky5VHSJcGNT4PH8eW7zSDm3CqZyNMXPMR5p8D8HSpUZZBZP9eZq",
  "key21": "2o4W6uyfwkELYpHaEmA91bQRxp6iokeJ2q7NKcmSTWdjsrfis6TpxvSEzQetHwrGHoeq6ibno4jE57eMdSSjL8Xt",
  "key22": "4G22qJtTBJ8kc2hT1rSEoopg3gDnqTbh5yGsfCW1LBvBQFAypATccMyfjw3yVB2WZRwYrZ1juYo263rJ2iaXNNL",
  "key23": "2hddHC4QSKMJNxUCfg6aP4kf79WAiwC8qK3boGvesp4SkSXXogxtPeggEnNF3ouEhX7oYhaMjhHKihssfLLZyCei",
  "key24": "3fRuGqtEYf38HTFNAYY5fVgmumoXSmAgCFJVoTq9u86so8Yoc3MwjkobVbun266P5ujiwcSAg3DcBzcLc4muMW8U",
  "key25": "39n4HHuweGg8VN9b4G3rzEs6DFWMa5m3MVDek1e4apREmMqmTQgf4xoLoxf4dmA44sWN4NniRASpHZo3ZafNPL62",
  "key26": "5oVx7dCBNbQV63HbL9f5M4kEauvhdLA9Rh1vwz3THEzQDMxAsVS13Y5ABFYpNTy9rR2AgerwjVNTqqNmLenAjwX7",
  "key27": "3zwmNk4S347oZznjsFvpyMK9hRwefZeDn6a78wcW8wLYYeecyK7AfLhkWvZ2kijEtpSWzRtCXa5JWo6mYqbndgSt"
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
