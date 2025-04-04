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
    "3QpfHtALTJHvnw77g4wsxeqAQMAy1VmtBorVjPK9iH4KwtaQrVDiUW2Af6Tcuc9QxKUd93xdyieruKcLyQnitHEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qa6zmbhgiE9rF1mJZRpDU32NsBZK51EpNBSon8va9dJmEWTuzzTugkribQdSELMh2UuWtVa5a2AcHWR1qEFfsve",
  "key1": "GeWp8zzyyhQFmajcN5TfeJpQ432R62ezpEdLHaDR6tyBCDbQPvz1p3DXkDGhG2vTPmEkxRhBEgxgU7Y5HSZntoK",
  "key2": "cWpFUdvKcR7QfWFyBRM3DeBci1zKrnVPj6jiMjGyqyNwxfg7hkZUKSjZPYNnTtqCKmu93RkEd7gF4ySbrHgv4nT",
  "key3": "5SLrAGwpZ8m1PASUeS6fcwqXoM8RHrvwoD1cbiZquZYupg1knLeLhpYipwUgeBNwmKSbrNrWii9aCa95ydfwsZcv",
  "key4": "oVavXp9JUdrFVDDfS1xARDvGpZQDpVL1sURC85TZVZ3jV5CjpaFxu7AWgFSqwtMDVhFf3ympesWWMqxC4YHh7fL",
  "key5": "56Td2uyzrjtoXfYkda6PV8D2R19DGJ6rqru3oa3y6vHsAzFoQiViVwnqQaQ8nZCnx1joCBVrujmELgnFbzZ4YshF",
  "key6": "477nxQWA36Pc9o6uaYbikGXD4aZaoh5Ti1DwQdb2Qofh59dUN4CfoYAnQTrgFiaoRuvR79LKNTW2oNPwS47dVDaK",
  "key7": "3172GLL84VRuhAJ1RaEMLGyabTCxZ3Z7LmHiwHPW4g17RQENiDjW4jUa5u6LY2qRigm3RLZaaXM9EJkcxRvcYNjx",
  "key8": "4KEcRPY85vMC5LVYTXufFmmpcTABrVvU83msx49WDgdezDZzfDb2stoCHeR5bfnk5xc1Si7YUmdSSGb434b8gt8E",
  "key9": "2mQMziuFm3DLdqLipwaCtF2uBHuNoKfdf2yfrRXoG2dVPuPiEGFoVWdG4MdaSf9H32nNYGH9vrpFiCcjqdNAnDra",
  "key10": "4BdbKexemSVaWhNJiwh2SfFgusREd1PE66Bubaw8VSbgAXgJwWnrv8dB85ZVMRr5ZJS6WmVRieArvspGNBD5bT9H",
  "key11": "37PfjQnHSLjnfGCsvZcy228iWZt9EZaMQhPJwVPe3XDo8HtagoQhVFR8rbE2FYHSrwP2LhAL65djBJ2basFiKG2N",
  "key12": "59yj9x8HBzQPzfh8PsN8RePdXJnDqE2aK52ov5jhHSYw9CA5B41qejBFzigUGNpF6xcWvg9Hjo15mPq5bo5kwCQD",
  "key13": "gAdfMTKud8KVTCTf5SUoq23fpQWoz7KiegDRnfGwW2jRvEo9FW8reGzJL7h8wgRk2TsrgXisNdnKFhFB45eHW5k",
  "key14": "2vDXDcniiK1k7hgBMjaeQotW7RK6iBfeg66jDWqZfRnLs3Z2dPd7Afuvw3ePcgHwDKPivBRjFYu3Jwqa1unKfjLq",
  "key15": "3zDvCaDh7qqogQjHVsqEsXvbqVT4Wobohtqa87U5KhNP9uNPXrJTN3MYchuc5cSE4nMcUznhPaT5jpmxkgYaNwGk",
  "key16": "2dmWMEy6iX4VQHNytWdi8QcGxBurH52ctxxEumtJRCzjHx7DDafN5NH2R9V24s1hX3KjgxhwUupHksL9UR2DMAev",
  "key17": "3SEcKn2gtFfd3SLi3WTopV9t328riCMAfesLSX8VsLCszoURfM6pWfWVxpVpdEiqQtoJJUhvWWLvr3oWPbPDwhzQ",
  "key18": "5vBgj4z5ixARmza2TqUNrx8s68iH8o4x6pirdSjkvdWZDJWtu2JCn8rRVBcXs9UXQX4gYxUVHfyX5wNjVvecsjVF",
  "key19": "iW7rVqkNQJDUydux6yGRGcBYAwBFWqCH9QH6sSkdAH7VinkhjEf8zi1iMBvmNVdHV2AVZj7ex1sfE6YghMcYcKe",
  "key20": "2dUnWwWaD9bG4JYmjBTbgTpFCuK2c8ZXWXSQW3fnnoVspWGczmAKCLSFg396nB2hLrEFmoSCaWpQoNALcMZFxB8C",
  "key21": "3asquuocQ2udPkqxYA8SWTu9xi2NZ8GPvjXxdjt2F71KPZN5Jvu9dSamg2d5NVpjjJDampKKtThDUADzWbcGV3CC",
  "key22": "3dLNSZgFHXrC2a3Zk6DR1k42mUMqWuga1eZmHH4AUVd9XrdxmAhEAKZMWXAC8jzVkZGhvmSBZWRpPa5CuyWazKwN",
  "key23": "4ShNGdrSSvhJziPcWiPfXmabQjuRunDTpiu6tuHuMfVmZWhH7AoXtcotSUZgiHKppMsv7FmKhk5BoPEK1M4Ea4jT",
  "key24": "3TyGGAeZwFPw9RcXa2AQTDjUn9VhC5PGoBji8vUDfDmWHYxr6LnxcwkxkaEP3qUBifgK51k9ZXn5hH1Gc3TdD8jt",
  "key25": "v3H4UDLZkiW77yjstZtc4d9mrREddvqPnBqx12LVFVNHAuU7gAjFqqAjf5YyLZRGEXsxxcnejKPsCof6WKtrTjs",
  "key26": "2nSqoYRBkYop2ktyXqu7Rbs7Zmjwi4L5z4GrLtyuEobv2vLuPhxPrumR37C9tWeUAZRkEiriEjAf3mt9jyHVP14v",
  "key27": "4ioYxkFHp2f2vbS3RzDW8gzsWXsWAD15m5XbVYBimzPUC1QRTqs253HG67yySiDiUk72qCBHzmU3AeN4TXF6d1eK",
  "key28": "5wH16MLrwDwkFeP15o4XKGfC2z7FhJWmRfZbnDSq6trSdr5ykhAKZvhToduBC1DY2H7jCFZ4Ya3jRx4mYGf2373S",
  "key29": "1sDqFMUzzpcvh7vb89ddse4HzZTRPNVjwhcCQmP95GCn5ybwMB1oREZNFRXabqXRGrvUuEpcFamT2m1DPmoEQVh",
  "key30": "5kQzuhkYvxX9cKCztWf1A6ih99vFwdkj2rmZ1osaFghiB7ZTAqYApjBB2dkEKFnkhEjMW5ggc3zCnKHDuQnvpCof",
  "key31": "2QsFhvj88hEyUpphjFSKZ6tcCGfeqMgkn7tnmMgmT4VWubuSMSny7dGpbvzwSfMvDtzcADhGn8gaKayWL5ZLiZJ4",
  "key32": "3VzhF7ibYAi8XaEReVzDinPXk5MBZnF5J8uioCTzMfmN43cHayKd3Jp6wj35P6aEDg5mUJrJfKytXJy21z7rcrGZ"
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
