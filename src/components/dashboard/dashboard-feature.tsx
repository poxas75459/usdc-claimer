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
    "nXwDi7RXcyQ9UiBfcrXQXtYvyzWNR6xRUjATwhFkymEisA3jBtzXbfEiEabnYLvQfp1vRD5kz96785LfaWHto3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4cHQAnsYSrrApHcX13zB6EFNBPHUBTDyLuQkaKRNNmwrGoagJ7HG8hN5wBNVgeqUWiTMbPTusMLmeVJEfyeU2g",
  "key1": "41vn84cqLys489Qpinvoa5kcAAJZHstPRjSQyerMvRjCWyAtvbhwkC5yHLXTTjxUc6GPZcfzDuVeKz8tR3bi1JSL",
  "key2": "38Ga5is73nRnNGeBxnsSSHWxzq84jsvtLAs8kHY4tK9ZL5bhktEUuEhEDPpyCCh8D2ohzAFJAmCeMKXv1GDRh3qo",
  "key3": "4PGNWgeihL9zfFphCRQKYFKWKSvsFpRpDZMniUDMaJKhbjNbsxBHzLdSJU9k7fwy8BA2Z1AmttZsHv3weV4myHMC",
  "key4": "4tcce26JoMYD7xkzW6UR6SawWeeRDQFyEmBRjHc5aR331YEj2DycynQwpgRVHNJJ3ydWzwqDHkjov3VveLa2noEY",
  "key5": "uvyHJvtdjqj9SGqXsAC9F7wXgHZWUjY5KhpSLpiG8s6WdmuRZNCDa2aWjFRw3v7KyZumGsQU5vQpETTEj87Q9V3",
  "key6": "3qbghbp8xE1Cdw21BqY2kju3s4abVbtRcf7DY5Q5bjirLM5GSNn7Wq9L3nWMxwnPaHz2jhaEZV8PfJoRFNS8wJpd",
  "key7": "4xBjuQ24TxoEAu1hgqQwVVxUKNxADQaMLmAVFiXvC2PLhNAHpeUDKXQ5j3uWoqqCerPiLU3UcK5d5YTVDpesCYtr",
  "key8": "2sd8175wdubuc6xFW4q4xMuSrdce6iRSHFbwm2HvZ5cVjzBc7qhLbmrLxAXhW2p8uu5yi7gBkb7eX13sDDzodndv",
  "key9": "qmX7ryLjDCYmdasrRsWhLbosATt1XfzU14yDoQxoSaGgtmK68ZgYA1BdGhczPZAaQQeVoBdxqGfe3CrEdww9GRz",
  "key10": "SoBNnGeUh4uEbPzQTcE6ZHn95JwbVouKSq9VTTNTu7BiXPgYUahaUNRCZwUxpke4dTtarDgyPCuqPosmquhkrXy",
  "key11": "2UXYmSrmkUxCKhLQdFq7g9kJZxz7CsvAiYaKPT6tBVevgU8G7teziAwthhuCNhR15wEh2E7aywEvRZhbxaYBdise",
  "key12": "2NeP5dfJdjfpX6weZBFgmhAVzJFE76ho9YknorUuZhFG5bUTNu3Rm1rPkR2moPsZMZdwJFcqSEgYUeGm8Uo8c87G",
  "key13": "MJ1AEsGTHMgZxAuUusrP1W1f4YS3cvkApNziChUJNdU9i7DJJKx8gpsSQMxtttpyvzt1Z35C7CTdcXkjfnrtae8",
  "key14": "4dn6UC7x7q83d2ZbVvf6xdUUL9eVg8meS4XbgmNgjnVCrC8wxYyn3SXFJeS3qNtJEB85RUzTbAwNRi4oK57nXhV8",
  "key15": "4GQFSGxzAMKGQHSyBopZdW87poWTXWuUB7KoGH6XWuhRaoiiMJXqMJhSirbpyYsUrqgapUQz5KyeZmSmcdXZi1D5",
  "key16": "5AGwEkdVhHUeKAFw2HYFFWWc6SvreeuCEqSNyxEBWYQ6gDAo78sxv5auNiQTjaAtaJtx9hep1h1Gkb9GEozCDZSZ",
  "key17": "4oPrPge6G5MwW33dkfmKiPoVi73ncQArhjP4pALRa9zbJvopJ7NAKMMM5tq3ihcu2L8vyvxWdSVAiJHWmpaicoZG",
  "key18": "4e9zzbtrZrRF3H12y2soWi7iJnywxwEqSdfsBouPVZo2XMnCEDYJFx2twwxhk15vhuLTwh5GB2vLDgEcHti8Lnr7",
  "key19": "3ub3NJtmWLsiu97Rk2DnCzut5EkWdbReRHwKXxzp81HaqNnPQZaYH5kPWcb7etSnDEea93kppwKwTnXRzmKgu1gE",
  "key20": "3tqgYR24WDacQuxbmHkRvTyJUUL7Dv19UEgUjGbrQFUWzaXpZELgLwT9jJCKGNApqwsxWPS3eWzBNQYJhj1F5GDT",
  "key21": "3KYpxA5N1FQMiCa7C6ckxy5hSoLCdEDrwedSR6cawzFUjJ8ZpuombmNB7wCtnwJB1ERzEDPTP6zRa5WPy9w3ny3A",
  "key22": "3xFogWTa778U9scvHEF8p25soXPUVqv5waLSLAukqJ43YMkTECB4zSWL1c5Fw1PkuCywqhiBmrZTGdhHVVQxjrDx",
  "key23": "Nfa8Mqs3ceSuEkwmybnkuvxrgsvyEeBf1iWnrkQhoTxdRXEGmpALrGuc5rdqWV1pNcvws3kjtVRv93sgGJcfWqf",
  "key24": "2xDYtoeiVc1Ahz1avyYvmX9Bp7jkNeRroN1aMAnRHSbRYFGyZCcS4uagqDdkSJoGSrrY8svx9S9tSo5bGPaHY4T",
  "key25": "4z41oVe9Qi1CEKf3Wh57ZW6MivYv851dEzFDwm7Gc7hTvWDbjWLsA5A6h9JMWcdwysDS2yfmC2NcfmXWCyh2eawN",
  "key26": "2NkSFuYWxYxLV1TVzZPjmSSmqqwdQV8awDf3rcMb35Ue7xYPcfdEejj5Y16zkotvhzaAV2Px5m9ndoVdiSbZQfci",
  "key27": "VhGrPWjh6SgCcuy8ZzsFuFJwtapqhHGzPgbmdVi6sT4FeCNnUzYd3LQsNbEiWAvGYPo3sUtUWyNPmJvfVRDbLYD",
  "key28": "5k8ZnhQMBdRL9Y6aZg8BqFikBApXEK3QoTY6jYunZkS6iiVzVoJzifknJV4U3EgDBbkBDJ6LiREWbk9yduLhaxWV",
  "key29": "4hApKuDVrJn4RqyhpJaXD16abLDYKvKPpWcpdznQJFCvqV7CvoDiCijsgVJEKqSt5obiCfwqeZpNXQqUsPwNbHue",
  "key30": "DJ2tStaHHLMarGRoGmo1xiMtb6AysmD3Uch97cvjTGNsQvViT1j98vXDfrsxkiUPLMoGgoYj5tpY6tNSwazhPd6",
  "key31": "aHStaqFWEmfQHQwbLPjpGW79am5PTtynUAwuMMTmDov7nBLFndnzfEhYA7gTLog1SF77sSLZ4eufUiy8mWqEhbF",
  "key32": "4vJAz5fZZJ3Mz85T1oAHk6X1en3rVQA5iZ5UGSDk76r2e5EodkiUZX234FyCGS8wCMS39xKnChmTEYiTvgsBqy7f",
  "key33": "4x8Azhpi9WpDyzzeq1tVVhJbGyJR5AuG65FQxxYGcui5ig34GwCin2FJriyW6Am5wfyc3caVXwZrtR8WqBocw16a",
  "key34": "663Xb6qyCK8ZPs14VQQv64vE9wSASLx6AZyFbPFjNGQhUdRGUKgh3BRsRCL6eLabcHUnVQ2Tn4cwqPBaBDEF3g93",
  "key35": "5PvL2FonQDnr5nhBw4uuspMi3hw8FRzApgxhc5pLJx9YrZHgCke4QwzPdqsiiQQsLDXJmdDPP7gK5yBuYjkgncSK",
  "key36": "23W9oNLbuY52HWoF4wxjnHtUG2LipkKa3MKm9qsVUqSBJb8B8rjFpRoEyWFHsAjNYoqKpY81GwqY5HHEUw7mT8QU",
  "key37": "zum57JU5hbRj1pAP9YWhEujqmj3FoZrhQqfmN77KKSNfckpUeNAbhSXqm8Vnxhsm53GL1FDcy8uxsAU64iqBR7y",
  "key38": "P4ENv1yrqzJhAmgi3RdRnAF5uJSXBus8szQmWch8F2HnqsAENyxJeZLmeXhuEd6Lnsnsvz8B7tTgeVNNEZ5CG6J",
  "key39": "31Yg5dhDtLQ6ghYvRPBsK3cVB6GDaVHabpyTkJL8qc8FwvSdamE6FuLJZUWmcYygi2cAUGmnFmp7UwTdDM17RSkd",
  "key40": "2uLgQyqmA3avi8KB3tmHo3WjzGHx7h4PYPWMXW8scFaVukD2ALNrSRmzDgzKWge2zAqkUcLdX4FgRs6eQyCUCBac",
  "key41": "2Ve69dTRJVADdqVgvf8KiywdjUNnYGRuJbg5Dq9vkqvyNeSSC7xtbYgsNqHDXPxirZWpoAHmCQrEeNs98az2ypHU",
  "key42": "75iCyS6Y2K2oR9CEWuuAjWa1wmW9mfmhejoJUfpgnDfcbG9k2JrEnZbYkWcHtBivb9maX8EUJ15ppnn68LapWXc",
  "key43": "4iizjm3oSDW681BAJPAiiTRGQytdEgLG3uPyK4pLrYAybAQiXbVUXJsSp1z7UMX6TJJVWMRaRKeG8a5ZbizVoKbT",
  "key44": "58FLrpCYZrQkzzejcocykVTmuVKr6YTczHswvrH7HUX3Cox1rgYDe5dpcFFi1CRfRxUisgjgum7DGxPhZKJgqE1b",
  "key45": "4GGTr5XDc4BfAEFLRTHPdN4aRH6BGq2d6UXaMYZ97GHHMRWknGgyUwScUT847cTBXHE2GNZ7umUbt9WtxVKinsWG",
  "key46": "3pK5PDzrMqVykBWK8hA95J38UYHKvobx2DSqMcwsjWWVU4qNbyrRKombx45qa4bmDWiXbMTL2R74FmJRAb3LnQv9"
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
