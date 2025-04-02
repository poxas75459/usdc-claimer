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
    "nTpB2n6uw4CUC7v5TAFmRgdMDbUen6mvR4Dktz8z4jZUCS3EJNPqojeiuEWCd856gSA1AbYF4VEYeSnvuV6wg6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSBXu73xC47gqnypmiADV2nNzssiWPRvfx9AsSXAfyJ2e5qioSfk1aZeuWf9bGZJCMAk2UjoZa31qZGgL192wqP",
  "key1": "5ENXdQ25qKZAgHUSf1bkQrHtVjPfP4WJc7Pd1fjZs6Uwx8XJhumoYZaZJJToNUKXMfVZ1oArxVfZwfeCjRheJ8ou",
  "key2": "4XHwakJAxzRaHqTPiTAGKVokdPG1g687bQtakHCey8VjvQjcZrgQV7K2297AoNQxfC12AhJNN9FvNfwpVqpcMVGE",
  "key3": "WfXhrVXSxzuJ4vSmyUhKGG5wyAMN6LVEdpkdkcRBxUZt3H8JHfjCvzYEwT7Hu5iwZWsNA2YQQL67WVEP9jKSXtY",
  "key4": "3D67ANxKrpMfy7mNgC1HJQBYfZuCvasZ7mFeBh3tBv92UuWTxPUFhCfPXRHarKwhQWM6yfStHkGWcCB7H3pFzKxa",
  "key5": "2RRmb4uQihLkq4QHPKN4jK93dJeWzFH6mT2gAgjHvX3PrPteFL5efGYuj24Ds1h8W8YZdWfzKiADtm6yupHoYLno",
  "key6": "CYRZ8YqQ23D2m58oHAaqsYeJCGTFg5NQ2CaXnZ3AraW3WaWejw9Tv3gtYgqrtKPEWfJZ2qgy3zHv1puBuH2vMwp",
  "key7": "34oAEdXNyJMuEpCskNe4LNsd7RJYWiUXWXnv4vxxRN2oHbAtjausVFu7VnEovx6v5M7vxSHLjS8KfEgYFQXRJzFh",
  "key8": "48pmmyL3ryNqv3LMbdqQm9fQSqSrBUxu9G7yp6wtezgEmUqVN8mbL2AXxasGNVwC5M6eszoXtRW6CYN2mcmoHCmE",
  "key9": "3im4vHcLvqeGttQ2rGRgrGi4BWcz6krQL8JvnNmHYSyGxatcHwL3znyVQ5i3axxbt8VZ28Vj4pVf2f46SVSa1nYP",
  "key10": "4pEW8StbsuyCahX4Xb8WTFCHekgTTEoYh5ZfTYVVSTtAGaBBdiBuVLC6NozveAhUUpTs7eoys6qGkywoNAywvQaK",
  "key11": "37CgahZLbGkk5ijucjCpF8GtSVxEdVdSpWGwZ8qmSAu3W8tftka2eMU2a5GXUwYy7qb9mUDLLXXa4xV48Jcn3KeL",
  "key12": "3kRv21WnvM38Xk6QyHsjKvXPz2jGzMDSTJXKh2HwtkD8Bn1me9SkuN8zA1ky8woJVZENxagunWk84EGe483bGqSa",
  "key13": "4mFGsCBnajofEQMBcHXfsr1m9J28K9pWd2fHenNEPyBQs6HohwDWSh8vFEzqYzDBZSmsKxyMDNZzMt3qTBzjyG1Q",
  "key14": "3fs9wbFGj87VGc8h2oaVeFCby2FxDgmKskXhfi3uRJCu7YhsKmvGMRhS9RYUdoJnvWUfWVMdYLmAxjCKG4WR47BR",
  "key15": "5Jvghxkz8aXgaFDxyen8Gk5J4nrjKp5fsK1ccesMTSo7n6dZsfzew53EACt2Svta718iWm5B7GaqBqkkrZqnBj4w",
  "key16": "2HBTBpUmgpGPXzo4JczidFuBHhxkNjUEQSWiDLamgGUvDwNKZpwMky1Aiod9JorZBZRaGFKn6SJZJT8cHxettDkv",
  "key17": "25nh5tJZLR3p3ho2D9BBcgn4W8UrXNFAsmxskddGzZ4syViEMHGV9Gmpp2Hjnch9sLidGv6rMC4mTg9fwUVmBgxY",
  "key18": "42Tnjrh84H7R42C8qihz1LvTYAxRRvu8s5rNY8thTTyodXztyKPJE5GrU7fWNGouFiskrEELjRkrbFjnPK2FcS9o",
  "key19": "4eA5GjYN9DD5UCF6nMW2UakioGp6Kw7oGyz6dFM5aX7EGnNcM6AgarTYdJihga93M56fHx24T1XLarXfufV6YM5c",
  "key20": "3nGraZHNM7uaoDYesp7qkAr2yMT83H8wp8ju6tX1oMWMUN1jE9uQ4uZ3jWc2cKeFLomUUfMqossCfVeDoRiD7DNG",
  "key21": "5TNYwWi9Y6SN3xgDwtDkvLbDmXJAjbAMkn7x98EVKACuo8kcBHW5m7BA9njpfGvY8XTtpvAqWGXMAwbnuFGmuHrC",
  "key22": "2CpxJazbHzPtrSaHGwnXKEL3EL1N9FfDCjCLMci9bCTUpkTDKi5kJKutW3WQnpCbuxTjVX99ZApBJzoYuZQRcSwP",
  "key23": "3rWUaSnUEWWJrqSFZvA1M7SVHw46pKPqvWg8kqG2cQMPoeRVFiHQ7QYUsr6mVBJk4eKbK5J9jTpeWEFMpkaUk4dX",
  "key24": "5XQ3eH8qbK2FsHZaLR5bpko3ARegtRhXwDMV18PAmii195ncTzqG3qkcj2L98jReBwP3kaPVi2mQdtA3TxKWNQMw",
  "key25": "24rSSEARQFzByy2WG93QiYxiqyMD25i6nkfH1pZqTMr69Bo8rgaeQ8zorWQHFmAMrwY57uThtqjML9D1CCGZhspE",
  "key26": "PBrQZPUXXW6TaNvPP3g5f1k5qKxf5G1Pc5rsZQLdwBjz5LBWm27CkLAmiNME2onGywq1xuLghNhv5dRdHWpiiCz",
  "key27": "rc9DexhJbpBxSyxXAPerjWfzuW8DVrMyQUJRrmw6XRq5chJbXcyK4JWTKve41RtNHuhC6TtVLacFJP5aM3rtssr",
  "key28": "475u3APy2sR2bwZS6dz2NeWTrXnSEH8tMxhwhbFsMJ8uvoGbXbLpJzjW2em79Xygtc4ob3aDtdpWBcCytMmjsHRL",
  "key29": "2c3qrv8y7XwVQFn47Li6JAC7FoMx3LwmXNkT1jpSvxAP7hKmXxKtk5z6HDjBSXZMyvuvQPGCXv5oddKFcCAwEuBG",
  "key30": "8wqYwMnRUAq2kxRc4Gc55vSiZxohCeUZZXvvFP4pdKCVjwPfgkNVkNLLhF3vLc72kHp7sTsVCdZDiWtWsFjPEcJ",
  "key31": "VzGSWPqwphTDA6wrPkWYyfGHB2HHUABn4vBiHsVSxzM6ooo7iZtteNBHBgCMzQ18H6vLZ5cPcx178pTjrQMC4Fi",
  "key32": "4aLgy9UJ3SGxoB3tVEVuPBvUXMgAqhyP5bbYmC7cnZQF4Q2PytVNmWzeF2RJEQPCxgqHznR4Ej1cma7cz9H8Lk6u",
  "key33": "4gh2gtZmd96s9JJmLk9G3SSWiG7mAU1y31eKoupJfKtiRwNJqbSjnYjg1NhTJzNkrad376bx3VsSCKEXsydmdHLS",
  "key34": "V6TqvCWJNAWhJBCJeduk8m84zfC4VK6VVPNbKUia9RpJfq53JMPgEBRb5c63aGjLjrPmkp6tETfmitchjoHkeFo",
  "key35": "4tKaVV82RzoP6LqEtmXitN4jPBe8RJFsfw8yAyirwdRP6SBDUmGPcXnfZ6bDWMYBt2EBuDKqbFJxBYTo2TYMM82x",
  "key36": "5iaoyRbSsPwPWDiuVkCGPRSJoDTTac1Cx6TzBdkHTNyu7ZJ6JT5oNGxx7AWyKHtQfnFhar9E13BxRJyBwYpC5kAz",
  "key37": "2EHrkVpiZzuc92V7CRhMLszpxmFDkxs2XFhbGCU5bYpmkAxf9onH9kjV7PWDXf1kTXhddkuQYAq1qZbCQX1VxnV8",
  "key38": "2j3BVT7qFyZ3r6VwYqyoLANoFUd8Pgx2vYJZqmbLrKd65jnWVfpDhpXAQxVX92R4nT9MT94jD1SV92AiJV11vvTt",
  "key39": "xc6poHEA6ndNEKpzuHBzCdreJ6EvRZxUi6x39bpqTBenJcZDiabnWNyAcBN5RH3m4rNGCeYm1cRfc6Vh4qHyiWN"
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
