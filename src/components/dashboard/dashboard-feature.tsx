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
    "7kvAYLDqeRvZWaDLnBrbfowyVG8nGbDXx9f9chNUKhFd5EFxf3NFJSg62kUEwe4egEB4jJrJa4Us7ZrNUDXi5HD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLfECqcbtQ2xaeHRGfoW287whudduqPodwJ9EnQ1yHFD7Mucw2CGviaKYJg7RMKPnA5L29bfkwoarAJxDDZv3bd",
  "key1": "2exRV829RkiqdzXSzyA3vCALQCNxVAv1yjouN9uTipSQqbdt7eeX8wTsquPufCLAsTgLugK7iSCdTtnfUDw59VKF",
  "key2": "4DoT78f23wDyGf5ETa1rwQ3YgPQKb24iLB6FgWpv5jij6cEmyZ5Hoypv2DkwNZzJVmPSJjVQMia2378DcWBDrYtB",
  "key3": "a8RKVzobcorJEe1tGTQzjyKB2Z3WYRoJ3Ks8nrzSHBDK1WkphsYJskx1TPVkQpNDkCRWG8HvRZowBgYi6wLcro1",
  "key4": "4L4nF6ZuWS5GuCvxBqNfqLfEmWs9h5N36BSgr7mjvzd5MJJ1v6XxE6426doy2DBhTj2smuEbtEwM21ngbgQF6EbV",
  "key5": "2yR9EXXBFPrwjbpguCdgHWohYuzmYQijxtQopuCFPAZdpsr3owQmCQ7mrRcVxjgznd2LcJonbAW6aDFyx5qC3UAV",
  "key6": "5ecZuvTLgPu7P7UzKkQT9ffq17NZyW4VoYQXAvSH3dpLNZJ7N2jbbD3ggZmMnBbfJA2Xhb9kVBqRSkm7nhJP8QWD",
  "key7": "4nQ2R2ptYwvbU7jKhjnapy6YNG6VKrEG8FcJYCdiFFBbQ9sMXcTAp4pNQjy9D14ZU8szjibRBjhrAjzAxNEWN4ht",
  "key8": "4a1U6XQgzTx9y6MeUm58tKhMxm5vUd1pNcZSCB2LYjQ86paeLagfe1ZqoRFDCS8t6HoHoLdnZcyenqoDenjyHz6A",
  "key9": "4Kk1zoKd1Zo4nydXFKCh4FNw7r4eSJ7D9SJKu9tChXGmAiG3EEmb5xGZT1jx8mwqareC1arEWHdJva62Li7JtxZt",
  "key10": "2KBVqC3sorRQXYSwqnDGa5Kb6Giq4t5uTM7LaVDTJPGuhB98qJfvbzBBnABh8JaXmzhReowbkb6B8UScGrW7yiTJ",
  "key11": "2bZNEhzt7sZWsguLp9JVGNkkoBGZ9kHfiv4qVN9BL1smRsqkxiTrAKVq4P4LYjS2i4MznSYtfA1tauhHeFMs91em",
  "key12": "5QwsGBJWvxVcY8LKszEeGmjVWdKc9jmjbM8ZVJUUXwmxtMVL1GMcbcx1kFvJhPSFyD9vpXjE79zrdHmk2MfUU7S9",
  "key13": "3Bzet9eAb5kzhE8N6HY7XcqD4iiUHZWBHuGRhqoq9tzQh6KD7kVi85mApunaq4RGBSwmgJXzG7z2bf5PBjRk2R52",
  "key14": "4vszLo5LUn4ixLbbGVkyKkQFapsPtsAPH8V2Z7Y7pKLoozLvqC1MpHsP9EtAwsmwRsLg74VmfTr6M6ujsw7w7Lsc",
  "key15": "2ZLssq3H5yBj645FtsvNz7pdRkTBcCSLE8ZKL3qNomyzRg6VohBcFWEAK8js5aBtMRdmyS4SakqZdwnBk8jP9MKz",
  "key16": "5JY9sACZWir4FWfwDNHviF6oGavin6b1hZaUh26nohfcvZM9jPPM1ChpKMvQXpyMQw6Q4Qv5ELfV1ykcnjW9T3Z7",
  "key17": "4gtv9zu9vbPpe5DfkM14Cy4DmR43bjqvstkXV1uUXyXLGyZBHx3pQAwBZe7amwA2vyy3sAXCAB3NibRahqv3DZ5g",
  "key18": "5CF6VVikFtsbhCtRtPuwoWZ7ZXiYta7b8V3fLsgE8i3XJ5cepnSpoDUYUPtJ3iHhb5fo5oPxDqhyu3Xd1bG8TUZA",
  "key19": "2y5RwbmhYEFcsUoud5wL2sBhQ6z7k3zJoD8jEBkxyQq9xJGFpU63ourrPfi5zgHmZBAryWPg31mmYGGNCDEbusc5",
  "key20": "4edUa8sYZEog3w9tkNjeXNDtMPJxo2tAGE1spuB4kbQHLLsDdtCjGeVe1uvCichbsc62RMHExtj3PPfeSbybNhwU",
  "key21": "2ACAonQLtFZBonojGqpcKKwp6HfUfnA5gEyecHeC7zujGwQ8ryiAkdsErzqrcLGNa8ro1X5p5TY7ZqBwZ9XkZCuD",
  "key22": "2YWxR7sXwNFeLJLLGtsYsHaYWdE8X5RnWzoqMYHPyqvtUpkzxt7YRBwb9R9Lpq4fA3Ggpsc5F2KrnzG1gpw1AkxE",
  "key23": "4VDgVQZhHWp6V4cfCtaFqWhHfSJCzDrVww4YtCJwvJH1dFygWHHwFu5kBrWEPWTnC9obgtGdSWRnJAE3EymfjrJU",
  "key24": "2VfZxLM4mv98AcEniRfm8KbZr1AhWwvwyCeiDU1YBBecWvaiKofmEQnGhW8HKSNZg15uummHSvK23eoUvNrBSgyp",
  "key25": "5eYLffEzrAnQbiHQKsiqiARGiYWCVCEwviSyr95yj5dLhorbq9UnaGUUWrSC6hPqnfbokw1FMzpkFLxWasyPiEQW"
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
