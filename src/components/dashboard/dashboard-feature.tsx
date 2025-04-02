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
    "4uJM44UKZtToavhUZCDiPfZESH6XmAvZjDE5Txhwg2uFViToVGRXAMsacNifyXHD3sjEFvyKdR85DA6CKYf9J4Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXPrmjDWbfNkXFRczmHYBfxMQxGKzUd7SwmcnBPZk6erRfcckrPG9tWiYrQGLGpRRLjW2suNF8ccJFkviA4bLAr",
  "key1": "4ptp5UREJTe6LjcqSckJ5WKEeBmX3M1XQPDa7ibMe9J5C81EQCH8bTnjuy3SLLcKRgK7iXeNwQbywdBjcvzcRmgf",
  "key2": "5hA28jDzBt5NgTs7xejZciqoESgtr3AMcyUJPp34hmY82JM2aubFVguNrQBbKzP9RkcSLeh24YKbFoDHTYHvahWK",
  "key3": "2PBk8Lxq9ZjmvLGfzS7Vm8AgCMNAcynLF8mV3bia3gLZg35K4BcP5pSoth1NiDhE33tDJE5xhSJpvJWjdHcFtj9Q",
  "key4": "5Nym5MUfLWQxKuLYW7kUpzLbkR1LBD58jLrQE7jTFNoqc18eqXYi4rjqgPUaJC85gyjARKpyVqhMR4VrYShJjKs9",
  "key5": "ZjiaK8kV1gpQiRyP96E1v3kcpiNiii1TVRYg7tMe6qi7hvYGjVkUyjioif3D2x2AVo2cUb1F1heqUQ9yPEgiawW",
  "key6": "t78djd9BS6KETdqG1yZfmaLp1AZJCMatnW6jo84LS7dAiRzYZMhY5AG13R9v8te5a2cucoepDUqgFypEA4684PB",
  "key7": "4MVhEd2aEx8FVPJso8QctE3cMshk5iPN9Ejy5tuAnEfNSDPq7M71Q9D6gUQw9PUjRmMpFYEamURTHAkSgxomjDvA",
  "key8": "242iZStbxQyf83upcKJeLSXSzfvgrsHYUuRR857xP5S5td5eN7aBpqvrgijq3jZZwN61Lt18G1zp3pe6iYmz4uZb",
  "key9": "3A3kDiAsh9tdCvnHUHTJViPKXFctZJpib4qVWjvjjGBdyhCgiTtQhUHu3B72YHuPQ3sNcoAs4VKdtPysUdFKfRid",
  "key10": "4gQWr8u3KTJqorCEdVRm52nZHfy8xPkjYoA4fWMduD7aCc4zbVrVinoZJFXantFEJgbSokcaH9ortUuHEbswwc9A",
  "key11": "4r6rJeGDEZ71ofRdTHeYHyEYFX7gEocRqM8n6V89KasSw4orGm87LBtBSj1L89r1praht2MvUPznDE9Xfoh2G7bN",
  "key12": "Q7cgfRxjHcAopjZ86KGxeKqxDC55PoUbHDwtBK6fjhEqtEcWnUoyHqQurjDLQXypQgHnduUZh4Bj9Eqsrko6wUM",
  "key13": "3RF2vb594nbJb52BZaemgdT7gqFVKsQePC5d49TpTVnz5K2Ys4a3c5nissKGWzc5myhr3Uq7b2yHW8Xxh94KsmFg",
  "key14": "GEJL7GuiMUX5TdDuP9dNgbnLLsgiza5txvknpDizYmSugLh7Lxfb4ZeqK6cjmYUQHiDKWGht3tRbYnSckpn8mWR",
  "key15": "2U7wZsPjm6oSjfZUxj6qmYkkqo8A5XHpj6Zxepz5qW7sEk1QKFyeEwMKoMwkuaJEbKXFQLfmPKUaaB9WpymtBmsr",
  "key16": "59Xd3AKDWQaJ3AKJGn9MToEo94hsa7YNQEJpbSadURmTwcJnB59n29TnA7ye4PsutMqTrWQWLFZw6ETqpZKdSTkE",
  "key17": "5mN7Y9emZP8v2BwdzGht3kLp2gEaxp7nGeyaUJ4GbU2CmxBuncXtY1tSBmM8kG5qu58bKXcihLWgp9G4U5FdMkq6",
  "key18": "5UU4tfrHWUNz2MU9kyUvSah2ZteLDAB6cbVJogk4Tmrna7fSNtMBGNfspNYSw8qR2gP5ddsoJs1qyPGPA2usYDo6",
  "key19": "FsEXRgqdeFWpCqfRGEMhk44E1a38yr4BSKJGWy74x1Xq95Y3nX8YpaAyh8cebWrGvAwrwUXMnvHiLcEfbaKTPnY",
  "key20": "55NER6iobkdUzWqn2pdAgua48nMB1QV6GBC6XVKQQWScddCD2PPedXRGjauaGm7Ej9k8P6BzTZqG5JyLTCGHuSCs",
  "key21": "3CAMGS4sN7gcjcb4sr4xZvwbU7KhEMkT84VXo7A4dydQNyNAZPsoMZymXjb46L88ksUNVN4ut9iujue4ZsAsnNLs",
  "key22": "n5oozW555TSGdiig764hcGLysqqfdGLnn4ktXDSo1tpCrZiWBV74mToRx7MgG7Q7WtJYauifzEs1GAqbxcjrGmG",
  "key23": "JQdkrQAMVtC9uF6h4ex97aaXVKfCFJYYUpW6vWcjaaj3oPqqGGFgcDRQ8ifywrxvdSndvvN38znGEBNPYGZqBsL",
  "key24": "4XbSXoSN7X1rNHwc4Z5YjiT9Yoy7Caq6oSQLGbzDpFfXsGXBBs1HCqSkGAgkWmKuKsny8q8p6byFBwHEafeRCoaw",
  "key25": "49tTM8ryvUHw8i3WD9tyQBTuwnK2bzDpaMSMbVFw4hsp8oxAB2JTmnGbzMVHkYC1HwWnqCp1KyuZtaZMW5U8sxwx",
  "key26": "UFVZSRsx6SFg92JQb1VJNKpzeXJYy7B3jqv7vqMQyKAudx6ATTCuaYdN8HoDHyfDF4rf4mtYytiRGZxiHb6NTTv",
  "key27": "5qsVpwbQcUeNZk3g8Juo5zAdftTcuRYsccXWSN2Sw7FKgrUuf4DCFJzrcijh2MpLiKdV3BScNrq4AUzrcoXmuCuT",
  "key28": "N5febNXPcGSEcRNDNiGQ8y2gSAPKaWhRPPCLAMWj1qR9RMPifWBae2L4YXNsiHZSKBKp2Rg5JpXr6qoQEpkEuks",
  "key29": "51Hc84XdPeb8M7pUGqPoWxbuefuswA99QKGAsHDjWY1GWmUToAJSsib351PCNgs1KbNRVwRDNmnxHtcUjytrtdxk",
  "key30": "3mJ2bbTGupABqyztybubaiBcgc76CzSu6cxgcuCQsSQhpV4tiVq8SHhBQiWyuUXjuqm6Ah8Ct3TCMC4iaGwrPMZ2",
  "key31": "5FCGzRGXFtnTx7HiyhLyXzgAv5x24rcn2NmuoNmmM6NbFbPuc1DLmCym3tuRAY5x5YsZNY92LW1BMZszN6SfmDhr",
  "key32": "2CmTCQXgTezXeJiz64oE3LPgc4ei8nNFfKgH4QPoVJ4ebgveGM5Y6eGwJDgytcF6uDJuKcVychRF8fqmqTcaX17a",
  "key33": "4W8JGU2o4CBuhACVGY1pErU2ULimq7bgJGnRivjqLmxNGSENQp24tE7dKBkdE47TsJnMvoPc5DMhedr68m4Rds6M",
  "key34": "5fmCevugihh9qk8jBRH2qdf19bjTRMh4K8oum514xGBHnZPnAzGGxyE5GjoAr76HpBPrp2AiT7aYdHV13r9tBwaG",
  "key35": "5Wsp7giFi2yr161RiUqKwHN7SfGEiHPkg36JqKVAypDn38NCuphwjERqUQgiz4eQYgWq6sWJRgpbLLEwKAJRahfH",
  "key36": "2k5aQjh4FyjmwfqmyXgYasUHevQjMqooNzybNxabK6SpkT1SfBZ1XohAnCqDXGrRCWRYqXpKaXKBuphCcC9NRkNS",
  "key37": "211rZu1TLDgkWQNxEN2jGP26JrWjkV9H6dKCgipq9Tq7UaYkkYLs7EYczuaMFZtFhdJvAEvMFKPwJnDCkQsFRU5j",
  "key38": "4Fe5AwQWYxAg2VUNkGKQi7Wmbuob24Fwa6dZ2rYt4PTQpUTeEiEChv9HirL6ErZLhwS5BWphRJMoqGyYWmycZZ7r",
  "key39": "645QnSGecDSRMfNJEe5uMXue4bzP7xKGG7eKricFf1SenaQUKtQniTH3B8yaW3S6w3eoPLjgsRpehLrRLxQQiafy",
  "key40": "56Zbhe6WHGwe24fyqgck89U7SmGUarGHwWTDMLKKguavAQKF6sxaszdQFMq6UhfLcWPxEMZMoyuRhQGTjLQek17K",
  "key41": "44Xi4xfHsXUQu2rFWCPoGJfAZETfsZ3SCJB6Rpxxd9qWnycW24uyY3NwEcvAVL46Ucs87QRmzbNNJsYSYPMb3uNQ",
  "key42": "2gFFmu76cPSSerwSCRtkggznWZju7GSBDsGxZngm4gUCwu2V3PXynPu5yRjMD579iSQBNwTVCL2ksVGjEsUx6Db2",
  "key43": "5epdJo7xu4Kh1WuBACtEL7Nra6Lak2VWNHXoEtGWNdR2AfQkg8BtW2BdAH5h7MmEyyVD6NKJ79y37VkZJEGCueBr",
  "key44": "2Vk4V3BKbPT5HZGedvU3BKrwJc51SwSVqLFnLU5Cjf3NKVCDYxoEUjC7HC7NJ7P3SSAbnFJThkoCLjuT3hbffFJ8",
  "key45": "4HaoXMP6R7KdETkCeFNYuUT54n6rs1VVTZRVZShrAFY3MfjLtSdTM9yXGwEhR8Y4FMLhRWW5yzat8aVJAtSLyhih",
  "key46": "38sSZb1Yq9KvsUSoP9swL5en4W5hQo4p3PnfcoMxcUf5RvTqatieN2cq9tuYxEjDgLM1dfs1grzn4QfKnXb3dLg3",
  "key47": "583FYVFJhunbmQbSbGmTf5okppSy99YUJ9qyLJ6AQiocAPxtqbcXgAKiDeL6tmPSwDRSHg3EQ6CBGbuURX9iTdx7"
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
