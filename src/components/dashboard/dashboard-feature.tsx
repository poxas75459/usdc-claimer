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
    "2M8kE9Hc82s4SfphDqkjfkegVgiogtuiHwVqNVe47wBC75SUsWd6WYGftjcpb5YPfh6QTg4JrUShEP7gNrnWp1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Ajcfjp7bYdt4MmU1M5CJn4gsMKkXhtyyJKQK4p3FQpAq4HBHPyte8Qbk524cugtkmJJkxJrdQuruxUWDRmjb2R",
  "key1": "3DEn5BYBSt2XV5re9zrhW7xq8YtvjDjjLXvhwvkBvNZCUEckFAS1Nec1CeknThjX8idZNW7qyDV19nCq5d5z8rjf",
  "key2": "3wmBttLL4nGoePDtMKE3covPkMC9ir8HRAuWPFWN9p9MZtgocsa5CWG3rktS98Dsi7ZcUmW65nVCWPe847HF6fVD",
  "key3": "3u59TJTvnreN4B1rTdv93HTCuMha69BtHXiRVfmrpg1vxr5kcDqhhV3fEjbWtAJRds3vaBF1F2q6qhRmF5kZDwfW",
  "key4": "EAmmSYsDZJCMR8YEZNkwNapJ4cKgGNymgVYghMBbdKuLJsG6FBhmCtFLxUpBTKdPZqtKEmoFRWXEN3wGzbJhmgC",
  "key5": "5qqJEKsLn3LVM8ufLNwTSvQS5UQHWdL859uFqdjGf413nuUhppAJ5N1rah4Va1z87kdSTZfPzur3eF8ccynEPLfy",
  "key6": "3deeHXfpcPW5grbaMUuYSprQK8eLPcUVLD2VkosrtVpLdTUswwYQg5AKykERBtgoSumkJYhfFVR8D6dvLm7bzK6F",
  "key7": "3xjP4Wo1fiNMT8oFmxYjCsX8q6nMsk6nd8kWGgp2W5cnuLb4fkbfN7WaZZvmKpXBxLx4CHKPhPuMzQokzmKZNbk6",
  "key8": "27SfpdWvLztXYv2N4K3ZiRQBnCja7tiizuXa7M7xJKRNurZGsBEeuJv561DCowJecBcE62rahWBtzQ7CjcSuHy9V",
  "key9": "4sz1FMLb66QYzLJM7LM2YfrtLLhHP2DipVm53FZCztGa3i6R3SBqqrc52kBiefwgQsTmssP8CVUaZdPW23Nefvqt",
  "key10": "KAvQAR13XVJcnxnk6fuhtUhaNULoizFdQ65JQcP1pBJUh2jAcet4NjMbWo63C4mYYgDdnG5sqpt4muYwpmfWJUt",
  "key11": "2tTVBdhymQE4bLWM9p94QZXZsfQ8H35XjkqMGJCqmK5gX1zBpTNM4PyQKnJAwX6eWDNM8R4tXyS3FN7g9fJrNTBn",
  "key12": "54rA4Q9QnZki6r2XkGZx7MQf9nmcNp1zMmzpjjaPQ58TDkbysu2ywp4rGm8mHevTCAXSpD22ufhtfWjZ3Kw2Y1qA",
  "key13": "XYdSPinV3ybHCnhdwGQbVG8yvY7TPqJvDk2ydXci9DgesTgq2SY469kqk6sTDw4xpYok4qwxL5JoBypNJ6NMvZS",
  "key14": "3HjKnaoUDpkRZho6kMSQ4LzQ6sdmA4d734kniey4AS6MhDWKgW6CDvWoeEKwABCbJHxAWcC1dSpWbffRQxeXjZ7B",
  "key15": "5QKe6c6eoQoioB7Lja8SqfVbBeti9hMFLEDVPqAehn9H93dzkKguk7k1CWFiDE7FrhBz4zBfL2xGQ84Gs8G75bWi",
  "key16": "YJ9WjqpRGpddvqH6hFT4HQwWMFqRbi7pPBPfWja6ACpYFLsF8SDmZsLH7fvcnLfeJaLgkNtRAW5fz7CT19tJsbH",
  "key17": "4VzbHzhPvWQCsgw2MgVqxGbU1PznfvLuBsH51oh6h2Z3DhuZTX22EcP8RqsgZ6sqL7vFLZ9hMmHuSLYqbMFgfVVr",
  "key18": "2xsHWWuG6fbXA1LFQvmMNGxfvhvMdbnJfPhBUTyRAzndK3Eb44BAK86abXtzbmuBBsjTpXsMh5oMd3yv3SZXMz8u",
  "key19": "evA8WveKd1SBbwNNUj37gfHvnYZjGbP4dw9N7m5QeKau1YJM8R5ZiiXB54ATjN8ihff8jiXCa4b61LXzx23gGdR",
  "key20": "fWQBvkwHJV3Hk8derVs41UUr5moY4BCemGmfk8UZPkGFSYPX1WfnF11xwZpZAUCuRkPPZBP8QDnWE5UXoLUj3DE",
  "key21": "4MdvJkwpgbPEbMwori7AktAKr6HhytWoKpufeALhaqbZGnUMRykVaSyf5Zf1cyJDP1fyjs3YzJrZdXhxfnzkri3L",
  "key22": "4KQFddsDbiGsKJnNHZYJNYN9st82x4ugWGKmeFGU1CQ43f8HutqneGGMRsv1FrPNB9hVKke4e3EXWL9vg4ZvQ88s",
  "key23": "65oNek9JYvi7P8Bx9GWou4WfgSAdkG8bSeq8EsWV4b3rfJ36EDLXskJo3DuDa68E1BZxpxJ18wu4gn4imiTUGv9m",
  "key24": "2bTwtFfhUPVYuRzbmhF5G1mtVuRV6Mvj3K43VwDeUHicGfVGnzZiChQBngqAfgKtCiW6Mtq4CTBYUHWaspeUg6cW",
  "key25": "2s6fhVfZdX9bLBRhDkekMB8sMeiNkQok8MNEQpXFhDNkyb5vrLGYEcxJb6wNdt8AL6Q5YGBBvcT35QG1UCEcgSUi",
  "key26": "5SkwZ8ZnNwYrSww3CVbBjJETH9zMu7kk5w1hu5cU4NF2LwD95o8GmjUxNLAyjoaRGhussH39j3JmmRjXJfZjEZMC",
  "key27": "2eVGFdTBdm2hbD1zYcZcScjxj1XHHzBzkhjnFXj1kzhCwtSeqzPARr6sGYTUNaDFPmCnafBGukGmCuM2TbZ499r4",
  "key28": "QerGhzHn1v2A1Tw4ePPD7g2brReG4VH51UhfoMpkKPH2rRzG1MQGZXeyhWQ4D1vvMNr7d8FGAByPLDEg55GPbds",
  "key29": "2chG1ou3ojRWagmvpQEVctFGb7Mtp438ZrRLEhnCFvw73jcLNFgwSJvQMGTBPbUb8VuratTqicvqARWs6y9kNjUo",
  "key30": "2fpqyQhC2nDnRw5L7UTAEoLbb679pEE7W3HDovjiCMRX63sB7xUNzN1CrxqXHXXQab1PwGLfrgiFCFWwiWrT7i6i",
  "key31": "5Ja8yCNzGHseq9coaRT4quEGCod9Kd5AEn46Qn3EfbqqbJsYvQ2Dzepj4bLuurCLUcpUpvQEqsR8AMNpqFE6NaaU"
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
