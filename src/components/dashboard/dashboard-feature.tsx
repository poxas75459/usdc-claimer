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
    "41ZGA5B38DHt4nzQ9LuZ1gsoRnP2TSwQqP59KhqbGNYzJSFJLD9rdjfgBRnghrZ8N4EUzhbzKBv4Y1zeZc9Lkyni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pY2aVdpXQc9J68tttXyGBuN2k87W2SsKiKLjyn9gm9cyesf9rbrEDcCgirfgZttmwjHwUw2QAaQvWHkZw1fHa1q",
  "key1": "3nq9cUGBzHqnUZPRdM8bDqTrLCHAbz3ucwTCfVwTax6bbB3e2x1RcqpiEFGwqbsw86u3zTUVkL3Ucac2hZmHgkBc",
  "key2": "5MZUuT5nkZS81fi5Fb1fhbn6KMfjKUkTgGRXn5Wp3Ab9hmPUiCP8M5JuMAahhcrTe23zv4ygj3kTVWoSeqFc2PYi",
  "key3": "4bebBDvpMzipzLFDYTNR1DgPtz7UC1sKB9QEUme8xeCVhP46gjVMJyisR934BTKHw4QjxiCvdHNngf9TPZPRU3mA",
  "key4": "2nXynuTZBDxmHdxizLo7f78P6xFFRHCSZffSR5txmJ2Q3TBSei6MXBtp6jSHJjLAqYGWiEpCRCuELXtEHUPatvtK",
  "key5": "4LUSBrYJ9fgBFym82RL6bTLg4fVrgbL8zm6GbRWPbW48rLSoNePH7rg8KN1kJrPwiFNRWW3UpEtnJSTJ7AfhPdBW",
  "key6": "2RMn4Ezga6C3whaFdeHTMK4me2gkfP5CjoRi2LiHpLXGu8MBx6NhxP3NA7fZW61UjheBb2UyxmRocLkDTfqdNe61",
  "key7": "hYUKqJqFoWMVyKbL2kJwgL3YYwUELB9ssnfTSZi15wgTJtkQYXsEqbjte4e24tCQ3D6mjH1r1B1hJA2VPioJjqe",
  "key8": "3g2KtfVZugA9vNWMU9CMDWoY8Gthm17f5NZ1U1c8SWCftvQ8zpqH9iuPMK3zR1A8cNzQkq86rjp9QKsFC8zodHLi",
  "key9": "4qq7QWUaXcX1fw62dLNJScebxRUhJYfjfe4SctweWT39E1WKPckBU9oQskvL9reMmtW7V161N3cHSTV29WYhosG6",
  "key10": "2dBDasctBWHDNB4rA2iDA3ga4xaMFvB1zXQensVvRJkenxACie6HgZvzS94pk4xzbCerHVHkzFXEBa4UtnH2Sv7o",
  "key11": "3BdTNaqPHMdoqgjrxTiLKFWBQ9KKmdqvUTG9CQjCLAqVS8JYSVCLvBmutgBdBm2zmsdZdfmVu6UcDmZpAkQgJ5J1",
  "key12": "VYFK19om88fcrDuPpxdPSmHKAVt6kiPGmfViWrXEifm5sYs7DcyXgMxW1XYQK9CiMmpFZN6bH1K2BwVPkTUSZnX",
  "key13": "2QitrTiMinDmcYZ3dyLsRoubaC6weCioP4HhB3LBqtA65JUHteT8Yd6CB52nfnc7YzM4jzKv25rFHBvFvF7dDCwD",
  "key14": "3PtHiUAKc8SAm9z8m16gFxyQYSsQjSMc35uLfSQp7diZoXko1JAwEq6baNjRCqoDJVnyxwKSa1WxyZFAkw5mY13p",
  "key15": "5C7gfe9MTpsrd7V3pqdkFfNsASiDY4PQdfhmRwGc28RE7ZJq9YkYGeuMFFvzDEeSxUdbmJwbR5Bp6BoxRz2nDt5H",
  "key16": "KczCJn66LkwejFrL2rnyrsp4VhW9kq1aYLTtDMrj3wjhAtS8nsJCJB5JsQkmJA1z7ZZQhzLfFga9Ygspm4LJpVm",
  "key17": "5bJ2PDwd4TKT8WLsUCGJd4Zy9ATUQTBnKttvps4gx7giCGnK8QqCpn3YfW939vnFXgNF4kuQ9Xm1JsDfpwVAG4Jj",
  "key18": "5Ut8v8o5EWTr11DNzybCFeDdXjsuwK4c7zu6pSC5AxzY2aRdkresf6kQ6gokPE5hD7wV9u4n2etXMRmAb74CufPW",
  "key19": "59FmfofTvAVjXUJWB8Z2WCGwaEivHMAMmfub321SrUxrPCbT1AGjrW2ffiYyBmM6Kt2PybKAZSYqGoYPwoTjFogY",
  "key20": "4hRdtFzSM4szW4xjABRwGuRqSV4i5PQYe2G2tZM6TzsqUepwVmk6azq3SFYaXNFAhz4KMp44TKrdkacxSn7BET73",
  "key21": "rpgqBD4XswuknCbFe4QwGUmQC4ujcCJjjaLwNePkgB6pNmgSHF13ZCfMRN8jgyhknUV2jPrkAoXVGrA9hXtBK1P",
  "key22": "2Li64XLNH9qZupqQpDQ7mVKDd3K5oaF9UR5jrjbiZPP5JPsPUnLW1BGWqauA2Yw4b1RDZXP3Fyqemr3tHRMLmBgJ",
  "key23": "4SCjBozcp9S1CKbBBngS7LWpreDxfLFZteZUxyToRUfuKhcGmz2CAX5ghpzBnNAdJCMSjhgj6NEkbxBnqnvUe1LB",
  "key24": "mN44fpwrb7dpsxz9ESQxL4rqjG8XV8jDi7g8bT9LSQKBYVQrqhb7ZqP7Yf3eG2y4bcbMPGmArznEsDCRoYyJzE9",
  "key25": "26W8e4Qdb2f3PQeJdWPZbycKCrouk5Ji1Lv6crGAUfEPA68mmmc9TA4JNDk2J574GUCwQXdWMyJw59yYa48q9d3g",
  "key26": "5KrL6zmkUVKsuXnwX8w4SwLGz55vM5dAazEdP22Y27YYS7gvXTJAUrW72r6v3iQKwQTKjaVirDpr6dZeL29Axn1i",
  "key27": "4tCwVc5KR2ybCSCJxbMtRtb9cezFpZ2tDRZDDCcxC2kWqjaHPZuJigHYDFYUJRj1nti2JEamkmrqrYdr8iZ7Cmmh",
  "key28": "41oJu62qdCNAdeChCP93qLDoAzRcWUd2yVYMrngYewrctFGYzQqbvzRkb6tcCpzFZpha7SY1J7VkDsa58vA1mEZ4",
  "key29": "2Qc3CzPfntMWRUtxbFKJuH6aLLTUu2vqxZNsvZgsXcaAbtfRYvxXTHdXKvvs1LUmPpNJ2HMHu8CriKh9fNmXGvPa",
  "key30": "4STnrXhmneDrwu2ZKr7hKV21us5EcZowZ5NS6Xq3aeAYHxrSKrfDhrcErvwVL98fdfjZzcddFHhaJsKbDqQ9HALw",
  "key31": "3Lt3UHdBpE7TN7KThSa3AzuNZuxXU42HBRRJxqz4jorCU7VtiHZFjAVgbExJjkmUjksXXE3zdsfUT7dJ882oNED1",
  "key32": "3k1YHdBVN2Pq3F556v3iNYkTJnRFbZXNuKCmwA6utkzmae2w7mttYrUj3rBaWJnSmuKj66TcVXoNFYjuSq1Xe4ss",
  "key33": "4HCBMVkaDzuYJtzDs9nzoN5cV6dTmaYGMZrpuSHuiUZw2teAE3UBQvfTNUvBYMvcWPdvYBDgV7eT12LBofGVac3q",
  "key34": "4odzLaS5CbDcQ39NDcM9uzjKbUBQAGaxCvhRSeuGod1RDBTcbfRf9BdoeeeUnP1Q8ny82GKGyLrYURZwr2Ei1hg7",
  "key35": "31XSGaSAALu4ppQcy3xkDZgAyrrv3En6pLcnozVNWXQCDTS8Vdpmd6EnoP8CtiitH6yquiNDWPvqfxgfma6UBZtq",
  "key36": "2szjNtyKb1Th48webDFXCrkK124QDR5TAFg8zJ45keQRVf1kMTgza9hPre92qPJoATDyDko4Nuq3BaXK1rKbMDqg",
  "key37": "3gfaJx16WPJWZAU82TznB34kv8wFe7M6dYdTYMbE4F3niEVs9GaheY5Yu1w2S4B3shY32ZMvipy8kPCN7rCfm2An",
  "key38": "5BmP3Td7bBPeLF47wmuT63d2UsQYqaTGhiVBxgN9vh6jSDdtyMLy4zq7YXzkbjwpqK4DTeYoB6HxfDo1kHZ3weqc",
  "key39": "8Gk72yTF51f4Ajbupg4VWzGaAGzBE3W7vBZWsP5Nzj5VnAVeHxDzUPSrarZKH8R3E9AXcmkd4JxpSZPnm13gBRH",
  "key40": "4nbWLbKkYuqv556sw4nmetuK2SuWPFVmNtsxkRMVFgXc5fuJVT72h8p2Ec7oaFRvCPPHBPC6DYxgnzAwYvuDZ6GF",
  "key41": "pBBNrZ9bEA95Fr2ws4YgWRBWYBuUBcZLTyUbWuL2xgf6K5Qh3iSzCTeb1pvmmqTZJaL9vJRSXzAK4zcNP25Xofv",
  "key42": "5D6c7weu1KRKMSNTQbRZ2EyYSLk1ZnzGsvMUiXEHNwgm5j3ewjSMpsqrDZrxVLpRMBv3GR5WUwpmBBd61K4zgku5",
  "key43": "5gS4Tq41PLRWxudGEGAYQpWhuXZqTxgoH7sf3FzTBQu4bUgW3NwHViHq3JoBnKNdtSdrAVrKe2L4VNMEe1ahpv8X",
  "key44": "gxKmkQpnK2a5UnVrfQNUziGDi61mcUKSzFEUwQP1ZwrbAJLJuW9AVHQ19XYRDJgvgyfAkMJExcmuztKQGnqkrwo",
  "key45": "4Ldk4AKfX9XGJLvov3yaPVnd6u8Luzn9oYJ1MBLi9oV2FPLS5Pkw3sevioL15Q3Dk8Yh3oS9BjuCrKAa5w43nugb",
  "key46": "R3qE84FWVbcJwZTo7nMQivbzRhdyXrYHNRHY2iu2ULhgFke4YAaRm2WrAhfa54iBp6BWdSqy1QvoffyMtfqEeLL",
  "key47": "5PfxFakhTtR8ebavXpxJwPgnbkhzPu7RFtmyrDmYGv67HbhSANnQTfEDByQcne6BtWQUSryz586GP2SWkwown152",
  "key48": "393K11aV3cCawtK7gtze2EoqHCxX85ocEWMGyEkGnMBgNYUR93vEVm9Q1xqsjP86Qeupsf8JwpcA7b1a4AQb1SPv",
  "key49": "5s8EidRLVP7dovNLvn9bDQ8mabFRJ2zGcJZgR8Krghj2xXfYPpQEJkqPNsbEdKXF3RMD44SBfHgFQJRPp5HDYy7x"
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
