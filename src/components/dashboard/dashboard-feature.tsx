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
    "4UcyCfjaFSmf3xsyRCkems7C52woMYrTAFwC2VUkHuatKDB3uauJm6y6pTTfAQuMHfrWxSDap6UVBi16BUgKtBMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "485H2KpEEs8vkd7hWvSidCXrgXhTPMuaJr4nMbPvWiPKWUVtsP5p2j7pdABaTrTZpA1frPM4tXygo7um7FUFSpbv",
  "key1": "2vi85PyZVPSyy2CNEuvAbj9PG5hZmTyuDpuMXyfeB7YhCqmhTYFS8vuJRrQQ2Poeq5DDqSdhT1E2V8TXESRxtyRK",
  "key2": "39r4QgmoPdbBiMbAYutfijpDJidDs6t6ajWYhjabXmTT6amTubTNGvRsRE288cQy5XYLSV19igxcdbSw9oGx2grB",
  "key3": "5aWUEd6NS7dKsqm84VWFL9KcNTPkHGBissGZJqupme7Qdc3MZeB7JSN1KoijRsoTKcESbQ1JVZn9mwMEtnWyiRtZ",
  "key4": "2UGtLbnrcHgLZQydwjcYnsoEzJzmHEZpw4kpnYmzmwyjKqQGjdhbiTXyXVMjyzhqL9ckqqfdmHk6Cq7z5kLrjC2g",
  "key5": "vrPZ7HhLt7kdTYZb4FYKxqfx6APspcpNpXr36h7ZWYasUDoU4Jv3PQEgCEBtE3ybgCHFwygscDwyzupP71eNgVt",
  "key6": "3xvTg6z9hRJgmxLHyGLuE1uzrDiX836jAeC1SVnDV1irMQEjAh8Wuij8n43URqK1xcGxkWxvjQ5SmTGQ6QjkEQzj",
  "key7": "1xpxde1NAASQacfCSfPbPA6xLm9TjvTtoMZ9T5KdWfHDb6SAuQMmkZZ5G89qxHSb8UpMVom3h3s3SrEMs3FdSSz",
  "key8": "5v96GFKCM61ytuEJHKnFUerDywJ6tHMS3NQLgjfi6YxpsZziqFV7eZfEDYpXEVYhny41Y8kGj7toL48SCoLWbtWL",
  "key9": "31eXDiSXQWGJx3UnSLDhDvgYwFRdDQ17LunTJAtcccYUrYYBEjrNh8UeJJ7QHAuTypYtzkzfH1LAHQ6xVCdRRY2K",
  "key10": "5eT1gY7tWNoCs8gLNYw6xN2CqQZ4g95u6jYGtetJMFyfYgVLoQfYTgJoukKrto8djLXEmn7XLoXHKTeLajpyMYup",
  "key11": "MYghWP2UCoc7KxrAeD5SxVBKym1H49e2MYphQxYXPavQiqsdsMitA7jZnNTWCGTRn2vbZBGJfFVrXCZGnpAGYdo",
  "key12": "ByCoyQw7b7h3HLotvQg1gM196XkEwbs2d2rNz27kygd1bTpAQypWCQtMUwyDsodon28Up9anaHXWintb6c7oZ4P",
  "key13": "3EkuWcwdZMocuZE2BNj9eHakwtgYzvod9R4SALfqG5mub9wMH3q8RCzm5vjNY6ExqF2oest3AgisqztUinsCCCfq",
  "key14": "28QjJcSRPW9BAeHpA97hMDRZDZALGupxL13MhE85WmhCd8tuyokJ6HJMpmfH2cdsH66A5RGmRvRW6CamNRkEVEMw",
  "key15": "2MFT25P4kbyBHaVon9XN5B1Xs4M14cj34xP1MVpi1JJjfmaJuJmjWb4mw3djt1Fks7Kne4ykmLLSpotTb7UAX7rm",
  "key16": "2RHW7FpiaSU8BGFVc4XFPYiopfQkPfkKpaJYt5zEzekJa32b9akmifBZVDwMny3VVtQhocmYio37nLJjhL2XHVYv",
  "key17": "4UnL2sL4mPhxLu2xgPXZMzBqcq2dTgb93jnAE1atHV6oG9jdns9rmaidv3B8nisHA6Uod6v47MBqULaxbKSm9qw7",
  "key18": "2wWWVmpz3DVKcCKh8Ht2F2hCXuPuZffKshZPxrJPTmAxarhG3JyZQdMk2KKfRWX3TUHkobcNUjsjRWwMAZJaXK13",
  "key19": "4kUFbNmdhqdBpaqtbC1A1QhEfBRhLUxUJg2mT8oHonc2k3Q4QZtvMTsWnMuiNa3XCaAWxbVF7qRGqaWpp3qiHv2S",
  "key20": "5XnucbzraT7N8ojQeEd3acdchKZkCSWDD7LZaJmGpAk2nfdoa2C4TpF187ckJH9QVc9icXAnoebWkVccDyVMQrJv",
  "key21": "2KehwWT9h6JhZ1EXoDnGojBcHCXDXAVTXznVZdK2eqYYftsvgBUPstpMpEfoR36kQwXFP6qxvCXWAhF4ZYRsLbFc",
  "key22": "8r5AhGk7Rt92dNH7Zdn46M8Y426jRSK81RCgF9XQTX7gb7iueats8sbJ9Vy1pbZt8Rkg16tpspaC1URCjB8zUmb",
  "key23": "4xrZ7MC7xZkwGWr9wkmpDFAFdnecaxTBXPmHhHYam3gysHBDhGuThdFk15yVpbK8pXoSJ9mekxfZ8fxRnFwgp4x6",
  "key24": "2b7KrEVtLtfmQhVnJm2TZjWdRLbjpF5aS8peXHJGxJCgdho6ZAXDBUT9q2ceYUHo3JCrLzpJZqxgwT2Pfz76UfKf",
  "key25": "2T1PFmPMay3oTN3RJPYtyopQZTKXJVFD99MrW8AHuBhL5uQ1huuvw1frqaWMxXJrJbYuGwH2oVFNBzDZhFHE9ozX",
  "key26": "624RGVxdLhD9rDw8312LccKfFuGQrqA7JXb1fw9zhWEbaGD7BSdX9Ue79j7qsAJw5stL51YucinM2CWVafuQgrz8",
  "key27": "5SW5XdvYRwxY9c4EueDMVY3iYLmoxyXPhdxtFH2ANUc4aR7frY5wUxiNvU7kDDyNKS4Krv7m1qG8vgboBz7CuaaN",
  "key28": "2GTsmjkepV479YBo12ke8BDpjW8Qaac5mCyffDRGqXTofYvqmaRDa5BWZQ8k1GU6EYS1ejhRuA2sWk2EbtFyL34s",
  "key29": "22QD2oFc9AS366ewJP2bowXdW8MjaBsf7Te99DH6vjsJKTgkX7uZKRpzAgUsaXv5yxyFNfYCUtJjtdpZDSaqDWdq"
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
