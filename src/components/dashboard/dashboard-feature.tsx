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
    "2BjfsVyJpxAF9bkger5sif2ijmXRfzhx7s5fig8Z4Zf6ax6QA4jUHu6kbSFRLAaTJYBFpc9ob5Ne6EkmffMvPe5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4eZs6bNvgD2xGgK5DcbkWi9BGWtMie8avUtYewfXbNHqK4YpotveUws8qLe6sXobZbLPYPZHDfLszgThcjCE36",
  "key1": "9mCrKQJzzSWcsEZk1c2bkkHKhh6j68h9DUMHNTVkVnHkcTABC2RFT5NL2MAaDA2RWhihTLv993DzVGo4ee9SWA4",
  "key2": "4K7ZYHjWensLZXxqmiQZEVegPz5pUGAyRNp9bJ34s7X63Jq2p2JDr2Es9sS2Tg5YVpJyhkSD95qn3WBS2CyBfrHX",
  "key3": "3egwRt8bjpaWzZEKyooo9NW2ykzXhdQ8SDNry5k2wU2HhZQzykregfJiywRSkwsKKdX1dunCsSKx7oFg97h2U5sD",
  "key4": "97atD6UCx8hLVtCAwBDFxuvunyvf5m91CEKihaMTGifWXWBkg4dPwqDCzaq56p4Ydc4YRTbeg9NmmWorGtLftT2",
  "key5": "4R57LuBHt8sNGGYXxfHNUPRLgBd79owM35iZfMfhHsm5SDLN9wp6hszmjYx8nQhH3NZ8h1nnFZ7ufAw7uvijp9LM",
  "key6": "2bcVBqPNKBLNbNU1SnFMXe6W9KEMZUaBQgsY2qZdGuFTMLajWR69KL8u3UzrMcDQm5MbQSF2BFoiEAv4LAqJmDmx",
  "key7": "2mbyJqgWU8LNXVaM2coxPsLRrja29j6dKjueEtZeC2JNsRKMqrAmUr61hFTLEYck1VFgN9dfKE7kuEj4xY6oou6V",
  "key8": "4RmcN4TippjZTbinUGVu4pVCcsfYhN8y5iSfXVzS97dZxodNLNj78ti5jewdWm5MWsoeNSyN6Y65LTxUxs9knXDe",
  "key9": "5iPZ8xpqMHi8Ey8LyuD7Ez2NQsBujRWJA75Nh3XTQ7EhdcUgSngLtyUebBcsWgr7s9fTtBYyGdCMYDuf7ErFBVTx",
  "key10": "3gUp1gGUz6VwufCqvn18dWdEhWhC2o4o4a22jbWDJqcrYpdK1sfkNRiAX88mBctpuMxNeuDVm9S9pHx1LQpNFnx8",
  "key11": "2qry3VhcU1JHzQJaKnu41QS2RKowNJ8cU5WahgSahMfdX3rgSN5V2yNP5ZvZZKQjkVHRwJkwtJg4eUFWvnehz4bg",
  "key12": "1YGBueiraRJ1MkurbRy2HRhhgoAVzdKs8nPTFznQMrEUCrpPnbfFEDC5eg2SQPQ8h2sjZF2c1FvzVnNY4Bx75NK",
  "key13": "25yLsRQ6GqHEgHuzSpQ1rVKAAZtpYfwHnTv51LtxJk3mJk6B8KYTYZQkd2GNrAa6DYeWmt7p67pFohRMspQE3zL5",
  "key14": "2cMqnCSw7nJ5gf7etn5UPwkFQFzEMx4iwnzWif7BnP7Vri9aago2g49ynYX8o1HR6UpN5EJjZVtjUdMjjx2e9LcP",
  "key15": "5YG9EXXAnDShyFK3uQ1ixavK2VmrRvt4VYnDyHU5zWzKtzQ44CDsttsw5eEvm9FAjDbpffP83K8MNEXNy3kQ7JCh",
  "key16": "4LgD5kHqhWWVJD1iX7SHCvivUoUGz5wjMXuCNGfBqp4KVQLxx63kFSPKoJ58LXszFPen2itA2K2y5ojpmFcvG25j",
  "key17": "29rtCzR3XmyVcCJcC4QDaY2NPuyqPshHdHdkQpWVGj65U7Z5xCsGZrir8B7cHmrufpQZ9ShqPZpDMMQ4h5xP5gHK",
  "key18": "9WockVh1sHJAWMgLZhVj9Sxf4bfcpbpCDGPPCa9sh24StFC1uj79UijniP99D3XqxoCjWkZcKeNYQWHAc2SfWw4",
  "key19": "2Whq8bUMRvcuW1km2EDuFMGBJcWVKthA7RqoYaBmC5QsJXgkm4aUKFgNyQtbt7uZtbeSXkxUGWdj43LMquvgYJ9s",
  "key20": "5vnkN6bd2crd4gvjVwxtXs6iyhXh6Fr3PPzZtRapiJB6zKrJs2s16X5xnSAk2dHTMhtVj3cnuryPF8WnQyUNNdxw",
  "key21": "4TH47A6at5s6CiboQrbSffYnRTDmvYJBXNFjgbhAca8BFcPJkKvyindc5SfuE9MHxqN2MomrgLGbzS54Vsg1GUaD",
  "key22": "2awKuSDA5RdRKDKWsJvFjQ21wpUGh4GUWBp9MGKmFk78yvj4S5JfGYRwrTzHL1Ufbbyu2btjwSumH2J9qTZtNZaK",
  "key23": "2SCVotAE15TjVtTdRrPGbdehzac2pkdVGfRn42Y8exZEQgXwxYnABk14aNdttdEvoHUxzX4CBg2zHg9JqDdYwf1S",
  "key24": "5JdSVVCZzyDZvDq8cuZuHXXdBB1TgDHS9DVA2fLxrUkAziYD4nMc3o53TLsYGS8auaYrLLDBXz7KScm1iPZNKxWg",
  "key25": "4tLbMkP8bYX3LUXeEyXm1XaxyTdsUf8whfaMcGrcDBGipypqZ1BbQqc1XFQQRiZpZBt5igqsYuZ6jztXNK2uKRWP",
  "key26": "3EiQ5nrbiMxnFfpZ515a7hMsWAxSEwgm8RMaBkrGcizxs9KeKG7B3YyDBxGtkQcQd4j8CDzMQ49dioU5P3TykB9K",
  "key27": "3ZsEuesgCTHUw1z7h9UggW4jzfmRMjCfoXnksqaf1AFKBat7y5NFTGEMqqL5oZE1nXr6kQyq5r39bmGYdw88FFkS",
  "key28": "4M5PVN81964mxEZa9YzvpwMRrEyHgxHsVGaXJqofQ6S8ubSpSX8MJLhkU1iGoY8ckjLqmFRukxSKkhFy7iHfFM6o",
  "key29": "2N62jcuNnzEyPG3xUmwhwpDLGRbVK8dihKoi6eawZBv7dwBDssPz8FdyXjDv8bnERvxhM5ZgMHgBbs7nVZeeqeBY",
  "key30": "2v1tYKzTapRqTVq77pdnMe3UHQEpBVM4evacg8NabihMzvaihCL3zbDxj4NRks4PHkNxDLErM965RjWSao8EuZzq",
  "key31": "65QrbkkYN7f525Fbrj919r5peqKgPZfbn5eVQY2ASJNN4fR4npQjjEVYhNQoPpDGm5yVRBsuSHwuppLc39siikAf",
  "key32": "9DjTtTRBVQNsdYNBgi5JaP9WqsrxF3G2W8pG2wxSd65GYMuotEmZFTyrbAs4jBVL32NT4wanFFJCFSK2HzYdE3z",
  "key33": "B5rqp8a5JTej4ksmAENuokKe1bCc3ytCbJrGuBZg3exaWPcqjbztUeh16T36eiYaE7TgjJ7jpJ3CgkT5h6vo2qE",
  "key34": "3fccNiqvt4gMVPG9ksqzDtdsr8MD32maf1qc2CEuePGQnPXpSbwbig63NcsQcdJKCGTpFY57yp5EBYKUC6Ec2JFa",
  "key35": "2WpppJJMpLGWGEEaZPKp75Nathr8j3CHrJ3YJqaSgg4Xn5pkHUMmQH92QhxpnLznAMjNqE56HCRJw7N8Dxx4vRwV",
  "key36": "3KVAHW8dSfJcQyizF1HNYPFiMVmxtQ1J8WmsD5joJUGbPMmjyx1rrPohY31nLVuK8kZCAupuUNbmVq2rpPXgHU11",
  "key37": "5JbzgZ5nXK4JbAyJXW53HUNqxMUEemdPTAu6ziD4ndGAQW5UxiAvA9ZSWKhJzDvp4jVucYzFE3CeAKa38ADhF3yL",
  "key38": "5DCq3Y43KNFEssJg4do1yXhTYcWjGCmXmetuuNG9YwcYPntEWTQ11pQxvDvh14YWfvFCktec5ahBJNkSVyGoP7d6",
  "key39": "2yGCtEDu9oTbrkyETeqBGn8Rkd6odgdSCo9kvbAW3X3P8cPeDVwqCXwWL7vGfNSfJ9JKwXp9un561WXjVfAtF6h1",
  "key40": "3ZfZSEb3M2vVbUU6xpNdKbtVFFdEuw5zkpYdvZteNfz26TbzBazUZDFjKxDshcAZWz8Hc3NUKdLDTFgaXAYKXeMn",
  "key41": "vFSXyCjbHkxZg1vfME6VHkWSxGtPtrLf9QqW95aPHKmFzgTGrzLqDnrhseBrv9gr22o5LgEVoTMHn6CxwuRiYs9",
  "key42": "UJUiMA4tHXvyG2VZ7T36ZYZXEFAbg2wJQADAcFDrWfMW6fvAzNhDotNw2TsPThBXf1BnRL9qW1xEoGRtdWAexD8",
  "key43": "45yEUhBAxhq7zKLACGG8213nwYo8rD7uybkqZg9mDN2BtqTKJjUrPWvrnkeJN7M2iJ9YvksevsL17Nd7JWAk7fyG",
  "key44": "2NmGd84oxxQDsuEmRm5APkK3mMc8EfSKgPbSaQhVf4oAfvPaC5ULHLdi3ieJNoVRA5CCMbPTvFTy7fY6QThoLKyi"
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
