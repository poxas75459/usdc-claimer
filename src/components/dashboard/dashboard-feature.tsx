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
    "CY3RUb9b1ysYwQ35gicAJxGvtqW8utgnND3LxgM5JpvsBx6VFf7dbXpSrc3MqhuBpBR2daN6z1R5QEETWA2wPJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fctLGA5BEf8p62p3FWZhALhy7GF448XeFhD8gMvaFgHFxHvEnkmS4rjmVqyxwKT2DumUofNZtd4Hbew6a1hbHfe",
  "key1": "49Gw7JHsvVVXHfTvQSNbE67D7XqoC9WWSPH4UpLeM3oHqkt4rXj5iLD7vQYqqewykMWHnA8sWHeXLDEWLUsJrWB4",
  "key2": "3ERW1fAVNq2MQ4pyqMzrAUkjMMHm37hGx4gXWdoqF6mC3uqjd3z9e4qJQac4YJmhoyUCjrsxC7FPwPHGcia3patX",
  "key3": "4ux79cJK9PdbGaUZCeGy2hZNqw1pmLqoGs2TmFTVKw9XFAsYtHh1dd2BXcXKS7dStqiB6V9r4WKoBwQzG5krzxqD",
  "key4": "67ndk2NwQZfJYUDbwgR2MYRZabHmmv5LnuVmHCmn6TroD761sYrBaXFRxN2Ztk4hVpj7E9kFfH6vN5N8nTE3WeKW",
  "key5": "51aDNDpCJysDBJ498oE4P3KKanfSbo9i6dgsoZpLq27THAuG39kLt5SbF123yLCZ4y8Sv5fiK5pFJZMjQsX4wsfc",
  "key6": "5BF8rBh8ZUfZStFYUn4AysQf4h3L7pYb6gXYpiBL6pg9gXCdLh7Cgt3gH3Ba8rNaxzuqaQtRZkBi3Kwf87KJAchT",
  "key7": "ywNyrJsXiijPwfqtWavWQXpFCsn88XeL9aqs9U6DJEnEw4pnUd9BnmxJahjtuBYD68huZdNresH3C9ibgnZXkZ8",
  "key8": "2UeTfddkBsXcqbn9GWJKHQkovpb2TGxRbusXUhic4Dtkhhy8UdzpXZJcCMfZCpbygW65TJ8z3A9yfHfizpxTdmnc",
  "key9": "2ckrD7Y9hmoD71ARTjkGNP5S1c8YBoHVVmC7TmjHG8qzw5B4TtgQciN1xAwF2rnAuuC8SaeaWdTKiHrrVy9Hcc2i",
  "key10": "3uRTfTRxzfGUom3LkmFuHLvMGMpLVhmXtzR74zT1o1ENmYcqzwfLr7tAvw8NF6gpzzcesrzgjb1EaS5kMxMBYb5Y",
  "key11": "4FXzhQKbU3ezdSHfUD6DTFc5xDf9dEjDpKTGMa5pEfXoMe9N4ch1B7uQ65T64QhCiUTGibXrd7iuzDD9x2FhQbcc",
  "key12": "2VZ4Jx3DQVkXu9GJicF3cwuP1rc7hiEC44A2R2Du9VhrcKLbgppsW19sqf1Hu5PfCzATQW898mHFPmZyhANsyTyU",
  "key13": "2vt14SHCgoU13KZAEt28rkY3Bkx7YNwm3XvZcWpbeU2ohz2LFCkB1jjaPQ5Cx9QdEbe31yQAqcEuzDHmiwsE2wTy",
  "key14": "5dbvnjTd1TEXk5WMzgLNv6r3M31o2i98psTMZMw1wnHvwhwZV5gxkSyWxDzYBxzbabVRAgo67VENWouEdocrFTui",
  "key15": "5aaApPzSj5zh92TVmj4La1onZKZTZiBZskqCYuhhPkCNmvpmpyBZCnbDbyD9EXagsJtD3fFLvcXNyWeyN8io52Ym",
  "key16": "4PYdWtmU1dNE9JsqSuLwWMXb8dNUKbNdJvVT2PFxTAbEgh1qgJ2sLv78RSP1wSbe6VbZtvABj7PKRfbjLSaf72RP",
  "key17": "hWLhcXuujHuN394bWs2v4QP28trEteBdewBFYFngDYMVBi7gDZULMzGajimG7Nwk9rFQGHjFhbQxJkHjmty1XSG",
  "key18": "5kJAkrAVSrZ8UseACp6k2aZKHMv6Nc1GxTMh2uorSD3cwYtauYEBmAFc33rGHbMdoQ8QUS3WHj9sRsGyygDvumCj",
  "key19": "4sYTu9MDpgTGjKHM6gjD9kFawLNQ1JGHyw7vzw5umreBUsDmx6GB1y4pado88adrUuiTmnZkxBAGCg8P3vnuwPBG",
  "key20": "675hajaV1Zk4J2yqgxm48jKsuWPKwxUKcSMG1zYLF1tu1sezMyQzXjjEg3dgue9De6pqPLs3YSXP7Bj6kvsdEUW7",
  "key21": "5jzEYqJ7P6N57TEYmQ7CRALcq2dLLNhND2fJXNoVC9n4qk6W4Zw3pw3kRfTumZEXagNL1ga9LX9bMqrHDjm9XmQp",
  "key22": "2mqPyanwQoY34JJgdK3na1df9iWVC5NaAaM2rRuQ6BKahE5veotfKzt2vW3bFifsQ8vVGUB9jXNT18szZdzYQ2kA",
  "key23": "2wj33jZHJyhM2QSZeYJANVvWFBxcikbRo4Z3BmPWuTznHBagHxde6zmgJhXoAw3oew8oFu78kYRJRDtiku9bZgE9",
  "key24": "3UKXgjW83PjZwdwXgErgayEdPpYgLhxwBxvvhHF2P8aK2rRKoFSWtaG81azev7sEGXStL4QJAFyS9UykqZTM3tYY"
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
