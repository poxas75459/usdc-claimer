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
    "4MHV93Jq3T7d2FXtnPo3BYHiJ9o4nGsyu1RKfn2ZSWBZAdG1sxszR7mjv7chH19jeg4kPA8KUs9xu1AatKHbYuAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMmByGeBrJyfhKzR2FmGzDeCL8r2y4vuKWjeU5pEp2YUShn5VoMUDgwxriXShL5jbcDF7ptQNVUHdwq2izour7Q",
  "key1": "4J2aKUSbEGm6brJim9JT8RDHZ5LdYYGQB7QLTTj59bU72TciaCTeWUzK6quSPpVrGb8nFcpYAsRZzrB9Q65iZ4tF",
  "key2": "3gKhULXmbYVjifAnwVYeuRKL4mk8dP9PUCoVUVpZ6tTRn4r1YJewEiqDQtEvkYjEDxGEncj1KUPGXBRgpnjgMcov",
  "key3": "4dH58BGLpLAMdV1YfLnoeJeSpoy9GmX1fwnvcsgmRihbkfg4g119pKXm5QpkuebzFXuDY1wQ7bPz85WVXAXNMkan",
  "key4": "4MxtngjvscH6XHcMk5HLWod16zJrj3kBuZQieAF1tPo5ExpkdLNBnpAAhoQtZ52s9vR8T2SoDvEB1nP49ZBgSrLB",
  "key5": "519z45gvGz8qgGAhntbvyxAsq5RgTomTxhgdy338No1MJdBubRwDbteVXGrpLpWFd6FJS6op7bAAa7ZUrqgiBXto",
  "key6": "4Uvs52NEzEXXioMMb9DDrsTaqkVkkjFxVoBPDP54XWKgzki1cvZaqXhGYpswegghgCyRcGAjYLK5i1sfWdvz4v3m",
  "key7": "4z6kQYpnWqU75bSQKc1wjb6PSDiQ3VhM4CmLf6w1gfLbcLcMmFkRKXeQDpLyvoNRm7L9kqjZroetNmALmzbEcLKu",
  "key8": "5dFqLDvTD3umwGZsedjtWPVJ7oJGxP3NbvWvFzsKDxpgzhH1a6bHcuzooJe16SGTcb5ci1EmhGZ499DgvinAtzNW",
  "key9": "NVwjGtF7hZLyF2FdTiKtf7ndnQJn2QaKbVv2k6kdtKswf98E81cDwWjtHC9imoeocF7FSihfwP8H8HBzeshyeUT",
  "key10": "PPSDJUhgsa6yKGuc9WeWVY7YXBDLbrdhX4K3EvA7ygqksPCu8nYXTio4vQZ6ttjxZQtG6ZsXX399TbqqX86jEpC",
  "key11": "3amkEMqEHFFdomCBmV29fZq9D8vhGu2yziCaUtiUgDbtqXavE78RKXyyXBqqCScTnf13MTpPW5G8YYWcB1NMxVik",
  "key12": "2LRypunnVEoBSg4K6norKc5izwXfZN7RRGDwSKLeKsPxqQsAqcwr6qbYCuCyk2rip74q1aKcSazx1fmMoFYckovw",
  "key13": "3aXtwiZi386XHbCSZE5DURmJT1QJGqHWCc1BtRP7rL2xQp5v59zUETY7usnUAa4C1PHLgrtwqLkkX8o1aBEpNr7m",
  "key14": "4DPDJH24nDbC9coiECcT9fsrqMbZAPsJYoco3cA9oEo27bR7TBozT6o3nMDLSgKnx9r5m7wFize3kwktNetcU5hh",
  "key15": "5h1LVrLZR4P9HR9ubCdYWxS7Fff5mDkomHLwAu6ddGZh4VAJ2UH6s3Si9rZB59SxnxQGeiEQuMkfwnMnwt4fs9Ab",
  "key16": "4FCyZvhRy4wPumXzhS88awz5VcmQfoZk4VVSgRXGHHYGGQxryHiRofUWThUfbCQKJvxVFUAXAgLJTvnES5ZDReCy",
  "key17": "65b4uY2iZ2wkL9cyk7mDDNuVWzcBZwjJEQbgZdiR3ce8VGBbBcCqPxMRbM6Ho1r87guZuAPAxSAYd6unbYuzVgJ",
  "key18": "y1NrB6wEFV6ByXms2USwVxETDder7sGB84fsD5VQPwhuPfK6UtvaUqqstLkTmg7MbzukLC4shAzwJpLNPpyuFBF",
  "key19": "4syJuXNqKrNZTN8tYKZXbd8MkeV87gVmCosz5qKMTmXEuRtBiSKiHw6jvQad3TrszovjpGkrbaYdu6BEptQ1ycKi",
  "key20": "4d6kWAqmrLTaRqSETZTzZHPYxJ3s34PBfNuDpu7QKTcoih4LPSxic6kPYvJPwET1E7Q3778cgcZPBJZcwCrRZ6y4",
  "key21": "5SXZCSpEGKWn7tXt8ByZaMEwLerYtj7FHzytuKKEP9SWNHA5Mg2iyWsF5Dj8wHpAnZEa5ciM8JFcGg1pMHpQ4YDo",
  "key22": "39baqHAKUaaiNtdYtqYmKSbs7KntWgyJmqdqhQ48aULy6YdqzfG9tNWGq6bkTUQS8DBZb4AxKudaLBBh8nzL83hs",
  "key23": "5H1BCqJQ8qVn61HShcAZ2z2iWG6sZ1wfbjBD2PbULKiVTbsP4eoT6SdPdUgtt8qq5bvE81NnrUEasuF6BpnoURQX",
  "key24": "3FEviDRx4NtqjSjhVdiG6AFwZoXYjjzvZwtGzbd8hLRBSBnjjSxWZVDrrJc2ju5FEgEbSYbNqpm15UZBmmRrXsR9",
  "key25": "45cV4H45BVFuqmx6bDsftTYi2dWMhK5FbCcFmKYiKy1HePR9mPGUbinxZtXNhEho9tjKifivXv4HWirCLyz5bUsy",
  "key26": "26397g2P3xBN3aMmKAXEZjuuBaPqpz2tz7ZSXXFoGxHYYirXmkZt2wXhjRSd2G3ERuiPeLLRF64R2UMjQNQcFkMf",
  "key27": "X4v9P7sGobmbYDy6cfd7JUEp4ukn6wc6YrWyjfESbU7iwo4k4ELKeXQ81cRT5fjQZKNHzeSTc5YQDetvvoNnAZz",
  "key28": "4WwUSCigG5wswCBCcy9iCPK5oVfVF6HLZgXAzrQi5RCDzN6bgXSx7z584qMum7wYRXhtENhxvnL8mKBgcTqmW1zb",
  "key29": "ZiT6naPCyomNwft6iLvaHmXcfSiDHJJ5whTdjQHfX8BKC45JnRfYZFWy9MEdx6RNZhVKbQc4nbfPPgm6dXkj1Jm"
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
