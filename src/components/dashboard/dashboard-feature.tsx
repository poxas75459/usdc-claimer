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
    "5zf3cd1bxtEJC4FwENBbTW9eSBE4VwcMpnJ7FXbNzzDuVoNLsx2JcEJSCx5k3qAkjf31f5iPKfHG5DiNEBjPo97s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpzjLUF6g4URfkPtdFnU7CcpZViGKC36NTb11S41rX1kAAqU2xuLERxRNxgumK6B1L6oyCZcwKvnU4T7v5PJdw",
  "key1": "2hvoeS3WXgPaghZacQerhUR41GpKyaCtuCXnmfmPuf5WgT2x94SzDfzfXPHSH1D1m41rwPJcvi3K6wAFtwCV9Pqi",
  "key2": "2jb9rRLWgAR2JhRA4EGmHrWCY77ngvLek98o4gQb9VtjTFfRvX2gfGkdRQGm5NxfnCMsdnyWiYD2xfXrbnfMYj4L",
  "key3": "5jYnHk4N6xRbk7R5GBB19mJW3BD19HvMtAf7ntqZf8Jij1PZnUyYD2NebNWc3ENkLioaCyEknrFPVAkXsJvEs3S3",
  "key4": "4SA8XzW3GawNhB12rGTvL9wbfEEWTfLygW4XH58rPo2MUXAUeyqScGTpmG355ygY1F5YdoZuEtt2oP8es9san1tA",
  "key5": "WCpF3ZWXSDgchLYpxr7CoJubgehfDhN9uXC2JFgqfRfzk6W25o8PDdHR5HoPP3kHm9RMUXXLJ33FdJLwyYnRjA4",
  "key6": "5w4KpsC7zMCjFcZBNMzvpcH4QM3AZ3aUeVhvRd16xCjq2rqerohCKbHF8tMLWKsyXgy1hLriNCLv7LnnMQSFGwgy",
  "key7": "3djLN9MbKGJmaCS18x8frgXU1pC37qMMfZpy7yt5QaSzMLSM7fuhi1aWUCZHTDTaYJKYxBdVt3vaxnHVUNZYcxGm",
  "key8": "2zYTMoBvWqdwZsp9HjPUpaqptZjSKJzxN292WeV1XmifuVmh3phjmzsycUheZrVUBM4a1Ts3pFCpaWxSPjQmzcqK",
  "key9": "3y93vDcCTtaCekasv1pZtd5GidTox1Tnvb7rxvC9jBf8JfzKWPyzrfW5wbu71RxEW761K2nvmdGjjDPht8Z81AKc",
  "key10": "Bofute6LbNBfz8eWz7pKTQUzcsHejkmdBjrxR3HUgJKkV8grFKBnMS4c1Cr9Q73vfCDqY2qwoSSUDVUdeJUaJXv",
  "key11": "fGWH5Vq1naYmwrqWuhMjRrpnSLasMW8U6BEDAh6iS1FhVo1VVLUap2qcq1ttJu9EmQnSKH7NHp8B8sTqJnBx4DE",
  "key12": "63CdAA1FD9HqswXfsrwGqtUDCB2ZRgzYKQzCW9RXJ6xNvyM5FNmFmXW1CHxhqUJJditziXnEjBEj47LseaGJa1wq",
  "key13": "5fjDt3fqrhWmp538ESVJk46fArYaXqS5D1etBMVY24RbtHuzXw4xvRsXhtbMXLZsA3Avs33WCrYkN4i8tbHGasJT",
  "key14": "5YD4p2fdLKVvy3JM8Eny6zBWmqwvrVVX6o5NEBpJnngEd1bjgdafcjZN41bcLa6pMpdoSXT4VbYexMCDTe24DsZM",
  "key15": "5yqWH7RaGvErcPcZTJzgTdJLATk3rzbzbfY7wdRixwVUH85BiBkMEHtboxKar2wKK1SV4VTAp7Xcb21fK3oxVxkx",
  "key16": "24fLywo8y2gCE7V5HFrzZ85gnZEmS1r3PXoBiW9ZAyVSGmuLUcjb8tzD5wo3B4TLEx6RxtJyYVQgGFxt2179HVdZ",
  "key17": "5ZvMgErxNooYJgHQ95fPAMiPPE2NKJcfXpDthoEiGkSqvPShHYkVuUydwjuGbEfNJ7EPLhPCmQeHDbg9C66HUwMe",
  "key18": "4NSwFGNEWsvWwdN8wukGNz2J6qKBn3NRCwS4ox1LnZ9p1iz5SWhuFNHSEzAHZaeij6boZ8sNNHVRuFRmCYMDyaZ8",
  "key19": "4tE8eBQNDmZX9wEh8SzGZMHYQT4r7uWXAo7aYPkqVm7yWj1Cce1gkeiRpuKGTPr1QunNHMSg5DZs3keXG8Hw1V47",
  "key20": "2Dh39HDLwPieoYWKu624C5hkGBdY65nchNvfPXFL7VpmM6gGb98xPKQvKjpLDXQVQKaLw3Hj5oAdPKbvkMbKdaDT",
  "key21": "51c4YjwsLbfHx8rVyH2mZxVhsnAu8SThkfcNf5wvukhfykhBk23qL7APAXfBdFpvodiDi8kTb1mqkwGfHhiMJGHS",
  "key22": "3rDFhFJU1BNpND3trtXXajUM1i138yjLAnZwNFryibEYtZLAgX45M3oJhaJa5cPfSnLeubgX6rFjxtjr2mkjgy5a",
  "key23": "2TVxRcjz5zqE3FVCzWYRE8ERv9XckCWLeUczCMK2y1YKowL2gtZWw8YQX673LsJsT1Zm9Xv8C5nV573UPTVUxruj",
  "key24": "qPKCoj9DP15qbyFhuYLyJWr7Y2XLTyvSKZJRXNhgTYFRiU2jna645rcrKGRwvHy8yc48MDDMkvX2Nd7WMveodq8",
  "key25": "4g1TdCaAUVR2XPzuj4fipNepozLsK2yn7Kg9BxRsydDx8tezotmEvAmdAfCDMoCsBDQgiyMFPiSx2exBczho9n1o",
  "key26": "3ftDdsRTms5LCeeM31CyxXKLte97642AL8RKGEMoqYTC7kiXjsLSSyPtRfnTLLAkAB5Hc1LrZRjyS9p8gTcKxxm7",
  "key27": "2a5uGRaugMqJkcHtPTzRuCCkh4TxS4pn6kMLCNaJVfUthJR6MYLEeaBRBCa5CW3ZkC9CvLGvKqE8H3jMwEy6gPpP",
  "key28": "3bvE7Fmcf32CsJ7NdotigUTHy4PvTbwHbgczS8AkhU5PpY3hqzdXmfjuGFYSkSRFn9U75iRUpCreAoKfYz3Nak5K",
  "key29": "ydTWEB99G3is5GLRsjwzR2mSuN7PGotvaKPonrYnEtk9Rj8L1JdbaRJCKvUaMEHmrtCvJGcZJECe1qTmdidQagz",
  "key30": "2MERECXqyPiceBgyMRGNPQLUaqHxiJMi1NMiPpqv96EHMzWYqqWSs437s2AHmxbzWJBKqenaEPvHtJXsp3n5z8Ev",
  "key31": "617CVFr4zbqpp6fLFkBiU5s9KmXeN1sa1tff9jjFxJygcvgDvMS1C12JSuFt73EXGvZ86U1TWNK1HCFkFpvXTv5s",
  "key32": "Qxc6Tc2bFDkP79kwTQqsmjY8aumCNLbTSupM9BeZi8MqPkpLAeA6ND4LR9vbZCPerbgbvTiwfyTQ6kdGeEmnGFz",
  "key33": "YbdcjjouZKNUgpWbX56L7KxztAUjcCyu8UtMeWXVzWMgKFRk7eFre2wCCRqoPsCR7ov7MRbDfBD99g7CP1fBwUq",
  "key34": "2sM8NAGT3PgKdpuRizv2UfeEbFhEqxKwkXYrCUwLmEhzWoPKBMaFSgU7Mz5M1UAqnoYWmnGCaamxatSYP9poJ419",
  "key35": "65WAQn2QLfH6qsJtv7ynFNFoa9pwMxhBB4TgcyJ7XFMdRkUnZZFZhwre4teuM5iUVvKCFwYJ1SxtTAUL1jBvmenw"
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
