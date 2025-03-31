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
    "4GgEnxrmWRXP6JZ78aMmjyNkPDS5nuCJyJc8ZRSoPEff8PCe4iaeyvqUVhLUJ7NoFW2TktMc2hqEQqzYtQpGisxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9QBiS2hfmoJtDH4rFYUD1HM8w1coMvt1k8nDAtQjxwfBhfTw4oPdJgu8Ccxud4PnSW3gMML7aPAakfd9XqcTqM",
  "key1": "2C3X6BGVnSuQDD7S1hsBPak7c86jyMMcpREHTgAxvb8ZP8XbHV257GX3pxsUQwCzpLRPJY2BC7HgnipkJr38U1GJ",
  "key2": "47BUbazxHGPmcCE1TDG6Mwesnix6kBWg6NiB4d42LVfpfDeLH6SHgriiZnZspMvvX5tWDBswskgMZqMQ8qtLYbms",
  "key3": "fdHW92UUvHyoZQozNU8V5zq5WA8aoYDAUpA2FyJTwBBHEcvY7ZkGVwR4m9VFj797fJ1pFbH3iC5zhDgUpZJa6gw",
  "key4": "5eZaZAxWmnVhwpetHUP2CUthEEY82ckFJnY1ydzm4uJhZWVi4VN3f2dQyV4KCskbxRQ9JSkbY9nB7GNdM2JTjpmJ",
  "key5": "2EqPKLX3S1varR7LhvSYznvLsN4BcuzyC1ago4b88EepB1mvSQcVK3dt5vvpLTAXd5PTJWmFZjsBd7rtiE7rzxk",
  "key6": "zKowV4MaGQc3RUjzsARnmhPgLB31sVUjhqUpnaXCPTvU4cA1DtgDiYgAs9w5N1HhaigrgiE14uAU3zTZVBXZJk3",
  "key7": "VsLgXmHW2LGgDNvJKhnuXGGuLguXJYp1A68hSVj5fEQipqDaBj251kQ9DHfnsHgWyB6rW6Hcj43Dcs3zyiG1N8E",
  "key8": "4FVxdtPowLqJWGqPzWkYtH18PrPCYQCegit9BmtsntRFN6hyKmLdgmr6Gey3LwiEGnzCtkaXy8BktmvPVazVnrGQ",
  "key9": "4MFiXR71Y9nQUWnnUBR7K5gqcctCpA8HRsZyrsB1YuVkPU5s9AFaUhti75cwueqHyjyqAstmFUsQec3xUG88Vt2D",
  "key10": "grgpYSJJX18YHnhSBYnmPQDSSuktZSwhxn1SNaMojBx3TiKM4pGGudki1hQAtWwKydoYAjRpiubkwLiLQX1L542",
  "key11": "5T8SiSPzzWBBKBKcNZcfdxLCbQ4TRPjK5dfce6SboZadGEAd5k5rFLxhuAPFSdevaCe9eAsRxDYpKLxFwDFNDemb",
  "key12": "2L5a8T7VjcWKVimwyj5Eg6BuHoARuqSaRntarDZyWkDjULZhh8LwWACwpC88Cw76oL3xydGkZDcuFGKV4tqpkckX",
  "key13": "2YUdm2HQPJxMdL6H7qqbnsFFkpi2df4DXAejyMHydCsktnMy6DdwoKVNaWAQ6gaqV3Fa63d93xDEwXUiqrRTLA5Y",
  "key14": "2TDHfjSsxUspugngVUqRsqv1GEM46koCRSjzpG6Ct4MC1kL4Nwd59Ai96zmx9CQ2r7vvhLxSPyDov3zP87iJuuAE",
  "key15": "2pYKLdWhMKiLa38VrugqaCNVj5qZbo1Kj2Vj4xCyoZzWfguTsNiyv5hTaWFy6V22n6Te7JyqmcoNepqxJhCQVxCd",
  "key16": "3EwLS89QnsbUECwGZfwHXaSXVVG3aMPaMowjEabB9Caac7zp2U1p753c2BVC7ZXsCi9BTiYLcwBJJZYyP4zdW8YA",
  "key17": "254K9r4zBNqt5dech9deGBzK3ydr8KvaA26TeoR1z4a8y5dKS9h6Mc3iqWM8kJtsCxzty4pZ55Wwhge2ivy5nyQf",
  "key18": "2XyJbVBGaWR4toYjCErLL5xM1oeFeSF3RK7RkK9wsZoyFLZn7iEuLDeoJ1zRMi6Ha7JZoPVwyELJQZtLVyufi78L",
  "key19": "3dWaFxiq6WTVrhnKz4iV7hbC9Q1CK8m7wE7sFJeuvbKHy8We97KMzXgCx32SvSUkD3EiPkJxb16gEGWmPczmQZVb",
  "key20": "2HfBuY5fg3Uuxe8d4nqRvJthTS3fDpTpRTJCCmtyJNT7S8UqPSPRN7GrBY1PgMkF58f4hREbjvbYHpfTEoD9e1A2",
  "key21": "4qQkk3Nj9mr1ywPohM7w9Rm3dxRMZNAHSNPDNKy3VcEDtJeHeAjrPToPQJcy856518wW6zHAJ1P2PxhvpQXBykWU",
  "key22": "3fk4WjjNtUKU5T2PYrgzaRpKp6DSqosWyd1jERRPch5FiXwLTEBbUjnXcqw8R7Pq3MepoaWVEB9s1Ksiv8UiNtA",
  "key23": "5xFP91XTXmdHUWwQhZ3YeqhbmfMw8PCzQc7tE9QQFdoc2deUg5mEK4kg6yUYcDbQymu1rruxK7tQLHWSwkDK31ne",
  "key24": "3hshHxspkztuPrsfXxpAJ8ZSA9FFpNR4Dujy25kWKrkzofEiKeVL2PqSPT5g1WCicmUpGsN2DHC8XriPdrACWEEK",
  "key25": "nEUofNRrhaZZP6hRsaYVAarcUFhvUsJsTApfvKPudGtxPX1t8USjDuHn9XfeaAn1N91L3UvFeA5rQywNM4hcVge",
  "key26": "33Gk2QgUBE7cBLGRrDMPVu8p8okCZwtEfCDFNX2KTnFNdwUwMz2tBkieJ6jxGvtE2gwLwHJJWcn23tfSrnLFro7p",
  "key27": "66xujAaxDc6LhV9yDXkRriHqa9rApNfMijJsJu1gkjzXxy8xvy287N9Kq8szgEwp5yFrLu88CQxNuCzLfwLTuerY",
  "key28": "4p61qcs2PnnWHVi2zcqsviwhvEriBUrcczWLrAhKMdUsaKy1KqGejMhW3tyv9VL3cbPpMnSTz67TsVe8pZmF2Mza",
  "key29": "4irgHuN4NE5HERCcRh7MhU14Aau59jC7Aax21ua9oX148vXCNqkU2E9mj1yynYQgHko83CGvrkpbHBwxteZWFRcv"
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
