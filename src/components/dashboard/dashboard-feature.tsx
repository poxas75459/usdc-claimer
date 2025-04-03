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
    "45U9Fo2WkK5QmWRFQVxkwvTWXcYYJWqGCB2fvkiK3KM1n1V3LEvjroKgCBwXGbGR4U1Rc3eBeMxtNEKwdzpr4zTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7kt5HhoWw4HyR9KfsxkQoL4bxb8Y9U2YvgfX1k6SQjduPJLsGAxtVyKs1WiEXF5Nv7HjZDVx4qecFDo1MRNMML",
  "key1": "2XzkPjQwNqCuuGGHEUXwUeBzChMez8YX41pqCpWjBSDk5iAEfKQnpcy6wmDM9wMj3DE16dA3nfb8SVH5pzM1HwmP",
  "key2": "R4moNe4FX2FvZ9kM3B8vTonqbs5T7iq2dbRzSjZgiwvJmTPjp6k7mGFmCmYyCy9B7U2KL2V9Rxk8cvtgF96csVb",
  "key3": "ke1NZGDZA8cyEaFw3EFe3p3igyguTNXQrQy9ksc1bQcRuAz31Wp1MsoUv3R1Rt1SrjkNhMuwF23BicWovWph4rG",
  "key4": "4Ve1v85Rh5WoaKecZvHfsDdmAn3FVog6zYEgoAhWT3rpE2D38jm5JASrodum2S9oZTfpaPsruBSxUXhkGVXvdiJs",
  "key5": "5Kwa9s6Wz3pSkvToNCBpegmB1Y8mXQYBVusXK4Avw6cSWbKcQJ1oq2AP3VLD5TE93o2eajQgn2eeFbfCBmwdYakF",
  "key6": "595mEmSaQvL8G1icUbnjiQVoxC2KDegdJV1Wm79BeqxmUauuivpsQifkTzj8CCYj6MUJxxBKeYysBWzx3QkBAeTa",
  "key7": "5mFqjAfqoXFEgqTknGnRXSSJPoxY77MzSDA71yen2Gq515YfU6Eod6RCMrWvTtQUsBi7qVScNkRdpFUjmCiE1r86",
  "key8": "5GfQcxNv6vDqmQriivuJoiLZoAfNdunc7th3R3g58LGKVYrWh7qqPgyF83E1n79EwrQ4mvwa4PP4PTopnCFoQisb",
  "key9": "28uDs61fGtKPXfaVDdXHorrTT1S5zZuVWrXd6FDgL6xbQC8jVPYdE33qh548LoC1tWNAbxiV7awyj3vnaAd5RgrB",
  "key10": "4AMzGpoWgaVs5qLaV5W24XZKxLtLamWFXg3Mk5uuUCujw9pTmgfZ9BMgXeEH4m8Yw57Fae4UbwSg2hkiBexzm1cC",
  "key11": "5MoKwQ7qRcUY3YtVu2bE6ht64eTBZ3V5oRzUh8qNFTCythKiSB2udKjeRR9e6XvLLcX7UKob7vbr16pYrDeNvra4",
  "key12": "44zQAYm4w165oCKjjPGSFnnp3c4N6qdQTh25H8Prbf3b7CmrWApkLgoDSYzNTL42AXuDECeZkGBcvHQWoU444niK",
  "key13": "5f5JA9uVd761CBAAjptWejerQcpAHKRWmwNEEUUTMQn3feEcKQ3rf9azbwLjTjrvBJmS4qRWjbS7kKx2cjsucPwo",
  "key14": "5qvY8W63FssWQ4dh6g9yFWJwBDu2G6dujeQrkqusCBn92Yfba74Q2aWxQfmVujwTdEAGMuf8pm68vK3H51yCBiNJ",
  "key15": "XZaUzcKwWwkfvaiHosyexPE7i3qoJ3qdSAxMXdEjZrEmWteV3dfTBfi3S6ELzNx6ADZzjUzCKQxKmJ6QF13hyor",
  "key16": "32NYa43qaPYpHMZ4TjQN7ux8ubACVdoQejMHGTwdesu4KmQ7YmJby4ptjNgaKqsJXZhSzmfbGCfvaWJSBLGs2GZx",
  "key17": "4dkQFkV7HPPRDCgjv5dmNNE67SoZJ5vw6znZVg9HXyFKkKNghi9PwEKpxosKyL2TQhoQwZ4EjgCXS4PyweMRSAZi",
  "key18": "4aHw6fRUTm5GjnmxkdB69tkgVXtkSi1gYFmYsU9bcvy5jktRSEfR8Dyieo8CYKMUNzq6thWekuJq4X19Z62ePC5J",
  "key19": "5L2XYJr49NKAqjhg2PVDymk9qfNEL4juzChDMMecYDSBWpaE5ZvWv4GALKrgir4GcMF6oRXz2WWhirhr9WoZaoES",
  "key20": "ix5dhVRemC7ksTHSYSF8vfckYVdtRm3atEUyLeJ7C73WFyg9cyp734ELjsBWLuwkkSCyaxYwDf3qPEG7gJhiHEG",
  "key21": "s7NQ5qoU4Sx83UsHBpmNtJiehQQo7zroxS7vyNtygV5NmXREZzUHRbdWF9RegPsSJzT4E5NnFTjiV55CVjEutuC",
  "key22": "3qLrShrLyvYqGLzKrjRjeqagVyoVovAx1UuYCijqBWWJANm93KsfaSUdEqJh7TigviGhPygmED7bcrvPwqhvp3z7",
  "key23": "4mzcrKZfMjqu7owSASs4ELwS8kvD4RWVKxT3P9NHDGBhy5V6fQF349LZavG3YXxeRv8pmPxd6HMu2CVPrW5ZSkk6",
  "key24": "2PHN1HHfy7mSVxGSFeUcPAnwfH6QevSA2QzjasqLtBiQZQm76itSFCRSnVR1VDacmEcam8rAxdx5uTgsaL7LodDj",
  "key25": "3JTQmXi3egSvhpzF5MGNwDmUxxGSf6JHeDZuWj8eVYQ8rj5SUtPnQMj5qHAC8cenf5ahWro46QQeu7g4pxcWoqsA",
  "key26": "k1fpcRG9LJdVcqqPG3DeQVVuVKLaDe3vyATuBa1CuwM18zxwC665gq6Q6TsMTmzHgxm3sMt7DRXqp6C4oouX7WS",
  "key27": "4X5UYFoZAc82yGsXDSuF1L1NDnRhctaff5JgPU88tXxH3zjcamKNAchbLN7FMGWNX272a521MDyYrGaDDrKD7a8f",
  "key28": "2ViCdDYkxrM2KWk8m38Nn28LrmismDTkAvx9w9KquQZCHvzTxXn1v6XvuH89NBVbkdq5wwW7NypP4Z79Fc9LYsDE",
  "key29": "3tMER1CQo7JE4yT7BSk5dv8iWfUcuwQZxMBEPasuZJbD5ekWydfTVZhzAYFj7RcoQbSMojE2vBkZrwBeYesVLirD"
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
