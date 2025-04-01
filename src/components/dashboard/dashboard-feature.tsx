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
    "2fnfXYo4aZNDg241P35DXYM26BAdifjhCCA8LZLEJHb8CGxVqt3v11ceXsxEjxV95ue7hGssVBkGVHvtvPmwdvN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41P3SM2T15owvBHer1e2DRUFf3HGdLpsjjituM3zASmGMdG99ro1gBDNMLAzNTrrDkbjFoYrPv5wQr9DuAF7K52",
  "key1": "L32Ro5u84mVfXgTCUu1uGpDEzkmGwD3AQTCkHuAehjWkXsLYHpnwd8za5XAGHFTb52BhZ2rgzwEs3Cyp5oLsEAv",
  "key2": "4aGZ3aGaLfGReNni3NmV7jQ12uXBitNZgc3K1SigVoxWxYXsY96dRsQRkXJNazKPEwajUY7SakvNzJnaMa2gqxoo",
  "key3": "4H8P6EjxoDswordabg1nHrJxta335kwR1NNvrJVkPpkQjBC49eAVYMPVxEJsnVU5WrSpVVyKdZBpQV9BxzYmmirU",
  "key4": "44URZoZqUG5WhFUY8kDMj87R8kwwJFHZ5YneAcvjtdXLBx8YkCzDSCRZ79W5obDusvh6EfBEXQkGRW3K4eN1tvzi",
  "key5": "41Bg1PDeEchLeD72iJw26QkZCm4RWifCsRBmYtJxTADGB68uoUiDn3MpmdJW1ntEr2upRKkygw46u2LxkSnmxQjK",
  "key6": "62S6FYvgcd48axDdzUgQGWNrU5S1ZGBnRsLNn6b57SH3tiBRU1rymYqsVKewmGq6hYZxU5b9uXm2U2QWSGVv5RPw",
  "key7": "4KydTfnNaDHqqTZ1PayychXWN7ox9r91FkvA3n8kxJJo3t3qaPFXkQuCjpeqBbU2PaQzmBqdbhQUaj53kitxBfcJ",
  "key8": "4hYJnVKwxRQS6yjytyxJ5nhJFozcvQrzpt7gZyysNkQV4nD6rg84sSfQUukjYoqD6AwDth2rNCzKUWSYTFW57GRV",
  "key9": "5nFBt9hGiAZtbEvVDGfgt1p2TH1Mr1hoLgCMddRxnGYtGPDxw6idWMvdgcovQ2WN81vcqb2gtAbz56ntKoMWBSdD",
  "key10": "5NfnFiAVtdLMSKpQvSKZGvKhJoJNE37D8EVDKhxcvpWPNDoX7tz1D7fFbkzn8bnR2WsUjdqbFpPyhPgRWco9Ap6o",
  "key11": "awLHGfWSUqBRzaVyD9mouT8Y1RkJGnv43z99G4MEWAtWynT1swY6ETDi3xC9FaiuuAAkbN9oTZox9JVagB3zZbF",
  "key12": "3fQacwxfkpTxCQ9TQixpDqCmFfjrNxEirnpE8u25LJnJm4CNLnVn4qnCFNM32EFBWzKi6ToKaUymruRzi8xrf3TH",
  "key13": "2zUQPJNdjUkcUdnJdd5VdqCU5sAZCpySgjMeabCtPaG54KFMAKXiqgUKRSoSv8J6A7fCUn16njq7PnrU4Q2VusJB",
  "key14": "3CjFUiFZPYdCqYTCEXnN4rQ1nTZwYnMA1dcMWt6nwhvwaBXbh9r4AxAUncfRwh2eBQqmLc5DHjWpjGGw5QKQ525z",
  "key15": "3VKtkTXuQa3ZzoBZTKW8QWgkGUkUS77kttUnqx3oV8ckJheZ8VgzqHzzfUu6a8EBhtSHHpVcudHshXyPrBCL1L2S",
  "key16": "2WFhEs688wow8GQT7vuvVZwhbC6ZiCBhg5dhMoNiMgxzYv6ixtJ8HiavnpteRQhDGDuCqNhsr2GwV9sRCzt3jsf4",
  "key17": "4LpRfE1ZTbKw5bBZnUktrfMG1Ya9UTTB4uujfh3kN4mXRANF6hQB4E834hxEeUCYGBL3JvjDvYVzczqvf3qikoN7",
  "key18": "vzbAbuuBxKFwKFzkAHs8Rd3956jZhbJeJzGwPpsjzcE39qeJGR4Axzuz1wyC28u3bfHCL9uqSJDCTjgeTZdyLHD",
  "key19": "2wZWjHghHipiB8VdyyS7o5HgHg7KU8fUbx1867kDFYC5DhvYQZ937tamYut5AXXHN3p8V1ZQeYPokRpFY38FyXUP",
  "key20": "2s6Y1uMkVLTZPiqAJZKqZZyYTBL6vyKiD7BTwsn4HJEBP1u1V2KGTktg6PKVgrEH9qwob7m4bEFzDEzwN9h7ef32",
  "key21": "3TRi9DyGxm8927Gi5h7fgNuedrrotzie9a7BRNgF8LngnbqxeEEZoBvNjNPYMTP2ovxGgwh7L3qtGx8Xm2nr8SJ9",
  "key22": "4ZuvN977uhQqQ4NQBNHHZTq17v5aGMQRt3KmptDBhSFswwAN9nQoFnVnaCKrn6s2y9hKLvHVBx8C2vTa7HhfNpn7",
  "key23": "2RaSWF4J4sJ4TmnfRXemhxjT8XHaHNuNjiDE7BJez5MrrivKKN8PUfjxVmGvvvZyMieqNbKPjmmBkJrhxvibDdyH",
  "key24": "5ZZNSV6qmEoCC4W6egPQTqVD6rqA6ze1R31EBWTSnsfdrJwBZbgUaQsMPXcS6JUaYvc8TRkNatXwBxQdXwQht4Xr",
  "key25": "4miaeCxQ5bAzHA8jWu4tzHZ2iNDqUksDqpb7nhsbxaebHaGVLwKTQkTMnuFeQ87wB4nTdyxXEHj5QPm4TPpvHPZD"
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
