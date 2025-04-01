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
    "2UhZrv27SbKvbGrNSoygnKELGrivX98F1jsZSqS8Ym2zZ8wrCCYUc4pLeJy1nKgNqGDTfLNWtFVGc2YTFKBwRuDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkjgHSRMdCxJhCfkbqcdKMSSVLDm8PMipzCQTdfVGiQS3Tro5Tu1j1i74UvWf5V7ZA2NtkvFckFTexFZi8ECvQY",
  "key1": "3jPVEWGz6HkTLu9b2fJmu3yVLsM8afK9dBUgUER6SuTeDkGUcTDuwL3Wy4kVuCyUyXPosmQoKnsbp5QSAayQcorT",
  "key2": "3ZJyx4QsEMfouhv1NQ16CKR7YsurzFWan8YozHhccHwHoey5VexztTomaN7QxcZx6EcTsTZS3o5hNLvpMrdLVL2K",
  "key3": "3HJx4Lx63HP9aMYojxPMzAMQFRmo42XsbbhfG7AtiWnzc3XMKM4PKjPdMoAooqpHjnF4dSXGeXM2TUhiNnVC8rYq",
  "key4": "5JY2f99X7BTYEGg8GgGr2C1iC1SVdo88SZFXR4rXdGJYgTTyZocKnkf1GtYR9hef85tKkx8gts4fHiLH3RY9DoCA",
  "key5": "9VqX6Sq5Zu3KJmptFapyYd9wnB8gqDNR9RRz4sBoH3Ln5LxhYownyppH8nSit22nA7bergFZ12gUeRgUUZqcLYy",
  "key6": "3epcKFbEYJNBdXju2NFMarUrVCmn1n11NuSu82V1DuNWm5daa7MaiJ2gAmQGBeu57PtMdk9vQ4ePQ1mbgn84Mckd",
  "key7": "mDzUNagWvLTBtSYinouxugoREzKFkcLrQfC9pgdp7cjWRVComhW4msqdNwvM4fkv4crpaJPuV6qRbDtAU2Uw7WA",
  "key8": "3SimxA1rXuzxvxqt5CnftrN4VKEetpQNTAsjTVW3DNrBR5W54XqRfc67U4W2bz2QnTRggf1VrogVY1em8cwfZDuc",
  "key9": "Q5R4731FUmft3W3aifhUS2EmM3UZkrtryn5KsT8SyuaYBW94i8fJuuQyyh3XphCrNVvpoizBr1JGZkJA5GVfpA5",
  "key10": "bz7dud6F32QKZzPA438zPi93GXidAyvWdgKtAkkugQA1FvqG4SSnR8Z7R5NEN2KX7SQJjBnrgZ4HEPuiS718Eqh",
  "key11": "51s27DcLUHXVyWAekLLPpnArSHC32t8PRipnUHdjh2gfCDEiVJRfagP4ny5HNvZbKSFeefuDN7dLYhWU5tHykGX7",
  "key12": "4UipWESZJZQcmsaYKteFHhZjSX7TgwEmS5Tcyczr1okFNrWQSicQrWDD3PxXQ7Ab7GPhFp1VNkPzkafpHEvekcSo",
  "key13": "2LpmgC746MhG29DhmstQrufohsSB61nyq5cksjB1gfix4YqkLHc5RgMqB5be5xNxjN8uL2mUoZEoJqeWNNDJYAXL",
  "key14": "3KxhKAiNKhkR8rRprZZjEaveNfat3QsVVmgtipqJ9XwvxRsrVXmxfriYq9vH3LJMLYd5g4kaNgDU6VcEdt9zgVeE",
  "key15": "2c8frENg4tXGiQGKcFNTUgiYJutVp31z3mcYJ9emf11gUcLA8gdNGwJDAvBGokznd9PoxGMUcHjtVNy32AdqtC28",
  "key16": "5UN1J1v1MKLiXdHB94zPeetdKN1kwf8yth2HGhwdDaSdTyTUcvtvqo6ojfBom4tZ8aNZXo4RLLrTP2aP2Gt5Jse4",
  "key17": "HT88XVgZFbPyZDSuCo9k4YSPKrpPahVa72acbzL8nbveoVmCrEF6B2aKAYnS9xRJioNULGPqzSKEFfeeC6PRune",
  "key18": "2J8AJUcxwrGHgkougzg8o4nYhsceNe1jbZpoaRAJPEFtSR1JCVprdDYvi6Fin1dUYx41JX5gt4pEo3Q7TeGxGTjy",
  "key19": "4bsAJjKnHwxWmkqSBc3kwYEweUD2ngWomDJxQ58oukx9zoFFKMh5APt5hkptFFCRdJsxMdFzVDMMJDoZZ7hW4J3c",
  "key20": "kvTJQm1rpvA9boDHiVFGguLwGY2Cj3qGSFbbsdY2ehKyhXH8gsasXN41wzk25iUnSgyj565Ld9dL9xekaEC6p5y",
  "key21": "4YT1GvVhkMf1aAkzipMQSD2kDtQ94o9LuzysfXnzP5mKHpfv28A1gwLxUK1PCJVJW8t1AW4syVmXhn3RAkV9DSJt",
  "key22": "3EgyR5N3FK7WAEivjQzoJx4EzYKPH8RLZmpgwiTmHF1HH9Pqc39cYCFMZeSSY6kTGabSifWQedxNGRU62oVuQFK5",
  "key23": "3iXA2ZxoRKnySDP2H3A4fiQV9h9WQ8K1H9fBCxWyf75uuri75q9DSApafDAt2XTVgCScLPDBLV537RTULGA1B1rj",
  "key24": "5pf5Rp95f9gvPhfAfsVM2ZfhBqBfzsgdKxRxgBt2FECjhHerCdtESwaK6QicePX8Faxftruh8vYKmzEqrxWMKN8V",
  "key25": "4NmS6S6Y6huUEzcBub9xV5DNuqJ5iwpxfcAJ62SoRaZK9bHKvKX2FN6yic7eDbikDoAN4FmDqHgbZxhodQQhvAUv",
  "key26": "4mQz2T4JgezVsNamYnDcSkPdw2Z1P5xLkpfbQpYYvYMBYEmBLemcC8hXoemfVL9Lz9N5sq5bhrezJVmBx8DNQKtK",
  "key27": "5FHFWHGcTzEUyH4cpobR6hEZp49U2pqRMLCB6s7YeoJm4mDPnpfRvh25FBzPDaiiQpzMMYFTF2TPmQtFwvoHdWhE",
  "key28": "cyFPNWKQG9iQuUavxKHy1CvkX6nTyGAGBgavBcyn9iA7aMHvYKQhLG191TthmGedMqRrLLcEetUzD3sBL9Bdaas",
  "key29": "fbPcQoDqyyRtwZnQ8zqSRxcv9mdjMBnpL3ZsDNpahtnKP9AmrukkkfUC7H5WuersUDZXZPyGotGmjFqR6GneXu5",
  "key30": "JtNQnqXf5vFUmX9vSWcnffx8tK88ZiT7tfdBKM6vLpY1ytHTDxu9qVLMJ7UMgi72S8Dyq1KrqmsRZ8Tr8NoDQhC",
  "key31": "5Q8LsWgB6DCRpm2GdUmEpibFPPnt14EdLGXPYrYX9pnfZqdNFqF3V8Y9QniYpwTDQe4i5VFdLoxchceGuw6HgnCK",
  "key32": "2FmQaeRSeQ6cXoiPjGwaNW6PC7upU4LiCHZwnGkAbKhWJ3aVLrZCtum2ujQvDFzRJV7CaabbwSwebhtQqmVrPzDk",
  "key33": "4Ztnk5qMdLr2ZxsDeDpM6cqsbHsGTKwTqw4mkqwgxxwLe8KujbxgjH1g1RhHABUsmGYFPvYeV6nFmQcZSwCXsAwy",
  "key34": "Y54GzVV4obTerUyJNvr6j9ynD7exPS7HKm1oHVsF6qpxXqpAA1knbU62c5qM5jUwe6THDaWd5Fovmm2QHY5LiEz",
  "key35": "4GXAphbjnnBBXLxfyB8mpxPQeBcgSnb2Nr57NYohAoGq1bSJwimefMCqvQqRxKpt5uHhkqHB27nHpQ3UvBmE7cru",
  "key36": "3WMekxo4kJycHx8JQ9Kx2PdmRx82Y7vYKYV44u3Cz9Fq5eM2mTrKXvKbHvfT9cVyutUzSaUsefq4RTphnr9tz6FJ",
  "key37": "3JKrAiT2dAVHhcxom786ADGDiZsJTqPTbWhpgbknFNKXUSbfemEjr2hw61oSMg44BGe3BDVbpJG9vxHrG2bduhtW",
  "key38": "3aXeFWP1jvuprbAkM79qiincWmwsKZw92sxqK9g4ptSAttSG5JXysyEGenXQGiKci8bBazcGVfMiTQur7f9f2CSG",
  "key39": "4ppcX14KNh2RD7MfG6MCpr3dvpu6ePnNwum527bSCGqWbzHWjf26KBETXqtv3CU4SEGqkEj4j2LCdDkfzjS3Du6G",
  "key40": "3Po8qMh162qiPbGoTGwzEJuwkL66M8BgDvvBi539q6ZJ4v7a2Dv25Ddo3UnzkdDNSc8jidHTMbtSZjxx6G1eSLEq",
  "key41": "3CE5jdgDaHaq1VT2sDbkqGqJ8cnLgaGvXGqS62h3HjZrhjPnF4EYeoNBqqECsUCceYCerA4aTGzPFQfehoFMJ567",
  "key42": "2PEwFJ4XK56RGnb4MkL6aAyiZvv3B1DSCU2Q3iXjvTy8KkXQiVtnttP1cbTDLr5AyWWgyYqavKAywocQH586a7nA",
  "key43": "4bLGUwZjNA29DMbbCMgw4E1jDeKsjj8umNL9KWGuVcRnEGeY6WyMjaEw2Ts9khZDWZUJby2Lcsz4t4gCCY3xL6GK",
  "key44": "2N7TrDwiGDoSR4eGyJcvCyiEeTFhq5VbAZ5sKgVuS6piHYSHi1e8mYtJpLKym5ZcRpSrxXufrCy3ehm1YCuqc2W5",
  "key45": "ga7FaEN6hjK7ECJmdG92iZUdMsdCYXaxcTkK2iRjoPJoPzqtxt8CUpjfNmrJJymreC73rUW5ZjDqtQ2tnvakBb7"
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
