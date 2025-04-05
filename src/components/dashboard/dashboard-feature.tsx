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
    "5neMw4HMyK7SUZMfxTY91PYBddu14YJCVTpAH2VEK5BjkMwcbGtV3Phibhw1Pxk56nZwyy96HVMF4P5juUJRZpRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igYpqCNwRng5QFatbtMQardyW2QYTFUmuM1JtSssUJAVAHqDRFwFCxzsntRzzsR1ecpEYcYkwQHQ64EpGux9Ce7",
  "key1": "co6htJjFvuxx3p2f3SGoYWs9sdUMquJWDGt3XtkCqcDe3t56YVMYoZ3edMYYrVfin6CztbZcGAe3gLpZv1Nk3E9",
  "key2": "5srFT1zCQAsWWsntYiJWWrtdBcEJ2fFTbQXaik5kk3weo42mEQjEYbW4sd2ioUaecTVHjepT1oehwVjfxByFr1QM",
  "key3": "5xwFL9HbAGQZ1TcBQVoGau6mKPchDoBPq9TgnSQSBLXTDwjqbvyy38u19D65YNvZfa8uJvQdZ4SafqjU9W4oHhmP",
  "key4": "3ESwuP1dpcJ2T9TGfFQCaW4CkJxqEHprkcxQJyur4N44YGPgfaW67hG8JAyzdfpBmm1MyW9ZvKKwk3NA2qbYzD2",
  "key5": "5YU8BwdqYE7dYvSNNGFKJfcijuXTaQjCr4PQ3Kg7kbUy9TsAukCvmadb1m4EDQzbV7CfqJrcuTiEfPp7oenbDAuS",
  "key6": "41zdaNJrNfWKDhB3BGQhM41xwZPoSqH435pbWTcaRq1KZNZQnCWmdFFN5xzitbB7i9iJNhJHXkqP4qNEWQGRhDEU",
  "key7": "VME47odhkV7MbcTWECFNQpWEMX5koPX5QhWdhhyKDd7w6GXzQMTKuuoY1BbxjCxTeVfjuHSGduTFr9xv7KRt3RM",
  "key8": "4qJ6tdXbhXGzRdH5b5dfJDLe5xWj9uZ7C4XqUaY8dVReqgWRwQMTwBBbD9q1qnhGDkf39FQZNWLa9QsseyWFXp34",
  "key9": "5TaUDhurZwABgcho9aYNX4ifFwmmr3GqC3RBywQsRHaySSLzTcww2LuNpQgShHivRkRHR6TPXmYQPtMQue2WU6it",
  "key10": "3y1kJbW9aVgAQrvvjifphTux3SnQn9ea516jHjwq5nHdGwLkEwMRd86XzskmfbG3tgwonhvsb8BN5JgctinQmPfB",
  "key11": "5UvYL9kEa88cNzMZP84SKA29SZDsf5SwYxiGF3sTDGRvDGt568pyBb7Q3mLm6b6dUAitv4ckrJ8Atd7Bz3irCu8o",
  "key12": "427xuzDQiP7kMTMTvmMKCrrLHv9Kyxwq2QBU5o9yx378ocoyfAMVbdHoSv4nBYaBPHYUTm45q1HFzgmGmxXSV7oY",
  "key13": "3H4H2zvukGJ9XHPYNe79AUmaadFWQvas4SHrEZV1VR9yAKXot1StqjuH8r2nbKCk57kQQidGTm8xpxrp851fT3gk",
  "key14": "49tTFmGjJxQwfqLkcAhFod235YGc6Jjc3dt9kD2efqra4KaNbkfuQyZGKUbwwSvFsA9VUnJXRQSzYN9gyM6Sj5Wg",
  "key15": "3H3iA1k6ZJduUmjb9Agdp16rYakAaG3Kwx841mgnfMjgeMMe6H8G3so631tcYjDayY5Uu77TAoYEnRX64BQ4mXzD",
  "key16": "5oZJtQbYQFfti4TM7rAkPxLMQZYnXnJ37m5iKtuZ6pSxyKfJZ8qgbiTMjixfK1EQtTLRDJHrnVZhBxGTxFvRJpHX",
  "key17": "54EtULNVj9kJBNgPkCodM187CUCy8GtDz7KCkY2DCFTcaBehG7fYi4enPnbHR5p4389yNH66Y9azJJVpDrqB5Ecx",
  "key18": "2kCzjbSokBBPWd5a85HXtTy1YaC7QWMfmyaSwdCq8pd1UXG39b2xFtRX88CBGjor9oYHXmWB3KSUeSGB3rdLMPZj",
  "key19": "UDvgZHXRXtJReqwkcGhuLjuLzrnL3wWEMLJfN15uSN4gocqYCUjpULFrVfqL7acDRMN45ncWXSJYP788tk3s4WD",
  "key20": "3B8mLDdKbNbuuMkSj8Mh3Lv9LRjUfCbQAa5AfAUfZ7Hu4iaSm9s98eTt5jNiZRKBBf1fay4uNhwF4Zh54ky9V1Mj",
  "key21": "4P7sxwCX1hqnq3NyfXP2D36K4yYAZ531gGjMqyMYg3ytb5JN4tvF4tc4piacGGo6QVZw1FgS9mU4CURob93ky2ES",
  "key22": "3F3HhgB5CQ86f7aPbA3VgqoMYkZuhpkpAhoPvnBRFeWsqp5Vh7B1T2gR5p7o5DoN9o31bqy3jFTNHhH7SoefvhuG",
  "key23": "36zpDNJELiKqXv95PXYyKGKrJ8QHPcv5WQRSK1CRBZQvWu53RsjArqbS8JAw6q59W2HZo2zxYAWhsVYBBww8JMex",
  "key24": "5JDsJr5vY1Ye6xh1vX6iexDt1AfkMWSLvgWuKS4jjqMNPpAFcBZorFxH5KaTqW8AqDDB5Kur9dxSiBeMP6yp8RYw",
  "key25": "4Ep7JpRET2cFJveB7BRtnQXEQ8mWjUD7F9FXdeMtSAoh5YTShQYWh7QAWiYEAQbJsJ3GPEf5SeCdFt84dPqcesAq",
  "key26": "Xq73igWZP6fNFGL3Xo3gZsra9t2CDrZ1q3q4HRfEFMA1DGUjt8nRk49qMPK47QFA1KEBtf6GtJXbNDguZQnJTze",
  "key27": "5GzvVW2VE2Qr6AdgqZcetU6JRJpp3bS9hnyUyJvpKCGW3BA2aKVTRqhCP6QRjuzCbugu1pYgrccqhsbcj6CHbGSX",
  "key28": "3vergM3oGiBJfwMR9x6robhC5emHG4ALD4pnZZrkEXyN5YvMdgH4D8Nq9GhyBSzQm7TkbzaDj6S8RgoMP53CjySD",
  "key29": "3HKSPqNCooRthLgJBksLM1ebi4DixReEFg4Ni5ELRPDSN2ytwVpyMaCAh8MKpPivSK58utiN8F7oQDP7dNNqFFu9",
  "key30": "3Ps16j3FDY5vhie3QSWKdSG2KAGEJRCRQEDsuwcz14XHLiyRJFHJBSc6LHRHTV1aEFxmzZytnwrmuKs4TLKrR7RF",
  "key31": "22XTwBYLbXyzg24H18ZbgPsCJwwRRb14YCkNdQZP7LSvdVu2EyVXCGbQTmgR77tfLK9f3FhZntrJvJscViMvLcus",
  "key32": "t9u4SjLqm6NxewhEACtvzQeF7VmkezPLZt6JeVovNCth7ep8zFTSaik1W69YZevznxVZeaPEFffDWxfRvshjrfz",
  "key33": "oHAm82tkBg89T7fKX9XyZpNX5weYFoRf7wWe1tzomDDopc1waqQZLrzsEejqpdu6y69jFvzaQvQcAGn6zXqc7wK",
  "key34": "5m2LvQcAm1nPbadd8Z9FnyYUbJ9544SzhZSvpW5enw83ZUWPHMKjZshhJ9kfo6Fk3NXLUiKkw94zBe22LsAaf8Y3",
  "key35": "2PuVSeiXPerX7eYosPfsD96avfoGPhVUfDb1a1F6AmHY9Rvef3qkyn2MziuwLCA19w1Ljqtt3gwnwhHV9HL4Pdm4",
  "key36": "2pE1AJWBjnTJqAVBHyReddz8cFfWVZPg2duVroSozGpsiF3Da6DiaDGXS9vAYb3BDYjB1DnTnfayn9WyUCEsaGdQ",
  "key37": "5bBRxW1d7Sev3CSUC9XH3gBt2YkraidoXaZhnndUiu4ZqsLBRv7Ln3R7mLgm41iDiwVg3pQjhjM2ifx6cW2cxZ7c",
  "key38": "977Mw3eKJtyVhLHKEouaqxW637VedaCXxV22P2ZuPgJ4oam78JujvsVTtRMJpUHSkhPF2TcgKKQLbnZyLoj62RN",
  "key39": "3v9S5D76e6aaSUTEgef27rzrzb6tMrQFwTw3X96p344o3r8RqJWpkWeZr8p9kyTyJ4aaX3WAfWtvRdQAuKVjuCF7",
  "key40": "4zpLXLHLfPmMfVksEcAAQZnwREyKyaf7z1e2a9VEKGrAVfnaPj2gKbWaS9nPz8UCzCAXweSFTvzCHogHtcNBGTwp",
  "key41": "3toXet65LLTmN3MXccBGHEherBN4MygCrhVx9XnxwSrsefLC6fwqy49SemBByVdsbUc7C6Kpwg17f3Utx9EotJeG",
  "key42": "3Y5a6MZ1QFFf1pCvDoSTs6arviqTbGFazbjmUiXBgK1YgHFvMAFYBQ5Wys799uGSgMPPT8btK4JXBJ6q6icaenRL",
  "key43": "418NrZL8PJBLiE6YQsSGyNkmw3VP2F6pJspJKYcsnyo88L9RcaEG5hsrYgQFfXdxuChc8C2hLxb8UYyKeU2fFFKf",
  "key44": "4WU9TBPnDG7baoRnqrYEdLE1yFVAsTaCVFE2ZxkJ42E7HBdc4DD7SU44Zq164fMA9yvovsYLFaaxMtCMLDxV1dMD",
  "key45": "5i1nvuJ6CtLsG99CK1dFCAqQ7k6qMCGD24ncWMsTbQhZaPGJKhoNRKc5g3puTsoX5cRKUT3TYzGazHYMrUmuvWps"
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
