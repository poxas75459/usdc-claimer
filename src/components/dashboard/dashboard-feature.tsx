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
    "wmMR1GEG5W4Pn5HSJ8cFgCR4CHS4AhcbNCiTqauZ1Kj8fdubM2dnagCxPJrSPpsdCGuH5ZvgMcDtnfSDvmKoe32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KTukcG5qhcPx9r9FLTgGa3XbKs8KPBti4Y3KiBnHtcRpUXPH6VbcvYumhk16TDQLEm929NNzcNH8vcSd2YszgHt",
  "key1": "39MNaEkpngjyuxWQXYQnjraBc1oyDusYdaxSeWsB8ghv2VLL3dmvRRUALGo3gsqQC6Hx1fodiaXubeP369zhQ6GF",
  "key2": "3jkKu3SV6dcjaCKffpR3xQv1WBqu8zi733ofou7UjXTDom7JVcvRq4p8eSAGpu7ocLnUscSeMXCvCKNdpgCA8hAM",
  "key3": "3G6oVbEEkfxpbk39MrCFKexLusST1htBeDbrYgJ57fJq4Bxeo1958wZgfbFqKppFEhWjFqm6V87b3Tn8FEPBHGgZ",
  "key4": "4mcASfNc8D8N2n4dFbaweLFv7AxBgXAnzqkR6EwddhxnBTBtgJMXmKj4NBpMwuH4hyNA64CTzZGxKqsTBTJMhT3q",
  "key5": "4Kh7x5pCrtzFgNJKPpsxgEYvzri4V71LJj75PV9gg6p8ta2PvsSF4J3LagoKKqexzMCzgLUbFVVrVAKgRpT5yhYz",
  "key6": "2tQ1ixYngcV2VSnujokreHBjxeRa1vANFvvGaVx7za35Ci4YHEUoZ37rZAroxvyyq7bSx9n2Ab1YvsLCF2sHtazV",
  "key7": "65WW49jH8UdbEf5mir5S1MogfemLNuM6juoHkb3G4opjYYc8P54Cn3ptVGyudPipmcqWLu2mq9JZPwa9gn7NzKiR",
  "key8": "5jPymUMJBqgxKV64osWJP5Z7jUYARF3XziYo53vsbUJBQEjfgrN7V9yL3LwyE5F6sSwfMmt9kiTcMhcjmxFuary8",
  "key9": "2e69xLwGfUJmgVkxMCDo4jWgCsSvYLzMX9tax12JqSJkGVuPqSWwQQbnY12XzAtkKLB2is2D92fSNGSHHLzACYm7",
  "key10": "2ifr5Sj3babRnG8YBUBuV3FcB21sQ5ykWnkZPK4KPd312p2KWgJYz8E637g8qWm1xsSz942WxMgwaZCNAXiRqdyb",
  "key11": "3eKbL9cb4mfdXTAaY51hixwAELdZfW7wdzqJTNU6W8S1ZnvqEvDqt7xidASQKWQneZs44f6b9mSWwsc92SvQdCWQ",
  "key12": "5efKCKL9CeQMDKm35ppayzgctBwnVyRobTynxAXXC3JyGUtmc13t8TWiiKZ8um3eHLgEygqe1dKHnUvvEk1zpYCw",
  "key13": "5qapFMeAnTDpPGQZFWhhjFES4c7LArj1qtEuvWFV3BwTi7KRnqvirUR7cKYypw9n6Qv5P6AMWRxZ7nSLCVm6CCgT",
  "key14": "2oWQ3NdB94t6B9wCvBL1iRCqSaHCxh9nM33MmXVU6AwV1GV9kdpeLBsYrGNWa8qpvUMHPXSn1HYU8hrWY28cy3oL",
  "key15": "2LRwkmzq1P6PP4MBJ1e6UdfxjYXkUrcJF4NkMrEbERmoh6Vf94ARwSeDLWHqMExh64Arf1TCRy32ySJdk6nVvQtJ",
  "key16": "4f297khLJAEnJNSzfMscPgGwEwpYLXbuFPsJuEpEkc87cu7pshVpwXEM2iep5EwBXJ5tg3ciHnzvAZh1mBvU6RQk",
  "key17": "E7g2i4JcNH42ZuqtS7F4xzTy4yK6wiggwR6eVBNrUshLgxTmDSrMHBJdXG7ijJwntKTqjKbFhpG8FNXeP7BCFuz",
  "key18": "39kKWVXMsjPgHxeHSZeaPdeyTzPsKTL945Gj3HGeWi2SjBPY2ejMzguhsPdvjEWAkkc8p7QrMfT9sNsYTFdptQKD",
  "key19": "4QBMHknpCxWZzMYqDKPDf1RBAKH92j31qYNcNonbvxRQM462yfk5iBgbEYYRngqDALjHphSqrZvkcqXvYguwzE2",
  "key20": "4wcezfnT4fBuBE8yPs3P51dJUAAtkDek3LbiRPMxNhK8UTMg8LQV6J32RoVAaJ9kkLpsNPumHqvf24VMMtuNvyuD",
  "key21": "h2GJA6LqLjVuitDpBChBg65Cc2zQcE3vKBphGPX6y3vSdgxADQmSubieG2Cm3TGnEjFiFgggLA2WM5wLDUUADhU",
  "key22": "5VZJR9W7d5dgMvBBzj8Fc1f2pHqxxv6BazT8c3CQ1zWY2CqqP7pdwvzQnd6qZMK8ffmVs3MEAfUk9SWPBK1hBxdY",
  "key23": "2EUpZKsNULmckkZJodm5PHYA26GmXKd1ReYzXSDRg1p2b7goYjJw56nCAQFYwMZA78gVRBEYco5FsMJDrC38z8ge",
  "key24": "51k3Zrkcx3q7WPTDDgPNn6YsHsB3MRNRC72NFM22J9a52XsD1QG44MygzYGP7p7gtAA7cgXc28htjpJSSo39ju1v",
  "key25": "vg8j7t8XFSxJsE1zsHdJffJCfqWpJGtSF4T3mrRNtFt5Vn9Q14hNt7omUYXcXj1RD3jbjkUwsFKqHSSyoz56UHB",
  "key26": "3rpqXpYE5XK8WMFaSuK3icmDwBGesXvVbQ3zfyfx4xcYq5cYL8xov9Qp7nnznqXn9FxGKAJfGQXoucNS1euAgjK3",
  "key27": "5UxcunoNskKj19WqqiH5nJz2t32pbCfnJW7kv47rueyTEv9pRWhmFjmoHRpKhSxDjbcXCCWZDjGHvwqvMWyA8AK5",
  "key28": "3a8Mnr13hYoTma33Mzgs3Ae3ZjCTvyyYj98DdvKvoTmPTRF8MLk9R3sGHatup5VcQFU9rQidzAwckA8ecQgDARsL",
  "key29": "2KEnU8XKUB1PDmKwZoTyNRTqxAYzQe46huZ6cNxVYzsM7YmYZLX4E2vrpbJqS52qeaU7338APsmH5rtn1sGUV65",
  "key30": "3XBnUTx9CRxqd8nj3wfN9MeMBKuxGPbRiZuydYBhhzTfJPZZ6tUDvY3zBakbcH4vdkNh2F64HvffyNCmGrf3Hnjg",
  "key31": "5QuWChzdbwUJ2UJGuV1MdDT1MPdiu4NrK36nxGcDmeeEtJ2YqPpkLWqrinhcE4SGVq9Bnn3yo99RfFXhHniyWCSg",
  "key32": "2QXf9u1KQNm2gbV6TigHkoKNCSYFrY45McNictPAv1ygELWmyAn5nrrYBQLGdptm5TkGy6vH6zpuRAJaEgi83Gpq",
  "key33": "2oPEBdKDp775yvkfrGhM2rBKjXDjeLrE8BTBVeaY79p3ca3s2SPARsYPbDMyk37Y5gsaikVej3yCfUcu1XuEFquq",
  "key34": "32V9CqL3rE2ESTRcWfPLoAgGhpNFJpBJPkGkKH4mA1Auz4odgHjfkN9sVTsqWroEPe6GTS5GCBLUJTtQbxqbk2ZU",
  "key35": "3psLUS7dYJM1d8tzNKS99vqT7k1mQzLj9h1amPeh4zP26moh4Ey1BJvTqk3m63nCdx13suiEt1xxgdiwdxxyRv7N",
  "key36": "5Gs8ZxkuekJAg7RihHpY5TZ5fjWTsBdJ9pc2HwMQDNBf8M4aznqRet7TZLnn8HQxtS41Q7xJ5gPyStrNH4NiFTiK",
  "key37": "4KDmgN6qcPUkdq2SZrzayX2MbAtdxxq98F3VCTeoygA7f9BwNC4APecPqrKEd4wDu1s4WCgWyvcqoGgTgHs5rqFb",
  "key38": "2VhzB783sMxNXpzZf4s4Es54rHTDfF75bmxRUNeAK2CVgXiRegrY1YiY9kGiUUirgHUHq94wB8iWzbRPtdTBsqUj",
  "key39": "39bSs3RUE7hzyxW7hDEqzZp1tXY2j1Su346Ui7WjF6h29Ek5dWwNevdj2bWYjmbBtcbErJmS63SyfGgHGvPMtgnA"
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
