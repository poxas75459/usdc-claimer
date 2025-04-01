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
    "3hwkuv3bJ6Cyv8sctR8JUExH32Z2aZLnoewd8tabytUME8mZ5ZJNGg2oP1bevvwo6u8Aqe3gWHngBskfgBfzrMVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q7c9gE5g91KnjLWZFLHhrsZT7AKchknnxYngRBVjmrCVe7mYYiSzEiQBDejgLd43vDZR9W7V1ywUyaaB63tuHDV",
  "key1": "2PHMM3ozY77KscyuQZjV97eLFfkhv6wiG5xLxoCLsfoyU86CbuJJgDCE5Sfz8qXbL8WRJ1REW7B7JEDg8PvbZSrh",
  "key2": "5YQMqaWJfJvpKMfZvZHY2FVJU7LrY3FeGHvv15EGta4KHobF1Z37DVW3JzMwgC9owqcwYJkJBFfsfPpF7CGNivJV",
  "key3": "2LGmaMdNPjEbHSNHv2B9jCj853AyJdR1bzHgi4FUJtWZ7wbcrbirHbByqeQ6vm4f5RcuevL4QxnH5oVzbemRpth4",
  "key4": "4Xim9fP6vSgXUo1y7Rts9tYqbLY7qxAfSFuHaCsm3gEBRfxgsmBHJXR7RcPuKyzTdiik1H5RfX3Fnr6LJBN34vZ",
  "key5": "2z5VtD2ZxjFNcPteqBPPzjXgC8JPDHAqB2K3xLGGz2pTNwDTVWW3F9Ef6v3GzSqyW4HNaxwp6zMqKYxiC594Bn1X",
  "key6": "4giCqqgQqchYiEpTifTZdPdU9R5a1J66cewAn4NSrHXHN5m35u1XHKCmPvRP2GhJcZzs8LcfJnpxKGR1RiEwsZqq",
  "key7": "3tWKQFdfQsDcSF7uhCpHMqkJVhgmVdhDHHAPME5pxR7T9GHHr1uqQD93JczRjY1omiLN7mpSPHgPw4bMTqvVocLM",
  "key8": "34M5h8hoMjLNwbpo2A9eVievsWfw3oxvNQNCqo5FLcgbnabEKsCPPh78iyGwzfoJHK8A7NHCViAwC537cESRMoRE",
  "key9": "A1VbSA2JVbvtP6nwvqFbZCEepWEszj7rSyME12ycZ9auD1Vqjo7iCuF7Ypm8jj9xxDfuDMgFvmFGDyGLGc1mJ6C",
  "key10": "3qZavVmyqWRnQBkoeXisAErTRPYss6FqXdpyPBNwZaarkZSHXJqQULprP3UN6MMjLKAMv2ZvhMoStNwtys4nDBf3",
  "key11": "4P15Yq5F8MBNGVvzL8rtafnswPaD8ZxbRTeieCXZUEfUEf1vuNYwzcEWNWLJLN26g8DNvzqyJ488jBzXgxeomTEs",
  "key12": "4q8pksgQqzn2Cq1LjuTzRos9J6vS8vTJJWkPCMgRj1RW8H9ociZvNsaD61NPbK4F3scrS845RHU1jMGqDvFYazhX",
  "key13": "3XcotEXUjhACYq9a1Gd29ALysYkTt5jfg7ZWX93KYi8ZwEP7d6JG4YdFSdjGCArX6uCMSDe7JDvusDiQgswjV7cX",
  "key14": "4NAKQLtz2ndY88QSAGTAXQ7BAnTvbe7A4d1opBwH1yYZc5QE26nUkVvpp8Pre5bLTRkvoSTscD1b6JrRy292xiKr",
  "key15": "5j8JgLvRrUBQ11oceQnwDz6gVyLev1mMUP4UnX6gpZjesHpoWzx2rvxJYhLfXp9fMRWgspSu3NYAxSRwQG3bzNE7",
  "key16": "4M89xbbKSFVQZ1VpYrbUV22vhE9vnXwpQwYeRXKh6zk6rY4LYcDJt43YuyFhZMRWfpmKQe5bPcCEqRy7Uc2XQD1y",
  "key17": "2GxpsbZWjK4WFLbrqm5DEPLEfSMD3tpJTy2RwYytQLpG4TdbVQiPcY8nEjriHv4hpS5azQMcJVq8Q364HydbJeEs",
  "key18": "VJaecLfWYVDMiTN9oyAjTz93PTiKqbcBDtW6c2i7huNs1nF2sJm1up6sCUfGGaAuhARkMTZGYh1W6ModE5f8mUk",
  "key19": "4mgtD2rKtkNXW1Dea9tAKaR7Tf398aPTZF4Zb5R8C81UgMMaLpM2ZxYMK75Wy1QVPM3tu1xYTMyg71Pk5HTm3H9W",
  "key20": "4xuyiLQx33BXNkg3iPTpbs3H9euGWDvnAXBeQmesF9DSUbZYwdMLMfM7NNjGE72ALidoiarVaTtZoRYUsPJp4pt7",
  "key21": "2ZtRm7xYisq86bpucnTRPyzYD2WJvSUjUquU6VKPxqnc7m9V9XybHpN4HRz9vMScngGrsM1gQSEYZA1bgAvvsM3f",
  "key22": "23Xm4dCKwT3ZKvQoGhPZRCz2TvUNvZfB75UL1oUywwdvDfKq2LCjmzRoFxNkVAQy3Bm9Da3pf4cCx2RFojBmrpnZ",
  "key23": "jqKwt3JpTZina524Y1HcsiHNgz1LRnaPwcF48iFqenrWnXrxtcY2bNC21CKBHYj43TEcu4SppWJNgpNH9Hr73SX",
  "key24": "SamdRzTpQQxsMMaWZWBSieWz1qMfFfWj8XC3Xh9XqHEfLgJv5wgaMn8m5X955TWGUk8GHyGdWCUzK7JVPgJihju",
  "key25": "4BvnqJd7dkCdCPjg3F3JsXEeZkXwpAwFbckLjF3r8dtPcq2URudy2s2LTBJiEiedqJYeiqU6SmjeXQD3TQxifwF8",
  "key26": "wn9UgBFm5qa8EhKtf1sskb8ADzBUgQXGL7gbUKorV79DshhUEVvgAZmxiQi7MeWdyR9isHmJFZXAvjPuFUvvdz5",
  "key27": "4BZfKrwSoxujAFTT3fd2U5YCFuuVn3RD5rgqSnVmMLxnxrNooWYQj7chGm4tALzEJY5KANWDzsQ8xc6CCNQom8i9",
  "key28": "54d6QjMnWJxnjEiY5UEjjHmQtC79VvgbC1D5ybqkPjDdT7M78oBYrcvgv2sF45ctzxNZcgxgnt5igQvMNYxDuHbo",
  "key29": "4aNEmnWKLs8hvBt7KHmXCbFaBWLc1N34EU3cRDqAEKLZMcyLZtsKQxPU5fT4WXYksWeYrL3g5WSA5bd94BpqtbNb",
  "key30": "2VP4ZnwGtGQLM8MBr7KPgd3yioA7fStPW7kMiHMZgCCbExWvSwLTULj78XXpcACQYbjjwxFwfsxedCsvSRbykABj",
  "key31": "BEekqUP8L6M29bp9bNQimaNbEyMWY2LuSvF1F4HthkTdqJs47PZgGVzLRXMTQqYvduaY24QSxL3jvcrJ7QDaTUz",
  "key32": "4w1TpeWqx24ML1iZPaatT3ziuD5LemM6vCv69XG8Jw3EjGPU2Z34tfQuR1eMJWeyiVm7PJQe1Lw71gRgXoRd9NZ9",
  "key33": "5n9hrssHqLjdFcMnL6aowDZnPAva6i7s6f1aoiBB6NLh8caWBsyFfTsrgqtu7usshaqwiZNyfvWBStrzYq6f48x2",
  "key34": "37enjZj3eTZPkp7pKKxtpWZRZNP65jhWntY37SPa1ekqxEQPWgLNZeEsnkCDAiHamuxDCyF28EmFiV4hkJNFFzug",
  "key35": "3fHRcnncQMpcEDNtcLt3T51wpuoGiRRpgDuMXukgJJd2kvuj5eeaJXdYXcjDMDUxSehnJjcRzjaKRSRt1Kyt699V",
  "key36": "YSpUDMt8aEBNJwmDEuAx8XFhT9NDVsuB3WZfQ6nWzJFHjVnNn43t3kCGyQhiS23QPN2wkHLe6p2KuqmsNrg5Ymi",
  "key37": "4R8UPWBBU9SSBmfMJFubUAdXsW7fSe8BNEe1nW8trKnDf4m52aWZKBD9hAkgMMAx4fhecDHYm8WsmdErej3MVZQJ",
  "key38": "5mXvV15FhXW59A4qhRP4C7dhsDf4G2sXP6b1K5G77NyUH3PDnogBWZ5mPo7aMK9cWMRCcAfLSEvhoMLp3MBHjyaT",
  "key39": "4vY4VThjP3MBe8aF41C2y73WhxA2B9Xo6FCN7UzQnV6pwhg6cmZfUbX4oqYdQUZv5SHw38iSbsWwtGsJaAQBGUbj",
  "key40": "b8eR9EfKnKEnpHwoQ6aZRt21TVGzc7JeHLEr96ZhAijxczTojgicum316x7DhLPkHbMTMxXxJGqrD4PS9W6SEfA",
  "key41": "LEChtFEuDMyXwyTX6agTQk7rYRDmkHUnreVEeUXEB58Y4P3G1eGw953tp96nxb8Q5BM8URxFJR9Xbzs3e58QquH",
  "key42": "3sAAPqzueKojpGsPkkTWDo4gwJ1eixwue6eL7GQUrdApdnsubVUs3hic2kxKZYs5185JhcpL7rivWTKm36KQ9Ne3",
  "key43": "9o77gaaWS4t7AZfJ483x1VS7rJEWnWML4bt1Rmq9Sx9fB36v16jDRMKwkyiCuatBrsG21uQq39PypFfX3SYBcyk",
  "key44": "61bNuZs9cPU4RGioUsZ18WeziKRM1289WM2VFzEUB2EDhwcS7Ny7qjNBgX5oEPgBJDfzrACUpkc1qmVPuzGfsRRF",
  "key45": "aTKZ11baEgJWpHccMVCVbZXmPErd7NN4U6LyeVFpy5HrMTutD9c82MtDJAGP1yTJB8XCYf1sKHDuxQZyasPbFCB",
  "key46": "4bZrM4CBUYEkUmdsHNdhoekqM8qLYPMBiP6h1g4XVdwUW89KS9knzjQgSSVtVgpp7f7gTpmYpJAwbUr8rfLUWmy3",
  "key47": "4kV43yDMN7KZh8tivBfjTya2N2A2vTNKCT7JLqGQr7a1Cw9PkdTmzn7M8fRFdG8hcqoSfPVMTqZWq5gAmrbBxu8e",
  "key48": "3Gfek8CrutQw3xYtFPXAE1akqNx6g3T8ij2zadjCduXuwVh7RD8ehFrXywrADiVPVJ6ec1GUuovu8UBabGgWrwBb",
  "key49": "5Sm6gJegNxguGZ3ZWMWxKiuCm8vHfaTozWkz83CLJrqYufacNmE4CeMJurnDHQ9zYa8EeD48uJqRbVDH4emMRDmb"
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
