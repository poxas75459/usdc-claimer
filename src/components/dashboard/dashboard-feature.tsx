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
    "31DgHJ9Ar2Kox927Z6bhFCpGyCuiVnadhJGKPd28fCtf9EkJwb9mLbNtHr37D9zErwxLQQ3FD7z9xwHfzMKVhqJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tc66cYB7jU78WNg7qC4yLE5whai366VHzNdbYzV3nj1oTpxJQfwqUME3NSe9Ws7ELFsnbuVAf7upkKki7PeHt3g",
  "key1": "4YEKHLBmXKrbeVjeZ9M2XAEkYZu1CY9p3NiZTaoMfvG7dvFbnRLLfHM36HVQ6PgM5ks9eUKhJVPy5uiLncQXKKiv",
  "key2": "4N2mVpdFC7ddMWsnZ1ZZfXbNVGqV4JhxKms2x9jFShyNcCoiWSpcwXRhQP2tTYSjy4EvwJsZeGAAw5BMcAxKaRq5",
  "key3": "3zc4JUGkppmXjbJt4xqZtpuJz9WbAELCXpsHh5YYrWdjaAdNZ6TRkkSgRnMu6tmjXEkDPdEiqD1rT6z22nFaEVCM",
  "key4": "2LxC3mfQ7GbBMotAdX7kccQrvJWGv19jTG7ZWNeG2Hpeks7cn1Jd5YRcV7hhZojFad9yby8kTS5VVVJBWF8WAMUo",
  "key5": "2tUMwkSNxfcpG1yW9g5K1nbbw4p9AwEsPs84pMyBB4KAmvAJNJCRLtTAbW2mTt7jt373wbMw8xG1xh6Jnu1wQ8Ur",
  "key6": "46eJiPHePjhG2xNFXeCsUyLdz3TBjP3PnXqTEsJq1KaMaG5qt69WTRBqLm6BK9kDaCZicUHeG9msNgk8n6JDRn8T",
  "key7": "4ftFekKKWNVySFNKd2iRYzR35VnKE6Cxq3wxokguzKxz69asZNtZu8GSPdbfAjuSHT29n1TP4QYXKCHrLUiamjHH",
  "key8": "4AQTCQydpjbBth8e1y75dTTf4WgtBhX73erLKcaW3K2v83LVeiC9LuBx81supnwDNrRRDJWgeyuSBm5z96gFPtvU",
  "key9": "3VSu6khZXGMQEqFCdy58rngywnnyubWCGjhL4VHJy7PjB1vtdSbNcoNLeeeRV2nkMoW4xoYWw6eMgmY15q2aCW6t",
  "key10": "3QkxVqzdhbBvNWkuCQLtf8d6K4m3VJ247yaLdK7HHD81912GhfhroSJXpKsGqHeHbKKcf7DXhgeL5dZMwRcPEN9L",
  "key11": "3xjaHNsCMAY93HEDXyRzHn6SjSp76NnxueXfcARwgng59683cjrqksv8382SVdwY3MYEVsJmDci87qwzuw8xYQAY",
  "key12": "3ci2Nt9UEcavw5HZ9E7xmRciR7y3LoHjqSoq5qLTJkQwf5D4KHydcgo78TqSkYY37UhTtLpk9qjWwLjRhJNJ2Bob",
  "key13": "2jye9BN73t9xY6bNRj67d5PwKrBY9EinrRSHGwrKhGrJhjYVcghfNqgiiqGmYPfZvKsC4ccAtnBQnnNMT1aeYUwr",
  "key14": "5PgEW7oiBYZZ2eCwVZ6JxF16ayvgwuaAS654fU2h6tMyxRsaamVAESwCdtuw5pjcz8xiBtv9YwKTL65rvqPuLBv7",
  "key15": "2aUAYNatgZ95MMxNxcZ2qckWZzAgjt9ySH4jg71oEemyaND4JJdCbazDFmhpbNBZhMNUjNyZNbZW6ULGqrBbgJ7p",
  "key16": "3xLnQHwUAZE5W4nTJAyhgeUjBPjqY62LhzhGLhNB9ZNAcQZgyP1PiBAsjhQbCpSNFyK13ibyAoNUpRALMfLwDxyS",
  "key17": "2BFvA4CSXnhSNdxpVpjAAx8NVY3ZoZfJWCQXKRVSuwBSFxi9KzipyfhH6ZuPFVTvzR3PPqu3rwNKLim9t8Y1zFWG",
  "key18": "5xm7TKqHQSPcLyHyjAc9aYeUjx1VHKHVpucPVYU5Mrr75vgAs3gLBoDRVQTENtG84yfpLC4zvS7iZMLbUMtZPV2Z",
  "key19": "63oFZmaMqT2psWJewwEUhjonEPBkvamGir8yvQPQdKKDBW6onZD7n8KRUxfBcTWHMemNNgXr99m5Dcbpgzkv6Eip",
  "key20": "4ryFqqfKRLRpC1DoTMJLaxd7TBvsZAHpk3AzkpF8AzoaP6tkBafboDZedQJQw9kjLRvtzgmVs9SXVD4kpkXsdqvz",
  "key21": "3jPohYCpNP5p7bPV7xKqToe1tC2b2Tjk3B82BW4EJ6BfegbaD273HCMmr8ioMFFoAL1GTnf5QJtJwvAFKPCAFrmL",
  "key22": "MMghurnBbNhsvCVweJnZdxafA54RpfHGBqHLLGG3aQjFgM3urwSQ4XQbqgQZrQQAWDBAwqgVJYmN1nDMd7Q4UKU",
  "key23": "4EqTEK9utZ95R1uk48KysgRWw8DDEgcMPacyMuv6TDWdLzkzWvdag4nPFXtQMqUVNDmZtKYv1UXowN5rMJPV43z2",
  "key24": "rk8uWP6CRL1z4az9yUmKXSDQSCt4RMLAuVkmgf4TZA3ZaNBBCM1UisTVwCWcbA51Liw6Bm91kYqLa5Wz9tr4xQd",
  "key25": "4oeUcnD7YaTvrSWcU48AtFnzdiyW35jCY3E2294cQXAZrAirpAuFb8YfwkvnXpNfJMDmSTAmUYRVHD1noSB8F7v6",
  "key26": "ZapiUWmhXv5oCCEtZpuiRJmzB4MAiDiP87pqfAvMpdpSrF8pu8anWreMqUWgCFtqNZPH7UE7wtkqb1GdvQFbd2J",
  "key27": "4a9bw2Y4Z5RNSkqvQA42L4itgGdxFwC5E6zCTz3UZcndg7PYueCBnGTAvZghwqn68ZUVw5HTZ9g9w3FTp75Rsc3o",
  "key28": "4tMUqponsL6P7qGGhTrZwDcNMHNP7P3MEkuBK7XKNFauUA77XiNLV3eVNkQxtFH6T8y3mmhNr1LDcTkkJm1M8cqy",
  "key29": "3BUKaMFcksGU2MKNBJHM67UWBKQLPRR7vem9t8FKS91YVACFMVLpzedVdacCTCz6tNZdRwwQwn3aHFaAhtoLjaE8",
  "key30": "2UX2QSvxy4GY9uGyD8jdNtCDwgA8mprtKaPt7cPdeufvq6YtbUZFuXExKxzk1F9q3FinL5f71pG895CauFT1aLFD",
  "key31": "LeLGcCxw5RTYVF2ccrFhVsRcpoYAWLHiDcWubEsfPpNsnWoQkPWkXfpfj92tYkqwSw3RNnhWsAn6YsVWe1c7831",
  "key32": "3YZpt1thMugd8Z86vuKhScLknLYty7uzeDprwxWe44wc1ph8wP38irrCtWCG1ixV7xZBPgUnzdBzjZcQ6i2BnTkY",
  "key33": "4ooVQCCd3RLjbdP3oLatAEeo62iNH755uuMXxGbzedy7x86jBmKoWqWCrkkrPvLe8Qi4BoQYFLfBDDrD2N6QSgdJ",
  "key34": "5SWskBFn2i82uEUfb1VopY5WjdytqK8awXnHDKsF6pBHji8fzooesycsu8mu8mPTJfacEtyiDuaf5XND6vozgEdS",
  "key35": "4ux47wyxpzAotCwB6ApaCp8ZHKthKkU1Hp1iYBkhMCfE2M6kjH6MvDAnfxXgjJVJ6xDtb4YyJ6bUJ7DmrUKC7mRp",
  "key36": "3CLRsRCzVZDd4PMQW5SmPhHgwnU2r71Bu9P2eJYQWfs6sPez9mDNXNAt3PRm22EuSbqUa75dPpntTc5KBkFNDb9L",
  "key37": "4WjpxvtQeLcMh9XHfAvoKaBLb2Km9tXEq9YdVqbfiswY1Qok7w997J1EMKpNjyhinyzDpxJMj7Xf27En77afGqvj",
  "key38": "2FxMBEykR9kGML1FtcnJ27Wh2rVDteVmmduMr9BHopid43zywXhpRRcxY54nZUcrvHELYMkymmZntajxk7BGZBJE",
  "key39": "2TxpyksfxbKrh8rP9cVVSpVGJwP4DeH8heDm9sZNuyXfXSjuvLeYrp6WsFnUBXu4H8hBdffXHApKH4GycKLqYnVv",
  "key40": "5AsPrbo79ZZpK3GkeCTbnsW4YH6zdUhSZ2RqtyGt8XwS6oYuAAhYRoYqiNxdy3EXgr3gZidii6f19ce4D7ety8yG",
  "key41": "4s7TyT6Y5UXbGaJZGj95rNE9p4gh6b4i6WE2ZBioh2AYoCcJfAS6UGoUPmEPixcZyTRUxQgt67ACyimPERYYoRW7",
  "key42": "8r66ZnRRDQfYfcmQumagyqVa5Kg55h1bi4VvaNKg225rfYndcFpxmGfHkx4c3eXQdntBYRcCRquQ5E4okiudcUi",
  "key43": "4QEWoSHaSyTR5Qc4M1copAsf4togwAyi7sYCs87oBQ9wMjRyn4HnM7p1rFCWrHT1XL9RWG7NdZrrtCY6DP5sdHgZ",
  "key44": "4pvDWPhoEHJLEve7MwqHRfJGwqNmDZsx4x8VoY1kjEYBXRdWsf4VyLgWHHGsQYkfPgFWbamW2hZAJ64Cd9Kkk6kP"
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
