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
    "4VHfVSKaWQKoidWw84p97WuFZapZSVidP7HXuSHPFNxDBCTKpeJgaQYB971HFtGiCg4Re5EuL92R4WfsA8psBkYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hTnvcjtv9QjHK57ZgWV3GzQRXk8wXz8sJnq2VEtzDFTJvd5gcaEQAbjp4h8LuLcb5J4iLWdQnpafM9earzn23W",
  "key1": "5SBgbrjFyyQMEyHob9UZyNhDHnPtKi9svB1Vmn4wLKpzDEigpbgSVUrGMHZapBhUmqqg6amYmzLADkjVcYBDYreN",
  "key2": "5pECTHrhzMPQ2ou4SypPnxd1XySLmiVQHT7kCEgWJ7M1P9JCcaEont4MfeKCwebMzeZK6ojFjvFQaryxio8yLQqN",
  "key3": "5Fas8tAuLngMuJcZcr7Yqx25KJPM8i6RPXWWteSHLBaoaLbgvoxMMGz1ynDnaFdhE42e8kkFygyTSuPCP8ASR3ge",
  "key4": "4KW4UMt7fUZEPvmvzR9moZFbHundGM4KR1TLKDD3jCq153jDnQjgCY8FWwTbFSQdgsKk7LgvJPVtPF8Soe95pJrM",
  "key5": "UCaa5QD6zmkaWuzu3KLfhjQEyoZyfJp6s9PA8iU2sNucRHjkYzx4qsgFRGaJc64N7qtDSoikxnwTf3fXxEjw78c",
  "key6": "dQAX25FHTMXTB6D2W6hNqBFv8dzaHx53ZkGoo46rFQZVJt8VPUo2j4xZJnnxCE8zxMqrKZFmXqNg3ZYDSzu8qZp",
  "key7": "3SL2JV8Y6bwb3aoFkUVDPXw6jzU466wgNqaSgQ3X9StSpHFcVDsFtre7DggMfd6mZoPb1tMv3RdVZMMJkmz8GpMN",
  "key8": "5VECybpb251yuApP1fSsWWaxAktsvpwwPHh9hpnKuC8Qj3RAHxam1Ky2SUXfwGHYmJAuzyGViPASop8SBjejNTGN",
  "key9": "2FRLVdvMaVEzPqm4TUHTewHjYLLpH1BU4QSc2fsCHAwct8wh1DE8S1ioVht3W5ooWK5n1FvR5SQm1VMKKxkj6dER",
  "key10": "41ykwgHLqLKVx1XUZLtbAwBrgQSwHnKusbzeLEFPJvGSoh9qrUuX5xEXFKM6zKmCDZZiyeEaUv5pjhE6bu6WiWYg",
  "key11": "59u3HCg8GJmHgfQndUiTtGLXjfeqxfC6vjAEmS8GrjRUn7WcetpmpMEi7Nw65sk1RarZxKLTome6Dh3ozhSo1QW2",
  "key12": "5xAfeB2tbhWHdUsh69Kj76sW4yDpVBiYiGvuUHeFWAwmoCDLF6u92usHMURM6ir3HhyGH7RV1pcieoGnb5UuUMa9",
  "key13": "2rHYfvKrCdVT5YyrtvDHnvxc4SuwxVSbmdU1iPMTzfk8SEFSL2fUFCdFWCpx478vqpzfzdqdSyfPTLWa1nAvfdNf",
  "key14": "q9jJ3uBcW1A7vmMpdfCFXNE3SSQtCjgntzY9GArDtxBNvTHppzWpe393vtZhAph3mdY1rbZfPTDJveYV3zvJyKk",
  "key15": "4qM3YZRMeuaowcQCC1NyjuKL9BKkG7umpa2WoejaSeWzbuJifnE1ULqoQUmPx1tZzQUD5QZKGK6gZG51jDXSWKHE",
  "key16": "44grt2Sbawphs779fawupDoy1kKMFYpHT88CmbjLJ7Hh7LBRYFCAuKfw79ezNK1QbrjuQrNt4pPW2QsRM8EjZvnW",
  "key17": "1JiRr5w67ZkitArhTYvMP2ktQQPZmrApuPUaUsJMsekfJ5YHHMHRQhnwoHkVUv6yAJDzNoxqPt6GnnvAqgCfv46",
  "key18": "414nM3sGEymeTc76vSwZkUwpvKCiZV4pJA6nWc62naC7DsY3BuQLAAAGb8XtnPYZkXqrbdYGwxNr6NVRDC7ETkaH",
  "key19": "3ndZ4GwvpeqwDse3hiUA2Ms89Bq5oCRfB1MWnVjVEpz2SfA9wHHV5kqMgxKavTG8hjiintRk5M74hzJ66bvEkrtX",
  "key20": "4GThn8iXpwYHzsHpXG8Xw5WLKi95wKFMEd7iYDK3C7iViPZLN3Vd8yAbHSSoendBA9q69M94z2MRCEGJTpLNd8y2",
  "key21": "4LRkiqMuvmbgYVwXTjQsrPwzC3QPrbF3iuvCMY4R7xJPWt3FtbGo9LjBSusGM7J6EEjmjewCmwxovJurfzEbwmR",
  "key22": "5P5WZyLbPWnY5uZgmdLimHXVsagdGWVQiLeeTQe8c78NLyTwMyHnZxJhM43RhMMitxvEroq7XdMjdZzLZzxGYEg",
  "key23": "pmhg4GdAqUBzvhF6G8DFXJpSGmUAyUSWSKhZqQf1yHs6o3J6v7M4zZWSDmz1rrVmKf7AgQSbTLieH1vxrq9i3eG",
  "key24": "272W4b5cTBWLJJRP1LsoRRCGvDpuHdXwZ6j3YRS3NeiMmdVrd9boPT3XheEfxit1TD6RfVqbjkLspnYWQvWVGiQJ",
  "key25": "9vjJ5BUdx5AbNwGHC489HwVNMFswqVyGRmQFVo8JkRvzPgKConBzb3a5Zq4wQu8gFe6kj1cff5L4voKFsUJqhSy",
  "key26": "4YdgsZwvvLg4p334vKCsWhHjw3w7HWPeVB6PRwBTUjjzFJ6bzRgidHyDWUSFFxLwAemgtJ9azrMxySTaddYvnsLA",
  "key27": "3EGLHK2F7dTp3kXNwHd9sHCgThWYgFpXPJcwQ5KcgiuJdSFbUP6S8KvupWoheCzquRqUZpLpv6Ez7Jmy7eh3YUfT",
  "key28": "eybJdEGtwaSyL142UAtXyLEWP4aNZw1FicBHxjv2siUDX8uReekCATZFLDZ5i4DPwSz1odFaf5RwHE3SQ44PaUP",
  "key29": "4XQD3k3kva7e8WakMQpgQtt9HU9s3rGw6kqgQLmgxxjmKae1uqK6ttN4CgqgcfaVsnMbfR2fEtKrFy851JGaoUKr",
  "key30": "5jmGY1QgTCy9kst8pR8na9jD3EVxXkjxxh2sVDYLhnrJTYDfiSAWueLETXyChdEGJfgW5S6mMVeHGWqDdMrdzdAX",
  "key31": "3pDRMYqNmTZwEcshWkDZnBa1BCbrr3EH5SGcDG5bf1h5pkxNMQC7eRXwzUyuiSXNbKcx4m9Gd36UjKkjTv3KjK1s",
  "key32": "5CBCvYpwcNQHgqAAEe2jCWGn67hf6jsQ6NNuq585u221aLszqbZPAF9py4jY7fPVSbZsvvjq5PevTmGkU4wnqfm4"
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
