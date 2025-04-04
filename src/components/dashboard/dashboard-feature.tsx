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
    "4AsTYaqZYEBgwQEnc5TJ2gD2neK6HLjmX5MJwyfpRXDBEgEDjCmYvdpEX226SsMVik3vQnQQzU29vSTnPZT4ghce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UasiyrhBSTTGremUDxEr1DTakCWHkzd5sM4CogQoQUTRkSoLZxhX1rEcbmHTnP9Gjqve6VyPW5jhZZ1XrS15eJN",
  "key1": "34h7Yc8nNBgicAJ4JNqmy21RZDKcmLVXBbCLLBBogoQyc4Evg6JpCZp87pNPmtKfKCPSDPqz9v1yvTfP6emrwV6U",
  "key2": "o3uBgqra5275Cub4sDQsw3L84kAGc9vHu7F6h3ECdudKvXxmK4fWqFy6mL7YRSHTgWRLFtwURoE6pmWm2ZohenW",
  "key3": "5fWz7YHi12Lg8fma7jpQPZC272vBvTxbU5w58Y2vQVUzUYL5YFJ3naP2tZQazt7NRSQoNvBTLKRBn7tW1xS8qnZx",
  "key4": "2ZUuv8h7pFxDvcQAJxv3n5uP3QmR5kJp8fJGXjTdvYjFZGw3SsmSW8ykmbUAHV14PqqQBt81CkuikXkuX7izhhFF",
  "key5": "3K2u7VH4o1zY1U46Fgh22K2vXRrq6pCGmd9cFq8iZv7LdE7zP9T1RLs4TBcc8UKSXNy1SYBFcuHXPEw6t1TtZi1w",
  "key6": "3Dte8tzYvSgAWGTRRyH9YhFjH8uaZ7Jxyy1LgzrHnKC2XBzYPSBxgdk1i3oLZidcZDiE6USPuFhAqXiy4uJt7ujY",
  "key7": "63u6aj364chUMmoj4o8mEZeu1sLW1u8t6jTCoy2JEkAskTNHb6zw78KB7vXY1yJLH7uGcRfc3NK51myYU5K54Dv4",
  "key8": "4dkDVstsT2DnBe9dQBvarnTJwdurYmeTU5wjhngRL4UrERkhY1MNXhUk86WRnSEqLXyZbq7K2eJhLzuGn1B5DuGc",
  "key9": "2g74S7P1LrJTZC3ySBYmyuWktqzv8pgXjHRUKoGy3YHZ9PmX5PRCRNhmAFYqnRfK7jmTTicPDZEthSrKnN7XNYhy",
  "key10": "ASFk8UKnwjyS5X7THKZGV2JDwcaJ6DfryFXxjzmE6KFTGeQarkksVjZJXmmabHj789GGw2TSwWdEbzGH1RsJVbL",
  "key11": "2MvPy23vFoEKzVCB17w2qCWhwfs6vKiZqkyUBnM4rsCX21Tj1ABm8zVRcrtnM7rY8D2RxNJasU9hXzb7fRvSPuuN",
  "key12": "5NSZ5mynas1hwtndLoh2Pr3oCPGP3LxQyTuzymaBagWt6iWJAzVZ7hV1BpGPi3jrwb3NdFGEenG8LSuHahMhJ7ix",
  "key13": "2dwfyn8fkCuSqxvsrNMQdecskYNajpzEZHzKJY8uM3aC1KcuA1Z269nTah55YuK5biJHKCmfmYeTJFk1M2W1PuQQ",
  "key14": "2q7HPaq2oa2LBcQUpdHNgRdRGb1aLVgP3io7qjnjrHvAM1h2VCedvn3tT63MSZwwnehBa6rVmo7eMmdVqD7z1hdR",
  "key15": "krxQ7oV8kX5G11D8AegqQ964HGw8X9xZ6cDR55d4u5fpYpNdgqf8DHbpSpfqULNP1XxozUC13n7j1Z7yVLGZ9sH",
  "key16": "4ribgCAS5J1zQ6X8Sd8eVcpPVvdYzTGvNKpVjE65sCtiW814KRMBzsTR1TDFs66PCQCitxbJti2ZwL8T9wrERWXE",
  "key17": "4QhrLqjHZkjnx3AgG79GeC6RfVhAP3z2ruawFJSWzy64vSXCGzZEUBxREVfFT3M6xqdD5Cri4vKGRCHwSnxdpkSW",
  "key18": "2p8VcJwKJnEkj4X7azGX1XT6jJ3JNJug2dm2sVYymodARpnAASKeHzD7j6s7pvLYFE4bG8gPrL9HxEvv2ZyNAxeV",
  "key19": "3wi6LAAKF1kwwH2T4YcdkpFkryc7yG1tBPvrjURLDUBqxFFWKdM6tbWzbx7ERoX3GryGZX3ayq11uAzNoSVC3WiB",
  "key20": "3yiYPbcVum85UGpWXRAGCfS4US7vC8aojB8sz5FhshchHMAfZ26tNcinJB9isb9KVpzikGQJpA8bVJzKmZSmf8Ck",
  "key21": "3zr1oyxWaWK1GVR81ntBj3mtUiawPUNHfkog6SKAgX5tw5yjqeHLMCJpEMCzXVVMDoauSBR4WRfV9YmEtTnpZ8AS",
  "key22": "3pwTsi5mVjMecwkCjozS3BQv6FLvovWrFTsNh55xxzJrbY49XiMAXnftuHmoHUFjvKGBFwbuNFxT6MmeiWFyjAuW",
  "key23": "3xUcamDe4RvMUoCDDNgdVnQ7pv3u39xhKi254CqmLfKbaD8T3Q4b1YBomFTUucMWtp2kwHypeiod9e51vWRN5wsF",
  "key24": "3aRAdi1r67EATgE5jF85H5Y7rj4hN3R5yZsuqaepsGGAy9az7sjAK18LacbqtFz4KDkC6WpUDYNULvqMisDW1G2P",
  "key25": "mCVSEuMMwNUkF6kJ9MUjTKRZuoCxMdmjbVhan3uywGk4tJ5tPMDnHp4kFJtm7V44Z894zo7aRa2dmzXptSdwsYV",
  "key26": "2J8LaH6TKaQB8yzHYhnYE6vShouhrnyWmhcpdYPSgGb8JZFyWuAsSFDM4Y3vyXKUG58iea7VAF8osrVaqtZBkn5T",
  "key27": "3Rb3p7jeHLTPeGVgCNLqjnHbuEkhvzoTKArSMY8A5z1iAc8gAsMhyVr21pQ8WVGs8LBTKKDPyNhhP6L2h7bS6FE8"
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
