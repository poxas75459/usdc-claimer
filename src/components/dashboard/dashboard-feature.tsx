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
    "1NJkMGpXPjcVxv52wQPKGTLnQ1xZV4usgRguCVmWTHfTgekU2Uh7WyZpXBKK783piV9SsyEy2FAiTDcHzX4ibLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fPGoLw4mFtDN4cGRfcUReVx52S49ePzLz4uenPDj4TqZCUzzaY61o5nTzLMV1vfX8Q77PumfyrZYTHVYMzU8kr",
  "key1": "55K7QtKGAgFnNV71CuPEmRfScaoJofuWzNhCcwjmjCALvHb8gvDx8nSSxg39kA7mFWDs8grNp9zsZ7ebCYvqaQkJ",
  "key2": "PBBJYdaSFpELaBXJtGBz6uNoFDPsVRoNuWRaJK86VGjCEJLUsCGDEFoDauQNYZP5c5KVQ2pw9FoRPeTr4QFgGC9",
  "key3": "mTt6G1SmC98WRyhQXApKCicqpF2J5awxFpyBz4v3MQVRsjPDZewUraC8N2egyFCPJaKfUSCSohdE6z2yuucDsgP",
  "key4": "3RQjiUTFCKsA6vigDSB3vjwccz6oAvuJQ2WPSWFepmHsynfXj2q82DLA52HmM5gTeGSaHEQTnD45e3qGSp8eMQYE",
  "key5": "25RScqsNHC8gCur3W8yjXswaNFPEjuMeqfqhVnnGGyvXq8Wucgxaa7ugvkfg8nj8X73aE3Bu4ZSQxHwtByB4sy3j",
  "key6": "3HjGzQf1XLaNuy9yDtUEtH4rx7yANH2Ht87qrjqPKa4uxQwPH9UBfAqtKUeEHkq7i4YJjAKAdtYu9dnidYAAhvkn",
  "key7": "438NrEmo458aisJJKLQcRj7FSA98LM3fpVjcTiNLKvRgcKeFqaKcow8mtFAjvP7CaY5vjVNfjEfjhxgP4PvR5GK6",
  "key8": "5ggHVBNzAM7ZoxWKy1jPTLd5CNg2dc3GYHRF7ZbUf51x1zQX19iqoEcHZeN595GsV3B74eKwSrgFXTaqfeojubE4",
  "key9": "3zCPGwUBxhqnFPQFCjqXAKLt2x2BgL2XnDYi2wfLtHNf14tozABpdZuzZBgDnuxUN53pDnS18rXDPPaBWUTkEUii",
  "key10": "3ytZiQDqGJn55fN9UGkVuTJEve65LYr9MP8UUiaYiTxZWTUSMiQx8RzULLxoWQkxM2pX15fr3kLTXJoWYzjY1Jaz",
  "key11": "2zRFYozTiVwzhGRbp4vGsk3UVftLAEbec9kocrveGtM2KpAnpRDubxHFE5gvDeEFGHsVPMfNymvzq6HTV9ybzn3G",
  "key12": "4CPimLPFjfmWY9jzV49MeUBzoY3oC73W6oAvB4aNTUgbQLcBKfdpfBd13yMdauyfJMFu2BaUeRUwwUPv1doedi5u",
  "key13": "4nnyZyy3bdopNBY2DqNHmiPAqm5H4sMnD1NNPFS3rUZ5YVY1NRGzDgZMFV8fkDaYk6KwNoc4P3Le6AiEWbFu72KK",
  "key14": "3u3oLQ6vuxnbZ62i338XMii17JiC61JnSeqxLofdxrzUfXPkf28daZeRWu7UMJzGDhzyeLscKcH2ebVGokgpNBmq",
  "key15": "2gm9gT1JMbhdDYXgEc4mQD2ALE6SqHy1jnoFTZyHweMvzzPsBXwjH8m6JkkPaXDsFRLiDH4wpdHiDPboHfYyV2pv",
  "key16": "5ZWcSG5trBxoQ3nSSAJN1yb2mJyDWxDFkhub5SL1tCqpz4m9RjUXKTWdfxYUAZewPdmHTXRont1unjMuHDcVacYN",
  "key17": "4oMLLpVD6TxuVBkYgsanyYjfLvVh5YBHJWnNeZumSiCrGKs41Rz6J5MBbZXFU2D86Mm7fCzKTe4dwUtQ1S7nf38f",
  "key18": "sDFPaPVgXcFrqZpA8pQRpk2aTPFgBLxyUTHRWxrh3JxNjXcc799dxBq7G9LQ5jqyHbTtr561sh9UDN2ZwdmvmGA",
  "key19": "V4AdqKovnbTEPDCR4K1zR5A1ELGPvsrUBA1gb36e8MQNVW5Cir7F5uSAkBDMC6kBysnsr9gvFehuVC8XVr79MCg",
  "key20": "2CWJzPWC2KZVCtQXFtTkVv5PAXmshvuyPAgYW2ktWWUekJafbVSEMwhbyfJ6Mhgwn4SZzyiP7NyD9j2qBauQvAia",
  "key21": "4nhGH54vXUQFFRdKKdjhqfRnbZDSRU4yYA5LsPpEWufhTwhQ3VutqvLTgXrqnnyyPvnsJfNHv33ZwY1TBphTarcs",
  "key22": "4yhYX1sCMCkJZasx4p5TwbSLdPB1yrxFzbCGa5g5Lsb92yJSVM7wTkcN7HnRNytBpLbr5PAnVJdHXnqfTQtjFCzS",
  "key23": "F9bRY9TDgaqG5qEQ9c31QD2YwSyjSkDou9HxZeFCnocyYA9s8HWnG5ewWJw73za1uoUZsQe7FaKea5TKUAvW6GV",
  "key24": "4NW4W3VFezNmuwWxTyydGV9kXe3MkyUULse57V7Q6w8KRtzssy7TqKpgVyWpqcVJutsjmUAykhc23m7NaLVcN6mc",
  "key25": "3mL2eXNhsrRtxLmybK9AqcBkGsB9pV398SvUyxeGEwoD8Uz4BYHLh1LKmUrW6zH4z6kGa9Sj5XN6xywiCtVndkkt",
  "key26": "5kfAWxLMD4e25xXpu5eiRyJk2dkUo74FGQNfbGX23hvzcjZyfvoEgqjWfGztRKqqQKKusWUxTZ9BBkPK8rsKEVGA",
  "key27": "2bt47niP2yqFFy4L5BMPVVpHnVPgsrwj3JAGLV7sAGRpzHB2hByDYeyqvXWfPbuj1h5PRjkAvjNuazB3h8BQVi5u",
  "key28": "3GebCn7XHjFiFGTKB7w9JMYXNyN5NpjnVidbFjEJPdFttjJB7N8TSgAbf65B1tZgaur7rBZKJoLFfpsoSDsww63R",
  "key29": "bE3GFEVktY9JLyVGquWWgSP8mwsoSTFmc2rvrMjdRVRh7Djqis1MwFwZfTVcsXD51qUA3u6DuFbLGjspBUtKzpx",
  "key30": "3kAcJYhMhbF3RY28VRMeoocxG86YHbyzSYhaXvaEbuyen9dbz7T5iY2aRsKDtpQBjaJ5ty82RE5Q6yEYjeHoc9vB",
  "key31": "4VGwQp8s21RU7JH5okMgQuHfAUfqMDU2CyubbdHYwAS5iS9jnhXp3Uk2Uuh8KyywHXHf5XB89f14yBCEnGaZQ1CW",
  "key32": "4weStooxRtwxh4APus9MpBvz2dzb5w67MLRbMjhGMz1sAYtCU4Cn1gVErgzefXN2tHz5L6zFDtPVcffzNxYsUTUj"
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
