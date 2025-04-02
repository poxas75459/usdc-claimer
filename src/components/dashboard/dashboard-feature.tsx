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
    "81CgULJzy8dryUQoeeWYLwKA9ChMFVwjidCHZAG3kPLjGw8YxJ24PTb9Nbyxx22zsz1xLsZ8DAU5LGamjyk6CPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xrXfb4boWfmbD3jDqPhNwJDXKuCsJPhNQ9WjnVodJAew3kiTp5oCiYs4Kmyx81iXFycmuqW2YmoTirjqqmZKrbe",
  "key1": "2BBeZczTZboFk9KGakoXqkvVwAHCLcHHk6a8aqxjbWRe9HW5tj5FAn3NH7mcGpKzERpo7EFkodmKAgT81fRbBFi9",
  "key2": "4j4uPzB23GZNdHWxWZnzosyGFP311XndgUXmSAvmrz94LTPHbg9JtZXomBGBYtMw1vD4hFcHwx1SYAZeyp8qHsLP",
  "key3": "4zRM3ZebYQ6ky8fXupG8dw73Rn35muoAao8nYZ9QYwKdZBJjqXU1ASYkkP3difpyDLXdSwDiYTDuhf59ZmYuvFYX",
  "key4": "2usm1Leu61xyFu3vZZndymuk2EYyAK1i8bh6qeW9QXCXruFukrLUWURqNThngFVBNdMbg6ZXG7f9haR7AdFYNW7Y",
  "key5": "2hAhb267CzztVmWZXA7Vsyxe3qs1uZqiU4oFgLqtzARVGhCte6W8SNDZvqe85nc7xKUFf9SNkFfHP1bXiQPDEa4W",
  "key6": "5AynKbd7TZPFPxBHxxSVLFXeneDpDMXY8ZCFTyPzLShZrXJmQntB7k8rVXRgWXLvWRmk5Y1NBbaKg4E1jk1Frpwh",
  "key7": "3seowYrgQyP8PPpXgCzZ6VonBJjKsvLRH2pMnoLFurAH7KtQRT33ZcAM8WjMD4Tk6tUJwe8k4s6HYWWnznFVVxe2",
  "key8": "2f2aTNbqGD8gF6NnAH7txvE6nCCnp54bMTv5LVu9MzQ9GGc9sBMpJLmrUgfBSZWnMa946azKcdzBqctQgDeapxSq",
  "key9": "3JPVFL4bdXAizE4CrLQenPkY6XakFxD4s41rh5noVX64N7BXZuVQZ86c9rL3LWzneNmWaeGt4p6FJ54sLBoJZjJn",
  "key10": "J851Hr429byernkNzF2RFr7NrFTWacWaCjvd74xdMhi8MDhZyFrtYZzVbudgiSTNGJr61i4rkW4cEneaQ6gbb3X",
  "key11": "hnKiq68q4zsfsSpuoZLKiiJnVx9m6JokHuhu8FEGkjtyhTh9MkVSQMo11Je5embQvAGs6Fa7A9KRKfT754NBfD8",
  "key12": "23FzJNcw8jBvr2Vtf5TUnEpHNShtFTnCVbq77AT1m6YScyR63Ud264FC82ddGjky8RKPXny7BrowbY7jsEBpJWwd",
  "key13": "3vtLvAhFRkJ3HgmQAeKx1owqeWWcQbSyJK6U1MSKJzPP6g9X55eGEbxXpari7Sqho12yFCtd5so4PaVc6kdS6Jyd",
  "key14": "3Dwn1U6dq8EYbGyESHjL2SktNwoEmVtCGYBZhbsQFoccrTVB8t1tcUC4PtPPhvnnCWwfeodf2p2nWPomMZqdJyPX",
  "key15": "3veVigyN8SeDpLAt8AhASokvZ3fPJ2erhUzRVYfeTDbPQznTsR7hNFDo3H3A1tF2Hb1xA6nT8uGBAcUmwRAnL9FZ",
  "key16": "2Pf4ENFgm5PnKvhU4pohcXVAbDVD3hBi3pi1XNYvMnSjbD4d7Z3uiQBxmwCLYU7fqE6PcsKJ5uNbRo722D68BES1",
  "key17": "5XC45NT2qmJS41sBL2sMiHbDU9jzwtXwx5JTZXbmeqWpbpBD63UgcfwgbBgftVh4TaHZtaLseSNeZYYVX8Xt9XMu",
  "key18": "5ijsyoJt3jEhGtLNRMYgUaCvZsj9pBBoecUj79kxunaARcpD7y4GKzWNj3V7ZGPEcbfzWmcagiDHatFqSyFmf3xA",
  "key19": "4KZXk7MshUsAHCQGduuukjkZyeDt9fpzGs2JEpokhsMuTL3VzvHKqaXtD4CgyXajUeYpSXDsRJr263FVPDdMrcfS",
  "key20": "26SPtSrjyoc8uPy9pvNzWCkr67Sm5dQCgqcxHGe63HdKvRwTEDXAHi5t5hzHZBWKg6AoMj9TiP4tfCUywCFPXePo",
  "key21": "5sJixKXuhN8F6xR8oSs1iAB7mBxa8u3FiSwe2i4e8aLs9oYFSac2sHJB4qxvE1S8TxUpVrNiLNzLNV9ZpqpK57dF",
  "key22": "Q3qMptoT4sB5D35mpLNdgbLZyX1MzczjqVQGzDDuWdLKBw34jdZEb1SoBVtrVVsUJmZZgYfAv1vbbaNJrQicECx",
  "key23": "3kRViKHrMS7uSuABvSca2SUdHzpvMLUS5VGdTeDaBbqmgWMTHoyQMoap4Vrdb7isTrQRZzCPJprSNvmWL4eBPYAu",
  "key24": "5tuxwtgTTBA1Gmmu9uC1p3MFhmdpEgQUMq4qK6iZsyn8hYLem93aFEHKvS6SsywMR7U8A2cjQsk9888Z38v4Kr52",
  "key25": "2GJjhXzhfBjAEEBHWv3NwSJGoAMgSsuK7MDpPVHhPNSvxAAwkXu5nqtg8ih6yzg2MsKx7Kn8H5BZap5838xTnkKM",
  "key26": "5h2PdyrtotrfCyj7VFSL4JK9gC769rhaJiAMv93HMDefr5pZAP1yRi4u6fzKnbMXuuhgvkZPu4Dcf7agJy4Dsuj1",
  "key27": "2TFC1EserFz3r91qdSnyTYB1DRryd5DQUs4vXV3FfUi6YjF5r8K3PEGssxyz9HBaKMCCJGzFJTvwLeXYAo63Pprm",
  "key28": "Jb2YNSaBLJisWe5m5SsF1aBMVH6fTTGZtKzq3jeTDDjkh9rTKs4doVqVsKsJkTigMbiAbD1xwVFmG24GvcdB5gB",
  "key29": "4W7ceUtwopR3VDYNVy1jx9jS4AyUEh6HXA84NPrVFzQs64y34MSygGiLV14Ms8pULrSh9vmd6hiRWXASRVyEGJGZ",
  "key30": "3aE5sQgnyM6yBXfHqDxYqHZdbCN4GhN53ZVaLwsKWdayfusEmCdiSbX2RVf7G8iS8Qd2Yk2fU3TocA63s3DkGV2T",
  "key31": "28DU3dwiYaqH77qs9xKgj16fcKGA46yaxPu9ciZbviw46wGxseRa2txUmPZt1VCAemV5aTQ4crr5Yw8q8kTjL7Py",
  "key32": "4zCsgnB4xzDnvJHv57mnJsbCquc7yL6wsZSX3BbhfgHowyawzmorGqo6DdEoVVAJS7EqSZR9zZvVUCi35x9ZPewe",
  "key33": "4LjTHh6XPsyTcBTVfkon9M8bWwgQQia4HCGU563bXw43Z8ecg1xiJL18zEP5EGXiAqHS2W5sqSNd5TG4d68XqUmh",
  "key34": "5aUn3bfa8nZzuQ3BkJLc7EwBrErsvfWbUarDonW9cJz5Nd62VVcxvMWA6ZMiXJxzwByb9ZWWo2D289ptnq49VhD7",
  "key35": "nQ1Dy5CTZS1T6eonKwAFG5JRcwDburZ81MqVbLi9koUw719u4xgPRKLH6qT7wT895d2Z8zXMjaesRFKZAUos3fy",
  "key36": "4VDcP1At6gbGxodRiEwYmGby4Hb2fGWsbPtDvfzCSLQt89BLgEs4bmrWdCYcfB1vsCtEqqtZgwrsSQwEYNteVmn8",
  "key37": "3cLvwFtKmGBF8Mc4NMgzvG6jXZkrYAH57R5FcqjfXGcGmpAaXj6pDWnwchp8XQbQKZa52pkKaAyUTrdw1gpkLPxi",
  "key38": "4vS7UcyyK6XMt1xUKfafr6WjSDcjVcKAWy3wseuue31kYwyEpXR4AT1KmFHN4Lae2s1tzViQvKtRaVbU2sb9aa5s",
  "key39": "33vns4HoUGuPNVd2UPE5iY5Z8FPifPzHU5D6B5DtBRhWALYsRem3jTDYrnMfRpm2y76p5yYJ1vhkDvfaeLrojng",
  "key40": "48k7dvS8hsMzcEqyNqoAiykQh6v5bMSgpDGgyhF7QGwLc1ZjAZz3Napue4MsJxhnjHBKzkHna2fQgdNxa6tC3khZ",
  "key41": "4iFS5AWFuxo5oqUbRsVMq2ju21qt6HENEynHzPipPjLAYuMfSG1v9zTEvEP1vujQmzSbqAT29YispVt1bggYcGCd",
  "key42": "3j6DTKiKQyFXMK2ryzAqfGAnrtMz2rDsWfcXm4jCao9cZuqiGDD1vWoyaKAs68W32caemv5jLdpd18mk8ZsybJTu",
  "key43": "5JSDWAKRAK2mTJbnpL6SfzTbLxa8QK78DdKAtGpAy7ALBPhMoE8PJdPAYniwQaT4B1rDKQ5QiXFnXeTPuzEewHH9",
  "key44": "2gRAzSKRerENcQmrWxNJyzgLGjQtMUGUnETLKeHkh5xCFdvEwGc3X8139dRKRUsoFor87QPf83Mnix6oDyxQaCyM",
  "key45": "5UJEg5iq4toXbUUs2GVDjL1JWDsEvpxTKMCHDiJX3c7eN6darNJzyBSbfANUFycTU6K84DjUVmfngDpa381QPrzb",
  "key46": "d1qWcdwLoHV8QjLYF33qapBXZaiXuHSaChAW9A1L6ZdJarj6ADmq3z5Hf8obpzxbEid2N6zijG1y9yXM1giC6Ad"
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
