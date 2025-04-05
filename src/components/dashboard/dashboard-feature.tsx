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
    "3JB7EmgWAhdV4kqDrNrp4kfTePVUZNRqVWbVUFBH2v4Js7mX2JLJgVa4t3XYiSUrxTgy8ms4rGA9odv9ywmp4VLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62gWTZL6oCWtJh16ZoJBzdXvaX3Dsxv2bTaaqRVXFNBjrybGaxkxcm1HXhdUYFKfH67qRC2MmcJxRYMTc1U1vdjx",
  "key1": "51jDZsaLu2EuK3HZHGfCmfQwzPUVDDe33Ve9QKHtUaRGn399qVvK21ym9sFeTMBXFS5eG1w7tnqED8sHmaLARgf7",
  "key2": "23N1SEZ1V7dofhP2etwi6iPyyooeCd7SiAMyHLeCehp1kunukqYV6p9AZDbQxhp8jx1DCNcox8UoPtaUNLTgb456",
  "key3": "5CXASzZVLfG9v4uZKashwi3E3QsqBXUg6uB9RsSoTMfv3Scosa5BUZVffHbXaaUQYpmMthsTmAjJLA73CBRdF4D8",
  "key4": "4oU3Quc9jvrsdErLpskPberThMVtrnvXXo4q18QtUbTucjPYPi58kpw25PKHv91BreGkSKy3rJRUT8qtrRpz44i7",
  "key5": "8uTiUNsBhS9rs1MMy6hfg6pzU3kduZVGLx3UfNo1WHbFkmJQdU8b2RK1v61en9M6FdUWrHSUqRYH1uuKXbaKZSk",
  "key6": "5T226p1qizxf7Xbf4cV2k7kxHYJWXY4obnNATZGEKEChvC3vHxtRh5rm9Xo1zxRq6GmUYQWM7cPihkpqHo1hQor3",
  "key7": "25jaj3ETUiYNP9kPQn5tjfDNWo1t3re1rXcLhUc7m4j7BbjVZiaAk4ZuThMANbt4YPNJinJfqTewSqmsbnPkcDRf",
  "key8": "Hb2QRT1XzfmAswrCykAU4sXwndRP8w3ZxFd8XNZCSNgFwfthVEZahEuashmebAsgTAPfGEsQyS1N1BQYFMzuahA",
  "key9": "25zUw6gRHcpzLpAQuqPtAMyNYGrVDV8fiLfNqxP2u9o6kQHHSUbSxyDbEFdWqMvDeqqn3avZYg3ZdqAcBanEvcPd",
  "key10": "5EmMQyKBdZJBAtz5UCJrE9zu8dsq66CPrf3wQ8UT2igYXPZisN4c2Xun72xzJdmrktiTsnDUp6Q7byPtXS5YFd55",
  "key11": "8JyRUjvWsws3iPYcrL8u4MMvhQsdpoqxioYssaRVCTvA1MXNjGCjHXgsiFJaSbe3UKxb2FwQT9tWY1Gua6p9MRS",
  "key12": "5Qc31yH9aJctoEiNCfi7NttcUNvAucW6i4Fyak8CNBnyv5VS53Dc5dRdTT6S76zm522fBuvqj94ZJgTea37YjBeo",
  "key13": "WzXnFfPGQEqUerxMCnG1L8G6CZvmj5E1TU8UYs2jAYABTqAcgbyGdU62pi4QQSjSfjafujSt7cM1TShqEKKocwz",
  "key14": "2qtVUYmZi4zJtJwJrJb49LJLzkx595nrMb6AuhBXQxgvk39EUygfKAhZJTfcJo7W6tE1mpz82pWyb3ztEVYq4Xk3",
  "key15": "LrZ7P8PjvBYpnnm2nKn1v3yz8Ak1xJyAybJXQurgDmUpgGjp1X3e6DxSBjk7b1juTkV8X8N9Tcfn14u8LcXvMwt",
  "key16": "4LqhtS7CVZf1oUn35c626EBqdRciZXLJdRFmPvnYmJ5r9wH7UZTKx4sReFF2GwZJx2CCqM43XWpgpUpMoAWXFv7u",
  "key17": "giJ1X5GCRg2GqYQgv5Q1HXTV3or9yP3QXMhFRRxy4Eb3bPBA7zqPu3DZdxj1A1EWK7CBxdBJdojiVoVXeZ2pg7H",
  "key18": "ui8uiNwitnarXK3pQKA8HE4biz8BbuHfEccAXDjVx7EAPzoSme1Khh6Hfin9zAy3CW25CFQxZKJ7ZhxDVZWc3kS",
  "key19": "4GeMfmUXzDXY8LFmrnVfCNJBvMDShKnu4p41t3syH71mHEFP1awEkbmfXq9MtvkEufJSE3K6kqWTgLkpqiHwU4Xc",
  "key20": "5opoxpH9W1t24rB92Px3EfKh65LuRMteom6TX1ttRSkaNSRzbaHnkAYNRkMKaNZPAh7FgaUJo8CpXEAKzL1wtyZb",
  "key21": "3DK7Zj8ktAZEL1nRgAGJ59c9ug2i6LctfmBvma5xbyT33SGiACEg1CyXfV55RKBsP6AJN2988Wbs7S1VHR98pZ2B",
  "key22": "3LuyUGjRXRftbARKjhL8KUrZXParQAVZ9zDyQcVbDaXi5DHYupR1bcbJGh1AH9YxYiF53uaVuJo2NXL7qBvqi88x",
  "key23": "5KBmmRCY15YzeFRZkySzwJT3ddo2h42Eu39ifeSZdLNPJTufaCkQiHJXsjV1bjeFS58NwvBpZh2vF3uXZskUXrhu",
  "key24": "4AAK3LcLXWZV9Z3D6SjP8jbADrv1o9vonuqk1yXFNQdgvfSg8AJy9WrHMqqUzc5x4LXkBnhSTNvqMNgbUL4uDAz3",
  "key25": "4uVk123McX14nSydgQayDfaZ8hAhvs2pG5SkHrfAGZ1keCmDQQQcnj1kHo2HTR8CkRfZWTCMihF231RgHY3Zwjtc",
  "key26": "4BtnWTtSiSoQDzcGXEbgbeeUCV87RjeBfZi1Qw8E1KDwzHMLieH8qB8obxf11AczQuhELkLuaSSVqv28o9NWfCjc",
  "key27": "heYC7NsxXbb4tTHstEySSxBQg693ys7pQ8m5ZSLdDQMSMBU6jZ1ARe36YPPBSijw57y1G6mSnF1XoutEiEKWJUF",
  "key28": "3adxTvmSWLLaxvKZnRK8zQfF5H3SKRW55BbXjPMGT7GNqC1UziCRCRiHoLJ8hPuxNFAE163ozESQA5xDbR83XVUB"
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
