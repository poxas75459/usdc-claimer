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
    "24mmy74mbqSv3bZFwD5WA3M6ix5w148qewGhtRhVt7fVxFPSfswfzgHSYWVtDdKpEnNRzhjmQgW1ndJ5A434DcPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qz5kAjLy9HrN37pgJ3sDk4HALX4eyqu2EPUTi4EHuCpfuJQHyuWgjsGots2hod3fFMpnb1VipxKJyMJMWwtKRJF",
  "key1": "4rWjAejEnsGogPRamU5ULGphXKzP2JYtLzKPSMoG5YQRbDBAhWzTAS2AuvqVdFtAJPQ7dUKE3qmTJRPHfXottoFg",
  "key2": "vbyUNqfJPLd92ZmQznjhPp3hNsrEV8CLpENJX9qaFdqiM1seMQS6vaWM89FSsMMsywV7duZiEJmiduGysYeQh6Q",
  "key3": "Fj1EVfWuEhm4rXrkFa2W43StVPNfxB5NqdZC7To41AhEGaLhH51FDXkxw5MGt3qVosskvX9MCVRNtAcJYjHty36",
  "key4": "551tNLRDvdZBCt9AKmHzHdHYYp76NDEVjFdTirrS5AeRMqHk38vFGS5NAAn2ajQnfWHoYoFZeqMsmopRguwaeuoE",
  "key5": "2YuaBd86A3CsSDo24bm4WMJ72m4GV7owz4SdJB5GT8cETYUFEgvZBiS22KipSmDr2B8Pf3aY7Znc4vChtkfsv8uA",
  "key6": "5c7vycabQviR9hwQ2okMcNAgSrFhtofiyzafVPn2UodUaKB2yVQUecxseS3K42SKZ36opqgXRiSsQijxou8ZMkp7",
  "key7": "3q8fwghGVCsyCx3QvYarA2Pn4LbizHXLWySs5LPSE12VxxJbnCQCAGETBQiTphc7M2hkyeN58gxq9BZgFb35ntyG",
  "key8": "52eWvxpi2Hx6TmFP4eauz9tErRJkuPwztCMUJCf3HwXjf1DrMsfjPeKeSRZDuLVbGEhUxy4NcbYNH4sDau3yxNoX",
  "key9": "3PvRYEAEzfAV2KDF5tBnWHzPP5A7knutgSoXhJp3EjGCzbDpDPgyKgL9xqxXgyRoQBs5HdzmSKZDKmt7RKQe5JUK",
  "key10": "629AtCszBWofhRHQ4uTLpBUkWebiUagCkPf5kSUmFkfA3G8dtpxvWchnebBGMXkhrpgpf1iJpR2eyqSU2Ebpz8TC",
  "key11": "4i7obtXeLWjTFnQySNpec4nbRpbhBSA4CzMz4X3p8hEpNoEqGtzb3Avy9Xa1ghsLHAK8npf1udR2r6mJ6uF7vxwH",
  "key12": "63JWpAEGhMUEEs1uyFcigfhQj7uBbsW6DWtYV8SzW4SDSDBM5iTZHQTjnuhHkQxSvN6qSQSPZLBYBgRqciyUp5Uc",
  "key13": "5N2XgwSTrH6BVQdU2yAWHLKvMpYsd5tKu84dyd3RCZuswgtE4f33XtiajfJnqYuu3hExgdHwjoD2L14JU8g9pjts",
  "key14": "3nfiKk4QT4qsQNvB36tVQYeUpsTCacqJzZAtLde1hL7DfS8uMLp6itNvXCspFmGBGjkdDsgYAReLucSHjVFg9Sdd",
  "key15": "5VFFA1ZVwbYpRLmoKGPHRJx8XX71pr8C1rnRHwuZEEZUpDEZCxXiF7Cpc5AKxSvt9jEuD1pE46UPUvxLWPnhWiZZ",
  "key16": "5SfUm61ug2KCoy6YyyNWBZ31G27qjY7Q3rJYk7gd9QVPMfCiqs1fpR4UC7q59frfu6XxSDYNCWyJTXnc6pCq12gr",
  "key17": "2tZ6S8Gn7cRA7ZgG2Wbk2LnJMvkxfGxJ51RaSmMUkB76FS9QKoiFEpkhpSLUWaj1kWTNvEstnVh5hSr3USBQtHCv",
  "key18": "4vyf1UYNDodcLUycgpauQczfTWvmqxdtX8tBTHDx8QFBX3nxsJfoTaYMRq5PpbsBD2rNHWBe6iQyCeqMtKBtYnbD",
  "key19": "5ZLWLuaqAJnzhfhy2jVRfYacNtWwApKypr8Q1so6kdSrusWtf5CubvY4rPpASpmddgzy6JpNw68wT48UCQzepDjA",
  "key20": "23WHqyRrVKZug6rKNBuuindDww2AxgUiSULosKvdcNDWEVqv7qry3jLz3gbbanhzDWHGZiqNACU2UF3Le7Jbcpjy",
  "key21": "5ZY17Mi3B5UPFJp7FxX1pMWemJyWbYp8N2wg716u4hn959NKcsSuipYib4gLG6wtBtSC42uBCSgmrV4JTc1etWzD",
  "key22": "tLHESX1XvHtrR6231Nn5j3kQFtqRMT221Jttq9oxgNQLs5YmpVX6Udy6ybiesUoTMC8zUvnz4b7XAbMFXEzHPQa",
  "key23": "424Ha1FV4KShSVM3f6F9FSQXJF5dUo8AcufCEwFPTLP4yVGdHwgjqiCbpQCSffH8pEFPUKSPHga1qvNHHkcwPvS7",
  "key24": "5y3oq7KshAGKHeVfZfz8dJCVHVmNaAikCD6t84977nTmhKzopjacDmQNjD28UXUpL1H25ibRYNpHLwHgv6R844c4",
  "key25": "5pyM7MqTL8SjYsc1oySXPuk7KDfHnFJEF7ko9ReKXxd9xjPkSdhULZYC3RV46JbCqR2im4jFEc7JJVXaXezoVtbP"
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
