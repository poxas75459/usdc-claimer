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
    "5jSQkVhFeCGU9RB7mrcU25eBT45HM75AoKabAstpeVBNDDwohP4aHtSGpLPitochCaTWqbaQwJcBX2nvxTtofgNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZeajro915GgaDc8JFVvaUbdAJouVWmby2DmAdGMgtqEcPDANLUCVDdmbJZHy4q6b7XEQXZCCiDVQ75jCxb3Gvt",
  "key1": "2DSovQdgbBwv3KK6ADMxoMRafrvMzK4Qp9DHsF2yYKT8D1CoFKo4yriMHMevkfLP3wJKR84fVzZS1Mzojb3F8RFK",
  "key2": "2jFyMcuXrFhgonTEJMEL8TJDe3YMYphgUPnLhKbCSupMuE6M35bibzSob3RE86v189XjZemC9zTbJLDU6tNsABRA",
  "key3": "3SzeELPxquuGX5JQ1uJ9hRC4AU8j1mVtXm7j7XUEbSmGrPcoapBKuBHkpgwcVAkM9HoZFE75DVMmdEkiq337hdgD",
  "key4": "3APRKWeWRb8mx9RKK92Puqw4bU4hZT179dJfGMye1Wa6DK7dGJUN2Kc75dwdV5atgFAheRE4u5ebmZJB5sWDixXf",
  "key5": "4hcXyL9K86VMJux9cnX5ZKQJD5VxsDC7yzz6hF3BYk1DiCLYCTeLrswzkpQgpBj32Z5SyQHF13ibZABqoCGxX28e",
  "key6": "4F4rapsTBvfGeGSY2BtgiSyXxteHcQLHgBwqa293EST8WaWPX2jfi864Xp792HjSQbDofjDnus6ioQGJ8UdNTKH2",
  "key7": "56aaRWi4TtzjKD4Hu6j3GSZwWVwH2WPYBgCmvhntn6C4gqh7ei8yaiNzezcS6URsAV8apdJWi5rQRYToUQQk9N4H",
  "key8": "2hokLRwvN42nXio7uRCFgYLvSC6JwppJT29sRrUGWpZZjyiezkEvNAS4J2HQnYxs6DYSo9ho6TGVsMkwFZcfxuiR",
  "key9": "3XLeRcgpf6fC9sEiBUz19ks931CnRFyADiCEC4wC9LmA9dL1GJxExJ4SZbRbsn2XjBoGnDym5hrrd1i3cADqezr3",
  "key10": "MUKhcazGs1Lp6KcJmj6CDDe8bHY12VPMuZ3TDAMDWeYAQrYMaFBbBW7KTMk2XVr1kVyYfFwaFeDHrn8LvKoMt2M",
  "key11": "2Z95EXTnuhYFALp4mAwgnisyHqNtJLXr9mQGxz2tJFcps1xCyZ68JjJQ5rps1zZUL1jiQW8iFTXUTeteAcqK9hm",
  "key12": "2JwLAF162Ty4qvnk7Xcr1jZMMHX9xnWKyZGYuUjbRoLnEixaw2N1Gv7zhf2Qvpw1XBADw5qTQ9GfxF9ja33tv7Pu",
  "key13": "2D7rAwRaXGQPYeaLtDoyJM3TkF9j61qRmFCBAtbGSuHkjhhNm9FBx8WQeDfdE5E7wiNaYDt1JJJm4d3Wg7YHUiMg",
  "key14": "4273NUw5vyUh1grkuptwKCqNf7MgGeSNZxQJ4gBbLscfiDWD5Sm2CAvhZkVy9XRx9iGW2GHHhBkjDJRKQiENz2Yg",
  "key15": "2zEVM1b7EqzqSASa8jA7XJ6JCvuXxVaJ69tT6nW7re6YSt38kvTZCRqjuCdLwPLdHE8mXFvdWL9gZWmA32DrK5Bm",
  "key16": "2uxWzHraG5KdgXuYukMi5Skjw2rBtusU5eVbF9TqPUq4jrtVCsi9XugVANV6mWsSXi4eAoSHPGo4U3sJgA1X8SJ4",
  "key17": "3GbuNKJ4jDYkmfDtt1VBLmxdDv9ULCsPj9xeLBNmSTP44p9isQutwKrvxt6GziqqVneHPkxso3etxn1M83mvQgJC",
  "key18": "K8VJftfgcAmX9SpuC64m7pC7GRhAtiX5vysy3Wp1RWSYKTJG6kTPYmDcoV9cyy6yaHtYvrxveSihwEhxkPEC1sy",
  "key19": "Wsn6eQuyJxTqqKdt26Lz33cELohG5qhXAnMyMe4KfKYnG4vceoksQRBnyDfNRZ8u88LhDmQtyTTYuL5LgpfoJmv",
  "key20": "2vH1h3MvYx4FaGuk45KmKtd9GoLjP9juDgo67b62SZYNxnAZ4q9qvAgkW8taoLfUcpuXxHCccHrhmejQ7aZ3BL4g",
  "key21": "RcN4cQKwVQTGb8oQhqJP6GdcsRVXS8jTpm9AqjZNjaNe12NPCCwxGrsjLrcBrqbKfV3gof97jhG1d4EcCTwEMue",
  "key22": "67abrivmjDT9eFkg99eFKMgFWVswANA1bSimardxjAdYMDUVizAZfD56CmGpm21fGydFmAeF7WendNJSkcHdqPfG",
  "key23": "5d418pB8W7cRR8jgSdpGhH9hG7gcWc2suN42tZ9TUx2AdJyCRstrWTRqSR3XzGwezWGniHyj8NudpDHTAAPG5ky8",
  "key24": "3irQNkftnrC3Z8Awzn2oUNUTy3SSC5y9446naADPDirwbc4t8MhtTEmvR9fksYBWJgadiQod3YZwTUF12FSZtHna",
  "key25": "5emUxwHCQ9xv3fs7QcrqNQtNaxPkqHoo6ifUknL7m196Z1zgqZ1SwJkDYvwzatf5N2BfUETNSa8xxsoBBpzuBSpy",
  "key26": "5pHYpkkX4dS1SzzSdY52yhQGEgZXTh5Ls68kBGDFJMmiRZENcfrVsers5T9tA2qMfgeiXY9QvB9LYRPGPdNJW33z",
  "key27": "2KAANysGtKYctz1vWn3qErei3LWYaJkaKMVhcZ6UbVGhzjNznAJRjvokwYAg6QPfRsx2W9LTJVLjceMWFvdogodR",
  "key28": "25H9UppNDQKK51Xeikg4QcebiKu7uepNWRsunXeLbApdYupXxFHuUgisfTRKrErANShdGL2BbyzRoJiqJCjJboU2",
  "key29": "35gePJB13cFoNZdG9LSKyQSCf2S1rvCQAMWnjKjuuhTE2ccVbRwXxcDwCDow5bWYnh7nb6k4HucceLZccHwuHb3F",
  "key30": "zkyECs9Agv8Nnurq3h6zYucxeZ47PPCfuftbAfavkjgYbzjG9iBA4H95xFLzyb3vsqp5o73upr8HQwmn7R35fu7",
  "key31": "2XZ6mmRNs8HXFvwpJ9kFFLWDmUjskBRrkYpeZYbjjB3aqFBUXCwt2WPXsKo1Pe9XTkSJBf6JvceEYJ8PbVDmK8Cs",
  "key32": "2TNAYfaVM1JyMCegFfpW2AqMi8rEd9XkXg6BfqdMohxH1zYyKqrX3TT9nonj1PuZbMsa14dEcMk7Q1mnC5zdsncv",
  "key33": "3kCXLnKnvgkvrKVBU3m1pcKkuDPT6ez3VxKsRupBCdTZPhiUjogh2e5LMH5sTdMucBzJFQUvBUx4udVpPB2AdQnk",
  "key34": "3XF56zcdhXbfnXhWkLcWKN8b8M5ntb5ZD9yXhJB6Kj5cYsRx3qCn9B64vwE8AqXQZBJsoo8pNvtmMQCLhxRFVykU",
  "key35": "4QnJDCW5Xp2LUNEq4k4ZtgHMbKjMbXwvysehFSzSe3tMYfbuEu7E5G8mrvFf7AWfomEF2YZBsovEVpbM7VR6b5JC",
  "key36": "5Gmq7mvgd3pSCQbw59UrNdhcNdffwK7cmoCVhsj6CsnQ1meGkrAHuetK2Z9EC5NHrZ1hGQcmiUFyYTvFkXRRpK7d",
  "key37": "yCcFmsJNNrBxxRRU5kaPZXtbnhXPrmLcEomcQQSkehC5oNws5erCPMRDwz9cNdfg7koTwktfhJ4F6oUczptSFjG",
  "key38": "4p2xP8gCudainXa4GFPPbDoTJzXdE6JokY2p9EkRQrWdUgsWLF6uG14VjrQXDHbFcsztkwUpnDSbFdfydroQ3n2y",
  "key39": "67ZWQoBVPbWGvhis5nKWiCzkSjH5JHobqDnaVWBKbjtw5Z9ymGdQoVx93cw1uMnsMut66k9bPUz5c4rd2GmCvq25",
  "key40": "2LchjUv9t18KfXXAVRGFTYJwTwYnnGhpUGAVDkhxMh9T8NRTL6aQ3RnS9qWHDpm5XjT6gY6jwuoGRmvhuVUx4wjr",
  "key41": "ZfMpqN5AcSwVknuDs4f1akvWNBQbAz3mBTdHs4Zu2Ztb9kWjxwbxffwEiFvb5FQ1qM39HEp6VBMTKVFFY7hi9Ty",
  "key42": "5gxkLgF9NJHAftTBsh9QpRQTQyVDRoS2k1myzodeY1Mxj59eWhFwY9vhLLU4jQaC3NkWseMZPxWvpoShwSX2stPH",
  "key43": "vktWBu2ptS1sQpQ6qwhb9E6b1tJPZa2X6cDg4oqD67gRRsN7g7Hxy1uY2te178vad6Lxo6Ey9Z5fSAyTEwn8fCy",
  "key44": "VuJChjPTbJ4JBPnzgDXwpWgDJ6myti9u5bftP89MCQdBoBfsnGzuAuEj7fY6MxJtzGmcLXuX15tojkYee4cyMPE",
  "key45": "5vd6YaSkiVwoVS3bvYWzdyuJubUX7C4NLPMySmPNTLN2thgZRxCgxef2thc9YegPHhg34ZzxKVtiFTEeNe9QuiQH",
  "key46": "4V2s9TjVEictvXKmXRQ8T18ovjKGmCYSAfKeVe7sYFz3MUQgQmuaQQSWtEjGcY5dAEf1puuphakYEfvVx7d3GUgr",
  "key47": "4Ss21rZGMDrFrHdhwK9QVjMqLCvvvLqZve1jDyYH1tZv1Mj73sBL2dYf3WsuWoGzKQJcPP5x1mhApQDb1NBzWaox",
  "key48": "daUKPtnXnBFccKpDx8wb2CZ8vuyFYqNcFkokHwy3GXbE3ehbMEkk8PBZngSLNbyoqt2tcQ1uzi56ajFsM9r3rtz"
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
