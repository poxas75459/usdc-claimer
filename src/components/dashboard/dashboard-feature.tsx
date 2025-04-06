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
    "YqBpxP7NkZKAxBkYg3jXrWXoYxnDhCsgLu26YcbMP2T5vR4iEqUGjLEr5MUb8LSFt43QMBbg4kqa9eJX9KTP3iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQyWehxU55ZfU7GmMQTChnsxEi8xAo4w6Q5KFyLeN3Mct9W9VfVThmTnacKQvh87G337CgciTXJPyFRdYFyGwyS",
  "key1": "28ZViNgcicuFgkuGFCAf1kpjsYgajDMridGhoXFQhjg4oKENbU41c3zZ9zHbDDeVE4HyWoGY1YFp3iRTGBRHcVyR",
  "key2": "4njJ2BLYSxDZ76PXsvpY3QGZrjq4Zuv856zesTGxJeSW9e8Ritqg5V8AAPk2PKyL41pqy5VRNXaB57Wu5zvgLG8L",
  "key3": "4Jp5Crat4aUTa3NPLewiZV3Jchn2DCFnwrWez1521QNRyjrT4LMK5ZRP6e1TABqkGKtcknYcNa3FhNLJ9RqeYCmA",
  "key4": "2yyFrtAjwjqFXLfv6Ume2cQELe2p3RposkAeKdqECWX6uHnVAjEt29M5HzSe41o6AHhsQU9cQvCuadwJbogFnjhK",
  "key5": "u6fJ4C62VCELQ33RwknDcLcLuJRb6nEjLVyfh1NkR4kW2EEdnt3QGQt5JnimtXFRKrQZmCeqvG67Rg7NFTheZER",
  "key6": "5Ag3RUtbYL1VDzSWXHxdtPWMjyhxmyunJ7XKP5GMtnhi76t7NRw8V3YwaEQz8ktpFMTLy1oSFGVAPn5LnHaPXgrc",
  "key7": "3UQvoyS3ioMy979NgsJacuH95LfUNJUfUZG5V3HTBtPmV8McCDnJHkAuFyMu7WQUZgrbvxZsWrCEt2MXPFCPoUPP",
  "key8": "DGzsMiejJD8Z2APBaVbdXqzdr6AKiri8KWpRAE7gq2NU3aq2red284EmAstCUcRrJZaxvbBsWbPie9su22rC2sL",
  "key9": "3nKxDNq1uxavmz48q9LDsGKiwr4hjdA9A8cFYgxHaEKkW4gwWan2cKFjyPCUsahktiQX3mJtu6iPZv2H46SUq2ap",
  "key10": "5QPybsgN9WsoBmHGLbeVCWoWLcFrkKspUcmA2GvDD4YSUrMw1KRiCRq2Q4MjhX3owEq9G2hsrxQgqDfM7urSR8Wv",
  "key11": "jY7topxDGW99GHJFmgNosyifLxLmjC1XLVfLRW7K8cBiVnfvWrpvze6xtaFm1CtzoEru4x2cujFbfW7n2h7HJTz",
  "key12": "5V7Hp45vo7gWz6YUogZDCVdypVpVhTVfQrZunzxPuxtpoFFMC1LbsChgiPuxuX228ykD1EUaKJhAK3gzNfiYih4v",
  "key13": "3due666yvr4ZsLhGnX9ETQQ59RmYJGwKFKKNC6ETViJj1Gt3rGuoea8U5qmr64YC7K4Y8NoY9LteitianhanNSKK",
  "key14": "3d8QEqXwidkp8x5CkwLYvd6ZkuaGzoDhz8FNhJJhLDA6iFBX7iSbkkhewrxjkJwzqN8TL4GLM9a7J9n7ixMQzE6h",
  "key15": "4YCWvCRmRswAzNPUFuwu4ytctPfQfpvrUvMn2WF5gKZNEHCJmQbkM96RG8zMCDdAVN4JpfXtfw8rYHC7N6cyqhDF",
  "key16": "B3dZbp1iNSznaeiAKDAZprT8bMg8vZn7VYkJu73agkjbJSr1dFmqhJnb1jseuWZE83wFjy13F969LC8efpEiEYm",
  "key17": "5AgaBx8bPnkX2HqPRGtsr1dMEqT9qnPwpJY3hSLWTvw7LYtG4N5qBaoBGZdgdXnkHud3aZXK7LUuDoLQpiFAf4VQ",
  "key18": "5CACxeEJpbowyWjPD4ZXMuCuQ5mZsX1hz7RyPmhuofBE8rZFwEMC6AHZXrucVCXdb5opxh6Hk4RSm2p1zmZnzmir",
  "key19": "3o3WXs5dsm8nXrbhdFZ3PqDBhrYDqkxYTN75YHDAFjs9hE112PWmztxnTzipjMivxce9RrXYwGLtiTGzubKyfyDR",
  "key20": "2w5J6soqcMMiLT9A2cHP4qa8jcHrMFrgv6r9D37hBcpLzohz5JMavk5rBWB8ScM2FkCvKa7XbRVZDXr7qSH9tw16",
  "key21": "5ZTSSMXrPwBEiNPihhRE6soVKZGEVXRHNEJZakwAPJ4P4YL4XxQFL4EijTMPQQL1op7AKeJWqY1qUR8QZWmYmaQR",
  "key22": "n5pUHqCEryHadLNZLnaDUmFuaMV512rofXWQHDuccqAmsAWGh6jNnfbasgLeBsKyQKMastwEBjouyJtsxYcn8m6",
  "key23": "4Xx6AN7tQfVQZ3uGFtfTG38LfBJ2pxEozx5eMH7jtHwbHBUwNwAzQdD7iD2tFcuUC2XmFmsVt6NAkJvotigX86Ws",
  "key24": "2zaLg44JUe9QrY14uCF7ngFJfb4dt3HfAWDcQS5x5atVWNUsV3Lh6teS3F2XWdAJgkhCQTdwaTL5xjhg6nVPJNVv",
  "key25": "AAcgAVf2R7rpuQ1P2NUtwmy2iRUF5KL1F3hztt5LEVF5UCq6ssRDPCADmtNV2iXccKgkqJ8iSjKs8SoR7EJk7r1",
  "key26": "HDrznwsXvKExAqoSr4P9FfwQDTnA88DiqaVPy7tuxTdokrQeDgevu1uzkJgy82RKw6idfwmJuPAQJEkYXPTMJin",
  "key27": "544csZXpw1ZhhvgtsGNnqm51kdG63YZDkEAQrvEmjwpe9XLzAG89UEcXbEf3Mvzzf498H3Qq3jyvCzR6XajR69y3",
  "key28": "2KU8WfhgGjS4GEVTB4qg2yR1F2cTQr2Tn8bVFxT5ZcEvUDq7QxeJVCPjUeysNQmMcMKiPrP6RgbmXHhL5z5kwduV",
  "key29": "58x5a8mqoHR7wZXLaFAr2HLTzUaareESNBgAfAEg81HvVmfrmyWA8oE5PozcXZNn1do1XhnREn3HBtwxT85JAGqW"
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
