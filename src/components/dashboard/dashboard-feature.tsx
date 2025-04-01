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
    "2bHBoAtWGWhWD5eGkAojEwEHBhvKmynTvmotoJsKLNoWgRNr46TfDEpHo5ADR8x2yTfCyvzsZ7ZSAkwFaUtp32zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FssRZbsY3BQsVgKfazLGasjkp8sMDCg7HZEeH4UEofa1PfZR4DSfVrKPsFzDTgwePa2WCABDxig7p8BBoHCh1cU",
  "key1": "2AXdSTzfUW9GkMwpT5jRfN5BaDpSHFaePvJTgFwGF3dhrk4hA5BjE4kcu3xyWpdRW2xhyq3wSh9gbtjAdMHkYiwD",
  "key2": "2HYvDKaamXwafRdDcpepLcmjjXUHNsWpS4JvTAP596FQkfZLWgJwjxNpCN8Exo74PSyPRrHNjg69GqW9nb36gpEa",
  "key3": "4K9yFUeZ8xNctmh4qCh9eypojPfiPqpQjRYnXT55cQABdqaS8Vn3edx1K3p4mAimwDvxqpS7NA2XKsMUkiP6F1Wk",
  "key4": "4j8EHLPSq6HKSS7kS1Ckq85N6bNc4WwmFSB2pVV54KW1LE2nTmjMY2gX5RmrxXs6DhKSF27E189YuLr28TFPJmxA",
  "key5": "2SwojFU2z42pkZ2mvdWU2GT1AqiNkeNixsKoFoS2ozMQRSSfRCRP1Wfp1Bgr3pXhyJEtAUA2PDUPi58gZ8drBMb3",
  "key6": "4jS3Me7v6XWGQRvnS4rvcAVjnQSDYVQBeqhuU7eFcj5y7MAmvvWbreFwBASUiPz3vj3ChQagfD92RWfGXKDZZVe8",
  "key7": "22i7FRrKZEUMkvSYebmwPytuKPMSPmoEQhbJsP6CWF5v4bkJXvFubZ8gxMgtod1PkXgvNnx2Zkau71ZezT5NXiG8",
  "key8": "zM9HFi9cqKYgwyqfrLKSj9cdaUm3ajkVwnxZYzY8quxP8Z8TgKh791etcRZjs9LuiowjVTbKaJT2B4ZFr8vhk1C",
  "key9": "R4J4V2mMSjwuhchVwyoLG69h5shBD16zyesv8zsfYSWxZm47hhnthdi5Z7mir2BabBGKibfntTVABzpbC17SdJT",
  "key10": "2cWhoTSH11snARPQEyxAwTn8M96FXGUfpEwcrmB6VUEqbtp3DyaFQ9biPM7kNXxhRHMABfPVRm1BHMvmsZL8Tmvt",
  "key11": "MiomLRLWa5DFEoZQhph3sFHXZw9kgaAeg5atTHo21BGGnad5Q95sfD7Wh2m4X9DFZH3WZHBPy9X6NnqJ53u6uLm",
  "key12": "4jHac7svaVLWSxLQ8ZceFEr2UwhNRtKcitY2AcTJc3xW6SRbXuU35uJT3r9hQwjwnwtx8cpvLWMTV9DEpqn96P9Q",
  "key13": "2cChZ1idhLRnmAgBTpf1ULNRyagbF9y6KqHXKU6xZKusRdq9KgNmwErBEkbSW4PtiGX4XbhLNEFxi3ZVZPPiVk2T",
  "key14": "26sSML6JkPvGcVQSF8FEumUzS7KconRkXjsytEUBUgJVS6ZfLveYzi89CciQsgXdAxaaGGrM4gc8LLxgKsbAFRab",
  "key15": "5fQoHrytojKJg73A6jRF3XHjhPtUuVmhcBRd8tRYDftgdjQWdefNhsG2pbLcdRBqmDXYdZu12BMA5CJQGV7qaNG7",
  "key16": "vMzCbewfNb9xprPDhRbt2eJdyu2G6SZthhcsTGUPMPg3FG7XaSsYsUj8nAPn7NxjNJkcmq1g5pn1L8Bs1KjzkA8",
  "key17": "8JTvvXViQkrSpRNTnm62UWsbHn9VbH4iH36Ta3HC3GjozL3GBoc615Q69RYjrDXbCXjv8HopLQrVEikapSjWRQk",
  "key18": "4buukQmgiYih8ZM7iEQL4wb4tkSNXMXb7QCqnS5XZdMzJ4ggaeyKD9LagCKamkcXaqC2oEau7jB5CopHYJa6rywv",
  "key19": "2r1tcZXUgebyM16wk7xys2jCXCKEoG6tM9Udpjbg9wHSCDpQUimeC8rLZiGq86zkNgGXKZjvdm57NnkjFrA1BQ7K",
  "key20": "2ofr62jeHpra4GEF1vxYYgS6ax81NA5WQFvSDh5wpE3SZVFiMkyFWLC7BEWDs7Wh9hY7gy5VZH6EVVEd2N8vKMme",
  "key21": "2pFUUfRKQMysu1DFTCKxafiizmRkEJVhi9L9ViEFbh19HGck6yWUeMPTqg3JjQ8wMN1c95SN15BzSiADcNg4huVm",
  "key22": "2ttguwkKthgTUwmT1jfbtp5jzqQv5YjKUNbW7RwUueVnfb7UpMYh4fvH8DNdSiabaNiw9viS6Na6DafHpBapCJiZ",
  "key23": "3uDPgrgVzfdDoUMBmDG96c1GGr8oFs8N3eBUeEzcJdKtrUvWWZRr2dUUJq9d939U7o4B4ENoFguXjqqvmc5Vkg1b",
  "key24": "3xf5RqCsTSSfS2v5NMK9uGSuiEJwApTtkxgqurgyGduFyxXKVcm6eMPDp2yJRcrf3KoRKFDyK1aUL8s4wRqBthQg",
  "key25": "5JDpQM735ZRiydAHUzGXsfM9JsHTL3XRLHVSPUp1kgN1kFY6cfcK7XHQM5VNWbw3yPeWTCqf5WcV84CZ9jBZX9N4",
  "key26": "2TVpHRZNFjE15DU7Qa9V8gonPJiusZFLPu2ahBjFzoC1RC4vbdUVyafwY1nmnBLPSQCKqifbsAM1oQyp3sd2tfU4"
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
