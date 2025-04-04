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
    "3KnKRKPTAnMLU4KG34pRDbMZ1j4GYWPub8YDvdp8NA1ihtsrVjbE2KqQ2o4PkqhBoHkE5UXeJw6VUxbvK4mDfAUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bUcKtHpdFrytrKcDorr1xRkXayYSdiuFFDz1CPBAXjCbHVsRWvXgeqdR1Zk2Fsa7LwmDHjFAd7wwPxFXJbNK52J",
  "key1": "z5Smc2y7fWruSvd9LxKe5XT7fs3C8Yz5yYJB2517vNZP4kvZffrbzfNMcCzq7BozoTbSS9VRhHhLUXk5Y4wwPuY",
  "key2": "5YcbQMgxz1F4sToNmiTjzazT5Qw4JXdGvMeLF5kA7dTrQJrmJW6FtatJoMju5m6qJzhS1sZkbMuX4VHPdy24rfto",
  "key3": "5iBTaNbRki7agFcwEAfNxRehh85asXzFoeev9Br8rpDkHodWKkEDNmcd5G1GViQ5D5xsgQN7Lp3uZuB7LhTMEfMt",
  "key4": "4gXcXR6FCq1eDwnU57Rum8aPGfV2RgozkkvsZDHoUucngYxWiBLAN86JTw1a5nRxWm2WvsYMXyvizmHxj2TwD1we",
  "key5": "RB8gdhHZ4bmzZm7RD26nR5qZQ6dZXvtKrGiKusza1qGfTru4ubJYHeMXvGS5Xq1StbfijPZmKTCLqyRMwBZpWg4",
  "key6": "4t9snzyw9TbezocwM9WmcWLpwRHnb283JVGoH7UbrD14oStBUgpm2XYXGixTohdkT82tsyU8GRHJTqENWZjfyRTQ",
  "key7": "4sad7arCc7xHSjS1FRMMeTk9ry2hwV4TxzbczUGVwYLEhnMfmLP98RWvUMhLjZorDmNjv2sztjwVFZDn5ZEuduHy",
  "key8": "3TNhmhHhbtZPEdaTLubmfVXRGvkHnQGu4FQgBRe4ZQMvY56s6ikvsFrftSSuD1djuMPxjYMeRq8WyEoYZL5r9BtA",
  "key9": "3G4oSmsbfrqtLhjxbQgRV611Xf4EZtyhorcVNfGTAeTS5XxDL3NWT9pKUzqNW3KDzQ4nE6BwJgJ32ujLT9zkQnrt",
  "key10": "2W43jGP5PsXacRvNY2vAoxGV8GBt1YJ8RW62fca75BY1zjqySAgAKi6VaZTYWkDvjdRX9BvsP7d4LkdU2qvgpwMR",
  "key11": "44Q2rQYN4L1mF3chvQsmM5MngAkEU8QHBr4gT6AuS3Nbm5CBTLoXjKv3jTaqHT9mAkv4TbZcnZwLizmxPbBb5RTg",
  "key12": "5tSCWUKi5HmnvuTdjmcKDq6XAfxfMTHGZbcmmvaknXJ6KiRCqTfTQv5CKrAQ4PhMQ3ErPbSK2zBkp16yG1aifKHS",
  "key13": "5p9vjmB5SJ1J3qNvy61xLK4cKN8K73wsu4Xbxep7CiA36QvTMAn7YJKTycwZiQEy5gkwWxEauz3HT2DvNaKbCbCP",
  "key14": "4ewBJZDc6zfJk5qG8iMSBHeHhF2pwiwbD7Wmsyv1GWRwe3ZSXVZZzJHx6nBSzUP8zGdtk7NPyRQ2ev4i5T7J9nMS",
  "key15": "4YkZNeCDM9T1MTjgSukMWUxFbWEjESoHpMzsnyYQL7TBNEMRye3HvWdPer4eFr8oZc119pxp1BGmzcWKDkr8KmoC",
  "key16": "48yKXfAAzpfkpmhHNStpHsrePsFztiDSeoKuhrsQtfk9hjWYibM1YyKL3YjahLw7WYoNGNKeLmH9WPM6MpmSniCi",
  "key17": "44mu89jWWvW5PB5FAF5oqmpZSKKiSh9a431T7APesfs4YokyBVQW2BvyKLmXf3duHpXfKqWL22p3BNcB4zbEcpG4",
  "key18": "2mGsbW283y5qP1LTGCovXe7HBFDG9zWRmjhgd2HoVDsU63Rcth9o28NycuwMCueT5imrDCn75tMnqcrf9X3rrn2x",
  "key19": "3bMaSgxxTngeejPTCGLcAXMgv6NBe2VimbVo1hAnm22rC2M1zudMoT8BMuvLRo22F96hA85c4HuVS7gB6y4eEXAA",
  "key20": "5mAaP8GddHi8TKvFurmYJyMDU1ZbsAJZRynsrQyC5vi8YmjGiyoL88xZe9e4hKKdwUFKn7jYSdmpsAnedB7rqn2X",
  "key21": "5yhwigX2YfJn83oNKdo2EhDWGDGSEedG8atwMNRjVodXTvRDbx9jHhvQqs9kbsxDtGv5rk5thANdLgTMZ1xP5kjR",
  "key22": "42MR9YBDEGRsL3oaxYekt86CyoKjvtRXvFV2jvLScBafCmwZ7yk94prr27pqFmDG7WFHwFiZLTi9taQ9a3Zvbfi5",
  "key23": "5UKbWjqn7WKRvg3m91dT7LTTsCdU2bczDfKFqSNXorsjnagie2NgZQovf36JX44DsUEBduqSDCZdRgYMXhcR2SoY",
  "key24": "2GKN78e8eSH2ez6vCHkZu4nZZZfY1UjYLVTz1G8jaA1CqYbqhMbhcuDwZdCJjTg3h8TenQpg1dFip5VP8WE6GcsX",
  "key25": "66xar9ADnWpbbrp8XyprdSKoEjWKKeZKHb3J4CCCpp1pw82Hpa1oJ6rgMLN6wFwAdnrAeLLRb8DkMNb6peoWaEjz",
  "key26": "61Y5dfeGwN7qhWgNBxdCbAaKPDwyqwLihUTRhxPhkVawttqAnw15FbtLJuWv5PncZivK41H4LLt4AkHiFNQpmppi",
  "key27": "3S9FGDcWGGRK6ExYKVgDhsEUcJZcrvv69bE1nkemjmmncq55Pw7yLJBJ7fHaz9kUBa7N7JoS7ZLUj9jEfECyCUw1",
  "key28": "pSrA3UXfGiaWTzAcBZnn9jamjZEAdiYbtbPDj5M7NoBr4saXFDmJJ7uEQ6jMY8nUNTvfEcQMSiQZvxyrMfRtBto",
  "key29": "4ynkfccoPALXHYoW4dUpH5Cz9ngXc4mC4AaefZ44j2QgQJe1FEbnkG6R5pJP3Jcex62TTEDeyvtBPwEgsRSh7L6x",
  "key30": "2THvEkiCvPtmPcv19YvWi5fYhFYAjAjoLcGfLHqymodbFzqysVPz9gsYoWpxzJzpAsg1vRCdbgKi21TEiTzjBhAP",
  "key31": "4pAe3HW5ZwgCgTubGBkxHx5RMN58QphRiUiMiP9SF5yn1dkQoHhE5uCccmKSkGEQPxqSgYcH8Gqbc2RisdzVcWkz",
  "key32": "4PpWWP5zfYzKCWU3c7HjvKLQaZuoqHLpJWDVX9J4tYMayGkcM8SjjeYv5WC7T2m4LHRquziJ6F4RYci8HmEVq2kB",
  "key33": "67bisKUT7PFxki89xCjKpdp9Bf2oSr3ooB2ZXP2KrdTsn6DURNKXRRhXjTkr4cBhYxW5mnwxTP66Y8HCHvViHqHV",
  "key34": "4mFBzCJyAeyhHNVbpbm49BzqNSyxUR8xYA3kCkA1LVdcXCRgvJuXQUh6trz8pa9jwP4E6cmacXrZZBBgFG6bdiVh",
  "key35": "3WqmbWJxmWHWowSzTNMVCRqzoAijCpgFuLFrvFdmPqqy1rAMiS7YWUnGyHN1wXfKBVGv8dhim86QbC1d9q2w79zx",
  "key36": "3bn3bvj2wXXCYmwhBV6opsZwdfcCzcGvEveKG3eCcu1xaGAqbSPknyC7f3DhxxHD6mot8yn4cafDg3yhsrE6KzAy",
  "key37": "4Bo1zNowGZ3CMa1tYbz5qm5pDsYbmQqenJ9QcJtdbZEXrufnwB888Ht81qj6N96M4ckBjo19gwUjZsA8hJEwKYKn",
  "key38": "zhATjGX51bib2ryxW2VhnHvKnYgt53zyfsRE9MJKmmwjM5EpsPWM7GvnULsMaabpy62qP2NkE2skYtjGH7ffN2n",
  "key39": "4zZmB2nEG3s6pUeJHkd7UdtThJJV7Q9AsyrajBzGLtuMmoU1swDYgti2Dt6HHEHX3tLNTp5JBoKdshUmt1EpNc7G",
  "key40": "2DnM83KJjmzCFH1j4htj4kEx2BCmPjrFTyNw51eqpYxjiXMB3Kovces8mAnGC7m47mZqFCKXa2gd8UaDV5PBJyRV",
  "key41": "5KuYGdRgSJhU8nsbTyijycXr5cD4LogS9G4DpPwJPqbNSrynrWztYjQgpSdVPTPHi7q16ZxLjDSdnQsDd6mXGwn2",
  "key42": "Px2ZGrWfaExyzKCvRoN7QZayCKnyuNLvJ62kgRwYTDivQASPC8y8pdSjCska2VZWMGBXVRCe9qLXGzQQMH1ipbL",
  "key43": "2bvdVZ5aoumZcwufyr5YeACJr1Sjk2hcxJDD5S4wKW3qrdKNGsitP5qA8xWUEvDN8Eg4BdFpHe1zq1CGBshG7Ngn",
  "key44": "5MTc5yJyDfCHQ53orVRSWNgSoRvZg1NoFP6oEuLJTxmoAfrwnJiuNbUvA3pJTtTYcGPcMkyDGFRMmHJvjA5fYvrY",
  "key45": "4TybNDdmLCzyyF9CATDNhBxxZHVNPztN4jw1aC6vZBRzJi7xjSUrQyUdrjktWRdNHEsDfxjSUTC6UGWU1C86XrWH",
  "key46": "3cJezEpbXbuAJmGUH6QfiAf7y5qPUMdgE5DcJpr2tQM2KYkncKv4TyDgBWyFQXWwc8xFxZqUxv6Se5UK1H2i7EZt",
  "key47": "TvS99wCGfLvKXC1AD6Hr3Jixtx8ffoStNzzVrs9xM4SaZ5DAxnRNgQT51hM3nwjgtzrzehSdWztT4ytv6W8XT59",
  "key48": "5Pt28KrUQyaQnxYed5Me1MDzWP3k5AQMinm2iHk5Df6ecAqtDz1TPStgihC2vT5XgMwW1YXi1yj5AjybM5N34Vnt"
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
