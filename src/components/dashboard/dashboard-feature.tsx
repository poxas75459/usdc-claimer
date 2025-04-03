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
    "3Vvgmgsukbvu553fqgon2BKjzYHRFisb4tLKDUwmBcuprC1d79mqwc6ap6YQ83ESXUm5DH2cNwYfFBkPxBVZEBXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kg5KdL1Q9aJMwvZHyb5REKpSfxz1nL8dfTxGArkpUqwjZKQGXYk8spKhYud6iSa1pfDajq21axXoW5odgZdxvw",
  "key1": "FF4xi8n6oLouyytvNHAU6G5gVcc3bK14iRhVhdnqu1zkRJF4YLauxWSsfGa8ZwqGERbcZRd55EkfgAQG3qRMi6M",
  "key2": "3rS8chPg7V2DQ2e6SZgKPFzgTYJE5qG9pSexidyDjfnWpqBTdboDCb931ARaRJ8pKEQjsHNN8vcWvsmphDCioipd",
  "key3": "3pmnJL74o7SZ4aCdmdt87k83UfnWu3ZTfpsfXAAVsMGRd4opzktRoXM2FQTGCcThpT3z2ZiEcEZ8ACinHnUHBJgv",
  "key4": "3vdPu9HTTr4q3ehtM2iXbKpaBK3vAH6Pj3DHmKLTRuB9nGCwyDYmMct2PpADczcnEVgv6XnbnLRK2yBuEFc159kz",
  "key5": "5m6oHZz4zEAmbbdFdnStHQ2ZyUynBBxmETMTMy4QnsxEM5zvNiD38fqtj1rpELm3wn9SSNrvWqU9VsKRQybDK3DN",
  "key6": "WtZGdKgrknbaPjeP2mypJHycTii8hw7bh7K5vrZWWMzdM8bxxFcKkbWoy9Yu8dCykrUUzFmccTH5EfSzBo9qCwo",
  "key7": "5ULLw5MSZCJkcRF8LKdHa3QjJPrFWnA9za5v3arcmYGNoPiJKBto9YsBBof4YQYzrNeKiq7qNqAV4zscstbRbEu4",
  "key8": "5EBFqq7DZVAb4NuE6VRr1sZQeQHvfwhjLPUEWTh78sxsca8daMYLrhzLixQHJSiow2nZy5DbH7tF64YD7PmREW8K",
  "key9": "424nY1qbYFBH1HGQX5EPsfpV5TBgNHktNtoNPrBnw6GuzXpDkNszDQ8Wxso6ofr5BNJLpPk2V1SfpXBH1A4b9fZS",
  "key10": "2DJXSCKzjXw2t57rNiJcQRx3tWVGVhBg5Tm7Cx9aDW7UGug24zDzSM3Ghen5WL5CN9oKHrN3ZpBwMcavTYsdGJE3",
  "key11": "2BVmBMjEB2azXiuxcDZpBfP1TcMqwmCJVpKfYp61HePJKTqrsbebDGH7u3XcFsimvs3zn6mBPmKWihmjZrTWWW7J",
  "key12": "5UrXZ4YbppG9BPmJQ7SgdCBxJ4de5suDvyFnBsmu4QnUKBHQQapEwuG7M3J9JkNu2eeFWdpiKdgE4rgRVBUH6W6k",
  "key13": "ovyBjGSrYwvW6cp98Xqi2j829HqUfyF9WcNR69qwDN8qWwzHwUC9kBTzm9vyWahFVtyJSFxwqFzMnaBhfVV5Y1w",
  "key14": "rvAy7n161xLBa8uNsmtxvHuEDSAJAkMgmaSEK5FZAPFbE5um6ZPynA2g7WWx6eEN6T2Vr61hGpaL7FBQjqzLTxY",
  "key15": "2u8VHjG3FVu75KrYjTNUFXmsXCme7Nbsr8XLMh6qNDQV4ReEgfkLh6o2HjpmDo8sxmTrtZXaer7GJeT4MZZnCL1m",
  "key16": "RD6n6GyjNmj3UFG6KJgyuhyj5VRz8JHQ7HAp91fiHunhvNgdSjNJuETNqK3xxbMc4vTekuE3NYieQjemVK3rDtv",
  "key17": "4sy2w4psVYz6f1t1uqhDXM9uY12y9hcXsApDjdAcNe3L6tzrUhE5tEWxxdFhDczGMaV9am18RxnTfDifqs9Pc5Nq",
  "key18": "yCodKmaNvo7y16LXvR9RA8P7mTQt3waDaaWYv3f77C1soz27di9Z961zEJHMsNEroeXgK1Fg7iAruYhqZz4Sk8V",
  "key19": "4qdcC6R5b1jjumHpTWcbEGvzqrArthMri1ukxpakSoDT1ZbjfApyAxs7zRongR97Ngy7p8DRpDyF6J239TYpjWCi",
  "key20": "iUGF8CEiorMLBMbZsMQ4v4iBDDZcLir9qMFMr6ayVDhe7wnd6eZbj6WGf5GVYej2sEaiwogJ1u1FvKAwcdedQEg",
  "key21": "3XpdVbP8NcKNcz5XnJgoTd9jBDUV54cTRkKMYPP9rpYa7bznUwJhvqAQrsEn7TN3LNw4xqwGEvcTM4whHxNJRsTa",
  "key22": "8cNdFwdB6SZXpm6M21vj9rPv63z4Kp1uuGFqGtEx7yeTM4ZcMiWQsp6smbfAgJVvvXGoAunoEVVECvsuoQtstmL",
  "key23": "2kzjeu6cyvbkZh5ongAVK1chVQhrM5vdboAjmXvFutRWv1fF2S91DuYgR2v8J1EL5qXjjhayiPegjaPhbRFtBjZW",
  "key24": "3uhL6EVsEV6FQ9PZupv1qnmsYKEjiZopUHPLp17eWUswzKk5AaLSgAetTVRszgAg8iR5zwaN3i6qMPSKgrAnbcim",
  "key25": "2PMMtUm5eNPLWbySxjoFKDpheW1rmLYvLMT9tmwMGfeJvhPAJsYZRf66Hq7AUDM3kdDBSt4D2YuKZRo5Ued7eQbn",
  "key26": "3TdKqYPS7y3DjeW7irvv2yEUACv4AHZw7xCY3Fuf7H7yc8SpbsJXCAp3JzwJX8UXFPHHGWfcDnFDfLvgdZSmyL1Y",
  "key27": "KQS78JsA2DgiNneft4BnPDn1LVjmiZb2pfB2k8gGCWhiT5znhQo92vRgjMU6B93rDTN1jkfpSPzqLequgVxpive",
  "key28": "52U35QgBxqNp7ZGh388uqrbSR5qCUZcrXJpiH21CNiVseF8sX66EoTszPz8vDwwfe7xdGCWXKXoBGErG6MQH6kBY",
  "key29": "2MnmYUBQUBHoQDTgAP3nXb5gEo8xJeRCn8PZMFnigWgN3nGdv95Tvy1xyARXxn4Fp1DJar1XX5mrVGd6rY43kHVv",
  "key30": "PanakPfvK4hMSpgBArDpW8jCRTsseZcQn2omimjap9StbcgReSF3vcqYgX2NW9iobLrLsSmtaZvzo2FfFRc6Kj8",
  "key31": "2S1C1SdTKuhJWnMnarPVkvavoMQABHi9EZ4moSqyV5RSR8wzXq16EgjfX62kjaDqumJqkwMPEUoQptrxGqqnMqzo",
  "key32": "5uwhs12N8pEjNt6LfhSFydmh9wuRUQTC2GAhptdiP21xXFP9hLazkYeY1QMcWqtmdH8mtxLeU9nQKhHs3Q6wp58z",
  "key33": "qvia8w39DK4LGzjfymmJ8hazLYRHHGiQZhognQH66a5v1K5tZEaMvME1B6bKLHgruW34YHiWfiayLpebyn8tmqd",
  "key34": "cg2o9ocdaTR1TTr7RxmTu6kEwM2fQr4QXbafWDBUXEBx7BSnGyivVUEda75d8VpxM4dhs8jXmqjh4LjZonofrBT",
  "key35": "4v7ESsNPHQfBT75JgvmmEPtufhejCvmx1WukmvTNpUqGDHgGstvxjWwevK2XqsYqwQExmXJevrFkgNh8n8VRH7yY",
  "key36": "5gmjbsY1D5BUpVgjium8Pg4RCijDTt3YpuFheNs7bzeChHyALn7nECXXmzDCUwNMvqTvn7dCa23zn7Y9Pq3QunWU",
  "key37": "qSGEM7gHS1a8qAozi2g4iFEZcaLqjmxB8FPwQ8MhdfXai21K59w14TbsbuNSRFufUe9QdF8jpGwQWnqjQfjkSur",
  "key38": "oAXnc2218eabUnravQzky5yVFrHWvy5R9JF2GRgkSMxhMgoAeWx8XPRjx4AK7XAJceWbUexbo1JY38gHoWmnR86",
  "key39": "24cGMRikpciSk6YLtUKfjjoFft74xypWeCfeYRe3tVdMtjtrStDjhHPMdzUAABR66PPmRArYAuUeKZnrbp229vGX",
  "key40": "3S15F3tr7rRDPSJs8A3NKraKJ7yTC8Sn6rvw6E9cvtyxtGfi3UEAnrwqLA7MknPwLhjZBtuHwBSND2vxjZ8qNr3K",
  "key41": "g9AHHLX7amqgtUCY2gPaAZSviGAFfsXwdNvhY4AHCPH38JTej3yoSkp36hdVqHeUtjcbSUVSCMM19mde6CKnfjp",
  "key42": "5fyRFHMbuiKyTAT9pG3cMyDPrH9kqEPiDB9ownUWusXyHBGSLjybK2vAbAVYtZco3NLqo9SvdaiV6CYzLtpxZ3Qj",
  "key43": "WCu992YPj7m2x1fDUZDr4Bs1ZCSyUMxXf9iMyounL8K2YvtwGQPSEqaM6rVXHahVn7F8jjwTpnWPKYu9cB8CiPF",
  "key44": "4wgt34Mvj5yRrL5fRbtkDpHymTGDmftqgq7xWjXBJc2KcTwuvBM1sLbT5JjiYbbMtBRDJBMcWVbUSiaycpMah2vM",
  "key45": "2jqNKcmTCEJ6JfSYu4DAJkjSnbdU5LWJFBcu96HX1zNV3zbz7yAEXu4eYj9QfvZZaagusZvJ7fegB45kUHv1dnyE"
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
