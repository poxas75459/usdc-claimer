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
    "4hT2NrwVaiW6UevuGbDTmu6aGu64hMJy1Di3iyEg8Wsb2uGo6AdQvwnDhs3Mcdx51QtMLrZsiGGHEM3HMVoBwJdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGDnZcTZLsWXhDeYmgD5gAntV3rT2mk6ackPvsXjfk5iiZbWGyMAyfWbrjmf9DfEBYNYs1g9MrKiJC557PWDuAF",
  "key1": "4LuD8dRrjiE7LyJ1nP49bBKu7TEquFqzT3n8exRBJuy21CNiabsz2CCKbXysnY56VVnxRj7TdqsaxBuymspM4mHi",
  "key2": "qxPoLAREoy1GbHiwWFPHmyoWSefwJ9QtpBpXvXh3Dqz6kLTDCktKSUo2EeVVjMiJ39ozukXEPFbHah4Dp49Y7ys",
  "key3": "AERWUpcF7Jo1ahXnEzhGiXJDBjYhXQBpL9w3xW84sCY2kMjEqKUUxWrMEJxefxb3ryN5uhffFjE69epgdftiRvj",
  "key4": "ctMPEhKpmWFyhxaB2Wy1eBge8y6WMZPv9QcRnq7gFHfNx85Nd5VQoAvUyyvBHPDKSYW44c2ta6soXgUWGV1nKBe",
  "key5": "3nFVeCJ7oTbPaM3BkGnqur47TYnTqFSUgtahZoKp2udEa5X7cHCZFuyJGgcN6mVxeMj21U8cx4xdZaDbLxZSohgV",
  "key6": "5rSN6JrBsDHchSUhzJ8hMUHSLN7EDSuEoaFMrccYyqNpYN2AMYFRRSEmNQkRuUGukL25a28snYE5kddiJz35n1CX",
  "key7": "3c3UHD6YWugbY2jkMASr7v39rxnq3azbk9DZxw1N2GoMLoJeyFm6wPGUgKURvaKphroD3ByWcfd1KUZY49sQTeNc",
  "key8": "3djmEN5Q4ovFNMasMPUDQEnvCgQ5XNXvwyiAVVuAKPjMNhGW4QiAZGJ1pvoJJr7cXodibiqPiNvLnkZgdg3BGT9J",
  "key9": "2wq9f49byniyYMtKBZUK6Qeke4inR9NkumnYmeSQZxixyQTCbp8JeKmkpAHSC56eo92M4X7TrbMwBrEWoVkK5isD",
  "key10": "5X3YCvVpF3vFiAWBzJJZrzfYWcyRkNeaMiHHjeW83w5uj24dSBoEfNrJSfVcCLKPY3TsZE2ghApfB15D9A9LNU1Z",
  "key11": "61uDLytKQpCXdr8wKMifJnu31x1kuXsiQSS1eP2iQ4tkC5Ctn9436RKMAKrb38u5ojk5UHa9msf9kgvfPSim91WL",
  "key12": "56nKp2UkWVsNunk9pc2QruvxNwfppmtwHZnjY3ckG7YpzeyJhcUERhwnUxDDoEw83mhiRbS9ZvU1c99BZQWxKLcv",
  "key13": "53YHi6zGMoLJVBkhbxon8g87mUyMTgUfvYi62KFQWtKMXGfobThTefFGxtzRhpESyyqiNyrSu2CaYDH2cBNMoBCJ",
  "key14": "8v6AmvRmq86YamaUbHRFsmC4t2fBGqeSCfkvgmpJYjigAXDmtcDLovyYUGWL1o5fuxMrBcUotwu59nMM6zspB6C",
  "key15": "25bFLb9rGDcVQg88sJBUPuqSZfqq7Ui7GtxtfgnRYVAwNHK8vn5DSx89tBRWbDhkx2BfUEEWiMyZsPCemv89FSqG",
  "key16": "LEPcDkKyhzzT2Ag7WU1VwLv13yL1ASMwuoyGBGDMsA4AEMJtwMZBSy21AUpffXvPQBku5QPXTNQhLLDjXk88tTH",
  "key17": "3KfdW8uQnpQ2VL3oEPKajsUWhvWUerDKM6EEtM18vSmoBAMV5dZ34YXoya47W86qhnJwmdGibXZ7m9jgaTH8T5SQ",
  "key18": "2jbgWhN6gPrwAe15DY2FH5L5TYCBuqktVYTNQKfiieSRCwy4zjwnLhbY9tbfUdrWioZxAKX7NNgZDgBWr58tTPZc",
  "key19": "4yfGbPxuMCL1Y7M7qX2G71wqzi3SDRXKGTKuKiG9a87SJjuuYQ6Y4hsjLayGVhkWoxDvBEb6xp3RMAXVkMcqrUvD",
  "key20": "9wd1LeCCz8V68hS1Gj2L38c4By5sJPgmA9842wvQX37r78X8HYvy1tk8zsoY6HqAd3XDZvBbr1VUYUdCQomCXQg",
  "key21": "4QYXw7rQnT6JxFA6vN3EkB6tnL1XqNq3BxwJ3PRSg1iTvfB4MDvmzjhdNeq1HddrbjLZsYTNZ5bM6KnkBj4KASzc",
  "key22": "33stVBpfFtL83cxXLz1amNDtHYWSmSAXdYrjiqY5apd8bjGQ3tryyh8gsw6DygkRFMnsFpJhUGTy2nZiSXJsKJBF",
  "key23": "56yWisaMHbVJsfedNb1QXfHzVg2gyux4edNE6rSHFL5rjLna1g5fLYou4yBN2ejtT6XHbYCY7ELiJLWvxPHSaGSF",
  "key24": "22UAP5My6uZPLqb91MzZByU1dzyXxVRVRkQsAvxpFnLx3ntGALHceRW9oYJbiL54Tmci6XE42CNKGSB5LUb1m2kc",
  "key25": "3ChpXu1H2fmavhMGGyX1r1aFraBUa78BK4eAaeHBaPTt4pWpnctaN2s9VmywKToxtSmaNtgyHH4iLphAX31MS5xJ",
  "key26": "4HAxZGSzTugS9YLRbYhWrwjBWB3PjLRTJKRPcprbaU4bg9svaafnsq1TzMGJm5wSCckp5kV5LgTeB2qdoy8yEuSw",
  "key27": "2CEGxn6S8tgdFzddcQADCcQ4yFGkpa2JHjyvu1ya2WRqgde8QfpQCCDpDrU7VFpiX8FqK8zGKMeTHxDMUw6kc2wK",
  "key28": "36vEiiJ128Tr63cjuPDFYcrJBqhkN7fSP5ffCtmbCbxK1YEj1VE5qYVXv8sA4NPKXQF7frFQ3wEt9CAyRfsDiqvR",
  "key29": "2rQYrTQ88jPM9XqWqXpmFh9n5CFjxkvmubRVaYp4ZCgvXD7VuXe98nsDJohLjoqNzeKB22VybAWYzZL11UX2N4E8",
  "key30": "5vddanBfxo6F4n5QyM2SWwC2sDoZ6x1zfViH7BkU1cVBcdmwLuZTcH2z136mBGiG7hKZtxdLFnKCyXcE8SYNzoFJ",
  "key31": "4TzK2NUqch4HXCqcGzL2kEm5c1qdmpQjqzMWfnZSEnQ9rsGiiQp6PGQv5YXuGfygdvkSGj8igt956UWkCGsRuWBc",
  "key32": "5Vm24459CQKQxpA9RMsVtHagzhg5LrrWyvcosnZsGfD2stodX1wYxfWPQ7i8UQFEVToqESdkY9MFnZ8XDxCq564o",
  "key33": "4JSYs1rsXFoNxZ9ZoNAuNjgTqq1QhJFaL1eLJAkJ6FuZkDoecYuVaZtejz29YGgkD9m7GYPBC1XEiG5tj7ycpT3E",
  "key34": "3vVtKiTNdC9mBH4vn4tSiUfEyGQQtWAggmVxPVAos9FzGDrxmT4DTAewaFGS7p2wq8hDUNe3FzGpAnWHKu9DLfLm",
  "key35": "35weTYiMt8b67J433gTiWGem2BoJTwQSwn2gDBrb8Z6SXdqNctBrVH71Zgy5ipz3pqV1Fu8SGVBSyvo1H4EKXnTo",
  "key36": "4VQuC67LqhbkBrWTe6xusgZr7EaYLqQ8fRRe5wqkCXaeCVRxuEpXqJPv3p8ZCQjdo3qE5uDskdh5yJtp9xZnPom6",
  "key37": "5b2Lu668ewTxg6WcWd6TjQA7AWmq3kFXMraBNg3pfBDBBni3GHFVz1QyEqo1U8NN8caU62sVDUK3BEwqe22ZytgV",
  "key38": "3bdrTuA7Qpie4fpYVYgEZYsQesS61diy5ChsJhrUEHEYQh5CWL2KFp9uvBeW9uPNdaWqZ1qRhtaf3T5Ud75xsySt",
  "key39": "5VKumfMLq24aoje1oMJN9616JJTGD1QGQQE3Qd4hq84KTHWrPgrenPtM9iUGSJM9CwVDaAg8oUrGHY72sT2uhc1M",
  "key40": "5Lfw8qNr3WwL8vkopHpQh1i4GVFdEJd6rgZaPDHz1aQsoHcB3hYJGWgZho4amBG63xPzDfDChDt1QktX675Q1G8z",
  "key41": "45Ss75uxnJY41m7uNrJeeGgXeuj48oBcExRi1enPJMAnghEMHPdDwvgjtZp3LmpoNtXid63vVx356iWhXSjJ1Hi2",
  "key42": "2N19B58Q9KD4X5QKjjVAaibiX1goH8oAgbJVc9EjxpQx2YZf6nPzs5rW969ULmTWEvvNmgq9o7giRhZJvwTDeid2",
  "key43": "oYBfQQJgsrPqR9Uxb9TRaFJyCCqzdzb59vi2oSdPwiMWEvSVuKaqgMJoQS513mvjSCTXrdTYFEfexzErcujEKmE",
  "key44": "58BtBjqgfup2wgAKTWFQGatQRu57kgJtfiaua4tv6mhpaqHwodxbr6qn8C9qPXM4E3HHqfoaJG5SypRMhgwNyJu2",
  "key45": "4BhWXwLk8U6sMLsNn7DM4a57NZyxycBRja5gezwyy17nd7FW5QzC6fsR7nj2PeKpMzXfeQgyiEB53sqTDMN8aVYE",
  "key46": "5pie5voqFKyZ2Vf1QEVCMGFKWUpH37ASFrDT4s3zaAx4cpnDbykS79SBJBRcZzCVu3GEHbVg52uanX7TmYAYATE3",
  "key47": "5i5jVSjYyoH897G6wgwbvu9h8Q8TjFB34TDPhuh79uWWDCeTpSuFv4qU7JdhPVJzMVTzERxwMM1EFt8CrLXnHG7z",
  "key48": "5SnncadvX65zN61KyPZ6fjttpPkvMkT95x7Cf8WHo55VGvx2R9zWxuZ9vW6fv5R6Z8UP8g3ZBhXh77atuPF9BD9A",
  "key49": "5kVaTqwBgWhMeGR88MrMY9xCxYSosKfBAGmaMLAnFo956vi5xSzJfWp47VQS8cprxNe2nUaaZ4C3BiMA2YJL1uMK"
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
