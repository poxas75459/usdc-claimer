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
    "4f9uzSXLnWQGSChZW42knoupVTRxyw7kFdZs6hkRtgMz3UHseTTHeF4iddf3xVjHRy2LFNTkvEDZVYq3YyzVv1Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QtKcfhLNbFUZgi751QYpMbUDszGiAN6FTaEAfj81JDTwFo2vo6MnA29D7mCPMWEnSRUZkXdK1SuNxB7x2ADPSS",
  "key1": "1VzE83vwvahoGktCsqgfak6ZRJAzdWR5B4nof3Y3MFbmQCocMKTNfttMmkRPTzcTLRUhU4WxKvVzVvCwoedftut",
  "key2": "2RaETAUedJo1rJHALeJF3FwpZTPnQJ3vbA2bPM6eHNyUPHdj6q3HGTo9KfBS2BHg4pofWLcLv9goKsZ58Tezwfs5",
  "key3": "4721a7aCG6BMw55WRwBtVWPfUtT9mxgGxGBdh2CMhJMnaiHkKVEnsfyxgxGma5WTUvr3dj9mUpzw1TmpfpASZ7ha",
  "key4": "37KTVX7Qw2unSJ9pJvTcTnL6Cx4Pn4sqWqHXd6Pz4mQtHjW8g6dwm14oygFfkPd4Xx7UMWwRNGeCWrp4CcrvzukQ",
  "key5": "3Y7gFAgBdDgxZWU9F5vmDWFi7zoiJbNHAD6PnWnGaUSHdvGAiVDAQueYd9VcU6dtYNJtBUi3pz6S7NDDddrhmM4d",
  "key6": "4J6eLbjaXCBpeMZFijTyWeHW6eQn4dxc2thXPArUievU3PoMwXXgfG43W649uAvd5hXsXGKSA4pw9LpEuW5L2yGp",
  "key7": "3koaFDnEMsgHy16NEp3TLZZMXG5ZecPuw5kaGCiJSmSdXubYoeDn3C942mdxW3MMvbCf4tizjMdZrAkquVe7r3YF",
  "key8": "25h2vrLR8nQ8QBwmRg44YzJR9NgnWmwrFnCnFeQYaqgBN6xbTV8LDhnhdkv45adp5ZprsMaMcyByaNCZH2ANWq7q",
  "key9": "4KuS6QPEkQYLvHgkFtQ1FkiqvTmN1VaJoS4PD1p4C7FvityieJeNZVY4c5YYsDN7WFBjZr9pyEgxVoY5x2HaRXHJ",
  "key10": "3xK2kSoJRtTsuuHTtSn7svFqUruhdFRaTkQSohFjJ2M3ksfCYaJ7s5Wb8oFsixT4X9ywf3FoqQNEeN2y9SfrQQ3C",
  "key11": "2VSye6cSrkKrfqKLN8Mmd9zmnqzBGeSXdcVoLmq5fnEV4WFtxPS5TejtwfdEyAuYq8v5AXhcxTsX5TDG2n3MTdAw",
  "key12": "4uEXZdup6CWhWXNq3FFa16CFevKEN8GvPo5YUrBDZsqcih3g7xgKwKY1NiyX8rBuNGStCnKEGHh85e9UFKi2yi8u",
  "key13": "3gtJiibC5L9UCBB4LoskkJnCZn8PdC6T1cNEQFRyRvQQT8KuWPEjf4cGYkz1VuNgRcadS4JAwSVS6Xrb4NTPgWFn",
  "key14": "sbsjdz21c5yeRZtmDqbXicbtde4eWkdzn9fPWK1dkCGPNjYk954VhntMm76NcTT1eUKXayh2HAy4LgxkxP1LVzi",
  "key15": "xmYUjCTDLxKgdAGSekkgyn2x1nWnmQVwxKNwa5A3VU8G2We9eUhk9kih3GmvNoYKbWZkdG8iCPcwRiHEddHEwaz",
  "key16": "4DAL4phCd1ikkzcsZCN2GKnASJrRTcZx6uHbJ8BE4Exbd7X6rFEzch2CU9HSHofeZR1yjjjGUSRnsR5mHa9ajF1g",
  "key17": "4EfqQHVz7Sb3ngYdyyy7qt1zBwcFCUx2SADDzkVofvBhN7vQQqyDytJm2wcCnDDWVoNCPcn3Mzhx2FybVCU3NE9F",
  "key18": "oBrghNJdDDvRSyxVELCquYxwmdNCkkrB8wRo7tQ3uEK4GyNeBKtSUM1ekWyZ9bMHEeJ5YaWcdBdqoG8YKqHMwNT",
  "key19": "2RRi39znfyUgcUSvLJ895iooQtxgvNRGxB6gAKjU2zTpG4dfY1DbgdXjWUmRuCVsjkwq5E2esPtBgZAQTpCkBfc3",
  "key20": "4NcUBKi9b66DxfJRUFMhmGBN4XJz1hksnocGdW42EeC69pXdtiCgLZBbipZ8wTvC4zNdCd4WNySccFVTYziP9cHn",
  "key21": "4cjmpc5KJmQSRo29uGyLKbuxxBjrGvx49p8b8XU6PnmCZLFZzD3UDHyfbayMhCyrK217gKXvJyATcE4Nfzc93hq",
  "key22": "QwNC3H3S4xbR36QnJ4zWLTAuiXNVaB7EMpyu36yNFg7bGrYXsfR4Diuoq33m7CLupW2UFWXnDa1E5G6iwNkRwMj",
  "key23": "2HhvbzDChJGWAwt9E1kHqJkwrx962NDhUXqrZSqcswXRSkNvXMbf6ymwG6sDiqegofUzzLYt8EMXN7ML8UdcTHsU",
  "key24": "5qjgyRuf6FKaKvTM4u3pxDXBFavzUXJc24ngdZAWXqC9z3jbZjxrKaYPXGxHuetK9zDMLiWKgZK52ox8Nw6A7bGg",
  "key25": "a8w9Ac5M36EMYgpvi8LHZUf8jYjbUmBeuH8hTdXSphDd34LbwhNHHLpfhSavarpfWXoBbhgBxbtbgA6sZLnh6eb",
  "key26": "58PRVwCaTw9txxq23cffyLhWwis4avhdstWJe3826w9VeT7ccnDMRPhitLyMkQLbcDBwfMLru7dJ19hzigDrR1qc",
  "key27": "5HYsziizaNxDiRvoR3mqEZYDtLpKaKDRDtaG5XSdrNUmF6DzvBTsmVxcn5DhogqVtb66Va2k2zkQZxBnXSaNoA1x",
  "key28": "vmxUb4eW8kp3dvG1PPkz4LqjLwnHC2eioYyiweEo6wTM1h82N5Hv2arx7tcg4pNEqsgsyhh2Ud5XB2bD7yLQVJM",
  "key29": "2aJX5rnBRxRYaQ5wbbLSuTzzfzDo278YnSek9Ph2rbcRrL86cMfU7urcKUwVEFGQX4CHw9u1dMLqbCsC8GWhUkMZ",
  "key30": "5icemHvHH6f7iasyeGD1wTR5YYZ8JhxDLLbBQvFqtUsbbvyJ2roxDHGZ59qTLEdREeaFzL8LXFegFLRuWqkbQkVM",
  "key31": "48M5uZ1L9cLjCBom8e3KjgDUPGXvFZmwYnvyhMf9EWSQPcxynnZRHrUhRQVmVydS5wcqHZdJ9gCkp3pbawPc81j7",
  "key32": "a3Uwg35mZTwxRkYKjXKqWhw7fsTNV2fPD22yEkji6h58CzoJDquKKpheUkMaeJCaGpMDxHWmisZ3gHwhdd21qpY",
  "key33": "23bU862BhWAfrP71oWmRTzGJ8SffCqqbkDeJT1yT6zcFvKGsgZV3KfYRpXxyqTgLkzEbTzXHfgSt7cjrRLnfmWap",
  "key34": "2h81n7i8YqHBZHEKk5QfsDjL3j5YtWtDydQwLr4ETAXrV78vHdaRbgFSa63mnVWEPzgZPdGBoB11xtWpk7zAXnSX",
  "key35": "3t8WvrBMBQtw5iytww3Q7tJZFHePLGHTC1mCb87PNHysb6ZpK1UU6Xawczqr4adfPVS7cUDT4zXrgCMFKR77PSQA",
  "key36": "4B4N9cu94ZbihsWVBBhweRzzp8T7TJ1ZdeSeTbVJ3h9VXgwm9bJKGa7aXP5NGWVoZRh1wD46nApDfaQ8GWmuMtXC",
  "key37": "3mUhjDhZQ23pYKXUFPSbNT29F9QaRd6vd6oKegU9qQD6NrbvkJSt5rEk3NiWMKSXbUVNexhvJZw152zUwE7VSB8H",
  "key38": "6r6CQhWgbMwRy9cauLT8sPdDkSd6mFRhG9hxaMzPh24ESK9fpxnr5RzEKWtdngbrJvv4uYsAuiBJ65TBrj3G3Dt",
  "key39": "674DQrHsomyCuPFMFPnt5WBhJ5sKUkiDecZDA36qHA7TBBYjSp5iWcdX3LgvmaufhMXRuAZjTYLSr7VBeGktSFwU",
  "key40": "28Xskpb4D1izijaBmBtd7fje57VD7fRCB7sSqf4bBp7hk2yabiZp3SSa2AZgrCR8FKzJopLX736bqukLh3mYS1NY",
  "key41": "5VzpayPmo4yRiwqmUwHR89DNik4WW9EWAMuRq3HDR8kpgPT4F5iQsscMVpX69jtC31TUgm6d8xj1grGGvNusgxBh"
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
