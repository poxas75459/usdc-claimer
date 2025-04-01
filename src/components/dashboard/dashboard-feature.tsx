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
    "5LvRkfXZbv7PFoYuXZpSPJr8y93M6vVpCycUwCxn9k3jUinPDzDUdE9rW5GSM9bo4HyNmjsa5RmCdxwn2eoopGBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42SKHs9T8K4hAZEx2uFXjM3FcWLXHYrR1f9MESenQ4nWHiZVzURtZ4QDcHc4o7TEW8Z68CubfyBJWyztBU8an6y2",
  "key1": "2H5arPwyazTxoNZ9fxtcYZJQGsbG9euNAetdfWzFnkmCn2Mpy9MjRRk73RaqTpqpJYkoujus5jmSLzJ7aHazWvG6",
  "key2": "31NTLP4SHZkkXDyWaWj8yW6ozdpAQvCZCkRgwFXfAgVbM83ZoLXWw5LPxS3ERqyGF1o98HaB7NiD4BwnRofoaGhR",
  "key3": "252cURTkFbXjd2m1XeeSwzhjpk8tHPG5gP5Y7YgpGR3hh7hLaFCpEJH5CKyCbis5E9QaPQz5bRjVMNKKS7DDNr7B",
  "key4": "5Q59fQsVknvMqkU9e5NepTzrqpnnycrQqj5fktFMPNfx9TZ4hbB17YmncZDfFjfBqNWsV1Zcne7qaPSGbsuwHKBR",
  "key5": "XEweJhvKws3VvGDgazqZMunKmjekdcduL1LxTTtBkY5LBzAw5XLBqJmX6izAxVUdHyoeJvjmtdLAk1YoCsiVTvC",
  "key6": "4spC4orWnMxDYqxu2bhrQWbtNePNgVmXhxPEshXUMxnUrswC8xeD1VGHVaFpvccKMsa4zRBbB7B6RiAyaVmaE4ct",
  "key7": "3H1u7thvU2NvGTxH3xCHKzpo6KRyRHqiwAUih3PGa41nVDAPPfsPrFCS7DAgQPS356ZFpHw1d4Pd6nx7GhBesLSF",
  "key8": "NKztQraVLFRLiFqtW8RET5y2Qyoo9tR8LBHTyH1Fa3DgENVY2kwJxuk2ffj63TqFQJPCWSjNPAVBh4WFMvpPKa5",
  "key9": "3hidQcxaqjRA5xByj95J5ipcawYQaoJ9kVFrpjEkkEqGkQz2fsRmAGStJ7UXfpreHCRphJhUndNZ8y59RdipJC59",
  "key10": "53LpmDwgG83qoZy4vH9jS9Fz7Jxxus9z2EHppBWj2uufiAJAqFmZXP3nJyvftCGhDXjK8FnGz9dc1nBH23XgK9Zs",
  "key11": "3Mp1aYXhC5J69uQq2kxVLNxGXgrmWDqCS9y9ph6C3aeDoTfTWy1WbKCZbAsPNUD5zXsrWks7J4Kribntrhj1h12V",
  "key12": "61iQfLePjyCF3a1i7xa4XdDU15DKG8pF9t7qsnb2XVMobc9zx9PvaB6e1pFZ5qq2DSRv5LmUAvN2eQh3cVoYgm2m",
  "key13": "123CckmC6kgwtSRheJdtPy2MQ7LiU9FCsAxRpgUJ7o9dKbVVkDyfSdLtTRFJgsKK1xuHBkY8X43vN5VjJBFHWhSM",
  "key14": "ZrY2krERwG3CRFujctARNDywGrvfU5eLtPuU5Ayrbzg1sHo7SA2cx1vV8tC6EZUNYdszU6jDHoBo3rV3q8LQnRX",
  "key15": "4DBNcQpT2tVD7ZCmZyGcWDzDDNQ8hD54Kf7inCMLyWmUjpG4eipQondrxEqThBSk6a9KEAowfXsU8Rs8TTn1oUrP",
  "key16": "eKyiNGJesFVkuo8AicFqn6Tkrj1PGFkg5wr711tdFuFh8YmYKQiyb2PXGZsda5crozqi5stvDVZTvtTamS41nm8",
  "key17": "3fWU6JrBrLcwZyjntucu2NYKzNUZuBfheqpzLdNPhkYHFFUtbnAuADPGhyZUL4czDewfPiAzGGWtg2BFTPxp4w89",
  "key18": "dQ8r7LnR92e4SoKKSH8uk2sd88uTLHKmVaf3CDyeZby27YX3Epgq7MUqMmEyaPcRgEKwB2u25RHZX7QivA7vinF",
  "key19": "FHmoC6mFRhknk9Kq9ZZA28z17BCRn6J5fhbenxRNGRMpn8ANfeEx8yC1f3FgbfxDLwMvpDD22ARBF2UfRrnER5x",
  "key20": "5L61acbvgZWztSHHh3JcvyFsmoRV3YSMqhrSjYYgYpkM4eppzmREWGtVxuz5U5uitsR1ghgX3t8gNUAo93H1vuzF",
  "key21": "5wBhY5DgEoozRcU72PP3yq8fuwPGtZBmD6kq4ptTJxKYTePEqrcdfoCpXi94TQB5rgB4UPS25JSzxF23fSYFt3U7",
  "key22": "4SJbs4ujkVimJvescs5iVnyv7Tqn44zdx3VqfvsM6ErjvWrnwvtU48y7aM8pogrD4XPijaB4vC4rfd3Qmo9YAjbL",
  "key23": "3cFnpPbk8y4YDy6B3NaZ5K6HibJ6i74u4JMsGT3KoqUpiNTR3wme5wm9QuikMBGaNQjkYjfMLX3SdZZ33dzwPNa4",
  "key24": "4UT47KW1eUPAnbaBPjr5tNi6GS7n8CbyCL64ryr4UeCBupQMCrW2sTKM2V5VokpSqwDNCym7F7qgtKfpS1w3Eyb4",
  "key25": "KByR1MV1SFJ6LVWGYxsJEo41fFwR9xoA5Ea34xeXKNzsAwCDFWDFi96MbnP5wh1xeMn9vDb5W65yTF3NBK7sCKB",
  "key26": "vb172vBhMKBqrUUQeuornkbyfhCys27qfWmVLktr2uD13pXbdFMrRgxvWHLCiU9E9YpVn3VsaEZRf9SFKmXL9UQ",
  "key27": "77SpxMHAAdGDaknbk3MXtntw5ZfbbYXAxoWQpydy1kWhMQ64Uasx6B6btuQGQLaVmU2HgLsjde1LfeEzo5Jh6kb",
  "key28": "5AodZpVHmvvfCa2eAMhmYSP241Egxk9iHSbr6VUo3KbXsEtu3VVScewdiCU6Avc1Nj2i8R89fszHdyaXBpo47JKZ",
  "key29": "HZKVxGYCYjhHUeUX3yuFcTzULVd6uT3qoxycfa3K5WF25a8cJGYkpSN7eF9ieutosH5W5qvA39gf9XyXsRTgDdJ",
  "key30": "SQeSJ4kaYeurL81fnpwSovkncpQp2znRw3WxRrm6bMn9esM1jvAU9AXMHF8gPUcdw8ZK93aGUMP2mogfrz6pdSw",
  "key31": "2jGQBWYL62ir3sBSbpJXqFNMzViVQVD97LczXqD8F12PH2sah9bb2qf9rb8YEYKDSTcRh2RhHfNP494bNaL23EVX",
  "key32": "64gX5PE7W2haJoWyWBELVxXYuhqKfANkq89GWpukbz2skhSPScK7QpG2EXkgf5E6CCzxEJMu47QvpeBymBbByBha",
  "key33": "3rpCtSztozZsNWzsLQivpvg6iN6NiS1reTeBM5v2ZhFyYoGk4UHquHkkrTvegtckj3NASqzw9a5DvHMd2FzahN2F",
  "key34": "4L6a6WT7ofmYjeQ73ZvRApshSb5neqRWL6j1x2EctyE4Yeie9F6bVBqV5iUkVhrWgZJisJStNcTkaRTUTgvaAuhx",
  "key35": "2X7j2CMo5vyK3Ybasb3huuEa2CiVfT2jG8ZVLyjihmKGbiCcuWpdBbeqzHrewvW5ECyfXGgTDJQqNuKknjtGgzP5",
  "key36": "3a6h8nnQcMAnsUnvQkUxy55zmN2RHPYhwE1ZEWeR7KuCqczuvGPbZ6MQhhvY82j8aitKu3RdUtFmaMTFg26uAaKm",
  "key37": "292rDRXxjboR213oGK6yyMtxsVPXa9LBkHMrYzrfDTZ2UvZgsVL9mHYD1xH4PrLicmwjNa9yKpepLnKWcP6wdXXc",
  "key38": "4W3jA5esmRxkQDWm7pjG8C2aLo31KY5cAszEJMc7EyTQ2TiKpnLGXkJhjaAQAZHT5iGj7XW5jYFw77sA77yzV5ES",
  "key39": "4wM5X2LP14cJuuddVyBjhKymBQhKC67pA1rJzZPMyfHQBGXr4pLmdiEkRMB2YBHnn8Zu2HAyMjLobdtoGYpx8yee",
  "key40": "3s7ZfcEYnkMP1C9dGwVepzxVv8xxwF54Vg34Tj7uZQkmd9rAZgecaHVNvcBqKTtfce7Usrnkb5mCf1VaDGWof2EW",
  "key41": "tu86EuzDXmf2SKKwWHSVV7L2vgKmcoqkgH4RpnUSbSFZFFNur1S6V62oJck5gv8SDzo8t8mZJBPRWjf8yp6FVmT",
  "key42": "57mVesERMYRwXv17Dz47DbGxbDJmLChnYy4w8voXf9Sdo9Bxkek5rDUM31FPBstzEMrK4beUVuGoU9BDbVAjqqSm"
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
