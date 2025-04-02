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
    "2LLWBaFh5jwcqYApGwMnx1p7FFw5wFubxuShRB7rfRDufVrxBfJPDFepQEi2e91cDBH11K8UkAxdPWA9cMxfXiiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e7JHxKbzsGgiCE1K6f2LuiiR3vydykkhPNCS5ZyuWDvVo3vgc6DN6p3h5JThPvrj7P5w8bT7Rwzv1oJJK6ykXua",
  "key1": "46ewCf9cax75Z9G6o6Ag9BBpqJg3Raf3hiZiYQHvZXtmX3VKf6iFeoEQmArwH5pPmbLUdLvjycTTHpAdkj1Lm5LP",
  "key2": "5joYLdwDRQwMseXPkMJMUGBefLKy764XVUX3CFyVns9DhMsAugaNBR33o93uWwF2PMew4kJBHUjR949XyfGM3951",
  "key3": "576zLqhckUMZExCuKiXdFr2Cz5KKrLMMB1FXbamLdVYvLm5deYSjEvZuX3A4FtE9NxPvEMNcap8qyHHj3S3qxBKr",
  "key4": "DPze6hpeDG3nFKBZxG3f97SQ3Ys9v449KXX5yPjkB7Y6eXREMaPqLhjcDG8GjMZmwxk5tV2TaUBZ5pFfWZCKbCB",
  "key5": "2dp8cnqVJqAfzemd8tYSUYxTaQ1RfxRDyzWc8ThCibiZnB2H9p4sF66BJyG9CzNp9s8G94vpPbHUm1AXvJ9ZLE9u",
  "key6": "544sL4n91xjCpfcUuH9aSKgbzJSnxW42ZvCw1jfuWiZTZkkxAwvXPAmVpW1mLiyYheMxq3MbfN4djmgcPc3FeiYQ",
  "key7": "33mfC3vEYVXbCj5Mn92KR7HLYyfyJyeuG3hSacNNtd1ycwbf44sdhARymJG4n5HWm16MNHwVtVSGq8RVZH4tf435",
  "key8": "4RWkcZkdsC2UHjSKt8Rm6zdewfpGejR2UZCvxYuY2DyXA7fjLJ8sh5ng5WB4hWwxG285FVT3dv1taLoH1TBhnHUh",
  "key9": "555EDc5eVaxUeuAbq57V5VEU3TsqPAvymCAvERJpQzVd1RBK2rJeQdBufmwjFGsAJJpm8CSXcBLAcf57TJCGeYU9",
  "key10": "38yNgZ9S81CFhHRRXuyosKVYEXWCABqFgeyfSz7A4HZU43eqxNXrYpqUGJbtGwfxKzUqVhtPFRLFgXDhuyFL8vhe",
  "key11": "4hXEs6pHPJL4XygrCjQ4Jdk8r8RUffnCapEXMXXLHRH4fFo1Nt7A8TtUwvkGS1sPKxFy1rqjcZYYxUg9opzVsDRM",
  "key12": "j6UD7YXuAg1sdyuXQnKPX6rzyXZ5VzKDPNFxk5Es7L422uPgxYAk49yWQjoFQyYcjkbhCgBh7TaKAqW47Vi6yGc",
  "key13": "5VLzZyytenDqM6RnxUHifhuWLjDqSdiaSGf4G1NwXTPQmCwJ3YGp64XiWL7WpuYuQa1LcZkCUcBS28cUwKviw927",
  "key14": "2MgReH86S1K7Md7zPA4ZZpqxhmh726WNZirbFgEZggDrNALiuVquhyneoyFJy2vi1ois4P67BYXHm2RXMKu1REQE",
  "key15": "5wpEBMDTLeS4BYnvJJzxCDemR5qb41EQr4yawGhsBn9h2TxtNMjg6WW4jtqBw8ahAR5iWMBAuxC2HguhhFN41Sm1",
  "key16": "2eHeQKjBLxQnmCQzKR156kz5ZFhaEPEyVztViomJZ1BfGZHtEBjpkQyhJpxVsXoLrTB8TTNMVyZBCtvgLhsakMVr",
  "key17": "Gzpod2M8xM16iDNqJNPc8psBAbWyaQAe68pdyJug647N9EqqYBRAN4vaU8ES7aDzXdetyhTFcrwwphV9MFpn5LD",
  "key18": "5sSjexB6qtWKhwDPcscAwi22SjQ4HffAst6SxJszBzconpj1q4botaDKKPti2JwsZhnkAur4CAt6qnzPLR73tWWu",
  "key19": "46CXwpMjXtMxZ72tgE5JgyVMe1g91FWydhEHBZjW8kwJzfrBXtcNH1dA2ox6igTsaUVfXU5A4XRtc98Z9B1zpWb4",
  "key20": "5JDfjMtFZLdEvVdg84r2TrT8bahEMmwYfapwAL38Foq8jboQZdfFnbp7bCPsdczWoB2eVmsCAzMynhhcgaYYwpZ4",
  "key21": "2Adp25zpyowgiTt7o3SGS6B3La37tVgrsn8bxCgxmUaGuDwF2d2WDZMYrJz9umHU14PewFzdCGhNy4wpDomigf1R",
  "key22": "2aJqBtVtATDQZZ9sXdrKdjdFYwcb6sgmcLzFqDNyEiVMGrw7hX1jPQdbv8HTjLGDw8MG2Vi34a7MPtT9Rij7ubJ1",
  "key23": "52E7egC7vDSGufreTHMSKnsT2Y8F9JtEvFj3Mu3SQ2H1MUxFwyRK1mqZ7B2p22Wdb6hhffV8Ai3K9ShuvR8V83Us",
  "key24": "2E66zLDRt5fgZXfQaoDXq5BxFtMJvMhCvPTCR9WcK8H4KoqtZWQpUXyJvxQuwG6B1tpMNgDSpUR8wjd3KkA5Vxvh",
  "key25": "5vrYpCcmyGpBg2swhZaTBP2TX7YnkMytdAasQHTqNf9Ssq81i5mTccfqdtZ81XXAQn2Zh7nYc3fZXnvTU19YBhxS",
  "key26": "4bWTT6Q2aNjKaXg9Z2EWxWYQTkEUPc32VHvvuySrQWPKksuBUqxqMAvPaBVADQdxKNS1hK9nnFWB6xbcmkzuoYWZ",
  "key27": "5zprmbRFsrYqyPs4PyQ7uaSzxG2dREymgNdyDEiS6g1Y51ANMarARmFwv4ELcAjgKQa9uZGB6thc2sDCTHBdbHKs",
  "key28": "4fSJvZT5jpnr7GDp84pseEkYZvs296Rok6i3DZR2GaE2SdeFifkfr92Y3Zff3cG2D5ujmqZiG68ZoukMuCy1xLy8",
  "key29": "3j5UnTK513WDN45Mmr3J1kVgyE75KR1qL91EUchQCkF8mzLG8bvPHT5gaQkDAzQvVAKrohAhBjS3SncNjdJvN5Bt",
  "key30": "4pkK6WetFQTy6qvPGFx3MhJY5TqS8R33HYFUgnfBzpFTXAc5eHstEniqz6qsVkMGE2P8CryRP6n2SgpLMHzWH3va",
  "key31": "jiy6TtacYWvd4t5wTcThtCkN5aorFoQRCyMBEeQyNx9BnUnnW8c9npYWLyMDjFww4Y1h4JECbbsfUtXNPL3CAL7",
  "key32": "342p91TPSPGfe5xJKCn1qbshTUzk7yR7oYYESE8Y4f4JhBsxhqoWYCZityqnfFLECFiSYWJUigY78ac7gCGYYrAk",
  "key33": "2JHb2X6xUZKu1ewcVGPVM3pHGFC8WjbGPdQ356vBaVc9JBedcB38KE6UBQd7DNDTKfTuqJtggQ6NLjXoqVYEheZs",
  "key34": "3PsUWnBvbPoViDbcEmei9nGCgvowc1Z4AF8G7VXCjGje4XYpH78widLXZKcjrq1dTUH3veLTQBoiSrAdoXxcux5s"
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
