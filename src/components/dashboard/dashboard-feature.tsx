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
    "3FG3vXDuuJLTZmKbeajjwstJg1ArP6vPMivV1jD8KjKSnXNH7sKXjBwNM2TYGZPSwpPUWKHpXidPLsiQbmtRnMWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEgXWk3VhvJ1KowNsfmwpYpBqnmv5N7aUWZPrhrfLwNA2VZXUNE4RGfckSBU1HFpX6we4i9zg4joR7kHnhpvHhL",
  "key1": "3BZF1sKsb4Prmbhwg5mCNjSAdsD6LnqGZaJNC3mprwrXxUzxvwWMUYD9vymwPHUGMyshcVVG1eeV3GseK4WADh2o",
  "key2": "5L96DxKhmr7hd3ifQb2TUCechH575jPxs12wkzMU9wkrpbpLbyAXsNyMpkM7Wb19ZJYhv48yz5YsrUka3RQWAoDo",
  "key3": "4UM7KRRLUqGoLCWArUYLJDunHcCcYPQdwBo2utFpa9t3wQMbcehSZ3hLRVWqropu6UhztN237gwe1CUg6AQPDmcm",
  "key4": "3PMfyBpDoPYM4bsjZaVyXYUx14kf9Uc64oPumK4hoJT3R5bX6rMBBzaTMYap7SEskM59K2QZw93LScrdWJn8wA3R",
  "key5": "5mUXYNx6JQ5B4X9Y9ijXZUhugHqpdX1PzQ8oKsdTS2KsJ3BehveFxc7JyCsiyebspg9BBWGbTS9QiJzoEgJ4CkYa",
  "key6": "1KsUWfomPX4UNX7cr2ekJjhh96ftZD9FSVSMbzyADkY8AtrzacdFvA9CD2WqVEtVAbkutSpgiAkQrScrT5GKSkL",
  "key7": "yzK68H3J9i3FoxAXL2H9dBvner4D7DFyEDVgK8NkrGXyT4RnkXDGL4YcZb5R2WsLjv5MruHkTk4WWNADCQ78xyB",
  "key8": "5xx3LDGMgFNJBCH4MkYefQRehNQ6dL7t5UTdJe9xs3DrVfNnPXwq76aJnoYCu4dRsNex82YBd1GrrDgNo61jcbfs",
  "key9": "4Fx4gQe6aVkUXucDBVtPGw3hCKdTF6r6BVbUwqn6mCScJHchCgVAMK9hQNHDSeUqLnTgN7t1xu2RnBBLNwPLNjtz",
  "key10": "5eaPFCkMuBBWt8EDrJgAdf1BPHpQ8PFsXtHZk21WvPZdDd1p3bDWVB6uphk8Cajxa15gP9Ts5DQ2mC8AaJQiQzzd",
  "key11": "4PcUAwnWCX6bQURLTUSthowkQEuWnUzL1ZU5TqVtkZpfLZNNHAfjAMQ2cqVyLVViA7fakwTPpakBeaefEE2eQtrt",
  "key12": "4zCgKzeFe7t5mVbNYkYcYnfMpoYev5QGW5EXbfdUnTai4iff4K5k1YPzGXtf1z8S6GqyXCxQUZ1fmBf42HrJqjs9",
  "key13": "49M1RsDA5aPEQTrBwsxguykRERTp1zZx8PPUWf9NQbyeBDzzrFZ4KPcW2noULeS9TQDjEAfEdtyH9RvhDFEgsCbX",
  "key14": "rQPR8Vt33QhKHTxuZq6T17Sn7joenNYfJ98czy4dnu92pPBUSsZ8BdHUH8bounYJBUuXLcmDZD4dZtnYBBAse5D",
  "key15": "Y5EwpVRHXjpNytaXF9teVXu91FsZAcAUE94Z5rTyboSGUkkB66BLc8FJtp9mzHRopGCnuTcEv9bkhXFrKvJQGAN",
  "key16": "4L1yHAzwgSqXKeVXbEPvvkDcKktGxvefB6Z4xXtzYiYZUbU9Y8ReeQFYVWMGJNMiEjBKBZNNAguD2752pfA1fv1V",
  "key17": "4S3oGEN8nqZHHf7eLyFXQRvJG1hMSFfa8WQs1t9dBfZLkWLW4EvQPFwx9Tq7R7q7qTu4LfhErtdF4jNX6R9pGZk7",
  "key18": "5BAKNtALDZJgjexzK9P6nL41fZWYGzia9kfT4V58ychra1UcJcqJEcsAF23ifs9tEKJGBsqAbqRe3jKsZFCapeRh",
  "key19": "64SZXBrbL7kWs1TMjacHb8WMcJJEWNpANd1KGLDh5FHqHfaCAjwsiHrJuikrGdM8ouAoc4BboWSUbokXX3mfKCFW",
  "key20": "N676qH1umgwPymhSiJ4FNTArus5Yde52sBcwnfmk8GxeaWEzX8gSwnHHJ6XHrMEq9MAbczW3vdGiAABtQoijdJh",
  "key21": "3xZPAqZ5QfgEdYtVKm6eyjvUwuiCV4MGpnjCpeXvfU7YMavs6ZoHNeKAMkDPYqw3ESQYe7zEoEhTSjZ3f8cF1H2w",
  "key22": "3pVRP6QvpqMeMmaKyiX3W4YDXctKEo3o4XLGQ83n7V7UReUGDsxtY5yf6TqVx5REPgv4YuBhzWqqXv2uSd4DUfY8",
  "key23": "3qAznjTEPjEv5Fyc37YXst9PZPvdyqcb2QkWvvorcVnxUXgHN3SVNS5iM6mDRuZb6Uw9EFNXqwCDyJvbq8v9V2Jz",
  "key24": "3D4RZbsdRPPrdrhiY4NWocQqJUScrkssPQKoJ7cMQToLB8eEc59QMUc4YDXU1hASXexjd84sQkymAQQhh91Xfn8r",
  "key25": "2DKqEBG3D9VQcak4c7cgzdh3s8aH287jBWURDKAPJHnADtS67aUnwkVH1YV1KzXVcpBimyRT6diSUtwJPRMTbhKm",
  "key26": "TjFmceWG6mbp8bRsuj8nmnSiuxDPx4t66WJq2xr9tfiXhn5jpLTfzxwXu19hjhcui4uANdvgzb3arEAX47CfXMH",
  "key27": "4gWLkHAY9ge9xC2grtXno5UBh5fRdNpLCbn554EejVRmKn9uD2Ye1gUemzMyJxow441brckquitrA8nWe8JtNvqg",
  "key28": "3AT12PhgxVyNYqH3yxZwVJyfk5ouFJGYXGTD9skE1CyEscRy6C4cr9aGmxZmA3GPfk6SZR19Zrc7biaLjQnNVtyQ",
  "key29": "5Tiu3p2PUUXscTiEssyfzNPcJ8nkwpQJKybCvUExqBosZrh962MWMuCLBmpJNiTyF5izNGjH8nsTUjz1PoaFFnkB",
  "key30": "2nJbtkC9mcZiCA78SxqYrA645SfXpphZMtp8xE42gwjQFWq8uPRk9MrnXFpmY9YfR8GovNzW1zof7nTeNjauQQv1",
  "key31": "4GdQxCqhcKi939A2cNtNhNdJ8xkrPpHRuMSKdMwPDHXYmNhdohm28GHsByaaTC3fLbYf6A615PFCCTcfDoz4u3bW",
  "key32": "5gtZjycSicooBQqbdyg3PtV5Dvwk9dUBgDs7hGwN8a2yMQFANcJM29nMxZKU7ci24xvAxXimCnx4VQWSKZuKxp5q",
  "key33": "2E9h3Z4tD8r4bzWRVWJPKRG3tJ72ACY8Z7WjEuPSMUEJvRX7YupMH2TzDtEWSEnkMrkRaYE9J8yEf92jin86nccG",
  "key34": "LU5vRQGfqvfuB2hCsEmu3DXKz7PQnDGKuai68N7U9tmVF939haYH92gQrVsNepDaTEsJ8KzHxJ18Rg6iPPwXo6f",
  "key35": "5EMuxHkdnuLCWaxGXWydsABT2bwLpzBhzARrGqhpEYEHaiwXvkisesXpNXQuERp2QXCnYEmuT5Ny4HhwuLsVPzga",
  "key36": "5utxveBeAVdx8hhGJwwjjcGuhQfyM8anVpcKAyoAYSD3PDkLad9gisMjY1mnjULahTsDdGWHCpqVEyGVQ4qgKyXq",
  "key37": "2a32oKuLYT1ggAJGY2685ctHvMVn3JkMCZ6eiZs886Erw9m3ZXBQoMiUcJPKmtwFHocLJ3rUVkMCq1SnmWrezJ5d",
  "key38": "2wpEUgk9ue8MbaB6sVvjFB6aRynVE6xu7SVQvscYhmTe75mSeGL3GaMEDytmM6CugCH9CwPHQAkZCg78xFEkSJUo",
  "key39": "2C33aowF4YKctDNjnojuRD1nPLYNGFsGFHKYNdsmGDLdPy4QKM3qPUy92DT8yHAU48megu1gr5VgXQe1XoguN8pi",
  "key40": "3DghrACE8FVEWLyaydzSPo5Z86U4HcA6uta3caKXJGJH3MU8mGtqGac8HCYcnXA5FFBQERAYrhjyQy4rKWinzyfv",
  "key41": "3Zs67aRdqv132mr6mDPtwzDaaTLkejfdNL7u2XQxKK8zEyvVhekMjSvEoAkU4Ron9UahLgKQS88ZKww4p6cnP8Bd",
  "key42": "NeNfGVzesFuBuWRhDuucKS1mRJZrBxZ6TD7rYAwLdzG1fZDsLDyHHoUgJ8W5yxieca4Ujwkta6gusPT86cMS99c",
  "key43": "3ZAsKerQRRj8g5BXoA1dXcbUZBXYswzU4nYnrx7q7fuy9k3tLg1h6NpUF7BFc9F6Mx1QcFNXMy2bntSXEK7dHCzb",
  "key44": "39dEwrLkoZeAJZzyDDukitomYzCNAsqyXtgd4JtaZ9kBJgpdhzds68pu53Lwnxjiq4MftTtRkshWqK7oC4HdtJfU",
  "key45": "9euerfrA12x7Axbd39VPB6GrPRon5vXgyz6QnFJZJAXbxBM6f4JFvhvnu33mkXPTjv45iEsb5aLPFvHQuqmWdTN",
  "key46": "36wJATqwzUrffczzYYY7DsQvFZMjkq9ECzqc6AkkpP4sJK8LxNZMcgLyt2Dn58uStm6ebcFvjwtd6AFjpfnLxX82",
  "key47": "4JAFBNWm85VtXE2iGPXePxgdmEtRmjmVZMcSFtK7aE4tSGjt2sgjZakH5W9FfRJHJNooFA9aumKAQQArepW9X7em",
  "key48": "3yRWshsfhqXnKrML9EunKooq3deSJW4wJA2YYYvoj7bqCddX7DiEgKuocZNdV7PfTrQ26XGBHdYFCmYubZmS1EPR"
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
