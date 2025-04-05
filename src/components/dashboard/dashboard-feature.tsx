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
    "2iFHcJnZZzSg98zEBKTrxmoLHCEP3Lt23fyYPku78B2uvTYfmD6jQeEAhwS7282osSLG8jB3U2FaKjrbQLfcxcUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YWmGYvKyU8MfTWRymAFsMUoVRT2it1c4oAHBprkvH5hxY21i8a84GugjNWRKCVs7csDhos4W6mrKmgqRZ4y7Yp",
  "key1": "ANcr541WXvaP3AM1Lgp1LqrBm7M3fjZGajZdRzQLbbAVMTv3sJx2gGNb7kJ1u786eS4pnp7zYFz5Wuk4kRDFcD9",
  "key2": "2qUxnqCdfdcry9ykq7za4GvE92Qd1Co9gDezK5tWsP27x7Cz544kL3LMNBgSu5SAkxLsuF1nuAGnRcN6CEW1z2go",
  "key3": "2YqQM6ePYnMGAVe6fBYcy7TzFSH2GM2awrpqkPEoqRtZEjYgDLqokUiM9ftoREi7T1fjbPtm3872EGptHfrqsCs5",
  "key4": "3A3uyVwjGuFi5qq3EAhcdTvAZNAHJdnYWWp81LmKaPbJo2jUd7VVzbTjQDnE7UZw8giutfMRG94xt4JEEPU3QJko",
  "key5": "3MWRMLSAAohdQoQUpcYdPTJu4SpXe6hUaWPeMza7d8QS2h1L8E8JohLrf2FaLtMjm4ZiKXhNstSmw4x1Kp8E456E",
  "key6": "5GrxiWJazWGc3untfgBTkASZsUDfEdi7FvadRdzRe7EyxdW6EAdXQNW44WtPwm2XFXUqWB8A6q42Famg3a68oG3H",
  "key7": "4pfvtwQv2KkfyWNvRVETPoubnBkJckNJurrT1cfb6B4FHeaHyEkfT4YDhJCkpynjja9zTMdHenuQ9Z8Y6NCnsUk8",
  "key8": "5VBCdb1i7jHBCtP4Fn9rUZu3kKZ69Mtg6Koy3e2bS7kZGL2bDbBSebXhk9GF23KTsSSs9CY9NB1iV2z17omjrz4L",
  "key9": "5Z97QwLaYqSz1wqUujSJjmbLKraNx9vPRBPsF36Wm6XnbgLgtcx122iYw8WL3bPNw2ydYpf8P917ESrtrVVrsB45",
  "key10": "3SM1fjKNE1R8Uyjt9YakC2GmaWNLUS6afJtQztnbrodn4DZp8DvGZzgqMh2jbP3qAhqDxvV2j6JjPEBpA1MgqRVb",
  "key11": "2QY8Vx1RGMgvtieMQRb9AZXE1MNHqaURVS4e1Kc8gUJTc3Zj6DjVpiG6UUM5GyMd1jhXUYHVbNgjAeHAPgDtgyvp",
  "key12": "3Toynu5YUHpdoYVYFPQEt3FyR3AmAArE1ZQYrrqedJ2DWwC1map5dGSgpWJJBuEefS5WmUhSyzmMZsNXkaFHrjd6",
  "key13": "3YVb75FkFgu9AkZDdTVPKkmAhqwyUaEXrA1Rk2uAPDmNzu1BRGJreVvRAci8w2GcxdWyNy5k6Buzzh5NLofMGyGU",
  "key14": "2t8Umew9sQbTcveQAgZCiS6px9oTkYdEWRjPDs4nDFKKmAXx3NxumLa687cZmgkr6a3tv18jBiCTtS8L7VR3vNJT",
  "key15": "4LhtyKqCP3J7y3mGWbiG1oKdZY166KPyXChaCUc8GcuE3digrT2Zo2c6FtNEwNcqC9Dzv9SQAU2QyzYWyjMk9vkY",
  "key16": "4YfAV7mfD7WjXMDV6775vWxwri1vihnD6skLcFsTFj8WffyqAaFRxk4L9ossZVh4ex1BAofAvQFfbTC3FCTHiC4q",
  "key17": "41NVpQsYDBAUdigoZFDpNBFRCqjy5vk5zjodFEMCkZ3HXZvLRh3wVAjdrYoDZmiWMRiknqTvY8JFWk83bpcCBqPt",
  "key18": "53swhUrvHPF6ei8d6XTVYnAYKBib66wy9JbLZbuXoS2qyznupzEExBLWF3ZaQS4ZSyP51mst6nPqWGfhx7joHovZ",
  "key19": "2ZtyvJHcHK46AUncgSWhPf5ffRMxc9c7BbvFtnY4MWYuQBgsuFrcT9ka6Gvzucc1dqn7GP5bnXZ8H9mbJcKVSfFF",
  "key20": "38aNkURcxVFhf9BuDzEPxLVx7WHtDZasMuvXbnpZUsrNXoJsTu3ApLzgNq9UTFondp6doYkor7qKZg8MJqUtKkKc",
  "key21": "5r6kbXpc1BUaMjkumR3Q9h5oPG1uXRXEmDUmQknb9tzxFWV9syf6Q889rFHqMYpdUrfQtZQ2ZwYNTRvq1oksz2TW",
  "key22": "2iPiU6NZqNadWzjMG9XJEBDy9Gf4UeTw1AeYvRKYqVpaj6tFpQJ65QNtsa9cuVimWUbEPP3UCWXbzhN6MT54BiqJ",
  "key23": "5PZTpuciyeB4CziFqYEGmtSP12nm7tiqLnvcVGA3PZQZQJ99BNCD9PP3Hnhynw69oWNFbhWCFbJRq7XaLLNeuCN4",
  "key24": "2cE6Re4jnkEUmjhoCiPmW5v6oBVYT4TDXxwCkdcMx9Hzo9j9nPgq2jLkEif7xoem5M1E2wXiWG5k3ijG2XURwtBS",
  "key25": "5utPg1F4uGgPuZFwvdKWPVkw8h5jZF7AKYuK4KKHMBhQVKdw5oXPCoAasJLcfGGfKA6q9orV7bZdMsH1J3SVZb9L",
  "key26": "59VSoD1AoimwHhS3sQeJsf4zaycbmT4NFZ8i2eoFRmSmx2vg2ztggByfVYm9m21ZgFD6dYSA7BE11MkWGWnmgLvq",
  "key27": "4vvSMeMNiW49e9YkfePv6W4V2ok1JsXNnzr65mk9P2tVDKy5GEqmFJxnJv5ZbPAsozhcRjRoSvgeHTicJtCRjycF",
  "key28": "3XdudBNa8oT8foZ8emWnha4ufcnkskvhhRNBV3Z4EHoErbhauEqUvLZZ9DqTLvQkF7SRSJqHLK6vD3yLaMbtpZU9",
  "key29": "2pouLTULgtaAH8TvKG8shQHZfkCSh6NEHhzWayyRGKMpnaRuXdUZnP3DoDCojhUvJezD5xQuBWKgbQSTHybmY9fr",
  "key30": "36nFpLLsqA8sTJCab2ETDG848PVSNHdV4U6eUw1b7L4SCCyu6SfCTDNCsWSn2MnyUkULaaBPxympwj7QSbHztJiS",
  "key31": "3BvywpLYwBHkvx3mWf5TL8rycdb43sWYRLcUQupPWmpQEazAraFWVJtH4cQALeLmvhGV4SKUW2bhmwPrq8crM7jX",
  "key32": "iqje4aysFSCNts9Vk67xQmQyEvFNK3xrg5ynquDvRTidatSfmxjZMuUSnGBjHc77pbgrymDgLqsxkpGKyjGhb3z",
  "key33": "32mPJqsRcZVeRTrh9SPf8tMUZWZxwTKz2CzbvVez332aVM8yLNGDKPK83HHroXVyNJHtyjL44HpwpeL9NfH1yLmt",
  "key34": "2DZDqyQVBhG6mnpwQQetmWc5zDv48fdS14WLwDPGS48dATGVEkFBz6zcQ9kwqRj6R5UshGyohVFBWyVfrc3xjuT2",
  "key35": "5c2dsAut2yZdQube98edTsrNLJEQqBYSpr8Sai8gxNFA9FcS43bYdZ6D5o1yThk7uaGeZetjhJEAeuYHA4z9TLZX",
  "key36": "53xphdU7wFobvebWds3dhxQi63cNxEwsx8268q3B8YXyuMeNoS2zZiPNW75Spuw8EaRUi4AFQDEru3D9o9Xei3K",
  "key37": "4M7wuhM8Aj9UmBVA6aVoUQfX9RA6BqkYppMb9Xfzko923pD8LBmhBNeK9Cj8teKtC72t2B2P5ijDteCAHzsAGMao",
  "key38": "5EwkBTGcN9wkMbd7xdLKeJrEgay7noZLnCvM9tHT6JC38pVzdjXH9KEKbD3y9V7Fmw8EMhYoSZccrWFCVint9NNS",
  "key39": "4FttaWmfCmR7JqXUtdWjbmSsVma2ZLiA7euhLvZDeDonEU4qsWiLzvce43yaT1KkXscwgMvNQx3tRss4w3EPh7v1",
  "key40": "2aK5xn2svJGgdgYzKinAtPESxCYnPZkWosdwABc9pqiCUsgAe5QfC1SrFhX9s7uaEVu3yxHj4rogS3hDAbB1YUu8",
  "key41": "o95sm22149ah8L1GZ5Sm7b51xPUYWwg9QA7FykhCxqGzbqV93HmmLRLLTk7QPHdpDrAf5PTGSDSNwtgDXMgTpnu",
  "key42": "5prBNhYQWfWQahhwF43hD9b1jgigyLpDqR1ZiDg6qHwMjqpcd6fSL2nUABasTsu5eitveJ8nH1Yb85KWxhDbUK49"
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
