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
    "rtvhDDXudGzsCuF5cwintnju64dbvzHp7SBV5RUEFrD5WUYmNo9Z5iqQK6JU66uih598B3UBXaqcnU8sV5HWY8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L17waAidtUTupkKHUva8YNaBTZ9VZTu42jiJ8e3mmHXYfRJbh7sEuFfYGmfMoYXoZUZJQnASf7ERaCuo3Q5MtDg",
  "key1": "49thqxGsqPC2cnaZsDaEFokg6CjYdhxHz3rTXqH15B7vwtXCRpbM6SjJLfW9kvj7ueX3WD5B3dzqugwTP91X1fSZ",
  "key2": "4U79SwC6ARK4pYbS4bh83iLVkmfokA2nYDUA78PcU3ru7Hvnv3AUwHBoojRXMMRehGVRnKLymwADVqajagpb9aae",
  "key3": "5QFHyMU5po6aiuRDzXZSwcw19LMVHVGeTt1hP1WBa3k7JikiPuMuA5jUv2yiXn9gFLvQ9L9DbUq7iS7jVnEWAGnm",
  "key4": "3nQ6ThYKLbDs68f6hmvdSbmBN9isPxo9SwKQRAdXiF5LkusRNRbWSeCCCaaB1Rnap5FovyExC8wUHJpWaqFoFkXQ",
  "key5": "22Lbw4b7y1Jc9p5aq2DkJBT6xZFcaFjUFyp5pVxmAWnA1MH5GWC2mp58GvUCCZsnjCV6EFaZGuxvFa76YKZZnF3N",
  "key6": "3Y4tBkcucAV9f4YvxJb6AAPDUkJvuBJ9mrSCmrVzFvY8uDM5HBTag9UShoasvznWUSiLgmkZtBkr6g5fwuZpb54i",
  "key7": "mV5KvH29pocdepR7T24TtAFpgnn4nanwETivBnzBKhsnVWraYaTsbewskFcuVXLEdAKujFhKsfqdth6hdPsM29T",
  "key8": "1niQzzCQqXU2GkYTov5yaaZoDA7d8br5x6FZYzvnfNPdSzUwu7xxdb6sKggA4qRo6vZt3DCHQU1b3h24HcNJcrH",
  "key9": "4rdBjQ75i46BVH2jiUp1HiY8iLRQ5NqGguiVw1vuw56SjJ9v5Zsx2qevZW8bh2drpXAhFF1NpPQrRa9iYKJ2qiWJ",
  "key10": "3vdqeb3TFRt5rnHrGfeo64QgQsbXrLUc2JUhLGJrvFkVpmC4vMHaAAtmraQtEu4jVYGuj8EG6bKzNKWUvbfEGdLb",
  "key11": "a8uCM29AKqviC89hRjeMqxnk8a8Z1brQeWipwEaSYp2yjwsBkStevmY6CxUddhoY1J7XVCRasTqk3rpbiuQ4Dy8",
  "key12": "qmjaSYBiq4QvGuANYY42bWgC4t3UkLxkALkK6C1qiphcpD2bEVvHgz9DLfSup7L79D27re25mRrkhg4HYpHdEmG",
  "key13": "xondaiMtsauGFrGu6rvZjrQs1tWMgVdDA2WVB1WdPWtVgcc6LZiLxZHNgPwFwhmkkqwedWMbCrUUdvwHiFoG7uh",
  "key14": "4vKkbJc9fQT524eydQoYFmgJwoeaeKnXDSGYccZ5xxqe5jBT81voQ8Z5n9SNJ45zCcy5aAgaMjnwhW68q4GRf7Mj",
  "key15": "vgjb9aFswaeRLvbwxabZXBSdbbYEt3BRsxhZfqraVLQuyreBaJRbPhwxcYifsg3YjXYt46Ju3kgb9Y15grnmNAm",
  "key16": "25SMc4ToXjJ1H4GHKCAMiHjhWT9CPBKPDyPkjVCWrqaLVanxkWGy7NRPirUwqb94SeyzoxENp9mMAPfy8Po7vD8T",
  "key17": "W4XP2QeUJnHHiCRJeZYGj41bkLfuSHoMBjrpRqJBhzTnEXHrakjWeCAtW1u2VMuLgf1te9ieXWTGFdrvGRmGWp4",
  "key18": "2Rm2sqmq1WNeEg6kRZtPzNuEKUdGCz7DYNXqJK3aCFJSJEztezTAVwQuzn7C4pnyTaEC9qGjKZz1MXAyP1RMnpoz",
  "key19": "gyQEN3Xye1xKGJDged5C6sGWChmnE81yGmysGj17b9VQheLKsrLAuZzLYMrvwg8wpjTvNp6StJhansyYFL38hck",
  "key20": "46fPizAdnsySCiJc3yVML7crYcz2S5kEEwPtQvX69wVmBCxrGbVpPfC1Fy1bq8VwUaFend2Hk5KPeAgTNVdVgmS3",
  "key21": "3EjQWsiJaNhFKE6gsnnv5UwQd3co1iHsozVfvuvJRekGyeZJbjjxtgoHTTVUv1BdVXpi8BioQkXiUwjhG6ZUXnSj",
  "key22": "TsUbEMNxoX8fD96cV3H1wrxptJWFTtTjCkTn3YNAQwZyeCnbvwAkRq2THSKbQLWxqLBiHjrx7bHY8hAAbSfHGEK",
  "key23": "4f3gCvBWE6AjHSxC87UVuspwccHfgAL49a4WE9Rob3rMApr62igJggkg9fK1TDXFqhCDD5JTExixxNTJked2go5X",
  "key24": "5GuZs7pF6Px7rBmebW7bb8dXejjD5XAHKERMqZQstEt3Cbncbgx6NQGtLGMEDxCB9dyficyELnT1crH2sMHhaZw9",
  "key25": "2Gyi7xDKGCRnHrc9zd4Z4zvi6GxFRs8nkwJW32YThi4rNms1tFew2aPfVxUXiVbyqyPB9z9WpdLC4URGamkLpQBv",
  "key26": "3AKNq59rCa8KEJ7cHFB9oet4NPMracXDgoGTMjb8tWmNPTSBB79fpor8iFH6b8AGBCui7j26AimN9HeCiUqv2BY1",
  "key27": "2oJnhMA7WYqFKhVNtGEEBgXGWfFu3GCte96owFu9jwfDWb2kDeCbwrX6kLmddNmewbst7v1XbCy88xLFpy2fTnZj",
  "key28": "Y3yYvL9A5oCySWm3LCbZuYG8KLJudFtMN7FH3bxUpmP6qqBVinYF8ZCF99bKZS5TK4e2YjqkTd8gRLX1K1rPAoM",
  "key29": "2hg4Gtv3cjecqZuwRNaH1HHodWsXBmMSocdMwWGVu67AXXfUjHQDYnXUVEhSTMZHW8DDzz1vyrmVEzrA7y97SEsA",
  "key30": "5dUHxEoKHCmkN8J6De2EGEgk5apabMGFydLLAXkTUffNzNHHdrJ3LVPrZ8uvtQDgyh5TToM6oDPckvEPTy1DL1Em",
  "key31": "57VW1tATN6YypwwgD8twNRHEJFrq7wW9CpLeru9QEbTcSSFYWnUS6DXyFYv8YkGfgHivodzNgnR81HAeg1LvRvdo",
  "key32": "4WdaeXC75G6zR8LTPGXhSFzE9kW8dKN2WqK5fS3AdKw6ZQyN4Sp2HmCEJCQfjKUvhKsPFArmXAhcg5FG3Fy5gJh5",
  "key33": "4zrunoEMBgL4JSJtjtWuiFZmBtiqcRoj2yu1zDmQDG6Z59MnRRn99aH8KuBy39zxwZKcSXvk2b6NqvaHgb8UCsKc",
  "key34": "2hUhz58H5HfBQ7Vwa59bpxpDRbB6XWCr7Ytoi5ZtZVLZZgVyNR2FtTa2yXU8CXeM5aJBbayzXa5R7txGhuJjrfd2",
  "key35": "4VEkap7tRPdxCkMAw3H4tWF4fXSiQcRSGiCLeQnXoMHjRxGrpfXVLnHJPVaxKnFQbdVsKk6wyTuhrXy8MxxEiV2M",
  "key36": "25KPqNxqKjU4DMaL4SZhFjH2TaHjTRDWzPYrCoBdE7F88Rnip1KHi2xwCXjqAUzZe2Qe1Zk8ZGXPSBVdh9L2H3BQ",
  "key37": "XFHisHAyieuTSbHMGLb5DKSqLQMQ5Mixh7ehjvELw8oaWLyTN6opPFGWemgVwfBLiWvQ6PzeWk2bYEnrqPCYj9c",
  "key38": "4wbK8tg8uByMNUdtbWYZT35du5y8Xt9c2TNRx4WwW178JmrMvm7Y3Fg6rkBe6MbBq2zaLUPxQGEh4c6bosdhNuG9",
  "key39": "3Zh2vmtMrDinNx9Fku5kWQvG5vgFEqSLcWpBnmUj19XxSmBtuHSZQLwxx3Z9ynY7Gw8SWzZUDC1MgvZDqe9rYb6g",
  "key40": "4HffdLsZiAqBTvjtqYEMRy2aqnaoMdr7Q5KcJq9M1kMVZXbuYfEMVzHNPGppc6v31qGX9xMaKgSiDYSxYEdqJSyT",
  "key41": "21qjbqVf9h622ggFcz2yF9XmSYE5tuRU8C4YmN9UGEHioDmaeUKUaHsBpQRWSt8LNQr8CqGuyLCS1xewddMqrzmB",
  "key42": "1xc12M35Go2E3xMMjvU4iuoBVjqp8FoRrTbtddwBJsFrXPx3y8TufPHKc5mEpZDSfPQWztRSBBnu8TVSs1kt4aX"
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
