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
    "3BrycruBen9nJXvHFmuu4t6w6gydMrFWH4RjvYcyQqWjPgXNAqxXAt19DS9yPNojFMKiZtmHDAbTv2GNFqPrT3k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1DFquN489yHJD5RJhYRqXwX2zy7KdcsVkjTceqiY9XJWE6XZM415PkLYJmCKdVoACdqdMMwKFMcg9kptyePW3q",
  "key1": "yK7DUuHKoqB56J6ZkqfdxuJFvxmEEd6fZ7kkjbWiB1wsBW2HGdq1nHNgku1XBU6BLmjRwoq7GNDp6PMc6B7wTNs",
  "key2": "2axGcefab49PiiBQwU1QchiJ5yxsqoyDwErBeuBynycZus9q7cKy3K6hFiZ2LL75kUFjpHhY3Yp7WUfUzYvJpHEj",
  "key3": "2ZtiC7BTRbLdwXGoK574iodiqVjgU7GWdT2Acp1MujBVvjqddzcTSnM4qAfJY63K5V2SRJuPdFL8ZEtSMJnXRzpH",
  "key4": "CwwAphMLcoae4yR5BU2AQn8853on6Dwwe73tzLmyYFmG12TwzzLeHMDo7p678bwXwypp1ba4PEnabxwmneZrXdg",
  "key5": "3MpARTRKKMtENHxRtngn6RqTzExCV5fiAGJRtjUmPCDs3YaFfyvYk1LmyRTrFPHQHoM8h59zAsy24EpyzDriSPQz",
  "key6": "3kNmofQzSMMWDWnECjLuLtMBEiKLo7kptNEMTVEK1vE7FUy3CNuaTPbABcQjjqbLjML5V7KF9TQ8qanDFAUwN59C",
  "key7": "227BA6ZnCnGUrGXH3SkitcXyzUKfTkQ5Vz6b3siCSeNh7oYrizKzYTeZCnCj8n74Wci9ochBVQcBqQy2Tm2VBGnH",
  "key8": "2Joweu4GNJFjB5GXrp2BhEEpJyKbvY7KgBB9GEaaHQQzcT6s1hkigtBh3zFNF1DcMoppriQdHyvBeUSNRVjmsf7V",
  "key9": "59kULjcRqApYFMyRZPzQiWBL7fhWzqcWz3BXGsoNKL3cTPYe9t921RNbCtUNKw4kbAUtCAXn1qeUactsLr5mpgwv",
  "key10": "5ndiyBCLhY2mtxWZq3U9Q6YTsWq4wEee5rSvPVm6XFtn5eJLYKk2nnXf3YTgPDMTuRi1LCQknQzB5ZckH2haJyJv",
  "key11": "4Pf7di84uiqrnvTwA2QtBTKbWUMKKxthXyqi2FhGxbBfgkrMoRxnP5eioyThLjA4wK4ToUFTeqa2sXFb47jTh2NX",
  "key12": "D6RiR3MFwZc4cXRumxVWXQSedPmS4R4obmFdQh4sy7DqRJDgwUwFXkpT4zH9jmtspzYstM3p2aeLMVPyiWgnHUL",
  "key13": "4SkfMRY8JqU4o3Cqn9s7dEmnSrmD9jNwuSt3b2stwfsM2Dsif4JAfcfWqVfmLtNut7aCrXa9qoTXX61EptvN8RXa",
  "key14": "3HqJvMcYiHyJd34LRXjDWzX7jxo66m2BcrkL5z8Za14an6Jfz99CAirq6BF8Q5udNY1gVEvxC7UkkcH2HSR5cmJX",
  "key15": "4dRoGSrRQYVh6rdTA2Z2xF5Vu3Pqd3xjk1Dbd35hgtjkUQFf2bBNbk3fwvQXJYgz6nXSsFppyNauBHRTW9bCXtXb",
  "key16": "4ZHGD1ydPcUhckWpYdQs8vDXtdnxYV4AGAid3wwVMxMyDxdmHy7EkxAJz5vDV3ijXjyZJzgMyx8Y7qEfHViuJwx3",
  "key17": "vieaNg79eXPABEq58hodX3uE1Uo3Syssor1s8PxDm5p5VDdwSLGQfK27ZnjNhBf47Lozwt3dMEyXFPLi4v2wdYb",
  "key18": "3iwcZT7CqqD1L7rdsPF1NADbkqdjN4GGS7txoaP7A64iDFpq23Trv1uDbgT1f4VvpbeWE1WV5RdcTdmkFwCTee9J",
  "key19": "5Kyc7rGvdj2qBaTDYkEeMBLk7wGDadriiirAXigEEB7vA5XV6eyj6fJFVa46SkwRWUvdLniUB4hKpmVS8CATiBBF",
  "key20": "4pSJodvEZqwW3wifJanB7MFDU9MmCqx9Lg4s63vMsgTQH4LdMsotQxqJ9bSrMwNe9rGz73KPMnHBQtgVrMKPURpn",
  "key21": "43nzGkmBJqEJQSEh7PNvJjqtw6QWmdAN2oghjm29N5RzTGKfSuDXir7m9NKayEabbFBoAeuoyXaHjB4hC45Lnr3X",
  "key22": "4uWVSijjKL3bB4qYHzS5eH8FS2VbmwcaK824ra3mRLdGZ26NxPknvbq3gGYAPhRbFhofZunU3aBQpSUoRokCENzu",
  "key23": "4RYPh2gPfrNwXVoC5M58eKMhXxFmYuiNmVNwJj1veweFVn4ERuRWNTbm7yxUeY5NFLt21Ku5yP3ikLv2sPrbnm1r",
  "key24": "3ZjfLcUW7ch6k8eZnaVZ5Jb3GaSduXzZRTxEkL3rMq81NSv5ipFUhBPFAfL4LhGneJ8nJKmtLKgbLbX7TCqTk81A",
  "key25": "3musdyHUUxo3XMqSkdzwGarzjKeUXCFB4oTJN4zihFf6fZ4pPZMR2uqHRTn5CBujKr9A8yjVWcbUhR7SRiXXeCJm",
  "key26": "3qopYXzA8t7K4eCqJGuP7o6eKAqmjKR2UXXQY5AJGJB3Z5n7GqcQ7wfhgzxkXRCd2fapwssVbcZmDTnAMB9Mdcxr",
  "key27": "GG74VVgKrWF4c7QgDt83iveLqzwarccM8B8ryjQK2PWTVYhSeNZRyRkGoYyuHCJ6XEfseC26fxvyVyYMVeWANHr",
  "key28": "bY9CkY7FgudpCUtpoPuyHiyu738jQ7WkmPvMEAREzA8oyP5fDivYsFPwMHR25W5GkkLmr39jNa2CVW3MCFxT6wn",
  "key29": "bY5oVzyz2QE1tSGBsaEbtNZNwxFcUpkdEyd2YTNV1NMNgDfceCaCBZQhZLTvB5ciDrJUdNoufHcDA2deBiXw1jD",
  "key30": "4dKzzkL27NNP5JvRokKdDMR3PjuFdEc3hE7omwfsgSH8Eiku5NgyWwqLDqJvFX3UuGjREgJMba4NNFu6TuexbvVY",
  "key31": "5ev3SCkU8dXQREY3UFxzqa1XRyQhv5GjeoZKFCjjdz651dpWoFfo5WgyCPphLwzE3JBRs9e1o3x5Vwj7AC3zHZZK",
  "key32": "3W1eiLPKdn6jb9EmtFkUMY7e1rz6FHriopkeMzSpZR62jFqp8y9d4rU7KPzJBJXgpzvXLxnPj6negT6RGjpWPaoZ",
  "key33": "38x45Zjy5ixrVqTEsiX4s3xUsLNWcH2MR2V5TPoNHHHWyrXEL2TRqVx3CxK5fTzeGqABvE1znin75AY3pNfJ1Trg",
  "key34": "5ZSQbeT7GF8ecwQSnHUtgQecHL25LU5LZQ3JK4wCHzk4h33yqdeqpeskDLLvAv1LGjFvffjP2AKyb23se7jykjuK",
  "key35": "56Bs1LmRFV3rJ6fDLggYxMMtXFnU7svDqxsUk33U6knruLqJbCJoqQ9YYQeZ66iupJdJduAHdHSbyEUzMamC4URL",
  "key36": "4ae46iUJYJBDpfYaGFbicyh7qzSG2pt2DKxYrRYhqeGZMCMGRhu7TUARdKfcbJabyFFr8wkSJBSiCmsD2tWEesdM",
  "key37": "2a1akaQp49KyQixrqqwv5E7A5zv35sWPVvUTFNe2sUu1ApBBjxXwck9dGJPsUpqf3VKsYzAYTtcdiJxpPwyZC9fn",
  "key38": "WE1cF2Rb59PvEdDAMFeNTTKtCaaZvHccoCy6pi39bD7u8HGjFskwjbH63YnpenZdeVjDv4jnwFBws8BmE7cqCWo",
  "key39": "63xGgTqMBqXYWzLfsrAfcqsDGfHTf44S5TB94vMPwNgkfwsvNQqcTBp71N9hxx4sGZAKvLqqikAUNYDdr5PMop9",
  "key40": "z7xoYpNA2KRoahvZvAVGuHs2cvWNJETHDkuab37N7LUiKduvhPPc3baMXYVy575scDAJfnzpqnyejfaNvVGEU9j",
  "key41": "3xVu1zMHAGJYuih1Yhxw5fPo9NMXKRizhRh4rbDhMLiHByoCEU3hmsm6CNNDMcvSUCjncE9jc29ryVaPnivA3Wzg",
  "key42": "4UFBQXyjqGgBEkobbjc5cgq8DwfYN8NnP1grkC36HfBf8sfCeZHSmzSAwXY8mzcWQeSdCRqJ6EdG4NHHGR65yg4D",
  "key43": "47GRpH7EoTDqFdEx8K4BiUEBWP6mWXJDHtki3NdEqLn3JQPUBtWWuvECgWiCzGntHMJkGgPhKM2PJh48Qf3Uj3TT",
  "key44": "4z3j2H6T9ssrxbu5LAzZh2aH4JNGPigqGaYbuXbaAxxmfPkex6ByETrSWsygKuiFDgUXDPA8S6zoUtGyDwiKtxko",
  "key45": "2jMsZRo1wZgcmFR8HNaKEMe8vcv7FwK6EVYiFjvMxZp5kQxPWDHGYtWZo46sg6JRHtJv4aNU6nkaU7dfaLix78a5",
  "key46": "3A9KYhmoimmT6MYpMiHU7q3MutzRWeWf3rK5yfZmYJ2th48VQHKJXsE1JhMtncAezQRTrREj34nEu5J4hpoDUix4"
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
