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
    "3quoDhYNgrx6613jkwvHiwkxb4N3rTCmSn5Gj9PoPmQGomccpt2ehYhCCaPdAd4cHsTEWWiCcooi6Qsrh2hwchSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jg2iaKjBfrZYRbt2RdB3qPrRjEVEWSwCQTLhx1Grp49XfTziCqJFFnCJ6Vna2bG2DwtM29emTi3JPczkC1979a",
  "key1": "4UETetasGBbyGqMfimiXkWNgzLog7Tam65aiqVJdrZge3Pdi4VrjebeiFUTxsZAiQXrc3FDtt3zHZu9frebH5j23",
  "key2": "3N5wLBy9Z8V7pQAqanjF1yhGF9QgeMbFqGdxggCWeomFKUXGtA9ZNfMBvjjbYoF84g8AeFMb9GuGWEtNEW1184Un",
  "key3": "4jDQrTAmGv6KQ3TXyvh3Gyroo2kKctMK87ZgZG4MZt7h6txkVbP83kBVDSv2GXUabZfWcC4Rk2T1wPdPuKmqcsRv",
  "key4": "4RGLAMKfVEcBcvoLGapMdhN6q1nRQDHEr212AGWbbmcPdS4Umzn2zumhEBLnDdc7bPSBTLaECn1saZnjEdBxcksA",
  "key5": "E7FoaL8GaxoqW14oV4ZjUBZX2CrM76J9SKitXMHzKNXxyvKjvf8VwqEDP5kB9rrt2FAfYmWMYzasKvqtvL8Q2xn",
  "key6": "3qKmVorGieK57UzEjeBTFs1qsC33dtscCjnUUaxNzAus4MMxKuAywfMoKK5iGFqMF2pQKQJ9iFS52XiCdf6tU21C",
  "key7": "f2Lt2m5XsJBm18et4DY9PJGq6LhHf3jLB29CE4LQNgK7y24nBjGxjwiDPcFAsDiFhdTACpCrEKrRHiZKtvm2ttb",
  "key8": "2E3Dnur481VSNRnoJVaafpCwZ64QzFmcV2SiX8pP6TZsua7mERMMZoLc8yecCTE7eCeAybhpMMvGMrxq98QHZkfx",
  "key9": "21xrUKr8WSePvhvoDVbCL8N4i9k1pnccPyAKt9YbAXKfmNV3ZGjrGN28e2gRihLpm9HSn2x6q28fYzya9Ce2WeJv",
  "key10": "3bsn4pJzYSWnX49Mi61N5RULu4vcCfzYwj5aSm3xcdJnhgD7xrCj1DojyGQURDHvTTyFUwpniBjE2ZXFRC7uBiAN",
  "key11": "5U1MgMjN6XWF1xknEubYkwT5GFYCxhSf4XpohHUxnfP3ysAastBUM9m8xZM69TyRcpUw3kDpgkUxbm5rXyASCcAe",
  "key12": "26AAaPB78o9RZcLqWxUKsEHzoqLiZ3uZQhGsPBgsT6gyY1tz4FpSXxbdySWhnXrbCUYfG7Pm4s7NSTyabsbtqLP9",
  "key13": "4spggTp5xUstUQb6ESZ5Wc2h7PKv3hgkLUdKNGa8WAeVEQZLUoKSajey9HhwgVjtChu2w9Uy2og5hJPY7TDByQNV",
  "key14": "42ZzaRsDqH2HyXcrvXSvr7xKTFA3tCJJE1jnKPMHieuCM9hMpWNAdjnKiyrYJztCT5YAzS8snupRoj3vRTTKuN9t",
  "key15": "5Z1YhUsCGGL9QFcbXry1pgXPXgNST4M7KtKAHCcn9nfAkvj8DCuLPMFtTZdPvPg9EsGQYCXEstbCxGw6KbuWAkMA",
  "key16": "5U2WxDEJ98tkovHdLwpS3djsSaqnxvtbigyEvD219AyQgJu8KMnwnT9JxMHiwhWRoskw1ftGoaFwgiQfKv2FAGfJ",
  "key17": "3hjK5HNNnN2W3XqJC7dEudqUQmgwxsuirYTA6BmuEtFB2x9eUrNmzt9KJmo994cofrEkKn5x5p9EJwhYqb3MyNbQ",
  "key18": "4LizFioXadLRP7Kfe3QrZdFuobbokN8GaVG17HnepdHD4ws2UuUBWAJBaUhRNRqCtPeWxoGbGkUshJT9dqgnmXeS",
  "key19": "53MvHMaA3Y2YEeCQuSrGixnrub79TVf7Hod6d1jxdjf5DvJdZZZLwmnULExC1JRpkPdrYoVxicXtfWts7z5Tv4b7",
  "key20": "5WW3ZFCMZ9Re8WhU3qXCiaT98DF5QAqARDDvdNcWMByg5pYz18BbaSd5fPd8AV4UwGs8gL5JqWNzeHZEBqeLirr",
  "key21": "2GNY2ALeLQEqV3Ehs5Mch28t5uUHVe7V4ZDUXgtG4ng433CvzJpLHdpDQuRriKfrnytb2xEh7zGVJJXc6anAqpR",
  "key22": "37Tf3JKV3Buybiur31MLeyRFy3WcJBmqEdxU7bmiLFptJMkUtHNoZCUpw1cQtjF8SVT9Xzre2ofV7TC2k2yng8bk",
  "key23": "2JNp2Lvg6ojfzxnNyGZ6sDpjFQyMK4TbnzsEBv6MRrHWRZc1hzg4oQJozY5vSzuqyxbeXJoaoKbPgQtFU1ooBitt",
  "key24": "2HEoVfZcjfiY4BadVmEbbTZd2ZGjVcHt7wFwvCVAMb1Gv2osDfUJbP2JqfG21F4Swdn9MYSjMUAa47jYrVyue1Lk",
  "key25": "21phcGrkpSZP3VXE8S6piW2PoTRWHxQ2MqCUtTxjHRcntt4BE1TZfNRLJfFtPngL4XkpJDAzUi4ivL981itB1jy8",
  "key26": "2qUCFTeCwV8LbEBmdZf5kh2qF2qLPGLG85uhas2mnUATftNVWAmoMp8VZT8o1JwkFaXuMWJZ2qEUBerTpCTaM7PQ",
  "key27": "4J1DFHS2B6z6zdMBA5bprrw4tua3oBVWfeRUiuYhj8SzFVYHCHRyShsL5n6Zhu2z7QwyZzvumcnz3iThmXcu6Vhh"
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
