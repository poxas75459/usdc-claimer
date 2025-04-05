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
    "ubbmndrA5XeQC3mSAQnzwbn7aa5d8Yb2u9zxH5LNX6iFfmDv1bz1pwK3Djr6e5N5VuYRD8SFkvJiNPJjkCN2iKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jqnR2np3i8EUmXEyH31tB7bQ7vmwz1RDP3HRA9nY9BbvY1diZbxRnuEqkzoeHw4J4GpPpvimPsQRstXKXiw3vDJ",
  "key1": "peQkBYm5zsdgvJqZv7YLB5v1cZmDTLhVhXWMZgbjqSUAgm1UMui12uHcB7jKkGWbaFxBxNENy7Pgk4nzq7dbrZi",
  "key2": "67WKoNsiTSLKza97prPPpDY1rsjfGN166GYuJgyr3jfnSdArc2B4YroZoEAVDRiH1eAwi427EW86HYkbG3uiMKSZ",
  "key3": "4sTSjwa9PE28XnpEdGk8Q2VEQnbQrG2mzHcPnKsfsvwMUN4y5AXAhftsnsoDEXeo4D4J3gX7eGA9ZiowmuMLdHVj",
  "key4": "494tF5vbSEy5Eucxwxbx3zoeKNSb1NAM3ZLjC2k8rzxa1mZyL3Jzj5z382v9kC2Lg8JTfdm261JhAgcfiXKiVTzQ",
  "key5": "5rEYUM9b5FWRzwgCuz9n1kdRC1CAZY8nquRp1B2kL5oZFBEfDoJ4Ut43ASPuD2Hy27bbEBgmyjWUQWtYcxhxVdKZ",
  "key6": "59pLh5Hzf3HoXZ6pqeWJ91ggZ9LsHxRjLeVoFbbbm1oaWPD4KBpaWip8StijkTmgQ1QP92TeME19pcLiFnQNXVaq",
  "key7": "2JyNtHW2pjZAX9jitB7JkAvBQHC2zE3DzZFih1nuPd1kiPg5CJ1qjgsag9gYZDk9GkN916Pxj5mymDzuHrMXehxZ",
  "key8": "4MPWWyTJkB44eez7z6aaoJAc5hFTPpGj7X94r9o68EFVJcTQwn1mpUQEpTwZvvN5KW8KspHGmKoKXkrQopU1BLuA",
  "key9": "5q1purqaGhZ98mb3uXttgmUHd58zLeYB8t6DZziEHfkk8YNgE5NXtsuSQWrFvngzdXYofVDVPW6eQftrCj3eiFhE",
  "key10": "3nGru7uRQRiapz3KrMMygsG74r7k2JdY1eQtidy4GfKHCtGx26KZziCfmdsa5t3DF6NRroyNkSwovXm5d5UqLrmR",
  "key11": "5EKKExjUT5k7fSyejTNmJoYxxKpQRqQs8QsXJq2oso2Brrjo7uF8XRVycPcYpA8WQJGkyeQBVcF4Xz15X4AJKg5T",
  "key12": "4Qs9nMx6AdFZioeTUrSTWEoj2tD9goW6LesnaJ4ffCLrTNUVqH4xd4EHrhxuoquR2ojY5AkzukLN7Qeju2MfkWK8",
  "key13": "22oJTT6CfzZceHSsbH78subTgecmyMD49PBKm2qidvuYjF5KmoyqqQLS1b7SS5EBmcLi74rfnK7Cm48dkYK9jbXS",
  "key14": "4RMS7ush7AhnTPAufVxPBvbjiB9xi4NQpCXUDThpo1rUPR7V33KASrhwi8RL5xFvccycG3b6vvNN9GFQwKrHyXRJ",
  "key15": "SuquydMXBoRrt1pmBbU2pwq6P6CTjJe44VA5gDyVP4aYeijKPHrBCXcpEwkHDucSjqXD1jPwy6611BnpL48sGjg",
  "key16": "3PdNeWmHFxjC6ES6Tm5keMraxEKhrGxEkKrvoraiqr18nv3dmGxqqXykY4wvfQS3LdMJLJB9zuvPiQvD1GJZdKqF",
  "key17": "4915qimXmR3PvkmdBs5zezVHHkphnKELokqAXZR7o8fmUt9MbEJ3kWXYtPx8mvxrTUk7vw8PD8oWKYkwmP1VDShP",
  "key18": "5zfbdKpfAUaxBbMCB4HUZuauw4Djj62fsGE7oU8cWqWEkYprdrYtnbZ3FjfZLpxr97zVRCsCXjnZhqGNXQRgXHAQ",
  "key19": "4wM9Td2P3xaL9Cen6u1FxcypvABayohnCzvXhCEcznJHUX4GrFZbHk8vgtEjyxR9zt6NKAstpQ2Z2V1QbaGYSFk5",
  "key20": "566AeR6t4oz1Xb3fxh6ifwg9f8w6duH3ARr4ftd5ipyZH86E2YGFxhChEmqexhzA38bYjoFXSLKSyskie5i4m1es",
  "key21": "3ojH8BKt5Y1uh3Uv4tCujmZR5C4DEWNGABxBwS785rG7iQzykkyzBEfiABQbsAt9RVCGD9A31YUqGS8MW78TZfHy",
  "key22": "5bv6P6h597gAdEzyDxVtRuKi8wnhTsYkbwjnJDWj6Z16TDAZDdzVpoXETUGMJQ4kQvfNmemrTdN1cdodefYdLCFa",
  "key23": "5Y1T3phHmUJ9A6dPj9HZqy5YTGPtMcQmw3bzXBC6UqcV3xDHy9Jpbe7U7PdknHPhFjoxqR528vSdTYiuNWhsAr1Y",
  "key24": "4Vbezz5Xjcm99H8vcxmkoLLePdZSUSzTqNmnEouwUaS3r1rxK3UzuqicS5cvrjp9WitLxJEpF31RzDKiXEaXh83H",
  "key25": "64TWDeVUKHPQ5ddK64ETmYDPvkJd3fcwCw3V7Ne6ujLYzdSQXkwKiFLQqTj22QxSQZpurNFD81axGudPfjfHzaCF",
  "key26": "5CQjCAxfCJTBQxsvrbFqvAVrFpM1pHsN5bLS1ABJnWdNzPyvRUR3bSzUpKoc4rxw3zKHrnHVDnUUhiTemmBomacB",
  "key27": "4tJgrF1MyJSFoMj2xT6osAqk4PSQLpJLQ2q5dLw6sQuw5u11RLd1Zp87qQafb1s7kAc37dpLm6yPVWDN5gXXXZXb"
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
