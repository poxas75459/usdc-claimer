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
    "3aubhubnWLXszY1wU7ouzJUjtSY6mJuwgQWxg1LT4DeUzaGzY5h7dTrxx3G9E2QCC2CBCwb8ZnpLQQ9d54G4LM6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wgZ6BjXxtVWxfjSxDNbxeE1uvbpm7Ljkovq1J3n7jopDrGzTGzFJnESL5WvQLGFA5XskeaicettQTAvrzvA5FnL",
  "key1": "5SHDxbAiPhD56HT7ae7qsn4vuGWq1euVtD9q62DVvkz9ByxcuB2WpvH9K7TYA85wuPfaHF8z8YeG3s2GtdR2UuUA",
  "key2": "2bjW48tR9knvmwbTcxRvZZ6dGAihGVGXsG9nGj3p7VE7JdeWhns54ou22Pas2pzMXgato7rmsV1iLTA1itSF8XZU",
  "key3": "5RX5qy2eqaE53UQeo46oTAP51QDZaFe45CZZgwZSkf6dNKHnQ7sDicfEqEy63orNHKbgurjUVAcQRH2boT3XExLV",
  "key4": "N8mzmrEgEk1NEeS5EPndEpVqnh7aRTYBqBDDhRizboazv4b3rsXhFdRMjX3AJZbXNFrXHSryVxmiRvkNFzFis2o",
  "key5": "MJzxWM21QdgKRT2BGvZLAuwnkuk8CAFEUuJuqR45jvoH9h585PmAxtELzP6BsdG2XjWzgH4dwXXmmcuqhSHYQXG",
  "key6": "4qA8kR9pnHs8gAbqtGtw33igJoubEkZtiitT2CswLFcKfU34Ph88bBzVQTB3fbmL5p9CWSFda3vrMLsxBUXR8yBp",
  "key7": "2ut8bP3ocMa6r2z4spkLrSqoTmKhgHnZy5NG3kixuQTjm1QNKnkVNYtoYxbpt2ZwHskvwm8vqYA3S69GcB6NKoY3",
  "key8": "5EnbAsZ16zMDEDhp7BuDResppKKNjJ76Bz51T8arwzJUKSEcZ6P72KHmwMXLzUjZBMQSh3buiy8z43sa6Q91gZux",
  "key9": "3XSC9Ahd739E7AM2gMm46NrCFL7Cbq5oMgBSx7NVBvxjPr2uhx3QPbYoKL8RA56uwmDD6iqQSGRgrtdd8S1noqEC",
  "key10": "4amqx56ghfwjrFfPczzo3CCtVJNu8Ko3vfF37sWETdBnt67ZYxyHmbkKgFWU9Gg8zuCmCniedc7ya2nSn9ApD5Ep",
  "key11": "3sXEtP9n8CWTbZ6x5rn8n5Dje89JacYRj1qDrqefxDpL2P9iZJ4gUMo9gR19vqiFxNRrHnPxFmnWEDMMypswr72k",
  "key12": "4kznp9RDW6Cs3aqce5TdHANDrMAtjGrsXp3oS9pEQsm9SetDWSMxT3Twu9SBYKtidGZCshnYxCV9RLwYpvZPS7Ay",
  "key13": "4ZKpv3UF8ujchXD8pYLnRDaPkKQPaevQJ97yKcRH1AzS3akuNjcavBPhbiy2FZzZFWE74gzaSekvVHk1VwoyGPSh",
  "key14": "pYFwJ3jVuvZ9UiUBAx1yA1bLSb3V5991s7ymhpbZsarJB3sg1Y4YPhzkUd8CAnwXFSNwYXCf8HZLmWzyw86bNKR",
  "key15": "2VX4qzZzvJd1qBWVF9phTJpbruHgMQCpjPE6yq8F58mWwThJATQJrfxLn7so8LJHfqWaKiyKKjfAKQQFxTEDt8Vj",
  "key16": "5hhaz4Tx1rER7b3mBysceUNPLyHSN4YKaAZdHVRonwKPU1rhtfXSJKThXX6NeU5FYVkApGtkfH26jGk3st6rbsdw",
  "key17": "55bLQqfFKuHPtuDbtLoL8m6tWwvBMEXw9ReXg1cTDg7HqWjf5Mup2VkT2kGURt8SyVVVYyyEG5MZg3upRZYPuyq3",
  "key18": "2BJk7RNeWESdpgQe1KcYKk2t3dd8n33ULBUnrfmR48neP3npBH1mRnMuUcribUmvcK1qqXn7P5zv8czWVZzRBMdP",
  "key19": "4LDqxwSrvYdmhNWpcHEmXio4ib3Gk79TwuVNoLwvMZ88t8qrHAY9haSfheuKa7zLK2TLJRXj3qXHoWYR5iGpseFJ",
  "key20": "2api7LyQoYhYeQrv5AW4eqDLY1jQ4kbYeRLvdRjEeyTDTbSVBacoisPe4MvxWW7qYwf82Zfy2aemPByhcL6VV2yt",
  "key21": "33fBmnx5oDMDFsh5oqgJopcCx62Ej9K49koDW2suiPx5Scny8HqEoX5MfQnQJrT1N3zKaNvyFYxQvn1Z66Bz3P2s",
  "key22": "54itsESNggJ6YMTbTZYqx87vo1dv2q3of86gQ2SKxwoUo9aFH2EG7VfeMX2ogQxdNbkJDRxytX9uXLeMUYSG63Bi",
  "key23": "ZqhGuFjPMNRFa2mnkVXGqJAMQ6bRQuRqKhd1d6Ku3zc88cCps9PdLdVX3Vf36EjbCor4KR7rTjkBs7VYTyDjECS",
  "key24": "2VcREnVmkzU2N45nhKN48f1dwTztY9cLsyCaZa6LfUFifK9GorkGW7zRn29tRYRJ9uHzYfRooEP5XucD6LkW34nG",
  "key25": "239p6o6TkoCKixpFmrReE2vUe1np3NuvcxoeatmuCVWkA35m26KJBHP8dSgzWrmufN4CuEX3z7XXTivJc94yVbSd",
  "key26": "4wtc3aWgx9PBkB4PvqB4tLRfn8mQENQaHrcm1ia8euwqs7cKzGZcFMkRvL7UKU3BGeAo7qScWbo6e6Qx2ydf5QwS",
  "key27": "4ACbGaXeXVyZJkGL6qMm4eJFbt7ri1sF5GpaRh5YY7oJXgHnxoNKCoWoUvABK4ZvY2ww1iemX7Pj87eUPgp7gcuS",
  "key28": "2cwAqYBeisdZNgVL4VFuZwkme7RDZW9f429xEN1TFuYPG6v2nGbp7kDySx6YVWnZLQmLTnAaQVvVAEQuPSuu6a2D",
  "key29": "3RMe5CgfofXKz6U6AdNM6yeDDv1o93M3yYJmRN2sKMajSwG1pU3WGTrMmfpm4DBmJbi8vp1x8dbjr1E9vZgRssGh",
  "key30": "4p1ysgsMxPdTyAxU7Y8nBnA15iNjpEan13PT9zRECCJqJmk7eLsnEi15PnxvkpjGbEYzbr8uwGwpqHqMQYLaUTrp",
  "key31": "5kWfJBjeSQjDCXoUh394LgbnujKf1ntEyPBfzMHwZxyPWgSJNjQLykbbZb2cRRj3qDqZNJCdC3vqacm6YtzyQyka",
  "key32": "4CrjA8R7wUAftVvVvucZLUgEAsATkB5U16VpQYvFJDXcagXLJW1GaGywgPwJCfL4ZrG96rdEwpgC6155xen7wJdA",
  "key33": "2ZCduRy3mQn61PzgtQ22PNdzoKquT9Z4Q4h2LVA6JMAA8Nvfa7LPN86VhkEd6NA3QK6dTqvJqkpBkS8mmz3QiJEs",
  "key34": "4zmKV8yT7pkuNQX9FmbwLa9c8r7DLp2Cazqg1i2bjLLGiVaaTZPQuwM3mUjRH1vwhZVV3ZzAB5HCd4EE6ndML7dz",
  "key35": "Ybgc8YbVNaqJH58TBDwZUyymnxxZ1pJ5kK8GRzTd4UG8q3zC1EirG6YtKVYgKpcPrzHvbX9NtG7o8JZaLVAAajG",
  "key36": "2b3q66WQpSPAwAHbZw3P9uwfNpLVxH79iaRNHzf9MUeuiYwdJxQmhqZrKgMbcKoXu7UhxqgDsJNoTnYwAL5ebck9",
  "key37": "4maCtSUnsTWi6amJi8ygTE2JSU46ePp8a6uynp5bi7NKbXooepeAdvYvgozWGTMPvVvWWh7z8uwFeFTHWgmBpXMu",
  "key38": "eyG15t8Roz356uHVtWXdP9AJ8bGnNXDHV9BgawUWggj5ZAn8dfJELHGZK9enscCvonemsDaXk8WYNPr7VvKdwCr",
  "key39": "4TSQDjBBhcyUcB65mEY9BA9mJMxfaGNUxLSYGbp1Ws4swaHrpdAH9aDhnZT4cXBy53i45kLWHGcmvt3ZUtWh7hHQ",
  "key40": "5phC5EvMYtGXgwegkfs4P9yB2Ud5zwRqg1oUjwwaanDgQBeK4eBS1Z7mCrVndDoaFGs4FBbTHLVv6Q9boXqNfUC7",
  "key41": "3U2G51PuGYQDtYh78VaFe9JBF314RHAwENmquYNFUZUy57hLL3HMw7b56BsZgMoxQB9noBPo2eLQRvMWk7Hi5H1m",
  "key42": "48nrgzeHkPoj2iEdwyGWhDnQup71QAQ5sPgbTsbCiGqWQWPn2PtFggmSrbcStSvRcoULDb98ZKuCYbSZCu8c3wda",
  "key43": "PvJNPDB52cZNqDRBnqi9dV4kSkWL9yKZobnpnUgEtZASKhjRpKV3jEFVF7cGSnXXbr4NSZMUxHvAnQ9iTBCdrYS",
  "key44": "4JUDe2YCYNRXW1DtktjkhtwtiLLNiikWu2uFBXw49cVrm4BvF3C2VVXFJsyfPXH9NayehFqgNMPRA29Uvmmjg1vY",
  "key45": "4mG8f1o8mQ2RgTsJbWYnvh5kWjNWwSerajtPnJkA7wDYr3roDnS53nu9xHGbamYwmKWmK59HV6aSbQdjfni3HaCH"
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
