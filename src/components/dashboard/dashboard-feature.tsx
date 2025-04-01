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
    "5ZAE2XG97nM1xFgAm3a66i3PQ1i4Auz1BzQo4ygQZ2LhcyURRgewqPu1qVKbg4yoBpA3LXqZNEkhGAQ32ZcWsEPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGEFim4mTm11G6X1pKqx49FxmXmbbfxkTtePg42VzEbDF7srdvVGqPbxxsnf7qJ8n2zqBh3jezFB4sGfYnLA4gq",
  "key1": "22WSBnoeB3JsQBqVkamiyBUgCHKcvhGdHFApg8zHg4KG4nkGHXXYfAoAG3xvCWNt5LYaxBba7mvxp6HHjwjZX5Ax",
  "key2": "3Mkxpjx3U1sGS3qLRiPxfmE6iUvkV5Sg2USiGDvDenMDUpUf8XDahUy5A23Em8Az7WWedQTYNZA2GKFUeUcwZrhd",
  "key3": "5GcwBRPiDhxtuCqjMVvMhnq3KuebWpeXHsAQp4pABJ6asbVeEWYLE5UXVhexTeh7K18CJoQ3voNhAgv4srEUDUD5",
  "key4": "45CxfQHv8wcVZ1wVQS8gKqpscQxWiwiVM763SbAKc454PgV3by1CyNhDuNCS3P7n4bX7DrXbNoAugyBS7E6cERkg",
  "key5": "2S3TMRNW2SjfP9BTYYh5wgiiQMopUsr8tmDQSHtwQCyPK6yyz2SVcF2YWrrze74nfTbV7EuJDotbdX4z8muTn8fk",
  "key6": "3BVz8S4Ehzj8Jcpheo8nH6jR3zXmWC1q7VrUVzWpeAycMeEej41Zt5LYkZZ5sxJb3P3Rf91sa6Dp1oK3MjqSWrSc",
  "key7": "7RNe3AFTreN22s75MBDvd4VQioBNjTGh6uvqhGHXnMqT76K6rPHLkDk7Hs329Dp1iC5X5Vwkq4VZoncaBX44iSH",
  "key8": "6vHB9gBB5ndRKrGzLDPSspceQBW8SaXJ4AHLArCtYSWZnZaWp2TmpnwikxWsydPWfumubDwLamLXNqw8tUGWwQo",
  "key9": "5dFFTqfbNRNQy8tofPCjPLqDs8TdPRyJrxPZJdFdayhmFuFUVcgMX4FmiVSTdhGLgenGFp6tUwn3kHzNNBUm5yAU",
  "key10": "52uiQM6ESqaKDkN4aoztSLD787gop5pqLtXFmFNS6SQKSAba5toZRAZ5d3UA6mYVdss4hV3kdDr8E2LAmTSt4hn9",
  "key11": "28ku7oMSnVbjyziSNQF5xSrpnwWrgcZgwW1uzKXkXibXyYf8RE1fdVdmmx12sHXi9kckJJkcR16BWX48ia8trAPb",
  "key12": "2nuYXCuPacxwicCTZpRPTNYcBaAxgjjfPBYzxYSx4mfDKumpBNt21w7uaMHiyLB8Je6J6GTSLpSH6pzMqriThMDJ",
  "key13": "j5dMpuGhgjPKp2UvsMpqVPjWXWM3En4KcNAgTV6p8vPDNEeEn5u2W5rCCsLmb9zRjisMzk4dEQtMaXsSWtP4WJx",
  "key14": "2egypTj1QGefVdK9YUtdCZLi4buShfiHq4HzfDMSxb4VqPRsg5zfWorE9sgRJ9C3aAZwSHCqF8Q3xQBzAPBWTiDf",
  "key15": "5A6aBZw6CXXB6dwU9KVNZkY8S79yEka1nQJwmZUxQBUxzhwuJuQeiGi2UAM3WaKx1eLNmHizsTRPJFbdzV8zjk9T",
  "key16": "2JBPh9zrHQDzD2JAkJpexkPmqDkaiXZrLJcQ8Zr67DA8mEfKeSApguhacgUbuhaiWw7gEkd3pAHUu93bZyGbnDoZ",
  "key17": "4azk8x6MUhfZ35FDrAuFMThYTwdmtmDhFxKzBEqpdbxsXm4ci1UFrpmN7arj6n94ggy2h4BpAahhAAe8BzCZCyrS",
  "key18": "39ZiEx6fUKQiANcdpu1Eiy4MRt3oxwYRLmZcss4CSkmekFnRU5wsU4caUgLauqTXe4ZGZDMwyzKCPyu1vLqPCbhq",
  "key19": "s4RmNbvAeTknt7qge9U9pxWXUYDMArs8UArgMApLLKPi6c7UdSWRC5sbstwV6wbh8QTNZ2ZuR4JNycScqF4ZHbp",
  "key20": "3pBTT9LwAQFaNMMVdseh2gTz8iqgLvpR1ERKXLuBJomcfgn1D4cjyq7eA91gZYbKBKddENY5FQ4qhuCWfzJ5acVb",
  "key21": "2qGh3oYDX6jSFCWECVYsBM98njuSKUKA6u8FthqdNARQ6Z8f8Fj9v6jRba3h8XUBSzqFaN3J8jU3PXAtGA1MQT6d",
  "key22": "fU69gGJM41S2f2JSLMXA4n8BerRYyXWTCz6SXAXKTyg1ACGmH7YfmC6rNTYxFxcSzFEfnX4BKhecjHx8K1ixjUG",
  "key23": "vG7vCMESJ9VW5FMzKEBMeefWwAj1msXi4ko2ZaaguLB1MUtcaEa1HsM4xRyn2tF96rPswAFi1UXFSFavrzHFuYT",
  "key24": "ycH4tqWn7MhW8KP3Nnp1LL7R8nAnvCe2QRkxmmxyKZUZoDnxRwhP2CGBRs8g9fq11ntQsjXb8UNnf7B8zvqQq4w",
  "key25": "2W2H8WoJ76xp39XxgarbWQEZQ9rJBY4sMy5jwHJHoYiytFUgwZd8ujdA58GbLHXbBCxVMydVMdeJVGibWTXpApLa",
  "key26": "S8VSkysBZ2GvitVm295z1HiDp5P9wzd7EqMirbhTWXyMzDLjgAgVFMPrAd55GK3WNrPB769bybRxtxkEUe35VUS",
  "key27": "4NfKekivyATdBfS3PfBF5mdt8LS6dzgowqcGHD9K2A1XWxwpk3bd8hgv36hzv6pcfgsZQJVAhrivdFjjYeqGcKeC",
  "key28": "2t2abbo251upjVPZ6ToqzfJfqLNMaJNKHkqe9ju5AwCRftbhcP9ZuHLvESzr4mTQzF6oFeVEc7NVDEuj1MuCnKTy",
  "key29": "4q9G4KzyV8P3MDf81Q86iGzqP6vEsFLzjYWrqSNUX1NUjJkTiNGFNfPxXESF1kK5m6aE6XLGb5bkmH5XV3qpqHab",
  "key30": "oTDPTaAbvUkgmx8U7SyBAX7KnPcWZXuHGLdLrhXV3LkNvGSmJd8QBTXf2VA9VHuq1xZm3tfqnrcroaTqR8Cg1j4",
  "key31": "2RwLjv47jXeyiCEdRs4APKPRnXNErdoN3C9Yj7djtjA2HrwT8tMdnUqpMgExQ2rvDve3JEuobDQphJWv3g7cgdFn",
  "key32": "5UYFL37ujPqcL5dACsThnmGdJVAVJhK9vXhrB8aHVFQiQJYVgtQzj7quSVe7eBdWQxYYgEKkvkicBsuhXbEVYF41",
  "key33": "PkARycJ9mjJua8g6E4sCVo1DeHfgANR1NSm4S2PvAHamShjSH4z5L9YbAwPx1uK6CPhU2L4JNrnuKv4F5onQdxn",
  "key34": "23dG939oxHZtnrmn7AipU3Y37K598r8DdrzMdyibzMFe14PwGhvUqoHznc71x1W3rNQff6nWTNe57PtFbbGuFanp",
  "key35": "28MTabpwK6e2Q1txhD9b9vxvUhA3vf1MqEjYb9T23oFCJstKg1Rk28A8kCZXyD61nnzqk7U4czxm3x3AbHUHCCz9",
  "key36": "5UPMhHCu11pokMnhPV4qFfHZiS5fdHUaPss9DNnhV2gfb914vYW924FUjC6BLrQJX3Q6LaLDH72YMFyba7AH7AiY",
  "key37": "4nkC3ocPGX6KpbuAgF8PwTayfonZAx97fDrT9zekZLQUjfdc3Ds2Hdr6PndegDrUFn8gL9GmteHMUEY6Y69VSsma",
  "key38": "276wpYxWfnsgRVamUH6qXE6YjqfL5MTdd8QRezGksJF27KsVWcCvPYxZFmFFa9eKtomvtvajntpsux7ECfvotKtX",
  "key39": "5zW9nTV2Sx1a8cDE1CVgyGVAcu7RXTbMbdwZSmbph19i62pYsNarMNAnb4ZSHQVjWXN1MztedAMB6BvAjcirT1QP"
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
