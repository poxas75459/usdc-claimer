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
    "2pk63mGFBVRtbX581S6mUdUWKuBTy5KetH4xuemtbLbFZiA1qD8bCCpoYV8EwZyVnTKaT1tYSskxbjzQdZQfo7tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heJ9AfWzWx6hejFUjpaxU38Btv9YcR9ovztnTW2P3kCMMy9EZP45qxyhzaKSewsBjAYVjzhHP7qg4chLTkgUAvG",
  "key1": "65SEt32EQynuYW7maogjoqUg88M37uPiqBFKoFe823HCUxoW71s5wGzaxQwCfUgyjRGK7HSKM9thFejRK3UNb7hR",
  "key2": "VuVqek3nG9m4JuQXHqtTwWpU4RLQBr7v2sBmcjxVmsAoF1oK9KL5Uw9dcVCx5K3hAEBcnnBUyHApFun5zUU7M9F",
  "key3": "4g3WavaHs2aKL6DDHofRTK9fGcGWLsPwncVWvPajKpV4Mt5LnWbXXkzc7q2DtLG7DYz61R9drDJLPKXDXtuCgmEq",
  "key4": "2UYSUaM8pK9w2yishU3xxTbTxrR7CBK1zAT1BojKKazdb1LeLCP5htcFxS7LRS3btBVdBuBaPuLsHNWa1hdmBAq1",
  "key5": "hThwFz1xxPSwafhGiPTFrAXiZk5GJzC1G3VnyhfW9bK8jMSWVbKrneVSxrSW8qHyy3t8s6mjg6XNaeQ8cKGTkxV",
  "key6": "26xBiqdCWAhun7pfND67PpMTnwoEbumqruTb2YQCxEGgbuZtrMoY5neP9bUg1fi3fAALZVU2pGLKMBVuVgBQrwns",
  "key7": "4zdAE7YjM9S6NPaFW4GYgatJHVyzYhggh1VtfukrnKvEkGcK1sAzhExcncJEtfy1qwyFb7WbA3mCmqzVzkjCpbc8",
  "key8": "4BvSf3vTyiHJCsYM7qFpgsQ2qT9FW1vp9Yb2QvEpY9UVK5jCnDSvho3jzN7o1Jp4srEgeD2YifDB9P6NrnpvmcRX",
  "key9": "3QYSQpxCesEmYzvGR1GfHMer44eu5Qhhb9mSVGudh8Dyzg3tF3ihawwNraW77QmAf7EtTFdncQTgpUnU2a8zR58c",
  "key10": "4MTAqJRhzoCFzxtxoN3pJU3UpDcoTzt7nnX8AHetyhsPkcPtZTVMmN7WMTPwYZLrufKRykndmBZFXnac3dNiP2Bh",
  "key11": "2hgb8ZWRBx2MLXWFgm1gLsdHvyz6AimVwLgwukXv6dALPYxfh9znW8rTb2LH12aXnktPGpVP5RZXpfqhrhXMvyG8",
  "key12": "4s8bxrBoFqcXQz4nW44249LmQdk2HqGt4h76vXq1iuuukRJapXEoZkPUuhbpaGDSevHtaG7CuWtrLVbEzwBjvX1j",
  "key13": "3niBVKvDQAbp2vDeCzLem3YcAYAn44A3Xgih5crj23Nuwyw41RVnezFngoZr115SS97W36e3sXKs3trLrkDkuAb9",
  "key14": "391toyybzqf8UEcy28LQj1fLbFHMAAmthyJNLX2cuah4QpHMqjtTNbM1Ny3J7WnGagd9Mg3pTyyk5uzzK73aNz9G",
  "key15": "4k2xpBwoSMmgWwGGzuhLETTBSAMJ4G6GdmMQnLM1A2EbuJxKLUe5SnhkM5QtmBkuosCG53hBP3JtF4UiP8qNsBoz",
  "key16": "mLtZmdDwv6Skx91Hj3cSQ64VZ34cYR9BPvrmVPRXaGgSAw4CVakoT36hzCucDH6QzYCgNrn6RtLtKheMwm2s8QG",
  "key17": "4KEiRJHaEenVZfiqQYPsD11pjQhA87np7Ro75VbtdgDCwMAYVxfttm2AENqjUBfsYxAk9kwX1W74yGNgDnnAqE5e",
  "key18": "5bZ3gyaJokCTNufLLNMomNCYcf4QSsd5egftsZ9My7rV3K7B3kPdUYQ6EYCyXtMwXjRkRrv7qgv7SJXdjJuDWdMd",
  "key19": "o8bcU5Zr2LWxK8sY9iaS1gheYmx6jiRMAEhWofLum4ZE2giLqqjerPHKMMRkMHHJbP8fYvhCaUJV99CqLHfBPzo",
  "key20": "hDnutd2ejPhJtm1JJNUbxUwA8Qs5bDvSHnaE3sKR5n4gsYiu7k4ZCu9c3KiJQtVtmxLtcL2C7Ly1adQsMZgpoxR",
  "key21": "3tg6SHsQtF9ABSAGPWw4cXtUcVziTzXNJycjrBr4KjnLqDbgtdDF7MnuSoU6ysUYWTL6rcsS2e4PtFkqYvDvhdmC",
  "key22": "4C1FhVpSTVYEFsTJX3LHbsRMN1yzcGM4a5fDPfhJJniFm3ocpJ9eNgQuddkWPZMMPS2o2DojCTTbRZEzRUJwsEFH",
  "key23": "FW6LoPRX3xmtwntt5jbHf61NDtoyb3ojimcpJwA3uoJieZmF8mSvkgz86a1sVYng5d8kf54WXYmDPrqH1xNYetE",
  "key24": "4FSD2P1iZy6rzSoodHWuWM183FUj2nWo6gANHLDhiJc9ywXyYMKJN4Xv6BVjqdTBGwEKTuHGQbMT2Msvh1gXYu3n",
  "key25": "2e1PKwzSQBqT5cBd5S5DDdWQzUKNFxozqsjDrMaFxXqP1xXrWfQ5us53tSA4w85tUV7azdqUWKYM4dQqn3Nq1TqV",
  "key26": "2y32E18gz6s4bNbzK1uNJpBwhjbSYA4RYBonrc1mMXKTTHTWWm3m7wXqg6XCtkBGgciHgXPU9W3F8Dnq765obG5j",
  "key27": "3NBQsVHite1PSTkDwqetAEiT9BRzv1Lsm1SduTf69n3iTKevvMFVvxXR4mXKX7narfHGDsxQCSBJEJkPFTt1SQeY",
  "key28": "44HKJZKDW5WQXwM1n2uuJDqUh151D14Jq4RPELZyRuL1cYkWg7o1a55K1odd2VzFM99E7XwnfU1GbHhh8mWDoyKL",
  "key29": "2Rc9rcE88h62uWfXa6RPhcirR5oJAzWx5XkcvUS8dCiWWXZzpn87vwhPDqq1oF9R4MH6uht5ScFq7LhLq6DaRmQF",
  "key30": "nj1AhF2pD3pBPEs4zxMC7rWjeEkCc62LVfkepykg1WNqnSaJ8MUokcMWf71bLXhajioYUGYygePtaGrwydU9cJJ",
  "key31": "4V6M5SpwPDaH5wpqScD2oPpj1LxCGyfmUDt8CRk7tG4Nq3pzZ3tAp1xgGXwJoQEdsTbQeokVfDU8GxDUBvJcxnKZ",
  "key32": "5cadYGBd6FnZ13DGewqvbgcdufrmHRd8Q7QEa2F6WpCUkGW4SeWNs2CLhBsUnX84Lu65hWb8N4VQ7q7BXEWDFnv3",
  "key33": "33yXf1vaZd3vPypsFzdfhPpxrQa5eooU5rjmW2y5ToJcg4kbwG8DwUX8gc6HMqHinQ51dgpPVHuPhh5EjLsHWntQ",
  "key34": "3iU6pmU5fUgDf4KJmqyDAJeKnnLWssVZv9CcYtv6a8fTEZbJMjJL9RrRwL545h88pHrGsdWrTJPjAFthntmLc1FA",
  "key35": "2gFJK6bumfzPfdYH1AReJur2e3mNGyp1pf8AgrbBzxkWtgQgc1FyzwEdEkCHiPNyWfrYsDrGhcGZaqE3TXPgVzru",
  "key36": "QXHYgFn5aEXXNvTxSw2eMuAAnihAudtF3gqKchx9DifRBbX5KaVCjvmazmLdAZhJGUFGPSTHS6MgySfmYHjYKBB"
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
