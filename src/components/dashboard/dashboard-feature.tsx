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
    "4EKRBuSzwQhiVDpqBR8jfXv4FjzBArTnbeSjn3wgnaUkwKc1KWN3JRDt4vPVqrgLUVq32SXGPcvsrbrWpSNi2V1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HumH5fvx2PRFFAD53KupinXRJm8nYGgbNRucS5KBPvjF9Fi5YNShHJwALdxnKNcGhPbs1zycvvRkex8SnnuJkb",
  "key1": "53Bdf7m6whFMXVBL6EdrfFXunytfLqeMuXhoPWTrw3GoDHA2Xyabtwx1t5dPMm1dewxGNmhxmNtZ3oR9Tvm7ZUJ7",
  "key2": "3AkL1v4XhRA1TZWmWmWx9usJBtVdDDdQRXXjPfXcEZe84CpwdhSeSbNfuodZB9SkSqxKXSoGPsfeDVLHK9QcX9TV",
  "key3": "2EHpjdjrD2TAW83uVK8xh9kRGb8PGTF3YirmQvHR36YmaufTsoWrC4etENuQBj36rb7bPzRcZKLHwivBhza8ykHF",
  "key4": "23eyAryrzP4FVV45EYvicWdt1BzKcV9y2TuawZxJ9YnEgXibJtA89qbKtNAqQftMFNcZoVDCXZ9ZWdiw6fKRLqj7",
  "key5": "2Tiw5ExxXUm2cPoz1X5Qah6ePQmeiS3KoXjivkoywKDwLi1p3YPuKpdgCUjHxqiGNBVV3yoeYuYWqbXCRb7wDDxW",
  "key6": "4GbjrCrEKmxkCJuAM2VXPNFbcHxTfM8fYxMm7dZ4yS3rRiNxXwiPATaEVnktChj41ZXMBW826nmysJAxpEVjeiA1",
  "key7": "4M5iXXornpPNcRHdzDYKfobLgWxsBivE6Pwq9xn5Bt2hTanSKMEUy8yoJUTLQjcxDyyoYQHQjS2ydvh3qAHnnqVD",
  "key8": "67MWzvJRvzBro2RzatPPVRJFBi7nVofVEeZSXMC7BrJtBw5y5rwBmdAacc3B7hwCfYxCofrXpAnqN6HKs4Q4UZSS",
  "key9": "3R6Y7rTdKA2w5hB4BukJYtWpkLpXSvYqntE7dqyzUKpS7szpdbXCFPpm8StzahiXCM3WbRbtMwYEX8HTjdZCHqAy",
  "key10": "3duZeddNfC5FVcdhd2VT13azXaWU2GJBDB9D4S37yhBNby4faRpw6VPrpgpwZEptY8aDPFgs6aTV1SLRAkCQZoR",
  "key11": "E6bb3ToY1tVn2RND4VJa7NFMmJ2HTti7t11GwEiMMbbfr76fTA2fr17JLYuaVaTuYQQFhTg1kKSPdRYsSjEd8fq",
  "key12": "2nJmLRPQHKvtcULwVFavrMD3RuDC23QsC7xvUbge9k7E6y3fDEAwSzTMd97tESzv4uyuNJ5hpJfBnnid99gmdRxo",
  "key13": "3eDogpaNgjE461yQzvGHhwKbW9cqsBwCNLM4VsHet6bYmEgF8eueGKeDu8VKTDZRtkbXpoZef6qgTU33JxsXLGjz",
  "key14": "2GZZ1gX6gZL6F8MHpyE3jzTim1fwJdaqSGiDg7fJz31pUsyBqQve8n79tQFdd1oZPp6g6Q1B94zw1bBsNCTurT3R",
  "key15": "3VMhPfNb9u2Ya2U12F9NdwympoARXJ79WJyHEePMQJuoifSt4bfHFMhosF8V7jSpT1wRwmdNvWSM3wbr15JsEkM2",
  "key16": "2GLCzQSZA7g1cXDZwXCXi7faq1NmcHdZATsMtjn3N6bj9ngceMbMuR7nkpEy3UKSQaKeEBj4nQhRMQgMXoRKA6CV",
  "key17": "5iHzSnRNCtoMEkfxWtUEY9yMTeiCf6Unpn9RPyVyNGbrXEyfekAhEp575x8EaG447zi9SvZFEGeVamhUS2TwM49h",
  "key18": "571X1dXw1gpENNLnqjvv4ZDbDPbXnAtpBL8vbRQ9UHpy6Z12ktf8PpqtVjydxRUPwRKBmXi7XneoxcrezmqKZ7ug",
  "key19": "3eFkS24knPDdND5JGtgchsbqD5RJyboSfuVDz53pA4APJDh7c7EGfaFWc1rorQhrMmSLyix8TWscaKSXMyM7YCUa",
  "key20": "3n3dZ6SyzgT5EJhAhV9fiSyS8ZX287h5tfEVUwakuPoVjGGfbQMU5brFbidQkLQ8pghXsZJaCK4mkWKqLPxhKXsf",
  "key21": "34dWnhJAwQoYZqSLDczWFwzVxmZQyrXfBJRwRMCrd7Vz7FfUUk8pH8Qm57eB6vw5qaV2wCDjn7S44Hvqt39Hyb9i",
  "key22": "4Gb4PZX3oH5Y1jejscgsjpQaRCPnP8a8oCr83AqJ33PszaMVbcBkYt9amKMAnEdr7MWLvDKLcnUGxUqExRyNXMVs",
  "key23": "4AAB7DtYg5ar1qf2ttmPKZ33WGWqYQSCgP3pnJJuUgnyPyY3uYdsGum2Tpup7WvhMbfGTVFkFVVYsNEC9sAoqu1r",
  "key24": "4fD5oRYVrvPeDyWNdACWLYaUkQStgdVmeh4sKoUbnS35cQdCsnQdCYaLyaSAMvNEtxmpZTHzMGTJeMvLJTcuRsmZ",
  "key25": "5rSr7VQeQgMArqJPtfcPZnCiWKzMDS1WqdTC62KixyhXRguxUqQgVMhocSQM7QVZC7tverDZrtUqWrQXH5WqSMXr",
  "key26": "5QuPeyVWbvbDMdBQXXG8MM4QheBpQU4tXBbZGoWnVMqCtr9G6ZAarCpGyp2BFzVQBw99Kj6UKBcQZ1HBKfWqYpSb",
  "key27": "283drcyhK2fepMF6bfSLZDw7xrSuAJu1PoUZdQFpWiCtWTtECUiXMcScQ8PiZKErrnhXJ9xWmGNLWNbcMGc5uWUj",
  "key28": "5SWXiiFLzqEcLZG36hsgDjtJ34wQef6U3Nke2vMQKdWpkNenRqXUErKwRZvey3JPS5p2twZbdUC5Di3Vj1svHm7k",
  "key29": "5d4U6R7N3MC6LGrXefMnoT642EF3uHHmtb2yXF2uBwtYJBwF63EhkX7TgaBZfxzWDrH3PM95jiGU3R1DcNnRtatu",
  "key30": "3UggPbeQTewZcTTZbRuzkwwV5ivZWrfWARuweTSMm2HFL2AobAfykymyV3KaprHaydM9aifrua9yz73LX981VxUk",
  "key31": "5Z78MvDV2xiMmHCcugLPtLbtfQLQpwq6uQ524Ykkg9vP23podnR4GxcqP552nPL6ZXQFPzNcgELK7NmG73EK5sAw",
  "key32": "2sMMWAx1ZFoN2xjzncwekeP3ZEH9NQASE47wyK72NrQQtvUS1CQKucKtmSbQnGzs5bEoRTTSb2cBPNB17PPBiWQb",
  "key33": "5tcCtmZqZgCV4sa8UNtrr2wtajUWLZRcsGJapQZHFD1U8sDokjwce8A225RBgF6As5F8thPXkQLcicVqW87hNKRS",
  "key34": "3VvBVbavFkHCDRVj8MDT3v3hXfZDKi5NntKHUREYhAC43yXyxwbke61fi5mQTZkbxCe4JFkMhmoA9z4jd2fR4BF9",
  "key35": "4rsB3UH1vwoncZJya1ySN4hHYSKcLE69SaNoYJK8HduvJz15oXswSfzkUAzktugy4Czq6YdoXBsizQ1TTgThxQnz",
  "key36": "3JL6biCx7j2VPurGcqTDbcXy4YZzFCqcpVrtuzqvQJmjoRQSyVk2exLkd6kPSRCJvNwDmYJqdzYrtfxTNJnbibmU",
  "key37": "5fscbb1GjE71SimKke7pemApv5NMEsWZrw5UgRLias86QToWN4XNTvjTUYvtojQFh6gcmmXWrjWR5i5gHGemCbLM",
  "key38": "ZwPmfBQfjSpuaRfg1ppKNDoj4nTdAEJihPYDwUvLi7PfCmxaLLpdT45yubyoaok2wYAvYx4a47kT6Cmw6gC63sn",
  "key39": "2q5cQTDJtNerPqxDE3zSeZ6xnrkpRec1jA2gmAmobTzqSFUVuEiUja3v7MYisG4n8YpzMquHtAjfXuBYBF9yPBh7",
  "key40": "4yaLjEXo6BB2JzweQ5CiMMjcH26cJsvdV3CuRmXZbQLBhpzM9gxGTd3CrFm5A2TLQvm4EZyr62eVYrHmro1CVHNo",
  "key41": "4rZSvPV9r846TkoKzScadavgsxQC2hw97Sk7ycgYYbFmcXMXY1NpQjLfDmNSuKoqq24RD5rUDvibQ598Z6wCjTQQ",
  "key42": "3r3iYuUZX7Nm8NBWLP1tShFCaekViju6Hfzjk3ct5XrP23MkwHiJj4uMtkh9NixLufdbkiLffTnDWjkRMqcq6qpf",
  "key43": "5zJqTy1uKakmFSZsGqB2zZWpEmCoCB5QjiZMMJFd19XbHaTRJZLrts4TGyFqEx31LNDr6zbRuhKqZR3vD3Y5SjiU",
  "key44": "2AnjGKxCzGmUrU4pE8jBtUE32Q7fNBesqXpNMzLRBLAzKPzP1xcn45vsU92E59eNDwnyXabbrH2Gfa4hSAP7p83h",
  "key45": "39CAX5TptpTKAnLEfYLbc4KeTkWXamjE7CtvEoS38bmNV2BBKtGvEQoDBBduY8o6ZnsUev55nL8uBffXiUskmyTa",
  "key46": "4JSNJk8NYrJhsxYbX2AegKLtqZaUQZhVW7ggbP7GSGjionqt7Z54MW6Gc6fqfVJggJUbRYEuYYFQbMCvXcq1L1s5",
  "key47": "3t2tW3He7LzfYpuNuERGeQL8SggpPkiCmUo9eZpPm3xFFRmyMwa6c9WbwFMr9dxvhj2us6FNrb7WoFYr7NzBxPXh"
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
