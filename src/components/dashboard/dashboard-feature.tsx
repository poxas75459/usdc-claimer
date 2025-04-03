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
    "KXxvzzUB8ZUpSEjC2nKJLjYMd5VY4k8uk1Bs3t1TLRtnTg5vkoQXUjDVMEgG3CrgEgmx6ae8iHegwVpG7Z3PP1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbFw5Av8LHsF35j2y94GjJxJmjYVbp2iMVQ5bDsPzLXuJW2Rp8ChtFuv3ecXjnzNUSghTaXdB9L9zG3cFpQbcoi",
  "key1": "xoMYPLXpD5Sc7Vc7rgMGa6qbwxbRSiGyDURkURMN96gCVaKtdrcsfRHVRiz4qtxASTCXxK514opAt4EgYYYAYek",
  "key2": "33MzP9PXmLdfQ6eBMvaZJ8TZ1epn5riN3TxAEMKRkUpGcaJYEg6JcuaktANpgviNkP7wTkysmkGjE1ghsUSVVK6n",
  "key3": "5U2sUd2qBm3xk71m7NARcNTukJ7B2CYh2x8WyBXVj5As6CZ368wNWV1bAHBZaMLYssLnv7WuKUa1vbKLkHwC2i7u",
  "key4": "o6XodoM8tA5FK4Esf2N5yW54iFXiFUJNbkt3tuPsUL3iG6CcryC3pCejuNxYJrxBtXdbg26XecQrVVAbYhUdaEL",
  "key5": "2Pkr9qydoyNZnrx2CRcNdKqzFkk9DduCFgM142k1a1D9tMm45YBMhn5v8GkmjgA8YG2ofrpcm9u3SK3tnKhyYPfN",
  "key6": "2UBysxS9G5TrJUa4G56upFyxByFyzRAWkfnGARvnre5cSRPbYRMrBqju9WQm1KsebieD5c3XMAoKz21tsPBv5CAN",
  "key7": "2WcrLjGA254gp8U84dQttNEMJaxfqvsug1KQ5srqnrDCkfYYEPNbSWwWEkN2LiG35KpWmWLiLRCCy8Ldzw1dZViN",
  "key8": "4H7cMLRqsy9uSd5qZ2oV82d627EJnw9zaBum6MzWij4dYGw7B7NcaXNosdnxTBNLKoboQunnSNbKH1N1axhsu5qq",
  "key9": "56RYfP4PMtWW4SKg2nez4vD9zTawCjfcqhViZ1ibBTGrwutZq3kuXup6bzZuEVDvazQLBJpx5zuXBQhjQUAMXVJS",
  "key10": "2uXqknh9RNNV1BULfGsxRh2uz2BKQyjbf4FF1xUyvNTEeVxfLAUh43TSpx7Jy4pCNwjbCCD9ym4fvy99Hnmy4wrr",
  "key11": "9yXGjpu5Ff49jcdUzDXKPNxLzYHQN6DY67Y9dmKwV2ZX97PNE9NUrP7gvpPbekLeUxjGG6J3Grf6APqRkcQe9iR",
  "key12": "3k169d82byqEQ9u2stNDHXfUsAvMkA1QZZCV3hEjqSmAMSRZMVXGE5ag1NrLuC9RLXwQbNEE6smKfWZnHBSy6x34",
  "key13": "4mXUUM7Krxz6KxhLuem6KotNKqg6nMvhr8XA98gTzCKJ6NPiidC21aXpRFwzEhunpZFki57fZ6oW1RHGGQDUoapg",
  "key14": "ELKGHLu7D2FDFx5QYWKXTc4s7MpUr9pZkGFDbDdvGtHoNm3pBvYd54WvYa8yKBSwm7hN9WkWpKntfpgzPhtmVbE",
  "key15": "2yER1K6x5LpeJ2N6LDGNVkXB1vupjan3QQaz2veb5Z9uR1nHcycZg8b8133hsW6itfLgjTV6GeNv4YXUmrmYRJxg",
  "key16": "yxT4SXKUwEYGEXVwKGmdMQnjB7tdTRH7vuwWZ4hGC2X8aPfxKgKAbmQTEgjZVq4tuTKSz8ZbZzqs8e5acmfh24D",
  "key17": "4YhGxJAZUvYWwSyo4MBH7hLxiDxgBnCdsHbkVbpE2au6B9Yp2P72HBM4LCA1aksTzfGa8Xaw6MxqJVC2emHtW1W4",
  "key18": "41Ea11ejpdcHgk1tcxQxyCnf5TpdszzZfoe3LztZxCt9i7JS7zhn7zDNJtzmJtiTQV6oDLM6oCWrkKC9JfdQfgw2",
  "key19": "2WB2xb92vRUTJkQTLT78AbBbbeLJd3hR2g6Hs3qhHnkpq7Frgq2ReaGibA8c92X4UgKqhRzikwJH6r1QUidC4bSe",
  "key20": "2wzsJmsZXD72F2ZYRCij7EcGWaK8QEZ727Sb8rrUUQPDGQHya4o7m53AeRkTWCe8Gk3Yeq9CWTccbgUSSRPLWe3c",
  "key21": "637DoQieFJrq6kH4WEiXVnk6UTDkZcaCTsWidL22bbU3ADUZUMwtYYAmLDaxJqqbDv9qdf2NnqtkoRjbLUxQkXYT",
  "key22": "4PSED1dnUW8RZ5WeRyatJ5ZYBcLM1WEZ96kxt3hNZsXawB9z8rA5xPZEXF7cJmYTnyMmxF589jiVVqkgsQVTUHpY",
  "key23": "5nT3XV4BHRHk6gw53jL5j8Hme8ywwv5RwE6xak8M4XtF9sNMnW2wdGfaG9YUUGt1tkg4oTvozxGzPGNFhAr8Zq1A",
  "key24": "GPtLq4aLRsRTD2HbuooqUFPJ4mqq6CXpGhZoKaY33pjzpexVUE1wmXEc45kzmu7mEcT9frCvKL8isE1Z5u5NEv4",
  "key25": "5dPXPughWKnW9T7At5EjdDwPGh7DeLiWty3CT8StZ7QsMt2oPkoDseeTVKpMnYBDXeaMuvn3uaVM2mSK8ZunZQrv",
  "key26": "4sm6aaU8XBbyxjerPf2m6fqMf1vfHcEL2197S5s57dfQvV9XWx35g2R8d6unyPPTjo9HJfhB3inwPmjou2c1iLYk",
  "key27": "559zfSTmYz4RkeXhSfNf8q9stsip5H9M9XRse4H8qcVTM9eBN8vQQ2gWk18RML5fRKbc6QmVPdx97i9TYhw5VEF8",
  "key28": "4xdmRzbw52nRnEFttVxscMjZ39gGhRh8B8ZpuHoV5i6mxoEfCkkPxiCuFxyANK461kzFotRnAENZbnjziLVRgFrJ",
  "key29": "2dxS4NU6auBbHm74U7pKpmcHbLs3gbM8Rs25r1nEfEFoMSygP39Hfsv9wkQNvRvcWKsZG4iePhmyRvy1H2oMqxGM",
  "key30": "2Bb31B3qiNnhsnTTLe4v92HgSnHuF795xG7RKpz7nnbdTMBaVmp3pUBas3jgx4iZx8oKHKG3JbJU7nKKyaJ9v8Yd",
  "key31": "HUm8xdKE5xz79TcWEwionmeEcVutAkdVZpFRRaKoSm8osXoeFx2kA2Uy39fEJqRGCPV2wyVGyzAWcL8kevp9Fxz",
  "key32": "4DViFLhxEouDmdsr5V2qPBgBkSZH1tKe7ifx3UcNmqKyk5PGpodBq3FmVeFzYhghjYopnPStzyUukfjdxnF2RexU",
  "key33": "3PrUfgH8R2oUXMCMzkomq4o4iCxP9dwpsz6GoqVSRx1i8DCNakCaiczn5VXamBvZ79xoQgoAJPT7qJzKTY2yJQxa",
  "key34": "NF99i4nWmptnuow5jHYozQE6CfCadnan54jtTi9peMbJizwcW9RjBfn8JG9n4DquyFy8kRn7PqyPGvBkHqTfwB3",
  "key35": "3tpU4a6RUSwXPEcaTSZYb7fdw9XaRfCYtp97EtbMQqrdpZYpjYYCJodjDXTWJwzXRJxvcco6AuYLjzWJ3VjkgVnF",
  "key36": "5DMWjGoWUESWFoE7gJzvXhZgbYBBXXVJG9Nq4iX8sq18bKYmBXTvgEn7zLb6KDQU4VPj83vKCaKxEzRavnECwhbP",
  "key37": "5FonbYMe2ZTdPkhPGVVy5rfVDoAcE6Nc9VcSeGb3PxgvwzyWwba3a5LCPs8SdHUrNA473riU7uBsFw2YVKEXvy54",
  "key38": "5roqVk1K9ttjve8b9yrknSf7ohz1LEjdsQSHNh9BqQRCGsmdS4D1maDZjxftH9EqMPZXNN8CWPQ4yzHuZfiNQiWs",
  "key39": "kDvHhquzjTBKiUZ4dERC3BNhfKFJziUTVYdKPF3FhU3ouqkaqJ5njNvWhAP8eghBpYbjEgMAAoYbT5B7hVzDYHB",
  "key40": "2xpWzRjZvhEazrkEupYLJh8oQcaSPN2dw7hbfNz496xoHfepZEXngrSA4jnvq14k5J5VNWzRmDmJPaAsb2mPPFrb",
  "key41": "23sxMw7mwpfXXRHQpn1wdJu58p9mTUHEMrsty6gyW8wHPutJgmPGRUSjJe3BnjmH79L7AH3u5kuabkG9MCyBJayG",
  "key42": "W2o2vGzJCUKaHwGM5ZHGQaxDSchW9kwy5sKN8teiJSvkVqMt5CQ2TJCKvf3CurcZ7MSk4hgfsxumF9JcvKz7yxU"
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
