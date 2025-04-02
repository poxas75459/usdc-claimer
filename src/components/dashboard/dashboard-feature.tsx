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
    "3c4r1jPPQ2JyTvbJUBbaHzryYatLHxmaXoYAgQhkVhQoex5DWcuG6zERCBzkz67akAjY1qcckVuChwwQ4UtSm2Wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qen3KA3NCYctga44zdyPFkLrLgHqfvYBzHPK2urhAGEM3Bxx8CPrpnxiULpHvgSzNj66SQQY6iAEhcEMewSpXjy",
  "key1": "3iVnzmvx4dPdmjhjpFSuHSnJqGNSxhu4mzExB7cpi3Dt8RSMP62sH5hpsYK5qD64umXtfWhJ739N28dpj5BsZ8Sv",
  "key2": "4z9p94TWAPCuP7nsqrTLQx22fWXjFBWBXxR3v1mPevpcXfRkc75rXXp9wZ55pgT3ifyXYzXfD8KAUdviFeetAuKN",
  "key3": "5ZGrzAGj7GDWf2uYmF9J3E7z5nwfTcNK6xLj23TvHxA2Y4RbxKw9m8uqjqQhf3ndWMfHtppQe91L187kCkzF1RTN",
  "key4": "2NbEZmfeLV6DLRDfbVzXjgampGGKCG9jkzmkBJUXkEm5aSNg1nQTEVGBBNKnAtHcu8L6euvc46fJaENk8qw3XuFb",
  "key5": "2EWiBf9NgZqet85xiNxNvPdoDu4QMhJHqdvV6VBg5dcNiCYhyT4cXruxUSCjj2C68TT9Bz7sxXAptB7149bMj8V9",
  "key6": "2NDRh65kjKuAN1tXEUGehQW8M4G8aryjSC9bYtHSaes4ecLJM7TtTbmRvf93Wc4i9aG45k8nALNTNfF2dj3Jphoy",
  "key7": "5BNQcJJdEEqWM48URov23N9W1nsEF6bjm34fHRJepBTgM6XtFHUGKHi3dhb2XZK9SXAMGkhcE8GmUJjHLazdaGjr",
  "key8": "2DhNpJM57dC2QgFm3dLiLLVMypgWDLUGshYfqKkFSPiQiFUCbWoPNmxTCALvdLU6QeRwVY495jWyRrxj46bBNt25",
  "key9": "2GNTEgrF5ak9BJqgSnWrFEJczbDFXTrS6w7DEsMcx1QTarxKYHmccjBXzEz1iQFh5XfKgiP3p7CjCVRmjBEAt5M9",
  "key10": "4CPGb6P86CFakKFGY7PD7H6SmGVjqTioqSQkQm6n9GRjsCFnUu52XWjyTXdPvZLyiGSJKVsm6J15pwuFQmV7pcYF",
  "key11": "VTWMzaNUqj5fThkwtyyVTKs29uvBChwyMET3xrS4biXwzmiksNrkzaEGYxP1ydehPLh6rnfw6Q7fchxQH3kjjku",
  "key12": "3Fx3sPAesVKPdY76FMj8RtUSKHmsKKaDz3JjVeBisv1D4mExF1zNa56cmajPACAt1CAqe2uW5UcogBP7ovUQsMa7",
  "key13": "5mq6zzuPzdsRjGZmtt8DXp2cVLUuT635FthEXzKeHw5s7rMAsf3118xpRB8TZN5iCJzpvLe3RxuD6WB6k1jXpYkT",
  "key14": "2N36LYasqJY1guAzoWMgRTURr2bjyuoB9V3NA6zBChiJvbYWegFNWWauG92AXpTyVNJsRCva92SR2eFeEdAeVbzf",
  "key15": "2pTPieV8H6h4TNw25k95Y5oiKaNyZdWc2cPfz3Hw3pr7XDn5B4nXREu8LTyL5LxLTV2gKFchK9UFY17FHAJafGy",
  "key16": "37pUwrmQtothhY1aHuUjKFxnGKKYFZ2Jd8Nvtdp98Vo1iwoPq9BXkuc7rRZskmbxuZencupGG9UXDrf4oraxDscy",
  "key17": "2zfNSsurpesiCDRi2nRvFrnCBdMeUcrw8aCr7o3CeacNZ7PSG6pMhzuDjdS4gSznrWRSoCL3AyAsMts93bhqJ9kQ",
  "key18": "4HsXybSFPRU4AjDdjhK3XuFa2MUXq4zckajKMsPqUP4Lap5qhPZkpjodCmf9gfVn96qF37UDreWhwS5fqN9SeCeY",
  "key19": "5fvtMEPPiWsgX3dxVKjSDnhsyTi44Ny8jMN6ZFGkg4SxYHKkpmuJEPJfBiSuW8qZLyiPRktUuy6eYvyhQjhopNJd",
  "key20": "3uUhWmfnbApijMqeuoTHWcJjoNa62iB8cD8D8nCGfTjeSrb2iaVoptiZH5s3fCyKN83hKyf922qTNm2qjqP7u9Pz",
  "key21": "4nWrYJtsVkDBbfk8DaNV3TVDP637T32xjcwVfVBo6diH6nJXTNzCesSD22R9PPoqBTNdazZNsY7rE2YC23mcSrsx",
  "key22": "3CmjdDhAQYpW7S9rvitgz3ZwLUFNncK7Ky9mqE1mKuB61WDVud8XQbnEx3jugoyMEuNQXirvmFXErBo6GKoak1dF",
  "key23": "T4ZuzLJju711iK6LshXHvMkfiDTiEKKxczE9BAS773UWC2C6GryJJAMsXeXyK8Yg2zNGCCcQHE8ciopASV7w5yG",
  "key24": "4gpQe4fhxDs4j62RfH27sWV9yy9RkaXg1rxTvHn5HYL3LZaheCweRiryzw5ua3KyMpauZZ46Dt45dcmRxKaDSCxs",
  "key25": "3a2r5omuLHsRGUKNVcz8wQc3Xt6hD48ynSXusb3YBdwfjSPwVh4bSdeffdG3yTmbKjpihvF3FQSkqwHHzcvhtcu8",
  "key26": "5rWjwLH9LeqH3dLULN6jLGACUBnXs3rKKghaJbTeYVh9p4LXSnpTiaYmPpWjMG3GP9rqP7URviz1vaqwNLPyapiQ",
  "key27": "zC2N98NqmvG95FDME1fHTCRBN3fE8KRUBWyxYGALHwJqZkLybjh7gZjDANGLma4rafhDAxXmTc7nAA44AXcf8uQ",
  "key28": "4ntKbRrjDfNBAcnqUrLLLJFqX8Dv5r1dNLtwBbuphD2gEoqJhwZXbzEEKssbA19FcUfBahK4HVn7kRJbcP5rUqBp",
  "key29": "5z5GvUFbaKto9f2xmJxq27dewPVTbr6EATZs9ThQd2JqMaA3dFWxSXGF8mX7BeiTzTcoaHBym24n9gEQJKHfpoqL",
  "key30": "5EqHGKKEvh4Y5froLDK8YX2C7N1cHX8rMzTF3xefntE231XhqSFmRtt6SQLD3ZAis2Q2xfe9ExGzxAgHDy1LZkHe"
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
