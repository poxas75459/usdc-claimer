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
    "4drpm7cbTTsHcnZfArHgyNqy7UxAKQzqvjS416P76qjCtPfBed5S2x41iStKEJ54YXBXdta6C4DXqPNPkgnoodiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrFNCni5YzsdqRXyT4qVQJgSzFtjemsEW6F6jAeHsZoaMCxDvV9TfpbwfqcPE6aNRbGXG9SHG4AyNbM53MrSeYd",
  "key1": "4iLtmNCzU7rzP63VabeveoABSf2k6fMxG81SvqYDpgEAoaDYVyUKjmAPPZ5dM6KgGrirtbsFTV15bf8EQyEzQkmL",
  "key2": "2kamCmGsX8PEELoDFuUqQMyxSAiSsWjoJXiBiUVjnPVHPrjvnGVaW69kVNJxKXme8LyJG33Eu9GzvuK59KnV61cK",
  "key3": "3yrzFgama6k2NwwQhGHABZdP6gMUHVRjubQFmNbKdnESR8gSMj4eebPpGAWN2Hv8rYenwfyvQ7NndsATnyzwzrJk",
  "key4": "66eV9QXBthJBsvAxfiQg81RXNbsupZGSPkw7gyFpNxbzyuiPaBSpA7x7wCHHq92kqwprcYCMcn9LLFrtijUKf95j",
  "key5": "4ccgYF9MA3NWVwFESPW2Jqzq7FwVAijF34nTZQpExjpz8pfEdJ9UevjANNaua74rHsEYaDtWXJcs2MjrGdCvor4f",
  "key6": "3s9bBBNPx8arQ3rQnP9AZXoB5iCoBoigbbYDazHwEzdGuYTtzQWX6yJE78QSekc14XsC9Kbnzw7j6gJ9RSCZ9SMq",
  "key7": "2myjLYgdmicMUzHF3zmTQhX33A78iCmNNWApRTCq3LBf8ZddkScRJokhPBW7ukHN3KbJBuu74cJd74GfD2GaoNtv",
  "key8": "9JVTV2D1GWSLhnV5M9NyZaqKw8xmbvPh2FyTuCCbeCJUkn4MxU8PDg4nAQGNQuYX8CaasgWRZAZvXUtJi2D8ySw",
  "key9": "ChxGQbsQ3taVwUHFBNQKqoMtqo1T6q9X5MhPcGtA6QBU2cDUpcYgwAg2uCZUkDCBRr6oHNJSP4xyTRUjgh1KQcj",
  "key10": "3gW43bW8nA4PdyL2fRnAHZdaphMzqobJxi4CYzBfzT4wnQDVuKUn3dcD5J9i4Dn65ahcZytq6CLX5XUxdR9zo3hp",
  "key11": "cZW77Ep8cGngmbtAZj1VZR7AEMANfNE7bfjjgbrEFQDna97NT68DTBoWTqjHQ9fPGHD2q3dgMkqFEcym9p8NLE2",
  "key12": "2RyAWMb9p6PV4B199EzSThTCTDH8GGQrowi3mWsfx5jSduZThJNjcUXEHgx9DUz9jhRi5dKntjXDHj5pdArdjCv9",
  "key13": "3iwJHLyAmdwdwVQHPvkS1RazVGGD9foA3mqRzxuPLNZbhUBz3p1T9JXFT3m1FvDteA6G8XSE27755RZb32G7f6yX",
  "key14": "34No3tBSFYAuaBPucdExYcNwQozkGBgACTrfxwNzUR73GD1XBBCKZUL5dAdzyRoq9yPHBpFtv6GTdJJEF96i9Zu7",
  "key15": "4bX5DZK9ZwGFiL7RieXxgmuNXXtdGTXfzGHaUyUkQNQpmYNAiiVLk6QZ7XpFceu48mJKRsuquZ3kyDCpxz2QD5qM",
  "key16": "4h5bfzjYGmCnfuCn81jJaf9EorBLjV47d2CTN15T2ctWz4UihDoCkCV5CDwfzsrtwF7cydGfff22hsawaQASdvjf",
  "key17": "3tHCY1mnVUXgBzpmU9aGBu15P5gBTXjpPW6i5bridEPprfEX12H81GcmLfb64mxfhWmJtwCCEpcVCbc5fzK13rbA",
  "key18": "Eg2fziRLrcB2XFjj8SwEpjt7thP4QUvatdBkGY9owwkpxnpJEvYJ1DMTmxyTpaFssV4cjvCnHURC1orCk1uUDfz",
  "key19": "4MD1X8gDLNoKcNiVHYEpytinGBAq16a5SDqjqakmvkdq5H2dx61DDCKRcDAJprFfcea2VFyFssLvkKDxKKHzbR72",
  "key20": "4ae3NZxk1GUfmhp6hb71Ww7m9DySLFEeohMLW9Uhm9poyN6iMorc8JqpUaMYcJGurcaQrZUMuNy93qh14Z31vr46",
  "key21": "64okDX27ASev885WSuiPWj83tEm7RKGh83RNq23yhXk8bY2YDz1Dx9H9hxRYP6A22mXxGsWxXtRXReYGcJnNtSUH",
  "key22": "2qrHDdZiwhyqUsT7rLZyTPD2eZAcokb93QySp9fYRbgTscZqK4Jy2sNGTJKbtdNgxXH3qEwC19NgMbkJtdFuKwcF",
  "key23": "3yDqwskM9f6tRmdxXtXvSZhuzzLRyMNY1pJ914rYW1D98hq8vxkvyZN4J1KGRVaCHHhW2SDTtGjU8F5G3ZkrkY4s",
  "key24": "6wxRHW7VVq98YfgqEPyZAixPcH9vskTGZcZm5jaSo8e7DbbaeC9CfYRigd6kSAXy1WJG5RS1RFzHRdGngwU9ngq",
  "key25": "9y3oV2znQNioES1a3ozsZYtSqBUeVECoGXWb1PMLqKwGuTWFPGePJsKb1USxJm5XMMt3oFhFrHLMKfyg67ZLLY3",
  "key26": "Ukhqsf4dwoUmL3VpwJN8AGKfjqyk1w5t9ia2dEkd7GZxcPkCPbbQDhvqbPKtgZkBw2V3NMH2TKmjQLhLJKP7HAL",
  "key27": "3ApZA19Joyse9YiudFWW5FK3oJUTX45cPrgKfTLoRRsGFKeafSn4tPCTmtXSXF6MS2EdwS7XkhxXbX3Jot7h8z41",
  "key28": "2SiUb9SwZSGDaP6ChzMJ46E6DBS6cP6SqzWCGFF6o3hqTrygg3o444TRzZpJMYw5PZqmq6FowfH15zd4QU7zKYAA",
  "key29": "5qnPBEHuGxzU3MQ8RsUfMQUYCfisVA9r8pH3aqoVj2tTcqEh4aeZpNW4T9vLQ2E8VdpyKvzWeUA2Htv29rgDxgUi",
  "key30": "2H2msjwegLGtKVbrGJpebS9KMqs8aAcAx787k5kDiXxC9atx5UWAKBCdHcYC6DSa2dPwjq7z3Ar63WT6rZfwoxcy",
  "key31": "iU7Nij2ZTsWFMXvKvrf5Qi3i8wyQcn6m7f5VbcWQzzwQuUdV1SoaZTdKhqR5ns92T8vxJYFqvvvytVa2BztMS5N"
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
