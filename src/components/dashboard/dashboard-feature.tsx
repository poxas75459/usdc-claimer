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
    "3bHvuueSTQrNHU9KmMdsFdyrCauoK29yFhRiiR4Cit7uTpCTCfAhUknVvQaaucArXSnXwP5AKTGfKYpWmbX8uRDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526PzYrfCJ9rgsfvSqqFzRcSzDhAopyewF2mh69zvzvDTRd7w3UWUYJKeHHu4oUvekDEg5hQhf9hszoFPq5pcFRQ",
  "key1": "2RQFaSLpdsLeFhdigX6GRyqhL31SCc9VLisiGXUyng5Yqautzh24rVBTjhySCjwhZKKCWV2qtknTLLjZYG5b2kFp",
  "key2": "3W38NH1nFH9Q9fdue3Xp9WK8ywxhD8njUCCfLBhonYvMWFoDtKD5FzznJzFRgjsQ8mcdjjc6dpdkBZeZ2zdb3LaU",
  "key3": "3aCPa8FSUSSgPYQYuoQHb55H3nQJLvNJuaiXjt31XpiYtBhnmXqzC6hyZxL479xY31Xj7UD9GdcW9c6BTgvRA2np",
  "key4": "4KpsxhK7ZTSU2dXfcPBo5oVdXZZup4EQGbhtTyoqRFTV3hz8ZNmPrbTccXtfWpvZz3NhTMBQ6c2nFeR3bv3oSfbb",
  "key5": "3KD1F7N4psKtnDi1hZbdEx78G32BvR26NBMkKLmgZNtj8EDBTe5cM4xuAwSUEsyGjKceLYW2r7AQhbAUJvy7Faff",
  "key6": "3LScXvgCM3CFvWzHfLsucP7QfvPB24B8YKTCn7MdtEPywBKbna7ociwdHED4hU99nzMkZXAFDUeoVQgx5n9DQFKU",
  "key7": "3XVeDpepRRosrhpEZo99RkeHqiU8F4Hbk7sk6dRXDHESmUEvUqchzN6WSn9D43Gb4NsSV5CxwVrNcyKHamipTTvj",
  "key8": "4nX4PtQcHM3cmaV2xjZg6hcpBjfo8CPwtXx4gXmGxRzZhcyS9U2EeRUW1jJHmfD5h6ffFhVXeXewbMEi7NRDbBWx",
  "key9": "WqtWA74pAkiApQ6y1nNyKnn7mEBNYqkpyRxARWPYCHkvigkRej4C821T8Mw7358odgDpMCGN7vvg3WKjWmHh4x8",
  "key10": "4CDFGoJnvzFdgWgNmvsAR4dbcnuKTdQga6xx7MBX6qeVyWzBKKHsvNqCVqepNEpTCE4BaCVJj5c4suivwYhwwJga",
  "key11": "9X3MAvEnVLqXxrTU1hpLpuRC8FELqBL6caxgFPSGKGJUBxLoqUs5Z5jFpXrzvoPv7pujDSdqd8pkmJEwGnzaZEs",
  "key12": "36Ve9acxnfGr74rr9cZkhitPJmVrzs4SScDhRrjMLRFspF48pexoEmaejvivoUL1yVpxmqSTGuqzBDq26CFHMrjY",
  "key13": "izPUkfytzAsg4BW67zA8YERUWCxdWK3WgGq6nv4sJ3JyEcidcz5rMvGW6CjeTvZz6zGKmec1GADUPzA4VVXNDda",
  "key14": "2LgTsXam4E18vcFVTCpRRe4p3fejcXYRUGdqFpJ5F7iYUHDWgma8Fbgi8qsYRd7mUPc8HPRxroFiyVAGdy4NpdAR",
  "key15": "3rvNxfE1idBNXUJ8udaFCxhjvmcVLFvCvPRNTW3EHEbRESaCCvhDortUWSnfAFgb9gHAoLguQTYVrcsHU1BenZgy",
  "key16": "CWEM7ChfLZWG1zMUydzHaAQWa8JARaGBuXtaW3Y6iiVg5GoMgfCf5J9FP5RG4QZ4fwtUMMc4NjQunoViA8mUiAv",
  "key17": "3gLVE5sKLdwhDzBSSBNqRaYZgmQkTUyHJ3aJkZRPi2P8668NbeDHBk4nNo4pxPby2x8tLE3xqA3yTqVRUdecfz4t",
  "key18": "3pzELYME6ZnQZZoETWKN4MumRY269oSSPX3j2bSF3oENMkMnzBbjUfqVnWdSrLDL4EVfEupcBYtjefzhbc8BiEYD",
  "key19": "ktM8BUHpLcqbS4MxepJLkkSfrvaaUM1cP4BXdZvdCVs15suFqvSvB2JQKRRtEEnYyrMSwh4twovCvVd1XKe8cFj",
  "key20": "CzscFopN6dxrUhkL9ZPQJ9BNAAhFLmwEEVGGHUzM7MAzbyqQGrhuH9HTUBtqX2svH6CEfupr8dvLCnWBPKZcQdQ",
  "key21": "2GxxHZEfXVDFTZa7MmAyihtBLqCJ37EwpeaXSx2PzCbuNut69TYiXVHAsBMzWuBpkKLA75J2uvqw5rv27K1xzmVS",
  "key22": "4aEvZN25emC46KEYQhB2Q68yrLvp1iPrtQzWV1FkM2zSpby6SCtVkKdWCwUC7WBucyQe2Qc5xVRZAJeeSev4hZoh",
  "key23": "3YUR1g8bpHeyXo4rQJ56yh4XoouC5e11tZYKpH9QtejoivUHqWVpSyvUsi9YKQsD299t9i1gMeCqYKQzVJh9S76g",
  "key24": "4kMWAqMd9gsEJf6XLH3vfiPT731FKREQ4bqGqPtgTpGiNcEcFJBvifoFuRmpjUgqU5yRtJKfz5niPRmCwYaqTN2q",
  "key25": "X8J3yJKzqX8KPGmF3yqoF3wZM5F6SaLWpQaLjwGjGAfaaWUncEVZaufvjWV7ugkbfnDajeAQ2njgxdK5eFhBeGi"
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
