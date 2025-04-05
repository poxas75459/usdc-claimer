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
    "5RAEQ9sLJGidCYiXibfQdiMGiHwSgTm6vQ2srCjq1eesRTodo938UDhdV24y3q41K78TvewjhWCtkbwJhwBeHz9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uY4sJikNrU84h9DyQ1PUbhPh2DkLd1UbFZFdC4GsCCaYvLKwpQrvEoHdvUrvAHEGCN6McrqnnVE6nfm94YNyXpj",
  "key1": "5vB9fTvqiDb3ufcEDLtpGndYRRHzKEu6Sjy4A6bdeYypvDk2SGHT1wGEgYcy9nGAGv8SiM3wgz7BiXFPTrsBi3Sq",
  "key2": "gT9ntXjhAequwRrCh2PAiMkk3aUkC6tFE42wTsAPNpHtDpcq2GPqYW2QW8MdsXsS2kJCfdtpahXyfsUF6fu21qD",
  "key3": "2QGg8MgcdjKQpHrzyex9QrpF1skDUGWQmRAepMkphRU9NUBeGd7wLMhhgejPJmuoRiFiVwvykwAgRh8ztYX3smpH",
  "key4": "tjCdTVjk6am2xDr6DJXnEXR2FJtfY5ETRXAE19pMShr9gRxRAnNqXsNbnmWGgJg91UeKTC7MiU4hfPHNJYwvtB2",
  "key5": "3AuNrkJgWv9zG2S2mgnjYwfLmggq2TmyQ8znjKn4TmNKSH64XJnFMh1A15aYLyfonR7wJ9PWZUgK7Rkpju3BrztT",
  "key6": "5XYJ6fNoRnsQBV3BrJAJwnUBVQAPsxvioBiTAsjJPcyGKTpQWqYcjdZhDvEZUUrapQ4g4ALAnYDPAynaQomqyf74",
  "key7": "4njgmW21Btadp4wXhHMzJU33QLNNJRDPfhcqqqRCEt3vtefESw8d7495wFVpb7HEQqz2NnLJRbxX4bnqsxmrApcT",
  "key8": "7d71hsXds1GgZ7hFZGPLj4yd87MHM6gVRPDVrQyFkWroDsYGETE71j24Nb66AGR7DRwqNqN45YiuqutUPXeWVPd",
  "key9": "3KqLG7TFvCxw2s226wPEmj64ncjy5f44QZFaqJWK5AJbxDU51YWQULFPWmSbzE6UtUzF6Aj2eX6yyY5UxhNx9Acp",
  "key10": "44MEKtpHzjc5PPWSSXSngPbq8vtxk4mzu924QuNdx1TbWAb2ubr8k3JmfcCMwAfQBUYWMt87r2nVGTspb5Xo8RjG",
  "key11": "2Boz1vo7fbecz6ti1p93h3viptuc9Ggfkro5fEDUQrkDbag5dfFDKf4T5jsGWk9x1dA9Xp5GCGR2u13Rr6DeZzSA",
  "key12": "3JtAn1VpbQkzLTbiUs2NKeeWsiH3uiMBgL8pD4RY9aDA4zjVGzAriTr4CnzSAYh229BqErtuobZuPHaM87Qw1E8p",
  "key13": "5FgDvGqqavfne4geAm672qRBGdSYgufqBxu5Be2brruQhrVKjtq3uWvuvS1qQRJhYuhRbEzd7Y4ewcN6aokCx6xH",
  "key14": "4ScRcEY5nJQ1pStR7uiqU9u6AAX2nFpr3aGobgGFmw457K4Yz9x8DpjeRxpN2HFrfA1SHxVsTwSThFGjqGxFMsop",
  "key15": "4ZJo4UGKkXqGrGXNuNvZ4ZQnD35Zqwyfz3n1J2t9ZFUFoMjviUpu2axKP9SfKqCnnsGcYsfNXA7Uefk3nsPQSQPk",
  "key16": "2NEQ3QfAzgj54ku6kQSzFUwvLKJKbDxGa6dcbUVouCf3aHb5htJHjTuxdzXvQqjAsZqtGNwkaFh1zFXVag1uRnh9",
  "key17": "4Fk4hr5WotYeFCWZ566xHEQ8wUVW4aLrFZLj9EVtxL2oKVmWyjsG1YpioMNt9m9zuxQEbgLqtqWxURC49R8YLkv7",
  "key18": "22r5oefh1e1chNfPLP5M4PykRrhExn4Dx3udWBCiYif3wkZF2jtHL4SmtaQfP55J74Ys9KuCHWufCSXa9Z7EGrrH",
  "key19": "65SiLP5oU33kNT62RoLQHSJkFJ1VrgSk5XNPxwEhcW2UjCfPisy3xfYXKPQAYJTyvid7sE8REzXZhUAZcyHKnCRb",
  "key20": "2MTsxnrEgfFmsJzrGhGZUrziDGAJNbSDpeMfsC1KBvVBCZsvwVvPCcuM6DJe91r582CigbXwU7YLvHxGngB1ZPgL",
  "key21": "3qsDeMatgQSN3bNspSEUJUHAwfPJGBoffQ5D2nzex51zH4YJZDGh83WiSPQoS3qMDAVVUQcNUZ5HSxJ1FJipPigH",
  "key22": "2QwoC4YczWrm4MJDgLpAF25PnsvJTkPwNSDJMmwns1KaZzKbDP96Y9FX9TxAq4ZNLUCbBmxvFDB1dmWSv2nVEjQn",
  "key23": "4nVNuo7Y9WVrPkmdib8ttmp3hUMpTPAW1rovGNfWWFTuR2vkiN7URffgh57mYqfmPpMUgWYMmZASrqLmJjmWq14i",
  "key24": "4jqRs3U6NgXQz5vKTnCVe2naVEE3wDyDXhWQqKAyQqqCEJLFrpZFUQE39kZ7DNQ7caubQAhvaCeTNnFFJpeoZL3V",
  "key25": "D6BwX3YG3ZA4BgXkmuJ2SdndC1oR5Fj1BdQBRVLd8XVBGLF48FgvEXeeRbKDbkr2x131ZVmg8BLeyaZ55zjdqzC"
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
