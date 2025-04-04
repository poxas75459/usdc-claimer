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
    "4UyZ4AEtsyiCdiCGV8dnLYwbPiUcahezAHwrN5cnKzhQUvi7RomAJnpxxhWDzuvcSxUZraUX2Cj2ExknWdFAK8Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492YceCaMSG4DREFQ73GSkeWWRapCwqrxAdYQWLhwvXwjCeVeVRHWJL9wW11M6wexPJCtqHa8YBn2m1YbDkyoE3Y",
  "key1": "3uRqucCRwwMhjCqETinzTGv9MJe2p8NRLfzepjc9wyN5y7swWmHvn3mFpXsYKzWKvKVkPWJ7Z1yxPCVw1gCptyq8",
  "key2": "28CZBfb2SScJmyt3bncZNvfZ5FaMgUYrDqvtfChM21uuDybSXZcseKV435JXWF4CcpahGsvB88ajjECmpqbYaxK5",
  "key3": "2ufXciLLkvaBnA8WHETgYBCiHPv2ZJQbt48hxZi639C81BZ5txPKHMK3y5PwKtGx52qxnfNGx9yuKYQc8PRgMDJF",
  "key4": "fmnN6J6dK1gSSBDAuYUwCHCVe4eJ5qrQWstBKTW1rtNuuL9E3wUmarJhexu6caGxCAz9e1ujNeLrrfPY9KgEQG7",
  "key5": "32x8A7WR6cfF2tkxVwudHg6Pkv3AyoviigU6PUfCZymy8NxajPSN31YWnVXpwFPkmh5Svzi6dAZJGWpDrKCPhjbk",
  "key6": "5GuJGeBLSD5b65wBR6GAu4vUTwPiX2cPtyua9JLzLPuraxxb2mw2JqXKH6YKsfoKmskyrH8ejyWr4YpViMwUQffz",
  "key7": "2vR7eaVyqWn7Bbty6vd9sA28K4s7QJSMEdiUWg76sh1nDNz3wT9xNFRD4WkfH42vikczscygnmanr2ryHXhX6ru6",
  "key8": "3vWv2rJrzApxAzvEPtJEndxyuyWa26NtDrL1SYQkeD1gKY6MnPWMuPojggFECEEdJu9G1xfJDmyc9Z8dsGBPv3Hb",
  "key9": "5xXmAqNvNa4Xx4ofHgZLanKTLDYcKqtbY1WuB5GfW31cjLAxRm5EYQYMqV36dqsJhF5Lcmpq4DZdseRCqXEkD4Pd",
  "key10": "63U5QgLRk7Gkc28a8MDzNnSefx413cpwPxLNU2BDcJ4nt4PEvKoq8bwSZz8LbTYbFvka8DcG5GixR743Tkb4kRth",
  "key11": "4sGFFD4SZwtCYxmCG6q13bCaH6HsyQBy2KJ6yFzrtJN6JF1qsuBsZWPzcULRRtKm2UXhTAY12bi2Z9aeE4mF5dNC",
  "key12": "2Yunkc8woT3WkmCntcVoK7u7Mm4pZVp9pQsnrxos7vPqDKAQ6jKzXcju9q24ZYBVkYyDjDobU3gEcyos7bhU6Wiv",
  "key13": "2zsqvkc6qpd7Nn17jNbMhcH1WY9v3gnw1NfeEa9v2x57wrN1t2YmvSdPnDzr3ZVE7ZtncGmVdw4CzeixUpgXdYkU",
  "key14": "3trgjJihg8viJrHs461KYhM4C7BCQya59qabht2yFg49EkfhzSZtqCWu2VgNke3tDs33BZRSLZPWhSfpKUkgHJLb",
  "key15": "4d3Kp4DgK1WmB8cuHpydRwSwJKsbagoYgagAUcGfDxk9MkpQjfJEJxyzLY9F5EPpBezBjrsmY3TW92aXBmK1QYrt",
  "key16": "2FHe7sf3YAJPKKFLQaeZDpPpjTdzSZmmFxgzrZjB1rN3UhrNaUmwXpXvqY7xXwTUf5ycvWwSJZhQ1T1CqqitFbgU",
  "key17": "Qh6rKUzcRStyCWPLETBL1hDiM8CZR5kDxgK3SpVrwkaUoDpmA8635ixfLvsw5fy1fWPEQhajCCSVbwRWzJvpy9Y",
  "key18": "2nYrit7QpGKm5TeyxAa8jkjF4obKvDEAW2Jh3ZMKwuVhdufcmCP7XK29zGM1nM2pJWH8HQAtSPwBJ58idKN5rmQq",
  "key19": "2oe2Bw514TtPNwAH9mzUZMDw19DZWomPpXxxSmrbiP7y53eurefrC7PFyGPMh493RTAu5yakCUvH79iLCPHEfwrG",
  "key20": "3p5WLcXKHLYAF1L2eCChoTM7tPV7jSSkrLHVMu3Ns3JzgCLKxzePw9WGn2BvUMmJhHS64wRqsBDnea9nML9b6ogi",
  "key21": "CfFQR6XY7XDfn6sZWrsHKQAUrmo486XRRhhKCpqc2cMzJ4PL2ivThaY1cxhYLUUPYZavpjLuxdfcRqvyqFXFfcH",
  "key22": "39GRhbc2iAiDL4UrJgfdWPRuuc89Gm65iftNdTD6Kwp85Ytun8PXHUXRaYFdWcMHwLqJnpLNJEJsEFRKcxTob3Dz",
  "key23": "42oFM7MQZcPA8St7bTyC36U5K1AhYHYbVZtLm4ZNMH6SnkUZCMrHwUbZwzyS4u1XGvLM2w7AVu1VHysTufBkV3kx",
  "key24": "4JfprdLiRe6Pi12rn2djRei8TM8PwpaMSiBZ97NWakivGHHqu3WtLUV1Wg6SgQimyVom5SeH2ggpdo8gAK24nge1",
  "key25": "2oSfTkP9efzgTBWCWvfagWgyb4p3zzkFS2JwzphVftuguLZuDfXPLw8s9zgoeDGB8FFvaraBexcc4Xh77YFxPwip",
  "key26": "65woUaFXxwnt6s44LW5vAmZEEHzBZuC2S1wCC1Undb63WqmZSFVAcCRPKSJtPo3yuQBafGhrP2SFs1n6ywfrvZkC",
  "key27": "5SnFeWFWgjEiwT6Di4aqixXGE1vNs1EASXpsVRuAtAKQQgWeWFS9p3qpsZuqPZwpoyUiB2ij11d4uSzRkimdGdBQ",
  "key28": "5dYcMgemC6NLsAE1UBaufbJtxo1e7e9R7PRLDVuB7cUKdUV5B8XK7KXBxfJxZdit8nqGFTSx4mypXZoJdBfxgwfi",
  "key29": "iQCguN4fBxjxC8tsT9FvGtWnLNJKv4Ytbhg9Ltg6DqYJq8ngXzrbMcjYdnrmJNmVZNXGVPWbXS171VmrU6bF9XN",
  "key30": "xmjva3Q3eMGa4ZEEDgH6g94v78ECoLJ52gTB48HZvjEx2FvGxkmVqk4oSWPBAM1H8FRVd8yRLpWeRQoYm99ak9Q",
  "key31": "aNFS7aeWWG7kiLUdnXuDqKZoYy7osc5LLt1tKAnPgTUzNzatqsT1HwUhAxrgy6D6JQUzKzLDCNKmhAfDUdVEYve",
  "key32": "5qsWhyN2kAvvnq9ymNA6xrgwnrp9GoH22SQj2PVyNCZR1pZWZLtmYbGS1yVtDbUSryzh8wjoWo9A1PUy7syA5m6i",
  "key33": "5X6SZ4J8pDt7QzPWZ5sQvnzTR14pNX2vb9cowqjMGF8QzhoT2Ry2yUVztv6jyG2EdM9QTBhun6NiA1AbCiEuC5vX",
  "key34": "5N6fjYnKQ7HE11RKpPvPrnFMYeD2uf4Cm6AgxJFFQkEFYw5iuBxRfZB1k52CS2BWpKd9A98m7Ury3yoBrDPh7gpk"
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
