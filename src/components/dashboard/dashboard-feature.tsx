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
    "4d7dhMuXYG7QoHMpYyWRhXXonjTeHX5GkzsV1UQp5rAeLWjoGerRYJvzg6hoCcFaeqiQBDuN52XU5vrw173nDDD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56GcV6ww3Q5cmERjjrCSnYfxpmgFiTaPrQaFVmQR8vbgVFxb4u1t3aQXrZeWKMKUd9BFjHFqLsd4VB8g1qwc1Fd",
  "key1": "4n7Qe15zzddT9qkrpC4CYMgfTW3CEVEAhSGHd4XYenT46pyEdkZrP8Wn3SWJqiCRE3ysvKb8nCyzhhgERBjPe4po",
  "key2": "3XrLhgKFUHvccxH6ocTSqEgyUjgaaGEyLBc3zZ2RsCFXNEy2tF6U6f3XPGR2SUdSEaRatgGiQXdeTb2M3tbwCDFD",
  "key3": "2kYNxAbKMpBDe2WBfSR1Riu5wYS1kGGGsHxhN9bpVaHoLLb65fZkTa9kWLj973dUofCjLPNVCmngMrqyYj5PdnBY",
  "key4": "2pQdQJ1axsi5Da1Bc5pvT5xcmND3fXjeHnd3sZ1SmwGN5q3PmNHaqwd59KQN7ZBLJH33N6pVUDKWC7X3uTcQWLkd",
  "key5": "4Nzb2WdN3rwTdG2PJNw9UAyDzK9Lh9zd3fYnP6dcVc16uQxWUSzrQGZeZk65T7rAgAMBN9QsRecjm39BsTd7mVXE",
  "key6": "mCJQv8Kc3LZXpTL6MkuoVvsvvUXKbLsfZeSkKRbZG7Cw57W6jBbuNm9HmKNQtntmpTBL93d7bi8ABVVnK7yBFhF",
  "key7": "59rx3Y2a9jWTjcvRVHMb8vWbReTE5WEp8CHuYWotPw9CJoTbVTtoEbAvQwu39rJPpLwc4miJ8xx2NUgKRZ7nNvST",
  "key8": "x2HMKWgBqAm1W2X9oGEtGQnsQ8rrEv49KqAsTyBo5uhioEzj19YhVdxvaUn8Zm2CJDkFjSNDeKBeZCV7yRW4RXR",
  "key9": "3o52vUU6B3Aj4xxfrbjx3rUsMWkjkvB7LK368PpyV8KhpzYeSPfmMfSm4D9RqVJJ57KufB4U5mvxZPUkXPXDT18u",
  "key10": "4vCBpGx57hxdZfejci61vJTbUD5dtZJaT166VHuhejraGbKny1N9MT5QgzhoZtDJ6xcKxzgDFx7t2Gs1pJTJr4Rw",
  "key11": "5PtQDuvSVL2Y2ryEeicoxsKMZSwJwf3f4HVG487gBpLhWXckVHkfk44atrStBkfqJ4WuhLfAEnEWSwc9RYMRLz8W",
  "key12": "BLbobJ6KaaeGhQeqbcJhafG19srHkvP6hSkroGpcmL3cQ7gqVrVAwLF6gHWKYxJ9D8AW78VNvGuK7c5L5ZAGcqB",
  "key13": "3EBq9KkVPDARxG5aMmn5PeGiNySQX31qKHx7mt3ajaCkp5vC2FjyAKJne2ccHDZfBHjbPEaE9xXLTkBVeMPBuJL4",
  "key14": "25CD4poZuKvRDZSaKrJfE6oSNypE9DG65eQsLzLHohq3Ybot3hpoXCJTitcDomLi6DXkArAMp3XdBDznst4DR6Gt",
  "key15": "4bGt1Pwpn3SpYjgdn1J8ekQvUDwh27yDyNm3xaqVjv1EcXdmv3TUYPD5MKBRG9K548PC3Tcz1wFs2C6vv7yoQp2t",
  "key16": "CCMnDuwGa8njQ4fsBpmG2pSypQLuUwQ6szcgD2AYLcLWAuxzet4ngTchGQV6GMn3mv2EqirHgXcnLgFG9wH5wt9",
  "key17": "2dNTpRTm6rpVLCPBQycr6AyNG7mPRFGESeegvhoVZwzxUZESKdpkmj9XySkZ89LkJsefBbwkj4YVDX1M2mofhZdF",
  "key18": "3sB1KzJ2D3KD2pnwqWVXadW8tvWdpUUZ9VDhVH5Pk12dDqEmd7N7eneJi7n8SULgbBjWZehVSKGDCd7ogR3XoVp",
  "key19": "3RhUAbT7HSmGVVtQiN6xmCKG4ZzW8spiTiaR96dcThGo2dq1X9f89mrHgJPccLtv4gA4g5vMcTVSSz5HZwejN1xZ",
  "key20": "2Rn1MTQFE37e8K6d8oYaJhzGYozcmvo3PwKV7Eax9ztC3WgQpp5yVSpciVBZp8Dve6P31GziCBpkULmrBW4Lv71M",
  "key21": "7wefuDt7GKr3XRSaSHQ2gPwQ8tdpRVnX4bNKyx65FGaQWH3XCBdt2D11AdFy3deV2moZgg8qiVBBUp4ZBubK9FN",
  "key22": "2JTu8yDaDXd1G5QNe2UBNtZoNAp3YgTXMXtERZ8NgbmDSDXnTzWb4pBRkBNF7z1yDdSc5hjg17wMgKPNudxnHcWB",
  "key23": "rcKRDqbX9vFeK2gwR6Pi34kBwCCXqPEw2B9aZ7PHWuVYj1cjSKBkSXMS1KFV6jUPpSBLgwfh63aRKGro62pTcMg",
  "key24": "JUcucZHeJXy7qe9AXTHN9ivE138qZshuLkvbHE4xM9gHc7KMwjncbhazAKGrCshHeiUTmZgidyKqnwiQ79keQdr",
  "key25": "3gkoK3ixrmrLjzMqt5AsT7V2YYtTSy1S3LX12upXitGtMkAzwiQixEUz47myvdL4AbiVvtuEk4yZuteNDTp6jSEA",
  "key26": "5TUQ3WGhrmhoLwNZSkSaSRdtAcV6smwSYFwH1qUroo6NDSUTwDSvnAgCPaaGLQ14AEZ8u6ywWa9TQM2LYSTqMpWu",
  "key27": "iiEvXCboTgTGMpxu9z4aBqfWLPCpXCgJjf5bbHD278pktAwS6BnxFpTB4wrdWSHBH79SB1YhoAEEmnhSzi24K2D",
  "key28": "3nGsBwSFCn9ZH3LisVPLMgxKBjPTFkcMNAjD9eXDuee3a5aUbym8ue7wxHCgqXRbf948HyPNSmae3BbecNRASyHS",
  "key29": "3t55r1F4hxseazZuUfAVteVkS9u62Bba7tWLo7YpCM87QNpNVAgbCjsdnL2wT9nxBbWCz2uM2cxKC5rK2eFHyHGv",
  "key30": "591FdvM3DcQBBNEtEHLdY8kWMRPSbqcwTtccSWim66BstpBodPo2F6f6ou3TX9z5ProqzWsVcZmZr56kZVuLAqUd"
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
