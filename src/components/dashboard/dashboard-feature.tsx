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
    "4eDp79cZ6oVVdgviFEKMxgeyT6fikS2XhxCBZ6rAapQ8tVH3BSEcmAJ86L29JmTS7qHfKy6AuQx6URfFL6fDdvqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umkUr7sm4A1JfXyvvG66tinZE3hjch821d5ZUzNAWSk7cKtCQDxBJSrFrw32LEHZmYyFpDqfTvnEhv9PAhga1Mz",
  "key1": "3TTAigFgTJzRAyfpNMhizZHnuXAgfjxBgrGhZ558YbcpwFviZ9JYoBWC4EdVb1omwd1vo38icj93ihY8YV5wbanR",
  "key2": "66uVmdvtXCMDtTRYCWcZ6CU19rtayDFoSWQSsBHPWZiqmaMnYeYDZwgpa1nPTAXowhREQe6Xi34BWdShGwUKhNJd",
  "key3": "yMuygqh3FY91DieqTuNL3Ur8RrSHBG5KGtnoVCkAbkFR5Rymtuf6fWg5ZG7DWQK44AsXDHacy8NWVH4rmzNcoqQ",
  "key4": "Yneekxkvo6PT194htcyfNv28uXuWgwb4krckL6KiYCEyG63cJ8tk7D9GTFfVNboVLstcqSH1A6L2QdRnnPTs3kk",
  "key5": "4CWHGqboAowFVk2yMphLsiDErP2Codmy9jyVmiCnWAD5wmATjcfw5LxqYUmNuUuefhwM2DscSTMqDU4ffoVUMtCA",
  "key6": "2BT2Agc9jrfXTU7QMZrs6cUtReKxFwvQZRiunSY8L1WyCUY47B1xNYyUpZrVT9s7qHV3QLrrVw6EK2Je86fG1ntC",
  "key7": "5FevEnUtQq2Exn6Ue8NSj2AKbjj5vExG4PjKxHrFp4fef4FLC2CkUbcfMa3u7Bx5EfN52WqUm4YwEaQwfUNXRyYo",
  "key8": "84VmFGkGsgfPctHVVJjwJ588WxQy6KWy7oeQDxz4byJNfPYScEd7ucJ1DjzxfVYagLYYqHBxwBPWALD16ntoTMi",
  "key9": "3ytFHoKKpL63Uwq8bsVBabog5jkG8Q1Ya6KLt8zdk1YDB9A4qEz9VMZyVvBYAc8hsgyyWRK3zL8DWrqCfkKefEAR",
  "key10": "2tbv3Jj3dmkv9H9uSgjPEHvySrxjQnewQdDk1hc3QvweLQEW8issN1tFX3krazZY2wbyJpqSNhk3eUcU47fPu1Y8",
  "key11": "3AQU1YohN38ZZFyGJVE8zh8MwgeM928QAmGqafBfepXRij6CpfnkHwNZxQWZ7pn8SHW7BwJrVgBSARb6ac16LrKM",
  "key12": "3MP7fVZJCbMPxVf34DniPfPvi4cGswn41V997hBoi36EmRdpduL3U6BTrwP1JhDJQbRWdHS3iDtyx6PAKhgrQAgi",
  "key13": "vcnFXiKuzKSCNG4L53X5JmP6Ad8PDu2sLmP5ggTt4E7hFy95ShvtG7bCyHT1zszwcGYw96njHYPGkCcW1qJdkAc",
  "key14": "2Mc8Dne6miHxNXeEcrotbZ4goqbaQ42Eqj411tRv6VBTA855fwhV9mkw1aWzmgsxL5jKDY5U8hnapREvwR3vHyu5",
  "key15": "4YQAqGdfhPyqASRmBbSW59Hi1HSCyDGfHfcnTdqMG2n7UgrUpVSLotbCaPD7MAgjVeoXSbFrjJ64RgkxM98XKgok",
  "key16": "5ZfLbC1NMFK64rBDUBZrEj5U99nidG5A9rm1mCzzq3WsH7aaVJTMUAT4tdceeZQcrQ7ATVs2hBX8Di3Gczp4xkoS",
  "key17": "4sF2NCQChKZw7KoDtHitKdH9vKgpvNNg3S1wMv755HTaGZNqctKkBxJzUdtB6JyuxusY3BMfLmPsKsTdy5sQgTfL",
  "key18": "5575uUo45bBHud8vvGkguAatUCQpWDDXhEMFURaJPXchRW2iRyRCtViBCjkMryCDdPFBZfus3rtVuEXDEG2epfKg",
  "key19": "2foPKDtvyVA7GujCL3VrRfuyFBaU5Cne6TeC7RsApYEaNitQXUKPTuLtbGwZii18n5i9Cv42Z8fC1BGUmVh9uXEH",
  "key20": "47CbNvrSoYhTTfRTGcRC9pWQLbduWDn7tN6uRAMJFf5WoyungBp41CSc3VhVeZZPB7xtcg1qxis9T7TCnE51ZJzz",
  "key21": "64oaFakJTYjyFfkyvvPH1M766Mdogi4hrfK1qYdhpVvPG1m7JRs2VMEJcpbbJBpotQcYyjUDDNeFR3bdTQQfxb5r",
  "key22": "4xxfPQcuGXF3jVZW9V1YxbCEkXsVvjbevWJbaX7CJqBQriNf1CXU743pCAHkGagmaMvEPJ7tc2UPgVwSTEpWWJrc",
  "key23": "2USGPjiDYDVU5T24AUtrFn2ehYJxuPv5Pe3v84eweB5sqJtQzpQUq3XyHd9KCaqU1oQ5oE62NT7nkbEJdvW2BCRu",
  "key24": "4Cwp3V79E7anjSB6A1RTswNMdsVQ1Mp4ErEWinkdDraXLxHAxUV9BnzMmN5PRNadTiACjdZYtad8YBAxnyfYDKtb",
  "key25": "2tjZuruZDeDNn7vNBmqHCCfDoRziAodtQf7JZnNphfSwXMbxaeiFwsQwdLuXqFytPdNNwMUjn9cRpfqoJ6EpSB7a",
  "key26": "tnGDAM1wBBCivt5edA85LZ4cnDEpLkPPfMmg1a4oqQHuhbLF1ThamfdyuRHxWWtAaEtjh281QuMsV8y1GNsjYN8",
  "key27": "4RZuYQgoGFAykJUEFndLcRyY7gexo761CazMjs9oMKe2J5LLbC7AZku24rzDx1hbQ7QJQNdfapb5aFBsYTCYo8mZ",
  "key28": "R1w2U59xGv4XoBt7Wip18DCc8QZZaXev8Aiwd9NrzFRETeEXowgDy23o5qRJtaw4p1QiTQDviBgkawJ9vYaWou9",
  "key29": "4ZqDyUXgEEofEQ4HrMD5xuMzsNrPBuJFBsMHbYdKBQHg8XWytFejRtnLiNYjQ3iRVRbyRDDs8oLhNu3HHurnnJTZ",
  "key30": "3qUtu2HnQbHbcJWkXPApUe3aS92ismUudnfNvibG7oreP9SvSAcLRrfnRmYQz7VQSeeQqtpmqvNv3GZP1tcp2N5x",
  "key31": "4FnoadsUfuzQSf75kS8KaCnsn2v6xDCCj5Wje6F5GJwKeTGg6G1UEAnNcP1kqFPxG1pNdheTSBo47oi5GfBr7mhK",
  "key32": "5v78rbf663TRCjynqCH6xwnmxb4QUrjfe3ADcRi2YxXXpA6SH3ZgbgYzHhVtZdTkaRjr8dqcd1FyKzFHpsmt7kYE",
  "key33": "2BBb5KtarjACBTF6cGiYLJEKjrSY85ruWSo3WBTMGyAE45hsrJEbPTBLFxdfwucA8WEs5KbhsFv5Qo8iyQiHvxuT",
  "key34": "4ppcmkTWyT12r5eicssMs3FZ6nDXVTqEmiXEjdnaCcQLbNNAFWo95YSVgXaomyDRqSVjMaJ9HVbiE3onyYrADAan"
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
