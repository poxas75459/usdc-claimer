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
    "4PST3pJDnxDgdvRHZWMZXhW4ph7g1LNstmHvD1XvGmLWzQ563DTSCEPyPFQt76XZWbBMqNDabNoGJ2xoe8X1q71T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AcFyLfPbszB2wExvQ8sMADh95rxZUnkNSC9KE3N1pPR8q15JcsqAjyYeqz2SnF4vUTRzhUuc37c7TLnpbNf2r8h",
  "key1": "41A2Y6Zwmqt9nGtvKjKgm1hgPJKwBq5FcY4qVy6xn7EpsY5DNS2BqZjmtwypEMkTY2N6aL5kDG46swGEHAf5nfzZ",
  "key2": "59d6fmiBfoiHQUft2LBzzX8pP8zrXBaR8Eh9eScP4rGSm6J4ovFhckA3EmoT8a1xwxwfcRWZiEHyw3TbXSYWozJp",
  "key3": "eYhaHTF28N7nPzj6wHddBENXSvxZTC2ypcUsCgnbxDXfmwfxSXqGWuEAm91yxrkrtBKyJwuj4xEkLGvFeQevCgk",
  "key4": "233KpPrbJQhBgkoMN3W8HwNo6HXZPqkNDqF4vTHmdwYm9qxsWWQqSRpkTv4o84y2M4jwtUXALvvpfAeyPu7Ejmhu",
  "key5": "iK6yiSts4bpPhsyWiQyupahpkDTnKhv7ffcwevabAaThNTLzjfxHpRH8MaJBMw7bHGVQMdrwbLnbVHk14q9HAnC",
  "key6": "3V5yFWSrW3YptZxdEQrMMhcEZ4gr72ZG2XYM1ki8viHxvWg9L6H5z6D4X25a7U9hJ4aMpUU2veMxXj59b5CJhYp5",
  "key7": "5nP52XtFCJKPpLjQrutte4ahsmrKeBMyAxpNbdxgNxeG4Rd4EMXFJWjUcQuC7UvTdwTksfqhsLv28fdKx8nGBBFt",
  "key8": "5bzRUkjaGZzcP6QDgRswJ4kNw2K2Ee61FgKJfH8kGnq6Sp1hsw3X9MNJH3kLRxBE512LETpaUHjTddsbCjUaCPhb",
  "key9": "3Xxtx2i6WDKwk4D4Niv3u9ghYGGjEh3qj7UVGHcFJszCDAyH8y6PNV5oDGD2NKeKyAxp8t6Aqr6N46HAmpn1sTsa",
  "key10": "3C3KmeLVNAvrnUTkEAdZ9U139xS2HwyMenF3R8HtiRR2xZczCMNgzCfbXibjjnpsUzSLgN8Z6F7jByW5qmshmEE1",
  "key11": "3FsLZb86aXFsMVYK1CVqmCLc9ekcMyCUEbh8dBTfinAbK3mAG3kYBwu8J8JsFM3zP2AyReC2ynPRGJYntv8xZYJn",
  "key12": "2U5m2j6gsqnDRjdfECgUfKo1844NmfcbtNrnv18TAuWy8khxMZAd3X2NyrM44YwDJJ5T3rrnQZRjxSw8C4KPjwYX",
  "key13": "42udhsy5jqsDiFANXcuQZNujtJkerto2bb7NRMfaf4g6PiRVMccfHJucDbXE78CHiv12JRWMEn1rNLFZJMyKr4Ci",
  "key14": "61FWNae5aiatyePiVrrCzQe7vYhNGDzqbC5vKj9SQ6gEDswvr6qEFBg2csPMZ2Qi61K3SijLaag1zrN94gRcwUCX",
  "key15": "qhMh99nRroCmgX7CvVLtUNPqw1Y2s6i6giq1hMRHoVnt5bDCKkFLjBAvWMWCC4kM7uT5y7XP831bkFtfjUSGzxT",
  "key16": "4Keoo6b3M3HHj4ZwE5yR2VMDwq1ebxtPVUiyiPVKpE8ts3nKiX1vEv18ixYohA5bSJvWqywY56ErUT12nP9psRM2",
  "key17": "2BzQ3c2qBQWJDMgxvAx1R5WB7KPdLkJeDctWFRKbFzFFg9hBixEzhvHyL8DHrj2TBSNWCgBMvzDWQXgo7Q6MaLxf",
  "key18": "3GbBsD9qf8HHqZYKJ2KYAkcNa8xNSw3gnDHoyYSBAEg6LCascJpnbk6KDZG4HZ261Zu2x5a1CydZBgoFnGdUBnZk",
  "key19": "27ascrvDjXzMqYU4jDFpudDjgwHVLhK5TpuVRx4KWBMrj9maywPEiFEvnxYYr77g1gK2UDirWD6jM5aLpQb1hDPT",
  "key20": "5WTo4eFipxnJpxGR74xBSZppCZFP6XW4BVa2V9QETFE9Qdu8Bhgbv9t2znSZ6uVPbPsWg2Wbbp9vvKTx2X4RBSUe",
  "key21": "3xEw59eaM9xXq836Uv91uh6n3FYVVHouQMTLx42k5NMoYrS8iSfz8wfSPX4921EoDp23pknwRMWhbcnD3XtnTDXX",
  "key22": "2223zQs91353Pzhkp6tNLmYm9m4uFxxWLQ5zviHEmVQTsJJzPzDdTiMeGm4WaBQgH4ForwWbQXj6JVYNnM5m5ZEy",
  "key23": "48SxvxktwzJMCQEmp9FTkqsCdq5Au6Bb6uJCa2aCR3TgRv182Cu7ExcXUf9TyUPRkrfXiAsCBD72s4tuL3B9PJtn",
  "key24": "3GL7hUFKQrJWthwHfBv6PDmxKkiwBvw6HF3U2zBgyjK3DjxAw66QDyNFr8P5StdZmmKgb2ne1G6uHyGaWig4Rz66",
  "key25": "5xo5ESU3LmzuPPbtCtsM9a7kvx4wYMAavg983yNrEwLH1LYEtaqyzbQjfizSndjAApuaVP6HauxkPeKHqKTfvkaE",
  "key26": "3CB7vdpwkHBQFECEqGqAwPSZX1F7VnChKVsmG8fToot17KGrmMwTim5CCD61LYN2PgeyLLdbDfKoGmntCFc9myDJ",
  "key27": "29ZEJim5BQHrcg4ooxz8qMANaSEyUWyugKFWhchBcvoxFEiJFfYYaHidLZhEBMTfurXc2JxaCUYi6MqrbZjDSYw4",
  "key28": "5RdKDmScHGgTCBHpwJ9vfGTDWxdmhN33WJyC9CvXzZGJdkA3q3v4cyvVyVJgA5SoBji7GrrzieyCKYY7z6AM6pNi"
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
