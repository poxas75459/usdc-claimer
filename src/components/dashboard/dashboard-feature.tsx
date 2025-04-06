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
    "3taH588VVQmE2NzcrCMcYeKKeBEEnBXfeQU8nVWAw9Mm3sXDaiKEPbNeFWHuRzKdswmbwDXnshMunmydxJkJ4d2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47P7iqMFHd58rb3RVeC2QXZKbU2gs6VJ9s56JTRuPZ4CBbSVaq7kxnrWieDcCzhoFm2fn7NYqrNgnfvQka1x7ZKr",
  "key1": "3cVgZ3FKBD2RSmcpPBQBXto3dSWqFvBGUVQqSgW2mj73QNZqmaFGLWoNcqJqecckvVC12FWqnN4oXjAeKDH3Vi2X",
  "key2": "kDH9Z5iSpNebodcRpc9xsRXjLTDsx65vPYMtHcjYKsXfNd9EJBo1c15vEJYGR2ZGj5zZYcS1LEfu1rEskZtKGVt",
  "key3": "5WcoEBaWfMPwh3iUNGrvGmnbgrjYWaNR1aCzQGHaXdM8B1WozrFjCoyCEmjHCV6CQQrieyYWv5xBxfwCjFaNmNfB",
  "key4": "2yW4xyBExqviw7Am4WUoVteshBaqF3dNBFNTo5z6qDvLXDdHA1EyRBUrgwtbDK1gCHGwv1VhLJA4fKKbhToq4eu4",
  "key5": "YcBod2AbkLHFmJz6ZRTaRAy8ZYvqcJj7ddfcWC3HMYCBrzfe7mTnBknPhw9dVhStYJ5Y6u7ZyPaejKWNu6ZFC57",
  "key6": "2AGorEuDxqew5moXmCu8XaPNoBuDHhjwqssaaSBB5sr2Ragf8KPU4fF2TSU7RN9q8RnE7FHsTcz5Ri58heH7DrDm",
  "key7": "wVnEJvJotz2T661dKrXAihJefJp9jtbCmzSKoHdknNaeUaWQnKf7itiEb7BCGrZwQMXLzXehfedyE34LPxmd1sD",
  "key8": "4aam9gDtoHS4JjWmCJqkMwnVJ8p7ac55UjL31a9LS4crM1R8EMfkSJmEby1fpn8aP1MfR9SjDNxAtzF7zp838uw",
  "key9": "FerimMRUvAhHZrqFFLFpa4vmLzK4KRgGnyzc3YovXYd6fSaFVePoSYRR9APeHGgxoE62KBicLWyAmvscCbY9i3R",
  "key10": "jhW1ZsjpmQr8hzSJ7trxJpgyFy35iUdaddBrqryvqqGqSgfqkMSi2mu316ckkELBzy8XsWNFZ77CfGdMY73SBiD",
  "key11": "2qk82Pb3CcuvjyNB6A9evkUgZvfwuqyoUxgQ4W9qspNtXVNDop4HYiJkLzMKv1mWfqHtUdVXjeoALkR42eS8v8Ac",
  "key12": "3NG9B3y75dB9NKPQqPidcQJLGAMXRbW7JxENgbJQdvCHaEghk7r1j2GTgZptVigGp5nvKjLswaGqKGywEeHcJcuj",
  "key13": "5AKrmEAsuJxMvVa3Hdasyt6ZRJ8L9RrULbcfUJDm4HzHPoSHfUd5SjuZwWhw2Hz2Y1CR5BgkY3v4NDkq5BADYmEN",
  "key14": "2gKXNnD5UmkYa29j4oaKJ6LwMvy4pQcnREAN45eE1F88E7CdUNbYcFad9TcBKE6aDpvnFzKrq2HX5enJpTB48cXi",
  "key15": "4fwfsSFw5LnxfMNEwVzNZ9p9BFrYh8JCwbQzM91QeWW7GydwyxMe8X8pHPnAQ5aQ7NiB2aG1pDD6Zhh5ysQJ6jUK",
  "key16": "3kxwKiDBowEU7DAUyiLc3MpFoXe3yEVe8WdBHxczb2P241KFrH2fwibH2QqRzRwPpw4j1FB6BKbwidxWNVyspfgG",
  "key17": "3GAeWuux4bcVT3wJiguPSBdstzZa7dNizr5AMEPwwhYH6oCCXs1jdNsZCxyfWtfRtWy9cD8NjU7no6rthSvsG9Da",
  "key18": "5C1jNNEPa1pjj2nRdq3ogXreeE36Hn7NcTrumQ2w1CFnMSr4RmVJDtReqvR1EbKuxhhxqADhCnyBPsmijHufjnFT",
  "key19": "4Qv1NcBkrj8UdbhtTwVaBWgJPMEx2DYVsh4n3Nvm7Am7v3YD7LooekeuGg8ASidKEWmoAfe8P7bay1uqZafoGCPk",
  "key20": "5DPz5vamwXxvTdxnNE4hmbTjeVVfqwbm3TcaX41Hta9XfzopKjUqbpHNmTRj88XTuvvCALRaCH1hkyvTGmki2Zkj",
  "key21": "7FvwviuDnEiuCmjPZBQrUAtYKKEdcif1PLwNQ5ysfsNFE6kLgibxvSMeGp6qu8mphnzbbZVV137HHgEnSNEPNGj",
  "key22": "xeiKiJKm2SxF8BcMRGH3GSKc9fhfMuRJPKUgYq2mQgdQCtDUUs2wDgR4D6AoVXVSAU6fRZH5MgzoYsVHDrHkjss",
  "key23": "32nSY6oHBoBHQmaGWXoZEBXeRFocFPtD9sRnAeGoW73gfzwbWw7ek9bhGvUxjdDa9waPunryg7nMwBFfVnkK9uYW",
  "key24": "w4JxpUcgZJYKbTcYxJe7Drw4opkJWWtB3p7xFtBGLkAxUsLctPESFNMV4jwfU7XHBnUE29SKM6N1Vy3iPekpCfN",
  "key25": "3FV3aHbeQxJRFdvuKJAUYkMUHTQKjmnnZyhHZRxAb551ZjUsdhJKw4e6tb5ZNTdrgz7QWze3hwF79Ei9E487bb6o",
  "key26": "3rNJpjkqwkfR8jNemzZZyiYVmWW5GxSreHY4QRBfGQqizzEpNpeBvcrAWEUrPHtMkeivDZ9diFLDL7FV37Q6bVdC",
  "key27": "2phQSmwF3h3uVmZrMWncs8VtbvhbGnQSAxXAGzHegGd2jaxHFPFez1a9k9yxBrzKZjYPojdgp924do5dBy1PJytr",
  "key28": "5n6ktNM1oM5yCyddWFyQSERLYyfYxJk2yXbukNZbgVbM792KTfpjGEN8nZtcsXCvzv1wA2R59CQoRbPRVxxJ3K7T",
  "key29": "55TQewi5enTax324ZrpPiyVfDBFkgebpk1XfN43TCbzPXRqbMJCh5T7gHXQR5p6m7ggjUajhZapFA7mymuYZVNeD",
  "key30": "4jr18j51dDVZMLnZRxCyeG1L3V9tP16iaGtq66RVjpnBXjGPRWsK4PSu9ksLMo6Qj2UM8FqBVyMDWpvA6nvPfxK5",
  "key31": "4ae3TRdBPYvfyEsrJB5xMRCcvTWn67iuNS9tXanTUkEFFpNuTdyzfJsuvXgJSbqBV892NyiG6wjJp6urYEQfLVAW",
  "key32": "2pa4baw3mg6A72xHefrvPjmn2hC97n4zCSHab1VAzQKvzmRkbqABmRmuc64c4PYKBLx1ukuuiHqM1SxaCwhipamX",
  "key33": "AvWbD5DJ5vw5bA55CkcQ5UpFyu5H7kCmfQKyU7VioLMXpSu6jX6xNuCr6XyNmPDQv9oZLEUsLbGXEw4BCSUffRh",
  "key34": "pJW7yLJoPCLT17BTqAARCAFZzh3QqbUs1QMxiPKxYVQsTsZLfekCkX1cJ1m61kvkBpPTfAFwsg8jK3P9q4topJP",
  "key35": "64PQ5g2WkWMq8DWVSetsZFrudMYbYtCgWeeqjwbiGnSbAGdCHnTTkkRKYYKLhkcamfwRaAHJdtd9VHPc9sVc6sMA"
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
