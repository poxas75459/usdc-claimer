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
    "4ncvxKcsCZQuSpJstg5kuVC4v3jYFKeQ3cpLcbbGZrDBhK9NRKTfHaLWQK4kJCNNrMCfY8awAdv3f9oD17YchW9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGMX9n7wTK68ySa23D4LpSr3WgnYjptpaVtQDjeDbgAzuxWo411nzz44V8ppW2YzNEaY39YshcJgbf4bNd9UGeL",
  "key1": "5mZqFyxqkVn9BbCiGjEBEGpAHiXDwd3XEp36AbY5Yfv8LWDTjPNxdxVRQwf26ZUP8M3uDZkJAYCTHBZZnDAaAGWn",
  "key2": "P4niW3N5H1sF59ejQWjbpqiv6faLox2k8QfJEQtpbG2VtCUYqdvYRmhFe8VMhFgC7aUDAocQ8vHY2F9XVGNxK2o",
  "key3": "3MzQB3upYC77B7ZJzmbo53FCFiXWmR2YrShvicJD7uUDZte66EERqK5BCHjx32Mi7f3WPtdzZs665611R2MD6osM",
  "key4": "45yvdGRVyUcyNok7imynw3P2HifWcsyBDso5E4pLXSEHxkK4aEyFipoH2Z8Lk5UAnnUmQ6ENYA2EwbmqgVJtXpJV",
  "key5": "35adngx3p1dqygAm9fwk6RAYmBg9ZfMrP8ijD1zPbNsRGeXzn6s6ZiqqvaVbBBwzjQra6cs3X9qjYZFX6DZEoKww",
  "key6": "385NcQRejeNViHVU1R4TCx5Mu3G6otuKF5AmapDzi7ZRtHvmNUMr1qZZSphH6Ai1q14bbhKJrkEJYtnYks9TeRGi",
  "key7": "2ymBHbeVSHDdwyDMRAfxmTJDiSdXXXbw2KzHfcnjgKgdDAXpt7tQDaEF6DHmSoCqtuB6QhRdMLgBMJEBzncz34xs",
  "key8": "pWSQyKVEhYPzwQo8TiWQG1Je4HbMGCEtNH9CF6Svvp32dbFUFYYcbfSvtF4MjV9EQzfeby2bp4DhacH9sVycdDA",
  "key9": "47tpKZvssLhJ8Dj6G46GKAf2VmvRnctmf3usQQYBsCvMLNh5xGgRiQqVLc68C9CbjyTE5TvvU8hddWxoecRNNcxJ",
  "key10": "33dkPXk1zkHSKxG7fsNR6k3ETmTKwqVhWcZR9MWgKAj7ZUHRKYvF4AcYVGPdBVZCT3RWowooT3ZnymxScehY6i1D",
  "key11": "3r4P1Xd6CxxJ5Ly5KmMWDt7Nmn25M3fNh84pRZb8ESZMMhvdvngmyNGvH5x5t5cMyrNKEZsqmBmi8bBAVaz75Lvj",
  "key12": "37mLxa2bYrs7kVTp7Qzk8QWHxFBVgJDtw2jwGUfxePyugtHMAXoBz8JY3bHSWNJccotUpWtiR6Uq2w5kArprXHkW",
  "key13": "N6KYsFQGhb8mPUMGQbXxvbi4g1p2dn7jZB51SDqd7NZHtaGh9mYDrrVbKxce268rAcJDH7JLFCkfALErXLwDW5V",
  "key14": "3btsyhSSqcqN1uMvoo1cfdWs3JwCwzfaxxRTR4s1P9p5UKPqfmUiV6VN2gdqdydCs1AAx8ugwj6s1WQ5qyaC37eX",
  "key15": "3ofSbwsWmP7DTkbov6fiTLdDE3TCcuJCTG2UtoGNFN9rCM9KMPzCEKXKrqC9A7kmrNU69au5bfLPBB7QqmFxigvF",
  "key16": "P21uNJ2wvKfDRDAzg9TeX2eixkiP4x3DeJrofbfhizMgHg5tGNwntBFTzjNwqFpr8sAoh1xe2iWWqskpXf1wtFE",
  "key17": "2KFTx3HF8bKKhtAx7WT91b55C7T96tj1SUMUFvheKgPjzyFJNf9Z5sE7rcvQ29cubKyW6KKvNsx8aRKww2drQeEe",
  "key18": "2QesNiVUQM1gSnzmVY1weab2aKbV1Sk1ckbzoAVNNZMEt5txFwuNkkJcYaVFxo5pGfNhXVsVHbxC8wEVD9vLpa6P",
  "key19": "4ujnaLLWDrM3BQ9xSnoLuBNx9ykmL72roixtABdqdQ9u6AVLYkCKCa3gPbEDZFHTLKFuuW2kzeDw8PzZQF9rJ52P",
  "key20": "4Bujs2UkEVv2wAZVU11TgGcAsbddNyigTKaKJACD5EWG2pbEVkQKoymzFMbZGyKkLZzd4ToVEYScqLiAZoRF76Eq",
  "key21": "2yyQXmFVz1QTHvwSnnVQ6W19h9GGEevfx2J8RK1LLvSur2PjSJ8J8yqg9PB14tpvXzh8Aj7m3tkJHWbAXdCVZ4P5",
  "key22": "38g1AJJ1R5NA4TR59ANcL5r3FhXxEHy2BLYMZkqko3QXC276YVe7YKN7rXVM7W3kgMv5JyWUaU7wywBSvsBhUGTa",
  "key23": "24XofoL9CyGBCikYLHKgpbnQznNTjh1U7mngRt2bw4ZcSEP7TEwrSGdi1RGAn12qQB3rBCsUyiMAQegpFSsuES2f",
  "key24": "2agcugGjP29bHyWkGsT2USgzG3RjDEywN18xZ42ZwAHuYavewiekHyqTZ9Y8ZCKXGeTq5zZ7pQUUiuaxNmptS3Wh",
  "key25": "QUYi7xDoovQHB33gTAuqZ7VWba4CMddv7VjeQzZMUUQJSoLeLao45mVHb4UqELxxucjv8LQG7PexG6DhAS4QDec",
  "key26": "5xfEQ8xRBrGYyrGrYQDpw8rVmHkP6RSWxenL5Bn2w2t86jYnkTsg9Keo8v1CtdPeSfR7M4wNBh3zVh1bZBmqmPE4",
  "key27": "5EyHhUu7iSDCBQzfrXVDavXVtEEYCJh9h7GuGreCsbKmUdugTCJorxNATukW6egKibPWucGukWeYcUmq38nw2nup",
  "key28": "3AnD2s4p4TbRMX1EVCApQ2xE3ZUkMftETF7X2e7ogewde7UazsuqJ6wht5nE1N5PbA8S7RRGMMMLzqqLSKGXpkfP",
  "key29": "4sjHG4Cbu5sDMgxKkmB7rjypZ9LEntYodJaZZWtCb7fiwAaT2wMQmX8jLMRB8wf7wMVYGr8EBbRBqeWF7uF5GDif",
  "key30": "2pXK6Bz6Jf3e4dqE43UHAWsgU5LGqtxqhFoVQ1GDNLqyWa5tM37vPwT97TVYiet967Pqnx5gKhkNDXNxTb7m4M91",
  "key31": "4ur9bNMpEEFiskLxAfiKC2UeRqMtXUFsuGofdYW7w7KFLEAS6Ur2TGAWd1PzCbskZNSw1EYwvpHcfCHAPTNvGqFx",
  "key32": "2MeUPNooA2RFwXCCkWaSPStQVTRuHA5QhycrjCvWp8ALvtp5PjiRiF5jDf6XUeD7ePgcbuKDYA5LkADZ4ohwK7Nv",
  "key33": "4ZmEqN4qeFyrpwaL6jqZ9GLHFYfQPaCe5EadRQd5fgzmS2tow5Vask22pzhaJuSXCVkYXQSugYFAEpbfqphs7wbS",
  "key34": "3hcU9iH7itg1tKR2tmUYFtYdYmzVpqotZtqSd1iCUzt9uMiEsBBDs8FPHuiYWo6rNnfADn8RqcGGD7dD29AFiyLh",
  "key35": "VEEKpLoeCJUe7XtTESJkJJLwDSA4Wt5Hc8hWUmQR71Wf3rZwd9Z3o4wMYNMjp1BVMxVa3VhexDkfBmq1CqGQzkb",
  "key36": "3v4Ku3Zy86EFNmGHYwRPG4wC6AdTg5pnMVHTwCx4BffpEisAqznUMwGQUtEGQHq2C993GfggLK6LEdhqokx4b448",
  "key37": "VVz5LSRHwcuqXdc2a97oap5jTiZ6sKcZj1mCHa9aqz6j4mAJccoDbJyQJsgp9RkjYZ38LjJsQ5Dgs7Hjzjehtf7",
  "key38": "ySjHngucNPvj9iD3LS3mseBZEyqj5QsZURna7KnLuzTZyh48Abf6H3S9Q5bNgxARBoMDy7EkKxujhUU6JBQRJ2N",
  "key39": "3G3rxrPKqxCKZKgJww7kEmUdNByffosRz1AcYwU2K9YfKjrdkNEHs2DhMmBybU5XXoy54T4HRZPVqraqKpD7wtLz",
  "key40": "4zC4RUyiWoG7N8LxktVZyz4w7grpWAh4bkF8RRFw4ivXB3W6KUPDR2Fx3sNF69H9y2nd2yXM8dD3Ria33vMirFEZ",
  "key41": "2KFwyioU5u9wcVzBEKnJ8we6B8emdSQ4P9JVXv8b3pL5wnw5vrREQ9j7uPwsyRGaGvRTdwfy9QbsGPq9u5NwQJyp",
  "key42": "35qv95NBPhB77ZKCsgYrcNbMF3finneEU1KayVHaRupgnBTokkgVACaVwUeVAgankWjduxQNzbabfqFx8e7ngAZ4",
  "key43": "3zjfjw2k3mBmX4GhSZuWrFvfJMw4Uib1YcbKrnkXk51JniV18E2vzf2qh4aT1UHzzt6qEfGruZMW3Naq5SjGD7P1",
  "key44": "4SzQSYxnSzEggAwY51Muwfh67qedT5Fy7sXVB5y3s8pFWip6sWNAQYZRKTnBB8cP6zPDrPJ6QQ9dqoJWnezoy9eQ",
  "key45": "2Eq4ZK9Zf2gWhG856R8bvufPbZXZDAVbgdnyG6Mi3ix2ntnEDM5Wb1bG66MzarbVP7KEPw4NBQZo7ffNNJ8Q88pK",
  "key46": "9mdYjH3QLSjmMNBGuh4PVZKipFNnSJWXe7mE68ZYCYQkodasCC2nG5uzYB9ZCz5dHUemhYAHWrq1KmM1gsvL7v1",
  "key47": "4kikCKgWKy9FV6ur9BoJT6rWH6QDYysScixgmTyWhk7yBApHBG6gZ8azoGbJFxhQqkGY1huCJG6wpbTw2akWp6fH",
  "key48": "4CCTxFybtDxnuVXx3CY9WXmrEJM4xmd51M6YaVAH4Uw4qqJBjG5JYPFmgYTJeJVZ8r3kz4euuC7NKTZt3LoJHFAv",
  "key49": "57Nwchf6nRxxA7WKAHXVGn4c1bjh39ioi1icamChaLGq2afb2NogK7kENd8EhkY3wepTSRt6S7f7hCbo2xsLHGcv"
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
