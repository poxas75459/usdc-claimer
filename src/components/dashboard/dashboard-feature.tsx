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
    "5pSQtAx3uMi99o6uoiZ1QDf3PGRwXoWBALrZpbXdhaHEpSTtQoNJR1TREfXqFFFkipTTyamERGH1KBYp1MLt5g44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRsvVa5w9JneJzwuQrdt6gyVzXxm8HXgaNMiToPJw5PHPUT2ioErsPWmUF1eWBWAGnzLemTBoBrjswLyfCtRXJR",
  "key1": "4BTv4eXDSZ62bc38RCjgtDJR51ddBafDVMb9RDHU8m6RLLv8kPAz7mWimBNTA8xCvvaQwHw7XGDNYZXuNgV2CTgf",
  "key2": "F85CwThripa9oW8MCMjnoSQuBvN7RsyCpFRsYh7FFo8CezsRHENfwnJoK83wSysMHChtYwZPjvFKA2sjfnYPdRL",
  "key3": "DZABxGJnw9uPKMvyHKanytJZFYCxD5v7A8ot729b2GjSVads226XJnD9dEzesQp7HYvHDq5JLgFGBtC8gh4mqKN",
  "key4": "4A7FuwZ1nto9RQzKoZeXfs1riX5ZBE6rSffVuVCRNBmok8HY1TJVBqUTCQFAgLhyv9ry2anZMchc2geLa6nMW1hV",
  "key5": "3TYqoN34mDpHMpvT19LHKTaZoGWpu4X7CFGTbHB2zox3YonyKZZPQhfxB8wcXiC1W7iNRVT8N5zU5PzF8mkNTN7k",
  "key6": "2tvHTjbXsv3BHdTUq7CLFUDnJhLDTkwjUD5oeKoj3KzV7iVNp7Xs2idFEnRnPmUBZDHN468XrHVcAu7WCgXxDviM",
  "key7": "22D7YLJttAivxVS9beWH49QFdUtkirnpNBpZUr28wJJDHmEtKKqd1rSFVX8B2nJ1sGpSti8fSL8Lg2K5odEzZSrA",
  "key8": "4LQp9pmWV1wTpekDY1ML8wPcB78Lhd5Y6xC73PhohupfS43GT7KcHSWZUfGj9ifPUMgJDZ4UjGZGiKdUSkzX2AKK",
  "key9": "5PWqw26qJKL52eyYG1qmeLLk1GqawYxypP6UW1SgANkTrVJ79qZDrb4hG9nzNAfuJq1e3XhLAagbeEcqYYvY7L3C",
  "key10": "5swL34H7Z7i7RfpiDaHvPMmbk6X4DuWiEGsbgoU7vuk97AgYx8QpPXGMh5ARCMiwA7nxVi4ap1uY2fcrT9gzdmY8",
  "key11": "44e2UozuRwQQB7RevTnV6DuDhbZFU8zK2jMet3UqLvUHabEzXgVZkuARmCefC9GHh76WMtpWhEL3y1bbpVbBi2Qw",
  "key12": "2E1oqqj9TgEEwWiDszDCzfHrTXEGT9dAwXZGkZmLGj3YpAwFu4uE67DRZXZMgjeN3jWeSCzrx5hM7qRJcPbjQYVa",
  "key13": "5kdNg7iqPKECwBdK1AmyY8bRZCC4vhr1muXRuk1L6y1MD7e6VjR9GdvEQHxB4qDYfkneDv5UpTv5jPvm6PDhTvQF",
  "key14": "2WvBaLMZ7i3nvBXbbxJHsAEtjWWdf8SNy5pNLH12xXMUnWFxeqvsnYb5xRVrJwiH3bBWDrASpSo1Veynr3zBBCKZ",
  "key15": "2gaSnmsB9B1do1R5UXnUBRSoqyYt7HXCkp93cj9cLmwigwt6PSr7LE1JrXr7FkQdUvrc39hG4VLBGtSqy2ZgTrUK",
  "key16": "3waYRVMT6wtjiE7Dctetc4g4QUfZCHhScrT5xe7cWStPbPeTjV5UhPmJVVrLuMyUqFc49KcL7MhfMBcSMzshLH1x",
  "key17": "42ZiP21PrGwC3AdjiUx9UWqpz1rpDsPfFDrza3ibLK65wS1MiqVLBvpHvLDh5eav4SEGv6F9aR3GXJ8LaCdZKq7H",
  "key18": "3T1vLnwahpDdPU8WiDqF3L5jh45i3u3EDFiyTSwn66wZumBkYRHTzVgwd1SMPKLFyTRsJFhHPmEavdytXgawjCVN",
  "key19": "227F8zsjsAYP5cFQLGkWMsFfenLhrXGCQxPwR13j8SFBekKkbioFAH6WwvvuJruMouANTbGPEVv5RGuy8YtDBCtK",
  "key20": "5pwwafCyeEtUb8PeQ2tofZPYVMjfeDC2kZmTTih6LZZZ3soC9p6e4b2qFYe9UxA74M5XSF8NrDaPAQc7MjpiWyjq",
  "key21": "2H4qJmKTWj7tjkpYB7UBkefFAa9zXsmd39uGVh236aozAorct5uVZPHBG2XV1yZaZmmFFi65hMiVgJS12dWQm1NM",
  "key22": "5nznNahPrSigCp8GS9SzyyunmSAtJsTdUUEd9TPWsRwk5V29oKytCLYTXBbcH1GmcPbc6W1AL4Cnj528QDSmodo8",
  "key23": "5whbb1wYsre83YagwawDHR7ZLYrUcMavXF5BTPbZwWMNpQanGaNKuZvgzCLHPiHMZSrAHWyY84Df5LYttcNASTFX",
  "key24": "27tLcRquEVhk1Yd23GynuLQpT4tNCxY2DSEuDqc8WYAvvcvTEBw27SMRTn7JPW5wLed37816APC2p6L5Ln2scLTm",
  "key25": "2JxPcCZmujouT35BeeHRf93jncQeLcMiY3ARScV2dXTSwMSRQGWGLTCkmfyRYE5EuoiMJR4Aqe6TedUEqHfTqeDL",
  "key26": "3tRFxLcdkegbmpeX4T927759HDn8dTtPBsFFV3hsmP8hUqTNnP7TLAU57aRHHwjNfTe27Mtq97dWnLJ7yDW2QAku",
  "key27": "4H5bKyR3BV32uq54wWRd4vcREENr43pNPoyU9fZGKNVY9Gbe3k3GxtkZCfo5QuhS3zZVeGBm195R2DU513tTLC1T",
  "key28": "3Tforn4dn9WkfTAHb87RmCHgK7PxxPgqnULAYRni8VwpmUnRC8vihrNcdCYR7k53uTUDHY4EAz4WLE84g7xjUR97",
  "key29": "rfBdrF5Vtan2qVRanB8Aq51ont9ok1ftJw6ksbjCZk3ZiK4mjL2rG2L37SqqimXekvCBcKmjKvjjQ57CZH7Lnhz",
  "key30": "5dWKGRSNTBfnmd9K12jSmMCvMTYB2mMW3cfgJuvgkGyvDS1nTJXseZ9akN9MJvBfN78S4LUGezxTXJASCmhBKTve",
  "key31": "2EwuzkgU3VB7XRfV4UcR46d55kmsud5PyfpQNJkiWX5Cikh7jUe9uEuciaavdyDALXGSnboQ7g6y5VN1qmdLbj8W",
  "key32": "JXNH4vNjdWU2TMkW8cv4vacLqqTZ7iKqzyFw2BCxmivXob8554f7nzt5VafTATUEgvF2qj22jVmxJ7xofkiaNTL",
  "key33": "25TvjxaD5F5BUw6tKtvcQwy4CDHT2ZK6vANqg7tF9CgkjM6su3UBYT6UqCaQ7TLuEwhkzQd78TmXtdXsvmYUwmMB"
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
