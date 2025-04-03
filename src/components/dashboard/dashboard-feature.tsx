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
    "3qFXVwgPDsqsFkWHm5CMX6JgrTzoyvt9dfuASttqPTBTuTqku3ku6ykve4d4iF5tw6mhJ47kFQwxdGTmiqz6ngZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rwour2eLndeCSu8hmAzV5hZ8tWqeET1QbZ4junhYgHLEzii8m7EQP4apUdk9ogMTHgvYWNebZy7FVcY7cyCSQGg",
  "key1": "44ZctywK6MdtCJcDZsz3F5jSg8zeKN4to9QRv99fVd3Ub8qovto8aMbv9CAR3F5z76BEAMESvoDPE3ByTiJoeTHn",
  "key2": "zkTLU75oPhjRWY3UZcboGzuFxV333PdGxHD2h397SHX6HbW55GfvsLr3ab6YUg4WUVY6jMBsc2HBULZum116GSD",
  "key3": "ArK7dCqqRATKzQgakjP2sxPFuzr5QCN2qeJaQ8ouTsPvpofAieHq8fmVXJD3HxweGMXnN3DimVBfsuH4Nzm1sCY",
  "key4": "3Duoz9h44V4gF54Ykp92s3mDrYtQpHj1oXEEJZMLK27QyEFvpYRwk3CEdXTSkyKsKnu51eWRSPxYfb2KSwFWWrDb",
  "key5": "417AqwMQuvhMVLHMVetzC9zyqrrVYZPiBypLuSGgSXqCJLQBnwunwG8dJAmEkSmkjsJQYexj6JsP9vz7JSGAcXcT",
  "key6": "5YGduzM3b5UMVuaZKsWj9swHoDJwGCx6unAnrKTgU2bEVuAa13CR65MWsTVeXnkTDRk9ejgKGM6P78rzSRCa9xu2",
  "key7": "5wu1AGWPkqYU59LaonATEknwdQjbABieZipYVUqJ7vfsenFj46nq6jh8NbT5ohGdPFiiN1VDM8sKf4jUE1Hh9G2j",
  "key8": "21Co3NtXd9SGVbcJfgQdgmAdBAZ4HhRYmWTMV4eASvc7M2rfM8TvJxMURMkWi8RtR7nWovPpXo9SWXJfF2Hikdyg",
  "key9": "545TEn8yNXCY6WKJWBJU1kNTUCJ3fAJ4rb8bJcdhSugJ5d4nYzyCjURR1ybU2cgDQYa5ZpMK55MNo8oHFMdJZ6HL",
  "key10": "5ZZhQ9EUr266A9cjREtxKgWKtmZ88HdTbdtEy5ZKv73YuUNqcmzNPYH1kDb6cimMQgR2jHb6yQoknUaAvRRFsDZE",
  "key11": "2bnP2ZnqseFT2BoCcPEQYvhu89QX6iukcWfPmNaQwCzQkcgWGszqKMnQzYADZtGm6QHb8shsC6fVp14ohmByJZ1k",
  "key12": "YDJDNQ9CbyATiRRvyitDwpc5c2NSho21oAa5yDsqikPn2iw1zd3fHTGoq1SDkLbRo1qb2Yb5a8Z3umoJSeZaRQE",
  "key13": "5tqEcY8RSEgy6qd9aQpwFMmU9TCnhWggZ6K69WiQJ42Jrpo6gQWHsD1JTNBcKFwQ98JYqwvdZ3y6NBgJpgFiF5qf",
  "key14": "64dsqn9HVr6A9dAbeWmpB8oyN6SjQwG1DRkid8U7mZcE4Uk1W98QiU8naxG67YhHDPVf9bvK18KdcRPAhQGh8DWA",
  "key15": "5MmpguwSvLNWnT2P7dtqa3RcbNLcSuzfYLmgobqehMJQ4SRcstT5cLLLGkw6Aanu1rUuRRRftHGLhkDMm4wLP4FB",
  "key16": "316k2uQTiBZK97xepWCPgyTvch9doSYEM8sDJZyio7mpEmLiDpdVKJvMEm4GdbHk5AkrYMYDGX3hrBWUxoYyr7Vp",
  "key17": "4ErmBEMt4dqgxDjM9njZiFTFFKhmVSNUYifUr8KQ34YuW6pthKnLbKQakih6dsCC6HenHKAwSBbMbcKKwPEwHmna",
  "key18": "2ye5a6mTV66CshFQNWKAuACDno6cLEUkhK1qdzVqjHmmy18fRZrohrmpjgnRDEXApVkNbdBMCqL4S8Fz7aY21YJg",
  "key19": "GUkvX3ghv9jo6coxTUKnCqiFWSQsSK46ZwFYjwhMCp2oTGoHfW8iENUaqrPMyDfpMpqRZgQmnuWffz4Qd3JVJwm",
  "key20": "43ae9uXd5uX8q5tZPz5GG3waxyDrGYnZPAbQgpB9AWYyxyjYF6J35FDwHK6cy5X3d54jY327vyMEkKY8Ye2fEqn1",
  "key21": "4k4G6ZwPDt97jWd4rk1v3hTpWJ8SP3bGVWwL3UPZhoqoBFxuRaxai9KPjN4eKy5hVji5kdUszkpLegUnruByy9K9",
  "key22": "3CrTzTbPLUgX1X2kcNnvnX5J36mxzyV8F3gWx3t4GWm1XmfEirvxnsMoj1hJbrE7nEfJdj7k2gcftbLenwNbzqUs",
  "key23": "2XniR5DR1HdZvgRZor4jihbZsczRTdVTCuuY75iUxpps94MM5YUVqJZdg7SjB31c2CLqEwXc189jBhmTqHn1TCBJ",
  "key24": "4vRgCyKQ9EV1x4wUYkAXfhWupaq9RgubtJ8ZmY7ZLpTui6CECFagrGcGBQT9gRjXvPHrnfiZN3a29uGhHdH2bfrF",
  "key25": "5vLamJjdLXvpuoTAWP79NkErsGwPSTj87r2vDV72j6nG4DTvonc8a6J1XGMaDpTFjWbbNkjA7VYi4qXyjhWZD6rt",
  "key26": "2GLPk2YpLmcHmBgqEVRrumnudjq3WUDkXx9hG1Bn3YpVhTXo7Zfiuq4N79n8YbeySk33HeBhycAUsUjCH9YD3UPH",
  "key27": "3C1tKBNAR1AhGMXLVMjdYiXpngnsqZwPSopGLH26ZwKwbkHpxjwuYdxnnGYhUpWfRzceoD1jsWrW79kXV8pAxXu7",
  "key28": "5oPiT9NDhKZCxfQo3uSQ95ny1ExAsjBuDkDktUcjkhyYi8fmYkdeEMfSRK4xf3AMSMeqJg12R1EGBEncQ46sVFrK",
  "key29": "3Z7Hf6sg8SzArNrTyMcam4g7f4f7BqBgb6RQAd2rdeFpUitWaWfhB6HMS2Yn26BEW3uz11b5zeAR69haN1Xfrq6C",
  "key30": "2ybnigwrNBsZCaPZntReattnyXQSxmx948aJuwbfXCCu1gyAXZGnDjtYM7KkErNsHGTZarpbsR7R3QsAtYHQfyFj",
  "key31": "PrzXzieof22a3sZxvuAL4mtt5es9nGjQXZzi9T7pcr7xhUuFQYbjeuGV9Makf84xfEC9sMi1xi9xxz2bDd2dgAb",
  "key32": "5Lmst9fjHN8EdYGnYwtMf1r3cwr7Z5MHzgPy8EFvhMiyVyxi5sQFZqwt3Te1YKoRsxttVbZ7ZtwhfxngcHsopGf6",
  "key33": "nPss5fJvJRZvPqAgMfF6AKDbBZukLAaReYc4tk3TP3cCzGAMyk2iyxABTciRQh6HqDr66L9vNUVzbXFFTw18Hop",
  "key34": "3aJwbChgReXK1JkdTKgAizAkJ76y7c8JCuEikricx5hatkCZscpjGXwJfq8aY9S6TZk6cQ9tcFwJfotXwNZzreS7",
  "key35": "nieXqmDLxis42AYnDnsFPvhS9wcPyvhJAtczwqSNAuRB62Gkw3gNyRqSwTnaByPPTzxdpezguduLVgD3LVPGJ1N",
  "key36": "2e7isUUm4jTetXoza26qHJWrPDveVeCuwdak3Q3zJcaQSJ2Bq9XEJ5M8Vvp9cxuhwFcVkfnCq5J9NJectpdAZYRP",
  "key37": "4vpa2kigfojsZjgCV4PLLA9yTEdXiKoTmSyU6JPbFFH4CKJGgwsmmt46kaVuUSfDeG29ZcLkmttj1erU4vv3w1d6",
  "key38": "3nWPED8rFoiii1NarFYYp3AeT1pxqRZFFWMgoLe9MRgAs2HTenTKpgA4cmWyyD6KhEGdfCTWqBGnmAXx4kr7GDxM",
  "key39": "5tTWBNeVUGTcHWe3ePVQmE45vKoDVkPPyx12ygYpL9FBkciKfaCCu53VdMUSaLUzhAkTEovVfRj4a54M9fnzkT7U",
  "key40": "5jQZ5kEE6kSA9pyQtQhAZsWo81g89TYUyyhyL9dDxq16p9t59pyi5aXDqsyGNc8xUfov6PHH1kYHxMcazibc9rPC",
  "key41": "8NuUMfM8D5ey5G2TWdzEPnwadd1HMzzGjYti8Z6K3DKgnSpj2mqzJdNhDKb46hbw2Jk7AFkYLJ8qBvjJhygkHPQ"
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
