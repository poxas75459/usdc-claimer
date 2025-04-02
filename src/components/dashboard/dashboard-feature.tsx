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
    "35hmxmJUuamyuA5yyh3Sos17LHzWxUYaoP4QHRVW6QdM9WEQv7EWQ8UPPxvV27Uwidrg8M5fg7SeSM5XhbTZhCLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RY2FfuZM3qu4Ff5tctUQwUraKW7DbDeakfE6DEDDie12f4eaDLBzKxJyLQfQCrdRmc3JFCJCG6JTgCiem4mxQW",
  "key1": "35YKxbSrtMEtF9Hbpf79kKBTiwzVtWUdY89hjsxYS8GyBB2me222mFeJKD3hY4wnkN1nt52a96TtAmVBxjj8Wr7D",
  "key2": "56wAmG2R5hQVLsv7gwKnGv6JNX1LDuZuax1VwKwk1SfoLFDeHAAJQDdSUbynFNAJGSdAPmKcNR5E8Y3hfawoWFL",
  "key3": "L3pujwXMNv2siLvbi6QQEjFvRBGzurSbMTGoE6BwxPS78nJLHrRfMmyemaeM25E7RA9VBQfJeohh3DEE79516ka",
  "key4": "3JPH9gpKzSg9WJkpadnisPP9ApKGsT47EtixBZhDWrQmXaHAhNHNpBheLTT7VShRuLgyi2A8VM9jK1jTETXUHP7i",
  "key5": "3hdwmzdk1mRkcFBbze1S7BFU2JMZM5K4T78x79mZ4kNuqYD5EJMU92uYucLSbM4wm4tNa5PKPqa8NjQ79cibNwmd",
  "key6": "5P785tpoKif2qP9kWMJp4mMpYRhcxuehaq63NWNuNxR17QbZSCkLqMukyxciUB1EMPmgg1GwYcsnkgvR8D63jhLq",
  "key7": "3eozDHn2W6v4SywYMiqzDd39wyYw1NQ9sE22GLjs3iRuGTQ4rNKqaXYGTmyTZJX91BgbE9KeVTTR5SgYkCjCxt9w",
  "key8": "3VPPV1oqntQbSetXoAHD1jDayLircXw9r7nKJ3vwhtboyg5TZpmD6GW4kPmPXsPgecm9Dif7SuvwA17hxQd7oET",
  "key9": "3UW2mUoJFDxEdNK94UeaARinULgEXbGLAtW6VxmDNa9gCqGQ8foCgyWhRHPgAk64HZPAX2JSvEuecqGLBdYGKdis",
  "key10": "VpkA6nAwaPQkK9wspyowz4fhntFtMQrq2ydK2x5RYV1yrhrsuYkyd6GoWfzsxQM9Dsnk5XNY4y28hQrBVdTr44w",
  "key11": "41j8XAVsrTyDv35952wJFUg5gJyHe7eSNpsmYtPSN6rZm77b3FosniCr8GETUWRqdRw9sQYw5oXFxyPZGVGEujVJ",
  "key12": "4gJdHnkWZDfKsiqhc7awgoATJxVH1rosf1jMmf6rjgGsTYxvHr9vnhhz5xNRyPzAehtYyzr6V5Cy4wox5Nkyr5dP",
  "key13": "2dDhGLUb5tqUR8dZvzk8EUqiG477F2VqE5NLv3wnfS5tiZzHp6CvGcafGfR3mK7SsoeTQSjgP1iJ5AMJWkQ32rmd",
  "key14": "5TSRCkdoXVYh9HEsHndCb1wDaCb92yki1PVTqCLrw3CnFN7mptsZzkM3Rj494vzvMWvhLokod1C17a3dxdotcLhP",
  "key15": "5i3oC9zqVfGcp9Y2vimJZLE9Dw51ku6UMKdEeH3nECt3mjhHbVtsSSpoAZeLGMms1ANvfK8NyjZnG73JYWc2KJXh",
  "key16": "5ePjkaJ9BoGNQY5rfJMsEkC36MJPDsmCPnqWhQyrdA173ozSgBR1Uod8QNBU4gEiAsjBrBqD4fVvLLf45zDzsvZW",
  "key17": "BuowC3UhxvUXzrzdbCgbMYt1fg1LNcZbeBUPt3sod9zpXhz31zQE4JnyrriEvk34ptZEQ7Ji3BVkrdVNdhJYMVg",
  "key18": "3BuehshvAyfWVLvDVkn9N9kRZxAxAxB3ctZpFPyniG2KUKwTyC8Vw6y9PwR2LxUghBtj5DcY3MX3mNUHZqdsWC4F",
  "key19": "2Habg3hQ9eDp8GX71thtGYhQ4WG3NZpWjfvd2JV8EaCurhVzn1JBt6KhqWEiJpUWvwvegMpMfyYhQnHqmMiSscag",
  "key20": "5hqXWUKRd2YKrJpWgg62NoNqXYMXJtBqMsAp9np1jRG1bS2UETYL5oKTKsD4RMMyjnUcUtD95iKnnz2MxyToE1T6",
  "key21": "WqQdC14vMgPL1RL3Kk6EpoFNRJS8hb8wLytu5ivPi4wFf9yCrqyjXb3vXUvGGjsjocS61ungEy4jTwUjNAunYo1",
  "key22": "544g9Wi27XZgutt3VEWMzb3hGSxgg52hY6GfXmnKanbPqsSkWpAWy3ymQM1zQFTYqmCm5dabnnF1KETnFmMoxkez",
  "key23": "5YxVSVMP6k3YySsBdCgGpu2YU9vYpdbaBeXEC2ASb5zDKRj3G8UBzcdA9sZ1Z6wP1toASjo8zDkaLGzWfg2ft8uF",
  "key24": "2LPupbPQXAuj7vR9iYzsGFL9wM4BXEiFgbtkhpvwHTJDMAgHJaBoAawNsa575y9ypCuoTdkRiofQnHLov2N7T4hW",
  "key25": "5rViMHCY6KDLDhyeG9CMFtkmNhjF1ZR615ze2XrPtn1MZEsMUyZLsbj9axMua2TujBgsAShhrbStATTD28k4jvDg",
  "key26": "2tcw7kmywfZu4zg7XFv9tP4igDMtmTZGpT3tCTSDE3yYjoNY64RUzTtt2K9hkwC1qkbciK36h86Cc8jCErxnAa5s",
  "key27": "5TAur6vyL6c9CdCG337sNHACmzsms3grxf5rbMRQSaRuq8Ezz3jHZqMtzpJqoFqS3gYTaAjuzS7oWsQwuFkA8jQ9",
  "key28": "KXzn3hRRAcNfmJ5Uaj7rsqCL6mWMkDTLbq2XQEXDDJzG2Jbd9TNd9mn61qXg8TJhkA8kbcyxr9UjjuWQCk47TdX",
  "key29": "5uY95x9is3EeAKEaza4P3PAmokweEVXW825KbKYV72UJcE8zHEoN9DzYAqczxHxdTM8BBjUYhPKn9PM8boGAP4HF",
  "key30": "55DC3ZEHdXi8Lg3QxD3yEbG9jecMDDia2a8zt1GZhTP3N7ErtFkWipq1813fWSgYZLmZKQLkQTEPhs8kNsSEqPxF",
  "key31": "DLNwpAgd1kLi37MFi2FCCXoKcBtx3fuUYnXmJ5xx2Gnaxq6Tymr7SKqwvbmN6ECuHFFTVtdZbPEhy7H1wjz9yPs",
  "key32": "5G87h4JT2Eg4LDF5otPdcUgujtouHivSfgZn1Xt2R2u7GcLsWuryMW68e2fiM1zeuh8MegP9zEeZpYvmBZbWWqA1",
  "key33": "5fstDW6229hfhGCpBW93dR3fxvLCKimNUSTc9D9v8Yw7CCMMqE6hXj6ZgRYkEvSmdZYtB8jgCD8CD5MbZLH1UX5o"
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
