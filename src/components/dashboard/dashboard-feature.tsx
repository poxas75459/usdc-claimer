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
    "2MW12PbMBtHQ9AAuKGoTEXMSmfKUfmbtSmuVxwDSE7xjeNS6nNtGPHPnKmcUgxKnjLdkazWBmaCCRNq3umcbYC6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWRvna3VSXAxhnpR52kyLK3GaY4gkP71NiL5KMpxbSuhSbsNZ4rwfLT5mqqNGgFu5h5249rUNEysZXpob4eE28r",
  "key1": "4fk1RCRmU9jfhnSCVVf61PPbXCTriVi5oHDqq7UHGc12MVRd6XQtk6GkQCU4rkVK44P7WXfkGFw8gvEoHvAuMfhq",
  "key2": "279UMTgQgKbHNgGt31JBkqrqyE5xPkaLhbo96Z72cpM1XyV71jJmQG2XTdt3YMSa1fJnNeLb6sEPHczsB1kQwdW4",
  "key3": "2Z5sk6DQqBRoG4EfaaHeq23NKzN3EFNARDeqR3ETTtMUyWGsA4J92FBzdB88xjyCsGoo8x9qoBZkMJdzN3XyEd3p",
  "key4": "4NPJYaqy79be93eWLpTNQzKpMsLoUwpA153VyKGpogQDt1B2Zfg31rC23KrGN3GVcrmDdUFHVpU5cgmuehRuaw5c",
  "key5": "913vdeUwXCiUp7J6TynDrWqXFVAGAqXE3FMRq5aBKUm8KMKnL3TB3Y1qPa7uXJ9UjdT9QyCMWFWTYe3knbDR9NT",
  "key6": "4V6nWDhcCh4NhCZRWp61ndfyRWtL26knRS15ci9raSj1n1KipCsjuTcryB915eu88MfVegM4qGrPtVkFRUxjzEhf",
  "key7": "4Sg2wqYzcLmhZuoSqY48R4fwph5pU56i6YJVHMmahgrHgHamHsXReyFx6eWGNadj5cyPvfuba6KvHe6DuiZeuSfn",
  "key8": "2EF9oZ4SjqBSMUxQUtk6g8L6PKSogZskTEPpE3RWU2nL7ATfThob9ZHedeeJ22VR7Yc6Hd5Lbh4xRsJsfWiRfGvG",
  "key9": "Rf8jWSVpGiVG9uvEZxB5bhk821sgxEnLhcK3XAHVW3gXQ1CQGC7HGdshwKkcVYrZ6jz2k1wYDZenR6W4RBsih5b",
  "key10": "64ETgu6YdG1RduUdBiBLVoMHhuAfsaiS4m8vogCapvTWkNEgMqT6BkNJvcmnKX9fEGobNe3YfEpuEkK8ZPJi3E6N",
  "key11": "3xfCFQPmYQRoWbKzthJcFi35amssahrR9eGLN7ityXZWZS2a9powEDyv436JP2jC6YNYBCfhjQoVTpGpet85sgnP",
  "key12": "3Em6GzHPoEtYU6HkSfxntLWKKv268UseBA5GNoFWo55pbsX14TqxLXTg7KiFmRJhUjemywBEUVH9c3roHKUUrxUr",
  "key13": "fXVNYVxLMt3857B2X5wL38Gfn5ZouE5KQQbB54K3tDCkdzN3WUnBSZ8qhjsEJA5q2mXhRnnVDUy3Twypw2Yqmt1",
  "key14": "4eaZXbTsZH244Qy7KT5wp9fwQtAtzQphWUUtB3SKqWcM4zQsuDm16eGnmT3b2DwRsK8fpKp2M5CceFjeNdPSFxXZ",
  "key15": "31RFgRp8GoqcTqrk5n9pYmF2kFBmLKx1AqzrY7sACkAxRYhzkeJB3PSaqwFysEemmTdeA6pNbu68Ea7mZ1UJQ1rG",
  "key16": "1CzUgHYhTdsyfoBgToaNo43r8XBkqFY8ouWeSMv7dEz39KpfYmrDv9HhjgJUikSxy5NirD4NqWdQ2bC8iGsLsQR",
  "key17": "4HHVrvdmunWKK8bx5Gidf2Lwi21R5yoG4UxhgJNLGWUsGAVqGfTfB5bqAUakV5ieoLFWtutsPhKYbHpwjAiQJjaX",
  "key18": "5onoxHfV59hVLQ2UZ6RwdNTkVobnTsZqh4j8d9ZLgmJVHKs1ba9yG32YNW4aA1JURcHB2QBTUgLB8KD4y579d9Jq",
  "key19": "2nCaxS9Z9BhCNjBWVBikfBzjFctghFDGMZTriM3NKxrg3bZBB5JMdAqMxEKZASib6KKwu2wCjZcDrF9Q13aZWZK3",
  "key20": "63iB3QHnxiSrbJeYaCDeo68L71ohFqzUpnvAmm8GZvwTVExZMZCEADnvkVWvD81eCNJQLQqdzwE7wi5o1ZKpnxR8",
  "key21": "4AZdGxsiZvjmP8jDu3vkpimsWdsYgV8ovpWdsjYT5JqHZzHMjS6NCsuGA1b6y4nVinERfj72sMBcMDSwHiSnw4ao",
  "key22": "2A3kg2JHssiVPQtMbpSL2Hak2QkF3B5cFALnUjyP34sofG6QrvncsEQfaoAXACDM3EjEY1uxf4WszQfiWTKTAo4t",
  "key23": "5MAqJrbGmQpxMCtTtWDnaG1cB9ngsD2Ju4MFzzLJFJt2K1u5iBvQENUusaLKGzePaw1fXMaawYbRfM3bYpUkVBh",
  "key24": "RbyfwA7UPbHyEDXZQcAbWcfmZSeZr826BYDAqqQLE3Eek3CghQJrsJt2mcCPpRNhcML62rWSfKUugwjDi32JgFV",
  "key25": "5i8mUhbDnfC44aVPHcjteD2GhiNmDPHo2ffVoShWiXAohFGg3XENU25fwh6Qd1PBMAHiDJ5h467Qe4RP94DdMdEd"
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
