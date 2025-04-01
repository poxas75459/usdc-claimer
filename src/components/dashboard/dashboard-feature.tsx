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
    "4wE4cp6TDZGh8t5Mav1HQyiVgqSScntxQCgwwM8z7FXZL6B8PXTcJEdKnNsJ5Gb1v2wgZ2B7aXwzbsq1cPMugF8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gobwhrr3XFZeNacTNrMsLpUPqg51atXpxEPUY2wETBh5qodgJgGbnjepX9P2C4Unnw9UjLvYSWRpBYEjYjWJZfk",
  "key1": "5fZip9Ffndo4WHKDNPKhd9Qeo1xwpoi3pfeQkm7YD6T5jM9LMZ6dSvZnLurTkW4TfAxnAM9HBH4ecmxhDi42SoGS",
  "key2": "tbyNi98Ewc6URpvEZotgbLxLde4EUeCn1naBUr1JBUoyx9C1W628K2xNFGLrkDthrVSY181S8kvTEjPtXA5EjJs",
  "key3": "5dvwJnFPjnQQigC2FTkbJx9cpAMZcrwLjaNGT3hLciats2Rdm25v2JFZfUUUS4Y9xdYdJQWWDNCv9CKHnMhvFUn4",
  "key4": "5WAupkJBufeXF2AGT2ymtJezPKNnDRhJ3zxGAeUmKH9BXosXq5nz6nrkNjUcbf3JMPJadHhrdudSdnuaVG49T8Bw",
  "key5": "3KmczYkkVLXhm9jqetQL9C4NqsTGHSu66Cy51yV9BTAQywVhr3yJwBbkRLkbFX3vVtSx4JYPFfuQKseJnx7eqDyg",
  "key6": "2AJrKqpbMsL7RTfKQqPR6uo4dPevRMmGPYzp1HkNYo51SKgDYWTCi9aveGfMu7zgNZs7msFUx3mHxGnx7VSNLh9Q",
  "key7": "5r9uCKsdgGxxp9uEwbmNdFzrdQXAYFGr9toVbX9rAtPdN7U8jJzm6LUoATJtBGFdWr9grRBpx6nDphBr7qVkgnMM",
  "key8": "4d5UryDXiofEQnEeYoScYR9BgZT3CNkZtQ1N8SNxzkkM3LHsNYR5WALQu7ZxoL24jNv5bDvPxyTyzJrjpDkGZHWq",
  "key9": "uQJCrjB4tDAqhv7jWNXLZgi2xNVfdxJ6jzjoEcsDtor5iFvg3yUwE9sRW584FKqnbzgiAAmMfa3oqCsbmJCz45p",
  "key10": "5FgE35FAFnN5NQqAEuBiF6BkhpyD2Uw2U7SCiDVSU8HrmqhB5BQ2hrHgD6nAnUgFEebeRnCVUUfwMo8hkyhrAzxX",
  "key11": "59gojMmZ8mQwjJwyJSGPwF3VZdTRZ6Yag5kooh19Ru7t59aomkQBoG2TEb1YnBRBr8aNr5EuQY49kPSBshkngNYF",
  "key12": "FFsozuVFLUWRqQurdvoTpSWKdpKqPo2QXYhpF1xjdkVmxFsXB1g7yVpz2GQAyB6oFgXD66zWbb8EtJBN6jPyUdF",
  "key13": "5ownxf8e9NCH4cQVqPjPFXwwPNGDjYidNq3HMyGzU1ng52iuX4TFMP6DQzyKKsJL7vjRUvcW1eLPCXw4p8DTYPMd",
  "key14": "3mh4YKr8WksHvdWfwwe5b6hrgv8pWUJxDXRSf5CtJhi1Lc8LMoU2hMajM3uyspKDYXRuqbiFYcgRmXvz1M4ND9GH",
  "key15": "frwdAYf9FSocWrzhCFRUEbNHvRZ7vuKN9GdNVCn1XsmVTrg4tFL2PjFd7vDQv2bfGuKMBPDvviBtwAeUVfyAh5K",
  "key16": "cMvZ6TVPSQhe91LTcagCpWRTYX5zpN6PRXsJefM7AoH4moHtPxaAvfs7vwbstPwCvbNVnEZFkup87dcDAVUZ4Ww",
  "key17": "3qcGuG6akwf51Da1QNz3utCC3A6jNgtEmSeA6v5q95pzdYYKHPG87e4EE6hwPJhUvpD9RPCRz5B83MgbnKwixuSf",
  "key18": "3rXHsMFwrhfLALX9nxqDzYYU8B3ZieDmeG7yaat8E4cjeJcftWuDSjxCkkgjKuy6CuHCYscC3DbKwfS9AjCwVQLc",
  "key19": "3v6YXHgP4YQACt2XVvou3oCWRihSvDB2EhLZSZGszXNmCTw1oZSpkeFU1i91FAdcetCkQ9eMmHfps2njKTiB69fs",
  "key20": "5Dqyq9pGLnmw8cVo73ebLVtmYqNE5RQNSsw19DakfN5gUUVKyzcRgZgLayvqrmCUyBokUHqY8quTNzagLhaZVdv6",
  "key21": "56eA7VNMESTVFtSQJx2CvYxz6adv7ZTMQAwB1rRrx1AcxwSKb6FBbzB3MpxZPizVbtX1CCow9t9QLNMELRF9HJLH",
  "key22": "4gF7TwgjHiVPVRTy371hJM35SoCJ5FahYruUzzNhDxnrQoqbpoatS451fgYvcBWH7QYvM5GwNGsJEDvndz123v3J",
  "key23": "i9YVUPEd4MjSev457zPtH9N7rXnFTyzE8NFzTXADGMddARDPzZh6D4Z8AWEcGLc3w6Re3Nww1kSHbV1ThgHFy1g",
  "key24": "5EN6vwcAZ64FfwSjveeCejUcpk7FR2h5MXm73Q6bGadEawGMBgTgMaVPzY29VWsbeecd6ELrV7LecmELqabZVbPi",
  "key25": "2KTQxbSSH54g5cRxHtYA3hykaLZ56eqfCbLjgxz3jnSNvmaC9WEXgGbuxMDQnd9kvCchuudSMpotdYTRmK1xrVXv",
  "key26": "3bAmEMXf5skLSEuVxQAG1REhM9rU5za72daP3xC3eTLHjLnfyWhMbtLkvAScvUq4eNQtGAp8CVS3Venh9y3znMJt",
  "key27": "38kamYBWh8VcAmLFcx6MeH3JEKiMZTrGkmUsHDJv1a6QopUDKYJE8BTtCfLAcEzVh62hgK1x3bdWdsmbz5hgNNk5",
  "key28": "P5G8KovpkiWY1x3uFPr2hxM1NUSQ4nJmpsYNTay7ZSGZubFrFngxPf8CQqXsjkufY4Y6ww9inX3REXWbfyyv7Nt",
  "key29": "35LYouddrD5ATDccR9F1SgkppckM812gnWdoTkiGJuVVEE7XKjh6jMYewLbV4sryP3BGmf68sEwswEEg1xh3qpN",
  "key30": "LGeDo7h6Q3wawzwsnTPG89eUkoWC6ikuny9TbEPKdKcUUHxsnFmU3bJD4QzuPQiTFbVRvwyuvLZUSxF3CsMMMhV"
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
