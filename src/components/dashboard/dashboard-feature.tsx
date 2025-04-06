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
    "2SVkKmMd3neYKuC2m5FyMyjrFuyUy6CD4HgwpFcAi1fnaHTszNWi1wCRTC2cFq9EYsXiqPg3SurY4gLrMmwndg82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Ti4y74XYzrng3rM1A9EDFvJHnDybkFQAv5vAYujjTuwpfbvmrhEVrMjW4ub4MqY2VhM374cmPdsMWbGdZKgGVJ",
  "key1": "YiXFL7LJa2BLD7FRUEgE2T1f88QJB4tMrkTcT4fe5oUPcpg864B2KzRaPLGj6yAPk1f87qs28dBH2XG8XcxRNKn",
  "key2": "3Hp3zqUofELeQWh7km7Ag2M9ry9vJmpejcWKFGdLNRwhe8AibeFoqMcBqpekufC3m2N4BisVFzZCmTdn1CqkP1ep",
  "key3": "1xK1aEqu4vrJrJcBNQcjhrW1yrkA6a5d8PvGifYpnSBWx3gCDwSiwHnS7xGVcpET7MLGhSgkdanSwmHvDFAq9mR",
  "key4": "2NEhYygMLfH11uspWoPfvzGGrCxi49BfLhzPeRZhWpWhaDn7FPcut1TZ4wwin8HHde6x4UkiggHhTCHEDVo25N1t",
  "key5": "29fFYUagwT9fdujRSW7Qq9Cx2MKeEc5odrwyuHqkoSktqaJK4g7HFaPsRFLoJXpZm1BTYHBX6S69smzQC1hC7c2c",
  "key6": "1ecjXUXJru7KaPxghWsfCzTFBZAQDaxYqhFJS9kWgtwp21jhLQHeENkmi16rNQaax9ubVYW3mn8rsvQbt3J64Qh",
  "key7": "5L6gLBEh4y1rSjiifgXqGs9KNGau7G6nRyCzt4CaAsiuPwqv1CaDpCMP6w8h1raC1b55FbwBcsM2K3xvFEFgiCBu",
  "key8": "25rwMx1hUocdzVehQigwPZuMns2J5KYL9LUTpthj6JYGRfnrGR5hdpnwUH1CqUbZF5pJhdyiUPb9JfAA1gfio9oZ",
  "key9": "5hePBJvAdMu7VXfLbybHm9zsWqbKEkwGcjQGxkuDSLdjr7HvmQNxgeBcJp5FRfPsbQRuASeMaECcuLtW1ND3gudQ",
  "key10": "4gNBS7yZqrZuhLdBpkf47nuZg5ktGzQoRedTQacb22iwBJ3QvFNSeUtAQxKpN2rBYifeHXrdPJbWEgMtpQdxn8SF",
  "key11": "4vuZZHxMm3LTswC79iHbhtntWrPXvJ5StFvxmRRzSn4dfrK8wobyjkQuk7aoEDUxXW71BkjCdtkXwyXvRy5QegyB",
  "key12": "bVJQZvmHA9yRGfoKxg6cjPRSjMFfmpq3a9YY1T6j25b2yTTbbQ8xjg924Tk77NBRebY3TrkAVA2PNUyLfUNUDHm",
  "key13": "NFhVDzzx3gvndFdE3PTSR2PfMMFme8FMdttoeBvfTnyE4CyyXDRUaxw1eUfmfQzVk4FZpfrjkrgu9jiPsR6rwsT",
  "key14": "556aRjx3MUxqPS7v4a1idwwe7wUTw3p1Dqt4RYs8a7bbjXPWR9vBRmRFDMSmL7tZv1DkabhbhUxDs3F7Mqnwrx4X",
  "key15": "5GMDf2jPXTNLsc82KArbC4QR4QyKuBZx25Jexi6CbKDzQB7mjiF3NEwcDJJiJiuki58vc4z1ugwMEhgBeGubo3eT",
  "key16": "28BEWrcCj2sZXHVDmXTWyWvSsTmpuMiEc26URy7NTGvYsXoc4zWUJKJz3uPFqhTGNH6uJ27a5nWxigZ7bJqoWPnv",
  "key17": "2k5RTuT6ALsUVWVYvgLybkDpzSaf1dbdmsxaYpK5saNzCEiHkJNkd5WG56n1Nj7E1Ahku4me59hA4Y9d41bKsCMS",
  "key18": "4JwqZGeDgkYnFEmMwg3xaESunHRjXu8vjhKsVGKwTveY9vLntJmVQBWoRVpNDXHNGMT4SN8SJprC8csUMn1pdBNW",
  "key19": "3ZfDoXQUhzuuXsc1F6S4UgUipFioBcc43xjqG4WihgcThKmDaUJpEiiovXQKmGN4xBfJJoijUCvNEWKdPoGujMav",
  "key20": "Cv3zkYBoaCVGA73HJiEkGgjymhn3M7NFssVyTrtSbSBvCQ7YtCeEoBP984VD2tjXneq1T7DUtdVVw2xdwDzKD6Z",
  "key21": "4wypLDZPy7evxSFSj1Dgtt5G4zMn8nfEPM1XJG3jjJtwZeCc44NtztCTTGQsp5UX8CwUFECX92rhDun4sxVD4b6d",
  "key22": "3x7p1Ph7dwQb5SDtUie5uB1GesCaoeP7nfFjA8mE59B4Vjtt2HqR9Hj8fqjBjSMboinyDbxWCsrrsFRrDXGksGwH",
  "key23": "22VCJ6RRXBN5YCx6tr2FhMvaFn2KZup3LadMBPviYtbTySzufSBJGEosQUL9NJe5CWUjLtXD1vDvtantjdDvVdDN",
  "key24": "4y8oNAYdWajSNt7uJCuJ8cg6xsvG66dz9u8CJM1X8kiV8pBaBQCcyRaxmpYPux8AxAXtxFsArnmwbVMBoqeJnGkK",
  "key25": "2PYZZAbZZXQY6JKdUGb7KdpLDtxPiZWXN1TCUQzyUHZeB4KkKS4dLE4DXXtwn14azzrWdLCrQGLggWtBSJP7cwuu",
  "key26": "3qy6VNCCGmTJDGEmWGbiV4Y48LFXYzMxxVeMFqBjEoXLC4vnXJmzbyRiw6dGatDeETyD38pxQZeYm7QEJcyX5jwp",
  "key27": "MUR4VANhmVYHNs1P25xPi8AzawsWC7r24jDt9MnXCAwwbN9UfqiqvGwWLEQezsti7Y6HeDBdh3eB8Gyg9BMrxQp",
  "key28": "2TAnmi7x8FXcKQ3hei33TZffD5F5akqAbfM5msyfVPyzfVaLgjcQPEP3TaYHiibKkRgZpf9b9wCgJyruDwjPCQuC",
  "key29": "4dDGixNCBZ3523sqgjBgZv565PwYhjMSG6jGpoEyRcPCL3BRQ8bWHffrwoKnTr2aSgW3TUEXTpjrNM6Rc1bSuyeY",
  "key30": "tqScAmSZZgptVDf3im5cTSUUK5DJQuZv83rbwrq7P16BsX7vP63gvWZji69vAyLR2np9DZeXJ2UkzLrmKnbmQKS",
  "key31": "5HmfKqCpu84PRWpfea2muREfksZvSW84RexFwHcxtDU2i8CCVUP5rp3Br18jPN934S5e8rNJGTYNpfU5sLc5ncn4",
  "key32": "5m4E5KA5g254cAHkCZnQaD4wNsGTdGRaHJ7zJpYJY6vg3nosc5v1Rm3VjGMKuN2AMaiGAoxPCBGLFcVrndJ63SgB",
  "key33": "5gsJBx6NT3Wx9UHf5qX3cjzam9tkRLF5pF3jjc7unjJmU2eefexUy67XDShxUXkVHVnc484KQnrGZMYH3Kof2xqF",
  "key34": "3fwXcxc8j6URtpYeTnk9YBVhdn7y937hRNwp9AskRjmeiKun2wEuHpSkoKGrizr8jcfjTb1r7XCJvpF6yB5LPUGe",
  "key35": "tYitxA11Vm7UxgB5p5vTzAZq9HDFFGK8V1ctaWwoRGhgfpX8fE1jqMX2WdWmmuUDmsbF2dr3DtKXVrvEiUVAKB8"
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
