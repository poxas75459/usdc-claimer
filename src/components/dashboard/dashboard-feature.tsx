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
    "2R1q9sG4FaY6kECxunbMzEVWNKAdacG8eEtyTeBcgtumHBnDuiYVvRADNpbFeBt7t27eafjhaF5PjHFNWqsUqfeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aE1oKSWmYWzxFpuGRLhnFeFMSKFatUMnygR7Zt9cVYNxq2bTt9KyigJ5duY9E6aE9Un9RHwAk8TN6eU6MxnHuVc",
  "key1": "3wrsMYbnrJ8XNJjQ8JCY369qFayqTZbGYDoAf7rkbMfb7SgYQnyJAV6GwfTJ6EaeUD8ocrARXeaGHNcsmbtizG9T",
  "key2": "5W9W6tp2PiLJv5yn4WimtEx86MUv6mVifkshNYkmwUTuCpE9nNTkMESJFTd32REocTeQ1wfjxamHnaebBtjvr97Z",
  "key3": "2JzVW4X7eyyZPvtJKgnAeQpMXCAdWf6133kvEZQNc5rmyXkgradZ9odh8f23cwpLaBVHSiWQridVU6pqLfvmJ6Sk",
  "key4": "5UWbayDrUDafPFwAk3Sm3mC1GvVjDAxGsi6gU64S7E8DottMnuPo8Pjhdcx2NBRX1fqLSAFmiZmpZZK1AfzmZ8U",
  "key5": "3CKix4uXqA1JgKvKErgda4uMwAMsxvVKBJHFMqYKjGCftgtAotf1VTaMYqPNDjW94hX9VdpZvxaEnctyCxRa5Hqy",
  "key6": "4SKwgczgUuZnphxGkSXxNmMWSvfg4PkT2YycepSwFiys3rvStU2tSDHENpJjtn2XdxuiRAsRpC7sqdKxuSwdHCnr",
  "key7": "5sD4gczKj6awzJhbxRRiDwg4yfPiLxbiZ95GNtZttBj6etnb97tskwDfrRnGNmTAH3R2RET7qrvG49WGobxi39Vq",
  "key8": "e8m697HGchidfJTErDBWoZoSJQkbfusXsDbdo1G6ExGeUBc5GcxCkXHniA5SCE73hGjXzZ69SrcsJ37rNJmUR1x",
  "key9": "379A14X6NYnd5Puf9KPT6GBNo2SzdTd5mvrtnT46yUUSq2qQW7FMDiRbuJgWyqRL48LMKd5giY14f6eFGJTqrWrf",
  "key10": "3Lz5vsEwYpowpowwftvXWpN8kXKhzVJNLZADNNW6zwsDDxL7GVtyKdgqJiPctCbVqnsK6yzid3stEuU35P6CUB8G",
  "key11": "3h4KZrcYCUWQuVBDkkYt5Z3VHYzWh1EHo3rDkNBRbvoxiWbjw8c11eZc4qoqTUiKSAA51exGT52cP8cR8AYWs94K",
  "key12": "2PnTM28ZySvjieAvDJazAQJpThfLBCZ1oKmvJg3PMzBDxX2kGpqpdshhERXFYWTqocvC6d483jMtGFxW4waDaPTu",
  "key13": "2D5N5NPCbDeYxrm9iz7t8B2pobaS6PRSmAzYM2UhWQVanHDvid1iZ8VHGEPqSVinE9CaMR1h8ZMA8K7Mcqp4S1X7",
  "key14": "2EEzeX6RUmFYpeheuVQh8fwF5SHTvR4EE51DaFL3HUX62aiChKKEmnASZbGkbz1gh2HNDe6Q1JFZtJF2ABfFcavH",
  "key15": "3R24fhZLvh8acjXdk2pVUPtH4LgcodSJEhTm2SYSmvxrvEKZnDh1pc7UvNMFT3DdSZjoAVXcLKsSk1K8Rs2S8LKK",
  "key16": "2Hh1VMJzgSzC3H4jyKxXmjpTQGgjD8iBbi5jFK1sMxvTLyomLfkAFN5pfYonsFU52vkDtQc3Wgc4TcpDaMTGSK3c",
  "key17": "2MCWcfHU6AHnJCeYqyNph1NGov9fEg79prKAz3yowpYQ1opEhRqHMVeAWcuGZ6h3rBaDGXygjK47LZnxRdqQX8i",
  "key18": "5GwGt5177mLyEiUqmMMoPjrKGenzWURTaf6nQnz8nFgWadrLPCjwuPfjfxATHTsQruRuFWXLJxYMQ658UHv8dEJf",
  "key19": "4mw7B2oTJFrUDrHv48ztqmJ1fdtUsRAznB5xdQCo12Ymm2W15ZLKPDvSQNeTaQUb6kbH8tE5MccSBK6T6xb1qFye",
  "key20": "BE9oeEbt8BJvzqLcdVX1bH25u7KU8PXhDg38svKMod8A2QHCuQA4CSM2XqHgygXQ2an3yExsbupriMtWpui7YPU",
  "key21": "3PMPAWTCqLxNmNsJ8qGMt99h9RXztm8RAEL1yUUQSmaZaKm9RiM79eJwsGyUyfqKxLqeGLEgK2sFkP6JuVPbD4KX",
  "key22": "2265YpA9rPKyHaGQxcQMLusazwKKkXQZWpNedQNVXUXfnQU6BY6EusYknVEYm29nwDWd2jxszugwi1vP442x4SYT",
  "key23": "3yq39QrRPR5VzRwTagPa7weMUuyLyz9rcpS6rPyuMBmnBXy1wBCaQb8pfN74smUBDnHUusHeLzpp66bXn3PJVQYQ",
  "key24": "2mydQ8ncDApWEDudKhhXYwArAwB48wtULReuA5Cu8uV3YF15tcN8eqMBbaCpoNhu7wbMpZt1sQ5See2XpWQTrEG3",
  "key25": "5iG3AhvsHS1A7DMaEkiS98TAe2u8E2ZFxu8VASshNP7VxCYaNPrRzacKsgCZbuy7m2eMqf9r9XwHbMXYWZfRZYRW",
  "key26": "337CqwTda7SmdgUW4QfrhpyVZ7juhNmFNP4DtvjsB8uncHRBwuGGUC4V5xcvnNRPHT1tG5qbR9s5k3SPrAJP9493",
  "key27": "TXJZUXHrBjECUYsmTRLG3cUWZhESkN6jTBQVMCfWwbNAatmVZp2kXJ2BEPNtFWDthR4kWdAvjgGpznLzugbaejd",
  "key28": "423Bz5cuJN7Vp3Q7HvQvqUzK4nKevS8opeAv23F3KixU9FsS3TERX1fC7JDzuYf3B5u9YMrtzBzKWB1GmFuPRHBv",
  "key29": "54rTDk146gUsMwduJwE84SwtJqXB5n2msMS3bKDwtanTCNPvFXstT6UUKNAsZ7112WbTJGimjUaRZLHa4tsud3FC",
  "key30": "4RsfynQpjNfaq3tuv6MiMX8EtWaHoWv6F6UMoFQB9yd4rToPXdkn6ShACZuPgXjtLo9xNBk9ddKJRArdSQtQ3soq",
  "key31": "4RmUzWaUWAVvLgsqD1GobqVxjJYLYf31dq7QZUtgfYghWgdMBxR8sew2jqRaF4hST6V75b3paDrtLTpeicfCBri3",
  "key32": "2oDVf94gecQ2MWRunZd9iTq3z45ugijpuVvzmbk9oGR3f7NqADoDBRTq139wBLHg828AEqMJE5sCVeVDUAqwhwMq",
  "key33": "2oGu8Y5Bkx8mR9FAVSYGwBcyDCLHDfT8X6xDBHma77dos9HzxQAikKb6F7r76jxwqzZUUJ6H6n8jJjMooCrUANb1",
  "key34": "4qDcW4CyUo5JPiSLF2NAiK6tgs4CTiq9E7zBrcYNXvpF8f7uaKE8X3jDzCE8DL2L3W2ZBqMb6XUn59vUvFNJyEyN",
  "key35": "4qX7smY7KrgmdNR55kMUhYCZinrgK1aN9qofAQxfxLnoXnCkcn5LyJVbSRn79tKHVsnouTafEwL5n2PU4yczQUWr",
  "key36": "32otXAQvNkS9MA8SRiMYcYfuH7Z1bahxBGWRhei4xSzuxMiGuzgs4D3GDfMnFD3vXA4qb3NN81XR5TA474aa48B9",
  "key37": "3cAjdkFFq8DHxaobqDw1oH9d7tGA4hTZ1vMsVcCJ7HB3Ckv2pZ19wFSnhZoBfpsXYHjptzfdvJiQKCaBhsYSPNSP",
  "key38": "5yeP93PigbFi1QaxXRyixDyMhHGLD3fX4xvoZF7n8gPpiq2CnLQbGyatJNhn6WUTE8FXGAQFeP221YyaQxCAFxUm",
  "key39": "XqB5zAxKPcDvUBgmowMBkCgt4tMD9fkY64fz2UPoCahKUav6khd61FjZaRYTt2pQUznurHYJKgzu23mX9Wuuz8q",
  "key40": "2uL4SB5mcF14N4c9GdcHk5KBtGCFmKbFjcwy7TQFm7sPF1Z31LN45zZLRrxRQXSBmUqSvkgkZftiSzZpccCCPj7p"
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
