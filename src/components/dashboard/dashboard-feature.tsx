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
    "4iXAGZkM1b6Ndr34yUxLb9D3q6gXrJJSuVyJEL9oTFcjATyvjwdwa4PEeUmJvTBKwWAeGa7dcinxznzDXmY4tmgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491xq3WUTnDcxGJXhg1RizPcLMGQNdEE9MKVC1zXcRpFjh6UaTEHwQ3FsbgjDzVWHSoKrFavE5N1zBrLrTvKNYmy",
  "key1": "42Qbz3k795ciTsCT2P8wYJahrFoub3cxFE2EBgmQ5R6bPNuYWx7G2Rhpv53UtUU3obRfVYA79E5AzoTpJ8V2HuDT",
  "key2": "5z2rD2114WzsaDbivCufQSrVgLbY4iJX71VNvyCCV7BpmV1wPYrTkJuokSycBtpfqbSMymHk2zZirYtngrbnrCix",
  "key3": "5DLx76uBh6LmCoxLy4pg4WuFP91HpzZnjxs6BV6Mv7JjGJH1TCFnmqi4fqYQNzmPXQvFoZUvVzif92viPPhhG5sM",
  "key4": "4ZmtLA4sE7ywtSoP7EJR7aRrC2Kygghx27uAwvtgBGEGxs4SLJCVmttHzVqepuKyt9bCRuG1w65Xfg7hk6GrQaMc",
  "key5": "spC9WHMshQnVPs1iLeX1mGwQJ8ytyqtnnCwAorpSRBtWL1dov89Xc4P6L64GxV3Bw5ESYy75h3bXpZNeMjiLpfG",
  "key6": "2jecP85b9Uv4zuRX8BwwdmoxrMcxBwWYwLqRjoYZm58uk7MeDxxSVFWbebZYJJN8TkkY7gAsxeMhvVH1mQsqdMcd",
  "key7": "3GHeGgAFthWruThwr9Wdz523aTEGJNsKp77SiWUzgLNprWihTqHS3y46DbEuyFQgVV3526ERhfxYPwqKPhLYKx2K",
  "key8": "cgR31o13CwYesH2VSKGyPpGWGd23EhkgN9FSHAvNEcRBHT4irUysXYwemZEhgpX4Q95KnAzS3F37mYmzAYV4geK",
  "key9": "5gnW6ogDdUgHfikZvDgS4XUYmMZV8z315eVAyrsx7PWN3LsQTXDqiFtGMumDBRnK7EVeT9tjFAHxRNuKDCsdA1fy",
  "key10": "4GhxRsvhkSh5i1pDn8ZiDurVRn3Q8SdoqsrjLBrDa4Prd4i5tfHpxvKMPrFiZpzPrHxWVjWMqRJXbjQfNmEdyCE6",
  "key11": "BNkven43d2zC7WKc5fSwmejxxBugKFFiFXGJtqtHhDE8YwnCSLc3QBXk5XXoA2uRkMqCup1XGATJw1ZQQ6uxdpr",
  "key12": "5cXhKdKivcm2BkkHhxQuygucG5xTbJqWDJm4hHVSRcxkzy6UoJPKM61tzPHpf9kAKMqEFKn9cmphzidQL17QUGz2",
  "key13": "TVnX2SUDyfxTBtQnnKM7RxpDxCjtaSzCwiYT51iniDAc2xXG5YkUD2T5U7roTapDqfstSaQfNoYizQpK4Xeo7V9",
  "key14": "5HDZb78YvgH4MPWgTNHFCac8qo6rNcowUpYYqVrSZCP3DQ1NQnYdTV5FRWG5Hg7e5hVnbM2Xz91TjvEZve3TmC4o",
  "key15": "48ZvunLgtjKkSn2mhJTg9kaigwdQgRpJ1AEKSRcSc8m7tQb9i84Dh6zXDSvFupM124nudf7uDSJimCtCdqk9hi6a",
  "key16": "4LezfGKiv7KCGL63YLuBEFyP4ppBxu3qrwJzYQ42Mnb21ZfSpYPyTCKtykShLrjkMbfP7i1dNiajMGMcXib8VHwp",
  "key17": "5tyEDGBPNRtuqTaNfmsNECQdBYjDDxxeWummCcjtFVv4aWmSr6Cv4BPsRB5fnLzEsBzaZyY3fcgHKpSWxLeAGjyB",
  "key18": "67HFuvsQCT6VrW4YDTS7f63N6Vj2WN4bq5Vh9L32wTb6u37as39T8rq9z5jon3CzouPDV49XoJe7tquCayyEha7c",
  "key19": "5PnMVcQkift7wAVy1ueGoS3TRLbPcxXEMQQnRcyDTUAda6bTm6GKx1D4d6GjnVSH4eDCa52z84TYfwz42XWTGKvX",
  "key20": "43oJ18wd4JXjoYsgmG8eaJXWXDppyvaiZ1kCFb49ZPyr84t9gWvWr9xh7epr7nNdsjmLDgyeZfWtTEAcEoEzPmPX",
  "key21": "4rCfcUU9yRWPwfiL6jvmNmDoXSsDVc6jmRREQVQrZjdvkrt7KS5sHzyTiKQqcxRKaYfJhCzamgngkJcGvRsEYjJd",
  "key22": "3fUJnRDi9FTxBsSY929buK5DP8cAntaCWzdbPStgQ4N8B2DaBZUqKqGiWiDterzJ4D9WHj9LGGj8NFTsKveB7w2Y",
  "key23": "2yWsW6AHoxqVUP5EftjMHR6o1Ht75VZMn7eXZisw8g9RFtEB8dx8uU8wyqTMxVBtpsrY9jBN9Ns7WdsZm31RKLA5",
  "key24": "5599835UTG5QNgu5UZiTWL7zHoSf3mFvdmPww8fSgkiK93A5M6SEv1vv4z2NfyL7mNMx6ShVidKraxpYRu7XiXBD",
  "key25": "2tAkjDfnp8xevbA9LLB3Rn9WCd6gwJToQJb12ypXhapZsd8TikGg6icA6u2bZ68dmicPH9sot4FvNYEoZuSYBHBV",
  "key26": "yMsbJiDk99sp9dMPddz3VYmyChBzRDYhUQNTdua4wAt5TN63fG1Bu24AeHB6NJuuWykE3q5rw1X3LqPcEqTkvz3"
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
