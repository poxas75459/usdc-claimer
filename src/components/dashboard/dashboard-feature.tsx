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
    "29wTvnjR1kGH93zr9WacGr5Mck9ZSqgAh6W43xcSAAnWZTVzXPsXum24gshJ7TciAZeDDbfVhQrCFWhiG1Tf8DoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pWdL3TC5FyGx9vUcfvfYDGXdtBidYmWDqTH5kamHU61tNq3xrwPubsYdtitcReSWUm72STjrrcE7BD5Gj4zR9Cq",
  "key1": "4juwpoVtCHtLSyJQteeKmGpYWnPkYQ8C4o2BrBWcfA36cpvcRjJuUTMRhTsZRdKGP4VAFC2TPcTLWPSCzfNsZU8w",
  "key2": "5GaK16fvuCd6RiAZWzmPqibhbcH8BndbwcE1itF7d6j978fbZg56a2Y2XNESHqvVc2kKGSZn2hPbMFxiwmpivdNx",
  "key3": "2fXGQDvZPjtYxkMXnH9fZzMrqFmvrmsXnLHwmvfVmtJzXd9XN2aHdr5yrzhwmmKZQjAdm6mYX73EqqTn9GBUoYDn",
  "key4": "4CoNmHPeFVnPZtfovqi8qb58m4anf3DypPMAEqsy1QEAspXqJrX7ySSWLX2DnSXcaEdD1gSZuHh4FbCk1nReeCTP",
  "key5": "5sEVuMFBUFReXti3oMeSbsM3RbV67YRTGHTdQJej5T4xUyZwEHFpWtrsUNzQaJyxtc2bCvfkUQYyzLwe6TdV4dSu",
  "key6": "53XGHHdWxD5Rmirv4ivCWgMyxqVS558YSZKe3MpugJgePsRiw12MXv4CuoUvTWK3ZSmmKxzgmCbYCqkBU35tK7aq",
  "key7": "5qQc8TMbFtdAz3kFDLgUJ44Mezriwfv6ZwwawSBfDi4TDf34GM9LqQbbcgJLzkmESDbvK5kCU3N1TdLHKArN7eR5",
  "key8": "3v7gh4kW4m9acQGd9yALZSKiCpZXWvy8ARh7abopbYxXNkyngJkxVY5EMAuEQzRM7TKeLmpifpGkE4CjGeWHvfSa",
  "key9": "5bb843PW8G9FC37UY9JSzuF6uMHvjsEHHEiTPmymBU8njcYKY8Z7LHKabEkSzcFFxL4ZVmz7eCkdXzbfbJL3GDMr",
  "key10": "2z898LK2AFhTQR9nyiT9aNWFGJZjVb68XtxJXUAWyoC2Xnp1mAjNdmkTvfcRYhK1FtgkkwefFWGkh6d5eazvjqsK",
  "key11": "os1jv2nxDmJM3fbzRcPVut9zXwt169eHvHsGKQHWQSounjeNGQWmePoTSxQhm664oceV8wL9ptiwXzLs2ZV7kvS",
  "key12": "oSiAJaTUMw2Y6obW6WoWXre1kznTS6e6Towuf57xrwkHmUsWjiM9VxpPgetSnRpfkw688qzE5jQXkyEubzDnvCC",
  "key13": "5vmpRqkGuBRzQeeJU8MaNn6ZaJRRRTUfua4Ln7oWgmhNGQRfT2a852K3WbhzsGo3w1Tz76SRRvFkgyFcvgJR9jmW",
  "key14": "5Sbt5FaYZ58qj8a9byX3fJjHVAEqqMShxMByKDH2KcG9A162dCYftYfiVxCJ2QMZ8CYFs9VXrALKr4hLcq8dhd6s",
  "key15": "3FDYoj54f85e5qnA5ayn4F549z8k8TK98Dud32QyqJKx3BvEsKUpiU9EPXmjTqKacpLKdtoSf6EFuxDtkUxDUDvm",
  "key16": "24nemy2EP8QJAe64scVLVq2RRgomBM9WDCfi96wvXwCmJSoVcAKWHNnh7z26mMKznK64VoZ4A5pLfZbRekBeg2p6",
  "key17": "37RfZGBRHtYbBsfxiKd5rPGXMbUVuQ4rRnmoCLeoSPwLWJub1gibsrkBJzJmVL53JSWipPgZKNKaMUibu6FFCgnx",
  "key18": "4WDHrTyujzWcqtDEkuWZ5QtxzwJ98s6AnBvqoFkSEngu6dSvmMGLfECBVoE5FyesmEkfb5wRaP4QirXco3zf2eHG",
  "key19": "3py9kVeDRYxHFBwyD5DQo4hv7zRUMnEZUEw6u6uxzz6iqk9SKx423HbvtJSaC9QYbstPW4THpudJeT6fBXG4XPHm",
  "key20": "4gCdhv2y975tyxU8otgVPhm3MwT3AXqyEydYLxbuBo86krvCtehN98FaXUVX8XJkQzjAjScutqBQZcx1kxBUxCZj",
  "key21": "2HwrtXSqhGwK2HW8VsK22xWnj5XYqN5HQxqGSKCdbEgJSnR9vUGxhgJypCPA1dwJRkjJsooRgL1CKmjLcDMRpBE8",
  "key22": "3T9ioQbzwWPuSNK7BPF1HYJkz12m8aBbMgCNJqX4MjtjxaSyLxgxEc5bfBqUVaLFGiis4HmaCQ9Rf7pD16FHtYMj",
  "key23": "67biCUUyAv6YD7GHMXVzyt9vqiE6WFcU55bPvBgLzaw4WpfxzJdcH6snaNqwm7fMRuULrT5cod86DtkvuC8NReiY",
  "key24": "5e23GWMCbY9dk9ocH2CXWk5tBRX3Ph9dM8BoVah4tdxqsF2grRAu4XPix4pA4sRiLds27DdDct915e1VMyocWXZK",
  "key25": "3wWa6ETEFpmXr5JNB9LVFk2DkPmJHhg7DS2Mb1dn7fUR6W2mwCe26871dzoHf2NdZN5ccxGHWXx27Dy3t5nxCcHF",
  "key26": "5RujE7BfbdpL162NKFhmuCq5x1U3LwghrtgL2xYqPxZ3b4qADgx3jC7i4FRKB2X1GngLbXnw6UTYXqKSnEFwD3hc",
  "key27": "3jR4VQHKM3MrnHNaKBooHQKkZHP5JHPHrK292w4phQ45rsiBd3q6jk33RfR4NQ1Mr9MR9sJdbicinKhBXAfRfp65",
  "key28": "5EBYpRK1enF2JJRkA6CXVgTmBTjZQan8uVGfZJZPP4tYgnaryNQEXimgcgoyfK7DYrkBCgYKGhJX8mUjUqVymMQ",
  "key29": "3JVNko6TydCj3vsaX546k2rugHAnwnD5F5Sho3Hdwp185vNUaGHK33m7cDSEWW2WwfdGK2jawNK95AMqAFLaTW9n",
  "key30": "rtavgE3q4K5M2vhiU9XCv7uXxDdJCRkubsGs59J2c5D7vkc6TCwdiWp6s8hCMuKAveeCKYbFCBp6yzmzFT2f7nr",
  "key31": "3pF8ngfsB7agCPp6kLS3n65icRWmv37L41jh9wW1sg2RuoLUgiFzhGRjq5QWAN695RjhKHA7eCdFKGK7U2j56K6c",
  "key32": "3ZTwkJXzQaPysA2fSdXux7SMmrqyQKUFiRCQNPJRowTegT22p9nDyYgAoteSNcssmPkTAgqAKDambMkCxuep9sGe",
  "key33": "2wBZZHYMRadRpqkSKnn3Aen2PnghCJZiYpGY5T62hsupJdD8RzP7dQjjko1WJ5twfmLcwZFn3XNMnMZbeQHkP3bn",
  "key34": "484Lvqe3PgiUBBtpypcYbVYZPG6Fa7WhxLsgTXUDZuYZGp4GaYdL5q5Y1f5ysmiTfjdBktGiHz1CKF9irNDLoWJB",
  "key35": "3B7ejbnbgcDqUohndEHEF274ca61vnwfTsjnpQFy9ik1ofWvySqosHpRNt2YpECCCNH37PfNNPdihqrVyDx9BZqw",
  "key36": "5EH6zvmYWFteXaSGbiokWeRvL2HtbL3pdfQg4teU1DtdtD78S28BLkEbQKd794YiXc15HzA6xriXo2XvvEPa17WL",
  "key37": "4t2XmGdj2JrGdVLMQmTtb8GutN5bUbPvkZosnj28Ri467RXzoW2RsUzPnKGjB9hvyYEQBHTxrSM4RpoJ9xJpwW3r",
  "key38": "5Nfurbjmihgdwxt7ifqotyAty46oN3ajXTfVZBsfaNHMoZhM9mVtQGC7WFJSEHmkM1dCNmXm7cCHYffRoWFqAgp3",
  "key39": "27dBCb7KMPZ6bku7hNnwrFCByf1AX4nTqGHqniqVebE7XdybLt1NQVRJ8DWJcoV5oWxLPcK8hL3HRwEm9TTCJCJZ",
  "key40": "5h5yU5fgj8BGMnyn6EBYgZbHu73LziLQbwQSYkiNhfcHNKogQQKBxweK1NctC3MVdehhvGdZfDg8o3LDcSsBdUMb",
  "key41": "2SAqBB95f5qtKhQPC7MQdbbCiLccqfGohsvJe2dEfUUu1RAJat1C3574n1jF5ZQMapokQZKNq4k5ttHSjaYiT3ik",
  "key42": "47gALPFt9LQ3rAFMabCkfs623P5ADYo5bLM5vAcT7h46kU1sFQ4tBeaUJtfB3QVRugRyKrx5r2XpDzmvsAXbeYWV",
  "key43": "4UKctQ7qfNFopRdXijjXqfBA8DFRTfry6EUAnHC89EP4F14TMCv8TARmGyeQ5fSNPkDNBehnZwmB5VYc1kFxpjdz",
  "key44": "3steseU4JuSdaDyKAumjyiQg4yGUowLqxanpXmGXbgVv9NXN3gv6HYeVAiG9SYuFGnbJQUhu15fWMFLi1gLqcMsz",
  "key45": "2GZ951tZtErRwNvrFzZLvrBmCeL5jqHiMWW3cAoCPKTSMhp9ArHcErqcF1ideNMptVWXo6tbkLapzGw8rMKUXJHp",
  "key46": "3cnPNaGXU6i5buesTaYAmq3kMKiXoa4oZTdZdc4UpxPgtc7zZQjqnitYNH9cXBtWP3Can8qWCRJwMXr6tVUXHQHH",
  "key47": "4yi1B4hQUwVJiBEcvjyFRi4BrxqXGr97k9jRntPthajvsm9bCkafbGQ2uQCP6zrfDS3HrkE8ZHzBcnSM2ogfhJhD",
  "key48": "4biokvvTwy9fxKtbxH39pVwbeV61PD2h5CFcSpZPGkv5uGjyEKGa6VZJsr2v4EF8Us5qYXMwFZHvDm9UY4Lxz5wj",
  "key49": "5RgkvPcktdYmoDxFgA1EeJEzqkW2cLre8JbU3Z8m6kmB9EhtoC9ouMS3V7hN2wMgHRyF2B2ZrmDCKBfy99k88pAz"
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
