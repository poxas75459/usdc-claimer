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
    "5KiwhR5beAkg8HpSw9nPRmmo5DXTHtmJGr56LoMGRRD2X189iStk3zUjrEvFsNgWAstHcoX6C2aDEymRfv84pwFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjYvaocd7P6XTGSKUC5KcRogejcKhQxHeAD4gdFY9MsXLknYZBwkr5fdhv62AQ6Zmp4Ec4znffmg6Rm85TY9tTZ",
  "key1": "ntjeZBUKvR3dxmVZZTah3HpuD8ivgFta3thz1e5xkesVJe1U2ihSF6vQRoo4FPW4LyxXo8wLjLsdZPBzV3z4vJ5",
  "key2": "4o9pYWeuiWGu6fFgi4kvMQkovGAHT1YT1XuYvhNYkp463x6osfrgUhssRdY7BgQWSz3eKKkehJXxQoaYpKXFNXzZ",
  "key3": "3jVzucWHCrsUFF5wzDzh5bhW7yocV1wJonibdYs8a3tBGiihDCjLeyuzGyWRSRVYzcoiN8oSRtEhSqV7JwK9Woww",
  "key4": "3qERuoPsjBrSvPrxvvxYVjgk5yErSNhUZ1XjkaWLeFLiYqBtmt6U8Uvq3J2a1984qchvj1Pg4nN1Tkz5m7yD9j3w",
  "key5": "4BuLLM2enzpM3bNYLnxctyNZtFY2kahMHxPhDZqyqaiM2nFvUBCbb924teCZcM3psoVjiSye3wTYfWRgEbwaT8CQ",
  "key6": "3WRTYuJ28HGpKPuFB1gomnVx6ZPeJbLnZvyYriYbwjk52N9yEWmh9ub7g19pqtXP2FjQSQo2gGr5M8XhAYcwc99t",
  "key7": "4teFEK9AUB9nBQs6KSmL8CRocjRREXPm6HQV2hpbyo3dxzJq8aEcSnw2RbHnEWFwmSsNB2jjkyg8NH1fNPeva3Nj",
  "key8": "wWhJNyQ4z3uXPjQgg63JYswUcXwFWnwiFAd4bFxLTEj66J6xms5qpnpbcWBxk3QhRcxf6T3UypDGNkqQBJGf33x",
  "key9": "2G5RZqSeC8wQndm78sSVGvsT3MUEwQdgL8mXQMk1CWjsHTkHsgW5ib5JQNEAM3E3a7Me1nAYF95yKNJWiAhndnRN",
  "key10": "2C8RDwCkonjzF2wahBW767EJFzSZa1P3d6UPLuE2sX3NWxWwqJySd6cjVQ4AENs2JerRA6x8C4q5TyDckmkH3xm8",
  "key11": "5huNk344wWmeHpcxr4czR4k4g8cX4XUn3X51yJtCZjVn36rsPzJtbtWVB6nLVT3HrdE8tTKnc22oNkM1m9kiBRBC",
  "key12": "4dMbWaE6CHZBmaT22tbQeEXPc9xbSghASGrwLAprpkyyirHhygdRwKA34aYqz7ZWcTic1H9FMWa8USefJz3PPNiF",
  "key13": "3cth9wdiv51GL3JpqGSyAiDhysktoY6xRH6xCNzcJdakaGf1N9xzs2F7yMzNeSqwnWtYNQyo9PQzuRESG3pqaHMM",
  "key14": "2GJNc88ctSjEJBobptVtZz8NXSJ5HXCHRa38q7jZvzkF83fxNrokNQdC3mE5Hre9NCSAF5BWZndWFXLP4vcQEUkA",
  "key15": "2pcyYtWxBKSnQoMiwMvT1mKe9pCuc427FwRwRFWpc4jAnu3WQM4dx4FT6coNo1MK4xYT9Zv7aKCRmF1mfg5aj3ud",
  "key16": "4PcbTuWRhpgvKPNCwKnesDbytWDMFEFfRGkpZAT16mATxKz29d8riSk1j47dE592BTv99JQ4jdJkvwTFxCX3yD1Z",
  "key17": "2z7Zc9tcW6JsVr5UP11SR1p3QG4Md699nDcEztN7jSX3nBiCsz4G7EWtFAu3zkL5bbV3BTAbvuZ2vQ8Z63U3B6FU",
  "key18": "6Stwi7sHSGXtBgE9EHCDQ9MjUPFGh1zg4hCoafm1qZMvjUqSx2KMSaW4jemJN3yQsuJYm4NfE53MzEHL8jfwy4i",
  "key19": "2FR3eyhui1uWRrdYD3XCY5ip73u79dR4XUpHJT7WGf7qRPBGfZT3pfWfAHMQGov1CBNSyWMVd9P8fPrZxXaox7tt",
  "key20": "XMfjtkqCtAdEHzN6DW46SxGSSTqNLrf651eSYYakaZGXQxARZXaKsCGEzbNLnhfpkagX1Vep8iWeMnxUxzXVubJ",
  "key21": "4Dt37k6QMVJ6pbRnu7S2CExTBntAPx8QxmMrw3P5PJ9SNv4unc5P8mLgRqCZa7EYRZ9sDLiHJJMWacxDRD6jzjmU",
  "key22": "4cbdEDhEYqh7G4mc9xx66A8eE8QhviVUT8Yqq6gUXdFJ245zL7gUdvSV5cjLyJW37JNmUT119KPa8LgHe21pgRqi",
  "key23": "2AC9Hrz12Zg31sxRyzxLwwueNUwuzJ9LiGSuSAWaVFvuqzYoeuHiAA92hPMxEXw3mHSbaZevNivp7fauSfPJ6HSM",
  "key24": "5s98ed1y72QU2WnDakufwaiHSCjd3pFEd5v6G5wEHPjruqRmt19m2atBHk49EdgGXQBxZZXL1itJ6chUJM2tFBxR",
  "key25": "3sz4keqHt5nD8ivwzYnmz4GzsgwH2CKKmKg2Jhm1YGoJAeGeWWvwxfrETXb8DgnMm3zHZKHE2nCqrwt28WrfYdjz",
  "key26": "2xUb2FZc8tdXZx2geAsusf9kuMtYafCdZLUcaTR9qGAUNv49HQ2qeUX7pFEW4mAZ9FadUAcm7VqJWLSHakh9ynWQ",
  "key27": "65ERLNHsW9Vx6r5DzsGbXmKE6zopgvADsZbVRNey1yT1TPiY25Z1BPzVkEPQcZzuqkc7Cd5b4W3GPo9YqmMgGtiH",
  "key28": "2hnBck3GzhwuSYWY9jdT7CZG4BPbgPuegCWGMVdUB9oSFJfpF1KMwTCYgSA59VGKVgsjbSnKhF3sk2aBmWYLpDvG"
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
