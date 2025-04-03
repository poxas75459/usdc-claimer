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
    "4E6SJ5LGexYj7GthXMafRjzWgt4zTDWQGg8cugKLF8g35hSkafWvLQg8uDkDdcTGa8cHPr5UrMt57wGqLxsi5Wax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diKRsaPgkXstPcFR9LLJ59EyaUbSzHu6uepTDJAdhq5bSm6XPncSvRybVea6LdKN7CjHMatHvbDYsVacmWnNZYX",
  "key1": "3hEzrsQxUZnpGWsC6U8cNaqVBeTkBoB7c2MZ3DXDXYP6V2LYGxUcuvJ95BhG7SMDMN5dGiEgNgXAMREyPP1t14V8",
  "key2": "FmLWe13e97JxboJStTg5UayGwX5Ngm3A3vyPzGpDMggkj6fyjprRzno3unVPKcN6vrD4hyQQ17LZTVxWArcphAV",
  "key3": "5aeoL4ahR8reGK3yXRX3KHFEHpdNuBopAoeng1iBM3JxmRRFD9A4m7awPmFzCuh7bWTr4WMuat1MuaHWbkLwE9PA",
  "key4": "5bvP3Nj2p54JhGso2XVXDbXC1S2RyMhv8Jd3nq27XrSSAc78SKsCktUL7SbvHVtsXAGDaWbCm4P9FTyoQEztwfSi",
  "key5": "5PuoT8De1m6Tu2w3DEGwCdjELG8N9NRwDsdvBMZDJee9JeV6pq6agRM2DqJcSyExxGzdZYsbShpuaxX3mQKqsxVa",
  "key6": "3s26JRx4oDbTNddAebRsmMb8zVwuteJjc6AkryirTvynDYMs624oUxFqZ81pjWPrAE67zJqv14qTkADK1SvSk2VL",
  "key7": "4FAnEy1HqyNoujaVxL5rykVwEzZojSwbUfNRJaWf4TFbdtbF5TE7B7NJmZQJFy9YcBmsgW7BzPfvnaHT1U1X871r",
  "key8": "5KLTHRfpaKfCgXevMg73qsigbtNajqmKZgQpiTDPpRW6yQoUbUaKt4m2wgLKpxbrd8SS87GDnuS8m9yHyV24Njpz",
  "key9": "3RGdeVPXXsg4S2pAd8HiGrQ1aGYWZ2eq6mQR643N7SDbPpFwHnJnVtkowmM1RuEUNR3Y1DZTBmkQmLuPNoRf5Je4",
  "key10": "25K7h2Rdiqdy3QVqL25oY3nTAi2xsXHRumZGtHDqhycryTMciA8YPr9PQeUbXEy6ZZYfWbQJvScbC1X88FrykUDc",
  "key11": "3EqScJUkZzg9fKSvyiuC2YfdtVMq3RkrBC9h2iNBq8c7yeHy7Y7RCUNQHnRz4ajtkXM8JgyksXgDQsgcQ1WNkmEc",
  "key12": "5XfqmJRo7pQ6E8DcVySHVUJkoaSC8mumJdpaYWsA7UvA6MdRwFWfKvkBtoydqEHVHyxrUiYkwWPZz2ynucR5vzKu",
  "key13": "5nk1c2DpTbzpRUrNrag7oYUQGinT2gENUr9uhfYXVeom9YhpiXV9rpCL6Vc5zsWuShCHg7ZSusqq1tzRvsCcQkgj",
  "key14": "3MnTRptihZrNpc6vrRv8cpjNRaKK2aRUTtyK9bovDPGEcnoL1ALTw1NcYZKKfqp2QkPHGARXwRV5cPu4VYeyxAgp",
  "key15": "3yT2GTUcqpDHC89emJ6wSdFCP2sNHAPF3VcxTpRRwxpEt86MEeMQzWxQwMMoeedD9c5bcYVeCWtk2QPS1vZkqZtJ",
  "key16": "3cQTfyYjt3k1sshPMDsqdpmkBs2HSNvxT7fEkGnAPbp3qucicY7iMCLuCDs2Vroqed5amQNgNuLgwwr5nSsC2vAd",
  "key17": "5cHK5xKiFevYiKmeZE6ZdetURpH2kxYpTecCRkL2W42Zg7Jv2sepv8pqVTHe9Zebf2sWwVk5hVx1ontQptQ4i4BU",
  "key18": "3XJC1AGY2zSo3nkjYqe6m77SgLKC5WEXJUTPY5mrugxqWQUaozrnp9TK7VBJ1BUCKPsGANvNuL7wUcFJkEYy1vri",
  "key19": "PaqWVH6HZaZEk6yWV3XJUSwbjKYm8barpfG8E3hnmGfNpR7D7opsk72fP4Vwg874jCA6izVUwMNgEBpjvKAyyVA",
  "key20": "2ZSJF2PwU4vEXgVGAQrirvu1J34eagZqnfJXnvjtrGjtcWyCKAPr39bnnyF7zceYUT6Wrs78dLY1WDADVDt5rVKP",
  "key21": "5SV7N3p9bmb1bc79ZAD9fdPEFMgdJHJqDmuokWYj1ML8sX3UMsJoe2CrmXybc6Xm8rjPxGTL2UQBirxFgqfL3g55",
  "key22": "3NVnPRZF1KsKT8fbG7nmF4eZATtfDCWEUpm6rTfhCR8eupkV81ESpLET4VHfNoBJRjAXPwtmXKEzudP5HwpQLsM",
  "key23": "A9b2kTEzNNLnygKq4EBeYTr7ZacYicMCXeHwTharL6QAT1KWbYA1o5RS7pNk6mMCy9xcY7H1wqXjyKKVVFLPYXQ",
  "key24": "4KJ51HTTz4wSnjf17JtNXwL4TCa1h32guLkdNFUsB3fUoRFbdef8mWazvXhrsaYQnaAWJW4Wr9T39gKXgyj66oeZ",
  "key25": "5VKTtUJn4nTM4MqAXbX9Y8AmZgQ1cHEwQUeW3CNyCwErEzJfymJqo1kqZ5yMiW37dEtKaciJZWbKXosMGzKiff1x",
  "key26": "2o5C6SRVTxdAmeG6jNmfkuibR23mJa5m15cvWYrBQQc9dms1zXFErVbYVdx8SLgyRXf977p6CprPZrF3BC1AMby3",
  "key27": "5msD33QpF8CeJkAhSru5BLpT87xaX7wk9QdW5C8X6coufdvCbo9D4ENU8nHtmMLcALzYYpvXvztnPNDcGU1VHwH2"
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
