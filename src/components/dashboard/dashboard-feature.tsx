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
    "3j6FDjCj7AV3Myxaby1o9MhDXEjWREuQyGBGcJpT4iAfb3QG8RJ8HDySfBraGHftpaeMbxcHVYsZpUHt6jn3JK2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wSYSijkfdjgUtyhsB3xPLXV68pWnZniYrnrPYvduztKaj7QLDzqyNpAyGubYpXUK9BPHRgr5k6zjNeBiEjYBHDf",
  "key1": "4rdyQYF6XDMLze9Xa1apwcEyzZTm5rqyJeQuWFbzm4Cc6ZKfFtm6PvXcgD5LFxFbGt1pzeeHVUcPtUWywS3pKKpn",
  "key2": "4RCE4w3hyd3mY4Z53Z3aPMWtQJy82qWEgsz33sbvKyAK1SPUFRCghrGtdyNDfJ3N65JSzsvNNDtmtBH4aapSzvqP",
  "key3": "e9pncPNuatVKbuvVQ7vt7bQ4u1vfbwPLku8NceDKwqyGZpBPAuZ8PYcxTTRxeFCmxQJWoSYZAYuskuUSCcj62Gw",
  "key4": "4SmqxN8Nqxwf5F8AgEBfsaoWkjhWobtDLc5J8kzksZwpirVfVQxEuBh93DSKmAmSMryWgF2H3gabuB2KVS52Mi73",
  "key5": "4hHkWVbknVirQzeRAfydaSofyerfNi9Jo9PSTgUuttSRXTZcKrjW4UKyD6q3fxGe194BV6DsHPGVw5gbsnwtdqZg",
  "key6": "5ZoZm9R8eQx3TSdVfugyoQ8XzPUAZmDdZgWmeThPWNU9pDD1f1kqSQN8RAto6b5ebQVqzzdUh4QZdTjPfPdHdnW4",
  "key7": "YCjT2WUi3mCUzobvUwqNSGKm4x5XfeNefCfE4uBXAgZaQdKkbkPiQdr6dr9p8xafqNaArGkqmypAGHCceT7ESRW",
  "key8": "ovuSZAjbdrDAAVrVpT8y48ZVU37GeaoZnULia5c5vujv43c9zeMgunE3rs8YMtjf5QaZhV2dUFHteAMN2oeZW7w",
  "key9": "x9rCfzqRWuqBnBHMWiKsdVqVfTgzvdJgTZxCZUHQVb3px7eRssgtfXutsdgiGbH8rwn4pZudTxj56GTkiL5fLUG",
  "key10": "5ufB7u39vPd7p2xNWwGniaQF3NEzg7QubP6D2H7q92WAf6cjzrKMoar5pLoLmunr9LnzKu8gNCo8G1y1yzwCvevA",
  "key11": "4UyRkLCrzZvWXSNxYtHit2MudsmBcdYBsXjDWTYHTZqxK6Yntg3UYMZTyGcFaWhsGV28pgHnDYBRAWj6TQZzEPrZ",
  "key12": "6dby8nrHg5z85GGsKRQD18n4q3wNvw5WArqtgQ7Sd5H14BTVysarwguhNFAMjC5evpAEQsrKbHSDV2tyrTyxapc",
  "key13": "5jxfoc7R5j8wTtm7XH1hLcrpNshNYtaFxnZKkRYAXJ6y4QQ5338Y5jat55pwjWLZzBRhDEmvKrnaYVeEBuXLVEKp",
  "key14": "sR7tjQ8gas5xkqPEk9fA4YjnchrLXBGDU8wjBMeAifw5aNVEDbE92joWu3bGvpVZ6PCNBj1YpQ2tcS4gFHEiuxG",
  "key15": "3fE4qe4FTCkKTNmD8xK2vRPXK9aFyyBaojRrnFhnJkc8bG1SC24NjA7BtvovjD9YdwMXdPA3mmjkk44TtKicGf7M",
  "key16": "3sGLu4DdJPRSrrRsqE8sooKMH2YwDARdaQGnzMCQuPehdTYcPJhJ4DPC41pChAGYRQC4EwYxbvEj646548RBK8he",
  "key17": "4pMMPBTXwUb1WsRpNCpJfBhPTUd7E79fBRRETRabMCE1XwzFzbhBQUfiJ4GX5cE42nTR3pjJt1Ax7gQdQ2Qbu4aM",
  "key18": "4Y9kbkbvb233zkBa3bvvPVKhowWZREWp5n6GFXmhLmLvjsLr3oyw3nFVqyxxTX5BkDBCm6gHChCa1ctmnQTZogEH",
  "key19": "DhTEn92FecTkyjD5BZ7fwtLmJEGA66YngFooD5V1rpbp5Qg2jtkzM3W4EsqNmtpTf1A2nuZivnEYUD5JWKbu5kz",
  "key20": "44D6jzJV6kUP4AKDgXCrYNuGStuBkQ1Jwjug7LrpTMtSXirQM62BFkCZAHBEH4ubpNNwvwLoxhkR22YKRjFAoGkJ",
  "key21": "iC89hPwrFXEn1kfPiUZx2Ch2bA5EPjfV23CooapohGM1zf3yeTPrE7rmJAymtyjEfu2GsTA1dBMHqEpYxWHMrP1",
  "key22": "2jdD8r47fnpYWswgX6AP3UR7q7JfBmG43xbE5qbd9ZJL1cjzVrEPvCHLESjmw1WuYRgh4TwafC9Vc9WmjU1unHtj",
  "key23": "39geZf6U4tdRKWzvCxLeUZw19gvec382ApJycP5hacFLxS2uMYU7jLxrkEwMiTE22pULtWHek1xSxmkeyHfiJD6p",
  "key24": "2dKGVPaQnXoWtH73QaM6cyiQ1W3bh3xLu8NT5dgyVGTFbFVxhzfioHxPUzVu8UmiGGL99Nb5ssKx7Fhnsac2KoS9",
  "key25": "c5ZbgEyjgbz4ZhhscCJfzJ4C65EYFBMrkTR45z4cWJxbgcPB9fLCF9jWBtRnDfNpoeD5YziLWc5ejX5je6SGie5",
  "key26": "2jmuoUDZpH9ssgsiBhCRLJvzfdMsVuvna6FLMHQKBzSDasNWqvVQY1vnw4EkvXThWfgZnv59m9H7Tz6pde3Rynmq",
  "key27": "5RH3RnkcgePjs7TXpEcJbbVGLw9A2gZduBMjNZetwW52TWRGZjssuqozudhxUixxeT6ggutQn7dmNtWqV2gq49c6",
  "key28": "56roLc8Y9NgAFtq4tiAYDttnagEsiYm2Ut5qKy6J9rNWY8Wkh4BBLieeCNW2zFQkjQwEVDZZABBxEmM1gKnbgMVA",
  "key29": "3JN9K4uZDdgaXi42RBUN5ZH1AEpHThMyWkPtjfdRbaCSqpKodFmMa7S7ux9f8MmuPN9Zb59WPhb2gbZGcPiDRrNo",
  "key30": "JxGshoXCjHsxVevcBTYW2YsXvLvAueWS5KfXuGambuvgrbUji8uNLjato6TPwmL9TKu6r9PC86dj6AK8JMLdqqK",
  "key31": "4sLTLiCmi4MhubHSmeufz85ZYTyqksuwzZduQnMGMXzwUH8ewQGF2V31d3NquZDG4jX9NEsdQr2uQiYsBiCbjDQJ",
  "key32": "4yEBdAKwiWjhoxMQnKJhRQSUAzHXH5FmM5ghSSfxVpXoRXAjMWijoWEyNnmzPKnX2EtTkGfjt9T4mKFtyxZQLFKa",
  "key33": "5XnjErV9brHSENaNoRGETfi2tmgpUFu1eQeqwaRgQa1SLukrEJY7R2KPS2kjnEvDGxhsUoeBGe47pvVDt1W6QwC2",
  "key34": "5hcY6561q9SewbTvYF7o7wYJEQmcpZmgaNDWPD2N4yKg7mJmo6kMTezZJSeVwifkoszi5f8zn9bZp2zJcZeAd6BL",
  "key35": "uCif15SN15BzicGKbS7h7JjDBUqugr7R8S7vbwq45xSxaL2TB1yXGyw4rF3PafCdFyJnXFjUD53GcgeUhMBSd6F"
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
