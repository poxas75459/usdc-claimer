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
    "4UbyT9UV4Qk2bDH4vcUq2guLuPxG1Gq516iv6Lc6JwdMYKTGYvSHaAfPrAjHbrumgweNAxjLWFCsz4Yjo9Y4ProJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXgVDiYD3WTSib3emorRGyoo7iG7w4Hdbwym8VFDSYb13pYgwMT9MrD1BYTxYDSYvdSrebCwBTREpePevWqtuGM",
  "key1": "3YAMjaBdNkw3xm5svJmr6ZVHj2nJjDx29cozVcZPkACCnhbia4ueffa9RQnRK7egtRzQX2QyDmcMj2GGKmBJa2ja",
  "key2": "2ijPELYA37X7uYmYkFLG7Co3rNMZJdid926NDFoy8stBDCYjxvUzSPbc9ocN6qyxezrSkQaaMJbYDx1EmBg2Mbep",
  "key3": "874pqKeA6x594AKCBctbeV64LtS3rcwQp4hm4RgVvLAdczs4Vx4K6ZPMdXz51yfUUU7pimyQNNgyQ3KdNZKsUhU",
  "key4": "4YViPL3UgXEtyshq91fVy45TimegnG1UpWQ7AM7KwXGVwpjJVBe5rUURxeGmEXz4vH5FHnhyjsLjavL1mkJXFtmV",
  "key5": "3wTRwKufiEtgCkrWv4WvQGHB7vpMJauYA7TC5bamHo8Yr7mDFPck6GoxZacY3Ey4cDPvBnpaS7wz5bDnLdhPNf8G",
  "key6": "5mRf3KTN7P96m8Jbc6Ub2q4DPMhGf7WqAzP78ZdRa46JLMHtSQsrtEKDWoqQsSWVZA3UFiVvpcm7gq2DvhMacvQJ",
  "key7": "5r34YXSFkxEZjXX1MmaC15EiAo144nKidNm61DPWTJu6rhLgJNL4nmWqjkQgjHkX7xxp8KUtkZct1ad9fbHtmjKi",
  "key8": "5cvHsDPnzUASeraizRx4jBDzcFZmNnb8kBiVbzkAcbcYRbVbC5npUAynK8Mc9QWu8FNJMMWUECMYCAzP2X11Ch1Q",
  "key9": "2t9SZdyRqCNyAcuLDhVY8qtzX6SdcwM7PbhkKeohtTKZvkEbdyxDRuXbM2NphEDpSvV3Br9FDFpLheAG7DEcb8xh",
  "key10": "3LybHKavS3MhQy3Jopx2EZ4jN5GS3xMyJZTyvxhcRrqFhbsMrTzgAU3S59VgNJNdXVDbnjGjpf9oZBaLmYxAgj48",
  "key11": "pdYUAaUrVYuT6UJem52hWMManbTjAtoHbksLcTwcjKJ6kKySL6bGU1KLNtbGiZgz8aV9C5cuEVEzE4mSi8YKBWS",
  "key12": "47ZZxgY3Qb9pGiaMRE5jENbNy8WT3JBsKUrk7ftbcqHS6tpHuaxNaphRUXCjoCxvLnwfrECmwk3XiWCNzZvEabsg",
  "key13": "3to24y9cZWU61RCQ9gTegkmw1mgLUpFA2NijKuzeJnTqMmqcWv53uY6kXrJm1RrzzzhTvU7tN5wmY6LhdGryuTJu",
  "key14": "4Nbwa4sJQtUK7upT6rhzwWCztjLmFpAsQn2YTXuUC19G9vTiKG96vNMehcKayZqmYsEZyRh5AXN4Y8sefrxcGda",
  "key15": "3Uhnm8f4zLGoVfo7pxBscbQbqPF3RHvXgZtChbzosc4pT7MNekskVCKV3atnwWATBSURGxU8ZHDwLacoQ3xojBE1",
  "key16": "3QA2XMnpZk2Agu1Rr7QYKdn5MjzmWTiZNerP3jzsAzQEBw5WrD4r3JyHYGJQ7GqAKhPwwnJqsSawxuBBT5AZT7hp",
  "key17": "3dvBRJFdrzD9jGZrBs3QhHg3AWCKCPKhLrT1kn8k2NgH8pu6cVHKoCxy7RfksarHJxfQkiPJsnXRUcxJJBy88npd",
  "key18": "5mqrVDM9MJHmYU7wXWBayU8ujJbSj8WxWJnawPLyDTB7xJuHvsdP4JTBEMS4H2pUEDHHgrgwqHVWWPvkdEB6UZ3B",
  "key19": "3eRotJTaE7mgFePNGMAzEmM3pCWR171UZyJ6ausgWHJRyNpZvzTYv81yD5pyDH7kLC6Xu5sZJyvDDPc7MPTn6Pew",
  "key20": "2BWU3QCVYnbB2VqchnvRH6xAaT5NXqRtEBaaEq5DQGhrYbWRwG88G6HS2ZrALMDiM17DjVTbok6zX4SNhcbR96Rt",
  "key21": "3GyzooVfegW3JTocZQuZizyXDNcvcw8TXQJa4KwMNB7RJDCuRM5NDktEsxEXkPubgURp5V4ZzTa9fZDtAiFc3MPn",
  "key22": "5Fh5C9XJ3svLEVrLMyTcPa4C5nhYNnuykfTK1PJto5MC4hGT4ZEGwDbDYmtnFnwX2FagxCVNm6enwZTBdgKcfmB7",
  "key23": "5fw5WnywToK69ZhEVr3cZJRnzcuifcWpJhruQp18D3sxPNppBdc2C4jNk3fQebg4AZ5wxTst7yafwq12XPN55HyY",
  "key24": "YwoXSGhbwdDuasjPXdyGxFMYNtfAAcvaquUirdfZoJmDHf31iKKRGPQP9kAZWRjHnDQBFNe7UmAryjpEVKh87XZ",
  "key25": "4rfYux9qAotou81ykhiCU3xtu8Qx9NZSRmUz8vp96KBDArrqTCpCnUTZZiDtxRrwvpReSJLyiBbq7AmoLwmVBCVu",
  "key26": "1K6TqeUs3FHdfbj54TQVkBti9aJMizLNRRYFDZMYeWXemwbJxc6aF3kQ1aksoAwJPrknvKAZvn4XL63MbMSCjhj"
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
