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
    "66xcoEMg7wqEYCzd7bM57gwuMddopH8JyTahvJhXEBVeeQZaKzEkNFLuRRBkMnyPNC11cYKUdJxCRgjcTm1Ruau9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zD5kr9EPE9q1C3rkTMgnYyhYDLWdP9TUQq1jK8CgywdPeMgjwUvWAkrm5NR9VudSW1DZpyJmYV26AugTi2v85Y",
  "key1": "DTcbFBeUyv5RvuAMFVMVXCfEK2aseiMf9Hksh6CLP8WESeCmGEQoamY2EvW45gvaCNGgkiDVtorzYpRgAmqRvAH",
  "key2": "42LKHvmpZDUFgX8L3FzG4jbY1puKMBni3TQbeiCy9UY6234h2YMZYThuCEbTFTt3EUMnCeqNTS5kZ1JMY1CLXYEf",
  "key3": "3F1mJU6LKwrn96XtKrshdVY5xRmLgieRrS4Bne1pEFxCTiWbrRo9oUoVznPkJznCd1S3j4U2cphCp4UJdnC2wUpU",
  "key4": "4GSPFsNmiDYCRG8vUtwX2CbV5gdpFChFGeVj8aaMzQzkTfcusCxUSSFB7eWaJFhrmrFwfv1Z6K6h3CuHLWHpczPt",
  "key5": "3mxQnAKhU1jRQ14xw2tc7vUeHc7yLzsQSC5mr4bUwPFeLg8JCGBZaFLMHaMtCZwMUyFBtmSHuXut9KhvX9JKXMtY",
  "key6": "5Upjpvd1GJ647vHyrVVPAb68iw8cTqvp7U11QvEzp19rvA61pvuiCiHDKiMZwyB9jSYyxH7rzv1w3yMNasCtddVc",
  "key7": "3TFiaHzRGLakaPEj2phwVLETRnH8sQ9kAx8U6BCEgCbPoWyYECY3cX2wGuzTweLomW7GGgf8p9pfpWejfVQLb5dh",
  "key8": "ShaFqUwhQguHygp2FF56MZ6AzeWoRkrALKzWiDDXsAxhT6RrNCT5KRXBF4vFGtvzYXTBEkqggRTzM3gK3xyVTgL",
  "key9": "5b1q21aELTPMovBfG3xMTCN9wcFUZQNtDCqRVqPqhSyAzFybmyT9FvA8pdorFMmt28VNV6wzLAJk9wgeRnKHjUwo",
  "key10": "2ZGrTKBctTb3QxCtbiJnv1B8zaMgFg6jiCCPusRFJ1aB8AxfcDDudroqGJRGRqx5ro4GEHYhtmeXTQwVZbuQAjEs",
  "key11": "2QZTB6zk1dp8gpV9ptqE5qnNZBQoDxgsQ7MGD82wou9CZqL8Bt8XVwKLePt8Z6sa8fxkQrvvcFCU2NwZ4dcQqYZ1",
  "key12": "CvaqaUX2Aanu1xrUmUbqdC22KD5QZbd6v8z6UYLJGEsabJULrUvgeh6DDojZy6c4VbaBHtpnZ7umRUtVRj4bvc1",
  "key13": "4hZ3pQXAeGiN9TtZPf4kSy3WiUEqGT9YSSuPcEzt6uWKzLm48yd7MRwDXZf4u2WntQPHwd14dXgMYi4SQDgw1vhh",
  "key14": "YxMtucQjSz32BGqZ6ZHpw5uRGhGjhZzQjLfs2PLn9k9rKA1xZxytnmKwu7qzHHsuiuuURPisnCNHhq4TqJUh2vS",
  "key15": "2dupDaLy7q7XS6bkBiKu9BJBq5zSModGE3fBY3KgvW3dcttBX5FdvNF1ihU1hrPE9VcDT6dw21KCupyFM3w1A5Ef",
  "key16": "ikeogFUEZjWwLdKNDaKyqsJjfN7NXHvhh6JUwAKB7p6fCSatRd8sEhoWxmVrDQERZBaM9JNUx3BMxf5hbNmCkhE",
  "key17": "3NqDezxvTvHAtssBzUBGPXn8odZzytAfmnKNrXKJxt1G7sj5Rd97A1a4Uy9hKqxWDkMwwusbruuxUDLfbmRao6jc",
  "key18": "raawSnWKV3RwqdhzS8DV7Aa3fSJNUu3gGHCkjBfY64t6nq1gA9xQ7QwgiaiMBn1SY3b8veaoxaJeVSdLY9F6LzH",
  "key19": "DXPxT3cRtEfYXHxYQLc349REEWuZ8EQcpQLTQgkgNrivvptW5zgqaksicRDUesB8Utg9KcVDFjqRW2n3pX2792Q",
  "key20": "5nsN1zfydsWgCgDvfo4usvjn8zXUosRcmpmkrGmW9BbozGGwp5wyH3sp19qEz9tSJGYHQoM4s8d6EZcSK5JcWGmL",
  "key21": "3MVRQrhYXntFhf8ekUuksCGAcTNBYdkKZMTjrhei8DVthiGMo3uV86MSVHdiQVrvTi7gjwhBs7UBhN68Ky6g17PF",
  "key22": "3PCyZDT8AiXW24e7uP6Rznhc5Tyk2i9pfPFYRhupfiW8gdUP8r4zwNjDRhtX6KA2tDSbi6AKYtuZRS76tdDpvpaA",
  "key23": "juiiHSTeuXSQJ7SyhXvbUz72ujTHWgDhA8vtxxWmEFbQS6zd4Ps2vnPhKfj16okr1xZHmitafNmcLEuZGZeyP1j",
  "key24": "5zatMYbv2SivMVMCtKoQWuXDGpQFoQ6LZ6hENyfi5rEyGxqAJvxVF8ZV5XyUYe8c8yKc6fCE16CKVdHKNABJuJGb",
  "key25": "4vhnNNnc9s3fS1dhL8jbJF4ZMmbe26ndtqmfsAvWc7rraFV4SmdthHy4MeR7hAKy3cgP6cbYRNaPhwkuyvcdtNyd"
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
