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
    "3CCW745bhJZqN1DjcY21gBct4Lfp9gdeFQ974SBXDBAt6qpZsiJLfX6M6crKZPpCNurtvDEYNamQyiSfPeAErVjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EuFhFGThKbqLKXzrrLDzNp6GQwYpxZgfmotfcZaj6Fy1A5wE8K5m4cCioXjnrXHmkLWhKBiz9sk2yFBA676oQs",
  "key1": "4FYLTc142NxiYomDZNqWvpQVFc9eN4ZhVGoN8xQHbTcGAAadBqAkDFPeukNZavTUPdsJcyB64qtKsTDi6jtxt2vh",
  "key2": "5D6m1k3hRYX7MCZmfS7NQosfPvvAsPrerVPJbGTvg4QyEo1ehMc8Gc8gaY3ydRY5R7acMWTi2vdDKUip6uUVVi3H",
  "key3": "3aPpQXZirYrRPKVomSZuc15cz7hmYAvoW8hyS47F8tTUBJiExuvNGUSpeVuz3XeuqJorCQVJiCYDyToZvJGMHKzD",
  "key4": "3RryUYPeLiFEu3GPToYBphv6JgqstdhchbnozQhSDFBf37SeTVEPEJyMukKSYkMu6uFJrFYUkVM8vN2gKoNJJeSg",
  "key5": "ySGSfvH57rNQxq4tPMFu7FtJCE73Xqkye36S8g6deLYitgVQ4YU8tNHzEvgD4ubS9MeVJG8kiWn6ng3K41uMjHU",
  "key6": "HG7rQapvC4rtsD4TzmTFtZ6Aza89Asr6EZs6k7UAaPbLfAtCuteVZuRpwZ5BMFKHnfbKRVbgVc4UKBN81aKos2Z",
  "key7": "5v5Zmo74qADQWoXMoGrEhxtPjv4Fr4NouP9bvZFNdAmfBhvWVBCSBDF9czYi8dpKdx4MhEtsXhuboVrQFDo3hpeX",
  "key8": "41nXDcFMeNR7qC7yaSUQWiuwqK59oJB4WDdZHrEMKeMU1dvh5NTfk7BrTLFSJf2dB5HsSVEF6QVoGdGigg6HDWgo",
  "key9": "3x752eyHRxKEawkBbVry9ETk4eP59f18Gkob8L4b1ZkezF6HA6dNjb4rkmz32Vttk6D3wnRG3PSgG69gmQRCBCHy",
  "key10": "owQXLg4dFzuFXspyzzCFphEDjdkt9v938V4gvoM1zkNaTL5xcBRDBH6o4CQKHG9TnFCzg9mvaGfzETD1nvBCQzK",
  "key11": "ybX81L91vw7n4szCdntXzD8pMNfRh7LTXphFJbqpE9Qb6oqSKyvoi8a13WspWLFjpfR9nfc55Yb7YRtdrwjSapq",
  "key12": "3anQ9oMZwNYQzS4Wu7gwS9qn6q6Xc1xrbezQEwVvSsnwRUvY4E45WZzw6sY7vaYC9g7nMsoczoWeZbZTMPsT9Psh",
  "key13": "3T9hBkif54etE8VbSuFSWLi63rfsWfq7YsGVacun1cbfWYe67zKvhkDjRKydrdA7FMeRmKJqKq8MWwGk16muiuHF",
  "key14": "5dxsSBbNktgFw5mJqD7vsMPk3ef7oTUd3mrKmFbcZNuBAojrruboqv72jHoRVxiQcmUwbbdQWWkS81N1hVSTPg8A",
  "key15": "nMpbXA7MSh38gLdzSm4iPRSm7XWmjATBEWQ3HMnAHQDM4jhR8xfrygV3rZ2kvm1KYNMzbzs7bvTE6Qn28PM64EG",
  "key16": "PvgzJNgFroTVtZS9kCfXCzczKCp4Aqi2TAAr44pXHrVUQ1CGKSjibrhtbJBdqUgehtt9gwiwajVgAaW1dqn3apX",
  "key17": "5txsvzXT3PN8uoZ4NmjJ42hANEy7wzRWCpddLRjbXDxcByZ8MpYzGgK1Rs9d9vKu8fVo1U42nGa83tS21ghVZ5aD",
  "key18": "41bPMnPcwPaEv7roYK3FzZ4Kt5U8MwWS1ByW8YwhSLjvqXRBAbiL4T1RN2a4Tmo6Np4JYQBcPMLfbjJSxgyAhoYD",
  "key19": "2vjbk4dJzoDiM8QxwJV28oDrsATkEgydmoey8XE98ieWZt9iCsLttr7KC6n61U8UkfqzaQNRnp2T91pyb3o7iuWK",
  "key20": "2LowgGrKtLrctAiPKncP1BovH5mc6HuC82W7cXd5AUSJ1u1DnN23dpD1Xbhc6o27Lp9qVYV3WMuYZD7NWnz3u6JN",
  "key21": "31tRgRvBXFRz7FJT625oCqRvf7TwAaYVCKbQRB2dh2dzxTyHzQxFmD6K8hZZWZu4TZ3Ju4B9tSFW4TEtkHFn8cc6",
  "key22": "5eSY8RNo6QZyxcvpWR7wP5WGi2QatrV7VXQH3RTTRbpUAM8BWNciFuoXcuX4sp8CHs77fqMdQUjGmVxRtEVWHon2",
  "key23": "2qVCejrRBsGYMMjkSe7hvuYtXWXiZU9m4nhgwi5yf9EtgJqWm6H5p8ir9Q9X6dbkPEGvucJPzh1zb2GNr4VAXWho",
  "key24": "56kcg1RLGdE8VUmydMpNWxVAKcw43Yk7AcSywL2iuG5KBHG3GhMcAEqL8J7kSBPfcvXiUYToXsCLNkrRqnqHdRJZ",
  "key25": "2xne81rimJ9cX5y6VrpDju7BRTKAgrnLF9EZWs6ex9j4bm5hpupWcwHzTDSbCxhrwJ1q8aFdCfJyZj3e9pq92kdU",
  "key26": "56U3fAAyPMLRLFZSA8MS1F6C7iomGMUjzwkAxYuK5ncVy3umStn3vc1X6okWLe7X6YnAcsVB8pQT3yAQCndUNGAG",
  "key27": "2y6hLivBaUcNCnFCRsvYA32ABw7zSXzth7iVYKQikZGTddQSHAAmnaE61xb9iDkAudyynYcexbPTM6Nwx6syx1gW",
  "key28": "3VQsSJouF7CwqNHm8z1X93cjcTzFDZhH2FHKXwq1Eav3ZrYyZJs1VHyudNuCuLac6JeVoMnpgxwMv55RYYrVcPyw",
  "key29": "3b3DooJW7NH5qntRmbyH66qCDWhaKG1iZHpFRnAmnL3h4jrRnzigQkr2D2bJV4cDtdZRDfW2wak72J8FFModNym8",
  "key30": "3sPFEGJEsMpWs6uhRaSpDhmhJjSavoGc8QisoP2QMr6Ni9QcW5rg8dGaaMH6ufp8gNS67tSTFzfvceTjvca9PvSC",
  "key31": "5MePviiZPyiqNFfqMfLqMHLcdxRuR3xzu8T4SQUurErk4PHsYXmrTtPtCS23HzRwTrkXm7Ldx4EzUPqJa27fksn9",
  "key32": "5Ysg9eQg1cW9qMJTR3NsS7SBBZwuk3LHSNNw6RpFkA57U2ioPm9XfnRmM3maGudek4QYVYpb4NsuP1cg6wYwrwvt",
  "key33": "pQeB1EJYk4YnnJcbzjj6RPpztv4rfETJJjvU4A8TaNHTpcbynJrtvZyprt728ZJV5r6LH3ti5nQ1rVKuWt6JJdD",
  "key34": "GkgPMzPzWmr6cNeg8SF7MceV2sS16ZjHCm6SrcWNH6j3nnq5xDo9Rrk6eMWNLXCvimVmVokCkiru2VU2qdnjfXi",
  "key35": "4uE7bpgWnGBqep4kHhunSX1zev9XBhgvN5TzcoScTi9qzFnHAh4spgFZcZ6L2So8L1iGMUyCmBhox7eqn8TrofDm"
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
