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
    "45dGDFSUYDSG4PtcanEvLesEiPhFv7bc22ufXBtUq1n3Fbj4fLCkvEZneWFb7V14gZvjUM3q5miKKmV7S2iy61gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64j1pWFiWTCpnWSVpD5ssCvfQj5q1et7p3V2Bo4JJ1A1mtLfysV9KvvToDxJAmQQ3RyoL5YbNPtRemNpYzHEhxqh",
  "key1": "3aAZbCbSJJKqr6DTAhVPB3KiWd4cXFdaDRk2XC4ByHDJt7tLLkLfwa5Q48FSgx2KkEtAJibnEAbAmiLJmQuCDWM1",
  "key2": "3TBKqvvvAwuE6gtEn4sxTeZ7MSsTBDszxeHLiq7EqKFr3fcX8epyoB3MtgUCJZEhHN4RSQDzjyaPjNWr3XWLeZX4",
  "key3": "VWU5TU4RSRBjaAQpxVHvmkndRvw96HsV3bbXdBqmQLCuM3Agq3BvrB2RaJJQdVHujkKBEhXYFJqMtXNeGmEXiju",
  "key4": "3SnSCEAXqkkJGdswnYC4s1AjFVrUUFDS3474bp4qKHqw9PY6eQhPWj6QYwcAmhxToVbJHqd5GctzKcxW9QrLTT1V",
  "key5": "4CZN1kd94VzybX48KZst7vJYs4KtLzegofbHk8QK9VyRxrZdmEsFbaZCAKUgcVsUq66VH3avUMY6ywUVAAhvdnE",
  "key6": "4gwn2Zi6wVhqqckpPKVCoo4DCXR41ARYS7PAWjWzJwRwBjUUGptNjoqcMdqRV3vtG11NDtTbbNLi37uwxZvohF1Y",
  "key7": "44WuRrd5PCk24uEMWpfew34uXLfYp6FUvV3bXiTuxn8rQR7JNf4iEtauVVEJmMm92QRht7Esm6dhujEn9Ar7WDLi",
  "key8": "EKy4Ftwk6gKKY3iCJS69FhqzsPkaLBGmJkB7noxAQGWGhxNWugDNZtyHVJQEB65rNQC7weoupc17UJrhqXDWhAu",
  "key9": "gDN783PhhJmTeLMABiQ9ZhjNf1Xb5gb3Q1Vie3yvwgfBgUXp7tP3LdYSaNWJmMvNhTpyFfJpyX2d1JooMFQMu6t",
  "key10": "55FLH2RQDSt9ybLFq7g7FGgMfD1aseup1sq1f9Hborw1LwL7nwifQ8gGdNRMxrArXUqqdthEG58qFqqAYJz3sK1b",
  "key11": "65i4Mpuud9s8aWGCTp2dq8xgdMjLAj6EWvDf227anV1d6TAZzkwMWHxBpo8BY65bKRvi1DK6B9ALiXiRFWdAnoGp",
  "key12": "4VuB25LvA5UgyyRknknCyrjfAjz6VhC7ncap92iSfe7W2emfU2RReRVAuhLhU4sXK1gJ9G1jLfnWadDewQbCkAUB",
  "key13": "4teUnJfYm5fm8cBtmZTuWiWJbzYLyvSMHFzLPchXB5Y5Na8M3jGsJtUbYH1RBKhigfhwgicy3q6Vec7Apw5qk4Zd",
  "key14": "RiDp4x4FaTrnyJ8RgB3XCfdqm8267uxZVLksD2u7dFrgFqc8ovPFaa1M7jiN44arSmvFZPMXwspbMCHDcXXLeBp",
  "key15": "4pFof6ogU6JjguBddyQ8hVAXfv3bvmJ3hEkvaf9PeXLTLwxRk736FdKvSqbyVCyRZPg4UQDui16CLYVprKcQGKQ",
  "key16": "mCjTimmenUx7Sc1fixtodZBYYKX36tSviWAKB6hFpCk4PFy9Dh3GoeiV7gQwtu5t5q6nDVvAhnDCp5RpZUH5zjk",
  "key17": "qBi8YfNv9rrqwNzSxVefkbvp64LgAikjXSuZs9o2YCyuf9ViHKFERa6QrX4emUVjtTBNgyJKgxR6FiUuGwBZZXp",
  "key18": "479miKT8KhSqWDbaMEX7tEwFRM6RbE4155FSsW1AQDwYsxcavySXQHZvQox5FG3SWm9HLEZa58kpt7KbLZQjcLQK",
  "key19": "5Yfi1TQHqzv7nfnAWCZYUhWb1rby9FwBiZMkxaBhMZUm3GFhjmnPoV2yMRT3a9GTFC1nLgj99MxfNpCdRsYS7XPj",
  "key20": "WZZQwjLEK5WPFDBCpmXo8RvFB1UcXEwNsKrQmKiLvBtw4zR4oqrPiqcLg57x5FHeLjijUJeFKnhSC9i8Nf1Hqzh",
  "key21": "3qFQ47xyqGL4uM6bJ67ZND7ZSXCSu35kjKTEuvjpjTQhXFhmL3YiN1Ue9PcJ6eodEjfv1cEwicSPnEKq2eywXs1X",
  "key22": "3v57wdfpGkJe63bRTF3WPaZm5ug2fFf6hhZUrQHzVArU92P7cFzGDsAtcePUjCVsVeGZYMV313Eqv5DS5kN9Tvpt",
  "key23": "JQVUs57guae8pHAUJop3AcWK28BxHb7hjBbBXVmvAJmX99F2EbKDUBZ3xdhKs93pTanT1BLNVseumjvgJoNu5Yk",
  "key24": "2XPncLdKk4EuM9q3yj7NBGseW13UjUxMEQCe8QbhMmEf36gyrKEndao4WkkjxwDLghsk4gQYS4YQtSkNVysTndJB",
  "key25": "2oeuNyCXnkeYovzBu8d3ytbYgPmE1Wnmi7DLWEuNuDHiyySZQK6iDeT9RZSjz3SAR1GjzSwbxeGS9u5asGbsjPGn",
  "key26": "3VPm5x8gQRunBick88zMo7LNpy1WWA6eM5vcfjtiUrE7CLbiUdLFTfw6DvjreeGdURsswcBmdQ2QoMD4Cx3DFJXu",
  "key27": "3QcJUBc2kGHCoX1tDUYXjX5BiBz27TfpTVZfKX9fWukhfeqVK51EeWhPFbRsVcF6CmwjkXudFZJtxyEteGkV3pUS",
  "key28": "2UkPBUFfW9JhTsg6uyg6mMvbqtXhqJzZr6jNZ7U7cb5HeUq31Abknh8KaKSVC6zP9UycjT1vqB8kiynSeWjtfriE",
  "key29": "5QBmni1ogoh6hnS34sf3JjLHhGkhBnTD7x73qJZ3qkWbQxi5WjcQvKP17v39S4YeVhDbuSSDDSr2D44FR6Rbijdx",
  "key30": "3UKW4FBYqjhb2d5GSxyGzyWKNVh5jCcxtpkjbA2b2fgeN7jKKnhjP2pKdnQujwgYiLsTiMEHBdf7TYZBUfV4Uhk3",
  "key31": "48YaDmWEjWGD4jHmzseAYC7UBHtvFudESYZ6ZPfM1qGNLia5YuMwymmKHSXdgxg1Dx7eQMFzyPBqPCtS3CHVbFLB",
  "key32": "23Bcqq7kGXknvnVWGf4ZWXj2FLYSGwfUjUrTwf2VQJDATJXMneoe91PHifzTwhqEDxJXduukyWsMqRJ3TjerMpy1",
  "key33": "b7DUgdyzeT1kxHHd9TYrnMAPcqMBfjp7Ya5H7GzXcaW1BLP8rRkR8PTWdc8CZFbtukDZkeebdPDN8544wiYWLVz",
  "key34": "56XVvEZnx49YHqjPrqJuF4t9c2uoDn44CcnedJEDdDjJB6EMPtB8c8SjAV8J8uEMf92S7Xx8eVEdSVf6hGdCG3rJ",
  "key35": "55UZh9wAVNWHg2jaTjf1yvJdxNQNYayGM2Eo2fm9r2V7NkvaCx2sgtWyoPa1jr5sdX3mTgTncHcLScoucmP4rm6Y",
  "key36": "T8qBURxKQqBRVq1sGWQHid1WhaCYu6HkVLSAfFMiRj6uT2TZuEC6SyUDacdAo2VqNH1MmNPTiVWCXWkdoQqQuLL",
  "key37": "3Vn8VdPvRdRkAULTqURsZACQ9GHGQFH4KPWG4DaX1bZTZb8GonxKphGvbCCPaKeVVkY1J8zNCfL5qrEC9ocxRec9",
  "key38": "2iCDMkqHMew6kT1HFTWuedDNbiKhDWv6tqzxRUpLrHcMySmLi37pb3bR5Ge6QCpFyJLxLNptz6vqfB9kQz5LDr82",
  "key39": "4UEaGHrGsGMe5Gn91vgdcErtNMDUWikS7fZ5HQnX7CAFQxjXM8jZc5VrAdYjWiYZzEqe3mMHSQnmg9BP5mmYNxcp",
  "key40": "5T1a24uXqnaB2Q24icxY4UEYEoY8PkPiDjD4RUdMkPEcty4vyGgjushL1TCRazy9fpau4DZtCNSyHDzYCL316mnR",
  "key41": "2ok3PgbX14QxFcXuArjckGFbZ1WwofpKVq4519ApNdS4Yrj7dZW3UWw8AkDPe3c81RQWsWbw4S3FosbQZsYPXVbp",
  "key42": "2rNHVotCssXTP8HTPeHWcSJArD2PwUgUvCfQk3WycCqdnW4mQhsjw2Q7qiATqEUYz8prGeYaxWVp7jadBKNdyk1c"
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
