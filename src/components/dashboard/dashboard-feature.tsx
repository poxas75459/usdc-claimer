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
    "4W7unx39q7VH2xaA94ZjYSPeBzfeFJrErVLQ4YcovUFK5ZpNBQpNAZDQgTzqu3hRym3DoAvNSjXuVHam3o3oge2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoD2hE4jGL2E5KucXQw8h4HtRmPA7kKkhtG9B1fsT7QRBFtPPpwKpcaWCWgJ8NDbxWxukopYVFND6r5a78TpcPM",
  "key1": "YMrZzdhzxW2djf5NrnCn39rK5dHQQgUkUhWTSMZYoHR5oreQWUReUEWgLXkgDQ51VrrGxKLeYRatxYuZrzKtjbe",
  "key2": "1ykwYRYV4aSAHxyhXyfRLavxKgiRgR5kqWxhYPNWpUFZD2ePWDb4Btgqggie3BQNACnEZUDFBWsjspPiyCrDiDK",
  "key3": "3TCafm4uLVibMocMBJpohxkTdCqz68Mbv5mGWqn96hsAcatpniZWHXxHyb7oMsZM1aWuAwjuQsxmWteiiZxWAwG3",
  "key4": "iHEftBdAZe45NwuwwZGJFDDfuvDshTpYZnyb1TbxcTnCnMxngwuTo6P88swS4HDsbiJMWNftCT1wM2CoGMW1erU",
  "key5": "3VcbcoF5rHjaWNKTo1b4PT5TKKR2gj6Uwq7Q4pNcbEBrh3Ux7rgU7AdCsULtGZ8XEQ8vvkzwqhY5hSPd4WkStP4z",
  "key6": "62rLEcp7V5zwKUtb32jyCdztKQuiDRx2aUpwaC9BedVnEGgvokgHqMmdgTcPTKeveBtnL8YvL7MDFuT5s4GL3v9b",
  "key7": "3gbwv6NkS5JsUPf6MRo83AdukuQzs25niJNVApGpdUaMpa3jLfEmxQLudLcFfCQ5TKkWKcLdfJnupAfwiao3doLW",
  "key8": "2qf4hrHzAo1VZh8rhc7BVh9DzQewtMwP8mMbAz8j7AbhBqVH3vJEiKBTsg7tHC1iqDAGQCsNX3KreSZerZko9cBH",
  "key9": "5r86p8y8GbbCNot6AWiMksRKwcwpyBcTP6baPUzyLz5e5H3HT7U89fZH3uHTmKchiWj1naLzMqf9WiBS1GznBwVt",
  "key10": "446LiCNdHzWGgTtaHL7qPiMtfZBQJa1Dkb5YFHE1KtWHRWJ3tkLnA37G4sLdyF8MYoHNo1ymWhncnqN7CGEQtbBa",
  "key11": "B34YsasuJSgy7ztmHyt6tijtF2U6CfbyS9dPbr8SRqmgKwwQnM5y1FsMugV7GQ9z2peXkwD5XMgsGV4ZXqmquP8",
  "key12": "y6BUwVwPpccsCbBif3BWBSknCnPL3A6ef5gkpAwn12d5JyX71L2DmRgJsa6ebQwsLUGaHac6D6oNBedcAznchSE",
  "key13": "39NihCXRvxc9KbznK2vG1mLwi3oRxC88x8RcofcW64jZtyVxaig7rjNCM8ADTWQ4GT3fpRX13YmDdGHpLHxsPwBS",
  "key14": "5AB53hzePLai28QiPG3qftQEfH2LmnfN2EhZwyVtVr8gQj4TWVfisrJc85EvyGqMzhN44LP9ur9hEogzu81jEcdq",
  "key15": "4Az6k3i5rYumRvQAAn21jG5XtQEr1kG1d73wjwjiZXHECbp7Hqo4E8pPWfBqvYB1P3c6nx77pEFYaLKPG5ZVn3oz",
  "key16": "38Poj6fogggnY4ayc8hMHwPjZyoLU4yPLBSfUECKobMdJy1wsysyR8Pm2eh8avHXKAZ4GiLwNy74ZcF1THrGnsj5",
  "key17": "555iFA4sh8Phf3tyJAQ9inoUL9E3GQEHGhSY454cYoJiVNqHiCh4Yza2eL685VqsAoJuahtPRxvi6XUKSv2aorgX",
  "key18": "4SWGgNnqkkhoNdjAjMs2vcnCPcwHmGAibtnqo46MUydqd4dnCrj9zUq16KgtUhkVcdSdfddVeths3G3drPb2crJ4",
  "key19": "5skW3mdFfeWgAQW4Vd1mTwWmB6DVw66xwfM3RLcRNGC2GNb1xcDMVa4DmQXNwnFe3GTzGNjrzsAiDNaBKgEUZSYf",
  "key20": "uKmX7yuJ4xW15uz15jBWuv94hubsintrh6yTWHNuFtLUNC2tXNRie9Ps2HXjEfeGJCR1Z2QHb38jyeYA8gpcbZc",
  "key21": "31c8mReoYWg1E517Geni3QvrXpuE6CUL7ZFrweHKKSLtSwcbaSz9YQ9MPpy8PedDswQ3jKXrbw5CdLTXFdp5gXHf",
  "key22": "5DHC1mAqG1DoNcrG4MUG7bKA4qCJsMCzDD29X3erKiwE5SRE5Su26Mwsn7XYcj5GSRXKRC8FbR1u1aQD8J7YhbFX",
  "key23": "5WNdAYb1sfuKD4q2Vrcnkh8uoJZgHWMUKCxzCKLxv75ZuzcWEX8TcPJw6bFtNice9P7jtg7cXdAuRuuvfsjeZhGu",
  "key24": "4u4z5xV2Mdsv1je5LtAXsyt93qALo253mtzBgxzeD7BtXTr5MjS9ebigG5aUFDZr2peYyYooRA7sr98du3et4TCA",
  "key25": "4KSw4XUB7GahQFZKkShopa2rGQFCa3HTHAK75PnHi8JxA8CobJ28L6SpX3gfS8ERo1vrrkXn94tgmL8hPWprjnet",
  "key26": "2FcNDJT2X1c8rytiDFSi9DdWAvmxurq3Sa9TR2TLNqDjb9cKgvfTZ6XC4MpboxueY2NS5vGm6wwJFJ9mLbTe5siU",
  "key27": "2genK1CYUvbwy4H9JfUPPpcbSypq3DzDMnEPTdg8mrp1pgDDUHjZfD2LkntTWi2JbDXv391wtohYcY9Ad9vjNy54",
  "key28": "5pp939dXqR4VPmbzHAZYftBNSJYrTVEMy27w6KyYB1je9CBHkVRG1whvmr57MJdiRcEMDG2a7gFYnCETQZtxn53q",
  "key29": "5NMKr59Th7hpg8TiF9Cd9KeuqcfoFbCemMJBLhUE9gCuKPf8ECFawKjUkhomSNQAEfeM4DmXQDywHEJoaBzuHVj4",
  "key30": "5c7sFbA9wp29omViJWzP86cZJrmz7nqbaiaMhT3xrV9ppcoRG3ELuvrPxwSj83arJo1ZtVDN8oa6kHB4t2ecoNg5",
  "key31": "3DZGrj96sJCxDqT6y2ZXSwMF9PbjoKA2irpKNudLUcerWKcQ3hWzhPSKvmJC5zvfnskg3eNCA7avJ34XURAwg8FR",
  "key32": "5Ag927SfiHp1FeaCrVkH88wj7giBYud6wRQZeAMApe6pJfHg3rWiKX5uSsxdZQr8uesnQv3Wghoz712oFERL9WqU",
  "key33": "5pPFD6zFqPG8xU9TNVtStAaRFsNZULzucHfTyErjH7P449NqG9qzE7gfaWXzbuiSM7Vx4127ke8AHWLquF15VMYP",
  "key34": "3rvBzpbayq6dLxFidYk9vSuTmg3NMSJjsNy7mbfDbUApTLJwBsRDwRFPfU85j2baMz64esTBCVPKpmfr1ZTQt5JL",
  "key35": "3y4kNXWkNkbY2sftiKZvEcBqbF5g2qUka5eGzZ4nL74bXwBZNf1RvdeSxZhCoZG7cAGQkPV6PeR9dQev2RkqVtvR",
  "key36": "4XFETLxfLhGKkwYGMJKHHB67vfsoiUbRccrQ1YPgmNFHfYkoefZcUCrkFa4Aqicgoi3WqcxkGHuKtgE9xFod7RPW",
  "key37": "dyD2KE99gf1mNMRtZVCmiv7c3T6h1FSr7SadaQL4NvAGLv85rVsvxeHrgF2Lx1dVxF5bxUYrgkABKKQfh3vG9yj",
  "key38": "4j3VW4eXCocbK13mpF2wRpXWfAbXWbLGiEE5C4hUhRrGT2Tvdd5Gmu9AL6RS33so9oKfvdes8nuctxsYFzDWLGsJ",
  "key39": "5STBioYBq2hhrWJPbBgS6Sq5xz9rRm7jRFCrduQP2bK8gdVLbUJtr1PGgTc2Ao1zXAS4g3g51fmTygtk4CvCRdis",
  "key40": "3wjmHyfWsnnvg7SGS6wx9x1ndM3YN13ZGGjK2i8K9qWgBjG5D4ikV5ZMZ9XQKveF8vcvneBdpsjjagVKmqLGbFY1",
  "key41": "5FBnxJcsXdbxwt8Xvcwi28Jo4jXQ1kv7Uk55EVLiXCsWtCq6p94Eu1a81mGSZ7nB2TswVNDmZv5pFzcPYrkZBM6r",
  "key42": "4hQMN2W4ZdxzV9VzEkL1F1Tkd7nrpB9sUUhfCyQo6EvndqeCsWUfsKJRp22PXioWv175ekWDgQFXT2YBfqodK7Pc",
  "key43": "5P6WDqykzYv7YH93m3qrqHpiy6di9sThpojr8JwLy1oE3Ayy35EgcNp7bwQRyW6dskcpbsegzURq3vuMvyHNirjE",
  "key44": "3FtPnd74ZX4NRjaAQmYT841eMBy8rzQ4MKnyjBgAagGGdX4YarmscHMsRqv9RXvxZQMXQiJoUPSSvXrsDpHfVdkZ",
  "key45": "4TZbsjYebvz49gFNWa2Kn1EbLd9UL7ctXSKAU7rzVqQui2P877kPAsQ58Qa69uPj724PfNyDbpBfuHhrLSX44YRE",
  "key46": "5H6XRqgS3XCeRZH3V8XUV92JhXK8r5mceM1GsLQs3SAWmYkieUo9K4Gg3hYZBMTAtKj4MoiQ6RMc4TRNiRfLx9un",
  "key47": "38oxHCoe1dDkPe4KAiqAMwQiBAAD6Xvb5epnkbf8npSZdAFNVcWjtap3SbVE6dqCgV8Y35GuDW1X5pyN4K4UvXJt"
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
