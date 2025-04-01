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
    "5FDwBUgMjxtDPmzbqoX1trF4CxgcgyQEq55WTVnL4Rz6dXZkiGTrxcJcTiqWZPPpD1uH9nKL9y41J6QAbAmkAFp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPNFizLEkST6aXJGqFfndxCz4QPELaxoKgB79b8aVXUp1btAX1twCxGTmHcQjHpapa2jrWBxxUqwg3Vdw5D9NE6",
  "key1": "4BEkZwZWW9PPMbpFTu1Co1B8kkQ5mjFNQ6E8m1v86geSd3R5d5ZVU6GBvSBAzzYvyDHWozTNeqBTSeKSpT1BPcpF",
  "key2": "61LbNZC74SjgKVoQ31QbVuDrKeP6WCByHMeyncDPL4riR3MXid9pD3WG4o99w3BmfThWPuKDf6qY545jZYGH6R5W",
  "key3": "4B5bPzkpYiU1yh4dxrkF7kSAjBSeMPnbNBYMarnxuV9uz716ox7g2DEwiJqXUzRnzwh1YozgSGaEzsiDnuappg72",
  "key4": "jbmAcwWjqn8F5WndsXNTa64wDbpxVNKWGjNj9dZasd6HSRCD8UEz1EHmkZEYi1QZGRTg4s6LQBdaHyxXt9NKMFy",
  "key5": "5GQRtb1dKtKwqTNjp1uTeEDXCtJAbku8KiLbYgPoR673ecgc989ZPtq2Xy2iH3HYEd2rKW6w11SupdguLaapSTwU",
  "key6": "nC2PHWr8h8EUF1bmqQprpYSXHdf1MFWiQPkCkumkA2zrtiLPAHsT2YaFEN55XVqbvrEbPojS5G35P5Mt6dntr4b",
  "key7": "3oHGUGdNaKNMX2zJw8UiTjWaf5u6aQkEK2KcMq9SDRE64HvfEi21PnpmRQ3BpQsvgQLZxWFfuZ3uQDwhptVY1tMY",
  "key8": "43xGXMFM8Nj6yaLxKqTtaxASzUJ887YKX9WxXjLM5krU7K9VrCaHQjUvgkWhgS54AG6EiohMfPfBZH5JboWtYoQc",
  "key9": "2ufPVoiHEGDXeEkRiZG6db8bAwMVwZStxdaoq5uSrvM9wY9T4LTuPifzdEUVAFAeujj6YLNpwu2nAa2wuEPaqXNg",
  "key10": "2CvGhn4abUKNTgndwTssYvo68FamMZBPpZvegDNpGoc7nZWot4eBys7pSN4mXmbwcoLQB73TgHXKQiyP8REHPABg",
  "key11": "5xq4va7zyZb9kBdNyavDKC5umDmnFh1q6PQDgCLZs8ecfas7TuWtzLP1DgvU9tnMaNStk1bzsz7WfVeH9R7j9wrS",
  "key12": "4MtURkk1KLGPB6fNHqZUYEvMP4XcPKinQkk9E47az5vMJkzdGc5kzrW2t3FpFT5MLtAsneLGyGpqyqu5JZ47b6Zd",
  "key13": "2ytk6j4CHJiZePFhDx7xCQRPLx828pXiemiDzNgh1DjLKu17dvU2YERP8c7j3eV3Xh17UBQwxfnansZZQFqHoPdf",
  "key14": "5qGb1B9pvRhEwXE4edUsgXgKEQrcMaGiL1bqvzLN271UDgubkucYZQ5iPwCR9ErmfUS3hTa8UPQMTemoXYBskKRy",
  "key15": "4s2Gg2mbv4xhUcAucVLHhKXRpf9bz3CfU9SHPHaBoCyRhhqWf8jokgYpLVUfbNwj24LKCTNZBDfTvitWZbXp9UKm",
  "key16": "581U4cKtBSQFV6Hp8xoXYZF1RruYF8jPG1xDuEY8hT71nHSzmopSJSKNBhoKCKqJrqtSBMzsBz4wGNkwEYPEcj8t",
  "key17": "2EFvaJf5h9FbnJU7Y4u1bpSiMWVxqiE7QdMN9TPZ8rer7RoN89MseedoXNTCntu5qWohtJarSU8pmowfMqfZedYX",
  "key18": "2TQqw5jdrdBpJhuVkfBeao7xdEUgA7qUXQ7qJ3rcvLcsDRpvPvnqFFapWf9fha4wzEPUAMDficzdAHeAN42tjMSw",
  "key19": "vDNU3jztDSkrP29XMN1YU9oCV8XcKqsjEUc89cdHi6i4eiCdtSvXt4kyYE5eVCpP5bGPZ9LW4vBjn4qaiBehWF7",
  "key20": "48tLiczwCmcHvTkuuve1RQ5LAdt3tvhVE2sDtkDmMj9p8YohesSxm2YYCSi8vLQxygx7V1izXzpB5FzHu3QzvKtZ",
  "key21": "4nKXPYH5mbb3cuzHvvNMe6Wz9exLW9hb9KSWWYqcFmbyVrTCuH3GVcmRc5tyLDcTEWttK8VmANgTgkWAtbyBN9hX",
  "key22": "2SvefQ8DVSMNRsripRKi2bGSTRZXTByHrhV9FoXhEoCZH3RULMhGwCJ4unDC6YXHAoCcFekzBCNYMiMf63MViVB",
  "key23": "4dBwjvBGN4bHBDzgPLLPz8FQ4oU898QNGeUoBMEbK2syW7AGdw9nWPSLvi15tYehtPwhv611AJX5QiLNdQ76hw1h",
  "key24": "sodVV6Gw9yPYoU3oDq6WukVoPZB6nrfrT79kRTaRw6e5XqEUBCS3aWih8FtYRuZuqSUsifD3LDtPcLfnG8yWHV2",
  "key25": "2Qs1LFBpFqXDVWqUsrr1XA5q85mg8xt3yHXbqiBDtRapwHjwipxAqgyqrN827Q2gAfqSiiusmkoKdgraCpprNssm",
  "key26": "4DpTHMfhg4u5cTVY9pUt5wAdsrp9TKwgnMxHEsnDeZUbxPXQTVNz7z9QnnnBXkzdDRQo3WaMPDrv8gYjRSuEW1za",
  "key27": "4hZnFdGLyWJfjL3FSt2Bt1Cr4YTMQ6fBLaanNzwJJEYqBMcxkbYHB9KNwXcawxzwXfVYmdcRsdti8hcpZubst82Y",
  "key28": "4Fh7vLwHBF2nmcayYNKMKd38drbU1cHYh2f1bz2R7kBm9mFQ9JC8tVuZX2aaanQ9u7RK1JTcvRxqAdpgcGdDL7J2",
  "key29": "2uYoApM9V5qoTdbgikVzTN9z7anpg4KEgEM8qEhfw7MAcHHcD3Wi82jvuny7afW3p4EWSjoxWzNSQRF24gwvBHda",
  "key30": "5TEBo1JziCvRWtvBdoiwnEWKsKqgi2g476v4WoGkEFRgH4zjU2QTxntnU6k9D4f5jrQMYtEyMrwAr1j7kEb2Wp2b",
  "key31": "5h1NkCVbJRxNtKMBkaX1eWv3vWuu4Q3WP8xny1baLz74EAg7rpmQx1yzsz1vUQk7sTpPbhmoH9cnnh9AydD1Dnud",
  "key32": "vechto5JgyqktdFBtLAeL6Jas26kt3E51X8kZeSXzUqUW1byeRiHJFiQbrrTQCPLbKSfd6SHRpyEGFKqzvEjJ3u",
  "key33": "4yg3w4Y4BNTJwsAKg3wkM9tCFBfG4kFzoSuv3B1oucdPTkg6HrRoACKxqdtXo8RmKMU3gkK5Bjc8W9T38TTL4xHE",
  "key34": "4cpyy12YiUhmoH1dRANtWoJ1VuUwes4JN4Do8YCBa5MqWVomGqBTPH6FjV45d3g7ghV1qq2Zja8NNoG5QbP4Kk4S",
  "key35": "3BWNvZWdtyZL96CWbCchfFHXs2PStW7p2pttXGEQcPhKudVZGPCSXaUkaCWcQRSAu6h8WJbA8mbuyn5RH3C3mwS3",
  "key36": "219AopK6pq8BUbNh8CRdiSRsNxPxyi5QMrD13kuwaKC7gWe49Nq1nCNUzS4jttqbdxfqGMEWqmQ9hntwDoqumu6g",
  "key37": "3mSR7qMb4AQxK2McZUEWyBW657BWqyGfn3c59mRT9xSBsLtuTAYfTxtNoXhNKEeha9PUY3i9gTrgaKZQUctycbog",
  "key38": "5SwHpnSTTJGUsgeihLJWDqDU8ExyX3WiWAPzMbYp2FkNPdFx4grpFtLMiT3mpCLpRdRfrsSJxwDaNaCPTVbzDQQT",
  "key39": "3LXT1e3q1pz9iGyJYQfzn4PAqKWux3qF7Q7PowgUXYhAmGgv2W67vLHt3FScJErJTmtxeiizMY3RZESL63mvpuCP",
  "key40": "3WsD4ZeH8WKRhKmKwyo1EYUi82yV3yk1vPsaBYw9ofCwEe12bX2dfVdCn3VRFTtDtedAZVYQi383WWrATYfNMqy9",
  "key41": "2oXNumWyN69CjvoJRJU6dvVQarhahjzcaRhRbKGjfjozAh41bg9fRmbKCRPvHq15txWBHjfrJTyfYTSoLKGCdVDd",
  "key42": "5Vv3Tsig2YE9mnsJPCGkCYoE1ZWGxsqD4VaHBsjNKcRdPk37G7QXaTxWy3KqfxvjR1qrv6ybNqW8STznwuB6iMDv",
  "key43": "5niJ6v1os2CvMC4X464fxcL1D17FJTbtPaEMjLBzgY5N4nM6yiaiHM492GxyWH4hpRwFXdgb4pTA3qVPviezJTyP",
  "key44": "5rnxRNReYFJVABD5yUqviYmksRHyFDrF9ayfwyQG9zg6DjkY8NGbD71rwfeZDjg2EQdEJXJRa4xNVrheZujTauwM",
  "key45": "ANz8nPuG2qKxQj6PFEGmN6QdjHLNPqvYuwXBSbGCzNCXSqz8U2PeC3edYxP79BQVoZSyWcdTLJzavzBet3ughXD",
  "key46": "9gdEua5Hw5Bn3KCwUA2rEgtB8LDm93HxZGBe753YrMzuCnN4znFLvQMnu4hB7HAR2k4uhK1SRpKLsAgzjsjd2o5",
  "key47": "3KcgEpRrK8VQRxcSbTGBn4vvzybwiWkz9TcuxsZeR5j9NXDYKfsPzM5sf8G4Lg7we8jZkxaFnQA2AusjZmhMX8nF",
  "key48": "2hr1ikac4iKcserm4AYZr4nzrWEJ2NkXUN5wXq9NBMHTcQQefZT2VLcmys3PHqVSbGVgqkXMUU9gFsTDMuRnFatd"
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
