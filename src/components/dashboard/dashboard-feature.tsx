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
    "4iUsMtCSveamUfYrN376D5TavrCDWVaZSUbcWky4RP8Q29uxqGaz97AsMFD4SSHo132iEz8SqKgg5a3sAMn5SyPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rU2dJKsCvcKgX9mW1X65Rhdf7QjU3VYEk8Kws9aG39Aqr9NTpJkPE31hPrSchNmuEesvma1iYLywYZ3B8MJHcR",
  "key1": "3LQBKpu1oq4CR75DQcKZpyHM1SvLzoLvqFP3FgetEHChZBAHiv9E624M6rpd56ibr2LuJzw8FqxDySuemiQJ59mX",
  "key2": "mCU5MRMQyEbA2JrdvM5GpuJPApb1V91JdFTPP6akqiRpxANj65tUNA9U2ar3hyV4SmFbyjaAahQQJheyLSsJuJL",
  "key3": "iaQpq8mUi5LGgjHh6LuFrKSDrV94MNtrguEpfczS5fLmDWd8prA9tQvBUbx76o91DdiMoFagbxBEYMp6X9P4h73",
  "key4": "BzZCsJRo5gxPPAavvvpPSnARyJcCK2jXyAwGxh8eiAuV24iwojX3macXyfgck1wQgF8SJkxFuKQpWt1zrBdo1Q8",
  "key5": "49hFb6E6hbRrJwSAJfUX2VJDqDqCeTc3DpEQ5HVERM4fVksZFiKFqfTJAxpNASEP3GyGM7csYYcxSFRXeaMtHmeh",
  "key6": "4YzWeEfQbqApC1frgTS4CyGvtVVz9Vxqfp4t7ChY3hSCKyHDjhrCBvwbtnYTt9k28JELC4kwMcEWb3nyyrFEHWjk",
  "key7": "54jdCQeSRRyZnkdRtJrWLVQwKzZUwYRB2jGrA65riujT2m7SWKvkaT7nzABqxrbFTBAZVm7ihi9wBhtraKSzcw51",
  "key8": "3V89YhzE21oQQNxU3vK35UrrzGE9xFS7YvTW2L6KJtDD6w6Tuc2mCcmZjJeFNo41isK2UC4QLMw8myQ9LmpRQMC9",
  "key9": "61Sf2XB6wv45Mk6pMw9toBaBkPNs2ejz5kAaH5kSziMZomzmHawofbJVc8LTJciVV1eBk3m8xr8MNYCXbAP2bhX3",
  "key10": "bSehR5s66TLwzD4KPhMhD9Y2zn6qSoNREieuwEPK5buRt96yjBtQ6nHrFGY4FqecxWHQDi2n2zyamxK8qB9HdeZ",
  "key11": "3JMtjFVNJfW7GuVxh6iuEbGbBkS9a2HJXtVe1FxKTshLGs3NkvHM2ExcZJwmN9QRgPotbGNGskF3sxJFKnKwPbZw",
  "key12": "hC47V3d8WhARaac3xpMt1ozBiBgaRLbP17oVpPcEitxq76vQhKWxiFsXRi7G5MBb5e17xiKiGvW1cFiFtpunQvz",
  "key13": "ak6uaeAktha8WDbzEEQfmLwmuS61HkiDMTH6LFJNCnGFUsHb5mAqJbZe5KtSLUrkbV8sjWgg1J7dUzz92bMyqST",
  "key14": "GVwYVmYfbh1qGC8dXwRtPsLKSMNEbRkjFkKBorf5dqSvdSybLc6jGkR5RB3hwzN25qK7vZAaVBfUVu5mbVsWtaA",
  "key15": "iThmwz8wrYE2pHB71ezGaxo8eN93dzQLJB466mmRf9muQKvWVPskhcjF2k6V3WiL8dFW6gFGcdrD1Utu4Fh6nCZ",
  "key16": "E797ifdpjVfnRdgKcGSCiVv6G23dx8AMAG2J5YRufaJvTjuc8TTen6CPhQrgumt4uPUmKnHuh1RgoS877n6gXTp",
  "key17": "3154qCavAeEQXQJKa3GMi6zMXfkAwdbo2CavjCQhG49coYVBRBuYxty8VrXhHmwtqiBBipjxJGuXjW6DntH4NWnV",
  "key18": "3qLRHqrxctVxV6TgEv6Qqqpqbd7GznR2LNpWXNMqgEgPuQC8kMN4JmaP7ruhYxjf37McKXL54WSAxTz31265JzBn",
  "key19": "fodM3r3M96jPy2WWqURDqkhGjf2KXKFkT1zntZ3SAGDmVFyNM6NjTxsrMzPmF9fdUcdCtTUS7mB8zVFdNDJUcjt",
  "key20": "5UCXGL8V7QGR6ddXkVXYxFi8ZL2DLEmBgvubKewDTRbNiiKkYzs3NiVYgfc65q675gaJnz9wZ6fPamWUyZdoe742",
  "key21": "3jK2sAY46UQQnDG8SNes51uiqEshBkQE1NBitcYBfgwxFrx8f8YAczDsFDCfxFTNejc1RCH78ntk38oZPtnogc55",
  "key22": "4MBnjHtEMN3fueA1VyVnFvZuXBGW1ZxdvyxhTaqXzU8zoAy5237ecfApNBsKwfveY2mW2sWNqZ4u9WnLdgPy4qs2",
  "key23": "iEM7hMQYpDzs1dkmow9LC9QSQoxTjDLTJBU1iE81Czj9GB1SaF5tMeHzr3VsoCXsZcfgBM6pBU3PuRb2vvRueUd",
  "key24": "3AEnGYJ9yymeVNNUUKk1rh1aQxxNs4mriZ7Niqh1QucTkBRMVkVmPdi43v58vPHG54KVkSHcDuifo3hKuqaXBzLp",
  "key25": "5GLAfSkHFhUMyVbR6hRR8DmBsyPXjkeb6zqgPuunrLppagmo9XKzypsQ9SJ5M9TMVnAvhZDBCtVzz1ad5yC1NugM",
  "key26": "2w3gZeVoHgFVEQXYEaaD6CgVzhvoLGh7iEqpfkGsCFymmeW2gRPZNmwbh79bmsw65V4pAkk7LQmRkPSEps7dunHv",
  "key27": "58wpqiPipQxJHVoBDqgrLbuC643d36e8i2Kq2w63KWcw1QjK64ehQH8k7Jk3oR8L64ZPaPb265hMnib8tu5LXXhK",
  "key28": "5meTQuqTJJufPqwUycdxJJt2StmXWEvwcw5iDZtu2LBfZ1PVuBE4jM23wsM6LD4YorSdmgsv5PQEEFfxvV9rRoNA",
  "key29": "5YP6cX9HfV4M5CMXgCz7yNp7xB8DnF48gFuopchW8c9KiEZupFU29h4Ja9vtASL4SW81BxFTo9mFjUamTJM5ofMb",
  "key30": "5cUcjXVFyNDVi1xx9eGA1iAFoNnWisNsbvRBbovHydr7oTBHVi1qmWJkUDWFmtAn9QLEtPToGWJS4UYfjb53Lxer",
  "key31": "v8rXXBhcYqs7ULHQ9hNCsaq8m9VVZimdgf89Ee5Q3ak8BoiHYrjBLdPhiGLfp5uf1xAcn7H16NB34Rm2PiQjAY9",
  "key32": "Y4rZAsJ49SVUnCMGmcoRSV6NULqVpEG3FYp7bCq9oKowGcE2bHkU1nkAvKPYnKmqioSn5uoBm3ahJr291RrsAss"
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
