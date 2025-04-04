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
    "7FSskWqcpvQ4aVnJpuKLEDwV1oPqKxNPbjF3FvUuWYdGKA4rmxNRGVB5TApKDcj8BEqXfbLkxoavW8Scbg73eUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSwAhg6NppogYhiEgdo7vtuF3VuN6XejDQsJj5ACBKsgyhq9k9iRqNGcZLvYV6SXiq9yiTrVUMA4xhJuq9nD6Ym",
  "key1": "2E1YKgkqGGR8qyZfJuRv4QyiUJbquKsroy4k9kHDGtzSsYM26kbMhkWA9fikdUx2r9oK9VsSCE7j1L6cUN6RaBAg",
  "key2": "3yPhVCjo5FCsGmC5qAeaTEPaHjWJj4UTV1LjRSyaU4goZXRxh8WHmpT2rA5ektLyD7Zd416YNZXrCJ8oRpe2YmE2",
  "key3": "3hjkELLnkU2c9kF9jgG2WTBqAbXTubZH1F6TNjoj25CrmhNk6im5vYamACcWMzMo2uc3e4mNpxetaqqZDxiUAPxU",
  "key4": "2tAjSu44PzZnJf614vaS8cWdBZC4EXceqNgpx7vtvVhza18eL21djQV4EubLmwmpeoyZwQ7uHbU6wk77cS9S16AQ",
  "key5": "24auh5mmuw3dxWbBHr1FYVB8jCv649sSeooULfLThtHhsjZF4WxaQNkMWCkiJrgtJtBnXMJ53kVJtfyqU6a4gv8T",
  "key6": "D7VzxdWBf6xXcQNMiHX6enbKw9iz5eHypfSHy4FDmdvZwdBxdMpGoV1Tj2rDMwPxU4XsQ5CczHT5XE2fRJwb2vM",
  "key7": "4FC2u4wSNMBKGDD6UvcoFdFRscz7rrkosCx6yumCK8yzJbhMhp5wC8CAsPq7Np4AX3RGFS2R8ABJn9oF26JPp5aK",
  "key8": "3Qu6RTucY5a3enedM3nkpb3ZZaprpfirkhkTCeKZivv4F6gDPimx84e5PcZEVJoSpgkdzLjZKdqbzpr9cUCveaSV",
  "key9": "3dSsVQ23xVdjBw1DiJKfgErajH3QhK2uMAefWigaXmLouHN96BE1F6dVopF1k3TX3HoXM9iedWfgd5CSaFmHzSn",
  "key10": "3HV6inW2dbMymdnmfn91UrRyEFqqx6D9aATMj3MddYA3cocHYPXpUr16oYa6ea1FiQE2TFigg3hp49B3iV4FPgGU",
  "key11": "21MZc4KHbDujJHRBRDCzCdGGgv5qBw4bMj5NoHtpb4E7kDDVb2Rk6Amw5mvgrV2FYxKy6jgVpWF1xZrVJcgrg64z",
  "key12": "4Ldd3tenM8Zt1CfvPkjWegp8nGRmUvcuL78QuNPWakjARMJd2URHAVcJQhSQBuNTWky6yx7i9URxasqpoxpA2bDF",
  "key13": "LTXRS1Ckk94schSSoiztPMcY69VjVNJ2MkrDRU8kFb8uxT2dx7BgkyG4jruZ72w4eJrjzauWArifn6Zs6DAcxtT",
  "key14": "4qMSJvdAcYGPgMEkZosmdk9QXr24JtG9BrK4utzaYcgLVUpm1kbPmSbt5Vqbrujs7w5SgyddfMJLYbRPE6AsnYnx",
  "key15": "2wV3N8h4UCpDTq3RwazG12iKA12en2ftBMBSMqQyk3a4LoiAMiZfQfwYDaTb8hEAco1ZkczoZsrCvh1Te6GVqFeZ",
  "key16": "K7wwbYNfDiEEeUw4LD99R3QqZZwEymmLYUkxXRsDPgFq5eBEVeK8cjvcM2Szqsdv7adFcKmJiT1XDEG2fSvwuTr",
  "key17": "27YaHAvbRxkaxzJM1dqA5sGMSrHrMAXoiNjDHkemdnMRLYw7Je7qr2ybaBunv9uoXw7hD3HwqV6hvqyz2Qgo61uL",
  "key18": "4TXPAaZzjjCp4SUetyfbPW1VSh4ibw4VCPERCgjBL4jZjNVJLzUPcoHoTANQvDwmymiEHvMTaqbVfLKaEAPzfAg",
  "key19": "3z1VdcG2UGXfBkHD3zngWCYfEou8BpHiquqQM7vgGZs4ZtHaEzxJ9wQ7KGYSpQJGT8DZrnTSA2LiGoNQ9yGFxw56",
  "key20": "2VqEogstiEszLSiWd7F2LgJSZgGES51GgRZ9nHfRkcAsF8omuq7SDmWdguBNLGEn9886Fuwyr9vkogGQe1kzSC6L",
  "key21": "2tp1jV7cbu3746VXFrqdLVVTRxPxyCYWrg4e6iiGHvv6fPp4ami5CstvqpXMHATVgaVTLVjtZ7CUKnWJ6muQicom",
  "key22": "NRoTMfmt6TrUatUk4ndc7P1Hkf4GMSKsftGAzUJZPafMpDH5hAe6myPtDrTYSmCH5HkmoSEg15v4G6P8wrGogkx",
  "key23": "56YBPbWwEpCtDxP1WPAGjeJN3xc3jK9FZ9Ba2Nein297GCsu3y4Sb5S8PUjMFgs8mGTG85BVsVSCVy3mK8Fd5bNU",
  "key24": "2hMySdop7c6j69UmssDM735hS4YFsLzc3sv16c8y81jq1zcTbR4AzxRBtig9qZ1g3MKgF6yQ7BZFb8EQP1uoa3E7",
  "key25": "22yNFZmskqi9RNfBL9rARX3KUxbMyuwGD1cSxMHjUMi4MeT2zs2LuoxAWyQYAkynkJWPFY2gz6Ep262agkH8Y9wA",
  "key26": "3UXCLTpu2Ee5PB8pr4G7EzA8fS1ZcFGV9hVERbfo6GXAUVxS8HcbQePPfQSWmF6oTKWYeuuKMVmJvdvWQU16ZW8n",
  "key27": "QiwmMG8ZCKYfQ5drThc9mfnPC95Tpk2nD5K6HntChJcKRS9gA7Tdw6mkWR1thW1NCjCE8Tz77KJXdgBQgACp1mG",
  "key28": "5dBjxmmvznvNnRgb4NFSRR76KyQ3eWn5ivbz2c8C852zc7YsUgYyHzWSEPNemMFS5kV1ryNzRzH7RKTojtx1sJhT",
  "key29": "3f6hTh4Vg6oxVrxwHg4E2K7YhGtNYVqZavzKZYL24836GGpU9RWadQVnf36ak16DcyMJgPCZv5HDjhNiMzwzuDLo",
  "key30": "Ag62N5dDdL7Aqix77sWuvYUKa3kQ24CU2q8wmGWi1GwJFmoien52wEkwZzpS2VirYoCmVMb4BREVnTStCzYEods",
  "key31": "5ZuzzDY4CTokfMtDL9BmVrT1LEP2ztsd3JfEF6P4undFwCnPCkM4iLHfgvm1ZgszPzx5UrcHqtYLv528abUbF3UF",
  "key32": "45LMPsXQWTQLaRHjZaBMyK4mmTMsXocFzieAgeWQUGmZZZxfQRorwpNhJCgqgT8UG34SWk6QUvyKuBeK3z5VGJHM",
  "key33": "39d1xMfjWGRjSNobHipB9XYiWQkmNym6kdCfZ6swTug5BCnbbH6rXiwFQgZDrim28T6keL3PZXXjzKe2yiwFMSGk",
  "key34": "mDnu4cVQ4veVk9rEB3aw5aF3VB9SHprxrfb8t1dEpgiEUhbucERrJgUBtg1duhMgfRpkPoNKdVpNPH97QgNbQvs",
  "key35": "45wPbaR4EgUwbaWk8JXZiLSNoKpUdEPeCFTWKnSapejEjcHxGLLbVQTy1g3sZ6378ZHKQXQ6Fq5NeZCEJYYCV6S2",
  "key36": "53oxjVMraSNtHFLdWNpmH5UnV8s9dJ2ruswCaw5kuLXEagKQBXcqdPvCbEzRUqhHKAPokJAs3aFQtk6viHJPc558",
  "key37": "5JCFbPhurxHyM22dksR7RpZxDG5BQ6F8HhH6Y7hmMJWbmwEqr9WXjGrAc716nt2Xdh4xfQ2BX3XKiBrm6dAF8Jyt",
  "key38": "z952SKyuMbcneqStt9kdSMnfb9FbCfkYKGKBzTiKs3h8H1n5ZTpyDcWwT1jrFDbJyX4mgPd7Pg9TWjHVjUXkC3b",
  "key39": "3K7dqEzymjVmkArMWWtp7UvxNEG9dwv2r2FVj2NBmsvNKwUKDZWUjyjwswt59nBKoZ7UTRmypy671Fdg9tfeUzsq",
  "key40": "2v9D2vRTz3rzjwJ84PhG7i8karbsSNwzaMZ8z2i1mjhnq5aeSQskv7brXTiNHsTAkivz9QhFJgJ3qABii58QhaTQ",
  "key41": "3a9MH71jcy8kVFG6Ga6yaWiMckHRfTEKdSdRHgZyeAaHkZZDnZHjrMNCrintx9pxqBVzdsZGBYfS9b8Y78uyzVhZ",
  "key42": "3uffrDHJqQjdvvwdH9X9eG53o13TGVrZrJyGieySFH7HvnsGEiJhMkz6z3XZZ5VUGpjnYPoe7CsidoSSUWvk7HaQ",
  "key43": "4Knchbkfz6FEtmgGG4Fsqkf1P5FYjJbmSaYmYsa8gkqUGmDTiRQ9zosVx5EZur8npKPdLXBfSFtgYvwC6vNW3nAA",
  "key44": "2Dihu7MudxXBzmr6ieW6u5hGSXbdfTzMUepViSssWNgSM1nTFhoz7WT1baWMhmMWFEPcWcBgszpWRTwUGDfPHAaB",
  "key45": "fAteipT6u785JZqPi7gAaaGoR96ccpE5phxVvcKoArPxe6KMDAyWv9oK7nbmLkRcKPHYVsJ1E2QB97ErGP1tG8q",
  "key46": "353rvL7UNGu7Aqa2s2V7Qn2AksnDzv8jD666xs7vnCLCXWNy7Kioh3Mn1MsRC8PZ6WyNUyJx1b9u7Ej3ntfZiTN1",
  "key47": "Qk7s9eEtY2aZkVo6WMULdD3ZPy93Du5ou9WxNJrbX1MSVYPWbtFXLdMjWYX93ZhPjvdEbe6usb7FY81TveLwanp",
  "key48": "5FbrTAeXJpKiDeBqTQseukq6pzooW9KbpydsKMZk3nZ5dTwe24W9XTktozfX2KLyrTCvKny4LY3YyA8VYNZoQHwK",
  "key49": "effJ7Ybc8ZRpRo4d6rTSKi6sQZMFRtFZmstaJqgZuyvXNWcoLMiR4frEFbNWGgX6HHuEjpq7rC9BR5WU2TLeLBx"
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
