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
    "66djfusYc1nHmNDsLfE6pD9f47t9ZF15ipBJPGphNZ5bTzHtgmytpoEkSuwBj3LpiTQzeWPEc4FAGEksyJcbQuFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WTRMh4xtM1SrmESqMijKHCQfhcmFVUXejgLVbAgSiZN8Wobj6U1e9HGMp2AKSVWCSPap1GABmuFXeYKwBn7Dsbi",
  "key1": "eSUMG75cT6moPyRTMdQMS7RSZwKQ5yr1wATM4dVXgffXnuhQtJvpL5rhXXzrgVoVei9q2Z3RTSyPjUb3dhGzCRA",
  "key2": "3xZyZtBkCM8f99UZFecsunfJ9AsZnHqpRXcECqNt8hrg27pqLLCNnK12ioxsYoukf9KX6m92sfoTFbWQ3keYSeyE",
  "key3": "5jTCGudLvUaT8vWdzfMTQMZEZZ98imw7yUsxMCrH1KCtcnA4QUJxrK8T8kTLBEqVGTCwucN64u5YQHn1AmK471Ut",
  "key4": "3xnPRpEhEzzQykRgUa1jAEDTttJBviUnFwSVGRN94kMK8bgbvYBLpmZamunNnPCCitf8KFh8CTUt3wjVQDRk9vVZ",
  "key5": "66QcSHqkKk1nKzmFqbfZxrsQWXZKYnqPeFaNr19xcyoQZeTvqdTnhzkdJQcjSS39RkpkMAoXxHwzRQ3cJ2nJbXfq",
  "key6": "5tiUd5kvXtceZeaJegT69RnWKBR6FALw4J94jxaUZuXVbDjoqL1ZMrftjmKd1Y6EV3aDd5yEJSgtb2m4Ri2dLp5a",
  "key7": "5sQ1BG84TcFmuHPWti67uJx72UtF77LCuuoEmisxRewcV2APnPpukwFTRXPFFmPk1gawCAfwNJKjWkLvYnaAGfGo",
  "key8": "359xpj8vt8wKx4d9hLbtJBhAr74e1NnfD5bwvRGkYDeawLCEVsdUuu3ciGcT2doayK8B8ApxGTQEEokihs2xNRSR",
  "key9": "5syFD8cWoptXwkUYFBsMcEfhWuuDx3NHYhsGE2AV1B4D1q6EsdbDG9MnS4rtEeLYa5TbjyHE6p9nKpEyKWTgSehS",
  "key10": "3Krkc3ygg9dnYTZHQPEBQ5m8eEWAs41EunvhFuqsvWNKR33kaYvL1hgYdCmHHhAqrdjiJCpXJHGshyMX57pnPJSr",
  "key11": "3JcRWwcBJ1CyTD28t6RgdgK3vQLwHZ1xeHq2auAdK6cgnDrJRNGxNUMDixVXtuxm9Cg9P1ezFeTMMFheefod2GkM",
  "key12": "4Pa7GDNsdEZoaWetgxxXcjAwFg7QdjjoxC2fxWXpDHLeG57zSSD3rYyHDTNRNQYp25UgCSJ8UpFijNdiMqzKjXZA",
  "key13": "4r5c1bSKoqZAtjHfQPQ4rtYzCoEEQ88o7UxXLx2tSnDEY6RJsNX83ieXEegvk8887VAgn6fm3zxFnGxqXKQG2G4o",
  "key14": "3dQMdYzWeNq1j7JkmTjLmTuUfWjhDzoCeXfyq4QPwP3DiJws6fBKW6JwsFB5U5sPh1sx5bz71pv2XdF6Stx4ymJa",
  "key15": "B3SnRHrzzhB3zLnS4RTL3ckRkuLC1GioZAxJVuJ5A9xSfZ4e5y9r7TkfQ98oYKko5YvbNGPxh4FEZfSpx1yBjEY",
  "key16": "5bDjCXWuxQkVZ2DZDyZwwWSgFBLDuJubKJivDqWE3qBqNgPxyNMXToaFeJqLZYJCGokkLTtRCwEqv3uGeyevmvFr",
  "key17": "4qC7ER85kA9SSSx8XporRvX5WmNt9nWC3K1unUZ95x6KgdzGQXFrGGvEKVmVXwJQRSiQgqHnkxQ5jYvPCxRu56J8",
  "key18": "4oTLKSewPbqMg9dT2Emgwh4ygbnKTeU3yHb26voCypJEEbiCDAGPyBMFziaz3r8hYndqYJKMB5gz1FrKUkXB5vfj",
  "key19": "5SKXLYPfMF2tH2AdAfXZPHTHrXdePnx89jZcZNawRbLdQpXWJ7CuYfTywYxazsdLJ5iBh3FeLRzP245qMwJFVqbC",
  "key20": "5Vz5WCPw4KUNT8xXuLdVh5kcjEqwxxKTjXbYuSYGhzHaeUoSJgrfQN76UepVYnmiPoVpWdFeyZDKiZwoLZgY7kbZ",
  "key21": "5f2UNDQgTGKfJ6CaJoQbDgkScMpo5KZ7LukWqHztw2amQ7UUKYwFe1Wnnd2uM7QnGwwGuedjmHkZidg4E96bdqqG",
  "key22": "4aYkUaTMiC4jkmSqE6VveRiEkMdu9mrFBk2FrxFyom7NBc2A8Tj4bhgBgav25jHuaKNGKjk5AnVEMKdop9vue3o2",
  "key23": "2MzTcqmsVm1AWHHMNaUdFCRCp9U7WDr6sTp9QrWCFnCvRwA5off962Er7gBFLvn69G8bTjgtf6syMk8d39zQUtGA",
  "key24": "2PwtNoQU1PaPMSYM2ui9tHN4CioxRAawfoAZ5FYyVNzpLsaDZJRwyCZwGvGWia4g7wuJdLCiYvChqh6niahVMTF",
  "key25": "5XA9ubYHXnX2Uzfey6wmokSNAEu5MbV1RE7pncihcSWGeGr1ByoGWRw22shGC48gfayFNcrDxxv1rDBmnfAkibyk"
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
