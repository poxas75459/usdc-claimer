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
    "2qrbLksqTVXGMA16EfUfeH3xbJECkQHgvJYtc6NRa2nz798bttiefsdEKCfeKWeZHpgxZj5S5NyKdC6JAQDadzHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXQryaCF33KTCL2C1QYT2FKAchr3ZdBScw7X8LmhQYfts7yqJA1YuZkA2kzi91mAfVAumjCHPGnMHiA2DgJiCqM",
  "key1": "25SBKR7gEd1wRwCZWvsrB3GuyuzVaKVrKjzDRevkFjpUe5qZiCw5Giuo9cUxMRFUrq4Q6bmCR4wKPsGm7Pagxb8o",
  "key2": "5H6Ht7RNneBEtMh7g7ayEHhoHvGjz3NPTF4oq9egSXpR8XhYbBChbRet8hHX4xLnWo8Z86tjARpd2yr8edLuwiUF",
  "key3": "zhHCYeKFqYB8XoBKqHMiRJGi59TDMkJzRrLroq9oapW982Sxfdd39tniKQH218CoEqGzbhUA64XoKcNcWnm2EEf",
  "key4": "5hjzq8Co7e2dnWrs2xtc3PK3VqrGNBsAHsmG9bv6xFYMhKdqyEaqyvvXJGdeui5ZX3RfeUKQk2kAEiGf8ELbZexu",
  "key5": "3KwH8oWVUPSAcWeSWG2LkCNDSn3WkWLgMHkYd8ZEme7SyVmsFheqj9enoZQRSct57foHhR4o8HodTQbEgHS14kvo",
  "key6": "4G3okeELeXpbMes2koqqTMKoQkAcrrRaPaqCkPibMyZ4GFsn5mv2PEjq4aWagMuLf3WcasTNh62dgNrid75zUsvq",
  "key7": "2wZ7MzqPwtami87yhVU9ERZppDkSFLNTEkzr24w2LGxBrki9NFaPs54ddn77SBWrBJnK2Wx3mnvCKJzjMvZMXLoZ",
  "key8": "5N24BuumEXbBGib27v4nuQsvDVHBAtHcsJ32d7DU2kXm7qxPTkzKiJ2g1N9Yvbf7kWkijgArtwScwz9vzgZQwVCu",
  "key9": "2rzPfhNX1sRbyto9NaHN5UpDd2YCwrEGgwuB6ysHN2EyvGVEPShCcbRFAnLAWqRFwNHAHyLBWw2bCRe3NRgAxe81",
  "key10": "4pVrTtPGgyYh7VhKVN5SKAEkPqCtoNi9JzxiCaiNiE67F912GK41C9X4FgzPTRp3LQW1JskXe5LxN2qRw9MD5AVU",
  "key11": "2UxPqXaopTggXdPLCeuauNJAS4SG8BiFfgCD9ZdFQpceFcwFFFqkcpKeUNvFEgx4TpS2jkoKBE1Guu6FsDJjQFFq",
  "key12": "2hwTPxBAgt1cAQz4eNm8Chn9SA2n3arVLXCmATt4WS6czK1ebGZAsmPw9QmhxgCZqYVSoDpzKx9tBuhGP1UAF4UR",
  "key13": "2vt3dePiA4zG5kVnqFVrZrJCFw6mf4uJMEKCjwqG256beR6FDW9ycWFgtK2TmSn3a87MSjodGyfKy8WAtJPB8rXv",
  "key14": "3VVN4DFMFE9oK5AorPT8YcHtdZoRbgMuZ2bktffiDKagLHxbtpA23eA8K6g2t2cK4fQeydkyBQu3sQguUifs7SBD",
  "key15": "4AcFiAQCibEvzqqKgvrCHW94F6YceNRTqBEYvSN5bhwwvdVHAVHX2hEkrPKigAmixJLhwYgVxn5YEcfbVAm7GU91",
  "key16": "8hn7sxLLZqyEmYXmYxKuYjPGxW2ghGUdiQyTQS7khXzADyLKqALEQbFQhL1y1Rp6jjivCXEF538wJD3EYSuhK5M",
  "key17": "2ZbEQAjCarWiCjV5ru5ZTMBSktgoqs8ciSQxrX6mrUGFVz2fqzRxwRbJDXsSjiCvgKSujVd5FsHTwgfVaxaspVBb",
  "key18": "61pNf7jEVq7mZp4jtxhSyYX7ZmTAABVonTyFwBNG4eQx4yPVFuL1kZdub7va3oJ8BYZRZMCSzt2BXu718is7XUus",
  "key19": "3k1myXi1f8QsqfAwvQ2ZBEgH4HUxaZ4eqEdcPR74hHxjE5hRu5TxV1j55DyWivy4Q48xzy7cJy4N4wFEz687EXZP",
  "key20": "498GkxBKTRPtqhzkdM8LhQoSvPDKP4oHURJxaQCDBVmp65YV41dg9YLdK4EJaPYsBS2o2eezddyXYwoSg6Z217jS",
  "key21": "5hhVNR5VAmnHszzGm5oGFjMjduuEPZMNsN17Fp5ros7TmaFHkWgPKFme2iyFpXyXEQsVwRssMUB1ZCTT5EKwZKQa",
  "key22": "2iDb8Znmu3213CZZvSwtuJN9xUbxBo29cNbAk7ErxWJX8em3bj6GGVYu2njzvFbz7jx6xvBWk7ZMwTmC66Bd9xm1",
  "key23": "4ajwZdB6wyPca7sYYPMLCa93iVaN3CGBsgcL5cWYWvWnjgmoevUCnMEdAuit6o9sX2GvzGxYkkuxZ85gt273kaeR",
  "key24": "3fxoc4i56oW66yCbizqv8L2uMJ4BiuuwjcyrSFJhvp3yciw3e9iZx2rAC3p4zU16iELPt7ocb3qWwAUS5FcAeasE",
  "key25": "2iMqdRAfWZaW8VfoD1eTTbfNPAF6zYqjjQdPifD8Bf4R1yJ7PGYpCeyMtcuNWeqteXJe7NRST2rjHYmDC9LtCShz",
  "key26": "5zKoMm4UUJhb5svfszdyGDowdWpdwWSGS41yb9BpcHMy6YebfLVrrBmTZDaHA1cZgi6Q5snsv4Dqt3W4ZSSEjxUH",
  "key27": "2v9rJq5KFRy1YLPn23vukS26syBBoKrLJ4roesHM5VESLsAzrF4TUtdJvy7bm1dcdupzAX3sGNKUMSJcFYxqGLiV",
  "key28": "2hUmy9qQUMkdQuiSgLvrHkJwk2s2FNQcBakkBHaYZuKJMTUGzDZsi68x1DzCkF7PHPrFiasyvU38jVMNZcYQ7wwR"
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
