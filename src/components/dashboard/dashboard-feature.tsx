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
    "4ja9uwgsJYzurC3k4pefyREdmvCxqBf5FRCKQGd1w7LAWhcLkWxRa8mUBegPiFCY9FhnbvtXhm9mbZjdx1ZaPrGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iX5hXBdaFhBT9ij1W7Zz85w2w7yGEkvczjDSf7Kaz8MiCJykD5XnugDeGvxKTtqryfcqxYoVkNiCd2FnsRvSXsw",
  "key1": "5gr9eUdKfrFZmtBfd48gwswqL5LaV4ZsQBRZsnk767ESQGxkmURV1tNBsgEEYnWYYr8xv4sXhwVb1acpSMwdSwyC",
  "key2": "5LjV3DotpJmLTZFKQz6W5wucPd39K4ybv1Y4G29Kbd4CGMJvUsR9LDDitcFSHh8Vgok4Bbczh6V8fWU4AjYsfNw6",
  "key3": "4zG98dWKyddqmkeqVcTeiK4E1wd5BUG3aDSDr9BN1geJLiNk2Uds1rrFHo48pRnR8eFzb67mHW7upLFjo86y6qUW",
  "key4": "3R6dYZKbBde3v2JP8wTJvWrneEiUHdnC3BNMiqCwQSKogNYLqC89WHL7jsyS3XNhYhbfJrF1R17gS7Cxk1NEQYJM",
  "key5": "4GtWyT9th2bexy1Jky5LqqbHeM1tP2Rhe9zc23Xdi7vCBNRNkZxM1yAw8RsoFTC5YpZRb9ThPwJMt2AoWaz3fVPf",
  "key6": "KkZRPoj3JVJS971EP9CeYnqs1Evv8JRhbFAbcw36gyLiwiAqx25tsFhcZY3C7nfxMGkdgGX2kYKmCZDicJVq9rt",
  "key7": "3m5khBTudLV7LqLWyKK2cmoQuMZvyLnoLBWWQdUnmirRUXmu7aeiEUcJw1veaxm2BnB5ejEJ8B4MXhe4vWcV3JNA",
  "key8": "3mr2fL2A6JB6UjjyqwPAVppHqT3GL277i2rK96ZVWjPq5wkRK1V8hRzQXtu5qBS8wyzsguDze5Y2JiuG2Yb5B9ji",
  "key9": "2a8UEMZU2d7ct6PJLMeGMs8EunbYTJ3MxFHrbeW5smkTUhaCWt6pk736ERKnVb3Dvtof3XyJyVfX5A4cEM7FSUzY",
  "key10": "5sxcSeSR8vbdbdk7tDqW4iwqX14Pek3QveB2KsxA8Hb8JwzucqpKu7U5HfzUMvvM7CVkCcXqoPMKKZH7Gc3NryX4",
  "key11": "3UusVpG1djYfXHmfFb5T9oKramKCtvENSyrUF9acGaPXDC2dSoRYZtXTw1Z1oAFaWCY8BsWt3mrJGFjYJ1bpyHVP",
  "key12": "62aXLEN5TMbioCDBhLhja6FY7d4jer7cGCXv9zSqQGUtDojoTUkCByzL4oVbcrLwSXFNmPVqAsG2MqomZwQj5emf",
  "key13": "4tiHrzt7rXkZ3s64PXeNaSL96kaKrNHQ8F9JLZaFdCaPQoqEFsNzYyXqhXj88oD8ydVc69JRPwrrAfox3aQGwLdQ",
  "key14": "3F798yncDnb3WnkJqcKj6KuN9xHr5VuGyvsTjrTYt2LFXhZCMg4mZji9nSSSnXRCb18fHVJPjaSksp4nGMVD9JPL",
  "key15": "3fEd8bcNXFRUNhEwSawxmDw8xtCDvHAVVBF5DAeGMaBSbHQMrSv8YdSjnZgR49AzakAVsCQ7kmwHsmM3G8WeEzFA",
  "key16": "4n9y4XEoP8kh6SnRs1CtWYPUdJfQgaBkf7pPwqMdAcRyKeVnFNu3QCwbkVTDuJ9Ahkfs3dfdcs7Bk1LQ3rLqZdfq",
  "key17": "3iiFGpkjDSAdzs3t8ygdatY9uAj1X4RXW279mK6MYACTQYJY4g6HqxUhtJVNdfk4ykQuhT3SD8vTBJUpBVBdSLWb",
  "key18": "2gtasX44Dsz4YNjA5PPpx6dNPCb96CLbJfWMhMvJg894NurGT7i31feL9AwhP5a6qh52QSGHYNa8oLjS6Cg7rXt3",
  "key19": "j2KdkLhiFJ2YpPxYgCNJFGRQnLZDssAyZYf6m9ZR42ioEEwXWKk1Avq9uBJrioroqJJw2WeBMTsNUuRK7eMqyb9",
  "key20": "729m3vxx53EXp6LznYocGQr7NWWfo2R1rfDCJUWtzW9xyfTP37T8HUGpEwBKoMnYQUcbrFvnmeLqcp6QFFfy5FB",
  "key21": "4PL72pLPLhV28XfSCqHJyXpKeNNafVrmwRpsNzmyJi5NQ1dATRBbKdJw5eVq1F3LxkgW32BhfsCCCLqc6rv4rwm",
  "key22": "5UY9pmsbw9s2jrZMW5VnoFPcdSn2u9vo1WUvJsB8riVoG3Na61HAy42Zk5SxzRG4y25tpcdajBG4DhJFYXLTEvZu",
  "key23": "DSdTJ4fgUG4bUeqhvWUez5hJcAbV3LQF8HwYytDDzrA8dCpCwomHJRWTcWnw4n7yxNFJRrnaktUEJPrmD7sC5KR",
  "key24": "2qMhyiQJhkwgo2RdXVaoSa9KHWBZ8odYhCVh7Ve6vdM8Q1p9EXj12oftJNqzdGEHydpc9SnhTwvzci43FwzJRb52",
  "key25": "5khJEuM1JjjeSQCSUU8ZEmk9gG5ubVJ3o1cCb5TuWapdewr2nQ2WPGvTvbUS29A1r4FGkKsx4rqrMm77HBXTCgk5",
  "key26": "JZSVfuBJ9NCp2EFcsEChxjJZ79TJ9qDjbpshvZq4DAF7PvFQm6NKhmY9Lvuk3Ve7r5mmdmcCmfM6xNisYWkypKp",
  "key27": "3tmZwbpKMGrLBGbEJ2zv49ASWnwkhHNgpTV6BqNFUu5K3gYqeYqNfYgieGboJZ76HJ8JbteVC8d8GnwJZx2CHRWZ",
  "key28": "4TqtJ1wNZr6deTQCqxaxJUrjnKBA1JhFRmggrTsd84ij8YDuFJwU4gbuw713SthNhY9QL64ev6V9mFfVGw967HcB",
  "key29": "rTcJfUevc1WWbdTw4dcZ8u238WByW1bcpG48ZiLDFwNDdMYDhdRsbgc16EmUWiQfirFeKJkma4behhvewtPATLc",
  "key30": "2g1YyCQ1kUunhq1iqCZKWwTRM6ejPv3rCyzLeiNvaAwGcE5MdgVcGp8LiHQPxFE8g8Y8i294Frg9BtDobNnaos28",
  "key31": "5ZJTndPyKpFzUWRpRj6qHbY4r62ciNU7R9sA9dN6L8GNT5CgWA11PU7ZShWLuHa181rC5eVqS4Tq8TT89n1P56ZA",
  "key32": "oFzVXMK57MAmmK5Ttc2ZKKTbypvJXbh6ePt9ThoSbC29B97CzdqEEeVB7uUQ7PWCXchALc1KW46Fp9JLWx5hz1w",
  "key33": "3QEFyowi7CKztPW2YTxn5g6wdsDS12SE7bTqHL6xDQexRDsFrSu6Snq4msRzvHjrA1ENahn9UmqE6uUGbN4QTVSD",
  "key34": "2roLssVyGXZQ9GgzdRCpWvXXXvkNpDrGqKwTbB5R9qz6whpCTfyAJLku1mPhSTC14cEWX16rvs9XUFJPLChhnyxx",
  "key35": "Y6PiPAw7uFnCmC7j8x9tGGa1dRpN2qE2cowtHnS2Uxo2vKSF5ofk35e6L8BYfEDgvADMMfRCupQdyFAXFHS2XMp"
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
