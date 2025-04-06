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
    "2NZqD2EVYTCbuZ3xi1QSSJhbHGeLBLzVKQqz7vd9nDiScdmiBbbLV8XXnC2Axj8LfxV5jM6PHZ4YnfgAatEykEss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3xDHoKTvGYwY7UyyeN2yEuasupnoxavCD4zbSYgYQQeHu4wrYf45gS9VsxxffQP1Xjx48oNdcf6uCdypqNSs9g",
  "key1": "5fGVfyFPBi7udtrL4an5ZQyrHrDoXwbJwqcHgSGdXZnuJfcrnPq3DdeREcGcX6LgKaTtzqfoVzcyoTsBMkFiEqhT",
  "key2": "37g8LNisQ8gnLcngagZWbZDmL2rg42yhhhYLZmepgmMXrCyJK4H7V4EA629MMrvLZ1S8xjuifU34fjpea9tEfW69",
  "key3": "2smwq4sS4PWVBf6g4c3U51s5YmRc7r2A3b9Y6WbpWC1QaGkHWcE4G1ZhSnWoC475BddpTcPTmCWMj84bkPFCRyi4",
  "key4": "iihC3TNLkUuMHUWmm1qrL6PiVj6dwCukaa6p6bjBimn69cSsWeC5kxicB1DSavcB4VEYYNyvejvHPnTeH2HxicN",
  "key5": "2cA1dhkt8g2XdMHxcVPTY6zmZShdkuabP6vQR9xTGetXMSPxrUb1ScaDodiW6tW33AzXNxetv8uHJ1nNQ1YJT5LJ",
  "key6": "2yvK6Zwzj6uWp5bXaywnnuTbwE5VN3d45mcxSLMNsdNFazhd8HphsQ176J87RLkQKb1BDR83UFYhegirnMXQRRrc",
  "key7": "2BjKobUVr5owrjf7yqCGpGZppSBDPfsjpEXNGfD4jETqnfuSdWnaVR9c9YMLVpDxKSrUXM1Ve5bi1j3ZQs2pAkrU",
  "key8": "Sjf3uooLKSv6jQ59AyfKb1UyhCci5apXiWCg6PspkVChu9JkTZzoEhJBidUHotWjQ3XFwRB4265x16UELndHMic",
  "key9": "2JGx1o6HcSE64MMn1HiJCynzJKbaeq5UzLX8HmFdF7dkH68w4sJTQr2gErwkApREtyuYd6XceZT1mW5atdqfwqEh",
  "key10": "3CtWNaAitxUScsWUmLHwbttmuxDj4sA3wMH729FzaTJ7TjJxZDMJJKpK1cZN13tiyzLUXam61J8EPV9wUAfGCcKn",
  "key11": "5Rjf1Nq2VtR8JPA5oSgAUTXLTxtREYQs6gBprCVr51ctrDp2JNs1fBeVCGS9vnBCk4fBVBct54NwENbVAe8gWqDV",
  "key12": "5sHGXiw2GYDwnEF88m5KbYYJvAUZ24rnk3ipdCxj5uKQNhjvBD3xufTezgFJR2aWKZpAAAkMRhAZKRzYCmgB3Jr9",
  "key13": "3hoiVRpnYrsuvKKwMUxBYzMpWCd6xjp66mbCX48iBxsKhDa4n574mDEF5Zio7torW6NXi1rZSCJ9zJL5gNe73Pg4",
  "key14": "kVb5MGMbjYci2Y8adGVmPKpEWKiDNwuMa39n1THRgWM7LVRyDGPvVoiU46wxxLdgKohhb1sZGEUp1u3oWVS1Z8D",
  "key15": "4f9JNd9tVtwLhW87umj3RTYfXiZ62MqkvV6CQ2tziaQH3pm3NnUy338EBAszLKJo5GJhTEXpnmoCNUWZ5dbKo559",
  "key16": "oBGWkqTGijyo9G6DurP6jp9LNzm1qMhxf72HTTkTg9qmWmW2fVrvHy58xKDhf19nXGgHK6xwohhkEcsPomxqdWT",
  "key17": "YguswKLiH2BMhA7ZqrBB8Pa3rSJRr7NqDtSFsp2gsyYPqhs8Hoj1t7zC9G6miiSDF626r2VHLiFgA45sHRdAdLZ",
  "key18": "2PLpmagfVaKUxRQYcTyW2EhE9XTZgD91p65g9FjhmFw3Qrrd8vQVHYpuZevwNF3eyYBMCyVYa6Jz8qnQfmtDRU1W",
  "key19": "4PJJG9GHSQrrpudjKi8XvArYeFhSykJNga2pLUyysfnpAk8vsTqxxP5cwkEquiz12vz8dPrecNozrQK6roHTsJmm",
  "key20": "c83o4vHDWRFgeBz4STMJw5DsHJh4mgMJyq1LxhgX3E6dP7YH7Siuw8nimZDRWAqgkAq1GdAuSuaVvtojLK8cJ9z",
  "key21": "AJYxHomqzbbKKoBzpp7wRu8ne7Rb8cpu6PJmMyFNFqWCwba5syRRfqg9jQaM7kPEwkM71LjABXSjwHdpbacvDQu",
  "key22": "5k5b1afGkLLvsmjEaGxfKY9Y8yvJg2h5Dn8cpbabe8N7UhkyY4YaEUticZJY7trqdfKmmM9RGgFkNgme4Y9fPPr9",
  "key23": "5rVNPGQwhTX4UVH9N4d2GB8hekzv2ozYjix5ZY4V8SNrYHPJCrY9wHaxvJFkaJpvWoNauGYJQKQ13hJsrMox7NjF",
  "key24": "2eMFWY9wjPpZE9WuH1eNV4aF1EtkF9CExHnvocqhHJj7u5ANnHgtGiopUN8Duimz2MgVeYAtC98vxuo4DpvcVbZc",
  "key25": "4Y2vuuaELVn4YFcRmQYtFsLvggcrGE3qyZcwdgtoWcirTBnnZgpsnherATW1MBhvXe4xtwcfCQHLtyaZVxX3vZbv",
  "key26": "59hKTFuYK4s6119EkotDFabVCfkN7Te4sXbVxrGwBU8UgpLKUJaBWhkC9HjNoMF1YNcHibLmWtanGh6LFU4jaJWE"
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
