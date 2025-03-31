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
    "2ygUxCboYM2FLC781G1i7F3GVdHZezH11Y15Hi8PWRz2xkE1MwjoUHEWdCbtvRGC2gLKecH7njn9W46E9rhRMobB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLwDvZLshrjDLaNf3snjX4k6xFvZMR4V5BETrEoR9pA5rLFU41yAenWXnJQuTUBYsyUMXZDxTC7mxQcJBJ7uQF8",
  "key1": "121MTSfmmm9T4NcALD2CCnzdtq1foUdB4nHbVr4J1hLPkAEv99hbZXSVjBXAfGkMir9rxtYXPLxaa3PXdo97nP97",
  "key2": "24mYiGyggHeiNHTgtmKqhSS5kZVrissSbcjH2JJtzVizMWunZjuVwkyeR6GRbzU7cFW3b4yWX4iUvr4Nzjpnd5r3",
  "key3": "5rHY6dgLuRmd7bowUo48UXQRLRBypX2yaWos9TJvpVaH2FQS5nt7cmkAkLuaRDwjUzogm3s2Dq39CyN3UUPbX4m5",
  "key4": "uiUoCkpfwEmofAiTQk97YoTzEHakjyXarGAxVSic6bA8dxqderjoa5Dzb4xZG6BMk5acW99GBZVvgSFLZDEivaf",
  "key5": "4ProkLHENqtn3MX5YmLGgj1y2ocpa7QP19ANCp2HXv3tQgjrYyx8ZepudmXArVy1mru9MUoG6KarCEPqdzsEhPX6",
  "key6": "2UzQkTvuokRDA4957aayJVWksfsvXi9gJERtNEQLEKUdbCnGNS5vSQN2vbzK3tFdK7nQ5atRRwDMqvFp3ni8VHRB",
  "key7": "628P3gRerJ4GeaLDcoLm1KR9PyLsnz8VzMWmLQzMX64sFTCBenieG3Do7xkxxnNEfMiquBMwAESU11MNsDi26PaY",
  "key8": "5DwdQK82BfjBW1JxYpwt94EktKbjJ8ZreebrfZKfyZ4FryoCxHynZUK89TXTr7BmAPcMsTd8V7DCLY9jasNnU6BD",
  "key9": "46BCRyCYEMvqWjBXyuEAo3xrLzLVHSMjWappxqP3REgTF8q3h1CaoPUScbS4huxJHJUUSEF8DPw5Y8iZf9Tpa4Pj",
  "key10": "3TFFHTNewDxmz7RnKpVQ9hUjDeJWnW2YommF5yPLa4r5UEwjRXFCKoNQvYBYUuCfv9gRFsipZozbay7piXxxPPGC",
  "key11": "3w7BsYwK2UJKb1837zNC8eGbMDJqxh7VxU5h7Ljt7g2sYM3BkURo5AzT1x8vyEbCnCeJcraA61aHBDg45DwvAZGS",
  "key12": "3FALfMgVqy3fdE1Vvysr94XABDZFJry74EFGQWzMdnpERMSbPAj6R9J2wce5ZAwxohGs4yUc2Br5ngErxoP3QH12",
  "key13": "2m2mY2c9bCD3YYmWijq4FffHvNgV3UHj7j2ySL9ZkDayRKR7FRPhh9AtxZUQM9oPT2c7mWWgErBDjLuskVXqxDfT",
  "key14": "2FC4onTNSzLJQMoVDZiFMLEemGpUgNVWBgoAaucKDvCZRNPDKK6UMTcb9uActb8WXFfZSdAZahMGoid2peVrLaMi",
  "key15": "5veHPpaMgAnGBQXf32KzgcNjfUxyJdnguNMNRwXngzcq77XNfBXmMUaJhrFP4K3sVW1Z66YDxvWMM875W7YDGfMD",
  "key16": "5cV69PUzi3hx1Ni2TKXkqqFE5uB5GyCzYNRBk7TjNNNTPbpCQ8HqZk1TkUKKq8ya5nDvffW7n2u42JCS114JQKe9",
  "key17": "6f4ZsH6Bb2WMvgd87hSjPrkXFFyyhJRzDhtd9VGEKhZ8Vj5dC7XWLsQAKQBP3wNyPXRyCY3VTk3hA4PGjhGghPB",
  "key18": "3ETFNWJbxw3LzsGSoYvPyiTu3HzjMJa6tHEEsYWpboGnkfpNoZErq21eNV4nzcjMzuKoZT4jWSZztLbsT8noUSns",
  "key19": "j3WJanHrkZ1pPsXE6awBxkAugWcY8dXEAc6YNcMUhsx675DNJ2BXpsKtUxTYgYsGwvAM6Z99ahYf1MCj5oXBqdY",
  "key20": "5qpQtcT2b3XEpwcoPNnn7pbSmDMNmVQni1yVcHmnyF5DTGMpNKHM2j2vBYsZoLCUPooTzdVFmKUfrtYXKKbKastX",
  "key21": "5nvXaUjBjM9pZ2MWYjdCGXdMLyjf9mH4MUEkLcgNRtLg5DtxmJWQCWu6YBW6M35XinNcAMXRvkS8vuJP6xyhF3aS",
  "key22": "5p2Ju51qr19gtEtZ7q1mKDzMSCpPmiipePoe3WmpZbf5gkaLJ35AzWw18KuQyzVHsF92qjRn685aHFqLFKSte3Rc",
  "key23": "5kC4LqH4255NeftjAbP9Qrf7LhhtfW3VXwZZ23ybiv51doiikQkLE8mXErjKXctEaFNW1FSE7nSrsKVskBbiZYMC",
  "key24": "2UPnrSbznNpbCfZsZwCYKqgWPrg2cKepkUghftt7VoNE8gKgFzxamfs1fJhJFNo19a8pD7Vztt6E4KeP6t8ERLDY",
  "key25": "aqFiSfGgazc4Cqy4R8mZnd43dQrh5EcokekwAGpi9frpVC9tTCLJrAu6w6NBtay5aA7uiVBMF9zkMqJ22PngV32",
  "key26": "ZPcycWmb4A2vgxuZwMJKrXmH5QkDeDiuj11Hr1UcHpw5hJsPM772wGoRfPMB5xXFgopyr5FiHQdfGv8QAAy4YKB",
  "key27": "4h7Uo2yvX5i1XLjxVjTpbUS8nPbWwJ272321QtkmNVZKyHCQpGJynX2HUfKPREs9dhDdW6Td3WhchpR65wdCQMoY",
  "key28": "5re63nUmq98mMX5MjYqfe1wAFvFJJqiCDGgB8oNTB43L8yKNWHBk4WXw7DW6rgHdfohPS2zvrMBUK26M4ZbTYZWz",
  "key29": "3RmtXhntdkRe9VANnMWTW1VKsVSPUrJYhjf6bFebuScdJ5P8FM8BjgDzuvQqyJT4SBBR9CKeiHLzy2eJK8dXbCqC",
  "key30": "55qynMkMkHoKThKHDM2ziP57BbMUbpPgaWtppuTCJwAdLX9b4M7ggAXJFVnrxvnd41n3XpvRnsqosTchM3AhMPf2",
  "key31": "4EhuJ4iske1G3whVf49WVyuFh3XUQ2DHE7caB2u3H3G1khcsmTkW2mN6uuv5sEengHgcQQUZ4PHwJmE12TRBRyXL",
  "key32": "3jbDrJyAcprSt8gthYJLmgv73RAEJxyzWxMhwtCRsnNFsXVWh3JJhDnsHuHAmxyZsKLEb83JKj6UuB7yeesPiBJ2",
  "key33": "5qikCtHu2bJWfbc7pf5njZDw8oqzDWJLycKficQ15RMUEQWFWjvYuSLpRiV19sUkETWTiSRjYpNUi77fcmJ4pVpw"
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
