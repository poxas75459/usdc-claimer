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
    "2oRBbyLsTrGaRf9634NR2YBVFFC6iS3R326nj6JYA2JTxDde76PdkE32XiVVMZ6qa5dPrGDm9o5AQQuLtgQoExEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDqCCet2YssYgQp32uH8R3Ax5p1r81BN5v14fQ4MZ5hUAW5rzftKMNRyPtGKfNoEHRbbkTxT5cbjmLj3wrp1ayV",
  "key1": "JVtRL2wMCwcFmdMvyd8xsQ36FjX9LtKYZsYGuLooho7NGenkU1jADAb9z6QMfBvreuPRVB3B9SkSTyryW94FJUb",
  "key2": "2jq8RK83QVp8PT2DTtynvGmh5AZxjzVMEYhYi587HG9TzFAKrVtMxgLAtZdYdR4sMrc5azvWhXx9VfEaZvY6sqik",
  "key3": "2zNz11HY819xzykdLvMZW32EgAXwjCxk2iAAUuf16XM97EYDTjRjJayuEbMpDsCoxQL3DyAu9adctnJJB5ViAduX",
  "key4": "4tPZqE1KUdTfVwreBdAZKnRKMAQ1JjqN1GbXBhq6942ti2ZUtxNm85MYGxQgGbQX3qkFS9kayesCwb4HPiBRjQKm",
  "key5": "2wuZeTp9F2CPLX2Qd7f1a98sWYjKiDMFcpHu1Z6Q8g4rCmBp4BLbxA8Dnd24gFae7eKynaUnmVd4Zejpw6CQAQ2N",
  "key6": "YcqkmoNhhuSkg5M6RS7TPap855o1voVpJtcEGaTYXboEkGTAJb647hiSkakxDCoai75u2tjcQ9v7GPQrBYvWeR2",
  "key7": "4LxZDKv1DWySZKyqfJ7ofurJoz2d4cADDyq66rjmBeWgc2rSwWmLpiNh2muFX4cBDe3iA1Xiv6CYLs4pZyCS9EC",
  "key8": "YxDbWKTjtnde5dy2ppqQxQUWtCSxe1Kxg9g6Vwoi6suDB47wT6NCABhs4edK371UMuR7mFmVizbSDDqmK2dQ8zw",
  "key9": "47pEqnzywjuS5G4fjmGK1Rj9Dz1dPexsYaUAVRKsA1ckDGe3bdrD67yu1anufoRaEt46bABUsW9NCukYJEDm1GNU",
  "key10": "2tqM2LwGxubzepvQbQa1u6Sh7VrFPMaM9ULhzmYcaTHrrTET7RwPnVEEPaw94mXFDACT8UqUhy8BQC4zijNEhSFe",
  "key11": "3Bgt2MF1GgqBU8zVGkHgP7yyQj3n6MjKNFonZ8ANhL3DfKJqTxnM9eLJF5eNb1XZeHfgW3MNuFJywpCEk67uxBuK",
  "key12": "4rtFvEgL1xLxEGiJxqoYJtVJ8s6fzX6pypJZaxoY6J2jBTZAoDWiF5dwzEqkxSPmUmcS7mupP2roW2ifGNE7Pn3V",
  "key13": "5HAtC4YctNG6fNA2catXEzGYusd4jM82vYMgGWYHzQTfPWHuWxUrQ9ubDTtK81de1cJgWK15ZM2127xfzVXoKS4i",
  "key14": "3NTJFaLJQsZMTenmgNx9syJ9CG1idosFhQq63t8BH1E51LFox3JHQD7aJ6QkVrH2PRn3M7WUxzjgkzx9mqPUFehu",
  "key15": "3UtRXJ3CVCYsjmYEnaGKzJefzi6r4N12CrjH8sXDVwZaUyB4r6Gqv5meZ2ZAYrfUPtaey3tZKyJdFGsfTtbYnLLe",
  "key16": "6ENbzRkUB7vgpx3e89jTKPLxM7SDxLDMUTdKFJD9hGTJv76BUVbGBpWXSfvJC4QXfhQJ3c1mSAjt4pBPrXn2dxv",
  "key17": "2LUEw9BrisMJf85qwennojtUzfVrbCCKahgJcpTRF6MpW9ZqquowxtM6vuYn59xamdCM7yhQHG4TbnEJs1nkhL2g",
  "key18": "2tGMhoNAhw4AyeeRHj49TwPDqneFniscZsYXQcXTgDQwhQDS2aNPRz2D6J4HAoqxW1hcdivRuD3joTRVaHY8yR9S",
  "key19": "Ns87B9wSZzMfkzGK9jHxmZY6HTwws3F1KRN6xj9QPYj8od39htRQrYrYLFdtxVKEiBcJrFif9MvfrhokvyvQXCH",
  "key20": "bTGVM7GMQcvm1wVpWe8cdZiLoCm1xuT7v5whEP1PcRKLAeXxk8tAMzGXFZPHHLSWYRQQye2b28fJ2d5aGn3bvu3",
  "key21": "46ZKnhPFBheNeQJb2ndqo8aeQnoRAytUdPXW42vT8ohmwbaR3xaD3UnY2y9UTfo4ggA5nWU2ie8ExRu37xnL7jzM",
  "key22": "ff6WbAq4JB41FQf5Mk8GSaaKif4SuLrsSWFCKZXHB9Jo4179jF8CEjVccxsoP6RP3LWphSRDoe63qPS4MLoLFgv",
  "key23": "4cKWUAWmXnfbGn6KvKVfQQCEHabAmXNp4mBGtBPpwjCMgrL4cTntdpSxyeH7XgZcxPtMah3rXk5JdFLaRviQ1qsg",
  "key24": "3cuBfBK88x1Z6RzTPs6eug9wV6TQgSt1Qk7ppE3Gvem2svSsP17uibysmbj6uRTBLjZ25752kWRQEzUgRL9ypmWx",
  "key25": "UQnunMGh2jZcSBwre3yinKrdTUVg4KPJ7jhFL1XYFCN3qKbLe7JnT6uUVoicbYhXtAvPfXy7g8NgeK4ivT1Fi4U",
  "key26": "34gqnSF1QKLJUyKz4fXY5pRHqfruQxMEGbtoMeyZg13pmNgtpd1gA3BMfomZFEvNv5k6EhBgDng9LfTMfv3YL3Lq",
  "key27": "2pNDxngAusTobLNjN1GUN37Y6HauvE2rcnx8dwKRZKhZVpUVzyBLaWM2kNiJJHJrumFLaaK6d7Q24q9AJnKKpY9S",
  "key28": "5Zx9pZdDRif1VhiTwrr7tKG6rAb3uL3H3oSbzcQqGV2Fh52HqPMHbpi83tvgD4K8TxZv97jdMffEDZQLqwHMtc62",
  "key29": "3rHUtA7qNeqhDjb5tsBfx7iqDTGmrvm12NFgBP9DKRCm9t2DRoQ36DqErdrZVkUadKogVrueQwhgkadRPUEY5orC",
  "key30": "3Ry7jMsb4TU3fBTXNm74eyCWTxUzRj9Hqe3Yoi8W6jiC1BT3Df1dHyP4HcQ3kfSL84RcHa32Kuafjsu11zmpyD2q",
  "key31": "5UMMjPWsTZDXxipak93QmY2gZ3n5Z3HJ7ZkimtWTtBGyTagPre5PPnKnAxTXoeArbq3Yx2HHLMRoSkZVKsH1gMuA",
  "key32": "LwGsbUTxJQbNk88PozQqbAiwvsS8uUXiDzjAqJUNATwijQPEQ2Ts26JXdyHWojUVz47VoipkBsREMJXPzygMkWT",
  "key33": "2ST9JvQKTEZPzywYCsAv6yaKdDXEKsPEGcduU5RWoRAfkhQAk5HJ78jSmKwCJ5fksM9ns1t1jyHxMdHdqENfAGgX",
  "key34": "3bbrNQt6Rd7wpkRWe9KoDjMbQk2oBTdinzJZHe1mw5XJW7zdJS5XDsPUMnYUdYYRjACzDTkv6BBi44dvXSykdncR",
  "key35": "4Gq3qBY5NbgS1QfWF6hMoz4FoD8Lj9vRUCRRXs95DisD4HQ7FjoV5PTd9opgkg8fxefc6oiwJPSB7W82vMcNiLmB",
  "key36": "3W4yvopkKiKpVqGcWiQnsdKA164ZEFge8XJ9oejjnbi3LP9qswsuiw3XPpinQWSk6RRTi6NHwxyPCw19E4gYkVi7",
  "key37": "tckqRhU8PThWdF1iccb4mX1G8gGKZwf4ndgbkBnE4o2RggxMg7ozynMxtdAL5k7zHM6w3Y5Mu44NoQ1yQeb74o6",
  "key38": "42xjRFu2FNfWWiJ12dXiB3MrprFGFa6S7inUEwhsJ2fPxQo59M4JirBPFNE7SmThYJXqLnXkSnP5kuVoUVEdfBXV",
  "key39": "2ED6yJTbzaaCT19fmtNAYs2AVLFFLZRR7YAWMBf4t9jA9v9pbQGHgEvzntdJjrfrm31hF34ptHmpMSaP5Jc7hNmB",
  "key40": "5Kcpv6tk6nwYyt7JpYZqJq2NEHLpCZzpuXso2HLhpzc6JTppwMiVgU8q9iujwdZikMbTZxv2rJyRabcZ18j457bX",
  "key41": "3uH7ZZuaRwvrTYNCrUy5seoTGE5rv5bfGR9WCHyjBGXovGJtPx9RgQzAWo1YhhepQ6PfgA4obyaNDghRuvg161Es",
  "key42": "4onjesTmPCCqzQr1GVaZQkUbnEniXowwXqtygS4gUe2YGbNScDmV2tzDmbB7b1bWkJCohGzNXvxEmUJ1Hv9yG5Du"
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
