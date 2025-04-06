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
    "4si55kJiD3ba1jH7ZZqUmpVXtM8375VVgyeY22qnFrCijnAKGe45MtAgWpfzxfoHsLdCUGkFVg2kU1eqzzQTDfYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMTJQvJpiSpgdH2pUyY9gJTFyZ5cWVRymr4pjuvPCYJX3yV7A7hwhcvMzkYQN3RvJgZFcgvfN1V4Yk9NU2nt3Uf",
  "key1": "4MXFefZqp2t5Lq7XzqYyLPfHVghLqeUNR8GHSFAvY1BeU7ct3Ccp8NxXqjGdi3AAdKcFihkzoojWTjYmqcVHFYds",
  "key2": "bEB14u9N1cUR6iWewtEwwMkh34zMBAAvaeaoME5gtj3MaHmLZ3jWV8xxSx8agYHQsqdJgayMvjUtxYRhdHHiT8E",
  "key3": "TnfMD2RD24YGRMM4neHhdu81wEnCbWFQmR9zgUZjwYa8WsGT5vYokd47ycvLVdnqX9zn9BxDf46s75pAYrSeWZF",
  "key4": "4UYg8557UXZFUZnnE5s33efAWeGQFAXoQGxerdCHVe8eBdH86NWt1Q7QgW1t7Dog9S4MidzrpjAA44VAteHk6us",
  "key5": "TrvgLD4zm9ePYpVhTVspFwQv2G3ZpF3eLaRzyxdVFPtpwoSCtvqdzB7dUo24c5VzMRiq3wnFCtZQLxY2Sgog3VN",
  "key6": "2hy4gjEwRqCsu6yBysSwt1JkrnPoYMoJ4WVGGoouDZMM9qnuR1NaGYKqAub3MsXauYYopHrU791iP1eceK3EXALd",
  "key7": "4fY8ZQC6P5uRy8HrJQFN7d179FmPi9QNZguCzTeVm3h7Whj9Ni2PzehibQNosGtZZfhHMLQEJJjU5hqfRz3yvxzL",
  "key8": "T1dUarrmZqSfVQXiPvGkoVxLHZ2dfbnuoBdvXbFeQFKpERzMrLGQnohnZCTx6quNA3v2V9SPAwJabbvPwEaKdhL",
  "key9": "51LwQSn8xTXwQpYRxwpF8bs8tX6m4HgN2mHtTjLAL2xEcicFZY58etPf4ZqiyYqERo5vWa6KF4aPrtaNZRZreq1M",
  "key10": "56Ry97oRLyTJZEezgxrG8QmpsFqRnhcZVvW4XoL4aprjNKRn5mnZeWHrnG7Sod3UTYfEUFB8hMuwqYzv7UJQ8Qx",
  "key11": "62xeye9jNjvB9Vc2XyL7HdoUpurYj8rfp3rsqkZxd4QNwRxxwFV2NyCM8k9bCV9RksXjaFXB6NiTSyyExSyeDXnV",
  "key12": "4GTP84ccAXcGMmoVvkEP2TUeFcPpfB9xbsWxvJtwgN54ayx4Yp1j1fppNDT25dsT7q3vqPZwrM6hiVuP8b7MBWue",
  "key13": "24uc4EgvV3gCpXv8DbX4nk25icWg5xeZ9mYnmxPSfALqmAe7LiRLUWac2qx4ECHighvS4w4vkAWEymhXFrNZxv7g",
  "key14": "2YPGcvJuBL9gHupKUskRdGY1JWyJQdaBNYAq8pGgEi4YiaHEiqCcxr9o3TLeLGtFJ3fidc3k3QXPqV7oeRcNphhi",
  "key15": "3AqwnC7inyVuJ1QmFMhyjX43bCpBgkboMC61MvVpgUkKvpuuzVPvnKH3VpVRc2HJq1sHitnYdTBwK8uLc3m5GiXe",
  "key16": "2Rm1HpC1YQsbk6tnYNkPDXUJhXdrpqbooWwm8Y8gjcTBYM87GE9MGqav1MTjbuVHv2L3HzKVQ3qHQKhrHE2yuAKe",
  "key17": "2M5bEn6N8Td1viZPPseLnhXCKT7ZmsTwEbDvDbjY8BAidiBfMX2DRsgRJmVCKQW2gQvbhwcr6pT5D32jzxb377Hc",
  "key18": "CvTjWHsyVRyrCFHYBhjbJ6Lk3R93o7UDbejnzeBp5EmXanS8bnHPjvStcpGzXjazwVCsBJoBjyWZXfXd6DznU25",
  "key19": "2vmrghHn3R2efTPsaxjoaXeQ2AdXMfmP1p1VbHi5J3tteqVf2DA1ayBKbPqRpGtNi7t21yJEgLoSAP44zJwbTo6Z",
  "key20": "2ZgzEHyV4p3mkZBwT8D77hLW6kMfmcAPeLjyo1scgETDWvAibA6DnJPG6SF171VDWvk9e3FertwSzZ4nayCaoh7N",
  "key21": "XV9hueSjMSUZqpS4b4SWaS1rAScV8RtXjveMZ4g5KSgBoo94NWUSAkBHYbnkHxgwqhJfWs3u6RUnfFX77M2FaXh",
  "key22": "51VaG9cs9fYUsXULtrMNZ9sdFKStoriDajSMhMWhfd2HfhY6bgvJffLomfu67miVbne9bU26matV3mfyaM71orpV",
  "key23": "mH3jGpxyVAYmJ4j9j7GcKdGaRh2BEGbNiGJoUYS23ZXFW49RnjvnQpfgxHPnFheTBECrYby7c5uvvwYSckxoYHX",
  "key24": "2oyNDmqZhzJKv1rf2Xvsg42WVuW8b24QZBitsAa7kQ9ybtaqVyLKnPXkBT43aEYTt5B496kH4guPf76kSxKmpJUw",
  "key25": "CiD4irk9d9YmX4Sd14nZ9ep9byZZjVd87XCyXd78zD6NX4f2HhRiToczRRqm68rxDVuZTwLrfAANWMCXQB1k2fk",
  "key26": "4CjGYLKuSJyT4UQXDGp9thCrzhq2sqdCe9sZY2qTuHkacY3Ton23evUi3dM412JDmjZRHb8YHSK3WA4An7gSGsEc",
  "key27": "4o3sJGx13TCXvekdSq8Jxpopoa3HTeqhTLSsE9RmnSJcj73mnR2hAGaPyDK1ytmAtNLCaJrjXM4Yx3HwZEXajTuF",
  "key28": "3B4HHj1Au9PeC5pZhfLWmNfwH8uiPvm89wipJKVvZvyBoB8CY5BujuyWT6XwbAhy6PbTMYdJy2hrzWRcoTruprrw",
  "key29": "5cnosLtG6387RV6MRBRbWYNRh6BWxUj5aANsMSkq1NkBeqthHmBinhDPGAb3ghBYX6E1XG8qjtrLBJuaW3A9NaJh",
  "key30": "59Pef8zNNdsMgoz9nicrGLX7u1dUsWpM17VSAD67arJqphgLGiCj185RfVpu99bxXZjLU7bpranxhdz4Kjom4qsC",
  "key31": "2hTjtRaatWSESQn9eGK14AUtPDNuhNcUHMfXmkMrpFjTKYgZTQihE7u6hboXZkJGYn4v7B9J4TTJhwhC3T3467jc",
  "key32": "PEunY245VgA3hwBVbezcak3VykYj4o9z5MLzhaFRhpnz2obPX2PDYp59QCsrYsfMiB58tTpXVy9BJNXxVWotRoL",
  "key33": "oH5boPGW2YhNeuiPEPyP2djTpT6513NREfnSPedwxwXZVeacfhip5jXfxUgtvtLanKQMMnX9dJ35ySTzpYVw3nJ",
  "key34": "DnfzPkXbaifvgsGRRsVYE8M5S8BERuVheDMszFX2mHL6ag18PyWozmrwNfE1kfEVJ4f6J29KpkP1tBtifHg8DA4",
  "key35": "9WpS6N7GxfdtkWF8cx9fjJrTsuctYBZaBH5niFBaZEiPymUAXJ1x9hS6PhP8U8B2x8GHe8vSHWWTN889pdYCQ6M",
  "key36": "46ZntqfPXXwazMjisSMAMCzBz5g9gFasZxT9ssKBEpEP2wNd9K9uWcAtFfAaW798RRbQ9Wnbr17ATUSnm7ikWn2b",
  "key37": "2HGe8FQ8XeigYvkrhLUvuHm8oHzXtbwf1p6BYZ7zyE5qq6fc1h3ipAiv3ry7NcnyWkz3dkFVU9o6TTcWxC4fKhgd",
  "key38": "4DArUBBx6crYzFVryM7gwuKy2Q6TkSL2qYy2eAAjERfJ8XLBStebECX9fhFGG7UhAENh1r2pHPMjQBnDmyfqhSPe",
  "key39": "4mXjJZREsFk3tYvNhvB7e35FAMzrRpNpBQPZv9c2gQCXjSS7WT4LbqexkxGhz3M8HCuDiL5RnATTqXRfBntYWDiM"
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
