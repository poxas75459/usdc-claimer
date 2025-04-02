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
    "FcJTDVMb1FgXe2696UcB7VGeMRdzkEXfxnALWVWGZir3aMJhX3rVhoaWFhTVQNQ4PKzu4ThV5RGrK2gx3bDJEbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjddEU2T1pWJ66pEHms3zGbzcjwdq9fzofJVSszNCHdxFwdXRhFG16V6ncEuneUHMUoqqJfZ2KZCorsmXCfikvk",
  "key1": "2a5vkn3iMhRbrqrHdyfxiED8nY2HJLBGD2DaVAddy6wHeg4jdKGUntNAe3s48jGcv6Fo38pvXqHgdM63JYUsd5Y3",
  "key2": "5jw9SmSpMwHrJ8hJiwjtLHW3vtq2qCpcVFeGbTMcbDVLeaas7KvzvmGZjCwFgZq9yR1cbDdK2FrC9DMG32Z2A5RM",
  "key3": "3u4LkfE2EFeScAPrLVsA3rfetoqnEude8rXvqcsANeDjbVtJNEF3P2JexizoJJAa7AVDPUQD7vKNY5TX96MR2xih",
  "key4": "SSyu6og8FB7YQpq1k7RV8vR6Y2LJwgeqZ1F7Abbv8hbN9Y6HiMg1jtDNkpTsvqLA7mjRW2umvnPMB7kWthWYPkb",
  "key5": "2HQYu5CYF7zowGFhryhzTDQtfwDo8uTSqGZjJZK3d5dHyXbRztthxi3TBjZDnLmx43MWJk1QKcRxTK6ZAJec21tL",
  "key6": "2H9eNQohtjdacKp92q9VQgZqQNKNh7VW43Bhs9B8Z2QTBjraUmBQEBAEkjiqQpE6W5tR2ttsVaMDsjhnyuM4yPLD",
  "key7": "5LKeLnef1chQ2s95Bneqe52ZQj8gs6fDVMbqmJExRPvPGmYbZKMqrM2Cs6EjvhKeaMCrbAMgyD8mZYN43KLnwfyh",
  "key8": "kqapin5d3Ecmam9nNcx7SQfAb1bMaXwzmsstwTmY4pEyDsSqtduorqGq5ZpPpxaFq6VX2Ut4PLGD6b84wsgDJVW",
  "key9": "4jAr5YkeRiRTfYGswvYELEoUqYy9s8aK6TVDfWSJ2XeWdTQovFUjH77gmHWupdzMEnb5Et7QXmaaudvCJYxNrNTE",
  "key10": "5Z8ppJ4i8nf87dr6qcYnet7CHGvZ7gGo2Y68EZMuvHUncKVgBebNo2pYaKeFvoPezEySKoxGuB3rA37ghYWsHEnU",
  "key11": "PxL2KC51vXKMgvvtGuTf5m53ZkFUipp9YVJZHx9y79E2wtBZpzin6TECUU7neGauwiAxwPHFEMzSvTqnJEaLsry",
  "key12": "2TfaHSUQtuSZLp8JaGxeuaMeZJkDR2Q33Wa1VrXmsLo6ht5QF48UhM23PKw6GLQpb6R7qMw9tjoU2XSyxr4R5G5z",
  "key13": "2qjFS4G11gWD7xTEYHGqXxmviigijs78wQZNBAQ3tcVJKSuzntyUjHuF9a4LfAyU1kkYfmspCn24C2SP925vi3R6",
  "key14": "hatu3CGJ6JBignwt3gSdcMJg5Ry1Mi5rmnX9YiKv27CKnL4c1e8z53KtgxrQYPnzwEUGB9jwbWMEQGyCgB2sBjJ",
  "key15": "5hxzQc5WM3AvkkNKR5TMwQZV7DitaUCieYTP6T8Rp2gfW1GaVvJrY539YjpYbyE6px4hMhCUBeRu5shz28BVmyEB",
  "key16": "5r7vFKuVyhxH7VSefJxsH9KJfBCM7UPu9Wfk2S5H42vhA3PRdWLR3EJFvRMqDREjNF7TFMp6Y9W84XPG54TiWVMK",
  "key17": "3Y82x6RydcXyZyMdkNcck2hK47StjfH5N9n9rq6524v8Vs1Dx4YZsdAi8AMejweMTnmiVto8nqXynm4QsiEvNusb",
  "key18": "2GfQTUxb8WDYuTzWthNejUUrbhGzzJpv4iBRwXxgdQs5at2GJzk7pNpWfcURt6w2Dxo9iMuCG63UELXf73HFACH8",
  "key19": "4fiZhoHQGCyNqCXZTN3sDWANdadaC3EXe7WHcKR2guRQrL32bV95Bxvmo5tBT8CJPnR95oLxSjgpcJi46RWKuQex",
  "key20": "34BtH3ztfbaw4H58Nd4SDq3278HXpZPpSeDEGcvqBWB9DDPeZYjX3DfLjqxsz4gBLGdeavxiTo1rsTj4s2apohxw",
  "key21": "2mwSyjCpeddy2iwZd7WT2VGuvcimnT3ov8HdqArxQcKu6LVEArqedx2cYfeXFS1ra8wQxTgRFoncAceaBsSiStFv",
  "key22": "5PtCRdrNgwTFXVTDyHREkxMGUqWAuzu4PvUoaqvbWSvpHH4U2wfLAbYPBB9GGzdSNR2sv5MTwqsey4QMyVZQp9yP",
  "key23": "5qadbRamDgtKsE71jYvB63NtYt1Re7486RHdtrczSNKgThSEQjgTpw8A38ghpqyYE5rLTZxvre5Uk18qUFVgvwGL",
  "key24": "23mWkReNkKPmwSftF6kiR52SSyg5vekntFria9DXymuCtye8H2HUumMXsDDo6JngmJ6EqB4agpey1H9MteU7uqD6",
  "key25": "5tH51dD5U9no5QWtndNj8q6RUg3nfSNHq4RqFnMedXPUu9ZM19sSpgr3refrV2zvVd4cSwdKixxs9Wf3J9c42k56",
  "key26": "2BDqBGrBVCxfdWgQDpbZ5S7hU1VCCpkNo9GaUJ4cRYmy9ZGpbB5Yx9SbruFwLXK3ioRtdhghoUUg3ZA1AdCC93BW",
  "key27": "3ZQLQf3164VboykM8JqYbanTAWJ6THiVsa5ZKkxgRvCTLegMpgHutzpF2Suy57tBYXb3J6sc7pPYpjzeToCdxf5B",
  "key28": "6MQ4mZgkP8T33KXog8wuC1XQhXWB2Vz79Xi9afiu9iQMdJFaGWnCCrMDin5gum1KVY74vLCea5DC5F1eN42azrp",
  "key29": "4p4vC17hezySjwuC7fVEor2WkEKPPUuYYyzroSRKfS4w8LNAcesDApZ4UfTdwMT2tGBrV1k9W86qEnJJyWqgabe3",
  "key30": "2R7a2HxZvLsiwXVHXT7VVAa6SvAbRHCijW94UEU7gQmgbshvVPnJNMTbq2TNu2pue9E8Tpx6E1NbwcUWUdHEforM",
  "key31": "46cnxTQ5Ejm9gRXAABE2cxtsWY6NMiKfankSWAFr7Y3D21eD8tMi6kTV7onuU15A7irSJV2CANsMd5dy8GLGoMYC",
  "key32": "4PcTyZAWk29pwv7C1C4iotLUPbsS192yWKL6x56ffTDArvHHYXXbBgEEWFpA2Sq6bDp3t2VkBHHzbenrnj5SntHL",
  "key33": "3ykdZdmgRXhjeHUM8qnW8aSZAogLyMqsfNbFAM6eXm412v28CZ1Qx64sYYgggqbRiqTV4eMFFBdg8dTNLvpXvkiG",
  "key34": "2JboMFjfHURzYwVnt34yPrKayHc1JAq5dcjBVHEGAKjjzgrpnyScv6nC4Cia7EM9wTmgnHmnnfEcVHJpBaxDecoU",
  "key35": "23j8q8B2iNU4JigxGb9FZxQR9A95pGczcu8Ahq2xJgg2FqMyVkmhpQAdm9su158jhVDJ2MqDN5B7gMnCujnvS6VF",
  "key36": "2CFQCbGoezsrfJjsSkJENQtu4CwgFaPe9DBTRqujGeAciYeXmdotiLtfw62V5wHQBmSsXFtXn1p2L9vn62f6Rq4S",
  "key37": "5dTVLmC5YkQWWfWDPjBmDfziiNeEfZN7QDybN6PxCRFjw7jg8bscWcFBsweM7kehsBHTgZEhc47SgNntYu9rVVug",
  "key38": "2frn82TrNBBWYdKWkTWhroKp4ZioRESqWy6XtFKMsuuc99cw7hutfhGeWcH5PatLYXgr3KSLcKWRgQy9UJNQJAv8",
  "key39": "YP8pY4DQoQxdLWDFctymENGkUYmCzysxGS3DrR5zg76m7uLbwghwdauGFhrHGuJVrJF7yWFirXwP2kniP25BEeE"
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
