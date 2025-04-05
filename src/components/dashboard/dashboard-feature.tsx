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
    "c8n9BkTrUtrnqP8qstjXUysuihj8XUbADxHqsdmKFu7U2Fv2TCnUNWpJc271Ea5sF4i2zBm34hdKnk33vvLgjfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCD4uaCn5Ymv68x4hQHXH3H33iSWyi3sSneii2bbX8XMjuC59JdAEkBwUydvS7s4NtrVyMxPPBBSKM5m529F9cX",
  "key1": "rt2rMq1fVVZAaXDsDodkMU35WJymEVfViJ3ZyQTEHv2kTshXKmSToxP49AnX32GwjZTNVynhdDoL1mV9n6p9tgm",
  "key2": "bXr5NkZ577zKPmSUbLEAgHz2URxuZP5ZPCituVAfpjpB5wCo6em3VFnmb9yKbZfFXpWzKCvFxZu5E1txmmfg9kw",
  "key3": "2ZG32NPBSkr2NaSypmvcEkTSS9BYqMwGGL3DwAzCrbAJQSbAaHFhW81mFXjTEPECYA9DYRzxyPuFs4wtbVqhAsGm",
  "key4": "4569RVTUWjo2TsB3YcpkS7jcMZ9ZSppiBtQYRB1nh5FV5jGek31oHBVzWCE78ZMVSbJrY2kSgiqYku7jDtS4QdiS",
  "key5": "25N7vgtfTE1ZuAwyCpzP9vkkWRehM95EYvxpG7EJs9j1E6e53byBCabAT9uDBLyG8kPdpnPR7JfMzFU97Kgxuq9v",
  "key6": "3wN4BSFgKFL9Fhxzk5zJ6CXFzRLohjfNyDUHxPVTKXTRaKGpAAy4rvfXXTvZNVTFvPDEkz9JMD4yDbQBAPzP33XR",
  "key7": "5PaGHfVAVjjECJiAtB4rKLZSgStzWbTWtEcJhk8XtcAZYsGkJYxSbpSPZotkJGBnU8wEdPk65vPN27Z2jYD1i7gL",
  "key8": "3MKdAtbE9WvscuNj5yJyVxRFM4WN1hMgf8bLwDkh2exYjVQQew748vqxduBjw62a4HfjgjDm1oHzGaqR6W4o2DYq",
  "key9": "oQgpJ5wpEcyg5H7uKydopiMsBcSKLZrnB1jeLJ3vwAgt3d8DC6282Fugf1KTWkvRqBXmrpqFH2au5TTnvvqgeYq",
  "key10": "3hAGnK5WwU283PJKX3x1VPNWqtV6TVUtshpkATJrp3ofTugeRC21ME7ky44spoD6WTSaDowEt79igq527CB1F2Mc",
  "key11": "5JfXXk8Fx23963WS3vscE6Jp3Z85m6De9oV5LhsokJAqozGmrBHK7Dy9tKSYnWtNParRXwCL2a2iSLeP3jFhBFmm",
  "key12": "5ynuVCKekAokcmSHLkh893xwCpNwnsxkhfLeJvapwY4eQbbiPftYC4qptw5ZDGoy1g7fXWx82cs3C2jXroGf9vx8",
  "key13": "4LqVJDfmbY9okyir91eCGFCGjkK9sUxyR49qVZA9mJKwDuMEitzfKJNVSEPErdVJzH8ZW9JUkm6FV5pfQpm8cZYj",
  "key14": "4NKSikj7eMmhKGuW1DeSeCA1qbVm3SiMnsM8aL9bTFYDavBCX33mLi4Fw7YvHENrv4jTPAWnQfYMUSS6VA6goh74",
  "key15": "4xQGehuMTicnQqtBzQhtVV8dVoVnATPiXeXoTUPpvrUqAbcBwXgu5Z3RHgRZg7JiLAqVnT51eenVYzZa3KjUpoYR",
  "key16": "5nPTiHAmg1WL8SHm5rqD25x5MCWuc3eptruTU7n7VUiWTC7gfSmTSvBcwCrXbWdgzddgBFKPCM67rgj2kupNcfDX",
  "key17": "4x7r8yY8YqdUMzvkii1kKkwDFQShMGzfJJtURkqoKnY2dKaMu29CpzQV6yeDsTy5z8rQ2Q2MZWfzR5FJ5i8Lnqmp",
  "key18": "4oUU5yG5nFhJxHf9fVSNxnUBC6mZcKtbitcc2A3bvDkrk314wb9jvkGYnUnYz41ZiMzu8fEfJCNJyanjPZVuihyu",
  "key19": "3UqeTizfvqmES3tRWXVSgm5Mn1DrvXWcBCeDAyA4gcz739MhGV2HE87Nwss72ESixmY4vweoFvenwXHz8VC5vJUw",
  "key20": "4QMoLBrd1kLmcEp3LMVs32dtkwRCKaJ4JUsmtxeYV7eFJ6KwF1YRJvZccbk4uvHixCPqwccCHkB5aAciugzzZ6Lz",
  "key21": "4JPBZFEd3odNVS9Etz7wwLQJMoLPrNgxw265WXeCdnEj1hmEcurXcfqMmB9vgkQUEex9LwpqMXjMWaFxUntFXvB4",
  "key22": "4zoC5Qm4etEhHUoyvVYemdUziVp4TQTvo3trN4w4CGrH7mh7KrNakbu5Cz8ivedyAbNVaLzR7HxZUWc5nKJtb5oN",
  "key23": "3hzJ3K9dfEwrPXi4UJMAXp7CNWrTju8G4DmMzfkEDwtnbfyrdHZmYtVWmBjWyC6kooWzztApNFMeEXeygrdui8ic",
  "key24": "wGFk22fZrc2JddKzDthRCRwbFKU5np5mqFJSLkYgWFZq1RusR2vydu7oqHDixeBokRYVXdXXwtXizr6PiJxHJCa",
  "key25": "2xgS5NxsdZ4oaP1ajXacULWCmYDafHybBTLwqaeMcE4ZAcFU5D2aaHZiMYyqTiMpVjJTDFpT7E2BuyhQ2vQp7C5K",
  "key26": "5dobbNmEEbzKHFbyXBEhgzYAoNY9itV7j1GHMVpJcQFTpkwxkaMumMiXDNH3U93TKBt4au9dAPg6US5KZ445qWhi",
  "key27": "2oZcL1eoYqoQ8ypeSGJNeGZYX6C2Cxi89YwN3sNU7ri2fUHsMQG3usZ2TkNmuEw9qnfPqgdRPscpkd8RU1sqkCoX",
  "key28": "3e9wnV8FgqvfR19qPJQqaaY8PtzYNTBhoYx9F3Gr8BqWpU1n1Mu8UnuT7JvrK5D6fuBmxB2ZYcxXSRuSiwn5UzFy",
  "key29": "5k6iqsgYYJZcebM71YLGp1tEANxSB5DpHuxWHr7ytXvXmB5cP5nuQwyebgpinvJk3m6ZHhQHcVMXVGhq8nCVLDcY",
  "key30": "2Kerh96zFHMRAfiiaN6oaBkhgcujHunDowYnwABgM1AUiy7ADGc7RtFRLSkMwbT7S1zq2dwHsWnPPYzxsbsvYYMM"
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
