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
    "3TobrK7tZc3YXAsHksEGAeAX36nFi3uLRgrrgSbKRavcuy7HekQjLJdHuCQ4J86NoTTXC2eQQ9DLuymPDUVDGEdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNYn5vHhaFAon93cphfnaCzGv3paLCktQ1cwXYwi1VpNpQH1B69TUiAXQYE1so3SNkKuvRRgFt7ViA7FQjZ2y9e",
  "key1": "3DASjLaWC3sRT6Wv5pr3yGZMfyXoaHDyQSZeDKwdTmNa7AxXqApmgzxkKqwgaRjPTLdjBBgwfZJnJhc7TTuktXQe",
  "key2": "256HhyUCkYhqSnFkb5rY2eNWW9MMKm76vV4Xzmz14EWJzB6R52opQTHPhCB44a13RjsLgmBWoV8nV3hrmJHpQTtr",
  "key3": "2YvYLFGTATFpcYccBc5XqqeKyMtMCffEhaD7tDUz2YvHR3dD3GZPTSwQFjW1JT8jBPrijSQwLVu4znrQHw5hK2gN",
  "key4": "41hrYYJ92xBP7C9j8JoM8nqDSvja9wkfVSgby13r7LVv6BW8LtEXqkXzKZ56sLiLrn5myrAME8mvrfCYEupBmob1",
  "key5": "RQKrBk8ZHSRPNc5qntYMSpp5k6ESEVbzRcpuTmFmL6sjB3R1kQsGD51gYZfCr5mSRSjJLzqwQsSLACFDKtdfUDn",
  "key6": "cBQvUjBKDof85nFNVogSxai6R8uYhBQ5SDBDXCAcoNyjwYUQuqX4Jvw5aiUxhCPdYEHzj29Q61dgHKVJHvfr48G",
  "key7": "3w1mE9hf4rHeSroBdH1daFrpMfWSVDnhRubdVg9WqJoFxNue3UjMSy9k6Zb74UbY82JQaZU6sjdfnMkDkbhtKMt1",
  "key8": "59DFSGKLEhnJEHATWDuqEzHcaR9PgWkmM1e9EAReTiWYUFxLLai6epve8X3TxXbSz6cwkdPXYQkKNB3R8fFn6bjs",
  "key9": "4A42qAhScFHtruThDWpJnnzKbchhwDWW1MkPPz14mSqous5JGBgXh5zQbEX5UNPHKkmpbDQ9zwcFUwfCpcni4hJe",
  "key10": "2DVLeBx3yu6Hmq4ntQPw7LJgM4USJ2jjZNJtaMfyk8RpW9EQQ8djnndK3KNiL1dtYrhmoiC2HgqTYnwzfak7P1n4",
  "key11": "5YwkiGH4dvmd7eGR8twLKJyg5yTp5fsJLtgrH5VBXupFbrgCj6LMu7XGHFjEf6kdeLS9sBQsaeiiN7k6kNZJ4Wbj",
  "key12": "3QZoiZtkXqUqCnNMhMKXqgNKUa4AdFXNLWf2A564qdLgCaiEXPU1fuB21EKRxuERMSqasrfgxzBezvM8kZ5XKNg6",
  "key13": "En546WS1HBN5v2T6FrGnmbSDg9TH1crviKzJAVMY4f4avAsHSzfjR5YAXeMMwnEQEfPNihoqYHSj3zCWZbtZaZT",
  "key14": "HwAgsXFqxHuTkkrMt1VeXSrx3PEBunzA7eC55wV7LW7Thb2JfgNsLKzYxeBTo6WQBxSNi9k7XkcCq3mEZX2JQ73",
  "key15": "5h6RAPgeEQnjTFFTEExHDhuxPNC5L75YXeJ9pr7vmQXW53KM7RtEiN5HYjnmMZK1JTt2zgAx4suZWrxDRG8g8jc3",
  "key16": "3Tq3LkCaXH3e1iGpJefWfyP8eCqXiWFWVxbgP8XCFVzLtF1BhrEqYgS66jnejg6eLqcBj1iCXEQrwEN3prSKCThE",
  "key17": "1Bn9MMrh296xh2VJ1yQ4mVm2LoCnvYpGu65ffWGAjmXXDAwDP8dkH6dAcykFzKDPX5n1Zeg5VhBcWsyZNYsZYft",
  "key18": "r32ANTmuSDXETrncEDwWbu8Gn7vbTspHJSvhR4rM24znbFKCyxLBcDcESyjSiic9NoY5gsh98rnxM2jfZeaAwHq",
  "key19": "2WgNzGSmgWZEvg8aq72HjXwMoXA12mwucw7K29xsDvF371LwWUATzR8Y7yRJ4veBWwhNn8mfGLnWYSB8s4j3BaCS",
  "key20": "4T7PjFwkbKkQfHkw11f1kyQX3u6XfdNZLtXY13XE28dsXvT4DzgwBa9EPcdF9EdADmT6xiZ6EwWwJBwrRtBqeMC7",
  "key21": "2RMJzKEwSMPJYupRChCgArBGnKEcgKGnaP2d5daUpNG2LEh3hJJ4J3jWKQXE7CayrHV99rPynYceqKqbW9kaGeDT",
  "key22": "2YPCkeBJXcyZv43fGNrv26ZBvxRuSeDizixFzJkFeh4bHaJT8wKZfEsHKXs7KWR3B7gws7Hk2HMLmzJRAA7i1DHP",
  "key23": "3obhRUzhp5Xbbf3mjwCvNe7E4RTU7AcYLfCngffmNGTPTu6RBohTk8T7APrnEjaHjsaGsJ6vBe2Wb6gPyZyAz2k9",
  "key24": "4yqFJ5BEAKs7b6gNcs6po7oEaDL9YJwr2pgVR23R3M97J6Rzq8RpwAt4gNmDbuQK7LuZDr9ufjFznS8Z8UjXAB4u",
  "key25": "4eYdRd7sCC5QFrWzuRYWtbwXQiPGm7ycrQf29HTGWN9fKK6asA2C1fi5QkfemkjfpQzNWo7zNHMNTtsySV6rzwAu",
  "key26": "4Xvp17cVLrr9xZrCHHEpMSCFBxuC2zowgKNoXi8pG7ZRyziZbbq3DoHpikyJj2GjZyUv7xiDQbztUeBrxbkpnKsj",
  "key27": "5pYv482sTZiyfoR3mUejpegVCDT7a47uSPfVC2GgERf8VeXZDLXZRXuWxnzjrEZsx2Xk2Gj5UXT4i6trSg5ickCG",
  "key28": "2yHpHprB8hvhYR3ktxbAqPocrqMRewFhMrqVwXc8y8eABwD21j4qFkxC8nH3J6y6VN54RpXERCcaKS3tEFokQjvf",
  "key29": "5MmRwYLKYzjpxDuqTqh988nUmyVba46ZgQCE4L6eno8rZdaD4LdDjABkSN7e8ZeGszVDpXk6VYSW6qbAWvzYRmYf",
  "key30": "3Cn6Hsu25zUyVsuXurxSpvFeymtTaMioSACGKy9Urj7Z62wxQbtQjWhNo1n23Y6sfsf2vsMQZGMfLP32ZusGJok4",
  "key31": "2n3WPYGvwAkza445eyhNPYbm77Kaevs6LEk3Mq5doAwLbeVT3EzP8PaH2ktd39qNcHN61WE3rV1w6yduKa5D9kNQ",
  "key32": "sW8N1ZubjLbhPwgHtnoYm3NQ72eiJFbZQMVbNTdnHC4oGtC32tvSYQ7eQ1bVJpiifz8gmXdpp31xmQQYARmrQuv",
  "key33": "44nCHDexvdriTZxuXKyxfQuUUW5zF2pixJsLo3Nw1R5wUwdnyRmE6dLyfPoF9d8nrDBxAyxTwRyb4fAoNHbjrCzE"
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
