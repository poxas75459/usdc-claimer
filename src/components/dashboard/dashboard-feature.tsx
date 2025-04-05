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
    "5bdyQFbEg9TAL9EF6VAMy5tehopLdnff6z1Z32vNuysuWnaJDCtfowGYAmkgScddBUnBEHB8geyiQcJ8XSfAkQR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7BeaHGpfcKUpPgLRWsomDys7y4fsRBMjwn3u68c7xRf2Fn1zu89UUQ1uZhc1QGHbzo27pYGedzs9XHE5pJukKk",
  "key1": "3NxtrJMNeER9aJZ38tfcG45RTYKGC5gSBJVZxJQnccvkFTeUSnCyzyUcqijfGz2DaJs9PWeeX2J3yXgZoQqnqvpV",
  "key2": "3npP3bvnGqfAX92XLQ45xgsN4NXrV955LFdFyHZP1WfG57WtDC97ReSDwkDS1Fpo3bNtbbdxgzzfjv4yWgUA7jZC",
  "key3": "1UNF3PoCoHzFhULHtqpDuo1UM7uPqVDHX31AN8f43GsywFMZfbTjoeuN2CLgp2bGYqYFozKrgLMnkM7Fseaiskw",
  "key4": "Wy2bJzWxg7cGxMF91A9qE8JmS35ma8t4qkxgfNDzAK9eSv8ruQRrVjW4i3rpRw8w89SYbCucbvnGEckPVCGGWdx",
  "key5": "5e9fQyTFvdH8spSdNax15yThhgfNLM85sZ8iTnzxjvygEKavmpmuSYenCrXUZKB8aNHYLh7TbnAK6HFKFsALRFqW",
  "key6": "EVHsbAuA2aN8U7NajWgc9SnygiGJXZLuNGA5Cuwup4wY3cLb5bqnUvxZ2SZPxTK941NiR8V7SQJjyJRKY2kN7Mj",
  "key7": "e2sLaySvUQayPrvvErroPqRRHpgf9xHf1WJoCSKnSBxzgfF17fGyCrXTCTAgqK3zkoBrY5fV1oHcxov55yqE7K9",
  "key8": "5oio2FsvjNQZ3ePCsBvzvHNLfm6iiNi8Y1Sy4ZzQfaYrfbiA3CmjG94AFjpaAE1nXw2MmgAJXqHBK3PcvjSXy8Mj",
  "key9": "cENnVYJkQT6pS3uVzbfKg2z1v8Hc5Q19AqZHxXvhVvdAwQysMcdhNHFN8axMmisUdEu3uqZBdKE3VnpGxCncWi4",
  "key10": "5Bk1DQqcjJeEv6kqP1KqtesUpDjVnCiDhNQg9E4MaHu7e1wgGGn94nEParTB6ug4EuGmFexfurCtYiP8EANKe8dj",
  "key11": "2Rta4zZo162BaYNN7YTLzLav93j4qhi25KVSEeF5Hz6smbVwEVoiYdz6rUce5VKxHobd4mAEdEuK4cxbKGccutnh",
  "key12": "66CtyrYH7SMu7eXa7ng2zad3PGnDLtNvwPA3fEGhHe5uk69V8eRdSqPe2DdBJR7bAPQiHs3kfRA1RTyWSzRVUax8",
  "key13": "46RMBsxMM2ZCGwKxpQ2aLRbjtPRimjLXkT6d74mMi8BEokibxM2riYMNxG3SGrPdvZE7CTXexMfxB6vhw4BbnGa1",
  "key14": "62kN1BNmKCFYQrqhMwCn6xAZiDjqdrWjKrDiVy7ojZwbithRnoZhUwrDHe859GEam2EJ1ghfVfThXCwPBocjxY3X",
  "key15": "4iggdxfWKS1Ez97mPSNsbFXMJB8vieBtztnaGFUByKaaGZ57VCnYnmRJzSPmNNv43pSDxU7aJC1nWuJjHQq9WznS",
  "key16": "3q1FW2ceJC2f4hPuT3VM75kaa3923uuGtvFEekeALtYfuazR1ch9NdbqitfDe8mM1ycpDRYJmBFfzxHci9uWNwtx",
  "key17": "3DJwCjgWsYMUtwk9eTuqBRBUtoKKS9FWgGzQuo8FEz4xVV9NoNyq3XbcCjN1j7fhJLDvkakaZR5at1VnxCsyokM9",
  "key18": "2HKnh9s8U9Xdooyi8P7PQa2UMdHNZMS7j969hcBJP28dkZoQ9eqwsQcKsesUvr41bStf3kguUSmTxMyX6Z7crPHC",
  "key19": "2jvv5u6yimQeDYdL5kaa6WSQ7P2j4XqwW4dX1dxKGfHBbcjxLGuRcXv9d682nPDiGXT1PWuMeAatmkMf1YPJZ3z5",
  "key20": "4sEgRd5fKq8DKYfdWi3gyj1SkPAHyNQdWwzWgSMHT6agVSbt8ezNaG9Rm7YwYpBepaZPG6MJdo8EaKHhdsmFBL2t",
  "key21": "5iUNZy119TD1okDJNuio481LbmHzoKTLjxT6zAvC6iKTTQYhfwhQopnK4x8ydgfDtFFkVmvu7sK5QMNBv2mbEi6L",
  "key22": "x48rfq8G2bJrTMWjczjavAWhHveneAf4GzoRZWATPuAGGNAmosUzaAoiembHro4MeVJuoJiyT8ngUddoBL165xk",
  "key23": "2NDgj45JfT5Dvh7tbiuuj8JuP2p5DWVkQDwykrdLtobR4ebJDFQRvmke8JztueuJgu8rsvLSDGTVZr4Hz93eFNUc",
  "key24": "5uMXCu7jPrhwufTPLtdo3SRREshgFqZbTUYt2jQCFZgXUFycemFz2Km8iEtBXUYPc4AyzkP5fNUfBNw3WTdsKyxx",
  "key25": "47egwF9E3D2gpgw3L8eSPsCMnSasQWnwMx7ShdRyC1J3VJo4iUAfGTNoka12FJ5L2bR6dg1oSrBqzNpprG61xbpX",
  "key26": "kVPwFCqJwcoaZVixYJSDppQQTYq4KSUsYgzucte7RqLYnsNq68EpMneb9tzGqJz2NYX1K6BMs24ewxLVCAUGivz",
  "key27": "5dUSWhedm3TqrFkcMpGhrw3KqDqcxnM9VybMMSrCiXX2UiKkxUNEYxTvwpiDgzv2MWLTRe8iRNoP9QDH8U2kpewq",
  "key28": "3BYXDC13ybRbrApMerdDXuMmy5DmqwUbQwwBAZut1iywtDs368vjrTWTpM8hWZWwZbSYmihcMSyhnajMwkcE9gbC",
  "key29": "5i1zQjXeqjDLUT9e1r1rfdFcNqhcKUaxbuyzAvDVyjTrazmpdMd3UUshEExUk8vhfegCmR5wVqEmh1kvmdp3C1T7",
  "key30": "3mmTh2J6uLcbqnKPAYjEMHhpQSti4XkWZ3DnFApTEY1Skue7ohgJPWJKbdojzuF2KucWxNPwGqDcTXcEdXPwmABZ",
  "key31": "3xAskKiJMsfbhi897NW31S4ZizbhMfKexKCpAA82S71sXY6UUcQEfZVcSirMBJKRvPFrxCZe2xxyCdEwH9Z6rCMQ",
  "key32": "48a2yJia78stkAZbw1anu6V9yVQGJBchVcpK5u1iYWZZfWEKu9uWSXBWnm6BwBSwatdbwihCPci22NYAjxHKrakW",
  "key33": "5WS43ecGuvKc5tb66LKmNNHVuUvTJn4mSFhtu7B6kzvzvFZDsJ9tNc2FRYhUaPU3cQfz5MdbmcsyBPJ5JbGL9RnY",
  "key34": "2RGf6rppuuSGVNsPCPWa1woTjoR4Z5BUkXVNPgZM6YMc8asv4tH4L36w4c5FN4UbnVC97j3Ga6LBxx6NBFugoFDT",
  "key35": "5oetH26mJv11gDSdPccTs1jHzDXKKVcdarSaaguMAgTfroHxYHVoHFjNhrSukNwfeNhXFy7HtMtPXC9piwsvLyXE",
  "key36": "5nmp5yXv1Fabfr2DXHF99W94FpSrSmcX1ST9cBbgPrcsCcYuJfE3St3h3PhZBZsSGjeKLCzPWW4rZwi3izMFLnTt",
  "key37": "5HmGAnCHvgbavYQPknoUiBtmMBPYq8ZtN7kTtfEMDNe35oh8gaQhvztwdrfv47eq17fR73QM862V3iM3NZLX3Rwx",
  "key38": "4BMvtpXeuoiGsFNhKjS76v8CajWPGwzDSNmYVzhCDbQZ6C6Q7QJCsQx4ZyyBgh4iF48hN6UgFU7MH4mbsQLXNbNC",
  "key39": "3jp4Arv69bJCA53m3rHKxQhSq8GsTDUz5MdKNVCw549M4ip7iGTob7fJcCyrGzzw9UZ9kmJKWBq8q1pD7AUR7UXo",
  "key40": "5Fkr1CSqPeiS4QzbNHRZf4rEbNaLKse52jtPQwph8KfeAkUuehYArj9kdrGuzP3UEbizFQGqVAqomb8FSsydcCBG",
  "key41": "3RgkpoRU6vEJfrztSfvEqMvuzX9dVWLuGoqLzWHHEc2TWPhmhKSVEPMz1Myz6NCAqmMqPfH44pwe5DuVnqgjtXfa",
  "key42": "PrZ45NXDy6HjAZWm3W5o8kHUmCWM4WgQVMYpdMz419FrktjuTNsZLBrT2GJVMCwPmYuBUqu9XTsGUPGoeMUmLgz",
  "key43": "2f8T4MPk1ECtE3E4m28XpxGhQcu1vDReD5hez4bddnRodw6vQxtaHB6jnbo8HD2WtGHU7yJm9CEAGr3RhybkAuRw",
  "key44": "4e9dwmTjUd9gQTx3amqgWnaW3tSb6p8GJ73hjet4UD3BHxtpH2U6r5KJaP86ZFgh5VLehn8SMY9MYFNSMpaL5CD7"
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
