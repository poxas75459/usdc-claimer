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
    "oEFK761EvpBnmtJeHvDF5ApW9kLuahFtvDrTDeRXVGyqo42hioaGFTHtNu62YhnNgY1cmYTKnMrxpf6jbHowxCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVeehV3x3Rc5gVsmAZ4FXDiLF3357HUa8tMxStj5qHvmhM3PHne1Gh9J52sLHyfQP8Mp8uxQbtsmMwoAfFE9XZ3",
  "key1": "3oxW5cdfvSZcEG4RunEaPeP2McxEFLXUrFnJzaFVLCgxfCA9yCKHyYVFzp4TRfevdStFy6jm2KcQvs7J42eLeqM3",
  "key2": "2qPXhhxCSTrvkFFgdxMYVjUkmQYFcP85SCqTLvix9YSuztsq8hxMiQKHE4bBGemPRTaDK5pnW2y6UJXdTz7Mjvam",
  "key3": "5pwyrW4C4LaoPxtHy5BfqGELRDHNEFAPq5E5auWEi624SACo4QHLJUT1ZpYqUPyABRuqAh6iyS7FQGFC1NZhW4E",
  "key4": "4zvrsVh2XNLWEXt5rHj41h2QS2qGHY6xkjqgWZ2vTSZwXt2bXPGFP38CW8JTypjzF1sF4qrZgztQ3nWGKKhtZt9u",
  "key5": "67W9ikZNyhuFfjENjn8kEeDS8m84XPD5jqmBfrYTxDKQKPQRiZqSoxFh1ENBhTES1qAn7SMjv2u2oApsujPjuTZd",
  "key6": "3YuS3KVwXZTRjTR1jBx2kDMUSrh5XuX8Q1HN4AZ7nCVs6ccP78SSYRBv52CndKjoRgmYuUTBUnXJVRNKGHvUtyz8",
  "key7": "3iSEyppkNtsNQVk2SYHDYheQMQpEqWHW6x3UnXknGgWMxMoU4gijTRNehCG9uXW7Z2tNShNupGifa4y6ujwrp7ZP",
  "key8": "4Y8JBRHNftJjGHHyCWFJjpzZsEBvAjFCa4pbhnz7ZtXLBBBKcrgaHT1DR4yp74yZ717e9WfVHbUx9SRMf9JQNgdV",
  "key9": "4YsX5aKNTWGBCzNU9JUr6JiEsto9fLNSJPshQXKavSyBgJuYNiz4idktPNYYNjavPyG7Fqduve2p9RfEaW4fygmv",
  "key10": "5XpVuwH3wirbtEs168bKVxqNGDszbHrTNe9ZGaonnB3Sij2fNZMYrTCtddKUspw5Fs9hwyJvLFwrueZiE4UDTBnr",
  "key11": "5wjdFvV6g1AMTjbEUswN2TfvAW7P9aSC173XBpcHR9Bu2EL6LW9PH7azm1usiXy63FnvhUbGGjEwdtwQorqfTLoK",
  "key12": "4rzwzsrYTPnSFYrjhWNkauWSATFFcoVJWdZ8FDFFxEDie4EyYcGqc5mUFYaSAVBB3DiXJ4Ug2GJxc21NK2fWMUx7",
  "key13": "329gohJHh3MoCMooB2oo9hyrLZssmyHSCBRYhfST7GBTgLVtSh8GiPkqeLtppKV8r88m3Gf8zG8C2eqVkUACNRQz",
  "key14": "225A8Mdmo67Ck1vY6XUxSBfGyhUoXzfn84B7GKyA8gNFbwBWzEqEPRUa3sSFH914zo9NPfCZK9KiWiKtanNPyP6P",
  "key15": "SHFLWHYP9KbScAHWSfVwPnYK9Loo39Haa4qUZYaxr4531WA11ACywUJPLRPGHtacaaUDD7i96cJtSBXeKrvZFDh",
  "key16": "4Cc1rDib1afpvCDC8vV2yenMfBHNNXeNKfJApM7KAt9tB83hC42X5dGezVgeCsvayEsrDv9AMgUXcFDaQnYh4wMB",
  "key17": "3f6srWcp7XzzJMp7wZwxWBvRKzGLYdfahaF9hVm9peeC3VxoxHu7aK6poP88hE7ikLJGkBVw2f7QhkVrqFCdkmko",
  "key18": "4j34Gqq4nGzw9CHxXJRwg4cMyRxXnSTcFrCtyEqkTcRc4KCLva83dA82J7QDxeXCiA3snTnRbCB41bf63GVd2env",
  "key19": "3RFnfyo79P2pQV4X3tmUnLVKAtJ2SdmNTCqRSGjL4jhkNHiQsEYjjv6cZhyrPoacnCbwV7KejNt4WJsQKs3aBi65",
  "key20": "4MrmjuxfwopF7L1KcQjQCyea2opAYPRe8Kb2P2BgrHGi76JjUZWxV7DgfEHZPX4XUA2XTVrEg9tvNx61GgSYFJAP",
  "key21": "3T5YVbXwHgfjxVwkyswHRcNK37XaU7TUtXRXHdZcbrr3ZTajKhmutzXKAPopXrhb2yTpmEKmnFnj9h8eTmhtyjyk",
  "key22": "rzFqz2qNvVZSrGQLYA64sZtg97RNfZuw1waCwExZbvBHm1J89aeH63KQg9RUeNXxqhQFQH3YnNYBJXoBSfJwBHf",
  "key23": "63NDXtRhD1mm5vbodvDWHZSZAT2ZJo45AZfCRrYT15VyiBM72riJktXoRSc7FhHfNCPXuTSDGy3viwNpjztWC7Lx",
  "key24": "xWZf4N6F47eQhUTwnpKKQiUv31oARR9sk2XgU6mimXNi8dKasepcWCH5hAXjqjCb6jMRcRZ9Fvhs2tuf1s3ASco",
  "key25": "2LuazuFKup38AsVezUnx5WoQ2pds6wps1cXdhyDfNYegpFdsJSWVohhLiPbHdb31edAiMbtQPbzDu7p35m7AkzuE",
  "key26": "2riKmDgPXYYL4iF3Dsuv6FkEJMKVQSxEsiuTamDi8WwHqy4TVZCXdvp7fQYMVnncHgEjVwFL1NZW9was7D3wzg8Q",
  "key27": "5EqHDWpngMYS9DQoUpycgMasSHT1RWc7otkNb1Q4UZvj5SDpZBNHJGVyhnBLaR3Nc1CzBUmZENr4nEz299jrtHo8",
  "key28": "2Mc7XZAk7RUNx9Me1H8B2zzc73E3tUZZRfjDHMaPyJ5s9D2epMCYUcUo9AqJThQ8UXGutqWxDntLJTyudSf1BfUB",
  "key29": "NkvZ79w7Jp2HGEEG4w7KzwETM1pk4YJBofg3scRqjqo58UbqEkfWfEitnKddyrdkQ3eMTYPqgbcbvWwajdi9LuA",
  "key30": "jvo3ko8wboW6QXXgAdPfDy8AJ3MTra7mgSMu4Nv6LbGqKVzmemuPr5w4jdf1NT7btmTyjt3eD5xniinHU7aSzc6"
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
