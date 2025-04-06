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
    "4FfZUHZS3iWTndkZiccmswbKzZbhjUMrs2heNJ7HnKzte6cAovo1oMNmnHjqCMh7KRzEimEJCdc9Ce9VbCVA7r1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2GtkMrBFbi32N6eBxsnwqvgHefV5NFupQbq91JkQZMgMxzjoWBr6tRKFnnyptsKEWN8pkeg98p5kJGyjcX7Tk2",
  "key1": "2ouiiHtxg5QXgSvCMyEk2DAJMHeN6FbkGSVeDabB1SH3xv5xgJiwzS7GUnQoewYC5cDyoEvvSVaoHq5xjXtdL8Li",
  "key2": "5bbR4ec6CLtjVza1JxUU7WDeSF8YFTjZsKdSLdZrqpZVtL69ZEikqjUK5tQ4MvJ8Pxqdgc5rMm8cBBFoDhxrFtSB",
  "key3": "2zej3xcKMAuXCvn4LSmCysRScGu7F69ZdjF9xk574rPH94eZwFEXWmbV6dUXAfNLjbMU8seYYopfYvkiJvP5Z3qe",
  "key4": "2jJRtZh3Z2N38naYQKtAPcAnaabLjUowzpHhHeFfZkhMhWHgw8BsSBqiCJEapagGeqPKkstr5uSn5NVWYrJoFXc2",
  "key5": "2zUxBrnhWDsJmL8Sv2Crs7aoe9kAwkFJCzbyhFHFJiUjfWes38WDYGZNtf6JkE2HjwXDodVwd8wzqV9Uzj9vpSkr",
  "key6": "3hGWKw3im6WKbKqnzHaTUg2aNs5zLbR3cApNnYi4bkncfYvyw5QfjYzKj8ddYAPzQFGaV5uMoTHjD9g7orrwGAKe",
  "key7": "3kJaRUGZz3GyWijW3epVGJVDFFBGs1U7fcREYtWh66y6BH7kVqPTgxzcU6VWdxmLgeQw6BxmfJmEFDrDXWaDZRoA",
  "key8": "2K8dyiutgrNTwW88FCBWfmf1bCp72BZ5S94MqhhzggLjrpRUkRPd4Zs2Ms3BL5KSZDaLMShxD32wKdLbP7S6Anpj",
  "key9": "64vsuojoaqnAYEKMoYHPbjfZmuKHm1SsptSb3jvDLV9JucXGctPd4AP4hrXbcoxLvEztcdQjuHj2HSgyZNtCAXWc",
  "key10": "47HvKUbC2JPwtNTHWvXHX1441JXmXBbYhcmMj3PJG4nngD9upjjHx3T8n4RmcCf4WC1cJRyuaAJhScSopbC7mdaU",
  "key11": "439VRnnCMkEw7LaWUnTgr2Q3Pi4VACPt2VNpb9XUqNM4pzqnhSKn62JtU4DzazQ1aBuD8QVPfwgF4apzkpqn8cBW",
  "key12": "Jjz4mdXY4zS8HgKjP32jEfLsxRBpJowcA3jZAwai2jEJAwuiCRu3BiwmCW31awCRfAVtVrKw6tj3sz1EgDUfMSu",
  "key13": "5Pk5sX7SyqfWLWbjFJYLX6QhLbHZQgTQyFr1YuNqpDH237RGREvFq3sdf4wSG5WAAcjY5r4Zcg9qduHf9YigryeK",
  "key14": "5xaKhHxssCUVvxAFcq75Qa4beFaroXaa2CeUpzbSLLEQwwNxfStdNogob4hmvQZgRq2TdWtjGQS1hnNafcYk1yyg",
  "key15": "3udJnMNahwp7SYono6t2GkvtWotriNKPcmXhwtq222wELoGKdbfigDXdXWUYhjYmE3j6HFHXyasK9eauv64WJW3Y",
  "key16": "3fLqe9kfCj5oSAkETEJjUKjVKsaUxv7HUGgiURX1uGb2PKmWuHvyVzuFwyXxTpafNZYWh7kQ6oFHzeVaoN6zyWHp",
  "key17": "5mdQk1cxo1ujeq3HnAoXG9WiKDL9UmWKPosidCcuGrhu9CzdHbsGE7m2RPCvDBhXCL5sjQ9S926do3D1U7Lm2DNY",
  "key18": "BEaaCxwzmRsdnXjPCzHjtAkfaxdZ3PrUry6g2DehDKH1rLkY6WcoP1KXiT9zKS55q1GFjSAiBxBTBSLNT1V7Fx5",
  "key19": "2v48zXibdcmnbm1pmFZ3JSry82GBH8jafrff3PKSAvapPzbfMrGAng1doyPSNtFQoRcMNkKGRhpQTNwm2s4mniTU",
  "key20": "5YXfd112Tw22BFdonRTXWCph31ajA4bsjugB6iSeiLbQ6Y4zkMTQUQbkqQUHk3Z6CQMiV5a3MciNxY1xRGUk75jV",
  "key21": "2AuurQkbFR9YhvRecpouuipxpjbHevouU9gQPCV2K4XSykr826wZQQeW2qw6nQoTB3EkqWZ4XtRZhrkf42AjY58s",
  "key22": "357NqsQ2gS22eW3AhvjG5sWoUChGa87CKy214BBEiSBofETpxMSH3pLfBuH4dtqz2P4viQyw3nDexQ7VLJq6tCkt",
  "key23": "5qUukE6bfNmryQyyRy7bAzkKdHyA44vSZRLm1x8DYMxAYgbhMFK8uyznCgDR5ZjkBN3GCGBivbWLKb9Hdp8WyQs9",
  "key24": "4BDTJZ2hemsemEVQAVmtQPgAhT2D3KZtePRmkkynbAabokq8ZMSEQWPi1fp2LpQ8f74dxAMFAwPbGZut2WDWZTib",
  "key25": "2zTb55g4tvwBH4YckcNbrueWNR1rQVaaavBEKjmzZq1hziD9B4ZWR1t5C7J7cvSc1vuL8WwWeykLjTJBbvbJhgtV",
  "key26": "4qfEorkJ6zpPnNeEP54XG3L63ZxYF13sMyDc1WeLxnz8zzZE5YZDJ8qzjbZYrjC81S7XyEWayoxJUZytfuh1hzMg",
  "key27": "1L16iyVMwmaSxVJ4AbSoVwrFedMm3qJiw9xzFmGBFMgYLKuR46eZQbendFgGeT44rqUWo7SXinDeTSCUpjTRXTt",
  "key28": "3A9GNuagBPYDsc1SXvYgBEeCqisfRqmDpqoCe47Hz7JEaRcMHpvFoETLpDEZnDpP1dNatPB36iB1TUXzc18HYCV1",
  "key29": "3N6vLsfuTXNMfVnikH3KHrngLmg8yE4AeMRjGpvsJnqWXGkzRJKBpBkxBjNsgE46a9q4QTt89gCf4JRsyumerH31",
  "key30": "3LCb3cSWNHx52F9kHjBQA2uqdcWdr86b82gf2ewc3tVMd1HzYVynEqTC8tL24EUCfSRZRWbnipNP1Xpzp6E5Nppv",
  "key31": "2k54ZzcKsh6VAexkN5JZwSUv1SbVmP2FJ2zNKzDRSzoiuVibCKzP4YbMnYoA7UEERwKX6YqgrT3kZeNy6LYwCdQy",
  "key32": "2HAP9Miev7nT1jWvh1bmC3w2FPdK27KmWcrgJ9x859wk9aZSQzsJofM1sw5c85EUqQTEvjEV6NgV7toDvVRk2X32",
  "key33": "3ssSRHtaJ7ZdGGHFyyXPX1kaXctyuBumnzMjKFuuov9kXxk4j4bDN3z6KpqCyDPgQ3rzihsoBRvH9ESW3o17UDZ5",
  "key34": "3TyMtWeQke8zDjXvRq99aoY7wc9ydohJARDtHibqFetEByTHFrSKetqgUDVESNLDqwZaLXjPcdnh3ta8tTEastAQ",
  "key35": "hAUWgz8A9L59SdCEzkte9kKz3MmT3GWtAQidwjp2KeWj7zKhYyPBiKdw7cZdWuzFMZetHq51pZPBQaBdiaKpLQc",
  "key36": "3zJNf4gVoKNHfaoAyWACFnrw9k6PdxYkTWzoLi7hWb5pJZSB6ajmhKjFZ6KEgf6qNHuXKHnMjde6MpMoqu6W3hba",
  "key37": "4UsQSMtgD3QEuwNfHXkJ64Ei6WsKmBFi1ytoyXtmWG1ghcbxibfooH2AigMXSqHAEpF3E42qkFmj8UtKuFmKbmVC",
  "key38": "o1VJWB47mZAQzMHmQkhYEUVL52sMu6RiCBSkjrp6avKvDt5sJ8XBhDrjdQHRbQHWrfF36b4ppfkxy9jJqutE2jS",
  "key39": "36cxqtj3vhdtWjbpMSzhaNywEZ5sgGTyrsQQYue2tCwCy8Sr1hSHZyxGfffXW36z8EYMBH3wk2AR268X4KhfGuzy",
  "key40": "24qZ1fuw4wdJVi6i8PV4UrHVpbWk9F9oR7T7sGeXo2XHF9ULD8mP1BAQSKNFdR72jdBwdJB3ERETHufSb9259io2",
  "key41": "5xnXv857iZ44U3vQByeDCDadQd674CrwWbnQEMLKT8JqH4tiWA14hg9ecHSEHCM8VkUtEn1kegJxbrb4eJhjtWZs",
  "key42": "3A92Ays9WgngQGMTLV5JYW3L3NbAzHSjkHZBx3khH4AKMPU1t1s1EHYsqyVAegKpGZdYsP8RoLrTU2H6KjewrcQn",
  "key43": "5EtVZsXEb8sWbEDfdUSn2JBQebF3jn2tq4LFHeW8gEH5zLVBBStT5CjZ6GhamPGm5fNTVDNHDUAU1z81VN6z3UDk",
  "key44": "5ociHU62JK3r1mF75JNd4pCfbzHzgRuGMoPYs5GTeADbpLAYjv7gTYEhYwn3opCgHLMmwdQVxyWg6NV62tzpYqzo",
  "key45": "SjfWdPcsaUdnwG5PiGa7gD9auys27guw3DR2RPKaUnKMNQFbAiKrtgGjFc7MnuwUiGrMpQkKfgWwKFRNCFdX7bH",
  "key46": "DHyMMCA2gADynHajVd6NdpMbwxTFLBnNU7dLD2f4qxqouaXK6wtSpS9rYeiV7Av5tUbnFmR8fbTBuTMpBLxczyq",
  "key47": "3j4VRA8iSsPeUUBCVZUydjFydteW4exLqNLDRQb3NKZBjSPtkePPysTsa2rzE5M3zDxMaxzr5hFTRBCYRmWgd3Rm",
  "key48": "3E6EyWEQBtM3XQMzyqGNrnaXDjRoK3r1AwVhoRhDFgXQQH1RLzGb28NbAVvKsJZuxgddxHyUoGqT6EqxduYknicM"
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
