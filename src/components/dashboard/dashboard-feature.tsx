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
    "NZoxmMkRZXyuNSexSGtbjjBD8NYNbwysji842w8g93nfFFNG85LG6p8PPzfycMCmsFD9G2YmrbC3ED78ZW68xc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iWLAWF83S4v9GifMfNndbZ9wu3oD8Mbjp62jcTYmWwSoYipPKpd2mEN59Jg8RGhBR6art27SJm3fNA43L4RJ1f",
  "key1": "3NV7vzXGNDC4EoNND6nzdsNAXaqGTDHAaNQATKdzVjkW7Qvs5JwbvsD2CfC1QbnufvqEfwPaeUVK7A25Kbc9weQY",
  "key2": "3pqZE6DcfANbGuoJ3V6F4LDg6aqgCNxuBLrdx2jGU75CNVEAgg2JbzxY7XZQH6qQrvhA1URJVt8tAArEEAneFus1",
  "key3": "5ZLZyx18kZQg1QPzzWvYHqHtXdwXxuNRSyUhAoQknw4d4YskrryZwyoKNnN3sRvPB9EA68EsXUFstPkwd6bptfcr",
  "key4": "48FqknMT8DPSa4r1dFx9brKAXHqLnWg8w34xLWEic3HAyYHDbbwpD2DnuR4L2dzSDWTqBWTb5vDa3okTAHR3uVwR",
  "key5": "3SU9vgJvihbjtQkVxHMYfrBJjtbpbkn4UyUM4oRvEKmU8q4nZ6dAZs9MM79X1hT2LWSMuABXycafb29fCBQkodbW",
  "key6": "5yZzTCFuibYqqLMKUHVBbzxfiBCB5ZAPWQeUdq6NkkTqbeJZqsELPSVnKviRXqDcwDe5ozxgGiAgdF7pTmzQiE3H",
  "key7": "5DBhLXNAFgHjmg67FYZYmZ3aQQLGZaozPpY1JF6dR1oGemr7RWwdAZ23hZHv77UZGpKxrrCuGvnRtntRhLKH7Qbf",
  "key8": "5na1J5stDCfcZh4ao2MxFm2PnzRwCRyYj4qDLEEv6dfTRpprPqugCHxTmbaHCwy5PJf8hzazWdZ5UoWyqGJEZPz8",
  "key9": "3M3M1uN6zzYhXm3S9xPFucHCae6wsEwPbnJB1YTnMeHvzkeE4MYKgRVqDgUrVoNHKoYKakHuzfVQ2igd1Ju4YZNT",
  "key10": "5jYjT4sbByE5qWtbihRxH26orxw1SymLSsbDfURxKwRMnCLjdEmjD5vCUBUiV1vrKFsdZTpCPo8AZ8MYmAXPMaZX",
  "key11": "5Xncrh6FRqwj9jdYXkSq5qhSRKdE313nw1aRxtHU7kHTYW44ZvAoQw6wFggS2utzomtXGUMrVJv1ZmvfAq36oVZE",
  "key12": "3tnutrpYYkvWT7R9VcnSUTR3BfEDzT5pLVtbfnFwdL73EtZqjPSydJspJDB1KokWsykM36GRFgi33B9RJ9Lsus8e",
  "key13": "65cGqvoWjwgvAkdoYDE2dwiqgrNYVdPq1g9gU6UiUZytx3t5HysfYixyn2ikacg8MVAZtk3PL5nPxLqpUJ29c5hc",
  "key14": "4tqutKtaCE3jbxuKh8rCphF1ZYw5C7PgDXk1SE9EP9SsTYvJBxB3sCAh3uftPgW79CkYPbk9Gpu7Gst1BZRjZAWw",
  "key15": "jTPNCFqcGsWooMYhc8JTmrDr1DyDEBFRrMw11bj9zr2PXPUTHhdRZMkGD5CxfB4ajzMC7HhYZbNmba8X14DkdJ2",
  "key16": "M7ZVrGa1u8KzVUESd6AQV4XMf7yGau2F3VGevNZwagKC4A9CrxuywrTxZSdPFLWH8w2eGDv46PgBXBcT2Q9Wuc7",
  "key17": "349Cqz7tmFsTnZjFzvPFpkyqmnx8HNP6UywuP9DkXxVvuTQgvi32FkGRTu9WRQDxKNRGZtheqa5vBc6Kud1BFLPV",
  "key18": "5h8mqTpyTLNZcNFi9zvYH9k7rmQjWW88sjrL7cMGxc5U27GMbPpFEdEbLCGdG3RaLjj98FSc2CgJUi5bbwf4r4yC",
  "key19": "5a97C5PU3Keh1iseRDq1yTP2FiWRq7QNFnb6gM3p9rW8vrFy99R7Ni13nMej1ADhYRxFfHuxFGwwuf6C9z5DsSpe",
  "key20": "2Zg24w6oFJavSdDNSAjKsfowQn8J6248WiKUFydJEiy7nv5FnomC4FZ6itinPFGHxvMy6EzZS8TSYNiYE9CFcvUy",
  "key21": "4cDGxvMm5BMbrXsZzns3mN5Zy2efwYxxSqeN6mtUBPPQLbyKW42pCg3zMtTfgcfTbBcuRdipYB7wEUCudoaNt7Ra",
  "key22": "51r7Gt57DLhriVQrXyWr3BgD2ZNoBvf9Ynfw9H1oGhtqpjiAQmZ5HwNouQyG1Fuo9rVkVcfspCQATbrWU6rYfAQ",
  "key23": "PfDnBGKt94GkG5UkbuUqjU8w9QM2AgBwahGkhw5S47ECpw3ywE3hYFfdLRDKQFYgD4kZTcYSCb58zK9jJbuxYgm",
  "key24": "SgfWAVec3ntHknsZsVqeqcBDkYnFxiieEjN9oprAB8QxkfPjwPAaHich8sVNouEtwiXZRvTUe7DEgKiY5EZ3otq",
  "key25": "26PBBeFWsStNZHWHuXnQDjqrn5Q6AmD6VGjEkuKQ9ZpG1atts7jZ4JdtrEPh5v4xvifxoV73yi4ixHmivLQc6dL1",
  "key26": "4EqdorcJXstxvfyh65QtTHqrBG2uUaczKWCpDB193pQLbCbfKrB4UkieomwpudYTA5BAg3vTDT6U26tqhvwaDd1Z",
  "key27": "4QLP71UhEuhBnXbJJ8hX2zvfEdiQbPLr8FjZMNwCRWHWsFpk4EfU3ZpEbdzbEaiezVDxWGeF9ANHnC18Fcgbov9Q",
  "key28": "5hP1Ce5SX1ULFRdvV7MrV8FEJgStPJqBiwqcL5LZA43jej4cTwKTGLyhMBW8ck2cRmTijXWNqF6ozu1ZXW5dk4MF",
  "key29": "299gB4CAE2TGCrFuQcRo6TbYz2vwqmnXSte8UShmEtMATasNv4buN2794v9Q2AuUjZLw7ejKHArY5bgoGtS3hxPV",
  "key30": "2k9YMro16D9x6Z1haYQa8ogX2o2hk7zpFNrkjrBTEd4CmEEiDBVGuf8KbtRbset92znvRXrCxJaSsHCqXAzmJRYw",
  "key31": "4NHM1W358zvn2X9DwXEqwet2HEkZ85kgUCFvPTCViRNqL1eLW87Ly1Y2vfPUv6ZG3EeGTNuHStEnLo5mYhybKFrq",
  "key32": "4u9RNr3kKiSbmbdfxvM8VBg3yJuqNv3D7u7AqVzjmsJWqZngTrDJ3fHKDZ385PfzwKvb1dYiRsa3JKPbEjxPgtU2",
  "key33": "pZx9GSfmvqvb1SAXaHEkqezbKaADopyopgF5wDbkwgcqtjyJWXySYtQGovw2FXAVqCisLd67sjB4PH4YYi4EVbG",
  "key34": "3kjb4KqYQUomiwV3NTxGp5YFk9YbdM1g9BfhhbaPo62jrH9fMTaRQnbFyD9UsipvqvZM4NCSFtT9Xtbd2evJ7mTc",
  "key35": "iyxX3R9uMeCc8yfBWABQ4S3d4ePA5wNn2z5zAFkG11HTuJiApA6doivn5T4U1NqzNbmvjABnWPwUsyEoQVyPY81",
  "key36": "5h2J8UT9u8W1Fvuwq6zieRz36KuG8bq556e8uwD6q9mFdSwMLHjy3tJsRxBBTLDWsYbxvzdjfJRtbDEAnHxEyPff",
  "key37": "2MuK8UcAkeLq6FG88CLLSh1WfVSLaMefYodpwd2rzRMhgyfX8PpjqC31WCQecJsp9iE7L9pmkdoEAJv8VCej7nMt",
  "key38": "3L7DoYEYXkT7RYxgZ5Gz15opBSGsWFp15r4cNmmzuh2fQQtfVVjS8BxwzBj5JWm7NoTzJpAhbzVvcfTcK9T7xhn4",
  "key39": "53mhscSou8uwxh7sH2Mm9t9EyiEE9bPKCPHg5YAPKvFCDMF8EnXHYLfLE6HPyH8dFRBHWeZyr5WGh5fbHNvcFJKu",
  "key40": "5XSkKPs5vAjQ8bPvARpUgHUundMQPcFsesq9HJxRDjZQ58Z2pK7DrvH68LLgX41mnt71Vnqepsu4g1V3DNozA49Y",
  "key41": "2NU4pzMe4HEqnQQCkefvoyPVQwjdDJnKATZchQYdWWK5yUoNhGTZYBJYCG3E1qeWvKV6KdEChfjnqzndGYrbPG11",
  "key42": "2mikQTyfYbx8QrdGe9EB59s5cf9Wjn2BrhL4RVgoiLKHB5HJgj9i7XpJQ8SjpiVvwLNLLKWb1V9oph93fG9gEUvR",
  "key43": "212qxsiMHdWZWqUroiKXXG4J8gbGVjTc4mX3jMSkSQmFFUWkSEL1c1y6moVGNaKJZSmfKHMfuBSiT5zYCjK2XVnv",
  "key44": "HBzvCCbyc1JWSndkWA5uMvsibRLme1ubpmHKFChcwP3MHQ18baBQxtYCev128PJnqRCgfUqZQ5ay75MbRpqLT37",
  "key45": "6DL3W1SjLvWAmW1VP3tqrvsUthmdccwwcpvN3XTaViMBkzArDBESmixYCvbtXyriHBCQWAfZ6C1hSBJATMBitLB",
  "key46": "RU6peZMdSD78Yfgc3bYKFEvhfUZByu1oMrSaQrPZCqmM8WYnECmn85qefnjZgnTeYK9cyEsaaBoAN4qWoES1A7v",
  "key47": "pLqrJvTygRgx6nbSnA3Lt85LfYvN2431xbHFfmrW6eQcfddFvGKj6jJTLXEwz1QYPYT5JCtrDRR1B87tKhxkEmj"
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
