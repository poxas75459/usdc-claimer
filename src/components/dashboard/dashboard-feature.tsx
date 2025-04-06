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
    "zCUSkrDTcbz9g28apF9y5JT3e6RdCChWfrGuNL5ReJ1VxY1LJNvkKDj97aZgbBGwSZFEqyCtc52Zpq5eDVJQMKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BBwy6KnLLLzphDpU7yrkR5VNLysae8FAh54YxP64umChPwQGAvJ6HAHTkQPSwRMsWBJ398VVTwR6CqkfsBvWhLU",
  "key1": "27iEPYK2rxDEhaBc5QRd6regbZ8M65c663wwPyPJ3cVLGJZU75A8knbQXUfQMZfCh56so94w8U21ZoYQ6FFor2vj",
  "key2": "vhcrAPcWUkdAbkfrsimUEiBbaPuSani79YNEtor4eeaw2GtTUAYUAMwrc5TecgjLL14gktLzzFyquWi5NDv8wSr",
  "key3": "3EneHLDcpfqPTYrTLMZRaQwb8L7mcwZehgTnNeUx4s8UewTbB64DDLLAFcUGDNFUupU87Fj2eNdPjyRT1Hicp98j",
  "key4": "2gPNnUAr122smXRBLo9g3DVcMFgNdJ9bvhN3mCKrE19Xq1iXGgUn2GXE9zNSPKA1zbUpsj6wgVo7KKB53v5SjUKL",
  "key5": "2tmNVH7kmE8A4MRhSH45EvfvG4vapN6UNgrCHRY2Vid12g5Z8ufYrAznKBdr4meiSR7eZVHEuAX2chUGp4VSmkQz",
  "key6": "2A2QuJGd4AYGyq3U3gNEta472z6YDDZQKUBLVTBNy8344ZBLxq4BHmBFZw55cDPWjFFtgnfFrhFGSn3vFdu45caK",
  "key7": "37UH2kxeEzJ8eeKEk8e6cDWLciXfPCdCpB5hGwBRjC1rZWSkRquLxy1ywWzZZQAwWNmaLwD18hrEaqzr51VR2sAR",
  "key8": "4G2MKPyfEgHcmeYQCChTkgPgRhRSVqGXdVxihausgZfV9pyfuyaK8u1kDJT3YJNgQxDezvsJgsEsk7VPNk7pSq4t",
  "key9": "349tSU9A6fJ9g6PHf7UNvinJwfTwkQqKwg6kfTRzKgqE8Qgzdfh9dPp34YrVczcF4vGChUU6RdsYNiRZ5sApuSK9",
  "key10": "5trmCFehn499FkLTtZPnjJEEULc4VVKQBG1wTJknPrShahapLaUDBgFfX2M2tQmHDFgCFhYPF26uEyEmnYGxBesi",
  "key11": "54Js3TBXWp6kxHkPiw5ER87N9HAVDnvXHcnyia9YfpU5ZEkEdLEvVokmKo89Q7KwSkc7ksdamwSgpExckwUK6jxT",
  "key12": "5mRFHueLBXfwMNngtiV3Dd4G4rw25RiMBLUHzuVQSSLdqyESuy1ZMry6egLfuSYxgfdWNefcAD8Xs5o4rE2eX8d6",
  "key13": "2DN9E2un8yWGAPALfuqJagC71zdGHm2ssLZSidJxY7xEnsFtcCTnSRqyBejSXqQQUXKHtTLjnRKKFjbveYaDMaTY",
  "key14": "3sGDpPryvzAwLBG9EHhvPmxQdxgxMwnU3NjRq3Cyh6nRvLP2KbDMSXUyo6VUpemnDV1PrnmHJMBDXUifFygcfqE1",
  "key15": "DKqfqXSKQJA3DMg15BjGNbrRTF1EmMUeWtKU77k1C1xWg6ETWRVuLeEj91Fu4MC1r4mgnSp2YVQ7oSbLs5rTqbF",
  "key16": "2toYamGR6CjjL2f2NhB7uGSvC2LAimdZvYL6MT4LDtpCYoHjTzyKgNHszSNEdU3MnGgt7X3ciGmSfzp24AQWvV8T",
  "key17": "hubQLJrEtUMHQJikXoJoWeEYzNFqdR4FRAWAQcJ86HJ9jSNuKCLaNmJRsqpJZihUQBg1BpP8pw85PYPsozN3MyM",
  "key18": "3rgk9fapQFv8oUfQfieZSXZu9dKjszKBtjwNWJEw8YbAFMvLE3UmtPwV61mwJvba7NyFHkNEu7vBYct1SsUr5VeJ",
  "key19": "3yhTutVdscFBYf7deAko2rB2crKKQyejGkLmkbaPZ6uaT3VRnCGpuoFVNcktXAV3MCFth3rtnt84jbqfWd28PfQJ",
  "key20": "4FzNM2JsLVpdvca4SKWFVsjCiqcr8Zc8uqnHivGrpzqBHPLgQUCSQkidHRjvLk1JH6jFMrrCKWC3o4eHEzAnN1Wj",
  "key21": "4SYGZfqAyPy25uVrKzxZkNsQKBvsiTFYnRWmCPXxb47m3G92GMMQovs7eTBbfyRmrngxUo67CpnDuJM5tTA5pa4K",
  "key22": "27fn7p5DHxVGuzBcyELBfR3upC5iPHuKat6cMcdCJwJBK5D8YmFM71PqibkqrhepuRr2CuKeGcEBHvCtRTPbM5oC",
  "key23": "5qPn5EYkZVjwshwscJydVovU678vfRPyGZosb9gmEz2St5AZvUqWErjW6Rrc2u33F2Q6hHLcWHxoqLmqweDDEFjB",
  "key24": "58Q3ihoU5siCkRAZxtMXHRXKe5AYF6moBBKfDVREfm6tChdqoVMeod8o4hkCX6GQjj6qDfLLCbWS3L1rNfd7HVqo",
  "key25": "3dnSkKAAMEYcjGKBeZ1nGUwBTUGcYYcwRnf2Hvd4tzojijbqRnnYCVpDstZ1v68VacqvweFJnbr7RZurE4jYyLfM",
  "key26": "acGNewLLqegXBiSnw2LKzAvh4VAym9i8WJ3YF74dsb1x3BAoVrvnP4wSBb2hyqMbHKg7JvPnVZ9wRJ4wwWtb2FY",
  "key27": "3Ki2c6rbsygjhfexLy2GRkBBYzSu6LcDLAhmNa7YNVRniSArNetQgq8ozGRAh7NHipfvSML3Msc7NN44Wi5gMd4b",
  "key28": "53PBmCL7X6L6UxXWjdXQbqfDYts6zZpEvyzKj1cmw3Pmrh6ndriGXDq1pkoPAcjUCFyXL4CeHncCVafVAc9cHwMF",
  "key29": "56M84fhGosDu72FCG1WCj7F2p9XDbMJbd9YZ4QGiF72J5zYN4m1hGwGx7bPDpKhhWRZVtPhtWiR1MyJ3oHDMqvF7",
  "key30": "5pQtpFSR11CkRAjadFVHrrbVcRymGRuS1DKjVEjkCQhqF1NtGG1EGWUPeBjYELi3duHaqtLQstYs6qLQi3WmZjaA",
  "key31": "2eAcSvBqc8LWtmosWB4KLeVYrzNGgNLFGtRgkJ3ZZmmKZ98FWXuxqq59xbHW8V9tA9wZnnsXdWwiV871dUsUYtH",
  "key32": "hxrm3FJjk1wUfoSisbfdGD82VdyYUUvfejoomL6PAXgHiikLUG3E5GVcafFzSsbyvyakf6dWU4J6EGm81DKB7VD",
  "key33": "5fbEXCZ6QpVnZwLMqPhgoTE4mmzKYTBeJRoYXUEdMdQa9F8dxBrQyHv7n6fHPCZEU9P6qG7aHTaG7nWEyLCdvLm8",
  "key34": "4EA1m4cLEqJ9Dx6b3qRZHGFqHWixyKWsNZH37TZ53Z3XJv8W7awpqmJGLxnBQZ6ukS35YSC9yX4TpX7NFnSjG16E",
  "key35": "2EA9pmvEhAkqDHJAbjAChoPr1NjLDWkcdEh7bbKgaZuRo7VE47D9gDRUzjKFvke1wYJypRyf5DZkv4SZrwueGBHM",
  "key36": "2s78wbGnzY67ESoLBn8mg9YXPkGndzqiZBKCpM2M8LwbVZf4a6WHKUytQGix3F9Tvy5M6CN1e8AgTdtpRS5VsAPT",
  "key37": "wkKaSCqaMc2HPyJRXSh2Bv99KgNqPocJhHKpcNS4tVpDktJp2m3FeHUSxHRZi1aVg5scezqouCJ1XEBFLyCVYz4",
  "key38": "29yrfzdxqR8nz4w1b1r1XGJtvaSoXELHAxKMSNZ3yPm79X1oxxVhPWxMY5n716Duz9FqjMSqp7jJez8bpxMKntVu",
  "key39": "5V4umWEp9cxnXG4QHxgNd79xbSpe6NgAD9BbT2Rvz2mHMmDNKE8HcxtbyG1pGDWnCKUpbx5tdsF3hAaHB6dxXN2",
  "key40": "4heuPXvZpjF6NW9cbXte3WR4CvweiofdygawENcAnjzJNrqsLrqWgUwE5iqjCAdK8dUoqZwG5j4uLdafVqsg3S5N",
  "key41": "pqra7KZ1iCoCPjYWewHVobf3xQ7xqmJ4vHVEAGkdQgJsTvbP2fbYqvqRVTLXydo9jkFszjG8tu2fqc7MLvy2eJX",
  "key42": "3ccm1SjT4gXCFjjkNrPeEwF1Y7Yk6uQpvqVaVHME9irtq5xCmSwN7eUEPwtau5cgn2cBMD1n7EzCtch6CrXBeWXh"
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
