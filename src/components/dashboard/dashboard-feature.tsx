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
    "WWCVELzAMX2uxd6DXZCURfBw3b3aAKhBomnwA7MLKzec3zreByMRsCFwcyT5BryKcB4gLeEU552RQ7QmamwbTgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qDRnGuLkRYbqQi4eErEPYtQkVovniMNe4hvStFwur4BUe9zWjPdJ9sgnJLQbkXSNGLBxcchZZMyMSkaguvwkig2",
  "key1": "4xc5nRh5FWodt4Yx9uA14JheudFf7AgqmmmATTAaWgAt5ZrfN13kGrodQSEmSfJ3UMUZ54y3svAuzEN4dnmspCxS",
  "key2": "24ZdeB3HxxcxXnhh4WG3WjYQQt7NVVB1HEadTev58N2DodVX6FUwvRk2FeLKtyd1eJjVtqonVX6z16cKJecgyMqk",
  "key3": "2Qp7aXKUydFNLnrviXnAFE883x3YgM2HZBttW3o8iyZQZkeiGPeviC2JgRTsPGipL8iEhnbhBM3E66rKNBPU6hAS",
  "key4": "3K8e9nzD2Ri8LMkWC3hb84QVDM5o54hcqbyQebigLKYpVZADYRC4EPi9qN85YCRnVRYMogzGA9tNiDhHTxHwU66m",
  "key5": "3SFY7XM6t6PxsXecCFsm4zx9WyyxxweLPiMaeDMsC88Yv2HKeSMo2VMGJHhUZBHBG3h4mKuWGQNEQf1QKPqxGW6",
  "key6": "2Jhzy44wjqZFKCy5czHp3B2hXiuYmnFmEibdi9S5tdjk5HfZQZMD7Qq9RpEVS2TdSMjVhEv9NC6ppLmcfdxfmGFi",
  "key7": "4asbVTf8exmrfzzhqVwntdWftkugcG4oDYgkAnDfKrzeR4vbzX92Z9Kgx8jjVvToSQC2bQ18UcnGYKGZxf23fPX",
  "key8": "32kvVwjDa7b4MEdayiz7V9mhqox2qC1eyiTQ7igZkd9rHwLKcPsxEDgcg4wqmrQQFk1nN3rRhaHqfJu3esRoz77L",
  "key9": "5zrsauw7hwN4SyHQA4RWUgZrNnNUcAwt9zPkJCbmsSNqS8M9xizWqFh33orm6bLV6LChUr3YNGV7RuYjCFUfYFcu",
  "key10": "2fPXuEfgkzyPHcxSfZqVcBYtaZtbasizgc8gBH7EVhAfQa31kkHf9SzTpVcvVgoYuSWFtQ9SsLm1LjHfbAUc8WjJ",
  "key11": "3g5iqbbXRD7BMJxchNirdWqBfKXjvWFSKhb5BqNvYAVffYy96mfxYV2cDn14hYXhtPiEfseUaaX6tdejmmWTQDbV",
  "key12": "zsVV6taidr3Tv5BsMiLCh85fwZVq5SFVepdHzzYGzBDUnKuFnPGPwhrrJfLGddTFVmacc29SZthWiYR9g28t5DL",
  "key13": "4vnrsHeZSSQL1SZJTM23AuTu5DLrGKfynoyUWvzyq8qUB3pQ5CdGKjLancurEk16ssRNV3riyvfd6Y7Py1uWu3zF",
  "key14": "4qW6kSELAbhHDb9jgEJpw2J9FXDUSYRTyUQbg13cmU9ofngmTwSRrnefikGMFu1M4DzqfqURXgaGHSmZo9NBF5ve",
  "key15": "2UfMrtPXzkCzk5iQ9hMCG6fnq5xVfJvHf43Yhs8jDMVwK1P2QDJ28xAroiqXmTy2jahVnZWSZ6Ak3WzMmEcvBbeo",
  "key16": "5VbxDMyMmG7FmBP4LJwH3ypLdnRQMdrRHDrNgerW4sAoMAZiwHcepLXMEfFuFe8motRnRDXHdL2ccXDiMaSHL8YL",
  "key17": "4ocd1GoB49CXzyTvwWzS1R116JdMyrrV6p2b14Q2miPorF7Ch1CQyCMGWE5MZaiF47GmVmG7dnc2bUe1ZGqsLqYN",
  "key18": "46zDCddMgWwou9DV8yhfv5p6xMvPWJ3ettmtQ33oeqZvbuFdw9XNVYbfXu2xTY7n7rMMutiVCBW7fmrKHiQWe5KU",
  "key19": "5Qokm9Cipf6z7Xs5mpdeeA38gH5rt3zuLtyHDFzXtemxivb7EmttJotWwn61m7ZsRtm7RpuEKAgDhKkka3MtFqXZ",
  "key20": "23xVr7LkNFFxidSsr86VxfoBnz8geTKaJrSJoi6ovDAd42mas5Go2WK541m7o2MmrEgPxPnY79ttffo6zpdggiKN",
  "key21": "4jBCwJDVZdpXjQHkdkHwh8V1Y4deMVRLe9STzgPjYHJb6agaHCcwLJmLJcgk2tRbtu273zTkER1GB3KuATbF18v2",
  "key22": "3hpqAmmmXcm4Ujzi5YqEADMU3SvfR54dW4oAWnaj5PQENxRg3j5y1SAtjSdzVmYWgztwsiVukNLkkdphUvan3s2R",
  "key23": "5v9yMysS9GzG25qBLAqcwbkKY3bdd58Phokzjrjmji5hFxbmXP1B8Y4yAaP3KH8sQFKziemewPKcfi8pD3zfxHE1",
  "key24": "2ptGUfaZT29DARUXpPSNzVpqAhzi97YXnE2cDBusJ9Wo934HUjmXtKzqmiUgvfdmmiGdEPsvnRg7r9XkCmG58Qhm",
  "key25": "2yXqjWfYmrY2YroAjM4zEcnsFkHgCxui9KBuyabRY9ZJiiTqCm1NtjCSuQVFZLbAv9obWnbmNCBGyi1zzaipqaFe",
  "key26": "3aZ5AEkjaFff4gNT67DWim2h5P46xPene4DXmkieHQ5iTcxp7vtStAfN2Uxrip7KQFsxJ8bs3g4gfkXcxVJL3xt1",
  "key27": "4bn9ddCmAVWsroeKNPE3pN1JzjJqponejdZ8PPb88HLYQRZongd46PGvxoPoGURd2bNvco7YabJ5XdvtF4zH6rsC",
  "key28": "5XkU1WgKnptxRarojR4iX1AX5eRbP2GCgF95xV9vj4uJcFSthQ7XQASRPuwTmjrxJ1N6HVbje67K6TuBRq86BA57",
  "key29": "PMtSXYhkEhGAT1p7MPJiry8rNJgarvLHSnmabgDhWnDbsg9LUtaWjoNPPUVRq71hiZudtp56vMe1NimaopjSCYd",
  "key30": "4NWq6YgaE9TyzuTqY3wD7XypNjW88JCvaEqF8tJwKXgRqPCp1dDYTqbXz7yyp9F1AZHbEUkvBSfpWktpfP2GpMDL",
  "key31": "4ZDoPvH34NWGMAhWn75v18MsXJosAVdNj2eiye7ik3nRRJViE8T5DozcDz3N4EnxrU1YkPmqAh15qtWaZSUeteqJ",
  "key32": "5uL5nwm191DCNEP7ko9oLcGuG3dvBRVT5dMVgAaJtNhuZw4t8TeGeJtcG4cuqEEeCXCYDxWz7yWgj9hfqqCmaEQ4",
  "key33": "5RZpmzyh7Aa9Ygh1AUoN21ydX9MbaWr4eSfRGsosXgkCqXDGbsKBcJkyVuvA5Ezd3x1gWaVLbmwhMs8xmPXQzGDp",
  "key34": "2xGqBZyh7sHHBuwJhu6mDXyjz3A7ATNGxkzWWwGjSvtEu9rsnaa8oBPVsrX9z44f6fioDjE8bevBsjES86qFoomf",
  "key35": "3EZTZp3udjJnLAkqF5ADt47niNELVoRqby2L9k5HNhpfoTqwXEhJu6mzDuHXp7wcRcFZWfvsNG2vwpuvYXRfpGVg",
  "key36": "22tocsbK6pt5nWrhKYD2m6C3QPpibyMPXG3vQAbTNEFHBHgX8CuK2SqK9aPyg5hgFGmMKRqmLtuwyTUXYcQ9b8qi"
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
