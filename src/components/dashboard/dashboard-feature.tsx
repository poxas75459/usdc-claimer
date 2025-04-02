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
    "59AF6Hp3cuYCppoKzZs5iJhN42mrVBUv3obnyoAL3WW3WGmr32F3Aawp1o4CjUFLZHtdikaF4uHxCHdbAnYFPsku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DHG97njZTSe6rxTuoyiZmCRS8qHhndrAmCZMVSigAtwoGySphyeM6txahQAxvmsy7DFHvYHkKJ6AZ2NagGhhUL7",
  "key1": "4ynt3Ukz9mjrLHEnCg15LWtH1RYWfJrfTbrDEKupbw426fXPwEKW7ZPmz7iU97gk5vsyP3SLsA29GrviD9Kcwccu",
  "key2": "29Y2qpUchaLZyAmVMgQ3VUejztH1vJo3rpv4WtdSUzH5iV4oHdeQSWKPH6bX2JEWmzYa63fDeCxxnVNoC1LdRNZf",
  "key3": "5S1D87R5WDwKjkQWzf1mGaXMgkvTRAaxepK155RVSmML3g6LGtk9k2mSA8t6PnrAFLUWfaXPd8qPiGo2VtpFhhaD",
  "key4": "3nJB1Rn4wNo7zQvMnww8HXHRqPKRL4iahb4oRnrhHvSdyS3EWZjPbiYeZazYys3wpzaE8A1g71Jtis1bdtpq5u3p",
  "key5": "3RS7CK7XzNKBPH1vE2S3cJNkFTu8awHGRivyQfpZm7Li48jzKZesq77tcxmHqchQy1FNqExYZXTbZcXh593YsbJk",
  "key6": "4Sk6tdZQdpasQWGjpLc8q57E5Lv2kzzJwZKZcz4X5TgyWmxwqXNi35vfPq91RT1vPgLMTxHrKwZmHQvaAoMbrmjJ",
  "key7": "2gBL41ibU5MZQwmrHpQc4Bw3rhWSVE3tuH7y4KPrqeCm3En2pWEc5whAHoUgf17TYusDFHQwXnV6kX2xpmpPciQa",
  "key8": "5Yteij2zYxxzYZywDbg74Nv7FwyQVAuy2wSiuW1TvqkdFjCg5eeMTHc9iVXzkDPCAaAiATVhsmBHnacfZw33cooS",
  "key9": "2YWWSjaqbAcPk3oPXkVuzzEHzsgz1nsFkcW7wktZqcz4KmBPqxADCViqtgHf7bQtr4BAVRSQfk6nGwUktPvmqfo7",
  "key10": "5wzf84u3yDyDYuXQwRvUwHMAc8djVbVQQG3gpivxSWchroCWYiRuUjNdrdzrJwfxnDe2y3KKVpzm1XYxQLmoApz9",
  "key11": "bXPeQNGWJwoaHYYXVRj97gFMp4S4hfvz6W8VkjUGF7bTPcv5vYTKrwwAKHQDQ4y3aThLg6NPSHNJHreaP56U92K",
  "key12": "3t3sdyWHgCN6L87dUHKBBfPadKsvooGPvouyn8y9EkZ5A2Fc9Y2HNzaAzBNJ4ftRFYuWAPmSqoUxBbbYrxaemUeX",
  "key13": "5oCk1FB4L2J2P6Ve5eryT6truzqcWvb8vk5MhKapNScWDtyQZ7L4GCBR5FM7qG7GUeqmpuRH5fDxMVSSMoSRXhuu",
  "key14": "466NfmV4pi1kWintNxeLCntyRNUkN3DuDRp7VY9KYy11jKVbYRHmmqNrAoQKcNJcNSiTwo3TtGtjSa4hrqXs3Hob",
  "key15": "2uoAzUwGVL5NPY1UGD3mJ6hKvp28mcaHVhhJSYyj6u6b43pvfFpmp1UZKCxiLbqr5ZpARAwoMXvd4GwzU9h6DYFk",
  "key16": "4FLnQPpaPJd95ViXFoXqVNkqoN4Y2i2JG81hCqXst3qhCvA87YSZkhHs3VuT17Kq8YMprhJqBN3x9Tztegfe6qzN",
  "key17": "5t9XSa4ha2xEfHW18VitPAZ9Cyjrdy9jrDSkPqLWqRsiTMPPV6tkJAH2tyyAv5nKEpXC37k22n5oZVP4TW2hQwq4",
  "key18": "4WFNdHXVtoUEtRZ2PYXruws5XcniYeLKCbWzXse5aqnQxyGBS1bSWLTwh3AcbA6DQNrY1xxRZYCwLtSRHFrPZWLd",
  "key19": "335qDtHY51bZERc3Qk9VCyMtLVNcFK9vNoUZuE5Qi1GZHN4Mg7x73AVtWgb7YT7psibg9c3Goxq6GvvDXw8uWJaS",
  "key20": "BchyygQivUfyyee26fAPGdKugeb8j7fp3k3uK1iC2Vu6AwnVuB98tyeAnu5MqdJtQKmw5gifdTGTd3iwbaoFJCm",
  "key21": "5TTF9srwmjfr7x2QCvgJdh7HBiURJEADMPmV2x2AWzk2CFXdFEc88gs4q7G95aGZv1izb772oSYJv7zWdJveweNT",
  "key22": "51zX2bhkzbsWFjTZHDXqibSBCfWyT2RkNoxY6sus1AAoC22sELGTyMqCdUEemUYJXa9L9QxDsZZ8zS8JTqPjFcYz",
  "key23": "36KbWBkTqmFTx4vBqbYrjG45S4ejorsgKU81uqpBVaSbioYcdfHpB3YJi7z6zTgf2miWScqiyvymfZv2QdyDWTnQ",
  "key24": "3benZfdEe5TzmVnRLCuXbjsWPf86JVeHUsDEPLA7jXV8NowmKa81JxTGs3XVauVRMREFcBmiw3L9fbR8K1XRMM1z",
  "key25": "5XXnTax6ozTGqFzZyawimqVN7y9JpJLrMXy9wsw9z6t4A1WjaWPXDYQj2DFUR3hGBWdB7G1tRoB4e8M6Bab3dHqB",
  "key26": "174SJ8DwBtjERisVb6MqafqF7MkxGEuGn2vqJftmufMMn1j2YsKrZPzM8tySFWvd8oTtJKYzNPaZ14vRSQXw82b",
  "key27": "4jzjXpB9AxqT8VRhryTt7d5irjUw1Jqq42P9DMd7RAnk6qcR99WkTMJDpFbYvHQmBwN2dkVtmMv3mgGkVPJ7jHNj",
  "key28": "3rPC7oeD6fUHP4kmNodGxUuY7YpozFDfMqf3MCjgDZdr57PVXPFEotKPj2yWcnCg9suZZ1QRkagfzQJZNfapUSQv",
  "key29": "4u9TXGekPRWktoLN5bKAvLMo7Ac5qeSdYfv8QAJTHUtr4RjJn5SpSv7DGRcmFJBq9bUfCYngAUsZ5bQfkRTs9ZFo",
  "key30": "3RSyqWKMnycDQ48Bd2JNAJsCg53SfVDgVyHBucT23CGirL12eNkXn4ek5nFMBMh5GG7dF9zRbToBfpnuowPyeMs7",
  "key31": "af6iujTQ1aDZp65v2WB5WydGpjWoUsYYxmNmw2R47ZHHBBk8uhk5sCSPRTDNqraouVTidsxDz7Ure6qxhgQ7WSc",
  "key32": "2spkpTuyyGAd74ZXLGEJvmVaWkCWA3MfsJi5p4bybgdGNc2ErWQfJdamVDrgWfrLabYykr3dx4RqRn1gSR97ekgk",
  "key33": "3LG8zNR4L3EkMtFL4w68jKQbrF36zaJNFB9EqGg6ZPKeVGtJExBy9Txnwci1sCCeAoKCqroH3NNcwh17fRcSoi3M",
  "key34": "5swMEWiAJYqWA6PUbEdy3zbpLgWcMwpiMriTY9KNb699YsAqxkKYNkVTpgfQ7qWWeYrvyCgZyT3iaHT1sFzogptV",
  "key35": "8ir8V7Ug64WQhmp1jgAwmm7Sx2K5EDnffFKrL1sM1NNEufJkfzFKJ2LuuHx6VyzVF8Z4Ca3i9jxzQyJDuToCNDn",
  "key36": "3fV9YhNSqJrNdtZCr8ozg35pZNMCXmM68pjLM8ojUhmShYcK1yicAN3kkMn4oS5k42dz1uA8SahmiUZkADQXJvWK",
  "key37": "47hvF7Pm6WhgRUm5aZQhhQ3wjpx3UQAtsZUiZCNEzkJnSGtxS7KWrsYb8c2sYyTg6zwPnN5gshy4VLj8TGJPyAZe",
  "key38": "3Xr1v2DUxBLkvcmcSPfHKsAV5C9vgGVg7bbUQzkimEJUvP7vQh5qYyjpv2Q5Zh2sgKrv2anvvJKfG66AGbnHcUi8",
  "key39": "4EWRnM3mdXBRwE1Hm2jSvJRZ7W3xhLvJH5RhNcZLTGftNtwFHJZtWMg75M3Nbx2HZBbhzumV1LWpA2u6cLGCsN4E",
  "key40": "5bXkQv8TVEsArdYW562cTw4oauqovpLUDDiykrZxbPqnPES2wTvVDFUoVA9x5J51of2eDfsAQzmKjjxMfSFxFHpN",
  "key41": "A8ZAJrTayCYhYpqvj5zS1QuadmzPPD74yoTkVV733vB1vT5pRoMu89JtyzFA6QjZkozrkXmg6kCbvN4G8gY7w2M",
  "key42": "3fd8iW9gTivKnyk7uQAJwqtPQE3kirWWsYmbCoB3sp72AeDZ2BfsSuQsSGQgw6QDxehBvGzBJSBqpaV4h7FXgaw6",
  "key43": "V3Q5GXEM4cTYEAhLF9k1GfJ7BQE7t1j6dWmwHKHPuVBsuLmAB8haDwioE4Lj8rXD1pSXpo2x5NLDjk4YaNgZPZn",
  "key44": "66Qt5DrucNHPrrmxhDrEKXjh7MFXvpL69CYQhyk5xjZQuinrvrmgaxKXxSUPJLhadTYGhZUSb3xnjMZNBBSxkPhp",
  "key45": "2Znm9t6JzXgA26xuAvX5i6ZcGjpfewBNJ3omhCzzcNPZGE5y7rivLBWAAn9GPHLAXaPgEUaGDFP58kmASPdyXctZ",
  "key46": "2cqK8E99CXzQyNWDEs74k5wVN3Uz5X5s6hcHkyHZGexAoj5yRyKkLVRqRBbtvynU14Drq3rqWJYKfq3vokn5uaYy"
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
