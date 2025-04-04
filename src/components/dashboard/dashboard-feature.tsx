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
    "An4y9TCBKJQsfbdSDvqgJW9wWHhX3qnE7ae2qUsRCPM2sRKXtNN6yz15n5WLAoSJ4Y7rQiEHCDKXBVYT5sm7Knh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcikxNrzRvCaudtHYn44i3c9gXiHDvdPadApojw6iDPbQgHBZ6KrJ7W4jwViDdKryYHycYNkMLp9wpCcTTGQAKf",
  "key1": "3LGr2Be1r6NMURnTK2NLoGaMUc1pziiaRXzkPVB4RLpMfuF3bGmBL49McxmMoqRnDCcsUsH13dF4eCQgUoEk8sdA",
  "key2": "5xydnKWhe3unamv7htBz7JAkz5ZijzhL1JyfgbLN8GjZ4gdCMj7Pi2jTgDA5iynWjfA4udCkoLVgXcXNychYcJ98",
  "key3": "3G5SKcrgnvuhoMpCKcKSyjXPsV52NLeiErzq3yEoMYNJmAKzXpfrYBxAYdv6gpRpcinazQB1h1H1iBwA7ZQssU5Z",
  "key4": "24R25LxC3XyUQpGaq2WjH5DZ2HRqjbdQkf3seAqYrYbucZDEkcMguvCh5SakJMC7D8UwBnaYiaQUeaw6og81Etra",
  "key5": "4p3sPheshcyRm69hM5XQm5whqPHscAfxroT5rAUyYyCPymrCvcKKVoS9tZG5xAuKTq3bjfzcRcUshuKTFX7UR5z8",
  "key6": "2P4yGtGZhFEfh71d4myhgGrjfkVsA4uiYVu4nFbWTSoUo78LuVfRhxuvyAutK4Kez5BDQdYit1juoWeDJEy7aR3A",
  "key7": "UniPSF3tvQL12S8D5UFqA7XuXzQsjRzNWY2GqFvrVFUmpbVhecpMKDqGntXyy7uqZ2BdG5kq1fHqbgbGZc6sQ9o",
  "key8": "4MTvnMxvgr46unVnopMbgvGBPi8Rgc2twuZ2sKi6VQC7xgT89WM34zxTMrfacrGPXNaPFU394CBQ498dwkqSXou3",
  "key9": "4Dswjmah6c9BVUuVc1VB3KecUyQuRnBVRQs5eBsQ3aG4AVUuv5hCzESumCBXocKwztbVJzm6W7DJpyrgaj29X3fh",
  "key10": "2eiR89bncou6PSXmFH46y2DKr5TmUS7jugPNNynfeTEnShq1vNLt2AfQUL7qXQC8Q4QiJAcvR8qdRbVPWsNZTXAs",
  "key11": "5FWar1XurLtQipumQSfkX49DcYL9UPmXkDLLKXUdoab5EesT4UuxLZxsMGj6yEtk5fm7x6yjeZ5zH2rVHj2QwSwv",
  "key12": "3hs353VvFvrhxK2EuYazH2uLWrC241BWoJm4N3mRFqpSuQVcDWDoxWkqCRhhF3fxrSZyir8D8Pjn7UwV4QakAPCc",
  "key13": "41ENQCULrya6MR8SzRRGR9s5b5UE4vLzz63EJHuyCVRT7ztwyH9wXgRFkrhrTs4TXzhSJutFyTAVDtZNskdKNiqB",
  "key14": "5xeLmi86Y3vN5icedRc8U64DdBU8LR1rUfbkoA5F5qyReeZ4MidauNsWGEpKy7mPmtLj2FsVwpuuYea7FJ6Qv2y4",
  "key15": "5eHykDLEwxdiWs616fL7FFFVmmfz93xE9wSRgYsPCcPBwHLsbtzBG1DLDnbsRwxpHdpv4D5PfMugudPFcgwp2f5w",
  "key16": "3m6y17r3LzfX6CMgXSma5EUToCHsuH3CsycB7KUEzqyMYPiHFfyFhWaPBnERCMNzmVTFmY4eQQvw54tUskC5fqjX",
  "key17": "4H7Cp2K5zjbJECQ4duwYnzX9HhSox5wBNZDqqZ5gVjaWXUbf8mS4mh3Gv7Sbacm2H8vFX2Tq3hPckoGxTtfXxfG4",
  "key18": "5GXXzgQ2kfqzwVU6pBJqoxF38VZqUbtQqGo3UrDwsYJeFw9MCoFRybVj5e9ib6ggzeMjW3vtgzFZn1GUq5wjEuHH",
  "key19": "3JkZRsfVoBrJZ5nnXFAXMj8Hk2RGYrUXwnfGdbhtNgcJqfbCFU7FJ6tKoJCM3M6ymQYudvdQddFMtMfRu2HgYUrn",
  "key20": "3zwXF7SDAiv3zLWDBgPRTsEnuMo5wXtC5nBdikDeEmLg2cHQwBjZF3UXgTTg1TWPPgoe3hPpU56HQugGFF5NcGCV",
  "key21": "5AFrEKqMvuhSbTgEtfN9DnoTy9wAVEDqiwThiRop5V4b7Pi6DXpVdSFN9Rjk3YT4GSY1iS3e4dmcXG6TvLWizeSN",
  "key22": "34YtfwkxqF99BEqLDhZL7mLhmTpuEfsPYAcZykY5WvdvzwW5stGoSxgrrBHmGkDonUWUW88hHgw4mUmkJrLDwZCR",
  "key23": "3ojLTQsLxRAcpRq8mhdtMgT328f2QW8ojq4AyA4zjeewaUoGvgv2jt5qv6QKP6qyENqfVkqRH7bJCxELk5sXs1mZ",
  "key24": "591C4EzndaceifmSbyGTxxPWYYuMbCLyK2zy3urwecoHSKZDGtshCN9ohspBdpby9DB9ru2TdjFrbt8b67V9t2tU",
  "key25": "4Ea2ZAADrUxs8heW69WvuvBMXESzQoZ9fGcTU1nmkCV6sPVZH5KB6E1J5c6F2CPJntbdmDjEuzcVP92b9ywTELw3",
  "key26": "26xTAfVxp9cde8cAG1Kiz5zQLJbFctu4Uk6F2VEXydXL3zMTS3dUKHqoC8Rd5Y5w2H4reWxGntS64uDBenABikh3"
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
