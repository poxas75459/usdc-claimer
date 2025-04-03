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
    "5SNmBbmaYfSL1drhgn4uLftx5EkS6nxRpu6CZ8UVkCJWzo7r1uLxxnyr2wgoS4gmfXgter2MaMCjyVKTzq9VNDVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xpc38CoCdV6QUc2DA9SN1KybGBoJ9jCsrpX9huZRyxVvZ7iQyELvDj6VxCZbufd3tcrX98NYkpkbW3dSiZjLxdn",
  "key1": "5khn12Bjkoez6d3U4xpvYpX6KtNewkH24KXJkFxyyhp3KbPtJspkp5hGdm836uGmbEc1Sod3QcgxLGPeD9MJMx7u",
  "key2": "yViJZG3vWvs3WEkVcoB6msAGNisXp9kZRzvDRou6cEMckH44E5txTkNByxXYRX9x3DhD8TW8G8vHQSLzPQ8be5P",
  "key3": "2TBmESYaKTdGs2M3vtFLdyf48xAPkqkWyxhSA8bA2YbFNZJHSZQqeodA7gbUDFL38m3kJ1PvSef2Wk7sA6fEJLsc",
  "key4": "35x21gjmAQWxhiGjMK1nqgQEETF1s5a1hc7H299LSMntmRLbv7e7BR1efxm7KmR4g5JjEQFMnvXN6s3fvUXnmjTw",
  "key5": "5gH9kCRcUc9KfXAMCuNueUZhTy9eMTWWXpCmU7RrkebtyyE2uNFqk5aLc3fc9U2CFAbv3ndBLKw9aSQpPEqiCTBR",
  "key6": "5ySNxwEazo2VgwreN2rReNADgAeHo3NHVoD8sd6Eia5NWfW7iRYpCEoYJhCQMMWyFrg1VZWQEgpDyRUWML6aF11e",
  "key7": "Ru6zUaM2PGM1afE76wJbsRk82LJKxJyLoYvH8oGGXiqp2f3kmZWzfTFD1wT5MH3EJxTF15PU9TA5re85VM1Lg4w",
  "key8": "64VJzQFZBJ4RvYvoJvtACQ3XxD94BQ22h26KXg6D8YTDsQsy1EuAqpa8S2eyK4xe56doBsqozTzsQSYnsDkqPCRG",
  "key9": "2sreFDijZjEsEP1Fj6yHsw3FgxABNiTiHqXENjV5SrWbaEnVZyvyi6eE6LFuBnfW6it4rC3NNVR7ymLLj4mdM5HU",
  "key10": "AwF8uboV8KWrxqbJeGHjC2Wk7SEYbiRSLYTo4ZikGtTCTrg7G8bKyKsAb8soUmyuXGB3uA6mmt9KUvSEssaPqZy",
  "key11": "3ShkrXTbhWPT4is374D1eXJLvhG5z4Uh3kpa86ZBvXoZBKV8wcYoHjQpgSVa71C3sebFUg9miyFeckHv1ycAnr5J",
  "key12": "416q7gq8tuhaTKH86pccziqYxhvFecTJZjbEsV5gTMUfExzZooFf2yQmxS7zYXpAJzWrsBWagkNWTN3ULcnqYm2p",
  "key13": "2uPmnGH9XfDEMp2F85W8zdG6mMuRqrbDxKCPXKCqaX5v46yWqC8uZZcWJGYY7nxDQem6o8LweAfpQbVVw8nJMNko",
  "key14": "2CcEPH45Sc52FZSYAECJn5TFAmvBp8pbMcGe2icxjUbkR5c4tS5Zx6CsQZULiMC9a6rmf2yQgRXDYra1PWUyw5A2",
  "key15": "4iuY5WWXY7SdBuAi5dxzjx7btPJ7bPkScsGGZKMSTX996EC5xisW2AuzPBhW7bEW8B7y3cpNWSq9Mq2L2VrkV1cc",
  "key16": "5dhnPDouVtwYFbMtGNuMurr5QWQJZB8QcBZUN8w4sDZNFQiZCPE2tsboWsWkTkYj4VCF7rp3UfcHFLPLk8AwUdZA",
  "key17": "4pg6pHXLms9EVhSNzUXK8niFWgRntSAHnbc8a2c4eucVzUopBJS7z15Ygw3LGbhAwQ4nDkdcXqT7Cdi7qzTXSEfY",
  "key18": "43wKHyHLa4HsSw9xJoN4FWPLoprKFcy7kjdR4Nve2H3hu2Bj85BKUiZWrBpHWJmJQc7TM6yQZ4oYQumPrMVqaTtC",
  "key19": "41ZH76HWPjDUQqZpLHhUaeAZFH8dMtdrjQCCH18ruhPzgRLvhmyK9ycmvQ29pXuY7SXwZsRyPaYBtw46CYzNF5dK",
  "key20": "4PrE4c9rNaEvh14MrJYhyeXqnNdH9b5rep7cTicQ59J1EGGXZ8Em6gv6iYE5Yei89KrkAdVGErQZpmFpU1aL7G92",
  "key21": "3bhKybA7vLAmMKHZoozMMacDtnZKd5rmzE8WLicxAGR14m3FfLBtn9KkQjuFYYx3UC5auDd41jaV2be28hmhWf8v",
  "key22": "5Dc4jxSk4AY3QMtRTtVspBmmFBQZPBLFFAbPthntEcK4Hr2nsVJM1rEgbYednXoDCugregnG7dRhJVu3uk4Ea31r",
  "key23": "5PBXsAMa9zAnfhRBniSQVh3no8m5XFQM54yU8tQn8ZEFMirctEkm93CuyGRKbyeF6LSzDYF3JupGM6qMYLCjiA1D",
  "key24": "3QxzmHMdgyvo219a7TwktXKQpqYG142LogrTryXLhy9jpCgtFwkZqh3TzagxGRecfH8ti6ARqLqWJzSvfSKXTKDU",
  "key25": "JUEZinUbkhZhtRwnN2no5RoKNGmXFEfQuJPagk4XcssEXkr1QsWevnoMCeQ1Zrz7pLWEvgXXgGNffGhycUM4Lsm",
  "key26": "n1WJxaeJ117QiZ3C8PRKJN2Qihzj4rNb2boMwuEzG5g6upZTQJkLcoQLyCBNMEPSTfQCuQrDrWEhc8146NksLi1"
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
