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
    "4SJMDBar1yB5oFcjUiJACJwERf38FYuWr7N4HwLKaHajHDNVgXCTM98q7jwstbd8WUPqkoM7EMtnHPmNEnoUfSaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2FBWGD8RSoMWBVMgVHy1fHWUayFLHi7mjgsv4GqZsaT2nETkwssWznc84EarNoZFyWZSYks7tKUHkyhUAhisg4",
  "key1": "N89YxCAL6jpa6JgEHBAvAnunpERkHtqGDu8rjLvPNatknD7a7Dpn7eFYTNM6ZynNyxDbmZuD237hryg4yghNYG4",
  "key2": "5hax1MCs6CwF9ZFfvUWj1VSXXTvysP4YHN3B3cs8fNdnXBJPCQB2t4bTYFXUzvkbvbGRHzB3gB5rxkXKS4KQpeuS",
  "key3": "5mtPwyUzqyQ9DGwupeoeuQQGNkiCdmnCtk7cU233Uso1xErnWSeG1jVpoQq7H9aArffkVeMLYDthG1e6FLagvQ2i",
  "key4": "5QtTMKVzrfYJd5TfMpXFw3ChCSBWFjHx337Lm3YRB1K3DFEy4H1sqo7dkENpJZLWEp3krtXoG36AftpTykD2tFP1",
  "key5": "63pxF82taVYLyo97YThP4m8qnBEWEMnwpD766Tav83RMVcLsH9hV25T43LbMhYRTTQKrzeTnTgdztVe4TjKtzJXk",
  "key6": "2kdCvb9H3s68TDStRQWEMrW4iEYv8nSX5yRLmW9wPxuP2dKJcFKrvz8d5BM87V9RETkPDsfMTKN3vQ18fdmCqwJ7",
  "key7": "3TaVeZnmynSXsTrU45TNKU7oiD5bydemA3njU7kpPbHDjpBbirBGfEpuv1BSgN1o3UpgDTaF2MbECXk3vAiDYyqs",
  "key8": "5yMYjC7s794YDdy9RMuTMmiu3yRnwNL7XPtvkyufJxPjTiHgqeazTu8dr2DXLyUUfQCmCC7yGKiPENnGsWxg7nBZ",
  "key9": "4agCaGRGNTyq45QJpFk3eTTCvY6FK41VfxuWpwG4F5LiLyvVUbwYHdCVGCG1be8F4vhT1ZYRYUQEPu4ubAiogWCu",
  "key10": "3qRUSegC8fBrEDrFfu8opySYHSSisG7L87Y6sMakdmMD5SwDeC6jZVAszWogQhvtodpfhPB4nhkXMf7ufyAHizhb",
  "key11": "aCTfExmx6thjLKZJutbtBKBuQeUeVV5CJjHjY7L39qe8ERJGZSA1hDv6LZiz6AV2pmXuuzxCU8XBPNNBzK422sq",
  "key12": "5KJ8Daa6UtM5yRSoNKhsktKDkLQZ1L2YNjyKMw9wSN3h3ppP9gZHq4iWKsyxJnRSuAiMDkmg6Yax6PT5SKrbXqvn",
  "key13": "2eEGYqenu4sLSzPeg1qUPsiiqfiJBchXA8wyhUtKDqGbKhcyTiqe6VSWZ22TWVG3m2tBARf6UXDt6yMWdmVzZbiV",
  "key14": "5cWBHNLmGGB3hfPqEc8i7ESg2iidpfpYV4PV3kLbJNJ3CTMGto6BnfHNACBLEMYzn1RWxshCRr2rJEjoYmr2Hjj",
  "key15": "5dLqcuRgGTQehjZG9SMMLfmKg5uvTfAcawfPNViuwxLNkrJRXsMYePSm8Sfpjvev9h5n2ZHK9unK44WFiym2HqHW",
  "key16": "3qY3wxRiFRXs66sT4AmzQ2hRAaZJRmxtajeSTxB5oGWu6iFp8LUS49Z7E1622wo9iRqy6mrMYaDZ8U4rJBmis7Ju",
  "key17": "4ZmBEwoWNM3VuuaeA24L7r8EanQuA2nGRUyNgTeRrLos75ggFjSe2nSxLxM4L7Bhvs3AewWCMt7j8GcBjx3pg2NB",
  "key18": "P33r8UnYHfW5Ma3DTEFoQ7t6y4cvhrsjtP2XqwMJKePzySbCccMGu5256SkHVekMtZXtbHdCNu923bCRkxUuwbB",
  "key19": "yLB2M5EnEJzrQ1jVgbnpyahMwDJ7J6crhagw65mk6qbH6YhMF5Z7u4jf8z3ZZNfm6mN5zC19Qi7ZJSSrWedx7La",
  "key20": "2oWGrvC3ZotWkLfZrBNZhbiFVEtrp3N7ALTNThr9qiiw167oFdd75AYD6QCEbDu1eQF3YfySNqeGfeHqboHGbixU",
  "key21": "2wYUZZvRxmZayAaXwXZKuPQidV8TSbRTUNmfrSxTttV6Hn2T6pK3khNuydCSbLy4cLsfgwaveYCQzA2GKyBsPNwJ",
  "key22": "4erupDerk1TBb95e4yHmwaVfRL7tgusdDbewJtSbv7jmvfqh2rs1udmCwzkFULkcALb4cYyQmwnT7Md5vpQ3DR99",
  "key23": "3qkYgfUZ3DtRLES1MZNEZXuxgUmPmw52LvcG1gFo7sH1MWb4g3PFjJX6QGTj53Dm6FURuienqGgGsFgu6kTYWP5E",
  "key24": "67XJniuuQnr11fhbDaK4RfFzjbrbUM9nZg88jyzeTGS1xb77TcKk5i8L4ezo7fwKaPT6XY6HXYhSkCK6iheVTCKZ",
  "key25": "233SjcQKNuqV4C1AHsNKVp3eKbvnALtkibZRda2LrnmHYEnRzxtm4TeE7guqRd97Q6pPTUSmdweo4vcix8SEcRdU",
  "key26": "5YJDPUQrM69C9G3DVZMpuKhmEFJ6hkrN2xDEyfScWyABy3E8Hz2Loxjw8X4vNn3DGpXpDtutkZZSt58MsxSEEFJa",
  "key27": "2Akb9VcQyXW6G15k5wepM1g6oaCectKFD13BjbuGABUaT5ayagGhuqUqgh4ZjrTueQGVUVHc6o3kUpNJZr4dAuMT",
  "key28": "4mPQFJk57tepa99A4GQtdWMEvDCCMecWsk8kVemc46Uot81rkw3UrpodarfyAac4Qewnn9mdAF1aDch7re7Y8DfR",
  "key29": "4i5Uui6B6DuYTvGrK26TAiHkT9MzWDz3PAEhFXFh5auYXqrKtdR9GsQriTjzFEswayP4y3fhdhS8WkTJmxksvPdA",
  "key30": "4AmmVF2f9i1E4aXa5dc8peaD8ev66hykNAr9n6qpWBm2Qw3DsZjSFVpEayL1M8a4r3dkxLGMS2am3ptWkPmu5wrF",
  "key31": "5a9yYatrxK2m4Ndfz5Eix8wcUfXJaEricRkrcyaBKPrz9Mpm8ed7g8zaqQbF6XkQHxJ2eQiJDAXBq4ePwVivc1La",
  "key32": "5gZprDAtGnS9TR4uwfxd3kWDVJrioUzDsJhHPUoVy2SUjrnEPz72QrqnUwTR8i3BzB4saWNfiiAEYS5vihBiUGdG",
  "key33": "5zvbqmP4UFNMDXM6jYA63fxiFLPqQAXMdSLouvn9UTuMSkhufKaytyJqDcVYQ3APVeR34TQ3mK2oyupc53fxriyH",
  "key34": "2yhR8r8XyJ76Eu4ZvUEqsq5Wk4mdgg31LkiHiL6AVCCdDAw1qECo1F5T3GqaRUMTGhq9jrRJLwu574BwFk35kyzh",
  "key35": "2qnQrDHuNnH59SYNRFX18GArJy9yQGmCs7rMPwtvRcDBwvw7WGPr47VHJHjhTez2rGsntdFeSLAQmP6cK3MLLSkf",
  "key36": "61zoGz9HUCVdKstryer1MfzmcAzBpfyL7WixXhJKhxwQ6CN2RPSg7WyYStkV7Epy7eSY7JTYLMBXehcWVHtrLtq9",
  "key37": "bBjhUtomsvCZUjb82bbRgbZ29udbXi4i4aqoqS1uNQ8umEuYqZzqiXwQrPsFCeggCbFphfzjruYtwop73GdDpPq",
  "key38": "5WodRTQqk3BqFTu8sBYeKdMZfoLNN4ve2E9KXgaoSXNtoLc181ymyeQhf261eWqeyXc3zyVjuWc8jJjUJSdEoFq7",
  "key39": "2AZ3aJsAtgnshcx3ztBaBT4W3rBzZhSXvzdMEdVW5v3j1t3cgGxEf8qKCc9foqQxYLHknSz4VNwaQye9GT7mEtq6"
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
