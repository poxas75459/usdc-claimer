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
    "341XLWxxxbraa4CyQgVCkNPXqVt387ePmLjL56dQrMW3Z44NkAWos1pvpiD4Q4qh7Q6RyZaQ3Lo71SJsopbbuypS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vLPoLKBZ3JPD75qKRZNgLeSP8asS11cguvJYGCHwiZCAudWQ2v5iyx1mPUQ165g4VHxuYLNo3bhZ8hfsU1nn75",
  "key1": "2xLywiagdZK1AHWQacRNndDXgCfFasbSdxRLb9aMJZMticbhyR4XbTdfPebwBzMMxqLsguQcBQ1qDK9LVfNfEZX8",
  "key2": "F4zXkNAW6T1YGpNo39f5aNRXxwmdjvgJV22mYAFL51jnr5erTJ9HQRjvBDsj6Z5w6vr3ZKcu6Tprk8HLYcuadx6",
  "key3": "xih8zoWbSQvuhPDVqYXGa7imY2oDQv7a9sSdCFnVaA8ggg8VYpeJKJQh4MTvpdUiq7yNoBdxnhJX6PCmBNz5We2",
  "key4": "3h5gLhJcYBw4Jb1K8nxLwf1Kp9g3xoLNy5ejTzfR3Rjcodcet2E1Ak4TWxKj56esSyN6oDXGRX7fxxQX6Z5GdCb2",
  "key5": "3MJfpVXHEatocaNyKW6fKbqZaXJ6nVAZEdacjRiq4wdn3wB8Xip7P2s5JodL76jDDhE67jw9e1v4Hmvzfph3UcJa",
  "key6": "BDYz37DKcEP4GjZ3EGnNVSejfPxgGtSHN8zoSvGrHqmaUveeLhiEc2KZY31pcbjHjrnJFrihSKpSZ2xxLPbvswQ",
  "key7": "2eLjsdSWJrp2RK22JErZk8yJtZ3ej6xQro7xBbLmZoh9vRiUhDWDAPsfLtsZoUK39AGUqubgWTK77SD8DQ5EVYrG",
  "key8": "18Jsc8ipbKDWFDMETtVHRX6NxR2GaGggFE8gq1EgTV2iHBKLSNes5HTtv5gH1a9utsgUS8FDD934M456Vn83DMV",
  "key9": "3NaYhmyWSUdb736nB5c7Jh7vw4cKrmgYrqsFTC3qE8RHBtCSRS6gehD8mVAkiAgq4mvdH6yQxRuaErirR33JFtSK",
  "key10": "32Li8QUteqRYkeoBBGhxWY4UAodkDurTGL2mcogrynoMPGsRSWb1EBDQ3KEZSwTV1vzNYX5Ym9m985SYXHcbu6h5",
  "key11": "Thsrw3AerDe3Y3LVGsfkUnHQs43NPr9tn5sUQdWyvGSoZ34yX9rW4kocwWT2mg5YnsWAG2n6Szytjwq5SEN3U8U",
  "key12": "2mhe5YQfpw99ymzez4ZpArP5ZwhoCkaBUMxw2x7EfRMvDtsSxc9z2q1dXxg9PL6LscuJJ8iiuHt2Nkk5tH463yLK",
  "key13": "2MRFhtPBA4Uv7oJHL87SDdnAffLLZvFQobbevNYqFdPUrmP6bgPoF3FBYQTdCN7FQio3KH1auagejPPUyJXXiM3q",
  "key14": "5PfxfJJ7CQpQNJfy56eWpQAbKhyrTxubyewyix6GUFZUYuSf7YWPmcZ2jAsLLzrVLVUgSspzPzkQjaCzyYvK5TSc",
  "key15": "2t9TpPymuLM3ZUtWEeCk5tvi3YQJTfcWJygR6FXQV1BRLu5PmaK6ytzJJjZvuXgTdZTsiS1bp8oRk3yuVMi8Jn4L",
  "key16": "Jy83o8sAbhuesfbCSNVpZ572Wqcy5FDwkkvWsKoboMhy7T2kutthvzrhBAyhkHfcvLb7anjq6kHD82XKXwqNrkQ",
  "key17": "2X2pbPvchM3Y4wVo9ffLKNL3oLJgQ2UpLgHpdBUGmhbUjaUL3hEEikUcH3VPkVowkGFCDQvjRR5nLqG4ss7BmnDT",
  "key18": "59JBbEwL2QFYowfwZws259DV2W1tHzmvz6FauatqunAZ4UdBF8wNpuMForqKMYY2eb6fNqG16ap5pZrJmxNTNbZ",
  "key19": "2t4WfCPkQpUFJmBrpZpBN3NwwCi4QGRuRBm3pDHkEuewrpRiTa8SpVvhNrQEqszsCtfowTiY9nkFVbbr7KRWePoW",
  "key20": "4bnNkFcNricmdARdybzciAXVCrSPTmMcC7tTm3TXCy9Fro3Cos2k2phh6vqL8rAz9WTUSm58X3cZg1M2uhL8ANSr",
  "key21": "2EaXXGZVYGBG181ruXJV2njeTgfmQ4T12DG2WgqwF69s4xUm56g4sZxvLGKpYgrfakTvbzdWGzznbGWwZ7ZqdX9K",
  "key22": "3D1BibjBenUxBwWsWUkifLcL2ErKvuhdH8PwhkkKS8ikRe7wPfpdvT127LdeFNo4vmbcXaXM4AGTM2Sa4RnY88Zr",
  "key23": "5ZnbwKByb8J3rRvvLGwT4oQBeT7RotJoncoQxJmFLQiNGnHC85hrrr2yE2gQi1RNjD6frUB3Au4fHFGHEiWhFos8",
  "key24": "41xUDY7frbRerjzWKcgKQvdsioC76D8Q42Rywgq6ff8tKiiW2UdHnZzmSYtQPJXK3xYRov3UkknKJEmEe4PPRJxo",
  "key25": "2fgU4b2YCE95FVGJymDmiE916nXZh3VUYVaKuQ7kEA6uZizp952sjAGtJn81BKE3fdajNMkBwTzgeH38dvQUHyHb",
  "key26": "3yZ8UdVZd9eHyw3YSPVXjgwJugjkxiKbGwXTHPoyMEADtmLUVS74gP2dAAQTdakagHbWNKjFPFxEi7dDit9W3hGR",
  "key27": "BdgruhuebGHFufDdgtWVvQtcvi44hAsfzQjaqnvXmPZNLBhSePdgzBUx51HMPA8Q3aXRf6F76NZ8pdnGo222YF2",
  "key28": "2v6i96Lwk1yUBSUyX8B7Lrhh8zNWSZhwPpy2NFYPusEpLahFZbVjU8oyZicD5gTqERVGYCnjo87WxLCbRhwMkydV",
  "key29": "5UWCLp758ntHcsbSzXDxn7KLHyZMQLxotSaWtUaFY1zcYrWpjEWFcR8hybrJhKH2SMCmze1K5JHwJwLE5jqGq5HJ",
  "key30": "3DepiEbtYwkwoiWuoe6Duaa9eXjZt2erGEtgagZttitM9LLYMcQgKHptEnaxP7pibw7qcERiL71DwPqEUQDdJUfx"
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
