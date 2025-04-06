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
    "58GwCFwj6xq5QUuQvhnQefSFh6m5SNRgEpvLkiw3kt5tFKMKfBjfYofRwqNfqv357ZquEBnbPDje7ceEtjVMfjKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FVzDkKmEGEXLc6rd5GRdNk7xakdGqqaSLFNJqvSx982yTWwuASYZiznePj2dftTqhjtPQQJBJ5UUTZ37f1itMf8",
  "key1": "3FTQ1R8rRwSLxDvPY2dXZVBw4NcFU2YGMAHZrfgZYEoMKGRRyQJuiabSbk6rmMXcEh1NFeXSvCbfm33jpLCR1imE",
  "key2": "4GKASjmpipyyhGxptWsbRDyY4mH4GqBEPbofoRgYXGDCtLUDqQNveegVgTLMuZG5fycSsjNSheYUgxp2Tak7YZre",
  "key3": "4cMX5NhdxFD4pXS94or8wVeTErQ8evs8pbRy6SUJgv6GKxXAXSvQUi5QXG1a55DJNfDVaZ1rBtNgHu2Vt4z4vTMF",
  "key4": "35sACDayZdWXvyTfom5obD6h1GTcgbjbJAcD7uPwTEq8mTLkrrEWbWmBLH3dVf4qTzBsYEkdJYreRRdJvmEQidhr",
  "key5": "2FkBYyUgyPGEXAoLA7DNGhwcTvZq2QEc7oHPM5mzX5nCTzY9qrkFZPMSsaqYu7QLJp4W3YP96yieaWHkBLxnoZxZ",
  "key6": "5LYDpUXdJau2vaSUEfQHSQkdZvPAuy5ohg15Z8p5h38wRKSUS9R1kwwUoYUqnppaX7E2VeqqAQELCgpAskSYSYNt",
  "key7": "2g1JGwbKKKnRTQ7J3JYBCobMfYVsQE9N96QauNj7AkCeYpV6Y9akbZSRSfDQXte9y81414g6ej8kxunzLFvwr3m5",
  "key8": "4fUMvNsLGeLp1A9qzUN6wB5yLYfwD9K6Z1oJgnt6EZDahVgqqVncqiXZ3nN4XNhaM5j9dEMyQDyba6hRqjtmkBzU",
  "key9": "KcgDJiFbEpEe7the7FYPnmBMsNrrviFD24XTxqzZgFW4WNgayrKVtYE9o1Gf73F2qKFqGu6qXm1hW18H6WnFi9k",
  "key10": "4SLy5bmQyBcQcVooknopRzxU4G8dnNkKsu5mmbWwGde2qSM6zgRZj6apjdguYvHV3HSLyFkhUHUiCR4y2E4ReYnw",
  "key11": "2aVbSBm1SPSu24Z3NtaJNgDFpuun5FL2H9gHkyDDK31ZwuQQ5LZnVeefCJyTZvz6mXH54DPCFRKQ8Wc3LhYPA69A",
  "key12": "5iY3gihYWha5LDZnagNJNVGcyAvyeLjDNXS8dUXzn8CRTmoYovkVe84Km42gPE7QsxiX1znnyfy9BLn3NzcNYK81",
  "key13": "2bBa6iFKR2KMvyDzSXYUTtoYdbYxVHAAk1X7JZypnsyPZ6K7HZrBN9Q3dArFXT9B8F7Y4BCxxaqRGZZVBs7kWpys",
  "key14": "3GmMtivbeuXsDmXNgVEzbK5M5fwURrMLNqh5dydVGAmxagqExVd74M83M8TVMcFJYZ85Fv4pFxChvx2oeXuE243k",
  "key15": "5deTm4gb8CZY74r4twxCbHPKJgC2CUtkYMcLEB5N1Yo2DE8QiHET2VbJiGHhzDKZYdQLdw84ixpwGYwWC7FifLGn",
  "key16": "2PAUEbEefV6HVnc6mNqURuqFa9aBy4Ny5S3pQC77rwQSgAzPQuhiw5PQzwr5w66zay1jYVsy7PEgS4NdzmkCaccz",
  "key17": "h5DNEHbePrU4DjsVUQoFwLgU6A6GDzKwaCVarHmhm1oDKNt9di8SCuZmP4B2vUgWRcgGwR2wTUcq6HpJfHZLC75",
  "key18": "4fcZfm6H63Y9VfcbB7UtgwYkV6CT8iVof5Y7UUJTBHDJXVEuBJJTZgStJXr6NWde8c1GVDR7oeXqVz8Wo5hnp2Vt",
  "key19": "3wAivJAB7Babcck8HYR1ujZ9ghJPNmVMYPHSvNybUzUGVi9jG8fVV3Li6fpTW7hHW7a3JUnwdrKiH8iGcNEWeY1i",
  "key20": "2UgsC48yee1NjJGHFpJPeNimjRFMZAMGnq6KH1HSFCaTjoBL9LAqF2bg4C3GFw3SZoUEf12fJcjWTonnhSfg3URh",
  "key21": "3KSvND3PexziZHeLhm4FToQuaHwEkC2yEc6WKV1EnkMXkbnX4xWWFRw3Um3YAuVoGDZRxRoB5NHwfNajzbusB5W5",
  "key22": "3GDWJxPH3Xhy1smBLz3jgZRw9JMv5jXm1CY2ZDCHHtAFTwyTQDETwYDGfKa5AebcHMPHxQFEcFnK9vBdGB2U9PG7",
  "key23": "2hNj7MiynGRnfxJDiCToZj4FXuuphcgJmrtEZjqpgm2CwjAtTt9gbF8tA1VHoCDTNfnSucrCNXHiLdzMb4P8dNc6",
  "key24": "C8etfbN3W2CgNDrreMsj5fbNZJWP27MVs2FDwqGYgXeUZJdi7jbRu6MGVJQtw1h6nRHjEk1PAhh9Mgf65abzuMB",
  "key25": "3ukU3fqGGD9FqkKS7HQQoGoqj5L6AHdk7ZhxJJnys4kbE2e3ivQpbQPqoCNt7cdWtEMAUaTizcQtCnd2oNRTX6Nz",
  "key26": "3FRweGTmVaBwE6Jz6gExEPdDP2ARhW8gPUJNzsV7cdDZseE6moyJ5XTAJtsC5QmQX8VuYCQQJj9N6WST4VrRF8bj",
  "key27": "3kyzAXbmME3bFMZWDH5RityZPbruWW8dPv3DPiht7csYdACwhRxCHD7svxxMA8bSd6TrqRNEQ7r4hJmYAVrzqB2B",
  "key28": "pmmwz4aihNcF8Gp3Mezxki1hwdL1SZ4x4TFmiZbvnCHeqruUreNPQq5rCeEn9AuSgtyLEKv5ub2V2kgpXArtd7Z",
  "key29": "3rJpSYTmz4FRSoSC7vZJjeA7k3HPRKBpDjFEqtTC1hM3QW2prmNwGBgXKbgomSVBZrwQyjktfSXMQfNrEJGn1rv3",
  "key30": "5bgU8Ec9WEYjV8QtsknguJgkU2WQibiyaMRN9L9tBH29RJLsJeDTCmWoZUoFNSH8ChHLSVrUNdna4M1dgXhLyVXP",
  "key31": "4Qs71DfiKwxkqSXjz7wNoNNGiHcUiDbvtmRD2scaxZt8z6e1GbLfcTHwe7Lq8iSJVynzvDnBwtavtRRA9S4WjAbi",
  "key32": "3XZK2xSUGiURUL2k8whQ33WsmhFxq1saN28TxanZmZM31jRPbDGe6kFY5myEbhoY67omZn3ZRtvcuYGzNzysP9xy",
  "key33": "4pyrrB8z7B6uhdJpy7zwuTQkML6eVPAN6HR7x3UWteHD8ag4zMapKG3n2oUtkRybTNJ9PHexomnBpNLFcFc4ycPH",
  "key34": "5u1hMF2zW25y1Q5dXzBwRk6Fs7N3KrqcuN7RhyY7YYGPHAf2YznuzQxm7FciyKMNpcZpqVcZWHC3BtmDhDcmhj3H",
  "key35": "587GBNe77ouqzj6cTsJCdvk4ygQRuWyBzW7RvnW1j8tgRC8VrnKKXSFa5aPKDhGR2e8pWrxLJP8aLXtbQg9QcVWX",
  "key36": "4odvpzYDhcBs3TXyNvgHWuN5u8Dz4SKBDksNZa4iYBC9kX3Ss9BHryV5WhZBtQRjVA2XWmj6YjbyGuAwxMn56S38",
  "key37": "48T1hWiFGTWtjBVbxnk1MakiKcpGkQrmMN28pWETPME5Fso13SZeuhnXkpgc4cWgWmUBaf2v4uTZna6EbjEzXRL3",
  "key38": "2LKcyFkisvhWMfUsDosbrPRWe496eRPVe6h3pwPLHzJehmSaBkhQ53ZmSy4HaeaQ2itdxdifqSJcJFuTq5uMMotq",
  "key39": "5uKKf6WgiG9rRpfUjjsM4p2vUpzDWxAJ3W1gAMD43vqzVAYMxG21pQiP19UWmobkpwh8mHwiEwwvBnKsoxeEowm3",
  "key40": "3GpBDTNN7jhEyTsxgnZcYiDtD5AE6mbeRBbYKxfifEvaDG4A3LpSGzCrMpZBU9WrFMBJkMCcHUfV4VDgoqaUwzaa",
  "key41": "5JJnmEWiJeXJ6NC78YsuddfmswsViPmWM6fEPGLYPy7o7pxQJwDrbokk1jvN3rjuRdhEDPpWtFA7FDWcWL5sAwhy",
  "key42": "2skJdsQHztjh5Gf7BCFFesmTcy95N1a7DFN4qgw5WweRpoijN4AcqLeKJ4ksvpBZY2JG9dVRvnaHAuRXuDvJnjZy",
  "key43": "4HNTFp3g6otFUBwnQiefhnFwVwhLsRYdCCk6eLheAPa7Loi1agNBvg6jjA6cTBdTWbEfH1MKDSVk5Yhjg2StGpg",
  "key44": "3fM6Z5AqAdpp6M7rAtsLwzoZig5b1YMqjzar7fnuu3wY9gSKmr9kBvvxpusxEiD6ayqoKGGkagmaJeBNagtQfGyC",
  "key45": "5SnogVE8EZoDjXizQDB6sDojR5prL8WQ3tkZ9Fp3Esza7jPx82ngkztD3KPH6JNg1tVyuFg5hhUszoz47Y45N8Zs"
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
