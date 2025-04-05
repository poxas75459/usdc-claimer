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
    "2RAypVrL5fJbErU9k9gnhue4wu4DtoDSWepiNNv9bt83kkiAUpZyFhzQWHrJMiZ4qEnY3hwqMDiAsgqGKLHY8cnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wL8uhZkmFce9tDuVxQ1et3Aw1fUALEmaeM9HMdxYremhpNKXaeabrvZpUe33AxpvpLSPoMPCM8ShEkDZdbJ9KR9",
  "key1": "Y2J39Zr9wxXxQJo82AtQ2Rpf8eqxtdgBFjL2j7XeUd53uuBWaNkSRfohUp7FYrnNwZneCdq21p7R4D7zTRB1dD9",
  "key2": "wit5pAzb5GT226MS42PCJBhzHDX4SwahWE66etjTiGFwonhf5hQANyy7wb6TCRYNmLuMobmkzpVpZxBb7X6RvaH",
  "key3": "cKgWsgywCt4xNawr6dae8xX4LmNAk3FZ889rTcxfaJpEzD8HGGPJJGq8AsBbmnMce4zoDjCe3nqZ642BtsgRKDw",
  "key4": "4cfuLLQgw8SzWKteXGK4HYA7iY3n2PvngEDP9bf18j5hmyn4kXEweRd1Ewx9SqbaiiUaZ9MJju8Gy2qswfVex1VY",
  "key5": "5DpLUqMBBAAGy3vr7CCAp2tQPudKcHDCvicoSX7AThwrN5ZAmSHWoWDeNW8K391iJccxcDUga46HQvzxJd1GCw1r",
  "key6": "3b6zfe3d3Wn9SEvqWDJugJas5kkH1y4YA8SgsWNNVWFjESTLCNZMpiuMSXhLVjZDS9P5RSi8cFgW7jGDGYmg7axo",
  "key7": "3w6NiHT1WFsQANgcnHTzUWjNrPYSgKLi1521V7iodbPaqYaan8h75VTJvGXN37ucUqYupkGVWLMSno1tVUaxhMs9",
  "key8": "4zfe6ArWsbaGkHUsqjizUohGVrRQu9c1FCwHYcvUcZxgrJCwTTxUSZuc5PNDQ7KBts5jz31BYwcrRFLotXGfDPrH",
  "key9": "5b3XU2W729bg39Jnb1VhrY2cQdQ5jvhkPFpF4GbqrapWuZMiKyfHsgujkxUSzjRGiDZoaBxjoCwriAXopv2xc4sx",
  "key10": "4gYtSw8R63a9xDTo3vEuXGCVPWjcbhvUrPvmi4ZfKcXhNbM6o9S3NGtyzwMMqEJJYbkyQ7jjMrVoepwd5FvRE8fN",
  "key11": "cm4gyUkBSfixGZZ6fcqUbLckJZnvTmkk1kPfgESthg2H31sbGq6XyKwWViKoUWfYY1NH1XaXoX2x9Rvhgwpc6Sm",
  "key12": "5mRQsZYvzaJESWJgibRvCsSgBVfPL46W2XXmmj58B2gJTReJUt34hLvgNRnVmFH7n2Ky1reCqHkANyYmBkzq3Y6L",
  "key13": "5Szwmu83pLeuBRsVo5CMcJLCH8vKYbySxYFn3R2eoVK6Wdgnq5rEdKcKcFX4ZMFTnCV6d7g5cKip5jt1S8AuM4sj",
  "key14": "5rhsmHAVe9YqtqBoBdXCzUMRyfWeNy45TEd3YFDks6DeXqz8ZYtBRjidcrPj6NtqR2X2fNgnUsGGZX86i4kExzQx",
  "key15": "4xdDnNqoGwQCzgxK3VHGAsvcQjUTtyWUEZB8doKnbTcJaCBCgbc8j2tCBnySS8vcs19VAn8akiaZ9KVxeMbsudiP",
  "key16": "3xo3or9Sf75d6FajhaahcwXiSFqe1StPvRPjk5WiAA5ner2oxYe8wg3bw4hB6jhvoQZDY6Xb2RK8rgSZEK21GqAS",
  "key17": "5YtYyX5kZf6ZJBd6LSjpwFktTnSfWVyBGx8uFJniXtewD8CTRoTixLAvJYGDGmudM2Y57pkhQyHRjgV1dJLttMtT",
  "key18": "58VPYaMzCr91GLa1uAyVquNAJZ6NJomUBfXMexcS6WnZfqYirHxwD7wnminC1mjrmi5YbuDBdr5FjjbqVCHkvAQP",
  "key19": "2wNfGXT51xXaS56fYAMmpfP5Fwy5atgtkwzSEgRreDMtBhzAmk4MfHB9dSFsM6G97HzCnhc4aPnhb6vi4KEiV7Qv",
  "key20": "6sjw4LVcgLPSvLhPZH6VsVBhcBgNm46RVscKFR8zGFVpPCFF5kndzToo9TgSrXnvpZ8G6mc9UHvw6qgkvo5U4mx",
  "key21": "65tc4jh4iTaDpY13L8KWskf7xt1TYp64FyMaqBd9A6g7MeU8k26kpbWTpsQCv6ogLWiYkkgXLyyEWxGaybv3BHYH",
  "key22": "VktW8Rv2gKVYW8TrVuPvDPwURish96UHewDf3ByRHha8LVAopNGt9cTgK4BfGspsjCC8Usfcxt6TGPPNoi1VMEf",
  "key23": "3BZ4QCMWgJ5W96m6VMZUXobMr8LMe7KybP5z9Za9b9etEhEFPoioWFy5dipNmo2DeS2ruCfwDQHb3Qjxt8ugX5zd",
  "key24": "26HqTyTiAjYoZDcgd4pbAKug46kDYbvzLXWdc9mPpeN6W1Vt4mgLnD39DScF2h4oFgCKRAXrjstoUZ9JhJ12CSCd",
  "key25": "2Eue9s2Bwo54JyhdfoMQpm3ZFHJXhW9Ayu1fK8vWjrCdipaZQvMsK8PrQZe7QWfESwMQQqMNMGWmfbV7DiiNkr31",
  "key26": "44zi6MDkd1zXK7mhbX2wunNwggKrtMTpv4iz5ee4QG1KKttxvXzpEu2BwVPg2qAc5uvUaApiLGaitCd7u3S93YRW",
  "key27": "5VbWxrUAFP3NMJuKp2yqmnxwAfFt5oermF4yJubsRAs2BJu1XJ9AE5BCKeoDFTWtMvE67Es5oRjnsH4VZankiELh",
  "key28": "4nQpPs4NoUy1YqjL42jdMJgQDzcbbAHtQxyKstkEvwjtJiuhB9inzdcbv8Nhfoa3jnrS7BXqQcvryY7KGMPTojiH",
  "key29": "2JJ8GKAMmpnYk5d5BUspYW3FW8zYQo8DCEDVb6WqniLfNXyXc4tWMcCMLRdJsCExxRyr3kBQK8Y1Re8TuuVH5RHf",
  "key30": "WuyKScdPLGWXN2PMyXC4NSZJRfefzwZxv5vfWcJka8osaK6yRCAfDcCv1aJB7xxkXGP7Kw9HgeyxvepbQSYYRM8",
  "key31": "4yhZjWuaqWWBwDGHWi1ChL56f7yXjrP55V1hi4LdY8oFTh69TcL47HpDJtKNAdzpzxcjuLR1YZA1d5qs6MwXwSHr",
  "key32": "2dd8w5MF7NtsAMecgpixefFVv4ecUy6UK1RME8apoaKNY1rQ3U9Qn1oXXwkVa5fA2dKnN1Q173c5o2U7CjhP258r",
  "key33": "2TypxEFndeo83HSyBBphdLWPYvLesXW6otbdckd6WuJZPUsTChjwLDFLHQg2qQDEUWScEPtBKsuAPRdpivmaAmTp",
  "key34": "Y2M8tbWEu7KGxJyaphyB9JzUDjz53XLc2vkjVLRZYPBfPS2paN2EDus5CHwGyNoVyHbW35xqLYdWUADT1HXNwgj",
  "key35": "5Yd2Epgg2qXcpCK9bN7W97UrYKyzfmjJs6jvnHUh3prJxWrE1422xNQscYXAoxv6rRpbgsYjsT6A7WKAsP4zRcE7",
  "key36": "3bqZPrR7pv3G4q4RfV6vJLqXGJPxXvF5WjvpYDEC2FGZis7h8FcMaZciiXyx7a2814QrWSkhvFj7KaXgq7Zfj9vM",
  "key37": "3WnmYCyWpWoTpc4Vq6fcaitKDfUYssMtfzcMRC8NsKQUkxCNezaiggDtZVmVwCtfaD27Ge4tNExtD8tQpd5q1tsB",
  "key38": "59g4nZGQbLdjN9HB5skz3mHP7bUWQyHJebNJpkRh1RDhs96vtKhaCnYYrkam32cmFp1W2QVaibLwmsbyXHbfBYBj",
  "key39": "KwzJbTTQwJbwTfnhfWCJeBm3WpbKnUCEozi7ZAQ9vdosuuTEjfUdeSXU8dkuvFAtTWCaeDLTgFvsc587tsbu3mU",
  "key40": "3B2ZSpuQ2g9uPYnmqSfuzuLkyWcLZn9AewLXFMgJzB96tiUR8xvLHLHfME6hGRtChXDPoN194V842CeRNxtzBQ9X",
  "key41": "5srymx48KuQJdQiAiCdb4Xaj9qee44NWxBAV1m93Dm7SNuo5WAsQfgXFNFXivwMzZDURCy23XrhV2yuXc6BWL9Aw",
  "key42": "4sVpuwQVjRD84GH1StiJHTRPRCbSw95cQQiNvLLwYEJhyNtCKtwUUaRtBfcrYR7N3fS3YrUCjx8cC1JxK7t7SGPA",
  "key43": "4iQyeZ5vExVGELmp5YnDjWhpXZ9YGec1RUC32PdYYpdh5PRT7rbwzC9esE8dfuk3umfx8etytHeD2cjbZHeE9vV",
  "key44": "2PNYj8QoZaJNp98j8cHVAKAFCZPbJxcpYSJ27bHd6QFuDAFTtvxooyG1w1yWthBMZHQJX5wWbjn21K15AKxAF3P4",
  "key45": "4Mro2Gpqj77v6wrFLrgKG55Cm3JZLwAEWJfwVtsETsRchS9wrwZfLvbeAiyKytcyjfR5gYmywfh3LgPsgEcD1cKc",
  "key46": "YJ65U17Fk44JSmhnMifeUC5gkVh7rhrvRQoBCtZaVRfurfDN6EnG2FzQzA8syukVZLokmVJC1yNnobDQbHDpqCo",
  "key47": "3VUTYwZXSUkQH3SyznjVtE4XA1cQWrGGkwqZb4ytDp49RSSeLshrwgzXafC8QEThB5q4AVAufDcGvecwwu9WC7YG"
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
