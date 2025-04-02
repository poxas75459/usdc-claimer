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
    "SVY1ymXG5UFDTav8RdoEyzPzNK646fhYWQZzaGnHvbDocPhsPiUqJXMVVCLU9xsBUpm9iQt9JemRvb8uPYKn3wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M177uYzwY2FbV5moWsARsbWBLVbQzKqwtGL2wdbp8CdamBvQm992VAUP3wwZgMfqm71kJ3ftqYa3yJ3SpVtsbjm",
  "key1": "ayWebe48sr4NwJEd2AkjHoXKcFTzkJwU7esGyT2xYZkfRZqAFtsnbNNfPmmxoRBAkVeqXdjAYd6DAQmonomoi2K",
  "key2": "uuAigHgVh17MNwt7nZG4zLsovJ4Z9ErZRwsK6Dso3n4m3FNJtvL4b65avyU7M72UgtDLWun9ynfBBCcMmpMZLPS",
  "key3": "4eZZVDPvinvYmAdrZyb8r7zUuqoLZMS9vosS4MhxgZzTH1k48vnJcJWXtsW18BZ4kuqBcfXePnhtLV58wEEQW1dU",
  "key4": "2VP9vxrSc85aoGE2SgCo5eQUxAf7uFSNH9YYsNU2P5fNGLNfSqtceZXV6SKQfLSixfbBoKQTxXY7ezgjjorb9VL",
  "key5": "5jjLaFn8BNRwVrwHTVUbCnKMysJjZ3Lwo6gP2FXFc6scGmC1rNJeC7nMyxDUSRQVbqHpPnfvtwvGrXcbctF1VHzV",
  "key6": "Xo15CEoDSCps4BJUtbgtEocPJp8C5Xi1jzASREdzH4rvgSZS1ffauwwpXgezkU1vHo8cNERhBWRNNHCoUdfggKU",
  "key7": "3KRShjPWFcjhNDbfaBXnpcR5capnJ8v8V39CFKyhBjXZ5vie5M6YBr3gcxHGm6MmNZxH7prrPNTxN3ZEsFHARiXi",
  "key8": "gGFfPgHww3UFA4kv6udsFbBx1kNL8pEn7jETMR7gVY3EAfaqHm2ju5P7PNT9KhgCvZnRqAyRTHeLK1UR1Q1dieh",
  "key9": "fvHiB9vsYSUfkRz7PJQsc539jJajkiNYwcZEzucGmdXaXQnr4C8mbCQw1RrtMz9T4WfQxTC3krjya97QcChXctb",
  "key10": "2LfQW5MYKUt1vXKcbg81vgX3DCbujoFNGMphEAohNUSwVsgJFBE8yPm8nWkqUHR8gw2s7cavZfRV1khecTdtDPda",
  "key11": "52Z7761oHXsUYV2SNT9g6xhD9KW99tLMMv8osfEbNZYDJ5Jw3wrWRDC6AG3NadRSwMW4UF2KZcJ2qhJTxYYC8CPx",
  "key12": "5wgZtxMq9yCdPd7vz8BoKAKD6hnzMAme7Q9sJz5BLXiTxQiug2fdaTQdAmMf4fvz4kwx3CmuLoDTm6C47dJqTPvB",
  "key13": "5KP3jYVkTrkd96fKcKUNPe3Tui1qaRBMxhwfTMppKLexG9WgBETtgCUEfKhD432XoqDbACW3Hty1vhHUZpMqvAgr",
  "key14": "2ezTZhBEZpGCaPeUK41TCqvzcMS582EP59DnygW1rzjETwns6KBirTi8NuWpyqonhqDbPutAFC6pibQ1Jh2VJm3x",
  "key15": "4CbDzYhdVmFeDXpbDx3HrCog5LT26ftzJv3bg7UYRpp4fUM2er5uf6gSp5F8Wy7hMEwe72RLFeP5iNvGb61R9FME",
  "key16": "3aX1Jb26X4Pi3PeZSUhQNRVzfhuk1MGxGR64nTTZyx57auPxhpXjqM82a3K6D9umsRBbJYJejq3sycUogSNaKF57",
  "key17": "5NrTKtKwXPnEpEcMpAoo4FH3XRwoRhLS6WJCnDMUHkFb9CFJyLFPSpDsi7F1CmdJeDgv6AuQ7JcbxE2c8NgHEU1D",
  "key18": "CS6dnZrn6aDKew462jxzcVyj6ZhntXPibj1HR9xrWuQG26qeg3Ar8PWtUQ4N3epD2Jjp1HFsJXoaWxnWBDAv1ns",
  "key19": "3ZwkgK3SEocxBLAeyAHLxFf9mtcjQM9vb9GiPEawxhvsuUo94tsDNufA3TZkKt411mgnNPscEftRfZ1LXx59ADpY",
  "key20": "3n4bu7Sreekh3rR1CTboWjELxtr3kzbdSRdV8z6KBVFfMZj9SJYmjsQ61AD33T3p2L1yuaWCGX2bjpVPCsr1d2z4",
  "key21": "59qiEbKdpR4DJioCA6xiMduTKj3qbNeanwDohDbzLpX318oiwtUG42fWaAfxqGAGU45sduEVHbWtw8qVKHRQRyz9",
  "key22": "5jtWB5ziuc7h448wWfYKmNP2byPJW1xxhsEnBy3dcgQNF4EQ1Q68oVJk9iwoBJRQZFDeaaHRJ5r8rP7XE8QcvHqP",
  "key23": "4oYxW7cxdJiF3v31PcQ1HWEaTuA2SbD1r6XDneadi5wHwWaQLmc9kLLbAhonuWaVQxHJiDRxccPiHRhk65orSv1W",
  "key24": "LxXHKGVKtd6FhuXVM4o2woUvDkuKtxPPLzq7K9Ku1oh3vSmHeyqHjVwA8ENpSSZqKjC84kZenDrB2L61h2mQTyz",
  "key25": "5kN96KMpk1hrepjr7qmsz8XGGerN8QZ5xvjGaSj2gqCrU9sW5jiaoExhZpB2A4ov5zLrVvEt17ncSJUBj65CQqJf",
  "key26": "2HHo9mV6EzoUPpjT7HumbPJHMf8rRjXuYnsPfamxVipe25D1ofHQtKaxV1KKmVTtmwSrf11nj9mUupRbouTqGoew",
  "key27": "UBbeL5U2bXWTxBt9KCeq5xRL58HmJCRnYp6NgrM6AP6D7XmoFTZ3gnpkqtVJFdgU6wCNiJCh3tuA7QBCEiA1Mxh",
  "key28": "4jsRtrWwuwVkYWdzRLD3dJSZGo6i1nMhqJq6Vrwb83FPtAK1CUdhQxZAWU8yAE2cFtFPWDAiUxjJ2H7QQs8yj2rB",
  "key29": "2f5aJ5LgsvoyXARPC1EDbpb6V9Cx2sdPAwHsv2G8UXdQZFh3C6fpHyt5nggBGEXWxDrzvvJ4DVmww1mM63rGfwpZ",
  "key30": "4FkAtdSQEuEjbCRYEG2mk7uF4dHU91LEmJjZkKYaG9L2dodkYk6FvRkdsixATHPKKo1w3nQF66H3AX7bp5sUxL4o",
  "key31": "5CBX9kV1B7yaSAC4KBqpKEaSzAZUPbQiDQTeL7udd7JTphrjFzxCCXzMPmXUSSREf6WDvLWhFhXSNBh1ezfjfYiZ",
  "key32": "2YCJqrfGDxr2S4tjGqZx42q7Qw1w4KT9E77MP1DGXaxqvuWrTDXCR5g9qqjysvUdjZguUrPmPnk7AiCo46YJPXC",
  "key33": "3dRwuhYSrwWXkf76vh22fkDYSaZZ81xLRQHeG7hkP795nhe9zZtGd61eeM9Lsywf8AQK1yzQY3n2wViKSUNkCqFN",
  "key34": "41jwajShehbHEk1LoxXXQDzpdhzjKJ6pdQRwG8vBACRGr1BLRPk2QkXUzLTKypeAYrq4EJzATKuGPwQDEmxcohFd",
  "key35": "4g5CaJk7bh1E1Eq7XctG19vE9VRVrjexSAsp5uuPE6PffceR6gDhHweGHKq21Dd3h7VByqwBUykD5BTkVxE74GL7",
  "key36": "4QhVSq4kF3r8MYgbFmDsFreX61qhec7AwXP1CthqEZkCVcv25NvbjYbNKFW4eqwbu9ZVZs1qdF4dZ9njir1WnX7c",
  "key37": "39JVboJLsNEiTdPM2Kbt3RmSZYRwdd5ahSvNTowVxV5msMBKonCRkCkv34otYBRxy5FX6Rb7CZj83MXFwEc3FTkK",
  "key38": "63CV2e1MTdRbdGgThxSbRNWdRBriWbqUUtjFruN8ifrbdn43NUojW8Jkzm2RtsvE1xDXWWUk4fke3YaeZhLq79AT",
  "key39": "2omJYfceu9uAh4bL59aDMHHxHsjzcKD5xXyCfXsudBeFGCZiQiiNTRfhXy2VNV32VPhthmahZjhTnSmejQMMHjRs",
  "key40": "6579WARPnXrp9MSh7fTKgLjoSNGZEPHL4nkpoPheEwem5kDd4JP399444j8TjKxZtEPu68JesrCT9RnuYatrYqRT",
  "key41": "2wjZdhcALdUg7XHziHgBRA5pQguovE8eMHjJWRQPvpCUKEYstSxWT2vjHikGkvtRf7d5PBPZnxDHWmzmX2dFK35W",
  "key42": "3e8zkqCWfe3omFvfG7DVwSYnTQNe35vzoC3VQwApL3eEk8Fo3EpdTPrvPDT9ZLbLBJZtkydRG9uLqrxvi1kmdiUe",
  "key43": "63KXYjr7Q6c3UzTDFwWv2j9pCXzNWFvzo2SmapMSHux8K7p1yprxLcr3khaU8xEJ374VuCfCAC8YkmvwLMXN2chZ",
  "key44": "5tVijsKaiuyAsYpYE3kEgw8BLCsiAB4qkv9FzTs7qXsNxpopzSh8mgyRdPFqef6ENAvK5STHUHpx2CWbd7NJHUdd",
  "key45": "65yTBdVCw9QWfv2pPDPVSNuGtvu56MLTTgxu78evL4DFDmHfRB2R9EM8o2x6rwkraEwjjhn1potgsz8NHTqVWpDd",
  "key46": "4KJxuiwE3uaPKfBgdiMeCALogzd5VFqAgsTLJzbrhUedZaNfg7V16UTV7WKY8KWsi2UicqjLajwQVWMdsAgF5pEC",
  "key47": "2Qt4sueZcJX3R8jGsKhMXmWZSUkCYyxx1gbbwiVoxgjvkB7vnuwc1fJCt4q8JhR52FjQQnMx2ryPuJWnGiaCCA7U",
  "key48": "5qCUnYz1qEVSWFsdBeZvLskoWXGYZDS4Yf621KJUAg3tFghr2TAjf2z8UmSAbUa8LngHQpPKg9TNY3CcWELMrRwG",
  "key49": "2Rjs62kxTZmfgCZfURG6FD9hyouMe1ruHdmiymqUX3dWMnXpNQEGNeuTA7rEmBBaueRhyEFRAhumCU49MuQjnBdn"
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
