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
    "3NtBrWuSjki87Qgf4A13NM2JrfrMZaRkerVykCBzdTWPV5j1UXEGv5xR58hX8QEmsyvC7NAFFh9SyN5LD9W5peeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Zn8tnR7rKgfRMoYN9v6Lhg4L5ProJ19kf3CjaLFWHbVkCjxenHKnKYmuW9C9kde762VTSCgjD82Hvt4PS6gXR4",
  "key1": "3Y6X89QQDzjSVH8TcqavR9rfiUkNciCC6aMo1EdE4yUoiiLfdN3DytfPt84U2tMmTxeQ8LoKuSAooMGmmcMQn4sN",
  "key2": "4RzF8XzxU25BbDrfaf2uKKyqtxGDCDaQGfA9pGscxRYhHxqsywuVoua9ytcYZycTkZjpV1ZQdGpqYUATUNZ5NWvp",
  "key3": "6DojvjBBFpCsWToEzBbjrYcQv9Hx5LCaaccgEcW7x7uBDaVKkNeHk32x65cDvkHGhfiAZAbyz3toABWAEV1FLe4",
  "key4": "4Zt5bYLBE6qBNFGJKKm1UaxR5SjTB6Tuwmb2E7Czt2VmJPwQXrkBNCR7CEBX6LJ5gWYdF8JSJnX2uHkXEEJJ2JUv",
  "key5": "vZWxt8zgHStDmTyE1XFVBpWR9HitPzVLCytMRmhh5oHtdYoZX8yKa198pqj88itB6rZ5x9roJ5tY8bwpxJH4ukQ",
  "key6": "415RXYFChkzo3EiKC6yomDMPhrUGJMZc9wAnT3YaQtS3yFzm8Qp3yfDa6oGaXE1uMErPq8Zmgt1ctVyB2XhFSzJ5",
  "key7": "2SzGTpNZ8co1nJ6tVcM1ymnH8g8iqu51rd5LXygP2q2XUDcEuH4p5yPYJukgkh8uCoGHabW7ANW7gqGoLovTuxi4",
  "key8": "eMjD1EPinrnMpFRWsKv2YjELAFSUTc3NqEHmDQ51NJZNcDyPxsWSbcE4LJVa3cSgGieWto2xwr9v5QwhqkmSm11",
  "key9": "4gvJX2uK5EtJRFRrxxik7CWLVTusVMRev3otMee2m74652vKGNa4ATTAgCrZQJ4Y9jqYu2MDtA4hTi9yH8cB4nYZ",
  "key10": "5PsZhvcafPzgW7wHopEd5HPeby7KxB4g7byyUw3nQPNnF9Lrfz9xdmYpgNT8DAYX6wcgTfDeVZNMwhi2omrfG7Ef",
  "key11": "2NHFYYVi2b6yAqL8PhYVvxsEe8hNtFRktvjM1AmbQDRyLkJsRjTUyKDtG9hXSqqmmPdeybmuq7Aqu5jm1MSQjQ7m",
  "key12": "2B5WhszaJkEAvE8BxHWkvJrJvarXXVLQWS8jvQ5gbagFMiVUMrZyFhhfdjpwGzvJauHBayjyiwffhGHAvEUcCCh4",
  "key13": "3T7LPnKpmSGs6K3PfQQXpMFXm61iFKsy7YKnwbRq4yJ5B49dbBoCB5SAaD9A39WUKC8qFm2nwgWgxSMVCFVSoG8t",
  "key14": "3TWcRv7i9WW25Xmniqyuc8J6HEcEhh5V49swJeudSYoBfy285KpRuGmiA9gFS6cyQYeJfXWTRYFyxQ3ezNQQ86HV",
  "key15": "5s9xM2zjZvM9wEG9h348kCVVv6oFM8vpadnXkaxaDX8LNn3JueuKHrSDsyTycrsr1uTc1HJMSNss8UrCCtpQg9Hf",
  "key16": "53JajWrHPyTMaucfF9nLTwPBjVk7a5xTfkH7fCo9WsL4zud4nAUhiKPwwAVT2PRW7QEw6951Hgkz6GzXEX8KCJAf",
  "key17": "ckcxH9aarexC6CA9b31hYiXZY8m9nuE61AjndgbaYjLhn4fj1cEfpNdouvxyJjrKrpHmEKyR56akhfrEKPhdfTQ",
  "key18": "3UmEXh6n9rMqm6zd4sfWMC4TpELS4b72VWn4y3fpY6mFj67zXW6XsQjSHRR1eHDq7Fo8qWRz4GqSCb5dfQnbQYua",
  "key19": "47roqKbHV6v1gqbETU1h5veHik6144Fc5pMzTo9DofYKWMPnrd4HWmUgRrtyQBWHW8kL3sKndmZkXeFddCxNwSSR",
  "key20": "66EtQB5CQzfxFMe7D3DP1SAPPr2BerEMVpKCqkASSgRCfAaYxacm3iYA6FjhHkB3pqafYpkCR4PmyBTjtcC11brh",
  "key21": "51hWirtsA9pnwkMQS5eXEAJNjNgXT6iPwy9VWMngAnRvUCtqV3kLr2wfCDVzaGfoVqm97s7yS52nLhik2wqkS3uy",
  "key22": "TFwtRssQtMo3JSpGHnmTiBZtx6UkZ2Be7MWSnJ2U22EnGADJmqpq8w8tnPcJrDAvYpyGWMdo6ZxaV9UJN9SFmzC",
  "key23": "3NU45maaV22pNzkfTuAoXkqwCCewzvZVU5EE7GnWfPz1853QQJjJmG5MDDqaUrrWjtqQ1jybmyBtBe7uSb3Vm1sw",
  "key24": "5ZfK9nZxDH6aVNXstDCz8XRU6Ex26DKPMb5w7XWLhaz5r27jaUhwevFRvk7aCPXLWHiXJzu5rT4eF6zGs7Y1FxpP",
  "key25": "2f1w8fopNNeCzCphiMkU4TrdBW36qUU8F6vcpmMnbJptDJvEKnzM11ikCMR97yJgkokTveR6syE8mBEXG2H8xu5z",
  "key26": "3WdV2ygpt7wv7ZHu7MSsmTUERgpWFcTD1AK8nACDMzsCWBgKMZmP3ZkhNy82dVUZfBAtF6hQikbYEfGkBMfSKCbQ",
  "key27": "5xmrH7rb2FSUXY28qaBLFbgmxAjqxeDm4gqi6FNyLEZ9kZQUUr8jdCrJvijpUJttd6EFLJVVf572vRxTGyXd67qp",
  "key28": "3CMQhq869ZKAHcBgWdPKJdmjH3WKw67QJLUnJFBSp2sReQvWLMW2tHqwsdjgXchd5o5Dg4u8Q7e4wGJc5XZvf52a",
  "key29": "8VGtGCyuKti1QpEemn36xeQ5aTwbktTcCqKjjZGeecAmaibvAAieZxy2QqYhZWMksqX5H3VC5iGeEMeSYeHymz2",
  "key30": "432nEZYbmWrym4TtHN6JiYYbWaodu61VaF5XeoiGJN1HyGFnpXXLFoSXDTcGjgY3oVSi1jDDSKpHDiEVv3ANV1EV"
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
