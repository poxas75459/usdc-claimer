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
    "4YPcx8ZpKtQ2Ffd1nvb7qoc7oizXU9cmTHbCsfUS8dEFKAeWKpG5RXuuUxhxmav9sZeYxYKYnwUnafWaxHje4PWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSojNvr99hdZnNvsfTVWUZYh8GMEUxKFf9cdDxYBksBbXp7QJRgXDUHNeVL9716XZmi7vQvizWW3rQyCamcpSt8",
  "key1": "3MpCAMNBiWL7K5APrb6Q9sMPB5buXsP8psmuPodMJrqeC7bXJfqyQviTMdhTerrAmWTpRUM6fUyLK3NPYY2LGSQ4",
  "key2": "36nbwpqqZoR72dLNEuNXJqMGQbHUAexkVpJz4R7s7gbLdZVaixt43krbAdWxq7msPAnLkSyZxXRAY1WYzKS2B69Y",
  "key3": "57JjGTb2PgBWmVwB38o2QF5qwaH8fyamYXXeaC5gAnRcsZyphii8yP7d5ti5cQrzx25WVjs1hYmqyWM7vPBg4cuK",
  "key4": "4ZuPB2cqy1a3HFXGpAw8biyStjP1XZJTyV1EiM4EuKxoJ1rzP5NgZWrWuJG2dnpixNgpDYvYJpgRdzjDpJUEMMd4",
  "key5": "3JMAccSEVDWVwDd4S8Vhdo7h7cMP6koCxP8k5B14YwXBX6t75sf4ig624MJ8VhbzGyZhmmcyGWbhkxepfoF3C2oE",
  "key6": "4y8HmDgQDp83HJe1jmLwKNr6EZVJNVQ9ybQNdj3APW5hDiJdRLnSPmfDJ8SkwktV9ANxCduPfbYhGMwdNttU4YbD",
  "key7": "2VnVXo9dkpoL9vWpyk3zmb6DCZZTsfLjQr98h9t53cqiiPDp9aSsAsZvUzSon1ha1CDYKqkqorgan3Qsdsyatju3",
  "key8": "4THUDA8E1mSgkXpGnNinuMyjQS9FpdXtXkaPVcEi3Z5fXLGsbKtB6oUTEDf6hDGoCip7oUnM2FCkm9SRhmG3GcCy",
  "key9": "22DhopqE5N9VztLe32E4Aw3XXnnQxVtUDwmizcTGgt8QBaE1eakEmPqcD6ttUjrxokNMzxoBcrxcwLjf2hnXmm2Z",
  "key10": "45xfmm8YQaoVdWbPhAn9n7EJcKkVTzXmRQ3yAY8imA88ifxWq3Nz2VKZkHo4Xmv6Ufj8AcNDoRGHVGRmYTx1eVod",
  "key11": "61wTMJw36bYEDd7zRqu5dvXpbhWLwXG98E9zcZ6C6zRYqtmkJ9JgxDp9hyJiEoD7QpGNkY4XcGCrvMTrv8w1FZUz",
  "key12": "ZyQ4TN3cue3p1XLJtHkeHkX2vqNwF42s9H1BKXxsbXoGS7ZTXZJso6mo5sGtWgTgQ343pE7PdF6mJHNVXoGcACi",
  "key13": "2Nk6sbEKGdh4Pb6gGhxhKWcYNqnqAieW6J694gTnLN8AUocWiy8C6zf81EmyVyos7TyL5ZuqkZSwu41oRffpWsrV",
  "key14": "3adMMcV1gV8F7e5UL5oE3PL9H9CtkA6Pkj8PeyoDaQaTm3eCYnCeLscSHg6qWESusXbzSMGte5VDVARxwZcZL71A",
  "key15": "4MuJMsL8wicfpeqYwvmBgLNh1rdzYbnGVm3et3CLh4BDF1rUouzfRRbPLxHvngezf1CbAehsbr69zmUiEj38VfYx",
  "key16": "vNJsqgQXJ2oWaP9DX7hZeB2cB1GbDLyn8GBHfpZpjdVBte5rTco9don1RPATLp9B1UJ9c8gB4UE33yyCHfXToW8",
  "key17": "5ZvehkUZ6b1ypiaD7TwHtz5EZbyu2eEexQ6FX1nQoPmJ58xz9wHSbBY1hzitGjJyttcpEHHt8hfB6QsrWpRJNPPJ",
  "key18": "4DD44zxr2EijWY9rTiSsSCus6fB611Laa8phdkEQzZ5BEbgGEvWQF79ALBTFTDgwnA7iEnXN4nCXxBmDQUHk6Qap",
  "key19": "2vBSQVXQiFuuXZrd3Be4Jvc2CheNbNNnPqbNFyU6Kn49sV8TRA3edMqFdmyfYfin6nFpsN8eF35ytgwVa5iUn2Z",
  "key20": "3SThhL9dbFzwJP7ovVPCnispy2TXeAAtfKSnautf3N8sWZBG9HvYapKZdJznCaiBDBtrDmtRJEzSGaEEuCBpQ5nE",
  "key21": "4GmdpyHwzb3nwVJBBtQFeTrPEL4ZQuzG4LovTttH3Jza69Ffstm76Ebahq8MynCiiEpStTELBGSca1CX7zy96ivt",
  "key22": "3EzhcsJGk47tHiraQ2qHJd4JX8df12mtN7Km6DD335HfPrHgBEiP1DJ2tK2QK4Exitcn298tjvTqTzgVx6bQLXvs",
  "key23": "5cjqGKj75wJGDzCwVfFR3QxfXJtWysPhZWCoHvj5hti2VRhmFpbLH2ek8K69ajpxpVM9aGnq4N9hc1ChwVRwx3x8",
  "key24": "4bxbAhryREfeFQU9REZThD7UfjSi2VAn9yQNCW3shFUssy1RvGXZZj6ftpGveLsxWdh1LptNpamiZCnLQp3m9heV",
  "key25": "3Q8prQbVUoyN1J2egffVj3tnfh2p2W1JKzZZ18mZgChDgZWq2qmgxjZGWxGvseLYTx5zch2STVJ7NWQWvDHt8A1a",
  "key26": "4NTW9uMJaAZ6YTgFnTCKEhex27PKgyQMAjEDnhxPqd5ogBCR4S3rWrSwRzxg34GQWqTsyBW46T2AwLY8SFRCtNfD",
  "key27": "2bAYFea5wnhy4M9sfb3Aaudi2qL3F8brQgHHgZncxhoBMTsSPqjXnpvyoeXGE1ySPr6FjFQgvao9ENuTuGv8SzaX",
  "key28": "3w7CTq9B3zr5k6sySbwGVzba5pDgYFBg7ivttXjNFUEpbbqnNRYmnMZvgq2EnZjf9q6iu6wn8bEvdMSDbuqUu1Sp",
  "key29": "2pg3kAm2gZMXpnjRxkVUcSziisSkiLwkkxF3rJQrCyxNNM9U8LvxdRXjLTf4jLkiWrefjrn2QRioiCGrWsPUVPWc",
  "key30": "3ArQ5xvK4aRyzGZwQ9ezALb3RjdcpwXHfne8obLtEDbKeBp7UxqUpZoGiWnaqHLfXDtpPKoTURsjLh1cSyjkfpWG",
  "key31": "3StyHaRnALPZnSHNtv8WwmMuMUDeu8D3mC7YZtiyEJmN5devWDSm4vCPmR8AXfjSgWLATqKMtsqCyxFMfLaB8su3",
  "key32": "2X9bEFJyDbfhdq8LYNJV7GngLWbyd5x5wEPbhuxfJm69438rzvXihSC3q8t5sqnLNHggw4WHBB6v5C92heyZEEq2"
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
