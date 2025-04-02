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
    "NsC5F7NnHLutjet1Rzt4Ms5EtKESxHcnvuoUhReXQeW1bRanF9SmUuC1abFTpwddiKwwWzUAjkweacY1yqHoCBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VikssVvje97nhm8hAJ4S2NojtfK2Xh7XrcGE575CygJHo63QmJEqbT3VaF43NrXhnPFX53DTuAQHQ2X9KWyESgk",
  "key1": "57NrSw9nnHTuTXjF2dsXp2xSDnMNbyK2SWXuPTwWKYXyGHzzvR6VWujvBsPCoA5c8AMhpzEVWpDQqAxES9TnPsrQ",
  "key2": "5SorvpeGUoSUDpf7edUK8YtMDbhdftEhcCAobNVveKySezNkGQpynxEwQW4XVcy919AopQiiJbVQ12ETk6ZN6Svr",
  "key3": "4mYpczZoGcm3movRFJt9xhDrvN6K7x1sjrW99uTc9zomTwMRZikoMw7pT87sWhYBm6MxtXGiCLDeeLvJTAFVfpeF",
  "key4": "2pP49Lb6vQAq2jsfzjupSsNeyYxUarbZRrsugVpaWTa6w8kCxqfUZbGRURuyApXJGWVjNdSBziKpQJ1L34NdhtsH",
  "key5": "4tWPh7RoHDvKMWqFc4MD6FtL3Qz7xMErnhUz9excQCq5gLswGsGdKVjjHv7jhdEFA4skbHsGGTDaDrV3dsASCZwc",
  "key6": "3BK4oAk8qm5Y5MMPiKWN11iDeZMDE3vyTREzATr12erfofRVb9sTaVwcenJAJMZz7a8bEhvtTp4QzKxCj1d3QJay",
  "key7": "352dJoxX9jsGE92LJjwHH8gEMKv69MHd1h5D6Lxi1kjbZvG1E6VFxB7xoyuFcX1VUJ1GwW2UXzWnXULkR432GShy",
  "key8": "42n4ZZ6P1TKzXbKnkJkS6rz47DAg2gAF4EUbAXueNSaM5CDr67oUMh44jD3Hub2K5FzrxrTcU1NzK4oFvJZCaTRe",
  "key9": "2WGUzWRiNUE64jhCrb373SdzCsgwPRMzRvyRdsd2bxJ1tGRHhqLpKkJA4SYa8776KVNhtnwwQHBXhaCw8Rf6G2y9",
  "key10": "3K86KHCqg2xGzJ3Ena3TU8mXBghGHRqaCLNQhUZ2AAHBxEzYwT871MVooNDzzEBUqHiZMcNXyv6neDNXGtwC4yEP",
  "key11": "yGK7uuejjNDZwyGdC8ypxMaqrsHvybnpX4qTUJ5DwmtQ2z61pfDtG5LrHVnDPfwWQwEzfWi5Czcvo3EyTooYutR",
  "key12": "diZA4irmXGmvg4P13Bi1Fea7D98UJti41ZCGHGacTXnbmSmXtxjJSyeHkwRYDgNPm1KWHFWF1YLPsDuU7LE7mDA",
  "key13": "9gN9b1okp5Y8XTxwMoCJTmUWWoBHJ7AMC4xKh3hdoyYCwxqKUT3ivh4ARXJo6xaBzfrop2BuTSnav7s7WaTDead",
  "key14": "4t1wTTodV5G5QnuGEtkZdFreHFmi3yrJvAHNdoxSChu3xrv2WDyzJGLYxhFnKQivCdbZhrMMfwSuQY2mUkvMWExo",
  "key15": "2t1JHc8DZkmUJtezEC3F2StSbUjjQu8W3LWeFT66YLi7uwNrohzqhgCH4NXVv6SVuafjZxKC2edtgKTny84TbYjB",
  "key16": "3MBvNdJLirmXBtMsLPXkJqky2PY4kwf8UCYLEPvLLXwKyadoBxDLHxHsExMjsa1MHdsFwv5qmw5qpGw9FWZ59TYd",
  "key17": "3bBGrp8jQfn4ur8W85yKoqHpT1jhJtnsY4e6rhkVghwWYksyU5iC9RHMUZdCaA6V6QAvahWcNCPJhEVHyVWA9CR3",
  "key18": "2gUM1kCHH1Uq3nb2u6KezBmKZxfq4bMJN48DZTr88B6azfTboGUyrGUswnY7HTdh2KDfojYRXZAFLg2a5bnSNiJ6",
  "key19": "4YCCgysmrn2yyys9jiwqdk93hWZDegEoBCBr162o4gnEGrB558ciYzH3DrvmzRA684kmsBayMFEzJBbgwQR4TQqE",
  "key20": "3iw8PxLRdibCWP5uxLrYcj1xW447gp9AdWeGbg5SJ1fhrYnfT7TbJL5oN4577b1WndSwsKW75nnKeSFh5Sxu3fnZ",
  "key21": "35nogVh3A1h8gNaQDE6mNLYFYshTxBxmn5ves3C1sciiJTTDo43dphAzMoikYgGedtwarJf7NGH8sRVVtDZpFvfD",
  "key22": "2QU4v7UYkfcrcfuSubCDJC9j89DMNbu8kTTntVkVt1srR3TevGC3rU8uU3gAQP7voqLyiCZmgLQLbpLgeqtruJmA",
  "key23": "2KAoTTZUWAF5fd1pXUbx7uvEMmJfRiKURP1qwMfiQ3DcBUGhfRLE3nXpP7QCM4RJgB465FqHbxg9XJEhFSL6eDyJ",
  "key24": "5HjFWK4oGqSdtw7n2uLaBwtWqNFVZmhv9WSK4szswg2B3uSGyLNBd7LxaHpmnL2XNN3UdtaUAMo1NHcQLPEx8YXp",
  "key25": "3Z7QMmtT2n5ZVBxrxKPiWeVgZ3UjeP6PYR42t8pkg8n7AZi65o1JGbqSN48CH7vpeuZvmCEgVojrxDSHiSzQ8Lz1",
  "key26": "4Aym1GsYWyjXmPxoG1EETrKbezdyaZTzrwGguASamqLivbvkFyj73hRq5xyfXgcyrv7qfV8s3zmHzxzZhqPXGZas",
  "key27": "3hQsL7RJLWmdEBDSaeT14nhczZVdWhz3Ph1f4mkkZV2s8wiCm2rp26TzQvVCs4NSdZ1hzGD5cr51c8HNQxzqHHtZ",
  "key28": "558EgDvLBaxG5bu9kVHn21MYTakf8EpyjJh1ksz84wiEpWeDYBirpo7g1Ff7qomCJmcuc9pwUbNTnj9vjta7bmdC",
  "key29": "4siJpwv8S6mjLNCSKSQi5gA8KFr6ceFFyFUhLZHzSU9KTBcCib9zKXa6q5knMrzkfRuh9sDBbEP4Yd9Sx63EVQ2i",
  "key30": "sueDq1NFADoRNagtMUMEwU1DKAnM79zH24mDCZ6idQC4DUQ4qt8PF2dCguQnEHrismTvNEMuo8P4CW3SYkxFJaf",
  "key31": "4w8BH3s5TwkKUhvjhkmn7dUsfXDJwyxPaiV2Z6FEmP838vfWK3vtQh5pfgXiWqJxBMvEymn4m3WfDWQzVtaFhQCv",
  "key32": "2tazSxwtmoY9QdVMBdzfW2Z12LVxA9pGKRoLvXLNN1nbvqFo8XgcMTFzfKGSmvLCYGmnvZRcYtBwjnUPapA2YAdn",
  "key33": "2qVjdut1t3r5iJU6mFubS89EkD53XVmU8D7zRnrmg9MmK69x7qXBg8XWMcfQxeVRokKPnZBhEvqdgNcXUKs8JE5N",
  "key34": "5myDyL9ntFUaTZTWQjykB54UFtrKWoTyzdmqredCh7LY8fx1rjaX2J4LMAnRBsqBQEcLydr7R78ALQ4tGHb7DXUd",
  "key35": "4fwgVRoMpuX7iPZ38pu3cNZaaWtQdwxb3r9nmesXwVpFNER7KCUnL2EmdcBnbrQqPmG22zp7UVAx9Q4v8zR8shfs",
  "key36": "3jcdV3GvRNPeHQkcBVWKi9KPQLo5gwL83LD8cuny1uiJNgKAxamnikjX1VRSMAbxjFNfHHLTLBUke6QcGPLTpFYY",
  "key37": "4BEnGpeTPZNm9557BNmwvYW77SXKJq6XqvRQuWLrkQ9cke1F2kvrwAwGXvZ4bDn116ZgMk1QfrtoTXbUAVqHBeA8",
  "key38": "5T6Pjj74pC8PwU35RaWrDAG3x9UnXHMXsXnWjY4U9XgPnZpak4GVw5h4R88LNCTsnG16dN9ReSLUEGoRBTZpvTtT",
  "key39": "5VLArD7xPK6WDBqani52D3bLSo7Wupv8m3h4WS1ucFnDT66azMz5kmXWNRHazPMFSrpD1eoeow2U3wKuuUoZWDFr",
  "key40": "3U2YgaEpceTxGKck24zfS8wAnsc7a9txTCRM3oXgjWWGvg3k7NajMCb9dwCFqGmxwMdqknzjoNKgp5nc37DN1BTj",
  "key41": "2VGaSnrB8g3TfyV8To88d6p9vZEbLHYmXe6JyY86KFogLhS21xPXWxiXGVykXuRwtEdg1RNE5c8hofU75ccnY7X7",
  "key42": "4fdvJaLQF7J1LgGeTTMyC8nUNX7T8SSjvwQe3iNr3tjw9CJPpWqfPbZSgw48CnzZb38RXdSQqpY1UPD1VGc6cNdx"
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
