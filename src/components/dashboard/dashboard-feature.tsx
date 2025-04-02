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
    "2DTzHnFmKZTmuEZxyLUGhYqDrR3BPZQrbso9QaM56bCFCi4FwVRGj9eX9ZxFhsxsLLDrN9Bcohyh5GkSM8B6KiT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBLDjDyFjH3HXJKgjnnsNAeQ5PkUASYkJ5wrfzXxnoRyyrcoewsHkr1iF861rp4maZH7jkHJYG2e7BmqudJHmYH",
  "key1": "oHHWBVF2HwvKyhiJ9ziz7WPaNyXFe8gLWdYXEFjoYMoHpEgFsGeHo1p1ywAwHKFbwcpipXfYPVLojPfz5jW1nTr",
  "key2": "5wEVgh3N1AQUAFkKThdyeLtFJGFDg2d5ck1NNnfKvkt9zKuYWZsgz3U3p9hLb5EN2rz6yEQBbatHN9kr1pi12Pr",
  "key3": "2MYykTjtW5vpkGT7i6FZrUj6ZpCDCW8uEiMTecFYKpQMdaBCaRTYkfDUZ2VYYetKCGgMwhi4d5HUzr3fhAZtm5n9",
  "key4": "54qHxacrQJhqvgi9jMqBsKJoMTCp9oEhFdVNUxKywDgDV8yQ72FugqGPBcY3AFYmF613ZngTXmpKem21dU5ALPrS",
  "key5": "5ffPmC4ewygu17cyu6RxAxCGPZrnfkL41VL889G3nVGa7aDZKkavmbTiVrZdHrmZtXUn5gfc9BSugZ33ri2RNMrF",
  "key6": "5UKHo5J5ypLcaUfz4STufmUL2aJvLakmknE35hxy7tUdLaCo4RybsicxkREJ6ipESThXp8mfJ9ZCXgtzzsWePwnA",
  "key7": "3KcPV2NycA9EyKzZrdGMd6WR872nmPncpkPjbTqmvGHGuZLcKqJfr8WoBULcaLkcaaG2efyMrgeDTuAY2gUkV5xH",
  "key8": "3XobN7sQfsEhNjm6F2FZkSEwrDxhQ84jWgneLVg8gaev47tn8B7dAhPbFcvRZE2n1CQNV9HS32hpbNqCPVkdWrxG",
  "key9": "YEisMfCYjeJTTgjUnZ1m3SfJHsXbkwY812S6orr4HHaHjwBud1j4PsSnuCamwbhSR6Yfp2HxqcnFP7WpYPh1m3p",
  "key10": "4hazXFUSHnAuQNbvsQBRMuSNwtCuFpD9tmGAH34sgeGynp8JpHdMTKPt16ciRZ3MEGJNyVrstps2SwMv6n2pNTHE",
  "key11": "3fESM1r59svA2Z5gDNtpDMiae8B39xdMAF51nfjJMMpTwXB5pL7SaZY8Q9zJ9Wvu8ZtQqtviBRssMT2DXyBJhi6g",
  "key12": "3gvZoSUSWjEK7D9SGaySY3kxiMHzsDyzuv9gu85H6New8S8yS1kNtS8e6eZkrkig8Ed6nUk49nJ3cN2K4G3TC6qj",
  "key13": "676BozRf2d6y39Uh8EoCZA8oo4Atino2Q1aRYyhJeU2UjWrRS1JsDGAEmSy9ULMXQyPGxDYp8RKPbF3Dn9gabxB1",
  "key14": "5eLMgbHKna9TosqbXyNFKTBDE6VpaJZxCzGrnY3Wt1Ji5xR7PHerW9rdYRjoYszyaCKLJYevaqkMjTaf9mxhnqCh",
  "key15": "2GiWYNRWJW3CHY33eUoXN18dyzB6RZrFXdLmaWxHjrWBX7y1dDpB9SnprWnYnyHMSw5BdxZpPXskfmAc3TFfprBY",
  "key16": "4spiMRh34aZdRfJvLgrocZBknhfiP1aXRwytnjLeRQzmr4hJbXs7we97Mc4b6fbNr1YDKBG5fQEx797DxoYRsnpy",
  "key17": "2Dsbc1ztP7dy7Z52RqiTkWbf2tuk7Gs36feD6yVhLHBCDjZ5A5vvffwYsvFCycbKHTmctNPLLCoMoGVuAPqFCBvn",
  "key18": "zDFBkm9HRyRKPf5sPPCkEdS9D5JYUZpx1VRoey9TdjcWX78Tew2Rjehi4BFR98c4gJufYkdSNAspC6zDXstYrLz",
  "key19": "3wpawBTyqUqgDp8rrsidAUTE9PmW1vtRt4ENB3vkHgvAKQb1M2USTwWwG1YCYEkyPf6UbQhx6gk5tgNr8BbxbGQd",
  "key20": "5kEdpBuQb3MScdhVS5bDZzitwUD2iQ8rmGnDPfPUfSiusjb9XxdBoTLiYJ2X1EiPCfr8U7zzHrn83c7AqbrBZ9sX",
  "key21": "o3jumv1tcSJejs1hxtP8f63ePB1sPkQiARVY8ZpRV4CTF9GaMka8FoHrVmf83KVsAmD6AT7vBwJLAw5EzL6Dfuz",
  "key22": "5TZG3vs1hkc2S7P3Pzx5mjXYyWKNNdBDURCyNA5aERyTnzTxRZTmokoYsiKWvB1aFhXiovSV5TwJYtYn2SxZCH9A",
  "key23": "2AzEyGjHVAcmPLhwfdZSszyBgnEujhW9E8Mwc4dfmKcbnkBzRQfZjgLdMPNFbgavFvekKEDvWFeYsn7E6NhDkNDd",
  "key24": "rzrdYD7BwLUdAmHzJkXyR2JowdisxDNCkGuDuXaEASKqCEMrGZhtnXciszjLDYQThqwzfAmwJR5junYi6cQdk8j",
  "key25": "5NNHPuPZKAQjPDzZa5bkkmj72E2enFcMqVyqcs1A2xXuH4JLuSR6Pe6WHatarM4SiBgmpNZ5icZwpe6AQ5Dy1EcV",
  "key26": "2HfeZmVbj6hBms8QQ3MNzzukwumDnJhcoGwYuNeJuH1RoJdFNw1UF74oJ7G8nKKuy53y9qmtfvdk44s4Mj6jCZyd",
  "key27": "5TVTp2FawpeaiSUsm3EGTRJqKzAdmaJkEdLDfMk1YeieRBgRLP2xbmTqhqeHV7vARuEFKEzpzFBgWuJe4t888Nox",
  "key28": "2u7PazzhAeDvm3Rogrt6yE7n1ATKM5tqKU3vAqA3rB3bLwPgHTf7WoBR4oyVMHhzpHZwu2nCCcEa5psSqJcaSfGV",
  "key29": "3UjzYDAMyFepDAujN9RsgpQ7sgR2K7QgfsG77Fn5GvHqYKJTPCRhnYyNrAXZDzito3HiGZ8dR1uwVX6ikMsSUDuH",
  "key30": "ejaNwgZXR3tHSRTDJLiGU7VVMsGLQiyfrhDfFKjPwxsFfjN2xp6LXmNUTgSFqeTjPE9K6yNkj6vMZsDu5LWBJiU",
  "key31": "3oqCP5DGLAd5xxRrbsgwu82uGgmfzCxD2r4MLUcwt3o45DzQUwjSMQr93b5Lu441pvY9rUzyePgHSnSDc2KWYREs",
  "key32": "4mR3JoexKTxZFH32P677pPtffCgck6LWPEKbCuaMbHnnHMWBpL2FBwexCM853poXM23t69RVXukZnqhP7pTLsUNH",
  "key33": "T3rXfvYTuc432tseNxAv5mftAJXmUFCsWd8SNRf5MMkWVckXLMD1gvpKPw6kr11ab6uqoB3X4DRV3Uuf3R5AkQg",
  "key34": "retjcVNr4GoqQrdQKGggAMx5YbCdbzbJ7BuLXm6P2kSeUQ8Z12riLvBch2apGEY39WKyQ8Md6WPFMoy4Wj3zN2Z",
  "key35": "oUwWDoMWKvWt4vsFsW5UBkvJChkt4JsG7esVDusYfNJ16XFfpZG7NJQR5gz6pd7ZjJRj6tooB4ebNwnZNiJrHiz"
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
