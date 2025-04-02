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
    "5DRuMMm8E1djZER97SGyYVYBU73RSYQ3VVP2htLDyFWuiwX94R6JDB18dbC6umGXwzSXKAsmonHmK1K3rW6Avexz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWA3913XzEDgdFeLQuFS7C7uK27vkCHkGQzDKLvRbzGCmJFYuXjhk6N7JDzEXbHrRZXZcS6rBoTn3vy5v4yc5gB",
  "key1": "3zBzq1WS8kjjMUSCdsERSEsEfkrPfG9ELtAS7xjxw8HR6gm5WU76cuMGnFQRzSqLSZ6DWMJZDoK78a3e2Dzq1Hkc",
  "key2": "3QKrQ67WopRrSTvNeMdYkiLxjk9pCdu7So9rGUKd6zxC4XtnjQc8bc26eqtiBBynDCJQC6cBP1u8H2Qa6vXPqYzH",
  "key3": "2gGN2aM2noXYuqYNBXq5SzoVDnRtyefpnkV8HKguvc1AToYyJUCsD37gYxfmDXyQNjag4z5SUvmujXjqYKFWYon7",
  "key4": "RmMezsENZimZuxxHXKamc9JcaY1npCGjduEaT3Zv2yNTUMTrPLARXa8aqrNqTL4sqVVehk5oVNUExBFwMGK4Nnu",
  "key5": "61hpz9An1WGVyxTKxz62QdKfQtxUCKXEUn9vNLGJvW6SgCec5bCSbpNTfdMqMAWToe89H2ik85A5ePYPbg5Hg4xD",
  "key6": "4Bo2ayjns3mSy38yn9oTUPTHsrevMsiQin6P4FxKtziFg6KhCQTB2z4TdCtro79eX2nAtiW6YTg188iVRqeJEvKs",
  "key7": "5aqHVHBTrD9Ar6K6WLyBbsKHXJE4h4tkCE7TSvTW1iTCbSN9qqeab4cgLBq9VoEoc7xqyeLoazJvda3YS5dWhbn6",
  "key8": "2BnTYPFeUhXgKqxwRWnm5Aq4p9T43Pzk1XKgGz9WPvcwufmYCZruX1U7uZWpkPjK43KALiJ3YswBYDx8ZuK6iUQV",
  "key9": "4mwp9PU8mA9aUjz1wuAmV9xWzgY2TMxFcrya8LZ4Ko5MMDNeh28AoPnUqx9ePz6vcigyyRaqyrB6Vnh2bic2G7Gs",
  "key10": "2qG53RArvMrvT9N8YaCXHJ2oifd2bdaVnu4dhqdWnrr39CxRk3L1pqqq22ZxtHeKDPgzcGscaecDGTAHs2WKTnfS",
  "key11": "59CHFvtRzcJpGMz5ffUnkM7zBDSfUYTKEbiY7p1LYRyfTmU6cNvbQxLSwDXB9cWufJuPXxLmTq6Q819uPeBrcK5h",
  "key12": "EpFh5iXyFhic1Mc6ggYSe2HKeATsMuGrUpHyJRdoPxnwdRctTNMGKsLA6FPEHiJpsYLCjo4WS5oCoktZmh8JUdG",
  "key13": "48WjLDv4q8FmVGDEW5fyr3WhpFCSJnS7rkoGkjqyCniPpjH1PRR94Mh1oQvpvR6hHhm6GKdv9ifF4nzd3y5M47uG",
  "key14": "36pASHn5GDdGq4p7LEqnMEAJMg2TeXRs5iCBZbyqq6Ug4NkGL44jnf6A5L5Ck3HptR5f3sPjt36ESM45xE3pePWg",
  "key15": "4m2pVMEiUzgqB5w659TqyEvkp3pzz56AQJPBf6NQcwoVCDYF5f3N9Ge341pB8WKfs5u8HeSPsvQgZRbnNwNhwqh8",
  "key16": "5hPtofdcsS8LKCzVhmobKb6xi1ZXA7xPm6x9TUMURXkRKFfW9eeZWZinnNyS7rhsZrjAvTQQAysruaxjU4SYhrTT",
  "key17": "T4VZ3Me6XUvdM3DtA1Urdfwqn8VTgR6Q1fnmeAbEYBzUuZz71uXi3BzFfYodWNZfjhuQMihVemGe5tZ93YKaNo2",
  "key18": "4hJ2AQghg89iLCN8WFMqvmY3BystjQ7XyJ3PSbfUd6WvH8FtQYuVgWanreQbSKNcGsN4f18HgpWsyJ9UggQtWcfq",
  "key19": "4Zwgrt5egP6w8vj43Lbx5qsk7kz43HxLfGgFWs2mLKps4oRDHJB4Gcq1PrUyYz3EBDornpyMRVKwX2inWDWsDbkH",
  "key20": "2gYW1oBdHrWgimG54oyrsrNNCVJ3jj8k3JHd21p6BiN8vUmkSPm7RruWxigvx9vdNJAuTFn2msM2xyeGgiJZz2wE",
  "key21": "32ocB568wwGHFJs7DFe9S3Dm4JCMxCufjvVwJqxp8qR9xBumXGNX5LEEQcpBCGvM9U6c2Unmg7Wst2s4psnRcK7c",
  "key22": "5YvwyEFrm2d1hxia7aQniEhAx33ezbLVDrctxnoQTphdfCTJpa7KMoFTdjgDqpC85Y9xqNWAZC24eCyymbGoFLVS",
  "key23": "5N7kfV73GyCafX4nUdArk3R2AEa91j5dhDYe7GQt1LeiftfWR8kg64hgdWjTdq7b8y1sDddrZrpUCWdC9M4pmUfq",
  "key24": "4NiMZWMtfkWc5eSQHSW1192gHMQ2e4DM624YPn1QqDjHw9CxzHV7mbNhzmA2XwBJVHjPGD29hQmFNCUbE9RwfdLZ",
  "key25": "28qG4iVmaSMW5e3wt5oN2KHpULB2FPbQPqDJZHvxRgodMdki6UgyGRckgmUDxzknJA1eNMTQCJ12yZgxKhtjTxkf",
  "key26": "3mzR29Q3WWdNGMWhaizNqQ9Pdxp8X2iKS5ntEtuSBXHPig9zQdbM4kxVPJ8EthQfYtk5SRc5c6BMeWPCfgpsfUMc",
  "key27": "5PWszCZTUx6CgHtkkVfYP8tJGvtbgb9b2Qvt8A548nKTJMi39iXJXuRUw8Z92kho8jH4WnYGyLucLuTE7WW8SEp4",
  "key28": "4Dm1LtFb9NiqYz1DNaqKbgRtmcxPuQBozpTSfMQHrEoxh94Z7ycvFkdKnLKkZmszzG2mb2waogBBmFgZBmaPaH2g",
  "key29": "2BHgwSKt3xNf6ukMyhVzbYuxGDPAoddZ7iFL94YsgXZN6M5ZzRRz2W2jiyzCqi1uAY5bqpjdPfQGqp6vrhK7dGWq",
  "key30": "3jXDaJZBcK4xqQvHbWVsTZz1ucVVTdwdarZnU98YpYrJoV24FV7LWY1ziYDSugsNRLh7QJNjh4MVsiZ51nHtzVG1",
  "key31": "5vsRraU1mK3BFp9iQnQe5cZfSNZcy17PBBcFHqdwAidSHMEQ4bvdi3EQ3kBVUo6FdfhtvmpnD38yDkRE53bx8uyT",
  "key32": "3zjD8mkbA1WadZmTcWpzX3h1tyyP9CWmint3cuhTvAbpqa3R3r3b5oP8Jr9tPsKyrajPQu8BDsinHCSCvFJbCtRH",
  "key33": "2YhXspN3EUZBihfZnZx6mQA4JML15tbpdbQxQMdZBManEzHYLaGq7avY7GCkWRbkdAHV7rjfJ1quFeLEdYHzTNjf",
  "key34": "PwcckiTZaX1SWhrpr6ciz7AYYWZGJFU3ibMdK2aCXJvFxhqD7HjMUL8WN5egXBVVNrXDbWYK8ag4Vw6S5HfrkTn",
  "key35": "4FWYvxWHeaKteMeRyVccRUgKwGGHmk75Zrw1yCvCBU9J5aFnwHcSVhvaj6Kn2hRSNWStKwyMiQGLoo79wD8yCuJE",
  "key36": "55gcPRGp6nduJtPByeXQ8Hg91QQZf9LTTYEVYjy7CajfojZRitkSF5D4ewm1Gx6Jhf9KFZe3z282rKb26M4xuBuR",
  "key37": "yiMF5QtqaYGJf8EL6XTCXpszoHh1kwWsxFuQLCZJCLe9SyGETLzUv5N1M47ANwVeUm43goU9qNyH9AihkUkceqj"
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
