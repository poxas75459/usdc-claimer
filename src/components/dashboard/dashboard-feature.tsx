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
    "38TARMDd9DbW4A7DtVhYzUhEKsAMxErY5MZwZW5ZCoYLcsChCHtHJisjV45xHn5gSUXDpbQjYaBSVuvnERcUftjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVszRSbNvHXyNsh6ZYyNqyPW66SArvQ6NyKEPPP51J8CjsUSUKR865fMeSWYTN8i34UDnrawWgXSogsEw11cJmg",
  "key1": "5bUENupLBiuFAfDiqYbv3pBbqNDdVtzqT1CLZ2Uius52wVFGyPFAjdZRhmffLnvvcgyk4ieWutp2CCxTseKdakTH",
  "key2": "5GPt8q4QGA69MfKLVKR2AWuEjKetg6v4BMkVmQpmhzsMFA93oar4VPxeSPENuRDjV8f7k3ZFr8jmHnE5tSVzLpYo",
  "key3": "5saSx98Vo8DJWSaWDg5y4G7FTLcT5mmFjJVjr9VVo8ZUMEXnrbTwX5FCnmcJdtM1XiasSTFxEQYUNfHRPwq6NgaA",
  "key4": "7PhoSQ9BCB6djhYMKWxomFCk49tdHtVPphy3rTBxKcqkm53ixoRSYhBuA1McNgHKc1RynC2RatqpdnBEai2ZzpT",
  "key5": "27qAm3XhTuV3vxgsX9YCzarmUpw3FLAQjXUJCZtKsCgBFPefcsAgFjaCEnusnqU398kVhGZBdvfA8kHoW1xBDYZf",
  "key6": "2PrRR1jpk6wMoEZkMy4c16EMmr61atDcgjJGk3diLQMak9NTfMm6xBA7PxvHv2dVJy4HxuEYfzRTGbL3EEhTPbrc",
  "key7": "2GhV6mRci4rxVQHoe4kMwjbL1PpvNjqQtXkZhNy2Sisjg6gVmuwv48YKnm7wd2twQxZRSPtLm89JJXrkV3a6puQp",
  "key8": "4BNJTz2smMxCyoAgQprxRbJtsd3M6813Epq1VU4gLrSRYNfC1XF9zZ3Sb1RPstnbLQqM4iXStPNYRRBK1MENFA2L",
  "key9": "sJZHbgVrWxZCc5t1QdzhwtqohJJcHo41phH1UEBy7cVGf4Zb3qxRstnCtMaKNPBBJRVqAQLLEqe9dhnhKkoWvqy",
  "key10": "3wZQd8obgrEMLFnDinANXG5FEQhpPGVuURSgzNA93xr3YryYpFaRH67f2m7jBaFUHgw87UR4Hr8vfHQxfAGU5rBo",
  "key11": "5uVBZhKjxPpwG95BEEgVPNaeUk2Um729AEMmWpTygzFQagUVT3tLnxTfFx6xqQaakavFm2H4JxHy6nDX6rcf77mm",
  "key12": "4ricGNn6r5Fm1vqNRS9KXxjjnGpEGmaKd3MQyiuwNzndb97MAAFvYVEitDJoYrfx7unGCKqf8PsyZjaYxYGM8KNZ",
  "key13": "4gRGXV8R94VtQVNkiQjrVGaRD1CdrBS2RCN23g8t8Ahca6mBB8ddFcjnkhKqjxfCxiQmrTWLmcwyaUVwhxafzDfB",
  "key14": "5xzVqVxbojaCSqvJCKnFYeAXnj6SeLTfxHQmfthY5FLTr8Q2xYRTUUUvgFw1T6vhywd3t3uqhKJctaZHkcpzkJ6x",
  "key15": "5grWBXzLhovC5cTSY7mWCALGfDE1ENTygBDBmiXe7SPbnPawFGuwioAP1sPv5MLNN5VFxuPT4we8JTU52C4EgMp5",
  "key16": "5sBCsftdyhD9RfdW5bEkkZirwWbauC6cus9XMiHjVMVuYi5Uzecy2HQY3H19MitS6aX4f8VKVQ8eeuzTpo2zb3wG",
  "key17": "4FwJWpBDZWNuzXJq4rTe2BQc9DuLKhs4o5BbyDJ1EHD4rhsGVCY9GBFPb9JrX3Sx3SAiNb93U9G2hLYZNDJnoFw9",
  "key18": "LiLxL4CHfchSuDVnaPdhnGH8GLJyDkhf2cy2L5xzQVi6zqVfHe3ATtCYovEDwwXp2ndGvWjaYgaWZ2cXoZC8APm",
  "key19": "4pgLuPFnYQavsirMDpiKPgUbwGHJf1cpVrCdgEadNW5BGAmqc5tkwvofhadRniaN93CvTzRp76zeue9n4s2TA8vk",
  "key20": "5JhTE7b2jugWcJK9bFDz6NEyQFmgjUaau1BiZ5FwvW5PPL6NqXCJoTg3aS9uS4C1ptatnGuxeWxJKQ21vpJTaCZ6",
  "key21": "2AVuK4d4AaVQdtpKNZsKKJ6cD9GoBWSkq9acPS3D4N2BJSaXFk73LXqkVFrpMsZU4pUtwVmrF38hFEvGhqpsuAHW",
  "key22": "2wF1N6mt3os28zDPvb383psC1pvPpTA4cJjcTgv2LukAWAm9WXM8F6HZMuAKkBR96eHGBFGun2CANApt1gqVGXyH",
  "key23": "rkvvRX3rFCe2GhgtizF8G7n2RxEhxW5ByK4uu2PydpDiy9FE5ggnk25X69gjFmkC2e1nWvFyBhqkqZRS3f2wFFi",
  "key24": "2hbi6umbfn9JRZF5zTHKqge6st2CNy9Fsco6cNx24aKbJESssrpRahoMT16eZoNjb8WJkPBWrffPZYsrVUymByTr",
  "key25": "2tLXgu5qEAfpzNyQ7v7YCAD76qySm1U1hZX9xzZcREtkrn4kZJULmJqYdvDWiDW9oKJbkm6UDCDpAsfuhiqo2TYf",
  "key26": "4DEu41VqNuzYJBMFqS2kj4wpaFAab31bkyLnV8veSVd6hnaHsX6jzpSbfLnXYzVm3FLeziCbNF4DedSVBsAq6zDs",
  "key27": "49vWaZyYgpGpvRB2ULutntVZpyXPt9134NZFz8FdF2dswnHca2JshXddbs2Gney8zKJecjQpGcWoGiRVBLQd2doF",
  "key28": "2Vmo8RMRbN9cSvYy7DiTfLPE9Two52CQiJ1WhgB9AP6N3TEw6NCLHcJeTRWq4rFbx9GWUMf1NwppMfYpnnynUgAK",
  "key29": "2n5oFxSe7PBMcM2sNCQVTwCSktjDAEqq778sj96JPAxwRRewMLVKBvJnE8FAX9Ke4uasEfNhoDaJvrYyEoQv187T",
  "key30": "5kSELHT5Ja7mEvgfiejdVXfLW4cMs7NjXQ3aDRytXutCzcXDSzPfD1Yc59nauuuVtFZWjP9f45AtFmnaXwyX9KBX",
  "key31": "4Y5PeSGfz6AJ24hvqufTuSqbk7MSnWh71eQxDWMv813R64WvZjtf4WQwxFrdGG3kJAoUCDzvV5zFo7xNLh3RsQKY",
  "key32": "3CfNhn1rYVRUiKSFtH2MvGhP1dQnpHMxdkYV81TJ5jom1sEgHvYVbRrckoqzJHvitiaJvpoWiZTsXcyRMUkSbYiw",
  "key33": "5X1Bv3R4Vn3eN1bro39FpjnwUnKW7GVJ5oFCkULysLD9ApyZ11o9QaaSUXELcZf5eSBknofMawtCsveZiQVMH8Ny",
  "key34": "4FdZ3ps7VQQFmTHmLmrzv6toRrQqEn42HY7afwx57YZtmKoA3T7fwEmjMrMkYL2aubrJDzDnEVW8j7EQHJywDCTt",
  "key35": "5Cyfuj35pkZaPKtcEmA1XTSemxeii12kPbtwdRmuVwXK3jaU7fRtzhzG2Mqnfj46Q3zkE57DhtFbedTh9hfy6ugE",
  "key36": "3QtQcwirrY1m6vAfCCgGmGt6qpqQrZhmjUNd8zyagteYNyUjQsSNYhpKWAUhcULkYWwvqyMYVNEY4iA6wHKGTvPU",
  "key37": "egUX5rXQGbUQKzZ3dXVw4j5tApPVgcrpaDXj8ZoHxJuR4Huh2ojAwWKsF1QP1spJU1ubyZ2pdb9CRYg4pnaKPKs",
  "key38": "3KjfRr6VQxvGeAgoaQRgPyNnCCDsUYYZBUzGujmHzLundSrQDb29pAMqJFZWYo3v5YH2Gd1Bn7TSJLjNBJiufWN",
  "key39": "5EcZ8zFMKDNjyzYV8REPJpp6tvyEhbRsa9VXrvkvisYCnsCYi9KqB9ceUQvwuP6es3WkAkMwVejcJ3LP4TMaYkuF",
  "key40": "5YS6EAziFF1qrUFTfeFhPEGAdrwWde1hXABQF78zMGyxYhsQQz1DFVAeNbxZQpwzpY56d9dDhgz8Z1Hr6vuLSMKL",
  "key41": "5igTh9VDatxphjkhCdv5sNryPSFjex5QnnYQ23VkiKnxB312JyQyYsnzTVBpW5cshs3i1aVvyG2ohAzpxFdgvjV4",
  "key42": "5iiGJxg7k1aDbTR5XADaf1VE6aNufWTMCEWxZdeb8xuw3RACGW81VbRKN89y3fpAX3j6z8npxnynzQp8TCVLd8f2"
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
