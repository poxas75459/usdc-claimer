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
    "vEV5ejL51cD7Xm8vCUFNSp5PdfLAFuTZJVvFrmf4WZqaSrxCmZcAzKMAWV1sW97ypzk56T4XwNW4REJa9UX5JG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLBrK9FaarTZnopMUxZ6riB2iGnE1psNYRwgsENeZ7XeBsnoJz9PEtLVZovMDesKAt12BKr1MZm8CRDazu4DykD",
  "key1": "hBYCgxzpBhdcPTZihK5VRDJ5YiDf1WCm9q9vWx5W1b3zmYXkgVQdmwXovkzqmA4XbcMTPMpEwR8EtXRL1fXspKb",
  "key2": "KWGgpgiNxADexBGxhnu2eq3iYeaWfhjAGbz561ozLEA82qVrponnd4owz7so3xks3CBXf6tSFywRjScgaEXTc8f",
  "key3": "5gDhNeQafB6A9E2fmJKWBoJ2DfViQUMvMGNsGpCTmkdjLtpDfgqZMB8jmULuuiEs14k628iubkd9RkbagPpsJYnc",
  "key4": "26Js2FYThBG3MZ3r3bDc13NGZemd78r49FDAZiG4221fdiGR9Qo1s8GLgATs9ErgqfLZeS45CrTtkZuViQvV2uFr",
  "key5": "5mVYDBTCeTVsU2Nn23Ej8GowCHJXPQDTVZozNv1oBuHD8qGDX7WPakbZzDM8tq4B9YgbYwTYE3AbVbn3menTwGZe",
  "key6": "5P3hMbtbLezC8ZRMhjcqe4yGhLaQgXcWvk2tJVYyg3BqDfuMrdF1G359jUdpvvjsCoDy4pWsxFFY9szqNJXm61CT",
  "key7": "2Voo9QAG1bLGVgCJWT1zpz2rtBZHLRSXKHXPFRm5NLovDVvmYXw15PCHxDSzGgzbsGxkoHk3PhLCcQCvE1Ybo2gr",
  "key8": "3ZGXb8TZgDA7V2mmoS4iHZRMYonKUBVNKE5Zh1aM5CeRTLMjphQgnGf4xJC1finpsTFGkzGzmnwKkutCYxk3TWim",
  "key9": "5tNeG7dxi9RsBkMFFyx7Cmd28Nnw14zjAPVL2w3Bz7HEQQJ28378N69t7Un3pE4EAgmTcdT2SVj8qmabAYaPGcjs",
  "key10": "5yjt4PjgyFji63aU2GgfF5Nb8q6ofz9SHxUvAChfCzVQuBp4aatY8rMQsQY2UVbB3mBecejy5epLuRriLMM86shY",
  "key11": "4qDGMaRbk4nzXqa9eR73aaATaY6TzhDVevw7zK9AGd5DVhwyhoU9ad5LtjYKzdEPiiTAaSntDHfVWfjJxQ6bpZcx",
  "key12": "2NVgJbYf1AD9NEjiKMQKHKNM6YyrXUDm6HWtNnfpqd48Faiq24PxUD4NG4Ye8SqV6LKmwv9USuLEY4pDLSND8Awd",
  "key13": "UsPpbDi95gJCHBA8PjGGYMjTpouaKPNLKUZUGYERqCkGqXZbURHwG2HEWjhBzhg24vaowcLUUfjfNt9UrBNeE1Q",
  "key14": "6VA2R9FdnDpiiADbsuRz93zGaxap9V2J7RzpEophiPkh734LcK7gyPDskcXYVgkr963H8ykZSAdPfbD8SX966jv",
  "key15": "4mqph5XhNfsogiB8H5yZFwBXqt9QRkpMds9pzBTZXXvkEbe6oQQoLJSB1LvA3nH7Bg5k8Sbe3sw9ARZGoA61Xcm5",
  "key16": "5rS49swctZoGrDxeYYoi2jNgLTBNG5cKM7gr64UTZD9GFBQM1aRrn6TDfkmkjgNT1Kjz4jDBTRMRzy4uu5p4SKDH",
  "key17": "3czHxUYuchWyouJge8LSBUoYEvY6Yo8MXEbrTcib6xtBnjjGnrMkQ2a3CHG7nHo7SLtd2rp9yfHYdTniZHaDYCSc",
  "key18": "4Ct5By4QDkbgYqg5LoY9QVgehX1GqijC2TNT4iBqoXJCBtbBjrgk6GaTRsyKUqkHVuKK2TVWFuro7ZrZmT5caGYU",
  "key19": "5MfKgRVPPd7fe2oaXShjMySoGzEDEd6qaKoB6Kq9ASvmf1aHkXEaRPHxopCpJ9wgxfg1c9S2njgvaxppMpm4bjYu",
  "key20": "367D5ihzk1BYDNMyShG7kgRdEThs5nuuv527Bk62j761j4CwzGbzoRDc4ApYYoHT9pEiex4NnMBwyKBP2W3CedZJ",
  "key21": "aevh8ZAiK2fFCHHrHffnAmudF5kr1FhgvZ2R4vZ7KA8jzkHCSmzU6LfUubS5DphPS8A8XoEVqGBGfDmwjDuYpZt",
  "key22": "2Wy8MLrBjsFsCYYgjddL8kUtDGzJbFcCD6fhQnJCJdVvF7RmwGcyULTViD4RSjzF4JqA5UeFfLweC48ZyvGfCwhn",
  "key23": "59Wdinpsa9jdNRGoFTzu8TPQjQJ43XktgpvGr5BHmfPUvFqpCh55f3rCRKLkTNSGjSDz5hTbVta5kDeU7FjNAb3Q",
  "key24": "5f1apP7hWmkAPFZfunX8RzhAew9zDph5JdyVSBYwDFA34eXLLQUjHpWo6mBQLV6KZKgBKyHe23uf7h6hsndNJCif",
  "key25": "2rZeDT923Ghbjq4PXSoatMAkREfWi3BBxuAYJw6cBdiEfDLAQwQwGkTMdHcg3RJXYj8e8QdTNVzSQNHxdJMD6h7X",
  "key26": "SAt54nTRcpQRr3Ro4FAeucL1H9h6bt9Lgmwyrv8ZpZYfYfu1sem4dR1pnUCke1gESVRy65T8iSd7bKgom1vVHga",
  "key27": "4HGBuHj9AwnXFjAaup6CUpvEsjjsgJWo6Q82hkPydXEmUuSsPr7Zb4EEDhkbSCMbZymEUQtDU9QL7hD4jNJ2UNLn",
  "key28": "2x43SoG7bMJnLgt2doC2MXTt18e1phU6p7KCjrtTTymbWL5BEXtas8mLYhuTe6kmuq6fEdBDNme7WagPwoYggmfh",
  "key29": "47MoFKLo3NGCMAXq2wqz2PNE1WQDrYXmSof4fzXDzateXyKJy9UiUxLzLZUbScEg5pGV1Q2TeN3RGPU8wrMsi4Ad",
  "key30": "2ATjG853NJMrdBSgfburxStXs8vavTPV2aJDwc426jyxffNb7c9Gy7GDvRkiwFHgFk2Eu1ZvahGZhN5yc7CBYZS2",
  "key31": "5Z3yZRGovsiinKgmF3PqJfQxzdkMNsiM2hwKCKptHm3ZZ5aavn5vtn4bBXt9hUpqzaRPHE3BdHuzZs6KSARjHdW8",
  "key32": "4wLS8rXYxwNtZqWp1SfFx3nD5CaWewHJY5Sd3oWDfDYAvx5i26PENWi8T6UcWqd7oJGEdLkkoPDgrDPLtDqVxDDZ",
  "key33": "5vjcRqFJ4ivW3PT2zLmnmcMHa8NEA8PRhg2YDXLXMKuXgZNpTgBNGrE8mkhTyADfDeBdHZz7GmYRgE1gdpAtMFBk",
  "key34": "2vg7byHnCazhCYtwxUMNxfE6tXX7wZL6DQMtGFVUbPQgaiqBEWcA8JXQEqLPx8w8f5Y6LStRPsLqYrZ5NiVQodqZ",
  "key35": "5d6h8GobfX3wCm9kBpdD4muWMGsTrqS43Xir2C4PKuqsnU8c6xWD5rPLHjYBQ1iDHwiNuDmGjaD5k24pbgu7pdVW",
  "key36": "5x6cHvtxVFr8J5EtFqsrHyp9UMdnaGCXEf7h7Eha74NgZv18Lr2ReuX1UKEDQS4JAjCFE64zL21pRKsDiP3uWdE2",
  "key37": "5ELvHsVFjhZYVfU2fdSvsYX9JQgaTdy2rie2AwXdjJohKuirza2bLaZsSYKZRrXZfMyMZUbRwaGWAyGmZs1J8AP7",
  "key38": "4L5hh39dHLFrZecTSjWj7zK2sXT3o6G9udbGW3Zs12R2aMGQZ47TbHB2ikqks7LUdhWQ4pDdZwHq18RFNPLn2xbJ",
  "key39": "4i3oLsD1AqstCbobedFNyUYYa5pagr7F3oHi3mD2x7gya4tootAwYTdS6df5LJ7dL8Kfu1FcmfUCQzjkbG3mtSrF",
  "key40": "51YW6kwMCv2nPJaucuBdULZtKwmCy2ZVaJqmbgtso8AvMtWVd7cFyHCjt2zJskHGq9bpHYXCNBijG6gJHbhf9YZF",
  "key41": "59qHmh6fdFuJd3mVMWDgrz1PZjR72bRomJRgnu9HEx5jrJ2w8BdTjzSneUqYuDCE18ZZU5B9A9dz5MbPuomtK9sZ",
  "key42": "3mM1Z3HctLdJw2hwogvjYAQ7WovkSkRaWEi2HRvXk2PQXiUdoUnT36g3XjhwpvLwZXxLnZRk54r9Q557g41KSh9D",
  "key43": "S46SgGixE36SfoAWfJkxoknTtzaakrPwJJwwQGjGMXndQXD9AhBTMg1L1f5KZU7Bc8KXFbH6nmPZP8qz76tyquZ",
  "key44": "D2Z3vxJtZhBCpv4HmMpEuoxWoijEuvoxjbaPjave4VJG7iLvCy6EzrJAJ64j9w3jNbtJ8RMMSeVifAku2YaDNWD",
  "key45": "3LH1xjJ6iSUem7Bd3S9Dr3aMY4M8kVMyQFT3rcQ4igvJPdSvnuzdL8cBwBLRvpNWe2KUgK7aPVoG72Rr1y62LnxF",
  "key46": "BtfiEBVvMALsDDdz9eiMFuRnogwKvXwPrKa9ctoNrMZKz64d1BLHqMcZKtqoyLo1hVvULQXo9VcwjeUwNqfwuEm",
  "key47": "2XbWAs36jaVs53FW61GPgmMYzgoFy72CKarLkmLUQpPL9SSk8Z1KhGpUngEfndoQuG3zZ11QWaeaYy6xKVMJFb7E"
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
