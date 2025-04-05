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
    "4mXY4VZcAdakXGCCtw3mdnhWW1TQ49VvzWRe3DEozj6rVENNU4o6oybCt7NAYzH1rLKaJ3uzYu2ax2Cin5YafDCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gQN7i42ZTTHUmvbUHWx9d3L5HfeHJYYRnStZdgZNYhVcte93ZDhya7mDc6jPcg9hL1sXcxycitxt6AERWwht4q",
  "key1": "BVCk8VRBYWGqan6YyBVuRTC4kb6XsaLYXchadk6QYgRsSGChkkmc4gKsfuHXuq4DW23HW46RNV4h4j82wwX3LFp",
  "key2": "4bQEsUV3CV3MFSy1PSJCDzSNTKRpB8Db8RNBY93uCYHDVKLZaCVo4R8uU988eituzB5FVdbMTw7pjN3LbboLF7ze",
  "key3": "4sAB7JEq1fdz7pUAPaWt1M1eYt9UCzjpLLKH3MaNw2CFpSGXFa6rjoFeuZtJztoYM2SGmgzjA2hvF6sYfGgfYsex",
  "key4": "8dEMHdYJR78mTERJv9dYUiPra4TFPKCDapmhaRMAEYbPVZhE9SB9i8U3E3K1mCARqtM1DiDLFGPMG7ekWdKMzkd",
  "key5": "343CqhEbNUjoTyyQqZihqoCQkZCsWhxTotspULvfBG2qXGgYWXQ1LdLxN6bqTpsw3KRRsQ79STU5cDWAmgm9y4xV",
  "key6": "2JgZAAj1tng8bhFcyzWcVosuwUdtxcrfYijJM3ZkVoV8KsLvBJ47ZExBuAmRYJ2vcjgXZZoFtxC9aFQPy8vZpHWZ",
  "key7": "2PrJbZRjPFCqHF4KGhiBY3h1m4H84tE7jKCE2AaJXe5m7QaNKRAsUV2z3uGmiQQJW7AvW1DmdvbJFUMQah9onBKM",
  "key8": "2VhiSJH2XxKeixqxNJDSLcP7dzfD2jctnwT6iNrSNPgevgHL5bhNmb9pQeaieNmHfGh8Vi7ttAFDQTyTG3UqizyP",
  "key9": "2vTQ7PhZsodv2MrgoArQz7iTDsa5U2gix4XP6cGbFPEDkyfu8JoEL4JxXtuFYB3VVQ2qsMR491nV75ERfHD9gwao",
  "key10": "2th8TxjCM6c1d2kDaRbkWeJTvcnGop1zKmxyhmaH9QLwjxasnaXHpMCJc43d4cg82KudjqnvALzpMv6VaVUPRAh2",
  "key11": "2aFzprp2GcwqoKtfDY3JRw3SqUPaJo9QD5Td2NrH2mLhzB74qkg4hNPTgnu1thkeD4DQwkmKKZMY1HQQMHF77EcT",
  "key12": "5ZLkYfZBqupJHn5HNBATNjJ61WAjBz3F8RFghZpkS5e9FBmNH3RGQWE7gQgK1GchPFuQNGCRLX6i4dQm6SmdQUW2",
  "key13": "5f71ahjP9czQ6RhsQxTqajbmSFE8TyzfNnTSxV1irCacxTvT6dLLpyqYZ26vEd9iHaJgg34hjPdPusYtA1RZ9Z5M",
  "key14": "5dNmojdNEjTqubyA7rf7zqwc4pmM2rBg1CFY1vYxpk1ANG7ffrqJESwyiYLjzhJpwwNnRBUY3ctvTaJsamGbuGN7",
  "key15": "3TcMo2f1ivf5d5EqhRXr5uNHnyGSiwF1Hbfjcu2YvPhJ5CjetRasFFm77TrYPG9r18gfdtdvqWGhkKGvXoWZG6eB",
  "key16": "wX9FfQpJrGwboSaqTj1khyz7wbGfFyBunz6YzzbDriB8gbj28a4sJrc9P3Ceg5Y5mvtZttcb2mXzrVy3rrJDb7p",
  "key17": "4gvd3C8kyZP4HP5kVPqLNj7w9mfNGzPYhRavzhGyyNUEKwSCfMQQs4psCEkMSJuiAvqj6vU6kYXbRgbKjs11kuGb",
  "key18": "nF75XPntdpNAZ1xpLb9zLvsJMJ7iAwMcQPhWn8atvod9MFY5rL49VV9XMQc9EJba9Hed6Q3wRLkKEPEpVfk5phk",
  "key19": "Wmbkp5UHGxFMY1GHBuMPNPBy8KcyyTboHVX3WzyqJKA1WpsSKDW6PBRDCkg8eQZxywnA6tTqW72ALatim5dPP7f",
  "key20": "2tffUwv1t2rp1vFGAYjDumWzZDBjpCU2PCYnynCDjcMhH65cE88j4mKrkAioqUsteFZMjUGJvsJHcxXWFPvu3Bqr",
  "key21": "2ti9HNe4uB6eta1BLG4RuTJ2tn8gxCzyeDBpBtjrHFFhRPqoeQK49TmsNxj9GeY1axF4dqxZtPBkhWS7VWq2CVHC",
  "key22": "2P3PfduytH5UZsuTsoqnU7TPskVGejM9NbrRiLZvmb6FCTmtjJNdc5ovhnWXafY1X9qbqndB2QUxzvPVAnC6Hp4",
  "key23": "2DQVeZxZCyC8yMDKY8ueoXnBqgiXcP5Pifaor1zHUwFJYYL2JbJJ8cnjaEbrNoPU3upUFz6pperRg9kHKbSFFm7s",
  "key24": "4uDF3j8fD1YM3J1ytLuSxQry9An66AnsukdknpXPt6Mw88uF8sNvYSoPPPqvpVeRY6YqdJbWy96491LJd6LJWPnF",
  "key25": "57J7mh72782msxRcm1SpokcBiWae8pztGvNjnXRs8ZDKw4XxygBJovhruLaQKqiG95P6onQAYbdBVbkNaaB63UNY",
  "key26": "2ssVSYjmx9MRmuAxRYohn1HagYd6aSN4A742hQ8MoaYppcqCEDPAX5P5vdBSaM1zucM48vorfVJXY6qipyqZtLy3",
  "key27": "42oeC5JWxC8qa3gk9qKK3Rc4vZvYF7yVQs8iysoSyMavQqQc9TMMG3gR5AJpnXRtyk84Xe2VYqfJuUG8JfaKaDtQ",
  "key28": "2gZM59SZSyR17Q28WtrMBZFHaFRcYTAj467yXyhuH3hwPjx4MoB4MLmx1SzvvQ95qh7jMEWc2eavCfJ9dwPCT7mG",
  "key29": "LFzSwcjq9CmgkVKu4XaD7awwLpBBUCqxKXSYb3KdaP6ksmwHE8wivFvyjqUzfspBnGj6ebYh29cTFcxGn3Tj3Yx",
  "key30": "5zzexLFFVDKnRvjT141zYk9ijeKSrHvRFJrMLAg23TwSr1pHUBUc4sFTxNqJ5SdvF1mTtbKPzmXrGvPcXK9Pjm5j",
  "key31": "3dKMu85LhNFz1RkpUtr6wp1uWXD6Y7jEbypmLdriHrFxg3QtZ2n7ivVW9bxtahbD5r7eQwHeC9NJwSGwAYJB67HN",
  "key32": "HJh9P5TBPMobSJ3uiBtfwnc16WTLVXq66Pc5T4atkDraZT38KHSneYaY1DWKc27xSmD4U1wSRiXt8pSzUWKQabC",
  "key33": "4qk5w3atK1DT7trZLskZZm9eyM1NAHkf8AAz6Ky2djdpzGwYwZCFL3neteLhYpFp3DQi4okeYKbbZv4gpM8hezKP"
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
