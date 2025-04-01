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
    "67M1tWL9m8R8m4gTHG7wyWdJC9wtjmW7txhE6xveSwZkdzUoJjgystYYRLZWawD11uGjw9pnMNAqYBAvgDoNUXgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bfR2tvSDaxfbBTTQGEeNWNXzUzVjxPoSLskB42VhRF9Aa7sfyLSvJnjLUPZiZFGmUSBtpcEaGwnQHvTxUvuVyKp",
  "key1": "57Z1qd4GQqD38Ai4qS2nbghNsFnRYrkeJ3Az4ECKypctFgYfBGbU5pkBgv5kknzGezaEkuMXPgsYhgdG5HWmXZNa",
  "key2": "z7qr2jiYpLTZoUYN7M8uvorfCLy8UMT2KU7avRGAohDf8PkCHQntVxwt2vtXmNytZkghY9z398aSaVkMeytCKTx",
  "key3": "4PDw8FFA1ExTiXTmUzctDDHCQshmnXbwKNzoMTfGqVmiH67ajf5WBE78cM1APkfeJMf4KuUwrQxyGnu4hEPCQwXo",
  "key4": "2dwb8hVuagQNKGK6E7HBPHYNgfUtrenRSnENmBnQ7oxF7z2mirXEPyYQA5Gr4nVXQtyGazkwxwNYFtjnPukHEJX6",
  "key5": "2bCkVkHSXGgBrp6jtRc1xyhYcSN3bMTBxQgbxkB6EJ49ea9VKyLN1BemWaxzdRzuPrD1HFSvBmxBPh5UryKQH2oi",
  "key6": "2UuCCFwAgzSgAYfa5axQt52NJyJVtNvTPUESTJJZg8CJAwHRh5wDNzWVPEiJGkv4P48bK8tbm5m2nky69tStfFKA",
  "key7": "4tjb5BDTqmfThhnEx9Fg8jqnf7qSC2tXcQUSqkGTXhAw41RHN33jADxozK1x8pnqkHVjJWkTWq1b1YAEn3LYVEoW",
  "key8": "2q9MYX68sWf893YoXNCp4hpTrcmyYXH9B7uqy5jX5CWUyYvP7A1aHL8ugnnWH96FjxnoDkgKeH9C3e2Fgcr892bu",
  "key9": "BoATv5BbvQ4ME5FBpXK7JFDSf7NQUxmHP5MfkRHLA3UuHshF6p5vPEw3WGbLe5Ajy1FBgBeBPbFYdjEegDQuo9H",
  "key10": "3LPPh3PQuPSkJRxgyjJY1hUbUX6iqtuUmX7WKh7bzZyARXSFMxdZB7mjohuZgaYpTU2WkqpkTH9FL17TD7bNoaoV",
  "key11": "2Etgd4VHrn8uy4j8vCZpEKaRQS6ayy2RJDyMMAL2gekmkVVLgagTSNRCmbPZFJPqCLJrDNmTcK43drexTcAeQ24K",
  "key12": "2yv67iz8k3D7trwQ6ooydGHhtrzFzpYWXWpS2AN5EcHGCv6zfRLpc5BEYWwukvEmsrLcmsLnJR2eyaTv3vXVZtRz",
  "key13": "iFtTJGwRbfBDLDNjdqbMVfRffCTrDrHioWZKoLYpZUnS4enMrG5piTNdECrT5m6tnfARKieNZsgiF7jkytz9Mn3",
  "key14": "4rBpnhGUg58WUD6aMsYcUGzBfrcEFUnQE7LWLofKTpjtwzurgA7JVkGs4afNSxa3SvFoqtNbS4bRDc91Ct9iWDss",
  "key15": "2M1cbGvr8qXDgi72Rc85jVynQPHczKV4LpAoYEdF9E91hUtdwuEGrrL6xB9aDRGZiqrQXhE6mL5rJeZa1nTcZDBh",
  "key16": "4eea3oSkhdVHyjPnAb5x6EWQYZdGq7D44mKX97X5g3nnJYyrmFvoZwHrVRBEquVieEHTySeTkhiMcs7ri4tY99HB",
  "key17": "5vZHR9ZK35uA9HM6VsHQTCbz2QAJ5ZeEXSz97C1g1kqunkrVyfkB3e8WTZVypFMnGzreDSqWNRU4DmqwBBXEEUrQ",
  "key18": "4HUAEZYRiHX2ur3LFGDegr9hqyudMjUe9ebj2kvWmrPkPErWWvA2dUxmfsNvU1UkQiZpdVgYTxzave9mpM8wHJdE",
  "key19": "2rHRZicrxZruyXzKXwwg9jky9iYJGiUFMjkm5q9Y4N8UEbjsBY9QBxeU1GFRKBeVFRGXAYWowxgfS63gSgfgtZCq",
  "key20": "35PfUtKMLsF72mo3EmpJRTK9Bbm47zPfwGaAvLm27Y36G6qoG69yBq2NkDsJ7ynSHaU8YfFX3kpibJg358P2zvqV",
  "key21": "huPTd5FVUXoZ91zP4wSHgYJuMjgX7eWLVcucim6rnWo9Rn5uf8F7RZDxpm95MZZTLXRFM3wAoacM7spcsXhRxV1",
  "key22": "RqSbFZnWGwUfiRjqSQvc6sso8XiG17znatjHZjiiB9TH5MQTwub7Z9QezD9KdPhotiAhXVc1y38vYJYEXj5Au42",
  "key23": "2txCHFx7kScnAiUnb9gGh2QDaBZiwpxVYJbah8JqLrMEvdEdpcWAkJumXEUFcPnb3dpAyvrbZ7cieFjQWAtAGkvA",
  "key24": "Vt2VjcQZTrNkcxD2DFt2iSNj1kWLXMtDkHyARnmjDYqCL2es3Rf9GgqwLHzafjpeekDS77NktxhLdpenWVcTXXe",
  "key25": "5YhJ1NCFBXwbGro13EwvMRYbtnGuyEMdHnXQZNdVuFfkzWgsqJJicwtjtRNVV4JwyRi5Pz1uhgUpywyJHAQfd9PK",
  "key26": "546NyaXRa2ArtfPYbKXU5yAV5VMRdVdrD2oDRi79752cEjxtH7dZxL2oFiJEuY9FSf9u2KWshPaffjQRVfZTTjpr",
  "key27": "3btozsCzn9ijQZg11DbsPWW7FUhq1TkwKfHupa8HBfrLigQYFEDmQ7jbMb8eJfeV8K3WmHtYYwNZ6cErKthAcKzu",
  "key28": "67a4557QXMUZiFs5ZRapDtY2GQEY9s2vTJW51k1aWozGUrVgrzFx4hZKgDtMWBSahTMa5EbkmH8FNh7cR2zU8iUk",
  "key29": "3kD4x7uyaN8ZRfMrrp6vKvHUTUsc1V5ZyUzLZFFGmJy7CVsA8vMJWomvk1Wk2XUQfRw76bjeLR6AZ8HDfVKsHosA",
  "key30": "3rajDHKkNRb1VhpqkVXNpJNzb9o9ZXzFTvZcCjFuEDtR4Xw3BoTG2Kt5b62iEooTah3kbHhSPoVaJuJkUbKJ3uyT",
  "key31": "EskRYtEZyuYcK8hZUSHr7xuiDRAwxprWvQxyBnKgxyAMyBHVoT74mE356msoAjaeDL9Puo8TkKMnvAPn6UcFh1A",
  "key32": "2cvNteRKVMqvw7szZGEWWTDEcadFM7ZxkjPL1YVtKQcEp8zzbg6L1vk66mp6LEDZv1VPuosRuvG4h1AoAfDTfARu",
  "key33": "2cXpQher47xBPWscC113eDLKBZFTiZjXHyX5bFd7w6BNnQm7crRXnxQUK43MQUTh8AJNWVncwYADVLXLFYnX64U5",
  "key34": "4GreRfPxwH8R2wvVYiqhYFu68MCLcfufByjcZdqg9VYmcoiV35tagBpWGoLzitbKTUyNkvtFKwYVdumkRwE8DaQZ",
  "key35": "2QAvcvwcH6UhPutehshrsk1YLYRgMVDHWUB8sEt4PYMnDvnL8Y1cA9HaVARoh2uixQcKzytzj7knwjEo5xFjiZUa",
  "key36": "4ZqSyAQbMUHCGTz6x75AaNEBV3cwU1JxGb9vubG8y3rfR8CrkSMckqFSBYV4RPV35Ez2RL6HPsoJBw7xtuujfgZF",
  "key37": "3jNPPa3zLcXEi8YA6scW7L4QHCcugWML5Bu9ckZPR3E4DxcV1vKB1SYcMdSxkcwSavmJQ39RzeaQ9qxnvKU7V3bJ",
  "key38": "3Edy7K3aVxniTmUJzChaTj3k59yajGbdcmkj74yh1b6pZrjozWQ2VWGuwxdRm6tcqb83rhcJYomZoTit25ZvGxFu",
  "key39": "2EQi2Dwiz5BuiKHQN7EgFSQKuQjPsLHm3Pzsku72kBKcLAo5CJagWvcUCL3ExJB9P1eS1kH3WrBpZRtREXVe37UX",
  "key40": "56FAinoua83Co8e9Ajx198itSkVjLQJQESt8DF7Th8S1TGbJNtHBcRSMCpGppeQ1ygX9zDJu1NsPPyXRHtDKVVc4",
  "key41": "5iXfkF1zrHdB1KYG8ioH3AadexKTm779WJ5AMo6ZJmTEQ8EuhrX3SRDdVPZaQ42TAE5hjVcwjAqK3kxHaGZBzk6R",
  "key42": "5Tg3b7d7WgM8fP9EbX2ubSSLt5BKbZ1rqh2oC35Q8jufuLQQwmq9EfYJ2BNTBhzXUSFEBj39DEvnybkhx8BpoNRh",
  "key43": "5Cz7gcCcDnoiHxDpuy1wi4nVhpHCsUvEwDiBZAEZiFC17yjGMquctuoXrMFAXREGzTKybWNmAY9ASAagjk16zBF",
  "key44": "5FLo2wsza5CNDXt19t8KteQpsfQRnHxZW499V9fFA4DrwJrv4Fz8RLm9hBJBcWJHboFDycSVw3aABFyeMt2LdUeH",
  "key45": "47x8C3RJjwBmRsCW7WgHnEN5ME94muk2j1TGuYjfkeDnwNP2g7F22eopNSHn2UxjN435EpxGLZNr5CwVgnHMcBwD",
  "key46": "4Ko94YQUzCUJxJUToaZtVqAPcmKVqsoLRccN4BmmSgPHXyh5Ckb4mVVLwoS4uFiPSKr8QXDrhGQV1CdD6WhrxGKy"
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
