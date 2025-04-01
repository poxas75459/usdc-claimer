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
    "4FDAxGooRMCmR5gyePPsVh8aLUJ1hmzaqy15UWM2RE7e9usT7Y3Fj364sMFAYW1o4cSTRgpcoHUejVA4fBAhUyC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmP45JSEDZBdRSKhcatNto1vGERL3vByCUavVT377c8R5VreSx2Mz7t5cQnMuUzqCfEFjxqLK9rCpwmHzARWLUn",
  "key1": "dxm6e4JSQ1QJWR5DeWYVkLyAg9WoZS8PFQ6yLrgdN8SEsKR8Sq35LUtT1Fj9xiBWwcAeU3MVZjggPKBCfm1FN3d",
  "key2": "2sYxJ84ScESGBiSE9DCUo3ohsyiREA2cHEUYKVKdmGRXrepmiGFxvMGKJMfo2jVS4JmA7QG4d8BpkTDZG4o8EZf",
  "key3": "MsH2ANF5d3hsuidS1ZNv9VVNJqLUEi5X37NJ7KeT26hFVfHuctRdR1tR9bFiHvnyqxZeezmbYHfYZYhqhseUXUM",
  "key4": "334etUTo5nyH9FdBcAuiZbGm1vvEPdVM3PTZLbvbAsJZuTWJjTgtGPfVDY4VFqAsTFmhtAABx6i6FrjfYsBFSHdT",
  "key5": "aGQgqDidyjbdU74DodGCPDU1pQZodMzBBUCrXfecZXxxfnBc9dyWzzG78EU4dTKALELVw2dS5Ehvh6fGmUz2Grs",
  "key6": "35oZjLX3uo4iDJRRCsnPZKT7VpoF7X6j8gHHcNjQuD9UpztAYo8E3EKurxdBSFxxAiGyB2aBE933s6fx4fjNSAz7",
  "key7": "2vBUJh328SYhDKTHPwQfBvBS85jYFNuc24hQrC3pMYynS7XEBTDU8F2hkZFHwhfuHyDBkxPAH25xMPWua1vWLiRm",
  "key8": "4gR6b3X2qgfV6tPtZvz5WmwgqQNy3frcyLPjwYduhYiuxqkVV1jHtMnKAyjZ4E2hTJ8b3YxhhVqBywJDTtoorhGP",
  "key9": "v7nBdsfeuUQydcerj9rHztxwNCsznyhJpD6EwYH2daKaE37XeGjoACLecJ51KmgALeWTP6mdrJa6dddx9Bz3aue",
  "key10": "29XBHiH6CzbQj966P39N8tp4bB6vEfjQGB1sVo2WLUFHY33WFaNGSU4CPJzyR5H4Mvp8xBpyPWdwVtSuEaKQqjqP",
  "key11": "3F4EWCSDCS7gx6dn5C8hagzgN9RWzJk2VpgWrVp8Zc3TcLwBBJkdVhQy5kdAz8eXZ916MBit7BpKR9e1tsr2vyp2",
  "key12": "odaB5Lqc5nWiUzRrrmeShZrVzz9cg2BmPCH6EiC3T8JnJuyUqnS5dkFrfUCBNiyhcMCiYyiQK2DxfJfSQHka9T7",
  "key13": "5RiKUpz6pnsayPEsD3KZVxiAjirottVkqHmfKCsq7gBmmJYcuNXdNXqvoh8QeiCTAdjDf7mUVRcKgxqmC9Qk7KSk",
  "key14": "MUKrERaYVQ8rJU8ECP8xA19KKzcsnJ3XrDHThhR797AagWRrSvwvKiYBCQ2dB4UHq72MpLXuQjuMV7XtcGVzZHy",
  "key15": "4hsHBwPyBpZyYk1J3pAAJUma9kXCmLUsKifxgkbfhkxHzGNyg8jZM3UuBBEhVJR8Fx7Tqat7Z2H6qPjUdPSGua66",
  "key16": "3afCG1SN7CV6ZA1dvz8sLmjvSUbwvq6qXpBeyzsrMNyDCUj2meEy3ehfcVEBMRbW8EnimidjNKiZ7ULWYUh7czNr",
  "key17": "2UWNqHrJjxf2DinScscP7Sojb5Dt9YZeXtU9y3GSCsA7uXjaYNg7jAbkr2U4S7Gafwh1yb7S3Pic5LCLGd5kQwdi",
  "key18": "5TySFFxGko2m675aR7HJ87PwcJWZw4eE2N82KMBmS4prW2qrGrbJwDExN9Hr4TfAHXtYDvDPwtGoCdznHukMfo9V",
  "key19": "4vU4KEYjj58bRDnAP3dzWoacDZ8gZ5wo69p75iz6qSuJbV8tDWmHbdhNTJDQzKGpEsnVNncShqgEM9qiVYcBLisA",
  "key20": "5tr6qC4V88bDCfntov1C9kcz1KsQNrBVMr2gwA4Ao1JAknj5ez2WdDBkNi5giiRDCTh8un9aoJaZegeJ6U1ccs17",
  "key21": "5PT2ioVtin2uEgSKprvuMWW5wSkVrcw9NqWraVgZSSS3SasNgo3tQPY41AhwWp8wzPggebDXwTshhn1pNMzpWzBa",
  "key22": "5Lsdvxuc1dq5GJVHJBQf9n3D3dGnWGe3yzwSr3KHry1ieRfiAP9NUsNMzhu7XMX138VRmuo6PF1fpMgcWU7PcxSv",
  "key23": "2K7qr7KPRYcyKjzrZPVEXF96nJsupMw8k1xKrcwQB8HcanEN8gXz6YiPhQXum67CD53KRW5NzpsnoD5PfqsJGrqX",
  "key24": "3cfDM9SmiJtf1yhKBbsmuCDGSqbXga3vzUsHEY2ueQbSMAbBT3H3Thk89aChDhFc5fnTeY8WFc6xKTK67UMv2vD6",
  "key25": "5C8ceuHyJkdCcorgjxDfVHjgD6ezwGEcarspoAgzWjPKswgmdTJGpT3ZGvNJZPvJs6G4x1YhhM6L6EpJSVin5754",
  "key26": "3gmCk7X1ugyjJfdUwVcPXJQgvYCYVZE3aftbrfD7cpDaP9NGfWy6QdZPPCfMbcsmB4t25tPBm1SvveiewpdLqEe5",
  "key27": "5yEqp9jx3MYCMYieZ6ky3dJXK8Z6YU3iwjty982xZFtGSsmiFsBjZ74TB4ywWVCfTwxApHWyuzcY946Qevi3at4v",
  "key28": "2vYAHnrNsaRHGZbeUjRQRuTWRZwDhEAyHQoucGp237XAQehEuRuVBuiEtTvcfH8EkxtZETbAU1Ar2UhgEQRdUgPo",
  "key29": "51ZVXkMuauoLk6zJJbSkVPcRmKGefdCEcWp6ckPhoCBR2ZqXuzGK9sBAuv4aVheuz6ZwbP6LARaG7yh3Grd6nkh1",
  "key30": "QWiuLGKvgjfnN1P69qBqGSFCThhDgxi6eHH7rvZ3ZX5p2YX2R8E84e1MX3dCpjSYTtPqUGCCEH3gJd1vfQMxdGz",
  "key31": "5uB5ZmN4gpzmNVibGa6UgagH1RLQ9xMtse72NqPWHM4EW3aJz4RCyQYhep5ipAqmMU1anbRyqnabv2BtiKyvBxk2",
  "key32": "5mzJV6yYuncejuR31N9M1ZearobmBe5etbpmrNtpavbgBV9GcgXURxg49Uv3rZmSYDqvduiFx7JLbMQjWDwysHUu",
  "key33": "hdFYv7NpJ42HefSm4qwHG5HYvPot5hspuEiottGnXmXpwcqLqZq1Kj4TxH8gA2BBgQ6gTRNk2QDE5yedq8y1ahW",
  "key34": "BgrdPpAxjMmuXHDV74XBE58DrQAiRybQkD7FLH4kyLRvC2vCceeGcgnx4k5qoC7NvhPZSjTCZWRrJi799oQutV4",
  "key35": "3q7gqnen6EBHYkWmXkVp6ARJ7rQNH4wSaoKSvYmNSN1nDmUN832pRqMUwpdwxtbtXZTBnHfPxfNpZR3eHk4ontp7",
  "key36": "ojkKmZP5qM8gPVhJkx14fnNRzjRzDQShEFj7qjGegbs6dKvnJVV4ui29Tfh8LkA7Xn41o6MP16ekcxXRmkx4SFe",
  "key37": "Cgyr4G2C9CVhDjmygV3Smay7DhY6ok5Us8fxgKtz16nvYGC9apjUP2jTAUukKVgCqTjmwUkBa3dQ3rMK2atN1tr",
  "key38": "3RLv539SRzZoS9zouy3AzjApf8gw2G5UytbmZkfe3Tc14CwWM6ghDVRmzS1g5SqYW2HfQLd7aDdBymUZQ5Hjfzt8",
  "key39": "586AjSd5TrVvrGbQitMXhvYqfkwRupmA74Xbp9VUQvE4xrbF24PHhoDAxEaigMmVm45Lyx9vLHJvANriP61gmHKm",
  "key40": "2SMqXdJJGszfUc9osbwPQwKBuM1m6RrymFr6PNcVrQwBnX4ysxKHj43SGtWpvuj5BavKGWfana2PxidyvM8DkUfw"
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
