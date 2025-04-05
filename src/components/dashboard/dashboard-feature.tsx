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
    "5gjPwKzsBnZmuqLjNCCPs9eFNSRwnNnj7Lych7CcZoWwo3ZxdDBNWFscafisZUaPsmP4pwjJPFNidxpjPRxmBYzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZDsZmA31PXpmnZrw9isJnwgygqadRHfkD7NGe5aA69VrFQFkFxFnAgcszA13rhtUhCzihei9Sw1hDPAHa6DnwL",
  "key1": "Mw8ckUDVv6sMUiHK3obnUeBSCKTbtnDXZfnKCdAosdsfxmwaVEB7n44EqeXckuUhspveAgtyVDudnuh9k8yCN7K",
  "key2": "46MWc4rPNAnyyLWhk2XdL93kYBHWcvyPFMKCkCeyH2aeMuqUk856Sbcm9ttaFmJwfRGzCkKwA7cgpLK4ZjsBZG79",
  "key3": "rPKUUj7FRHpu9YTvXGfcu6ExdXgi6GHPLb6AZRAJy3dYj9dcSukZkQyChg7f6eXHyACvcNtLRJdi6wRQCd4SULr",
  "key4": "4dmdiiMBvjZvb6uSt8pbjCjxSHfkEf7nRB9T5cBinpKPiMYcT65AyBVj23Cv5zQffnSgW8iYuvw1cnBRdFC7XdbR",
  "key5": "4hikATBh69mKv6tcoxeASg3hN9Z56dwaYNGa67uuEZvGjdfpfo8ZVShJd91btAHTbUofnLu77e5GSimsVQ4Aja28",
  "key6": "ypnxjzPC9UUdHBFMrdmWN59HP2PtR4znh1rbDmKXoLRS27QiZmcdAPdUpW7sDdwksZoNHBwnEfJM3NQEypB8TjQ",
  "key7": "5dgjfQps2652yduFydQU7UaQn8EqHF53u24MRWRBbwCBPbUnYmSr4mzajphxtdQNkG2TgSjqEr9cxMfyQUm2Nwtf",
  "key8": "5wLgM2LRcFMQ7cyxmwwZiP5FYBvJYndus2pAdnKBqrRz17xNmXhDXuX1WMQXaoNuZMMtwQfaHD9YQmfxLC4qfSnx",
  "key9": "3Rg8Y4qZeqjb1jsPZ3hBrZQXmkruNJgpZcpW4PnBtPWij4y9Pe2vqiiC8unn5MWNdNayME3Cs3NCrwBAxxsmdteW",
  "key10": "2Je7GveWNJFMJVxBzmdHwbSyijUoBuKLN11DMfDZsZ7ceUMYiECnQpCnhGbqRoA1uYgPHD8igPyXJoM32iPRZBYt",
  "key11": "5i1rBmS94Z3Rzi6FkSAXPjzSnh6xStYiBjn23KnoGVMooazehkvHSWjwmZzSaE4TY64Dr9bCgzz1PmkekeWNxWXB",
  "key12": "2gZjKgzooeixyW816eAKWGG5xqoaCZWcMDd3eyChfXmQuuX9NGAzXZqVbhsZ55NKU3yjgLdaxxibcoJucgwB4FvH",
  "key13": "4enMJnTTGd51126HKr4HKdMrL9vvANZoMUJb4wYB1hvyY36SkTN16QQvM8gZ1W7NeQCxw9FPUxVBEkXdDHQ7Akqu",
  "key14": "2MfYSvQBYKtT1fthkcZU6K7FNNkw4BbXD6btUbLf9Dveh6xNnHLWZA5j1PXNXngHySw867X21TR8hSpsBX7Rb4KM",
  "key15": "2LVCUxEUPsuGBLZYiMt6vY2rhpE2VSBZdcsZ6HFPuZaHdP9Z7shc4uNiV9CdNGsiv6EVMTHqFxhR68SGEqDc5x9s",
  "key16": "5DBXnEyCveMGBHMrTTWePij2YyKAz2fMsLCrZBjPHt75ib97TFv2frvJrV8YYswTJXRvMQGdSJUjMXXFV9y7baf2",
  "key17": "4dYsmqPBAJESStTGWP7UZkwb5Y7vkMr1fWgyYStrHvQwTd7t2XZnme9ENCxZuVhemQccLSVppW9t5SpJSspzg3TR",
  "key18": "4Tugp8u8pgCCVhhb56c1vAFrsf7foPbKAvMtMGLiKF35odWhPtBvB28YRoZLCBs46x6SUtCj28ckGx6vrHnxaZ53",
  "key19": "4DtY2NHnDy1yaM7Kk4sZHLoWD6P8P5D8wiPULdF7nbnPM7Nz6FnPSG9zz2nboUrW6TGnrmGh3vVTpYMLUzYZeZQP",
  "key20": "2GMdKtdAy6f565N3KcoN8xYqCXAwscgzqRZBuK86B72Nm9HT7bx2Js7UpHhhviGNVQG18DsoKbFize1QTUYGDL7q",
  "key21": "4ucPyUVFuUg3nxKktVP1dDDX2DwvJQBvdntmKaTLCpMeR4LNZkLBDdsat1GE2pkB4JdQYWCs87GUnBCS6WswNpve",
  "key22": "4nyrqCkRAwPBQ3L2E84PjEBYzg9yaAkVD6RTfuSHsd8iqU1HzUhivnMsYzRjSScs2Tptzuqs9wDKQxAQeszSQQmG",
  "key23": "TzfNozT32FGriWcT9CnhZurQgKrjwXoRKJJWMCvYxBGr51eQw9dzCjHshtScqtMqWYFikSrmD9BN7EuxY1GDQTN",
  "key24": "2MxtAxdpA9h6uJZXqs1gr5yZZDGhVmzBLswJXfYrwCeQ2nkQgiPL5hBoA43hEQnvnz3Nz4ZAc6UGf55xKgLQAJ9P",
  "key25": "66hjkiiphm4K4z7UAqKiJHssQ6jMigHXv9WzcCsTLTF6ho6ysgZvWpwH2FFJSoKtwUhdjvnBGYVspvvSwDG1Xmvj"
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
