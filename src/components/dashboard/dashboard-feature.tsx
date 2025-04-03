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
    "3oqRTZLjJ3ipD9A3F9J9onqbPZrFs2WJDCfKzgfV1sZwSXFHFAfximRK5qJ7ZH3yAJeztCKm9ajQLNP1kcbgK4XK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7AEF2GLFB1UfbC1zjmx6WtNJ1ZGz6k2SULL1EA4opVQidsiD9bRAyEN6LfQ9Pfwf2dRbfjKbLKLT8QyBYPXZoe",
  "key1": "3gWW4kbzfR5H1vK4q1Xxw9339AeYqRFWEdDTAcScgDYkjdDB8ZZ1PzyhTk4N6FhZ96tY5ssV9VCaRLg6Ryu8bqqX",
  "key2": "5x91Wt78SByF5YPxz65ywsXE63KhAfsaKDgmYjG7zGUVUdrc3g7E1Fe4bqrP9pmQ4F94QUL5jYUnUDadv8AE3QXb",
  "key3": "4cxYuAHCHdSLKZUnws6U3vsRHFP3vtHctTwjGswSShs6TJ3SXXUNX2GUpU3MdHXJagrSmoiHivA2QAz6tQHVnfbQ",
  "key4": "3kJSXdhwhSfgY5LkzEFRUjpjMRWyM1b4VuVsStPoRF8HCp4hL58DQowtNiXodnq3fVKRUTwwVnP58fCeR54XzXgA",
  "key5": "somVeueCZvo96skZZYa5eejZXtBNjyQWh3ZnJQihtrJ5xoVEpRojnNeDzZBWznXzbBfHPbQet2dGUBMR5W1xf8Y",
  "key6": "24tX48YxpDBbspPBYnhHt1mSTnpRHEfuGp6uyVajoeQ9CxS5z7edcBuoUidYkMovjM47W2GuGTKJjjic7yCZFhZ6",
  "key7": "3pivb1B3Nzb5EDVxDsxqKRJ6faay627igYaHVX8gRCKc1Ki44A3kkXQUVqggXoxFoxmvxT7gBf4dc6TqGx29Bcye",
  "key8": "2iVwV7JC16icgrNvK4fqTYddojLGErwDenLxC86bNyMmnnSTe6DVVNwHJujMJjRx7AfFUqkYe3V1we1TG6a8MNuP",
  "key9": "3ezJzU3xT4G92NwQUjEx9ZcDEHywvUEMEqXxpz9YGNH1cPPZ5p9KtREgT6FB6r29H198qSYZa7WBXNfAoLUpeq1W",
  "key10": "aSNYcnF1zmSA3Kw5DSStVkb5gnuRKFMVvoKKGDpbabrjtprunfnvGiRJAQ4DQXkc34DP8ewa6CaNCwiA17E3PPw",
  "key11": "UKRE8oHy5XHw4EUgmhdJe7qSCFn8hUaG9eZpe9x1FpoNR1BvhunnERGHreRx8fnWBZStz24vq27LktAoK1NDK2Y",
  "key12": "5E2dGxhGMRv5rGeTR7P1z6x5dAc8Gput6HyyW1y89MYTKtCCveKwj8MKT3t9mT24jVNmXGT8sZLQkjC4iKkNhnXi",
  "key13": "2oRnNK4eNYSAXt6VN1c3gr5JCeJabfBgkbwcWynsrU24S6tjXy24D2MQ4pZV79tMQsPC2Rd3TVehYV72xg1k7wUL",
  "key14": "3wRCejWXZdwxU2CgyfF7SnMCGKkcVDP1z22nrdABy65K43KDvkBeR64yqTr5FWkRNLkvRXsa3zUJBe5UEs8WJdEc",
  "key15": "61sa7ucqrx8iFhLc2Ew9K1qgFCSRbxmVPJtMbEGtnNRGzLhPfLFEMTZF9VDhJJzMybxFiDGegWdafxMXj5brVemk",
  "key16": "63eeSiYFDj9rBcTPFdwyR6xTy3FcHFR5yUAj5shkWiMF4CUW4MAomK4BDnmbkqqaUGeApr8kiVPHDppDcTKPHVwv",
  "key17": "62DY6bQLjs71ot5fy3P2ZxEHuhrMMR5Hrem7KVVJWWhGkbubDroRo7Jk4A51wwCBRmk9KHcdeAGdPrpK2PpBhdUr",
  "key18": "5WDgnTq5rXYKJ74PmKz53YjnS85bRk1kh8YzzbqLfPvXJcMnrp1MFdZNJqNDYX4R8w8EhJ31W5dzw61JPdFRFWyM",
  "key19": "3xnFfCxfLRpHaKqZ1jyVQrJKFTiUmDkGh8gFc1fGcCVfbpz67q4i5J6RgauMkK1xRY4TK7bx2TwFUsA1GHKDupzz",
  "key20": "3SDx9oa2rnRcDgynLVUPGBqvYx7naCRULcz6acq77ngXBFr2Dxzxk1uDFJJG5VXnBCMZ6pJ7GDkgTdjsQJ3jcvq",
  "key21": "4o1Qaa5bQnLa4f3Hi3t4Kn7NJdCU5HKKC8T5Y8P4yUAxot42PdK2wrxow2fhK6iJPmeLRNwHK1361CbGNTVcNVPm",
  "key22": "3WnV9k5HtCGvPCdmZAvLHuefh826X1nGMWLZjd55RTgPZK2efKZR2fbDJPiC85bMSuJd3tiJjgzcXyrrV3DAsZr4",
  "key23": "5yp5NSVDPPnJ9dv9Rr5ubUy7FafXrXSqiu9Ez8RQC5DpVCQmadRDCk37M4ULvmQZUTvQXAtgnWXJgESUCJ7VUPdT",
  "key24": "4i5T1DvTxGYPVVmaXKV71BBWr4ZzX2LBToYXdg8VffVAhqm7gt1X41G9TZZvYpevkA1wDvNp4BjrvL8cQYruzSmd",
  "key25": "9hyQifYt7Xw9q8RtJ7SWFwDyet1KxLnaVm3vPC5C1AN3V9jEQcd84nMq1dFSFf8HkMDuA3VtRc42U7GLMSVeyTH",
  "key26": "2mxQXws4HdwEUtx4ivWFnz9Qe3Qhr6Kn8xge3PM5jp3CM5vPoQcRViDAnKLqwHNhBqu6aR7aVtF1KAoPwq7HXTfT",
  "key27": "3jJ3bxKCqABW83Usvqj9LoRcgbf6csZaFX5NHjznXSUdAVi3bWSXmfN3SuFCSzd5ukF3kY45X2ZWNfpX8RmPu4U5",
  "key28": "66DweTM8rNonHimfVNR6uACWUYobHrn87G5iXcPCyCxjh8XQLDWZfM8RPwU6jtfuDrjQ979gHEJXe1n2aZEBHYag",
  "key29": "BKrhBQxon9ZKGptt1K8eVJVqRs3KopHGezXmSAGAT8vfTXNTEiZL9ArJiauELVpyrhzsqEvyPnuj688ub6budcE",
  "key30": "2FqunQQ8Rn4FfffChgz8e4NduBToJTXjTRtKjP2qkbS9KqfB8Gu4ikJDULBSyTjKfiiCenp7uweYNeGysopei3te",
  "key31": "eTue2j8Zeiw4PH6YWBWaCFfpEAoDYmfKvn6mgouaJPFKxLemGyMmgN7PCbKpRZhbCFNxUCzfQxXLyEBa2GzXhfP",
  "key32": "TmXd8neDPS5AFNDV2oQ8n9gK8sgBt2UHU6eEQBiXM3rUhLxdnEnd65cnyDzTAtEjWZAv9UhTaXNgLDmFFbJ7ooe",
  "key33": "5XksgAioMxc4RGjNguJ95dJfBEzmkcGzbzhDfjmWEwMXzTvZ6F4MWxwr6qL1yCpUiA6tAb9gasqB8fh7bDhkb1ze",
  "key34": "3SSQc9R58jaMPgQQVHvz1y9g1RmbwsoPXuuN55DDdyrk9tQv6T57oGSu2Esft8rDGYT7ygPbRWfVbmKhqc4LmfQP"
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
