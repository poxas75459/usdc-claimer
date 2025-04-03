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
    "a88WbsXqeymRSNNmA95xt5RExMqC71VCQLGfhzWyGSkdgPUVWk4z6tChv7TLrgXdiikkqpxAU5itzdZ9eghDwsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F54XNR51SCqyt89bLYmNXjEuebA6TNWKEUiE7Rt4LasCnXKdtzBqnAKRj2X11jMAeEQ4j4Q3xKE8YFzfRHSvUfH",
  "key1": "2UuF4pSgbHB8yED7Jit4V4qhdBjVRvo8t6TDf2vZupt8J65LhzDiH2FbmGMGqZmPStUDUucUzEVBUN784hwmFbvj",
  "key2": "2NZA7Fu9Dfw7kap1qgeD3mnXTw8mhhQxv7H5M95MjYZbYmojmTs2E6mfGmgJ3UyaGfki3TnUqY6UiX9Qe8UMPMVC",
  "key3": "RhLYfBD6GTvY3NyFyZKwkfk1mKPs3bWi5E1336MVBRTGKsEmGV3wZ5RfJmPwSMEBfbT876pV1pDASp44z1JtEup",
  "key4": "4RAKBajn78nYFvPKeCWojVBLttCS5X9JJDAU8yjjostVRwzZUZbBSN489SvCa1cgcVq6Qh1CuahhhV5Eis1NJBAL",
  "key5": "2nMEbZLEgZU6SYma7iSVHvhquYT5RtZPEfDfojpeTTCWaqZjWaqrF5NjuTT6dzjAPhhbycmdPGu5xY5GFYjC3JGU",
  "key6": "2oaUKqdooSeAUCukUSqcYzQXD2hbZdr8ntcrWDTeR6v8rsqEVtcreasak2crkUwntyy4pgGf6sQZDMxWWcbBRfvR",
  "key7": "4Lc3VbfhxzNqqQauXH7CEsW8gjDRPP2uqsYcnjQqogmuUhoso8KLBnTedtAvFYeY3Wg47mADBVQx2ayoCiuD7g3C",
  "key8": "4H9yboRbq1n2wNGr1XaU2RkbayeWnTXd6CF79RBFbXfGb4TSyGd3d3Rg4sm9rLaJV42zQNACMPRoajp9UtUMwbdL",
  "key9": "4XFxfwBnt4nN3X5tb6yCs7jmpBPBBaV1kR1JXTKRiWdWGTDmGsWChXmVreRJCAfX1EihxtaxyhrYoBebe1r7NXnR",
  "key10": "5ghyD6jJdzicVYXppYodfz71KMCcqCiv8oYqMC3kZsEFSUM6PaFsaKggXW6Y1keffMfhjYCEUSCMzJm8GsfcB38e",
  "key11": "3esc3cTxdo5JVsEeuKfTKHFFc4B3YpkHeEhuM8Di8dbsHht2h8PFL94Y4RxD1WhkJtE4YhB58uPAyPNRxDHj4sC1",
  "key12": "62itrRikGTxvYVAUKg1jurXUpNgTVexJ4tKMGEu4Eo7SWMDvAcVJFCdvbXW8pP38uuNGLXZqRgbXScQxWEDx227i",
  "key13": "5jnhuosd4gUq89fg3Lo9dguiJWLZpcRvxJzgFRZU5YFeb9Wa6Ynudpnauf5uX5bDL7p2Hbx9hT5i61uU3soevkoy",
  "key14": "3mf6ugvN11pEqPP5yqRKFWAw4fLikEWUeXJroGxeSGmTaJgfB4khvvAZBTYMezzXrZh7UFDG7TMy3tnSp2i3oVPP",
  "key15": "64dE3rkL8h7arPdCrMfovZMHDNSvi6NwswPxPfxuJnvic5tjk6hrByqy2AqS7vSfQtzDqVtEirGd8QnBw1gw8Fhg",
  "key16": "39Xw8WFduBZMDS1so4uTPvj1C2jLca2ChDzMkxJKVajkNMkwA6gVWkB6Gh3oux6d9RhvUXxhruhAy75MNJiWBXhN",
  "key17": "5B75LdktPCEFomgDqrhexUmrLi5Y8vAprDmfR13kK9qNW1rtocHKXtHuU2k1P6httoLskYTU6Eo54Zy74stt1ara",
  "key18": "2dA3fiLoht7fwYeDUkFaeNkPDXf8WmPCjQYuyP3Lmdd3NndDJR3jANM8RnyYUs5kj8YoaGUfaGdBN2ZqGqyQwVxe",
  "key19": "TQooRedvboK7Dr3mLFL1aRj3uLJowQ3eJTBDD7PAXETz12cyPYZmzZFHCrc41RUrgiV6nqLNBUeaqHfTvqSwfCt",
  "key20": "2rYZY7bLVxKoxSWCNmQ7J7FmXwKpKqWE9gjpLkDEuxxCzKeHS8anaCiSsAnuWQB3rqGtDHx9it8BdmjRUtT5EGXm",
  "key21": "3qcJBNrHvevc1YkSJrX9LPiEUWeFLA9q9pCkkuV57fWfKURUXSExZNxQzV8pfKHVQdRSHUSTDsaNxWWiU5hLTimC",
  "key22": "4fL3KRyMBYHWZ6VU161rWEoj1NTZstzeFBVDtekfjYYPcPSD59ZD7x8TwinZkvvURHiN1ThEdHQvMziP4iNycWwE",
  "key23": "4SWxAr9tP2GH1jCmAL7pBUrte14YmsZtQdK5sGpCAQb2m4wb7y1VitTcBgVqyWfFnQHBLubvQfhKFhUJ9LBv74Dh",
  "key24": "3qXE8WaGbLiVhcpkMgBmQpVT3mTDa9fPSHiZ7fK3UdKJSCYACoMNvL7PcDQU7e5CktA3GjVzf8mUoiDynHeCUfeS",
  "key25": "2sK73hB9tfqvYix7BGWvampHF93nivXDSRULKozkHu6biogjw3Usge7xd1zkDFZRsd96HUxNN5cv7efbyZvz9Roa",
  "key26": "2m9G7QSxE1XQ5sD9DBh6Hi2nDE4kmLRpQuNC3i4MqH9WhHEyW2mzYKH4uiWjMt41XhGA12mxKPwrMRTpokgr7EfN",
  "key27": "4WRCexvpBsPC4XeTbr7wwYPxGSVygPATBsFUZB2TPsWQKQH1Dghz8jbqLsKHZEVMBtiPDZs6hKRP2rkdRyTtZa9x"
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
