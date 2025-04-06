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
    "43V4QSTjDCqgtS8cP13Y9ZtrW3NqPjEs5AsTzK12gB26X1H9yYgJeCqsxMjoUNLHYSetzgyELiSaVVtcu8F5oPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kD7sPA92MaYc7Mr2VF8DveoSyzZAqzExLc5TB17UJXXDdsz4mxutmuHL98JDjiHG8VX5pYTZEF5uwkfjTKbZCmx",
  "key1": "4tiuFCaeUTFxgcpQrKR24wK6vyRwD5geXy6r7qAuRn7rbqrNgoMcsKLZ5mFhZmeu7owytrjFbHRMkkuCvkJPpoYF",
  "key2": "2dD39UKyXjTHB3YiEpNa1C1KRYE57QpTrG3SuFyn494wfJFAjsCDptpQ79p5AAxHYp2oZfT2Z24NhUFdB3EnkNAr",
  "key3": "3RWvEGnP6kxB7ZC8n8cvvPr9nAyggH3Pni7YdwnHLTkFxTD1VmqZhgNT8u2TzgCNDxcDT3Mh1L9HzwXi8ofEoUQq",
  "key4": "3HZQ2saiTHkoTwdRiPHx1tsDk45yrRd3BupWgTjfWn98y1nxyLF4c5ygEXYKfF6Z6bQqDTmykArtHEyeeKTF9MtP",
  "key5": "39s3swHhgv4R1dA4N7kchTGMZZtM8SD8o1bWR4LzmBoBUswmBGB29YXbQWpYdrVemS9Kv8wi2HYJykA5dVF7Qq1o",
  "key6": "28iTWmbuEyJ3cDDBV4XiM3EPUs8szSXMBki9emaXTNogW8icbwt7rVd3Ed7tzdvo4C86Ce3UKyPFQw6zbDCArN5f",
  "key7": "bA85v74VcWQ5cg96s42V8juDzsAe1AUVvq5bK5VBuw2sUQTer7zgMhd8tbrdL4zX67N1h1RAM8mYoeMuvD7WFPT",
  "key8": "5aLh1RDDNuGih51vakYaHsaJxsSebViWhEtCW8c3MRQk4B5ug9BSrzo7VfxYAnmjshefrNoUTv7D1tK6pW9YfWUd",
  "key9": "3WaVeSQnZ4kxRcxTsMk8FuEXkaM2VFtFcxxijKxrGpwZ5XhsiAk4aCLssexA9nP7L4oe7gTDJhUBsN5XtSmsYCfw",
  "key10": "tt61cHXkFpagj4YhTetJGRBfiLePmCxTjNe4JN3hqhCMnScgZKN7Vo2Nf3enuGQJxKmTbpitXxCygnNt3ZaRFYR",
  "key11": "5Y5d5REbQzfunWPzGZb25nDCNsBvwgGFp9RNoYEPsE1EEHMRy8iE674Uuw12G4As6sxqo8UEkjWTo8CjqrZJ3XvQ",
  "key12": "4iFMcfaU7FoMnPCj96N1Qf5qR8U7gMhWWuJHcUwvKnySDEHXEncKvxZKDqPhXRzv3MHYx5pqq2xdBUtjLy7gFUsp",
  "key13": "3hGfTSD9RUz6JW9vpfqA8q8gLuvbfsHw4WBwneFDxUUS97qeK8U26z4QX55VxF1tEDQAPUrqytRYAj3ZTxBjMrRq",
  "key14": "mvSi9afVMkgg1TPVL5pm7PHNj56xCxZi14NTa14NReLA7d79Na2GtbaeGvwzno9BtWdapwFKF3UYNqo82t9dPQL",
  "key15": "fS7rHRsr9vf7TXZs3ACJLoyPK2dWSsRfGyyydRZJiQYxFknFTCuwGfkDhneDAjzvcbUtfUFQ826oz51Ci2MW9ob",
  "key16": "3PtbUAbtMpZ6LBQqhE6CrxcKna5qyxZ5FMRHaftkqXB7oJhQG17VprTyUmm3kF9Ttdfkatt2wijDVz2AD86g3jx7",
  "key17": "38GdWr65ZAZpVGDqE9eA9CTE1XyQ1i55Js7FuQ3pHeNL9CXzyMKBmAehXme9WnmTo4hGQebvt45PamJsFXT9RV1s",
  "key18": "pQYVsvjDYg21FKFsH4Bj8DMea5Za7uhfXaYMnv8kNJmGBgmtSrTsYDp6UcwurSr1gxxV89ErLgqd7YR7Ev6vBsv",
  "key19": "5b9En3BMC6dbGhAgh1VqT7j8ZkCbD7JXFHR2fpcYVDWMwArtAjq8VYyQVGXUYJME7knbqKETRdmNM2HRSEUGPrpc",
  "key20": "2ieBUKSfwLF6TNNFJFHfmgixfXJcRSZ7kjW42LpaL5zAgazTh6CLEsAD9T7gym9xLCLPTLCCmc6Noe7v7PnMppTZ",
  "key21": "3spnn4rFcgujtuL2YdNx2gDR1FZZGoPAgjqv72qeXPterGM4336VAbvaGF3LR7xwBJYoK6taUqWhFfHfbze3sozp",
  "key22": "3KxLtP2r65J5hyhhUqyMHesdC6d8S5PgTpRniBeXiPZupyaSyxCA32KTYf1BMxhvPFnhKnG1wPqoZXvux6LZ5esU",
  "key23": "2kkfqQvAWb3Y2grgs2w3BHqQURJdsGtT7ymu3u8nCWyGxJzGbfEHj5BeVfjBLSCnppuBQxLJjkNcsEQ5yj1mxob1",
  "key24": "4UC5w2oXm3cKp8WUcagTiUrbUcebS4ntLfWHM84PA9keAxqWXgJsPCQE1DykvHDG1sUAqzF48pBvRzE2fbBCLzEa",
  "key25": "4q3QvMzPhNA2jg1FGT5whb3Mf2DXm7UizRYuwTP3AKFVAu2noSnJLvBZCSWNgUh2mbJ78aYTvMQjpvB9CCJ5dxfb",
  "key26": "5CyLtKu8o6USSU2fJxUGx79N4vJEUgKZdeFEZZCAjJwriotWHE1B98rWCUFQhk86xUsrxn2iAHJdKRzMYzp62qgN",
  "key27": "3f91v99frdQ9ifQAr7vkDmVdGS2b7snEHkxCno4nBEBuRGHCfFuQS6XVip1vopiBUvAPuPEUyJjxS2ax7FdmFAW8",
  "key28": "2ENAz1mSrZBjqcT9J3zyWdKNGq7nY6xPnW3vC32v1ZZm98YQzoDamoojPTrdJKwbwrFz1dpqXrEkVD2p64msHdKU",
  "key29": "5ZuaAdn5nB8Ns4xGmBR9XWZ2H28Ui7RyYeG3Fup76gcNE45AfrSrLE83D3xCZ1JEhKy4oy3V2EMS3GcJ9QXkSCKM",
  "key30": "3XvjsngEKyvV2eGcmbRtMRFNGuB7itLRYoK8i9dDGmKDX7Mhs7NkJSkAaTzAu1wh5DSHyRxPsPbm41eL6Q8d2FnH",
  "key31": "2oAyBTPXHjXyHwsonxHJuCDMtyKZiQaPhckcTYawv3MVSTng4p1Wpxt1u4jqFFNdYkZbhPwKtvZHQgkDK6TtnEXF",
  "key32": "3DkH7RiJWpHZVLwVYfjTRYh9NowszEpA4p6viShixtK1BhAhT1ZhRHgfjU3oWq1NoShHRJuwGfEUystAWaSRMgHv"
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
