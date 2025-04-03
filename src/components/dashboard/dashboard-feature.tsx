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
    "2gdCRPJueANJmmq8A3pE4pNPinNeGTb3Cvn1tind7fhZHnismEdodh99w6Jn6iK6DXfBwPq3PdUtRmtjgQmtr6Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C16aaSpXkMWqyHZb1mmYo6UkYKq2NDm5c3AmgLgCjuqpwfZbDgusZ8WgRCcvk5XreLhc5LYXYAgvtFFh48os31F",
  "key1": "4kXFm7pmoHaSV8mRNUdMAVt9VdK7w6ECg1apd9JvaBUTXta3sjgLjhMkfYw2To6WgKzsMmc278pMvnBsBNAjqmBA",
  "key2": "3EWWnrHXc1z6oP14dycE6bmj4oU8XJ3G3AD3RRF1DZjg8hXqoEXFfZwfSDDtiEMt5QVUvnEXC1fiUatFFpdCjdds",
  "key3": "52NPWS8V23xPwhGLfWJwKGxC1FeDFkW7G3jNNkt1ALwQ4iEfrN32akkWZ8WRnii6bqgP93ipUQtAkaktB6hreSRa",
  "key4": "4HndX7rWTy8prJXvPhWCV2uAknrGynSnCXKPLGLsYE6dvSCVeyT5aufd8eeW5knWPZzRqYcDFSM7yDMyS2DSd18W",
  "key5": "5sHs5JTsmbCsR5fSnbJj9TtAY8Hjt5nmo3MeVacVW7MBuPd8SdGpat3EyNrncQcLddpQ52WppUqN6BLufnVcdnn6",
  "key6": "2SohjuUKjQSkANWzGmhUGMJWc8suco2ttJN5539sXVDA676H8iUSgfV3bEDAnT2PP79DDGftfbkVA54pRzoUW6qD",
  "key7": "56GquScRVZ6QUZ3SKpga6ivMLLCfcHwZdycbF3mj84xXd5fzCBtTKTQcHGQoabLFGMU62F8c6MVGLdYo43VYrMbu",
  "key8": "2UA4bnyENjpUZYB966exzWjvjnALpS48kJwzmBswJQsCKFC4Xr17jZk39uytH3ikvR3XYggtk8LLMDC32vgrn2VN",
  "key9": "5sBsNGcrLMcLu5ZsMDxfY74k4AJYr6iF2VQ3R7UACiRYd92mryFnDhYsVy2Ws7WP9utymfCuEkcXfVsexkWUb37b",
  "key10": "3vTWr1ZJ3EaiUdiVTYoK1w8hFCWWg712VYDTfHc2rry2mZeK4aBt2Wv4sCztytsyrAC4MKY6979Ydwby525bFPap",
  "key11": "2yJm22yK6bGG5nWTMVoR6jUogokMzdSLoG9KHGyp39WNAcPw6FrEgHjJnC3cvGq4NVyi8oa1bPKU3fEDVdVBRxK7",
  "key12": "3pj4Af1SvVqyCA9khQnHqym1fusbQ8ASawjq3i2LB26dffsyZwqQDnKwG9vzCFTuvCtEdwo1DD2twMhRhNSxyTkW",
  "key13": "5KiXQp7GwfhJk4hD6fttTnxoTXdL3BcnHTQPVewLzkyF8jH2S4YBEdgQVqQt1kPhyuyvrKABTfdNUNLQ4LyokTn7",
  "key14": "5fNeyqSEdCaGYNTHKsQ3HaBEg1sWVMFbGHCddp1cTKC4mwh3praJHpS6v2f2St3sR3AWG22NQbZB3kdrRE9m41JF",
  "key15": "5712Ew4MMtRtLhT68fk7erYAwf5M1gUaV5ukBAukseahfbFY2EnA6Hu1Uph8rEZkkhLriY2ZSZzhQjYEK7LNAT45",
  "key16": "Z4GnZVKB7ahdH5DcDz8w52LMXsLDrXa1ExmJDBrmtkMnafweFxPaTmUVnfwdbGf7rmk8UeXQJB6M5MzbprvJzmL",
  "key17": "3fddk5eBFTQv9NR19ZArCJUtyz3c3YNXn98GANuVySMSjx5YiY9ATa9WiZYr5irX2PZWgWaRjRLhV1FVDP4DPJuF",
  "key18": "2ufskuY1QUiLQeW2PPX3FHQR2anixdzewVi1rSkvWDU5XFjF12eNoJQbvPvkKceN2MnDtmoZU4tCtWDvLF8PjVce",
  "key19": "4KzonzrHXLdSsVJ2GboqSdbDXbhgDv89S53AoicJEfA4JG1xHmpgK4yLg14b9KDEzYD8Hgs4fz8zinPPgwSKAfB4",
  "key20": "3wr3doCiXeEUvV3YKjKvdK7bqyDwYZsEurMKQXZxAhTFHKkGiqf5hnreokEnWTMT7cvhbBTvrtSCTPVsJ2VjNw3m",
  "key21": "3ya4kauwkvfayybHrnNVgZ32UumTcYcKWH4q3uAEage5XkTJAASKxMXv2HgGthRBULjhb5TD3gzWmUNrYejnZjvW",
  "key22": "4uemExBWose3ErNFgbEmu6ztf4WxdaaAxvdENejqngAGNyaDo9Ug73WQtdLYyda6FFt6Ad7jtpkXUhi8CVRRzecW",
  "key23": "5noxey1G4kCDGhg1ZmuiCS8aUaJSiAcAjH3HtZPH8bscEdfvtkggRSD6wpZNVFQWwkyNpLfTfprkEg2YuXXBY8gZ",
  "key24": "r9m19xq29T3soNCjAea9Yp1K59Luf2p656nsczMEisP3CZTvtyD12K5S4J2YufCTUCNZ8tRHWHnmzmXM3LojD11",
  "key25": "553rD5p8WdKy1q2Jd6nVZeBMd5kd3fKHCY5WBqmbBgwgDa8PML5tqZny8uem5EFytj5sudke3pQgoPGtppuMWeqX",
  "key26": "4Z5Jdm9rRp5cWibgMRUBodkjgUYQ54kNvRNHfLzYtqfGAcWAZcTKahXtmHNeyeNCT1fnKob1Ld6vFcuG9aiNQCty",
  "key27": "3e3qa5kp2XaqdiBeZV3qZHzfuDLhtzjW7CotxBmyHrjnFi2U9BXfVgmYwW6Ev1PnLBLpwXoGg3nsN7mf145TCQXp",
  "key28": "2hJfqdnLY2RGoSkE6D1Ht5Qqb2FhqhD3CCMM6eGyqwkBcMU1c5dsmDzhHaVdXZEY3qZZdwwfUpmJzbbTWNekzfyX",
  "key29": "5j2RdbcFdrtR4TMnTW4UiaPSYZiR682agAcwjsAgJaBRmk2n2NwsLkMD4vB7p4kmVxF5n3F2htENBQHSxZcwCwx4",
  "key30": "4PXpWfmNqKXcHTUvFzTRKUhBJrdmRXqAF9W5yfy4SnPmh4YZm5UHeae6ASUaesjA1ZfWYgiJ2uNy3HmYzTBsYXrN",
  "key31": "3DueKekY6sqgLFgRcK3zQBMuEyJwUs5b1K8uaqxSZ41D2rose6WALqN8NbUL11coxXEAUpQUmKQpxgrHJv5Hx8YR",
  "key32": "4pD2KfvrQ5JSpptCovz5ATuqtChJvrM5dygjUce1n54VqkMgZmAqRqH6xxtMoBHTZeGvigFUubSSi7NTmoQz7ETu",
  "key33": "3qTomSw3ShUPMAyET4xR8d7eT5eJ6YgZKCQKV7hZHpHVvWaLCSqTWqd4tVstV1NYQHEVeswAtigGkP6NZVTpECfW",
  "key34": "5YsddojSNVhRK4tqhjv1nVpzbhwG2RNZ8ymsVayb2mi7oT4CWt7GFT9MFguKJn7kLzBiiBewWkcE9fm2kfySz5Ax",
  "key35": "336Ld52sadH4UNyHaBv31efWtXsNtJpwvGSaGc2kKVT8kbCVpo41MECXpDKPbH73G1JuvBQ3RL7NqEBUx9S4XeiU",
  "key36": "S6YjQiJyuJmDKKVQgUtoxuA6eT3tERSg3ghvFBUh22nE2CjVnakNGhw6i4ihRg74va4J1d9yfbjKv6ugjAC6HTc",
  "key37": "J1AAgAZaUf8dq6UiSVaYhH9ozmVZNeDetujvziH495c6PWcyw49cWJYKne1zp5hHu8G8E4JvygmCF9uy7cbVyXC",
  "key38": "23N1995gxJACxYCoAWDGBs6o1H7nRNDapueA8EwD29Bzv3AyQUL4RH7nuy6DVY92BMcd3BwjD2jitWL57EkdxKJs",
  "key39": "5FNgNGgpBjcqF4hB7p3twcPZzfcPcCdpyGJPfgvCMXChn2AHTXzaeL8WXjQFdzeVrJoSeXo2Ga11vsY2twJD5s3X",
  "key40": "4Dwe68uhPYv538dfiFcCcK9wSFpCh24f6DrHH6dkf7DbYto2oKxPb1PAYVfV12sNByFmm54pEZG3tQv7T74uba5v"
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
