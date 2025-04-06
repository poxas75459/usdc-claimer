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
    "3K5w71pcWt7SAPNKxvj3jty5dvHFDiJUMssu2574pK7N3GcMk2UKm8W1QHkAG8UCCH6FyM62qAVZc7GPYZ7zMb4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HBcLkh3QQtMw5J7UpiuyRKjW2PceBhRgfcjkXjLNge1Cw7ssv9VGGV8T53vXoDCi42nin3YcR9Pt1qvo79psbV",
  "key1": "3YW9znGMgFxeRHz6o4VHQKBn1u3mm5anKnDSEjPsGHRFUPa9mKdvy6u4Ep5FMKR6gWU5eAgPp8SP7A61H5a4ubFz",
  "key2": "26fP2dUauFG47QKRj1QhKzhTH34VGN27XfyZzPFQBCjejFMVtwwT27fRWFihYsGiF1D2iABc4WAd7Y1EL5YRHKDt",
  "key3": "tGmwW5z8xhegbkpoQHvHyGbHwgU6G57ELriDTKevm8cJf4in538UG2B7Sg9z5rMCTHQCkZyPbnjMc8aHChk4uaG",
  "key4": "5dQbw3Mbfb9Er2rVV4bzsiPKJLA3DegFfBGohZCZics4g3nuMRySqZQUjoB82fLQqMzbkQm6LKWj9MXSUZ8Bs9ud",
  "key5": "546y4mnyV1JtXv11HeWUuCeMw2sH1243oqr5dXWdtsYh4kG8UtNQH7ekPcrCfvQfALMKw68pLHFozXcnfKZJWb79",
  "key6": "4YX24y8Q5WWRBowHu5dRA5i6QaoYfRNivfiEUQFKFBfvCcGstcLAqsws4YjT817qRTvXT5JBVk7fy5i4VtEYv9BG",
  "key7": "2L69h9BMf3HGBihAA9P4v8VKeRzmXLJiQ7rtv5JW2JykKKAJyLjvNkDubwcGbpbRRTVY6f6AKt25ngpcnwSHkPov",
  "key8": "5sJRpSKTkoByPm7pTkjhedDDECVKLVC1GSfUAULHBRMeTNkvZRXFeMJYN8NuoNLvgAaJv1B6SsMyy2P9iX9USwkR",
  "key9": "213R2dkpFcJCD5dyAzteRqcPiBpGRDnGByHtEmkKcDhQCXTxdMboeiWfAMbQGT2UX7eayTY2u4j1JtJQskK7ujJa",
  "key10": "3tUPtd7zehNf2Wcr7dh97MQAFkehjnKQJcB6hNMeWDFmmKZRGaPPXnnYRBG4VTTwuZUpGT8moA6kpTc53HsuJkZN",
  "key11": "4r3Tkgp7mtW8c3KN7aDQNZdqYZVdT46xNwapcrg1nB7T7WnFu4r8uNwcpP2ThbAtVv9HBaT2MmhzVHSRCrBCUpBU",
  "key12": "3QGUqn3eNjEcHiFWw6fZwGQK266WwNCBNgNGg3MALXZgaH873ZCpeuugYuTjNMsXtf6t6uvR6X9Pa3bnpMNb5icT",
  "key13": "2Vr4jEM4QeNY2qbG7kAGS119ijybhYBn7a86UEMrFtuD5UAxaMZRBbPtJVLUStaa7bPc1b6NdxDGqnpqz3shPXrE",
  "key14": "2Uvfy6xhJZxPFHCgHAzudGEEYFh6bteixAL4Zd1P7nPZKXuqpkUbWURqSFyiccKfkV7ZCBBBDAuhM8pzLB4Tz8rf",
  "key15": "59qBEjiEhihijzPbKfcsWym1tDuFYkG2bhGRvAu3QegyWP4vLSsHnH8zqKvkSG8uVC1cFb9T7Tgq1cBb8JSKbdPg",
  "key16": "4opHow5JgueYGimoausuGakPWsm3ifPk3PCKwy6TT2isnq7P2b6pMboRvkvLJs7KjLUKcQJSfRHjzJ4nBLwtfdww",
  "key17": "5DaCNaVbg48N9ZYMovspoXqwuN8pwXLTdaBw1hcqkiNLStmCYCzPzM34EsU7arVPStrTRSL8vLCNiLGKTbUacYXS",
  "key18": "3hKQ2zbu4f34XtXoPjzSVMff12pr5GKMsmzwdVAmaiExpCNatX6zuL9C2LdaD3MkPiYJ9QQbPUo1KTiinyEQAftk",
  "key19": "3SxHKpBNMdBMJcQKsR5TZU4jKqNpEtiqrYts4E8id7XD23pH41GVL33Gk9wekcXsXo4NrhUsZyTaeozhvNuUWixz",
  "key20": "4LSWxwaN6jo6qVQ1KbdUuSvu5qDnosqr5377642NnXcMKdXkwXGP3AudxAfNGP7ncYMEqTG5tuTkH7WNFK4dtUQY",
  "key21": "4GyTHkKRWLnZxyBoWomynXu121cj3bDSQapMF7cH3qoMfpfrtDMWPxX2VvRGRM3KHbfSFzCU6nQC8DahN4Y5UXcg",
  "key22": "3JXoutqhy5fJCatG1xNeLU9vNTm8Zwxv6BjX4GxRM9svEF2mba1z7ZahZFSabCmeL8KwLAb1nwzqm5Si1rhqkPF2",
  "key23": "5eD3odoEB3wu5PycyvB1By6UtmNKL1XYR4RdxTxqkauAeTZFHXFx6wH1R8Z7u88pFCbTcdseRcUoXr5TTuGjw1Ys",
  "key24": "2NJjUizrQQD4b9YAdRKwr6tbvWAyKcZY9CoW6N7CX6wm8FvmXeSyyGpoJ15HyRm2hr5uGVtvYnfrv1dzaU54xfmi",
  "key25": "2Nc1E6pwnherNmJGsszPW9MNtX96taSyjWViGHpYVxHEg1BQTqjNnEeYLnTDwMdRw7LiEHQ7gUV7oBjnnZT9NQ9j",
  "key26": "4NhKezT7jJnWDY2cGcvHZBZUeTjzxiAuxEPJbrcozS1sPpe9sdLGwK9Dd8Lv36zDTR2G5KaMvzDHT8G4nMofyaDX",
  "key27": "28VwNjqAbyTKTYWGvgvGrN6h1LCmugtUNHfRG5diXdY3czFnpmEEcnmYsNufHcpnAE89f3EfLozxNm5AocAFPcpa",
  "key28": "4yqDZYP9q5PbMdPjBH2ukqZPDETqTEjSeU4xnvwkL4ZmJa5dL14skQL8PwZ4vYHNhG5R6kmab9VwXEHba5AGhb2i",
  "key29": "4BvDAf5LbYi6R4Hx7QsgDZ9YQ3gvcs7WJwT5btodRW8fq5JV9c5u274HNJu98QYEzrb7jUsxZDBRB4GKbQq3F4Dy",
  "key30": "kCsWgNkEDN1f3jiUmPtxVDFrVHaCSxU1VDXfUtVPSMHuMHc5xoZFAJkqAoPLfENVQfazPo1FM7Az1uPj5kiBZNY",
  "key31": "4kBSQZczwSV7cF2VHVv4tFt5Gs7TKoidrSvurdkGFLj7WDRH5ii3eBEMtpGbWtSybcNrLefDzyaM287bTSFo34Wo",
  "key32": "3BrBtAYC1jLgHynjwWug1TPbjgSTPwuffarYKKM8ptRmmcsCxN6qFemFYWXRHZ4U3CYDP1CG1vyRVqPXtCQimTqz",
  "key33": "21j3BGVbe1CW4cNezL42dax5b5eGhorZtQjAaEGL6xdubwL89toVzdDQn89uVweawJ2FbwJ32aqGc9krqC9VVDgq",
  "key34": "5L2cc6Y9Cwy6NUSzxKzCkKUr5tetnJHgdW1RF8hg91Rk2FsEkkDbEmdtK3bB7mNub8q1QUxGN6bSvxZoxBYraVFd",
  "key35": "4QtuJHvKMRu3JPTK6KSx1Ypzjsp7gVtSFJ3fPoWRSfCkCastj6DMiAhEgwndaaXyy3BfRRTf3HZiBq2BNyVcRnPo",
  "key36": "2UmRfxvkP5giATWNfSjBrE3tEUVQgGzh1Eq8cdCCy1zFEguKAhCoRNPabfQfzjDJwzDb9q9UjwkXGmJhaZJSKAR4",
  "key37": "36Ck81qfrMQ2rAzDQAwHCr2SiHDfN5yFVpKebWWASpC7u17ifPwWgLsxo4vgsqyhp8UJXT28Xwq7Fsi8hBggwdvc",
  "key38": "24XqziWPV66oi7pEFZvmXq89BqrF8hq6wncCWmnJh98BBXMYxANAF19ErGJ6UTCTjqWzVwQuHmHDn3oysLjNWvTh",
  "key39": "4Uje9sFH7mw3hjbeZ9h8B75Q7ikSaKWhVNMotVDCouvvdUAkHAmEUVd13YRsWPD6pJHGz1AReBUsPmUx96n4JzAm"
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
