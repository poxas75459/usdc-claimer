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
    "35fyePQDKDsqUAAhJhuwaYoDEeq78soJycHHko6NYZZtS3fcbUZKa6s9pguQxWzKEDFzPcXzgG8K7PhjzMniJskm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMt1A4GDEQJMXb8f9Z718Uyk1ZNsbeiuxnxv3bBbUS9FahXjWtEo2uTbKWV3U4Z3Ebm98kPtKseZYHkAUFQAcRf",
  "key1": "32dnNEyiTJM5uUkXyWCX1FjLXocDYHtqdZw3kik8NkRA3vZgjt9hekzhMU69pRZteXVy8CCE7BAifmraBTzXW2vn",
  "key2": "3C1N9CRUvyqVcDzvoCngjWP4qsuqCnNbju9oxo2DDjnaTcmpTxwpGBgdVbmAV4MxVLkg1MTPG2jWE2uRj2G5C4Tf",
  "key3": "2AFtSJmPWT4XiJ7vM9v74UukVoywiHqkBjxquiizyxfHiPUo1J2kGhh8BGYMvn3xmtVBuDi21DrD7SvuJ7gcrUxg",
  "key4": "52MR4ytjxQ8L74ggg8DSQVZS8Djdc7Q3NeN2TPkVPcxnLZhCbEfxfiWS5vtefMr3R3zAZ5Pc2wtPFzRH9YPHxf6M",
  "key5": "5ZtGB6UNR4eSKMYUdpZQas5btt7xK2HpS6FpS9oEmArW4e9biwyiGFf14yLPKwyDZCz9TaGw5w47yFyPdY9fPfZC",
  "key6": "4k8QJc6qXoMqvoLDkLeMarfgUstZiLfBA4KfCA62BPizZp5mg3SJfcpgDbKhqQpkJb4U2XpXDAzxU6JHAg5BFd1y",
  "key7": "5g67cXNDcYMgXoV6yyT6gJLEikcf7kttRFeqp6fXBvcLrQKhR4QjwZvPR1HxezYANR3QLcsHwwAUz6aKqGPjd2S",
  "key8": "2SuisGPK6EdcTqNsRMHGqPsuo5fNCUQegEmX8edmLmMoFPzzECTLrLocdDvJPMYxbAcCgCzu1np9MJC7pKiak1tJ",
  "key9": "46nBVDvG2s9HtA8fqCEXHx97VgirWNQVcTmpRy5JUj6LZwHgjcAUHRkBfakriJ2uE8kJ7i7B84rzrthr8nNk1y3w",
  "key10": "3yweDvc12AJgixZEGWDWWfFmowkvqFmUPuKMSLsD8uZPDykZsxfUh2BGqahUMCaDfkN5sAphTaBscXHzDBKLrMQj",
  "key11": "rHnkT4KA2YtSXkgPHB9SNzTMKiYR57bG8S5h7paNbZGdqkDKiB6TCNkvBjhsp5egi6XDFnTJMdhf8ZdhWy1Hmaq",
  "key12": "5yqH7xVd1m87JTx3cU1kzpkozDRGBp17fNQoiL1RrZRoFUUxdSi3rE2GPGRMC8GWkv7rPAt85XjpAnzhjuA4PFXW",
  "key13": "3wnkwj8ft8eVkAgpNzUcub57M3r7ptK2q3oEnYycVby4A87vVdTSqBW1d1NbnDwJ9VU2gMsabWDs6Eg1QMtpnDKz",
  "key14": "4noiFLLhsPhkmZGwhQiDFfiZ4hoKMHEJTTtD8hvhAhJicmP4kiZzVr75k4p9NP2EhPRboa7vZriHvq5CGCKbeSPj",
  "key15": "mQv7sT5mLHDoih4sUxdqGCc62TZWFTKneG5MrKyGkHsEAmWEbM3Xxit8HegpCeLrx6Bv6kfP9WGydemUu26Sq6H",
  "key16": "2RSovK1vhfKSQbmF4ZBz2gdj9deFWCgZxanfkdG9h6DXLASKKSAoUzBJJVeqo3Mh6ApqTSZ8SaBnJrtY557qSDEz",
  "key17": "35Td42F22LaVsBwFv31bsDu2qMY9L9G5o5tQrhumK78QxPTPX3QJnmZFt1g69R2ym6zTG81Z8SUcYrtQi2rqzwuC",
  "key18": "4NBn1JHhTRNqFSagUT4fHPygNkGxVBcemhcycpLZ2D6HbDitwgVqMXVYUZEH6cisZi3AvjWcU29eqSH6NXsRy4Cz",
  "key19": "2suqgHAfi6wDSTVaTXLhC5R7RvyG6d2nBb5BKxt1g9QDBYxVod5ANygnEpAKJ5uexyT1D5SvMxhtUbdTJJ1qgX11",
  "key20": "xgdn1QVYmGiTJhpzoPYLv6vkufU2zZo3GyghpGHGT1QTaiANW9nvD9LgbhGRTjgDLq3ZEfaW4wWjApeza1Vy1UK",
  "key21": "2jyE2BFN9f8ZxtKDM8Uz4AvviBVkwaCBo8Se7MY9tZ7sq7wNmyE9Hhy2N7Sfb81Ju7bJy9yamraDLnk6KYtoMZg5",
  "key22": "2p7twx5MaRha4hnw3PWu6Lmj4bwakDiqYoFAfBMNEzTKojybuzD3ES3CfzysCCohvvYBRR8KZ4HyALcp32TCxCWG",
  "key23": "kM5WsWXbHQzDPMhDuPbvCrxEnF7reQ4uSQoTjDmKtXZec3q5cRfYUctfUDgCiaVS4uwcBaMvD6CFyL5XopYfMpy",
  "key24": "3DMypAfvJdSbETmqKRN1K6nFCPA82AkkxtzfzPkzDTvuBtLhhvYrfv7ubq3xbJJWvpnWmqDNS5SHWik9GNLqJf7A",
  "key25": "5WWLonUQ3r4hCXL8giWEmRLc2gonHB53UCCSDQrwQhpj1jf3jpxgq3SnMoYBpLBLjWDZs8zP4hYiEeZHCYatQQXr",
  "key26": "4MbwagAeFKT3szWNG9BhXGw26gkhz9So2p7TBPW1YJF5YtWTenbJxwc6CvfUt3e262qgizu1aeazJyZZCei4mk35",
  "key27": "4qasuh2nUhrWUrwo2mmcN9LXm7S4fYnnrYZUEe6XU2kxtWXduhaHBigyJa1cu7nPADvG4xR23rZyqJdZkQeGpAZu",
  "key28": "619aYdZjSFzjhM3JvJfsiJKJtN21U1BACcmTFdzRfkePYyXJDHrJewfdouDFUdw5GbYNfZzRCnobCriwVZQDf2ZA",
  "key29": "63J9apzSB4K5arDGFAbv4PkSp4oL5vF9hGgtY3JqLtFC1BuBVWR1PJP94pWeEHXFu2HNfStCqfwYVm4TjdQRRKcJ",
  "key30": "4haq55aa6mDf4X8MFtFN4R2T6sJHTgRVejEHEXmpSeLMaMH6gEo8iTS3YNCY39HP9gJGbsoUC6jFubHYuiBCth85",
  "key31": "4jxM5J7fQcVs44fia3ryKzFUY29CkD5vN9NBKw3FXEwguf2p1d1X3GE5RcmEZsHiNEd3vVgDQawjcCM4TD4uHkQU",
  "key32": "AH8CgPJnhknR6swVhM4FsKfMTBMhzMWvpaq87MXPwtFiTyapEpGoJw46YnTxetEspsKGMkjGEMgaNsDNwf6dg75",
  "key33": "4UZtrZXQtRk4kXmu6h1QmqonyMTLjHT42nhjWKXFXyCistQsekgb2Tx2qppLB1gFiNwssfJT7BnH5S2WLP7NMhAT",
  "key34": "3dtuWjAAVkN8ALoBpFekiXgfivz3JesMphu8KWY2W7QJfUscKXAEgw6DvxoPwoib1PjptXVCVzt9v54wqFkGTWJ3",
  "key35": "5VrSMUMHF9WVRGvLzgBPMUj5wHKwPHb9RJQmcYLn6HBqZcY85AwUWsd8kmuZgwgigMN7pkVSnjjQSbeEETChVRGN",
  "key36": "3ZKNMzWUbH8f1zqiU5RgUkw8ukC4D85BCTZbo1CgDjVxmrefNa5VefwJKfP5f3u72EAAasfFAUttaBha9dW1gXqS",
  "key37": "4VEndtr3LrUq59ouv1eorNMfQyxZHbkAj2Bm6YXKr9b842rikxyuiCR4EAsyB9tvDxmg4goHqz63vYP7CTCzvP6D",
  "key38": "W1wJoyeWhrmK7uKfNhgWu5vcw71PeCo9JCdw79PZ6NTuyPH3WCBMQ7XCg6EshfXMPgzixhMuhVJE8sc6FP2CXCw",
  "key39": "2rMtdFWqP21bmcY1SfHqr7yVKL24AyPLxf3RNrMmNTnVi97TWEbu4H7Ug51S2UcufdnTNRjbjCRAGhzno2vDc4Xj",
  "key40": "7rxwxRX68e2h5K2ce7MaeWMrGhPi8r6GXuuNBP5gTE1TKcT1FNbrMgmf1GTEzv8QKGYcWFCqXaY7b8eouQked82",
  "key41": "4ftWJRysy5DoUuuf3xrrv1jJnCpMYBDKKHzXtcmYKwaVm6qzReL7C6rwUF2Sjk5SvHZKz54jhWtUJAJPP7GodvWh",
  "key42": "2tfGf9cKZzmBL1Yp6p5eKnbZrMnQXHgoP4EsV3VNTg2MEp79r5J7mehU23JBWpLarDvjqzQv7ucuq5ejJbh8TYZ4",
  "key43": "3ZtdpJNRqFd7cZwvFQCdsiDyRK3qLyNr6Mw1NwBhGt3yX3mnis8Gp6F46NtKPy5NQGXLV4a4Xa2z8Fy4VEAG353Y",
  "key44": "TkRC6rx97TSBQbiEPY8tBvB1XDVA9KfrijvTggPWCPTg9XegJfNHM93JNK8B8FAh8jz5XXomimPxHQZq3WRsZPM",
  "key45": "2pTiHjiQNDRkuyCbrtZRiF8eErSxVSUKwQ5T3LPc3tpdmeT2pyng8Ftv6ZQqWMG7NFToMidksiLQxYXGvx6n3NCE",
  "key46": "G4KydZfGaUAtDFnSQYYX7SusDCW9tBwoSLmE2vk9zrso3L1Ku7H6kBmxjqXvch9DEDsziCBcSCSRLXjcJKknYSG",
  "key47": "2zNCwhfbW9JZmhG5J4dLVaSuLfNvucJHK1nG5tB3mSanT2vj52kDsAMWguP3KwsvMJkUrMgZ4kpNjH3xFkRRsGZH"
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
