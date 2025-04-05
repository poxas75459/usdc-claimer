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
    "41xdZoRHEHRWYo5r9RocudT8RypxZDU6VeUZkoZcjJpeQchbifaLqkvf5segHDXehhxCsj2rWBNxd3YHUoskCGPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9jRUCwEcxiFrrDrWtJtRUU5wwVCiC2BYL8MFRMRJqBGy1YwVE5TyYETBzcrDr6DZzGbchPzdw8SRsud7L31kzN",
  "key1": "3s5Pkv7rhocJ38Vc4LJHc266VbpoEKoAZwhm78toYNPR4n2Xvk4FXKMCfd6S58uCLq4iHKvjyv1WebN9W4wULPME",
  "key2": "62AboSf2ccV4CeRGQst2ybwyNT6225QajszYqSnRVPLmNVx3VhfGMUFr84YUiBvaj1wHjAvQZuZ4W7DCCUMVThUP",
  "key3": "3cXNzZg4sGUSZdP1mPN4Csqshz98MjnoEZjS5CfdVhPHfPMAWg3xiRSkypk9qwcXbLBee6V9G6MM14cbsiVMz3yk",
  "key4": "2qkRYqFXEgPSTmgo8A6gpGkA9ragxBz7j3rxCynQMwPL5v7dxqVA9TPAXefVvvE18q4WAxqPpwTXYgicnjXDAvM2",
  "key5": "hPqBAMF91UjezupZddRzfgMRqcrkp9FNWWexkyL27QtNfH1k9yBYSzZ1i7EbhWajptwMVs1mGaPqtwEvuDAkCDo",
  "key6": "4VrSKPZexuHsPjVMpFzx9Y84eBCwVZxVfQTQGcKRPa9bhQMVDK4cSqAWpueAykJYrf4tpth5ZeruzCyh8TeRzmoY",
  "key7": "2GYnH3eR55yEyiTFNBCtWvM31GMjs2AQgQi23zqqGLzTXJ6UtLYckqRcc5WtNqyAFdcyzGkZBifqroK6k3fELCwr",
  "key8": "35AdwNunuoXBSHonaJsrPonADdayQSoigdczST4de7EpB8w3LmepNWtCGaDnja1UVSzNePafGwBBoWRdtxf992Sq",
  "key9": "2RL6Qi9eCqWssMwZHguxiH73XkGF4ArVbEFF3M4Q8mVuNwKdck2YRCE9P2gqaQqtwQqfDecz2qkkzpgFrhs1kt47",
  "key10": "3fpfhpm9swwsnBZyuSvdPqNT7gMcri4ohoBtSX7ScGcGGT9C6srpPjy1fA9sQWs7cjy5W5c4WQYhXe69kGNxMP7p",
  "key11": "4m7emajZKmxR79t8V1S5vEH2swa6cWLboEtaS77ytgWJrbsykWr5qUDo1jkvBUD3BDN3MF55sFdz3dYereVJLE2s",
  "key12": "5ncqMQJdjwDGsAEohGPdDgNYYJmSEfvk5UpzUcQ5RX2Ahv5Vc3dD5Rks43hMFzALa88YnffPa5sRBu25rYudFPBb",
  "key13": "A6zdUQgQqdwWFGczCNmywSnqs7DLK6ZwLFYT1CdTbKxTdENfpvqmNqAKFevMvLy367tMyRVmeBJbh16rX1pGQsJ",
  "key14": "5u7RZWb7QWbhZ2GLZyosz2Fcc1DiWhT2dHSxK1kXyeyo28J9fi8z8eFcBjQG5auWz94PSo4Boo3yn3GBL7kBCo5X",
  "key15": "3ytqYXNLXuptkkWSKxPvCjuMrx7euDb3CBpU8xWs8zWSe3BkbE4hotvg4uDp1oeubCmBmThv78LPryLgStej7QvQ",
  "key16": "2g9nNbwAGUUXqy1fJEe9SjmB6tT5jTtajPrJkbDWmuVqNekz2AemhzijMbJJpbBgQxs4DVtSMJbUdLdRvTs14UV9",
  "key17": "5kUiJH87CfZn4uTJa29R93EZs8MDmkEfhW7eFbdYCNZErbujFnDsF8Mz8b8dFEnBuZXauVbW3hapCbKuFD4KYHEd",
  "key18": "2cy5hg71ETXvjhiEhJbVnQQFaJhQi1L74iYwHM55dteuVGHdxXmbedNf4FcB6SoPGzfeUL4ByLn7B1CZFxrXp4PW",
  "key19": "5SVL45mT9c3SEWPuT7bNCZuGha1siAjQew61zMrkGRk8z6pWMpW9CQAUKjkxaM5MeWprehQud9qaj8WTWNwoqCUh",
  "key20": "2pZZQMmXK6DKNaKvJpoPLNph714zafw8bFiudgfBqLkLQLCCRFCJX2SinijP438bg1gPeZzBtC7tosFd2HzNfUZk",
  "key21": "29DhoNFaXydVA5fFhKJ7hWj9AzAu7yiibNufQd1JaTHUgRJ4gnnPfv2tSqcoPfhyNcLqm9wrrxCJ4nP9eyjcPQYm",
  "key22": "5MJE2VBvRbSrYzdp9qDMZGxoJBhaTBBEQTno6GtT7ee8vy45c8xBAUXPBhM8jYJzwV2dGFUdsx9bmccSScXAiHwY",
  "key23": "3Ns5CpjpR6oedTkjBXCBgJqSDZBmP7s5aQDS9L1oxxZ76kvd6hc8AH8n74VSf7yEicMTwfTPwHHetAu1M4k1x3ci",
  "key24": "HKcEUuBhy2DG3SqQX4AbmHpTpSCyvm76haGZxTGDzZn4wL6NcUtxsi84haTE9K26A9k935b8bNzVV6DfxaVk3PB",
  "key25": "2pAGJ15DDaAui1tna7N2BzNTaokYgZewkDYsd4UmCm5cDouxQr3ywwntKJnzn4c7i5JMSGGWgEKqNTVQTkuQKjc1",
  "key26": "534u57y8kKLnFBy9UyuEhqPxiByTH8K3GAj3RAN8wzUEWthxkXhUkh3Qnxi8Un8bsPF4yijzKQ42tusNJNiRmx7P",
  "key27": "2UbMddgMzfo6MykgY9pfHFZZmxtTJKT19Xd6AsMvMu6yupMZCYqz1MkPCUv9kSPpLfbuKasq4PzDBgj8qNUkrZik"
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
