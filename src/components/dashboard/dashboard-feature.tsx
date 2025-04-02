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
    "5bde8oufhnCLHH4qQqGm67y849qmxA2PHxfmYhpJBYtR4e7sKWK6Hw5Hjk63MiaVm3mM9ktUbh39Me32q9gyw71A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F3YobdUmAWVFa27G8apmhdXn5MiAPaixEGg5TAkVCkfMoEVDmvWemLBBJapK1F4R2kzZnQHdyB2gXaSsMGmHR52",
  "key1": "M1H5rJGqYRFxSucpa9tTAs3cqKX4fib63PcymnnyeeCnk39SpWZrAgbv4h1Sd8USxoRFKhPzECMjyi6GufMMQYE",
  "key2": "5XjLwD4jatDU9nzaYVUDWGvZWhBHBGR6GNDgyLa6huHrCDgkVqd4Ed6EH37uXv9PT49LN2iQWzta2RgDbSNBzBMh",
  "key3": "tdPDSfaFABambu9hPB56VeowadTstJomVWKM7EXXX5zHPhZZMiguQ8WzpoSy8dWai7YYeTgMdzxMA6tcMoJYtEH",
  "key4": "2Yb5Fn15d7zSHpQuHr5fRMD3Hi6H3MteBQwdPSWoDweDc3dY4oxGLZ7KLsdoS9d3qGTjd9PpRg66o72Xn9v7uqCg",
  "key5": "EWREZfjWXTkeVwVeVrctdzpwM9kFmSNm3kudDzc4jRn7ofqhuZSFLLXUoC97oqhUfnrPUydThTCoW2EWzNWnXbn",
  "key6": "aUXajpE7Kbo7QxtUQduWuFN8vkgmMCmTH5AZjVUS2phdRbZKSANaHR7TVMz9yAmMrcgmCkDR9TeSSHBeUaHyX1P",
  "key7": "6785nnZLB9pxkopavgc49sa19E2EjncoTCiaCYWC5b32u8ihJExdvL6UXfuPCc3tsSTEBnt5VYPGNQVZSGDhRbWi",
  "key8": "2tTfe3vtAb9YPAUQjbU9yqD6bKTMphpijG9ccSfugjXn9BQ5TCkLVKtGKxL64FidNhbCUiyrpUasXsmfiF4Z9qgs",
  "key9": "59rTUjYDXypT3KLFwjrzw3DnDqDqi3fq7uNj4FRMhtTDCdrFDYayjnwrPqNMYYWbEnauAuM9NYSZXeciYB3ek53n",
  "key10": "4HYXMBpjTm6gN71hsNSwGYhuHwFmdzxecvTDE7RgRSJocYN8ENGTrsNvg9jXMDT5Kxeo1BVKzr3TEjH8BFqq4PBx",
  "key11": "4enBHzg1cfx6mStQAHFk5y7TtES9HBNMVQbHw1pcM4kK8nvGVbhGLBHtbKSsfe7FEENPd3w42WPgGxR3KYDaTvy5",
  "key12": "52J4ZVgP7wAZVznDPtFDfUvVuLvjg7t9NvHwgKXZmCyyZgWb6So7r9mjCDjmuNjd9EEMUdimSJ2Cm3DSmGmy6p9g",
  "key13": "4ypx4VXkE9sWQPLsRsoLpGXhBtznAHBGbSQFzC6FoEjNSfFP2Pvp51LwtcvWf4ZBiAkRCyyioKkAEKurkhp3TDQ7",
  "key14": "2GHVWmVofEXm69ge6D6BvjgmCTBq5UGvhhfN2EvBf4nPL85onT8rwgvRgA4wDtQaysFzhYrikBjJpRijnG7ftzHh",
  "key15": "3XbKH17EzcKGMo91U1RkJry2eB9RvGu7ARgtwDH7tReAgivP9qtRCfaoK3wj8eBCCAuDNtWkaC9DRjoJrGKbTYWz",
  "key16": "s92KfuHbndWzJBtKzYEKAj45tbL5BUmYgutQkkrKtanXJsziWAyofzkuR4WRn7VbwnGGDKifcScuQFkuJ4YgEw1",
  "key17": "4qYgpRXVKbznigUf7K939vrMPAgZoNpaEqmuNQtprj3JSsZERidL9HbrSxas1VmxEPE1uQJBkko7ESepzFtojfVf",
  "key18": "4Vt9BiUpqeXsPkmELzoajJfMpGeRarkhJiWL55B9iBD88uRxeuBdwKduS24G5XyX2r67mpmJvMfx23uGe3pLJ2Tm",
  "key19": "2sCzsaDQRK9S5kZzF3kTjb1qtFGPVddKCtLTUUh7yRjXb9UAXx6PAs22mPoua3njsvyGMGDaLhjqkuv7KVT5TWKY",
  "key20": "2PdEE9M3CGCPTM2N41eKhYbF1SKimNrsSpKXjBPRjHrJ1Brpti3gwvZd2ZJMNSGfYKWe4ENRowqEyShCT1cjRas9",
  "key21": "3S1pjzWxAmQ6QszjQGtPe7nywv4SRs74ittJdRFrb6jWZxpntms2veiYr3tR22bv8TxV3M9vvyj7397G9wwiggPK",
  "key22": "547G5mnpS6cu75dH34cFWy15V3mU6TyvgBv2jVqGHTHdb4idpN3AEb9mSZapkKCCEeL2XUVgL1gLn2rZCA7bWgNF",
  "key23": "esyGd9E4wbnAjZH5xL3V2YG1eHh4TUMeRFPoPUJo3PLWvmLHg5DDLVx5FjyJwauU4D2RoEFkaAzg74zZmSxwULM",
  "key24": "pVePKvCr9QeZ3tGh57VqdBt2V7zhuXwT8rVrUMLbEjNBZUn8sEZMaVd1GV72ZuwU6sjKpo2HXH7f1o3yTjRSxFZ",
  "key25": "5BBsrtwpFEZ57W8jgakxBuw4t28gS6iSLj4uPqGtt4x39iVUpS2ayeQoYKSekeahes1sp9XaSguxQ8ZFESgGKSky",
  "key26": "3MLzWhRtb7x6De5zdnWh7Fo1siNP5XG2ESDox1NjDVvuvmVvKiNKZ9fUsn4pVyurFNEC8VuxKTQfqjr59Ajg9aLV",
  "key27": "2Jy1PcMGLEH7Sb55vEBsscnqPeoDh6go9Dyb2cpzTZJE2cFcDnsiQBuuHsfuSa8zpUJk6796Sq6pPJmLeRSgPPRT",
  "key28": "4ru1VTiMofC5gNt4EMyh3QA3LrcbC77ddU31X133Xwf4tKjoH54B6VNwy41zgqdY69c6KEUVj2Ni5En9TNg1nXxM",
  "key29": "VJ99DSFqePwCdK96S7p6Nm1HVTMwzD5kQ4sDyjJcXo4YLHe7GqUD934nLoaa145je9W8WBNqtcPfs848wdgXPXc",
  "key30": "5Ddb9SV7dNr8MWcKhwtX5B3sqEATcZaUcdiBT54qDVgToFNKXPvXUCdDexoxYz58nHHUPog7QnRBotrWZaQY3bGm",
  "key31": "3F6bekG8FttRxDR6eW2RHJg96tJoCTsPzzJsUfwr7LPyynUBYQj4mq54ToCfsAmGo4VkPr3vrFYhaq8VYuaAukRZ",
  "key32": "3xXxJaBcKCRHrMqRLZYzJuGwBm8xwdSGaNetzwJ6k5kPjYrnfwd3ySe1UrqWtvcnXLTZXDHjumcL8Mtscg1LbXDX",
  "key33": "3t95TmhG6V6KsjNGxP9vSLGSLab7cydkh4U6UuteeCiky4GkeL3C8AQpZDi6LPqp6yUf6kcnoWJ79AqHpUkCHhns"
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
