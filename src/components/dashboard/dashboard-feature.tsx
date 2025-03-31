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
    "27ygX55g3kfix2pk57pFV81TJC1qaxuPsGhQfzCYWcgiDSM3KrHQ9uFNN2CFsy3vrRui6WZJMfTwZPC1UNAFMLxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5KLtRLBZoY2tWk7QqHif95c4fpWqNnbPbMhyhwCWSoBPGyUKAK5XWWoUtBzhaYQWA4FgoqsBDP8KvUxsmZFH16",
  "key1": "4ti4wD2BzbWoqZm6BmzQUZdEd8Z24wHZtbkRTHQBQ92iZqZWzEt3c1M2uzMNAcUvtdsdr2t4setAcxz453yvc9Lt",
  "key2": "bXRy9HCf4PKWZmGAcxQJFZFBpaC1GNEhtsEDZRdJiBYaQbBRy6jct6dtq8Qvz85zyTFwjVXGqfh1U7PWPZvTPe7",
  "key3": "Snbik4AM34WNBRj681gPwxTTKKRxZyNdsojtRpJPb36XLwLiaYGf9KhCGhheZvCmga7Hki7Psp1jwjAHN163iqK",
  "key4": "4HDxGkQGsQuz4xSmzCifn1QkQzQR5oSAWdrfDtUyyGMtk7q3UpN8jR2grWbkNcMJcLmCdbEdjx3tJe7z6h1WNMbo",
  "key5": "9ukheXFdJsp87T3ArAjpEKrgKqiGhrxy24vg2X6XHFNpazsU5uQPFEuowiZa2xQ4snLDZktohFBWeQoyUFhtZPB",
  "key6": "3q2QbpnBZB2Hbj7sXns6QD3yLqjnn1JrfXm1htkZMQwoBFF2RSqVBATBx9cknrScgUGKaqDtkh7YopLCmqhG4c4U",
  "key7": "5X6qBzeDvd2KF63uUF9CAxQDRmrPQgceaS9VeU5BwGXojhyxhJ4dS5SVLEVb3LZWPyiMvuumgsmRGHSWRb9MfMvy",
  "key8": "4KgmDViMXqsZmGLbrz8chZ7ngWFshtByqDaqnvLuyJNbYud7HbQWu9wftSAJdRPuMXKYwdoSBX5j4VKNQTNn7ABU",
  "key9": "5aAiyabYvaG5Vtw3WPozPZsvGTdauUsA2HVLcgHciYTRtQmna7XjVXKUmMqzE6McTgaLW1eSYivjk5KSFVkEQvwk",
  "key10": "zhgdS5SQz8NcLpvk9KB6NtqQXDYXvVznxw6NCYTteddgCjgkxojwMXJucxLbRUASQJRWvWL4YQkH5i3FcgiQKdH",
  "key11": "xUTCezQyRNZKKbms8VeNb6Zg3w8MnHfyKfmDYfKWP9zPkofwUiKJ3K3ABWzH4Mb4V5W84N4PJcYDT42y5vA2JTL",
  "key12": "3zPUbdrki7JYaKN1SdEuYz92VPR86WPPKeTkRjPQbDkBn7SLosXvRqdB8851hbuJKcxY4aVLkpraM5TrgwaQihVH",
  "key13": "5EMrpTwcGmM81S78iWuTiridepkd9cbfrPCjF2iRzwdVnvvvGkgtHT2toKPZMga2CguquGiB3TTjiFFdgn36Caot",
  "key14": "3ZTuho3ZZMqTVoKMokAzYqyHdnd52qJgiSEDaEeFSeRRgJ4oE8MAoaDUwNrPB6c5vAAzwPR1eJYVZiuj2TA98ZTd",
  "key15": "5hSpyQ1i2skYKvDmpERNaqNXV88wqgSfiENEWjyp8wwxTwf4TB8Z5QsDgVdjTvDcsDCpWQNSHGDyrqdWfGKhcg3V",
  "key16": "5B7mYhKebmmCK4H9KLYh8nyrGYUPajQG9oKya1WAt2quCze9N4NJrdLockuSFo5BLWAdAk7997xVizgxmRpyXFNz",
  "key17": "sGDJN9rzurq5mS5RxejAMFgAsWzJ6QnwpN6qAhSa6PPTpUaMcobhuohRU2CMmqV9T5pHEnBaMYJWoeDxy3Z6VHw",
  "key18": "3orVK1FZUiYpms4vheWtZ83je1BazE6jUSFU5Znt4R6jJm4cztHFDQup8LyfJx93HG3Q7NGgSTaBZTrG4THHKwJi",
  "key19": "48QpMb2a5qAHYSa1MyqA36DD4FWWfLswQ6CVrvQPuzjC7EA9dsg9fBCVkRzqQhPR1kthHLBeGKvYHnK14HNCZjF5",
  "key20": "Zo5sfgX6tF5REfN7yi4VVrpYdGoL3Rzoe3hmYRo65bz25fZW6U7WEe5Yvr9Qnw6uuy7MWuBfb7imvPAiGxJvQeu",
  "key21": "2iSD5mMTT1maB49XtkuEL3TJapzcraiVgXsD1WQ2FrYwhpx1QsWsuuHCpgQk9xfh9LNi3xM4ELUxWVLujjZGnM3m",
  "key22": "2j3bf4eZotaknxfVLjbTTACmbnAMcWDRBkqGFk6vaCKbjq54h65RuNiXxb7WvACXU5pwqdGV8zUjG6S8zKKsSxUb",
  "key23": "3g3vGzYMWF3cdng161Y46xpytr5bVtY8eZ12cKBJxiq76zuyrvFeRiA6CnpDjVzx7zK25UxURN9Ys2yKHvptBKUT",
  "key24": "3ZDCtfAsostUfWFdPeEtiA4hP37CmzQidbygtPAVrAAnK26k6VktTFVbQDGrEn96mwFw8MPTBCgdZkv7ZM5FSC3R",
  "key25": "coYdpUJBMm84TwnSom4uLuCfsYCsuGe93hg3HuaysVVppL3RQm9tRGwsDnYSKWkMEKTUiNsopkysh1eha2gt25e",
  "key26": "4FXmXsQw6jRWJ3xpLiX36zA996gV988FHGJkfkABnWWdydmU9NDwTRqq4XiPTca7YnTsBmY44eDwfV6WKf9oxmNX",
  "key27": "5eTHkwdHCJVxeS9cULH8uat8C2JK2Dt2EcTHoqpCeZaD4L2QxRumTVFea8AWXdimZQFzsXeW7Sq7WTsZpzZU1dky",
  "key28": "3quMbF7zYbwgAg5haHdj1tAvKr839rebPk5zZJM7GxA6SXADHNmTbgvyCZn4CKqfrk3V4a3PCUmKchGso1vtMJss",
  "key29": "38nhvVj2WT4Gjs8ucNcfV3RLCXFsoUCR2MjoxZRPrxZgPTo7q9FhM6DxZmpTsB2Rri3UCAHLfyC6pHJJ3Fs312MR"
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
