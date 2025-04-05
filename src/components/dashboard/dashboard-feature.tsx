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
    "2cYNjjs988FtZkVRyYccmZkwDQPA1PfQsrR15FYWy7e2FS13NpaM9BFUpWKJxVmDqLdeoPP6YFJpcz1u1LmKLKP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ahn49KKgxyndymUVCe9uLxN1cYTq8eXPGcEohFEEHnN9JW3QcTt3b93jEfejJuRK6iubGCgWBnerzqEUjzStiY",
  "key1": "2bvWfvTJZXMQ8N6VSi7af3aY5efeon3u2nYBotkKzrLwdKZhbhw3yNCYWMA58daVqtSha4HGsevCGMihBu6NWMbS",
  "key2": "5ooy24phdxy7PmE2WZ8NAsAQfjmdopoTETac1YxLb8vu3tAcgfvqawDKrFqKKJomR2uFgtdUFxfNQoT5HBfS6Qc9",
  "key3": "59gBT63Kw9fk8b5jvg3NpKTqA6sSd3NtdkBkonEP556CcFS28t3cyrzEDUWS9v81wcqnfFwiRPXq9Ge2Zjaao3vA",
  "key4": "Jd9nuZZ8bc4uPw6S18EXHC3Zb2Rhf49eVjFadojNthwnckUaZjQVnNNf6bUWjiwt3W94wka45biMuCXTkbjY5hE",
  "key5": "4CxdYh59NbXgKi4wLRLZ74Pg7G7sq9b3QTsjXTs7Hyxn7sigChH3zMVabqDXuywqmCUEka2kMsFp9rGsxanZEuVZ",
  "key6": "4f7293VVis9DZWYpMgJthC1Ew87HS3pS19S2PdWM22Ga8KsuPBjLHubykbcBeR9SZagR7XveG7nynd2CGjtyXDQV",
  "key7": "4UutfXjSWnH8ScQSr3CmC4UGiJjniv8GFNKbC1n65vKxgkWVVUWb9Qa7woXY6QDvHikc4ihvFufMJcrSaZmogshA",
  "key8": "R3rrQUXXGCVWgnbckSh7memwgZZ6c2Ss8p39LWjVJdTvso39FktaVV7ZWxvubxpApaYuYauJW6zrLM3o2AuVLYq",
  "key9": "PJbkpSMFYr9obehLbzqhq6uDLdR1ptkB6sPFUR1jcR9K5x4ST7HcQvbRUvceqyCiUYpagibeBevZy85pZYDSUHJ",
  "key10": "661RKgTtKionQmjBSSHTE8oMCss9GdQSm6Yac5tcTdXTm5zDJFMyCZtj14HVsJybgLBFbtP4M7eatkPaC2eVAWVy",
  "key11": "5uTkN6w3hSYoCeE2UqWVUzAR1FboXag9uUpCxmNM55PqydBgtnKdXG2wzNQT2vTJBq1pd63X41uiYDmhMFMHLAzF",
  "key12": "3DzNfkM7sfsAwNS9Ayg53tiowpzdQvdkpFc9XUYJRUk59YGQC2BfP1CnPsspnj8WrzY1rp8GkHAhmvMZdcf6rNbj",
  "key13": "3t8Nxa5oDMRDdd6cappJ1B5f2kc4j3A63iUECnWR5jRAmcxH6pBkg8cpHwNS91thMQsVF7BC4X9MqdZBWVZJML4i",
  "key14": "2BtLiS9Zk42GqT9ujRXKyift475aZScV3ZJdd8wNL2irNgqjwNXLCJiUP1LGGU8Ss9gvR36BCsLWoczZdhsggwtu",
  "key15": "WrmT4byU2CPqH2irre9iL4KPKjynvjj9MTJnSvAPLLo3NeXwdXjXFjTzSeDfTZr5iXu5WWDAEJPfvPuFny7r72R",
  "key16": "4uyhvhqB6pnmfCU6ov2h8kHbsbEioTMUQGYAzsBChj5CMKjHwwYSgtrQ1HTuKhuJHKRj7RCJHeAq4yBjT5aNbdbb",
  "key17": "2nenHKuPUunp3WcYpuUcBdmVtzuSdYRbJK6SnKKtStgmKLT7H62k3uBXoNvdttTUfVbcipYM2TYqY3v82QgKMcxe",
  "key18": "4BwjmZg8ox7oJYApbwYv7bnJ12YxoRd8nxsMVnrDXE6AW23jQJYoF3fUMjYGYYspqBqBM5urtJPzKcwLCt6BAKPX",
  "key19": "4dEyfUVTr8uDbRDzEQU9WPDhPDaJovQZ23i82WBM5T6jMEakeUsFxEb86tanYQoP2P8CJwQVwUS3jsKqvYWZBhow",
  "key20": "2ccepECsL875HfutP3xtjwi7ngd4gpZuUN8wsaZzcp9Q5fiw5yMdLvhhidenA3Ft5Vri8v1rMBqJXNnsdTYMsdy4",
  "key21": "2rhGsy8oAbZqnJnKEeXRfUnZdUPsBuYMyRF6pS5JoJyBqyyLu3JfGsrurVC5w2nPd71BcHW94hgMGLi88SJ7xAG5",
  "key22": "4Dhy4jWCHM2iouQU2wTpM8gpt4pVLvy9Ms1mX7nPopxiCB9w52FcgstrCEZJCY6DPfRRcDqjCgejoB2SHsFzijDj",
  "key23": "5w93Pn7n2E5zryhUzoGmTZX7JJz74Z8FGWyvTjzvXweGmRXUfjpbsMRToTadzQ52tYtCutcRweomqXrhgXS3W4RH",
  "key24": "4DsdwLd4orG1tSXYJ6Q8SDre7HnowXDVLA27gPw5Tf871M2riqKG18hBpzVUQh5egaLE8trFJCyPi4w5hCgyE9nP",
  "key25": "4XnCkv2tgaVmi4HG8XsSAnMxDs5BGeBZeVRFCRRePNdBLSMG3vRxyL4zbimAZkrQUwSZJa3LGzSKrBn1Hpcb26aB",
  "key26": "XfAVaoR6zTDqricHWaSVzbX1gFMHcBXmJSuMPusKFKjTxFDdgF4EbKUcfZmN3rTnDfuRNMpoRKUWZgn1hFY4UCn",
  "key27": "3m6PWBrk8qDxTUy7bpYTftirzofALqvZPGZCzDtyXwEBT5BFBKNSy11g5XDkmhMkVCXq2fsRc7DzDh9wVZpYCRcr",
  "key28": "41nn2kFvfrf8ytHkrjnXRJeeg1acTNBKeSyrwkiGfZAVWBKu71q4d8xusvWtv9Yx1j7K6Ux5SjoHnJZyuPxz3uut",
  "key29": "6Jn32C5qhXtSEKKxbWPdNYVALSwLqkg1LWCUMh3vBofMrxFh1sx2U6MCjh8L6NPptZHitT4LTmCekSoEJorgg9m",
  "key30": "3DMhuJCE1HGLcR8bfgUXNQJ71vRugKLxXiFJK9H7PTJnHMtaeanXyy2TPPgdiDbzisk34bM8h8mJXgcbTfv1qn9c",
  "key31": "42TcxHVnLeYoF9JK98weNeRDH5w6hPdvCpUVoZgbqhSZ2TojhqUyJ72yXQvNQk8CGDEimMBaTbZD4rnKADvfmDZv",
  "key32": "3BXpq5N95ge7VcTDHXpAfek9N8ZZFNT6cFzPyJztFKKdigXK9nQzMJCpxNfaKpMkpfDRpSGNqEEcsPfgFrCYk9jJ",
  "key33": "54ZV9fTprmKjRjR7FAhtZgo77iGu82wnbQGWW3JucKUwCNAJteANXUvMge7NX5z6kZeP5zijAakdr2fPkjrAWPDv"
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
