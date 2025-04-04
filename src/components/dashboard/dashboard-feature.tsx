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
    "9s8th3nYNHzveAMxHakrqyXgZqYC77dXGUYkUh8g1atbJwRRUZ6KzuThJStQok66gQhpj4UNsK6FyA5SQM7P6GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCTDK9mUzsBJRj7JcBunDGWNV7tLpEEwkDBWqKeBKSzh5giLkEWspabmtdh3caWdmAAg9eKHduLzKRteQBqXUhd",
  "key1": "nadt5vCeR6t89JsgkqZFpX3uP7Q3EizNmaPvJVj8nv5CULAj99ngtWrcVJ2uqdgTTmuH1tWrH7PN3UQnR9xVhFV",
  "key2": "21FB7faPb5vxn3h92hgUMh7H273uv4njmPYLq8Tih2LXnM4Lmwun3sSEoi8fYHjcysNe5eHC9TJbmnCmkxCMQVcN",
  "key3": "5ght8xMahzMrzQgMSXDxuC5HEQXW4Y8FeBt4zPYmYSEq7yBBzDmJVqausDw31AnF6LWogu86v4xAYkms1sk3RcSh",
  "key4": "52chiG6irpsNsdPMqN3DotvCd6wyw3NAWekfqn3srt45mN5i13Fu5hBaC3doAb3FUafJuCqUwY5AXj3QjUfLXFVz",
  "key5": "2h3rUnbsNhT1sjkMepkVKvjNNXpomCGRnAbKAEwRJZzgJ1N4isMCWNWVFGPEtb3KLtdHxcofBCxX6VYVQU6CRYGh",
  "key6": "3UDMKqQWtjjozToHq6sqkpx5njz8RNwJqpk1f1SqXCeJKDqAyPnyJ6bF6tPTHWcVLTcDR2edWBTbEGqivyTAiLBr",
  "key7": "2K5izdpmJKgo94Fb1H3rJ5oAYccx3kb8EcrLBtS4vatADWRWVRDbTcUQVh4L13MpULJkVFysZB2VBEBgxEWgkZcU",
  "key8": "2CzJhg5m9bkvHLHpHpfpregVb8fp3bb3Tv6mdFrzXNV7k2Fohnttp2og4GuHS1CTXsaAhfLT5tMKkTDiFNM2SCBa",
  "key9": "2oPURrnYrpCG1AvqFoStn4Zz4iMiu1nMpw8yAXGdZTtiU83Ctek7BbsPEf4rGVBdCqQeF7kCyDfWRLjUkmH2nW9r",
  "key10": "3L4sUV3Q18ufpgSZ9hy6ukHG6bN5KofHs5JQ7v7o1F2xUpdykdo7PR5YotyQDHYgYTpfYFYQpE4GqxJScVe5DjBG",
  "key11": "2oHTrnmddBF6DPv96igdDyhT31j7XJ5WhQzCZ7ef7W7a4adHK8xRHwenS62s2mpdZU24iEy9X35i5tc6JpZTd38p",
  "key12": "5i4oxGsGv2C6jaZHxPB1QoyGfzyMU4izbspfoqkLyVUj2aKaVf2sAvkRSa5CK1e9kS5acnrk3wWbszT5WzpZtDLj",
  "key13": "5MNzEvW6hQWJkLo1e1JSn37PYcrXDgCNQBPDXbbhuUjbjKpGgMMPR5FjaxTJk26EKuXuqugArLK5xkzgPvDNspHX",
  "key14": "2Nuzb9WLSvDteinBWLHwjwLV4iSWTq3Uaoz5nkQTZQjkWepAnLqRELhCHQZEcGhNu6BsW8ipeH8aaGu4jZxhWPGw",
  "key15": "67bSNp8Yx6sSrhEY5T6gRLfN1p4MhywpED2yNYdZwFH5ciHwAamS91EpBZF5Pjg1cLjV2b7cqwvJHiKrwcXtq1GV",
  "key16": "3QNdfUV3QF7ij2cKikXMsbr9AsjX3V6pesRNLtviU9nwfytpom9U2qgLoA6zKmRR4qVXohzr72QSMuD85WEEovQF",
  "key17": "5Z6SwLMux4fQTNKcXbHMQekJYhRFnC999eBzMxSQ9p58d4d6TTrt5AddRxzaeWeCUpQrHU3eXdAsb6UZtLJjxXVb",
  "key18": "5LfchbgUUta8WDMiWVv3DXrChecx42Wsf7L4Zk48bJkaabYGAy7Dnwph4Cx7EiActzPz13UYiysdFpCwxktkHyGT",
  "key19": "2mXUHLwE3FrymqqygkREzn8fDa3sfwJn7YBneZUVG49hQpqKTJWeYQEnFrPDmwsiANQ1dEopsDLqvdUz3Ds3dwzs",
  "key20": "Cgqju2R52XTuaZ6SetJgjKrj41t8nxpUMKfRWWidMnhb2fW247kequWFNGdg5CP7NBLKu3j3j74wzyk6PRVAmUU",
  "key21": "5erieAdnsJJgvZJX5Ar9pcMRwWGKm9aBadk6aoGKVW2b283g628noGWB1MuN1DiCkXZBuqDeF9Uo4CmATaLSWJGR",
  "key22": "2PMoPazxYLQDMe6VTtveNcw8eabtDhuGthF5kyCXG48bkTBFqn5yodpJK7xcE9wkrorPX5XpY8XVtNP7kJEvkcmc",
  "key23": "4jjh94rTqbMm1cZTHFnSFRBjAWYjSQdc2Xhq8ppHBKhLdeBnn8Jy9wB3CFJXMxezzFstN5dnpxVgr2DKjhdoijUr",
  "key24": "LYjtvJbPnE47WwYXYRaJLi4G4tVddPrTKgHPLU8v44JB1PEBPKU4ycsgKjrnkiBYj42TcEFuY93gpuRarWXa3cW"
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
