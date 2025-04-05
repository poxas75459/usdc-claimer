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
    "UcVFCJjavqx8rTSvDxX1AYE2RAcAQ4QFH1HyGtYYFGicf52h4fqee8QCHPXC4cyqfH2eeU7eZ8YEzCWebNCduQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52REgzGReCp3eFRH3LTDE4zcN1TBRHMnimK6fsnpjsm3Rntd26BzNNZXS362LZTE6htaiMcGyHeFfvBGZEfz9tHu",
  "key1": "4EKScQbGLNBHJ5XVr5eU22yXYcaMCWR2U4vKxm4aU9cuRVX1uzf2uZLsC8ntsjr2YmdzVXirdu2m7BXmSp84WFn7",
  "key2": "FQBrvT4GUAiqANQAvuqFcpYPPMYf9nkyoQ2RbBhcNiXB185vu3tjsfvf9uazV3cy4QPRvFXk2fGgcraVDcUnzKX",
  "key3": "4JunxtXGSq7iM1M7GvbuB4bqZbWrehLdE1PsJtnUHJ2K5DwnQWympiJHPaaeoWokfMqGNPQsn6pmDqYMFAKaHV4f",
  "key4": "4TxmvRAnxLYVSXa364bBEsQWBTJPqSbikbMnXWuVWrKMKPKxo89kKgNE2pPSAnzbCtbSYfxfdd7J47t56ydBaJMK",
  "key5": "41pjL8hepupX5nmuaDSkRW11shq2kLxe4oNpcyvZ2UK1CdK8Vp9Fnm11XEQ6T9cCziS6w45Gds9YaWUKfUxank5t",
  "key6": "5ukMt1EcSqdFZhJABNNdBXUhLtW7UGi48UsiSCW4471HGK1wMmBDU71ofLvNenF8kSh1y2E8p1ZLJjavbjA9hVF8",
  "key7": "3TmusPKi8ZQaxMC5nETZdWmAhzMnHiZcDWYqsHexWHsc2wwMDj9qdQbc49qnCAPJ1YTYi1YSVx6iqxfEUDzvNZsW",
  "key8": "3zyZcfwD4KPCs5P2GznQES4hJLgWExL7KeeqYVZKqqa56ctN8tRMJytkzk7ELE2SemYoVywnL8PN5K8D3QR9oprC",
  "key9": "3d1h3n4JGHQ6DefYXtRYu319fCSQHz3wpFtn26Cn9mBrPBeY6EnHda1aEVHAjqtxosw8MbaBjF2ZkmuGP4qbP6gi",
  "key10": "41bkjSTLbjpXQpkVyAEExw35cqEPakW9PDeBTNNcump2L4p8YunQHgdt1VEJm6BtFNbXJERN15LXiH8DHWEbDMDy",
  "key11": "28RLAcYA37XRvQNQ5pVvafe4GCQ6U2Gp7cY2daXtsrVAX5WvqmkhSkyiDsdHzRagAiaP1cshnWkkWZRNUutetsyT",
  "key12": "5xwKzsFzVtbjUk8c9qiUWFJY2mandMPT7at5TiSsxuLjwdpePsppnoHVt7pbq18owZRQm7tDzQPgqKmNz5LeqwfK",
  "key13": "JtPt5haq9w8YnTH2C4SMMq3biybVpS9vG9ELb7NFFyuneLSNVcgRBDfDG4TxnPfhxzK6G9LMdGymdbNtBj78cX8",
  "key14": "3iTYhXTnis5GbdgYmpK55gMqDs7nyBY5FWegS375R9fijipVUS6FuMjHTx25xR6RV1kCPoNJWEPsQhXEk9aMmdqh",
  "key15": "4orpBbBojQ5HzcUKpxSqrDsBN3wgqqCKm1yFEvmvrTVbtGvVnA2Tvnq6gNsyaoVv5Haf3oQuWRck1qNwWi9BkLfA",
  "key16": "3zjxDVm2fF4pbsiyW27Lyi4mCgjBQYzHgknYvSM31ehdZakwBBarHeUYw8f8pG8SzbQdbx43vNEhnvbdUWKXKXdY",
  "key17": "4gJpJ6XLKu6TURthzmETiPrXmt3YUoBncQDbD3f4DVaGu5qnW3ZutRWcnoTTfj1v8hUEF3Fq99YakNMHAAWyxdFA",
  "key18": "7froEpX31MvzTExmErkKrp53ByH4e9nXE9LsF7kWdpcc8tchaMPc58nGLw9k5rHd9gwamKu8qxeSwoVscZJQAvq",
  "key19": "5C8tURePpqoNXEei1FHLBpYqQkY6TRLknXkx7g9Ec1u947fe2cW4khovgFUk1VQo9zqkqvYBr3oNFks5sQEi32f5",
  "key20": "5HzbY49774kVSf1C8RdwHv4gsL7sV2VVwH12JB4iR6nxHRuiwMoffqzKQVR31ue42LY4cH3zHhAHE31e35sg55VF",
  "key21": "AYa4vF5emYZvS2uh1gWFE77NaMCH23HepT4corhcyMnJosoDXHqcfyoiNcAuNEojsnUJVncGiVgjkD4xKizbqAG",
  "key22": "4mfUcKPm3f5YjbQSmpMhQWzEMU3EoiKViEix8eXgRYBDion4VLyJAFCBCJSMiu9XV6iJ7r8znoiXUKVT5YBDPiHU",
  "key23": "3uYt2T5SAaDC71uNSMDLjcjUUSuwYr5qZkouh8bCgSq5oTSVs3FfYKGRQn6GrtkBTjM6qo7sdnXwU9iscQfoLxCB",
  "key24": "32ppfndaRxMjTCsyLrBaWAhPDLsDeagTqtgQfmT4D28gcokfncKuEH6wJQSuVE6nGHhidKFCJYBTYcXzbkwmytzT",
  "key25": "3jY2jspj9PZZX4VUhhnDj9YisYx95Cq7kzLvG3mSroEsuiSRrHie2nSpXVWBr1wnXoj7RJMcLoEFjEzigvGNrX5w"
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
