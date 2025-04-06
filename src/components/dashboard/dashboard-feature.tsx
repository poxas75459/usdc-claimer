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
    "3reVApErDvEWNEFqTdoKtZRCDYApUUUCsEZJdyrwXKi4JfGJYULytPtZmBaPD2fqqFn3QT5dWsWbiyxCey41Cw19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDviCBYKdRQihoqujeCrvyLmhCjGRg3eHZhW52Mmm3yVCak9p8AgF9AsEzzyvHX1ZGEEqgrfbnWAYLJZynyNSVB",
  "key1": "4aGc39WuDPrtVm5DCV6Rg6hteUFeKX28ee6XhEvqpwckC873L1QUriVRUvtVhHYLmDh4KC7GtJbwH6yNfB4wSTDt",
  "key2": "2xmguJ1PAVeQ4pV1BetcBqS5Z2r8baxAt19m5ix8SrJyFmCbeai1CRRXywgr3ZA4vwDTjBhsXZnvYsMstRPm4drW",
  "key3": "54CZNoCKdFHx2a6vy7LxJuGbnzaFNJoZ7fgp7ZkTCLfQi3rACTPe8aSKdP9LGrxJ78Lagb1KtXeA2WxKs2YdcAng",
  "key4": "2LsbjBD19qqJHTVgt5QGqCFHtVXLgEREdyw59ogmtHCiDDdym4WF5k2f8v2QX6G9LFeaFSUoZZWcfhhjzS3LMwCa",
  "key5": "2JMfY9vesboEAUhLYtzxLazUgw4RzCiraaP3PqbtTS3DsKhuY9wCY2uqgNq7JFHxz6TDamjTV3cZ1H8m5xsexYBF",
  "key6": "5U6ubjeQNsCciVJBFL8VEVw3JtesdXGu5QKbnnC7LqCLoQGJF8ATcgHYckuZTxtUjGRdE4g32Ngm5sbVoQfqQocW",
  "key7": "2ohde1VoCztoziYtpSzd2KzSfeb5SUGoZZu62BzyYuWQUFHocQFmx7uN7xkqwUk6pfLy6MbUFFxwQBS5avZbrVQQ",
  "key8": "pecCu54KKLBMou5dc6gd9vW1y2Q6PtH81vieD4xXoVMbrGu7ezqa52y7mN9Uz8Mz2A5hsc4qjjsiQCBxKimxS1f",
  "key9": "2Ri2hvNG3N8YxQ6FQXajdguYmAx9Yj7qoMte6iTRGDyG2fKNjgWKW3gJFo8wzMoUAKyC1ZpyKHJX155F2ubwZFHi",
  "key10": "4xJMRFymFha86GjvMbzcDk3JhajvDcq32SzDVbDvNf8aCCpcn6UuHyNYDNfxJYUF8gUCy7kzg7wFPpkQGK5r7EuZ",
  "key11": "5kcFCACcVLJDGuDzCncFi1sme6uhLG9epN5xyqSSfoxMqHGsA98ECQbVWRdUHfjXtHudZa8yFXr8R7uMPS8nKmyG",
  "key12": "4MPwevWzcdWEkDSprePYL16pYhd2JUnhK1LzxAFfb5skme3pYNkL5zEpDRo85eJbZbv82KiuXeR6QQAFuTLruNSn",
  "key13": "5bWq4YEMoPdz3xM9QrjQ9vf1Uqent8m7rEfFYPydWhSdXF1HZPdFDEZQZiAbns2pfThvGzf3TFe4fq2pHczLvTsK",
  "key14": "28dVtvooMdKoKRZjY9eCB5WP1DQ4YQrRVfEDWR35c9zvapc4h1S99Zo5CpGGzW8RVExS24gN6oFJhfn6QW9jV7aF",
  "key15": "3ZVDERWhgbPVMeSJ1F29bCX7Ahq8qZzg1Qm4AYgSJcg2tAMCmzjmMaHYjw3JuRTwjHuidCNyhKWTThFmb5mFmN1H",
  "key16": "4XbEwp9jR7i1uzyYgDoJzvyQjD3gqK15rL3ShR6oZV6fN48GR5M6fsWqhJ33TBL58hHTf3U7TWJQDqa2pe5iUun8",
  "key17": "ebCtPeb6HJFwcxbY87qoaVY3MeuQwFrGCwEnVfvVP2KWzzfwwpvrp9WKZbHrsPTz9cbfPL44SfH8nxt2NzuqnET",
  "key18": "4WEWEsCJif2zB8PR5kBa9ZfcFBYsT52jER7MUaRaMahG6AYjCfeEt89nEikfc5dUWanR4fX5MA4ycrfR9PztwTTJ",
  "key19": "5PEwxrLyeTzm53Kww1pwnCbAorqx7EHJJWzuKx1Hk1Czr7nq9jMnEdvMTACeLbZqZbMCh64xGnEGC3Nz1KgwCGFK",
  "key20": "5qWncqUajRBEMF2VToCfW9VC9xBq6L8HxzxLnbXAurk5uSZQrexsVnWUbzytHe9hNjyrxAnYeKF4hH1HKjXPh4vf",
  "key21": "21tCgmVcfLogBbDUNT1j3s2oKt8yQNV9eqnvzJwwY4i5NZ9URhaBoD1M5sA757ynQEhEbfsTZmxLmg9CLpNbrUEJ",
  "key22": "ZxT34TMHHt799hBNvpY4W1yEiqZZrVZBRJahdXvg8jGtZF8SD2d7vGtFuKNDT1b3vbCRMs2eMM8xzmmpaFLREYA",
  "key23": "32YHq1uNE9gvFjwRWeVKzreAnnUCpXWemCVfDuifPPdezgeYRgKFd4sXmnPh9oWpB7cRW52CdDXLhwsCt7XKLzaq",
  "key24": "mjTPJLsR2egtkMEbRrwoeRZvF4hVAEpe234vnmuPyuPTCMD9FMf9kssfpxTfdBXm18QRiaQojNHtLvAbBQWAPJm",
  "key25": "5pYca8xyEeZ3zYR7JKiBpzbPW9DmzgMK6BciH2cMEZwyWPuX2i39EJRzK1GiT2JA1KZ4MT1Cc13SNmHps9vL1ucG",
  "key26": "TnPMUcxFKWzspNvHjnqiAeJZZy7qWhyCpytEGuyGPfeC5namWHtVCaXx5yVcPZR5e9KNG67cthaG1mGqqtSZxGM",
  "key27": "3uU6ic86XzXUzGRJXM9Cq5wynBfSxTqg7Ct9qGLJULJdSeZvtm4agxuAXEkbMHy1AamtH3Kq7TsKrmUt7MrMfYnb",
  "key28": "2vJVAbnh8Tctfk5qaGPMGh5Eqw63s4HJsZpLNMhHHPt5jLyDaEJUQoeYzYnpTpY3MkVNcd2XVDFkSwrwMHKgeJPc",
  "key29": "5h3wV5iaPdtMnqCXsiuk9i4exjHwDn8XWxEki6JU8ySMDYdByoXunDuzJrydD2GqBakCHbFS5QNSMD8btAyaBvDw",
  "key30": "4TJ8yTqt7FvbuPY1T7Ksq1N9K82hpzNq1irxMDCUAxstREXBSKZ6rFt8GXEwmd2y7gLoCd6feX63Yv1i8xGVX8Lt",
  "key31": "5AfM7WaLmmXKukxo5GbfjmVPfMrJri9SR2mJRoSk9iHc6ob41GJvTL4xDrCiwqPGUDckZWFRio1vaQ51Sb4xiPeh",
  "key32": "5f4WZyVmFqTstRKxG42X2gXJRq1cRhQA8GBLAW7h7JF7REbqCP1cwqU7sdHhMMJcFncGQBRHteKEgeXaFz4i9TEx",
  "key33": "3k8zDJujDYXTGEMgN6tCxqYp8MydzYy2vs998fW5nDoBDioR78GuThXXiABvurwwqL9nqQgySWo2VWHaaP9ax9sw",
  "key34": "5FUrb6cmsyHHVTFgkVB5ojRJbtMjxr4P268JAMnwsWgmo8StdzWMne5XowEJ3vbirSwK5FVzs4dJhcksqbZzVeC9",
  "key35": "5j5Fcc2bJGGqqa6KJieg5AMNsbpCdwBhqNfqDmE4kVw8tDZLRwPvVV5ykdgyjhrsLH6iGfaV2n8BsuFABpj6tcdf",
  "key36": "3rYUurmnEVSeENzpLY7NDuqviRKXDP8pGZYcjuocn9TS1HfmkzWroNLvJyq1K8PjY88QP8Rj2C1Na7kUyyCu41JW",
  "key37": "4hZ7pV1DW6vGBa6iFdN3wfS5TmzJhsv5mDzPCbHTLxm3fsHvxmM9Eb1rhiezFjSkWaQUjGyCZZdLh2aj3wUyQZsA",
  "key38": "TeYmMu9U9cmMxsqWhQFpjtjTNyeVBhFfy1M5T9KVmKLnx84W7LbMfowychaMcpTmv48oMwi3G5NPfXBrkA5htb4",
  "key39": "hrjV5xuDf3h3BDiWHkTs4Q7xxo2RfBmbdRwxqziyQGW8y63GUNe5aX9WuRrrQSE1D7BXTJLq5BiFsqDGFDqf2r4",
  "key40": "3BehVSe53EaUMDeEuDSd4T8jriSN6GZpL6D93CWvyQuSYnScuZCeSWBQkUF9kR1fdEdTHkMSsbdP9wPpu2nF8yCs"
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
