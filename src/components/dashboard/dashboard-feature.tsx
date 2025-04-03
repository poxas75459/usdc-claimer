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
    "3Zgp9CrJsejHJEga1Jw3XXqFHpfGiNzTaVvqQrFeUQv41T7Bv1ewtJcyYKuXLBt7Mt1GKWUP9ANQ7wctKcAV6bba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2bQyWeoR7k3iRondU9Xazc7552dxDBFiCnpQduMBn1WZu4XAEA9955KWpfaNgusVHYhcdWEWU6L3fE5AWTuEKi",
  "key1": "41WjKcwWo9yvFHLJFUFkm4on9h1fR29P1yjZt7Rvgr36d63nBYQ5FCJKX7fB4zkaSXhw5EfiAnfQgfjHxE2dQj5U",
  "key2": "4tTuj1WcHKgxCHsApeepp1KPxTAaBq8jEKFY47KirYYX8ArudNYjmKuXEhQF1ukooTDjrG1MdS1myApHzN2tuw1P",
  "key3": "TnmCxiZQzpE1mcbYAC5i8CuTXEvDsetkwFGKp7MPRC7Q5TCD3j9U69Hf3ohNMzY3LCmVnqqUzsDaoYBQaEbXooZ",
  "key4": "5J5p5dsVhZq1Z9tdpKMkhdD87MxAP8hSRpMzt23JAjWyzcVtsde7VQ4g3133YbyeoRe5KBZ6T79G1vTZaywomugY",
  "key5": "FBTmKBNUyBHtVdzkwnFjMSt53TZxkHqvYzjtwFbjfQ62hRBgoxDNU4LTi44duezF4F7SGCDc7WU6phSCw9o2pxc",
  "key6": "5B17ZY4kTdSYuNkL3TN3cHe5hL95MirqeBP9KK9LJrJAr7MGJMLhVD9VgHbVZTHQs69qsT2hhbJyzXogQeSh7MZw",
  "key7": "3JLhL7uoWdgzpDcmdyhRDiTRzXFu3JDhPC6UvWVaEDo5ch828Q6mxrBQCPiK7799VJakPcnNoeNx9PqNKnbJpjfy",
  "key8": "5tm7fRTiY5iqsbh9ub2Shi3h2Dqb7wXvXuAZ5djemezKDixR9XwYw9FiX1o4gCfgVEW8zvs5vy67LohkjbJcahpi",
  "key9": "TarWSdpds4ofGZuKPRRRHFaGEFQSdKnCJtxiYSLCRJQKLT3gqJD68uQPPVkmP4CnkMMad76uuRWtVBCNkP8djh3",
  "key10": "5mqHb1nUdta2xS7o2VrBcZB7VNzY28LzjyBXaAYTGsYkPq7QkvM1NHvyhHT4GXVEwkLRjQTTSk8jcmRy4XUiu2Ds",
  "key11": "4BbznK2HdLLD3hozcg4XDbWmWfE43SLrcJj4YnVnwmW6jLj8hZZ481DKuCg6TBUaU4eh46BDQfYJ6aTZR1yrzhkY",
  "key12": "3BXn9qrJF3Du8CdUpdWHe7xgA4yQQM1XBV4BvXa2n8SZzoQ4MW8oSTZmnGUY3gdkVY2uHNakKwk8hkYXbqQ93x3v",
  "key13": "2EiGE561Qii2f5PXCx8HFEtZUcKGDm7tr3A7HBeN6Um9zR5WEA79W9h4Bsya45D7apdzUxF3TtY6GMWqZaVn46YG",
  "key14": "5FsmmefpeatvEbvHo3sGGQtbwgog8J4a9jhAfe1niUTvevBnbS7KCZmNymiwJX55CtxG7hADj3PE71yVzvKnLUVv",
  "key15": "5S7bK6XGiEC79d8KTedCqfy7x1BZ11mE9bJEqG7xmFa672doWSQwK5uM7MvmRsidh3KBGQfrmYW5pbbHkbS4ot9s",
  "key16": "MfWD5238p9umCpTB7M6U36GDTkahngLsfdPoryh9MLDUhG9UZ6ixBX487oUXXJhaPZsDj4GD2ZpZrZ5QPRHXiLW",
  "key17": "7UJaNBp1t7nCEV877zo4CuVtFxYoAMbecpj5z9VBCGxYCFfCLNhH3frYDft4AiWUH5T4TTi1nnW35uKFPyLLwAZ",
  "key18": "3x2pWrc3DgFjq3WiSM1FZsUfSLqab3Ko8pKRAZL7XpiiF4NDJwZ4wLyhRkkiSoVfsH4dWRmYyeCJhuA9c3tNGz2S",
  "key19": "2FG17fD4kdH18n2XUzKnA9AB36P7ienRZVHYDBgAs29XmxATByf44VCNX4SXLsctd3oSBhpYYcEddXH4UaWLNcm5",
  "key20": "4DCwoRmWCrACmdQMt9vtvpKwKVHgasDNwXh56hrVhXsNsvy86oLhCTKbgrSPsAcauMw4iPhfRZC6Tn11iBGLUV8a",
  "key21": "2kKWyezeiYJ1nQscESf4KJNFxotxQch2KLRtzbpfDkQSpKNjFttoM5BjUB1XnxwisBe7yWxjNrAMedamKi6XNifT",
  "key22": "2Tcy6imw51U4pUkv3wiTQfwY7UeCnTNWvpFKyBMxcwCc1KmSAGfNo9mW3h6pRCBsWUFx9ZMzhxKttAceWpAVQSx4",
  "key23": "2r9shm6RSWvgZk9mH6Wyq4GznzTE9oYcjLugMBNABg1GuHnYgJ1ZvcGF1yfTYBWCkeUfhBQqSGtExcGHGhAA1bJG",
  "key24": "444KTSjHwEMWdCazSpW6Hy243eVHdQuEmcFSgXgzGLU5zDPU3GpNKSZiG7zV9kepxngVX2vEh9PgynfB1HbokLmL",
  "key25": "3BKoYgreEkJB8ZmssH5dYGrtyLgqNUg7xCqZY1WUQPhh1B8qojYYootG7F2Ab7uDGY2T6u1dcvnErTZqn9ngKqT4",
  "key26": "5vbeGYju6BwhMdmfzUvjrFCQsxUHgok52T5EjQUnNPZKuRvFBZQcnXthQq8LdU2gc8FN1J9jtKnFLR56gnz1c1Ex",
  "key27": "nmFMoZP2BUwDKVdnWk8nGcbHDMXRk9Gjrgpk8Ec2FbBSmYBmE6PxMQ3tBaXsewuWcZmkyeQZsNahKgccnd72Tzq",
  "key28": "VcFaxhqQcwF4wahP2BZhPmbLSqt43kf5Nuf2baFvzZJcQweoKcy1EtL3EtLAS1n91XpyaSZRtGLdEk2Hnnco4EP"
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
