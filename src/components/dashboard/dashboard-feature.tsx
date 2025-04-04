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
    "5Xbapwss6SNuyx9yWxNsrCtVKZVGiY7UmxiQbnh8fb7emZwrjMyJpgzSSA4ZLMVrfbFWsNUCqtgMX1g7SHJf1J6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y78bHkQDn2P2WLyNvZS1EinSf3wAwjG9aDvEX94tPWLwbBf45wDeZNmPxTNXummygbXweajiMqYTGA6FuXrTd5z",
  "key1": "3G8HwCRPSnXWDMaHgMuNPdCCcexnhBcbJJvbZ8gAhaAzcQoEGsxerM9ZDFS665rHTjhoQZHVvJs4o93Uq5qm4pB9",
  "key2": "5ZNzCy8wi3cXtkU3Fa62SHTF2rJnqci1Ff7C2pPRb65becokAdhmUsJ8vgakFs1ecXB37k3iLHk2mfMsqoLd9Zqv",
  "key3": "4vDq2dotTWZQ9CgM2fTEsKWuaY3fbQT8MzXhdCCdmguMYjGpwESNvyP6Z3o1su8bkYrFmsA4AwmQxHSVu42LfdoH",
  "key4": "3suxWGdG1PbcBmyRrB1fevH2LAYyEXsVj6hdPDQwr1uX9qVvevRabnKpECAwvWspMkaHkDt1tqB2j9c97DgPyrKX",
  "key5": "45CdP5uUcAoe9FJvfZcx3Tu2XbuDV3pnKbuH6yuKdECKLnk87FCkf9b2whm4H4YW4Fmdxz5osLz4k7uS7Wx7E87R",
  "key6": "5GKeuyicKzWyRexPXbfYmGH9rUuetB3e1rJpn2LWdit8VCCBe9JHY5Gyf1583je6hfoQ1ziHQEK1ZmMyAeHzDtiF",
  "key7": "ByyoSp8rKwY5xM7c2yxJSjkC5XKmPgBkEVE8fcbsn3Dfrt8sUF8YBM3BvoXbsAkyEbhYAtRcv98qmSjoyiLHYmH",
  "key8": "PX42979N1mrefJ1M7rr5WYo6VoXdkMiYDdXfhQsNVPioL8MjKLinDStrYbCEtK5dkudt49BZJ4a55Tqvctn9JsB",
  "key9": "5pPEVJmzpD55cE6mPrnVeJtoTUcqFJAwz1G6X4WLSTyKcXRqQ86X67zE7XFRTTG7scD3MHxWVeiaWkhTeKMwpUqd",
  "key10": "3UTn2bLPG7MFgCPvZ2BMb9EyEv7agf2uPsBFsw4vik19HgX5oy91fjzPzNstgXdcUBBbopVUQCTnC989YE1DQ4fj",
  "key11": "QGmQrbCAGc83msTK2znVCZtJU1UY8rF5fWAc9yMh5wLyraV7N3KeiW2KteuXCyzTTXdCkNvpDAq4TAaNZZb1zX4",
  "key12": "5W83HZLrnzds7JVWPdRMweWSaehpmXsndDn2V5jzmaVnRy2bavVRXyc8Nqfe3A3cDvxQCCkVzszyyjksSZmhDHfo",
  "key13": "4oArHNCq7L1gyqsAMG5Eo3nGwqiTuepRuRR5UUo2H6TqADqKQjK52HjoG2gcyYyoVNmiiekit9YWLK41wSMTBpuf",
  "key14": "5KWwjfabs4fU4ybodoRfzJKQo8XnJVeb39rESVVaqStQLDVDsLciT4RJKfzBKbgf2m32orq5c31A2mL1Kp6u3aM7",
  "key15": "So1xEjsdB6cGuVSmvvW3Hy1v15FtKUDKJWbNfjq9jL4SPsgacZWEmpY7RfWfQBB9qSGG5s8D39Bxy9keuqUDmPw",
  "key16": "2YUuJiTh1csYPD6C6XnEPcQUYYPdV7WVYy9AfX6gX1nuiVzpxa61LXQyuKPw3bfD8s81Ab56Aqbv1AMx23yL66cA",
  "key17": "5ivmjSdPRbUqfvcJ4sEUq6aiv7DPp89FChnNm8jEZ51EyN2DNfmpM3eTcnnPGgnNF9A4jF3YWHqtQHU2mAe8CZNw",
  "key18": "63yGnZX5FPPT5owPRcwnEEDf3M6EFSfuQ685hhGJSB9WniasQcH8V9SyQy152Rjfh3MrigXfpbS6vBvbmf9kC8xw",
  "key19": "dJEJbA8MpUEESvLc1ZKw2DbirjbT4vkucdwQwjuwhi9UmtALPEsRjkV8QzZ6zoLaN8NbgeWuNNYYPwAZhPsBVxW",
  "key20": "5Efm3oDw87ufsLoR6ona5j8BC1y68oE3za8BZ3HD4W6SjNsAp2wY6VGKbQ9XUaBziJcpzRnmAw3bCMNkV6gNVCUq",
  "key21": "4cH6sy2BrxJTKdWgKokWf3FsF4XyKX1VQCWRUjKDeNwUSE8vK6qHEf2VzduoSFNjB21bxi5z7qNPpK59jnvrLWgn",
  "key22": "5NjwdKXqjjokTatGmwkh3Pj6gohdpA1KPpqDBLBGpqUnf2KcKdjunNQ7bo1hRxbx8HjhNo7Hn5m7AMvRXW6tES5N",
  "key23": "4DibMuTAKLaQMLzyc7RoGkpnjmrxgYyDe4RZdymJkVWyd1ysjuP4uerg14EXxfDbBAa1fQ1YMaxSJzDwpi4VpXtm",
  "key24": "4HL2rzbTXCjZppLnaUYaJBXeAWPGBDVqLEmiB8XRrmq4GXgcq5FsRpCnxYZmYm5veayvVLkLUSJSUnwG1kaG6N7k",
  "key25": "5xg6FCVmtbYAyfKVY5aMvavsQBtqKQrY5jbRhwuCs5A3P7xbeLfaU16uwd9hHZXRgowAv2dsupnnQrsihZGahAtc",
  "key26": "2WeK7QM1QFxJro8yr7W3YuHES1S1LuoMjLt3L2hNuNsmHgq3rpprUqPyTCu91DKJmToBzhGpLXEPM7CaGkFDsWcZ",
  "key27": "2tuDv7xhpJUqQcGhshag9d3R9cuWHVddWz4nEvaJig84KKYK5hCY2UeTdHmckR4ukRKdybG4NET52KEZsYHrpN4M",
  "key28": "3uqf6aG7jGz6aDyXftTYZPg1EdJWD7pCHTmrWWGzoSrLYxP2Vr97WaouRuqEjkKBTNz9d2R6mRkC6vb23cNyDTuc",
  "key29": "22SxW2s66Fte9wzg1DiMoH8iWSQaVQXukxhqUaWrDWALXmb8rH3HTvirVWn5wxaW1Mw8yFVG2jx3DVhpa6uiamkC",
  "key30": "2pBgaWJSUhqeGvzaTpntrKnKWRCCPik4wEfEcryp1kpsHSsKEkBCNshjWQJ2c8xpUgSo82cjQ1LkwXiQMdBzVC9z",
  "key31": "4G2esQccz5A1r3KRdPgYBcbjPeMt9huJBs2ZTgQerufgiWCbSjgLowexXsEs6KTjMmxPgHey83dc6H97kQX3PR2N",
  "key32": "UJf3R8J4jkA8vm68sWt5fMN9xqk6R2PcBAEgnKe95eiv1oe8yeqK3sfVcntRcSntBHSawEdLAZ4JWTXyXfUbZxQ",
  "key33": "5Ng1g1CCtQYwZb8NwgHJ14HFEgs6jmgxHs7ewxwpCT5PUKX3ogGaPCxfbDat1pBsSAwwLHT8xyeZcQknrGcjb7Vi",
  "key34": "55egQf8wvgQXmzhXEjtPE5hCZfftGRawpCz1bj96LHBknVxCVJ8VusF11V7xzbqHXxK5J56RCEUvEEsjdRiE2tdx",
  "key35": "3KXcySDW2hoYjizG7GZ4gCChUNAKYGNRKMK86YARizpRCcbN77FRd8Fjg5GrHtJbP5MtcDdwKkG18DKp8He1gh9x",
  "key36": "3s9xhMLBvEKXox7CVQUn41GcYkbaRs7Y573B3brAUP4x9u4861cWAjgec5ej9NEWJFwnhm7oc837ZcSGomtu34L",
  "key37": "5PyXnaG8wXKNxSMoyqamCQ79rCBnwUp3JeVbVeq56ZPMzbATXMM9MQLgBoovrXp9mNeMMtwyE8fYu3D8UNTNu9Ay",
  "key38": "63TPBKA8KZAxWv5d8sB9oS4DcX9ENhX7eiscT7tpdf4Ta7E2SJ9GaFFJMgqfu19d99oYeAkSjnhiZoRQuyg4NTmS",
  "key39": "5jt3h78CmSTokZ817a7oUXoXcU4dhxsTvg9btJnipfZnHTGrq7xKMSc3aeTFaqG9aL6bXWuC9sXKS9xyCipYt7Ft",
  "key40": "4JY8Va6axMR4ASKKbgUspz1ymJGCsmc5encYSmiHmoeW8514JE7QpGxAd29FBRn81o8QPCRtrXQGm6Hs73rvGrFi",
  "key41": "31SntsqLf9SEz4itf1Qp3PuA3kjFjLw5QHFZpW9rRJgDQiCruENDnX2HsBvwrmW2ygcwfV6cvPGesNvC9znG546k",
  "key42": "WHvyvckqhNWMVyvgatfADVgr6pzJkJiRCgHkEzYGrGzkYEu2XWRWypWvSWqWEaAs2pviVRfxGU8RqvCnKhS6oFL",
  "key43": "5bHMeFZpMPcnpwQnHm31F4QTDDboaGjmAH3sWkLN2oSCkVEv2EG2rnYnxfWxgQwkuz5JncN2umeBgBwrASd5RogM",
  "key44": "3BMJ7MyDQctMijF1wxvkdyWays2tW2XcNAihR7W2U21iPdAgHEUN8vn6Ac4P2Qr1z8yueAP36RDv66eAbAiDNxAB",
  "key45": "2NRUT1FNyzTtDmSk2EE9s3Lb16yMpM8WGZbJ4EsNiZNABVepd9Cu5o8CDedTbP7dAabxFRGJrVUvKJ8yEQP8zthV",
  "key46": "5Pu1ZivJuQ6iLWcTqdDCZqoaqbZkVRggRJpW8mS4LUP519fucia7o1mqjBMbcMWBaim2yQSCsMstyjNV84gAnqxz",
  "key47": "dEJN6UdziGzj3dYdCTKXNJVfr1jVuDPJESgTBPbxG2D7pjzerUC1kvz9oXnf3iLvJAqp9mwfBMvDhL7bCcHJSQ7"
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
