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
    "5L3cpR1f5YuK84bryJnWSczjeaKBAFyRq2emWxhB9ooRv1QenzkqYiK6hF34KGW8FostkdwV5Jr6spZv8BozxMWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZQQeEa9kVupJtMYzFngst6PshFUBweeAzUAPokKYjH8tYA7zgF6tvqx7aJJXDJywcRwNJEDY5AU2AdMdfJNMkZ",
  "key1": "4xtLrGUvaMXWdJUWfrdRmGVomcnqm3qHuZ14JVnfSiMQYvhmY4m6hpp85kmc5CZkVZSgaJiwjqUx4RRvDQFX5XKr",
  "key2": "4MzGze1sd6u8WiDDPfwJLP5ZtQycw5mRVpvvJuCEi14garMecjhSF6o1fkiSc9BcRubFNFQiLXNjEC6irDcDpx12",
  "key3": "4EioX57vVgW315GcErHXvzEsDRFY9CEYjYtYPAAGWTJFgwBjYjDMpEcyxMavtPLNUKfgnVm2ykV4N7eZXnmJbkrD",
  "key4": "3RMux9z95ZmaR82sE2hTgYuJWwKPsSRHvGPC4Vjvd7uX1MFiZJFrq17sk4qWz8SpMjSFaZjEh6m5wKFAXvPoBzFX",
  "key5": "5cKYd1TBKT59Cuo6XGTX1cRGrpsS3hHPS7ctZpRYwr4CnvmxCxPQ66yDyKZLZoBBQtnkPXSN1Nvrz2L3boKnXdfp",
  "key6": "5fTNCui8VHU79qzgcTpyvrR1P7N8JGUyrEHQDFodysZjGr1ug6maKZjUfRtcELB32PYRez1ryf9Fy5MoKU6AvwcC",
  "key7": "3AZb64ZumZVk23xpWw2Ty28ZBJ1buvjgqD1QEyEatjgB79LwwqtVicnVGC1SDEbErEHMLqvNnn394v3ZfuVPz8Xz",
  "key8": "38Tk3WkGJT3rC4jrFj6DvsFuypbfUTbeA1jLuEc3duVkmTacJe12RVhSkrLCsVzpk87vfSBVvP9gEZa65hEsGSzv",
  "key9": "222o8ieuqEhaza6rE9Y6fsE9Uwdo15qXmWLSNyvBsucKkESwzruM3owifKQjowd6XthMvXy9b481xTSrfKWvihKv",
  "key10": "2nSezeKwnuQBJd8cbVfQCJ5579xfxDxmRB1gKWT92XBQzkZkjwRh2t9cWiux6zyp5feh6odKbrXgYQHKRBo744Gg",
  "key11": "2PJ38gMcCa4nXnWCCxDMNCEXozHZr9c8tJL9VNuwVaiGNTyou4XenZsyc5bRTv23hM7vAvWCcvfQfwL71MWdTpnh",
  "key12": "4cCpLJaHUNPoahahwjD5nNeZ6RaP3FqRe8RAkSHMPiCM6dqxe2DTTyTAjkeURb1G7nudgpw1KpWF4p7uFyZP5Nqz",
  "key13": "4h9cNP3sHbyJadWgyXgT3qJoeWegL4EMt1tafK7MMyFKWnhZF2zhpBwtbTTUbUNi5x3GDdfwG9qVXCqMVrChhU43",
  "key14": "28gQW9zRpnzWnZNUw2k8yhKz7gbFyXCZKqk7xKaJwDsrn9Jrib9KQR8pfr6WwUFsY62MLZTFBgcUYPgDbGcZamG9",
  "key15": "3LwxmfStHmB1jUT83VHXgRqGrGpHrS82nJVKFRjxCpiDBA5uTHLYxZKvRiLiXG6q3BsjTVv4qUzJdsHDomCNpmU4",
  "key16": "3RseNuEGRz6ASZqx7JhGJ3ssMVryFuJFWcLpsGXM9QUNF7wv5Z8iaLDQ1Nx97ViEf16PsAP8C72NAgght47vJJCC",
  "key17": "3BnVJ2jsapFka4Xebvet1kdiQty1KPs7qk1otiCeyUuMX2vuq8cXE8hZbsDGvMYF5A3AJqoJR3u37QAWSQf6qkQ2",
  "key18": "CnAkNEhT6zCU6P8E151NJ8NU9sbeHqKUCWSMzcdw6qvHxZQqGYZxR9DEQihVUByYKshxXzi86Tdo8kDdte8cUUB",
  "key19": "hk2aQyCoLjwwKDsrgNtKnW7bCTJKd4k1F6j1gmZtdbjvW8m36EL5zzuf7wmMfEmRw2qkYrE6DVM9v2bep1BpDFF",
  "key20": "2NRAYDwdT8tFmnngdjPynN9VGd6FSsvEPkLYVCpCWkRGJD2xmRXmLWZHGj8GVn2fqFgin5oAamyUivi7itUnn1BF",
  "key21": "2KZnAhbV5Cv2WamttbP4wN3j8tg7nRD3z39UtCAAtsvez6Xz5AyLTt87nBBbjhxRJRHrDhKNuawEHwxe74UB2u8S",
  "key22": "5yn52k5nwgorDEYN2vMUUNr1gTKSPc5ZS1qfPVjWQFD1fsG6GPWgS1PXsDFTvhanBJK5TPYYPxrvtgGyGQd8HUBC",
  "key23": "3tfNgqtCNQsEYQE5swjw6r1Y9wJDhDMwmJwNdnsRnBQgVPMswepZyx31R4mbEbpgjfMS92frWtZ7yUrSU4Wk4BmQ",
  "key24": "bmyiqz9LpftgUrHzLNysFpzqp3deJwpM1sQ9CFQiN5X18ijpAWaeUYQ9eFrzZNWvF83vgvyZAkCNxctSk5uwfQD",
  "key25": "4KnQeqKYCSP4WycFDG19kK1qh5ydggqTKUgxjy3r45ZZQc7ACsJ9LtY4RBHZKY9LdKaNLHe8kzwsHhpxAgbn7EpY",
  "key26": "3QGLp55THT96LbNgokNA9hSz9fAhmqriShuFi93P2QEn4aKHEZc8dXHGPbc7ZhVX36NMiD6V3nfon6p2LvsCAtNF",
  "key27": "mdcTuAwfSV3dXVfbhxJUrDKR5dd5B5hZqzKXyWXePbA3RM1kP6UbrKRtychCEYmWdWeVjvMPVwhcu7TqoTSSQQw",
  "key28": "2mbUghwjeVWukETWuYZbVYm48sRA5qtDpK3HDrGxXFiH58NWTtGvDGTyKjaYQhjiaxMgFiRvf3btLKpFno7X4kxj",
  "key29": "5CBk4LcJj8hUryUDReuFup2py4dAaTdDRA5rFYAw4eLPtBG6P3cBgBxrsrqT4e6RMLgKjM7oEryuxJxnTECebkQd",
  "key30": "YeDvdZQnL6WTPgc5utKfaG9ndwLQbPBEyJpNJsY4MWTzZpSxcAfX4QVjuT6SDJAWPGQbysAodPPAzyHHHGqPYqv",
  "key31": "49mNyVhUusxYQDtaQb4qfRS4DJN6mqMoj99qZT2FfsErso4BN6RLQcwTYiCJRkijD4PaFgaHAPeNU75LvRwW1t3x",
  "key32": "3dH2AVvHQmYteN1FhDYfWSgmhZqvoVPvKVb5ztVXBvNTUFv9QdXAfKXhCHmomxsEq9kRWwsAQ2wAyWvuBW9pTmf8",
  "key33": "4vsJVEGEzKWBVeF8vb74PHdxhGWzSny3Eyyeyi8NqkztdPAHdRmdraf8TjeVmtF1kAUaHZRYDkgs4rKU8hAw47JZ",
  "key34": "LrZTGjKF6DYVcBxdbRVELZY3KyoQdxBzgyVfcwL7tHKSammnrF1Jbi5X8T7gyxijZ4BKMtTSqzHNtYc1ovWPZA3",
  "key35": "2HjT38MRNRLQFt9sMWoo9QRaCypJhDVsA1ZkRVhiQP5Vz9eVf47ZBtHszzQoELWjpecdQa5bo1de6LAWMUq7dALW"
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
