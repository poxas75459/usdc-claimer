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
    "4UFWq9Wg6Vvw1t5DUvDz9Rx97SRKH1hpGmbk3isAtnYnjXqmankVVnpg9RQoaNZzGH6eHbu4XF8MBnSxtKpgtuGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K47V2ERYw7Sdx67vvprLRoH6P4uj6ZksiZ5aamFDS719hZnzcT5tkTZNi2EVA3VY2e9y5qnZcd8c34y2ybwvtJH",
  "key1": "5skKfKmpagoFbvwG4ajkPwkKGWzmmre3vCv64yYpQbLLVCJjkdecTbECgJfwPJyozM5a6zknXcpbvX5ffg6qTBZ2",
  "key2": "3ZqZHbXK7fMnLU8BHMJfQ71W8HbvZapPmjvQWcpGcZeNeffPiFrwgYjGmUwoc358QaJqU85kSGoZTKKhmzsLnwTG",
  "key3": "2F1DG8tGrfoiuRkodDjfVTtUAgRyFAL26j3NbGZAjmkayLzSoD6urw2NMHaBkTe3rf2k9KLJ42aZKUuPmQzD6qbi",
  "key4": "5asbUyumesfpbm1X81vrXWYwdaAfXUMcU2Gc1pQAEAyWHC9BVJUjQj1E2E8RkwaJywG5M1ftoy6jHZCEbzedYgUJ",
  "key5": "47WiDcAemYonh5YwdHjyvvoht9HQtujWFghE5tfjo8FUTa2Jk6AWof85ng9ub1bnUiFddvjoMWxhiG7Dj3mwDrv2",
  "key6": "5RxfPCyXpfAZWCbuzNnz4qSAzQPBtFVLdhajWBbohWtAd9FkWwzBdQwPHfLkeEDjMZDwVJ33gUKwGgubaLzGjiNr",
  "key7": "66x7yzjZPwH5ZrGrKdBZJRicuTrBwCuEHoF9dKsQrRw17gFE4qSQjzWPqwgaBoPAbXy4cAkCMzBpRuVmC7wRrMW8",
  "key8": "66Rq8YgAfEZAAFGc5qx7veYzrLNxBj72be1zpausKxtMAyPYnYkZBAm57vs9XGqkt5rHTCLZcor9vpDPyXPE5Q31",
  "key9": "3gcZF3FyMc6aHjhfguQu83VuRDGfnPfyiLNazSuFoJHRe4G3NcL3wU32wTYzw6iSm8CKJqHBGgaQxmxPcFK4nmq3",
  "key10": "2WwksBZE748Mcvobm6WhSbttxasxLs1vd3pVyE11XunDnxKVAipAftkn5fxkP2pU2cCJ2R2BYd4RAWMVfWGnYYxe",
  "key11": "3mkuwh4MZeQYdm7tRCmG6XnaA5juycq91iLHiaA4YYAxsaKxWmhwpumcHdA9SPYFT1fD95zaYouZNCQiX9BWS5bk",
  "key12": "QeUjfCqTqveMsKLWLEGSwDGUf3BiNdNoytzsHycGtruNLzBVedp1qNMyzNoa7myjCN9zJgC5kB8rjS5qNsjxQbv",
  "key13": "4uhMn27asRnQBJJ5DtdryAThZeLiYR7BwQgKvYZTay19Y5Yxp2vj1N4Vdk8ejhfafwUHYux1sFURUMgny1f61qVr",
  "key14": "5N2Ve6KDQgAEvLaRaPCYZxbqcJuTzuKDh5cAWxGmTXVaD9qrGMacJVk43DYEJTYiPr4zaEaMzwyT1LALjmkoxP6n",
  "key15": "znk3A5oQs751rgYr6AwRCDuD9Xw2EdMB7LDwhuqJNZ8uwB6BxFab26nQw61U2ETuep1oV6DDxFjf8rG8ShMvJQP",
  "key16": "3yW6sVgvWCvpAHbrTUoB8beKDRMADSRneyNJBJe4fb6NNRRak75dsp9iBbiAwKJsaA4dwFWi5YqzNuoKT47STHjM",
  "key17": "cFwxUqDXzXD4HYAgZnkKtheGTVRKZcFAUedkwFzjvwfKuhxkxyhCEH8HzuJ3ryzy6ssTR4HSwae9hzCzskbEb6P",
  "key18": "S4qQoEetMhK1yKpWXtroMKpXcXumziJjcvJYStKw47ND254cp7jUCFkEXQYDifhS8M946dx4pw9w1kk12v4wKXk",
  "key19": "4KiMMXJf9G5MKhgcfBXqx21yZmEb82BNtftAnGFWGS8jutwVe4cBmfwA68BeGzgXaPGzCDExqJ9gxgwh7KsQoc81",
  "key20": "4Q5c5xJYhg3e86eXaWmbW1RzrGi33utrm971VnuTR4tnidDBzPjfMSDrBNrtEkUHMteAZYZw9g1c1T8MTtkNF5oW",
  "key21": "58sZQLFojPABZ822jd5c4Ys96Q1WzXRJixXnEEFGxD8Vbdg9KPgfxZsP5w5ztAQFCrNEaCK62WnUMtrEHAS9XHEc",
  "key22": "31BrCyrsptgCYbQwBNf2PtGCBRP9ekDfeihTMPjBPbwf5iMzEsASPx5UPjLCWgkmvzfZk47MqMFvkeSHG2HpXGED",
  "key23": "3CFw5Kpa8MQv7TQryHE896a4yZmejNx3NyrGvteyEt7L832cT2yy1TwcTbRLioERB4sr8eGqZZri3EA75jr52sYi",
  "key24": "3uMpR9YHZSvuQvcHAMyf7Z12wA9paz45vWPfaeQqUd5TB1afVwDsUpL7maPTGtbx4W4z5C9YhNrt7ytEaELEnBW",
  "key25": "2eq9PnVs6ftzUadoZTsLbHQ2KSwnwHtroqQSqJ8LGTXRypbHD3chQpbBPxcJzF5hGJHcXpLVEhQY7Jt4aREN5pMa",
  "key26": "4rWivW5udjTSX7wEVm7DTgjoECnRSDH2nT1HkV1fFUdUFMo5JFx1jF3a5QZW151YeWz4onYjeDj7ETfnLAyi3kGU",
  "key27": "3FhibaRAFNZHLS1jHFkroGrcxJ1UexFNf1RvgRvvzettmPr1jFtf7MEL5qbGxXG3cxu34wLiSku6GvQn8MbtnJ6y",
  "key28": "4eV3BoSSJ9raFuTjcVHpdmQjGh2bLUoUmfM2LgJ6a74J65BZgqDwz827LZn8oZdWHLRptyGUadAsP9iFCwk3LVti",
  "key29": "67fYEWECwgVtTdSguZX2C5hdSn4sExq4TFHLpK64tJabmsZ93AcsvFznDufyPCoiAirDex1VVoAzKJnXLVmYj3ky",
  "key30": "5hAtPFh2R5e75REftTikHLRYAPF9Reux8e8AztpFFcnJ77AGwWA1T69VufmZwZKD8aWkoELWMie7Qz455UjoHJas",
  "key31": "2BSarKRe2yZJwouFpCUzrUUadV671PxFtdH2diEAoB9pi5i7hNZq9FDJ6Sa3skHW9aoGVSfkKsfFGfCw3qyTPgKQ",
  "key32": "2CCJzyxx7WyxgoNZraUYLW8pzRefwSuPRiztW1dPzKHFqzxqejyE5H2GqQQp3mpv4xhyTGwiZwgAhdQ4jtLWUffQ",
  "key33": "5GLbqnRLkZHghQXTWUT82NM5sygxfc5iaevjQXPhCyuB6kEEY6DkG1GLcfL8MzbDKeCJ51xijjkMAMK8EQQtREkK",
  "key34": "2Yq74giUG42eC9bERKNVYSZhjCT5mPtWgXdzRw2AjraLPtCbX83izCKwZ8zKk8EiAD1h43JSZMZ6wG4ioMdEvrdR",
  "key35": "5PXLBaFih3zFLUfCNXremUmvtCjSTNMVwoGFLhjRKW9cYDAsg5wtvgxBqRdeQfNzQUxYhxJzATe6pzEMBdVUR7Dp"
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
