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
    "3jQzXmQF8DjrzJWEf1eVc3gtxkTyMKc9RUSB7U23tLSPZwLNg3uhwq5ZeYDmvoTcXDtUCh7CkX2exzHXcqkfw7h4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urrWZM6KbxpoY4C6bWT6mdsmWjcw392vGQvSUnUkTpzymKVzzpiqaJQNLi1b5jGZ312WGbnR3Rzy3czqYTdf9eS",
  "key1": "H3uGWfSFy9oty5mtiGTs6zW52ki4kFnG3dhvnFF3Ro6A2KyoTo27Hu6nEgssLbSJ6H1rdjauztYmUXLorj183e5",
  "key2": "Wzgk9h49Q6YmcZ7cSUJifuYNWJok8y7ZWdev7Aqn7wXzYKKdR95pWN3i96hLXYVhwFMpdNdhuDQWuwauRfEmV6u",
  "key3": "3LRZx5C9SWabbJyc57JBAhgK2g6PXJrqULCS7fASNyv7Q5ZbeQJTuoTaAeznKNc7CBHqV4doLssXLRU9cRuDX7h1",
  "key4": "5WNUU5RFgFiYrEncj6wC1W5oaf9nkDMMSsw2H4SojSzvVuEtgFhGEXYydhJUVfProgE4stap3GePXScTT7PJzQqS",
  "key5": "bMpSrQu6kWG9sn9vNoh2HDfeRmSowLq16S333GXeuuqmauGpZt4UBfDReV5M6FCXSFLUcxgru8bJafZDbvLwLZs",
  "key6": "33uNzjdqAHhHY1XVYhWrMcw887UhSpszrm797WfZod6bLWpvS3S5eE2kscjZtj4EG3dt1D41zZcw5mJuDRAJXJsn",
  "key7": "2CU8hC55vcDxmnD9Ldcqb5SuQuw2RHqWP5Yk4nnmaKbqxB4Wbd7tX9wZFazRLu3UeDdgWQN32D5vvadsx9X5BaTE",
  "key8": "5V2sCEFtQzyBT477er2U519v2faxmEHmZr5qdEDomcnRsmhe5uA9xX6FKwsmKZh4bpwyULoCsJoXBC7PNnDn7FHR",
  "key9": "2he8LbqCnJDHirA64oV4M3uaNzMaXwibEXrfDc1EdkJ428HWUv2o3A8Ay9Stnk9an3bgQavRep5Mn5YdzLi4Aiiw",
  "key10": "3n4xcBMWvR6RNgmP94wutwuGhqosLY3KSDUKsrN7dGfV6ELJUKwj4FiouKMHTXxXAED7HKLCf3MpTepRZ2PEJjF3",
  "key11": "3gHBRZs37xhw387eShG6Hf8cLLpeaDN7w31jhpQMYxh7N8MBhdUFrX9EftDxfnxX9jQ8W83bMnhd7MmczHGqYhxY",
  "key12": "52ycPUAGCtbUGSYNfP7cUyMD3HAgwPWEHb2zbiuwWhmKQSHfS5f3xMGqu7GUQtui8u5Ajo8Agpd7aaX6pPGyeLw7",
  "key13": "2LVtkXLFb7anmQ353kUjLDWBLuLN8u7YNG4UnM2i1eZ1478bJxXBKmt3ybXFnXeShFrRdnhc4B5fPGNwA3qrPbgt",
  "key14": "3dmdnCaLBWaBBmD9fPAqypiibv8xzQbKTdvcXVECFmPAUnwgyBUzGCfyp7DY75TasVVgo2287az1NzVSKMSQEsb7",
  "key15": "2p28as5KCZ8yfCPe6UKEKH7xKYXqT1Pkp3v7T1QtYtc4TjTSBTEfKzcztC7xnefUDTxpmovfdBHMzg9BH4Hk5X24",
  "key16": "ist2sdojw6ba4s7VnSw1aEzAy8Rs7V2jZZ7gFk7LMn7QCo2LrUwEo6URns5YfwKjsZgc114yDGeMXc5EUwxiDS5",
  "key17": "3b9wakARb8SsAZxFWq9icRauZqG51oyg4VPZznAioyCt4RKBXvXio38yePvkgkWPNFB5NYHZ8TfhAxUCMhuyEddP",
  "key18": "2W3byF8EMSyiEY5bwoUsSbAZJbkCN6BZjsaouCY7Sun7qTYZKjFDS28Da3sUF3w1hSyBrZraaLiLQKfziwX7SkGk",
  "key19": "dXMr59W7ScRU8cem6XWAKuKtaCEuuVYrSPfmuad546bubaEygoFgyjrb8mRQ4br6FxQhh3sR6UjjTz3Kk5toi6P",
  "key20": "2akcZADt44AKxguKmoEM5gbTwnWhKRokVVnAJcj1FsivXSNk5nZiD8okM3A5qkDR2KhdTxKD1vHizkGFR9qqGvh3",
  "key21": "56dmnXhE6XL2QJKsRR1TT25M8Hg2cA4vY6cwJYamB6aouWqCZCBDdgfdQngeJ47s4YL1t6YejxMF1J76py9iTtS3",
  "key22": "4FgGDgFDc3VCHRBecu3omv3Yoc4pRrTDSjX3pAycfP5RFy7G2yfHcmgEsG8rrnziqs684Cm7z1rshbdeQwjijJvt",
  "key23": "4oB8W5eD94Czf4eyiAvUzPzPtYiPzUeacjXYDHoT7TQ9sGZh4L1fnroMPGA2rsp7auhbsy5Dv193zdwG1YAPzBmg",
  "key24": "4q53sg8D8VV6Lgu9RLC3HFPu71zgmiR7pDgFWpD3sFq4ETzWazqAwUkHNVGL3otZc7VsNF7VwEv3PageHENWFPSB",
  "key25": "5eEM7Z6BWhhuLVjiBzihtrszTM8nGiWu5zCWKwqvF7WT6apjAiyq2TDPW1fLFD9Jjc3aVmr45HqanPSftgwJraj4"
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
