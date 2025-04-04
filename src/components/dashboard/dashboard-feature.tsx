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
    "3fVSSZreTnk7Tzt79cQ5w7kdQxjUb2m9o4k51XywSaKW4Ukxx2jLtx86YsfUktS9hJvgMAjKvrMo8abef9X7hrSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKF17H5HRy4LMz1netu9X9MY5uAGQszG86EuhycNqSJc6BtAnNDRsZ2P3ddSYFLeF97jSvsgCE5j9dScpEVkxoA",
  "key1": "oCRmPfnPYZ9juWWLV79kVnLTiZu9T3Vifx4AWEWtcuPCkqqdSkasBd4p6doUhQxzDsyVyUpGu1nCPc537S7k1Ka",
  "key2": "5y966D9G5D7dF9np1v3FR2xDpBABviDW2TszveaSkPLRvNApv1SPig2BhPZseAqVdVKe8DrDNpKhcykw8BU1tX2k",
  "key3": "2c44G1wJQg5fkJqZ6Evvm4joJQTcoRAtYWMhnaLgQKafgNgTXeK3pZc7EcaeBUiAEv4tMdALWuPTVSLZ6ByvAMia",
  "key4": "3p2RzTxmvwFXTNGGDF6UQUHDYXdqbqMb2BojPSUFWN1VoEGLDdVgknVYC9SdyY2Km5AHBhGYX8t2WgG53URUChRP",
  "key5": "4GWM96obHr1ZbdGuviWhUy6DNs3DUh1CFW5TUzbKEsBS2D4TnUPe42x7zDdaNx8q5fFTYS1wqZpH1oT4bWbNtGZi",
  "key6": "2NvbV23b6Xq3XXmoDzUnp7g8WPptX9jPWdibJx84DeJDa14r3KSp4YSVh2Qd2zRTpmFwnosgUAQQzZHVfHftknau",
  "key7": "4TgvKeTY6txwNcXfXe6j2qxpQt3W1EJ63QiBgamppVLPT8Ha3sXTZTy9LWikp5TxtCLohB9k9hE2gMF9CVQibfHo",
  "key8": "5G4ptniV9oxEdsuRRbPs5poixaQTFwXWJ7ER44gQ9ETDFCEATEWrtCsp5hKh3XZJrAWQ1Ejm7TMJ277P7vWS796q",
  "key9": "4STUnDj8y2kzs1LkFF2H6BdvRGJFQknQz3MZohJ7MaX4ndaSVNsdzWSs8vEVBosZ4khjDUxcqo1khjazu91ZAjYk",
  "key10": "25sBhF353M2y3LJtRzQC6MLNKPJVVDirFxdPff4dcxbxiSoRm7NxcBvHR8dmiupGhwGD1H5f1mJR7g88i7EfNQPU",
  "key11": "5bXpdukap6MiuYYjmsuLQjqq5zp8ASKCCSFA7HKesfq41hdCiUvVHAP6EudjPiH6v6nY5ktJhxRUz5QazVBYfAbd",
  "key12": "2BUFUY4zxyGGxkCm7AHGPYKm4HCZrrNLB9dS3y44vm8MKCGSWXvwFYGrWV15XahaPHDFD7u3nae16ECHHyzM42Jh",
  "key13": "wPBFR1hTCqszvFVNvs95mrA1W9Xi3EdAkfwSZNNWvBJebBRMFP4pyvA35JfLhg8D4GYrMJx3beFBynVEiduMuk1",
  "key14": "5JEgenczUoFEXAKmzW4Fv7jpjaPs5PktPCThoEDnw4m4F1Ugx1CKtGqaLVpkK3s4SmKPBT8r6xpiEsXd9Uf7K4b4",
  "key15": "2P12DX9rgaVW1P5YdSKxgXpdTAUZvBopnTwtB8ojdHL6GAu2TrFkjGAQNT7yHJVLtW8TmTpMVU2eriVhamrWiuyb",
  "key16": "5eVTJvXzb7i6uR49HnDP41mQMyYRZttaLwgkdY7cmV2Vcy7NqVJKbhjnWiJseU8LXaFCfS1EFpybLKa2NPkQBDXD",
  "key17": "4XMLG44pV34UMUtoTFzVA887WiaNb6eBsUjg589tshmHmAEyf3L48QfZS5SeNEsVGS2EB1uUzP2qBtBJ6DwGZnXZ",
  "key18": "2JezBVRYSjVd3LsmQH5XKZnqhNrCpfsBzh4xU84FX4Yhm2PaAKAwy2hYDpTddxNLkEscZa3KBkb7KWpLjU79AtgE",
  "key19": "5scGVydrsHuro1Vwek3BhnGygi5krCXL5qRDNPFgfaCzLCyf4ixbwvvp43ehCK7dLzq5XCiVyVPRsZ615RjjPMZg",
  "key20": "3YgBUYpYaod6cz61Nph46hQoCJkDUY2rYiUuHphTFUqfrymVcSiNLCSqtSkJu7AHXzmgqCHjfXiYc2y2fPBgfzgE",
  "key21": "5DYMgiUXGr7BG73UCFEec1DZBSjYNfQjdB1xH5fnegyjWZCUXoF5RpgG8DP55pdpnQAUTeaR7UXizhSWtDo3sD9u",
  "key22": "SAEDmts8isqjEQm8ZktZrPvtthqGrp6yNRQe6dvYgDZyuuPjHTHrmphQk2FdCEiJp7vqwDmt3ECj6p4eesi2N5a",
  "key23": "jrj1qJaK2LfWJPQFxZuuVaVLtQWcLtzySMUYyHbd8sz1dUXGLJB3am7fHDuMU7NbPTcUwcNbV8GjA3JmKFWFovk",
  "key24": "4fVfhtFGodKugCL8PwrMdDS1zcvPeqJGp12mQhywWQopEe83EFv2rRAyn7Ajz5xxiu5wKXknKUf5U13XTGzB7axh",
  "key25": "Bv53agenWkezoDaLt3QtJP22VFvN1khzVoAMpnpFxPvkqNiw6KQ4uuDufYbUwoYQmSZ16PdpcU9Rnm44yxkXTQn",
  "key26": "u5W5BqdEm7P2d2b9WTkrrBzaQ4w3kHxW5sTFGZm4Y5e186RwgQ2ANX2aoP4VG667Yf4gzzdgLWep1u1M52tRNSw",
  "key27": "46vicJnKidZiLSxwbGJtkYzZDEv7RxJbTgRYDy1JR4s5T3f3BMy611qnHmtTyhA3ZLTkSyzGqBKwvUHsgkxB8V1n",
  "key28": "4pvz1GhXKDFqUxvAhVdogfzCpZU6BS3rQg3KVR4sNN1P6aeUFLn3GsqtqkHjK1kc4iaWRwU2cdVNwWm61ofpG5B",
  "key29": "4v6LhQGcxeoBtrBx8hwbkyDdDtVyRvxLcmhMuwvN2UScpAmXzg3sbLTM6TwaAbuwYBogGPT46cPBDmn4KsMyP1Gn",
  "key30": "3wmcv3HMcwa8NPBEssjb5rs6W8nSpwPt6Bzsyy5DdvS4fqhCaZoGDkP4gHyE1M4MXQkTfG1nixvEtLAHkQb1kzSW",
  "key31": "56bpaketxHdFub1Uz7VTskCY9VdmUbXNjFfAMN2qV3bTSaFt8vcCwaUYXbnT8DZtdVtjpP1RgLi8M9VSdFBkVuF5",
  "key32": "31dThfNaWK2dGAX4VL2DX5paRQbTWiCEhfZCXkuwfTFdNj86XAau5HYZzxgKP2wHbpvfWgHwzc5a3rxeyyyedXcC",
  "key33": "5wuXew8E7j2wzigvXX9hyXVaadqU6RUxWQifq7PqHYyAgvDE78kaQaJQtXZDDsZ6miFbx3dr5xNbUebzzbgwXmW6",
  "key34": "5nkeZaybhxG5pdGDe1AijgCKTdvaZdp6E7f7KzUUQAkB6apJobL1x9kJZXgvgVffwCvp2FaMSGkC6jbcYvgwkeez",
  "key35": "5CjtJDmzvrqPrVqKMY6UdsshL4jadxzesRn8oe6FEjjdRiyp1zTJErqZuiqMrshrH6zv93TAmXCrMM1j5hUgwJhE",
  "key36": "1F1UtVCGDKJi6zmb9WH3Nd5G8v7tZLxToqTyf2NmsUnyu5SSSmWoPjSgria7sM8wFxYQrLMc5aSFdK8WFr7oYSB",
  "key37": "4eeXwYsXNQLeUZepcb1vUcFeJzsf4Nx6XykECmN5Zzy9P5tzws5c5f44qfPkriTq8yXp5jinh3cnEiRDZybMDJt4",
  "key38": "2YJPodk5zGswGgZy4SDMnEhDfRKxPSQhmkqKNouNYYwuuzGe5R22UFn1Zyoa2TFWftLEZ63Si21hHeZ1TBXu3Wyq",
  "key39": "4rd8ibzswiJXDJoTvX2nWDrmMEpkRsMhpEQuKrqJsA4L4h2RPjVZfqoPFkMPnqMPWNNf4q3FXHMghFcKNa6Z6C5i",
  "key40": "4asMjEcQo9m1oJstbMRe8P7pcuibyweP8mACrievf7dcn9EppTW82vGWAZvGQHVQyaZdq4DTEnHkWhEjSgAsy33q",
  "key41": "5qUvqq3fcxF62UXP64BRtv1PDfDu9Pu4yNXXhmPRrrjteK2npU5A6tdvRfm7VaLyWfwBr5b17zEAZyHwS6htDhmx",
  "key42": "2JjmtzgeUvX77ausPqiBCYC5cVrfhffmL28geaVJH6yMTc54KknRvyWfshDoQXwLB2K3mwhysawq6j8mXeejYn1B",
  "key43": "2ymWZhHA5SD43kVeLvAx6HtZuR2pesamwPrLbZmKTUxvRkLhYJbKo42rq7B3hco3qM9CmBm7AdetM3JxTfy4DFmM",
  "key44": "4po8oiXTEh2aSvEWEm3KZJNvLqTBMcUH4rU1JCjQyGXP8zs9H8gp4rgPXyD9rQAnEwqx4c8wqfw8bgNM397pjFf5"
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
