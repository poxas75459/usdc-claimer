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
    "4MtFJ5Ut2PY2WZmf9s8di3Xn5oNxh26WmzX2eZi4tsGzfFd12MG6uUBPJBupoFa4wNxVGo9DWBbPzvck8k93ef9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtpwaMByR8V4h6hMfSdRPiw4xKLA3pyQjTvXLcv8gRCNRKNniAPAvd5Hz7ixmQFe7hKzowUqKRokJAW8Uu3FRqM",
  "key1": "ehM4ACedq8f3sKjUhhutVp3VBXtUrxqjhrh6sMrDCTc7faR6tyuXuSoZtBTNfVEGYcLKiZ8J6LQeXsGo1P76dbE",
  "key2": "EC1bFUqx9jsX1hAtHHomEeRsDTA4PFmyQ9pesJVs4DiQUrFXGFzVDSf2oM1CB3DWGJKe2AmZhWB5RgXrv1muj29",
  "key3": "2WrMrjVxCAiZasATyQmuQLutFFBcLqUgaLyAGc1ioKi3GMgPNBmeTcGMz8JVhxbEqPtrskWo7wYvjkyKX7DH9hDQ",
  "key4": "4KMrxnH9TNkoQ9Lc4mKAXuxPzXwNTxSsE1y7Zve2fmyH2xP1wkiS56FYrJhC2PkqTFYFBhcecZZofubg7zacuPai",
  "key5": "2mhqyYPYnJgG8HRutWyCyzDJmNFzncSmWJ4osgp4KuyY8uRR9qaquK5AqbPzLNktBPQ2z6andux1kypStwyV9zCq",
  "key6": "3xriDwJmJgjZX2kvFNeTPfrbwkV7q9gdg2cuQFQMJXTaqQgbhzTpfCKAwRTGikreLALiJ8wPP1vePCJQmKW5hLBH",
  "key7": "2idTXAi9LxJS6j2ML41HAicQvcM5nZr4K8TqtjvxzroUv9VDzaKbpFugbox5rYuPSwmX9LCgG5C19k8h1U7uoXcy",
  "key8": "51h8XMykQAZsAGLTmiYx1FhtQ7V6eowB2pKpn6JfcyncdpBVeQP7KgiMHYqN9jzwU6icFjz2iM695iFtBDJKKfRM",
  "key9": "5cpbYgyiYaqWh4XGBrwP6payfadtSsLCVXSxhRqyQ8jTxqiS6kCApSFFNwjiiT4rZcaJoN7gBSnCHu9oDwzr6J9B",
  "key10": "4YHafDgTYLQZxLqDwwSYeDGekURtSbsLEoVH3BqKvTCfHWm3n3L7bLvKYS6wZ7MDh3RQRgsamFvWXJXiF5knQnUP",
  "key11": "54vbXZEc5ehUhBRDE5DVmD4xHeUwuEniTqPwjEwgfmo2BhNN1V2K4g4QwQAbHegctyFQaoBiPCndT18NyB1KaRzJ",
  "key12": "3TudgTVDrsHAiAkd3g3RbqeP5aKYTF32UpeWY4NiaXPkgoNRfFLpZwpowc7Adcks28HKn3ZrodCJEM6shd9NHMPH",
  "key13": "5VU8SuxR6ZwL2FggZ5aByYmHQt8YKvvpT1w7poYuB8KAVBowbuV2Q9xmYCkaiHAVmgdJEHLuuw2Z9wVD6KPKEuSD",
  "key14": "5iH5xzZnYvFQYcjMuMm5pQPvhzNYxnSK4j58aGTGXUteUSLgKe1Bk1HHCgVAJS2Jur4679a8oFqYTLeqwNnT2XkV",
  "key15": "GqKnrxCegcwmZozYB5aVpv57EzKxjxqbz9trzSNmVCMMUGYdUnptbznQgRMhAxDUkAkneXUM3PXz2pJPEHhbtXS",
  "key16": "2oYdTut7Zzak9FZgtESGqcGg8ZaTWugg8N4o5dHBccpMwvFptRaERkJRj3Jd7i2jfAYe8ertxBm5s7FQ8fCg638Z",
  "key17": "4Viczhwanv8AeasEGSWfNRTy5K6xijvyUnkHvKm6zXux8vSFRuwNrWjbW6hczDJxDtepf9KFgKos9so9YajixG1F",
  "key18": "678NvbaiTdW7jTE9E8FiuPV8s2hfMHbXsmzswikw4NrsrJT6zqASXDeSooKnn85VdfAgTx9tvky3RNb1qS8mYYXu",
  "key19": "4FJHJdcxMeerWZbvz9JXBrYAw9uvgdB1hzVmdcdraaTh437sVQRqwemEA2DG3TsPPGsBbJ5VH6Mh9whBLKx6TzgE",
  "key20": "3WgJJA17KaQrrxV3iP5MhwEDFT7ggsDR2tp3c7eeiXwseDLT8RJRJCD99t9V9nvGfV3A5baS9Xo9ou4h5RbusFdj",
  "key21": "28eAQ5ssEAVX3GnWRpgGY25YnQZQ7PiHogZDmemXv61cEzHpxToifddfg3W9mTbghUYYrLU16YDhhDN6RATSvZBY",
  "key22": "5iJxCcctjcFLEGLSZtsyhVE5egzqcuv4E5VzoWXm8ghzXnmksBv11SStiL7xwX27La36eRgh52WeqJivUhYC9nxH",
  "key23": "2xQhsPdz3wfFULuirJv4jBGoCTeTHBjiBTMNuBHD3fyVTvVfDj7Qnw1JokbW9H3EaZaRLT2i82SAEDHjp3vn4rEv",
  "key24": "4bePnxHMCm7mjq6AnswCZFTG4oLnzreukwTFctzrECgq6DhppG91vctEU9NDZypxTYtqRmZTezwbFWStXHpU2SDs",
  "key25": "4B5fqHuTLkbkczakcU9yXU6X29xPH2iUFmsAjFLWbDXVsZmDhBp1n15ZsgbhYvDa8Xfk7ZfnC6Qe63EK8crjuk3H",
  "key26": "48CSy4KLL7zXYVGqud4voQ5iZr3Xo5xQPLtU5ceueGrm9gLVjWJQLCtQYsUhqnAfFGWtPHVCAEr3UUJeMw35C2JR",
  "key27": "MxpoBja13GsWaQdAwddvJV5AZAZwi2fcKRPHnuAjztwLjJMFPz2FRfthJFT1ouW2TyNiocGikgk24rwFFLpwEm1",
  "key28": "wjQrTtR8htNFStkBFE7wKpBSPPHXVJ3r97jeQG8Md88iUBaXfoAXZm9yko2TcCmUC9vxTKTRPsGoKvUzoiRAAz6",
  "key29": "5hWpXo1sXGbs7Zon3qGzH3J8wgWLG4xtj5jYBumoQHbtpaS159EPNfH8tm8Ujq8wh8iXGCJJ2fD1Tyi8Ehw88KeX",
  "key30": "2SeeQw9k9dAP5L4zQefDcms1GmTkSKESwrFfznX6dSvCTm9AdPdUtUcaWo9nJ4Ugh42Bfui6Nh2E7VQNgGsJGgDR",
  "key31": "C9YEknADeddizAdpHp2FHew3fKXc6rBw65KEzsQMo8a51kWMYoYzPrxyuzESh8fgpVgHpnsTBNREFCB3cuxF8EK",
  "key32": "2RLLZFxuF3Akc2jjmk6bKxmP6w6GWbc4BG1mhdQ4RevMze1gsDjghFe2v2b3zWW7QtCYAhggbYMFqrhHDXiywbWm",
  "key33": "3E4M6rccV43R3iLoCgSaEYJUoWypGBcky2mvfiZ8VqxB88zwtB11jxe1h8HgNEsYp6ebnD6SzxTWztk3tdD3iZyS",
  "key34": "4USjTYFL6TpVWnMZ74aWRP43rsAVd9YyTmo4FZdEjBcHNDYrWH7kU7Z6TAEVYW6Z5C2XrsRMpF66odhgcYKGbmah",
  "key35": "4WzvaSSDJD5rmNsXrFYZBKfgC9A1wjwAdPXCZYMzcGnx2z1Ftaf3asoHTixDRvRuW8N4dgp4F3jGyPPdL3LNyYkR",
  "key36": "3uGmHVib5Trfrsvsjgmb7xRB9PaRuvNrw8Avd6zAscZQpMkMqQtWjbVJXyYLnX3EhPFp7UBh5ZqQWUCXdUZCSvNm",
  "key37": "2wnCvBybcTt3bScuziiUXHed4UPF9ULwGArwx5VxgypUQ85Pz1M2uYzePFDyaKBLmex7WhCtHFGJF3s6MmTQAm47",
  "key38": "4qNrsL9dCNpWrcMoAHn37hWXkWV4ynPBNDJXVa5gVEP1a6isQXtCVh82N628zgRqQxhdAYUv8BVuSmBkbXj7E2ck",
  "key39": "tL3ToXrps4HKYMpzFURmXFa5E7q52j7h9wKgSxQQ5DPsusLLbcn1ZPMPYzfY1ycFpTn7B8Fe4xmZCRE66EdfGgh",
  "key40": "3zLqvBZLSi4R1ta6wMGWcH7aviY34XccY65WH6dFMdZbhmPETdmtj5q8AmPKfJYi7DnubGTQXKfGepBTkmVfnAsj",
  "key41": "7e7WeME6XmZRvX9j9pRuBwgwiM7fVqGAXhTtXK1xwoqvwno7Ubgt3S2FhzUeKLtkZaWQtrt59RiWFffTTPbYrFm",
  "key42": "5YBXf1ysbb1deuQ1Xzgif3ZmvU1BgUeKVstFhB5wMhYkFbP5ZXctb2VM6UoywGdxn7DgndwJF6iLfYH1nSiNGMKF"
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
