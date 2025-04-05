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
    "22P6LTjSxjxrxamadqBnnX1mfDUUj9bmm6kCpf42X6MhtqSA5Kv2ebBene7STv4Hdd85TDUXxkourhru3zx7QHAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCV68NgULX5QhoyYAV9y7ECyihKRBdKsZYh1xxAjyveGCkQSyJZB2wJhCbuJeiaqxi76ZfcUfw4W4kZ2ZwWAxRE",
  "key1": "32H5xywBcxrxcyNvUj5KzhssYg7xw5FN7RSQGyB8oZLUcXiW3vPvc7gp1V3ANFgP2oLtCmzMKpEtLzf87sucfMyw",
  "key2": "5NawB86vqPau5gAurN5QJ3VUhKeETShDfesSCtpkD9o2jJSNbyaPzJbFdWbhpR5BkGuFeATUY453RFC6Pqgr65si",
  "key3": "3ZvT44NfdZrcXFYiBgBztUEph2w1Ttvm4R4jbX7B4p9akuJmiCGX2vpA8stA5bh4HrqDzBhKt7o4UVfaQkwa167f",
  "key4": "5f4PM87abEoT8g7VaWxbmnFAjmj7MnQSZqrNZXSeWZrPu3Pin7WreW74YQ1Xy8Di374L1qC13TALxZERbixspMye",
  "key5": "598sYmqgeKwCEFiKHKG79gSgRtmLsNwWEZLexTMxYwDsTmvdA9m53b3MYxiy7rGRRAEXrUDyygqb1P2hzyRucNWy",
  "key6": "5Cf2bZaj9itP6fbfA9ivDMus9HsrBXoZv4saWan7sya9Y2gtL94sZwxePGChAgPVvyVGYNYzcD8wJpHH5Ns8BDDc",
  "key7": "5oqK17n1fMa6tEPiEexeXTboYRgckjSQ9gMm1fAB2ACnuhxpHLdCqLUjzRxdt375mrLpma5nbDMPC6kcaV1ymFXF",
  "key8": "2N6yVQQbhDYa7gD6gZGwxAm6WmtDfeuKf5a6zHVrpUiorRAzdnvF7rNgRWEUNZN66QErChViTw3WeMPQbRPUExVo",
  "key9": "43Xb9Yf1m9sGKtutNixYyD6uBqrzMEtJ8sG1ByAKgMJwrnrCm4S9qDRiaCxWDcwtiWwwjjTBtjniRjsJbBaxMKvr",
  "key10": "4RetmsgBgMvx2jzrnBMb6nD4DznQZwnBjS3DZQhriezg8JvN7ceatmi2rwiBaAquH38mMgVjsgVeiErUFTCJ45QF",
  "key11": "Ajar1Wanjbmp1kyVcAoUfgKkrBuM12jiTJa2hcjy9VHnnPEPdAQeap3bH7Quajjee8ppXWCPk6qDUYPiKAjXx84",
  "key12": "1Pirz1Fn7fQvKiU2CAdxrBtP7EzZN1ahm13Go7SFAXYHf1Y6D1FdbDfGW3zYsaEk8inXWGSqHVoin757V6UjmHE",
  "key13": "g6FBCx3wt5D9t6CrKa6BgWumrkF7qsuTfuieYgjSh88Cs51UwvyyBbF7GQTh39oF3xukZETuKWnDRW8f9pdmnSk",
  "key14": "2R9agF56YHPvHBPFTj4xrYXUm2SQAnsKEqK6g8qwjg2MoD71DjqkhRcnoC49MgbrAaaUJSBtWPxr5cQj2H32mjcA",
  "key15": "3w2cQV2WMNN7z4dCBL77x4sruCn2GjzuD4G6kgKkx5dVU9xypBrF8B2WJAPvvrEoxVx4JBMjnnviU7UbaUNy7Nuo",
  "key16": "42DTUcbtgRmzTrdQtFQGjr9KnrB2vcrUdMb4tBP6Dp9ykmeDLRgUcebGHh1ofCKMPMMKKHYBn1HpkcGxJxiuPBw1",
  "key17": "9RR4hdca5z3oyeay9k8hNKCsXuMhssj6uDDq26eD41HejQNubnmv9q8WDEPvaBEumz788K3ydd9Q6BJ8pTVHBGR",
  "key18": "2bWAMAp3WjC74ekckvVu3rVs7fexa1pPQydX15AtgRamgDzNeTtVKkc7GWP83Hb4SfwLFvu7F4hqrmcJjTeLz4fm",
  "key19": "7D5b5WFAvP7K1DWLGwJVuL2MHaSfFVJw73DkgFUw2VF957SSDMhCpoiEWL1TmCPkYRwiH7RRaMf1ckkrJAVxnFM",
  "key20": "4AEiFsQjteG3EYoAUtFJtCf1Rukhtp62rBW24wiQ59pmaJdH2GvPJZczBQR6dLtonCwNVUjCnnoU5xLc6LS7xiVJ",
  "key21": "5f4HfCGdhM2Ep6CNE1RSXMdVJyGRGoMsZjtVbqbPSHBLZVEBwcA1AHt829s3MHj4yphvwbwvjToyXZtarb2XHpNJ",
  "key22": "JAW51FaPpqy8hyZT2WkjzGM62KSQP9eaAXHzrM2NANnYaykB2ztQSQw8NTYKjF6XuEw2uQKrr5EfQJCPV6o3krQ",
  "key23": "2XPXqtweR56SGK5qF7BHbwtyPSodEFSVnuDaPyuL3uLSjm4JGq5x1YMjkY9ia9SVW7SPnnMLQ8sQRGWvo3aZDZ7k",
  "key24": "2iCRUD1tn9cdVybAT31Hwc13qacwBE9FR5YLjUoeW1C1PChjfqsrbS5hcRC41e4RbWPuG4PC5PsqkeoEAbVuZ5yf",
  "key25": "26V9XK8DxwzkMsS1XoQN7YepjywkB6gwhvdqk7dMYD1WCoh3iLg2RGetuJy6xaUxwjejrXt5Z5WExBk3GqTrcCsH",
  "key26": "4Njk2nsQKWPtPz4cQPU6U1wBVjp5xSJdE7nE7hfwKEHiL7SadKAqkV7LUpJMwrMR563PRJ6f4bo56Nf1RAGfPiAV",
  "key27": "5Jr9sjLH22UfdDTVkcmWHwo2KUsUbi8nnghg8ieBaDQiFbJCELR8M9naDazWpptV7CwSa7Fk3BECDb2aBxeXD8PN",
  "key28": "3efuaf8j96w6MuVSjiyZ67DRJsiowuy36rBSiQQVdh5NiCndMreVScBTmqdcsydzGsQaPL339uAwRkznpQnAivn3",
  "key29": "3SydDuaqbxHgzwAeXVQEfoxYVdNA8enowEMEkgnaHq2zncmSthjfdq5BFpwrHXDwNeBQhGLDr7aerVWYbzpwEB5L",
  "key30": "3vQJnJ9wYC5A3PnBRyzaqCXdVWZVbCQBcJZrhi7a3YDFSRjHnVN2m3pPkSss26FGhgxegAiEXchEzufth9YP6efC",
  "key31": "2EiBHa7NMKD7WpX5HXbyCDtod7jxG9wmovSJuKheuhGtdcJtexTPANHGjEt9jyyvKXGvWJU4mNwudiQU7erSpkBn",
  "key32": "4y4tQwztSnrHCH3v9Nx9pviDoPSWoYGnB5zvAfPw25ib458Un6RZwPLy15aueKRKg9C1TmSHj8VaHoYHtxuB7mux",
  "key33": "56gjojVqxCKFaKmjgP14YiA1PUiFQBdrvk5XVcxd8HHLFm3w31LHW7DXXxGX71Mswj4fz5LRNdkbK4aBWJ3hKc3w",
  "key34": "AX67gNusSEHBfqux4FzVTY4FdY31z6RU9psg8Q9o9JAfnq7u3VDzHR319ZBtsBXsnhfTrqxGsyxMhWTv39jTnLF",
  "key35": "36FrKBoyfqoEXVsYnCnE3iLFMZRGfZDAUujiHPPDLX5gL1kdzsNhVtXjiBjzsBdmTVBAKsDqqq9tpgj8RdZhLzJM",
  "key36": "xcwCQm85F8efVwQghWqJ28ZBTkTw37UZWkeuSSTrMWdCie3BBJjYMFr6n7RuhnBwSMmiJ8h5N5UASaJM4PVnVXL",
  "key37": "5YwicaEgDNJztHYiKbxTPmYZPVLfh7UFRsubxghcfzQTJFmif2ySyUiqZ5tmfR52kuVyysW8qL6RHZqMeXRMc7EK",
  "key38": "2gw9DUE5xUMSpRArJnkXnLSDinT1uyVEWiXcMWcaWhzNSyQ759CPHjgne26nGuTyAQ8dKodcDoqnVPX2MnLjL9kb",
  "key39": "HzrvcDPWohEryEmQsgCkHCMQboWrqGxqgybuftPz3agtXNyfmpewnE69WggHLyj29xYyFJyMVmsDT1nunR79fZc",
  "key40": "4EvN2rghXvyMdtQ4sGwkCi3vyJjriWh6JBYTqRW82AN7E8JvfJur1JpeQQMUudcGsootx8pST4KgDyP76KpwrFaE",
  "key41": "66hoiijtve8yWzEDGk93K5tif4XPWdKFUjQGxC2sB78ELWm5YhvJPeYgp9jUpJgEuzuf71AeKujGWCxrLcoffmjW",
  "key42": "j7Uc4kPrjaatHg6ypF8pkLf9SRUE21Ehe1p666uGbrmX7VsDYpd7CdMBzP6bFLUwz4gS6rc4zq85A8Tiijt689i",
  "key43": "4RpJBUKBB8iJYcHmnUNTQTJNaQbko5GbEfw5vrJykcxtsyLwNDMGLvHktQUvPa4HddXcQxy1D6LxYuHKvrobfd7K",
  "key44": "4p3uFMMVVCZkvCNjyHP5VbEBz29HFpEbEYzN8zzbhRtCaRBgaH5YiQry6uhhrYKkL2dLDzjei1mfUxXhhHjXBvKN",
  "key45": "1PqcaEmZ4K3pRZFrZaXbTiWdwRCYR1NJRCZmQkGTygdaHhBYzQoeTQQ7rV9U8oWwzrwJyXQaVqujw64fGVtxAmU"
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
