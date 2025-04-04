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
    "5FgH2AtMR4yy7Jj1pB3WhK8S9T2dZP2rVfFF5gutVet2unc2K6E3k642cLUb9pDXNPMbRAHLdLnQeLrnSnQHVg1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFeymVPtovkGkgca5JnzziU4MdTYHoqm11fuUPjs7297HVD1aX2PqxpKKe67t9HnVuKoXV5C4HDWjigMHB8geEd",
  "key1": "2oho26CpRBLsYpY2ogpnSb5ac1LyYzn2b9RZwsLcpxmQbS3TBc2CVsR4f52KqFprEAp4d1VXqJbbQ42Z21w77deb",
  "key2": "4YkcudvTrqdb5DPdPnor7UvbgqwRzsi6MT5c3jWQnxHZUZt6J352AyS79sTw3YE2Tp9c8gPfHCMRwq2BrwygniAV",
  "key3": "35aLmEpFFmj2UnrPn9DiHnuMPwUEekfgANsu6uQP5RHALLEUMjvF9gwSobWkh35gSk8qptkenrdCuxL17HB3M3gg",
  "key4": "4QZANr4DszZe1f8ruWooDgzQt8aXVE8yCcHvT8s5rE6BWhazEdYbBJByJfNZF2bjBomQnyDWnFK5BamysPAWPeut",
  "key5": "36dTeViN1HA61RioE3h7JASHq5bML9kGzsN1r97ozfrcVdA2ck4abF3p49cXkSCumhxkps3K8G8U7RkA3VreBfVa",
  "key6": "2ryY4aGLwUeoTJAuRqDjHFPUSzHd3Kt24h7qxK32adnoXEtWrHvyrZQjE3TnMucocFXhvmN84PvyWWWayQNFaX8p",
  "key7": "5f3BYQxsBpUzR7ybzNNN9B2PLUPUCSatrnU6oH7RQZ8KakoQ3qmtTjx4SbvjyRxRw8UnicCX1JFdbLiUebaqqfPa",
  "key8": "2zucDkvaLteZNPga95xG7hvvgWxHaP2J1RFRRYHUApkwXCC2qtoMZ5b2AhaEGuTnKrCfTp7AdvHVVXyjL5wuHQ1f",
  "key9": "4K2CVs1N67qdYwKjbKhsqStvcAPw9HexDuRA1qkytmfn9Y3KR7EhtXDEmeSwQ4UPDFZxRaCWGbqGuPyj4BB5CewW",
  "key10": "54kFnWea4Auyhs4zkZ5Dx1uFpH8JHBYpuzEFVGUGUrUKVugot1rdhBGUcKZ4AcHUovrR8wcHNAEK5aUGAHnqmvCC",
  "key11": "3ta1LN3x5UXKndsShxfoiSWyqFgp4cKjcWPDnXUeYmvRzxqQcZGeoL2RchqUhTwRXfEK3YGMXwZigLCJv2p4QeUq",
  "key12": "374BTyBSUX7CfA9mtqNr6ZbsgMChXKismx8Swcbcq6SPpCzhrpjnn9U8M8zKiF1VDoNLmMANNDAb5byD7WGNsJtH",
  "key13": "3u4d6z5iNZcpkX8Gw4dJ3DVYYNmkUv6EbrwprAvwG5R9YuVMaDgh5uzKdF75iw5TA9MXiaSJqkDZK3hB5Syexpez",
  "key14": "2Qb9R42HBYpYYxSzDtxSJ69XNgmZZTqP6YRzJLcwpUnqpfpwEMzzTiAnhCyFm5y58C81REa5oKPou21xQGofXKGR",
  "key15": "5v3BkPaALNN2dQSy1rfyzyMg4DbkFe8HdfM9y51RM3mM28ubUj3JBzsV7GGJrJSPmYkiEzNucinAu7JoVB9ijy7y",
  "key16": "4Y4Bn6oeREJW5dkhLHTEZTucdjyUuznEgGZyRmF9M8f6MWvzFhCUsnKX4WGdUPBcFtrVGE6eZA4ayVd5dU8KKw6m",
  "key17": "4wJKZ1rhdp7R3WfpT6kFeqM4XmBJyVKCePR7o2Yyy9LU2mVmjzMukrFDDY6PXqBuC42BMQbjf56emCuXqVPXLfEz",
  "key18": "62BWZphsFkGT7Nw4uuAgSeJnVozH4eUwSnwzf1wWwmvgZHG1quNchawZz3uYv17oWRchkJqr8TLStdJQ9uMuXfAq",
  "key19": "644ttCF1W5yy4nphHcUa1Eis8HuTSovgWp4sisdhyvrjf7zBjUkQiJNE7QAuTBnpNWXiK4Atv4bBxEgwQJo9JvDa",
  "key20": "5GSmXuKgqSqQSX5K3Y4oLknhBHaTSDaost2GJ9qWzF4WgSoTKQvMxu1TJEKV8Y5CxmQHfxmEaFrgpybztKk7zV7i",
  "key21": "5uvgzJdVgc1GYKdkoU3FGoP9esKQY5TCGaF2ToasvvFd14XWbcnGWspXzJXrqn2dxL8X7oi97NjGwXQh4Zniu65R",
  "key22": "3i6WZK3XnewufWkv7B93RXe3Mr9knW14raLRjF3RmNYyQHZHFMn1krZWypGhs4hqcrWPdQcZ8vD1HFmWjKQVcaTV",
  "key23": "q7h1LNMhST9E5rBpDt1Hsuvs1pY69mxcZUdfZCsj5hy3dXNNxsY9zaRQdeqyaL3Six1Yybuy4sX162epuPxYEfJ",
  "key24": "2hX589zMaSZGQo1RP7tEm3wZukY4zop21hU1WuKw76CEFDaVuDdFAauZcMYUKwcRciMAzgBzkac7hykzu9PmmMao",
  "key25": "62awEkT42kiPEurz7c9BnXVyQM8Ffhei2WnY7ZURrvfmstmePmNcbPFzorbN2gr3hXQZnehR5ZT6XaScXBwDujb8",
  "key26": "2166EQpuXpyY9bnouxVdEqNcfUSV2mKHeFVrdEYEHawfaLyQuar33kEtNFYZ8PWxHEXAt43Nb8GcjjHvcQxo5GY5",
  "key27": "42RTiy2hWCR8RtEn44pPTrhbL9ryS5dhcBHwy1KaeSzgzhcPoAgbCocrV9NCjaoGwjXak9SGy1T2qz2tb5PAeVHi",
  "key28": "2HcKLKHffGh2RTjy5g5CArSri9gf3mDWv3BbQ7jzyroeC6xdycZjwEjoLpuPvz6jgCAf5856A2X2TyJahAjC3o7B",
  "key29": "xcRRbxHoLXPfD7eaNMAxXyK1V8WEDVMnvV1EzhbFcndSdhL7YLtkTSWK28ypuQFVvdSQPvhd5kouPHSLfL5Kbai",
  "key30": "kYD31rzpP2mznJM5r24kpsrugjiFcTfuSthgypKZch88k6SaWzme6GMpdtSoW9PbLSiWYJurWV6VLRp6fcL9B38",
  "key31": "3TjdhA31Xncq5mWDBzM1i3LJDWV4QMMWw1Rn5PjEPBwBoiBEVLpUxKZSGn8tuz6ANN6akyk6iqy644mthwNZFWLG",
  "key32": "5H1fPucTJyPLsitPmgrGEJBQgriuLtvJu6SNWhWmK4uHPLFLoFnt5bTLnRuAMFBWYgmkp48KeHPqVcSSxvbGvjiP",
  "key33": "3P6Afsn6WaqwHKbEamsPy2RrY4487Dm8HtavxwAg4pygCcce587nAK4a92PjoDUTLaumRAw4Sib9ZAJrUngzHBjy",
  "key34": "2rYkNGfeVtB6THih5RbzSyy5UxZCn73KjG1zK1aVbieuVYQK3ijuaHjAEeD6hFvTxcbDfTHY29xGXT8MbaoT3W4p",
  "key35": "3QbjFcQn1t11PQg72Gay4c6mu1aATsWt1rcYbVb8Fo7k7LfBxhiUZvP7mCnQV7H5mVbNCvXghdyqcs78bTmeGqM",
  "key36": "HCqkzTsfWinNV4RoxDo4AVhKMexza3CYF22w9wWpA3Av1sqMqEZ9faoyFAKhZfDZtHGgL6TaRRBLdAtwVYjgZ3p",
  "key37": "4EQ1pQ4qi3UboCD4gcFCLu3kQXKjzFskTk5Z9beGjLQJtgSeNfc5dWnvvpk5SJ79F6sNQpka2r5ZZtc1jUnhn1Gb",
  "key38": "4krfVcC1RiEdHG8eUku8QBFT8cvbMDbtEHaY4Mc7jz8fyjfmJamrUXgUwbN6v9g686DEyKLSkepkRCjuWer5zwb2",
  "key39": "4hvezK3tLJpzoFa35ErDN5nf8bVGPijXnkmBsJZUBY7E91gyDXSzC3oqe3D6NqYtGcBrEHbU983ykzGv2KgH6Adw",
  "key40": "De5fphsdZCD1eptqXwPLM9v8ThD2U2bigHmmqfe89uRxUGLhFmVQ5nJwN7KvZ7HtgTTTJjqBD9modCyQDC2gUJs",
  "key41": "5a2EN2M9FQdkYEV9NHSeNhesyV3WNXSWMvkiHnWHq28r3TVUknbgziJwHGhMcKJ22aNVKVRosAvpVLuDcfn3XRdu",
  "key42": "5g6BmhfBbaFyZvg1jXXfiN7kKNkBuTbFtj8CH9Ccuuk68sKZqAWJ5fw8fww9tfhUd9D6LHjaYSPq1PidmW9Z6KEH",
  "key43": "3bpvi2MuTZwsuguWGXZD3qAfrRqFxspJ21QB8nYkpNugt69wy1yk7NF9Tacd4TRPW8hg8xHKmQuDJuebawmTeZVf",
  "key44": "3Ua7Nn9EVedzad4fQGBtLuEpmtQYUau85dSeYGVKjvUpPSa76RPH7CvpbCrdYB5fPavz8onurGRvUJLPW9HtyWAQ",
  "key45": "2WebyCqkNGyMSHYoKgABgW85XY6n3WjWsFZSrZbc8JsjWqMRNRH4gyxrCwKH96EWEoB2eRy3Fp9Mnrkh9p4bSVpQ",
  "key46": "gSqj8pxadPQJqikdHfEeGe4ZZ9hSRc1fz9D3EWparQ65fTFvkvki8cGBKDREkm4hzDEp8S4QNXBzUrVycb7ZBSg",
  "key47": "BSBwxBvMJgD3B4pjSjoQhwz83sCt44VoRQ2n2pKPQmKavtUmFY9s8YrK1eeeTfC95MQrUdKunPSGX2MMRTjLizr",
  "key48": "2sQYCdw5bgbVFhjLTQBJg1YEDc1Zww7ApgCsbiwjJs9pHuiw8U4p1rTTFLaRMq6v5dQi1qATs5GDyVaSjeYwMCDU"
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
