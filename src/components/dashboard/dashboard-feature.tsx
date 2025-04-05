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
    "2P1TSV5ennxoottQ32g2LBLub8Ue56vrswUcFrHVjWzhV4dC5e7pAKWtPYQdJxA5Qr3YjL9PbL1kfLHT3oMNhMqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rLpqBkqWM4z1EMPvoKHVJgVihznmEB93NEjScic4YU5Gxnrd9sp4wraaeYkT8F7XDKkHEMxtE161Az5LxMUAEZ",
  "key1": "411RcvL9VZrBV5jQnFxQrwn2mbJXxcg25tKtSPWmVYgphzVXBG5Z8mnBFgqJ1uh2Uh6N53cSqB6kKiicAS9jrBG3",
  "key2": "4WPnG2AMjDsU7tD7AdJ8N8XwVSQy1bijaX35SdvKEYwr1MKFSXVNLLAN9S2uN9zjMJac1gqB7cNRVyy9yikNnCjb",
  "key3": "48FNWYta56MDTo6Tn6Up1x3sFMXApnKa93ZNBEfJfeKSqzCSSt6K3bTM6ae4gHk2zoiWUoCVhDbEE5sJr7Vjm9c",
  "key4": "4wc5n7Ax8ER6Kpavu4doW2fR4w6afjVExdijuZ8DJJ3xQcLosiBhXxxvDrLnMZRbrho1Ge3tY2pwKFVCLujXGJiv",
  "key5": "3qyooqKRdGR9QEnHyJLWGqBpU3c6voZs4TqmPGWfbg8EN4Qp7mJDSqDHrVNzuWViikxXKLvoMYEfh549MG5rvvaG",
  "key6": "59ETddLJz6FBCkkSFvUJs92AFpTz931gTjJd7ZHQWb4C4DTJwp3ZUkN4eXqqJdy3mPErrrEQAoenCuBxvGm6fNue",
  "key7": "fyhrYddNmUiGRrJV1XxhtMXGCsEt5PFzd1qaC5QXPMrNit5FRpiZ36Z7wCyZT8qERpMHryB7m9AxwEs9E2Uaxtd",
  "key8": "63nmKonrRJNg5McsQZToQCqqGtNfEbMBPMBSwZXchwaZ3pR7Z43g9KcfTr21q3jdWJNbq2tsD3C842gZ5jTWkQ6M",
  "key9": "DZkGdQJ6pdLvtdbY6kSzFiByLMHriLLBASsMzm6JZrh1kqST1135XsibovQ8MUTd6qKWT9hrzVoKBgSVoQEUfvN",
  "key10": "5xynCGweLNDyJDBraZgpCPoRwPjvR5kUwNLTZnSZSYPRSmveAkNzACVu8dkcWJAq69noCGMZgVErTq66qsiJACQP",
  "key11": "3n3XoTGJsCBeqowtyq5SrwkuQQZ8Dxr2PEwJzqRvKixYqYqYkjPACwdD5CiW6JYMBt4Qg2wsAKeE4Nvh61dAZCXp",
  "key12": "5xmdnZM5R7ZNTmvQ9NnCig5Wn9Jfs7h6J3iaQjNTfDL9CJ5QY1n8Pbxb9otwB3HKca81gwyuCe1Xbn8LtG9AWjmp",
  "key13": "3SqZ3EPmvXG8dHghe6YUzQjGvSM3via5cp3MfExoUSMZFGRhXo7ibBFugXp1X6d5znZgNUzCRbSmvTrkXHDbMxJC",
  "key14": "4ZQ8jd1UZQ7iGePGnsbYriWcaD137uECgYW1WoT2YG9ACQETkGD2noYk8svwGxpGRpBVB1pMnZHGhGhV7EA3xG69",
  "key15": "caKWzD6n6ZZTsvd9hRdGSrsuKaVyAuer3TZMUJmK7NLPj3vmcqFatoVAQT1RUbro8R6NS5Cy7YXLFRkdAdCJvyL",
  "key16": "58AqMxWL3Z3FRVeGuTkivgjTZpVGMGtBkTXQvdS6bYXWwEx78xe6QEJpETTMDdSugHnW2UuyXjdWqjYFXxCy2WSs",
  "key17": "2i4LL3brQVE9KsKnMr2hTXDUVQghxg4xmYNjZfDNuNAk9rXcA5e63fQGJzsaK2zPY4SrxV7ynd9VpAbbYkoNWfng",
  "key18": "58oVjiecKU9ZSdpnTeuXXR4feMHn7chcXVNFw7guU2CwTQNUvJbHfg4cupSP8if7jvFAuyg3NQn7JxUJg9NcDLiZ",
  "key19": "58kvSTP4fU3tRNY6q7AfqYzvDBFX8haw6NwEnjnTeHGjXDnp7ke4ncc9igjrWqj6YNy2FV6bUXzH8dDLiQ9MuhqF",
  "key20": "2hAnjCZGw1S5b1dk3xFFGw5ASe26uiaQXMiqvsgZtdiQBZrLaAmmRzUZrQr4wbSAKTeDnxE8YjJMH7v2cayG6S4F",
  "key21": "3HvmjFMg3AtEpXDbZZjBXuMNtKuPPMGkmN2CgqvjEFatG291JtbTRYymMeQywwTviuooHVkXUaXmd8KRBUkn56mU",
  "key22": "2a61PBbudNcZ14vRM6fGiLYPMMY3NEFKwn5787ePWB8EGNaW9mWTYxMJLwEaEtxDt23SX3DDj2v6a3zPti7rxQMd",
  "key23": "5CLH2dT689qTYDjbmvFNEPKowEMBnpYzUiPZoMvhKLFa8Dw8owHGF8B9Uab4c9av6nW7Zcj8RxJ8B9Mj9QDt97Lr",
  "key24": "4tLq2YKzVp3L8EEzod1cbm7v1NgQo8Y2hGiLkv3TEwRnKteLHCTJvBpnqShSjDatYiQ3eDbgh9VqgqLipJ6jtB9H",
  "key25": "4zZWHjXwjuAVYDi6ewGfQh6WdNcihkRtkDadwGA3J4J7Z8tSJTCPwipWPpFJJAJybM9rk2KDmpgamrxrXVobciM1",
  "key26": "5sdyJJh9v1ERkXi7KC7VZpRcPqkAJbbrTE5g3JttpmoXDbXCvmKFM4WSuD8B2UWdFXT6bdij8Y3GX197JLf65zZN",
  "key27": "5TSvtv7w13FQWnabXTsdpmPc39e2uxYfVnjtnn67AKCPDJfGSvPW7zQtGL92M81y4D89bQu4LPEZRxUNcRAmGV1M",
  "key28": "4VAj6v8eoAxRUdDUA9EEmv31DWG6DeFWnJWwQEsB1f7ZmVBYcrg2s2KjkEfHHnKE5rsFCsofkAfwk3i8xMy6J7YS",
  "key29": "3YEjheyPfqfeNuSCHqE9hxmXNNcXpAj4S9KtP84aTQKQi7EDqXxNE41TpGhRLMgmRnFhaQ7HNEX49bFwuh94CR9i",
  "key30": "3TM5CDB2YXYRKr9bNrQoCoycTphK8MQmYYeWRskGa8sUJGL5bTaZjkRstbUBRBFvouPSquFE3szsVrEersZ9vxXH",
  "key31": "2ajAiLA49MZno2feNBACky2WiKpocVp39nCsuE5BdYQfwQWRxjsZ9JNutsxBnaKN4cWfhuZ86AdZ2ps26hq29GiV",
  "key32": "W8F2rGaPs2RgfCZmSsBtYpvFX923EDRT3kqtz6qQCoxZeVDjAuGMRU6rgmRRgC7PrcrKTfA5QrmjEETAZmE1fMf",
  "key33": "5gsHDa2HPRijP3dmTBYxEc4cBjJH1A4yvpozEat7RsM6sfv6mtz1VAkWU7FMn3vhwSQ9MjGCepETSDZeraJgVjsF",
  "key34": "418ZqY3oxPSDSPkBk44nrzSjVJvTE1H7xpzZ24nSXQT6mf8gvT2qgRMqKt4EdeZid6vdUm1XGApGwuyuJg6QXAN6",
  "key35": "jjRN3Ud2LYLZrNNzDrtBvi9RpFpbid7HDx5n6o2rayAVCcqinbLGCcHTqKnMW8hCqmpMLqFg8pv5hhYoTGco3Nn",
  "key36": "4BZ95yoUd3yh8hdMW3scqi7G2weyeX4KGzamYSvzEXumW7XtXD1tybk7jtrCk4bD9eZV1zZLFX5pYpZSJ8n1LAXz",
  "key37": "5cmAe2arBVpqrsQ8TUHN8JRZJ2BK1mwHs1Y1uc7rZx2mem8YJKTA1qPw976L2G8EjMxoHFQEixQ9zMhU3RfDCzWf",
  "key38": "3JhdeaZiN3SFHFXyTHJ8bXBfsLsJz3A6nn2DXyLTFwHBmVjM2a4JYHnwGipmT7zdztzgw2dijR7kLhJPasmapYMp"
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
