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
    "1oYyLdttmHnQkM1yQWESTCXdSxSptUAAywH9ANwXYoD1AcqqwUdKp9LGfe6dgJ1yNR5h9jw4wvRKkcZ47TVnRRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irBAn6f8X5L3v6G972NgtLidsViEXBGq87y9xy2hKS3pWwMD9PGrNpECQ1WWGvMp8wJ72BChAXgGnkk7o9q85em",
  "key1": "26r8vzweJVA1EXAb8pyTw6s7o8RFs1nhutqSiMqasyrDSb58Hs39cg2pfDws7xkEpJ5c1kEgvehdWNGdMRU82hf7",
  "key2": "2fkNyNCWMD3jsGkQU4UAF1MDfqTZQbXbRF3vP6hfD4UPrGcjy6xQAmBHQN2wd7fwXskvHVGG4K9CxXujHZn371Kn",
  "key3": "4MgxXBPWCjbQ42xUa1rroBJYvrXSPEmZGyLdYim5Cjd5MawQDK7nzX32CroqBGpuP1ZezxYnNUyhna2dbk3X1fCQ",
  "key4": "2ELCRMK1NEX1BddCKxe2cHP5uQLUcmBsBnzV9iUDcMEmxVnZanSFDZcuHGA1HBUQTP1VxS2exwZEgs4Pbu4zk2sy",
  "key5": "cJMVZt1AfiqazRq8VSPTnu83m4j4Njxqpa42bizKxEM6FZNW2k2JWcWqhwsBgkV88an1exNFQXK111hZnGcLCW7",
  "key6": "sXM9pDjKDyTEbkBgPLdLndcAjrpi8L2ehqavd7Kcvs4oPwbKtegahuyuHFw3BNGXGZu8wbZiZPUZ8BXJh4LeZjU",
  "key7": "4bQjw3m7ob3Pojv9VMgCT5FBHVPaxejDRQp6wiN4PuTTVVC4ux171JE4w8NXgg5EuQhKixHWU53NcMviFGG49F5f",
  "key8": "2KHfinbzqJoH1rhqtK29TUmBsezr3iP9cUfENWAokDDSDZEBMYbNck4Ez1Zx3NjPSbckNj4vTAX5xwWEzLiGUCod",
  "key9": "4uFEXM769f6fmFTC4iWZY88pgUU4uixoc9yuFdrH6b4wKfACaQDHMftzQ4Jm8E7AoWJ2nz1gEWgtxdeJKdKrXccE",
  "key10": "2u2Z9L6dPgMdYk83tCGPSUJBkq4oWaR5S4NJTQ8jmiiSMGqXM4hNnkb5yJuGXT44CVDtNAptTDbFJEscuQaXEBez",
  "key11": "3tWv4dJ11izLkRVMq3e5WJCaeubA9BWnPvsmNLH9p4HDYpqpjRHZfeieYTK5fzvPwJCMW4Rn4y9QabfNkytVR6SC",
  "key12": "3j43R4fc47hcfBacy9v145k8TDPof7NLycH4ShASHFXQx6PTknZSxwGSBLdhgg4jcvnsYR9XdK6hQZS9qb4tSV2Y",
  "key13": "3qT2G34gWNufhvDXrSb5MJqjXxeV9pPoeD5nyKsNnvWtvfzTm6JV8bCgNtjV9kEbG1wJWDBUosta2W7x3RSfPwtF",
  "key14": "4ft5kKNhRWZDCnEQtUWJ17rRXxGy3mTc6T1BvNGuCVzUaPdFpLw7mmUa1nD4HjjUJPGsvYPHhAJacmbBzm8DNTQP",
  "key15": "2kmbMEn5sQmzGWU4jgfrtWUANo1fEYBNMBkYd73hhojuvdJQBB6NKKgv11TWdDScBrN24xtiCD38EGo53xATDfNc",
  "key16": "5s2SCUDP77iFifTtn2V4gCbKEZJwqhkYDor3vi68sDM3kyxREr3Tktkh8JH3ghUDfmeRPHPnoCLgvdbzfjnfroQY",
  "key17": "3fT1YAMGWVU88H2oZBdTfUzoHMtMRq1rVTfvd9k4apsRPK5KdE6d5Ztb5yacNFSGaTYVmzv5S7PvvKLd4frUBKUn",
  "key18": "2882A1RerVkbDHq412wWLYgUzCdbLayTHoVDYwQaegyJMEUQ5m6rfjiWABS9tceTZKum1yXMdtvK7JrGRCZn5SkT",
  "key19": "5Wm1MMEU87iyC2HZvmprKhkdT6qpNv27u4MY9jXnioQ9PbMewMNE5QijkiWo95c4rTaX1jqjjUKqqMfP1vGt2waW",
  "key20": "5hAjFMbxU6WoUmaBHcBaLi96aUjkxVQ5RWRABzpLtNd8QY76bgYiyxRmQr3N8tjWVfVcSMTyK4jye9QVsWL4To8C",
  "key21": "TZvTVnJvpk5SAkG16NBK7opMuMRgqpu7SBgCyCYizkLbuzM3YhDCdU46vrN3sgGN9ZLGBS9rigitT8X8tEKBeQK",
  "key22": "3tqCFUiSEiy7nYLkSs4NxwB3esShhytYCpHspQud9tzQK1XM3FEBV2e5ETj9LKT8oVPFehBniMCKDCS38UTprfP6",
  "key23": "VMUrNPr1XyMwGFuowHvJe8pwtQBgBPYWuUFs6uXqzfLuB9U2gepRGHTz7Cxd2z2WTEAbVJCELeLuL83bQAQGFJr",
  "key24": "5enbYF3HCmoYT3tZZkEuabUzenC1mrjYZCMRX9czXrK1MRhFAhcZX8Es5jYFGQg1xNzwV5ifSrjWUNRrjPyjDEPy",
  "key25": "4LKyq3tyG4hPVSBFoZgs3nFzGuBm8FMwsbvBAJqayCEV8pE38TmNsGwQXTGz1Q8sh1LY4WHYLLMAdGFSu8V3bLsp",
  "key26": "2J3vxUPuqGkz5vLfV2Mi2xQZ6UgaCTrwvdNALA4547AvuUfzRZY5bnWcxci4woC7dFbXeKYsa3f2txpUSGNzjfMD",
  "key27": "23cQRYNjRqvFtTUxheJRjvAitVL6AoTCmBjsdzLhmiArfkkaSYvQfa83mbr3tQDSH17ZuTaw5JQup6BRxQFGRQBd",
  "key28": "2GKwC8z86tQWnFtiazoQkWcDwyWYfnqgA9ea5NR8TmdkNnS26PFqA8MBNvh2ShvWckxTzrWaAvTbXEfpeSuPBzeH",
  "key29": "bt3ztmiYzvw5yQQZaSKgstMDjRZx3JrPoqiBRoPmkW6o2bAzpsc18ApJXSa2YX2YrjcTBLDVDX7uqjjSzpjfkqA",
  "key30": "4FCjHkGUFzisF8ZZhJ1KWoZdiA3YwedAiDczKzjueaSJaYW4GxQCcboSct3r1uDCN3CsvNE1YzWKqAAy9ABTymv4",
  "key31": "2wByMv869BNXg8pEQpgJ8AQNSDvGVJQ8i1FteeyvkJnxhP7a7nnFhBaFPMCV6ntgjzw7qJPVvGj48qAqH4gjG9P2",
  "key32": "5GV5wW8qLfHxwDHJm4p96zhGJftQrwyFBVxciigmPRRPtaT63CLfS98a7rLaCkEbbRApkvJowtSEGhCjfCFStWRJ",
  "key33": "2xkgoe3dh6SYFVdCCiGkwY6BiFtzMRr6PQBVqw5w4RAyERYQCvb6T7aEjW6WXpHwdvDDZiu87DQgKYzgkBnDjGam",
  "key34": "QS5gq4koqviAfXWn5T8TguUbwSzqwzgKSATad41A23nHPtEUUgSD316ExcWkq4HMbyu18PZBgcWZWRPgp9s67dk",
  "key35": "3toWzJadtByMJdEAVCMh4JCMqrfs1RGbRzVbUnec8ps4FEvzZKL1L4L8ZRtRXA8vGSiwsBsdVYgqeZbbJ4h8VfHG",
  "key36": "5xysjmcJENuCKhhZ8xtAhEutYP1ShLuY4rdh3sJ2h4aViwJZmCTvYtgCik6PRs2eAVt3YQ1mk9pV1utWfTGVnPna",
  "key37": "4jQeS7gUZqm8Gh6SKMC5oU7C3pqbxkjVy1Ju1GkRqqHyRBYBeSVYWNpRtoTxecy5rcgPmdrN5aCoQaMgnw2uFdd7",
  "key38": "xuQBVZ3AbZsB1bVndeQp3ZV5PrJp28BYwgQuZgtH6Rb2tsuNq48uqDACJz34xkRWRe9aJ4p73oEdR58uFVEzHdT",
  "key39": "4GBtJqp1drswRR245eTGo4BUjQuEaF4JYQWNubHtQtiApuMhLFEKgNGfSCjHcRZskaUpx25aFSCjznrGSVhcyeK5",
  "key40": "usGewRtspCcYBRnvWCxQfy7oZJZdXypLf7n6TLe38n4mp7WyLbv3fSquCSVtDsgtwzF9LJRKhWuazZeabxtHiFq",
  "key41": "4H4NhUej7DBD4JPCUDnqxbrzLC47QCqRTUqQrdA9RRHWGCQ8xjTM5dZZU1LynLdSrCTNVVfvRVSZx2m94Fe424Su",
  "key42": "JaCVKyMwseiQURXvem7499knQvc4Vvb3oByKHrY6MVb76pmNagvqjSVADestdZyqqb3qdDwRtLCT7VbBMB5EuhP",
  "key43": "62d9e5xHgWxDiU51FaJ1uwGsqDwdcWVanGjuxKYaa3ecwpc6nKPhcLCT312At72GTRpexTzbYHY164A8npp5AM1X",
  "key44": "UkuCLN3kv679CcEjUw2yUrpswnRR1pN4c5Y6tdUFqWLLjgC1oDmWqTCn6FDvuuCAWgEyTDuaA6C8vw7LktASrt6",
  "key45": "5KkHGF2o1ouUpmNJr3bZL57LpPdSUF6UGfHNdmDuLAAJGUaAKevUU1zU7iJsFxyxzNUV3UR3o51MeATqKC1BLFvu",
  "key46": "29rvLAfFoWsjqCtSTFGhpLoTd5nMpWrdZYCFfm3h3FMtMsP67cTU9F8ApvQDv1iHZgtHUqhjMvEEvw38TQwmTKX9",
  "key47": "4THVLAnLdy5wwS2bCYPJikMiFzRfvGxkUi1Vq17ecRBSZiRcMJruvBXPzLc5iC1wkGe1tHQeiDdwyPHQQAtNzcyK",
  "key48": "vmrqt5y9mJAZwkVMZerYMMmEMSKNcxJWgkkH6naurL8fjzKGaLVwg1cboM8B1ReDWaVt74kr32fwxeXnztPMyYK"
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
