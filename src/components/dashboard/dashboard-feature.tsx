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
    "5973geR1ArXwESP9a1JuQrsVrWWpHao1SkgiE49WMq56s9QPDREfAFTdduSTQ9goqChH5xigb5AXvh1nNA6zqfm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L48m78yA3Bqc5zvnnjN8BkC5sEy2gBedvXaQEmww1ub2cib4DrGEYZjj9A36NZSqFkPdzUgmt456HPvc68CTdmf",
  "key1": "XK878NC9wqcxWNueW8geRcQkgNsehYrz19AebpYgQVzJnogRqYurW9kX8wyxgXpBKr9FC6pBgdkQa55MZYaZwwU",
  "key2": "2ihiRn4kmnUvDh3uAo4UeVz926E8tMuDs8LCWn9ZFcD2AxR5jRdCMe46hEdP6P8v8E1aNvy47iiT5ttS45Sj5TAt",
  "key3": "45kBYTYYmoBt8c6MnCjBvYTiLC5UJX4RDbSKTphty9LGETiaec7CGopqtcb3J5Yk3qVnYjvZ1NREwcsCkwaKzQmG",
  "key4": "4GnEsWjV62hwrzJ1f5rjfC7Sk7vs5bR8Bx22zENhuJnLotKQxoBk8vovuZFf6nSiEETJ7DU8QdDfwFWVkzTtCony",
  "key5": "2aiYi6bLP527BBswhoDdtiUxDWDY2pJHbqgWFXBvt2sWuuyJM8VPZJ9CQKc1FycGiTXniZ5cNKEUMg1gzoaP8mES",
  "key6": "4AYX1WUSGB2rdnS5sDZ74BnbyftVXhKepwbcjptRdbBFRssE838VHZgeW8PXYUBErB7KNku7iQnj9FwsbeWVPBe2",
  "key7": "hZW6A8EzqE2nkDduDCJrTPbNTBj7HhntcUM4g3hy7mnaKryTAHHUUkDSy9n25WNW9a5Moxg3Hqz6QssdESsGV4Z",
  "key8": "3k1n7S3e1vYsuZDw4kkXjKmhUJgc3gwcazMWUEFLdWeUhxytF6D2vjg6myLu5idSqFVRfBLigyRxQ2nfDARCWGjY",
  "key9": "35rZW6btRJVMQNXnpSye77pbXQHqkrMYM3xn6o9Sxn35KvJcYNTKFyqo8djgFL1ATLVZpjdjnSKkwoQpmbRS318b",
  "key10": "4S6YwLaDXvSZcBSXchpXadFzkPuC7ST98K9N3dPgeMhQpW2bbrgbv7i39w4RzKZebRHrYAj5v3ktTKnRpLTpQGmJ",
  "key11": "5dFPp4sMUs9FHHYoMLjhkhMofrCd1cmNoCA3bvyrFSBsMY7TaMAEBQ3KuG7zq4AGEomvNJbhRwPTaDoNNo2U4e1p",
  "key12": "2eAtM9eNpdiagFs6BtogvBnTbCJq9QJYCcaAsaCsk8FnmwsvzKvhjoSUUcK8hdf1BSezSrc7LAQpDPiUaX4TBX1g",
  "key13": "Gwkj1tgbgYCNWppVeNRaXmRA2yPTaYmkdWo24wWsmR9uZ82r5EquCDifn6dnWYUgegRE5vvwMFuxG18PRGZeWki",
  "key14": "5CgnLN4A956PXk7yfCnfpYJyivgjxSCTYe7cuCzutAxJKVfs8N1prcFfCTQxK5CBCBzZqDDT7bWj2cQke3q3wWJ3",
  "key15": "54yMVUH9ACe1Q1PGsDYKRXdo7T9VnUjq9qpVLn1JsnJqtUJmNasM5LFrzamumdxeY7mH5TBjLPkKLGTTsRwHd7c5",
  "key16": "4F5HKV8tk4YEL9VUsb4pPd4uhzatCk28aicGvzBr5LTkzgvPRVUxrkzFia46wiAsJChDmQFZEnwB1Jpxzjho6nPz",
  "key17": "jd4qWZmVNm55yePou1Pk1L3Mz8T8zvZQYMJSdsm5TaU6mD22RUcY8vwKdUwPjT1Jcx8ZNf4SmG6xanGfaEDL4o8",
  "key18": "5cxeVEMLXU8yVPXf2dvVx1FPu1b5ZRzTNVDrNkiakF2ayHGn4zASPZTjmUeJLa9KkvaSm1xap3aZAiAgcbd6RZSQ",
  "key19": "5bcaeZ1UaaG8nMoQKpqSHhaCVBNwPQrYLKogZxtfvdMgTdGXabUM5fs24YryNGX7SfLLXFuNUu2D5iY8g4dFaLPr",
  "key20": "SyutzMYbD2o7CQmH6C6aLzYifb1A7ecofpe9ptHzLSpdh56qGXC314t14Wiyfu7YvGqm4fi3kyr6XQpq72QsctT",
  "key21": "4sdJFsFUpQAG846uK6UUkLxf1rHUFNdnpgRQu4ZzWvquBsACUCdsZ5RgVYFfgrfVZfD9PM4EXRdzegcM47yKRjC3",
  "key22": "2qNXxqLUtX24JkMyYfPLr5id6XQC5GaaMY6YYidEzYXYfiSV7nWgyKJxTF97ZyiN7wETPnbyHHtR7LWbtbCiRVor",
  "key23": "4cDjkNT9GaVnju1WaYeMtPsFtpRUw8Jqp1Bbe8uayyTP9XcfbWoDAP5ddqrZ1CcuAFQtv37V49jAooAsNMT4PM2d",
  "key24": "5ct3XERxSGizdvttCpiDsLAqY6y82Z6jeoqRVbLFub3K5swHCdRQtriu1BpXkN3gEXVYb38h4P8gSLERAxNChTwe",
  "key25": "571WYs6PsBW7dXGEZXphtKRu5mGwJUVto9c31pwvDEmR4ZJUuuVGSoRFcSdTRCuuVdUiPKAL1tEW1qWU2Cc2akpS",
  "key26": "4SGPhpJUF61HhZ3KCArXFNbrobgSazspakcSxAfLDvMuR9bUNRNxo8EjkXTNrWmz2uzpdGukqXw3pW6feWuNUCyh",
  "key27": "imSJoaGQk3P86P7JmhEC6SHLuGDa31U5GRFb1H1skZ2JU5mRseUNYq3mLdv6k1PC5uSwDFWtMXu33s5BiR2ardk",
  "key28": "2ogzwBDwhBJJJZF8i2nUFwaaREtxfGdh5Tb4R3jzA3kAFMTTYCaKdQKLt8RAJm6pbUe8yTZhQU2YnBt9BsJY1wvs",
  "key29": "5iNFWxT6dbpcvEgEDmEznn3QYakWqR3pYS1JgqP3AypYjs1HSzQ2h4TehYu62vghxRCiXskRH4nNrFvhLrVjdFWa",
  "key30": "3LDwZWxnjMCbK5L76be88XZ6DiCvH4oGuzcVTRRgDgevFvnK1VMtRgXA3tp2i3aWeZCqxd2baPEXASpURoUorZJc",
  "key31": "3VybcCwRVdQXaCzuuHPEFYfqUpuJeBAL4PeoGmRwmsj2EPWG2Ayx5kESMk1pvyQEkCNu9VoYv5AyxjuqyjbjhTcx",
  "key32": "5pBz25VFfkVYcs8Si9ecEvp2jrf4H38qK4swUfWaGDjqVNmDBe9Fz6fs7wTGfrtH6a3NfVL9KC3X9tcved9kJj3m",
  "key33": "4PzfxLyzF4gzD7zMVkmVhAivksqN5Y3Q1eZRsx7SHo6wFNj9zb9awtQv1JnyJoQLqBdcNxCJynv8syNWZQp8gULq",
  "key34": "3Cf7mxPnPsSPXUPv6XVoBhfuMLxiHFzb4jBbygNfk2pRgGzo2Ns892v3DGeztxqz66cLqAsnevGdCC7R9JXQXLap",
  "key35": "3ecxbjEvkKnS9KFZHfnFWZgXzcPAwW4veE2eft6kNEvcPMrmoimPcjSGCG4ARug6UF21uDNWEmnMiQpo5WmYzWVS",
  "key36": "3EF1UV4JX8XLQpCCkChxJ5Q9pKkf9CgzSxBfGV9XkCLQwGk9sF4r45XzqLtd9c98xg9aALJcfowjfPo6nYL2NRpe",
  "key37": "5ftbhwweKG2SnE3NzERZ5HWRsN5FtuLsS7K7CxmziEm11avNDzoD3ot8kWWiZP3GMqGrMZnocJaHgPAHyFKe2AEu",
  "key38": "5PpSPTeP4nzzi3PdkYhiokGuCkRQxD4i3TmGR4r5GyWh4szAEAXkEj9cw7qkhVXe33xKba5nkDMwQFGkLjAxq7CH"
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
