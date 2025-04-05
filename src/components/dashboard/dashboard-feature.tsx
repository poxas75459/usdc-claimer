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
    "4Ehbb3R9Mwhyn2gJkmVyjuZRqYcecNXtzTUT37zmBfEMD9w1Jy7KousYeZUwaYZmLKLoj9p17AkgJQJrjcR9NNiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUW3AyBFxuxL1oQ7KTFkYbt2QvQcdpYmrGPQdxQmg4WLhgQ2jfwKk9S7CtDW7hzLkYumUMTFNESmGX1o9GSLPEV",
  "key1": "44t1D5a9Cmpvi3zZ2VQAhvqnUAR4bes58dbrWLfevggy2Ra2hg38aDceZtZ2kcKnV2K9ePZLGjAU4ayfASfpe9Zz",
  "key2": "3oYBqo5g9bRqUEWAyZ7DsLVLFRsaqYdh8UAC3yvKC75PZL76aFhZSy6kbNgbNQQMN6QW2CSDCQNMCfMp3LTKFnp",
  "key3": "5CypCdFvdpGN3PWcPcsvbF1z8a8iVoifFW5ExbPM7MybvZidJifQqomGn9CUJK4YFpCabuAk525tCyU35pUKJ1YK",
  "key4": "2YY1rdUZzBRhwyWVpW8EGePFTmbvX58LyyJvmrjycFpQFPw1yvLfPVY1TSa4rUHQMiNma8Fd58KJdMPs2e5DqjDa",
  "key5": "4pHgLgNYxccoXo5sdw3pLUzBR3ZfYcFnacGxTkG1PYLsPPM1W5wmaj68tc4W5vXmyxsUWb2m87C7tq93ezue9cgV",
  "key6": "4RZMrQ4aCDpAgn5pmP2mNw5TesJcKmequmEh4FkFaUbzjCydNUY3cFKy2nMRcDAebPDoGh7JeELL1jh2RhZF26dJ",
  "key7": "4PMjVwXRudoagTtKov7ekxKwdoUru4NWN4q7uhmRK8o1vRXTkPdb9Dm3QLs8uJk8MfSTQqyzdnrbs5Zchcmt59xt",
  "key8": "5PEd6EoNpPRb9XhNv2c7qidGNGyf7VMvTeXEUmQMLV5qQfGxNhikRM9VVL695WwsfjTEKZhtJ6N8pzoryMJY5gQG",
  "key9": "3dXdxSVaoyB2ZGH5J5F5kHRRQAcXthW4NvypzYseJEmE1z66HYEtycbCUyFc5z78SDGmBxtYgLH6qMCiwcs39GxH",
  "key10": "3u7CqEgStRXb5Y1MwJ83dHsoAFVbUa3U5PQoqbMEHPT4hAavfmnRnWQCdEso6N2oRVZcigd9C2g2FcdG3BJXq4u7",
  "key11": "5nua9XJa3jEEfiTtwLGKERZePp8AsEazEeDKUoy6bYni8htFEtTByrM71kG7j8aUJXJSgduycsjuNELECBoNgp59",
  "key12": "Ghic3zEacnYmuGDF3Qrh3TaomJyX3dADGDZuV1fb65x2Zkiguev3zo8RL4Hai4k62KxCGqER72GTa8MUXaxAm6N",
  "key13": "18oPxFb7Rbv46xSoRuCH8JnqTUYUQKkza3wSGyZfoLmspJZUTMzDEc214Xhx1SAqCWCH6JiybpQt6Tzmn7ZMsAm",
  "key14": "2hXxiu73ZnonnKxbhFomi89wPGpCuJX2xciD2ektRR79fwqf2PWpShSfyCzc8pTNwLzesw6iBccuvE81TZC671TF",
  "key15": "B2bi4qJrhZjDdFoR9cXh23in4dceadCDVRAr6cqfRzjTRrVUyHtx5QFMb1YdFioMj6DBvpxp7S9h7Gz5xajeza8",
  "key16": "5ecFK4ogimX5JPoVH9zKCmno9MjV7i56Y4sCt9UE1nFnaqF4cFvtpJRrkkrxEKmu4Ti5FuYisABxc9qbKGwowVkj",
  "key17": "51Cwg9r3Y1r1kqnS5DmHUVTyqjJP8BmyWSLzQFnSRS2t6hVjNXEGkuKJ5CfVDkLAMtGGAFbxyXHXmuspDmDbUEez",
  "key18": "5zBtBZ5gnWtkithREcPeK2N9NKEzbzUHYpfCf2QMBkZDyrMciKRLqXPheBSZWb22KBcFMUDrPE5MBdWF8b6Jqw3R",
  "key19": "66jKTV3mXScRVkuFfoPSmzCzVxZwxLDRcdyo4bidKYRr3iWv2f1fZygyWL5vgSBU2xhujZV3Jqy3zGAAtDxHZjY9",
  "key20": "37Zar8nozdQkRVfTXHGWQFaKtq8S6CwbhbdLC4zMQXbd8tgHw8fADBDYP3pMJ4XsH3tDRFXiwwAFhAUDaDuGDgcw",
  "key21": "489a67fTCcGC6uG25Cnpoh2WJes5LihpCdAnA4aoQxGP8EG2DTKsHUkLL95iHoTcXm1U2FXjgW2B58TtRWiRX9R",
  "key22": "frGZ7x8Qs5fw5g6mVZdX9bTHQUueEqyQoBdUrgJ1XfzTAao4uoUieQCtGcw9hKcnS7aZyF3EGqDYiXG6KT9VRKF",
  "key23": "3CP8GED44LBDpqguBBcGgkgPHcvdUxfwFP4PhGzFMSYmiq3Ah5YkHcCKf8h5ukuhmxRVpLzFU3ApFXTxCpUhkJ87",
  "key24": "RL87TrjSwpHqZF6sKFm46nZ87hRfZQ12cCNkjrbVQ2Qtkyyf2RQB2r1fiPRdjwPNwhGCHhBBrktBoyzzsDQJHHb"
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
