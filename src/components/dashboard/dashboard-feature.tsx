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
    "66UETeoPVsZA2u9ec6riZWTsqzX72MiprzCYJdwPhBWPKgEMaug7bosLaz8pMvXhjtXijGDN7Qsaeym7x7u9ZpMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miSs7SWWdDXcD98WLxKTAY9o9NU9DiAFBay3qADEiVGRzT5yxq9uo9yrVmmeZKVioxhtYxUPPNTtEerpGmKQ4VY",
  "key1": "4zErb2hjSSssjKwfN3bovLQDnkHXCcToydGyG4ErdiY5FrVAJNVAdc5HMVCXa8eERTgdSqgKjgyAdCWzVLqDPNFu",
  "key2": "3ZKYw9nzZ1Y6nfF67WoSxeizJJrrN6htmYeRPHXKhqwaDUeBT7uzQDkwdPqKNZQoBUxHJBEnP1HFMef99cybY2iJ",
  "key3": "3XyPeppzYzA1oMAFsc9DJLKSQVcb7KDtNQM7MWLnx3bDyFpAzqeua27QXbkzZzByLdL2r3vxuVLkP9bBiHYDsQXk",
  "key4": "4uVacsDxgteh7uyN6wnZPtuu3KEEVS5dXMEHhcBxaSxGxrg55cod8K2gBcz3HmabGceSM6dk6zNaHZmqysssxxef",
  "key5": "5YHzUntfX7w8qzpqPi7QhwwBGL4uujeNnMEpSCL9XFYPc44vrweFimSRnCEwi4cAoPijVsVJDmsxLtUpNR8SnVY9",
  "key6": "5zki43eKVYEuvg1M8K5o6TyfUtvW5AUTXJ9nWGibSGKfX2rmy8yDg1LsCQYYEdiH8qGs1wvcugfUauMWsdShFsrD",
  "key7": "43UtnUci8dnjvjW5ocZtUVtVbew57VK6eov5Q31kP5aov353WmtTBoawVz6g2XazDfLKfqMNdXqRpLa6cmpX7AK",
  "key8": "mTQDitQZMy1AUy9p8e9qcu3vcmpNu1Z4TDsKv9DXcovMmz6g1bENM6upw6x9gcaZoSzzCHNZq5a3pALmfvu7i8n",
  "key9": "66xQ76jzznQqqKv3cSYMGcXwkwQRtKej9y2vk81n6Ey7BdxGRKNCo8eB8weoZ6idNNgiXrFPYruzymMHMSZWdFkn",
  "key10": "3jf2Aos8qwJXpYz9xynSDNXDAkVd1Jn6hTzkzo9Tv4LKMhFsPw4AzxoWbc61zWNKCVFsSzGcM37L7SunyQJ79cAJ",
  "key11": "2wF3aBMJWY3wwtx95kKoDbKWQTy1ig8ccSrBuUBLz8YfE1meHBRnq3GwjnHTSLUUU2XJ5A7HPbSuH1nqvi94JsJb",
  "key12": "4cv824khKY4MTqRZgoNc8WQx6NPJJGdbdQuXeoUNkoRAkt9DR9nH9nti5kNb5nosyWFjLBfZ3HdWzxSeZ7kZq2eg",
  "key13": "6ryhbfXxFhZ2hJvji29aZzpHRpmRYdwLXdWgrFL1yCYBH5EgSryj2a51URAPhwLYNVkYjDC9LqNyYHbTL2aKNZn",
  "key14": "2JKy42Wox3aUreqMFG7hxgzzKkLeVpHbRnCjM6oUoLyLYXrq6xbNeq5HnvprsYQyv7EHvS3rtQ26EYpNQXSxyj9f",
  "key15": "2C8E9jMMvnPDMVFbXAPJaeP7b8qJY85ioDtCE33C7DKsnWVDAusPeu6R3UGXXJs6AWKWiPJPqy19bQwshSTab4Ki",
  "key16": "4Cphnmvf58j8TbP2axrbGj3puKgoG3HQjCs8QqD5nohqMXjD3aSZqucShgQtCiaaRQJWJp1kdD5PX5sjaPsgzqVC",
  "key17": "4qNEFDSGJ4su6UHwt8fQdeR4itfdxJyj21VjtLFYgVEJyUSzsTipycRxtwF1VDzycf6Zmn6FuxkAfg6DYCymURT2",
  "key18": "dAqXoS2NXgg4mxE33Q88cNrBqzDxHnBDxWGzrxPXSjQdTiWLUkJ7G7TAgHGSCWqctawsPzYuuCamdTGpnQhURkX",
  "key19": "63BgpnCcXhbWPD4s48NYfR5jAMeXMUrpUxEdMiSnCDVyp3XWmuMiV1P4jfPbVFFxRs58ZwmmswZUruzV4Lv72xjy",
  "key20": "4htpCWXgGcwAYeYbVZRXcPsxUVpHfxaWDBiVkgwHz46PS1i9X3fTMbVfYqwmCZrszeD4erxUKtoBKRwCvmxeDt8h",
  "key21": "4ys5NMpFWBr1UtBP8Fb7XZATiRNSuMyvf1agueVeQLeJg3eDkdSa2fHVuBwBBCaVaXgVmRz5aZeGZwUSJNCkKFxe",
  "key22": "4WCm28BbG5noWQgrhHVAxspx4s4GqkF9Uj5DjrXwmib2kW9P9kpDsK1KX8Kat8DMcfEhtADyKsumjJn25a9VAsL6",
  "key23": "5xmzidE542ajPKaiZu7Bzi7YHZCkdFyxFyK1JiDq3AjRLPLLMwsHCf98Ka5pT4HAmFsiJ7iBdbTau8fSn9x3oUjh",
  "key24": "4xfjHakZhSsApby1WUDWFd53AVdkJ4WPmzmgnqeVgnshvS8mv1nwpraq2zNvVWKrVZn33t2WfsXxj6ZnHvtUQ8h4",
  "key25": "4qGwvyA8wRgjrVx2H5tdq7r2Z1PQWmSi9gzNtk7aN4pWUDXxzNUeFiQTXUmMmXrn3oKUgzHzWR5jzZYL5PXFpQi9",
  "key26": "3qGt3AGUNs6RAWugyBQ8LGoRAe6NHreQ8C9TsXvgxRRspBLTGJewPWGvyazH291ApyDorEgNPTj2e9t6Tt2dfPDq",
  "key27": "4E8stFzcjNK29SLanXgV56gpjwsUw8tFTrbQUhcgx37At8aRtoppov5nyL3kpEkFFeToJvEjdinM4xGcB9XqMhha",
  "key28": "2Nx96Mjky42K64LwcfEskRdaw3Mab1YMAsvzwuB9K6PpgaddyjvTewtdmyanZfyETytJzhz5ubY3Y7dD1gXDQX9F",
  "key29": "4jM1wppnSqt1T69CZ5XdePyszcsKGhbmNFa4zTCNsVsmeDLwMQCYKjTUXUXQmXsukKZtXc8RbvVe7u9RKDyaNBjr",
  "key30": "XkBBGp5piSwYQEL1BPHqRRgz4Nxx81cxkSD13GwNUGCXuCVEPH9oUtWXBXLsD3xLH5E5iYrTjbcr6UMH7wCgoZR",
  "key31": "3SLn1PExq4ZFr9TP4C716oJF2DPu23z9jM17QUCN1NFoU4bHX2PXHPUAR7w4q4rK4sugwjmZyZv7vGiDZRpWNkg5",
  "key32": "5vXHC1fqGWNRiPVfUPF9NAghiLcdRHhURpeVFhSdt1xc9VsfMmf16A1x5qpaEZyPKLKGxVyrgEpMrfB2F1nspQoj",
  "key33": "Qg9x9FoGrsumpLmXctB7VRmjUVWwYzHG8QfaQtX4PZxRHwc5ksqCg24kT43eTdcKxLWpj1b7H1zLwFYT4ZT5ehu",
  "key34": "4te46iR4qB7owvNVRuC1wuzEGQp5NitbFipPtwiZ1cKvdnEtbPgCDEpk1QVVznzBz4m23ct7QHixXWyb3ggTGoBY",
  "key35": "4scQ1YQGqLJVxzwPyePJijxhR9xzfGWxpQ18LZEiYTQ8rFnNNXtmEqSiP3FzMo7tJGXrb85yfqCcULhfw5err5S6",
  "key36": "4cgojUfu3bjgys7LpKsczMAb4czUQ2hNqgrBj3pwpYEQ4pGhwADwKG61B8M5qnZg3GkP89ayjb7pyysWQQ8NjCK7",
  "key37": "5iXvRQ613nNxA3WYjVsQjbvYmDRFp6nT2TQyEypZuW8mqhkxGfiYWYsQrjcUapuCCUvvwKwqfDENjjBuhzHKEEpv",
  "key38": "2b14zpiRpXewdsDbjQvUzg7XYoo4B8QNYnWMkkjB44TPYQ5gCh447KxeVhdbCsqpw3rha32oyHphjbb9aykCinJQ",
  "key39": "3Bww95Ca9YCdiNMuJCrpZ66upsm3Fgh8F8wRgKEcuQ4h7WuANyiGMmkBvCRdubGgQmuCinxmTxyM1gqtCuWF6Nfq",
  "key40": "4KohWMQS7GvjYqVK3jMShJN2FsAxhvP4x1Lk8kUwaE6Fw7ibQDLDnR9A1u6rXnaTzcrXsUFzV2fApRgRG8BTA7fi",
  "key41": "49YwbxjG7yNEpzL1QgDjFAHKy8Cut9Vptu2wbEzCBJA4HD2Cqbh6wMM12yhzTejtA1F8VGqDTjUJU2gwVTzeyW7E",
  "key42": "2azyPJDeh6rM8H64VdHyCAsw4LX4dnZ2NKi4vg34d1EcsjMMfcML2AroETfwWFMysbfYthaLpjW3ddLQHNguTTxp",
  "key43": "5i9WxxVQmrvjLcuqdrk6wrfmBj55cTJ4veotqZ81BZQ7533T5stUwQcmidPwka5stLcDqh7E6P2Vi8VLvFBUXDkG",
  "key44": "GWNiLhEDdj79HoEeLR1Cus6azn4gqNMbQzf3aQmvtPv1HH3K2gnPiTbqymnZwf321oVxQyq3aHq5yVumrx6JqJY",
  "key45": "5x2A92bU6dsiPmetEN43Aup3irsxa8F6KW8ykyjt94rPM7JYWLJma97z7kXZhT8GAa7MKyaQCDWPoym2t95vgL4Z",
  "key46": "4QPAKtz5pnK84nqW8WATzV3NGEB8kqdVPeAKCGVmL9TXLYsa8vYN7NdCCBrLUaSvc8DJykLpJPLBuNbxiY8fsspu",
  "key47": "5nB8ZMKMf2g28G4usnxMYj7rz2neiPgvuLKsEpV4zaWnV55iPGCxckjjRrvcno87hLBjFtxX73rd2p8wtvPJCcn6",
  "key48": "Yk5RPJk3TkhEyxaAPVBkpNmDiudV4b9NZ2jWoQzur7qR1XMMtZ5frRioD32gkCmjDAj4oEDRGJzNubHE3T4kCiz"
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
