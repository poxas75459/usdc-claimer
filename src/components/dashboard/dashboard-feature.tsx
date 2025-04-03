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
    "4ThmKDouGWfM4HcDgsz5zdv652YGqsvzPPmc69AkehAFHC2mGk5VsVk2p6RPT3ARCdjQWCeTz1sJfeJfFhfi2WRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8BMrzsDH7hnSxGF587xFrpNnBvUpLswJXYGvhoTmecDNDtZDdnnAGS8vq24YnPmm7a6feUah7Mq6CYkP8gZrL8",
  "key1": "38J8gnwd1wckYvkdZ2AC8K17sv73XYysgERFTAVQuzjjbXXf5ViPUjE64reNhmNxjfxiYyLrNeUMnaSpFrp4fPfF",
  "key2": "3SakTe2RVKEucg3oKqZcHUyPyjB4r6cZMMYSfdaaUfucwCr3ZcSsffD3DDQXZGtLUi62u8J9wLHJMWQZsnukC6qM",
  "key3": "3TbbKiGWsDsrfVyMxRe1ueHiy9p7JhKUivwWEwVnoSU78fptKDr2ofPJRamWAH8m9mCfWbhs6bf5YdUXQW6KXuim",
  "key4": "4uf3XWProRuL6zuPZBp2nF7KFYnCcnpeJtQ27Yz4u6GUkAWZ4ZFd5AhfY7wKNsAVsET4iCNFvrnE9rgd1gEcKcGi",
  "key5": "GBTLYPtSi3QEfJTtFwp8XUS2LBcGajynvLMfFQcY4BDxt9LQANXUQPVVdicuuLJaB6paK31SMtRcsnufC8yNsdi",
  "key6": "2DHK6pQHQKkGUDNsXGnuKw2bza7ngrFS7L4s9c6R2AWihAWsNGZ2sxG491ow6PdXEJQkGXrmRApa5nmss1xDq4Kt",
  "key7": "pkR41GaL9RbQUXUVdjoDsGXNnzne8WmHqXLa2LaKwmawmm2DgzStvRpKdDNQJWitcvLY2ugriuQEKWwb2DCToBa",
  "key8": "4us4Ws6i23vVbji7X9qbfeQmQvomqTKtEn5GC4cDxErgHyApRLiSsiuNVhfyVfinfPkbdk9JJtrBws5rcAzRspvu",
  "key9": "ACM1hnn1KrUUFZTTvTJvzZnngH6kyRDWoBUbGzgPLGEYyy6DBegqaiNTRCDcmusVsPzdvGLr66xuve6HtSvEX3w",
  "key10": "4dzB2HLfnFN88BkGZC3hWCpSb6GK567KhGkjMHoaPL8SmfyzgJuue5zbzSPT4urbt3A2V7KWwSQyBmYu6NJNiK9k",
  "key11": "5xZAmpzic5Jz2RaHjCycojbA94PoN6pzhYcBNDYJXxn2e8EHryjTig6xWmcdeQFyzpFojJWkPHHsPtmAW229ACut",
  "key12": "2522K7kvPu5sUbeZmW1i7HVWWeibRe2cy11hQyYEHvC2qKRvhU8XApwKwmYxPMdRV2wiNnMw7zMN8N2ofVuyQJUD",
  "key13": "Cw69pbJnK8Qni5ZewQZJN2Pd2vGjrYxwEHQJmXAjCrMcHAXg7Rqq5LjbwzVcaBsZk3jY6TYqgfUAaz9JJy17xZF",
  "key14": "rFtoM5saUhnG6kNtHte5D3B5KCJYVchLvm3HcEvGpHj6x87jSVsWGZhAQv8Y4Qvw7onw3J2KDeJMCxUbd6qEA9C",
  "key15": "65beE6GHPWigQ7ohrEvuymWb42SpCeTQ8Y8rNryXWyySvjfeUrYFADWHJPVB4yHC1h1VCucCuUnR82xwBDPyWNm5",
  "key16": "MM44GCWGChUzqRtazE9KysZFF6449p3iHqMT85YMBNBD5gv4aAh2qqVDxmxNHwuP63EoFCSiiYBfDKAeKzeHx8w",
  "key17": "MiLJRzQ8zQ4cCR2jqMNa3K9EtWEtCpbE3wx5ocXnNcYzggRKSj4pHCwMtu9aUE8AN61neb5pgi27TvZc9ZZeqZJ",
  "key18": "5MCur6WbuvX1Mfzg7qcTn1GaqQfas7YH8YyUgsRnZ67nsChWQAJHY5yoQPCQvH4bVthMHEsEe9YGnKTC4NTVC5w5",
  "key19": "5Aj2rE6hm7AbFWQnHARzmKoua5A5MKhRzaNhW3JSQTvB7VK63jbiwcPXDzSLV1J7SLdYNYrgK5h9JzcUwxvsvsVb",
  "key20": "5PpDq3kATpqqubiqE8sTcmGP5wJxBZBQp4HcUJUk3JXGEZkpzGvJ4E9mwHdQKLNhZNKH7cAjpUvs2gbUTEXjRABU",
  "key21": "48MsgR23GhkFbEKN4EShwP4QRGdn43UHgut1dnRKN5DWpbTwB2Qum34MPzddwx9LzU3MAYZXETJpq3bdNBTZUkgv",
  "key22": "5q3mn9Ltr1c8AinEiDcMpfoY814PMEPz5VJnZ2KSopDjVjrNFfb9JkUUuNDvVmBXTbfu53PfvNyr3pQfXRw6SUyJ",
  "key23": "To9ULrAWcUPN84bZYncJPXew4PpGzmhXPzmE48soXsPnX892NpxPUVnJ7kGnGQ9s25DWN2gRBxRWoPNeEPjgc7i",
  "key24": "3mcDVvSBwLfHQmndygY4Bf6UnqWsDqVcUbuK7f4ZHW2hVwFwsEvE9n32jLQSd41jNUb1iwFoUiDRpe6BGCKnLdfL",
  "key25": "9WkDzbiX7DJztGDZTmgF9TLCDoJkN7KQsBhtjrwgHpQNxzqrmnmktZLq7vCohXR7seSjRunyJ1b2LF4TKUN5LRH",
  "key26": "4dsu7RZrTz88zDrbW4GQSveBpLNfA33oLQyMAsGGCpLmBMeobnaH35p2b7zkaFThvLCxjTmyV3jS5XpCmzuMLTpW"
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
