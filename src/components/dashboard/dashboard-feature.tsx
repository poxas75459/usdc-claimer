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
    "4HWyK6zPWjZyADscPyafDqzcskVCvwf7kac9DiqctjqDGWELrw5jHZC9VcjaQbgfM5bQz9whVkzYvm7RHyjzvnPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vrYzbXhuqvrogchqLDQvptkXfDVHQjcNN8rhDHBCLBjoZVuCqEUDV2MZwiHPDygqSKLbLki9ivwTrtFmbn1Zes",
  "key1": "4Wpmd2Y8io71tsFjBjAMKqgaBw6i2PL5nULx8YSgn1pUDzsPRgcKHVQhKK7r9d5uBNqfeVfkcZX2BzNi7U9sBqKY",
  "key2": "3cHG6aRD3gPfuzXU4c1cudWCYyyooNb7Rg2SqS73CKz6wa7UyUAkpivc78a2oVJTEZyt77F7y1KsgKGKbdFisKsc",
  "key3": "4Gi9NCeBbyDh9iUhcmYaAM3v5NwLuE7vAYyvXXGyWSc5SGxLv7AhRhAxYn8eC4QCtgfRvsCG2B7xfKdXyX54hEsk",
  "key4": "33thnNxpAeoEa2VfMRzwpofL2R3WL2aSVYihGAK4W72AzfSgwb6YjPbeUDoz26MB8rBU9tZ3Mb4svWyv15SRgjJU",
  "key5": "5hgcQo84eW9wkf15N7pzjFJ41oPx9tgdWCcr8DMG8x8iHa65mDNynjLZcXoytyJAxgfucKNCPjH7XoRWxxoarZhz",
  "key6": "4YHQdExkguozk14hiWwqnrJ24kgXYXsyHSseMo489fJrWNSVpwP8YoznSm5AhmiyAH84G3ac6jQnWiu51RmjVZi8",
  "key7": "44A2cxfv5ZTXVVGYhdT9TFitJSHTSCKUwjMGbBakzacBMSzAJh6kXTv3SkG2dWQhWVNZ6asv7TvPWJX4GhWcCCf1",
  "key8": "vo6pDRuNjYDZiyh7HmHP6ZhWBe7okbqg7vkMpWGW6nHgNL2x65f6eiDejuUVGaaP1p3HTerYRXnBYprSQ72wsrf",
  "key9": "8Pxh1oGSSCV8ocbRUFEPDCwiLfcbZa3KxneQ6PZL8MTLM6WVBvHw6916bbwnw1NUNVwr7diPDGEWJMRZ6YRHaHG",
  "key10": "433hRGosT5KEJFBtEq1CHXmnUy9aLsiL8NrzyoVirJRtYFqz4mrr7zeAVQndDcaQgSxwCXoE1BMXHRGfdA6rnEve",
  "key11": "WN1pXqcSHFYoSYEUzc3ZZ4SHmt7YBfEvsTT4RPPQg1XZzaE8CXiw9dJcpXu6BMHDhSMfkstGY5XGrpk5u7Gqy2v",
  "key12": "2eNe44CKeo3iHvjcr687oX1KQKv4SkwEW4nkmDEuVP4nkATpTA2bkbRbqKiDMZfR84QKLEfweWFS63o9zwkQygyc",
  "key13": "24cKZQCrEGnWSgbvKKFzeL1xcZ2mXGnMZyQPVvLUk28jVBjnfCw3KXns2FXhTciEfQuYkQErfg3MRtGkU2keaGLD",
  "key14": "4aovNEoBQaFjTUMjNaqY58dpYwkHmiCYYeAh5hzpcYdueAWrXwt541LQ6fY1vu1tLHasVw3mRryb4hq6nhRM7yRh",
  "key15": "AcC3WEhzuVG9RBnBDiWCqVteVM6yQASWMrRubwg7AEk7y5GhF82ojKpky5GHyEzuD7a7XV4ZhWPZKzsEVKwtdKL",
  "key16": "5z4nL5tPBzeWq3irseTV9pBhMa2roYmcXKdLEVdXh1SxkwNN6KZP7Bu5AE75YBrc2mn4BDkVc23VFRTjCGc1h7w2",
  "key17": "4NqcXqar8EBhebQc14hZo2gYhA86ceW4fL2Fy6G9ENpKz2p1ypcasEapsEFypeQsJYex2MVj173VGBMpWdRZQywq",
  "key18": "2qU7dsnx81DAD4tLtmQ24kc7ZRFzE6Kvi3s72TPLQaRTZ8t59j21KZcE2zPnttQrpJxv8j2SRfbkD412yiZMT7k7",
  "key19": "4xYeL6bjBExKJ4yHeBLUKoANF6gwaNrwDvpoPKbRV2viXgkwAhEKsZ6uQxorCuoSPsBJb852oW6Q9c3HvYmBq8JX",
  "key20": "2bmnEUSZ1VjbQ5yGwHq8QmdyaWmgBzsWuSmVV3bzDUKHrd6WdkRZx8wrAbQNVNRLBCcN8NirT2ZtgQScgCNrvqD5",
  "key21": "4GxwUBSnLZMTgkPcfWwQkjUwPjHq4265XKktFt85MEZTFHhQEt2hr3pFXnaU2KD5QujzpPetBD99MSfFPZ8ZEm1T",
  "key22": "3GWp37fJLMYT2mk4Vi8my16UdKHarfx3iqzQkHNuqRRj1mBWEqYVXaS1XeUYJYqJc9sgoketryLvFuKmsgTyXWRq",
  "key23": "4d7czojrG9SPCaADjBQ85fAHt4ys3x1GZh33mFQBmeAVmVarNUKDU6Xe4qDpFG1XJxErwgMCiQduEmKmjnURK3A7",
  "key24": "5EtA3DpDFg2wvJPPhvPuC4qcCMquTtTX5km4ZzzkqJ4tb6t2JasZXmFkW91cH9P4eXDjG42kDQRU12jz4rfKFvFX",
  "key25": "4BpVnQNu6SfwEWtEaxj7PuPkQ9UPd1FZYq9Ka8D4cKzH9y5BsYYJM3W1WK6wEsbW1ab6jaiPqmhFHUy5255sxTp7",
  "key26": "4VJYn1Wyy7SjjgHitC166nY2nsuZMDkmnjdUg1mnXhabZhJc1yAhJ85oNT33camdNBe3k5BXFD7eXmTVVesGNPFc",
  "key27": "5kLzA4QsbHYAggLG2giZBD27ETAw9cCbQhgExkNfdRF2xFwNkcsxhuzkdqPDf9ZKjjZ2WgwiWSrupN5i1Qo3HyHK",
  "key28": "4LKUWVKNy2dkYUk4KZCHyjSkMJBdva9ebFtS71zsB7HvgH1oFiHRi7ujxqp4pabGj4WJAU7XzZQrusbPRHHmo45E",
  "key29": "4QTxo2inS5WVuw32c15VGEuSYezJ7WBbUkfsRJoxZ158WBFtD6rUWmjYTuKh8PajMb6LT7V3SCTDHxrZjcKFHCMG",
  "key30": "NRs2uQwRqqzwNXhwpp32EedMTLZbLu6eehRu5tg4sHtJpgSkFUJVUe9sUDUfCt95dM3XDpAobviUhvgh7UzUMd2",
  "key31": "4c2uJZXmuz8PKAaoWxJStA7gFDCGLuMWRvKEz9ngzAGhnarkqyTE1ozPbxvDy1LW6cEusqMME19iRo7DW3ZWgHUD",
  "key32": "3qZpCy2GXq4rKT1qf3Lwubu2A2FZxK4s7V78XKA53QeL7FCkRJhCsbGU5uvPyFf7Cx9H6saAAjzkeTZiZj4FAi5e",
  "key33": "4ztkNHFDb5RYJEz6e9SUd99vrwUwuSDAKQnYUCNgjKP4oeU6QEoN9TfLSDEimoC4mJD5TzV6eAhwjvZC6WhotzsW",
  "key34": "3c9UNYPL8aKkrwV5YyZQCC9qxUxe1hoA7ahTH5EhwJrPauqUk2EiApYUphwqtELm3GJdSxSHX38ScA1tNQxVerij",
  "key35": "2rhcNj8o34RL6SKjVEkNR2nBwqPU1Z5uEj1q1s16eNZN8YDnwvaJbK6gnmFPnc7zrcReK7aeXiiesJ7h8NBCH6Fq",
  "key36": "51Gsdatf3ugP5jTMZUVucQN98uPK3LXFgdoHUo1zYrdyNU4rQLPJsE55HZAMtQt84PyNfso8fa16MaAeyk2JRYxW",
  "key37": "4kNtGrXN4Y3CH6ro4sj6Ch6uCXDkAXaEBcskHxdT4kqBcxdVHq7vUM8uyfiahVAojjZhDLfP8McgWeXpLpRbcBTD",
  "key38": "2yJxsQt2gJF4mtrama6XFgy3UFYHXzyoK3UtAj8FWDguVpEU1rEPqwY4eKGzzF56EQTycaurzkyzWgw7yBnR8oNy",
  "key39": "279kS4fmSGrv9FtfBH98qaQKQK9KKsHqnvCu7oSCK8PbiZ7DMUXCcNcUQG7DniB3qUBpmJi6Dw3VEJDTCjBv6by3",
  "key40": "5GwWuA1pZXWrWuNnKKyN9D3WWBHwFExbKNLGHR9RTw1vrZAnD8eJkkqHEHcbCBgGEixrWF6av2vV7eztvLFf6Eva",
  "key41": "VPhVBM4AaQ96jzBbkMb2S3SDpMyo4VzfpJugRX6gUJ8NvFeQMwatq6SbLH4NJLCdg2GhgFsPvdu5KpEoa4KKCwz",
  "key42": "4Savws4WdmoG6MFn9yBXvhcJ9JSSodV4xLhcic27yWP9TyLzgGASPv52dSmZKMAt5zXqjnDtYKCrvM2Euo4LPqpo"
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
