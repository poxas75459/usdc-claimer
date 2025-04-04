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
    "2zJF4x16UdoDQfxHPJf8GMwbi2sLhsaxV98vDLPfoko6ZfcMps9zEwqy9BJG994uLV2XppLz4u2LPhB8j1LomCP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A24CybviFgSoTsi9QE4MZ3M8tiwcANRjfXUxS7W51Ti3KR1mcQY8h7L7gXxFvswvXC1h3FqbMwz3YYSsgXAFY5K",
  "key1": "5Su6R2ZnYPBKeGRwNtaURydkaGVVc9NP5L9RshkuwNe6L9Ef548Aa4WMTJNgj7V8tUceKPymfi17TKJmqzX8QvtD",
  "key2": "fY9BQVjTnEWCwuZsWpCg9kv8YjUpz1ZjzzBcGpsZAEQCqt9vWtJRQbCwPvdBjvVpAxHt1K16QecpWSGYPv6vdT3",
  "key3": "2jXNm4yitwy3vPhAdyWgxvPs5f9vmoyD4AdAus8jjP1tEm2fqE2hbMRZ9jn8VQdfQvc5y36w3heSkLRdq6DwC27H",
  "key4": "2J6ZHZ7mSHXaaoBJQqSExn2PMPU9Na8sjN7XhszHy6SkkkSAkNdTHzRVGfS1JXdHfuTPNmMTR4GgmwSBiDcazU6d",
  "key5": "5dpNkrRs1WHpHCeQcziLFhLXkoaKGUJTjLZsMsFy9JwNtc3jgS8GKBZtjqF3tJFDYEo7Eyzusjr3Sytd1CQZFa5m",
  "key6": "63vcY27b2tyvWKrw7L8T1ahhDWALp7MLXGiYCN8ZbX6Rn4J4xfLFDT3HM1vDAz3oWBmWtAHCGHLi1A3c6zLvBK4h",
  "key7": "3FY9yqAM3vw5dzYwKwSSQkNDxHTpnrzCh47URtqrSpu8VerFrNzRkMJXHDTcp7ajKmQpFvSUadcVY6VkpU94ba9b",
  "key8": "Mkqap8tXdEpxdHWZsESgRZhFXAX7pTNe6YdMHfJW2bbkGVQ1sEEnscF7XghTi1xgLi8RWFmMy9HDE9kt5yKyjJZ",
  "key9": "3GdooELnyuU2RgFrSst5urDUm2cjKhLm2YCoNuypw5ExFD3Kdtp2QCg5HGgkDJQHob2CjSWg7CJdBXw9EFE2eVn4",
  "key10": "4oT41vHg4VpdxSNr7UYGqcWXFGfq8grN464AQ5BkMoyh6JcrAom3b2x3Zc5w896EwGAmQup69LaKDwygmYE3NHnH",
  "key11": "67PeLTo6oYAfnbjhf3SrUMmdbzj6G1F4vecKzD5w4EMYYkna3vqRgXLUxnoXsg4KWPB4JFmbcfskTCLB1CzwxFvH",
  "key12": "2Sjm8JzSfsXRc891vx3cF7dxPhAG4w4kLEdo6aE2e4uV9sBqtmpBE6uTN8cQmcLx7VUPhfb9DFN93PzPyuxogKvi",
  "key13": "4pJGS1iFsvzzcZ67xANEPc8zpw4HYHjWUkhFVQJiVuDG3iQmhAn1g5y1e1BsJqaPEZ5KXgyaKaEoWX3LzWtbi4to",
  "key14": "3vpc3QHaNiqtqgXrYdX6TJju9597ZTrAoXL4BGJ37KAcWTnuF3S5pZpfyAkf3RtBbvFsk94gh8pjc2DsbNftGL2G",
  "key15": "4cJQ5dx2MZzpXA7sVYtPs4AJx9ZiKc6uMvtUxn1RVTrBXUD6zvfgDqhmwx8n7Z6hPvxk1sjDJUetJvAxE5z8BYQC",
  "key16": "5TfSCpgnhV8AWSp9Rcia4WMxwYHj7k3vUrU72BUx66Rw4pA54kPRR1AEu5bHrdkhz9jWFiAmsHdnzQJQUVCjEH4H",
  "key17": "4cB5kY8bbVYYBygfw2uiGDJoEARaBYEL14S2nbyvK9tqUKkCGe4UxL7vH3QjNecuKMgj3JntD9KamiU5VFcLBBzr",
  "key18": "587tpZD56v4YecgT6xLFfPVhPZjqTFpz4NdfSg2Nw8o5b2BEwWH74PenArNyUPH3pQLzwZ5pjpUxCja3dNeVMK1T",
  "key19": "46xq9yGZ1h3nJSZTUU5vt1h6fW8NpeBbfvHb36n4ZLzMKHji1hbpQyw5n73HnuVRmF5RurCkfebQ8zZU35dLLkKa",
  "key20": "3k1nrmCYuS2JcyeoyYYcD6gAjneq1EmxHdS9LwuCZbCjoapczkecRgADKVrA1cJ3Qj8Zd9iYCAN1jWuVNihuwRib",
  "key21": "3WunuoxyUgxGZbJMgS11GLhRpQNbLG4YgAtFjn7FygVpdVQVQyB7uGKhpMiTEGQDsFYPWXP8752HShaif6r83tto",
  "key22": "2hY1D9vCzA2pBE8JTmUBorx8HJ9L5TSKkBJVpXTtNeHyeXiRdzUFBRo82mq67W1xcVWLHxpnViTQzXjwczZivSzi",
  "key23": "E2otxbiDm8kcCDSrLDsEBFrhnhMMLRUT7sV2NsvCkJBBq2qEgM69GYPehmD3B76abn7mRSmE6LjM3hy7t4vkYwy",
  "key24": "4DdjeBr2T5nKifxMYTSsRBYEk3NuPHpT2V8iuADanKV6WCkoLbSQ8eZTxnKWkpeXncbzvXNgki8meAfmzw1kxpjL",
  "key25": "eRxemcajTK5T54Tirp9keua2Xth85JUdbkDiAszffFVrquU9RLiS17TBzcn8jimZpZDdzhbJimHwbDH6RcWwGsY",
  "key26": "2iTnYfQ5pwgD9sZb4nM6FoyNkahGMKpoWKc3UKis9KyPCa5XbN6hYnGoXhaGvaSTm9omYEeZBg7vhENRpASv5Qb3",
  "key27": "3BdCJbnrmtwjJspw5A2rz3GM2wj6e5knZeu4vLnfJZyaYDVFmM873EWkfP6o48vbkXFdjVAZH1Ebc1pQZiVgof4Z",
  "key28": "5D6QtwEmVJDLQNLP9LiFcsy6ma7pv4bDXTNmwKHTmN1SJfietf4qKPxFemV8XEEJUFAP35EP7qKSNcvoiKMgu4tt",
  "key29": "3wSWcgkwrRfp8WJaHH8nqJ6kggbbK9cBMfqXAAvYmKacS8XZEJXcfw8iF3hvWZR8sGwFfP3m29niuQaHUb7K7qCX",
  "key30": "4vFPBZGVJfc5nTRGvTVbuu1Ys59dzKuvZuxiQxg3HpRqE2J75EkLEioGL6Kzux4PpaorUNnaWYWMk19i9xxbwmPb",
  "key31": "4ERqDVA3UQ8CHxX9RXSXYT6kvXUYB113z9CcpXYaeJJSFDxre9Jrsy7PxEvjjLovsMNMcR3pDewA1afVukki5yTt",
  "key32": "5M5cq4EcksRKJqWujGD3TEq2Bb9vMe6wPW248HfLtVVMtLucNuaCuc4TGLvWm4ohfZzeCeJUw8M1TycUsiZehpHc",
  "key33": "5ZLQTvLZ1sG5SXJD9eh2xKVY2Qw2GJ34n6LK2kNajNSSunx6NL5VHh36RGrC7pP6YBseFkZQVasjAaxe4nCVCUF7",
  "key34": "WzFFmvMsGZopFckdv1qoHn99DvFdL9Xr7Gjh555Qhg4yg6VKB3LtZnfdofm7f3bcnDxPW37LzxT33aXcn3vaKVv",
  "key35": "3ApzvsqTocbDCha5xcznXuqbEMgpgY5dnQgFug98HpP8YSwKKx8SQZmggpqzwsxmPFEr4euCBGTY5gSycoSfq6ig",
  "key36": "36uRyGr6FJX6bvrGzBsCWt2jJwnTHwXx71mYanRqp5gguazbu8UrBPhhGmnDbsk7DrUUnTP4mrNXAFNoctV1yVML",
  "key37": "4ZeuMgU1hseEgDUcxPpNceeZDn4Gqa5g3dTzfWesFwtHa5kEfJcA8wreYPgJF5qjUUrjnYwyGDCCcykghBAsh6FW",
  "key38": "4TauA2uWde6uCj2ZCdTtD7WCFSBUcF3XrsF7cCb6BEFf5oLDgM6CDcw13kAm4GXDsTe1rsTM2MbwHVehTvkDRFyw",
  "key39": "2Uh3cJJbcKQ19Lh7MQsmVppquBeLvhzMShATKKrWVaVDS33TNA9CuhCtSW1VEtxYWYr2ycZSHvFpW7eiibgAN4B7",
  "key40": "uKpgPCXpCHb7pmN94kmpEczQoU1G2UzMgZUkkw9XzuaPpbLvJEckmd6CGCvHzC4iUZJDzqyAD51aNTUP7z2bTEG",
  "key41": "3PnsGaUPtUtsMJzQCSrLC8gKSn4JVL9BTMcVjyKUqDLUoUhEjKmysaYvUVMyYixwf7MCDHjpHdxKUyh2vHbtSyGW",
  "key42": "EPf1RLrjnkBMU1XqwsfytDQ6wef1zujweT8gvv5mzejNZuaaTWCp42CTM1BqHSopzCoAwuQ6AcLhGpEe9SdqXDc",
  "key43": "2oiFSYnjuYTrNg2jyZSDWysfQpvPps8VBhwk51hthaPKoNdMFmA2M6tZJiZNWwPCnYGnzZhYybb6zsm1bFY8oGG",
  "key44": "3UghAQVA2osPd7aY1N7xG6SRwwSUJP7ythBAj8nh4r4m1jGrLcCfuUY4T1b1DmGG3NE9HcS24Khi5Y377Joz3f1w",
  "key45": "cgw52Cmst3EaAvAEYCxmCVPP7XwHYB1rjNij76yDnfV1hFiaA2X8TCKBkDzgGvHZytPEkmQbo9C3kfPD1s3G8dn",
  "key46": "ZzpLE9JiEfnsEpVNXxctvLKC5RaRoGKHn27czDEmzaKZu28232eGVoNnGEyan7ejN73NTE1LhQxfZd53gnW5KgS"
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
