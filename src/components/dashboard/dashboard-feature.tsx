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
    "2vH1qArnduCHz8xWGDaQf6T1mtdsNLUhVb4rrVzLHp2oNzcGYU3wV3BT2xbvXDJbmuKvsrnG8itjQNtgKRPb6Q81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLGBDRDfHGgcLDa91G6rXqzQj17UnfBTBgnYYKVVhvYWorY37TuRjjHgvhJpMPkYF2rqpmuCofnUd9Ts2njuNM",
  "key1": "5WWELFdSN8C6iQD7Qv4Tyq4UXiK3j3JVt19ZDhWtLoSnawdEmpMd7WxUxE5dejJTcjyhsF2hoqewtLTxQJqJhsxQ",
  "key2": "2W5mGBYDCKSU7V6qdeNEQvSGpkMbDy86cfTLzjGh3YMMfDT8pHavFVwKGkWsiJ9AtPUuAAeWtcaKKz7T4y5ec3dD",
  "key3": "rQiPitHG9HvoudZK4SX9JznbSxP7biUHNTFJwbV3hs57n5BwcCxsC9PGXHWs7UqQy2j8ypUMJdbnJic5yc4Bvt7",
  "key4": "5SVFYVaExNUkFxAPc3MjRzRdp5s7Vm3guKuLARpnA2UZWvVgnegdanfBWLzh6W6KywDocboeAunesee24Ysue2M9",
  "key5": "ajvc6fztnpoAYE6MrCgmNHd5W3xKYMNrqWXNFXZ62VBA3ekwnFca3fR8YcCkKDkgYp2E9FGHsPXW3ArMAAp8zpv",
  "key6": "3MMozGsX1DhMBBSHNZDABiGJTpn4iQi9afakSDWpEEa2GFitEKhV2foUFFzqKqSEjYsbnLidtek8c3ARBdZ9u7uh",
  "key7": "2FRMs2H9GDaqmt2qZptqfWzpVQzbs7KWcuQRhfRrrjuQPvX6ooaVSY43AU1f9mbkdhrShJ9gPQLfLzfMped4bYqP",
  "key8": "47AA7ZSG5vKSFkLjKEphsicf5R4gdvnKrvCj7Lx9nDuyiFprzuWfSmdFyuAkDhLbss6G7Y1QYSpxDmpa2P3jAGe3",
  "key9": "4WBqPeYGS9TvA1xJZmpR69rjnDXErQfydDHBVDC6x8gYy736A8J1raKoUjhhP6Do2YqMMQioGdn5GGv3sa8aeucr",
  "key10": "4vdasYYTdkJEzmXAvzHN8yp5NJhMKTWa5gYWKNyGoKrxeMzES8cXarWHBYBT3sPo4qKGqwr4QNrH6AhYjkmQxivE",
  "key11": "4GdjR2ZDtdpDntUUQWu6KmAovj66kCoV4fXthQyTRCMv4JVdSU46sevDGYoTVwfXe5JfXq1Z5nhFEuwcsbcMAF27",
  "key12": "22Y2RD2m1satxDjGFazNmU2j54RXuhtzH8sTcmH5Jai81q5A2RMxaHfUBRGXaWUtc1svRyVD6MA5RUR3sxRNjPqm",
  "key13": "5GyH9fu4L8Hr75KZRLcyjNK6HFch6CQJ35zkCdhXSc1LBWGX6uBKPs2KHZABKUq2Bgz7j64ZzngCxTvALZAhqZXK",
  "key14": "2Aq4qGCKYUCfrUmjSe19d4NdHmKbvEJo5hNGWytUYFiWsMwyLd4zbpQtAyeNUx6gFZ9uKdubNsmNtyzfoesvfASs",
  "key15": "4aCSxv5rxyRBhK4ZMfVCgiksMscDNVx1qzoA2PSNUAMA9ENmgw2SMd1zvQU4fAJKjAWQxGNkyirApCkw1Y5oVTNz",
  "key16": "4rZKBbmBb6rZBG4GB4uHeJfv9drDJCjheMtA13NqvCnzVqbu338qM54TvLDb9ZdLSGeb2D8iDx4eSweZ8g8yZjL8",
  "key17": "4Lz9yzxWQ3dJHhrCfnHm4Q7d7WZxfucN9as8W2bnjxZLFcJxAFGZp5U4gvTKWcsivaHn5So3C127w42QaMrgV7T5",
  "key18": "3EnkFVijC4xoGPfHRERWzpaFM3f3qWNv1YmxBSi5XeCqRY2VdvTbD4g7gLuwstqPDQ8JfeufQ6SxfJojMT8edEdC",
  "key19": "2azBZWYxwwxAJnw7mh5X2dYKw452bfbD4T5M94MMPnv7dXvvwgG2aYuTFBsTkZhvJv1YwLSg83iNWuPa9x4LcApK",
  "key20": "PFt3Ki2yegevVajGzBhMLd9JoPEjZFJwLoKkuvwRhLQFzie9X6KGMjm6s82UcfUM39mdVu5HRp9xBKka5aA58gL",
  "key21": "3vSSyKhjzJBY1N6KQnUjfk2oYtexEsPNSCDL3tc2NQKDQMony9AuMcRrYh6uQeCDduHr49Va8Kj1JJeo6hXvJWdF",
  "key22": "5D2jESxMB6agCPAyUwsX7KuKrogEQwcqmh4rbdT4vxmVwg1uwQhqoYc3EBDtd4yziNmSzN1oQPbfJP7VHGRmsSu7",
  "key23": "sXfZgFpTj81vzpdZy2a64nD5wNamRNVDnUVhnGsuDypYay4XkaNfjMb6Ds511TyHJnJNKQSx7MV15oxpkAny8fF",
  "key24": "3JVYMbta1kaZEHMNW24vzYc8Ch1fqHmr9r8bUnHCn8BM11pkfd3Co2KyfSSutJWYhMHHE2Ut9raHuW4GRvE1HGec",
  "key25": "4xNC4HK4SgFoDkMnrxm5Sk3zaDmmLyJQrSkBiyLjsDDC3vGSdpLJhNkKPS6GzKAQhCRji4Wenv2hxFgxSziWuakv",
  "key26": "2tjyp16DMnXCCDUZzoQWq5Ce6XzGsDqyiy7XHeYMYbc2BrC5rHi3VWWrSGiferz5L17Ez2k68uFzfrnZj8DKCf3j",
  "key27": "SZJ2kUnwC9projskWSta6JxpDH7sD7c8zNcAVyjYrZMrWZG2N9zBF8yXhnRCwnVviUY8kEA4KmsZK5WF6z4gFt4",
  "key28": "3wsHoi2XMkF49NTXkmGzB8B2CvU5CtQfwchzkS9NYRBS9vdviHXCeXem9GZkRvbV6Z89TdfCZDEuRGZuqjS5ptA2",
  "key29": "2CdbiKQLDK6opGGhg4UDQmo7TgY5dxr34cCPKPKPesYEeAwiW1dwgCfK6FEUgsTq4dFPwcKmMqJmhm9ax6bstzp4",
  "key30": "62wdM1FqGCwJSDJXhz3WTQTLg5gb57kHJPxDxF6JX61LAEDVoA63kqKQskDMZpZs3QBpQXXG5kqyCTW2z3MKjqkL",
  "key31": "3STu2UrhV73NjZyqHCkgBxKFmwsQFv8EFuX171hrh7uvdxtHQy79rsohJTKkJAPvWWs76EyxZE7kmyFn3MLtLJ8z",
  "key32": "NpYtLeyeF2jSZf15z9jhSVKbpNjzQB2YC7FadoWSowYh4Ef5Vssfucpr2MA3EnK77JYoCs5ySqgx7EoTtXcwDtP",
  "key33": "3mwZTmCfwFXwAAMAUC9kSsG2heMTLgG7KFAtuwmtpeu2rmuriPfSsCwYtwdpgPhXigcqU9VdMdfQsc2ABke4jUG4",
  "key34": "2CahgSaxKuFfJ8eVVHgqgNekg9aKXGwTZEmWE4fYwbKnHTN41Vec24ej4QvgV46oCbDioWyySEbD1WUCesfMsdJX",
  "key35": "48F2Ub2CgTPXH5cDpmm38kHTLC5WAQc3UEMjeYokzawzApFZcTw7a9rzqMefTqm1EbHMtZJJnKP4coGxWMoe7rxc",
  "key36": "XMemtccHh4xrVRa3gtvvv4SXi5AYY2e2oSizpENQPw7HnBCHwYoczRmW9mfTWrPAmCCLM87Q5vuihJQSdCueuVX",
  "key37": "2V3ZC2Uz7extUcNpPoz4bHj5hgbXbcHVegb51w7KzKVtpj7qWbBsbw8PF4MGvciaUJThjGhcVHywnUp2nFfKbgZe",
  "key38": "5JTgdaaCLtzxsTQHC1NBDEz9Jz87agnpcJ3nJHCqFU8yNuRfnYRkguGPTmF7kWtjkKDjpSx8T27HsmkoVFEvfVr9",
  "key39": "3tvtCrnQpGyjU929SDemZPEqeudRWbBjC71cvGo4LsvvxFtaqQxtki5gFDvMkCtBT4amZTEtUPioFnD3GD173QAg",
  "key40": "3r4PWjJM2hM6HiTE9cfJ7hqwcnkK7T68JBo3TCXtSoJW68zPVRFZH9HqKhqbXe37SLwhCYxR9GzdFgjAjMPHqWLC",
  "key41": "rK8hLjDHUP5U7CtkD2jy9HQ3MXw9YyCptxg9ccScxjod45zgjKDTtnR2JTA4TyEJynjbAC8GXW9bKDhDuPpZBg3",
  "key42": "4UrgF5LSVkB8brmAMe2LXZrriizUfGPQf5Z4ZSqzv5B936yPxpyXQeL4vwrFzzMU9m9XPtT3JYp9XacWQfnpQ7Jv",
  "key43": "4YUdw6VacbBxRufpRoF7qinL2aBowbWFJswXVWVEGwyGpBPAWrYQ1VDaVkH4LNZXhTcH23S4JZhoYC88eRwPXtxX",
  "key44": "3uPYaVfTSUH71vvjGpMLdrGAGNjGo2p7cJQtJjwaVrLS3xrDzankyd1MuAW2bLdRpEDSUMhUHFmJsdDQMb1ar4K9",
  "key45": "46WUDrnWBSq1Zo4q2cQRx3oT2Nq3mnDn2S9UtXKFJF4EVZJfusLkuc9XbjZnq9PeuHSGCuDi7VXAcEeGbKsvTc3Z",
  "key46": "5K2orqbScZaBckDqsPaHZrNRS1MBwfrrcrA4hURRio6qAo7LJy5bJPyL21GtDskBj4YEzQdA5fgwcTicCmux3zoS",
  "key47": "5u1uBJ7QQp74sbYgVsp4K7Pqmfa34BBi8eZDRcVHNzcvk2A2CVmaE6zdyJARNFaKZewYPkC2DWQxNrFuhMsRcz62",
  "key48": "4TeRnuqZWn6H8RfvXRxt8RQg73Xnf9AaEUtcYs1kZdEcxZQPaexmDTo8Jv8nHQKs3P5YNZQ8ddE2RUuDbbvEhmya"
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
