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
    "QWDXirHE8arBDHmAeT2S99qJsao5k154R3HiGcKgc9iWu4C17a96Re8j83GsXS55BDTThQaZnzpGoSotUiLCsSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Wb2hyModsEA3P7rry3RuC8DPgzhFTdocWNtyHKTYRqNwpETbzwnQ6aTZiZ1bRRn1qouRXCWZS6UCzKQhaeD6zS",
  "key1": "58PT833jS5rJD6PQy99HM9eHdxBpN8Y45NjrS94He5CgcyyZXswSjNQafbGFtHgmGiftzBx5wXg7sgU5GwNJWUCn",
  "key2": "DkdKK9w1gqR9RefuzvjEgRnEkMrmGvmHgMmb774NaUVSg9ZL3XBeYJf9ZqLgkCC52iQv8Do8gt2zrsrtnxQZRNe",
  "key3": "9SnGgVdPYqjJcSRHCxPHiS9tQhWnTLVZ44YztJmCymXVFXB33kok6mVBrx2txHBT1EXsXAKpp6SY6XhTbMBo5j9",
  "key4": "2bHgMA2vPW7ikZLcFeRofJUhmu7Gox2ZJb5mrHuS3idUxx37n1eFUnKpUETm9zCT6i3Sgrurikpxyijiusr8embs",
  "key5": "36pVCs4ampoSRLfvCVRxYeT1tjo4cZNkrha5nm7FW9xHkugtfBsqYdkJ7HqbipZzNHQsr6d7QQCeMK9wwZJ118Cg",
  "key6": "2z1Uu66rhHjaAa4FPpjJK9nxERjnCtDVg9Rb8sfapNwwv6nzanxViru8RvuCJu3LZRq8MUHV4ER6dY5i7i8cPknb",
  "key7": "2RDHLjWrVtAk5aM8zYbCWgnuSZ6am4qHmjXC8VQBu8N33UaPjvzbvcykFTS2WgkCoyfVkHvNdrHx4L1E4spdcM6J",
  "key8": "icxVwRFsJQPohDb35kRE2kvNxZCQ946Z4PL8k4f6cp7UA76GE4i95gvG1nk4LPBwGtLq9PZFk3Bx293bCzXthHw",
  "key9": "64DDR2JhAoG2vtvnsMJESkTk3PeT5eNSnrPMw7sUEps5cmSgX7u7PKhbUF8bBtyjUTLnYy7c41wJp3SkERmTzRPK",
  "key10": "4bQN7zPCQQqRsfV1w8rsNh5r6RAGF6VhUwLxwE1QZSrwr9K8aNeEjMSAwsvijwWMytAFPgLVy6y2JKNBjtU4rXeR",
  "key11": "N4KLdGdwEN29n1BgRy2rccTJ5JjirERUtD3b4RhrcVKSqLpgJou9kifbQW6EQLCWbVuPz9jzx8XVCVREeky3aUt",
  "key12": "jEQLAz2DFDFEfAVZ2tMd1DR7c7oT2iYLh1CCgaQqpD2tDrzRXVYvrs5LrrZqrrps9CuPM4SCw1QCTnRyK8STdgr",
  "key13": "5E92NvEM1j5RqDbnetVnaXmhzWYwQ33RYNvj5B8WGygHeGWLm3hZocyCfd975ft4JevBEYJ3MEDFZ3kLdYbpWjtX",
  "key14": "2fkesUocQkW8dZ5JwbnAdH55PpvcT2g9viEFb3P1SR5zVXVfKyCfBnUZvxEsQKXwfhiSN61sd23tY81fGW67LcoF",
  "key15": "W3xS7od3mBW3PQHqv3jWmca8tMFSMHy4pz6XMBn2XAjK5ixhosnRHatWmzNEGVd2oV1QY86P4Sd6n8pjMSnL37p",
  "key16": "341mvM6CZG4Ljskv33uQPCtqQHcRpygJNA1xZjoS6NbgH6k4qbKvUGT1DLBzSbN3jPotmXGBUhSF1BHHKj3XKeu2",
  "key17": "5XoWAFmkMhYEamPNJhE8e6x1sdz3K5jR81mvg2fCSPJbYeGGZyc7PmwdKUfKFuJ9bP2htBaZLEn1EsoknBfLzHRb",
  "key18": "2j7XZ3W69EPCQWyDmHUhzCiSc6BrWJEvqaVeVEwbx3jWru5CeXe6Unaxd4jfhTYjtJchWo7zkBQMJpSvTEDBzFR5",
  "key19": "jr4MSvECxv34h9xjwzuQpAT7VQn1UHNYGJ1advshsh3gyNyXCX3YJnhEkhUEq5dMa45qov7SYhNjuzymR5jXvEC",
  "key20": "4J79tuw6TxpYtEgjcftTkrXcLqsT833x1VAzJSytvc3nNvD6LJY63BTWud2XfDtjfheRRDqXuCyAGNnDoWbiXPL",
  "key21": "3eqrLcSg87CepPus3GHPsUhE4grgXHX6AjigvaFzqTthyMLDqea6tBHUvoBBFm4BU71SN451rwSLCkVQbtTXVGRU",
  "key22": "mrdsH4GBcQsN6W1wLJU9vemqyrNjiUujN6MEYbLePZgZyR2BRH8SS5K3UrzeD5wdCUfkZ86fw76ncqh9Zd32ZVa",
  "key23": "24nDfpUP8nL7bBkAhsgnWSXoqL26mwnQaXpR79ZQtDH6Ktn29Nk5qUAm3VvNZh9JEhCDe4LtADswaae29JjxrwUv",
  "key24": "4tdWgYUp8hdYyG97fR9vCP6BAPBu7UDwafyvzLgd1v4hVsQ3JCKrPRrQnW9GB5RfgkDqyQrimU1VqGnXrJo1D31k",
  "key25": "3Nc2KZcXpCJzPGpWcJimdwYVDFNZFnEiKTQxVbubYep1QWPGYmsNsFMMb9FVgu47A5TMzjutTTmr4ok5cJyGQ2oe",
  "key26": "26YXBZjCbFLUDm2H8F4RCopG2or7rAP1GfRFMRqAzD9dXGM6NMPg4CzEzN8rA7ZU6717jWRbxB9WgWBFR2nK4veq",
  "key27": "2SbsAjgf8Kn8K86c4mu4c49FYMhwNi1TRRC4wcQ4rSApgezJWGHEceS2MD2gSa5MQw5EboFbsLQw9XwXjD84CW7k",
  "key28": "2yCELrMsy6gKXS1ozdfnKsTxXE5jtfbHhsr8JEAJXwBbDQKa5V55p61HyijfTpyDCijAdinX3RYCovZQ7izcriwk",
  "key29": "uiJGnNGz6FxrhpVvTRZdVuqkUhiCZTsNxqpxPy5UEwpibnM4ArAT86K7gQnC7QMyCedj9m5NC9ac1jUtzxKXsuS",
  "key30": "3Kefb6W84Yy1nENXtE8J4bckWgad8AVnShuLCvKHAWmXyvYzAzVXS49Amq1T4k6hbk1CEmB8osmYXShNgsCmd8cr",
  "key31": "5BjiMLMDGdeJdiJB1kpNVwsrg9jBJfawE1nvrzyrDXss2iP64myvGmWhun8pcHqtZjoTFFYDxKtEKQm83AFdZXzh",
  "key32": "62DkTiJmwDxxT68UEGbNmTRGM7fK1JG4pSKc4dhLPc5BwdADheC6JeuP1yM51B8Dwz4rN8XQGk96pisoNUtdLoUD",
  "key33": "NB5vVBtj3qFYB1tKuWx5yXsSNUh3YGCwCefMAdmY3UFVqJknE7bMSZmcUJ1Yqy6hyd61vBJw29A3tMHxokWa8ce",
  "key34": "3G4Fw43UxKY2oMWpexwWV37cEbmqW3RfauKHuRVcyV8JrhdsPMoVRtqG2cTTLwSXGGZx81eipujVaGqksyVDWE6K",
  "key35": "3brB4JTjUVD6cpFDcd7Gzf3cBcH2u5cSaerq233AzyQ6JXw1s5ptP6zqhZwWBF6Gx3f1gDhgiP7SzNuH7fbJZXre",
  "key36": "21VmU6G3vs5NDcwrbERcQeq3GBcv3VeeRiePdy4RQoFr6tCX25mWSkpeUmgnLdEasVN4LRnuTc6crCBe5DdkNUwT",
  "key37": "52FS2qqyznfVWWBT79pzT3mPSLJ5YGx7TkivoG4Pv48eZgLheFpQYgVjQUu79QJ5AjBVoTAQUg3qyZ9NBjjXftwf",
  "key38": "rZ667eSB9TeHmy2yRMsryAeJ5btY4UHLDmTgnHdZbBQGDFsQGjqtCP1SgzkuNDp282vtXioBehrpVRkfFBHi4uz",
  "key39": "4BJPNLgLo7vBR627i4Pgair8P5p6AT8FEDGWtiTxvuwsZxCMG9TEk5iFWmwLrq2QfE1C5WFCsq3T1rK9ENLxuyzw",
  "key40": "5UEicRDPRS9f2Pr7N5i5YffeUFArG7ePDwpgqPu5fSQEUioa8Ts6BNK9BvGjDSkqhrpbv589GC1Rm9FM4eRnGSrs",
  "key41": "w1yMGjfx3yBzncbzwaj232dLfXXFq4FnKA9swrWkiRDhFQSqqWjo9d2HgWxsGd22gLEuyfqiKiwG7NeZ2ntnwQL",
  "key42": "4hYdTwCumVN6e5wAhPiV77sGszhnzHwpBUppWWbSwaBVbx6XKH8XnaiRTG2jhcniZm2bq2s18YGFMMu7A3FeYF3u",
  "key43": "2eF5Mvtpny61X4Rbb11zAfDQDBmDU6bAqmSxZAQgu53tAyF9UYBspp14FBwHmf8okAi7PirSKk6ccyDuxnmUQPDV",
  "key44": "5FCw17yVJe3mEGcZm5upYKmdzpCPD32iKtqa3xh5ir8UaZNM7pK6knuBiWdSAgJqK5CYssE9VaLf4rTv3eJAFEsf",
  "key45": "2pGnu6S4V8QsQ4e1zcvVWu92qrKDiYqZ9ShZsFxwrhyF7L3dziS8i4b1fYR1AfWK2rTXr6izzaTbhg9DUbCHthmn",
  "key46": "3oGtT8zUgg5mJeyCSCd1FCHmthD399yrvRtBVouBEsT58bYnP1C5A2et8EMdmrWSGfBPY9hdBhwqjKoXpTQpJv5J"
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
