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
    "2brhWN27UHVTFNhS8b4LWYbJexDQiS64sChaQ7quKWcBi8WLrKzCgF5CYkjwE2PLiumiJsbz57fGoYeH4xvrfXmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZzmkAHGvrAS9aFAxqN7i7jhiEhGXf7A1pgjsKR2GgA4Zm6a8XeakagSfVdk77oEWQttwhA8tZoGRksFV8gX8ue",
  "key1": "Hw7cVeW85cywamhEdHPSp6bed78X4pWJmQebTsHezM4ENN52BdqaTe48NZaVMUqUxQYskodGGY7jZkLAUmwAiA3",
  "key2": "2wnpsxLxo8XGm16UwHL4hEMmHvFeYEVawkibrG99kv8KMpCDATbdV7G3sm3VY2GF9rMWcayWSi8qXpVNfYe5o3dq",
  "key3": "ywDmE4ceAsmEKz4PVjQE6AJE7poc1afdnGnMBAQk2Bq7cm1rxT4J7duypPeAsTNMDcTisJPrdKRAPuQ5AYNPeEi",
  "key4": "3oer1gC5ZWD9Xx5m4N7xxqiMUafuXQtnSRK1HnHxNpcjJRtt7xM73F6APbBN1asnEuECzbXrEcb3uATgPf11B5MB",
  "key5": "5urDP2YKK7eShoFKejJfuGuwZtXvZuCty6DTwguijXVSSXHDMfGkvN8P8cmvvcyugwrYENXLfhhmwTCxUUZU54Pc",
  "key6": "4392yFj6ouiKJ5gQYYWi3QV45xJ6PWnzXmHFHNDSU9CKBG3eJAJ6nKMBXKhq1sCRWYb3maSUQfKsvq6hJ7LDeZ92",
  "key7": "5NHXpv3QURs5w8WTa1EC2rUX5MJVwJWDKL4x7hUb84efKfb1Hb8TzRiaPa6E4r4Adj7R8UjB9DSVDbrHJX6jm8ib",
  "key8": "3ABiiVvRvqZAxQa8p8a3QzPiLuwtzNLoaCpeX9WNqSniJD6WZhgmA4GHm29XXJqmwC8XXqDVhrUtPPGb8acELdzJ",
  "key9": "5rZXM7398RRRs3WfZ6ZUo45FGCrNjTQ7ohQLXJnHfBsMcrKF7s3bhmM622hFanS9nrmU3aqTFKiFrmELf7vQg3FH",
  "key10": "fJyAWkaRjK4kp5U937QRn1tonZxDNCo8Koxu96YLdtJs33i75ryoZAPtaAS9EtWg8hBDky9tkYWQ1QWtoqgvksS",
  "key11": "58naQM9W8GRqs9uJG1DyUk8uCY2g8iBbHeLp86ve9uAodDvnXbu8xzYMCFJwwemCqa87DmWLuDXMFwbQ2gJH8uiU",
  "key12": "YrgHNsPZdokPcwEbhefbvgGNssEkU2zf7zJugXYp8QLwdAeZq2mUFzPijzfp49TtAsUy2k5WK2p5jkUkXXF9NQ1",
  "key13": "5P6ofeWbSK6pYbh1Q7ZxYQeTyYobTL6xX2fqjDJHRfGr3Z38xbpkdfjenuqJ7pxJ7pCH9iK8dpjt4R8GAD7AVjFX",
  "key14": "3DaxvtR28Z3MwXJEAywSAHHi6AXrGhpFpdmmAt3BVFcWEDGj7YWSVuf6Xj5VKk32n8tT7vWPEr266TUysh1xRRu1",
  "key15": "2QWSieou7TrrYD8t1PKyXP9h4SbK9d88XxXC6UFNr6Z5U9D2fTDRbf7U2GAuaVCMo2qgZ2eTSxSH66RcctrAM9EG",
  "key16": "3ie8vnYn62hD4hRasBWxUUYF5YALYPPBWAT6UmmNJyxPj4UbypPZj53yLp79n3UWK9iqerWAuK1A1NeHS2rnYaCt",
  "key17": "43HHFbmhggjvtn7uzETmQdJgXSvtbcUXpU87umBguAbxYJtdPZ5doY5d3hEFUkQhhG2hGKrEWxRtMoLjewuqGwq6",
  "key18": "2G7nqKrLCDfeFmW8cQKDmfFKogx9YmyVQdTom43vrq6xUorQNeYTosHa26UcS7mbxS1w8hjVfDUimgHvTr2GPCRk",
  "key19": "4ksp6sJvh6xBVNnGGGwgdPzkwKeDuwiHxYRbVjXqmMD2qpHw4G6SmmtMGVLbqS5dkNTBVawwBuM9FHnawnKkuiqJ",
  "key20": "5dS8rhtpbNghdgpWPZc4PZ39wapdmPrU5QYGcWv8McWFtBJg18v6fcuonFRpis5eZHmvA8nFVQ1nbAaq1VpWZDaT",
  "key21": "7VCXPh87C9ADArsBYdfL3AxrXdGF3DwVmpuiLVSC6nCTNKwtLrjeKQexyqpHxhyuBB31NmPFuRHhuNMXvaVV5KD",
  "key22": "w6uxyRvopJg5aBJsLnhBXjJ3ZwQZC9rwcXtnDhHX2DJYp4RsxoTrVxmBRv7NMkCcUiET2JEvUfP6mXmzmThijJh",
  "key23": "3GgXt6B8mHEHgtftFD2f44srQqSPB6pxVohchCa3TudU8FvxhuJi5tZyzuLLA1KpaknKfC5CaDrD719k9keY2WmQ",
  "key24": "PqaoBgrFGmyZMdq4btkS6iiMbiewTRUuZZaUMLqSzr76fAsEoeijWMCh7PpH2G3WvZBkwNwx19Q8tAkhwjmE1An",
  "key25": "5gmj8gFTUbHM7SoMEM1pUAtZk8kMJguanqacsSrgxKTazj4PyTR1aK5rpTXTJPY1NhKvG6w8uAowSwqCYFYKsu8U",
  "key26": "EHkv3PfVaLxsjMxENGajeCsTrQQ8YJQ92PCoMaMGHTbhvTTVoJPEiXz9oggnBXDshqZsx3HoHopWZ8Deqpi2Srt",
  "key27": "66i8zSECWgAuwKx14krxofAg5LeKdnbwg9eng2Mbm3WnooFi3SU3n145GAMZffoyFy2TB1i4Nu6FX3RcdRV6gGz7",
  "key28": "5PHoAhHgUVqt1NXgtm9YLWC4tqC1FPmMHzDLzhCyWgswYf8bEMUzRHimRK2pU4nPw8cB3h5EytZSMaHsX8tntNXt"
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
