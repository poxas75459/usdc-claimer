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
    "Wn8kgvG9yJYVr58PYiMTyYwpX3Ap1in9WHy9JdyBG7Pf9z9Qm8kC9wpLqt388pAydu2LvpVAbgbH76HFSR1rFew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsUS7rjrNE2dATJtso7Uo6nUwztK8ERjmda9TmVbB2JNr4UQUP18o7hrQjsdmSAiJDCVnWuJ9xwva4oMHZsKsj3",
  "key1": "48Jm6UZwehv6WK6Rox1JX6bLaJihEPrYTtCWT9fNSejirVNepVD2gL6yHonmue7FGkp7yDho1BLEq84WHGqaq4B5",
  "key2": "2LZxXBVSjaFxR2emYFLdWtcnj88eFTqh6Jw7L5Gqtq5hUzxvYGo4rx9aLCF1SNw6J6vi2SmVDAyh1NqhALyCKTFC",
  "key3": "4vJq6mCM84TRUkSwHSdv8iryWDbakFm8GD7mYx1CYyovApsv4xuMyh1v75HrXTbA9WiMJR2yXeFWAw2GDLjezfPd",
  "key4": "M4iU1UBm7UA9YyWgAPMRcmZJZTpsWwJrdFxagTCkx1ucCM9qDcrXA1jRsNeA569LSvf2NiuENynD3m8ZmyVaorx",
  "key5": "pN57V5M4DAvvc9xgzTiLxA6Dv1jeXsbejuCo5aYYCDfWjyd4yZv1KCoPNDnmYcVLdpXnKQ2j79ewk91SKNZvFkS",
  "key6": "3BSQotFKGG84g5mF2D3rkfaxZNygCNphUd1Aa5NkYcx22vHHfgSyMvwRbtA2HgWq4nd5vkCMA1HgRo8rebgc72tu",
  "key7": "4cz5nepNWXT8J2HcEbL89Fogi9tyVob32hVBDQGphCPDbiDoLve6wPBwznhWaJUdSfjLpUn6x4CeHezDjCgSMWA6",
  "key8": "wAQ3XY79yCMjkk2gtYjyh8NtRdYafJJDyiZVQbhZuPHFQFA4LdeWSrpQY5sVfFeJgbJTWtdBHwu68PSt5GVbgED",
  "key9": "3pdZr56Vhua8qRgaPkLyVrmyRE3sPyaKB38kREsKZPG982bQboT6pE1Gh2B6TmN3fL2PY23xjccFK3ika5fwejc3",
  "key10": "3dVrWqSBQVrB2gAr5MnHbo7rVLS3k1wYgQrBLbkYFgne8vojQ7FuJFJEYefiukvQ4Cz3PWq32geaxd3k46k5qF2T",
  "key11": "2aAH6GaCBuFXZSZ5zwqdGHSRdsxm9ZHvBsnGGNNnyLZsNswTKhoZP7rLiBgDoeKXCEQFpjnUqXHz4P8AQ2ewCzfB",
  "key12": "42nxzqU2tQ9WfCFiCbtJoc27Ej7APYn7yYDrtySGhayJKH2Gsf46eNk3V8pStxYsdXVVn6pq77kYA2a2ZVDGCm46",
  "key13": "a7mqBX7ihJBs2TQuVn7nMXQYNJTGYHAa89vqS4TenMtXRs2c8uy7tvVkkoTCUwPrxxoPS3KWqq1DwfDX3r8xMMe",
  "key14": "5gjX9iJ4oahBSEtR75X5VSLzLfYJ2nxbGCVjvB4DLZDg28wBbvPtrb7h8J4VAK5fHMMAKmU6zADSQfFfNWwwfNbA",
  "key15": "4frenXc9XZb5C4daDVnoBaU4VMpBxmgJYqdN556SBjxiwvnyUvXHojqatZ38JAb6VzGxpTauMeTW4U4tLauxdAJF",
  "key16": "46vCufTFxQxjCqJLehebES9MWwcQYYfydhQZfrSsNGz9GwLJbkxpFKPcf24PDwC3ZDK7CsJJsM5Apq3Wya1A2nRo",
  "key17": "vxP6bDT7CD5uqM8NA6M14jsS7qYeajWYYSpqCXPyLgcjv8ie9k8X7xPGUnVPfC5gZStnPqKxRukxKpjqeU8wvTE",
  "key18": "54H984xaotvjWJaA1oAEwPecpaDBYpCQTgE4NAdBW2whZMCS1VfWAqNQdmKr5FHhCnpp4Sec5WkuJpkX9ReouzDf",
  "key19": "3KdDyf55THVde3exDF1u9m4AxCRiuDNoax1RaMBTMhB48PpNBnLqwGg2NKfSQP4BCTncgLrnynsqbbboNv7RTk5M",
  "key20": "3XhxGD4sZ1ruu7gShQgytsiHws7E9C2nfHx62Z7n4KU4YQg5zpahVgNK5wnsVQq628hqgrtS7gDSKfGMsh567Wtt",
  "key21": "2WQ7Uhga665PNXwdFWkQkdthwk12xqVqLUtnfES1zYKfERrqPHJHccz3YAqeRJGaeVe5uE7bFY6xcKgZxBGPURWs",
  "key22": "5qHp3EFSJW3Z8EYkEMyySejLvs7WC5gfsDGJcqk8qSzdTnbXmQ5oY8ccHV4nCGxAr5EF8PP62SsnfkZJfF7ChXF4",
  "key23": "4Px3jiswHrsLSUDoNLQoXQkzRtVZKmwaYxkXP8zxLanSb86CHkrGq4KfP8t9RiGtbAapncV5kaQbVouuWRSWuKUL",
  "key24": "3fATn4MtFDu5sfkzvFGobStvnwuzPfkwxNodG5Nd5Qhx8hSWscrnvumFByct8utUWDxXaq3CGKvyS4rsAP9S75qR",
  "key25": "5TG3kFNEDPBZbc3WkDsp8Yxq9ZQrWKXkDTsNMbaX8etXU92sBthz3c38YPqdWhd9qb7CCNrvnrFAtHdesED2o1nW",
  "key26": "2AEoQKMiWhfBcfPnujrqEJdSVGN7TbJRPGUU9RykttVG2C65TETXMxPx46NTRLPurQPCZFCiMCEEGDNZ92Y7LzXe",
  "key27": "4hjXzmwC3ZSBnanChJARQNT4uTAkfdC6pGdSBRXssGPN7vBT2P3UvhNwbikWcbau5qqwisuH35Yc7wLVdxcNC4bx",
  "key28": "3roMfERi888Kg9QxTKnXiWqvR88DS5d69x6hJ6jgeNW67g5A5UQL4Td7DHPrf1ANWfpS8XijTpJvjKunKtLwZWP1",
  "key29": "3BCo98V59kbmErWdHABa5zWavMZmMkicAcYyW6kUjeFHkfH7Tucm3mwXop8X6E7MFBc2zJuvWptjyE5fkcSezLz7",
  "key30": "3iVnjaFzmzggNm5oPNFtjg4cigooXu2d22r5BuFHK24otDABWQs5pGDbWaW6T5YkR3rEapmqYxUsHED8rNA6xHD1",
  "key31": "hsreZ4Yh74JH7tvqZRqgegGD3up6VsufpTSyQtv2w3tL4ugX47k9z4LSe8hm6qNmvSBX6ixQQPA7aeASgfRapvv",
  "key32": "2fHW8mUuqk1f5H3nJic6KzHABRwx4JxGJusF3Yo2JHLKXiD3t3VdHF3j5uEhvEbPBbD8s9nfBxa4xuWxXiMaD8TT",
  "key33": "45jExm6MypjEcTTyJEckd65KbQBiYWpj9qvyqMngvssjoT386GfJidVpgw2zZKqhF39KU6ivH28RV6GQmkoTnV1Z",
  "key34": "26f8wwPACoDvzyrEUhSM2LEsyV2tnw4uQExSA8Ea2oyHs3UsisQt4eFBr6PYq6WMq3FjgXGR4YRzFD2aFrhRTT5C",
  "key35": "63YBUvNZNm2Y12D8G7EEVLR2kPg6fFJK1V6eLLtJAv4BUDXTTWbkqttGYWAKnT9b35wk14mPLDWwipybMV2KevYY",
  "key36": "3U8VSGGM1cwTV9TM1QyL7D7imHHLn6hWyiYACYcoqnYqF8rcCVMQ8HnoH5oTkniSY7t5t6p7eECQVdvdiNgH96B7",
  "key37": "B5wgtKbnY7fYLK4pNUmxPcFoBaVPC1btgKBG2KJ3NR3dGEyQeUtQkoBFC1BPEmp5H4C8LbcDDrwNEJPQcBLKJS6",
  "key38": "4A712byqynChha73K25NqfsQtLaLrMS8enaiDpwF2Xm4evSHqDqvSNrasszio3CTYREyuQrB4XkDzpefFjEW1dWF",
  "key39": "2PrSm4kV1PYyTbPvrG34hdp7DPySDQxWsYQN1ijF3ckPhmQgPtFzM8zQmufubrrwh5H9YPbndyNnz41N9gDaXXs1",
  "key40": "3PwxEwm5W1DRYiqtZ1KiyGySXxrqoLcBbZo58mgm6PiBzv5r8GiViqZ27tvD8RM7BW9hMHNfK3i2qqjmEQTifi4j",
  "key41": "4YS8AG8T5EEbHjGdikDMVmqMj4niDXmGKAahwGXtGBdfVJL6bi6ouEvpbrWyJRWe8gDH2Kdzta71okTh7PDSziak",
  "key42": "4WQ1s1MDBg1MdSzZv83tBKxYhjWJkyuvDmtDr8rd2vXcUdbFRkuWDVqQuZDfnR37nbe2xHBM3AFc84HQKHVgYRUt",
  "key43": "3mjVw3ebidY5d1cBnLHyyoUpsW45iCLfz2U64oiBY7zN9ncutGs5HyjpQg6LgajH5Xn78PNX3RnGjXGzi6Sn8Q9a",
  "key44": "5eQKdRYVfBwLF1VigjPu6WMSzpNW69eC3E9rgFhx8TDy1qzp7jD6EKTHF7nqjhvDhPXU6xAcBJUQZzWoZcDquzcB",
  "key45": "uqpsfL2ewm1jWrXCg32Uj4CGUEDWFBYUQMTLhwANNkDi1iqovbjCvhbfn28o3x6jA55LMZwLXuv5fNKPXhwe38y",
  "key46": "41zQ3EjDSgELmP3BUZmvchXiHzAy41gUEkoZuoAAR5jQSUY2K5psKmFg2Tx2rQtGaS3h5YjSHfMR8iUaQRihGZGN",
  "key47": "3yViDaHLGd14GFczmDhgdAdidMCngNsinWk86oZBpCSxdv9sMSzB8isyqu4m2uuxxGcW6CPERvzPFmEBaYAdZajX",
  "key48": "3MDwXjeALiwG7pGXTiEt2erUrriGNzj9GGiXzmkywm9Mm7CkvvPRS6yztUoGxDNEKfryF6U4X2S7Vq6nHi4geMjn",
  "key49": "2Aaz7tZgg5t3A73CUKFK5YV7mCF9aroTeoy9XFysfGVMJhZzRSggW74hfn9eFeHtK4s7rP9XMmkKQdK6rf2ocWBm"
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
