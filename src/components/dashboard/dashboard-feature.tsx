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
    "5t8DKJND2V6ArvpdnrWX9XvYJm7z7SSBKgXk6a5XXQwaCnsUyLDAZ255iQwDnU7ryZKA42dMLeunKJDfx9q6Pkh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2UMLR4SUhAnSBED4wePqx9GL9uUHXJUZJNR23aruigBSEqrTwDe7e6VLGSac5LJaSTwXU7XdU9RwWVkogSLiMz",
  "key1": "4EKpvEvMCStUuGU1WiA4ZHEtuh6NSqEXq5rqM3MtPpcEHhJCC8ABwDyChZJu7MGMrw3kfUFNH4AT51jYtiSVhWzs",
  "key2": "2qaPRG1NiJH1Zb48zjayit16ZR7UkVLcZDxatjn4Wg94scvDjuu3wc7Sn49TUmP2B3eWu3YL6rfxchcWS3et5xHq",
  "key3": "29RP7YYMsq65CPwzKuz97KZF7c4QRKWs8PqiJGbWPmm9bQYJg8b86fKU9SAGaXvaLVfR8tQorTq54G3VEr5fMZkF",
  "key4": "3tsQAgAeL4FM4kBoUY4DbVpMkWsVHB3nP4A6rRyHzkWV4QrUBUmNF3uP2fdR4MdFutnAj9aDgz2oH4LfNSP1TAJj",
  "key5": "4fUJ3q4AtAi2uG6EGYFSkVBGdXCnL36kohh2vzkXBrR5S7UPd6MuogiodAUDTe4hsPrVaBVn4yzJ8HCaNb2ACUWp",
  "key6": "5wStJHPFjcZ5N6gNz1j9U6jjoRBhEyE3g7men81dUjnE9SHcSQPDeDps8rZQq1mCmRpqYbfGUCv7vbp3G3p4HksT",
  "key7": "3MnjRZm6MXHJo9aZy38ifZPtnQF2j3VUauxjsBjNo43cZsz4ioCgy1ReV4RbnNvoG14jTAtmDgZM95qA8M4DUAN2",
  "key8": "DW9H9bHgCTU7Q5v5eJNZk9E2VKsbxsDqvfZfK4X7zGKnhFP7ez7G3u7EsbCcrN2RXRS8cqdqKkzTXHPXC61Jev9",
  "key9": "BPNF7X3VvdrAY1vSmfVFJhMrJYzpnueyDkVE4D9DVwM7xcMKZajhQ5TxjjczmgNMHSH9ecxfgJToJw85YZrkqvn",
  "key10": "oHwzmvjCiC7zqDY7geTo9fKn5jiiXJtgHBm6L8U2XbXnrDR7H4nXmp7WV6ciynjMnThmkbZPvfpqWjfrDVNFzbE",
  "key11": "AQ5R1T95ykB8GT7V4QAb2Hx2QUm2CKnEVb2LqNqvQCzjE3UjTHPdGRGHUUcZ62yqr8pDdCYEUENCkC9kEG14Vh9",
  "key12": "2QHDHrzvwZ4kQJuV32pGa3FVjzWZ1poiowy5NBJi4xMoETrZhVSte3w86zZ4u7g43tYsyxr4yvuwrGKWNgzuiZ8",
  "key13": "478CXGNhDjH7fsndXTpYmPR8cAcUShe3PDY4nXJt1YZ9uLWKPS4TnrZuut5CBBmkXDBAbU9LWw1bdWEzmnUcRw1P",
  "key14": "5EmQPMAJLX68DuyWx4KUAYbS9wkvKxKbKDdfNFP1BQSASEagC8ABypbh2zMQE9ByZatHYPAEvnVaGDBYtrMxpTb",
  "key15": "5tFbgQx1ZGn1rNYBXjq7ZxnEsT9qzhuYAALZAi4XofQihmxx3X7V4xewWzG7GcdHAYew5LySiVc66gnmUdEaGz3T",
  "key16": "5Xmy87ZaSbYBpFTvmp5PkKqv3wWkwk1VgfgQDx9uS53K8YF7JDBCHi8qNeDsH1cni4AgDZMuYtohkgj4YYzqG1ga",
  "key17": "3HBnswfpDq3bStedwWszmFdZJmBF4ygDnX7GtaV1XvAeFBZtMZsST8JHxrH5gS1dRZCCJcMg8c6hJgZ8VmcdE67t",
  "key18": "4vYrdZ6zMWyxdBh1aoyoZES1yeVnMoXU8WawEsGTGRPJgEwQUogyEu3dEGFF6xr8PxQc5kdLZo61EjFLXzBrkyUc",
  "key19": "28sXjw7hDHMYguyfFvPX5tVE4GmpVcRAS9P763Q5AemSiQjSizJXNusW8ustg1EmTz3sgT5J7VYj3NTcjeh83HtK",
  "key20": "c79jkBynhh9Asp3T9AzkF4eejEar1ap2WBD2AyYqbXQVz6RaUyDCGr2C8kpFqPzbuZNbBkeats3Q58QdYBYj6Q5",
  "key21": "3VzB3CqnQCEkHd48B4o5N19aBQrJMEpHr6NAXQNWEu9pcgn8QTo6gPsp1Lq2oHAGC8cYjT428S7Wrj7Hvh4Y295Y",
  "key22": "RWCBFVbe9oewdfLwCWq3LU49WzSwLrM9EoaEeYdZLQd9414LpMeSm8PE2bbbcCrSzzqWBn82Ws6HuRGAMnBho4y",
  "key23": "4WUpUtUw42rWM5c4C87ywUw5B3HAnuMuXSXr9Skf4X7eEZRrfzGfDEghZkPtTJ7B11tC2EXnHe5GTxHeeqpoqEZB",
  "key24": "2sDQDd4RJULbTDN2fMFX28qyvL4LNWqiY9ReLpiH6Cb2KSU7z8vZ1kdN1aTBLvG2kj35Dmrwm8p98owY9wpRxoYr",
  "key25": "5ATKhrGa9t67upGda1ZFGbMp7CAeczvbT3UncD38Q6Hz96zZrJp6ZjgzrJFGkpYeLQQoR3F1XZhR3Ps5QdoKyuDj",
  "key26": "22LmYCKBPHDjKZVgrvougRoEv78iGyH8Tqr8coM62mLpX18ca98sBfiTf3T54S2wfoMd3aH91f3rMCx9mRz2Pv4s",
  "key27": "4vtNi34XNfxpMb5m7cMtxHmdyE4dXJzWy9WDWVPn1VqDETQrNDCyHyYEptUpYynuj3HWiYPKQnGXTe5N8abzsF4D",
  "key28": "58p379opHEuYToZAV75EZmN9LBpzshYWzjCYGST6ZguzopknSMTr6hQdMEL567LBpk2kVWU78NA8F8LmZhLimsbM",
  "key29": "4nyXuFv1diQ74mEbHf6E49djBYuNT7ZjS739haykMKVvhSoPyL5tgifY286oWgtSXU9X5BhGV4GWnbQ8RTpL56wD",
  "key30": "4weVHfY4uK2vgvXetYtNAVmbvFCqXZ4GFTRg4ZeNJzCZNvaq7goHrTBQY1vVF7s55qTf7bBmxQ91zgMDb1B6DLFi",
  "key31": "NSHwDMQxYxmGJj9HVtZLyeAo4yP8CKx8fmvVct81Ng3XXYrBzpfsfAqDaBjzooUhMbgDS6X3ny73bBgPp4ZukXe",
  "key32": "3HujZ4CVGfVcVm1Lc8K7eHuGwHjTzTWZrtdYJUu1w5RstjroJQmKjP1xqpVd8MC5pJVFzT1yaXPoth6tvqTW2ggU",
  "key33": "64kAp7GHsEmXPkwisTk1P4kwMEttiaxsa6hEGB6yEGycKv5em9Cs6hTvykKeWjHJgUu6o9MedrZxhb4ZKeBbB63G",
  "key34": "2VBVkY1zu9KaGbQssryzNJHhhkM1a7K32zE2PaJjro8Po3f4NWJa6JnKyNZf2wmc3LX7pwhKidknZ59pcT9K4PCP",
  "key35": "piwyYJMSWv2Rtt7tM22uPssEUG4N3ZjPgNVsHHnjNjDPWWn5kfsndkZy55G1KLZqeLKH4jkUwfRskbRMoL6BHhR",
  "key36": "5LsEAXuN5C7QDesvLHjSJXtbUJicV8eh6kj8dtW7wx3yBzjucxiVHr5W4vvEFzRqdRuasPeZ7xNudDU4wSekUevK",
  "key37": "4fshwyYdxhet4T4b9tJ3dc4wMtdRdacViytJJAvQ7od1kCV2wbPKdqKyDU7Xer5Gg8xwDzozvmjqT8m1uozfXutW",
  "key38": "3fyF1Fkwpbx5h3R2xqqwb9xUi9V5EdSBxf1WSdLdDb6dgoLvAM8R9iuwVxNFrxgrUFdbUCjz3tSdrrUw8Nizamh1",
  "key39": "26NaZczeT637UAKHADkXNiPJ1dyeTCeLo16WsxFw6mbAAyrH6EvpfMfds4YMGVnL7n2TMw2UdTLjoNifEJxHBNr4",
  "key40": "2pg8ggfEVwgnruZRfD4ymHQsNU3HT6jCwBi7n3Ymo19jPu3kxTWHK4uA4CAoKtPE4jU5sKYq3tA22THd5hgAk1dH",
  "key41": "4j5Dsw8TAzwrVNSrMsWCKR3Jruf3ydptBogwM7HBNQXp3QSKYmYjehhZdWDYx5dL7hxh8PkNSbncDKTMoiAqMJ6q",
  "key42": "4uEaVRo9knN5tEwjkYJodBXV8VbyrC2gbPi6XgKsm7G2LUtQ5GayMgiU7QpxJ21Zk1wSV6AMun3c1NbFGiCyVeB3",
  "key43": "3vKSbHeUomDuAuZdYzcqAvxsBQscGwtzJCD3YFU3zGWoakuyesFjgKo2kcmVitH4kLBDj85USjyrHPoePpdzEvPs",
  "key44": "38t3yikrtsUPmmxKbPkZDWJpH3e9SnvqZWbmzagJcsDrBN9y35fsRVXY88zovRq74Hvh3yPCqV46C3GrmdajfQJD",
  "key45": "3NVTpia2EmXuVpmuarJ2nNBuSZu1EgJAhLXLacatPk7iXkGf5Mgq9X4qCMnfY4Rppm8KFecd6SjPBPyjLHYc8ecG",
  "key46": "5RaACuQcfX5Fze4sKfaq3zWhhefrgGgPgaaZbNwwZMXmM8VPnpGj6XpC54N6tgGCKo4KhH2DXeHG2EC9hNkz3Jvy",
  "key47": "4oG9w57KKnWgCMTUcuMx7ukF22ra9c1zH494xZDvwpwfTg9kQhWHCzA9w8DSjpZKbjQpHo3bwku3e3e5JH5S3uwM",
  "key48": "ZPEUtR9naxEtpLh4iVLPSSyMpzm1k1zk16iV5okhjGKz4zJgqWLDLRzBHmbacuXkfkHdxh5VDUEBJfYFeA3BwVP",
  "key49": "5ccA4i6CX3cMngBTcHXSdC7JQG5B5dAXzZ2opSbqTusdFhffuy8JdUJjV6PAAcHfacyHgj8E6j2hHqZxWgFwDzBe"
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
