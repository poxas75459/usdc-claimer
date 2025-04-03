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
    "WJA2XufSiDeeT1NBWYrqUazSPPtahsHdGgSoeRSW5cpxqxQCMe2WbvfYfj2ynFTeY5mxuyFEsh4dJmmTnpp9cBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Sd966jSro66yfCQ6ECQbeLkDnbtxVEBcK84MJsGcX2BoRcuNN73DedkyReW9Kj2RESwSrfE68UomX8uuTAhJsJ",
  "key1": "49KaHpi5BcFEFKeEDwnuvxtn4vSrCSY5aCrL48jHy6XRWJXrJ3BVxoCcQR3tGQdCXHTvU2NCerUXqMKo5zBiHY3J",
  "key2": "35adTGajfWqaaGRNyZ5VwSAYURZv9iV2k17J6AnmTV1oNQoUsNJVnXgeHurn2YAEnKYCzxaUirzWRqV8ZvZeQTSF",
  "key3": "4QKhrxSwFcCPpAQKPzYrH5WxsWGX8zSTRuzbXviwRK6DiZtDGx7Cy9QrLSB6VrsVbSJc3ifcdLzGitsWCrriktMB",
  "key4": "2TBRACauCf66FFbB5Kx8eLak1w6XLV5pUneJzQDzkKMzfMuNfX7zJZAdfBBagkapcVG1Va4E74a5ZMkFS9Yv1frE",
  "key5": "2hFLdAjnVFhabBK8ipTTwGat8bdoGxKRDpXjyNyQ7wVZoxmh5RSRWJMcyHgAmDYEroU9nDQngKM4h2L9ti23B4an",
  "key6": "5pEhqw6XXXSbjvCZdH7mDVpbPaWZpxLJUKCfJZ4EPx4QFvnjH9sdwS1ZTwCVTNSvtX4Zp4RywDg564jBDqGSuPuU",
  "key7": "2kSKPfMTMKzNFGgtsNH7xawefSfc77FzD5XZqbaJSSDFa6ctMFxYtyJJ3h6rwJnmYTUGuz8wEgxhYAek7VSs4B6i",
  "key8": "3pVT1J9YcaaxFdk4gNCxHSWeuJJYVqQs7retPQZT7bY3HMYbvgfHXq37hwo2UaaDVdMgEGvw2BjqkpuyrDkxPKhy",
  "key9": "5vUmg75MBsbPeEd5kpJdFXoDWRbLYY8vbmjhx5CLuZY9gnBoeN74N3JLb7rM8uewcWMu7GvV349XJUkqwx5qAv8j",
  "key10": "5odxgNKkM2f5DAxCVnqZ4QwfgsXMfCnt3eEC1yNxqv5t9Zx6RkCNCSmiQcBWZcFQfjTiCpYmBvBRiwJtfTD3aAoe",
  "key11": "33nXDxs43arnUB4qc35UziBM7fpwP7qERw5aNmLVN5QpuCPujpuxFVXBcKSgz4QLAbmanWLWPJEVjQmHQQ7v6JVm",
  "key12": "28u7M1eTi9fqEtgvxDQNiSA451b46rkpJRdRZMYz6ULkEnPTysyLhXcA91879S6uTHfZDPnnJJM4CFTGpqc876Na",
  "key13": "4YCCN3df6RF6uwCcXFSBdUkiBoUVWmotaNY5hAyEvWLsqSeeyS4HF3kfbTHUVzymwW16TTh1bWurAfGnqzWn9Q6C",
  "key14": "4DU8dx8mqJdf9qzoRCay6Q7ZGmhLg24dcectBM2AbXSKVKiDEGz3ct1ER6fGXe3cgHegu1NKv36wftMon6kNn4eK",
  "key15": "pZcnLoEJXfyLEuHYrr1UcMiKqG5hMPXcAkbKgczLVDze8dgY7KgQh36Um33dtwxqwDBw3MysJTed882F9MtpD4o",
  "key16": "1Q8GNk1LoQA4duzGtj9yfR57Qd41EvDiKajcDL4bZxKdNHHQsTooQ5aCupXjH9M3387WZoC7vQ3rsN9Mt3kuF2w",
  "key17": "4eUgQuHovy8RpSUQ6i8HveXVkpeAZwfCojjg3PzaFGc5Fvk6A99cLFuhbn95YSu9z4S1T5rQbt2MVkvJiLFwSFKm",
  "key18": "23eBdi734NdAkfPbW2X2Nzz3AnrPieaEFj3SwLKaifK8hftCQhkDBnMkabxxqAdUWrBusy4TWuEEg5KVHU69oumJ",
  "key19": "3VQhxQ6L5aD2KPMkUrhQVhEkXfJQ2EzsXZ7cn26R1NAdcEbZo3fXZF7WmQZGHxtV6igqZYGnsXFtV7nhP2SomRDj",
  "key20": "32cL5xdAMFqPFuTU3Ar5MxAUE88A6ZS2gTi3HZFUNSdK3nK3ABGQetmvGUz7hsX2bZEN27nH8cxPuuwZ7guGsXPD",
  "key21": "5YwShciWdpJnN6uLcTGEnuj6y5eaNn736tX7TJ12KRre6kJD66Gnn3fZ92tV6Micgp8nsuYMEa7Ap6H75zjguy6z",
  "key22": "K78DLRXJnoRbiEk1YVvCAjK2w2ju15giY81cJUWXaKzespUF8fWbFbMvLL7PZnyo5LjjcfhfbZbhgZ9H8tUJKoS",
  "key23": "TbPtEeQ81DDRnByQkmVK5tr29TUeWwbnNEyTpTErN6pWwqLc7uprmhVHbwWfPcxgCUDtgh54VxDYhpitQ4QsAz1",
  "key24": "3ms6n5Tb3t2svPkpSoX3xtCNKgvpdfZxcNbmRGDaMHnxEJ7aBG2dwby7Yf9gQLiUwFa3M9fptLqhGV8DCf8kSDzR",
  "key25": "5nhtQM3g4zJnC1jMRK1ANF88LfSsV4XiNxFBGKwQLmQVzKCRQZsMLCoCZgkj3ocUDP86nXkEbgCkEoDMwABNHYZb",
  "key26": "9d9373MS63dKvomu4sELnqnvmnZRiiFmXTEFe14nwVttNCjUWCvCkMxwKYJzSCqTLGC2H1ibU2HwFBFrYxvhV8L",
  "key27": "2WkNxykgaANNY1kxBGyaiPaXGCe2sMzUNtpFFnRd2QzZvwjnuX19P7sJWaVEkdrsgBcupmv8HnvDDDvS6HtsNqQC",
  "key28": "43rnj12MpG5gXLM7sjjv6V3ijNbxNH56Dg5MfszumqQCTwAivNEM8wi3LGYRJeJMknZXdYfMchN3mqnfModLB7eX",
  "key29": "atCamiQqXYNSA9DPjpbAem2STi4qZHf8cLjcsErESjatdq6gpHyYE4SUyyzG7K3GMPQTznaiPG9MRY91tWHrz9J"
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
