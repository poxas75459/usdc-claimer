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
    "5e9BAoPDnvcwrAZJWc8bPqLn9QnjAJKf687E2CzcgxpeGTrje1nHLsicPDqMAqtfbjJBEeUov1VokJbH2X3SHYy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmQQd4vi5Pgqha8HnZyitQc64YwiJtMibpunqkpFwuxrr4xHC1d5f6uF6SSyQvnCn25Jcny5KWGbEt5Ln3qmqDD",
  "key1": "3FJeypfDfKMv7V1fbK9W13hWEJAJB7Rk4RSjw1UQEij3Q4LXS9tvcKYnccbyFro69mzSyeSrRBU6peFiyEiW7Gkt",
  "key2": "5N3qqzDnRnmc2TDFKnxaCouGrNv5Pmmo7xuStgPUJ84bmnYCXb6XEK4wSynBSoLu2nXL2stLxwNtQ2yTM89JrBpG",
  "key3": "283dnTGDv9kdaLMSvd5DtbiFnACFxr8eGjQYxWZxkEePhGiuP4kVkez4YWh4TzZd9SptwAgoLGrktZNUWsZb1AfK",
  "key4": "4Y8zfJjRwG3sYG5ftdro5G4jWMGwDFBMYoH4YH34t3vZA8hpawk74pqNavt1oZTfCFxZSYyD146VhraPbsnVkFtQ",
  "key5": "45RUJWxhR9VpjFedZYZMZgKeGRxrWWVa9veSnASXB1oCmiU5ZYMMqLUKGkEBCLRCSmaXZhT2AJSvHtVQjj1MYxvb",
  "key6": "4DKmP36jXTid5otU2yhhdXwhhXfFPLEKC8Avf5yQqRLGsRQPivhCyGmGZVNRax6N9VL3Zhy31XAYVZBBpBaEC6Eo",
  "key7": "2pkEjs2kS8CiaPVBLnzTsGp91HULDKshr1wBb5ZYnUHGho6pGgYH4qqmTM9XhH7qEpS1DcJuW4Nm96be3SuxikMX",
  "key8": "4UMdx5CwqPYHYeBc1bgGgu7Z1YD9BT3efyC8mMToTgtnPnn9i2b6aQgRheCnnmJdtkJu2Wf6E2URmBmvNUvbbkGA",
  "key9": "e893Hqg81FowKPQudHKY6S84Nnxdfb9CUQABqY4SXmp28LfJDquC3THBbRzjx4wTDnesaNFeRarmwmec7zm5dec",
  "key10": "5vRmSgj3W4YyKengN63VCymhBRWgXo4pjMDp26Pw9WE2VVfQ54Uw8AigGgHCmpogv5UtYHWpPcr9sQuudwcBT126",
  "key11": "3LyPxZgGAAuKDs6vPyQwsfptYXEWMZZmkbjZsdri2uuVxvNTWrVDEbTQZ1AwkDbXRRRZjUkuPUuM69sVbkuvv7aQ",
  "key12": "4MbvoQoHbpSjVei6EhnYZRVbNACMjAU7ricJB16SHACRn6EfBryW7rb3FAgp8HfGv6xgi7Rm7ayEexeCxvLBEuhi",
  "key13": "3aFVBwcdJKvnggD65cQxGMj9dDBMbdU5PWW5GCi5HZmtWwT8Q6xqqzy2fRwheqzdBSHtoXMpqXBrxas5ScNardUY",
  "key14": "58EQshepXBvn6KYaiF3DKxZsjuEgLQ8ksVYjSMsmfYizfzpfs3jYKj7ZwiE8wCS2BV6iuhhcEhTVsqwN3WLbXcA3",
  "key15": "4CzvR3U6FchC1qaFX5J7rY9u8u8HbbtCmDCHQkUAKUbAe48j7Lzebc66ffHFDgj574c9KnAdcnXvNF1ebZ6dwdUU",
  "key16": "2k85nWbZQhVtfU69ot9LuG5YaHZ2NsPBcRQxs52Pkhmp7Hfi6prt8VnNxJcCd3MV6VQD52z74qH9R19p4gVYztat",
  "key17": "28GL6F39A33kfdekWj11xx81yV1tYPbpsbkaqsnDPFCLGkTicf5E7feuojcYnJNJEfmQLcuv9qb1XigiGzEU9QwU",
  "key18": "Cf9JkMCEDXFE3uSdXJyjoPvS2fWM3SaX1ugvDwyfn3X2RxQ7Ugwfj3SDv52xTA5bQEYTbLptVDX4zZwrsCgeGkD",
  "key19": "3zLZMb5zq95DwJjkrot7Dd9PY3pC5nz1aNY5EVWvVjwMQThxc4ULcqf86BSwm1LP6GrrTuLW8iQytacchBzZginY",
  "key20": "bkDRJVVazNTUMLJJR66XgUGvJUdT2g9NRgQcmmit7Tjgyy4zn382qFGo8Chmhm1uuHDer51SLWRGfgRpZWhG9y7",
  "key21": "9ABrQEX98VcpZrUw9D1d5rZGFbLZ5ZJFS2qM5nvjZ2idzDQHSHgKXVXpDAfhHaTU8dwzbj2mzgq9VrLJTtvuJGZ",
  "key22": "5CW7vt9SDsW8jrib5V5AvkKESR9NNZZ6rj6pdG1YYVzscaZBCXUormGmxYT5F6bKfYPX6qnU6zLUjkmoyx1X3J5H",
  "key23": "3VLitXNb61fkD9qExBcHeoDJJfWhrCP9U3mqe1GRmD9Kh4V12yZiSrxmPumm7FY1qCPiqkKH8HRN6tMah2YL78Qp",
  "key24": "scKzz9P1EdUTT5KJfuaNbyULbnQqZ8zBxkyaXBLX5BsygnorSxKttLeS3wVkahrjk8MTCZwxzzvSxkotXA4JvhS",
  "key25": "3MDr3J4yZD7MSrrXNt9gaoFji4eZwjRYAmtZpe8UZnQgwQqbnuCjr4hc6PNMvqhRqFAFkMqAznVKTaXj8eHDFMAR",
  "key26": "G2K9b8PShA7GLMqPUjNCXVGhpzAVmJ6hWXqfqaVBrf27ZKnRJ3aGAJgGJ6w5V7d55fTr8ttbxZEk9HfYx9VokY7",
  "key27": "4FFmuaRn6BFnjnxVi4yWL6J49owFGRXWHgA8cKzRGe8cf9Cfym2TDfczsFHTJqLS8iDDVkjTncz1trG1p5cMm6HE"
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
