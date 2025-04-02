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
    "Za3GA6JWEc6NDFu1WyvoUopn1zyYE5tZh7MikFDYd1LXkHh1U9SF2NsTq6DmPrMUQ4MSxiS7rZLTbVhfyg9UpPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNAitb4S2nhK8STzAYv2PVVKfnww85kZCUUv79Us3Qx7Q5KbSCbPjuqFH6MfrvBMkjXu4oLiNA5mDCtFcak3pCF",
  "key1": "4zAiT7bfisXTgVoojwd3TTmVTKhENSLvvqNUcsFC7vDhFV6CBUoWEpksQmbnoLoh2jHR1meVCRCu7EEKMuapZtjF",
  "key2": "2PSGGLDey8qZdmzXGoVafTgLjgdmKdAmgUUJ9Lgcn9FwGfPhWNaXZgsdZskFD6ZvHnsVUztmJmRcB7mEevzLrksJ",
  "key3": "2xjsKYhUKw9PYDApEgJgyzcSAFpJUve9gGrjLKqdt6hKruWWzSnb1KTDFDDd83mJ4caQAr15SwZj18D6SVpox9P1",
  "key4": "3RUoWJw1gKAamF1mstpafxxbiTytLUgGa6qLze91ZSQCi59GLvMzvEwxcTVpecu2LW6qZUgX3NHwXSoTTbhT68i",
  "key5": "2DjxdanbojAkghQa8Lo7C82MLWWUsw9GWy1rFdA33AhBK1fSavcmWUeWgaiti8aUfiWJZ2Rm5gHBkMu5ZUGbry6G",
  "key6": "tvibiaFqbpZ64mVq5s7ZsSNe1gUX9SvdVLByMvVEpWzTQ7BicmH1fVwCuGQyq4yVpQagJ6XaZuJTghjZfi2VYzw",
  "key7": "5bzVt5KoadG6UopwAp3D5VhjwN1E3ZgP4NconyEzXCypjt85YY6aApSBjEQ7VwD2huv3kx6ncYB1FQ4QpjpWxVWD",
  "key8": "48NXJiQWHP5yJNPtR2otCuft7Z49V8nxH5K2YxXwRXgwpCmweWGRvTCWbof9BBzu5ZgJivhdU6bWc47VFXMTLREa",
  "key9": "3cgo3JPRjBCw8NhxBswRkNWGPP67RgtXjfzJ9Zq1e1HYewPji64DFJG338z6Gw9DCKt9Nt1f9BRCPwYHmq2mpYnX",
  "key10": "2beyLNfUDFJZxhHLKseAW844wQS5yCLyb8Fzc1kTAcWARokZGSYJ52hZ5usmZDkL15w8ua8ZEuBVykXeAisMCQhi",
  "key11": "bRNk26YmPvjp1AWqxBZziKAbvAdi14ZPekqPs9WGUDBbteygxYAVggdbQqSKtKB1kTEj4AG9wuWv2BkNNAah1DJ",
  "key12": "4w9NPaeYcmRd5XuXnUp4XVe3g3AERysXgpsE2LgQCr48NmhXNhZDZVa5KsdVPnqAxXiGR3kAujyHzdcrWsXXSmuF",
  "key13": "3hCE6tpzKdnHKDTo7tyB6kYezdpk2RGNhc7ubgwWXXqLB5UioxEhjJjNQr9NRSMXyCnfJvbKbvjeyiqU9zBvR6TD",
  "key14": "3a7DFPgaB2TtSB29ur8ULcsMo2bgQgTymkVxubkDRHt44AdS4B5wqWiTjhFf8JS2NLNtupC22rghTjLqTCxGmS7Q",
  "key15": "34Q8naNcWnvU6A9XGEPVfLCKepJUkzp7hPgh5DG7oCPg7tdFRkYB4mNeZTp2pg4qLF6fmtVcq64jHsjpxRRacxsX",
  "key16": "21UXoCrhisWmQvgHVyEWtsdREu6ontRBkC5nNZwGby3ZjZ2KHHKeuqyuuELtKyWJtC1BXP6Qd2wXx4e6sHcCmcxh",
  "key17": "3B6CgZN5WqLDyJWbaR7WLbJbVRFCdQ2JUtijgSFiVoH4z4jnS58P45NZnxE2aVjW7W5EGN91dMH1LYqRNpHKsBjT",
  "key18": "3Q4kcM4f2Er97Tnf6pPkTWN9sYeZKuPsJiptLfBYDpV1FtC7e92n2zkvj3gjzH89U7DPB4uf44SdKB3jJsFe4Vxh",
  "key19": "22u1mi2k1KT4PUubkkZjSgqRLyAa7vUeNzRSttJgwwXJpD6BXWdtEduMx1RJr9DSspze2KfwBXKCLPsYSTEusRGk",
  "key20": "4zFkjnE7VYTmzNQycE9Cy5ydeR5iUAhhqmHKLQ5bYxDSsmCQGhZoEfYCFsz8jazpGugePzN6sEKZt49rNn9JfjpS",
  "key21": "HnRQ1p1ecCT7DtdhnL98T6PBn13BUNKTk8gSh4AthuCnUbs3LrQEsuupJ4CN51hyTiMWJVHJz7uCF4ER8rTiTQm",
  "key22": "4jPhraLyW2TVR2M8Rh2cCx1cTF2bu4SBKYiMWD8bTFeLGyvToVxFijXWdo8JGGkiCFYyd9SH8XytSFVZVwjSd2eD",
  "key23": "5QBsQy6vF7M7bNNpEYjqwkUJvSBK7jD99JtVgw98GboVuGzAJ1aaA6eAh1KhkQNWfzSYHHi4AAUPj2N8DnXBwFEm",
  "key24": "3d7BrkSudJEztnxdphbS9QhjWmMkQ4FqRACifZNaPY1RXjjjgqAxnTYvPkVBv53NQKfXJmVesujoc3DEEawjeHGV",
  "key25": "431ErE4qQ9SCsmMU1EjM1BqSiDBsixHkz4eRB6CrpXUFxMKsobeWFy2oYqUMHUfX5LYGTrZr6dwGz9nRVcaiUhMf",
  "key26": "5dVMHrZLsTxkfPibWGTEXR2XcHiVo6XnVwUWsvGMmxazFrvjzddxBSML3qsiYC8a1cwgJSxdcfEh2S4EbAeXXEL6",
  "key27": "3URRQzhtpScp4rQNt2UmD1AdjZYH9BE6awyq92gqLcU83GQsyGhGYst7Lf8kG6R8eUk33tMTMneVEkqPbhA6TdzM",
  "key28": "5BAQQ23NRwbJZwUZ2fFxEYzPjfMioXhZ6Eur9AfGVhuZgaQmaPivyizZQoaxZFJU2gXwwX6BwM7fipgHUZmnPEjJ",
  "key29": "Fv7UTbfpoefSJy9ukiiQACoMY3XxA92hBaA4R9jzFnkV6nyCgZ9irEzWGismKB3BpqCsp2izpNFnGQ6E5xSw8oh",
  "key30": "3xpATFBTz57HqnNWNw3y84UHdW3n2JjeupPVPSEu4p1E1QfwGHeH8d1ReJyN3ySjuaDiQz37yqCzPrk9zJHB68tH",
  "key31": "5jWkYSUjSPhp1R9wfupxdNqNPtNhVTEjZJhy4aNrz2umUtX6rwZPRrwwUdVP5W2P1RkJxPCh8y1yjkNGygYS96dh"
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
