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
    "5S6561dDJk81qWKDCaLBCA9qRy9rj6ri8U3Vi8jCvetH4hZSTfAB3biANvuCQAYWt1E9r8amcy3iyCXGvbcYTA45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MraKt3PpDWdbDJkKKvqjfziuPko4iAL6WfeaDZWbWEencCdmD3WbQ9vjBzrsJZY3zupagjqK6GNKf6rqeqqvS68",
  "key1": "3YTrRvfKFrXsCBD8VUd9XKGfeqDXU4gj4R9VKhac49ZGPRzimnfWgmM6aeNe8Afm4jfs1bDq2BG3u5KTdHiinb6y",
  "key2": "4qj8phDfrd3wsKLknUbr6tWB2BCA4APYW4QJTtNEAPDuDTGgE3HQJD54ka8AXqvrEwwk5TU9kYBuZRJm31S5kZF2",
  "key3": "4RsG211Q4HbhTHgUUv7MkcNXCVTW3W8Eq93oVSsP1wL1LpqNAXYkv89vMaQsV7xH1yURRznpWUqw9QktoFKtmuJR",
  "key4": "4rDZgzGn3CMwNMwoXgUiZTF2bsRph8rGkJQguuURREdyE1nQwj9zTmvfNushybDwFCdjAiVbuYyu558TjdwamKTi",
  "key5": "5Hs9Fe8xuB9RWnznfh7SZTckGkxoV6LVabZa4Jta5jdhb8SJ1mG1G3UqkSu4m85VEuwvCngTA9ZmaBk8VGyTPzJR",
  "key6": "3tq9ToEBC4yaHPzZK4djD5RbiJkrnzMB3M6gZE1pcaFjeeLqBkq2L1kidvzcvfnJvHDUbMsWescPBnGGeWM4DwgT",
  "key7": "2sK2bLV3JMUEqMDpcFHieeaQDUsbLdMTtnQQ8VRHJyTd1uk63fUtSfbf9ytd4uATSwgGF626ztmxTurFrsUs64J8",
  "key8": "3rx8kYhH2J2MENTRuHzGoQBidprZyxvUaH2XkQpH9TcdxUDoCmVsRs4zF8hbLfaKgUwnVjcyKnJ3Q9K8MDrgzTx9",
  "key9": "5LnJrCvx6xAfUXdknY8BsC4PdxWAtqEewadFg84Nn97xwxLChgPkTF7ycDKKuEecJt3pbYiy71D2FV38YqRa2TKU",
  "key10": "5Jn1dJw1rMVTMzapVKE1x7oxHVUYEj6wregX6Dhv1r1XTxjJXpUdPf564K57zSeBP5gBorDaKeiyKBhTmHcfuKAT",
  "key11": "2s61vevETidYC5sArykdch8vG5FeQDQ1GdRvQ6LLRQHAUyWCvgY32NYt9K8sCxbPw1q23kXe3RFqpxCqd4Nzj4bZ",
  "key12": "5cwVQS28qwkEopuRMDPXb7au6MsVjJqueskFS3kDLRhAU8q5Yx5wed2E26RoXbQfegGfDM8MUGesB65ZjQ687K5g",
  "key13": "3NcvRKq4PqR26kvBfWVTqMBUi1QAXvf2dBEXMvqzEVDadxuciWhY1ng9v4nrrY8eK3L4nUvuH49Tae86oYHmaMk6",
  "key14": "3awKp6PnB7ZkvreYAdWQdt3sUj5QuMbv6TePJPVndQQzM7MnJuyPYy2v4jgJaBuXqt3unupk6XKb9Ke7DvchdzVi",
  "key15": "5iLmgfpT3jXLo7WXd6eW16bRxBBLUanxQCQLCHsmWorKTnTBREExKB4r3MzuoFkHcgBko9LJRvdics23MK83Zwec",
  "key16": "5RV2H4o9rRkgZC7xaBLzpmRQV8ux6QxsaX2yRz3ULwf72BH3E1QQQyLUZCGnQsQGvtbi7g17Usr19TVCPQyoE4cp",
  "key17": "2Zt22nkXDW9C2TnZJ7E6UPHp3TUqJd4QF7VFWKjXvKoKmTStksruXjDHJ4xvg5RYHEHCCe3EDsgBEqSEcjTUQiER",
  "key18": "2uqZj5FNZq3uoKBEpn679JkGFDJvQu4yeYzgbdRZux1w48EPzQNbdTipevnUKQr97caNSKFtfGQjZziEYfbt1Nec",
  "key19": "3jVRFRMMEF72P2XKuoADvWppm9FGLqVyy4t5A3pSMdsdD7tEZ4EqtbJEyRvzKJ5hWiM4M7NVsyA7xgYyms511BfR",
  "key20": "3jaSQTmK32QRLbWoH7BCDHoQLwQThhGxmUXtZp9NsTWSPUVbchMgnstf1ZXQX7fUz52AjtjCbC4g39G7ChzYeB1q",
  "key21": "4KtTtcGC1fearwhoMQkydqs2aAsphmVcKQjqzeghne1U6MS76xNdgVDE6Yf89JznquPALuJTX6m849uQcmTDzTwc",
  "key22": "4MMAZjjyfyWHfKjrugSD4Rcb9KWb55xJDXe737k2zccw18vHDv416z5n1tepFnKQemKzAgiPDYPScB8tMPn34CrL",
  "key23": "54Xpv4GDbuSiP35xavEYiC2xr6Kd4j92YXiefJjRnJ5PJbV2BYUaTM7ceyZYKx5D67ELLPd7AhNrb91qfXcte1u2",
  "key24": "jE2iTyTvhBFbJXL3ma7DimVxUtDdxJu2XPHyxRYm9GgtQkmmk5xxTunHK8NSct5ZqjuPyLyTARGDiHFmjWxrGXp",
  "key25": "QLnws35T7zv2uH8oEZdSPNvZbqJxqumVuptLZFnac5oxR4dnQSpyRfW8pyLL7y7zrhJJkvmrLeJYmniZbh3j17e",
  "key26": "4KU51peV4N2bvePg9PL3oLtuH6SvRyjRWCafbgAB7WnfLJhvk7ZbhoNNK5BBsgazu28M432AQUWsix5gUXaSpmBn",
  "key27": "3QgxWBjQbYqPSTPRkpzYsoFJpA51fNahJfVqSJm9x1xj42YDW4GVrQTkqWLg2oVJSkFdYubqXXztSBBYK7DBmxh3",
  "key28": "zHsESnaPBuDXxwLFyacCdMChNfCFTSDttjLE8qv3JTqbCrTnxNftMP7J6AMCkqd3vTosnNKRhrpBRSpnpU6u5NA",
  "key29": "5eygSv4cbTDSL4FXtBiNYfryvTy7tdRdf4bsz9FFQdwatKaPN9RozotLHJVQqjgK5ec4DHr3LsRqiw7mpR3yZsbu",
  "key30": "4QzJeuxcDtY6Ky6JPMfd5Y8HsXcX7JZjRxcT9qqEKf16KHUheRpv1zDSMTPDvcuFb89tzZy7JXN8swshburPCxAf"
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
