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
    "4xp8VxUyVTRofq7GWWgZsDTqGSyHicntMtgXwRkL328mHRu1cq4e8YDWPRmSzXy7XyFaNUCCPKkY4z2P1SMNGZUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HQpjWtDX2LBUznSe1YAtkUKyMeKfLThuEQz541V61WBrLcq54khc8EfC9D399oAczNNy7mLGCHqMBCMwbtL9Pt",
  "key1": "N4T7vERU5zrKf3K529LyJ55iwqjm7kZ6JtNgU9Fu1xR6GHKE2GZbanPf1d6eostqujzrXBG1GFsddn55qRcdzGm",
  "key2": "3zBteGpVvbTPArmBoWAUx74HCYdLtzbGheJ5xt4MTdrxuB1jhSHeDnrxVpbFFmrmBmKFsvC9xQkwiRUnmg5DP994",
  "key3": "47pEeWXQHJVqMgjbiNPHske5wLKz6TmThRqB3edmhp5BpZFRbiN5h8YgjhR25dbJgFr5PHew47XPntEdFZmtVWPH",
  "key4": "39E45acvfq1GRGaDXhC57Wq38saTe7aWPvqqvy4BGSKaoDsFcTxvqW4w5Y2a6Sr7sqhcE1vwAEEjjL7Tn5ew4qca",
  "key5": "2AKwrXVo4RZxKMwV1XoS34csgL6tqLrxe7Qagx1CVRmvrH1cmHnLG5XGuRptuLx8tzQqwFfbFDHRiJnKUy9wK76P",
  "key6": "5oyUe3J97HacbFz29dXr25d3oLBpNz2FAJFMo2wGKiHrYNPjvkM9gLG6c9cabg36vxoYSCZGvfQYSBGuvrvnDi45",
  "key7": "4wSbVjGTBErhzdTLaWNNwCB9fVaTr4Q2BUwrEDfPXWzxjLPBc9eHr45RL6xgEPWWpUbKJsjfhQ9iFJ45JxfnLsoD",
  "key8": "2PNmBzs3snWWG8hoVNqcgZPFzNGSpN8zrSP3H69ntKD2ye74nzntdrnyFeLnRPNrzZCCTgaJ45mADktvWLLePVx8",
  "key9": "22B3mZRWXuxWYas5FC6nctevAvEtCSKLxc5GeaempMR2FCoNWwVm1VseCd2KAADz7Vq7rA4A8yky6eYsSBCsqxyA",
  "key10": "4ay2N7D9hNXW8ayQ8BxyjQvFUTAn2SaeFarjoffWnS4QfwnfWpg2P6wRMxjRfjc6NgND3HeYnQpTrwKHd4WTPvXk",
  "key11": "3pkqyKy9bVPtjrRj2HU893JdNJkpz7ZGPRiQuLDUJ6Nkf2BEmciVWg7JbLbWc1mbypSYH2b1iPaCoT3M9ZT38zHt",
  "key12": "2mGSkG4fvZYiXSZnDxvthpcZfo2odBXB3znA8ScMZwuAkdHprvNYJ2Dv8wV1L51eezZFdsuqvmKqkT7NAxu9MxTu",
  "key13": "2iDjSfmV9XG9XTiBShTH7FBBaYME6n1mXcuWHDjAsQzVt6cF4neuuEapQq761zdZTEnbVD84YqjB2wcFczqSmAHR",
  "key14": "3vdxqoLeGNGGeezEYDakT2DcbVa63S6T4q2PHNTwktw3ebKWb7FgfxuD3pbusAhFNyoeUtGdGhVUFiPK8LV8jiTX",
  "key15": "5JHGuUoHMuBp8xdVc8vz71BY6yjcJYkEoCTjmqRSZ39iHvQuFxRjA4h2Fqe7F3rJ9Y72n6ETW6eT4Ne6K3uipdHu",
  "key16": "4KEzGzAtu48oVDVo8UJuQ7rJFx5EjetCs7QqyJu64xrRW1QtAjT4Be83nXvDXNvpaJBbsuCQMXPFpJjoDUF7VGxj",
  "key17": "3dLXqSVXKJbUV8AHX84XbifNkJdKnD8PVwZVb8iDm3iN3dHEQG56UC668qoqKR1huf3Y4o1wGn2sW4JcmHrTj9Wf",
  "key18": "5QxNE21zWeE3xaNyfz4UsGiQ53qDeoVcJr6TYPJvarEtTAn8Ugp2x24kV2995ardatRvPEkDQZgeHGZegCxnBiZa",
  "key19": "4sPYQ1aiwoZjG66YznrjraXABSDsE9YzcVYn3CKQNCy3QRRcxFeE6ATFg6zVw24SdpLqozw8dTpzZ7M4gJBqcGcw",
  "key20": "5ZXcF58Byx7ZPEqmiPpiFWjzpUJrDn8yXXruyKYF224x8J66mLisBoQEvzSXTHNddJtTeGZzDH2eMFANq8r9xwDN",
  "key21": "bLpDmMdgMRVdeK2uaqAr1BreYZKu2YbWQjQaD6fBcUbsY9FdQDQ4oCy7XPkbcu3B3iaoSLka6s2319UhkiK1vGo",
  "key22": "5UupYh1ESn8EGKdfvmqbNEQur9pwpMsn7kz3ZSDwNfQVWV4QRX3wR7mWFJufreMd27HnQSc2Vy8Xh2JeAPwFsfme",
  "key23": "2RR8f655T3NAyiqonpz23u5xSbbz3MjXGDwcBLP6zHdSN1nhcNwii2jnGe8nmez3YyznwJbcdRi4dKMid4zZNMof",
  "key24": "38sMPFRhXs3i8Y6TmGhjQVstQb9Sg574nAWGTGEvAGn1DKqtESJXppnZbYgyFJixqbN6UShFygGsCdzRtCcYck3u",
  "key25": "25DoResteqUbB6YgjoF7xsdH6pVpJbjwqpe3WFPcpFcw1rr8qD2vVB6JMAHgfY7oaq3xBKDtADKxFZC6R5VunbHo",
  "key26": "5sgTe4JkafBEZG5hCucYaEYXZqYbMWxwdJa2QsZob9bU56rhxFer84NppLLukzq7RTTb2P1zjajW6KCjcezsuKdt",
  "key27": "4qbW9aQY1kWYW6KfZtZVuHkKHdFVegtjP4zQBD4UM2ogV2KttbHiUTZRwW15Sg4Nbuj1LYCuprpcZWbP1E5QGeTg",
  "key28": "cdV8tTEfu24UuKPwxGGrYc4CKk7QWEtppXoCYpADSCzonchpJpxcz1jpsFhhDzNeTsuXr1HtYycGUrXNoyVAkFc",
  "key29": "4aCiEP1cugzj3r6ybB8VQZ6Mndt8kKZtaaqgrJmy2S4Er55RdvLBJgoZpxZY789qrBTV7J86jF5voJTpxZxmqtpX",
  "key30": "2uwB2nGkASbbffdvv6GZ9SVLCNkY6Tr5LKqBCaWsUkbN69TG7CxPLDJYVRVro3o376Qw5SLW8RSVEtndnSUXSpki",
  "key31": "38qzGrEgpLP3EknbNBDgQpdt4zfAP3abP4NMvq43LZiH47XufWhui1pU1d32HDdgN1qLzVu51tpPLunHuDjnW8EP",
  "key32": "3rZDxYE8hyieGmxGCrWCYwQ1WKFJ72bSgGcnkcBHJXWa1JBu6kw44ywUCmCasbh3aaAJWBADBnYibDKdhKxusMBY",
  "key33": "ZxEVkyw4a4azvJGvUgzaJHkLsm4WetPn8YAWvZ4W2VejZprRgZHJVaerZfPikZmwQcRfdJF2e8dWHzuFJujfEfN",
  "key34": "5txdXhKFsphMxoxNxA8SrPXPnsY9vgvS3bpUvv6wX5tt8NUAePn3KmcQiPSKkoFyQerEs15x89NQrhJVKwedcmEi",
  "key35": "53EsXpeM9qAoWL7nL9gderMfHbN2VHeEgxUCncDhxj8ZAUSbJ4MUbSjRBQ2WjpnrBvY5E9kqqa3WYgJSEB7koXpE",
  "key36": "2Xms6dbVqZJcLdgmkJXyJr8abaXG9sYDVEZqRi8MfYSf1RGDwFsi6XBneXLKhZdsL8PA6kfN4gtmexc5BZCet56h",
  "key37": "2u81LnVLFppHd62Tkriz9AZc6XUcE8PX2bU3HeXS31rDkLpDYmsBFViRAvEMkgVuEiCuf3zAnG2AdHpjB1aFSoSy",
  "key38": "4VPJme9D4ZCo4Cjewycdrar7qBzW2Vxt1J3hT8yQsW8769vSwk76fktNArVAwZnLH8E9aDdEaSYzfovhToHcieYW",
  "key39": "4v1ZxvQrocSmLDc1GrHoQkD8UJPmW83pKeuyePC7RBvjVZBcoto9YKsPNYoNipdWxWAHJ91kGA4Rbfd2pknokQsS",
  "key40": "vFPgX7VdPGM2FnQ3ZZ4eNXPrLTiH8986ZBsa7JqJXi3gsswJa8vkiZxDxJfiVWehwWDoToQdxjH6NbRHPzTqsJU",
  "key41": "2Mhn6SounNeagL4iEMVJpqsfmccrE7Kb5M9QaRh1YvSgCi6KZr6mDfB7JGUX2a6xQK1EvLqxZsGRYPYSbDEgCrT5",
  "key42": "3f87RgbRYPkv4eBx1idCt5fGYZXNvoaoRFYTnkHuToBsVZCmfiznvNfb8Fkt2e1DU7QsumncnUcy9bajr9B1ykHr"
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
