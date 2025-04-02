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
    "51EuFLg6aNgdggBfMWKfQ4wV65k9D997cWjZcS5TmmMvLKcFPn4uDHMNwsaoFC8AfAnUDvfxUSyaMhXi2NaUPh89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mX62M9KH2pgsz1sDBGAPWY6j7Tz7E6S7FAkJKx3D9baZ2ymQQRYQGh4afAAAmoDjSxDGAzkgURBhSg9C8cu9wow",
  "key1": "4unc5NxEbcQVg4i1yVg5NNFSUENk8matAtAVNg7osXf3UKDvnGTkwJSPwVChDZ9qoci8SM2iqpHhkRzimSdBh7PL",
  "key2": "2WpuRvgjvzQY7AVH86VbjaP2JPonbAvAtmrjheYG8sHwkCWuJeoe1CLBzpVFPjZwZoiAZc8a3YryePeGkXXQDBBJ",
  "key3": "u6FFLmvfgWfvWNgsP4LMApn8RYfX9ss7ZETguCf9vZEBP2hUo15LkDxXYwfs15mSTJRMnkc9i49kgXBWSpNWNYC",
  "key4": "S8xoQorDshnRTsssVa9KDBhHh153V5N7GfKYwD7SZRB6Wvh4oRPC5L3ZknP9vZenUpbWapiJ8C7uBT3ymXMPBQ3",
  "key5": "3mPqXv5kZkFQRYwy4Wfk9KsAwy4prGuB77AbZWHGgamCnNMLfERZvdau4apoHWGQ51Yhb6npufgkoZcZx27YXST6",
  "key6": "5ENv4Et4zvwWeDJepyeRvPwVLfJvcJ2ywmBkvrV58HLQKJ9R1PCQVzUqknTYCfgXudeBDxjFTvmHf7DDMcssQo8k",
  "key7": "5FZkvZPfJ4tX8ThraBaDUY4KYDsGaREPv6nFadPLnqjjhX7n2oQDHcus3J7H1fD1VfwRoVbztaY9DRnmFkMuBbSi",
  "key8": "4BoQsJfvt6ci6WPJLgKMtuZ6HuvZhNSf2ezmgS4NfefaXQDpqnEmk2CGWEUvWVt2C6npgXqdsRY3imNBuYo5vHLx",
  "key9": "5guzuGrQVQXDitxXkyXdoEpnafqNV4RNE5N5sJrqjiJJTZJxfz2hRhCLoz6QQcPYFzSSqnBNBLNRy1bVr1zcBjar",
  "key10": "4FMkkswajyoXNGWkRPVZvvJMz3h594xVDg39SH2ZpFyBLpGU6NG6kpFSCv6A8gqjmY8pzBxkBiScmsKNqbury2zg",
  "key11": "ZGdxBcRdgqTcbMptAKs7DJLLXHVvLwwfPdgc29RiEy5HJ1eCTsGb5ecPN6qAfoauf6pveT6zcykF9w4LbzZZns2",
  "key12": "2ifys2VtFqNXCewvCPsGCSsopXG1ukAscWb4xrMwgdohVoMRr3F1Kmnxt8ZrtFv1d4o9vP4uihNAo1hx1UK7Qbyt",
  "key13": "3Am9rWNtNg5YNpysQ1RbsyZiPT6pXyMMNZP4SXRPp1JcBDHx5y3mLwnArEATzjdip1nMzVLsMyArexSbZFP9KAL4",
  "key14": "5ixenn2p4jRqxU5ZoWJixHYnotU1K4QD4Unj9iH35F7v4geWLQDVA4jJU7zbRp8heCKktJnoAjBds6ukdtJFDBA2",
  "key15": "5xJ3Dk7kFSXhV5AnwMbT42ZLWyVsqnXRXJBz2wYAeRSWBmWF5TABBKKqswEuwRojSaW3bz4FeZyqo9REhcsdoUjV",
  "key16": "4nvStunksD8D1fG7sAXW8gCMvRjvXm973pepqU2w1n7UG3LPxLmT8bm3fWupes46eUeX9tjCAVExpPDN6JD7ejQX",
  "key17": "2E29P21hrZTVeu5F7X1YdaCCVvetkS9QRizbLXbjVT8D45JkeuPPHfVoyKcuk8P2b4WYMDQq6KZHeNzZ23AUPRqT",
  "key18": "CF1DcyawpXpmmXEGXR7LnoXzmNTZ4LBPAXty8NY5SZSfnBjuSBthtRoHk7X5eXc5uVSzJPWeF9yehZv6qiBReA8",
  "key19": "JJhzmqmM5PA6LK6hN2uZu1SKarHbgs1ZraSehNnQn9iryx8GF21teVV8MJvf8QgiGrCJZJoA9yhyX9T2es7NUYf",
  "key20": "3EdxWSN1Q5pfhp1U7HRHvL3sKuYZvFExJfQsx9Fj9uHLkYDS4kiBKM8qqHiJ9PdABjfak78B7oLyDQ8SkBCwsdoC",
  "key21": "44W2X1LyZP4tiatd1cDHned2trCZzUe9mRTV9yYBk1SF9wF47jNjXnHdNqXUtoTFC8KdC7w5iTvkCjiUatJNfCLu",
  "key22": "5npkP6DsnVo4CvVgnPmDqkJ7sTm8qFX731xx8BtzdcQB7YuZZMHKCnrgedb4Sa6L3CVvqgXUfp6XNbZSDdP66Qa8",
  "key23": "5mtuMVLThx82mFFCpX3F5A22Pw1v4Wvw46HW32qRjVsaZE8kud9sQaxTYwLKzPWbV5BBbtqgG7gYdBHdtTbPRNF5",
  "key24": "J2eNdxdcSUgxzu6QwUy9hwHVy8RGxyGLWB73EEq6CEVFi2kpvfJSLEDYixt7sGGdbh7EyN36xrnDWd1xpEWLhys",
  "key25": "2m32NAtsD5VAnwMVpvYRgDqgbVHc8n53yjhizzBRz28GcFWY5n6T2kByjuEzksHYUEqSrFszcvkWBcapQiGiWC2",
  "key26": "3vLR51uR2TJqXk9QT2EK8ZPMEBn45pVxNeX2g6euoReLFgL57fvfJr9CPuwZ78cYgdYsZoL6Ryam5f2uR838PTZg",
  "key27": "568FjANQGL7cALiA1tTsyfnc75juZykAZTgndEEgHfjpXjxM4J9DxBiei9BFGudLWdAXDTUoDJotFmpGdcQwfXKu",
  "key28": "2T32QLtQ67tvkbnhpjhTx24rUvfgmYhZaoyaNXxwNcNGku93EDZ5quKvqnLvhbyS8M8VtWRRycpzbEY23tgZLLoF",
  "key29": "5y7pJnuAn9hkGoD4dgXBJpUwDuBG6TJqDSSSzgdCpZvQxPJM6riNYbLT9VZAJn7anR8tnNECrZxoVF6cwke6vowk",
  "key30": "4YkBtpa4dtznpHxSvJAvozcWsnBzK1PC2T5zVqCe9Rgx8LGeVQJN39ukLjfRnweYgttwhjgeahaQpYcHjPnytXEh",
  "key31": "2zwNJrSagVAzepUKCr3xLhMQ3HpJpggzAXXctzjpNHUh9L4cEskQdtH86LFYs4bMBXGbrUwJLZ24TEW7ku6PnyGG",
  "key32": "34Je2NkrexKUyAnchRC2CjrLxqw88dTkryxtwKs2fDez544VVXKHvPZi5CY2ZKKbhsZZD897nMG9hSWdwfK7ccDq",
  "key33": "5TAHmAPpsv9yQrCRzmbDGoE5wL9XVes1zwL1E8uEHhZAVehhA4AiUqQXULskPsAkpJF8sF6dPGhPX9dNfBEyocQW",
  "key34": "4NPtvDKRcaRgR28VGCZVRe8psLfUMpWwt58nA3VF2VxWmNsH6p4jD74UYNjBfhpv3S7LenDQTcraBaugKyksoCp1"
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
