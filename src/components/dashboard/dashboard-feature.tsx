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
    "5GP1ZvRiddXNwxpJ1dZxvkeWT9tpDRCjDHAPBTyGKMtH6HP6ff21wv9XJjcAQuwafwraS7ZU5ssU17cC3wHe2RXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HHE4mqX8dhbBjm66wqTjQHDrcTopfBAKw4HoiSJW1PNZGYq5WBCEYzwjiRpwecvyqkAzHe5v7hL37evqCrZLrb",
  "key1": "5M2rLvzcEtrB5XfiBBTw9aKryQijhCGb7GzgDjACAZLgSz2jGJQMHSK453QEkScM5YNWYdbPPC7j27aTHVJEXuZ5",
  "key2": "48Vgg5F9TKCjyXJhKqm3PqqpvoxKzuwWdijXDfBTKEXoySqt3rU5YkwKzGhjZn7exernQQMcDeNmqPAtFe4TEuj6",
  "key3": "3dFyQDdc5B1YR5WuhSSEAcPg65PeM3gzxkHBPKgLPkRKk7NDdX6SEj3La5zrALGmRJPYsQhVUKNbUwVyadctXNrx",
  "key4": "2GXXKtfMz3qwpFhUef9neWoDDPngmHfVjWrALFyccLcQTs8CKHABfkrYUXAFHHuBHAMXRMVU1quiBoi8bxpku2vq",
  "key5": "6JDa475Ab6KcFtiCvLadLxk3AnMy9C5WV4gH4m6ZbZBUcDrubHzAajXY8S4KojgPn7QzW1BmuEqam7DQ6zED6Tv",
  "key6": "5ZA4cFtAk3rpjN7eFmsWeKfLUtuVizjcRCrhXmZRM8KdmXsLvevqqK2JM86hYcaKpiv97y2HgAnkFHuAh1TUwk9m",
  "key7": "4dg4EzuGGAXJMQNxkMbqN2C4RXB5EYsjDJ8nP7ZHthoz8P5iJ1FwQDFedpm3vF3mfGkThFDY1pfjeRjZ639K8PiY",
  "key8": "4FK3ZZANA8DvpDraNP7ojVC2wWVEPjoSPowg3Zj9B5UUydtsqujpVztVd9TGMt6mHdwg8rahVcVTfWakzvxNGZkk",
  "key9": "2XvyAudEgnzGuCQkD8kLJDfvF5rh9Ky6BcfCLjRM6zQyxgBtRTZJ6dVRqXHaBrArw3ty3Xxd9WQa2ywyjJCa43ee",
  "key10": "2Drths2hL2JXoZQDkbHUbFzd7sryQzYPUMBYP5oZFvBEiBVS5jU984S4FfUByqay1dGStV13xwmyfWUEygM3oci1",
  "key11": "2qoYG9qr8gfc7mi59SUFYbQaPaJCuo7t6Ez7U8TrCnz9QZaE6wkUamq4BNTBFZuFp5RcC6idYBwAyy5KK1iP6yym",
  "key12": "3dcFfvt673mSEPd4r8x5fxEFSfvhns5zH16j6qmjKMzTpdPUfXpg1NPfKym2mYnhxZLDzwkNwNbtqKawAoP2eZ1J",
  "key13": "3uJhPZR4Ud4wJFx6gANHSNeRcMDx4M3mGRFvEYD3ZjzSp7Qpy8oVjHS6Z4MAxbBZCkcXRox4nrdJyEHqaYfhcac2",
  "key14": "27q572LBZKtX61vh1TCkLt3RTBT6prk7o6SdxrYYor3qAf7adXdm5fEKAKrx47pghDTFwjLMqHYrtfh8GGoGAVGX",
  "key15": "4GuHu9NFxuDyV6p7HqQwqMKosbuRXrKKunwjDAU6bNHQdyvXsYBSV1nKvP8EHQ8qUiuvj9QfSkK3tdtaTLeeDqws",
  "key16": "vixNEQVfzadb9wQwbKybT48E7HAbAoRJZ65E49XveiqvhvH3U2nJKpcrkubAoo7Ga9RWFRUqaTTm5ZKfxTDLjzU",
  "key17": "NuUfpYarLkqkMMVDuLksqPTwyexncZYqNf8asgZyB5c6GLDWyLevJuUFgaDZmQvnSziDj97ZvQFgsb28wMr21GV",
  "key18": "4oPsXzARy4myuFgLYUbMdgis1m8QdmTm2bcnQizCUZjxnYZx1sY7XLXhVzNXC9Frkb72udxEuzQZEekjzJsDiTPv",
  "key19": "4MR1tixkA6zKBhDZ4L1R3ttznN8y4vytvhg9khhX4oVyxtPRVW65GdZSJ9rXUHWUkRJ4vhAAdHk16BJTu1ZwEFgi",
  "key20": "35K9TpwiUE9un9AhKUmLLjKaY3iyaxifuqUddqXdXHYEhz636hDQomwH1sxUekNGG9xZRnKrQQML7eMVJssk1dQh",
  "key21": "5JD9SbRbZ5bHS1xerp2Ctoz5MbMTyCHbnL246UboPvG8kCy5tCizLdB3JrFRdaMkquJyjKv3Bqn1yGtUhAvo3rmN",
  "key22": "3Lq9Umbm8Vb77KPZaArBDA5LS3s3ivHpzdAEbLRUqp2BkHGr2HJvUPxVGfrr9F6Dibir7kF1i5bjw3G57Dk8Z6D1",
  "key23": "54ZeyjbPbNHPfc9B3qiV138CWAxfgrLcM7BwXDyNqxFjQ59PPbPwkHujDBut4Wro6q11AaBPBQZFVM1gnaz6BPCp",
  "key24": "2zu7sqNfYyyBeYHfsVjwyZScxfmUrbivTJuLH7DV9KzG5oLxx9qogSL23eVcM1QqxCJo4CE1TbroxzFs5HWDZmUx",
  "key25": "4zdMboFcuJeactQ26BZ8fVG6gqDjYQHrm4oFBn4oXigiWmQ8LEMgos2EP46mB1xoaLQZYumpUT8hnjrm1ct3frq5",
  "key26": "2TE1W4u9jup7DnFEMqdk8yv9mxsY8JPmgiZVbQ8SsF6sVBaXckFQvqSP5wSgzhgP14DgbR72RGXMZSizMjnkeefK"
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
