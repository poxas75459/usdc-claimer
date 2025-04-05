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
    "3AV2ofXL7q6xNLcQGcxb7SDThDKbv1CimkRi8zdfn5CdGWZ5Z8TQMvtcVn2zbYyvvBLwajw9hPFyoe7BE8vbtr4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UG8gGmKmm6T9LSBki1bH8a1R1LjxvdHut1dZ2CeHGXf4G4DE7SJ3wW6UjERyNpji5WP3vPhrKi7gBD4ffxm46th",
  "key1": "4wN1mzbcu6XG4gDCpku5TCfwMRHhVUcN7E8ePY9F6TWgrVQPxeicvoxBqbp7ZSuy2rRxg7nZZE8QZCwU9ypB7EMa",
  "key2": "T2uXi7oniNYpgv5Vg3jNkZT4L8E8XZ2CSeaZJEnHMt8barxgHduw4XWyAgwPME9jaXFkmaQuytxyh83Qa93NbnZ",
  "key3": "mmydFL1sE4jhHVhD2dDXtiVnAo1EF8UXmENBq7y6n3aVfNAxn4sdS7nX7dS2Y9EBCSeSrn6TV72bRsUYJwhcJRx",
  "key4": "27F68is2C5jJSz5soGSYnd9tddqbvQxX3Nc5VSkg3WRThxPX2N1CmDBsGgKfG4Ky6PHRmjyeZVj9uf5STB8nkdBa",
  "key5": "2swcqZX1DL6sHyJKdzGHdckBTZ6JrTrxvJVEmyxCBDj4qGchastzBnbWUyrkDC7RnGEzzYxJhywAC8nYRMcsfppc",
  "key6": "3LLF1o3FjYAVEdkbADtVVJ37ZbCgwodaCcsBjVQW5HSccK2cFJxTDae9knjPAE33PpYK4GHQKaqTYSSm6ASbVgjA",
  "key7": "zYfYZRdEw8XAbxfhnxkb7dRPNqqEhszvQKTa7hRmfuLJmvj2mutFh1zxM6aXtu1tcHtHLysh137K2TK4pEgTz6v",
  "key8": "38Ebrk7di2AbBtGikqQohhSFXfnYyw2LdJU7U7xy3En4qWejMoztfgLSe2bzuPdopdGePsfnjwuHjxS769hjddYT",
  "key9": "3yAyrKpgprboaa6c2xFSmfcUaxiYdKYza5J216sdDwM3FRfHnyFT7sDvdqj8pHLFEQuW9m1a5yVCKpgb1CCv7TKy",
  "key10": "63vQHvBZFC3SXYxEbzWnAvRpcXAwYBqhrPJ6HSfoDeBcnL2NP2fJgerbzqKj1p1bTDvixPsopZrczJ45zYxXxYhR",
  "key11": "41htQq26m9SSv5jELnmfyAN7kF7bjAYXiejXw2RbpPU3hF6umdk1sejpHM9BQ666tmZ2oVe4MA24TaEiJ29Yb9he",
  "key12": "5o64Fvon9dKa2UB7svs13MavF996f9zJnCiDtFwgLf6uTDgsXWXkVRoVKFGd8Zkquz7aZPnKJtGjYra8rBYojSMK",
  "key13": "2Si3XcHmPh2zcbrmoanuAgahY1jx2vrAaWeqzjLgYjcbLqmCaLZssHhJYDoFXDgAnM3pimkojvHVUjSzz6rQdy5S",
  "key14": "5ASxFmcKwnAMP9m4io4zpeuD29MR2CwDQ7fh2boKZYkvXEamNp8nrRzPT4TG9qoZcMV3ff1Uyo1MWyC2f7AFbxni",
  "key15": "2g9WoCwCkvHV2di732wWRvFmiFDGyc5dwdzZuePYEFXwKhz5ibQGnf3SVEGyG1zP4qnbasniMRwAEuNvBy8sgd3s",
  "key16": "eWVbnUV6YQyqQuFPzPmg9ZpKSgSsbdj4CjHUW24iwjiSFeQJUQhieSD5wzGd5kJ3vCLLwgKgrufBpwKiorcvaSP",
  "key17": "34ECma3UzTVRG69TiNYfKRub4YpTj7TWPa71kHMeVQHxhMM7scBtRb8mLVR5LfDnFSEXh23MuBGBVu9bjte511tg",
  "key18": "42g9Ho3picL8M7JekAHTYcgcmmtKhuKFcA2WkJk8Sj7n7m7eM7vF7m4bRin9ejfaeb7X5CuJkGhAh9hZ4Yor7RMF",
  "key19": "3hVpVpmD1i99mimP9iULqsmfQPrwVF62Ms9tif589hQX6HD3isCRpPUFz4QZw86xZFA64UmBMuNSRHK9i3BY15k6",
  "key20": "5YMAggEWAKAEab1XmLvWnL1bUmBMnmSZS9entbx1xLtNFxwiMBcQaY9Eq2bDczYt3w8GfCZGknZTaLHCSgs9mQVd",
  "key21": "28Ka32EXr8U8xaDjDbQQhwWmsWab8tAwCTa9QzggnzDSr7HXRsKV4cD1aiTx1Xg3MZVEDfH8SRj9TKsxEvkG8rWc",
  "key22": "5Xr5fEpfmvumXvx1Foegzyg8ahfg6Amjyxm6muPGdjGtn3xiX6WuCtQ58ud16PC4ez7qSYnLy4fdhj2myCnNaGTa",
  "key23": "62qassvTMxw9Vh2MJZJBwx4S9MVkAaWPCv11EBzoRjX9KKbz4jEsDnarQMu8N4wV6xWb5nbSqQZzhGwDU3mY5sK4",
  "key24": "259oAHMDLjVyyWW5p7SUz1eWFAo1YJZNNhCNXXHovxxDUJsTVv6vL6poLJy7KgnmarSRbWt82gN25KrGYYkfQiab",
  "key25": "4KoFJP3KRNK8MzSpBxtEVcuas9E3YTdFbrjwDVw56CcG8tDoahNeezKuzFgDRNbsbAp9JcNhvwhTunr5WnQN16LA",
  "key26": "2A2Cm4U7pEKicSy431vE4ZhmRKNXZLBJ7rwpuPXgxckVTP2VLW6GM5VqtetW7MJ1RToaasTED9FQaNscRJFtFJgD"
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
