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
    "mSCXQSTpCPCFKZG6Z1YF39NzD5v3g7V7E6Y9kqQCnGGTS9jRn1yYCLPFmxDDPMw71C9sD1Kex2UxXdfiTkPk61v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHzDUBagyxPff5AQtcDN57XDKtjGcgu3uhFPp6J5a5KW1qPNFuZM8b4KUQMJcSf5ESgfWCQ6a8NqvfESiRg1KSA",
  "key1": "1r7jGQvqYWZaTNU5UUQ6h47kV7PyMKdoELZSBsTqS2F6KnnFL1jGPUt6R4ZCs5AHYLxKazLvEvNReF8YBzZHyNp",
  "key2": "27zPaKhrgrmpvqu4pVsgDjDzn5TKoUVXoKUkEPdKopRUnP5gca5wvcwBvY7mE1JXw8vmb6LaSxoKH4SqjUSCDxtu",
  "key3": "43dYB54358VZ433jkcYZtPVsNp9XPtX4eutQz1UYm5HRoQaVqEc9GSoiyoxJghJ5uRuYNKQGN7mbfkwRHFPaMUpi",
  "key4": "2esavtEFUnMRkMCPdh6ehPG29YnwW9DpbojCwRrTyaRattd2NeEJVPtZiJG2vn1aLLgyyGAmzNhowWdKHQbWNbNK",
  "key5": "4DBz1w4umQDSjpGeV3KfUa1srhXLsFkc93sPXuF6vJwY8p4uQUvKso1DFF9wnqVExF4s1HLZyWq41F7gWLa2RiwY",
  "key6": "3RNK6eXAHkD6cSSJbG96LJ1Hdw3Fc5Cy819phTG11gHBZB5yS2AEuPPeZqW6V5XexvCDcFRyLt6QGRYKJPsMsRLe",
  "key7": "48RkMbHafCC7qKMrcgxwp2LXu8wxrVRXV1j1zri3dKpBT4Sx7jm5biVMeNnrBmei4yh9GXMvbMr9vRRx13jRNmZ",
  "key8": "2GjgHw8z4Dg5bg88XTj27P1Pvux3EoAWvZFaGmALkm62EjiqPbQxdao9nKE4hC5GWKXX76Ndo3i7W44Niob7R3W4",
  "key9": "44Wu234k2TaPsCov3x54UfE7m3tgu7mdN2RbKkopgXoPGzD8QVSSYnBswHbrrUS4K5aiX9N9HDnLKZKdCwDxSPMu",
  "key10": "4nXrya974hju6eomZdAtEvow4YyRo12c9ALVoSVABVgS91N5eKTDkrMCNEVaTW58zmp2a3Zr7FC6Ydnh4dHU8EMU",
  "key11": "4y5krcyqpkwPyT3QwXwYY6vMN9xRCTKNfcJruKybvy5n6ZMdP7RawDe9jUAXChCacY2M35foTZaZ4MqJh8CJHJT9",
  "key12": "BRnaka4T3jTyoDFtgwJTvNnrbwW3YSTmEfi623D5qcKce33s768JKcEQtS47QEroD491uAt9dNoYWEJfWhrZ3hE",
  "key13": "2rpMX9nQ8dKptSX6E2E91wB1vcEqmiaAFEdoViDKx5hydhtLSApttZb8xCd5Nm6e1ieBC2E2JCmvAUQhXkEnZZHE",
  "key14": "5y8iSsHdFgtD4jkGMtToEuaQBSawRcfWVXiYDPmvUTZjk3gxFby6UCBq5X1YGiTuHoGn9sWqvRHpaK9f7ZKbJDhL",
  "key15": "fabtiNf3RdxJEMDdHJ1B5FxfYM4ogxVyeDQMXEz3U8AFhQoF6sThAXP9jmvQHRooKZEhdkuhYqD3kMf8TVr8iHT",
  "key16": "UQ87YinrXhSJAMyMhm77tpFVLtscjf3hNpZeJ5HcPjgCqj1nhH9f667aZt4zGbysbB7gPEkkHYXfsuLeRFR9Pu7",
  "key17": "3bhnaEU4DCiKyiFNZydsoJKCcTi7HiEPVVsrzbfUEHBVaamM6JhMNopXSVQroZoL8XcpQ6czE98ctXni3QNG3vM7",
  "key18": "5EzUBASTmM1sFLKb3tZurPYcufN7LTKAwFNuXg7CyyzDbfFm2QPo37HS8TYRZ4ipUgZZpqqVFysQYq8XLeXg2jGE",
  "key19": "24gZBJ4mH3GrprBfD6EHoL4CShovyuwCdyAWvuetv1XL5pCsCQNNh4Tv5H3Su4awu6bZcDFiAzqLzAjyhXFWmWqg",
  "key20": "4aKz9eK2jk7fs12uqW3R4uavHwcwoV7AHzJXEm99WFLHdMczzPqhAoNHrbvWGXLjPv45kcMWDy8Ep8oStjiRAPp8",
  "key21": "4A8VChNXRphg9knzBWBYtPaADBV8PKuCRiNJwjgrmf7syRCaRi4fKTCSQjbDD5mAVTdwt4paH53ubJwuDKZ93TdM",
  "key22": "2oLSLDA2Cwh68Sn7XVGDKgeQrQrPZDdTYMvJZQiE78s7uFt73FiDcNHeRMAZT8P5C5Xc4T8Phkc5aDJNKNwPWNSb",
  "key23": "4erMepFDfXfm8dPWVA9gzGCokzGnky6K3Q35QxThji6wwennew7JjUFXzXajctokC9MLnKvxed8CSAsmpd9cwShw",
  "key24": "5iuctTxztuf2jbFEYbAA3eTho1a7dfzNS15sGbtP6mVB5xJjLkkgWnmhjyaAjvvStDtAj7uopH1MMYrWUQpfoKyG",
  "key25": "5QVjffkq9pPnFYY6kqGporiWQp92KiXL6CWE7hdVosKtQNKJJDQerDGfXGCaYzUKvhHXehu7nTo35XoLCd1aznBG",
  "key26": "5a56eBFKZAwCncTjAdq7bnkQd3CfDiaYBugbpdtVpQN9j3KMJ7CUqEzAtGTsyeYA4hJRksaWLxm89pwpsZV3EQMz",
  "key27": "4tT8fCSQt8nYYTog1bGSZxQtAbSVwbyacWY1CJBXEKCaBUo2vP7FSQT2fZNgQoLcxA6c916bxJDDhbg9nyV3U8yG",
  "key28": "YBHKBu5nHiew8nxcDfo24YZEPMytUaLDYnHCDTLtmqsSTXnSZFKp7wDj82ucPcK1S7T5EHnsyZePgqATj84b8eV",
  "key29": "Sh5kjmH6gTNU5n6sM5DjLV6JGyFuPCYNgjYa9Bk5HRoTUCoP7LsqtPzinaJkXjBPN1END7vQZGDSqTz3264cAAH",
  "key30": "qV6HHqLZ5qf9ypT1ai89AdQrSrsnd8zmAJ7iXoRWBLd1LS21T6D6B5mEwTpSSCDsvk5TG4NSd5Q5PC6GDBPuKBn",
  "key31": "5zFMpB3fw1rZzMr2T1dL7sHbZJAgY4BapRsb5FjbNmuSD5D32LCekKc9dRCB8ED6SiMc8MSmFJBFWq3gkw6BQEt5",
  "key32": "eAbXHRj2TwVmpScJgRy8TNajdyNWCifacqF92F5kvHfVr1SK4Yn8dSgaQr4wKYxRwKPaiYtymDpHJ6QMGJVjgYC",
  "key33": "p44YBg75Tf5neiXARz7RL8R48iRRomHDmXPVjASeJEkupnqfSjJ63ZqUgBZs4ihTg7jvnrvrPW5mvtjVkWVRe3F",
  "key34": "P2Bqq5R2xAJ9WBgZ5CuCRfaEaBNkiAUP4iqx9GbJ78PEcQbBC8EeWwTS9GySF8oahZMMB2p9YV6axj25jtT1cE6",
  "key35": "38PD6FGeShtjtMsAwhFj1YFm3sEs884WuDnxeE1Ysyc7sdCbNXAaHBr9YEFh1RdkjK4htS8HodmPd6et4bLvPz5Z"
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
