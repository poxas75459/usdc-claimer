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
    "CSQ3qP7FswvFRKtLLJjuwLdhGrwNKpr1a4Pgopbep2CGjLrutBFHXnvVuxHF9JWmqfXS7baLZbAndzg2dJHFFW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "456HN8vs519vLLoDKZNgp9FhoMxwkkQeTTU233XRZqJPhfRy9znDxAoKHYJpGpL3Xwo3L1qZvHeFbeKbjHFNJbgL",
  "key1": "5Yt9EsVkviiEAGGTRCAT1D52mdySSvb6ZwPSuFjqWAUcsJ9SoWniHbmp5LUESQryHZvnUcSNzwYhUd3wr6UUuDTJ",
  "key2": "hPivM8wmPqVeTrHMGeMfMpcb7TD9GJ5Ab3VX3gdWriNGDZMq4nAzRRH7ohHGPunYXrCmJ6S1uXQSZejvaKsCeCB",
  "key3": "5qjxp7Jqcn3Cchz9FfXAWrCqidjmbKcrs9Ux9ZEba3PDRjNhjUxYeJfQMqU2iwWZKcHFb6rdPRKHvhhPsZW2EdAX",
  "key4": "4W6fULpCDCr5iANGZvErU82FafBeQ1V6tPYrqx5rjGwdiJdzYL4Q8174S6C7maEE21z6YJSFvk5xne2wfAHKvHLJ",
  "key5": "5zGiM5HCxnaLdfsNfdoMCmgZQYRoDdBgu5hqnYfyTt4U7jFv3qtz9uFM7rFdPm1RwjgCCGwe8QzVfh7UkxSy2R64",
  "key6": "2bMSibfEhk4CgfP1XxpSRd68DVQBLSnUL6sTB6wPHTZz7YRWXQVQphJ4J1m857FHgP9rMjSvYYcH3hp8WC1ytyay",
  "key7": "5kT1mFNYUGVxdLXkk9D16US5moE4ziixEpvFEPDS1n9HZpTpq9xAMSX49CvZQ4t9DBaVEadRPZ6it4DLxfycYGTs",
  "key8": "XN1xwGeyGirL9YFbrLFh3jFmeGqEo9auk1y75RR9wYoFWdEEWNtJMfj7Wp8DXftjqV29UczfJyub9frLYvbDA3J",
  "key9": "4pzs6oivY44U1kSSDFyXJPhC5MKQBGwC2TpX92qLGZMyWaUycfAD4sNTszZaamAiHuKKYSSsLa6WNMWNyhh36Lcu",
  "key10": "5HiHn96t1AN56cvC7AFLhkhPhynN5rZ6ZQagPUwJGF4UV7yFFpAACM8XQYQaVzsyy51qJp2BUA8PjofZ9vCAAYYt",
  "key11": "66da6imZZ8CBcyDqrHPMNSmrHAGp6X5U5ECSFEvApeX8QAh1a4BKnvWTi7GetN4GDyL6XVhqqWZd3FCxhTh4iMF6",
  "key12": "2TULRBrebwThhW5Z7fTc4WYMwwrTLrcnpUNUHhJVvtfJ6fosFiy1BojoSsseteNd8EGFWvdELRFPrjVepKQqu97j",
  "key13": "3FFTFEJ7zChw2aDneewQUGypC1MrR7dCEzgnnacZw2aKddNc8B2kKXUJjyWc6LWi9NrWwEvpPug2cfFhaygwRoua",
  "key14": "5NtuRTHCxEEo12suRQLZUabWHtrFfoYhmg3F9Tq4rb69jwPe2L8rENMm5kGTbmqBTwM8KfbQ1ruN4qWL925UxQTu",
  "key15": "4kDdqXre5Q35qdvTg8hUqJPdpuKj3fDZLi3ufPz55SeHcJ2VwXwSdUP431w8tKAxaSAv4JEX6HPEYqi7diMhA17A",
  "key16": "pRCF9FpAsRbQFRqZybpfDRsCWZi5SrCzT8JqMTVHfNiZ5h7WwVxNLB1tFN4A2wAn44XCmzHsXMyVRbG5aciuX9w",
  "key17": "2PbL3eKHhjgFeMJbGmkr9SYwDWPLataa22wDMSFoXJRJcFPgMfPYZupCytfSHPDiXQpfs9ntHvBR9LTg5cf9nv6N",
  "key18": "3SFUAsRcba15MweTyF4kHxmssX7Y4egEKd1dEFqZmPGcUa81KBHErszSwm3iLEAbh6bb8Ev3VXRjSuCHQ6p8qdSQ",
  "key19": "TXUMSC2ueTQ6QZA67uTfKjouTcqW6LBcxRwjpMu5tmrCDyYysrDQ4dsEAcnPZwXfqg9xGKESCFNF5oQDN1ZcVQC",
  "key20": "2Q3jjhACKKq4xpzL8LpZPwCoPNTuAjtnUgtZ2Je9JtXkZkyPH8GfZcSAAKqdytFcTayZCAxieW23x1oC6bB2rqBw",
  "key21": "4NCBnh26YkZieb4VmUmwXF2Uorghi3rsYmhZ5HtY55Y1XPLjJQULAgD9trWu88xtrNDhMT1uXTunpFy7SvsnLyZx",
  "key22": "5epHM2hDpWpjBrdKKd31U6mRhgqYwK1a1EZzRuAjfbTjAqWfo39FkWHRt8QKRjTci1F8RDaThai9ybWerU65FKEn",
  "key23": "2frbJrL5UrZxXBTNkpmSmFTe4T6ejBLZjMWLGNcXTAXgXB1Zh5SU3oYkmKAKwg539rJUSoJxRu54kEdp6vHMR87L",
  "key24": "3nYCqRk9KJ5nqBaa6vFGKvxtLWTo2q6XPcf5TLoxwje3gPN8VfphQT359NgFLKV2LFdzFruvHQTs82D1yg4CYsR4",
  "key25": "4mWnzL4A9vwyv9tZUwMmXjod3uKvToV9SAvqV44U3D5EKkTEgkMK1UYnhLZryHPswZTnG4nyndUnEXmmNMn3eV7x",
  "key26": "2vpx3DRJQrGpVY1JqmPNU6S9REMEwfUJGiFpLfyBvKcgsjdviqnVwuADgiGgGGU1FGnuvr3LvQ9NBG5dnJeQ3Hkh",
  "key27": "2ug361uc6te9Kt3jwUhTGdaWZbna5hdShtFuaAdniRVCXEYjKU3VFpYmKLNwJPbdg7arJ1beASQwFDjT8F2F9bP7",
  "key28": "42AmUg9sjGg3t84pqMUQYtSB4LvK2joydKFtn6wzdn2tQZv7Jgyuhi6QrXTuiZNKy5gASSEmW44LKjK5ph3cMRTb",
  "key29": "9gMAjBKCR334YEHfVUS5oXcU7fYLSDHqVae53SFPtUBKwAP5QrgEPwBbWpVdJ5DtYeakTFu8mEFKK2Fi1YXpuNM",
  "key30": "5PYCtf26ust6tJXq4SS2jCJAEmN2eg6kceGrsuEAcepY8reNRgHgH9hqmU1xH71L9FcoG5aYAG4GxpahKS8c6uTY",
  "key31": "89txKu4yX7QsMWADc6XjeN3XXEGBZGoZMirBFndEMXvapyKfjKKE8ADsTgZAbirwotbHEkoxHhtnUnGFtEdHZsG",
  "key32": "22CnV4Mbv2YSh4WdAwBVYyisJEYeMhx93yPjgSCAW1BYyJs9mNNVB1Dp9rXvpUUoeKMuxy1VfxFUYteRXitNVRed",
  "key33": "3vyWiGNhShGWfXaKZ38uagAsdhVYpyBYTfuyHpz2LPMPxuoCpc8BCWr1PvZqapPDRYfxsoBaF6qDvK4qvHKEyKbu",
  "key34": "3qJbEsSkEshL4xkuVcR8k2kP7sBoeQLF4YSUsxqZjGWxD7otpVYbtVVkhG89gi2assszmYZWtoihHfRePqEujJAv",
  "key35": "4SAqdfEb6Qztm6cTfsQpLdfF3V4WrtgvEQNTtdS3jSy2nL7tmnQYeAz85AasEpXGQFXnxgcpjmJKVAYaDuULaZn5",
  "key36": "cdtJTMdvfvaMMF7Mb4xgErTqMmJ4vu4mHwoaCXnMCt47ZvwhAZqC3P3Z5HmPMEHUdPH6eCnxV7pqL3W4GGAqZ3j",
  "key37": "2EzP8UMiprxCU2kTATTUFGcNyBZruoZAycnMFHoyWBvZ1MtHHKHEFqq4p7TTLTpBF4nVoWYjkbRUJ5dr5x1jtPW8",
  "key38": "5eS6ucZik9N9UewERAUDUNPqLNhHBanARDoSr9SMpnop8Yy8vnZP1fM6TeaER1cSMgKW141rjMoraX6QdGzGMumf",
  "key39": "3QxrsUhVj5w72bgSSL5SRnUZGUtWcK51TGWPpfyYELzLgfjhx2Rode9B9k6B17XH8Ro5P8PkuaNrqV92hngECgzh",
  "key40": "2onXLYWrddbW1r8dA2EWTWrE65Rbwb43Yoe7ATaUwkboYNqAfFkpuponyLBYdaLnaZR4qi9bUJmm7QiE7hgcw3L8",
  "key41": "3JVJ8KWTYYBHLcL8Wf73FvUd5tW7h4nQ1iRCQ3DbY4gDTZmaNC3izh95599FsCWzZhPnYnc1BoimF5e7rdXRzCZM",
  "key42": "2BAWW4jjtKU5TTERPAHEJSmCJ73HUMEtTMMJkpqdSXYrjSQfYBe3BgX3cLKtEu3e9qwrRwWb1aU59icZjGNfUeby",
  "key43": "5mscYFHXkgKpB9V6ncvwghAyQBzu8Taq6oRpy4KrpqdCENVtpSc7ttKLXYRWyVTBWn8aH2BCVM6ZaANTY8o9r8ZH",
  "key44": "5NzQNivG2j8xTNS3Y9KYCoCHAyuLmBQp3n2MVuBnqCuqJzZe6knSFuJY5eqXXrPUSrgToRcaHASWd4fHkxqiEk7g",
  "key45": "G6bSAVD2ZQ9nep8SS5wDrkHxw1AnHHq75SkGrJEXiiVzvbWjjsfVwNNZUPKffbi7pntBpAxFL9a9GpWtAfhTCPg",
  "key46": "o9iRgR64iTnUbrBJKM6AD3nZJRDybyd3z53zBxfYVmqLWhQabURPrqsZn1S1CKCkKwo2AxXqkopokeXkxtvBZ7D",
  "key47": "5ZRCyFKeVXcoXUiiXVfDvSXz5ZNc6zj1GQZPCG5vv4AQ6HC4g4M7iEnWd5vgqmMAFJVDYKFhsNC4pTpzWemGfjhQ",
  "key48": "67qR6jm3x4kmLjW6sNhD9fVGRBn531hYtUUC7C463PCV35GsUYTcHNBTHhqay1E9nczch6MfvV44BjXQufXARXjX"
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
