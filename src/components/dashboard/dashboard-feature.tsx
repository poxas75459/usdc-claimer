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
    "5J7xkBWGPWyjzTvXf8UY3wCecis5BfzLmv72jiKSdk8XWizRWB8AQqCL8hFr52bXhv13MX6R2oeYyWDehW3RsCJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cbufqHhG9GD9b27U522vSphab4k2T1zHms3risqwyyJpZ1ujWHazWNpGPAFyu5u78bggSEiAu1PvbJWGCo5gdwo",
  "key1": "3fnxPobmLKTdb5JSYpPX1miUDkFpxxiqmhDoM5ToAK4JHdrTm7QVZg7qAcz3ycVSGFFB1HiBzFvPDY5vrtNHfVu2",
  "key2": "62m6ogMAd1DogmrmFHSXR9Gx2yqJLE8wUxcrEoGhwvf5wA7KTWPiLkpyRBN2qwBFFq8PycGhD7YHCjJDojVZwx8q",
  "key3": "2T3XyyqB4FiMnLEV9PBNECzhXTCKGzmZJwx9iSkZzointNYMiCKd6PPDWPdJeQdv8LS3frv8FsL4Cxkv6UXCbnut",
  "key4": "V2NX54VndDJpka25gTNPxF9oD1gEFdxEs1DAA8DhyNe7ViVvYHMhC1tTru8ojy5Zc3kvuJWApE9f8vYu3q2FFrJ",
  "key5": "iiiA6VfS1AJnMQZKuUt2QxxSPznfgtEpE5q1cyScjK642GyGSMxQGGy8MZCzJE3S5XGjC6cgT84Q2VV5nTLSkC1",
  "key6": "4Ut6Ah3jbY2CJB5ZEUCYtva41FaKKnrmbM9UPrKpZojZ7cQVLzZJm33p9113XQ8z7ocZmC3YCmhVUoF9je8yzvBn",
  "key7": "4HiRyh14vSkjPgVq4xHEMyFttaEks2rQtPFAedVQ6JREQ8MHWY1nu8db2AhRwA7NfLs8CrCi4cdVDPwkjGhst2xr",
  "key8": "2uxHXvd8kfdfpZcQeNnUW5Eos4CK3xUYn9aptGu17kN1M8H6UizMpHuSB267g2SKj6dQnLraJo8hwuN3HvernsLG",
  "key9": "58yhKwwwtm5rx5DPBHbY27pZs92cMdji7zVzPdiT5D3Vmy8oJHtX4dgGawY1tcbUzq6SfYfWpK6yyPZaEu6D453T",
  "key10": "2nktZWgNd69qX2LagtWU14pM3qvfZM1pt9gmD2tfvP9Negc4DGJe4fNYYprQNWYu7BR8RdXFCBkxYFY5hrPmTVh8",
  "key11": "5dhsahtjeHEfEZqHueuuk8eHi9biVr9HkyAzPww8dwNWDS3L4Wd6nWmwbthFEmuTfg7Nkh2gAc1zDSvKYyGJ1ThJ",
  "key12": "3z8YUpKfPnvtomjnaT1o2SQ3a3XpcexgYQU2zmcZ53pi3AhMMvviWxNEqjqCY59MYWuKfoDwTkH2QRxFjZVVYukL",
  "key13": "52TzVWru2Eedqp8qLX9E9M1tsCftcGjdb6AxikY4BybS5ZCUFspVVNcPis1y13HDogy6RoEjMSX6Edv7BMamD2Lf",
  "key14": "3631knekzk5Rq1NQimmkSkHxSWUBKadkgXkAWUbnwVcBxNbshWvdPmhe9K8XhENmhLdG2fTaN94EPG5JA4nefxRg",
  "key15": "bBi5ykrtpa3JA13xvoF5uWX8jcE8debJaRzF82YP1DweD3Lw2S4h2aLcrzf1PJfPBHwZ2Tpz1Tka3MJik2R7MxN",
  "key16": "35REa35gbgoN5rr3BaWArUNrexdTUMsiu6GWiuvATj2q8BSZ8z6AWRqLhAXzjLZoBwJWT8VqMrLF1XyUJDkG8cVj",
  "key17": "3a73LLEg1jgAqZSW6ZXtq29pBapNwno9yuCvPtaSTKXBVWsKGkw5NzoMygQE41kGZCiJUy4eFcd3KYMUpy1knrBL",
  "key18": "5gjDNRrSM5CZuqypXhrSbGGwHXFqBXJ11jTujNvxEXNzGHriEehnigbkMNuRyugKkVHfpmtLncRkKiNS49ZsDkVr",
  "key19": "2hjXewsgEMDTvk879GDFBTH2Wy7z421nxcZV3uFYrPJMucaZc2bov95516xwQcNeC4NoG5mtXymJK5ApPzoZuroG",
  "key20": "4E7awN7nyFxpnFsCC9ctS9QEDojvVUz5bc8dsCUKBSkgLz5CHeaxiHjH1FhYoyibQddYJAr1czhXrWrddtC1rkjX",
  "key21": "4R57JTzgjTBvgT2UdxC6TgkjRttZuneHGkKgXLDHnCaEpjrYhejq6SfivyYuKTnGgeKyKTVnmn8gfFqhUqPzna6x",
  "key22": "2m4dvdeqdBRNCTKG8wQxkfb9cAhZMdJVVzXJQ4oBRQfeNBuUXsS6tNEpRZWhFhvjdCu9KaQUozijuNCDw8GmczdH",
  "key23": "4889rv7CGciJgDLPZjyoCaQiYoix3dEvSdw4ykg8D85LDz2jprjvBSyMRTbK17kZhC4GgNo3Nnpou7xMTi3YwUmZ",
  "key24": "5dqzJWFWg81EJhsvY9u8WW2kgRj6zoccqgRN3dtQqdHASjpMvgcZg74vrKXAbVDM1FQRRFs1LgGPBFGqooKYpqN3",
  "key25": "2UQ1dPgV6xYT5ScwxNBq6Pg5XWXzL9NiceDyH34vMdFJhskMxk8pTbYZbXvZb7dQ64y44zSJbpKtnx6vZonwwCe2"
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
