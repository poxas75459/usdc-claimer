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
    "ukmYj9uoHgmsVQfGLQCcqQzudFFd4p3x3zWqDXUX8MPJfSAiwd8nrVxTPGaZXzPGbyx9QPX68TLMuQ2pusLYSod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrfSoSD51qah3yFKRA1YjhEcWPVmAs4KVRkxZD5SzbJqgfyw2cNP3EYU5nchtxG9XnvY6UXdGJBmxvt2qruMCki",
  "key1": "ooy8so1JMRkcVMWtUkQzHXqz9qWZNrgTqoVq46nuNjWXUM96ciyaExaS3hbR7M9aKpxodkg1RDiXonsVwzGNkiu",
  "key2": "Ru561jqg8H8d5zkFidukzLJzR7B2eAwSLFyusiCcaG55p9RgQ6M9t4AYKRYekmRB3J62nYBM1p5G3nsVrfjCYHw",
  "key3": "QM3nepTKy4dShJngq2HKW2eJ6ko2Uyi2WX2Y5hmUCd3e6sRTyc5PbpcRHAmjzzwSfqAyWTCiR3o8nZ9rVwYkuvK",
  "key4": "5ePyeyXFqNYdvgHYzJoGsfFiS16EYuQeiUzAStkxJzSz16DqQKR6UuDvgQ1XEaA5tHoJRvgf7iabD8hdegT9odLu",
  "key5": "65dHiGUD2HiNQUCQffALHFtvdQdRyMDWN9nc47CAXw45ZnrjNazT1BHcTS7aXWpe1xUsqqequraRQ4YytJ3sBKbM",
  "key6": "2F94m7dvBcm5AgUpLMkVhwjtAEMqQN627gxSsKw5VEpEbKT6bbwhyngXg2pZq4LxsNkEi3XUE2GhXjKhjiHG39nr",
  "key7": "27CFAtTNKfPgor1fxjzZULWFUWJ9esMWGVYSobhCMRrgxPbaMADnExnp8cNSxuZJSk1WLzYQQej7NFndEhYiVxP7",
  "key8": "4NUt9c4rbT7gqpsgVtPZS7E479GJeLFGMJ5QQhA84VNvanjcz2wkSLE1NCbfHNTbq4Me3Xjc8mSfVnpgJgUs3d1M",
  "key9": "FCdUPqzHG4pnXtNJEP2j8rLAMyVZhYFHUuKgwwjtqb4NMZ9uRFM9d8rzZrds2hguTesTDsVKcR7u7cWd7Q5isa6",
  "key10": "5txFNa6zni38mkJbCYVSW6KTqroTgnCxzqb4ktZa7xx8DkZGsvzjNtGdG2NuNEqSzBKC7Av885yaPweoKZxLQwFg",
  "key11": "22TofKhboYkc2ih5msdpFrwRtniPjNqzVajjmZn7vtAExfEDQGhGtvNAq1zQrjZw1ZvfSBC2x1oDDtBUgA1KqZQf",
  "key12": "39LXtufATT6ddQrsgm96f2ZnhqL5AKJauQLPqvVXRzeHDqHTZiFz9VmAjnD7JWGoD4GzLCv2KWeeUh42XWTD6jPQ",
  "key13": "2QkL5oeTRg9QbVH7rj8UPhZBXcmaZpdQHvZiidRVJuCQSM8Z7Z4MFicH2Mte5hSJeb6ZD8yLUPYJiPC7Y4MnPC3P",
  "key14": "3rWGeyUdQEtgo6hnSVXoDpdQQAL2UsCjtwaZkNkfTKmdumcZnSdasbN4gv4w4fshr4L9PevS4ZEn5kaCWWgUvE36",
  "key15": "5G2T8LqhNiRi1XUF3ZfBXtH8LHjEoqXSovhJxspuBrf5JQ8hxQUZVY8dtBMa1mbCkB5VFTDqALikV5Jjr3SA3KVB",
  "key16": "46g416iD2fipjXGgwH3h6B25GHsgwyDyMfsVstqabLrwGsq9CYKEePEuUSLVPXTo3DqDgEfzdFi8MpDNqKtGqVfC",
  "key17": "ZBjwj8X64Civ3MCodrLmENbEKrfAANo5M3u3PrZrNxLuSbix2Vt9G9Udv8pEG5LEJXXtH2VMpaNjHn2E3ECD7qr",
  "key18": "3YCFPYPKPrTW6dBn2R2FJ9TxV1kVtMoSDZzPkHB4RQUeuAr2CWwzKZfPfnFEVJfyvz6pWZ6mh48gVWHftnJXSMmi",
  "key19": "4M7f1QX9mXHAnHV6VF7yCrGSpkssCkex5QmoTCYDcoLjfCvvhj92eYdL8CvJANE1YJCnNojDGeBCtQbqxUh98ukW",
  "key20": "4wqXs2LggbAEs28TUiSMFt42QQpYvG6BQThft622v7MtL8H3s67GrnibbQj3UW3Jfu2YoB2NXV8q4MwTVaLozxrt",
  "key21": "3NFin9o7BfyPAU9RTkKx4EGVxSG2suqsLZJEmvi1wYtjWtuFh1L9YKAPkvkVpkb6p2jk6fWXxqWzSJ4yzPvKmuxH",
  "key22": "3eunZECgGZ33qf7ffEwff6fmve9AbLoD9bgEvtJjH2pi858TF1oWS6xDn3q26ESWbH34hnom8Kwdc2hgCwoNFyTB",
  "key23": "65HhSVvWitU6tvEwpBz27FVoZ7ZiEFB3GnDhU7Ch5Nhe8px6jwz7jhb3xdkrAAcTk8PgBC6FLoWqVLWEGeMLioef",
  "key24": "5NrMtadgxaoSyCUKYw2sZqBvRHc8eovJPKBKEcEPiXZyq5xYbLC2MSFYgSdEaKjcvqS7VqPHEDWyHMHEHazXepnS",
  "key25": "4yjtTqZx2j4hQa7uakyVQUG4YHJkG7s1KwLHgEFypN84nnes7eVCmDaUnwxEzEbDiKPeBEi6fnjgXgKkCjAu9ETa",
  "key26": "3FctnMPRNCBnvtWgFtRT8M91tzRyreHJJP94ncJKgm4RYMrCg4kGomQn96UHcgHQXQwDSWZXK1913oNtfFGPJ57a",
  "key27": "4kBK5npphfbsFQ4mPNBn7PJoUVD1DiAVBsExRhXpwrTAjUywdL9WDB1rNs5YYUnSMN7bKze22uYLHDP1faFtVSQ5",
  "key28": "5AatySDDW2VxNruPEUQLxnZ3C5DxDZbzVnVPLfy1DWBxzGZhxxwdnFS9Y2KUPd1MJ5RUocpASVMPNX69xmcwmHeM"
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
