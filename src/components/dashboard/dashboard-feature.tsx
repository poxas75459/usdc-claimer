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
    "275G8rCo53jGmQaTe4DmSDPD9BdFZuAtGuydi9wotzPcxmTKqASZjjLQgBoTQgs7qfBQnw3JFfau3fwrLLbE34iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyWrttFwcEqRMiAFWH6n9YEq1deWkYyh67RcZTxiaWsWcAaoFY5ahjw75xucByad4p81ear2bL28Cvvsyjbc9nJ",
  "key1": "3kuXf3qxDtRCU2SW6sm9DBe4qjEV9ajFnGq3ARSRwfa5MEMHm7nqTuUCWqbdVtgoW4aXAwuZBAq5oe9bC9E1sNk8",
  "key2": "hELYbtwnyvzaWFpQpBZCgKSst5whjwbf6bpbP4oX9BkYd1A2MdG1augbMxRKXf9CKgbXLNT6hA8Se57x3z7WqiM",
  "key3": "4kFT9xpEHwSX9MbTTkjCZhozCmgmsH1uXPx7Lm2RJ4uTTFmbKk2dwLYeAeHJQbBBmkkd3zUWHhmumJk5V5P6C3dc",
  "key4": "3Su9aypCTVYo44BTLzB15Lfu6Hy68qB3mi3Jyg5VxLzXinbhRHCkx8d3TYMwM1RFumHo7qyKqbj7EsVTBNu3indA",
  "key5": "2bYmu65NTHcmo1nazEAbtahysbMWBk7WqQrsbNuBXuimzsXmFCuFniKHiLfVfhYLvCApG5LTJh8zM5d9WCCFFDer",
  "key6": "32GQ1cQgQkspbtRV7MurqFsxHCsvGvcnauM3jLmpLuSbBU8biNiSoD3WRyhtbQcFfrZ3MLwdg5u2eCAruRrELFeD",
  "key7": "5qXVNp819LzFQBZEuLy7xVdX5DrdpMcZztHMWyH94dfKbe2FQoTv3qJAZzvF4MKmyNFUUM8jVRL7C3sSRUAcdVPW",
  "key8": "3mDCLSUTXwqpdgto3qFph2kj8kb6uGsQBJiWYFdcWgKY5sEZZJ3orcn7hAkkDC3DqsLAmAqK8jScXbvT8XPNEsYL",
  "key9": "urJwEk8MHYHsBXVZP3zohVATpcAjJ7Nhjd2CDYWdXSf3h3nXnyDSy4EWd7S2Ur5QEmuoPXRRE8qPNzuTSMer6wi",
  "key10": "2MuMaG6DQCKTUx6wB8tFPCXHLujdSHghJCqzLJpHng3LefB5B4VoRrpPwQrfLuBxo23FZQbznecRnkQpuNx5FTJM",
  "key11": "3VaznUdHfsEgsZsTE7UyFfyeGADSF9B4sFmSzf2Ty6L4QV9AsErS953rp5o5zdUvaaWTRmS6HahWLEfmZbu1S2ZU",
  "key12": "TWDgJzGjr2dTPxvyw6tL6Hf6cdtnMai9d7i1VpHzB2dPaA3n4Kb39SHJGKiHwNwQExDQQg5GeKYrikv8UbaMFFt",
  "key13": "yJHECcQXTPCVan8eCFUTtuvqWPjEVq3pvsg1NsV4d8CX3x1iKHGLc2SEgsUefTiVpfXAsBVXVRsno6S2cyx8ZFf",
  "key14": "1K1rid22AFJnWpiem8o7BB71UpHTy7dXfdN5e968Rei431c1QHRQJ1K2f2kS52z3DyaZ49cR5bFs85c7ARbXACZ",
  "key15": "4m2zPUPY2Vs6J69pQpHhJT9XP2sdMsQKVDTSeyZqR6zpfhfGm6pZ91URpimSVPtsiqgFzwR2wLG72wdfH2gpnXsx",
  "key16": "3diJAvcRAryronMFdgNG5Efwu4rR6Jnvg3vKCgjDiqyEEvAzDpp5Z7AsXpBx6RZRUfuku6Hap5qipz3fpao23icc",
  "key17": "3sccFyLTioPJzQMQZXKWZinr6pzt33YbzrTK8az8oit7npY3q1VgzKUcNkaZVmQRjLALref2fc56KVeeoHid3tY4",
  "key18": "XXsmzt7b1GAYtsRDGpMjQu78LZ4ca37eE5gRR3CMf77J8DCyYK3vqRxHc2Mr54ckDLYv1UrEG7Av6ohQWkrh9f1",
  "key19": "4ACaqgrdAtawrZ62idndLFGrRqbp7e3BF4uR3FhqaW8JmTTkNPSmn2KuH5bLjExJwYpU5FKs3FHRwtzztX2jLqQC",
  "key20": "8pS3BG9CTu4xof9Ky4ecC4dF6mv1oxVxT75LkyUKMHcNqiFm498NLnsdkE77UaoyCAddbb9w7TJZSvtYBzNbPyo",
  "key21": "2BBJDFY5oDh4fYDX6PzXPfSHEDKEpq6L4wEZVadbkq8U4q8xbjxirmgGy1ryiDCfX4Lyw9gpYfVZNjmzTpwtdqt8",
  "key22": "2BGU2jtmHYAwDyEpfPP5VWMpMbrfF4xc2v2gKNkLCAveaRXHKnQnassxRVxVvUgaRegm2fauNcEimtR2bjrw6PUq",
  "key23": "2t9AckUFvPLwHHzyFQCC5MHfj4AGAyLqNfkJsyYa6JUqseWxkxu6w6ZVZjvoVGfK4i5xxtLfZL1DUWmnB6ZuodwX",
  "key24": "irYo4J3qg8JbGjLKsVBCFJT4Xxt1gqGvGaZR3F9tAdL8tN2DRdwxs9Fj4huhfwV2buKsEVzj89xzeJNH35kAjKs",
  "key25": "5JWs6qrLoTQa5fPXUC85HXdsmJFobUJtEP89z9wEtcUHZBSZpYSUR3KnNxiZhMVNW6HWMsmcd2MVaBQpkWsu8cYC",
  "key26": "63h9ej1jWEyv83cd6XN6tLV8vZCPGfhY7vdGFC7mJiQTxVWxYnE35vkB4KWSHz37fJQCAU1UzWssZGsM39j4uvbb",
  "key27": "3cFFihbv18HY82vkE2WH8NKdTkxrTq8FwtfH3S98c4wtwbpyET63KU7WzJq84QWwHY1pcJ6yGczFWFpVeGtgUDGE",
  "key28": "43RLHFxb8DoCbRQx6oAJLXhUEDgYwA6nVd3CXq9SNkF25VsjF5iEczurupBVk8aLjjjUgkpKeSoRVT2oTpo5zCXs",
  "key29": "5YHrkJb8nWhmaoRUFo3NcWBcX8nMMqeXCUS9Vqkibu5GadxNEPV8FvDbsFqGmjVbzFJwTbn9hFtuafJTd22BxFor",
  "key30": "D1A8tYb3QrRJnxdSf9NJxDEKzVhANercXexY2mXHVYtqKKaALSLLGpbcS4D5YV8R1tAwLEhKeMNLUmDTgt4GUuZ",
  "key31": "4zSGSbK4bBsa3wyv4yusKcqiFoJoM7fKnobtwuQehM2BAtFwJaFaySfo89ua9Fjgrxo5sdKe6u84KGS8MnEudkNW"
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
