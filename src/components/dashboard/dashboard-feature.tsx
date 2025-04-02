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
    "4oDyLPmo1rN4Dv3xc2KwvySBa694tM5cran8DjH1iizmsTeFcvvDY9EaJfewJnqSTsBD71QCpUifW2JfZGiB7BeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iwhea1HY28n7bg3VcNtQoWA73JKgcj3Ko1DqvUPXAXViSkHTjqsPCUfE3JLiMKpYs5UivemKAjE8BkFpS2V25YG",
  "key1": "5sbhH7F2hSRkTtwRdkhpDi6FaN9JoXKBcPDrc5odLbrf6W6YYd6JR2GQf3pqxEtfHYGGGEFdQcQnoM3LDWMZK4eg",
  "key2": "3qFYLckErLTPRh68JTBm9uGRZjPLi3w7gKf628CWbYNnks6M7qCHy1YHKZZLyAZQmYU8ZFQcsdKMrPEVet6JQFrT",
  "key3": "5Bje4bKaFXu4M5FuvRZX4dQnULKrE89DtP4TrBvKH7HFvDALwQ7d9Avi61jef8yyVqjMvHwJzJY9YA45EBTRrRBg",
  "key4": "2kKkJWsJ828LpFYb2diVAZJux8T5viob4SsNpFJ6EBCWSnT5GKvHvgmodL4x6RTBY1Lo1QcCVL5wciSXk5PPTw2Z",
  "key5": "3MDJ2wpXvgtHtw5u4BqTAfrvXU9RDsN9ZRwx4QhrQmnRmMEMnnLcp5ERuFmvQsPRf4oudyXHktPxZVA5vpzeSKy1",
  "key6": "3GmFekijCdn7cjb5gp19j7d46oszxEiUPxzf7QwiuG56brovzkcrhAZxSKETHGQT7hptHcGabxWinsMbCa9nJsNh",
  "key7": "okwjYe9NcqvBvgDUhzgoPYR8YLxjjtu2RVhRtJ3t9xdSs6sGFGh5eq5FBAgYLYsis6YizhkbLkQYEcs33oxQXX9",
  "key8": "3cprHTEZv7yq27TgVXqUpiBza3FNVb8tDEHRPZ7q53AmqmbfuT2egPdTp9xNZW2n4jEkeZ1VYqLBnnBVKSmtn7Kn",
  "key9": "iZiqfKnRGKofKnB4Ki6eEc3Uzv22mCihFrutHSPBUzgjo7JugNwvu2rQb3T94BzgC7m7JqDJr86r3PcwvV3mRwp",
  "key10": "2J2oUCWsNZuw1gBwxN5jXQ4u5fRbSnLGW5RCKZwP8huJaVeu8DhnRmZwmA2cAq4F6Snje8DHqhaJK3htxRW9eh3G",
  "key11": "5VAtGRP6qHYuXGFceoVGS8PmRXscKkhyGpTsgwLF9Z2hS8yqvHgM3B96AjuEYzbsys8Q6SkqGatDaowshNbbEsg3",
  "key12": "4eKS5UBzxw1hrpuTAagne9hHwSbRFh9E7AoPeHKiGwQP6SmuyzrZ6zYnQUdERpNemhF5RfTMqHTn8ZTyDKGaaRHr",
  "key13": "2Cvjn7GNLGmBys5sMz2T7CUzYD7kVM8KCQm8AQSnP8KjGw1A96nVk16hJhSwqmjv8FCK2o3gLeEtbpQXwPqLV4C3",
  "key14": "3kKxxZjm9WaaCurRmaVwsTAFSMny8K6GrKt8N8XuXnQLpzfv4BhVQ6KH6c1HVnmbESEvi2c1tp2ZmRVewtJBndVb",
  "key15": "42oy3XNDEdQ8H4mcTdA1MiNbBioLMjGWLpWYdH6ZjxVnhcyoypPy5tnRSHNS6B4xfcjTuU6Z8HPqSyGkhGHmGkp4",
  "key16": "5qKvDneu822HdthHXhRLpQ92pyKstfKXKuLr9hngRPVpPUF3JtJoe8mrDnx7Pg7F8hsz6v3qSAu9dMgmPCdXpsGg",
  "key17": "4LS3CmYUpVrgwdT4bJDABntYGwchEXBamD67AZEUjqto6zR6ts1v2ieVq6FqjhheeaKsGMrrgFwDkzxxEBxsJCaE",
  "key18": "2ad6AoWcBX9CS7tS6xRXYVQpSshGxdfFRBsWwsotvMCP1Rpby8jMcYD2kezfcB6WfPReHcUj1Cy6p2sRkb7bt6Ju",
  "key19": "4yxUtrBwKj9sJTxynMkpL16xWrRkkoeg1GWfmFjBXJBTYENGLpVf3XaJpisv1bqxGUtHfsz6MperhkeKRKrDNzmf",
  "key20": "zTho1qdUe1VN2DDXEBexDu9KcAC4AcFfY9xediHzGwVZxQYUXi1buu2CdnmMA5m9x4vUpFmY3wiNugWer1MioHV",
  "key21": "3en5CyFH3hm4Q2vU35uc7HUhL1reDxb3NZe6KXPrbAmNFMhNvjg4Wps71qN7jRj1xjUhyrwEsLNjZ28FjekoMMYD",
  "key22": "4UcYfTEJSemmv98eRrhUUQMmppSkmGyaVXYhtCUHq7nqDi12qf9ZbwXntHe8ZT7TeomsTgmyzwSaWtH2bVba6oRF",
  "key23": "ARDsW3Pvzw1HaxeAk5NQdTAPixorjq8epTkgACrpSjaEvmUQHN2r34ezFcxGPcoCkcGttX6F3TeW9EFmu8zP5EU",
  "key24": "4et7jjBGNqtx8h6BpuJiPXJ28AQD9GKEwr9KC1XMFXAtdeQyPmLn961DZ8kS8wk236jdGFe8hyirNeHbbauwaJRr",
  "key25": "4r3SagRdztHgpn3ckG6i9JhSmYAhfnDxLJHF3AxRTMNRZfEtj11ohW29QWG8H9QSfD27f5FcKhDoVREqiGS8Pa2Y",
  "key26": "va564sGSUuBD9Bx41B3QUSrpXQu2Af7cETVQ3ANmHfVBtSVjH4N87XRGKo9bDvNqbsNjFjmEXnWi6X3gVSdmpia",
  "key27": "3WhFSDvZCXUF7SJiAuzpgCy2ATmyxprbawg596qtFCefWgE3fKf3oFAzRCvCnyAWWCXZRgHtgRcJpb3fTCNrpJuh",
  "key28": "3hTmkZwoykGTgFLjGkhDUC7jtRj2NtMt89neUqzraLgyZyVDRWK192yZB9sTTJEyGUmeqmQWDzh1Adbpmuphcks6",
  "key29": "3gfbTV81scjFhXjoh95oK4N6iCRGxuXRuraqgM5pMAKoCcNRwCeRrJsHZHKcoDwjAgQd7hReq3PAhexGqsiQN6FK",
  "key30": "55fjPmEMckEYQQ6Pi8KaersT9UCj4yTecCgSWVqXb36czu6kwgVoWa2TtjEtRMXf4eZBvLWphHf9ApVp9QnU5jbe",
  "key31": "2RWbbFQxpph4nzo56KuL8fWaF6fm8dkVwDnBnwzuTYX5La2CdR6Y8jsvj5xh8YqvzJ6xxcH3M4nSh7YCwpnCEkc2",
  "key32": "61NwEPMbWhfPbz1pNqpwUUQBA3bDz5aRdG1Xjv32ed9sXFwrV77A2HM5tK7uk8ruBA4LaEXdT99oS7cHbyXy8UZ9"
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
