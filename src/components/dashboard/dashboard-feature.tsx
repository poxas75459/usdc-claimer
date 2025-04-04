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
    "N2tDbDeaXn7ovaco8hBZFEK3Y4dunesG4NTVGbQHxCX6W3SaVJ1Z193bvQLJZhdPwkaMv3rd292Ha1V9jzrcTNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232bHep8xyqCKxFFnL2q7q9tBJ42o37Jag7jx5K4qmR6qUvWJ5JvGqYJVeo1nCnnbu6NjNvfdF6vFTsWVn5brqTT",
  "key1": "65jvxMnxEeyuwB2cWCg4PdxyBFGTdLdGnNnBfhpy1pyv7cXLyGdMHz8sgfoCZcsU7NatRAdid2yZHoXuwR5y38PJ",
  "key2": "jqMsUiJXihkrqTKCJV65Vyzew82oQ4sGoFDLFpujd3YgeFqrVQXXJbQSq2n2StmfVT7EuFNyTSxPZK9sQbapbz7",
  "key3": "4FUvbQN1kbvW64XQtAoQP3QGzpXkPvwC7gSBcqTZS4JkkcwLbSyTPbLPJf65qKPAnTAdKWiYv7SrUSpfnqdWNgi4",
  "key4": "4rWkMbufHxWjK1i6UnMZwT3L15myaq15U14cuHiQquzzk1vWUNsZR72RoacLouDfG1Xka6zfsVMAXctyWcU4ZW9r",
  "key5": "2oNq7QbK5yY7o4duAU3ZJQ7GX4kEo34icAMmhUAmngyiob5T1GL8EQrv7YPkHKCQvdeD9gJ4WMTY7K88tgmYUpMD",
  "key6": "3K9bpeCC7u4pHoc2nDosoPYLhgFqzJUA5AURWK8xedZaexDXDXCJqSGnUx2DwDCXbD2Kh3shtfjwv6szfZc9NoGJ",
  "key7": "5bkRy64Rk5gunzoVxH3booGDbiHmCLnNyyp5BFTa5zLo7KPHEhqaxqpbAHzKEGtNLvGQomGmMfLMCmkBD8y8smU4",
  "key8": "2uMAVobB2zWe5zw91FFd5Koj9wK1wJ7pT9rqiRW2Z8ESDgADcxbDkzKQonHTWRnUHuiPmujM74a4o2FSAafsNxwg",
  "key9": "5qzfqPGvNecp9WfQoWtTgGng3LP3jGkJ3pD8k942ruJqgYfYbR8dZ9V6bmkhw6cJXZUva6GwiCAbrLiKe2B3QoDZ",
  "key10": "YDMTbvbJmykY88o5j4yZ3r2M3YrYdHGHUAoRmrNbczmRTmeUNGnpVatz1NWKH6gSt95avLwFPbzgbRWF8SDp49L",
  "key11": "5PPNdoco2bAEYZ3fC9qvUsTuWM21auynnNGatKEtUdbXWsLcpokEUJokJwNFDTSN32c5by4AEPGVzuNGxcaqtEJ1",
  "key12": "oojiuqVtfpkmxGYtRc9WCA1dijf98Ji3JsZjc9YCkcL8Ug1QeNgoGK3Z1e4wiS9wBPkyc27ig3rqDqExU9iqFJr",
  "key13": "4YUbhp6rs7DNyoMv278J46sQPJH9kTsv2YezWvGhN8BbWSXuT4T4rbdT97RWUbXVAb2zyGu4NqfSZMh1iz5W6Vju",
  "key14": "3Yuhr7D4otx8N4yKpErRD4EoBDcTSQ5hSZeZBvnyessUEqCn1cxhjTBfEdaTe8qQfSdqLG6Vdj7cP5WqRSsWv4aK",
  "key15": "2Bz1z9BvAAKiZZvBoHyRUrUsv8MvHJMTLtN3khdVdLwvqC1GEG1919z6sHiTRgyeX5uiuZkfgakwNgTUnFAerqS5",
  "key16": "dLdLjNh2T3bYEpQ5Cb5VcWtVb8c13C2JiWNg9Gnk3shoJg8jcXz7ytxKJRznhkacKDapnpmB3uDvrUam9PFB2oW",
  "key17": "42YKe9DFqKNrZLdGMNHquXBwx6h4twCCWLZuuB58oPN7GpuGqUJt2a94kNW2YGRYEVvRnk6Z6r1odS48A8X6LjkE",
  "key18": "4wULARJ7GnCq9MevWTTu1DsvzMybFE32drJy7HKzEVm1wKJhJT8Eep6E6vAucAVUsyt9y7eLeMBWZMtz7rV3XsLx",
  "key19": "5KiirKSF6VUsuKmpDZDSJPd42dGwfSnia5K52HkDCwAq1Jd5cCSpkfPwuqSPTHqWGSqKF921HLww6nK31Q5mVRnd",
  "key20": "3BcrqcHy3Dq3YMgQwPA4j1chv9sUHha6UyQhmKg5JtsP8CE9sSSdauvpkvLgheTwNAnmVnVCE8qePcTNGobojqNc",
  "key21": "5J3ZrNrw2TtTEjz9w9XqjN9Y31b1DTJ8PZujw66eLaYt4RsoFJNk4kre2EFKMWDhaQq252Zi4Sm7zRppQeaWNh1a",
  "key22": "2qKi7aAh3SfsUU18R4fywsHCbHG8bLejLvQnq5ppL5ivrr7bthsnKDq2rVEEVDLCgdXvNRneMrkyaAaGM45sjrX6",
  "key23": "5XTev45ZEpCKEU8TqNMW65p4tnfnye1FRkjEbSm8NAnANKWKrqEBhdzXAb9uGeuzcdxqqWEuQxHmppaZBmk6uN5J",
  "key24": "6ufGQVWzFGzdXMxVj9CuKbLAaMVwU6M2LtkpEhpWDgitfN8Y3RgL4RXg7gNtWhZTEQSseQYM7qP6X3if47JwuE2",
  "key25": "2PQCUCsks2PQmfyP8mMkB8EH8ZYtDBaTxa39qU7aRpEQn9DbKPcyNMWm5n4Cp4VogDQtQ9HhpBup6gSDDfpxmjTy",
  "key26": "5Euq4MF8QVfu2SWcFEN1vhQHcsCyMhxUYSA6xqRTumthdruUryzjFPFG2qkJgWgERwAAc7zKr5722r9HoYiaspkp",
  "key27": "5otEeVdtWs4gXMvitbaNzJhYAkqwzn1az9QW1iYLWszEpNcoUD1rgtHwBnVvBwAHfqRdGbe9CR1LzwsC9dSpqtAm",
  "key28": "26GoM383ewdU5PT8boUXHGzMbjvg2UqTD6oJFUUpKBdEsdgMtsU1rNA4cJvkjiUqzMEtcHC3xMFAsxnhyJfYBt3h",
  "key29": "4rHkRBD39Lwpxvpc2TfoKmCq45NbvGKn4sbVkDTMJRPxUGyUQ1367Qur3L7bavYEvgvFHfnsZE58AxL9zLdBNrxd",
  "key30": "2PSChk2UyBJdumrfcADYp2iJaHuRhzTC6RPVgiNxxHBQ4ki5JzeH6RDU9RpHsqpcMvnRiXT3ULDWr3joN6nEZddq",
  "key31": "4ovJ5T9ovp1kRfvaEik3msVPtNteiFFZWd6Skfg7yXYP3VVPdMq2obseym3RY9yQpAQa4cCA36EA2RGgqTBoUiMR",
  "key32": "24Bxngjm2rjTJ9EHHp7GyVf9mQXNc7nAhJB6PuA2ixXuEs9RN49VZRhMooG15aARjcttEDEmAWtjER8JfiCMzpWn",
  "key33": "24jTeG7X4S9btcL4PEb6YRd1U8yN87xvV1rPUE4g9uzztQDG6y7S6KNua8sek7XxVSHUNNRSt8C5PSCMpyNckPjT",
  "key34": "LGL3jhA8d15EcAqy9ecnAneN41GUqa4y6juLmfxsq5pdDKWSpjDcqYnzcCegjj2npyVKeq4eYyAgovkFbtNGEii",
  "key35": "3KPtnHvCSND8JPdoXUM3Zc6powFKZqPNatj3SUaA3KqTjmoP7WkUwrcg5wie9XXjP5Rar43ZaNW3uEsFc5i5ceNd",
  "key36": "57LnmXgfBTmdF1sHKjoAFN8gWST4DmUEHruLenPro6cQJ54kSXQukGdyjTLhFakFb3JzPKCyKrbJYr9ti94WHcV4",
  "key37": "45teXwsHhvtMHFfnZAqA7qoz8ediGa1tb9JdGyJLRQHBBLtTh2AtiaQCNCx4nE8ijtZYKYuNRUg17yZfrFci9aSp",
  "key38": "4UCSYTrvbCSTYbALRci6YHP7K6vNsVgnBNex3YsugdT7KR5iDWARGVVU6ddDFanKMd6ovS43PXUxUe1LVFBdiZTS",
  "key39": "xZ96QcBvrTsGS3V8eY6Vqv33FPqyAhQsei9JbHd9NyH5zuN4YVQgHBNpmahMtncGk4LTZk577dr8LczgiYBFPkE",
  "key40": "3xWnnHSQZsY3qyoHvMgxv9QMh2d1PiDHPggi9JYDNcwb9PkRfPSbyFJQHYKKJmM45SCjgvQZ3HK4supYvJ3NNYBL",
  "key41": "3C6Kv9qhYwdpaCRRJMenwCVYbe5A2AFRPkJ76j9ZaDQBmmpYZjfwzxfdk6hT58iqt7ARmzdKFncxeEptZhATTGBT",
  "key42": "DXsREhHrDKuioZ9FTuH9uynhtztaYzFn5PUjUkEb2SMjsfbyuwGtJqt7rrLWV9v1WSvZEjvE29Gzchu51D5Dyek"
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
