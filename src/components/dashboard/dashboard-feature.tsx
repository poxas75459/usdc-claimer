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
    "2ofvrqCadvz64Zcg2YSb3DhMn931AJ4TiHmAoGuEWyM1F5fR5DHLmYRjdbMrDuQ6VxVPfzjtX5eMrirnrmd9R4WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSozkr7tgpV4tssHoqxE3uJ3fKiWEhxh37ZWuaMWeAZmX7EkEdBv69CymgemLEBf7jcjBQuGkSYBTQzwpVCBDAp",
  "key1": "67HsMDKsSBfi5HJnYKpzJtsXrE2y2PE9EzWrdiuR6SuAQxVRHN9cGa9zwAMDrtGJ9HNnKg2gycnneNHRRXs2w9Sh",
  "key2": "3KttriMENquhzRLPxTvmginJjrhQviuLEJcW35fqesg1fLN4EekKN7QsgqcxAhqZ68eYbEq6nARthKSPQTtC2Hch",
  "key3": "3MksNvJM5pYX3jkNPx3w8WfugLuJrkPnMSMAvA3p8awa1ee2nX9aoZeA8x3AUQ1QEEcaBRTzjq26DiEhYW9NYDZN",
  "key4": "1NnXUedeaRsWjoESqGYmAfgNmKYYMf4Q5VFEbyDFG2bxL6ap66iND4AvvMciCNBgztydpbKQqjdg1dk3Vbau7xV",
  "key5": "TUGukyWYP21Be158C6vvvgYZ2pMJveHdd8HAbcgR8M9HjsGKCN5K2WSMGa7BdGSPdDHkLXvEt2kZX66kyFv7X4W",
  "key6": "2uToJFk3F5GH262M6Gx4qEK1XwKaXyA8e8gbxXCdL4s89yRGXUUnS44QVt5qNa81F7cKHBEKXPTVAUMvPkoEfNoi",
  "key7": "cqi8691PMvw3njkMFCT7dyecUzJuiZpj5F4KdEicYo1FKaxcKF46KHEAJ4VzMVJ3z7ffJDxKo4bPXbeJJxcjDsY",
  "key8": "2hscitmEBB2qeb8rYFCFWzbRyFBy5hPKVnUYBwAtB4GV81zTAop9WRVsoohcRsWAWE3wMnJCCzmeSdoR5bWj29XZ",
  "key9": "4nybgsE3xyZ6j29u6LT5Uk88AaZrke5LgjKXdRGG5BW12e7vEPHyzpJTN9cqV2H6dSZmSEUm2YTCgNzEeQhYsKs7",
  "key10": "3EBn9QVWeb6ab4E4bepeEvU55jxNtLC3DZfxL9zi3QbNkqGmnn4G3SSoSRhc3xvy2EwXYk5ANxJwPyA7BfudK6gL",
  "key11": "4rsBzCrup1JbB2jmP24pj3PEEx9emt5obmTnDkngt1Gfg5ULJxxeeV37HYrGyi43Zx6vezM2pSVTP6ntQx64kPTj",
  "key12": "VX8xWuEc9JdmcA8hzfPwPwmc8usJH5DuESvKc9RBuTWJNb3KWxCd2CaCHaYGAxKwbKCqXLQexgk4DiMwZRj7gnq",
  "key13": "2CvMKNTMekHaZDBprU7T35SfXwgQk2afUM5fBR8W68WnQsCCo2b8BvHR5B7bKoH3d647RZszSD2ZqrNTsT7Rsdww",
  "key14": "65nRCAcd73cVLJR4UazEvNKnWoTA1v3Z2E2oGfHxfZBq9tEkr7pti6JgdEtEY5yN3xMGzBri6DnHHEYeG2GyCigZ",
  "key15": "5UAUPwsmbtqogD1Ks6mSepeXHQb6UzDHKcfCZZib1qNEnfrvdVC34XZvavGMRpRuzoAtgrtUoHwbL44vQeq4SEE3",
  "key16": "4iYgAnAzVyhEGEtXgEQUSohWtjiK4s8PM5GYrtUdFvmjN1EGKS9fQDcgw7KJA7QdvpxRUfLAp3Pi9k5qCNPpqq4Y",
  "key17": "2pmSTvYpwz1iUq1JhNxv4w63aLRKpAFNfQKxM8srgdM6CpdXkwzKWUv2kFFh8rJLNxjAszftgLS6dWf4vzxeCpYN",
  "key18": "5oBJjkoy94CHMgze9VM1PeTeKYzPM1WQiNUWafYmwQwdcKyy7a7xMhHzxdLFBSeUwR3vvrVSkqzzVBQnaRZSSsRM",
  "key19": "5dudEUmrdUZPDrsRbCpnwg9ivJ8YwUPk5KdYA98pSJManeL6jS7JHBnM2X4Zae33vPDLHqN9qXQifU4jKa35igZB",
  "key20": "32M2gG2maDXcj3e7eb8BtPtemLBC2LvqLkZSGuhrRQpKsdccXrTuAUvdtWJad1nHC7xW1ZhNs67T7HFt74aX67rd",
  "key21": "4aQjqJjvzAmguqZp8Cj5CSim91bxNzDDqxCpDgmYb9w1JdpaYYQbZAYjigntW4EURp3WsXjqjcoyujzZQsTJDT7t",
  "key22": "5QCLsNYsqmrqLm5wqFtXPJaRv7rJ4RQUX9YWCjChZGvWrsAzRS4yqmEMtPrhW9ohjtbT5xt8sipmSW9JsqpPp8mX",
  "key23": "5K2Jh3ex1vtpNW95nPgxJHvPPPtiEVPK5SXXwfCVM1sccTjDdfHixXy4CoSH4dLW1KqjxAYHAgKNt6tb2TpdFHhW",
  "key24": "hTGDjTccYdvnh3Fgjb45qyUBwdD2mrZRMMzMtTnMAMKokZWX6ciVxuRUgjFxkY7P7xwtrU6mQnXZ1G8wFNKu31t",
  "key25": "3iJpm7rsuRLEhca5BW5PPu6QDhXQM4BXcFPzcKrTQYjHa49V1LkShoQNxRMs1T8n9J9h82sHf3d2p3XNfiDXrRwi",
  "key26": "5EJTkNvMx72gLqKtWAZNba3bFNrf3vz1SePMTHrnogscqWyqHLhBPNLEhR4gc1FrNFgcYBbVK4dFJ5zKR64adHgz",
  "key27": "57tPuBBYdQMXj2RzQXr1rsqfy33jHr5ZxCH9novmyFfJnvo7wmEJr5HgaNoYAx2y7tHQWKTbRCdECAPLcwgHvgG9",
  "key28": "4bkhohxZ7q5Jg2y4rxNr3R8SdRosGFGrKNt8vB5c4JYQiegH22Wyw2mxF5KtuZEvL5oAyuJLaPmFAwKq7AWW1ERE",
  "key29": "7vu3cHSKTJpEH8eoDAmWHWNkzJiriS1Wemec1vMMjwtzNbxEkikdC1cLzPbMSxAV8cG7Cu9cvWFEaZsTDN436Ki",
  "key30": "3uFidMdqTmw6Va9c1nuoGCeRdG5d2DmQtdeJzV6BRs5UDTupt9S7GzwKxfwLSFkekEGbg3H1gyxGm24BjRfs7hB3",
  "key31": "nL2Q6mdc12z6DKpAmLFhwC7W8TRzbYZqasqyXD7XMHyCBxFnvpcXbhq3Uv6YNo4kDBimMk4N1GgymTKg6Dxssyy",
  "key32": "5p28LNSaRBZtqSy8rBgZ3tpa2tH3vGMDu4sdArLiLLYgc2oU1hpWNiLuMdbmSY36JZJ5ae8Kr6YZxqrtf9ELp5iA",
  "key33": "5dkhEUeCbf5fxFGxxCfdY9d1yZ2Lx9m8872pRLergKui5aGxrMK21m1rfca385NrQbcqW5aNbyYJR5CxEiGD8iEY",
  "key34": "2fRiMatQYqLBboBkVbag2YDzm7TreX5M45gopjLftkmJTFifnwNRjiYAjkVwRQuDkUDMyymttyBqcna71rGQ8dZ1",
  "key35": "8xxtE7HJgZ3WFcfaX1QCigUUrSYn3Ver5ma6pySgo7VNXjeBmtHTPtphF7UBBNh3HZotzfvJmN1ZnGboC2oL5Je",
  "key36": "2jbGYC1cAUgJicehpPyXZa5YiFAVenfcqA8UE13JrJgWTqEuV5PH5HLqUEcSSTpHhNjhqtg2rzAbKsoQva3knVCf",
  "key37": "4hXsDHRWAx5xoNJi5oXu6pRjjKz1oW7PRtieyYuyHmpc8jp2PkqfEGa6z3ApHKuijxgrftkpX5LJksdpD66cP6yF",
  "key38": "5BP1hEW15czZMoUoY8H8yN8GyYMxpkZL4iNTeuHYiKjjS6KuYTpVmwHi977FdR8pckwTe79YM9q7fxeJDjYXPrx4",
  "key39": "2Wi5UwdoGzCKV37uL9icXFeHPVnH7fsbazJSu6DeEdjLstv5enjNMKYp8LhYKiYCHLHSZMw4oinWv7fqHmHxHd6Z",
  "key40": "2Hbw5FcVXDLYyhEAF68A2KbsB9mNxNjB76ohTLayWM7s3WuDyFoRq3mdd8eLtqsBbDpUjiXsbZgtQzdBFGRjvcF5",
  "key41": "2Gx2sHiRKpiJTY3LWjBiJkeqSaXRm5znrdBvAfgFdNyVGx5ZN4wokCTQ4wpvPxa5vv6oDRac1w5EgPhUFvVfWAkC",
  "key42": "2KrUmK3PqZoDER3WjioDdNGGE94Ykgn2Lh1Rp2c8n72xPNvPaQ4bTNyRRp7QFed9Jrj7DDAwzApRmFM8TEHSpnDY",
  "key43": "5iNjBPyy2kg2GUFrCo4nVpYycmTxbcdiQH4rPN81gWnYJy2jTou4aJqvKwwcckKaqmAcmQWw3uKFGyUX6uREj1RE",
  "key44": "2vR8t4kmh6FYnUbNWb6DGjhV1rAfZk6CPocdYRspaRFeYNy7FMaQLc1PD4Px5C4B41moupLxvNXsVF2mShoMDEWh",
  "key45": "6yNW464tKJKMqFTQZVmqvCgxkY5WxS6YBpTo6DsDpKAKiVQLiPjepBahPYQtJUY7aVK4Tcyw3nVJRacWBeduS1C"
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
