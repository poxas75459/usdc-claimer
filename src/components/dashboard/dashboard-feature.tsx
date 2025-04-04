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
    "2deUdATN54qE1Ug3XSxrm6E7a58v91UXEdmZautofY5h36W9T4ZvKideNhqBjaVqKBLdcyHtWrENoVNos8tZMwY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTZWsia4NUsaZ2MKJHqcjGBnZ2W6fddWpKJqMH227rDMzrxRrCj2FhJ31HCfuEAxhyzAnjnezGZJfAnnkyRsD49",
  "key1": "2caSZW8gsETmijcLdaG32ZYX1weQU5CmRL2qg28hhtweuMK8PznDukLhhGVeHFiDsaEKSDYY4b7upaKBSeqmDxV2",
  "key2": "5UMDVCSZ9X11AKWxRDLS5YZ981DxHjh4XfnBnnL6jXvUqtm4F4w5p2k6PuZ3WNWuyUrRARxAV87oJgrofujJfwSe",
  "key3": "52Xo24XN6oQxy7zP6apJwcSaJ2cAFtR2Zzi57ukXAMfUmL5oL4cQQxwjwhYWasYyLWBNuCSmqV5U3BrHpZN8phJf",
  "key4": "5MwmwqSajyVy3ReVSTN7gKb2UqN4jKJuZzmTidoGBKuJxtv61ctRUWGaDxLVsGQcjf49SVGhrH23EisphCwSeFF6",
  "key5": "2yYUqVK3cqmadhYJPALGkc68kmHVH15Jy4f7CmNPF3UWhe9gPAGEkYZ8PPJzaD23eys4T3TPvTNNaZYrVhHmXQRQ",
  "key6": "3SY3oGiWL9N9oazWWdiQmuS28qjz37HEjbBBzUxbZpxNPtKr2n6x6qvJzoLuvZAgpjFjBnSxeEB7vobZWYcMZj7r",
  "key7": "4aYqweoawGgMKgxoVZoa7QnBuh3X4x4vfkcTbR6pHH6eh4cEEHNBPJX5gv23PkZRYLL72NiMJ9xizPYtjgBkrtSc",
  "key8": "23MwTVAvSWRpez7qSprDAFSCtXFXMqBbtFtK8SiR7YfzE2k7myxH8px6JG4E9DWcnMwpDaPLiZ1Mnk2RzENM8sxs",
  "key9": "3ewMptU6CJk7RYxUXdoTtBqgbdXU3VXEpT12GxvNprvVP6ph5Kafi4wJMdBJxKEm7wVA5joVebQpoZ36yeZL7iDb",
  "key10": "yy5BvFkQ8heeoUrzMwJE86zdqcc1iL9vXaH7HFSgnZmPenxuoSzDsbTFS1ThyH5vQEYEbZpZBdwg6suemcsmnDg",
  "key11": "5a77XEugpXFEyBSqzFsX4HKz8BUfDS6u5NrG4NmLVcGNehfgaKqZwWD9XJ1ShpfxmSKGRGLhkwZ6fzUqforhonLV",
  "key12": "2MtM97KBWXGrEnZFc1TzE6kojJLQV8q4cnCHTy2EcGS6tUWbk7WV5SVUBkWFJj8q1dsWKMXTBouV1iGBGwmzUSjT",
  "key13": "2Ps2RnGFD6RcVhUtEEuoob6MKAdkNqxkW3GWEfKsA8mpcUAzpEEw4WCpqy53L8bUfKZ43D7CidWg7tziXUGZ9aAj",
  "key14": "PxS1Eb54DwYE2qBZD9snDJX4HRXDwu8JoRJSUkWehgHzuk9cEhTQySoV7gpJ5zryTerZtdha7wZs9px3cAYh6J8",
  "key15": "2UFASieXoiTufJ8ceHsxa7mEP8EwFPZ1eEYwupgjSLpf39txZfvZndix2uSqyvxdyQy6w49ngwTH4GtZteZ5kZKc",
  "key16": "3rNETDwv2jTkpv4LEnmkFkxutZV4iggEg8WpwyzqQB8TF1Un2he8jdRggWjBUqBdczXPc8ArSVabcKmvFe944EvM",
  "key17": "4i5SK4PSbhpDn35mFmDuZe9mAYzN8ZfUFmW8rB4CfCrQkUyLmGv7vtsj3Yw8gnt6KWitVhkPcNMhEJy5fV2sAApG",
  "key18": "4fFiveLCvy5Q3g4Xm2QsUaWVAm6GuYBzvPT5Bvpq4vaUjuGEa53H1tFk8RAJozcorqZw5a7nPGCpCPzkrJdGQDNc",
  "key19": "2sWufbbZEmv7EN7WrnpwcNiPepLQHrccGHkbakA1rNcUYBxE6QCX1rQ24k2gR9Rbx1m8Qiu1ZkJ9VcB6zfuvtUs2",
  "key20": "5coEeHoE6nTj5CbSd7ap1zxfcv4HCZdS9V7kpCVXcdHx8WXgnjLNdrZfD543hnuZJxuJr3qQ84sPRdf3BKBJ9m3U",
  "key21": "mz1QtMMuVh8YFG8Cggs3gtsgWktcY9h9nxBTSaL6q9G94PGyATCBuMFGYwCCAjfPwMyE49cvAdVdcWy4L7iPL6L",
  "key22": "2k5KZRrorNT8vTUVqswyyAyxdiEANjEQmtQSkEy4GDaoNzdLmVDV8n7mr1CdUUjX81bTKnqoPhwyAjEXZXzaCnwL",
  "key23": "2sLdAsngWpnsUCPxwZ2DddW7JfJPUnagABKFgMBicqSPQaDJ7FKLHB7aqWmsBWwKFeepMuX6nUbv9QUKpqihN2Ry",
  "key24": "3zJAsPirdLzGVribKC3sVcFGn5QQeHS5mvU25dCD34Mp1DmZ44MZtj7fkW9dxXCAPpe4QQeBDVXeCbjTU7YdTqVW",
  "key25": "5a8pqJa1K59jztZpCBi2mz91NXx5U6ZUuk3B4GewTVaGRqbDPWpkVTA5FSYqspHb1GFyVPyAcSJJwCp5PE2shsCA",
  "key26": "2EqMjaU1sqMvfHwhWqzE4iiSgYYupmmZpGnkZMRhFwfoXdxmEobXGPeV7nR2eaPu5cb1nBtwAy2T8fsQ4M28wU8J"
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
