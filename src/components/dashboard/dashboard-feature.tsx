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
    "LdBH2ZZmmdmj8FFvKZmca8WCyksQKwySQHC489hZ5KQm5VoSp5Zbph8LxgvDkGyPB7JSHtDMA17quq1L8n1EoiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLsF9suGvYCdxnvFZxhbqV1SNqNQkV4b4yL63mwayBfk8Co43GQN6tiRKnbwRbdsyNFiufKh7RCSEQ6eDPyYvi5",
  "key1": "3RDL8wTJYXnfp8vFwjNJ3LxmQjjvG2fySvrvmn4dTuUq5XkiazXPHkuS1QEijuRFaBmahijbuS34hJb8FvFFeJMC",
  "key2": "5eRF9ciqvZoeHK5jaKCpPAcKjWwbAvPHH569sDCsGXsLRTRB1FGTemDZeaxFLVvhJBcpgs42hh7Yj1h6VRiZkhEA",
  "key3": "61u85pBuMpm9QrT2pNiYeWXTQ8CkZVGDs7hwdnFJCKEmUfVAjbanZGyqP4se5vqvXGQdKsz7XKUnLPF4Wi5u7cPU",
  "key4": "4KBFgcpguBd9UoUpLvdxcuDET3H7KdXq2QNNrLA6KsezgH3eCvqqjQPzgrCfh2rs8F7mSL2xCXjWEm9zysm66GgX",
  "key5": "3tr2cuRZJqQQHChRh6sK7QMn2NJGJGRzJxZLgUQrKHwch28ogxMhg9MYjyaAzeDh1N6811on87yWF4ftg2t1AFH4",
  "key6": "3bgKo1TFLph83MZEKZQ79if17qx5FwHadHmhPdsMnFNvjFPzgf3fZXWmP87XDmgyHhLt5ZmNuLfDPJbRtiXL2Cq3",
  "key7": "5oXFBZcNj1haFqDZDHTm21H4Vs3hiJdR5KJrVADMhrP7Uij6Ect7zM95XyQaWAegNRgsfvVvRxKwi84RAtczzT3X",
  "key8": "3BK1DGUiZeNRDxjnSH9SQTR5F5AmVbHJbPqkZQpAdfyWFnRYD7SDY4pk2M4VDXHWJrtBocxu5qE1KSpHjhPmB3ES",
  "key9": "xjgDZBqBR3urqLB8JKRjQaPSg4PRrMs22JE1AbWusgtrxibHqBD3mXFPyiX4vL7W7npjrBKmp45i1D2LAwYY5vC",
  "key10": "5X2TdjmeVc2aQbKtG9kXYN8hmmEgRGGnfGUUrodrZJuZNvBKvqj1o2Sjx8WrM8AsPH7ZfSH5Us92rAVeYjk7yhb5",
  "key11": "hq8VxF7Az9Am3kTXhaRyH4Mt6NwvfS6KA5sy6rPYocaDZeFSJNhYiCsPTB6G4G86LXChG8igiGL5BXbtwDz7d2h",
  "key12": "4P4MK7kgbPpdem1aViEjTsAyWUbg9AUX7m6ZjXU2gz9wNEw96Y3b1f14SXtAwqm41sTeqbAxWeFDeJGweMRcbGz5",
  "key13": "5FuhUYw2ArnNkbozRMyqr1yxtsjeYCebwPywbKQs4mTpq6hdPVkoPK8oZpmqrtMsfbSMzsQzVMkXpk3tLwqJigaD",
  "key14": "veciExuPBdrJ59GNSYR4gHLr9gCufgKyNLTbruE3UCu9vvuHHAqnSvHTBCq2iuH75igYSD64nriK8M9LdfCrkJT",
  "key15": "5fDVLd8ixsbvvoGEx5WDdD59WqyiEC3FfKNCNBejH6HBFqRQYjCJzb5q9gYCf5EWDxwtsxidfU2HbdBEWSF3t9xG",
  "key16": "4pjKbnSHDSmWWDi8XnLLpTjaYxrjvJmihaAiiAmpnSUD2x8J4bYTXTso98xXJLrC1yk2SwxMbbbJA3jTSgdbf6FM",
  "key17": "27hmM6yAh6vC8GzzkHVHxZo3n31reB4GHzrSKMbBQFcaeZ3bhUnzmtUq2LQ8bAyDxkJiVkqhvj3uRh6b8LRVAgK1",
  "key18": "2vHa42KqPgxHCEwn9PpDG5sLLxuXRBMnF3s8RZE4GTVaHTxXg2z858bZgpbTZECeMVHBt5qkdAojuetRBQDvXp5t",
  "key19": "d2uu6Ehi9xCLeeMT2yebAa7XeSLdug1YFjLhzWEGvPeVJrLy4pns1N8FseEFTMsVxtEfUU5EpcSy43Huz4aziN1",
  "key20": "48FDYjkU3P1RXpNPJ15Yu6pkTPvCAXM4rwdf1Y7Brdj5rHrQiN3qUABhvbjfmMZqScoUS6Pt7FrbKrPXAn9HHK5g",
  "key21": "2hv4YVLFVGqmNAUzz9pzRnSfNDXDzYZc2w3FBtr9XYCBfPGCA7er6mAJbyxzDARzuqJk2pd8FXkX3v5ry4HMxPk6",
  "key22": "44LwrRjKy3SdAe5cgqW2EafEQVNAu7cGbbAqwDL2LugWmx8QhNX4d4DZjnmdjcTwi3dTacyEfQwfeLsKvP8JtMby",
  "key23": "JWxEXBXVGXees4DUhkiYeYtHfSjB6ENAF4VkWqpBFcgWYbS7N7b1SfFV452CP2WuXNt5cUcnGifBQFanMhJtGr4",
  "key24": "5oeiGbm49gjVVcnUNvxDR1FuJaP3bf7d2n385Q92MSBG2UHw6k19ccPHUPJ1ukhv6Lth4aCkcFnAgiNymzACU9Ef",
  "key25": "5KCFzcbymUJkMJr8nVVuRhyWPaaYRWsR9d77tn8oAAG6qjL7mBqk2aHLZarHATzBHYdFutJX75wwAsvmsyfA4zpx",
  "key26": "5K1cDKbxLuyEWjBGBxpru2nNvCnB1oShMc6wqisaJAH65XSdR4zsoFwCQ2wtetMZNAJn28b7aEjDSfhxReBZfmaN",
  "key27": "5wcCmRsXnVPwyW3WFyaGdrRDwWrPVFHCkrz4GLPY8fAjZiRQeuxPsQQKLHf1AFCtWBDt7hPKBXNw6qDGzzHxpF4y",
  "key28": "2A7GFZyfk6bzxoPzc6QVgvxqpCqB1r9W2E3K7ZtBCLSfg9JWBZnQhniZk6dGjjkXPWnDFMvJMYkMsu5fJehvw42w",
  "key29": "5eaSRYrEupJVELZbx75uSRgbCtfwMDjDoCJj2KFwxQr7sC5Suhy9u2sDyPTrspm9h6ZtDL1mkcWn6RBC5HFVnA9K",
  "key30": "22ujw6VGRi4CefBBCbyF2ey8uP3EocnKheakGeEt3hCdTH5BXaemGYJVXxE4qdr3mQyetPL2wqdqMCpZ7ax1xKYM",
  "key31": "4cVCuA7nPW7Hx9rYTQq7CLTsQBsawtFwKDVNo76Dvy5pF2yogFk8HnubWLJnxa6SRkjujJCtSoKxzEAgEpuTnXqC",
  "key32": "5Vy4pPQyH1QX1KQZP7EhLKFdE1bbACC8TZdZ9TC8ouS4uQAuydfwqftJkCfVcu794iYN7sgPDnmdxaPJYPExNsbs",
  "key33": "4HR16aRPtxGJWB7bCKDwWkPqjxy3mQvfS8uYBwuGFuP5w2vEgMrKeEBJxBzotiJVnK7CTJ6muGbYm7cmTqGa8G8P",
  "key34": "2Ue16CxKureZHcwpsSVoiN8pPSMZnF6SqrYhCu5Tq3YdzyGH1anjcvS15SHt1ueLgwQxT8xYpxkBrppoN84haCZY",
  "key35": "3AkPbU2wo1xpRdghfFzcXfZGYimGwRxHUao1UfS5ADC2ewLgsiLiTDvyEUGVcJS98SKKBKYYyZKtF7e9DaDAu9Mb",
  "key36": "5PoxDwcMKtSShvq3HWxJStkUQzrtorxvpMDny8sbT5oRs3vc2Uq3K5d3AQD8qc1CvUmjV3J2No9EoDDxoStdsPLk",
  "key37": "26oogdfA52b6iL3Coryw6snFcdFBYXNNsQfu5pWYwTcGLFUt2quG8GP1us4Gge3DCdb377xGTs9yWMs9jzBoJA18",
  "key38": "36Ppfh448PhkPEjqZAKrBgPu74FbrUzvyfxKmvJepF2x1caZWTZMqMYreUnFhghGaohM71U4wq4dEVcrKPxwuKqX",
  "key39": "4ESTpzBzjKZXMiMcZpZs1NLpnNXkxnmhEv6pnkxNGkFtNeNPuwf9rJtRo4cxPbPfoqLu3qMJso4bC9CTHUdHPdJR",
  "key40": "pBe7pDY5LkMhjk4Mh1pgkYCT8trJ5cG5cKnLkUcE3Xkwu1sMmsZnJEjgaAk7XYcoBAPxe1qz4ukKoib9NmRHDqE",
  "key41": "2bzSgnHPmm7zbrvCWwsci8z2Etn6YxaGcxkTMqMoukQ6VqVDxhEPUogN6ctRGWaY5wmxMr9gG8S1B54G8pSdDmMw",
  "key42": "4mSALRMDfu7woktmxX1P4NJiE9iDBoUesJpvc6kjfmQAXKbDCXEY9S1pbVaeJnQ8UBHJwSstTEGtPRyKt1YJijV3",
  "key43": "2VJrdYabGwmFY9czav3CE8hcYNJQU535WQfj8fdLWp2M4UPhUnLrJdyu1m9jgeQThiSN4v8bmynJboJgscqmckVA"
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
