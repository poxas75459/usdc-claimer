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
    "5JsnomJXetG1F3JPNyR9v7iiGfottpFGc3zygBUSpXgrVQjBKhAjsmaFGEnUtUDaaV3XeM2QVKamJ7TGtzMvm3LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNcDoxavUCrqvn5eK7stz6obcXJA3n8fajdk8o7E65C43ZnzKq7wMfmjMckAn1kEwUakizuarf1TfdAn4Lcpr9C",
  "key1": "59QAEitxLWZwJbyvSa8ssYyoHjkzo8sRbuzV5ssioK7VN6VCnnmV8QG8ocPaoxUyb62HdVLd7Er4tp1mur3xDKc6",
  "key2": "5YYmQdLbXa3HKtenQgcsyLWwxX1ZaAW6iKJEnFANUfoU4McGstq32PWkVwgDeE3Sir89y9Ucd3PqSkyUnu2p27FF",
  "key3": "uLbgsNe1gPtNaXNewwdkZBF6FKgUPFLwKjmUL4fT8KfDrkx4f8b8jUZtSJrXJ3QRvMHK1qRgMJGYQguALm1nyui",
  "key4": "2e3ZRj38s4WfUZzf9GECG1dPo9FZF2kcoGGBu6bxmC97J2S94U3gtd8DvfVW4ftTTZz5HYairzBBmSwEfF8GwChP",
  "key5": "2UJds2x5LGTYVB5u3jpvBQYuUuYkUYrTtyPtMvjUmphn9nqxyjrnjj4t9GKnJM7kpHk9wZDnkG72S61mzvfDJB6R",
  "key6": "37DGveLsXaDGvhfTEdEi7CGCxA8d56nUToJ9Dgr4YvjdXCnnNhJzxS4gxv4yeoETMczt18Tvp89vcb8NgKAfEqRq",
  "key7": "4mKdjYx8ffR9nFBRcFUSYKgSpVTyYuLkYbU49bstJ9yAnLCtJDA3norqXshLkpXsAErgyq7caoawr1SEi8Nvgh3t",
  "key8": "4cBf44moJcTWdLrhEgywAAMAQtQTMMVZa5dMRWmCwYn8JbaP2hx5ubJZqM5vyNo3zcr4AjP9sXPaQhGH9m4Wr7Ce",
  "key9": "4jrCdmSXBxC74vb2uHMJSyAWi5DYKCFzePSw2rMvoptS5mACaDkPaCAHritiQ2tJPgWh3YKNizAKsayRX7eiwtfh",
  "key10": "8QosLHv6VRcg7Jdx8zCPQKSTRnKNXxAyxEACbrYsGxFF3ACbosMVgEBy1K4aJwDr1ZqYFJavyjydaaNz7wVrj68",
  "key11": "3QW3DDYM14A7o1ZcdB4pzrnNdyMWugrT69juxtJ2cyCZzUVZQ4aeZwmTCtKMzgjuHG5dFjsAzf3aB9m3NaiWRQFX",
  "key12": "4aC6C3sLa8o8CHjnjjnLykGuQB8rNkEQyoaszcHH1sV95vyMTatuNKWYNqGkhH8G1EhFm4nixzu94ER2Qjp66HaP",
  "key13": "3Nh3wuvFuMAMxrxrwJ5o4km9UrVa98BcYzK5CkahCk8iuaKejM3wmZN22gwno45Caxu43WooicK52wBKb9jyoawj",
  "key14": "3DsszMzbfcFA2S6qdUk72xkZvbT5TughPtyU8SKeHTdK8zJRnKFfxjmuSaaRAt9JPzWYR4XVmMmzvrsno8sra5tH",
  "key15": "i3dVhbzKNNezLWibbzrsGohBhArTDsxhJ9SS5f4Q82bEM1SsvqK9gMjpPG4aGbVyHUUXbdmCsLkCFjMCC1scRHd",
  "key16": "XmToivs1FUug7ZsThdgt1ftXgmeNUzVmsDvRAk83tfBi664u5Njh8giaeREw88kBCSTnAvgWGkamwRQkQCptL7V",
  "key17": "VZwaosEKdGSg5BrJ3n83izYrbh11qV5Lje1yuNG4uBczkN9C4t2DAUeaQru3iWBpvK9raYwU24vRQXrib48MW3a",
  "key18": "5Zq8EEf6AqmQLqSDEwEXgghdXQHBSssfQaXbgQDkTWEgNAVdwZoXJM1cM1cQfGEKWH4QhRW2ikgZsdv6iAxz6uSR",
  "key19": "5RKY2teeP82ckPA85p6MFHmXHKXN1KTy3tJUYve5GnxLJRJx7cYNZw2iuDmfRKZjwB2FfB6pFjbajMYhHUkL56zK",
  "key20": "2pfYWt2ouWEskT6999b4goCk5W29tsEurQzhthXngxGX9X1KSS7jFcFwx7FDeDfJpcXbSkA4yLER1Nm7PXtEFux6",
  "key21": "5jdvLNJXzepmrmFHWs7tAMKoQzZqeBWhpJ69BxLCeAnbkZpy9peKiXMvqGrRirr42RDCiLeW7yNYJZeqhCRXRMTo",
  "key22": "5wV4zM7nTCUFP1E6S6QfCwGUKpFG1r3KCVkYbbCjUFWzirr7QUp7Dg279e4KAGP1cEL7gamiwyzvoz5o3D8XchDH",
  "key23": "ApuEE9wrhrF2gViF4X6nqw8Ex9K87shTdfQq3sn4pzMjUGbBKv9cSiYGuEAhHJDiUEhCuN7T5YdtQHVrjzu1aQW",
  "key24": "Z8ftbw2riHFiMQjkdGUaEUKbZpZ8mNBXi15DaRj3cosUMeBYiqUc3Bo1vCvi7uqKJ7XuepnBiCqPptnJKsFfXPA",
  "key25": "5WnymfvTfrvYPbqLCdpZSuzHhCi1Xh6F8nvHV3YpTNpXRKKfZfiKVEJ3Asc3pzBvg4bmpEz2jmNFEWfLvwVFpPJ8",
  "key26": "jNcMLQnFUpSt5VsQNgCkakM5u4LmoVReP25JG5VB51Da7GgJUXjGmmtuaeD8mrSjc3rzu6PLN3gNvt52mZeWSk1",
  "key27": "NuhsHQ3L7gyhBrfBzy4CRSquTF2Yyw2MANCCYpX9DssowCEeuqqREtmcAyWTAkSgi4jwZxvm7Ppr2tRYJNH8Fgm",
  "key28": "66qmW3h6jtr1iBwnCMdwGYj3TKwsfpgfFDz6LmSx3cjXaqSrJ2UVQpJoTz44GtzyHRTS8SGAGAikj7bAWEuWcfpV",
  "key29": "4EtuvA5bJMhMjLxv1Z5hVDecug2pASASm5wDPTncf2X7cr4zeAqi9GmXmnJWeUsX2WguVfBd2dsfNeAumSAymvkX"
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
