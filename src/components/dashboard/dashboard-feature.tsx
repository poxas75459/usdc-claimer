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
    "5wNocjzZfr6F8oq2JPZTnJHmMmw5m4VYTuWKxZEMMoxbma3tB5bkxy4wPhf6SGdUDgUbWj9oNsnrACTPJPr6i3Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouBBoa6usL2kW1vcNiFjziZHKirnowoENg2YFCmjyoF9aY9mA2W1ekaj2iDUXjjmnuJTLRfJZgk1rNEdcjTHodu",
  "key1": "kvQYt8ecM7yVNz6YxUuFRoTUuqKf56CVkS33vA2wmrd3qFYfPMFtcYgri8CgZv5uUMHJUijRbuQJ9SHLemDGsr9",
  "key2": "3f8XidTdT3WXfe2VMwdvi3xvNdEYF3thQrBqeANzKgJgpKw15PdTQMpCKsCYErnn5rJeEJLzDVvwWyrvGK7dTy28",
  "key3": "2DW2fQ6tHxYS3BYLZnfRjwmeyWnJr55HkPwkN4bj1hBELdahUfFApoArzEAotfannSUrGyJLB6MUq318EnyxBwEM",
  "key4": "1ZqxZrvW8JGHrVHkQJdPuDwbkjN3hmXEHuvVhUHFYqW6H2N3LgFDesQdCWzqyYTXnWLDwcoFX5Hrm8ZRta7w6Di",
  "key5": "peLqt1ZyrHrLhTyu6EpmJvjj9dNbYvFvWgwFxd5oJHRLi5aE9R9GTMyfVqhTYDHhAU7Sg4aKaNdDtsdcYGuLtcB",
  "key6": "2FDFDVa9r2zAR9bTBtRn7H6aFnPhQXPoW3AVm9xrcTgzXMW4ZwcMjWyFL1C5L9UqTrSzUaqihmZKv3vmNdPjhiF8",
  "key7": "24qr2fqMyd5uSzPACGwN1mrWC3dYi1ntz8HcwrtG1stksYVnMD4MMtSVRUnFHmpRYRsZrFYWykAvuwWVucXBwdSg",
  "key8": "oszrna2kfgXHn4eYzVuR1dchxkVimK8pixbqp35LPXThLumnCBUnoBzxvwAKTeZ3Xjg78xZ85pimTm77XVzpnV1",
  "key9": "67LWosa5KCDmHZYyrRQyGivXNCsSJdnw5HoJfC5N3t4qCET7ovxNwtfXBgZtHbV1fmnSeS36FWzJTAYwm56zNEny",
  "key10": "4yqgjHaZNoyRDimBZnq2ggakg3Qt2AxGEFcVSL346T5KaDBu9kcdTH4B1B66jAwdDd8K3BtqdsmifohjJph1FVpk",
  "key11": "Z4tUL7tuPk7zBwmuCdzrjL3E3xpN6MNCoDUBomCadq1e98g8enD96HuGhMiZ1gGhhtqpVR8oMPnkr2K1HSAmHGW",
  "key12": "3uV5rJtuxTRMekgmatHho5sGko316S7S5WpoLK8avoQWLwGd9KEXz2MDEEzso8Uct72SVUvMcXnGbJSS3vZ5hFT8",
  "key13": "3dYpKema7CtVGvT6D3pYmVoeeY1Vq5ghJaFcZWZvo5qomSTrGxuQ9qpvnCVeCYnVstBpbXqbjwyEbZyWHvg2BDLr",
  "key14": "2tU3uNfnVp3VKNtkWezNCQWxNrNHk1K2NQcMScEqPegUszH3Lhx21QTJJYJZFkdPASQ3TXYxdANXhq4JWvrNHVvG",
  "key15": "3BNFbAWCjux63SNk6JKNDo9w6uEnor76HGAb5rTAvYVMd4GterHGkVA9Q2qGqR6sEtFzoZoUCjAQgw32XMGBbRLT",
  "key16": "4VfeHhQdZZ9SPtczhdKHLfhggYcdjHeFbVkEiTZnUcpZi9n1T5hgjE2qT5XeqpnDRwvfs48ZXGNfxrVcJPZQAcXg",
  "key17": "2eq9wNkbPcWHYWapoGhftX9Gi3VamS3znFToAfXNhDcyySBZhvEEukGQy1cMeUgkHuPpxeGNd1LxD5SmpjrMa7qt",
  "key18": "3vGMVmagc5ffYPAUaK8r5vm2VouWB3cF23hqHRiipLxjb9v73NYH94Rnud72gqX2jHXNFEjHcMEYjohzpwo78hfs",
  "key19": "4KpR6UitE4pTdyg9Xef6pcnCjMeepoU1AxxENVnRBVt46yn94DmKe4y1JDdstJNVrAhMv98FQaLi86ceWf5MSn3",
  "key20": "2qf19oXuoea7HXkuyNtnP52U6xap9MWXP2ZEvmKXBKCnzkJvUXry3bzFcdhJSfPkf3jG9RwRoxT2yzpLquqoNSHt",
  "key21": "eFz3J3Xf6E3Fw6XSFJEFXhS6w28S9XR77U14DSJroLR4FG2jYHAyFk7RjbPTDradeqsjN6qyP5M27sN7vLczR7v",
  "key22": "5w2HZ4hNAGtUyzKHMdm54a2mnhn7D962wQ6rpjarcrpNrp8hPNtwQ69v1pt3FXc9m6xsChs2HnUYJCteghE9MC9S",
  "key23": "5eovmc26H1aF29T3WT44NKoMViffRuZLDeCAMfXKDwDk41B2yTX4ULhHAvCGSkPT39NFjCBw9H3TBERZa6iSw8Mc",
  "key24": "3BjhJrmtBrCyP8dmQG9HaESN8gZXLQ9bPJBYdyzxqt4W7QUjN4zaJDrGoB77Vuip5yGDwupBQpKydf3ysiD6fdQB",
  "key25": "2XnJ1jFCMFHThYSeapUgKKAxFqyLGPczr7nRGM1fNVpSTKCj6K741J2eGMmSbMNn69H9swAXx2Vmorduujn9xp9S",
  "key26": "36X8U4SA2sCtS9UAkakFtYaifZ98darUnas5VM63b4DAWTfuxJUjQEDs6gmeAGeQF97CfPNKyKrHGtxea8VNGpbN",
  "key27": "3zTgSHTHt8djnm2rCg9xKE5RWTTddU3qjHVJH3dYWmgNTCKb7aHYM9jnk9S96bJ8dFWr8qTsdRVCc6xqBSoAPptX",
  "key28": "2iMyxNoFd6XaxXoD3kZgZsh5rwYwpXdizJvQRvBRSEkw2brCeQrWBJnzfj5mbe92PERuq4FJNZLuNGbUfwkmEPR3",
  "key29": "4XurDfT2qAoGp12DT7WTURRUoiF7NzNtqEh75zHMdCeTGZrGhvoz54YkZEEQ5xYzj2vE87wkh9SRzgStkaKk94fk",
  "key30": "4Knzyro1hk7KLqUmBRJWEJgDvLEa83ZdAVpvpXQwEKW7rkTAUXbGmRW7KbmWqMJnkiEMgn99UXyYzEpxmbv66YCP",
  "key31": "5WrmZhhoWP59KssfkwdoMnhfVGD4FoT3ywkMLT8PSkzdPwbLEQvtAAVnzzzXTTvazuNBJvvXZekajja9qrzwyDJQ"
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
