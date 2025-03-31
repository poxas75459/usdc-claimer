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
    "3S14zuSRhFxis2vmJwCeiBczDcRnQCN1pxrT9txfF1dBhUittk3gegcAuxDXcv3zrXo72QSusezDpDWE1nNJraxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t5WTTYkkeYhTJpajBBzaZGbuJd7J1CZkCD8afBrcNJGYJ7kQU53nm8o8SpjBMGmVc6KmazyMFA45xQ1jUxecvGW",
  "key1": "2YYakdMGSiVd4jKX5Vs2swdJn6SU48XKDZpfrRWipxEHBNyLS9a95deCAYTFYMFTaYyavRreEeScPPM1twfmgj1u",
  "key2": "cS24iLHN4vnbAVNviNBxVjfr19t4D1wkgsXCt37S5w14H5eUPBdV4KBNSfM7ZcGfTfxMCznxZpaGizy1KN1rPYy",
  "key3": "5hZzRF8Tjhc4x3xPunTm71bqKNY72amPwCmoocwYjEhR8GuXfCjcPkkvMSo8hdnxnmwyLQmtTuS3ESmwWZVMKbEZ",
  "key4": "2cSNAPFFxLK4pAQwWpgEmNJfjdSg8wTaiNVio6wwqjYDnWbM8riUSaDZuuSxvf3JgdPaEE4U3r3QWB9c8ouYVo2T",
  "key5": "5SeeRjPbLSRuWw7fGH75MrQd6CxCX5NTwK8vmkBYQ8i7bDRyfXSdEQvYtUButu38AN41uRTQay81ULUYTuoR75ai",
  "key6": "BqY6Z37pytfqVDT8bUqsWmzwtGHbg64HH2F8sdFsuCWvxbFKkpxixb5wd81utctgdV4tiPhqjw6fms1WeWQNvvz",
  "key7": "xADjy8ujv17pgVgKMirV4a5ygEEC8U54zdRCXD91DJ7FtfoujtRYhvjTsVWcx59mEDaDAPpzM26AJsct5bibZAM",
  "key8": "4xRpNQf7KYRk3VNwpvGCyxefKWwv5TNjD7AvmDpP4j9xfkPu11Ksf67462WyQMLucQtNjxHH9s7xgDXmtyG24CWA",
  "key9": "4pYT8zpP3fKPTAyseLLKKgkFnQsdLBmMnWoFBqfB5NusyHTdwYvZLZciHeDbGnRoAHevwQEqDabdseKn2JALCqLU",
  "key10": "3U47Uk56jErAm11GSvxCGH4DhYizxbJiTULKFkc4amp3Fhgt7hgFKpqQXDXzom1dMBgir9q9ppESBdbhCaB1js4U",
  "key11": "Y8SZNmQXMM4b7CsV7WTkH7KLRmYcfHdueAt7eyWTXnPZuJSiiGD7hXUd42HqqGKb11nb8ydSPnvBVW9BQRWq4L1",
  "key12": "3HSobo2WKhwcDea2dF8SLBrZQzVNfFQPySnLbhxkAKuJZa5zxXP4UrvXbrHyaccBbLYnbj1CxTLaxNkyyGyYxXzZ",
  "key13": "2gDkkXkUoKHZBxpgy7WcSXDvrJWrxxB6wozv4zzbHVW4hQNt7F2gnEsKoaP5Tx6NEGN7r2t35SNC2WN7nc7kUq6t",
  "key14": "4crd7YypPZpuW6ss7TKAA4i5UVJEEyA4Y5ht9X6QYHBEuV156Qk7bkuMpWG4pe5N6QTAb5gejPe2krp2g8yrkt5p",
  "key15": "32BRiTU1daxxuu2YajuTGgHi86MLURoW9iREFZ7HWTPCyr9szMhHqsVMLbiZuoQoGvoGwEyE6nHHX8HoXBtthWkE",
  "key16": "4daH8iqu4qFJ3AUiVoNKzWXwn2tgBLMNff6E2Kcu6PzJZgZDFtApHx1xhFRxJsfyEXrM4B1hsu2247gjE1tpB2fn",
  "key17": "1Y1TP9dorPbm1x7U8sNWacuozTuMHG11EVsoARTHwNfvdmhBiP68BB8FmGYiDe6GNLipTm811wvzX7RqPa45s6d",
  "key18": "3niRpHbaZFbdUSisv2rpm6gSNmn2LJzDo3KGouXhSNh8sWhczhQMYKaEx6tra9VoeLB8xvJS1JnKRutFCX8YFKnm",
  "key19": "5axKcLVxWX4YpUsXvWbEn7cC4bTC3mnEMUanBDJnxkE9AXPm85Q2SpAQsUSQNZ8CgZ8PynVEsZQFSivurwV6hiMd",
  "key20": "3eXiULQCxYmcQ8j7U6fmiYPMwDFPCx29t5Lx6oq8VD6J1PDBua1K8Ktxn7C8o1GyFck2wAZacZ8v7FEAxM9n2xZ",
  "key21": "2CmuSETNEYHGUSkVa7XHqHxARqAbkmjL8BgdiqymFr2zqkrJM8vE21CbuNjtjsg1JtwhRuGjxbkEB3CbGiCgf5en",
  "key22": "2jXYwUGsfC3y4ExDDjZxwFp9Yw4PeFbeddArM9c8XnkiupNeZEi7G8yAibaCJ8UN2TSUvy6wNydJ7j8FQpAu78QA",
  "key23": "3kFhyRaojfxnJDNHm2KnULUPU2vk6AteZVrjZKKGKABJvWNKJxcnXuJbEWjsN3pXRc4orgJkECKzifuyDDKd6RKf",
  "key24": "3wR9pEMgEcfvmMepgZ5yx6qgTX6qoyXEB4yZGiqeCyQzsmEAxTyW97AoSDkYEKWEsuovfRQq8jBo8MyBTsYUcB4r",
  "key25": "VY4JktLXd69qzn4W5hPcyZ7p9dxHprsZEFQ9HsrBmrkNYSmFGutkSboBw4rB48737ewwWcevjcYwicx5PUXJ49V",
  "key26": "47zaHtsSTgZ2hdCa2mx4fqrPGYxBzNFTSBFu45AZ4HrMWnD3SBkT5MSWT81myhDnvW5x5G2JDCfybwj6T2G58r6f",
  "key27": "4HeJdALaiU4go59NULq2NytRBPCJ94wiWFACqZpABHVGBbm9TqTRHYXZomin6rVjnsLMbUFKQZzvXgBnRKFi6Vs1",
  "key28": "5J1GQKrmqpfHsWS7etgK7NRqKqRVGnuzGDD3hUfUe6MWCFGLe9bKreXZU5gKdeeFUTRUExY6mJKESRexzo5RjvAY",
  "key29": "ATgBDtJpf7xchWohYoVD2Nd8dtFuDe3uMMtaM39HmHeKUJP5a63bHsA2NcEKqQviyjxrKAixNCpAsdyiJFEcrdV"
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
