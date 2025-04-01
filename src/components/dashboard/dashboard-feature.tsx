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
    "4CTbJ46QZwe6sZVr5z8ZU6wuy3PnWft5raQiVR7umKhbABWEYfdcWKzDyCUgpdWi1zMujWWsijhCtEgbj34ZUDaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QbcE6wNcUDxVSEz121pEzrBX64adhC5LFE2DzzGq3pjwr7dLpws5o4779G7g5wuYznrLCLo866CeecGiBJA4GFN",
  "key1": "5boaMrJEMHvtPXuDouyoHjg8ceqmTBMv5rNRgBH3Eo9M5EmVzYLdsr9gPRPrCYVrCJPr9hggcAGVCAH5yL3BM5CH",
  "key2": "2nkgtFg3kpU6gk2kumyesTvVs6VRPC5D2CvB2v8ZHQFRhhRwy8yHrwxqPTr1oHKXVVAWfnV8fBwEjZHbUirdrVQb",
  "key3": "rVaH7q4hSogzfCoAeZV5syDeCBi5znB9fjWdzHSzouXTaxXqBcZAeCxF8WGhosdFrcwNmGUkKnCicLopry7aFbr",
  "key4": "2hsRT8sApGRN6UdZycpUMZvFwdRinondqWzyjBWHuprh6ZCv6oysgRPkkNb3L9qKiz5PWYdbvtFtvY2bw3RWZzN3",
  "key5": "2nzBx9G91zM7vNQEZRevxgozWNHEZfAqHQBCj1hzUY9CmCcap9pab9Scc3QpzqaiQBNTf2fJr7zhAyZYQb3QXc8E",
  "key6": "5Np27GnB9kQgdyMXGw3RmvUwWBPgnre1kgVQMgFNp9VWDicxrn8WmVeEVs3nYsBpy9Ei3ReiKSEU24KQhiBZPLAM",
  "key7": "4idn6DuEvd3hynZiu2giK3j3DkGadWnGnMJkA5fWu4FxyA9PTQz1ntEXxVbfk6cUsX3BYgN5Ze61Tybxur6yobgW",
  "key8": "2o86Rvqv3SracdvExiepjHDq2Vm98Sc76CPHRRgSZayF2HVjgRcKLpZabGQfZfW6wvhucvGdDVomQJdJmqBubLZ7",
  "key9": "HYoc1NaD1s1QDXhJNi9wwjRDAd9ovNCX2VwqEv2qZuTVV3kggi5G7Wef281X8hNscFgrBjxgLzLBkZBmaemN5mN",
  "key10": "BUtHm8oVwJ7UNLWcdWZHMvAzTsman5azqUTpqGJ79MPiPuUzVVbnfHCRRJhrApQZyUM5qQhCGvFN2RLLRDCxy4m",
  "key11": "3EFYmRcjfjMqVJEx9T9tAqdw697ZhEALmRUe3VJjR7uHyEpY6TehseFzKDQJVfC5SAPMDBCFcR7j9dKj2KmS1iB1",
  "key12": "4ZNBGjFSQ8F6T2ie2mutERYBmfLGHacnySXk6wn8pJk5erUdh2MFjzUa7bk63DpHLH7dvvoneJio84G6hThVUNn4",
  "key13": "3auY1Zz2FGMGZG879zDyqCapwPcnzArxzqLak2iwT4NeM8KNkBU2UcdtK2fPrtN31iiB6mBEMDGSp2ZGhSczn2Sr",
  "key14": "5DqtiMrk841t8SBU4Bei7h739NDXwW17H2VHcvZMJ2VhstDA1AxVKShhu66yJybhmi1RAGcbTBFxodTAGkTikmDP",
  "key15": "58hyE3TSDwhfBWCSwaScMRnJEQKkui2Q1b63dqzgd5sVtnKmBNS7SamFHpN8uV5es6H1TYitm9EtxfyFiY3c6BEW",
  "key16": "3kCBarrMbowztFRzpqpwe7pDjBVQkoVpdWAubTNSTKkzaJKHu7svyei7CoUTJDST6pUn5Ui3vftXX7gSFgugAEtU",
  "key17": "3eU3qFKecXRjn5HqoqUrwF1WcjHAqCu3A8FFZX4DAcXUK897EFzJtPRUzxrQn6jEgQovaP9LeSV7BQojsNPXUoH1",
  "key18": "Yu5xhA8kVkXJZ3Nb1CrjCeMM8SqYykWuJZkM4ccPk79KTz2SJHXyDRdtUwQGwcRL8jTotu6Zokw6evgguurpqPg",
  "key19": "593y8PnqMQpZeCKQzrDj3nWwFmDSS6FwR6kKfaWrYYj7KbjGG4sDsonTvHYy3apB961H5dnY9qtFVr1hz18XrWBk",
  "key20": "3W9HB1gAoECnmyWmM4WhmgwiBiiiYXJksNPiLigivLmN8mmLEzxAgdjCCxdedvXeCAaWJ4EbGsp8gYjRyiiBeENT",
  "key21": "4SwVnmrRULWNUHLFyG3b7wT7WeTHP1xzWLSZNZ7QVYP8SCToJMVRjdjqBqR9RTQynhaoZ8gcjbqRLKk13dCZMek9",
  "key22": "58bE9vp6ahoF5BE1Xf1mpUhCh5JXo3rk6nF1LcNstuamhkAsyPV9k5VneSx5LWo4sSgdjACMyi6LobDgadipBv4g",
  "key23": "2sSUVngPyFTQjA6n31EUiZzHKbf9Fnm4um5vYtbLEiFbnxDKxsW62LsBdbYosPhXW6eqHUGhHMiMeYjxok21KBTd",
  "key24": "4PRNZr8mU9wFNoHfKHjGhA6ZFDVTxdM6N3Dg6x5gcdsj5sogWeAHVkeFgAt4Esk4252G3ZasudNLNXboKW2TbK8x",
  "key25": "4i4V9LqeaRApaHZZXVFU9Ui4Wp2gGT1PTxCBwTjZkf7KWTRZiSU4DEyQDsmKa6QCHbjSPYzNrSAMjKkcqC54osPc",
  "key26": "4EJETGj9KN8BkVRrjtFnNtUyGGkLwdAiMK7j2sUhWFrgiQWoCDVRnp54h9DYwn2Y2rijAtXqhxShq141p4qyLzi9",
  "key27": "4fJmeHzbHKzBzfHwjzJFrvAdu3qmxt3rGJaM1R2soqoqiM1dF5NyjyLEpCXJzQgYm9x9cEt5ijoSbCjxi1sRE4vh",
  "key28": "4pBiaesGztL6qfABzrgtXX6Zm5ZABstnp8B4LLfyxb4JbavVyRm1uBxjhuaELz1jAtVDNoDv3iu8CdAsiDAjNwiN",
  "key29": "2HuhumpAQPAZy7B8zSG6T6sD73j2z3Jzxsi1eXPaGTP1jy5f5y349qF2T12NuVWjxZfV4M7BGNU94DAub5Sbe8ut",
  "key30": "5MGYNGmewi9tuptYTsb4Bpb1n1N4WYUD5thDMofRa7WEgMKY7KG4m6p326kpR8nm19yyz5HZiHq2899u9wURMSzt",
  "key31": "5T5bxijEXkKuJ7maiZBkiXKLNE2H2VRyr8uzQ24UiC2e5NtwqCa6VsTPnLgD8Qkciax8PHwnuBELpactcFL3vNT3",
  "key32": "4L4CzfB5SpknqbnKThGSsmtWKEj4ZcedNMmiKsmU6XCh4SE2p2DFcbFdgQZNhQ3VWyXtrJo7ymHr4rNf9YZHco1D",
  "key33": "2CoSe7Rtb53ZdA1pcqdpDNikHBafKnMd1GzNKMUxaoauzc74iAyPD6sFUxkTH5kDwStPK4u3Ppo454Vd6Gn1UoCo",
  "key34": "5jpggLNpbEJExA2MTAfWhwTS7CjMzfyVJfk22dny2H9iHmsM8Yp3Kq6DfUazxUvCqLvCb3sYhURykrpKeh6kQbY3",
  "key35": "2gWEuLsTdrSkTE6rkKmvWLA9iciXTU8nVYeuwWNMrHBQhiicPBBwJtQdwAGSp6Jj1rAthuMH2nBnzqP2mYVc7fAp",
  "key36": "3zsvHKBXS6CmQ1BYhxhkFmM3THBYwFA6Z1A1XqrjW71zz9tMurfpxzAvb5WMcrsD7tHH5xLpzUbwYMG9NczaRgAE",
  "key37": "3HMSLKFr34qsRmra71vCc2DsyNKjhQWxM8xQBxudtG21UVFKPEerGpESH7kGCkuPYoHfSuYsjUsX1wFwV9Dn6kch"
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
