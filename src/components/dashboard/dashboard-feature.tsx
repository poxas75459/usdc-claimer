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
    "4qAFsL2Q8ZdqRkb6MS1QjESZZiBrMoJkQYbV5nEU78vVB9XF43pYNVTRCxdDKhQjzdB9JtBnF2RQEqqQbz4XFtzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahu1fyoa2x2Hoj9VsbrdAaQRbUmJTrBxMLWZu7w2CpYFCAGmhf1JyyL8LSygoeoZDv4LvkfpfFUNaSpQnmcnoPa",
  "key1": "3KyjWvsfepfHHcnvnHTwhjzrMHfiEbB2H7KcbnG4Rb19wbUnvryvnMLUMsYMba7SmsNWR8eAVukCweZDxk9UEkCs",
  "key2": "3JhbBa7m1PE2A9CQMUkQkKqbgLmTytJ73wQvCvNv7ECgbSPr7uRy8KyQJrozbP2o1H823JxNd3aJTjNyYjxGmtnQ",
  "key3": "3JMQkrgvYdxHnMu94qUZ12dvYf8DMB9jAt3ku1SBLi5FqUhLZatWQYGe2FP2tCxUicWexxYDi1vfQjQcDFGeDVM6",
  "key4": "wUBvicS96snKfKifqDADb2AakH72JKvnb4KQQ6ZNuuoLfpoGEQVcugBGtvmZomavEMvirRwNstM9ZQcmasw3PZU",
  "key5": "4fNTbbhfS6ws5UnVR9GdmqEUEQZxWxj86RvGprvzwUp6j1YEc4ypDP1CNMBRBxGwBBgexHtQDS7GaVGQU2ofYVzd",
  "key6": "5RrW7g7rsXoC8AKS85e7EYfwQVvcHABuxskg5YMuLDe7upeqEUGnCb5U67J4Y19APP5KvLk56zEMgNjCmUxFyYY2",
  "key7": "5LBkznoqzjJRnUpnAMtPgKV76pWuZUqLpV1azUDJpyW8h617ExtsZd3YqrqfXZYi7pTMEzbizrpzcee8dd1rGi4x",
  "key8": "28JH45bCEizVgDHM8BDfGTfK2bFqDUTKtVM8zYdsKc3qS5aBRho8UWahvLpYwuLbB1FpWY1DQhjqWms9Gt3zdh3X",
  "key9": "4LY5qvWxtrvAwkoJZt5DPXkyzsWneNTKtv7NcH1tY535eDwL4KYCQmExbBy341KVRBDZYc1ee4gBDxJH9cGAwdXb",
  "key10": "5D3MTjbX27U4Z6RAqtwMQBSRSkxkQt8m6jnQabbGqSxoQc12zzzfXxPxP8nyit4fkDsEJadSuw2CHxYRiMPYeJBw",
  "key11": "22fAN5wr9X9ZrfSsd4bEa7VCvpAQvW7tHoEXksQBoZujiFVvRLhm7wWUx333mcEH3h84frCwgVghc8QLiL34Bx9B",
  "key12": "5AJ9Wo1uU1SCUjwUt4uwpXirBE2ZwYqtNogTdWpnYaFvm1aNKXhnUZVyQjma4pvFb23nndYU6op6JD2JMJtcyQKY",
  "key13": "4Mp5TV3Yp6K4yDGSaMqcB6axfA4KhqfSmT5jkyWDzwdJM7magpowpAgGLLpW2bKyVtStHKPW8e97D1hKLrcxKpTC",
  "key14": "5FzLeArpYZbMSfmdkoAjx6hK25N8SYeDbhJmbE6e3UJBTd61gZ5TrcT9ts7DVd1gEbw3GuiTh5aun5ZbzDBncARz",
  "key15": "2wBCPrsimzVDPQSvKy26gijtWpkCCvXQ6eD96RwENBPTTnAQdLhgRnPz2s2EhAhdFoHNVRe2L3C9vcmUP6WSpjeq",
  "key16": "5jUNbgSzkHWx9xh7GyW67jWfE1qKHBsHpve33d9Lzcek7ujz6g77u75WfxzLw8kzE62dtH9CMQUeqxxCuLBzmahZ",
  "key17": "39fMzABA6GHaTBH7CVaWo5mfUZYhg1zShb19VUXg9CqEFuh8G83cwY96riZYY2KZJeKMV8mMAGxYqFPjT7ffmdm3",
  "key18": "5rqCLZhxLneTwUaGnz3zZ6GLxBZvNnU7RGNjrCtFjdTuqg5Lsw5NSQq5Cr5tVrto1w8cXypRtGet9CKeDxLsTe7q",
  "key19": "2moj3xGhSUPwoQNMtWv9hcRrazPUsjmYd7uSCd4VLSVWKjbcBrjTD43NHqva3pjtCGUsyh4g3Rqft6cjvpuBRodB",
  "key20": "5Madb8JPR4oxPPxZ7tn5V6Cyfpk1zTEXhdfVaiZDw3Y4baN4AFr3c6sZuKwf5LAGu3av2pWbTMxtuVwX1ZVLqqDj",
  "key21": "554oJzwxHwKJJgfLUyaiA4AL6AV5q5xRXUs4QRkNKVGad3PnUMrkEZVA5K9J5HFh13wjNBYUBQHY9GDwtW8pS2uR",
  "key22": "54EoGuZaKJ5oGnVuFLt138dSpU4f6Ew67nkVUEPadsTWwXrcsS98Uzj81SUAKoVR2CYXxSX3ks7qBgNV9bpNNvhi",
  "key23": "2uoLZsJfDcMjEfoGxr91NQu5QD318uuBu3XiqFX4D7164EATnw6ksJCosgLPsb3Lh4nMrFfSdpfpNN8ktoqQMKUv",
  "key24": "26pHSVogNHrqUqbjgiKN21g8xM3nEX1qcEHTo9t6LXXTxNpyDrCaPErUKh3USU8RdGz63d4QZSQAGkDhoVgWRQ4c",
  "key25": "2nruWwKQFs2kvTLrR3DJrpq4mZspvzWqnoaq8ZKLVzBw42WwYtQiE42evvTVgnswLtvZnzMdeiGCS69r8WD4q388",
  "key26": "4FFBDZie5KC2TB6NNiokShT23ni6bTeJv3PebMuYwaMAFTDXvk35kBQUZ7xKbMTrRexZSxhFkfUgwxqF6UzoP3vi",
  "key27": "337UXoypbV35bp3DWizHvLLjPBByue1UQcdnXGSJNfQgANhJHZgLNfMeK9BxgdahQn1YFrBMCuyBCTf9o92iar2N",
  "key28": "sBhbxKB2kryUmm4Q34eSU1Q3uLe9r1m3BvhuBz9LnzLJDNqqAN4ho6eemM7wpDoE53v2WxwuNQ94EaNsPVqiKZc",
  "key29": "38dWDQ55RVzqqtcTSd5t844Mc3jW1s1Ywpi5zjZHWLt37GNxqu35zcqRn1rsKdFQtRr115ah9CgzY2jNXjvJD9re",
  "key30": "K9xceRZJGRs7zQcyxcp5WKVL2EG3jUaGUsgt7jUThdQDkuKZTN4mA84QDvJzvGzmnyoHbDcgu4Lu4YFgqMVtuwS",
  "key31": "47X1on54MK9FuXamVjrxkYusN2Wj9qihVQqwdxxacYY4Y2RpXYVPa92ndSRnxrtK5rqZD4dR5kbfWuSnwfSjvTN",
  "key32": "4RFi8sTJhKT89UgKRKHWu6SEyjcJ4cuNUSjWqxNbSFSPDQ3gBS9sfQHcdvU5AjB8eX567tfdQV46dXgFoArKyYvM"
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
