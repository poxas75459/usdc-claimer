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
    "2nCKGR5G2RsXZWEfZHqS7dKdmGkruVdD5mVsaVY3ZfHjdCE9UESqu4DQXAcrHgqeegxWnUnPiy4bVQX2nbaAxnKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSEiNvkBrMH8yNANqhjbyBVnsgUQjMxsrC2rbicG3s6FDkdwsFueqLWAFqhoH6woJQ1yw3q7zBoqwv8dk3vBAoR",
  "key1": "4bXvtYNoSwM8V3ESgpw6ugoLwphJnavhxhXapfsme2QbXjioSLRrHkV7ebf9guxfjYcWNrVJRvAcrXEh8iErwVdS",
  "key2": "2e9puGKk4AS2Z4z6ZQ8WKm5z9HirquBzW1cJdmBDvoHqzagXdnvVT8bRNdLrmhKaCcNkXAXwXGnruFBtfk4CHHWr",
  "key3": "2WYuWBhcbGybpNGvAS3G7Rmse45vEWpkkaoZp9U1b3C2A7VWeF6s3RdsJEPiMaedps2FiqaEE8MPEsd36yorKagC",
  "key4": "9S42mZA6wC2prQLXNqaz295JfE6aSFcHMyYCssDtWrkAMXnsU697dZ96TuTASdnSccckzGRbLZ5LLm93842QFUy",
  "key5": "4ZM7PB4zCQLR71S6soiXfuwVGhpBbvm2eEvi8RYhGp8ZmLAY6ax7ru4ejNqbu41YYRwJWVfjTJVHC5boPctGr5ch",
  "key6": "5Vjxk2W9e8PrMxTekvrFhU3QvJG1aXqbT4MctMovZhRJVN6xqzzRJtnWHM12ECmTEDsCS1HNeFwk4D6AcswjZCaT",
  "key7": "3Gg4avQ4jQLaeqyZ3kPuJFY7RYCWhQkzR6t1TULuzk7KzXSJFnZze4U4rZzq63tMpqwpqJjMXvkzWUwrisKjmfE6",
  "key8": "HXFx86EnaoWBTPwx6mdSVyiRqekXRDJAbdXsbiuWZqECKzT3pMBuhhwaG2ufPTGFPGQRs5G5Z88dd1tCnDboado",
  "key9": "5sV3bqZKhbuLhxsnhDzDRBKU1sj9DTDPHm1FvUzbqhgndmz6sp7i5tJmreNjTVaKfjvWW77YGH3sXMPoAtudBUyc",
  "key10": "2zbZJCrZEvrs6Ci9tAASzDCNms2Lu1V6iQfiMr1uZPYMzukfpAbJ7vuHM4Q3sEAWzRKSSXBWu8m2HzkL7wraBuWv",
  "key11": "52LQXwWhtyKKP7rmFGu4ntNua8sWG9YwYLNpCp7knXEdAhSyL9vyZLnV4Km8Pj3SmjhQwHWKEJz9wGf3EmMGXaT4",
  "key12": "5JqRAa269LrnsW1AdMKc1Y7xmYq4b9dJGWQWyPQLoDvpgRL25G2hoRUSHnbmRThspkeHaqyCcBn7fbRp6CyjYhdd",
  "key13": "4yf5y2y8hmzp8WoyzkqQWqCY2hoyP9vQViofpgGs6ZyWRRoSY48sLvyzCgs9E4ocoFyRT7MGg3wyx6pJx8UrhVCM",
  "key14": "38z33QcCKrPvfVQRcvu1sYBfS2bUZY5nZGUt6NCTbTeHTr4gzrMzcZUqqcVLX7YEYsJYtoBti9ckQaaRsVZWixrV",
  "key15": "3xuddeQseTKqtepvYSnKirExWiT2Ncoj7Ps3w7voa9K5cq5pEqZQ1tzgXe2wXDjZhfrP4EU5eMkvJnaxeKWj84Mo",
  "key16": "9QxyvYxkXFD7e7vC8RbvyvaLmYH3e1P1fYdD1SmNwdAxa5iHUwHWzhQYDX5BA29ns3iSJY2uSDqeit339mw3H1w",
  "key17": "2TqjCNmeWUFtP8X8C9gmfv4jNtUath6USFXo2SXVKB8sud5PcFgFhzKv4Nh6afUSJHVHXGmyrAv1Sc8h2FKQL8xN",
  "key18": "9HTbDencwBBLYfaQmH5GmToSRbibD2wZLzws78SUp2gr5PFNxAbLZW5SmLoeSzQRZM4cKJKyE2LtYV7DuPZK3NY",
  "key19": "3ezHEAtNBfYo85wPP44uPbeAmAPjoCkv1kDjNxrNeGHe9amUsbMFrNkLyri5kpUuQaiHq2ELixSD82XndC6MQnMq",
  "key20": "uk7dv5X9jnCG1C6zx8JsqvrLU6GbGSuLAkrv4Y9giqcjzmiQ8S4TkLDRFA4Zd72T6C35tCo9ajroMNYKuvVQDA5",
  "key21": "2YTvhUuPSNAiVfYuBxUDFpPVcoP5z7t6uuosugSK4Yo6q9va9GmpWvUp1HVsE95b1CJ9VmRBDGJ3s92fW9ZYFa9Q",
  "key22": "4sBzLjCkWpxTWfWf6FTHcS3CFEGzb3fxwBxBqxQEcG6KSYQeCUyRLAJPHfk9mvDVGHL89RtBgaP868oLGWen58ZS",
  "key23": "562Weik9pz9CpgUSMRTmiKUS2vS97FM3CHkgYmHghcuToe6isXbgjGn7zDGpCD98aYYPPgWP81gtEN7guHsxwbSQ",
  "key24": "Y88FKw2s9jqPou67MRHpZb3UUCJsZa5daBiL3SesRrei6vmZQfMnvt1snTSQEYFBhdMzcBtLpakhyVB9H4qHzrt",
  "key25": "4CLMNqNjGkKeh1Vps6KhUAWaEgoS9VAvfbmEuuDwtSEsRmavcNK1cK9Vb5BrXXc4fEg7XT7MkD1q5ihupPxvBzUH",
  "key26": "2bEwQhow7c61p35ysHCLpath4d8rwyrQgyZq6jbdh24iAcoJ5QWR7DrYRexNo5YrsAYNKqNAaZxcRqyY8qmFTttd",
  "key27": "5YaYBYK7N4TZGooKHuUruGGq5WN7jSxVrnSHGLNKXTbjYhs19XAJHhCmC4pfkf25NwW1bn9eRSSofSfWibv8JpF8",
  "key28": "yC34pTKnARsGm9zUeqM44WeECwhxZNxToUA5AyTkUzTRhWUD8f1Wkv4e7WHQ4DT47NQHVSzAzztybd8sysuxpXU",
  "key29": "5ULWWqcxHwSf6qyNEXLPdHVRcGeCdnLSw4abEvgrTQkmP7B2WZYS54bzf9CkYgXwNhr9a8BgRvSxRFMXbWJew4qJ"
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
