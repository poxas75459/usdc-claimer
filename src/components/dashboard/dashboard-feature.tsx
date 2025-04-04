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
    "2RwRVTzckTmykPtny6h43YfuayLifAqRvF6P8nBv6gzdoASBFQ3QCWmZcd5EZtvHfxjxXgpDsb7XvBNm9eAXddYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k43D2FVTvimvSPFPZ7XiVWSwhCtCF31WiTZ8Tpjf5bf863uWXwpexxRGapMcKt4LUfvGZ5erNr1qY7U7Pyg3fqH",
  "key1": "2nLCA1fE85EaqCyJEbsSgf8gnathrdKGRV8U9Ud42oanoeq9jeKpP9cyE12YsfWwXrqibdmPqCGEqGwpmWyp7Gb4",
  "key2": "34E8WNJ6jdqrGCFPTGMQNQtgdMB2fpMmro9L6U8eQiXzK6spLieaguHLauCgG5B9emriGLKkpCrwQ1apvCAFKyKC",
  "key3": "3VRFRp7KfgoZ62S6kyVAjkXc6GUp3sX2ZSB2GjzHHWyEK1z1F2AN2fAqicuN75xbJRjg4ypAqTXKwxaxnt7fk3xq",
  "key4": "ZALzY8TEi659wbLaX49wQw5g2SBBSAtDqtRWU2J4ebD1WJmmu3h9khdWSMpYR4UBLwDSLvGXAu1WccV6kuxjMGv",
  "key5": "4yjrf6vbEzNQKRNyMHMj3SqrDBf2S32amvrBpsEz3ny9CwWp5FPLrMdq7ymwT4XGfDgAaKLNfHoaVG1pmvvV19L4",
  "key6": "4dvoKnchwJYLjfRUK7JysxowTwEnqNfm1wHzyNTKrpyzC9oqfPvdz988UVWaoXCbo3NbLaFd6gQKutgsgxAYfc9D",
  "key7": "khHgfGhi4hfkgoMpCE3Zpqx69bE5qxeiw4eSpBZuGGSXr9Cz7nNptNnk76Gtq6MzSs79P5iEoy3TaQ26tg3c2FF",
  "key8": "1x1LYTyEfVe6dfjewH4YEtkHraALomShtyifE5tZDB4z6t3SoAPRR7K3cSnUh9iTYrNEcLUWpzno1RBcMSVi5yU",
  "key9": "5xfUuRXkWZcaRptS5R8uWCFxguEfepPbkQDtBJnqj9EcgjKm1jUVFppFWoegEhS5TJQy25S3t1VRfjVex97kWagn",
  "key10": "MRSMR6VN98Y2Ev6HSqqXQ6JMaiA3yDfpZgJE4oyx16YdvHmvbebHzEDck9bUfESJdtDhM1LaPp4WbNodS7SSpMT",
  "key11": "556TPA5k3pB1eq2ANLvrHJGUgEs9WLVRYJJoLbepXCK26yLRDstenmxwhdpCh83ZMdXPPxgccEDUQgwWyuuaYnNY",
  "key12": "4b8Zra8x31z7JVYwMEwtbGFfBSY42uEXsWJdN2uxKkBKAuT1PcgYJqQbHsBFcMowdux2UWyNBnqro3x1jT3mzRFJ",
  "key13": "5jfwE3k1SAkFNW8nSHxNtTwzwMU35Rs3hFqcTwpM54yJGKYBkcK7U7o54bGvbEBaWsSKR16XLhyztNmz2612b9Pv",
  "key14": "xZ1jxQQxN79nUMxyN54E3Pu5uawUdFYtTiVbJpUytB9WkhdC2iZr68BUHAi5dnS7Y4ttmk4RtosYQ7yhG8ra69h",
  "key15": "5PbZFdEayFrHfGZaUFU8eY2etVQ6MDTfebeR8JvFegdB85RNi8LMmBTkunvTx3eaEgRKNTPhaLBZo14Kn54fCk4m",
  "key16": "EDHYgVm7MeJTrTcMryc6ERok6Vb9osN4pbCRcQWdhmXZ758bogbxVXvzVu3fn9Cey5wKT7L4RWA3v4AJSnRELM4",
  "key17": "2aAPTCYa7S49ajd8ZYzo4VH5EdBA9SWJ4seifZUjRD7y8sCHabyntpSKUAZH6s2Rr7xDxDmK2VkoFCFgvbenwLWd",
  "key18": "4m7Md6Ruk7kUGgPtu3BDKVcxVsJZ1ZUJbUU1Pg6U6DDc44MAyjnhnivUqJjq3cJsQjeoX6193zukm5GfNxnRJK6d",
  "key19": "ygFa4jA29PDTK98gRpYATGUtqKL9zzunMoWDwpebzJ4Cu6cc7jBgZ2nuK8d5QLUStLeGm8sWd59PWfAaAvH16sj",
  "key20": "6ovMwsL3pHTJs3nymtckEkNyjRVpHMVZCex7iTjRErkY2NsecQ5sUcxWshXLBEvgnaPXQD7X9tfwJHNsMmv9ymv",
  "key21": "4XJdDi5hErhtPpjYpaT6aN7R6RzdfFrVJeM2PjaXeeiqGd8QqCmtPycYDTwSo3rMn2rpnVnDHksxJf4ExnSf3z1F",
  "key22": "5D8KYmKby6oTDzjrPD47MbN5Wstm1CswN861YzEPVZQyiAogktpo6b3nuwZDD3TEauXkSq9s1enhyAXmWtqur9ye",
  "key23": "5xQN5icEMEd8N6BSLyLfQvazYQWhpxJw2Wa4HdK83ARovEAsRtPiAoBYr8JTFhxVquL8WRdGxAZSb8XoYb1cjjam",
  "key24": "5FtRvbUqBjcbmZPTfhSPkdFbuTPPxtSn5tj6GEjCRGPM1LXQqHb3uMiLxehcicP4WYNeF57xr9y6JowjC3RBZhbv",
  "key25": "5Bs7BjFnqB1vBeA1YhCaA7tugkrxKGMibiLGT2iSEMdCxDaeP45kT7CqTCQcmQSZBdDFu8Q42cja6XUsoH6vMV4E",
  "key26": "3WSZtDEVdZjLCBejZpjbPuW8Pycff1bNMNR5zeBtwUyzoSTpHvd6Hq26pm2FEeNW31ZFgf1Q3T8NRaVtkfpgcRa6",
  "key27": "27GT7z6vjHbpZ3niXkzxMeEe51eAxzYsu4mVt7VEtQaj2ReUgEMQtHFbTrnPqz8m4b1k1P8tMcwywsMFcHMWywpt",
  "key28": "2yuomgNLS2ry6DUq2UpnpPMt2iTHrnHZowFGSKKY36PizTgxgzQtMWNskKTsQ5BnSY2MvKuX5PNcKatQDQG6DTuj",
  "key29": "57nt5qqgw7YxYsW3GunEETWxmbAdZpop9tadh6fuMb7j6RsNo5g8Sn7RxWHsF1mXoLmDzec3N5o2EUt3RyCRsXdn",
  "key30": "55LtjYF4Hp2fNZkhXEeeaL4WiconT7QeBuafa15C9Jkt6CstdJDiz33Cs2uYRzFPMv5vdKGdKfuzkuhRmUMqiZfK"
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
