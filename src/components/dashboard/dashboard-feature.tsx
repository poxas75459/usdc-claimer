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
    "Z62gdRJ2Vfx6ADsmH925XkRMwSTTofc4kSELSU6X1vqjxM2QWhJLrdRU9M1Bp7JKtR9cCXE3qkuj4KHv6k6S7ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxcuXKgLb85uvjj4hiEokcLUcUMerRdaRMmbi22UXQjfNbSPJGUAsyqMLzMPPSb4n85Y9yVWvnqt9S1orvsGeC",
  "key1": "4LS9YfFPXww6H7WHV1KHwRHiXuos4Q1YxKBEsLvtr1hS1J8cmYmypYN5WHPCGadQnirPoQ2CM7Xz29SJYEkJcjqz",
  "key2": "CmQNW8ppNDQ2NoRFnQ7UXE4gZ57BueT7W1SfchSFEnhaMTzjUwLq4db51E3gWUPZZata31sbAf15u7sydjYxPC8",
  "key3": "4eLrCawAEhsKCfHsqQxpZxGVE7B2uC5y4pH1YJctcwFXiCJjc2RPkFxpmJHP5FFobfU2nwvUSGQcXkJKympuXXDn",
  "key4": "Bj7YqQcBqLYD4obXBWLVnZTMbfaAy4hYZhv7d7L6fks4NPp22tvxiotBrbq4mSmtj13QfPGYmLgm9dTkifAXLeb",
  "key5": "5wbzu9f4FtgW7fa34WbisGrHhZfHq6rTMAjTaXkbRjCfPUUqSh7wVKd6Q3K1p9N1Z2P4dgxBeWK6ZiCKg6FdhEec",
  "key6": "2XGwV5bs1qaktmJ5KdT3XZgTtKV1dzwaS2A8zk66RKG4rScHosBrDVWEmPiQ4dD8uH9oNJMZ4c9YNsAPBp5YVb4S",
  "key7": "3222z6YHEkXdNSiLGKGDaapti7Wzss2RZ96C7L7cnWGnEku4dbixHjG6768SvirxQqEYxrZ2eAwuu69eEY9xWidz",
  "key8": "saWTDahbqEzb4eth57aLjueYkZetQB9FwvWhcFDdpWoxTa3Wgn7hwU1buChSCAPqfUBhLFYZikLhKnvWGFxqNP2",
  "key9": "Nry4G4jQ7fvzmutZqpT1WSSA5YjQSoV2qnstfnkx9P9QKMvsarZALyhZ3RcMUZA6yXzkdj181X8rq2LavZRYiUG",
  "key10": "4GTG2mBXd8qAbkCHP6s82hfya4NHvoTBYcCNWABWTup9AiceZ4EHyVrNcpWZTrbTphoCaSePKoUao6DfWyDAro1G",
  "key11": "YVd6BhCMfRvP9AJSDVSx7KsVnHZD1dUt3KTJVXBpWj9iesG4K99cPifj8T2PixhKHZ1QACefY7CAKcHxitnPhd1",
  "key12": "4sywqQdWJgpWZZhTCH7AH5Gf4nfJWKoijbePuqHNPsCBocAArNSYHmNmiK5vcN5CHtdJoTZwBp25bfDUZgYJ4QQD",
  "key13": "2LhVFUb5zDZFGFyuKTJGfYR1ewNnhkrF9k6He33fM9DWrWnhikYEfSd1iZCvrMdJ9wU5oAh3JAvrBGFWtKeEFBRQ",
  "key14": "27dLxQ4D6E2qaEKfYMpGfXJZrxyupsRfkG6Q3xW4EymrFKMSoUfvsBStcycFDs8u8P4H2SoY4WuzrQGAZK8ou3qQ",
  "key15": "oHMVGseC5cM5BzCFLjz5HQaxkaqsscY4WGjh6GcPwGL3h4nPitRYPuKAiYGMt9GHrvj5fXdrv1mdGNB2N7gqf8y",
  "key16": "4fxH5Y4x69vqhxWs2ayjatTzTFUbDZYytEnrt5bVkRxmQhzqWC2f7Hk9gbmN3Qx6nCyAUQLppdNT9HuDjrTmRq9v",
  "key17": "4N7j4y7kp4AmMmmjSGrRg8H7BsUrZNq98PKZGPNbMWFfMEhwYL8XhAxr9PA1KwaB8qMMWjBASEXSGEbHysR5vayW",
  "key18": "5LWrc1FhJoaknrXkPYGb2rqHQAbDjMcDgCP7GAR6H5sMZC66uzdygGmCn37shkn7deLwmVaGDFWeyASi4LiJGZwU",
  "key19": "4Wgs8MiS9Ekjk3s7M9iLunKnm7VGhfTbkL4kbpncUSdNjUwo5okbbsiJnuykTu6jRMSZwFoRs6FPTWL9KCC6rLdG",
  "key20": "5jn1XdxKhHxBt2ZwrgWGWTg6hCpXRxpeTdDe3HYDztUfatyH3P5m5hHZcAdoyVkD7ZaeYrZC7ePNbGEF8cbVxK2X",
  "key21": "5hpHSQna6wNzbsYJTQW9WPzBJ28QCakxAP4rgcaCVzBtFU92RjyiUxK3PK4nuV9E2hgu13CqM8GejxCZG5JrbBV9",
  "key22": "2KZcuNz9P3MjT29gmPRQtsVFf5YaUSeeZUaegc8PQZQBntoyFk84FdgY1ijZgUZa6wWnFH7hzqYyUARXtPyWs5ZB",
  "key23": "4SE3AA9HaVUoS2sz2Q91Fm856r6ZqpwnuaZC4qjvCyjyQJLtFtFeN8SzBfEMgFLSoGz5zX9gmvboGAEp2HvaGtAW",
  "key24": "2J6BQghjWpK7MoH9GvBn3wBWed2dXUXXBU5gxLhyHmj6RvNqtcs9CsUx2iwvsTjMq7a2NB6TsKapdHuzJgrB2bfY",
  "key25": "64c6AnNXaQs1u9JdHEw75nCcWQwCvHZP232cmBm8MePeRgKPPtdvkdok9MxcpTnV83ERbhXwM4jyWqje1dkTQoP4",
  "key26": "4fHzka5prqm2y2cTdkpmJH5U5waHTcAuEsqMonuQsQgyFov8U53Kh1gC4mgxQu3y4CWgirYPQUcegGam1PLFD8Sb",
  "key27": "WszbzSJmWQCPU6iMnXBcfJDfNwq7xyC5WtSNvRicxDU88voAE3buAtJGVpovqXAKcF3dxQxdpTRfBYZV3k5aVtZ",
  "key28": "3uHpUUT8HC7yeaELc6ZU5p6DNevrVFBLupNpzBJ22KkLFYnHkjb8VUyqGXSNZebdBMUvdi9BMb2PXgv5AeSpciSa",
  "key29": "5NETAnCtx9LNqbxJ3cviRpxyiwpTY3jq5VFU6S6wSjp3CLFHZiTgrhjWxFa2VC68qPNz2x339UbGm9jxntMkXtqB",
  "key30": "3xkn1NBHMSFHdzQQkCEh9eTVoPHbFUJ69keA4q4Xkyg1KVf7bQXTmp7ZTEm8o4FpWZpxDUeJrZbSmb8T7GsUCxxm",
  "key31": "QunJ7CMXJvXtDFBignynbrkLwzQcRZFkPUBuiEN3WL7xiFf966Ma4fahLKjLUnRxQGWhjY6s15V8h8GgrBpkz5X",
  "key32": "3YbwK6EiNSrxzN3URqxNdkJh1BjJKaiZUY2sXo3Lvhb9DEGWzSqzNUFLHzUJPMBTBXYSwSG1KaRcm3fssLR1niCj",
  "key33": "4i3CDj1in1cgafPDdR2T3Ww9gVM2KXkL6MiMhn3oD95B9uAWEXovjVDF8ZwSPzrkmYyfCh7E9hySZ3fvn1c2Gttm",
  "key34": "2XkUKMD1V9orXdjExHJxuukN9DhGJJgcUE8TsisM9NLNnUrgpiipfPWuqbJ4x8hAXg5iCyhY5uXPUsKxt2M2PmuG",
  "key35": "65kwoG67yECeqHZaQf856dGDFC6irfcAQNyj1yiQdW4qQndBoaBHh5oudDkue1yLpE8rgCkBD58mxgDzKhAoLkrN",
  "key36": "1NaG1ot82TFNnsxWCakhRifjEAHZtYcNu2RuN6PSoRzyYBd3pPHzWrmHH66tNfZYy5wksqxwA9HGBDJGChorBED",
  "key37": "59Ecpnx64P3yGZr3CaSeUc9FXYePmym7e5mP2vcoy2MCoy6FqvJm73y96KS1ZrQtrmZ37SYk6vQz5a51sZkRfa2X",
  "key38": "5z5dkerkJ8vA6H2YpaQWMkL8fWyvbUh8yi6ejMihhYzu4sCFqnFnCKMBm6k6RuF3a3oLkevCNJAZ7XZsbnYdynAd",
  "key39": "2BksvGqHjXX2Pd3Yy4HEPBY1pP2stNppmqT4f72NtxiFdoEGYdr8DXUZ83nDEwaEJKwL7GceRNrgp2cVPoBDvZRc",
  "key40": "3S9F73RFEEGB1BgiDRMTzbXhfvpz6giQtQ65mRhwLschrD1zUWzSp2KykcfCM6V8fBR4TQYxVGMQA8TPqVA2hbPR",
  "key41": "4VwCUSYEobS6tZXc2A6pRCep7tQvRqAHL6h9fSUHAnSM44kEm1uLB16qicT3WKehRUZLYVGw7wuBYuvWXzNeyqCp",
  "key42": "5PZWHiCU6U9wRMbWGTUvK6NcPtnhK45GQ6yEivWa6ktFM4jrDrDAdeiM8EcB7wd3PwcqNQimD24NPGWQmVSAeuVK",
  "key43": "4jwtSjLS7KwcT7hCE8MGTK6zvWieZfD4xcVxukKkiioxVWZy36nFythvP3NGxpeMx9MGYMbUFzWDNMpMPpsSQCkx",
  "key44": "3ByV51DJWedv1da8LqnfUcdpBEWEnUXdgFzvrRnAhpnfkbPog2Ni1Zd2HCPnbLGvfmzY18ypvkb6XuEvqyGTSoid",
  "key45": "2MzvFDaaDRi9yp3mtHnHraQMYFca1Kc1jVtdziTzX6qgF7SHVmRSeKDjnCqN5KbxGRQ45H9UbRhccQ55EL2jhWuV"
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
