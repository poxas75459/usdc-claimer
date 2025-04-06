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
    "3BwxhSY7qKwC799Pp4ftYsehvAenZZoMMh3zZLjifLPCfYESUckY3nMHj3uSpT9LLof8YYBWmv51aL3zkcei6TjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DAYWoP2xB8ZiJcuHY151LB2UbVNRZ7NR9997UBi17KQfwjPneGPSuWTwSMS7aRXdpYuwh5NUJpNvBU4w4QjSEcb",
  "key1": "2AbhWC7Z6CDXkKFYBpdHFFcWfRNmrSYQMfu8a5b4CNk3WYCnRhxmNgfnuzXs8WJfF1a1gRk3LHeSnTh33PgmTeGU",
  "key2": "zDeXuq9Tb52JR6trJxZeZEoHMg89ddMGQJxPLVzVUfs44oLEUrfFSsax17MpsU3ZnhCPbLLpRbKqFNeGYe3RBva",
  "key3": "5ZfMkfhdMkrvg4JbfzLsZhzmWCQrF5EBZ1zHRLdCueM1B4g2m5JKgmy2R1PBBjyiHHK3sa1wJ91y7dxLrkBYkHj6",
  "key4": "4Tx1NrXDudZqridAEDuQuQjBSqQDRXebStgKEeHaEGCej6pDvkKu6RApf1abBAfp866fTStDomctfSov9fCM6ChF",
  "key5": "3KvhHXopJiAzRSQYPc2w36dXCDwv994s5ArGio2fbYtmGdFf524aAKrmEwRqFtWoBsXJDeixXrj4cZNRMxsPYfBK",
  "key6": "2ZUbKcvjGbWWrTfqb9WQotoMqgiitsEzEHH6PydSr7T9TYaWif9u4YUtQXmgWZR4MZFu6qA26WvdySYPVoqJTWZd",
  "key7": "3XkTxPwd2EsFH4yGHJdy2tYnS4HGerGR8R91hsveyTDioPwstE5ckkXWZz6WByJCWgd4uAHwMCjyjGdtAdfWQJ2s",
  "key8": "5ow547zt3RGYW8DjsnEauasvJL8EZNp5m4PLhmFk36CADFUNbyUQDDKFDJ5jxAejayUAsSHRwDbHKTiMeEKXphJk",
  "key9": "3ccME2oUumsmVkTaFRK2HDA85Tb6XqDdxTYeTWerJZc2nmx6J9T2C3gFQHMXzcxkJoRurHav6S5aSLn1UxAn3jiQ",
  "key10": "3tMBbmS97vGZjoRoqaLGhEUSHD77xoZU7e4w2YQrSMRdUuWnHLrXp1jSBnYFBJaXSysna3VQUpA7ECPraRAxxBcm",
  "key11": "3sqKmZFH4rFQHwKEpksUHKSCZcfMT1DxBmDTx1oKkaNeDE5sdbPf8r5LDGDxNHbWBySWFi8PFd7iatXJNLMUBmX2",
  "key12": "237LfMCYqnL5zzYfJ2gBchiUpBDkpP6ugeLd5HE1HVZNK9P9gvjT4TLcw3ndcSZh2NcfWC1av6WBuN3ENqt1CbRZ",
  "key13": "2Gzf2rJBzgxasKzppK5CQHdJniNCHQnzdKSPpY5FNkwJYu7D9mw6yBmCetKbfLsPkToPS5Ve7WqfDUn8pyAymeEn",
  "key14": "3ZttiZsdtkznUZUFfpCc7iqwhoxe5QEAa9MJqh12dcYgL3yxqkxM4TeenwjzLKjXAs6XFpPzJY2eBHtkE5QtUkMn",
  "key15": "3sP7Kzj1Ez9Rek1hnEv8ueb28nCHhh1jybc1NZDSx8tEffrYCyY91pUNjPLJunHM9KpaoDguQ5NHdJsC8m8nJTEZ",
  "key16": "2ZACb8NFy2uCVrYN1zgLnRt7k2Ppp9rGgwiDH3rMt3JKNXnhtNW4ZYukbAGmb25Rzhrt6ASoH2BFiUUryZQAmtHk",
  "key17": "4tQHpsMWYFtMaFvzRDKm7cH28jaX6owHSrZbbZxeBLB4bUxAVdiS3wqN2eAAyRoLju7y2gCGiFU6CZaEdJ1FX2MW",
  "key18": "5Tf2oam2dBjgfbQ5YGoq614y7f3RBkM9FRqdWUQi2Me9czNcRAv2ZDZLddaXzF2oBv3pL6Czw7h1jKEk6vecaSef",
  "key19": "37iSvNbkgKrKaMyQicTMF7Vm5mLkBDNbuySrK3NJcSuq9h9GKrUsyj1oZYnEYmMJkmkt2gUKtHHa7H4KZKM3rKSh",
  "key20": "2n3aTcmxBdRsAeHtBDJz1V8ht4hvwQ43a22AqcQv5Pcyyoe5wvuaGC52z3yR6cgjvr7YxXpfK5oY5yf5CCUeL6nw",
  "key21": "eGPodVAgC8eUC3NoFVyMwX5DrujH7DwMMUfygP2FTETQzKomiYjhRmEVpwhbapbigXsZCa4JoEpgjWrpGe3u8hW",
  "key22": "269sN5Q1ZXSt445MiLKoBC43uHupaMhmDgksE6S33W7YWrSmtNuGv5vtRRGNzKTzGjTh7CLQ2EtGPemjfU5eLjUs",
  "key23": "47U8aB6c7i48zAf1ZkBJRDTDtQdcqCYFtQndWA1kq7A3N4gwLH7P89t8H1ujxgSMuoc5CZD19nkGz2tFZwdQRXFU",
  "key24": "22x5oW83eU1WcbgWaTUNYprUZSVzG75gSgcU561dDcrnHLibBcXXpkorAwXAbYqQim6YJCdyRYkFnv8MDFA9NswE",
  "key25": "qpmU12RkCeNkYSKnK7G3Xu7YimCV4yfas5GzTdhzyVPZGjmW9p8L6HRF9iEmUMTHXyXRVdcdZemGN1zi3jbK16G",
  "key26": "44Px6xszBazkrLXR3ssE5hXLvM4wrAAJd3f6ug13AnzXgUtk6AnntrKoEhdzGuTsEzbip4EzWXzKVS9ryt7hUSiN",
  "key27": "3GbgsQmuA8LoyccpRtYMdpsWiaiYkDA4VvDC7yaey93xmSZ8hoXx8PQNnr3FBk8GjMAt6DKezZKeALxhRZxBBR16",
  "key28": "2L1TEyUTXbuaT2EiEVfa1joftFgJqRNfaR2bF8refk3W8vY8MYewuxemJQDrAUv11ZY3hvrvBTHXZVzbFme5kw58",
  "key29": "35DCo2YAxtC19xTH9xM7mx67iA5miGCx8V8tJUvENDAtbH1X7pZM69685ngM5gmisQ8CtPDEx5zHDuUSWDGAYoKz",
  "key30": "4MzGoErdyaDy3vEbAtVVE5V6DBCM3zhJwkn1TXTMLMaMs2BSBoJkQSKBQt535uoDpK2CodLRmN77UVJLk9hV2P5p",
  "key31": "3D5HhzDRadhHPdKZ9zJeaKAAUmCXHxcRuqqy3RSxUDJf2nGpZt7XuzC9CTcRbFzYBQ5tnmgG7LhpZN2zynqUrfsy",
  "key32": "ngMx8M76dvnEC3pFsTr8YWBEh3rNsSk7S8NJb1USEJgrxTVkKwY36zP4MauLGKB561ap45aSsgSE4J2gTBK2U6s",
  "key33": "2Qoe5sWPxAjZ1xbbTpfwWEMbWmRJbyfiPoprcsUhYs9ZBnj9FZTb2R2PDv9EaACBTg98uCLrKjRcD3dwNArNJjaZ"
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
