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
    "yUUeT1CAh2JKFV51yEefTzuEqD161TbFxNRwDYstdUZUrKKbF8MEYoMksF3PMCHwYxg6vK2UUWYdZMPAmv68pzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDE26tneijitJLHT4GqkYXMitn6a39JXiJXwHGjn4jVv1Bi4GVSD2vBkgUdifMciFa9d1TF848qN74HCQhytLXX",
  "key1": "3NtVSFmF6yJsaDf4bKCr7YwXbdWmysd6ud14DH23TeZPtt34HuTpsPPu3DxqqvhfGFGsvngjK2qX6rzFyD8tLsFR",
  "key2": "5vrccyJThrr4ER5F4PGvw1aq7pukGot8KTWmd8JnpM3o1t1Mo9iuNPUxGDrCG17X7A9b7AtaLziwsM5bK2wiJi2C",
  "key3": "cVnfBUJnb6gqnCLoGPHP6P1Q1na3vc9M95Vn3aXZPB46a9H7XsDFwusLZreY4GrU1oweHaAtWAj9pQzwVuai9er",
  "key4": "28PsYP15NM3qDn6Rpt8fy6qQAeLmkVGf4ccg52ptSSLWiucz3tzpTbyGkATMWQUhr2WD5YJbQLsdoCB9593AYspo",
  "key5": "2Zsg43G4e52PA9LJyCBCHTFzsmGw1E53z4nJVqj9uh7oTTheCRmX8qck7a239V7J8J3rc3cCC9FFdb6fDMdGQX86",
  "key6": "hoE4ouPPCJtoMdc95b7zRtYKJZUJnqNraoMwY9Eeeb2R87MKNgWTXMqwv6W6zbKzBKrKX4oYpdatyGLgqzYfpho",
  "key7": "2kgYBruvPpeZ1EkiDMF2nvbDePvJHwekxZMacvaZXyew2qJ1yuAUkem3CyHX2y1zhN9TebYYBPUQvjuwjRQuY11Q",
  "key8": "Y4yVT8rzx1fXJkesPUzxTBDedz13YaBYRvr5Ntm7YtGUZTuNx5uLpA8QdQeLvgAvXREBmUydPLY7vok6J9pYFED",
  "key9": "5njbFhMccseJiiUfZ6BYaAQvKA2EVrn377aDhJMUx3uysSULrkwvjT4eDQubd8w77gMfdLuxVcniyBJdcmfERoD7",
  "key10": "nxj5nhoA6bq3L3xHBUbgVmYdWedCcpbK27GaAmbPixGZ7RrDqVceqjjr7kBnp9BfTYJ6LxUQTCtWYXcmdmKBqFQ",
  "key11": "3woRPWUVaQCA7rk3RsQjmRzyKcHdxjWAL8FT8rmPre8ojB6WPkHUqbeaN5XZh5j1YWgabYNC42zLy9bV4xdjfzry",
  "key12": "2DdBCFLNxiWDeH84oKQe1nncExrh57t31f7wQsQiwdU11Tnykf2Yj4bJDtnNQ7hjYcjNM6FsNYk8KKMagRHpRZs7",
  "key13": "5FSXooM79riiQG48i1vkr68eyhqC22NZaUG4xDGZqzXESxpRX1XPXaG8GwSh52MddMuwsY7ds4NDHVhwoerfzjja",
  "key14": "5R1nTHUr5NJfVHpNiUndJJxHEeYhRYW1hj181YVPyQLQ6T2C8Qy3rVwmQ1uRirXrGujJABhnGyPjNrQRWi9BkM1n",
  "key15": "2pUaQeBVsF5yCmNc3CBPJasc22iqnHujhpPsPtWxpA3sWpp9RczSN9233LU8EZfcQ7rQMhXtuUfqbP1W39rJrFrA",
  "key16": "4yUa3WCMvRCYfgsnUGcmPVUk4YuUGnmEmLWFtWu4aK2feX1qXSfJH8i1XPsMBZxmkbR8TR7pdndYAvjNhC2RBto7",
  "key17": "KAT38gcsK2Bp3yTTdNMfJGYTswFJtdPKdvc5NTxedJbWwbKhqoxcww4bU5BDhZVME74uJqVrDYHVM5RHus6B1ZH",
  "key18": "5hmFrdSjghifSeAG97SeV2SgVhCTTv6Pka7JZQJazfmqfX5JhGcTxXYqv94Ndzk59QJ8rjK1ahjUNqPg32BEimMd",
  "key19": "3kz4GycoYbiZFbTyJZyVdK1RKJKv2x6f1qciqoS52cgY51x1bhAmKH6fSxVSdGGZSiT8DZBb3WR8dx9KRHkUbCTr",
  "key20": "4mrYT4ai17yionHVNZ1mDsrTXk3uUTxbgsmPyv2AmVvoCUvH526P2BobdsBwS5rXXrf5t6JKTbNK1rj6PATX43Zh",
  "key21": "3enfwmjdjaiidG5Zv65mKndRNgGJZyA2Muq5YBaqH5oR1K7FjgV2nbD5r8mEfyZPkXvxq9JtsHj8S1eyAiRkRTqc",
  "key22": "4n2bCtRjptpTzWsyg2DfgCRLYuuC7FF1saQrwKLRu1GXn3J34sP5cdX1dsgcVb1SYeyF6cnJa5eqLifJrjwFVHx",
  "key23": "4M7czLtaUhfAtdvNkz1NQ8hxpNXjdpGGjFfpB37Pd3izswVqKoSJaSkKMm4bDcJydAxJyQftyNuL2iRHTFzdnQoT",
  "key24": "4f2odQTKG6ZfGFT2BAfLLxmQwMH8bqm74XxQy4bGuBJaSM8ChCPJqh5BZpPBfCsZxnQv4jzCW8BNsYxhMrhV1LcL",
  "key25": "5jzi6RJY6TiYbxBnQuUioqDu1sjKtwcq8n4T6AjQ65osRdu7rNp4GtejmYSuMsek9M2RJvZBASbHvpFHhQcxbmX8",
  "key26": "4ivRY4nApmMaunKaVfEQ4am2VbjKFfnwaEfF6jq7ke5qi2KMPCcoJUJuJ3sSdnyjfFRAfFGnjVjVmaZwoPZBnHdR",
  "key27": "2VGoyGPDnJU6rdyyNKygxZ6pjC7iu6qCWvybZXFiPiPpJyoqmaWE9cVZsYJQu1q44vnegAqXTxTncKaEEuZuGv5e",
  "key28": "khS5ohiui5wHDwUHUSdAvq25985Nwzj9Ub1LrP2iuXycsavFoZ4n41TWHbB2rrc1uuy25gwT78VrhPrcZtfeGs6",
  "key29": "4RTuN2SwAt1EjZsaEXMfkgQZjTzkxyEuEed6dAKyQDjRYZxofDDdxG1kWsiRWkiY1yUZBVQK1TJLUg8enwHoTowy",
  "key30": "4YYeE9Rz4vUCw995YT745CVcbuZ7V9ygD5G6TxBjwNncUY45XbTjbhKAC6bfjFSADaVWxr1ihFoeJUmX1irbmHSQ",
  "key31": "3xE1PMGtFbB18cAP4tQESNFz7JWoek7pioVQWB2D3UJ8BcwGm5xK8ncD3p7GKkWSc6eUC4gRdTPf6F73XR5iT83c",
  "key32": "66VYkKnt2e8njh8qH8BidtKJUYCsCcHAPx8s3qfEgB2BmerJJVx6XLRRSyGFZxU2nKHA4LSCbXtM4wb2zUTfidZA",
  "key33": "G4di3efkVquxg9sx3pVtqzjwiHD4H4tb23BvCtznCdFRCho4kUtDjbJRPjHkwRFvjEW5dwXAKCPQYzoT4cgThjA",
  "key34": "5pUzR3Kacsfjnhm9i1hy4g4b6yNmoFYjpshVkLTH6Bamx1JYexEoNLtvp5864aFGZs8xqMhpHwzUN9Z6fBdfw4ZH",
  "key35": "4kZJzPtkkA4CPvcUdkd3jZ2UD8gq8H52UvCQ5xQAXxuGDvET1DcmTaKzPdzWCqbF1vTsAsmQpVbnZVuYqUUZLhUF",
  "key36": "3S3Y4n8QwJ5cmNBYcqKGwTfCvZe86ewfjjmq5XGkezisUrqNuqgxpByh8L2FGxaQPsiwsNSVL3cRTc7SPuJZzZSP",
  "key37": "TdKonau13eTQQfa9ugsQi3ptcZtWCNDxggRetdWDWBopmgwvoGmkJ15XavBDjngKbUEutmtu88pxcsRY6ybHRBf",
  "key38": "NppCYBxdvr1CJjQyzMA6v9CnvRdrobZZV1cgDDebYtus4FQzvVRtfb7cC1UoQc1BdcGpCNPFtAS1RTd5gmkJztg",
  "key39": "4vPuAUmG5Y7XCAphTA4WADCAt5VvdVRDCtEuoVUGpcMvZV67xwSvDY7pXUkxyQEyfQnKPKJayeQhoeE7ZM7Vpzn8",
  "key40": "533qcZ5GL1BBGVTBVAHbi4eSbFHkW3R6he2hndGkhPy3ExYZLBubRfNWHRnKzkkRBo3dgjEcSstbk8X3GbUPP2oe",
  "key41": "X8hyMt8CEPkVC8ysC6XuXv5GHaM4MXsPgNkAKa2bPM14vVjZKzMBQqWsb4pBuMMSDZstx143RmuvEc8WjCrhFG6",
  "key42": "2BaMY3wQBZX6LCnVNjjvubTRmcpMGDZEFmoo6ZC6dN161vZ7vw4hf5Lsi9ugSiZCVNKGZaCV2Z4EyoTCsm7ePE5F",
  "key43": "EAR3gCpbmtsEGCptFJtQKuuQg9gcpffHDLqb795QGW4yTgGSieY2f3dVUxyYbusMhQvKSTQ2J2bbYC5jKxkV9TV",
  "key44": "6QpEXpDXJZp1H1YS6F1Xve14J1aaMyPs8aSFoEgNobn1hW3uq2CDXEJ6hsyU1fWxX9EnXHzdpDddHUdnLcxxWqc",
  "key45": "54xeY1b6gGPNrEzjWhurwb2d8qETqAJPDn2C1rWCT6Va9Ne1MZUmpyX4zMV1MnH4RiAJQB5HJhjGsgYkBBPLXJKK",
  "key46": "65SW5PVFq56FdB9cipD5dDETSSaUP2MZSivLnqwEsskeBaYocFouYeau7JsiT1BymHTev6PgMQjcbTaEZvb5Jggi",
  "key47": "4yp19byfjrdUf6iyEcvMS74dKma8nM1u6F9B8sW8dhNEUVJDYGkBn3H4aSd64h4uDkSvkPWHzTipXYSb1TXaSthu",
  "key48": "5xynnF6Gt91hc1sFXXowVNj7BkbyctH7HU4BrQLw348dG58FsFBzNhQUEdPzzQTVM7KU22SaoFAsnyhtTF1Hkpuj",
  "key49": "eGuZz42DTTnqpptpbjn1RPDxbw6g8V1t9ke41PpqkAGWSzqrep38ATG5R272AmBZeb7zCckF6dG3e9QoEABLw1R"
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
