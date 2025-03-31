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
    "5ojuz3o9SxTuiKc9yZ3qdvKpUoV8vjfWrdawDffKQm7PccAUbdkzQZgdFyN1bLrceufVRUSCLvMKJrUJSD1BT7Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bG7taPiRZA2X5QxLdPmqFp5X4VHA2qnUBt4tHv2m8JkK5dcijjfBcmT1Lfy7RevtFMoTksNm5rWs265nENUnfCb",
  "key1": "66YvbLa4GVr29fhW6xVEW7ai6N4nB4JMVafesE9snqS1MjXnMAxWAqLDGk1txaULnoDbmdab5zctmCtK6wX77k58",
  "key2": "3daF9iRFyNC1J7FeMwmN9U95QJFHi4pgYnMeLNNcHtggfW4r89wiemRMgmVyC8mmUhFXGXL3RYNGX1MPFYVLZQM8",
  "key3": "2hJfwYy3FzBBdWprxsMT39h7ukK6DhtiahoCXbuLhmt2uUwEGUjUtTYiQxXBX3Ag5UC8kSrBYNwx5jD1L45cw9DA",
  "key4": "3qvaS4vM1DTTfLK366mzALSBT6HLWnqdYwjPiNga1Je3ZXfNMBhp6BtSQ8Npt8UDMG4V8au2whGjZ49K1LWoh7ue",
  "key5": "2zaPa8PWjGRcH2HHgmLqkWFcje4G7uR6JnbWykZDwoy3vzz9AQ5fpwbAK9NU9yeBiRCY829ukHXYCPVdaq7i4wAN",
  "key6": "2BgejLqou9nQT6Zq72Q7ScRzdahXofWYoWx8iGzQLg3HiYngcXVm2BVZTC5aCwnbfqrbVXRT61GUia8xZaztY2WM",
  "key7": "5sQ779A8bCe828EjrGyFHs9ouMULuEFkP4WDPHbZHS5Pty25fhwfiDopYciytGEr5fy2VCTw2RcV8fBMsxgQj1nR",
  "key8": "2GLCs4PLJ2dpSEfN82E8rxoHszUFqmfuxnrNhp4byrbYHZZKzab1HuY3DVTpwnEAupbFsWn5F9NLWqTWnt2pDAtU",
  "key9": "5Ar2V5ydiSTECtYsPYtLDpsDPrhuT1XU9f1xrP4F6LvicCQaoMoQ8DnQaWEw2WxBUAj4UsgDWHc7BCCEhn66naf1",
  "key10": "2SF2NnM9fQWj9vdtDiPkFB1QYzxvbv3uqmtEpt3HFUBvv7jjVwED3iM7zqaWMgb5QHpEV2moc9oYijg51t9A1MNV",
  "key11": "kw9JN68zbaRfcRuSv8CJ8hBbRj8ErMzddaUGBGF1GBKuiCLryXkuCHcKMxiQQsbX34fxN7Sn1tnVtSK7RcMjQCV",
  "key12": "2cx7qR21D9zVhE4N6NGmdx74bocszyVx7MAoEHUxhks4GfQdNgqho7QGiXMs6ekr9k9pkiEvYbDYj17wh4ZoR8ED",
  "key13": "3r2PhvhL2ibFk79F3zRi4Au3oVtwyKgoCi9qoQRCjdafdEnQN5JEQhsVXycA85LUGJofLEgLcDv8Lovb1SmddpF8",
  "key14": "2rwRDiBxxr7CAsBYL5zHe7GEtGVsX2GhS2fjL3rxW36M3DdWVSSrd1M89oskMBh8jtZNBGphSUStnqcqXxRUN44A",
  "key15": "cMivcXG86bCoEAHnN6jD5Lc1iYC4gYaYMySeFZcSeSMP8Ei3ahjGm7XjQbaUncZntYQ3dW9NmpxwD8UtNDe1L9w",
  "key16": "4CGhfWmoyBCMfnfWHXn88LahqhsYJhQPXryGrC9Njw4hJVkUU77qoVLYdXnwWWv79S5a5pcWr89spugfbRrFVNvB",
  "key17": "3DVoKaNta2VEarvxkv45SgirrjKdY8mRZZciyoxP1o8srGSZghqUyCAWFMjViVuGshxG27S5MM5BkMfAomLC1Gip",
  "key18": "5TXQtSmJbADPDjwFYRrRYnUxGTdZN9W7cppQdtcH7ENp6UojoeoVxcRQacyiy1P9WeFp89FGmcrNGANz1MGq1PiQ",
  "key19": "4Be9QMWnq28wPuNqi745qp5YeLMTF2S6qbUJUxQAbCnoh7hFAmD9ndqNEZdvn6dwHBbqJLk1EzzqGS7Bn1a2GVaf",
  "key20": "5KE2ufLdgkJisaXenBH3L1g6TASGwjAeBLqfNSkQL3f4cbw37unTCMqLkXNGdFbJqEr49e6AgbpaS1GBPRGuyEo6",
  "key21": "57DZVw53SXTpEHCAuTkrEKoFD2E4Dvm8jTfn1qxJjxbcGSedwt7tXrmx3nRCykmELm1em7chyoP7hunRHRUDXVdy",
  "key22": "2mAYCEnXeP5ibALyhiuL9vRDNdCLmy2r85c4b4tY6hZN8yseGpTwb1JuKgmGzDjpRfHHBQtFMtNa7nHgBjeZrPzN",
  "key23": "i39JpxSmnWTZiHt6AhJ8VRhpELYaJp2rkdvjFvsbTxsRzkcPLSb4wX3Eq6bH52KJE5X6UDC3cEBAaCmKZCqc7mY",
  "key24": "61LavF2Qe2eDY7inkYagixFCjnwNFBCXkSzYo9tuejkVQJNqWRPa8Kk98szgCWyfZUxCNZ742CJV9YY4iGGcsfDr",
  "key25": "55djA2toJJd4V9EAfappeae6nr36YGjfYBrsS8NXPdmiNhiD2N4FduFDktJBZDZ1ErinWmveUPvTg2LsbVfs8AZZ",
  "key26": "2P8RfgzRkiKBiXrr7pEwyvTiTJMpPGxRgf6PUctrN2KodqzAGNTxrFBJKoiixZWDFdCxM42vVex1TDDKCxyG7FJR",
  "key27": "3HU5ZYrrev7YU4Egur6XvUFypMDHMDLJDs9o271NvaDVfaVAscqKUBPnZC6vDagVuHABVtSVoRrE8SFcqRXBmWxL",
  "key28": "3xJvuAmeqte3tebJCtNrRWAbMDB4qnuahtUHUNvHH13JfNQf354YDmwRBza7HoPemAXNBYt193qMXnYrCTrwqaZR",
  "key29": "4edqjuk2xLcLMcSyHAuYfwQtwqQxKXJB7hYrSUfxrPEsGtZzh2td182nTqe4n6G9hnWA3CfhvsFTEfjX6YZMpjb1",
  "key30": "5YBoxvJjE2536584UbMq8pT6CCorQbHyuREfV8PCxfTqCvWwfyfatJeP8jhNYpydCASKtMKNS23q1fQwVDZrg4dc",
  "key31": "4gRaj6UQMPfuFKNRrMxG6RJqGQkEdcxyn2dS2vQnHZ7e844SJKU7t7WMrbyZweuBXwUF7QHntLRmzCELPY83FoDM",
  "key32": "3UJiDmFcDCsZPzBdmHRxNBWaQE5Y9peC4FTyU3RaQPQ21wTjLbajd1JprQ5xvUbNwZ14LJntiU8QkCU5HhgiSHZ2",
  "key33": "5FbLNnYCpxmucZTNBViSeAC9RRmmLLVha3JXXPB9LD2nc24wDtUS4gLSLnMDoNyooVDQa13zCvcudhqwfewmCj8H"
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
