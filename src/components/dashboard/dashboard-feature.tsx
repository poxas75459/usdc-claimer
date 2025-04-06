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
    "5hexfFDQpfp1NbAGZArKQ9n24rkbEjXzf8VeBSYKvCtYguM2JHEsCZ4au4Ndm8dwrSKcL227sTjM7qKcAMmKR1AY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpjkbgRiaQ4u4XRh9R29pshTLc2vs5u33qXL61yi94wqERR43FdPr13oek3DAJg8SSBKzXFsAs4Mge3oMnQL31Y",
  "key1": "67UcKir54feLihjGd3VHpDRw4pXTLp18PkULYE1opFSfpWoTtpZL1bk8kdLqEbsZP9svAAZXKQAKZ7LKgvvUggPx",
  "key2": "5836zi4oJiuRmPTTZyuEa3osJJSTefh873oLEWaXfcNEqhGT4vLgLx8sqUKapcKwz3e7GrCbVGbrfwtDkbLFmLEk",
  "key3": "32xHowtp8eiuXA8c1oieT4YymxgCuvzN6FjK7FXwVhJgjDtGSR7Pthr91oSRpqnL17Z8Ghu64Ux7C9cA3FxeBMH",
  "key4": "36vE28k9DmMJjc5UE6kDApLa9BZPTjuA8QUhEVLQJ4HSRZjveu3cye6uebQeVoTBdYxLq6f79Zqgi1CUaanhEq4B",
  "key5": "3WAhbtBxnLinKF7Dg89eFkEfkyD1HXBu8vKWySVAtsaNBXFRGHoNTiGvjLPZTwz1gWEZAfreKnBCTnzkJScnXNTx",
  "key6": "9WxEdiNWDSG16U5jxt5BSYzeGX11oZvGxpukxxWTCCSE4hy3F5EHzk3XtwMHGbn1fjh2XeBQve1ZyGesFqz72JA",
  "key7": "5xw8Zdkrw2EsHX7s4qd9g8MsUff3mQzfhJNWnuftaLETvYYLyL47J1KqfwhXrusCaKEM3uGbWZjfbhwXjg7hLzGG",
  "key8": "4jeHPqYLKTwk98Xw6HuVGS6ogwvLB9Y8ZAQzFDuPudP9huahTZsEphPDop2xwWfUep3i8KXEyY4j9W23BLdo258g",
  "key9": "5jkDRnmXvCapdRuRvkbyaFsUavT5z8UNJfY1U6ze14dHPgMmEh3JdDYGA2epD2fjKvzhh4Mh3ywwi5TGWvxtEMHh",
  "key10": "3XAKyHNqnSwyXiyWVdC8atZaLRJFyMGh4ACHMwd9DBp7sgmhyRNV1QdCohFH4EcYk25YEkJz4zmxgSyYVuZdpDdY",
  "key11": "3n7xwz7gaGrSsGjVxysq4NtiSA4VpPqkj4ynTxT7p23BMviemsrXE9sHdxbsgEvfUvsN3Av4M1PjBeHgSYSV2pHx",
  "key12": "35cpf2VhNgC7B99ME4xqU9DK2mjh9KRBx1GnRhWE3oPCzibRRYbzsit29vopvi6EQojZdLcmaJVNURNYHyCFDW5z",
  "key13": "4ewJJozRmzxWHm4RteSZBzwbCG3tYjepgpEySbi7YUmi7xSHeprgoeEKvekZoL3ZHWUFVx1cdVmYDLr9rPqLZSsz",
  "key14": "4vpcVbNNSgpwQXwLGX3RCn6ZdRJLSNjaTF3HZt17xjoSKp4yvJVmRBgw8niSrNHC2UhAKf9cf2mcBfFLEXbBG5XF",
  "key15": "3sxbW7m2LrTbmTNGaCeqyxGMYs1egfm7iLVPQfmX3rpvd83gmxHe2MW77ynPAyQXa9NGU17Hny8W8LkMATsUwFQo",
  "key16": "CU6zcQDPJX3wzHbFmpLGpS2GFs9TkmnCmXSzLEmrvxDwFKy4uZWjd6A1UmZFSWN84mAZTTsFCNutXR2G1y3Zi45",
  "key17": "5cWBYssy6qj8a2BLr17Q5eDZ8HxzCshaUQBBmfETC15gHMTTqDX8Btb2R6MoaeDnGoyRFBS3U4nCVzVzTbj1uwbH",
  "key18": "2rqCA5fJq5xx6Ec7aKW43LJYiNmdkUjUPeCDzvKagaCcK74KUYL2dbQEkR6UtyBpXWskh3MmzWiFXgFcVNP6SYRC",
  "key19": "uZYHeC8sWpoC19drSAgxGXnWuz4TjK84uw9DZrSNVGz9YEhPcMhfWXWDg3bkKX1PR45aitxfMkZsFjV32abKrbQ",
  "key20": "5TzzUun5VBVyFVirCiiVzn2e448ziqph68d6UX41cPRPmQm4hTnUpWTZBMccUL3dks9P7V4iMqWXp2i9fsaYhjZj",
  "key21": "WpTQ1re6YKgDWJg5CpGv5hFjRpC7we3FVhzp56NeKdmac3D5EJkY1REfFsHGnsEYj27vK5Ko4UEL7FMgsUcfiVL",
  "key22": "65RfticQmEkboBGNRJ23115DkYoiUseygwoy2wUBYWPij594ztg5PJLMZHBzVPzkQB3m6qnPHTRkzct6Czeq5cWb",
  "key23": "5K72Rh8xdYPmzzcB2pTnoRuNRKrcjPToe2BV5wmeAah15BvCsnUwiSiYFswCBbUjPmQ4VD5dnh2vKwzH4wjzxw9e",
  "key24": "2P7up1spB8pMrw3YyFCLAFN7gaeXiMrYJuxKeLdvHS56BUrnJqgKzh15Vask9c8bA1K3xd3hsvC46Z2ivXod3Un3",
  "key25": "2RBk5maLt8QiPyENhFqu1sA68MeWm857VEjyN6R6fLH5AwreaoPgbqtibowao4pXk1G3k3WDsGnN26pxeS1qXrTH"
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
