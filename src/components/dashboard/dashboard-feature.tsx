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
    "2zyJUutMQLXVWCgbWDT7YEWMLMfytTyDjycaWTJMv7pJFpyRXHjoLBZ78obsjsh8RsQYYVMYkB6FiRYYS91Jicy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UJe5yNuExAtvenMnux4GZ76N4ugSUWpMTxES5ZTx96qGfinmtnYX1WF3vx6gQartoEtU4SeaStCqMi5vrkhz8H",
  "key1": "4niydRujDVH94tjYzAyRCgt2iN93cnjMaa7MicDDBmAhRAM58zo1z71PLQLxdGL5N7t4kcnfGNewVr3nWZFaxxrR",
  "key2": "4ojevJf3TuYYHbywu9jPnJxdPnVMhE8oHBDR7iymzzxHJZvzpcHuJrZhAvyUXZ3UCs3ysAq8JW3fMao6ibQzpLoT",
  "key3": "63LgEQA8v92HHQ247w9mMmy7ncvKofPKnytY7EwazaffyuZLuVMih16RuBa5QuUF6THrKe89i2onhFrSANjXAQ3F",
  "key4": "43TruqxPfoJzRd65auvAzdG6pistSq29wLw7TrrqbcgeXa53LwGcPTHMSYxuAMPMTf9qTb4j9XzJ3Qv1Px28wKZD",
  "key5": "3Ff9ti9MEvpYkkHhytqrJ1jAJZer5Q8MJE36h4HAH19DQjgS8Tiwt7mXpydvbGNEsb3TPH8eGZBNJPD6yBoe7UQZ",
  "key6": "35xj3XmCYP16iTQNt7R9D67rPkjkv5R3P48ZtYhK8vTtEG6YdoUbAcRYZ6ova21Ad5fPRuTLefwY7zdDh6JDnnAU",
  "key7": "35Mp9iC1MT3YcLLkpbseuvPY7U4AekFNAiwxBrtCxT6NAZhEDacw9Uthb1T7MyjafcEzaYKJXit1qv3AvVYPWZzv",
  "key8": "2apZMe6D4LPaQomigiPoHtBATz1gwJscYTMvCL5JHxyk4R5FuUGzsRTHvFMmGTFyrRKWoQ5KDd4KEGQnUEEqmKwf",
  "key9": "2K8WDHke5UUGu8CmT3FdAiG18JhDn7GCcsYYfCsroq9YHKs41jmUHdPszYLk99BP4QUzYNvvqmuTea6z2XrkVdsA",
  "key10": "5uokQsQKAxkQJNHrzs8oEjiYk5bo64c9mnCG65KoF52FsXZ3TRjHLMHu7pJvu88kWpHfMEYtCwh27ySvaW3f1JKf",
  "key11": "5Avt1zJ7oUL8YkRBURk4Z88wdtdWruTYKaUED1Uro6Ai8o51Fqd37K82yPxwWdJ1bLzDdJ5FQ5rSbsP9peQeHoVb",
  "key12": "kxBrdxBJaSA4gwVwXHAHebBiAyQF5YAXBTMVZ2mMNUSzETwcrcVmgYangGFMkvZ5pxH4mE29FBzD3x8259aAZFv",
  "key13": "2uDx35FfgsVaJAyaTkBs9XP3kDfVdVqgMghYPwHZxW4m4VXB4VfsBXj3xeF45bYesc4pc3Sj6Aq4w8bdGLfiqCqU",
  "key14": "2TY68YFn7DRsTNjPvMa3H75Pd7DnQf8LLaomoJK2gVrAWQyqXRxckungfGx1E3Mqk1XXuuZGWkdbEtEujHFZQqyg",
  "key15": "31aStDgp5AxWp3Wn3ozgxi9vJCctqUH6heh8N5BVSBGCPGSRbJJ9BjC2jma7SzsFRZG2A592yxwoahLmctczwRFV",
  "key16": "3mMKD63tqhn3fzrbjWfX7yGrJQTo6Dvx6zxVPxd2vAnGY7ptLVjHSDUXHWvBxZXeFDPPM4PsGgBtZ8vTXhVjswRY",
  "key17": "3PXULaispZcHEjFm1FrkrHbjPoukdTAVp4ycTr6gXfCyx97Ut6KsaQrTgU9oC6mTB6seA5hi7T9zgM22DkzCHiht",
  "key18": "62FVRRbNgtZfe9LnffiKhv4J9qs9TanWSzZZ5jkEL87tZn5qx9SctYG1h3CqQkpNAdMv9PkZY62nnYVnFcZgnE5d",
  "key19": "uHzTWbsGUw6bSPHwpZsEK6UqDXC1Ro2SLyRjHewt7dFEY17oMUKSikgJ1SgF7uQmX36pqSfAygvARuob6VKeGMk",
  "key20": "5otsSt3oDgyVm7duxocL3B5khhRrZ8tA9Zy4DLaoMfFo7f9Y23WVjJXisdrx82zvQRdpUMzLPZSkBVbZQv436G3P",
  "key21": "4poJDyG2RbWhVT7PEDjrfx8dZk8pTtgAdgofuWuZqD7EL3nZaJP1adpD26Ex3G2wY7r9a2DMuRxmCyEZaSLaxbgk",
  "key22": "F8ukguaNH2X7iNH95HLedw5nLVZc9c2okHGkPMBGDKbLocLKYyfcDmEQdn9fe5S83urpp7xdqkSi2ZkptETdpCx",
  "key23": "2oPHYuE7C9ZBp7b8mh7DhSyrxtnW2XNfS2BmTReKnXfHKwgat9MeFTEze2VNLnxMi9b2j3ixYWpXCgiv3EcAJCQE",
  "key24": "4RTQhG1RYF8fdU3YeQnp44EbJohi6esL9ox1r1sdyVbw946oGkMyYtEtm3CKQFKrVYvVTt6p31qmDN3wPDEjT1ZE",
  "key25": "3nuEcyeqbT5FZXbLZNufCN7KnoGE3AGJeP9o7Nsu2WmiYYDVCi25eqY6fKahjiBFRQMTEaq5cqUqyoeuE1QUyxm4"
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
