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
    "4QT94yejjygNpmXTX7CKH4mCSG1UVod2L8AcHYkQq6bMcHbC7n3eSiyMFV8skKnza8K1GauePwHUCFz95BtEUwMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Smr8TsBU2ds8zaDptjuE96Hi1cWrDE644WydZqS5hxqiE8kwf3XnpmTvoSLRnSeCKCmh8RhGmmV1kFL7RAetFv8",
  "key1": "9Mnz5FHUhJUaCoAYnXb2PMiX9TcbiXyf2CVqnXd1YsfW4KLbUfcE8y6yWxcTFnjh5SKoH31zZacSqT5AEhkokHE",
  "key2": "3EKf1CbLUniuorv3ZtVLvqoYY24uPQyzvRT1pkS1WvREPrDirgfQBhmcSeQoJ6ZymB1NE8Y2tsC9wQLfyyVobFVn",
  "key3": "3xY61CwN6bhPPfRGpEhtzK6RPi4TXLD5VX1CDkewzLTY89UZhHYaKKRh16KfcV7aqpdHiWx7B434vLFJaMdLA1VA",
  "key4": "5Lo9Yz1TCK4Vp4GXMgjgyEdvX9qGR6mtbju4hC2F1ML1Pg4gS54xSjeDhVqTS8tibo4HQBnkhKU9L7KrzzzR73qZ",
  "key5": "287PBAvuEEgpwfe4QcbSPKbyBzdvmoS1WvW9yTMxiSmSWRHvrzUwwcmcq9QZ4k8epq4U1DoHE7HVxsT5xFcfrNfm",
  "key6": "2bFVwepeimS7xNVPtxYg8bkVsjuMJ6uvTnu4GGWCBtGyBTDR9NBDQidm69AmGPZnbJ6BU612ndwQXfQ3iMmdaFPP",
  "key7": "sDGASJLFaaCfDZgS3vjUbn5nZTD2CHR3h1zVeE47BLGy9wMQEmjBxYXY1mUV7tUrBmjxGCyn6A1rBVtYFCWr8Sr",
  "key8": "45hPxWdtxLcbYLVqESF56bHC65dRYmmdUvZUH8KFf6QsV1fbnx2KGiBJntVPSfjUHWZt7WRC1YANUbHkCL97vvEs",
  "key9": "4w1K1WDpENo63svWcVMGepinU9FN6tmY42SsSQHmphZLhvYaAWoBgV3Yd6m621gSVQKttBkR5UQmRXBJzNLCTffz",
  "key10": "ebWccqGSo28Y5mpikgz5wnGn5JJLMzzjyBz6TKvsu8mh1iKdiUQWb6EpFJveeoXdSWvpCki9d5E2626KHbULdtg",
  "key11": "5pUXdXRDTkgFG5dL8824S4YPTSJDKNm3yroeJxc8fFe6rSJPfuzZUEojYUKw9vB26Ah7sMxvZD6vRdhTvLeWYZc5",
  "key12": "33PmFkakYjBQLqyWL6uf63w2apWEVVwBAi49zMX34zyGP3HdW7Tm4foVUxFD2BV66npAuWxD4yKchyNjDNEcxF1w",
  "key13": "5BrgzAcSvXxMh7Vxts4DJUBgE3QToXybnZWFoQo8k2ywLUoXJmvKxgq6yBp1673cd1TD7SxJ9GqS6tRd25qNucoG",
  "key14": "2788Mx3VwZ4PjD8xaEA8JS4uBCrFsQwrmuUw9goQgnmSrgGkxvQCq3iU8QVCdL49PCYSdbbeucJwv2vBjrFh9Gw5",
  "key15": "2B14GSVkPqZbYRZfxC4jDERiCzzGqECtec52cdbsg8JH7UUbXryEx6z5ZDkMmzuea3w55KLGxL2sXEnoj9foADEq",
  "key16": "3yBRTRGykcgtnDkYmSkk8XdPmkVbAbgmfNXA88U9xPnXQfEQ8BfPAvsfoYW5UHD9peiTn35CvjvYp7LdvgadiUUr",
  "key17": "512Ed6yYJM7UPfyco8H5kE1zdR27mrdjM4As7pwajA3Jv3jdQ2zqit4gwKiTYeZu1B8tGEugRxsSkfbYMv1dbdQX",
  "key18": "5N1PtKj8Wkyzss5sGsbHSHzsJwa517Uz4csN3VVCj65kDeAiqRXtN1bSwcWwQifbJ6D83JUQku4q2gU9Lrq6W4J6",
  "key19": "41UkmdHUuGFrodw3NJnCCxPyeX1kYaX69f9pvstSDJ42rYHui44aH9nVPN4gq3H1JaWZoc48auHRu82K14GnU4Zr",
  "key20": "5dvMVeoF1Ssi5Jr7NdfggDByZJFqUg3Pp2wJbBjW3gS62Hq3T2KZVRvYSeaCHetLypYUrxqmk9RSAHvwSnh6ACEy",
  "key21": "3k9aUtrRzTFLhShAPnzt1LNJGrFsMtEevUz3vdoEHpPj1P6cHvfgDwULX6NaXtCrBjBfTCaWwBRyzjHHMcNjh7mq",
  "key22": "2AG5ALyuwb4fJXo9PyKUoGQwDjtqYhyuitNyGiskTu7odTFHopVcJRvwYC4K8aCQyrthMiQhM36rNe86isYjoEgg",
  "key23": "fwYaszRc5acTvPFyfZfS9Xhs4WFhNDfr2HEdbuBCPo2dUHXRFQAB7RLEfbaJePncB34849Q2RQksy4gHcDfBs1v",
  "key24": "2QgfKb6X3AcLLSbQuuyeHZABJVPLmyDwmME6ttPkMPeSbMuYahZMDtZ9sHyNGsBcsH4uTkzywZfPfCk2MfGarSH4",
  "key25": "4nHqHjduFoRbEMZL46sa7ZdTbTsQEUaxYe9fvRvMfMMUU51p1A49nNgxX88wZSKP28RY2Uzwt2TtGaEegqJUQkjy",
  "key26": "3DqbfTycWZMVnBuEfAPVmvRoCkNDqrqA1RKhbLfABqp8ZXhJoCpMAnay5DiAGmLjtFoeNYmNAteYLe4Lrn8BS9j6",
  "key27": "4GfXiqnmQQsbbqotUFghe9vu43vn8bgX4GKN4JByyoVHntSJnWBzaXgqJJZLgSLLsBucqibEWCkq2PvaPB8jkvpq",
  "key28": "42QtVSLLbFwVjviBNZXmX6oTcLYzwx9Dc2kKrNruDm2aXn4qRAKnP3pmBybEhjKo7PZdgGy7stkZBSrBV4Lv4LL9",
  "key29": "2yomvnVDqyJnp4XMX7df7CfN8cVZaC5BT5JAmiaAZCTZVwEPAqQRHmsJZyGWnRgC8jgDM1MBEj8wALHTXQnNcf73",
  "key30": "2bxzxWJ4HSrkkBjVbX1X4hNDNBsxymxaBt3ooV7XZy4zjSseAJJfAah3N9czMp564zbkSY8qZKbEPGHoFbbGmgrR",
  "key31": "4d2eR9CVw3wVANaDHXPUV1egYB5RRwW8ABxGXafdJsqbuuaH58LqxG4Mzq8GzsYfwMihrkQ5j4wjfx67AVc2RRx3",
  "key32": "jM72sK2rRyQ2rfxtUwdmQVsM4w6xGunEv3PCXy5vXtBz8rvnrAtRQcu5XRpDgSmqCFgirbb356RxwSxEYB5dDEd",
  "key33": "TSs1SmxQsJbHNuFEB1WJqgL2CXW9spejCLbY2H1QfiqdLBLAvoEKXifsBmuVe1QHfUmzbvA9dSAZjY4VoNJi1Yv",
  "key34": "2WBoJSLG7RqYX98zem843XXTRAoUj8QBsuQB1x1vdb4YX3qXaMLQrkMxZn5KEBTcUTS6H1ApgRyyyKfyDrj5zs17",
  "key35": "2rCnQSzCvWHFPZDmkFhSyiEekgPxh7HdLwoanHUNgf4bxhwhJ8oKE5ejQssz7HpYFt5Azvb4T7og24c4oS6vQBS8",
  "key36": "4aydtic6fgsM6fxviFuQNVwf5saMJCVpu3cvM6Bz2sBz5eAaLpYhDtiHY9dzAYAbZ2iuExotkzNhkhD4Mmyhffhx",
  "key37": "4Lr4jZvv8dGRVEDvpSvtVfN3p73VQYdjMVkoQY1Bzgsqv8QfrLgRazgSRMRnK3rvKdzG8JeSv35oUEkZUwY2zHzv",
  "key38": "4aBZgLgZar2P7aShHjU376FMABKEqeFUia5XrhxfCKHbLvKvT4hc6LKspYTBAmqT2qvefHuLyk2Nh3LgQRXyodWK",
  "key39": "3m213M3xcqHvvJzBADQnW2iBy7npeVXB7LmNLmNDAjv2CcaEYLPaAvqgypyiYKV7FgnMMxy7R2wdVh688wq1aSXJ",
  "key40": "4KfGA48idiVv4M1oBoNSAtK8ZfLbRj2ryjztA2i8LAt45SF8FP8pdemY1DyoWutjcyJjAMQBMXttupyKoPBiyE9z",
  "key41": "49fY7kWYjqPLKR2WVrRrpcgcEWhsRxV1E8Ai4NxLcBEzkXYYtJVVfqPJi4iDFDgjAVrnUHc4FS6hg4ESRkLWxkrZ",
  "key42": "5oyNLSji8knPq3k7nVJZfQ3k2WR6eTorcGfVvLJ6McayVqqH3uj6hZt8wXaey71bHkn2X7KHDkYAw8wTTfjDk2Av",
  "key43": "5XSY19r1wMxD5zBhzunpW8tDz9Zhbca7qSDCTigySDsvACSYTCAGgQTwCGSMpSGPp4SB8LAnMTg5gxGLetyt4gd7",
  "key44": "4xceh9KP24o7CgpSVUzvkXR6DH2BoHYcDHCRF6Ne4K6dwNk8oHi5ZNJ48hvodXjQ5dEbNLdtyDXtCnni5CTJpEBH"
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
