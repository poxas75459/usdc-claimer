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
    "C75PUU42ZDPaB1dPxH4MEF1Vj9ZFC9YmvHvVMFKz6Lgf1jfrrqozn8D1gdwT3aGA7HKbNKQcBZG6zaR4ZtVVgeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dP7RPamMHc57UQzLL9z13rtRis12kg7smFm7GxFGvPd4r3mH3R4ZUb9gB98E2CmsmntGfcySj9qaNWEq7aDuSwU",
  "key1": "4EjjrKFAC3tagPHoFA6dWxMbWt3chvbuG2sp8otgHfL7rGM2pb8sHMAws6v9WgbTuEk9Vs75VX4B4mivfxMWLur7",
  "key2": "27LGkgYFRXu4Lg4QUvxgmvQrPdbVZDJBYR1qiFus8ZBTjcoVeeTNXzaSAsL7dkaRTeoHoY16KivCe7UtuZEc1UZB",
  "key3": "3psXhcgB7VcWRXJjWiD1ZEkSAL5frt59sJtBmkJKgBNwxgq244nS1XPPrrXQVg7XfVX7pv3JtgMpPifXauYobps9",
  "key4": "4TA93qM2HddMPGvFwyD4B1onPxDtHYoUV4uKG92CSYnN4ukN21DocNrUBmaN7jUdQBnhKYFsb94S31LTQ8LqARjL",
  "key5": "nJ5QPkobQtJyfHVofPH9EwaeqgMkuJXEbGLR1vtQ6pSr4g1Ji7FLEVHQ4cNTxAfbKaaSrFuZLRB52UotVa7SubG",
  "key6": "5HVqD7vFq3GbhC1XyZQdC3rXF1s75mgcBHH8qBijDnPBxUyTd6QtN1RKJBJK2aRH4XGYd5dcKqqJtLLd9fYYdDxU",
  "key7": "4Tu7zSXA7u63Po8P4qQqckVYyzPXwrzbXDGfJf8RfpMhUNXNPER77BJhGzu6BKT6UpGZTjwCrRNzctFRb97LbU3v",
  "key8": "2CkVv52ipaFVyNcUCsY87HiJ1BNGkC3wiagsH21WnYZuuLdk6sAH4W1jL2KsZ5CqNmuCy3ZjtMeLnXdozFgePpWC",
  "key9": "2ne71sXhD6Dhd7UA2oss7fsbmpdcKLXKa2VrsUXTeHJ5AFfSVfqopBW7cuAML8erqem9F9uLq4REuuCo87DkaEpt",
  "key10": "4P3XFbumFSoryeVyewATv6MPTo2rr1no1SrHhSUqxVUF6mToUy1vY3v8R6qMmjhw1f38JGtmcbP2QfhrEGpiFiKF",
  "key11": "34HFmSjNBBAYQ7ENjUiU4G5bNoedVZGZfZBer8MebMWrTFmWRdoyBhPqAT8ciomUv7yERXQPmkmQg2RdNUJqGrfz",
  "key12": "4NC1eyeWRvEDZ6njVWjxJ6ZQf52k6GDAQhsT8ANtikSsNV2MpMXkXJpT97CL4evYj8cwUxyatBqBpwfANpFfG9Ar",
  "key13": "5ufocacCUwvkdDKHjpoLgxterdYyATjUTseSo62iEeXfKc1KdTNeZQRUiLXVWZjLA8dCLeo1TW1bSytgxfxMTpPo",
  "key14": "32MupVZgqPGN3xaC7vgEnb9P4M4s6ZMfGxQ91eYg23acJYFba1Tk2DhhxeykA73NRBJbcCcTmYLnMiJ2ptg5ofD2",
  "key15": "2qMHVSeRu9SQDohgNDr9PFvfqUHGbVRnNNdVxCogwYxevcs5UsDXNKjy3srSGyx2u9wJ9GhVtax6kV8c3DmkWNoN",
  "key16": "2b8C5PYq7sW4MZZmqewzHu4tGexojM8T9CDjyw3Mm5da7qYZExi33oxZkVJ7CXPYDL1UBck9JFYFYcsyCkJDxbja",
  "key17": "212v1n4vspouwv8toekRKLSuhMiFT4xjJ7tAeM9cLTzHL9z9dVohYMbWKEeVXbxHy2qymyK5cvwBbr4xV3zo2cKv",
  "key18": "WPXHfbSefn1QWP9f7kLyYjWJaPRq4wNBsykHWJkDR3uwzG9Ctd6pSJFDjWhiyn78n9vREuJPHFC7dPmx76SgpTr",
  "key19": "4xkZAdDhLaFPKwUna24sKfcQZnDmWkfrRw2dH4coE1rmzKkPh6Ekr1ddwdLN742d1wvugkDm2TC7JgRTUhcyx9SR",
  "key20": "32GWnJrWcQ6QdEJBpp7mQq2y1yRjGXnxnVtphPh4ouUpogxGBTCntELKL8pzF28o5ujwND4DFHE7CxsL3hcnyKhN",
  "key21": "ws9xj5KSHe2WzG3nbshvdZfy33qtTiV7NymFFQz2GZyVeGWGTtadh9mF2ABFf8dBeNcgxWM2u9WCUxQ6pFsStpG",
  "key22": "33GanibfiusaFiZwhhSuUWfPMvknHnukkGbqb4aQFQVpyPWMHnHzVA98ywbSuXg6JNUEZEpLEr3WvNrdzHgygG9r",
  "key23": "2XMkCeY8Z4JKHtpDpWuckMZAysqiK47h7Z6Fasy26N5NNXNY9sNg3RPnN6YyEZuZP6FXUhDgnx1x8FTKZysz2GNT",
  "key24": "4n2t4KW22GwiN5EjFZVgcXanghAyo3q5tnREm8YaN3S73W4dTCwWRxrLCpuJHnkp8LLwoCDdh3cLYQnz7Fa2kfGD",
  "key25": "458xvqLyZLAyfF9VJynE3gEtA7a7s3BKDAWNLU8h2aw2j5FVvohEEvU6psSRH3tJ7pgKNFMmE5wWNxc1f7dxZspj",
  "key26": "4DbZinq8AnSmJnTdzEun5rbpRc78AqVwzZb8MnpQhQcTdaUe2JmrtogL6ZnFrKEtg8o1GeXBYeqdYz95Fbs9Psy1",
  "key27": "3VpQEzPtNJp9yVMpLj9ANKpTvjwhDz462x573iWCqo8wKtcBi6mbEAdHZR6yhwZ5WfeuoCdLD5Lo9tj6tmHWwUjU",
  "key28": "5qKnAn2789JLToa22EL1aEtRs7Gn7zsPy9x3co93WrTbhH9w6dbYujsZCCUzCtH1gwH2ijwMatdoQrtHYLSMUUhE",
  "key29": "6FE2F5rA7hr4PAKjNY9XrRwKSAXtKaEJeDnCUfkARVbofQZzttAnhnb7QLTpk5toM1Auis4rFkrMmeUBAbMznx7",
  "key30": "5zBut8rSvkJuYeUgUUzpmeqAeevV358XHrwjJLEMs4kUEg2f6TXPfXtF5RNKTtTSdLZ19B8jbf3NbRFUQUsZ7TRR"
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
