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
    "5n789QNEyGR3gzboPJHbkpf2thxyL5JzcSCzyxfzBLpeTRhnZKeTHrvYtPsjb17EpjSVZ8SD1DceVc4DG2kxmt8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47brUru3bsPPHx8ZcWwi1dVT1MfjuBRKsK9NDTRxXFtCTEdg8LdW7FmXkDYL5Ub6Wye61gPHMQH7YhZRx1J7WFH5",
  "key1": "1YB8zMLJ9vQoFYpjAHcq29DyLctkjxGLDUCekSkdbU6paoKFgQ56REvv7yEcCqZAbAD6rBEkNvZF6LhGtQzkCkS",
  "key2": "2MugAcFLhRS97cDvXwUz5qLkWYzUDYSsrrQZT5iHqbdma1bpesZnzipY5Na8wYZjq3pXZvTxwTxTGjQrSVWtzbRM",
  "key3": "FgNBWNtUqxTxiqFG7N4XRGdXMduyVQfhZj9B9LM8frd497jWbspHqqb2rAUPNeLErKa34jZMhbq8z79EC9Dw2qW",
  "key4": "2Kq58nUujiZVRw5fiWbA8ZWy8mPyTjcAWxzY6jkKoD23YdBvFYR4m7vJZwRk3igvcuud1arSgQJssCsCrAboYSx2",
  "key5": "3UhPLkrSmMP6p6D1synseovVJeSRUXQAdGe26FhEkGsv2CCWqNSvFrNw4NyxQ2oXV5s4jyAtLpmhNXbPva9bRg6",
  "key6": "36GqGzNko11eJxp8zvmWFqcg8VJiaD3DLp5iiQt4PRKcjz3Ew5MejiADZSk6QAHi3WtNFGkYr6o2Ypi9t9mhRMox",
  "key7": "imJe9P4ZB95HcN94zUasKFM482bCr3xfvqqs8kiJPu3wMckTMjU1HFsBP7z4Vkz3nVwDQaqvgyRSpb1KnPzLAAm",
  "key8": "5qG98q4xAahcu9j7z64VXTd9DpuCBSHEC2sgwWz9NG7SxnDobAak4GJZj9s4bZbZFLJa2Tdw3ou7DL33TVxA8Sad",
  "key9": "3vE6diKybrmdcVWCy7EgJBsKjQLmdAeu2hNoHADfhS1o6MNtMk4khPfjZgKkUm7Xf7i6s1U7VVw3ix9WnVN2oxYf",
  "key10": "mZU4LKcrE1sYDiKeTU1BonoNAzMabc2c3uasFX2nV7d1hiV8crdW6Z2tyqbCSegJ93byvm4TzJB9RgSHu14Y3jj",
  "key11": "61c4D86HAFSCKmEk6LKJw5Wo1aqaVo3Sub4N7UvkMQ6r2bJH4cqDRrRyeZkYLgZkVyk5zA9D2PirpkYHnwQd59sw",
  "key12": "4bgb8b1XJ72nthmaTv635jV99jER9J76LRYuqev5KoLf9DwteFdAcpWP3s82drRBqCVgRddhxphvymHZMa2Uv7AS",
  "key13": "4A1uNk6aCu8Jswo5GWo3EkpbAbCc6WBJDL6DAgKzo943RrkdoG9AXuCmR9rbZ4P928wY83JEZvcUzfTr9HPboRDx",
  "key14": "2E2HUUbude44BReB64xY2nEuQsPpadsD46WoNF8uZRCuc1rhFXtNsDAWvGGxj52fHLVPQVyG2AGcrycTMLEJYz9P",
  "key15": "4iuJbpu7F9scLzttmZohps2MrLTaLpfY8aCC2LPQZQ4RBfNhFSWYA91McEfgrjGWARRgrW1LUVKQYwVwaD6oyAW3",
  "key16": "39pW5S6wdCbC6WokqyEZSzGgw87PgTeEe9ZPVtvoPKHxVxoKnzn154o1q4smtQJZ6X6WbuADLRQ8HLFsN3V8zc46",
  "key17": "43y4CH8E8hDfmrZMcr2KWsZ1iUu5arhvTZgEZBdSdeNaV2WChSUewJhWmSdkNSaAvxf9Ewk6j32fH9SRE7Bkt55o",
  "key18": "o5aeXGLm6qj98FrShwnRfhp6rayXKDCBRvmXB7mrRZNpN3dTMmfEEv3Zs3QXaKVZLxpD1z6Wn7u1VbTXp3cT3nx",
  "key19": "fTgzqsVkdjfmKCyVhgv8cchNqnpz8fvVndCpSgRbabdcE6ggBQPCX3tqBBo1yD3gLwjGHMBZJrRaTZsgs4ttaHA",
  "key20": "2335JttaheP39MrqX6qui4E858Kon2LRX1UFDNmAaznq243KpFwaXDZ6czp7kvx67RLWnMfQFVhzego91dz7zo98",
  "key21": "5dmBeVEB5kFJwL155j9NmBKgfAzPQ5ALJbGeZ6SfnCsV1wwzJ5oTxPsB35XoMdArBULBVGgTv9mzRARVddGPpCg4",
  "key22": "5VyutPt1mULKNonaH5zt3FasntekPEigaiHoFTG9rgcJgHd3RkGB99LZCVUDRoqQiuR3THHV4mnQ4FDtqqT33aji",
  "key23": "QCwuXKaxh9Ypht3VyhA839WxSGBfWL36UnwZ2uyvzyUgFKrUeTJupYPT6ZP6G73xGgj8cioQgyLUe2XiSnquVBa",
  "key24": "5QtBCaCGYEJHeURnd3nSyEqqVRJhGswsEBJ5A9yzbNtgNAJ5sQeyiJvhjZBNzuxp9VDz6JhHr3GFr8vMLAGHskwW",
  "key25": "miPiGsQ77ANjR6eGTnfy3gNt1c4PuBGLmYnQvCuZyTk63PveW6Ts19BfBRHbCacry3sZKkvYgns1oA1tcoNJwMU",
  "key26": "5KCGRXd5rqfFysi1Nzooo7pKceW6o4tsbxLuR8tuQn1vR66bKp3ws92jvj39EDuBqrsd8oftUJDFetgUL1dhKY6H",
  "key27": "4uat5wtMaHwbnGnH3tLuyP8ncE1Cp12coBo47grqkT1RBViZvbAbXgc2E3FmtRrKFKz5tNVSNqz7fXsAYnvyDWqX"
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
