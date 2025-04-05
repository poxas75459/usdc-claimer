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
    "5W58p9XJUrjH9XuGBu78Kdc9g7Ch5H9EQMSHJfzb5VYFNpueUer8bW5tYzCeVTkharCDu4SC3UBS6YbAmL7Mup6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UE5Mhx7kPJeQdvAvFFfib417tEKrjskQky9uSBLAdoyw7KzpcoGvt1smgCWWBYWwcb5jiy9VpqDxCtobztUGyh8",
  "key1": "5rpaKkUAdvt49Vx6UVkQivVAAZvPsts9rgzhR2HJcomsyDX3q7Qf8jEaFNMapxmvJbt9bthZToeUbVLLPP5Bg6eZ",
  "key2": "4YVDjLGWoZHEsf2W3mxbACvSey43W6mZ75h1rAgcsWTwfxp3Af7ugKnj3bWopTWRXgt7cjbqHsVuKsdbP1rg8xe9",
  "key3": "5PZoFaU8fWqh2B6RzzuA4DZcoKq7WPyvWMgi95phNxVYxb3ArXe3USJydeq2jquWTYse5WvgLL96C89Q1YfPgqbc",
  "key4": "28U9mBCWYmncG68tmg8akNZcTTZicJZpC8jfdmTRygB4FeDUEGL6RHNVJChBrBPcj7Q4b58uKycDwFvB4yvfAgQs",
  "key5": "61tMHQW1Em3qrxaCUaNC58jUWhX1h1TCdT5C97HHEahPE9RkbgAhiqv4i2f9b7m1HLPTaNc4zYRJxzFwKgygDG98",
  "key6": "2zBjopmrdsL2Fj7x1TLWtSL3roQB1eP55MnpvoGiKENPuRQJjzZEZtErH41W3k5KRzMFJiLHo9uLsZFHDBnYx7u7",
  "key7": "3A61uwuT8WoKNMijJuStwamR8CCibKjYj9kgjeABKu4GciZZ6zmDfRsxpKd3gdqPJmjPCxJVBGdodV7yrNRhVhXL",
  "key8": "W7LTh9wSrcSZTwtMaoYikGaSXotKZySBN3w5YeG7uLNmUfcXaMBEkcqFmibdhhwfVcpZQYudgGqsUEfERk2Xgnj",
  "key9": "EDyxNjY1w4kTBruungYuxRio3BhaVmjtGFZAtgLaEmepTyCGobUf6unYy6TyhmSpADBvTvH68Ltxib2ikUGAXuw",
  "key10": "21BG5ieDEaR319x1UaryhCZGNRSuN6cePVwrUrpvfHGLDodrcmJNxKukuaq7DPWBWVJLicVjN8npScvGnHw67srn",
  "key11": "qZTExHwg5X6SvUQpdbkw7fq14PngbGGF22wpo2SWjuubHUzAX2o5jnP8125nLgVemFX8KrBpB21vsm3fTHoP1mS",
  "key12": "Wj88N78PDRrPCQqNzg53sccoGy5XD6ngz6PPptE3JDieu1AgAg7uqeYVQwrpgh6FxD4pzkwoC7zKB65ntKoi2V3",
  "key13": "QaxH1NLiJV6GkLCa7cfoK93mZtyaVCfN7zAV4V4FGkUWyuMEe6PwCGA5sguRctg1GfL22s7B3RkCjwssxQDKTsU",
  "key14": "2jD7zXcdyP3wetZ3jbgiyE2qCnSTV69kxdWp59VSHAu5wjPhqZDPketosAFkLbf7xRVc6kWF61SBHm6yJ63J4X2a",
  "key15": "qs4wdvqHarK8aWuHuVX3WVx3kX5TbqLm845CBbXBhibKPQhmUSQx62H4RLU1im4p9NEwSrhbLTEro65nZWYNuJ5",
  "key16": "32wmMbtCLhD3Rj34HY72QnPTosnFXBbfRVLRhWNXYyTFa3EHaH8y5QGjR5dHY8sb8rnnXY9igLGT1zDXFFuung8g",
  "key17": "5mAfXu6XVjGMh8SeaUuJneLWpWdqZ6G6qLT4KzMJqwaf2pnEXrxtA167pTXa4wvd4cu8hURtCbRQAQwsMy7DaXrQ",
  "key18": "3imdF7gXCDNjzp3og9HQMwz7Vu9NoR5u6ZxXqMQwhPzv5mgubt7pe32oNPATYji3jkR24ofnMU3teHzg7L7Qc4Yy",
  "key19": "4toRF94wLRT8xuLjH2ddLXAzUMiB8AJurmBr8mTnMNyfEorJX3Eugdg2AsEKGFskpYrX1b6Mk1Qodo7vTKVhgQvS",
  "key20": "3oWnU4TRKRMoqHA4uyLtsr8YCiVieoV8uYPMdRAbGQgbkJ5Ku2goHi2yUD9CyGdgHHjHeCXUEXy677tDYLBoshiz",
  "key21": "a77QJx32FppSJtz8hCx2v86CgEj93N4ZRfJtarCyPLQvSchaXP9q3DZ1QRLAPQHQ5vZ4LeNWwCPLizviw54umQk",
  "key22": "2xLv2bPc7ZzPQYHr8noyKbNWKY2xhDdAa3LfzVpCMvCxu9F7ipioqz6sN54EG6Hs5M1ii8XVAaKxjDbkZTP1QJp8",
  "key23": "4QuF5VnxpWef8CqHBQAwcVV51ytjpjcdU7s5BZrZDdsAmUT1K8eBkXnrsX64NHUzonJd8eJ79CedyD9n8WEd4GVy",
  "key24": "5Mqn3aLWYzRVcVcfzNQH8cgeAHSNhdX1s78rTABUAp16gF1jMiGRwTLZphtR1u4WoELVXHfCnWTh7qUwad1pwvEF",
  "key25": "hoQp3nDUwsnMskWrdR7873heAt71fxXQkUtXStoe9TuEng2oPBRxXCg1Uvp1wPF4NroHWaei6wd9X2jjawHW1v2",
  "key26": "2ys1Yy76c1e27KBqUXdpH7xW8VSbDdzqn2bQGJMLGLyz84FtRVGjzHVaHC133UXSmWYAd8MCJ4Lah7mxw5Hc5edy",
  "key27": "uoyxzSkPUysnjaDg67U4ziW22T1W1sgmrqG3mb1SoqLqg1dcyoxya67xYskBbRoT2JHEY9e9VKNih9FpKftUnYf",
  "key28": "2Cke9DU2eQYMBfv6ZKgBEEPATy2PtZqvZepetWatmETb6LCs17mZGPy5QA7NmUgAsrdA3Jo7ucgB7kmCNTS6knqu",
  "key29": "45L359cTNcyMYBWeLxyFHov2vXd2hc882c4gMtt5pkJ5J4m4NTdM6WiCFdzmCSLubpfQ88u1dRZET2tHtBE2KdT2",
  "key30": "pT1xH8j8DQkRXPN6rjyLW6hTsVSkaiEVKhxBVSerHnj6GE7A9BJ4NJ19hU4kKrS9un8mk8hXdn7Gd4DJAwkyi3K",
  "key31": "4PaYde1sqvHFspA3eDpXkuaQEBKEQFXLNo2xFfAuAvnncGa9YzqbRBxaqyqf3sLxx6MjggrhcK47m5Z2ev9sPyEP",
  "key32": "28xA3FYmut8gakPnWeukm2XiT8iQNKbpJ75y3dmj2TyySW3BYgYS5pWcEyoEcpJ9WKVWxzuRdnxVGtxxZXTQE7HR",
  "key33": "54u4mjzoHWztHR4FPM48WEQ43iK4BBZfh9GA9KtkUzZ4sY6erE5RgXmrS6vB9VEmP4jR2FkMPzw4kky1un5kmZ2L",
  "key34": "4ndbQw8eGHvQNMc7EVeZ9L4JGXicab5FSChfKj6U3PpDvdUspFZATsZja2JsRaKWF9S9SMkhWZVAg23CHEpmM5FL",
  "key35": "56cF9jMmuUaz7G8ZFbyJMwxRLKfFsQDLtrxmxP6hq46b3xZhG3FyaVZWb6dYFD6yBMEP69fMvNMDZJhcLbA4iwaQ",
  "key36": "35A1LVr84Rw621VxFuwzkZWHwwRMW2J5y2PCFQjVun6XEoNW8EVgptKeDvwMN9k8Z7aN88ePwDopTm6TwYiSDnMQ",
  "key37": "4RSYcUa2Amx6gbtGKNW6xiGXjXH1B4R8qi3V1z1wTNXP8muSyqrA4PHqRAXEFq11ypseTyzKchjZiToGWSQHVmZD",
  "key38": "4pyAwTaXKqfe3Kk18e3c74mrHwWxwqgGWwsFqftk9qsRaFaWCmxqpP1DTpvTCgzk5MB5WCAJpueUZe3XFf3cxspq",
  "key39": "2a1YM9vnc78gDqMe2wbMatGhXabWV6Y8zwLxg6zJiKehDRJrbdzppWQQByrKYU8TUecoacqz9Cst7x8hh7i68VwF",
  "key40": "z8jbpZgw6r1iKzgT8cQyXqZ4aQB5ehfjiKNG2aUaGJTEu9zYWVEc5GbUqJTLrgvXqTQRYiWXxUwrv51gHrbnkVj",
  "key41": "4j1MjKHvcZEpCRF8LBRtRg4aq759vAyqsN7Apm9QC73tZTTLyA1U8t85c9jXFarx1Vag395ei2V8aLRGSGThhRoF",
  "key42": "5ridbydr2rwJBcRRVmcBWmT4UMLwQBiRYzjAuDoEAYvXv6Ux21rJ2ZviSNtsbFiwvsxm9b6L6qB5CZSQfAbVGYni",
  "key43": "7kX4khes63GrnRo3sU5KzKnAuzR9MZkdoCkq841S3A9zyRdgL98HFzHFFFn8NcovWj2AmcAQBbSQKh7esrU4RN9",
  "key44": "3Vk1owa4FeoyEcTFZxierWzyAsn1R7SKjCmPNMaPw7jo6oEmNW49q58uwhPyyfAs1UokYq272J3Fj4GgLVLsYbzM",
  "key45": "372CHoWwPHdYqmUVoRW3H21F36dvKJTRWCB1tK2WiNk1nyjnYwuJdQ1A5RwCDMroK2hQGCkR4vHL2tYuSx3GqxdD",
  "key46": "aiASpoVa9Dk86376o1HhHjGPFLF4hxNXjYTN2ww7Gcw2DoA81XfFutbUTQ8ynEAJdoAmm3zU6C8LDNGg3sKeN6b",
  "key47": "32YbzRJPzWFwLZPeiqKDpNV6Cb3Fu2QyMiMNchLfGVHeKZxChwPzYeU3v1nybpiPAHjhsJyE3QC2QoeDhFDEVPk4"
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
