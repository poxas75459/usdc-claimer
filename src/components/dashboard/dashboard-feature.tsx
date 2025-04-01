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
    "5DyuLGx1T4PttfpCyxoqWTA7LsBRhg9zKcnvmm4FbEvpvv1tF1Ar1X7HquPnXzJ9DuWxkJrZN8hA67LVZyv8LaFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TeqKY6DHbrWJCw7z4ydWWt32k3QN9y9V4Cai71CYpusQ98YQjZe5jn4dqe7fUkRK8X5sroktU7zE4ccmPWfqSsT",
  "key1": "pX8syMSgXMxKXqvFqqGXqesikfcfhRNLPc9DcbNpdURbpbXErVin93yeaHkmj72geAr49paDGKQ4XLKeHydetx8",
  "key2": "y2e1TkTezYeuAJG6AmNyjNRkoGdVGViFofGpAJEwQ1i7m4dCAXhJJhMHh9t2XGCdna9GgMgbPFKPgNFEmzfT84H",
  "key3": "tJixuF1PJcRvj3QbjxexZMpTTevBRD795H1ngWioMmygieV5KbAZUVGbpP3cL8C7hBgs1LoDFhHBnfN2cmAex1U",
  "key4": "47dYP8QaH1wnYu56xapVQWHKf59AMCJ6sxwm7BnsSKX2uQZggSgmNVFSw2JGL87pQ81wWjCdxVfqv5V3z6qZE7LJ",
  "key5": "3ziBvXCjzLWRb2fB8DB2f9KzCu7MLs742ET59KqPWcxvZiKJZ1PTMyTE7CjPhFYcNDfq4Aoi8ChtoCJJLYs9Vh9F",
  "key6": "2MFAFiVbqodigtb6qQFnb37it4aLh9xKtoWtv71vpr3VitjNcFwWWJrF4jncQi4KtcEoCMdmJMFaaoZuANgqznsH",
  "key7": "3QKjA76DGCDLYQrp3v5hMcXxreLoy7YdsPGT4W3qabJREJ9G49mPx54r2C9FWjMS2sxFJhnF4pje6cyRNpPkhveJ",
  "key8": "2YXY7MXdcpnWPxwoL1FEiGHuZ69gjrUot4usV8h6uRPYcgbXxENxTxf2HPahDrKCP8fCKTVnn8vWRw7W5zpDmCSV",
  "key9": "3JEbd4RgExpUUKeD1E6s947W3W5EcZ3B4bpWN4BEmew63sWzWYnFDf8BRmHESG4S4mtzXtDph23WAcVoPAsbmriS",
  "key10": "4YgPH7H2EE8HvRyKjYJDMPEd26L7xC4j8C5p5DVb39hN2aGvogKkyatwsJcDZ9f6zQE3AYNb2V5QTwkpBCXe9Bgz",
  "key11": "5QcPa8W4HDBMDNYo3BdnUT387rVr2uGNfNZz9CzQgWNqwkofsaQFT7Xq7PPH6cov6cPceyXyvocCpCoAioioYszx",
  "key12": "4c87NEkj1j2SycGmqQnP7WibfrWAHpkyUHD2wUvvwGfuGHp8zfp7Rxk4aAAFnLftyMEFNGU6QEfDVxF6cPd7u4bf",
  "key13": "4nhLqsd6pHzpTggbBaHqLjf3VQ7VAwuCuSozwc4dwYXdpDqcuVcVucNzbw4oQye3tRaYvTswUnpogiE5KV7pJwg6",
  "key14": "62XiUmiydtMSdsvi2oqaDhGphCM2TpzoYFZbN63cJpU7UvHebwMnAmHvSG4PAwYUDhRnR7Nm6kHNbE8HVkLZz2Cj",
  "key15": "hZHcrJ5Bfq1qvGxVUkJzxg7NJpT6WR2Jcg12HhkU6tHgxmnMpdaoYfVZTHPDtb5sBpsqYVkDsezLdJvFxvxtMTA",
  "key16": "3rivCv9CLP86kRuqFxASYJ8WX4NWufR6aGVoXT9W3EUghATkJwhTvoircQpckUW31mtimE3FJETnfSyktf7hUx9R",
  "key17": "4e7Vx2x3DXd19vJuTXThuNkCbshS1NKvKZy7yZrmrEyDDMMHdyCo64VxVvKZTNq1P2zFxQXhMm6CTmS82RGCj5dg",
  "key18": "4WasTNGmJ38pTffxKDMD1mSttjve9EHywfej8X1Ki6NAfJm7vZG7DSQGsCf4G6o9hXdt3NNoFiCF1uhcg9xEY7No",
  "key19": "eCpQHvJb764HqHhHq9XHrQYdWDxVMgXF83qtyfvavjRvAH73aRWfS2dwUc263oRUUEtphh7zBTqb8GTpuccZamd",
  "key20": "3cgu2Ueai3fgHopkycLuM6unKKhwhZ8NJiJxbTdMKez8jSUMYmFTTJ6PokRmY9D1T3zX9P6VVoCSybQ7ZqExZUDM",
  "key21": "2osFoQ1nB2HG8hegyaVdcenCDR4NFxEaz5iDHGFVh6bd2ZBPSFHt7kSJ9HtqokrJ3kgdPMP9tQ7TyGU7uSsvpbEm",
  "key22": "Kb8BEUeAYwDKMkYaduTBxTyfjLv2qu4hLexXD5cvpHtx4D36WNK6By3mLXPnUTpvyasfaGnrnU2Yq7WYhafu1vg",
  "key23": "5froZex3k2FB5bBsztZh7W5jYwdzPUY9tiqqqE5SMn9GGKKTucs35S77hHDnMU7TpqRzXu4udbYLKVLw4GGJ97Tr",
  "key24": "R2iVkmyT1V8BVHaTsMrYtD589YPEnSc79zTBmRd39q6Qxme5LQwAC9GGu6UeEV4CsQcLfrnXYQjHeyByPLCb692"
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
