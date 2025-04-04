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
    "3fZRA7325Lbh26vPW5u8VAyZ9nv51KCXH3wM9YhDJftykwxH5YGb67suAorxXNcaHdd2T1SyxmafakfEi4Fw3Zhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MefLqqYNvJFECHJ5iWWBLWha89C33pBW5Pywgo4fFTf8vtyxwHfNrCZJ5T2bNu9vngySDbU7kuoiBSsvvupexXX",
  "key1": "65Bkbd2Uui2x8duFLcBCme7HHp1UwZ2bMX76v6xcoFRcKRL5UMJCzdgt6H8pLBiWtJH9E8hDTQKiszpfWoaWgPbQ",
  "key2": "4PNBz9ZtHbGhLpKwMF21pRuaqoBk64i8ZcrYUeUZrXtGs8k8kewiwcmiVJorTfrJgMSU8vJ32fSeVPeUThmWtnZM",
  "key3": "52oMPjwFbZymQ3bLKq3nh8uTMzdfbwgLnFK8JbmENWqkk7rY4z9H5ZFgpecaSnNzJvzkW7Swyoyh8AFe458pc7vE",
  "key4": "FVSzCYy614RMJ3mu5iui6RMHAdzYERtZF779uxtncRU959ayudFnNavP6PnPHS6M4NDQ3nPoyDKiujLRwqecami",
  "key5": "gVbcpJpwYR8LrwPJqH9PkjhBwfCuPBSjFBxuA7YZUqEyqv6NTMLrVqJfbJYuwUiodtjp83FUhszbuboYpLXyqR7",
  "key6": "2rndTsxxkNF8PRgWvXjHJYAzF9GiiwoZ2kA97ovy5SQYrMxqpY8v55HhSCgvra5JXmNPWJvG1dFAX9VUTyxLnftf",
  "key7": "3xji2yyimqfAYnSocMSBkoKRxKK59yjxot3pht4GfJufDZnaBpV4wny3JRwBthwWrBgZP3BNUWwCNmfWDeC2JVMz",
  "key8": "28WunxciHnamJBpfHt6dpaqK1CqBeMXYSxGdwEL6hbcXfH4zcU6U3uVSwB9BWb36BTs6fBsyJSugTGVz7C4ipBDi",
  "key9": "3ZcqsRVJA66C6sxFJ6JZ4RLBTiM5czm4687N8DSrqTU2ohYCwZZAxkrfPp1SFGEPkiPkj9NRzw7feAenudL6etpr",
  "key10": "28CNJDESJodx2dLsTGDvqRUvAnpSua7Kjs7XtocQH47zapaZqpRoapCfEkhkrEtJk6HT1PJRiNLEwr6A9Wv6DKxV",
  "key11": "3fTLcSoSEnKVh8tDkXj1ZGzNHHwYw7RFhvpJqck2VC2aRyehjunrfP8wLpc6y8bShwEzWAXhHK5m7Yy4LbRW43WL",
  "key12": "3whgp8xvTdVvK8grTwfiDnGSkctwCS93bUB8Kxv6WiTWgnDwin9MiZZGwpHxkg3Moyz4E6dbwYbLpcVfsRoPz4SL",
  "key13": "3XBS5hZEPuFrx9CCdBTTcXp4m6ATrXeMXhsYYYJWAH1t5k5G3LBSxnbbXJwk5rm8tBdNBohQkAhYUM3JRm7RJtjx",
  "key14": "4KGRygFJ8RDTxrE4nPH5W4vY1aEmwz6wcBEMYnXq1Gew9CyLMgbC7EuLjhzx5KsbmfaYCnbBP2Qffi7bwubdAaNz",
  "key15": "2PcWaAjMZXKaQHc1fYVcqw5g7eS2HYaqrSDTmhuPQJ1ybBB5vPNRrsZfZWK2PgGym19AdNaKDTbvpnkPLkpPxgwx",
  "key16": "4T2JXzjYomJB2X7Xkr8n4JKRHa9iSqYULbceMdVs5askCutnLjQYf85WpxMnDAaQyvAQ273qFpzBQrGtWGTZDeB1",
  "key17": "3VDyKCNhxJkQm5cjQCGuNFQHuurHympS2C4hWixQdTtjdVELJHnLQ9mzRUDTU8HAHaHGnZTfoa6D8ksXUdV6UaV8",
  "key18": "5dhJiT3FGReHwU9GZ1R8S1QyXxVKieqgzx2Rg3ye4hptVPwgUyafTCZr1Kw74RrYhScn9R8Dvx5HaXckT17ERcVo",
  "key19": "4G3NGeYQRyJmXmPoaaZrsYbZKkXMUmFByruVSMBeU2VmUf8vmhPRjpLuYMk9HDcew1RCWeLwp8Gw2DSWUtr5hy51",
  "key20": "4SDNoVG3VodS8EXmcdQpaEgygUr7jpSFFqr9QK16GwEumVHuL6ME3KS81UbExxRP64y4w14ZkzGhz27zUQ8CpgaY",
  "key21": "45A1ofq1hDQpdgrFVQyjBvrLRmMii7BEVBMgeShEPm9GkeYH9aC8a9z65fWPxkh5pWgXsdC113ZPVmpyLkPLowzD",
  "key22": "61XNVA48oTCGKy38u6GbyQYNNcDERoNCtGUsNig3HnVexfADM1mCycMa7kHanjhiNYm5boZD9kEBWzRhpGWeSHho",
  "key23": "S2zZdrySWiuXFm89VB2aUHvSpsqNDViXNTQ88fKj33ifrwRpCnbk7x4i427Y4SM4dnfiCzw2sN7gGXNokmqFhaS",
  "key24": "au3QHymJSTv4SWc7svcGbY9mDNH4gGVcVGaEERNYqz1yyeLsr7EgxGnzz7du1RE59nsUf2HU87XPeR7gHncpajt",
  "key25": "5ACFWNATPTdwq4wbVYfaZugaqQbxYJo118wDciPiwUwhw3zWQph7R2caFmZqooD7txtAihToJCyDcZctZHjM5EGf",
  "key26": "2dMc9mAReMqF8XjEjcgAJr9Mp7bRBhBDz2GfMi6Sjb5sPk8yxyg7uVodDRsjauMexd247BBjeoXrHYaB5jE9Nqdi",
  "key27": "58MjYr4w2pjrn4aofBUjvWoH7ycsJXqFP9aiEGRu95GfAFB9DpupKYvAvCef7o9iVB32TF4ymjTHbDPxXFteadzR",
  "key28": "42L7LcVhgZbCqGFJJmKukxiy7xhBZCdRnd5aMMMm6DwRWnQLB1sHFZQCVFPu8J88g9vKsxXBKzJ5LPNJ5ETcyWYs",
  "key29": "3cCMRVLbb8joo66ydsvmQUkeYVzS4KzRr3vq4HsLbdqX23TK3vWLuGM3vpWTLddGjZ2tGVd8Z8AiXj6ttLReJ2BH",
  "key30": "3noQPFJ7YNKid97XUdwbgG2J4ian2SnwyQJBC7VDKGX8CSsHyMArkg9iXqshQXkBVFGHXfKpscdQ5qkSakuJK1WK",
  "key31": "2kRdg5Pkr1PepPZJkEi9juTXyAs9bpgqRDxHQycR73Tvbi9moBxsYPVwyJX3GtLycfFpeQ9rEP1H1ytiR5seUVSM",
  "key32": "4WkBEqJwPJU5ktcF9va747yA9FBFKWikf1oDfGTaNhnCaF1GgurtRFkvq9jPFY3VzG6SUMbv3B7AA2c61WbZpNFF",
  "key33": "2vvohuxAAMx48uB2LYdWEtQBe28iDZrNrHZPmWBfNqPcPSpWjJ8tFEm5heueR3TaS9Ms36Jxb7xRXME7dqmkyzfn",
  "key34": "TCrpMawTP4pkU7kbyGRRCQnwkLnB1929d7Pmk2oyp5PijAdmvVT59cQ4EUBZdZtm3XztrUK985aj12ZePefcmbH",
  "key35": "58aJcidNnuu3xmfZE96YTbdbzMbozu6pwoHm7UTLH4P3DbLRDQtX6dfAoM6wBQEzjv7LwfCN5gegdrirBfZqc5Ug"
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
