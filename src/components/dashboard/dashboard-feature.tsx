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
    "3HgKbktdDsfwSRh9f9CF5QUGxYnGtesSFHdbjFbDMBjKQuavpHHMsavdPapdEUxyT6J4Bu2Y9B9xixL1ngin56t9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2Yev8BDBDR3Aw97uJgjouv8ajjNiz3E1v6bdhDdCvneAjUck4DRjst9Xim6ubrEUGPjxTVV4TDixUCsBjXP3bE",
  "key1": "5mgJuzVTmVSqcrYKDPEHx3PqUN2au7JenEZjfqQ9YFFYUm5QUWpKUkf8tq7NuQTKNjfCN4YsqH4hMbRYePkPHi7N",
  "key2": "4Q9hgiAUtK5MG1BCC87XcGhmoHiJoqtfYWqi8CH7rJweUwtZtUpYhKUvH47DkFx4j7MCUP9qcYdsLtNjd61Bdfd2",
  "key3": "48RGTfJYMEuYEmPScQNgTxdLTFWQ2XoEtx2U7yTJQmh5WrcSitSg8LeSbmaQYgm3b1YGDBLaX1u1TaE9x4kych33",
  "key4": "3DNGZZF5ZrXcfcmnchTb8wUq4nvnUe34kRu56kvjerc4jR9w5rGp7cMsMmvh7cuNepM82FPbx1CnfjjTk9BMid7Z",
  "key5": "UMJP7F4pQV7nym16Lx8XWrcaYgDobvX2Vym5pjWvToQjfkUDH8zuf3WxTinZPZEJExmzcpkhwhMJ4T3YGRMpv6f",
  "key6": "4n4PhnawLFFyvT7EY3hpk9ZhFbEnZCiL2Qrt5LvxEfDsB8ayysczhsv6VM2GoCLVePubmSjqaSHEKXvQbxYzbQvZ",
  "key7": "5S2vciGwRXPgVkXqBMjjjnKMDwS3rohiiRhzDpDAJ4YzFkUSdZHrZ9Brdw7hcMbQiGdgpNNaz4jaBubeDHzFm2xq",
  "key8": "36fp4zW1GoLqMcb8djYAayuEau72WytLaMscLcsA88Qw9qvLcd3kP8FKNq5U8SMTUVWcoDx9p7JsA99YHLEMbW6n",
  "key9": "4peVhHtaSGNMGSPULns5dU7vUrVkAQ5qMFeqEVdsU1RaHNaC9USN2hYJwEGPTH8gidYShYjFnPrSc9RRpKobQKEA",
  "key10": "JHA7CG3o4rTrUeuiAUamDBdvMik9wVxs4NhZ1X5TQWhBp8aPKiYkSikQxusMeZ1WwwNCZN234up79sHhxkKTMCE",
  "key11": "tbWnKoMFdGgmuqQ1hVoscLnG8yjp5MqhSy3qoVfiE9WDcHZHpHBivR361Ex9TuTHmTvWcejPDKzpwKTy48BZXKR",
  "key12": "4BgoReJcWTzeYwbGTDp7p1a6x6zDTzv8SHf76M5BtKxTxi2sJdGLwQhJPYMHzcDvaiuyCpUK6uSdbuAUVU7AqAo3",
  "key13": "59b8KWx9dJrJrRTSdPARGUnNPsFNwewfPTKe5KUy4ZXW9EgGNka9yjmrRrL2j8UVQqVCGK5CHvupSdUnxZX3NUPd",
  "key14": "2pjt5SdJE976k4PyfESqXMcnPcrQz8UNADLyp3EtJKCHiA5PccVUSz4eFTZwuKGKDUPwkn9Cstr4FkPa6s6vFVFZ",
  "key15": "2ednDqBgiggeJHibbdtQhA3AgvoPwix6v5DUTYXdYCej25dy7wCAe1FeoE6bWFXVAFxHmVAA7EJ2apP9BBZdiGzy",
  "key16": "jgnomLVPzpXmuSkfGHLTyiNEYAXcrEexWkkYfHErFzCAh1XhM4yDj6LitGTfjAguvZksVr2iPAmz9gWQH3aLwx2",
  "key17": "2yFZ3MZh5oLKuZ8WwWXtgX5Uaapzw7HX876gg3QSb3jMEx2581b9ho8bPrDdwMQvncXJA18fFRW1eMo8gJpZRewt",
  "key18": "2XiCVQMowkxGcCEjcmVMNDmmgvRpSZvwUhfnYwDpLpHSMEoiiM3Yw7QoEoTJDgDqjME3m3HD9TfxciguyEZs3yHn",
  "key19": "4ijwmw3XEEUgkSzZtb7jSH16Y6r7y9moaVTWAfaBjULTdVqm25Zgdt6k3AtSypFgbSnoG9tVMN4g8oAacctNzzLY",
  "key20": "5pZhZXYk7Xx12Vsym7JF1dve2ayAs71xE351WL86HysMnrR9B1LYDAbxF6pckQ363WKPBqsPqfWgzbmnAYCYDLPT",
  "key21": "3VrhN3nKrx24EfwDAD1rZ8TSzwB6rGmgxXKR9XrR6FzLFb7W3ux6AhL24xQSB73rFv72Yxqo3YUZff4Gre3aqF7j",
  "key22": "uaJ2F7E2vkYP1GaXmazpNSfKVQGmWAyw6zV1e3kEZUc23mXU9dqyL2qQRtoRn8o2QL34aJia5WKqZxE8PjjaemT",
  "key23": "3y29BHzj9QdeyoDWmGz9n8b1mJTuycMsmx7e9XQQ4y5AB3azoLeMPbUTVthhKwjbdNbSet3MEX5z7wnH81mhKA43",
  "key24": "3PvuaCU7hPPAQKSqBNaNhEMXVUWpQLvRY1Lr7xRZ3YFgMHxpRkG3e4mFBZ9cZ2P7YJJFjbeYZhNgrdHspvvsHZFB",
  "key25": "4pQUt4dJUiLGfnetiguTVcwHT5twvZdNJqNmYfDnRL5HF3dGEm2RnSnTZscg86XP1Cshgr12V5anYtps6nJTxdbr",
  "key26": "zmpMfsSLSvSYGd4swdDGpcgxyCQx6vAaVxkdBwCPSRmdzKNJYVu1rCxn7RDNkb6VdmP2z9dAXFvRZHHQmoLWw3D",
  "key27": "28CZkz5hzsm7363cks5jv8KgF5tXd11oE2LciszqGPaw7N5fvf8R2kJFynWo8HQ7zwmXonycQ49XWYrDVjcfNFkH",
  "key28": "guy8cPzm6kH6yHn9gGet7ifsd8am2ZiJ1h4o5Mj1w6o6rWRLsKoQRYBx11BZ8broyX6bAHaFU1qpByxgk4wBfgT",
  "key29": "2LvhQ8AE8TESDsDrfDk5wJ2MLU5uyATxEJ8N5Ndr8yaRUMG2qD6kJ3UgoHjD7pNKAFaM2Q1epNFK2fuPwXqzwxQq",
  "key30": "54FaZV2foReNF2X5rS2fAMBZbCZriw9piFfHpuPznFG4UYMek5G5jdcEXkLq3EQbAxgcM1Hn6DAJP7WV4Efq9yU7",
  "key31": "3ThauRGuh9BCqbiZn8az1qkuQhByUHtjiHWykvDk8AJBRShhZgGdNSgi8w6RJ4GQ3AJgEXHxHmswEvUEXchRhuSZ",
  "key32": "4pbPMWzM7jd511W5BQHEY5D6r3bw1EUBKFNHdSMaXrfjeL6Zux9YNFJcFs3fKcWYB4VWwz7jKWrEacHdi8tsshBb",
  "key33": "Mdf12r9bJyChcodjNJ2Rzo8tWC79N6CkuJqYZGrRhXcFeuFfEcrZZx97JVMcATSS7pxyyzMxR9BNcMvzb5q6wUo",
  "key34": "4LgCgyFKqrpNRUKJqEHUqrnFbzJT3dQgbxZnEUmCtVm2mwmTdyuRFizpVrTeZXe57TjbBaFAusRGdqazuA4ZEpGx",
  "key35": "5WKu4iwprWuKsZ413VjrqFfsY62rM3Rgk2DnSBnAGXk2QdBqzRGbMBHKu1W2uctDeZW2a1dmHUrXDhoVsEKBx9ig",
  "key36": "3B9hkMLZwpFYtuPpBe9XGRXjwG5vLnutFkKPBNcf3AhucCpknC1qZ577SgW4Hpfm2c1SQw6jTsu7p5E8LDuN8WxZ"
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
