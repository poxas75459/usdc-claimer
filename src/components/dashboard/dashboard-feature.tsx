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
    "3BzFGbLmE7QZRTB9Doo9UJFjdrfdZCZtoNhAfZ2dYC1whxPTabjR6fKkFFb2TYfT7aMuohL4J82vouCeBvVBzxbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2trowUW37yeDRpV8qKhavNyCjJWLFp4aUmUALsfoXEsmorNcn4CYg5666qH7Fy8wQDCzsSeCWgYrjJHg5Wj5sfML",
  "key1": "38J7Zk2r6sCzEy4c7Gzrt1guPDmP1xSfsQi9oZpm8j4AURR1MXyK9K5YxaDCYk3YkamFKbWpJDyRzn6jwm3PcUbF",
  "key2": "H4PpfYqXFZ392tDMhnNhh74o4gjDawJnwtFWxGfoycjr3BrFo9dLqWB4ufYL5CRiUKt1Dsr2vZEqN6dhoC7yG5M",
  "key3": "i4mh8GNZVVw5g3qMfhos3j8uSq3zCsQMf5m5XMs9XQd5mddgoeLwnKEefynkWAfRWSRMGsv8Bk8SBpRg18PgPuE",
  "key4": "3aB1XUTqsCYiA6uA34q9m4EZe1hPZ5mJ2fvn1iRD4FHcPGq28xSQFZUcxmNZUaARrkFpLWviaji24ug8dT4KMVXS",
  "key5": "pzBVzvnYfib59mq39dKLwSCarSEYcLS2G9P6gDssz9ve6GJSs5bSaSiq24pLdaix2SFDqHceFzL6Z9oVqoorCKJ",
  "key6": "4M9pFadUQk82esBTz3FoiRqiLun5VF9FCcewk5YGBAaFVxwgjZ2Nvc44YaDL5QooAZgTvLFFsmW1y4mqgTTm8KCL",
  "key7": "5EaNv8sd6JWvo4VSoVZKVdMhE3GhvJFn6z4g9scQDHTzVuWCmBunGVnY7eLm2NbJvXgoprJkCDaXA7zwHV8pYXru",
  "key8": "37q9GB8w7EyD4yS3P3r2c1MPiNJrjNGJ89dBYTGd7rwNvezLVM3wpTcq1JazDsrZo3NgzUhxLBrBDYf3LFjsCWA7",
  "key9": "2zdtxQixYUnbnozeGosutuwdFbCPGNg5dyDw6HFGMKDYmH8NgytBeDeYz9DUod8udLuxk78A8yDgfY8sYULWNPby",
  "key10": "tcEE4gLBb6EtDs1sGNBENRyaDmzZVf81AGZvaVASinCxLbsuC1t3n7ek9FavEe9UifbYam5uTtcjd6KReYbuFcK",
  "key11": "2HCSYXUrwPBq7T9Xzpom7kcgNTVDjqsHFJ9jU7vNLSBaRjYV6GfqHt6uNXf9VnXvgGCAnpuWSdnKNbcuoNXoXL8x",
  "key12": "2P2y2dpK4R3uRHVpXvT8L6K436maVtdi2KoxuhddUNF1hszCKaYCXiDxdrGXmk5JUVVTusa32Ng6uwFp8vDz4oHk",
  "key13": "5TfCv2nhK6Vtb8WoEbZ5aZy7NZ9qECEuxwprC4DMywZga58YEmcZrZtAqDFafYWHh2qCUtj7QQV3qVdpbiNzPF8a",
  "key14": "4VkaScW8gfbJXtMspzjmZFvudtFytryfAt765S6zRvYg5dkhdX4GnEssQfurQWfY6jegn8ASbZVGq3cyZyVj51er",
  "key15": "3en1ykEJg4g493wHYdHjXBCp6JdAiF7B9BD2Hgfs7bkgoSnG3vKxSXFTWvy1R7fp7rfRhvhJvFZo9uaUvCCstyff",
  "key16": "47RBLVfPBL2b49CGt5wA6VG34ruBrnRqBSAZq2KjU67Y7roY9j3gjFMtJHpcx3tRGLmN199dp1abCc5coLaogQxP",
  "key17": "dHAarEuAcsvb36fu3BtcReapj4fM6kwCNbuLXJqPtgZJ1iWeyVHpw1iCDAK9c6Umy82Adu52cwSvWgx4VQKdnAh",
  "key18": "2331gNVfpfapeot7EaLkeNpwKmyzrBEjvZspnXdG8KjXfgVK586Qhycs4KAAYZHX9WgsCwGkG45uzwG1hZARJ2m3",
  "key19": "5ruSnPD7scak4Kekbg3aDf25myXrmFMXuVifock2FhwjywRdLfuYiN5ZC1n2fvJw3UwSiiAuUeJf5t8iTk1ABh7Z",
  "key20": "64kCnctdptrGLN9bCcErUYzhFtEkXAxqTn6m2RnqH3Lxp9CLvWbRDrrnQMHcjoMwMxSdAYSsuSwGcAupENv7eqmG",
  "key21": "4nocaEa8YpscshfaDbHj4Jzsugm5at647reCH8xehx4D55QWoYJW1v73wohN5kpgE38hA5u46fcbA1tKiKbEwDfo",
  "key22": "QTV39GqLRQVKHZZg27gD2MuN2LeYUmCcGfVcfoeS8E7MVqrrxjYB6rpRK6qxJSaNLjLS7XxFHXz68zgNdFWMNs8",
  "key23": "3iHpJ3LgAAjBfUh4FfCqVmBH7sKgMxTeXviH8W4a1VgU2ARrbDrfEQp2zUt7HJp2BJ3WMtoYSrYefEtgtihE4nTq",
  "key24": "xrKvgjuwHaA1keLqTRs3ApEdVmAkiDgX16Lf1e5YuteWyGfPLHHmBwkC1vj8Uw74vrj5YNhMEsJcNkQ6s2nJsnj",
  "key25": "3gUWtzZj1eL5gaRLCxibPPKEvUxkZTLEwWTprKpyXZWehnBjJS7FUVtWJCGnwumN6TDpwzwPHtTQfMHi8E8jwwt",
  "key26": "2EMXeZLZJHcSpWpJowxXfcx62iqhJwkuwSwd7mM1HahKF2mtWzSN7QWWQ9AoVW4XqeMcojTx8eu7iwT78ijgTVsM",
  "key27": "66QGa5zWXQcpCvwWj8iRJ1Q6huqyCzwFCiibrEabdpuLFcED4nq5GiELxtxYy62b7rc9rThnxv41PAw2tKoKHhZy",
  "key28": "2QNKAKavPEgktTYruKvjQ31PY92LydZZ7e8Z6vjt2e9JVjQjVMwVzNEMqdArKm1QJpsR4dELs9jKNsNSsuZyFaJb",
  "key29": "5ZcrM7Yq2zUQi2nuzmBVSBQ41sjnbYB6cXz1ook1tYP2oLvuV8hgTXKcZmBqSJT3KnuxEHFXDViHf74mJY8zhnUZ",
  "key30": "31BxrtWc518Fo8YpvNxVjfyUespQ7movC2dM7V2BXkrrnasmfQKCYgwrMEQSuFCooxYXC7ufVsBo9owUzayK77aU",
  "key31": "3xyUrNNDsViRbTySZnhpdXcVVwvMnAVCWLiU2x6v8RgMEaa81mZivnpWpWREPagiFPMbywyGrRVkXhS5aMmD7PTf",
  "key32": "246HzRxEAYvL9N8JJrRe3UL7g5ZEacHE4gdn6pz5bPXpKp7GxnCX7XxLJYjTCcU3yBATZsv2r2tgdSUjjrnigpZA"
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
