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
    "3s5yi1sdwaoGJiV137cKMiVmuDE1pWBbUWNknJAatks6u6k7WigZpR3KzQd8v9sS5yhHSp5xw6MJNMrHzCvGNZMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZRchKKHUGycyTFn488R9ugHoQ9e6CVLL5Pw7sRb5hej8AdeiA8gNQ5KGZpDJis1woBad1F3nkXvxoZvhUfy7dR",
  "key1": "4KVWS1p6QyuVfM1CXniuDFQLVgyvEfzdJKLbmnkPFakhrP58DTRm4V8ZvSh8kQNDaVYsMqHvWhxhSM4Cf4UY61Cx",
  "key2": "5Q2YmibYdFwr5gFNTrNbTTpNoxeCw2BAwG99LSaiZH7C8EJaaFnhBpJxTbaqUt3PExLvLWY6GyxZL7qUgpkQVD3K",
  "key3": "5wXyXFJBcufPgy5MnYRm9sfCZJnc8StRyqmszzAyRnF8pPndZ4hL5dvBKAMDmyEuUNuYpf2e1RN9Q4sNFLvGYevB",
  "key4": "5ieEr7yT4jRudwyz6jAXd5bKyF2Kghg5NWYp6PRCZ36ti8Ut73mHLZvQKMEtM18UQGpb3F2vitFD3LJWvS5iUwXa",
  "key5": "rPqT3ho5obYTWbGKf8aPz12sbMWhSu271BuyEA3Zbhkfg89DeWVaaUZ36rdEx1BBLPN3Ja76svrkyNYWVwN57e7",
  "key6": "4Xu2uoMrJfv31wZUP3VRcyFsrrogjb3d2ZtNyiWXFnsCgJeffpHF9v7D9to2nDHXTfWe2DqpQ3jRLi2zDTcneK8H",
  "key7": "5QevbTmcHGgWMPkGrhLTeMyhzjdkHXXAqkPmSaunnmQbu4qKTxvr3UkSZxthnZvhJjvD2VV1ewUa6A3xbPHnu4Pp",
  "key8": "39LAABo8JnRAW2iaMHtWjHUupMcsrmufodnBttR5YLide1JKVPfDYq41daeJcrrfijdrMqo7Vu1Wt8tt3tY4eW9j",
  "key9": "3QiUjErL4GFtAfmuZd14sjZaga7guYBnQvobYGrzZ9h5V5mBjiUNjahq7ukpasG3gEmg7VrPk8yMjsnmQ3RCUgQf",
  "key10": "F8nW2NdDsG99E7f821G8HaX7ST8v3Ezv6yy7ZxbwzuZJFZm4rxDBPtxZ5dhMiEaTYWvZogeHLRJeE62Mh3PfTr3",
  "key11": "NRpu9Fg4tVZuC1jm7n8kxSLoVHLVzbAKkq7wFYAuCmHxwoiMtirprBrSozxU9sQGvtqGFK6aS6uuYgx8XzdB79Q",
  "key12": "T5jFSf5CbxD5RsHAvokCd4LkgfoxreAUoSxai4cy1BNvCPXdtnmPPiiQ8yixLKfXyD2UQt9uwGSW1e1teeMrnFk",
  "key13": "33jsr7tqQqbTEXEc9ioGWbRWr9PXX9AiN2eMSzrfipb4efzs1osGvxKFewH5392tJhN2GAyfiA9NbNTaM72fLuJK",
  "key14": "61hqQfGa2Q8AEAjkabVmyJpgRjeZGdGPQR4ov1RF7fJfr5bLJ8RA8hviACztp3aBZBFLrpFs3euhM5Joy13XzbZD",
  "key15": "RvvpBk8r3gM556xLCrpTS1un542SJvRVH3EQ4G9euq5hPBNdUrvcZ9gybVPhpdSofcg7HdH3QQz9SXWYEqpqtLm",
  "key16": "4qAqRPVf5CFCtJmEQDRY1AEiYs1iyksx3zmLgMLwbDup4P3j6pyinRGH8qSUTS8xiYkweZdAb8vY7ihx8SUAyg8N",
  "key17": "2DPZ8hqUfCiZBAZCxt7VWBM6x2xAxWvrooL9jGfvhKCvQ5wdmvwz1EXUZGMWF44aztvLNHa18sS36Nms5VR9PCom",
  "key18": "4whoRqiUH7GscSYBxsQvAUht5apg53dge5Wx6bpJ6o59XH4X8LPEnWo5kzYz2TzNQRCLZSAT9vci6uVVpnpX49Sk",
  "key19": "5HfbDGMDap4Kdh2Jk5GBrokwvHWzr9TcXWw9b2e2wFFWHdKTVTWvNppwJmTiDm9v9XkmFkyx4CvFXAN3Ciy3xinW",
  "key20": "4PX27NcuazGcYkc1HdNfrbyxk4nnmL21rETkp1P3X67w9B2TSJpqeNpU7WCmpYM57dMLJSRfUxJafKUpymuFPrJk",
  "key21": "48ufb7KrNuPA3CJDf9VbvW2fjEF42G73ogrhPUzrfP9Jv7E542SDTwn1X7MMA23AdLwu4zijMbR3hw2mV5DxV3nM",
  "key22": "5ca2LEmXozL6BqWaTMAd6Am8QS1Ujkn69v22UUZnnagh8buYrXzdkA5kDDRNT8FnqFWYwi9CR44e2jysMFjYXwow",
  "key23": "4MmxVr4F1BejyQQtNDSfLyQbka4t5z7VA2DALuiYiMXGohzoz6JiakHX3TgMzSFrFMMFR8MQ6MuAdE9Q4e1qHMaD",
  "key24": "NNZx8D8N9mkG2nhYfQtQjfEoZPbTQJEZ3oFwwx6FTjCYQtSeTTaSxnSpMfHyTCu61g8XQLWjuWu5quF6pBBuAYe",
  "key25": "48w3euvLkBapN1oJSRzTZkerBRzoSp7CjVE9EMnaQTjm7LkuW9cZWqFwqEx9HKXd44xDcxLcvoJ3PASK8yF1A5Mi",
  "key26": "4svcGZaCYVKkw4EbTHR9MhSvkawFYDPFXUqhzc8twNBo3H2GSsjj9MqXF7AzwLKLi7r97EYZRXHs6GkY9tmxoXuc",
  "key27": "25hnDFtNkw7yHHV9HLCxPN98pWTXj7VLN6uC5dT1FrEc1vix3nnxQ7YT5wegYjtySyJbVe1CV1yxWXVPgktRSJwD",
  "key28": "7BGxxQv1hB8Fucm5DHnyEsNfzAaReYCGNZRoNdkiDgYFEvxeXuKiBFU8zDxaAhgyTj5cCL9xwvPy3gS1iZouwgV",
  "key29": "4U7eN4GvnP3o83DMkqjkdyhv7hU7bp8onx3ZPXtjfV9J121x6qQrKSFxxWaSaVuWJ4Jtxrw4rvcVNFxJ5AUdxmEk",
  "key30": "N5yKQpXZ1nZFX3WrVMNxVCfD2Q6bMzGUPxqcFwpwpSSYCVZ641iH6AyG1jkeFLdaTiKz8q6ur5Nz4dfjEwvsUsC",
  "key31": "2spqqdEAqW9od6JZm349cKgdc7oe7tXPGnC9sCboSB4ri6R314ATt47zGKUoYW67NXMFvfVaQuxvpjBxw4Zeihs9"
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
