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
    "3PHgMTG2r34jF5XmKMEg7mPoJLwFXnUGDk7raur2kntU8KXzXwLkhhdCj8qbDwEEAThRo6E4YsmuWb6Av1urMAyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Xu5gmgPR11RC7f9X9MhLRghNER9oRjMwwiCWSiZvT9yr24cAdSWofJ5dHVPaWV3WxLKwTKZV2yQmPirpBACW4h",
  "key1": "5GvoEJKvcmUerNgtxCiyv68aCLHfZTEFqFSa6oRq4LV34V18LLs7wADLJN3k93q98En1UaAZ9xNuLRYePE21hJPx",
  "key2": "5FLgCrZYaaMMDgjPxCjUT1sRG4U42iik8xrYotT9azgD35KhgjTVAJgysnLc1LKh6YWhyjJkkzYNZb5nayNU3V84",
  "key3": "5SxHVV6pXbAUaX2uMsNoWJpbs3fgcnT8KBomNQNx7ENUm6AJgXDXma5qbL7PxDCZUtDQpZskUJMK37d7Jd4pSJvW",
  "key4": "3Nbr9Q6VV9PHjZtfQK5rGc5NGfjGaYeiGzuQoHkKdAqWrVbZF8cNDYhaevHw3yEEEVHZbnLS2FAruLWwThuTpswF",
  "key5": "qmHs1KCZRAbYGW6mbcDU3GyE73hcqURNdJWdHwYB3wtxJc6qx2gHuzV4ESPvGJSkvNzh7Po61eRo9MkEFcKEBZY",
  "key6": "DvQTz6H63SSMEKy6WKpzoij23iNfWaSo5cRTaE78gj6YpMhYA2xvUGzp4454HLQiV8nLbw1kbK7QSSMpcKUYs1P",
  "key7": "BojihM76DmU9LwUiFxJhndYeTZ4xsZUxYwtnu3PgXp2hb8E1VnXhCCY6iceJFTiu1mg29hL2hRmMuBbWf91ZrTF",
  "key8": "4DfwJ86VvBWqSocwh613tGxsc44JaboKUY75KByRTyzDfXRBGZkLnEjBRGHArhEBDzhpNepRkNoFdhZbjiqGAJgV",
  "key9": "3zjrLVRGyoYhsx7msZATWA3wYt2nAZutUapzYBdRrGqTmK7eE8UpHz3JpX1Eq3x4zqamqT7wqAQSacsRxgv862eU",
  "key10": "CWK5PXgTCv573oRVLTbtYiFQpma8s8myKhrkvjgvuaqBzpeAPzRqsMpDE22VXJdeb3mkz6FF3zHbRKwKjXPLynt",
  "key11": "63bKDVEmYJqQ3zhjHEq6UVzZ5ucGzXwdaxG1BJ8CN7ccw3HLwsD2jyuL7rS7KNAuH3xuGtxfqi2YuWAgEz2AF9Zw",
  "key12": "5HwAw3dqdruLtT9J5aBSENPhR4RhA2gHisKNEFj6r4aisvmTgHN1GktPN954ctzejEJsdY9vdh7KdBGid44yKjfx",
  "key13": "5pBq9uumT2VVoJvfm2ixD5vmXw1cQWjYNgLnxW6nXHjwpng96mEsBKBZ5KtD6BZ2jNKANokqYR2z5zxJPrePjhAs",
  "key14": "42c74kYBXBKoHKZYNMYTiyRVtNghuWYgG9B8fLyEyi8QX3gjn9Ed6nBxpnp2WoqMZ5RWMFdWMBLMz3SGEp9E43yT",
  "key15": "47ttxACr6nPBsaDnWZSjP8RRJkyBYAJj1inAwv6iwHsns7Na2oTiYPbD1c7ckiVZTeHPj6g7Dr6ScFLP2FUtgfFu",
  "key16": "5GTskTRLwifm33ALx47cujqR59CwsFpZrCpYYGSuRom9BGh2JTAohZn1jnPfPXgkGyWB4SbLuqhBiLwSw1CPPZoF",
  "key17": "5H1Vdp3AUS6TUrDWVkjCihg67ZGCyLSuBSi7EqqVfMiDhVRXg7faeSqm5VFZAoHFR1ektG9aSUG9pK3VNF2UJ3WK",
  "key18": "2SCj8vXjefWmQ7EEEf3edXeJf4VH4VQH42yYBqMdbxkYs7bamL3zp2e555XC9kaCxPASxmUC6bbK4ZafwdDBttCj",
  "key19": "U8Fy6rczh2fVv2FqVKjJurDMmPZhoQLTai9DugwiCmjRAcmAjAWqZKxudZdYEZ8Wgr9vJfdGAZz4fKG1ZHMtEvk",
  "key20": "2y89wPx16xqdQfCAesvv54uHQCPudwpbqVrWGfGQ768MqYvvHCQPLpZqpCMntvshdUSiLXgZKvtzxrgjrxqVWvvg",
  "key21": "5xvNKpRYWVr7h2Vj8L7QwuvFUEDTE5bmShMG8gw2X8vDSCjdcFpCMdJAijPnzZJdFQ3NdmEj1eREknXWHa9yxV1p",
  "key22": "GfLMxQvAxzGxBgNK24VsptAswDQjahM5xREpsc3iJRhcjVwjwgrktKr5MHKoVbnyhhciaSWxvPESLBRyycEMxs6",
  "key23": "3GTN4qRNcB63S8mT1NGcb6ZA6bep5SxuaPC9jSLzVNhu3hdBGqUg8FZNN5rjWbjZoKLAYpCVrf54udibaB3AXjUS",
  "key24": "24drPXT1hFqdzk5uLgs8STmR9DxJq4EnFt93k9RusURxs6zkHLopaa7GYdaM1KbwVtSbuNPA3LSiPPd1x4DzHpVU",
  "key25": "31NLL8kCNZ1kLQwWdE7TXhBDoSFcZi12MLL6sPYHu3u3exkLGWHHvdinoMfAEzx8WFV1be8d1zZhCPSaEA9EUVXL",
  "key26": "2EKvPu1fxRfp3tmDQP8DhDnEBTjU9xW9QoEStmChaynjCLLkw8PA7Ex7AfcjZ1Q2c2vhvQSy1Dm8Moop8jjxMMw3",
  "key27": "5pGc7q3aVsvawubPKJfLJH3TKiYZAieFHF2kA2RZ25zaAFDpWXSvuqx22QafdZ24ncaGp2a5eMtUJrSZp3Q5qsZ3",
  "key28": "5txby2db4pC6hJ78FVMwANLDNnjerrSHrrBPYgyqDbQQkGjsr6tanyzsnKqztpQKmnJNK4Myb7KN61D52XAkKUnb",
  "key29": "5m5xeCse1Ms8MarHdcjwjjHwjLcEAd2uLYsZMA18imqTG4QgteHhBjRB9SJRJ9jWDPbnRCbDBF3Tuy9E7MpZDjrg",
  "key30": "2KEgH2xPTLUdcYHVXDhgypLaWkwmpjrhDYFHN8xJqUu6cMBFS6yerYyE3t1zYCXLAgH1yGchkyMc97GF2dccN48K",
  "key31": "3QzMxNrz3pRTmUjnhiB8XtJ8ecAni31cZafd447JVge8QoPMjZotYeHEL9rKyQPX2yT7qKViT4MhVeUssZyZ77yi",
  "key32": "6uHZsVbzxNcidmho4Kb8pSvjFJP8mXSicE5oueERJpkUHKU3E1EGFfQ4y5k5PN9dJv7QbAmqQvGEJnG91kyaqfe"
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
