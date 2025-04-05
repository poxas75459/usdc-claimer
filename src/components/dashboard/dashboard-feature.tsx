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
    "5kPEzuyycsrzTDwKP4PoYPhS1ennQyogzmWZ8ZQrBZKhQPuXvY6GQ5DVTJs4tx9UawuBnTsLhwhUvhE1hxeTEigc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4RoaLPQVcs1gmDY2P5MbojYcyS8MYz4AaXaw8Hyb199LJGbWc9HVKofCdscpReM9sVpyVHiu2UJ9gjZ2MPbH7W",
  "key1": "5XtayVXvP1qaSkQpnBJbSYyPYtDqziGADX7rDvha5T5QXx5RVy9xLP1WsrVn8kWshpSEd9Sh5qYAX8kop9qThy67",
  "key2": "5tKWXBan9fC2m5u2R5rgBGgQ3u5Edu2LVLkK4aKKzMFEzhBSTH75h61tpfYGPkfA1avnTGryh3kkUHWfe6LHHZDW",
  "key3": "4GKZHPvkndBMQanWFzWcFgqrwe36ThoKs8btNY38tTeGXCCrhuuMgzGBWDDGWYbg7TKhudvBNBinVNfjzZ8tgfFp",
  "key4": "4Pu8RYhvkujkVyprJeAqWVpnAjneWmTo4pH4j5of1jiqjKMZTXPgjUdx4KuivPzKtHiNFDBn5Uw4xYd1vVKSunEr",
  "key5": "41ZKXrvbpAZZXR7cGtTtq32UDNvsPMXYEFEbUvUpScWq9UN7AJ4DfTX6PMdys7SKLTQnYLABEMMFqXVgSJifq23k",
  "key6": "5RCybswp1aLPM1nspr2fYpcomjB4gEvxXZs3Hx23wSSdGddpVXW4fy89mwUhazBjcgw1ts6vtHN8otfCmFoCbE4L",
  "key7": "61iuJVsstoHjxra5eG8oW1ZV3qt25pB2X9jhR2yFzDqAR9Pk4iJJBR4GX141b6gCABrGcn5uwuHJMZHpRWEuKkS1",
  "key8": "2dTEBbc8XmdRvEZ3DJNn4zn4tyM7uqDPwGsP8w2iZYg7UXbiReF1AxykNYx9m1YuFVyuP5TDFbHgQkFaLDotbAVy",
  "key9": "2KHBXS4Z1YF12a57n5tt2A3S8Mfcc8GCDqYyfrAKCuFrxNKyLmLzU9UmQqxWrPbdAYWhVH8pxPK5avZ8tuuiBLvh",
  "key10": "34gptjVKnTicXHUFe3Fm9i1CTAbfMiqRa8S1ZpWA1FsSwqojBownUDmw63XB1phiGsh8o5ByJiD8fsNshJP6HdGn",
  "key11": "5mgsaGGv37Pvuzaog4CQJcPwcSHSJv3GFwVzSfn8isfrHn75oDzqLBNJydSj9QNaX4LMjzLkLTVxCr1HeXRzH9vj",
  "key12": "55Q2n6G3ntJARseg1D58PtBjLmakZC93wVSa5QLSaQaW81fXUr9BcaBUC8douvrB4VNTjmwF2P2gZVoyDVWeacLq",
  "key13": "4yYhsh2cMK6NuZ1FXVSkQWJenDJXeWu8dSTPvBCAArdQFdZPwPjpTce98VeumxSY6hvkY8NDCwXEqTf9VSyrZvMB",
  "key14": "joFeNBdc3BhBKA16ceVj6qSCWGLvaSL8Ty82u1P69rP8owZbGUx8Pn8XDh7HQbT37auDBQ9Mb9kHMDVPwsBfXiD",
  "key15": "4g16QA6SQ5W4NDFL9FCXvBAzzc6C6TwiUzM2KNQxQoxjV78apQnEDokAn5SqdF62DwKJy2mLFphxApimxEJ3FfkB",
  "key16": "2KcBRgKPyAYG7y1ak8G9asfG47G9veWjkUqnBoV8pRFLoUQGTjVmMjbE6sTnHapMYCzVF6L4oipTbAueCtqNhU3U",
  "key17": "31KGY2Av1aMk8a6us4SpoBo1bmdJwEtWyKKDrSYXdQ8gGc4NjzMtfFAuLroN9Kj4E3JnqLiUodw37TPdNTyTrLMf",
  "key18": "4Lzg54tSYRGRzpNcfjrAW1BeDj5crNzzcDNpewQpxi4n9RU8CHBFwZqrdHJ6BizUx8ENoSsQ6afgmqvjoFTAxQeG",
  "key19": "2kHgMvGaBp3XS6pzxfXGNxdTrokLcECWoe6VevGe3VMF9CzYHoiA9xZvd7Zt39iScsKG4yPdZuPyNwUyH1VcbCzN",
  "key20": "4BWTwhaDJ4h8RmicC1KjQMgJMiMt1aQaZD9pHN8k45No9mF1quuTbNExxWbVoRfvtwrnnhpw9a8iYkiPGMT7XYUp",
  "key21": "5aBhNebFkMx8LcTRSmpUG2ZSLD9CeXzfbSyzkkyGH4yzFRmF6nEFJrVvq45MocEW2wrNV4hzYVsbgAVxShSQTtbC",
  "key22": "29ECsDjqqHG16itTjD9LdGc8gv3YyWUF3FKo653g4qnCxPKx6NADrsfDZYHpLtbk3j6XSHcefewxfgb9E5FgAkQZ",
  "key23": "5rGA7pMmmLMQLWQFsEJJfGYqiQyy5X597tXuY2mUPQYpVgNZiPWxPy91MeSRGQXB8wvVsdxU6e8MeDL23nzmQ5t9",
  "key24": "4fuhDSz5qwWhBKjZdAVzJJnbiaPDFxJKuyiJUcbX8akxA5Prau5XMgzxWtMAk3i58U6H3xywqcsgXR8ASnSvpvW2",
  "key25": "2Nkr466G23Dnj62m5eSAYnjTtQUauksvvTuctQfUDDPEeW4xGUXZ8VgXyMbTzJyr13hhfnhSYbPWCB6i7GgtXaob",
  "key26": "vbmVfaAdk5rVRPnNP179wfXZZGfpXG48w6X2mn3QiJafchPQgY8cPXXfduo1JiTYwmtHsfR8yDwJSuLh2ZifvBS",
  "key27": "b4xZ9PVYUbESqEcsMCA6T3e2sqht8yXbp99ArFg6D1Dzh9LpMvcZ4xgASbqJ8t63j6xJuoajwZ5SzvjUNLsUXp3",
  "key28": "qFzfrJ6tdEeG8iUz4kxK294LnNSSTC4VVryYyvWqFFZssqC3Ss6Quz6Wee6zgzE86PXxnS2eJCanYeDMAbKBuZH",
  "key29": "3PikemiaxaNQ1m5pX3bEXPsb3PbAyFaJyFZ7HxRmcmBjGQDKsB6H6b2GEwTrGcB4zXWckKx2tdHzjZzmKZD2fscG",
  "key30": "3Hd6yvPejmwvNMsv5sc7Cs3BsaF9EkGRhhNcbo6in4qtQHqiSxTTqfZssqV2h9PgtHn54D8FQ3caC6bMCBxDbxhM",
  "key31": "5GHYmadZhP1AbjrmDSWHUkoECLJa9rNFmx7rU71q31hwDdES237QpzJbsdsQ8FNoZcLPt8XfBbBA1vfnqG8EGhvh",
  "key32": "4xENnyjCfRg7s66G26d6RF3qpBG6rBfCYtc71kFSSA7AGZcpdrAeFNXT3RyVcSaK8jBuna6XDFYKHAhFEuoLVmpp",
  "key33": "3AcERvqe5FVzX1Qh25wLFt3RwQhYauA6aV8q5N53mBhrVvnKv3fdZ29n6x66WyvnBdt8k7TWHFgWnPmiaj8f2Wmj",
  "key34": "3NTkUfTGEj8tBDH2Y2qhZrFAqU1PozjwMuzF2qN84N1dUCJgMnczzzFgrR9ebStYHi7x3a2fNsHvNJ751P8CiwUX",
  "key35": "3F5sC3SXRR5EW6cYCdaE7fPkBCQ98q6zVJSW2gHDVJipEqiDknvtcUb3Vuxet1LEHYGdJpnhHDmZWhGeTqpMjnMc",
  "key36": "7aF22urrHeNJT5Pv4h38LjmiRuwwqwU78cacGfjTQ13Weu9kgwHVHxJVz13uuzocnz1xJVNki2D7v8or6ToeWne",
  "key37": "55FngztzuWCNB2RPCR1ABoiMvMGx9wQG6WX5hKoCzg1tj6S6JyqCGWiGHjCJ7RauSSm9McmbAdeEzQARTRvwtqe9",
  "key38": "4Kh5RscKUzu7p5BsLzUJ6C46P3Uecmpuqt7VDdLgmAaqiamsqsMvhURX5Suoh82An5UL1eLC7eyQ9nxNxc4PdsW2",
  "key39": "4JvgAAsLAo6SxD61ducfywK77WUMx46UmnDaiaWcJ1q4RM8yXbpsRF4VgsxarR5oDmaa8TAVmdfDHuoNivD8UmHN",
  "key40": "65puBmKDTF7AVE1GmBbThCqdEV1CHvoyqQvccagJMECb3amB78oBtytXyD39ZKQN8fnpuPYEBPE6V9Xnmexi7TPi",
  "key41": "H9abHNwwQ4nb1XVJz5hkFim6NyVnKzuy9tSu7epKVRGLmHYQU8zDZfWdBG3epKoVEyb5pXKTMHEBqLBi7Mdhdzv"
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
