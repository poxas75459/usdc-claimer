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
    "aP43scwWdmyWkAH9gxXCpiKWo8chNC1qHX9nE9a29bsXxUh1K76Qp48UXaCSefmn8GMJRvV4zkome3NEfv6YgPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gg2me5zQVRMFDyZbWeoSqZPVQUeDqVWJqoW9JjTbLspzydiyfL7zZvPh3tuT6PEMp4BhWqp1ZU18fKTL498ye3K",
  "key1": "4hsyvawQnSLQeGGPAJ2betiCZYQoiT7PiR77qz3rGg6qWV2pnB9obvQxGoQ6PBbv7ZPpJFzGVGPdzZAGghxy3r4t",
  "key2": "5meiyDY7U3rbuoUaHRmiP3Aup2psqhdmX75AmnyD4Rgjnjt6i8jQQ625vWWmgLvVsqrwSYpdds4Q6XpjCULtC2Q2",
  "key3": "3TjEthz1WgH3omb1SMgkFTnPnxxVLoAqZMhuVh264hKbLdJMKFRWk11K2gpoTEh8NVq5rrfSNZAQBRZnA6sAjoPn",
  "key4": "31wTwKdeg64PzrvFFMvE5Btyya44VR6PDv1m37qVckzxZcGsDHCEaRRoDY3sbUCPtBbqmQmkvkctGUZSxa2uov5q",
  "key5": "2HieUS7PKUDgGMbNe7QphmZ2tJjvEqrQeQL8sKTYRxG27S6wSt8qExWVGnhTFwYS5NA77pG8cRrV2goGqjYoZbcS",
  "key6": "ydjhm4Kfz2u69fFU7MgvuzonbGAGyQBApdKJvYY1FvsEMx5GsxYsQ2AeuiHs1TdkkyJbhBd1r6MJ8sEvSAVCs3L",
  "key7": "583Sxrysxc1iA5FjjcDgyBgTKiUoqZta2JAUo9cicCnLyFyhLuXq1yvXZJ9MKm7Gy6D5a8BpPHes3z6A1J1uYkD2",
  "key8": "2kT6nw4Y3u94PCD72y8B7GAaUKYqwQPNL1aqhKC6uQQWUkWp6CEfSr4wcrAsJTXu6JDQ2ZK3cndzepvGrANbZSyp",
  "key9": "wKRX1Y882AxRXCmSbKVfe8URMr6uek2SV65bFYPo7MKbhbVqaW2tjQm2uLMY6RcT3SDEAHk4faLmYrSiNyLXRbm",
  "key10": "3VY8ZvvYugCJ7nMW4fVBYmaHs6r4RqwRttPipm9xcxg37dx7k7g8q5kwKBLLxJSqUCvVCj6TY1kBzgtFf8bg6k88",
  "key11": "BWXHNsL21JXwJx86RsW3WSNkz4s3zzAoC8hRHCJFLyXyfTYdAQ78qpYnmnYjXQ4dVEPe48ghwXaU7CuQjwCVC7z",
  "key12": "4NrFEBekyFDyiP1YM9uzDFR8JVcmQCHpMDTVodr2Vqmcgn7vz1brsWLmfFVmFsyKFKSuRT6ER7oi9DcCsvc6d3ed",
  "key13": "4tG4PrKwNjAUWEhSDk8URtHiLFkavVB3mXjqNHUoK2zBNEEt9x1rr7SMDEd7W6HJC8D6cViRYVBvmKg1EBtyx9hb",
  "key14": "fPyXXBBAbGSmR4dUX28hAQYqCBkSVjsBWiqdpwKnfFBAVfcM9CZRBchmJmXTuLtDCFgmR49JTZMs47mD6HoCtp4",
  "key15": "4xVLZV9vcnwVesiVoqG5itUzx9cR12RYCmcXguGCcDBb5Bwpzd3K4mhMaj7YCiKDKNEtwHBLRF8H95SWd3BKuYnT",
  "key16": "4vJ4eYFzLc86fqx7FuyUr4qPFzhwHvCG81296RXfpQQZCeScujgbuu8EGbhkLBecJRSDyiboYTAm1xhyWkq4Wq1T",
  "key17": "2d2kgcDd6HYEarVL6RNrZNmKRDJSvu2u462vXuksuMRDx1p3Lb1ANivPjCGBjSZ1NP1RfN5xCGJYv4V9ZETrXhyX",
  "key18": "pNR42cZVJFtWhD5gv3rzpzt52wtGeoY1P8JnunnTEJUoDnJmwzkXfJTYC6mR6BFGjTwhjm5tjfcMQtm3MsM2xXn",
  "key19": "2XeVKXLHMUvNyycdh9G8834KhQCbC322NY972XZuyN9pj9vLC9qq72xMTUWkpafmu2HHZ75V23fbQnDQWkif8gUU",
  "key20": "2rviuL3655nqe6cjSdXXav4SouTDnHAfj9JG9bGpHaYZLyyDsvhYgiHPUU5yWKjWqk2gXxrXEkKmHeHZMGbEGbPs",
  "key21": "4Hf5fRAMvjREyNtwVBYmbzCnaz2Grm2MmokhdZdB4KeGUoJf5HF97uGo7s3rrCTpgRzcTYgP9bLRZFC7f35HW81X",
  "key22": "3gWzgSk6tdz3j31DGvtp93hmip9hLMsCF5GtpzJ22jkJHJ15DFw1HZjaDRMsfLWvUTXGZXsmPk3Vqf41tLV7Dzem",
  "key23": "63Y7ci2n9FzJHWoDrJM3JWkJVim6G324Eo8z5zHX79CUeUK9q5zGNr5ybvj3d5n6G8GLQdD9Vso7tHLRTv2VYUQr",
  "key24": "4gMGMbtSowzGEMTjtJtqkWmE92cmosyknCgQYdP45Mrjbxpa4WfQZMUdWLvfFnRvmgWXf12VLVb7VHy1Z6Asa2nY",
  "key25": "5RhTT7iV4TrRHHBNu1ghBkPJqmpKMgXkwtFUN8LxJPM6DfSfb8KHCwb5SkrLSFEzzVnXw8gchso3YLr7seeWWv19",
  "key26": "2cHNngn82JNM9Ra7GiYCpmf7MFk7KngBm7awA95cFiswZi85FB5RQLCBXcWLXyYKx4N5gYkumv4VFVgCUnarWsCP",
  "key27": "wYbDnFSzkffRXWnQ2e2vZRTfmrt5XFrHvQzQBHLcMAbsQX5Ymtx6yTtTMHLoNsQBcD4vXxrBHebmiDDCN81YPSW",
  "key28": "3Q4v1S3bVrGHcxqTddFToVs43drmyLe7D7cgnaxqkj9Ta1uy5VstAENgfF75TytaCBBf6UB6RA5sB4KskwYeW37e",
  "key29": "4GjLNaxHH7QAwXyfyVKVNjgGHaQvETnLnCinJwSPp4rufQ1CniX43anjqE3zD5pECf5oEh5vQ27LjA7cSDVSjZWh",
  "key30": "2VwL5uggBWj76B3CW9TVvSg8GfkeXz78iieqYAbgnw3mtgM54KdgMWwnBdAhUXUhKh4HRaw5QxMKtVUU744SAPqF",
  "key31": "35tUYHkuLkKemd4K9X8dwz229wjmcV9aFFzsaCMagjFpyr9cyw9xQ2ZdwELnyN2YAxMwFAQ6KAnjpwmWDHNmjbJU",
  "key32": "dZjUmHfmjRzA8CNpNSD53sasBVyFrCp83jqiNSJmqQJ4o7p2upYkb8sYRg97AwskMAGQkggWu2GVKNdcUc93RPu",
  "key33": "2Jzsfo6M8qmEKsPZJaCQhukjjK7GB8yuWxj8iBp7p161HhGPpwXMeEMGoKMCSENzu3sAQEe1LGRVThfKHw7Rgq32",
  "key34": "31wrRmRDoxTpo5SxgVLnNfVhnDr3ywoqwGx4Z5ssp5C9KgoUS6doQJn8tVRT5D3o6nhFp8ydiM8qMZzguEU92NeQ",
  "key35": "3JGVZ6o1qR8r3FtVhCP924m9p36EzEJAFcWNotrBtugEypHwFyPzvCkNLNfwPstiV1EzwY9xou6sEyF2GnjDHN7",
  "key36": "3EESsdYWkU83gLKrgeXDhSNRJZnoNMSVVdDiuHLSuJo5BGoN8jGgcCRbATMJkuvGkFnd5Cb8Ur2yNhQ1j6f5AUjn",
  "key37": "5m9QkRAnK9BgD2prSrJ3oacikC8phPrCPgqn2yYpHh4QeRDfPH8AxxsyMnKeCURPqazzboB2FGF8g1UqqNMvLupB",
  "key38": "3K3azZSJpk2RDg8Ssx5rMgFFnqWCEEK6uirsxzyX1yVLM25GtTUaehGghe5Dh4BYowsGz7Jo4z9RGXAJedyEwVLa",
  "key39": "3PQd3B8LBm2LksjCfon4mDpZH2qPxiS5uBsTh4ABiEbRfVjLMmX9jYeHnwSCirj4zT6CJwZkhuhfBKwtYj7waU1H",
  "key40": "5JCMucLrTzHqrTSHwCLNio5kSnhSDfcqpD7yZxdboqeobetqZtRrUCFt8AZCvtGE1UhEVy6TLN7R2SrQq26SUeDw",
  "key41": "5CCDXMrZh5Rynhf5wtKDbo7YS1DxA1642VjhePP1mNs2meyLFekrcNYUfhq98XsWamRgGhnLr9DCnQ61QBgemd9S",
  "key42": "5eFgJci2QBBDJYrytS9MYGXxUMoJN2wMpDx2yi9s5bXCdB37t2tB7pWwuhhJpits6Li2ZNdiQvXbxbSkLHausK3F",
  "key43": "fpx4xYiFsyGLUY1cijXdCiKd2jHTmz5tqYj4ceL1M1bBmmTKi2a2mnQrcjtyV6grPCQmt4umJki3AqwZZGRVxVX",
  "key44": "3rSq8ia6cjrPCrg1BfR12XZV6Zje4gr8ttzMtDbbA7espWgUPcU4TPzfsvEyo1MWhtugv4YVnEngPMjbACuULRTP",
  "key45": "3kY8nxb2rf84t1WMW1ccjmsnKNGfTtxwT2YE7sevjPXr6r415zBBtNN9BWPQf5rFeFs4QvTA5ieYCiH6KCEyxZfG",
  "key46": "3Ey12Uf6aG3tGEBJTuPuafEXs6vActN4b6KkWFFv9ut28Uqr1frTzyhXwj9UyUwnA12o761F59bZUagBsCiqeVv2",
  "key47": "eqrNxiGZoY6ArLUbqCJDUPveScasABAgTzyLNjXnDDajEco7pw5jmHJJy3kzrWxT59KBee2MRD59U3XT3cMFTF6",
  "key48": "3XT2uAM119LauSX1HkD9VKueXV9SuS7xiraKpFy9oHPmDceGDzMyLStNEHFXExiqfuR2FzLpkrbt2ZuNHYEq6RUR"
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
