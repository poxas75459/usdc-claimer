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
    "Xa6nkyp1unPt89Wwex8qWaAdvvoYUDz2CdD414zJkFa8jYAr2ve2vc6a5WAmoFD69i7oDwzsuxVWpzdyWBchydE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41KhVPKb8kyV1VTNn13nCBipLyV1L5mup66j155kUT7FM78soK6QTecBfNiYRJF8Qr8SpCUC5FV6Fi2iegLsKsDu",
  "key1": "5Qt6gC9vScpZaTD3F3TpWNfkZZaLvkAeUgbfH6hQS3xKZ1wVdeJQ63Saj4DvNzr6jmSyL9i99B7xNhV6sy6VQC6i",
  "key2": "3GJLL2C8qvTubqpHWG85KRK7hyPYtj3AJVw8pEssu7bLAsoQBD2EiwUipFcoEm3EQbFhSEAEQHGmVWir23FmWgdQ",
  "key3": "52ue5vr6FUx32HrWWv4w4mxf9FyB2KmMwotMe8wm3obXJ5wAspRCQJikXn3Y64hVLGz8AvDWPWT27YCHJ2SsvwGv",
  "key4": "CnRajVZgGpnvz4SdUYmBpFjruQ9jVQokFKT1X8ZTy5hiUxyiDaVy5QtmFry6DcxjupQKHcBTk75n7PLfyTfdgMC",
  "key5": "YASz2PjWK41Eou4L7kzpKKox2AtQPSJjLhjBH9bEMCcYVD4JdeymLyBAdKKmA8NrFxMRxxTvEPx262rzxUWQfiM",
  "key6": "3EUzn4kmR2GJ66yWAqHFMLwgYZVnFxbzPV9s5vaw4ctKV8jrYHqWA2YA23WtU8AQ7b2LSygAhrQedLWSveXdn3zZ",
  "key7": "2jDh5TYpPohg2h4CAw7ecCaECFxX1PmBjCpiFLangfPgA1xf8qgeGvHSK1mn5EfsjkpfQdRo2ZdJv1AjZjV9wfQH",
  "key8": "45TzJEN8s4nSBFzUHSRUEsPuzcdVPcX3DEX8KF7cgG8n3Kk8qizXoV16SmNncyFtGUscUmHJ5PVK4etALctUoQj7",
  "key9": "2LL65D9WqvmarZY6HhoP3Xa9T5YVzihFaAw9D9jmUpqCPg2dqfB3m32pBCogh627rke4BTbWjXh1p59WTAuooDfi",
  "key10": "46XJ6XBSmYnyevwXeDba8y1j6C3ePq1AfDKx85T4Ck3Rr834k2XggNigfPbAmfEtwGvCUqaMvhZM4jz7nz1uTkuk",
  "key11": "3ooCHjaz67ghYaxvDU3swKWtB5tUe39vEhiqJ5TRUWECqHaN8GVxncpPaAWZVZLMG18u5At3SFeZvmEWtHEF3hTD",
  "key12": "422dStpgZmFQKzZhJ2vzJTKaiBNgW2vHoFjhjamSoexMWQQg6K3fbbT8eVLc9XjpSCaKc5gWEHA97wGYR6jkKBTQ",
  "key13": "2L1NfwzfLLSBAyAiiFb1QY9feg8yrAHTGAVPxmkchToLDZBHjrVoAKaMu3SxrEXi2cxkMZewbvJ7FTMDmgT4xvdU",
  "key14": "24ywwtXvASQ7RTugZXq5s8jDmgxMyjNHtp74srX3Q7YVL6EyXwbyd1dTWiy4PfqYfV5Vy6wmaqw8DdkQtNqBSwqF",
  "key15": "5K3UivgiUJ7jfqbMs7L4kdAe8d5CrqFMS7888YFceurEVN7JCg22BLNXaRYxkzVdbLaLH89gbXfiW347goaK1Up2",
  "key16": "5aN8if73PE12ueoTVjGGyUjwQpy6dVnnjLp6AFZsu1GwNQXeQzKzoXJ9tbuoh4wRKkNYaDyU8Mghi4gB6Ay8gE7w",
  "key17": "4cQy9yiNUHxwuaDiefAHaXBJZX1TKGxYsEtJ8vx2hkJPpjbtjpvXJZnmW1BDGWeYYE3jWeXoKBzgTSippCSpzm3B",
  "key18": "F8tvRSmqcZX76HmpNpd7jszA6epyZYwPBrbPYV2xULLhuLaEnQemZZ2hZncFmMYe6gjWDbhMpVi6ktHtWJCPQFL",
  "key19": "3KpXbsQdFnAj5fKCGEsgjRz3dP2ckDZEJ4SPAiJwUispxspDzNZLQNGVs2rBx4nYYAaxJgiYUiTtNPKVD1Y6arM9",
  "key20": "4bDA9HveS61aWfH68bTeCDRPHjrjx4P8gVnxVPKRo41yMtywFcs493U2xz1bK2i33wKgHZBuAiDZqa8yaTFqaX7W",
  "key21": "YdqkmmaELrEog6348jEnVwFjcTuddZ9NrW7QeqS6Era9uhHe2SV9FxmkGq7DfJGjw1kL1DLpUYBKPYMQVEuVyZJ",
  "key22": "2sDx7dgHo4FRkrpFyzVRpfF3668u3VhW6QCoHQZgVfYiR9LCXeE3BVPPsLfXvxbieMGq6Z3JWqSY94MurGX6mrDd",
  "key23": "4wTSaaikEWiaXMrtc8E7aoyU9Y7QDmd2VU8RE4KM7Wg4ftGk5LCxrN58ugTLto1vPtVuQARMaRWxjAMbhYxemKJb",
  "key24": "2ba2aRG5xFLoWdUm5ozvY6SeDnryZjh93CaXZPCiAkuXMjXS6pPNXSEgGJ1aekttkxMpCm6bEBuKfKc4y6Lmof3z",
  "key25": "PrCgMiBKYeMELYknfpFfXUor4ccHw6B3fzmLBgLZEUi8Jv7thjk64uE5znekzy3H5y47jXVd25Fbdwu2K48aVtR",
  "key26": "2V2BrPM8zGaTzRp3ED884b8TMs4ojkQczshYEWh7oJdn4UnPjjAPaQuWg1ugp5cfivAwUWxMsrYstemXX4FWMUdU",
  "key27": "4ktUT5mHC7ZjugpY6sMAe1VyhJnr1w8LK2wB59mEvv9wzE6HLqe7ai9P5kQuvwdqv8xTFSCSUGkW5ZYML7MYHbm4",
  "key28": "2NP3wWmEUPi5BXrA5W9GhG9BVSi6CAPMQuG5YyMKvD1PVCp1kzmiFXvXngQB9NTw2p4teT4StYAPFfjgE7oLQnvn",
  "key29": "K417rxyhsAw1L3B49m1vxsgjd4DECC4DW1y6Mw2SRWFyzrjiVNr2LGBGoeqjqJahyRRe7MSQp3DXraVPfpJajFp",
  "key30": "4UaC9SE5H434sCzFFkD8d2opCA5gWmEGt372guYjTpjBkbF9G1JwDS7EWi89X3Rnhsrsyo3D4UyReZXxfJL84iQA"
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
