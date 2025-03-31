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
    "mrWbgCK9r6Zt6pGBxydBhuGVTwfuV3vqWznSWfL4kXmLvZsnmueXR9JLxdPEoUoNsw6qthXW4x2UQmo8KXEdPME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tNeYsPqBFJevUXEhnX1c1LBQnDHQtNd1dyLK3Q3TFqX8onJ3q3LKyFP41RcSTupFMy4kpXwKKozndyuBLUpFYs",
  "key1": "5GA1P85ZWuDNbLGnTfgzNseMdnjxK9RhW7yHU4XyfQjxMDVwXDWPpBGQpveg1imYqBZBLbg2efCe1q73kuPFFgvc",
  "key2": "24tHgZqCFCxNV4XJW5S18LeU2zatRyTseyziAKFDqY5XMBp6teYRsFNGsbCLrJy9sqyFKQdMWwwmPc286uek8RNp",
  "key3": "5AGsh63K5LkGYBirLrKdV1TmoqBA6Rsgk21ZevDoKyWvzG6cpkMwZJAYaeU5DaxaSwb8YJEsyXHKPowsgDtqM2an",
  "key4": "2Dk2Xnvufikuu6SEw6uUkRMD3m7zAPe9NdHdborbwUmv1T4Sm3QDBCt9HuPR4jAbr1YtY762SHWNDQua3LkgU1nx",
  "key5": "XFG9E2qSSfzStZVWE7i9JAofVaHnhDPM5ku9WZG5UBUsvGBQbo44PwqsobYeYCLiafMUAes3fvfb7vUg9MWdrU8",
  "key6": "3z6Egjk3EWJVNAGJQdbPrzQfQLiiitR5vcVjGLi6Fge7eVUtNgJnZUDL96nn8GSZWvGqdWUtcCV1wNGcTd4Ag2dP",
  "key7": "VKaRrp4cHYvepgQi8yd9Hh7N8zyPMB193shfBZ4Xk47PCBsranQXuy1YnpDpyiMAfCpX5C7bVAkrM7HTwh1rguN",
  "key8": "3TF4C8BbP3x8QvWkHsu3oXoe586Q9ihYKuwX13ynC3H57JGfPDnCwgSkdtdBFL5LGDFFCmRDveooKNEXWZtTWc8F",
  "key9": "2Zm1ZKENsHuTcZk7Ricg6o1LNmFiUQHihKyZ2ehCERh5i2L7VzzGUXtentELbNwFMJsfusZwv8cXhsLrLbWCDLP",
  "key10": "41KUGtSCoRdyso9BQCM7infJ1zVuMDMGVN5c6yC5cSx8a5f6hExAXSPxr7UZootKcLTzh5d5kttKbisY3QamoK6v",
  "key11": "PXDAoFQazi9AiPVVi7w5NhJ8BdgVVvpdLZLvEKtGuZZy2XchNgwErmnzg1LmgRvmMgJuKZBhNYYBmtC1p8UukMf",
  "key12": "4KNbuUqLMGsLrVcz4KsSt1TeN9GkVc2iR4xgRhYZaVi84m3tMgxzSDciiebCJh8JrKKA4BUCSYmGRzZeNBikNi8N",
  "key13": "6399HQzE7mKtvFpTFuFkJgqhGKWXapMZuNvjLwEpYQMVBqfMec7e79gpy9ELWYrVoygU9kXPH13fS6XcrRNDLgm2",
  "key14": "4YvrV229kYWkM7EX6j5ZtuTtKqpFBYu93b3ZEyFFGLDaJSuRtcUhbVSxKg6o5ob6pFT79eymmMopRmd2oJzxAz5s",
  "key15": "5bVTpY3acXB2qyVgYoYTTBfX2CUvjRLDsuGvP4j1oWGrXKpcSbZ4pQrtusNc2AvNfHr2AwZJMrYoNLjaf2pS1rVb",
  "key16": "3xhXQqUA88GSuRQJnjTG7suy1vxfz672XQCBV7iP1C8FcYgyBFZNN64j28WmMM4bwT1FKjBJA8G9Fopn281QVfYt",
  "key17": "UVyAY72XHST8R3kQLSkfaK4ak9Cefoxo6cU5ouenNgX4qmo3n8wSWsS3sfS7dsjjW7BRdgauTyg9WxpiGHRrQbF",
  "key18": "5x9nYyq32DnJ9ns9DnmdccsyUondCUAXD7mnECLcDwgspGgRk47RCAdxg2bfGAaKBprk2JQmr9CinJWCY75i96gD",
  "key19": "3qsFuWf6SSm21AZWw6JYH8Vcb2CJbfEEhRtfHzJKHAgBediE96yTqRQaNr7JaSPh5VYRkm9VBE9s4DmkUCfKtR4b",
  "key20": "3ynPDvHAjHXE3mxUggSnUkJ5oHhcwfCiwVAsvJBu5tWoWTwqavcWfdb8YNQceg4TYuyobgWNFiUttPkaRRnkRxYZ",
  "key21": "4fq55dTtfM2PgZ9kxCauTMRo5FRm2cH7RB3pu3YtAB8kKdzoqaeh59G3z1gywUitFincovNoPgnTJmsJiBN2iAvN",
  "key22": "2vQqkmiuuNhLkuTWkEpHXMY8WyyrCMnVBC2sQT7xhiLGwFKpGKYqxVM7x2nWSXEfnkGEAtJxBVPBM8pTZpS7YH9K",
  "key23": "xvvB2Y3G9jnAUUbcRUj6MMjPNer4zS7PXe4CdaBNj6NUcXvEUfTCJUautr7iZvgR2GCX7V25Ph4jAQyeVSAorXN",
  "key24": "4FN6oC1vpbYWJ8m9maCCpHWFjqdATaZThcJrS3m2jYnvDTcvCUYCAJ9T25DPvTXuBhPw1HZ4D7U1jJjGHx2KFLvc",
  "key25": "4UgJ14BXeP14sWE329iFpvt4HVPwHCCDPrV28jQR9KPyBuuNwhVguJyXJKMzYoQHa6Rp1uP7oytgKxSevj3X7Sd"
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
