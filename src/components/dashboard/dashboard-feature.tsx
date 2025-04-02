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
    "5NzqVQCQ8oJbhwYKWvFaXPtihmDS1ryfKTKVEfkPg4Rgf68WBXN2DMcZYu5zyn4EkyEm86imu9Xg7Kytp3qb3MdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55sL9sY1of9xUWTLS7CMjoQzbmDsNDM1n8rMjEi4KWb2BHG6M2bYQChAmVXs6sSZcHEuA8An6QVqu1W8WqvwPBUu",
  "key1": "4dCYdJ7x15uBYzknzBvyyt67q4tRJWw4ZKaMCPTbazqWbeoVZYBoi5thB8g6psRLyFyBCuQ29X6uVoxorRdWHL8f",
  "key2": "2WGwJqVjwLrWtR4KMbs1qqMphM36sG5wiUZgHRimnyqFTr8AqBGhjspbw74gpZ91pATy5ogsWpgcwcJUfDFEcV2M",
  "key3": "5QNW7mRucagcumSmb7JXmK5sqN3izxdghBWY11mgQmWvogwCsZEHWMj6UXeDVP4sJCZF7VDx9wW8S3C41azGczbe",
  "key4": "5UZJ6d9Th2MGzHTR6Tqse27vpGar6SgijVDcu7TyBdF2zfNtSMjvgCfWD8VWbprC7ZQsX7D6M4DkFGb26NbPS2gk",
  "key5": "37QFgonZ2AAn2kzHjT8x11Tot3KxGuywQvzXdpDaa3X6DG76U7iDrjUrnvDxeg9uLFbnZ2SupR3aqFXaZvZB661f",
  "key6": "4uYjENzCPFCepnmBEGrFidikH8CgxsPgoM3X5VngKoRNMVhEbVF8fzgSJGsz9CqtjBNtoef6BmgbT4BT4SCHBFNn",
  "key7": "3uT7NXM1th4ekdx5jFP25YrTvPH5gDAPS58yBSwmucGanFM5eQGE7PCbF1SYcbGcTMC2T28yTqh2c11FZeFomyR3",
  "key8": "4Qjn6GAavm4bU1GzcespxyArpv4sDobEt96cALagrtYbcsYGYrccNrhtGdnidaV6U3cRMVo9jakZd7gpxTbDNErs",
  "key9": "46QwJAzohk75VoMKJ1coGKmEDj9K3eSbhPgHCmhxbNe6iFDEwueXfcVTpXnnpSRNZnNiDCZTDDCTPVDFT723opYW",
  "key10": "4kLRzKcbVXi6xbYmNc9nua2qXnC5SXaxTYCqGPqR9RmPQ5fyGue8DuepVpNHCXy9463A1hRE64d7WZVGF7p2kkLK",
  "key11": "tjbP91Tw4GPW3LCyaZkf3nvLqJD83ZERXC83B34YHtzjai7WVHcztvMMKMJVXrZHhKQuH1sbF2jYhD2ZU7XC3kR",
  "key12": "4RDF31ucoEyp9wmHmmtaeWTvisGjw1DoNDtp9LYHdse5h5TomcTGEbrk73GLAER5bMa4n5qBrVfozyjWjMJK1CHW",
  "key13": "5QaDtohtk9b5RyGPGjvMR9e9tVd9t6Q4134TmpjUudcoeKPXZrdFMSaFWr8QYXuukuYqEnbsrNaz5W9vWJLU8Upq",
  "key14": "41gbC1Kam8AmohFVaDDGwVSsW98wtw3UGddbaA9BxufZvTNoS2dLQMgfMXXMgsyw4fysXoXvfCFoZ8YkWVM8H1at",
  "key15": "4aMUuEebPpSxugFW1gVLeeL1haJqxjcdgEzVSAEMEdydo8f35nCWjUEtX3bqhAtbXU6XGrFfUqQnQ6Sa3ACWcGNb",
  "key16": "5kD6rdW5YVqZis4gJikxEBcKGiRJuwQkL86tLazxcbNAFzyfVVDC44kfhsUixJoN8CCgNQ7vztk1swVavaVWisry",
  "key17": "3Sd2Fbn8oqEfKxjxseJY3aQ446oLVUG4MLPUxegw9h5iL3fNq9HbbqaPRGua8HhBiLVrF1bfZWYt22HR815WRTRk",
  "key18": "4TaGpxP9MJzT3wMowr5eSumMgHhhxSGN1cFi4TF74v6KH7LLbQd3qo3y4UQDVkgn7JzEgKbiJ4uMDtkJtHybCxzF",
  "key19": "3N56FUfFmsFFNLo5zUx9rX8rUxe1LTxotMidmDZVsj4A69wBM6oaXiPke8iGrovA2BoCfA1nuw7sBxd69tCw8KcM",
  "key20": "4wo5uB6XATwewy8crS8qaYGHz5yqSixKKbAFc7zfL8tQ3bZ82jQLksU3T1ypcHN9v5enk9cnsxBDhswaYqLzoK1b",
  "key21": "3knfsu6AzqzHAcmStoMeEdHUsswUcedZJboZg1PSwLFcAPzLSTr5oSLmyAscBkpi6Nk5BCrRhaK2DfYTytHozrC3",
  "key22": "3axcE8rdVaxG9JBobMYUnpcFzJRNJEya2AxuceDKjqEbf6KjopVDUH7eqZvSuxT35ZhQkZ9SquzD1pSWUTPf68rs",
  "key23": "D9fB7m5LRyuddqKeQ8Z6hKQ8xfFa6Aim4CGd9pFjbc4DnihPNaWGtwjtwQQR2Mohjcjr3brv86fnLumADP7wqq9",
  "key24": "4W9t7NVWixLsP2o4X1w23CiEaCSRy4gxxf9qBpeMjzGn12LsJfrxSx2r8Q71w1KoikuSyzcJnRvHmy8udPM9vXEd",
  "key25": "5pKBoFferhUzT1TJwPmNMSPhqXjq9D9ZQ3SCepc4SCaeoKwnFy6UyWGRN7C8KWoGzvQUxGivQuMgPGmobQgJivm7",
  "key26": "3J1aRqb3VVhCCH2ZxynvrU8wwZsTLLkiusquHBztQhJjpUXKx6qNt6ZnCUmwroZvGDKzFsZ4AoRe7ymKCxyfCw84",
  "key27": "23oCNffxr2Ff227vyn6weTQaERHRHCcbeWJdvEqfBFhno3QR9ZPwNdruMtuCSZT95z4gHKpC7kuTxz7nxfwqvjQi",
  "key28": "5kn93vxo8AfsVMiYzkfyuZ4Q88Na2qLQPyvdLcKsWXsxfC6qJEKWhDgW1Tu5Wu8AyF7vDnHyazE8biFYsBLZu7uW"
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
