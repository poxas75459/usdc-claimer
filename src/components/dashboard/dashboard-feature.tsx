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
    "49CpEUcSCFhbpvcmkkBoL727k1YoqT8cbRUGbWwVDM89wMpq1hvdEYyQRP4rw44H7gRABJ6j8P1pdBFNqrZzAwPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YprMLfeMr1CritF8zPeRkZkMz7tonSxvtUWoP8D1D94QGuD67rdZBSeXf15ygqYX4ehrHDr1Mfdaki2ibiSp1x9",
  "key1": "2gHkQeePMfMAu43KQNDiaV3RjG45Pv9iH851571Kksnc2qR3yZJR72n1QqPUUTsKcMV3XLRawJJ3GZmBaKk8KbnT",
  "key2": "2fYqUv3PpPavfDRkCxxzJU8HtAMBuCLMBTjdBixCsacrTEgC7t5tAqsDaeuaDz49nxFoijNfPQZ37dGCJQuvDn2n",
  "key3": "5FzXRUKB9wr3XfZ9JkoNq34irpZpz1E8LJcpqVBpVrUPY34S4u4fK3JDAYybFmpsYTG2VZ3fwoUXBc8S856b3UE6",
  "key4": "2jdCLYph7ArfLyTv3ues2XrgNdLdPCf31QAosNuo24gdX2ZoAYZ2Q8H3AEjE4gTsaderUg7bU6xRFqdgbdjcRera",
  "key5": "2AzxvD826DZngTKivzrA4AkmDop7ybiNhqDjjgZtP4TkNzq976b6a9aYjUEbtfZTekXB6od81gDDMQY4r8urMNqV",
  "key6": "3zGVGaqnUoJK7xzTus9yYUGjo66cfFiKnnq1cAbtpMKPXNe59TiuLf5wcSZjbLmotqDxvJozmbR4ttRExNgGSMVK",
  "key7": "28EemLnGTYrTPUkvW8a3fcADY6BoBTZh7mae9DNhKbCiJxXmXqtaotdU3RYUyi1YGtepqTTWPP8A9H2xcGpeW2gy",
  "key8": "4AqCPV3x9izfh3R5hXNCpgDJxwDtS8FWpp5axDpWWVHHHescGVbub1BAotnsbJ7dgcXSYnEWa3uiXcuhY3ErEZvK",
  "key9": "5LnWLLrWbaUbf3jipe9Xjq8C8XjAPi4JtqoVzUEex2tcZppG47QyxBjUVdVj3qzNgJ5yNaQhCKYdtWB5hGwbvSkj",
  "key10": "azGR71sj5HkUXzdEitHv9JBe6s1SZsc3d5ygHPTMFDAkvuFF6wpbaax732EiSpdEsc5XXw9h5dBLkwKWCsNAnj7",
  "key11": "3EMJaSupjtpUWi7brHt3xyWG4HbrcAvWQx1JczBvEWGuEbjqokrW6iD7ckEumFHrBFAFs6VErssPmNEoMH3LbySn",
  "key12": "4wvbD31RDu7mfTuFe7VUZDmMRKq1jotQUPiff6nApHMSGQrJQGAtu4FVtKkMtYfs8Dp6CLGJ2naDWV2s7yXUnj3m",
  "key13": "4giKXNSW4d8gn84ZdZLBHiZhZU2shENPwqrD9UoNKcFupFjW1Y6ZHhexA8vnEMXGohTuQvPQaT5MYgKoKdc7txvS",
  "key14": "5KzfBnLcy4AUgAaCvrVLuAysjC6kQYovX4bS34e2pyDxDpVzGihLmmgTAvErGNRx21ftTStQKEy4hpdF8ndEuCk2",
  "key15": "G5Vnid5G5q7mDHZenCaUv2R95fMAytjZQeqQQcSP7wmQzx9Ejx7tnkUM62DtaxoXMKDFJ53W7vBycK2vXVVUSDR",
  "key16": "2PecjXQXTaWq1a7maKABRCSAnsmZiHhQFrgU9ZzYTCSdTe8aoSfYw7sLJH96sjs8v3AcamDw6Mo4nZzC18j2Ckhy",
  "key17": "5HM9spgXWG5EmBHiiXYdWMfrRjjz85yXjufLnJtGzCLCwwQUMurNJENhD2rWhBxcqSq6fopJBJ2J1DCxdr1c2HHq",
  "key18": "4F7DM6gVuy4u4hUL1rbt14PshsHkMDSy3fFDE2dJK8ssrvgaN3tPr21kcxcjkpPz3dniUvvnCQeHiL8L3yVHa9RD",
  "key19": "4u3R2tYo34enu27vyt4UcU6SRQa9vEaLBPNcir5xB7cR7f9EA63LAGThdeqX3j1kihcetRhsBsp9VeAt4sEJ7e5X",
  "key20": "4A3SaUnQYckCz981xrVQ81yqUY5JmY26ZJTR2bx71dQ4EuAwQW51vtmtQY5xmrsSDQmpt4dweKhcUdDCcz3oeioL",
  "key21": "5sx1Stj4Lc9kAkX4S2X8q9ek3PZYNHhQg57NwSfivBBkD3VKGAVMWewUy3kbKahUSKh2sFWpzVCELcwKPGT1jDcL",
  "key22": "3fFmSrujJRwhzb5ngVNHQmhRGssPhTArX7ybbwDzxtWPXFqojGQ34B5bZMRhqg1zMuM6kxD67ny5sdSHUmwdoDg9",
  "key23": "3MeJwgDA72oYtMaWXhLYjek1ojZhhQTtKpZa1ANboAso6ymdes3HDT9TxkVsTEhVrkpekX6eBMrZfLDaecREx8Ff",
  "key24": "51VxmFVPzLQ3i55R8837tvXJH1bLaWFZNe3E445Qr9iTPqVqwQPi9Jf4zge8SQyURPS2AhzcmLh5N951J574suGj",
  "key25": "4KisZPGKpjSTUUe5HbnE61kCiwD51msWHcpqHMEnqa9N4R85tBfNhaqx9WtefnUcUQoBywoMCE2ZgLjiWceN4Gyd",
  "key26": "3MQ6yeUzTYZPg6ruqKfsbxx1VT2tFrioTf1AYHnUMzuJxZaY1o3eA6UDyE6afe9pKSLXVrrenAQmczU6TXbThWhV",
  "key27": "4SUMNm9eZVjcyiQnYe372XEpcrNUKzQdhhhf5LrXfnxB45sBCH7KMQnGspnZCx5jWBFiMdLE4VeEhYdFoQNe9SS7",
  "key28": "5NcjQwosWVYkkh7zaWMQor5qjytzKe77XZzd8mqDhMhEMEa1p1wE3noqyVJyEfC2ypyMDm96Y4Uo9Qn7RhoMCNm",
  "key29": "FcUVwwa8eSHWkSzjfqLrnQdNjXHnxUBjzgmXwK5j5skUxkQvfp7i1y1AuZvdH27hjFT4JfyC7N2UiUnk56XH9Bb",
  "key30": "56s3rxbNCFS5wDDg3tXgjDuL2SGWTD4zx5tMBmprTZXj4yJ4ZsFCvTzpBYBkJiWhPwTLhdzevXgAsYNWjjCS3nrX",
  "key31": "Qu8Lqc4UMJy8gmJeGN7zttT81nXVd52aE8w6sHEaZqGgBQqm3HVX9xxcZEVnR2zxk92qxFL8nZix6gK1WBYFUuB",
  "key32": "2ubyMgubUhRRcs2kfZKse5QfxB121iTYJeJTNyM7pUptbBJFomELuoF9x8Ae3zxTQMmd3RWzxkJtVqnZV2wW2Gsj",
  "key33": "3QZZ82KDJ7znz3hk4o88CPQx4pT7sEeRB5tBAo9rNP4vgb3yNKiKu8PGqiRwpL7R4TSqbQkzMQuwRLCn3T6gCDWW",
  "key34": "5XaMzwHnFyf96to6CnGHTfLTkyDNN3XfXCN5s37QMYE4TLqqxSHjwoTuJ4eY7wAtN7YWU3KfF9ircHR5KXHAxA93",
  "key35": "4JGozapCsEops8BJRJGSn9fMc2ZW3dnMQyHSwjFKZDaoh1AkXDNkK7migrzQcMPjjsfjETp93E9aYDBrgfNG3941",
  "key36": "3p1UKA4ZgATHnf6UoRMxcgR1Dokj9P84VH8W24sFJCVenycUx43ULa2HWQptLH6z1Tr9ofYPpnRbTRsnFC3JDDZm",
  "key37": "4jHfbjR7PJaXMKqP88chtZzNsxmjFxXuXevAGymgguyYUyssnn5k1TmsqQVLd8nYPvSTtvdmxCiv5vRxCUCTY1PB",
  "key38": "5ZzP79BBZ3x6TjyM5W6RSqjRZnFZF9hxPqxk6fMUGvAJ3gx6UkqNfZVTibbs6nhrXQugVdDcqAxA8dBGdLTnhwYb",
  "key39": "2ebrovCmvmpsu98bZnvnZdERJE2M21qwkHosDZDR4rDpACCwmECmsFP7adBVgggojKdmjL4B9Y2pwFc9MoWGJVjW",
  "key40": "4T1C3kpQpNtT4iWKeiMYytyyL3hcsvjVAuqaTHAgTNdVGTFzHCiBXDcqVNFQZqsyQYZ1NtAosEh1DEoZEGNTLedu",
  "key41": "n4ySoZFW8cwXV15LBuB4Qs2zSG1UZXWKVeEsqpLvMuCjx3JVWmw55bDLPWc7pD48c7PqnBxgKR363tw89itpLJb"
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
