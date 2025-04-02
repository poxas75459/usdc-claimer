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
    "24wieCMCxR49Z81XkwxeGoRoFfV5wRMwpxTGvq3kMHETERWLAeXE7vQteXmnaoQGk18gjV9svQEgsto1iPf38ZMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vhRqWHei2UfiJvHp3RR4EtJZQY93p6cEUfZkiC7MkPoh8fAKfY2x8TcLLRttsRBUHEgSGxMCqh1rbBA5VD6JNNM",
  "key1": "vz8TcpTPJ2CCpg8ALbe5u9Ehz8t7pVLFh9DyLVtLqDAQja5hD96qepGH6oLXcrbthc5ibdHypzX8Z4oa8PgiWEN",
  "key2": "5SN7h2Z7rB5uZaxybT3g5BoQzcfkZaG9HhoPWKuzFog4SZKHgAFn5eWrBNTixt9jhAGX6RhZKP9xRDREby719uCc",
  "key3": "5LYkyxKwcaVSRz8hFHbtm1nCYraNTcaKPRR5PP1GMzWAS2cn9px5JrcYwR8dx6B7TX5tyREdRnnPxwSSu2LBeDUE",
  "key4": "4tnLNkbTvUUL6zDrk4VMg1vej6X9kw8aja4gtoMVcSzapXFvCpMb3tCYSVjYJxRDxEZwaAJwuxLC9dei2GuCCXzW",
  "key5": "3YfRRQ1MWW8PBHoewEBo827CKHnWGCYnXTQW1ozo5DQfuGdf8ERFseRsGXvBgCPnaStpbgk5p36vBSGSEcKJmXxH",
  "key6": "47iaoNxqo9nuk4bXwzJ38RWEfLjntu3RDfmXxeTFYRxfJeTh9QzF4WLziRc7mWgcCNz1b9JWt7YtaUMt16XeTo4C",
  "key7": "zPxnbaD1T3kQtiYzs9EYWQVqjzJSJKMaMcFPpJvGHe5v2ecL7cZL7iULBVJErnPbhd32Xzy9aEKFSjAHBTPzawB",
  "key8": "4MH6hDwWyoTmiaptEzC9Ps9zMN9D71GzNTxVQbYAXk6cUTriwg1syH3aS1uxW2mgdx219hEGvZBqZ9j7ZFrEwRjN",
  "key9": "4vUEAtjKyFYXL5YxU2NaxkWm9Kaqh6Yrve4L328ZDdrTJXweZaV6bSNF6E8tNM5rXU5GRCAK8RyPXmFd179vKv3E",
  "key10": "4De2dzL3qSMShyAQ5qD3EbWSsFbAKgHff2nvyJ6vEASzdnTwW4ZeXW5vM53m9i6ME9bCwietWa1XCHV8eQaP25f",
  "key11": "4kvhY7ff9YDM1jL4fkF1nD4AAc21dP66Zfn9RwvDJzTJmf3TQJTVUKAT6gMLbp5gBgoicEgRq975k28edizbWYQb",
  "key12": "RptDEUmvsypZrcPjcee8zzE2Jd7tHmF4i9ragULt9TQjfV65qbrRUD9QLR8MUiqaAYFNfQdsPEjQSMXsZ5W5Cqr",
  "key13": "5S5vKbAxMm1gjwmtSVPpJ8nHRnGdgAWTMXyQPbFRm8ZktxCBXAFsim4CvcxAu8WepWK4nSeaiJPKQRhkvbJ4PNFe",
  "key14": "2foXp1Z8g1DqjWzpmgGqFgmH6JswByuTDwt8N4LMeLq9GSTA34e7Uv3PpoWZvNSTDAb5hQ2LtPnoCsB4aEvqNrH6",
  "key15": "51YNy6CxqrviT4ngvbVij9PNk22TUvpuzy7UeWeg697qi1zGjniv91NTEtfHULEEHD58fK1S6SqJoYPrBkpgaVMq",
  "key16": "EWYZKCLyfNrsozvprfhUtgTtyoXChurJWKnJvKxDg3aQ3PdtA8TtixBqENvJN2XtJCF656GMooW1SaiV6SboSbp",
  "key17": "4DLVx5bcmt22DCPsDNuU31JBXeQvcs7yzUu72fJEAwiVz3ai6QZwhonTKr3XarwsBw7xVMUfxQZHG8ukKFWZpTvg",
  "key18": "3iwbFMhbdFRsGmBEZGHkhS7bkymbmYTbjx2ryALAnSzfUp3isfSAYKKfua56ZXwfoc4EibckDE7qEVbq3cPp3JAH",
  "key19": "4E2p1p2jzgpz4R17ucbuk1s4gzs3zSWsXm6M1qUP7S9CRxSsR2yLwLbxPvsUdysA24YTxEWzGwKq69Pr6CZx8xE8",
  "key20": "2sttdpCKN5PVjh1MK1vPE5fccMCT8L7Z1dtDQTEnBdzEKGqrJZDy7bjfAkZNnQL4jF48QNFRkrXdpm38zYoXW1um",
  "key21": "5nxNfKyrvBXAjM7xbgKHXYGUvRwdavfyrZdm7yWcBsba9B6bsRoDVWz6FijnVfcYvSwz8s6vHVibn5fMNwW4N7ve",
  "key22": "5sLUcCC69gnrmVes478oMKBVKMsBF1LEtoZqzWXUFvDMgqMuphxiFFMo9DZB8dmosCweKYDkzHJwVpwMo2dN5mLt",
  "key23": "5bhi7aAoLRnWUXe1S1mWURix33wU97fP4pJUqQsfvYpa57nb3mzKZr2tJ3R4XMbn1QVEVifVjpYa6n3d3MGwsc72",
  "key24": "3X3DDJFURCZ5YbeNs93A4sf3Wj8DWbdqbZ3E69SsYchkmvU3H2kYkNoU74SJoAsdFZXS7k1EHwstVw3yQsjejJgX",
  "key25": "3N2Ys4oGkyxvL4EBRvWLm2VG32FkXuXcJU9JKAnRh5nhW4ok5rmvK4z2xdkd6AGgs73GKoBY9jjHrA6MPNCaedBa",
  "key26": "43uJ4M4HYton7oDjp2kLEn6twduwXgoVBvbhMSDvhfXY1AYF71YJ9a5Tb2Dqxpskr9AQJc843C8tu1C8fvVwcHAS",
  "key27": "ez4EapbHv1tPEWtGjMKQmuKn1z8WRJst8RSyj3Uq8o3STCiSPzvUtGQFfhKPs1Wuz7E9upQyMD7kpvqCWqYv6r5",
  "key28": "yNd76EYbB5y11Kt2Afu9378fp8BaGxpZ8zZ36DwF3UiAoz5NyZks5UrYQs7zU2kqq3rCZSMurNe9tj8th2dbCy4",
  "key29": "2zDMFbcbeReSRsxRWKP3fF7nZ3dTgDnsdbnj8mL46XNb1KoSUh5LFg3nMYY1FzGLBwxi8cpzuCGzURZEjY4uVxzF",
  "key30": "3aiifPBnsLNCyNcX18H5WbLjfRS52ya89o2T5cRF2FiSEYmL4RapVDMdEbBBnry3XfMk5tCZ9NLRt8U1tvzQZuRW",
  "key31": "2A9VF5qLxX9xa6hgwgV5Vpj5LPj9TLL5TXTUDdLWNYvEVNkM6Uxao1CrtuMKV4x8f3dV8dfkBBKzzWPB5XQmW5Mf",
  "key32": "XGts1CHc3edqFbZhxqL4WqLTckjPn6sa6KQxGFEaEqLy8aepdQNwRNqrBGqRZkzqakBg2KbG1eHJvCu589cCyVB",
  "key33": "2e1NmTuZYZkhW6YYxXVMAHYXc3vQYVhvRtSBHe1Ry8Ukr8JmjAGdCuKTZGEn5wKjGWhTX8ffyYMwd4XY5RBGUTtR",
  "key34": "AYD5ESdQhe6HeDNWHwTk5hfu5oZ1xxApb5BUKsdXDJmkVAZcB7LzsVM3HRs9CVkpY4kSZDcTwgdewrjzBKJL6BS",
  "key35": "2LZE5ZrVu2GNqYg9GMxsUtfcJrobN7jEM3hPsrwkzx6VGu1pKYAY1nmzpLVgWJJMzCfTcraJuyNPqMdm3RaQZjLn",
  "key36": "5fZYZAF4VZscFpg7HsfNrgyUGddrs7azktcJJvmToD4pwdUW8RcVXL3pjvowwhse6iXx5W9RhfCR7nyX5Y72QmEb",
  "key37": "7GSMjhnAJDXi9efYU1Yq8JszgBPcNav1ewMwo1xawuSjNoqGG9cbQ8JkWHAWdqKiMi6EdyEXfWKFGpTX1m3mJbr",
  "key38": "5FKHy8Cu3g2pwa6joA5JtHUd1U5MR78v8xt3WXHVNMNrXFR287LXLFj8pqLhkZRLvJg88G8mHByvLdwYPAiwzGcN",
  "key39": "3nFypm21f2Qw6q8PwdFDGWurtWiCgPyuMBYkvL3eYf3tJm7Q1PrC2GK5Z5FYtBWMdhiPAJNgU4fSEg23Pg1df7BY",
  "key40": "2uTkKczspocc9kkhpqkZHuVSHTeCsztYUjy8Xsm9tqdFknpuYiJopLmbAqKTq5pXCXx4UzytEF8VnkRFHTdKogVY",
  "key41": "45mhnjVBz75NKT5CEHwvs4WhDW8Z31mEBRGTqrEDKKGt2unKyHTNRpnSAFQDSaGh17fEcYn8QsQx4VW7NWYfeJTF",
  "key42": "5bo4uh3u4ibCjPkFREQU7e42Gu4SNmxvrPK6i9uYDKgdcPVHUvdJZw59cjqFt5aMCfjv3EuS1v4nYSBjTjQmy1KG",
  "key43": "2s8n9w283PyWuoACSAaZUHsZeVf6JJTd7sWAtY8D3JojFSDH3HnAJDCcPZM3YVmFio15D42pEFxReBXX3PBDzkQZ",
  "key44": "3ykV1yHd3d2mZP4JzDMrXRiUoGohFwmEdjwc68UUszvZswQ3wCgKWi465yNFzX2kR9RD3LYCKNsL7iFpbGSSmeoV",
  "key45": "5iYtYyQbmAY7BQDqRz7FSBFCmc1yfRgWS92ehJpCPGKY66fXi1LjUFQNwLeBt92CyehUGSwqBq5F3wTm1AeLMWsf"
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
