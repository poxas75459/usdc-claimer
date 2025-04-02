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
    "3gfw1LVy6MCpKBVKRNDws8fd5bBzoeSA7TQGEatTRZwRutHuftyfKmPudDkQEhbKZ99QogNqtuTWJpnZQLcpxkEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFdnH57PvKSqxwpBexWkhWY7knRX3NnJ45G4tGWH7oRfrPhFsvPED9msxkabcqEYgvXgx8qvpYN8Y3VMLrYRcn",
  "key1": "3Ui8jnDP3kCyYhA6Y7UFtfoFnwyqbTM8fd7gaNLUxqR1jkhM1KSh9XyNcC51mPD7cvfqSWswmQC2XHEtdeRVXPVS",
  "key2": "2gwbB7Vvd4xoRW7bshhCc2LDuSZLH27LLxSN7uuYyFpVxbvQxj7GZvyiZ7uwgavZbCRFtLmV1kXpsESSj1BpRHB7",
  "key3": "3jQ2GVMgpJxhkWLGt5dbdjQVsTVAmpUuq8SWjUGkuty6GxUgWQMHwdzojNf6yMsV1PVs3atote3ZjAWrkw7qfWQd",
  "key4": "3iwFcsFqGeqM4uqn3npVJVmYpk7dB68CXWwABBjaYWZujVKPpqET79aFzdpXLuvLVVkCJvDPVsmEuCBEdGJUzmcU",
  "key5": "5QscqzWqdMufLoAynETpkrL2SExsgNsdn5LmTvrorJb3W95g3zTFiBSJ3TztUoCAM7Zyo4B7xd2JPYdZnEa2RJq7",
  "key6": "61PvTx2VZKsTX3BivUCPv1DigfJGwmwVdcgkyakoSQ8a6EHGSuFpd1vM4qPwpjSn6t1EwgwjBKLhnTU9qshKh2Vq",
  "key7": "5x3UmCVmP5ZrSbRkvtXD5MwXaxESj63cGaWaJ7pNknR9X8iS2w1RTvCcNcuPqFpvoAqT9Yb7hkitVCBrcoxqCVvB",
  "key8": "376HGkDKnfrEyfQobGoDEMQppBgckwodvQY7pbB5cdKRqavTaC5ReB4jrUnzJVuGT46g9PnkKxTAKi32eA1vP2JP",
  "key9": "46LhwoLfYhJpkVRkSs3wvYzz7N7fevtLtVjPZrxQ3N9KP121KbM8bHQ4mHfBUfVG2hKHLw3UCcWgy853Sr7T6WDB",
  "key10": "mS7Mf7JjQ54eG5azDSG3U227dtpu3LCEoNkeE4zSKaTCth7nzCTunvBQuXbDgsBjReu4nFf9gpffqEvGgubaohN",
  "key11": "VTyuQBvFjFUonLxohrWxSs5nQjDCBPyLus5MMVWEtnPgtrpw2sXhc2bVB4bkUDXRdxrTxgDswfbcxWj9cPRwFEL",
  "key12": "48PxHGmbBfkbBbnoFYiomw44ax5GpFXytumFLNfA5KNdMkUokuopmiv8s8FuMkSfZhf5Gnd9Q4GgQSSdyaCMMgHt",
  "key13": "2nYkarEPG9HLZsDkdDJZqh5yQAgavvgiBjEPbGApAc9QjiY3BhWb6pgtrvPDofhL3AMfJa3Du64AztDc5wUYzwmd",
  "key14": "2M79rAjcU7cPeMyZPo3SxMszEQMfkYGQrgJZdAevbbKyBrouhs4t5kRhtxywaVkLAPRy3xBQQfKWFCyqGCuvvAwU",
  "key15": "2cdvsoFqHgP3R63SBQm7hrj5BLGx9t7LMQhzkYjr7Lo7Zp3CBSMEtBMKWfn9ZY5bZtQ8g2hPrQnTC1NBrMNnsNj4",
  "key16": "5Mk2aMJWYh4HCiqCXi73DwfkvpgKKQC4Ht3R7iE1herfxh1jkYYQRXxer7zNDGKtnZgcG4WjssEgveUugGMwDpL1",
  "key17": "3Byf3c78QDUog7i5NqoPmBXZa6vKRmmvBbiAkHYpuNFQ7pN8wFwfnc4tFLTFt7UaT7zqDqPjbyFqCWPZXpRiuXMB",
  "key18": "3YLWSD5YKR1wrjut6noiysb6zwHjcLbQk8BKXyn2d6TqGfGMHbGzXPR91Jv5b8LfZBHaJcL8rt6pGm9ptSs2ZpEW",
  "key19": "4p5qGyvtTVT8L3TLroeQKo7pAgKCwkadp5bkSJAnwi1qvi7w1jUoJZxVeE6YaL1YCDKfYi9XqDtPoXhEFjDQufKd",
  "key20": "3rKzyVjAwxwD6TMzgFQt7DECWViAJRTeqXX7V3TcExXoZWFKnhcis4T7kgzkuF7q9NLp1ob5WV6ducDQXVdJkVJS",
  "key21": "29bACHjLDyhp2ym69zAU2uMUrTCyHaoSab6HQYUstUeTNzZcCjmvJXAs2eZy5RUVXt6tB6Y9ZrNYJpQKaAZHKQ3G",
  "key22": "qQnesyy9i43aS891zZJkJwpeojS3pLaRAUGzr43BY3rtHrfDfMPWtpabDWxzntM45zB7V9nxzyJ2A1AVatqRTNk",
  "key23": "53Ldhu5HpnWtqViRAX69nR7Mb6CxqmecaE9knzsozGDaEyXZY3iqh6XCyyUPLqb8VTrRSczrajR6zDaoXpXpndrS",
  "key24": "3XXWPmswvGjJCS1SKPsMQmb2VSQCRcfsNLFFkdFDGXLzGSapBAoyPeUGQ1EchvnozixHydvndpSrN6ZYX8pEcpFP",
  "key25": "cEX7yWPyacWAy5kJUqjdMn6YC5cCeA6eWTCapNehYhJtwEsSSjj7cMY9ST5e1yacV7JUwP8tv91mSgdXtuv3BuJ",
  "key26": "Z3HLkaUeCnWb5WgKxrPybQaV4Lzx5xqDkanVQgGj8ppYxLnuoqySAoCqGucn8TgVtjZ3mDVDpVCBs9JNTTU2qmo",
  "key27": "Pp4nAbr9NeRqb6iYwwCVhKLGhPgPbgbAczJ8Q2R55LQgPKRccCCyEBzBLMFNsGFz7NUdvDZbD2uaekzojB1LPVv",
  "key28": "23G6pdXAohVeuvJKifZJcRWXT3oHwJPmZiP3sp2MEMxgEKFHrzkXCNF6LuGrndXtuCbtiVtiXLAx8WBMeGZphRQr",
  "key29": "6bgXP7vWfXModoc4DaUkkViCJuGKZNV83tV5ZYJGyscVzUBDtudKWz8JoEJiNZ6Sce85uPRfU8s6Dcty5GWCZeX",
  "key30": "48VSyJjAEGypeyr2StBz6rnpczXeMf5TqXWVYE7Q2djjzjksK5KL6QD5PRhB6RRNwHLngTYTgv2i7j2TUchHovdZ",
  "key31": "4F6zPJzJy429ZEeGsdM2ME7gqHsLcaeXedGCN5UdsWe2W3TRyVyBMu6w5XcZHUFcMXe484zqdYAG9EbaX4uLw3Hj",
  "key32": "33gcCuvkpN4QWhdyDPHCr1qMxYkp3k2Pq4gqqvGCo52hD8mcXJjGULEzmuRmjMjm9E9VYStRyfgum4Vp27efAppp",
  "key33": "4RYEvfUBfmAWoanveXGsn2sMSajjCz8f2tBcnvV62T1TESsRGMbuU9cPwgiYTDZXS6qJfMKbXcAutw44ZDggq5DU"
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
