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
    "TDfKSG7rkSgpEkD6C6DKerfaM8szfnUmQNaWWY13UJYsw8CuxsJLCGFZoMrwCJDqGqFQY1faY8Wjgz5QiTSHTmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENdw6cPErmnGwtEc5bebMYzixCGm7zgUr4dSKgD11W8vxHL87UeFtZ1sUre7Cg79iai2kCQCt8vmqMfmmx2kQGW",
  "key1": "2SMZS9PSNm4eUbuDqDv5esCQC79kn1qWrsovGJJ8wF4fENzzq5V2vY55Y3k2ht3jWcxDLr8GLchxasrifnkiNJkS",
  "key2": "5kgkteVAXXKmWLrfTKKsoSNVX4ZhbG4XeQa9YPe4gqya2GkCqZG4XjLsX8Hddbxyi9NWZR96NzkFkZQ6K97ZCDwN",
  "key3": "2E9nrktV3MHZZoSzkeR3sHSx67MPC6WhZpfuuxsVQRCiMtMPjaQh1Fz1NhCY2kh4w8NJtCCKMNAU3ku3SyDpRnUg",
  "key4": "447oNfCV1ebSz5VUw5QH3jPDY3QoPxuBtX19wEpa4K7dh4DqbBppRvUgoZoQT4vSKuaQS32Fd2X1jiVAS86mb5wS",
  "key5": "w5owRKfdGW8LWqGwhW3vp815C8inRLT6cdGujs9wJdzoXG7oRHmb4DVpM3uh3mJu2rwPDysa3XyC7w5EEbvygsx",
  "key6": "3H1TyUVBUBLCKDsB9ESufz6vwG1Y95YqrkYQnSekTQsoiFZGQ1jNCmaGrPYgAYbsY6Md5GQDZhSASSotq2PAu8LY",
  "key7": "RoVkzK33VhKBJ6qfEVVENnQF6X9AxJeRZZpURHMg5MttYuDktc77j8bsjxENVv8D7HXenBw3tGhq6mnf7VxfPHB",
  "key8": "C9LdjpvtNspcjiMa8ugrAbtjpeUtSZ3QtdJwBwTfqYLrWQ7UvCJqyDJhfcdtf85qEtxTcyVLUv37PTq9h72TGuX",
  "key9": "2DMg1bPaoJcyY53biuNpyoJU17SgqNkvadkS654YF1QhPNF3S1YmV9E8vi3rUGykzdX58uXNBhjeGhEaLvKuCWyv",
  "key10": "RErmwqFmp2oMkXMvNwdT3KVTuF8Z26Gq1xd2uPatPKrBjhZgw1zs5GHvTNKGz1JC2oCiiQ4JzDSDZ2Ws8EKS4jU",
  "key11": "3rKEd85LkcmBQxnCqP6Bm6qPFrT8rfjnqN9zBPP9oXCztGTitga84T3yRRA44tfXoe3YjFN1Zgj95fytcg6ME3Yg",
  "key12": "2sKZr5dopjcHvBNzcBoz7kxckYYEVBhfSuzatKAcpAR7SEHgPSU9BTU47Yq7HconJmy61mHVstsATAF6kYFq9U2K",
  "key13": "5GDn1tfufFmJoFnTe9MnG4MkZQc7bV5fSyzxj5kPxvKCnqUQY1FGKA5cLGTYmUhDHkaVnS1WcXh23QM8ty8hRPK4",
  "key14": "3U8SfarprTRjhiAwXk6UtNFcovaz2NhB6CorcNaYgXV8Uzfxf4gf6kRRULDnnrUN1eRpYB6APGtkCTb5gB6LtQTn",
  "key15": "55nE2f45pCwfCyPNQHTFJdrjfotN1bYtPgLgv1TSQMJbi5HAdXPL4yEQgLduZHPAsaf7bM8DNE7yKH6znocpPCZc",
  "key16": "5iGfmbU6Tm41F3UyKHS64HeznpBf4JPxgRafzwTvkkgKXV68nV13mPjCDYspcQUTWu933tNd7mTRiYQBSYcTsZLn",
  "key17": "23VhQpbX9Af9mqrpbnfDHYJCWdXWPD41uUDcGocL4U4qbEA9wPvSg6pDqrhnh35hEeJXu1VdzC7GhzWGd9zDQiPn",
  "key18": "36WeWNnhY9FHNStugtTRsg4Ey5S15MyYQy2HihfCzSL4AQFafiQbZAtPGBkaPsTzpHyPotgGYbkRjLT2vnv1zd8y",
  "key19": "4tBBK5YWAdz1RZdKQ6NHbbx9JCsVBs4LPVv9uCB8C1tPBr6X1WKXhxtUUpptXHTTUdSHrL3WZewMGYFG9DAp3Ekj",
  "key20": "51q3xcDybCHVnmrCkZke8KLpedMBZvyhuuWwGaby8wVBmJ1ziMAfbsvsGQbdN8P42K9Nj2LxwdNdhxjJ4WcXy7oc",
  "key21": "5raH1AnCCf8dcQDQabJv4E63ZLSSFrkLmbeA8xzEMeno22t2RhFkiB9gRCa9QX14dgFWhnmxgTHi7rzREWaUi3sT",
  "key22": "2EpYkeDzf1xmryAyu4Lx7fyxMtFbfBLzRdY1r8QZDDZf7QtSgnUU82a5DBFAJkudkwUFqLv1h6Pzfer5zLY8t1Se",
  "key23": "61WYZXDseQUQXCxyKpVDRVnttq7TetqHKTiVvNorR9B1cvuZ7WTkT1xVwMnvGbu8wqTFs1NYjWMu66yaXWXCYWHL",
  "key24": "3cvyDuw1Vq58gbSQ7qzs8wvmasLdjTJFaMwAiWr2LmYLk479tnnu5CaW26Y8cGX9GYTukyG67xmjcnMYdE3umupf",
  "key25": "5SB1KinLREVxZZEdYntRSsiMUCXrSr9QaUegjGDo1Z4yENg4vxxRdsRuyzNPKWVewfwSdGnoXNTJp7hnTqJVXL3X"
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
