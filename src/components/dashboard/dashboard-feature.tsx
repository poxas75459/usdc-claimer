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
    "ctEJb9WstfcWrbE34MLZb8pz3erpACViLZSd1S8tGaQDZSbak7LxT5eXakBJoQGqgfatZHCvXe8acQ88noVpgLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qCjvZPDteHBEtsuqJGoGiMxPzu7vm7WtDUZMNJd39jpnqTiXFGxURKeCQ1P42wYoETCu4kHbkhGhqU5K6H62FX",
  "key1": "4eajf1wbnoC3ydX55WLXzQSfePKegvyeQ6h8UvpoeZ2jQdu2zxbe5Y5i6jSatnJzNLNGRaHNvkbqN3xMu8BQ3xxL",
  "key2": "35GGe4C7S9RwP95vRJmfAdhJ88Nc23f2GrnMVfsMoqAgAKyoSUs2XKhcYBKaDJRUhMdrfdKhf8oioSFwP2QoCZU5",
  "key3": "2janHM2CePCmG5AG3q2b3idFPCscXc7Az8trDYJsdE1wUZnrM97CNsvFY1QJWaS6vzuwkz3DcHgAzkchnY1fLawx",
  "key4": "sgSDjfLHkC8FizJGECkQESQCKbovsGRyDGWdoC7UjgRJfbDzN9qk3F1V9km6wP6k1biHWRc1soYRWKUvyCztkbW",
  "key5": "2gb78G55P9MYZX4ccxtPd2MYyWj42pMYy8zxrRnMYHXRxAqeRCA4SbgdqKLcFwymRBPEpdXtSckYZaMnJTJsJ2Mq",
  "key6": "23UbcfwMVMB72VShdmhbut1ZZSQ7FB9JwZcvwG2A81bzdcEsqEnpkd9kyvN9ySjW6LYPW6RNFvNctWayVGdmorPt",
  "key7": "4tz8Z1mWkN2Q1nrREF5GcsggbYv3KyJf5s8cej4LMTEro1DgAmr37qdHR3r9BXQ6PqHMo7XgEJBnK6wQYBk1j98A",
  "key8": "nuHP4yE3mdXT6MJGWWDkFaEuE9wGUK8CuRAzE5MBhTaa4aKxvJLP7djKh51Gd4yemmeNpQfiBRCTfx33WrrFPsj",
  "key9": "2Lqa2MwajAFCo2XADHmkmceQw8F1BJcfqhxN24cgZZZUCXp59NpJFzAKAycX74FZnDUgsysMXKvMqbLh4skyht8F",
  "key10": "4vCSGYW47fednZfiJPbfAA1Zfs8JTNuHuAhxUkjknxrNfrcwxuKZMFto8jrbfoWc9Z8UGc2FJaYQaep8LsfQVTXH",
  "key11": "Yr2TzT1aJwQwmvUXE1pFbemWkWpdn7r53tteotsE8A7JGkYUPrkbX1XF4sHNPzcXG7kSN6xowAdCG4xRPUVbLYy",
  "key12": "KUeoftfW2WBYZ2ivgcHXriMXRzbALK6vYj2PBxe71jtM3cZbAdakEdy43TxdDo854jwBsF4ZwAK9YaHiZK7Ncut",
  "key13": "3tWMcxWUJftRZQcmvxP9nNHDLvBVAku9xH4VKmwpBRrYGRK39uMesiw4mQtGaHH1CygLzJX2FUuGs2gyWCbvG8KV",
  "key14": "254ccv3HW8AZhDrZhPge912YdXPLk7xKR2uekc9UT3ZsEwZdPGMYWNk2TGuxEbbRndh8mni3CzMCC4JUBXxsbsRn",
  "key15": "FDRm1AqXMWxMkm7whG7n6uGGv6HTVq3YHrorvr8izQJD3gVt1yYbJa2MUSQD4EPbnNkb2SLgdNC4zuDWD8kqREv",
  "key16": "2zHFE1iy5cHekkkcjDzj8mckyX1VTkf511TPCG68XP9qQcjXCH6A7drnFaba2U5PNGQXhw5A36PA73JFMeZ63Pow",
  "key17": "4KKBoQHxEfeDcfChn2fQK5BGQz21XuicQtxUuc77xQntdW8aavFg8131vKo1zjrifzDDFHWNcMPi3qrkQx9x7GK7",
  "key18": "3Vz8FLjHgsAM8GhKuhZ6xZaswYS7UswT3BdZokqmeJLWSRuz4AyUoRzipU7mXVYhy15SiZpSRCAjoPLKMN91YoA1",
  "key19": "2ddKfWetXYMxwEsighs3fpEocmpvzDjPQkmi9nrsakHFGBy3kk24M2u86BsDeU1iBz2HWkW9NYM5dqJ4iRKDLR3p",
  "key20": "p4SXAxEnhtEbi526F5hVvPCrazXC2pV1TdiFjxD6YxZze7PmbkmPTsLUUwEdWd57UGerdMkHHRK1B71csLdYPxU",
  "key21": "LArX4Ryrj3btzCWotKmdSPBTX9EZ8kg6KVF2JzB7nbBhqvKnFpL1J2GoyAGp5zEuctTjpze9nqhmHbPUAE2xJmw",
  "key22": "4e1v9Bzmck7qTAQpydAzgYuXW3s9LueP1mrTdshUD31ssHAdEfDvdC4QmSQg8vM9mDSmpFcZ5dTXNgAqdywyzGRF",
  "key23": "4svcvQPgUn1AjrgCJZLpCNMEwAtyazeSu13xUh8q2xM2hdc6QUxtUZh46XSCKxmco1Z3PFxhSPQSUyAatT6jt9jd",
  "key24": "gJ3n4baP8yxiwYJRwsiCAsc6oSD26Z3ZXK9XMxssi3NnYXdxGP8AqKwun13eu7Q4CE4N7d6yQUghPw8gpBVopTW",
  "key25": "3bUVJeSrgjb7DafSH2wz3GEkhUikxefcwRWFsPD5V4BN2ufPEoLppAK9dXDXQUV5KuAXLrB6r442dzfwfq8Su5RR",
  "key26": "4QyVzH8suQidj75oSyRbvjT6uYiQUX1Cw3mfQq4nfT1yUTDMvgLDiEnTLkVxY3EeFSDUCCw2mJfCKTCU3p8XEBp1",
  "key27": "2VFpxGboJz49cgeWQkaocmh7z1immPrxVXPX26vcsBryxBKkYjrL82YWHLLqGApQ4xketh6U6n5NCs6EtYEZVapC"
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
