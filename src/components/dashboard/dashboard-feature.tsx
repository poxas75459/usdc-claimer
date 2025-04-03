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
    "2HtYwSxJxa8YiouLb8rL2DhA3dcASbNhdnuFWtsrRpsnY1BZpiEqrsNFwk5KyZkga91AwY2MteswGVgai2cgH2Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NfnKfHgMJN9o5zbJDWtPMsDoz8sd4X2RvG6nohmF7iTqAzkK49t5zp5ZcT5hX2jNXaQXzJwBayV3KXaJdUw6TX",
  "key1": "4b5SEiGB4GXFVMYtPsiH55ZZr29t5SL2AXyNRhEAS1Gih16Ax3hcFXhqh1MUEK46NKDNj2YtmwD1gKJs568XyWEf",
  "key2": "41hnzXguQtY88KzSsi4Kd3wkFtACkPTZ7xULigs55qG3Bps26TFHKbWFhu8iR51j6da7hqyZNHbNzjph2vPr6oRh",
  "key3": "5ezvhBqkin8iaR5cNvCk9unveCbjiW5oJV8Pa3oBsQztxPzGmYiSV2bJZ1Pdu1Y3AcuPGA77KfAYK1E3vd9YsTHw",
  "key4": "3eGz2CPxZ38KDHdMG33KT2yx47yCUBYmDap7uGsWsKQLdt53XSejWGciRiBa1mShRFejkkYZWhHogFdj9Bweymwe",
  "key5": "4VGTjvynAgmvjTuBEkaCMAwpY8mDiX3Exzmon7rJC48nw74SMeHNnC62GYMFTfwiDK1Kv5CGDanV1iL9ioFSuAcs",
  "key6": "5vsb88JsHAnQyadKiGbB4tjEFLq6BPxJh4kC8hHLWDHCyx7n2JmD2Vt55cyCGQkkSSnCu9qHJDvnpDxrLWLFqzah",
  "key7": "3NG2nXQnsabHA2juopvcxBKXh3uWJAw2mHRnEabiRWm6TpuUkHRf8DWihiRPTNjUpQWHJqx5iEGiKDLrC5z85E5b",
  "key8": "dZiRERZE5FG3kk5XET4VYhYuCgBe4HcdMbWXpJqmBC5usfkert1ScYEebfbU5ekWkkKhWhEyUd1Lm2x874kVMKT",
  "key9": "3bBmLgkbfWYH1XaUecQu9BVaEykg7XAhjbc8j82EfaxCzMA1RTL3Y9E6T5fB1vcyTJomgNrvjodr1FEQcq5nuAmC",
  "key10": "3ZjpMVeJ4auyLXDsUupKE56cYYrquoikN7mgqvr1utpJubmxmNnub6dCge4yf1gYxMeD15sk3L5pRgmnujsv6jfw",
  "key11": "5xVowdjGv1wXXN3MuY5ebyQDF5ec4TMaQR65uTq1DXMgMupwUUMsHi1pAMCMXRSCL5ymVTKNrbEPiWkuChYt5XaZ",
  "key12": "5Pk54aGmjipSKokeH3f2iHCa2diSwMxokJ37DWbZtEjX6LqNjPyMn6hC3Rpdf3DhtaPGxxj2rCTwwkddtaVf27ew",
  "key13": "4ckJk9Rnv4yhPmvdyxPr61stRfuh7zHApvz6ceESkM1mPTWDr5Yp3vZabe2Arp5ZqQdxVweYgkVNXXcsjc11cJpU",
  "key14": "2kyD8NPJqS5w7Pc93zeRptQKtHK9KMyCEh3iQQFB6R1LxHg9Z4pKtkU82th6PqRqyqfmUWFb7NY6mPSpc5XSHXGn",
  "key15": "3TncM476kMNQK3PoYeo4jLCeovDED7HhzNFMJWi77sZCGuZ8Cb7NagDS1cG952Gk1sZyiVqHrYuRwi3sSmxG7r55",
  "key16": "3KFVM1Ez4g3aNogmcM2cSUbH3CXGaCztMn9R8NambMJCKPCfjwKMJkZQt3xwyS1goteCjSaQV2eT9gvmXR5T7CUj",
  "key17": "46em9uesjUV8M9ym7xtsMWeyVXWJyvi21BJSFoJJY2DPwsFjgaHKjmFJx9TxbsZAo18qbHzQDVzdXFJQG8GXov1b",
  "key18": "5TCWJZKbEW5GeAFd7ARfUWGHaxxRFMqSYrGgLDBrqNvPuzW7G1bmREHUiZTmUp84RnZCpV2dpAaNSsmpXm35mbGx",
  "key19": "f1u19NyF1Ce13cNWyLbKeaQeB6MRyzKSU8NeMiDSxkYFFJeXuYe1MQYJcEjbqaFkJ5BsDr8pFpoiwW9wuoPPLMu",
  "key20": "4UGrWQgUMy3EB2eAZR7owDWcQh43aaVS4nL2YjghZTFH58fSbSyNFZQ1kjkow3caEfsUXXRthA59wHcskhmFri2y",
  "key21": "2wNEHeaCFnFb4jssDAjXBknSuNvozar9rvJMpiXBhpRqjSP4bhmXU8ngcB2J1MDSZmKx3CmTZxBbVu7iDLCW9eck",
  "key22": "3C8YLkpRTKTjz8SV3ggDFMC7eAwhYamamWGr9CsVSS8eyvuiWeD38TFw5oLQ2Avk59bgKyC3gebWLoCYAuTVMY8o",
  "key23": "5JN6VeVnhD2Q3mSekV86ixbGj1w76Tx79tTmxu88KwTyRCEPWb14q8MZbAmjVJrMzvL98PEVXXcHYqwFqSEDKfC3",
  "key24": "2GtuDtescLA6nnH8Dz7Hkxm6obKqVLZFPf39N9BGtoJTQZuqLzvdg3XWMuTsdfD1MBEnwMRCSbiQyDXp6vpGRQXS",
  "key25": "2fe7TWdvmSVs5EZ21QupHxhZXkyBugJyWAfcZw78Edjs7SzMeb3MH8P7qkqpB4mqyVof4FnrgkPhvAhLsXkbk4BX",
  "key26": "3UNELuLBfuenbeZLS8JW5DWTHFAoFgBU9U1MrPgsbe92Snhm1BBH6VWPbhhtvHTjc6V4tFFDkERAzqNUwC3jrMQN",
  "key27": "5Pnjv4UFSo8nuTXCrmL3CW6caJyhdTFpdNYvChfDSX8zoJwoUegsYGhnjPu7LqQXY2aUZogLsjEhQLnFqAS3cW53",
  "key28": "gDGNQ57ghtrAMUPAgXTmBN7x3qgPC3cbuch2QFWcQQRxEaER9pMUwVUn3q7v61JWL4YoLBz7t6MJpB5euLEJq99",
  "key29": "3FiMx5hQj4PQfb2hvSwGMh2xn1CMC1DBtV9JmqNE6t8PyKZPbgWkeeB3d4NA5HfwPU6HS2DhEiruENAFg4MUhSGv",
  "key30": "5kE7m7BcNhF79ch7eEYk98JCJt6vnkzvGboNBR6CnLvQvS5EAaHx5Lo4CnyuDsvc5bdgzuLqubVvpDnPAdVkxa99",
  "key31": "3ruVdhjdU2fEK7Sp5AABZJRmDe53exbNLeb2JZ32gwsnX8DzoUGrgae3ZYLdGH8tPkCauL1E4ioDPJL5Cm73Rsip",
  "key32": "4mYv7zWuf984UGUA8oaqKvRfLRHGVZ733iq8NCYqc85enhjXDk3nUrx1jGj3XFL4ax1Uimp5UJXzcMyH3v6EHrux",
  "key33": "2kF7Szu3jwNhff54VdY5iUAGKzEVv5eoFv8h65V3inqhfoPrFVnwRCqniTemeJeF7ieiyUDNGKFx6wgYNoUQ3zb1",
  "key34": "3h1N4Ecx2ysF37MdeuqPRN3C8Ckma44ZXnztEhvajLVsVBTccYmzdp4cLgVswsNaM2YVGfvSWxRzE4aoz3k62FKa",
  "key35": "4JjenZ6LG9a6HfXVfzLg4ooGXhmVvndWnTBKfHkLAYAzj6DF1a5u2AwufroQjZAfSkoeLUA1M8ERhEN9oZhqfGvo",
  "key36": "4arRb9dtRGty77KiticBaxV42WXK6S9WJaSezXV9SNdPbReWF4RmoLzys5P12UPGmxvdA4LFWNb2SWodncVsmTir",
  "key37": "d9bAu5sFEGa87qyruBduYpkxpJzoGAkZXLtokoWUCyhsVx4M5U36wjCPak5gEXVtcR4nCxes1SVGY6vfzAN1RAD",
  "key38": "4h54m19dRZKSWVSkKkKKZSn3K94AkMmHSFW6ognkgwPrFQH51hPsFPEuGXqvWfBfx3vgptgM2CabF1qzcT4RkNbG",
  "key39": "3X6hfh2LKf1rBGcvoN288aft7Q5SVH1WWBbaUt93DikuEBgmuwDhsijRGfEBMXuU3PCHPpMzfBWJwYwv7c9Qs9of",
  "key40": "5ViQ2rSUmHgFFfvoHYG4PTjV1Qph4MhPXgNQ8pWc134YcNgYci3VeGNrnvEVJ58STSqaWNEGCVrN4jXUgh5XsUo4",
  "key41": "2vio9UcWkHYSAETzSoSdYeguBGYVFdpvu6fKJLZQizKBbZtCZY3PQRjEygAqytUnwwQvPn3H2rEiLoJ4tTFEf4Ad",
  "key42": "3Jrq86Lg7dcbGA5skLa7qRtayRYfFK1e6ij3PcMb59LuLR3WkVrHDBCwSMoEsKmKqt3c4ghiZ5ckiZqiN49D8QJP",
  "key43": "26HLaCFJ1AeKam5y5YvHSRdbZNhYb7M4ynEecmPw1o5oFx3pAJNJNN82B4GaaHBtS28Cy6ftVgE2wtoSEi31cUbN",
  "key44": "ABQHbtuXvCKkicvDqzpu52TmmkYkyzUyXzTiZjCjFFjtypsFGovvASWbw3M5dCLFyMLGju86bxzdpNSK2Ezdfji",
  "key45": "b631wva6FoaHF5mQA6H64Zmk6frd6CkYjvQXVYfsfEmGRSJysmhww97RMZkdnjxGnSkjtXUYPHswmC93abgVu7d"
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
