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
    "3DvwM3Ae32TYg6UfbCyQy8L15YDm7XLXmL5pcgqTEqcRKfn4qdvxcmNZdXrPaDxNMZhCQKjdnXgwMc9pYgRVxpJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WC3GGQw4WfDuTxs2LZyPdTEftUqmYonNdqJc8wWb9Jx9RZG2Df8oq314RxnTC9gkwz2ZWsJUPXtciWurENbs3W9",
  "key1": "2WmiH9T5GhmWVrfYQXtrGyZG6H6WEhhzBAUFn8QyieFMXC2R2qHMbmcmWDSoY6Ev5m8HauSaNpdrpsUpxpSjqmwF",
  "key2": "BKPMzwmUHXJ1JNzELoSfJoh2FXnbThp9SbFnBSngpa5NP2n5ke13LfH5MRFDcRoZ3oHHLNyWBSQPC1L68KREGaf",
  "key3": "2p2TaZnB2TXnReRJSdF8osPs2Sx51tjjGomNAq4XBJ4RGNmLd7fY9abYSGeQhA6gn9MoXgQU8Uy2ZM8tLPgo64S4",
  "key4": "5yf9Fk8eejrLdyccrdChvCzUVDYpZLMCSj8iWoQ9e1ecbhG7ANyE2DGcvcASKyB7zua4bZhkvF65iBexKYVds7yK",
  "key5": "31qZLvbCZcgeXcNatVH7CgzJSDdXaLVC18eAx2D6AyW9RZXy8k78vcNJrXDkHYHaCQ2LuDtPEbEpi2cTrVxCyDoE",
  "key6": "4DDU4cKdcdqbJkaQ5gcJKeYinXufHi3Fd14JxmnzMWVoGH8pkw9GgNS3Fmha5StS6843PqzCxTyCiRUnhjYbEjn6",
  "key7": "4ecRxHtL47upioRt1L8exR9CADJ2iZihFjJDfMWB9BsKQRQco68FdiMAxfsvKrxWd2TcswxDF1RXDy4GCPSB5YyP",
  "key8": "4MkLGmtcGiia2GMseJQGnvK27rmyHizh4x9zmW4W4k5JicFVzZTL3SymYBcrwaJvF7RAoktjJgBUsZyCn3Gg1yVo",
  "key9": "3jntkvTcpkhByR7UMWnKw4ZV7ythVEmejAYSyYkXsD5vjd6ucbcwW4mCE9FsR2ors2NUSVHBo4izhhRXvqyhKVPm",
  "key10": "5MTJaF5nugUXovM6cPjQTwab1HYVPRn1MADPrXsZGGEoernRd47p2vhUxJwv6MZCbJdsxzHDk4ujZgr9rdEbg2vR",
  "key11": "4jUiVJf1GYcpJ8WiE6Jy3uJj8rXgeGAQYsthGci5r9M5toyKKAJZb16GreCa1bbJiRUByi1QSJwni172Vi2UeN6p",
  "key12": "4vBmKTLXymbvw5UbVF5sdTJzaebWynA7RfXXTkfT7xn5QCp6yy9gtP3aSmLEqWLcsqiwgVGwKGgJtWwCw4L43TUP",
  "key13": "CbyAoV2pfpKgaoAAfj3UnLzjDWA6kj34C1qLT7N4yiqQCEjLyVuM8Qo4qtds1wH45vnW6TX8fLvHuMwmjKPzV43",
  "key14": "5Dg1YjPxi5JT6vSFWJdiewJYVHSBKtCjNTf578bLbFeVJx5Tv7HTkQvCwywAj8TkvTj2CeHDznnHxoQzXWpBjCK1",
  "key15": "czHKonGcJcsxCxvWbWusxPR9edFqaBjstTy2nKMN5cvJQCppg8eBnXLxbM2BYgwMUQWMnhu5bEhDf8CTSf7D2Gs",
  "key16": "6XZ2qA5JytXMCqsLn4o22GgQg6bmWzEJ55Dhd1wMCGjAv4inuAN1pig1mmyqBL1F716AYENvNz7hohfKJYqi296",
  "key17": "4K8XdQWqTiWrdNz7LHTRxfE4aeQXMJmZKJKxV4PDcz7MN6e85GGM2oet6xigny1KNKHRPyVo39v1JwcLbTVruGBg",
  "key18": "4iaXyBy1EwDLeYpGJbizmsoV3mY11M63zJZ6LNQuKaoDStk2PdfRLdn7kNMEbFRAaWCmHX5ZGPMJwwTLJVV3E1az",
  "key19": "3oqiYmXhMhVnr9vTrZxWvUNa3Kyt9WVJBnbwTUm1Q1b5Qq35cunEeXQMKmYP49FYQik91qjhegeHTMGopbymcrL2",
  "key20": "YeZaTjyfgwykoZPhbZcsfxF18yuBJQXYx8bzd14X4Dvs2cLX4K95W782MwzrceYLaVtKLf8ydCg8Fstrc93UBxx",
  "key21": "4HGa54zQBh3dq5exS7XyZoMY1tN18BmzDREnAu4xSh4UQPamhdpWnMP9A5Uieruv82q5aX6BMmFioCJ1woJJpu85",
  "key22": "2aAaepnA2QJN13qa9VN2d6q7XUfpgiEpM2Eo182SgquGfSNPxmChBEiJK8azAybg3useMQHkyjJFZoNRWzLr3V6J",
  "key23": "2wHEwrECWTLPY82egiHMKD3HFaEEuDAg7T2nZPPyEheqQH4Amt5uMVygeNUnH4Jh75tTJcVukdm3KQFecvsMBJ5a",
  "key24": "2Mkd9JUgBd2m5eQdweE6SkEGc8EGQyrN1L22pRLbAf826geE2KiHkSNgtXbBQoxWe33wWt5eCeUuQFBUCWmwqnDa",
  "key25": "3p3oxY3yPBxEdoN67m2qooQcCzaJXestwDQBVUzbeCmWpoxJ5ZhBNV7DCT1RiZGwpwh29Xm1pQXgyrB1mzvtTFRa",
  "key26": "3CD88p7K4RGeFX65WCJCxB9AnFCpbNZHuSXki7q4Ks1XjGYJTLYT6Rf7zayNJ2XitqmDeH3kbJ4ZJZhDEHurTaCj",
  "key27": "5kx44QaGEenQhBsN64LBKSEpAht64DhAYjYdbfF833Vr8XKYZgf4qpBnx4E3oVUEUfGUeRkSRPQmj7Hpx4iobSVn",
  "key28": "xUhYJKfz9NsHqmnhGvzzFRALVY5SieHVrpmZyERaVy3XGJuTJdzSDp2SwNW3qNsDVbjeGPw29vzFgbW84XQumTK"
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
