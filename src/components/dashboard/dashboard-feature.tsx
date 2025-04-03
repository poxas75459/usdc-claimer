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
    "xz11MMDD9jv3PrVqsZ9xfbJDdDx65UBJ3HkNG4um1GGr2cgct5PgbMR63EViHLVA9CiwJnynBUJjqJfuVSm1mMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5aqvEsKURcSppkrY7d1uXtJfNjvKYT3SKiAZjMMQBcdN1frYXzmHMrD1i6sXrGhs6vDBViVzSVLLPeJ31BPqqx",
  "key1": "RM9PCjWxXu5gwzJJMYkrmKRtu9qJTZtogHbw66HNRn3AvGMLkKFYf2n8mSZXPn5vN12Vhq1nGPTBkTbBv2D3jxz",
  "key2": "4owNaByxj3Txt8dHqKS82EtAtyEnb9jEHz9NL6sDBfPc47kz1BefToU5MuARTTK9Ri4b8Ux2MCzvuc1cJqzGrU2Y",
  "key3": "46sinwGbNVMGfRpMR1KV2g4YmA5n4hTKW3rp1uiCjo4XUZe7hD5D1t46t8AEktUXLm6mKMuEHR6b7zJCDgS9rcTs",
  "key4": "5Evu8vmXRAcVyYpFs861eBW9cUrhxpzKYEySozhscAWNBwrwfqTtQPpwcnoruDnWct7N4JW5PhfRKtUpcF7DBKTt",
  "key5": "3WYRrZrsY1YuHBJSWYHtm4RUkikWvgPcDonHMpELcNsXJ16QJPYUMh3h2g1ACfLezDP1FVfyRB9NqhWESZexLYes",
  "key6": "4Uze2B3ykvQX74d2kwD3MYggMmTmuEMhMjzpKpReKgJvY7VxZgNrT3DJy25P8uXUVnuL2vLNzdzGgXDK9z3DaT4f",
  "key7": "121YWM3HdELgfAufAcBecvAB9x3ez5sUuopjZs8S3jE9tXWviwohjNb9bXboFrLGx7GLqtKGNigvYDuWDRaNjvAz",
  "key8": "5w1n7hwm86TGScvScuk7a7HxmA44esfkGjoM1PMtRGYdNrQJEPHnEemoswPDfQehst7KTNTTde7pYgy2usvBbgkj",
  "key9": "2ncbe1zbwjsZ5zHwyroiDEDmv69oX3xkreAi1J9TsN98gTs4BAC8Hab2Q8PyU24PxSzB9ukSkyT4D3ZUCzoKSWHv",
  "key10": "nDjodb7j8SR6kYpxMGxgjTbHc6Mzf81Jbw9m6BonrrCau5ChqMbhGwVkprXhEe6Vs3ms5aUUkUmaRXKaJF56LkW",
  "key11": "2SVTXWk2CUtKoJzr57NsVTAt9Xs2uWoLZPyXiuVPFJhKBk5uWdkysUb12E4tcBK1rPDE1kHCrQYU4oCyNTU5ENXp",
  "key12": "5eLqys4g1EsmKKxiBQJN1ghdq6NT3RDN9HuK2zK68tvqRUtpm4jwFnXeVZg7xW53KVnrHdNe3YAQz3nz1vixuqqq",
  "key13": "4HiiWDrF4KTf6DH5qxSyu5GLgHWBCtCy37nsMiXcpzB46WCiQTCJTDmTD3fHUBo7H5E5anpPDRdL6sM8BoAy9qEw",
  "key14": "5mMPX8KavMnBFKg3op7qMFcaov1mU6b68L7aWkjz4uDb2wFgY9yCiJCX4L5rBMhACbkvxtVKBSCzm3GfDAmCpFdU",
  "key15": "4rFEeZWq5uyCPJhXW4d4HqASvBPKDUrwyyvyW1mQNsNqzCVg1kBW7yNZhk8VKeyY8KFb94sc11M9aJ8AR8C29ep9",
  "key16": "2nbviNDUpN9i7iJH8cwi8QHU1jUD8TYSPtqXxHkHmEwa7t3ka4mffmhZrF28Rkb2HdhmjcubfDdCNBu9G2CRwsBj",
  "key17": "5zAqSw72oPn1ddMGbrbrcbr3VtPY1uQGtBH4xzsS1y6VTL2Kjp4B9cy9aMPwrwgpSGtDsinsnYgmaeBg1Zhku9U9",
  "key18": "5h8ojNVK6PB2mC3PyN1UgMqopRYuEXiSA6uVtn5PcWcKYwSBLgm4ySTs15KgYu96KtKjU6nvR2888VbDnQYVBRYx",
  "key19": "5dPG1mskgvL9j7N43P1d11WXP8fTGVUybrxgFS5GP33MKqTCGu4VPtGuHXQVHHgc54Ygmd2b19aWCFJwavpJZnPq",
  "key20": "5pY7ZtiP3tgSyjtqccx83cc9JBcKXph3NkUfv6Myed8SC2HggCpdP55gBuAX1jaQPnjLRggnV4gvPxaRJCCGx9vj",
  "key21": "5BPdrnv3kjpgZbcgrTKBaCTWQYUBnHjMafvUUJ4M712J494ex55vvM4DgbLDruNgEhkvrBXmrDGmTg4fWrAfGHUm",
  "key22": "5f9oxbyxmhEKPGM1LqqTHsWAD1FcangLvQE1o5E3HZ68tunjnewUfcGeaU7fxFC488KwyKHeLocBDMviqyykd56S",
  "key23": "5UyRHdmtHyXXaYo9Gs2JcRFm4FqyxVGUm58WZrZTVMSN7rTRMpTFxz8WTe5J7zTfyeUBzYJijy9DFwFUuTDJJPMG",
  "key24": "3uxK8mEAVhCwPj8DRkbv6i6kMZ6tmrQUVrSAhLzXZwiu5jHSVp32Br8jnNb4EeFSrTAUVT7Absr9XBCEysJLQCfr"
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
