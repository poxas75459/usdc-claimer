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
    "4GmrtWyxjsNRcFRspemzT7jkuvfJoHEq1LyDyFwszvUt3MvchjHXB2DkUVycAzuckTmkUkT6B58LZtUJtmL41CP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQe7xj1GC8yAgHivbAZsTZnzq6WDLEeR4tXMXdm8yLbPgDniWsZ8QH7jaAwVbTXQUhmTbQfQCVhT23uav16ETB3",
  "key1": "54XxLetffJMqAuAGy5McMR96RAsvLxpSvDdeRyGrAoTUQYEE5hkTMQAGRmYyag6ibSseMvNDtDrikXvQBdsUCejK",
  "key2": "im3LMp7Vw7Esp1nHj1pLNoUQt5wH6sQKthdeeLsxxcbdihBLj3ZwjqTYDvS1ogBtnN3v53rYoUkeFCB3sEFbKE7",
  "key3": "3wHtYqav3TJYPDmfenXGfVPvhWdQSmwi6iouBFSxrSMXF9Fhy427QDsxYcwbyrkgCbwE57K9YUYfAWASygbwXwrg",
  "key4": "2DBadGTD5R3sxRjbNmYTrahGCnzNSp394CpFuN2ELH1wStBF9k9HFqoAcWfucVmYX9J9YCErudp9BQxaG8Tg2STv",
  "key5": "3t9wfjvGMTHQBSeLVKqRbdcpEiRCobBETz9fus4AUjGCkLZRaTevF2neaa2uZGkD9tervgiqgBaXwnNFKiFYS7C8",
  "key6": "3KecsNgxz5zXrhh3JBatwwfRkks4yWSNS8kMtjYDU6a9YXVf6dpjP2L8KTUjYBnrEoZgWLcinZHbnkSP4qqY9fiF",
  "key7": "317aWM8yae1Wges6E7fSvSqfsvzPM9MTGZ3shBHPSmD77Ku9xWb4qNosM7jU1EjHaMb3ptwi7vNaD1d9vJNcLHDt",
  "key8": "2xKuCsnttCNkJ5zYRF3LSTqhRmts145bz7QqG3dUzHWBgnRr8tUHSTGuAy3mZ1vU2opTfdfmYBu6nEf473BjWQt1",
  "key9": "5f7k6zYHuq2gcNSowEmAAjL5rKQHunyu8tiMJhJSMFuvDi2i3KnTRMxRVSoKtdVcZbjQAVx6j5wDVNSmgJEn9rGz",
  "key10": "5ns5KPNdk7ADCiL4domuaFkYMoBkyLhgHXfzMiQuX5TNYytY9HKeQoARa9BKWo5qRtJQwPVnGT4heABezqPaLWWY",
  "key11": "32Y4hRVPY2vJ6YYJMagkB9VdfQN2tPpPyBynXmkKfWdjvBVpQjZ6ruzYDqsspHVB66EerYnBz76CEjutHc9ikpDm",
  "key12": "664cGFqqbFp7KZGaU1CGDysyhZ2rCYFoi5XYy6F5H8s6Jwiozk4z1SipinAKcCuaBje3bSJijGC7d6WLLsfUFMv4",
  "key13": "5MdimqKevBfZ74R6J4hPxgHZfiTkRxptPsC4GSEePXdFCyCQBT1yagmmwzu6q4mx49j5kgTxD11iPvMdJDYA26zY",
  "key14": "2rc5zNTjaKaggJ7HbM93qbAiWZiYJ8QBvY7gQhAs2KQHtUQyVRd1ZkvNwJPLxKmg4j3TPpja12VZEVxae4sNaWeJ",
  "key15": "2mebUa93cLWaw2sUjaxkssXv7GjGEi3xzGSk1hgQtWZEHENFSe1S68JXVvNfvydg5PnFN4JvD5yRd5RsrkemVQQB",
  "key16": "2SiFMYU6PEhouefUi7HgPR2ZD8bMTpty3vr8XfTyuH3RL3ABVq5xs2buren2ppomoaNRAXm9RyWxkpdq9uHrAZxY",
  "key17": "45xweoJA169scFxPsbVykEE1zzjRsAn86p8gt8wAPLeJ6WqVNGoAzvqAE5KQ9H6GWnXunmdnZpbKtrb3W8UZgK17",
  "key18": "GoBb4AuHvzqrtLzg8ZttKrhFrDeZ7KWk4x5Bskvei4hER7CZGzQvtsCMH4zzVNJn9ZYY9fDCTyvY8taf9TUsgYd",
  "key19": "3q4Jjar1xdCWZHoVvGVJNyS7xeXgNeSv76YUiUY7i4okTgBxGhHrzkNxsdw1nvz9p7ohW1jojXRNQN4hNNMoDKeE",
  "key20": "i1PcD7vtAhMPLJXN6UE6CarG1aXhhCDK5RK64QNgXsw46Ps3vSJvU9wty4djh8fW8DcymXxfUZkH7eMLAeRrHxL",
  "key21": "vtbkFbhugJCXLnq3xvMsCMZWDVAtRPYVCeMG1rnwHEwbKzeNYS8XiunTqfqhMFp3aETNDwEPwBQjNPQrMnWBopS",
  "key22": "4iJxRXejV7hZGaM5eLji4EzheQqBfrF6CP8Cr3fA2ot1Q5VPxLgRxDnJD2D878p4HKhUCLLBJMx55wGzJkJhkfxL",
  "key23": "3ZBi9DEbYG416v2cmsXEG6CKxPdvhhcXxx1vQs26wxVYvVnageUEyoL87TibRvDCV234ZdKEcsQBrKabMymDc8UY",
  "key24": "2dbT6a6Qp96suWTVBrZWgj9oKS9H7CcgfHdUW4kpsaL97g6gDcoVgx8DkkGgAGqumJSuHZvGU25ZTWoGwEAki5kL",
  "key25": "42SmnqqhoZonwRSvUkM7dkRmw4jxBtddGhD85WFDuWqmCP66XobQ7HszHya7bPDGQonD8Atj5SunymiR1i2BCWkb",
  "key26": "5LYSocvXGKWqqkXp84kdjt4M5pQxYxh8jqZPwnkcVDetp5ZTz7mho7wM3MxnNekaceCdeqH9EVC9jfUaLpBAMhcE",
  "key27": "2CoVDubksJiWzz9N4HtWcWpoPisEAJqqgmQgRFgD9sFg9j8tWrwVjXQJdyXZPJhLtT9utjVXVSxXDSE8yxrBgk6A"
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
