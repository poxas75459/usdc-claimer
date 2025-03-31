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
    "3cNoMfijT2LfJ5QgC1LUAwNFui6Bkd6ZeDsjPcABww78YcZUoLgmYqYa5QCfPp15oLaTTGQcXvnCh1yPPxXBk7Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEt1Dy7KaPaZEUavnPmPhmRNpFYycP2KRDfovAbd4xziHcqYm8q9Fd9Uu2s239q9YfuEbQ7WR9tgM8k4SiLmHiT",
  "key1": "46bbE2aSWU3PEk7oh8L3TUbTEWhWbePTAQ94LT2PX17oJQqymQVbZ1GfBWRHVhYfTpUPCJa8vKUKngKeUpKmay6y",
  "key2": "2zFs5Y1vzi64p9Shw6oC8UZAH4Cd1WmF1c7BW9WBCwQ894ekhQvyD4QkkNz7f9bRryvYgUP7LRcJowdd2YrGM7Tv",
  "key3": "5YNSon2W7GTLQdJQE1jqAeg1dbFgGVVQhpnpGTUJLhVX8RXzm2GV4xDyR2fq4Lbv9CDwboCjHhKAQ2JVnsc4RFHK",
  "key4": "2zKpvh2y1AWZtPbgtuobPTxq6woinzTRKMtzPXU8bHhLnLCeCAQ6g2W6hUsFNsL9pSWUtPWwwCQyE5WGLhuHGqZN",
  "key5": "PomiTn2akmPKntvGMxPAt9XrGkvjfmgn6wMUusZArJFA8c8faaqLEr1Sm1y9337pTBydRGMoiWZHzwsDvNAucnQ",
  "key6": "NCAaw5zyRtKLgCgVUJTqUv7ZKHhAHrgPsP2B4AZguvCumtVuNS4vmd1wdZ5Hc64qDGc83y5jHSpnDKhzyC4ZcH5",
  "key7": "5TZ9FrEWpR7KXVRkXi3gwz7nR98LhmEoyHHp7vpheYT1HssLgTRq7phsc7FNn88dyfQ7avBEFm2XS4vfyZU9x2x8",
  "key8": "39kVAGAykbRXKv8TSHNds8GqSXGLnEVDk4SnBDNbXAuRGqrp8cqmU1MjA55nFQgj3ikN6AvGgAT81kZsfHwaKNcM",
  "key9": "jfL2rs45HUfDeBcDWWC43b4a9McfErSffd1xVU8j1Ta85eVZgfKwEtgb5mvvATbcpxpLrtn5UPmaaetXrqn2Ny5",
  "key10": "42aJjDvbGz4DCAS9j7EU1LGr1i6rwpswz2K5Ltst7XGpPmxLwFwgLmLBxfP23CZv4yfyfBK3Fh1xuwMCSRwKWpPJ",
  "key11": "4bxGFkrhD2hUjdqkRf8xWtWqvYCRfHtZfofq9AXT4bdxCYpdXBq2JCMYkVfwQJhWWzxR41xb7nh713os8ZiLkmYR",
  "key12": "5tDS63mVfo4FtvUHufEwgKQ648qhfj3UHuRYpQrE6VcLWoppgbTSNPcXt5U2VeXMaK1Jr5YJhYWrqmHovGGDmPHm",
  "key13": "66DKmbVGGEUr5YE6hENzRr95nfwPqPdTC3qr1kxswgXxAF9a1EWDj5CHTgPvUZcNn2HRSpLDRfjRvpn1rvbweKpW",
  "key14": "5bmiQF5UKZnjBihXZty7tZELLATgqNBLPYw9CxKtsPNnSPVA46paetw8zWLMX6A3hEmWdbCit3pg5NsA8BWFjuqg",
  "key15": "n5JwUBck3yXCjmMojWBCqnp1N2NrnGH46ZAhHxiwEd1Ha7CvsuAhbAfeHde9HVGdGNfgfNqVjy4gefH84UTWiYB",
  "key16": "2i12VdVCq8TS3F4aVvKZHSeBc9eKicWcTosN4qr7UHtivXjeMTYrpEaU2NKNHVEJvb5x5GWGmJG3URKx23VnrEGQ",
  "key17": "5hyagbHsFcutnwsoYDbB2tSrcGwF2pw4DMtbr9hYox8aEVguyTJ4urFXNYuEHmQAgB6y1pmoUNyCFBKubqzjHQTz",
  "key18": "4ubsQExUHYV5vxNdJnKMmvsjSm3JPrxXvWyjUP1C793vVz1R3EpEcwc498FtKcKH6mThpgZBKGgbQFXmgdMpnUgJ",
  "key19": "3fHVgV3VwFa9h1ph7iPmpuyAcKwjsDp2A5gjNHoR1AmMgeGnZvhSBatMwGPsXc56buYQo4Bmvabnw1qeVyZ3LzZa",
  "key20": "3kSBcf5AEKmvwE3LkM2gggo8Dn7RApo5pxrqAwbZJ2Ez35ruDTmynVTz5qyyRWNeaxJNj8KGXtnY1MQhbujFXZqp",
  "key21": "4BKvDe4J1tHPZLUEyfGFRWSPeFJPwENCA4MEtsBsBg5jjHqLqg9JZHqqgG8hJ9ai5PahzupBWAwEwXwP2jqPsK8X",
  "key22": "2ARwUe3oRCC1QTyZwWS8rdq73TqD4yAgMCuk66pCeMWBWR8FntBEsxkA3et1yhN3BhoYoyR5gj2jaZAUHv18qWnX",
  "key23": "5kebH1rPK5CWFntEb7PYbwncXZQxuxwnycpqkBytCbxf4Ry9rPaVDCKDTKds5DWQtyGMdBUU9yspCtyUSqVf4XRu",
  "key24": "iasHWGDVxY7BGCKBeqT9PzhwmAB7f8dW5KGjjZGf656MjEDuzraymonxtWQN6YeiPWtCndYHvkptcEKw7zwrXJ2",
  "key25": "4GGZuTbKyqRqM1DQntVoMxPbwJW9gemh5cZzDUp5Hx15ihCizYiGnetYmPMMsQr36TZueHYS2L6K9x43EnKBZyFa",
  "key26": "Wkz9XgB9yT3k5Ruc3QreDqTFRTphT6yecpkQuUkkeCJH7xD5gx9HpVebqHgKfAaeQePH4bdEzHhGnNTXa5xPDvG",
  "key27": "4EDxMg5Ri7AKEcdDG838NVCtijTQrEqTxK7bDtpn6oFifVtnNTkuPBaN8DQLeoQiLFqSJEG3Uro7UJ4JJPkCWCg9",
  "key28": "2Fak9PoT9qba8dRhkZarLnbLy51SUhvNno8j3ReX5jWUVjF2MrWEsDxXvUmrqvRyWqg9Cbx3957FfP6aXLDtW28j",
  "key29": "647xREAHXWdQzao7WoqEX5YNCpCUzwD86mwiBYzqRXcXGyyEPkLVAuF8w9XFCi8ahYXdRg4bv2dozBfwwcJB8fY",
  "key30": "Yy7mcsdczXm8JFgQRvgZoVPb1X9zjhjGQsjieQxpZTM71S8QH7LqVH8tSARLDJAmgZB1DHT7zYRr5GffTcekvfz",
  "key31": "3RUe65fVZaEC5qgQPX9Xtx7u9iN39MqjeUa7uggbM6jEFKQbkFU596Pxh1DxYEmGnU6xyiau2krKvgiDE21u2y2A",
  "key32": "4aTSVbpWb6ikvD7jCwuSwAr7UTiXSnvJM8XunoFSgrzh3XZnoZUEK7MymkNe7bF9HffVNo2QJbWmAS2usJNXACdu",
  "key33": "2x29jCSaEwbD3VKLAdyRuudXjW9TyGhxHXpH97FvxwogE16JTfois72h6b86XWXgMf3rfVLNaxYoNHgtsj6gzXAr",
  "key34": "5P8FuoKLSWSxkoME2Qhd1X8QCCZJiPCCKrPeiinYqC6w9YXFDqknBK4tbQqTDi5anN5QUJSM2dj4wEZSoM4iWFMG",
  "key35": "zXXjHKPuMosmyNA5YGrstbD8MFy5EVcexwCSCtmRg7tdTLCNe9SVQDE1svGHHeMfeA4AqBx2xqawbWiYahqur9f",
  "key36": "25QJYV9zDSdHLVm1yFn4ABhJ1xqDsDMDk6hg5TtfSTsb86Ys2BA63VmFx4Jbacs8FrWa9wskHrfSF1UvkPM54Ymr"
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
