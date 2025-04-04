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
    "j6z9vL2vPRktwh1CoSSx5TdobyHxj63PRz9zta2zc6YcQZRVAdrwNnZRT4BZas6X9QhA73FDVBWKwNfgGuYo5C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBZS7HdZuLePVGfNFEFz8F5WEADwGJJUqrq7EqBdg4HnGhxrwgWqgNSfXrH1rrDrdrC9vsULLcdX14qVGmLNu4R",
  "key1": "3WhfFn4EwPnE7BomLn2K9Kn7X1uaixZ8jGaDzsFg8EgXUdJtvr84yaws1U3CT3uueeGFqJSHKQiUAUTHDxeQAiBp",
  "key2": "U4wEW1RHHLKYetEET6UAk7ixSNiWDLcmX5kzhwjetfK2ckW5PLKT3wd34TEgs3TiEdxW8kTVR4vd6PAgz9y8BTm",
  "key3": "5TCtep9gaFkS1XUQZvPWTmx4RZCbMPqNB54d7pSx3P8Nmf5xbQRzKuBuauH1vdc86S2tZS3GF7gcV3UncxCMqu3",
  "key4": "4H2BWkGN9xmnX4Fc6px2zTg1MwScfCUd6K3UrJLPEouqyxVD87eRzVMk2xPnJy9s52VV668Prr36CX4eSTvGCmWJ",
  "key5": "5BnbFNdqwojt4Vxf42n1iugB2iqGD9nFm85Kdk7r3DDtNmufHEfGcWugtooM8DbXKDUcDiYn2matxak7Nj8uTYUe",
  "key6": "565ffm1NeRc9aaBsnczXbmcvhdgciPGWU8b5V3YdqjjkcihrZx4Ywk9K9UdSoDecqVbjwR1VG3hba2TG8dmyJrDB",
  "key7": "579cPw4VdN9EsT29sYrVDiNZdJ6PWzVQKLFQ8WnioY7N4SiuVSvST2ANTYaa3qKiGTFGHS6M7euAjboT6LCRVyqs",
  "key8": "3nfEFDurZvtq8wcLb7ZfWwsL3rYwH7UJANcVRfK848zyvoiHQbuHpb4MmeFYShPCEmYa98y88UDZdrgfqpPR3eDT",
  "key9": "5a1XZKiMYiz6KSB265Wys3V8nNwW7RonY4yZPDLhDFYNpruWbWTwxY5dJrsov3uEqJzYQ8z32FBwMGiZfeeWw4XE",
  "key10": "5SSDTwWav8xG532TqyQtiHQy6yAMW15KE5A6UrwGmPjFHywHyuWwkfvc94v6Lv4uejwPb5ziBDUw1457dPXFn5d6",
  "key11": "4SggC8oP4wjhH3i6keXJqHeYCmuUiNytzucqc7qtycgRBQE4t8t86XsNHzSTS8xnG9fj7UzCRQb88hTg8ohLz2G8",
  "key12": "5z1V79um9BkRje5TvmNArXk3VPA3i3B4DVLjdsoskb8CvceqrRZLrH4tnA1rJwx1yaB8y8gVpkxRim4vUY4utF2C",
  "key13": "kH2BqDb6CFnP6Ghf17ag3jCMNBkbcKriemi6R79TvziC3AE54GY9zCGPC68QLmowi6xykXTYiePC8myazw5HqNc",
  "key14": "x2XHFm6CpdoYUhbTU9frn96khqmhWwf47FZeExzKRkdmr8RKzVchN3McFzJ75dnYxjpnqsbvNfqMVexxgc35hgd",
  "key15": "5L1AbrRcDx7GCGkte4yefErkfGFLkP2GD2u22DRHHPmr4jd4wvjjtMLz18eGNiz2xSoTehHVKjHc14gUzGi1pA2F",
  "key16": "42jFWtsSU3UotpqPv3J9PFTkm9ZA84dRFkjgtNvg6RVEXtVbFquFRjQf9xQieN65AFpjZqHweYvhNZ57vji29T8e",
  "key17": "4Ph2cHAEaybkf9NoK3DPQNmrMsmVKMEbj3inoC9rezuUqCFuEs7LzpqDf11vZUwWW91kb4oyDAsN81c3cgGxo5kQ",
  "key18": "5mvVpeNcjb1tFZJ2ihYRSpd9ijziGCuhZJEHzf9fX8TnhvcWCGJZr7HBkpvi28fonFWg8Bu9UUx8AVXF9rVFf6Ry",
  "key19": "59eB87UHXiMvK94MzjDBmDHUkUNH3c4VAjWMSc3EcBNy5q9hJoqyVokM1DutNqpGZ7gGLsS7fkA6343bL9b1VHG3",
  "key20": "3wkyA7yHN6zNymr84wPitcJ25Kmu8SpUePUbamVot4TU61BYVFH8JcCMyXadgHABCfm33tYCZxzrgTZaFA6Fc9YN",
  "key21": "4SegGGMVKhfhzrvfxcF9g5HohfyerEdqtJoAR5BWScQwawyMXTudrnkyeQfneA3A7Jo5JGRimnLF6WV9WkWBmy34",
  "key22": "3SFrGMtdtMk2uavxo3SH8bhzzgnsAdHSULJiStWa4dNT1i9cgGzrb2Ca1UXUzKLq7WfXnWktrWfvvjGCwjafFNXQ",
  "key23": "4Lex43sxsNZ3JJr7FoMatoHkVxFV9hkXS1LqSSDd5ozRHkTHfFA8RQGqZQ5UjfWDM1pHphkDe5mjtcqWLZG6X8vi",
  "key24": "3YgMGK7Cv85TGRPs8MVbG6cqHqqtdjkFkXjqZChqcs2TLkSakHdx71sqvjNcLys2K8o541mhMHW19DTifo3z6FkK",
  "key25": "zRBWK7tsp2dZUd6r1QPYT5tGYbiXhyTm1Cwq51Jy48vsaANPW3mrDdqbvFxVBWVEGqHdMBzYK6TSdW7SKRWSs6W",
  "key26": "4o9L1U8DXPvAMtB7V5TfNGfdjuJeLC5nKvUwb8hFw9EB9t3MGN1ZN2zdxHXhaZtvLhhRA2ssbiGT5EbTQgS9ph9G",
  "key27": "5p5LBahubombuZnWyng7QsEcWz82svcRq6HgTPxQEsJLDgbNvZEPcGDhXvRiTkFfsfVpmCaAwnVzfQu8KPvEtyU9",
  "key28": "2DtreVh9UrsyHrdVvzBdxsBzbYZU4FtzWLoshhnnpPfsaVbYhSVPuoGPas8MCNGahq7298otnQuJ5atCbyKDjFqf",
  "key29": "5jZ3fMfq7MmjgwufAiVK85j5kA4QPqiHLGoDhcWdmsNE6ebGuQwQoT2YCTHGpX9u14Q6mKsZmBGboqavj4WBUXKB",
  "key30": "38HZfxGdhtq2T7eDUatSDFtUSCaWsRHLmpwgueijUneQjkpQPse9MVhayrXaAj1v6S9XNyvtAiL7sh3qBy6RNjpF",
  "key31": "254FHigFTJh46NBsJG2w13uvLMn9DkDGYPY6LvK1LvFqWpCr8RsSfkCzMGnVABqxJkXHcHo9cEpQYSGVrKtjD6kX",
  "key32": "3oSBZDUAgj7NrzDpnR3wAxJa9vsLfLznbzJkgRNr7bvPhwKFHKzTqgZzN3Y3NqWQVNxw3ACZHArdXJJM11N9JDko",
  "key33": "3HEnWMkB6agwntWVAjgNFrLwNYz2JFqDCTfccdFS6FeFASftVNesSimsrhKHRm3MVpF7BRNx8hSs623d98fs4RH6",
  "key34": "63gaUvV7Lb7sAarXNcxbwebvKK9PUPasiZPSjazqZdu5grtVeRva1NczkRqiQee5MVLMZn5PH3xXAcKWMiQJGgZx",
  "key35": "4y2LwZgW3gpAbM2Qy7a1dt5RVBcth1Xeg15N5jPFKjRZLYstVKfY6L9GhJPWbczyo9MKeQ2Dbpai5qeY9XPV65Dj",
  "key36": "4jV7Lrdgw36ipbfeYNDhh1UASZeJKU6zetRhKsexgVTFcGns1A2nUHosgx1MSjNcY7MSivP5vioWHxKnASJdKGaZ",
  "key37": "55J2pTSNefew4m4k8LciezwXhALvzP4JXY4vrdAqN3tnDvMFb9xhyjn3nSysbi2pZapgC3AEi3Hmq3fEXiB5Y6hg",
  "key38": "6119vmwuc6eCSfe9ax5ye8FwcHWcUbEvhKUCrVHJaipgbV6WD2qGhyLG84SfTLfD2hhkTg6MZSBK15P9UTjZSbac",
  "key39": "5RFMYPZxiTwyswcQQRDex1GisfRC7Nmq7kP6DQqwWbUPyBQ1qgFQzKL1L3hAWYz8GcrmtErB6KJjyR96KMppPA7k",
  "key40": "5CqAC49BMVH3wRaxKJbHWV7AJgWTsU8Z4nHf4MexMYPht3ttS4Ji3zuiKyqwSAJh4YsTmwQfNwdi4g2PwUDHTEh9",
  "key41": "3TmP76D2CpjWiRsNco8JV5C3g4XGDwMrdmQQ4X23xD5mzucpXhoprVFgwZvNeyR43WyTJRPGAu4BNLgLEFJX3taA",
  "key42": "5QPbYD98XgVcZRmBLjP6oit3n8TDySZkRMqqD6fk8w8m5nXeKzNFD6EMgheorNUiK2732REzG8rPoiCfVPsmEp8K",
  "key43": "e5YbuTf6vmF5qa6N7PFSFW52FKZBbjFDZu2yjHywVTsRSb3KZZ93KAomVw44VJEFtdWjfewGLBcndJFAC8igFbM",
  "key44": "a4H8j6mSZGbboszGrq7ApmiidxpyQGxJ6BF8rappAxVUFEtjtrYan5eUD6Baeo5KQTAWDaqBuogRSJWvNFXAVVt"
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
