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
    "3GdpoXmKbJeP7iz5DzaYt32cn9d3gnx4BuAsUh7XWg6zKZQ8qtdgfzYUr5nrsGU1m25FdmKgDmk83PJBJiNt1bGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25V4PupDKGEV9VtLqvtgNYptkWP2HasVcUyzVf8gAX72BAN6Lvidu732Aqn1PcbNEXyhcxeFT3f1PNHPFwYC98FC",
  "key1": "EjHvgc3GJ8gu51xJX6j4fjGDX5zawnE12nLGNus7RPwxgp2MNqD5X71h1UBYzjFHjjPWxz2CzzbxKnMMGXbMCj4",
  "key2": "T6kdRpXCVU7PXkJwZJZX5YVfTudLAxx3WAthroQy495EjSbJW8YHgcrtPvXyVUyKegqfEsMDtCwhD9bQ5BnYfKw",
  "key3": "5w6BGEZXp9oAMkQuiWRQyexVqZq9n9CWmq1cLTkdWQW8McVGyFBoXSRyaZF1p3U91HWE41dz6YetvjVgD4cEMzRk",
  "key4": "2R7wsmNk9capKg5rcz1quRqR4jkfcjjRk88Diu4cfQzKaSyXaRcCcaEBhDnR54wofRU2DnpVUwYVShJbm1R5PpbY",
  "key5": "4t3FNTRS71HjvmrotJQ2VZqcziX7vkNmgjmdGqM2ocWdm9gVeGMp47Ek71mnmdCvnkWGepd1vjVEHhiqsq7nmUpB",
  "key6": "5JLhEVwKStr3KZFqf59Qf4ED8i58b33Mvfx56zpviMq3CkGAfH1Fibp5AvUhEPwkcQ7YGqigrQkq7EQSAdTXQ85P",
  "key7": "2gbSGX2m1mN4saFpUhf58sHGC12nvD39xCRbcQ9jVCCEPxsVranZZNjNLyyoGTot9f64ffW3hNbeBPpajmHfv6cK",
  "key8": "3actu3gaWR3GeW6VyS1YUddw8JWZMdM3GAegwBQBMeKfCg6JHkCDCXipwmncaW3xPuX9uMYAURT4itaJErsE2v2S",
  "key9": "2yntkLr6BageYwkTwsKUCTo1GaT6Ni81yddp83zpsHsY7LmUkVjNp6UGwkHbRkECp4j78BjGM73ZF9LBFAfb4C3o",
  "key10": "4uXx9xGdb4bgbf6VnFTmysw5rWL77JvKzAa62b9mJ6LuvzB3BgajkcNNR8Ra5dpT7JmyLESDaHsMarEzRkc9FmLN",
  "key11": "2oiHqxRRuCHQFSAFd7R45tU2cf5beEegF6cA3MTHFGMN12CqDeBEBRFLhkKK499R1n6ngrY5w3ya7o4YTbRy3pSs",
  "key12": "27pJMjvgftSwJTHYcddhdcHrbm8WoReHm27Du4qSRWqqBrhjdR7DDqW84WDzSmV7hhF4MW48Sduxc61G7gMZvusH",
  "key13": "61VAcfmzKUWp6vona53PSeenqdNkjRCSEjUyfw2eMpe66c3eRh9jzXnR1dG7E2fonRg2EszRMTtjqSMmANn8TLvE",
  "key14": "5GuEVeKVXTgvXDmx998kj5iLE4vLvCfij9eFsdNWRfxgM35SGbj6eSQ6VeRG3nXF7FCE2GhTeCA5fMsjz8gkVJ3c",
  "key15": "39Qt6dtduABLRYBFr1Xbf7qt76fW7FDWmsvAyddQ6xghXn14pmzmvWzKWsPQbA2ZBHfNo342LeHQ5G3GXKo3vNco",
  "key16": "4GibrATpt9iXVtf6aTsQuActz5LKvfiU8V3fh8VaNySq2bq6BpRDYYUbGVNX2F4maVF7oXUKzqxZQ4HjWAbvAaTj",
  "key17": "5PupXZWSLHh9FCNJaMoHqZ2ZWNWZeXuWqEihvYRH6d3cw7fNvKLbT6ymjkF9KCzfRmUQPcDi6QhJsWuMfvm1tWHv",
  "key18": "5ThYJj1mF233MzntRi9ZRsfEEYHXqMeEB2nr1PRNtaPSpq1Pz7cQBrexALCZgUPVwvxzyd7TfNGSUTbHKmTXCoac",
  "key19": "5fTHHdnpiwSYK2a79tNGArFUTQZTLsN9NMj3vWsvA3v5R11FUiZGSkKChsAUeaziBbEXc3QBGPLS1NZBpPgrRsFu",
  "key20": "5KE9mJ4GLGB3tiT2FTzsD7jbSj9H4yShXHHWJXeA83jUAXS6f4FMG1kepF66Wp6CoDKRR5x6wgiLK4XYSxdv6vxC",
  "key21": "5RgddpQAjfyBPqi7xwzyyHt6Qu6Gc2SSwa9989JXxbidYuvMyJciap39rBrcsLHW4Ag4eptooLfxUVgDJzXfzF4K",
  "key22": "eJoQcv8x49taJnJLJ6qSFTckzpxCdQem6JLKqZpNUmVTCwQDgf4aSAd2nbfpZ8ssQxX3g7SbqGCwxdsVVtPYGK9",
  "key23": "4LLkWWMgvNhMC7fx7wEEuP7FiSQLJn3WQ3cxxeK1kgDZ8RB3cw3sDASBQcjNU775nP8xg5mPDKsJbH3T56PrD6XH",
  "key24": "XJL4nfFKjSyqXmELgXyk7BQ7PNgW977wE3B7rT8USY7AqtzJrG3fXWg29r4ooKbF8czYz6Efn1kCtqEqf5dA6XB",
  "key25": "QxY1mMXepxs5XR8bSixEk5aDWrZmaRPQuxh2Hxw9pyhJLt8vbMneVTr7kgqDGVHAXXXcaTqdHJX3XKSiHUEafpD",
  "key26": "2tCJ4L743zNx2NzYWKpYS395QCT6xXM4PxxKHfA94u4qidcL1TgfSYLkFEhop8yppGUcz3aYuUQbB3VaD38FrbQv",
  "key27": "3b6e2AsgD5TcaGshc287TPu8ttYBvwqp2vTPoQV9AwtTzJEYS5Fjw5DvSwcFKiGfPwruSbbEFrYFcwLF5gNVweL",
  "key28": "JnBJ6JRxLsm8YhdwPXgyEQ5Y5qzF9Tzc2qQ2WXCLbmKo4uxq1eyJh33imt6rYW2dWeWoG5ywYzBGSpMNsEDStfd",
  "key29": "2UYQnuvbU3B6kevnm5PyKng7bvTbTXZpgQe94ULE9hFd6d2DJsyocFP8STEsqw1tyhoj8uk1ybS545RRSw8n4cz9",
  "key30": "2bDzXNtzexi8eYusSR8LWjRXZscK5EPKEEzJSVTG9APrgnPzJ1ZWp3QfBj8akqhC569pqsNcXeo8AfveqNuVioDS",
  "key31": "XU7aa7huzv7d8KHgQY75SquXnKuHK5JpXhXkvi1Czu66oz58SStAkmWg6Eh1Dmdd1nUE3MEgrDaXoatmcjeLTwJ",
  "key32": "5UmPrQGBwJXubDbXPNyMTpspSB6yQBmC1HoifaPS8VNCvzTyAUAX5eq5eLkw7XiJvDPjbw9X6SNxCWm6r9A5cLW2",
  "key33": "5DRGE7b35w7ESS6mAT4SAoJsJuLBFasgP64Qdygzro7UeGLY5bMoZKhwcFf6pf9CrwdKn6iTycFuvX4BpX8c714F",
  "key34": "3g8sqHvou1es6VoabBj2ZiHdH5AvYPrHvP5ZYD5h65F4pXrqpMsygkpZR4qoCq6uH2aMmXpQXhjPw87f2u8hLfqA",
  "key35": "3ksFB2ZKZt1NmZD6nLfhMNE1vwtxQYbkawdt6Y2RjXPxd6TuoDjx1QBmbToQ66uxMH92FWmJvX2x5JbweyZnSvek",
  "key36": "3pKt3NNW9Ue3r2VQ5Rd98cWe3c6PfxPuMc3VHnmVC85znSAuke7gJkDwBQP8AZUHDdJv7gsKCnKwrfrWzuNf48e3",
  "key37": "5MYHtgP5FqhWqVLvJUpkXFbg6SAeSESRDW6JYE36uSfzNcUMy4iVDKrJue8xF7NPFZ3N84x6sE4S8orQniGrWDYK",
  "key38": "3r5uvAuHqXRhZaDhovF76NVmrkozfL8jvLALTumBoZVSYn2x2QLgAkT3QYa4YGKWoMHnhtD9CiaPfrJUetfcvyYW",
  "key39": "328H5Qbj356Hnaki33KkWMKPsxWtmQWC1mA2huGifXWSRKHcexeoPiGvbWt5ddRe8KoEbQ7aA7162a3WhbJ36Su2",
  "key40": "tWHH5guZBrxjw5LWT4PNVhydSV1f56SXVVDGL7tZmy2sY5q5REXste1URqFwfuKat2MvLG1DhSsKBrqFRtDTEaa"
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
