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
    "4Q5HZttSXBoTZzdjeSEPixv4N3yFDdFTeE7uAD6M8g5NZva4FUqN9J1uZHCDEbBRgNpLbx1NG6AQAy5N86Ai3qG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXBWjMfwghJ9M3pCJ3EzsQQHN1YFKV6PaKJPVYH1Gx5MHZxxBGf1MAickBZU6V6Fv5K8mYXKMFnoX8biqqVUcZ2",
  "key1": "3DFFgpQ17THa42hDycr4M2L8bKtoMKFutc5yLVTrK6ZNdbxi9nxYpFT6YhVRqNuhA9cgJoZjsK4ek6XaS7WzjxYL",
  "key2": "5BWiXhSMUs14XDQTo6Z9um91CfQS2gq6ZWcW6py8CPrXUiC7Xax5KuP7rvx2qmwxsZY4pX2LUonPm5jjo47eRQSV",
  "key3": "4aYfdv2R4rdbrG5ZdgnRnBB5sHAjyHEdvmfVUQNaCmgvCm8bY5MNp6xgRK3HYguzFGW7nqYJRKGJwWZiJFHo8Tvi",
  "key4": "63uccVw8HUn4CaoBRTtYqdvkBfPVeigXvSsihVDbvFZV6wr3dfMwTn172Edjx7rtt2YhHcds98ybwxKmtJ5GDBVQ",
  "key5": "4K2gMchSzuvEJQ2pR2RV9JviXdh7Cpk93LD5kGH1kTGcfvh7DBu4BCYaZ6Gmzww56dh6TQ4TSnzbqo1LK4y51otD",
  "key6": "5muPE4WEBs1AgFCvB2NRyNkyCWuECRm5vB5sBZjCKNLKW2A9w1v9Fp1GyiPaPkbRJsTmxuZLtCBiB8Xd6TpkKgon",
  "key7": "3zAktAPu8W2vmvZtQsjskbApoB7CQUfkcVFNgoBN9hsAqzsaEChz4boiWjA1CNvRCgoX67RSeeNMCmpn5PNBuisM",
  "key8": "YwBrgqdQfArMkG124qYRzSVnRTRg31Pa7rm46TgRAexfmkK9mmbhwnSeDmWEpHHMmaaLkNUvtSaHgKLNsVZ3WiL",
  "key9": "248e2kHSwThyfwSGKrKihvr6obNW4yJgFvZoDWRxyYAVTrVNbSF4gTPBcoB6aiMa9oBJ2d7cFvtcgF289h7ioybB",
  "key10": "9uneEVW1C7JT2BkVjqaquMfNGBTPRZU5QHfZUZjFgwhAmUBNysX34E6Fj7MyEfhGNaAbrebL3FGbNhNLEwH19n7",
  "key11": "3CNQZEzQZ8spPTjJ1yer4ZsNhKpUjoYz4qf8hL4FQdNnL4QhNT5faNosn7JDW2FURMCXj2LqKSAnq33NYy6WudHk",
  "key12": "42mga1b6ZzV8uTkfJcnZD6WKTAk8wbRV7w47SJoKVuEUTZbDhpNcoh3CTKpVaagbsYJs6CZezJpU37tpHxuk4zdg",
  "key13": "euTWq2gFyagXb8WjPLacJsWp5xXEJ9NQuy5CfUhBUqr2weV3wsFKbrsGvTgpUVPsNegisPniThM7XG2yJw76bVw",
  "key14": "UKahLhEEbihgpKSxWEwdFFEt6x34hjzLbvu13sR3NHoUZsHmaYheh7GX2jndcophqFjoprAB6ggpd8NGu7LsQfA",
  "key15": "22jbbxjHbc5beb6rsTMd6mGHBFoqBRNV83tEDrQS3HZb6Q4tzyZ3HYByN3uP8jkzCZBoaGvTxQY6jAtJUsPrwZiE",
  "key16": "23Qnny59KfSiTFiKhEEguSYxZryfcy4R3AtszR2zTti9mXBsYAFKzjYR2UzBcmEPpSEnKFewi9qvpkCUPoW9qpNj",
  "key17": "4foUqCYuU6V9CeMSNk2oJcSNLVLMn2rUpvkzeZpira7sE5ZBbGuo4pHoJbQTAeJyDN6YmhjcrK2x4iRETroNBpTZ",
  "key18": "iw9QnUcZv14b4TMpvHLoZEBSVuDtgpXXrUa6BxWdYXkMUaLWo2cPkruRuQbZPNokf1bSH4tDRM41VCTNbBd7m3a",
  "key19": "3v7sTZvJEVDy1RL4VjwdGxiEWqjzmj72MJ1P4vEZ5vkwcqfuLnT7Z51xHwR9QuhWP5N3tbb7tDqiy6ha6ze2sWnF",
  "key20": "5C9RgW3GLsPni9RoVR9GFeuF9MtZ6VtGVZLLLtWy7QpGvdbT7dBoWmsniYPLghkwub2ZJnyQqcAtmV3hMN3MoLgY",
  "key21": "3i4f2kBFTaoZcQkiYGnWv2m66fh1v7LHN7tLrGmY3uuiDYeWfghjspd1bHe5JvEZfDuD6Maxk5R6k4fVtjuseXpe",
  "key22": "4QekZDN2593AmbDETTC7QW5cPAPa13ydMWqRTxEiBGqXopXarN5bhKm3QuuAcqY6V7ZGLLjXbMneSN8piqGLUEq3",
  "key23": "2yTJ24H4M6JVxqPSPP2Yq2NPa1vyPaVZmMCCYWFksSZNCM6PiRDgirkN1jzxrjEsrvPfYNnHAkEnrfQLsBB5eRWx",
  "key24": "2PgjmRY8hPZYX55hTCtJv9tSpaNLkKeSs2kUu4c2fPi39bSy1wupciNwm3VetTPDXJKxKdb7NeFaaeEe4shEnAx8",
  "key25": "HquA9E9W2wem4mRGkCimpcJtCbRVPLgdaRv8pmhwJaQB7wbRMVjqCtfKrvjyJqK2479K7pshwZ5VyFHXCeh5pN3",
  "key26": "5eUCeLyEVGnYKLQfqNdD1YnNvovcqA6jNDsDtnVLrrTnMUeUJAqZ3bm82fnxzhBPZSuUTLJvFXesG3kLzTVeN8CM",
  "key27": "ogBsHCU1Tet5SS7ZGcdAuAQrBaQAWamTjwd1diGE53cVbQ18VKFxEgpjXUwp2LbLdQf24Go7J1we55pitpqRwP3",
  "key28": "3FL6pNdKzua9KcJVSUKCpruD8kBSeMSMenvHKGVY2hNwtPaZ4fdV3tu9jeCPEhRmt9eLtwAcjJ5rTehozR4pBSth",
  "key29": "5QfhPfY9oHAgRdCUWHLVSaMxuBneSyf7fWMj12EGRDWmg1C6SdHWw1ToNEJZyYxKFj2pNCXRB9t8zh3Pzn1ASTZQ",
  "key30": "3K3vHRKVFaMAVou5SuCa2z8eDdHA6Bxv67NY96feRY7bJDW3EhUj6Jk4dRDKLUTGeCvh69oAQABJHUYR8FoAYZpk"
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
