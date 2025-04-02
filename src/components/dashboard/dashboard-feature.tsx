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
    "4JkKmoZ7PfDSiFP2PmobtMAnHziVxtsVxtXafWTYQdw4DMSKfR3khAJxidjf8vRa6pSZWdbohUum3nf7B3t3dfCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4dQ1k47iC47dgwe4L2tkzuPp2KYDAapfZs2Trd4uWx7m6ai5BmPrbFp76Kuykfm7fJsu2XnAL9DJvHvg8MGEA1",
  "key1": "3oKhDLZt1Pjb95UM4fvtkjiw8P2JR9QrnrvHt9Yvd7fThzgGQF78jxvqFJiGLDZLQUhnRKeF54Zo2ihcrB5uwwwu",
  "key2": "5JvCGPdweGD9Tvx2g6bSLkk2aWZ6nGQYmuE1gFjbK2adEUvXVHGB4HrVuAKQoycYAUVX8AWaSSkcdLYxvxyWYroK",
  "key3": "2AofNvPiXZzYeJVD35E9QnF5FWiySvQkVatrp5YwfstMGFvqqcg7NbxJwT8i7nuTbmi8rmSsiYUGAi2wJ9ciXZnL",
  "key4": "5Q9uVQvfZaRqHzDQqg5wZu2vtLwzqNHJgdpG82pYr3AWAMGZ9XwKWByUe5ihGwxRYDYGYPCCyTMT8a9NWbXKeuGc",
  "key5": "KdoPEXiZ8wPqmxnZWFDedsxnP6bT4oH88dxUHH5NA1gPztM927HAHvqYdGSrFxW5eapbHEGJQx2wQvDhssSKD6i",
  "key6": "2m4gdHUtoWmbgrVtpsasSzP8bdvdevVDsSFBU482iqUJo6wwsUZgAmeEkJEh3vfuUes87djDPbpC6FXqyBo8NG6P",
  "key7": "DBh7ZdutRs56kotJ3mA1rr4TgabvkokJ7ULpM6NQcZLqm8P5L5LZZxzXpop1gkgr9SsFju7g8BZAi44QwoyaLL1",
  "key8": "3ed64nrsdyxrk1ruAcFQm4abk63tQmpzpRqcAeLdNK8za6L9vetdNk3i7nf2GQaB5r8h6rz5LtrkEM6NkCsxbYVP",
  "key9": "LARPxnDVuzmSoXjqiKNLK5rn29nntQXGUF5xdyMbDn4sRCK6zkULajDb7MiPBsTw1SZ7DYtKruh2Am65MCyvXaj",
  "key10": "2YB2zXpVtUnqVJ4nJTHgLBuBVhWvY8Ejeg9XQbNTyD6cyV2L2kkHK5Vfp6phj6dbmB1NWPbjMPV5SXhZfm5MC8fp",
  "key11": "5vg5WRZDCDaXG1i7ir73oPj5DM46B8ZU3Jo9ncZijsUrznGpxWRWMKRTe4n4r4xVV97DLoLLPLpYCbHjc3B5XvrU",
  "key12": "2QQWZsid1JDsStUTviGoRiry7NM61Te7jiH4p9sWP4TSQSmR8D3HUxrqoBT7R51d7wSrFEwnprFxcETYDnBTitAn",
  "key13": "4MnGkxRw9MW22FJ3b7sbWXzk94Mr6TCuCDCChjghqAMrMiv24unaPNFsYhXnCL8QM89qrFi58wK6aEPRoXu1uRuS",
  "key14": "3DJVoZtM6e3cnhjRjrBmot2X9jy6NqNsKKybsyuSMtGLfqGFDLF1KwLqhqyrZrF9NWePUY31gdtF93sPcyUp7U32",
  "key15": "414gwRp3bSjqSiyYYdqgvvb7B4jRUmpwRhEWmzAShojzz4wPAhDJ5hCohvk3erAvNSp9GZucQTm2NVFLu98jNban",
  "key16": "36FTiYrXFVkwUHVYx6r8kBewkB61SHijss5jFQrzFkU61fav2ryvqj61wFZ5vBsxTjPQL8RxSVPLFyCKjyxjUnXQ",
  "key17": "EmuEXgEEDg7ZosaVcz2eUS2T1caYMuPDrL3WgY1NwE3Vngu8qs8acfJWTaKEWTXVnyKRXhysDj482Gq7pw3xQFK",
  "key18": "4Da6KJUhbquBfxzoTSui12pNSfnnBViVWhiEWUd1CUGK1oLsDr7goWH49kcbAUMucMvnCsjjkj3TPCmtnLDXZMUv",
  "key19": "Dm9M6braQ2JPUVfGZDYAK7Yibr6FvQ41sRmkzR21Ycc6hMVyahAWWEVELcorZTo19ABWqgKyANTLjjesPsKMbRe",
  "key20": "2cqZ65kvFFkqjSgTkyba27hn8yn28NJV8tKb1vDAEnPMZCHKaVoDMPMMC5Dq1gf1X3LsFuXy4U5xSkwzni4cxLgA",
  "key21": "5h6fGDVWcWqs3kpNNRvm73hFXwTngvYP4nAVCen5JoUxvXTYYWVJBkCHS8jDRqj7Xq8XYzSpE6U17kqY9xXKJGzy",
  "key22": "2F62YQyickcq3buivuEqrFGNQ2c5u4hyquHUwiVr2o8YPfVXhwnthcGNEnaC398cSMD7bB99bFgJ9qSRa533dSCL",
  "key23": "64gVL9uUUX9sTu5erSP6VcWd1EY7rbdMgwpV9nxoN8mX5SPRnYWosLsFAUztA7xV1sJXsuHE2QU1JXraQUAT7RmN",
  "key24": "65hUMJHg6fn3wkXtZew6EkzvoPHb5kBdjYYp6bnWypfjDGEBB2jPCarocqSFz4Ri6Xc9husv8i9ps4DxsB9Bhs7n",
  "key25": "5y4chrbXuAEDDudLLyAde7mKqbVvViXhCHPsvvbY44BbuVM24yC6iyhRC7uSewLG8HWtFRYauwgwiZ1NscoJrhBk",
  "key26": "2p8GwiFrCwWsaUdW9EiVAxNUEZZwR52P4kpNxRpFCG67gKGKTwGqjWByPVNGwEaCuwh1AdUVjMuq5vGh49SamFeX"
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
