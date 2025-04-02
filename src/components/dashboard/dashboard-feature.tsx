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
    "42ebUYDVoupGYWJ4xgRwNb3cKezskLqA45aBYTwXreh2JicxGmPeVpCJ6Scexhk1DoqvkKwtYmda7gdMA4Aw8Uji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGCjPH6V279EMe1VJ7MGjpARHKpnk7SDgF78amxx9p1uqh2kW73YftTaEn7FqS9dxKNA23Kw5n1DN5QtuzDC1VG",
  "key1": "zxmabgCgCKMGoRqmJHUGi6A35AguMkFUP7qsCbK58jhnvDoxKky6pRb2mgaA6aa33MuDympwc99EWgTpNLkFuPk",
  "key2": "5RZVhfksfZ1YomeAmYGrHts32krLPwdY4ZWDsKJTVY76MjjWCRFztbDJUzM8EqwEzET2LHiNZnumzECv3xKoFFDr",
  "key3": "25UUrnuzGnd5fVVFSFWvRbTUjQFs54RqCRDjLbKhwA3Gw2JZN18muL6KoDH9WMeQvxe4cjbv5iCR22LputdTGERp",
  "key4": "W6g8FqqSbgrEqQgguA9VYSUa8piETyX8pKxP6mSzo5uERrXvL23sje579dPcAaxTrH321SAJrXnniPQprAuQCg3",
  "key5": "4H2kVbcPdn2vKwEug4CU85VQWgrMuhGW6SDbYPHUYGgBaoanxQynhEv3H9TsntNfPasruoerKseyisEySzfPYjvD",
  "key6": "5FfGksMhTDPdWFH1iGjS7RGCyUrfbH8g3qsXB99dKu5Emt9SiUqe1taoQXAXfacUZXc1THW2fMMWnFoS3f9ccuPa",
  "key7": "ikjRyQ1GVnRUrqXZ3xb62aSCZUGBTDA8gcCke7Z4yWyoR1enPo2DprDVYgswMjyE773hyPxAoN6NhxXeiMf748f",
  "key8": "46AdZFpMFy9Yngfcs3PU2mCKiEWvjbi3sAopbVWWMyZWdCMa4uZSwsje7eucSRZTWKbGiiUipaH1VX4ETQd5EXgs",
  "key9": "2dW1RvHxym17cwkQsZ1N6khHt4HyDA1ThDEB9yiYuUjGyAP7SGGBas88RvMkBNfsXTpbNTGkyFut8vgmsGHts3SV",
  "key10": "4m3nZwHJsnpGEpD7ZWSuEeJpKqgxXc29SjT8a1nLSAPVvJdnhECqfvpCAFs4u543zksekFLW7hUuuTxf6qJ8q6DG",
  "key11": "5TYyqc844KrTiB24GhFkkjVVuH9nPmgia16BWaFSEuLVCtxRhBnVKk8ypjnBFX5xK9SgpaouMMk7iVqD79BpbMwr",
  "key12": "3HyDvaVGFyEkEEeidZTn1i8txdf7eQvQbUv5snJY7uYpm9NEUak2bB8pBWPxTRknWaXV3isa1FaMEsksTjpcxPki",
  "key13": "5SMzKbQ6Qvg1URtxWxQmDQ4yPCMZKhrwfYSDKuh2y6vXNRUphn4MUXUKRD79WyHKpCUmhvZSa3pBnD7Yq6W3DJAu",
  "key14": "4vBfjgZXA8yb1M8zznrJ3xKmLHDza3cg3wKjrvJdVFgkLYw8CRk7Knfedwc3ggG6vSuXoTWvGPQLY4rBstiAxwQy",
  "key15": "228xYXxTU5uvV2VQ3N2pV9FPNEuEnkj9ZAfT1Pto8wgzkZcPUKkvjBtUbysqRZh3yUWgR7j43xXRTK3VgaeQqZNx",
  "key16": "2bFd44JLYgfcHpVHYGeCqqxGPbAvBDVeM3KXLh7xT3aNXXDLZ8aN2Pi43nVLUEz1tauKzniRugQfMzmfJ5dF1bqZ",
  "key17": "5bkcKa3wR5omUjz3eCHmJZnabcEjwfhUNgxDVoERAQoWZWQtW776Rzd15xnyZQi6Lvey5vok4XLEmBZF6hpWD9sA",
  "key18": "2Mt4ALzCb5LduidjT4qw93mJDr2YyoEmHeARZiEu24sBaPML5R1AtMiGSNrD7W5gAAcDArLTXuet9zsNqN2iy8P9",
  "key19": "2HExEzKgrhqHwoNMMskSsXCh2bTYPvjHy7KAGYk9ty4g8bcN9BfJmu8Fw4EM8oEz4SZjPyiAzVjVH91qv96wpBQv",
  "key20": "66YN2KH6zvYyL5jDbpvhGb7sxXxyxvACzQLNvjzQrUtDUxcASqXKw4yMyc2UcKEKf7MiDczZ2zFNkXmckoVCYc95",
  "key21": "ZsypguxMhqp3HumDPN1pYPrRmG7HYirViBiPFKcqwrR2k2ktYDRyrT9FwBsf1YAGdji6T6oDtYZHaWemB59ypFe",
  "key22": "41QgpWJQbZ9WdnVi7NGGvbTHqbpWxVLrsTzmKQZT87v6P1Dj1JYnG74FHkwudgaiwjiTHHyfZxuRdBkSahPw1pYh",
  "key23": "3wT6raV6ymdgHf8xf8FB3PnNfgsymhuCDN4RWTwX6MLDz9HNRdkjwRezdyTSmxeYv8FpDnE4vHKo4j4dir3NAZLj",
  "key24": "4P4KLodaPJjyqwqTfFAE9FokiRhHjxXAYTxFgKEZcTqf4poMYWZJyubv1fLdT9uFnbePsY2VDH9PEJSCmKHdgwb8",
  "key25": "5fL31PViEStU1xuh1B6yTu7Choqd4hMkLbLErz4Ljx5DX3QCCDdvb6EddcFpLj3f3No7b8ruuGdEGHJzLvoHdbAE",
  "key26": "4E4Ry7ypHGpr97dRdEUmtMZKASLEak899c65homMNaTGjmMvMbjNK7YETMDs66m4dGrMwPUYANZR8d9qL1qqNLnw",
  "key27": "RGqcTK36EqcktRoJ8tRkzHxeWcSrpZvxbi96BRyMGa7upvxSZs12XnPXvWut8Q6jyGgHHSkgB2wLcvv8faLCNYE",
  "key28": "2esjHWEcu6tEA3YvgUAZGEwPDJ5fGQRVdTYhBBNfCzQeGtPUM4vhWcfpkGyyw4TDCmTZCcAyu7gV5Zxsdk7EDBTm",
  "key29": "5CVkcEtqtbam2hpSecR6LSd27JG7bh5VHDeRhkvjFhGxvRrX7QkLhVaCG84pRGFZAJBzvqEXBDrLHcZCuVTtvNU6",
  "key30": "s4HZJtVbwuHNZC7x7MKWBTqjGRWqnQ1ygDaUGsGP9XFTmXVbNVtXKo3TdYDPxr3oxJNcPtXV5QoQGVK1xnP9kNS",
  "key31": "Hz6MoVVtGrVnvL75ywRSoxnCmYHoHEizxZe2rKN4PWqwvWj7KWDNZJ3CNhU3W21wADhKyhKAQ5Pmw79Pjpu3E51",
  "key32": "5mos1Tu9ebmXtAv31E9kG1zAsCJvkjJnTcHJDNLn7d79ZJU4xK7oJncFhjniFU3GwvsC7S8KFNePBd1uKxvitYtY",
  "key33": "2kLkRTwSuByomxw2v7XxNbG2615PYyBTQWUNVDoCoegkCPSkSYY4fCW6cYdi26NduAzhrpBtdUx2j2UExJadPFg9",
  "key34": "bPgAzqkw41VsezT8Ts3HE3DbkjveVWdRjg4dYgZJvknLPWF3y5GDxwJoG1Rc2N3w4TjBRbVsAexdvSVWU2ChUUg",
  "key35": "JsRAm8aZWaNmT6ninHjrTT2XqHs1GWB77GHYYYTHzoRnmw1ALKX299cv5gpyFmEDZqJi8yjmwkpSZM8ERHE8cRP",
  "key36": "2RQP9N1wsQr9gcDe3uPPn7WoyvjbrYgoBp7JsVMMdHV9uVD9orDKvZnNE2dLAKy3WnHE978ZCXjAHfLGbsYG1NJ1",
  "key37": "RkhSUvQMvDPsVU3wPMmZMmraQ3gPNzWHroFBXhPnt8HGT7Eq2kMBdfjetSVJBMTCA1Y21vfVxQ1zUHdw4KvMyRA",
  "key38": "26w4vuo62CCeq5cZPqqy2EfTfbptS3vGxSqBkmAMxpvM21J5yq5Yk37uqN4Rfs79Hyf6t1WUkwzRdzk7weXM7eHx"
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
