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
    "4biLUTmuNfnYwmuHYsh8cdNr3AsNnGqMA6wTWJBPm8r5AaoMASgBMRpXJqhFVzq43hB8SqfEwBdW5JdnfgXD4jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VwBNfEvudPZodn6STkFRv56DS7v8M1qhTd2LehHgd15Y9uoF27rUhS5ivJ5i2KMeKUur7QnxsRow9Kynvm5rLyN",
  "key1": "4MK2Kr1y8U2qdDNHfPCbpZdtBTuzrBtgpfp1fGfQuq96XkJyVuUtAgVgSPUEvVdzEPKbedQWtFGLcVVHhkEYYie7",
  "key2": "5dRrqB5fP4aQ5wmVqqXLMPcZiBFbQ19YwnnmE98bsXN73BXFAcXhQxjZ3CAP8LpT2w4cH2zU94fwKsvLESLN8Zsx",
  "key3": "5oPfHMHa9onCZU4LyxMEidPSNYDeNEX7mD2NpaJn1462sVrgoNQEn9qC5BAg6KtqgFqQmLLddpSS4DM8fBHxvSyx",
  "key4": "3erTuhsysB7jquDoxGBBCeSEqNCGc74XpYYs7kURwk6nRARYAdJebyZQqpYK3LQ6ppFAJXz3nNqEnp96vGsCu8ay",
  "key5": "8carZn1PR2oHmgiJJwgBBA4pt46RY5uAmUjJbDHBUqgstBx2pYEZzQUqbVM4FZUBdFbXotRQjnDa9kG8G6L4YzY",
  "key6": "3M712nw1L1Tf7uTBgppdBwRn9Qzg9YZW5sCevxR8joGaB6dYbwwAC9kTMegc89EHWxnJBKqUS4AHHK3w4PEqknAL",
  "key7": "3UXw4vaNWUzEZz4JZfeWZeigSJLbAfw4XYP2HN52Pg4oCPCYQysRKzrz73webcsQzzdWNnnrkiQ7TrS5znHaYMaA",
  "key8": "2tGhk3MZJUipNo7badRstUfHtKzU7KADzALky2MuhSkF568MaSfNcP82GAmKx5cAksfKsMt37rJKD6Woq9MV4FsL",
  "key9": "5QmhZNkDBw6c6hCZgJZWucxYuCDr65FfiAEMU6DGcHGvMUiFKLFGe12JmVTkY61ejRiPkSeiXtSY1cNJyRbzykS5",
  "key10": "2kczfQeNThJCAmgNCTTpFAYoWnSBkVWfXR53a4ywsoCoaqxfaHid8eZJmi8z6sdbPFcUHSp2PLmSqePXPt31czK",
  "key11": "MqyDMspuJvjWY4j3F7k4SAxKr6fXJ8NPptnCng35DXxuCm8UzLxza8pwz8gLSih1LZJvYMLkjfJqH1XK5JQCBJK",
  "key12": "4JStzc5zxzW5VTYHGzMa1gsuq3ZsTXZozRPbnqhpCSHybJdJLqoMk8gC4dpe3csL5kNUD7n4mQ6KQgW9YTw3ZdCT",
  "key13": "4fdA9LaitbXjsGXks99KcpuzwBgqxHHUutLehiRi6xmkmJJAcCgtmLv5Ai5PwLg8MQfSjDCeqGYDvBArft83xEh2",
  "key14": "2GCbictRcTaFKs8Wioz8fn4br5S1V3jrQMkcHG5esprP5e4wtH6nXRC3p1kVhqS4BYQjC3ekS7kFWXFAhemiDVc7",
  "key15": "4WouMug4w9WKC3Y1mAi26r1wVFn3XZYxRRHP3u3fjD11ugknbcgTEvevbyDmPPxoLYF1gZqHWNcfKJq7hZtHgM9G",
  "key16": "2ciAZ3mfbo4sMbgzb7Kd7GRzN1Gq8uRuWCxqcVnDrETudqw7fE73bJsjKdoEUQHFPeRGRn9m79VwumktQ5DggjEW",
  "key17": "2XgR6uvjN6XCg8rukFa1zNs18dkAVnR8kaSLYVjNhdPzMqNLWkUK4qfvvWjq1gF9kkikLjgVR4ddCARSrjB9KZ2B",
  "key18": "5M7xNfPHx8uF6Jb8GZ8kiEo4yLQ9mbwxXt1H95mXC7SZQcQt8QrqexafLEdgiwXikCxczveMYebZzgnPkoZZBNZ2",
  "key19": "37bYkvKKu5kM3EWHUGBD6wjxisGW2ZjRRM8NAJn3GZjXuRMhPw16qc3f1hiE7KXFiiMmuHKEPEC679bY2R5q5xzj",
  "key20": "2tite8CvsUQ6dpjUQ4pQT8ASBxtj2dyYoQSyFfbLXKP8XPv7b4pjNdUqARqduht7NuWmpnWV8JfjJ4UQhbr2tvmQ",
  "key21": "2DqKVMMvkuRvrgYBtP9pR7TWriLd8F1X8UQdxKgEa9UDdHxFiLJmj5q1Kzg9Acz11XLhTncaseHUiFJ7v1yAAm28",
  "key22": "63VnJ2SmB7MzMSaCZPMgfEviAQRieiogAdsQTKq9u8HhUbKLdwS6mZButbcsdhqE8we2Fr7TyVNGWnJPFHCoBzcS",
  "key23": "3vuJrCZy2ub4gwwRmctvvtSoqqggsXCHQ5p73ebEhLR8EkhSSJwxUvcwBFLiB9etUFYBAnpQzagw4i33e9U7gxhw",
  "key24": "58YHe4XnuasAt6HPVPRtoV7HsWwbEZuUSX6EtoiRbmuKqWTviytQiaDY7aKFXhEybFH5sHa3bVbKqWPyKh694b9m",
  "key25": "4SUfMGJqsdC84BhsTjMnSpqVYLvoK57VzeE2hgjggy67qHZb9XLngHAhqdipLVXZihasbTatdiSFTJtQLx4EudN7",
  "key26": "5xfcHEwv29TdPh5xGbyFSfxMgJPSdwrM5pAZiHZpNCRD1EgFzzSR4h574qSbNS4XM6uaPB78Lhq3DzvxYNzSfhfn",
  "key27": "2go6uCDoPfH7mrw2QccgrkmgD7TxsmpFexaTgQxyvBbR9eA3UB6wZaYtcqj9D5DL76aATBb8gL8JVQwEMWFdvRsF",
  "key28": "3aJZL5xXGV4LLrdzCbFBBG9H9s6hqVcUREqN7kRudUBBLZ4cmFUo67yzQw8oJ6K4YTQZEkRDdPfYYK6LHpRmnHrY",
  "key29": "5bsaTninViUt1BNh3MuPTRrW6AsgrcqbGsPwxikbeWGxgvghmUDVTqXikbBTvUEkpW7peW9nauRqTbqFVSvp8Hdw",
  "key30": "5WMdve9Bcb52m7hS6McGuNQoL4ngQZamDFGyxvNNCGFkGK212JH4NMRMp6xiVZCZqDVmSDuMk39Rw9msjhFo8hDH"
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
