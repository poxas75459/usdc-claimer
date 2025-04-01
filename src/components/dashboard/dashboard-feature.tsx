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
    "3tW94JuX5sBsqr8Q6fqaPTsigFQcC4zH77NH3aTJqriXiMyw9DnoGm9KD9T1Ak8gfGhhgJs2jUHXHbMnDShYh6xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkrctWgsCDmCkAKkwGSsuQRMmKumnQnDyNXgryox4DwtH3oH4h4qXD8Xdsti7tCsYoHEtZxstNAaE2tvyK1sphr",
  "key1": "63ppXqrVswsRiSZ9AyynW7qw7BKEgewkYYvVVP3ZyR3JPgD9ffSPNsAvuHfFFiAkUhm7yNQaRRmurzJi4A3ic5JW",
  "key2": "2VQrzTZvDg4uVvJrqRy16g5bYaknbEwXnUxpmCk1uwJku7gje4yHQXLCzVwutzuh1qjpcnaoVbU8t2rUBE9CgCNL",
  "key3": "29v9uufGycwnxPr6gtAqH32rd2bhmL8t51eGeNYKZzop4PWaTkBeth1D6GMPxNS1rgVo1bUc8Ktf8xfZxmmqeqBV",
  "key4": "56V1uhuw3zGqWibKjYMXtYCuTRaSmDEju2osJD3GCdVS2gGGEo52TBd1PNPYrcaAnZMWHP1ZezWf6mWYoHhxQa6X",
  "key5": "56njoRkDekzqn4dCFym9TVrTSoHYhUvcJJ84BmEg9D6wfVvMNAXmpEmT3ngyZh6EyC9U3MVZX5rREEUNmkPBFrW5",
  "key6": "D3miBh3XGr3Z6x4WgMyRhuFG2tzsMVdUnMKiCGJAPnExtSHywEvSQous3HvhVhnU8jxDMC4QuYm3wz2RDUo2Ja8",
  "key7": "67A7httctAbehLqNv11cG2xPwq4VsAXsqtCg25mHtVjV82obAc744NNLZCf8yBeDGNeTu3hUrkp6UnDB23grmJJ3",
  "key8": "6tGt3rU2ShdudcfauFdepaWkba8cyh35SAZrBRDLxs4Mmr3xBdFgFL7H9wxcB5oNnVPP5N2JoUQ6VECZQE1Je3C",
  "key9": "2cas5VbiXnscPQEbZ5HrjPXbmPB1ibK6KXq5k3mVj17yiiJLeZXWXQttgHTmmMUgCwaB4La9ZdQZ1LvLo8UYMM9",
  "key10": "25oPwduUVqpHKq9r1Gg4xKzdDysWoaZ5Xzs2ge6iw3sETVVpbjLNri2q74NH2Ab1n2amdtToCaJquoRBTKVps5eq",
  "key11": "3Ep4REuzxnHFYojpR3SyndTXjfvBTLaihdipiwp3cjdEDwtXMWH7Xtkotovhsgbc6R5J2xEx7rDFXWs32TWD19ym",
  "key12": "43WnCUhGiQ9fdKiFyDRzhNJTaevN1WEXaPfWeEAx4vwi84uzpkMsg2z3qFu6HTXs2RUedF3kWSrCp7LczC7KRyey",
  "key13": "2LXFfveJv7KPDRmnUUpZRuf2jKH8hAXfaStAdkoef3kxjtjrPjgUF9xZRe3vEmb4NjU5VUK4m35qZqB7g8mQwizu",
  "key14": "CEcnrvQXjUWvSmuDQ1brFfBsdPEKAprnwzR4TqiusBRBYnb83dPoDayNdpe4r6QPde7y34556k23XgrqW8qZBv1",
  "key15": "34YpUAWRFRHKy35eXbSjTxiCBo88D6ggteBceoQKAyd2ieRA7s2cnpy9rpSSiHA6eb3Rsb371rEgBwd3CfgBnW6z",
  "key16": "2CYqYGTYVy8z4aBBgGkynZyD88ieAXjXmiJM18ouyEswAi6JUX9ayu7vwymTvUjCyBFeHyjdfmdEJhjTwoqEpjJN",
  "key17": "568ndVPjoxxeZWNbf3nSGmFZL4joRntDnyWG9P76pf6s7xr8z8Suai58YJjMiUArDpDGBJY3Zn5Mr2xfaa4c1JFd",
  "key18": "3YbEot5H2N4j6BHXvN3kTkbGuSQpxCVEUStQJXppcwLAgsLTZqp4iuhPsme25vKCUQh3GuSDq7bEhfbudAWvkJBX",
  "key19": "XmcLLDiNkgZNitanNizuWVcEs3MbmqL1yNuiTdUgHqKBFh6RMweWqNKSDxbNCfkpq18oyEp7Vo1TMgysfs8z9MF",
  "key20": "4Mv2oqPJvKa9P9D4GmRLb8XCzz8wfEJEBhFkaQh5UMFRpSKEzAXp2Z74bbAQhQb5vdkPkewC5Mqm3YeRTRa4wffb",
  "key21": "3c3s9srz3rUVrN9eoFiV6in4ULpZFKP9zqXAzxXJ2sCZmvkyN5EfCnGdLhEoGViXYd6Vf4PpL2L5XwL5q1RUW6Pg",
  "key22": "5FZ8k9AfEkYLX8UWTPy6oDaWkudtJhVhBYP3krBAf8s1GbkffuECUzFfg3CDwLASoysxD8TGqKs3p5MhU4162uY9",
  "key23": "2hyQyNSk9fd9AkPa1MshwCbdHtnUNLot4aBjCR2FUcfVX6qLBpb4hkMzEaUZDuDj8yreRFVo1V642u3pmH2pX46U",
  "key24": "4oGojmM9TTq8WCsUEDT6xd7XFvXpyJ2Kh3xwCJw2pF6nRyTv9w2JZBi7KKyrwjV3VMM4odmLghfbmCYtYwXgjAVu",
  "key25": "YpPfCGZJspY46wKkziynq2cra4zTweUTuJCefgruz2NG3sVSbE2DFVALuNfZ4c9QyRSnCtYTWNex7PcpuA5JxyP",
  "key26": "2Ad9mNWT1E2FBmSiXrBuVdk7NsUPmxAzo1LmtyUibF7Nb23Wa6rzADBsCCeFKidH3ejKxZFMfPzcnQrabDobyB54",
  "key27": "2kLsrBthfKdyHdd1YeNaKVisD5m2vRHXtyGEEwqKHWc9QBkwW5EGbAfUfi2gk82ptGSLKbYXaCNphoQN8gyPpakd",
  "key28": "2ooT4trx9uEjYd8fR6twoBFA5spvVFEggmPTuCGUWMBACpJkD22Ad5VoALMvZRNnSjT4HVWYFsYn5oqUEvX9eF5A",
  "key29": "5J9XsT7YVjHFYHRNtmR9HG3L5tMCm8kDpCsFU5LciXKsNYwKGGr2WRaDFr2hzoGh9XZ13SGhWjbjNS7gSYbmDWUg",
  "key30": "2HW3qaGrmAhQYS5ynjdDUVaMVKRHXonWyMuDafroyrM6YxJGRchXzfk9qTGyxkNuFpeBUnQrfvKHbn4UQjeJte5W",
  "key31": "5DupRqEXwEJAqAuVx2yBB2PvzmC2efYBYhMpw5rgAFdhJebNpLNj9qgpWTvcPRuJGV3znWBPpLGaYQ9mhQztF4i6",
  "key32": "4JJzJ6tT99aDC1Xm1C57SsAuzYWPBmUDNodvr8CJshEJy9m55QD4SRm6EHjmZycSEm72VXTSVvS2aZem1UAZLp6Z",
  "key33": "4ZCEm3TtbsoUohbbE9WZE2K12WjxwzXHNE9M7ANvzQGjupF2MUV6iqp2AknLeztx3dNyVLZuo4L5WTspE8o1stof",
  "key34": "3exw61K27Ao5KUVKNzmJsuuSmqFRAU5ojH6er3NrLWUZ1TM6KxqVJNUVJKoFYBH4QrccnWnP42B7WiAhgqanyjcW",
  "key35": "3mwc37qLYDcNxLMxeTw6aTfHsvoJPfzGahVKhA5iizVcirqHN4faBha6bhXbDndf5WrhRRLZjsyWpPiSKwMbGcX8",
  "key36": "2aXCTAUsoFi6cWfaMKWqNoMKMrss49728iYKn3C9Mwg6tPV6kuQAK7ofbespstDj3LdguBdoLw7Fwv7cnENuYdkT",
  "key37": "tu6pvfCmcH4GTYvWbA3ELYEPP87A4YXnQWKjDRxVsyR9ycxAeAtHVqZxL7fJn4GGBPtzpUiL6CvSPpYomseucMD"
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
