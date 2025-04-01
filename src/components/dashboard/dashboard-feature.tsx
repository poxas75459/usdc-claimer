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
    "4J8Nbwg7rYuGUxt8wiDYENo24nBHHXpveeoYTJ7uEcEY45iUBmmbv8eLEuNZdK5LHW1HeDjCz2tcupwnE4ak5udy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dAuNHp8z2RwNEX4Lzpi82NAGuoBXYZeWbTwyGp715L114p4E22nWevBeA2N4uE6qMyv4cupK1ZowptXcpCWYHy8",
  "key1": "xrUvpvSePJrQiEnLciotDmbnwFVfp2BBnCj6Sg8gqjeYmT9crFaVqJ2ZN26JbWKhNPamces6WBP5mQks2ityqyN",
  "key2": "3hgBgAAb9hNreD9sZCb9Uvh3gvhYRXKsHWHFM4YKNaCCs58M3vsqwnikHsDiNvAmC9YQWYrJL39FjFA1ynycf2Zm",
  "key3": "2kP2JthPRviHJv8zLp7bcMK9dCPGXod6Km3C3cRWa7vxVftkeDSLWaXCXhEnQnqFKDnQuFVi13qBNb7SmPFenfzV",
  "key4": "ViefpsnT8WCMwvbCciCmjFib6RFh2X33aPbPqsHZSaLgt5wu8TPayZzyRwhiKEWUEotnswW2NgECXuVeyc9k2NS",
  "key5": "2FCbNQcknViYXPZitxdcFCTTA8ZuJ7veBp4GHsJUTY3mgc1wVEjTgKCJPfkT4ZS9UoEZoz9RoPkhUHVvLJsALjk2",
  "key6": "5SEn9XB4D2Nf56rE7HPVLbKTtUbCjw7Vj7uojQLjausP6cTALn5jkRHK9Bgj4JCJV7LoUi2XH3ZKw18pYvWU4Nia",
  "key7": "4b4yLbaR1sGHPPFsFi1FqNMrkm7NoxsPmjCpHEwdTyBVbCAnG2Ua7hbSJhri1n6aiq2SKhWCD2eF7uwDYgzVW9NG",
  "key8": "5Gy1NuHHKJTL8A389fKo2gkLUZsdpw4RsynCfUTCmmTG9Lh15eD7FmgTy31W4kM5sC1YAfaRfuHrH5EnyUZufj42",
  "key9": "QHyZogqpMZWety3c2uj3tYuCPdKBEMizGxxxCvZRBh7EyiCCLBY7goZhKDTHVXovYuUktxvMqMYabKkJ4xVQ379",
  "key10": "3MjrHyACy6bbzJQenmkEUCQSXTTBViSeoRjeHo8cSCji1q9JgVpfACi4GRF3DVjHZH7ohJPbYn7zg4zCJuyJ8bPD",
  "key11": "3nGMhuCyZFukMHdpLjiyG1QWwbdXGVv2xeTnXhS4a3RMxzuTUJ8s96ycELqXPBkgGBEKtaFgdxevHJ2pxmVvVyzU",
  "key12": "y6j1nsNnqgFupnSY8Btdfe7jwn3VyzV5cDTiBsJmct7HsiQwDmUi36XrMCqozxNFnUSzNm9xRp2WzmPh3bxb3bW",
  "key13": "37dcbafUWa34sketwotBfMZXhpaquPr9Ufo93ZPtZbvSPTRFViA9UvVHamcqJkNrC31CpijY7643BjF3EWYUB7BL",
  "key14": "3HdJh9HV4zf3AM3dsHpTUDYB5KkxeDCWrdSnre7ScD9ExnsHSgJT1H1Kiyz2W7ArmGoKoPAywTuogPdN7PCKx8z1",
  "key15": "5yM3m55EhfUeuys4yMeW2dd8ot8WmQb1777Aq6ynDhfcfBxbqYZmsbHZfrnRfPxp786jv2edTVHu1tkgJR8umg4Y",
  "key16": "4XZCfADBwDBJKv4uwbh5V9KBYETiWDNL99rB1ZDiCnwVD1cvSFKNPYT9RgkQTLwf2NVVZFHhDiWxwy5gBfHQUjuc",
  "key17": "5M4MmKynYNjUgBy9nCwr3wLAYtDnDB5eNr1e1vPxfoLAVvcmNVc2tNV2HxZPCJbEBSE8DkN4i11JB3HM8VfGvZyN",
  "key18": "9JZmKyqQRkGE3adeX8x5zcLPU8CPgXEJCiaU5Lf6H2x9QGftREkYJEgLGnuxXyrAcKwqxUXRofYSPS7gWFn7NFh",
  "key19": "4zaEQHRSycv8nxiSLUg2bTERhiKEfiXD8xHLSrLauuYH8X2r4KyjvuaVaAg43ChLsAGt9x11P2jmTcaZWAUyDt1",
  "key20": "2oNd7ehbdLsHQU4vETXjgsXSbwHpesvJewZZuk9hbEY4dmxqwsoUbXwAeG9pZgr12nA3GjBzZCGGTb4hWZZeuUbB",
  "key21": "MjHej64hDCJGE4WnT5ruFgYKRAnhqJDVM5tDpMrvheSNruZUuxmotBFRoNmaYAtHECj3TS5Lo9cGWezKM6NgtXo",
  "key22": "5pBs2EerbmZdUvWDqzDxrBbzhnCq7bEd9qCvENHJbqznxuLiTt3MU3iNzT7o7Sr5UCYVqS1ivUuic18iERTy5iqk",
  "key23": "52dEG2TXGcpjkr6xysjyVEh2He9SnM1bkvDfKb5Lh8yPJ8pjbFM5URFhrw2xSnqCmvZCvntLMY7QXcNL4GRZyq4C",
  "key24": "uuPtExDmZuh4YaUjdSS76VphJcsKt6f3Npi2PxLA3hHjGLRpCuWhyX4eJ8kUcd7ggREQU9A1raEMpZdJsSoBB2T",
  "key25": "5tTV1gRtkoQKGr1MJBVuKBHXWH7CxCivRsPzDHPorZqxArCJi2mVuJiJ6v3s3cQvXSoPFGtnp3Kt7g8LCU3fYBeQ",
  "key26": "55yaFaAMUCW3ZBwMTskXrEcTHnwyLiSmUH9u2vcd4zj2Li67AnDxk62QWXu9a9iDN7uUiUyAfZqy2NoNw86YWTer",
  "key27": "4KKN4D73X5QtuZro3rEFAJ995YfKyxaVbAFJ5hM3CkuENS1UT71X5u3EYfZNFyU2XTTzwd9vhjhqpRbrDu76fcCK",
  "key28": "4pJ95K9vts5bcQmbTBfYQWSrHjWRwc6YcriAE3wscFBQicvP7KpG5CVEJyTE2TsHsDKa7j6tYxe4tFaXioPSg1Wk",
  "key29": "2rMzr9nPrxJGAwiCz1RY8C2sjEdpXszaCnC188wPBTR2bq3wzTbq6Lodw8vEKWu77iUeDepzjXqTGWCLZXFv4uAb",
  "key30": "5EABJgACjQHWtRMy8dwDPZv5M3SXz4pxM7NzhY2cJEVmmWR7o8PVbHVyYWcmhqVu9AKMs1yJUoVSDvh9nrQzWuSE",
  "key31": "3LV2jcW5S2uvMJ8fSDhyv89BnucS97mVfQkbUnZstvQp9RXtRHPeJyfSFeEfCXjsn1MtD2LoyksXXU3tYKkLEp4D"
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
