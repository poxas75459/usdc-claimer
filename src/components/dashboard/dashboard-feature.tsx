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
    "4vss5ES2h4frdyrfhARcXz9GkCDrEb9Qyjn6nBkGnNZJAsKxjxoZTDZpucxFihntWw4NxVCJLb2h7H9R1uYZVac1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnVfPqv68Gm837Pr8bJuMiGMXZtBbzWqBd14hqZ98SZjjbkcH3faGNupkRADKq64K96U2dnxKxEN86yQJJPW9Jh",
  "key1": "59WPuCEmBnU9odGwVj1Rc7BLAyuzerrE5xJfvMXNduFDoGB2wzjYFyWuFHntVi4tsQiKBFwEguDWojEXbrsY6QGP",
  "key2": "xP5apLNzaJJGiZcQRMKyvtYzMBkgLkkxbkM8GShuffP11PnEqN1xCEfqqi7i7S1RNeAArbgptqtNMouX7eaNK6G",
  "key3": "2dzQLUPHVmgpxtVtzw34bUMEK1nB1p4udvxAmSGAGbPzuU9v2ttPP77eLMcddZKZqURGfqGMntjHTVmiqXU2P7Xg",
  "key4": "5w9xdR9p2D8XRsjBymM8RvyxVkfUZJ54cbaPji4Ntz1qcVbYPgnhVZbNawjmWwE1GACdbcZhz2RaFLmbEiKjeTbm",
  "key5": "3kigxmiw2cik3EaaoawkDqpJTtVKTV6oDhd6T8kQf9oybUFQzKNyG5kGWB5c26xWk2M3WxEnnhv1bgyCr7cTuEjN",
  "key6": "3jBiNsZbXKuQLDDq6iTP4tLbTMAWZdWBaP5gXz5AmhsWix6i9uJfAhLd9fHq4rzBeqX9iHpFodqCBLe1wdpBFwfP",
  "key7": "cPmjT94wbXnctAjxwtcfRZqvGLPenUoipgNgY5c2NUE1FqQ31bnxMxCWW4oMscMYxdT2CCSosSVXW5TX51ML6B8",
  "key8": "gCAxo4qzVa3G5Bxh4iQXevMysrQ1916npAuwuQAjwf7BWJhu6VTHoZWhWsor5J7WMcEPSqAZEThkCxXReLrAW6s",
  "key9": "4aKCZLhKPqGVPkgF6J73BGVkn3nFC54yF325Hn8HxB7pqGkDbZMtSZY9TkWXvHmgHo5YbH7AJL236tkf3zDwfxmb",
  "key10": "3kM7shoGd9174ebnBU39vJRy6Gq4dsXTZufUqr92hwaHuMf4pmgnwW667prQ8JVHhtHTwVjoKys5t76chmxUx6g2",
  "key11": "2N7gqwbMvJG2MszmhH5hiLntkQ1czeti8d9gx8zviUVWMUQaneXyzqNAxGf8y7huwCSfyyqZ2KtXURj6LN2eJ2Se",
  "key12": "4q49q2f5xiWTpSSRYKRLLY3vhPUFBkNM9qi6T8dEGFURwohDMdgJbpKUkKiPgMtzCFPomJpBvDdk8BTfZk5hT4w9",
  "key13": "9VDXCvTg6jRKBmUU3LdzmmPXhvpZKWqXfCRWz66kdsdBhc7q4S4dWdRoMrHM8SxLq2AaGB63D774J8jKXQFXa9V",
  "key14": "59shzQeCeMZ9DhyZbim8r429BjEUwqFgmTZy43rKastssA4fkF5wEkgMQLhHnBdSmyNR1uqQPybLbGkoLSCVeDNJ",
  "key15": "4mbr1e6MGdPnJSFoWLYbBUc55KHhEKdZmWNUbeCg5L6q5DGNFUoDc7iafFwCxTFLaF6T9CKzHwjryGic5W9AFJt",
  "key16": "2vaQKgbfDLWN3Ws9XYN9Y718XiTnCL5AcLuYkHtA8anoC2cj9NYPn6Nj6MymkjCcbAAtm4HwKr4Vb1G18L63CKfz",
  "key17": "3CLxkHJJHGnezxHwXc9v94NGrffzPJ8z1VVEaYjgjyicna2MD8Wiira5rCNeDi4rsqCMcjJbvNcyFnQqgdXSAS4L",
  "key18": "5Exh5neRN6aBgLc4DwjqRPZrPmgmsN2ENDYgenTdxM3DWVXEqVELCkKpc3dAYaw85HLCSphWzHJ6L3g2S2hTaM5T",
  "key19": "G4ieSHSUa2AigQpSNjYNEEFtoFykSM6X6XbNx31U6Hf5JjdtxPhrsYrieHWZJbhpbCsBBBTWkPDoo4kXthGWhdX",
  "key20": "2iDsED8fQCniqGa9W5Sm5SKb7oMaiV7MNMGXBbxxhxVZriSF6Hd8vEfv1ue2S9BJDarZUpMwywuFv8Q1DvUKWYRR",
  "key21": "3EqU58tBxHMAXZ6sf5HoKtZ62mKRZVG2u3aoAggywz2ge3hQmdYXzKwWmwQNy6pgV53fpCoAKHonZ6At2JM8WxD8",
  "key22": "2F2wTVna3qX5BMytxM2yVZDKqEFweMJTyaQbaBrSKjiFpABj5AnK1E6mTrFg2dgwZpEyMdR4DBy1aKwBKbuGwbxR",
  "key23": "5MTjsifPWL2ioWDkg6vMGP7VUg5qpGm4AN4joG2TbhPuXsfWXkvRNJGr6izGbnFqppzMuwozsap6VXvt2Mh1xibo",
  "key24": "42b7TAZJo9F1zgKHneuxLssABu86cAQHJeRr6ieLJBsXXvojhouiog6Rf2DQTQfXEmYN3WC443Fis1YmEduipC3y",
  "key25": "o4pdGZqLuAtPxPwoyc1KDBNaFEm2C5ACuvC4UREPRxt461YFEDDJfBXu2eVt1VfTxt1FzeWSvjHBY8DirRqYDVc"
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
