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
    "5YkJZdH81LUpFkRu34gUa9uv9gPA5d7324Swone4gJ7sP1npJiEzjafcsMHpRZd3sD47u25kWGP9WBXD8Ch6U269"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYCDhPUTKE5khyvg52LdcDCNngCQQUtE7H1awCCcmi2aMCAYxTVuLkaCMYvasNjmdyDhbFHZ219EtrFVzp14dYa",
  "key1": "2adY1ak9cJ87YFGZBTCmPnmP6g4Ubkm7WAx7Q11AjaFeZDPuupFLdh82RMAVp2LUixjQWMPrfBM1KXNZDGVF8JSc",
  "key2": "44BAydzWojjk2qiqZQ9hN4oXt9emsRLT6Vmykf11EXCq4wVmeAaWnDZLGmZSVnHqJ9CVNHeUfCeFij38Bw7P7kaz",
  "key3": "5Jemg4FLypqqv8d7XqeddWrqNVPffY7Xt1Qsu3Mz7yv6mtZdq4pxK7iCoo3spGfuHQZcoHJ41dQ8e38SsPRH7ndK",
  "key4": "4uq9YxpyERPT3aNZTs5nbYSB1S6meReuwaTYZUmsrGrL16NCXBE9af358WJQG9is8YgCnnQQ5C5LS2hoXucphT8q",
  "key5": "3W6YmYTzGJWBLaEzgs1cQ12kbzSChvvgNtLmZM6mziXv4FYVqLW9vXK6x8mqWzYCt6GqDFbGWiVnNn3obKzDkSLJ",
  "key6": "5xyv3S7Bz5LZn1gwFdjsp74fVRPsgWdR6LBdg7NZuLReyXgdc7JYrVge8KcC7LgT2vwG4iihdVshwDH12MLfvW4",
  "key7": "3t1MVHEnCxKynpXLSsoAtjaG6iHupp3Fnbcmu7aiXFkPwFsHSrKuPvJJEAieBL9yDGwVUKPHxGnLmXxXmvnQbUaJ",
  "key8": "47jvPk1n48MqQkvEKoZ12R5U1k8xXt1zawTReHasRVaRKfSt8iHpZQrkPecCj9zhiRpdFabnjRyHWvfucixnybS6",
  "key9": "45vEMpxaUeUaNzo4CCAJS3DYWnrW3TJnGmrznFbCYLkraD4J6zxefeHKBkVmnnSZsuo23uKuaPEB5KRZCepENbcu",
  "key10": "VCgm2GWwcx7T8jfQ739UwuJJ2Tgek3GzvVqbDHy1X4FEJTM5QfS5ohng2sTuwaHSDa4EmwEu3zVD7KJNR8pyvsu",
  "key11": "5PdB6YiriGsq9pY1ZmMnkmPDoCcw7Btw9WYY5jhfwuJWiGUafYSPchrst8JKSnDissc8xbx68CZQFZJccUhE9BhX",
  "key12": "2BWZCecpAvVonYp8PLusXvD6RDL12nvPR9fzLk9SDiiigGMduHVkq9vsnJqtnZ8pM5tTdb8K7TxVjePsLFm8YyAz",
  "key13": "2xMckADrkxRAsb6G9bvivmo6L699CW7zPWRYyuhL1hkZa4JGMAY3LpzMo8SLEApjNWiF1zeAchAuDc3eHvaNhCYm",
  "key14": "5kG7UZPySFuik1CubLkCcHYNyAumY75xR7ee3ARGJ6oGrEpMmRXj1ovXCZXDLRqNtMPAZMJjuEzywnAxr1qC2aAL",
  "key15": "2icdYU1YU6TJvHpnkDPKDfzxWE7kthqi55voyDZZXs9jDuPhAWyZmaUTnZUDFdeNzPjagEG1N9cD1j44QRjmVsr1",
  "key16": "gZip8iVokuwUvPNsKGT8TKMAabdZumLcMaT9fR5rgctZ29NWTWLeGiuY3r9bf9NhH6cPMn1y1aRLSN3xm9MDpn9",
  "key17": "2qt1whiQb1TiHX3M3c5M6iUonqs3Wh956WgWUrpZZHqDeiNx2BjydWKEJ8asgP9VXJpvcwiiPd7FmTjfR5jJvAuc",
  "key18": "3a8vgc8QWUUpp6keHotpnZi2AKtmPjCkjMiZp5iSDBd5PRK7TfTAUsTe5gQLRhR29RhTcUoCB3awyPBUuMeV6Jpa",
  "key19": "5aawoFX94DJztzDT7hwjBZBu9h1XUUVE35K5PK8KYFBycGyCnVjNYipq1F7BpgPKUYRjBMrZ4WczNF179WmhcjUE",
  "key20": "3Upvf19XuqvTqgoRNhS6iMXtMpgRsnP32ELkfiByuua9zE2JYekeBZn2Hxq3ZTUF2efn4fEQKcEC5dXVFBY8dNFN",
  "key21": "61LZMKuCeojpJSPs7A4QAdBn4nwBkPDkQoGCwcyfvK1Bj5t7nGgvTUxSCgnHubxuDd6aqVcdX69itYRyoCQmccG8",
  "key22": "46RmFrWg38sZVNX8VX6xdrEfKAfz1meDhQap1iQ1QSdQL2DFwBkiuNyrFhScdGCrqyoFngb5gVi5gkLNkDPesWHk",
  "key23": "65dUgPFKUVk9Wn8XKsgF2yLagS3NLM3xQAtTKQstZLzBcQyi3GF5RWw2AkKZKz8kpZpDdmGgvU4UD3RLKWPRAVpJ",
  "key24": "36mh24LcnGgMj6kisBoznPdNMbxApevWgSgmNca3m7DtpapbCMZxfv3KtKves4nc5kaZ97Wu3dPykmAeyBE4v6A1",
  "key25": "51kEPiqE1HxVPPp5sfDUz5m1vFfRzrjTKRm9syN5cYAVmGRHcbutDTbGKHU1UiFaajDDMVbWuHfnzN4pnw4NomLq",
  "key26": "5rHv4JiwAVwbPmgPiWchza4LJuBMQM9ibuuKm9wERmWaUANX982TwbuW2i83s4brwGuVj6dMvZi1QcSbMmSVfCM7",
  "key27": "2FWTJehi3Bb9yT1j23UrcTHqpCXiBwmXPZAMGCeSLi2zCWCussqkfm3Fti1x96oP6ZkisBZiv4SZgcwZhGgGgcGr",
  "key28": "3TkeSrhqP4P9HqDoEvwKjDwtggD9kJZEhRmJCdrHUEu4jqyLWntvgRVDABmTx7YQmaMyajY1GXcjZ6zSappCiXe9",
  "key29": "3WBGPe2y7MMCvjYpywND5sL2uVaFVkjM8khNPY9aVcB44mQWHcX63TkMwJKMhgenXR4bTGrLnwKxgT5YDvqMPgBq",
  "key30": "2U5dBzcvVxE8VyYXjpiqJNWucBXHNBxAjrfDtLe6c8YgWq2M2fX1WchqHE6vR1fE8dDjcK4n4N3jFyFBQaRqz8NP",
  "key31": "3VVtcnyd1Ru9cavdxw5CLn7mycpu7MzUMmugkJx7fAsU6na4CT2gM6yjRyUfFiVErt8cjpAwhWSD1bte9mGaKPHD",
  "key32": "3xWAymzdzotai3t7oBUQRTsxhcwztZyBYJrBrEvctUjUZyHP2YPoMiqK7KcufcqJDEcRhcdPhTgbLvMsHRQaGSzQ",
  "key33": "6TeqYb5n11gBgPR8AkCc5eqxNYgsDJBauPDPUCzGaC9iSYXbzg9YoJh2sE6AGBUovwonXKqxJsNmZre8Tz2fhXR",
  "key34": "5aCfaHVwcFMYcVLxmShDraDByAKXgcWQTDvht79Yw1fEdEB9uPCkgTTH1qcd7bRkmBCT8WqvM6Mn36ZkN8VKKspU",
  "key35": "3zvEPDW6RkrTNdAWjWfWAtq6HHRTqkFKVeTyn9SSdrX6KrTnpv6AChvtoBntw7baT6yZQ6hS4i2hZMoPMTBLhdVN",
  "key36": "2W3o7Nf1xumDHfjsLLgksxmJrvgKj2fxmWdPDdSg3DXHvWmM5HQapjm14HJTuVYiLH7LvQ9z66iF2F1VZF2HpAzN",
  "key37": "21FfGyewjk3z46nLDz3k7avxA2FkpYHoek5NozkayoAAgzM5enpvExikYVBLqCtwNvNEwq8da7by7f2NaW7RzhNJ",
  "key38": "5zcB1rGG3oA8qY59GKxYu9VhLCkWoTRXfwur5EeSeyFsMdWFgdgyBM2bdBXAGCQ9aErSR8xtapS9o7mUhNYHb5Qs",
  "key39": "4m2v9FphM5Jtwop9CRmiNPYCka5sSAx6ktXDgMmRhh6r3NoemyZ3MZk6sHqb1ofmpB5ZT4oWt4LRo4xFwuWTp461",
  "key40": "5sEUxAY5WthDoDhp3YdXohQaJCyVmC8qt5tfaP5wMEab2aNUFqhBXVDk6V9nHuzXKJLKFakFvF17BM2ggsTDb5BA",
  "key41": "yh2nisXGhyruJNNpcrfkTbYNqkZo1KC6581tckTeYaaiQzKPyyFmbMDP9dq7mAE7Qdf91KBt13rTjQwdtNHQPHe",
  "key42": "4uwwpvbJnAsALFvkqCNV5vMsxR19215dE3W2km8HtX9QHu1Gs7r9Dk1FKfzsPE5nWb56T1aoEgiLNRPS8djjBaq5"
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
