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
    "eXtVTHSVW2aV9CexpmaKU7AV1dLAvgW1Wn6TiodFvnRMnDdiYoHzC2CBJwXL9sxJf5fQvkF4HwYL5zVjQy6qk8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LsuPjqSrE4meSyBC1bkEB3PQh9wPgvt6iUt6QyR7LAmwh3WXB7P7fDoVrf4q2MJn63J6YtzeK4qzGhCH5PKefH8",
  "key1": "43iFanUGjASCGS3NY5XMDzhK4mVGxLHzmfcRG83cQ88xwgYrGf3fe6L4LNVD5YvxPTJxdMpESmJf1xdw9B5Uay73",
  "key2": "3K1aeB7XPgeRKtQ9YxRoaq7kET7wpSmukYVRCS6dcxisPYbJNVPnS2cAQypt2ajkJKtqAWTxL9nDdu62o733jrSw",
  "key3": "48wUu746fkK5H7kGccmnPAtgWCTgiGvSdFs1H64rgaG6CsTbSxLNsLhTkB14rdjDJfzYiB9omYT7Qw8T88zKALKP",
  "key4": "3SXjcQVTrmU5SNeyDPx1XcCsCRr7cKhkzQYqfpGEcF479BkAdymUQGyNiCpQ6fjFWdh4E5cLA9Rkpg1pQvHuiTX7",
  "key5": "3oC1ZEW2PXuuADxgwPbgb9sPtGhjWnWbTGoeVsgZ5KNWVswtuFBAgRU2WH4ysVpbWP5YnjSUxwMimDthBtMc1VPZ",
  "key6": "iJEy6n8n7s4Gh6faDW3nMPHCtuNHKg5mo6pGvhefayXc4yY9nNV7LG8DMwhCfoXrvwPvkXF53kTMrTeYPBnGutk",
  "key7": "sabDE3XZpUTqE4adTvNrFbuxJkyysDV41FJNRr2VDt4r5coav4wGtD8MxFS8FN8XZQVqBs1dJW2QDYwiY1dgizE",
  "key8": "2cDTJhidj27e7YCcNT2Zaqttx3cXzkgx2qB7dAhxkkefrnQaWL2EwS3YTVKCTLoie1viyjCrpm1yFSQWTJTGnyjs",
  "key9": "4a4EA9tUVWjnLAD8zzNy739fgcD8nhGVXyhQPV87uMxJvGL9nY4LtDKLcKaxB8XWQdsvurqVyHSyUwLwLyUygqtS",
  "key10": "4puRhxdnEZ72GmEkyX6snrkzvx8xQAWir4ac1XLXQ3tCb8Ytv9mnrGBuwTX9YuqXZjjBtUu83ghf8ujo9oZBKivw",
  "key11": "45Gziek3jijB3yHnUzhQrWMgYVxT3DsaTBkNdu7hpkt3fujJro9SWAUAWL291nY5M1PkvRJkkE8hiUbdFFqAmpoP",
  "key12": "36ZeEwuDkk7wdRREe5Xw47ePMKmg6xfpaYjYStmmgusSGbWHAt7eRAzSYV97xeHaHcXJ2P24tU94fvSS7V1bBJd1",
  "key13": "5kFyk1rAK7Y4UZfk67PM8H3hoSD4bXf2rYBnPhAf4frqap4eWd46TeW2wfKkJhquzSHDrem9YUD5HZzputuvk6qM",
  "key14": "22hdTNqXpsyBV2Gvj8WbChSr9tifX4QrzDr8GDXBE9gFDJo3z28wYveQ2zUo3KwcmP5xo9xCHUoJ8zgEBoYv1erb",
  "key15": "uapCWfUMeddjGhRAh8Ldb3CH4eEkUXhoBKYiN44QzH6D2SsJqNe6PAmwN1H4xR7dqK7TNgicuxkzCwa2i9PWLs3",
  "key16": "TaPgBYheTWHqb3if1zTMH22fkc7RHBSnpug3VLnoRK2pSwuG2JuM6NvAkJqcipmUb6VPnpqrkbvghgJRAnxUja6",
  "key17": "dF6kSqvdw4Wgg1qg8xZY144DXeYKKzoLao4GVZuvaboDDvA29CHjRh6x3GKyb4X2PBgsxEekaNysEUkWH75nJbA",
  "key18": "2cQNiL1j3yPNYHP3KjEJkn68evh62nRXiacSbaJAroN7F41ds4SR1VjcBKFdyL7gPSbUpnK2938SXQXQEBxyyHfm",
  "key19": "4677hWTVPhvs6jFJQ261foXUP3fgUK11ET7v6dGfZmbw14tZwUYAZCTURfo2azuwXQ7SxhXkkzL4BN8VjAxKTJRn",
  "key20": "3yYd69KfNci5mdHx4YVEywoev3QtSQvoMBThAszP51HPeFJx72PuBBgL3j4M2yXcNAqwQ1mpdgqpRfZ27PuwMffp",
  "key21": "5X8Wtv9sYrgjkgKLvVdRsf1zSNqCaxdBYuyTRYiU6EUXn1Ek1ZfFC8hbxWw28NUe1HnRsve5yhqEW15euDRdWCSa",
  "key22": "4VBY73XSkDNTsHSDB5g1Q1ztXhHophGgwYSsmPe2uJVvDEtqacoKQAm79g1nTPXfynKHzJXjSLhfMzWiBwBhBiMX",
  "key23": "4DMr9qzEstXJwumouWjaPDvKbg46Xc74p8UfXUS2mRKSyE6RWw2AgaFUWf7xv5M525zrLBzuG1v5vzxUKx9qbu3e",
  "key24": "5H7V3zxW1G4ZjMkm8jVoeVAwcJPZEiu4aESnt4q2E6yxA6v3vZ8uwpGhXxmCqteukh1gpuJ2YUsXRzi3HP5UCckd",
  "key25": "KXhdZgJd7D5zFE8qcNsssjc9Z1wvqc8Gxzex4nnGfcZzsRhTTzqGZoJvxtoon3GL7u9xC5XSeegQnapdNXQxYod",
  "key26": "35nBVfKHowoqhN4wK4gSh2E2F9Qp3FEf35c3N19qvyxCaamCF8cpxox2PQajkkVmEGknsgpQ8Ywo1H7txig49onC",
  "key27": "Gyw2cMsCkvyqfnN6DdQSvCuNReCtA7pr7dpMzLmQEVnxwFReMjGUtCSMBFcMnNmpKreQxyLbaZeQoAcTCMzWwyB",
  "key28": "38zihLzBtH4BbsU5b1VLceibR522gsmVAzWr1PLXVo3WJvJu8fREAYZQTeytLirS5nAWLWiv4djH6dLejw3vqpMk",
  "key29": "3vE4gbWowmyWfjc3Yy1FsSTm7nYVicKsFBP23jn2ZmXn2DeMC94ZrJhZbrufqKXG7c8aWJrpsdxwFMmseZDWjxs8",
  "key30": "2rr95LbMhBKhJ1GV9TP3TjSmRYNeTqHMj9p71VZDJvULe9MpsJbL73zVUDE8WKuLTsVX8i9MuWDesV7k192YXMnz",
  "key31": "4a5M9L6awcaRGwE8JdJJKGUryx2CzLwqX8SWwSK4i1piGSF5SQYq6qnvR9WTvjwzF7ncmvKRVzxcn79PDWjnQutY",
  "key32": "2G3BzbcJ5Q2uHbHeS6DfFs98LJ1Jnef4Uk3xFdkztHLDHBm8bHdM4CMv88KtpquoBBkdNU5Djd58q5S1bEeENsej",
  "key33": "33NbLZWtU6Gw3o4RSdLZGCKsyuTvbVZM8ov7k3LWZoScLshisDo8bZAS8yn82jv8F3J61DFUQrkaSTWucZMmaeHt",
  "key34": "4pK8mh8qvr9wMvFKyQjvhoF13Xufu64Ap25vgLs5T2Z35FRu2ewq33xhjELkCMppDzt7Jki6f3n2KatUSzB2BcR8",
  "key35": "4h6FEKBBCHCujvdQCjfy9BwN4iAVoiKckct8TrmFnKvBpjGp2htSHMoYAUhjJNCZKWn6Sy1kFjByZ6AiJk7b24S5",
  "key36": "59iMw6JXau9R8R8DnTNcH3abLSAg3jsyLJP6tr5cnZ4DZkteB9kgKkYcovJgjMG2dvkNNUZs7sb3oWeHW4JXKAQG",
  "key37": "5RDRy5QUgSCWiW7573yk65qTonZ6o7E492dKUVfiKNhgxFgxEQdT5JZ97PpmsoRH6XApt5TzXbvH4r73FtMN5esp"
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
