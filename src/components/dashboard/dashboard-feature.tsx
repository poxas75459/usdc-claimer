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
    "3VLHsfWwwGtiHG2V4RELY27rF1b5YSp53dT2yNykQyy5F3usPa5vvRKScBUA7eB9FSXyk4hSg89RE6BHzvBQdW8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaaChBMENUEVHNnX8AdDwDfyxfzpzoxVo3ANZWUpsptUCn1DYe6w1TGbJpKMHP8Vewe5Mpko1uG69ziqvZ5DR1T",
  "key1": "2UgmxNkSYk73ciG7fyeYNZj9mmxyGKtM5kUro3rjGwGQGf2gpoU9hCusJfe9CKVN5vW2kYGeSzsSqY2kQVb974KV",
  "key2": "4ws3JG2vMLDffXDjKrCy47ksFayAtZ6eF1gM1n6fUFK8w8Vsg62d8nx88CoSPovachwvGax99xQF75D9W6DXcZ9h",
  "key3": "5fYcQDnHLp5tqvX9iSACFo9jeVDDmgzFp3bayiJC5RmYh9wSbpgUXTuBVVAyAA85jogBXkn8KF1iowKm1Kpzehgx",
  "key4": "fwFqKhe3sKn2aZG9fNNFgfJASht8KVnU9zDC6zqoiWR6joohCP8Q8gTBxzRmaEwXNvvHBJoci96yBKAwwxbwwsz",
  "key5": "4CsQFkqv9PvUYTSA72kRUXagis9ndFZMzB38ZUfG37aH36oSEE64EQaH2yy31yANBygmnqUJmjf5uzbApmnHvK9q",
  "key6": "5Ff7ZQhqRB8gQhwAoBLYEn73c3iqLEGaWnWGLBjyDBJwF58gfZVsN5VqkxZvD5wuSCtS6CheSSpqug9spYoBDsJ9",
  "key7": "3fCXA5nTsS1x4H2dDCbV84Pz2faSadUhDn6jnRW6A9XeEeY4tsjXigN6FkY8Q7bgQVvoG6d1edNApEDibQgqZ34N",
  "key8": "5cEDWQNcUE2szW1dXAtnu3Z3eVeCkT1J7cEhR5pWziWcCDgz6T5Guo8YYVbXreE7z11eHGdQWzmechNVMSAUVZjX",
  "key9": "5jpn1yZ3e24jM84MeDexmPm8EW7oYj3fVAAjDruTQYqubLxkmGzt8KG219SA7hzLHKAEqhu5WfhHwUusnNkiUvmk",
  "key10": "2rqWbiuBU1pBqdmjx2A4wzwx5sZCjmwHh8xP55Jyxpcd2ri8TPihskczdoRWPpkCnTtbCzkEGVgxihDCANjU2qsJ",
  "key11": "5nZd8LJ61FJxzrURXJMM3tvZHujFaZHTxEUZkcS1dVCZtGa1uVF4MZJHg2YmECpbgsg7CJSwwfR15pmC2es4AeQq",
  "key12": "2nR8BCWB8JaXqRMELmBCpCPApugQd1K9ZHo2dbcagm3grdwLn7EdMqFZSd5RU4gmoQKAH5aQTy1Awe1ChEbj5UvC",
  "key13": "4HYpZUFiGUM2RuWBCJeYZhc8yEit7FydZbXeLyWKSTPQaWhJqHk6vsT5jBR1yMZHTMdTYXHduSy2Liu89z9TVuUp",
  "key14": "AUEV2Eb6eprfnes3QhuRwaQkNYgTByLqZcKKYp4ucFvSJsfGGqZSwFG8bZn8guTwjzka8y9f93Ln28SoLKnxS1s",
  "key15": "Wf5gRvrnbrHbnxBJyuNcapJrKLp9yL3EhCdToWvSzeoMkLAvCMNRFrDtEmYG78GoXuoCtyJ91JCKbThJ5bDbPbN",
  "key16": "54B2A935fYTabvCz4mn5cnTCmZA8cur193ApkLEKZvwhn3CF1u3T3FCS85ep4kpCqBTFpzn7LwW2aQBLaX2GPae2",
  "key17": "3qoE9Py7bAKpcYhCKfRXRj4y3fqmpx2Ev1EZ6P8JeJ5VUYYqUbSvg1emPBT9tDwnuDaYdTxoqgqYjs1fyYaUSfdm",
  "key18": "ahR4Y2giEoEH6gexz3UgSsuaFqyuHea3igN2egyR3EVxv9D8a8W4F7UEBq2qTYtM4NZbi5bENJoKCgZdi2Wpu3Q",
  "key19": "xTtjVYbW34resKRRd2ADVw2yoFDNkSrFqcycAKC3STKXyY5hDLwig8EFPAMrWjmBgN2p41BriB8EChe1njryd4C",
  "key20": "5UEMhAqksU8ntX6M9VdzwwPEiWX268MdCfRvJLSvkaXyhyciU3crDXKJ4FQb1iBdN3CxcqcnWtB5tpfKbQjG7LCb",
  "key21": "52nZ6vTwnKvqEWGzxkMbnjPNcTJMMVwy4DQXaptuzzAJ42xE1sXsW4r13FNUbokCm6sMx1S2h2faSTHRN87tLm12",
  "key22": "28q6aCa9z5ymkBCM6BkoUZADji7K7VsBb15C4NxcYiSZHPpMRc4RNFWFGAr5f7dGdfr5PHrV1BrRh4m1gMqU88T6",
  "key23": "2pzgFUEUzWoN6TuR5eDe18BRbV5J964VrgnkGgR99puX7DwyzVqMYkLFURNs8wnojTac2C8eVwCRdtSHT2RVPuyK",
  "key24": "3mb81iimoF7KEiYEcASvh89AjzmJG3htXkb39Y2SMmJd9P3grTBGTKepne8MDtbbeStdg7pkttuYZG7Z2Jtartke",
  "key25": "2Tt1bvouV2ThgJ8oCXXY5BU1Y2gpMZwreEDSBPMc135n97AyNaeSgSgkUeuT3kVUaFN6W5bDSbMskctZwHb5Enz1",
  "key26": "4XKM2dBnCxjBZmeFSw9FueUqd3Rv3beR9A1RGa2LxStdjSWs21ioQdPhTNMmia78mS9wYHAaaaH2aM1TeEGMwj3u",
  "key27": "Exjxs7KU2LcrynF6g5HknZsMjXJh1RtUGkSTqPe7uHDm5C8MaSx2kagv4mvFKUgSVon9ThS3EngTzwXsGN4iDWd",
  "key28": "2MjDszV3Hs2kPBBzEoJxePivoNr1VKGeJj6S86a857PCSkBZhUGZFr9znqP4ipfSie93JhpfTZR3Jg2cDjgdLg6X",
  "key29": "yEP924pVoDSWsHsEVFjNC3x423nbMs9gcR2VhyteprbQoLaBieBdPn1eRk1tErexraKEidC19bPtA9cS8rDWL8z",
  "key30": "5gtoX4NnoHGswoPe6Y4W5jKybngn8zYCsNCBmppAwzXXrFNeavJbqd6eJrr6NvUPgcqrKzm8rsEPhh9Yb1LAsKVq",
  "key31": "48rZ2ooQ3wJqisPqdv5vL2uW9mTdQjyF86XHLExxYDnth87f6sJD2g9b1hUoTBND3urs6YVsDEmQQgFeHsR94Fnt",
  "key32": "5dA5DRbZZwEHpQRaRKigzqWRmUyJ5a4uZkfNCTsyLR4caLXMUneFthJe4feFikYNjCVSfWXURFNMgA1U7JidHxkV",
  "key33": "3aaExxo46Na9CQNwjnzKaFByh3qXxbWu1dY9Gbo7eCnrRcGs1GRQJrGb7u4RXtgpH8dETMJHJbGwDB4YLy5ihPeR",
  "key34": "2FguaMiQkvfb72uRv57hyjKFrpGJ8rH8AQ17PgHpFTfrrFvAhfGDwQ6LZn5EyXpmW2pitoa7Tsdjxeo4nFsjm8QT",
  "key35": "4fNdz9huzWe35Gw4Mu1Wd7TCu7CTaTeGHyB7bHNYzzxhnAMUwH2ZZHQumFdBdVnPqpcYvefaD9PMYQVQBgk3ZSBh",
  "key36": "2XbEaoBZmyWQdjM7uWvSWRXuDk3KqPTdH1gR7TJXP3ta8zqs4mejyHZGFZg7FD5GUqCT7bqToWBNZ1zrhbvz7j8y",
  "key37": "3WpxBCua7QLffn66fFwGXXySvh6KrggKvFCX66CopUJUn4LzntFfnfSPA2LHyZL77Mdr3PJj8ff4Ypkra3rHQYKP",
  "key38": "4EcPK6jGNFLvigg1x73ycTf65F2ucN6UWpyBQgaF6HD76wBWGG5d7sEDXnswm5GaNw84xPuSBixwhxytmBSktBBX",
  "key39": "4ziwzc1DG24Q8cNvC6xwy3mDbYEvZoxJHHE9jb8T8bM8PetXjiLrbB28AnAKgc96qbnbEqPSoNWkfxe5UX78RvE5"
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
