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
    "65Jees6BtEJKRMBgjZvKnbPsAmH82eXv2qGMELioLSsjSW3eecfN9zQD3WoHJNwPzpZpd251N4dpxyHaWDeigpQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EpJHqfbSBrsUNupfeCrBqJ39CGR62Hnx9iGFF3zssdMsnDdz7jtpfx54vwYqfmjF18aZPxExq5cj8HeLt7q8eza",
  "key1": "XfXj6LzxSYEUxHcBFKnSThU2nky8Z8UyccnT89zDMfTGE2RrgwGJ1eRSb2hhTzEV2kKHwrU67urSrmstp1JMFUC",
  "key2": "3zfW5RGZhre5hiCnGcvD8Hi1zjwrQTXRZdPEKUKod4ABHtAtbVP3m7HqWtd48rZ7Pj8xkpWCtp97GmvkWEw56etY",
  "key3": "4jRsdsBLAQeNsaZ15BZXpMC5vj2fhHSSjeKrTSHsqRsTkbWKTREEBkudThHbFiuhJf71v4DzX7a1VVw3Ppen5Rx8",
  "key4": "5drQCduuCcRCe4SySzjSGm4HC42EFHrvtPQMzywQYGTP2RjyDkeMW3omE8WUoHr6iiABkqpbm2ARH3eAbEa6JHKV",
  "key5": "39Sk7GWrSvQWaWStaBtkR82pSYztupLDAAAkm9gk1WTa7TdYADHDZY7c6c8yx1kdmR8BPgfrGTPkT1jKvWF4gTyB",
  "key6": "5tXp4iWvenmJqKgXcWGc4PsPGT2Mv7kZcRx4qmhQYQyf6FfcV56XH3eRBDg9UJAKGW41XVDXNFS1EM7AmwNuZCXM",
  "key7": "5a2fW33DHK22Fe96TsHrBH8oAh4sYQFdXf3xrfbya1mru2zqSXXDvdLP18kgKmbDeLa369h522Xd4XKP6N2RJ4Fr",
  "key8": "5svux2wBjXD7LGiUJhRCG9zBmtWgyL1j2PRjeD7QEECgEAZtadMwF6UMPqZb5KCZCiPtBeBK3UCqCsZnyxR2aWKE",
  "key9": "3Cq3wwhRnibq2obaXrf9nA6jkmg2TLJsw9magFZAi6e9ThwBpYBeLTyKjdc1EftYL4srxB7JhnQaBeRX6GKBnQH3",
  "key10": "5jomAc9rb6DVoQ9XLC3rHwxuA7UvckJ4MzxAcdxXQqsWPRBevA7xQXkTZJAqj1ku8fuQ5md51evRgHBJxMA5nja2",
  "key11": "2Dzv846hjr2ZSKpkfEcF1ZJs4poHP5wprC5cE8YCReibC41Qc4FteM551JeDwG2KzmF8YyxisTDdQnCWeqCAJ2a9",
  "key12": "2sQnyhJjTniwDPFCcEjmYTQEAa4kcyvsBmczHVgxqJEddFJ4JntWGWVDKmctoP5FN2K69wdqqZ8DPUSA2QQwByEb",
  "key13": "4Eg2xNwNpZrdKCmpFhAA85amndnKvzomkuJxmiaSApCSEvonxR9uRcQ2MXrrBLa5GfiyVyHHJcZSDDTAiXEawWkY",
  "key14": "21pqiSDgdkZhjemNUgPkooEewFybZfwCTNmYRPuX4J1uEGoQKQbt9mJhqrmkf75RuzkgLJ2PnJJ7Y9D3AEXRW1oT",
  "key15": "67pqEdGeytXQYjN8TdQhHdTSysgbt8RWURgUvGyN34Kcp26vTyJdFhVG1aZiHUgmB6ptF7Tqn7YQnSJJ1f2aahh6",
  "key16": "MMVUDi7eoUHEeu9LdboqnG2XhPBN99mNfCW2BJKzL5uSP934xwQCtmaiiNPkpbMhsUasVTSrMS9UVEfLEEQZdkn",
  "key17": "4gFXv58f1J3yiSFRUXfNSAcd8ZABWESsnT7PPZed2rRjH4g1eteidLzCsyhxfTAs4aduQvMvyvBo9pD8bewA25XV",
  "key18": "3WB2ViZmypn4q43PaBS6uPc8Nweunt5NL3ZyJejnoFE8E4YabHdp1ZZn5Et8f9a5vGaSxtMvi1ZdwUfhdPRhNi4E",
  "key19": "3LUcjP7a83XVoug1FjZmXM891Stj58xHwF3jjAnXnSxT2JnBfXEf2jtHn7yxiiiknjkUFdybo88QM9ixfAe7xwbi",
  "key20": "5zTHy35qYi9HypJpLdgi9bQvrwzGRtk7L9jXTbYEjew1EQ5ZFMrNWQTx4EYY8vQKxnKSQ3JByiYrQYkoCWM3Gaz1",
  "key21": "463TmBvzadjuzazBgsAPFeQvYP9KtQbcT7R8smJ8HP7myWj6yDP5QzdfdqAR4HmARThZnoaGqiATPBxaPenLT1c1",
  "key22": "5QbR4vvmQ3Tsfm1NpZrd9HDUUjTp5bbTRF4vvUMiH6aKn7wXVdJxWL1ACE9qUg6ftVSggjof2FjxuXbqyRBXEGc8",
  "key23": "2QzWdsUhKaL6UBMyW83ZxssMBxRYP3pgpJ7azFxgckF77hywkFTKYsBUkgqCKT5y83fgLBDGvEdWCXq17did5H5G",
  "key24": "sVNFetjsPnZXSrSbipDMbCLc12sXB6VUVbsisMwWddFbFRXFwY5GGHfQQRcatJoUBQovJH3PbNsAiNHZ8NfdTUM",
  "key25": "2G95dTCAnWGkJ3BMNpwov2K2ByvJ32K629a9GKgheELErSzHgisuZMeUgKPhHoT9pNEL5QCR7AYc36fx4MpYVtWY",
  "key26": "66wSXcaZfns5haCvB1HeH9JRkZfa9eC1MGHfGdjqNTQfWYQ8UYG8HsaAE2oPQLH9iHuzTsrPuHCktTgStkyfTb1n",
  "key27": "4Ec4hSP2UBSiTThDciXkaf68HsqNNszzhwGmivHf2qwsu6q7msTV63vELLkrLnGEzaAUcqRDJzYRj4KWtd8DmnB4",
  "key28": "47oojzw3g2g75BT9NVAvbJk4YUPJiBRyZA8wqX4rop1oKWLG8kkLEGYx79R4b7wJebrHaMSPMmkuvSQFuN896dDd",
  "key29": "AUXzhG2SVc3oscL3eH1MSHVdNw4oPWbdQZzwJJcBLkGk54ZoVUwB9aJpaayEVSSyQ8RkRuA39V2oyrZktCZz1wx",
  "key30": "2oMHBAfi58jH9jQBMtCNd25gkMEs732945G7nXpLdEXuGURkcLi2Cwy4W4gK3C9yVjPa4K6vq2L6sdn2TTAdztK9",
  "key31": "3vcDWiLkDeYmQj7STCTUacSqTRaQGYRMoDRMZAM95rRzSzoqjPGgsSLWYZt3c8pSY4eTY8ckvEGkj751ksMxN9xN",
  "key32": "21j2ZoakreXxNcVEcwbbFTQva47v1kZoCFpXytTucUEmFjM3GD4mdBNJTRMdwyoj3PdFkj1EeEjdyAawi48S8vMZ",
  "key33": "RuvtTdoBG4p1mtZdxA9NwepFfvC2fmsMFGA7GxcymMc5RFgmkd6r486uvLf72XUYssrczSJR1h3jW3qVjsYk8tP",
  "key34": "apom19bnYr1J9HSHvB3NjVDbQjAaZzGs4Co4T8BL93JNV7KSqK97mRnGw5R1GL5cQ5SPYx6hMaKJbiWWaeFt21T",
  "key35": "37EvYZdicXnuS2rv6GHRdBkvEGuS55fYvXMSpgUVjQNuojTZjkax4VxGp2b6NfuEkxFF4T93Dk3Bvx7MtMCdZhnp"
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
