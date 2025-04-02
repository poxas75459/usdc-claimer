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
    "5WtsgQHEM1gwvr5qsnUQfe6BdiG1gfAYLnEAvk9ue5LcJjdsanY99xPcvS6jAobVTJ9kSGove5WiNyb7xpt8tp6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1W7vF6troUqJR4tUeQmSEy4uaGtBrN8jBbB78LQuXDL3Hj1P2M3hdjHh9a1339mRA5abELDNFDdjVZFGiSf8Yu",
  "key1": "3ocv76z1Di7YF7Y3onM78GiX4LX5jk4A3pPAvLwvpvSLgGy2HS4Ein9iNsZyyGWX4m4St2Js78ipn3pJywEjRh77",
  "key2": "W5X6RUkPhpJrbRKbeETw2axHxnqwhUsiXStuaCpD5rVuFJcZpxVC2aQSnZ2RDcNvYymXrncqindhnJLVcvCqezs",
  "key3": "2mS5CHfMfMp6MDrPLVGpMseREaJ6ukZ3TyjsDigtkXfdVXdDumSTDFrJKUSbCpj7wVrKUjBJwUEbd49Y93FTRNb6",
  "key4": "38DHdq2Cjwin8GMJyRnoEZ4WSKqxeJ5meMckiq4JcLU9WL6mKyn9DBejZZPR3XSnPzZG1hvXuGMNTXf2G41uZHnz",
  "key5": "4ybLxD2LYW4NCoZQYT5nTrgawiKq3GKygBB3snztExE2oXc5vMYTsNxv3x3cYpFBhVs3sCrZN7yEvVGnswaq195B",
  "key6": "KPu6QustnPTNFehnAqfBEsoDN7yWwtm4cV1ZRwT6kUXoYsNjWGUHkKGFsptYPV3ssK3kHzG9tVnMGhS7fCWgBuf",
  "key7": "4htTaREVgeXLrhA3GCZAQ1EU5XcYSHYXp8Pn7MTj4QnTdXcpsYpJM7Uu2aexfC7ngkd8gmg1bHCshGwRNUtQx9mj",
  "key8": "3Qdq2DjN6WuqzWRYK4YCWTiCxuGzqnY1UowWZs22C8aSGdSKmV7RykVZAEh5AUnJpNH3PNSJo2FQEHiMQExau5Rw",
  "key9": "5zwVrCjHSWkUkTujtDYNn5DGzuf2DZFWt6tSq3CPHMHCssWSy3q5H6qqvwskR4Hbns3z1YBssEodnTX3UB9wG4V4",
  "key10": "3YhubVLfgwbBWQ9JyqmJCs1ndzV2tbX1fzwsw2qfMuyagsVfbqVdr7ByKPJUBbUVR8vnqS9WhsxxSkM62VBp4ttj",
  "key11": "5HggmVM6mS77HFfhdukU7o9bSMc9dBgHgrtERH5MJeBgnxbiEojTZXcJWzw3VJmJCpH3hVUW9Ms8HAsPDow8wvxv",
  "key12": "2uzLT8sdNYN42DDuhhe3dmJyEqB8rEpgMS34pDU4yLZqVbpKDXitZH4nAbhB15KCKmetRcuadeMfnABkyzcT3AeG",
  "key13": "4c2bb8tQhvX4oBEH7C4wREtW1ZTUv2QCbCdPKAu3invsZLabMSwp9gMV1GUYBW8JuWybj2EpujmbANPYakC7YEiJ",
  "key14": "2Zi4pC3tY6T8HK2E7E8C5QWjPXXQimJDbaXU3ahu37YggRUGnstqkwqDi2NYs14KXU7a5krowfGt6sZdrxwwoxB9",
  "key15": "3vBzQyRZ9G9j7mZkTgGhUMDXEFW2uR855p69DmVTajB5tPRLgG2nXiYG9uZxGH8ti52oK28jnHAqqPVo1EEoycpT",
  "key16": "zKSzoNqKGD8p37U4ewdKUBadURVTHa8YDF9awrqj454ojZtoW98PYF7pzAnwF1LJJWT7KGbSyEfm3C3WMhVVEQx",
  "key17": "4GM9t3BiqAaA8tvXq72cHQ7zmF9MLHoxsZ6H6oDEKyZzfi9U5MbjxFdQVE3Xy5Zh7UsDoyMRLKM85342SfGHdnZt",
  "key18": "4dEdPhMgkTNbErdfLBLLTxNurfB2ueTJgwZR21k9eNC9oYhZLuzTr1xk1ucGED4QZ7BcLMS8UhWEernhWaETzpEb",
  "key19": "4LXWiZZjXmxcYf6oEXDvreka5kYs6BLaUnFMnPiRamyx51EDruheHqopzm9S6bU8c7LXncd6baKjvV7jW5er4Usz",
  "key20": "PPaSQe8t6rcP756BDnBX759vozdgVn24dTMff2P6DWH1F1TAkkddjVCF8PhWRwxsj7wEZf2LNUQXnFZSnZCo3oM",
  "key21": "31AiPHHBXRogUwLThGvw8Tq46XwtcnrFYEwLAoSmVqo1aJbiDvCvbiTtWutumzbh8jaqg4EAprDVLxFbwDhEU4sY",
  "key22": "4V1gyQdry2CJMvsPgJnLHF3qjAZzH8L9kYi8gPbxA6bwmwJxYCzcnYZ8Bo253PvojiDbuzUTintA1YCmDRUJZbRW",
  "key23": "S39MQXqhNHFZphqFQQCUvPQ2s3KLaxTQeGnURExcjtSXK9cG2JWzFUqjfCxFtQmJ8kgqeJXonHEFL2MZG2SQogh",
  "key24": "5krGy4B2SP2C4jmHtsCVuWGbnedXvdCFkM89Xx9yW6UdRn3t6csGM6MkJfq56sne56pH4G4CoXzNq9biomcktCXZ",
  "key25": "2zV28fEQgDNHVFxRPASx8CKHjqAX1kBt49ESAts7segvUtY5EiZsbiPbB1SP7X2xASEuFcY9YjXCut6nq4XjhpFZ",
  "key26": "4fwoHqEh85DiPfhxyTCrqL6YFd1fqzV3np8rKUdFgKmQEN688i63tQSL9s7jti4FmuFWeo8m9UCVxbJEQMi1giNL",
  "key27": "hyR1t2nGsKEbPm2GgAzULrR62zipryy7cx85y2nAWx3ZCQhSRj2PHzd62PL3zrG9wiWqbNbC6rPWZDCqxrbXim1",
  "key28": "3tF2Z8Pi5BqfzbKNg9942pGNFVawgmULTVQAAuiAVWjhsyjmHgxyBKMmdcTWtFF9piKBp1hpXsChPKfaGBuN8grY",
  "key29": "2fhA7NZvv54gLTQnHQTv3NJFuuvFXw9WhFEDSkxvcy21qnyr95RKPmYWA8CJ4a2RuPJksxBcsJ9fYL5v5P9EZywT",
  "key30": "4yzm58RMJBkhRK4FtfjKS8sd2JiyR2kT7RL6dUqGG6cLomQEGTTBwjGHrmHa9EDypW8BBLnmVQLHyyGswVmqH1b4",
  "key31": "yvSbcrxGiLrMw9f1wdSP1cCdFsWYmuqc1aqLuUFgXW1Q9mJMDhLQCwa7kX4DezF3GSjyJa6RdUJhQYFwA8cavNb",
  "key32": "5YotEmPDPAAuJXbUG4rphdNHz6uVW14uAPhpbtWEvoBSbZ4Usms5suaWNMkvWQnx5e1J1vBuWWHT71c2u5JDKv54",
  "key33": "4box6uBTx4YF1CJi5qVXckDtde48xRFBQdZ8x777nsR5CerUht3RjCtmEKunuaZwPg3RjpaLqn3gB2SPdov53c3V",
  "key34": "4aJrYe7v7hihpnup8znLk8vATVeDxosCPrWYGQPDw7sSLVYG5CRvEANFF47ZGYS9cbAa4ztEdQhx6JJXeq4JRKBg",
  "key35": "5goEWfxqFYTT4J1jNsJr2hqFxtxCoefoTN7JmHftjHE6vECJX8YS8tUVFNDt5TPR41HfKDKRJi5LPEgiiMRbacki",
  "key36": "2s8zbS9aKtNTiNC5i71zvXBzHVhnjXsvnu2G6knEbtd1zeY4B61F41yT5m3tsARR1DbiJCsrBgbcTwqKRmJQ8UmN",
  "key37": "4BBzCUTnNLpMQmLEfF7XfiSNPzDQae7fDpUa84H8sUgRM8WjyFUH2Ygu6gfDbrA2LQajw7ni619MSisWPrToR2ZX",
  "key38": "4agiotJwPxnFeW8cSVPsr96TcbEv4ExniFqFJ3sBayEb7mH1k9jHoLgcriGwsqHeerwNNwQv8KxXUSxaXviB4omq",
  "key39": "FSmsgRMqhjn29kZ2LspCBzVrGHDfS9BSXrZS3kEDtExhGnQWv6aSJQhzNZRFTBCekimMyvxCeVCEmtHEBZ6D72Y",
  "key40": "57wvg7byqoq21jaR8gbo94vgHaH88LgBTzKM7oN2Dw3pQZT7eW754F6ur1VSbNkvrZMWpNZ6giFHBgyfdCcgdi2U",
  "key41": "51ALEa6tdUsDQdySrKqb379yJ5SheDCNWf7CPtm9zBrscAxiNYiZL6zuHuJxG9DcRzrz6ZqtD3Jzcjm5Tad9ynN9",
  "key42": "5JL2eYBtu7418phnGwkuce3VJUZ6BJxVxxJwa69xscuH3hY337k9jX8inqZGqhwd4cE1rkKD7CugnCYSgJnyy1iM"
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
