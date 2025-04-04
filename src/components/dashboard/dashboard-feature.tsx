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
    "4PbVFimwfMLDwjFRbMYUCdn6gjWProM6gWKkLZLttiAtAiGkc1TjBoRZMzQeT8DuJcVzJj5w7Jrerba45p24sL4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zGcohxGEnsXHBBp6ak19d3pJ5215HqQBUWRYrZCEwBhTaY456sCtB6zXZFZKQTNqQ9QNLrC2ic6mu1Mp76WRKcQ",
  "key1": "23Km9m4jYhYkVVkofETwNPJKUmPUkAcarD7k6j8o8rSXXwmXSFu6MBabgbZ9aAUmKJcPAuThyxF9xv9teZoemJaH",
  "key2": "4KWKq6fUvwgbU9ZRJxRAZoYCnJBJtyfXiyWMwHGeWMSRSaxM2vFJNyExXBYTVnGasnLYfoSdzqRQBBhCHqyrgT7R",
  "key3": "BBwpdbKEWgXn84XHzudJcFxBznSrB9Fzmmu9Gzx1bJ2BFNksALAKLB33fxajDvDuweLByh9sX6AxLg4gFvCMTvj",
  "key4": "3WhCqSJDN1oyY3CYsAZvY1nPDxmQ7YbPtinhpjVCqxJEhc5Y76xcWxa76GKbDdfqghnmnxjWaeHwq1FKMK21pKmh",
  "key5": "GJvkLjqvPvXawF6Lf2Esbwp8yVzMb7EEEqZ2sKYchWRAWBLtpo4FxdZgUtGofwDnFmBZu6Ku8dMXtqmsb3wukzA",
  "key6": "5KfxDqgFc5SqDd2toboZx8ne3cVyNMxLn47sEmky6kBapRRbdToP4Ra5YHe1m6eNR94wQ4yfGSsMv24hiDBiBZAs",
  "key7": "RaNSXiHxVTFtu6jck5cDDj9zrHZGyeNVFpeVuVYWXPiJfbSzNrstUhpRJuagPPqbhs4DWPJ4PWUcvxXE3wMegz1",
  "key8": "3MG6YDtT3mkVaefuMt28N49MCPN9i2kjw5Tf52RmawMcofTaaSKjWbEEu8GwJtdxiDQz3mAfuJP1rvjm4rh7T6eW",
  "key9": "3E8GHHPdTPyByhZasvrperMb67HF14PBsV3LqAyysbqmFyiRtAKLZZ6ZmGMo7zyR2RbCC1YUMD3DXCQ2i3iydDqN",
  "key10": "nJNUfvaYSduJVS1cqRqbntHy4L1UkF1moU5inmoDYwpr1QoeyN1Zt71AXEpYg3nwjUZYvyj7D4MMpsvvbBrDU3K",
  "key11": "2fesgLTRaF9PgEeiGu1GCBDDwpAbEx3o2nnz3musSoLHid8yH8F9mkgb5nR9w4e1Ma6Cmoxqh6kP9VzmQWLVJB65",
  "key12": "5gxsGoJpQehVW448mHCHwToc68tHqYKkhmYyvzuZBhJjU7XZPcDhV1cPrwhjHvaaktLhsG9FD1JVn4H8WuQjyr5k",
  "key13": "5opfjVcb7n1qc9455cMjGedkuPC4QNDHRkiymeKmSxjDjCqPamxLCKnttdwqFG4GxfaBw5eBycRbcPvgp5a228YV",
  "key14": "2Q7PpXbA8zgwUA64FqoLPdmtc17NJz6bQdbUfLzgAqBJEjWbu6Rchp2HhyBaRM8kW99NXFc6ciFeY1Lo488hGmME",
  "key15": "qaneLDoBar2P36urgL3DTbuiE7ZneEUyxkcvUSrcFRAgmkESMrn8dgoaZDP79AB4nAh4hVs2SwgdQ1xfRKYD5Th",
  "key16": "4LGCyZ9wf9GCwmBE8dvBBjjR1ciGbpaRz5UAVwGWXBzupy5Y6x5GeaJa2CFCyh2JzG7shUhNJJRAd49a2emXZTEi",
  "key17": "55sLXP9syxA5uH8HDm9cDRWtd5p747Nu5Z67ZBzj1mTsu7Wu5yWCwSTe9gwegBDYt8n345bkMEK9WE96ZyoA1kV7",
  "key18": "eviJfesSt2oXhCfYnWiDpGtiwJQd8oQHBkBeLDCkK4Bu2c2KEZ1t8hSUEnm1egJoSPpZLnXVEACyWhkyqrh57WP",
  "key19": "2htrDA7Ji1T3p69YLBqTHju5bCdA25Mj97R1n95UEEKLUwv3ts1N3UVYi3K6xirTn4Et2HEKHmJfbiqR7ej5GWqr",
  "key20": "37vtmP4aM26HcmkE6weLkrtzzhLi6WKQAEsYahCzVFTEjakTM3nHmhNmNhNF8ygoN1gw1qRNQkJQPXnfBDVjkV6r",
  "key21": "4pTE2Z1TSYqwDyx5rQ7237Ya82tiV74ZbMyT7vWGjTv5PmoqTBmSjjrEa2a4xw6r6gomLYwmPpBNRoUvJJKWzS4c",
  "key22": "um2j7S1kMHnptHXQMcVcvS76idm9inQwotsarsK51PtmT4hA8JyxixFhWsgybEgz65GDMJfqJEE7WwyDQvf6MtU",
  "key23": "5HaCBJeMsMLC3K5HDpo3ZgWEeRcw5C4QdCuXZa3tcuuCxRoD6wjkzqgDCpXAm3epcDDEzC8muf7G79MMj3T3mNwh",
  "key24": "3QkExCDXS4QuNxhHiVzU6xAebhyfRC3Dr96Qen4xp35KXDoft84FVs6Pd3HveKoEyKxSJUj4GRLt5UbN2f6Zesc",
  "key25": "216K9arBMLajbix5pmfpUDBJWjQyxYxk7gxMCARV6Uqgj5DaALHMaULrw9vZ1jxqrcz5FNYxgSKKRbA5SC4Yyy3Z",
  "key26": "ftsdaBLiFP4o2bv8A3jQG2FmSNZ4JpvNjShQ1NToQdReqVnD6RJ3L6Wpx1nPtRKDeCG39ic9LQE9trrgNTHCk3E",
  "key27": "u6cTpEW3vBwLuM9Z46mmge31CFkpmLDrUMg9phj6H1ivvUHk6MoWc238Tx2pTV7qRVsoRiYHKWCkYZjGeAMdEAF",
  "key28": "58w9zqX3mpVroSP83tw3ujXgDfDpvhVLyod6RWzdg1LFJ889vBtmY8s4dm2n5DfryQvuRBKNDfxk4iANKmeGU3Ym",
  "key29": "4hkkkD2sQGeVGh4EQR2hhKKA2pX8eWwcekaLrhwg51yBzS4xdUtsvMEYHmcF2sEcreGVMKf2U9ubq7VN5bHKADXL",
  "key30": "SNdxjozKW3PGNNc9mGD28AYHQLboF3RfAyn6i6oJzo8hBCTUEzUWZR7EJC5uA4Q8Lb58LQWtq4peLiKLjsTRTky",
  "key31": "61qMGNU3D3ZGR7R9ofmm5ijyFB7krpWkqivkSnK6Mnp7Vb564uNV1ZFhpxKHgGLh59n2uMPok738wCqcgsA3iog6",
  "key32": "651PkGrEkkWzePh6J8dUb8hK9CQYUXFczafTUnMBKWVrdSKsZgjJdTVbtYg14zF6yvHA4V9MX1V3i46T9jbYhLiH",
  "key33": "4qhVxWt8End92xZpFuSYpXTeaa59P3RwUX8yYxWsfQ3zkAHCZUuutx5xobaaKQLfjELenvKHPoj2D2zu29kcfy25",
  "key34": "H4Lg3gmNVKfyVbJfLRUgxXjabasCG3ZTZVswhWi6GwmTuxxkvBvzeCU7YzD8dX3QLvDpPRdLoV9shNNcN2LjdPT"
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
