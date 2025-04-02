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
    "4p9JLwcvc2iGTyBWcpxfzxSB1jfYThKw62CJ71eN1AxYU7Ab51J8i5KxMv24o1rkRfUaN7t2zZfsuV6HoEPqtBi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMdm1bs6Ge9eq1fdHCkgqK5ZL2cvAdns8De3ppRegTJpaSWftd98sVC6z8Kja1E21idfX2QB1GugZtZEb7TzsJQ",
  "key1": "4HYGRVjzHJVpygJxarJHKXM2twwFan2HyCK6wsNHc6M1YtLnPLJdeUGudBupiLa8Hwge976aUXoyz3RSZ8ezcrmJ",
  "key2": "3qA8nwMWsNeaxkEVP853UtAKo9e5ffzKFi6A1T8M3BT4UcjY8gfGsYRDn4ptjibusVcSULhNDvhUdaxgNjkeoyqb",
  "key3": "kZzMB5oX9qetBc5j2FPo6Gc4DQh3QvYCq3zpQkDEH6efbZkR28839txcYjvyxaZYnKYbvWLSFmiKXQ51P3BJSSf",
  "key4": "8JJp4jmUjEG3pZ1gpkkSRq3Tz6mWWdoF39vpPuBT33twFHsVRXae2bws4sxWnJrj2gwCKyvFJUsh9yGwrHDVbif",
  "key5": "4bs4bBYGuKZX37Jjw8rdfPB8EhqPDiSg8uiF21zRVdWcgsJZ3HQaTgYkQehXe1GksVcKD6GCbzcx3iEjt1GkSnRy",
  "key6": "4YLeo5PgEbHZZaCezkjt9aEsJ9tqgFGpyFrGTKqcYRJe2C8bCbymmJ44WhAvZKYdt253RZ1P9HxUf68xCx23bYBt",
  "key7": "48eiz3MxaPKk3yDqngFajYXKEe9W11n2NpQxHrT8KV9S4QRehT2bnjUCv2wadR5q3SkeTgry2c3k9jMjgrpCjPa5",
  "key8": "hwsctd6JWofRUDtkyVKZ12QHtafeorD4EMWpxsZvFbK5TCwQUMC8o2ud6evCqmcARsncGe3ooaNiiAG9ySGa6TB",
  "key9": "iTREzuJM6XqGStGeuzKAyQv1jsSgtKgwUGYyUSdQv5WAjgyr8636xiwWibo89pWceGSXTNrCtASLsNsARpcaTit",
  "key10": "49u5chAK1E98gnFHzaNJwrVftdHZbs6shz38tH6WM3oHSBp5W6nvzjXZCd8zD2N1eufXEgWPuYSd7acjeqqKEPbf",
  "key11": "5aqsNcikxEGoHyRwLvWwFD69g5jwYaEYex7ACKcFb2z1BhG7MdwNEPzuFCmXdC3jhufom4tj8La56mZ3HzR5DMvU",
  "key12": "4SMJaPMv7dyexCYgY43LCn8xtCxKdSxYUuSXSdREL7FdKx4sXypEGqz7kahzsu4wHwJTAA5frhB7nBvNBXofeLdK",
  "key13": "AFA1BPHewBDYWo2TooJJtauSwL8fmUMjywebsBqP85Wz1cJHGauBE25eVvSH2K4BA6ytSeV6da5mTRgEbXxQ7Kk",
  "key14": "5W4xNynELEKxhqvwwruAM9Zzsq8F9YadNvHVXBPNnnSHnWMJqAt74ATPUR2FVxpiR6qQPBJGcy6hCEj3gThvwyq1",
  "key15": "5cKDs82VtUFnsBoSmxm8Q6KSpvjS5k4adHEu2q2VPkuYVdBSMUCjjKbVi4JTq4NHTmMZZPaLecfKXRtTVr7ryGMi",
  "key16": "22wkaDDCCq6pFh4Z4WeA4GQNqwA1pEYu2S3A3XntjqjX9VctHQFZTekVtu1aSQNKC6YZ1eVhptRT4npTJyAJvZSB",
  "key17": "3mscenT2hTmJpbx72BMTWVQ3icTJgQjZfkty72gfjQABFaVUx5QhHcnifh5d6JtjuTNT3GzAXWobsMwDgY77Hu2x",
  "key18": "22ki9Jzdx3YMZyPdzmP65C4LrLLQpXGE2S7N8SvHZZcrf4JPwxqAjvoKQziD9bs6uQgwkJC33Zz77L43vU41zJae",
  "key19": "5TJyQD6x8CNoaHHmnr73CvfMJb2yUgoYzvJipZrrXPaECr24oWXP9FSYR2WYjRkWrmg8KSEPyuzhxuXhLypCFhSW",
  "key20": "4iSG2rFBybZMAT4Yo1L7pf1zjFPL95NmzssNyLtf5ZjeafeWxgDS2ZKqaUKGQwpDZFEJFewE59M9AUFUvJAtRikk",
  "key21": "N21DjAMBT6i3HCVgnBUefxXJoNFi4VaVTFghDnBgKipFpYzVuZMhavmZaZKNBee4QjdrrJLwvPq9MghAgydBpUi",
  "key22": "2eznUyRyP7CVzHynLMVr5emR6aUf9cf9RhaS7bhsRcAP89yX1SR94sTGBommdsoD224iSmiicqS3ryrjw6JsX3DY",
  "key23": "eJTmm8JEpSA1X1qRkpKbxWQdu5d1uLyoVxTejzGceyXXr4CDbZYwu2ayy6buJwS5fCzbmauhy6hbqebcd7cNaTj",
  "key24": "4Z7VEveZzroR5CGaT6Ya8UBVqauNuhnvKjGHq9LvjZ9TEMgnwdP7jvYC1i1j7apnqzyo3AHLG8w6oe4TwKhgbz8Z",
  "key25": "3prxE9SmR9r4dRgtZ3uUfSRbxRzhw9SkHCzTNa6q9p6zSYYqEbjuKdpoyEVspjPPrsYK7RaDNNjTiVXCMCAtKg9R",
  "key26": "64CtVzcqqsgbMuz5YYUAajsp3Vya8rHgN23cY2wVVLvb3sdhb1QPqMg4T6GYKUeq5vH5Bd42hRwSkBdU5BUzu5Pi",
  "key27": "22Z9nNTyDRz9EX4pbRMm3YNoCYJX4ndpAKGcYyra4widU3bJuMyr4pA1g5g8eZ8H7KTW955yMjkNLkhDkwF8W1Pi",
  "key28": "2TBTobCa8z2Zn22cBg6gStvA8outF1vEX27nFUeTp6Bgh88KTyekvxoauv1ZxCjg3bHyq9WQaHyAJQVjvzoVJ2c3",
  "key29": "3eoXQ9vd3coSyQ5JJ58NwqRo9xpAJsNqLYTUjtq9FkVPCWtQMMgUrYGn84Bv5vw62fadRaEEt4RdGHDD33GnqKph",
  "key30": "3rrYuNRsiersANvaMYBw9HVU2bZpuSfL5izu2LD8wJuU2uKrci5QTmwgpj9E7xaxkpb7u6U4AkTBJ2KKXPCxRbxy",
  "key31": "4oDd3zV5zhQyUsaSXM2VCRjxgzLD4boaNU1H8LQD1zSYWSn5hNWqSaARd4kkyzPAVisCKtWot2fmeFJpssnuRn88",
  "key32": "2WqggFEmQWY9HYUdcdQ2i8kHq3Eq1cnfri2DnUKs8bwGVqM5oB7KLqLGdKiRAVreKy3p5GYuCCYsSt6qxHchjVeM",
  "key33": "UzJTuuXSPycqbyafYP682d55uVJgzwDBpiBzZb9uPAKyZJkBHGSqkKBhxDWsnE6HJu8s9QSLYLJWwUUzb4Va7jv",
  "key34": "5pTTbeUaxb17adn9KcWeYZ6iKbgMQrPzFnGPczAdPt4bTt4gAc5sqJ3Y5ZUueLBrpnSQQGwArtRgkuS9Rc88qrhH",
  "key35": "4KBktoW9yPsGyqKC7tNczDfVVjrLm7SwCmHdqFscRywhwvrPjACWJm5zbDrtA5AE4DKhkz8HUGp1iWGULeGSGU4i",
  "key36": "3xfLGwVihJ8QyHnKT3d1ANbEQ2AnKeeYJaSA4ipesUxj9GFc1usT8VedbVGocMcbo9sSJ1yK2DcnfDUJoxT9NicL",
  "key37": "2WWFG6e6xVysU7AN84UWSXiV1nhTt2d2bDZMuv9ePVbADMhSkz5TkhUQ7BQ4uR9zHWBfsGnS8oCGHMbb5VNrBGJW",
  "key38": "3FZvjsuj46VtfHM9682wQdBBB9RdxyNvF79wrT7PTNFujfnvcxSSet39H66cimmiVHDNgQ2KLwqUBX5dBpedM3ia",
  "key39": "suAWKED5wFAb2vkMnezopWmmfafCYYJnM14JXvedbn54xmrroukqYBamYhXRNfJWc7Fi9GznJN3AwxKpnD5BSFo"
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
