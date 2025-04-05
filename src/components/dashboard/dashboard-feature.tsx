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
    "teqYBxPbDUR8zexmpsyJ5qcH49s75LH8YmN7yG6mn7GdqpLsNKjcGSYA6PrcSbF77f2LyNUD75c4EbHVxsS3xuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATLKJgER4eb4GUMkSUmWnbRo2j8vinHKQ633dCyjn9JmiCo8RdCBaKNeRzCMnvCLB2Qcy5jtDM9SmEsP7g8YLgm",
  "key1": "MyQzyKuJcvgqndVfBfnspF5uzScxSFkovTsunK28BYZvvegGswLqcyX1KN4e5LSzecgErhasacmtL19KdHTbsoA",
  "key2": "5G9TbtH8eN7WF2cujkFiU2bvf25YGGcF7AuiHz1xTUggrVaLmo38U7Dv9N69TUFJvSREZdbHC4nP9G1AKcMwLnv7",
  "key3": "3prJ6WjLnu5d1H2jZ1ujMJeH7YkFkjyBndRivLgFErEfZHTKVq6duv9cu72zcoCRnwFWtS5GhD1fDy7HK7ueJPk7",
  "key4": "5XVL5nS2oEBH3aigCJd4ToDDNGjePYJZKugNKrakiopqgbhehoYQZV71AcBiBNGzjJkpG8Xw4KEsL5PneHhEyYLt",
  "key5": "3Ri9i4oh6rgwmmkWUbzqgLGT4SvC6G8cGT7KEVcTrwR5fb9tw1FhpNvrr9N3JrM1wQAGDRxrTCVPydLYqCyU9cL7",
  "key6": "45i83CMWBcSuTHhfWdidLvEKn9GarKpLgug2btr9aj6qSpEbu6R5sb6kucnBihPykxwgDQ8bwoMhUWaB2RzYXTkb",
  "key7": "4vbysz4FVJ86tZTXx2gLxzfTVDqiZFWSxd3ATmxC9UZTnYwfuYe5yMrtHerf35MNhmqEGBsrfbdvo16YXekWQbdJ",
  "key8": "2C3gZUCcUnBdqb8KkngGPU4nz2soKhH4nEWZ8oZ4eg7P3o8CMXnW4wzR9kzp9CYd4bUgxgGqB7SYWFQEEQT3m8Vu",
  "key9": "5SoYUzh3NpjTXhinKmyDpWEA8sGNC967TTmSWF8odzP8hKkSSbHBVyGiKNmVknFCQWLkCmayFSmuX9sXQoPn7hjk",
  "key10": "4b764NvBVawAq9CHdbq8DvcTyqf72K4qJpFfopePXpV7FVZpM6bYmeeRykkhrmwA9CdYpuMGvuxM86r3Zjzh5Td1",
  "key11": "51CZHWVQCdGBrKxXBMixYGwvPtH9otcyVLLR27V5Cu8EHaSMgYMnLfr5bRpBdhnR1sCUCZoas5YYeYab3PJhDQrx",
  "key12": "48CPhD7pDubgi9b9wZaH8iZFddu6zKMgWATGxAohUioJcJY9Cbc9DMwETuHPYpUiivSc5yU9ini6bJxWjwKD5dGr",
  "key13": "31jJfVgW89KwsbX6mwoRR31HDMa1Ve5mz34gECQydHcarVL1vptcgjKu4KAi5tvL6Lpr67DZ1gFPuF3WKewUgLUV",
  "key14": "5dGpS1pkweEmYv3iqwAF9E7T7HCiMjA1TnB8FjKgWZwPZL6urGWmPiqYvXX1jm5acZ6YDk1fC2Y54MRdeN6o9G3",
  "key15": "5PVYPTyWKWReMeRYxsed4xqSuCabo3G4xXrSbXT6KZMCMBTx2VQdKhwJJn82sLGHwEPwXLupCjmssQtjWUL4hxhC",
  "key16": "2jBt7oG3YhE2GvgNnLVWwQQcLBsSixre6SzqaUaELigmFTQf6JF33NYYYh7NzzTuVQqmvEgrUsFSonhCq6rgG2js",
  "key17": "4n4jUE5jMbJHD2zT5rMW24cJ1dB7eexfahWgnYbLqdFbq2GYSJS6ayYiVSSLCX6ZwqMnowDBWRdEnWh65sjxZoEW",
  "key18": "2joiAnG3eKdjuuLzE8UwVFPZ46NF29MzSHJTmsLYDm6pjbkYnjdZhvK4J1ncMvtVh9VHyuAzkPLiqYjMxo8gCbeC",
  "key19": "KH2FtsDxieTiT3BsMRAV1kXRCaoas7xeaLqoqWiFq34B7QT2Gu9pLeZ2pmsMfKT7KF15X1WwKnMAww7L64D7URf",
  "key20": "5af63khsPo33Dg4sJy7sxtejAwVjh2FiKN78oMXxHzHCiRd8WPR4QKEjz6cS8xKjjSBS2dDsxikfJ2KkjjWKZ1av",
  "key21": "5B61T8uvG4sAJiQ4xbj3zJodFUTZTc2WfRmojxZEsXhWkEtZ7NGnTFcMZLwfnk9nguubqZ8WpfQ7Ym6S8ALYA8j9",
  "key22": "2iGRhKusYJqwxhyQoGNBCK1B13PDSrkt6yMMe9DmisGzwxNVvtsRbGou1Mcep71zfZtap1syJTF7M7MNU2XAmeHG",
  "key23": "4VoyeMUtQgqPUGmGn7Go9SKkznxxAfET1nVDCsbqkqittkRDRP4gvo7onkLYehxiJJCAXKcw8JfcJZRWseTTxAi4",
  "key24": "27UdPNjyzWBGBmScBb3PWBYY3CpLVUBKeL2mWqbKwKQ5xH1cPtDbpq2DSC5bSo3cQjWNKxCoTzAEMQ3cLksvW8WU",
  "key25": "3CuW3HevKMGf4W7U4v1LWg4zgfkTEqE7UAUyosZ741qVJqdmJ1pfaNNST5yktpvaouAVD2PebqYr5NZPP5sVmCLY",
  "key26": "2vRjErN2GCAs4SNZWuiAouNtZz7ArT9sjx4Myn5vYNgFHLHvLCVJTUqBhXbHpSLXenYdpUQkNJrLz2jtWvjcnF8p",
  "key27": "3B27iZaNDXvLwfQB8Ps3iTqH3Dbwdni5oAbJC3dr56AJWKt7s3xCHniuQTWb1DDhwBh7kPHTnYq3aYxAUaHEG2w9"
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
