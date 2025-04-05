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
    "4AE9PhaSQiBJWQjkNuarxke83EFgrnBAiqaExYoKJqjpdJBCyyXzUb44F1LWU677cdLDdaM738MRrQGb3MSyBkD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmdpdmRWs94oxuj5R2yyz28QhQSRJEvscsHw2ZB4iGY1U73Da3cVkDkANCtqNHLG7xkg9TJAsTA4Jrpo4BL6E9i",
  "key1": "AomJZB52ZTcDm4KbGmAzLnE5iyt8o7tacUJ8cpGwNbjpLJcE9RuA9ZSPkmczjBmgVC7XATx9V2PDTajYwCRvDo3",
  "key2": "4QUn8BbJ8DMsVXCedj6xM8VXKhRjF48fSXV8VJf7Vqj5QPaKC9bR3Gr93Hgn24d9QjJnvjtBcMg4Jpqk1m4RxaV4",
  "key3": "5kzRptDFUEc6CYw39hctbM989hwJe8V3CqebtC6XKWLgzVdwDS44rxjuJfbMKdcdoobtEq2J3cQwSxp6PbZURv6A",
  "key4": "5GR1p4F1tYB1EDMUGa5i4FCvHURREMpcxdnhhVgAzHtykx6TpfSvsvd2aM2dvMc3zr7xGYWHkNDwYRHZdRgW2j7m",
  "key5": "3mGzb3SKuJKSiMPM7qb8vE15KvDpjq3kbmtHfttbjoQP8fgTJnmf7Hx39ubf3PrmYXRMBj8pbiB2H9giKpf8Dn2j",
  "key6": "EfVrmK9QZP4SqQ8US77uD9SiDgAwZH4y9tksM1jQMSfJd4aiAaXnWKswL8r5P366fnqhHxrNDnjAuAPvLPNP6MA",
  "key7": "cFnVSMkmS3QHXa8akDRyRJNkzHrJX7QB7ifmJfRcup53ZAAAeA9JGqUhRPnmfZ6owWgojx8bq5RcNmBAdAnjV7g",
  "key8": "4oBjgEnUzzitsU8wU3Ki3LSkq8PYRpKh9KF1QSQ7XVvAhKx3ZptPzF21yvN9uVfFWDnpBgMUsFkaJUxjVofW5Q24",
  "key9": "ukrcykACLadHuKH5Gi64gve5CVQwurjTSDgKJtNCx3NqfdMxD7NeU22bMoq7q9UJCXyf1JrE7jp7TrHbzjQMVYU",
  "key10": "3pouSjrHi9cXieagdrNYfdwF5AUAzBMmP1jrCpwCyVzHmD6JWxT6xAb9HVXK6ptE5vJdXudRidb8P2DoqbyW8GPi",
  "key11": "HDZ7xvMjftySmbr9bEDE5XJcv4TDnFAuDeVDnNKK58s9QxscXXnc6B6zz8JVjUcpz8QG2wUxKiBppNuLidWGdVU",
  "key12": "3ZT6iYEK4EiPEYEhp8pE8DSyAJ6pM6WQ3qyqZxNvehVrcBcHuDBLywJcFJFm9Y4kptiNHGyr3XYZuSEdrRa1i1Wh",
  "key13": "2aCGQhnK8P7vBkpTTfyfFcXerXJKfEKR6Chcmz3fiNejp47Ft7qzphiUfou9Mdpsg7VSVLgVxZVMxdLGkhyHWnRh",
  "key14": "5M15jAsvHjXEzm5WxEuvGnKitriYH59hYLmx8jxAm2mXXyRcP3mQpyzddrL9RJfs3n1epdaE3ekFH1DzsxfpU6q9",
  "key15": "27tqM4LnZVWQTToML9maRPEznFEaw2ZwEG3jumbP8Z387ZG9F1bPMmvQjDb3wD9ELjvhTmBfRxrj1f1ZoWtJEm3i",
  "key16": "59GSd9rcsVME9jiWfXkT2sTQSdhB3rduh2uiUB12a7mxN87joWagb1eGck8WwdwhCSMDqex1nbqA6t77e98ncjpd",
  "key17": "2o5DmPsGBzhv2amL614yvkAMygJZk1iju4ogTTQe3jJ9a8ye5hPDLpduXXM7TqC1WGAHrWFMt8d9hwVnDPcnZhwF",
  "key18": "5jqdAr3HGQUKLbb5tqrSk26HrABxQzAwFj3YSbY3yoF2rcJ1TGqHhZ6rnVqTLDdStAv9LA3LVgAtyCqf8HKnyyYR",
  "key19": "3L2nqpufMJuuXo2qRvbnHxWHmsT35HPyhhP4efEeJVrnjSpcchnAJfa9YyvDPqW2xnJJx7Bx1sM14FshV9feGDYd",
  "key20": "3Q7sctTK8vA3DQe4hiqphZ62382w1eWx71ughogwvE2tciPCSDT2Fj7osFfWpmPPa6RbYQnZTaxoPetuU8WUyXEs",
  "key21": "3weKvGr21VNCwgwxgQrRhd2wAB1BsZoPtAsXjLNdymXBqzSpiRfK2H7kqyiN4xF3tUhbm4yPBs3s2MhLUVrwscR4",
  "key22": "5HProMFaxGAJCGC52UDb5Ua9YT4TUhL4SR5ksGbozwvJkNXZwqw9nyLC7YngbMFd2EpTZ5rRUk4wqxshLjdANTdm",
  "key23": "3t35jiB5CZcPAYQSBzqByeXAQ6YrguDSwcaUZMybFi2zDJmtPgXzFr6pyXeFsfuzaoLsYSYSmYbyDtYr8UGGaZLR",
  "key24": "4Rc2wMSvwESAUK3tczt7ULh1aUiHkcH89AdK6CrwboRJgJiamLarmULxpK1BFJQadjVeUW2B6VHMcXF65zfhwWNG",
  "key25": "4cJNYf67KoMCcsZiQaSZF6Yh74EgSpDkc4W3c62NJN6fpQyGjbuwJvALifWiMia7Abt5GvK6YGNipwyccEZP9Hpc",
  "key26": "4vcRjB932KQzsJjsdj6aT2VNHCrsbT1FqbmSwMEozSzNjTbFbqkApMHE2GTrXtfiRMTNFQNSLido6TLQHJuU2VcM",
  "key27": "4aYaeSxq4kmrNFZ7eSE3RobHckkWnAZwDzv8soUeQeWbsYxYhch7VeLYRJhMq4C2f5gHqofAHKAvJdiJccXDbYAb",
  "key28": "2F7c868K8aP227b7dXDEKQLDAFLzXNbTSiiRwCVsJR2QaHBLRPfQ89mAyWmwzgz61JwNj7vPrZwcZqg2kE6hTsTc",
  "key29": "4qfY2UzRGrg6qDfKQ4AJd93jMXxy7zqRtpn7nZLi9ZuCS1kMHmD4hdzhxMm3CgKLeb3zesBBFX4DGh9iPTr7BD81",
  "key30": "Q4Lng5XurLcpxkCrni8cAF6zM7T1HZs7PgdZMfaPQQ2LFBNAfrx6bnPRi3nzerzpk8YtFGSp8JKZsK4P7sKA77r",
  "key31": "57bWT3SXwm74kK1jG2pGjY8xp9WrMyt7gfyztnAHwpeWZxqBg9o9KL9VySgpYNXdhvApwLQfhne1UhUZGecjSbEr",
  "key32": "5e5AEu8FfiSEUb4CfwjxDzstHtvZiz6RzmCMkMHJXkmmh8f7uLmmtBMB66XJNyp9LCmx6MRXXaiiVPnj7UAev1Lx",
  "key33": "5NmiCTH57AR3r4W2YcDzDjXNSNdpM6QTKLyyS2CHdfvrqif2juHG7JrYFouv78E1CFD1rMRwFnsZYQH5oNu4Ew1o",
  "key34": "gRbZdqBa3ywFyXwJH7rrMkAYGgBADvG62w255B59WLJdhWpkSJYfd1eciAnzTPn1HjwhzifVLa7HbrH5VxtAem6",
  "key35": "4Pk5p1PZXqztBvBvszSs4LwicPL9zDf2m4PMNx7s9FDu7DtFUtXnhqdQ4pntj685w6mAf9YGY1vjrp6sYWiDeoyi",
  "key36": "3jM9TFHmWJMB5htZHAeALeNEz8tnvBuaRnPRvGjUtYaQXA4igDuGB6d8vjQ6C7y5LajMmSXyAdwrEyf48rGnuXDR",
  "key37": "34wfnVtwQW28aUCf1yfp8AY6hPGcJGSLyPw2e7Fow34CimFjBpHso4K3DLQksEVT2K1Y7aLd2MrUQnx2Zh7sk5iP",
  "key38": "4wHLFSwyre1BYR6skGh5GY95GdbrZFZVgEcLQW9UY9LpuD8XFj1o9Z7U7u5EPvCgbsnAmUwYWNazHRoX2xhLDPcZ",
  "key39": "3pyFDG6Hh3iQ4froa4UfMaU83uph56DYTDzzKmim4ywYdMuFYysjh8WsKagZBihWfuaPkEtYppMJKCcSrXcmTmYP",
  "key40": "2N837BYBGbPZbp8HHQCEUzFmmzPhYR8VeFRM3cKMn4oRXDy5N1BzKxqkZ2PKSqztPfJs1JaGtCY29jbFQqJZkuCe"
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
