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
    "3kjxz4Dw89Z5yRrMgcyWv6FGxgGgXBRf93D5ZimGE9VMwVodaQcVQtHf1tZLKB8ZTwJCbiK4PuUzdJfWpAAvTHwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tM4vRBibUSWJvZQoaJDJF5tsmZd6FUPfF9CFBus2CKB8RcPwQDi52qoLtCaqhE7EtWCDqujjce14n64GkywLgvF",
  "key1": "551BmXWHmQ98Xwb5zVf1YxhSMfmCaXMmDHy6hBzHyQSirWT1zLEmdFT8pUcgWy1rnxynACKBYkg7yXikPrFkK2wJ",
  "key2": "2MvhhwvJJsZFyE76vs2tRFoEtKt27cUwopLJVPBZ9o5ggxCtYX9uqE8icJiBGWXenuh4WjgMxYEGBcD8WpvPauzk",
  "key3": "x5zDSG8yCfRSZYFAQBBF4rFWjk3eHpCTxHGCU7BafXDsgjrfMxH65dEaxTreRb2LZb5QKiB4jYqc3UMJnsKZrhe",
  "key4": "4Lm7GsoYZuw6ZmbncyZnmmfChEqHvUryTHHAjZAmqKZTV8BJQENCEKeuAmndYqyyxJ1DuygRCEaZMAD9vfZgiv2m",
  "key5": "3cjS4GoYno4L6L2fCZfWa7Cr4ymbbuwkSZmZJ8XkaJsFvD6MHHp9q3H3ruahiafJKDfpYQSQnHX8w9bok5VQggdx",
  "key6": "5WfirdSTzarqnzHLNcGqHDgs841EPwAc4RR9JpU7F62986KdwQpKVm9xHNz5BTj2ia2FT4adPQa6KNv1MpLqBNXm",
  "key7": "3v9BkW2VU3wCuonMAUU5rRjyPXxiDA9uQ8kvJcxGeVt3dp5TKh7QgVz86Q3sJzFEXkccGq44B16aCXoJ1Mdhmxfy",
  "key8": "8D7uhj6Bc8axK2f9Bw74b11TmJ9S6oeuPC5Hmf2uQq5sBTTFMSj9jHvy9dLEFrrSffh8ak78bsYewhtDN8Q6qVX",
  "key9": "4PBwXsvYs4GmJuwgeDwyzMxGK6H2brNR2BNhc39LC1F25Smai8bsChEUNZEui962GqcozhvARyoQow8bFNCi8Tdh",
  "key10": "4yADVFNJ6Xw4DDczUv6KGB8gxRAvX3cjM9QdC2zPZmxj4UAGZ612UZ2oKFyxx8cvqThMdycLcvqZgdwtsmnSyHj5",
  "key11": "ojfaMKgHaRs1sWv2kwUSyGshTqhuAK9iCUvXvKS7YB61F7fU2EEE8tQu3ooyE5RNNwYmVpaTaT1JR7EhwLNauoW",
  "key12": "5F858JUNAoTdmi4mqKMxw8Uj4ianSjHGsqMEBe1XMyde3qkx27ihtCReiQsaEku35QNQ5haHpBCsmb8j3aoZzxAv",
  "key13": "2GNcLTVrxAJcEXYrGSF8qCmZp8SNcn4gY4wQ4iCSiAunUXuWVRnEcMzD6Mtz521Uo5SrEm5jxN5yhyBHj1dnd5y9",
  "key14": "3i4AqrQSxXVH86cLLwY3yDXSMBcsVojMXUZxS9hBQC8RqoCg9Cs8UwcwkoUM4HHMJnSdELscN51dk1wfzVJSUDvs",
  "key15": "1A2Fbb3VW12Fng2kCu4rbxwMGmuELDyPm9ymGECKTkPt6giqtsdHLSPfHqF6rxVPTi1MfDDLQgRYEGoAjJfAm6g",
  "key16": "4i1ytsPKUfNNR85nmP3EnigbJ2aypZkKarqtiEq1DnyVrDanigWv3C2QU9G25GQvDBruEDNZFESvXVaDUVQ5dLPS",
  "key17": "5LwfbX3TYEh9xi4u9yHrQnAyoHKwqCi44Lc8qxGCPpo4uLGMWGNygACeJ9FaDHZofh3Cjpar8eA4SCxESJjXMWXG",
  "key18": "3aZCCYG3vUP5QL5spd7kkYxhp5UghNgt5UGZuL1EZgVFFiySKCJKSWA5DvhbrmqrfT84DvP2zcPJ1cq7Qs3YBTDC",
  "key19": "5kGnYWH5mz9HPaeJb5ZFRev65zv1GeVZkVGnMuZgizrtHWveF334fbZU7arb2e9d3fPtEEqDie5djh75AL9PtT9E",
  "key20": "42TjtQyHit87d6VJ3U6pQp9N2QYbwCKGCsMqCgYYB42G7tFjD1qRHahPvMxZCx3AZnp9rM78yBRPZA9E2kWsL3SS",
  "key21": "8mQsLFFJscrjGGACqQUSXnQ79aMrDoMHJbZ13owdydxsNSNojTRhC5izsYchLsNrdR2z6Xs33mGjmEbH9Dw6Dk1",
  "key22": "4fhxKPPgnefVANLxpvBPLDtGxDyYDFTPCA7gfsWW54fJHCMkXRiMHTbWKtZn8mDybuoga67idhyJtxZmvKqeSNPD",
  "key23": "4LurqjuYWRPtouuWeTE5F4iGsNyjXNWMTqtMYNxHhUdb9v25WhVo8HTkdXvx5wtqxMT5PrZhe3qE9FY15DeVFhmt",
  "key24": "8v13VFH1AAifTSy3EFyBiRRp7s1Advcu8sam8yyGWVrxEvjN6SHzx8WU9f84emWg7dBynWS7vtBdprnQ7wN4kZs",
  "key25": "4DjejaJnc1GopHJFoAZPKFKggLtttp7ifFqVDWPnaGjvZxdjcx3YECrDPx7P1PMyJWEz4yzkYFPJrHdx2HHK2kzn",
  "key26": "85Da2jNVBRBDQvGnESYsEfqhhm7CqYxA3MSikUZc9ruv75G1BNMhqXCjaC9zB7JMpbxc9ncne5CUEFWsF9vuKx9",
  "key27": "5DZASBcq4hVbTxMzopA88HSTwY5HXJVuUWaL5eun9tpeDR7S1vT21j7U6hfdXWHFf5dftW8hZwZpKtjVGhPBEjJZ",
  "key28": "4K3nLRp2UnPkF7b6dfHQqbkPUxkm6274Vsh2htt71BsUt9G4uQDf8FHv8mq83VUgNZDDb3b6izixWcUqE6ZfHo6C",
  "key29": "4nzyiL6g4yEuuTz6X4nt4mz5SVE6wB4HtAiDaSZNqbuXVBAL3iGri3Ekv1ypA5yuDhdCxoMfNjufHr9YM7TvN8tC",
  "key30": "3gVkXAm8LcR63QuwJBzzqcN3MeipwyobnK3oFw62bMNGM4ZerW4VGLYMqpUKTsy8DupCx5hqsXUa1S5ATbXFjyNQ",
  "key31": "588pohUQWAE24fxBGRiEi8zMBboSNe6BrUt15t2qVova8vjsVSx6odYD1E8UkCmguKeAsNTdpeJnBJBcngXSrKYS",
  "key32": "57n65CTTimYWvCcAMYUQqekwtyiBpQZZQRRr9ZX7iovKRDhgqDvM1oTeciTLozi1w2E5DX45gwpTmASDZjpJQiCF"
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
