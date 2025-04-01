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
    "5sbeKX4WNvVyMFTCoYG96iy1HU9qGAdkh9sybrPo9szckWuiB79SjMvmfnKy4NtcCKLUgWjxdfaikXknN7Z2av9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uM2xJw5eWqzCxFs73Bv5w1G74AJXSg7JJmRa6fJpPtyVNcQYEJciB5GczKWti2jMuoYkoWmRoiGnPsnBCnb5Gdz",
  "key1": "7FUybsZ9b7XuvRwqtgpbNcbqza9q68U4gM5LvLnhoo4P2EyXCnvVY4T8QU882JTYFYi2zw71A6XQtzJCZtpx5Ub",
  "key2": "SDcQ5aN3qjcYGsR2napkk66KiaxSEmoN4R95rWkYKRUdeN1eiXaMQbgchxfJw29MAXvBQjNMZ9ZjbxCCBn566ow",
  "key3": "QkRH8XCNUo8fXjpQm9VP4sQ1fpooaLPdpNfSZho8BCjjTDFXf1XPnxqVVEmQoeMKwKPvD5tieLj3Lx2fjmcCgmW",
  "key4": "2FG4ZdpN7hkRKeDrQcGkDYNkt4rtyuyjMkRjMibturkM3H2ZsyPhhgobiadYdsMqNa98F2kSa2gJVTo7895Z3EbN",
  "key5": "51iJrfZAbetLT9qcNbLC2XWDh3Uin37FznVezpAcDhPQMnFpJdRAaqbDmFUc9stfoPXkX7gsCstkCXeGeEq89Ukj",
  "key6": "1JxjPesd1z1UvgxERg32e9PsKmZeRBjEKhKaCbHJBuiiQeVaBnrBPVxRYQGuMGTmdSdx5W2irWc269d4z1dvkKo",
  "key7": "26GJtex2n9kSygXnq6ZhAAYKmLTAH3hZ2JQaJSEJ4fPsuNttWP3QYt71hBKT257VCdaNFKYn1AzptcJyEmTZeVLh",
  "key8": "2x7UsMYvgMutSXQkkNDoqnPsh2bKuxG1ADprQPrsDELHvbs3yXWrEycirrhCb6cb3y8n3cZ3Dxo4mMTFAjY6bA8h",
  "key9": "4qWrArUfyA4vF6BA6HggmJazVrCfvaWR4tt8XtQLBrm96RXbEcEGLv5a6cQWrj9DRV32ESujv8TeZU6nD5K9ybyJ",
  "key10": "3P8z2UEkFoA7nTBoP7PZNZEakLyyiEzdTkUFm1VcE2vJbnjyxgYTyZtpsVgMELVUBbbDzGhCHe2XZmp29A96yvb7",
  "key11": "34Cv26udyYDb5xeKc4qzyU6ag4Ufxsx9pUMiDx3pK16yi9HQFA4YkQwWhixWd9PMAfwdad8juZdxmhLbZFfii5Qj",
  "key12": "31mqGLoY1idVY1mgxjuhxJ8svQXeGwn3ZQb3CnudnuLMLQumupbpRgPs2vrhuvVvCC2ZrfhcPsZKxteYD47uPgvm",
  "key13": "3SnH6BKKbPNexkHQY1k7Rm9AfWbux59W7oph2xBsd6bgY1vVduHwgZUFo4T1T2mjrwoN7fdQkB2Zg9cGoYvDsvRw",
  "key14": "3Wt5gMazg6e9vhhcoPND2WesTqSmduMzc2y4RThgswQSBhrMARLSka1Uw77aBrWJA2PmoLhGVGNqjdqdRx7dWn5g",
  "key15": "4VBjUc3AaG9hsVHRkT7KrBx4rhWr4hFb5AW9jSpgn49SgtW96uP1cPxNUZaBwNd1wtJUgkne7SsvfNUB2443xWBc",
  "key16": "4JwJJWsTgH1YzvEB3MdkxwJEPbfk1rACSpBvvHRXB9RCNCxX3wotJMKKNyZ1oZNCpHzJfr66ByCj2ZpnxA5CutLA",
  "key17": "2kfPDGf2xz7YCjRiifqwYjUqL8CnAtLUMogKM2HtveP2aAbwNG2yks1PZYd6GMi5HwgXAFry9JQ9PDCwBQwc93Vg",
  "key18": "2YZcyTHVtq8aRi5YgiNumXKq4Rqsq4kFQtxaqAHr9avZECTMapttJpKhcNyY7eYvqFuFamZA8XQuu3rvj44Syqn5",
  "key19": "5iSqDp6kPB97yrtRav8e63MZScbdWADao9XWaH5WQ8bhV7FUdCkM2k1ALddC4ARZUjhsnsYSaPavduYtNLa3SLVA",
  "key20": "3QAwAQo4je4kUeUbcjzy5P5ms27UgJ5teh29zd62MtNvc1XeANFLMYhaHHAVGEEetagekubLjds1dnAthCVa5AL1",
  "key21": "5QFWP9z3SYNjVTCXaLgiGrCqNw19K4auwb6NcVAvnjLSKArGWNRzmzreo3NNDWNGEHwp9PK9MsNg5ymxGhucLjVX",
  "key22": "5pqxeSWqJ2Ue43LdTyqMv9pa9vt3mXnaCTcqsCWNCThFLCMDsQSCgWzievCJxyGQU6Ur1nQDnzqp3Sxo6yC9Dcjd",
  "key23": "27azC6iz3tjDKCrVgtMNwY8ubq4hGqK4Djr9QmPhgENbMdaQtLbPg27cLecBeZPjqjMgRu1pNAS8B9UMZbHdqXDd",
  "key24": "2BpfbfV1jePBa7N2MWTS4by3DrFVNDz224GW9W3HNbUcjqnKLt4iJhXjb2o4gM5n2Y8H18vPKufJhvb7bsW6owyv",
  "key25": "5fWsZggae46hVkxQmbdTEDBXjUmMzo3mgPsiymPmPyCvePQNzgMDoTs15nR4gWvDHrCKDkd6TFE2MzLyxchVHvXX",
  "key26": "3ynsG9Dr2wFPgra96CSu2nz9EEeeMk5tVvY3qTBBHkDPSjTi61rooBhAk5GCCuhsCAWKs1oUVC7FrebFDAv4EbgP",
  "key27": "3FyFWene9HMgDHz3iYXdAqkHRANnggSpQEWGfCyJCPte3H89v5SNB2N2f5EcoWUs44fsPicHa46Kzqndr376Tp1v",
  "key28": "5LeXbUG14WhK4i4AN9uFLZmNYiPzHmqBwNybG5RkwVEnwRRNsfAzrNxSjYddnUqFdZn3xz1kvFqPx4ZQEvMfeCth",
  "key29": "3NiMJCiSdCh8JeE8au4S4K7v3GWH9kaZ7LqjXg2J4fNLrLCaWuh55TR65P5NXJMFg1ccoLPyPiBiY4sMz818Hzw3"
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
