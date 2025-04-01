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
    "39junCdmBtsaNmsP9wFEW6vVCFZqn6tzsfwdWkc66ytp2pFvhLdQtuMWbY8p2QuK7hTpCG8mM5WwBJyb4UcGuZYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3727Pf5n4FAnXCy3iHwJ9vWK2eD3w1uJqHunzjvij2oRD28Tzj6iFENg3r1D5hYd2eGY2Gerg35abJfBKqLY8k8s",
  "key1": "44GUk3FVtdUfGEg9NGvJ1ZKXsQNEqKDt7rw8EbNNZK2JC2hsaAjf6aRyQjRYHYtjEhWexd2LPKPnypxMcNkWZ2Kp",
  "key2": "5ajrtzabMyrRCyyyBXBcivozbLNZgBNn2n4Kncy4k6S9WmVNkC7cxa8jzWnSGArE4FsnJrnbood1UpbsjT3Ggybc",
  "key3": "3Y6VVBwMK8gcfHjPhPGZPxhkY33ncvzoRudEZh9kEMH3uoq5poR8NDhfdCJi6h2u9ZRVpahXHs2igDkWdA8UzGin",
  "key4": "3BxSWNjW4a6hqsYoAxZrZ9vmsBTBfDZXkz6ffT5ktGbegBSYAy2437zYg4brn5XhnM2wxqFx3oRxpULxthbnzGxJ",
  "key5": "2cTFmwvcnKQUZ3s7SEuBKKFn1fZd77WqMGFrWfyc73awncMR87NsAuoN1J21JwDfwPsDurjemFsgpCM2YV2QB43M",
  "key6": "67gBjmo4zFjohJWHLQcbqY5V7KrrLWRSJLHKUzGJ4mrJqSwm6Cz8Bsnef6HZkxeA9hRWNNCwwr3f9ZL8BpG8kkq7",
  "key7": "5RytPQCpofGQYrr5hR8PMm3hoofoiXi8x3huTAkftFS8FWco1zaVaff4xBuSZjxgmDHANNsW3Q8C89Z59NSj1FuU",
  "key8": "YuUF8BfEJnJYoL6BN7shXqcus1PyFxwNeSuzT6hVzaKdjvbZk2t2WY9dyFpGsjiJFk6kjdKU8aaNgVXGxLQeW5c",
  "key9": "5Ww7CtBHvRr9pxggtYrpDRmBDM9zkBT2fEujSCGkzA132swyKSrGR2goWp2zByE6KXzi1cR5AYWC8FVEFxdbuJv1",
  "key10": "E1GQ4X2otMNW1oPR43nfVKymeNHxrpx9miRQqqfnpnUoUeKyyfBTp5PrLRrJVQSuhaB9BJGomfNRM5zmAMmQqFq",
  "key11": "4f7GCkgbzF1FoeLA7zWgC27nVhsW4j3j64dUs3d8WnFdTWJ17E6coScLujaWDMDpoQJTaKW5kBEM35rfTrBnBbWr",
  "key12": "2Pi6YS78TbABtaHimgA2tRzrSNfqJnv6gTP3vBUhqN2TLuNikmrRePGtAWfsycczqhCHNjGkmLhmdtPHQJxwh2Jp",
  "key13": "662LV6LreuyPtXK2RMb8dNqZ6ddLQPi5jwLQFpts5rVvm3BBtiRFuEvCQ6oMRxRjyEKm1TXNwQq2uAUScn3cXdSs",
  "key14": "45GyCTqmqdne4KbDrPMCXEgRZQHMtXQPRBB2L4gefxfhRngXTSh8cATjp2wAchxx28mUV5Bgt4QxpPq89NKbeXiN",
  "key15": "3PjqGaoKXeWnUC1xGBav6bduyhWRz78dQNqpFjBkJsW37Q9n2ry7rGSPkjmnjndUBeaHfGwNodzg8SchrmW3Tkcc",
  "key16": "5Me3HkV9cCFTZXTXhafikx3HPorv9CGHWK3JjJciFDCtyatQjade4oLYiU6fFoLt8TW6LQ5YZHZXMTKaRKhstMT",
  "key17": "4kK5yMctdVVgk58RpdnDeig1qrzD6YKVSvcJtttyH7fSHzE2v6cB79wcAheUevxvftyQ8Wukt4Yr51Fy9xcXtWTP",
  "key18": "2sZWxdA9KGrLvhBBDJ3XdpWWq2bXNmgXRN5D5g14tLN1VkX38yBtcoHFrE8TcmphyZMVoLF7TokvTKxDRbpT1NvC",
  "key19": "bdodzAHuK56dNH5CeZ45MCjAN2P66WdBBga2zzFgTzo3LYuZwEVKG5mP5q6v65nDXZHGhn8rY4vn8xwpu7nJpG1",
  "key20": "5pAsqXUoM8F8cM7GQzZq55Z3Xip5dkxPvkAdr34i4gepZv9dMur1UZQXVAumntK94MgyYjvzmzBiwpppaEqKjSRj",
  "key21": "j2gJAcxCkexiTUywR4haAAgedxxG5QzdXpW5wx3QJiyzw9p9FDgmzN16jqZCoanpFe9qzHcbPydobAzPnqF6AVG",
  "key22": "4KzMjXeuUZwWWCodNbi3BcFjdDneSgHVjCe47an5o3xAs5Xi4LYR4995cTNsvgwmHMyUpJQuGA3Jb8YBh8jUuerm",
  "key23": "CpuieEprGPA3KdhD44gRgxQpkrKXU3pStFtcrXRkRsgCtiWQCeFzf2hBNrrz8KyDQ2CsqxSx3ynh1SDE5QU53cc",
  "key24": "4mGh5cMam3rsBMZcxRECE2G8wWhySKLLY8wd9o5MrBxrxZA99xmcwdioLisKEzSpkfTqRxDVFq7VNnmdAUpTtjTj"
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
