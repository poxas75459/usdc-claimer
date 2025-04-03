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
    "2SRerNfWjKY2hKstdXr4ngHmnqkfRqekhWAhm2qwXx5bdJaCZkPVDNpaGf8kcZn7vibgMmbNu1q26DRYPNz6mMBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2iv5F9C1HDrASehuGVrHYYbSeEtLNASAN1T5wgY5JhvToBGdgzVQg3NYUSoSFAGC467K35x8RkcF5VbCnyp83V",
  "key1": "4pTb9PtN1KRnmiYQMcVXzKgVqrupTHzMXuyWiDfjNATcCjbqacZ9TbZFEsA4FRs9w2p97NeNyAYvFReLqsMy9MyD",
  "key2": "4bk15SzqBEViWNcNt4bpZUZ8fqVyoVyV5TjMhPWU1Lao4exuxTKogLfXfcviYrHXdio82xBJi5pBq2Q4ad3hu9qr",
  "key3": "2CyPdE1gZQ6n1X4SdeBXVqocuCV8MXEHGkPnYUeZ6C7AhYAJqbnseXfFkvp79HfqBTVD413jobTmJXvbr4b2TwVL",
  "key4": "48TigTE9gaucuuopCqd34uwRhL6oZnmLDdtyH8bxXAtWCe8ikA9N13N597hcAwXjSfhxRYABkAe7T9EwUxsU8DJ8",
  "key5": "5cJAxBGL7ZS8Qxs1VAXySPELvgcfSXUc1NEHHnyHuT9eeup6FMKKtY4YkzkkNLFSYJFfHV4px55CeqEaFEJZEgNU",
  "key6": "yhynsppE2dh3SRR1UL4ojw7vUYmcatHCx3ab35CzanNi9rTctunawFfzyJ7QX8TDM6WMA66gm3N9Dsx3ZNd5ZGw",
  "key7": "5Si7gFxmige9P6askU95nP2McYnxivGXtojLAGVBUh4AGEF3LLMLbvD8sdU7GZ6SCsUSvTf5EPMssWdywxaEz3sB",
  "key8": "4k6pkL96GJ3oSCEqFJ9iGMriV2K3UMsotUg9C4v3EHd6M1cLdvrb7Ubw6WVRWC2nH3wRNUwDotrrRLhg9cwggQp6",
  "key9": "i4oc9BhtTSeGhQz6qNKfhNpqPLdFj9e4eAKK3bNpJg8JG6MVditZYDznXwKvXq5LUVgFcqc9wDLUJcGd1VkiD2H",
  "key10": "2wHBZaMhDSHWUEYGkKGDBuDvnrKK1Lo7RR8iqDEzzTZg9P5JKKjX8rNXJ9c1oTiqpdUTpmo1BETTBvSPXCvMefzW",
  "key11": "4LckvPmyCuf2DnhqTx3G5cN7PkZ6JpGGHuaZMystPui8eNUtB1kGJyHhPTz1QnzHccAEey1FsuMcq3NQU7Zijxxr",
  "key12": "2qrkhKMCjJ7swFNC6ezWiS4cYzU6qpCW1DVimarKVDWyYvikCdnzKzjoiWPsYgDvTj1n8goZnsGFDQMtzZwLYva4",
  "key13": "4RfJDDEHZGsUqMFT57GMXiShX2D11z5GLc3JpakAkLNUUmVwJaedHYaYAGeS2Ps136ZVEJejVm9bTaCfTAyGJsgX",
  "key14": "yuAeaPi2A6xxoPf92c1xX7TkikHKpkEs3vYescsttxKRAZz2zncAbAWFqqKAwx9V5H9ko6xagg4Sed2rCLr6qRV",
  "key15": "24nD6JWTNbVPGk8vmaRUSWfhVu2RCyhaKibyAXPjj5kp2wjc1Ax5nDyB6zopYtwvMddJJ2EYtRnxzQPGYvGc4q4B",
  "key16": "5w7sq59vGdnJjrVRggD3UdUUvjuuD6mnTDV9m9SMFrkqwamaMNx6bMT6QCP7ByXP2iHmQsDWBSX3qcLYfQgDwpF8",
  "key17": "dvFNxSRoEj76Zd49saFG2LaWkBqDZZquYKHqJkPiVRpLQbFUxv9BZHz7Tp3u6uvSt6vyVrg9bGTprJJCEJCeRGv",
  "key18": "5dt46PZ5kcb7hjCH5JBLeZS8NUgs7HPKf7oYPeDEESbfozyvezhJVmVvocWdnv5t3pcvKa6frffdLgYV8BgZ7sjj",
  "key19": "3U7s1EXBX4SXN3KWC7RSPRrSsGpgRJ2UrPPEwZKbYBZLEoFsnyP4UQBoWAdywaWs9P8NVNYFX6YDqfCceDtSo5Yt",
  "key20": "4RFPk4gBNrBGX464kbAvXRQQRNNvewwnZxKZjcSaLREpxpi2Xchkt7ccMjVud13yrBk41trk2Gvt2kvjiYbtVa2T",
  "key21": "633y2dDSmjHKzT9mW51jq1A1yDhGVQv2bxHZqyU76nZYrnbKnLyBhv8NC8ugopzTw6DAfyTiGZDAD2FGYJrjjZzR",
  "key22": "4ie4PMGop5xzZfmHzmceo13Q6ydh65rGbvEEQF3hoNAKj9C4EDBLJudhT12rGUAEi69f8t38vuQPqAWgcVa1m8RA",
  "key23": "5UQ222kjdUBYyiiYqu6XikvNHUg3QZfABh31EUX9LdJ5XLyeVarjz836SMm6ifxVTjiXaaJfR1K6fXnDzQm3DNRF",
  "key24": "emHVD5eTMN9aETN5yTCLsRW3XFUxsY3p6PBXzXhZpvgdYw84sKRg5pphXuVgTKpmJqefpkUiKaSUhhjxXYu3EDK",
  "key25": "3DEYSzgywz1rZg3dUkW6vgBqcK3diPysCHxSmmbK11r5SYVHML3msSoWrbvSMywUC2R3nMgKCwCEDm6KaYdfnTri",
  "key26": "eSZ6qYyaWQucRVEMT6bhbAuJtFyXtB1kCKnXb9DgrWp5aiNamXbu8MKDMDjryowhLidyyDG41mCndr5zQkqeLDT",
  "key27": "45tFtgJivSeb6F5bykrpT3mPcDM9CJinFsNW3sAbjkidLFCozMqk19kPSXak1aynCKQZsnvpFiqUy3UQ7zDg4MXL",
  "key28": "63RABXiXyew21xSDbZ4ywuezCqKzGs3SpmZsx1prsBH528Du5k4LpJWbUH2b4YyZGMuNcwVGNrUiUo3P8Kazjwfk",
  "key29": "244PVLbQE2wdQCaNjb25w368mrUjtGqh5GftBQbt4kQLCvjVDWyautg71CEjU7EsMZ87sZenF3tCT31yYs8HVx9Z",
  "key30": "4EVR6jUtothHeMptkMEDZkjHjjuGeuRFRP1wqn6gAVcz1j9QJ2sFPLBgfuMJwGWMygysyvx7EqvEKA1bdRsjViHD",
  "key31": "5QTpK52mmbqVY88NFDuKVaGAwn1cSg4W2xDHgHoa9HafM2iKRqWo8SdNuheyRnyvBQpBxZrMkL9ZdXDtMN9Ms7kP",
  "key32": "44Y3k7q4UAuBLarjs42XPUsj59ugnJTCDKcPw41rvw1FDRPKbuTjwfZvMG3zmrebrQuwwz9MpJj9PNYboRPcxHeX",
  "key33": "FA2LS9zGsnijBTb1hRGqY9po4BRaARn9b19cEySZuqFYr45Xj8vWzPxuZ2xJANkzys6j7JdUjsGRmyFoPiQWLQx",
  "key34": "yMm4xQrNHt3caEzddmKduhBSCEiC2zb4YvuS8rzJo5KrMpeoneuUcuoKij5bvKkAaiMEEHX776S9ACojbx47k7F",
  "key35": "RzYZF1DDJgdbV7f8La44FcsgHpTpQdN9Lb9E4W448CYxxXZcQ7cpsK3QNdWi3LQ1KHXTi7mEgHvuDneHjbTxpoa",
  "key36": "3NH7GLTzeV8ZMX1jdTe557WyvWmdphUzZyvtYchV4bLBMbTdxNvJ5AKkQcpweyz6AgHoBcpdzj5WVujSYKNkpuju",
  "key37": "4QAhTQffU2nnrkNDsJCDwHypuqATMu3MSYTy3tiBGaTAP1ib8GZCgVXtAakbwmB2Xts7wpWH4HmPUB6zzDPVFAad",
  "key38": "5MKprHLe2YP5RbWGmrDPrsZhXudNS8yPhJxMEDotPamEDcwwoy8BJf33sywerrAZrqqe4sQwrXvtXVbXcnfgp7X9",
  "key39": "2nhxKc6zmTyTZWcT5bdtr7PwdgaL14yY6gyUp2RLyD9yiwyRN9FnUnfoRRzqTmcTg2mSCGQuKLPK8J5v4LXegciy",
  "key40": "541s3ATYXX4y3ZfE7YcmrTZFp5nb19tBWN6cf4N7aHDRM9vvSA2r8A15d5VHkNGE6HpdeyoAjDRHjadCENpkBmkg"
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
