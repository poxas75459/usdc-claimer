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
    "3ivzDgJEZSY4roKdHrJ9bV5VysXCJt9TY4QECapktbWCigh9bhuzBgbUmH3Gaw9XoC6zbi1ybSfm4WW25b3GDnAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTaSK8REhS9ag7p4camdcBSxah15SiFVjZd3qrdLmXhrxqyfpkFUUKqXMjptgW7su5vre1kLjoNCjF5zmeAcbqL",
  "key1": "5LByNiAb8KoN6RMwYdYRnPhajPMXokmQpoCh77UgWW3n9d3uqrroTQ3QNVRMHETNeBPJo35VB3MWhtfquyryWeCg",
  "key2": "uvSM57kuoGYQQKzUrzGWeRVfT8NzBEBvrE5pnR5QYtyMmrXwV2HPyRZfqn8nY9Epmpb66g1DeSt9XeNzc4NqACL",
  "key3": "57bGx47kL8XpGX38ddhk3jrWiX6R2MsXFeZfQiXutQy8bU6fe2469GYNpWU8fD8yzpmpkcseo29wHrHPyJRa3hy5",
  "key4": "2XyJnVUSCdf3LzhAWYvaBpedSgFYkp8pWwRYSgiZztBNn4S6yvfr6MwsBwxPAjjW8YMnLpDsnEdyXigQ3kU4hBGM",
  "key5": "dFQURCiFn1mxLsZpgTcwtEzEXrCenpvAkEBKyiFsNUybmTxztK36VH55cbBdX1HsSb4GAhh7FEJAWpGCT9U3MT8",
  "key6": "3741d2NbUd8yJnZjXyZHeiF1J9gtmtz5186KRekcyANEu3VqLUyZ1QzWiNL5FB6PKgERp8QnAHZ9Btp3TvtwHzz6",
  "key7": "2zKJoiUewumBBZpEbQhTQQXmWaTAiTpVKHfTdrHDje1ZvFqubBPiTHVLT4bvxCyMWrBQjKRjnPfo5gVKDr1ABvJj",
  "key8": "3DtztSQxxTpjrqKofAGH7gwHJ1nHFsa2oNzQvzP75xuSzMJCUX4BbnLdZRwXsrqqd8KrbH2QjqSyJdYX8mKirKej",
  "key9": "3yqfrRv3mDyfMR9dUsL8LmnBLBhNNxFTmaGNBbuZyuia3ti9syEsdjYXxeoqvNS3QPpEvXTaKsTD86rxDXgfkfCe",
  "key10": "5eqctjEM3tqFZTV4QbHzyg3GYxmLhyeZSsnVQqeWoXA9HWdtNspb3NCopSMsUvhNMXYw5uPfiR3ANzgLfj5SdL9o",
  "key11": "2jRm4VShp3t89ZB4dJy67zHvg2HNMVtghFi6SXs8CRuxRXq2MEW1YpXvjVYNK2Cxo94hdKHwabNxEd3ymSa62St7",
  "key12": "4aeLeKYHWjgRsvRJikCcTAxxN8uBGrZSTREVqW6Fg8CejkRnomnmotHNSwAAjJ3thkrnrN4ZJfgW7RoLHZpPLcZM",
  "key13": "3Bxi8i3e98T8MjqYBHYNKPPjWhLAxGfD4XHkqqUkMGsqGUPAATYdvpyR8tbPVdW5xHm8DPquPh9XkBH6M8Cchgvn",
  "key14": "4A5BdtCf2MAqgwsHKpVXq5cV2iViKPPKknnb31rrHdFRRiNgvLHFcihWWHgqhVRg94o3c3k5J9iBVK25DYPnQAYJ",
  "key15": "4yRUccwCnhvaJQYRKU9mymNgLdEEN1FsuciNuF2CDkhoQpo8vunupSF19Rnf4s2pcmpTrAs7Mnqis6G8t6qCmXNb",
  "key16": "5opHC1krV76MYQ6AAWgSPBhneaeUgbxrPSdNyKBUDFrjTxFLb3GHfjuxkoojyXsRRCYtUNMjsxV2rjeNcc9HMBzV",
  "key17": "3eL2nuLn2FkYYApqvWczwh52rpQ7LE8dyUg5aTWHZwDfCq68jzbKV6pZgNF4ug5yaJ1hKUFi1hoNaxcbLfiod39c",
  "key18": "635QvwaQmnuNEFCpbBZowUzbsFVEWdeVv4hC5hNgvDwfiAUxpZx4FPfhPn9muYa6zkosin8PyTgAjpqEWPwWtjaB",
  "key19": "4XL1xjnub18UQeQpgNfPBXKgSojF45aHc9iYyGYFatpmsjfGLLqNdVckdEY2mbcK1WtWNvD3TFiqVK2dJEsscN5G",
  "key20": "SNT3DEzeHuWTNiz6nJC1YuKzoeU3BvnKocXqCN3jb65Yi9S2rbYt4TSNhmjDPeQMimHSDPW51JtG1Q9k1VbFjW8",
  "key21": "AwDpBh9PUvJTLpR3v15U1mzitcrXAfKEpuuDHAhQK3U9E8GU69Xi9PSxz3vc13ridTXbRzpQu5jg3AgfRuRnyBa",
  "key22": "3Zf7u1YbUYYjWSV7sKBkonaHDiWGgdAPhT2s2MdJB24kc1apt7xKvmmxo5fvUB8j46j6vb2wAYZojcGkZvpEmRaP",
  "key23": "GprqSZQLZgJH2QbmitZRGwLTRfdyb1TKn29MGTWPasAWHN6WwJBM4KVgWxkXE2EyMhyhj4h68dEMo9LewR2KYe5",
  "key24": "4cMZfHQDAAoryYMx7Qdj7c8qXqKKdhCHK6waZwx4SWN6Kz9P5YoEDy483c5w7gk1Z9DZE925xGzKaHBPvNSc1zXD",
  "key25": "5BUkxBhod2cN2PKMGHLbRehZz8GmVzbG4ZP2RPrdzTDWRmE4atJ5rY1bTpMJYXp5qETm4bjFCz4BKRe81YhBbnLX",
  "key26": "5HWZmeFrRethUfsrvckZKdZqeAruWkrJ1esDrHK4ysqnHSBGhxkAEEvHycLX2TTqNEPxWFYJw6DzwVzHmiCDwoBV",
  "key27": "5mSteXkZP88hbGZh8NbA4swgwKY5Zshmecuege4eH8h5ASBhbYsSp1S1E3BAC7KGY4AgHCyL8xbR5Wz4eCzjCAZo",
  "key28": "dDAX32LJxZ5SNxoywbK613YQ4aTZv2JTYVXkoafbGrVEaLhcoajPkzXsaMB2Dg3kZdmXtNa7D4odqLwNcrgAkCV",
  "key29": "5idhAnw4q7Nd52wVhaLUqgxT4qYYC7fYZf9X2VZkjK2WQo6foaSP3yTJVafAzpdTRkoZ1UgDfUp9qzdCcDsSxWcu",
  "key30": "46TdwaY4Y5MjTCBkCz3km8TeF8vek7sdsv3xmRhJ5hSW5hk74TvAc4CRszqYcHY3PmBYWtsujw2sPyFZDs2JpjSX",
  "key31": "4ko9gnAirKqReLfURrZkZGzxRfCbDLftFvapr9FdZJSMZ1D9fiUnbt69xNycQ8RPytw5RSPdg7oCVn4Yg3iKNdev",
  "key32": "55BtFchnc1XmhDP2ruFcEh5Y1HF4Q1X2o2FRUXzRWGy36jVHW3z8YjyCSu6cqY1u5oaUuBMUDm9EqPcpk5NqVgEU",
  "key33": "4RrKvRyZDn6ZsUmXQPwFKvvTXVBBtSbS5ZgGpcvqU1oXKoEUPtp1MRMLqyKZPEruPjJkmEYaPWmx7EY5QmAzSkK1",
  "key34": "54DVHuN34nfPDmDzPvdvo6jAukCNuXE4TA1zrW18S2YMBZMcQNMcfCSPHCJ3qpj8m7spDXRzhrE8GaSY1FDAvNzi",
  "key35": "5b22dN59ywVacMMb9fiU6bmrLjeYfHuc5ybqswRDwsKZCNQX7nki1fX2vnyWbWjjiF5YGuUWFFFGWAMq7bbSPcPR",
  "key36": "4hPtKv2qdy5J9QABLKfwXyqW6qZCgLptcDQ8baM59xGoaSghGJnDFkQEcPop9U1x721o8GYE8RC346exPuyyRsSj",
  "key37": "cFBLRncfXGjbPrbjvmwPShTp5K9sF112oKaYSEkShcqf8jfqij9tjLeNRhzrrVy2BxoY9f9eyndEuV8V6nQpRMK",
  "key38": "4eGphvqkQkS3vsoPYwqtk3E6zG2bArkHSwkJZb38PsUYxCWQpMZ59M3bTnhZGSgfNdf5LgtQYEkaLjKjULsMxq88",
  "key39": "62QgU6qT7VX5kMiGWUof4eizc4tJAcFgk7pz3Kx2UxCPZgMhGUu639rZ7iL5Gaf9SwMdxD2DpuqJ5kUVYyFBv72q",
  "key40": "4fx6xqmSD8T88skoMDRfTQ7ZF7iVtEdFDL1wJfM7UGdyCq6Gu44YuYeMgmuzhUkk5D5agPcMmtfDQZtKFebQ8ffq",
  "key41": "4DWPVrEsDprAchxXnYHmnocDVmdME3ijYBiwR4NEy8hxePXtKs3Knf8A4PGbtrJeviK1AusemZAbcEgow4DBGuBr",
  "key42": "py9bs3BzXYW1VPRqDUL1UsfZcWs29NxGcpdaVi4tNxAiBDUVpVhwEzF5DTjxSH2Lnf4nNGaPizUPiDg4eyaFT19",
  "key43": "2MXtu2UnEDLb7LEq4K978WwgxXwgCNDFCPcLDerAFuep4JJigoSNeB2fsaP1UKvQoxkgLPigakMsBBx7MeRk3EZo"
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
