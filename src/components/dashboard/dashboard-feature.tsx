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
    "gVLH59xbXach5zC8UuNyvXB4X1XCBoQeVYtfmW8uvpdtH85s3GTdVCMwQHJxkd8t8Km9spQasMy9ecT6anuYJZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWYfJSUusgJUV7BSFGVw9LQKja7dJUvrhimcuqvMe74pWi5ZvcJCF1yF9soWkVmtMADUWZT9TaaLLGPxWrsURo6",
  "key1": "4hDrWyuWzef7nMb9LSUhJqYypHHpTj7Q8nmJGZsNnH12f5Aupp3oGyPpPHpMVitR1YRcovMfK7Sxe5Ape8kq1F53",
  "key2": "4YHMzvZKFeiLW94iziezFT5vjMA8ED8CFq7W5Db52yqv1uxR4KqDxG8E6yaTzCqsBwHN3bHKTaRFTfht89dQzc3r",
  "key3": "46e47Vk7PYunHyNV3Hr1tRdBXeAPRQT4zYKivhvTEgBpifcEG261uoPQ4UJdmiBmKwwcBqNWK7C5MYYKaYqFafxb",
  "key4": "4rz9g97v7ASsBB6oiVAHT4p5i9vRNjQZW1yHSt4pCcVKmxsX693AgyguSAUtU6ZUjrRuZV7Z8AzyhfqLyaeh2pgC",
  "key5": "3UkUWHYgGkXanGqQRA1MoCRC4iQ75A48cGPgr48bqa6guVQu8LrSmvRE2DZB4PQJWeozsKu2mcGQM4D2KAd9mLHH",
  "key6": "27M1jcpbtbu5KqzCsXL5Sm4YLRoBtVuF9bgK645Md5A7CtGjnrFnNHpgUH13iZx6LDBZBwRWYUZTzrb6fzFZAG55",
  "key7": "3YJf1C3Ng4A6sHJVvdTAvtMuNAWU6FjVWUYcGxm87AE5wTTqMUQsD8aHkdbEWsiJNM4k7sgi4nRaSXbA2d4U5Mx1",
  "key8": "LRhCocbXRer7p6HMAW8qExCp3wmKuvdV1FRvSRfEWrS8Lvrc6Eq6Zs4FWgEzZnJQzF2uyFT7nZ4hCpd73qNZ1VR",
  "key9": "FeemxNBT5v2s6REKHm9v3Z9CSh9DQj4qFHGgQbrEkaE2cBDf5shfmVXGiE5ZsJax988Es8fWtuEzs82iQjg8vxZ",
  "key10": "21a1sEyujknNTHfG9R2Wc4VdzqAeNb13CX38LomDbfQFxDKfiojgmr7QMGQDRXQyWCT3kz62Qzw5oNjCYqsn3oR4",
  "key11": "2LmfsCnovf3aGmuw6qzY3cqMBmAJxN9DaaffXCe1GZ4HF62yFaa5wFRKdzxSRsPbpcmrYNyeFbY4PmoEpZANSPZc",
  "key12": "5iA2VySTihhgcux8FAZof5wM7PuWz1fCbSwWMHwgLK8xh71fCjWLWvwQpr6JD6pc9acmEWF6N6zpZJSxszmXUiwh",
  "key13": "JeAsMuirr1LMRUvaytX6ZZAzyLwuMK9A3shTkW77GceZ4YoQwT8MyFPAqzQEsYhms2wDLaFDwEMRzsNRXPLhpug",
  "key14": "3JyCYXSk27pwgFEXJHFPMifYyGtYAbo8LZcjCGZ4qJKwZsuiVDCg9S3aiqHYZmNUE2eKFYefJtEBcwqb97MrL85r",
  "key15": "3MrobRQYBNfNfCpWVTcy4FHMottvW53hJVKpEti8RGKVey35QVnBccBc1zMVNsMbQcyHuSrM5NmshGDDVcw7e6Aa",
  "key16": "4VnxCyST544ycU6A2wA7HJhCJiWppCLVHhiQRRzmUCoYm4nbTturSgiLnqyYZ5WD6ZwXt4tPN9vgzWiJ9e6ESdrT",
  "key17": "2wUBjzBJWUFmtU7p8A7bTjXtQw2iAEmDgG6QGPjHDaa1oihVh9WsBr5SwcY7k3J1YNpNuDRsRzES3XoqfLJf2gLg",
  "key18": "4U3EwuRHierou16MkpYqFRCxeeqUefxuyuNB8gpRzQ35Tg4eW3C3uyoBmmfvXir2EMjWZWBdvnB3kbLBhi5bMdxf",
  "key19": "3whoSYxZScdqPFGUpkRZuYibGVtWwzFAe55KRAHwTawA7b83bxvCZj7XN6FPYi6AtUkjXTRzgJJb1AeUhKxFMzE6",
  "key20": "4b1bXkUR9VpgEaYG7fwgNnsKMfQbJFn4GaQKNDsnMFxDxnjSZiaeQUxjaqDYPqkWaJ3aJBSDL95HbNUi6cUQYc5C",
  "key21": "4vsCzgu5KVkorefxiaT42rR7rVEJVcRvsxxWrwc9a39yT9xr9X6x8o3H4d5TgE7kTThoaJNMddm7oELAgjQmcSdj",
  "key22": "5zUg1uYUDzYS45Qe2X4vSvyJTM6quTGbAjTPdLy7y2teT2S2px3Ms6ukUqMFZmsZD461cKH2GrR9kk2AEPnMjcVQ",
  "key23": "e1gnjRAS1RxohAbSVvK5wfAH69SBvuLuCzUvtbzRmocykJCyfLRiUDwWa3G8eMBWnejonuoBB6KkoTP3hYf7KjJ",
  "key24": "5bWiRJh3i3bXNKccXgenZsGDAg3tucoW9WWaNdRwdfJBCutWQAetvD9YLmFxTkT5PW4811hd2qVZ7tiwrzW5qPmU"
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
