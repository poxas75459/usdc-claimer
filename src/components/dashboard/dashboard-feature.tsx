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
    "3bvEeN18RWCnaKpLdJLvn2jpxkbs6yeanhdLPndKoKWkGuqmxkJQFSE1cmkzAyYkdhgDf9rLMQ1hKiieYosQSbuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jx22rdywSBhCpoAG3NJjTFaT4m3Tu694oA2CvinD8idnYav2awE3TyyTAGNm8cF3HR3kaah4gvh49RYGXoQBWh4",
  "key1": "XDGqHpzbKGH1AWJebdrsKNd8gAJ4c4PnpyUkNP4rSGLy4nFE4royqLgfwhK9QFfmbns2ZLRjQpmqnRMMq2rNWLK",
  "key2": "2z2CRyTMK94jDsxB6sLXAcqb2Q9DE1NoUH1E2mxFV9637m3jf2onjvWS841cnqj89jpBrVwvsDBmQptuny8mQWsQ",
  "key3": "4mdaC2XxX749SJLbE5UpvWBYEFkdLgVvkKRXKPiPDdxrbErfZT5wAyFsMaGMk2ZvjhuFPFErFo7GZFHYwMrAjht5",
  "key4": "5ApJw3oV5JnC1jVV8BS18KJ4VVCMWgK9B6S3RenrQApQC2SzFjPn66Ei8H61BgXrc2uasHgkgW9dCz6BRbvufAUA",
  "key5": "2LCBRm7vs7iW4aNyDk8KiUgi4wHy7pSmhx5YqDezb2oUqVYpFQnBnqPc2acuckPz9THsfBsuvQAkZbwvA82g7vic",
  "key6": "5TD8sLTVrUPXuuNrF7D7zLzWetPY4Rj7xKZAsfAgxapHUnbRjGhFBKxMkCYBfVSbTZjxTJZsHmRXwhAEbs5Xu6mj",
  "key7": "3gsHTks6kgEK8WXkCsSABJYp6vomesh6n2RXZxQ38rJ1xXNwxh5qfHPDbtMvJYEwoMmzZNhfazaKabQ48nvfT7b4",
  "key8": "5eDHvgwGGjrQ1mj627VPnVZYnfKjFjsasqDbpQ9AxJRC3dybXqmCvZRdJumTExuBN1oPxQjUiWQmLmnTTtyRf2Pk",
  "key9": "2QwCR8kDBLhGr9P8bncrNN1xXyEU33s61iM1dEWvGCrn9fDnFevPCckdKZWriDv1h4k3XnBDmXYgWPxVowez39dr",
  "key10": "2Wr7o3jJVRhF4siXfJq5fkZ9RbgSJmDDLDqRkbd2kLss3s8TPU1QtHP2erFAK2LNCYbMYXx8MYFZXAu8119X73ro",
  "key11": "GzHQ83yb3ok4NmVZXDXyU8wLfkkVCoH1hAHZwScM9qXF7DKE4Cu1ZTvubGijCHyszBEZooCnMXDmaxFS6Awx3to",
  "key12": "2tHfqhjE4kVxFzTXX4BrZzJ6v6pkc46LgdMPniKBGv32NjR29E3jjZ1RPE77iGLkh2p864SYfCzpz1sUyEExPsKB",
  "key13": "fMuBsSVKk9Yrp8gEom25jx5sCjRjWYNknTPGAfRNMNxjnKPZcoAMMcX1mL28oUuVQmsKNa2GicbYoudSS9xrkvN",
  "key14": "3ojJU9VqD2oA7WNCgxQXPTwMyn4oBiA2bqfZkC6cbCg38XpYfr6KYCK3RP1sTUn8jg64G1By81GRN86SmQ29oTAi",
  "key15": "4Yz2rzWsjCtPKxkaqx6RPo5ZRkrjJNNdHiGp9gHE75tKSoktY19FdoYKo8UUkvEotcEzdBKsdLvmqkHNjzFV8L7d",
  "key16": "5E8p8XBsoJhQE81ygGvftSNf8cDMoQ1DAPKN5PsizCCaguvxMMZEiHA2QLdN6xoH1W4WGfFUd1YdQujifw672sWu",
  "key17": "fPwWUprLps44yqB6FXNah31Khu4fYC8Riuy4ZkNaDpEg1mUVxpoo3kSh4fRjakv5VDzKcvNxTqHiGc9r9CwjFSf",
  "key18": "2CF8R1yX8CFMo8PJtffuTHtAPYEtcz8eBddBxFf4W4dNigzTN7ueJAJGJqWHMEtSuSKQCvLJAwkZb5hFLdV9Fm5j",
  "key19": "4p2nFcYzGjyxtbgE8rN93xB4kSWYWic5YgYc16o2t6bYHjT4sw86NTESfjpPCYxuGN8iLgMKXVTCvY76Vc6MfDjd",
  "key20": "2vSEBKbCHPYRRFGeE3dH9Q8vvBinJscKXZgaDTQ5isL2oBmHBiVRcFrQSV3d6dpVFHC9XYkMTEh2vwAcW3GG2A8Y",
  "key21": "5haDAULkoVARRaQBAz4yqpXzXiZF4UNQbGsNattMBZyyYZBFSbpc1U819WE9QSqw17qUMjRmzGdUmaNnxPU18ET1",
  "key22": "2x7QktMWSBkfAfymWuRsPRSRkA4vdRziiBm3Sd1QPNig7z6e86HAo2wVpLmejyVqGnSBFA2JKXmH6jXavMUNj4iu",
  "key23": "55stutJJkbFhb3jLnmacuMBReP2CTFBWww9BPyKvRnWG6xFT8dCgEBKR6JFPT34sDvyeC1kdLicn2dtw4xNr3Zmy",
  "key24": "36XBskeNKNs3LH67Q84mFJAGmju9CEi9nmX8AE9b3NQjHNbrSLUrkozZM8mLJZpNQK7othFoY99NqChYz9zosQPB",
  "key25": "4mecbMcMDnNZ13rnwAfPsaS5MaV6epxL7xDiLYsg6VFF8RPHufHYBNSMbXF8RjdLPdq5CFCyYP1CpP1mYtkhoKp6",
  "key26": "2PvVZqb3NeTMxWU9eqZR1xmMtd8ZWshzroQrWVi2WpPDNHyS2ND2cHZ5kTyrhSRLnEYzvG8cM8gDTcRNFHbVCuT7",
  "key27": "23oYxdWXCkTj9jJFv3tNJnXzAp4QwtjhDM5g1kz6uVmiYtmyXfVhaF8bnC4mYPeC7J58FvA6JBKH5Bgwfrfx8LDb",
  "key28": "3TQQ1KxacrpUCV8A78ejckUZuxpTrRrJeDx94q8rVGh2KQuPG45xGwEgVHCzPTHRhfa7RkWVM1genX1AsdVxaQHR",
  "key29": "2dtNYkmcqwbTAMnmmSPje4bCRpT49HuLSHvbbRwMcRrEe5W3akwCSynX4TpXKsNwyMp5CgRHy5DiMwdnpoWSyvUt",
  "key30": "2sgQN8DqESS4ae6bisqbzV6WFivewgJYSorb5wFz236uYWz5iBbV4TfwWG9rp6neEyVGmrZXhtJRjSmSFRXKkdFN",
  "key31": "JQvDiwqPUqmrgmDukEKq8cww2SFTvhd6R3CFj7LXDnnGph4W7s2PfJU6Ce2EKNfjHCEa8wLgTpYzFkt84Gf8n5m",
  "key32": "M2TgU5qqvLMXkgbYZV7Py6HMjGhMxppBTRMhagvqMGt15riMe4LtjcQ2FRhMLWbre9d9fqNn9XpJRaiVba4Z1fP",
  "key33": "Ska2GyUef8dBscAhRtxGnUeUX4iijv3c5wkvh2HBTQdpZUCi1uUDcLkvBJvoaiz2t8b8mWCVB6FSaiNhxQXYzhh",
  "key34": "2WppCXJuG1pd9DGzcRfs8gWn9grPt5bnKTxd3cYmsfPzdog4DcTGw6R68QzhnVNfuRJfrPZEVfWztqoo54r2r215",
  "key35": "4gVXfGJmi9uJb9E2vXnp83Wh7tBkvzuuE1WNVQkGQFBEX2Wxm4bjFw4eaLyLPv1puot2g2zohZW4BWncY4j8p1nH",
  "key36": "67D2tkzKQD18EC2JdcNwTUB6TxaLnEyMsVfzCEzfb2TVZktsXskVuDeyZsZahQU5DbhdM3mCHvGBLHjYDvfJeipE",
  "key37": "2X3p5FApPZzDZRTCbegXPNvAY5cnNH4aShgnpaDGM1zrwtBRN6PBSgXsMFrbFVAg4Tga8vvkvfUi141cmGqxTf51",
  "key38": "HRCGVLmpYz4DT65vWhBi6QuxPHunc7F7mrDMUbmv2EJD2GyjBTSqzrj58jDxY5Z2zfhFdEASNBTfP2xwaVPSFfe"
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
