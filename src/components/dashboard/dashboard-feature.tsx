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
    "3wtBcfyX5nWPsFw3a2rhinQhCCH2FBLm6nckDjpmWL1Azv7QSnNQNbEMyFU6ZmevDstZayTQYo21eZijvQckCPrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgGEXRsn5csCvGfC5tW5QCzaFosisPBo7zHWB9UxKqkmKAFk6aYMxTmwpjNzF67zZhnyEigFYReeJCZuwkAz1di",
  "key1": "46yRk3hNv49pLpdjnjJ1rTqKcBwUa72TgDfGJBoSg8oYurkgrmhowtvDSqSHNQG94zwB8WHzqhBR7FzAHe3pdmWs",
  "key2": "3eJBbsUJBe2ay6ZAfpnqZ9KPtttdwkSR6xtfHFoii1hEgHyN74HtYifpXysN2BCVTDqtt1yTZGpCRLASJnGktMoa",
  "key3": "2WGwjfrUrgeBmWM4BABrFrr9Zqm8mE87MKGGaATEjYaAasNESKiTQ19HXZPYprrk9N7Qb64oSyuK7K5oPqeN7QBg",
  "key4": "5qP6CW5X623kCdtRKAEUniEKzAz3RxoXYsVrgtvNK6QKCPYS3LNYk1nhRM52oaigXHQc3e5QEPfbqDNkYaCPH7Db",
  "key5": "Eg6uGZB9JKXkDrHXqBsj4cUdDdPYJDCxAfJ1xFdPkMTwJum9KWPafm68xziHir1tLgJ5HKJWB7ex9PjRMjDFNiP",
  "key6": "4HYTeS9UDeLrXanaMiZVjjkzthME5MkRYnnDbY2GgguTX9bSzExPix7g8E4eGdTwMn5VZJa2KNn1TMqemf9HXdyJ",
  "key7": "2vVF9GGZyXg68FxUrxWk4AR45KGnERmY33aYHzNTBatW4v1MTNVfSetVJi6J7nnqvmuDojzix4Xmfk7Cur6ZEzDi",
  "key8": "4pqKShoyorK4qcwUEEQNG1CVfCUtB9F7br5rbVucaNQbRnenMiZ8bEGVw2yS54dH7VJBhVcDHT1ZyGRPdHMemNMT",
  "key9": "U3fBCXuyXA5fHERJ3tNwrNhnLerSeNJbqia3FYbXRoCRngTAj5c7UbnC7eecn5jWh61vESCfqMWfGeCWJrD7yVz",
  "key10": "5u7niBGt1zVjss8fqA3PFf5Bihgkg5t7L9P32hMjMVqH7Srpry3SzKzXBt6iYf7ro1wDq9inFSLL8ig3M19Ruu6M",
  "key11": "2FdNCH4jeEBcSF3afxa2Q7bNbHP6iJuNn59ZrtqEmzB8sDVxrVZdenkLdc7nS6mmxJwikEsFw92Gw4HbB77nxqjw",
  "key12": "445JVcT3nFFWCt9Bwcey9D9KNvutrEXoEYstbDc65wqH8ajKH6JqRwmUJV7Gu5i4JTA5RVf2pKsPrpmijUHwAY9w",
  "key13": "2oJFWzz8dywfEvKtKJYauCRYc1zcKcQrKjnkjUG85jDKDKmud3BYePW6xes2mBXKR9TdiC6aG55puwZjh3SAqMnz",
  "key14": "3C6v4gbuLCYvLP3VzS76WeWtGk3WGnXRx2hhk9v27rFuEQ857ZGgQ3A2Y9nracMwZvuDcVe6VW8L1Lujn7N1m5ui",
  "key15": "mJWbkwPrBRf1eGddjFQqtLwHzpfcVPWb9J4aN98UQ61BH5YNcEGvwAUVDEVCMsgMhBFzpPPm2k7VBTufhtqX3V1",
  "key16": "H7xMktM3Wa1w9qAkjZj9XNPe5KLTAxn87nMFRDLiKECtCuZAY6FgtvjRvfpQTYtzwHMjRfGRz2bHTEVcrKdKk7k",
  "key17": "3BaYj22o5XGKhoyV3StGGMtv1bhSD9peC6NVkZo23c8HgZKe35QCBvALAwm9ZGwBuqMiPQZM3vPdXxksL3oVNvxv",
  "key18": "2T4EDy8Htv6MncZhBX2V4w2dcFKhDzHm8rvpsLDbXUdUcWYZwSMUKwgYzSLxPmbPxxietm3YuZg12jxNGcNLwFE3",
  "key19": "TtFefMWFyXVsNZwZoZagwhTy8rs6xq7k4a2h1Z6rMe2NnNTeFKVEb2WmztzezdB8PvdRBHUYZGN9NHawegUJ5AB",
  "key20": "3LGLJtkNDUTamHwUWPYSnCj2bGzisqZfv1mwf94sz6dhagVGHC1fAM416nNiE1soRvHq2vNTrySnDtsNo1fHD2R8",
  "key21": "2uQr5PtFRPX7tXQJWG1e2hDfKcaAukMUpMm6jbCA7i5wXnBq5JKVRMUZgiTtT53SuPDEthA4G18B1ohMKwBCD54G",
  "key22": "4w7Ypg8jPvFpSuHQTZwFPnY1GkaSewpc1t1WhfzoexPcMM3XYPzYbGBwLy7w6ddpkxGb3v7QXsbZ9FozpHaSMEVa",
  "key23": "Cmj4brmM2VoickMBmZMCs9WP1vkNvxbeEBQrdqUdBzTpJ3Wxtq3niaJjxVZzSttuK6mue5TYfddRwM9eajSW9M6",
  "key24": "5y4zfJHU6CsCSKUkxUiQ8tMnYfE9NZ5BQgxj9xm5foEMXydLsSenJTRtiTiR3AXq34tUC3KojpbrtngWCbvr3gUp",
  "key25": "2Ri4aFghHCV4YQgWCAc67S2mD6X5YGEEMHzFqFKGi4eWzDj2UnrXEKd9J6E8aNd72nzwwWyJFmgJ8ZGsWGVsAYvZ",
  "key26": "5kffbequy5uiprUWMWv197CWZwKDd8fgobhwUCBbV6P9V1VTQaq79nKWMhBxKG4AVJZGwHWH1AKRxv5cc1CVrfoV",
  "key27": "5KnGp62UAqRMNMdRYqNUijUdHRq4EcRJJGMduTdjZf5QhEUiL4LTNuSFzR9fLKbEn8ZFry1rf7fqxs4YAArUtii8",
  "key28": "32JFgAUXuY7Lts4pFLA5pBiMZHM9SLpvJ8GV15PTUwEzrHJKWtYKx85bvjgoW4gDv6tMHBpmBfqF8SjBxUJX3nhJ",
  "key29": "24Nb6bU5co86PJjzNe329od3whBeMAGmd6QiaPaZatEc2KcKvxvR5VJPKn8YqqqRwgsHodcFLRNPEssxfwsVdANN",
  "key30": "2H9ZGmvQiYb2UHMmjEYySVhPiiAjFSc9sthhTfjLnygRiqdbHunHnxffbVLy3LydieJ3D91goFRyC5KdhYbYKJde",
  "key31": "2sMNFoHC57P5phE8Xx2E6eaqiBNiHPvPN1XPoP49qj3ja1WwWKz7CFm4sueEs9CS4BWeW6zjGahfiKuJ4e2xjwpr",
  "key32": "3Cyexg7tGN5hK5GHegUdWEHws3givswav7eHB2tid2DvgX86bvEckoWazJyDSb3EbYEZWC462sT8WCmGVXDbHZQn",
  "key33": "38KNCS7gxQGMAg2qKWcvgvz3nHkZScribJDMT3rZBi2a7hzyPBaQy5FwiPunCdrs3nZiKfjs8yVuE8kyAewc7LLq"
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
