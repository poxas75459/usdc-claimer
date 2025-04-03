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
    "2yyr34sfYcttnefY72VbyEWpSW4wg2VYtyJrptwrPvhU4hNEdqPL82bs1FKNYxKGAXwWrb2zN4me9k4BJaawMSAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acfCg3634D4bUNm4cJeBKUW2TaD8fkw3z6qXYicx4EM4qhtw6pWDL72wH397abiMBu3cSJLQGpXLpZjgtYqQdH9",
  "key1": "4N7QkyMRygndShbx1fNn2qsHgHm6vRG41yub2tDY8opAwRRVz1VN8HYKN2frxCVfH3oBfwNizUTwekQgjdyYzjx9",
  "key2": "5Cj9voqr2NAMgCJHp7k9hVostPwARBnfnKBgEPsDfF9qMtmexMUHiTd54B2pV6AgoVQjppBkeyGyTCu1JfsB2hTx",
  "key3": "3K7o3QSKJVTjFMrHmCN1ZJP67y7bK9CYMDxEKoBzjDBkLDnK2brDyRAar8kubHdv81vLB2QQJG6nFL4doRuBmvPb",
  "key4": "2MxnbUsUjSgomMmZb567jt9La3qKHAC3xASmRyk45XNVUjbjmWQMv3Mque29XthSnGULXBMfSbLEeTdomn47jCsh",
  "key5": "3A9MdeitJ8v1nwXWEVwqKB2riMadbnsspvX16SNKr3ytNguWKuRLqND5eLiSopFS8V9utNEjMcrfbCi9EkKBdHEQ",
  "key6": "2hxxPD4dnetvjjxPiwTbe9ocVsgJfjf4cDMjaFGPwda7whM9WfpCFUq2VvGbtiXFidCsEv5epi9uhsTY4KarBAra",
  "key7": "5zXCmweKvYxvzjMyFFgYdfkjMjrMhqHWQuEEBUkn2iK6qpe4W8cgAf2wFgKQjN2izjaBfokwQevYRtA4kWdVBJQY",
  "key8": "VDrGwEVBiszA8hNcKNfzx4hyP7usQ7AsgFzuMYtnjSxgGeuLcDafj47apeNSVmaw6EoX8rv7LwTv1AjEMoMo9sz",
  "key9": "46Xagdgpa6mfp9mpFwhBnBmsJqRwcSSnDnuJi3bnBrnzaAxjrDFPwy6UuwNVCv6QRaWbFe8qKSijuP8SxhFMhYMe",
  "key10": "2eCFqQ6wemAjxRcUepVPiK3pW3DgRDVVeGCPSN4NfMbPxZQDLMG9ttMLPaKvTijSH9gGb45ZQ5e7FjdD2bm5PPch",
  "key11": "2wvTYyfCPudpj9Msk9hED2eC2ghQRz4UZGcTvjbKEVm8vZ1zY2NRFJWidUp3cT716F5KiahxcHfYEWaJRQjfFzL",
  "key12": "2L4ZYTvSFfhzSHne5kZxT3xLQPeUMtfBjQ9GVc86nwFD7jX5R5t9iEjM6qH1ANK9depauGURdoWNKbiJPhcYw7XB",
  "key13": "Fus6H6KXJ4vcayLysLof3W73EmivWJCVMcY2f1mnGDxyLF9PzJzURhLzkWkYkAf7fWsV7HVxMNzBuwrX29Cgprs",
  "key14": "2dyTWb7FNZHLPgSs6m29cKZ15mQAmmwRR2dcL3Y379QCnuELtbAgeLYvpkF8rMyS9P3crvyH6SMyQs6RHLWMphxd",
  "key15": "5sYAYtUxBpHKM7bymqjLgXg93M23SJkqiMtzwCyjTqSQxabFA9sUEQWAD5iyWiSvuT6WesbWNWoLcZiVB4Jgc8gZ",
  "key16": "2L1eNaCk59ipo2UQNo1HXjJHZ9S8QBkUyZmTC7XNU8hapc5rQbr8vQn59NGcvtb15SCTKtHRiu9XZfg7tD8EwNXL",
  "key17": "4W8KMF84dMUGhEV3mWUZmLxH7hxkTdKtzAXyNxkHa3MAC2n4DqQzyrrAHqUNirQucMdkikrEH8YXG52G24Q2h5u9",
  "key18": "Sczndaqm2bBVbpycaZsaZ58vo1M8ES9Qok4yae2vN8KeCMDiDNH3f4keAt99EtPbSzkGXs4ByVAbCFecQf1qrWg",
  "key19": "57CJBtMthQs7bNvMArFgApmcLuWBydqA8oV3k5SmfkSM9ouqXnVFfybzJPjW7ynaemxeNNxLcD5Q8R3hGkHzVx8B",
  "key20": "5bkF2NkgCrxpRdaSLqsC2Sh7cpjrqzeF22Y8cUryEN6ebWNNAgExkB68hQdwwxWFkbQrxCLA7vgSF7WB9X59BkXv",
  "key21": "5MXYmgK2sTHrKgC8vA5aaZz6Jb9AUyS9eNKaSx56KpuEMG6dDDPdNpnCH9D539x3LSK8XaKKLe1GKeoL7unfCMNN",
  "key22": "46xnooMrkEEpMt6v4rTEFqNPMMhLvBv8pzkmY8e97W4QkdaUwnYw7wjMiSEeWGjGFKtCpTqW1E8o77wbnwxTLRLK",
  "key23": "65pnMneKfaT7m35rpkXVqPc5He7Jp7uCVJvJsqwC3e9JsnjfEgpdncvf87YDoFi6JDyCZzT3GxE6q6Sj6c22hN3J",
  "key24": "2GjmtYW7b52UXFv6rmkmVMrb9BDge5QBLXwnwmQYrwA8BxBiiDhqZ7iGQUoPLR1hVHTog8riyajxKQiRNCVhx8dk",
  "key25": "66ru3zUNRhPFCScWvSkQ8yymdXsRHZpBsfaLqnPjVCsXbzPnUXi8r2rXBK6NvNvmpEiNeofgNLrYZUFwWBVrfTY1",
  "key26": "47yNxLVo7SB9udPdYDkuGcE1FmJzf6da25sTeE9ywVKZYjm41GrC4GmadJE3XK8DL2Eu1K6gc6TgrXwavE4QK3qf"
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
