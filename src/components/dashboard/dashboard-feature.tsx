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
    "AE32eTUfMyB86iwFXJaJJBaTfcktGNWqKTCdVLAaMYmLoPwkU9NwyoMwAN7Yrtb53n9QcaxSn4ATBWiaUF4MBVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfW1oM7NpdQy1Q1t7ZULu6SL6zKhq5aoe8nqaAiRAhF9v5MdvvDkNywwE8VhYa44EphXMvh48j1hcbfTfYAWeRU",
  "key1": "LwkT7QYY8U1cZxAFU7trVC4eLTeeLsY1LJYKoRQdBizuACpQeZeK5LcX4HmEG7Bxx2k11PbfrRxEW9tzWj3QbAm",
  "key2": "3wpUY63j46TSGNcGZVmkvX676EPX8H6RSypaLehCNLuFM5tVRRbFSdjiNmi2xCzhxDXF6nzkh1RCfy61r4qJqFsP",
  "key3": "4TKGuoXktyPxsNtbcxz4UYRW17BpaeECJKyuG7hjgEBzYEkzVpodWvsoYiqyq8N4dHo8XiTonMLxrzibraECTMjj",
  "key4": "3TzyVS5aCuMiaAMhyYGdwTscDpxP2mqYTgWdWYxZaBtdRjPXZjt87XXUrxaiQyxA6h8SQ6sMaEvsswSXYzX1HZ4Y",
  "key5": "25MFNBSaaRMrRFDjApiGxwTLJKA5xpojXK7FzqNsnpXwLRFWffVMLhTS2J1fcYN5GiiBPnEVQGPFJELHipnZkiaw",
  "key6": "r1McWZnLWB7ZP81DcWx1WFPzRdFCkmQpWNCCoWAhPwLJ87AVXBwXka4zcEHnZP3F6UUKruc37cuCQSYm4hMircw",
  "key7": "4sfWNZnay8nB3unshZmsi41vzuEHYRdBDpgr7HcUJBNyiB8nA6jJ2tc3ULPchiRDZ9XNdtF6RtF9LoojgN2P9FBg",
  "key8": "4DS7bywrHQjGLDc6B8odKsukEfUsUZGL6kaGMN9Lz4YeCctuGxpaRD1TVMbro65VEbfyVdeBdCpuQ8x1LzPvXrge",
  "key9": "3NQW6FzptK8fAbMCARW6VnW4rtktt1kqu5HscsqwPRXqVyM78pZVubPmDQemUQxwi8WvzEqTvKuwGgPfnVvr4Kx9",
  "key10": "2C8KkKuFfRZZABysoi3LcHGv4APH23XUcwmaYCgBUdTg2zAsz8Qu8xjaVLEntjbk1L2erXWANBTEbL6ARiTMEsPk",
  "key11": "2PG4o8LT2Uz9q1e5eP3Xu5UbbsFfmLiRCHkh1dSUktoxP6J5r8h1jwaw5WkztdkPiQ19wW47xaauR9ahPoUsNpYH",
  "key12": "21u8CEwrKDA5YJriW8vq34xiknhG9uRUKKJgjMnM6yXWrhiGoTPqBCfmeEPUx6yFbs2UGWeAiSaVzcPXuTPyjpHB",
  "key13": "4ZJFKnrVxZ8eYu5Ry9SyM1m96mGyJW3TqmGwAJX2XXdh9eW7NuJavzrLjYX9cfaAVRorRFu1eztU8Tsayse36xjv",
  "key14": "3pYGodZhCdcAUJaTDstCjXxmAeeTfhYR7FdFQR4G6wKSRvGfuhaBaRxrcPjafEY3Jqez2METh2PFGuTCq1XdabF5",
  "key15": "2d94PcKVZ6JSFPMvMvvFFYLrERJ39GcUmfgS8Ut8ZYNYYi6A77j7LjXuJUYYjrWgaAqrQ9zHRtN9po74qBUhX11w",
  "key16": "4tgk5NZDQDqqXttNXocJiBZXoMhhAhpXuNtYooVhapWSBTZc2oxpxFNu4on9kq7QaCaLj3TVQAQ4aCjxqANfXE1S",
  "key17": "2FQz63LwK7YwFmcuiuHkXbcmJCePLx9XGe8jZYei9tAEio8NDhz5UoppL6B23guiNzTR13JbNNP4KBDkKQXoc9o6",
  "key18": "2Z2QPAMy2DWsLXWBaQkNeMJiJDiBxKWb1JDQ7iWJjEpHxrPpL5ir6t5brVB8EqmFjtwHuWvXuf6ND7wzsfRMccGM",
  "key19": "3YWafCeqHaDZnwpptmLnwVEaoxjrj6poiQkjJQRQ5KGmXgmefi5o4acuUnoqkmGNcwn46GTXmyUhPP6iaTMjDzd4",
  "key20": "3iGVx6tiY9kLMP7i2tsTxftBmPupN8UNoX2WnPDZBuRxUtxefGumfFVmCeMSnK5g37em84ygUbHjSJBuhQLbfT5M",
  "key21": "5KrvoTa5KsE4EotLVQujGREEREN423G1RkMYs8DY5Dti41vL3LNGpHS6jXvhJpKT7AP3eSi6BavqKEjmbkHsywkM",
  "key22": "4ongCLB84jKTVgC6XjzbxSk7qixnLagYKamUVztSxeAQCzw4pvp6iVJDkFF8dszHV7g8UDCAcqNFreDneSxy2KUM",
  "key23": "3BqoCRy46FrRk1NDpXrNFQbBvVqn83zVyNDqR1n2ehw5ZDJaZHApw476ghsk5db1kvDJK71kbLSTHwwM45mi2mGs",
  "key24": "jbdDWn4nSfUjbEDLVUMiKYV2WH55A3SQNt4PJUssKJ9NdbEZvNpCbjd1gUHgHEUDjxFWo3dP5Yk25rSyEjJ3mri",
  "key25": "2nWn4u1f5aYdGXE7wBiz85Q2krecdCPd6f2kc2XU29kkJGVKcB4898oVAF95Wg79TCdiukmeG8AXrgheNDHUfLc",
  "key26": "t7so3ydkbNmbMUCyPETG4kdiTcFXrjD8tn7PB16v55zZuZQhYSTGHUjv5E7xHieDoghK4xBZwv9H8ntvXEkyV9s",
  "key27": "31fSnb1X8MdfauS3ZGVDtMVofdTDj6tuYShy3sdQ5zJGdc9WqusezCERdPNbxXoqEuZcYayH5kmqNPBMpxLUrLMt",
  "key28": "38rYLHj26V5tGGDHh31E99igwZASPA3rArW7bqG9RPWThspKQLUVPdhHkZcH3T9nNpoxzid69cKEZNtbVo6EzoXr",
  "key29": "2KudRFzYjW7GnwJSg4Qayh1Gsr2qnW8Rqwga26oUZ2QJwMLxAMQFGSai47ukpxHguxSCRpctXQ6krCCw4hCxYdyx",
  "key30": "3iqRDmPwEURS3zBA9QGKdtqC1DrM1WvZhoF7NFHtvdBXM2Lq9jHzaSnC9fHM9uuPJVJasXESj1X444CMTc2fT8r8",
  "key31": "4F4YgRm9zJWxCpVYkopuicJxHnJht9ka3YMc4k3uWR3DrsMpVNLR2LfLnvz52d2wLtKBUKdkV2bGyRTYR4wgzr68",
  "key32": "4waUUryBZzvZGtEhUL7pxrF6XSHh1KNDdqh8Fz35kp3QW7TsQRSHWdUiouaHQp7rUDaCHFvm42PXCNcUogJKpXY8",
  "key33": "3QNzPzK4cTycNfcvhASTiGxUnr6LBNDdF68n52dN99YTG35G1v32wTfSGr4vgkegHe695Zz7Gu9WGiUAMcud3Ppr",
  "key34": "5FS3snt5wYKCv27Jekqhy5bTZZM8XgXnLmFPkF22AX5jR52Hd41B8hw4sitK5tzyUES1dHY1bJA7tG9k9JH5UeNL",
  "key35": "5kFkJuwaiyfTd4cSqNorCHrAWUh8Yo5Qa1qKmmHRUMdCSjDRQ2LLyrmNJL1Vs2uNsNEHiNUhTTtMVjRfAev9A37o",
  "key36": "51JKJBV5LNCB1H6gVV1yxwGVfJ4eGsskdvNNPwaAGJ7Rr1Bj5TmDCm9cTpdxSoowBAeNKno9CrG2gijuGWkbpgQd",
  "key37": "483NzebPZ34PTUaphUAHfHahg4G6xZfRV7hf4UMMnTbQY3jHhdUtJ4VQ2B7uGR3MyoDN4bmhjD1StWjRQMf6vrKX",
  "key38": "4UKH9j5xo7wxjUX2HDGhxH2NiuqUmNBJfU5QdXeVZj7WMv5uG8SF8MgmFDTvsptj54MGJgx6RtLSVFvZqXPAhd9j",
  "key39": "67PkUp82sB8SkvmRRDXaGXMaG8GTwBSVVM5EzjA7Ncj6KruLYZAHWGwxAMSPMpLmmRUTupsvN9QBa1ZMz4A8i3tS",
  "key40": "K8ADYsp8i9c2uTJS8Lp2QGCMDY3pcnkVPrq4xDmDP2SevvJTVdCsK8XM6FYtqWA1kKsbE4TnmQTvBfm6rM6G8Pd",
  "key41": "25Y6GgEEnMG6rrDWrnxRubjdUM99g12qGgoJ7GRRz5eJe83T9waUqm84WGK34cNLqF3FThLArssARxYw3YfQUC8V"
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
