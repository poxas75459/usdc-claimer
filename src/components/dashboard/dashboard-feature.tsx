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
    "4tR4QMZV6NGKvTENAx71xAjeCMbvyqBZJHzd9PhBabqbGSiknbij9vi5wK7JhgDKghRcv8ZGCCv66PsW21swsA2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYaMyPVVh2AUzeEXgc73MLrUZFbLkSd1UHdL6k3jsFtNP1UTEZ3dHtUTB1TjJSdphn78ZTxSeFjAmhZAFwbdZm",
  "key1": "4p2E7QoGFWziN3tM3ZKhTXRB3ygXvq3EPyaLrYU9XHUyGNrTKdsSdnakpb8iVDE6eUWG7Bmz61DDTVgoozo4GTKP",
  "key2": "2fvzz9i8SRQccMTQ9de6AH7LnBjQ9EtB7b9UFqRtd4R3vA6VdtdEfLiWayoasC75xp7Y8zvQnx79qTHJUmZMxxmL",
  "key3": "5A8rN8JfhHcDuMt8hSNBMWPK86GerFLUha2zzE4ZNNsufppCBALjW37cyNx6GTcJqekF5xHhiWP4cuXgnu59zBa3",
  "key4": "49sqsGaQYyghcip8jZCE5ko5vwn3zrbdJyCwvbykdqBYu5rPizkTUub7c6VtUnNQFmvjazpfyGGrrQVXW2LLeu8f",
  "key5": "2EgiXfPr4TStJjLdPQJJAC6DN6PP3Knw4YfJrZk5zgEX2xFcPiCkJJ8sk3Lom1TTddtAmXJmDM3zvTGM63jAWruz",
  "key6": "516J8LA37moqjyFe71SUPUz1SpgfZEcFHaBXvSskvKPxpQQVy3DBMW6TZJLx36N95e4NkfpWr3QbFzLTif5W8a9k",
  "key7": "Q7c4pLvvXUEEy2krveatmqZsrnY5DQxS3cWAcPyKQSWwJg7JQuFNPVro79R5pLpyBJgd6uMq4c49a8y1kjcPUjh",
  "key8": "2baLiznrFX4mYgFDQC3n8f7edA1RYAKBxgb14HHNPqU5wMG1yT1DzonHSPrPsSy8LW235W2J1av3q4W71EFwRxWo",
  "key9": "3k1LTyYvZh3LDRqVP2cC5LabnkaBCGQiVrDJbMoe4GT8bVovJ92cRzkHuePNLzkymhg5F8LDwYmGjL3fV8S2JdpK",
  "key10": "aweWkoRJc3MzdLsbdigAoNmbY8ex1FyLsEDwuyruN14ZzjXxdizxkWzEeNM7Nne3GXMcreY6qVkT7KzYPrenrL1",
  "key11": "5RSDSFpL6Yt8jvEe3pmT9x5enZeevYPCiSX23fBGygijKarwhnT9knhHJuRrFzMSMMhm1fwUK6mfJYCBSdgGSDAJ",
  "key12": "3MGAJox2B3itVcCb4sJNYAVvwRmdmvUBwH6hE9vAsRRi94Yfz5na4C6qGbentCStXCg7ksh6huAD2MaoDje1hoA3",
  "key13": "4ydzdxEvCxH2YrVfGB5AiYTrxvkke6Paes8ywfeJwPPNq2ZuBPwNZkgWPXJ6r9w4towwjSbWmF2KgHzwyZ87G3Ar",
  "key14": "2NBbGL7J3fBhBWnoGxdghJNbxyrApMFD8YhpUEy3J8PDbUsRhxM9Y8F8FY6FuNnU3FaQVth8zskwp6ttps75E4TC",
  "key15": "5LJWzQCpQZrJcKKzDuSvocL2hDXmLPyopBE6qwRtZnVbmneB57UCJrVt3p8AZFKnf8N8DrKKSdEQc3BWG64GgYnw",
  "key16": "daHtKsGBJY2rnW6w8gN8sVSJUSg6K2FQpGkCnCM7g9M7xGoAoQu3jT8JUcJh9L3JYDS7n12yNqk5i2uzN2zJHF7",
  "key17": "5SD3x5g7Xrv4LkMpjKwmFm2cB3xjN1j8wYmsv9fyzzeXNtSe3vbPztd1GNmYsERzokACDdz7KNNijYpU2b2qFjrt",
  "key18": "3tdHfMTg1S8xqtMT98JtziERaDqC63eNGRSJjv8RuE776bCtsw6vWqJhTamKJStGzjTSbLxmCu2tMzpvTjXNHeAH",
  "key19": "dDAGmZSYxBMjFdLdCPQ1gEncTpBLRR7Cz1ehw6p8HfSqSaDqmBNdNXCujWz3mAnVyJoZ9UJkP7NC3QzjBKurCiu",
  "key20": "5Mt7e6eg6pR3ZxgbEEXNqVt6q5yVgRkczquhrAAD75NPdH94aiMdDGEVjroMeavy4MjZzfcyfiRAWgvxDzKqUDxP",
  "key21": "4BYWBFwBKAMvJVWGSDDWGFjsmf3sFTQZMFWqYhShxX2MYkmiGsL7hAFn9hPr78P9p9rPMRRz4AXX7pQeGKxKzzCM",
  "key22": "534ZZgSmVtRV4DhtYhTMpY788HVd3NNHvhm2fkSGRk62DGLFzWmpM3ypUye1vkDSEzo4eHosZW315es85NncFLhW",
  "key23": "5dEG6t6BpmxFbasYzwuDBCjruqy7sxBCXCxQkWfkbasbcnADwiZKZwFKHYFyXbHmQdz55m5HSvKYZYsHSyx8MaUX",
  "key24": "CVkx7MR6dXZ4TGe5wUt6xnjiPCmCY6M6fxKgTGXp4wnZLBn4NLf7MGzV8EV7Rp3UYvU8VczoPbCTxdDcY7Kp7xQ",
  "key25": "5qQT28wGS8FYvoDSXEa2BWG89BYtLPNkxLVibAh6AHcudM9Tc3GgzLsQz944aCqHBUYgANLXdMVH4W5b7qNCNMHX",
  "key26": "BCYVutdUrk84m2PsptHAMtCxV7WZEYurYVhcGLZ8Po5TV3PsRV3pmNsTG9Yauvs57G6gL5oxapsHd3N7La2N7N2",
  "key27": "5zhs7koHsiXQgVWLMaUoriS9xvKkN9q8qGdDUWSDYjm1qmcNuqxSbeRB7KTA24xwtAYaq37hKPQiivoG2tUyLoTW",
  "key28": "JfuFPxemVVC3nupuGagNoo7mcNrBuefuaVRGf3wBbtdMr54T8FJy2E9RSeernvmjAhjMChEmsYHKGvS6idu4sfS",
  "key29": "2Jfjsgc2EGQDktrGp2NDrsKL6XH82LJWTUJcsrE9bvYPR6qhucbuv92x7o6iSDWZLy62mRFQDHJ7zQhVf5Zr7HCZ",
  "key30": "5SXW2XbFWMoJFX8EkV1a98X9kQ7LtzqhbgVPMA4eeaJjYXg6MzYRSVAMC1dGGCndSiYguPkMyAJcZcszVR2hjk2D",
  "key31": "251ttzfcsqB9qwWMmhHR1YDkqXEJc5zYpAcNy89oz91NTWmCPZyHuw6TH3nVBmhBswDVYd5fyHcsFi5tZ8X4nFE7",
  "key32": "5RYMNRfzSRB1tPxW8SXteykpLSaAWiyj7nhZaHFBVKpLFGKeg85QmZyTFGqNtfsLnsiPNbh7ekCEXV3XUCnAGree",
  "key33": "5RtvFH6eoVkXLG5rsSUw1kx7azWMTQz7mwNiD264KnNhhprruBFbTANoneGovzXLh2Jdmbk7kA6SfS4i38KZnC4Y",
  "key34": "5cSh7VZz3D2uVnyTvrUwUjAQchSCgys3YR3XGgGx6v61QPpfXGypArFZ1ao9FNT9ZDLkctCXxjpVta34fuS3HtSx",
  "key35": "5Er8XRGZRLJefpLPqgBmLVpugp2JQwm1is5ccKUudzErnemGgE2jUwF1zckNNfpDU71jpDUiaYnXz7GvSVfqKXJk",
  "key36": "2H4DxVygY8rsxfjJCuuaRxcWxHDzuPQYG1q2hts6Xx6y4ZPNe634zy7NvPAAEtn5F8beugQRLk3omgMYoqaehXqj",
  "key37": "8hyRJzxM2inWc5rYEn2j3WuJZpSo1rtVoNquFAqp8zvj2hFrUJt57NCMxV2e5dLuFW1p3phLhFUX9gjnW3XMFRy",
  "key38": "45fDJLJt4xsseStgXCLgw6RrzpaW2SWq5RtmttmieFDjfnSqF3vznvYDVm4EUf3xjiRDrbBssNN9FWLgL5UPRomY",
  "key39": "4GNEEdkk9BU2ia8vKj9ZsRbXWjmcNXaMrhHcuNzaYmqbAQ24Soqadqf9oV2G65H4m3o2kTKqvFBCoqC9nhSHuXmJ",
  "key40": "5xGFwmY2HMvZqXhksnPB3nqdMegXXcGv4gxvHReuU1iXP7WtuLPvdRethFLmsW8E9JhMFaeZdcxTWFGZGctqvyxy",
  "key41": "2knFVUrgtDe9DxBqtkfPJdzSrRbENos34UzPsgVxZ7oBWJrwQhg3dpYSocQrWGbKERxxYaFbQLkRJcFNtEt69P2q",
  "key42": "2vi8sfr117ScdP2M7FbW39JV2HqxFZgkvJEjmSeF2VizgU3xP6GVnDjjjYhnExp3G48LybTAxCjcwXN5U55Pj1Kc",
  "key43": "22WQ8fS6EdXkQehZqQuJd97gzLV7fedP28kmDgt1QcGxoKAJuauHdCpH9QGUDc4eDVeFRe99as3yXqtw9jB75qJc",
  "key44": "2HKgj5brAvb7f96w3sGp9G4mJVQFS8GHE9Q7g96HDrPVv1jqDJ23Ha1A7jXa553NT1iFUnB6hBGfGQkbJLC3DFrH"
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
