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
    "WBTkzCWnz6wrebpSVbogYtA5RZStnPo6HzXyY7GyaexcD7egS8DJRaxz4xjoLmYfRfkn2fnzy1Tof6J7HEN6gLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qK8EhBLUb1PYaT72KtEND54GTAbLXycWkbhQg5eHwYYNFjtPkiKBrhCdqPf7gKNau3dF7tYkUJKVpDbRLKvqxyX",
  "key1": "4BxzY4PD1Ek71GLaQZnwcjXUwTqRQbyoEhHUBPeSY8LNBD1BvK74Bmm2dhpPtmGbGkXUzy3eX3u9qMHn6BxrwgHW",
  "key2": "oh6jtYCLiksVRtfNVvKoUXQXWXeLS8YGz2hKUTNCzgDrSvEHYQQoEHTT478nDatY3pSgsHX4GjfyLA7g8Rtb4ru",
  "key3": "4iX1xTkBnAvPhg4JQnkssEgDyAgjnqqH1VitnNgGn5rudJ35ieRQSo7jaJAMQNnd9d89241D6WyugKN3kn9oMVLh",
  "key4": "4NX4C5RZ8botrg5PdKMLjb5yzgnxXenKe4TRhK5uNfRnaqX65moncJrQtvytXbmJmr2P5b8qfjMWLSNMBMcgv2VB",
  "key5": "62NFed5ULDtRADLjWShCHiirgoJn9tBZb2xwL73grE6vG5tFu1dJ6koEL4cYMCyFEYtayDefGGWggWFnr17TsDTc",
  "key6": "4mKrtTX1hRaGGyN2w1iJV6B91XpXQNhRRSvPtDWVUnpVRqvBWXo6uHhT2sKPvf1Egj5KLoVJWNub2ZdVDMpWWDZ7",
  "key7": "NQqC7FMASqnAFRhWGGKd33vUgqR29vCKkKwgaEFCPXrFeUxaX2asMD3axBxbZt3h1bTBfkUTyYXqHS7ZMyAnYaz",
  "key8": "47f5WRgPwGLmRjuZZbGq72oG8ZYH6rXESYnoRAAz3pG1q73KJEZ7MpzR5B2Jyt6f52yXUBa9MgyevEV9SPLCENJC",
  "key9": "5d7n7y2oTex9P951ozghDJzjDPLiyYvKkSERYcif8D2XXX3Eq4Lx7ayJCvU2nHNCw9twS9eczHtcgPC7aYgT7Re2",
  "key10": "3Q7Ggcrh9CKFL3fAxFHnond7AsJQ5SWArQGYuvcEc4uCQwXeHMkCt1DBR2cApRbhT67p3tfJC7wwtyjSNMQ2YY4p",
  "key11": "ZWvksL7kzmbhrFXMdsxk4t5QqXyjVCoBUxFbgno1beBATp9Zrawnd8pPSHaVB5zzD4qe3ZM2yzi3RtZzJ4AWeS9",
  "key12": "B54DGurcMb9eKB5xcbXm99g8iXHXdMZSdBDNUi4SWReBxUSVaCbpk1zY63UXmBpwstSdQxZNQdKC9aMFK4c7amG",
  "key13": "4LbicWHDg15xxYzW27GhceUgsuURcakLBswqioiev7SETSrCLxzag7zWcSM6Ako4cHNc3SmA8vuDp9JifaqNeGdM",
  "key14": "2mgwXZWmfuJKNeFsuTY9TdKADrie8MBXoog1yNDpRcjLJL7xMFyUpAVrayjQwXd1bPUSPmJpSmoj71VcRDgtwtor",
  "key15": "4QjGTFHYSeoKiqW2MJjuu7bSkEXP9HdDKcuLoJHL463QiRyvZNNF6MAQSp6dgYDsSPgUyuLypBC7T2isrtqqbeYV",
  "key16": "26QxsbRSWwoTqxFsvvMcxHUVcVxD9nXwL2hvT9Hi8HDmNghtbWNa9XUsDHmHhwcVZyb6iuXaRwipyDCFEipqgi5K",
  "key17": "3HPaTbswvMB1rtLtQwdUmgfDiEyEgmnWGzQXk6fmG9b8JyKejp4VDucVyzZ7yuJFuypcUsgdvamRwAiQtFHSv3Dv",
  "key18": "3CtiGtWeio2KK1CyAMoooG6V9VnqG9fnSrfDa63PPXoCEmxYMhJNqMDcw5XaGNdxwGaiHdeN9JLvPuwPgf8WCSYG",
  "key19": "3mTcb2e64Zjer43wvArg8rhDwX8cV2iF1AZgoLNqVviMN27iz19AbVnEXaiZcWmRU1y8wmwwYDcBB2MneWYePGpn",
  "key20": "4qAqCnaifkGJDPviTmniZrRZJcKPejQPtSLJhxLbQbtaRvLCTML9381owjnEamE7aG7rF98PUJ3dZqoQ53uTQKQn",
  "key21": "wqr9xiEYs7gf39pntK1XDtH5yw5bcvupAKtTUatbPMSfyKmYxCQm81Np95pRXZ8DojSmJP5kh9rb2HdBvhc3qbe",
  "key22": "5BeZfhipMBCua16okLHE8gUBGyESF3iKSLKjgoqnXDJYeUS2A7QG7cNNa7g3p3dpYgzqwqoyUx1WPU1cnkqhmQfZ",
  "key23": "3jiyoXviSNzypnMPWxDR73UuaPfneGWin5w98dTeaZM23EFAqxcosj9jfqrWhGQPkpfoHDv9TV265NWjPawF6AJn",
  "key24": "3rNeaUwyXUuGeznEftGWgk9r8HQAoccsBphyAbopCYc6kccPQPtVLqKg4HaGskxzZ8VJBpAdmJp3GAnQW5BwVHWE",
  "key25": "3DobEYtnniUMRCrfyuEqU7ZCZVYB1MbDAHP7ziKDvKpBCah6qd4YdoK274axxD293GKE4nuq1bE3P3tc5zy99ESu",
  "key26": "3Uzcw9dbmn15vAjxmjwRLQH9fP1w5MFufiYzTSbQkkQiuaxyS6kBcGXyFak5KAJo217VYcKFx2dbRkRwWfKu6UFJ",
  "key27": "2PK7uXiu6hCeaaWQUbK6Wb1rHsyJ527zr9hexEZx9yarV16Touuo4RDkewNE7zkf1bTY4Wbs2mXMAx9GoDzi742z",
  "key28": "5Vym2NHyJ4sRRzatbUvrzTWQ3HdXWfnLmaxz4sBwvdpmukWUkSzLgSKRoWBBC5GjGqjSpGA2ZRu37Gxk5rFTmTHz",
  "key29": "4VsopTxE2oXqf2YPhiA77Q3rzqiJuQF5smtyzKUKtx6ApwCiM8qHK4jgMipus73F5AJ9GAhcZwq7bxhn71uF7qk9",
  "key30": "38PW4oJ2GygfhTJcmBmMxZvSJi5bWKWRRChgX4A7bNnXJf9WmmTtvFQViAckLmmSZk4s6mMWQhNUzoFrDDira8Ln",
  "key31": "55HBVaCSy1KPfraEye2TX7sHJ72pY1mpid199dmkMuc738TDKPbFefWR3Q9PGiQj8pbAq1Ja3hhoXvTFxQspbrHM",
  "key32": "3RUvJyrD973J2UJD4RREfSpfBsDzrvmZKaD8jhEZu5nKVV4jKQpRXPbsyh9Q7fQfpq6mGBLTabbZSDovQQXst4ax",
  "key33": "mEVuCkWGpgXGsFyGYHauNNUqH1cFau6iaJqtU1bKGQPEij2aGbfujHA8kJJAK6RzYj15HTY3VaNHgbRUg5FLPmK"
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
