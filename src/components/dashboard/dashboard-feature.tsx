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
    "5N1rev7LxEbd89ZRUJ4cSnEn7WPCQtVjqJDE5njxxeBo5oDgTvud5iKZSJkGhUqiFQ98Znao89souvHH3Yd4jSYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTLruLPTinvnFRbx5JmeWSpJko61AqqwnVqk1W67xZzvqzeF1k9V2vmVPnJoaKbq8XJRoSrz66KWA3YdXmpTDyM",
  "key1": "48ZCav1cCdbAseppGjHnVXy2atghjzhVChn3G7PqP2zPQ4RXexFPQNYJRz9DcvDUNU1iDCwQt7B259km2GEP74JH",
  "key2": "24dJjVBNv5GMsjU1eYfmJD2TyKpD3PHrkQd8r52effEA74fQwYNS2zrNEh1j4QFRu38zgkM4S4fsW9xwJP4fFD5y",
  "key3": "4mGuaqJtMTXZ93Vd7FRWRBPVZ4QUU5FJ7dZPAp8TkE2kjqYYFsVAZiHwcrNEcwGcXfG9EEMVJ136wsDAzX14tLzq",
  "key4": "37vojWm2iPX3XzFFAziJCkk2wpZBrg3Ax7bWx4CXkG7ds5QGUdjNWsQLXRgRyNQhve4JtA7gZGRomDFBWDiuDHAN",
  "key5": "E447DstBhd1GB1t7qQMQvuUgAhu3haPNLySY2M11AGVkxAQVUyfCPynkHejGEDtVPjXUqwHRpV3KRQ61bSHi5K5",
  "key6": "4RtoSQ8LqkdJuhVTBqXFUtQpi9RreSwPwUcUJwXTv1i1SygGmq1GLSaikvjaUVB1CoVQtbsKNT9TrRsvjNZDnX1z",
  "key7": "3QgTnmdnrUHqpYZSUVzyGVzyzyUTp5U5eMDrfSvTQL6LGBHFBacozkLGsFuXjyaiv557LsvQyrA3d9Zkk82S6urh",
  "key8": "wEKaVcX6vPrWx5SATGT6Z8QiK7aAHFdPdcYQvai7mHkQhRzwjNgvKcxUchm6vgZpHtjtaF5eZouDJz5DgDDJj6G",
  "key9": "2M8RcsBdVHdCJBfMPm7jZnmoZ7ARbdQHJ4EuEL98WyWqcJWFg5rZxzWGYqe6cVqnv5GMyQYj4eECNNJ32JXHz9Xv",
  "key10": "4dmCfsvq1cudYuWJwJz2H5reLkQVCMLT6sQbzj4cGja7AT1J5MLPxoCP43YRCs3GrCpUGnPwyZtP3CM55WSXy2r7",
  "key11": "bg2juhkthhGYjkW5KhTFZCgqR5A4r4SJuT6vedKS8wJWde7DTKWJ9gMVQSUK4UF9kXQBUiXg5uKNjLoV912W9jc",
  "key12": "2puhcpsb28nMxrRYyPhjoX5M7cHETfFCMjLNZWgQoFwxqfGHshRBSYRhKmq3DCvMBQhMAY65xgT9yEbjk7dkGrkc",
  "key13": "3DUs39oJ4F6MLSYGzocMrpXuUWF7qSXg6ZJG5VPgeNdrsWxs1jsoZzcVGWrtSNJRDxgDg3xaZuP9bWstY7t3VkTf",
  "key14": "4EF5njaC9xBLCtBM4kcQzxiCVahDJEaRiWqoC8sRqA4h92SBHHuaaugvxj1SYxSFVJuPt2CDmniMSe6NLQgdYjS3",
  "key15": "MTHxVpyL2U8isimYKtVpoHRVA26o4H4sy8cqGVs84eSxbU1BLfn8mchXY1EMdY2hprdnJYvuNYhv1kCpKHZ9tFS",
  "key16": "2g3yW2EugZQUkC4M7U4qBocmReRAGPqPgKdJMa2mS1T1KSAyTwC6UDhVGov7CusLNwwsKXPRjdLamXNjmYjBZ9r6",
  "key17": "44k5NK1WmBEKW8Hc11BU9bw9R8AWXSbKbypDrXSpUiEfSzwVSiwtNwi4Fye94D4bkJj43gaJUTWEfasJBxGZFMXt",
  "key18": "z4H8p57DijkZjUmvyVCAUUP257LeEB6AyxjyvNe9FmG28jJgu7S61haALMbzBnVPRWjisWqK6Jact1XMC5eUZ6B",
  "key19": "4GkK4xqtG7K2D6CWA21UoWK2WFayxxwxwUVGpfvZMgXjfpLygQ4VtEyFaCTVSw7DGzq7JzBuZ7LjZQeygKNJLoJa",
  "key20": "3gQEqd1XZzT1dkFvevX7fYhzvhybW6Nyxb6rh7PAXeUb1g1gfgYFspPTuXei7uHfXwas2PtP1UMLUBHQXg1E7w6R",
  "key21": "36YamAiuSqmZZZSQH5dhif4GxsQtQQZUjmokPtvYmgWUcrsum7YXns1NW7CEHEPNuHoPVK67LZL4L1KnoYAehmsD",
  "key22": "41hwKZWEkFfQMEwwj3XFCkmDQRTpPMRTH9jwSYAu9QW1p56z23SGmXKtdAjUVGLVneeFP4FqV3Kiz9NL7WhWL1US",
  "key23": "4ekmCMuq1t19k6aEPuWcswdf34zBcSGNpF1bebNSRKL5Z5nSw7vUCjJtzZqVSyUV5FyPjD7SgutFVhrPNRPn9GwY",
  "key24": "3ZRuCsMGoxCYjrzkETDQRFxCzagTvPFrd4Rz4jo5Axm5PqK6yfL79dMAJPzPuadWfCwU2gtvTZN1zYsrC6tZXruf",
  "key25": "2DfCVnSJNBz4btPehFEwueHUVKiorgh95VVxoXstndDgbiBL9puZq5S8TEozZpNzfdftPqSz8RGPoFt46Rwajr5u",
  "key26": "3M4Dka35u8X968DRyvUXnHK945HExKvPBzHpGomXQmSZX22u7cfaf936c5awj5sZSnP6DiUuBds5L59DkrvvwFx7",
  "key27": "2xK7G8ZK7NupQxR6scpJ6yNpyaztqLZzpDtvmMzAqa7gP4t3VApnZHq8RqcxfdVANAc6qZSh2R7rhex7VXLujeVD",
  "key28": "3CEnyTQ9ydBxDYsicaUCzvKKg3qeJRmvNSiMvVHHMEReS7zGZiDT9jQfQorqsHvLZq7JQpAFthiHJswHVEvN1uV1",
  "key29": "2FbfU1CTYgrVGXfsr6Wuf8vWV3NXSipzCik53fQNwakGQqMDgAG69jqydU5ouQcyxRa58iWLUACYeXEdThHmmJgs",
  "key30": "2rpcv6x3nv6p9tLxV1VPLpe2fJfdW4At98NNKEVzbk3Zzj3oLH8ygMpo8v4vAW1EwFVeeGJnXxim7ozMZNHUXqu3",
  "key31": "HsfSL9MYz7vhXvVKpXBkvR3g7t6PAEtSibuAR7nHW4Abse7zExnnZtG8mR4aN2JFzpQ9KpvAfdGpXo6oZtMncdF"
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
