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
    "3F421zKdAZHc5pvM273GS1NFEk7YFeHHF3joAP9wHppV2pgfuG4Z172rmj1virMqp3B9oFzeP5B7EWKAi2vVT5nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCSMQQRRNE8fdS3SzTmwddTmQehXYo5DKd8wDSg5LApyTVnoFUBVVspWNih765rnrSVi3eQNKMXdpa6eCrL7qxh",
  "key1": "nf7uhCPoUFijG7xxbcwiywh9jAbArgf4gfskzj6TjwaGNfgpCKDU3uTFWNM6uHAsgyt8673FDca1TcyGgQ9p1v2",
  "key2": "42st5grUTgZtVGX5UdSzVC2sSadFdF5shEUYbR17Q75osi5btzFj7kHSVUeoPCCXQBvX7yqsqaGb6YNTtm9e5itK",
  "key3": "4XD1A6MSSpieWhcENVNnuNHBRGFhPB4BLXhfTukzuhYLUoQUXuy1tpnk8E1h4ajAGZ3amF6BnyVzaVwoAdaBncza",
  "key4": "2YpmwePKqxXmzZtfgUX4QMAYoHPuiidDvvat2rfdYUhMKQwYjCK87ksycXFpurjf5wts1dKNgF6zvnTXdSWmuehR",
  "key5": "24j57SfkPETxe9CjQZ6ZhgqWVVebtku8DEQrA81axRobyzrpn3dSEoek4NBeDKMhM376ybi9xR33VKxfsmDMX5ta",
  "key6": "2T4RgV2nkMnwpS7nMN2KP6UNPhDYRuPdYry4Ho7NDF3h7k9SCYEjzGZppQ51XwQP9F9Le5JZGh1FFfUwPg57qDWW",
  "key7": "2zQ5i31fQj5QokzwxsuUZbzYbGDCdiBDVVEpwewPi6dCjpSaU2mrqG96wR7Jip88dhaUkgqh2SsvkXmWRMQQ7sPp",
  "key8": "5g2VHX84yKvqxMEqv6vp4K55EuNGKfKjHUEhattjN6kYGVokriXSmQYDCAhNNsmtcDe5Q9orfXRNNLYFKKxSrNRd",
  "key9": "2kbiS8k3DYDQ1sXSxFfX1gSw7q6pbg51aGxEyFi8KyK6L9n7itXHx5YdXGRuv2h7BEgsxt14ZdgJfrdW3Yvjg4di",
  "key10": "3Q8xdBEev8Nr1AArS1Ajs9YXNKCUWEwz7RiAMkCHHFAABjZAbmmMEDodYnQi5t59qvV8Ftw92Qp352c5GLEuVvm4",
  "key11": "2jTJq3ZAc6dNhrFRJEYf3g4r9zfd3QVvwwiyFz26SiadPAXvZ1agXxtCbvJWsdUQj4MxMjjCEy3Jsf7qZ1C15Cg5",
  "key12": "2312F7223xmAjFdM3KwYLCr4wRv4LYDBVcxDdYZB4Fwg4mMYCVbs17zdzVgSrCypATJphdMe2XryGSXdLPM1wf9U",
  "key13": "DKviA3kvCqpRtCxLXjuKLwT2hbxB8MZhhMP1mhwvjnjX9xrETW8nBTDT51Ui6PVZ1cqCnjfrStsk7kZL3tg1Bpv",
  "key14": "5SfK4TEizfAK5VtXujDmruWoG2roxcyWLCkfxV3D5PgpBLgPx4igtHyuqHvoxPvBKiapT74gf5xfC5CDwpDo8ouz",
  "key15": "3L6Tg684rv9EMe4wwdEVnCV4m6q75af3CGR8mJyCft4eHpafHjw6R7nijYq4pkoFa8Ydf8Znj88UDfJGNtsju3Wt",
  "key16": "29FzU7FAZPZ9zx2mH7Stf8Bq1f2faTWwWhJQ5CJWLMVYE4n1T36oAsBYDut74qtB1TEmF39gQzQqek1jVZPv9QPe",
  "key17": "5vL8GMAxH4oehpnKktTwN5qFQWuRF2YDTrXESKvzwuD99GactxdprUoR7UtctLneU5p5wXGAggUJRhyBFTQmsbHg",
  "key18": "5rt5gy6Nvs1jHdHKeYqr4hqD7RHFpbLpYy421uhrXyVW2oYAwfQe3TFENtNaXgUa6u2L5AMCMw8m5LtLJ9nEnhR8",
  "key19": "5qX4RKAW1VFhch6fHgciM9Si9E2TGTAYVbJLgdwyPVFASyqz3ha2Sip4aSyHaFan1t5nG7C1ZiW5r2f6R8hwYauz",
  "key20": "5rxiTkkTMHEb4VJq55HJGTgtRtxLWfiAcHPDTdjmnEsj1DMzWQKQoeQmNCBWYErEWWKrhCAN3kZrP2WuTg9LU66K",
  "key21": "5GLsazvdyzDt1aZFSMquTe9feU3ti7Tx9CEHpiHcfzC7d9EPGP9jbYsCdvKy4gpVctAPDVCCiHiHxwUGHxhDPJDt",
  "key22": "2kDv3V41Mmx9Ei6bYRZFcayR9raqEVRgsJGfW8mrJ9VywQsh63QiB1QtEwsaLoWML69gc76qjfSK6nfUeKK4PknH",
  "key23": "5E77swUab8wNeeLsF3KH2BgcCv6Ba4R2uYfGEC8NGgmRLiFr3HAyLMbBNVaV3LE6XBdxbnY7ijgYXZo9LAzD4j2M",
  "key24": "3VkepYRDJwiPcTFtuxtCS5R2Ref1dr34mBcN59BCzJvieY94g8AMrX1guZydoAonVqqbc8tU3aaeESVsY4nLkPo7",
  "key25": "mkUosSJqw7kZnESkdyMgHnVjdFefcmk27fz2R4PQuGtPrVvcfcMK61QuTWYZmsFTB159Hj8pVS2JDuNMvcXnUSv",
  "key26": "2PdSKac6M5JkW5KC9rZnougSf5nduF4KCseaDQBoWh24vJ4gfCvLgyfYTVDsSZeQuCsGghhEc4nA6eshg7oJtRxS",
  "key27": "gerh55HeexoRmSi1JXncLnLNKsUpQjb9Srie5bh2GsaXDRoEPYBAMgfp2a2kXpZnyBoWBfWwXF1gRiu6LNSq7m6",
  "key28": "5zDHnNpWGUrV8Xivm6xta7gMfaNdjwyaBQZQdmCD3DED14rH37cUuFkVPtdMvVZB9QpZRtti1WnBRoBK2yRUC8ua",
  "key29": "5FwTuKeCaSDNBm5Nves67kfCThLwhVibwmcoZRGo5DPwddWpftKRGwT6tKNUX49qE5zuSHHVs3GgQZaon2eettjF"
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
