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
    "612DscQej6c3tB6joSWDdcjnCcR7pgnejWMBgommuX5Xg1YdWGyDd3o5Kx45wZrnfyjW8yCWW77kA6NddRQQ35eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5smpccVfVvmHWdjRohLC3EcbU8246v3r2hVEQKagXSiteLLz91kq3dLRN96yvn3xR7mMpfREvQjF3zHxuErip3WV",
  "key1": "eJ4dKUh6qjPaGAYJDGFgYyjDQUimB8Wscg6rWR9mpkSxnPZDssq1qm4gRbeJQr8bpDHmL2HsD7CpELzBDFGjNEv",
  "key2": "591eNXCh2HeGAvdE6hdWxitVZbZNK254inpu5JsLmfJAwdNqu11wr1NCu7SNb38Ctn3MMycB8HPnAPsgzEoCttLw",
  "key3": "VabzdqYShhjXK7ufguB437WPHg39rTx36HXHrGJnb3MaUXAz914PPTWKpHiUJan5Q5TSAiC3oQwaT9MfcuLXz9y",
  "key4": "fq7MLkKFpXpWjmtvqqFntBRt2kU3xaWMC3jqV9pwhStqKmLhB4uRrkRMgmYJ9dbKJtQdZdrdqzqwa9WmUnxJZYb",
  "key5": "5hcTzSbvQmnuNeP2wCVZohQ5ithFqnqYfGNsBvtJG9UBX5eZWpTytCLmS4ZDP6AratjAKYVU6Nxsj8rhZ5jNPpoq",
  "key6": "4vdHEKg11XdMW6KaynXaodmBuFmyeVFxrQ8ARDkvZjXA9qgx4ajnosSK5bTXTdVzBrsgvBdks4rCUsMtYxDNkPjr",
  "key7": "6Gj1rhU1gJoJV2CAyDTDpbZHUPRaXmVf9tdoKcnPVZJUrQLahFfMtguAMsDrDrqVjuBHDyisJnxVoaVhktkX6wf",
  "key8": "4rgKRqa2v9Bq2E1RSVrdywE9RHEsjhqBJaJngc7kJnuyHtjj5poxaUwkTt8xHmHDkTQuhEbcQJPMKhoCMLjt7Dnp",
  "key9": "2SvuEVCao9kebcc2cLvG7BoFDbanhmWhwh42RNxV58AnihrgZDXNiZeNJi7DKdLM3VZvymwjkUMNijmHrWQh8VKC",
  "key10": "2HkiNK6pkptRWdFVPN2nxKNZFvtAqTfnoLJ2KU5uYSPu9Aur8YEaEAHEnHTPbVFiJiTcN4xmYch3zofEFosS6Pn",
  "key11": "4g3bp4dSjvf7FMwwRF4qV31MTq4L2LB6m4B5siBBtPKoccXmh5G92weK9AwaBYYfAJ4NUh8yrzeQ15pBVvqYgvp5",
  "key12": "2VG3wWL8gDLmBamV7W1ifzsbFYPqRwjJJr61ye5oMRwBGV3NvhDLcrxneFDrZS3eDuifs43Lt6cxVbpbfhdntQru",
  "key13": "49mWaCKupfcwgSrmSixZswJH6DKLNoGuL7TRGWgph5ZYRi2fnkZzx4uoD4Q4QiYRTYzxFbmtLsjhZ5NsUJY7txQq",
  "key14": "3nDcWdKnHbiEMKJw5BkDTD2krqpQUZcFXtLZczi696pUxPLe2kpEerLqdoha7gZeyPxSre7BXjjE494CsZjz42Zn",
  "key15": "5fz6b8aiwSkT53mh5Hbk4NhkyiMsPcP8g477Qz3L4PR4rf1ik9YMMPSfD7UcsRm3qeHQck7PKRHuEj1XsjyCxC8X",
  "key16": "4JumL5f94irvVr7oJ1TtXY1XiFCxbbkk2rDwpknhv2Tk8fv676DHvfDkJYX9JdLVj6J1KVBmxkEPMgkmXqQggi5n",
  "key17": "54K6KFzEgnWAEZDRLjseHFnDYpQERR3FU6wAkRBf8wQHKP3pqBRQkLmNAHU9koiEvUQ9GtckGCNtjPZasBgYamAf",
  "key18": "63p47c54xW7mCL5ynce4DcTj7EEvjtiqZ6woakfzeuuogbugToDM7X2J2d2b3Ryj5TUf3Mxfuq6bjRS68EL6gJuY",
  "key19": "3SpBrwY2efVSyXbvsp5KXv1t7HcGGtCoTPnzyd9JJTEw5XeEX9wxVH9j5aFCPzVnbkrMsctn2g93LjxFg5k7qxZK",
  "key20": "3EpSn3cmgYiuJG8gKgWH82WNqgXfXi4r7nPR18s9pySNnsxeQi7WR5siHWYDsbzqz9nPJjHPGydPFiqFPE3dmPvN",
  "key21": "5AX29uFyexAMswPgyY47dzEq1UQ88K6NLZ3bgAPazLVLWG8rwesM2AoLSDsvU2mskpf32kvz8qQdTLBTXn1aGHam",
  "key22": "37fe3rkptCPYGdgNzmf8sa7vg3nUE9wFGU2StnYeYdaZSXeZ9Kg8EQThtPBjwztpwwRLWGg7CQTcZnEw636iYHf",
  "key23": "2DtJckn6DUKPvbXuDDdzRgsg8i6ABiBdamBsHtYLfaCL8GQUYoBRxmwjDvd1WVrqX5GogU6L3ByGRRhmCwtmSdBo",
  "key24": "2dJtyaNHjW4XeUeuVhRXi7FTkdP6vHvAaX65hp2seqipzp8cP3fTqaaUdFW4zyvFY8FsjrYsQPkXCCSBfojtuhhk",
  "key25": "3sJCJbXfz2NGN3y8EjkttxovTXdZURdV9pZuxVcjGZXpwfEfuifZ3SyR7AM86bAjocMDycsKzcqXu68wuHHPt3cN",
  "key26": "3KYHjLhqBixHpJqhzayjXmswKXsrsvrZbjdwfcUTfLtXznEVv7646GDDDp1V4PdRc4MnnNAC18LkPxzBQhC8FiXo",
  "key27": "QyNRL4W9qCbsjFR4QPPchrgcnTmu5SufftWXTbpV7jYFEtEpkHgQ9JKCY27DdojcJb6PwjK8fNEHwHCrDLeU8m2",
  "key28": "48yDopHhJ9VuuSTt2imA6eNkoAsQXdXY4UMK4Ezq8RZzp7R7nKpDfogdgVPYR2aeCofBm6oBUrjRCf4VpHLycNz",
  "key29": "4Yk5t1riNgM5Wj4Mr5xBo6NZb45f1Zd4NBSNXGoUUzh9NG1rXi3dHjRm5f7k5musDRx3NLvX84LJAwRgicDABr2j",
  "key30": "4SGF78KNkN6i6ZzELgTtBU8HykFZEj6QcQ2aEW4n8EuPxMfZgcQMyG5dzycyw8BcFbVnL28qLi4Dhd3Em9FdUQSs",
  "key31": "44ofMHFsYGW46zWpFf3mdjYmfWrj4cuhxDDeeWzgUAEriC7MSqDGuUcE8LGNomsUzD1Pqj2wspoocxoZRKqvW3fg",
  "key32": "3oowEBVBCg9GFftXhCbj34HqkzNpwYJExsHXB1ux2vf3rTKTc2TMJMrZxNjT3eRvAFtDg4ZdBd5scmBbhgTykvrt",
  "key33": "2Tha9Ah15oNdVj1to5wwvgb6xX5moHXH6J2nQ5aSam2NSZwRq5ckGfPgdnHvwP6Qd8geAcEEH8jNQcEQgwEJYVsT",
  "key34": "3S8goHYMEEXx928WfhamJVaebApWmvpRGsfUpRmhQMAQM4rkFZcxQMytGehvWpQ9iwTzJ2CRheWZaYqGQDaBSftp"
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
