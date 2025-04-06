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
    "5hnLqpMVMHxSb4gAyHdbHpDkiHe5XoNto1KpGcheGZKJM7yuaMrDEvAsL8Crki49LBKyW63urQXiv5DWa32CkGwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXWbSbqB6EwXbHxsJekSVn2AVVHZnSN3ADGJZZFY6rmk2KeMFdk5TcB2VQFtrP6TpZJsq1r8EZk8VeqMjLR9Yac",
  "key1": "2kWwfNBYMv7ZxEpMNcrNaR9saxTwFTAm8CuM9io2abZBny9NKfsbgkYXmd9pfTk6JfzuNJ7JaDLoccht2urSBsjY",
  "key2": "5yTrmKojAJMyrTpFkhfCm6ZjQEGE783mdWVFxC4waNvWACxJyE83FeuGjZrF9rMa1DfHhKBHapYZRJs4b1voZtFS",
  "key3": "48UffYHQJwse7X7ExCY7cncg78LhXn7Zfvo7ejff4sFrFxr6h3aemcAFbWA4kJijPf3xTwNi5mLyNCV3LC8yJqv",
  "key4": "iZK9Sxx2Hpc4p932HJ6zwTyMUDgzVVWMG28wRvKbnLG731UewKcPUD6LuHhojsvm4nJTaFNzt4uPvnEsEdZVveZ",
  "key5": "5VvSCtV8LNBm1EYec11CkHqoeWX7HoGm5PshAD3bu1EnNm2PbpJjwvGSkkhxFwVC3z1o9MzJeLYQDLB7mEv5tGot",
  "key6": "2Z89rpsFwKciVEkiXCgpZXXqix5rL6mf4TgSAd1aiZSgtF8XD2PUwc7wKyNBHkZU1QaY5S1QkHgcrbhNwxnZvtW5",
  "key7": "5evceDy9sMVf8MPSBV2UDqwhMCaHWcsLEv2D2RhjpXwH4WPV5DVPshK7EzLebtoe4mdAThE1QqVGBVN6Wvjpv1UU",
  "key8": "5ditgR9cHNywSMzSPZejq3QzpjKuzFdnyYaHVpmeQi4VTWeP3EZ6anNepMmHFhSQqzQKcUNaSaLmRZmuAQGfcWxf",
  "key9": "8dRBZezggfQTFDTzKG7tjeL3rixfyJxZPrGxkXjpFJTY7DwwzZGpBhPqNCqm12Zs4HNYmJPrt4P6AK6CwfkmRmJ",
  "key10": "48i4nKKfZiXXVgbCnQk5hsr8FtBQojuAzqyi7X4vdut9oppFjABSwKqqxq8aZpP7iUU99eRTTxsMinSZHue1MdUV",
  "key11": "4UCnDycjuoWfeubKrwP5oD4yzcSHrjXcrJhgUExjYcf6NBurSzRmpGA6MwdiAtz4ZZvsZFxskxN9ztCgcNQVTpJv",
  "key12": "whZcSHGEDZYMUTXfqA9xomGiJWQgzAUcYp8uGAKgf9tphVsgMTChMRz6ZZ35NG893G82HDzbZRoVtsGKCWczurK",
  "key13": "3n3Neip4o6Ruj2jNTYu9LbmKj9bk5RoNW28b9u4qrY5TiRPbKg4wsGmRbi19PukAW1jLeUUwwihG8FMXTSCAUrq8",
  "key14": "TN7uHNcLqMTD8NNvBFmPPX5RBrrtxXteRjMt6q8WXt8zMLGKdNikvheDXmZy2vLWf21riG7tpAsGj6Hi2VYtqo7",
  "key15": "5hBRpbBLJypRYqQAvt5ym3VV5pMqDvhGTABmKBGo6a1nTmCguRw7rdR8vSHfjJVAVib1X79SxqzsJnqM58f2PX3N",
  "key16": "4pQJLbk8VBjXt8cmx4xfmHYh4Rrig4dTUGfAv2j2W8FrTisr4AmTnfh3Jv57cRDm45YbNJTMEHP2UkYkbmDCLxTa",
  "key17": "VBomwXQ5Bn1z1s8sF86dxzdaGXVGTPv8nh41pDCumKhfrV4X4Dq2a77729sQhpChYANMHo1BTyNKRQqyh8R5izE",
  "key18": "4eBJxTS7QGuwYKmfmxsj5Zxjv3UNsPtk44h6X6MjM1azn6suHwnKwsoWTxw1PdvUTaCceHkSBZwhCoDqvpd3LCUm",
  "key19": "LMfpvm4Ad8HCHJrcz1LdDv2uaxDEGmKzQMdx4r4nb9nsyo3ejNGnsabELSESjQW8C7oaYnPuHaasqrhHnm4Qovt",
  "key20": "Hz5PipHRjCSawWkDne5Zms5BkS7w9qXxk8uzVCEAMiEpQuaG64uoSXTYHyRJJQ2kH7hmMoZg3fvTk5AqfzmwCHt",
  "key21": "3bLyPiFD3h6ufgbFmAuiWeZMd5NxMUJaCWtrQmgQAeKhvfzWyY31wLrKyjBLduwYqtSF7poMx1pQnwKmk8BU8VXM",
  "key22": "2eq4552ndQXfBwQ7AUM896VQKMZnAfS76XokG3ksTYVfiD2wKjZJnPMT5huhcRiGzSjQ5dJasEyQRTwfUnVZXo3D",
  "key23": "SHMBZdb5mCC7rxDXEcKPtamUc1bsBt3nLR8fkBrYh1KxGnLJfY42W9SBTCoaca9MHTugNGkAtgivk7TQHUmfYVv",
  "key24": "44hR6mj9ZZSGyrbz34V3ntFM3zm2ssTt5Ar31PoDXHSceuGaSAL2aYXpFypxgcDPQXBLqLafrtJLmVeYb3cKGEfr",
  "key25": "124WY8mg1J5hya8FRMsJbymQr3ZVP9uj3LmBEHxhudtCbZ6AsDu9MougCgYQyYnr53vfa4BwHStMxHdQtke9PnKE",
  "key26": "323LboZGKk7j1ERrc1X9d7K7uLejw8NB5aWTcFvzae3H2w2at2xt5JgZGkXrkNR14FmyHAB8iYEdsHUWvVopFp6j",
  "key27": "5kJaRDgadnHkfG1EfsqgXMSwjKTF1bH15LVkkscAv5QviQWxeZ7dVFxkRggVRzX6tnCUeRFJS6SpWFoMw9nmXDUD",
  "key28": "4KifEYtPiQkPZzM4Ec98cq3MY6VsxjwJsM1pq2neSdmKDnhbVTk1HPxDy8bfRg2ejA7spMvpXRcRVznToyzu8SFf"
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
