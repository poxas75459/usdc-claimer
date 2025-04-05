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
    "5DRUsteHa2Pd3GbKbjrojhvLTnpuSjiJ2bmpPSFNpGUmanT5tHL1neKgkSiBBG5Rt4KV4Th3yQ7CDm9AvBqCByjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4be9rMsRqssCNAaiC7WriQBMRWsBt1drNhTCUFhJDEqanZ4rybMpwUagjZLkXALYHri2u9sxT6w6a8R1jsgJo74P",
  "key1": "57nBbDr13wVZdQPAar31McHGbbKVw8SHqUAZX6HpngTgxnjTVhMnEtkMzp2Q8kyiJJ6DMzxvGesskMPxSyEipnE5",
  "key2": "33ZTk64RWxqPPtgKbn7G25XzwmA2xMUzpwm6rR5C5Fqh343jBd5zEv2MbeazeNqPSPC5SoTBGDNbTrgdqFjZf87",
  "key3": "25Dom8zqBz1ej7EaW2CVd7MeYtmP41JgU6rooUafvmUhnRt9i7CCkMSLRM2jkV4Pa6ma6v3aJEyhZFnbCVPRhJSg",
  "key4": "5P2HDoiZXAF61B3BEFEqsW585xd7d77zLR5EcBD33wwRL8QMQwFu4C2m5nUQdCmrnmggzyU2cMACgxC4ZCz3MUu8",
  "key5": "WDH34zbBJv6QKUHMCiorosMJLXFZMsiRduN36fTmog4Tn1uDcy1EVNUtz27Fos4ueKansHvJ7fYAYHMY2nhq8Ae",
  "key6": "3PWLN9ubvWnhB7dAFLqwfCoZ3WANRRc1f91enJZHMgZbgjK4zEFEiWFnGBtdnwdktsrt34MAF4TRAeSypH8Rdi5t",
  "key7": "5XBxoXdjuPdWpmhfWENEw5RwmxT58aMB79Ykf14E36nAvAhTjvDF3xTgzyWZx9nZz6YrcFm946ErhHTmuU478Ufx",
  "key8": "4HZ3LCia92t3T5GMYMZHyDANVRmPaaEr3zE83JRZW6QPXqXw3kWuNaPmoHQeAWKgqUzoosSgLQfQfg1A2T2shRVM",
  "key9": "3H3DFBbbpssbCNnLdMyxV6AefkoXC1q6eb2Bm5SbakJJb5oCzwHWtwaBywSqQdvS49cCb58UNyUW82Lr9JQBfNDZ",
  "key10": "2nzVwXXZfhKdnKCrq2jwQipMYMsrW1XRbUVfAkC6p4yY3X88t1uEdrkM3FtRX7ZoCwr88wpMHiGSQPo73w31dQAA",
  "key11": "4BgUTksBPT15JM2EqYohQoRQocFyaX4nYgKBFjiP4djCixuP8vtKjBZcc8XWpGhW9gmAtri1tYj1eT5PafvJu4M9",
  "key12": "5MDf9QQBLw8gNQ7TkjxPyJLc8aAmoSLVantVzEQHCTTmJ248BYdxCdzSdbYQvKTid4XjfGtunKXN7ajdhys5i3bA",
  "key13": "2o53MVJkfv87BHHzY7m7FA8FaviK1BhPK7YCqyqEWqvpnccxGD9bm2qP46uSADq7ezY4ezsE44okVQdD1pG2ouVD",
  "key14": "5oaLSfgD6UYyzZzAmVy7tR7D8jMLE8WHpXTLtDmHFisUEgZccM5tZMsgSLK84NNTw3ptSD9RUmVA4Tn9mfjWYEgX",
  "key15": "4Fc743Tm8bRSoUvcSD2t13xviqFWscUi6WsaTYAGzNyAVeC3a8Kx5or4vin6AuLurFFQUnSaMA3GdP1qmtHL29dY",
  "key16": "4s6A5Y8JSyp9yeLSAJE8mg9HDj8ijqnWXF3F5k37JWcbNfPS1KBzi3WNYGEMoucfSQxavzNFiSHzfsGb8nih9nsY",
  "key17": "iExY3aFV55Pg5KTq9oQaEihyuVJzTZ1vmyY3g1rEXLNjQYXmbLn2JDWMwA4KTpmBBVJU7Znq54Dnamq9ZzLeoPj",
  "key18": "52expntXXFzsRNHiFFXpoMbNq7eC5X7wtxhjMLXJ7BZaaPLzJ5tpzxjGYPb4peE5oTjKSMaHrKrGKXDqygyzdfTM",
  "key19": "2fbcTgwJuxQMRotxvyDNi9dPVhdRfsHCF8m7ai8Py6frybPWCXDrJEvVZ8bj6HpNrVSogYgFD58u84A5i3PGjUp8",
  "key20": "fvr8KH4NfbAHXQvpTk8yigcii1koAptow9tBHQuSSN2P9R7QuLi6q9v8NmtNhZafBBRs6SD4zgsLJpMNW1ofD6c",
  "key21": "5vuuutvHsky5JAY4uvSV53vbteif1rJaPkQdTUYSjetuWh4y1dzqEkwC2bGB6fFkawsi8nBbZmYPD5PD9YjWYuwk",
  "key22": "4CRA7CPP1KqAFaEffZi7yiZCa8vFEMH4Sg8WTjTUoFyG6RvY15i7JxwPk8273BkvF2j1wWgu9Pzz1rhmyAfVm4gs",
  "key23": "38h2hkYGwaGPcxgabEqe4rsTkqFtcEeoPADCswWYJu7Ckt9m9A2SJQzWQaAue27HhThPJHPW4CnAioubA4xn9222",
  "key24": "47LXvA5WaeYi5oWiyq1BLhU7FxjhaP34QpV1F1HPianqbDFMtd1Bcd28Pfudy3cv72NQZnwBAREZoZJxwRpxPZSd",
  "key25": "qvpcX816jNEhHNE4UQP9fD1pSytnChVtGgZMcQ9cUkMt48AqCp1DK9XkBfTUSwpCWgPCKUZeGzMCdB8VRyZbq3q",
  "key26": "5vameF1Bb1Ztpfp6RvtQbed7xEH5t95apPuXPznUFGeRbzjksTfQdPUSyzUMKW5KUjhxpnXYrept8B15FJzGp9G3",
  "key27": "u9MpAxbYzLLpHwgS3idroiMWD8wCACPm34D7j4Kp2CNAU7i77N7TcNEBj9JdWtvGJB2EqsuwBKJdqF1nZrTbbX6",
  "key28": "5tbrpEgWWWS8oaFCftEh6Qx8ptoW4xEnyntc4gScgTTNp44LsekWZuCYAE1KsbPQwgnfSLAe6B7FsrYsdZMACjq8",
  "key29": "5VndCzsRP3nL34cun2i74QULHikRmdZSETALC7BQMc4vzvukaFn39jvjgHHgpkoSg2TKQizDCDikTAJDEQZ9uw6Z",
  "key30": "2dgq5a7RhrcP2Qie3bBAwLReqd3XCh1e9HzMUf8ycda9zoT6nzKsM1PRgJ6NVr25YtHsy2YQVGf64dMJg9FGEbZb",
  "key31": "3kiEKKPXEeaeD2QMyepALbSg1PwsGvtp7KodnJ6dMwWfCCDP9ZmRBoiQLrEpxeYYs8Z3EZjM8XyeJnNCwKaQnJ9R",
  "key32": "4aVYWqMbPjGgC7kWK3Kyd4VnMjzEbM76CaBjBZ34GGGh3D7Vpq6JasF98odwHhRCQKDJpeiZboYbbBWmDFyp5zk7",
  "key33": "5njRY8jrdhwhr66Z2CLLk3QWwSDXP3htM1JTbFVaKV1EUvCwLqy5BYB91ziR3vYUyg1rqnZtvidj8oKEGREccnDv",
  "key34": "4LqyMVv4s79Jvj7iRzjdGoZ4MStGj7FHV1vchtqpYkZGaCgdjeSFW7Rzd5pHMoTec4eXKjQzcoZwPVbzTrgVWB4J",
  "key35": "636edSGM8ceZtvzekv65rs1NDTNbVvwn4mgowNUr1UFUsd5KCUvJXZYNu19pfgG2g4Nku8um6RebpZumtESEvB3Z",
  "key36": "3icVbiosTC2QqskJXk2BGFKbA6yGto8y4FYsg2C8k2drsRaiSz7M6WkamYSbNdD4Xery3NguFmnKkG1sR2BMW2DB",
  "key37": "3qfQ6FyN6Q4JAMxuyCMHYqBCrCjwa45neXzixsJUwcke45jif6vaKotkAkBpUkFfHDqCChLEawduyAxaPsWHjQtt",
  "key38": "9Efk5ZfoyuYcjZrJQeSkVBKweKG72jSinDkNRvx8NSDGzhXc9JABQMq3xEedoqenZY8rLPeqRL99o8eo7Mos78a",
  "key39": "2jpbZMCRaiMXS2ftdBchqAtjWnFbTQyP3dN36m3QyjNNbeAjGz93KXEihxkArwLw9Ezxw4BXPwnALhS3WEgKYLd8",
  "key40": "54TyjuW5KhXJ5tpRRGZc3ZRNW3vMP87SCdF6Dr3946JeJtUdJJxB5wuUq4LWr8WiZFgentYQmW5aCqqixuT4G7KF",
  "key41": "2aJjDhPhHaWYSh447gcGqZTEwfgrYZnrCCGhUGW7E32SuprpwLqw2mVGqf9gp5ha5ef3tNWH3j4x9PHmPhPYfwZK",
  "key42": "2KQvJFG1pvfDiWzGmLSyzqk7XFZRCG2ZZddtiF8sQE28FMyP5TEGTemHbSq9e38T1RoCrK7sWnbio6RaYZjYykXR",
  "key43": "3ZX42uaWhT5t8FjRWWqjQjbGC2xZztqTsDRRhtac6KpY83pJjojSfxcnFFWZHXwxLSuDu3XrzuMt96HHPpRabG7S",
  "key44": "2G8xj6g4Z8DuvZtbYYpBXkfmw5uPYAkK6svonRk2BjHc1L4iC2EwediFofCre7TjfdbmYe9vZWuCebUEipdbX9xe",
  "key45": "22veRsKCKQpW7em36sbroxkCyNX95MfwU5XfJo2aHP9kC3ttEPhon1GpP2Yn2FUeXDUKMpFZCo7VBcG2cykiCEzB",
  "key46": "3KtKe6FeqnqDUgiBtnyBTRrx3tmEyQTxFWuGz6oTbsVHG59vVytw9tcTpBH2wUvvcxNvjNaXFJvhv3NoHEBRAqqc",
  "key47": "28vvoeqnh66kTNGCKS4babL9LcLNPjkL62yFRevHkTzveb5Phu36J7BFJNmeof7hKazksuCnYcPVN6BDK4DqLB59"
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
