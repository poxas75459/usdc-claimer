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
    "61TfnKDAWVzkfDHUWcaRz99JqudVVe4khB2bvPcMfVRAG5Dnf1rzDHpFudBvP8qEgPsz9aWhzrYe3RGA9GA2fjEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65L9jM8qiWdv8mrTGBcbJaiApZ6QeHZKE2taRbS7fX6J3YpQCkwc5mR8ZxjozCKhQdTZS1Tk8DFvCqYSEyvmv22C",
  "key1": "4dZaC5Uq2H3Pyf55mafcXGnd3Rp4TwcfWKwdPkojeZoinve4KSrniJCCZMyzojA1uD1WauuYYooF52bYXdL9GXbK",
  "key2": "mctZcbPx9QsEF459pCJp1iGj9aAS8t4KBiMik4Wp4GUeRuZJi62UUQLuM4nuSqQ5AQsQSLRnGjRF4e3vMYPKCYF",
  "key3": "GnikDQYRkWVW5MZBeNMeo9K7EvhBfyrtikgiXZDB6YK3k27Ln16pGGUYMCY6aVMRhsmUVgCoCzaUanLMmCH5jgE",
  "key4": "4JRsDXWTkykzeKRKoErYTPx79m6Yp5aYEPDDfQEYEwKeLJXd3QLwVzWZ2nXJcZkqNLH5fYSdDCmU52vvqnj4RdH1",
  "key5": "3skXpCb6KM47HC2YB7RWZV5BgdFkg1PKpiF6k5Z3i7Lv3bUtRuH1WzdcrakqUkqbiV69t2B3iUVFJXFraXyoiiB6",
  "key6": "2gLV7EL4eScXnhgdrAo6rEKPjjuhUWNatJh4DrgyXJreaH4cYMaA4byz7WF2bA9VNeZkEPgpYhBSTkvZRHwqYXuV",
  "key7": "4MAdDb7ThDLZpKmZjf7tsJ6T4b51n4cAGTXsHBdd3fL7koAYwYnFhgdR9Nw7eiAkeZLtjNKVjao6J7wTxFegymAT",
  "key8": "3vmoMd4inQm8esNvpD39kttwTEfi9iPUh8ZL9CqJ6azt3hDg6geYUWxMkXR89cb9vYJ5Rtq9eK9aA6YPAgL9NNg9",
  "key9": "5gU5CufBQqJ9MzBsxkgDWK9qD1Ns34itvqKdcLGqnW9C7idf2VXzfHzwUyg1st8oomQhvaPVEGituqCva2LRQmVx",
  "key10": "2oaRWUa5VT4AQBxZmf6X9yV7cJNoghSz6hcPJ75zKJFcc5akFLBGJBkNEJAP4PVJeYBdfjJi9zDmogGBUFGWRVTA",
  "key11": "4mD2TB6XeTZ75ARDFZHo77tEzxmcEBj4Xq2C8pLkgypek3Hy9Y3BGWoUfUt6dFhqpwvYPqUpsiHrec6DpReay5YU",
  "key12": "5n6CiyGR4fo1p61A32i4FEBMgPGWeCRuXgdHFYsjSKJXVTKPk2f9d8FHu4fNA8yPCAxDBn2YkRzixEe9f8dra1Kr",
  "key13": "2kx2qmTjLtxuuTaPY7hKTbZQRkBB13RhbnmiEfnDiMh2c4dngAKoV6PMs3jXiHD34R9B8wYp5rkyiWAoSqMaK3WZ",
  "key14": "4dwyLkPxLqd1rM6Bs9XKpKAoS5kuciX3oJvdBm64xVWcZEBVzATQ6ozek8TVpYdpS92mL6Y6mbSwwfFTkbjvUaRj",
  "key15": "43ar67fDbDFedmuCRLyYMou5bZ6dPm6CN2G9dwopDe3BgvWxhVQDbBn26QmAQmnpnGeaGncBetxSZuHmM3sjCJEm",
  "key16": "5JpFLp2AGuA5c1973vWgYpPk89nAxz6x2iJui3v8J3vbEbqru7wkUbqDP5tx3h2bhhXgwFzH6oomrzoRCHFyPges",
  "key17": "5GM83m1fy1svb7qPrcB7ad3rknyMqERH8rWAyQVwRs1KY9tTCk2aLoYoPEQA5NDVcNzUU2jzN1yr3rXnCnA5zxHc",
  "key18": "3nBL4wCUm2YThMBjjqWAQBfBswAENUdJ53yBr61KAntw1dRRBHrYXszen8XgvCwcj7RnVkK1Bo7ckftQMyFr8cHY",
  "key19": "pgTvaAdGpSviHSJP3a4YUKfiL3iWR7FhirgdY71PeiHyrdsSamzBKBFXjedTmMwuj6NY3c7uZW9bpuS8MvyZPsn",
  "key20": "5BtZzcWgpHMNVz21DEkHevNGyX3yDx8EFxWtcvrp1zXq1GhvjKTuKWjmtNqNLX6HAxttEHrrsC4RkB7r4nTGW7mA",
  "key21": "yUiNRaBwy5qBZa92va37zJMQDgTuPz9h6MjGk6tvZM3fnu4Pz44h6ugubHJSwBJMa9bxpJhur1FCkZYn5M8KFFQ",
  "key22": "2FX3GVKuTSYXu1p3guaQuryVKC98ShLVgRSNZSTuzzgY5LVJNFTRzgArxdv57z71Q5Gh2MrvZ4GMG8GxboqiMqAX",
  "key23": "NFtZn9i1d9HQfqd6N6Pn9b2PotJnm5W1YRuJ6DuiAFoxkFMDjqL2LPTWVMEUsaJEn2X9ZgVpTzRTDvYX4VtjmaP",
  "key24": "5yh5pQrjFwr6hk7NUMLnz5rTkcsv49sgbvmBVbq6gJne12sqnajrfwD18RM7fe3NZV6w6RJ5bRFGVdGL7YoEEJky",
  "key25": "5dXE5BqKqh1JSivaYZNw8NLszptPnCypvxu99z8AqK9gJgzec8SCayHEaDzsnLoWjswjxtdN2QDYFftvCxWHrcct",
  "key26": "66XoZFjSDgSU15eYqF5pvJMDCNpoNev3xupUwFsfTUghTVVH3eo2DHoNGM485PShYuHEBc7X9BTSsWGAYxsq3N2",
  "key27": "4S2dVLFwNgJfQDDpNbcoAeW2i5PUAuckWgoe9jszrbSWxstrrq7R48mUhzJN3CPNZA4a86sRTpbEH7sth9moDfQM",
  "key28": "4EpgUAT4J87VYbQ15wX9iLbdEGTDTxB3KGhhuwcepYYdie2ZkjStTyLzQ5kTZApDVQbPWSyXUQ8Y42GAyuMHg1AG",
  "key29": "3XcZUxGHv4hyqtK2rXSpuHRvFpbyJqkLunj3vNdzixEQNdnyLh2BRoGW1SbhpNCKkaWGi8tN8DzU3HK6L2HY6vR2",
  "key30": "59bxVGurtFdxqs79YX2MPNz4TdqsYPTr2PP6z62Y93GRzWch3HXiBjbjTDT4Xeqj2byz5kykjX75DfHLoMhsbnqs"
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
