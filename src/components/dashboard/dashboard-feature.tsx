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
    "5fdd9w4h1gq3hPpX3XmqpaHXTsrJVvHaK5mrTMsieuLdK3eun2xAQFVyhuTDFXUPoVMUx7sPzcWhBjWvvESvMy4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBmg44PmTaoqcmrH4rVrPSZnYot6TAs1LSpqJwvoCnLPq2oz6nFTeh4i6vnX4YTRBJpurPTG25tthktygHtAkGy",
  "key1": "5b35fuaGD8JQ5rxDxQtSxVXFafPXLUYkKpUXhnMfRTW5PCV8bv9Pc1L5e8bEfCpS3hZivmtbcBaRgzk31xjoh8mM",
  "key2": "4E5cJ9LKEkEg3BFutdoeujkpGLGnMEG3DHubMeuA74wTmss8o2gxejE82eXDj6mJBpuPEtj4KF293ysRhcfpxRrV",
  "key3": "3DKApG3XARAegP44E4TjswompF8Y4rwd1JFwcuS2mL1ExLUEUxsyh7tCZe96eAY3BQSj2ecTNXM9fHeMxdZe3TFF",
  "key4": "4iGVJWDw5ryDChWJ8qMv6qrnhDVZYynpHSQ6JEBTRxYYtXy7aqHJ1XkVdaZtw5Y5n1Z6PKsY6dZsXUinNLkFDxQ3",
  "key5": "5D5vgybLHwDsrib5fXWnhMiwJ9k7CUCjjiVaNa96PL1Pg9ZYeiVnMzh9shatyd5XdW7H1H1otwp2d4jwo3777Hhe",
  "key6": "3pirxK7bgU1hu5xQDDsDuczueZ3fPmwiFKYG5BQTY3tib3yNiREJGmZmr9s5Fg4qt4Ke8tsxQDPAwhK7fWQAgLhc",
  "key7": "GUkSfpvxJ54uNYxGUisKknxiUHaYcT6ZLFbHSwkuh9d9PC2ouv8GK7tXkd83SFmGBf3a9ZpaMnMVwzKJ4x5brVz",
  "key8": "avQnzmCvJFdcxLTNdLzrMwjbS2EKzxCP2WTXD9jSf2RUz7JgkkKZuxRuWPq7oztUSvriPdB9warDNqgML6CoJHX",
  "key9": "5G72jezuYdoZ3i5q5xwGH7r286NVu1LKKdAhgoEcGNbog3NzdBLYkjF1ACPfqcQ4o3aQXh3zWZTwAC2sxyGAQ6DJ",
  "key10": "4JzwF3AHwtdeCnTKahAdYTS5oAwkmPEt22JNu8kb3Jfo7zkMRLGpoEcCirWcDZNQ956pBtEpyfnyGurRmNoXKCCP",
  "key11": "5uFviTPET423Hmp8H9u2g7dCHiKhNuSWnmbtqSkoA4uo2WX3UGA8nxNdXZ9AQDyJdv6gJjsrWmsYp1gZyrD5sPcs",
  "key12": "2hLN3PvwjDfEAY9whZbbGvYD9jntjipam3Y3vY4vRyKH3ErWg8oPBZZqbNrcq2L4kyedJghdV8NHuYAWHTXkaCNG",
  "key13": "5VQ3ch25vvfHA8qjdGyDn1Hi9brxGy9fGc6SsdMyD9fnX6wRg323BGTJFH6BjWeYiMjhwoWZRYYHL81rp5MhLwq7",
  "key14": "oxRFstHrkpzSNyHzjJgi5cB7PtQXzhFRQGcoJ78PxKa8Y7Z2o1vieF6QuY3fRAEMd2J1oLaa7xhus6dB8vk8RdM",
  "key15": "62b5cEPrRXMGP5ZgPZQCCBvAsoZnTUHoy8poPinv667PL3E6SJApsm4RLKB8EQnDY8AWdCE8JATzgTbCm16Y5aqS",
  "key16": "4RjsKM1tXNf85eSjCshJbeEm8rdaGfAVDgtoYdw9Yv6M5L2ZevidJeCteBViZC5Cckkpkv5SaZR3MR3fm1gSrphy",
  "key17": "3tPtJpCL8gj4wCAk2phvKuvuZ5V7iPH6wD2WHVdbyKiLffo6bD6KqbmCD6JZ3cLcEXCoSCv94mXkhQSeC6mCASTb",
  "key18": "66ckWGLHrLvKmCP1fvakK6dmZAjkaLfFooQpt6vxchVETiN9AgmGtmkDj6R5fm75bsukg7vucZUvMcix4Az159ky",
  "key19": "2zNaHQhgywGZPZxU2NAua9sPbB8bLeBmkge4xg3P3AE6QNodYY7tx2Wy4cm4mbtkKZDnjeeMG8owzmmDmzegxmiT",
  "key20": "3bjt1hhQRuW6MHFR3cbyWDXBhHNhMiawgsgXZHrjRxe9XrgKVdz2GcMLGWKpTCCc1i3cdRdFoFb8jgz9y2HoN9xV",
  "key21": "3Xjen62JmPfqmWR85CrtvWFHAqiBWXssMJX2ps3b5XqKnTaaT9rffimyqnjCDUcSTdEVAbUp4XPQYNFQYoE9Ngvi",
  "key22": "2tH11DWA8EyL4UmZVJKABKgRLXp96KFyeZa8qi7uTyr8gaGXA8UEndNxeLiJ168Afo6HfA4A3An41JaHBSNDRyz6",
  "key23": "2F8f8Ka1Z9xeFBabAfPfTEjUGVM8fHKxxJURtyVAsMov85APQVaSggSuBFxRfmC8QAQcAjKLsmhfj5Bdh9St5pn7",
  "key24": "EKhGkcf918dVuHDcS6Hg45ZvnvpuU2mDBmEaD4bBS3SCfuPcGGVRa592sJsJrJcHmSu5yVQg4RpwVmsA44VRhCZ",
  "key25": "4Hp5J8Yg6FiKpro7DfXCaZCyE6tZuAnz6NAtvuMyTBoAoKK6tns46MjaR2yYGf4Pd2925ztRvMdFdRSxzDuNTzjM",
  "key26": "4WB6RRxzjA6C8HiaYeTgwH2tWPqeH8x4DE4CWfkHwZj8NioZYYXJdSWabfWZbfcZmMMfyqidYemJrpLC44zRc1di",
  "key27": "4Qut7ya3NzrEEe8ct33PNzsrMxjtLDTTowdeqNetmbkUEhg9R8WrwM1Boe3x62FYRtn3Zsgkaxf5nZd19B54MX2b",
  "key28": "5KRPLiqEwnkoPQm9CkSnxF9hUA51M6JghKaD46geFiypwywoMhpk9m8xicHBs5wLR16sUj5ECEktrETB5nCq4UFr",
  "key29": "5XezhCMZBvYC5fUnbKdxXVw5NGuqh82qTFa3DfDKydNAVKwcKSP3dXSZ4x1rcK612b4Sfc3WGebEQzdhaEkEmAEE",
  "key30": "4ae7PgcS7TM2mQaPHjBzwTjnEtJUac5zBrdRLGt7PsK5EsK9MqXFXSLyP3QU1HrUgNo8rzxBgcmSZX37tYuZiWp4",
  "key31": "7zuxofPYtYhvgXmkSk8mfdCRTLiiJ9M6QpwwJVN2MfkcoEXaJihkVCdSi8EhBEy7XJHqjHKMzvvi4RXbTuS7HwN",
  "key32": "2AZoqGKcUFRZwNuKE5UdyBTXWMzxx5yusEZFLWJrfC3jegqHK3sLUniCPBgEYxG7DERpGCNwERpXR6LZknBwSJB1",
  "key33": "5fExGzbHLKP9wYGR34SCz7RttTDNWxxchVoVog7UDQfVZz9Pu8fYbXXmvAfUvZwrTq69BH3nVQTHVHrsqubHKrZD",
  "key34": "2fsCnpzFYvxxQ2mpNWvUMztTDhuu77hC6Zibf83jcw1VZYYHLAeQaQAx2ydroty7kgSKa2ELV5kyr5tSboY5KXJf",
  "key35": "4mdN5iA1juYmkoiu5BDXDjnTVXQfyKT9Q4zUMZUzHbnfv17qu1a835orBKngfzTkccB4j8jiUTSeCpJgJsZPr7XG",
  "key36": "5aeQHnm3t2yRqopZFXL9qrRrDT1cd8Y2UH5eyxnjnENQFiYvmFr8RXZbv9R5t6ro4uCfdgFowNWvGNDvcHoaDMaW",
  "key37": "5vozDQV5dhwxQiuSRMNxNZp9TZV63ymMaUQoJYHLT9XJUNNY6NDLTvNfNU3eMn85bSQhVfqqCqXbWVoa42yQ4iv5",
  "key38": "2EzcjztnZU6iV8r6ptsUCCBsdNzux8FJqMcMw3VUkjJUhNPW3r7txSPKXDJkns7pUsuLEChGCB5ZSW5yjafoMGNa",
  "key39": "5sGDMxpdd57wwguvvw3FqRJH3SSrWR74hynm6TfJihRDCWdn5sWCDvifgbSGa2CZCGJ9p6M9WwfnXEGVQ4WyfpD3",
  "key40": "5oH7teNPBqQME6WwnJsr2AQWU5KF6cbmXAB7iW9DxZrAc7DkDySrWkjpZaJCwhGQjPNqvfSMZiY5CFsnRAmqx321",
  "key41": "33VmVdaBqXDTW5KDYv3r3mifCsHpT6sSwK7M8YLAVDCdandx6wLZpzUkzgJ4UvwM7PNaNaLJw8bdJg53zsRgCGN3",
  "key42": "i2Y6udPN1g9Za2Q7F8zfsBvvGkCjAYeAepF4Aj8QTYwQdjyWk3fkxBhqVZVmLURxBMCTz4sEnpvdT5AtQm9Lzij",
  "key43": "2FS5EQKbh3phEBXoXW71RBDkUEmqZzmdiZGzoeAgg3MB1G9QF9vji3MmzP3xiykNLSfdNwRHBN6Q4vbakWWn8mL4",
  "key44": "4uTYJdNmz2JqyxoxvFqitFu6hm1z1Ee2z7eLG3Gr1eeK2TjNeaaCVbzv5aaNquqXgAyYsGdYp2y2bmf619oHzbLD",
  "key45": "4Twpi4eM22VHYBuw9JDrCGKruuDi4J7CsYD8hf2DJ6Tw472mP8dhFAjv8oQXMSDPpDLzEsQkJHXwVUmTsxG68sT4",
  "key46": "4oT4CK7MvYKGKbJNAVwqXS2dFivxopjmG61m8vaQtxbXawgxaGiPaEoiRcUYLKUn1bCfd1m8cuix35tuaQPb5b3e"
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
