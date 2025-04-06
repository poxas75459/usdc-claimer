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
    "3YkEyXNj4NFQuCtwZKAQjFAb2HQZ62Jcdd1HSucji51JD8jSVcp2qmr8ufkyQW5x1VhrstDNAP5NVKshdhyxxf5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmxBxnXasKy9CHv6a2mYbK57fsJqQuwycb9BQC6gqCa2MZnWyGcVYAmtGkfZobNe8sw1ZC8BhN3hsqbaCWGYEKp",
  "key1": "5qtp1P1Wf97y61sSUMELQuLDY85vCdcb6YQSAEX83Qu4icWVyBshwxobCu7jy7wxk7jjDKVoU1SQLADaE9Be3yMf",
  "key2": "HDPpwP8HZdd2T4JGtYBQcwpKUnCk1qTWhvbeg85uPFdwopge7Bm4Qe69MM2tPMLHoeDhAeteSNbDzFdyiWdAzua",
  "key3": "4MXXA1EsHkHQKX7mmhw6Vt9m1npsCdh2D6brNumvLDsmRwJqmZoyDhtfEMPhNu8NyEbK3imbvu1BrW2NkcAgU37B",
  "key4": "3mmyiHgzCh8L2CvL4wxY7uvLSUbnessgJwBVwad2ArvVxixhUep57MCiy8RWrc7DVQBrFfzQVHVybwHU4unpcPyd",
  "key5": "Eb8t8Hb3ZuWLTFvzqvihTLMuVHnZdhEzr9fHSQ8rdw4YaWJ7G4yZggDVpMfcFsqFY1oNR5sutK9zNdFmF1QhCkM",
  "key6": "nhY4VQtGhdySNim59CNPcivGqUQEeEbAVFYa23Ze3gn9ApBF3ZzAtE6nkp7sMD7HKjAnisgFLpBsq9uUYUg6iP8",
  "key7": "3BAgzDH88HJH3NBvCPxkP8VTKyQuMgoHtmiS3Dk9FhNU2sJmE8ebrrNXUhPjEBu4BRUcyqxuTt1bqdwYovXngGtq",
  "key8": "2JXMxjphbbMbxCe5ZGhfk7hfzbAVmACTnasZd1BA4J7QmjWc153MdbnWGa9NSEngidKUSb8wpyJ58DP9wNtYT3KT",
  "key9": "sHZtHbZR7aCaVxtDYTEhNQrR6gFifqem3uauM3xUi744MRsuo9JJS3p6oRdjbUzrmfoQ7NMMBmbCqM12i8CRSvF",
  "key10": "57iHGCqvHuCkBF23bBPESWerSMae31N2BGasUyeDNFtdvosChVWxV22uRLhntVE74bMQvxPHT41G3SJSGji55Vqo",
  "key11": "4u2BumzYTYT4JoTsp74M5f14xYJwghFjZGTJc1sgn73dR7DhXzRc8txetbHx6CS6Dvy8AkgMLK92cvUtbRShd6ZH",
  "key12": "2u4RNEZZdyAhMpjFcqQCU3GU7EPwxpjHxkEjenV1nekDDc2xBhY2SKwpyAgwsUB7r57giYtwvn1AG144jTNnB7Ep",
  "key13": "4hcfnuCu3HYUXjpWM9sZiRmunEjJQBja9MFL4WSLkgqsUD5KLZURSj2x6eLudCnDMAJdzSFCm8j3caq4jKeF5XCr",
  "key14": "67WNjwY1hrYcJDBsZ7DQQRfr1hx5hyQ6BYChrDh28vPbM9KwUTnixeo6HUR6NC4gkW69pYwUbEbxFbcMRncq1R8h",
  "key15": "3rViz4VUypDtEr2Pi2kieL9vptNJY62S2TtFCW8Ld5ofWiEJ4gtZyPFbjAexL1XF9GEJ7k85dT2Y1eqpPT5u8Q2X",
  "key16": "4nVemNn5D4c5xHUZQb1Xjhy9cfYY8PsSzGXwuS2K9YeRmMZx4qofpYv4V7oEwj29dyWRVon1pMyubQ3yRXHGFV4N",
  "key17": "3fqNaL4g8NevD3kFjUJkejN7F4E7pEF83NXxRhFFxpqB3hs7wDVMvgHu188JsCeLD3PFskDh9R9mACuc73gvF75A",
  "key18": "5oke5446YHhPF6SjbGr8K12prcnEtrwN422RgrJbtdtP4PdVhYuB59hPV7zXsWhvGhPef81FgEVcddxTk9KSk61c",
  "key19": "5ecDZkMaNFYBW218b4ww3rYRe7Se5BzMthzpomPk5naJ5DgsWfRdC11YqFPvTEi61PTegwBGqLVsVQ7pHpkkbvsc",
  "key20": "655dE8UaWAgjHFntu9SNMRvTNk4RV3o6k1E5qv1C3jKLaA9qgznzUS7DJWTS3dmi6PnXswznqnQQqwGDwnkeBk6j",
  "key21": "dnZ8w3fT89ickM5Mon2JsZr54Twm6GwdCvZeFVb6Cuo4wpa82AqrDeA89XpR7NMXHgc8ySk9Akw6Nrc2AVjyADU",
  "key22": "EoLQj7BZwyTargfXZDpKxkcDp6oKju7DX7hDS3Fy2VHv8AGbNBeFFwhFGivzrJmgksBaMuLakMQmbymdk4fmFpC",
  "key23": "4E1e4BC9rBHjXd8tJAmydZZW2ETwQeR16E5T1K4td8zUotosJJ3Wo327ocD6TiN6H5ASCYyCngNMzdxCUAm1DgLM",
  "key24": "4JuZnbtLTVicRzsxS8vP76hQDhSYGyGt61dpfWiU9Kgwyf6ekJXfLd8yW2AUjiZdmV5wtpn7DCbZsCo6chYWs8j8",
  "key25": "QZUxBBxyxe8j4uxrTHTFrjHzGnvbkVwGdbmF7jfHAirBaZjh86QVVmM7KJ683Kp9S4N7v9bp5WE1ErVynFyrwBR",
  "key26": "FYPJ4BrgDT99SjXyRUyLkePk3CcdKntgFcc4ktuFBkn71D8FEXr5GjRK7rXgvCamCkztMiFW6GLwVfABAe1wSyJ",
  "key27": "4Lv2FfJfnr6VwaPVfEJgkFJTtqotA4WuLXpDv5YoKbxT3qZBWZjrtXZkvt5koFmCDjWe3Jd1YiAshp7SaRL88EQH",
  "key28": "3yxWEP3mNcGKErhxXmvzNb2XPQkLnwC6aHw6qjdSkkWoKTcvbLRfX53o6EdD9JiQxJgUSKYuFtHfjpxebwbdSXKt",
  "key29": "2g26LBZRqqVvrPNguTZziFBqhDZRepQWmQG7LvVhfv9FMGvrumfHRAKFR4QFyrjkpbuXLdS6eCPijVEdyFzX37jD",
  "key30": "5GYFeStptcyaHYkmH6H4SVXj4HPrxcdWs5F9dHjbrnxKNxNMzcvBUN4n84nnEmS71pgiyKgZWa29gbzfnFGZv7A7",
  "key31": "2Zcyb98ck6aNjoCwnGuwkkCbf5BkGJtPEiYwmpqTKPoYTM5Pddk2GCWR19sExLupgLmBiMFFz63ACQgCJvJxnuAx"
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
