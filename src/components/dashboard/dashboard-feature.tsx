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
    "5BL5nMri7dNh4JGETs3DVFMbD7R2zaa7RyZ5gokZDxsiYtCdfDArjEitmdQYQum5v7MyZPFuUJ6sbaNsCMo5suSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oB7XCbUq89gKbYwwCzF22mZzfNVkXvPDn27yE9GpjrMmsPMPuzfndT9RtBRcTnpjUHCtGuhvGh9wWZ7bq6v1jpB",
  "key1": "2pbxMbvz8eHjRqXD88mANmeYYp1DYh1JxiGm4HNhfnXqkJacMU7XwjkZ7GwLX7Q2EXnRNaNhJvjvETeBewFv9Q4R",
  "key2": "5cT4JZk7Btcp2YK87dwosNMesL8i8nbcp1kdPSLJ1ioxrXdqZGLTP6L2SewhniCd5yp12VpMEFUftvmPxeQB7qSz",
  "key3": "3kYRqEQha4TLJNvgdTSTdFgnQH4QG6PLsnxrFLdgwXJXvRxcB5bgNVBqbhVnDMWzf1HsMaFF3qD8SPJ4HL5bc7DA",
  "key4": "5srFpRA6nQPbQkUQk7TWmpFa4UE9zQ6J9NMXaxQJCxtC3dUxUj1jKKwhVetW9Lom2x4GNBGvoN6UPEYv7DWwcH5z",
  "key5": "jf2L9PDjmQ84A7L4XYttZtLmRnKbM7NcK3KNN8jAZujJBMeLKbQ2bRj2SPqTYRNVTp7D2Aq9tRkS3vuW8zeiCwa",
  "key6": "4KxM6TQH1GJBrJSHsmUbk9dvAHzmS1qpp8i358KLz2h8HMN98N1qZg6TQpNFNsqg2xEfragGhBQw8vVHsZewgXpL",
  "key7": "2oQXCXzgpmdQDwLW1gzgFF6P5A2vFqNqkbRgxvu31MFRRUdfG9vMTLhNo1ZRQsRP5UViASs9RzeqnSFeRcRnt1GJ",
  "key8": "4ue4A4oEvHzPF76DjosMhv3V3TaRirASeytsBnJFFo56nVLJWRczrToeDZsGWoeFXstHouCzNikJuHdq39wAU2JN",
  "key9": "46NkAm7Mqc7Pm2xZy3zR56PDzZAwUSWcDqj5Q186ggXgZXA6Wn4PKGRd8sPKdWNtroT7aLcJKM127vKpJhc2zMXW",
  "key10": "3kxo2sTWthhq6H2KYiPDkeLAdgnTsEgiwm45kQopV9xpCPQhxYFB6DKznWHabkYMity1mP684qaqB16QHzENeiJZ",
  "key11": "2gS98QagZd5AQFDSZ3JNL4UmuPN7ZEaM6gvNZDs3CE9WDPGnhA1WHny66aBiMgG3wfbqsYDyU8s63LsDgXd2Zndt",
  "key12": "5jiSCHZ9K6spM3SJFjrB2EFX385GU9pJaQ68tCU4cDuMpnkNcgnJ9vaYa1StxpTJ5TfQz9zeMto9p1GbjS5jWoCr",
  "key13": "3EztaZRfXFiKMnTmNxcjGXVagLBeXBXXYAMXrNEwnKaryVd2kekYRJ4decbNxKJ4ND1V2zisibXHFqGh9G3h6tKY",
  "key14": "5wU5ZFxgAiHySg6LMCAu87qA5HPBbSs9UBTDSwrXXCMagpVNUG5759uLFXhpKAJBSvvj1AYc6qQ9fmW6VjCPG8pi",
  "key15": "8JEaBZPNEpWpsztg45vp372u1NfxdavCikNFJe789V8HqCDQT48DESrZ36xXtBbpnFyz3cW7e67SBKjMTjm2aWK",
  "key16": "29VXQ9bNQowek1SGGwryyyXow3vu49794tHm8idV3cnGthmLAkLtCw5RU4N84uFxgqWpSafhCPxkeK8EAnV6bYsD",
  "key17": "5baMDkSi5RuFEKjKpRAUyzGPEQwLALPdDSwUpGzhD2JBr8NJhrB9Dz4Vo6sowFC6fKpJ8t7zqPbhkQm6KaRX23sZ",
  "key18": "Ug1iXXnxexTri4bR32eWQUJDnvgFvesAKH6hA1Mdo2cjXV6ZqBWsN2qdB3iUDu2foq2p6n3GLYLrfoa8577jqju",
  "key19": "635n8ht7fh1N3EQZqdZZH2saGA6kgkgxRQNpnmoF9kVRZb2zXGCaE3NPZWkYZy3PeNMepYXEnNnPiNdihXVUwkbn",
  "key20": "2XkCuMYT3uL9tbALuuDqxPLBpnPTmSzHxL8b77KjhaN2agsj3ET8HLmArEwtRcSF6FirGFFaaES6RN9T4c2Tv9gw",
  "key21": "2cPXjE5sAZKUbwhUhynixYmGzAf3JoDX8cSetYuPoH4XHgvd4KhUT5yn1fQiqxp9NycqvfeLEbScYK4H2GRo9cY2",
  "key22": "2mA3nAniDncFrUEDgPojpg3EnBBhk46NineeDBhEddbyAGgUy7jWFM5YbyQw6Y9yKcMGnPjKAq3rEuouRVWMo6XG",
  "key23": "28qMQ8pwkeMunWMVdpWGxvNWsrbGWBdZLodiyy5tdwFSqx85qhnkPfeTfshhcaoQwFM1j3XTsgK5Fa3DHVEWLJg3",
  "key24": "cAUNF686jH1heGAv4hTT8kQrHdfn6RGDHDkxhtmtg6paCyRy3r8ni5MtV29FcbHxgJbqbMSgChRAnRdvoJJaqBA",
  "key25": "3djqFo7XHYR6h8pimWyvKfmaJkcNd77G2tx6163cNgzqWiN8AzxPBBeMkghHFW6mANNfmkoANgibiTsocaxHBjmH",
  "key26": "4G6qP59fRxzmYU6RN495aMPiiMLPwTm9e9sPFfiAfQhrETWrqbKHRi6Hb6T2EfYZgkADTmBZ5uht3t4AhsDLVUVL",
  "key27": "5nsuuab9gkt4RMVgeQzgwr5aTzrPLvX2haSNXwi4UUAv9Z7z1VzPxAdVQ6TGwHLfmUkgsLv5MfePr8LvBptNCVdJ",
  "key28": "4PJSTtFCnCBntHFSgKhUXZxn1knRnifpSu2JM53Gf6dszh4y8YzMmQKZu7ZjPEe9zwFLKajDatqKusTYtPuzq6eu",
  "key29": "52PskBuADkw2XPbqxf2qGPjbHXT3YELf6kN6u7LnZ3qcGSYVK5vpqbwJw63MbRWtZh4aSjF6ycwh7juR4VrGQbo9",
  "key30": "quAnEk5usxE7MMvZmN2NYs7Z7wXcL5YBGwa9ahsVEog5uD4xKQQcQcqrAjUs7R2KEKkExbYi9DuTjJYAXYHBSDT",
  "key31": "dLjHhGaSu2dQHbsuGUFqQZk6a2JR25p1J4sR3wQmobic2ZtAVEguZMa11MgrMqZERRPbFoxPqrimi2U6okY4KDe",
  "key32": "ugf2zEvvzA3YFHaLTbjdKfU8CndTfGkHktc4gWX2kjkSnmfMPr4twHsdjsDVtnE3bggTVv9PmunD1sPfsigSZJ9",
  "key33": "25Lw6qK8UKi6BuA6vVMYmiDEDXMDpkyzxejf5vWZ3gEe4eJw43GJ5ghzP5aHEoaWdFw6qkNcAzHDjFizvRuQsVxp",
  "key34": "2Y41eUdMfQF5F7wVQM2bQHFZCqdXtYSEfTGmdivhcBjQkUssY9ekC2x1iyHXhyHQPCMkQJh1sNRGhjNYurcjL3Gz"
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
