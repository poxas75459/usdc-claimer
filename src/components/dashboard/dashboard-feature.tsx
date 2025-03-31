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
    "4ceXAgUcvzMtP9iExqHCbKfNXYKVzUnEsN2eVG5es3tNShDxdX8ANfnWCtKzpb49Rn3YqdbkUjM8BfXPH2cZPr3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uiLi1V3yZTuGjZKrrqKhpENyGe5vyUvJFNZjemZmWPRw53t4A4F8witEhHDro8iZFwZ2gDZp9UqVkstoWdRtrbJ",
  "key1": "2auKvHViK7DCqFa6T73moenNauLWbJZhELk4sN8jnFxEwgnt65GSWVdELS8SEZswdiv2KYwZ1EvWdYCkqXHbPY6y",
  "key2": "4DRtvJxqV28nSnLsxy5NGUeoUCGQk7Pz2ZeoDboVXpj9SANXogHnmmyRJgfhAP81oSo9FDkjD3aFf2zr7HseSbT4",
  "key3": "5r4JFv1pRsCNRat6ydsH3kZ3S5QRqDj8U6i9WWgr5Te6u6m5ppHmY5eCgPjk49hx9BZD8AAK5m1x4vosWuDePqTD",
  "key4": "2okQfdxaEo9Xqh8Yd59RKHyk7JG2GuPrvzwKhrcPgYYJWpyDgmg9YDN5U3sUv8rwibqDcAvGFJm4AYMwCzgNrwxL",
  "key5": "4D36tHnWHt7U4D6uaxTVyF5scTfrGcgkHnyncUxaZ5FoZofg6wCj3qzvdAUCJLB5f1bw2xP9KhUXQqEpmdsyU1AX",
  "key6": "3K6uqvgCRWfZnk8d3YMRvCuurW6JwrfY96m4y48V4s96G7gZoAT4o586EQf8XCKeFiLjhrS5LoKfaDMgwYQi5ToR",
  "key7": "5dXyn8rszLbbRJ5dsNudk7a8Q5ogEX4BQvUiCLzEZS6Hgvtib1nhbatbfeYSCsC5mN8vrd1XiwQeCJTLZaaXVr3D",
  "key8": "qLEuq6QpWLCFomcpF6roYLyyb4Cp4vpLbXaCySKfjMBvZ2CVCor8bcndZLrrcXQ2642yBCMcD4io2FQSzJFUhf1",
  "key9": "4DZ3Tyqvhp4RmVbEiCgWDnV9s8ajayCnmqaG2mnF4SsuiR5AWrzVskRFbr92EGKSXeRqtWD7EbG48AQ5Nwor1V5a",
  "key10": "3MyHkh8V938TsMfi2GyfGVbwKvDX9Cs9ToBXEtSrFvJrsv1HRNV4mTfvhaRRfwVhzcWL7zv2DBuJgcQWs7WemtQn",
  "key11": "26zvE19VR3Hr7xtWTbkqAJBbEwff3B2WW3QdZgcFfyyqnY9dbH7UkLm6teG18UDLeGmYLNjdkNspe16soaWPAH7c",
  "key12": "FXvVbPtbseXhUSfnKTmSTkQPjSpFShkvc74BLHHcWhLMNPsYMx6bmha8gkhZiQoX1nnFEs72dv7KaCcY1TbENQG",
  "key13": "2YDSmkjU3xDJwa2EAzzii43MLAbtrT5ag5QD7iq3rUt1tMMMywWwv1oxcFqjtVwFqQBrApmPYXtXVEmWHynqYD8L",
  "key14": "4hjt1dyA3JuMMjTCFZYjAyXv1wApzMgBwWW7n7F9JYPiPJQk2cUK78n1Fh3feADiZbmYhCtZcSTXzBUn1TWYhV9b",
  "key15": "381wLgHtwauJ3mdeAmzaADTfh9PfdynrbtvoJrbqyFH9LaZSR95u4CCufockk6HLEoXQFXCUKsBF3LQgpXiifJ2v",
  "key16": "3Df5HaB82rpPnpWmnHeE6sYQ8Ftzy71cuGxGniGgrPqQvPVhZVNwZbd66T7oxHTrh28pQkDUnHMeSoahfMXqNA6W",
  "key17": "3MDz4e78GEAGHaAbh9bVALqfLXFqivNwU4zJPUi3PnDdrZGdgTT6Mg73BZ3XPhx6sagtLKQhqJrsrkdmYa8JJBxS",
  "key18": "3ZN9rX99Y4MDeRUFNo7iHpiBSBD67WgQg3ME7dqfXEwNFGKsJ9kt7UJrXdctCzAWFhq6qacnWLUjxu5gDjAnrUAr",
  "key19": "61A5hKK5DSUzGR1HsiGPX867BmwkRZ5xZ9scoRprP7V3kh3Ba1fM2hStqxRuqvphQAcaHKQo1sVSncWYdfjv8HaW",
  "key20": "2TCyNAGotmUGfHAcYKAz6QXchf2e1EWUyDAAdNm71KQLrXotmFX5YZnPQrtNVqTFHTKgamwk6fFMniDQHYCEtYLk",
  "key21": "5g3SCsMBDMr15t2HC9T3pc1UaSJSnoippepP2bgJSQF38trqm1sShSxBb1HEoH8rroo3ewMzVBWmkjPgkWoL781x",
  "key22": "5EyqXXVtuv6Zrb6Gs1Uf8HJrDv7H3L1aKMaAEsEcaazWymhx7YtH7R1JuYktxqwMQdZ6uhNAM33wZ969EYGCQZfV",
  "key23": "6XGS9YPjzNiPA3Nzk2XGV6xUqxVJ43Qn9p2UfTdFnZVkfMNL6rgo2Uqku2cwCmM8J7Lb9EEi6s3DxrE5ZsKnSEs",
  "key24": "466YZpjyZJHUywmCP2GzPhchX5dV1xN7zZ6aGh1Rz2EMrZtuqcEjifPz6qqs8PsyQWTQ4bVpBm1kePYwu11WSK5N",
  "key25": "vxyeYAE3PSafyN5vQSotNDKuJQQmqpyph6kUo13NJueA4B1H1PuUCMW2U4zueNYnARozsNpEKrAR6oioXv6rt7Z",
  "key26": "Lpkd3xiaXH7PEGUFv6sW8AE3FF8Xwtr9fS2A6L8i7i8aM59W9BtGkN3S8g9ppZwoCEuxyv3uXdqXBaixRr7rsXm",
  "key27": "3L5dGtaXxciUy6gtK55N2YNmxZkU7VjmyfJmwDRWr8mhzzZzFPxX3XYLWkCuHxZqisaTTu3TyXUWhAdqFfVr9468",
  "key28": "34SbabaR1hT7kpv6kwEuQ1jXEa8SDD3mZYUTTUodG2c4efGQNAXPueUnVzZx3Re1jgAKeemf5EJx6dnLE47LEmeC",
  "key29": "KAzACASkLYsEkAezg6RAZksffARN3bFZnQq1VgEjRBQTwn3exPAM1uw7yZ1L7qZ4ehT2Yfh2Z33Tur49tEceAjn",
  "key30": "3g1FMKUzJqu5C3bc5ncVAMRLHzdhaUPD9eLEM3LaVxqLJ26gwqrqZr1dSCNohatGf95XGAENuctYkvQBm8ek2kDc",
  "key31": "b9QyDRHzYqiNqmAPhqc4BvQDYFkqyTb5nrG7vjRL4bbzQk5wi985g7zKUGiyU1wPA3AYL5HZkGEQJ9rouaHDRWo",
  "key32": "2mUNmqRoU2T4WxgQ6mR5j1Vtx8WQ3owmC6M1Nxmm3q5fTnaMSw9GQ7KUnFXgTAgcmtJ2dxvprBC87U2SHijVcE1b",
  "key33": "tLBQtw66jgSjQSJqxkKpUSFLzxaBoT5GXRcbYGbQrTLp7HfJgV5GXVeezf6Bxcq1roiwMvNCZWmFjwGrSsq6RT4",
  "key34": "65w8AtsYCMpnuVD3JfmA79kjTyLbQg8xaeWagBxqPNz6ddtF947aQP4p3hgjWQ4d7pFDotS3dXaQXqVPEwVnsffN",
  "key35": "4gtKdWT6ieGrGGFBqWNwE2aVt145cWsxoLMwKmWgme3kUxuwEF9ke7Qhq3W89USDWqrnfWx7mbaqwmxJ5kziKcfS",
  "key36": "NQSaPw6PBEGuiKxASnkp5uVVSakSqaiWGGt7zb9nJBf9XgvS7rEy2fhTQvLTeaRMUmQonpUuQnvdEndQRw4Srov",
  "key37": "47xoCp3eR3HAAESS2KbEi3oWe4GxZJWsMHWusunwKRoCdXsSuY5uTomMY3QqVVCpsGGS6kEFVRvNg5Yt9QRhGRyD",
  "key38": "2QZ1CWPNCzVwtzfp73e5HEYh8JSiKquvgdnfHE7aPKME4cgNAZLkLw7RwZuGYGjwQS2P6CeTXZC7QyQ682ddpQnQ",
  "key39": "UnJ5zmLyCCK9jES6zC1piBPyu3r4Gx5d2JBd5V4h8qmPv6K54Bx1bPNZLsW6dF7nTEvHVqxu8PZZkjArkS96WXw",
  "key40": "4jzCtmpkGfc98LdrKaKNMMVKrQsGj1HjZwsXR19hHS62pT4XDbGWrsjKG7CTSzqaR4HZBj9T9tMvE6SifhhUKU5",
  "key41": "2sgs9CKf5U8HxX8t8Kdz78UcWwhGuqJ2RoGZz7orMiZa4iAtyXRNS9aBt7mAdsDtVZaNRPrWirEfVnpXXxAt9iZa",
  "key42": "41GoHN8yjgEDUnbhNmbUtTSxps1C9E6m5pdXSVVNtgL6PpJPru5HbGHsf3AmRd6gQeGMzc2upqTAmUq7tteK6vH1",
  "key43": "4vpK4t7xeiCHfQxgavsFKbUaf3XeAk28waFhXQvArbbcrp7hh31knskHs89PEKxorxdgxcy85EDAWXpj54nT5V7X",
  "key44": "2jyydSRf66MwnybVcpLnQm9m9co4c2QhqeuMrqpyZbcPBhaCq9sNhXJS9iNWKybEpF3SR4KsGXUW4jGQhzpbsAhQ",
  "key45": "2KKb7eVmCwtXw4Bc6nxZdyqA66SnzJZuxAEsvstbAQjHBoor1riJ5ku3e5UviwuENQsXmC5KvnFuPXS6PvXH43av"
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
