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
    "5pCCKssUtKPQhsqFh5Q85G6Z1eBU5BfYzPhnZMLhY2ryDZxzXiRY5Kxi7P6xdA9ARwrEyHacSC7cxfaFBxcKUEYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GaL1hY5idThFfT7SnLQpEMiH9NmEkiLDMmiduKc28CxK61zDRYLSKMN1UMfPWzAdcWytjAcdspixkqTBiDCp321",
  "key1": "4pP4BCDLgkF6MgviCLCPqXn162FRoy2NvFa85bYVL4839gzeoa1wznocmu3221LVbmVziJLYGcXrb3QE66RMjSiL",
  "key2": "5ZkVnbPJmcDdiuFEhfccVLYZFVKFe3buJ5jW1ij1T4dr3j773eekDoVGeFd6mKe7hRADgd7XTb3UQQVmRxYBbHZ1",
  "key3": "5DePvEzgFG8sio5QtQEiwKdTjLgfGkfi3k83tLzx1w2t1QkCGnMGB19vJMwxgcet49E1NbTHcUrjATPvP6CobYGd",
  "key4": "TmvM549cgRn2k8F8TUvSfBMzaCj7hpAM6sjGAKCTiGjxycBn4Q9ijZ6LXf4gdT3XUiaRNnLQJEkxJuGc8o9wLCK",
  "key5": "4GLZUCLXG11cpn5x2fyHNFpEgiVJqn63B1aJ3mZZxffW3nVSccWaonxfqSMTDZ5yyNFhThQe5g1uvVkocs3KgbPb",
  "key6": "3RPRg9x5Y8e2fwm7hjM6tPQNDHiYjp5GwfMtT1at6hFAz3USMmKkU69HNrJFHpUs4Fic77C3uFobnA1Xj4HZgNm5",
  "key7": "5DzmnRQXw83TXfjFZDRcYxywy7vNQnwV8MToKnjk7RvP2Yvi5mikWV816UCesifCw2rjiTPvcmHyz8q9PTKh8qqX",
  "key8": "4hJuDoFzzGAb7Ld2ZNJpnJ4Gxmnx2wzdFRJnG4pS5MfNLqujqwqAyVBnDbQmqdggCvHX6PJVTpDDUda6qMpcmqkv",
  "key9": "42N9WsiZBTJ8cu3gBB29eDQ6n7HizeW4xhfK5Lk2hjJqy1QWiVWPTcQeaZD3QcBxXueyFRzR273HMNxUFticmpLb",
  "key10": "2kCC3wrp1H2yAcGLzjgVHxmqUVEJDyC2v5pwThBy24vJqeccndP9c9VumdYhHfRhsRY4XuShV6hDzAVtV9TBv9c8",
  "key11": "4jDhQftsHYu9Wvw82ivhuD2bd2snHC4Ug5F2K4VYBD29xXXobgKm83wjLjn1iBdya5AoCyYZfirdytJF8gpe2f8h",
  "key12": "TBqrdA2QkKsjzKjYnwEkGC66xeUMX5nL6FCbsp1vmJj2bTP6WHpWusS6VMqqgGGhu8nM5RydSQ8QAuUqHgQN3Xm",
  "key13": "5mofFBkr7N2pEEKiJ96Rbr23JU9jRZrDpf6Lt9Nno8n9H5E3e85sLmDqHmJxEtC15YP9jL6p2ncTqBmgNGz2oLfY",
  "key14": "4tARVpv5HBMD8EyPSyWPmBKBcyTm5NsLpuRAVCirjCANhzWyhAmhWBLJft38bezQuCEn9f6ca3cjy2LUUZpCQ7qV",
  "key15": "2yoTDg7nU4hj1573u6MpuzcxgJxLs67Kzecwir6MKuBPGojJsMGc1H79VQh9s53Xk3sxcMvzN2qpazFGq67wT5A",
  "key16": "4ZbfJ1gv1TGS6xtTKvfFRnbneyB4ZmYAnds95HqRdAfoDhxctDzcpjf2KCRYbYGxqyd2PjVyxkeu972r6YW5ZhRQ",
  "key17": "5e5tNLY8xEsYjcQdVhdS3ha7wXP8zfhXTwwHAVPZkDPFGiSXSR2MnxUWuXCiJxzzStfheyEFovi25MBF9BFUDW5J",
  "key18": "4vnTQ1fdzGnCmytNtDbqv47yGftbGzcgSdsPRTZdhCTRkQu3nEqGrE9k7jRuhHJEiq9qtms75CrQsd7Q1jo4xfTR",
  "key19": "421MTcNXCQVCRpfjtz5uKigCeAso55maXwGZr73n1DMGhKaUHy9DzsZgjp1juVQkk4C9x2VYVVs18oqFWfR5FJkH",
  "key20": "3wtGdNYwgw5zEfk5Vy821w2beFWcNrkiTi2JGTTB41T2FmukpJ1CJEyC5JM2jSAS6MARe9id5itU7QEfJsoiAgYb",
  "key21": "3YKjrMCPD877efcfmA4s3AzuwuNbw8Rogt869NN8izZfWHuYJyaXScDqpoU7FkTfVYDhGeFQKEoV4BFXZSn8cfMf",
  "key22": "4vEUogiW2crpAiuiPTFAP37CVvsZNq7C8YtJS5njM2xRBu2uYuqHFGDRSoawJf54o5osEpXGDdSzhne7iRWPXqc5",
  "key23": "3XNxNA37zMU86bU2FbQuai4S7bFBjAL2tNStv7MpkAejKahFyDok5WTSGYAq4qcmHKdfp56DuFmQSaW9fic5moLu",
  "key24": "4hEPNG6rt3TrZLGySNcHpUUh2uVKZnHEkkmbcynXst5C4rcMLU2qj1jveyfKLnNFUBXfbpotR7fopM6ZBW3QxCmr",
  "key25": "2vyhEBrAXj1zkrLLLcmYVDEZZv9meC9SAvo51Lon6aX4EkHaQt7Q9rSW7HF9S4d6376jenztEoNgbrbkBGJqLaRP",
  "key26": "55JCBi7i1uhU23NLLfxPeiGkh8jxKha6XiKzCEQHCSiyDtaYLoScGqZ29Rdes12AXEujimrZ3RnmvM8eAuoGUeMD",
  "key27": "GDn9Ci7M4xiVuuekUqSXgToAetTSbyASGLxFi6ysLgSu4okJbe92ip6yxpLYCS2hbQsEKo5GuaqkaweyBBiN8t8",
  "key28": "453kVwCfPkfnmmycXGZDuM1AHUFSJPGF3yawxzhTWAt32SDFVtkHLJH2RtrGLuJwZqwHyJAknnn9k3rU5bVyMwGt",
  "key29": "44ThjGG6g1aQWCjQdfEEbygwyFYfmyHiPyGUYAhtEHxiGnbwHSZmUif8hKYUfwyB1qKNfEQfpMYdX6RFfHHYp5Kk",
  "key30": "4A4faMX3N2LLH4oEGm2iEk6hAhdNDHk1hcWHLSx2TiTLQ6vACkE4mqNcLu841pZq6rr4RpxveEcnccu2tasdWGkk",
  "key31": "3ZxPnZZg6tS7BKYZe3vVaxu452uDuUXDpi9ikxk8KmPi4c744JrVr7cx8iLMo3DR7id45YnNpUuuViyrv8ZADxkx",
  "key32": "2px55RSMouonqoTNBQdJ7AReLwGVQ8zVaF9o1iwZY8rrbRQNNB71pVXcwnqLFdNjRv43UEziDUd8sEMw3T1Z2Fz4",
  "key33": "1QvHHbVYTYBMYygKhJDJaUWFtogRKFeSsaMwaP2fWvw82YRA3Aa3LzgSHDknqBWnytYpMcoJQM9uYHjsd3xn2K5",
  "key34": "3as6pNJgfVW2vLSkdgs4ReX7h5xXns3jttWwKUruGaukqTjGGnneGjXMKhU45gC9b9fhP6Z7UvpeAY7mmtdjvxud",
  "key35": "57wJBrxjPnxRwTGq7wXyy3GmJhxsqhJJSNTFw1oogJFbyyoaBNTT2U81ekWMFzQrHc4i7K7Ece3rUqdaPf8GkEH"
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
