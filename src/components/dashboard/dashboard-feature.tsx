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
    "3FKgsFsxsnLdwWnZpEQsPqeTWpEJ8BuzuSXXxEE2cMbjAcJHQLpYY8wFfGMMzHsg1CYUw3WHhA87DTDjBZuCJc9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKWWouxDbdM5CvjiuUoGdGjuKJL2csYJ4wYK6A84AZcBQZ7Pt9yDQtVuR6e8Qn9gMaRTsjZo8rWr3D1GBLNHrj1",
  "key1": "43f4KC2Bo6aGPwUxhrayKWPE6EJxC6P6tNfK9mtZ8nbnwKGunFG7JRJhkaFmWXkyuUPgNuQiRQUJ3xBYYxfEDp5j",
  "key2": "3HhaVmSv3zvuT811QoM1d7eEo2h9H8BibS9hZWGLRK6F35rHbV95icCuruqgbu8xmh3KnjgP9XnSrMm6KKte6YUM",
  "key3": "5vUUzXDG4bBCriXVdRJvp2sRefRrs9JLPz2CSyinmwbbeWRDya2VecUqtWQcZXLm65uHmsqRUZ6bmpPWWAW9ANJF",
  "key4": "4mtXiGGYjkeX4aJzQrAjUqSCPq352TZ5V4CozoR8NPoZRiazRC6iqG9QPBMw19Co1GJTxqDtpSgDSyHMC2u3MXge",
  "key5": "WC6Egzkqij26NAbzYhB5fXfSLMMo7JubqxHf4yStM3pm6xbDKFa9PnNYaK3uBYxP1UzTxHfcgfkz5vxDSLRLrFF",
  "key6": "3CjA3N5bGrinWQXnGJhxA36MkpUNr7AcLAHf8TMLsTvy8c4XMH2yzjkyNi3MESmQHanyRpRpEzifa37m3q7K9Fcs",
  "key7": "37AWKYfJH83B91x4UVaT2bwJCLDihKJV5FqFqCzA14mBNGGN5QnF4zVEECDoH4Y7Xta9nzz4Qxf8obXdGYsoVfiw",
  "key8": "129XpfNqTacn96nbWUmihvEmU9KqomGYid6pL2MUnL6h4kMSQM63evpJQEuy78RsphhjBif6Ue2DuPBCvgMbyFiL",
  "key9": "2hFc8nC6CdSDfDgSg2mcUnK8toqD2dEZFAWh1JbGXrtJw6yXneZ3o7wkQmKsKAoWjuQADQthcYPzCcQCUZ4hx9gK",
  "key10": "286YKZFVHw5qh7sVMj8XVESvAfnVakC98LQGaaVhbHCq6NqYPDbgBGFERXkLDT4o12Xr6L43FsnMdofmzs9SZK2f",
  "key11": "3HD9uRonHewm5LBMiZAtgcNEGVXZzii82oGe2so2g2HRxbQzhmjFvmTAFJFUtuTBiYEsDBpVXLKULtM7vovvNm8P",
  "key12": "2UwxTL3uxYBRgk9eppHA7XjCLHnfTFYXMv6WTnBCwBVjEe994DFpk95TQTqC3TeY6NGgLyQ1E9QaNYpSLtYyMzUz",
  "key13": "teTPJgb7PwmRmWAS3vBqQ6FyqjqzFuzWZU2Azp8FGkjNi4tbQC9rkaPVbkmQiyZefJwQnd594nYaXhAYx6YASoh",
  "key14": "2dFTQwp5bjinc9vQH6NK2Zn7SattFdryYxKMYSzyiNGKQd8ENanDGG5LMBSitJh6sGu5uEJRVM6Ai9jb9HteypbM",
  "key15": "24jJ5N7ieFigHfKhs21qqdDrc8a2rquFopGce8CHMLThdKv2JAG3infggJSGM34L8UBM5PbqcriBGX8rK8hipfo9",
  "key16": "3QcJvWgcUVrz7W1AJc4icZPgM9HDg7dnabdHvhzjmPJ7ytX4PBvFLKVezCcYM34vZr75mcXnt118AfXFaZs2UWKs",
  "key17": "3evAhPzLph2HhaKD8kiDhz9haUzzBCZNV2rEt5UaBsSN1kJ6YNtZfGRkatoHuzgDrC3uGHzDB12TXVLs8ryEo98m",
  "key18": "2ThuHRPJfgfVTaHe4A56TwuXBXRnjNyfwvfCzpkJqqEYtZqTwj8EZZigoAbdfdfJdfLWaWXJjLYvUB21bPWEd8BN",
  "key19": "5BDHw5ctZbvvwHSjQFbfhA2EPLKkjvmn44nTRHTQvU8wthcB4zULW7L6rYXFapFogdZ6oDtoeM8jUvEPG51VdzRw",
  "key20": "RGKD7TUycpoKr3fprWYQPMoXhH17gygw3FJ8vGStkwdd25EkK3ZJw8T59s3Zm6V5oECUgwENGyentn3sSTf8XCx",
  "key21": "89AKAt5G5YrfmmC7ZxoEBV4FGxwj1vBKgSfyjLUowtoTJESHEdG1ssoP9HJewrzyhc4Y28V4jptvaCeMGYvNx44",
  "key22": "347Wy8paPXdyAgZB6FeGhBDa3JkUCNFABjj2B3J6DXZAVda8HwwK9ohZQEJB3R5zBECrhdbWEndH9Dq38HtjTMMF",
  "key23": "2WCBnMNZWazY1FxStep3i12YJUFMhsuJUtXyartSmfx47DDN9osmaWaPeQSRgsyJhAJ8b4GvJcFdLqB5RgcfVFCq",
  "key24": "3mqjyK2BwYhB6gEi6qzAh3Pwn1qYUEbpnUrAvB7C8EPTCDtbTJXreisxNjLuFn534Vwx2UyRgWtWFWEQrRnfmuFQ",
  "key25": "4amXCxUH94HwiNrE8oCdymUVUGyGTGeGrGPD8uX5q5JcPYWgzuHBzRAqwpX8ywhnXcf84gCRzsUcXkBCibxEcQm",
  "key26": "4RnPY6wHfu3fVyjAeTb4DKfauEyD3RcxNeb2ifTPJGoy6H4bgEyM1Ajo59qt3aMUT65C3D4dSAk2adBtc7qbkauL"
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
