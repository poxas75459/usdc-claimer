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
    "67NAq6Pa9mGjzSWhNA8aQZoKV3jwFbTZp6pybonaiDJuj7dWFTBTnM7ctGo7MRhKFtEY5GpVRq46HutpgyB2GmHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58gzJNX7qwYvPDMxw5xhQYjw4kcSopnwakSFAJJ1w3PZBAmRaLKcjh9VcjYnqaevm8fBA8q2cajY48pLrArMPt2K",
  "key1": "38ckRhECBThBMFA6oRkDmXMfBFmgqb2A4k5UYEQV4i77vcTsuQhMYgKXy8YekP6jWYahmFD64aeCeQyRaE7uXY6P",
  "key2": "3q6tPoLULNYhwHY3t6g269YpqkRKW3teNCwvdCePDkCaT5HNtsb6btMRghEfnkL8wmvS5W4TzhVqZeFpLmJM9Kom",
  "key3": "3Uiy24etwM2qVyTxU5mon5HkKDdS8Q1XUTT62trzdHWFmJdEdLLkYNUqPZh47dqxd4vnDRhHQKwhU2aBXybdSNt1",
  "key4": "5fr85g2HceFJ7ESVYV3VKF8o5XCn1KgM7WmQ88kDxbxsG26RnsP7c1D1i858Bg7Bhtsw4wBf9dNS1L9vgq6BwwtU",
  "key5": "4ATh9bYZoauwwjevQTo4sQsqM3RSQMeRjotc5YQcCKhCQrSZTuJvRzbFmjFnGN1jbdNryB4eYSA8DzUVK4thNmgs",
  "key6": "39HC2qrc9zSMcG9ksySkRHzxjthvhBYs24NRKcLPiyshtRroJnAUigxHcYpu8zvcPoWe8aA7xwQFAWYrBpbN8SRD",
  "key7": "gkJ2NZVZMng1aTac4s3EQjVpu5UMwSMXVSLk6vSf3A6KJJJjXBKQwr5JQicto5nAQXLntoAmpCJieudyCUDirwa",
  "key8": "4DRWjYw8z9hsXoMcvyQb2W41fWSLyjknsp17XtqwBgyJtcVnjpUPbgEcGtL1cagc7HGK4dcdTjWig7VtxLuJCtX6",
  "key9": "5wDnP3AJmEafCdLyNazmzNmeJ2rCW2v8Y25gU5w6NDEZiuj7m2WXRRmN5aTcax2vJHmJgC2PQBqbYF8666ANEZFP",
  "key10": "3TJYkXxUxrpwGKEg2XWU5ZgNRqAgibqtTJmm2JehF1gvBkpowpG2vWgXyK3Dn2y7232Hr8Ly2pFKgLsTUYsUvrgX",
  "key11": "29udwoW9FU4Wq4nm97Ax4NGJWWMXJsA2oJJea4RCq7Nkj2t2SH6ug9jzsBRQS1ea8WZwd4wSrM3JjKFcwqejGbdL",
  "key12": "2DPoFssWmdMSmf29YUfPnY38vTAdQwXKRW2CJ7VVVGznan37pWc1y7jCBWTDy3jq3rfUbrRgB6DZkksbeDxwKq7i",
  "key13": "5BvwQkXQT3Rk14QGHhxZFr817QfyaVQVjgnxeRaFisrg8X9F4kCJdbT9f33TWcGHLR84pqA4u6hwQhLRnKZsUiFs",
  "key14": "2eVeXxrM6GfUurtWKGSiAY6tM7L2E8YspEvtCTcPFRzfaSnsCoY8Sp3fJAzh6J17Zm6fkd1Dhe62o6txtRoMmKV2",
  "key15": "2ePRJkWJCspsrmG62oKQ535pKjcfDFFtNacuvXVAoAJ4c9SkgBL9FRjx9Pjg1aMN4sNB7bNFtNahRBLWwoouKeos",
  "key16": "4kmJvYG9GBD8x2LTGEXdaAUnzmBK3aXXQzoXxhFc5eDRBxxbcQKi32ocYgvRtFaWjDDtJ9HwVTWGt2zDW6sxRtL4",
  "key17": "5qxpjs4gBEXYssZSBCGtRwcdcv3Zar1GH9Vp6RGN5gUrYkujdcP8D3imaKRvaZDEWt2WiBtMKiqcqHwZvg9bMjgh",
  "key18": "4VQQcqKFsi6pevcy8nZETaKPvUEYrGiSzchWWWLaLkJNHPDSrWbXWg27XZ7gQE2jJx7cNiLVB42oZND6HcmMB8f3",
  "key19": "4UJsqBb2Nb5Vd2jfkBQaoD12865Fy5vZkdjVddQkd9C32zQ1xoLkvZj8AQhkz6Pg2gvZCvgyQiDC4xcQts361TEk",
  "key20": "5ouK2yyvV8ZhVQQ52S4yJ33qU2AzMxqCNbyXtxwvapQTRF7YBR8UJ22PxpZadjd9dKmL76weshGBsKMzVHfcjWFJ",
  "key21": "oW2qD1nG8zpPaBuXiPgYyAdtg3qGfrB4N7RnCj1z7z2PC5JvTVe3PaLJ4tNZ3dsXu8vcE6F6JKn7QUuL9BTQyXd",
  "key22": "HsUugoGtBGRLpf6C85eHtXwcqrNDSSRyX1ZpsZiexhfn3d33hEEsXkBvg36qrZBE4iYDW54XwQH7hk6ej3BfSGU",
  "key23": "1yjDGyr6jYiyeTWyMRFpkoJENsqDUMaCnnCCH8KbZDLSYXzKF7Ey2dZbg6zmKjJpe1MfFDbG3FSEBh7TdLBJr9e",
  "key24": "UynYU5SuRcbWUpkLkKP7gkrDMmrr8M4BL3pritQ9G4sCwpWF7gZctB1XiH8MgPRLn8LUHnTY6KJe3PMeieczuof",
  "key25": "4ZwFwXNq5h2e1zStaKC3GKB6hWvTfSWSSxhUMbQxMgjaiieXtdRPVYGcbHzzP9hXtxXedLGbNC2tC5VKUFyx2B6Z",
  "key26": "3ykmDbfe7TW6hTPuawuWzzJQHdDon6WnZebpn2R7bfanVT1NDNzvrL7BW5cHi98SrPkzwd2v9ycZdDPPkUHpY5Wi",
  "key27": "4jx8z6z2H4zxpZU9GQ4hZeWCFfsRm6HX4ZEPSAyENbJDshGLattwHMnzpHtgiAW2udMCDT9nbPHYdZAt7LKzGDuY",
  "key28": "cd2q9aVbEwoHvTEyuWRxBhKTjkLRbJQ2wNUv4quFkwQc75T2skC62umpUPkXhF6QxFpFr8hzfQExcQXBWtWTZqg",
  "key29": "5CRRY2f935GUyaUCujyBgTFfj1DQJUFubw2moBE9SpJCF6ySGaujD1Mfvoifhe4EgqS4vKu8FJfHd4GDHzgZFPVE",
  "key30": "k7p3tDzDNkR8V4sEPMiphGya9DBNfscPBmRwUcRpNVBo897mQpSX9TwVheSU88qJAnNFbBhqCSpxtvfi97q2FGY",
  "key31": "5b5bTpoAXxniBhAgsKPrcSe7HgViiymvd9tsup3taw2M9W8xxV6gDfVsefmDBwQmWmpCXAT3au8JemdGvdnARvMr",
  "key32": "63WrCAq93JDTX5HVChE2pvs4arRrB9peDKUDroaphq4u9847fjqdgDuknxA2c3eaZgjAzidPHcwFvri5HBY7joQ9",
  "key33": "4JADAY6t1Y8ifQd7x8K8zQLNfPXv5f3PA6kXB5DKTTcRubY581Pdd8gLERBRft7HexHDuCJQKxkY19kuwd6Mkrow",
  "key34": "utN6AimRj9BHHevQT2tnh3SvzsHSWB4F8vjM1Uv47xuyb19M9LnLY4hCVZG8KSzXDY1JbSgkBn3eYXY7wkXVv6L",
  "key35": "4jCxgewWqv7PspJSxrPCtqrP81Z31Hk3bxKBqopE1xyCxNr7HdHuCkAR1LCs7VKi3utfyrfPRJrYQsAf4gitPPqb",
  "key36": "qFEwQ6WvLY98mVr3yr6hzxxWntMpz4HUXLLBVpmqbaUAEGnDMmGkrhEVAbCMQoGPWA6riGVHrxENakSiLs8pdxk",
  "key37": "qvJV7C8XYcZpCAMN2FSNZjZKduErfaREWpn8v2WX6afMokRN8Xn8KJ4bAb3a6BiEjcLt8WCr5cy8Uq8KK9Qsjku",
  "key38": "5cvErBVJ9XFtp5d1TSALn81cSEb6n5QqGF5W2HL2hRLbjMRVWnw7wPUNLiSUFeWEX9okXdwhmGdgEWEz94xw8QTM",
  "key39": "4vjqJXdkaNAuxBTGfxQDWuLLeMjLmW95TWTLLve8QF9WhoA7h3XptpzBbc1gcgayp2Ztw3gf7fQf548S9QEwNmc4",
  "key40": "4ekFR5pzNFA9eLi8eiNmATcAbRKSUHJ1bCfTDLrphxGUVgApVg8z4STGjHHuRLZ2kEWHpw5icBzw6sB6eBuFCUbg",
  "key41": "HsHBpUR2nSVRev9wmPFD6StA1GNfsMVdsLPKDDdViDqcrUMPBt3HeMcnY5BnCMv9r6BaetS5sBCvTBni7gQtMei",
  "key42": "5JyTdeW8v1DCd7pyJYKXaVMeqAN7HfWJTWpP4N3WsPrcLseNkT8kCRoJLvcKjmDDUihZN84j7UZVyK2dsWUtfqCd",
  "key43": "5PW1aR8Wo39FwQZ55kiwUWrDQNoLqG79C6KXaDLSzxrP843ZmoRFQb3GVE6Dn5q3xsrMqYXHBFhKSYJTmVA8mq7B",
  "key44": "3FpZ4PqqAVBW1Ru3wJc5X86FAcSmAB5sR5g4GHMpYBAUcWqitVvGc6eJSF99m8ZuQwkgHEDdxJGjZgxCVK46g7WV",
  "key45": "5iUmSwBkb4aT6jii1jnL2RJgpEqZdQN1VMFG7NfRjYg7zWhp6H9EBvKWrXLs8yekXRFVUBZcLqQBTo2iqNUBdLuU",
  "key46": "3PkJ2c77k6CbUckg1oEY1CL3Fz6QSSZg7XuSZ9Bavr3Lo5mbNY4YDRtH7b3Sy7GthGPAZero4m6MRHCVBqih5d7W",
  "key47": "2GL788atp8Q2u2kdzoZeT34FpvG5yMoJbssnApykrUzXQr7PMKG8FbwRaNd69XhqGJjcXDyLCWUGyinK8xb1XgtJ",
  "key48": "2nietBgt5xuURsZ6AtDN68Ct7xYD3uXJXAyX8kdBknD4Ld3MUACsmqpvzQR6nbtQSxpsxHQQrZAxZgzRnKPx7hvD"
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
