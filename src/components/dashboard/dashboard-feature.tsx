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
    "3Wo5ufHxKwxGsFivUj1cAJjzssEc6m8Hd5avtHUwkUTbe7dwrcMpwM8HEuE4u6te365xsSLFZwJaE1ggvTscXhHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j9uNc7gKJQpeTCtmcAcbMPNBQbWnCrhUjKB6sH3XditSQqBJcp23nd176EuAY7k22bUMBTpFZrPwPihYoNUPKgG",
  "key1": "FuNk1SynruZvebaEa7QaPw3dNXQNoQzjke8FNsEcJ62Bno462XJAGoXzgeDrJCYLof8du8Fv6qc91H2nq8TEusm",
  "key2": "2bwiHcEagHJ71e52c3XnmMK9WZDqzsXWaudV8rYoGq6yiz4DVy3ea5nDpfBa32xFf5GMMEmZDyKMmuzx1tJB8xwX",
  "key3": "Ju9v9yrc2EiEEZLgmTpd6LoUNqN85wGJ9s5LSBSVyPx7p9JyJmHxrFpM6MkKZsQrqNsYJV3M8CfT5Bqk2eWnLAS",
  "key4": "RDQWv9uijtAqD1tNfg7QZTPrkAPFgG6RLc4sc6YuJuKEemcjrf5TW3u9ZTF5VxRZaaKMfrYx9mwXpdVhEX6KnRk",
  "key5": "5PzyQRbUPMvPBdZtBJbxtgZ6qAS4BJtSKEPmpm266fGzZuL4ET9FJM39HzjPbh77Ca9ErSmwwJdCHGrPvYkyibiJ",
  "key6": "2JYAQ7458TkQxyG7JAhQpnyzVHG1sNtgTmWZ9pg3U8YY8pFHnCmAWdhbrSWckpiA8Mi5EG7j8QyZCPxtcsBNjQci",
  "key7": "2mbbM2teZ27UJkQrQTdELP7USmMGW3DZVrexsQECj9D9DZxrr2PznTr28X6u3cH2SwebUUsvTYofkstFXBzzkWP9",
  "key8": "Xns7NozSFGu8UZW8WWf4vgjxAtCLSeVf6MnWSGDSAHaqfqdSkc5FDSzrkXe4WUhTv4EjromuLpS487svHoivNa6",
  "key9": "2LTbzriP5P2aRw3Cr7DDimbifrxZfXwQgisAmafJVYn7nfun4bVuYv6gxKobPXS6gNwKzThtTESrC9f8xuQKeEYx",
  "key10": "5g1bBhVsdVFMm3CTmaCgToPLX5jqvZ91ibvhefQSuAZDi1gPff8c5JEWPYVggBatrCNnztyakT79yZzRG4gjFAgb",
  "key11": "4BSFKfSXncnrs85Yc78x5qpqeifb7dQyU8csaCApywJZAnvKcf4nHkzjbkhRGLvwigVPj915sCdAFM9bdFRJJYiC",
  "key12": "2XmQv2BpbVgbB5BnrK8dSGXfJHqraEyajV9AsUTpsBsVA5fnXcXiQiTEQcekpMHJVAQFZKK9si2YqersNxuPYUem",
  "key13": "iufojCBGh9qDvdtSWVq2RjphgwDr6ncD3aSh5j6uDtGeDX9hFSkhY8YKZPpiXeBJq8Kx3T71Etknj955hS8DWZz",
  "key14": "47Nrpf2w2P1eBuo3WV15JmsGwPAAfMkCQGvLWVeiCq6jamsbrtzaSUAsbrQUvBpxjkpDhn9UoVu6zQokHW6wSgdq",
  "key15": "2wfmf23Wn56MnmcLch1RjZ3h531aadzNfQndtPZmT7Rgrp2vTChFUDJr7JhVqEGN3LtRX81eVeSuaTC2vgHHQdfr",
  "key16": "2awufzWLZMg81jMNvCQB3uLSPoypNhNi1W6AsFQAQKsMDWw2icyANwGEJJoMp1ZmVUYQ7Ws7yr4U6WWgCuMgvqSk",
  "key17": "YocCaNTac1ne42SprDUbukpFpenBLNk2ispkfpSaCXbtgfBWz5MwFiBBVGuiX6ekJyjpcrA7bGG6ZC2kdFUAyEJ",
  "key18": "5J8LdP1n5EhRMtDBbTFuzcfU2LAtU9pt9fZzLaXMtvDdrPt63H4GchAyTbtY8cQS7cP2jciCWN64CQbCRdJafuwb",
  "key19": "Xr82idEtPJfD1LZM28A4WN5qq7TtXRwMHkQBwNjaYEdnVT1Ec3WRmAsVduwdsc1EEFYZJf6fKr2PPQKjAX3M8J1",
  "key20": "3fQNeM5JdS39VuMvg19uL4QbA8BFNURxoZ2kzMYJP2Kbc8Rq4SyvM76odYeajaAYbpuGjwVx5zV38B3uMiiV13D1",
  "key21": "4WQy8dQvtBieEj8Pvm8HnVrLcKFmXccL5r98yTjqcUiRu7Dy7Aeu29tCZimmTeCvFPT85wLBjUwQsRH3pv86jxGD",
  "key22": "2RSP5WttC4yqYhKkzhLgULow6Je1ch56E8hvCCzsL4n63kTAbMWi7chHWWXxWrx97ahrVH7FeaRNxaceRUzXEMn6",
  "key23": "4sTPR8fesaffd7BZP5CECKJENFKn2FqoXyCtLLbLtgWGKM4nuRXQTziztrAcUow8Xv2vfCaNFJ1Agv3V98qmiZLb",
  "key24": "2PWSDnbtbxp5W3XgwZ7FZb8RrCEhH2YfgE3bwiocWt1U4oEwA3Bu5RpnfxosDz81P2geWkkSUr4v2L1CyZMd9kXB",
  "key25": "5Gtu2WATXw8Ew142nMEqqL49ueqtbi4RzDm6Vb6NakRaJox3VwqcF7CUbxP1oJ1sAnpvWqVHi6BgTxXc5gnhkKku",
  "key26": "3P3ZwTAoW8n8ztJzqQMr3Q7Q2m9h9gcPQ4D93jxFMTRcczDxW9PmTZTwZy6FwBKYqDnRSLE1WBCc6m9Dm7gjdqur",
  "key27": "3ShkNYLrnDBB6wiCuiSjJ7QpVz7unqueqKqy3YJmL5esR6Zo7jnVRvdqZurAxGqJp5eanHCEG4A4LaFZtoj5fPkk",
  "key28": "551UpVnHW9otYNVjjwUYsqRAybsmkpG9cDpbdMnPMGQfutk7SzsUPmEqRhtqeHywQArZQ1QEYbhEdXGGyap1fmJZ",
  "key29": "r2zRfmWqbP15T3saAXazyKkCL7A8PXKt6w7fgwDXZ1ZAg8zooFmuHg12FUgGWXCYQ1F8bMtXzTEcGU9cVs1geT5",
  "key30": "ynHFiSb1tPaFpSpPZqMm8NQoa1swWUepMgfNwtiR2ZC8Ur7r8B2qn4sb69hefEpyJYaUJaxDeaQ5T7WSyY2CHWC"
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
