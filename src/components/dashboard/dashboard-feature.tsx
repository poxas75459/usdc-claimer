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
    "e7CDPPVDNumcS1fBhAQZMnSARmGX1xGSeharVMxWwiH71aLzDVVH2bfq45b2Y8sq474PHka6MKKZAdUfxCgXXc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoZariDK8KGTkvJ9RJgYGQYL4umR4hURNNNHMQ3R5FbfXV3smcUun1n9WGrEdjEf9AxDrysnRmkuRJT1qz6ZKsM",
  "key1": "5TDtTz1HeT2FMgmHJx6rAscZipE3hyRbvc8d2WENXnKBHf13sSyuNmvXbUYTXmRmn1Lrhqd3UoP4TUrFxwxGxTjn",
  "key2": "2LDLCXcFUCbuRh1ifm76cVUV5ZPjqqwHFkNwUrvKu9KbLLi5nuJgRkKBGUcGUuYZ3jZdz5EYG7hxjVMXwyN6ti8Y",
  "key3": "4hXtPsacksg3Hqeum3h42jDehA4hFnPUB1LQucPouwZpGFADHvV2LBfq7ucJSd57UQgF45yu4DaR6tQq9B2Z4QKs",
  "key4": "5j8gGukXAJj2T8UXYHoUeEBqBt5MUMgSxrw95ymhLsoDvsxZii1fKzfigjyA3Pi8NjNt7kyeM5dcgUT4pdDkU6Yw",
  "key5": "3jQoSbgCdvcotxJUkfZkjUh3NAEFbcYKBRxsTmwntcj6QMNe4h7h4rp5CaftZjn2UdLm9c79cMfaNph6KCzcfEny",
  "key6": "42ewGn4JZCtAdoZDapnExg3gtxBhHdwvECC3yK1b81KDhBrs1Wpp2FGJdcsge7Ppzreka5MFk6FAYqs3CdienSVG",
  "key7": "2NqYhSdhP1GsEgW6cDBokPFtip6mfboiBrYaKqH2ZeoRw14tQT4B1k1YwsuD3wCyGmtKfk8yuFCYGh5SvC6M6fgm",
  "key8": "4qCt8TdmnWFM3ncyo2k8vBsWjhEpJX8z8G6x4CQ5x1BCmcMAXc9hW7WtJa8fKWCKbnAztmN3uddtqw6DQ4P3ekWV",
  "key9": "Wg5MSYeGrvTn24wTNrfjn2QFLkPkJKjXSWyjpsAoXVVbE5DzcihtUqZaMKHYt3VXypChhV6BdVECS81KYBG2vkq",
  "key10": "M7ESQWCpWZbadF6fB8hizm9g79NmG5hQ1FU82XCimJD6stQPV1WGdPmkUz1eZ65r7JAWabAWA7d1iJFZChqLBGs",
  "key11": "3riaLk6mLmc9KtUAC7KpwcRVA199aNWNbsfaHvicA4VwECdTqMP3eCX8zt4Mny2S61kRmEYhtFfSuC4A6vCxqzq",
  "key12": "2VfzmJzP6fG1zcftjrVp4bi2q7tzzdFS2epXEmS1dV9K2gfPJh9Cp37s7fuJ5RfYsHUxwAvLsm2VYYSuSvema2QP",
  "key13": "125fnXcC3XBnhxyDyhoRDpMgDak3KqVi6BEHiAfAeXXa6hDFRGhifkuf5NdfmTV97GJhgrphjZKXZjS1Ge9KsoKB",
  "key14": "oiqQjc9Lk9zuuqdY9EGEDy5fXjynUYc7EhX3EwX3tkMaMwcZGztjJxX1BYoB1zqzET3wMwpLBYQ1PrxaCdgoMiv",
  "key15": "2ZJs3t67twf98scg9HtQDjyEdr3Tnm19VQzKZ5mjkx1XSW7ftzP4zsWGmonxEppHcmXqBQ3akY28XBV99ifxH7BC",
  "key16": "24QcuwXMVLkQ163wifZGqRZrqECRMCJE12kPMGr9bresq73hUZ5wALRzbssRX8f56AkcW5B8Cgj5TMe2iFbt8hKH",
  "key17": "44aLy6iLK2YLZ3L5LRZdwgtyhKTRA1DpTMJmuH5pSj7qpqZY5toV7WzS9GsAmzR5BMiVJxiEvHk6KJt2Rv2AFKzH",
  "key18": "4iN2kL2jMhyifdjbStstTECma5iHMtZodA5upr1Gj98nbSbku526qHRt2zb5UzftodzQj2KdBgWwJ1U8iEkarMjV",
  "key19": "ttk7Ybw756RQFip2zjGNnmtRVbx9pfMSgYU6Zfw1kZ136Xn3bV2G145RdQQgnjAamSHPbDPCTDfduStnUMZF83i",
  "key20": "4WuiSgZAK27iW1tVwyEpoT9AZirBeA7Q8jAmpdDZ53nLceC7scALDd1qrKj8szgqM7e2L5yaLm42PvNZ1YTHuWB5",
  "key21": "2Exi8XgfCJDvxNYB5L35QSQjHAwWuE4bSNZPkF2jrHKLvZxASqFL2qJGQwkTSsWa8FvUxR8LTFMQ4VUSXqqBr11m",
  "key22": "5sPUXbfCND1CWievAPzgqUohBaGoTTxQ7ac9W4GsKE746sNxRZ7L5BimnCPBUBW6Puz7H9eDTgLeWMm21jvBzSd6",
  "key23": "3ayKmQsgGvw38mBQoCRZ46CNhCcBx3EmshptAppMwc12Av188jBSzZ8CNEnDwsNKufucijyn3Vc1zphWFauvHgug",
  "key24": "3Xh3SJ55bUQG4xAYSM7jhXnnnwssCQjjhSVqe9S7pGXy118ewmB58r3eJomvaQ3KNB9W492DtBfmSPSKs4GEZCf9",
  "key25": "31xfM9F5th7i6tsHu5579YFWFbyN9PbSJhUh2Nnpexy8P9kz14CpUFKmAyVb6Mp5bJpXppY8sxwVMkVvsoWoPheh",
  "key26": "3QUFHbaG4CcAgxgj2HEW83Vhie371BaKm13odMu2XX3XQL3rqcfintrMgqfngaGAF4G3F7LERrR67Hg7Xdn6RiFD",
  "key27": "2MJK8PnQRykrhezJJKDyufKeWqNLuKbddpXLCYf6CLDkAmU9NZW25qXEzqnjTjSPESdqDHAEBdZmcgcRQdkxiBxH",
  "key28": "3KDSiBx3t7xEuThkRf4WFWMX8YN93Jcto7gcaqmUr8WZ9WKgjKucxAT5Y66UsHmevhw3jCeXVohEoNmpsvheMRXb",
  "key29": "32wN8VbHTiwo3mb4ejrgu8eBCFiwxZuvfzPYuwYjayo6cUHQt6H9V87ebbvWaw2TJSkFc8NDnUaa7Ef8krUW2Gww",
  "key30": "n6ps9hJHEwQeZ89VWeQESXU7ndvpttRhEX14Xjn1CJ2u3J7v1NCYCto82Hm2AmD9QHWRV9MM1xUPM5zD2a89wVm",
  "key31": "bNVjUsheJkcfT8He1jemTP7Ua1wb44sHrbK3Ykres8ZESicGzBPXW2fs7iGMtkZ3KeDn67zfs3D7N3n2U9U7KSW",
  "key32": "5ftJtYvh9PpqBT5jb6TVNnKLDfogRwTveMpKs1WNL8fDdbcTD7gBcPvsgBsgAqwNpqBYcvzaxXPbLQeVdcNGKKNm",
  "key33": "cWF4sYADrJjwqWmKQ3kn57aTAsdxTZcBUgXkyLs1pyRPsebD7zaGDB6DzCW4tEQXuo3svPXBCHPhdM5hRGyPovC",
  "key34": "4nAam63DUYcgqSx1w9afDMUdnYfGkzLbctzMMZhmGCinBQkW9FQtxhrrfwGwFYobGjcWJn6M3xxZvw4gkDo9KE1D",
  "key35": "5rTJCSWSxkCXQcpYsbqvZRDg17v2vfDFJ3UnPVC9YLeMdkjpwXYDtB78F5CxjfppdGLH2EMJHJ4HQwv9c6hMTTpU",
  "key36": "52uWwz81fXx7tCy6rLSdCw7wKmjwHPFUtibAhiCDjX4Ue4yf8iyQ6Wi2S9GKCLedMPEQRBvxe7zemYkvXyDNybZi",
  "key37": "bTJnHseTtzpbHWtTJn7KX5vg3FSSKna5S8owc17eAgA3jdHFdAZdow1LNxDY9oA8HdYrNeXTAd4aGAgRs5DQYgx",
  "key38": "2y4nCe5BCTzQdPNrYkPare7gkd3nug9b2iYknSr24h67xKGxeXYBpH3i6ZA8fnDrU3qp895CWTJRjLmVKuq6ruUG",
  "key39": "4HGiSd5ZjWzH7JDL6sYQ5yuzmMSQas3kzvbuby8M4pxeMVQGBErwYynQrJLWqjL2F8LBmKrKsTaaTRMQ7Ecffcdm",
  "key40": "2gSvpaNMzXPqp2dtUsR8hRHzHdPWmb7Uh1E3tCZcTRB6utuafi8m4HTaunaCyTWqV5CGutwHGHqwAdRvFCxqpxX9",
  "key41": "1RbWyTtu9vixau5yYFT2L9Mj758Hqsd1fsZU8Rv6cRhECT4Jksfx86hqoq5xM1xvVojUXgFBKmfgsecgToJAobT",
  "key42": "4Q8sSWxojcHvBekxZvrMECPbykyPD6vX9QFc9v6iTv3DU1q284y63TTAugAQ83V5DsRffevdpxsURXTb1VjKNtNF",
  "key43": "fCQai7cHhQatQREPSSoKMztH62wjgM5uknSpTe9JmaRkjhPz7ryEr1tL112cUsWKj81gDKkA7wHf1CQCVsqnuC6",
  "key44": "3XsGENDfiZTvfH4h6BGHb7FSwxkYNNy1c2BocSGfBP2zU7LA5Uo28MA7FFFbf3F1uo5kkMuHsqXxvdPMm6GS45ke",
  "key45": "4zZVYuZf6bnsaH58FeNpyjiSsQkcaegwHHuubJGbBwanKMnLq5qhR3jePW4bMcGfcmmLyzEUa9P1mGngKYL6jozJ",
  "key46": "4XejSaqC4fgsuVo1Es74HBQftWbdcDAB5X3Sw4fTVpdkA4r749dmnv65vvhjDgbx47XkVXhJw8wRusgcDKaUbRpF"
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
