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
    "5siAwtqjb9TAFAgueNYgoaVNVpYn9dJcNx9gsAWyAxkk5Lr1pAzuVL885wi6k9J8PB9NvKJ5eoDgCzkraRsn1jRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jAumHS9DSjtbQND1puhWcJw8nx3MPcSAfoH17BKNmP5Wdv4GF66fTcvZKJER5PfY8CFLYMKAGqLWK7FyzHWyvdq",
  "key1": "2j79uhyYaSJd9S5CVfk8uSxEbqWN4pLKAM9dTKYHH4Gx4JZuEP2Nbh3Avgzy3CwxEw8TKNTnbFfvcb43z44abBLt",
  "key2": "eLhCYz2BgArJpFcGxLQCu9Q6rqE4TwtRvd52VTQ3L2XmJty9NEXZkShDmua4cRZsf3XnypxBZskg9CPAubidCU4",
  "key3": "3YiYmnuEj5LZ6SRv94c3ba8SnaNt9dXNTFeUxriYXDL1No788JpasmCozG9n8Zk8zERrBKn9ZxHxSNBXkq2EnZpA",
  "key4": "56CGnAmmpR38DADaYJkB9fCsgzyXrHr2Yy2mBESxyJxwx4FkQsZdgHk8mzCA79B23LeuFqne7WXsbRJ1rUKJt4rN",
  "key5": "4hBMK82FxD9EWtKSmoPJz9jsUeERsAtEzUnC2sfjvWBgmM6gJGmHSgFffQwmhZwGF3XNHFV25BwZEEHXS5kRk2zG",
  "key6": "2sZU73Xo5U3EGWfK9htvzi1mMRhVeDTspjj9bEYttWqbGsMcb82pVFL9C4evTZNJHj9LADjVKQHqKxcWFNewGDBz",
  "key7": "4oztHAEw5vRR9cey9GG3y4cniANNHCJASpV2BGGrySqVpx7GJouBHsBVVAHahMpX6Tezwc2nFRLe9n3QD16rDfyo",
  "key8": "3tRyqekb2j23N4D2966g6nriYRtEcZSTEa35GxGNKYY7Daz76sPaPKTDRtytUPKzuy9yyUwshJohUZWbC1whiMm7",
  "key9": "4s7Lw815PtXfQQJXemE4yJVrTS895gYo4KdpEN9N1MK7jN2HXcvtrf2XCBEWgj11EviozQBfrMcos2Tx92vmHprC",
  "key10": "5kyPoAVQofcMuGtC5JtLxEoAwR9A86y2vj8GuggVaKBMEqAGG1yHSFySEySKzBVdFZv42Xir5aybgeQsnyWZsGbq",
  "key11": "5XjvxD6oSbvMbLTxmWuY9c158dJNegh5C1D1vbiD6yPddMFwNS82uwcPVCiTdWPxTgB8SW1HHGhmBFPZyQf3AaRh",
  "key12": "5bahibEKww61yRhNSMqGjQtHtExJkf7UGmW9gedqcr192YNKoqWkhTTU8goRaQaqBm6QUatKHwgmcD3vHY66cWE1",
  "key13": "3L3fusKJq3tdXxLdUFGVwY9kdZfCDVg82ZWLwHvQU6oXqxPAJjbHgTDBgQcwpMxEoCZmafspsfj4PnzRnbYpWst1",
  "key14": "2UbneVNRiNqq2KiAXUV6KWusKsw8Fer7itB23Bbcro5SWKYpGz1sJEeaN5V5v5prFZ8Fb47Zxb4RxWAS1yoPnQND",
  "key15": "3ktoT5Ma3M71FiMSMdrTk6snoKvHxjH8GQcADzADH6K56Enr1mMW9MRH6UcY1zjU88aqDtbcgAbdRpXXtpTM8SH7",
  "key16": "3gosR7L47aNhkqQzbvivej5e6fAzfAeGsRLfpSvZbzDrA78GmtU5fpvDFCBptPWgtSmgM76CK1Z29vVHM5ePYXuM",
  "key17": "4MT9yxK14N7aRdtcCGytwtTJYhug5htHj4dQJHy6BG75wozyjmMndpu5SWzKH5wthKWRrvYH4Z79LpJKrVtNtZGt",
  "key18": "36yC3iHrGdijbNAzNuKZgFKWyde3VzMPLJ9FYtqs4XoGfjpdFCMktKJfo54DefooQkPbCyPuE6Ta3ob1BwM6mzs3",
  "key19": "4RmLND88mBvtofpz19YHSAymuw7pArf22biRGsQX5GiT4sh4t47igDdqL1pinwsYZSrGRfNNvYSNjtNJYgkDLFtN",
  "key20": "58Fix4nQmENw4EerubwxiFbnoakQSx8yaG1XvWvhA6ZuVUW1LXH6XkzqMBN1N82eYcfcWgd3fFqrwWMo5jyPCMig",
  "key21": "DhGpsCZGxWeC6VX2mocEDkCyokAfQPEC8FTxXLf2ZYF4b8LEogDGveWEawCrLGyJa6ttry2Gs3HeqmvTj4UYysv",
  "key22": "2GJpQzzLXLDuNDWD1xq3D3NjafWbDqbZzFLjusNBcmG9gCBXDhGKzq6fFyeuxZxZdTxo4uQaAsqkrTEgprKKq7h9",
  "key23": "QB6AbiWqmMPQ99C3YJUP6iHVtKrJXYayJbDiRG3KvfWqLwAUCV2E1mVSGcusfGSvwRmq4R7Vu4GRPvMSUVkp9zC",
  "key24": "sbRhVeyELNGkwYR4DdqYqvS4c6xREZkuy7UZr6hx4b7o2yjXC6Zq8qVwTJPHiVQQixSzd79x2QeNnjkP9MGawD7",
  "key25": "2pVMi8U2HoLrTLF1EM8c1bc7SY5mRnEAg4xjwK5q3PCC94krbksP3zdYXJLDFzVb8qckxf2GsSJE2pzf4VVHPWsM",
  "key26": "25baceKgEcCsEyowCpVpejyNR1JJD1nxRRguQotJzqpACZG3ejrLEWu3hfTBX2tXc69yWbapAUYhbHFkXrhTHvqh",
  "key27": "cYy6b8Q83Zh6EU7mhuAb6NSH1q6dMhVrFYtnA9VqAHzkW5vz6SW1btxxNmHSUn3sNenUr6hgC4B2p2WjTXAPEHi"
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
