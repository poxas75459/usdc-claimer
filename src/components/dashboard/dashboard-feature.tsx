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
    "57waTJHjKj4687EjWiEAkrEV4FXAWWutZr2P6N9cNAyezr9oy5hH8xmQjoZDbrtVZFN2N9cKqJkUwtuiM9irzdY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1rqhHgJUcQAveXuiiqJ7HdqBVE7b2RtVArkNdY39NQS3TT9JZWFpKLmzmQ7ehqMrscimsgs2pFfFnT14RN8yvA",
  "key1": "4Zrva7n2smv9fdFaZA2gANRs7fYZ6FtHn4xqbW4sbTiB2yoG4Zqp622H1pSvDgpLk2X53h9EHMEfcuftym4PwRCq",
  "key2": "2gJ71YxsAAJdvEwbU6na5VTVpkAKFdT8Ci6jRHcfsSY9RXNLWZRXXXkrsJiRK2o3HyfvJM1Es31s4UCoH9QHy3gf",
  "key3": "4sUjMHPs5bepjQsJg1KzwGSpP4JoLSgLCoG16wHQD8ShpKcEye2gasrtaXW35SBf8zXR2FFCZ9X879y5xY5U95MW",
  "key4": "4ovpnot8So2WrjhCnsfCgfuWnZwoVpApnLN53EM61R7YVsmED73EXBZiEg1Mjh61EWDy4e3dhaADmdfbjULWsroD",
  "key5": "hy9AUH8CchjfjdSgXMqNq12SPQ2Zh1vyXaCuXs2wYASkMqgtVc3vzhoNXjdd9z7aD3a3etCtCVDaJD54UeN56X8",
  "key6": "2gQ9cTScfu4wtfj6xGPpAbhdJG27QjxbRzugkoLSwiAZPVLxfdExDcvhzcpFgR48CPvKMCis4cUsPYCjhbuDGeJL",
  "key7": "2xn12g7UB1YssDVDUz363heFW2MksVv2XUYZ4YB9YDNF6HxjBRLujoK2R15pMjWpr5Z97BQmxvHpPVbDuCDyzPTX",
  "key8": "4HnLtbL8ACNSstuHwFowk4uUoSk1vcqjiHSKjhMxiSaNjxyq9ZDwiqQ3LhPJt6jP2PagHxgUK9zYFEtFzWgBmdvE",
  "key9": "2kgJHwhAikVZDGMsRbkPt5mYXJemPV8LfUHQTTvkrQL9BbWYM1vncuwN6Qj5j4sTmDkCdd2rVPpMH84YLW3nzTGN",
  "key10": "5k5ABVLqH6GxK4h6Rz33bseerMTKNhdXUDKBoZHtxTki9a5oppK6wfQiVMuTXTUaQ6deS3qHdYCNukp6svutQhPh",
  "key11": "5A48S4dn65Gw6VibnmqK1aLWoD9EdoEh4w2gane5313M3zHzzKdXqWgD7ifCmxyFXTMUezSc84wKeogkbbxLnCAc",
  "key12": "3hy8Cxc3DZ7wVjSrXeXhgKPr34kDzyyqy4C62qyNymJw1AGvSfYBUocyVa8pMAQ15TgyYE3MMMdCCRdQsGiACjUb",
  "key13": "rzM8EAVXgPLg5zTYNS2sWzzXRAJcbBfj5dR4KjuSn9kctgrKKF74rQpeCSipimVRw7EnbZgjVfoN5sSbBVFRJwu",
  "key14": "2ZMYn3mRLqZgA9Wvbve82rsR9ZUKPffYZ5ukE3QMesWTnf6tdsFanYhiHuB1Ck9TZLrEPRj3phBpErN6ByTDbry2",
  "key15": "5KDnMb7o7DgTKqY8Y3149g7AV9hDp3869bxHAo9yYzvRXxDNkNd5jRbdxLv5YxMRim1RUK1CEE7EbAus6DY9EidH",
  "key16": "2FJRwQ3DnWSVUzsK9DfRW1bGqeXc6aTjE8YmZZ8543WF67NTG8ZDTFUeb7TXqbcXkxnDcuBjHhwRkqPbJ5cEtnvi",
  "key17": "3tkLtHzUMSMrQnULbqFsiiDK9LbBZkVLnXckp4dcsg5tXHJJQL56gp8G7xTVRC3hGc8X2Z3RaXuG6Ly1CyzGTLJZ",
  "key18": "37rXGSpNnZAVzst16sp9mX8NfhrL5kG2AJB4nftteMyhwmZ7TvwnLFLVqRGgDguTo25oD2j57yPpuWpAiyvq1MY2",
  "key19": "3uP15EGmvLPbH8KRX2MAHHroEvHPDEUn8LQoS1N3LEXUkgQYonARsAb6cQkd3tQg6z3b6962T7Br7YroEvFaoB2D",
  "key20": "EsYizwscR3YjXrVGZokani6nbuKuZLpe1Lof9K8rhNccpnzmWSxDkgnacjSx3unxkS4XaLqoyb7PmdMtV2VdroM",
  "key21": "45c3U3Divcp3Y41PjYc36MM9UW5XTUYTSs4rb48u9ciiK9eBnYkTF6QoGHcf3rFTFTXuP5jztMzxmyjC8hb34ViA",
  "key22": "2V9vv5teX3S9LGENe8xCtEe9uwfYQtBQCK2TeTHCdXmmV5HbnGVuKbNKVJJnUbeXEFaKRacaFpd7CricznZqwatw",
  "key23": "5pwopm8jaCxGgGdLikJyUgFkK2gM4nWczrLDq8DYKMsT5jjkSsueAKNVzW86qtFnWnQokwha7YKtcMgWUUXhiSFN",
  "key24": "4gWxfnGDQUUgbBKUVnHuhhKf8ci92oUatw4V7crvjdJxdqTgQJZQPtykmtoaEuQfkoWoR7XKEucw5drXJK3de2f",
  "key25": "7dTH7H9vdNPZ7Pjj7tUT7JhKVcAAC31CTQmL8mSiBfXrUw9P9UaV7Ckor3Cv1meK9ku1Zj48pCp2E6BruFcHFVT",
  "key26": "nz4faqms47o8aXzyzVQRtG9P1gyfwCzHT4FJ36aHQ7PejnZ4xP7Lhcnf9P3UnMFGPxptRY1J4JGxs738yg4DHGe",
  "key27": "3bMEBTrSBug8StG3WG5JA4ZbNCajXs3fsjpxAQzftTkSkDcWBAdXdZjATVXZ63w2usK6SiF9gFtaZeEhBKdoFo41",
  "key28": "2n4b5oQppx2jKwSymKTye2sy5tT1J4VmWwEFccN4eDrB7cJarfPiHvq4Dj2PKobr5PcPmEprZuJM4atMu4cNHdfJ",
  "key29": "yupKA5JgYnEss2hprfPDABbPyQskLP7WtCpKoz1TrJrchhuDukFhAQvbSxDC6hUcVKEN9igLE8KHC6BBBQvjyEh",
  "key30": "5SFbFhqo4DcPiEF9zhRbAR2BcLYpUcNqhGN6MUfo2bsbVvF5FZHuC4kCNT2GyAjkTQP4uwAWJv3N1SVJmoqZ2fBT",
  "key31": "5AHQX3ZnqaW5vyK9bCfN9QuEr1aeEX8eb2Xpav5ezn5yGaPs2QhhuwiktasyLdjTMvjGG2fWnHt5hmJNpq1fvRnz",
  "key32": "5bAJCuLQ3LXUiHzLuEspKL3SqmLpkXrKPCvHD4RVr65LJChgNd8uK3Mdjv1v27PBUJjPE8c3JfneV7VysfzKHoFM"
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
