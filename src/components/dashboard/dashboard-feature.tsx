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
    "5wyk5ppXnorqbfE61M2znpe4JdrVj3W7MAZFx9TCATEgwVMDJnYEBTvLPd95cET5Msav8cM11qt81zSikTQGY3JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QUrZ2Di6B4bLrDnrZ3advfnwGYGN2e7oWPjHuv7dbJhe6uVK45XqZt4FN2FV1a9hHuK78YdLJZTdKAiwRjXjJN",
  "key1": "4SJwF1hEvFnGKGSS4dfQnVeFQ38iLwHTiLuCkFByDcv3Qi2CjkbQZxWPnDY3UahSiRMWZR9uSmY58CMbiSA6ENCV",
  "key2": "493dmUxAEMQTK3vgRjx52GtHdEbDEMQAiMmNowxgfPKnTnULwZKwi9p2oqXguJdLsLNTZHRgciMdBSn7RgWwXL99",
  "key3": "3FCUmzGnJLcsajcE1ZG1SDoMFDDAsRr4Ar1qhv7pndDKb8vPu94wGXFMsT2qAkowDZ9ZVmjTrRsWamcWKtnHvAqj",
  "key4": "3YEwmtg7SwRoHdZNX6poP1mwuT8REwWuws7cVEDuLVxqR2Zkedc1DJFSB8NxxTCAjPNsdQbqGGw3fRQrxeLMdraP",
  "key5": "rHsdXNKJZCATBAtfqnWGwvXQyTNPcKNtskYphGo1xXW2WLMLYWCTYvDoECvz3WS4DnphiiC41FvXRQMvWxpaamU",
  "key6": "G3Df3sSrHaydBodN583TkxARyK5L8we9Tf9PrdryrrQRxnwCvycD4LjPPb5jpFg2hhAm4cjffpKqrdUHy5UXusT",
  "key7": "33VhcAGj2PUpdxeS6jJrYHFz8xrgJHph2D6Eu2JoveozzzJPfZEFRVEqPGqYYzjggmQrExKM52ZmpDMjtRuUYdpS",
  "key8": "2DDG3F43xK6rsqizEY6BW55BxekpdkE8dTt1cR35AG5cFiwijMzkUbkeZxgLbW2UYkHKDYeyv4swc9b9f2BSxDs6",
  "key9": "4PmrHV3gzfJwKUpPaD8wPiTWoBYZn3JvX6Z1aofY7MfSU1ep17TSuP9rD62ZDq2fQC113YsoJLDo2WWHFfQrkHwm",
  "key10": "LX3htwDpgXwt3qyXhDAmBcHxhgDMnFLNahj5CtLPDyRmWzeV2zDTQFah8RFkCijPSbx71bcRNfw8ET1MTkZKixc",
  "key11": "5aGZ1f2m7mUBoKfJCsNKuQbhWCyQPJXYGTaYNAt8QBbiucGQqtGmAbjQFt2BSdZ9qFLuygYzAFJdQXrcjRgAg1RY",
  "key12": "2E5qH928FH4gU6ZpKqcN1j1wDR7ct3QmbHAo6cR2pq4BrtfNAmukwcTXTAvnUAcWTE8EVA4DuHeQfCsxiUhfjY3p",
  "key13": "2E96wYrH22HVVUrn7gXZgnvpRYo6mPSvW4S1se98PS9rVCjiKmiSaSsxcikdFcLPSZ6ULkRceB6PNK2w9j334cKL",
  "key14": "2MLojFJhpQm9LLx9gZTUt7JX6YCsCqPKV6RHp3UTG8FGpaLfbKdsGpMJQtegHoDq1AAXGQwCky92KA2cTUc16LWM",
  "key15": "2pN34CJUmZSK1nupz7zRsDz2cWaZCFNtPAyMaqLpcvFKKFNZJUp6WzHMNbK2fMbcFv48rxo8GL8iwjzRQoys98dc",
  "key16": "2znDPMnfSUxgex95BrYmyULAugHqBWMsFLC4SpZTD4ueCVQNpummb27jSRkwKtfrmFSaqSTp1R4LUKZdwfVWoEeM",
  "key17": "2ethCUKRsFrnut8tjdWBWJPXegyXHmuUJynKniumYQmRb8Nc28Sk71Mq9i9j3nr92A2bA5VtA3fFAVK3Uy7aKYvi",
  "key18": "4KRW38oU8jxL8Kkpppz91AMbZDN5E45shioRdcrh19hw9FKBmxLrQdMvjYZjNF5Dcx4sPbTwgqsjMusEEyQcYe4b",
  "key19": "5L7hTsaKhxuN6ZsVhBNU3gonpndsUbhzihFuntbofFHswsosTzLY2qDsUXMznacJ97aYsYktvYadh7ExRsNPGRoM",
  "key20": "4ysEvrzrVNWmVmvinR3JCCuQ6DNoBDoySCBXeNVo28p36S9HUrRw3jnpJ8wG8LBEBPgNCf1Brq1W1PN94ywcLpvG",
  "key21": "2sioHUYVqq6cCYrhWmkynYDQ7b1aGRJnVh69K3oEcxFe6qjfLhvEvg3fAxCc9rym92xtS6dqh8v4BddfgeG2Cp7k",
  "key22": "3sx7oddDkrPMLKoeWA5iPqSoy85iFqkJUNzhpiNefNfxbkgy3mW3y745R5Ud4RGWu7rZ3LQ64K4YCN7asWGcXSDB",
  "key23": "5kJf9HHu2RC49ptos7TFB5HagBqfJwKQZhkzeEsb4KUsMQCXYHCiYjcme8qEEUg9CtS6mthJchEnUYFGvmQAduLG",
  "key24": "2SeuaMc4Zqka9btrCNq1KSi6yjw4SiZ8y5RUVtQFXiVViMf6jzXUTRcSKthdYZW5J8K2pPQRPg6DZVScKWSpCzYj",
  "key25": "44er66Yfp7mVaQZ4zC9gXXznhraRbN4nPhaWZ5e7LGnwYBXusK9qdWvZLgqJfPTZqCUSaQuZErMvFK8mEhh47ki",
  "key26": "22VnigDNLmNq4VyLQqh9JoR5Yrd9dtx9Y6QN69x6WoEfVm8DrKhtnrTgdcvLvAUycLEqJXtz3Co5gnkP1kDWd4Mu",
  "key27": "3Vpx5PnK29kZqchLqoCvqyrHr37aS3TzPAavnbmegWLVCaECteDb2meQniZ3rFyyUWg6Y9CWsm6TGSWmvTqeHM5",
  "key28": "5eHi6Zs4859ns1ZRFGSfFHWNSG9B3hAbw3seCLwQ2SFXkVSGqxfD3Tj5TvohYiM6M5jq3KEfiveXyTXrBAQ31vuj",
  "key29": "46HhyfRmwN1LWVVvAXNgG7yZ1aUfMsRUadcSKeNd3fHV6JhSPxjGQj7bgiAV8LuwSH8vuuaq6HzpPRDobgidwb6g",
  "key30": "39VDYqFv74ZArj6jAAbS42WuUM9LTNo5SKEiSU6NjcBnK2EXRRU61ecKYhiGe4PQvi36PJVxTjaUqZp4yswAmzbp",
  "key31": "FQvX9nXag7cgvE6431KpRFf86ADHhfJARKvmBxMUnZckT2VkrgHgtzeL8dsb2hEHcoygwQFuE2g8anWz9EPEduE",
  "key32": "5yQSNmxsP1BnKc49WKGdnsaVNo1JLG6MHbqMKHqDtMogb7LkuF3FAdyhD3eD6Tu9FtF39u5qNsGJG7HaDeUVqzbL",
  "key33": "5cqT4wHauJK7KTALxEWSU2tMTRjD2z7EqZhGYP7XDNE5qQ2ZXsLieQLCmBz6ATXFFHxHgHzcEof7ByzJF6PD6gyM",
  "key34": "SgPMRy9XfhbFnVMuodELMtGEfnexzqSxnGuSZXmV5CdW2jbtzbvGc8UbmYjbU2CQLLFBLF7Tq7KDDGVP1RiMPZd",
  "key35": "4STrSCw6hBpWm561s6JCSJ8VBA4yu9YmEG4yNH9FH2zJxxGrV6YwqfG5ZKTjFXvop65gfU8vDrNvRpMpUvwiWipA",
  "key36": "5sUqivHKGne2pck6M3bJXy3PvUFCNZHAJ16NEw2UhMrSZuZDsP9upMwqyXnhnnRHphxF4r2bN7BkziJxeTzJSk76",
  "key37": "4VaK4r4oHhqkQmwQEMgdBb8ZTJxn9qtj5NJmHUCHAH6sNkvdNpErwk6NtRXJYMJc8vXfH8Z7eJjEKKs51Tquc7cG",
  "key38": "5cbzbkUhSBahEoDFFvivRyPW6YyxV948f3HoXfb3yMcuSRXX3HF6ZU6va3vZPwRtTFw9xACuTctuWHG35k5bk4RM",
  "key39": "23UXPXCtr8k3uF1eCeA7w77ZSsPwCBnRhLbpTje4wx1KFz5ZVDhCjjHp8H78szRrJ1oeGQ3Rj7WJzTfREom47eZs",
  "key40": "4q5Q6XCXSTzxfX4ruFs8rjtR7BP5za12JgWxr28WuzCLw6n6ZsMAS9f2ue5x9scHY4FTsHpTzGG5Yaz3CKC3T37m",
  "key41": "3Hndewki9VCMX8JfGeCvu2ptaaCDDuHCjnN4VCNByurb8xUwBkSphoSX2vKL8e1HEVjRSPmcWFYYLB46XSQorAaf",
  "key42": "5K5uwMfVC4XXfMEEVEnXzdpHEWBwCdtgfK7FCma2FcVdQZzLWBR1skkqB9r2sssCWSLYoP75X4epd6M1U96Ms55z",
  "key43": "4EgdnmBkisLkYm3pBV7dBdnifJQDJr6k532MvqMGsNh2S4eZHX8beF2CWTM6ZYd5hdsgG8gSnDNmtYV9jJ5PKv5M",
  "key44": "4HQbYQoGxgGkVfUDEWsLB7dqt7V5pCFRx2FAMsd5aXjJV7zE6o54RzXw1E3VdTfsBjQkSnveEt7U7JJQLmnAyk8",
  "key45": "2HxXdEqf95dCjf5Gay9pgukmvyoDpytmbpAJoBVGazLM16T4sGDWkqtAnyJcvEgLCmTdD1yVnjLdf6KEaXGrwg7z",
  "key46": "32LWHcFzX5myqwtopc8hNiJKhT8mpaTCqPSW3An5Pzgwv22Lo4i8g7ByPY8UUpXMn6cD6VaHZ27eqWVgNwnmCLQp",
  "key47": "2WEuhW5JtsPPFA6TmvynNtNkx6BKSoJ8Qfo7kFcWxjbdRaPi686wqt8hruGhoCFs4wDuAvshnnXSfVzK7K8gPAMX",
  "key48": "29pyBeFz1DCZrUrawv35wUUqvriocHP4RJoztvGMghrf51A9aXEP4J5JcKoJQoE7Z3RCqvDBt1EREsECrLKc5oTR",
  "key49": "2N8Qz8k1aWRnzuJYyaYgwFhHvA3c6YLgCmwneCXBDFdHveefGq3k4nBVZJju81JeA5juMHY3MaXQ6ke7CM2pPjBZ"
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
