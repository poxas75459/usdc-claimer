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
    "5wFWxxU3JwkHv7jG2VVaS924phRP1od7CWEAgQcmiAfpAUiagc5m5BYkSMEfL57NzJE2YFCSKgJH5HdzTL7r6HXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64aD5jBceKQGkcczsXKvsK2MQJwYtLGUf7p8sSxiBNndjf8sPgysrzAjKRCNVWXB1V8fYdeHsrKbPhgXy9Gzym24",
  "key1": "3Lub2hPvT8BWioXKZmbpCFw9Ja6KqQPinTpwdz8YPswzAPBg9tPB4i9BVwXhQgf8sVV8hpkVvmHmTbM72dVHtmYE",
  "key2": "36nJdSDbT9i8sUXoEZzyjqT4mhyuT5bfwATZgNgwBVya6iBS9W4Wp3b8h4x6qRu8vgFCaiXrUyVDGLLUNB8nYw7r",
  "key3": "29VEbjvhxM55gkjWYHAq9ufDUBhtLQzEzTPu7kd8kaxESNwHinRiDUDYHeD5qhg6YM1LTqLVyz6J8vJizv6Hh39D",
  "key4": "RmYAwYLCCfXEHxWqw2vnPtT1mLSjGMkj94LaGmhwsbCUnJnXo7yrt86zB18XBktnY3e4iCc48Rn4d8HFXunosSL",
  "key5": "5Dheoi8N5WcJUyg8p1KuEo5Fak6n5ezgS6aZ3fdthBq3hNFQWUQcS1rBGXzbjgguc66TjkJ7pCytNrEh36C8piPd",
  "key6": "3wchX2CSQyXAhPpHRVEufV5C2ah4Kaq8f5AS9anhuoJMG2DmsNtUTFW1ni3o2sY4Fm6D3ZR883aX7udH6fkQ5dDK",
  "key7": "4HymGFz5r2kMiMGBtUPXSZ7rYJn8bA9iTUFSnzwbvDFu5nQFrNhTJbd86HpMSyLQY8aLyoruqCWzV9c7bYj5MbA5",
  "key8": "Wdqv6SA9ek4QNmUeM7hC6YSEaedP6p79mWSi7pCsZKLXqi5AMGxizWPtV7FcERjtLGGb3k6J3FP8g4ezLyeQ9Lb",
  "key9": "3zsejWdQ4cLoMLkCYVhj8JsM96uEc3nihUSyGRgcmCXymewkkTodqLEGggpQ89wv5Se1SujMYPW4Aea5g3cz2MJr",
  "key10": "5fppXBEqMLz1tCXoBJtJEUNZLagYXkwej7tYGA2UMHRVjpbdnsiy2AdGXxo1TGQXrnUWHuHdxDvAvZWhdbFt1GkJ",
  "key11": "61NakRtv2v5FVTefeTZjU17Z2zRhZ8ANA2owpuZ5BvmjpxjDNHR3bJ5b8UteTAt62keRFrCnrtbHoC3suxisanhS",
  "key12": "5yVTJW2W4xzwpYse2uoLounrpZZCtYVgmQSgwE6HSMdsxUYKqrrSxvHmoocq445XaJzxeYw7LizUSR5hi4ejQtPR",
  "key13": "aDf1ZqsDBw8WHSMJZd24MPSgE5KBmE14wkaWcMp6jtmHDp2GkXC6iocmX4xwCFm44q9fwjyUvRk4K6kXbArH5qT",
  "key14": "237sKyEaMkr62xoEQYhiMUhBACmXaVs1PF2DzMgdKzmdw7kkLyPWFXUZ3wxuQGxj1RveCmUwJqG2MjZ1kEHSPhP3",
  "key15": "5YxJRoMg8oMxQH21kcdTswex64bJ7HthKi38cnXryLRo9i6cPkSb9vm47AZwq8EHVTGaWWYPGnfNMoaAtba6PpTH",
  "key16": "56nJT6YSivKyNsxZvLZuzhZz5STobi5cizHyuwFoEdFHpGgcPw2GEWEU6Bq2vKqjHEbgSuawiqqWhHcB4eYeq3sS",
  "key17": "4VraZSnQK4VrTEJoY7gu4yDBCZxQPwm4hcsP6FZS9eVh2yrS6K7dHgPX6xLzL9cSFxfkrisCbSZd5FCzMP4r5gnK",
  "key18": "4EgFqZhqgNWHqoPyWcsJFvVCtQG8NpN6DLZMQybxjc9d7ihmHmLEch8cuPmerJ9mmcKY8c6WsYRc9CNvc3SkVTQR",
  "key19": "58houjzjtR7makEewPB55P1o17G3Thec3VdkpvATymj1yiEWAk29KP1eoSoeCWVcTRfWGPwmZDCDd3NfssPQVpCK",
  "key20": "5X1sGpAoG92gN7ijpCHDzVSSxfEUbNt8fDNhTek8tXyqhQxUMCDyKgh1RqCT5nQxHjs5ovtMqeaj3gBUuhN3NrZm",
  "key21": "zwCsbp4kT1Jy7LSoDEBCGZhkdiAT7CNV4zQirXgg3QE9o3f2L4RAaSm4dWL5JYPc9cpSWMEnM2vU9C5bkreTdx8",
  "key22": "484qyo7hPkVSHK1TnQF9vA8gt9fTX9izYniwEJuqhc7SanD8ZPzhZZCLyLEVCdpw23RbxrePkNAPZcgAvtUCu4hf",
  "key23": "BYx7QKnsYtav4Ug7v75pcUHkytReLFk2FbgyV6r7g2tCo1Cv22HQoEbmvY7QipVLBkPdmYMoysyE5tb7Q9XTqpj",
  "key24": "5MSsvrCncP1giybw6iCrWVmTEz84yq6A9QPsGV9pJC4jbnyttd9jcrNypBBD7LS7AiY8tsMEfGniHoReiBE5T8n",
  "key25": "2uwf5Tdz4DemvTLMrLnEEU6QZjcTrmubGC9Y6jDrbMcdcmdrGmkq6Xu6t72U3KxAVMdYodyc2ATww3kw1P6MAm5q",
  "key26": "3ah8N7nPVftjYLkYCMhEMHr9Uj4R1bqJSDcT8Nvi7viPMzexWcCSdoQjBASxSbcGweV14Hf7zoicewCPggZMxd8u",
  "key27": "3aZCCgHht68rrK1enNbZhTUw9UEWDUdjKaafMLfGhWkL2RgdUNUH6HR9f2GFpaVoBS716JtdXqqFZZ5gAMZySbji",
  "key28": "3EhfQGs1tNZUmasEcy12Gut2dWUQhPf6d6Vfj9YLt6HA9uCCpiegfoeYVtzYy8KZWGuNZ5ky7DdCEVp5BXTgVyHz",
  "key29": "2Zu8zgSrFJJtx7eXfbG9zmHS7Z9qLstuzWf3Xy33NpVYN3Be7saEoR3PjKJQiuoQraTEx1GhKEoRJtK4dSLBLj13",
  "key30": "2PuzKv2x9LfbysAYYxj1N6dF1QwAALc3cEVnmf1khmxonSmRTVnR4UHtsZ3DCyjsM2FUfcWiPWWjusP5yADUd9KG",
  "key31": "4P51Qj8RhCusB1YNRY34U46Yh83fue6j7rYQc6yUxwYrwtap3NnEKHfnZgXTNMxFnhnpvrMTyRgSpVNtobUmKDRf",
  "key32": "2v3bPT5W2rE9reU5P89FmdWN4oUpu7jEyy8GCaTtWPtb5ryjWxwPmrUiLk3a74zcHfnVoC5eTU8i7kfZ7g1YzmTQ",
  "key33": "2S4CTrP416pZMjqjSurbnnxMxawSz8m3QiMvmgBLwbzVdDp6eMo7JNycikYmzNMg5BcP9wwEQzpzx3d3m2c3RB3a",
  "key34": "5Bp9XUj37dUwthbADdC9Nz9xL5ErHJeWyzUDUKiejqgGtbykp74Xb69Lq215Y3nfVDKwnznx38kCG5ZeP9JriNBc",
  "key35": "3BbvSvn18Tptm8gos4x5vWPJbFYdzbGWboVShsUfhh3VyfWt77ySDm9yb6MMRLvLGWRErpCxfiR4CP14iUS4rL45",
  "key36": "GyCDbo3Tmv3gyWAQ3bhNpMRdJvm2Rwi91HQ5Up92avSFFTDCxuBnnz1YdxtBYKTQq234qVUS5bbtDXWRytS2NHw",
  "key37": "66B1u1iz566x5Q7BaQk3Nd7RxYYiw2FVMqVcRvFuzJqss3KKXf1CtZBzsqkKhJyE673DDRsxX9XFePweqR5mgHeM",
  "key38": "58uoUWN4ckMywsheeSQc2KgJgdWWg7fEeXKHZ5gsWDg6RUS2LXZjeCnTAXvnyg9GknA9haDwe3GWunVE8u6Pn1yt",
  "key39": "2MpnhojmQPGL7uvzUscZqQQmi6BnnVHbumezd9TVo6JcHL21jfq3GEm8Dz9dLppjfbzfRJqjczaXYqVXKzjzK79o",
  "key40": "2uLJmcjDZueLv16DQW3dHTxSZsZUYr23h1K891wjv7kd7jWCUDY1fMnXFBuGPBFtq9Rrdcyd4rrMDstJAgvu7eJs",
  "key41": "5ymmxYra1CG3C7k74wry8RnPq5rHwsQGvp2kQSkGNLF9YH6Yq6THCqhFcyxsCx5q3yhjSx5npkftf1attsX4NgiU",
  "key42": "3kxeudAzidygZpa9tEuxNS8LBMUdHgXXScvUMvQBBnbBft5CoX9ySMJPdcZLcaE8BLcqqWPZm85h6DHdNfkUDt9a",
  "key43": "3xwy2agBFSszo1E4tQwZJewRA8273qZcKKy4VFrPTWfV4mu5Lc824BMGezT68gTU1CeQcRMTzfGcJ9v2pMFK5Swa",
  "key44": "2QgTBnSmEUfogvYSfWiLovz8hDwMwVfwB5o8maGXjFRxpQEhYVtoz8s5WnspX3ZnPBpq5mqDzBhwuiGEz8Dvfmt7",
  "key45": "3b5VHeqWoHRR2mvNfMGXQfogygyx7aPv5nQuAzqUjAHeCwAHSjv8T4xPMKXbPkdvJdUouJ3wcf2w7FaKH4yW3gtN",
  "key46": "V3W2LroeoAkDJL3d4EfjL7Re5A3Bu51LC8wD5ev8dYJ4xkPbnWEm4rTYAvdrWgiaC5D7vzDHzntuDcvhjybEbMz",
  "key47": "3qXuDzzDAFMmHi2kbFvFVtxCqCUcsUwvVUYqb4VtmDRpzP3ARdsbuDeR3cSVygLLAEkDVs96faP4KUjXp5AR7DBZ",
  "key48": "4hcuqh2nGf6dqF7r1HscpSwQ7PsRPPJputQrfTtASaZyKYZU96jum39E7CUN5dHm8Z3j3yyjNvHL3fPFZfHsSKbK"
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
