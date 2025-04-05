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
    "2aZYcVnyr2AULBkgxrj4qoZeB8cxuvXeXGB95H9rvNZ8rBZH6LBz2pG7nShHA5kTQv6K7hjExn18NfhDDbixqjyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K62q6uvRTt3U5Kfmei8bhEgw2CyBfNvXp1nTiXBpmQD1ZBgJHupdwz5iiEkJUskDYguFnQvP7K5WCjBfoU5RYeQ",
  "key1": "2rg2aByojb9q4JjKiaNy7viaAytofzjFUDvtLPixrVNBL1GwiL99J3zcJp1X6nH14n4FL1nHMeRqq2pJ63A3m6ds",
  "key2": "3WQMAuEmA23qWsCyVCqHTLhzqScJfqgLPGamdA55L6SXMLgAV53kUCkXPZLVLQVw9t5GpmQsKd11LMhDtQWXdcyQ",
  "key3": "49oQEthvcqWrx9sBgd96Tw9AFkozFZjANzxQ4VgjN8wxUgo3uoYvcjvAr4Fkxhh9EiRK5HTiKhZe5eSbc3aBEtRc",
  "key4": "yspyr5ysydAF5yiPw3aC2j2J2QCMLMYhBNCKsUD9ESWoXFRsCW6z9rWVrPWtttrigVKhqiBfRt312zctBdKPNZg",
  "key5": "59w9qGepb7T8w6UgxkH8cvyDHJneu9Eyuy6Hp1kunZyd8hjgZ3PNLFyYmD2ScJpdiiaAa2b3DWshoKHubBnqr85E",
  "key6": "2JZqbadiWy9GdbP1hLKuRuswsdYZLYL6QgrS46iy5jnmPG9jscTKYWKGiBJeS7QtFHwm15CsJXedU919qAwqAcz",
  "key7": "5swqESYrsvqDdzqexsBpdrvUAbdQgCq9HbowGpjCWReYnyRuQngodCDfwCjqQhfnUScJTwyC3b5rXhzv8KCzw7d5",
  "key8": "3ZvrUh9AAh6mHsJj2y3XvmhvtHzp3FdB5R7VEDwtRV123NDrGzYgS6hpwuxafX3LdCm2dGd9pPz92BL99D1eff2n",
  "key9": "2h2ms4tMmyjEa1aH2g7SmX3HxDtLpfgCxWysa4Ma6JrLnMvREKEQ5J4nfnRH1iSQetnLbMv4sZ7FBJWqUs4DeuEm",
  "key10": "58dkEDoD2C7kpDyBvapD14Ppc6MHdXvo3DhX21eZ8PPccaL3Ad2HWVBj6e7uNPZAw6JJmfTQsQZ3jBqUiSsCp7hz",
  "key11": "4QgT3uhuax1x4LNbjpPLz9zRobHSuPQNtNddYrjHKbLQLN3kqN1FszENVHVVE3EoiWXr8RBAtapsYVmEophvamEB",
  "key12": "4JxRT5YjapMmAy5tRQhWoHFYV8fTdswiC8yyteNKRvLNvN6VqG6nyPEv5e52bL8eL9zuu5FHAdRcpd3797FS4uYa",
  "key13": "2XsLrb9poKqbqNvCfoNMJEjJfc7DizgY9QqWoPrVzzLx4ntCTv25YpTZ26yyBiNSqiVSHoFPgp2No7LmoeJfNXqK",
  "key14": "45Cok61LZPGekKXxvYjJAaaARm2iERzJAN5A4zuPxgd5LsChDa5WrqY42PCyugmpFQKuGZiH14pUUdKE9qay8bnq",
  "key15": "4Ct87Qngu7PxiGaMadD5Q7nt5fpWHdW5fYwY3vA2jugUP54BGoAowx1onp6kTgBU3dcD9RmvMhb9aNNvkFTmy6cm",
  "key16": "5gAaPxon1nXSXX34JYTg9FJyYqnhPAZGjkJhmAc64ZBf8WAjc8u2UfMRvSwcHxEbauW3HtF1M4xJzCsivQEk9rhT",
  "key17": "3BdMGXpnhE1hEoPPJVMEHJrQPUMhMQszKvHnvexR7ZsJBBogwftmrCJwZ3rzEMuLbwS2RcRzg8HG5jFmiEt58Xp3",
  "key18": "5FTtZ8CxLKxNcqzzW8zkRL6JSXK3QTh7ftyvNXh5aZdvpHY4hrYRC1VPPqSEkKErU2cSBiJZwHXEv2QYQYzorgjT",
  "key19": "FJsyY6UY8V6aZu5zbUVMNrg2VjqSrYaxMM8sqn9H5JRZk6g3TvyZAq5rnMSDJVe9DR3L6d8GtDfiKHyAXNH237d",
  "key20": "5MSCsw7dGR9gqHN67XsKssBD73qpnKn69pixqRQvTSuiupQsfuRFrbY2C4NmWwczwwVKguFp66rLkPKiQDyErFAh",
  "key21": "3wnh6yvpLJGFiC3soTSRFmpjTiib1L1QEVfqwctcq48wNvE3dw8xqFmKd2fPUpZJUNBb5UexFhNXoBExfvM9Tut",
  "key22": "2xVpYHzFFeURqFyhFp3AmULSmtus9PMjo6a89EacATkUVZiADrjaYvmWjSaLofEHmHXUttyJNgcAMVizZoHANbp4",
  "key23": "5Pdxypm6SkmLKK9c4nvJ3fVGgqBRXykQHT83kEXMHCbevsA9Gqzufun64o9FSGySJkn6S2cKVyh7es5G79Lb27T3",
  "key24": "5yZ4RW7rCySGJkpD6H6u7QwHCipkELSi8HiF2Cuvnb1Gpfugj2ipLhbqZ3YgwRFVr6LVxRTRuJ3fsqJZfmKaDnhB",
  "key25": "5nFnQSHGo6YLu5W5hzkQEc2dsodSeRZXFgEDNVjvnMcHpsrZn4xcgqPhj9RRZXiDbjpkR3QHtwLCZKXqkuTMXNAe",
  "key26": "5WvekB4mUyyF6H33PCMh2t7mthQZk3NMedQaLFRcD7GurSDFZtSuELPmYLk2QCaZDcoeoFNtS2fbsYWTsgG99kRa",
  "key27": "22dLHCGXkSdzSUMpCC4Z8Efet686wV4Qu2cErMoo1JA6euPpvw3ewENpu2TcWgPph5a2xNYVUhrNX8StJxSSxZh5",
  "key28": "5CMtq2wHqrVQ5KQfRRmkvhdoTozqf8458CFWV3DxgPD2EN9xoBpiM8fsFqu1iSbfssbQ5tR8HravNCkwTcz6pBKm",
  "key29": "VixEMwzKba6XNkebNeE6rBeKgvrLRMemDS1wNedYoPcXGaA27N1dJQjTVFTDNcJsFUKLcigTc2FfGEAH5shHQkP",
  "key30": "5sscpGnj76NfbRuX52LXC7tRZk3ioJbiFumqyetbLKRSebaDVvotbAKXZ7DHF4f8dm9HixTnXykogRrdm6HHCNaT",
  "key31": "4SvUp5mtLLcem6ibReR6oeNn8zxvvGsSSZAGHHfJiFYhcfWpSXPe43b6iWmdDPWnyZb1xJwUxFMXtgxTkSeKvAZb",
  "key32": "3SLeCK1gkkmHpTT3T6N5DrGRmj8aG9p2LdXohrN9VGnX23fv2T9iyqdKggSRo6D9pCTXJyBvvViw86qXrs5XF3cH",
  "key33": "52a7yFxNfuuMi3zjYe9yCk9hASU8jf6eXUr8vVRjBq1ZyA9AhKbkemrUdzFg2c32DB5ne8nC5SqmE9pjvzRhBGy1",
  "key34": "FzK3J53VQgGzf6SjXYnMaABVuTuZQPNhVoP7N5NdND13vf5yBSkg56YoaDsHKLYs59T2cbG2Lq9kN5UPe8jDKrW",
  "key35": "4Cw1uQddZ5dZqDEovvfpjbeSjdFtyH5o33VkKA93z55k4ju61iEfjjHPVQRj2e4peFC166es818r6pFcNhMAGQRY",
  "key36": "2chUhG661ftBcR5rJwJjhCZMcxr7qywHRbTvkTvmwfP9sJBGSc7ffhkQA6vWkEjPMy9AfuFKUUZw19jMBzVpJ1pE",
  "key37": "64NCT4Z5dSUjeJsTcFG5FAw1qC1TC5SSDMwd6cf6yz36squn9uf9NKGqv83BWZQHoHDfFUvo989T8vU1MqPkX5Rc",
  "key38": "661P8vEh4kyxLKkCBdf3b22t2oXjLdgtJ57XVdHv97orhJHfQ6sssR595GGDxHT8s7452HAk8jCzNCHbPsEVthNB",
  "key39": "5ZGCJUbd7U2q7CWFBPubAZekwdShgMzJeVYY2Egnp6HQzFWeXj86ZnYDEk1uH4CusTjeG2ToeQ55LKFUd54KK18F",
  "key40": "2LuAfnndPPwfzCgQ74jizjthM2egzg1k6hRdDriYEDzfgru116vYLb4qyAAWXdLMysVtkqiwoMFpLAkbZQ7boaq1",
  "key41": "2HSjiWpLhh2hp1XmyUz5nKUh7oMGFtEidfWKsLifXwwUYYYkGxiwR6jgMX33eFJbgEetWqjZJgVasHvN2Mv3QiKo",
  "key42": "275Qrea5noiT2cA6BK3tSYmYWpnbQWjcVaMjfPqArdK4BnLc6BD2JtdAmxHPQz7Qx1SnrZvP94Qmrx8rKvZzvr39",
  "key43": "3dW3iF2wPSSTwFTsJpEnYST5GPP2jUamwppNJwreFbggpghzK6NJKEG5zqg1GM3STTN4UUMTgkivKkMPtdq1NjDp",
  "key44": "9wDLWQ72vuQd3J6VcvmTdrkxLpLDPGa7nUDvciSSjpG4wbUgPQWoWqNomwcWF2SQ6m4w3R9a7PiaESh44P5Vvc7",
  "key45": "2XxDMcX7c48BPzsDzArEpkQMABPN8h63Fm4vsgHsF6NkJXnomVUaU9uHn5qaccwdVpXfEnLUebuhwAsFMYSEQNLs"
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
