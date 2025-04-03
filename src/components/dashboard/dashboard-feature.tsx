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
    "2Ln7gTt9Ka5putwHL2zkLq36vRrNj3jSwodS3pLHmknjdTgpoDqRndx59NEv9u3CMNSSg87e1UHqw6KGaR2Bwbd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WP7ifFym74xu7GRm24d7TkAq4nnxoPD8ioTWm7aPKvdNwKXEbMvKTwxmbrG6YU4UiJfEn4MQX85ngiWNGq9Q9kJ",
  "key1": "5vQ8oBoNF9yTUF6dG5QP84qC8fXK1e5YeUDz5JSSRt8yDjUdh7xCV5GoKDdmji31RNxpziWkJrEN9u7wcTahKZ4A",
  "key2": "55VYsjkVdr7UZRtuQeBZecP3JJE5N9Th38TJctYF17Q3n9psPZ1TyaHY5sFtE6RKGnjCyfbfvg1sx5wGP9XjbWW8",
  "key3": "5XuM7Hm4X2k3C7JbvrmCppAHUd77LHiSuq45K6DAjENeUSNDAKt31MXVCszG9FP71WgK4GKdGMCwCMhdD63hA2bF",
  "key4": "2nTTrK81dAwkfPjaXwGysiE4ei8KBLFRWnxn3KLXeKPFdopejWkipqAQBobpuMHLkyMVS1yKxZuqrocN5yQy5ESM",
  "key5": "4QfmLTDRDy5eqqBeGeaU2KRR3onHzrtoBx76xjpochaetmfSNL5UVtJRo9E6L4xeDk8jbtmWBieLL2jSWvKVyGza",
  "key6": "3K84DUUXuFAjTRBABMXPRsQ6ek4KNrDrVWo9BhbgJQCQjgJXYH8xiEiRyeFbKeRBmcHiptRNUcCD77YEDWDnhniq",
  "key7": "4Zj2w3Cchs21MqDSuUs5rB2uZmK3JUC6nwbEgpuPSvpsW9uESYa8Zpf21kgpENojY2Zg64SRSdrtwGQAUv53Hu5z",
  "key8": "2Ef7bcSULpatsxUuPPEA61i29oTqoj1WQwKNqCj1hLV7B1yRTWCA2CBEhWEyn6GM6NuTSaxkFjuwvWogqNkRA45m",
  "key9": "29A3cW8tTQ3QTmPUqRfh4u6bVs75WQjCJm33y3TjXkGjYtmcddaiAJU5ZiBAcfuBs9FV8TEqKhDT19Rr3nP5Sffb",
  "key10": "2DpUF1qyG7Ghc2qksVsjgPefTWGrzchVMv3zTaSxdjgNqihTTTShiMa5XazyidWqk3PhUVLFuSUaTtYQSTtbquBk",
  "key11": "3FMcehrdum5m8HcBrc1nv4xZg5eE8LWhE3XbQFYFuEr4YLMGmSzJd9stg2H6PjxLJQYNnVyyCKZWuHU7eVDF9RWb",
  "key12": "5okYrHfzDfRPYkQx8TARvACEScXEAHvrbrrnFSm716uA3mNRheK6FfE23iw5uvNrmVA6zpg3SJBoSR1HztVm4Xh4",
  "key13": "3yweWdKffmHjeeo6pevDQuGHKMAPMc7TSjyCUgzZTBA7XRnx2NSmBLiGT7pdAPSewijwJensVz25q37jAEZGJJWo",
  "key14": "GAAH27KNo4GoHXamPMGxHy6bZEyuuJQ8Nw7qUXpjte1KMCujENp3LdF93jFF5Q6fqg3GmVPL1PnEs73snYtKN6r",
  "key15": "2BR8jarXboXR5mnMzpeC92ya3JuHYtapTsdnCqmYHpZnPer776yhMGhhReVprKj17cu9gXh3F8wWxR3FAgtZm12X",
  "key16": "4yNeUeprB7bHcqn7jbGvJB7zdKPWW8nrQiZPtjqsF9YERhBEg3gqjpu1ifeSxCVoL44Ds5uUxiyDrdrFXcgisEaR",
  "key17": "u1zS5SBPeFufPwbvPdAnvVRkPLQiduNC6aLtsKm7WCA3zvnqMp6JkZQQPaAG7StJFnXwfRtKsLzWVw3gr6df5AE",
  "key18": "4mrjMDQdxvFhfQ5mBX1TQbF1nmXtMudx4HSfF4eZKCFSeKTRwtYkrwQmkjroGp6YafbR7B3RfQY7QbSXoHKpLLf2",
  "key19": "PgWkGU35JKwVawHMg3cKPMqmy1hic2AWzjbapQXCUqa5QFwXVCeNT7q1po9mVZciyoRRhUr41uw7P6pj1HT6NcA",
  "key20": "JBpLJHQGiPpkJseDCGR6XDrFEMgXzMJBSh2fY3RHyjd9x9BK57LrDwZJn4oeqNVPtaBYqfobNGXBWtoNjkeXfWL",
  "key21": "5JoaePXdexDnCWyhMSPHoKGL7m3xdnf2Rij7yMRmMP3SevPE4iEBUku6Ew5eajkbxHGtkjTbiFGnqsRMCYcTM2Pz",
  "key22": "5JoBHwer4aab6UXGYCn3hs3kp7GbzBVo5h63Qf6SjGdyPZJyfwumw56Ck9u4BfyyB1FwFJkzvqe9PajsHPAs82Gm",
  "key23": "rq17ajWthTWQS7B58GHVo6UxUZLQSwh7SLjF9U1fA8vffbT5c3KikKCF24gaezeVK3FLwAqrYukTMYDtf2srBdd",
  "key24": "5RixudVbpdfeZa54nsotqVd3qgiepbL5k6ZGU1VgiUDDReLdWSaJQDhXmXP5zKeQngLihMUx5hV82RyVAmCJ7D6e",
  "key25": "5YwaMuK85fk3hHrNjMyrySTZmRf5aLhHimAC1BSip1rBHCBirXQTd7Y5ZzmscoWPobsRVWQdtqiTJf3jiXB8a2fZ",
  "key26": "55Rb2unsLnouKJ8AvSsZdLKcvtWGiSrzoHpnLXvanagBidnTsbWbVdF7Akuhsae3fNyQdNKmoe12T9TZtdSL1t6b",
  "key27": "F5pbnvpdzQaUGCLkQ8vsWe7R8WP3pBfCitnadqDw4GfkLd8eevsCcYvAfBWAcBKcnaPTAt96kAuNxbvF58Ytqsg",
  "key28": "iNQu3Dww98Xxwvn6ti6EZHXMSqc9boeXbbYHFi7FhX7xC8aA5UqX7QH5HjtvNfXtXNWCbSYeNmZtkWLYQ4y2WgS",
  "key29": "4axuotTrMX76WDBPVoitpZWAdSEQUDbhTadJBsEhcNbqCKykfbFYkaEjNu27denaeasFX79qea5b9Xc34Dr6BDZ3",
  "key30": "2iP28pSvxNJMyMbUSSeHevSCkoDYAPmMx5iwt3YDdYVzJazH9N9JUbMvPGdSHBPYMXCEEYba48DFEUu2e5JcK7AR",
  "key31": "4EzAcUnUof7k5vwFn6EWuCAxHvAYyQewDKjE5x8m7phqnfrzpQnPm5NGApcJTChj8SJTTUALiR5xRPSQmBA8yrpi",
  "key32": "3btoz5fVHZoW7XAknPaCjBaiCMLLMuZh7APDnshEX64pVZQZBD6oHVgMu15egL8Rgc9Un2ebecy1sAXGWW8tu7ef",
  "key33": "3EaCcUo4Zj5iLCTSczA1DjuZoRu7CijKt4FUy2Gvo9mdnkcVGsLN6fxZeYhCCFXceN5MAuL8qxpTnvnmovpCwrxV",
  "key34": "iBU6GTo8AjHYutZpzStKEo5JoJRRztEL2f8MZcK3NyLuHq11pKiqumbytUWBfhxvgPopV5UqNCb17cXDSdCojeB"
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
