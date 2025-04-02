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
    "5sWLB4sgZmkKeLRk6dKaroGkhLGiZykHZazpHGNGsSLuu2PSygT1dxLQVgToMKXYgJ1gzphQZifVVhASh7XZXtKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDu8xeMHXRhYvbcRMSB11EiRH44HDYF7nmQie6tB6Con4SuvVhvR4Uc9vzmtK5D5JtBCrGnPcj8hLotqCuAWoV6",
  "key1": "2eoUvozxPPQAoayjTsMBesWxBgPs5HLUkRnk7MBDDNkwsxNdSe2dMc2X8ThqzQZuCa5xjqY8VkgyEA46nmPF1nJK",
  "key2": "3fy7TowsWq7gLP9mzTcfNpcyjmgkLjzLCrZ1nMJXgPXSyzcSa2U72PxJNn6EDMHq5tNPzCvPCr8A5FKq2bWthr5Q",
  "key3": "UsBqvCAk6ZPycxhnHYjcg1V7EjWfitpxD2KHs5Ef4JxQdSpH6tDLyiMxXaJ3N2WyimLnNjptRo6eb4GCHte3AMH",
  "key4": "2J9RJP9AFM5ryNc1ChxV4gpq4MejwwimrQnmZZ5vg9UevhMKBTkzkoezAcm1iqf78zCD8yA6sFKHqJFog6cZzjpj",
  "key5": "3DgzNy3Ea4WimtBLj2W1r5mSYiEzMaGjpNE7gEjbkDw6g2LzdZuRoJaLQDv524vVEC5M9GpAtbZ7xQLormDVQy57",
  "key6": "47U79dFoGZMhH2UUNVUxAEzrXmL4vRa1nDU3x9dDhqokKR1B8bVQBDWygQfzSH2Xky1pTrPMttg2ZPuoiHN5n37c",
  "key7": "3JeLmY31Si3Ez2WDt6qHrWBVLg9YDwJEsCp6cwKXDtHLL3pA3KKbCD7wbnpSx4oFJd7nbJQcg1TjWYhjV7NtRFE2",
  "key8": "2fuMaVjS6CpYXTNHYtyZc89YRJUixB1a29ECKMhjaLv8gNazdrSBPFb4VUHLLvmfUgBLFZwvo4E72aVu5GAzcpX3",
  "key9": "4VpFtWqagdACX5a1tQTp6WYFQTf7gWKMgcbXMyDXPw9NLZEvsx9x1VmWPCCRnQGzfwDUePR6JFa2h7FmrDt7pNxz",
  "key10": "2P59g2fTb3cXongMXzGNNQA5nNctPTLkMAxkL4P4XBQkjE5xEnLNhqLGvW6EZhiLgfKNJLuRH7TT1GtnDCMuktkh",
  "key11": "5cwN3XgpcpDNFoNFqn5vRqCMSBermTxdimN8uEJg7MwVqtGz5i1AVmenN3wuFuxGBNzGwiz9P1rqkvk3StxS3XbB",
  "key12": "3KHjiEkCEKyMs8JJCCEZoKm8yipCoowd4XNoyNdk97LXahhM8c2ZaBB1o4NB62CPRx47WtnLdnAdgiQw4yLg98Kz",
  "key13": "3AMFTWStuSGaZjWQEMDaZskZTXjnTv4pnr7ritDT88Sdc7SJAnEQrwwmrQrKey7f1gKqT2AzhB48fwQuaMDjehDr",
  "key14": "2W6j4EyPpq3iJnXueG3EQKnTD8muP4CQPk2Xh2c42KfuVyS7nctsxJdcZLeUAgkuipNbn4s8nu6C2VssmxHcUJf5",
  "key15": "5dHD9pgrfMmfDCExtFT23NuotS1ko8pCQMeuSfPKFMYpEPjhrnB1nAHJCm8yZZZJo2mXJFgbtXd2zma5bC2qBr9u",
  "key16": "4ZpWGzJi81uWVaMdr8r5CYxokgfydgfatqcKTahhQhnLN4m4FJdawTeW2TSFfjsf7JywvFzYErm5HpqtpUXGDUa5",
  "key17": "3Uxo1PmCaqYt32W4BS8Xkfu2E6pcydgZxNybuaTBcEMCU89LBweyYi88CEE6YSTF78ZY1ZCTMm9BuFib1W78apQR",
  "key18": "2hy5XYvpq5NJUHf91HVHSfA16QNxdxb3CoqLSfupm7BpYJTMzQKiaRcTGmNSup2eyhH373V6ppF2buFtXzF9JUW4",
  "key19": "T7ZP52Pcg4XHD777fXdpWSix5gkpahyvRu2LyHZ1Q5fpeWDnSk79qfttQ3aprUFFLUS4ky1Z3ojhiybWSY5atGM",
  "key20": "2gGnEkVVVPNDUwt6emYq951dKaXQ4wViA49YeTSndKfR73Q6A9U3qJkirgVdJWQLGdzX6G2YGScZcuLLuD5i8Qkm",
  "key21": "2synDXUa53QYxP6KQkXmzNc7SsP5TvKowrgTVRX9bjbYMfRurhkDnbaAwCH9xngXGKW6sYrV4xGHibwHuXbYLbut",
  "key22": "5WM8n6bkMHiSkq8516YjeUvihHMn9RtpRFZ6gQ5nfGUpN9ygBgw8Pkfqer3Qxj55UdYUC8ptc95saYNGrSK31oDe",
  "key23": "5MM8AervTtLLNqyMkquwdtXojQzixEjJApZ2L3dzbyXy7HoF5XQ9ChFNmqR5gEEWoN2DWPrdFV4XcFg9dwWGecza",
  "key24": "2WWckmdBB7JVVdbXmWqf2rMN9fmgz1uaCmSApJAJe4cp58XBe8CWAEUqVgrBFxLUzCk8TVuVPHLBAkuTXX7shhq8",
  "key25": "LhLaVLeQdanReqkxZTtc5kinnVTuvsmmdiKWHYEQsEbc5WyL36kEVAVcUfWCLZPmtFXg9KVYD3tT3ufMVKWzfxu",
  "key26": "2HbZ4d47cXDCjQKXPG2Ze1d97VsqwdDZHh2NxeScTxvmcqdCNrWtuasQ1i5MfncmQfgozdiXUMBa4ZygNLN6y89a",
  "key27": "24ty7W1L7SfxxvxFiPhBVErFYtZxBabQtNviujpZue9Xe61bP4kTdZThYD9EcEatTLVettwstRU8VMZNa2v2Ut9Q",
  "key28": "3S1GnETbFYFdhCnfb2jgsLKac1GvuCDsLHHyf2qRSgT5XGsqFQtBX4E6eFyhWJtSDdAHzq8iPfkF3qbcGoG4kbt",
  "key29": "2mCrvzZ4YBTDqrS9GMSBGp55QXPRftc9DFANxYrYCufB8HMYBTCVmCtNXrbcQXGHhAXXXoHkj9mULh79Wk4TZbPL",
  "key30": "3i8XEgJ8HiDpwUQ1YHqzhDLvpyDWpbAaSxhNEMV39rS8TVEar2JJNKh6HvzpoRXbeerw5opWrzqMmcgxgs7cgQX4",
  "key31": "2CXTsRimbQcDR8crKxdvAxP9RCUN5qmogGendhYcPQcAMXuAspShLZeAy1aYkR3z9todDnc6b5mdTjmRUs41cVVY",
  "key32": "5PWQr6qus8MLEuzM7yGAsAMPZL25xJTNPpiSeDeCzoG2df8yycXusonx6nKpiRduJqgyxMsJ2uJCML7D7UZA79yE",
  "key33": "2Y534oTXJkn8YfhEk5cXCGRcfF4YKZntn76QaoGUkHvAp3RYcrGkxeEvN7iJdtG7pchSsjHCzsKuFrRdhxDF5VWb",
  "key34": "5UaZNB5wSNeLdR1CHTwmuRTL2CoTnQPJ1bSZmM2xAoSrJHyjE8nmtMe4sHftzD7hBNZtwybDg6qqkDbgDQ9jRSyK",
  "key35": "5fMVch1s8drACz3ZzCwEHkvdZmWCA5AM5FhPtZt9XMLBy7CL7mpm7NVR9T1BmXptUiUt4AcCfDEPQC7jGLuV1Lmc",
  "key36": "2EkaQ3s7XrtWZJ8aWvebym9oqZTiqf859QKMbzjGBQjDAMvzbCcF4H6n3mJhAkJe9suukpLF9wmv7yWHZuJnbtcf",
  "key37": "31n33Mzdok4LRnyR7S7JcFDhF7f6L14uiLoCnNVhPe6JCU1miAkTZyowNFLL9bEYsFmw8sfRePjWTMEmQoJmW3sM",
  "key38": "4ftyiURTijLPaDD2ajTfsHZusWgmSv3bVMN73hRLkzibprRYwFNMvGf4fbJ1WTM7Ftw4ZATnc7mbZ5xqBzx3S7pv"
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
