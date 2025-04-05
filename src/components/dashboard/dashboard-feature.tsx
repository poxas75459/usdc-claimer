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
    "2o3LM6whgjS8DckawNTqEU8VypkJYNbBszvTbUeGbTVgFD3gsPbbCVDjPdwWjRRmzvR7PT9CT4X66ZrabqXSmQiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3i7jyTfm7Zt7vmup7LLoiBNcZfSmud3t9t7Y6GCQFheiHcbE4vpiZU1yakaZq4UHj2B4GzLMcuCkJU9WUV347T",
  "key1": "5VeuLp4jg25SXuYMCxp3BqyJjHinKfmrg7McQ23srfw3J3NfefzVonSjStzLYfFv2xCVaSuLiX9YrfSH1pFybq5Q",
  "key2": "jjZ8maWHbwXuHtKkrH2H9RhSn51Uvs7bzJoFHY8cWoLt8xWDNpWF6PmYB6qzoYNd3AQkMh5PEf6LtjZiwHWC74u",
  "key3": "4TNwWU4JEtAvvebcMeDMbf56AQt7X4BjYt1wsGyjQnRPFiTw1vh7HZeUWaiNfKRS2bLLSEdGQQjSKQiKMzprqU2M",
  "key4": "6LPw7VyXVZNCkpYvNGhYd4J66b2rA35cj2WhtRZpGmPff4exhroKyq1wjwq6zLSvL3zsvHgCRmF7QkpkBeSQdL2",
  "key5": "YjTYZL5p8gbBL6qMSzyLCa59mH5oX5Y1GroMh5vxPFdifMJjdTyA78bx1qzamnhnbyL1UJRVEKn4tX5vGgTuFVy",
  "key6": "64Bq39XFtpvM4UoyHxL69Ssq5iQDjGTz2zYmnGhcWLqTby2BheH87y99ou8Ke1f7fkvCFwCCC2ZXz53tuVmuwEvm",
  "key7": "4LEqxYNPzfE5pDxwfYrSikNSTYrCoDLFAUGSR42ikwyNP9wXZkb3CJGXkASpEQfFRSuXGZZXYWCwZo4tCCrfBVt8",
  "key8": "2VwdaYZquyqf5GZKVtCtmDkSvhedptCAkiCLzUNN27vFFF7RpinA5zh8ByvGCR7htXveSEoqzsDeHPZGZgUu17tk",
  "key9": "4hQyw2itffNRxq9sjAtPsHT3tv2eDCCKcCWUPeUKqWVCeJaqzKtH8xzBm3nawCG2STa91qYmNu3XV754XrFe5aPP",
  "key10": "ETct6JzQdvrX4aMDNAtZhvhjqVTbg35XByay7t8xJJcZ6s9XTRZzwMhgVPgtyAJcP4r3ePrrWE4ep6Ryy64ENTx",
  "key11": "rtUt5wWp3KHu5n9nqxatFofxXDuPuQRQKhzQx2hHqsbFVQ8aUhQyqppaZrTpu4QSAHSjZQUZVd1Ke58NZpU44Ah",
  "key12": "3nBJuA8qNhSrRdqmQ5ppyNY5pYXSL1rzJoQTY9sS7PjswpoEDrxs4rhZkqJYek2Z2MVxQnczdrMrmYBPbDHrJxVr",
  "key13": "uiBgZZnHi6mDyQTowHtkHzfBpuWNG5mkNFxcs5iTNSoEy7Mdr2N8H8FFAYNe5Q899UHv1S9EUuTRwHw6aW56Swz",
  "key14": "mv8862z9HnES7Rps1Y8H7NY1qjxfz6bSFPFTCDPCJRFQothLctcc5dB2p5y1uvTLz5itqPbVEHLPqo9zWBKm5af",
  "key15": "5CvXYwm9b7vrx912osYLVSuRsnSDMHkMyaHLgQGkUzVBnjYcbejj5qY9TsQYX8udmbWetGWjrT9eXSkejndLC2CC",
  "key16": "2Kb8FVYkSJiVbesZUbzJwnXASNGDrA2SAQvA2zfUzxc1CuoeyeuHC2ZyygnudEZJVzNuUM1P2wCeRikCfntkx4uf",
  "key17": "3cxogHERPQtyedQEZjdtaczeXeyQyZWUDhpkoCWkkLoqSWW27kyG1GfDzUp47QavjCU1PARP1tD93AxtDTy4UwhE",
  "key18": "3yJkFUMDcWVDuqf6FSz9s7NbKwq2ddbkTRFbhkcwCZ6X7ByPUHjvSAoZRDimzUSzpJfRfhJfWzBiuwQRACf7ufVp",
  "key19": "XvdS8dqKFmmM5ZA4gd4kZ2ibPVjEdjk2Zy1mCtjv9yXtCJoPYxeTVT9ButPnhagWj9ki3LTnnuCemADXGWqvRKn",
  "key20": "bx1TdL9u3XMe4qHzJSidAAexuBGXH8nxUHNmcy2XTZZyHpkQ4zjCT1zEHEx2Z1hxp3VtAeSho4puLRrmXw3nkCM",
  "key21": "556LmBqRDcisnNmtmkFFqYR1Nqvk2J2Dg7QTb4zrAJXLnVVpeL1teCLKwiQcwsmf3etqEm9vP9kk49k8mqZyFEBN",
  "key22": "gVmGS4e2Q5hVyfDZ2VpDV2Ytek8cYkyKNcPRR5SYazJ7YGFBRHqxPbUeCW5JMktuQ2dHM3RQVDcjytFk5TrwtLX",
  "key23": "dGsbANUpypXpFGn5TZsEKqoupfR2HfjLrajdfxZApZnQzfYnPrdo6oCNBi84jeNkFmHqQFdqBiW35QFWs53gCey",
  "key24": "5ovXAWt5TbXUD3hmQVCdWmRWgfmuNq3AirErqn8y69er9oVoxmPtoFuyqTmdZu2K8DWAqcKbQ5yCKDjc8pH6ED2o",
  "key25": "4zjvzBMaf9AZXQKiZuFEUkuCDeZDCgg1BsZbSCELGVZKC7UiuWsMZzak8iJpqMmriq8dxybipdaV8HLPxVQ6EQBj",
  "key26": "ETgdQdevov3ztddB5DAgTg67jkSCg9KrRztTsNmpEp1QDDcLq9CwXyXTQEMRFm3dix2dFDkyMWGmKTUEygtHNez",
  "key27": "4eHVsJyrrMibTVKQkQN1fQJQj2nMuGFsXSrtBJDpKKPX5HBYsvbs3Vhdv5rfajdpJP7uA1ekhBPW1jmFadxQPy3L",
  "key28": "61TkWyR25g8CsAkkCiAQn9Vbrrby4jvs1GyDrK21aFQ1WxGpSoD4kywk4V9CaxZ6AMy6jQpchPEaMMkRpNHjv9ay",
  "key29": "4c4xDHohXDhK6AZWEqi1nnCFBdQYND8eGjFAzfJpG4jmKdXd6pLe15q6RkD9DKrc61sRzZq9m5gUMFtfmG7i3Kvb",
  "key30": "3aovEXcfuMzGGtJhKEjtRCVM586PUHwjMgzRiYYNXFoW8ueyQDhSHtXS5RZstSoiP48rMCmci1TUB7VoPuXTQpD4",
  "key31": "5iXBbLWX6eULyPaJ5B6iBUpz7oyZchtvHSApnNBt47XS5LfosNJvzyAN8V8XwyLcZBJTzThcrvK3eKhXwk4BNQse",
  "key32": "5udGtmUwEjqJtxdARjcp7Xu6sSRAi5DhH5xCJeqWzT5kMstDtanQ4mpra2wNBsmrgb6LSg4mnDeRuH9nCsan56nP",
  "key33": "2Ro8Yw2hcNBAKh1FJsRmBQPnRCRi3Yu7Uz9VWXhCRdfB5jGKcdUySJP1H6hLTAchvTtE1v1ZY4Tirf1BYEpKePZj",
  "key34": "4xSzHXR2UA7pD7EtEQ2QeY9iSXq9ryEHNjhuv6Lsm6K26xEBLGhjVRZ37gKiw7hw73fVWszUuZBSCQjn2R6ZrWZA"
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
