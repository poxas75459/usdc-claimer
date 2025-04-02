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
    "rU6W4kusEhvv8KoTNC2VwnbmHgvkiV5rYskhXzGsXrGPKG4Vrqe7DZNYXD73dFw8CTPReVqcdiSDdD5whEgDkoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53R7oRUhZmp8EFKCbS9RvUDUiDqUxQVayQUSiH1JnsbEJgvG295xA4xj7RqD4aYxHjWAoeXuAFCDv35mLvoDddkn",
  "key1": "5raGUP8Ek4ATRjmEixkBHJWw5VXRPWSh1JXCqgJWpvmgncJjEc8mSqB7YWqYQUuj6v2qnR96RFK1YCt9mxWKmFzK",
  "key2": "5B2EfnEzZhhvJXsL67ek6zPr1QXE1JHHx9YXDTs15FxeL5DmSamXexaBmmiLgqx1u244zi34zo3C9akXqy3UR2Yv",
  "key3": "2rBHBHHDf4xPL874pd3XHGCSB2vYSRp7wUf5Uf2NxMRKNPFvpFgT8FsQK1sSZHnMKuykptvPJJsaBa8N1x6ATixR",
  "key4": "2aGbkgCnQgx8fDtnYCU7XYC74JN2xsgqRQZgfvSGFYZ71T2VbQ9RoomMT8xvjbZqMLngmRMe9dGCD8bAPYK2Ry18",
  "key5": "57BpfEZAsZ2qeVcq9AKmeNypL2RrbYTTUGidEchMeiY2q9LkjZg2VKicBiTPw4amFM73zsJyWonFGYDXTD9wm6Yx",
  "key6": "56vXcZspTHASBmFCFvDSRwbemEbq4d9x6mLVUPXVpmoTdwWHV92dQXXK5Prfx4hmjTfp7WP2qvX6bprxYUSiPxrC",
  "key7": "2pk5VTCXRmaD1z2MG6p5dMU5Kx1agr1Sj2ABhoN9UWqjDcWE2v6DL7ctn9kFyFuTYamV2La561KgZpUYDcLoayNy",
  "key8": "5eFTWmUgxTknnDXUbSHSjfuc7fbn61XptJbajGGgoodnFSdLtKEt7ajzLaVwWoDKiPcrNNuLKrFSYSWnEELtjqbX",
  "key9": "31PUeVNhCh8igeTwKw9NcHCmTk91N7Cxe6bcpEXAfpHSmVv4PQwJRHg61cDgmFCvsvLnQCVTemWrZHijS2x51Qye",
  "key10": "5r4CG7GcnzrDSZGd9kY9YfikmkHkp4TpCKBzhAxVkaaDxe5un64bfiauaCVuHWeqSfL4bVNiXesChavG6ukDXPZm",
  "key11": "x98Y278hNJpnFPqJEiRG731QcztV5GJx1kHejfjLPg9bE27GdhbVVjp5bWtt3DLhc6isGH1ccx9aXbGKmbecXUG",
  "key12": "3oz5EJjYVfHkA36gypGcPPvNEmeGaQWcmpnLUbPk71YVLv9G6VDCTHhCqyFmg1h6rm4CA2svt1nUDr6zYea5EPod",
  "key13": "4hDS1xmog1o8teXsjJkCNeyHkZ8Qsy5Su3KknGz48QParwk7DDmHXvokB95j9TfPYUuh1Sbo1PN898CRVemVefG8",
  "key14": "3P87QCFH8nB2AbETH4xVC6XPUqZc4Y75jZPkTAtQ7XmJ1C4sMd3yCGPWxGSB89u7TvMu5juoCMvbTEHvP94BQiV5",
  "key15": "3caGFAF87uJXH3WjcTdZzHnk7nzC6YKwgG31vMFDE8wUPknSbQYzY9hAPiktvD3ZiNadBTeVKy4hUq1UtrEZRB2V",
  "key16": "4gSjLDEmMt3mhKChsy7VaNkggN5SrpPS4ZwtBSqCeA7kx4xuS8o3o5Vxfg52E5vLXLd45yXF3PWj1aV3fbVRoBHv",
  "key17": "5EzgmM6efrA8R4faN41g8G3kDDtH1aehyeYE3PpTXFQUGwkj7q6DynqHLo5Q4uLVXK4xZHgtnd5C7i3bUr5S9GUa",
  "key18": "3Sjiri6xSjAq2VDJU1BEfLB1k7t5A33Hfg4PFfriAr3PXjp66tpJzjNRdDhp2K1PkYkVXTX4vZmnP9WMcC7w9kQy",
  "key19": "ccJtme8CZijibKXvY3dcSMH2KEYKDvvCsYhx939Q75sNPsUHxZrvMZXHyWMd1UFeo5GV7TmbB8WUznDVYLq7Ph6",
  "key20": "2ZfE67cF64b8rDgmk92w3D4VV8KUdQSQZMQKb3Jpfb72GH99kZP3UrUY3FBm3ieXoS8WZ6gUzVha6hh95Y3DY6Hf",
  "key21": "2jjtLkdbdsfiDGdYUQhYn9d3D3ERbwHUnFMzJb8m18xos1wtA5zsMfkLHGdZ7LCUiosNoNcFRknPnAsVqQvpxbZC",
  "key22": "3kWgHdbZGT5hg4DCVnH6yMufT2p45DdpnUwrkQUmWes3X5ybaCMQTxNZciQ8EbyJfWWuHf3eYCxwySXB9MdnFeDe",
  "key23": "1XkEhsbnpq6Nuj81adUv1pviQt3EuJUs8Mfg6fbzTbJZ4qSe5mg9Qf8eRhCggoBDX429PmQLfy9Z1aUZdy5cvJ8",
  "key24": "2K4SaND7EUsV8vaBK267pgqgg3pCTWiNGhL6f3fRJRLE8hroXcHrhfL6K1vKvfnev75sv82kdqPFHbxBmJcLT9xV",
  "key25": "3w2MMrD9keizTNLHwhFARcrdozcc41C1HgS22HYDfJy1xXdfyBSNbn4sZrBVhp67omgDRUesEwTrvcZRmqzJWrDo",
  "key26": "2BP7WhiTBjjuus2CwgRrRjtoYkoEYGVzHsdvRQwrUa3zAVmiTTysQi8yfY9ink5zU6oSir6BEYjAxfEt41zqPhAY",
  "key27": "2kGn7dNvsaoWiMtiFSxQxxgBMHAjq7GoF4LULv6o5A78oVcMRNbxWBo9UprzQ5qMPe8gS4BstUWsecxbQg364B6C",
  "key28": "4hHZ6UytBgRzMS1ubw6kSYpkS3BhhfXGTu2Fwo6JrLXryYqP2EwRodnCqQKMDQCW9Y88bXG8ZW5B1jRSLy7dbEXV",
  "key29": "5191d8LxUAhSZicLVsV67NXN2tstRs3KdfBKZRcWsz5ZZb9ckAVNfQbYDLCTN1fKrCp2qXnt7soz9c1sg1MUqS7D",
  "key30": "5nASDLsJ4fSj4aajE5Tsb4ZGUjgc6JVGSkGrdAspVVfr8vcwUuMhceRw3SQcTCGS2TKEWPZL4zFbG2yNT7HR15We"
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
