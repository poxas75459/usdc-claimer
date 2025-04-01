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
    "5a4XV6175kYhM69CDB3pC3acQa1omtweRbQPELjGxxsbX3MvmAyQP9aWRU4b1CEbPSTq576MQNYzKY3as6VCaG7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dmwZKZb5hG5pQhi8xnXVpJC8tZKqZmYTJHAgyhKbs5a2CMMAE8TU7vDvSRFvfD7qeuATXpFzbaqGMfc1DVaxKD",
  "key1": "2f2T3bwrAo69JY28Xeo1Jou3sDm67NJtbBVDQmYD8qLhR2pFL4nbLV7HCYtbLbLqxzmhaGei1jmUPbuimxhvhKwC",
  "key2": "5gSQ6NuaqxBpCoJHbwPPozmgabVc8RBvi46wzYVEMvnkZUMV5BCoezh5K2XfENpfZEFx8js9VotNkgfqi8XBc8vF",
  "key3": "3FnHWNqFmUzHzumKMvRCZwngX5GqD4AU5fjwEJD9xFko84Bx6NX2Q7SRJDauQxrLC5t4sEAb6fhRoYVZ6ewj263K",
  "key4": "4tu2CAMVJ5pheunf9F7hnbYFdofkXEqk51FTw2sf84hsv5D9ob35iTPxdRsoLzUq83PtqzMbWi41vECEy424yg1E",
  "key5": "5QSUmiu8MyD9XSTSBu3mGdkwTNqPq8s4zYh8ZmSKtUKutwMYzx7d33t6tZc3tRgdA1oQKMuRR81HsboTAA6gtq1v",
  "key6": "5dvoL2RwCay2tm5jUREPoVoGRfwhYyGi53zxjiZDnk49ymf8xZ7HxJMsnPZY5kyh3P4yKUVzXaY1ysJTAe4epger",
  "key7": "2iLpKB191KBvo6ng9GEBNrkbhDXBcH469U5W5JViaJ8eqJ1ofaBApNH6hMnHdTCWTF3PfXohGjgLMMnrNaUgwjnr",
  "key8": "3BmkJtagcjsrfdRgWwQuroSrBy9xkLjJspenU51ghBm6kmvshY9b1oWaw8ot2Yysb6dZMA9cDnSdCUGEheDjjwQD",
  "key9": "fUpwPopnN37SyEWpWBg9p798p3nH7H6a3eY8F2SyFUnYYEu3SixzfToC2sN5YePtA9H61xaamoXQ6guXQDtrwgm",
  "key10": "qTxWiuztsPGoo93qKsdSHbjxNQs9zuaAx9C74rvxe4gPwJz6d2ub4VALY5jSK1JqJ2PRhQHnc4CnAMBit1RdMfi",
  "key11": "5UuFdeRb9ZaDeHLt1gEB47PbpKABQy2gXjcDCbn8WnfJD3SYo44vHNL9EiVAxKusSedXt51Rt66R7Baq5BsWMsN5",
  "key12": "XCm4vTd8fgxncMPaDQjNcfthFPYAc4LX8kJ1YtnKNhrB5NrtQzNzMa1gAza9DrhwCJYERDug4GafYnrjyFoRC2p",
  "key13": "5v5HNigPKF8oSm8bL3PRVWbQtBqfMveWM258um3qC6J5KFH3zfEbuZCaeviiBSSGajqV1MYP1X5KR4YEkfgnAHyx",
  "key14": "53kgSUtoHqH6fL2jqZsRrrSma2oFUi94F6By3mt4SZE3Vuynr81hxutodHnwNZWf9VKib5k8F5mrhG9e2Dj2s1zr",
  "key15": "2HxLkMRGMrGp2gWXsoADuX9xgXnFYa7hdL8F7T5vxdFTWiSvtouVM6xbqmZLjccRzHJ1hounHDcLtWeajN2MVj8R",
  "key16": "37htQaMs4hDpVnqYLBvaKaFWcvR9tfdTz6GMKg2uDFgwDHXhKqahSvE4HtaJXRe37mtUyXfpQDjnXRgLJZM9eLXo",
  "key17": "428nf9Ef9V6PymN2AYLZpvMJnsQv3mppXDFNSWw6rrH7fEC8QGkXsTtkmnJCQMWV3aGXByDL8fAaHpbevEXmnDe2",
  "key18": "57MntZHnyMDUHQkQ5pDeQdK1dY9cQpc8nJSiMLDTjjWxDwEXVZBm918gH4SjcDobGLZmsQ1VAsGx2bZdFAgQ2zFK",
  "key19": "2vExCKdt2T41VN2zyiXmF2peNyAyowQuVAAzXGmhBHRVF599GziFtYBCWsDMqmQ3QrAiexz48mJBqAHdd94qa9wz",
  "key20": "FDBHFdQ2bU7FJCQVVLVmBfR5FgvYiBeAcpcPLKp1Y9rDZwZA1e7yUzvjjt2x9B5Pxi54uxvfhsjxrNZe79LLLyN",
  "key21": "3tqZuhHRQMiNzDyoa8HQWswCkjn8dLSm5gPRADJh7jaMf28XBtqwtuTxxXxxbLMyGkic1G1XbuoctG1M1GiYwwiK",
  "key22": "3eMRHzExtWskUtJns43Ng4nXzNFXnHd9gUj2JQiPoPnr7CVUiRewF5e3QutTtdahQMwodAp65BhreFWvbcbonzEg",
  "key23": "5GEfW7pHS1gZPgJmAXKm9unX5gG1eHbM3o8CCeFDUgAAfyEFMEYNAnMknAVmcUwtS5ALW3AnfcPfTbSr6khQbmgY",
  "key24": "5fhPt17dS8o1VPciCPEK4hgAYidXh7Bq2kBvEHXASsTEZ1i8UzZeh8GUX8u9c7esni2mhXpMLrgTgVftC62Qxu7b"
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
