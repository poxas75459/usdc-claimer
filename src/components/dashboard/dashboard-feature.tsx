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
    "3f9ihjKrTwtrVv16WAqmSyEXMpMZ5wZCYpc3w15EByajbPzCXqF64E4DKn2wSvgGymYzomTAabPyqE7gErLdbAUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rg9ieTfeAeqAT61B14ij64JX24cZAVD9N7swkHDHQ4uua92dJbviqb1zGyw8tKj97H9U1DmB4LaFfTWeUmjGsiC",
  "key1": "pPXoJgXu2RcaEzbYCYRd1x4yVTADTtMyRKv1SYS1XYgLT1gtaRkZ2bMPtvLf9gPwymnY4SoHZUXopB6gXnhYKKr",
  "key2": "2nFW13eaX218FgaXHj6oGs9AMeoJwJ6bmWhgi4Dwu1XaRhQRvWeo5yA9HvLFPWgmUY4T7WYip44uhRy3SkKbvs2i",
  "key3": "3UUMT8XVxPAsrxVWN5yTR3iVsPBhxTc1chv5xazjbqBKc8W5izqipd4kTPqzTGViq9XBRVDi5CWzLUH6GtpZrqjL",
  "key4": "2DHjFqtBJ9BgU3bRednrUVDYrn9AzR5SfJ1pNUQoD8uVUSCeZwcgyE7AQ3rkayPHzvVUyx3VCxQjM8bbi8RvNSQX",
  "key5": "5JCbbr9bJhwB1X8DnWYGhL8xsNCMD2iUpzwoLdVTGnrjSvQdsCJXMGZt6YRzreMM2681aLtigqoxwey5RhkTVikm",
  "key6": "32gE2fQhjdzjCZNDQw9Av2rvjTFq7VoxqZZKauWkL1JgsJxeoT33aK1HNzUXDAmXt5XCGuDctLJD1Es9sM7xr6NK",
  "key7": "4FjgobspLuC8f5ScJkmcw5XhmBYfRwpiWZJHacp8EF8m4AiUKtaHTYxsF63pnYGiYqaNH3oYuiJdpmpExtcuGufd",
  "key8": "2xPBSXT8SDtD2XBVvUokaQ4uiMeRy28sk8zc23Zv1Z47o4vC7cG7tZd3rairzeRefukw37rJxgAQtwVBAbLzexQo",
  "key9": "52sKLRbH2hSD3CRKNTo9AibdpwUFdxTnHpNKhgvP6o8FHHu1DeMcixeYCPdxrXSN7jUWyUs6WWkfeGqaahn9zq5U",
  "key10": "5hJkH1kTYkGM7HL69xKN92DgpvDsw17bHFwzpmXcei6qxgn5rwt7oTHszW1wwFvP3XFYEri26MsioN3oiiaUqY8b",
  "key11": "32ScL4HCs6qNnDc9zoAiq8TVmhevryfmfGC4CHjWbLfDGjjBJBvDerjCd4CqT8q6Nci7JpKGouFWQJgaCGVsoi6u",
  "key12": "56ZSdatL2QweRV4WrkeVN8fd9JFncyAUSNs8wuBw9yNg5TMRkDDpcSapXFKen5ha9dGiKMhaJirG6YsV3GjLJ2dQ",
  "key13": "3YEXWA4ngxQYGeUSTFhKPtZA91hqv9YKMW6xXRjE9pu34Umzzrz6knHzxf5YxByNB7mbBc2FGYj5JmduWJijBX8g",
  "key14": "phsFny66zHhRgJxUgjrmveiH7wFgNNRZ8Fbt2YLCS1A6CiKuAKQ9D6dA2i87MaEesLZxGew8pWCFSK2CxVBpyG9",
  "key15": "2rrkudG46UBr6xDjBS1K4AZrqCuhC7BJjR14khhMh7EJdzwdVaPL97TKdBvRyUTj3v6w1gexgtF9mrPDM67z8Wie",
  "key16": "yjDaL1NN37twMWrEuE9Ew2DRREJByWaBZ3tLSpETMPZhQgQWTSqcW21hREH11b68HmhZvvD2XZYKghyi4gby74y",
  "key17": "5KZmHgEcM1mbphHckHZv2ExjrGDBSQbBC9BPuJ5aaa8XdDdGJFg7XXGVbtPwX4Yfy18Yb2NvamqbeqGHDR67G8D1",
  "key18": "3t1xg6nU1fSYngVpHb7vKNVLMHFtN3MdDFwXiybwiqc63f2qfEA7LX4rieQLXP2wMPU4EsWSpn2LyPCnRAXct3Nc",
  "key19": "3tGhq9PKBd59pd4MpHgYyHxaSf65bY9xqSZav1j91tJZVvU7xKdT6YCuy25nwb28fYUnw7fXHEkjoDU4bErn8QZa",
  "key20": "4TLVUFHJtoRDrVbCxAVoKihht1ceYUo461dN97aYuhzwVpZi11XT9dsLZqrU2CLz9qhiRZBqUfe4Ru9f2xdMNqSf",
  "key21": "2YZJ7oKGjaSDZRen3YW1QheD6hViH7bd2mKz2e7YFKsmDHarCa5xPdv8ahQT3x5U5oxK7gEnUfmTd8yQ8PdeDBcF",
  "key22": "3s1LwYsw7y4VixjQBVovMBf8LnkeH3N4R9KDQEPTHcdJzevgxV9whjB5HUjpim3Bbnm5zkWb4Ryz4iuLuLCgTt7y",
  "key23": "3zQ73tRLwuJjT918EiSSLz74e5trLqeDLnDr24t3FRdZUcpgpyRSatqcdGQTz369MPAJUtkPcochEiU5qmuZxVdu",
  "key24": "4c2cGeuXLTd5bLQUyzTPTP8dZZAUCSuaM2zyjNeREeF7HCkGT2uNvx5vgWhzPx22gpZ5ALTy7G6hkY49eYBhTt3d",
  "key25": "3LbxY62jtbE98nGVg9A792N72UsCK24X7UZXCYQNWrp4Lyk4iQCN3ZjYGUZsv2zG5j7JmFinZYH6QKvrLqeBckEr",
  "key26": "khB8ATd8GpV8SWbZGt2qgTVnhes5BMcCrZTDrVbpGJDB1f6dtL9UjBXZ3QG3ErG9CY26AH7uNddvvU3N1mQQsvN",
  "key27": "32NQuj4ftYxSTnVsUyVt5xSgbNeqRUhj2RzpsNKarrpevTfGNmpcPcArSowrCeBk5sGCujzFEwmJvR2Ff8Hwvvx3",
  "key28": "4KWa5khfBxJ44G9MAo27bmNT2Xjc3bdXCjzgLQ9aiT6stLD3F86ZA5siYKvHLmEXF5qXumeP19ASMLGshRMq6wS",
  "key29": "4ycYfna62vprcsH85ahUqe17VghjgxdFLi37BLXkygPyYMFEs6rxSLaW7jnhDopTWscgdV3X8MaaVRbSV3CW9Si1",
  "key30": "5gKyK3TsL5iatfv4LFnRgk4UUyhCt2SKCWxJXUGkkWPdokqbbEJhFRdQroXLWwnDHcqLMjusutim3Mu4iUrS1k7e",
  "key31": "3m9gMz9mQRxVGrBReYbksLQ7LjCTBuPgjwu4oCcAnQVfKbTiw7fMgpFtApj3thErAyVNZ1DRCYV8j9MsPyys8E1B",
  "key32": "tC3WjNLNmLfcUS9PdH8yEEkupDVKy5A5guFUN1mMbKsevyYShJRRk1j5bEaunmhVr6DQGyRaULYY1FpKuVLWEqv",
  "key33": "45ZDikVPFLUB1z3ZAJ1xWaeaFVoz86gqhNpZscReKSocEQJ1RZMVdZo2ThABkR7CDVtnd4KtQdZfSYGv39SeD79K",
  "key34": "5VNJHKhQrzZznxw92YgqZFxvnkHc5T8cJMerLCmJnEwZqEivCoc39KuyfbfiP8mbtptRu2wDDQrHxTF7bR6Jo72Q",
  "key35": "33e634eg76Y7kxD59Wy87Y6fL74TiTs2U6Psq4y4SnRUE6c6n5cULgA7WG2Nr9URgrREnfaSDvZG2Hm6xU5H3T4o",
  "key36": "4bxQZ6xpPHbeuTAnUXPsdiASQyTNDRSAFbcQEbE64QJwormKFuUyT4e7MTXzQrkzEqEJFUqMDrFzVk1UKrhqkuZu",
  "key37": "3dULKfYqFosVSeSCQXqpNgzjKC7RJqXhnBZyrQjF6zABfLdyEwf5xzyasu4gc4ZLyfBo79uyB7ps7kLZYTigDRaU",
  "key38": "ADdhucnfU26DvciV9sju1danDfkrBAbyL4cXdeqpa9QasmpuGU8ArZfYHuurxpViMAHeRPhzsyZryJH6tyGcEF2",
  "key39": "3MjJxidKPYsD6qzmmxtNayqh1MYCQkdBYpQKbtdUbKBpAeyDmRW29NSjNP9prqyR3cxg7gWPBfnJwUBqRVvbyKAP",
  "key40": "4p9RKfZm6gFZBs1ssDaBUGzHcEpBryrSaA5aeyckMeH61GussJGovD19pywqjcfHGC88y3kobftLcXLKUpxVmiGc"
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
