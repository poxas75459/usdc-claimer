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
    "2KtXgPrbFR3rDYMqDHX5k2eBsmhEQPEY5LaoSny1uEotjAzw3ZJZv7c52WiXYosrnhQK4aoTmKDkNxf5jHpNx3N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHsjitk7UNZjKv4b3MJU2UUz6zJwMD9W2WrroQGnGmoYN76xQCfTDfXwEdwHHST46WvQ5XSdwVHFiLLUrpj7app",
  "key1": "4b6U4zFnU9ePrNQmZMPu4zLY939Kr7MRxaAPwprsm44LpyVgQ244D7Ae5cmejFkokSbiEhnDmWuHo8jcFv5pYFn2",
  "key2": "3Nd6KPTp9pYk1qkBp37gfTcvP4DTgCqdVAjxKLDTUeoXfYMYfBSBGvGnV5LwMtGxucb4W73m2Eoo34wTS6WXJBi6",
  "key3": "3pu6z3Bqsv3Jbep2o31Dpiqhe2futeCH8xE1jRAzR9eDRFkcVWZFjY8hAthDHuPa8T5Q4c6LHUmspWmnSLbEhv1F",
  "key4": "4pFzoMYRzhpGgcUFMCjAkLjndDG5V4sccEXsdt34tXgBhgynca6xg7Vu3hcZuMvXWcVojL2b1FLi3Sve7k28VMwq",
  "key5": "5gVzknGHg5iHpw4CRRQHsbQfzGsSBaqZSkmVwdPuybNa4Tz2B6g3hY2ZdsNWoo6b1uPPwe2r7G1M7mkoL1hSQZPg",
  "key6": "3JrV7xPdqrjKRaWfg2XS2PhYhhe9XW9aWhUpqh5JJAzLVKFH1oA3wzK5a9qucAYcZH5uARZWkXTnS1G5MQCuZFqm",
  "key7": "63AwvNE1JPYwfRFknrPfcyuYgGuX5VB8m2MXg4o28vckuk33kCt7boebNZrjR2dQQA18kdyoYNr4rZR1aAzWeHba",
  "key8": "56AsghRa8udKriMZerZRCdYUgpZpjCJ3EHvVamhchRR7NNGYfGTtEjMmmMaAzfoAMCT8Sz2oxanJhqiESqrQT8zG",
  "key9": "2TqzGsyYqsjtopgpFVQRtRtSymM9NZ5bJ39yYbhW45JM8ndgsmDEdgQH5rdVo1BHiSHaDGGhUxbHajythuD7fn1e",
  "key10": "2m3cRmb2g2H5Z7n1N35WJGsaUEaeidED3Lf7m3wc4txutuafpmfGQ6HFD4zLeocP1jSBU8WAn5VAZURbQVdGR8Vz",
  "key11": "4XNGGmyThYAJ8dxez5Ldu2cM9KzfLEfLYqZTaUzGAAHRebup8vd6sMoLsRoN63jgyWkRiTthfUz9Qxss6EHcHBx",
  "key12": "4hrQQWyUNpLzZaZRG6H9LeYmFHwdcpFUk21fd6Siy311xLzdNqYsga4ddc39y7PEQx9UaoYDj8nxkRiXrQFMwtNq",
  "key13": "mhnZcdBgWv6ku1VELKnL3cBu7piXhGkME8aLo9urcVSrvhPMU6NBgS12RVw7pRhATyyq1bVK8jAz4bk4EdwTMsn",
  "key14": "4EfC9Yzi3GBjgP3PWB95kVe99WJ6XVEMgqypDoT7eAzwbc5DBK6rJGvqw1Yjeb3HmhJjWRScAG4YMTVHHmtvapXK",
  "key15": "2FeDzz582Aa16krbXRZvjZu4D1YNbPXiq7gCNnZGFCVjD2TYMw48sXaxLYDxjMEjmRPtuVBbaeHWK67g2X3qV2Gq",
  "key16": "M5u4REe8d1v8Zb3hWCnv86bgGaNQwZNTPuknRFWstRhb5W6WQDuH4YBMiXya2MW9XSoGVdHXTP8JpzsUiFcZM1d",
  "key17": "4QxuuUPZAg2i789bEZhEsCy3SZ9rSJpam8ubcr7gCESfP358Y5C6tc5JBrWyqobWDkswhbjoUgeRGPJN3Npov15f",
  "key18": "318Jxk37573yeyZuNnh8wwNjUU5ubrJdLFJM7f4Kj3GDmDXCKJPzgz3RHZRpN8KW86diQBc5wDX1stTFD4Tgwn3Y",
  "key19": "5tAjHHaeuGnA3rYZvW3wvZ9arn7A6eCWWRztstFL9ZnuDPTktM1Rwyz8Nvd8JDDomCBKMaFZhg3NtCx3yhmiZibb",
  "key20": "5GE6zoBdWZRL13msmHLg5xaYN4K72ih9wxYCfJyqabt9o9V3SWqg1ay9WrNLfvfeGrSHuL7L6KYabBr92mexhtbA",
  "key21": "21xmEzjAbNX5Fobj21apUEyAY4dirfBgQCmuiEVgJx5v32hDWZ5pgtfVRqm2tfycFd2RBMhYTsbeiNdshqo1hhEa",
  "key22": "5WXe2vt3Zf6FCdxSTUphMXgWHRUV7iaeTq3qwW2NGBMb97c2tHKGJFG5Kex4cS1ZURrCFHWyjb6xfbQWCGJAMNSx",
  "key23": "Dc8DhAwPJTUeB8isn6etFsj25KJspDcHu7GcgiT8AyYVg5jT4N8rPP414sA3BL9Yt4GWVFq1LajksKMbtLu5hC3",
  "key24": "xZUSaAAioYoNCeAqYjdWMoGNPGdWDC8c2dfUs5GddUBczxwcU7XLrK1PKCDHmDoghvA94dv4PcWqkWBKArsAQWx",
  "key25": "ppC9dB4vmraeiBTvfPLM2aykzuz6647c1HAYFkzjNLBr1FF82gWynQbVx7oziY1nyWMUWkLXSv4St5152XQrkCT",
  "key26": "2PapaKhFVJrCoVBMswuDpM6BY6JZ9ExLApsXmqdoCjZzZjM3fUjQWyJbXHmoMDT4i3KWf1nLzkfhsbQNXbBZN1zi",
  "key27": "udYteSRf3JRR8JwThZc7JPXvSuRgyCJhE4r9XMB3hJyrP872iKV7JEMw9azdttZXq78pAymmSZeQFxw1ZyFmNMg",
  "key28": "5jptKvmJ5LNEEZKAsq6RgrNjmyoNQPBSXp46im9BAawwX19eyWuurFNMxkty4GGBrXLyQzQE5LvCEJ5yK5zkuUac",
  "key29": "5LE17fsRpaYnYxTTYahCUGSYQSGTfFdk7PERRsmfJXcsTA9cg7p6dZhKcrbghREPM6wT7iYNh5QXzWw3LWtgPbmy",
  "key30": "4rviawmLJf8JMfgBCE7iy6RXNiLgo5XtDyTCpYv8S7nH4smehyq8E5b2qZFv41DxioVEKfJNCSRnq78QmKWBvsxs",
  "key31": "47fPaRMoDjCEe2KmJNHZbxseQLksz1Gjd19WKE2xSaM67FS9xQqKukS6LvMM29at5YBEjCxUSZe7FVCFEKkwRy1L",
  "key32": "3hhnq5BwMPedTFXLaAVUmwA1WYN8wkwzRwkK2aRNhEim3TKv855KEfJ7e67vMMvccSJzCutGX1LMSWYSzKd4ZjaK",
  "key33": "QfFWL9rtqufBcb9AXzXvvn3DWVxHtUg1i8xwLSbwq79NP7iVMwmgRznq2cn7frgbmpnDZNHgBh1HteJ6ThNvq65",
  "key34": "66ZhK2rkurzRcffUsNf9XyCWWaF1cTkkjci4cX46J1A24FDtwcpKku9AeVYnSyu6emQNEkC7vopM9ibMC9PcqSej",
  "key35": "CfM3qabAkuYkuKALyM6q8aBdHcqrreuc2M9w4wbovn8hzbG7ZUchcArZDmSCiwWNK1N7yhRe3t1xFnBW35nZfZS",
  "key36": "4DKVWuQnP6Daxme8XitYW7M2mPdkaxruux7NDwWf88UCwgG2HcPD3eQr1jj2nh3nivZu8tDiT2RvhGjznHVJjGN5",
  "key37": "45sedvZJfo7gS1pmeGPjnMf5eWtpDyzCfEb5yVAcN9jUX2dQiSbqWVrvYcYf1fgT9UkoPinSzxFtLDj1RY71g6Ue",
  "key38": "D27iNqLKM92DeU9r49HRQKdo2TY4AKBbLhaXN3JFLXVmmuYqJ9VALxyGpTiynYESPaqkUS4GL7TPoF2TeEqzmeR",
  "key39": "4Yeme5tFcJgjPCFv1C3FcAk2w2uNitmN32cqYiqVPgfeHJuU6ikDQ5AdjCJXRMShtrLTv6NLZrpv6PYN65sN8Jj7",
  "key40": "3fLyH29G8KWqmgAxKcckX3uoT3wzjDbj8ifNJkSfyJN7kAMCeLxe6N9Vvy3Yk1q2oc2rBEciLidvLV3RmAtVPjx8",
  "key41": "38dADhcmZCWQPesmSsahfYZy2uCggPMCEPr2FksPfSjZNzdvVY4QbQK77tbdMhgfCiH2vvqH7pNDyRDNtJECkhpN",
  "key42": "56jmKivFuQUiMGE978Bvi6kc2m8cWn3fCoM2f7EHrGMzganqb4hQQHn3f1D3BvVVrF1NaPzHzMkJENvRJHyrArkU",
  "key43": "43r2SFDinR9qyVqMvp6Q4SrM19C2bkvFz6rBctXSsJZsb18soC2jiWJjM7t6x35ieBGf2XsXxoiASq52WA3M5q7U",
  "key44": "859fHhF83f8ULhK4SaR5FDGpZhBKvgpeb8H1ASqavaiK4qfA32d9G6RAokbCTVTa96ibVULs8ZmFVP9TxSJqznD",
  "key45": "4bjehDsefqQUicEpZQFx7KT8g7bupLU87haDhua9B4MVmCE9oEzvd1FppfC7p6e4CnE8Jx4eJrGABCxmqz4uQRXp",
  "key46": "5F1UcLuFDywxowAGBNQsUKY2bv6gvS5TLf672zQxDNU5SD5Jw7ez9sVZFgatW5oys19JevUrgG2CejdVx9VZXGqF",
  "key47": "5nkHwJ1q1SjS8XmT4bAb8kAxaXuEJ6miFiYfJRU2YTpNejX61rJCE6SuHwpTER1cgM8CKwvjSU2LShexUZXvoi7Q"
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
