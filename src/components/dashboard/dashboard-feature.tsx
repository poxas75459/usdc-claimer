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
    "26dT6KxbTKKN8aX6tTndFQe4CuaGECQMFXoX17Lq86ekTsvwwRUNd8rem2JpRp5tQSibUiJW61Cq9BkdoQ5gZa65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wyzs21xZtdxTjw3o15VPsFkdYf2Z7gShE9XV5N4B5ywaeyyqntB5fZk7dVPFNzMZAnUsqdvm3JuhshoPXC6Zpbv",
  "key1": "2cPdF9E3h4cQXQjxk8qfUu7GnusCtEhsoYB2q3yvskqbrkfiX8Seao637upPbdf8SukpQK5N7qXAyAjDg1PK3dzM",
  "key2": "niHem78qCK636zQhPc2s7bMh46dPoDZQU57AZi5Fck68ZxKoLe8AA7HsdRj9FmT6QzKjSKi8bLqZnhu9x5Dbv2T",
  "key3": "ySTKkr7AQ53Heb5dGr2En77TK73w8HpxMytG5cJVHsdUAfvHBRVrHiEvbii8oRckj7pGhDJyjstdhq7JeRTuiqX",
  "key4": "4gWdJ2xa3K4cZrKRrv1kYcMGizm5PXzXSKwCWchpgqyxGvWwbGgfJGzrcEyCi5UE8E1ZsMFmsmyLM2L7Fan1fZjo",
  "key5": "3BbGrfFSfTwYRZx83EJx45AE1N5PpnvJc3GAcioEJcrctdfMNDsAn9P6o9toxNpko7x8kSAyxaAzGqHjEh4j3ihm",
  "key6": "GXgfhNQTRrXYRBCdWWWwxK8S7cnn2YRHLqw7tRh7X48xrJ6hXQEh2bjBMBpbCACqoSfjmWqC4rzwZy5cYeXt5Jr",
  "key7": "5SvVWDWMMt6YjiQrJpqh5LYLCK7dYrRvD2BccdyF1g4pkBnpJpvdDfuqXNzZBF6q21HpdnyHdyQBV9knQdaVBHLw",
  "key8": "5yk5rCMh2VN6XDcuJmp7jBywZ2oncDxzZkVqNsmxsaLeh2jvXEvxmH1vL1QEkY4Ur5t8NdAe3eV4Yz36UUVNGij7",
  "key9": "66awEFPJYema6dNyFmtcbqfuyNA14y6CCt5Rh6XCLyhFNgXZE9Zv9mgd33ynonkDsDbSWJJUe1UrCQLBJj9onRuC",
  "key10": "2RQ3aS93t9mVjGD4qjLvAwh5mkTkeScG3w2989eUM4KtcfP6FNpeZifMxkMsVZL4Kju19a1y5m7kXaBCKFZCrQ8r",
  "key11": "4uKT9mig8WEW6af5FdJEUpZ7viqprBi3XKBekWMq3AfVe3vnYjzEAmmqeTb8PYLa9yaNSBWVzUzE5MJjNf6Yhqje",
  "key12": "3wKU2ddL58VKd4aNWaKQhhXJS1x9JfRhRwLh7wEFKAcHYfo4AvTtDJHh8okk1fkCx41kWHAA5Ms1nL2WwP9CQuQD",
  "key13": "2RhsfdwSp4HB1r7921Pvjoz1LXewL428TQkiqM4TgzDVK8Qsjq3edwUwATK73ce7vtRtR8AaekSoTnn6KfJTt4nh",
  "key14": "4y62k1rTpJ9ujhgpfcb1D5mzopsAe5rEpKsAQGg2LsXnvvpKbk1LfScdUe75dsvv4jzyzyEypvPpeFbaqrRtM3Yp",
  "key15": "5Ycj6Y6RGgPUDvnAyVkBsRXC8fKbiZycCWahCSUGJmKzyz1aWyEykCpsgVagLUx8kaRmAkb2QdgUhUYLozRx3NBE",
  "key16": "2KFRWKApLRVesctzjXLmdoyMwuuQULu2FipyWP62ubFt3Aae26Lfx5toUd9PwA6zJvEahMAZUj7Ds9j1brLdWubg",
  "key17": "4RPd5V2pDfQSsfmqiZE9Q8MKH5EnWo4Egg8Pp4wDFYWF8v6FVVA7qzLpDG4xH73Gzm5idqZVWiXwWWEmTUSLiH8v",
  "key18": "3TrDeVzjKPsPwptJNECdwpwux8Puy131g1n6z2akUjAhZ9uej47KfKWDSkXDpLHnE8irJsocmuV6bZjWCAKe3FWt",
  "key19": "63RUNbYCj58HRfD1x74iQ3Jz99QCvPNAn6BsgjuUBWGtAmqf4vxrHCwcH5EuywVGitTfBrpxBG89o78CeJNANyFC",
  "key20": "49k2fenTVQQ6rwH95sgHiaYhmmm4dzXDiPkkQ15oJa5tUuwd6PTRUNahfhJpBtkW2dVJabHznhCV8dVYegRY7aSp",
  "key21": "2z3rZHPFWSqJ8dW83STxdSXH2gDHCsqG7Uv8BMxt3bHzsB2RdFwJKudwWEnHSFJzBART6dSwpEdTC4LwZXkhQzEA",
  "key22": "29boo6TZvkeeMiwhaXTKH4mYj5NfiytYVeNGJt7hAwoXYvfkLsD553gbA44yhvFE6sUya2fmHVoHUZgvdTUe9D9z",
  "key23": "3us81123rhbuU7caUNtc8UiehhFiTujdhmCAtYoszXHGtDvafkaNfU989PbRV2N5A4ief4rzZdW67NFMSM3YaPTz",
  "key24": "CU9vtpLDioC9Q8NHZmP2gJKoPoNyf3nUV7wuF7s7z83prDk9Cy15mwYAtxG8ZMLiafjw42kDao21ywwfee7nSdX",
  "key25": "23LRV9ni7sEmMX4krjEr7JFju2SNc3ARoTGgfMfveyF2PcmChnPTQD4YDRr73J72PpVuEttRoxtVZkWdeTCXnHxv",
  "key26": "GkBfcjR8nJmvgEo4batGabKpCMyNT4TtNMwycr484hRPq6nnR5F9j38gYaMd5yiFA4JxvSqgPp8bNztgfgZF85S",
  "key27": "4P9nsAY8d6Yb7zt251Whwkx2PWq23CX9M66PeVVUVdpMwMkkAPLJt93Ya1BV5Joo5CfZHboNHfCcPBzLTDqmBJ9o",
  "key28": "5K7qLyr9WooPXLMFxprqkBfUvxawou8wTgTgUy2s9YTAwbABEdB4yba73uGVDcd7p8DqcscBHWq5JgrfuiX2sZ6C",
  "key29": "3T56b5ALcDL1PGYTPmDUuPWZPHHdFqy6j5T2qddvSa3juPU71Y21H45buAN8SX8Mvj1HLykBLp2vYahbDjfyjmaU",
  "key30": "36K3UasZ16d5f94GVTHHGwjVzvKQfVzV1SvZbqGPeBMr5zo9P5iEt1HQhwK1UN8PYHCMWmREk8vGyj11iRAnaMxP",
  "key31": "3w746ohCiXM7pZvjPWNwdfUV7h7HbudVmTEcKzDMKxBuW2EVLVCP795rdX29WFVk6UHt5M87CAxzEm5R6TB2MRsA",
  "key32": "3RudKwatnSTPVdofZdSktyPjjJv5iRFryY1gRUezWodq2tsYgWVihB9BmQ1ESNVBWK3tXA5sZWDCXw7RYhFzVfvd",
  "key33": "3Wc38FDDe8zU8kATeY6Px6SBk6j1ocbyXGUEgj1c67D94hVzwPDzAj7cRLbzAEKNuhw6LLqu2BLTd64BZZQK16GB",
  "key34": "679Tz4GZrB3P5oxgAj955LhfvWa9KKn7hjVNczY8gTptH4o6EsiYznboAj2r6rEBswefcA5C3zKxeBB4xb7CG9yg",
  "key35": "2E6icNZKGASmGewey6eXib9ocwksRRg7x6fa6MMCgDuA62sn7xZi4FNv4bU1RWPTzjYf3SWsXfjtJJyP3M2PGpvA",
  "key36": "4uiHPqFqDDHvjierQG2UiBFPCoaexG3eJMcvY7GgsNVBWNE318r5BSprWCVPrUZY5c1XfZf2avmmT86idHa4873h",
  "key37": "3rLdH1ZiBfScFLjLU4Y2DRSUBidqMAH9UUiNTRH9aawq9WSidAmdZQfphTbQ9TTw9DirNcbAAZx6b7s1WBAq4Hck",
  "key38": "42dXBfp8s1R697AxkfVKpqmCzVuhttUhinQU3CgbaQLMP55zH9PNyuHYKK7jSTEDR6r4eh8x8jjqHmLgnCt7SsTw",
  "key39": "YYw5CVbsVkZA7Phw51yJAJgbwjUP99DMfKek7SM8uVKDSAHv2m8ZvJX3f69RZNqna1isXtTAL6NbTkK5CM75XLD",
  "key40": "23c6mdrQymY7iFykhDBXEwb9RhripKiSPDRYMeNzwPt51CsZqqUBh5CA5i8iwrj1gKc4gJhnZVH4g1g5To7hLXa7",
  "key41": "461TwQG4mE7mqVowEUGV8HdtVzQ3nZXLRejttd3NPPQJBN1kYpBf3xn43viHbhtRQho6ZiPYgrcJ4g3wzqDxWDiH"
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
