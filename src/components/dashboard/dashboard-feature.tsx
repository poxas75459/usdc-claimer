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
    "3cHBfkptsRQQjvzidGzGrXsA2fJpHQ9DSM8wHTbkhGh2TtYJN6mKSCeHPmA3sQGoH4abGMvf8D5xpTty171rRowa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nh68UNBF8qTJq3wkAw8SXwPwdBRwqPt9wrg3QeDNifFTLBumTwQvBRnyQcAddVp2FD4csUsSF6sZ5cge7oAaqv",
  "key1": "4SXrEc9tAMNv5f2rkE6kjYGJ2FAoCj7v3NLs1WRXsGB4SKqRVyh8xCM41qsTmDFJWWJBNCNYjtzgNH7hSMVgADUK",
  "key2": "5fRYHRRLHoKrrnqgaRsfebvbP3WqBHoMby2zxBzZVCXzB5UvWawAKAgk6BtcL4pbE45QAsbJE6QxpDJ3m4Ekntma",
  "key3": "2VC5KVkP74p5ZDHsTWfNK9QdC23j8tZeFX5swc5xL97mAu8dJENoQjvPG58RgQXu2mpHvarn8Ece1vrEpaKRuuNc",
  "key4": "4iRt8KPkWunjvNxDowU5aeLPuRraKHG2Npc9aERCnDTtjKrDaqegwv6Md5RPe7GuZXfkm59gzyFwkMG5tt2DZ1g6",
  "key5": "4dd7axEwzYZvMyrUws6FcXC3qJdmqWq9nCQisAVpH2ewxqxcrD6sdNDnDnWkuefr577NcwcFUgW4m7LNnuzAbKZT",
  "key6": "HwBtQEEJ38q3prdQxromL6YyBCrbXd9UfUq6h5Vrj4PmWqYbMpM9S3k6cT2LjFRoehMXcue9DWW3ZnAMpLjVLVi",
  "key7": "5rXs6kUfZnguXk31GA746xky8ShHf7UtVmHvzyG7BaCNTajnLWJkp7bL4viKHNYiW1NYpHPNTq8swUBiFwEqcjzy",
  "key8": "5TGVp37DVrojG4kRhtoDyddoPozbNcxTPSywUdXnTFHxh9jS5p8TjuLyvpfxdGAEWivccq5UGDjuNjhcoDLrHDa9",
  "key9": "33tuRJCCDhKk46z7RfAFeM3nmZhJN9ukXfwXB7e3R7DAs3p81WLeS8twt1VkVzn5tLJZGhv3xDq2vyZ2f35kjyNE",
  "key10": "4dwGwK1fMqGiEzRn67dtSEdStzjsFBkkwcAd9ytP63my6otDYK2zBEE9kuLdcN65mwhmQFeAuAGKNnPhj3pyPWrc",
  "key11": "3ZhXb274FdtTdzqv47p4TccCMpG3ktY9ASAE6kK3tCczZsS52WrGfM8qAbTuWu34xdN5rpcAQkMRxABk4EPQJZyk",
  "key12": "5CzGg6KnH4sQ1gF7wNDX5ScSyB2jMqihEwK6Esg7xxbkZB7fwCnq8XWASbPDnfRcryut4hWDRDkws7ZikWKAws3M",
  "key13": "2judW2WPV6ygywMkXXHzMTgTtvay3hBxcn9oNXpQ2VHdpP5qHk2xSgptnQ68xeehu2DRfGXaUMVYUZCAVuhrsnFB",
  "key14": "54UV6FBjAMRniov4JhMhVibnX9jTqEdFXbuLjcH7vF2aptEg9VB8MQD1cPZKRSjAqDHW2yzpEb2RzAPCqo8kpygs",
  "key15": "42EippbissEysVP1WZi6YVCRqsk8ZC3HAtXX3pL2QHCkUnY7a1s9hu7X5pXfYLu2vMgXofMjhicyzPATEFFqoXPW",
  "key16": "4Y3JX5E61gQYC4fbEti2zTBxgYHG58ny2FK7DyjtM29CH65Bh3sNUo8vew1VYbQqEci9vb5qkAKWngd7RcyJdFge",
  "key17": "3Pe74y8wDj5o7fFC2PUhDUoUz4U8aNdfFC6pFAZ5PVfD6r2AAdthiJgR1JRWhcyxjKE7FEu3LUWVPWSS3tHwNFTu",
  "key18": "5KnLmKQNX3am7NTLMYL4WL7UhyEKgKvgq78borayAzPkRRoTb8qEuAagBHHkk7jiLo3DQz3WazXB8Uy6ctjDPAnT",
  "key19": "2vVMgBWsRvUNCpUkTgTmXSWKbUJmKmZC6PUcB6xiLHxeLLS67HLjpEQ7A8b6yG5bntNtd24NNJXzZVqFcMKsiUPG",
  "key20": "4YUtyiMBFtpJm9iPKnMWkG7HKeE91etvcmen4XFZ3TQYpXgfVTVRXwhR5LVvPHNpi6GL9N52ADB3L8msZD8u67wn",
  "key21": "4XCmp9MfftQiJxG1vSWS3EgjBP3kcxmTsWGxkU4hYiCGS6MR688AqMJVPgGTCqbqgoMPMA4VewuBSdRh65JzjE83",
  "key22": "5BQLmM7ZduW4NDhxXkbSvDmKwApesf6XJQjcRUejRTHahSf6CEkgcqb5KRnhbMJkymgMGYAUc2j2tPJEkNvAcqYY",
  "key23": "L8GzBwSWN2xZ2jnApMTkDBLq9nRMF9eznjAabBPHNCaRRhb4rrKLPWxoQXGske2fdZBJDTTFtqVyTvL4cmPuLJa",
  "key24": "3GLPmWNsmPa1kGUAvCHexTX63ybUEtA3ULgGwJ8Tq3vSKyMCLRaWkGhMEWYTdnKRoB5nTsPT3wCW3Fdbh4iC4yTX",
  "key25": "5YnpNrUgEfXwZcYmKbm2UbxfZhoenEQbWaDzdUAEt78ydkroQqWw1SnRnEF4KaDRjCVoMSUWmCMhR59u2SkgGvss",
  "key26": "o2nhN2ncvej1KUgfDfw7KCDLKBpukULSJK8sJBgj7r2n2f4ByGPd8qcSNwo7fFqmHtXQ6Hsb196o1sLLZULN1BV",
  "key27": "4SujkSH4vinbakSo6Y8mXXKbhfuvfD4FLgACraQJxN3YSK5vmyVykeJvq6wCbDZZZKd9p4M1ipJ6cgEFouQ7ePYs",
  "key28": "2vmfLkdKeFtfkumC5dcorDE8oWKm4tWhKYgiXcfGtkJzeStLPQHHzZGbDAuq3Ln6v45v2Xp1bfqhRioNfJEMPs4W",
  "key29": "yXrfnsA3dyr1RNMQ75YhkgNCAUKwwXqx5yHKR5v5dcFu5ZET1dtdHLqxPrDVoZ1Y43ooRy1Kv8Fy4oZwaGUtznE",
  "key30": "8uW2yh7raCniDPxQLFS9DdZFXR7C55xeZhDZVHnRMLmHPqGrxnkUjviApi8qRcx9vBoqPsmd8sqrC8Hfu8YrtD3",
  "key31": "2BcuyvFAxXVcAJwLonFmZLcxpxg3GUZc8pfyzogW6EbzY1Zk5FeqMWwptYVA8pfGkVrpXXGPzxBPXoJAtExz6NhL",
  "key32": "259oa5fEpvbsRAH24j98XEbuMtP6kcpDoDcUqx6STQ5scaHrmbFxnvrsmh62BhLLLPJvmKWezrp2UMyhRauugxNt",
  "key33": "22wM95iLdS1y7jMEasTh1M9bCqpDHe8qWBQppGTnwfvwoSZZ12KCV9n9LrPqRU9xa2veBx6bU8WabzT3o7mV4CFC",
  "key34": "3mNSszYshiBA4AVXPvXK8H1dKK5kGP7jHrDKVPPjDqoLZK6EvvfWTHGzLtExQxf9LKviT6yJC4SDHDLXnvhRr9ip"
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
