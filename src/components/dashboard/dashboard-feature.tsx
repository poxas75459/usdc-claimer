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
    "331ktdjCAet122S2KgPwU2aAdDRjfYbaz2ugKKguHGhz8c2ajNYxAk4eqMo5KXogNk5DwV5hVjnqFSuW4nRrueK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtkHUrGEpywNKMGJeX83aYSN1jzKe8XtnedfoSKWKJmmP8AR5aebQYjdCngFRrxzBvL8JEKqbG6mVx7ib3wbCPD",
  "key1": "2qedwMuq2MdgmFRx2gyMNiYF8AbvQbS3KyxhYTe1dq5PTZcJVitaPaDMzKKAP7WeGuFJCV8oiAR26jEzWZFwbEtA",
  "key2": "328ctJBh1zpjN9N6Rxp6Lfo6J744YXK3FBExJUL7b4Ak4cEBuxGUpFCkRd9gh2H5iBLwW9LMAewzsfaQaWmiGwb9",
  "key3": "EynHpK5WtgNnUn5UdCy8dVVdBG8czE8urxAxBoJzhABXnzT3U1brYp8GiLFtTtGWVSbdP7WgRHC9JnQ1FdhW39k",
  "key4": "129pgD8NpxUsTw5MqJEHNpV18u93P9ezuRc9Ey5ZiZWDJRiiUvxY2Vhg2fePsVDWJ7oCLTmb1gJFS8D2pAVZTVnQ",
  "key5": "4qKVayvJtmYtHHmkjJR3WM2rpNAQwuWkpJ82s7VTPmQnEiWk4fkY4YBQCG2jRhA5RCTdkfNkSFTh16eDWxDYwiXU",
  "key6": "fy5fMyM3a9f76eczZcwNhpybgMnMFP5UongjnJ7ixtSBXvYAMtPn6RgvWEuAHiwLKgdnKNHJHtzQTuvWPwXAhyt",
  "key7": "LwJojTuoCTELGfLqtv82C2F1jUPLhsvPZ3Ywsh9CV8mrfdFd4mWuHDdpT72wmhX9YLp54PqRtU7pE1AYrdoPQ4g",
  "key8": "33E9ua7z1RJ8gFhjGam7DJfWLKFqiRY3Zg1QZLqcjhJ54cfQJEBVSq9kcexepFGJ9BJT4M7EWSTHC3CZbUev95fw",
  "key9": "4gpCdhHWUv4P2vfdrAvHjpgvgHAGVAQmxxNGc7rQ7Ec4UXw5R5farBb1ndYqSUstBCBP2jY5sFkgnie2JZbfS1Gw",
  "key10": "3F9a5tkz184uhJ3xXDsA3XaNStNUHsLP1vBNAfn8KRM24QvEPbD4LQF6AgzLeNfEXtdZnP28xJdrP8utghkbCKZ",
  "key11": "HmvJLJ3sJWpSNi5pJBLYbd4J76bB5chMturDuuGxht5o7CdaoVAKJaJpsTdBv9uFcupf3uCVrD1xrHuP2eGYjj6",
  "key12": "3Fb9Mxvs2cVydZuZwu2pDoUHkPfDSeVWrecZJgBzP4KseMFHGQMkMfeecpNhpkHZRAhn8msEYeJ2ZNack6ckosvx",
  "key13": "2ME3jJcY6ZGn23peCdGzApM7WD8FcrJCE2RvHSPR8voVrpUTZ2LjGAnNR2zEn6QVRBqpMBVdyJasDCbMYwM62qF3",
  "key14": "2kTHK4w799QYTNwSJyvVf93gU4S9RmPKb7j6CPCuS3f7NQva1Y25QNr6gJVXUYYUdgVHsTxd5aYWoRJDQQhTUH2K",
  "key15": "57yFAmKz4zZuNSxrtPCj3kXdKZLwYwbYqosqyCiUMtYieqNXHe4n7uXMFTuDpH9BMhC3WUwvZJD79oQzQPvJt1Le",
  "key16": "3XTCjYQjUDndHGXK7TRVEBjFfjc6dmQFCj2ujNcP9keKCfGgBpv4WjtjpXaaj93NjwELoRSNHW6cttZm5mcrQpaf",
  "key17": "5YqXXLjZjw6DLbBWG2Q3kCc1yCLp3f59VmyQf4AoeBcUG3kCvN12PJmwcV2MXFo81117o4ggSqHif5HGSEUgCHdW",
  "key18": "EHVHg4t9Bxz9EHm4hJvVtGSXccV5Xot89p4djeTdMfzBWZ9xGwR5w4S1yN7s8z2CAcanMQ2edV1W14dbGunhYLo",
  "key19": "4XMx28mnKXarCrp4v6Stb2DEGC2GHGs69SNoUUSaW1xGYKtUiSfMYpotKgDXfNxA9LWiLDqYkcqonE1RwhjUc8jP",
  "key20": "2nmVeC66awiNwhXGaoPCXV1nwrtfBW8M9zF3CxLaomGNP9gJ1vBKErnNnvWVhuHmLa3fqxEaiGRsnkgqKMWU8Cnr",
  "key21": "ET94CCP6gqWDpJ9vq7er6ebd1kro2hMU98ZkjyKTzTtx5jhYrTrnVsaPHt2quc78JAu8reDVZQesTZvpCzDrL1E",
  "key22": "4yYMGTdiYFNqkiWurpjVaADwFrchPjTTpsLhLHRJ9PVn2qodkLdXYW7uhKyidEEp2BfRyuVF5gAd91MtsXHbaApR",
  "key23": "3eQsjNrQkKXjRMVxmPwbc6HgTk43d85PhvTdRT7BM16WWbs3h4uFGwygRUpZsbqEEyAB24qtmrHFC8wCJoTmWLK4",
  "key24": "JQfuWH1n8PixkEXXZpHsXMhiFaBTaJibBeNfYyHpXxx8SB2KggPDpgiVkW6PTP1hqJefaSsFUzYCC5xsPMN5Rt5",
  "key25": "2DKZcULNvwTMCuKgMNXD6DYQQhLZiRFtnU4rtsFZ4H5u19gFKNuncGDrEMpodAFN2VCcfLi4G7DgSgBwnkNeJAmT",
  "key26": "632qupnVisiF2Zfy3z7pkVT2bcTUqFzt8CowAWPQdM8kmcnV7v3BFjTzF8x4fzC7RkJ3SXXQNikQe3hxX6qr98zo",
  "key27": "5LBDVjvoEfkF1KwiqYmNd3adVqru59RxdzHAvPqoTwFF93NXpgdbxvNu5YPoht4HuFRumxAHDQHKKnnp5vkRrm4Z",
  "key28": "5FHm6LV1WovjVpPxosoWBFWvq7jvfocYAuEAQgzmSLjpTeXXYeh8qnhw3zWuxwynwheYrhVY6MKdRf7VLj5ez55B",
  "key29": "34aWSBHYpTmYti8UfK9NBYjaPSe2KoSZhVRDU2r4fVaEm6zWw3uRAAXSyL84DTdpaTjquBSucLb4oCpLFom6M9Ht",
  "key30": "HCaFFikmy1rFswCwg2rvqMogqay8T7dPSAbsXHbZeYpq97adYTccYqbanLmvicWZm8bgoNoa72eSyNjpUeRFbXQ",
  "key31": "jxuNimi1MxgcLXfF3Ev3mBruU4rZdFumm4uiYFemFqjxp72uaZxGAtHoNj9ePbhN21hto4to46fj9KpjbbasVgM",
  "key32": "5TKu4rSVkVxQKvgPdj6Z5d5LCsFgGQShheZ8jAc6wJJAJ5Vt57vntL5mt7seQbZe1Kr96aU45r7HciC3pRjw2Px2",
  "key33": "2Rzcdp1uGUkMMATu8uyZQ8oHH9mdTxZs23qQfiwU6VRjopXTGCRSFRuEvcxy2v1xA1k4cND8BuQhEL8NiAP692Dk",
  "key34": "3zxyzSL4aGumN5fAquRcbnyd5MdHcn6P1HVTwmVLNWU5NBBsMUvhJnKFjqK4GcgCRD13G39Q2B3M9TFJvDXfoLWp",
  "key35": "5eNc2d7jPu9E9TdUToQJedH8amnCupbksukRT7E1rcaV8pgZfkVtJPMSTVei5wNPknpKTi9ARjTEL2SdRLj2W9LG",
  "key36": "5EfgvW4KcLcvRP8x8tLmBHniLNcnaoiHQQkcdrFPZGMiD31aNbrHhqURyFXLhQyUebGQNF89gTAtWZtyoVG9H2BK",
  "key37": "5CZU4qYzaQjGqE8Xq7sd9jeLDGiMc4ByiRT2yvr53eMiXUxAnoHtDEa5uC48QjhrB2TjgvK8kKRoVsAS77WgdWt4",
  "key38": "4V14bUZHtTxaqSxzXU3xYUqfeWX3dKoq4XKVrju7DmzZgSPey2gmDJeBouEJmZBoU7Dgwfv9kjvA8LDUekU3F4po",
  "key39": "2wP59GfdbJ3PA97iba5dbDJdCPsP8bJf95woaiwDimgtYs3QhBXwXDzfie5wk3csmNT5xVV9dFtQY26b7pbXHRA6",
  "key40": "43MRPnzDRDTMDP1kaGYajveT2D2Qaza8oPLgRNadgKrd2zNDF64LMV1nvNhUgq89xVoCeatytmv8LmaT3s9ArSSy",
  "key41": "212tKxA1VacBaCo75WJVXxLqr3m7YTyaY5Q13GNq81inAsh5ZWMpc9Vz7b4u4R245hTFsZuwyMi5jus2u3NLpxX3",
  "key42": "24WieHTZ8vhMZbGbvqKa8MG2W3fjFpo7sWvYXv3Nph85q5VxG8Qgf1NpqfXH3uS6SB6sPi9tDuyDA5vSpDqGLhu8",
  "key43": "5vbgymqZaX6nHADpqyrDyXDiCiwNLCCQXDVMWMEVeg3ZH9BnRtCM7epT5UfGecszcrkNsigQWbqkcvZnTm6fWgQj",
  "key44": "ygW4t2jDGL7YcUd7W5pDrbZ6FXwFaJchqX2NEscSbnAVrLduocVFngcthbkdGW3XNXKdereBqzh6nqDEApcWRpS",
  "key45": "4A3M2rPU8AAZUWr8LkdGZAcQgje9vutBygACdvpFycH9gnJm1BXP97Y4hNMKuVCLmxagpsJBzqQ8568bf7CgzKEu",
  "key46": "4nRUUFFnXj7wCfqNhjNXuzYnk2XP63w2nxWCdru6VhRVYw1x9ufBkkvya16fHornrKwZYc9e9qKEg6ymirKSe9nt",
  "key47": "2eKuMLas55JA9sPVnDDKZrXwtHrFnV98rwKGppy7JsiswieAWtJGdRytbaTWFMnpyydCp7AJMxxQeqzzkH8utyB9"
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
