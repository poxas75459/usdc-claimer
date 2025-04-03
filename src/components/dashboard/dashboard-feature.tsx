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
    "274ukTRoUgTn9TaDj26kotMBFea9doXeis5mhUbtyw5BAXHhmvTaGpQfoq8mYMkvMeFeu8rLssQTiQeNX3EAkDG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDx6PwYfTNgwTvPnffEzCGCKihzhQVW4LSWiDMC1wxtzg9YWTnx71n52bTwDMwP2ocnEntSRh7FtHozALayA9Nu",
  "key1": "3dVqaibByTG2SpeMgvtdUvyErhx5BMzPnkGAfdfNTMpyEPgff3qUt6DG6xjzdczvKxhDPdSXYftkVRmCWxmLaPXN",
  "key2": "5nXfHTyDtozqnKqh9gusMfseKvTpqGRxjjiLrwXkpmXZJfGjBVyqgRBbVacrLqqd82Lu8dHpbUQHJy6DjUBsrhki",
  "key3": "5YRzXpAp8QM35QJBEaL1WgvpukYTLVQmMLXXe2rcumZadisQ8GUPR7LA5sFXPSibGLLneonLZDX3ss5m61LajzeW",
  "key4": "2dFGruicXFaKeEqZDGmaBwT4JEn8n4ZhqGhitS4Md6eaco9Rh6rHMXasyxv3je5PrPashUdUysoEoiSina2jk45o",
  "key5": "ct9tbYqneMc7yVEnXzpKjzRC3JgGMommzDi6sXWaH2BGLBChNxTN5svYJQD8nRSrWA6FH9p5nLXu62N3JZD6DNN",
  "key6": "5dQcGBGpZZRaQTcnqyeWEwTvLNXYcXxLTMLfY5kV5Div3Jw86L97F7sSap8QkyQdmUapfJ8jLUPxi5Ru2LzPjC5Q",
  "key7": "311puio8rjGVvHhx6tVxAEcn1R9vQwDdDfK5r2oYUfV6oa7M2DvP62xbuPJnM85AEdf2teqsZLG4hfkyTLmicJh7",
  "key8": "3XUiRd5w2cBL5Ex6E8F8Er9JmmLV8Y28DYrmqFV6y6Lpv6igBNsNY2Unzy2TKYg7iqVp9wrkpBy5LrQs2PPj7a2y",
  "key9": "5zAAM5vPsJgS5egaS5b9VSp1h2ZNbD6RxuzX3XdEvmyfLkpsvx5koYXhMta1nDdidDxXPhPtAMzSHTVXeZKGgwCy",
  "key10": "4JjkEWK6Hg8c8ayjS5ZsG2Lxxi2584YCrK8CvgvB3Jkmo4rV2jpuYhbLzPnnhdrqR9jfzJhVGjhvvndbyZGFYAsK",
  "key11": "inoFMiFbe5gBTqTG4gjkk4EMsGWF6qZC5iwLsu5pGVzvM7eHWGw3qjYBt1JvwAmXAZyiWQqAxgwRCHA28B8fLmF",
  "key12": "3a4ukxUsybLfDqdarSnwb39fVpTn7QRLUcdSUwjsXYEKK2LYmB2Ac2JjVh5sXTbFWMaNPumUSL9McDBZKv1jYrdW",
  "key13": "hj1D1dDHzbykzW2aQDVmjL6Qz6JjH9y9WMFWUcfyrZrCGeSSUim736TNh4cMKS27xoSVhpWf21Sn6obdw2RUBYh",
  "key14": "SpJaTPdbpbziQ9VxDYEmQasq19y2QcozZUw3JBHWCYeE5X1h9H7sUGLV6tpJzD2xYDYdPc1rEN4hJd6bYmUttVN",
  "key15": "4yaXRefxH1fSYSqH5DwqsmnMijzBEae1DZGnHwF8Nr2FR8Pb8i4CnPSBRwsW4jRtdnE6V8FAQQXGNGQLfJp7Y9Lz",
  "key16": "4vcPUKpTEbWeMh85kqLEupFfyVZEHVXvX8QB4uFs2xzKdBq3FenxaziByvS9qzuuFiKYg2VQf76co7JmpfWiapqa",
  "key17": "4LbSWYiUffHS5Vu6i68UP7yNkUPvGumhSZ2HNjW2W5gLQZPYBaKe2AuxJKxJKFyZWQEaQbkhS3BNSwWms8rEy9c",
  "key18": "deXNmKYDAyRmM154oJuaxNwcazkeUX9h9gyeJTSpYryXooA4VNEuLSMwSzRTZ8dXm6NPbL3X5VRxrNsC1S2F1Ec",
  "key19": "no8MzXCk9VfYzqy1sbiDYTJvfNGxuZwfVGW7HLd3Zafpgnx1ybtfmnZa6xCHejfGfhQ1ABQYQVPyNr5yZtkz3TN",
  "key20": "3gPitz3E8YVnBunHst3BCQjzRuh2P9ZgAZvtS11oWhPZeUmGtpio7yad9SUQnumiP8UVoFGE7tbGKDgb9YU68U5H",
  "key21": "37xfeagtkNFzLGrdxcaxeLCt6Y7wWLmyePaiJPY3mShhZNyqxHdfKqbkR3BW6oiKYKxukCX2cYdZ54LfGaTzZgvK",
  "key22": "msdQJuhAjziHKk1qJdtoDZSVAyTk4Toudd84WYWc8EwkGv85F5HZ8S63uY5Q2x3hsJUDFvKsnPVn7ca8Ms4jTX4",
  "key23": "4XgbzWtgWC4LHbDcGXVNZc3ZXTuXucJEQcpxpLWaFx3gmA3sVEa92NsUuoLGY3WaCyPBeveUJ9vNqeHJtJqM4AyU",
  "key24": "4htWoEwVNaXQToaRVEQCL9uofZX6zwhPWqiRRY8njhayRCyz2t7EXKfx14n8N9Vyf21uPFSZ7fc5LVBE1G193WuU",
  "key25": "2Hber1ZC95d6EnMrBCc4H6NfySdHziJX2uGyjiG8sELBcJLqLUzusBpVHgPghfTTFQzboxTrcVd5BCcVi25VDm5G",
  "key26": "266GHcYe9Z9cZLNGgqvzw847UpxSeX3Kei6N9KGj7CAubnpud5zXxLHPxjDg96MPcWQtb5HFcfatNTr4HweaaEaj",
  "key27": "2uYG7V4P4W8mqvaJ8vL1LbTC21W2jps2WSgJFdtsQL7nSJsK8ovQphMAQT2FAxfw19mF6yn6SHzU8192mh3bn1mU",
  "key28": "oZomzaqi9nPnbhEJxWD6vtCrefpiFMfDAPt8Z1gSprM4B74GTjBLGdCxCAKxvYfG8ZJE2mUJtHxnPbGpVjE3DLr",
  "key29": "4Ay515onbv72BUES75NVP7gj6Gp7vN4JSefL8QcNvybbJZWkoGGXX9ArN5LJB1PMdv5i1ytzAfc4KZFmLo7HFyjB",
  "key30": "5xWWHBXG25Rx2XiJ3mfLho13gYkqGHv2eT8WyAAijcAKokVZwJ19ZeR2wsDzTJFjeuFJ3fGSWryt5qyMU6Up8GT9",
  "key31": "64N8wyxAgxNKSLNhzgcJEe4C4zpTauJeymCjin9WDdbwf44CP1d17Ra5nAa2eXhrRKXqD3P73LDQDEf7Nr4KPjwi",
  "key32": "4B4a7uDAVQCqcSgfWdEzauqcEQ6NkKt4eTrddjrHXv53oNKVyWt4BZzqogSKzdDnz55ERsDsBh2fqHeA54cL3cVa",
  "key33": "5AgCN48cfCNrQDroixgaYpFVenHQZTRmjqbPNQaPN7gLx1nsCnyRXXzDPHKSWb1JUD6sVx7jpSRzAj738TXhpDkL",
  "key34": "5F26PzE7VFkXA2aMKkWmAgr4oVhXMbbxbTpi332cL4H1Mn1KVQg8FscWUZehSKFtb76Afx361h7N3SWoB6raw3Az",
  "key35": "3XiWz3QXBGM7NRseS5DUXKmVKpbcGao535DVd9m334tphusn8Y91E2HKMmJBbUptbWfsfFKdmAdjP4Zrz9nSMLTE",
  "key36": "2RtpQpjVcoGhp3E6Ax2x4uVyXK3uMDKvZzZphXAyJwer2onZpwYCENL47oCHNESJeFQY55Xd91S45ayqWmKozMfk",
  "key37": "w8SFchu13GWdkqAAcRJo1L4pUJ19Stf7gLU6yfCWA9WiB8155yGXEMPLd8oqHJ7UazYtsgNfdKYYHHvVQipxYyh",
  "key38": "3j9njQSg7oeX9isj195vJq8dRhkL8EHxApXdeDVKZU3wgqMNhAkjK7a7HEtsFt5foJPvpvoTvHQM8eCNQE8733fF",
  "key39": "2K3icava8391GSRWbZa7FEEvsWhsFNi7DmpDyD3TUhQd6eu33h8CmWWU3k83AoTqmVDsqLg9P8KBr4r3mLdPaqTv",
  "key40": "5sKoSeUNTVfts5RJvDG1j3y4kjVRsMKRXmtWy2KR4dqC1W9ZDoBzSzSsWXwffaiZBtRP6M7Qk2WYdbALVhRcsWUQ",
  "key41": "2aZ9VPLZKRKbBMwr5Gs2jjGKNPHjRCC7WgL7KByQCqWSn8bhJUjuDDgSmYj6pifaXJ8imBdb9MK2m5bd7h5dH3qr",
  "key42": "4f2hnbRocHp4GVbBdufgQYs8D7QHMFJoYLeUJmUfmQ8ZH2iJTMXkkhKS4w9pPCyAT7uhtSQ5nHdA6oZHCXVg1gkF",
  "key43": "64kU7yrzrevaNsfetLbmy47gFiyEaxXguzhnqgEKELwLQxHCE9HQhkP2ktuNjVUnPw9saZMk6SgC9MrJfyxdy5Gq",
  "key44": "58FCZCKyLU6n6oY5pMbyFtnrNHnkKstSWXsvWCaa5TpRM6EqoiFuEjsuA1JtXVeEWuCPQ15V8x5AAPXwGNoGWrZT",
  "key45": "51pgxGoCHo7nVCua9BWqvcotctPiPrRrxgQE12wnBNHarxcrmHnnaovZhhRu42oGWg979Bh97vggtLdibzaJhoBF",
  "key46": "3JPdEZa8vWX7ZiTvm5ScYc8y1PyzWCQ1QCR6oJZGcgzNVRyk7fuaSv87Tfu2oBQA9KL9rfJESUaxyuiH1Uw433hw",
  "key47": "2dMuaRynrtFc1v5S6c283Jsvgsure2PQkTF4v6V8PeqiPdEuWxRpie86srSL9KGknSTW5VJvFwWjCWaG3oHmgYNn",
  "key48": "4gJCGvNeybLhoRPbxGeSBeJP6U3hQ9v6evYqz2ZdGhyZm8cYQNudukg6Vejh3irGtj1Eyfvthn56p6Cgrqg16cyP"
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
