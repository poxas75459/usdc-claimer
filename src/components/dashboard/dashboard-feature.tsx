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
    "3nBvMmf1dmnUDwpneFgek3UdFB2hR1iL1uuCx429x2cUnBj3X6ynAsh8BnkHFcrZJjkzx2Aq9xA8u5fyQaYg5Hz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LDNWwMds1FojTAFDkc9ZhdciB6QmzJDXr72dbmJ3uBxbUva16VrZqCu19cAuQyruPdZ5V4xrKAa2jisQQPYPhh1",
  "key1": "2tDAG2SatKRXn2sKHdhqiLsTEmjaGLhGx1PipnadA8U3inGAmoAQ3DGMrgTUS4meejjSwzCWTHgZf64raJtPQe2X",
  "key2": "dRrppPssiaJ1RPNVcmzETByTWMGEreGDJZVn8aCz1sdooy6QWYdzmf8ppmJ2s83zoQyWn6xdbm9twgdJce5T9Ch",
  "key3": "5Q1SdCKPhxCnJ7sjJpESm5Xe7BMNxnGaJdohHbNfB1BXKAQ66pynRdZWayGSgmyDMNeGLEdjbZzsafgLBjiCT1q2",
  "key4": "21CW19qHY8McaE5qJHiW9hKsmPuFRcQbduSd62X29AuX5tHbaZPc1oiBgaSQdm4rVapU11BS19eC3amAqQnyeAsH",
  "key5": "UWSvYM2b9w36sTc243V5i7scsMPbUraW32udLyHakkyJYuQHuLaSFU2KB9vQmQcVsh94ZsVXvwpx4QL8eFExfD1",
  "key6": "2fbn7U2r7vMPz7cStGJnSBRFzgdcxoK1j6mPNdMtwFRFhsdTWW92B6TsumjKimq7F9zc9Eiju9jfLdYXmfcNvQnP",
  "key7": "4MxdHL7H76df95WJSx9X1EMskPQmrRFAAMgCjjcRPwi5smHL8M1VuxeGkMH2XQKt8ywQADXcMmqaJG2RrrASv3XQ",
  "key8": "5MhTaQyt1sSDdXZiHS7x15467zy4MaU9Dsi1czFL9i6qVzwKFD1ca1q4XRXKrENzaS6FZi6eyMJtbKNYaoXodRdv",
  "key9": "2CaRBw97UdR6v8BrErjhK1JTovCX5gcmddAN7xksNVrUbYikUnwoD4zjF1UhYdqb1Nw7FhwWxC5XENSn6YqWqXxC",
  "key10": "2nYuAdrX7jDF8cHo2KQjnDehdf5LtNPuSF6VHfdyMwxsMu3csnzET3LBs55FR1oqr2hWvY9F1DbgARjSTPNLhRjK",
  "key11": "3nq9o7bhWxkuZCikgM51aHynXaFu7VBFM7RFvzEynWGy3D7zAFq36eiicmHCD4ZNL8tToYszqPT5bUYqZbzTBvac",
  "key12": "3i1NDFpDyN682DUBABz5pz59eGYzYj7MYyy9BZLA4uZP2iWVvg8JmpPzeR5ZNYrDwkGY8jpTfn3zs6DTy5u5AgmJ",
  "key13": "Mt9884oWWW7AymMj84ev6e9VvzDoFP7TZD2BqyL88QbVFJAyA596iHWGJLrfhpQtXAewsAJtSPrCFUUEjZ2XxyD",
  "key14": "bGUw5TyxRWcvcLrKkcH8mGQEvX2suLvMb8NzQkmM9XezbqK7Gngwd3j1ZezCTe7gK372x5hYohimRR9MXJWMccf",
  "key15": "31iB5Sf4ev56HxMx5zTSVxoavk9E8fzJhjF9YkjzBg9CjBGwWicnYT3ktvSncsjbg4cTUVuzNG1cahnhYo75SEsY",
  "key16": "cshheSjCuizWUzj5aLzs1X6JAkacZusfth9VCf7pn11gh8HsVUbDhdVWLYE55FT6oHyj2ZCV5fY9RZ38Vpvx6om",
  "key17": "657WYHMPx45g6wdr4FbZDyWkgXvGf3bGHkHtXswm2uajqT7cCPNq4axykQPynw9TwseARyEMApXXUDgJVaYYSaDC",
  "key18": "4bRJQtZZQSuPPbT8tNf9WvGDf44q7WJcHwmq9tf5evHyHXqCoJ36g6BBbGhndTeXuZQrdJXu44WtixysM72wZW93",
  "key19": "4YqbkGAePanuXq6nrZC8CparuiwpPEWdYLJhsyvFiFaWqoB7WQrSVyLeMEhGXM6JnpxTo7r9q2c1rM44CJLCeC3f",
  "key20": "sxHEwJNyhR6fi7kVVu5dJ4D8D5S8PNTAALbgSr2MRBmdWUkt7XZyrRvWUYVkxtv6c8btKfFF6v9AtLktFsC5miJ",
  "key21": "5AzcgNhzupbmSNgMrernxToTauKV8i1v63Zw2WDqVcs9JkSFSty8pofyCeCM63v222neUMuNgWyWGHEcQvGj2Yg1",
  "key22": "4xDvT1mjKW7wpgWQAq4f9JgBTAu3ZQ5tCsnG3YgNq9BctQ7FjPEGQDHvsAoG3aR7nLLbnGQxFaiEfeSiVuPe3KjN",
  "key23": "654ZFSC6p9ZTCdPjZ7LxKfKuePwmjHMmQjTuLattW56zF2ab53JF4So6DdzYm2UXb4BSvb9w3eRDvJ6cfh4BGCAC",
  "key24": "5rEdqPam9teRhuRzRF1uLUgmnBfZ1McxJwRjkP76r7HWdyyPwRboBVbxPLpxNtYw8vy4Vi9X82wFivvyyYNkQtdw",
  "key25": "3LYucTnE6U9LZUFKdW5ybhsDAUgrcP86YgC6xsuxMH5Z5NbFgookq7V65yawyjbVyQpG5gDPYDYk8Zyct7g4zJdq",
  "key26": "5RPY6bAG2D5Nvw2AhkcwQ2yW8qwrnrjyziWXybYCBERgaashVn7Ex6CHrxa1qH7NmzSmXCvvn7xnacAZaNTC5rCp",
  "key27": "55dRFcM5aJJ32ud4odTvMV2XyyyJsgM34hMRBwwczmPnARSnfxhiRoCUj9nNZxWu3cTKjXyzAYtXKqsFqupbpCLB",
  "key28": "2TQU4Q3Y8PGgCQ3BcGWSvMHJu1CU2PB4orazXiyXL8bLR75EE2SMDYFAD1Mn7tSzoV1pEew2eT2ohYmvyUQsLktv",
  "key29": "2eC8E5Jvf5cJY1zCDjV24hP5YmHPbMpsYioUG4jdY228yVqGjz6Km3wnjcxRQwdqUpSXVjiNtFehVUtNWSTPjvFH",
  "key30": "24AAdUxkoFcNesn5vZkwWK1KJxxhmkAnpBzXNdvwoRJvZ3QKL4vnQm9vQktpxgsc8BA5rMSc9nAc8xnLnGS8N91x",
  "key31": "2uJLPdjVfs4SA4WTCTTm9hiGAKSHLWd3bMX9sbbJSXwcPDpk9PowXYRhR879qZQhPEATvY7VZanXJXsiPmDcPMw4",
  "key32": "66BtbXHAvYQj5bfPFw7NswA9GfXcWA3JYYJ42p6SEEQ6fdBMPXg4JwhaeP5kokVcLANbLHSmNenCksKXMft7tuUe",
  "key33": "5ujXe7RfgyNXWmddtNdMfT44K2Y2tD8UceeG2K14kgiyQfNacaSxu1CauVizjAQ8zTxAbJz8YrNGgZDJSJrn35eS",
  "key34": "57PeyEoSy7qHcj7vg4M2AEDr34DkCiFTqCDnJmteViQNkSH3eWHNow9cL3YMaz2bgUbL1bQaxhSe5nZgdXmLQnYh"
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
