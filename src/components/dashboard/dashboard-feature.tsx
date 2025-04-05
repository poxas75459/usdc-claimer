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
    "58SyBBPJL429kZEThAHXBDEaWZk9NRC4dFKMSuCVJL6fWoG2fq62ACmkvDCPi78AEnpXDmiT7cGCkGisrb7U7obg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VuQkt2jNYHoKrgCWFLu67rWzLCHkZd8BfdiobGwvhSwS26c7pZKr8XxQf6k71WS9eMEjQSHcgy7KazPSx4Z8jVw",
  "key1": "RQGMYCMxQ4DBZstrKh9jwRU1TjgMUBPtQwPMYPbdHE8PbLnLada6KuAZEvJcRYxMU2RHG67hckvVVL7GAMoMCzE",
  "key2": "5veMNcVpU64Aju8DwR9u6xQkWZJHmweELP2nBjHqJgENc84rNCbwrvHyUda1gUGU5QJkPK8M6tRws4brkpzK8J87",
  "key3": "3G7vDG6MCfQzTZyRPPgDixz9ovgUvi8keGCcktuEe8LT5uuWYJCrkkGAUCfTASk2csRoT2J9Vo3TiuAsAQ8cSQve",
  "key4": "2Di23u667vJobV2q79K2gPBtdrwNFfRjdoPCDPWb1RbFHeimVm3BL6pfJMuc23q7tsHUnnWdQJHogF3ea6vubgQX",
  "key5": "2CjhEehGKYjUYYfB2ftBdaa2bLXVCnNFpZtaYYfuLyMdry513RJ55GA9ca6ghi4PGuKbwUK9D1W1Ypj1qhzeyCbL",
  "key6": "4BHhuKMh8Q3PhXo79HJEaFrSnPYvCupj37VsWkrioSbTv9zj1yTDAfcv95d9EExv4S2fLeQGSDadJas5QwvkqB5F",
  "key7": "56VZDn2dVv1ibVbSPYQjob4rw43TUBugWeNYpBje5UEQrbVaJX12ziogWB9NDuNXGJzvx4WpBnZ2tRRrTXvpe93B",
  "key8": "4F75iPtABB57mK4QUDjyZcRebWeH69Hq8nczxcgWJgCHR6PGk17bc3DkgH5C5xw9jLuTRkemWF8h6AXk98HU6S5f",
  "key9": "3uwPiUWVSahteqpxVwbXAt6hViC83c88Bp2BgrM5ktWAZFyS43GN6qaBR3EsLVdsc26AVCoUX6brXtC8ecAymshn",
  "key10": "3EyTK576zUXJ7SFhRBhDfHag9vvAYQj7T1gf6ecSa4bJw5JcP8xtQGBKrC9njfRVKj7KsGqv1QXnN5kb18sQsS2T",
  "key11": "5XUKnHtg8MkRp229zdgbKSCCgxyUSrivYqh7YmJst64ea8TYSi5iHeJ9rywdDMxuP3JNnFiNqB4x6X4K7RN8cGox",
  "key12": "4gWxbwTq7QsXS9rpZgdXEc16Za1d14CECHezi1cCEMmuq2f6djSxrDozbPEuX2X1CKijm3WP8E6pCYTdi78c3zke",
  "key13": "35vCaR2cZkBoKTHdiSe1LWfXMfaqWM4SQrAcU947PKcYgZD9kqT6TadkgWsMU2LobTDwBesoEexZZ3NRyUAheTLm",
  "key14": "3nrDgk2MmgtSrQ8v917zrVnDQRVv7N3XgBPcp6TjmRKngijw8iduMNRUPDu82FxTAMXVDPSBnDiqX3xzGieebpYF",
  "key15": "5oCuEnZru15MPRjmzE1JoMRskHBqbKAchb6fvkEPqgMYLrHzELqqWARWjY4q1arMDgCdXUMWyXSuA13BAoHNx289",
  "key16": "5gwDq6sHLBYAGbazatTCiQPeRr6YTqXvep7ya51PCSQSMsbTDyqFeR2fmLb9ZtEsFPcmWMWepAxAbVTBUEM8Uc24",
  "key17": "3pZ38YfjKspLCciFMhbBbFgv9hDuKs5Np14YkSrktc484uHJxzY4qnWHPwNwrVYQ4oyWBNmjtDoAsC9qUTP9aLpa",
  "key18": "2QfP2zt3tPckzxkhAQXDeD9YPoxSU2RqrwHbt3vvZsx9rFWs9Nfekzx4RuYRUrsNzdpbYg2SxE84EY3bDVUVSSVK",
  "key19": "3GAnf61YHS6nULvkDMVoch7sCjzgrvzeSXSDznbZFYTN1D6aMzZZkWb29fm1vJbLip7e6xtfkXGYLsqGHgqU8jfj",
  "key20": "2pQbEfFeLPviEyHv83A5Bb1VwmTGWRB48rkC3rsbvgz5pxyHapQcuiZNhR5Gu6D8tsM5SakRHPqtDXxSeR6QMRHC",
  "key21": "3n1QxKL6kJ74MPaKstgA5ffCMeVLFUUahei61UdMSRkqXge1pdWAnJPHzuUZMfWsSMwq3ApQo7QvpZJQRdzQkpZe",
  "key22": "4zamVKYyC2ygTU1LtMP8ACuDiYqvyohi1TrYAtZ9dUBUFEgwE872dK9UHoe2x7t3DaFwdL37rjGBAN8iN7n961Jg",
  "key23": "awXsN84pXwBtb5VLB3oSox1f3UWWGaeeX9mzhkYBWfScR4oZtb3sZM1p41tjcEwnhc5nJhE76iofSjyTGi62Qay",
  "key24": "4oMgYRUWVcP6FXeaXLmuwA2EoHj7KTuGZ3bxBBPMGsXbxtVm7V9ZujERADQbPgQcpFDWjHeQCX1N6KLrFQy3e642",
  "key25": "3KmB46LyU9oEZVj83vPsb3PCrsrPGkffwydy1JHJHgCfvUUk3bwNjnvzxehHUSm1dVrQoJXFpbS7GeKHvULYp78h",
  "key26": "5B4yBqvN5sm7a3rE8dWrrqTnYoEHdeoCi77Czzs4wHVVHEXTEuH2aWPW8uBRRvZAw6YJ4e9qDqeSWVQafSGWMxvQ",
  "key27": "4WUCnTFpa7vesgia1ExGm4wDEuTaLj4e3DvmqHDRJivhJDNkXryGJidUZhuSG6hVFXz3HJwKT72NS5UtvkFgTH7u",
  "key28": "3E8pQ2gdcMjdaUDi4ttizbYTd5gCEFPQ2ndVabo7TqwtSDXKWooAxL7YJedYCQf8wPmovFwfu1Pqo5mDuUJ1Yity",
  "key29": "41eo2gSd7jpiZ1EqBsd5CnwQe1MZoJKV86utrFYpUQAkj65uk86LpUDFdrDgRkqqxeGCihmQ7XVVAEGmLSbcetEN",
  "key30": "5wvDrUPBrmKZC33u1L6Uy1nMqxJAn7x6Gnhe3ruEeb7SUau56N31L7aFcv2nDq29CzxT8n6cLRftTqyEfREyoo8p",
  "key31": "2NtHPwGzmzdfbQTWY5jx7wp3tYCkN44Aa1cLmLADy7EfQWgM15AMrCkSkTmiBAfCJD6PSYACXJYF5b5msQo1wjMa",
  "key32": "4sEdye8fDrzZPNx1JGnHUUPN8L1eSwWnzszgbK2iJEzMnq7jgvEZFeJkjnqBV6pM7gyv2mpFoTLPbyqpDhXUes2L",
  "key33": "5wrJvYJrTanvUW4avmdW45ATzgo2HA5XjT5KxsykXw6w1vYyCPvtNVpMhoQBiX5wP3AQAUme8DFMqqR4nG9mafoJ",
  "key34": "27obyiT4K1j7fdZo4yK8gqUj53KCMo9MWkfGmXpCWagWGLmNny5yprMHtr2tFMmcDH5iFUEVNubcMpcPVv7gm2UH",
  "key35": "vVuWDfn8zE2wY37GTs7bzddiQNYrshVJwESTkB6FA8ZYRkhu9NRYH2GiqswBhdSDzSiyubikxasxS2tV1XgLGCz",
  "key36": "5WV8cGPNqaLeskDqCF5ruAua2EPjppUC6HQbxpbqKrLUj5Y9NhcLY9bj9pHzgHqvrBMUvQMk9cA1u1b8rdoHxu2M",
  "key37": "45xJp2AsM2HjTfXrWUT9tryJDMShXpGY3gmwoQY7o6ZaG96isjDgCFoZDSHiyrenaV8LyjAHPFHYYckD5posWG4s",
  "key38": "4nPckR6hnWy5ak36KzVEHh4bnuhM161TkmX6QsDZQKkA91hMRXFsS2RJfMQbQTNHuxyHkt9gghcK9Ct4P1Ddm6GP",
  "key39": "5BoSyFaLbVUvtqfeTxB8KTrgwZV1XrxSBt1tHYiesp8tBA3ggGb64VypmXRBGEXEkCuRK3qeDQcpU8oFmtPDAz8Z",
  "key40": "3A7mFkj684PS7dNREwqRt3v8WF5a14Yjb13rcMrcW4oQFHuMsWb7Z3Ra16enUzcnpKHc2UkNTLiCCJfwRzXR3fnR",
  "key41": "5qHBZwKkMBREnRcCcXn1ZfteuSGsR8aNwef1haQ4U4yZ2MJYR8i2HAmTwSzahhQXUsCxr7vC84cuXL85PFQx2yLC",
  "key42": "4yRirrGX5xhtBemXDcE9MqURp8V6y6eUXCabsNFjviWR8quGRvNfh9ypyyPinEFKZimWkRmHWHB6TDEvCCH1WK4R",
  "key43": "2j3LvzjN5tXUmDd5zpoRN4A2t3p3pVjcdbHuQsD9vEDxYQJpkWfWxfQvEeobk5wQV64PZG1gpPNfQ9dKxLBwfxTj",
  "key44": "3MY88FDjxnXZavSLukaQTupY8H7BHtKPBr8bsW57paDYckeW684TmD8kopCri8YkuMtLEJmcocVBmhxPVaXWY7U1"
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
