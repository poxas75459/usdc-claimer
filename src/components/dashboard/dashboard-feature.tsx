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
    "59ZJNNmCyvo2TpidnFwjMr5UNmXbgGSVxV8soWweDhCBn68rrV9cihEb6SPXGMmX6nkYvrggWWoY3UALRbMEPRy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EyfRwyZHpidWVJPLM21gbdjgJUBE48fAK9GMnan7KiTTEgwsUyQkztsrVAtUM3kFvu5ErfP4UsUVbHCCUGiFzqh",
  "key1": "5MWPRmqamspqMf2norANFJbtgAEZJmNp19Yn2jzb99YC4ufesnkSBKHcTwD5JtwUknXCcdqGWZjCpD6gLjgNYtg6",
  "key2": "62diN3bHcx9qzDPPLCuWHrMt5dZMzXXH61HBSk6s9aoGDWEa4r1o5hmx1QsCaP4hMDqMaemWrQoFcSXAkejFUTXP",
  "key3": "2MmKQMpQZ9RgmgNUr9EjSCCv5DNpbaZhiMkj4orrbNxPWtGVZZDiuuKG8Lya7b76TLiPXrb9fZHgkajaQpx1NNfm",
  "key4": "2Uha9DvakUcDUnGhKvztifQhUGfuGqhX3xDgT1TvqhsZcNM7W51PexMtpjBF5E2X6s1vhZ9veNhuS3AusR5RFww5",
  "key5": "5yRc7NUTeeLq5oM9sha94mDCbKs9r1L3t3id1zejbwJc9eYTCuTxzqVfBwa4kp71NsAHyHUDCvqSEWFZgwx7MPZ8",
  "key6": "HwVzmcrUpBfzBk92s9mhuVzou4ZnX3QqLnqsp9d7MRX2fs8y91VfnkZqPMPkWsizrc3ctGM9HfTzDDSkFzYxxf3",
  "key7": "4apeJ1R9iVHVYqgiNqka8N7LWuhZVzoCUi31YDwSeHXkMdwXsoZ3SbbiRvR7ais9dizwrayHrsR3BhsDK4myK9J6",
  "key8": "3ziXvYrcEWddT9i9Md3KCJ481EWVPqtdGiKg4pFefiqVJ9ujn6L363zUDqV8U82ExHLRBCnbLAPq7RNc9JCeQWnj",
  "key9": "4uay4j3YBdtWFwrjJi8Ke9FX6QbtHKKZsGt3CMFEGUQ7GoUJo1vhCCqnEajZayKH4hpcCMJtwMrSZcEXMpZYTtmy",
  "key10": "4P8A51K2y8RJdNVNQpXeGBps3NMLSWKNZNKVok58B5ftKFq4DZnLszCrS6L7YwnrpBmBdbxLvug6tti6CE1JYWsZ",
  "key11": "38TERuGemZuCrLrRb3XvadueJxYEYQsNabNWY5TfDdsdW1Pn3v6m5d4QQsWkDdU4bUmw5jb1zSaEhzBQeQmyBk4d",
  "key12": "3aPZkHZwFEWcpDicMDCnBze7JCEHF9zVHwUxhk9cjiutUDVXKhqKpYbXWXX8AMWZpo5fS3wCFf2XiVJ4Yj4KRGih",
  "key13": "2Wwf4BdT8a4Xu4crB4KTDBLM5BAcSNJqPpgjxxEruSDGWn3efZQQoiLeC3rAPbyxKzC2ZSu7UFudbnmKtzcJAePs",
  "key14": "cJgvCTood8ryiBs6DsN33pLDLz4P3iMRFNkYZuvVaTAny6Tiw5tkYUZstYixipr71U7ejjuwVmFi44rAYUC4uuW",
  "key15": "UKQSMTbgoU3JnSmmAcfR8ME8hZkicj4VtmeLRmxeQBYwTKQAgF7r962DhEV7JZEy3TjvrdndSSKn8hXUAjRYXN6",
  "key16": "55SwoYVb7fStEFp46iGyrB8WBj39LXUNzpbVWVhtfLLZKDWJs2AUKG2RUXKDV8DuwS78BgW9BGJKJD3J2RoEQPvb",
  "key17": "5qkpsgyvXENMLRnpgdBnwLzyzSrzHKDX1te6RgNPfwDzpZY2dDYbDNkBg7kPWSaEqhY7JmVjz5HcbX4TJL3SLeNm",
  "key18": "3qHZjDdLDLFAbNXXwaFUtLYRMcGp5oUBXgKk2jTQWiSkWB1P9gb6E1BsoWmxDk1mjRxsvcVomgEktAnJXKN6EDmV",
  "key19": "4dGAdhvS5aEqrLNG4Rs98Cp9W3tJu2hA7cfQzJ4u8xkjCC6n5dR5V6K2LaWfQN8hSkacpeFujCEoaC6x3CWokQW3",
  "key20": "3D7G3bG5QRNMCwnchzsTMmdf98NkrMgHaFcywGuENencfRwPrp2rTmi2uzuQGCzVE4SFzkeoScjidwozhYjaKJLX",
  "key21": "2MbMcd1nfXu5KMxe943hznxtTuVskFPrMYtfJQyX3CDfcYnuPS4J7wcUKKEM6TCDyym8v38zkseZXm3p9i3f8Erf",
  "key22": "4tpYRUyBe7KJgbHFLHNNNhRbpD7dtDN1GcYR3Z5P4spaZTpyZ5u3ZFP3qotqU9vHkCGeB7YVz2iAG1GjJJFABmwK",
  "key23": "3U1su88bjyfx9Y4XLD87ya7aRDmxMznhay6PPABX1FfkEXSUg15h5zt58oPeB1tWxq88bYkUkuK74i34198nAsDS",
  "key24": "PWNQfAh61BMxvxfVjj8WMoLzTarhrKrbQL2jxFjrQUJCKTTGPEmac4J9BwDeXytAmVjirsP24phzNR7JvTe5wkk",
  "key25": "65WeJhS9Ad5y37Er7VWKEj2AeQDRhQxzkz2gxLMcb5L9TzSgd27SFeZ26e6cLRtHyTKy521gPX4eHEZGb2rF21Ck",
  "key26": "2YXXcn5rBfaXTwjkApfKexf4hqTkV48XBBP5d9dDRhLCFCGgh4oRyKwi2bUvyX8FNRqF47ow63hB4njemvwB5o9h",
  "key27": "2gmYrk7UKNtMAV1XZ8VmVxsRinKwAxwGMSeocuYGkXx8h3r247KuwKYz4enj8TDVw62bNmdUHwTsbv6uDh9RQMha",
  "key28": "2nUPmta6vjfbpkE3yP1jfjWRTyzWmSmEAVXSPVaVgSTkQQW2F6owXrPxze8Pgsxg9KXKqkY3ajDM7awP1WvtQ4hi",
  "key29": "4useTkvMYvgmLDiYAfptwnc4ekVmRAYZBMsqTbY9zGKsAJC8akpPfQVcoZm1hphhamVuTVPcNXydhp6YQLJdEXMW",
  "key30": "ZTetoCiWY7aHLLkaLdaGZYTExnJjTTj43xapJAB5UtAcaDJ2pYcBP6PEMKV1UijpHv3cTkMvuymdhbfo7nKLA6H",
  "key31": "D5EMJmvpwcAUSag8biwhn1u7NH2f9mzN4hkSaHmjKRv4BMkiU88Vv3t6JFim5YGuFG4WsNR2enRGYFsSfzsBxRX",
  "key32": "5kZ81JUBRRHVsDovPcBvRQeGzdqaywUhLYKkokNyD28QgBLG2345wfDMjP5mozTsYDn2uECZGiW6CMfbKuZ6oL3Z",
  "key33": "AmzTrnp5oncZx2FhEracEeH4BcwSohi1YKRCFKtTubvzJ7fPzWpVGUkwGCh4azfGzDerSJcEcmFUDfpLLt3RDCY"
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
