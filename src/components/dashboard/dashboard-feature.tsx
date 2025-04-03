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
    "3QSAiUWMR28U7Y2JNdHbJNuCVvk7SLHEKok5DJ3o5LcZb5ssq3yYRuYyyisfNTb2YrAmTzEAnYHrpVBXnMwV7Gq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUx4hn9p9xYLM4aRzEPqkCBiu4Cqnwpp3f7LYqjWmBQUtPgtV5LzvKFKi24wNn9JYTXcjkXoYcEimpd8vXRKJfS",
  "key1": "5YbsSJtE29qcLfG1jSUAaVPk3Z9sKfg499Wntmb6Mk5hAjEjcNRkmULPnRF2wz2827LRBvP6DXWJDveprd485C6C",
  "key2": "3hyQidizoGNj8HA9Nkpe1SAEUx4hPhnLEMb363uzPdYHAfYt3WqT85QnzN5qTDw64yCbTHPpShtviYETXbGLPjTk",
  "key3": "4RpihsAVJYf9KeaahgusgZ7EhQ2nrNeN1tJuH8CQswMkJLJccbPXdsZjxPSTDRRG2ttyLRjePp6BdWyWPuLtGF7n",
  "key4": "62CuDy8CymSA92Y4p9ipZ2tpeq7hBZoi8ftwAYx8cHW1awY5GGzsg9FGyHsDPmK9mec87L5qeBUVmcprATYVFruB",
  "key5": "5Th8NLikjDxo21bG4bgeGrLqMNxKNh1SHSdtmYTZ94uDqDixiuAypjy5SqcKe8Vni53N4exxCvD5LG4Qg2s9Hd2x",
  "key6": "3XYLBU4rAfUUdz1B8ZcqCnjfVu7g4YAPBee3PuhrEJZF4bi2EtMFBvcJuSEgJiBU785GXiRtVmL69rhb5FAv4tzg",
  "key7": "1dcjYaDdCFuU12XUevsvafNYtFQJxruPsrcvajodX1X5h3kdiXnYKVPdREmZkJ3JKGQC5EdwtggXH4CJwETxyTU",
  "key8": "2uDQj1nXJA8HGDbhTrFDvcfmm7TLwuLNVKa4HEcQBkZQk2mpBAXroiV9KXTDi3yHYi1BHQSHZkfSCi2MfTZEynAh",
  "key9": "5k7A6j67rpNUWf5hmuPnQbNU6rrXQvdqgKD2LEvCeSk3dZqa6LEfrNSGGsoLNwFktBvoNvPQzpEds6AbeXpYcpHm",
  "key10": "hVajwretBasdEs1HEVGcZo9QKwZmcpxe4ggmmjpuojhTMojRsdf6ZGWfrV1hRu83pe93Xhm9c6FRGk6uSnsMeBt",
  "key11": "Fx3MJxZz4GMj4wvagYGdXWo1YpDWEowxp91cWAAh2qg3uec5q2Tgi2ZYRejgeWxh1BqriTaDb9UsfhuL8HVoR26",
  "key12": "63wjethaFaCF5wayBe6Dexe6AcyQsHa7exqJs8nPNpG9sELR7qpK48EPKjNjBgokVNEZK9dbgsFsnHmjP83Mfgoi",
  "key13": "51HNxFKTGw6gWqAsge2h6kkRbnGGUnLP9fPLJbjpvB99xwGKxAKcihLrF7ovLAvu2YkFMhJekuYzWQ6ABXPQN774",
  "key14": "21bQBgJJTpkm5KkH7qqtv9AFrwMewWAN9hgu9D6f4rP8ESTJuAnsKWttwhKyw1ddSB56PWmZ3HhgUcKnyNkkQeiM",
  "key15": "5Cfnu6Gmsn2qr4BtYp41ogdRdTgyN8bMy4LeJgwPTiUrWrSNnziFLRALPmTUMLj1zYLCu8m94tWbLB3C9iPvv3mc",
  "key16": "3SzwJr1X3YSBD7FabUojUd4xwJb2pB5bg3so3D3e3qBXt9PzH1rGZex5YC1i8L2QQJXG7LkWAAPB3LYmfjXk2FLY",
  "key17": "5ptXEL62wEqzHYXFuxvL3zWTyhYdvVv3K23wNbJ5QW42d54DQVBnUK3aoFDRzTGwh73azLoBVTzBzfTgEH1aobNj",
  "key18": "4X3ZDHgPvwY8jSX2e55RpzAuNiPb3afFxk2jgrXWHncRZznWqnDAUQTH1PwdsX8isWZGrw1LW2avq61rXQAFEh5H",
  "key19": "5WFxMJkty4ZTAtvorBaVHks6dVjtQUkzLyYgs5FyBXpPENpAo4oJAHhu9euLXESFPLdSi8mzirQkmLuikDP8Yut2",
  "key20": "2pVGRNpdPeNeFXyjUtsnkJhkGaXpYjD9ZqfeWJPhaaZKecpmFgnCpy76RF1bb7ZkbpxPjVdQhgEwFwGVnKpeafzj",
  "key21": "21FMvCJGpq5PvDvGRj3BtUPh7kXYNzJgU7xnsN4DwuffzEAGvu38Fu6v3W49vUQpzu6F8kJ7fsbqmTN7o3L9Gt91",
  "key22": "2gvcwAkuVN8f1mLDyfkioZY3jM1WnGcnjsaNZCkweaJ16FMvgADxvLebSr3q8orwpGCURYNaA7jSgVtweXcYGvSW",
  "key23": "3L7LF6xDCcW32k2CHS9AUi6QeZxS5Y62p1Mir7XKq6momcHYgsc4d9MP56FzpvMniD6FHccrSkBZiFjptEz2i416",
  "key24": "5TSs2TkEYGZBkLeYvpx5pnYGAXJ3pzw4oz7ARpiNZyWJZfkNrd2yidnTeNhgg4CDByfNMWsWjvzTtpMx89uoosgG",
  "key25": "5hPwbSyiHXt4n1AN2XmRKEFSND8kEVdqo26xTbSdc4rf8cgPcJjB9YG4XjLvrrfku9jbbnHhDek8CPLBnwevFhCM",
  "key26": "4niN6qw24LiLbCo1P9WbE1NjXNuqyrsZzKBkC8gK627T5uK1ZoP4S76g2JBWBSJNtRzPmcRUTBozKAaVPTPmjBrC",
  "key27": "4nDhWAdotzfDuUSeoJHrTjuxYkDzUpA2MrouCNjahuCCtP3TZj2nyK2swKdJ9VEvwLGXh5XDe6WpERAmZiTF2NLk",
  "key28": "4BRzGbxbndAkhqNyzTnDnxcrGiArB8kPDNffG4UiErsRyKnFDU95HkKigUjNjtuC27hXjiturTybkLeDcmLPqmu",
  "key29": "3g7fa2nw7g9SDBeAd9KQ7xnh9HXWkDJ7LGUe4jLdL9q3PH7MWApdBfBm1SwTanWojvFRPgiVpc2frJ34BN2bCYiw",
  "key30": "3XEUPxy7Xn96ei3fhctEysv5gCNqoC3F1DH8gp3HGW2AcvZ2PNr8ky3GdHoTqac7nuxYzvjxq4WrNp7b1hR8MqPt",
  "key31": "3X8yuz2229sf4NYUd6R58mAXtG7fNgpBoW2bD7dnqXVTmQDs3QCRoHTtXw6PxVYsLBiatL1N5nJ87RfbhVoapxPJ",
  "key32": "4V68hRZrKTQbgBoQWkVPfjNbvUdzJK3frjtGH2hE83AWtNcoaaswAeA5GmNRbVZniTmEydm5DFHScgm9cCvKnzCr",
  "key33": "3P21uZ2RHFdvrR9f7nXjXZhMVT5zrgAHG4jtM4sYfDJj1ne9XJ9uLR8w5T7unavNrFMUHLVNMZtc5TFkwfaVSfov",
  "key34": "55g6jNmJLFUaShA7sLS7FhBb7dbnwDqSwNdb713nLy339tkWiDPAWgrFvtWijdShGJYsaJFQoYSTC9w33wXtnJAw",
  "key35": "WnDuSQrBoDHvipwz3Yyi6Mg3u5QjwdDrYrQU3Lkm5Yk2pPsrxAzvzojWpGB5LQg9W8F7Pv9uyWh2XQi9aAFvdaA"
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
