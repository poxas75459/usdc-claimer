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
    "4wWqazUmiKdw2VkT6WbE1tS2Ca6242DydrxL8P9P19gXcNTywmNnv76nbYYrXKmpXrAwUTrLfNEztoDveYZHeV2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pssQ1FyVvPtZqwEj1AvbGk8dU8LXvyw75nqLJrk1NXQoFVJj4WjRhJyw2HLHHrYH84bY8W3JDEbUwmMQQUtrGYV",
  "key1": "d11eKpVHYatbP4peHta285VoUadR8EHyST7qT1x3LDyWdLHGi4pGwcGN2tUiTxLSQ3isa5MK86RHfeEDaQodJZH",
  "key2": "3gG2MXeRsmZr9VTD1pqqLgdTtnWw53vrSZKXVg21smxRDttTiDd63KxGro3oqYApo1t674VUqR7GRsgfDQQ32kRP",
  "key3": "EF2du8irEuGFrtwhuUeAj6swirRETZEwEmFcjZRuPCqhr8ebFsfpfdZSD5xTy1CaC44ctz8ZA5r7o4hFUfVCYKA",
  "key4": "2FTn2nS234o5bpDtH3NCcR7EBzdrDzcUi69ZY46ZJRFA7jNCKXQ66KqXLgq9tsFzFhV4dRgGzA4Rv9Z1mULRwkKW",
  "key5": "3vSqUTEtDvme93SLKre8zoHprrpcK9WQZkg6xFPmdcBo4iyLDJ37UaHB5WP4c2zYPZot6SpyfdwJpN5GqjmtVr8B",
  "key6": "4QY4g2kCHawawMqZimd3ntucNFZATH8t9jB4gKoS24EtGPCpfnUv9Ua34Kq23YCmBvpp9vZb7bNLo3AJ6iLDuDh",
  "key7": "JocBg8HnZSDCRv52We6kH7t2fMPcWAXuvUKNEzQNZ4Be9neV9G5PxDBZRFzLwfzLiZN4Y3VGqvRk1AXEzJc6VH2",
  "key8": "66HBveyfERHun64nDMqzWvEkTqJEsT5nUey6CriLH2GSdZ2BMFw4qCNverZzyW8cSrzdTG7x3Ppz3WcbjBChmBrZ",
  "key9": "5pbJDjWUxTK4gYgLUFmcS1mgUVWVGC7hHHLTc64QuyTfNuVgLBP5zZ7pWKtipKaC6MbMgGoTdgN7wrHSuPYpaYW",
  "key10": "54shhuNmUu7AU5B3mxbG2bdtEPreYJUGzDudfuGb8u4YU16JXomni8TXG6ekMu6dNin6F2w86ADQ5iQ9RQFX4cmU",
  "key11": "pw9k7pJRkfTJaSrfjmvMwy3RQLWoAzQKqB38bX4Zt56QzPcZvYkLHB1nv82umJWyix7ibbiAwSsijPS7dRqNarq",
  "key12": "2z4YrBdH5BsJDGup1nnCMnPjrcF5fPhrBFBNKm9XYdGzSG5DC2JMhFeMfVcbMJmUgbMk4HVwY4sH8iTCVskhqKmT",
  "key13": "5jtb3SPtXPgaRxwdsvQFMEwH7zgLT8ceFouKRTRYL1dm7xyCUNvML6nHCpZKcoEuXYgx61u8D5Jhj4tbZ94DceY4",
  "key14": "3Y7r6atqKFTUGa6msSrxucCDCabTheqpdVmumrBdCJgKF3A5kspzJiWp5DfTA2h4QTUUZaSEsPTAtiKoKqE5YEXy",
  "key15": "3bV7Megv1scMZ4WNKGzMebtjYFpxxVhHK6VJBWezwwKQ5gTLLUrtSxUWwcNLPfR8BBob92J3Fb43CpVGtzVQazqV",
  "key16": "3LNLZyLAPKsqZ5RSUCfqcz6efqtUTYx4DEqiYdqLqQiLLuqUbNLWXt1iYZCiaouUYScmULFEdMhzSkaHyaagtxjG",
  "key17": "2AqrznprQ5b1P8z5GBV6QHZ4uF5vyzcv8Hds6miaoEKnfs9xJHa62tq1JJpvitv8hxAbKV4fGNzfuThcuCi6nvHB",
  "key18": "25pUsvCWKEorbjCZ8vLP3f32rTZ4ikYFtdofqbjYHa9Q7gZEdNm5ZSvETQdZCVZrNRkcmJp9M6EotD52SYjyG9RV",
  "key19": "3p6XmS6XJiaw61DNnnf46fzMm46tWzQcRaUofCfeRsykBYqFxyhCo7sdBxUdJEJY7MK6YqEGt7Q9u5yemPncybBe",
  "key20": "YPdTYRXa8npbdFh3gkDoHVFEan3H2PWaQwCJKgEsmdVS5M6Q9a8dNmcj6AjM5VrPzRY5Rv9NLKFKYPhrEWcDRhr",
  "key21": "5TyT7ri3zvGdDb13jxvtyCzNZqr2CZiWYJYnJ7TR5ShttECtYGV71jfdw6zYLnF48sNGqVStUaveUeSJzityezPw",
  "key22": "XdrhjctiNhohQ6HfCjZ9KWg62GKPptXBbVXa6LsyaUitzArgtMiXLe2H4SEvCkLXrczKvNc56APzNJagCNSLjzA",
  "key23": "2swym1VP1AbAgmoYQwdoJ4hBZsYCXD7C3HzAmesnp7gyEPUnGy6TUXvU7zVc4Q319YeKaJCGkT8XUvM6AomwPkS9",
  "key24": "2LJSXJsTmFkTh5wa713CJEi67yeSmVY6VihMStnNYPTFFz9qYjuvJAwZkG1At7wojxnWFXFiPGakjLFPk37eET19",
  "key25": "45Ms2XMZZau6xBFjHQG8wqBxb5NgDbP7pjtuofAcoYTBgNfMXG9E5EkXyYXoUERdJGqaNw62C5Gc7skeVsR4T5ki",
  "key26": "5Pu3DExzRERVV1WB3wrgdvqQNvGKpp6oGi2HFVpQd7ZJ4t1tA5FXXKebAB8QeJMixZ6SbZjYq55d4EuRYeEPj3sZ",
  "key27": "2mv6orgxkmkM7dGEZ5kgdsnwY1E3TmPpxpW53vHvBnQzJidLeiVoDWYaZP5tTnFLJ2taLRVmZJwpdEnTQcoGHKSb",
  "key28": "5XTo7Ri3V9GRomwP7AzLeYxjPgqVEPjVT2ASnwbKvVnR9KhxZLQXEHimJgu2gMtUXQKg9GuAff6d2XQkh1a8GUqu",
  "key29": "321VQF86pFqP9rcr5XD8XNJsRpx1BdmiSTWMNWr2SFdFRSFB7PpLZHXVaryaJvSz8D6ok8dmv1UgRyhUeEibhVai",
  "key30": "2UojDBLwBnr7EruigCoUMACa4akwHAyrEX5WjeDo3uSVc3ZsWsACSU5rzatfw5d3Sa5an4XSNfbJUojQ3t6AN65f"
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
