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
    "4MZz3HCAPyfEBUr2sYKw97afPvNwRz6yumPqsw89e1DuLkoYiVrHCFs9ceWSCkb5S7pi6TxyR3ARQwCUS5y2eTkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wsWaVTXCnQjtyEXPYbxgE2BNu34P2Ld4SSAm7k7YkF1LVRt9Pe94pW3yaewNtY3Nbuy61tkcFeLh2iFu6hLxgd9",
  "key1": "41Yd2kwMFeejyBZcttrMm8w8bW9wsh2c4eAiyVW1MDKpMwJL3P2QgZph29dWucBg1sgiMpXTg5AbhK49Lup5rxZy",
  "key2": "5y4NUxyhnGdVzEbrDfqTYuT7iwsP1XH8YpaGBARmm9Bt9rUipami4tpHxGkhn8C3wEjXtWnhWP4ocmnXFpXqePCz",
  "key3": "4ZXMV45FYzwdTDRYTV2MTaS2LbFYNW2rb2a4zpQHtGJKzBkdzqa7nmV2RSL85WuRfg6o35aq5MSW7MZTWvodKk1J",
  "key4": "2dnLV2pucuxppAYDPxzB7azjXnnjDkHR43BwsJFdF1CnWrikhxk9mghwFnE9kEEPpHqvxgVTHbfum5wgbA4YnCvp",
  "key5": "5RjVawTSPo1CBfg6Ppn1kB2RRNNjNinW166mZEATG1QgL6CAAEAU8F4QsQyPyHgS9dF2oWuqdmW8ZdGJPRVjxDrr",
  "key6": "2jdmEBeYRzHZaF3ZcMUQX8ZU8CSpd9rVnRVPHXisAsPNGSCy2yTihmQwsN84vVwCg7H5YT8dftR4tUrtuivwQge",
  "key7": "5K5iH2m2GC16PepueQt2HTLyjj6zL26D2D4v98qX48dU88cQctEKjhCYRX564dPTZKYSfznWP1hWDMC9vVayqeqL",
  "key8": "5tLu29XPNuJxea3VvuYEsTkbpAZ3A8TgqARxqk2cqKVkPQrgfiuPzZnkb1U3PjTrDyYvGqVXg7zQCQtBKeSwmu3d",
  "key9": "58Y5gHyr581zMQXPvqEF1JA3Hx4pyESXxRsexZfJ374CnUvffcVps94orZ4qYbhqWmndTYS1JDtrgyKpXPrfoK5N",
  "key10": "2LbBTEc2ozYi9ZCZzDjWeU29S5t1EJdXT8zMttKjp3Puwuwmsvz3sBaFv5cz4t9M126drAomefaTbDonAirW6UBE",
  "key11": "2T3BHCzMTgs38qhg34tmsSt2WHw25pM73QKYQrx1xd8L9LznB4vdNVPiho92PFqYNePxaBJMe739gSieRdfjgehN",
  "key12": "53khtewiqJTVVHVJ3iZQ32PnLyJfaRgsFNT624D8aCX6DgevYaRc84FhD1utLZtD42syVeYW5WyBnbcu8qj8U3PY",
  "key13": "4oRK2TqVzcjJHbSWkQbjRGPtJU8eRLQ95ybWBpwiq5bXTY9hmNjAYqM2pcZNpMDHdUcxtGUSTxvSvwvrYh7wGi27",
  "key14": "4kxCLWeWCCEjYUjGH8kBTfo1YJx4prMm5voiz1FRNAqqVrf8cgK6WtxsLUiKD1BfBwLbQoohna4j7NdSH9kWsNfK",
  "key15": "3VMW8fAAUpPWRwYbo5URjBnWfemLJxJFKYDoCk2YN5VdcFWQgr6SgSjcqSQhivjNt6jgtmBgfH7JvoLX6osp45Nt",
  "key16": "QvoB7zginV1Guui4FLGPmNvsBe8Pv9r7weGLDQyncN97U2tVkcPPbMSbHqZQgrsFPTDUuBsEM8B6x37jvUJdz8Z",
  "key17": "45iGsEu8dnJzJNGMqsaZvggRYtaBBtgSo8fXU1WvMS6TcKGwPrQSDfZz3S5KQvCuaWrYnvt1whKAaZrGS9dXVEWE",
  "key18": "2A9KFXDET65kekKPuj9TjwHwVZeXefYBCdkPD94s7LXDpN6Cza7aMK89HMovrsjDBtfmCwvHNWBTWiDrun4wJ3a4",
  "key19": "39qh4X2JAa72VDWu2RXTXtZyc2eUUZQnEvJhxCR7M3SB4FCyBuvFqCbTqxiFi1gmVayJmk9T2VHafTmz9yL98SCH",
  "key20": "5tjEPDStRN3MfVqt8v9AokwwanE35VrSdKu9242eYzfa2g4QXSQ9eN5xPKvaTBK9sf4um8n9bm2MPuscbrKjcwTo",
  "key21": "3imEf1t3e5ir3scwXymJ3GKMmxQxRh7thtn6PnTUPmGcvKVt3tp4sLo8DTeweapiJ2FmoXVgaAXPHfrSTFW5hxfs",
  "key22": "5AUSK6dUwPKWsq5GNUPEQBUGzPTkhf6pbTnDArm4sGjeb2HiTHvp3HNgm6mG9cjZ8zHQt9WCnNBCTB33SpKJqB8X",
  "key23": "kkWsrM93ES9eKmjvCsfdSiEooVWdpxvgXQTe6gcrjFriqBLrTKjX3NkeHvN4UagRokKxEngZ5F3gibsqmLYKJSK",
  "key24": "GBBnibaQG6jSnuPnmKAXUWtawm9YMs4Xs4qryCgUi4XhpbF8JqEYLSDJbTJqCdLVXnBNRvQGSrGgN6wY3fTT1eP",
  "key25": "3hZA9biHNWQHrFyD5Qb8j5XkKCvFon9V5yuois8EyxY4HykMbecyRu87bq85vHutvQvRYypprpQmHtSLjuGdDw2T",
  "key26": "4hCN9iZYTykkUvCnXSkD6hhr941s9a8C6Pzka3oWx1mtMYjZ6F39vd5VLgRs6LcQhDaJUGMGLbYtqh1g57NzAiWM",
  "key27": "5u1fjJTYUphDMNYJLJTE6HsYQ7SGaRwQ34BSkaxEHzk7mNQhzbsVY3VcoqncuECnkDsidC1bu2iu7RWG59m6JcVQ",
  "key28": "4Ekp38zgKLJLDo4QGT4HEbCPaVwLCRYRYActEjT2f4fnZ4FZddrj1QBeUAaVyDGixwMEJEFyLdnvv5VHF844Q3dS",
  "key29": "4mjVeUY5sMn4Lbg4PzWuTvtXhjpZkgRAjdmVHSHV5vcuC35dZ8uErEw7HnF3GNDkrYyoKm3QgaDeexefbfVpvbdh",
  "key30": "3WSvTcggvry1CUGFFxGSkS9Ttp7EEhZn7viz5j86fpW6fXNRqJBBaYEegnvS7ixEsCrE2ToCdCQRbf4Zx4SnKPXt",
  "key31": "3hAMDSGy8yKne8xgwBD6B1F6PS16zxwuY75LFbRyf9q7kGhvh2QzxhhwAkdcLbaWFaCw1hM37nwDz3JX1T2bShn2",
  "key32": "BePbnqgqmAts5kK2vhGK83hhaQBFZy5eMFym9ojGVytfjGGysSfaRo3ukU4A1c1ZuFmM4sY9viAxvyMFFWRxty6"
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
