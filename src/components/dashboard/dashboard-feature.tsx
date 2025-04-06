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
    "v7LFUskbrtX6ydWEDsGSChxQSfb3fcisSHtcmo4fetKXqDnGq8cjiuwQBaKZE5LiL4dSRG196sG9y1ywfnndMYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fn91QFdj7S589vETFD66xpbpviBZHXuEghb6XP8QJ79MxqVdaoF5NEUPX3DxFjBvDkZPdcL3WubDHKnACKC4mm8",
  "key1": "47T2bZ9rYEC81XdyBty2u34cWUuuLU4rEQeWcHKt1XNNfv9NWjWKbPh8eS8nATVt4fHv8A42yzK86B4iehFPvaHu",
  "key2": "2DuqrY9vx4aR3uADpVoknwfVhWCim7ayaqfRTZ1NFXGcH2PCU4AKtWGqdatVgqrdiGsbE1qXdEeghk5BLvzzoeEv",
  "key3": "671Ym4xK9M1WiduF9uVmwHBJe1ifzsV1gQFfV5k8wvzNeueJ3dm6WPpPfPTNKK7ZsaCttCqHydkeDGLgKa8euu89",
  "key4": "3dDKWZY6bJZmLFcCKmG2snW66oXthArSC3hmAVxmMbYEaLACnt7d2VFiZ1C2vC5QhPz3nAssFktbY5dYJnuuBfwL",
  "key5": "44gfNc3xoeSgoAeeUuY9i4AWQNQHnzZUgeavw3sqQ5dVBAop8gsfQVigQZ6XuKmKMCRo9rKZkQpmQJT36z3j5CqZ",
  "key6": "3qz5Pzxkg9UPiLUdxERQucnBEf9m6gFu4rASGwThgx2LVoQhUbZJoxMTMDjwDtsbK5VmQwS6VvA4q6Wg5ExV1kuN",
  "key7": "245HVYoxBGJLcDLNQxHn3Gu4B3K4hq8CvEmVJXMGMp7c7ZvC3KtJyGjx1xXvdJNq3F6faD8fdqzR77YN48FAw3DH",
  "key8": "49LcGCfFxBSnfj8xmRtPAHhXqgakJCG1kPCHrbaNv6ssjAWn7wFr3S6aePEagHYnSo5kLNG9REBgtU1j2rq7rzvA",
  "key9": "3BBCWDBTx76qj2NvHXra2BBWQoRbWrqX4ztmS8T1y6Fe4e3fYnHgkNM5gMXVHhMj1L9DD3LqnHa9EcodCP1vm4et",
  "key10": "5VjhxzeRcGpCrpwzxfyScEpikx4MbvkwxSVyRanBZMC7yEqJztTDwZzPmTnaCj3F52QnxfiHPwTA12GEFh1m5WwM",
  "key11": "3ZmgAVPxM3pwYtps5DndRgYpNUPgNytmXEkKTQfG1XVARrpG5HX7in9VZe8Lb3qWT9wwFEuM1BURuudoYxZ2XbgQ",
  "key12": "4fsLcUMWPqcPjM9Zg4kHkdcr9jNqKHzcRSBN8WatUa9T7ftRCeTmnWQAjtBLe6v6DxZaVngtM6LdgWdPSvQ5N3yZ",
  "key13": "34exoCpQBPGWpKTBnvnAGHwSGhj3xv54xrqxUseWq5PhrsaMH5KyacCf9C4cURW5Zn7bJu46NG7h3Do2iZEwj2mc",
  "key14": "3Gjf2G1aKwdHJ8WbtKKkqemmifWCWF9zJyET8V7bXFxaK3F5SnigtbgUkdrMkWHcAEaGpndySADDYsKsSiEqePNn",
  "key15": "2Z9PPHtmKbeTiwrUUC5EFSzhY1mMGP5ZiMRyxYzkauCVDsKzKZQ7MVKqzwGbQXnti7xAbveKqEesLtKjXgwmzE59",
  "key16": "4EgoWriDwBTZxgizxmqSbc1SpKifL3fzzqtNmaXAbpnxJiBmTf5BWXPVBG2MejkfabT5JiG8EPXMVau99rw5eYdH",
  "key17": "3fFR9rEis8mDzNyNMCrs8skxGe4Fi7KKmtwxw5pCCzaZfoZ95eJr6owqC11pwgQT4yptt7j3qWVFU7gRctkFuR69",
  "key18": "2ioFpawK1uByvTDA6yGsNSzpzz3rZbsfsr9D78jeQvJqhw9Fv3iXXntn2mSVUA5tGG72dWdMvDbtr7iLWKzRSmwU",
  "key19": "pBPbfF5EuU94QcKYqUPLdjztrg8q7Q4JzmeeSMnc6cwJWSmL1NVK2Z5UoQrdzWy17GY5ZLSdZAEHsxcdytrQnR7",
  "key20": "3jESG6bwGR3AESq9SSnR48vFwGgY9ahXh5fevWkbeGEVBpcZ15mkUbEwHRhYmisaM7naDMu9vgQPv7wrnGxtwiyv",
  "key21": "5bP9DDWjvssnHokaZVa3QP5cfQWKaLyE7NXzPVj8GTV2dKsiQhAn8EPZDztPFtr8aFoGDCs5vxxqTW4yYi3MYpen",
  "key22": "jKwTDGfstazkBP94BNfmgPtXmrTe6zwdwH8MjYabB8miacJRhw3SLNkbudUNJqUpaiKTbVPt78h3HWbt1hVi3x3",
  "key23": "hFPEYAUveKxBgrUbaAikuRNVZcLqCNrqx8YDpcVrjF7XxiedBCNLRZ8edKBhDJ874hDkgmQEPkQ6i3n6z7hf2yq",
  "key24": "4q6eboPBYu8iPphFJK2DTLWZxwbE1BLhXkdmhDEPsxxXNg8kfVp9i4wVnV1Hd55SgYfdMdbNSDFEy3V1MymrCpEh",
  "key25": "4SHSw15qgjfDRnVR6M122gyRQuAANS8dzxC2SVQ5WF58mXdKdB2UuVqM7pHdxhK8GXWznw83ET32AGyBiFTJE6Kf",
  "key26": "2xmUYkR7pbquqvHaXUVbRPd8e1a4ScruzCkVj7Q6Fg47M4uprPn5cLWqsoP9zxF6Fhc5z8g8NYDzKtPQaCFavCVp",
  "key27": "GrXrveb5g1oEYnmVuAAxpfHY4vhatUpoegtfRrERtLsWtYd6zX1QGdCjy1RoszPmudsHVotBNqQ412LtxECFWuf",
  "key28": "5i92jeBS2LLdEe12Qe8rF6qk76UhD5bR3CUmALSPpryCxYoYjcc3fdAig5xjPGxGtCWgwCBmxys1AN9hd9kGzKQA",
  "key29": "5FPzm38XLcZyWCvtqQK2dWUFbf7LRSHQUVZdRYqfExUeurFTPJy9M5g76Xsf2ipv3GvYyEgp5TYgnoMz3nWopT8z",
  "key30": "4DZ7mrXHSqhsEw1E2wqzfB7WkKjjisJbcczHyKZxegTNa7E1QvDdQB4dT5D6fMHr7TESjzh51cKnQHVztv9dhd3Z",
  "key31": "3KFjhy5qp2iXW1rDLCD3VDgWagz65JwNdJEqm7YAH71QALVJ6MKkiKdTN35XbvkTRHgdbV5aFD2X2PXu65HkQV8c",
  "key32": "3c67sUHGMnfCvgfbDMEhW4oQuYELgrhPbAGE4gj92zw8cz2gWWVc7L1ZrD5fUbc9P8rPHgmSf3na49i3zW3GTnyR",
  "key33": "R8bNFACGKtbi4ZDxFVMgegAqWSNC7WeqDyobfxx4Md3cTpKhZBRSMCMe5E84woktKzXLDxqxNcng1bxcmZd5NB6",
  "key34": "5M1aGAyFDy3jY2zi4oR7hRzvddhuHvmXGc7GZxUFu7ZLXhKVtkb1ge9DD3AyFpBNEiUqz6HJ45svyJXyWvML7oRr",
  "key35": "3LdSPcWPcRCzEEjL2uCLzBh3pU8ejuso139QAAibwLfc7ks2tnXT2nVoA72pxv1JToptGRKS8G1QFyJAE7PWRazX",
  "key36": "57U7Q1eXjJg5mgcMcakqdWZn9D1fudpVEe2kviwb9VsfgXcyx36YgLQhfk4suvk8qpB5UgnQhQMYHsyD8Sgsp6xr",
  "key37": "2X4ZAymBKB1RA4Kq5uP6dJtAiaZbo4QiqV8xTDXh8ajHHamAnAhraLj1Nhyqub8GFghDsTrEUwnqhKXxJcSwh64R",
  "key38": "5oSUgx856cwUSqXwB8yc5ukiHtCK5HY1jGVd2u5z8vbFUBfEB11g54fa7ZbSeN5xxqGsxC2kt5chqvvyGD4eMT1n",
  "key39": "64MpEqd2S7Em8e554HzXXptAJM7T2rZj6c2gLXMLgfA1m5TS9AcqT6XdVKNCoyGWJxELE33oKf3h26FmQFLA1ZBg",
  "key40": "2Qcz4KDyYpwfejZt57drtW2PTmG4a2fmSb1kxRi5QQme6qz5bXuSHrXChavs2j9PnCb8Tx6YH82nKsMYYtFM5iEq",
  "key41": "MFnxHGPfn7CAosSkAg7TUKSaiP7hZGXLF9jsTamgr5ETg8gV1xhvVb5CVZCgskJ8a4ngimdhhxXQEVu179gpKCt"
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
