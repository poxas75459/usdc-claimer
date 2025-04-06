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
    "4ZCSSF5Q8qvxZZ8oaE1MhsvT7Np7AUfMpUd5KqLzB427aK3w1yQzsMJxCXgYiD7aUysGQj3Umn4ksP43UMPmmTxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44B12Tm5RpUVgzagTGS3VZFUdjrhitGaiXmeu2Qjf6DDZZmnxrn8nb4tD14p89Q3PQw9hmPVnCHoL1ECdThANC8Q",
  "key1": "4SuFvwLVzq7bGP3XEFpTosW7BY2wLsnorQcRSBkLvfuDVhXRAX6xstVqokfrtLc3iPoSXvPJgEuzavANEu56nHhb",
  "key2": "4nuzVjZehnGvwyP5jwAL6fQUC2ENt8BkamdKrAQMYWWtP6pHqwz274V4vKmRuJXzdRjUYhhzaJpoK3SaUfT47VxH",
  "key3": "PWjPBvroygpiEYivQ9BRpn4ZW8rddgGmnZLhdE8ThSEjsjkeAruxMxUqWxu6BSzSeKZ7djgp7sKhQRFwHX4nAWz",
  "key4": "z1TCcmvZHfqoFGFvH2cdJSQh1h9RwFvJuQYguUpPKi3K5zwQHEw1Bt3nxNVtUVMMdh7LW24MK7KFaviwMgmWxEN",
  "key5": "5KKXbztkB6WtPz1trmjwaiVYydScDGFWhKuNPJ2PK3YoTn7fSQw8HEXxnNeLyofkG6hVJ9u9YTPVdYptZDVY4DsG",
  "key6": "3x8EcRLWC85rGtc2jiK3FiCKwnQeyDHoyV1jMMykWUWDoFVaAbPnDQ6ZSoCXPywajkKDZPyaGEffaKMweTfRSeZG",
  "key7": "3am2PsY5LBaSQgoqoipFbMPKN9tYpdmYuUXWp7src57pNF8y2xase8nd3ekgucXSJ5Efm7i9fZD8XiMyyxyJ4Rg4",
  "key8": "dR1Fph58ujEdUShEViyNpiFP8QGJ6aL7KspPfoeobb5CATg7KhZLLJFqjbp3XJT7Ck2hn5pG6EXe2uKGjaNUv7F",
  "key9": "3f1Wb4KVm8iZPwtuCg6RFJv6ch6Wh8G3V5LYUV5tGBbqHBkJxm5N2M5V2vATx1HSd93AcKMzSpHV8mVHRNR1bVaZ",
  "key10": "2HcWXAdQxg65cFmdEWUwtEbk8UvibrfaCju4i9w4aUfQSCQN1pUqDQ6aayCpRCxnCmug6JcmdvQnXarJ33GaSMpp",
  "key11": "2w7Rx2db1QWCqaoMRcuE2ZbzcTk1jSGfoVLJL4YK5MVPJqxcuJH5bJthh2ESPU89kcLYpHbDhz8bnqcbCLKHGWht",
  "key12": "2hZr93krKNzohwSi9WvPWkY4wFA7nR9tD5iZThCj91c5SQzfzhKAYwhwVixBKPvyVpMXVCMnVRuKLFhjcTeMqVt1",
  "key13": "n8CKzzj33bp9Nrrq9YSnj1xu4q5iGmovRWp3CjkZSwVqLxrvybmfsrvSBvgYkurqLHrdF8ZSQPY2stgXJ5x1QyH",
  "key14": "4R36PYioFCAvsXhZ9MyAjhsQwzS32SNC7U5x2b9YXPj2AGLaNowVvn7G79wjuqudYDq1bJMDMAr7f1wx6vEzTBTb",
  "key15": "37qnSGT4K4VJwPUzejE7wcRVWpbhL3WRc4F1eaupaxFi5bmaMPw16oprUuJreeAVQBW9QeT1vKWJM9aWWrmL9gM2",
  "key16": "5icyL6d1s5bb43BcH7hDoSoziiVev8zZnAG9kTD2BTM7k31F584V2AZLzh93GBjrh4YQ4YtBbbGXR7si9pgNgXy9",
  "key17": "62SSjxQYwPMZudhrxTPQNq7EV1vegdtgQjUtrQ3SrRMyUsNA2aV61dNXZ8i1cehc5dkYzUMQye4xrTVdsnwVCv9G",
  "key18": "3mj4ZtLKGebfZT7xhWMRTYkCx88GJ2WoGvZVT1jKbwKTQcXfjqjbf4bMf8xW9Mw9qKSZSYyiMU7v8z2dzB2NKen1",
  "key19": "5SFusok57g8bKoXzif5M2XmKZ3TDexcV7BTAAdv4FYzUnkXkX8fLnSmDKfFhDXV2KyAnmZFUoa7ChGZabHN56iDs",
  "key20": "4bge9RdzAjiWY9e5HmYMwmjW3SzEqvBh3S879qJbTBKkg5GNB2iD9JGrrzwQmbu6CNV9As4Khk1EEW8A4UZ5pcL7",
  "key21": "61E8HB7onaHnznPnPEMiEyrj8UsCmhAiUvSzL4Ezf8rk1JPzMJpf6HpVaMMsVkiwZMzk1KJFqVLv7jpgT7NRtMK",
  "key22": "3R6UnKARGzsYiZbsGmK1TEaDyd94MpPcoUaQ5rfRpZNrgPyBiUe7LVmNSPdbkfPEWFcLMrJSWNfTVX7WVd6iwxY4",
  "key23": "4xHuBBokVXRsYkGyPNEhyB4ZMhLAXPZohi9Mt791JRrjhmAinBEU8fAP8eTkWPFVkrfBhhHYeF61D8RpopMuzwGf",
  "key24": "3pGur1j3nvQzSpifbptVPWTsp43W1Hkcvz32qHJiMeCyfC178BXBLjgaWFjJe9fRudkcBXvwbi13LvHQyba6QEsC",
  "key25": "NsCinmkGN6GkDe3ZNkTYwj8kTQQ8UuStFCRoXgDvxdZwmF6L1htSuvV62GBh2PLDYJzfue4GQaTXoiJPtmW6Ei3",
  "key26": "4viazegZwHMk8VwwCxnjJx9SuLhAMXU2SCRQDGCqA6r8AmW1zPcTbzpCoY4Kvv9z1WCt3L9tNv1nrfzU65hoxait",
  "key27": "VKeakVeCZkhxQDyQTXjwXvDoLkg6kWc4cHStSdDocA5mCFBitJKsE61QCBprLpas7Nx7xihhpdX3rgYECeAUqRL",
  "key28": "4TaNsmy14Rwjtq2uniahao5QE8pVRU1Zj9Uqz65CPLJjEQKU8FAwWp3yosA2ZysQWkpTSH9XTv4CnejHqtfEtfxQ",
  "key29": "2GSiUdW13k2iTvE9im844NJfZLw23h7bUJAedVgsLagzfAbKBbzmdBikZoUJ3Sx329XZoiuRZeWcUqdfpdYAirGz",
  "key30": "2obmG3XnDNXVzktgJY71m5nDanqXJ2Jm6mZ2ah7YbkaQCvbrQMskgYwKV26ALkTMTrPkPg1YzvtsK1KMENv8kNpb",
  "key31": "2F2Sf1x63YSUDLdfzA32zC5thLax4pszNZ7t1aF72xvvhNbEQnxfsdN2nMCYRzw1UY8hKBmT66Za2vyQEVPMxbbm",
  "key32": "256ew4wA2pskCTMHDxgo1GdMWn9yFt6WvGkhUA2HgcQ9X7SSDoH7t1gqc14rMGkkspAku1xSwTJBugbk4tFzneYm",
  "key33": "e7Ac9zMDq3qoJ1CRjsi1KqP8945JjcCFWKkteMnaFqakyFUjtzZgbFeLzjiaw8oHjv7GWFYCvvWgtUUugRrMSBp",
  "key34": "4vPh8ms9nAoytNctnqemEVuQ2sgg8RMG2wT1vKf3UDKgdRhqbg71fBYbWwCW8P2y8u3EZFJ7rH9TvmF4iu7k46NG",
  "key35": "5zFDmbsHyXRhfe4xrFwyrigGtZQhCEfj3tKadU3Ay8p7r5ypzjY8S5peoqrMeZdwUxBPUWrdZvtnqKXSzi5TiFbj",
  "key36": "31paKCCN8GGh6XugKZPVzMzpHWTxZYo97ycMTCwEN426vKJu6gkPgJtV4HM3nieDmzKB8p2jX9PFFzaftbVWyFH9",
  "key37": "2NWtQtNkUAtrSWa8csBY98WQreNSHxQFUC59eR454bMxkK3mbZPsH3QPPGbC4vngEVm6KFw4TfvWLwycZESmb1TD",
  "key38": "5fBsgsJHveN67RKDscg7M9atB6fHHLKS8knXxzvoHTEddzXxwELuiU3Q17s61JvNup9XS6sZF2eKo1L6oW3fUXN8",
  "key39": "3mpQEFpTD9aFod81xb8WiiMdEGbVN7VJ1ZPjdAHcr32sxc5yYW1yc5i52c3yTLYEka4sD318sLskvkZc6a49CyiW",
  "key40": "bz6uon9rpQwez2SdyF2PWYp9sKms1mx5Drtfe6N4ooikC66P9RcV9dUsPPHVEU7jyrBUYbnQA5wrhc3ZGUJi9ps"
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
