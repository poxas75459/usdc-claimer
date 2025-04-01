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
    "5Sbmq8NptmmBZKj6Fk7ezaPWBKJ4QxwWemAWKFRnYMnBk1Bmt7vN4HXLwyjYnYHjhRyYof8Hkg7GNfKKBEP1AxEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsKATuv5XUYCDyT6TBUStsXHkop9KWFLv45RU1gPGsP9AJxwopLd6Po6zCE1GaTLwij1ZBL36gCnUi4M6pUDRza",
  "key1": "23bzqJBENYVWzf54JmsGuHHJHY9CNZLnKL8VGgMYLcsRNSoSBrzuTaUhJEmp6aref2Z96C74G4KJR9e5N1rwL1KM",
  "key2": "3LZmS5ViDMNkfLhYeXm5gE72NgLRLDPC4TufjixNwze7aiwr3CWigraMbQH1H4vRGqa3wKU9KX4BFF7vxzkUVp1N",
  "key3": "2FggLKy6bQsdNo123ybgeeBcmEzjmkExfCWRkTNrL9FHXRmt6wm92mUf9JictvVNJ7sLR4Sybw78zA69FRmvXK6q",
  "key4": "4MTJ47hGaGkefDRCfqV6tFYoQVHNrfzLhFSfwJ8fbC2h3Bk3yzYC7iV5yKMMQpPaNpJ5dv13Px7xTz7bfNRSPPBc",
  "key5": "2RRU9VG3QiEgzQDTxgxDRVNY3TgK7Zzewya93Bqjuh6gZjfaUKFvLkEkWCa8Ua4DBv6YJcQnPLZ2L9Kcb8JQrtEG",
  "key6": "2TBDySxGgmJVL56fKjXuEMmzfUV6DiGBz9P243BTDsVnHbUUsnWSbrBfj1o2wBSuKkWNFm8JWzRDp5NgVw7JxZmG",
  "key7": "3aXm216L9jP386YJRbLbxx8oWcrEJHQb1YoK7sUCSDExsbFP9JzYjhriV4cvH7w4eYetoc3dHmHhWKuMqV6Q2JWp",
  "key8": "2aiBxXFpufDfUsQFPAxuUfSgQWUGK3poQYrXnN3oFSbNVAdv2KtCLA495B6yvULapk4MrbtsH3dswMtJ9YoaKroU",
  "key9": "531LrDMemH4nV9ALkfw8cNGE5gz9sMjJSf4dSS8Z6EubSDsNQVqfChE7SLiq5SyLyGhQmyiVmfvMYhHARYPTcCBJ",
  "key10": "2BBTkf4xTGv9bDkCBg7TFXxVZuheKeNtRwt6EVwwqTQ2WQkBxPtjyZdmTuYmAxqzGkpfRgqsiXRGtu1ksG12QtWN",
  "key11": "1XoVs6YNTkTddcbiwULc3ypemTn1bPxi6rTANArgNMCfyN7V9ay6qZb39FrL5twisVoAbi65QLeDHWxDdsrkfsA",
  "key12": "2hKRJxBG5suAANJPr1r4v8qrDTHEAksmwJGPoFco26Zx6u5VfrKAbxPmyCEz9L5T98ksnU8P5XpYYjky1m4YdQuf",
  "key13": "u93vUNFspThqQSY6uXQVYAuRRXrrYZCVFZMZpuutTc8jZszbuJ3DZTXaLAbKpVr1k7fKVqaWyfztgjtkPMgNYqE",
  "key14": "26pWSLUY4HyPoniPRuwe5FfuNiuZpd8YhC6RjVCcuHSd5t1v3Xv4PEhUSDRmbaf34HHbMc2Hkc4meHb4UZubr2j3",
  "key15": "3wGxjAv3fDVMD1v6wrLrfhEvDQVmCRPHq8J4KfRtBvTTuyVLLFDnJGwXfwxUNQrsTDc5Jtneeqb1vJqRo8wDfYg6",
  "key16": "3ZHeXTiCn59RqVD1um9Q2yU5sEhVGBELVTU6tdaAM8JyiP1YCGZ9Hj4cGKSyUWn1kRCeJrisEdTJFQ5kLjdCQoQT",
  "key17": "3F3pL4395G9VdfMaPfVZsAUfxgjSh2VV2G7RcaVzWpM8PC41nt8xNVBiEjkatEUuV5BpDtcSLDXxnB7QfNLGidE3",
  "key18": "2AnQf842NDHbVb4cRmtBYpZZo1NYboQ2BwpEDSjJRkQNUXR1VmXrCGYfiqYfShNDmPrJ2gcitseXbD6oJVPHjfX3",
  "key19": "JvkqvCd5wHiYUZVBHSdrSczbrbrwLA2FBY6t93TABiVKGRPvBzhkA7NUxvfj31cQu3GryqstTt43rQmWF9j5Fgb",
  "key20": "mCS17C1gi7iVqQeaX8rnZwLMQKVPdtWMDbe4nSQPy5HopSEg2LSyNbKqqSUs8ouVYL5BSivHPpwW6NqnqmdoQ4N",
  "key21": "62NFPxH3T5tUVM3pzgLc6FGhtZDLiQGvrGz6U29GLvmK8TwTqgxB8YCSmhnTk4SMCY8tECthKEwhrfnxLikvcMMD",
  "key22": "63HcADFYJApubHLutsCmtNXKP9ecUSFtLjSgXGCMh1C89n6u4wbkmMNaBie8zrhHWsDkp9GSZaDDfwgYvHYXpDJ4",
  "key23": "dkkHoEaR4efGxe2dxu21sRWr47dPD8P75deb1ibWZuSVRJ8eTayk9zwbjJyHsfkwceERtn4XzbR5tCJ5ofN3tG2",
  "key24": "4ZEPKeJLp6vYxdcgFUvDe8pdCRRTUiBnSmuTRSR3njA2TyFGywEhCGT7sQC6AJrd2ESFVDUNGahhvFhLaTfFXRpR",
  "key25": "2rMhuUzzVzD6EwQvbxDvydksQkLKFdqiE1jRFXtWwTS9jLgm7MiUcVoVWPuV9y6qwLDJdToozm8KyMonQvUnmQ5H",
  "key26": "fjMqVsPn9d4hagCxtANhoHreFsfEbZ5tWZ5Kh82iPHwV2NfgJWEBobKNegwwAXFeFkDhafqvpsoztcki6sqrwKX",
  "key27": "4a9LX182uqo3qTuca4eNWybszhAsghbWatbyQPDxsmBYMcWBHZeSV2CnLih8KSd2XWBhSVCpHWunnDeuyEXE3boR",
  "key28": "2LW2s3S8xMadWxrryoxeSJFDArZ5USQnaSwh4VP1ipBAqNr5jdzywFBd1HkcqFjgtApXNwpWSP6X3abGUobStQX8",
  "key29": "3nxh1FDVjJveXAuDRAyFdv6ogDgRp4eAkngQ2MByn92cJgyesaCJHwc4FPJSwuHL268KB4XMv9541HKV1sQUrkYN",
  "key30": "2AS6B3WE43Yhnu9gjpkUXCtKMTPdXw8uw7ipw5Xtcvm9ScNVM8CWEmsXvJAG1mHkmgzoNksWKAM6kBxfhPpKZNvx",
  "key31": "3V6iK6vTwojLEkjD2ZHRoZaDUgnuY92QWJKdS8bs99DbSYFTSXGVELmYNnwKtR3vqmck9PHXkjF3cibQafZypusp",
  "key32": "5hFRYGs9EkvjGMXYZqLnujjo8jDxnh2cFAQGHambmDmSzqUxWA1b5rkAQgxyCM9vkYqMhqC8qg3orfj1HsP9tJqW",
  "key33": "AMkYpcPqYyUibNPLKY4njABieRVWMPVcEGLbF6hdRFibZthC3LaNTyM92oAcNdvi51iGUnaNqrVevCjQBbb2kSw"
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
