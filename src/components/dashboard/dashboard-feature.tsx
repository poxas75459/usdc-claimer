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
    "3tAe7C8p2kFNTVpowDJ5t5qoo658YpN92fohf2yAJR6TiLWeUVxkzWHva8ooPYsB4tUaFPeoUYDBeDvXfqcDZYk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HykLBecXJfpSV4UzMqFaKbFRArJxMi7RJULTny6JC5GvbndzAnVWjTbYUh3nWCU8iHWSv56oxWur6EJTkTp6aEJ",
  "key1": "5n2mcox5sAcHEdDhPomCnm2ogBJwdB7YvmqKmZkF2kHJsbj3h2fc9NB2jmsbNrzJT3WBBSqgSVhEVs8aNbd5m7vN",
  "key2": "236nnsmHY7xW7z2jfyZGodBTRKoLvtVqz2vRN28vJeAKAXouNggugz5c7z7Pqw3hs5c2YbXHxy71aKgVk6rRmEcA",
  "key3": "2jgAar5BwSYUkbs76kQLZdFQemwoVv6n4zxV2U3ad2ARdW6S44SRK75xyV2GPEthdmCMqBbif1LJ1vbZRaBg8qkd",
  "key4": "2m4SMC6eTqpsUg5FdhZBM354ZCzJCs43jDqwrGhuEXqSFWFBV6qAa5xgoHJXpqx58JLkmtKsFRzSbT172Yy1MEua",
  "key5": "F96fmscFharv5ACAEZStFJ3kooo2zbGhmSg37687zJfNzYzcKeDwqmBgvTazxkxdQPsCyBUq2Nvi4Sv9WzmjTpZ",
  "key6": "5eQvztNNhw8REy7RdK9hjzCv4AMMdVXQqYdF6FgGETmchpPMYqptpSU5UKRVaTFhKN7MkNwBXUpoxJGaxBbEsqPi",
  "key7": "38PatoaHuKvcy8HatytVbjd6XcKGKGFTvpMre2rcUfQGbKrjCvQFazpkj6EAtE8tbfbG5D1Lyd6RRULW47ZF4F2y",
  "key8": "3YhdUFHFFHGsQG9NXaVDgPge5aZFJHpHnHitZb36pr5tsnQXX8d3vjvTG49vkJXTJ1i99AXR4gbft5eF3fxmqmLE",
  "key9": "2qV3TXUBrptTAPPGqKT8msDbWCNzMd9QDJ8WgL2DHJzs21a1kDDSSqvAGnvcwcxVeXeAKqis8c9X9jCvm8DoNMWH",
  "key10": "QcCG77JHukXEgDNz5RGbHBF8xeFByZ11bnq45fwZaktzzTpES2eJ5RfUUqqVk7TWhwvMSWAnQ19Kdu4ebP3pkRU",
  "key11": "3p4jpk7KyeDP977hEX4S6RVZzvxQ1pV6rs5P1x8v7GMv2FqEG1MNmB9hZMzE7M4dTuM91H8NakRoHynMnx44szUw",
  "key12": "2cJ8pbBKVBydi5xu3EunXSm7yk8ND7m3a8URTbRL8KxQVbC5Y4AbZ3YFTwG8Vb5WRf3VtfrRBW9MdAYdHVVVFHty",
  "key13": "5DrUsoifmDVHsR7SvJrSqC99TCrLaWS2MMmKMyTBJRGw12VUNHDZmFqLrt1RHQDuN1fCwEsnCYNrELbhHxJqMuG3",
  "key14": "XagYoWiiUDd2Umnh6tKAFNU1kf2eT1Tw54hApfNQke1EeBihmnxURVYPzteQz7ynCMzrcRkkhCs9TYWDpkQxgnM",
  "key15": "48ptTMUyCk9pbPFZV9heNoRGPRYNc78JuPgbePU9bFTGoZ1Qr3uByb5U9VjHn3t1sEYbexwSPGR9j5L4ndk9G91x",
  "key16": "3LhMjfHo1Ag48Dqdr8nRLUaCCFNdkHK8Ji63zZKo3xKU5Z9V7N8SP5QJCL7Fh9LUDjnUeRwWDmtiSdQaqwLC62Eo",
  "key17": "Q6QMihC9u1WKryep1qVGZ56BUF86Dg12KxPdDgoG4wjcoiWJsZWK4p5opvbFmkQZbMuGbuCHscmVWBsELukmhf6",
  "key18": "4BPvRAJqJ8UqscpVoRPZDXBUG1swXPVMjeEHTQHnotKSshjEy3nxAo9YrnKHm55rKetUQ8KDup33Nxc3fnj8MMZC",
  "key19": "2nbBopA6rAPtuAm8CcFky9KaWMLZEKrn5bdAoCZEZedr7t3MsjpoV6Ra5fMyJF1es3KN1g83KZiadqR1qyK1yc19",
  "key20": "5mjEmZowQn9NtRhNAzozxiTstdobtQojEiQAYnQj5JCM7DuwZ28ssuopCgoC1m6xSMkkLxsKSWQqN4Jq9SQw2ubi",
  "key21": "4omfArpBb7FQGjBu5GNtgZBwzWEM34wfc2iDrmtA9BYL3TyHSwBHumoJYTNUVvEEddNftfUs1wj6z7ibZTBHtwS7",
  "key22": "3Gzv2q7oYphchAP8WF3EzTM8qBCmXXuyBKHQeRUXYeodmag1uDnwwmd3ixUudX5tE7qxPWuHnnjBZ19iVbAZjwkH",
  "key23": "5RFwWeXC6ADkpPhkxjYjaAxVFdaecx26HfrUiTxig9hraK227iQb57jRnPvUM2fhunsAsdWhXDppMmtvA2S9dVAj",
  "key24": "3uhCtsxf7FK8ZLUgdjBpwQdjKvgeVzv5ZNMLVmvfEuws43jFxMgD5xm84KZtaEnegJ633j4xDD5fpXbGWEoRk3xG",
  "key25": "5WD2VhkUVuXRzN1R6j1KRryubYYddNuiVXQDxArYVifWNkjzHoMKAFf28w89qYDscr8s5FPvGzvXQXDNQCBJ4VTt",
  "key26": "5UDnpxTgGCAjWKevxSYLmqj5dpNZ8UH7uimqT2BpxWoww4ArachiL1QAziR8S2kphqPDDAfGjbJi8DWsXM8x3Kbq",
  "key27": "4nBaqAjcxQp2nFRBrn27AKJwB8YLLPV2erkNgNt3TAQp7ufcGPuHVSyJGkg3KNSD2bEC7VRNbRp9dYQ2yJzsUo5V"
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
