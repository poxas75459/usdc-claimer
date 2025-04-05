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
    "3RSGAzRkt2feGjCQt4P7w1ieWjVQT3uBRMpfx45EwCXWroQy358PSs9ANktuH2zmFsuZxt8hrgkdgS4aeii7opLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KFe5cN9zQRTgos2ksYWN5bQQuJX6qRz9Y4T5JK4VDKVggPTC3Jzp34kwvbAaTYjvhmrJqcdFGSbH3spQbb8Jqd",
  "key1": "5m5scwJPog7dwKy7G9db1CLgaqpCFpK43Rx3WWo71rMiGFDE1yeYJVogqVCnH4GCEaUUDiwEVSsbiWyTPQ6mRtTs",
  "key2": "3x7EZaeJVzZXdYEdjF5rQWgPM34YLrJuxikSKFmsRjfD9xFgzJ6Z7EUay1USevm2THKmHdj5WPThkCGieBh9PpCN",
  "key3": "49sJddrZShmcm1nqFuVfNSr5uashB1sGcKP1WkskYNX9rvAaNxrkaYqmAYmhacjiC5zhanohrzqXdgQboqFg4bjh",
  "key4": "2o8VEjrFBWhe1EG4zk12LfVc1x2t4oG3GcicdD5iQxvwnUQeTz47CSFMaYt2AQr3qRYUFoDchxoh32jJwVVWsWsS",
  "key5": "2CeVu9NjKpRBs6TKqutstZBxCvgze6DmjbCBrxa2oLw72rGsVJSF5vtj9t2HGPXJcgKcfs1R2to2wPHRRnxP6mfd",
  "key6": "v4FYu6SeqLqZ9KF6XnDu2BWui3aacXakUDiz8yEfvoQMT7GoL1CxTN8yoQmVeaKVqH2iYuixVYeGwmpyaX48hdh",
  "key7": "5z5G5PhTW5xNSqMtjBAUaJJiwmz4u33PXdes8B9RCEAddjZT4GLr1WzokskJkHBifor1mHELbHfqV7PdY4K83uA7",
  "key8": "5Xbk7VALDgaexr4gvEWckRoGte2SQhUJ6FbMiNHKTQqgEQLrCZ2dtu8tuuTu9Q16sHAG7goynwy6URgwgMCnJzdy",
  "key9": "2Qw6aeuLQJHPu2NbKJ8js9fzpu6ie4EtCnDVkUurS1NBMjYw9K3AQijSQXM6miPnJSCtFqTReF5jZHa2kPX1TpQP",
  "key10": "55x3zukQo7VgEHCXxGSKp1oUBYUXSiJisAspfRGhDPGGybpSotxTBZ8mBw3aph2bJeTEBYPGuLhuwNNVMpZb7tqK",
  "key11": "tqgssY9jLmyNhhZrLxJFCy3qydoSBmtycdmGAbUpP7VbEU9zUFvHPD1d4cgfcE6Yermh8RXqhFnj4okfhDG1uFR",
  "key12": "E5Q4uzr7HndThRSGpANcDziJMD8nn5mTTNBaxarYR4sGDwVVMJUygVP5BydkDuxnVF43FoTBjZ8XmcXdgFFvv3E",
  "key13": "5PHXPuNVamZeHCr39gQ7JzfkjzscpqZbjuD5gox9ibch9Y2Si6X57TCvaYHqir1DLCBuiGkYnfPvoKGV4v7iECMk",
  "key14": "4csQ1sF5XTg1U5yufdPVVVGMhKpEyvfGTxYZ8fsmY8UrsU1xZbpevjmiMPqotzvdM7XdhjMoavJj5U8zLNSrD38g",
  "key15": "2uDBJsKmhFaD3o61qN3AjmB9XRBgpb6W2vbyk5iiFrUu8uRZh35U8x4bjffpstDExVuDzRXFJP9Y7tLngirTYSAt",
  "key16": "eNCRcQU9XrHFzBrWsMrUtKBnnMahzPyD4AUTnSu6RwHAKTxmvu2wwvuESkuBTHmbGfEdm8BZAb6SksnQANKXSnB",
  "key17": "3Hvokom9rQ483t8emBm8WBHuE6afMgBaSd8qJJ4owQgW4RQYrqHm8wENzUKzmy1VPYxvgMFuFxxfAN7y45uUDKj1",
  "key18": "5LwaZXeR6bhBoSxMtBwpxfTEgBvvzUz3cC65KFcZFszMx4q7QXbTUBZhT57Zkm7dw3CU8gN5Bne3r55pBStxN5sw",
  "key19": "9LLJsDsrNT6NPmMrEtZTBS3fLEDDC4sjAQX33QWYXJsBH98X1Bkee7G7JGz3374V5xiucBAwKtK8iNxzyxQoNMv",
  "key20": "2Ppfxcz6u1UkJcBc5wcECgZKaiQxyq4C6jHbTC7UMLh7MdphCeo6X1WWPZxrk7UKScq6m1RiASAWc1W2otixPSj8",
  "key21": "49QF4eiodfikRkSGaStWUA97zNKUrdxiQgyvUHmzgSuoNG7QfoHkgqsAfscTrmNhkr69GSu4zaBoQYLJX9kbS53w",
  "key22": "2p15XbY5EhzKrRbcEb9gSUobSf6r3jD88G8SqK1RZpbK1PRUzmj584nNEpdheXaBdtBfScL62VNuz92gQiTjjfHA",
  "key23": "4bzFc3AkVtA88GaYyE8gAzcbebT8B6DNBka3nimrL8fSo5MFa3GpHaoQ7vgvqkdUjJpD1J4U3sEQBWKwQ7cmQK4K",
  "key24": "4ApRHu5XxZtuPLVthahRRgLuJVwPVTgGjwKWrW6UN1cegJhXAhko7B1V8VYADzdn7ivqPcRv5VFeqMY3C4WHmr1J",
  "key25": "67axKBwVrM3aJbdFMU9Wj2DaKaFcTonj2VXNhawT7vy6p84kKWUoVhQEUtvq7sg5eo6xbrZUpKNa2FtZuB2GHywk",
  "key26": "2WckmK4Y5swhhJQdWpcsCJRyndiiWVdb5berdLZZCU6wbz5dCUx1QWijBVMeEHv56y9aN8rNdVFCugQ4RSav9dR6",
  "key27": "3NsqFEfPBiFyFKpMFyngCwx5tMqeWXRdcCemrQ3C7Bi9mVn7Hyz9TJtR3Gpj7jkWhhZTvmr8tx9Xnk571mNkdXhL",
  "key28": "2CBkdrGLZtbXx93U8XTx8xRL2jz3yzNzknQjVb89xoZ6K7ro766zi4FJojoWaHxaRSL8F4DrjpnCHvt21DWzk8F8",
  "key29": "27d2XaR5kDpEeRgoCMSjz4YyBA63onv7m6PtgTsvZ8KTbCcEEBxxcr1MLsJQfbiGLApok5sZLc6ACurnaSfk8uMz",
  "key30": "4isgPiLVRs25XcKzH2Dj5apmy3bvFKEGhghpKE3cM8KDm7tNYsHrn3AYLwPVbDcwmRfD17Q5UtvddSiw21M1SZKc",
  "key31": "vmFTu1DPGcxftf5Xa4R1zsMWe7vE75dQYG2XnYmtBAurzeChgBwsL6cQMAbme8yoUcjuuCWipt9tKYC6yUUuf1n",
  "key32": "4ctoe7152AGJMsMjW7didcyUvQutQ7rKMw1rFTYS2pKav2WcY7pAh6A7wwwWhQ4qBsN7BCbFnhjBkyNZJX3cbNZr",
  "key33": "25qZP7uCXtwVv6SpqT7sekF72H7rStTRG4TZipJ5s9Jx3FUfAPDX7zmeDcXWsfjbHbMw8Zt9kWUeyKp3LsEmri6x",
  "key34": "4DKmFsmFT6LK9bk24mZac6CDFNejkpcfhnYeeNqDcnVf4DMKmqYBqxccyq6FEBpPwwLhcJPoyeaj94AM229seMzo",
  "key35": "213H4zV3hEweRbZmhsXhEHBsudfDFPE2F4r1yswzizK56gQ5YK2xAyQqKXvMUbgXCr5LtmVwoUFDsJG8dT5cguiP",
  "key36": "3XJbdis6cX8zRbCouqq9oqNhDyycxC4Av2MvKnPyS1GZS7jnBVDyZT2LDcj4VaYQWxqRDa9fUCdiD56rVzSDpizh",
  "key37": "66LMwVJMKNCdKaiDWuVYKQoT3WUkuL8HuwGZnMfgrD6ERqVuBMnaHu92QZoaVeyiBzJN1sLciccDnoduwsk4ZDJb",
  "key38": "EkkVDXdSsLnhPCcj8dgMKHnffpAEvC3q4h9AFaDQdVVvaJfhUkZcVqU3HpNraWyWEwUJxWLCF56cgHhBTJdks2B"
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
