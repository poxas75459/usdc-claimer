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
    "TzmLaDCpyd7PVAWkT1wyeLztXjVYXpiMWFWDhbWAbKsBhq3GAK9MgQ5j2cdJHwuaTCL3pHHwjuqodxeNyJDHEyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMaRPixSNExKXACdaWoPaZSDgB36MJ1tGV2Nv2RHnU2ANkbXKyRweiZ5efzTmV5szsNEjBK482Q9WSTsS7YfDKy",
  "key1": "43GMKepmSwMkRAXVqEr3dP5vLUsvtKS3HSMHXANjc3crqphFD7GCgNamuoR48jU7KTBT6nkMqgA2garaW7isQfHY",
  "key2": "5qRLKBXVybNPDRfpFDxFQGNjDWDnqGGYxUhPedKgBeEoBy7LJjDDkSZr9ZV2hUkGfPMC6BuA8MBoBYikdmWQyMhy",
  "key3": "2eBEVez2JXMt9omhJecEqnyBzTsyMMtPvn6Mir85dwUDMzZDWqvZY4bexXXziv5t669LTqvbHmdDmk2Te26UFVA3",
  "key4": "3Rr39f2YKFoi1mngwEcTQphzh7v2Fhi8Te3CGu36EyJeRjqpzNPNMXBUzgYPtXHNZqmG5mRUbpVNSDFuQzGfFZgz",
  "key5": "pQjHtEkdWKaxSzz6G78p6achfDcHLxiizydNq5pEqDYLMu269gnWRvdrcp5LjVLenYKx9dAUUPdBmbDbXf2E7wG",
  "key6": "29nMbB74Ch45bVaaduLXDEoDYAd4dMQqWUNTQZD5h98xaCeAqg6XHMLaxozJ7jwTs1ZTPbvUt84nE7coEmhcy3Jq",
  "key7": "4AfSvnt4bpgQY5LoW26q6xJyx5thTsWdGqTWzxTbDfta8QxMUSTXwRcRpZhKj4Dgp8frGizcitYvKNUhyR695Swe",
  "key8": "UweBs83L78LRJRYRUGy5TqkDRdhnbmbczLboiruiFEcqpgmiNySr57vHmsNYfdBFCpTWWvo6jF4oALqSivAE38B",
  "key9": "5pksUs5GS7F7wcsCzPMiw6uBN2CJXjaaW9Nnzzs1fxmuaFHCNqEj9kPceqyurWbg7gPhHPCUGtgWiXsuLY3Viv7S",
  "key10": "3S5zdA4mYGfg5FwknQtYTkt8vTcpSoAdnTuwW7eKtzPfhm7FExgZw1EtJtwyG8NorZHqWbhTQkkguvKApYvvSdpf",
  "key11": "GqyCKsWj3vGABmzPGrSzRnnnAGRChgVbPqL1NrVMkQGsZ2hTKt6oK2U5SsTaBvBTDxTLXNLstEojikq8FQhtRhk",
  "key12": "YhdMdkp4SD2p1JgwmhYUD9s1CeK8EQBZRAj1tWqYBguPhw3YkP26miCMQzGEQWjpAp1NeZjFkobHmoKa6rNzbV1",
  "key13": "4Yv5QdnLxohyRs89i1QPQwDE8kGYkGVg71xSZcywphAeJ6L4DXUEwRLD4pAsSoHJcH3VaC77ZmqdbyL2zsxcgQV7",
  "key14": "3ftcfqCTN5HssvujScVcNvcqaxfQzzXVaaLoVC29XJECPgGHGPWrbsrBw1sK6Z3qdRRthRamnm3jX9nJHqFoUZWt",
  "key15": "3k9CgYLdPjKhqJWrrzkKJToM6xXAuFPqTacMYMSTRy9bZSxLKT8jKGcyg3dSmV3KBixnDStW4u6oXgwSNaMufgS",
  "key16": "3cP7gnyrNtWhz2w9Vg2W23xpZdhknw4DUHsnS3pyB6XTCivg9hZrMiYj1AD7eLQJMmiYstvwEzZQGrt2SqTnGxXV",
  "key17": "BEKpisnTcLNrzGPobrAipud2E17R7hpX1bq3M5FDrURRf5fCE3e71svUCiQ2Q3PArngUnYSxfWnSNQSqFrfHqBU",
  "key18": "UT7QpUo4CcZrfuV9C9ScS4BYPSFapTr24sCBMPWCmv3nNbucGM55VPCpyiAyAfJ7ekL3p5dUb9U4Udx7Q9HKmyF",
  "key19": "26uMjdNiLihkUV5EkBcNpoVKHNJBZp5nboGwdLwVcVFTPYFdzYTqQFfXnT8Q4dyaEmRgsXUDJjBAjkPgizw2AtAS",
  "key20": "Mxr6fgi575hKYrpVyuJDLJ6hxcJjq2UKopPKb7MUQioaqAy4q9oEgjfdEw4XKzfGuRL72WL5EydqyyXasQA2C5E",
  "key21": "2mN1mcz5ZLFjj4rhRmcxU4JkSnqNJY9k2JEygejd3XXYzBUQL9CTQauBYX7yZ1H2Uz86JRSYjUncetQuCsRrMrpN",
  "key22": "Yg58UANyhcpSJ1mthgJri5bBYmHFfjKiC4zjNhmtAbTL2tCA9wp3fHmYSkWW3edjuzdSJzVcmBVU2mfiJkJjczh",
  "key23": "odeEvPKEvcvGHCUC1QCZE7wMjgfRQsMHPqBqci2Lt43Sy26o2jAm6rpwsyYMsChDHvyJAcZ2siZDWMNfEEpUJqM",
  "key24": "5V5BVodMsk8v5juMuE8aiHPgjRDoqz9FCjXNAqogDe5ij3qrruwF3aySw8Yf25hmLKZM7EmAN7eo4UkJwX6Yh8y8",
  "key25": "agdBCigvqDbyouBTJmuEN3WSannLkcn59MYLZ5UTcFzYRF5aVvDXgRfvE1a7ZyHEUkMSUSxQLBqcchirRscDSfP",
  "key26": "3Sf3X4biit4ograB1aqu1xJsAMmYQAsytKz5UJVAr8HArinyZ9s237eK4JZiTAZNokp7ZLZ2ZcetmGTFRcwKbw78",
  "key27": "4RbZUfaimnoH2RBLTf2Y7bySh78vQR26mQyJM5u183GWT4K6VhobNCzGUaaD21kaz7335GxVhTMWNcAdTXPwCWoW"
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
