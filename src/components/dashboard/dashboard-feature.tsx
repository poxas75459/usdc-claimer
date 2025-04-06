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
    "Gc6LrejabYjSi2sw989WgmnuuYnMiUHNv6qgaGLZqiAXAxFP4pyrnoya2bCGcrt2gRCevtLBdjaJHL6kGc6je4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vFNSkGMuths16LipLk2dCJQzSNpVkCKaskV8tAzz959Ct91ysfHjo1AAADHwMb1bApwVdpeocUEwqwPLmvuYKR",
  "key1": "3Xpf3DSun5PJf14amzJrNfs2ihzRfR5hUvUs7w4Lmea8RCqsJydidmCeWDL4aFT1a9LVd3ZnBpboTRhG9yRedbcf",
  "key2": "1zviYTpAVzkiNgVtcqmdmWUSNVmdNp8jTraUMo8Q4UVYz2tGmhFGaAD8kK4RokA7aiXQAJtuXKayJqC8SPrYcud",
  "key3": "47vGuexUxYx8AqLDcKwAEP5ZsFiRn1c3mr9bkRN2NWmcUm37Mpo8ha7h9XXzzg5XWRDDnKsyCrW922teZAMeG9Gw",
  "key4": "4j4eigs9YEK6N3VCgXkfp4s9JDUygeiGgxycghECnQUXhTZGFckvfhbjqTwA3Gk2s5VaRdtHNS9rFGvum99LW7QM",
  "key5": "5aVo2ub3PEAcfXZMJQBohcbtZSnWzj1qvYj5Jyni82RQgafks2EvVrzWSsortp2eiy1ao7xwZbmfM6PBPcjNXimn",
  "key6": "2PS4bJSAzmGBCu3vSG8rKjWB3d1xNYhHhBJPHhMJV9JVStm3LXCiW17Xg9PFNMig6GYq3NrwJjna2xJ8pEHaC1gV",
  "key7": "53d9u8V3CLbV7VeS47wjEh5Xo2T1KEvgPEujJhtLYBugABdvKGb9jVQgy1uwedGXW9iUzmPxRbYT2zwyLZzoaBwj",
  "key8": "2ju1crimLdwTpeJSXEvXzVYU5q5p1MMpAZTwR6C1vtoS8EvGkESqTdWXVo3aMTsV3rRbSdWMrveVn7bfTbmqW1Yv",
  "key9": "393yy3xuE2QwCFgDy3DfDggjrpzhhFddTP3TiYHVzskVt3NdaFSWeEQjTiTS6SK4ByW3Y5UDGyLBf8QnShqTy5yg",
  "key10": "2DaJt8yEuN7jkR1UWPMop92Bomua624dfFCuXCKzgRNx6TGgtZ4puuYmf6TPPaVmWDJieAXWBGc3g8zCYdxEwQ1G",
  "key11": "22cDdYJx2cTrKGwhiQoKbz8WNHhbxEgk7CeyZNbHarDhDmURhL4QG88QoGFGmR1LKZx8X476oPh7HGdLF7KqRQAo",
  "key12": "3Gtxi6eZvwVSNydJzKpvU7zeXsWyKqH7sph8riEAur4X67HC2n7ojiEEqNd8HB7JFdLfpkjQftYi3975BdH8QdAr",
  "key13": "2gdNMEqJ5LHjeMXeWQL4bRh1QJq9J1njaFA4eApqyeBTsBMMheniG6EPorftMmRrUJYxHuTHdMFLqUkjxDevTKzr",
  "key14": "4Bz5rE4KbAWUCVDEq5afmFpFhthkRv1ZCFWvL5LPErA3pEuvB7Mid7MJNctTkuzjgD6R12ZXRKoQakbqeC4in7bW",
  "key15": "5R1myvVoFxPQzT2o7gZHm6JVTAWrH3DUQH4b6w4YajDcmD7aRFfSfoBzGVnXzPGUJGBMJuepBSzciZa9ZHuEPpz3",
  "key16": "5MSsNX2ju2fry9m4b47xFdSRN4H93KJUrw9V1qSPdpfr3BbDRcbyZxBSo2Hg5YXzTbbFKh2xoSkuviwQ2xuYYh4i",
  "key17": "V2pSuASHnwbKxMhU9UJ9fpFW9wQ3hbNpUXxE4ALFxNX8jvck38rzpNfWwXmkNq9zQAd2Z6rXS1baBD5AD2KwtMK",
  "key18": "2kUAzKVeNBugZzCWVCZKhi6r6wUyQ1oN4AtT7JoE1mQDLx8ytXjjgzrwvL3FJf7T8Bi9UFycxUXaS6QaVfTgPXJs",
  "key19": "2bWFyB2USY7z6gAXpD7aqsRU2r2fbAcLiaKwTTfq56vHsccufW9Wf4H8RnMEVqtkTopqeCE5RwBARFrAuddE2viC",
  "key20": "2KqgjjAqHp1bU4jmwM74Fpqvk4wQ19mgXZkMxwu6AtqeAUkgGKfj6mtbrL9UrPyoZ9xvwa2Q9KfKKbJi2CH4kHU3",
  "key21": "2HKxzPj3Ak9jt47JjByFLcSuvBTobE4WSb7EmHmT22ojfjGH5ts4r2Kv2wZppyhJgiBVR2iJDN1AZVVzztZCu9zV",
  "key22": "KoMrBvjR25Lx7aJ8tqZwhoLNiCVqSqJKGDWFvf5sSCXuhU9DuwLVrm7ZkmUuXGQPfX7pCNhbo3BGNcaCPbe1gp5",
  "key23": "2tThdTxTts3sjv199uwzjteTXkkiVcEWHRSoNQmXJ9Rxy3Pu1Pk4CU7W88CY2b1dXpxbjgLoNYWoVyHoJAppBxb1",
  "key24": "23VNwDKVqAVxMJCV5oUPboH4QQgYzaWVfeYsZDS8EwZ3UB7jYNtmkVsmEQKQSx7LVkb8FQdHhUrjQrtBfUUwqJXC",
  "key25": "3qC3wrYWPdJgXLpTzYkh687CMUrG9mU8ziXULuaRupSaNLmmD7dDMUB7gVakLgx2QRL5tfX7vTgZHQ95mPN9weYJ",
  "key26": "3feF6jX2QCBdrMUpL4XnkuMMJ3PbmMoiJgrVKTyewLFMvFpUDkTXpSnmT6PKXfZtaP7vCoQuzvDUQtcv2addh2k4",
  "key27": "2HPV5P8WFCKzUx1MNUEkLHqch3G6XVxyRh94YwMBAB9wpQ75VWitpfPputYeTi68BvYVLgfYjXN4audgHBvoXY8x",
  "key28": "21TbTda4qbP7zjKiYRSWpo7fzP9BFtTip5Yzh128cTZwb3rb5FHdw4QxtwzZRayvNeS6eb57WxgJrireWmHpnoVw",
  "key29": "jy74H3cJhVSMfioc4VJJu5yQTtRwNVzAChbR6geELgaLRwWhgHkzz2mzZE4VjegiiNpwjTpqHuVXCUJToJxedcN",
  "key30": "2Z4zQxU24TvixzU9br5DbNeydRTvsF9bE3WaDC14vFG93mgVpmNgAyksqyWcPdDi1VYiq9vpw2M5HnsmvtPqePmq",
  "key31": "uSoMk1xm75u3LvELSV968tfD1huddSvJozFmUZCMU7TLyjJvZigwJ11fJoLcJZetzm2xcUMQFrCPKi7qRBLwdpv",
  "key32": "5WAR4L9k9sVopDy63gC6wwfGFbJxFsrmuSfs2wxmMJSHXqfe4oRQ35RVEFNjcfosBgxHk1ATLu4RdGCEcNJWnLV4",
  "key33": "4r963pdQsRKrwRA8BmpwypERAb2c9zDoBxrZ5wtTM5iqMhuH3BFzzYunD1SHvUrgwdwTV7iYUD9ucUcthg2n4zCY",
  "key34": "5UdRT3VWuxR77a2gS1o7zNQnJBuaz715nGDvCtu9yvBqsigjDzjA2Y7F71AVd6w6z5UCCyPcMxZtnDiFHHqT1bkB",
  "key35": "4EbJm2ktV1PV1MN8tkojiRP43o6UVZZxbigbp6DF641APizZNPqzdqAxUVijJM75Hw7WD2u87RmHrmfNkAjfia6x",
  "key36": "t8y79aZjKhFZy2FPUabKkosuYm5SfMGMnU53khMDxqm7jkb8X9CCRAW1gW8U58XnkV3Lh3RRAR6ZLezmckd5uNa",
  "key37": "2GPRSPNQEsb3HSkkQdc8u2Zg97nLALmpLEgwmA2Aa9QwpUGXoMWiXErmHeL3z76MyF4bVxum9HdZsnCW4b5V2frR",
  "key38": "5AdjwfJkR4GsEf82SS7KgRuZXNynPdjFCBHd5Wrjd9RjWuw4kWSCmirZCPdmUHotmt3Vf3YTkbi9L4c6tKCYjb5y",
  "key39": "5h2hjJkmbWFb2oWBUzo5tzkVTS5sTLrin9iWeKyxQcXWFE6Y17oy1KMMpcbPZ7G738N4kNAYW8nfeLGtvoyMYnSG",
  "key40": "4VFmjaGBYodhXWFr3PJ8wxRucfZce7qQwqRw1Z9isZpLAbHaiyJMKJ8p2eCNryTZonBVtrvSpyCjxopPo8n5DmPZ",
  "key41": "2KWkfsYkwmRYe4ST61D5K6BjtkbESmd6MGpsQ4KoVg3DoPMVfcX8q7cnMCJFHopaWxY62uGfSkSiuLDhEHE7WwjB",
  "key42": "3QsDTTFo9TuLAdgBiLS7ffTuMdyA8cCDt1edCSiJYzAnBReM6EVnhKRLN3xZAoSwZaMjkhZPHhTQ6hwscKBd6Ce9",
  "key43": "3RQPqrYXxKC9DeidzVj5iCLECkHcqmXdRDd6kizzw9BBd1heW27sNxLFwzgUkoo3Av7u7yn9qKfdAEsizCptnbnw",
  "key44": "3WBjGY1uXCZFRWm8oKyoL4PWophTvsQLkfkToV6F7QxMmQfLkJk8ZJKZjHDB83fZFB1bg34DCTqkN9Acfyv9d5PH",
  "key45": "66ek8az4EFVhJf2NHZKgpA7WbaoXPGeTtugQUfcPk7o5mLiDo4iFKyjvoqPJkSagHuYYavTLpW2hrfj7TE3JDhG",
  "key46": "22rGaKjoKSZcWDwKL8yWGcLiAFW7naxrEoRK6aYcBie6nLPaXL6tGCBVW572KBe68cGtv8d5SFgmAGHPgsh6nixn",
  "key47": "4uTcVZASNo12YHjBDTj7VJAjXpfpzKK9hukFkt81AmHKubpXURT2eCED2tvAuw5yXjQQdJjovuUU4mmYFTwMRdXT",
  "key48": "4kg1oXefPghR8LS1dxY7LqgdeLxuTfoarwZVKXXv4EndcMrqkohvddbDpTJR6VodgdPLDYU9uudF5drqybJ5PGUC"
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
