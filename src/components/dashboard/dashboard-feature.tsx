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
    "3wFgEimV4mkyZpRYyZh4QbZXjMaKpXB46JGL9B6rV8rRVB4LZFkQsYr28y8eTsdyVFPL2p2obNkqKHEqtWQuZznq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c8tJcjgaESkGUACC1httFoYVVzdTGXC6kNRjZ77abFsc8czBgbugXpm24mjVQMt7TCqW3hws7Q4YGeF1obAXgZU",
  "key1": "4GzkPkyjKdUL6pTQqs77f3fPjzavqbTWVhaACTPDKyyUfuUGqm9xJnJ9ZrRYkomFFmTyEqTByTXo8J6JKzVDnYQt",
  "key2": "323fs7aythkAKXDQPdsJZRovfWwXhNsLnBTZ59F3jMQHc3uhM7ph9RvwELxgqTW2Z3ZcsghXEt1GA5DGrcc4Sn9K",
  "key3": "2giNDRpiv9nypY3shJDRrdZeEE8pTJf542yNQ6soBbUdx3yF7xS2e2gNoKg9BsZfCUKCEbQd5hrDwFpuzVx1LXgY",
  "key4": "3vMr6s2VmbmPekWy4UjC4EHNfEATBM4wX59wDTzgmU8CBDLLLBavg6uQnwqvLvxmS2WM2fJMSKPea2RNsRA2ZH1V",
  "key5": "5Mg3KCcucQXHR9LKPhzyF5gho79RJaD7PKv4wweKyVsJm7r5oWByCEDRJ9drMYxyJWWcUY9vmqD2Nr2E1ujkyonE",
  "key6": "3w1FcaP3DRfXaxN6J3u2GuMRUJ3tn4uQAMGDG4ti7pvX1pBfpkxfhSxVGnSWnjd7i3LfCLU3wfpnX3jjSfmxcYi3",
  "key7": "4noCPEk3eqDbL64R223hTpmAtVXuqMfWHjtZ5qjZGhEHhTnqkyuBvy5gbrQ16oi9yLydAmRrG6RsQ6wjuDGZ1ZUc",
  "key8": "25z7v6mQjG26eQebBHt99W31MjFWa36pT9r8pcEFsgx1afCYntX7qpETECpdn3yPE8kiRhMLsE1eczcmXcnF9BJ2",
  "key9": "4d6CdpdEME4HNVkkYEh8LGWQfEV28w1jazELWAYg57Gd9ZNZc62D8eGJ4WHepGxwAYEepedBmGudMmmoNXfzJKaZ",
  "key10": "2ddZQmz4MUJSSpQ2zcsgG28ZtampbEXpUVjhVDJk63V7aGP2nzP5iGHx5G9xshL5uUUEsYoC2Qca83H1uDXCjgt8",
  "key11": "mtNmGxL6Nx433pJEwBVyzzgLKQyjgmwnF18hryoGGttA9evCurxQtCK3JdEqbdymKEXFs3TTDYJ7mEQyJKgxNUn",
  "key12": "4RRZZoZzcRKxfbEPkp3Z15ituDSmdxLV76RYsUyNXqCLcoV1kwipUDSEzsfzyDeQeRCqstTEvBiH947qFQey37KY",
  "key13": "2t4x3WSurC628iBVsUQabkY3KPB7NeTX8h1gfmQ3qdwiRpDi93vEBm6zUjrLVsmxWWMfWcTsSb5by9CBUYyhWY4m",
  "key14": "2MnU9NRkeLuyE2FUPYihCmXmHCmp3TA9zycTCrKZsV95Y9i58477HdkhedxsV53cEdwvfW7D6kptXM94L1CBYpWa",
  "key15": "5GXLxRCfuiUmiqxisNSUCtSQiT84LaXu9soUXEnGAMMVTCbG9hwa9qUkvBbWvvR753E8aBZxJqkdg4wb2vsqjzLV",
  "key16": "sSprcAKWPh6pPwTSjC5f9VUie614j8zfuWjj4v1MB9W5ZPV6evAVDZaKDJefEVDkAJRdZyfc9rsKUBB6ac2uzhs",
  "key17": "2WwCSFMwG5Br9xbufpyTfmrbR1KQ73U5jrNb7XRDuCWivCLDakuCdebebpY3TSg9YYeVq7iqQ6F2qLSTmcGx2jEy",
  "key18": "gec9uq1m3SeVy5ZhqVifeAhrUKLhkEudRJHrUaHicqjPifNUijAd3m2rhQAtbgeAjSGa4d5cR3F3iw6k2P3VzdP",
  "key19": "4wifNiaJFJVFCktN8HAzirYLD5dteMMcrup9ryG7J3ak9P8Rjv69w9NGpyzaxCcfEsWCm55gri7HwWBnHjxLhow",
  "key20": "Vg4JMmCJvXf1gZD4CN6BW15gFt72Yu5XfxztHdoMCupFWCu7TGLX99mAryjmF43oiqwSoYV1kehyyPd6MpGbZBt",
  "key21": "2wSUjdxQ6PxfRWgvVc1ehcprp6JX5g6TrKEMALf7PqZMZ5t3YGSWkxW9q9fiqzwo2vPVujRudaHrzRzKPM43icum",
  "key22": "2ce3Eqkc7XAkTkoKb23U6Lt4JMLVyCekZbs9qHBNmhk52y6Ri95uy2pjTovPnsJqUPb5P7v9rARTwxqf91Bvzrva",
  "key23": "67Dv6byKYuf3z6hnroDuniKGLWzcGFLsRpP7BoDCvx4p9xaDuUj7cekgvdHdi3fe9cNeLnJdQTwkwpBhfZca56Nm",
  "key24": "5nQsJknKTRLTXBRJLViG4msrfkjp6ATZEqVcux2mbTSVkVh8tETBsuPfHZbjwvfbW8ZytAQqTdnbERRiQEqk7MBb",
  "key25": "aRz8A9whoBXEkhRGjUBxd6pzxbigjVD8uYM71zhJo72xH8SAtD5X5ofjAzvmvXpkAEvn5GPfE7J8Egu7skX8SDT",
  "key26": "2i37wDLvbC25ajx9roPRGdwCdcC64iteDMvPZWd7hMk2Fhp2qafbiGKuV56GSyMRb5KVFPragFC2bztK3ufnVLn3",
  "key27": "32JBXTkeK3FJtbi9V37m1riFry4pRzVSzdoeURXYCN63GM3cqhGAt1ZyqyEUFt5ChAu68Enj9nWUbZ1PodUF7Msx",
  "key28": "2TE9C1ftKgg1niHZZcidZx1VMiNtecqWTvY69wq7YoemiFSWgQtpvwHdoE8VeqhmucwhhgJLELLXibTHvPxaLQ52",
  "key29": "oika31PwujcAgvnRZaRzVDLdNWEBzxZp1NfVf1zMgHzgKwzR38vsH45h5e8ci7zCXv483EjKGSDHwAupmTYzDqP",
  "key30": "5pGVtPW2epbg315nbEhRt9wL8LbzkfmZ4oLvdVJNdmy4j6MvASzuNk4WQ5ojxvvNLnjWLJAzNjkrBB9pSGNHzkPf",
  "key31": "4Bu8dXDaSq8fL7fu1KRuSoH2qxQkZEGEJppPuZX25XmVQsCcW6v68DTnBxBh3Q5aN5ikhxCp63om9bcghuMgyrFL",
  "key32": "47KbCiEmHN278nSB6fABNK7oiLt5eRqaQ5y2Z1HwJRwXjkdLRRkoDgaZMCPNsm2t7AgfUnP6dasSKrbbkVkuVQPx",
  "key33": "2cRiadcaQpF4W26S2JwsZwyQLdeTmWmbqjqUBAnPfkbxDmPVK8gKUPCs2EV8WeuYwNwkyrRWrYbwBDGCgLcHh9C5",
  "key34": "3o4py4ZhG9aiWEvB1V1HQ4aJ4bPVWoBCguTrtg5sZCF5A7PJk9USDJ5QwaiCVDFQ2YbDSR9o7FsKJNqYy8KKzaN2",
  "key35": "3PCMgLG7rbw8pKHuBMZjCfff3NdRSRkFwru2uL7K5EqFVd5nhho85s4qezLMa26WXY2EEd9wgYMmXgqdQctw59Cx",
  "key36": "4N9uhN9fzY7Y8e3mHhW27w8gZDRop3WeJgdoyAwLXS365vAqHhL9pbL23iMgG1PsqvXuu4XAPUzCqRT4yr6cvfvU",
  "key37": "2EgiHVeH6iVkLYJ6TahAzKoT3k5gysbKAw996Xx3SiDz4fCfyEeFSeVrPxiNDNtJZapQKtxRgjGbeJQKPw5XCtMJ",
  "key38": "35zZWcenjKs5eKMYxJz4KncDNDsBbrQFbMfmG3F8TGiidch7nZmU8EbPdcpn1rzsbBRpC9afAJqL2Eo4mtub7V2p",
  "key39": "nKc8Efh7uNenPDCpf3F8CY3oaJEaLBEpNKrUBj3z9HUHLDpkpZG1dJWDufkvkqCjFoQRNoS13LTWGBFk1ha3eHi",
  "key40": "58ZoTgH6NoCnkXXGhPfKvvQYVNGxy5vVjf5dj16tsNdpNYEUP26BGosHj7gG1VVaQbFhZFJSoGgmSupEAcCq186C",
  "key41": "2ZZqMnAKXyqchcMgdjSwh6CrSehYwRB119hSNVFaQQkFNKQvW7uwW4VHDTaCfkVjwPiwajHjbVbr8E4h38k2YxuZ",
  "key42": "5EVAUqgibU24fw6psgJ2vmL5YKpJAzySb92WmVa1924wDAiVDtPzGBmcSQdNdD6ULpAcSqSc4GZXBCJNSgkDzgyp",
  "key43": "HUuK7iTuLKi7icfPd2kD1e9LLGamTosiJQFwF71asHYaBxPBq8zMwFDx5Pb5ZE5neZVLgDKPk995TqjCFQaHvQr",
  "key44": "4YahCAtRXFXUf98XLEgoQStFvAKuTVSdToKhdi5opLWTwxwNhC35rua92mEM2SUpkHsTZPirBrawFMdanxuD2pkg"
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
