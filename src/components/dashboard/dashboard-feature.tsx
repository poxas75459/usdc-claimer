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
    "5Q7Cm2knN6DRyGLdeGVkMDhU6QnTrbFurcWraqjVBGyrUYquHERuqcdN418zUCcWtmv23rpZxdbdQoHG7jkFuxhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PbrWWHNrcTmxCMGWTJwf5vbr1yKM6KJ14XnkUDoENYv71z2pdK1KJY9mB6TLWeL48TrWxxCkyM5pTzDubMdtrWf",
  "key1": "63rzct1wBsfk7bz8CjewWKDRkmPkYathaY1NBkzbStSCFdKHEjUEUZiaxhXCsbvq7dnsLpB9J4H6gukCDvRAm3Z6",
  "key2": "3MUPkvPLLUnaZXNVi5HMKydyimECXq9dm1UdvNYDxVsk9Nq7khhAVxrs1Ni7TpUm3x5mmJiZYjXr9D33CV9akvFR",
  "key3": "4Yg1KaDYRzsDaZmr4oTmk4GusayEbDDDSKqXDTMLXwsjjNmyiTBzqM4GUrMh8bmcNtXif1RY12gU3EwmkYzcv1Ui",
  "key4": "5uyeviyPKMUfAsGS8MFUx1BcwBTkXd63KxjpyBpYgNu7yWS4NVESYCu67H1uHpnQfjUUaJZRp1rfURY2QAum4ezF",
  "key5": "5Hk6RLWTUC5ZwrTZhQhoNEGmuGMFPEWgiuLr399WPu3r2xoqPgvurem7cpRaMpkPGLgnJScchcB7EGirC6HZiK8T",
  "key6": "5icHVmCqLq8XCrrcDs97bpHJqxnLPT9PhUoHacY8kf73gxcAZkMCGHQT18QExS25sqeG5Uw2mFkGSdKhNUWa7zvz",
  "key7": "5sQfqh4W6QjM3MKWJdCBz3RbrxCC6nxwcTtaYZe2Wa97wpb8v826C5CivTEkRwvtoCeXKDZZSHR2hViJs6EeKzgE",
  "key8": "kPVWyDCuEBbPzpGovJ4UW6R6sQkS5q6d28KhFt39J8E7gWHKhurU8WvNFuaMCodwUrNFmP6RuHRNPTuEMRzWurW",
  "key9": "635wYK7BvWTkFQwbf8aQUd3QWCKQNvyRZ9iVRZ5ZTVG4kBv7HtZGnB2JRDMZ3t2iUYDiHjwd4QgZayZv1YfvW891",
  "key10": "PuAxn2FMVP3xoJ2SLFcSt72hbd2KeoGWwwsUhm7hz3wjx7unBme9FUjZ9nFTvBnDwdmc926Ay9xJ5W1ZM8dKFxv",
  "key11": "4Xo3ab45XWuXjsSReGbApr2x9ru1HZUvmkDCTm9obfhPvheSxNLsDqQvYBKcjdTbm1EcRj2xH6pK82WvsJqTUkpc",
  "key12": "EoqERM3yTtauEuQ1MoEyPjFD9jeFiejTfMHVuSTbov6aFdpTPJwwVbRvEAGbiZX1EBPzUkzy6ushJKTnz73PEfg",
  "key13": "318g8PcLSqobaDwk7zNVg9MqKYraM7EUMVsWNbfULJ8ekH8VzXshzwZd4htjkpDD56kQgZY78pP7T32NSoVap8dN",
  "key14": "2NcJfeGm1Ggzw9t2V1kHQPsewywtBUm76K9zqgjwZ5kAmYdWzrxeidJRYAxj1F9WaZedZnC75gLmAy9uJn3yagiR",
  "key15": "3QG2UhPkiFcLjDxCNwPauzY5B7sosmgkQGyLNmd2Qx21ixXaHzzXFeav4guUViXTGEQGdJuFrmHmHSzXCiQHWkM6",
  "key16": "4bg3VJuxoBMzW9fnYbHQ27Y7NUZ8cjr9kHwTKCucfGNCcmXskvYnntEixVaYPGvy5t39K19BCzizxStjsifmnMXw",
  "key17": "8jeTN8d3TmT4rb9t5Ldc8vreQAQm2vbhM16sf923CKuQYbVS3pDTNNu8XJXB8X2L1GxwqaTTkYfV9W3iCDTs52D",
  "key18": "48tczprWAJ5cZ1FyWSUrV2MCNjv2FNeJEbwVgyy37FCgW9fYcGRd6n8YP4JFPqSTudSc5yQ7p5VbosGkVgnPZtwj",
  "key19": "57yczG4cqr93MCf3cBVY1MSc9VPYKmyg5EUnr6BN8jHif14pdXyd4QHjC69UW5v53maR2MUcYkkBhH469VKbEpRB",
  "key20": "2KFBTZQ5tuPzNusshYcTG4aP1qBsYKTgfTbzimfz3Pss5gcHC53mZR3smKAdQNiSSWcKkVf7zwdkLywXVDr9xQbf",
  "key21": "58KtH88rXxrVN8Mto6ksiYXtsef8NKSPGvjpHZHEpY7jwrm2MWANcrpTC8ntssgLJy89KU4v69jT1iJAqbDXBZKL",
  "key22": "2ffE6YFjB9yUdCCEAYndkzKxFBEzYoLTt7v9fSFf5ZVv7ssNQkQQiTPUzAW8Pth2tjHqqzfx9GjDaJ7XaNxLmt9n",
  "key23": "29ab4cfD4op2psyxZwaKcTWPzajDSSKCcHNmy5pnrnR7z8w5t5LFdvgiXGmwDZnjfPF3Hg97crYcbNE1LAB5An9F",
  "key24": "2j41qCph8xo2VD5kEbmeb2vNGMyK4r1ekLE2Lv4zVXoqCRA22kQL1w1FTopyKiZKdUBce1ExHtcveARxvTBrgWuz",
  "key25": "58eT8uRfgbGoAmnNzmZzqkYQ3fsQhM7QpHGK799EMEmD9hSSeXTDKjdMAyfav2h37drKsq39vYxLyaSKFiEX5H9i",
  "key26": "2LnjgQ2Q5e9wE24QECYRthnPctC3QJmcsnfP6b4TDqbaCsotGRezi2FRDJKGqxZhbYmVuV1RYegX2tbMAv33oFCj",
  "key27": "37B8u8Eb3qnakoVn5aRUtfEZogRv7FgJG7Z67Cb1wPTWWr2PV97t1htsb8bgCApTEiKtc4L9mmnyJgBMZPhNxRqR",
  "key28": "2E6CpnpQ7CjpvpFfBx2pP1CrbyXtwn78DYL5V1ZQ5bEdtGTcbe6Dnvq9GfxkXHseKXNdPeSvN9yFgfjviKqNMftW",
  "key29": "4Zw1WQHVhTxWoZvGFihVLUPBoFDa3u6qJSBbjp8jgocR3p5Jd646PJcWK3BBLMeP1PcyjKVzKxyKBfwcCPGayfBM",
  "key30": "2bjfW34BmaYV7ZSYHBNPGQQsiuhca4V25WYxg8zjyap9eZsKvyWsuCaWQEER4rFZFYcxMQt6MjoRKcCsFzpeB5KL",
  "key31": "44AWudPPVsuU1b3EPCjddwvTSd66TSkNavWqmxQ36nKVySQiSyM9R31JjUB6Rf3CjsrtPm52zW274WF2egnry6HZ",
  "key32": "5KKkXGEKfeKPWnN2WzWXoq7KgmTU57m7hgX2jxG43kLuwQ6hQLivKtcjB6zUDcPohZqcRLVUrt3WELqjdHnvZsjA",
  "key33": "cGmBZ3Cst3ZcMW2pA9pA2C6ZrsfJPdog7bZm1WNBVCF8ohHoHyDpCNDa8nd4Mnp5tKXEFDsPd4A9gYH7ZpjnEgd",
  "key34": "UkaXCnwvEWP8PC4nF9YERZwzuta21iNa1TCa4nxruSc7XAwxzRcipWQqYAUsi6miiqyjX52DrLDAExPLyLF57GQ",
  "key35": "2jAo29RAuZFydGimdnhviyfdHzgKRseNr5PvcA1fABD3LNuSHw2aWiqhVATykd4JWye4LyfnJihv7x7maorK9Pzm",
  "key36": "2NWBV5ismeMrBgBjuBu8H7FSCJrctvdLv9qrVNB3P7t57L7fjTRMW1vjt7dr1fKdyciHfRJYRFWUBPCP56aucA2X",
  "key37": "31KenGrFLSps1yA7ffUZy5gJyFQ7MEgLvyxdsWnF1XhA8AaEUWeHfgW65NGXiPgC4Ybvrxa9AjiT6jLMHNr8H989",
  "key38": "3B3yiMbz8d7Mbj2JJCb6ze1KuEukEb3yUbPwihDDg65pobyNnGQc6nWb4CAXqmKvhAnFY5yFYfKaehFKXdNFqVBe",
  "key39": "4mBBJDGxnuULuL8MrefFTZfVSuhhucvY6zxcCHdeco3buY6LneynzSgS6obaiUo6QDoFdDcjsj6ZXiD8EXkEddeH",
  "key40": "2pbxzcJ2qp9YYES4KicNRAuqvYuKzzEhSu7xJ8f4hNh5zdwwr2Kkxo4EUqF8FQ2y1hjCxbx3WDrMTn9Jrn8YvGaB",
  "key41": "3RvKcGhcPbecEZc47LhBuDA3e1qpRAgG5b31gZbaULDN8XmTHkNdqb8NxUzSGH1RncPdohnyeiS4CTqNiVWMNJxh",
  "key42": "2ZoknPJdvQbRhwKF1spAZBTs82K5km6gChb59inYSQmw2Lo1EKmrAUSarpYhDwRfZ94Kmo21TTx7isekQy8SdYsV",
  "key43": "4kJiTTZwi5czkB1M3wbT5A1iC3gDQwqNYnxHW7EedL2YBXpmuLg2yPCoir3AwpdUG7Gs9e8kb5nhjkkdVKEy9kxz",
  "key44": "5EQm3MzAMu9XcZKgYrr5zCCXNubV8vSRmwWifyM1zS3HBRFcxj9p9ijNRBEVSYwyxWFae3VrhwsNhUhEqANTW6Z7",
  "key45": "67BjC8EwyNXDeVum9i5rEcDm7dDuhc9YtSvepmeUcLz5pKg7nmuUPtpDMvYBCfQtxugk98jCEX9ATgUiGLocf5gn"
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
