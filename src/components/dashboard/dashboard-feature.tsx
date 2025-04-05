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
    "gikDAhdiR9RzWVDLAMyw2kVAVgf16jvvxW4kxNWTiK9kV17dqiCM4JjErDptndvU2kvQM8aLnN5RRs5NYPBicst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2Xquy9XsnJz6ZrVCAHATaCJ7AM5faTJMbSHd3Dgiz5g1rktU9xmTbbUnYJwqpSf8ViLgZSBGXXCmFvGYvCrVhg",
  "key1": "4z2ZorB99ZTxkVucRXayfgp1HDj98vDDmgRBWM8bS1G3B1XZQZiqaJLANV7eK4uVAW5e1SUA88cEtd8DLp12oFPH",
  "key2": "2AYLrazib7E2jUtTYxoBMnSkgw74BmvHjy8paRdAYcuNbGMEH6jXLcMgnv6ERni9NCvF6iBjUa82BUkZm8cjWeef",
  "key3": "4uDUc12rmMngxJUkDYJyuaSiWMEpexBp3xFcrSgV17CLcXfyk2NDvAXWbwnVE5JS1ngVNnTBLwvR85SQxEfskFvH",
  "key4": "2bgNjX7UqMJYSpHJi1mdPUXpWp7JM3yY7Qh5bayjntAVrFJ38cPArNpHqLi86xALaCXZN5LP64NgH7eDfQuHamCS",
  "key5": "4S91mwPLVKVfFeV9eQfkvG4r5ocDWBcuywaYe23DmJAuNj1nxm3W594GQgB6hPeBJey9syNbXFJV52vz8u27xFrk",
  "key6": "45znZLBumnnAnFUTd71BbPbTw79Yi2wkd8DShZBvp7qQBXgUf8gkyaUZbLgsZWDFYTEv19aMjPg8CAYgLSC5JFsr",
  "key7": "3fsSdYi4Txm8vSzRWnDfBaycPvdbPr71JR6cwt8nXX2ZjDcW6fRdZ5dPF8oAbEQJEnJUrPAqCbhNhEzJRR5ELmoF",
  "key8": "4FctffeJ6NriwBXyHxCuZFmy884LCSkwJzcHY1hNwpJ61QXGbEXD5AhVBoketifJLvHTGaMHJFGX7C9QBntraYPo",
  "key9": "3uDztgz2cLntyQ4gE4qdYeH3TjWSY5ruUiehaQHhff5NuygS9ptqxsxWH8ETgAqxjG5THYA73xeP1HM6qQP8PPPp",
  "key10": "4JR5PkYQpibNGTDNGrjz4nfxRKdEssW345x8eGzecfiQwubshcHBAG6qPvgK8gPNhjNh3erBnEE1uRrHwja58ye5",
  "key11": "5Jm5Xy2bcKtE3NicJpAcJGyzMEHmdSGPHYeLY4Le2RZGVTf5JhmQ36LvBxxPTD15DsvbwKHdvw8FCKKXvcAedEjS",
  "key12": "5XXAWBbb1Rt2wtWLdA9ofwvZ9nYtdbbFHygFmavHE5xsUX3FMu4q4dF9DYNMUBsFnncWaNw3oW1gyNnRVdMnFzwi",
  "key13": "TYFqMmZiYW2WEzTwivmWy8T5tihphtWRuegrpQKyoxhvkLHf4Sdg9chbuhq3N9JAoT58QzaQY4ms4jbChg6hSsf",
  "key14": "5FJWJR2SyVS448hV4PrmrZDsNscgR1amCxPBsrwP66a3A1hLAcVo1Pyrq7Fac8qLrG8cj32zmHU3TGfZPK2A4GiK",
  "key15": "582wM6ZeZHoH67KeVGPRGYM7j33jqRRuEdy9wXQB4GvBAMz67sEkYzYiTNKSCpw9PttgVAL1X3who79GgYoMEqyS",
  "key16": "2JyYe1KMALL9YL1w1cooVkE4Guxmu1QEzab2EbYGAQor3qxBnrjNw4CGs47AAvUxVNzteQChF3GTkh5zFyUZFiqv",
  "key17": "2QLSUMaq3bPqVASNTwNFxS371dwVRQVj6doqQpsc5P96frCF8CJkvDwkYhFkWPJRuu6NDVHgzvjhLNr6yu41i6RE",
  "key18": "WKtAgAnmGdRaPjFXg6p2xZMoaEvPMhyjuURx6JAqkmWJLqFSkE1fMPqa9KDe3Q1dQnJWQR3urMYku5YNSnXEy6e",
  "key19": "5x8ePvUCiwQd5zM5FVTDq1ykrFmqjsDUs8cZUCefXa58Q6UXriminE5xxfJHqCzqrb5iE92PnSb5kr5RobzuzUEb",
  "key20": "4U1FV7d8WaA2asFkQUGMb9hgchzxEx1sF3yxuAacuA3a4WAE35fbHEQAiwV8KJntLgnNBd118ngWvDmjEZqtPeK6",
  "key21": "3WgQVkTaoepQV3JRtawpwseFZhLV357ARzTR2Mp1t97q1gLvdqdXxgowNhbYBNiHhneaC2G83n8zHosiYokjaWZt",
  "key22": "5HhCM43w3pDsHCUxweHGFCTZPnpsm9fLkcgNkCGouWsKztSkfZBDPGnzG1WxGMBszsYx89g81Hv69UrvUdi1uSDZ",
  "key23": "5WvDXQqrcng1MZy9WGQq1ZLLToDJbTAopLqZNojWZEWhHgeR62sVetEL5uf8GyAbWTsLr4mDfqJFwbZidUQUe1CM",
  "key24": "2MogjToX6HHTzMj6K8up7uykfjFQgHHvnxAMtDqjGvc36USK2PZGD1Ecdwq6r2jQ7TRe8gu3ogJ2734Wv4s52gQ5",
  "key25": "2ce1UpRFuMe6zYs8Tyc4Ahia8obMW1PpD4UdNWq9JjgoH4HLmD6curguPTuxwe3Qqw4Zv2UHJZuyeeozsFMQKW9H",
  "key26": "UNrUKNxJBkKeFLf3tns7aQ5tz6CEhkmVYLUbw6r7ukjgXqx4SFhouy3Grq1pFcd1wkJjHMmjZik7c7N6hTR2bgd",
  "key27": "YLYXYnUi3dkGUVQxvAnkPg1vtE7kdKAyE9L8JrtEQt7VhWmQAaTSzPcPxN3fLm2ryeATvB1SJLtj83qQb7pAbZq",
  "key28": "4w4TREbXNnX6exC8jPenX1a5AhrHRp55NENGBaL2dvYa5hjUFX3SaaaBJF3QaDu7KwJsHpSD4JpdLWja8hLc8wPT",
  "key29": "2ZZUhgUeQWeDMSsd77chLYRt39iLr2vhaMaAR4hc5i876tVoMY8vawuZKkRtvNYMg21XQK7H3cAgqCYGfsSYEq1w"
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
