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
    "4kcuP7m5vhnvuTkPZ4e3NtbABJSWaTozM4A6fX7fL12ASa9vkFyZ858U4fPRpQKQ15w3TQVbzgL6eEPCKqdYoss2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNDevuEHhozAKN7NAFw3p4pkPes6mNnLZb46ZtuFYQXMdGRiwUSPeXCezqpx1QnUKQgqMaLNrG4mL6om4Gg9cKZ",
  "key1": "1ZvdRJaLJPsdhHkg1Ta7VzktiNAnu78GZyybSer1tChoBxY8jaFKf8Lu7zcTZ81MihkEK7jVcAweQ8Tgfq1peAA",
  "key2": "33hX24CMeBuNds1Sp1Vc4NSgggYsDjq4LpuZ1A7j564rf9CV4bbDGGMZBFgqmaWFkuNPK6yNdsARghcALjPPNmgT",
  "key3": "5KJXHU2oeEJRvX1QxCQyrmMCDmXPzh9Wq7G6UaXkxsYaWLy1LtkbirSk1pnPyAUx8Htitb2TJ9HeVuz3MQbNy1p9",
  "key4": "3kpx9pVGY69K5aRCLF9cJ8KUck7uH3fyjnPzoT1585HZwVV7fr3Sn15sbNmT2Hg3w8rdCcydjvU2U8hmQmrZ13jB",
  "key5": "5BWUvfgcTN4n5YvSdgvZNjNxnXWe34H9p3DavevmDN2DJ61VReLa4Lw1aiFc9LHh5RFfYTbtzQNmH13tCxPzReob",
  "key6": "2gn72yyCMGkG1i7kkyz2oHT2f5voAvMs2L1MndNsJuebSMHLj8dm8Crt1G326Gj3fsgycnrWDGLaUHcQ8S6Qmrjo",
  "key7": "5zBZLwrMR9qY1MMG1exBemKUtF1Yf7s7FhvFfvrYjrd9j45P2iPvUY1fNdKds98qhqWB4eWDW4iTMm5DybSLJSJ2",
  "key8": "zCo6bkqsxJJPdXpmYZgjrQ79G4QdznDecSEvgmbbMKKZzJHJJsJzCgTu4sBvquy2bqkkh29QqvPZemuGX8qrxTs",
  "key9": "yVxXYKfrEv7YxUA2ApByZ7vEcwsEudXvULtdt83JvAzxBjrzADdB4pFTsQKkFwuXHL85Ziw4v3hf8pM7747DWEe",
  "key10": "KDfGZX4oEPfvcM94Fx8MR3qrt8VXHQTodJr3VrDRcCL9EK99eTf9HXPXjcAiFnbvQv3CDD4ac6Jy268wCHnuFsJ",
  "key11": "zDBiiBV5GcGLy7c8eg5teiVtybuAHs6wqYnYXXjb7XyCqeBwRgDHgump4DxoFSYkKZbx3FmARJvEuxfuineWgtx",
  "key12": "24sxK1GKCiRV6DYHbrv8Cbe8qwFHHpmidTCYNNvi8ZBGcF2pfugFJAyoqzJCfawRMXWS4zqspEL7H9xkz6KvrZGL",
  "key13": "3hTZFfkC7XAkpTySPESQBHKMh6bZSZEZB1eWMUzB9716LKLuzkhUrw2dcC3Ux4VQWfKELdAXP3sJbEcxmmDLGBtz",
  "key14": "4uc7nEbyevQe3BCE3BCDwdLjLUMnQ3sj4gJDE1wJBWXK4tn8A3qYJUzSGYBhEAcYpueiXdWMYRuDxcbPEtiCXaRN",
  "key15": "2EY5Mmo77R6t2ceGboWCc35FnmFLo1MBcxw5ZtwffXqURceSi1o5jVmtSxzYm3KhbrKJTNUEoAdHYWb8FVntNzvS",
  "key16": "5YZaf6SVyxbKpA2hNq6TfUsn33kd5BQhdVWjVg2tCKr3U77jjaW1kPdnyZfi3We3kr42vouhoKDBZhHjrHhyKaHY",
  "key17": "3yNQdiTkk6y1mPBJnW2He6GKGUoUnzro6fpXoAgvAzJsCT9BuSjTLHAnGNLZ9XnaYStHRXXAsPpRj2638D3d8fqz",
  "key18": "23SS2H8jpEoAmAVnY15YBhXQHZm2dQCHBVe9HgBZg3Q24B8GX1PJpYEvAbU3YHZf4y346p7e5U4687rUyFeKvenX",
  "key19": "2NiE5y5B4ciVBG2Cxqpx471TfYTRUobDZMWwHLhwLPXRPcJzob5yquDbS81yXqK54dJ8k76CVRBBiXimWTr3YBVE",
  "key20": "28fnYavEY9kLKeT3rX83kppVt3vnLuR43gZLztpvTBSXeb8xegxJkoB8oN5VFycAmUUY1eL8QnCUhAedsc1F82yC",
  "key21": "5K53TDHa7eN94xbdg3c2PnQKjgztZMA3kxchVkYekuo65wFtsaveguqcSTKLcoGpPnqnhfG1JzwnVcKGWv1qTf1j",
  "key22": "4cMuDFNktG6wZDbveGn9Tm4zj5M9Z5rC3XMovan2HSYDyMZ8jbDWJkNbGTRtV7y9kwFm6rEqmXejouH1LtBpVTqT",
  "key23": "ZmJxH69DM26q1Hfdhjr7GVzPExfa9PUiLDCx73Pn8G4mPFk2gHHx9rZaLBoX2bBzzZMS8MkvbtSW7B8EKJvNJTs",
  "key24": "Zsz5caBfoYpnC5LEMEBvYYtjEXX7BrcD3BUKhawfXscD3jZtbgr6icmeWJaqfTftj5tVGhGXNZM5GnUsQsvNS3p",
  "key25": "5HdsAKdWN3bJyzpZACcxTSd681skR2P8D5mUnrTKhG6qgVwj1dsjcKYg2fxv1UfFJsnTREf6PtFgpNqwQkV2sDie",
  "key26": "4ahn3n6jwLA844gmgXd273hNhsT9BafZx4ZvRBv12yg7eCFCXBnAEqMsa4RpRFmk9fHVb9RdNRjbog19EAuAUsgd",
  "key27": "5SegdeapQJtdUnc8t8wZQrZLVmEPsiex6QVYSuRZnxbrT7wHGVQYviDT6ju8vTBgmji83DJkALCxFGMAPagL8Jzs",
  "key28": "Bdd7pqCmXZswgCBSdog4Mj7wuS5jBGLZJ7N3vebtrpPkX67rMLvayQBrJ9HKLdGh49yus6aCqkNdfyHMdaW9r55",
  "key29": "5YTPnWRmv7i7dxCCAp4pE1u5QqXGAcpFiRfX9C4nvzYE2nR8J14vxCQzM9J1tssedEna3cUWJQmVztLYJnBR9Yum",
  "key30": "52KBYkqBmWreCyNZj1KrrCT66yJQhoak12M9xoZxp7tMQybvt8WSg3ohPZdFv69KhNPb5oSe8EP7dWsiTrYHWN4T",
  "key31": "3BC9Zw8E217k5ehdEXSvm1dUtjBnyPuAxQYYWtsSwkWMciGDV56PB4jE2jm3fh4Umi9iVu5ooyVRqv9AxNEs1Ea6",
  "key32": "PFUYgxq9cD62jxBQARVc1mNA7YgAQ5kgn7NpjzjsGQFjoPwPyodB9sdcDzC7UrBmifhHYqHAJwKJLLqgK1W89GJ",
  "key33": "2Nt5z9eBAJSqXdvzU1QYnQELCixJmXtbscgG1T2yawuPx6ZcCx1FtaTYKeGuBky3Uiu6eapnYe1Vdmgva38xLEn8",
  "key34": "Lf7xTVac7AN84QrwqNy6DRHnJZHxr9fCZh4qUWbuGwL3tAKjrfsLiNZY3vyRv4o9ZtxbmbsEnT6QvS3Cxrv8Dsy"
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
