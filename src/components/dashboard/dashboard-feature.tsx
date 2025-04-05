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
    "356HyneKTp6UeaZ23d44DKXcreH4HMj6wehhhK3XGQYorf2TcJJKZGrJ6voS6mcvwEBeCEDg8CCzR6hCEVYDbj7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x2idpVEkvtjN76FERiBhDZQEfMjtAoADLHVwTSCfGGk4seCZdq22Qx2bQVofVyqC3rt7Wh8XrhRSxMnBwkM5Lz2",
  "key1": "4GeJiBD61WExXZba5Uj4zU3B7fSVEgm3ZcPcg1YDpgiruy4FC4LrPhirZi4AAmZKwPSrfmpEBiDPJpMyxBog29Yt",
  "key2": "48ym7Qi4E63DHygGXzMYeSjevfKuXUdvQachEkDBBXG2jgA6XN9f441rZEy7XpotcfDzAcT6LGV8wJW5r9EumEdq",
  "key3": "2HLFF8w9v3ssgtN48d1wDSYFjxq5aLEac9LDzWUhsLt4xMAW3GKerVQgqbbz9N8y4q3rr5bVf248Uatr8tKG4vQ7",
  "key4": "2KSUpLDciNHmFvTAikUDVf3xNurYoBQd68fCrADLBzCMRQ4pZgSjJwg47ryftgvn26i198KC41NgepN7CNHPAjtw",
  "key5": "TTgfvpJBJ7NCdabQon9msmFCoNwvypjcf2u3VRB3ZNgDKJkh5thGhHJXHmAZPnDGpvx77a8dBq28abDuMrPzgX3",
  "key6": "7uvSPD4W2DbytiUjzWL3xfmgNKLZtgQrf9kXfWaTFY6Pr7Gg8y1PkqcKdHGtDB7FKWP3knu63E3yiyEzUznBhqe",
  "key7": "2ouEybE9sjkugEFSak4TaotJkgK1SvWhCGfwKGyaw6dAgsyhGrVpy5DuiA9JLPUAZZdMxMwSQAyehm5dvLUfmCGf",
  "key8": "3xgDcLTEiKPnhWVxJkQYPvPrtPJ2eiXicUcm3QvE3UP6qS3YGUoVfDrajt3UmuPVCWjsgocDVYESnSqhhZiwDPB7",
  "key9": "5Gy4SkvNqgv1AEzt6JFL6YrQVFcFpodn1g74jBpaNzakN6D8g1kL67VjNPkSKoWB7JT4KNSgBRpVrvDzdftgxxx9",
  "key10": "wFMVxKTAvx9629mXBcWhoiH41Xr9QM3wfCRXEha9srjYj8H8VKusmo92KKXQkiMNBPeEB3aD4yY1yiowyaBNbKR",
  "key11": "59Yii9mmfHrsWdGJZYjZx95cDQvNp2BDYvh1u5qFKoxFF4MYQWZ8simWrpBtGCDCsYJCMkpGk754taN3cZ7b6UWv",
  "key12": "CbL7HfqXxkfzXthTN36qinBrnciHh4EEAcjgnMQ5gQtmi3v9fBn2pPAi5vkHES9kTji3UZCMFVEq4oDmkmjas5q",
  "key13": "3CpoptXxffLKrV6e3AcVXLkxspwXDwQJ5GfqAYuV5Q3vHdsCKwoynVwZeRZjbjXA8DhdHr6PWdpQaPBfDcT2MqJx",
  "key14": "5zj1XoDLdFv95anQ2gtCtVLZyXRNe5ysmBFFR2GPdeWpbf3J2fjHSvKyV68DtBdhZ5dP8AnyAidwrTTBGFMN5wmF",
  "key15": "42cAmaYkMe4WZkJeUZtnzdZgHAb8qJ4jvnsEfzhvMLzwrso7F7wXyMfFcYhNhxmSfqty1iae5UJ7pw3HKSyj9GC3",
  "key16": "3yQejsWSUKY6PdFEJBa6h9zMRqcY3orb2WmeNpgotxkrRbvN4ts8tL7CFQhrcz1qENHMvuwwGFY51c6TbkmtDn34",
  "key17": "23GJLm5hgKCFNuftRgyxiFadS941A6bTkbA8j9W5SsvB8SxJimtjjuciVxrm2gSqdR7Zt7nHamKtHE7MNBMQyvjw",
  "key18": "4LDWVwDUuAXvkyvDj7FkDM7WaD4qPML9tyguT6UZJbzUv9Y2uifEjh5cvnFJ7GJf9ubW1nsyT8AuggKe11Fy8LZB",
  "key19": "4CoasdxhNrQQxiG38Fu4EXmVLMoTGLR3K2g53CoQz2P9ZXCxttkU2ypQdQwjYqRMgjpCwUYFh5YdtWmykiy8yzYk",
  "key20": "35cKmNHMM5Ce8ne24SGjyBa9RTiSWpPiGGaeohsnF8Cy7uzq1iAyHecVt6BwmhAtXsvVzPVGoHMLhAro3oqax1Ni",
  "key21": "4hee7px21tRDY53DjoHhmz6dCcEUfBaGkiufX8Y6k7zhfT6TpscR5xQr5CmYVpVrEgGW6ivkAdUk2YiQcq44Nvjr",
  "key22": "2G1QSrJ817gBzoYH9sdXbr5ZyciVF61JwGcTjsqNyTGXqEZdPNdjvQuiZQqXFc3eeUk18DQ5r9ssBRjyLkunkUrn",
  "key23": "28Ki6uc7RH4znTnyTpmNGfKA7vu2D2A6dze51UfaJpUfo7P2pS3suUWibuA6qaHhfphA1FpxfaHHogvPrFoFpSqb",
  "key24": "52fZR9oumcUzuFfV1p3mANXyJVFaqDga6HExeo74jP11ucto4jd93KgYcNDrgWs6463V2iKtMy6ng2ea4Y1aREZ9"
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
