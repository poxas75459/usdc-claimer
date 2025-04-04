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
    "2ub9JNUfomXmU7QdmK1hgQYJMHuYAsKjL3uMfvkTCpM1DPLS5HetxHujHF8SNbxxm5RbzeSNjpuBEYAZmLVaG6f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFoFDeMcLLusc5tHKAftp4qGAn28oD1orHNkZec2S1reENj3jZSGmtmi4rpVrZityW7HMLVjRPXt7XigzUimZpd",
  "key1": "2Jfkc32djSye8bGEFjR8e2rrN1RdV9xWcu9VXpd64TksnyZX5yzCciYSkmPn1PmfTWz6Ei3hsCv85dbKZicE5CBJ",
  "key2": "5YsztfiBskz61cjYFcZqxvHaDMUFh8CJ3WGQUBrmCzFiJevYYuxPMrkFXv9b5wCPidm5TFqWkqphPB6FudqTSp2E",
  "key3": "27ZtkGvwAwh3NQ2H88vdQzmkyZvGxm98hkA6KLaCdPqU49X4waZVzsthxHQAAnnh1VeozqE8DJvk5imbq6V8h1Bz",
  "key4": "2EioXACXifxdYEfQ5HGJpESNMAFgaTS7rei28XGwNispU6h4BxXouDS1RqT5efGuUQeXL9Yf7wRB5fxLpVF4pWMz",
  "key5": "27ecfLTGymLe1E82S82TNJkMw6JiwphAofqiZZHg7TisGgEwbXL1KZtnBoopVPgzxkoHuf8Rk9oH5eJ6LsmAxewP",
  "key6": "NiBN21q8d97gKijnoX2fSVxmHBTTCVbtmJTDDJesivpsVUf38n77nf8KocCwBDdBd3dxtk9UNEUvud9k9eS93Dh",
  "key7": "5xzxSP93NwW3ZaagdqzGkfzHxMATiy1qE9K4qwi4eN1693DPGhp3Cn5EtHuDNpgwAbnrCRgeYwJNvGBxQYB47FcE",
  "key8": "22pwSY3UvBFHrmco1Bb2ik1L1Y6AfPhfCwHyqpqgbWzKUVUtVCAD6zKcQr1YneLG5BXctQmUqWtXfgPr2GU5kXvt",
  "key9": "4SZXATQxznQv3E5RAUMmCXHkT99VyYpGXHXcab2qJd1LGtJvDoVn1xs1iyPc3KVJyDsH3WLzQCupqHVHWdgjVpNi",
  "key10": "4r6Y943mRtoqtB1ieu5kqJFKrTiKkbqKFS7CrFTeCth4nQRvQeYoAhKQ3tHnHn1NxuTArP9tCmDHbpviqbFYsZ2o",
  "key11": "jKACWiprwuG343F9MjX9SnxYe2z9kdKFwJeVomRDXxv4jch59XW9SwDCiwGj31va8P3iZ1EwSwzP7EGp52Trj7Y",
  "key12": "4dCt9ELNjcBD69bZxZers4LgjLZhngRn8fenPSrhuvAyQ6GyzYV1zwenx4PqjNxhS9P7ATiqzEWbuyDVCmHmWehE",
  "key13": "2Zsenf8RMeV15nLVUpf2CiKKYygLGG72niVDuHNYvf42tKgPncSemuvL1y3SksxDCVPiD5QyRGs1Mf5n4EHsEdkt",
  "key14": "5Ko9z89toZEwJHSEPzhUS21FcHKDgGHmm1Na2wfAN3uwQHkwbvG7J1vaMZKaTSWTXxq79qaskQVFNZf77WAJ9GKp",
  "key15": "4iTXAfbefRqfPGQduojjN5AyqoyHGMkpR2NwK4Y4rkd5h5z1r7ioewXHQRCkgzN8KvZsCzBGLYH1tC3kDonbNspN",
  "key16": "3bg88DdLZjP4s1WRdWgZa15vhZ2abVfSpNSpKhsg3JSpsBPVgkdwf7HhdDwbW9BhsigWJECMzAtmwqh8sdaSqRcN",
  "key17": "4Hx6PM57ADaJ75mMmqXd9dpPJzz2eF8nwsv3a6JCB7uSF6YJjNDYGD5MqnjC5FsDUjad5g4sKg4xhxYYMEghNUha",
  "key18": "9xFjWUh7CHXWHLvMB6ATQxfXwKdNSNnTdLuY1uQVUMbRjxMS6XAyC8dodXTjopjTsqgAamhZHdSp3Ktp6M84CyZ",
  "key19": "Nq3gZ13SxxtJgzHPy2Qx3JCSBdNxsGgAmo68jt2Ph3h6HSkcJFbj45Zr6Fn6vEBAYvHXxvMrNWUTmUvXE8KuwbQ",
  "key20": "4G9CyV77UFpTYQ6RNwvv2hnUuidvBnNT4Mb2jhVJKmYWfWGtUBTju2kjhSQA5rzoepUqgPStMEqne1bmm3TtzEuq",
  "key21": "2cRYsTw9xb8ce7JHT3bpyv4F6BySnDfpsuYSQibJVtBtvwqy2J1Cm2JFKaNxhCb9KtrFxNvwAp38sdGhX6Ts7vRR",
  "key22": "2UQBACBuW1XFjT8ib8qzvGD1nJA2v44ijEfdV85p3Xp1CNw6KwgE4YEv4tpYdP28869dFbi1dNPNtztWVv4Bx85a",
  "key23": "2QGoHCiT91Sj7WNFjH6E4fyhsicvss9aWdBCdbJmYWWoZdwvDxn72NvCk4xZLSyNGKTZKX2QZ69ikCLtd4q9vFsF",
  "key24": "EHusssBbZr8rVbWU4qHQrk2RYvmHkiyYGeiPtv9uH5ne76di6b14goxujodoQHNvKoHngqZuP5A6Y61DYAcWPi3",
  "key25": "498ohG4MQugXcu3paJgqCzLoZorJjcBdkDKStJq5ENCNP3sM9dXNbuWwptB1mBvgUxKpUMMR5FF7rCS44PK6Td7t",
  "key26": "2jBvdhtoU6zpoMFokvCiUft9uC2Jbkn85woDGPdFNK2TQwpRF7FeKrBKwncnYc4rph2cvxJi1CTTZT9A3HL5ZS3z",
  "key27": "yygJitfYy1bd9fyoCGU6kniic2RNskDKjrTdnMYzLX3PerW1sxhWEcgCq4dDCyAFdKkeMGutXh7qm8fzzwxi4an",
  "key28": "3zEh4oneBKGdJaZUsrygUFmiSx56chWbFVr7XDfK4TEfnWELGoQjVB52ynNDmtE35mB3Ak64UVQeSY8VFxsxQzY5",
  "key29": "5yFC7HsyDW7id5z4mDMdpiDMmLb8p7NRGDWjtznrTAB9TsG65i87PXjqtRzKL3DsosjqpieNzCxdDPKPrK2Qsbt1",
  "key30": "5nSn1X796Cn8TAcHf6YGbbZB8ryFCwESmLbwtqBJ2Pux3whSrNQFKifeNoDMvhZa3RvJ3P8iXXSrzJ7M5aDd7g7H",
  "key31": "3tJKHcYmCF4Gfoysc8rEh8coTAt8Zh9e3XHLTbkKwwDCDoGUhWGigTJpeqpRyf3CsjuvmHgWDSEPbaF11tiWpGPG",
  "key32": "A29zAyaQFJDzh1YM7DRxXWD312n8P5bVkMEork3ufrWmMN9J4utRztoayEfm5ur71BdJjdv7M9qqDsPELqqw6Zu",
  "key33": "25dSZnbTMWx81hMEuf3DGjxh998c33GRMJ3Lpgz6jVRAxBfMmAavySzZcmay1Ft9cjTzqQuUNS8bmKELuCeoXPYw",
  "key34": "3oVKQfAfmxjp2t9KXVDmQdce9p1RbE7tjvmGYH9TD9YhpM3HLt7Qp65Z9H5GSnJ8TxvuRNryVmFXSrrsdRd6F7Sg",
  "key35": "2Jxgi7XZ5uNwZXwhaLMhcShUnnvR2dEHVVwMtUTaB2kvXShjkmeocpfVHJQTtjJLykFC3L77rypxGMg2u1y6RZPK",
  "key36": "2uXNmpYsp3iG3jmt8mZtXqm6aCVnZEacaJhDVpJCBv9FNqPDvBw43FWB51MSjQCC2xVJ1b3StB5Kb2eKq2GkJ3YX",
  "key37": "2UudGm2dJeknWYNMcZbKxC72GWzAoriyPZwH2gJ1MeKKkKsmwUbe6ToDgLcQzDXHXX3gm7rQHtggYSVbZTJeJ728",
  "key38": "4ExuWE3ky5JgjpqRWaxmrAUJYrtZtxk6bzrpwWjHU6k75NFLHFgEuDx55SAtmovHAfehe6GLF78q5YANHc1vR8U8",
  "key39": "z8MexqAhgqhDdkRfp4XB3wLzVLnuPuMR2myudqcXh3b3ERDubQRHZ8Mf5AXN2kNBBDkfKqz5fhLSXgB1z3sXVdd",
  "key40": "GHovsLTvmoUVw3k9WEiFXWbGLr9wPbvhVmSmzY3YsgWb4mFywmu6pTuT6JPJBnv9tHCe9hLsa6cANEVph56GQgM",
  "key41": "4FwJEfqP2zVnMTEkx2jmEmgJaMn4mZtoupFFz24iZdrKAe782ZPbHA9dsDFcwaiSPNdGVbtbSQForVGLeTG93PTE",
  "key42": "3D5aCUAodLPkv7m5nMms4tBBn4G2RwKWQj5tsu67Jz8bQj1ijEcU9BPvnja3sLFPs9MmTKKNGFhFFz5yA66Auuv"
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
