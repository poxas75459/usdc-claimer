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
    "sPmCzb6ZJugotyPtthZfZ32ahRaWfePPgV911hsugFjZ7RpvvsiH6PdyvNsyZvfQiDA6r81ASS7ZPyWGXp7W9VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VDUVthG9HCzxiQUDsqTU2jBvs3opmpbkWgb6gVt78VqBXektLfvzA5B1jQ5efqPBR77xJ1CZUD8v5YgcdaXYnsY",
  "key1": "3hgDYJ6JDiVvhmW65XkZFRU3miQLt1QwnEsX6iQHNq3RgYDmMjf5UDRxpK3MPcfqukAGMhcjZVNy1Ew4L7qUZivz",
  "key2": "3RJhvvNHNKgSWspFakMuW88Nq88DbFdQRLDDxEVLJQyUbf6BfcD1RpfGAsBUFTrCrRsojARV42yF1EnPkArqHkhW",
  "key3": "4SpR1DeChjYPZhJH8NCFwxd4a5UmDS31KmrXMTbQ89rbWbkcW1Gn3U4HoDdCdyh64bNkBiN91o5j4Pq9VCA7wH51",
  "key4": "551bGc4HVi91gNtzr9tDGtCXXAX8Mib63skdnDpew8xo92WYK9qjqtbj86nNzHqKh67zzpQnyG75C7iUxCVjKX7u",
  "key5": "3BLvr28XcC5BDmbu7YVohPZ3pY6L7toVwBqXogHjG25W8CCbDP4orjeAeznFMMzQJKT1F5tDpwq9vFMpBSbPvbEv",
  "key6": "4e5rwCsoACz8rt4RUvVeE15CMj9W9eQFchADYBxgxoDkKR1GvCmybkRhBrFZ2zVuVhn4NV45BaTCpE1aJXMfqTUy",
  "key7": "4TBBMmbtHhJESJqANdDDiDgLJoZbFV9SofFrwqEwP29xfYKeSsxGLSbryVKXYAMP51eufvLzFQ7PhZnrc9QTtwmF",
  "key8": "wNEdJPQfJ8cZbgtZrcqpxHTYn8HjF4GobtWDVPiY5hnesKB94ZCEoBGvtPfobrehYNPLYwC8cEtuAodFqUkLAkV",
  "key9": "57oXRziZZbjXsRjQXG2WPTyL3JqJ2NXy2MmLEYqcEbhRrRvvXaNPihzxkwVSpacgwT7znBrvYeNtmLP667bwSyiv",
  "key10": "3nc7CkzVi8KZDRkRrMBfijMiLXjgkS5jzG2YH2Qgk68CVfuz7cGzpCfQh56d2V5SeKNMKZfZtWGYovDZDZT7WnWU",
  "key11": "2wrQJkJwWFeTebvfRKeQfZPtDobXdb3sLTtJmJwoh6TuXShx4Nc4c1WVbpKvneYv33tXZKC73WcfL3ZHAFNbkQhw",
  "key12": "5vR9LYzGQDKs68qBVsrhUjcQsB2vFqcvygvsa4w5jVQMkPHeReMJUcnvQ2o4doGaaPdqSUdRCTE5ojMMSEAjupT1",
  "key13": "2Wjfc7nus9dRjX7BCDxcfQuFU9gE8CC43MUWJA7WC1MKa4WPZXZEBU2ipuSnnjfYSdBmff4ZAfXWvgoESc1NNMC4",
  "key14": "5MzSRzoy6Xd66HGPchk8zeGxNJdnSVQQN2tJer7jiUa7Grt664w7hDV1uMeJypwpDx9QgckecVWgTgzFPXYMvfzN",
  "key15": "wxuEnKWiEBX8FgcJNJTNfdXsR8rXhcWHsx8pJYrdEJHT3SmaTotU4vZCYJHLPmh4sfQ9WavLTWa6HUWjpHeitBS",
  "key16": "5euDjt88QXdj1k8kpcGPR1vxDpN5qsxZBhgPeC8fvEuofJjxGEKdTsd3Jr1GoE9VZUcza4VL9D9jpb9dkpBPuzjB",
  "key17": "2HHNr8nHaJtvHUnAuvq8JiFKWbMEYA3xpz3qqmYhoAnEwKY6GUGVH2Bx6YCfCiK8WQZG5ZHWehqsCcHG96KAdbwB",
  "key18": "F3ipB1np5wRJsCizQgHVJAfMs1WE1rB7VnoJJ9uzGnc2zjXFxqacjP2TGEPdgdj38GiLrAqYYP7f82uCur2Nc6K",
  "key19": "61ASD7mghWrAz1ZdzDc7mtsELq3UncKByLyYqQ2qvaNWDhpAqeWJDgcrSX45Fjjk7cQoPW8T8qsru9UwGZhgC3qH",
  "key20": "4oDLPwjrsdLMPPdojkZ7BBbJJQXR45DgB5FixyQonCWV6NZx1MUovfDsU3PhxeDXeZgbFSFwM35hvAkjYp4YRb5o",
  "key21": "xhtGSK8pEAusSbHhAE8Mb76PCQn5LnbXeryswk27kT5YRshvQsRESv8EECBJYn9T33NFhFXK8HX8tyeewz7xRCj",
  "key22": "4jnk9uhFTciL6Pzz1bdvh4oqgtiCjdbUpxv7UKmeHRLMuCY8a92AvvUpnQimxoymD1HAkA3EZF9zmg3fiZU7GqwK",
  "key23": "3XvDtEhW9DQ5sred6iZw8nBJE9mwchtZ3nFx2JiRWniaorgx7kur6v3NcEMTnWe8jH7vT6E2w9CbiTaQN6xyB3v5",
  "key24": "2Wt37DvZUjKpSAM2gYT4po33QhBnJnQxTPpfuCsrMECXciPudMZizsoRE1x3Y9jWySQYJicH3vrE3exvdwpRrr4G",
  "key25": "5iYE54yrhgmEUVJFMdSM1EnfpxeyEnKtjrRGdZ8fYiN2UnbSi4rAAU7kU8NwhUG7SmEr3LP6oktEYSKoUpRWJ2Cr",
  "key26": "4QADynrNevGM4PDiTnbLTXzjgZKuzAcroMPvvikL1VQZid2aVPVCoihfxdLDmBQJ85mFXvyU72eHGTLTbzmeVcMp",
  "key27": "4ywBGAWewHTPyU5eX8vnXfHdR5GBLPyKbDSFGvLjtbMDiKhQ895c4yD3zSAX1Y3rJPto2FxPZ9F6vRDXgpAHEZra"
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
