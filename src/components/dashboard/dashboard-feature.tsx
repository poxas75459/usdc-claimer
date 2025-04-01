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
    "52WHnswH4BHwjhVKkPqRsuGEd1jjFyZ4pa7GrSZYMqyGGK3GBidhQRNFp8JggV8Bns6ZzjnvihJ6R2V15tdSeFsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCb9a6pt1H7bgkDdeL1qnXxmjMCwrSwkmjaxgE2EmjHAVGHg9uJtRRrE1iP1iBao4fpVsNYVfk1m9sgZRXNwc43",
  "key1": "3f9cNpA8ycEcJipSaKU9BGk6jUP47xRwks7A2or1REhbmEPhHLxNvKJKWNcQvTDFmJZGY6D1tXw1zxx5LB2hxpyf",
  "key2": "3739CdLdwx771cW21XrgKyYhSoTB4d2rZJ887ctx4D6u3PMQi1PY7RtbxMeBocj3boRBmoVteQDWS4ZucKwyRQWT",
  "key3": "cG98AD2FUDXukLLrY4mBLXJ1vByfYvk8kKMab5ZfufBUHr64Vk1zRNRDTabQCv5azqZVsjgjpXEqJwE7uVEFTsG",
  "key4": "218n8E8dj29PRD978fJhms5CGMCX9wtfrVZUtpdNwXy6ACzFufbVREaTQhBvF9GUGRY11vT2H9j14bwFKKtN4Zm5",
  "key5": "219nekTu638GxPbxunWKkSHT4CVTpUJRL4PM6kM3yz9LgQcPE554HQ7GzEP7f7Xdk4yg61xxYtXdr2uM17AK9X8q",
  "key6": "66AQsJMhdNTE4QwZVwGRvd2rsJ7GEF6GxxX416MtNz61AeperRPSngMyS8ncwB7XgRD98h4bCqehwQZDwdJFMkx9",
  "key7": "5crrWtekr4QCy7DZRtN9bUPzchP7cpVvsephXF9k3WRQdaPXahGaUEJZMdRQipjh1zKVk78oqj1nVTWcYo17zigV",
  "key8": "5HoBra95cug2UZpLJXj2SibyQpCX7mjRAsR8nfU1XULUtMMEkynPEEbGQt9RKYs5W42Uhu6VtwjSfieEpus8HpHK",
  "key9": "5f9zwySSBu7KtAJU3qUvGXPtjT35KQePNVW7hkYTZyTsguph7bmdjs65yT41AnSbbWRQPmZZnorUkLpWKRwZC7fR",
  "key10": "4SuBponpcpw528yaGTUq23LCpg45d9EpkkqvpXZj4zoichj6TyEqg17qySXZtTaHkRKBWSmzYEBGxh8kohoYsTBg",
  "key11": "63vNb4fg7Uc68wwHhFnaMAVrttPKY5AwXJgvVDbq2UpbBybwND37VtjS2gvbWTu9gFxc9N66PS4DszJ7oAgP47DY",
  "key12": "5Wy8acCuoGX8Eht6otrp41PPk1s9RoggLqz13kzn2VbzkPUAKSmZv8iTdVo2QByGArwXqH2yZmWfZZBrg4oDtivC",
  "key13": "2naxwdhcQiy2pttCGje2nAdAybURNYUhwRfA1GE8UaWv2ook8jRK1aKfHnoWz2UyMgarqAuSWWgLaBLwzNu4zHpA",
  "key14": "5AD7KU6rWMW1oVv5fDNW3yNind5ewSYU96t3Jdi4Hnhppcu4f4J2q4Bbpn555GgWDXwVgeosGwTfsX9nt6AAqCyf",
  "key15": "33zkhRHgzZE4veFzYSVKGnuYc2NvqEWW9aSwe9Fh7AqYKRNcYM7hJodWEokF8asT3MammzsNSbuTWWJdYwG3zhan",
  "key16": "2WXWtwepz38LUFLkcszeMA8maB5H85x1AkLxUFN5mzPmgdadj1t8eD1rHM3dnNm9pDYcyDt33wLEPUNDTxpwMrkn",
  "key17": "2cCAZSgYrFWKcRGs6WwW6M9sxAbXTHYo5H2oNvGNGrRigTAq4p8nBdhXGJUuZaUc92smyJwufqZDztGzccvaQogp",
  "key18": "tG6raonxz8oGKaY2C4g6txjc4Af3DdUanuMajtbmyrtSmT7quS4bAVnKUrg1jukyHty7JCdke8Srq3nYx1mn1d4",
  "key19": "44tFf9sTjuiHkJYJxFvWmJcyuWeSzBA3WjmYeD6ELBGFFkMp2ZM3bJQjiDigBLwCt5psLNDG1fhiRdzLBLH8vAL1",
  "key20": "4JtZ1uRTu3hepbopsE3MfnQjenbz7ybLpKJqUGxtktkhgyViURGMW35U8aifG1pxKCQVRNQWsfU3c663knRa2LXu",
  "key21": "4WYnfyaYFDQHjSFtswMA5Z1TmTcZkTJiesbW8vooS8xZUw5zr9H7qx78AcMWB8h9jBiaVkh9yhJYoMHGrPqEvdFy",
  "key22": "nL5zcdKK3hHB5km1Up1kBnSFiNi9ZHYNBM1r2qwTQHkKPkwj34ioJYMNTF5gpHC784RsUqWHT7tCjog36nXzBDq",
  "key23": "212x54cHx9GfeTNeWb3qXiYKJNEmiTSUvgFFfi3HpQT6xKpvyvTdJ8iSjG9KHun4YCMNjFK8tjsen4LmEo9pGdUG",
  "key24": "2nRyUWx1kXY1U4p956N3vdpPJKbozCG1qBbMri5taWJYaHNbh7VeYScq9tnbNs6s9Cp2DaMV3xMJ7orbPuxp3f67",
  "key25": "5Cn8e97gHN4bYcBy8NJ55c7JuXyr8thjNmSnsDEKinGrM4S69WJhfJCGzmggF5SYfkB5jmRqR4rsoLM6ZjYkcHxp",
  "key26": "3wVwKfg38BH2KESb4zgHZod7nnUsK6KRDA5gyGLYvEGSkZ21Yoi35LpNThiTXSDsxZGLbd1RA1XejxLyV9atZMBM",
  "key27": "4BGesh2Hrgyw5HoHbRteF3ZFpf5i79ymLNEZVYYriZByVgs2Wgx75gGkXYkohKzcSQPbiyRt6BAFgD7XLJXbtA5T",
  "key28": "3uWF4H14qDyUT9Tyjth2n77C8ygStV76hhTD8C8iYGKfQW5ZETdVvHVJo9cd9gYkKdQwEgNbCqq7ZzVef4sfmqDH",
  "key29": "UA5yjyeHS6g988ZANvmgMBcumZkNm1dTmiEsnyov2NiAS6GPjiYUZMfiydWCa2X2y9EvMrGun3UVwST8ufi2Hka",
  "key30": "26xs4t3FXE55XXpRU6BQr5tM2yn52yxm5VfH4Jn3zkcd7cU5YWafXEgfyiNpaoiBmAvpSra7fmrLuLgjnUGY172L",
  "key31": "4azEsSkyT7u1NEXyNfNaFh2i8KFDj4zoQXd2gPAvYVxzfGvyfwtC4msL67BDryPKAMv8zx1MyhQDaeZaHG5XxABG",
  "key32": "5DCrG8GGNiQ5TLGdW4nnm2ViGqzAXkmyMdUzEy41e3wgdd5ogewpScAePeTk9mNKkp8rrWcZvVAmkhXZbCTN1U52",
  "key33": "39hdiWAyK1FwyFeFZbas7ed9HfjGsrwy1U4c875PoQEmPxnGjgUqxAnxKADDMAwW1LhPcz2iRGnoVPLRYBNzqiUw",
  "key34": "4knQ3xLTXc1Ghp3WvyaUPhp9uZ25YPF7LP25MZed2Eoz4DChHe2racSwg77SaWt3ytPhMtweNWtqx5NBNidJ5K8i",
  "key35": "4iecgzr8GbTPvha2LmaKYR8nx7ofbR3bKxGMFLhAzkFkyqzVXEBB8vjkp8Xy6MRUvHyezeqZZhwRwc3bBZXiccPS",
  "key36": "49Hos6Gc4FmeKoTnNvuErhA2NA48yXQZkSUrznpvVMsKs54GZpgRkyqKWvf3AcKJcJBiiRcmYPjEWjWUe5RnviPA",
  "key37": "3qMNQH2dJiDDt9xuqNmz64NBbrM9dHkACGjQ8zxvy7eiFppvAupTeb5z8k8rhjLmXCjsqQ34tBKWAEhC5YtNG4MR",
  "key38": "5j9KgqH4kxdnfvR9T7AUDF7FF3fAnMSbH9mAFtmxovCYTMrh5Rnqbjnix1uPbpmcw1jMMBncYnH7dpKMxcETzamG",
  "key39": "dQyy5XoWnWWHsorKh5vN9oiAwi9KxmUrH5M3qZNcLtXpu9VVFzVW4F3H8RqPk4hkmUxeaWmrG31FnSWQk1UFhhZ"
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
