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
    "3i2bZ1tdoB3NBNddxpjswmdcgX6jh2oYMcyyWzXhhGdFsbCyJCadfMrTPnQuuak6MiQiPpPrf27XVWidLZmVKmEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKZYhsxPM4JkGQbfiYxWwXhjmcNbfifw3impbEW4xZr9pmbXRTRBbNdaqDSSbTm6Ngdy7ieyH8tXPEKCUJSsBnu",
  "key1": "4Na5JHxWTmTKfpYBRYob88ZLh3ahtwrmVpsdhR531ngJ8mteDdQRVq771GMPmb6F7XArVsYJcxwKpjMsnbZkaxtV",
  "key2": "3XH1Yxq1gRTiMHfed3pm7gTEnr1gsaza7e5sj6EKRMpxWBkzM2hAei7yBSRetdypa5EFG7S7V59Eigvz9Z65NTtM",
  "key3": "26vaqpgAs815uYXJgcHjQ7aQ1WwH8eGXdGN5fb3wF1rLUoTP95CcH4PRMnUvkK9qzFFkuikV2RNJ8JfbeiBVM1XY",
  "key4": "2BFnUfTb1cYzp7sLaY2QWxNPH9nE454hzoSpzaoQtyYvYcg5KuN9rZzESWrVLcGjQp3xPH3Ainpm696S7yV9oubt",
  "key5": "5sio5KM5Znc8WKDdYYrLXuuMCJAKNiQZvd8oAWtfviGstHRDmwVWRSNAyKHmfwxJQ1BaATfpxsgLf4eDYac68yLB",
  "key6": "5EQSFr6eyx2YYc1uWUy9M2VSDP6Kqh3HLrVtproQKFMScqE2dXeXJhkvisUj64UAY9Tcuwxnz1r3Vxvvt4pvzPbM",
  "key7": "RUrjtAcyvSDsvHGL5LqFNyxvwZrczGwaZ1grACDPaLP11FpB2AQ82mgf1weRp23xhcgrs9eYBzspxVDydeANmDs",
  "key8": "4xRHp9w1Kwty7Eh9zskQu2w4Bh7kxQvzV5veXNH316mMvKrkV9okNELepxbVJtoCBxFVSTEWp9ZFbcq7kaMsY61R",
  "key9": "4r4CBTDjDrfMcX4EgTVXThWy3JQtXQxVTwpacaX4QcoTEVS3oEpuFeJLgaHvUyXHagYUho28Kik6jGbRecQ5kVYB",
  "key10": "4qZz5CBiGHMEo14sUF6bDZbqWxGm77eHDqPG81VHBE6beLUPwzqW9DJHECTXLbfeuxtqzBXVYKLQHgGFAWhvKhH4",
  "key11": "4jVYnciw7B8ayceMTHwhLEhg8G5nqH11K9Ayeb4W2rm4EtUQxnVe9jh6bJm3QEHoHvGRKiRrJa54rCKyPAZ4zmxN",
  "key12": "2zLVeUcqa5xW9qtpYAami3koeHDDDTUvZLTtYaSUMxsz9271ijcEGxEqDdLd2uF2nm5MLnjTTHRTBRKQuvTbW7f6",
  "key13": "33G5TX9TfrsxPP8p4vgSaXZ5VhsBxhpTaCBn8VtCJeVEevX447rbmzbwsqbS6zjte1tBuqLwXAfJSUxioL6wEhzb",
  "key14": "3R5Q4QmWuWec8h8QqhtWQ2BUvsr7zLrwLuYVwgqb4Nco7wkbSZhFR3DpLZckSZxCipTTKysrChJASE1tkbnkzuW6",
  "key15": "31CbUrfC1ytc4ReJhT3fVZwRK2Uck9GGC63k86jPKfaJzbb1gFnQ53sL3TALjLiyGyH56PBEqV1364B4qG6bN1zH",
  "key16": "4TpebdEvo7V1khQMTBcJppmxEYdccrnSVFLCa9N7LtSgHRfxEbnrTUnyYpirnWByEGpyFWTL2HpsJCnuw86VK7xt",
  "key17": "3oKVjVMWfLapc6mBbrdn48SGa2guHXaMbYX5V76EFyvspUQvnNKhxFcy3BZuuSgS1CmfQe5Nk7t1iSiJ5Fvt7gvt",
  "key18": "3V5kqwsFYiUevgDwX9d5jL7JH5pwxDRottCCW7QTPmEyMCue4uiMxbzheJetrBsSBEYJdg1ckCTr4H3gqzf2qfjG",
  "key19": "559NbMPGvDB26odK8ixbBb2CtSsuAx6Q8MNytzbppnsf45Zg4JwRA5jBirTKLAJFKNTYbJza41BBGu8pq6YWzsmd",
  "key20": "47KZ9Wutbx6pn7aoWxLXfX4DvpxneGu6tuM8DVf2SbCwsQhiUa7YfwRhFGGKvwdVcC6684fxCbwnuBZE5aA59b1u",
  "key21": "2phjWUekurXDsy59tAAcBDwSGuCGPWFD8keguv4aneLZMTtM2BM19f3QVGLcgNPYrRQAh9RVkohV6wu3w2m7es3w",
  "key22": "2HkNLmrK5wszgW1iQormX8Svj6qNf5hqWgDnKSsrDvRxxsaZbQKKoKu1LEfPWju4ZCJkUhJcC7ZRC13SnEPMcSLU",
  "key23": "4LVF1KBNJQQfiqC987hTL7VYbCCkiJ43CgfE3ZfqetnhqoxG7Jejw2PAS9ReuCCoJWMedrkpvRjwFG9TsVMCJdHX",
  "key24": "4EDHE1V3aieXsjuKgu6xQRwWS9cZak1ijX5n747JZGAoxhiWgLxycFkQBMzv9Lz82ihZpWFggCTyxMwUho5ruXr3",
  "key25": "4RpTjUYRbUjWVYxzxYz9RTfZgER7g4xio4Kzj77u1cNUfCnv5Qm3wAZKzMUnYFw7BBCmf9W5C56AzBSwxKWnzbjC",
  "key26": "2LWRMXrXdo7TKnC8AcjArD6jWMX94P4n2MAtyjnbL7JiDAeLs9eTAZpxSfTmtBsNpA8JJL8X2atRgEzhgy8kxZ7U",
  "key27": "4tT3bsPBUvV6Dvz9iFfpHaP7Lf5aTySLPWcbnyaBeuVBseDaqmpexmstprREQup2XwWeiLgbzXe8cS957HGvyBbN",
  "key28": "6KRSk8ooqdKkUuuGPeDcftfmmf7NEumFtxQ146Ft6kNqcrBGnDhnYSRdpwKCG8T6kKey5SD9Uc4MmJz6YrDGyGx",
  "key29": "29bDkh9kYfnny74Scgy7gNDKpEAhVTMdpHwaGGqwEsEsfbtTrJ6SC1K8FdtTF2k8bn2sp9Adb76wfEdWSEocZmWM",
  "key30": "5dQojS6qeQ6ZxtKe6MnzcL65mMsPKiNcXrr7k648hL1LC2eBcYHWXztzybsTGRsKQiwgA7Uuy2kNPuJd6wBKr5pa",
  "key31": "5pvpGwx9cNBQBfAxBhUognohNGn6iPDpmUw9ZjdtaNBFeagjXido7Ej36MqxuyFeSNBGSRwHiwJk58qaDEYuuEKi",
  "key32": "2TvKbfG2scf1QnmtvhFcQGYYLE3aGby1XGkWHSLqpCV4M7m68u4jTjkqALwZjMnm37Dtp42gNyqEaZgfVaUmPxsP",
  "key33": "2vr1p36DG2yZvwUreWG5F1PN5mCpp9zdec4BZDkND6s9mbDdSHa5LMkNbuK3UySp4PsL16dbroHjUYNBNm5JvmW6",
  "key34": "4djuE92jBbmwscSh38drCh2pE4ybiLE7AVB9XAH4ZwYtwRfJisMdFZMNYoiGS3aTNaNSamTcSshegjZf2Z7ASvo7",
  "key35": "2nHgT9m5tSRhbBGVBTa9NK2amxS9NX7fFUxcEVQuAnGB3pGRA8YCAHhV3FoxUHKBy2eb6xRHrevEx1whcca5sC5A",
  "key36": "p2PrZXmmakmTHWPbYrhNPsHW6pP3yQJEyzMx8cABZRDEsPc2zLGaBKg43XQKqP49sm2zu5HJ2a49Mxr2kjX44BL",
  "key37": "4WjxtRLSQjpfUek7ZDvFAjoFv4UAFxx8UGVZcMKTFdjtmxttHPS7PXf1VM6XmaAFWvT1ZruLM8LH3Ec8RFT1h5wT",
  "key38": "kmxAyob3ZL7KhEh2gHLJA4wny9RjSLYtAcXbrusd7zPwGZ29c9PWqiPKVhSt9GsXX42u7fYA8m5sMWHDj6G5YFK",
  "key39": "45rn44QMEBsukeZE8AetzqZNBuAHVheVGWHRc5Y5Lm7k1efYsNyKB6ZUogyV8KAuLwFqNEWbbXUxwQA2TpNoBQHL",
  "key40": "4EcN55CgywS1m4BYuJnm24VoSk4418z5Hke7z3UN3UVY2pLSuH7Bir6DGwsEKVxz6tJaHmaYMdQw1hjYmJH9Pwqb",
  "key41": "JqSevvctPSVbG67Zxg6ViUtFkkZkMQJVpWiPZXM72WfGFD9W7V5EJT28Zo3WL3CmtYjc5Si1wLXZLYfJF56xBkB"
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
