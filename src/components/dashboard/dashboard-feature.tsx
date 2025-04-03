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
    "3gJcR3aJLjJhGvs4qxr3mtqmtQX1maRdrs1yGs9Lx1mty8WcdHFwAWKfF3MepF54kti6QkJEv2eqUMyhC8mSn2on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wjRJkY1AMsVfBDVHZScvpnZLfdP7TLHruhSeG35t556RjKHJaaRNkVvXybdLFHMm13hjpupa5mY7bsACCXtNPhd",
  "key1": "5Qp1DY7PXgwJFb85oepujWhHu82K2xkAa3XxtJCc5nFEsc5sXxPyxUfD9iLF38furwF7ZPNAb7eatZw6V8VdmGnx",
  "key2": "3DTZindEoG2HGj4z8XygUsxkaMQkiWF1jzf7SHV3SDrYoeEdgi6Hd9GY6vqwNPoDGftEsAhT64y9HcynmHCi18MC",
  "key3": "3Xu1yoigpvf9EcqJpnfZvSSgLvF6ZXvNSxHAfdszkWtVgaTxSSXxGix8uzZseT9PVmYiwgk3hx7TNVqJH1tdQMyC",
  "key4": "2mqzCEgEWSnpvTQB567yAjW7HjhW8hmXKUzZ4fXpKUk8hqT584ro1TwkKXDaaJMAKtgn1dEGTDDkHB4Ti1hSZ2td",
  "key5": "3oenB7WUyKPM6cpcumbq5qPqDN7RGbEs7yizgLEd6qHDukSEAeKED5qqdnnLHkV55ZURTX1EMBnPLGFDEacpvWkM",
  "key6": "2NKVXE7gMmnmMwgj2NeyK5WocErKmXj2kDhwjQYytzgTaD2QvxsykaCHtgf2AsiozsLdm88zw42Jg5EDHxvn8zM",
  "key7": "5TWjSfbhx7HwhVLM9fftDyeFDAMdyoSsgtMniZo7JiLySc4aqxtyGr574foujdBKHv5Wyf5XmoLKnkDomGh5JTGp",
  "key8": "46zWJ1kbXbJadjbRDPDmTHTRXw6gTbiYGnGKaZrDCeutQx6uKCugSgUNZD2VwVY1WjqAcHAZoj4ELASTFK1FXyo4",
  "key9": "3Hp8c76vLNDqx2ycGuHy2r82VrcmxWedswmDeP37T228oZLeqCzijPR7La828AqYjB8iDLbEQdETGJYrYuKYBTyu",
  "key10": "5SYfX2PYPxHPmZPdxv2A2WZeXk7asWsru7Q3UZ8zfPfV9aqX1RWPHuSpQi8oYv6hpTq11tkpMQdRoCk4L5PCdC6V",
  "key11": "yDWdvAzFGBePxRt3gC9oGHS1QdpDwjCfmKdGLaCNtX21DHyyqCzLhbCcYTQhxCPtcVWuSLyWSBXKejoRT1z1c8x",
  "key12": "3FuVirCA3rQhBhmSixX3d1jywgi8b9k1VTfZyQTMhXoB5JyfG7LQBGyukmj4CyP3UsruoPamSNmQgnw4mLhHEz3D",
  "key13": "45TDn29xTwrv8GZfmBEuA6ThHBvWoSAGZYPvKYM9SS1jXkxeiJaGVr5UgNF9Cja8AiDaScB5sc4KtgcZ7RTZnwwg",
  "key14": "5RPqJbon3UgQbgNKZm71g61PveDUHS4NcSDR86v1JyTJyUmHkx841fiDSqZwtELyRmFYXMHDnhDDsGBAAUHxuGg4",
  "key15": "3tbgd7v1nfGjzsoPGoB9HJKJHDYQ1gmQUXDMJzs5W3VN3Bf8afhKbwvcPG479dUUjQQwNjR55iGmaaoe8DddCdkv",
  "key16": "ExN37FAyZxoVZ3kmLneN6kZWQsp3evkMByNQHjDUFLJR6SmpeJhqJDUSLgSfXHysdaithFF1E5UpB3Kp1qhBKWq",
  "key17": "eQDYMgrPji8gvrvFYssNpNndNrCVafsPAjGLkUpBM5QA7mv5kKDyh6GSQsGX1cGiTcHNCFXxLDDWjvyiusxpqRW",
  "key18": "3VEbbXTP4Fd3pxRw2PUjd3YmFhwTJ724dgLtTdsazRaNi3sX47DZqSDxho4hrwEGTgzRXgaNWURRJkXeKTqjXdNF",
  "key19": "3RsYhr9DXV2F6ohBGymGXhx1nCu4pNiXCsfNCWvi4HWzqUZyRgxURuSthiqLusm8e5qRqtPZEDDmLhK5BwSqdKTi",
  "key20": "4oe8zWGK4GNYeZEndrXeFNaWUBgMhAHZJw9VLZP3YTbu6j3BR84e3ouRriPB2twmE5D1VBFq8BJ95H7CoAoqWUpT",
  "key21": "48JgKwzcpJKuZQgPQyzg4ANwJWaAj3bfdqqNmQUrCzie3qPwjxd89SQqx3yyRdbQLDMuuNHoktRV7nU8bj1Pnr8s",
  "key22": "GDuXwXcYmFYeKqKmKXSa1x6unQZ8ghRm5N5nmf7e3wXF1Cd8jUBu1LYxqL152FDJLxJFUQUFvUHH1iN7hPHBm8V",
  "key23": "VjZVqP55SW478tysasP6cKYcxnZjoxbPfbhkM7oQm7oyomrZUu8f2NGkQUefRz6ASwTZGKZZAfHEb4nFS54thEh",
  "key24": "MMpZ8e24hCaNXYupomeWN1VGiqCgQTFWHuqdV42oboCjfZ74pgS7Bsx4w8R682buYwspGnXyWvGye2CMp62y2Qz",
  "key25": "5G3VKwrGYewn4VMR9CRtMhL8hUwzMH9r78cJ1tpNEpfwTEgCSxNnwdfDbfEBA26YHqCkbjRRWHFhfCBRrUyi9p7",
  "key26": "4iE7C9YZM7sShCdrxXUxTjaj72hbn8mxSvzWrjMfwRnytc1igrjyPqHvJPDuo8kTEwLXFxJ4pnYgawp83YzzdDRH",
  "key27": "233cADtZgLdyFnPTqjw9z8uvvDXWuq1gVG2AcJA9WskLGuY4kRf2Fp9byn8SyxUR64enecie1CmXeJEqMuZdPi3C",
  "key28": "4LQUat5ahn3Q3cJyCy8sjdeZCrGAt3Lk8NdHC7Y5Y5oGe7qdTJ3K3ixg7mdURSJ3Vu62FgRNAQXLzZs92FwwLuZ8",
  "key29": "45rHiCSFRayJuprS4XK4DpUpPNgZRH9CZw3vLNLCM57zFAXVq2zZ7rHntFfDKB11rMMAD7WN1D4R2xqdEWWGAFD4"
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
