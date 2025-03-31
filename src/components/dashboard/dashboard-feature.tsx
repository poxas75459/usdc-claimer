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
    "3W4KU7yhdSnr1ehd9jTP2Nv64J9b6BEVcfBcoRpgRKKz5XMKZpEKXkw96mWjEmDab9DewHKBGAATg11Ubwv5Brm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wZkwGcyyt5XCSnom133PNe2stp433JF5NyrX7DueEMpfSFhSsrLQMSJcdKAMHKyZ6LERvdyHS1fmjtSvCbUiXfh",
  "key1": "4v5vj7LRg5r11tbZQnj5VpCvqhyYZpx4cM172xEaddisJnRWNCSsCpLQ989Vg1frVKaPjLkTY9SpnAknrNGFaozV",
  "key2": "3x4wJf6tpVPvpdiX4ZMSr6dxGrUTJQkersudh2aqsLDVdG67YpLZgg7Guk9JqNLgGChbeLkWjgKuE2BDg8WGzNaA",
  "key3": "5EoDohNdLmYpXNAhYM1XYtiCC2nghYidG4j6cp8Urh18YC1r3JKQZ7hgVM1D9sGYTgmVUDH7PrKY4T5FnKA2pGeS",
  "key4": "yPqq3vx4i9H9tH6sbSxNYQ1aa3WFgszmRSoPapBdhzhZShoeKUvp4m6rmAXnXF2hj5fJh94ZJ5w6ZUSLrPWKSYX",
  "key5": "5hCgMomsoPLcAR9fFehQueDTztsbr3jSLQ1HXLfHS1ZRn69AvBx38Co6NxB9rF7VFYyfLfaH9zncXsYV2k55Ji5X",
  "key6": "4xNRGUiYmAwtokbvQimjqAPfURvt6mWhcVytFgeyDaZgL7yLarx7yREpmcc4bDMFrFCVEzfypBBcno8uP41Jq563",
  "key7": "2GSiMkj3dRd9UxKpYxDAaKDQo8sNUugTtNzBAgQ4NAGtChPgvdNYaBQFQvCMnShYoBwNbeKVMFwL2ZZNtUXGhx3K",
  "key8": "3M99uAZadx6xMww9wfvWRVsoAroa9ZwovNGkGZaPgrZCGbNzp3gqe9U3Aa82s9XX8Rc6EbbdQKJo1FtssvfQW4Hr",
  "key9": "2o3KqHWmhAxheU4Ns86ufYJAmHM3wJeA6qqpXYhmLpvpaZhejaE7czMEkCwhwVpcBpaS6fHWuDLRV2A6VVqt6Axz",
  "key10": "3SW8LAkDGCbzgmRdY46CTEDn247guv4624BofFoPqt7UXyESCnBCruf2PeRjwe9tJ1HPZFmswHVYAA3W8vxLWHHv",
  "key11": "5RrAQtGnAkyMVbbxPfnYqwrK6L3azssbtUQTpQGLpHqgiwn78ianwVuKyWETBvFESjDLaj6K5SVn3jj8Z631Uj8L",
  "key12": "eB63eSgK55PE3RbTFCS9mTo1rkdnkyBHyJArVcgaKCwYd7sXG1s2yhERuskJuwtLCU3fUyn9KTDZEGiLPWAJmw8",
  "key13": "7f3cWDB3tqyhNcwrz1Lw9bXwwu1La7m8JKDd5BuK8VCSsDCZjvxT5nLBRTp8MV9NJHqL5NQ71pJdRdPpmsCUTvb",
  "key14": "2q7huDQD2JP6WcNx2fHxq7Y3AcKxtZWvgMcuWuBUwV1vKarJDZ3Ye1g5zbZ1iWkWbgFKTVTtymfoRiHvzxdrKNX9",
  "key15": "2nQxXpmibMJbNrKsQ6DShptTdXpimsEenevZ4yEqLUNPb4xaFeqtwBr2mAXLqaADExuPojBsSGo9GP5xMX897Ksy",
  "key16": "2X8tF3SDavfBR7xddw7yYJVZER6V2S5A8rdMNfJd8kcZ1bPYM1rosQSoHu46UPKDAktb3NfdVqKoQFM4xnea2tm1",
  "key17": "5hoBpAtFhJXrJsL8VaR8n6CLhtwhSm5DQZ9MuH6Gpx7RDuXxtQ87Z7VBPqoHkTKoiHMqH4jajzgjUkhT7Dz2e7pm",
  "key18": "zzabciQq4cg1r3yXiDFj6pxyUPCtt4Cn6J9Ameka4W4uAiw3Vwve9VGbBoDdPyJUE9WTmMu7SNvuY73Jv8vZfNR",
  "key19": "5L46cCrnxndNXKUeQXPpJ8KfLiyfgCDiWwsnzN1cfeBQN2KXHJQt9RigeDGY9o3CMpScRmzq32SLXTacLkwJp4x6",
  "key20": "wuPnUVRU3JVt6hos1J3Y3cYQBja8LHpgRD4xBHjHhY1REhCbsiBmDGLrMnHLxRhKahtR9ZV8b9CGb6XQ9nMEwW2",
  "key21": "34JxUQwDgN5ynKFuTMhRZryxo7B4VTqRBxQxVYraHV125XibRN2S2PVjx2n2Y8ZwDnPgiWYumm53WkPDUjJrNsZF",
  "key22": "fHoM1CBB2Pg5gEHCPzn6QJoV84wxy8QZqwVUeXP4htnGbxPGfv8dme394o7VabLhenCCoK5Kj5ELUDW9VJyR1HF",
  "key23": "3WqSxJssqjDqrg8X3b9N639bwBg8miHwCVkdAj7jaS9XhmEZy5m8qmELQQf3872G3FQvuLqnsEaWZxDnp9Wd3Qwu",
  "key24": "48hmtgkugY37prBTghWgsFzDcAAsiNSMKhrMfMLyNuHT1YBiJBJAn8jttyAWQhSkzKGhuipjrvNrr8kM8DbGgaEq",
  "key25": "3V6tCheuqCGGxjBeFTdXfEdPsakmGF5WhRFCTWc3XPZiwPSfzTXu45hfjnbEQUaznScUUo5JthpVT6isKnKJdb5b",
  "key26": "5Vdcy4v4CBkGu8Jn732VosNaFpGKrqQ6ce4j1VH2pvy5JyxWqbUWYV2Z97AHrt8ZSE1qGc3XGjGwLDAsiHHL8HTu",
  "key27": "5HwunoyFCVHavgeUrotJCQ5KggaexoKBbVF26VcLaoFBvmwMJA5aBaB4nx8y693GPKPzsD4eZZZBDShYPD2LqDLE",
  "key28": "iSJJF57kTtdbXX7tzSHN5VXFno6xia2j2MoN2tcYNKfo1sxnDsH5KYtBbyrANTb7z6Qn4tzoprCK2okR5tEFjkG",
  "key29": "pdjzZJkhNnVZCemqatQtCKWZbWLzoTQNCWkHbPTiagTgFvZdLXpESow8URnQoehRtDa9r1aM2hvNUQtuGc21jZv",
  "key30": "54kptVmhRtL2oGcdExXn3LihNGeDS5a7MqjBSAaLTTpm9eAbzbEcKoXoxnRoG7nhkMMkokYDuKWT66BhvRJnU26G",
  "key31": "5ngvZNMRtDQgUdFNN1uswYeWWLeChKHxmsCDfjKCp3cywc81X1N933yBLxqwMZqxg1gCfZne16b3LuUXJMQCqRyn"
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
