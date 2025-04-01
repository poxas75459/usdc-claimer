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
    "5tx3cK3sX1UHd4PYSzo2dMuzjZGCN47dMr2V2ewBafCHZFYSqnKvt54L8zj67KjbyDGhaB8ceLc35p6g4BrLYBHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cz6jRs6xhwWNckzxaCBx1hsNptBZCvEtfkL2iRShkb9HiskHqAicMuNjrmm1E3Cou79vKgGdkvk2c8F8KJzGoK",
  "key1": "3iZrFTzG5oAEhZXdue1iAEoh9kWDU6hv5RTGkWhX555XmvGxWb1EaUCk8tbYtHw8qUbiM6nxR8rj8MFZbx1LZFNi",
  "key2": "3nMrW6oqsTyjysf8NoxwF9UUBAUS6m2BbjhpMZSFAFmDLqTTZiHZgKqDMAitWdqnPu6YtUngAUkZkVtKmv26mcjr",
  "key3": "2VqY4xyGML2VZq9hGpym5sqAs9qwhHHvVmXCkdkt7kubuF9NqwZqXMUQjRsGcW7RCPJwXUsrjPxgqSXR83j8rcQa",
  "key4": "2tv5R4W7A6afXyU4nC699Lt4urNYnk9RaRCW3NCYUeP5wTVsgQCUDGy37fQEyJJELBoHaBCaHh2Eio5ZzSJnYHi",
  "key5": "XVbFxnNCoWwWQiRp61E6NnVQtP4zd7DtDTbkJf1ofTPzsPCrbtzw5j2mWRCKkp8iTmTGfesrSuE8GEa3TcYSgfM",
  "key6": "52aGbDKArhdy1GugD16rtPp1BXhnoGK84aMMDchvAcYBWdSpTxS5zyh6Dw2f2w5zxTcqUpT5pLoPaWFbBMExPB8d",
  "key7": "xtxeL1Rie8AfbChNLX9aAmzGAmWXQmHzLf9ghcFFAxEU9stu3TYQSmAocd261vjzpFH9e8UuXetVHGtNnHsrWJD",
  "key8": "usX4os8ge8ieYYTsgj3TV5gretLZrBdwRSSkjff3MxRGL5c4Kcx8jhHNxnD7KEsSS9nDCvPUapjuUoMCsSEnFkU",
  "key9": "41CFVxW8TZQykTQ4gTCVkKE3snoBJjdWnP2LT5BfsnXn9jCijuHziQBBPMiGHEUCHX6M2ZAMCeLHB2CakzNhZmRy",
  "key10": "4ez8CbDfNyCD1EGkhLCvMka8CatWpfAfWYYyJVkrYbKTzzspDKfi22cDXVj4srh2RT2VmDDwNsnHkzvHq6j7QuuK",
  "key11": "27ZT6A6BZe3uWi8WXnWownuny2z2XRHxPv9gAPFBbALBei5nrobtciLZjbEpT2RY8C7NyHraL7YiAXPGNddjyJNC",
  "key12": "5aaKmUtK87ehNe2ob9Ge7kFpbw56NGe5Y66Mexmg1F2yQV2PckyiTbJnG2RQktZKmKV6Gc7BAkCqPPSFgyLag1Gc",
  "key13": "5qbepHuddKTCevjV4BEACXV2XabijXDwz6qfNv5DTXBioTCcQqmEgDoWRLo8BqaRUmqNLjBcXx7dqXNvfdYDYAWw",
  "key14": "515TyJPjYyji2RDQ1jFLwdbvakr7Bj9sA21VmKgQexb8KBWCrzqLLrL7ZpJ3nKgpxbF3PVMiXtpSavV6pEiEg1HF",
  "key15": "5DmmENy38LMptGRc4fYk5hyiztGc9orSLp1QgmMUgcv3JcCYB8Js7cpPLM2xMpSp2239TYg7KK9DYiSgvxCyxEU",
  "key16": "4VJ2sdA2AsWhnB6FFKkazpMRWWeiaj96D5xD5WkRNVumtVXNL2BBdy8kZ1QimxZGEx1SdhzKgw7UahZdPxjjxDgQ",
  "key17": "5DRNDWRxQR3qutvQqq9f69G1ZvovLsAHYEtvPeWy7thr7PwQ71vxB9jFWZaCGiadQFsCZKasnDdvMuJsMSeKnQyz",
  "key18": "4iGPr2L5RdZz5Dg4zLLY4smDzsp3472WrbVoFGogVuG9kn1x4eq1VCvrFfKJEH5R3f4SZc6QcUoaq85AXgATuMRV",
  "key19": "3K8xBC9Zix7UWgGiZBycAYwNH1awVxKaP54RmaYdxgczTeaeWBEriEKRfs5DHeWbYcYAnH5hmM6dJtyQPh7puPt1",
  "key20": "26qWhz6My8Ja4MAoWe2CSBmMcFZcHwJmJcoiCe9nZmmbmZDAeZXcFrAyJEVD36TdG5rvauh4sy42Cbqag7Wdnvyc",
  "key21": "3GRBNa9R8riE3HWba8PAVptDf6Jvs3NjSjJ2Zo2dgfqXuZbk4EfrLXy2zLTRTXMRiSb3krSMBbiBk7w2ZJfwKPmn",
  "key22": "3qyEzYPTe1dZ9k4FL3sso4uPqjD83qLASueH6NM4phUZKogDWiEVcGxvvSyibuxKuQXnF6Qhamevkn8dLvAERNBF",
  "key23": "ArN6xUVnFCfmw3nWuMPdi3mFT8P3DVnx95r6GRkcJiLGam4wAPKhSkVpLSiCwtUJQKwy1UcSpKmDtXqi6Gdw7cc",
  "key24": "5DA9QMma46uhTQz7turoeHKccvPx2EWZaa9CxVEnHCEirxVpsg9rQa9jC1CxpARJ5i5GRhe2mRb72apRzasWSdmT"
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
