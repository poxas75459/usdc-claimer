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
    "S8q3uFVDZnceEfGmLza6hZ6KaJYPE5pEgxL4MpGXNiXGe5LXB5QpSoyZH2f66JvFNSr1sBZXdqetq8iApWsavBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2Hkx9xXprAWVboJ9GTRmXkKDPqQ4utxknNTB5V3WKFfwufwXoDLfDwyYzD6xfwS9WovmDGDbg9Q1VU2RAEYMEm",
  "key1": "oNuxNixHXAkUMkR3s6EpHDYvA2Gz6N7c5DWvhqCijmBiMTzzXLUAZBB5gZ5pX8XxULPhTdyME8r9uqQVp5FDVqJ",
  "key2": "4kj6oCQUnwu7DKDwiRRJAxjyJwJh52PvsnvUMG9Yy71DysxMucbPL3RS6GJg2NAFzsmspZNNWZvj2fow3U4coFG4",
  "key3": "3pXGzQKwrJNv4WvzSi6uZw3FsDGAaVCAibTn8QrNiUixjotrYZNYHGWi7eBEvKonZ4AsFFrgypMLpwFMijsofAWj",
  "key4": "5C3dyzDkYcDfZW3WTotfNNrqVupwWkkriMEN69N7GzkFxgiC7jShm1BBNHP2qGvSVr1zBrpxiDb7UtbUsiTnPWRJ",
  "key5": "2T3i2yFHKW4TGi4bsh9iXb29bEM6kPJdtjYgisYq1fTf1yS6jmNnKvM5D7ksnDnu9dUuiDFnhBDnat1ZucmVurD7",
  "key6": "3MgxiDHsPBEMTq1oXdtRCdNGDoiysGWLrw2UKbriPJDRtNdAKugAPKPCP8owXSdGBsK3F4mkNBEM8Nw2u4HYree6",
  "key7": "DZoEiT6bLESrm9Wh8Pchz7WpRLzEipWzg72To5WPpnb8a2V3cVhR65CXtSPgDghGD59rgz3rgSHQ3U8ZAr3DSkU",
  "key8": "BADBonYVpEBhh9kHeYNLzKhKRGkQWMvkesVquP9erUJiceVSGzMH7iZu6qGr5YmMdnbSUpdAoKA6cTsKxgfuGBM",
  "key9": "4iuR8jwcT3LmEdSMYtDb61CUQ2ggYKpCvG1iDPHnmQtptLDUxmE35LHoXzWJbBbFBUwZ3J8y5mhex6ySVPy5BAji",
  "key10": "56XPuXtKxTyrZR4DpEXo47F2pTKL1VykUMykoParr5oNg4g17JX2AuhJHEHoX8RMRWswDaqvScQfohwgreYdvay9",
  "key11": "63PA35XDzJD7qM2NCwXVoFcFrct1kPTT3VUCFBje8sKR91cW3ok7vGqdY6KBe6JLibP92rU7ZzZ8nMQfTWTsicQX",
  "key12": "5XgMc7uMF3CQVsd8GCzTNEyvMTZhwTC1kyRtGvfjHKMV1bLLbjBiBz4bHURxFLVv2s2PdbsnZi9QKfMhvuKwsqrR",
  "key13": "47gmWqHm3SJVUhvSxs6ZCnLShwtDmhNxecRbPrVTuUR7vma8fBghp26Piax6YZLkSuqaMRWxsbkAh1Awm31mQMBB",
  "key14": "5VgGxBsqMZGSv7zgQTeF58TWMHgyDKjgcxBBtWXqdsA1i8um67fx8XpYjneicVTxAetkCFKShxVNxcHP4EGYzzaY",
  "key15": "i2UN84rvXnikw5WDjKU5pT3Cm5QpiQ4CADPLaidLRCnQorqmnAkaeBa8VejpZ5X3hLbnWesHZVKWJYJEsLzVhdS",
  "key16": "584g46TULHQGnyWM6mq7zJHT9MHc5NfLXNnuvRJ9WM2EaznZ16Zu5tzi24tHYU6p4szSYhPvwh3dgksVWZ2EckM6",
  "key17": "2ThbKHqApJT8iBcEst7naES9RH6ifmEYD5LDoQyjwKQCbA56ed1vsgXuZyiaognCWf9BCAE9tk9rZYy7Gbmdz21W",
  "key18": "ehs82UEU7Cen5p5JqwTwPfFn5PqWJedVW9vDXYoVkvfiA7aCH95EAJcbPQZ3ZpK78H4HLXmSBMeKESfpvh9LpRo",
  "key19": "Mj6zz9kxQA87ur1hvL1GGtpXqBDdwuVWMy6XkFb6oWm4S1ftKv3uM2MhGP3BjwYZyQAR7Kqfw7cX1RgPfmVoPak",
  "key20": "3i8tSKziFfHv9SmD3nahUWSHPXdWE5RRAFPcy3sY9vexmVXX8oPpji2DhjqAm1tSVqgtz2EtGtMfn3QTn1qRLcta",
  "key21": "57A45gY667zmfRQqA8QK9yfmzHAkhYyVRSGn3YEo8cgXzxk3Cyvt7DWtd2Q2rvepHB5ENdpbhNWqDBDmLWEdVbur",
  "key22": "6LyzRBqQfQN7ZStz82UvJHB4s4KQmniAtKSGmN46HV4VJwemQuGgFcMn8LDTbbWYFUv1Z1TK2jrrnetAJBMFiJA",
  "key23": "3UVJsHDbgJLiF65eVQqysc2bGaUQUUNj5KoQpxUu3oK9wXxTH8NvjaPP2TDC2FzkzSymGWMdrBDqmY3sZJwJv3rL",
  "key24": "44cwZvqF8RDxMv9s57CG9yS9ZGrYmDLd36dXNWpCcFDiooEQDfqdYjLAFDsvKbABjdcyJ1ybnJgmVDzZRtvYFjM8",
  "key25": "3nmx9cAdNbvFx3Km769weeSf8WiAKmBiqSreEETSpuCiF9XPMhBW5XfKhihCtidFQavNEvdd7cb62z5tP3Wd1Bwi",
  "key26": "3jK5iEDj3s55fHizewJG2gRYhAE3PARQRwy5t9jNc56WbruCMr5LGWCVxHCQ9sWWrRGeCgSra1w9ryeoQXuc6din",
  "key27": "4yj1SoSogJF1TcNEmj9Qsdt2Ljxvn79AkSpJFc8o84Lu1K4hg61t9nUvimYoTwHwQZZtNqbT4Gn943JNwwJ45Yip"
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
