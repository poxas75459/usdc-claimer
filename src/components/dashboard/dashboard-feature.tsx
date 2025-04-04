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
    "5kEf9nyopZwb47WPucex5xhJ4ZvvnXP6WyZxG1V8WSLNnM7qypubURPo53rK1Ra7fiz2RZEuDscMCEcUaWTr82k7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTmW49dMnC3ZrydhSEVYDjSHudGkiTaFNSFYDnhNP2CMDwyFC1TmgEH8ZeeMZaCLR1Etf9WQ3W2Rrcg535JXR7P",
  "key1": "2dTiWYukATU4rBJUpy1FA5eZWXBojRFDgvGHMbgFYVGLnJk6ggpCqcX5Spg29zUpu6XLdq3jenSqmrAixsMYs9by",
  "key2": "4SThvzNSrGC65aowLRChA8ZiaoSVgCiFLW5zuHjaw1piGX8RYTyfHFA4wScsXDmHwXVYueebjo2uzzAiZBNVPdVi",
  "key3": "3iFXEWFXLi5HGsPVmpgTLW3GbzoHvJaWug7Ha8uQei6b7pZMhMHKzunP3Pw1UC4MSaBpmKdaKsf52xbSDczSS8aR",
  "key4": "3G8KWARRAjARJ3FdznYAoveY1J8CijZxEH9g2g6pqWpo1dJGkrhKekVGxUG9DxRCyBLijjxRrBQTVmEfw1kVaChE",
  "key5": "3kmc3LF2jDkX7bcK4NqLJ4Qe9xauwD5ngV2ACakoB9ukzWGcRJ16evx64z1iCUhrjYVfhcE6pJLwA4TpGWezpaJi",
  "key6": "4ZhPyKbuK6jdt9rdZs5Zg66skvuZC76kasbqdrkFqtHFMd6YiLvu2mpN5q9UWcYiKYpcUyXhCEm8RnvWh8B3oKDf",
  "key7": "koLJRuW5MDr7LsZds4dcfnkp4bhXRpdiHCa3tXKmdYJUuErh5cdZsV7qhWrgsQVXZsJ6CywYWzjkLAcHuRcjUMq",
  "key8": "pYn9Pd4VxrB9gdACxdBFDLnZM6NfNU88J7TXJaAb25U91CJNX1QAH8GMn1uX3xgQEKYUeEZAz2Pnh3oS3u1cTT7",
  "key9": "2JYc5B8rUhpcSG7YsZNsxMCRRNJcNiXKg11wfeXKwrBZ2ZcvtdqAqxFNMjCwsWwLXZgU1WG7SMpdb7ruu1e116xh",
  "key10": "3aHDrHPCEwXk9pQZ1Ht5UpSbDtioGpzQcXxGjJ26xSDzT8ewYVobUYRWNdJjgKNGbjFe1Q5KeUQV4TxFXKCRzGDF",
  "key11": "4LWmFhWpsnZ3SUukjke4BcVkyaGtJaXoKFoR7RYyWznd3EbtpoHYYK6qVPaY3bmHWGH1hDSzaueQRPUUBzzQSJPy",
  "key12": "iRpeSUQPCJDxgP6xyjuKRULy3QSEkFES2BFdZEatgpMPsdtjzyc8cFXyLs381D5qCEBMcavMcKQUoEQ6xzQWmnz",
  "key13": "3JeXWJAz8Mbaf9vYA8BThuqAfFnnnsN1HZguA6bnMGC7K1ENtfyygHSPDdKg4NCTCkN3QQy6YbuRtDfTExSwQqWJ",
  "key14": "481BA6geiKoBQu8cUNPQAEEgtqqMu72Sszjii16Zx5YwCpPnTs1C4bKDpzu2MfUQ5UDjr4dEzV8jH6wYubm9tt1e",
  "key15": "37tkH1HwW6JSGLUaXiwtKeoN42We52LiJ9xC3cdg234pqEam6HBBYbpQk5FG3MzQuPb6iRgwQy1YZ2gkdp2GWMKU",
  "key16": "2Ro25iugi95c25CFrWmAsYSaQQqzrW7NzTbWf8L2R3smnzhrSvTix9SWuKdzd2HjxLkEgmJrTxsqr4jHLWfRbYuy",
  "key17": "5eEAHDcxoSVfqnMk3a8FVz3L1L6ue2cy3cDjcd667btW58BAiwrdZG2jYeiwXKD4KU2y99n9MkoaaYmpDWudHguz",
  "key18": "NscdynnqCKtLYAfDrK9PBhHJzpe9qPf1vjsKNtSYzwyuUUMFCFfcQhVd6EJYkU2esgQmNR9y9U9U9qfuu9EgNJ5",
  "key19": "314dKVp5tkp5zvy4ChHR9Ccuv4dah8FJVgHaNRjaEKQWuapcSn3HGbAEodjfstxScptqbdU4XKssoCoUQGqiK6q7",
  "key20": "2Ktr1iB16h6M3CkH3ACSuhqPfot3JZnz1j7yikcXd1iDjUUuW6R3JFL47Z9ZZMo3DqCayXAYBxe1iXVvcvPUL8VH",
  "key21": "2wwWoZhYB2s9h3ZvcTQMboPPpw8YqKEgmY4XcnLoecphRejPHYh2BVuV4c9aBYdvKR4GsMAqFdJA3BuoJXMubDUE",
  "key22": "8bArJaEuRv4dnhfMFekBwiQ27cwhu85EPHjBRNPE92sHZYgJj9kXcb7myBsK8vintfV78pL8tYDLC2qqhBStqX4",
  "key23": "5HH8qKzKr5RRHUFLmCTuBcH5NEHR7ySjQsG3qryqHyGuvd8sVGyQezstYwnpWujWi7xgH6Xexd5GpKrXhAM2t4uM",
  "key24": "wyb5RzdfevLsKkcyTAAeATufnJZmuMABLaAnx6kac8KFjdnusbocZAX25VCJ27FXJtXMGfqsyL3R76dTh6uqqCV",
  "key25": "CN8vSfYcWGgwAWf778CfVsfFi67GZaZpDh23vEUeUg1YAYfNWun3AcUZ5htd3TkoxGhX6Z19fdEctA6JAiz7zNw",
  "key26": "28UUPPebn1jbuRDQeZWA6zw7zngA7N2Y2Mx5HAkeL31FpQPpqMRWTgkTZn55ExXJ25jkee7u3S2wksPmcsyaGUKS",
  "key27": "2q4TPjHk6F8YF8QYMWXCa2SyiF6Qm4AfBF3fSksqy7aY6vUufno3cH4UJ79W7WjQ5hhJqT2DMyLkP4Y1SdhrY7ZY",
  "key28": "2kuKztpPzQjpo9btv2pwJ4QKDbDrSasnWvNPYupZzvEfio9z3aQv2XcEm92Lx9TQyz1nap9hL4NgXm3pRCWYEefd",
  "key29": "3nfnyZdfc8pmDjuj5saR3ofkNwYaZzxJfzMS3EoEHbB6B27JJnuZbbrkzR1EzA6XdBSuZiYkw2cuuekJjXEeMvar",
  "key30": "65kpSpa9iSKVSMD7FVq7gxJoY7oFndTc9qZECkUniGbCP7NZMPzPPWVH8hhLcAbhYL7DQNTi2dUqbUNMuWXiCTfG",
  "key31": "25BeLCfo12NinvEybM1Wiq1HFKiCZu6Bisq8j8UNXAVebDKwhDRAza1wZH7opjAr87SfWu2YtdWezw6Ako3tr6sc",
  "key32": "3hxuW8xF6dFZjg1hYdUnwo2BqWt2SnLiHnFC6ScqAJtwn2awSHBYPsPT7Gkwu5ro2MGFLFHLQKuqF6TBVyEXZCem",
  "key33": "7QPkh1QMVjMJdRDanMmAWGV5RApinbdJkspzvpxYaA4ametrDJyxeq2LMRgDx9eXuKkeUEoyd7ccVBEVcgedSH2"
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
