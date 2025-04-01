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
    "2iewvGKSKJ4whQAignvcAqrJw6G8p2CfgQGy2bi6GAj43CXycGzvBTLraiUGvcuibtZPfxE9NLAFQksgFo9GFNNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7LfsJmLmknspb1Z9xSvKJzPjtdqkfHJw66AgRyW89HY51RxR5oWrFTiLYLRmJX8HTSFNDtpUhs6k6wodh84EpH",
  "key1": "3VkU3s5jPPrqKyLLd2TeMgCUbUcEeL85LxfZCqqR7MeVD2BDWZikx1rL7qEgLr7aBBFoWNnByLymjhfN8HaCeACu",
  "key2": "5gtEdAopuXivStt9ujZ531HWyiXKa3UEXQLeYENEVDQMN9JYUg3T3J6wJCAc96DVod7ovzyKaYogVYgfyHJQGH7M",
  "key3": "CRS13SA19feBfe8UMBsRi4JyiTCC2W3CP2mnEji4op8cu42Pyk4AS2XAPaRDSJ2PhuWMaiDN5BzdPevWJk4BYvB",
  "key4": "4xdKZzPJmAjL7NTdN5LZHQ3Q9feyZ6abZbTbmQWEiy8obf9tXs2doSzZzodkUizPV8yeUYrR4h46qwaCTzCz5uPa",
  "key5": "8C3oGEbLwRoFRkGNVFSVTKzbjwPDtXevbnUhsGid2Nnm3ygfxjRjwhDr7NWRHsKSnxuGj8o6nTohTmDagVSYLab",
  "key6": "2m957zb5sPAK1aATwns72oQ9qrjnUDcvPdyoaXDPioFNtGjphbMA7G4eK8Liz2nyBYchXEG5fkSQAwfGm5Dh7UHo",
  "key7": "5CJxrGkknEizXfMR2gybsnbfeaqE7o5k1qezmrUE8xpQjqvGb9hg59YMNkTW7BHoWkhgnMgREcCcQyisaXc166Q2",
  "key8": "63P2VmVTSsJz5ogw53J9Y1HzDb1VfC6HmPy3EQqj7bfDDxG5PP8XFBZdDCT73D2ph4tHjTrRMVav78ijwzw1V97T",
  "key9": "4op7S8yiLQ2e752t9HP19vuNsWKoPZdSVayyBSqtBkMZiwhcsMMN9Py2g1cGtgmF9PUMRt5uvAUavRLHbthD8wmY",
  "key10": "5MFVS3cuLzGZQGRop6NPPwxU4vzAub3GYgARTbPftzhu2uBnLgev7zR96YKQnuDYvm4XpeKYTwgmZdyMwtgCY3rw",
  "key11": "5vkfZj2iruDi6DJ5HDNZUrRD8FUNJ5LXpUcfKRQ3n7DuJws2gpQHufpNHhTMZJs9iSU31by2iDscAqpKXFU6f8uQ",
  "key12": "wptdLy24nQEHZQ5LitdN3bzxM5M4kY6qGw7NUDZ7oMyzwj6AbEgiYLjfGe3oJHSvy4izZYhFprmbkKnu4RcG2ni",
  "key13": "3PFqMaHeNg9mjS6nUEwrCdjwncAkYbaDhre9Wdx3qTdXvRPKh1ZreBKWased1AmZ4eeXVFz9xfpRN7F6G9cmvskU",
  "key14": "4Yjqju9ZpQ11ReUzmJWouQqzRBHuLbzYC9DKezLr4txyroCvvgDmf9PkFSsfk6PmHt7SYCGRfzvaVEkDRBmurG3X",
  "key15": "4aB3Xqa9aNAb2PJYrNppdc4xuaZeY59vz4Qhjt3NUjhM9yjz5PU8wXGWozYr5UL5RRm6RqECeW49ypZrERZr82xz",
  "key16": "SgwfFK3KgmigvteQ6TKubJKq6T7WwKebZaCBkw9RdRmLEzTQ3jUAo2WwWjtnPSogrMvyqJspS3WyXmadzrXxwMu",
  "key17": "2vvkWQifc5YsDw7um97AXDpVtVTSZ7TvkcJ14fKyZckrw95ovfBNKXhwjnZZVyUFMM3D5NNggSxq7fpDxWEp7217",
  "key18": "9vCGvbgrzS33hVFmhAtiPLhseYY1yNSU8MfQMyCCa752uPKxYwcusnMiQUcRwXt2zezYQ7UVY1S3ra7KUZ5WCK6",
  "key19": "4JwPPJAE31bkEb2bG9PP65c3CkraXbXdYPf64AnZQwm4hzGQta8htnBudsu4oGAXLJU3h9fK2WuoM76nYdrgDkJD",
  "key20": "445vY6FGKSRpR8RAi6CR7DZpHid1shQ964qEFWEB3hL7QXJb2AEXQQq2pRapRvLTtzHoURRYfTrwuqvn6eyWpK3G",
  "key21": "5k8j4PH4hF4r3ZCUQeLxd5LErmcUgmY47bK9M8nhXhCq5mmYN8mA5f2zs1uNhdYSPXMH312KQG7oT2tdG5153ErD",
  "key22": "3W21CQnmy3FTW9gTxWZ8PGhtjex6vL2ZYvUguHaSsz5wMu3ver46sAHZqfxBXRHCps98eDxDdUSd78Pz42A2xsNE",
  "key23": "35mMsiFvgHigdJmefaxVSpKFEwCFLot16Mw8waQyxdJJkswhzU29dq9ShYgz3SBq9sd8z5wvAuWC1aUh8Ki37je2",
  "key24": "4U2ji5WVwNC17LzZr5d5USKvEAzPF7DobgeTfsttbJcaXVo7dnTwjSdnQVcx8pLzNFrXF7f7qDsbV5HhcfThAeDy",
  "key25": "3xyxyZU1zZwvbUaj6efTejnUefQhf8zJnyhZQdeTEUTXgVedTt5r4vY5PSxEeqNwhokr1Muj81jCSQAGrZSk94Zo",
  "key26": "4VURUXNWNVm5BVrCRMSB8q6A3tXrpQFmbbFGBS1p4NcJfueNHRFgXMJk6y5GfmpDS3NeSiSz2YWfMM1EWPmfzdfT",
  "key27": "3Kj38QEbnQJk72HaiDXH9kBSMWrRjj7DgA7AVVpT28m9WopVgCJJGLFF7Wv9aEVn4YBH7kxW4XvxTHcR1Ahjge5o",
  "key28": "2RdKq3wPcMEyANBRswLcwd1WvZSwaXPeSSSA3u5gFZ1FtcojWAeNX2WjNcr19pYTtmLuewZcm1P8yGoPhjBAJmyq",
  "key29": "2VAVWXe9CPpW8PqTnB4pAAnFyuTf5zbvPxSUPe4itxi5tCbmhEsrhNg8N9bBZPgGqGVCTxP9ybJfxd3rfcu5FaU6",
  "key30": "2SU6Rth2wcBPfKiPwYp2mnETSp6FL34cdkGFVWEnjWzLcAqEpCWAoPsyNZcBMm5CNoUXwZUk5XFp4bgPQREoEqhz",
  "key31": "59dhsQGg6EH4h6hUNoV8mbESr6LwBZgFWqAAi3JpJRaaiW76Hn2PXmmGzeoFfoQby8zMTzU9ejPt4pb11AjyAd9E",
  "key32": "3BECJ9vwXp4CJRvkDvGhnvpDpHcGJqiEi889CNfCo1YUi2vQk9qzDhjf5utZ5pUYRB4pFD7TWZDcbrZWz6d3yE4a",
  "key33": "YutTTRz7P28xtpGYyyatYveBUam8sUKHNCr1wBhEAJNNLKk8Be1oZ16upGbvQ3feLWpLnLYqHHwDsBTQXZ1S99N"
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
