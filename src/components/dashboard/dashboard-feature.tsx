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
    "4e9nsc1FCfXub7jyTd583ZnKzJs7kntcERPFBf6rP2tuXxG5Gszjr5kzSR6atixzTGf9trmf5exj39dtRAHCg9zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGRZj66kiWeEmVEU7WeZXAirFg7HADhHehjCsUSdjYzG6XnaAYLn3WmBRJ9oe2bi8jy2pyfifyjtsbLFWX4vh7a",
  "key1": "4KDtzq8e2x2KhMB3ZjMhZK2m5gtCfP77RwyWbPqNPaYRvTypiXvm398FzfPFTwNcvYrnaUKhpSRWTDVGYk7ggPuf",
  "key2": "4V6K3MqNF4ob7Qt9te9xvhyFiSxKKvQETzqp2Ed6vv7WcDEfpfFYDeuDMnzE2txnFdF3AuHMC5zTAzsMoCT7KgC1",
  "key3": "2vG7sQun5F2f7f2qEhKGisxpZWXvu6Xj6rZW95keFktAtBLtevFHV8rgVKNmhtqobKUyC8aPjTHZtfv2w63dhs9t",
  "key4": "3MsmdzVtrzbiXpicCXmRdiTtcN9Lz2gnpDsNzMbTPqa7NiMJeoCjeUQnMrVosJdTwnNWqoGKWCi1RVhNfgjBY1VG",
  "key5": "zgsZgjghWFSLvB6GnyadeodiNnw73tk2cV7zDwZ8vPXVzUjNhnhEAE5J3Cp7MYazXfddQD4bbkRspBvwMErxW8P",
  "key6": "23x335aU4ncdXiBvCPANN3poPNz6fSXYn5g31PNQDryiZvUMx3t95wWPWn8sXuvPN6WxBYF6kH8F2jU3NNFyYXVo",
  "key7": "aA3kwoZoXZXdUvNUA7hngJKrgpE4UV24F6pKtjg39Cwhv4i9mwAz8h924R5yXwPbJKxopW94MTWgGXcXsu84imf",
  "key8": "5uW3TqLxGsc5yeCoGdsZfyTqBg9NcrSzCyK8pJCHd1RkoXbcKirKtJmEhTvaAKnXjzpZFYSRo9opWKAEHRWMhAHV",
  "key9": "jdHEAN9NVCfHtdAhX8XJardSkNBCpvmKrXtYt45Z1erZRGLasxjD8p6YKM7iKdk5pt5yD7UTq2GKHyy1953k2hF",
  "key10": "5bA2XRAxjnEmM9Z65yQvEm5kw3ps8C2LUn2K77vKYcenXifUVDNWwwseCjzaHebwGx9v5jehCk5E56Shhmb8BFzo",
  "key11": "28q1sGQZv9MCoVFMMXK25yyDEzfmVVvtC1C7VzgWRcHd7LabVUtsjRRiTeyfM3QQTTPSZ7M3u5WhYksgUUEoyTzL",
  "key12": "UfmGzdFTf2jgqhnBfbgMQNwhuH2TD9XYcpJPsyKEC4yqrjv8ScusZFxeQAyQR5MvXRxaMZWZ8CgTwJWSH2UgJru",
  "key13": "2ViitJLinTyYbsjvKdVzHyGGtMs5XchX6RFBBGYR9NDBxwpDZyR49j5M8AyGS4qKGDVzaKPa96nX9dFqums9NwCJ",
  "key14": "4dKafjaJmhsCNk8nYfyavVztRQw1ANAYr7mch172wS5aQi3sUtSeuwoHUctf3YA2D2DfxpX5FYDdzD9Ax9fpd6G7",
  "key15": "4CmZKaggkko6imEhB4vvXaN6SPiUVnXuxbrFNRcLwEhkPvEPRctxQpKUbLyNzdwQRmNCVuwTpJyRf1ZzsDKDjtqd",
  "key16": "3eJKgLQYpnTVj5qQmZLjA9p9toHhmw1fUzEKL3Wgn8L8wi3PRLNrGkfBjwwgXHRqtwwcgXWSbAudQWB3AWMS9ACe",
  "key17": "Gv8P8JKUJSGv1bNyQrbhfHYhkwrjdiDShNEcC8LYXZxuJF1i3Ff9357TRNVHzovAyk8XcS8YWJTsuAEuGU1Z4zQ",
  "key18": "3tVBu2zyT3D8H5wGDS6ms2GNrsEv3uZAQbEEREWhfcq6eFmBf8yiu51j7aT2ZgN4x4zD7sGnG6XirLs5aGVR7KnN",
  "key19": "2qsuLoYdYS2TN6L1JCKV85tJk3ubgHZqfEKeqrw7cQvnT6N2irqwUGg1B1e5LbJ3DPy2GaC1Py9SopYVeRNgd5n4",
  "key20": "CzqRzRkvR4gLtEwJBBwPXh3QNqZnnedaaDSVELRPCbVR9f7pcRFjAr6WZAw1EPGQwUDe5gBZjycN3Uit31TkaK2",
  "key21": "4NAMfbsbfjb3E4ARhsZ9uec2GHDRaBPD2xr26p8fFChj52ooAXHSNzvDZZefAzt5hNavJGuDKXySU2HtX72th1bC",
  "key22": "4gEPUP7B1GHQ32SNNiHchKYdRiVwC9msQurf2mFH7Zge5Z8SSM1CvWBDX2iyZfxp7bGkZoAAeN2gie3y5C6rdPuN",
  "key23": "5MHzYhUndAiPDVvGNGQUVWsHVftSufnv21B6TgY9hDmM4ZohhBfFzQ62jgh5kqNYBGGdkuRFvuxWYLaxAdTeX2XY",
  "key24": "KsHyFXz7YuV4LQrZyzzyXR9c35xQpWveRP9omtdVDsjvGrRV4APvx7mCzZAJcDLxhA3XyokGfp3YqM6c6g62VqN",
  "key25": "26EY4Qf7qHg5DNvV271bpSFPSSYtcieWQ3XGczxnnzcnizFKwRaXnu54o4mn5rukQbCfEyHpdTUtdjq1uy8GVEh4",
  "key26": "4Qfq9pEuj3xkZ9PiTNciTm4uLKRNCEbEJ7RGAEQbJ62Dedmsjj5ZT7et6ssYizJLeUVH2A2yuc23ZWHsvZMz4Hoo",
  "key27": "5pUB7srkrBFHgJLMHQQv1zV1mU7g2uUA8yhcBKABzCVqQJRE5wRQfNzfaDHTqg4sfyewoTLftKJebLJ3oBKkvT9N",
  "key28": "xkx821nsWHun7zjXjuiicPHrwB6kE9yBnnrWZ7gs1reuA8LHXg4fu7wCzT6iJaogpMWWXEErWcmXsr2WWBmdfWc",
  "key29": "2uTnviKY8rzAD3vA6iTRU331xRKPmjBLUW44pCKwinKAEpW6MHpmWbMyCwfsiUWhnWb3aN3TSFscGpoef8rhLU13",
  "key30": "3DkpizcvQweg8DNN1BdXyCzjDJjaz5dXKDVZWi5siWybYwSsyZM81AZJpaeYDSAADABMvMBpXeetJH8TWBDPBzAt",
  "key31": "3F1M3eqM6qQ7UW8iELExEr5NZT2yjAafBUNAw8DvHqpHXXaim1MA86J35hVbaF47NWRDiXbVBPbEfRk8ngJ2UF56",
  "key32": "2JbR8NezeLdQzH3gCB9Mymp4zhW5DjppxD6REM4pNUQV73ZiNKUH9hvs5ijYfNajMVyrgvojddXozvtidWBBkdK8",
  "key33": "21T7cgZPrx1q5QwaaTKCs29bg2htP6GY2neTCPpmJJvhj8RXtJc481c6AFzGXDZ429oeNntMfjL8P3VUtHAeSHjR",
  "key34": "E2QdWbTJXDiiSgoTop1VDyrQJKwihHSbALt9hCStyexgN1Ye6BxN55CbNdZfqqUya4hE8AmZXidauNnsDa8tVUe",
  "key35": "ZE4qskYQLVbXYgTCwzuvfeFLFmLRDigoaqQhqkyTWAZdSVAUzCLHnia12CEBu9xLVz8VVpvAf89d3nBmLybbeU1",
  "key36": "5HQa2Dd1sNy35VcmBNwyTCcfrXBYJC1QFmHkJ1asuCm8bNm84JAUjJv8ByY7KRNr8B92NGNrTX4p9uix7265a6ds",
  "key37": "27e6SM8SzdoYdJqkRxrcPkwKaQoi1QBdsEYn8QySCxSSZU7KPBXi9ev6zi5rrrnniiSi8KgcaWEvHQW9J9F1pdu6",
  "key38": "5F7jTSSMixcL73CFdrsP9ufnzxgxkKRFVxESd1z1Q3wvFEirbSch88RM71fAqP32mm1dNjkGmVrUw7i9W2qYb3tk",
  "key39": "fkASXnZwaU67Umy65JX9q7eQxfhw3iCdZu3eokGzZwSbFkMycAHDJwNpPtKZtqJTdzAFCGKPtBsaJV9AwpnJ4JZ",
  "key40": "24PbY1DQZL2JSnpdeeJwHVxbNQYGd3WkKU9LeR5sgjDBAhTqYuodzxAYhGSFYEoNTBoRBYvFLdUC9cNnV8eASL71",
  "key41": "3xM2vc2KS6MnTmYZo98CmYagdtvq7FQRC67k98umBvbFMPj4kGthZJ2tf9cK934bFCZcTDspkKnT6S8AkfXzGpqx",
  "key42": "4dCFd1jZvbySv453UDHytrGy8k1rGf5fbkfzKZ1C1f7K3QvTCHaP3q6XZK9qo1ccLr5LwmGZNCvvQZ3y6nDusVM3",
  "key43": "4kszCVCeGS8bFpNjN7Dwg2GESQihF5EhM8MLgmUsPL1RYQju8dEyS2myjL4WquneLwychFQmoE4A3eyyc6GCHo1J",
  "key44": "2u1J6ZTt7YPhW3xEhtTBfvJngPosFMs3ieNXup6WBuQ3a1wXMB1uAhwXd8qfeVZf6oR8kuPagYfoGyTZkXTtwH7R",
  "key45": "3pLs3sgzkCDFnVAquHCdsX3JvxhfELALshzUKRj9KU32tPgtcMn1tQg5TXRJGj6Je4BTUYkufR8hcL1Em29kL5wG",
  "key46": "g9A6HGQ9KjFFEzHEzcn2hP5ep28NVLNuekRLzPPfFRYdLgBHvPMHj8uP57u6EpZRP9CUWnLNiGbPiQbjFBGC5wf"
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
