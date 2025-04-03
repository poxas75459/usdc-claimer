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
    "vN5cSpnrQzy3jHg964MRoBJpSiY1tbkvgBnSHvwM7Hysa27PdEhq3waybFgADCkU1YbVGkgJ1txMQYfY5H2z1ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSaxgCBL5ToeaMHCzoB8nKBykVrCF9UMbjE2MKV6b7xVZ11pYH1cCVYUKVXWJHsyNao9KBckiRutYk8392JxBZT",
  "key1": "4i5ML5PrhQHgCrz7CmEKTpRjPJXd727Ay6smbZMBX57QH2mdbPamNb3LdAHw4ETv4qYSAkZ762eeed5zmcWkzjV5",
  "key2": "95qDgzmd6RwXhrbvFTWd7vPeJaoTPd2vFNfcJeMxNa7bYgnkh72jzKUWxVE9QWhYfvZ631sWQwdkm3pFREbKyDG",
  "key3": "CYnhueodVUti1pvrLRgaHCLKC85qq1TcV2Yb7k5BgTnAtNv5XgcxUUHL88HUupTeHjNbQZsqyqo4DxQEX1L5WBt",
  "key4": "2Q2CG1R1cKWhAQVyCh2N4WdF3jf6sJ9d7UWYS4AWahZcJUr6sSrt9VmwvUGiHK2JaRwAEFS6QxJLAs7FbPzh9YEt",
  "key5": "x53UeJJJ7qk1V8nnfUxpcDsk8VoWix91M9Yek7iwxyLzUfAQdKT3SaC16R3KCFEYajmJ7esg6bMMJ5px8CGnEPJ",
  "key6": "nHLQCLn86J2mgrw9N1adTprK329b9Uc3Lfo1r1kGtpFBNrDCrmSNRRF8QSRDWk2rChYe3qKYduAjZApcnBV13J9",
  "key7": "2PZkkyzxqrJo3bL9ozAm1caN1Ff9wqBniHALwqaD1xCT8xaKwBDSePrbBLDPXRcmU1XnUcshRKiqd2D9nQxryoKR",
  "key8": "2SHPeNTHLgNwaDGAZanCTKzTazVAh26erCzY8quuKxgyf52bSgpjTBzHf8TU9AQas91UiaBKMbYCNhKhQyeC5TR",
  "key9": "4cyLALFJ5ymhtkLR4V9NLnhakQT4422vZsAXA5eecNJA3gnm1pAUwEKCwkQYBcGEkCaD3ztEDZJgviAjsg17bygc",
  "key10": "2dyEyk5YmtWVB7USDAgQCwsGD6GnASR33keo3FJFyqEj2nJMDEAimVgFNcKKfS9GBaMT6vQCqe1hhYUvnopeMGcg",
  "key11": "4SPEuvTijvu1XsUY4Znfr1f9BBTj8vkLeYYp4TeKK6mBd3d24iqtznu57zKyhWKcLrjFugdcuceGDbdcZtLXTSnD",
  "key12": "4pfLyP6jsWiNiBuaKrSVjQ2Ze2xcdbhGpQZ6puLWmR9pE69eLgK3XL1RY7u9Q2ToHnEefSJXxfTBKBfmd17b3nUn",
  "key13": "hxvbnsiePyPiP4TaTqZRoTfN3EsmCEKgni72PPytU12QbJkmMYZ9a9jhXt8AxMyJunq6CLtz9yQwZErz7AU7Li7",
  "key14": "5JLJvokd7Up4jgZmJvJ5kTQHp8LkxiL43D28nPZeedQbNaiUEorHzQkkFMWvdPBYi4C4FBBUNDmjKyR9Z1burL4M",
  "key15": "ZztDM3FRHw9gH4FMyHPhZGMg5vARS5s3epAbh8Yu25chQmtH2kMLfRaezTTyJs27YNEDozeRcApBvaALtv5ypAm",
  "key16": "QyzhLaB9udg3PRs6pWHQ1z77zsVv8QDJtf7BpwvuLvHLRNsvbjd1VKpSU7ScXxvY17KbsixG25aDmnBghfKrT8E",
  "key17": "5hoKBfiEXVYVbYxXaKYHHqMMNmx3JFAkyWr7QzkUcxBqF4YtotG3h4Zc9LXoj41crF6RPHY92SLNaG62kKDx3D29",
  "key18": "xbmfwkUpRJCdKMnWCpFv7jrEXjH8maQ4VQnemfASbJU8kkQdGr4xrccP69KPb2BTrSauaaKWamfCVd7tt4GWDAK",
  "key19": "113HN4BVM4ENmQ32PRMRsP747NSM3CmQ6mHxgeR57rq3Y95Rbi1U9pueWJGmF74D1igEZVkbSjqwD7LY4qezd7c",
  "key20": "2VrKzujwi7UAfeZxdaSwjfXxACJoAHhDPC9wEGPiZ13ok2XL4f6E9hiVMzekE8xzTB7vVqxpiqBxb96XVZYg6N3o",
  "key21": "qPNfXw2kKsM9GTJRuzGsYHV1dA5kxYx4JryPRxbaZhLxNc228iXnS8L8XS6JsnG3idoVLJDyuckWNgSEKv6FSn1",
  "key22": "2T46XqvrojhT82dc7n1dFEFjjGpLasSNxke6JYaWHdN6pQfZVsF6eEvUrsdHYEu8VxmzsoWgkGSfodCdtL3pjyF9",
  "key23": "3zuDEpnjvrCziSH5mdMTmCtoUTi6wqCEzvCpfwHHUxjTvefV8qtThtqdvokbxXZrySgcEVPaY3Y2MHXGU3Zp11Cs",
  "key24": "4Unv4R66Y1tD2mV44erSMidajz39m4wayuVot1ZrX2RXrMnazag3e7WbLshJAcZxDY3CBG8HZeC3SfcGbKP93gyQ",
  "key25": "42WwBCSudoy6BZyRrRPXUYN5U9pQiKCbD3M1ZDKWJLgaHbCm9iXDvRS2wRiJLp6JAqHv5gc7AxLTrjmxS8Syh4TN",
  "key26": "5tUoTRbsWAzrb7TNGo2mBGK2DQ3iEXKoCk1bPsQAG3PR234SXjE2gi9VwQTUiZzhJ4dMi5onPoUwMHsPaZqaPMeL",
  "key27": "3kPTydhauD12NgBxuDqd1JNGzWKyPhLz6h36TJLFXuiXhv4sH2AzmWm1oNnorDAQnA2zzvP5F6Ag9iinVoLmXG3c",
  "key28": "34hEAqkAPhiwhg5QakLJtZ4qJzqYLYpjRroGV22wBdfkKQ6BQAxss5QzGdhqW6rPqZnv7PzbYVr2EqJimCV1W42r",
  "key29": "4zfGtcLiEPKeyRSW3zbxeBBsfe8CuauouixSQiPSmjtf4YjdpWeRmnFtWdqbiyXMUHmhXafSUpBSEX3AGsjaTfRr",
  "key30": "2kttwWF3vftaKHJvH9yh3mhYiMAbnnvaqLF7cV2RojJ3cGpwqtSfL8fTeeFZVQ7xN2B3SadpzoaehR69fsnjN4kq",
  "key31": "WDxHJ56BCddn4F3YQea7T4nLxMEGeNszdtS1sXP2BQrCTG2EgAaMwnHCUsRiW2D8sdT3ww9YWoZBGBf5hvY9khH",
  "key32": "LDTN118PTpVK8UiZpANmK2o9amJYhSbnwQCEE9AULGQmaYupaMNeeGNnRvgw9gqRYAkNXxFyEgSFxq3WVQeVDC4",
  "key33": "25SZkhCpjmuxSXfo1cXwkU1s7xLDotGHLnic7zzqQgHb85Ug7fS9hF5HFuZkKP7BCBsnfM56SG9P2nJW9YbSDns8",
  "key34": "43fuD2LLLZKkY5GAd88qwRMBbZdB9fsNa6rYEvqfZaMySaNPjbjeHSoaBc8WfaGuRpZvRfGaH2XCbV1VnKUTPVmc",
  "key35": "5XK2Ho7fDWUnMkg7SEXU1TaxP7fePpxsfrMCWc9WtTLZAtx6psfDMmRRp641ibS27iBnDvnGKxPSDAwwd9BBZoDV",
  "key36": "2UKGUkFbGUvzw7qTaNwjuKKpzcThVa6jrzrVFbzFvraA3diXT4u8onU21S3VoF4LtM7cAwrKBTYCMfz5uoqASWVJ",
  "key37": "bnEgDZvfbuMboFFdnx7nsbiNuJUgjbtVhiqp3gAY752E48ZMtQWJWyHLyrfeDhdQF5Xjp9e3YXJn4ri7neJ1Dex",
  "key38": "3z8Z2tHG5CrqAbaN4xMjb114GKHUrj8nuP4NdmDF1rNLeckUTLwJiMHLNkbJQi2YNMgRvc8C8T8anWV3QRKqw4rv",
  "key39": "3VhMonJ285ehB5TcEpcsLs4A1MH52ZJwr55oThFJ1XJyYczFZNgc5tpxFd2vpuA9EuCzZndQHFk5Qsuy24U1wmyW",
  "key40": "5LdjBfSbJTwfEw1tNfZ6XMSjukrxm6utmZRtANoZWTWjFLtBTaGPavCZpyPuvUYVMw3Z47eHGiwXviVcB8hkeAQe",
  "key41": "3AeeWtYWwVxpppPUiD5qMamjqBeRVQsiBgWSpCkRxULHRZsjYRnyt5sErYcCnuGgYfYPmegzSth1JBSZtLJaKY5w",
  "key42": "3evEpk8YFrr7fykftX1c8yXGsHnSWFFcqQZYT6UBq3KAV8ppWbeorbtBL6wvSvXaddnht8fjmVYyjiWYNPz6zH5b",
  "key43": "3uUjTRG8RVY8i1Su9VXf6h5G3s724mBgX633SvvqKmbnYW4Pc9LkZuxbQDhvkD1SRNNEWokisbeYwjoruNzrurHM",
  "key44": "2B1Sy3HvFKpqLDBuf13jqgSZwcYj88B2vw4kKk9y9grNeeEuAyP8XpeBsvB3jcDwofuoFgDAGcyMdhV6M7b7vpZh",
  "key45": "3YBJsJWsvfyso3BixPUmEsCs6fUMXT8EexAxDFnTdWegcPjgEBJFU118nRxxA68n6jtWqHV79hr7XuNw7AJcjpfJ",
  "key46": "4kBBHmVHsRxsUeFA94PQdeRoKSpaHSb94ADbE3SRHu5bsGStuKGN6PwAaRgmHxmpHVYsuCwcWRiSb2SoZ4dyCpQz",
  "key47": "5qAnqL75krZF6sigwoeppZSej9SkrAGggB1nkT7cNeWsS4o31nFqth75UzZER25vqyCX7NZDGiNSSkE57DXnDM6E",
  "key48": "3yWGgzzQPK4WJNnbRZLj3DNqKM7WjZbXJBCRDNGLQ6j18jpq5SRV9cThZjacyZkuusnW4FE2D3DxR1rYLscHMQBW"
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
