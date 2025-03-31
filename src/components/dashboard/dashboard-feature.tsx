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
    "2S3BKiJPZVgptGMW3MtEGpQ4QZhTS8sJBHAiGNCN5MnXM3wqb9UVJeFySKrU89N5G5M4hNbkiV54ej4NMht2Ebvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFR9ddwFkvKmaKUoatLxmi6VJMjv9MVfhihfoGLjCT2sUB1xcHmCT9V4v92DMVhr8hZ3XFkyQ8CkBmDVDEjYVRY",
  "key1": "2qh64VG7hvEkQ4Gq7Xs4wF36hbNjEZHdUhSUAyj4wF84WfvycvXMhhhxzPdjPDAfGTmyCZjbrjnHK37d69uNXBd7",
  "key2": "2VPXJytNgswo3kAFcSkpfYX4tSbhk1VL1ENK4qDsf7Tvrq4yYrUgijnCWE6x25ap97kYWnoyL5o1EanQXPVx2xEM",
  "key3": "CP7ih8Rmadts5JNpiW92jacY4UKMb87CBpJodTtfoB5r6RuF5xKZU8jgoQD6vets4x3ub8UUZovpb8ECm2UQDmA",
  "key4": "4JGdhKaqHQHcP7NtVZdEASyKD9ps9t5A6Kt8ESvdQe5ypHdxktzuHSxv6Skqq2XcFZ2KaUbTBeHJLwTuxkiKrYv7",
  "key5": "5TixWbUji54wBk56nYusBjuAE7Aqykj5FbY4z2o3oeVDjARzPTroivri5HxuujEy8rRZt7FKXJVteJ7useFYpPFS",
  "key6": "8bHozqJNGdboCQGm1iuGRi5xYXj9aWYjd9QaRcpn8qhDkaKUqdgVnmenPx7E2gXYsoe4qA8GPMBXJ5mX35RdrMz",
  "key7": "3GVivCH5mXEQWYA7VsHhL1Uj1sTwGG7Pakh5bmHx2qRWteGwUQ1j7uNdU7vFa3bKnCyw7gdyU4FoE95MnYxrqnrJ",
  "key8": "A471AhmSNcrPrddGWzfBbEaPQYEabTgfwWBG3tizYSCwDw22ps3C7FGir9JmP7KBMPihzhjg5taSQkoG7fXY5Pr",
  "key9": "2jThvR2EQQdy5Jw7DCGaor7kEwiij8x2bekwtJ9eLc6ARANqjas1g3XLyCjF1KXuczWyapM1BW8U7nbUefs89KQX",
  "key10": "5ei4qqSvS7VDpWAwK3yjyzwNzLNnfLT6vEtMFEfAqG1rnGynSo7HshL5Uvw8aUx6rViP9hpNYwznp8wXY7TGGpvE",
  "key11": "4ZhfurjB3VRrAYi25eSPs9BZdjRJWY4dVuNTBBVPiixtD3ymsShGDvtFgWzosEzWGPVb7fXAHrWcJzS6bpjYmDfg",
  "key12": "4tCiwFx1U6VVJf45UE4YgdBYHZNzdHouseFgvtibmTRdfpZUMSCz6nAmikkdgwGBw3P4JUEEmdQbQxkKXGijpZpn",
  "key13": "1YV3KeAYW4GFNGifXim7ioa91VJmu76U4j3FHQAbqVsMSRUCU7cN5UyKQyZYgoh8wTHGC4f6qXhir2tt51rh1bf",
  "key14": "5ShsCH8Qzvo4RQ8vvqFt9Q1GsucLdtwGkDGLKJhZ5mbaRtPc79kss698hfbt6J8rMTm8N5uXeycrFz2PCEVBbov4",
  "key15": "2esqpbWX393E1SYTn2Ba59ATpgaNnWGNQCLFraTxTKpKkSHqX7QCF9833s5HcvLhHp3spDBRQrbuAyruBj8wbJyt",
  "key16": "4z7zCZkaVUjNaocZprHp5noFwFvGz345FCoQiCSXEyeTojDd54m89ZhFwMVK89G6TvDxN7Zxx7avRWdYVdfkuDmP",
  "key17": "3zWSWkGqJHiymm4HGhmA67yMBtNbkmfABAw9fiTruUvvueEEgRArz5WLYr5KRXTLiVabA8Wb4LbLRPorigbJAQpm",
  "key18": "5PzUixsrfhEVsWhXwEUMmoW5PGjzctubszojCWxg3JnroVhbFcJ7LuViRqq7c1ZiwnyS7hJrLiQZ9f18sTHgJVyL",
  "key19": "41Z4hxKm6NkeJj9rX76rXSTanp2qcE8RBp3gkRzRPEFS51QXtSBbsvCJnzxMFSW25n4jEM6nGXTr29U1jpJusgXb",
  "key20": "2LCCaequzxTNHmux5fPyvkLDaZdtNAZEvomSnDm1W9KLSsvhbGiQ5S61z9MTKY1WWrkpamhqSu3dBRLeVNxNBnV9",
  "key21": "4KfVS7iR9Jw1oExfv7nKq2ibmjDX9Q22CJDUD2jGZiBUvp2ETgWFbMzv1nD7M47Ew91bcDBBxvJehXETy6i3T9YH",
  "key22": "5tk2rw17cFMWagZyPBruxeKU9dXaAEoid7DLd2hSNHA5rPbg8eCqJjycgvjixo3RDTthkoEXu7YeLbPUDNEuveYJ",
  "key23": "2YTm3Ykmf2BrPFcvJVTK3fo8zQbqTsyUDbbZGfKfzLM8uCDsuCMNcbnZLMo1s752FjSDfh4c2UTdjDsH4VFFbT3Q",
  "key24": "5yeKc7zjPspYfqjodqADt5DhZNDcnmbwZFuX2fAG4rgwWjasSCcyVjHjxdTRQpJahTKsG1fwFELycexjiyL5xpXz",
  "key25": "KQFXqeE8NhLSF17XemFNQ2pDTVjzY1PatMgeRmQogX7DS7jSPgTtuMbenX5BC1FUCxZ7Ri2115qUfy4He3WoEcE",
  "key26": "5T3Jimbqob2Aq8PAqrxshTCoUCGx6MhqEmhczHcYruN84ZNcPQtzfhuYaZznpsaZKCyzuPEDEAVrN2A1ojV9dCzq",
  "key27": "5iWr4euaPQnWWamsWe6v87Nj4EHwTpHXTQsr8QKChVDdDx4bSU1Bd6DpyHFbkFNv3bDN133RCrBNQawWJvsU6utd",
  "key28": "yNNKUEaViZMpYAZ6p7qMKhTXxoYM3RYHKYY2hynALYb44r4yoHdYC5sop9UyLJGBqXC1Fz7EVXDZQbenU5kvWwz",
  "key29": "3Zij3qFzFiWHvrEW6RVwPwb4eLvpBFBfzkUMSFMTrDUHhN6NyV568WBMzG9qrsRJAMKkJf881641NJrNwRHnPSrM",
  "key30": "5EZoRxjSZDEaYE1y7x7uiqZrREutbimABShi7bJQxZ51Af7grisRBscG3Kn9M1Wdz9cP42W3VAP44cPUHdGeiHyD",
  "key31": "5ajUEKxqVKuGkHwkHVJJMH3TrsshUkFNGqRh6JurUtMLGvgjPVM12Ai2FJkbtfxpUGehJL2y1BJkHFXjbgHj48NW"
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
