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
    "53eJ6Q1aEcNnWAi7txbNfv388Q2BJ2RkuE6VxRXLjtEE4KksdTCRFsTzuo4Dkff3tYdRPqppqNYampqDNc92gYfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239RHWry2pkMNbPgnFsTDjh8oMiE33iNzRAXvPYtbH7HLq6w4oNERQSXQcGRev7QbjvMQNz7weetDnrXrxfQb2gF",
  "key1": "24hLdWhgS1kDegfzH71Z26fEhfSpesAU64dfQUCS3cvELzCe738MZZgYcPXJ5o2Uu3UF9MBJwdf46sTGxHRL5cvd",
  "key2": "4psR8okhVz1wyszW3VursWcnEQEmo4xqm3jSsSR9HrfBSZGRGQfZwd3ELh8cygM8aTopn9JnMSKsEU5a7nxPpZmV",
  "key3": "3Qv5Ac6eNRemwtapVR5ek2dToW2iwvULBWcsgiAzfMaVi3sjAtrYeLEGctQwK6qsrabM7JkQeKSB9b9LZ52qrN1n",
  "key4": "4zrYt9Frw8hBEaSBXd33kkXcBBbHeyNxm1DePxvjWju23qvHWNfb1W5wmW9VuvhegDNBhGddBnFxjrnq8wKhxBsT",
  "key5": "21tgLx2gd5Datqwh56GkvD2kenU2jU9eJur6d42Do8j5S29G83mNMuFnvSah2qpG9K6UqEpubd8UdkfU2d6LkyQz",
  "key6": "4KXjKCWS9wDsPJcpoWyNCC6iE82mijPpKEaqkN28ZahFKQ8Tqw1ZPi3yZUJgNvXv7yVqQqSZANhvAD9nw3FdMqxs",
  "key7": "CBcMQ99RwGqR4vLaSfirEsHaARb8V8xjqvf1qmwKchtbFBV3k3FxGkemoE8JGmxC3UeEgynb1noXu1HVVDuGWrR",
  "key8": "3wtW7QmrEWgBFCtR7yoAmsbXJXPufmuc2gtekmVJDjmLH8mnTeUHgTtZZXf1FkrD5e8KJFZ9UoTH4z1uskiWdi7i",
  "key9": "37puwaaoewmz2DcBvcRNAGosdmKaFg4sd942rg5X4cESLAwEB5utnhto7A9yyLgipMqs1nihu7duRPJacWnRDufG",
  "key10": "5cBGamSuVFgKvoCo31FZVGknJx8J5ry8P72cJN9WRTqzJDAwvSdZudt83Q51MjSgUcThbWXMLHVhHh2c4NJjAJ4o",
  "key11": "36Riuvkkagm1ZB7EEAuVhp3wbbHUhHFZuEJyNRsxHtFij8fUmuMo2oCzxZzDrfnT6ph4riKRpL3sESLbVR5scKvW",
  "key12": "4WC6oVKjpNpdgoL52xxoheeo1k1ECeUY6v95VGNxhfAd8hpGunZD4oYTPTNXD86LqjZ382P5mR3hppPUbJFo7uuM",
  "key13": "3E9ocd8nM5CBMkWi6RKUR2d6MGWFjqGjAm7etgNNpNwquqUjegJeWR1YA3TFeez187PtDfyzC2B9yQQQ8442H9RJ",
  "key14": "tzREjYr99Qb5bqtvL5kRtoZmCuYbbjcH75zer2CsVkCZzrzcAzbBiVVMDG8b8gye7SiW3KHU9kdPBrZH8QhYwZm",
  "key15": "5fFp849og9ZeyKipufyCtXHDwgXncQzs6jtuu4htTW85FHJXFREKD5ei1L4VRda7ueaj1mQctHTULyj4sT5e2Y47",
  "key16": "5bqUBdHnT4DFLZTKHnQgdfk9TM7GXsY7b3pYuFv14VdTe1nJSfPqhfh76HUzoonb6hV2NcRKQWHTVvR4HjVXr7NU",
  "key17": "dUV9tcL3Pik7u5FACbFhLxQmA5Wv5Jfw5hrABsNrfdxeuiTU19BpuMB7WYvLXkcfEfhVwCKjrGGmuViyxBvCuGG",
  "key18": "4eZBrx6PaaAGKuMuku8tR5WK7uMtzyNfTce1ceYV7As4tBvwVDNCvK5CdVUn7pBNyzMeR14bUbfyJVnByFf6yxXm",
  "key19": "4VBqc7EH6dxeV1jkuUBvxw11hmT21zUB96oppjuiuZ78R4vuGy8CxsnHBd6g7AWnngZDFumkNxGaXQStfthSz1Ed",
  "key20": "27mntiei21n6voU8J3VzK2gcHZYDr8uPKAUCsXnN971C2vQefyRB5qN3bW673gp2yCS5y4qbBuy1uLmwWKKKQcLH",
  "key21": "3mhAPHFJXyPfGvrgormoYPEmHdbdbCJCmkEU8QktDZDmEo3LFFFXUSTFSb1s4B4ZB8Kmkyw3aAA3WCXoqPSppPo",
  "key22": "2P93wPmxqAzd4ifSTae9nK1YVE7r1h5QwMw34hJyzSkHAU29otpVpHuLq57JgNy1ug4THodrDSUncSwJaNEdzvDa",
  "key23": "jVeonANpKMPHwkPBYXAzBpWM2xXawrLgQvkfqnDh6Byb5yuXPACznenvCHo3MUAqYcDrXdguQFLAvwKPVKZCTh2",
  "key24": "3kicVAMPqpsC63AN74bXtgAoZoHB36CeJ3cyo88w9qWjuwkink3eKxjzW6xHGvbarZB3XYeQ2iySNwuLK1ns7AuP",
  "key25": "5aFwTjJTaXKUnGeuwu22mBpsqoLt6tW7L5Q8w69aRqjJndufGGEjfuYgv58NW44LRih466sTFYkCBFr1PYX1W85L",
  "key26": "2LEoNrk19s5mcxoThCA9kF9gSVTm6PjewTez6TV1AhzHsqkMvsfYGeDeeZ1PevMrXPDP9mkgujHu7KA1ajg94Y6z",
  "key27": "2BXPdDtSqFYyivXZrmxAoLJ4ATzMWDngh9WAdD1TiEUB13KHwYJ1fBfPk61RuQvteMaBBi6Fug4HaKsvSG4ydtaL",
  "key28": "5RHEJqDiV41JFNYTYpa1VF8esw8Fnzqy7tog1iiyEBkYZfMcGNcNzaqB9jxG5EXexzVSRVasqgcHGxp1cTbuHyk7"
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
