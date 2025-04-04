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
    "221yhmF6ju28EqPJo5mf1tUinNUeriXRcQ6sAnohsiKGxdJTyQdCcAJRAQ2VQrPKd7B27ciCwJa4DWhkHZdvUY1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSxZaLibdVwA4UEsBWPiAveN77Bocz84r7VBjWDjejA2k2sPLyjAAVsxnXBwyN6erPWWeA1SWhQZkuRmEBqTdYw",
  "key1": "4vnbu75cT75SDoH3qgHzK7nz3B3oSvTQYTVUi1mYmHjyxJ879ZT8WxZJ3Tj172auS8j63Rh1Htvx7WVq5zUonCiy",
  "key2": "5T63BKsF69u1VZ2muszVXkTVqqehhhfKfFJbjZu1Tmhzdmiqe8RfFDqsxP2597zsLeMoPw5gnKCxT1AHRw7UtMWM",
  "key3": "5vkCmsx36eUSQL6ZXU1ZHyPjE4VV925pmhYSpy6YH7rEw2F1wdxMPDDKKgT8p7AEkD1ws78oHskNya3memhVTjBp",
  "key4": "4z8XiuNwPd2s4ipVgfpqWWq86nGMEdQzRd1KXE9yFY9GgPwbGnM87rr38Ngt89waQMHwCJfuRVPUrrG8d2mT4jLu",
  "key5": "5DiNUuDAbibxCLvA1RBxi5VQe2ydzV1aCa5qMEoRt3DFSdiDyC65o3V6ZU2U9MumJeWPdm6SPyti4u47ddWBwTV3",
  "key6": "W7Rbw2sJnVxRZxYTSyD2A767TqSJPHqLYW8isMNNH1REFQwkdd9yqa6oXdRRG2nNwq9dqKAZEGGZnJx4Q95PDbe",
  "key7": "58tdX2JXEaFNMUuxvqbFQJXxLY1uC5NdoodZgWB39xAHyDaXdtKuxYGs6EkRAxez5qhpr9gZzHvzYW79eJAjGgpv",
  "key8": "4G4hyHpLhbbzQuat7CvRK1dJQvPzXU6uyZikX1HFU6TLX7NGMYMTK4r51CfGjf9GjRRgiWSmPF17NCUcpndD4tf8",
  "key9": "nVZkuWNxg2KxcuH91jfkF8U4FZ6jMhxeP8mMi4V1hAw2H4kxiyUBc2kquXFQBdzNRWWYqPriAU4GfH1Vj6jgQmA",
  "key10": "2gxbJ2HQxR5xCLTiz3B9SJca7n4KYLiuZGPs5Uk6dkwwBKZ3y4x65ssPUtUonkjMpLk57FfPdZfZhpnenRJY9rdv",
  "key11": "3UbHrHeK7joCmHVq8x1UvAdmSWdPCLSeepu4S6gMttj3zNjtxw1dxK1Q4ceZVdu3auZ5iqX9NdbrSaDTKDgXexcx",
  "key12": "skW42rJr7UQSseGKgf3xCfbdCCoJVKTL62hRaWHmHmMYyTRBrsK3hUfgMPPtoqMCPqu2kubS7aeGv7wZkqegWYY",
  "key13": "4M3HQbNaEyf4NppsHdCKZw8kUmLCXa4RQy2MhFzMLuqAxdPcxc1Wn8nTgaxPYeo14ARwt2uXdif37ytDchJWXb6g",
  "key14": "3Typzg72fWY9Ezt78XtmaPZc4MZZwJdxGUfXXC4TrBAVcsDeGpyh227SDm3xXBL9hDM83EzLmhibt28um2wnCAd5",
  "key15": "5tYCXWN9R1HAqEvyd1MxWau2vcn5acJjEgCcHW5FkMEyojroxE9eK8JFCZBpoeakCcqjjsQpsA7NZHkiPJH9bweg",
  "key16": "5zEUFm8xGVPPEk7rfLLncoPpKY9srVqXejKAKZuLuMVfBo9ZRG7PY7AVy1Y7pbUe6x3DCWrn26CdWEskM24WRMf3",
  "key17": "3Y3SkAgo9iLy5SdV5aNCt1ZfXyS4e3k3jEi1LWoGt1s5Y3aS8EXGRg6ffGFGSXPEYv9WeZi2PiERdxD1hqTBYcNH",
  "key18": "2vCKGQegp9Nmho9LJuVXNCCa42WXM7X3C9p8WiVJ5Ei6tSVAM8kVdoD9meUffkxtsaa7xXMkDxcpKsg38zUUHd8X",
  "key19": "49RGWng1d7jqjjDfwjg5ynWqr9cyQB33nceNLPYS9BQZByLRCEfamX8GrjQ8cMLMdSJv8fH4EnMwTdUGa4EKRWFe",
  "key20": "KthtSm2JTfshmKPjHPufFvjKSB8yu9B8AinHUH4Qp3UejEEncb6Z1vFyv344hdFYKqeYVj7TsvUAsEm42QVMz7H",
  "key21": "38jyF7B38Ce6WL2qz7GV3DmaBcPK12yWQ5XspYc9nR7tCyXLskA97ugqyWtjNSx39bkpEsU6RTFajr83B72PEoPs",
  "key22": "228kLtctLae118TVMZYvEuRPNdxSAvF3tvFHPcPRRjUxWnGUeYH4nNyxHuJ1os18zmEwRUa4i7ykbZwR3MQZJj1E",
  "key23": "3ZiGJaGQJWgeRt1hpEBMnbhNWZLvLUZGhU4KLDJqjDDTCCRvcudCGjxXDCfmdYyTfivPTEj2pR1PMVkNtfG4utqk",
  "key24": "2Q72fywCHbKP57nQnDyWTUvsn6DbfZEf3sKCQwdqvzdPgwfMNh2RvCyu5FTtR5Gdn2HMfsdhiaAwNyTuoJ23sfQo",
  "key25": "5Byqnjf1FcDvYGQ6g2CrJeuW1kvckFg7Mgb5Bfyeh9QSzF68PSonf2VjfWnGdeyVnQaT76Dy9rM4nUxd6FxWWxZv",
  "key26": "4YBRddbpCwUZcLDVmrjj99duDtqFjuCPmSKJaoHhDSnBGHJc4m3SMr3e6gy4s4dXqv5yY8LJMSfGQvRmX2SQ9enf",
  "key27": "2TJYAG1BCBafQqhRTnL574CKh4Yup1YFg7N4ZWFKfN3YdoaWu9PpPvCSuZiDBf2htQJzKvmL8wTzrGe627c4zM82",
  "key28": "44mGhu6YShiQBPZ9MBQdsquASWb9fW6iD9X5C2eNDTpK86CkmmX2KjcJwo5axN8keTGY9w1ChfMCjDNekabMpfhe",
  "key29": "34E8LbJHwHThCtzBgLSUe1YMVv51yxPgcEUrS9wJDgvEKDAbEdf9QCWE64CS3awEpzfZngHCwz1AzfT8SoEiXaDc",
  "key30": "2pUTKwjUz3rtNSrhQ3Fht1BUBSMMqQHoiod35nPFgPbR4DM1oKX82ivLEDom8yjK7U3yFRYnzxmz3DRm6HTFdjRD",
  "key31": "5fqXMSE1rRMUxBB9eAciQuMvxVo4UbehxAUtyX2658Yw1iMLkQHd42EwgoRFM7vVULeWo8GoHhM6BSzmP9iFbk8C",
  "key32": "Zi3UMQXoHEXSxiHE3AHYYSdCVgxv3BDzrniu2RJeJQxXKTRTKJFEmCeXinkZ7YugHqSnbizBTwtHm72xmWYEDGy",
  "key33": "3FgXJhUe9pDuVA5qDW9tcH5U6JH6SrTCQx4v3nTtQhzZQMNzMyHCj33Fm4L928yLXdwihQycqj634xs2wTj17TVC",
  "key34": "3NXbPFTDBzbcJF5emNGi5FRB5qRJjhAqYYdAxdx7C1y9VYEBiMdkHeFY3DCDtVChzmru2Bkhdpk5LagBwQYy8xYo",
  "key35": "3qH4VR4qc2DQCe7komB5YTFhyHLjDeAxFNnoPXWZjCHrqVpAjwnjAN3xvRWQQT1G4kA1Xrrtm1eXTrNgRCwZ1ere",
  "key36": "3qUPE3wFv5zNUdxHXFZB4aA8wxTs5NBsRCoM7iHZ6wgojCkSS4JiD7HvwA7onZKn9p2kpW6Sx18Sx54cGkYa8YyX",
  "key37": "2CeXVec4WtfXUpYHYA4HsoBTNny12XkGSe471yBrk9R5wWc7izqNqGAATKdYxQgunFfjGcuLd8XAVSskFnUAeXsY",
  "key38": "BPEkthoNthoNSgCFA6Zrh861hoCMve6nRw73y4Mx1vEDPCDx7r9yq4VDgZBDnxdmGSKc5G2j2KMEJLbtYNymeh1",
  "key39": "22jT7sUC7eXzB8v9DwpEYoff6BkPVuCnswdTcojBQbrAYXMGvSUGD8Q8qJJ81brJiKuVkY3bVSg3Xd7iE7Gx8c1p",
  "key40": "5k3aX6CTJegVDDNKHhrpKxzbtcYG1GG6Y3LhtZazNtGKDC9gvBE4LcyZYvPG1r5QsDDZYW5Gfmd62o1gc2XtiBCb",
  "key41": "2PQkWW4JRPdQf5hgNXgMugGyibDiT9A5SfWKQiqtzjPQu7r13WX8WEoxbZq2DGHiiDmB4xmbGhJifpJqQXwURbMm"
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
