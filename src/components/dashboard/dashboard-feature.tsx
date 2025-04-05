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
    "3QbpwmpsS4PDPma1WFT3hNomB9mooNguHdCtTXaFsUEJk2XuyXGEJTyNsE3rD9kL7Y5xxTmhtoD26ycfmD57C7fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "415qHkW2Pz3T9ZJt38ZcCSkLmgLzi4o2emjnTSobKCPcA1LfhuJsbqae4dwWT24GNzESvoPr8xa13hCCn5UQ1oqG",
  "key1": "5VrGbvjSq3bPnkmtgatJp195p9dzBmyNTD29RQAB5QSpPhs8mRvuCNxcKLdmYMyAWC7ScuVVp5PErhcmPifBU8Xe",
  "key2": "2LnxKZX47uFRJwKQPdJ8qtZFSND9eac9TnuAkUL1NtFrig9tihTVMYLXqiGYMzz1E8b1yxposT2D3gxWiNWNK4yE",
  "key3": "4vzDdXzmSKmtN9z86ZjfzArHUB7AUyotPnY1MFHNBkQ5Nu2Hsz3JacEbxbkapbWtHKCwYroBJMYnZaXYzzmEmQnp",
  "key4": "4QEq7JMuNo59TsSz4Hjn12Wj7rUnn1kxXXjUsiYU6b2kRHYUk3PjiVgkzS3iRxkoky4hgacU1JftnrFA1jqb98sf",
  "key5": "47wr2wak1St1yFgH96G32huwYKmXXM663qqvyFs4QM5192hGbb59UFhuupuvoB2PMzzbXr2hAdyTzhHfRmAYrRMp",
  "key6": "QdSYA2BN7wGJdxqxViZ4VQdPKs2dXoSBE7TuKcYS85UPsvjsfzEsaMhABH1ysW6PGmcWL6ZQH9Y6g59JF8oStjE",
  "key7": "5MMy5RobCnCo6JycikwhRZSFWACmWmyy5CeqeuKkzprvHho4aKkdiTdBHX8M9xZivumXH4cC5uNr68KHudi8J2ha",
  "key8": "5zi76bkpRGsBLoDnQuBCqAjEgH1mA4ocTYxKZa1EjiszF93TGLJtkYcPJFN41dfYeqioKbuACohu99fDZxZicqr1",
  "key9": "Kw5occniwUyEn345rR6mLxEjKyQtqrqpBCKFvxNjNYMtJHfwBtu94FmWY5FWuBBnVw6WU3qsZRFy1fyC1Yopa7u",
  "key10": "fJ8WMJTGAEji5PQqGhbUfn9gFp9CfJj2RJnTaJC8PSo4seu5X2X2igRjSadRBQJdcWsjzXZTVebVmstSycWtLDi",
  "key11": "5xrLVyGqNjiqNZ2PTSd587SisaiekDkPJE6CopEP6a2RsRKcM6SvDMCCjMJj4kuE38kdqSNsp6e3dVAhmJEyL84H",
  "key12": "TfSQyEkKTtAvTbEBjciL4TKCfa19L2SwWNBWcHzPVphEMXiZPYHNm66iRMiJPQNw49mSRwuoUPGqReSSHGyxron",
  "key13": "22QjTy41cX1ikDfFRYEMwekhXNUJv8c67vMNkvKcbjejyXWbTpf8dY1AGjGVLbDxMyic1Jr93wtU5weRC818xoCF",
  "key14": "5onsbdXtoWYyH1X6v9m8okBFAPBVHSVHdf7Si9vfT7BFQ4HFwNEGf4GBEzDMxCirpm4eMvh5UicPEFdhqNuJis5Z",
  "key15": "4gywBpMzrALZAWFAoueh3T3G3x7c55AYsqnRE1zdZHayd1Sewhf7wqcVoeeRHXCKLRA9MfSZsT8nLxpn5ZemBj6f",
  "key16": "4uR3sn1myesXzZPodwZpEALQ7nMDSZ3X49sbh7PqDPb9ji899PfbfzuRpCU27jKe3qmyHxNqMx8spDNPxf17V9BK",
  "key17": "4Eo9ALXQrxWVE8JA6sRy4T7as9v94Fup4bn229Kq5jpanjsLLc6HUENx4A9yEQzF35VYeBMDqEkwceQ8exosH1PJ",
  "key18": "33CdfMBPurTWnkPdxLQvMhDhcRneb5p5MiPEUuMdam95JX58Kf61voYYrti3dkkj6HxVXG2yW4kxb99f23ZyBbpg",
  "key19": "5UreidBQTnPTKqvv2scWzbvMgj5T5pB9wUAHx1yCetq5ZX8tgu3RSxUWgexRNocbCsLZv8siPGdpazUibLGucQfW",
  "key20": "32NfE9PU88hzeTjuFuv7LonFbwvR4Rt544u8yRqhZKXLFmaRG7e5DnNKNpuZVhtvsSUNvph7YBnjT7pRkVg9VmN4",
  "key21": "2EBjTfX4sQSoiXnupDrwiBHfsSFqCGykLczLVD1akaQ4WFGE6AhusvnJMoXYyMk6dYerT84hyBq6LAtn4dYtdemJ",
  "key22": "59Yg7XnRnobxiWtBhheecbrzp9nHM7NiURvtfgJpDk7vZP79Xqsor28spuW9HzaTEut5p5wneXsP5EDLja9hTWTq",
  "key23": "4Ky3GBDodrBgZ8afbsz3hQuQTtrJiQmWfAhWvA2taPeE3JNP56D3AWFSfAnEXinZjHqGSGjoQEUzHC9PAaXq4ban",
  "key24": "4TDyxwP1xoYEjLtCU7qMVFDCmCRUxnXo6jhHkvweAtQhEWaJzwygiUCa9hfe93mFKDQi12VSDeLJxiKkSL7GLcav",
  "key25": "4bYAkdLDF6qMyFcQJgGe1draYuTxhduNeiFYwnXM9FHZ9wXovBneEGiC61giUq11dsTrutRknopk4y3TfR7sr97j",
  "key26": "2eDGHByHquj94wzQaMoD311MLXBNRJwPcU9AaL4bQqRATBStkdowsPj4NicKE1HwbQ6FfkypgaVPFvSi8vYTCABq",
  "key27": "43KUxCkyJSvNqFMPhaZcDZMDQVGoUhucQwB3e1STkD2H1QxnjgMWr7UKErPybjtHiAhaFJeMBwZ4ryCKyqUvkEmP",
  "key28": "2xVsHE524P8yLuyChErpyWypWsUNgy1c8UdXea9QWCeyj6QAVGSjUDCkC8bASZHLTfm4gWDuadd2ehhqgxojCo95",
  "key29": "3t7GtENkFQwzcNR1BcVgNmr7b3srLse2waKT9QsCD6Loa6Q4eUQuUFGXYPtu1xHsm5twbStZMqisbq4WVJUbeXRc",
  "key30": "2gVHvARWmMZnN4d4j4Ub7VbXmN2ooLSA8vcP17S6mhTzkVtux75Hs9NPGCwR34Eq8PimWCAMwB8tD6buFUyhMjQU",
  "key31": "5eu5Tjm1sQwDpjkkuX8g7hVjLGqt1YRpsE1VR2jRVDhkitP4pLCQC8zxmcfAJVbwffX88PRn8BWSux9u3kr1myPu"
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
