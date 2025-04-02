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
    "3gVh7T4ezkwLhLAZQsKFhQnwvZYj726f2kdLUsGVQxHmyDyjyhSai1nniKfYFuzJwvnsPmvuUjPx99EN8tw2jfrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qmKPySfRpHuV8iX7Li77hX5tCQgrCcc4ZXQqV46gZ92noH275bQwbgAJcMSRhdrtB89RHRNcvyLUotCoB72Mob",
  "key1": "2LdMfHRv9kNKX5CKVchuBep3U3e97sT7VCs7EQjoWd22d6LRPxwhcrNHKQGqJrysFM43iTDmC2uDGuYt7tUTTqXb",
  "key2": "5nrzzjxeHf3NppUsY6GhxGvsjUHQ2nujb4zygzVWgfmZXU2782hmad4Y1BLoHsrZ2ZL1CKMWhnLH75Qte4qUvfeq",
  "key3": "5UVetNrGDroTY8DqZCsYTzvJvu7RWbvLxd7Gqy378xyKWM6gFLHMZXMwCLBXBWdQNCbhnZjDJDZi9K3qb9tWPhJ7",
  "key4": "5r8rWuqaHXghHnyfHgNR3nvdWAGasrdRYVNCKCD5zPeTCgoLgTQuZdh4oLuNoECLhkr8vSbcZkQcfZwESgdVYZVY",
  "key5": "v3aWfuD5D47LkHEQfGNbkmLtqx7XkuTBzkVxm2zUBXKRg93xfiB6ax3ZtwD3q8iLzKxgUbXgrv8u6fmNGdnbZp2",
  "key6": "3RagGDGkTjpwncqRJ3CedifhELLSzBPVni63VPiLmfZHKtCYKfvjqJVENGHcDFciTWP2mEnUCd3rRq1hNMWBywSv",
  "key7": "XN53xkfyFLyw4vRnQnWwxph6Pr4SaC8kfcFKS69qUrUUmYdV723BN2TLdV33qA3Zpv7556XPbucScQQGmfBPAaH",
  "key8": "37R51BZt5RTUMci14znJEqG28h9acCVWXKqpVnoMsDM1f96ponBAfRYsCDgsu5YF4kqB69Ujr9D1FCb57xKjeq6E",
  "key9": "4ozysnwygDrqTmMrVW6iaX3ERchNmCAgwtV7G8nE7XYt1yyGuk1MsLK9nQP5mTjZ5fUdH7fbD3EgiSEqEsFFcsQ7",
  "key10": "5QQWRvKnSBkY7Do1direoBxd1nJWZDybPEqHbCa2x1UeEnzex5g78iZAFbLd96WynhtF3BkUqRBjL2NDgcdvZSX1",
  "key11": "5BE7YxwUSE3XtmLBTmqqGgRnBh7AbKUkxH6Ez8C9egJKgPaa7mgonmJz5qXa5eExRb5kL1ZVnhv8Ha37B7aSYbuv",
  "key12": "32qzZLH63XaPf7F52CSKNR7SpsY5AqbLtJVDgvEGqd3Vq2UtvUSck8aWBVsXkzpM7My5nk1VR5Ex1YByhK7DhKXa",
  "key13": "2UEF9UCpmcZcNqmGz1pKhwWiP29HtskiiUtu3BcmFjRxeiE1PkxH3h5zDe9Hp33Yj8YKjqpkhGZpyr7rATTcBw5p",
  "key14": "3zJNHkMMXypKYiFBQtNuGU3XZuwyT5FmM6MJgP2WGLguPPz9W1XGL1NGUEAPQU5ZuYkTXjMTCwpfTnV9DNPJLaSr",
  "key15": "3g562KK22gBihXRZvLEsBtqx8G3Ri6ivvhEaFv8ZoRrnQx2mzhiQskAraFeSq8vXATfJPWXwK77afCfBoxBTtfcS",
  "key16": "4BymbJYSupWZUVjRqZXXTjJSCK4NLttqpssTcTGUwXqnstsZszURnpiEuSovQqpxiCZ9SKZyczxtagNAE7BPzq97",
  "key17": "i2a9uPknu9WrBNRfyFv2MpHZa4B3Vy8U5cbzhiTQqxt52YfK9R6fX9UEajWmwhvZy8n5u2hYRDjzFZ11LdL9RX8",
  "key18": "59XXZ1USxaANPXXYKBMW4NXugdbBgKbJf7jjKD6WMEGr959HP8BrQGYuWN36ESmzahbCwRMz1SsD214EKxbpHwto",
  "key19": "8e17heR8wxNwGEGfa2z3o82oRdJXY5vuD2khJWvvwpwms7XqpFQzap6ehtyKJK54gpm8mV6iUCmDFHMquh3nWiz",
  "key20": "28WksUhiogPDdvRAFEMTrF8nLJEqnvT4RgePBsKdgdNnXEmKFr5MtDFduL3Mv6yMRqC8JZQaPGVh9SrGX9aezV2b",
  "key21": "41MvkVYmgQLZ7KRVJmmMXXCVEe5B3SE2YyBrrZm3X51SyEqFBeVHQSfp32vbfBRKsVc4tNTddxQHLtCK65zTrEJQ",
  "key22": "4HP6831FBSr4wcNTFxLPzbSrKhz846XJmPM2CRr1AKKSicb4SkbJR3YxC2r2bcKHP6Eu2KoU3My64FbbdHp6L4Ds",
  "key23": "4F78sxArsTsFu41i3BGnzgdWvbms3641MwT88Kz3hdpS5qpn1xg2SfJEkEa8AzfpSirTHmRaAHsdnrzX1Ja2FGb4",
  "key24": "56NT21X5E8tE1sPfujXkxXwggnBCkD7XXosouMLkVnnQc2JYQ2WJGk36ocPmYMXCim3vNSdQiNCQ4cjC9UMWn8ay",
  "key25": "2bBq9ZPpNLewDffRidLghB5SaK9f5YBy9UTxNBMKH2eHXy1SpB6h66yhz4h1uW11MECaU4wL88SNVAg6iEssN6XU",
  "key26": "3rbp8T9kVX3KH4YTEn9DDeTYVb6nWp9ZdHoxL8yh1bs4GvXSzKUiGUerh4XmRpcZ6mfk5YkBV12TmGEkabY9HES3",
  "key27": "3EUoAMnztJcH2DCayW9keXhXHEDQwCjAca4Yp18yvhSU6wugGF2Wx8fv8DrLHgEAn1s6NfuDZMAmAR76ajMYaaPi"
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
