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
    "9BfbMWCNHW5km2kFEvoZd752UWpzMzo1RBQY1ugkLLbgbFWVFMhpWuPxYuyvGoYnXsht58s15jqoU8R5sr9WnUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55iW9S2NXoLx1t6QE7daoAdys5JeYKMESzxCMDJMBG4eQU4tDqRtfKonuJ1Arbf6GJkK86Qnb6LP9nwMxYWwyQDs",
  "key1": "7w15PefYaomEswNao7qEuCeM7KXAu8Ym1tJ5f73xGrtJhDk8FAayrUWjtiYvLkF9dWTYEbssr1NZFv4AWuqEqYW",
  "key2": "31UmABHibUWobfcgwNr8G2sRcsRQovKpJYGFymUwaciEDrMw8kUFhTSuSh9BsERajuyBG6tiMrFjHmmR8DR3T53b",
  "key3": "VXbq3fG3QMTJXHTtXLgFCvqLntK86TPgMbx8JELKgPTyD7EDNwbz2kyaJtx5wguKtPuXnBoZMX9WpCTVHKV48m3",
  "key4": "5EqLKZAEyvGZFP2m3B6ASbfiFzMRLvDdMgQGUpzvohurY2e3gbkBh5WfeHvPPG4nGnhcKrrBvjyUSAFTFHzNmkmp",
  "key5": "2MKNfMZXKqHGYT4mS8XWQNXxW3Cs9owWBVrnf5UHgvh5DzoWAnt4L7KutU8rXm2NCzELwinEawGkfGxyUUNYZ8AS",
  "key6": "3vBb43vCwDEEVw6kyB8aHqtuWq2xvFWFRAi37rSVeFmSFPYUz5EtN5tyNneJxSsqX3h5rda2wvpZxxQ6vMBR1AYL",
  "key7": "5WbbdNy8dHnswxJEuBrpuQa5DhM2dpCQ18kQxhAP7bghYWTAyJevu6u6QFTBkjACdkrt2WdCR2b6wBDADJa365H2",
  "key8": "4HasxjHwTzAQ6bXadXejkdFy53tLL4h1KXH9RAp3g6cx4NTXuA42ynWrmxTQnXBLtfzm8PD2TLf1Tc8nZJNtPkjE",
  "key9": "3GtUT779jdzTuGXRdorMrcZoRd4P8Ea8PhRJeLvDUqYciSgEkpbqEFvqtpcuT2gyZfBW3cq42X6Kn3iconi2xeJV",
  "key10": "52LXCcZsktEptgLbZPHjdvj46V7XfENUtgkSqNtxxrn1499CqbEdab77FZq54GRQFqN3GzN7LNP5pCbPsd4BAut1",
  "key11": "Wi5e8gLcDZQym2y2EQW6UQygs7aeVEVgmy3hPv6C5H6PM2G4wxPLegRdueF4DjfH1ZCwCkopxzbp9HmQU3FbjEU",
  "key12": "3L6FswgufMxFUQ7WdroWXjbN8v79uXt5weMh3mdsuyK5WLcbVUecidpb9hqxUioeZkKrzLpdoZ6bq3Em3jngz1hb",
  "key13": "5qzc1DyFGJtfZpfHoo2qUP9hEtwqZ92ke3XntsNBryaeQtxWYDEi6DgzVUt3z5WtkirqKd7fYo76NDYohfQ7AFDb",
  "key14": "4nMcCdtt73ZyY8bNPFradJS8tQLMsZRYtycDsfq6VSRD1P7JD3dPX9LHvaZaPZ6rxpEQgNRXvn2jPQavSQBvZtaM",
  "key15": "3D55VQqvcdB6Vza47WqGGxnWL7xqo2DnMxMtMC77BoqfBijHrS7T1h1k7Whv9ybiR7psFm5E9cx8PaZ2B9YGUMhQ",
  "key16": "3EsComZQvuSUHRBmE36BQpzJWvVqJDuv8qqQ6b3XsffyjWUcECi5X3BLQANkWmpYGwwrSwbpV4zcLreVNumZXnru",
  "key17": "2qKtUqi3Wnm8WT58PX21vca3znxRduvtQgv3KaAWVEaBEo9MMbsbBQmH5uSGYV1tV9RT6pNR4PbRTYfboCnvcSN8",
  "key18": "2sVGWbMR9FVx7vujjnSLa5UPGPShojW1L6yZBfED2bkufmcVXXPiJfCtTgoRFWbtbdtPpneHzjsZVCU92iFd1mLY",
  "key19": "2rPhS9Ufwmx8yhPo44Cb9SCiPYZcutmD6ra9PT4hp2tduDAQ9amLeqBmiUH82VfcCL64rzuTXBc9qgh25RM7ejyb",
  "key20": "3grMZkNRpayGw9vpcmKvh14aYMKmk4Y9xG7yFXgatZKBeuC6n8UCpr4ktP4s53P9eQS4AGktojmKnEPnn9kqeai3",
  "key21": "5pgEhZkrx5fgCaALxrDpKFdkiBrooawjsE9KxeaeQ4B9QdKj5nwY4C4Sc3N1WqRzZyFyn3BQHP45rdF33EuLSrir",
  "key22": "5su5L6Dx7XBcq5pRUQz8D7rKEcNbyjJoihi4F9zTPcPue9eFtX6Ro3KgQXBALGjzUScoCcXyTT4GRR1egU1QuD4",
  "key23": "4RBgfF6sa7oTGJW1zMj8jmXVYaLLCy4FH3ShpBayZhQSpwSoYyVyZdn7PRYa4KpbHH2YSrDmHFRYR31YViyQkozJ",
  "key24": "2X8sQ3hitdgjg3wZ8wmyXx1Nn3J1WLvLAwVutAccAoB8mx9SuoxMonGp7ZQLDJA6pBisxko7U6yNpq2NngfK8zjJ",
  "key25": "yvGZUsBsihzyhEH5XYEdvsjxUEYgGamUQaXGDAejrsoELtkKHCQPF8eSPSqtmHUmJgbm8CM8yX2AQAv33Q9vKGA",
  "key26": "2T6ZBV9QitcBon2XizVpn8fJrGFNE9YPLVF6uM89LdhuoH3cUkUTfcarwbTeygAYNYjaDrRk92LbNvQenKTCGLFf",
  "key27": "5DwtYYaH4hRzEX8pL367ZaXhYomggr8EyiZ7QZKLWTnpKNv2c8dKafjuFPzCw63CFGvq9UkpKYkW3DusdFyCVq54",
  "key28": "4dEob28VrPzri5eR2jQreUHdAkKVDLAVxjewmAkcNA2Xf3VtFLTR4z7Udx4x4AEL1jrrq5gtKnjQNbDnS5rDX2Mn",
  "key29": "4cojzTTiJSDvmfbscybcRW87Tu3Cw6hr5tuNxv8Xm54LpAaFvtMFu1kmFZ3qh9pePAdBzhyuKcYrt1WKJMmUaM8E",
  "key30": "62FypwKCTna7fm1E6KUZBUJS9fS4XAbtBKEaHbK4rmcf3NAx13mcouYPkU4vDZ1ovyBRHcswu35GeWR2TWxLuXcR",
  "key31": "2Wq5p2V15DxAqcZeoXcnKXGeVtUTYg9oWBswJSRrET3k9cup3SbKSQpg9vQWLavZJFndKZR6rEbuHJDaGTS3MmqQ",
  "key32": "5ZX42kebLYW8oDZTPnoLjVvwBDWbuaUkA4uswgxxPTq49ZXBYZ4EjXco9y41AffW3zHcBpqTpjpcjZmXmg8LZCyK",
  "key33": "2R7T3qkTgamDtiYfWabpTPVAHx1RXEoYqzeaPug9xMuiHxcECbZvk2TSjQCQTE5pu8imBJBHR1Huf8n4zijpwUsH"
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
