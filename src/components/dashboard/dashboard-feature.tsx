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
    "3EwEoPLxPLBALtk7AZXQSLfzqVTTEwN3UacWuoj6ZGRCY8SDYhvThvEoxkwMyiXYYEPxKen1M8Z8GHLUQAxWmSpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQA6Rxq1aHM7U6mTcZ9n4w6Wcom7G6Av93u8aNQ4YboJsznzHe6FFTLfPg61RFL9UGivwU5mDt6jF1SCqGUaFMU",
  "key1": "3dvRyqeW6h7nCxCpgjBFcMap4UBWMzFHZ7xzyMv4A5pQgrVRewYNq2gQFEdSXkxiXPFnmBAbQVGg6bQKwQSVr7pz",
  "key2": "43UrX9p8ybsR2F6JUchQBwfhgNmw87yj9WAaZCffmjJbtY59KZUx4ee5hDdPFLne8UKs9cUf5YnExRgWV2etCz1S",
  "key3": "3hrPEbkE961ir5tYrPpDNZvs9P8mbQK3PMUSvU1syMcKwz3ZPvadYFWeVdZEu9HeiAp1TpjG53T2XQ3xiaYjE5Cd",
  "key4": "2AgdJtNHtkEZ45vC4BP8hRMgFMFYpU7evAZt1hdmZZv3Kc6P7Yceq1sXR29YG8hLHxyWdK425Pro5mkwpyEc7ue3",
  "key5": "5ggwgdvdiZM2UykhVvezszXbxi1xatcgHp66Hg4cKqayiVZ2G6SE7aP4UM9Scdp33WrtTPPxBDusRdo9SHWUXp2w",
  "key6": "4WQmCdKwkQSf39nYb8FZaGNhnqYHU7CDe86WeUWhvYtXhQroSejDk2BejjimNJeMiJpxixmvZdtXGWj9Cg5AE1Lh",
  "key7": "3y5rpbE5FQRRrpQ3P9XWbdHUVwA2nugjMKa1K9SpufzAqaP4ULP7o3ifpaxirZqa2GWDbfppBN22ywJmvu1WioYN",
  "key8": "5JYnmLEAVPvfM9UigFTyUL9C6oMLWVcPyazaR7H4sHjabdob1TZdRo2XBa6hwng3E6eFSTf4rSHwgwP9WxaZDfJk",
  "key9": "2RdqJTAkQcBhG65ZE1x9W7FCLAHBhpmuaAfQdHPohE9yRoijqifQt1DvjiMiuka7vsU5TX75wYtSRruN9P2CfLMs",
  "key10": "5UtDiJAWn8Q4qL33pDjRv8aN79kKqtYztAYhkS1SojmxyquVNw9bJaQjfbuxmEJ3BTJVnUFB73iiqe3bj9UHMB9a",
  "key11": "59uScjUoDSDHTYrsJUE3m3PSE3HULPs1KD1Nmnagfc3riRW9DcReNkCrULz6zHPbGHY7PjDHWcbdTwrBzqtWivpN",
  "key12": "4CcuYcG2LHdej1NRdtk1Wra77fQjS6kozRoKPMS7rH9MTpUKNTg38xGGg4B7pAbWqYE4H4aFTe3nkfFD4Sj236Rs",
  "key13": "2Y27hhTCj33NqoSUGJfnGNbapLwvm1o497jio6FfigdmdM73uUhRhWsq64JsmpgcThzA7bAtKggVtgzn8o5jhuaW",
  "key14": "5ppcKtvLKFtWPVWVKSobjf4NFVKBjBwqzYQ9xvRq5jtYbf3VXp7BJpadQaoqQDAMUGRuHRb1rXVBMFJw7VtdP6L9",
  "key15": "4tArXXAKdMhAjh8ZNKgebSLENsCXAaivMAdAnAiktA7a9sCSroC4mTUZTrSaKdM5iZcVcUd7SR9xksZs75CxdMhZ",
  "key16": "3zznHETwEN1U3NNWZfcgXg7AojL11fMSqTmZP2hBoYTWdSbumAsb3DWGBwq5uY8EG7nQgDmawoLKrYw8QxPc3b7q",
  "key17": "2ekQteUULhG91vRBZLQoYejAQeExCLVbJBvdua5UM7WktsySEriwsCQFs6YhH1dkedDYog4kanAuXybzHBzGA9a6",
  "key18": "2K8QbW55b5ZrR2QCTpW45SAGQHY2HXSPZq9jdAEWHZbYnGm3MYdoW3Rso6zywFeZMD2KvSjRyq7bmdfWhv9KUCh4",
  "key19": "27c9GA8UcqDvr9mD1n2R2gRkJvnoB6e9wmHCoqjtiR2NCp2YuNf49w1SQqDUZpfdYuZvTk4sSTHXo3d8QTiDQ6Fq",
  "key20": "3bnnGZ1MaZuBMLCKtFCGxqE6rRWpD3M5VRftPxViXatQJyhYmNvY3W9UFScsik7WSiGEc4qeEa7bPXBiFak5H9sh",
  "key21": "4MBPGyDzVgpS6EisetW1fF9sTVSDx93rgAbVrGJyrYsPJqd8YqW9RBDYA6NVC1tjcTQjNhJs2ka7Fpq2USstgxAS",
  "key22": "4f4yn8boTMKxkVf4yQko12E1LeWnNgnAjALMpS9RGCAAEHowYHAkPBCHp5i4nDbrPVfSZ1Ag1tAfCWT43fRVTPmj",
  "key23": "5hToYmauM6X5AeATmkYTsNWAAd4bk7tzUPKfubGtAc2MMZVcJKKXd5GnceVJbaUULrH946m7wV66V5JEyJUgGq8x",
  "key24": "2fbz32VWkoQ9NDzSEqNcnj7gUGm4AdvFmAJNVvoGsJGrpFJsGmSoNKuyXLPkMjyysKFqtu4wHZFePP14bLrTEMMP",
  "key25": "TpKHbmqZBMH94dxQAsVBTkaNP5hfPLnR7rimtzJJhZZkbGBqWXjBLKevUDaDEMJNkEzCLcKzS7fxLwyyMYXzgN6",
  "key26": "3ExFqNwb94TUjGq7SksCm4i4T9MAsY4y97gfqREA6PJek2nrFqQt6gk51THHTNWQGcxBv6Gpgd7Hd8wTr39E8NPh"
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
