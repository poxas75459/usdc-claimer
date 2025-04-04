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
    "5JxQZ1dTcEcRtJ4aV9bDEHzHbt6Ccc6XBHQAWg3BnVSVa6kJW5ZvUkrHHXF9aiTw3Y5g8Lro54v4Qwgjuq36Mpgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46u31cMsAnm8hWFBapHzRfEqxAADZ8FEqmZM5P3MthNHnADtDyLTxkuseHvqn23ANpkwn7r7EhPLtims2KAnY2iS",
  "key1": "5GK9J6mgUhicdXQuatPRbsfqz1gLydxmZiiB3iQv3Ppt3DAS861cYsWN7WvAL2KPzTryavvJQywowkfC4zFmNvqC",
  "key2": "dDNgtopiek3Efa8NAZdHYSTsJQB8TJmWSCwXpFG17LJvFamtTx65mWkpaWwNczjPa7PWJa4WNurJ3txtbNfRbuj",
  "key3": "5nZqsY4rh7acJVRqRpaLnR4S6CLrnXYMSAjic8X6YtEqzLY9QqkGanzdkN55EQbkrzCXZqUbp5YCnAQC13W7E4Vq",
  "key4": "38ainNn4EK1fw3VYXV4jARHuk9vjHnhKuABb15adXZuQJuQDHCwTcbWQJn86DHPHb5bjx8QtEAeRoKozCW7q1CWA",
  "key5": "5gbYWAYdLahMVG5Vj31vykX2yGuKWW5maXBnSC6Z61TAtYNvCxvGdocs5Y6vaitmRvRcHFkU99HpjTwmUrKXK2sH",
  "key6": "58HpoSBpWYP4niBdrfmbZZKvoYsWmWDTCAnmRY18mnBizKyg5z6pynp1xKsgMCqBktEkUkqmD97ReVgrDMsHgutG",
  "key7": "4Htg3wxLNU1Je7qdCSPHd93EdGkf45ZiiovrYi3dWTj45z15GwFwhBeppmLeL48C53W9SCgyc4pysanGnW3VsJvA",
  "key8": "mkY42Zzhd7MVJ9HegKmyuVwqG7Qh5fdST591BFLJpJCmFMsthFNBPv1aLM1J7vHUb2Vgf9zHdCF1jateiBYQN36",
  "key9": "XyGBbw13jGYsAV6EqU7V4BLyyMUgNPKiwtxHYQjedc5LwcoharVTprfgqkAVXYBPDTLJqtM7UGFJ9vRkvuSMdqU",
  "key10": "63PxEz6PQoP6PyexoYBVo2ugrwe1fqcDnH1X9NDFR88vkCpRMrK913raLfod8GAYEHQeBbsWbcwyQLidAD1dRSSQ",
  "key11": "M6N5EK9B7Rt49PhyZC642Kx5BdnpVtafTEK4uzbRJANWPrdawoPGT5nESGFPhGBp6ZaSgEyre69EYTUq6LwSUru",
  "key12": "BSkoRAwWvpbWbR8a5B9mACvjNxU9cWbtMSEqvHqd9cvmdY4m9rxS7phk7P81t77Ct2fXdqEiYKPFdCfVMRGdoby",
  "key13": "3sFLVAkMV88VA3QQ45RWkhoMJHzELQiHF8oa6nCEgUxDaWkmgX2Nyyggk2GbWPRQrrChtjzKE3vnUEGybeKorTKY",
  "key14": "5oTXCeB6PU5Wqf33Gh9WbQEEH1y1CXHu1zY5twG8h7De8mVoG388cF2vffBvv2Btibjf47tMyRGaGNBvnEfHjiKz",
  "key15": "66zesXwLUjvSL2g51pLGXoGi19m9HaDnHYenGGqmj3257HoXbYMyQbueG546wPddgdzd1j8Bm7ao895NaEDbJbDY",
  "key16": "zoWFa3i9xGoKfrSv91gs9nHJWaP1t51fPCTBScUYHFEvWfXofC8tj1gm7HMoh3jXjThtFrzediSsBeftQjXUtp9",
  "key17": "o92WKpuP36CmApWf5nzcUvBFJdsoisEkguCcvwc6LVpx9LfjpCqnb4EtRQHnbubWXWTFg8RASzy7MuhFiSHq2Hc",
  "key18": "4hT3UFVB78UgjzDSC5fmUMf2RMPdEUkMgrDXATkGgDaXZfXnLt2uC4dynCdQ1LWERyRv8T8kFTgJXhXUDP4mYD6j",
  "key19": "3wUYzrWRpJR8N9DVKNTk5f3UPH9jYt52e2Dx1DmYCzpbtiKbczHarshCJAxTbL7qrnVVsA5ZDDjQ5zC2UBoeTfkf",
  "key20": "3VcdxeWsUGRfvbizPTXPdAmg84qS2RFZjuNkKVfuVBRLKJXKMg2LTBhDZSRDooiE4SW8Lag3UyEXsahR6kaudGS2",
  "key21": "5RKDFBFeBNnvV274qp9KeJkvHY1RCqYnoqsK91bJ9bqPhRssBjW4kGcwDqep6DoX3JPSdPnQhJGUxDfaLxqqpLDA",
  "key22": "4hrowRJQQVscJhVrdESzMhJHbxZ3oDFqseSLSnPQjGvjjSZQmXqYR1tNAEH6ofLnSnZKJEZZem3twixiFzSWtQcZ",
  "key23": "3LdLR848s3DfZSitzVDRwNvqjwCFeZo4pjn85bzqYGVuoEJcM3KrduwrQpGpqLxaaBtHWhRtuvwqaCwcZK2Presu",
  "key24": "2CCASPCzCqNBCGdhQdYZgwW2ZXAZLgVejphBCSYuk1rrhGwd6ect5Ecxg3DakCk1YGUPpAMfKzZngChvPf5qHhnZ",
  "key25": "3y4kwjhs5AxDf6PRhmeyZgAoQpnMmayoQHs6PKpsuvhfavPvWawCh7sRNpoDHQeE7nvsZ8PPVPndvaMrGDnTW3h1",
  "key26": "4EkBG7HYXq1i2xiwhfciJjjF2FkzcRkWY2w2yzaEXQfQrPDFuPECRP8ZLN7p3dDp5GbBZiG5PPm3So3pUx8dseFC",
  "key27": "2wWC5aT6Vt4wGoHfcoYqWn5WaJbfmXKzKASGvYNJFkLwXuCcjx3B2sqLPLu6wmMcMgKkwH6V6yvcKKSgLiDXUsr7",
  "key28": "4zeqPuMrepHNNJGEsRxj4LuA3rhxhUBNmgDVTyh1o319bhyspzyzyUrPGgCTXhHyzqnuyyoRR2jxkNfKR4NTmGrk",
  "key29": "3azMXRDpKMME7Hi5iBKsNDoDK3JUWdB7PtL4mwYs8gM9xYvLvArhGkvjaSuQgapeDtgYUcoXuqT9hsNU5tW55wxc",
  "key30": "f3Kcz1NJweZwu7QLycuXdVVVBSGmkifCQRK3V95ACjVexA8KZBX95MNNvKASp8pxxuheHVUecf1SEsT9znUtDUC",
  "key31": "2Sezf55PJVNv7fhnm3ULvs2z6vvbJ6YtJTEZMvXSpDhDzK4LEWxLNgz4NYTmYpiZTa55tqgPHin7gGY9qiQqDZs4",
  "key32": "4b8R1UTFvmpeQouNwxovM1fiz6xBjAXr6qGJazppWwuuzRs5K86NxTcnES7tWaBTsuM5PTc4LxNXE4kEfmavMR3f",
  "key33": "4hKf4vMJ4hnYCyLCezeE8VEtY4pn8QRkcoZFiJddbgTS9AYg2SEwzHKDQF6qxvrnuW3j4SoHspuNAceu5JkSoM7V",
  "key34": "2fhYgMQG9KpSMCvV2D52WxLQricvL1JEczSi1GsHQTioJUiq6h3fd8G7vtufwzwgx5emqCopW3cJqFJ81W9YYuqp",
  "key35": "3PC8xzJuZ6dRiKsGmBB3XUTA1oc5daHB3oJ8coKkhoNTFnF4G5F46vV25t3jWRXaLGUknXMC8hjkZ93d46Aw4s1N",
  "key36": "4dPMVcEvGW1gSn6AyxrFEoDUXWKmBdPH4MyEBmxtAbYnDaNfHPyYbBZ2yUZyUD1vA9irVUs578PMT9RJ5yYNm8Xz",
  "key37": "V1D32c7QD3CxMY2SCKVBo9cryqkMxNch43i1zfx6PjtYir5w2isfQDo1GG1yt5r6KZZUGPDK5Qop5F7zdpJfwny",
  "key38": "4tp6hq8P3Asxnf4Re7LVnDcV36SkeBcefgv2fkfuUz1ZE2r5LEhnyY9MMT8FoC1yyTCjj1BeVSrq2EugpA2AKnp",
  "key39": "2ymGsudAwMWSqY7RyE2tyJTXQXtqoWQJnMR74GqznKPrEPBLHRGdyLTuV1GrWWRkG64AaAZUZMc2An2qszW2JabP",
  "key40": "3rJD5tqxxdGfScKoDSvAG7uwWCUJFbWiVGR6jDz7i2PpsycHayhSEcwrHdPTsLkJi83QjaK7adMQNn6HP2v5JMKt",
  "key41": "eCeoZsbKDd3DPQihHDQM4PfQkCg2hgmJu7QUT6zwkN3Ax4DZPfVVUvnuZdtMG1CtFbVmtMjLNhUMh6ak5yLn1oe",
  "key42": "2f38BJRLdavkgH5MsV3ktzbhzWCSYDyMuMZRvjN7h12s5EbTnWZM6Lt6Tc5cYbVPAbTedPGskKfgitcrCSxpuM5"
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
