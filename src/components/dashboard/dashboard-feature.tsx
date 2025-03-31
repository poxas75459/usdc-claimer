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
    "5vkMm9gj7VxS5G8hVbro4BogZZF43J5bUkB4uTSbkRg3H7xkhUx8XJzUo3N5BPqtrxKxvU7YmD7hSoiqcKSE8w5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dZSEP42ueRAFbKjndgpgLQycv49PCVvqTSJ9bpThkJCGddko1ntvvbAV4pc2jHMcKs1xxJKswndxUAYgy7LKAu",
  "key1": "4sbfBukuJVdcgSZV7Z2mq4ux3gJ4eXm1xLV4mcQx2gbpDAom1uMDCTMTLCc2nzigcjPsYCg3t1rzx6fexAYNnMtu",
  "key2": "4cUzaCPVWgtpsSeZ5LmBda3hCeeTbtnWb3gYMqeTR4jL2HU3cE8S4t25WNcZJQqaGKcjQCMqY8c5gdVTrr5b91gE",
  "key3": "5JoDfX1WjHFrrvXqKEcFbLEbmViKfoy5WkpobbTXfuciwkJ3yDjf5djd6iGgnBuXdM7jYzYTUex3ukA1CCxUc3xo",
  "key4": "2yfh25T7UZQN57QscgUKpCyPPX9pwvwNG75V18N925HYCqVwVhqgAbEC6LmgyLPx9aKfwf81pgJNMXRJh2bAnK8q",
  "key5": "2mehvqhtr2qkipbv7oDwXg2h45yjLSAjtjjRoSbXP4A7AaXDeij81NGUZgjp4NCMoBpgU8LEshWcSBXc7Pg6iGJ9",
  "key6": "5NCJgu8RsjaGvkqJDw9UxwfYHh14vsxPrrjFgKKDAmjEVZy3QZ5YLe3hwUnWFm21HM5gjznJ8KLpYP9awYYWs6Qb",
  "key7": "5Te7cRwPiR93P5dV65EUw54dsMVcKGwN5BTsa5FV3g5Wq3FxHGmxedxSQBs7hj8suDUesaf2QLKdh6DkdU33k2kx",
  "key8": "37usejX329QJarqmKcggvnGHgKSAnfoN96xVDn3hFndVGMUSxKYQ4LeUo5EqCWcHTW4ktxQyrciXYfczi7s3XPyZ",
  "key9": "35MA36fsySQ4hZ5kGfwteMQ9jYmiH8o5i6zcFGeqpPSgPR8QtkHh7gUXymN1iB928UR2ek3EpsbnvLwoUjTkRBMu",
  "key10": "24WhNqHtqRGUdsa5RC3bXSn2SFihCqsqDjraGqYT1rASg7n2E661STP1REpsPXMvMb2t49b9EupTCrTGMmp35BYw",
  "key11": "Sa9iRPsUm47ViovJU5HA7Nd2m2nxQXXzh2HSXgmHHEjrgvKkY4rmiwdzz38pYN3Pxu2bvWZMuVQoWfUfQGUCgoZ",
  "key12": "4Kk7EomTcHC64KuoqxUQLpM1PYDTDzzXT6JSa274ag154XCrmnUzvJVq8srEuYV2dkCEb1yCN8BfMPwYywX7XdJA",
  "key13": "4YJrSaizzjMUteiPybjY8bgAugaUmrBnpCFRS86ntULLy35kfePUu2N8zrHbA797nscrFv3NcCMtWbe7QVdReW2S",
  "key14": "5tMxaH3ukMkiHLrRyYMKUJDtVagxxpN7uyQFfGDBtwoyCEQNkHGdsb6T49rXvXJidFVUkk95E2PtYNfVRsvF2rwz",
  "key15": "3msQuG5zQjEaBWe8ByCta7LRgKaoKWGoUP4jeJUGcrXPyEX6UHAfAkxJgwWmhukkFg2ZB2ENvZbkT7xDqUcAgEyx",
  "key16": "3oucLe27Jq2NnBhff22exba2PgBTqNu3ZTgoXrGFB4LanxjSPNDyZ4TPbcy5CMzzBGEpagfng4M1uLp3Rx2iCaaX",
  "key17": "4ewkpztDCaNBdp5CpSSqcNwYjBgMxV6swWQAg2H4Sfy81fvYPay9z4vqfj8F1pi525755rmK4bZ3xmubGPX2rbLN",
  "key18": "3QXj3VvEbJi223w5E9YoGK2z8TouHDpN2DhEYoaeRcqs8wKC5WcyuLQJ6wJ7VsjnKbtQREsPtUaGvvwmvdrBN5Ba",
  "key19": "bnKgAbvg1C9pZbpK8vQYMf2bEp3w4jtzhjEyrTWmUpSKmQVaciXRjWRMUZQn4a6bHmomEAMhf3WfbJQhJm2FxLk",
  "key20": "4u9Uca4DR2r5vVGnrHahMjMMn7MUP2K7od5rEDBFfVJ5VRuvyj9j6kF1odpPBQmU2TThndGnaNmgHLiwr4cAXYLd",
  "key21": "3hvWYRcpbEk3AHrU8oy3ZkfohNMXaX32Mm5JjPygmu2k3JALqUTSbPX93r34cSqwNfGysDtAfATcmTJRtutgfWMB",
  "key22": "3VFQNwKo6uy2oYZTi2b2L25ah6hWxThMnEKH8v5He8xEMFXbso5FhWGTCFLKzWEduDRLG47w5Fe5urNzbU9pDkVy",
  "key23": "3fuUsjVdrdUmgrm9XuX5g762rVi5WcjnPox8LKeUGu2Hq6UT7eGEPkBEaavBQ1HBWkibru4bPx3hr4td2bV6uxfz",
  "key24": "5wxMsbR33S5jGi95ETBXAsoy2u6xQwMbXdHsaRpRWuX4d42zuWrytZvBj66iF9sBzMuhf9G24KXw47xXr2ob6FAY",
  "key25": "544GGCKjHHMmJyuFuiUrfAwj4xCULhLYKo6tQTMc58QwWAZvBgj1K3cm6yUHCMoeFmHYdQ7SvmM4SRS6GMYDrqdg",
  "key26": "4rC3tx9EqFnmZusKLqoNov1ZaeB3iwqMBduAdoy1e5kUVQkFRWz73s339pQoLAWSiAHpaLHSF5PkF6uWSvA9GJLA",
  "key27": "4H4LCZPUuY2wDsQvZD9Ru5GTpDYWgGV2Nfy5KD95BzmaRbGbDqQuEwKbcoHfEVGCjCVzgyC4JQPAopo45JyfZZ4i",
  "key28": "3XgunvCmnMXURHibv7GgJ1JMrj3qSNY1Q7CRC3PNF8dizf6jQge55SA8CojpzANAEwXcQBLNX4ij9BNMcNrrR8rU",
  "key29": "2fixMbjuJnL7FjQPb2BPRHud6N3XhGTfF49tyg78YGFUVZkMSHzLuBF3vL5Xu8RVP6jtbzykasnMC7YdKGGijmBm",
  "key30": "5dmJgyDdRnerjBTFnHmZbp9xHAvaRH3anMhGp4hpSGquEhBL4z3ksMeevt8cS5CEUpEpgvCuaSMHVYdRJpWdVbKn",
  "key31": "4nxFeXyYPbWxWWRTu4wP1qKfymJpTsuT3oz9v9S5SBgdJZcSWLg9vGxgsox4obLid2qMphWWpSKSDs85hbV2675U",
  "key32": "5RGZr4Vdmw2L2ReEbL2VNU9HdwpVB5Z66vxBxgWvcfGZXQSDEDGzmcQYrWXege6ttFQrQpC7HLRaoH1UPhzSXzg8",
  "key33": "29UwBxmJLhFdP5knX9zNK7eqDehuSnLoCuiFfEmTnAzX9JgeJBevQWRcQKKRg1sGtDynACL1jn9P8ttLbcPwJngF",
  "key34": "3NTBwd7E23bkxqcrsVaSGpSRNoTKqvaSVYcVaa9BDG3CrjnPiaa6QCABhtMk2YnV1A8ZsRxbBirU5zMWLtbwBo23",
  "key35": "iFwmef2vZ3svx5xYCfV58ofR1nR9Y7wRDZLrntkddian7bKApAwrE6Zv3nHEcq9M83J1hgJSuwURBhLL6GUzfxH",
  "key36": "5wEbzpVxKvS9YDz63f1FhLoNzV6wMCR87bPffkptTCHPzqG1ATDX9QEEizqtM5JCkGnCmLrf9f4mNasCp57KcsGv",
  "key37": "CPhTDVyVe3wbyo29CeEE6Qbyj5EiSrErBSK71x3JEdup32K4rYWn36mzYE9vCHuA3QvdKzivP3Dvd2vaFJZWe1c",
  "key38": "25wcedBgQfHuqPVG5ZcyCreHZkU3MEiheSXA3sRq1Tjja4BSWqbHRMVkmrii5wpyHmCQrFCXo5cAypyZRAeACRQ9"
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
