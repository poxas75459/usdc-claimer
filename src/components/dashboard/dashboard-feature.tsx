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
    "2ecNGreUic43ZDsGMupiQF7KYML9HRWPDe6Eopv5GGVaY9Stt4u1GHWWDBEmpNj6HzfEwHmaXeRWyPvzQWaNSbdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hERr8ansBhG4J1MmnxoKRE3zLF2FEgHiT1eqbmRwsg8X527YCHtPkzBfJh5E12EoFy5oyodunojGNFNbATsXpXj",
  "key1": "2TSmBUVX8kudVm4PM3v8fFCfDLPqNZdLTVLp4RqgACaBD7HtTmykyyPbskk2ST55rQM9TPNZKrjuGB3iwerB8jap",
  "key2": "fXQ5ZXNzWyYAzx9bHvtgv2UKbCtwU4i7bVSA7JsBkatyeWsf9e4ii2BtWKabBoVaSh3WYhLB3ED732CyaoemU1U",
  "key3": "3YwADoq3NDdiN1jJxVuJ1RNgbNXhK2xMcQEVahBCMVejvPYfQPi3QHtwYkTXh4Dbvn3tahTTWcNu3EvoQuqQCwgt",
  "key4": "31ujDqRqjsa52BuQQqZyVKda79sAuEH4cbmx3MSJuvZn4Fai8Q8L69S9YycRL7bkjDdRM7q5ZzMNEzW5NNERQ2eS",
  "key5": "3LwyYr7Xfcceu5eFezVmZS38dArXfEWS3DHTvenBWDnB3dCNGPP3fytPLCB7pPyhfGqtLLiWgy6gX93owLsPWwdV",
  "key6": "3b2X3EsZt9tR1KYJqYY2Mda3AASmZoR8iQi1y55VQviuSxYRGuDNBFP8PrfUCPzhBt7X4AbMgGDsFAKrXAKD7z56",
  "key7": "3nD2azWAkJUmfXBPcEM52LNypEqWbEMT74mfGfcTFuwCb6kBKgVu6pNHnjycheRf2WkwT6G7i3AduV5kom9QbBjt",
  "key8": "1mDR1kvU6P5rmDoJS8c1s426PJF7oruMbpb3NiP6QKQjKasSQX4e59X2q6UPCdR8ZQahUMFWPhiGD4sgrAwV1YQ",
  "key9": "4hxP5zxgM53GTfZ34fsuEzVanjCxTSuMnroMkaaLbCSz6KcjaZkDcC4vPvScEyvLCBFrmGNETDXGxSEjxoDuDxek",
  "key10": "4THJumkxQFGvBtr1rijmcEG85pe3d7FZZ5xAVtuSpwSodoT4EqbYn8YvsnahNqLj1rRr8pkipP1YRuViBk4rm5WB",
  "key11": "4V7hatX7Vqb97HtRHefBSCbwkwEVWw4uus9ywjBBAq9wpSKDMVbrftEVvyAzxj6hvTj5D3k3pqrzfZGV7XsF8xPc",
  "key12": "m55qK5WexyCL67K1jdjW4sgs39LVzvf9nXrVsKdvgdy5rpCcNyaMh9rB5EgG2Vh5siW147TYex9iKGzFo51amzg",
  "key13": "78DjrJvuTPigHCJvT2SP59RnnCnUx8rUWrCUJgqqPCoRoQ6QdRKp1ZtcKZNpjARLTn8H5RU75cyKPd3xoaA3AoK",
  "key14": "5cRLjAtsCRxwmCxDyVSDZmcoSsjq4Dv8xQDg8kiyZbJe6WjnC6MvkEJaWegY6vKcm5TJfwZsM9p2CLjKQdGCkKbk",
  "key15": "2ytyzZqtnKg32GUua87sLeo8h4zFcyd4g8sZoci4qtqyGfRtwkmiaJX7tKzBqTkqgrpCXrqoB4CLPrPuQJXwXshj",
  "key16": "4GxkTe59iSdSZtqQ5Qvn9oCX6HMVSfWTbMsKv5sVphy79ba5LUG6SH41kGsNsmc56Zz7yp36yJ2bt9fP2prLp3JW",
  "key17": "5w4wVPDrCKLkbGRJX9avzsLAeTY8nTzoxsRngjubKrwgk4EX4HcJqssNn5eb8rjcwUkZCCwuJuBtJrTRizw94QUu",
  "key18": "4xCNNL2mcLjYyUyyyEFqQfXApBQt4BLya7VcEbL7vgdPqTMR1HRGijjHj39Hwy8EwWGHA2uSy9saw7hk2pE9KhJK",
  "key19": "EhCdHb7p4io9djrKhJUg8zK1R9AP5NEWK5ok1Yv7qyyx8co587TSfZ9FEvn2RShg14zabs7vcHVRwCNSBu9BoiG",
  "key20": "3BPQ5ZZrEAH3HmxfTBvUSwW35NgMbVCAX46aGgUoSCvg1Jgf1ENDq1gKSpJz1JXXg2JbnTvTEZQLqccT1DMXoLW1",
  "key21": "3vjLDmBu3oyHLuXMmtwmFG955TUfaePZ5CtqpgKtAjse1duJ6WiSeoofxQs9bTHtZUSfkuaGiEFqPsh1uefQEVnC",
  "key22": "62f6d5B8xwysMdAx61awonoVhodPjnA8NrWpTo5n9mZgmPxssdDjhV7h7txbtzx4eMPzQ3oBmDRRJrzneVtya6Cn",
  "key23": "3nwG614VuZoTmn2bEdq5LbmetEGVgjrsaVW32TJAGtkDfjXwWGaivo5hnwT5ECwqXXYuyAcW8oiyH46XmknX8MD8",
  "key24": "5paexZxopS2fYwCYJVJJYALYL9gEwzdk25HSxve1tefYFWQ8WK5kmFdqKZDvVMWiQpL8LfeR5svc6Q81LVtuFS1g",
  "key25": "45U4jieDWDVRkBHdw13krXUbrGr5G9yHnedxCcd2HWF1YVYesyFF7iqT8nVDE23rawYbkrcoUsWVr9bwGMsKf6V2",
  "key26": "2DXWwkqeTj1wzv9PyDmiLLiw7MiFupcWatWdCqcuMXuxpGoZPUKLwmKqvRF559V9NBZeCvj7LURiGQkbwttjDcqr",
  "key27": "4byGuczNunfVuw7Ypcot4fBLgks9P7HUDNFHF1myjDJpc1mVKMXg5CmzbgcEqjTPhcfGkmg68CaCiAzM9A8D1wzM",
  "key28": "36GF4vNtktGiPpAeEQoyC9iiKAdx8LDqeXvCiqQKSFmw7ueftJhj8fF7P26xCnBu1S6Z7XZ3odJjxziivpLkAdUd",
  "key29": "4yUiMFNv6yMUEgUMf92FJXtuqZnq6ZLe95zsf916gVK7bXmBxs9H4ycxz1A1pZHwpT8uypZg9wNo8PN27sL2V7RH"
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
