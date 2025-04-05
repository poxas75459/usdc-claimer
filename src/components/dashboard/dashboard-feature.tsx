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
    "4gB6V5XZP5XBabx9ghtXjJhEp2cwuVnCC4eTGvMiQKfLz7WwjtYHrdYu7gFHnStasHhPe4TLQWQrTxVab6ujXu1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S68nXXmhNknEgurqhUGLTZjuYxMjDgNqpX2AzASna1aM6JF1aHSgp8E7sREsMNz6RbGgdqgFYd7T2Qm59jKdUbm",
  "key1": "2uTvmTLXyWYhVirvUDM3vk3b8c7M9exDxPcxvg9A7rBBgcrv8MPHaDuRRAvuHGJpix66U6MLuDM1Bce7PZBcdgJ8",
  "key2": "3TSZFYeFJVLPPdYWBKy6Ypeqv9CSHmh4rDsv4ChZ6SaHN2zp8NUswPAikFzUMskAhUJhSkWRV7Jrv48VuHZxMTMQ",
  "key3": "5jaSgGgJQZX6bVr944kwkxzGUhvyx6r2RmUQCMb9kHwAnPfwHfA3meUHXWfP4ZgpncXvyXXoSXpsQWP15MZNQW6a",
  "key4": "2QpHa1ykyecpZbPqQ8b6s8RHdaiWtM3Z8oJtNiXRdyXLqySufwijMUsYiutD9b8tTsZmaW3KxjEoGpWaCzVrk1m9",
  "key5": "338kYcxuhcmphw9H4zswjTF35NxJ2mGUPtukZGtUrRG72ZZpGNwDwpzc85ocZPB6Xbph6MbaSZwV8EUdxzgPUss",
  "key6": "893WgepaRfJ5WaSr4tqnH6Ar7TAtxj7hdtiXPeXioPnZBpzVR2jnZbuNTsPDnSvRAt6WnPsRffsQvfnD4LAdqxS",
  "key7": "4h9T5t43p45qQvH7c8VBEYiP4pjnL1D7CNbpStoYMdKKkVEZkrdbk9uPnrirUyHNPDLFjJ3fGeXPiXmw81oMobrG",
  "key8": "46aroifHFmdGQ7AkhrPRQZNiLDiDTM9SpDUNpD9WXeUBLHe5wMAi5AuDwAnfeUrS1uK79AKh8WigddfvmU5g9nb1",
  "key9": "5m3eT4sTN2t6ugSQNksBHQCkt1bDEBt2RW7XkWM9Xgds6Viwg9EuuCBwYMhajQpCfo6J9otTDDWuhECGtCcRMh7W",
  "key10": "izL8yFueAFvuw2WqFznTycydyFSZMhhcB2XkfW6UtZ5beVBat9aWYEpymbCPAv5a8WhtaCKrgm9m28umXrE5Y9H",
  "key11": "uy9F7eNRQGtmidX6cmyzH7aXV6cVruZm5NKkbqo9GKK3PZceXwpHcRUPJbh1X52QJJCA1cb6VAG5mwFeKsw2do1",
  "key12": "31NVLSe48GgBSqJYaq8hsKQc3fiQDVhAxMAkQBeqzwov91Rhcw6SM45NvpCRYoHqZsQ9td7cqxyxJq1vGvJeGgdX",
  "key13": "4YzKjWG42iCrx168JjikEbTmSzNVXXWx7UUxAjhFrcqHmWXzjuE9fLvdRJB29qUbJRpxPwdH56gk81ZCdMHmDTea",
  "key14": "4sX4Z1cjJ9GQBV7QYfV5JcBqvsaesLvvr5RkgajXDKgakDSJbCuz6fPVsnNexw1TH2NrDj7tZobdPfHfU6YGjnuu",
  "key15": "2Gj7iu7NWXPo2Nj3eHVc3HvrWyoopS7PvPWLP3Bi39GAh2vz8De6qAX8zqeZjTCmMcbpDuYH5jyfepUF3YVTxDLS",
  "key16": "36USzKJ4FVWHdrNo13ECPGd5QEqRJTsi36ccmuLmDA87sULtwhZrFSYDtiwmtmpi6ACpxhW2Lu8VH2VsMpCJsM77",
  "key17": "xDvjSwQ1UrrB7fTCr61xrfBJYBKNE77ydePK5H2GCuHFz7N1YpQ12MMo6qHcufVSkdrSNsaaKcrDvvfh52Yyr17",
  "key18": "5GrBAtQSmgWChkHuHhrD61suGidntkR3UsX8fAjLSpnT3uVGQrAm3hyTHnE1g2LTnGvTsu6wQ9S3Xg81WJpRM82j",
  "key19": "3FDtCEWWS87AfAi2Q9mcWToukhKoJEkpkJKydwMY2dExZMucranR3GEU5aW1SeGXUNa63Sfaxp4Mr5nFaRPMDdw6",
  "key20": "3bn97P5ZaA3zCU9YVHcn8bji4FPMyLNC4CoFPQthKvrNwiax1EQZiiKK6zwUxftqEfAAiWWh6xPooqUqCPLiABrp",
  "key21": "5wrq4vjXo1cdfr7WDytf4snpsJowEu8jgvxqELh36zF8rYGTErdqXkrwBwJa8ZWLBmUB47HU7qW7j1nQ5ikMyi8z",
  "key22": "5F9ZJdKg5TbEXS5xoY5yr5hgAts4xDTKqNeeHtKmsNqKnYM3LRKPYiqxEZUcsoww1WbQTPLKGY2xXdAzD91Mjt2C",
  "key23": "3xoSQzBoBpoq4CZvDE5ubB4YxyYATTeuGQZrRZsbKgXHgKR27HUz59LL9pFRie1FN4YyEzU1RBZwk8RnHfVYFyFJ",
  "key24": "62sdY7CFXvVuiAvXnJtLhyB3o7aMimYpDsXoFw9RsgvZ8bbokxUXsk1LDy1J4a9onMo4Kgdum2fuyFXSaud8F5nz",
  "key25": "TAv7GRnRDjn6h9aGJgdanE37xeAbxTSv53Qityf9uYr1yuQWB3zj8KPGeQz2PbE2baAgLwga58vg3GzsHweCY9P",
  "key26": "2Hx4PKVpJ6uuE3S3CtQytQNZ22jRy3SemiX9oDGrKn8pvXzsCj7RCMiFmub6nEuJdenztiYre8o4yttCxD73DKHb",
  "key27": "2SnMfi3xvaATifg5HbAq3VqG97ZhrkdGikfbKTgFYEx3GGrVXAYNn79MRZd6C7hPyTJXuHcphHquSL3FHoUDTuAC",
  "key28": "z3YR8WGrSmWdgskxJXbU2wWiBdjxvLDC7BshbDWYq1ptkKqrT6kt7e6Gk1i9LNrD7wKyWJPjFBBUBSfhkazcWpJ",
  "key29": "3EKvBmzKL6bC7mxbStpkwJDsz8B4r8ov55GwSb4ZLNZcBdSFrQLShZezS9xgAwdfzq8DDC8RZi2ErjDE9ezk8y4r",
  "key30": "5pPFgERJXcta3KoscXJSwmsDis5m1Jd7Ju6xga55qRPAmpHzZdeUkd2zW9E57xXRF8ZrLohYa7bWsPfwdX7f7sCE",
  "key31": "4Y8KHS88jC8FmuXxy6bKzzaQid2wzd92bJDFnZZm1Qw74bvNjHBMM2PMFjuFW1XUEhRNiSnABv4ifFHzGE4jPKV6",
  "key32": "4CRMqvGzX9N7o9HaPfFW8XJAz4dMkfF5opLfwR3q3zJ6M4drS5JNgL4vQRbQVeUQgVPhhXKy9GfFAJh17oeJui8E",
  "key33": "121CY4DDyhK4azxq5wv8RSaCnmuwrnYj5xLJyUsHXVCPiN5cjMR8o9RpHBvetM617xL9fyB4SuB4xGkoJWFDGsuD",
  "key34": "2JUAdBjNi31uePTUhoz2cN9fAayAeJX5khJN4U6QYJ6EK8ByEsJm629cQ1NSoZg88548tB3DDPYG1LJFQRWDjAoG",
  "key35": "4PpoQCX5avhLNfoE573hAtjtDwHxjAnkysQvBEUPRjMqySAJfRTj4ge2Hd9ZMCykxCi1r3eboXFHjCRJhkiiP2Md",
  "key36": "BcC4czYRkmySsVudVo3wcHmcSsD1fuUeGBxaBGEeQYRcmjjMQgtuKrbeQY7CzXriKx25dsG8CT18Ei9x5Fb5xGe",
  "key37": "5mX5eMzBoof8xWnyVFvwTqSnL1XiumoCsNF868YQBkVVtzt5vfmprc372mRWyooztHxa7R3obDujgLNKmnzTWAYY",
  "key38": "63sffHBRr8WPq1zt4D8tLu5KHEXziDaoMQ275dP9TWwn4eBuPPNScnFPB48V6YnRuVjH7bUzD9QFmQH4d22Gw8a2",
  "key39": "Liit7nvhGXfMk2ffMhourJnYhwEGCSgykJkAZ8msFUZmj4iTRgwu6ggSs5KSRDepDJTXteV7t235US6DRfLm4os",
  "key40": "jy8JTW6oW6hpS43uQXsJXe6yJhcV3bCezpgGJSPLkHh625PiH2bnheUpCUXb3oYwPPkbKPuF1c5maQLeYpDCeWM",
  "key41": "4TWi53WbTV16Bd5921sebqqcYimS6DoBWdPG5J2CtEr4tiXYjqVN92fHPzwjrdjU97vsj5KxatmPXn7N8wdQCLav",
  "key42": "3FmnkVxkqxM6uCktYe6YaqQhwX8eLxDbQNsaeqofbUx7nYqdHvijfYw8vvoPqM8Eg1AVG5okWS9aerHVRMpX94sW",
  "key43": "5aFnD5jTh93Z375bFtxgB7upYg2zRX7jWxmgg9jy5PRydMDtssJrxuJJ4LkPMxwpYaN7LLUanu38QmmBAe3Cae5r",
  "key44": "jB9merojawDNatXfQiuw5ATRfyTYMHcsLtrQw9z24M7FPk2yuBTWZzMtN7z44DEbzsZioaEe4mEVtDWwVkJLyK5"
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
