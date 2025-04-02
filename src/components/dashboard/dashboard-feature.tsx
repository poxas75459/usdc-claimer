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
    "5ne4pQyaRtMnq9qmasqikeXW3GqJ4jLSsABBfvUsfNLy9EW2bVhZgEzqS7hkJWALCtdmKbhbL55FCtWnvAVPFHDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jN9aPNiomcMm2tSbc1MwBmgkke1tPVSN7LfMJ5BYgnS8XNtZWit1TujSueuTAuNPKFT37c4w2eSZc8MpcfHNgTA",
  "key1": "3vTekCZwkTggbMbM8BL97cwnRaVNqRgjyJ9enwRgMUKm7jLdJPwTfdtwjxv1WMvZrxfpCNzSy3DsTxkywV5A3UHb",
  "key2": "3MJwC3nwGGwfKwx44h8xYZzZvqnAHvV8cMNWojMwN3CFhASq8GDRNu9HxjjDrgEbaLKLLxiFU7c73aDPBGB3KVvL",
  "key3": "2s6yJEAUfYVz87jTvVDjo2HKyCmdz2dUxywYpcLPv7owWtKGDpU8SG4QBCrKimyKqLAJ3uuwFbqBkqnosS5oQv6w",
  "key4": "rmVXDfi2qpz5D1r3uovEb3rMpKiPMiFYx29wUcbudC6zrrKADk34HbJ2rrTxLitozA7gfWwoVW2SRukY5JhucLK",
  "key5": "2ctuM9H9bvibHL4rYTCefmy1cN4jY4fqJeUWz9b6rZ8WW55XiKMv7NTNGEPEqG5MuMU74mC3XBKeeD5vTETAy3jJ",
  "key6": "298ujTn9mWTH1cnymSRc3Xf1a1Dj65NMPtMtxceiLeY11Bv4amDYS8pfmhHypZc8617TD7C8vnN8xrgmiMAPm6cA",
  "key7": "2DSbsurgWfYzNEiwnpGyMg4uj7Ltwpx98AbLsRU48qY8g5gZosbF95KvB4Mm5JrLktaYxMHN23EPx67ZYkHDHyHK",
  "key8": "63DY2YCE1PPHvW7QgxztSnFNNRoNoxtfT8rGiZAWxM7GycDFm46LTKsswcfrugtsgM1M3Pb1yH2C1NxUSZDUt967",
  "key9": "8PErdcXe2perJ9nDk2BbiuivKAoiwUEELrBsUxUHJ8PKkvcLCn9bij6YVH6XodHwY56VuA3x21FnmUuv2YaUjoL",
  "key10": "5PJWwbAgBvk6an61se5szhPTz4FQSxA9XdEzEma5suHiKNMYCcYpR1Dg6mBwUA6PKC2eJF3s5bMgPgE7hxbbHEHt",
  "key11": "hJxgQkyfx8cK4tVAGmmyfRqL5gY3WcEj29g6CaahAukGZKjZt9EyZ9ig6WCXGK1TdFAKLz3sjm9uUVvvTKrDk4y",
  "key12": "2JcJpSHp9UuauUwrpNiZ5vfvXYbG2xdZJ6fSnDshWFSmU5intdWiV8C7GLUa3fgCjbRTNW2LxmFiuiHqsEXjPbfd",
  "key13": "WiYD55LhgDWUACM6CNQ4fB3ecjdhNuZDRvzVaxQB3FHYA83TPNvHJJmrQ5H1EB1Q2mvtuQjCMtGXdBzQVb5LdB2",
  "key14": "zpyHibrR55vCUeQXBoGnMYqUMy9KrvcUoZT4fNXyLesj1A2MvcCdccKgyq5MRUnREjgDPx5sBzCubnpKTnrdyHj",
  "key15": "3UvTMdNEq1xEnM4GWZtUWKv8we7ggbKteiBwU2nd8MZkCfBdbwV7omHzsdTcfHaeKMF1sXcTGMXEsJy2XQGrXsSU",
  "key16": "2Yx2a52w2EJX46Cvm4R2YuWhxfzhVHQJxc1xmoPciYzRbGk7E9vSdT3bTcyPugXFv7eofYG5dahCU4o6xG9e4DAT",
  "key17": "479ttD1SVjVogYR4kK5sNRyCa299wQwXjaxfzKJdRm1Cg5cfvt8n5L3x66qdXm6HanSamyG7ThepRQuAECFNFodb",
  "key18": "2aAfgNPFtzTxdZC8nvVM7B9EHJpjSn1KKMhAvch6xXBuMtcQDumcV2EdrtuiepENJtgiV7UMCk3EWbFN3etdSoA6",
  "key19": "49A55g4W9wE8zV1Kdo2RBxNr3NW4KiQbrrGnXPfYU1mQZLxUrMmeR3vYv6na1dPu4xtSqjzzCY2VUZUhxsJ2n897",
  "key20": "Mv9s6doEXpJ86qQMxMesLoH3LovTraUs3aNaNTtVAhE7yLFw8UNx4kwKH4N1rrRGrYJJRASpCbr7fegvX5YeF39",
  "key21": "4V5Z2XHgtYtMiZb1a3ATBkHp7oaKDiVks54E6ez1carWxYoFYLZvH5wGtveW6jTtL2VgA2KRitDPWgD5obqDbpQ9",
  "key22": "5B36JZzZYgh2dN1inrZLRsvYbPv3djV2pFJAZEnkSwsGtwtyuFJ9YpMWgDq7KNa2N1jbY59VkjhRefv5yfLZb6MA",
  "key23": "4zhJ8dBCY8Vf83PPQvB42ihLGpuWvbNYi9NKxSrhuS3xDLGEgfKh5QJStKE473vqkVfrLwZTft3KPMfo7fd7uV1Z",
  "key24": "41r2zRx5GVQ5bPcUv7PGDQsXYA2Py3csczsG4RJd4F8edXvQfsnFmiXFCXqM2EWvkZU5qQxMhcd8JJb1HisYw1YN",
  "key25": "5ZgrYzRnAJwVnSnf6hhQHLjR36yQJ4TajiCo8uQHsF64Tb4iDRbaGdbjsnB2KSvpwkKCs3aX7rFkhqwGkQKNUvb5",
  "key26": "2pD9TvXamj6A9Xc2eeAg8DZ5aognHEZebvTbaHvv6FXeygjPXFvfswSj177NSD1NiQSdB7JnqYQLESMbgvZg5jPt",
  "key27": "5snEbSw6QoysXyiNeHevF2hcUpdgJjVewfDpWPs9oxEnpyfLaoMLqnHYRyg5Pb61WaTiPRd3RDxQC3qr7NAeW6Ei",
  "key28": "DB3GrxVmzJPTgMoVYAipTeSdFhriU6oU12Nk9BfyEfcVYjgJUQ8xLnxMtSKWbQcF35v9ZvE9gw7oJiZyWudeach",
  "key29": "3wwSzE7MHmnaXruATbC6L35oUHRUeUMezQKNJPhCVN2G4s8FJwKTx6dBY2tg1HXPqdiKiqwJ2xp6VDNNifC5aGgn",
  "key30": "3HQFahkHUsdY3onWTrExWrB6Gw2ELrTVq4CnoAB2FbKQwX2Bw1RnDC7pSD6Lptucparrow3SqawRLpnTRuCfgF2H",
  "key31": "5NC59v5GRF1pWoZSgJbmrRWoaFCqpJ2vXUgeBYAtJcK6JVtQEe8Jtt16c3iJ6Kou12qVmEpJ74zkEaXGL6UTfjfT",
  "key32": "iyZoTTVr2j98AmjzHD3UHXshrT7iUjWocGvAidk2f53E6jarb2MeUrnD1QTx4copNg1ZtzXWrKpSzntip1jquLG",
  "key33": "4JXrFnJ23L9RfAjcHUMjg62hJXaRy5LjtDkpyr6PXPPTa7XazoAVWwhjMUzvtNQd177X4dHVpdd4LLAxpkwJn2nt",
  "key34": "2wkPYw2nUHw1besQXm9wCYgFKvhpUHM3mremexoHyZrsmHZ7eBNm5eTrpFuwmkgtXDEn9A96jfAP7DXkHZYzgRU3",
  "key35": "gPz3nhs2y9XYeRSeMvAX6EznnZeHiudS4zekVHaWF95Ntrf42PSCw9rBqbJGZuAjVdAm1fSGwmyEPJJeNV9str9",
  "key36": "4NNoeFJi4N3r7y2L7fRFkZn5sJCfFPuz2TXkf9mjj2VwG86Wz7nprLBuUSoeSBP7iRenFM784ipr5omLHZ21Hwe1",
  "key37": "TXeMa2UCm7WuLCsrJfjR3JdxA8bqKNDRpQ9K9124NwBPv2uMJdFg6eSKmf7GF2v9yWG6p3gdc5TBky1udKPLL8w",
  "key38": "27KFMJurWat6XieRxqrVUrtjGffUFuyvtH5yGunG9NrdpnBTzmQZQeVg18FxvbeErZDSrmEWkqhCkS2cc7QbpZsZ"
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
