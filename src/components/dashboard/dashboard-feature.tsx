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
    "5fXQhHTB1QRAeveQRKq81Pwtvgp7zwzUNav2K6sd3iNGRsHsm92Hq9h8ZJSscdxzzkZZKrdoZZ8NzT3Wc4rhuaYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9SzVCRvGUYimnsmH6QnQVqJrJCWxk6yUJdD4NhYDmcJSM9HoNoBVe1cP5DnuyUK3geHK5r9Q9CBFnLKkQntYed",
  "key1": "67RLaRNFUW6CmP17BezxxFYwegGE4EjzFktjjwmMpJpG7dN4oHKCb6BmCc3r5YLLcmtvLRmf4bTQQ989cn2SjozG",
  "key2": "3nVMpfBHfXXGyLy9ZRfhrY9NwB3EPpiffZ539u9KEKdT6rqh6R36xD8HGTFjeB16R7k8PQz527d1ystKBXfawfmM",
  "key3": "639QvcxjQSN6ATkaZ3v38scNW4msmtAvtJevS5HupQXDQYhnmcrLRRsutk8Nh1R8mJS7XjYsftRF6TXUGqELdXdg",
  "key4": "5T1nbapLyB6fWxADpqTuegjvbsYbrdvZ3vpGQu1aZM5DQtge8MRZpkaWRda6LVrZUToWwodRkxVP3XKe6MT6aZh3",
  "key5": "61Zs2RsdASd8fKpqYGBh8Nidz16v1aTFhdCiHSsg3k6BweVYY8q5Aea6P6qHwrwVvai33tXnd9Mpzn3soEPx55ta",
  "key6": "5KnZyLEvbkjpyqPkwi9kTwkvHsGGP7tibbpHMz4VGZgXt1XyxgQR7YcTacjHpqrz7SnNMbg5zwPNf5WpfMo1FEKp",
  "key7": "4cDBraez7SipErrFiYFNzwjw4zpDUy22Hshih4AKZRN8SNuBcDhQR6tr5Uf6yTVwWMSz7ueivjjpmC7WFkkhr7Zd",
  "key8": "3oYgnL1JnZEuNVp7ebQ6iSyzzswEVMXGTPZYSWxEhfW5K5XDVWFpYHA7cb2AKz2XBPuuRdJLFtGCyqbd9ffPem3T",
  "key9": "G41kou43vXybsBNhaNBHRVZMyU1goJqCUwRwVben4X5QqTReGPPy1ScaWN5jsh1YtC8bJCbxvSrCEBj3B1S5ghP",
  "key10": "3qt4wmAB8Uzgx4RB73BT2S3aHmr2SdiBwxadYvof5XoMdapBqhdWFFn5kbPtWEoQmT84QtB3e7ddzzgnV7stDsP1",
  "key11": "3gvok5FrvJYCvsbzNKKqH4j4Y4jPzHVCxYwe6EkbAAUHnWCk1cWRHeb7WaB3BArKnegSA3TrHJmjCLdgqkNgcBrq",
  "key12": "24QHZZjGPJL3XkRQ1CE9C6vs3W5eXs4BZDcfZh56aWYMSp2AXWue8y6hXNbDBByiZsFzWHczcXc8eFvcJMGYoeqo",
  "key13": "584NiM32AeUq1mJrTtBArX1m8hYhXMQ6TZmng3EjwSVX4uK9wBbkSFDkFbWQhRvCqthtBT86egoJL7zQhVCT14Uh",
  "key14": "4zykXa2Uw3gGFnDn2aFZoAXKxGBtkVwrrEuAFoZdrMepewUApdHNoMquQdjVucoXFKDWXFshaKCe1Qo2kHTNw6gR",
  "key15": "3QVj9VfEA1b7uXLWmaT1mes4q5dJD4ycGznfm41gRsiREc41UHxt2sD6G4ZhTXjfh7Evgxt4ii7JnB3knptgyKWS",
  "key16": "DYaQmWwTXiJ6nGC94mKZmyVLfdSMmHqcmU8LFfCSZQFiWrLNvrxPBE1dCHBNyTgRjCUqrW26dPCMcYGenA4aVTY",
  "key17": "4MEiM4da4mks9JDSiyrcHuju2vQA9FHHdSFHLFrdWffrA5bdQfvkcXiPjV7Q7gP7KgYZi4JBioJSbEeBPE5NP8k3",
  "key18": "2D7XdUqEARgECfcE7uKuYyKVfVPr6KDjHqfmqYomngvMtNGGnQps46GhTkKnUXQo7Tiy9T4VQZchWpJpSv9hYSdf",
  "key19": "3U83XwHryFCD9C8CLjHvG1CDEYwngZzyquUsukfMXJjW7bu6Qp5wv8dG1z6FW6y8ptnLjp1HRcYGWpCUouZ5d8Jt",
  "key20": "4BVKLVxQaG4vTzBE1X1jhH5BaBoostxv9AGXh1614yHP45gxN68wPB5WX9EDK7AbAyRwfh2B3JAgMtnbkj6ifR6w",
  "key21": "cKF4pKrvNuB8sw7LLpGQuxgdvzDHxsZJLv4dTspsbE1dtjjqCzF2hh3yAQbeQMAXQZnetzqGNueGgwyeiLvfdr5",
  "key22": "SjeUsQddYKWdqYNkAJRbnMnxDPnfNbLMd2BridGqp2gABwEcDpav9P22c9WLQCNDY7DdSotCDaBigr7w9vq32n7",
  "key23": "4W6oSfNKvZjEzPegGSGrz3jtpJG2U6U6FE1AFT4JK823chsP8w32wn91R3DVJwLxLctDVd2qRdfencG4EoCQJG4i",
  "key24": "3poNEMFhm8yUKrz5JaDMVQfKEwe6XS2bo8onATktxdr7oYaR2YLhRNHE7J8gQYfUq6QE7z7veP63emygdXzcM7KA",
  "key25": "35uzjnhWXmRB3spe6rHoTN6dQwe88LvetGM8hTtmLkKmVj1MizN5MRYx2U5FcghpEEzdxP1WyjGHWLEURfjzTDZV",
  "key26": "fnGr2AsuS7yJR5Ck37cZKGL5Uc1ne54Y8B4kEiBpqbwoaiNqK2FYApPwn8hWxdwrv8BP9JTYtyWDEoT7E9ehXRt",
  "key27": "3CFjZcNeTZVKK4DZw5ZVYuiZjwRhRk91agBFRNjhu8qETushTQodFsNe4AtyJa3hbyghuN3CtNeorLortGSaTC9J",
  "key28": "3cxByhAA7H4RYksHQVbxzuuJjAcBowRZrZsJ4hBfbssCsxAMDj9hWE3uUFpPtkDh9SJbBK8eMmedV2CPwPYNqy3Q",
  "key29": "4g6jMCALrDRi8mocVCP1UhrZzTFYSQewmQbFRVSnFckKpZXdts9Xw1dPd8a6Cwt2aUDV8TBE7oRhWMXfTZUme2XV",
  "key30": "3JmsU2jMKFGrUPAsEst8HVsLaiAh7AnKiWPcfhue9b9768aPtikVnQyhdZxzQBgv2goLr3N27cFhkqW2mKhzZ2bq",
  "key31": "eqC3eLdL9m7iJRKo7M4HvW2tgL7D36v19jaU72xkmpMkssvfmN3xFEpQQZgzTnRWtcmYFMupAJD4PqwdQbmumN3",
  "key32": "2L2racdBA9N7grp5UnG9LLXzC6tAe31REtxkYVn45zZwzRmmUVSnVj51pj95tveVkGQzSNBrm5P8mdf2pKD1afhv",
  "key33": "u1PbP3odq2mJ8aDGeTSpJ1T9DUpJcrrZvRiYC3pU7TishYWHsnHe3C8xU5xoyZn33bj8txZwDp7B9PBVAqwJHF6",
  "key34": "4MYCBbbgx2sqhLXZvYbuCCJEKvQWhzMTuAwAz6a5CnNJB6F9msk44QfCtUhfHWZ79sbscCxU64UgUMjRHCeg7X59",
  "key35": "3n3BRjGLtMi3XqN2VQkjMf5acxoYPAFQfKRYBf41RAMgqF4sYYqSypCqUJUgXW3hrap4icRnj2GwqWZrva9SPjdT",
  "key36": "4jqyiFCDjhSvxPqfNYvZ2t8kUn2KhVSZ5o5uQxhUWZuE66Ut9YgGCU4vspwhbbWYtSXoiVJQLeSZa3zoGB44krGX",
  "key37": "5yM19wbsiDakiPQeYVhLEJncgGQykqY8Un5q9T9UxDbDQvPpm5LRoKse41VsU8yUVtRXpxvihKmmu3J1d55SHvtW",
  "key38": "4iiZHUNWdyAUsDSGcJtFiVvt9jYEqDTso1Fw83GvoDtJZo3Kfswf3WwL7HHMqyc6Hu9viMcQeiXn82diV8YpmcER",
  "key39": "5JGgQMEq65z2oi3RBUrrJZTVy773eZLR6zyCxRSo6YB3PYCzVDnceiHkNVerbuKDbjiu8o9uZPKPCP8UqqnrcTK6",
  "key40": "2uzc2a7XqdzRz4otRHSDHs8Ntg2VGMd5C2k9y4aCKxHepjKRhudUhLnK2BDoUH4vyKbcuVooVC1u1TfM2yA7N1wF",
  "key41": "3WwqHpaytFA9KLg3hvDYNF11Ye2PN7BNm3kywLMk6QLSdD5ju8B6eVqyDyG43MvprDR622tY6uyfYeXtNTNAxzm",
  "key42": "29PpyKR9GqjZrQciHKHo5dP4VsmmFXJdqQVHTVpJ7bH6eYoG2XP8bDCnoq6C3bNFqpUWF8Dh4faa1Hm4rTgmPybx",
  "key43": "t24s6xkgq6ejUa6NCccPksaPe1nwjduNKKvGNpFmDjkir1gCkHbVLhb1hGR4Vavvj8gHiyidLTMxhJmbZru8pPz"
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
