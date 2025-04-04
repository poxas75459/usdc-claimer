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
    "2A5vJm3nPWBCV4T3yNLaTiMp6VPfhibkZ1bbvcPw5r3aLdUrH6bAMZPfZxrNsMqzEAsEbH7kHS3rg5SKtVdsYCAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cxq1iwJehvCtJ4cYf8EPTUD4j3cS7vFNCVSw6c41tY12L9MHuvtiSNENt7on5zXBfPidsAZn9ZmpouKSb9Li9NH",
  "key1": "4EYdGt2GAgxWuWcXWsooV3oJs4ege3HfyW5sjcBsdaGHnY1z9nfD2DsipcFqy63ZmqVofMbecVvTQfjgPaFFKuA9",
  "key2": "3fgXRasrBD2EqgEsN4wSmSXYPixFztQnMskCLUzBr1EpoPLGwig4jQdCgCbVfzqhWtELnkAGBk4Z1jQKLUaktrcT",
  "key3": "2Q3c4viY1YX7GKMV7QbGb6aC9peeocP1or1VVUVwhQTbS8LvFRw3XgMnoxFMzCeyKvoWx59KHSbohAzz1g1cWMJF",
  "key4": "dLzArb6A6bNb6mcP35PBdcRSn2FiDh1BD4ki9XxupoV9GCPJ3UEx73Uduz6DarPLGXHdWVGVTcEcJ44KjcdhQ97",
  "key5": "2DiwFDygJM661RUA8FZTpQYT61VfAsTqYsbwDXuptGsAC46XrXoNkSBnEvjeXDmrtxeb24Ryyn7fUfKsGdT3UV5F",
  "key6": "5qXv6AuBp9ATAkGpNbMHVutd8B4xSAA4uSmC8EntXKsm1ZhHCgFfxSZ7SaVD48HyeH9z9kVTXj1rKFm4jYUerXHk",
  "key7": "53pGx4WEsffw8ZVcXKBF8BsvvLR62StiGwsHeWwxVbPQ8ek7krkxBdNUUFebEjYRtBHdPgY96aUE9ZoKeu8jWg2v",
  "key8": "5a3yjW1WDiRfsW5ugb6YvtU7mLjnb6GarB2v64FmGiTry5ZDnM3hoBghwyvEi4Ep4MwDpcMkDbPAQ2Ln3w4BBY6M",
  "key9": "kwrcsmvuXvuxVqnDFwKZJXZLsMdZYLeVogQV3PwNF3UT4hXL7kuhbUtkuWMACd1Yfk1moy84iTUgfe7bRmXtrUC",
  "key10": "3CACfoBP2wxfagRhKA4PppcRyu9DBk8hQkbfCcaPWmsmoZBPsVAAeHzBBG6hDyj2BiFDkdCdJxUGmkxrPPoHqNx9",
  "key11": "5gLJfhVKo2nnL6TzVFdjjxBNMhpgzfQ1wi32yhYe7BteDsZxdYQnzpvrrtGY8pkU62zKGZRPfvM2PXNMqZpNDYCy",
  "key12": "5uxTqC3zYoKXwjqPGmFj7DifNjetHySQCQkvs5sHqe347gG24eZCsu4ugrqsRf86jQyNEiYS2JCqmyX8cXYw4YMT",
  "key13": "59v5JWZxXfkA84JMWac5w4zJ5xxhYnVdAnpWULW9dVxHhgxrKCkLi5xq5X5qswno51sd4p8rcUa9VyWJ8Kv3H9Sc",
  "key14": "4P4eTYNTEnF59u67vKNurDdCcRUm6AaoUJPqT3EBosctVfiintMFL7nfNamdxCanRZNwa2cXpzxGiePCxpPdPsvM",
  "key15": "9c5iX5hLUf86Bsa274ZmzCjtCSUGZ8ZKrbYdgVtyvH5Y5CvHLSUSnPzHTbR6nFgyB4Qi5r8qHY9FFiBYmcjxM7m",
  "key16": "5bfq86bpd39GSFfdtdEZGC9R44tQ674xnUC4knpSqbJyZhjB59eUYmMKBNYjVd5HMr8wuApDaRzwq6oXcZs4GZ7E",
  "key17": "41xQL9JzFKHFMGJd9PPSNbajybeXKL1FHmza9UqbiDSMBZrTtoJwbuj5XBDzTk8EU8WY9PjnwtdebNw6x6d8zXuJ",
  "key18": "4wugw7ZWCKqe8LdrpvyqK8Mwq853wfVnppLvEVMUaVxGmfx9qiT3QCTs2AKgPFy18EgeKq1Q7CNkYf4FrFUCJdiC",
  "key19": "5oAH7zPfDRUBXvmnrx79NnYSMayhtjmZ4vSkn8zEAVuW6JvcTSwaigTqAm11KPBKnk2gXfXumUG7yWhpPD8tAdnP",
  "key20": "iCGCWn1EijU3x3MWPWxLb755ZZNdfbKAzRbbmFq9X7V9suP7AY7ST9nRtmRDfmHMaUHCyg9TXE5zKJ2DWT4Ru3x",
  "key21": "K9Kmtg9zvu2fUSqBhSpVmZ1RDwdW2DK2wNY9gXj63sp7Ekzaem4m8BzEwNhqcrRyNVUd7FCWiyqcLDRKEFEmKtV",
  "key22": "2QtJYSzkURKcuaty7WAtjzWhn5reoWco7JVttcKoQvaZSZwHh8ctN1whaSws794sKQ2Cc7zG1qCNWAFuJc3t2vvE",
  "key23": "hFAF82bUzCJjo2Zh19xNixfKDzmuJAox64ELTT2Dz243yKtGJTo3AjkyKKM77THj7jj5tiz1PRQ3AhRbj3pEnag",
  "key24": "2Dew4g8UUCCV3n8dXXRmFQW8czh6GwEvRTfa9aKxNu5Z8KQeMHsbYfGCnLjcRKuNvARdfFJsD1WiiEgdYwJ57W6Q",
  "key25": "65FyGM7voghWEB2Gix2h159nsPMkKRgcZVCBFAhYr57MC8T9dH4x88Vu65JxiyzJtKH5kCNVuEtjXfxkbkzGpYsK",
  "key26": "eP3yZ44EkD4EhezxxpcDYMmwo5NAW5ALjUjEXw8GnoPEjzUfBiktAY8yRU1gzAE9mTKi4ZRcxT5mpKPYDVBjwVr",
  "key27": "5QuLtuFpkk4LDA86fRrB5CxfJW45m5vss3JCB5DpT1nRUMMcJpug21v4W3NakAEg5FhY7yJ55DXmJ4bxMEwahKY4",
  "key28": "inurRSNYLkEpnb36YNjGTfVRjALKFXeqzNYqBMdSFGs7fYBPzQjiXS56js2agPbPh8fG4ny8o5bcWFXiThLZyxv",
  "key29": "2LNavPC6MABkF1TuXeXmGZkcsLKzNmeBwKPgMnisYeFG4Dn4oVZzoZASFKKgTsmvjGrkQhZcDEPPiqKUYSWBaebr",
  "key30": "KUquEAMeThbxBsGrc5eevw96YoZB9eHn5UeUffzSKVo1asjXsGkeaYWAWf4MdnrLZVQxQXfiqTsNgpXfUMXAAD9",
  "key31": "5mANAtqPWg97V3U1WCKQpERykyxhi4aZwuTy1rzZw5TccVHToeUsAWZ6Pi8wZQqYN9Gnh9yakphQqZUds1SgtGLv",
  "key32": "536HhuWfFEzWh331GCCyA6cbGkZFMETfFUFfPtAavX1SjiZZoR1of5jWvTt2G8Sx44FAkPwYum5FceEcr9JSVmop",
  "key33": "3J4XffHBrdiEjFSVbK2jfN2wXY7hcXVNnNZQDMwws22kzBXMiafx8K5MsFpR8oJWkUBw6T3f64AKkTnsn8vCXwvR",
  "key34": "Q9p1qgSVYBwiTe3fKRbtRVDYXCb8NRRarze67BUa5BC3iXjhNFcXQKfZiyYmEt6ggkE8AEzCRV3TekjDxCHsCXL",
  "key35": "23nPr9ht8t4VVKM7uCHaVK3BKgDxLUt48yn5WakVuDd1P26hdKuXkibvCbpMFSxFWKmpqWvWk12fRYvLuNRKWLAV"
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
