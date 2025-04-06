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
    "34rTvFxNhB5h6fTRyqPhrYa7qafUCh4oBnJjQ7eSLo2tpm1oWdL4n3FW83vo2yJ7Fv8CyGevQex9pMtJwM6XcvAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oukXuB7oGVcMCBEFcqmgbCzkYdB2kSov1AYwDWjv882gVB4hb5bDzpaqKkcq6hSQmsoQB4vsWm9fHEAWFYCHQw2",
  "key1": "3NvuieWuR6SQcoypW1wjT7xzkXUK91YJ52qGwia4i6hdvJ9ZoWr1ABj1pE8SpdbuaWu6eT5bs1D31VpExjJLSaoB",
  "key2": "3c5uLbhZnjGpjorRK4PFFgmSJuXzKkCsc5HVH97wSirXx8BVba99udqUNusRJaSVC5MaLTmE1n1URWa8CqhfAZvb",
  "key3": "5i8gcgsbd12iEGaWTTRsENv9LeCcs7YzKnDH2QeWTSiwQmxHJpEhQd3cNVgY8WXxBgpsAdfs1WKoB87jBqBgVW92",
  "key4": "4iTGCKmEz1sp7rbkDvpLp7QATJ49XvkRxS6xjdmKTXPCtAd8haajWdhMzscE1Ws6N5krLSqG7sUgneqavopVrasc",
  "key5": "26TcaBwqNyobtnDozwCx6ujAvpMixUubSdYwonRRsctkn2uB5toJ7oArGPieMm6uak5jTUxKitFyv4wnBd1BQtyr",
  "key6": "64EUtWN1RBbLRTDGzikjpnBhYvyehX7bp7DgkvGfDLZ9zUCfSBbwrNt5SdErynw1UbokH9c48dzzPqbPhabT3nd5",
  "key7": "22pQy1xNz6mMPqBpgoCHTrF1HAS3NJzo2fKNpRXqDEGv781WWFE72tReYDst4SVtuUvT7zuie99tRFMU5tVnanbm",
  "key8": "2x57Nx4BSncRzXYNznsbS234qEmq1UriXdNkS62Vh1MiPHodhoebta9hYmG47soaLXjbnJGHY4AJeuVorBPFaJxy",
  "key9": "2eapzbDznQ1gfg8r5qa2CxkBRn5kwFpEondgHu3oSWB79Rv4erNHgFKAQkH6EEBfGaX7zHnJPetMQp6uJpHMk4UP",
  "key10": "5iksRgnBsqQoAtH5kVQCLee1c7sd4j9tu35EffsEHS7e1zXZxqqQgyff2P9iQVX8j7bgkjTeXUwhAjaDSSSVzVwU",
  "key11": "4QVBpxSMXE1LCRGjn6fe63ckmmho6ri5nucfJEynntc7dgEbB1TjjbqaZc3KVxWeRmqcVaWN9S8ha9zAsFaCEBDN",
  "key12": "3TBF2EQ5w3zs1oWP8ixqpQNc6qj7r3Vt4d5KTJEKPfiBhcaW4EokiqeWN2pEKJ35JSZhPhVSSSFjE2J3wAKBsSsD",
  "key13": "2oz9zABYN1nLRTH8QSo38KyP1SLcmqD1Z4Ben4Z9gFygniY9abokfGrqCak7o9jgCRNNFxZPEFQXctXPtY1GrW9w",
  "key14": "32U4bZ1FKjSq2yTap7YZQQm2MkoQJfJRmW2NgJwxmCja9P5UrwoLezorE8EtVDW1huVANw2mwFdgaogXNYwpNRdN",
  "key15": "2GP89vv1i6PgrCSNVkAFeRTj5UDUnfDRGPJLouXZaSWQ3hyaXRrNiRHQtsm9wvdVsrx9gf8hskTE9yMiZRzoNUTR",
  "key16": "2QQDS1orm9EDcv5cwwK6Efb3t7aaSwgP2SsP1j2QmfH4d3pjDEfRoZ9yGuAZAzMr1i9pZYYNQCmvUsNu7m68JAkw",
  "key17": "4nJ7ZnNGWz72TM2UPaNWtjTRJKWD74j8HvjRYgW24dSTbrfQxbgier6CKQ9Uyvx9jkQezSGzrCTTcgPvKCRju4aD",
  "key18": "Cjh5Wsx59Kuh2TTn6QWuKcDcxCQ5CdyMjPEKUm8hdHBdQUWC8JigEvKsH1HUNYAkZAHYjtZGWAkBhN4z5U4JCHK",
  "key19": "RAUYAYwbXb6wqpBkFq9eZFMWmPziszpNi3EfmwXh7MFH1QfkCQmWenRD3pBzdpEfjjsVxAw9d84VUZKqaYAu1wf",
  "key20": "4sMzxnF5eG6ifoBeJAqd1CxyUQn6YzSNkve4CTHo5pjUnXE1tTLqMCfCkVDA43SR8huvcyRK6wAhfzZACEp5tfqb",
  "key21": "5qn2TqzDhbu1hxKTKhU62PeLQmWjcLpv8455aabmNm4yJQwJ9FHNiZsxrmuVRuKDdiQQNMtkthHNDm4vdtju7Wi6",
  "key22": "5GhRd9FR36h3U6a5RGWv1NFPhyGMTYZnKb9eMTPfLKzjfPAGD8R1nehbSJmSP5oDRR8ccUJU4TbfAKgp63uoRRNM",
  "key23": "2DNKbHCazfaVGt1DPL982kKqCBFPeQ9Lw31dUZMMjYuqxWMEx1LfaafU7qKPzDfGJi7M9U2WhUxX5Ndd76t6uK1j",
  "key24": "2qcooV21ggaCVVaHZh5PZ7tTpQS9M3ZZmkMveCfnKABJHPrExZ9Y6NwqVxDwewxS91PvfCZEqDecfGGBB6jLanFN",
  "key25": "KM1pFJ157sKCWLA9U1zT9qsGdBQ9zCtMimf9Q7LAf1K12VDnD5JJpywagfWPwemNZzGebRkQVqpToS3FKu2aoGZ",
  "key26": "5MxF7fBvfRSYNaGowFMf4KBiS3FE6hNyFMye4ikCgcZUprutjw23QVxZKDR8JCegUWcT5no8wnr5pGrw4kmT2juS",
  "key27": "3aihQBdmTPA2x8xWAfpj1n1R8rShvyGiDrQiW3gbzC1vAQqgLQpfmg5UL5zr6qAb5xH4gsnLvSZCbbHrB4vpBj6H",
  "key28": "4bkyKHXj6Kne19QRXMK3jyJNnRU97GcdmK2bXm6AmdmGMZyC1EjA531ji75is6KWHLUfRRwCMTuryz1drrWe3wLG",
  "key29": "3h8wWfnaFMJzMbDRJvW4Qj5v2FjRkRsFgerVAw7VWjiR3ZW7SXaRUFTzE5n1j46Sg53r8aCg8ED8beayyqkAvPKR",
  "key30": "5unCvTNuvNjo6DUDjSXUQRiUiKRsHfBMX3xY3gj8znbAQUrFVnLhVBBMJia6Bc7bKg1onh3G1yoZyDyp9Npmu1ck",
  "key31": "4NuaqC4gAgUgb3bE4pexYsHVbJqPMzMq2NMYhay69R5SEk13SXKk1Gr7TUHYMN4GqewKCh37Sk1ZwxrYJL3r2sQV",
  "key32": "2pXBvfPhmbLCbBpqyGGidPmgPXdQmF44hrTHSmqNFUF7XS1qYTLW1D1bqry98Up4P8bq3drpqxpnFeXNRNUPUEEc"
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
