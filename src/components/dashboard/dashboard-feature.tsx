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
    "3tGXKAPMiKmZEe7SLiSZSj3pJwLRgAb7cWnHjMbKHUvCWknD8ouYK6ydzwZJRVb7HTxB5wz8ZAzgVvwMDnLuwFHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fd2iCJYW5qWxK65UWCdAXJMi28WDirHJm72frjpZKe1JNavFSadpZWPtoq8BTJduw2APAswTaXGN7wq2N996h8Z",
  "key1": "37SB548ahqtgBJp4kWeMZVja6bi3ho5JFbSb4VjkdoxdSR29aiBdRBpPEbtPkBKFUwkFCHUkQQ2uiGDV4igjomrB",
  "key2": "4DL6x3zAzc8ehkgu3HBLVfyURT5BhYvsghRPh8KDXQpPBzmnASs7YZQSt8fboVjy6KLKgy2QmKqL4QGzBKd4hKuc",
  "key3": "3Kf99ZMJfQxuFvYo7zAwNcb74nVxv9CXigoA8zjvpbA2G8QH5weFBYDePTqECxJQpRy8QJhe9PUrVtxkXCFb4WyA",
  "key4": "2ShTcrFM7RvXYZokkhnMDkVoeMxVYXrM6uXD6drt2vqS9RfipaBMcsC5i2ytWjUYj4Khz4AE8mLhnahBQXTTN1To",
  "key5": "2XvN2CmoAuqedGkACesMKyL2nDjnZPpZQNRd2b9YUpGAAB4FgDh2km8QNqyBJ86dgPKSwtQwjwDusSjuqwPmMese",
  "key6": "336hXk6gm4ww1VCSpS4TAdaJ7g2SkgwUvcjJEijxuLEZ1S4cmmyk24m8trd7KbtWP39Dk34HrsCbaShSeewHNbjr",
  "key7": "3PJavYyPW5YU5ni3wS8FJeNf5nNwTTj1AoS4UFF28cL5yzbftGk4pAKXvuna5ffB3wgxbKjFteuxmc4HkufEaNJS",
  "key8": "2VM3Ae82pvftEVozbVSAc63u8pyCovuCWg2wqgigE8tJzqWPwB7rsZCeAf1mEyQLUttREkgijd898TmGiguYfduq",
  "key9": "2GHg77TQvumzKfJW8Rt3kfcq8apfbmddnFC5Y7Ydpn2VJs1nRce3EKeFNGuSLwpA9pGCTETBUTJ67Tvc5fjjnB84",
  "key10": "5mbgFtxr2Cbwo2UTpm7CRzdUMiJkwZBdDQW2f2UvJ99SB1H2PnNCFQ6jrPCehfrsCzPsLnc1hwV8YcGVuqaxizDv",
  "key11": "5MGZu8GVinEcYXPGV3ciEQCH64y3R8XuinqzsEdXF8Ve18divkPp5ihCpuMnGRthWjw4erSVa9oywd5LpjnCwLU8",
  "key12": "4sRbchR9C1WkGSnDj6UXUGNJ74B4Hvu42vCWV9KXpH8eqsg9KsjWzhGfeEjKv9rpkksAQ6nKWGNwf6FUiuiFayyw",
  "key13": "3RCYb6NtfS8gUG8b98aV1JgRGGbFeR8vD9q98zjMGkwtEaq5qXv7DwACryDCiyg5BDJCHsxH5G4UTSS1j4BnWoKK",
  "key14": "5FQhfbCa8NdmVeXTTuzPf1sgPsMvNLxmXSKKb89GEbim8kyrHiRdisYMQR7GzWMdjLUCM4hUYFMa78TmSYmucP4q",
  "key15": "3Ddzt36k3D1owbDS6VwVeAzzqoaoBQTTkLC2mEbx3gMNV2GtbSUN1w1qXKqHLt6Wg8EkPfVufWD1AwjAG5SgXEPn",
  "key16": "42nM3S4WQEhbD6PogSQgppyGCkepauSQjboz9fZAu559EVGoEo7ZqbrsRFzbVvPTFu5yGXxHs1sLWofx13pCueJh",
  "key17": "2GpsSFTrUNU9wp3aMVUYP4gyAGii4SMWrUWirquk4tpc2yG8UpsZzut9s7X1YNZS9Y1JzbQ2J8zYqTP4xHBe4zJS",
  "key18": "drQXACWTHnK8qFkZQGme7mFiyzJvnwUof9A7PBj9oacvmLpNDGzh5snQCdn6NsFh5Zx66zQjj1p3Tg34Mh1jyqQ",
  "key19": "4h18yDzDqkrg3dPk8JdxazaKyeurLj7XUoCK5cdYeY6baGgoUw1K1QofkTodEfaenJQb5tcHUv5schEcNwN1tsu2",
  "key20": "4CAQGrstUAExzE5bpa27Ri2co6SgDYG6r8P2p99LYkjyYxBT6XrRjDNZXzXjbWsi5thFQvT7uBZ5mtpPeUk8k5dn",
  "key21": "3rYHFvwRH6PVQdLcqE9Kfyq4Z5r71SNPRbKMrfGN4QUfkK4BUbHJy26977ACb281sAbrwfkwJrKhcPiVBYCNN583",
  "key22": "qcD3rTbMqQaPmXcPQdtPnDstYyAsHuK6iY4tKDEBzZHPX2XGpf7DLqwBiyfkWx1PGm4exQtV8wcEkZfTw79bNJx",
  "key23": "4XTbaY1cVvYuc3yRp7oMU382vVJk5zfBREXd9gpHgbgBKAp12vMUKivaraiotcQdWQHdBQ7dZf6g8LMt77kLmvmn",
  "key24": "5si4EBu2k2M8FYGhbpavAKLy8jCBSVMD6q3gDCH4NkF5rFqkQGHJdtGreuaBMA5fs39ySuXMz6217GfwECbvAvqN",
  "key25": "4ibH2Voscq8W8pokL2GpuLc3KBp8fEZFmKLWvVP92gj3jp4VHrVK6ePDnBdoMdaWx8BVPjpECaMBBx4ZoSBoZfZu",
  "key26": "65mBkm3mKccPhcbTzGGwivY5YUD9b9Z9cSzgDevC2MqEr3BDKPfBw27vqbohwj9Vg8bVRWdVoXCvwiE3WZF5PiW7",
  "key27": "4GFGvxMySbHBa7R2LcuVK7HjomTamXU29KeQkH6ejrHdrTJ5g8yNf5wkAW7VMc7jUCHzDRY21UwwYUcDPcXg5kxF",
  "key28": "4KTxNw95s8tAGxnDcAqPXChxQVCCZxAVrWy3QJxwpFeBMMJpkTovTDCVCNPNGpkqCHUPqsFW8r7rbRQ5UAFq9YWn",
  "key29": "31YoYX7H2gPqHBLiQRpP5S11Z1kCzwjkDHkDavxpbd4VAou193tMm5pRJaeZveaqY81Exhis1BK9Xuq6owbYhC7L",
  "key30": "4bSmCiRMFEMc9k7bfXZU4sGJeyc9gMmPGYHWBFFxTncJVJNsKLzjHXcd9szKFnQAxPDhFwi8VNQLu2wpzNixYnjz",
  "key31": "489KpkaK4icCQRCZDoTqtVuwKxGQQyz2gg2oGnif24XSMmWfHExnA1tBkb8rpk77Wru9PHphGzzznJBDriEB8KH5",
  "key32": "2fGewpDghBNX9twPiBGcL5kDsgeZZS7tFhq2pUggHH4KrWP3VwACjwGjZh263NDcMPaUF3kmC4jgAMHaDTTbWvgh",
  "key33": "425QUX1bnM7aAKZ68v1NHKYpWMeaiaBCLEtmEf7MxtMY7b4zNviY7UfaVTH1j9r8AqXvJ3ydKzJmigzoBtfQzGNW",
  "key34": "2EwjMjrh44g5atZcxkZiHbFLLGDDaxMufbgBC6AQDbkvSPZU5mmFEinuoubrzeW5kziksGuFbBfjEYjYvMRD4aHF"
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
