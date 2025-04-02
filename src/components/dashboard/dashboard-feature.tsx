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
    "rDXVmQNPQGSNi8o8qPtF4cPXn4qC5L7gKccuzeL7cxzncUfstDmXbwkqUgtmvZ5anW8m5LK8BVCdA9tmtRZ6JuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGrsKgDGwJCTyR2nWsyjGNjDiFvVaJ2iopK45L4F9KBEz8jesfeDgF2V1HC4NJVtuYTzLCND86Zc5nrXJ8g8peX",
  "key1": "4aYGhr5fdGDBGY2fhroioREMsoceXsyHRFvT62bo8LcGnsyGG66K7Gs7U2WE2ZjUx7kMsayWKbN5Q8oA9SLobuQJ",
  "key2": "2KDQSBv9tXpH4rcMfrawyeyKU8qv7fHWk6kytHB2A4e2QSkdWivZxmiossoRNQe6pVbn1FGnWzfpeVebLLBZCkBQ",
  "key3": "54XF2HZaepNMQwaKu9g9cD4iytG8sj5nUe6HN6nMuu3kwbayxxraDUD65L7rUHkzjujRG7dM6wvNSsBV63nbfZM1",
  "key4": "2P9VrD8Yk4awniDXK5n3jJ71ZFnFMeTpFzr5ePcJxAwEA3fpCvSg611V6pYGqrjbdSokY1K7QfqQV3tpvpFhdYxx",
  "key5": "2fxSCz51pfbvTFRH9fZRQLGaPc6RXnDYLpaKBMRCxBkUBNAMZGGxZpCLfmifujBzZrCtXif6XgS3f69RauUnRKMN",
  "key6": "4nxBWxMaaahhg4ES6rUwBHb1mpQjmUsoyCsnfEMfJp9oDDvNq6WarfsZB1UCvKA3dm815dnWtXfo7aiGdAeKcbE",
  "key7": "4yhEHEZgKkwx6J9k27BoZXcQhZG9AmgNzqQkDj8jvQVjTZaPrLq8f9fhbLmJKGHYeWuQXGF8RzLkN6WXhq9hJbvx",
  "key8": "2yDpbAWC5xvNyFejZ3kBYdnVW1Gq3M232dk383H5CUo6MgD1hS9PfydwQkZTBbgufXhs7dqsfSXffjt68ewdNRxt",
  "key9": "9iLQNcGT5ukcCbz6PK6ZrRwKZV8ddMhzTeX9FrYXU8T7MKNyBX6pNYsiAoRQTfXqigHYyiLeaoDWr3qk33fn823",
  "key10": "2ZN3stCmuF2iGVqRWNzBvDLimncJCrXhyoWLZzU8EdWKJsqcEGrVTdE6V27zCB7JNTq4UskBsSxiB3Vo3qpaV6pG",
  "key11": "3RyzKA66VNivkhSFLayapmcSnDPT7dethBxGhnkfycq1Ai8AwCnusDxNGUVpcY8jAjdur1J43xtgVBVDNLQE1RT1",
  "key12": "v2qU71z6MpBDHEJWA6NbyqqTdTQMCCmb6hsdJczeAUC6AJ4ffGdNk8J4ouLpFsXeTsTpBNp37hZhPAmGnJiogEU",
  "key13": "4YBMsSjW85r6PtrFS5AiGnkAQUVSoCWo8XgD4UNiweqp6AzMseFtzWW1f93s7Xpd8axKiiZttkDvKxRQexJTd3LZ",
  "key14": "5YrkTgTW6u3cNatxZVMappdw6viGU6M1BY7jiinvr6FtEuxpzVFjmcqrNVXJxjfq7ZKHY8tb8qSgzc57nJdzv8Nz",
  "key15": "37jd5xHU8x86iF9TbbJAg3rGwWU5Y23Gs1B1uC6EG8JwyjcNztuigTtkMeN2AweL4HMjsnCe3ZCTQhreCCjuP39q",
  "key16": "4ipi1VwuuR3VnnxkbhSNiSssRY7ze5SpdYFNdX7g78ZCmufTPjbniPULFobZcxiMm9Wintenj2v8QkjiQ9GjgwBd",
  "key17": "5jD1YiyKRRrgQtkTbLBKgV4cM3eC4p8LKqzpMN5RXqt2bhj64ihGimaK278sSTyEM3uxoBUipdG3nvkBPLPB7w15",
  "key18": "WVM3ph8ZEaYMkERbjVcV85SarrHTwpRapZF5T6dp3HFFbV4cu2kYWBq1UqAiy9s6ayBGF2sFF6UmLeweQChFXav",
  "key19": "3RiVEggNjYiezKRJ3aiaJPfj93wi9RyVAVfERXPRCw6bhKG4WF6chSFWe6FEQ45CyN4KiDwfs4YVDSKXrAxy3K9b",
  "key20": "5L1kdSs3egipCXkBR1FatRGicXmDKz9rH18HfP5Fg2tjBS9ddHHU11J1VDEET9Nd1krLF8JDD7KWzNJZEMUzpHYi",
  "key21": "5B9oUmYhtC43SfR25zKFuWzo3u7Z9sfFnFGDyVfMiQUzBdeAfJ8veXydi9PzrQ62zg5fPH3JWxxAkxeK4ms4awwS",
  "key22": "5dMN346fWjV1fYQxPV2X3MbauEg5tUTiZBmvbvhCDMFGmbq68h2dHygLW5MDskdogNUqvzgXpeWCjcCPCTi4hCxj",
  "key23": "fzztJDJJjoPRh81f7vPvuWc912t4NTX5GZUs8oeEk2kPgipnHvDKkFa4Q8CurtsrSwhNvChTeA1HgQoLjn1cfgv",
  "key24": "54rXhEpnnCFWpBTu762RP1Q9f6TTXjAzq4vbLkYJZYgym6MM2mSDdRHL7EdVkwTHDN5QBkgXEWUT6pKZ6ejyMedi"
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
