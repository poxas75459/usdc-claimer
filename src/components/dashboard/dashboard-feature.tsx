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
    "3TsPW7TL82yMbDP5ZceJBzV1MDoudcGixLRMo4pKUzJjUofPQsiLGFooK2GUL48HpU6XLatRWJUR1Sh5ZmoEte5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSZZXLW6c4KFxXrBgDsF9vJmJwVc9iLeWC9ukoznNXJ2uZMMMXcd7vGmjcsR8uujUWVaCzzQjkJn8k6kGg92n39",
  "key1": "4VRSs5MNDzDxqN8dAyoXv39Tq3YLdDybBfHsuY4LdxUXZ34ZLfyLu3g7x6yz7QcSfEWHeeK1Mr81PmdtnouGiZ1i",
  "key2": "5oKgvt8SfZsHpaFMq1puB3ys6QF7QBCxRMCtUS71qz23jU2zX8PVtBLknXicDGwEEsRGxiSxjirHifvtQW959BNv",
  "key3": "5s3AfEodgRnk2DpgKgTu5UFgCo7VxgkrwzTWpBm1EAU1WTRgAA4pbGK2GswgCCM1zsp744EGGUHxdPZ3rusN95sU",
  "key4": "5oGAx5uwBwWuKXaeV71sYHArvRtKYJPrtMm3Hb2wqMgnFJCt4LgUdkyM3RiKoTKnFGrAJUDKSo47QWHqF8rhYXt",
  "key5": "2upZK6yGZon9itx96V2H1Vw1o9WbZwwvcfD4yPXV6ZnW4WTYm3QkcC6PVUpsHXkvFzrRLpWji5MAYWoDYNbrQgYH",
  "key6": "2ha9RNyZy9KEziZ2wfjkrEMKD6hRxWHgpiR557yk4jdV5s8qWX2q5v1Bqe3988YP6X3f7pbV51NbcBoEQmiz1F5C",
  "key7": "3RLjteqiYMsQWvzY2LLgN6s4BU7ZmQzHNihL4UFs7FNr9JfVDavcaJgk6ZFqECaT3ug3r3zi1Cu1L1PMzjj6NRPs",
  "key8": "3rTPA9a57eM52x1p3okEJhReEbW4j5XJEqoyrqvs72VbuWeybWXSGRiMKz6NAwCokz8W4oBp8nqUEtHUQNw9x7om",
  "key9": "u2hQEcSvLmrY7DKAxDfvU5DkvNFwrSoUY7g1hZhr6ccjxZH6gLi8CGWzBzDQEyjBKzUEwyzHbyjUZf1PDGinT4T",
  "key10": "314kskZKTngsHpTbjnqjiwgQ8mzvwA1vbkze8YQPSFxcnF2BWd7xPSoFFyUv5tPkU61iQkiHHhbTkBKskoVzNZpF",
  "key11": "55LoLsLTfsUs2KotoBZ52VtiPvjouATNfE4THQKkpMNFxDWHn3LQ72XMtaDPZHpTmZ2QEHZoacDgZq154vgyLmjo",
  "key12": "51snHNjnnDVxujsBPE3YFVvJ3roD4vBRMTWQExg5HjpsUYK6spVcEopgQfpSg2vG9nb97PEnvQiUYBpfcz3ecbLk",
  "key13": "4eqv3VRrEgrteBM5xEy6PvuPZrMsvCukLanLmLMY42LYf7Ypf7xhtH8cdT1MU92SgNP9JDE2etjrzkxAqEM4NEHR",
  "key14": "5RXpGmtr7Bm5PiqJhiynSfzHUhrCFaomEex6zxSowDvwGxFVqWjPK4W69AgnqZrMYQsQNQj7oWtNve5sMuLDdtsD",
  "key15": "541wTkgze3YNpM7K5QdvRnpuiJF35zNa9Uhw5LRATEGsdzYUs2RxcZEgGtG9jrkiTsEbJ7YWuRNEyHM89XV1ev5P",
  "key16": "2DhF1wM6u6YvNiZ6WzihwKsfskBaCRaT9x1DHdnVRGXc3V74DEoWiFw7sHJjk37MYQcPuYccw1RmpybE2pS7cgBg",
  "key17": "4APxcViKSePZN8Gn5MaburFAiAAQpipaTSCGKvPVp5SP9TkjdGfSD9tseB9TYVcRHLaAjZvrg9ZLBUMeTdq99LPm",
  "key18": "3VX7HbJboRt6Qf4zEFxULaEhZsLSe63ZdR3bEUBbTArvN5wfyzF5AYMAiCGqPZTCN93P9eASUy7VtUgUUaS8cwtA",
  "key19": "53rXfCbioktTi6gpP6gBQeP3oW9EQ1S2CkssidiioKZaB43GeskpMvpcwJVwat6NXM7EjZn9rurBUunW9eMLDX19",
  "key20": "13yfFwakgwa99As2pzAeoKwMunaGGUzv5vDnVgZoGR3HL1oxyryHLjMRMorUSL7crwLbVwDk93ASh8K478k1DzH",
  "key21": "5svDgZWkKAoSNcuvZK6JJtvr2DbDv5N3hA54wFNiajKBgqMiLYJqhaGAxkWBubfQoyFpTC3RWgSDMvmigzbnduvT",
  "key22": "44F9Z8bek3qUf8qxEC7xvj7hgpsxVcnwVkYw4SrDif9ZaqrMykHhQJ2WYDBffcMGUfeRCJp2Weu314EhVJHH6zGT",
  "key23": "4XDhgrBAaQ6W5fF3v6GRQZXBTw7CW4AQiXWe3Z5ZdyH1PAUR9CDJ61cqWnKK8nAiTJuRW373jWnobGAzJ11pvDmi",
  "key24": "5HJuGsuonyzJVw3bfvcFyiAVoiS49ZAqH4PSUrJWSDk4EmzBCDsLB8vjupXBE1GRk1gSss8gUNFXVW5MpijPW3rs",
  "key25": "63BdWywSDouUQ8zkm6R97UxJYfZ7ZcrfHubUYX6TxmMopnMjm9PeVxgdePgMUztHPRVvBaB8e2NBd5Nb3zJPQmVq",
  "key26": "31w3pqDkQfSHWJAH1HDJCebxTXPN27PWAYQova5YL1an22UqSb4AjVMzwwQusLXRmGbE8RJjUXWuZHqAge6twBPc",
  "key27": "3E9ef3ivQPFKGJUDArfCuNf9KuiPzojsjdnfQ7s8fiJjwK9YvF2Bccwd4tAwZtTPn4EnQA169hAkG9aV8eRYt4wo",
  "key28": "3FHUCjixwbdAFkTMgmJaSzfBV1jAU6UUbayGYg6STuB49ze4J1v4CZAgbXuukESkryXmz7ru7J672JT9bg37rvAV",
  "key29": "ZsJ4Y799WHXsQPBRRs9QtuhH23kCFtsz74XSjG1bzoBjkxQX4VgCbE2GiUVLnbEQCHwPiPoPpki4MYWVNjUvx58",
  "key30": "5Zwzn11F5junuXcjsCnbNzaeuFQeAoNAcZ7RyNT4x4DvtCiyeWmag2x7U9SCrfAozrZjSPBnLpH73oEe7nHimtLw",
  "key31": "2y22fgrMAHCkPYPMP74mWUycFxC654ikeo3fBsoygYAWPHjdxBP1rdYgPkMXnyEPDgdauGgZiQsFbMEhUSVSbfvH",
  "key32": "2ATYaa9iiVYHdmV2L17pACrN9svRysB6DswDPZv3sgK92PJv4Ba8DSaemTdZAS66wsGpmp4r1Nrc1dZPor52sKMg",
  "key33": "zjA9GVuZc2YDPKToZVcAPqQNA8gfSk1pnxegSwfTarFpVzcVniVsqgW8kqkbDYWYKv4r7eRgPqA71AaXQdX87Sq",
  "key34": "4sw8UoKTbfSbWeGMY7ayQqCRvHF9fmnZo3SUMyYiLiQ5zCDLcVahuAXJvw6raETWLDQcLdnSfRzRLLuiYRoDSWHn",
  "key35": "56pnGVbKUszFd8JjwRULvfWvgrAMvMbRDMMcykXoJzgLvqcQPu7H2DzTngXcVHMu7q12haMBnfyBm9DdTDCkdjiS",
  "key36": "4VcUJLTcwoJ2H33PVrZhsWzSBsrTNPnFShm8DfP7rrhvtwJ9n78Uvqmv7kX4tcnTVBussKjBPNymEgbdyu4G2bqi",
  "key37": "2gQiUAUnbguytKKDrW3bn9ae4g61shavMDdbM7rTmobpLYQv9PHVQyu68QL3vASDBs42iuKJ3TPUtn6VJ95WBGTU"
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
