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
    "5ndCy4iM9ELHjwXoD7UkH2mrQuMBkP6kvuyNqn9Cfq2rbYvcoTCvKBLumGSPPFfHerPHPk8y5cdxYCes7SS6UMHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrYpK9CogDrpBCTHQfbZKp4NPLAg7Ps9LstxBitR8rumrtx61TtEwzwYrL5pMfGBJWskJK1SWj3JbUbtopjogFi",
  "key1": "5uLrnRnTnd77NB7dUvKvKM2WEH3AoF1cdAPe5HpTTouvy5s7hRXvxmvJ68BdkP3Fh6BxLudXzmy8eHEDgXVcW2f2",
  "key2": "2wWAMzgpTZ4vfMrQFVZMKJh4LqEk1E8Hgek8SyK2CXcj7m2GS2aL9HueQePjWNQPFiRAEumd4NzDnBnrZyQHZkcY",
  "key3": "5dpaZPzjmCENMDMQWgZWu1w2NJYPPSHVKusb5p4rsseNzCSnrnUAGxXbDQe2ZvPeTHTVz1XKYQemNcjUvwpSsuMZ",
  "key4": "4mWyWmMXMmG8SfnGsohUWxt4BXrhDcvqsuMPUn5BTEo3MebZPLKwFUWJ7rhxkt7NbYqd7sFjQoDELAdE9TUF5zaN",
  "key5": "5NhY927P5BMiCM3kd3xjoTW5E2Aso4GtGknG9aGerrvVqxPMde4BeHQkx3t7qah4WLjpFA8XowH1KmuWx8vvLMvM",
  "key6": "3uJsqueAjaXXjAaEuN9r4Md9gfe87yx6L22vH7cLW79mKQre1kTPZAQCVxF2axPPxRj9hjXKSQcJt4VjFpx4FFsp",
  "key7": "554Hik7CebpwQmispdfzWcMgpita2s7rDC1uVfWAZdMMS3ibY4X8hYm7WGVetaNvEMBJhn2xiB2yWgaBRyHE5YUD",
  "key8": "hNWDxkhdUwBiSxm2mjc5m5HXp7G1pLkhqFq8ywALnZTsJbiotAi52qssxueo3uCu4iJEKosA2SJn7SMue8bpUho",
  "key9": "2VTTxoFwiH6cExWhJLKk53JLs1JgizvN6DNc3pK7Yr3LjSA7FiG8egmEJVLcDrq6JSXKK9ypJehGToZmyJKW76Lq",
  "key10": "31AtjDFDwv98pK2hhL8bpS4cpuvkNthHCbC5HKuC1MNrEVFNEFMiZPTPRJT4NCmC7nTRMaYkSHkXsKRbfko4w6He",
  "key11": "2gBsiaCEsf9srGRQBkbWSTKXahvGF1UmpTAtWLXe7TU5DQ7dxyJgSG3eQBteDrEk2Q6JSMpMVPVv3qesXBhxBLx1",
  "key12": "NhoPwE6wSNPVMvZRbCbRcN5ideEbQjvoQSSp3NCgYvjxnSUm2TTzJiXnBDWc2EyKJWW3WqAoTKYqHw6zjQKDCrp",
  "key13": "fs2gK51iMdwUHs5T7n1jidz2Ccco9BG94KaVbHh7f1sWXc732bTenw7nqbShVgRCG2uGetobEYxfzWJz7sFCV7a",
  "key14": "5igVRJasjXAEX9161ZGPVfydhhWq1TtfL4r6p6422MFR33r6ozompZdEx6h5tiruFnfbiRrxDvJyELZzPxTnuHaA",
  "key15": "5oSt4Yp2fNKfpxe5Drs3TmUkz7iknma1BRPh5XZqWAr3RHkjCjugTrvGAfGbkYQf92LCR4kZSg5rNXdHE5vBG2eC",
  "key16": "3CEgVqQYm9rqVZbYDrZfycPEnshoB3t8msL2633FL6HSr97sT1RPtEj1uJPi7ZEe2SVtMQB31sDtkMbom8a5jgSd",
  "key17": "27ZeLiqVGzwBRHFwysejfvR8BDCbhPqecwbkLZpUfnj5k94N61NBon1nZkvN3UxYHEWtdYp5KN4uYgXgm2kB66ut",
  "key18": "4P93NTSuJXFx9z4xrYeNx9Kg1mqP87MyPyve6LVoBFdpSaMdDyBMjSTmxyoLDgHnxdMBkc49tAJ1MPZ9uuCtqEo",
  "key19": "22JbZwZuWSy7jvmLFws1HKreB6fJfbyC3rc7SZmuxncC7m7oJxaZa3wU9QP2xYWVdZtknJ6GooTyd8WJoFKGvR9N",
  "key20": "43ZXJw4GU8SG2UqJWjtuhLFX5bm3MQGaYRHNMj9W21xVdyz2td8s7Hm2U2qmsDEgBzY72wYtK3VaH1QL2dwyjxnn",
  "key21": "3khM42Viwu6TcPfDoKM4kgokdewWmB5AkvPaVFmPCvQ357eduSxmLRS3AxfmvFHf73MHfhS5LpcvMKDHmqxRxzAk",
  "key22": "49r57b69wKjGVrh3VNUhTHG1SXCT81ozuATrPvDnyZkBWEDqx6k3ow3Fe8XDzHgR8K7AFbq6Fx5PvqFA1nQPiPsH",
  "key23": "46v5Q2N3QFtMRNgtqD4Z4CNu23QW4ZQhKoZwrqC1HEH3PcDXE5wNSuHQgrwPcEcFg2iLKrLcScRCeJZk4BVs9g5D",
  "key24": "5Xcd91B9xxjwJrwjT2MmHncQsj1YPzCn9xQ92amb2J4Sm3xHNGub5t5QJ2vWVoJfq7Ec37audAPbsyFEayUHunGz",
  "key25": "5VjcGYpjbDHH12qiv2eQmSk96pEbniJ18QbMVCrnVxQB2DNMHKDshgJR64pRpsCf2qbby6HVAo1ce5oiqS4dUVSJ",
  "key26": "674UjBooiEDWAManPDLZSiKK1bEoFJ4zSadQ3cMdr7ocYYrmeYeo1JHZWycThgZXRMzFpgsAdU8PfzSVVohehy6h",
  "key27": "4Vh1NZ1yMaGHv2kCpWJBxFBVJfu4e6kFSmjsXkn8ZrzjBr1zUVFaSZFq4LcuqiCQFx15Q2uErCbwsJhG9Yur966S",
  "key28": "5XDpuRbgGNcnrcyr3V433EdrDjpNMHqTRMCmEP3zmnt5iFcmfMGXbsSoM2N8mogqbmj6EQmgcG2r6rG3Yqk74WiX",
  "key29": "3UmQm6tcPh2NYPXHyDWGLWWvHGw4osnvpdYXGrFVyjdtwSLXxmb88TgyHXq7KCZjixN9a7vaWJEHXfCr3kgXxweY",
  "key30": "uvwsPMqpy6nkSLvJQuFLtKwsxk2unPxqgLFYnmAhN7W2Kh92ufebsxMDvQZcGZExdMyiuskaLvoKWB6sqbwFPbv",
  "key31": "4e1fq7FJd3gaGGYJzYgYb51btHhyNku68RWSCb7F6qPJN2hLuErCcm14dp2f9v2iPWYrtqJrwRQqjL5bebjTa8P8"
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
