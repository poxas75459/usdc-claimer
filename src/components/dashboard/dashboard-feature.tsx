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
    "4sgzZiFpUMwFP9Dz9nyUaFc3HY2yG1nwVWqoDgkBBkNSXtiWLf8e8ofDjFE5wUhdq3BoPkpFtPK86DY9Jivz1tZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L9fzivFCpGqkt3UPNC7AkqZqkKgv9SJ9dVtbnJDjb25WYMSupsewgqx1z9C4FXRd9ap39HfsG5CFMaKGe7Cpo4Q",
  "key1": "5w7TzdnG9M9B5VLN5BnvqHH9ABY5XksWoEgDCd9CDbv56QMVtdn9wTNmKVWyxc3GYyPpzjqaa1dGnbL1TmHvViTS",
  "key2": "3tJ79fXitLaDKGZ2xCUqT3yHZDZvPx8jRq5rgGxMByMySf2LAfMXViLFwxDDPRr3iSrg7C2scsb1vdMXmEY8EqCE",
  "key3": "4zEf3wmDByRCPJZ92KMmxLzyzquxkawck7oxkWMbxwVjPJenU765C4wL1M2E9VS23CSCP2teyF9MxKDcoFhmHkTd",
  "key4": "4besK8p4ExiRiNcuLmqcfYrJJZzTFrebM5sSwpVLQXH3mrh72QYhGe9m9WQrnZE6Vro5whFRozSLjgDVXQkYEjsL",
  "key5": "3vTPniPPU9W5tsUiroQPAguBSgpCrPXoTS11uTUQXFHgqgENA2fLy3Cwp3KbQzPU6nryrzQTRaoA9MTvWdrRRhfX",
  "key6": "2e14o1a61mVMe1GahjXqtDLau2odd7T5qrG186mYPJUzvMqMDPy5NX6uT2SiPHVETgaaqSnFp1KQazrqmLvVqczm",
  "key7": "5pkfz2stnmT1uhtUpSvRcKxKbfa6xKYEh5CjQeJUfw9YKpuVdoyH7LXKr7n3mTxtBLbtmaDNFTT6bX2g4Nki2njX",
  "key8": "3Tk87CDDboRF2et1RZQBXUeQVj5wNULGHnWoJorhBpzBRqW7tnaUSWwNpT2HTdrGWXFMvBW2ne7grKiyNMMxufDS",
  "key9": "4B8Z6XKt5hk28eY3hTtMuGUdMXM52zECxS9oHRkWeiPeTS7szmp2G6WH9LrsAuWJmHto6y6jY6PnTYfU7EpZcixk",
  "key10": "3B18tSTrEpSRdfQabS4L8W17DoyBctpJE6MeY27h2eXFq5nH14bLbGEmNCyoe5f6sPhuqiDy1JRF5n9iMBTzzEmJ",
  "key11": "5cT9A9e3favUuDvrGVJ6nPn7gdQUBUYnuQaMU1pxVFqnA28UFyosTVwptb5V1eRqyZXTfuVqT6okRXqwiGNtVC1z",
  "key12": "MEhiYudEUANJiw3CSzWk1bJZJv7PtC3eMzFWc5JPr6hVvudxAZ2A1sMyjwJwzMMYBi5eDbCQrooNFZrnxCdkBqc",
  "key13": "29QAJGkGMDYs6SuDW1fST7MBu3xRMKsPGC937vEYEXwRMqNPek8Z3ST7szew1Fc47bMjwwWd8TJbGgxLmizQCgfq",
  "key14": "3ULm6QNAZmczbEsc1CVDf8K5LKaJActpALTPUnLiwAQVpdAsgDJnw36cQbboitjnUqyQh2Lscwr5nevLKBFxrMwY",
  "key15": "5MiNrPavbr5zPqvnEkhitDpYGpXecQroPPNiSNhjnRXnF1FUvJtxREHKwSmL7eHUMvsmkVK8fQcXvP9PY1WZqQn6",
  "key16": "67TmPpVNnZjsUkVqWdWZa4haf493LSgatrpLmeK8ak5MjubWhFjvq1WuRHKQvZbeoBrmrWJC1h1nYaYpACvEcFoF",
  "key17": "8w4Dg8WuPbvig34JGTNmpt1rjANnj7DvD5w1H6dsh6FfDbBr66wRU4vgrUfPXMCn49UZ4qcBjwZ14MeYvmEf1Az",
  "key18": "3CZQtwgJoWU5Lb7BFyW1T1QbHEfPgAr3s64w9NT2TP3z9hXE6fPAY5u9hAuZxe4YTgJ85mwECAEsiDJfrPHfeVAD",
  "key19": "3Pt9NtnLwaf6a5Vbex27pbzdFbncUfTRML7BFwyVw6qFhCDNFzwDXcrHjtshq63E3b7bxwJUehcMZSRSBZgEoZ7H",
  "key20": "4q7NPft28A4Be9baRg9utcZFvzLjHpiu1Jbo8DUfxQD6fPWezv9doKq88dxoffbPhMgDNxMBbhArcTFmUwxvRSYx",
  "key21": "4yuCRBFjexYPRqX5m2zNBp8XXGvEZrrNC8vSfSnSGVfyNHENM6ESTHeB4eTmjFGG3WmaujA8qtkQECJebxUfyLiS",
  "key22": "5TMjM5phKLfjb5P74Tx9a4UX3KcSe6JFeHFd2hbEZKvDKasWUVyB6RUk3omZL64Y7AwydsGDHqnysjKx4rHdsAVn",
  "key23": "2UgTesxzv23DvhhmihGv21z9XPEB4Ytr4e5jcP49ha2vfCUWBVP2DzXTkCsVeQ8PM9SFw5bGnznrcLVoeu6uefTp",
  "key24": "2pogE4cJcDzBpjms8NMicpnU5QorWotyiVURsZfTNWjEranUmU7gBKGp7CL7uEUW5ud5dQh22mKamgs9qPACZRCP",
  "key25": "CDDowPds8ZEiQtUaNxy3TYfXYnkZ6WU8BJyGK77uTiT3f185amMhSd1tB8bP9s6iKPmxAmHB3E1CKz9kBNdPCPX",
  "key26": "2QgjgdAvaKc3Pza9EZT6LHrXi1ZaCYnkRWbGrHdDfnzswXrG7Udqn2utnvJnLDyqRm2rtaRETxGdj3P5ksuGf4pN",
  "key27": "2QQoFcBhX8EhSp3ycmuyKJpBbhzkVBtnu4RTEZraHrNmxGZkWH9coF7jEAmGcw9d7JoSjrW8RQWDJYPvJUvf7Pjy",
  "key28": "4h713soDYDYHkAA6XgQ9DksbeaTcHr6s1DZ9HbZPUzUhEL6UW783MpAKr5Y1wJiocRqNjLzRiAtnFWSCUienABX4",
  "key29": "5Pk9kz7prvzg6Fndj5BKVcsMe1fUm3KMFxvffLVNFdqEqQPc2GwQWBwJjY1j1oYPiaSBBp6PXSv7UVvq1MLDgv6H",
  "key30": "2eyJyqdApixE7qxwRLBCc7eJqN9vXYDhm1SyZFQrPPan9hkonW26nYJCVpH49AA9soKxhawDCBFGJ1TkfyQFeGgb",
  "key31": "w3ZKNzGfjZm52e6KEQLeqgb2dwDHaaydLWpb8L2ik4Vy4zVvVy4sJxSA61VfbYYutbiNrn2ek3TEZeqeMo6ijyP",
  "key32": "5j819w3k2bf1CUrfP6Qsgn9aKtQsg5zpZanvfuSGi4JYyxH5ushfjrMnzWkqgeHbmYksHPhJGVQ9PNELzpLHc6Sn",
  "key33": "Egm7rN2v4ox7sm8JU6ok1wVT1gLQpfXpou4UG86EMYP7PP6K39JV97zTmbEv2fUZBu7PGRUU2hmjFiE91mjJsYM",
  "key34": "3Fw7GqJkCpLuinJBfiWH2ESVx7q9DR3eGcn83s74b3hiSqw86rwaY3qwoyWyGiHnGoiVka4WUDqiN5NQpmhW2FB4"
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
