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
    "56JaMApcksH5Dkh6o3CXSgNgvPxbJRAz6rgiomwQNTGBqEAiPv962gbDTTigR4f9wzCxRkksaBV4ZBJHUo4it2Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxkXC5ioMC5t1VM8VKVC9Xwg9ASXWbPhm27DF7Zh33RqNatNJkDHE76h7MdBAbMyKYndqgL4J7iWVpKGkzBZay2",
  "key1": "5TXMzToWs7UGDiTmGXhTDtio8TvZMW4j5EGoiAaAdHUygEDMA2hGZzrECcWqqwJE2HD5znSvMLZ3goCHToAXkjLs",
  "key2": "4skJtKKPz6em8CmyuTP78NfAdg8VV77N4yDSDtcKfyikdXjUoRcQhtWyqasM2oGM2rUDReR2YfYSnKmevyZqFDAb",
  "key3": "7tiPVqCUFFJLWWpETWRHyWaATL39N8BXJahEVV7sWR4S2TdcB41fzgXCUHNbLX4MBiv4HWK2HNRgfqsEeBw6j1m",
  "key4": "4z5d6ZsRNcFrvEdsvjhhqPoxAYrcBJrtWpHs4JtyJpeNA52CgBh12WZjHZCyjf7vo8XV3dby3ieG32GH5CP5tTY1",
  "key5": "3d6MVpjJbDrB4b5mPdr2PUYGdHbitk4HgdpuKZ7cUcX8E8gE6zQpwoaUhttDSBXbmVUahDXwutEw8SXrTiLV6dHV",
  "key6": "3jy4S7DMbTh5NsJgtirzG8vPKZEtHYCrnFDMsPjjZGRFcWnjidTGEjd1EU9GHRxXRcfRvWNG4M3eHNsvn7532eWn",
  "key7": "3wErR9GkuLahngPi3Y5Euny6PDcxMcVsvhiU9aNmNY46F8g8NDpMF7616Cptj7CUGur4QefrsGVazqrD49H1tZ91",
  "key8": "21ceBAhAnspgSsVvKRfr8CaXcUU5VkX3v2xyFcoipa3aif5mD6qTRtjkM2BTsmrKdkFasANfviLNmfWXoHS4o5HC",
  "key9": "3E4B1DQYawnJgLR32X7oHw2C5EMo3TiussQxKMx78UpsvvwreSoXqjtMkPku13Le38cVSyGPQpTqPrTGftTJFQr7",
  "key10": "3BopBC8oVMunuYRSs6ony1UV7VmzCxkvERcoKcsKx2M3fQHUxa4RiaH9EZy54WkDznCoyA8DHU9EaMJiaFvAcQJq",
  "key11": "59mkvQNsscHLbYMuCU1edaqUBYFdKvyemJzP6wb8TLgFPNW6E4BUpsT2i6fF9zjXeBGhxdXzszzs9hiTR3YYATmV",
  "key12": "4dvDQjMYwrEAVMJG7h4kadCrVtvABeLFQtZVasrRLcaZJNR6oCtc6TU3bwyQSnVqcjGedn88oidxvhuwksis3WDS",
  "key13": "4BS72mtbe5TwVMnQE7sovJsj8B9PYRKgqoEJxWymeGcuLLvSjHwNox3qbZXs5waW2DFTSLzPopXcugwUwpFByffD",
  "key14": "4i468Ag21V9rXqQXoumP2Cb5Dk6LJFa6KkBxoA22AEPdNwqeEepQ9C93mZ48cNxEBP7oEdQ2p2FF1tPt5YCym8zp",
  "key15": "3zU2JiujL5yZesa3yxnYYMxiQa9ymTnSby9oTcu1oTueVhz5hV2gxW4Us4odTTMHbQbW48MXTMgRQsPJAL2hhCuf",
  "key16": "3Pr5tEdJ7DpFFcXYqro2X1MvZzxu2YDBaXbYTJphpYVdzZDvsuyXxhHYCH35BVF2W8NHAjyY1fpyLmWd8BjYbBmA",
  "key17": "3cEd7bXutbKhywrKNRzXaDKi6GgtfypLqFpw7D1a9hHFSTeMTcK3PY1fKfQTy84CWpr2RvfpnxcYLLbtXN5B6y8L",
  "key18": "5CVTyvvRk1Hiza23C3QHKYSvmnVrzEFASkQbWucUvBLUYgmAa2Dih9goahJ2ymwCTw63MJWNAq4SaDuHmcQdVuLt",
  "key19": "3beBEmsng48EX5sLBWYUQjQhF7AjxLzayJA3oadzBynBgfmW5HNTAHHkWMuZXmusLuSKs5mxMJkDAwvNdLTGFVDU",
  "key20": "urtxQViwLDpFKiA3NVwTioPDXWLP2XiEtwHVRuCMUpZk5oZ7Qmbm2Ww1EWcP1WQ8szsZxtQh4BvK2JBkjSbFRvs",
  "key21": "2tby3cF4rgBKbF9Z385RMnUuLFM8mgLbQ5Z7kX6nkRBQtWyKmaUdj6sTF9XrjFw1QYbHZcwNgfxwwisLceuFNtJ7",
  "key22": "4f4xomjqTeA8Th9GbVG7pQVkhCePfwHvCQeFC8qxTUNps8GMNKzu1fJM4xA3BusxU7oSXeZLdvJDPAsZvsiGnKcR",
  "key23": "2uQV28kGoBW8Dv4hpiZ43QBJtzwVDiYGYWFS9pJXFQ5AMYWqGruuBu8HGGqWFrjiCGnQbpUSayWgLGc7YaiiYZKM",
  "key24": "2mT3g5aiCYbSNYaCzwUToV8FKWUhTQ83rYbzJJEzcPQPpNLHppFJfU1fvrhtYxfvVNmsQcL14veBM5qo7desV4sK",
  "key25": "aAZKmgJ1zAsdDRstEiF3ZUhENQqCHBM5aDEX9oM8Em8GjCMWWg2qPZgBmKoNZqtoqSSf7ZyEV3huPvoRzgCDpHC",
  "key26": "3T9qSG2hYhAz2QYtxjB1MdSvSbfcqnk9ygCeHqipioSmHrySkpKbRHR12owd1nA9zHttZtsCwpPYtiC81sZLEePq",
  "key27": "5haz3TrWQnXsnVG1GqdyYwnkhDnK116HFjsvM3BRkAw7SaUaX3ok5JsgyFesQWrxwPFe4CyK4xU3cr9Hw8fLjvEG",
  "key28": "2VD33xWCfPh1NiQz7mfDXWdntpxn8cUSsbUhdjK7LAvFb9MXh8gYDhxa953u2DhCV1zrxQBnrvXTXXgXLBcg3NCz",
  "key29": "SBiff683uMJghpYfQXqiq8rkttWEcPyATaN1ubtrFgXGJRxPn92pUkkC4xP3Ygp7iy1VNRW7fvcJE38d8LX188q",
  "key30": "44AnNGhWJme9MYkugBNHLijXVjfJphfv9LtzJkzVD6xo5WkfxeSSaPPULVZ1PQsz4gZYDkxFUCrenWtFYTJGx7AZ",
  "key31": "3oUgjoAmJzVmCepoxX9owTTxiFK7nCFCdHi7jRZQwFscyyWP6JRo3pBnMrVigFyF7WkfGehCMG3DgAXGwRUd86j4",
  "key32": "6TN5sz9NFqKiBbHLdcWXSMgoCmeyuigS8Cc5wXP2faJDehfdNPQGvj9r6wjd2TYmyo2TBpARf2XdhkYmVGoVkEx",
  "key33": "2Ycr4Bp7CPpgsFqYibKFuvF16y3wxSCPqdCnN1EfdRnUnkTguPv6mX6hGP8fdQit6hdr1iFb2jJ2Lnh322xNs4N7",
  "key34": "55eUNcxsRgSZzUrGsSrwXXtZckD7YsKBySnwHw8rHYztS3sC76NKoZsAfPuULb6ptL1d7ZeAYkdWxrRVSZGoiFmF",
  "key35": "3zXewQGN5rZgrMg3krLUdynpdqZgr2ipPVNFGEo3ebNWqartdjVuZPq6XqF7fw5cG37cSrFWumQU7yNVfkQmdu5h",
  "key36": "FjQFpP94JNBH63tJdyjugNanrdZTjJf8wEs3aXitXrs2J1VNGvY3sE4ZviggpCL9ohZBpNuGjfEJTCVMMWhmwvQ",
  "key37": "54kwMwua1SeEp93mMzq4XJ4ZfqkAYJJS3zGK58PVJi1v2G22NZSrb8ugUx4L1kPXGCqm8PXhTCPYJPzw1NimX6vp",
  "key38": "2B9p3pfRfxoAeocnguMEUP5KnDZreujv61oQovepzUdMnddWUcApPQAxGomLgu6b3D2RQMqTgj66WKdVJxATTRTn",
  "key39": "4tHHkWVaciC4k46esrNi2KL241FLJS8Cc6iz6sFoAi59jquJkAGBFrGBRV5jiDLRTKAxF7dP3FLYnYfoizBDbsyb",
  "key40": "476P3aQzkeQ6ELVr1abuVB4CejexFY2SUZ7midxCgegGVZb1UP5ND1swVRGLkkAfY4akB2fbZfPk5UUFtLHWQ1H1",
  "key41": "4zLnvhhLw8cLoqDaTJJPRG5rMebUdr48xHyLpGBRg22AVLyaxWVtnm9q54dTz2ZUs9UMtaxY9vSj9wUyBt4BwgRc"
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
