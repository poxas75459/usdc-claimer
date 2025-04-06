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
    "HvcqjuGnk5f9rjvBE3yDi4rKQD9dEb9p4Pc2vf1xMwxLgL27VcGQT6SNjd1tqfZ7BTr6N7Mb7LoZW67A8DXeyC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKdNb9jbm58EVBkQnxDPnY5BAkof9xfMaBkoUEV1SzojmXjrxCt1i6ZFxZgox4cpz2Wg4jNxcgiLq3zCd74wUhz",
  "key1": "66nSBzKVyNWFCmQFY33JK4x9dDgLYoF2YoDHS6tLGAu1s2KdZXFJ2Ro4AKSWdcdt5tx3SYAanKdajpLKGmu7Yswb",
  "key2": "2G4Kc9N3ykfzi84BgAo3dugWmYgMnpoLLxFXH6cp6X4f8v5EoZBLgYDPQnmEoTiZvzPJ25aZbPqotS71jFKCQyJb",
  "key3": "dLFNUkG53sdmQNQ4wmwjo7uGFDKtdx5jmmPdzZq6EJyjwKcLFt9w7vrhVNETyPv8RFZyytScto9XuGi32dDq5sY",
  "key4": "4rxipBFPqYNPciAChKEL9XE2Ea9588MwNo8poH8favnj4mUmdS1LfibRKRico45mNvUR9QepKRTzDqfUUsxAtnyQ",
  "key5": "3x23FvZAASXvjU8nBdr8bfcD6PvSnhKwq7c6eESPXHqymATudibwXViyTo3JJJPL6kkBqELXZWczuq9QQXh8EKDc",
  "key6": "2UQbGmPAvRMp3Ne6LvjZqZfvYzcoSg1vXQkAzMAo1xpJTULFpFJd9pfL583qBzmEYTSWPhnuSWHT35fEp1XepBNU",
  "key7": "gr1DiW7Zwsx9sgmCDXZZ8VzgQUW2K6JWSfrbdFadXubjWfug1KFaNtJbPjA676Lu38NBKxiomYmsN2WUf2JVQkF",
  "key8": "65tSF5gfmpDen26x2ykGPgpmGJ6gzdCY6vi5SZQTMQ7LKeXJbrSDQwdReXc6TENtTHjavFyYmXFy8KjH9taS9NEF",
  "key9": "2XcKmpJux5FN73K6se9kAM8MQzwGDW7nGSrUQDuJ1tCrbXdP11GVYjn9EXVad8Xqz4a2AusdqZ9FRxuAK2RFgQot",
  "key10": "jASzx9pUsFVnrnjBGJyTvXzgf5v6yChSgPpYXRjpAMHkaqGVhgGWxFgpYZKyHtuUBSSz68HhVTvbShG58ziQ6hJ",
  "key11": "5ZoZiRfs1fG8GpZ8KEfGpMXnjXVdapFXCEirtWbUqGyK1tEpg3S6KUD6RxH1swRhHbqnvyu53hGcrB8kcFFKqPcy",
  "key12": "29Fmqbpuz2epkSr4CPkrXNP1DK2YBxr644QxxjZBtzbdQKcot852ZunLNibXU9ixTyCrRqLfTf2jPGeZsDhbMJKc",
  "key13": "3xLGSsWqPkMV733mwTZdqGdfH1bjp7tMa7UzeKiKdLhaCtV1EF9zP5WQ8gox4nCLLAdxhQ7j9KJR2XBHCpXSNJZx",
  "key14": "5zhCdswDJhi74r1VEvkvi9Vm3kvQCn5a7gNm8efP8h7otpBH6xTTwQtwEVL65NEyEHnsipJLU8EdpQGpXPB6cwhH",
  "key15": "57iEVfLVxWz9EWByBanTnDe1L1phGTxJDuq8GwQhYqxiXUBLezbBrtA3z6HfouYq46hxAFrQxE1EzPcu1KDgmztz",
  "key16": "4DfCz7bnthN3AzNBsp2CpwMhJZ9CqtUBAyHqLHAoZyZWBxhsTYYzm2jRpsVRg1kpiBrfRsPiAM3pQdWdvdWfJ9io",
  "key17": "5iEoXENzYHoTLc27b48tNJg8AukczGRdbAjT1skduPc766x4pFzCEU3HCuTqkKS1VGZtWxa7dN77iFkU8VHkPBgr",
  "key18": "2ep6XtWY2YwhVgDcNs6Ua9rijqDFsW8F6akoBt76YmkRuzHU3wtqfK73JFjHUsUg7s8mxhBEHeHoxZYVQkgBwCLP",
  "key19": "5BNQYQ9fj9SEjsT1n1r868CE9Kuju8wi6RzCiZhT2Bb7ieeGzJgAUa953qVS5rmNi54AXmZNToX3oH5YVPUANk2k",
  "key20": "36Va2p37XV6bcgjaWvKmkxBb4FRBdKZJWeCgqK8uFhWWCtYrmkpe2EBRi2vWoUfGgVAUmk1cYgvadsAENNYR7pHj",
  "key21": "3D2GxJvAZYfFJVR1NE6qSDZG91wTwChbcrQCctnJuZDMVGhbEUERyhGx56754GoRyX7kd2Cp44WGnMZSSnfAsz7x",
  "key22": "2hgCYNUr2qc3ezKvGqSmfFqUitHwUNgEtvxstavYRHQ1g35YwGsRmDoMDqi6tUcynxJcCESoHAbEeJgFaMFsfgvH",
  "key23": "4P9dpE7FKX4G4BmRQxQriVz3qKDEb83weowHKMZxtwTmyNi4pXtVA41fpesvQ4ejafmRrF2NceenwNiRP76Bn9v",
  "key24": "2tYT94ePEnfLzjAEpnmV1Mo3FgNGPYDKXXkbZwP83LafDjXiubMvkxeoTQLejaEwiqtsQLUZg3CTM79WGww8dRDi",
  "key25": "5nNcmSADTk6ZjEuRW6i8ZJb2aBJuhHJfSQhkWpyTQf2V6FrUw4kRNWKr4zzyhx1zZEZjXreEvd8XGH1EsAN9Yv23",
  "key26": "dHwvTKq8wC37MWatLaiss8sbi9vZm7oQvRvHiz8CmygqacjYmctwr5micebn4iQARvsf4PmvPsPCWS7UKk6pRkj",
  "key27": "58mwsvu9WbfzTaAN6xV5c9Vdeid89XtzDmmdoSDUrNFEacrfHJUSG3Y1xhAD1ua2xEfe74FioLCaS9EtT536RY5",
  "key28": "2hv8PbKkAxcwSmBN3UFPsAV11wD4cmcsR5tBcGNZaGdXbRS7sFnektNNe4m5HxCe5JEeanGNx6iLQCtA4iPaFASv",
  "key29": "53RGFaCMryQMzPRdYQw5UEoPq8SHUa5gYZC4urruRwHdLF42vUKS93mEubeT7ZSkhbXCJjYVmAh21QJv5rVUMtyx",
  "key30": "5C9TSk9eEerTLEhsFCsKkPDeZbZhazMt6PHxQRbHu3dWw2oABC5M8Vf7w1sRoke2Wu9xBqWWUaXFMyYuCPbdwY5s",
  "key31": "2a6ewbEs5gY9c1QKPu7YHu8F3ZNTGpHsNGvqDz6DMyDtpknAg5J39rVPZXvSyeGk4SABMjt1XVrwYHLin9i9CfKT",
  "key32": "49fCwBXiD9BEPgyg9UUzRYQETJiJ6ufkcPpwHPKkmEwWaMmbtEStFBtLrXJLvUuc6cq6RafzKgDrLdhCuEgBX4d",
  "key33": "3h5jBX9jXsZMkb3Eee2i78s4FBaZeaAg1Y5bz8FCEGX6TNKmgPss1Wqjkj3NZ9hrcYTMyyA6ha259Uu3DHjEqeHT",
  "key34": "22xD4GicD1ABPgG7CDWzvVisN3HZjPoaLzrqq3X9BR2titgSDtGNBBKYKL3GVpoWCkpQHJPCdWiw6UfEZ5Dz1g23",
  "key35": "2aNLP5AK7PgVUNNshNniP2dfB46PsUmjhTuAKorrvnT69JqwmeA2gQigQcrLFocDXC5djftogqehXxMC32hUW3DR",
  "key36": "2Kuahoq8VrMWmAK58r9214ezWuLVEGPcaaenRJwMNQ9PfJ6tFkZj6Mm7csscHPKMt2c5ahbTWmVeUwy2i6ntMFoW",
  "key37": "2UfVy11izC1zbHciWNWP89env459Yju3sbbQuGJat715bACJwgoTfy5EYPSaacLP34N4LmeTP1TiKFRtsPhFhrHQ",
  "key38": "3kzEDArCLTzw9uspuTYvJ2fybyQHkM5wR7XHvs8tUcYBgPbAQJkRFrDRw1sxMN3kVZtGtopDHAhk8UFvyx5Mgfor",
  "key39": "2R2v1v3QLP5jbEy8VesQRgwyTk9CDBB6zjxc342jcgBrhaYJwkkzouQ6fBdDgcmidbwsp5BkCePJPMNncqQ778Ao",
  "key40": "3d614kmTRaXZHJgS5ffxZxwoBfRQGAZsssyyQtxAZUigno8GD3QQRPkvwk1sKcHzLTkEqWj4ay36xi9AZsHV7eDb"
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
