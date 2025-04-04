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
    "C93WhdCfshisjCwdLXTBbZ5DpNXAnpDYAQXguHiHYWgVPWokCRnp6CxhWCyYyJyqBBMHZbA2YCRczF3CwC8xSeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFEDu7PnTthvW1ZUA2VecjEVBgDvu3hxfcRqGuaQyJ48j1VV3BX9isCv7viZUzpdJTFA6HvVqaeR3vquXHAThfM",
  "key1": "4DhAowxYB9YRuq8xFLVaHt3JmcotDbfzbRQ8DUMG3jmsWW7yZP5HaNrAyp4FtCMhwEq3UifFMovm2pZuMu9BgpHA",
  "key2": "amkcDVkyYtiouP5rbdpgBovpZcY9H2L9kCz11YeLyQz72b8JL7qC6XuL62Pt9fQMXhiUrZkjrFRL5akoDLm9FWB",
  "key3": "5aTeoxPWz1bsv4YkSQwTeU6bdm882zwTaXoQjZqXszc1BRm3pHEkQ8oeoBVSuLEmz7i6dwRPujkd5afEawD4u26P",
  "key4": "2bgH5vihU2kwkJCYFJVAJZUYAiPXVtkKaNheHoCPs6X13gJKLPW2dwJ1qA8uuviQYVsHfN8UWMaSfXu5FWK2w9KJ",
  "key5": "5LWPVuF9rYPvCVZt8QtQxcDC25V3kRAqZrVofSAv1UtSb7e8XFyQ8GBR5rnQoWZuvVVejiY1QUsH8uZEzsECHMLG",
  "key6": "2SJQAFXBcPvBxDzVnRyECpYygSyDD5E6XJqtrWY2tDorVML9Rvqbxcs3yQZAK5uM1CaX8E6jWoajcbNxAu2Ay8ci",
  "key7": "4DuGFbgtSagxsBzvNBNQgyz976qogRrPFgfxUBbNguaZM8hCjwDij3NT51EmyjCaHBDVNvC6Japhtr1W2yjAq5CD",
  "key8": "2YQqcxkh16FHntXoNCxU6y6KUA8BDAGYmmnD2mztpA4aDv2MMTzNF5fnc7D1MZdHnMkMfw8PajHdNjqPAh7ZtLV5",
  "key9": "4tgceShRcdKAjupxpk4SHi1xwMSwfgCKVEQSzihSQTDCMtwDYbsHJN1xFi1Zftd8pMBiW669kT7a5ymdCdbYi44y",
  "key10": "2gdASUbtSguWE2k3peeWy66MHdA9JfuQiCJ763qywLie4aVepdasC7b3WdNHxPoJz7SxMKa8kTwMFghSGM59Bb1g",
  "key11": "2hGkdvTWn9xzpG1Q9ESopQ3A9reGeLjXrm5ouaCMzsw6xs5ChLTw7sqCnx6m4G7ckD5cPtwp6TEEUTPq4rztSAYV",
  "key12": "SC81SSBeiznR1w4fxmDVYwtDzvW7FadbPqAdzh3AvYgDSUimK3BXd4hH83sThSfnRZM7BnwbGoLRFfonCEcCHjV",
  "key13": "4TowP3L3rJryemsB9U3V7WNpQ1yvDcvrwUegPhKujBZLZ4QedMdugRSrMfsA4dWMASo9tvFsoEkj7LmQxzaZLRss",
  "key14": "ZvbpiPLzM25K6vdLG8ThPw5gQjEBtrCqinwZxfG8spHJPpBnuuGTN2Q1tatNjBzK3wvyghSFQbPjXiHKqCsCwdg",
  "key15": "64ftaXnS2YhaE6LJD3AwPmpxW3uBABpVvqy9SajtVmvP44GSwv1124NteZjvYtELTBQ3T7aKP5f8i2K8GFvoFYqh",
  "key16": "3RQ1Z52xZXcRSJ9ohreTyxP5CpMrtX4Hd67SPiJbD3ZExycHthjz87vddz1BXCzeBGGY39dgQw1cUEnoHU6wF3EQ",
  "key17": "39rAPui8sauRAsKfp38aAeCydzN3V6njxxadoXZGqtkZWbYd9EjGF5uEF7bpc4J4JGgc4Az28utzuHkzJ5MYS9zR",
  "key18": "4e1jqsKDd84oVSK5CZ2XUg8xhtSqgfPDys6L2i3bZ8oAQAiQk15ZHJjqLLSfGuGXCs9JUSrnWdSugxePk63Va2bb",
  "key19": "BaqVPyVW1qepfRauRVHg232jxgmLv76n7UTJHHysxUBVGafgMYSwErpQ38YWUFkqFSxM9buJ6Z6UaC3nDe4jGEF",
  "key20": "4XMfFSBytTh5Y3ca7JL9Rhn7N74hVUGfFXd7QAgcgSe4gLCzGXdVMSss52kCNYkpkT2zDAwec6B6Q3MkLm1aSz8P",
  "key21": "4do4yRYEd3F88uuXQontDtGC9fG5qwqBWNQGXZKx8GQtDT4vGEZAJgfWstUYcH7SyPgKEhiiQzPb8DZRQBWsCgU",
  "key22": "vKaBBX2NTiz3hqmmqS35YPBm9VuK7nybr5pvZUUK67N5XNwJcsgSDtecokMW3nWbv529T8SFi6R7uztYWtfpHhS",
  "key23": "66eS9nm9oq2EcXPPeHUdyF5iCvUztaZdhFc18zQ6duXbAEmvjHZTewQGvXaocrq3j5bkkLQUzN1KKtP5v6Gm7qsA",
  "key24": "62r1jV6UzqRjy6gJ6uTUjmHkHTX9SrgsttzL85AMW97khNa2qS9PcTgXFGUA7yH26Z2r7rZYGA7skvd4Vm7CvqHG",
  "key25": "7yJewEce1X5groKWQQhGSRX7tNfEBUiPWwjf8yYCjVYvmAeMNMDcKd8P59mtSPgpeMd6GuGdxvM45jAqAQhSrBj",
  "key26": "38vVKwamJ7n8gTSNyr6B4zgqa3DbtHRS3TixSrE3cSy8jVihaDe153EdvdTsEXoa9hctQ8o9cKtndKVNPPXHpWDy",
  "key27": "4nXRVMkgqTNvn361aZt8sg4nkpZzXfFEgh7Mijx3CsGkEZxzFjPhDsLER2vAyfYCVUmMqTiDDaSiDrxpV4k5dV4Q",
  "key28": "4KoorLTUFT7TZRd8o5y2DWYHL1Mossd7J1KkfFQYW2yUdDGE25YsjXvTkW1w41zSi3tKVK9LEGhkM4WipKAwXsnc",
  "key29": "54vnWujKGbivRi4ARWy41NFEqDs4Hkju7kAVnwGJ5L1XMhtoEk2TWfzDHCLiGe5iVVwFmZeLvyf6JNAZJMQjZZe9",
  "key30": "3oHHHyHCQ3exw7FGeKbvSsGu5M8jBbCQPFmR1N2fH918oJze9ZK3eep2deAyep49fR355wwqFMDYE2CnYjb2KYM6",
  "key31": "2b14qiwRxPXu5PWDDpp7PvazpaYGMHUCpfdkjHK5ZmPrcrnDau5wdWwjhNNLXXV45NSt4NzpK5jrSLuNrSiJXpcv",
  "key32": "2ARogzmovYN9X5UeXWQ3hwtCe3kVV7Bs2ZjWeMSzQfscxCQqRqRJq6KaULyBBC9UkZexhmGfRupEqWHRnnBLQic4",
  "key33": "sHVEPHYMzhHCFw2piu9bQatLSn4uo3CK7ganE9YhXsVcv24tT6n7YaSrCdMtrwTsJoWhTEy6ZGjDFPEGsJ1fiXB",
  "key34": "5tZtGcZkDCCUfJWpXkMjhJyoomnDZdnUzJ1YZjMnucxADnWzixgpWswWCuVWtVLwSpEL6rjKDqJGB3vTyvx4FB6k",
  "key35": "4meQ6LknUEn9cHqck2mtKjHUaqRfP5QGVCaSuz4ZHLbMYiDfJR6yCawWpz5g1Ax4uFyenNCpmDvgSLw1QZ5Uq4J2",
  "key36": "2SB4zaUJBpLJnH2qcNhYsUevT5xxwJZyC38Utr5TPnWve1WtXmHSKa1VQqrbn8xC95CMvhJwxVtAoCp4i3XS9yF7",
  "key37": "5zh4ogqSfxeDLsm4xJYsUfYmyvdCzBPGwbZVxyV43Hwx7ET1NULUGuKFBFnV2CP62D9V62jzAHuVsgemj7aqBp1Q"
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
