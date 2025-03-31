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
    "4DWpVr3SQUBwBUjhLxJCnSMEo1Sv5H5U6ekziFJvnKM7gMGrZ1NKHHFnNFTFnAFfcNUicLGU8kbaPfJY8NuNiPVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vyb1cH62i1Nhj8Ptq7F1f29S1vda4prpXYqPw4WXsCjgsnTbqA4qXVaKCYR5L2KRAwz5coKcazuH7Xy8NQJ7EU8",
  "key1": "3d5DyeNifChpSm6KRFFcMJBhZyCcvc8cZJHHu1u9P8faTrAcR8eRg2WsFxb8HSCyjfi4DZ8mRgtUNC2HADb1ECeB",
  "key2": "27fvairtPMpU2BzxV86J6ssievRczsxa5aXyjoJhv4PQu15PL5dzT5k4Uv9juUxkzgJf6mYHwEpghRodZFsmzjnw",
  "key3": "3fwLJVubJeZkx1QFnP1NLBD5kZiRdD7W7QBNVKcNwY8wccHfLLRBNjXXmwrYyAX1K1EoH6mZ9AaP1b841kTB2Kho",
  "key4": "5jAXxegHTKWSvqezeofDjfaxp8F9WC5MxctXeSBUtazo6RhCpQBgWjSxGZSmnPfMJcDSiQ8ZvH4qFDsQ2Paemszz",
  "key5": "LyscJUfQVvHYh96MHUHjQvSibwXwjfWwC9NhnSijRWtEfer5ruYuaJJiycpy52vtsKbR8UQsX6M2bbAvDJ8Bjoy",
  "key6": "4omDvRhpbwFLDS65X7j643bXTN7cHQVFe8ZkGZorhG8Zaj6MWNQfmXNZ553m5UPk2VSQ4XZ6yDYfyMkpknj8CABv",
  "key7": "5XfwhFvN37aXij69npY5TunUs9xAh6X2FHndAVFepMfmey1n3HwUsZadNudFujmDkcpt8P8TiED1ARnYt6oSaFx3",
  "key8": "tfmNk5RHmmgAP412FmUxFGPUhnYdHyDZJHRDoGm8xmxmqqdU4KCR82T6hXe9fB76vskm2cvM1rcC9pYx8Vb8jed",
  "key9": "4NP9JygFE6d3W9DsYLjVRjiWNgYHnW6VzZT6fr9nuQ4GDpFizAWjaf873388vRooLftBMhEDaADa16hUP2fTuda",
  "key10": "3oVXj7DYzSs8PcJMsws6z3L5CoGEMKuWWFcPjarQKsrPgdX9rsdYnnCKeLwbNdkFWFJBWprkpr4gci4yz8UpTmhj",
  "key11": "5NaWt5D1BcGF4UDsRMQwxkqkL5Yr9RyvBmgxSNTYxKhUV4Qdb557fDJw2ideW3nB5hGm1U2ZikPAAH1WuV263tkj",
  "key12": "3Yyzse52wMcBJCbM46rNBdrtqEajfjAbyv9P88LjJ3MQFLbGJpf12kQ3PpsZZQ7wp1zG7MEMx5KyTHb7Bpugvpsz",
  "key13": "2jZazq7F8aoPGdX8NyjQVmyBH3zzk8cwaiWtVUvufhWcBN8vKD6mDqkSdxZcyPHsFdw7nfjqYqVoySpDKyhHQz3s",
  "key14": "yKue1y3BwTZpcWPshv91vXkCWDDat8By7RJteQnJSZmpEE24bwQzQsgVQY9gnY3i5iXE7akuqrPKCQpR4x5Ykih",
  "key15": "4Cj6KaRHKCNyz516AGZHgrnkiVG5a12RHLi5uJx625QXfF2a3EGXRfZ1u6sU8m1aR1zM6MTnX86PjH7QExUdGuMK",
  "key16": "3jGhDHaue5sQBUGGQxQNV5oS7BJXBEvY5PMUs3GWq8TwRYXA7b6L8WFrskpQXjYkSQoNkscewq3m5Tb5wsdnWrCh",
  "key17": "5ypaRabpney3uZJ64L1i1MLvGjLvbdCt4j7DCh9wpKzvsrCnkz4udNs1ogbcyopCCXXFYX6azRP67it7kBL9oo9N",
  "key18": "3aA9jXPmHga4uAdzk9gb8EG19H93XBwuiT4faP6sBHgKfQokTAUT2v4tCmKBTUDPTCJCuhWppk6aFbaqocAXx3Co",
  "key19": "2oqwDbZE9b9SGETc6fmJikhRRxqMAksiKnWm6ndvnikXMPm7jYqsiWyrmmKARUiGmsth5FN7PAEx3QXu6V91pnyd",
  "key20": "5qTdsho5RfiMWE5WoU7T5LTjuZHH8YtNzbw2YV6H1pRetXG5vgpcEfcbygKX9Kok9ERD6Ja95FAezuFLur84Km74",
  "key21": "AxDgztJEm6MASBV8SUWWWUz3R2JqhULFDECcEbAUzCcUGySyiqR5KWeeHXTRECv5cA1mx2FWUGJ2K9JdRisK97f",
  "key22": "2aydgwhJmcUqXZLFq8S7TEV6GENMFv6Yz9ZkBHXJCcibTLD4QMXkwShfAaW9kYeZM7tdQHuGo8uBMH2hxSXaVj48",
  "key23": "4uVtH9arWji52qd5TrSzFEBu3w5BY4C8crVrigbSz4AJ3UsHx4MffPAcFWQUNdKd45NXrNTv2MBUMsBFkQ62txDe",
  "key24": "4bVnDdALuZMg3UuUXyfQZZTqGWNSHq4xHHduNrVomU8CKtrw18Lo7gSmsqhF17cWesmWqX3oMYedg8YYjfr5huBp",
  "key25": "5Y5SBpNueFNLLkXCeJKn8DJZa69Ku1PawKAuMFXtHkYKtNuNTKzrXVqK5D9PRfud4FQ3wE1WqtTQzgi1X3wZvBEX",
  "key26": "4xHEUB6MRTeYwPas9QQ3Po5GU5sGuKWomPF6ZNjGYYzNyvACsw92pPBdMTEyUpza5bR9x1gGuqne3SyfJFF8U4qn",
  "key27": "xWnBLNmjG7wPPJqgnojzdE9VLtexoGbWGHqAkkB9pKi8nUpZ7buxHuV1wKLG7z93eCXfQy8e2V2bHQ4Jna519Pi",
  "key28": "VE6W8mhpbPAcPhW7BT2sgLNN1FGTi2inZCcKkwhFzqcyqmCyksf3mUf2qgLQNcgihUydEKkzKduaHQz6U3z5yP5",
  "key29": "V57ZGKgj9YqNdnFzTYoUQUYCJpXLyRhGsJ3evUGooLbkLW7T5yzJ1jWXbwwfXCVNEuNz6qRpjjiYVwFxacXQRkh",
  "key30": "64os3ZLRRihzcne6ovaPRiE8sTyt2wEkpSxqxv5GAdiXoBdBu2w3UNLvrxPqHThJs64n3R1X7we9Nyfr5S13cjEH",
  "key31": "2SuhaJgQqD7Es2bQ8cgzA9Nh9fGqZT9mN5o6riySxUTBcBueUCpGdSr4qZWmWVemXmZ8gECrRkeefuVy4KDhaNKg",
  "key32": "jWFrJ9tpb4cCphWKijoxJA8KhgfKJSphYn9b7ZG9FZqhT83ntJJ3rcGZEtTRoaESqruJ1hJzAizxTMjeVzjUDAR",
  "key33": "2zkwWZV5iYRBX7DMWNtDjtwf8Lc8xF4YBRBEYWHxzBcuykyD4bt1xdABiUTsDzFd22nBPo3KCwGWZvjs4BtUHTh3",
  "key34": "2Y9g9amQjWqgR9YQ2URfRXc3tLRFUTwp3QMb5bLAkJ6ss4oRJ7nxijU2sa5LV1afs47iH5Mbf3Yq2VVDHMyZwXmm",
  "key35": "5dLNQy6TpqomqQS9K3ao4cUugZbS1mryCGaoY2QVqzAfJj9d4nvYnCFXD1LfwsEWbXfC7hdJ6SwMgSWu1rJcYhEm",
  "key36": "hR2Hx7TwJvaeD2cw2XFLsJn3QVPzGJea93BkbLoM9RhJjj5rYZv3L6gKPXrxa81kvYuFQi1Dc8rX8EQ9Ay7bpnH",
  "key37": "28zivXrvijefYJu4LpaK7zk3xfpRFSWmhVGSrBfrUNWTJLKofEzE7G8LVHBSNKa3Vj9VfoNb5jhzikX6LBCbsDje",
  "key38": "4JyEEBmpEsMthPYW41syT5U3G3DSmcja7c25PRebdWMwkjJ5987uD5FnyPbkqmBE46N9WQUiXtTc72eaD9sLqE4W",
  "key39": "5PPUVdBuDFxCzaTpiyoXTqoDEhChWUAfaSYBpB2oXXTuYr1Tg98mvZMb4gETTsVDD7e8ZWv7qrg4raiZm5TXzEhW",
  "key40": "Eqyb2aWZxefpRugCriS6Cz8BVhTCCXHE8NzbmGjmyddJtatijMup5fxavXNBepahnMmdhVYXdUDknkuL3dQQSbF",
  "key41": "2hMDY48LDc5sKbSbTPyZX9rQ2JjfYuKt1x9H5hU9tNvsyxufVGpTEAt18EadTzNQRMJ3JZhyLAUjBxQeUhn75dJK"
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
