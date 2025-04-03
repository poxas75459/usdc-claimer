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
    "4QNAUAaup5boAX5htBvNMR8R7BWN4iTUcs3aZTTBCpFy2v6KVkkhDboMRhFu8yVxwFWUQWiD9UGQ87QiyjPB1ymu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ekRZugivvJEtYM1bu9c8GpQexf5FLQHTTMbd7tVLq5Cni1AsfHE4N2odpcrU698NidNj7wSWBNKZDpCan1xidPi",
  "key1": "5gPTtH89FLnGKB9LegxfENQ64GBmST1KpLZgtHcTpK9fw9bMh8Vsz3jgr8xaL1DfcT5VFh5Xf6khL3UjBCwELM58",
  "key2": "5swKhxM9ghaku2BySwKwSSDVYPQUe6i6Kt47AeePYifCN6rNAiZiG3UvGZWxQSCR55UWQH27eja8m6sU1Q98qEN",
  "key3": "4qh7phYzeZoLPmpMXKXkKvHi7yatH5mVnjWf8YMiAX9XrS79vJCByzX4yTvADjUfNShzeEdboTr6oEyR2bPPc749",
  "key4": "s8sHGKwK6QFu8tfSQg4RG6he5JAun5NPU2Dkb5VQ9uXXjioXL1uiSgpQPPBagV9rqCPkerdGSfN7WELzRcY9Ust",
  "key5": "sH8G3pmAyHjfG8ShnnCUSszQCFzWjRfDt97p1VVNeoutNMrdZ4F3URLHDd2YK5gPxaHzci62XV5usw4y8dKgfd5",
  "key6": "4NA5REBdR6W1Lzgg5HzRBmpYsXor9BrBRgoXHU1zhnMK7fuKPHaXyW4hNZaVgDKoyKvYdXWPpQ23ReZnq7wbZKT6",
  "key7": "3Fps4pmhwi2pviHVTMr2LBrGYX3VJmsDg4HyzRVEj8D4kduMxx5vBknmB9rr36TW4BMxTRM3JXnSFusW4YfZMxMT",
  "key8": "2eoqzRNsSwtWLbbNF2ZE4LjoLYJsMCWKWH3VPW4fVjNPbtbMezJ6hVvSMoWn25ykGw1ia7k5MaBw2CmUamLTdyxm",
  "key9": "2TXx6dF6ep8a7HVRmZuMWsABgExzA1i8k4tYnAu9qubKFxAybL9yixQHaVrXsrWoxevQoqZTvQ5HNtbLDGvLGf3b",
  "key10": "9qfehBHPK5zLNxEaMF4nBBaisjzv9NdKa7drawQqJJwFtKq5BoUeFtp2GKdap3jeD488zGhfwC2uPRKdzqu8xcG",
  "key11": "5RRLBB93iCr5DNsMxgb2Yn2EBgxcKSJfzhBfTBY5Q4vGXXG16WBrEDEavnQhsedBs95ejcGT5LFViLfhxZRAsfxG",
  "key12": "63qHKcNkC53TiNyD8kUBtPWCSv9A6BCQLms7BZMzDhG83DKoiSovLyCdbPZN3AWfE8oM23tmSgWoaK6EUZjbpzYE",
  "key13": "1XjUAG4rNoLZ1oBgAuNWQTtPpeFxwXdix33temLyNWiSyFo59EaNYEgmUxoLTX2r6dR28NyVEyUdDsTWojRHejM",
  "key14": "54ExZHPkrUcRkkqSb8Ghc3xWJCQAByTY814LxfCFZ3oWFhp3DxZXNDfUbaXKBpoGSt6pVPkqx9tDUZR1XNu4KSxd",
  "key15": "3gqb3Mg7ygpkSDhWGURogXFBAYTvHtRjPbD89cNexsRjyp8nq7otenfVvk43sUg3AN6UqPqPF4MhoRhd1F7xYTVh",
  "key16": "2zFQ2GNf2wfnmsazgEN7dq8k646U1gEu2dUvQtAoDfWUtt6ipAFVnFRvae11Hoc86UjN86MKAy7uceLRRQth5Pmo",
  "key17": "4biL4b74btjpn9sfZM7CtG9KoDZsyzTDmUnQxJYapJZnUpKiQFotptNRHmCGQaMqmAMJfTZrYDwqV5SoLnAUU2BP",
  "key18": "3MgQCsHnMtm3Uwc8Ht41mArWYSZDACAcJjBeyXxwpRMBpEc1hK6BU1RanrNyBvNZBbQUAobkkqcUniqkFGxTkwyw",
  "key19": "Kgz7nLxZRRP9gGYDcjjVPSAEkFE5x2gXigsnhRZBS5fjwQDZ7863dzQgYgFMG1bjvxc5UtegzdDjPu4edtPcBYC",
  "key20": "2VfxtHW5RdyNXpdSqJtwXQkX6zNdgY3hjaNace9fdmk6APtnCAPJfTkWVctAJsDC7V3kg3zUddUj6tcVmETAzgft",
  "key21": "5Av2EpXdir7EBF9HaLWjJKAPMEX7PuQ5i2gC3zmwpDyWJq4ETRuGxPT31byE2TPWpCmBRGm7YYhAeGb6QMp5ewPN",
  "key22": "3frNPuiptMjUh7eqzHGer7JHZswxmE9Z2spY3DEGeWYP4dktxVnQ5Lkc2nhVAdTsCMkNpXAaLWonACnvjeF4zCkM",
  "key23": "4bRYDSm4P7QeWMQuUzxmF3hRYcTveyei6QXMqNheF7byCG6t9XyNpgwxM7ZegeqW8RJeaEBwY5LMSXT1PBoEbFrc",
  "key24": "3r5v7wgF9N9FP6xcqJbNmtpCFZ3wPx6uu2WwsECJr1XR8pTJDCd7MGcApWwATbXsG4oekzvDFt6NdcETh42P2Hee",
  "key25": "4u1GnmnvLq5u1dRVpyqegaBKXEFxrM3CfZP981GSg5Gzziz4eLvehGokC5BV4kUJDatLh8zdPL2dgxK5KWUgNnF1",
  "key26": "SmUk3MJwhVwYozpuoQC34Tu8FAdPEZGBGmJeQREWScidZwkkBy3oQh38NcAfARFvLNxtt59eaee2dR8v9jhPAfK"
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
