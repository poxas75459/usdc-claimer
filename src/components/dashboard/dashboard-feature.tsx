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
    "gxJgxf2b7274tfo2UgKZwhitfeDALcudQF2Qxc4Gns8mKTL5hWqnfKqzPTGLbsRkpdFkvkyc1t3m76PeeAtCYTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJTLRc8TPfzYoCoPB2pgJTMkJV62h8uZnTqSCuUg3kixnCKN6HyPvir3WV9KgGF8VV3bu3ZH8PhnNo9Nt2ht3jD",
  "key1": "uNVjzVZMiMP4Qc3zkNDQdMftsTzkxaVAnwuW16iTarkKT4sDQkFcdzDPzmzHNqYTZGYoKMxuRtVRt8m8abdMEHq",
  "key2": "3FT3CbJJwzcsUBt4fHouf8bFx9hpAZ8e744JycXb188vS3nGTKNCXQhth4zRB9uTCY9hSnhnUeQ8CjUFkoBzucxL",
  "key3": "4nzfur5a79U4jXARRaadzt7gg9SBkj9pDwRBGgoNFgG1EuNBvfTDph94n8cgJRwXUkQxFawuNiydgfUYAFkCgfmA",
  "key4": "29BDw4u4H5KSpNhDoFwSZdjeJqrbP6EzJ31YbnVxH5Da4wXMFgsyt4gHQQjP4GtqbCGHFiZZcW45k9iGePj5PSBp",
  "key5": "44jWvUossZwHzeRHiiDji1YGUQnEhdErRZhKU62ydLKH8v9bn2tHYcmqWQPeUfX6Nu1Ay8viVQujAamwWveyVwws",
  "key6": "47UByWNdyJ1K5fW8Hf9LwfjK9hHJR1P411TQxUkEFHQobpkLpvuFhkcrRvQSzBJnkB75BJJphnWcQRZcJskR8o1f",
  "key7": "5dUJzGNoedEhXmzZLC4Js2gAc4NUBu4AYcdeuZbq6EihHReHw1KoK9b75zie75bQKLQogmUnZ6324LkJ5KBjZKcH",
  "key8": "4mus6FbGzG1ARRAT5tWDufU4r495f9mi2yokBKWrmbNBA2mzKkobVKodfDMYaMM1WgPWr5GwyC4dqHdcmakghP8F",
  "key9": "5ArvDNzY7UsjMaGxs4Hib2yiDu5zvdmFqTp1pDfHqUjgWZpCq41t8k45SJPPpokF1S5hPgmR5SFhT5f8UAFWgH5c",
  "key10": "3mwAWu82ySDXsuXs4fdewoer56WQzpQZXMPNu2cyn524PFLWAoVAxyhevX1L3PoLR3M9xFyeMjBUgTLfKva55GHf",
  "key11": "321XvSHuGr1GcFZTErfu7hgDa7xzhho397kTLp7auhbWkXPYcRkw1BjuAdKpUm537uVg4K3JmWua3fZTWik75L3L",
  "key12": "2nHZq1rQ6jMUfydDx5ZB3xDtWMkr4inW3K6yQQ6aEAgLqQyrmmE8Gt7a5eNspWMG9Hmzp1doMwHQ9SqUjkhnVbuq",
  "key13": "84H34GP2gFmGkNqFrXoBQjGJTUSdRRQ1RABsn67LpQsbYeGQBJQR4gCU7SGe1FpHkvpmy1b8UH1ntkjDBxasnfG",
  "key14": "52nhQxF93vhsspR1qpwxvotFU5dtCHMhcw4DqyVaeLRbFKsRKxp7REFbnwNt35EXhadxaffr9b4Kd3fLx2x8m1fR",
  "key15": "3q2mpkwEBWwwwFYKMr3KWuiE4uwwRKUFQq3HKFFetmFhDaFapzVEhVMDoDJij46LkwLHHKfbLJNGzeKm2zxMyrY2",
  "key16": "4Jac4QxcDczb3z1zRrRCAQr2WeNRHW2Nc6LFTBiodR5wuzHzW2X6UYgZ3qpWEveGEkWsuEDZ8gcDvnvaWGR4ZAVN",
  "key17": "LT8dmMNaMf3eTyP2GkLMQFM3rt6V6R8peob5Dq6HpmWCqaASDNN15KeeHSFvEKp85ckrGimogw4SZWhSGQHPtNK",
  "key18": "4tg8CJXBMFnJ6XwEqwfZQ8APyRoZoskG5eHeWt8E9pnJKMMKxoQfVd6ngkqRp3f5HkPHyMyFhgkQ76Vf2cqFc4m1",
  "key19": "4GxJsMiSQUkeg9ae73w5SvoqyyMzoWV4F8NA1Y8iVc4U7E54iQ8YQiRNpZx6gwVndRTn3ynoffD2qTx7LTAYgwqe",
  "key20": "5dP6EvwAd32WZ8W883knFgkXSyMT2c5n58cGrQmpyKht3aZpL2JCP7TVUAvhc3TMAR9S8Z7xpnN5kHHkee9k2BkL",
  "key21": "5tAb49zFdpjY5SNW9AbcNeTzdGzSyBf42sunVVGZQVHS1WQA9Wbo1AK6qYdj81H8w9rxjLDKEALqqNco2H21Jv8a",
  "key22": "32FUeREC18FPghoz6ryhejZqjNu9ViHn1iuXe2xV6FT5HshhTx9EXSkby13iDew6SiUa7McxAUmpos6wsku7w3Te",
  "key23": "5gLBdVgdtsTmCeneXymVTDKVKzVpR8GtRZ9SuoYHoa29EYGa7J4xRjqttF7emCcGJogqx1t4FW5JJkH5mjcoBste",
  "key24": "ALtKnfSvs1yHh9hcGE8SXBhAnFTcxvQCRfbn56WsWUgiVDDNDQg5SSv2U3rmGfagkNgCqCnAsvBQFwbup5LKr9o",
  "key25": "3HY4J3QWw2t4qXDp6bysw5neSbGWykbGh6YsRptgvqAyMMWGmkrpxB3EtPJmwia7eDSgPsjdL1mVNyKWpRKCTAxV",
  "key26": "4R9GtrVyrKrKqjGCSYuftpMpFZF37GsQQax5kejzZq55nSvjqU6BvyAvwSnvsTEvpViwfguz4wmMXLRdVgfnNujm",
  "key27": "3ic5AtsiVEf9xcrzvZZQyFPoeJZK9ru2UNoTXofxtStPxcBWFikp2LKSaTJLBaDSJcPEzptqN1C3E5Pn7H3Jb7sC",
  "key28": "3otBhrnpVNCU7DBtqhrxHpYj3q4fyMc83ufUg9CvVcy41bpcTNRVk9rt86pGzxAsQBj8Gqh9FxZanpuUzUs6wCDP",
  "key29": "VrbVdaxGGYE8nekPu7jeNmB9KLuML5La3VS186C5RN9TwywwGSAqDkyrtJFTP7W2sADxwD5jEgZMDgS2YF2UMSA",
  "key30": "31LT9aBmMrzK7aB7VPioQ62zinjN9f9XmDAQ2EmxfkVRfpXdX24MTBNEtAb5eypFHLivKWtedbqnS8gYzCZ8n4EV",
  "key31": "4VJm46HQfM4PKGhACjNW3ANwRX1yKqXxYzmbDtUZPMaoeJPoTiPthy9Tg8J5zyNaiQbrHcMpG9PT9yF5LBV2RgLu",
  "key32": "5hJ1g232UqfJMmwWDtuWRRxfyzAYu7UTAUEw31YzFcHjGhMb5nJ1NXNLBsWaHTVHUhN9ybq8y4gN2vgCREg7pQNp",
  "key33": "38ZaFtgEWrmEyWwkVQws1Vg5X9ovDAbY1vWA3Bg64Co1YMYCGeggwDEbDN5WPeBw6mBxk5KYXsaHgfufkY6uadu7",
  "key34": "aTbRgdr6dZEhjK4XeCidjEUuZ2ybouVaTQ9G67xn2FKtiNjaEYtSHqfukg393MBD8uiTjCRzzSdWPS774uqq8ct",
  "key35": "h7oNhSAyomR8DUzB41gwu9w8wqcuiC1KtHZGM3EdD2g9jcBsVJab9uz7Lj2zxHUsShbcrDY99bDppgKfjCVNBwA",
  "key36": "4mHFLDcytpHfQHrYsNWnLiFfCXmto7yKYKbxMkB4qQjSv34bTpNB3TkW6Qb8DB81tKmyFiHGK2YsT3Ut8uADqEuh",
  "key37": "2FXr3eGYZvfQLEotaf1Mgkp3La5Q4saHHqpQDvpdkxvuMmMLN1hmsHnd9ReVFm5NHjoAQsvVYzY5kuvvC6tmzDGq",
  "key38": "62QFwfWoCcGXRcduDnY8iwyWVXp6N4tcFg8hwkHYxZA8CKmUKfvbYUZhZ8fPRseEBsXACH5wH47KPWScE7u5QdvU",
  "key39": "2dFqhML8fo3YY9Q6UW2NpAVUrVckk5rbLnEMnLKqCBTvuLesmVm14A2ZA2xmSNYZV8L6ehGPekVmrSNpnuyXHiWd",
  "key40": "2M7sBJ8TVVuzH8s5rTsiJxkEZQ4DqsucXLE87mXXNHPGiDgfUvJcWwTUStwojgoPY6owDjuwQ8ekTk46WVC5fCEt",
  "key41": "3T8MNG8EUr5R76JXfRk2nY3bTVessnsGwec2U3VgrugNiBAap4MdxqoHdswGWzcTuQfn2sMn4Q5gTjbisXD85a7r",
  "key42": "4J4nGc4hMsuN4KoUyeB3biGgPw55vyuC2pAYLBwsM5QUKDtD5utxrtzzcdVE3wCuk42zV2VN33paRxvbz5WhSoDE",
  "key43": "4T1HdzHPLzKtKvWtvHTU7Qb8bXmKKK5eKtgyYTyTFBucrvA5wtREDKaYRLBJ7fiB9ko7r41dAR54DnDmcmgF4ucE",
  "key44": "2iGTQRjA16Ri5m7VgiGB1TVM2iN8CppJ1EVDwPLKGLA18FZ5xHtKqFV35djEQZhRR6w52PUXJ95jaZ7BfxuqRuME"
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
