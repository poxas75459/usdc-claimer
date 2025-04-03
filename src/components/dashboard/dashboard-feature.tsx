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
    "5ykyhBTBpLWVotbVgXywEh7bhSWp8knnMSsaBgCASjSV6DpELBwa2SxQMTKYosDaFd3KXWADiDCe96f7mWwuP9FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mU9z3zsspoeguo9ZYQN9fUeoE77F5Nw2LQxgDidUeziH1Cd9Raa3VTV1Ggg1D6ozkd1XT1w6YkyFRyfgUXk3rjz",
  "key1": "3heHSa1y4iEPZFXWZCnnUpgyG4kzB9kxydvXmaaKeJFyWNujRxyPokbbTb4vF53pbiQePUVwdvNCwkgta6PhLQiq",
  "key2": "5mn68sHJaGc5kQFxXs963qMWxUPBuvoHa62Md2ZpuziyCfXKTVfVwwzgpyFSZKeSp8JwVzqjCK9yJxukrpbdoF9t",
  "key3": "3NFAbQR8UrzMX6Cu2ZqmR89KgJs9AUN1piQc7gRxzJB1qq4Eh1pNyquJrBQUWJgLga9rVcTdYxukdLTZm1EZgxwA",
  "key4": "3LznFqqP5YUynzLSX4Ew3Pt1w5stX5bS3Q5qT6kfeb5KFhvz8qjbMJ4X8beFdJDT2XyjdxNVKW5RRHQy2vZcXvMw",
  "key5": "TAx9on3KwLcqbriYxETGeNBooqujSGMPTekTMx2TAR6q1GPC5mZnr1MX3Ggsy44Cw8r6iPck8zmh4hR3mDwaHfb",
  "key6": "sSTg8eMwxEN7P7B1Ui72cLRHbUPNYtgAnZ3YwBNJGTQNBBvJbHu57mbiwtjMfwg4UT4S73eFgqCNYf78ogAJNEP",
  "key7": "2jD4iMhaKsovB3jTPT5S5hFmjuTMD5VJ5BxBFrRhycYnGDoU5sUf22vNVfoani1CJQcHrUsxfhahPzF2wLQA7i3N",
  "key8": "4L8RXiHmnXLfyfXk3VfwLAf3UZuPfWtUasUQarm7TR5fsSRU5opSDxEsz4kiabyhDoYkxKWjVwFR4fiY98KdspXK",
  "key9": "jErw7MCVzgr944WxMYZHxVgAbHsTvLBqhWqXnVKjQienDSxdecL2LULrT6avZycJ6NnKo2s5dKptCN59aJwSrY5",
  "key10": "3Li5TXQDpvvvneuTJidAXiTsS2U1w2azB8yATaVnFCh8jq615UeS21Emsq3svYvWVPEPtuXVWm2s3sjUR3rdVgZr",
  "key11": "CoHDJpb54KVQWTqNCXNbA5QXoYYanmTAWAPPvG8WjXNVX56QMFEKSL25ece65WNNzcezMNXkcmMXJzKbhwgj3cP",
  "key12": "34oFVAFrNq47838TuXzYNHorcn7DBdUWYVGpF1G8rjen7H65QEDYSoXtWuujFGsxWmDjEUuW1fMSq8TJyM5G7yxD",
  "key13": "5g1961a1P49hWbhPYwEojwQjEpnrQM5oFt1PhTrZkBop4qfuxEZSuKBxdJYNCRtHx8NQcH44BYWQT5JAViAT58vY",
  "key14": "2whFsdj65AZVb4qocec76HBih29MCJXGr1McVshrGeRFQJvKgYToe57kiZrJu8ufZW6w7HiLyHbPwqn2ijZi8bzb",
  "key15": "F9LafH3LAB7aMjpRn1TG92uhyp2XCWbW8iJoEkdVrsWq7rGFMe4Xb4JFRAaysnyzFSm993ZtWNU6x95tiJ95vGz",
  "key16": "2moRC92673ZMM2ik5iyHyUPxosYJ3Vv4nkiCHBVn3Myk4sH6NRmGKotLngwykFZJ2ru5gvKuTU6cXnmc3vDt8tA2",
  "key17": "3njPkFzcZHp9S5rNXMzxcEv7r4yAs4goDNVPyfCXokGLDnwXsJvb5dQJasy1CMiD1o8BxwRnV9zXKoGuSMbaJy96",
  "key18": "37ZNgzojMvs8GWAFngvLtN9qtDErt3Pvxnb2zR1cNUPE6Tsxgd2TNeMPqds3M6tJivqwjmaa7HmfC77SMt76957f",
  "key19": "3BpVbcyoBbjQwjjK2wWnPKdLuafEPfDE7fgK95GSWdNGb52aDtA1TR6jSazmUTU9qr83pqeYyMMJuXJGNJuhWE8e",
  "key20": "M33D1TXLah3v44iGMP9rYoxg3cjrdd82L9dWJ8Wznd2F5xYCoZBJQ6fn18qeL7DYwDjN1Ladbq1erjEVdZaEKXc",
  "key21": "3fhBfVwRYWnpY855ERbmSJHEkVY35Uof1oThXPvKt75DXcprFXaSGU4Y5Knw57vWFbsFWKxurG5Hfp4iazC7J1JR",
  "key22": "9CKK4gJ4kULEnjtHiXgqGEHwxUBTe882AD5C3wud7y94N3bLVXeQNyTJHPvFAxGNwMnSBM4ZvkL4t1XGi1UPTSm",
  "key23": "3b1433JvuXvZxnfitPp7ZbMjXhUtxaWhLHrjZf592BcSEan2bw1iHLvkckrmXuKubfZbkPZ3gtgXSK4ANSgjsGt4",
  "key24": "2FVjv4pgCtoNb2nzxq2XitHjUd19Lu9tbHztYoTwcp4LiaDPBdcmF1Y83JLotngqUb2gvGcS646KieAWDYie5XMR",
  "key25": "63hb6RBpNoN3tntPu3LoeX6qfhm6MQ9XaP6QZbXPtjuvMWBvyHSmv5TQ14nz2wHh5joziGDQ8cedkD1T8ydBnbsJ",
  "key26": "3uzDccHxkSTDSQujcVZwXFra5kGzW84NHwsKUhScGodwWZHUNrachZWjNy97Rofxp4ZcpYgiJPf14M3p4WuNjVCA",
  "key27": "5WEL2jjdpZTcen5337pUinQL4ntpM3UeczQEi8KD64sXgLCa8veyehZmLvzU7osBArZVruv69E1hiZsUtZfhznPN",
  "key28": "7LRJGGmdS3AwoBFLSP7VVowKtLkdotPrB4f5m5P735nstLwihB1oV6zAdLkrAxUBv1JtWa4VonUtGbfqCAEk4S1",
  "key29": "4dVzocea7TUMbjnupRa9gxgqStZr4m3dXzxFqqJogDUy97eeMinivufkmEqxpBJXYYZ7DJxg72Gts4fJQKxHi6Qs",
  "key30": "3ZU7VNN7RqWgdcMp3pDmuh68t4UjLfumnDFATsdyXz3CtR5n21cfMffDh4ky51WWDqxXXX1pnAMfNh99aZy75Gsj",
  "key31": "2ziRY9brGzun8t5v7n64BD73gctYjinoCR3wTDQjdkUvAGw5htHHmGHAPCESgqyzPXmx4RvLZNicHU3z4vbj5x5v",
  "key32": "3YWJsHqb9je6JGSXB2Rh9iH3ZgXeFYDKNnCieJKbYAurAMyhdNC8NvYjjtkpSSk6aPCFthEdU2PdPpSDMSFjBtU6",
  "key33": "4aFty8jfbnvo33up8BFpanKS2ubRgpdqUqW6XrBRKASXTb7r86jWhWZS4BzJaNciZQD35fkagn9b6H1Q6xaTPycL",
  "key34": "4eQsctb7U7boPYitZbJG4iJYFXJMDbNkSSqxF7nKtSEj23ov5N2tgTwtbvNiZ47V5TYu6Dyy6RzHvvCEjqxCH4WZ",
  "key35": "316U9dVPXr9koiF6XHJDsc5Q4SFkfnWU5XSopMJpdFskGT9D5U8QEkuusjs8FoeRweFKeV4jGoxyQeasbDjyH8H1",
  "key36": "5vsmFy3qeDgGgEtcmpQLVSkJTA2Vco1cU6y6c9d7ASqvHweM1cBEJrC7dGmznVSu4QjciNGZz3MX3KSbLK7Fv6wC",
  "key37": "5nCwwVpgictNDkoKVC8pp8UUnXpAvsFgQuwg6rjmTMPnaKdgByvWetyaLSysw8rCxWxKR9cMtKcp7vV6XP9RFkZk",
  "key38": "3hBdBWBUuW5gBovUT3r1WfQaFyXwLXaXNr29T5NNxVtBUwEohbPGsAQj8RBwzaXDTivTrPB8pe4ScS2fp4ruW513",
  "key39": "4M6sG97VKB3kmZYzkgV8zHB3UozztDoZYPH2msXjTbnqZcAb3fS7kCZ2RGhifKSVXoVJuMnrdDCui1D3Q1kXKE8y"
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
