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
    "4hq7uQmFaxA6qMCVdTyyn2xthpby31KEKwLivSjT2Y8vm3CQfeLAt6Ao1v6AVwV34rQc1r4JaCBciDxbdB4QqoRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Ldjmr6NSGkZJ4aoEahd47CdoS47kbXZyK9ut5ZNjs49iuxifUdiLvMq3uT9BXESkrFif6HmNE9h1EQiWfhzcTq",
  "key1": "5CZtjofFd7LJ7ygUy1kBhkLzrcoyrtgXiXctBmDPe6GBJ2cu1BFjUhsh3wEu8Nn2ggquDCYxtn16uTTUJEDuk9GJ",
  "key2": "3fpLPdvj1A88Cbo3ZAvFjcaJkz5GbEa1ErZiUYyj9WXZgYuQYC7dwhikjeELQveupAzbipp97jWkCmToRuNn3XWk",
  "key3": "xWYMWdnjSie5ugKfoajNCNQoDQxmkZPKpCBjG9X4L9o4HoMy7zvA1DG5uqZ81jbyAGxbW45XF4zCU2xJna8aRwH",
  "key4": "rjbcu53K3W5YVGzYKyTpiq3ApfgcgN41bpdGS6KEdgpwGt3zT2GXYBti3aRZKB497fjiUp2aTKF7hXJRGZAhnvu",
  "key5": "3vzmswjkDYsPhPFej89gubLKcmy5GbECMAALTfd78rME4GdtxSq7ms3gDKMo77vrkmX5bzcV3bFEyTPMUcTrS8Pc",
  "key6": "325r9yecvxSZUBA4ruSVnwk7PtodnF2vCS16RkuvpKoP3Ju8xea9HHa7UyBd87gaNhFeFU4HRRMeh1tyWCSm2vBY",
  "key7": "BVFfsDNMocFrZibHhx3jZoCH4QJK1qHK9KpS4UV9o5YwWG5XMaaGrG9MFtureMvoUJ4XeYvBT79djxu8WppgSTV",
  "key8": "9owpY3MW9uMhmvKjDZcmbE2vt7Z18UVLLN9VLyj4hafLKkjdxKeogsFYKpZyCSFRzerc3FLPpCvuDUkkDgysALf",
  "key9": "46dxqFPvJU24n6iidaEoHP64xMrLj1Rg2m4vGSgDieLMtjsKPt68J9ACE5LvKFjZi2ZgYzifKLSR4JEZFCYiL6yx",
  "key10": "62W77raZfvWJMrK9JFT8fW6oKtFBMpQ9j1Gqd5pVmWo4efJTQuDD9gMRryBxQ7WXorvUmtGH7qGjeD8LH83bYtx3",
  "key11": "2b55Cdp6uxJADXGCMxmQk6cFy1D8jY6jHieVU4McSeSMtbmrsTAcPvaXNB9Y5xx671dMdw7eJMqpw2TDK8feZvbB",
  "key12": "QSctyfGHkWLkt4yRDoT3zC9H7RCEPrgcBmnnBtrnnXRjBABPB99U8t1nrWYpwhvxZGJBYfAcD42PVCMWyNdg9ax",
  "key13": "66CZmbQ6e2UFshwvrroxm9qTd4zy6kthvb26f6Hp8pxbsP9Cb5kvRjbgiPH9uM1KnegJQ8HPUDz8wi55BVL8Q8f2",
  "key14": "26Etm4eY4UXi5kERcHEWS9H8QdR4dfiez1naTFAQ93w7rqzdHy9Vs3XQZtvpU5ribG4fUkv3vbZGfmoJNMasn5Ek",
  "key15": "2i9nijnYjCXZqEjK1AJwiJYRckkizxYXiCAZ8cs64WK1WE7M75L7nLDowPvQN4QfYuQaFPYexibTtFbK4WBNkm43",
  "key16": "61da6JpVkdQb95ChDrn88WXUzh6Gp63C94ytNPFuWHr1p4h9mMbgbos36tqz5hUNVHdfU7gGp8nAsPUgJ2UeMaWa",
  "key17": "5efT3hGSkafWWaq3SaZTDTWuz3EUYR9sdzZjtJyEfF6ZkR9prjd761ed7Bw7gwxeH7o8XzqXKYA6SxVv93yerUKs",
  "key18": "5qUyBCZcrs7CazyXhab9FN64vHHpp4jPTsPuuPDELGhdir7fnxPP12sBJDxJWGHyheabjsq4NjeB6ChR4vaWx8d",
  "key19": "f6Yt1x3q3cCAnzD6hqEVR7L7QvPu1hoHghrdfuU2zCX1w9WRtzRL7Hfo8bkX4TPHYJxYpD7GjswV2YJCgf4ytPL",
  "key20": "3nvHBnS6DX6c7LH5uYpXpk1bxvmcg1sKo68BhbzwtCtqdwZU5Lk4Cea8PMwXDeSg2on6Xcbz9NQ7EU72v38UK7Cj",
  "key21": "4PRdo4ZS8bb6eWa2ZDz6iHoMSbsggS6CZ35D3axhj4W6D5CLHvyoywuUiHbBauw7igg5f18dacmQS1ssr5cNmuK",
  "key22": "32tqa8fDNXAfuWhwZHaZSG5LuTYq1pD525UcoKmNLZqRoV71soAHMtnAxTWq1d7r9iYgKHs1R6uwWq5S753nuXXL",
  "key23": "2gsxFTAqMbFACPwUXmxupYLu9EcG2YocLt3QWWQyETsqQy6dQ6o6zK49wwGHx8ksaTNAjT41H2VQFobq6GECgFBo",
  "key24": "2PLAi4BpgDcxdHiKhkW7KPkBmGKGLAW6GR1MuA2L1VWfwYip9KZ6cDYyW24Gj32hNpePiBJfWMRPqRWa82tMfXCV",
  "key25": "gapUk6Q7eDYUMPytmaQKn9LXcaZdWxhHMVMQAmxqXXaGFL9Ce45yxbPSreQ8wPmnWLwfuWoS12XpYCQp15RPRp4",
  "key26": "gsNoLp22XRykrpvxU22WZJPrjtPYV6Ny5wkid5Nvhmr4i1JcvGeMdY4Q6M755iJADwRf4SJkHSTtFfZUT31JRSF"
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
