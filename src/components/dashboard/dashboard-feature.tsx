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
    "5Y5LXEnuEsEgKzY7EWLQW2e76Fn7Rv3LK9poVTqiVtmzkfhGWQ8xsRuc6pLa6PuegeVFdmtvbBsWTp9xLAx2YiVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m6azm6F9u9XzbZLUBaCaR1H6SoQVhDpi2S9VZv2Voy8S6zrL7LZQiRzUhpqnAVsFbFgxW9ZY2aDuEy8quGJ1g8q",
  "key1": "53GhwJZfsXypFyMEDxocGnJ2fKgAU8rzrhq7F593VyV9NNACdQgnRF3d437BTxiN9NCvHK5j42Qo2VcizrU7wz6K",
  "key2": "29RGFngGkRgdVjFuC4GA8H6PfDNksaf622oaZqTEnwLBoP8gNre9ttUeS4ZCxZVESferSzMvUqhy2FD17aJgUVSx",
  "key3": "66MLChwWk4peUf6RE18iqMMGcWngUunfWzjDMDsf1aH61qsgPZ11fyasJo2nJ1PBoAgiB6wnbD7ESrzLKWdufw4k",
  "key4": "25AZV9kgF28XVBTJqT31Qc2AULuWgbJp1fGajr32TtB1aspPj9dknwKCDw5qzQWkq4HbjQw51Vg6eMdotDiGaPwn",
  "key5": "5CBbNMPoHoERE967qz4mf7cwCcBZ3qUotHYC8tbrgt4uDjZkvs5SzJ59zuSgyn811MFGy8uytcfsj9rsJhegfcKe",
  "key6": "3X8LUUrQiteRnvVP64FrFauHeW2yNReYFMa2m2NjDLG59AD2Hy9wZFFM4Tz6NTcg88xBPiehSfjuDQqejTgXWqY7",
  "key7": "46DbugcuL9vVnLddrkLpqHde1gD4R3NLYdMFwsjJDooi34TGAV5ouKwoDqGqQCic5xNEzZiwuEayG7qp71YY7wW8",
  "key8": "3jDuCLD3gKsHsdPS3vJEkv1L9JEDAiW1oJnAJzjLD4JM33LQw6Ype4J7GvbiAVcAa1MWwJXkBdBnq27wRU8jnTyT",
  "key9": "3c1eLwoQbDonySadH2fjzoQF5CNRyRPBeCk87EE7RRXymQBzKdJ8hpmRBhzXSLfxcGPpZnaUKSf7LgzKtBwHBhGX",
  "key10": "2LPeyJnyvdFx6zVhcrbLHKo1LzRfcnm9n9UnPij8najJ8xEPcupd45CfDoJQCTfS4p3gw4nL3Nvdp3HoZBoYKoFz",
  "key11": "2iLu7tM1ZyjzyzDKkrRzZkbMdWFMT9GKjjRDRNojwmvdCPiCNKqvHUK21wqBdwPf9MS6iFiGnTbSk5854Zj1YRLx",
  "key12": "2BpxzVprBWaPWo3UUrWf2Bow3P1psSCEyoRGnq7CCC9sLqWf9vuV85uzNG7oejmHd9TZzj2PvZnMo3o5PAv8aMhv",
  "key13": "5tdoBrV4ZMGHtyZQuuJHFPZyGTLre2Lo9xasY85aGmiKVqHLh6oWsZLnNmL1a2CZbo2kUr4KEpm2vxB2B4pvHgNv",
  "key14": "edeBd6JQ9y9T24DEwk6HpASvEs8Z5Ka5uiaveMwAPL2pgRJTnkcVhNnmnsGdg4MpcySjjjRNyD4orndzMtanuiL",
  "key15": "L5s43bC1MEVWoQiQd8ybWrqzkod8tdaQ8i8rz83SaXpqfEArgbmvvziXRYQEQcFDKmbxat6q1chrNghsX4tHx5H",
  "key16": "4hC92mMwzrFNMkacHhryQg3j8Q39v7XR1a9U6ge5X6LwDRccD8vzWukkkukA5kMcWFFH5uuEQTc1yNpnaF9nE7ug",
  "key17": "4z6rxwZXG6EEf5p5KcyuwhPW6RR4ZVcS9b1qK6HmRWFci64eMiSae8LpL8rA7Vt9prJHnAyq6LGCeVHdpcvWjLEW",
  "key18": "4LFgPXczGMufee4SbizLKDnXynn1zzPzXzLYjDRNTi2i9vsH7ag76NjUB4CssCrFewyrQnxvzRS9rTV1dL7X5drP",
  "key19": "Asp2FoXKNejUQfkKaRbTx1k243noHWgKmsXUenomwcMPAnJLmBdMdtRAWU3WoCMRL7of9AYZrvWNhEka5KBr3Y1",
  "key20": "v8i4RRi2BrjXCFo9o4jFf8cCca6GYRxELwDq4TrsNpGbLono9JKQovUjdh9VWWj6YXw7rC27FznsQ7ojR3JRfk1",
  "key21": "21WVTR2QbjRWmUQhCpzbyTPn9HaGVbTLAUrPhwbpd7ZSQgGAQcExE7F1f2oqhjSfYeUhyE5AAkzaWPF5XQaLGYt1",
  "key22": "3iDCP33gyLvjvcHht17ibpRKaBGAWUEbokfvcpi7UVtrG1LWjGQnqJGBDcg2phHm1F3V55NTRvaSHLtRstTwJHpP",
  "key23": "31qwkJZA4CLmJ2RzqtiVSkGRTqaPioMzmGJtS7jwPQEbQaU5Zs3F33SphkD2jEfNyW5E371DE6U2i8djmaC9wgAL",
  "key24": "4GAMYXQ5Kpnq5JKFXMG5XvNEfPzZuEnSbcQrf59spN2YkFfNJVMR2RTzUJQTKbwRkSTfiZ7mznVWwVcA61jR19Hq",
  "key25": "2Kff7StWB3DQbG74L2ipiThzGA1QcbmS6TjuyaeqPZRf3GdKLA3MSVmmefZ3UoBDKmLHN3sgz1sePso4aSUevp3V",
  "key26": "3h8Xcuaff7opTaHKjo6nmBgAmDGvGXkzSePGQh2KhsRTKLW71amhA5FpPFJkytX97vWVNHBskNoh1ijECnUTB6Jb",
  "key27": "4m3zLB2Zgx35wRpmQ7d7qWP4Gdaz6J2NsLAxsbyqBWcYJjgzBzBXnWR6jk84LKwqfSNoh5mmJaf5ti7D2cBUawZr"
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
