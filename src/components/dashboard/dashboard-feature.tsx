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
    "5TPjvwCcygHBKoNcjfZiUUPP7Lf6UM95gDxrW8Hj2BnNhQ5jLXX4dxYsRP7Avy2PaE5xEWfrfCnM6rJoDGneCqKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EWHDU1Zp94J5DXwvtVrRtxDsiis1Sj1n7pA4CQdDQwbscJCpnM842dXZPrC4MgwpU3yCiGVcZWi9Uuo912YWQzK",
  "key1": "2YSdHfosXULjcrfvyfkQj6iAUJWe7jvzYxRQhY1MsDPciVDLyuiL4QEJMShpZwyBZ1aoTrfJcsm1FaTmw1Futgd8",
  "key2": "3v9erQ9pGL1fQHMMzf8iNF2nWj87LtzYg3AsewSdXqnHeSvxiRc9PSoTyR8qhRNRdo9qhZM3GW9EE9G28jqher1G",
  "key3": "4Ce7hbYaQBCimBchwRKxBZsT9iQa5TBnX38NG25PPufY5WPxV7po6L2SDBrG4QxdG1ED94cLrP2ZxeAdgDQkqTZ7",
  "key4": "kB13p7xqMFPM4teKMXHxeFDqeQdq2JMkU7Lq9Pzv7VfVLNVQBReSAPzPpfUBstUyXSkgR7dcKrhQLMWHjgDnN4e",
  "key5": "4VmsJUyj6GLZJwcgN3s2te23w6dvvh1MroHcWJkkSDE1Ns2pwvTESSVYo7AZmJAtRe42fKhhs1ABBtdFunvf1Nio",
  "key6": "4f6MV99f5o62nHuZw1zA3gaPaMqSkyRNpHFn9UzvWtvG4BC4yNpt3CgvjT42g824LpNqKWcL2EVChApzWS3HdCwh",
  "key7": "4yeZJHkLjanzyDn4bPxAZHL3nUg86pq9KUPoHLXVYTrKSfEgMMj6dEiHQz5xgxeUjUhAKKuxYMJVoUvS7hhZGPrG",
  "key8": "2KkZ3hUWymhc2tSJKW9NQCgaLogzZ38migS1dBS8bziJoA5pwZEXVh961EJEE6iS35SU2i1hmdfGTjFHpkLyHdrF",
  "key9": "46chwyzZkQZERcZxYo6Y4hEU4SGFTJ7SjVwpo991P3cu3TrVYGkvZEHswnUGRmRLPj9stxoXd2vpp4CDmv5Zobu5",
  "key10": "5swbYVssZmgc3PYLLgFmj1VniFLyLuBfwwJma45RZmQYcCj99F5o3LC5vsWvmVKwB9sqjsECnauT7ar3hnEj8sLH",
  "key11": "3HJNqsTytbtWkq188z27sDsQBSmcDp4fe3DC8jTYLGPxHETv94HdB593LYzh5kN6nWgiuqEBX7nSdy6dmKxaz1YK",
  "key12": "3CpNWdrEuyJwLJvEiR5j1g6umjfGoX9YYpGp2cw1eYv9zCVu6VR6Y9GF1ttFm5yh889U3jBoCZyiX3MWasvRZE2p",
  "key13": "4sBfZ8asc9DcSMFq6Ssv8SAP8ajSnqTLcyF2dzL1kydnkCBAHEXgkov5nT6ETWWK1RVcqgVZVP4BSy67oR3qs7nh",
  "key14": "5E7dD944stYWdHsA1CAcAyKFAKfcPhyqjMeqTocXydH2WnGFGhn4yVxfvDwvaDb8AshUyVwJkWdiTBGB2D7nLtv6",
  "key15": "343sy81c91kh4kp8d6dJxMDUKrcudmg2ggbfNVP5ZZvdkCD36xxeVs4bCibbaH1ETFy7T7BRVJz5Dr9dYYDTvjem",
  "key16": "39kg7UomL9J6rhH1cdb2MkP7fBZci9os1cA3EMEVT4mK8cGdnneTkCCtFFha29Pc1jynsvtPrbfkj64fXabpjt61",
  "key17": "5w1kMmf6i7GV9o4MB5sztqo1DAAqiVdQY4AU9wyZHukQKoc8s7j7wcV3U4nwXD2v368Qpuf2d88ZfRtZjtS19Q1G",
  "key18": "4ZprJs247GXFiMfrkSX3AyX62ccjq2yySVZFfqog8HfxQ5AZy6X9BGp2XEktVAhgHmBcmuy62yfwKSbBXqFfCuyJ",
  "key19": "47cdY6j54vNJ8LapV9ZR5fdn32vTUeiT3dMwUnQ17HAYsaoeB5thHCaJe1PpRy3XA2XrjpRCDFQRjt8WE7JEuim9",
  "key20": "2nr6bf1vgUt8d35p8WsrkGHHXQVcRRv4hdHpgDWKMWshQnrTEmbtFecMJMMAozHUmk1XAJwCU4GbihFnSDrXQkU8",
  "key21": "338mdKD7bCfUTpBBdx1piRw3nogDvVgV86XWHK4ei1GhpjC8E5aPUpgFwxLjhMtxYRfDyieHVEX25vp5QjEy5gDZ",
  "key22": "3ipqTByRbSqipfi8gJidASeD9MoLaPQxHiqBPSGrDDKzM4bPpoxgMVuww9ogWehCy7En4D5yYWVVSj9LWnRsNdNS",
  "key23": "59N9KJxqJqM7Pw1BU8tNSPYP3TwQjsW1mbvNBkWhDznQzzkGJiuSvdyhbFGPjPj9Bbdi3VKJcAdmqn3BCoGXDPxU",
  "key24": "25ADM1KSzzy1gGvC3ZEcUCtaJASovNnJh8C3VVAEndZ6K8UVY3G2QNzRfhcznBXyWcN2d4SifnfZSEUgBb3jNRH2",
  "key25": "443t6ugPmoPW3Zf3h2dE9kRPTtRreZJzDDkuTYwgRnnDqwS5ZL6fnXsfWBzPqGPCSMaoA1r7KZLt9q9CGFBW5XCz",
  "key26": "WqGmUjApu3YNwt947qyfuGQvybSMmxkatDFG4AFUhTpnRYNsfyqzZyrwk9iHD8y6L5TXpRrgtrg4a7TKE6RE1TV",
  "key27": "5wM6gxQYeTTwqChXEvLEWTcTQKvexM7MitLEKXD7HXqrwChvZLKam6TzUV7PxM1L4V5rEcZyvVneQWxTW8k1f89z",
  "key28": "3qgGjyrKW83ZgchvGzbLhEMAWBznPgNRn9PSVixoKPjGatuhnqqBXALspHcsQ3aBK5vw1e61J9FEeaJPZqpnyvU7",
  "key29": "2Wk8dBJsgzvfb2th5n7RxMMBKKAKpxMqgxYTZYVaFwS5e9f7aSEjpaR2DCwLXRbd433PSkrLikmdHUWNuZHYLnEV",
  "key30": "2fz468kTg5ZGrXGWtt9QTvPPxtLX19JkcpEGcmW1eah7XStchvJt3u9N5TYXgpUb9d1eR8t6xP6q6fpucaCdw3Ug",
  "key31": "5yKtFctSNtuQnjgU78HVPg2c47tc4v3CkwQXLmALPkxgvihUpmUrB3YnmaGvnFs5oDVfv3u8D53oa6JXqbXGDLiB",
  "key32": "3u8hgc4Rq6EMvn9MZaRbnzyEhWrLKcHowmEXXhpZqB1XY6fWiWdvpNzrWA4VDmKqnVJoNXyGU1knP2imC6Dxr1JG",
  "key33": "5uj8hmr2JrxhRFsi1UCwJvvwVAxQKCaTBeFjjMc3akdhcf88aQcXsNpK1AWKLHxbY1CHaUt9dZnNggFyhAe2Aw47",
  "key34": "37xPN3Zruf4nwPGUEyzMwKs3XA5emDtwGtWk9CNqFg87TVdHbSfjyQtHEyuxoBnoSZYFj592jAquH9An2682jnkH",
  "key35": "hBSUNFARD5stGYu71CbwWsUVqVdfXHN8h5XDBJjeCWAZDiUoPQPtqmzPv9nfQSXCF2XVdFEavkfEGiWooRqbJzR",
  "key36": "3ooR8CR9UKUP9c2FtidcSALX8JJsDJ13ZkqbzSdrn66Pw4dt4fBs2atT8EE5zbGFry62vpqb3DFudpaPLoMpBW3K",
  "key37": "avVPcpXkUd8jrzAtcoye4feyPL4mUjBh7LWJ6shqXSvJ3QA9LPETAjRvPjuAsm4fvUxqzAV6doEH7S2V44XQaks",
  "key38": "3RXQbYBpPEYW5bNbEGUBhQLErrUEdxkcm6fuzfDVtoYBRsGLrvPKBzxaYWDAgrTncvG2RZ16brmDE4GbKocXq5WN",
  "key39": "28ARP9HkahrkQHkM56oRnB7VSqF7LGWaGEpVcu32ibv1HAbnraR654CYtFUKs75hDWKfsKvVx9RpidrSMKtf9j5b"
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
