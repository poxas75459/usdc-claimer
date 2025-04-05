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
    "5GWvhgzc2rM2QAQdarJmEAJx8rGWtswtAsghN3fRur5XSnkTrngiBLhz96YTVppjPWNCudeefxtsXnnaCZsgpp6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBxwV1B5xe7PiuJVdNSGJa5in7dsddatg5MSRL8QK9E8kuRuERtMozcVCNdhBVxSje2GLmPvuY7N62FZZtwNUJM",
  "key1": "2h7TdJ8xdV94FB3rWgKriTA48vPUxcwWgwfCbPqNdfjji9xWbuqAWhRGyvQVX4NBYbgusRmG768UDYsuNpGiB6QW",
  "key2": "2dJQsSnDXnWgBUKrTrHGB2R6ysQYunGvvhDjKdFmffJMGiehGpVX78weJ7SfdERKbV8LMVj235Ga6BtU1L1eMcW7",
  "key3": "4AbEXubFuVTQMmk4vDcxqAKSFv6id2U3j55NKye6q22Qh3bJRTf6STA8HDuqaCuR8DWGBxkqzcifV94pM7W4CFfp",
  "key4": "4pCnXSgX5uM2R3NUD7Gz2v7s91yvNeaRa4qPiEFoDK6bx1pwxpKi49vJRWn6zdLYz1kMtT6HmnmXYaTCxc9ipK17",
  "key5": "4tZoAN6tV7iVaE5kf2cjR9z882ccH7SsjpaVRoVx1gmyXvrC245Kxw2AT8ZCn355XtfvsLCa9KsxVzFRPrZKuNzZ",
  "key6": "63EJxJRd7vgvosy7FqHZHSXnC46Jw6CMG3YnE1SfBzkWRgbuqErftZjDrv4VCoyJNHoSTAL3ezEcPofQUUF2LLKb",
  "key7": "26VfPS5zQEV2N6JhXA8vvv2FrubdMhwVedN15ezn1ZnJ76kGwNZw2khW3fbCUCrn5bJ9KoJaNegd4uAiHT2VDAur",
  "key8": "4p7X5dRwaptrsCsTT7Nk5Nbfh81zuyTUR9Bi6zfDhoJVWM4Qs3e4gjnJZzS2KC4ftgG1GDWe7nsKYMsWv9TFbG4B",
  "key9": "AGHTcCp3N6B7kZBiTHEduj4LtznXPMJZUfRtsmhFg1zw5vyz16dRysn9XTxUEdAsfqNi2UQD5j3q1NFaeEMF8iT",
  "key10": "5tFug34nrwWmUEBtoKko4zX1jPaN97sfbCK1FHpe5D3xTuc4xM7LB6TefDc5zr1XzDuBWXM9HACJy9JP2jyJsUyx",
  "key11": "2518Uu9WpcGc85cw96LeFS6MAZaRX934tFRfnYDCWnZ8oyasEVbLvUog3xfnoAK5FJBZChi9LsMBnyMpDMDQzpo3",
  "key12": "5eQztZTXEy1PNbKkcSASm837ifwjEi3oMzBMhNWqwiGDBcKEmxXixd9snJNBC4r4xB4xZhz9hBY94YmA2rb3JJYJ",
  "key13": "5fEanR9aKLcT573ame83ZAM6t1ueSUrq9KJPVRHrGEERi5wgKy3Z4tjrS9ejY7XYtMSCK5wdt25pbMTnH8JF1GwD",
  "key14": "4UxaaYKV3eTmxjG3AoeNovGmX1UXQ6wiMcGBtBWThJMRd7uqjQ2GbH9iDiqRHQ6uTKJ1EJwHmbxHMPCUpSLaULfb",
  "key15": "2HsxwjUvDPG1nHADmr9WN8KBKzS6JuRa6nq5rjY6yUpVa4c8xwZMVVz7tFaSujAjhUB9u8qvt1G4kHsKXPbT6KSj",
  "key16": "4sxYMXQ6UKqqL8LRtcpEqM1RsV1uDt4RgqXZT5x4n1fDeUAYZzWZcYLSoaN87M18Y4Up37fzETjvD1JoyL1K93NM",
  "key17": "3UkPx4gmB4UbkLQ2snu6YDrgnew2z8eLg8uTRMuEc7P49SwAJRZiwR9F4k2BbPMaEJ2okXNQnopBB8Hs1SKzsbub",
  "key18": "JNc5LhXoFjgWf4JX59z3B5K2ZVriRVpWyozPRnCXYTFRyopmo9tz1H5DpHiR2M8Go1BgW8cSEo4NhBqaML96Fpi",
  "key19": "2tEwFBDqxsnizDUkfq7ESPjkWj9Ux7kWUZTvF7ZRXoNRAQjJPYNxFzENMm3pzR3t3By269mghzEPxgNNruyrzNU8",
  "key20": "5sbNYkiMLKeMHXbe2x6hctntyVREGyEXMqd53idaEmkKRJnqxzpLBqQ1SWhbzMtKAyudob73sSxEY2VmCc3rEjd7",
  "key21": "8uykFyMeV8v41139X6VgSf2a24b737CrMqHJmBQqp3PNEyppMNbJjhvVatu7kh5YJf2r6HyzxVtaDaqLY2AEZre",
  "key22": "43CQHrgW69DnAFm8VzTCmkDfZcZLkrRQZLPNmZATfXxoBFQJByuUEHSaeDNNMbVupxXrjm519GdqqvPKxDYdtenm",
  "key23": "2XXqMgM3vGYY16cqWe88GxuKMTooRNRjYBXjWS2RkgUNq7g7ar4k1CfzMX8zzd3zEBUgY3FWgvhJAEytzQqywAWB",
  "key24": "2BpPm2jrDfyyVG2jNa7u4E1VRUy6S4zsZSrfHz9HpeJCC9k6kP3RUSxF2wVtdruGVJwuF8eezsfpf2UXqFTG6g91",
  "key25": "37H1wYz6k1wifr9vQQm7DK352L2CvCLe6ytPMwJmf13rBsPP4ywgUVzUYzYqa1cL3Hxpnprq6kPNVQo6CBXARoqn",
  "key26": "5cLyY9joksW54ddUS7d9h38t6EB1gVHn8mRyTarnGQz7j6QorK4yaGFpqH8omH5CzSyHGk7141ZhUZwGMHGTzCp9",
  "key27": "itrpe8NRww7qWCisncwDYUnq2ubs59rXPyahCgapdfjWHypQkHF4A3TAAmSyhBBhj1TJKHkkXuQtTCRnrRejhS5",
  "key28": "39j1nEHcD53VhrYNbmwWJ67p2LBVyrRhMxBjZeohsRy1okpU41Yf6G7zjX89pmFTq5xiPHSSevk3d1pt3kbraLN2",
  "key29": "49j1EmcD2zDezYvXPwyB2kcJ3Usk9cG7xb94daeRWNufHsANvLnQDYPVQsCMjd6XtifV1QsQRiN26bmznSeU1eru",
  "key30": "62NMFHpSfYeZ63dL2gJ8Z6R1beLmTNWo5NfLuyERbfr6NwXX7TDA9vWHHyAa1vgvkRQDM5DTzVD2aLJshnUUYjhW",
  "key31": "2Z8AD5d9ahUPKvyLgQZkSjpa1HQLKec2iKdNXKc6PAnu5p3qKd4HWiEcd1P9bheZWLMJs4Zh6GfjTPD81P96vTuQ",
  "key32": "5kJhbYUiYrEYMG77r6zvBxtnxmQx1ahDn9Wp1Gxr5J9nPfknHFMhh3bNECLXLxYM4KNreY6Nvf9MeohYiHhfd55h",
  "key33": "tbUTbbsPBfM894J7oGwPtLsn78R6pBXuWKbXvLpTaqmDdopYnCPnDMAbbu69y1T4KEy3cG9zcVm7pvMXfsXhZs4",
  "key34": "3o2dyQTZ8jfpKRvGjeUnbZyzU3EyQT5qDiCMyB45wZriqeFXji3RaAYbKez3HniDCAvS55YP6AAZJDJDoWrVtCCa",
  "key35": "2oF3SQcRsB8up1zhMbhoLSaygs9usDabPbSkE5C1k3m1VvejcN2TRvuDZNWGa5oPrBRcBkw4waxnmKBKmdgSo5TZ",
  "key36": "4RYwPsWFTupdXpeYHgpvriEyVA1gmeg7CMH5bB9uK8MoJojB6EQCbJGRYrvmryS1oshA6gVLiVnVRNjhwmS5QHhf",
  "key37": "5vZfogSW8dnqKtXEJGMkiG48MfjyTnWP3PzqpagzkcXue1wcyJCoVVLSHjNrtaXr16E9mNeuLjmmgxoqmW8Dvt67",
  "key38": "4Sa6RUzCSKsF9GT8weV6ByhJcwgo7GiHypxq8EQdgvxdAw5tw4e1nTzwiGfkuNSZyQJj6guiKjTLu58ZXVYz2Tdq",
  "key39": "5JjPNrWCP4uLo1VFAJNPEBYCEWWzk7ULj7MNoat8jPmee3nwj9NFFGjRpfjqvErGPqVuH5nzucdh1CorfmgkP54R",
  "key40": "5me2fwawd9vuaj8TXfoFYdjpPBnRGoosLEE3uYji532fVBncoFzaBUKTFPndfFJYeRAuYwSutat6eiCfsW5rEh6Q",
  "key41": "rHabx2tsvjg9qKFpNqgRDK6BBMYgp2HdUgJtfRGHdxmpQBhRzLDefXt7nmA8e178S5UXHYTEJz3VBpyGSkatzSf",
  "key42": "61JDmab6UF91zsNHdctN19L7Sorv9ZtXnsUEAgXkqoxX9CZKC1Xvrvcc9mZJeAzLUhfWxDmA4XP7zxAS37konuNA",
  "key43": "496ycdxaL7Tiw9ijc84abqcaHPz5xcYRK8XRAMWagRAxXijawwHUak864aTvb8as5qNDJVTdegLpTrhpDS63RX7N",
  "key44": "31CZ9zkbqeXvv7gEstF4tahJRFNWZ6A3g3yWd8T2TgFKmT8aGnzTyNRiiGHqMhmxhWhC3CJ3hfUENCdHqwfEHCZk",
  "key45": "4DiXr4u339wKhRirsMGNcBBSumnsN2aUxvm4Kt5my7x92iL8hWLi877GmRrhkakUARiwocnFhxzSuVNnjP3EXvMQ",
  "key46": "trSsRERS2iDVZteDozqfZKbx7BWMakSThq3pYe3yRQExsrnftDQVLa58kvz2nDNC3sYxaRdT7Msi8BtzjJHuuao",
  "key47": "idNty44RMWvFsBEgw7728wKwb2WuttgkWRs7pzmSRZHqHuUk39YzQxtpQkw4Q5LwS6TqP3PaHJaLjjPqtrV2Ptz"
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
