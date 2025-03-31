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
    "2MxHcykBQN5ZFcXEpzdaD3dMayPbKxhBXkoiui8USbm3xZrHXYDetkZqHxp4wWaPy6wHWLRUb4pRsBNefWDBMhaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "524AoNjvHX5qvDJH8yG6CxtFsS5XcC8XjRZ4KCZUSDReaC6357qFKjy3Jj5JVBy9vNhVDEdUyBrebkmWbewzfWMg",
  "key1": "33VjcJFFGm6S325YZEgPUUNZDddZUhiHsqXhxbyJxJasDcLSZseaeqNCJ8gvkftBmqpVPcvoMGuVjydiepTtZttu",
  "key2": "4SzMccKqnEy3KCnTLjhSUkuxQF2KEWotaoTZ1R6xaQDYLprQpFoX4jxTxV7VzUTM1X8FoYLSrR7wLQigNTHdEqRt",
  "key3": "26BNgcTNxASDfLBoJmxGBLPqQKqUh2T9R48AJ5JUFhZrbTAeUGv2tZjD46ZHsBj7QLjsrnBSjAV3cLqVX7bXUdUW",
  "key4": "4H2K8wMJfJTe4BQGged54HsWWNyGwMx8Jiav5BQzHAA9rNkCMwr2XzGu7CPLX2KKtuM8XY1WpsDtww1QrYvi41Po",
  "key5": "2K79iZtw1KauMtACKYdwb7hhKoBEM6EkM8T8xdYb3CAT3ph6xK8pHuGDwkMxGYBFvdJDDeQ9bq7CHNTkTqzmrgNA",
  "key6": "2Mmk2tGGWx8RscTdZ9cDHqq4ys737BaMnEupa6Lhxf8D8RsEWmNouyjYMHC2ir7bM6rx4RaUcK5ii7fixykcQbKQ",
  "key7": "4vgHjFco3KfBARyfjvoydjSg2j6dmR5fpQoNxcgj5yXWJHkgKFH7UzQRYbRHR6VC42YDmRsdEfsso2aTMx1ogf4m",
  "key8": "XhPgMxmBj4qU6FN1Mru8svUKdiAe8dwHzaH26m3NxchFMt9XhMShqVtpPVb92VPAUFbBaoLycepqygVP1Dt5pei",
  "key9": "3tJYna2oEBw6rUZmqHH9x8y3z8mSvvMaGS9jSFyCXJ7ESJALSs6SiR2vxabPQWPNASoWvCVGNRAvhj4tXSr9DG8J",
  "key10": "2GW2nE16UN7B4CMTSYPWbbN5vD6oUSUaWxWr7mdoNYWsDTrcG3j5YXnbqyyHNEAQDWayHzW6W7ubLMz1EUYGrBGh",
  "key11": "2G9MbGYLvjHfAazV6EwMJx5Q2JaTQisTiZJEN8iw3ypGbhuZRJDi4osorFyQgQYeg2VUtNDyBiNcv4xRsZQAJbzs",
  "key12": "XunSRd2QJX2qEfBy1MLw6rcVAnG3yLNcCG2ErGenDVXM9dgH5tYxA11vHBJqDShjHxbwsKaCFgD44CraMCUuTiy",
  "key13": "4Dpu2wCLMMyX3FJx1HVXdDkhkmwJAJC2PyyNcpuTzZNMi8FGZPQnbJ4xEStJF5oXGNEAvz95YoGf9YgcgtfrRgsr",
  "key14": "3sD6Y7aY57HZCXMWU1e8NVZbwm7xMHvrvmcWPWp3kT1jjXZ8PQwxe7HUZnFQDA4WgV2a4jDniVs2Ui32P4Dfb88F",
  "key15": "VRVgS9JUk9bMYd9YPBvxve6oicpXq8Gyxaee9spYi2aUzs3ugPk37PXtCH2DXgYjRiMPghxhmrBRNV3pXc3WDjq",
  "key16": "4uHQ1UHfk3HJEv3yedvkEXT87eriVdtKctWGGLMxijvWoVWY2i2mYvp5HWdYPqZnyDQp4bmwzu6X83wMaSsH4CV2",
  "key17": "2mwCeC6b5idKakA4fZ94Yrcpi7evqHbCZotz7Bq1cEgG8Aj8byqFpctoQnxXCiZPFTpAw9x2fwv2iA8HAbnq5Z3N",
  "key18": "5dq8dNyXEskS5ELAhMDvGT7r3fp3qpY6kGuTp2uzVKbQgJ4pZSWeK3ED9mu4yocwjTCR5wfi8VRqHpJBE5vkV4ib",
  "key19": "3PEcxiMd6oAKoQK4j3hURfLW5KqiYJkKKaRDd6JXiyrvU3jkDiLMbow5oCcxFWHBRrBiUBiMWe3bFD5E53J1Sfh5",
  "key20": "5NgJ8CpEQokxALhRvySkTsEM7weghrmT4Uq4oUhPRWviQtGEjcvZnYYUZ6MwzhnXpFTaTD7xKsHjvQthsYzx8wT7",
  "key21": "289BtJ8AKoHNXYgKhPN3Tw9B8RqZhUXvMHdWCvhDacrzptorUeRCcC5pynQJodYn16JSwaWby69QZwUynnR932XK",
  "key22": "r4XgDW6HDdrCp6GyEHiQk9pdYCq5ao2B3ASY8mMUDPXzHEHAcnsYDaALLCe9CNZuvkuP3otHKphGFYRabZxWMXW",
  "key23": "29jisnyfWEVXhEfRuNcHUsSpPzB44c4Y7PtcRHgXi8CrHdMMLaTZbvTt3L5CXLh8ranZT4nWJ8giBReS9gjtmuSE",
  "key24": "prmqPTdMVVt2AHGcnEhRXQB1XY369QWTQ9uRT1HioiAjUPQS2BgyipuQdpKe9ZwZ9o4hkVaLzCCj38bG3k478VU",
  "key25": "65sEQ4LBJ2DWpqfiuagGJhaRAk4g5BWQJDbSmxLZa65NWb6XghmxPgUZfTRszioyBNV61mzqYKsNXc7ct2XpaHgn",
  "key26": "5x6gGd98xDFeqmEcva7pecGumyaTVixgmAhs1msgPZevubfwRriwMgW8haH2hfBZxvhBnDsqNsZs3KafFuEFZeV7",
  "key27": "66i3ryHWkhRHsANwYDsWsGefm41sKygUNG12xSbJUcQcbHgQSybMh5hDpQaQjEiCr83HV7icHK8d9WqKn9cTfxYV",
  "key28": "5FfKWkkkti14qupYwUjrg4SJoCdHtbNw7va6W9e8RmhxprERDp1b2UP6NZTUuGE3cnCaPEp2a6fQR7VzZGod5Sp5",
  "key29": "438M9ipGCWdftu4fT59UeCxkavycXrrJ7o4sksfrZm92HFbtwLWvx8Zi2kQUuMcYykXHSAwRjSi9RoZUstK5NWAC",
  "key30": "26MbAPn2sd2iwGqYWMP3epYuXpPf3DXTpjHRRkV1oxJ1r4TGuANHZadASM9rFFVkCpcRLDLoBXZCJWqJi4Gmmv9b",
  "key31": "39c1sJqCV5TwT2ghKPDhHmJJMLYpRvMwjiYNBJQpqHQtDQZ74JQkhHL1sWYRnxNDfrk6dwWaDmYBsMrLqaMkf5d",
  "key32": "4bRLoFQUMKPnkRDcBUBFgevPosd9kQoiRPnvhVrTVY2Dv9my1yYhhG7LWYaZ2mmGeFyjuBdMSJktFo8Cz4kiizkp",
  "key33": "5hNGhDWsLv6uKFPnq6R8Jv8d3U17A3hGHVmg4MZdsUeaGEg1y3YCXweVnQeiXLj19wEaq7LqzumAv1UBpkLyGcgn"
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
