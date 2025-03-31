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
    "58AwferkAemXqa7J56QUyGHMLKHqW6VyBXcEvmV1iVyUAXH8nCKxFYDwHu4yAEPtCKGfbdhyADVqcp8fGasD7uCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmfaYYbnCv8siq5uCz556p3uFDrVYzn2DkTRAkPsN6ca2tao2hr3DUST3bLJ3fNoojCzTBfSimYFYRth9m5v1qz",
  "key1": "4tZrjxMDC885MQKtafeNNfPHqdbYNE4eMjQCuRvwjmBhgSjoZ1twTK9A1j8xH6RxzYfB4BdBFwfHj27dGGUsy6iS",
  "key2": "5YzUJJ3pwx3pdVukBXFn5MW74G9JrSeaoFhYhJdd56fTLHJ6pxH9m7dGXkCXyUzKjUd4dEhHhXRFNoeCDqfVj3RC",
  "key3": "5Hb6xLY6zsFag2WwE9emMpXKmwSdDmfxrb9c1UHajxdZG74UFTiVRfWQu8zTNFQSmi7zGULSZSkUZ2rvhCseCiRk",
  "key4": "2BQGponTPmkJ7c3oVinYfdo9RU9antTvV93uqaHb5sFj8KoU7k3zPJ9He8qtdMRQjNoumT2Kq596cSbY3KF9B1Xi",
  "key5": "5ABCKRUFbvqs94F5o5fE28Rj42Dw7uBcSgjjgovUk3dej8fanM6jcKjmthDv6DbkyW6UAQHRvHXkoxnsGjjusba1",
  "key6": "3ETLiGSCCNvwrpVwCa6QEoMUatJS3s46vaJaWpi4NcbgtzWLZMzJimPYnoF1zogvXK7W6AS7XuGcWP2soMPvD6Ny",
  "key7": "gznjFTroMMgopTHFLPMwxz9u6Jamt7s85VDHxUNjsDXsyX2KbRfgQ9MgihbEPByczAaRLztZGUM3LMRVj5zy4p4",
  "key8": "4yfBuzC7QsC5iBcBDpK4Pb4t6fbx1kWAkaTWmaPvVMpomYASzpATenrygwuiau2jbBZ87jZM6aTSSfQbtvng39u3",
  "key9": "5LwRxSPbsgqqTeewyuNh2rDcs1W7GhcxMfxTVBHnJc8BmwEBmauAhpP8yiFfcM87ED2o1gqpGMoVhub7QNvA7S4r",
  "key10": "5iAZLC3z5kUvFPgU1Bv396Vq5TzVScGWf1dGKrqVS8QKsM7guTZSrAGQjyJe2hSCVZjPEiNFoFKv2zqoCJvtW7y7",
  "key11": "LZntFRok7wSdmEMGPdsuURbXzFJXkDoDza2YzzBJCfUSkzDyrVnqD3JcdDvFjzjHDcvGRcQEnhM2BiAvPcyMBE4",
  "key12": "4fcFwn9HMdCsuQqGq1RyebUH4x1WhMEAnXJQX1YSV1DiYpKW3csQEYCiauQKyPaiQvtCDZWmU7RqM28rwPus4WWy",
  "key13": "3FWtvsXfXWcycX4S4rgXJPu7VnGEAK9dYC3fbSoiXfE4accp9huEETWYxJWGkT343iuerYbPtS4hiDAcbJP7LnUm",
  "key14": "5pZwsapJxPW4XfkQNZ6XtuBBdh3ofrfgWUQGP6iMAQwg5uFqyzMfbkff8eqy7wp4JkChbsNdeqVjqJyWVaWUR6hf",
  "key15": "2H6N6XdKS8BLVUfzCKLAAr4RKoa1NH5oKtaW8hPnDM1e2SFYPgWk2EsYUiWph8acPiHTRt3r8yvEkzPGcnysUqn7",
  "key16": "4KLJ7pPYiDjA733JDEvUj1LGTa77CRHaaWbWwiAW58KWNrunVtCfD4S4D6KRB3F3ddXHisJPze1kvnjcbZt5ATGy",
  "key17": "bKWpi3LyhbhSrn1PNH82QyMFdi4U5BdULtd5AvVzswefQqjuzxYGG8i4FCkdbLuF5yJGdGyp2eZ9pWyV4vZ2shi",
  "key18": "37jgqi6qDPdfjx9Hn2emziJdudsBhA1bX5hvU6WiFC5EdTWEhfitYS4kexehZtf8asiTYBq7Cze7jYCmnGXbyCd8",
  "key19": "4C9AFh21Pz4yzAUT3jmQjR85JYuKXjQZuFy6N1GuEDdpZGhBAn8XjRvqV8mF9uSRMu8pGDj7i45717XwK6uiijUb",
  "key20": "5i1NMuDXeTBRZMwRPEB9kZEDF8GF26T8ZpjhqkaPxtSqThN5GCdDCkbD6tJpRsCbTBdFzM1GMapa6dUZbtpxgHCe",
  "key21": "vWwQ5cmh3xXJ1KgdQ7e1MbGZkgqDj1LMsqeMM9zuK56vVvb4J6WPaJnBTpgug6oYpZbynPBW7dJ9TzGWC9dyJdB",
  "key22": "pVTRtkGoZEyAeS5UewUU43R1c1qTnYLywjnpkzKYF65KHkKVuGoZJkDqvgaJniNfbBCc322gsvbpCS4UdhBq9mQ",
  "key23": "4mdQnhAPkGGVdfmKAjnk98rEpYFUnLr9tfby8EV2GqUgbDxLjRwsREpmhcbPQZsiFTRgym8B2BcWiVHyinT8vnU6",
  "key24": "5J5aLatB5w7YRZbrzTWXmc6yWCLXZqe7Ntct1EPtmACAxxuKGaqxXv6EBqJAtiwbDy8JdcJAAssJXYQB3MADs73R",
  "key25": "3FT6Pwjwpbe565ka8MyLisV7UMcS1KYtbNqoH9Henw3iTMMoMznr9W9rMR2oVyo78FgRGmPrrA1bx9RGnKqZSg62",
  "key26": "4wwygWk1uefEskiQUGswScsW8QAwk8RN3reJy7mYyLAAP9822o96E8EzFW3qMUHuRtrGcw9yTqWjAgR8ZDBgjHFm",
  "key27": "4smBnDNx6xFcWZsyD79QJi7vMnpGNMDZuhYSDJGc2s1ZHwx7TyEyD7bdDRQpkHMSxCZniz3DwmX3uz6g4CBVQsAz",
  "key28": "2JWjVdVcut5ErFDaZKTMtLawUJR9hTtvfxWnPL2rcTgKmDVBQYrfrd1gx9CbBeSYTsGuwJo6QyrtVtMuSorfT66a",
  "key29": "4G69M6fD9hSZXTouBPFTNhQeBAhSUvQpKYqSdFe5aE932asWtK7hBYcuoJnDjbNJGPYtzJ77WMKiKgWmRYevhLpk",
  "key30": "4Hb2fZN6uJk37pj8HHEUYo1GmLdhDYv7gPHXmJWrh1bEgxUuMA2gaaPpgcSGcmWgDXEHQm6DNPciKK1C5VsALMq7",
  "key31": "5YfVieV2azSwrsn1511qV6BSBmxhNLrqSaEBp3nxCBwJCeHnwsH3kXsRPi9eDWB79kWSzqD3yxNHtKsgXpiAJ8wG",
  "key32": "3tTT7uzaW8bBxSetcPD7ZjsoHHGk1kBbEWHHaQDViJFFFMRZ4XJKpxsra5w388qDXxXMgh6tpNKhZ4R9k76EgUwA",
  "key33": "2orRKmxMaczx6xDACJGCfU1NvLwv8xsw4JuMkLia3ovf3gxFj29jZPC1tkFTiH56yo3rxRGLocZBX3iP43UCGCkx",
  "key34": "32NiUuCAK1QMVhiE9dUGs96yTEqAePpZ8WG7NFpTZEiideg4comNKJPkKSCBjvFKsXzfwEK1CPLJwHCPNjXn96jf",
  "key35": "3u72Lqcd71PxD374PAGZPaJB1uafWx9HRVHmZcBpwXHFSV3MYZej6mktAg9CWrowaa6qZATaEU9KHESYmudh8uyE",
  "key36": "2ENrKnHppPWyvaDuBT8cj16GU8F5sb7mH8fdhKjFoagX8cKoHY725yEmbuN8oKvA9ReVBQqe1nxo36AphmvMWyVn",
  "key37": "KEZ4qtHbj5UeRxiRuUF2SPtWxhHrtVYYAHPpCBzuBMqSHWT9Cav8PLBDzBQZLjZtSig62TGNuxATz2DkLs5DbXu",
  "key38": "4hDUj5GXyv2GaVsgmGyf8ydSKjY7KEaSbMAYzxe7VRMLRLpvP1jRJuUb7ocUwSiNaD2ms9E32Rdnw4EodSvMjpQt",
  "key39": "52YHVU6V72jEW6TRbek2pmqFVmP4H81zDp5e9GbKTvWHdCwk9NdJHGRtgJgjUDK57iQBcszpLNZwvjDMy7pBnkpw",
  "key40": "3TZUgFwzqzBDFVEnsWttVGB72EvoPFeZBaqNnWsZejixT3Xf9MPWExTnuGCa9UBvK23uzvFnW1Xq2jE6C7faZdC9",
  "key41": "4ZDSauhRNnqixir5r7ZQtBNsD7s6cDzPzmF6WXDEWY3uXE8YzvwRUYEnTBjHd4KTVQvDvxExvswQYnkfuAqmvN6J",
  "key42": "5wCVc3MEiaREhaRRM1bQEGeRbn9w1xESC7tPJunz4NuuM3nBxAUxBpMvDsZhPrKwFHAHhCDLzR72ZvE7L9eDSn9h",
  "key43": "2sbUMSrpMHAPEbaPPdpf2QfyQJjibh8hbm54VCVVYSQmrQR9QViTvZSvR65xMMa5gALpHWA1KSnCgVi9TXrnYLXX",
  "key44": "5TihymsQGJ4dycDxgRNJngmB4mhU5fVviVDBPgUvagFAWDDWAHa92r9kAxHnVN2tezX86W5CiVYMDYqinThmvvJg",
  "key45": "3hpcgWLx8cfFA78Ddc7axPyekiTimSNDnNnbrrgauREzi8wzFaU7f7jFm6bwoxjxpPjS6t6vpSJSS7rhymbngb1G"
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
