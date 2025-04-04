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
    "3JwUff9mXjQkXKGehjRhxYHW4Yh152a1UbeyemVP4MESEWsXHr3YSbNGf5mdARomW3FwMCVDbLJ58qEPo5iRvr5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7GcXEPBjQNwCy6yDZpmcNf2rU77G77SdJoKhoZ6jBdb5vVexH8KX7Wyt6mHPfDqLetuRAjEJYxAznZXJDWeATn",
  "key1": "3EFHJxZfqjfm56LQiV5vWzfAC2T8fQK6wSjCRY8ggNwdsnXvv36mSAhDP3PPr2RX52HDMfVGPPArTGyudfN6onEP",
  "key2": "4qHsMaZyVxL4cNDhxmMvypGF7UwprgdP7x5WWph3soqwYc2fVoZVPvNLfz67zzfvRdm15YvNBBxmitd5ZE1RmcuG",
  "key3": "4ZPazftm3F7whDSZQfDBZXUZVrZNW3pnXDy9UNv1sX2yQVviytEk9WfPpjADPE3VzC9cTQpidfmNUx8noJiisNv7",
  "key4": "4cdmpPFkz79mgZW8fVrXpiqmW1V5WZRKQQj8L8juUBYPVwpkCENKLv65gsdbAbp5xV9aooAvapb8mKrrFM5jj9h9",
  "key5": "yFshk592jzgwiW3QVandEkWYGCcHT6KgCbhHwQnVmf8jc7jFobPndhbG6jVjuMhUEswDkVpqvW4W6yyANAHG3qa",
  "key6": "27zuWQdRpBWdYWZBY1bnmz5c4Acw9N1FG7WTySGXPhAHAr6gTCyrMciD5fcGwGFXvahXjgHTXMUB63yBFkqeaF7W",
  "key7": "5ywxQZFzzJJ5HzntYKKkZMg2p2jniwbcYbk3CX8hzVizGNux4hDP1RvHjHVvhcdD8VMLJyfKejpKYUpACCxp3PHs",
  "key8": "5hEgqXmi8FE2GyTrEb8rXe2chRot8HQLns5j5PVnJaqhduLBZA4cJq43Bj3TnEev2M9afQ5wCbMTTtnAbN5AS7xQ",
  "key9": "5Suker87aCnThWGcoPWvRN5UTgWfabEZZHUv1aYKFdxfCv96D2GAmqkS1vouAGqUWx22472w5DKd25FL3XPpTnSv",
  "key10": "3AxB7smswmwZ9KEX9oNudcSeDqSxmSmSqdT3iuGeuSQtcU2HrwyTkgyMyQbBTmyR8zrQDEgPTQq3GzRcEJB7VFw4",
  "key11": "iABWmhWyVXNzCmbiLxnhvAFhXbtmTz8ysYpRv7Z2rRVmyv8WnWrY8xnd4Kjy83Jr3RMSYgvwYRxzSjTkSpKTEgy",
  "key12": "5n5rab3BqYrDbgiy85qYtYDbcPmVZuxLizd7pRLvvmWsCLwwzMcZN82kCgJbxQXQnQDweoS9oCmWb9aweX7ht39W",
  "key13": "Kfo9PfDCbcV2VxxMGQCjLnmbtaRMT46GybZD5XvaJ4w7qNsZJKGc8uMzPWRfT2K48WbFgVeN7WW4xaqazvkuuve",
  "key14": "4AseuNBVcQGNxSHVqs4UCAaAemi1j5osWKvpB4V5NBNNLqDSQMBBwZMFrJmZzmVXmafopYmRhXFkrbMVGBrPY7Cs",
  "key15": "36o4LrPHuqGs52giynuRY6QPfBDcWrwfQWeyKtEkmVE1NfiAcHs4Gk8Uf5MaJa7wnLsCbvHjefBUs3UrmB7NVLPU",
  "key16": "SpahZt4fr8YXBo1u9JzB1syVSdu2qEAEaXir7tcPieRKikKAMuD4RoZ1dx2gga4tKP3FjCuUFTgBFtakFtYEuHs",
  "key17": "2PvWZW4wgPwRmyZv6s5WkT1enu4XKyyQF2kYGRiZBbKfPcYDL5oqeDP1zYpVqWiNYdZn7476BRmrkHs42jH7T55w",
  "key18": "3wC7B2y3hZMdjcYWV5S8PtjXyKuwPVJLuCFg633HzPfi26A9i6h6GpGpXLHkHRLa8N5W8HGL2S4eLENwrnNTAvDS",
  "key19": "3ra5MX6AK2jaeeXtf5sPj2QriNTpjLPAmfomGVhsfqawtnUc4c58LpUcRGdGZVAXMyAQZKagoiV7rZx5o8JVoDrZ",
  "key20": "58pG5fzjzHz3up1mxx1VePvkVe3SX8qWTDSRRK1fGUdL2oUieX1toPMPvVNNNFAUnQK5AFxPWuSnZqE8L3pzRsJG",
  "key21": "65MjgDdCGfE2JpruxiJSkNYMhoekKxVjf4VahCGVrZwmkVghzkXraRQbYRsfQ2tEvqhtQAjiYFR3KxtQGLuXcN5s",
  "key22": "64BcM4AA4zb5QJDRKRoTR6UM2AmD66ccr1PZpdbkjoKZvuzb5nanGvV6pStE25MEGXGMmsAwkQcePvgTdWaQRbLc",
  "key23": "2nFy4rgkLng6Ph5dnGtRebzVB9xcP8ZdpZFSLsB7pwgX3fSMCdHE3NyKy2ZxFJYSME8JjqnJQbeFAKFaifdNPyda",
  "key24": "2RGAGMRVD4R5E5oeBWezDbRh7eWBueBv1b42mmZPPLbr38DrgspeD6kQt8AShySCGpeMe9TS4Jta9wa2YAw8vzw1",
  "key25": "2sGh3yiRyX5HXuXRCbAAhkNYjoxwJhR6deA74Qe1DxYyKD3LpB7yjzvXcHCvNNTQQ56vLdNFYc3QGZPjBhayuqRB",
  "key26": "5jeibro7pf6ZLS1LpaD2gbayQaG2555fHbEJBVePkHYnrc2yMg6pZ8KQCsMBG9fX9f9foqsa5xL97MuHU7mgHKVx",
  "key27": "3u21Qu9mkLJUNftXxiXD2L59Mkca7EgJ9wXKZfwRzLoUwtLM4jRmhobZmDguVGC1qgKixKnNnBA4TzEk9ZYQzBex",
  "key28": "5VUzB5t6h7z6zpXVJT2kt6siFABKHci87sARbkMygvdDCmUQkXtz6n4su5H3LRDGE4hxuHwHsGzfhSWriD5RV79z",
  "key29": "2HGekWScXji7KHViT9Bi8ny64BWzXBtfEGJnYbKrJdjabQ6pcdgJaTJfqPkLYVMTYym3opttHt5oFLNUaMRxeDnt",
  "key30": "TH9NFSPW6SywYdAXaPAv9P16AMmuPJ1hDraFYYELfe4G6bYi2pgpfKW8fhL4jZ53HESQu1dhNJJ69XFxzxn34zY",
  "key31": "2uLjLfCvmXSY3XB3YrBjYrTtwnrRSGcViik1yypVPiQe9G6XRJCB1uMM9JTaeoqQKqY8GpJfMmjHTkuJSaepwTQg",
  "key32": "5tyfiJBdXScp8ekeQkHi9ZLoTxzP1tSQoyLSWQV73yduDDBteuPRFPYcK3C7ULmCLDv5mBqRugfYv6djoYNgBo8F",
  "key33": "2h1uXvtD6eYxyLZgYkSAnScfk9gWDVA3LpQtCVXTDgTh6AHKBBmKTvMnFaDjaHfmxnd4nnXAgE1RcWRSaWL4NBXu",
  "key34": "4taWGNGoY2rH6Aongp5Nwa9otisuj9Sev58m8Qx24fbiAthMLYFiXRPMdf6HJ31XMKeuZZAta7ryY9dbhJHrrYLM",
  "key35": "3dVg9fsfVfs3cP8f8qu3wpEebSLbyfHpuo1itDUh8Zb9wdj3Avz9YEy2eGTragBg659dN4xfZMmADXyh1JyXuz3V"
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
