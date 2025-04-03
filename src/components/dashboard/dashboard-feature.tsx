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
    "2c5M44i9LjzmuKqHafARFUmwenmEtEjmHtqLhjp7BCaeaAY69wLCRovdUZheC4n5w4zCzTdPuY6frFvGEWBRUm9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsRP99psDQuhEmctUQQTL9nwMWVb23GxGby4PWadAnsG1m1qtVF2bfQnQykC31nWCzD49Jh3aYMzySgXjLvMkKS",
  "key1": "2R6qBjKn7WuaMan1TdK6D2GdZ672fuvXfVpsixxUC1ntxW5LgxQ74aJfaoCXyeGSqa6DvPDchrxzYHeJELhoPNaN",
  "key2": "2XqajrropbbFjo3kjbJ1P8Mw3FM8NFz8ggG1VnX7CY6gMfD12C55ngu9JRUCEXxeSgfCENf85TvbidNvyDp6ZEKn",
  "key3": "5QvCrmj8Hn62NkE57q8RJChZKmJU4bk5RbuXeqAMooSawyLq9PEtmFQoejnc6PFbTJ5VpJmk8oysXKc3McxMy26v",
  "key4": "3rM16mcYttoskQwcSq72JU87BD6BsJbcx5RsdwgXrgCNUz7wXBYohs955LyEi7qyRAhsiz76M8VRkizqT79wYftB",
  "key5": "5DXn3LsXqqRQPyAvweUSTF5dX5NoH5vu9d7EnMwuEPBXiTsa485pQt8hn6nd65Wadg9c5V8m8yveRWJpvTFDCZuu",
  "key6": "2jv1RW5ZxzEok4auC3gvDt8EEySbbBcEM7Gfs82zLKGgSRBiZhTGrdzkcvJMYxfrPVU2hMvH5mArzbiCQi94BhGV",
  "key7": "2iAt65zg3vKJpjyYe5KV1o718TYkBsC9cayh9uSCmX3ENtdArePHXNo6dXwNbAZi36od355oiTqDFmREMc62G9Vt",
  "key8": "2R5LWqo13GseWwuiUB5J73rJxcn4o2itrBzxWzvXsaHcDcXiyGRB4Gkr8Zd8a2XmvHMKqMgjoXSKN3XfJ7Pje3yW",
  "key9": "5nTu4kSzohnMPG5i22wdwqySQF74eJDjXoHSt2tgPvGzmkBzJGqXMtJb6jDMNfNVnBqupWCtGaf22AdD8wJE9itB",
  "key10": "4XCFF512i4s5esrZtgcKy799EVjUbCExGKyCG3coZFDbLA919Wa8Dyv71CE9SYr5LJN3xUXKXQgThT7vNfV2BpXK",
  "key11": "4wJ9FV2sFVapCQmL3nQFAbf4Qhnbsmm3TP3ZbFnx4T9M1FLNqE6h5J54c4zYiscLgsPuodPfHEAMV3BAqQefEmzC",
  "key12": "3NmoLmcu6pL1pqfGcPjrfzbu77ntSTDqNKhFiJcsXMmTH22xRHSUFvK6xvjccCiKQVJbPy6ba6tMMGq3FPpgpj1E",
  "key13": "2Ao5gn2FGkh9cWAe6quAsA46U5MHC7waL3FzcHDukk5XQsFSWoqU7h2Qpf4r2NsrcprvSS5qfsKxBSTnstyrsEiu",
  "key14": "2jbwuQRan9dhupq7LkSp5Afee5xTMCbKdouMLyATCiuQLNmNqeb22p3kRGiXvfqLadrXvxMGcfTqi5bjrndUSro1",
  "key15": "2YQyToe9A5UpDm5d8TE7HwZXbUPaCMhw3L2Z6dBpaR686JFCscRfnaV6tC6rYVHcNUknMbpEdgDtXufQR3qDUvrD",
  "key16": "3Jv2AmBHhb9e4CbBkUBxxfU4SDuTPPDsu5EhK1Gm4Fh12RcW3LfZJvJg4vMGkagNNvK1BtpVFmMh33dyUYaoKMT8",
  "key17": "mvUbX7XaL3BfSCHHJzKJrHNpySRRFhijNT9Hzn9hicTt8GnCvJtGk7wMLseZSjxPgT62dini73bADHMEaTxgAUh",
  "key18": "4oQPr6b8tNCvAraX67wn9PFuaEW9SFDqnLH1JANgbLPstMgyFwGs3ZZGfpEEZHSAK89HVsSuYeWdY7WDgvKkC9Mn",
  "key19": "2tZgqu8UfEuVLjusPMpAYd3ofgHkzgb7e84YuzuN7RJuw21cs1dd7CqbJnJAXj5ev9qL1bh4a85VPmQdEMgoFmiA",
  "key20": "46taV4QnzLj75yYJfvv3e8U8orMiwv6mt8t4UPCRXDonsLENB93EUJhKMEq79EBDLYqNjEokVgh5P5PB5dUY9Vdy",
  "key21": "5dVKb4NFKmMfbxAdXM7kgyJGxvs52qhVYPY4gP9cGkEyPgjqrAchLYGjx7Zo4D67UqqQdumxHXqbnDVVAXCdVHUB",
  "key22": "3AUhJs3oYLD75xri2Tcu1DMVKVAJiN7L4d78tftD2U2oDXoPfv97e51u1MAL4bxzyFXHkv8Fo7x3dxvCS2BPEqpg",
  "key23": "5fnsr1a8YM3XA67WFotf4PvdhNM5b2xgzoTFczv9kcMG4eajzaP9U1Km4kSy4qeZqpZggE7FmNmAijkXfRKSPYpc",
  "key24": "9DUDPSDtPyvEc7ufPZVrxpUsoP3iBZ9gjMUifnbS5pDCMQSin3kmxk3xzrerbDcqePnpx7oa8iL5owzsnQEvJh7",
  "key25": "Ho1vHawzPXNVHW2HsKSG4dSjVJmMCHwHU9b6Wo4TrUEaFwipqBy5gSXMjDwn4pVi4uSQuWTGdVhrmCz21RX1o3Z",
  "key26": "25LNXkcspHs5PxmtnZxS7BT1Ef1oHxUgPK1jzdL8HW337PkJBMHNKc5vE4DYMc8cNuUir62fFs56vhfda2rfcS45",
  "key27": "3cCgjjBHeTdRt7jiZfPffYrSM8D4YukCRkwHzgmLdiwjYVH1FoFgiedTetderMTi9M3CqpXcaen3wbLzVbcSR5CB",
  "key28": "3pmF9X1wLGV3HAFk3AcBCor2E1P9D2EVe98KmgwcPxwumv11vE8s1vFm3uRicigWbgKKQu3dxys3YviqET5su4gp",
  "key29": "3ZFFnCk9GiPeK1M4T7odc6ZKj9qUvmeN5HTgdHA9h6TbA8ELgjVmJvubTqD13T6hAGjwjUy7EMVU6FRguJAmyRU6",
  "key30": "2CTYmBvqLPppczEVmuw7JgKKP7AHkiZ9wihzTdDLFpny7BJ2zKZby4gASc175yAtF3sirphVCYNxHo4mrVgkWaPt",
  "key31": "5ZmbAs67p7dDMnsYaKHy5zR2A5oEiR75SBE2SUUgZjewJzjxMx2uumactYUMnus4qgMnX2ZxJE7qYLfZiK3eYm77",
  "key32": "2XgoDH8okxretWz13J5QWbAiMxe1Cxv2r3waXowdpbDqSZKUC5MPtQSQ7JWT4h4aaG4bhGnnoAC5oQkWDLoYVwyX",
  "key33": "WkDuezKPtEHTvfFzDa3xzPqaXJUCtreFvhK9g2rR5ePGic6Qs3pdmh2ZVBcAJwBXHRpetpd5nEzqHqcrZePHcZZ"
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
