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
    "66TrZR9aKrFdicHznAjxjGZ86YYcACeAu7SRhTQrWa11ihgQ7XMZssUJc9RynXUGThyur5nm9hZWoEnULmSx6kN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZXaByZBq6gbatY7uKg4k3TGFJwyMezVRSBBH7GH9iJh3k98YdwRLX7BZDPEHzDshrmYdpGPqc6ovBSdZt7SF7L",
  "key1": "4vJJf3PEbHgTPRC7ykkhy24HZrmh7aWJPy3ktJqibVnDAsV7r7G7heQUnaWx2PBtXna2YiUY2MrS3ZtUy7D29Tyk",
  "key2": "2DDUEokCmqjWkvCdCBst3hXWqGnpKNZ7JGHdJcaieXjvirW91fNJjKuN62LvA7sGeyQMmAq6CDNEbfUyBKTkfEK9",
  "key3": "2PYBbmyH17oHHJpS7nz7Gofucrmjv3McAEKE6s4BGoxgMo5KopYar9TVBErH7B6THss2PMPjaXHdp3EkKsi75mtE",
  "key4": "4hKv2Fo8pMpXhmFS2ZVbnCj1be4bDQ4gB8oioSKTqZJPduFBAn54ZVdMaGtDXGuexB6gyVeaLcKzGbPkduN8d9AQ",
  "key5": "3xfSFh5ThHnLWt8ZqZv6YhfZQyGpCd4Rw8txi1QdAwyu9fu7J7qLibQ5uW9YEkAwrR5RFxCJCzmYULs9u9dhFwsx",
  "key6": "3p81QkJQkW278TdbrGHL4S9DNVLoFAvCjm9p7srXbjNr9JGMfsy9Ce7SnoF55dnnRZNmzscExFNodM9Y3pgxcyod",
  "key7": "2Tj4BchcRmRd8c5R6PDWVVRHF3xeZugujeJwiCdiJzLGJmoHL8T11isbWeXkMH15VY3tUuy9L1SGSUSkpDrh16nD",
  "key8": "29VAxquL2fC77v8D1gStuCmhonetwgrCCthKDnGSi2yD5Dr5RPvSU1rwqrMABHeyQ2MZ3oc6nc7VHMqegPHQwnHr",
  "key9": "29fqYwisSnABYRCakKcWYzMFgD47F3JuehHr9eYJ1WQBdJjckPcWnYAzS95SjkD2MkYPD28RRipd2BXwyh8uGipX",
  "key10": "j1MuWQppDBCcVucGknggRgdGBTyCX3n3eGCFNYSvt6Z6uPGBA9LktDUVkTVK4Ym1DBnTKtnUGpdd52H6zCrct9M",
  "key11": "2TSQ9oCt8HbYDMs5GwNTj16HXGWTVPpUDEbHdn645TCfUAHPMYRoN8fEV88NBWfjbHXJHKWPRPe7XA8ujbAQwqM6",
  "key12": "2Nx9h2SGSpPJ6cDqb5FP1EZtwMEfKKG2jLyFAmSHMmusEK44zfqiqh3XMmouuJMbu8Zzvq66MojbyxhmQCTY3ETe",
  "key13": "zrW3dJ27wnarcj19Fuat16NtoFxjmsffmJpujMJk7nGt5azHKxwF8JMvaA34GFET2GnUx16mztaBw14EEoMX4RA",
  "key14": "3e1eoe3pus2dAWDMx6idNMDNvwyu7Pyz8ivCZajvEA9e88YV48bMqsx9ZhN8awLiVf7dJxCQ8rxDYTyX8DZ3vLji",
  "key15": "Y8DSg1x7XkBF46x3uC2zJHm3Mn24XcmFR6SURHybosvEgCcG52zrzdUw1aC6Qqn1WFmruCXXGR9nwQ5jNGZj1o3",
  "key16": "3CH8DcnQjUkQLtSDfpW2RiujhfoojZxPeCgikNRVj4xFnZAZ8TKYWQtDy5BsoxaTym8MzGUoDkKT8mY1rRCMAwe8",
  "key17": "2ccnzy6brytiduUdWkaaQ6XgtkuBSjbzBTQMk48hrBaw7334U2nM6mDL4F6pS5t15kKxJL3RadGCnuJCkogqDCmo",
  "key18": "37Trm3xDCAUCDTzEfFfRj8gQH49k3fw5A8kmF57T1SLh9A4J7CQxSHgRK267LwXRHxRssQinNui9bXBvJgCMrra8",
  "key19": "45JgoM1dXZ1L6L3ommLNP4NCviBFcQU7RQ5HGbEcc4kDVMxU1MaZrySgp7pN1RyyhvedZrHSxysG4DsSEp69GUJG",
  "key20": "65ZVaMtHXagC6buvp6MEfawKhS16NwDHvXauPFLXpsWGFVXJrVnVL7wbit4noMCjyu97bp71eaPW5PPb3WRUMX2L",
  "key21": "5VStvH1xPoWsa5Rjgxaz3Ez6hkVz9wDE6XLc9AggHxnqiAmnh9RofgPoF6FEZprwSuWuRsZYFsu3dD33wVVsk16o",
  "key22": "5eT3fEfRHaWLn4S2KyTvaPgaV4XGAHSETb7nKAoxn1paffZXuEoUVMQdim3EtgybmPZJ32VnbYc1YQJ1nZGNTKXz",
  "key23": "2deTsu54eYfiJ2Q3SyqpM6zSo7NSYzv1UV9FsEhV27Xaw6j69JHjuD69MQXA85fQENdEXgwJjTeAZaUTQfu2mkcd",
  "key24": "azFaNQVRc5rrrjRoSvsegq5j2ERtGSAcVTJQ6P9WV3pmMg7Bq2tEDP5vzJMYFj3XVJNZUdDAyyaQWmyZtNWVcHy",
  "key25": "kxEQk5hzZZYMUXQGwa6qgH1Zkk1M9oiR5CGxMByZWKcNdtbsrkEVdJF96wCA6fA5iLzyE6PgTYh8tuH8MTNWJvn",
  "key26": "4wzSw1doJ7engQkhhrvj5aYhXeKJXoP16bCfbQ69Na3aKMaZfWBiPKBkx2rW2ijbDhpzrNybT4yPQBTSwKphovVY",
  "key27": "472vFMpSLbJfdAyNuEUPfQhxc9ikfEHbs55vJoFuEGgs27a8JHAf9apqntgUWC1St1FjEwN78jR3JfE4iG68uSZ1",
  "key28": "3b9JutH8dWy12EYVVbY1KYYm3A9XaooUPhFpWKGtFmtyXKUEvtXiKqvfzwvxMU4vaaiksRbsF77x1rXiFHranXwA"
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
