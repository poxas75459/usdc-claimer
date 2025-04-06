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
    "NJMtB9fwVJkoYzWhMXiS4Ch1rY2A3UFUtgG5U8J9pv25pNBPouFaBJNE7ELhfUZVKaH1uxuU2p3G36tdErTjE39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPZ1y2Zn8yZ9Q6Q75SbjVpNcD2awCScJSDDLh6Uzj3JpNap6dfqJgLUjaQQZTh21iDjhv5bBRv4123eG6BYgiag",
  "key1": "2zydfUcZykTtrnYqnRBbD1wjXk4mbLAjKigNw99qbJ6iefbzDjVssP6hAoYHfNnrbmC2PpM1MKZWUuPkxJv3fGe6",
  "key2": "26b7KSkVxyCB26dPTvTRFZU7L3o94fJjFFdBSmm5Hxmksmbwu4NSgQaUrjXoyW3r8VawfSkL8ouLrKxnct9xWpdL",
  "key3": "QECC9Z2Rht2AEF4iq9mbeEzjAGyx9vjruNYCuPyfSF7rogY4BzBAX7x5KhVytoP4HkFVyJpKDaEdTFEWYxyBBds",
  "key4": "2xwSZmjFnfgApnezU1kSbRCG1sziUq4WhUjcSvE9AwSBUmdUrxtjUreyCkRxXH2hG4iizevsHJzg8dML9Svk9y8i",
  "key5": "2Ef4Mm6MgeiCudv47fj3gUMQk5zMNz2cddVDru2CM72uJqYS2fYkuXTsKGCUQPPzPGWcn68Lg2UtWsqtjXpbgNBx",
  "key6": "2qNKH5zHyT2sH9wexoHxgWT6d7F9kpUP5jxj493937UHjuW2YmuRueYjxVtsTyzZpLh4w8KbRpemS4BNmjuTLUgC",
  "key7": "5jMUU1MB9wq2jv8aW1xPnYxCehjCzmfJMgt7Fx7JjUKBegzhExVSKJ22voRqPSHazYo45f489UUNp1tfdxnRt7ge",
  "key8": "3zkL6Gp3PZVwWaKFUMZeDtZpC8PdmcvS1W5petEWdQKgW7NPNDmVk7oA3SM8qDj95c41pXv8QCoGLa4wuheDCasM",
  "key9": "2emvZhm3cXCCyBF89WANU28huJ7SRq5Q1gkEZd3tdK2seMSJNC44sTsoqTengKDLpKbpfLpvLmTfK6FSLRoSo3Wg",
  "key10": "GBWL7ErXBh4xhcJrKueqf7CDTZgkC3YJRRjNVxnk1KBzDBVorwgj67kY63VHDgu29j3eF28Rmi7yk2Ji9w25RxJ",
  "key11": "3gUAb4mCb94CtWVPnJjx1fuUVVEprCYneufz1TcPrMSKYeEnTqL8BCT2aQLffN4PwfkRRqjYYeoBCQkHePahXjH6",
  "key12": "wvr3SZ23JTL27Dw4rcDXqe9j9T1741swgwoyVuTVkSeXQiMA7rbPQEfK6exRgCBZa4nVwtUonhbk5P64hgagjxU",
  "key13": "5sAtv1BV1seJvRmVbnUSjzX7uew7cSLhk8QaX9HeWJQwHDkHX9h6zaQqJhoLbHfVtx4t9hYwd5HwxaLQw3g617DG",
  "key14": "4otXw4kCz2Rp45tS146oNiRryR64AWb8rN7BSfkw1CC47m5PCWJVzT9dVUxcvT1edExSnUGwBjctexBj7yKPg6ks",
  "key15": "2cgPWLqXZzCvKvxkSGbTWfEjocWBcq9yBXk8vtzzCErfnh7b38fpksNdGtTBJ4nvybwKavuhuAwZUWBcg8EXFtQ3",
  "key16": "3vbtPws6Zd35NYw6htcxBZfd76XNRXJLmUiNoLUgzmCYUYgoCXHuRKB1ipTKyPJ2wryr91nCgStM71XogBXMXCxb",
  "key17": "4G5k4ZAQNYL2xnGDVQybfVQm8YYbnem6UYo64S4YHHv6MbrRaApgqz2mydYLrqD2vPypTWv7dp5ccUZiHC7eveCH",
  "key18": "zUag6ikeax8k4JL1Y8dVu3xvGavFGLEzsbxkrPVkAzv1EREmG4khZQQejiwoTMwy1SBsdpvHoQCiStVs6nK4e9R",
  "key19": "2rRHzxsG5yCkc9MvG34De39dyXiSfjKZM7DXMqKZA7qzYuqWmaHdqiSMVBrMnCVbNQ24wtLoQuhcY3HVsm6rKtay",
  "key20": "4m5aQy6u7qDGWE3sBoB1vBLo2G33usVAQuMg1aNVXSMg2S6hqD7Sef76h1FJHr6EWF2eXjNagvTDNqBokVxMFUD2",
  "key21": "4fugphqao9K7mfTfABGTVxoJzz4xym16DTM126RK8MV5XwYhDfj8jwjMaEQ78oDYgBEoTGmP6ENyMh71MiZrjhHt",
  "key22": "58MUcYJR7cA9vcN7LNJZ9ha4pe51v7TdaVgaVEhGRDCAqUoG6mGQvZYSRCC4SyDGgQY8vdGoQKiHW4SCaKm88euR",
  "key23": "5gcSkPyjuT3L62th82K9TUrEANvxwMEyb4qYMHAVP67ceh6JJr5J6EKi9MWaNqQkUj9anzyN8k8eDRyaymsGhUdf",
  "key24": "5XFsTgRGwXb6Kqnmi3CEzVfpFEdwmVthUpcygDiEVg8pWnYpD6h2SA4hufuMgFjzacG4gNR6dV1QgKQ2tnkdFQmH",
  "key25": "3Wt7NTcXJMnSu7KuH3725hDzGQcyBtRAgJgCbezG3RitRrFu4N7V6piX6H3AaRRExYteKezrnG5sVtFrfVAzusMA",
  "key26": "43Wzjkufv421WdxYu4J2WxytzFF4gjUzyMem53myZMaxJDbcC9tCzELpMG6ZeMwbzKCiSHY2UkgSnkZsM5co5EaP",
  "key27": "2Ngnhp2HXjB2Nvkjv1szTvUXpZifk3R9GobN7NcaJtSoZte63w88YFZAtdF9SWjFxqf2cA4HpGD93g11PYqjr2Gt",
  "key28": "5Rx62Sw4EAyfRJzgQAEStRKjrqnKi1ohTaFNktXFfXgCfDXsfSEmkZhdmVVaMjh844YTsyRnq3vbqHX7MSLQ327b"
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
