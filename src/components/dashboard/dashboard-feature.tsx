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
    "3ZGcva1G3ihs2esvVXB8Pop3Y9GYXbn34ww1K1fk9g2E5RRbRs7UK3rYYEZStcKQDowPUoqPTZyQs7iobQpgctWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUKcJs1AtB6QB2QJzX46nShW9sC5yAWmGfqRfbD1hG8LaWw2yfAGvhWjhwtcxpjy18kdd2NBFne1sGsd3bNP16w",
  "key1": "3V3MdRYcXpNJAWPU9L79ZtkMoVZa7W4e1oLk4RBRcg1yuhNsRUB1yB7odxQqdDuSHBhZLverb7U5iFqtA1tkUUGe",
  "key2": "4T99CYLu4s2PJYvpPvc7p546aD4DaDPNXdgC7Zn72754RzCbuCYgDgkqAAiZ8B7uR4YF3oHyRxNhYePzjmDeZZ2j",
  "key3": "5tFsaBCi7hrsbgps42TrDTQagmS9QAga8egobAe5vjUYbNQLxvqLGY8wR61UZ36Sd42KVGqNen8TdG9D8oS2zcLA",
  "key4": "NFkE4dwMsfKtY7EHHUTKW9GGQRmJxa1s3ruER5hRVzNJ3LvAYV2opCJcy3JBzKmBCDj8BD8kkWt8FiDna95SYsD",
  "key5": "3zPFwaQYvqPsZGyz74av2KqAuw7Aisk3LoQXHKuM7vx4HA9zaQx3PMpk6Dk2AGKP6DEkhBJZA4nC2mADD47VmLFk",
  "key6": "4HQjXGJWZiA5WNX2FNYZU6fDcobVGaMcy9KbCqCPQrJykcUCYtW5r4ja3rfvZGdEwo995j1dSAABUfuxBXK8HjLR",
  "key7": "3Yx7kzUwLU7wzFwJwq7fESaQaDdsgrYG3nrWfkLemLtDN8kunHQHySGTpLii1QCky8Afevqn4rrnWMq5v7U9XVwG",
  "key8": "Kvop8XhdhmYFicxrEYaXYCuPeZXRPmH2Ur3WdSMy68ik6jKQuSEZxSAxWBPPgzs4vUSY6JuGjJzqgDFSnfim6UP",
  "key9": "3KXF5CKRYD3ZyQr7Ez19Yg4aeXa75S7YaxG78wxs1RaYZjQwBgmgDgBqCoqCK5kp5S3WFKz6oMDEzcW1hMMt5i5",
  "key10": "2GcDFUZE8sLr4MyrFHTyACL1YXbCLabUKQLBRmE9bayt8yLCcENxuw6Z6Di8Era4pUq7XLVeTM2ftPUXwHqVmhHV",
  "key11": "2pYHxQq3rD7g8CwoMc9D5edsAEWnUGd1nCBGnpcTrJiZAkRxrSnpS63U9y37dahHXLzTY7wsCdh41ZspnbDLSXgJ",
  "key12": "3rFGz1a1Ch8G8kWWteusVCp8J1fVUQ7hFEgFqhZkxGtQzwNYon19wKAeXQqr4LSWDL3LfuNPz54d3yBKrVmm8zsG",
  "key13": "5zFnD9CK1Lf7rHrVZH1urG7bTAEdGxHNiH4zvcwtYRk2yHkX63Ks1iJ7HEwsKHFo1t6ybu6YL3t35Dh632toFa8b",
  "key14": "5bguNBfr65Ne6w3oTr6JrrygxpTb8YKuynR6HMWodkU6Grf1QCFjceKHKtLrQj4qxMBBhAUDFpAGiyeCffsiGder",
  "key15": "d5ec4PehpvV7nmTEbwekNvCHL3S4JkF3RPMjBG2niLZQPp2b8DJ1bcnnoWpTT9dxuKF672MQCDPHo4aAmGQhCEF",
  "key16": "4B4wtsEnPNLB56rHo6MHms2rXhYb54QnRJA6ogpVBjdYPsArG5Qskrijsxmj6qt3s8JcudBJwQJM8LSMTF99koi1",
  "key17": "brqaQEP4PfDrqr97sgnmndgFRovbSnpqdAkbYBo9gsYbcdQ8r3pVrj2h99TKmMiYGv93FjYsQayUW1hVGnvRXxE",
  "key18": "zHZDWXN7G6SZwUaXhVupmfjFVFN14MKxrJRhnm6Q4AnbkoBsQtiE4wuMXwtJa4QtdLUDbcDsiMTd4GBt7G4AGrL",
  "key19": "LXuatinZSevoaPbpzyurS4BbTpCXC476hdY4XLAxQvoGrWDGyQK6AVxY18QzzaCxuxEre3Rj4KWCVnA45amqm9y",
  "key20": "xwevDvSxxThZQzLvzUPC8tN6tY5aGyXvkzS15FohCwyV9QbdZ4zFhnsZYBtSwZDCiVGQpj1fFuUrjbyZhN5eKms",
  "key21": "yWQzZJjNfseLMxRC4TkCfRjFpm1LVpYrgRWcH2oMH4qqDPLWbXE9bjawtuM7NwjxKvY1UdEfqNxxe5ady6Rdw26",
  "key22": "5QsSr8M38T8Dj8vcmLHNc1SwQtayPMvfdNHHaP8Qijdyn7cWxNDXeT8yCyMQqPDEWaJd3NQL7qgZfPvoEmBDeUZn",
  "key23": "4GTBeii2yBzhh6Xew8Ci7ZH6NyTihGS1YfQvEsCXDPxgnHduSaTEzMSLNVJALLcwF5fy2rDR8sSrrgaBEfeeqGPY",
  "key24": "2MWxyZhBBtsPnK6J22ofmbhx5tMomD36Tgb3e6Cg5rcNH1uNgnXeNPt3xRzpz1o8uSrj1orStk4JTuc3JRasNAQ7",
  "key25": "47eWZPEK4RSeryz9JpEYXcbd3cxrF6RYM4yNCrhXUaxvmEh7SShiB9kfaDFh83PNUEndPuPA4cHnNYUsUVErzoYa",
  "key26": "5jM2JiuxY2cmphMqoUfU46wfQ6bUeqJzU6aVXHLxTunpEK9mjzSRZ2nuPGAec7CSjF2thHwLtgYcqVcM81G8ReLg",
  "key27": "3proBG33ZHKY3sr3dc1LihuA4YDAweoDA7somxKqNZYwphLgqho5bVKnyUV844AVdukAHeevPKRbVysPaywnu8v7",
  "key28": "r8gdKLDVNVKPg6inMDZ3fnyjoQqTAWGs3i4n1ToUryGE47mUXDkj2i6SGAmpBMvNNvgdR5bDHWpYfWuU9zGdQhd",
  "key29": "2UvwSiB3mG2YJszTnux3KNxp2pXFdAn67G3cjpwf2mmw53v6MVjqxPjkrXv1RrmYohBrc6p5gjYRMihxHvMTRffJ",
  "key30": "5eKZagNMZQdPakfRYV2b1pUhue58mTCseMivPjgkBGSpgWWtmYXXhkpBX2UiEg2xCYNzHSKMbvgewVWTBBG8Edjo",
  "key31": "4GNcdsTFCeFL9WhaEPQbpUAAc1vYXNeSWFsbJp9QtULv78T8jEy65ei3ua2dmvDUn9DJSELMD6SQNppJqHLvxvS5",
  "key32": "4uBm3LugBQDX8pm8KW5Am26xkfHexdveUgB4R9THXWAhR8CDQmBfeSazJUxDKLXJiiXGjYnjL4d9WP8tnjtUe6np",
  "key33": "5bCJHokkYyCEEdPd5C6jmShEvXm4CXajiJXpVuXgxdosm278Vd32ySQz6Rdt8pKfMWqN5ZTyH4FQsunAqDKW7sbA",
  "key34": "4phqfxkWRxuCGsnALjLJf2BCnUCEBfQ7qDNWmKCAHD9bA4q2t8nT5LMsNGYAF43EQVPnVLPHgjfNKrskEWsjKTip",
  "key35": "8oLChQ2prYDEPzdReSncqeDAZG4fJS63bSjSU3KYGDL836TWCt4qojJ1xGpoKroYpmejS2qejkmTJef1n447TAC",
  "key36": "2vrpUxcs892z5Tgt5hdiZ3qHbgQ3Nisn4mojPbEux2yQas9KWX96CKro3YwaSXYuUAgomusoQ3Vwh3aLjgx6hs6L",
  "key37": "38zcKYkdAsuXwpUCtDGSwDBAxx12h17sds2PebZmw99racd2ek7TbX2TJzyykrrrR7eP17GJCYqP2yK5T6i26bqF",
  "key38": "mcP7RGu5Q2fdAaCtmvKgzb8Tsvk9Hv3VCmqmdM1b9zUk7oQ2CUU8AnJc6gKP7KcCPsdYwCxBhWf92i9cUog6BmV",
  "key39": "4GhkLfW6DYAxkQfpbxm8weHWTpKwiJBjRVew2qzT68iCqpRaZU8pcU2PKXuLwDpzBKyzUQfoKhLBn2EBCxqJaAgA",
  "key40": "3qVkjntsMgU6rmp2DYj3UD8otoAkp3hBddwi8pDzawqXnHXZBRNDXx9hYen39LYabUjRhypznM7oPQbRxVy4xt7p",
  "key41": "5x6GYGztERAdgxyj1FD19na6H3hYgUdbp1QpdHDSbaYr6rTFwpTSpYAt6oT5K7DiPTFvCYvmWuvvkefWSyXm57gP",
  "key42": "Lbp34icTBuh7DyghA139HqK12BtWz53drv7Ltuzix3Ynk9KKwW3N6JNjXWd66TBjGAv5Lsra5tSRnm2M6aRg69e"
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
