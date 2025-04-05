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
    "2SPzBx1xh3e1mQGVTVHC8ArzhnVJfVuFfwBPZ4rv7cKNCdvN3eUzPR7UdN3Kv9B1kuAhYS4MwhEGfxBNJ89WCczM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTpwH42NAsxMv4SNHw6BXUzuFAVfe2ZaZNgDmQ93gif4kScWf5beJmQtHap7tyaUeUM8KFP95TmyPrkeaz3cKax",
  "key1": "2aNiiA4TForNXt3zQ3SozrS1mmEAcREKAVm1cq1sUV2avmW6VKBTZEfdFC5osi7oSDXmbVF5fEw5kVPmnng9e4pR",
  "key2": "9uq6PWNGfccsBfsQBWba4venKNxvwZP2Xdv1rG9LcDGqvSpr8VQb6Lr5hqvJnm9cpNXUmAWCcYiKrKtQqRAQ2dM",
  "key3": "3BesYtsGM63m2LGYhWhiS8B8KnRgaKv5jWnF9gjeo7AwEK8gy7ty7Rt6vwJWfvqT7JH5X2yE8gvQHPmywYUUN46",
  "key4": "56eNmQAsBsLsDcGTydqZnj3NFyiAbAM9qsaHstaBMBYXbDrkkVUmhUxg9AN8yW5uBq1MWP3YThQ2NwCsx858jJeK",
  "key5": "5PmEtrsSGDfXr4ULLEWY2nXj2g22NStLnuj8uNWVpvHKiRCyDFNrTSn4nkr7bQAi6MUDPWeuXe55yqGYnVMYUNgq",
  "key6": "2kCLVVa7zfMiha8i5BTuftnikeL3GTgFwXhhapLkAzUWpzF4BmDAnz5b23PgvP66Be2psD77pR5FgpCCdy5J5aFe",
  "key7": "5X9Wr3793tK2Wxim9MLyc24QpCKd5LZb2hYJtn7wH1qkXndPm6ea7tJfHkPgLpLmb9DvUGLwtz6mjRdq2BYsGFKT",
  "key8": "8vygqsmRayi3Pn7MpC3nbJmPqg5t4X9j9ijL443gRSbZJ2rxZm6czsGPsbvRZLxJ3m8U4fsy1AGFydPbNc7kAFo",
  "key9": "3hir6TgnWS2vXUR98zHMbpbEMgKqFnkwnyEddb7XdkifxPkXZsUj7QLo1AMpapiMcQFVVQijTrRH1aN2Vm3nNrzD",
  "key10": "2JPSuDrnkmfTcPMRDZysvV44j6q8dKk8Pxhv6mwWfV59SWSQocH5hadDMh8Hd95hmHCCU2bSUfHFqJAdfMibgoZN",
  "key11": "2sDmVL9SBTpLNL48ThV2Pi4qi43YePqAUjJ11HuZbF92EfcFHxz4SGpBu8d6zqXNcHAhfTAom3db7zPZ6FuWBb5",
  "key12": "3Q8FqL7iKuNrUJP3YHSofYt53WB5HU5sZDFBrLMveA77aoyxoReNuDhjL1BDYYYYEw47cZCfY4TEQWh83UqPYNBH",
  "key13": "4JHHmqanay1UHWDpais552T63wDBXoufqXpjWp6EDJRMfGuEBvwehrs574nTmhP7eUuJQUB41KqAADVsQyDNJMTz",
  "key14": "5bSh9yeNDcoQSDunjMohSBRW731mZVExhP9mL6a3JiuS43SmgGER1TdieNGsUnaN53QsFkCLZm75na3Dn3DxsiUa",
  "key15": "2bWaUqbdteVEpcFGGYHCyMrS9YZwagWZaZaf8C8pMm8TjAcywGLBWPNXJ4U6JL7nNcpttZPWTLUfw8Ti6WBptWx4",
  "key16": "63T73NRABpLcYC9EjpXD4CKaT3VoUAAZrQfuwBwhNjXi7yKHudP8qY2DGGHSqfcSbJN4u2qhH7KfaCuzvoRyngZh",
  "key17": "2iQNFgvqBvXoBZQM4V6iGN1qWZxSsP8zfVmkXtTqLQfTqJiQLJenru7pG6UsjxRWW41TbZPV2d5MYwcuc4Y7wxBZ",
  "key18": "j1bjvCbBiQtpDwaKJHMmM7Q4nsuH6pYD1py7cZszgo55gRCUMfqhxnvaAzy7zipxCjEdwL8vZHPf3C64xCwUU3B",
  "key19": "539EXa8x1fCjnLYdVgrEBbvgb1JiXnquWnigT4G1coG2vGvKN4Aj8srYoMgWqM1Z26q4hL3VrM9iBCsEBUJptAmp",
  "key20": "4eka3LKqR5ArBA4FzT2DjGywEphnLa1AmorS9QTCPuDHYsrTC2fjWN1VT6ujA1mFtXnNjDfsycerK8ZuueocWXFz",
  "key21": "4Af1hA12SdTUqVnAa7XLKALVpPDQKTRvbEJjXBDqajSa56JvY1hPoZUfygPnxzSvJxLcmNgu6wFFVbniiGBkKrhc",
  "key22": "61uHkMxjGNhU7fHYGmpVoFf2xvPHLZVqBPZCBv66jUCKbuDX7mg9dm1HPPfSCxGhPUGoxAH8sZVnmM75PgCpjdHn",
  "key23": "4hWWqUcEe7SHyk9RCAxESegaya4p1mJ1kBVW3uJ98xrvzyhrZ3mUJA7H3XcB4gjD1zLrugSEnJwdtWE5NRxyWsdk",
  "key24": "3JtBAtPy8AfkDdtMCgHDjTEfVhry265QGze5Dn8pzNeZ2NgHxBnh4FRojkdqijZBtKvMKQX5D7hXDj7qkCWC7Cnj",
  "key25": "4WXUgu24qhMBPXSZFRmEYuSRkxNAbU5YmGunNvgV7Bv1pFYsLHQpUSGPxSe2dwSQM8ypxhJf6WcxVU6VrxtPcvL7",
  "key26": "4PkKVmEydMkwPuZ7GW7J7wTj3NDRLua25d5rGH6M3RdDmzogULvYkHqVHy1dx3NVBJ9Ut3a194ZCU8ugpgUAKSsq",
  "key27": "dLvoJ4vE17DVqiV66Shn3rXKq4zrSpPPbegax68VqoHpwx8UjrxYZV43URRLHPd2BTD989XnJE9XpzXA7dCP8vX",
  "key28": "3EFutbwsbbfCHyg2kfZJ1883NpfNpgVQBzV1o8JRuMZ1xaVHpzuoc33aLbgqK346yjVivk6j27yBLwnALC8oS6di",
  "key29": "3dzSRDzZ9qqYozphKq3BuL8WR9xUN7HttFpqKJzj7EpTh5AphDpekFXXrJfYeWjmVJwsytCdRLXiFQoW4csvp1kg",
  "key30": "4QzoazZSXTa64aB6ASNKEvEF1kTBfkaVZkesJNskmuepmBou8TFUcPDzUnJ53zpjRXa57NmUpkv87rafHFPz9dEJ",
  "key31": "2gTHCaNgf8dAFT9dBDyxVjWnXB2MNFQqebYa27ZcWcemVojwpafLozinsnLPMd9FC26ck3A6sH32hz6b4hpprXHM",
  "key32": "4qmpquSvLe5p12hXAqZ53GHgK8d4zVexxrkktgFvzeAP8rGSSPjaC7k95BQSQwwV7hJvLmQUTcbiw5GzoaF666tp",
  "key33": "LK9SBQSRBHZ17gxVQCuDLmQRkrypqjGppri6MJfnXWJ2mFU81FnXzP8uaJuSaECG5LyEjfkqmqhjU8fBfMaVFkS",
  "key34": "4r6U133QQzbHQ2nV2hioBFPk22em1BCjtfqKe3zbXDuGedAuopMAir87Fr849r9Waz7GQondZp44b1LY1kfKaXVB",
  "key35": "2CKM2cBoKwREdb5CGaD58nw9dS73dXXcSpboo8RtQssX43BvB8zUtgwPtsBxqrLdwFaKhMX82zfK8HKSf2bXLfPV",
  "key36": "5VHXRafKKczQHyAZc4YHNGSCjFSH5obno9HJZivtb7QdLm7DwtxCKCRTF4tcCyrh6LjFm6FNuunHtA7jRUD72pAr",
  "key37": "52fX1Z3ocYyX42XyABsntZ7EgHZadpTPGSFzVYAr3W2z4WGHUm67j9PLLwbubbES4ceo4Nv44AMK1yJLM2dR2KK8"
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
