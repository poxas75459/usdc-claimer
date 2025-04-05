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
    "619BUCQwHAxH6J3YHyxWCsvaow3X9cXC74oDXR5DRVWtFx3g3HhDvJzaCugRcY9XgHassQbfRML8ce8NAHRqE258"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANTi5XUdv8BwPtikrdh4zEh9n153tS1MTeL8m7G8dtUF1dNXWbhpvmewx8pwmCX9qku8cF1vwsBHuWXdAPqwBGh",
  "key1": "3ssiSDVsCJnSvGvhoToHCiCWqgyH2VYGK9AjLsbwGQFXMvxScxF6XHm3LP7c3ox8if7xU2iU1y9CLNg9nzahU4mY",
  "key2": "5CYWSi4ShBJBfAJrmoV8TBZt1Unpj8RdMnMxbiEzFJWGRKtB8Phj3Q98GJbV5RYQ6QnMtZJzmUmAzc33VAKX44nk",
  "key3": "59291T9n4SbEFU4ZZc1UGHEtsWBPDWCaT6eTtYM79t7dgwci1bsD6SQMTiPWqAesQCWQyexcmegmPv8rnwx5DRJe",
  "key4": "3wvSDfgqp2GxAQfNzTHZK1jZuZnB5kfn5hYkKdyssnRQzo7uTD3DfASg3wbLGXibJYFzhv4HvC2RxrWUhFXYGNAN",
  "key5": "49QXTV5GPXSRHA5oy8ukJzmFv6uHhLtomMNHUJvMitv7HGq5mVeG8iWrTc1EjSax4yXtrHcPjoNfYYc5YKVYvqh6",
  "key6": "5Q95doAh53TBKdu3bEZef1eMccHcaLfgppqfd7BDSqNR3rGAWQk8a6w6cNuc8tQowUv5vb6RafaWVTFpdiuLP4Hj",
  "key7": "2qEHNwvEw6HCQeVhwvSiWnZQXrCGF4E5jbUULQaAqxjAntgNvNNiVoyCG6CFkZxumZPYXNoyyZCn7nTmmmVeGFxt",
  "key8": "49VAKEEmNPj9tPPAfaQYhbT4JBpdio6iVwrQ4ru4cq1VnTxJbfo1zEX2ReHK4YRYtSwCGRSFVvGG7qzfFu58RGhn",
  "key9": "ibQwojyZMGdWUiFtWDiGKAfXfwhw6mJkbuE82FWRGo1cZnG18pxgFU9UmbrrSTdt8UkENgjWpmAKn26hFTvdCX4",
  "key10": "4rCcfmpzAsuHrwQw2szAf6fDD1BUCzEdMf6PvTSRt7oMNG6SEQDLEwGtVr9pF12z8Eu9Mkf7BbJik653MGthywjb",
  "key11": "36WmMLZfWL4K136GfbCchgDNZ6698uphRuHKCkcfW8Crw3jGLVTXd2eMfVeZKznxvEvMZci4oufiUNDHnrUtLJAS",
  "key12": "TDDYNdhRevp8FFAFVjuuMbFCenq8N6VLTiQLRAHKp7qAaS8pDwZWtNMFMbTY8tdwUXHeWyn1GxN3uQk9kL7JTyD",
  "key13": "3eND7FWEwZ7DhGdiLcAqm6pNN1gNMahVAWNvsKyjTFowYEabqbpiTkKaP4gKx7qH3qfpb2Nn7rPsg5Sezk6xvk9q",
  "key14": "fvgCSAmckyRdbVLhXXbiHRKcZxLDvwjQS2VN12uTUsfVPSdqgAymDSC6wxf8x7oESwihVDtWryHN31YPqmav7Y1",
  "key15": "46FWQuCmyPyWixtdFbPo5BjtBQ4sakfdNgZfc4MwuMxAduycQHbrgqQhGhdhDbkb8JafJbsop2StrADg68SDZNPX",
  "key16": "2DDHLYDLQLv1t3yGefdM3mwsgGw4qBpKM9GXPnraiHCNrYCd5R86dMvij7qE3piunmaczxS6zWnMrXG7QQUTPEBg",
  "key17": "dpuMSe5t2Qy1XzXA56kdL1PpkMybHQrxBAZfEvvQooB1DKzmbEPLSg3CW6TEXay1xgw5GbnvQ5gQ4NeGG7Mj2XQ",
  "key18": "RRz1iPjJxtNedsekYgQ2aMWwrgT4eK9erXxAGr9qFK3EZx9y1kVWA53ThN9vSG9MDv6rKgQNKoARaWPdv2XjqgG",
  "key19": "4cwHPbpkVyNbzPCXUf5XRPBU3bQfRpFCGm9ET2VPNndPzTA3QRh6VFt39y6Ab55enkR7Q5tAJ8PkZt2zi55JcQRZ",
  "key20": "3VxXE63UtGcimob7RWNa6orLucu7bCvdqUb7X7ceVkrzNBMeXpHzk8KbHxe2zkUBR9ikNpuNAPzBD8bXgwPsFWBU",
  "key21": "643hvxgcu42qCvWrazhHbsbCpx7gTUk32hfJDyzn7QYxGpjj2bfwxDbLKbHQGbomvpcPdHsBMD8orF2huSRsSCzc",
  "key22": "4A5ZebFNYAHxQ2ocrKt7HkJ6XK2nCX22Xq8n8sDwErRAMQdHXMFv6wQ2ZgGUF1g6LibfP2DAUV9FFH2PwgwP7mnD",
  "key23": "3ZGEgfHhFfcVVYjswG1uwXX2HWCGGJQFT4UELeNk6QshTVtP8MRVQgBG3LKAsC5cZL3ukr72ETydHDVFAXPFPgmU",
  "key24": "25oDV87qp5xEPkVyVo7NGBqjto8LjmtY2LbCJWHzLwZZbWSxwv5kD7ZZB95D9yKjgQB3ZA3F1Rv3ZtTxFmmihjN4",
  "key25": "3yZbUPmadJiNYWEXU5oGuVmTehsbC7pofdDsdPj6s1hysUywvpwPsASFq4PmkkL4fzruXbSDgTdV86rDprxeULHd",
  "key26": "QDSkNuezBE25HVuSHwaqdDWKvF7XdtGDrzYB6Dimns3Z2YbfrMP3JJmXCMAQ4QiefiuS24LrHNkeoK9BFgePqMF",
  "key27": "E3hvFxN6EDs3zwttnC8RabJR1h4GYXnGGiDqpku6joQ2qpLAnBBUShc3C7dRG1TTGz2ym9ZY7a4AhvazbyNKtPU",
  "key28": "48KsxTXzK3WQJEB8gtkDzQRwLJ1cmhw5MVt4HBcKhR24wmcxQ7Xzz8GJufDo594RhTZRrQPPy1t2Si3R3DuQ8TQN",
  "key29": "3tpEtvTjmshc2wrU7bWV18Y7fPDgiHZ8iY6PegGSTGQkCr9ESgXxTEtHgSXKDb6C4ms6qWWbL7LPbXp3cxeC7FvG",
  "key30": "3VjfLdiTEvrNcJsAbkpc2fMMsbQYVhFr7xDFra7Q9J3wenEgHdzrme6PEq7yS3VL1KUZvJsSe3BnmySYcJZLm3GP",
  "key31": "2sgzcmhFwCy5UduavouL7t23JPsAXsMBWTyQ6atrg62YSJCsqsDeDnBHNo1LoGUgk8NGYQ9J4NiP1rbHt4qWMw3D",
  "key32": "ySyUUyMMZKv8rGRgMi3ZZFMiyMEBfBmNmJihNZ9YCeEo7ztgWD42WPAHLYoARjPQ5bmERaHqcBZzbxeMiL6JpF5",
  "key33": "4X6tDJL8s5MQDo9oHDzabnqRmwkzvAo24SSuQwzfYyrwfcDTid6pnCTfZA3JL7daDqgvy2ciqB7tHDaZJiHe1i4q",
  "key34": "4MXbhR2ZBBiTD3HdMePxq45KNYKA1y3uEJGGiAsirCELaCiXBFZeXsJTN2nzz1vtij5SL8N69bP5KbQeZjXYqKiP",
  "key35": "aHUQfL8sqkgXop1K4ReK4Pn1DoL1U3vPuTD79pgH7w1CXqxiVLAat6kpfULwPwzheypmYBBvssB6uBWBxi2qXVn",
  "key36": "3tfPRo4z6wKdNrhk1h4BEZZPGGU8jpJNueCXjgWKQzNZMWMpJXCAU61N5t1BhLBLW89f6UhgrMFJMMyiaBmAnVgk",
  "key37": "4hYobuooDmv3YSLPbBe6HkYZ22xzJPAFwkf6muYQQF8x9CgsGyFrAPF2FbbKdQfP8gCF9X14KeL874r91yRXhV7T",
  "key38": "5TY2SmPZHgceKNceoi5bYSAfX46R694so2uiGwtjCFqztjwk9tcPNwXpAc4pPHzHsm1JwPKLHJNzxAZRtNaGWEUH",
  "key39": "2uoz5heUC4WYsyT91RtZPZqrW6TnwnUMDRaJY4vH1ggAZWRytbaqXf88Tt3h6t2sf272Lpy7zt7pTYMSMmfrDZUW",
  "key40": "3a6ck8BAy1ZpAAySXNLs12g1XZ6GRykcuCe1bHg1hsy8PNdKSLYdt5gxWW4FNtWpw9sGS1Vq8qeM1MX45s9PaK5h",
  "key41": "4EbnuBw1A67DyVxeDeSoD9fWPDAo1UFH2spTQxyz65o9hHDYRKRQCJEPJLQzryMN3AzxnQQp8FTSQD6jmMDKKudV",
  "key42": "3zUYcXjcKaSEgs8aUfS9dazoyyAQ1eK5uhUHRuG4k8mY9hCQB7mSigvvJHb6uALUgK8NtbikQguPhM1Zd1rYLP5x",
  "key43": "5RABLq6xnA9MAeiqy3AuDsdA7kt9toyXXdjqcB2i5NSgS5gSNYCCyDGPSfgMCEwCpQjsnjAzhwmpMfbkeM1Acz1z",
  "key44": "3i92AU9s6Pyw6in3RPFiHxQ7uJPKfdPZN3u3iSQ8NqFttzfxvnLoTmpNXxAhqeWQqqbqPMCXFWBaP7ECRDrnazK3",
  "key45": "oGFiZPPKtX6ey3MaXRRC7UmJ5raUSxvyWPyCS2rnhDe7HFrVZkvHMSa1LypG13QFDRyPjcNpXa2D2pWDwy8NUmY"
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
