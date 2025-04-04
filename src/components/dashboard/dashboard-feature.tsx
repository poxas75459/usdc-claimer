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
    "5TQb2R1fzpy8xr5iBKmWaZiB3s74To5gBMqLF6pJrgMYyVM3RxArNae1qUHzN4cc8AG7WgtdFM7Eo4WSuM3fqDDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JPEi5Lj8x9skdgR51n6hv3LbknZcSmxmjDUhjTSyjGVk9pgbEGdWSgrkzz2aVkwM3X8gcHDS24ofuzDQysqm7t6",
  "key1": "3i5kpohpfHc1fmb3PSQSySE88zRdkrgmJktzr6unjfbgLWsbEq3ia8UXqDZm3jhEXhqj913ph6GkQARSfAPBA6L3",
  "key2": "2XsbKVeJ2yRy94nzevTA4dmdjTpevt857tsLF8NTt9QdNsRWqWG3JDr4aNy5A5Fn2ZYVtXs3u2XvRQaoU5awyZwo",
  "key3": "2Gtrzgyu2MFBZ21uKobEC5xMAmLfkXpA5bFHjnyoi7DSZjTZY1XMGPFrAgGgKA1PPcJv9JMTuiv1pQ76xywJBU9e",
  "key4": "4SfGehzG6MptkQQ1DJNiqZRhi1gp1378JM9CrZinSAEdRs85zV1mdtsK4rE2E1zhCsjmJcUXubf98e4UGvRBgLVv",
  "key5": "Pz6HGX67iF9bbfEnwgx4VijqHbqfQJeGwdJWdSgwhQ3YW5xXAgyZZ8S3eh5DEym3GBrVKSL4ZraHts1CsJ7yoYj",
  "key6": "3K2pcY5j6kEkJdZghmEKE6LSntk3UuNPhTfK4NbnWzezirnJqEGbQBzFJSFEaUKyUNEVUBaDagN8J6prznHiG5EC",
  "key7": "2oMkkuXNrAJKvQ9mEyKsvr3LkNxfvZRQAR9X6cEyGhtUDPx3CU4oakiJ82J5EZgZ2MY7enNDontw7nAW9rCotxvo",
  "key8": "5zS7i12s26U6f9ZPbhN1jy3aLHxVGe4SHQW22N5kJMamLLEi8PFsjctPoQTV8bAvMxiJCB8QjkcrwF89gincSeRy",
  "key9": "FCyYFASRKiJSWigM62RtmPSN6inXncUeScgDENukYGYYtxZPPCE5eGWLMyBCBaFEwEyU1xMzsD8QtycUohGDAdZ",
  "key10": "MLekJqi3PbKoECqzC5sTjrqQPJwMTpKecbKoN1raE3ojLyipwZduQTLZn3TKsF815JFgmLWdzEvzfWZ4zBwY1kQ",
  "key11": "5L9soVi1TAQAUUL99484UDxJ2yQDbyVHkBRfNWBvJtnTPhSCbtUA2XxWaMAtkYy25BcvpJ9tdD2M1mnK1UvNj1Tz",
  "key12": "42n5kCbmVdqUZo3LapQFSYiexCWkCwD7qaXCQN69nXuMH1Nb42TReJYVFzNXRq9L3MsfHxkKGoUV6hYGoqtFf4tg",
  "key13": "3KeN8hvqJbg6a766KCE5VBdgzUVcFhzWZuTha2ddeQ3KkPTSmTajMiFu8og1BSs6o8fkMDxgTPcnMXzCG7KWQuaH",
  "key14": "FGMDzS5aYoALjgt38ASK9b1upYTfb7XNL22XhHum7hfAqdyowX3VQmESda1FBcHHCGaXdto5Xdgw14qcA386NEF",
  "key15": "5YxJqqbxZypsc1CgY5cwFAmV1BTGwJifEJTmDhJXLfx49hWf2nXdqKLsPnUfK5f6rGFV9bKNuVFbmLqnGYd96WDE",
  "key16": "9JCsisJfUzLsFzg4L3MPRoF82MEe4byjHv6Ze594LUKQCJ3o9V25TC8vA5fVRcLiy6fzcbaZYqwbK89QUGz6YxS",
  "key17": "286GK6Cai1Jxz59Lyjy1H5yXkKNtQzzfHnjZNQCwoTEeYYPtjv7db6s2g2oUcAdhPWy3wk5MBxDnurmvUGvGupSF",
  "key18": "4cb1PvVvcDCcw3981uixRsaDzqBRho5suNETYpVZ7z78kuhdzAYQAeMJKc9CjK7frnFUEEEW9CWmRBeV5pXeYwp2",
  "key19": "85cxfVhrH4uCdwCNWwCKWiMxyj3aeVcWGaxgQDJ3jPNMd3LQjvc9NJvDAa8QA8oHTGmV6VA2JexwQbJA8Z2S3NM",
  "key20": "66Y7EicABuVsvXJzNFTM974kBpPCW4fWupzX8AwhP85UBMFffGQrNShYgyWqH9UAxbf3iWFP9X7UTj4F4xWs5Kzf",
  "key21": "5co3cXcidYZASTVZHNbBzD2SFkvGjcvvutPWCNr56D6epZTD9aXQBSAsDxJWcXmk1Q7xMMw3UPNiekr99zAgdHgA",
  "key22": "3a2W7YUcfGuTd3PUrqe6W7jauJRrYzB73Cw6U3fnxcFvm2opjRQaGdfF1d39hCrNURbMNp7cavenZkyiQaNSnMBg",
  "key23": "5N5taciaTKaJ7EpnnR8ang4MmWPb59rRo7MSoDmcjALikv5bWxnbpeR2FTbz2kY5vhs2k6k8wfaU2tHsmGn4gS7m",
  "key24": "XpCd3ssD3jXJgsCzxdXRJxrCYYpLLNcbNwX5opU1uhkj6mj6Mgr9MK7YscDEQQyER2vcQo5AD1sZuTMZ4okh5Qe",
  "key25": "2Ld8uAqQdCpv81zj1VQrE55FmwtDZ1RBPH6LyddwsaLTLh3s44YegvMirPFWZJZn216J9ueQHsV3c2iQ3pMab6hE",
  "key26": "52nqoXHmh5AH16rXd4zEDyB2oLDCBJ2xKoczUsi8WdxFRXRRqDwxL4KWMcg9qu5CNosdPDyN4Sbjn5X9hiVzpcZp"
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
