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
    "2JL16EkVK8duuLwQ2B3jNFstKbqbyhRdbU1ukAmgfVMkqx9LHLQhYBzwHgkWY6ZbmQGR9jqL63PyPN8Pctvb7F8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14KGHWYeNTSRqrXW4ZydhRYJMMDZ3y5vXXnkGcCpWDrbb2AoBuF56JmbghzyH88uhyAgKLafeTh9ux2GHreKGvH",
  "key1": "5Y2rkx8zonzkVWQTT2PjbtWiTN6dqw65A3CGhKbDSSjRhCgdeSRbYUHpUsnXTKhV5xJw4SwbDQ3dak5uoGFG9eJS",
  "key2": "4zr5uY8hqMVtPiHRzYyHZMQLMzJ1kcfy3sVJd2yWsrYimW2MJwVoBnS23D5mNQfsyN5xUv4YWZHKA6SmzJSfJfqz",
  "key3": "44sEXQ5UFSTvGoZ76QpTJEWhpe8KNwWp862nWSoJo3MGu8o68FbJrmvv75ArixWjQc6C8Zm3JcAhTe1rYjG3Lo8B",
  "key4": "4wxzN3vMxb3sPDNN9NEwXf9BbjEg2DUvexMMw2mdm8cRKLcAC3kHSZZZ2WZH6wSncVw9QTh2vXsLBj8mbA6Q9ZKa",
  "key5": "3sxaDKkmWuwuU1Y7etuwReXScGYStqHzTUnD18ELVHYCkm1Ev7Ru7Em3t4E6exDnyYkPw57gAVht4kFuJZNPjhkQ",
  "key6": "LHEzk3DNE99jYtmXtKh3ZfmLPxp4hKobaA2S9t4d5sqLQ3wJyVqXegmjJ4peZCcVMn8eJr3G3EPCwN4hq8pSQwx",
  "key7": "3t5ntmPcpJDp97HeumZL9mxANzGtWpw5joYC442HvWAoxR9C6YRdsXMSnsJ1NS42GiNwjNW4ctmA7SYj9CkDRAWk",
  "key8": "3GAJDudh5jkhAWEMsHPrxgTyaeRNGKAZvZm5FFkvFBCAiraczeCPRz587VdaQ1Sztje73F8NBDWdBrqkBgYp81Tg",
  "key9": "4152mYAH5sSCNyEAhDgH1T1qaXo2rHpZixB8g9ZDu9vxUBuJGb8WFTe3xyPCy3NKx5HjAkAqf4LXCCbefqrgGuts",
  "key10": "479W43ihzJfxuJ74k1ibngoLU7FhPBEtZsnRAwphQ8Lc6SLrtZJUDZZtpKSpZkhKsPxCu8HiUt7tSJAU5UWXhH5z",
  "key11": "2wpvcaRYga8Zrd5iPYQFpjJJ2MPK7xrEp17uipKaxu1FhbdLvonmAHTzUXj6rvddr8phoe9c5T3Rn1qrWYW98TQV",
  "key12": "4ap8WMPiJiZdZzTzFsHydc9ziUC2RKtZdSeE2zryfUgM5TV7fF6JPDU3GVMvjbryK9DiLd3QTAyv2T4nTx4WneZp",
  "key13": "2QZssZCh4uAVysh1PoMXAh7MnzuzzDYBxBDgyvYmvbQcR4m6wpwusXJdUjo6LKSH24b5ZAefACHBiT8fay8EKiSB",
  "key14": "37RjxiL1URnANziyJnJCAfDx95JoDjitjAtpJW7SAewf2kzzR4qmB2t5xtnM8igQPp4YFbf9rgeN7Mg9a78we5du",
  "key15": "2tWVkLizahNiDTFMiX3fVfeo4SpZ8u5Htu4uWMKsCNZ2jTsLtrtMwaCCpfta3KHHKKRgk1dYCzCKpPKub2FmS2jW",
  "key16": "3hUSxt95w3EYyxpVJYRFPENrk8HGJmceqP4KShs1vH2Rfa2m9uonZtpCEzDyMfk4n8DdLi5t7sv85SmNQWMfMoUf",
  "key17": "3G7Zcyg2Do3PBVmQdPuftRzyDaBwTDa2t1ngocejLHT6qRi9yENzTqNBBddPRv5A7mCHqLGCHDhjws6sDaCShfN1",
  "key18": "2z1vJn9DBYVM8GBxseXXFNfKzRKCpewjjQc4Xn1BKT3Wenn1KsJJbySqZDXxSDjeAwMKt5LWovxnKG8LLJfqXfoG",
  "key19": "3ifNeLGHsR6AmkogTNjAUBx3M3gyurVSzXXLHVNyQwEpnT3BdyBMcbVY5CSykZBQAXqhj7GDT79xkxvePzBDoDZg",
  "key20": "Zzh1RTVgsDXVMa8xPcPRKwj6MqB2YGqRsFksXLMYQBsTiPjYWjc6zzApSMaHy3iejBoSNvPJ8oEcCM5XsPP8SoB",
  "key21": "3jJfXi8si7G6kEPnPsHtL6XZCs3XhFbo1NQfqmZQrUTKMUdQfH6JvwV9jeEAkwDQNg9QumhjsDDnCKDWRnWg4F4i",
  "key22": "57rFz3R4FJ2cuddKSGHph5pPEXYfLD5pDeqfQR41q49TRiqbpmgEMdQway1mVtXZgrqJLFCCtHhwKKBGrfVzELbK",
  "key23": "3kf6JCDtXnzNvgMh57EgsQMT1U5nqL4kad4XZDdh82eMRiKQezGNBc1Pd1QTAeWo6F1xUwe8rRHkcoCB1oGqcvUA",
  "key24": "Vxd6kpe19XT4FDqooy4LJrgMcJg6K2YioGgdkvzPojo4uFcckNG6btp61TU6BEKsVE38d988yKN1v7JzT8KiSnw",
  "key25": "4PX85ecZEg8KrRZsCX7v9jsBoYhRd5s1Z2FNFmQ6HqasFe1wiLQmhXdyLEKAfhbrsNf5kyj58KPcAPCVHexrchtk",
  "key26": "5mKFwfEWARgqrA8WE3sdedU6FCasF48Hh1i2PmmdzSj45mwCVbQ7gAyTRgezdzGiTQGvitN6Dt13uQ4hx2HmuaSA",
  "key27": "VrSYb4Bj91wvbL77vRGtiSpyviSC44CABbwgxZFLbbe4n8pt8KCJPbwG1NPGqskVBYV3JoB8Lvo7Z2phzxKLzQY",
  "key28": "ZufRf6hqt27drJMJFjfJ1JS8LbWUyGf8kqHuhvEFde56NsxpBxiHgrQMYaE4Pr3YgvBiq7zb7X7dspSrtVSjJ8s",
  "key29": "9iem1WCWUEc5g2HG6xH2ZnDGsynYYcQqp9ziMEeRcHQFbugoGbRJbretNPPgdQm4sKWUMjNTSzgE5HG8osAh5qn",
  "key30": "5rvo8oA72tnu51gjNYrBuaXuoSdkvZ5wdKY4WfhwHzXPiQS9qJCd1PCrnvEHCtBGtT1kVzGsdqQhN5kPYKmDKmLG",
  "key31": "3ZpYoXqH7wn7WihRH7PtbnJ8Zsmtn6Jpbj7QzvZcMf36p63H2D1AMHPPNkA38qJfHMFtvsdUcNXLTgEsW9wbMZ3t",
  "key32": "48zMzStH4RJNUD7dyrEcaVY4732h6f2Jmco5hUyjzAqiRB6uVgdjDMS8mBaxx4TRBSCPjndUtH2j8Q9zyuymEHdc",
  "key33": "5m6j5FFqHRVbghR7bDC67mQzTzt6ZqFCjwQCDj6sqPQEvcWJq5Lk3ty2oxFJY1eqQUaCDvB7ChkqNvd6QKXXFRiP"
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
