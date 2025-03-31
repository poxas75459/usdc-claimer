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
    "5vyenSgwY33hoetWHNiDGM7bAn6hTFjrvrduZDdMxEevjDGrLkETthEXTjMeusMQYZ8KYdSyRygoaZKZfdXukp8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9Eq5w34dtcTmWvvywrj3kEziDShB4Nzrxb39Sn5AcKRMTrg2Ntce3MJMGt4HfQmL6dwoBM79NT4nbf1ddp4zD7",
  "key1": "2TjikeG3dyRcPJwNyFn6gCShR661sR2rVh9Pc3HFjuZpxsRg3as4xoAzhDVYM1Y1Z5ro6Beg52xXpkxHmRbrKRT7",
  "key2": "2D91cTb4NBz8MDJatEjhzZisRSVF8qfLyTJLMdRq9KXuPJddmXdXJFhFYxaqq9jgGJEHheZnPSU7bMP5LaqwGcoe",
  "key3": "5bfea5dDnpJoNs8gdEd8D9GE7vos2vXxNjUpM7EywF9Pp6eJGbU752Gdokt7uXg5eFkjzs5voWTfhze76E6UcnnF",
  "key4": "ezWfymuaYTYQu72YVCtThvK5kGQ4jTTzjGEQfHJ2XsWhkNcocZnq1UqxutrT1NN815sCNEcqp8nUco25bRDbdRw",
  "key5": "45noLmdGZoTebuGXyVskSk3mc9i1dxd6wzzsqeTG4JmeFuG2VAKivs7VKDNruBB5qL8napqea6XLXeKPP75f76PP",
  "key6": "2iqZU35X66YvpGbxv6ALFvizNQLbdJP6JDYA2D1WbPuF2oeoyjFXJNWNa2vGMT2GXJGYYUVzEbqvBC44DLKL5ofk",
  "key7": "5dasyuj6mxRigsRsmoiTbCxvq8a4W4ykqVKHnsW8uaLVcz4iNatZwjnhk26RiBmXgoY4d2NGfiCrK1fvm2n1nknb",
  "key8": "2GhzWf6kHzWZrREsuhnJ4bhk7o5PUHUzUou6Z4jJSAFgD6kYeD2jcQURqU82H19C1NzQv9vwzYgmRaT1zWCecRHD",
  "key9": "34AYTeAaPapKgEHMw2EfWYu2zjjUjc9FC6qvpwwuJ5127W4Z7kJPzZ64qEjCRnzUpJa8E3xsfoaoNsE9iL8fy8qm",
  "key10": "5SD51VbJTKtgVmo2TX98vySVjnd7xd9nbky1PPPHeQWwnTZy1DubiRePq5B8dNzkW3VdC9zCjUFXu8HwBUmhwpzZ",
  "key11": "Z3AgWJ7FhN6fbnxfawFtBFraThC8TXr1z7FRBZYM5eJsxRK84XYa6JtjxqFy1hmbzy8YDSERxYd9y1Kmzuivx1j",
  "key12": "2G2jHujvWxcAaGhEZewdqVznLiHAKWzChDbCwePm2d9kvpCNX5P9gSv8ywEtmgjVALxyRaLghW2CUcj2HdwD7dM1",
  "key13": "2k9ZjiehP7H4KgJsZmMDGaUdJ6nsAZ4SBTFgfCJfnSKjc2yWucefVqCBDf4eMk93PeCMEETNF1QNvrvHhTvuVgF7",
  "key14": "GW2LNFaBE37j6fz1LEytDT8CCNPhoUF1mhH5gDQZhjA3CRXZQRuLxoQwKjr46MU4zUtnmf8vt3mPKfpvZsddFte",
  "key15": "Px5jA7azsbWjLsh5x2R1QEU8uknZUSkxFvNni8bSenmG5E8t7ko3YBUYCMsmvz2NGafxxSdcwdSbF6mcH8tZ8eV",
  "key16": "5SQqdccZXPwanwS3EReR1xQSFmmXxVmeshwhmaUdfbwZweGqgyV64haXtjCwpajR3j3frJgwutQPXYJETUoPuFMF",
  "key17": "3n2XWpDgm9CC6w9LSrNKk7KH4Tf9tzo19dMU7XnJuKZLVUjf5XmMeV7SruyRCh6YAwTeJr5gfxHBnSCn5jxa4zWA",
  "key18": "3KabKpFhRGXARpLitc2tjcbnJhyzYbrc6xR9Eeo4v3bsBFV8sCPn7UPwWuPqTfG8YKrgfGgYyPVAFGkAQUVKgz2h",
  "key19": "4SwjNgFGwPNK2MN7cPfaNC7oKxmzhYoqDPmqLomZgHbC3n7ZZE9eFas8RrryGj8WpjFX5zvfSxhRP9rPFjtxehwL",
  "key20": "25rGGYCQQSbwrYXq4Qvuu6vkmJhVPYASVC1QVBBTDMDMWRwLvsouhNPkcE1gCpe9bVeuSZpK3oJJGLw3nYwwwfKS",
  "key21": "KBaTYqqVwc33A6UQpDjXYzPTviQLnArmPjP2xB48QDKWwDoRXqpf4V527H8xecZAsZqrBhQHdQy6ajJssjWAZpC",
  "key22": "3eHdQLz9QF4HKNtbfhSGpdmhfQH1Mdh5VkhjiPg1MRtzTvdkVwX8cDeHnEddCCpXENShXAJJVJv9X8gHNAekU7G1",
  "key23": "5Q2bSRpDhF7PFPiRuB4EkmKCfFwv3dXmrb2UoKe1kCBf2DdA8LGhDfcc3YtsMR9WULZMRn9tMmoaZbxnfG5VnmmL",
  "key24": "zRr3zM6REjmsdKt9ko57RnsyZj4RzbUqHrd61sPV5nB8cmU5rsEHWx7Ma8CutjxkDX99w5ncRsoaj64t3BYT43Q",
  "key25": "2uppg4YubaB8F7YuMXWn8Na4kwY8YgZPx28SUYh4CQxkMFBz29MNbDjPrVbfaJnGkKe22QNgRiYvdpEpeYYnmwf3",
  "key26": "3fnNuv9BdLCDFPcFBw5euMpBb2JFtkZpvzuNe3oPH8hukWacTB3jHottjqyNQuTK2W7fSPxJRinGfixAUNq6w1Bo",
  "key27": "5MxoaToMthMrYUQ4E9HXecM4aTwrCEEM7oDGikQRyNnc51ks1kDYN6bfUtDgq1cfGeqHqPKeZXaSrjZshPKUwQdM",
  "key28": "4zM6QdKe4PL5GF8VKWdDfn4Np2jQZ7roY9B4iwGddgjCZCq3apyzJgcuzU9HevfUvfTNuDvUD2DsnVCNYZ7Hqp2e",
  "key29": "4E9rSrWt87dSVLd6ot2boSgXaQK8UcdfiNCh3VKnPibcsFXLk9SZ3wZSufZd6SoM596N27khMCxBdHHCpkjK97xs",
  "key30": "22RNpk2Ec78xeFGpzRtkdaGLvMQkhqmC2tcn9SYrva2uTSqim5uE1y1S9YN2Q5fbq7EwFg4tw43SRW1ngydn8gvQ",
  "key31": "4SmD1Mmd54gVYviVXmLtSdbMshZyacefDyhMxCfAdDLio5UnDuRY7bJMKXAb94HB4hRzLgDFkES5aeQGq6KDSnsV",
  "key32": "5YpNv1A9AkTygN2ELG9ALaCbdGNQg5RKDTkdgPAFcsXufL7Z71Vqk1c8aWGzVzqqmLj96Kn5qmwNBP2hVn31FMMF",
  "key33": "4nTN1cb6Wk29aSjsscBBfLKszaq2jHVmxoCPChs3q7yYz1Qx1xaYEQqM1e3hLAowZhHEvWUQF2saG1QgxTBKKjgt",
  "key34": "3hFr96UhVnm5f1dZtGwTopfr4yx7gQwKbGTatuCxDZqpHRGpWD4TE4Kq795XfxcwWRhe1fY5A9uSi64u1x1LEzcb",
  "key35": "2FWFA1fjXeqjaxR8tJxaLr1xxrqTDVKSuUT7gQT6tU9Fy1eBmyyakByaAW9QtKiEfsK9rPBtZvhyKiocmSWsYx8v",
  "key36": "2Es89UREqHJFxQsy9TYW9sfGyfs6tpC6dNccqPhMt2j5PXdHSzwpgotG5fzAKafPtf2d7xQyGUX99CPf5VWoNDRN"
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
