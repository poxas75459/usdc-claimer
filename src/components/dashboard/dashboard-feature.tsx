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
    "2EQHaNYsL8JZgTpQWMtwRQB6BungWZvXSJVZWuY5G6FuSnJfeDkG1VDbZafZZV4X2nXwJoM2oc58KzovY5jGdht6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7b8kxxywHmNBYRSLazev15LNwU6F66Qajn3Zqrf6NXMFG48DGPAgpE4S4Evk2hSwPXdDPZKwuqE1gX52WeDwCbS",
  "key1": "33gkVDz1zm9qUtR4opwYYngmF8sCQzemyBJgEdA7bxowBYZnDWtJzCTwaoWc6aht3JfhuwLcnr4UZkFnzru8CuRK",
  "key2": "4RcoyiAo7N8DEEyH3MKDRrWc2nVogybyDMHwBB399auwoZar97Evdns1VeC6JQZxGMLb1bVMqSUCiUpwWraaCQ6h",
  "key3": "hP3JGhvjpULJf3E4W4a1nMsosS8C4XqN7g9Cm3gLVFBzvV9Y72q1PKjqXDpjpVuLhzvovLvERWk6JGuf2z74dUP",
  "key4": "2ChHD79hs7KgFQDcEXHAms33MguBDkBqFD8ZfckrLUr5PWMMxwD2NaCLY5i8f2TPv9W8UqBib1aJnis3W8rCDFAZ",
  "key5": "5k98LovWNZ6ieMpPeVGdctsnD2MB3BWr15JdgkS3tt2uvNByS981ByaEC319VNEcXLkkULsMhTc8VH9Yu8dSzbm8",
  "key6": "LVmph5gEhQYNmMVyWXJZrLyVdauvCZhTU4qiXLJ67erC12kWPFvhxaMdb58yKGY8d1GdpkzFj3K3rLugqXzuB5e",
  "key7": "feVyT4pm53jrgXZ6RT64NZwvdZ1VqEyFJghmnkS8pvJjqgTUS5vekNMcJ9QW6HeRdFrCf5LjwCXyaPckC1t2L84",
  "key8": "22paTwRZbUYFZF5SF2eF2qawuzz7duRn2x6BN57B3UnWPod6B3c8sLXEgSvUfgiBx54JMfxZjeKLULx57dfWcpEb",
  "key9": "3M1aMRLrjb21BKoWBDj5DDxU1o75G7SFbCSQLvAMZS4DUuRmH2Lcf418WAUe72hcUXfnLDrcChYEjeeMKUwsVNau",
  "key10": "45eDKQXtCbABxMZtQ2C6P7uT33KxDhw2hBd44LBXpHnveeXVoTNyQvgYSwZ8zi1vwoZ4iAnbuMkejmtjf4WoixRM",
  "key11": "CjMZ9wBUmdJqwfXQGneY23jkZiqm245Y7nRzEcMwPi9SrdyFJRcmunksswjUvxE1VcoL889wEu2QYpnsrQWNF2F",
  "key12": "2MVfgrbGSVen2ZmtAwVJzE7AbkHUqrKWz4aNyLiGUHHKhKMi51VbbA373vkvLLrdfRdWG1KBLcsJqsaQ2mnCD6GP",
  "key13": "2Jh4DgU42RYpFqZgVwhsET4qsau3xHyZgTQkX49wxguE9zeMvY4RfEGHtj3WSQjTD2tGmZdW56wo9J7foRjyD9CC",
  "key14": "M92C8u22HpVr17Yx3W3ByrTC8hvDFd6BG8BHVGFNA2Ht1r6MbjubAKNZLksyYtYYrYvdjT23Ky8WwfFraHmEfvW",
  "key15": "4jYuu8Yip26sEPKTFFLgZ6GfAEgf558WHppZSRXCGiEvzGVaxDhhNeYzPLt3igry7yFkGGvwpHXcw2WVQr85wCmD",
  "key16": "523GDCfHM2UWZNCrS5Tz2CCZfmHw2bDmn7xbLbhonSMMumzLPwZ1L55x93j1cU3SsGvaiuoXkK7ctPayLdLgBBfo",
  "key17": "xaTKELVDDG3xKCWZBjkptD5hTC2hQTDcMK8A3skbBdotPaxRwuJ5b8kdYFaJV7yEofCeBrgo1CjJeNBkZ3XvZj2",
  "key18": "2fhwn72mYHAv1bvkQQKtVvZF8ie6zuQVhYmMHMwrBzYLGjv5RXY7pTLe5seZRnH3aPEQdfRvBfB9x23gHUu8GbR5",
  "key19": "34FDmfFMdav4E1gTiNQcUtm35gXjEx1CZekdzKztWyGEDiRUwsoLA2ER8jGjM7F2rU2Vz43pfZ9EobLruF7HhzMi",
  "key20": "2efQUQKmEmivKRnE1FBza6ijUjQyceWHivXPUFiE7LFEXVFHGbsSYpwk8gGH1xSu4WG5nFM8sW6Tx97vucy8YJKS",
  "key21": "5DMpov8EtF4iXZdh4Mh7kKHCvofWDuas7EGYxdo36FgCC8JLhdu1vkER7xJmLDYc2ZVpVHFLGwhWDCWhbJpomR4y",
  "key22": "23TxwPUU7zqSeP2aUeKDr7Gw6VmZeRENThQMkpMPtsm9WGeDpUcXjf7KtVyyRLAvVhKk2cv3eNr7Nh1myVzWGdkr",
  "key23": "3tAabz7eMM8bxZnKowroeyWczmxHpMZVdtf14BfW7VXsEJrYtFYwi5YnpaHufLcSBci2LXtumCij2zzWLNawwYYK",
  "key24": "4SzTVWTqr1UfygneRVthRsQSVL4RYZXd24vRwBF1S7E5A1RTMBjJ5b9CUv5jEjkwdPuAxVrEtmb7Xkoo9gqj4NZP",
  "key25": "42EzLCYyiBSd3X5ezUveD5qLFnfzbFnYmygLaH7hHnVBwUTofphEXfb6dpwGrwkW4qWn4g8GTw4gJxYHv9wsvMp5",
  "key26": "ungbCM5DUZwRmhPzRThJDkxguSx7QRHdKkUt932uMmQ41fKnbt3XJK2rnK7oVPEPLnxy2FeRrHH5iCySLXfn3bj",
  "key27": "5V98URYTEQxeVqMBukysygm9shbymynAUDXtecEQRCRe3V1gACUXPDi2VZHJoTTdC6JEXk2Dbkgb6yRwhhjcQRw6",
  "key28": "5cXMbu1eJUAzPv29mypD77JrDE5XFPN2aE7RrdMGXXHwY7JdS8ADdJG6zLbRxBA9gn2a6eoD49dSGtFZGWBAnQmd"
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
