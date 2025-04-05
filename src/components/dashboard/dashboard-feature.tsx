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
    "33cvan2E4PPw79XLKtqjJNZmGh99YfPfbdPoqm31PP2yeTxeZVAkmxfGo5GxRjSKeARRsdaNRLoSGUCQop7GTRuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmNHBt8fJD4J9E4oLT5xwPPxd3Ni1AAzVgWYixazSDGRKdU6yZRYBuA2cCvfitQkEc1pZNRfUrSzLXVfUwCG62j",
  "key1": "5iNzS5nQLe1brGFbKSzakisCrM8wTXNSktqkfPo7YjXHXbccz2sGYGa16DvPEsPkLoEf8Rr2hWLTDR38VfkCot4Y",
  "key2": "3ALYwfyXVHnuW18W3niFTb3f8y1khmg3hq7xJPJHrTGFJLbnHV6qDqTnD6RTiAJZRuCpCcuWsd7Ywxk6dgs94dq9",
  "key3": "5MgvujA4fuPpf1WHKycuMqgbVf6fwcCoNAKeQmzZEQbUxfst5vnTjcdX32Em6QEuvxkHUP4KocdQu5QbqW6DgCtp",
  "key4": "5snPTw7unJuSVmwT1wq2PKUYJZrnZ4JfbJ8DexjoN19vjvpMjJ7sHwyipuAAK5LL7PTberS7Axu9qgCmSS1XQDXL",
  "key5": "3Jvqo9mZ1TENnCTAfXKMBh8N8DiZtQ1KafGFi9PmBeFsBqxh7EVERZ1eij48msxw3UXBfmrczZ4VxXyMfKjy9Eiv",
  "key6": "kuKt1FcdwJpj5WZ8Zdiftuo9DuPamttK6JsTZFZ1jTw6w3cAyENVobt3CXALxswqG5TEqeojBUme5o56Edw9Kgf",
  "key7": "3tS1NRG5G4xLyMfaE5gcV1NXWQFneNXrLrG6H22eHy1Lc3Edf3Z4zNEe2wUizkZAKAR73gFjCgrsdt6NNJyp2dQ4",
  "key8": "4TNZ12HDC6Zeons32qksuCXvHsEReizwVddmLQ1sFnuNAQ83abrQcraNfrSv4kPWw5A7BKUj5F7AnESZavBhMbi7",
  "key9": "gBLm8xAUoMu9gW6Y3LtaAcAUrMa18E3nRwdTtUP7noBhrqByQZDEMVxHFScPUjbnuX3D4XuXPckcYVEB2W4pZ5N",
  "key10": "3UN4mYDX7tK5kCyEEGeMc1rvv36fBZTsT7G6kdyvypFwTcb5eoTchA831tKtWjEe87Lank7mjJUtb1jaiyXcZcTH",
  "key11": "5LkMRoFzWisNkL8qZKtt2v5KikJa5WNe1x9CfiT8jCndAKmBBxWJrwRi8kGEt7K1uoey5Z3tfHMiXE17NMB7EDPQ",
  "key12": "5gwJ55KPnLPxu7CmXCJL7twSXDuXQfiHgqAdEyt3cYLZ5oYSeE22GKhsyviMyvgUKqzZSsM1DAYnua3QWQkTNWw2",
  "key13": "58TZLWGR8bqJosBkdVezg9bUeniU2Q4oAMv291it3CFzM2p3ezHeq5FcQ5XZfcBqmLbYjbULSaGz7jCQLobfryxh",
  "key14": "4aXACdKmp1qTGQCijJsBsWEbKniyg4jSAGrRk6mn4B2Z5K3hboNTavsYeUbWTR3o7BUvaCRcZnPdYK8z544YRf3w",
  "key15": "K9uDKvcCUiJkTSYUq4GdPRctycN7v9vecZd1o2Wda4dx3SmwrYTG6seTfN3R2U5RgDWrNFHzyRfaTgPw8Dcn6uZ",
  "key16": "3RVeiasLfnJyfq8XkMdWDLB1G2aispH8iZUMej3ZW7Cetjv5r6AGy72TE3eB1i5bwx6tVXTfYakX4Te5XoindBiw",
  "key17": "49LW7MzJrvUmHQZ8u8Ad9bVcZ7qE6aSjQXTH4q9KsUd6Rj1sx2yWFPqyVCjDx9eyKWv6u74k3CyJnfZhG7KMN6wv",
  "key18": "2TG4wAGHWnTzxdk7RNVDVrffdV9fjaGhCn35KrhZxHTt9mAnmcTNuRS1Hhs5h1FnP7eLkznTbJPANvf6yXPd3H97",
  "key19": "2KfRnKr6JprLfbDx4QMe3V6SgcFFGyXfKGqGqDkmqDREVacPvtFnn5yQBngt73dizK4j1v3K7Y2M7EUf8hCQGrAF",
  "key20": "47J2M2wJBexK5zDsxBB7JfGwRxNjPRSETqd4A4TmSx4wCHZo2naomeKdJquwRm8JqbZjoJcx9sEz1sH7q24GohuX",
  "key21": "n4MQauW3EEBBt6MV9XEeVdhKVxvdWY9KAU9PJ4QwHzSDvWwm8KAb6kjzt4DJLPYVpYbaQeBfbTRMkhGKSqyXi8Z",
  "key22": "nCYQDz4HybjCdFPEdMExbqBbwzZPDVDNQLQ3sYB2gdAmiSqs9neAag6RtipSJmXAR8E3ei7xUdYZqrv22DzEV3j",
  "key23": "3LStksiFFukSeX7SMnXbQR6kw9wxd6ifdGWVidMMGsAV8ZSsBB8YtCCLpN6aSR9eWTTEZDfdPdYSAdQxB7dNBc9Q",
  "key24": "5qR1jK3XgayFyfbLGFafkoNQgZD9sbiRAYynj7SmHjewZRaFT7KN5D52mzu6PL9pz66ReLg9ZHGP7vKyTKtfGMkm",
  "key25": "3CGEc3wEWEgj8xVgk6uj8mihoXDCS7Jw37MYZSMdrs9zghAXfm4CyiSeQpdtLMQYSdsgzeqHGWropMMErqQb2STk",
  "key26": "2WsKQxkUHzFb65VoDKPV9Wr5PdUWSwL2Zv9MufuRcBFEkRfsjNTVpZjHS4QGXiuLbaYXdnLCfbDhiXy45cbZ84kw",
  "key27": "2uj8Go9ivnBzzCtkbYoVFrWYkRhABXBVW8YrUFPLnJx2q3fHLpJ1h25bm5AGhwZ949qj3cLiMUgHagSCDYndSww1",
  "key28": "67h5ZHFHpeVCrAdt5ekgNoZ18MUsZycEKzQMZgrex2nTUiTeyMKiJx9ebJRfq3r1dAAxwjyKBgimW1PHY86QyHAf",
  "key29": "3HaAHvVNxCdASqW4E6qzVsGGJY3UW7wHbrUSEQCp7AeLy2T3QTYM4LzM2YXr3z3UY2rn3QBq1DeSB7wFVjqW5fyG",
  "key30": "2hopXRDucNuc5JbEaFV3Z1ULzMYDJWqtwVMDeuTuYyrAGYiqhdT8qt4Ev1AXShS1udz38sm39XUzehNYhuwro618",
  "key31": "3s4v8gvAvhs5ALqc6uytgsZSfFuWYVtoKfxK3PCEfFKiY3pBCSepmbBMqozXYJgDZ8uFfur755Hjn9ggHo9Mdrij",
  "key32": "5bLEwZa94TRgBKTt4nK6FQWRAUtvSxHQQ1ri4tS1JgKTCQbPxqKYepHNpPuuaSRN1NqYvJ8S62jPXDnkaGDoo9aT"
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
