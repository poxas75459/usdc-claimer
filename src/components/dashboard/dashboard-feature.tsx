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
    "3WGwcbhTS45WcMoZR7tBHCHT9fW42TqQ6PCHa34xwUD18bAwE8Eyjn7BLDJAf7nHGehGCdeCJmhGXJtLtDNK5twN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593Nmwxt8mhUGLsz2gJYnkF7JBA1HVC9HrNwtLYFSdtCTiPsJthHfZmM2h7TTge8oRyRrL8iNPHyZSMwVaXiLkN4",
  "key1": "nNW979M7bc5oz7UUtohBhCgtFW8BCwnJukJ9PL1MczKaMoCC859BPpNRYYjS3FXy2guYU7WjjLLwhnSYAcjg1u2",
  "key2": "EZZrtdDCpfKqc259bYE1avuED6pdY9BDUhcq1qmVWLB6dtNSGs6sQG2nVNSQeDLNSiZcqjaHCEN9o3Zx3QtnyPf",
  "key3": "282ZQgRnNGDo4D4yGUwYa7YN5EhXpnXMrEiNyVg3qK1MkqMPMTHw3o1o7qBbFQzM2UpEZtWnBbUH68gsn6j4HKmR",
  "key4": "5nDop9WgxGj59ttbgo983XcYB5BMyBohfksZwJ8phXmyZ3kZQTMvdJ7ZgPqAE85dAerwBpkgGCZ6Ta1oDQ1Z8iLq",
  "key5": "2a85iwgYARqkJS6mPU86vMcouxfRd884FL7V5YFAqEcWx8hz5oAsteQ82eXuZM5JEC2DVkbMKHjMmkBLSwreS4cJ",
  "key6": "2no1jmeRzUN69ZDECwD7dGZA4jjDBYEQSJJtNDKB9ZVnbSFGFwsHYqQMLs7UKkuDq3SqziwDzaLHJjkqRMzde6jY",
  "key7": "5kbRV8QYTAvDkS3MGN9QHzNXpciBCmcDwPjEvNqGbSaJmGbwWw1sxGQVXHQgXZeMsv69AE4hnPn1xywJLE7qY3V9",
  "key8": "4PCDqjHxoPVatJuN3D92r3TEqyWxyLa8nAwv6SVh1bhtWNKJmfuskd9hruCnGpa3Ua8ErX8qtkQQNcrd3vUwKgxa",
  "key9": "33YLVA61tMdtR4c5hQbZkve9s3GspZ5EW16PjyVkzSgBcB2pqLTuyKkjNkyhc2nZj29fuRGJK4WpHqNVmh389Rgh",
  "key10": "3K3ehbg5i6ADJ1eHtfzYn6w6NYbuZQjWcTyhysQVumj1F3hZYNZnEBX3bdvnYj9gHaEjwqaJ6Mn5oyi82S4GWDLv",
  "key11": "5nFkiM76kMLjfabxxna5JQ8xXK2G1q3eMRW8RTKSbW4z2ohPCUKrHDU3dcngJK3ncCvetEhCTBbFjMzrpuw1Au8M",
  "key12": "4EkHJRbxeh8b6aTUeth7nF5VsU4v7J2J15mRa1g2cuoMWUUphz2sFwJqbBLE5JEUUPBmPPtTzoonAV4QH4NPBydd",
  "key13": "3ZJ2G74kXkVGV3PTKpuD44Vzq6FFLz4VMa9EoBSAYDpjf1x5vBEEdb5LdkropFiBnGjda4WSLrCzxyPETmC2fMQe",
  "key14": "2i1YVDs9LPhfEHj5UPt7xpeVprwvxkZcwoktYPYfpbv3qErqYkeQXojZUmmh1pEFR27FMB7Eqs5RnaL6UDePeDgv",
  "key15": "D3UpBQCivjV6efYJXC8wJVURbdoRXL6XmyiuqocEtEkzb1wE7VpoApk1mJbopvTzBHbMoXyww97w2xywU4wKjCG",
  "key16": "5UxucULAgY6UaDt7MJuyGmuAWXTrGnFfpy5bH2YXqnpP1xR9BGebJZ5GnY4XMJHNe9aUxnh8ppL8P56wZV3dQ9Np",
  "key17": "4ZAcsGKsyM1J4cFqaCzfduRkhV5MbfUswtCJriJkJz2pCCR42Vf3obLntmwqjsamTxNEHFLpgrQfLKgB2AZG8Gpy",
  "key18": "ZXDGpR24XaB6293ZbP3iwBUnyw9DpVvEbDFGDEHuoLLEvN6CodpyqwBffdYX46v2wARLM2MVujfLKvsrXEmc8Lk",
  "key19": "3VjjsCvT9opf74zZ9vbd1GLJcz4znSUXmFvpQiHCuajHsTNj4i3yD2HNkk1DDapTKRm3kMVsHWxTt1pBV4L9jz1T",
  "key20": "3RoTBgrtmum6poqqkA6pSWzG7KkrQPA5psVRk7Pn6YmjRv5C5kgjpnG2LwiNCYa8Juzee1m7ZgFACBAyYaxQS6RD",
  "key21": "4hbj8rY19S57Cipgywow9QXVHR2bgkY2TtP5uya8FAYgDUb5TYKKoKcfKKJD2NEQwtdbPYEit1ivSgBxFWsUjsMq",
  "key22": "4HEKLnQ9HhZ5C8aYFeRBzrcb6pVd7Y8QiJBFHxkJaWP5n39hdAMCgg3ZVEVZsw44bpFwLDFKRKbyYTJW8xTw39oT",
  "key23": "hN7ZgbmG3Tw8HE6oFREN2EBPpf1prUDk8Kvt9V25qbFJNubNCxYUWs4eZVPoW4kZ7874fGe2YQHe6Bc96vfiCNa",
  "key24": "23zuTrCNxySBTwV3WUg1r3QSb24EJwjbwAe4x6MFYwp3nsGHNoeRTPxpFoZep44siHGCGBgwb4XCBedjfsUBULLY",
  "key25": "cGmmTjCyURgaxFCU7KSn7X2kU3aoJ923LbJjRGjEsf4LbwGhR8SFUYKDin3K3v53K1FE9AkMtiJkvW3mwg4wBi8",
  "key26": "4XYgxbhwicUAouVVw8sum1Cu5iXWj1wptx3RgzXzaddzBbU8MqMYA99Cq7EeNw6Z2fxQ6T72vzYKYk6HY2WpCpUb",
  "key27": "3vmujuW8HZgYfH4pvdAUxugSL99Z2vERQisVm5SfVSev5dqzgtwGYDMW9tSSn5vm1e8L3zAbcKtAGjZhkjgfAifU",
  "key28": "3eaMoxphGAY4MqSW8r8t1jjAv2Rm3MQJX6VtJWZJ7DFzRQhL5AyaNBYZx67XfT8zejdwmDajDk2QN3jesP2i2WvR",
  "key29": "3C3CMaSEeNvnsfRgk43CwyCRhkBDvAxNfPk9m1ByLgu1iWaLMPQRcgtXWWDL6jsyN2FpPaKxtu8ynXz6J2NjywZe"
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
