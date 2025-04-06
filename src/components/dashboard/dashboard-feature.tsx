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
    "2CkNf8Ui9kLkrJV8X5NcDUi9YkjLvhCpuee3Bp44xyfmHknMBd7S163JtcnF2sE73gBawawvn9rHCbKCRuhfcWT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ooRCgsgUV269T3PgxV6hEY9tkFk7vPBQufRigfCYawS7ei5mvycXQd9JubrCwyBXRBycBKnRNMK7zcajvJdQqDL",
  "key1": "3Pef5dg9Y82yaDDeH3e7mg7118YcmgNHz6bFQgsY8BJP1mx4Kx6Mdnx3XtBPtUSnJTXKkDyf4CJVtyVzuLBHZhhs",
  "key2": "XVtMinZg61EhNXhxuUcnK5C8oLBjSGSEM6ixXA23m9Nd2kWP96TN5NzYZKuTE8F9D21XkRM1GHgtMQPoxrbdqda",
  "key3": "2WDLseYChCCzNZ1JYdjB44BPVg3VnysrAyp6xhwRgDWhECnz7hLzxsXDatephCo9S8nU71FEp1vzCkocScRNmZo6",
  "key4": "2oLzZMYaA5Qq4HUWi96mk38J8oswGcpNn7T9JbhmeVPgWCEXu3dTU86Z3Hbs3GjYvKYaMpaMtoBjjRpHzpZuAC82",
  "key5": "4KDrWnqkTQDm6gTxUrSKr2qgvgdNexJo27RGs2YzPqxZbNFFAXuKx4VczQdqWpaSGvMRpAVcjjpcLab2QX18CxsJ",
  "key6": "2HtbirGDPyCokxZKF1BF4dUR8LdRLWpQLPm6dMxbuvv9fEuZeymTkxYopjZD2CvD8wzX3tfxUB71Dn4ydJeWPotq",
  "key7": "42VmhJHMbSeKFVAHGWpXdqiSKVTUwyhcSuB4uudL29X7z9thhQYzdZdkoAeaVioWGQo4gfjwtofs3yY2djJECsoL",
  "key8": "z18c5YNwPQPZ3Et5vbx2Py1ztzDuvrsKkxqaaNizdmSnQeWc2Y437nC6y9X9Ehi4LGkJePbrnLgbVy28sDZNtcT",
  "key9": "2CMDkRF1J2YhDGuk6qa1gy3BLEKMctqfkmb2U1CqNwPzfpHHcDDEnZUCp8LUahtyxt5YVaAfoTTjAU4AAZckc9cW",
  "key10": "4VrdhN9ycSu3CG4ysmYGqms4QxAEV4fQw8XX6x4m8imvXMv7kfnR2meCqv8ntEMZufgZDmiKtE3o4JxZoG1Mwx1Z",
  "key11": "2J3UxJra7LVJQ81NJ6qWbsvnejLa3uj9AXbnE5dM3a8XNgTV36x3QU97Ch3nXZqKq5vmmGm4Pke9SHCpoiaT72z4",
  "key12": "2bLBQd7HbC2iyiMetoRG1Uw3yExDZGKe7XT1EBuriwBEzeAQG3BwkpZ6Fe36Nr8YCGo7M8a4H6zKUssXTFRJFVsk",
  "key13": "55Uof5vdRxMDVpZcmwDsnBhzFAozPXg4S93kx6kcNru9As5oS6H3eVpW9bmN29QYrbuJLx5xkPQXQEiimC3oDAhx",
  "key14": "ENX8TwfXmFA5cwRmSgAGFV4gUsPgiFDX4hv8iVUsAsf9rEMQSMQY4mYHsxBKqRbSGzhFoBFzuGphGpu1Fx5BWCs",
  "key15": "3kXz7Fm8KTpLGMpWiM8xr5de1UxSGyZxMNvzdPdC8WTCAj965bszaSgT8fWyKyZZnqHU2wPaVPwG1mGsFuu79iBp",
  "key16": "ToM5X2Wm2Za4SujQ4RpNPuD7UiNZtxR1nN9HZyPhEKUJZd4CS4ngqGwtPXMRSUdusfWF8txyHguDU9cbWYYBfqr",
  "key17": "2fqKTkqgg7pNqkcEyVC9L1pc6qscVdSzXCjEM8GkCujfirq1ytkxiftUiPpzdCLeK2Q4onbz5vcjLXA5dBs9AGGh",
  "key18": "DAbYoFonmc7JQvUGzfTdvdVbpoZ1up4QU8CxqhejbVDeRta7wD28Q4d8uaMb9BqHmcEtFg9yoaFagVWPhz7Tku1",
  "key19": "4DUzVTbTtmZbw4T95DNdjzyLLfgzhbXS5jAtdr6SLZhxcrxQBAHQe7atFvwLnAXNXtipqFx39TktQ3kuPKUwQnF7",
  "key20": "3HioV4n7mVJcNevmfQXgRnRWaZqk1Kwv6QtfgVKBxF4SZnKwXUEqXTWceGMoPificS7mQ5j9PhkUfrPEas94pbfi",
  "key21": "4m3N1y5HoSG5Nbgz8XfVx8SJB1PzxzftGhuuJAh2HAGdCB63Gc3bXmzn5LC1CLeDzXU331hNBHUXsfwNsdPaYvFr",
  "key22": "3Ekv8qakdQ6Zy2HKLE5AHBJ8r46qsbua89CLqqRM5EgygVrVwZ5xgZiSiP9RAawyiBXNvNAvTBAB468hwmnvWaSM",
  "key23": "2Qr2mmvqUcpvDpupKRcjuGKwj1e14pH9Jh465yY62kfLr8wYeUqP7iSUTkobdQZCVKuLDbgppZyK6Kgh6hVW82eX",
  "key24": "3Bi2FbkgdD9RcLT5rgtfdJjSc9MqXcxob34JKWWTCGgjMTmGFUZgAM2dyYvWWZXAFCSFzTEe9S8sgaQeNaavXezx",
  "key25": "4yjkPejzYDmBkV1YykrSsjHqjbg3usq8AJ6XNJvVeHpz45nTtYTg9Zcw1ZyDfk8m7Rck5DYcH9GHvpN84QGV5aPs",
  "key26": "5JfKzHdfgUxnM1S8fBrZgDqzavmJMYGWH9w3SqiHUpQq6sFtQNVFGFyRakeLTf9FGST6YJNPLCGiGuyEaT6sskTX",
  "key27": "tqY6gwJ53PNFMHPUWdLH5vKHkBFKrNGzvz3D6c6SHRCCjzAfDZMFYBHfimWqLjCa3GeYFqXpR3bNwyviD7Qcm9c",
  "key28": "5pizDYUE55uUC91RCCNgyEaZW2oW3nKQCB74M7o4LZoHdkKZrxVY9YDT5dGG3U7BvJB6jr1dyC4HTHvN836oBoFH",
  "key29": "zpYDQ8eLF2kTQJRmz9cfSoJAdneBRHm7EdwNAPawnmA84vS9Y61nFKTiDAj1z2r76DMTotNYVrtD7aJUFfmsQmm",
  "key30": "5zSnxJSf4mEm5PM76e7SJ5xcqRzsfN4Yjn2WVrJCfXo9PAc8tu3kQKnnZxFvNfAAyyMRmYgWXSK4wWqeSWApJ3iz",
  "key31": "4XCgeCPwikxnNiR2BgXRfdvj9s4GYi3viuTPUbBxs17MiNYu9upZiBruTxNcv8LfbdshZXBJM7AtZ3s6QBSLBQJr",
  "key32": "2DxSBt4cnyAoGxg3tDjDUTeZoCLkHMTZC3ACRNBCMp8rYvNppWsigFsTDy7XqePHQxDb4xc3w5hHBKRGLtr7ht1z",
  "key33": "3Gh37PqBv1gAQKBqXyngrbNtaGqXFHAbfLdWwJPb7jCXNgDDG5apdSSQVyi8ucfTE5q9WMzMq1KN4tGK2TSCwCFS",
  "key34": "21QHMfYkuXuJMjYD1yaXRGS8ZjPvJEcmRLeDdo5AFrUoP8y93MwdijmbNcnUCc6qHvULTMpk1dPF7EiuPGC4HUH6"
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
