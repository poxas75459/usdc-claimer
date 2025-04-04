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
    "ay5VGBYfB59CgyFxxCyMmDxtWjVcNDYXebn5BKZagcmNrCTaRawEb2yJv4UVJ8Gsio3ajNL6tcPSbpWSePJmzGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MduwzYXdKEEaYiKcRdiiWksrfdnBPZEcnL2zsS7G5Fuh9QYJAFgSLQKKc8ZwfQuTySiF1eUummtZmnxwaqcxkAw",
  "key1": "3FTx3tKZvKxhK8WC58NMbEzwB1EZHRiXyZELicnfAmWSgLc4zgEgycbTPd2kwAvAB2tyuPsTbGTWiZAGuaW6LXgi",
  "key2": "49uBTo7vQmaBoKV6GtH4Wy1kgnVTntZw3eByteY9dxnHigatzArBKK3CortjgWmqKJLpbU1WTwEfgXatqbtRxiPd",
  "key3": "3RW9ZMrsCrLZHMgCCs26zoWDHe9hgL8g6duQQUFSJfypGS4NV3qu6LaguzdMCLfZXTwwD91rKUZAcLKE56GiEHkh",
  "key4": "K1qnc7m1HuxRsfWgEkL8V2k96TuNqhjkryRz9kTyiyX5McWnXonkuKeZ1f4MH1BtKXENWfdjHXexLc9wxyaCgka",
  "key5": "49wzzH8CQ8w9UB9NMb1FN1UNi4732iZ1UfM4Y6AKwbj6RbApTBSVtuvQTLYo5XPYHt8z4tyFxL7h9YVZDmTXqLN8",
  "key6": "5FcDXpr3hWWs12UwfhEp3KviehrJ9uhYM9ToxuQhqMQDqVuZY3vqvFZL2QX5RfNt3euhhm5awFd4Unykitr1dAk3",
  "key7": "Ni4YLq2vJCcEy96YPXwSymQptYTMuhCN7hPuHuYFD8XrjfjUuYE9K7Jh6yY1ih7N3C8EjqFZEdv5xPk5nZmEDkb",
  "key8": "5fsaBvjBttf1fZvJXjKJDLEPurGujDWthpaU9mmPBigDPwoXafvzHt7meJLKKkbZq9ddVvmwgeT6tJEC7UdLEXyD",
  "key9": "TovuKDWuA8Rw2gJwdcufTRDn2ousgc81TLxCMGuS3YVu9CjXjKcY2pMJUUW4vFuC4hfYRAN5GNQsopBbw1kPGfL",
  "key10": "3zfKThL4dvbKmKRkFpqPap6VqaPRaqSDfTmyJb3UUVyafar3M9vbMUNW5J78KPAC8LUxieHyxbvcsSmD4TPCHCT5",
  "key11": "vsbvodWViGizH6AZbrCVv27S4LeNbTGiULB1c6gWCY3SpsVxge33MWtgQY7C2Z5ZomSLKaifwXcSGU5kfxuL5Nb",
  "key12": "48iqtwzVWYmXppcC4R3Xi675Ury5MdDgoQxSovPgSKrBzpTAAqwvA37VVBj4rQUEZQ25Pozjw6eMoTSGpe1yNKGY",
  "key13": "cDbEZdAspmSpaSVfP5nR1w8M1nMbf3Fe7r1U5kKqwdi49sU3jSYBV6aRTDabGKFndfmceEX7VqWTMhSDNroX1BR",
  "key14": "2vEZcC9H8YQaZ6j8QhJP2wfcGo8NnVeQdnE9qQD2fpPxCsmRYPgsrbx5oPKtDvkYoUG2JTh2LhdWzBH9Es4LU8bQ",
  "key15": "3XLEjBrZxsvxegn11VLV8r2ary9TptBsQXw3QHeP6uuqAWsDivqEwTETHLvsB3MbZXC53gF38jPJM5S62BCLPar7",
  "key16": "hJ15XP5nQxa5x9Fh8bQ7puHHvsYWwqKnm2XZ19s7YXCKEcYLPghrjh4Ppwc5z5UBLBX9bZCqaXmwMv7JbRnjMny",
  "key17": "YC6hjfY4iwoxcyK9kN4yvguffBZcSMDySrCvpL6Jm2AD4ytn3Z3ZPKowdRQsHL6oBosDujQWZGmn4bDRPaSUtnn",
  "key18": "2p22KQwibB3JbdJrpgm9pHJfC9H8AxKVJ9NkndR2GLpQxLE1kxacheXk39uCgXpuBZJg8A9iw3N5mcCTnpNwRi45",
  "key19": "2CERwVnWDDsGcDXT3L7f7oRQrN2i6vXeg5Zdi2ncwTrjcW7REBJMuNSpmy9GanQukGNVTM8s8iV4zTQC6Bd4WYuZ",
  "key20": "2e1V7TcNUgVhFb4SmAEVy9TzcPcaX4XNFjAigNmeMTmKMDcdmt9p5URjrgSZ18uQxkR3WFBfkb4GWWa5NU5ia7hW",
  "key21": "3y9tQ6qay4AdAM7CCbEhruzwo9qoRSbYT3vaR3J3yZWoGyfGUB7qBnwX8GHDFTmwMeqo4fqJpyrpiWmpiN43Qf4c",
  "key22": "gc5cjp6ZRmKBVZjkFz3Ge5rswdHNBmSSa4vSkJ75zGL7QBz32Fvg2R5jAPp3N3v9AfcYCwJdXcvpETBG47icQrG",
  "key23": "Ruuc1ssc8hkUiXp9s9Vkg6Y7GiUaTqeYj7ki4aKD63bkSHfDojr5rJHxzrRgMM8C5p1AptTaSStJuWTEeXna1vy",
  "key24": "5d69auVKw18KF743bPGztpW6eyUN4164uq4mT8h7MycuzR9sttyeaSfQwpYDY3C3DmQUFGdurwTtbz6gV9xVjs6e",
  "key25": "5xSwfBqeLGS6vF5w65GXa2MRmXiLBGXs1ZACcGnFzxzgKZjnjBFFCWik1S6qZcN9q7Xh5mTKAyV8xpNeRNPiSahi",
  "key26": "67nDXJxpgg2PwNVbXyoPUruvfx7yu41r6CFe4hQtpB5BdGjKQBBKVD5XNFYmJWxbN3SRonQcAmY63NSGe51HkiW6",
  "key27": "226qK7acmgBgL1sBkZ6fYTyydKyK2CoybzPpchVQo4LqzDj72Caa543Qf8kdYL9nZPvNDeNFSBebHUpZRXVjcwNg",
  "key28": "2x6SjjWGifqndbLmbuHU2pi45ioQTmdqpqYXjNEcxBEVEBUKyR8SSVYocFAyAsh2erU3ghw42caMt5KxUXBw7fMe",
  "key29": "2vnFAU9WNfyNYDF7aLpytrpCfdusxPo5Uqvv87y81WHu8VLh1CPRLaQGGDnpmGmUqyDibcdCFPdePRm6F2AkgJy2",
  "key30": "4R8rCFuFV1BoRUwoTELvT7kePf4bvEtZyfAtCukp5mow9kihR3ENDMHn9K7LuzxwT3Ln2EegbQCdZdHY3GdxMxnd",
  "key31": "2jTS3b5bncxbTRLkyJC5P8uTwPsupVT5pX6s5cfMi1RsRzZQa988WPxRD2noAbmSaP6Rcy613vUb3WLdL5doR9WK",
  "key32": "3wWqe6ozdwr3127NbhcRM6WpKKYR8Vuk7zRsVbxenDqckDcfyTCD5p72BziM9iz7tjrg77eXwD9oQH3cczqBMN1N",
  "key33": "2t6QhVaBxHDhS8ZUBt45AurbVYNe9GUaojyUh7ir1QgCMby8NYwciUeCAKUwXRTdMQZGfCfztNuWxPmYej8zxJQE",
  "key34": "HhPEpxsbvj8Y6fFNQSiipJJ99RTYqMn6hZe84exRWAh8V7qBQtCEDqXagiYNeQ5MmyPYq7NNjwCcp15j4AmaY7R",
  "key35": "2Hibww7Yo3u6hLbReY4DaMDMdMX9RJiBR1ABBtqSiRiooGcy4h8xZuPjYM6WvvD9weKTtHJRNNZxPBp9jhSPbbiD",
  "key36": "2zheZ2gV7PUvazW7AnTZtGDrCNt6kj5kwNCwoGXGNb6JYPxJ8Gx4PSNu9ScFcLo87LLKqWL234TGtzoD5NHbV6fg",
  "key37": "42geShRV1TmsyrVNaRvfvaP5izZX5g1cMy6imdU6B295hLbvoHfqcyzWVfSHaTvZfnDVVRWa1RwoD4561t48ByH2",
  "key38": "2gz5mstteUimZG7jGYLSJJjV4soUagi1fw32NZUFnqjsQFhtdomY7rEHSFjRHkGjSXiHWaR3yiVhSpG2QtwNPXYd",
  "key39": "4HXaAMBKEf2knPuptuQbNxWTtmTBSuKTdQk6Vs47SnjxiH7GkkgNrDsBW1UsauPRoJr4kzzRdGAHSZQKRkn4hZQ2",
  "key40": "nKFw7dbsgDJhynAzNAVY99sFsuj41hax4ryRijVTKL47SaxN715NYMuh5rTRmWqoakeje8SasnpkDQKH83oKttK"
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
