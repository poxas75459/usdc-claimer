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
    "VQb5yBXLdsPrf1XgR15mehaGUhJGFXuCkztxEz9qMBmJqUc5t9c4XpDCRCNaU5sJbW2SM9hzGK4tS9g4cZ9zspa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KV4qHhwiLR9feseaa6aVbcbP9bCmaaSrJ6KrdsT1Vd8U4Qo3CqnSYA83ngeCiEr3RN1QL8Amtr7uDMUAbDsNm2J",
  "key1": "3xQKLNmJjj98fbdzFL4sQZwV8iToQeAgt6kB6aqgcnXGZdLyU3zweaPHCCCyvi3RTKRcW2KZxkeshB9nejUtZEm4",
  "key2": "YxeSEaxxjxhSArhDs9suCGRmB9C5ubVXFe6127YkSMekTDSVndfuYa7XNoMn7jLcNMa5TFPBtxCJMojxAVzBCZC",
  "key3": "JeqchrHwta2D5Byx1411Z9RPTnFNDM6tpqedDtiVVWYxj69gEa34oDZ4kFQiLYzsfyskYx6zNqDqXboyrsXCjLR",
  "key4": "3p72aiQh5CjhvwXWWgWytCPUZ6pdEEGBKXkf1B8fXbkD28c7RPZTafzHJUpzt7djzrUhReQhhyAfHc6ZdC36xZFZ",
  "key5": "FXNres7KANe5rRRdvFLSQ8s2CBWsndwvJP4s2e2WoHBNCiq5KpyAEJayzCb8RYJPR87Xj43tDnnFxpavT3Sizkw",
  "key6": "RVMEF3aNhMvkTKw3AxU4VCMgdG5VskqeXDkVNyg299fdSQTgA4LNixJ3jWx7gLoyVZRASZYsb26XVjhbbqwEuoY",
  "key7": "4KFeyHrbztVvGjPmSfeJucTiq5EYcHauM2uDBmaM4WCSzC6LWzPFJRf4gFVdJrU2BPM19a2X2LcHitc5yvBbJpqf",
  "key8": "4Vn4CFVJ5uxp7ZjymnWcQoHQTFmFzTpakdRkVzgaak7ad96kPkitSXMDDvHAUxpg4igqgeK5vBkzESnMrabinnK9",
  "key9": "xkANpREgxb2yDFST3LDHAE3vzzyXgaufLy6VMGJzV1QvadymP1QdXXBAkzh8PWTei9aEPJ8QHDeUDVh8dpLsMei",
  "key10": "4GmQgNPE8YLFCUB3uk2yC6H6PZxMe1A4aCkWXcrqWAskF8mB8cisW7pMnt1hUc8TtySJNLm6h9J8MGJSxMEkC6K6",
  "key11": "2Gkd338kWSZSLSNrVmuykKfrczVz7fvu5T1zpQtG2ACcs3rwyM1V7fy7zo4Pmzz8AAFZdzcc92vBgpytF1rKfYzr",
  "key12": "4GbqrkQLXfvdHnCfyHZJ6eoztdSbMjPzy7Q2mudXyNxRe5u1vKw5jETnG7jyE5RJgdxLMyHjUdztf2gkDWYYqJiP",
  "key13": "4v9GdxFL2MjDAZjRhLDz5gLn6HbhS7W2LgUeDeHyYefbC47ciD93snj6HscB9SdfYqs1RXpLauRDKTfBi2tMQtfj",
  "key14": "itbQmpyemUqPEzNFD3BAwpPE13gSWZ1Ao2ZkZiAKttWcKA16JcLrtDxZQjYmMEeoZ6j8rsNeSJcdQZMu46fzPgg",
  "key15": "3KxKGB1HVNBJLpzxxUkwYarxoRrHEv2uR9G5Wo5qRhz9GJ7bDTnNh2UwVKzt6gCjQGkW5qn1ikNpKN1FoSxKGkbd",
  "key16": "UfFW7VDv5Fumw954DkPkW7dWYpBQC4AnSKRsXEivEH2i6ooZobpMg3CED6Nysts9m1xHgykT57x2STwFLTwHijK",
  "key17": "5b7fyipGausZUXYHVvJQ1fY4LyrWCHVhmqW2dLAaJmWorbLbsGgWGzzV1nkAEnN9usdzWJoSpfTSo5z2Sv5q827R",
  "key18": "34ebP3nW2Cfgxca4j6TAr3G2T3Biw71B8mk6qm2ZzsdX3rkpyZiPQzzQqzG7wVFpgk8jNjQKqUzRqoW8MxrFxNie",
  "key19": "4zo7Z4pp9Bn8fZnYpqKSr7vgSpctcSoFrYWevNK3LrEW37yBe9YZfdZcX7gT4Q18qdi6dgGe9UwUhUHw61DWDiq7",
  "key20": "4sGeHVrjDkjb45FLW6DeEZQ5nKcCucaWzJ9pdfZX2CTPxsWTXSfJ5wFBeNNh2UAhxbGZiqvXPwziqMT5QT4GWi9o",
  "key21": "3W9DtmzB7U5XMtWQcTijWSrZHwi9rJxfrzbfebHddauqa4JZJhEez2fD6yejwC2amdLC1h7SjVhHPPY5vWwGUYhQ",
  "key22": "2aFysdxQDJ3mSNsoV4kz6Mb96GH5iynMMThsX4MUrR8AgsA6Nas6be9oP184RKpx1Zx8T7pkhkpDVJSUPmZEUuWE",
  "key23": "c1ShhWMsByHwxBnFRemicjEYcVfC5KsAc6hSSp71JeCZbLDdgs3Qevi5MgiqZH1KVbE5zfouArdft1JxC2N8maB",
  "key24": "49spksBMcJeu6MBpg2c68GwwyUiF57sPEuiMf62XJdkeVsmCD2ZSP9Rw9GhMzAJp7P9vENxU2sbNY1VSDPvGydQ4"
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
