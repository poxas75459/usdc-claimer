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
    "439znCS6tdtUvpVhKmPjrRBXH3ZVZe4FhcBoQRif2EJnMjnJfK43RJZsHQTHfRAnn8cdiTPeZ7ppNbnJVZLKkAZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MzhSdiEX5sQBbcyTkmYTjrbdJKkZGKfDbyyyDARspTUvSrmzVkg9M9bCwxdqNPkcoeuPnbjD82xGjoyApkkX3jg",
  "key1": "2YgqUg3FBCmi6ES7TZVJQVVi8SDMD81PAz6NbFLTGnY5rK4enTeJc39MrsL8SqLF62zjpbufp4BrR4dxBp594Ko",
  "key2": "4sQrtGFAHZZHnpNJfB8J9Fv9gAoJsVYxpUGD5n7umVK29CVRe6ndaCceeUV5q44Yg9pyccAS6AjBzKJ66u3sDoMP",
  "key3": "2sdUgFSCVYWR6CSw2tNLppLnX4JzzM9apstBL4kXhCLghU1erV5pK6G5RfTHyQQ1VKUqMT8VdK336px2mLPcQYz6",
  "key4": "2hoeD18oGm7pb5C3pinfxsMefw8Ht7MJ6FVQ8471Kr1m2SBALNQ21ixxyKWVboXw6KU4nraRyZFVTK5DjsfdKgA3",
  "key5": "4bPHERCvCVgqoZrLkDwocQzQtg9ndfGR7FtpKTG7Q8RZ7Jq6b3BAcUT5ESv7XtQcHnyPoNFN3AJ1i97MFPn3CHHt",
  "key6": "4Y7hKdiT3ECpZjAbLtDqPUfKEJmaJFKDfTqPdVM3hvsSE4LmcoNWUwkXARXxDVFzcv6578Ci2vFhZEqYAWDppwNu",
  "key7": "4Lnwv6e7uug9r7mywswsQakUMonVE7vJcf3XF5XmFAX5NrcFTCFd5xbNePcLfEnGYAtwoGztZtS5yDihLT71QUHM",
  "key8": "3cMroeAWWyPjT4VE8S6ok7JJ7KRHSbayXNZeFjLtFEXhqAiMUAMrLWB4Yi9KBm8hXjkMURjqhCHRT4kVjeBSYwj8",
  "key9": "4ET2ZirkjPo2g6Uu3gWcp5TT9o6si5oTP1qc5xQV14XpATWFqPgq9x6B4ZRmsAni6XzTUx8MjY3n7awXFy23jJbX",
  "key10": "587dQCRVQYBfwhbVowPFf3suhSMwLrwyvrNZysnGon9iumffLE6ZcgMYxmKtj8pqZnrD5LSgTAS5XbG7JHhYv4gr",
  "key11": "4JYToybjwZg6CuMrvR3BhbG9wwGF8yByHbsaxZ9yZeva5XML5ieaZfuWRTBf5g3oWEm5Uotw6A3XN6iitKjM6dj",
  "key12": "3w9eA5UnPd9hGnobdcB2NxcK5pNk7k37mHuHLnAmv4UAq4t1e3oo2W1cLjh48Qmy9vW3Rzs2v6BDZ8UrtBUDxuCs",
  "key13": "uUkeHNm4qkBqk9BXVY9W19Mk9xUyRiQ7pUdTwHq98FXsXNsYvTZVucMaTsZJqpJ6HyXLhT829wVmJ5AJQ4XeH6a",
  "key14": "XrDJ5D56oLBxGY2yf9DxUU48X7HR9RP3DKvNWdoKfotToVuaxUuThAA5RucYLKDpXuK4EE3bvBMEQM9RGnrReqQ",
  "key15": "2M863eHqSAmzETJiSSseHrFU4vBCjqyqAr5tGEdimdFb8cEJWZ23zUeAQ8MdmW9rFa8eFEZtmnSNxd3ga9N4aKDG",
  "key16": "5eqAYoJaTPZ5UQBb67ohJEYvRXMFhMXSCQTtyhHgLQ4CrvNrQuDMBJegfmTTYusQns3TF5GDHK3HBaVPymuS3gy8",
  "key17": "2cagxsuza6bMpW6WpNCPCxXmzeBtEHDB4pautSfe1NayqW9zcQh3nboqDWS152ta7g48N95yWXo74BNxTnx9wEoA",
  "key18": "5ed4HBb4g914f5aTEbpNJmbztnNTTNLHGrWBPpc2xqWVpjJeFfkrnyduFV895XHKwykL5iU8iyBdcR1G6aggdP1w",
  "key19": "4qnkU9oxFVfQ2DuxNfL4o3ajfkXKcCjnSWwcfNb4WoG9dXcyvMr6h1jVVN1i7P1hAc43gWsvF2AhAdswppRzAdPz",
  "key20": "2bS1C8Z4CTqB8SwS1RKSFR8W6nek5GcwkmQspHmFMpsz4kLakxC5bCQCCzfrbvkr4t6Pggzvn3iz5eUs3MkCUS6G",
  "key21": "4xZCamtaP1C5rMuhYDMVSikWaXnfxR7L9rQWwmPuE8cGgdVWvVjQUDxfxtDE6bXUn6SgzvNsVng5DCGveYYDUm7m",
  "key22": "26gc2jdTa7Am2byhNGFvRpZsENuXFVNfKkXURHYn9iDCw3M4dQfbhdYxDnstubqGwJwf6HFeTECipob3MGJb1LV6",
  "key23": "2KdpGsEy7dVYpyS8zavMhyWDdxvBE4t93vWUhudN8y6cQBropBzhfHgrteTEggJzi3obbv2Cxa2CMrHhBQYyVjCK",
  "key24": "5j9p9pAS7hE6oLHT9KQLn2C45GD9y9ZsqwUaFgRw6xjWtqxEEzD8WvGNcd1JDG5BuciVqPq8BLkNRgbKLovPiZEf",
  "key25": "5Um8cEVfgFT5ePbXDp7VKLSQhfyBEkiD4nZY31pdpWmQZMjhwe8moLatewqDjVucjPCoQCGp5Mz1i5zehNwK2qk7",
  "key26": "5HfV4wcSBtWgiJxnafnhJ641Gpa9c5ye89JHVztXQrP4DyzsSy4K1cTA4a6Qxxc3hpkZS2ZDZDYEhHnd9Xu5kzRr",
  "key27": "B4prbj2czJPYKf3dh1eaPKBLR6iEWcC2aFsvHvqoiSq3W7Qx4qoJJgJ3rHY9SMpz3uNVFKPEysW4wop2JA8uEaf",
  "key28": "3K8Jjqsgb55fHJm9KyLbgPezfyQCkuxdcWDomE6WaMseou5AAvZME6Drw3iQKFxeKyLVLLKnYfm34VndwBLJxkQJ",
  "key29": "2T559HFsatc9rJreFvqCR1BLjm5YXCB8bR9kvEU8hN5rwKEk5PqXCEHvviF6ziA4nBTjt6SUkNu1xKVJfyR6mdKP",
  "key30": "56UrxZb4R2Do5L3tHuZLRc7n8RuE2CZVdu8C3YCqd1aoq8oYBxSnM2KwPMYu9X6jQWadAiYVvkT9kV24vvGH55pJ",
  "key31": "2WdhsdEvYzqoqWmobnxbbkkh2KExExpuUhTTe7vBdHBVQMLkinywLq7Zd9tf6YTQVs2UFr2CajYWtxPPL6R9eocb",
  "key32": "2yiTBh4sfTLkRmauTEUvmkxCbgedFQt5NC5U4HshhkpeFzTJ2iskZd5eSwSxRd42v6WetrmjucJjNyD6aQzvprez",
  "key33": "kwMU7gvz1dZjHKQftivLir8TAVKwZHftQ43ey7j67k7YNV2UaF9DX6yRpPNE2NSnYvo4FkdZ4X4K8M1Dexzsakn",
  "key34": "5raiy1npygGmrmzWXQZkcYdPs69qvNrSrqMWLQgFiVWzWHQw8kheMQmMVgD4RWYHzZKbZzvt9BVcWp24n4ehRYWR",
  "key35": "3TTd6boszEGsL6SKiWPrVZ3bY1xahBrQ59LCdXLsDaWBYE5J1vexLm3n4MT7NUH7rKf7nkR6mPVP981YvLi7Mu1N",
  "key36": "5HNsZ2mxKYdaxbzvKb92j551gEGLL9xPbsc8qXaSaCQRAUaXaJHxG8tWQmnMmaWU4cWkzmfGCr9UjwyHDDLr1gnR",
  "key37": "2GL1f5HZDANakLdhg9NbzEUdypq1N16mJW7BfKcjrXs81m2egTr54jry2MuCkTY32RLno6EEvZHJEzZCYxapsdW",
  "key38": "3wae3aDEvL6X1rLgVJovEpN96uMHKLsp91DvwH5VV6EtbVkuH4oHZyd9TEUgRKH2QTXcpPu5HkUecjoK44tGJxCk",
  "key39": "5JxVDfW65tvAkxyXdnfQC58qHYAMjBuecduyXYU1RBciWZ8KCCv1ehgUFSaTQ6YJy5JH4XoCYDJh4Qw2r6xuxxbu",
  "key40": "2GXu4Hx39H7cDRdaYosX1RspPt3RUPHHdm96VjhEymyMnLuwcjbNpH3yvYUNmvksRbqbusLGZ1QJ4a5hdYiTz8d7",
  "key41": "664Fyz5GVKCJkzrspVpqi7upKioDuNG1KdqmdDLTWDkv7NuWLB4bCw5wUnwWx6dJ3peJXrRNyDQdhHY7zx8pjUHH",
  "key42": "p4d7rzTttQxxSAXRT6tsVqWj5AEsqtYB4pnGieKEPchgERFNkygyHoTEnTMwyA6EHeRccgvPQXcSRJ1Vpuzeawk",
  "key43": "2HrCYeZTfAJG2nMEDrNp1mvpWtXVQ1U11XfAA2SEeTuY8oD81UigPWRRRjz7UaJHFDUAR9uZnJtVJRUNQUbd2Fkw",
  "key44": "4CFz711swQGek2qqNSvNhnTDEqy64std2cpJX4WBBgMj2Na9Wva1tuA5nrpvP7qspnBquSwrsDXEZiHcsYXQAVeb"
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
