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
    "3oyRsZk2vHGWanoLhiSKpEUHHhaKzrYJsm2ixe25HLukwhmvLHFhBP4hcUKpxFNajPauKWEUY6jcxZZ4DgYACGaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8kQQ8HnojeL15tpBaXb39D8JVJsi38wor2Q9xpSFshCUbiqtEwGt4xWXNC2KYrSyeMn3WKBVfg9RPqDYTpqP42",
  "key1": "31dai7L7najDHuMUmJrbiCxmicEwFhTMzavUaKHS9PCjmpHyJGETyNg62GwjYhQxqmD7qLtX9K3yqSAJ8QPh1s7i",
  "key2": "4PVeC3f2ZTxa1tB5onEwqjLWZGuoDz2A1G4UHqCkSgNqF8X8hP3u46qer9Wu377EAikAvzsUTk1DHvZn9GPvHaHk",
  "key3": "3k1t3Uta1SHT96QTQ7ZDvFUZWui1xugLFdve88hGhmnJSJztA17g8KiT35ECWrTQV2cBbb8F8H7RuxvjaCuWowsW",
  "key4": "4M25JTaCddL7NSqM19oBLCiQjxCmVo7tWh3BbB1r9ZV9Y9qafP79YXEFYG4fWyAsog9ZN3SgR2gpPN9EdxhAzQip",
  "key5": "3MmAqygVyBzh8aqntarzFuN9u8JCWRx1fGwVpMJ5CX1ZABt159D6QqEuQgKZJQuyURMFTvur1TVkBq9pdQLWXy7e",
  "key6": "5ZCjrT1c4igWctwYuCAS6HRVQqBjW3cfz4miaRSMMgzuifnQ1r6iik285vJKRg7HWSJ8SGCJnBfUNRfVMSmN8KVH",
  "key7": "4D5xVkaUfMY4EwzorqJvnNs6SrfTmyQ6xjCTMBjiSedmETrpNUf4HGvbD9ZVLhmaMuMpAocBj89mKjcxaBiJ251z",
  "key8": "5xwnNSTBWW8bYqL7QGGkwAqTMVBJtFoyzEtKTTP9Lgn5Up1rBNLd5WrX1Qtkbd6BEFzyo9Mv4eKJsgocQw2Yqj5m",
  "key9": "29aVZRxGBTuM7k3ABzntNf5oWQqGQPKQ5dHWLCJG2DoNWtmcUF59YxK5PLGDivLihCAwpSR1FvzX1pm74bw2mwEr",
  "key10": "4rX5evxC2Dv2XLhTeSWH5KauKZhnhgyxD5mvBnHttBbtLg4KcsbeQxtX9ULCKGwU7paJUMgHHKyGjfLPAU8TQdEm",
  "key11": "4uxaoVsu9ypvxk3h7EnP81xJdTKiqo2wUcdoA66kuTzNwVL9PrrSvVSBdm68dcvbRhVWC91xQRegG8js5xrYkqmb",
  "key12": "2uQcyeEFhscJFtC2Dag7EKi2rWGUiCfUg5txXs5A3MCAoch32BkgjimroVUrLxLjhE7TJ8RjvfhBwpjPegjnRje5",
  "key13": "5bJmdqKQBxnZgQd8wfbMJQf3tNihe2N5H6q6tkpgQehEQHYZ9JWWctSX6htLgcGJBoewqvwCRV1393QHNAkxMJnq",
  "key14": "2idTyrmN9ZgdUpY3S5AnLLraq2DQheBvcxUqkYudTQWZm58ykZGuwFpjvncL7TjSag4zYDhtWNYZTaCSd2ohBDxw",
  "key15": "2aTnvwGGe4wym8Bg5KQnu54atJx2Ch6ZjnJiAy9JTHFGWvg7nfZTbXUFVNDpymbwjuFTEWVXqDvAUwSAnmY5RqLQ",
  "key16": "4yARyYVQfm289ASAdhXH3t2WqgJk6VSUfXFNPd24QF4v6qTvvELZDLnn2kdxx64F6BjWqEdbtKsQn4ueBgEbnj7e",
  "key17": "34q5uhoxFFq9t82THuYoT6xvLT1qXVzVE3oLxhrN7qKK9LGD8HeMPTnvvSDQdpUZNuWKKcy8bWBC6pBgQATRNL87",
  "key18": "5hucMB6gVvV9Jba8JGrXSYTWsQhSXQtuZWgyiaAZF2cvdX3QzzacPJvc7tSGHQtzjQjuU2mZYFNwTGEgRbJbjj76",
  "key19": "28GjsJfnn2UxNQLGtCibyB6eyoK2f8cpRiir6RBQFjBzKDweoCsTSgYRfwfwdSQvHpmf8F7gsWGRyqWRSitoQZ7v",
  "key20": "5yX8xDudnFHK173ZFGNoM6d3HgJWr9YWy2wxBFzeWBpBhXbFk3UvDGpkwsf6UKBYdjsCdsBLkrWakALvei2oWoY3",
  "key21": "661SNVsSmLybjq8BCSoD6k8tzHbfR9vbWJqacwTpsFYLJvH7QDmVBso7EN66ni7otF12oULANzCVB2HAb2q4UTaZ",
  "key22": "5QixKAMNDsVTKsPX89zVzNKhYfHMznJktcTw3BFbwTQGgKmFfggNSjRAjk4h6bMSz2Z7qbb8gAJdXiP92UHPNYNW",
  "key23": "5ULbu9jkYKPVEjhSJz3BG22aEidPuzDaqfwpFX6cZAYrAmzXkGGGoVynUfAQCKVqfHJZYCVy8QEquJRKcFE6H5N4",
  "key24": "4Us36iTqPZkRbEEw56EAgfG2nb3chGVuEkwzRnWk4W7WRRLsysKMCnb8RLZfN4STAPrpa7fvkDJjwWvNov2GgHRy",
  "key25": "5Wdz65kJzFDWzeyCx91nk17JenhMZRuZjnwoTpDxddNG7Lcy8TY3DndH6jMmcVxK4HFKXzdn4UouoBiLzABiHX8v",
  "key26": "2MZob64NouaruQTxv7qKf3pvBYDRyC4HyZ4uc1JZN2rAzXo78GTCtM5WMGVd1ZDmuZEawGQHNcWv8fwoHmd6JuET",
  "key27": "5dePne2bhJyoEtALbRBu342aRJYhc4QHiSY25vxLnTAtDx5Q8LdtA7tDhYmbec65xM9wCWRBWDcPfaZFb8oCKy24",
  "key28": "65ghW8C3Xuf1N2r68gcNB5igTjf8qCutjPAk2m6BwURuJeVokWAgKriJfvRQ8vuWMc8VUtCUUeQudjeVyZWj6vg8",
  "key29": "3AJViGMnFe1zYH57Qd366Zpn9pCgwAARvBKfY81naHnCrvfrg3hBD8sQdJFxos1LWLmhwofV65EWXnwr7Qjm6dR5",
  "key30": "3MjWn6gv6Et9ATvMH1oScVsAD5bH8tUjx9tWZMbFLDdrdGba2zQhjUwkZSjUCaHkz26c9s1UCJssqyxPaZoPS777",
  "key31": "657jWfe4NAZwLfvuUJR6z19Y8bzFMsCxSovWotKKiLLCrxz4k6XNALQo2rFJ7Nxzdxw3rQvMwV4qBzPyhZn97zZB",
  "key32": "5d2iF66YKX7ERNt3i7Tm4SvtXAZek6WBWSDKAKXNHLuQzhTRE2XtiC2QW3isaZboMGxJgvLweZWeJV6BoukGTCkb",
  "key33": "3SZ7iQBSSmTpjuqtRRC8ewtEtbUMKLSqT82KfoWWodrW3cfYbXQAAJun1Um7nW22cmQyTnGYnwDWJ6iyLzkGwNPJ",
  "key34": "5BbG1qPkrGbNR7gRMAQns8pNX4fxufCGS1EkVBsuway9BwVjr2vu9gb5aSZeHoUPJJ4b3WNP1F2Qd1GJyL9JE1oy",
  "key35": "2KPemgDhYSpmTM2aAYhFXeUyTodQ5vjjHx9GL48qJVQx8efgekLyoYHCGTwsgDVEwkXVjdK2P9mV1rVpsawKerfQ",
  "key36": "4rCPWGEEbt7amowjgqPYr7sho7Uw4uJGhbR93NhdnaWvvSGcenDppEaK8WFRX24MbR983SiQrduSJHHhyEuUKoTJ",
  "key37": "5jUUFuwycsQrwMKCR8herg8P6czKYSs3UGAuNznaVuvt4afzz5uDRkdPG4wkfDgm4q3S7u59tp7xzuGhEKViHUbE",
  "key38": "3ywNUxn6JMe7TTukHxMGexWPcMiKW5fTzdqBJmMGYpDcAXh7obPe3mUXM3feHDVNWsgxTstrMkDg5YdtLWjt4Lta",
  "key39": "53vHNTkVYXEzaCFzAaNgypX49poeCtDhTfk94euWE9rxqkNt5kRzd7yRqo3Smu5EZc2ggLh7mYKGnRYbAQLoQQFe",
  "key40": "4rwKTWwTCKK8MdpvmVDYfg7nqoRxAscbrsmvRRGuuX6rPcwzaSevUab5Srw58kqHZPnRYmvC6Jokag9yDwikaXZu",
  "key41": "2qquRzfMeMFCLyrBRthKcTLsGc98UcEUBXW3jGhWaZ7g7JJkrrHfLV5hELBWAzPpbfH1uKAuc3HLhR5uWajrsnWQ",
  "key42": "2ajYhERYF5J7ZP9k6cHF8ZY43mhzmBLUumhQfwgnLp7hB8JHnxEo2v5XuRj1kFWCjq4WEq8CF9Kb1947ZBShwLcy",
  "key43": "2WsdaxsWHSLoEdeFCRzpkf6KrH4CNZ6cqtfpMaLqoD9gXSSBpM8S55NyFcZR5QxWEw7wzNpaYhuPPsVd8XUGHS33",
  "key44": "5iVAemptfE3yL9WqqeyUB4ykCHYcXXe8NXZpvNvWduXsyAdKgF9nduwSzb7E39NGKDsHsTQYQdrEhHKUCXLKwTAF",
  "key45": "5z4fs9jzTrghohVXQYRPsPGEx2e8No6VzhXemGjJgEEQgDbHtTHswdd8WYdthsEMXKuNZUonPD7nV984pHD5TJAn",
  "key46": "3YFZ9kkfyPeubgvtwxXhcvUitHAkgFdyxtJQZ4a2teBh6TZUFtjGuZoKAoGTtwHeH3QnsRSqbvPSQrzj94BYTG3r",
  "key47": "4PodkkPLiYHAx7dmtisDRDk4CxS2Gu6Ftrwz3AwiFwQcGjdS3nuG3AG4f9Hi2vKM94Dxm2rGPtotTqM4VK4UmoFC",
  "key48": "61yj4VXriF2QVg2ZQCJVqgFncSmaMH4s7XMRpU3HniFFCPauzdXgjZx4MEgXHrDqgu1MsAwjWdYXnRrTqRe9UoZM"
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
