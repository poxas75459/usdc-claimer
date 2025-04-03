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
    "5Xskh137gfupSz5P8UUNB3Zu4rh3siD33tf93eT4ehD5xTBASLpc3u2hnWiaWTtDNrvwmZpVeH31NWTHiMckRgrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m94DDTmFJEVm5XDoanGyQwqZAKsiSVT7SsYZYkWuD8oGM8etEL1MSVUfXrDGv6exGHxRnKnpEkGghVLdVwdWT6d",
  "key1": "442zEeUS59SjpsGPuAxBDTA1zrGD2dVxXtYMpFqYj4dtyyCxbLXeggKNtWkSMv8GesEdzJpPdn4QeUErVX1rr6Fi",
  "key2": "uggEjQwtneCH6Fn1f4wtVqWRezYJERZNDN2NxTv33AfTxKZoBZ45weMatXDaypJnMHrSw7SdN8tD7PW357BGiT7",
  "key3": "3DQ3oWPHgz4eUtGMMSLXnhDVVytrvjasi4SGZNVa7H5iu9GbU6n9SeYdGD6CBnKA6kfxJpg1eZKtFc3YwPoBojo",
  "key4": "3wS4CH92UruhyTS5eMfXXkjRbAq1xatFFqVPjQqRK1Q4Aojc4RY7vehaLkDF64W8yV1tmCW7LFWKA433hyGjphKj",
  "key5": "4pGmWo6mnHmMUwvArLWsDkVRhLzHHMMPsqYWoe2ZRDvEcDjFbKWKMunzvwpW4MBwnXJDnt3ie5Z1TjqhTAMYTyf9",
  "key6": "35vKG911BptQB3KCsJSByCEZdcUFZoS7293JA56AikRZar5oZ9uSNEXYYjcrjqdaSAnuiqizqKsrFkzUpcWzoUWx",
  "key7": "2TtUUgF5XHrQv9rMknYbBwjDYQf4cKVom4MBugVoyK5Sde2WXuags2859eGGUxe22p3452z5o5bnexCQdBB59sQT",
  "key8": "2jzpSAZPwkVWDJG9aDRXoKXNGQBb2Ji93HZtjKprFbga669myDhFiqbYETbAtZN5gkj8TaEqzTJvANgYBMBEtQXv",
  "key9": "2ZcFJV4JDjnCWgPCR5JFZmiG2v2BKinp1cWnRe16ybMdLWNexCWzfBVMCzgS1EUUYjXEnT4UXK18qBGUfeQXXJm7",
  "key10": "2fqJgSd8Jz9XP3u2wPsxvA7MyHRVnfSBpNepTS4kLoJkYm89TQiAAC3oMUhCJTvtbXWRtF2yNN5ZUax3oYePoZsB",
  "key11": "5RWG1KcWCbrVgkEyPSvZohJjNyDpsqwqdsbXJjtf5z3AtV6Si6MWVdP6rokJYsCUMx7mYrxURfk9xJUKNfaxz4XY",
  "key12": "3tf6SZXUXKi7oV8zAhAKbjetSNsvxVT33MQreWhejxssUnxmzbCT43hx7rY2SZ78w8zMvzUzYC2wjDsymPxv7uUX",
  "key13": "4Pf97TBxWmdoyDRnPK3LLx4bKzASCBJCxAmBDu3rXCGSxWRqpybNRdjHPrGXgrvA3AKtq7CR3bLcGNCH24yNRoSd",
  "key14": "5bnspM2TFV8gkz7hazWKoBcbPWMBCAJcjJJuwYdcFu2zJp5A8JesJEPUTWsdRjXPziip75rxGRaff6n9DiSMpxDx",
  "key15": "32tWko7UMVyzrJ4xJxNNf7e1awmC9mq6Uwnt8rhYEG9jMUKqeazTPMXdfcb9NsUodTHdbg913QDAW3YCshUHQMFX",
  "key16": "4thtFXg3EwT7yqynshSVuiJ4aXRCDQowe6f9CQ9g6eZGJ3FoSpRMkn5rW4PgByhpRi1P8mMcPutqr5wWbdgYtH9Y",
  "key17": "39SvmvZBpJyPSmXatXsMnbYNmi57PZGRPb8e7xiDRyiub3QvHcZJSugicNu42yXRV6bE2QEqgeYprJXdUcLByqYZ",
  "key18": "3w6jztup55WdFqUhsdoAt2LdmhU2Fup8TpUT2KpXi5wnNhwnD6pTrRGfh2kkehoLMxm36pEeSCbDqoKrmGsXgPnK",
  "key19": "49k2U9z5x1SG1a3tygKUdM5zMtgBAQse1bW1YWJKqP1cmtzGzR5XmKDQ5txJt9Z2KcBFoJEvxQNMXgFDWXcDP39Q",
  "key20": "4q3ggdaBxgh1fTdehtubDaRQZXnKqHVe9DYinT74iSUFQR3rAacsFX56E1m1WiadteifnPckqVEV5pkVdoFnvBac",
  "key21": "3TY9xFPp1HzVZXw1gG8PquB6fqMYdyDfUAxKoyryFJ432rdqbNbicvafiCfXwgfGuPXLW5rzeF8m2YZdT2ZMCdRF",
  "key22": "3qYtVrpkueLCvqFskMQr97GDpzY3Fs1hJR7YuQUJE5T7E1DSTMqFhjp5YFLgM5314dzkkbVchzsAm6eDznoagTkh",
  "key23": "59pTuDy52eVxCwgM2QohWTXYozmYSEHtEyfnyc1LjkxYpfjBEk8ATp8kMBw6tp5VQA5rcVRZrC7KWfNGYT2dHakD",
  "key24": "mrhwshtjpGR6cRFyJGeh6RyXvERVSmP3tvzjEmV5Vifkwo5bX9Kw7Goqba9frrbwbTevAtUMWC76EjNxHCf5aHm",
  "key25": "2rKj9PTWXJfsYTJWMdHzGryEwEN3dd5WcAkBHkBqCRqsVdt8LezyJBXdSdNgQfiypB3hgkCYFoucvPdMHE4acXaA",
  "key26": "5ZwazswHknAMvWnCVXdWnaoDkQTN8knfe8h8oKB8n4k9rEVkgrPy9Jnd6GEbgeynKouniGaY3gQuLERXQWCUDjvo",
  "key27": "5XBirHt6ARrxoQ8A4uHdj6p2rwZycxiajFz97vVLFyE82BLAHJW13JZFqttejzywypFGc7HpdqB2V6rCRfZkC3W",
  "key28": "2T9KqM7dgjAecsN67rj2er7Vgi4k1XGhXAPkP4mzcMCsAV18A2UpBbREm4PF5CNWNrj7Zs22T91LrFfU2ybQ6gPQ",
  "key29": "46Ucw6GmCMbXfuCGfwRyLfaaQFNwikpAgNi4E9HvM7513FSNq1kKaDCxP5T4aBBj7jLzEg4wneaydHbWVcrn5qtu",
  "key30": "5oJ8HRFNA95paNimWpM67VyAu5HV4pyQtNLBUMDZ2dzJuxt3pfVB6G4hc2vV88ViLzgF8jwSE7tmVSGicKs4c949",
  "key31": "48pWt2i7CsCEB1MmyW3oPnVj2Aiike1mzmTUJ7KtDGts122iydbwEH1i62dJv6Bqj85ZQHFpyKva3qDxiCfDEHto",
  "key32": "5ssaTTDYKzpey7DhUzfvFGSXKkexbh9ZmrmJViXgEMg3qraDjkqDhBMrHdhygpuzbxt97edLKvXsZUV9jSb8F4YC",
  "key33": "3vQGZSeiiVAJ4VfkPK9LJnfUDdR1ucHeBiLLdrhNuDHbb1HfACMCnPa7EgDmhcWmrwEZ2atkGpyn4VJLFQSYhsV7",
  "key34": "94X7dqzyGdpQNTaMNCq6gWKfvJTb93jBbQYN67LeuQ5cHjwX4BvdmQPZkVQP4L9gps7XxG4VDapaReisChseL3e",
  "key35": "4odbB2gbHpzojvJSxTZgGXYpeK9U2aeWLJoDHJXmzTp2XqnoaNZenf638kxt4yMEQc5YUFisyv2yQA6enHStAHEK",
  "key36": "bzQ67VrYb3LE4nS5GL8Mmb24ZGNVPZPuvKoQkTwQibdP4jymoERw9msLiULbnJKBpHRaihpevtWxrxzVcTybZpY",
  "key37": "4QDKbPqF7MdEyrY9wgvyyEUf7tjDkKtdvxZW4U5wvJt2QuNmohooXUFciMffXZv9Vfn18JRc26gwhzHe1NL5FQSL",
  "key38": "3qusC8vwELegn1cxtZM9ymWdRcyezHY7NFXznwBbL9aXBNywbhavGYMmyV3MhnTwnZG6SNv5Hcc1NToyRFcCFpgx",
  "key39": "39g5NmP2qEA8xM3XTGZKKipisFPvz9XRF1zAnAWTGN2ovqSg4xtJGUBrykFranw1XnhxPCJDHVRxugk26d4zZUVN",
  "key40": "4vL8UUiNFgiw9u45qoMC5nJ65gKJRhDRgaJoN7cuND8ujvwzzdVgtiuCtafsDW7HBLLu3Jfk1dvU7hkMWimUefDx",
  "key41": "3W1cYjqk1z4bvzRTffNJ9SLohjhkyBzjxPx7CGnnonLJJ5VLsmRYz4aYRCg9oo6QpCFLW7xYd65jz6Gi7VDyqKJq",
  "key42": "3w86od3Fmesbraj7CRvnES4yV2yiYQZTG81t3dk26nuS7XwKUpSjFcRWwD6kw17s8j9HEXohFt8sh5Wo8VgNqfxb",
  "key43": "66VyareyiNiL44EHuzzAdULEBg765GUNi4aNJLq1TbLgQCuqL6YCh7pohv653d94AX6owKRnSYNMZA5GzQkYYwyw",
  "key44": "3fCeJyD4pPT4gZg5Pb1K9ezpFc7x6t4mtNQ4PSaHjqMzqtNzgC3o8roTZsWNHqMTGbBcL4MxSguKWxUhiZ7pHsbG",
  "key45": "2kJCBmYyi1MFt8q1m61nNosbsPrHMaHbtKnPZs2Gu3tUMVmwTLDz8jetU2ec3jwkeRgEczWoQpEB8FDUKSr4VCJh",
  "key46": "wuUQAKhteHo8rZ3yWxHuiDeAYab2C8i7BGJpEXPyaGKVtSdBN9JjxcStuG8n6cZD2bPdyGeX5psErPah4WytFG7",
  "key47": "4GZPVLHVWw2PeCCkryaeCp4N4PfV9xDxK2HdhmzSBZyqGYnxGiQs3Qt6ov7kfNHaVk3ucZcb8ut6DNFJj4SVVmsM",
  "key48": "21x67F8S2zWdKCHvsioXBg6GEVuH5Rs9pgHbhnn9E2Ns6FXq8Z7VVt6c2RdaqggugqGXZ78DEn4wHdY3cWL6hyKe",
  "key49": "5WVDNZhc54Zw3W2mWiw9uJ22647diCCLG9uUkWmZed5W1QoVgW4rbTEbE89vnJeSEfY2VZLxkXoTjW8Hmnc6bs88"
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
