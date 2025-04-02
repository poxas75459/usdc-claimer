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
    "3tJEDeoJuVEPpThVdTKWAvFZLQ72YXpK7XT7nidCwpw9XZeTS1uMHSnKHDzmpBdRk6keYcUMQDQm8d1RLixF4aC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiMwfap8nTa4WHSyrygivsp4a1ZpMHbsXSui5BvUP2XANUHzF5UVBEB3TT5b9CG7cvY81tycPdSWxfRRhHfhdtt",
  "key1": "5EjKLp998cZnAFc9C4Y4EGyfiQe7cA4ZmpcREZYgnMnEXFek6TAwQUx8isy2Aur4n8tAkAu41KxigZe5HgAwDkMY",
  "key2": "53KpbFNMZxEHTKwLToJaNjS3H1Mz7JioZ7qFqY8jogA4hQK1B7oRXuyYWRyeXgANXFaPiqc2Dj4zVCGVkvuJXZNL",
  "key3": "5vuMM2E1c7yhBccdujU71ntoQkHsbsQpvJBmZyceLRoCh93X3yGQkLbRk2wo42FNcvyAd7DSNgUzpFFDZaAyxzrg",
  "key4": "zmFVoDbULZFDmKkXbEEpBBGCdPGpSUgM5cGufx6X2ra4dVW2owW2d3co3ErdkxPQrL9NCtjUzvLCJqEqrELT1dm",
  "key5": "4gkAq2EdQNWSWGSe99yCX13qCMhaGcHjvk3fhwkZze7ZFsMSiMGYDUPupG9mPaNbDyHDuT4VbXYZErSC1Vd3kGWw",
  "key6": "5oMf824hqiCnvZDBJbwhjMtRpqc5ywAJded9QruaRc62LY62hmqYqSD8H4yv6SNRciQBGKtyNBdb4UxkWpaqz1aB",
  "key7": "4ttU7hfhjo9EcypLnAK5VtPrJrmc99yKsWsCvnVX6pvah7ZVAfJL86gmkK8iRNLHJX1Dh4pBWEo8SwMXx1rR7yaU",
  "key8": "64YGSou6yvgTekbcRsULdSsUEtRG6sYyxk5fMyWWVNZuEpWvArR1wmyhEzeoys9v4CUXcaajU48ZdTKbxmMnaf7g",
  "key9": "59HfZ7GkNybj3Gpd3w6pCxAVdWXYBB3JyQvM8N1mHKjRkpSgVNHFWBTg8YXed4Zxf1mUnZfqn8X8tgi13ZPsebEA",
  "key10": "hnjMhHWvPmfaKak5xyrhdDnxXJeGuPrxre7oswH4AWHqjgXE9VqCwXRc9akvtycpQr1M1GgbQka5SFwSUxr1nPg",
  "key11": "6WS73vNTGMg4og7urit4Ka3nNuDTcnnC3JoXUXKLr4zPobuaRQ21Lydwey7AmSPuuTpXeL1ELuCzYLXAbwKxkfP",
  "key12": "27RPEmRuYcCKLKDDxJnUK8uf1mHrZxBod276iwKfeRyNh4CDCBwx6txKqBDcTq2UWvH6yynkXJ2qKqodSRHBq4Bj",
  "key13": "42oHxFGHbGTHjHbUecVLw5cPgzYk6YYr7Phd1HnGsPEQwmFfzUF2ppYnBCq3CBhho3xphecy7DitjMj5dhwzGsUC",
  "key14": "2PmiNdQ9Hn26sih7fE6fG8r94XtMx2LJmc1RBvPxJHcWYZf7eMrnHJXqUvY9RRNP9TMSJ4VUPA6BQGL3gmUiTU6Y",
  "key15": "3sz6eLsRpFqP6Vm9TjxZv9xBuAkEpuZ7QYQBey5LhztzR7n35H7ME6AAFxCfE9qKFWcgJia2Wx3ieXTxtxtUixcL",
  "key16": "BvD6q8VuditexP3o3eNtnxe1PoeSnkNbJ9niTzJX5b6kkeGuTUrMwrCgV23gLnob1seMzxDNsHKrcw5szus7tTC",
  "key17": "2VJ39iH8pqE55ZTupsV2HD5rgphHgjUeo1Tw3zKaqVuDB6arvgJno7VoJk88EkZLMTGQhim7hE3mUXZ9Sjr5LsHt",
  "key18": "4MtwCAWjSs1kmx2Jm1QpqLPwzfWMWLpvYeYc25hndDN1qx7BCfgScFPPVXiyunT8WnFqS7jYYyiLzaBTsvPVaN9J",
  "key19": "5zGeWHdYX4XotX2GSgA7sZLgWTBo7SY5N1ve4vB7AZ2pwWLpAmCRuCypjXdNfLzi1MDhEXLLbnJKJfnftmjckbGX",
  "key20": "zpccntuK9zMfKnc62gaudYbyYjNsa16D3xDubNxXUPAVufVKEKChDETki7MSLuhHtjK6Xs5Wya14zYYpeVisU7j",
  "key21": "4FZEqfwzvVMdicNtGCSHd6Z4CE2RpVdQqRuj3dqJ6EC7VyFm236UPErMPDX9FEWrRTwxuN1DbMRp7FJKW9u7hWAS",
  "key22": "4qcq1NGoBrFWLg1yFQkTDiryX46u9eRbEKrnwygQjbhveLDExJa1jRUs2BmAt3LDNdmQpyx9AqaPc6rvNaQt4UL4",
  "key23": "4DfREc7eHG4LsMwC9ZkDZoAJoFssxKCqXR6i5bp31whhi5pMmCg4xzeP3YaRUJqqroLyhYGQYz9TgHpucmCxEvwx",
  "key24": "2H3WYaRUGGENZdvCfCTShL9z7pXv6w9jjfGpjJQyaa2fK5UNFEMVceqhtRKNmFzZVirtLuRz52cZgH8pPsFefUrD",
  "key25": "64uGeHTMQ4QTcGrcFMfTdXv1R98EsgDAjUUwLLAjKPyV9Rsc85drsXdX9yahDz7jUxGSvQZpP92YPhuwFn4vGcyr",
  "key26": "2XHYw3yyqZSr8jEUPHiDpBJXCfk9aVusHpG7328jwHvUWLBaLRqa96nsBhaqRNd19s5LiD8EwHBA2N9Y7CyqV4kN",
  "key27": "21Q6SGTdJMXUeTVh8i1c2RadKMhj79xT1HTrqKuNi7AMpTXBEGPCzKym9ndwnJb6SC1wbbU8t8i6xJ6Y3EYcoyf8",
  "key28": "5EMV6ZftxiK7hd9yPbffttCNjStsiSkUhRPNxop4xZA14JX78Ru1ubDn5XbU2iPpNJ9i3Tv7eKVunxRzNMXKvHwM",
  "key29": "3cYT4iv1VroW33BLRtiMR2P82frw1VrfX22e3mwak1aa57xWBUUakHNxjmLZncBJJaxPmu5PoGqxqRg5ANnzyVDT",
  "key30": "3SdHro14MForp1Xi5rPaRd6Hxoz5TvAaXcmqzAha6o1zsbQeGqmWLEKP7MW2BoEmsiURmoReRae5R3ZyADWDEV7V",
  "key31": "SUeaUdvn2pjysMKdXohQpExAEbbvm1Tp12ypCfUvn5M5gJPjRc7N7nWc7GDBxJi72rnGZgj62ysWGiB5yK4Y3Rm",
  "key32": "65fqNeSHWyKSxjTeJAinxU8nZDhvoxo4NPpXMd3Y1BovywT5QunSxMjmSQqJGVUqXYYFEzJHVYJg52ebAtqTDAPP",
  "key33": "4GwedFumChAc1B5UB6SgEBQpqWXtrs8q8WxrokS5fG1BnRLrSBGojm1bZHahWDF6NmWrjm7aeUmM3mABjUMHSWi8",
  "key34": "456gFq6X2483bkiZoBAJ9No4bYXK87TjiwtoVWfvR4h1Foxy19npekenQBnS4YutdWPzMkHuyBuwnUiuNWdpfZBx",
  "key35": "4UaWU4nJrq4hpGCMSYthsPeJ1oSyHuGGj31Jmj67hKA3x5yj3PyjdK8knCXocf34evJ5YED59VGueL5JjBF5wWQh",
  "key36": "587yJXnzQgdqp4mzMyo1p2SRZ6SUC8ARKQp4bW1o4CpaTTsaCr7Z9FmBneegdqysUmNNxHQrMyi7zbBRCnH7fJH1",
  "key37": "T9gnsHMrp4Hkuz8jPso4LjdxAoFyxXQNcGqFuhEMoatRwMcaVP631juyRYeb9t33Faw8sK1pfT3cMamHGvZypKw",
  "key38": "4tYebYGiD2qdbDuByh5XQHAYpqJWeCiuZpScnmgPkXyFraa7KfLkbA3w1UtF8dTjzejdCxJSz8ipoUiXMosJx83E",
  "key39": "5cqMyq8WyUCUXGUon3tRsxM8j22TT3GMxZ9ybsmYMRAyr5L5ZQBUNYm5NhvwcfW8ZHcfpJ5YnaAeqmXT2TXnpR7H",
  "key40": "3GMjTL3pDxStbTEz4BRNuiMoLVyYfCG1wgLWkE6it7VnQYNmM2UvoSsJjcpCvzaHyb3LMnKu9N7LzxpvPDdyhuYn",
  "key41": "353Jw3wmH1DCbn16btvP4FZD97e6Ah9zMBNwdD2hcDtkmLy4wk3Xq9qBRyKpCpXGHXYMVCE5t1ZFeWGD1KHfjtV6",
  "key42": "cM5zqXXWWh21KrLZY5sY7KzWoyV7Ct84e8YmBZoYMW8NvSShANC7NwyvQpidNgQ6byTar3VXkFPr77VQjPBe7VV"
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
