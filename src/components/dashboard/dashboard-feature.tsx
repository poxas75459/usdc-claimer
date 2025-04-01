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
    "3xZpM6VGw6oMzjxFv7SPYYxFj4dCDnfK9XFp2UUwSZPbNoLbYGXKFGNZc4w1Z2fQDZR84esseTY4aF59sSis8Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mweh421tBFbUSaEwZ9V3mWb45NFoekvFJvEpy1tTRWubaV27SrQf1er255HDcMpanA6bdsXNDg1s4mrbW5wBDaM",
  "key1": "szhVmXcfzceuK7Saf7ei3j7yoniZzJVvSyPMup83Mvh4LndYm2THdsR7dXx7xPDyE4GXw7pbhNUgD8eNFzwjVEL",
  "key2": "3SC5suQ6SNKFfnLzkRm5pEXk7uaCgzB7VkH8QEykDZCFoZiSkqnTQ5Jeyxj8ehmUeYWevzx4Jaywxctiw8ff1XGY",
  "key3": "2sgjnREogBgGbPQ9EAENtTaET3SQogJLH6bHBVYvCbLEp3Xi2qnPPXqJKA17agpRVTdcp1g8eZv5vq5QKNswRVJJ",
  "key4": "2t2ow4xr84VNcBCBKL49X9iRqSszSrbFHFuqYTgnoT88BfsR11L1s8yycUd1HLmSv7v7Z9b6NWpGSDjEdpSs6WBE",
  "key5": "3y6ZSMUYTfgeKxzt7u9fmbnGNaUviUNGpecU8um5TTHJNUv36VG8NAUsPePyLabnstJkcW2fGaq6trjbFfeDT1EA",
  "key6": "4CR8FAzLJWkDspMtuMSffeED95knZQMe2MeS8tXSAAeLcZK4uyLgaVAhFFNcbPkfwLQbaidSHakKT5PhLwZjVpSG",
  "key7": "F8wDbuDnxVvLddz2DvJSU6Ts137HWdX6siGPNoxukgpvTXtgVdGqeuhGqCVV82o4GExLbcT5edkL9coad9sVyyy",
  "key8": "4Las2d4UBsrgMG6pk8YKYHGQDamitsbgqnGnyHkbMT5LpL8x9bf7eyiv6kVCsbK44R8ggC4Bd6nSbJyb67GYLRJ7",
  "key9": "2V9prXF4q6TG3DZkgzJYnrtjf9Ycybmn2Bog3TWSut37NLM4V54Hngn8uu2sHKg444TFUsXuLj92cYZpFrCNWP2d",
  "key10": "634WkujmTKAWN1yYabzSnuWLhRQfB8qX2CUDJscxvUTueW8KZ5aB4NGCTD8pFMhWDvSCXR7zyRNmcuWJ7SqEZyGE",
  "key11": "4Jj9TLNX8Xi8fZm2NNLHjPcfPng2gH7zxnn1qQZAAiWwTrxXyLArENukM2ree4kYYwqdq9Anq9AqY3kxz95TqL69",
  "key12": "4jYNfcw3WRg9u3QhhHpNRWKbYE3PPo1erL3ZY9gDZH5o8gwSdHdaPw2A2mhiFW58HxGXVSmkDHNJJHMYXojYzd76",
  "key13": "4HEnMrhiqDW19r1oUgddBxqhvvwGXbNErQFP13xeEfzfdgoenQxwKwsFuNVp348h9T96qz5fRfLPFcQzaTkbgAaP",
  "key14": "5VtMuDXqxu3AM2tdkMuvGVVpEECrD8sK7vB7gheM2tp6VHSjsuYhwXQhkszHEC1DHjJPtZfTN3pnTMMezko2dXay",
  "key15": "5dTKZpnsPZkSitSnZsucHGtfvNsMiN7a1ud1J4zZD79EYK57HAHZNPp2FJY2C9LXvtcnLfDqHEUjWDPS61qRvCa2",
  "key16": "zToVZpVU6uKTRAmp8Cm9LbQ2ybbrtaGvmtgXVMBv2vU1cbgyEHYNe3VMYZAy35wVo3nXw9ifjCfjbXW9uMMuWws",
  "key17": "NwnZuo1CVmVFYCpDTge5BMNsU6GUkMaWCYhKVYWSkh3y8C6iTEny58Ea7KUDmN5i9oQgwhxr1TbBGXSNL4Dxa2r",
  "key18": "564WDqoqNN84qERD7MLENmhax1Lrsesp3eFM5hDd6tymGrLoWJYz3w5dpD4AWeqZDhEbfaLjbQWwpQWC1D9JfEoq",
  "key19": "AncW5FXGmWDewLWJRGRYsfzh577nKvC59Q2DM28oSzwGc9SH5e9JNj6QkHJP7eaXfRqJeeMRPph9ZfgYxMU77sw",
  "key20": "W5XboSRBNJkiyp4BjwyPqYYtdpoPyG63ZVzhgW16Vg8XhNA47KEs3QQZVCj5nkPAmjwkW54TKX5c2Ly6zTMx9zS",
  "key21": "4V4MBCwgXFffEdCYmTh5tnyX3U78V2ptVu49YgqxV2SqRa94eSihgKh5N83cXqzpQNTbVEAGCDgR2TmfEUNfPwcj",
  "key22": "3BXY3BVrLxWkPdKGhti9AaduC3rGj2aRmhJgXaMCKLmuXL7kyon3DPSmoryNh2NbKHfZ98ckSiXdTAG1c13Qfhz5",
  "key23": "yx6WUXhMKWsRxkHRUcUe5Nxd2HHdGARUPxxwEJFzQ5Xs6HvRhGBgu6ustdK9YH7E2vrPAXq6CkpPPWjEyXNktJb",
  "key24": "5fKEr7xK4Qw2BK3jfjQvpLgyCMvg6ZhTepDi2WZKPSkskq9YmgTaFgupr8pauCKn6NRiQNhpDQthtPLBhSVZt3xy",
  "key25": "4XFZpvk1Mc2nZQ7RwzVaqDXFXzozL1s5URSpRgUAEinzVdksbm1FhU4mmBpKoA7DfDGCQCK3jfZyJXcboebMv3MF",
  "key26": "225Krd9MypsrMnF1xGjdLVwpaFqCeJ5Ltoszpg1KKHT6LpCPNGWbQhmWYzQ7u5Mwiv6EsT4jCCcMGccsiZSnapVo",
  "key27": "3aDp9cTHZ2MQvgUUkqGDNUaHty9VwKpgjpbPqCMjgSGURRMtAfjP77nRYPe2zfwRtDWgHvuWNS3L98dg1p4fm2wH",
  "key28": "4c4d74pv9FHcRJuqHYZMtc2jNn58PWvD3g37ohbaSMrRdG8ng3fu4D8wuDUB34ZhodgR9UB8SRJ62wMLUGTtibzP",
  "key29": "8a3qrB44u7JTcmw8dj9x6AvmkSa2Vd4n4uL26TnDvsxPkMx9a98uUD6V9cHRWBurhyLC4E8fTCHjwzbZ9bEdGXQ"
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
