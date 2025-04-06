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
    "4j9vcNy7Jkjffbseubd6BGQgvhHu4vY6TmAPvwffuEuAHfPSSdCSAhp6otUVCBTGYTk6EJSpj2cZc4tz6E7n5PcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZgEYqJJHNmYwUT3vNZmnqW5gLpaWMgR64StsUjk1PMACWgrW6DBa5uN2HCRbeGTypZ8XABsjGGfWitRb4wWJTR",
  "key1": "38yPcqiwD4NzZeXC7C8phKu9XnaQEDkog2SKkB2e3Hqv2U2wzT6AcimJvuwrokkXqjSx4LmDzdKcawu1SUPW9Cgb",
  "key2": "465LezcZxvvMGjS1LS2C6pbD3Yp5T9GWMmYUBzdxKcMVS5AkK54woJej1VxAPdZ1mWZN8NVKF1LbaaAUHPFTYDwJ",
  "key3": "2A7P5mMVa7UyA8SjaGtgEiCVPEMeuaXSG61dCPndh5P5SS2eyZB4ztYV1SYvuYZFojrWDyJZxBQZgsJToQ7dkz4W",
  "key4": "3puWqxSNXtDwFdi3qfRpqR9bj1AD8vyewrv23JdWtdsHkhn7qSVcHnPbMZucpUfspzxXtshXbcrmQKEcyRcBxrvi",
  "key5": "2G7P3Jtj4hN8SMF87Ni2vtADwzYqQZ3xWLWuHKkhxYPjth8VADgWKMS2NsGjnWhgGoStcQcmjC8AFmcJuP5RyBF7",
  "key6": "rmmtPw4CJpq9b9CRofGZqXFg5NEDZqWm2y4mSDe58fvCVzsmpqeB6MoC5YMVsCwzzVsGJevY3gMsoFT6tVNDsyx",
  "key7": "3A4qxeU7vVbvHNWNNXvfyxAcxT7uhYAwK5zBzAzk7krQRS8XCStJLVPuLtfuH3mR9mb9wEGs9Me5vF2Ekxddk5S7",
  "key8": "5G9eMEqNbo8TNn86DDU1wapu7HX9kvgFQLGM2gzTAUkQk8NciK56KKKFdkHRfuHLWxzUmj3G6wsGj2AiWPBhwDri",
  "key9": "2tKUC33imDzRFioNTHXTPdLyiTPXgspT9Mg4BkUQKyEK5s9QxteHUomumzYhFwuNDVzsQxMoNtGYVUGB2PKxZH9T",
  "key10": "4oW1JywpXYwZsRCGbAtik3jRiZNYTUJPXD1Tie8MfX5YWJo2NEXJX3ghGEmkLGLGFVtDyFEhE3w1eWsSYYjapwLD",
  "key11": "5wfJGinSRbpQ4NTWX4bubktJHTEvQPa3cMbtuuo3aYduhBSppPpyA2Pdht3hosgEjsdqPuuMsitk3uFA7mYuCPp",
  "key12": "5vqFceMJzXTWgpy5jYnsd6fzwFdqVA9CxWMBLwpALnjE6Pa5DtEnmwvepCGTHtJG4Ltb5zi8vkRoEoDyiDiJ7Lmu",
  "key13": "XRXybBwSBis1ybfoqHZkewxYM9tKGBsVUa8f1BgXrkos7mYddWfN91Ek5sGMbZZ13sGRnWTVMQ5pXusouwncrBL",
  "key14": "633VQ4D6UaZbwgPwb5vrVYWZypbNkMapbKwMiiZjYUYiFMAimgJVanz5Vt2cHtcxvy9cQgj6z4A4CJCzkUCnz4hK",
  "key15": "RwrtfoS8NMz3N5bnBApKBiWrgnNL13CmVe3Y1xeFhzoP1yzECJ6jEyEonYEBsqbNoKRzcFZ6HLvQQnbg4BhUJJ9",
  "key16": "4NqBBTCevXcUjb79A47M728ozFTNppTaok36tAgCd7J2Wgom5UZfmi1Zx4JzPzdTefaRhU1BFi9X12JVUUcj1GYv",
  "key17": "23nKHCtcr65vkAqr2voj4AbzXatNx9LykCvuivoWPcyEPgu94exVRj2VzYpi6sPTk7TLYRk5aXsuFThsfiRGuiew",
  "key18": "4vtTCRVKWAGhjWj177kmNYZ5cgqFUvq5hZnMpRdf25CHdR8VxnLUHjFmeLnevzqMdzcRHfvowZoSFBp8UjQk5TYy",
  "key19": "3VkFit2yRVaDu9mU5JmHhAeEUsa872GHPYcQJYwrgBF6gBZsniWzTXHM1iQCvEWEHLBrPmg3yT4iff1VidntJtMF",
  "key20": "3VLd4jPuXBE9WX9eVyCnNGr1qZSpVFueJGMhTesQggoABMbE4rkNTaFDeh6VAymUjMWXtn3YjYdkgbaVTENkguku",
  "key21": "gjGC7UcgbCzmBV1VVpdw3eWpHTvbUxFMCx28YbPcyVDF5yo7N8D7rRm2KTsBaECW9pmVkNkFsQEM9MSEJFsbzSg",
  "key22": "4yG3GhvQGgRMxcNo91C6C1RaVMZR6xV8PGkgiN5FRPCP7hfv5hMBgVaYMuQaxoUrp5RTjkWT2rWUpp2iQFsiHhVd",
  "key23": "2x4wfbm18GJaA1pq9Hzv3F4ZZw14dMcxCorKAEnY8sdAWTAwm1xiPRCrRoqaHUi5NCwxFeWuNLmJ8mTE7XQ9UCRi",
  "key24": "2ghoLtAsrBeiqrBFXvg4t1Q1fXtuxQ5WUQWnDaMC5AhJvAdBYRJXYZdwXQAduFd2Fr7FXsQ7KKBAJmPXXwiV5bJ",
  "key25": "aodcvizoRe4VpR9GV6TVUj6WFGzZbHUFr15U2ewYtXGdVvNpgaL7xtbu5EkwCzNEZHtMwLNMoY4bnocGAMsmaVm",
  "key26": "4EBJsmWtH8xvfzT7jZ8iBUn3bQ6vh2GFWqCZgMvvRZrbmV3xBScK5XUXZCexzZosz43L6MZ9UdgVryRFeJ8bDhYK",
  "key27": "3n5mPmNnpKN75noMMHAKXKmbd9ngL7jPoeCfJWcC9LBPRewXHRPRnHbmykWTqpTAhQV1AepvFky3m4Ed28k6r6nE",
  "key28": "46wRBTGQktsUvRZpcmN25CsiymEyZnUGJYER8yGrVyFMdXFFVZouYwGagLJCAPbFZQpkLjUqbwCGCt9DJCUir2L3",
  "key29": "Nm9Pd63UVSirSmUDmeiqxtii8mvBWMtyyNnE6ehLKFdeW1zXywSGx5B6WKyvSfZnBhj7qa23dr2k1PxR9fBAdCG",
  "key30": "3pe5DGqc5bKsMjn9twQeC2YTdFR4srBWavvKM9sNK9raQRirwXJHsReYRcdgicFH6VvpYbAapcoSeoKAZdkkHLbM",
  "key31": "2qdWxq1gjzCcRnq1jEyKaMWUYRAXnsMCsbsfn1SDf4FkE3KzLMdG6h9C4Yj5k4Fh8jNU5u5pgjWX94f9NTnypYFA",
  "key32": "kgcajwZDz7uXU5tvfAhp32C9FL5YQ33Xya5KvCQ9Cz5F77XsV4u9qQaS9QEduePptWCeZNqak4qRpp78tpUgz42",
  "key33": "Zns3CzJHCjaCJznU4r3EjKCoEBipwS2iWLpaGktJvgm14tKGrxww4ucHFD73762X2LqYNk8RZhJheRguEst2ofj",
  "key34": "4CDt6X5uApn5uLhnJqJi2mztoWdE1JYa1HowC9UgdVPRN78Lz859WEi96dtxNhfXmYHwnAJVuWHVYAw6Y1vb2ZYp",
  "key35": "2U5eDdvC24mdTaXgSgjEAimkKopNsCmnu8KD6bNfx28hox7nZQuK1b88xexnkZ7QNp3MoNhXjXBiTAh5mxg7bXbb",
  "key36": "jsoZzPFU5Adck4v7R3dGseigzRT5fHYv9yt7Zu6SjsFDeTF2Ppf4fo19F8WG9kTfc3VDLu5GMykMhsSPx7KprAP",
  "key37": "SEwoCzoULnWWodWfqGj9Vu1CbycZvrVe2deKq7kQyjpHHqNkWHJTfbxByJiJNxDp5dwF2UxGgBJhqXVhLcBDPms",
  "key38": "4S22YWdKAK62hZ7doNXk1ktUnMr4hM1vSZ9inq8SWSue1aAAjF7E42H4KnGy3t8zAxoXq1qEzEcGi2e1smgGck2W",
  "key39": "3Pxb4j9LkqHu2skS8Xt9V8CwBP2eM3pdfYJPVGh4vwQoYW2bbJv5Srdm6bRkDjYrBApJERFJrssMh5i9hHTSymSF",
  "key40": "5taMwFrt7eJtqZFHh7KNkQYSukXkQXZDP3NUbq4iMegQaYhUY9owwgNinueV6oBMUAqi8vThxTY3CSZhTXYdbaSs",
  "key41": "EqUzWPQLFr8J4zJ5swkREP1NmhacEp8B4nrTj8MTgsq9NzUKvzUtBCsAWCfzuwTaR34BSSCPwzYnJsgxEVmSRPT",
  "key42": "5qDejQU2Z9NcsRAXfUj49N4i2ssQ2DThQ18jEs2JywE1KnRf6xBcDiqCP3Uwdz9i4huyS59RWtBVMQmuQiwwrpjJ"
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
