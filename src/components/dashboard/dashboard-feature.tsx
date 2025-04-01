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
    "4BXavptVV44CcRNFWLV3ZquVfkZuATXoR5stZkduaRJbUNeghv83s1kwShFssgMSoPnA3cRBcmji3XUCMqrzKgKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sTCS5cjqK8wnZ6EnFzHuyMkgY9ducQGAPdUmt7GA8gjVfyhmZ7tZ8fNqSGvn9DcJUPS7PbWNfo3CeLG4DAjApGF",
  "key1": "4jMXbgGbtUqaFv4ry5Gpp37Nb5YF1S9S3324hEb9qEeaSXvg3d6Pwa9eM6znJD5epQgH2C1rhQ2XEQWWiaacFCjk",
  "key2": "3dK1wKuwVgs1s1hv36Gwo1bTKY42LYj1Uw5SHg9MmxX5o7R5eNMj92j5Kv9TgKJACH2CsN574shCzWudWBNVgNtQ",
  "key3": "RHJMca1Fmhje5FKvdsjuSYXjwWgLwWTbPoyGLKm84vuLbuJiMAVYQqtHGw9CiwQVsRvupYNj1w7PZGkna4VQT3B",
  "key4": "3Sx9cZGnDmXTjnvPEpivE8coD5P2ZDBnfUbQz8y2gDk6JNzDveQxNh22QptyFB3eRcP4shCyRpg4tELSbQJsFcds",
  "key5": "5y8TWU1fPSTU4iySKubZjaeh33vzHE5msQ71XNuTLf5hx2pohV8aHcdtFnNxRNYmxtXBVF5PnBEuoYTfFbyTHDah",
  "key6": "3qhHztFjkKJHLmnM3mwtcSTqjeXLRx1SG4oBdyg9bkAmMqKQnjcD2MDoEttrnJPJarhHDwaWdYSTqBewuRsXnTLK",
  "key7": "xFg9Ya4Y96JDhwe6APprqraeoZnWoYLvJDx9LhyWeknDG1hFFJaohEFFGbVLqUgDE5Z674a4S5xWS4o2UMseESW",
  "key8": "3pKPVsxdEvaEReD6XWjaLrB6T6sCthb1cgR7BPkgFhwBSkgG6zBECe8YheJSfm9FpjjU7rxhRpiqgMzgT2JWSYYh",
  "key9": "44R6PBDKphNWSdSG1mGVUZrNcxY7wRZPQXkWyoS5cDFkYf9t9v2b5cogLeZKE9cq94wozrGUA252kTCP3bMh3ajS",
  "key10": "36RM6VpRpiGhLAV6pJTwgzZPdBYLvi4jX3QsGytMF9rvjqRrhYYNefTeuJiDKYBgxbbo15GXQPEVhy7ShAtEsQk9",
  "key11": "kLqj6dkqdjpd2W7E3PcFZ8AK3zMBUyn3Mr6Z7gGoY6q6H5b9RZ4eVDH1aCELQd7XdX2XvGCLem2rRWtSGFt9yjf",
  "key12": "yff8o2fbgoJYGFmeQt3tt7v8co91ctjKyq4w698zQyk8w7ULkG7S35VnqF8tETtsqqGSXuuQFQCLsnT3TPszYqP",
  "key13": "4pT2wcnBka37A9tBCrYTfJkAY7Ue7mW2Ms3eVJ7zbEbrEXQ1oeFtae985q3upeCZ6p5jgxUDs9DxZMs2hqsUoBnZ",
  "key14": "4k7sf131qKP2BbiZaxxZmYdXrzZAYMYi9NUEkhrXkyEqxqWgcsSZM6Z315A9qz6aKQVavAvwvbBnidUV3HV5GJfz",
  "key15": "34uULTCMFBhoGZnLMQhzZGdXVJbuEbVqUx5H2iAMQJjmwCgqoo9PRCYkSBFmcvGUeDxJpPEoQ2LLTaTZR8ssyXoy",
  "key16": "2eqJWQCzFcqMtdSw2ZqxX277aE77rnLLtFgy97ns3AznwMKv6TDhzmrTXpWCha8NfMtAjf3YtiPaeZ9J6B1WpG34",
  "key17": "sgoeUYEKB7DMdhJSV8ABowoEKJTehGrzabWU39SMfd7mc2DXHoz3XG5vYw2m8XQu9d88HmnoYyn5QAEDWdmDNR9",
  "key18": "3mnwv3vy8P238745hHvCvsxVsHiKfi1m4CVxJEGbsBCefQsaufBrUhaWerqEzx8oDsZXGQ5h5okvjT5gDY75FD5r",
  "key19": "5o9chgYLv8nHHkz55v7PBJAWa18VeWYkq5hbzNBfH2eagR8mns8m9p3WP4Z6evq2rwrbA11DidRnUMWagnsXpLjn",
  "key20": "3vdo933BKRLqfZGBo1vVKAi6BzyUhHmaS1USGAXuzWhqY6qtggjZu7s2baL4eRLbjRoDunYXL5FLaKpJcBuHcVob",
  "key21": "53JA1wXkMNKoY8jdk197yyL2mjLcNhy8rZCHzLP4xeGdvvXj3dTr3ePSmTqVqo6HUKcKxyLWJthdmPNFUkZzNuHk",
  "key22": "3Jc5zsDNdz2HMxPPbeNFTDsZV4EGjtMCZKNHNU1jnCEtsS6JWPcx589yA9rq3M14dNRLsdYWn9wdQXJ2oKe1cDPJ",
  "key23": "664cm5Wa8VSLKcui8fU9XxS8psJq4G8URCEZ9nBPrXn9yFqmXTQ3o1fpDtPsJ77Gx5YLcjT7UEZBdPvphNZmPJAK",
  "key24": "5B189rJyq4AdEnbkXGQk32r78sAs6zqh4f47nZ1q8mxZBohL63TFvtH1tXUtuBcRWa9LkTK9tuWCTjxidvt5nh3w",
  "key25": "4cmDzViQP6fkEstt6mKJcfSqMimBaX2uaao2HfyoWs8kb6beCxgX1dJ62UmXe2bdvveUdWK7yJCRySstudUfmcD1",
  "key26": "2g8UEhhtJJNmbcJSENNNBL8Bt7QgKHUW4DbmAb9xSyjdfKjPgJDPgxFeH585WvcrpC48RDPVWHPyEBtD7JzkejLq",
  "key27": "42HX3QfWKwYnkcZYJHV2XsPYWSTLyrEgtUejvCeznMFmx7a6iqhaYestRxvgtvmFJCqQ9PMQXhFujxsEmpiocuTB",
  "key28": "4b3RvQRYCdxPba4vhdBMXJayaRhzTCBF2foeXgE8atQ1hhsR3gAHNvLy7dQo1yRo9MxPUffBamK6PwzVMn6xPsMg",
  "key29": "2emXvWkea3LVBYD9nZaHptCT4sM7ywyQZtmFiCK15PcfR3N5PKakmeYZKGhSuoU3UJvN8WknAxTt1GuNqBRKh9mg",
  "key30": "5rwLo18VFVWBLbFTLZt8RoDPEQVqbMc9RccdQ4rMWsy2tVCkDcKsmeMVm6ttcx2n2Dj2pA63mQt9ACingFbyzgoc",
  "key31": "2AT88ariPdMPDuFEBgQVnCoTJ3fhaXzJdtLZQPuDQPboEBs8kgMCJ2ajYG9PdMJMLpFuF33MwRckrQS7gCHY3WoB",
  "key32": "48ki1eYQfsZC2p1YZNgVgWrfRtKKzMxE51JQr3R1HF2s3V6hZ4pZVvoXYLUUVFYAPBLUXeLmno32qiMg3E4YnEFd"
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
