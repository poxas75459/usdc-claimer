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
    "YReQmD9ULP5os2iN6whrzg5MsAkr54SW5V1Gy8CyozcxTckayUWt4SA41QFAsGG7UwYeX451MpEdGE1h6yG4ZSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pobg48PJ4o9Xd6niSzfconCMrbMVx5aAKgrCSuwvndkNSTYoa6VttrSc2qXuLEbVvqzN8sCAhqvHu6nYDfoT9sP",
  "key1": "2bZxDgpzUm4Swx5NeNBoFXJcXyDYrQg2UymdPzRNQDX1xvA2edFMhSrJ3WAWoPfLyyBK1hDZQzeMrJBJcG36mE4L",
  "key2": "5zfiU8QzEmXZtTb1yRGY5j7ntLyFRuPvBUV4f76aR66fN9SYbdJe2PbbxKi2eBRf7yBjVNxwJS1LWu2CyxANCCML",
  "key3": "4EfK8XN4F4mzygQaLxmHQ2QBCeJ54TAgQZg3CuMYYyJEFrH7LUPDy6iNySaNBhY8qL9hvUGzhoKLn8x2MvvL8jA",
  "key4": "FzSE5AFuqYStpBb8AzxarXXvWZNdyGSyUFsx12iPdFSjnzbMMKJLJP6siU9oQeEcAgPP3zqyrenwWZZxuy9q7GK",
  "key5": "5w2YdL3e89qNtJZFtUaas8WjCu2kABSDDg56khGQDHVs1EWdN9szFk1Wk3yAWZkDsk67CPJgS857ZUCRo5EYJ6vP",
  "key6": "8cqCKNVrVM2peh5gPDR2pLXh9a1ZLKac9qFNPgN6L88gEiaZhvnR2LbMwKwxBDHeW8oN5VdG1iWHx2FaZoxdbHT",
  "key7": "395JHfpm9kRncPn8hwP6oWzJTx124ud1kc73SEGRZHqKzufEQBKspA2Zc91nRFkaEoQp3v4brM57s8N4kiivGPBT",
  "key8": "3UzUd2ppoi42BwzjFqtt4zRfNgm3c3UoaTH58ZgewU88sMzuTofe4SjKb57yh9vMnas379zBuExPtqykhGe6ZuDp",
  "key9": "2T8uCj93d6W6jhiXA5rQy7kWoyQZe9Q4GkQfF4uYRbDVPDPiK9E6gCXbch66bodcQ2BjuHYsfN5giHFdAVfXuQQo",
  "key10": "5enwHHSreUzH6FnedeLTMcTghbRbkAJhTS9YHE3wLqLDAod59aqoKxmvQTsL58NHMkpKJBh6MTNRGUDz5eramNpW",
  "key11": "3cGPaxbnAch3pwo4fog6Zn9Mm7V3eDUh23BsD8cpzS7QtdV1bzjvacX9M4NUPaPaynUK9seV49wWuDn1MTduA1RE",
  "key12": "25ty2jzMZGu9x5DTSKzxq5Rg2wwYKEJKzUXkCfWfB5DLDoQNsAwph8chNTSjn1pFsk4f4PxQ4DvHjrCjZRRxoRku",
  "key13": "GdwFdQ2xqRKmdYpnZ5c6eMYsYGLMY245nyJpRfDEG4Fbw7e4hFJpmhREhinEf9HX4xE3NUzNLHGy3dkzMqvZ2Yj",
  "key14": "5ry5wUpbfD24DkHpc6ujn1juDEULgQqH1DdPUjusYz25YaQGjCCxwzfpA36PF5e4wyP4VBS9yiC7KMV7Uwf2YjVe",
  "key15": "4YZzfK8DJnKH9kUv4eTdARcaszMkGPkezbBedqqqTChCweiRhJK3yFC5coFS3F8Am5igZNvhRcH5k3aHm81r974q",
  "key16": "3ctTdcFkPVtzPMMyLBw3Vn337K4KghPkTXG16Z24QkSSAY1exJqgzdxWrk7Deh41J6wkC2257a5AxMvGePAaneEC",
  "key17": "2ntjJqidKEBrLDtuD5eguvibj5xRhYEsJ1s6Gsd8qqMmFhmKMawKfGtnPXiRecmjJvt71BWUKuJxjVVocxggRo2u",
  "key18": "3QDxw95xqEWVWQAoXnSjMtYGtffdehuqxRzBkj1cVv2eTAbJVjdUvzFhmdgaPXDqtXogW3TYCFbviaPCiGxgS3bA",
  "key19": "2bf9LGKM3H48xjWv3GWBuZdsuv6uKyYPGtiQDhaWhfYWtuJ2BBE6j8tJekEY9Lvdr85WoLb2nnM2RhhzJsKdPVKB",
  "key20": "5pKdzazeJaDpnRmbGqNUsKzq7JJCTcNTRLwcwQgrixXDdqmK2keahyNWVN9ivtNpbWmcPBatZsaGCfX1AdXw9qGA",
  "key21": "35E3rSufrdmFGBzayK53ib6q9Bs7aDUn5DyYxa7fKJTHnGRhc3W4TTbmWyAGDC3p6oAVpYusQWVSNqoqUAMYXdpM",
  "key22": "ZYPRLWfMFagQ1VD1SE8Mvd6H7zjsGesFDxs4S9UgKZpyFAYM1rjwV24duZyP4zyf9M9FcVAyzhov5Sg9zdhPTqY",
  "key23": "42hC1hM6sta3CKNvb1W8BfWLLKb8gGEdyDzdEmgUDuDBqTxJVkE2qq1Ji3ZocMjcLUpmvv4FSHbckPYw3LBqezG1",
  "key24": "4jYq7jmDtDPKCNs6Z7pjJ82AbnH4LrQHhxWjAxe1t18hdVqRFAVfphGo4UGDXm4G8TCiDCbFszEKWYFrLE1ipm5h",
  "key25": "38PKrSop7egN2UJZPCCF8GEWg7N9QWnvTNqy2h762Ym1imbZBGo59vgeRGGi6qFENkzdQFR7BSMn9FCVA4pGCU9Q",
  "key26": "51VMsEcqgX541u83TZfMK7iNnuaP6sewzwem4TTgdoqLedASJdM8u8ke9dLr5p8wDvgGVfCCdvY8jeWfJKWekvCy",
  "key27": "3Tjgw4ZPAggM4Z1hp7xdiUaRwfTrUEguWkASv5ziUhJAtazvk2yofdkgbGhhPcTw5svWNF3PiCGUV1j6ARVo9Kuv",
  "key28": "4XPaXFSiaQz7uLV412BkW9Vkc38aNFhcyDtsAJx5cNWfeBxSvb2sR5Hi5anfcBXCSpL73MJzukYmLtEN66ZmaRu1",
  "key29": "45PRo8PxomZs4sbgY1BVg5CewKpioauUVm8USrf1JMKqZSaKJM6pQFsVr4tjpLQ9CYubvnnLXMyBFvDSB7PcFp3R",
  "key30": "34DKrpqb1AiwRQzaTZ14mWeYTXvZ49f3KN7LuApun2gxbvW6Vg8CXdcm8hihaSrMPeySWPP5ig2NiW32H7sT4tvV",
  "key31": "4En4NNKskdwsfJ2oBsPb6Zi45juVArmsNjjymLRW9fhkRsJaEDR3ksPt5yQXHrX1ZWAiFfsBdnbwEdbWZVSaRJKU",
  "key32": "4YssChZrSDGK4HPTTxyjfj58JPE83NkW6nwpUDkrcyaMVneXsiaAJ58HDdigoJSbCofVos2pP9SjcntGYDzhuc6i",
  "key33": "2yE2DhUUatFCpXHuBToiFa4NqF2UJ9vtzmbsfxivmsoaa4WLTxfQNkM2WsD4Azseo8qZ1dvd6UhGK1CR1Vh1dEkv",
  "key34": "44NZDgodJcDcUJrzus1qqARs5QE8LNhwLmS8smXLsd15jcHPKV1Fe6HHzbnqGWQJrJdmUpiqKqGf5B4TB91dGeoa",
  "key35": "3nm3dpAbMiAstqGbSfVD41te6oT2rAHnHURr7pgPQzrGx8vPRgaWzXMvHHCZubYtoiBcMTbuL7rKys8xpLEcnRkq",
  "key36": "2iX3FsW1KqLt8FDDcJyf7bzvw2xmpRXChnDM6aTbGtHfr5nFv7XRXzEkEGMVbGVr2ziy8x4N3zzwdkontAWKB58V",
  "key37": "23N4HNGMoEQtMbCMsyxB7qiHgrTqcstJcGqqvvtBTwtik41v4Wp9JCtXN2CfADAE1qizEhgtUJDqgVYnmLTkRbQR",
  "key38": "3chBuwdWEUMivnr25X2RCzzgJvF1NGxUuNzNmj3Mw1CxC1LDXB6bSGxdVTpRGA7hoJG3GTTa5DhVu661vRBnXFXX",
  "key39": "4Mst9TcMqsef9fEmt491Pqz1JeuZPFfx6nC6bvvnfXmtvX3d51Yb5yaYPHqD72n3LA2AFYaFePStJ34kvQ6urzV4",
  "key40": "4eLkAfRshZ5QgXKn61xe5oUgHFSWWxyWBANGydqnu3L6cZFsomnt3Hr3auiUSsPMAyEDE73MVJKez2J3p4U5Z9Mr",
  "key41": "3bH7er3raD8H212TVnAr5PNHZF978Az5rG3YhpNxDP1xDzsnuzdTcEdvJCWzvz2Ljh6R6EoYbVJv26exLbqDoiJ6",
  "key42": "3b2KUaLY7Nw4epWHczHwaaPajRsm7r8wBm1Wet5Sk1AE7BNQwNJ35zh2btU1PJeWVNxQN3rdeug1jZcXchE9xrTz",
  "key43": "2GfEeTYSp8DruM7pXmefJSojWqN72mew2zh9rx9rZ78TkiG4RgWHVR8nJUjZ3yqeoHmsZVpAkVJZ85onpfYL9jnQ",
  "key44": "3qPr2oYbfXiaaMnRCsT1uvK9xSXzDTDKgu6XwpX3SaxYuFUkTnxdmoMJ57fd1GgKwoqvSsbUhssv3mJf9kyK7Moa",
  "key45": "2TLDnPhSj6CUp8cwKhyA6gU3w9g4vF4DeLtWhcbmQPkoDZ8swJxKMqp17wEzhZiXwFTF29hGKXye7yKxBqJGyAp4"
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
