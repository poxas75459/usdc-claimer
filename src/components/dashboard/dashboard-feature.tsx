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
    "22TYEi1h6VC7v2Wu8PzLo1jhw62hm6RCv9ajZehe5MnkvaFqG3MGzTHkiY9hhvQ8d5WxbGCQ5G5CYESmheXmHg9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wVLn8n6o4EbhBf87KHpWEixETVVWEQhUweLDHUcqsJhMfPPGhBtVQGgwZC7gswQNZn9auEmHyjqbcx7HUUCQFjv",
  "key1": "3siAXTar98iYDEuSe9KSgZtgLasrNAyJ3aBhsnk9QazQLgafCQDXyWEjB3W4LDvsxQXmz7kkkRk4s9nukeYrY5aG",
  "key2": "28f1UUrzKXRMw1Rqiq14e5adRHavdEHXtrVafNQVg3UHHbR9uDR7RGESyvdLhL4ocoDA3QHXYe9pgPgjkiigh4Np",
  "key3": "4kdszhkmr1EJHKxAXAorE2ctahKSeJ3tvui2mmofXFd3pnwr7YYK5EJoMRXnKnwsmfubFLK79bgAJJdvgNLaXLF4",
  "key4": "37x731WMmimnHJoJ2VGzFTJ75CuE7sQFKT7pP1AkqY5TR8kMQUCyitEPdfTexwszYG52HSaE4zjhLDQrkUVubw98",
  "key5": "4yTHoXhztvsxpoFv1kpnghrwgAfukJzS3nbP47K68TYGxeZDELtN7Gf11C3dhxx8YX36yqMkiMj5Lkt1i44Yusk8",
  "key6": "2jtQdtJTxqUaG8RrPEcikhhscNjzk4bjHkKrKH7Cazws6pfyqnzfkQ45MVx1ih7GNH6ShhG8KiKs7fBtCMZFgRRG",
  "key7": "51tcrru4mQ4yvCwH24xt51yejDn56AXreMaqst3rrywjPMMwamex2pqs5AwD6jqvFvqNYnDfJC5NDCv5WZjS176m",
  "key8": "4yjjw8C8w7nN2kQXaSC5ZZ4uCynchpejnqoxRQ7MahyPFE5AtQkoTVQTBjrvsQQXWHiDmVbmeTWgqSJNug2JdbEc",
  "key9": "2q3ELsEMdWCs2pRdy3SQv5qzPvqV1HiFxz22p7F5uyviXPTcrM934frHtA3drjy5VyV6vi9p92iYzbgH5EAFUzyN",
  "key10": "NXh36JboyqMxSD2E5LeQJz3oyCaKEQAYXw2PqBJJSgKPRVqkJv2a4BxfDJEQKk7pcRwmb1rRetD66Dg6oEdGQng",
  "key11": "34Z8faaBHLHwix8axVn2bnvG4RjA7gq1dgSRreSzSRf75idddW21JnJLm5xuzWDV1H4wgJwmGCwHaQXLacs9ciRt",
  "key12": "9gdx1JJffUdaA5qwzwjjGAaWzWKdUX4QpiXK5upVuNbFZWMW1AE2XNjKgPodzrtQqj6kqG7yxwV5ASh8A1E6svD",
  "key13": "iQPykJppdt19x4QouYei56v8YXQjnkWQvMH4URaKRZxFFdHSwf2bCHLPcx9vPudKNypjsC21zqT6T5X2kMjDRap",
  "key14": "328Q1ZZaGmre8W2d3R36jgMDSZABzTNwVUz1LbaLbgUXkJxedjVdH8bcx39tPC1cvSKotuKfbwJB2omdCpc2KTiM",
  "key15": "2UkXqeJHeDAMtk2cbxgmjAKjrVvoBRAKqXerjCrNeZyfqRTuc7JFzs4WMtBmrhBhXv9p2wdZXjDJbub3ZatyXMA9",
  "key16": "3BhPdpRgWVs2iwvM6YZewYRsj4goHf5KaPyYqcZLBCdSVda9MmnE8YdxTbgavnjAMJ8EnTJSsuHiDcJBCjqttT8R",
  "key17": "XiZKTYJ9Ke8H3CJ4jk7pLbz8QVvKnmMB682Nh3CQBLQSns4qfZLhuhMGzfWLuroARwXd7oM6nq8BkkderYpugd5",
  "key18": "3cv9VdfB3kMZM4EHkXFP76qzfMVX1VSe9kbUFvviDwAYHjqPMHhobzjyUkMqxn7YVhLqYbW3wFP2pnrMwgtsFz3e",
  "key19": "7U3Pz9d9UGjayqWLjcgA2vQtR7E9WeagUZa4R16i6QqiewTNAoANq6yNn4BLL5Nrq5kioQVuhR5WoPWDVMCiRjm",
  "key20": "3zkqqHFP66Lv1LTQySMi2t2KHAJKKf5bvCpYUy46VYxBExZdMphkf6YgrxEqBrt1DecHWyQhvZD3ZbreGALU471j",
  "key21": "UkgUZViNdpkzVbD5upTTHJecTLnpbJYCQckzBXL7UAxGPmphKqnzt2WFJv5fL8Lc6JFPCTxuwAECQyj9CrNuuV1",
  "key22": "3WKvQcbJfRuAnrZcBokJ86Ynrvge6hsj9rez5VSa5vdA2jGnMMHggvudiRM9TwANrjn3Fgjycdwucpk9FxJY5Pta",
  "key23": "4qTuMNBmeKkv4uyF4QQKGEiHe7g4KSTwC97hbdPpk4Rq9p1Pje5P6o6peFDgv698PMjmws3cNaw8mPM8tnt8wr9b",
  "key24": "5hEhnMWyiZrzAwmj5B3rzhXyKXTJY5yziZwfB8DiPzfhgHVbYfjFjDXD6iU1krfbrJgCeFrwSMcnbuUyJ7RRdg3u",
  "key25": "5Y6MUbD6rn3EPt8wMSUGWRGCKhUU1xXdZ16ZgJ3w1pmq21YYWVNdZhNsmJAXw9mTF45nzHXEy1ppWKec1b6f3cH2",
  "key26": "4C5sbP2AurwAqYziXWa4NM5tmWSfVES43CZbrpumxJZ4mFuFTX36ML3UEfq9FVTMHM9mPctPiP1M7aJjjB7aNUsu",
  "key27": "5VnCkRT1PKJdGnSD998xjinktjgfx5ki6wsGDHhW66zUJ7vcp2YbqEJUvuQRYKw6MnCVNSTx5syPCC4tV4aWAKq3"
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
