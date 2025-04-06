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
    "36unpcTpdX1LxcbGDR1fBzN29JYcAMSKzYpqGtrRdeGMHseoKcyoPqZqPhNPpK2FuYy9fPnsdpo9dYm2huTtom1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgkdh5eNLN8d6ddqtysmAtishpzY6gM6CWUPw6ni7pJzx2F15RnYghURQFAy8fjot6vF9p5Dk7mGvTiJKE335eB",
  "key1": "4gULNtVoRww5wTr9JwR5EbUBszGzgjcKNb3DCQ3t7fym6FUaVnMSne4XDVB3X869mk5EPjVSmGsRm8JB9CRCcK8r",
  "key2": "2P7wahspE3jygr2FGRHBvwrPNDrVYu4vTziDyQfLtmZnxo6jutbb6KWcSCcgyTfqRz2iR5GFYiCBzQqRbxVzE4fG",
  "key3": "3qFEbb4xQCw8JbaBB8ttRGUD9rXT8s2MugDpfR8ZJ7SZ5Jrj8j36htfX9Bq4WQDXckF86TvTpvDR1Sx4vGgTGNRJ",
  "key4": "59PDCxfpzRzn2awEyLWo3AivjaCffZsEYcacyVad2cTzNztTwxtkqxeKaX5kHReuVRkW6uAr3BMTBYWEyNiV5JuQ",
  "key5": "3yM7H7fvjCFo9qNrPBKaTj9SuXqd1su86Vv6fDpmyG8LBEQtk25tQMCtvqsgUshN8i3nLUhHFFE9VidWJJTbzDjb",
  "key6": "dQdG8qNxMPEtR8pCazU4LoAT1eek1GAHJUv4QxL4dwkE594ACzFrnEYTaD8ByJAtR72hpDsEWHYME9t5FPXrDT7",
  "key7": "fP2bKruLH3x1bN2uJ3Mna3VRetMBu9zkVQbycYDe2X3SV3dRaWhCRySPc9T2vkeT91cPLgnG23pthrFJaHSPDt6",
  "key8": "5nEX9e31bhk8K5mP8MtJak1TWt2vvYykmh8XFj9GF9Wuc1pXHSnAD6vN6LJyKWsmTLiv4f8kumSTvpBY96wpJm9J",
  "key9": "5TtaAHRj4vttX8t5NX5ah4mB6WojPxYvZiukHeSiX9p1wEZzaLLFXt4iNTXrE3ReACqM9vbJXMg9CRaroRmqdtrm",
  "key10": "2JDkTH47dGmjuMtoXLRkCK5oPd2Nb1U6sDoKcwaijjUdKZk1GxzHMsZYoUPQXBfNHARDiVBoG4PjUToyHttL6eu2",
  "key11": "4sUFnsZBqTVRBCTHrorA6DmYcWehjJ52JDFYw8h1h4nScxpRfbaFYLb2tm9e18WiqahLEkF9Zc9QTwgh2bYajoJv",
  "key12": "2WTeH53doNuMwdSPpG61tHFZeJYjGPPyw5DMRshft4QsVp2zhpNWgfRyrkiLDuuj9GxJFxPPHf9kuqqzsAJcQjpg",
  "key13": "561kr8zkqTcquBnL9246KAMpFqdCJRRkMkr3LS6kzv36wqk8WaKL3cESwrj53PzGEZkPYHtw3ngc7tpbthkAcKAX",
  "key14": "tr24k4dH5nGcMaSXqCE8R3BBASnNNQHXvLEHWntbsg8s1TjjPoj9fVMzixEBTyB58F5arVh8fVKsdCoTfLWEZuh",
  "key15": "jg1gBvrM9d9cf1B73BGKMc9Hv7uQ4KVhK5raksUFvzKHF6TzpgR3HdfLFJLqcQvwtLYgdhsKUtrAV7iJDNLEAFw",
  "key16": "2e1yAhEFgkdLNaCJTG8siJYoVipyheT6NELrzfGnhd1skX1zWDVuGetYQZsn9DaEb5nmpmqixEhTTJjw2WdAs9We",
  "key17": "TSgLB339wMU9wQmd4seZeP1cNbCAdNbyE2UmXoQ8fiZSyqPxWRKApKFzSq44QN5LWoQFjDuW7REwpVYzsru8UyU",
  "key18": "vJeTyxt6vwGGscKs5mHeYVw3Y2phcRpw9Gzu5x5hxJcVYMGGgjRi4ugG32n8wrD9oz9tfoM96pkRcnf72weqgmm",
  "key19": "4ZZf7hEzxEfxZYXQfeTo1AiDykxabHgAFGVAcLj9hWsQ4JPG18r7fjk4J9X4Yp854qLoFuJUtfbbNuU8ykD3HyMz",
  "key20": "4sBee2bVc7bqGu6GCHWb74i8tJnJQWTeZdHeSfJM2vBu3U5ZzPLR68GMn3CHoJ8FmEXwv6pw9aNe2VCkdjSEgxU9",
  "key21": "4RwjntikopzhMWGvtn1dR5ExUWc2wGKovrU9iALjYsnTKLzXXKeaAsvwiR8kSBD8LVTZUeN3yJzQMcK3ojr8zNrf",
  "key22": "25cuGUGrsEFCHFQLHVHoZW3oXpU5vT1opZHt6NDqYcp47Ni1CJNHTqazh8Cch5ecrq9BBTTuXpW1THw1prTZAcwg",
  "key23": "3GmsEqhVbJjufJxjA2heykxPojMcBsvzZbXDr3gGj5nCxccTr5osvt7u2JJLXNv9F9pZ67FjeRJUZWPRHsBxF613",
  "key24": "4KTEpZHuXmZ4QWDTo1VpTSvG4hLuR1MgYjAQNzVJpT26hZ3KUj3gzmynshyqdNCtMx8h73a2R5seDJfeQfDw2Pik",
  "key25": "h4Mmqbxa2AcfKP5zM8d4QLwFCUM7hc1EUMtJSMzaYjcQTe13CDYF1axQWfYfE5Ko8DBQJ29upDAMhADZs49oSMd",
  "key26": "3aAGVRbvmYdhTMJ98XBL1iGaWdqCVBnKEzThzNJfGSXXKnrZAqxY26ijNbmaPe7bXe7ez5TFYgood7EnVG2REVW",
  "key27": "2uKTqX8sy5EKi3gzaYWTaG88u682uZ6bnuVXaewjHiwhtb2M2iTEPXD8bWpaFoNzywBifYgbNUwmFYbMB7ro1P4L",
  "key28": "5w3MQx8CHhWDCWVeyegw79B5yeLeZgMhSciCaXfTYnuQpCDfNirMwA1jBAhHnKKV3ZGdoyNGcSkAJgGPMHrcS2SP",
  "key29": "3DdcLvSifk9Z9KpwcRxS5Z3gmtTXkEMjeMiCVfKRz1QHXe1g6hA7cZK99nY86fU8NCsk7iXCHmXdVwjWVuFm7axS",
  "key30": "5zwUU7ZbspDuxSbWAXV98iy9EsAe7ndBCEkpMH7aK35ee9d49r2zougEnZSfNkTRXuKA37eeGgSkyDJQKsRri8Gr",
  "key31": "4JM9cjHCVv7M3aR6wTMBNLerpKM87Vb2f7G8modTeHbuARF2FKXpoDgtgszvcEbpXSuK8RAK9wutntyNPMA5Dinp",
  "key32": "5hua46ALMhJjTh6vdUAdVPktJ2ur11LuvbhYUXkDFw16ZqyTHTFmoLBm3WPRugfc14TcFN4aTSgBfVJcz2W4GgeM",
  "key33": "4dg7WpvUsXWRUbpc1gWi3B4NohnWV5VTSWjHUGkNL4mLsVo5haBTRax2etWNX1qHba6MS4hTD1akKwtSQKuxsciV",
  "key34": "5vSrzH9iggM24Qreiv1agPigxWahMr6Rza6RoqJWvGapEi2RbhL9TLVFqsSh2aWoW535EEbsEpxJAs5VZsXmvmpv",
  "key35": "323TbrHrV7Jp2vGmWPCi3eo8sFXeQZCZ1NZa7qJP6KtPWxaoUPgwbcdvU1XaubvGtni88K1NuxXgEa7qyV6a9DYk",
  "key36": "4XL4Kpm41XBRC143JsgY1SgrSEQa992msWF2Cquc1Zz6rPrsTgGt1dQQk3659NXPT13pgje99XSUbWVW75yPX474",
  "key37": "5wqzjhMDJr4b3V2LBZTpzPTG9gs1VvYCARCVewHX3XbS4bnWUKkj8xJpVYDxNYWQTuHFEgkBzqNR139SxN7HJn75"
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
