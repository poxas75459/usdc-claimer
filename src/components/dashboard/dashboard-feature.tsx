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
    "5Pt3kdMmHGkBa4Y8sGHD7HBeXC7F6CJXzjnWJmRSGtvKP3poBLmZ3Rf8KyFJeWR1MgTKAYsHFfmMteR7p7c7DHrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPKNYvggXDyz2FV3VeWgVBnvoTKxhB4LEY2wNrqn2q2uBNX3DZW7FdEs7cVrsnjYGu8uQ2FqSAWq2uuTZBe4oNz",
  "key1": "4qK19dTcGNHkonQrRFtURLWJP6sf8Vjxb2wX7JrM8ZtZJgnp41F6bgLNpgZbaooNTJnXEMrpAAZC8ZoVv4Gq5hYd",
  "key2": "4HribLPRAg14BJfhweaF3K2KtDSE3cQePgcwA826K9gaJe4zRWVyzcBzBUMa578pq3rdscD48qNi8AkFU6VhZS7w",
  "key3": "5ozTbGs8tgzpZxzRPZSawSsppte1JQJ29seTUD95As4TnoQv6NckL6ZuDCiq9Za8pCaTSSBXM14QdXaPkMm1ezVC",
  "key4": "2c22s225cmwEGvbNF91qipHzAeqCfbQmtN4JVKLc3zibhQyabmaHWYvbXb7gWE2gx2Pr8vc3MBw4eSxTbUMuCu1Y",
  "key5": "5ZiK3Jqz3fF8Mn1nnm2j1HvwnMxBX556mXDhLY3BLLQXsPqRs3KPKJem1R2RwqbU5kE67n25XME4SdpjXUdkZkbn",
  "key6": "5Cg45QxyVNVnqwfC4DrkaH6gvPMfMyW2FR2CJxrCLJ6SNqAGCudAYdhsEa7GAqLABacQWTMnRGFoR5oiLhGaoTdH",
  "key7": "vjhbsaC4ehgSwGqAW2a9D7k4V9ekuux8D4vJrLxVffJ9f6iE2axLFRwi7LSCy7D9tmU96Xk842q6D72E3xRSGGh",
  "key8": "2tP2rrkBfvvxc4K1AEyKkicnhGzMFTVM4W9CSJZEWdkmtRom3MPGivDLPJ3vbtQY7eWwv18kphb9gMqTUYdHCQZy",
  "key9": "KHmogbATSf5bKmTzSm6yspkYX5LZWvofPYeY7otmUiMpW9HL7bXLER2aFmghzkgX3o44VmAdRRYB58hZG1bgxj4",
  "key10": "3Z9mCTQMSG8V7gNqMG8Zhu641AczxgWjNzxwaXzkU7WKpArmBZzWBQKRfHb9JY8ZKV55aHGdnCBzj9LTQtTSntaM",
  "key11": "3QDonsyhAPSbyTHnw8yFfRb8Nvee7okoFiVgGpS1T4ZARU8UcKg4NJgm4bSa8Zn1DZPW2WT5wbqSErYcPsP23gur",
  "key12": "5UWaFajPQVk3uh1BQ4dTkMD7vTP818yHgPuow1t3bTKCawvENQGuQiQuRc7oQ62HaSW2WSnaRfVcwuTzko6mF7p2",
  "key13": "WhbYgCg9k1rEmSW5PFbh3kSuLegLFf4A4PQmSpK4DK5H6DRWRtsz2y3GmeJeK5Bg1wvx88NqP93rXMYNP9wwiLg",
  "key14": "481GYQPwCCQqwV7qzbtLXRuYjYhy1TPUyLDRQBjbToAL4K5WxkDogvjfasJ91t5W3EiuoxUk47h4rdyH73wuuqa5",
  "key15": "36p7Zdv3tgJTovEfPA62HbzM8DNAfppS3sbuHRcnGx3b1HJPB91jdof3Lcsw9CTZH4FK7SvvmxXavwVVqLw2GyCR",
  "key16": "45CCn33MgnfGmAQ7hkZi299oxLC1yQFVzqKpHrW9Kcwyhseo9vwJ9tHxjykxm9t5NSmUfcojGvmz3cwKiCpHLJBs",
  "key17": "53BBQTpvGeVWtHzbXzPVdgubz1qd3c5A8RcVXyYKxLwBvuuk67mtqfj9BgYN5gwrNLAiDCfD9sNgrGWKJqa5YWvw",
  "key18": "GjdcoVihtjaXK8o8pRXXd2bNdiNv2T3iXuycReXFkP6cX6wogXaZX7MeXgG5ZTjHXtqnWxVC16xn9Rq9VmuhQbF",
  "key19": "zxdFYHT41XdPyX8WCSC5hd8ygnvSvWN1yzsqpwcJ8GKgTF8nDWkeBeB32HzNhZ2XuGREt1ed51fHLY5JPteR5fr",
  "key20": "dEqcHCzRawvp96SApR3B8hUofQ4eMKxXaWJ12k2FvpK53WY13LTUet9NQa93e54aDvUZBdS79NtfpCuFUoqQWUL",
  "key21": "4r9v2rrXtGBnvKPChRiY2FFVE7xd7D8FbvkvFDMkk1bHpg1EviKzoKbLtRrbgKoqW3FznMYqA2ypsjyzygpRyzhS",
  "key22": "jC59de2uAJmWUL6zuQd5AMQN9CJBtq5tFG8p77sx7veAwhGV85wNfzEHXQZ1iVTK9RqHfCoYao5rbhDWUv7qHB6",
  "key23": "4XRguNHKS5iNybsrwg9PTZ2kQJJDBaUUXzD7E6SGkN82AruqKu6ERNCmB9ZAoM7YnnVXFcB6PtGHGdfr9Z9xk8Km",
  "key24": "gQGuU9aZc6QBbL2KMbLqdZcD33nzemQqp3AzyvGgp1oH42iUqPNuFL8m5fMzkVM88hGR8hEjwcJu57qU8NWP6NV",
  "key25": "Dse4pcXZhGfe7uedcJn31aaW83gJwRwzYwYAg6wmv2zRzgfij82bjGCCjoez9cLdkkrHmppq6QwKexiL3xAbwVV",
  "key26": "41rULfdD6uPHBfqFJbgfZh3chapKyjjXVVttvPf8aAUiXR293HG27CbG1SyV2jAMC87azqXhoykZsJooExdENk28",
  "key27": "2fXRuLN74qmyaBtMWf9ArAunkcyEGM7QzfXRy4pVaB86XHHMG2rgSNxSKwhKxDL8cJsR7cFWhRC7yXGeSjWKoiDF",
  "key28": "5S6Lh2pfQYPu1fKwLHayFPzQKSnTPsMPhDKD9PWgTeDUyf8vMt1Du4RQLFhJ2q2CfnFJ84K6nX9oUnXh3F4DaHUY",
  "key29": "o5WZUDHxd4w5UMfnxhrKGTHx5Xra1rXogLjzBv9ZDjQEPhCyMWXE7LmGa1KAPcr7MHt1joxJgaPRPYQ8o77KwGQ",
  "key30": "Z4eNPo7vagLvx1cN25i5TH7AkMvdAKjYMKfZP6i9xW83fpp39iJi1h8ByqBz1qjLr2x97pgmpEWdx3SzFUsfdSR",
  "key31": "yQGjzQxSBdgXc6ttVnRJzPrQ7QCFfMKQPH8bpLXkQuWyUiqDtvnxPQ7DjgmWzejo4yBoPpET37iYtPdMjkPwu3Q",
  "key32": "5rmKyhcqmT1BZPYhTBtzdVTNfiirxjX1vbo4UrBv6kCuEKkmGFwtP41VuRQeQZ7hLKHe8oovsgRFSo5rcTuUCYS2",
  "key33": "E9zf1G7rxBHVbTgSikZuUT5dZYbicYKwArJ95qYgWBSBh4KgCP9wiuG7ZeXW3hQBcajh324uLecDPSGHGTckjDp",
  "key34": "3jhkrDLwY9zKrFf6t35fA9aMy1odcgHqZPEV2n7bFVvB6JsnapC3tse3rGM6uG7panNzQX47dfYTocZm6jYyQfBD",
  "key35": "5p81FpRATBMycDruzx1e5mdVsDR7fTBk54p1i3mR9BKcdvUmcKSustzyymGFiUxTRCtFq59iAVkubnhNfDwVQMGs",
  "key36": "5D7rEdWc7igba9xkBi6m9UcRYULusN6LtkzosGnMy511UcHBZHwLCR4KpgxMsw2pYQk6Pv7hzZqnSneZt4QB8yov",
  "key37": "5Dg94h5cSyCkZjuuCDNUotNmSW3RXPPVphBkc3U1gSvnKEyL2Gr2kzR7VswKqq1sJhEDYvEZ6Rx9krzy72pc7mFx",
  "key38": "5jKYX6E2aETMxSV53zh64arpJc5mUXNEBcMUC3PGgGD1JVeHEEZeUYhQZkk3ZbCeWuBMznVZDKjTsCQG4ANeM73Y",
  "key39": "5qNNtf29cxknNa9TjuLXZgb3YPgjJfAP6e7y4JodSQfzzgV8yrFWefv5bCNaeHJ1jWnzYSwcHDPR8XogpKhvWWjP",
  "key40": "5AdVvNX6McmAK8Hwbrxbia9rrA6L4XB4Nf8BSfGwk58XfhqoGqx1hdm9oDip6ev3mokJzBme2xQouqhGu2kMsUzc",
  "key41": "6639GjU8dRvRMtd28F67GTLebpyrpGok94saWVrxQriz5Vz1omzffe224bztpgqbaQPsvfwBD5ssZ7Njux9aGSxd",
  "key42": "4tkYPXfscb1CREc8dF3dRuQ3HChHzsCBL7nGtDrLqmSFf88jYhafeneGR6eL9Zfb6EjgiU1UViKFMYy6CrcKjb87",
  "key43": "3vXNpVEvE92qmGPtitHt62tfRm9nZyJkDtMMJz5eEajigw4hBoStneYtJiTBzoJmx5JkQuLkdCv5ADfDTg2zxx7x",
  "key44": "kMFrPHhQmPLD7vYggGrEwvDuqk99kbUCquXCUobmedbLXZrsLhdT2qHtJnnBP8fEr9GKMCYEjEVtr1M3S2LXSRS"
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
